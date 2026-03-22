/**
 * Witness Comparator — Viz 3
 * "Is this the same text?"
 * Synoptic view of 4 text witnesses with stemma and variant highlighting.
 */

export function initWitnessComparator(containerSelector, data) {
  const container = document.querySelector(containerSelector);
  if (!container || !data.ready) return;

  const scC = data.scenarioC;
  container.innerHTML = '';

  let showDiplomatic = true;
  let showMaterial = true;
  let selectedWitnesses = ['ms-a', 'ms-b', 'ms-c', 'print-d'];

  const wrapper = document.createElement('div');
  wrapper.className = 'witness-comparator';

  // ── Controls ──
  const controls = document.createElement('div');
  controls.className = 'witness-comparator__controls';

  // Witness checkboxes
  const witnessControls = document.createElement('div');
  witnessControls.className = 'witness-comparator__witness-select';
  const wcLabel = document.createElement('span');
  wcLabel.className = 'witness-comparator__control-label';
  wcLabel.textContent = 'Textzeugen:';
  witnessControls.appendChild(wcLabel);

  scC.witnesses.forEach(w => {
    const label = document.createElement('label');
    label.className = 'witness-comparator__witness-cb';
    const cb = document.createElement('input');
    cb.type = 'checkbox';
    cb.checked = true;
    cb.addEventListener('change', () => {
      if (cb.checked) {
        selectedWitnesses.push(w.id);
      } else {
        selectedWitnesses = selectedWitnesses.filter(id => id !== w.id);
      }
      render();
    });
    label.appendChild(cb);
    label.appendChild(document.createTextNode(` ${w.siglum} (${w.date_estimate || w.date})`));
    witnessControls.appendChild(label);
  });
  controls.appendChild(witnessControls);

  // Toggles
  const toggleGroup = document.createElement('div');
  toggleGroup.className = 'witness-comparator__toggles';

  const dipToggle = document.createElement('button');
  dipToggle.className = 'witness-comparator__toggle-btn witness-comparator__toggle-btn--active';
  dipToggle.textContent = 'Diplomatisch';
  dipToggle.addEventListener('click', () => {
    showDiplomatic = !showDiplomatic;
    dipToggle.classList.toggle('witness-comparator__toggle-btn--active', showDiplomatic);
    dipToggle.textContent = showDiplomatic ? 'Diplomatisch' : 'Normalisiert';
    render();
  });
  toggleGroup.appendChild(dipToggle);

  const matToggle = document.createElement('button');
  matToggle.className = 'witness-comparator__toggle-btn witness-comparator__toggle-btn--active';
  matToggle.textContent = 'Trägermaterial';
  matToggle.addEventListener('click', () => {
    showMaterial = !showMaterial;
    matToggle.classList.toggle('witness-comparator__toggle-btn--active', showMaterial);
    render();
  });
  toggleGroup.appendChild(matToggle);

  controls.appendChild(toggleGroup);
  wrapper.appendChild(controls);

  // ── Stemma container ──
  const stemmaContainer = document.createElement('div');
  stemmaContainer.className = 'witness-comparator__stemma';
  wrapper.appendChild(stemmaContainer);

  // ── Text columns container ──
  const textContainer = document.createElement('div');
  textContainer.className = 'witness-comparator__texts';
  wrapper.appendChild(textContainer);

  // ── Material panel ──
  const materialPanel = document.createElement('div');
  materialPanel.className = 'witness-comparator__material';
  wrapper.appendChild(materialPanel);

  container.appendChild(wrapper);

  function render() {
    renderStemma();
    renderTexts();
    renderMaterial();
  }

  function renderStemma() {
    stemmaContainer.innerHTML = '';

    const width = Math.min(stemmaContainer.clientWidth || 700, 800);
    const height = 180;

    const svg = d3.select(stemmaContainer)
      .append('svg')
      .attr('viewBox', `0 0 ${width} ${height}`)
      .attr('preserveAspectRatio', 'xMidYMid meet');

    // Stemma nodes — layout manually for clarity
    const nodes = [
      { id: 'original', label: 'Original', x: width / 2, y: 20, hypothetical: true },
      { id: 'archetype', label: 'Archetype (α)', x: width / 2, y: 60, hypothetical: true },
      { id: 'ms-a', label: 'A', x: width / 2 - 150, y: 110, hypothetical: false },
      { id: 'beta', label: 'β', x: width / 2 + 80, y: 110, hypothetical: true },
      { id: 'ms-b', label: 'B', x: width / 2, y: 155, hypothetical: false },
      { id: 'ms-c', label: 'C', x: width / 2 + 160, y: 155, hypothetical: false },
      { id: 'print-d', label: 'D', x: width / 2 - 40, y: 175, hypothetical: false },
    ];

    const nodeMap = {};
    nodes.forEach(n => nodeMap[n.id] = n);

    // Edges
    const edges = scC.stemma.relations;

    edges.forEach(edge => {
      const src = nodeMap[edge.source];
      const tgt = nodeMap[edge.target];
      if (!src || !tgt) return;

      const isHypothetical = edge.certainty === 'hypothetical' || edge.certainty === 'low';
      svg.append('line')
        .attr('x1', src.x).attr('y1', src.y + 10)
        .attr('x2', tgt.x).attr('y2', tgt.y - 10)
        .attr('stroke', '#94a3b8')
        .attr('stroke-width', 1.5)
        .attr('stroke-dasharray', isHypothetical ? '4,3' : 'none');

      // Edge type label
      if (edge.type !== 'copy' && edge.type !== 'derived_from') {
        const mx = (src.x + tgt.x) / 2;
        const my = (src.y + tgt.y) / 2;
        svg.append('text')
          .attr('x', mx + 8).attr('y', my)
          .attr('font-size', '7px')
          .attr('fill', '#94a3b8')
          .attr('font-style', 'italic')
          .text(edge.type.replace(/_/g, ' '));
      }
    });

    // Draw nodes
    nodes.forEach(node => {
      const isSelected = selectedWitnesses.includes(node.id);
      const g = svg.append('g')
        .attr('transform', `translate(${node.x}, ${node.y})`)
        .style('cursor', 'pointer');

      if (node.hypothetical) {
        g.append('rect')
          .attr('x', -20).attr('y', -10)
          .attr('width', 40).attr('height', 20)
          .attr('rx', 6)
          .attr('fill', '#f8fafc')
          .attr('stroke', '#94a3b8')
          .attr('stroke-width', 1.5)
          .attr('stroke-dasharray', '4,3');
      } else {
        g.append('rect')
          .attr('x', -16).attr('y', -10)
          .attr('width', 32).attr('height', 20)
          .attr('rx', 6)
          .attr('fill', isSelected ? '#4338ca' : '#f8fafc')
          .attr('stroke', isSelected ? '#4338ca' : '#cbd5e1')
          .attr('stroke-width', 1.5);
      }

      g.append('text')
        .attr('text-anchor', 'middle')
        .attr('dy', '0.35em')
        .attr('font-size', node.hypothetical ? '9px' : '11px')
        .attr('font-weight', '600')
        .attr('fill', node.hypothetical ? '#94a3b8' : (isSelected ? '#fff' : '#475569'))
        .attr('font-style', node.hypothetical ? 'italic' : 'normal')
        .text(node.label);
    });
  }

  function renderTexts() {
    textContainer.innerHTML = '';

    const variants = scC.text_passage.variants.filter(v =>
      selectedWitnesses.includes(v.witness)
    );

    if (variants.length === 0) {
      textContainer.innerHTML = '<div class="witness-comparator__no-selection">Select at least one witness</div>';
      return;
    }

    const columns = document.createElement('div');
    columns.className = 'witness-comparator__columns';
    columns.style.gridTemplateColumns = `repeat(${variants.length}, 1fr)`;

    const orthVariants = scC.text_passage.variant_analysis.orthographic_variants;
    const substVariants = scC.text_passage.variant_analysis.substantive_variants;

    variants.forEach(v => {
      const col = document.createElement('div');
      col.className = 'witness-comparator__column';

      const witness = scC.witnesses.find(w => w.id === v.witness);
      const siglum = witness?.siglum || v.witness;

      // Header
      const header = document.createElement('div');
      header.className = 'witness-comparator__col-header';
      header.innerHTML = `<span class="witness-comparator__siglum">${siglum}</span>
        <span class="witness-comparator__col-date">${witness?.date_estimate || witness?.date || ''}</span>
        <span class="witness-comparator__col-material">${witness?.material || ''}</span>`;
      col.appendChild(header);

      // Text
      const textEl = document.createElement('div');
      textEl.className = 'witness-comparator__text';

      let text = showDiplomatic ? v.text_diplomatic : v.text_normalized;

      // Highlight orthographic variants
      orthVariants.forEach(ov => {
        const words = ov.word.split('/');
        words.forEach(word => {
          const regex = new RegExp(`\\b${word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi');
          text = text.replace(regex, `<span class="witness-comparator__variant-orth">$&</span>`);
        });
      });

      // Check for substantive variants
      const substForWitness = substVariants.filter(sv => sv.witness === v.witness);
      if (substForWitness.length > 0) {
        textEl.classList.add('witness-comparator__text--substantive');
      }

      textEl.innerHTML = text;
      col.appendChild(textEl);

      // Note
      if (v.note) {
        const note = document.createElement('div');
        note.className = 'witness-comparator__note';
        note.textContent = v.note;
        col.appendChild(note);
      }

      // Marginal note
      if (v.marginal_note && showDiplomatic) {
        const marginal = document.createElement('div');
        marginal.className = 'witness-comparator__marginal';
        marginal.innerHTML = `<span class="witness-comparator__marginal-label">Marginal (${v.marginal_note.hand}):</span> ${v.marginal_note.text}`;
        col.appendChild(marginal);
      }

      columns.appendChild(col);
    });

    textContainer.appendChild(columns);
  }

  function renderMaterial() {
    materialPanel.innerHTML = '';
    if (!showMaterial) return;

    const title = document.createElement('div');
    title.className = 'witness-comparator__material-title';
    title.textContent = 'Material Features';
    materialPanel.appendChild(title);

    const grid = document.createElement('div');
    grid.className = 'witness-comparator__material-grid';

    scC.witnesses.filter(w => selectedWitnesses.includes(w.id)).forEach(w => {
      const card = document.createElement('div');
      card.className = 'witness-comparator__material-card';

      let html = `<div class="witness-comparator__material-header">${w.siglum}: ${w.title}</div>`;

      if (w.material) {
        html += `<div class="witness-comparator__material-prop"><span class="witness-comparator__material-key">Material:</span> ${w.material}</div>`;
      }
      if (w.carrier) {
        html += `<div class="witness-comparator__material-prop"><span class="witness-comparator__material-key">Dimensions:</span> ${w.carrier.dimensions || '—'}</div>`;
      }
      if (w.script) {
        html += `<div class="witness-comparator__material-prop"><span class="witness-comparator__material-key">Script:</span> ${w.script}</div>`;
      }
      if (w.modifications) {
        html += `<div class="witness-comparator__material-badge witness-comparator__material-badge--mod">${w.modifications}</div>`;
      }

      // Material features
      if (w.material_features) {
        w.material_features.forEach(mf => {
          const typeClass = mf.type === 'ink_color' ? 'ink' : mf.type === 'water_damage' ? 'damage' : 'info';
          html += `<div class="witness-comparator__feature witness-comparator__feature--${typeClass}">`;
          html += `<span class="witness-comparator__feature-type">${mf.type.replace(/_/g, ' ')}</span>`;
          html += `<span class="witness-comparator__feature-desc">${mf.description}</span>`;
          html += `</div>`;
        });
      }

      // Hands
      if (w.hands) {
        w.hands.forEach(h => {
          html += `<div class="witness-comparator__material-prop"><span class="witness-comparator__material-key">${h.id}:</span> ${h.description}</div>`;
        });
      }

      card.innerHTML = html;
      grid.appendChild(card);
    });

    materialPanel.appendChild(grid);
  }

  render();
}
