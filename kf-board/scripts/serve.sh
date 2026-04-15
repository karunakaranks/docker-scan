#!/usr/bin/env bash
# Serve the board on https://dscan.localhost via portless.
#
# Starts a tiny static file server on 127.0.0.1:7311 in the background and
# registers a portless alias `dscan` so it is reachable at
# https://dscan.localhost/ without any port number.
#
# Stop with: scripts/serve.sh stop
set -euo pipefail

HERE="$(cd "$(dirname "$0")/.." && pwd)"
PORT="${DSCAN_PORT:-7311}"
PIDFILE="$HERE/.serve.pid"

case "${1:-start}" in
  stop)
    if [ -f "$PIDFILE" ]; then
      pid=$(cat "$PIDFILE")
      kill "$pid" 2>/dev/null || true
      rm -f "$PIDFILE"
      echo "stopped pid=$pid"
    fi
    if command -v portless >/dev/null 2>&1; then
      portless alias --remove dscan >/dev/null 2>&1 || true
      echo "removed portless alias dscan"
    fi
    exit 0
    ;;
  start)
    if [ -f "$PIDFILE" ] && kill -0 "$(cat "$PIDFILE")" 2>/dev/null; then
      echo "already running pid=$(cat "$PIDFILE")"
    else
      cd "$HERE"
      nohup python3 -m http.server "$PORT" --bind 127.0.0.1 > "$HERE/.serve.log" 2>&1 &
      echo $! > "$PIDFILE"
      sleep 0.3
      echo "started static server pid=$(cat "$PIDFILE") port=$PORT"
    fi

    if command -v portless >/dev/null 2>&1; then
      portless alias dscan "$PORT" >/dev/null
      echo "portless alias: https://dscan.localhost  ->  127.0.0.1:$PORT"
    else
      echo "(portless not installed — board reachable at http://127.0.0.1:$PORT)"
    fi
    ;;
  *)
    echo "usage: $0 [start|stop]" >&2
    exit 1
    ;;
esac
