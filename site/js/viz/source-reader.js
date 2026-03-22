/**
 * Source Reading Table — Viz 1
 * "What does a single entry really say?"
 * Interactive layer toggles reveal hidden dimensions of a source entry.
 */

export function initSourceReader(containerSelector, data) {
  const container = document.querySelector(containerSelector);
  if (!container || !data.ready) return;

  const scA = data.scenarioA;
  const scC = data.scenarioC;

  // Entry definitions
  const entries = [
    {
      id: 'pepper',
      label: 'Pfefferhandel',
      source: scA.source,
      tx: scA.transactions[0],
      persons: scA.persons,
      refSystems: scA.reference_systems,
      type: 'transaction'
    },
    {
      id: 'loan',
      label: 'Darlehen',
      source: scA.source,
      tx: scA.transactions[2],
      persons: scA.persons,
      refSystems: scA.reference_systems,
      type: 'transaction'
    },
    {
      id: 'dowry',
      label: 'Mitgift',
      source: scA.source,
      tx: scA.transactions[3],
      persons: scA.persons,
      refSystems: scA.reference_systems,
      type: 'transaction'
    },
    {
      id: 'chronicle',
      label: 'Chronikpassage',
      variants: scC.text_passage.variants,
      type: 'text'
    }
  ];

  let activeEntry = entries[0];
  let layers = {
    diplomatic: true,
    temporal: false,
    references: false,
    categories: false,
    uncertainty: false
  };

  container.innerHTML = '';

  // ── Build DOM structure ──
  const wrapper = document.createElement('div');
  wrapper.className = 'source-reader';

  // Tab bar
  const tabBar = document.createElement('div');
  tabBar.className = 'source-reader__tabs';
  entries.forEach(entry => {
    const tab = document.createElement('button');
    tab.className = 'source-reader__tab' + (entry === activeEntry ? ' source-reader__tab--active' : '');
    tab.textContent = entry.label;
    tab.dataset.entryId = entry.id;
    tab.addEventListener('click', () => {
      activeEntry = entry;
      tabBar.querySelectorAll('.source-reader__tab').forEach(t => t.classList.remove('source-reader__tab--active'));
      tab.classList.add('source-reader__tab--active');
      render();
    });
    tabBar.appendChild(tab);
  });
  wrapper.appendChild(tabBar);

  // Main content area (flex: source + controls)
  const contentArea = document.createElement('div');
  contentArea.className = 'source-reader__content';

  // Source display
  const sourceDisplay = document.createElement('div');
  sourceDisplay.className = 'source-reader__display';
  contentArea.appendChild(sourceDisplay);

  // Layer controls
  const controls = document.createElement('div');
  controls.className = 'source-reader__controls';

  const layerDefs = [
    { key: 'diplomatic', label: 'Diplomatisch / Normalisiert', desc: 'Original spelling vs. modern form' },
    { key: 'temporal', label: 'Temporale Schichten', desc: 'Event, recording, and interpretation time' },
    { key: 'references', label: 'Referenzsysteme', desc: 'Currency conversion, calendar systems' },
    { key: 'categories', label: 'Kategorien (emic/etic)', desc: 'Historical vs. modern categories' },
    { key: 'uncertainty', label: 'Unsicherheit', desc: 'Ambiguous readings, fuzzy dates' },
  ];

  const controlsTitle = document.createElement('div');
  controlsTitle.className = 'source-reader__controls-title';
  controlsTitle.textContent = 'Information Layers';
  controls.appendChild(controlsTitle);

  layerDefs.forEach(def => {
    const toggle = document.createElement('label');
    toggle.className = 'source-reader__toggle';

    const cb = document.createElement('input');
    cb.type = 'checkbox';
    cb.checked = def.key === 'diplomatic';
    cb.addEventListener('change', () => {
      layers[def.key] = cb.checked;
      render();
    });

    const span = document.createElement('span');
    span.className = 'source-reader__toggle-label';

    const name = document.createElement('span');
    name.className = 'source-reader__toggle-name';
    name.textContent = def.label;

    const desc = document.createElement('span');
    desc.className = 'source-reader__toggle-desc';
    desc.textContent = def.desc;

    span.appendChild(name);
    span.appendChild(desc);
    toggle.appendChild(cb);
    toggle.appendChild(span);
    controls.appendChild(toggle);
  });

  contentArea.appendChild(controls);
  wrapper.appendChild(contentArea);

  // Temporal swimlane container (below source)
  const swimlaneContainer = document.createElement('div');
  swimlaneContainer.className = 'source-reader__swimlane';
  wrapper.appendChild(swimlaneContainer);

  container.appendChild(wrapper);

  // ── Render function ──
  function render() {
    if (activeEntry.type === 'transaction') {
      renderTransaction();
    } else {
      renderTextPassage();
    }
    renderSwimlane();
  }

  function renderTransaction() {
    const tx = activeEntry.tx;
    const src = activeEntry.source;
    let html = '';

    // Source badge
    html += `<div class="source-reader__source-badge">
      <span class="source-reader__source-type">${src.type.replace(/_/g, ' ')}</span>
      <span class="source-reader__source-title">${src.title}</span>
      <span class="source-reader__source-ref">fol. ${tx.folio || '?'}</span>
    </div>`;

    // Date display
    const dateInfo = tx.date;
    html += `<div class="source-reader__field">`;
    html += `<span class="source-reader__field-label">Datum</span>`;
    if (layers.diplomatic && dateInfo.original_text) {
      html += `<span class="source-reader__field-value source-reader__diplomatic">${dateInfo.original_text}</span>`;
    } else {
      html += `<span class="source-reader__field-value">${dateInfo.value}</span>`;
    }
    if (layers.references && dateInfo.calendar) {
      html += `<span class="source-reader__ref-note">Calendar: ${dateInfo.calendar}</span>`;
    }
    if (layers.uncertainty && dateInfo.certainty !== 'high') {
      html += `<span class="source-reader__uncertainty-badge">${dateInfo.certainty} certainty${dateInfo.note ? ': ' + dateInfo.note : ''}</span>`;
    }
    html += `</div>`;

    // Amount display
    if (tx.amount) {
      html += `<div class="source-reader__field">`;
      html += `<span class="source-reader__field-label">Betrag</span>`;

      if (layers.uncertainty && tx.amount.value_candidates) {
        // Shimmering split amount
        html += `<span class="source-reader__field-value source-reader__split-amount">`;
        html += `<span class="source-reader__split-a">${tx.amount.value_candidates[0].toLocaleString()}</span>`;
        html += `<span class="source-reader__split-divider">/</span>`;
        html += `<span class="source-reader__split-b">${tx.amount.value_candidates[1].toLocaleString()}</span>`;
        html += `<span class="source-reader__split-currency"> ${tx.amount.currency}</span>`;
        html += `</span>`;
        if (tx.amount.note) {
          html += `<span class="source-reader__uncertainty-badge">${tx.amount.note}</span>`;
        }
      } else {
        const val = tx.amount.value || tx.amount.value_candidates?.[0] || '?';
        html += `<span class="source-reader__field-value">${typeof val === 'number' ? val.toLocaleString() : val} ${tx.amount.currency_full || tx.amount.currency}</span>`;
      }

      if (layers.references && tx.amount.exchange_rate) {
        const er = tx.amount.exchange_rate;
        const converted = tx.amount.value ? Math.round(tx.amount.value * er.rate) : '?';
        html += `<span class="source-reader__ref-note">≈ ${typeof converted === 'number' ? converted.toLocaleString() : converted} ${er.to === 'fl_rh' ? 'Rhenish Guilders' : er.to} (rate: ${er.rate})</span>`;
      }
      html += `</div>`;
    }

    // Participants
    if (tx.participants) {
      html += `<div class="source-reader__field">`;
      html += `<span class="source-reader__field-label">Beteiligte</span>`;
      tx.participants.forEach(pid => {
        const person = activeEntry.persons?.find(p => p.id === pid);
        if (person) {
          if (layers.diplomatic) {
            html += `<span class="source-reader__person source-reader__diplomatic">${person.name_diplomatic || person.name_normalized}</span>`;
          } else {
            html += `<span class="source-reader__person">${person.name_normalized}</span>`;
          }
          if (layers.categories && (person.role_emic || person.role_etic)) {
            html += `<span class="source-reader__category-split">`;
            if (person.role_emic) {
              html += `<span class="source-reader__emic">"${person.role_emic}"</span>`;
            }
            if (person.role_etic) {
              const etic = Array.isArray(person.role_etic) ? person.role_etic.join(', ') : person.role_etic;
              html += `<span class="source-reader__etic">${etic}</span>`;
            }
            html += `</span>`;
          }
        }
      });
      html += `</div>`;
    }

    // Description
    html += `<div class="source-reader__field">`;
    html += `<span class="source-reader__field-label">Eintrag</span>`;
    html += `<span class="source-reader__field-value">${tx.description_en}</span>`;
    html += `</div>`;

    sourceDisplay.innerHTML = html;
  }

  function renderTextPassage() {
    const variants = activeEntry.variants;
    let html = '';

    html += `<div class="source-reader__source-badge">
      <span class="source-reader__source-type">chronicle passage</span>
      <span class="source-reader__source-title">Brückstädter Chronik — Market Fire, 1298</span>
    </div>`;

    // Show first witness (Ms. A) as primary, others as context
    const primary = variants[0];
    html += `<div class="source-reader__field">`;
    html += `<span class="source-reader__field-label">Text (Ms. ${primary.witness === 'ms-a' ? 'A' : primary.witness})</span>`;
    if (layers.diplomatic) {
      html += `<span class="source-reader__field-value source-reader__diplomatic source-reader__text-block">${primary.text_diplomatic}</span>`;
    } else {
      html += `<span class="source-reader__field-value source-reader__text-block">${primary.text_normalized}</span>`;
    }
    html += `</div>`;

    // Show variant witnesses if diplomatic mode is on
    if (layers.diplomatic && variants.length > 1) {
      html += `<div class="source-reader__field">`;
      html += `<span class="source-reader__field-label">Varianten</span>`;
      variants.slice(1).forEach(v => {
        const siglum = v.witness.replace('ms-', '').replace('print-', '').toUpperCase();
        html += `<div class="source-reader__variant">`;
        html += `<span class="source-reader__variant-siglum">${siglum}</span>`;
        html += `<span class="source-reader__variant-text">${v.text_diplomatic}</span>`;
        html += `</div>`;
      });
      html += `</div>`;
    }

    // Marginal note
    const msB = variants.find(v => v.witness === 'ms-b');
    if (msB?.marginal_note && layers.diplomatic) {
      html += `<div class="source-reader__field source-reader__marginal">`;
      html += `<span class="source-reader__field-label">Marginalnotiz (2. Hand)</span>`;
      html += `<span class="source-reader__field-value source-reader__diplomatic">${msB.marginal_note.text}</span>`;
      html += `<span class="source-reader__ref-note">${msB.marginal_note.significance}</span>`;
      html += `</div>`;
    }

    sourceDisplay.innerHTML = html;
  }

  function renderSwimlane() {
    swimlaneContainer.innerHTML = '';
    if (!layers.temporal) return;

    const tl = activeEntry.tx?.temporal_layers;
    if (!tl) return;

    const width = Math.min(swimlaneContainer.clientWidth || 600, 800);
    const height = 120;
    const margin = { left: 140, right: 20, top: 10, bottom: 10 };

    const svg = d3.select(swimlaneContainer)
      .append('svg')
      .attr('viewBox', `0 0 ${width} ${height}`)
      .attr('preserveAspectRatio', 'xMidYMid meet');

    const lanes = [
      { label: 'Event Time', value: tl.event_time, color: '#0d9488' },
      { label: 'Recording Time', value: tl.recording_time, color: '#d97706' },
      { label: 'Interpretation Time', value: tl.interpretation_time, color: '#475569' },
    ];

    const laneHeight = (height - margin.top - margin.bottom) / lanes.length;

    lanes.forEach((lane, i) => {
      const y = margin.top + i * laneHeight;

      // Lane label
      svg.append('text')
        .attr('x', margin.left - 10)
        .attr('y', y + laneHeight / 2 + 4)
        .attr('text-anchor', 'end')
        .attr('font-size', '11px')
        .attr('font-weight', '600')
        .attr('fill', lane.color)
        .text(lane.label);

      // Lane bar
      svg.append('rect')
        .attr('x', margin.left)
        .attr('y', y + 4)
        .attr('width', width - margin.left - margin.right)
        .attr('height', laneHeight - 8)
        .attr('fill', lane.color)
        .attr('opacity', 0.12)
        .attr('rx', 4);

      // Lane value
      svg.append('text')
        .attr('x', margin.left + 10)
        .attr('y', y + laneHeight / 2 + 4)
        .attr('font-size', '11px')
        .attr('fill', lane.color)
        .attr('font-weight', '500')
        .text(lane.value);
    });
  }

  // Initial render
  render();
}
