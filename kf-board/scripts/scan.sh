#!/usr/bin/env bash
# Scan all Dockerfiles under the kissflow-xg repo and rebuild data.js.
#
# Usage:
#   scripts/scan.sh                            # uses ~/GitHub/kf/app/kissflow-xg
#   scripts/scan.sh /path/to/kissflow-xg
#
# Requires: droast on PATH (or set DROAST=/path/to/droast), python3.
set -euo pipefail

ROOT="${1:-$HOME/GitHub/kf/app/kissflow-xg}"
HERE="$(cd "$(dirname "$0")/.." && pwd)"
DROAST="${DROAST:-droast}"

if ! command -v "$DROAST" >/dev/null 2>&1; then
  if [ -x "$HOME/GitHub/tools/dockerfile-roast/target/release/droast" ]; then
    DROAST="$HOME/GitHub/tools/dockerfile-roast/target/release/droast"
  else
    echo "droast not found. Install with 'cargo install dockerfile-roast' or build it." >&2
    exit 1
  fi
fi

if [ ! -d "$ROOT" ]; then
  echo "kissflow-xg repo not found at $ROOT" >&2
  exit 1
fi

echo "scanning $ROOT"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

cd "$ROOT"
find . -type f \( -name "Dockerfile" -o -name "Dockerfile-*" \) \
  -not -path "./.claude/*" -not -path "./node_modules/*" -not -path "./.git/*" \
  | sort > "$TMP/files.txt"

count=$(wc -l < "$TMP/files.txt" | tr -d ' ')
echo "found $count Dockerfiles"

echo "[" > "$TMP/all.json"
first=1
while IFS= read -r f; do
  out=$("$DROAST" --no-fail --format json "$f" 2>&1)
  if [ $first -eq 0 ]; then echo "," >> "$TMP/all.json"; fi
  echo "$out" >> "$TMP/all.json"
  first=0
done < "$TMP/files.txt"
echo "]" >> "$TMP/all.json"

python3 - "$TMP/all.json" "$ROOT" "$HERE/data.js" <<'PY'
import json, os, sys
src, root, out = sys.argv[1], sys.argv[2], sys.argv[3]
prefix = root.rstrip('/') + '/'
data = json.load(open(src))

line_cache = {}
def get_line(abs_path, line_no):
    if not line_no or line_no <= 0:
        return None
    if abs_path not in line_cache:
        try:
            with open(abs_path) as f:
                line_cache[abs_path] = f.read().splitlines()
        except Exception:
            line_cache[abs_path] = []
    lines = line_cache[abs_path]
    if 0 < line_no <= len(lines):
        return lines[line_no - 1].rstrip()
    return None

clean = []
for d in data:
    rel = d['file'].replace(prefix, '')
    parts = rel.split('/')
    if parts[0] in ('gateway', 'automation', 'buildscripts') and len(parts) > 2:
        service = '/'.join(parts[:-1])
    else:
        service = parts[0]
    abs_path = os.path.join(root, rel)
    findings = []
    for fnd in d['findings']:
        lt = get_line(abs_path, fnd.get('line', 0))
        if lt is not None:
            fnd['line_text'] = lt
        findings.append(fnd)
    clean.append({
        'file': rel,
        'service': service,
        'total': d['total'],
        'errors': d['errors'],
        'warnings': d['warnings'],
        'infos': d['infos'],
        'findings': findings,
    })
clean.sort(key=lambda x: (-x['errors']*100 - x['warnings']*10 - x['infos'], x['file']))
import datetime as dt
payload = {
    'scanned_at': dt.date.today().isoformat(),
    'source_repo': os.path.basename(root.rstrip('/')),
    'tool': 'droast',
    'tool_version': '0.1.0',
    'files': clean,
}
with open(out, 'w') as f:
    f.write('window.SCAN_DATA = ')
    json.dump(payload, f, indent=2)
    f.write(';\n')
print(f'wrote {out} ({len(clean)} files, {sum(d["total"] for d in clean)} findings)')
PY
