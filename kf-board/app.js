(() => {
  const STORAGE_KEY = 'droast-board-state-v1';
  const data = window.SCAN_DATA;
  const RULES = window.RULE_CATALOG || {};

  // Each finding gets a stable id from {file, rule, line, message hash}
  const fid = (file, f) => `${file}::${f.rule}::${f.line}::${hash(f.message)}`;
  function hash(s) { let h = 0; for (let i = 0; i < s.length; i++) h = ((h << 5) - h + s.charCodeAt(i)) | 0; return Math.abs(h).toString(36); }

  // Load tracking state
  let state = loadState();
  function loadState() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; } catch { return {}; }
  }
  function saveState() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
  function getStatus(id) { return (state[id] && state[id].status) || 'open'; }
  function setStatus(id, status) {
    state[id] = state[id] || {};
    state[id].status = status;
    saveState();
    render();
  }
  function getNote(id) { return (state[id] && state[id].note) || ''; }
  function setNote(id, note) {
    state[id] = state[id] || {};
    state[id].note = note;
    saveState();
  }

  // Filters (ui state)
  const filters = {
    severities: new Set(['ERROR', 'WARN', 'INFO']),
    statuses: new Set(['open', 'in_progress', 'fixed', 'wontfix']),
    search: '',
    view: 'services',
  };

  // ============ rendering ============
  function render() {
    renderMetrics();
    renderTopRules();
    if (filters.view === 'services') renderServices();
    if (filters.view === 'findings') renderFlat();
    if (filters.view === 'rules') renderByRule();
  }

  function passesFilters(file, f) {
    if (!filters.severities.has(f.severity)) return false;
    const status = getStatus(fid(file, f));
    if (!filters.statuses.has(status)) return false;
    if (filters.search) {
      const q = filters.search.toLowerCase();
      const hay = `${file} ${f.rule} ${f.message} ${RULES[f.rule] || ''}`.toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  }

  function allFindings() {
    const out = [];
    for (const file of data.files) {
      for (const f of file.findings) {
        if (passesFilters(file.file, f)) out.push({ file, f, id: fid(file.file, f) });
      }
    }
    return out;
  }

  function renderMetrics() {
    const all = [];
    for (const file of data.files) for (const f of file.findings) all.push({ id: fid(file.file, f), sev: f.severity });
    const total = all.length;
    const errors = all.filter(x => x.sev === 'ERROR').length;
    const warns  = all.filter(x => x.sev === 'WARN').length;
    const infos  = all.filter(x => x.sev === 'INFO').length;
    const resolved = all.filter(x => {
      const s = getStatus_byId(x.id);
      return s === 'fixed' || s === 'wontfix';
    }).length;
    set('m-files', data.files.length);
    set('m-total', total);
    set('m-errors', errors);
    set('m-warns', warns);
    set('m-infos', infos);
    set('m-resolved', resolved);
    set('m-total2', total);
    const pct = total ? Math.round(100 * resolved / total) : 0;
    set('m-progress-pct', pct + '%');
    document.getElementById('m-progress-bar').style.width = pct + '%';
  }
  function getStatus_byId(id) { return (state[id] && state[id].status) || 'open'; }
  function set(id, v) { document.getElementById(id).textContent = v; }

  function renderTopRules() {
    const counts = {};
    for (const file of data.files) for (const f of file.findings) counts[f.rule] = (counts[f.rule] || 0) + 1;
    const top = Object.entries(counts).sort((a,b)=>b[1]-a[1]).slice(0,10);
    const ol = document.getElementById('rules-list');
    ol.innerHTML = '';
    top.forEach(([rule, count]) => {
      const li = document.createElement('li');
      li.innerHTML = `<span class="rule-id">${rule}</span><span class="rule-desc">${escapeHtml(RULES[rule] || '')}</span><span class="rule-count">${count}</span>`;
      li.addEventListener('click', () => {
        document.getElementById('search').value = rule;
        filters.search = rule;
        render();
      });
      ol.appendChild(li);
    });
  }

  function renderServices() {
    const root = document.getElementById('view-services');
    root.innerHTML = '';
    const empty = document.getElementById('empty');
    let any = false;

    for (const file of data.files) {
      const visible = file.findings.filter(f => passesFilters(file.file, f));
      if (visible.length === 0) continue;
      any = true;

      const errs = visible.filter(f => f.severity === 'ERROR').length;
      const warns = visible.filter(f => f.severity === 'WARN').length;
      const infos = visible.filter(f => f.severity === 'INFO').length;
      const resolved = file.findings.filter(f => {
        const s = getStatus(fid(file.file, f));
        return s === 'fixed' || s === 'wontfix';
      }).length;
      const total = file.findings.length;
      const pct = total ? Math.round(100 * resolved / total) : 0;

      const svc = document.createElement('div');
      svc.className = 'svc';
      const slug = slugify(file.file);
      if (state.__open && state.__open[slug]) svc.classList.add('open');

      svc.innerHTML = `
        <div class="svc-head">
          <svg class="svc-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
          <div>
            <div class="svc-name">${escapeHtml(file.service)}</div>
            <div class="svc-path">${escapeHtml(file.file)}</div>
          </div>
          <div class="svc-pills">
            ${errs ? `<span class="pill error">${errs} err</span>` : ''}
            ${warns ? `<span class="pill warn">${warns} warn</span>` : ''}
            ${infos ? `<span class="pill info">${infos} info</span>` : ''}
            ${(errs+warns+infos)===0 ? `<span class="pill zero">clean</span>` : ''}
          </div>
          <div class="svc-progress">
            ${resolved}/${total} fixed
            <div class="bar"><span style="width:${pct}%"></span></div>
          </div>
        </div>
        <div class="svc-body">
          <div class="svc-bulk">
            <button class="bulk-btn" data-act="expand">Expand all</button>
            <button class="bulk-btn" data-act="collapse">Collapse all</button>
          </div>
        </div>
      `;

      const head = svc.querySelector('.svc-head');
      head.addEventListener('click', () => {
        svc.classList.toggle('open');
        state.__open = state.__open || {};
        state.__open[slug] = svc.classList.contains('open');
        saveState();
      });

      const body = svc.querySelector('.svc-body');
      const bulk = body.querySelector('.svc-bulk');
      bulk.addEventListener('click', (e) => {
        const btn = e.target.closest('.bulk-btn');
        if (!btn) return;
        e.stopPropagation();
        const wantExpanded = btn.dataset.act === 'expand';
        body.querySelectorAll('.finding').forEach(el => {
          el.classList.toggle('expanded', wantExpanded);
          if (el.dataset.fid) toggleExpanded(el.dataset.fid, wantExpanded);
        });
      });
      visible.forEach(f => body.appendChild(renderFinding(file.file, f)));
      root.appendChild(svc);
    }
    empty.classList.toggle('hidden', any);
  }

  function isExpanded(id) { return !!(state.__expanded && state.__expanded[id]); }
  function toggleExpanded(id, force) {
    state.__expanded = state.__expanded || {};
    state.__expanded[id] = (force === undefined) ? !state.__expanded[id] : force;
    saveState();
  }

  function renderFinding(file, f) {
    const id = fid(file, f);
    const status = getStatus(id);
    const expanded = isExpanded(id);
    const sevClass = f.severity === 'ERROR' ? 'error' : f.severity === 'WARN' ? 'warn' : 'info';
    const el = document.createElement('div');
    el.className = `finding ${status}${expanded ? ' expanded' : ''}`;
    el.dataset.fid = id;
    el.innerHTML = `
      <div class="finding-summary">
        <svg class="finding-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
        <span class="severity-badge ${sevClass}">${f.severity}</span>
        <span class="rule-tag"><span class="rid">${f.rule}</span></span>
        <span class="finding-msg-inline">${escapeHtml(f.message)}</span>
        ${f.line ? `<span class="finding-line-inline">L${f.line}</span>` : ''}
        <span class="status-dot status-${status}" title="${status.replace('_',' ')}"></span>
      </div>
      <div class="finding-details">
        <div class="rule-desc">${escapeHtml(RULES[f.rule] || '')}</div>
        ${f.roast ? `<div class="finding-roast">${escapeHtml(f.roast)}</div>` : ''}
        <div class="finding-controls">
          <div class="status-pills">
            ${['open','in_progress','fixed','wontfix'].map(s => `
              <button class="status-pill ${s} ${status===s?'active':''}" data-status="${s}">${s.replace('_',' ')}</button>
            `).join('')}
          </div>
          <input class="note-input" type="text" placeholder="note (e.g. ticket #123)" value="${escapeHtml(getNote(id))}" />
        </div>
      </div>
    `;
    const summary = el.querySelector('.finding-summary');
    summary.addEventListener('click', () => {
      el.classList.toggle('expanded');
      toggleExpanded(id, el.classList.contains('expanded'));
    });
    el.querySelectorAll('.status-pill').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        setStatus(id, btn.dataset.status);
      });
    });
    const note = el.querySelector('.note-input');
    note.addEventListener('input', (e) => setNote(id, e.target.value));
    note.addEventListener('click', (e) => e.stopPropagation());
    return el;
  }

  function renderFlat() {
    const root = document.getElementById('view-findings');
    root.innerHTML = '';
    const list = allFindings();
    document.getElementById('empty').classList.toggle('hidden', list.length > 0);
    // sort by severity then service
    const order = { ERROR: 0, WARN: 1, INFO: 2 };
    list.sort((a, b) => order[a.f.severity] - order[b.f.severity] || a.file.file.localeCompare(b.file.file));
    list.forEach(({ file, f }) => {
      const card = document.createElement('div');
      card.className = 'flat-finding';
      const sevClass = f.severity === 'ERROR' ? 'error' : f.severity === 'WARN' ? 'warn' : 'info';
      const id = fid(file.file, f);
      const status = getStatus(id);
      const expanded = isExpanded(id);
      card.className = `finding flat ${status}${expanded ? ' expanded' : ''}`;
      card.innerHTML = `
        <div class="finding-summary">
          <svg class="finding-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
          <span class="severity-badge ${sevClass}">${f.severity}</span>
          <span class="rule-tag"><span class="rid">${f.rule}</span></span>
          <span class="finding-msg-inline">${escapeHtml(f.message)}</span>
          <span class="where-inline">${escapeHtml(file.file)}${f.line ? ` · L${f.line}` : ''}</span>
          <span class="status-dot status-${status}" title="${status.replace('_',' ')}"></span>
        </div>
        <div class="finding-details">
          <div class="rule-desc">${escapeHtml(RULES[f.rule] || '')}</div>
          ${f.roast ? `<div class="finding-roast">${escapeHtml(f.roast)}</div>` : ''}
          <div class="finding-controls">
            <div class="status-pills">
              ${['open','in_progress','fixed','wontfix'].map(s => `
                <button class="status-pill ${s} ${status===s?'active':''}" data-status="${s}">${s.replace('_',' ')}</button>
              `).join('')}
            </div>
            <input class="note-input" type="text" placeholder="note (e.g. ticket #123)" value="${escapeHtml(getNote(id))}" />
          </div>
        </div>
      `;
      card.querySelector('.finding-summary').addEventListener('click', () => {
        card.classList.toggle('expanded');
        toggleExpanded(id, card.classList.contains('expanded'));
      });
      card.querySelectorAll('.status-pill').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          setStatus(id, btn.dataset.status);
        });
      });
      const note = card.querySelector('.note-input');
      note.addEventListener('input', (e) => setNote(id, e.target.value));
      note.addEventListener('click', (e) => e.stopPropagation());
      root.appendChild(card);
    });
  }

  function renderByRule() {
    const root = document.getElementById('view-rules');
    root.innerHTML = '';
    const groups = {};
    for (const file of data.files) {
      for (const f of file.findings) {
        if (!passesFilters(file.file, f)) continue;
        groups[f.rule] = groups[f.rule] || { rule: f.rule, items: [] };
        groups[f.rule].items.push({ file: file.file, f });
      }
    }
    const arr = Object.values(groups).sort((a,b)=>b.items.length-a.items.length);
    document.getElementById('empty').classList.toggle('hidden', arr.length > 0);
    arr.forEach(g => {
      const card = document.createElement('div');
      card.className = 'rule-card';
      state.__rule_open = state.__rule_open || {};
      if (state.__rule_open[g.rule]) card.classList.add('open');
      const fixedCount = g.items.filter(({file,f}) => {
        const s = getStatus(fid(file, f));
        return s === 'fixed' || s === 'wontfix';
      }).length;
      const sevCounts = { ERROR: 0, WARN: 0, INFO: 0 };
      g.items.forEach(({f}) => sevCounts[f.severity]++);
      const sevClass = sevCounts.ERROR ? 'error' : sevCounts.WARN ? 'warn' : 'info';
      card.innerHTML = `
        <div class="rule-card-head">
          <svg class="rule-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
          <span class="severity-badge ${sevClass}" style="width:auto; padding:3px 8px;">${sevCounts.ERROR ? 'ERROR' : sevCounts.WARN ? 'WARN' : 'INFO'}</span>
          <span class="rid">${g.rule}</span>
          <span class="rdesc">${escapeHtml(RULES[g.rule] || '')}</span>
          <span class="rcount">${fixedCount} / ${g.items.length} resolved</span>
        </div>
        <div class="rule-files"></div>
      `;
      card.querySelector('.rule-card-head').addEventListener('click', () => {
        card.classList.toggle('open');
        state.__rule_open[g.rule] = card.classList.contains('open');
        saveState();
      });
      const files = card.querySelector('.rule-files');
      g.items.forEach(({file, f}) => {
        const id = fid(file, f);
        const status = getStatus(id);
        const row = document.createElement('div');
        row.className = 'rule-file-row';
        row.innerHTML = `
          <code>${escapeHtml(file)}${f.line ? ` · line ${f.line}` : ''}</code>
          <div class="status-pills">
            ${['open','in_progress','fixed','wontfix'].map(s => `
              <button class="status-pill ${s} ${status===s?'active':''}" data-status="${s}">${s.replace('_',' ')}</button>
            `).join('')}
          </div>
        `;
        row.querySelectorAll('.status-pill').forEach(btn => {
          btn.addEventListener('click', () => setStatus(id, btn.dataset.status));
        });
        files.appendChild(row);
      });
      root.appendChild(card);
    });
  }

  // ============ helpers ============
  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  }
  function slugify(s) { return s.replace(/[^a-z0-9]+/gi, '_'); }

  // ============ event wiring ============
  function init() {
    document.querySelectorAll('.chip[data-sev]').forEach(c => {
      c.addEventListener('click', () => {
        const s = c.dataset.sev;
        if (filters.severities.has(s)) filters.severities.delete(s); else filters.severities.add(s);
        c.classList.toggle('active');
        render();
      });
    });
    document.querySelectorAll('.chip[data-status]').forEach(c => {
      c.addEventListener('click', () => {
        const s = c.dataset.status;
        if (filters.statuses.has(s)) filters.statuses.delete(s); else filters.statuses.add(s);
        c.classList.toggle('active');
        render();
      });
    });
    document.getElementById('search').addEventListener('input', (e) => {
      filters.search = e.target.value;
      render();
    });
    document.querySelectorAll('.vt').forEach(t => {
      t.addEventListener('click', () => {
        document.querySelectorAll('.vt').forEach(x => x.classList.remove('active'));
        t.classList.add('active');
        filters.view = t.dataset.view;
        document.getElementById('view-services').classList.toggle('hidden', filters.view !== 'services');
        document.getElementById('view-findings').classList.toggle('hidden', filters.view !== 'findings');
        document.getElementById('view-rules').classList.toggle('hidden', filters.view !== 'rules');
        render();
      });
    });
    document.getElementById('exportBtn').addEventListener('click', () => {
      const blob = new Blob([JSON.stringify({ scan: data, tracking: state }, null, 2)], { type: 'application/json' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = `dockerfile-roast-board-${new Date().toISOString().slice(0,10)}.json`;
      a.click();
    });
    document.getElementById('resetBtn').addEventListener('click', () => {
      if (confirm('Reset all status + notes? This clears your local tracking state.')) {
        state = {};
        saveState();
        render();
      }
    });
    render();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
