/**
 * Event Reconstructor — Viz 4
 * "Five reports about one dispute"
 * Radial source arrangement around a central event with category timeline.
 */

export function initEventReconstructor(containerSelector, data) {
  const container = document.querySelector(containerSelector);
  if (!container || !data.ready || !data.scenarioD) return;

  const scD = data.scenarioD;
  container.innerHTML = '';

  let selectedSources = [];
  let showComparison = false;

  const wrapper = document.createElement('div');
  wrapper.className = 'event-reconstructor';

  // ── Info header ──
  const header = document.createElement('div');
  header.className = 'event-reconstructor__header';
  header.innerHTML = `
    <div class="event-reconstructor__event-label">${scD.event.label_en}</div>
    <div class="event-reconstructor__event-meta">${scD.event.date} · ${scD.event.place}</div>
    <div class="event-reconstructor__event-note">${scD.event.intersection}</div>
  `;
  wrapper.appendChild(header);

  // ── Radial SVG + Source panels ──
  const radialArea = document.createElement('div');
  radialArea.className = 'event-reconstructor__radial';
  wrapper.appendChild(radialArea);

  // ── Source detail cards (below radial) ──
  const cardsContainer = document.createElement('div');
  cardsContainer.className = 'event-reconstructor__cards';
  wrapper.appendChild(cardsContainer);

  // ── Comparison panel ──
  const comparisonPanel = document.createElement('div');
  comparisonPanel.className = 'event-reconstructor__comparison';
  wrapper.appendChild(comparisonPanel);

  // ── Category Timeline ──
  const catTimelineContainer = document.createElement('div');
  catTimelineContainer.className = 'event-reconstructor__cat-timeline';
  const catTitle = document.createElement('div');
  catTitle.className = 'event-reconstructor__section-title';
  catTitle.textContent = 'Category Change Over Time';
  wrapper.appendChild(catTitle);
  wrapper.appendChild(catTimelineContainer);

  // ── Epistemic Distance ──
  const epistContainer = document.createElement('div');
  epistContainer.className = 'event-reconstructor__epistemic';
  const epistTitle = document.createElement('div');
  epistTitle.className = 'event-reconstructor__section-title';
  epistTitle.textContent = 'Epistemic Distance';
  wrapper.appendChild(epistTitle);
  wrapper.appendChild(epistContainer);

  container.appendChild(wrapper);

  function render() {
    renderRadial();
    renderCards();
    renderCategoryTimeline();
    renderEpistemicChain();
  }

  function renderRadial() {
    radialArea.innerHTML = '';
    const width = Math.min(radialArea.clientWidth || 700, 900);
    const height = 350;
    const cx = width / 2;
    const cy = height / 2;
    const radius = Math.min(width, height) / 2 - 60;

    const svg = d3.select(radialArea)
      .append('svg')
      .attr('viewBox', `0 0 ${width} ${height}`)
      .attr('preserveAspectRatio', 'xMidYMid meet');

    // Event hub
    svg.append('circle')
      .attr('cx', cx).attr('cy', cy)
      .attr('r', 45)
      .attr('fill', '#4338ca')
      .attr('opacity', 0.12);

    svg.append('circle')
      .attr('cx', cx).attr('cy', cy)
      .attr('r', 45)
      .attr('fill', 'none')
      .attr('stroke', '#4338ca')
      .attr('stroke-width', 2.5);

    svg.append('text')
      .attr('x', cx).attr('y', cy - 8)
      .attr('text-anchor', 'middle')
      .attr('font-size', '11px')
      .attr('font-weight', '700')
      .attr('fill', '#4338ca')
      .text('Zunftstreit');

    svg.append('text')
      .attr('x', cx).attr('y', cy + 8)
      .attr('text-anchor', 'middle')
      .attr('font-size', '10px')
      .attr('fill', '#6366f1')
      .text('1702');

    // Source nodes arranged radially
    const sources = scD.sources;
    const angleStep = (2 * Math.PI) / sources.length;
    const startAngle = -Math.PI / 2;

    const levelColors = {
      primary: '#0d9488',
      secondary: '#d97706',
      tertiary: '#475569'
    };

    sources.forEach((src, i) => {
      const angle = startAngle + i * angleStep;
      const sx = cx + radius * Math.cos(angle);
      const sy = cy + radius * Math.sin(angle);
      const color = levelColors[src.level] || '#475569';
      const isSelected = selectedSources.includes(src.id);

      // Connection line
      svg.append('line')
        .attr('x1', cx).attr('y1', cy)
        .attr('x2', sx).attr('y2', sy)
        .attr('stroke', color)
        .attr('stroke-width', isSelected ? 2.5 : 1)
        .attr('stroke-dasharray', src.level !== 'primary' ? '4,3' : 'none')
        .attr('opacity', isSelected ? 1 : 0.4);

      // Source node
      const g = svg.append('g')
        .attr('transform', `translate(${sx}, ${sy})`)
        .style('cursor', 'pointer');

      g.append('circle')
        .attr('r', 28)
        .attr('fill', isSelected ? color : '#f8fafc')
        .attr('stroke', color)
        .attr('stroke-width', isSelected ? 2.5 : 1.5)
        .attr('opacity', isSelected ? 1 : 0.8);

      // Year label
      g.append('text')
        .attr('text-anchor', 'middle')
        .attr('dy', '-0.3em')
        .attr('font-size', '12px')
        .attr('font-weight', '700')
        .attr('fill', isSelected ? '#fff' : color)
        .text(src.date);

      // Type label
      g.append('text')
        .attr('text-anchor', 'middle')
        .attr('dy', '1em')
        .attr('font-size', '7px')
        .attr('fill', isSelected ? 'rgba(255,255,255,0.8)' : '#94a3b8')
        .text(src.level);

      // Title below
      const titleLines = wrapText(src.title, 18);
      titleLines.forEach((line, li) => {
        g.append('text')
          .attr('text-anchor', 'middle')
          .attr('y', 38 + li * 12)
          .attr('font-size', '8px')
          .attr('fill', '#64748b')
          .text(line);
      });

      g.on('click', () => {
        if (selectedSources.includes(src.id)) {
          selectedSources = selectedSources.filter(id => id !== src.id);
        } else {
          if (selectedSources.length >= 2) selectedSources.shift();
          selectedSources.push(src.id);
        }
        render();
      });
    });

    // Instruction
    svg.append('text')
      .attr('x', cx).attr('y', height - 8)
      .attr('text-anchor', 'middle')
      .attr('font-size', '9px')
      .attr('fill', '#94a3b8')
      .text('Click two sources to compare perspectives');
  }

  function renderCards() {
    cardsContainer.innerHTML = '';

    const selSources = scD.sources.filter(s => selectedSources.includes(s.id));
    if (selSources.length === 0) return;

    selSources.forEach(src => {
      const card = document.createElement('div');
      card.className = 'event-reconstructor__card';

      const levelColors = { primary: 'teal', secondary: 'amber', tertiary: 'slate' };
      const colorClass = levelColors[src.level] || 'slate';

      let html = `
        <div class="event-reconstructor__card-header event-reconstructor__card-header--${colorClass}">
          <span class="event-reconstructor__card-type">${src.type.replace(/_/g, ' ')}</span>
          <span class="event-reconstructor__card-date">${src.date}</span>
          <span class="event-reconstructor__card-level">${src.level}</span>
        </div>
        <div class="event-reconstructor__card-title">${src.title}</div>
      `;

      if (src.text_diplomatic) {
        html += `<div class="event-reconstructor__card-text">"${src.text_diplomatic}"</div>`;
      }
      if (src.record) {
        html += `<div class="event-reconstructor__card-record">`;
        Object.entries(src.record).forEach(([key, val]) => {
          html += `<div><span class="event-reconstructor__card-key">${key}:</span> ${Array.isArray(val) ? val.join(', ') : val}</div>`;
        });
        html += `</div>`;
      }

      html += `<div class="event-reconstructor__card-char"><strong>Event:</strong> ${src.event_characterization}</div>`;
      html += `<div class="event-reconstructor__card-char"><strong>Meier:</strong> ${src.meier_characterization}</div>`;

      if (src.blind_spots) {
        html += `<div class="event-reconstructor__card-blind">`;
        html += `<strong>Blind spots:</strong>`;
        src.blind_spots.forEach(bs => {
          html += `<span class="event-reconstructor__blind-item">${bs}</span>`;
        });
        html += `</div>`;
      }

      card.innerHTML = html;
      cardsContainer.appendChild(card);
    });

    // Comparison
    renderComparison();
  }

  function renderComparison() {
    comparisonPanel.innerHTML = '';
    if (selectedSources.length !== 2) return;

    const comp = scD.perspective_comparisons?.find(c =>
      c.sources.includes(selectedSources[0]) && c.sources.includes(selectedSources[1])
    );
    if (!comp) {
      comparisonPanel.innerHTML = '<div class="event-reconstructor__no-comp">No direct comparison available for this pair</div>';
      return;
    }

    let html = `<div class="event-reconstructor__comp-title">Perspective Comparison</div>`;
    html += `<div class="event-reconstructor__comp-grid">`;

    if (comp.agreement.length) {
      html += `<div class="event-reconstructor__comp-section event-reconstructor__comp-section--agree">
        <div class="event-reconstructor__comp-label">Agreement</div>
        ${comp.agreement.map(a => `<div class="event-reconstructor__comp-item">${a}</div>`).join('')}
      </div>`;
    }
    if (comp.unique_to_a.length) {
      html += `<div class="event-reconstructor__comp-section event-reconstructor__comp-section--unique-a">
        <div class="event-reconstructor__comp-label">Only in ${comp.sources[0].replace('src-d-', '').toUpperCase()}</div>
        ${comp.unique_to_a.map(a => `<div class="event-reconstructor__comp-item">${a}</div>`).join('')}
      </div>`;
    }
    if (comp.unique_to_b.length) {
      html += `<div class="event-reconstructor__comp-section event-reconstructor__comp-section--unique-b">
        <div class="event-reconstructor__comp-label">Only in ${comp.sources[1].replace('src-d-', '').toUpperCase()}</div>
        ${comp.unique_to_b.map(a => `<div class="event-reconstructor__comp-item">${a}</div>`).join('')}
      </div>`;
    }
    if (comp.contradiction.length) {
      html += `<div class="event-reconstructor__comp-section event-reconstructor__comp-section--contra">
        <div class="event-reconstructor__comp-label">Contradiction</div>
        ${comp.contradiction.map(a => `<div class="event-reconstructor__comp-item">${a}</div>`).join('')}
      </div>`;
    }
    if (comp.tension.length) {
      html += `<div class="event-reconstructor__comp-section event-reconstructor__comp-section--tension">
        <div class="event-reconstructor__comp-label">Tension</div>
        ${comp.tension.map(a => `<div class="event-reconstructor__comp-item">${a}</div>`).join('')}
      </div>`;
    }

    html += `</div>`;
    comparisonPanel.innerHTML = html;
  }

  function renderCategoryTimeline() {
    catTimelineContainer.innerHTML = '';

    const cats = scD.categorizations;
    const width = Math.min(catTimelineContainer.clientWidth || 700, 900);
    const height = 140;
    const margin = { left: 40, right: 40, top: 20, bottom: 20 };

    const svg = d3.select(catTimelineContainer)
      .append('svg')
      .attr('viewBox', `0 0 ${width} ${height}`)
      .attr('preserveAspectRatio', 'xMidYMid meet');

    const xScale = d3.scaleLinear()
      .domain([1680, 2040])
      .range([margin.left, width - margin.right]);

    const cy = height / 2;

    // Timeline line
    svg.append('line')
      .attr('x1', margin.left).attr('y1', cy)
      .attr('x2', width - margin.right).attr('y2', cy)
      .attr('stroke', '#e2e8f0').attr('stroke-width', 2);

    // Category nodes
    const colors = ['#0d9488', '#d97706', '#475569'];

    cats.forEach((cat, i) => {
      const year = parseInt(cat.period);
      const x = xScale(year);
      const color = colors[i];

      // Node
      svg.append('circle')
        .attr('cx', x).attr('cy', cy)
        .attr('r', 8)
        .attr('fill', color)
        .attr('stroke', '#fff')
        .attr('stroke-width', 2);

      // Year
      svg.append('text')
        .attr('x', x).attr('y', cy + 24)
        .attr('text-anchor', 'middle')
        .attr('font-size', '11px')
        .attr('font-weight', '700')
        .attr('fill', color)
        .text(cat.period);

      // Original label
      svg.append('text')
        .attr('x', x).attr('y', cy - 18)
        .attr('text-anchor', 'middle')
        .attr('font-size', '10px')
        .attr('fill', color)
        .attr('font-weight', '600')
        .text(`"${cat.label_original}"`);

      // Framework
      svg.append('text')
        .attr('x', x).attr('y', cy + 38)
        .attr('text-anchor', 'middle')
        .attr('font-size', '8px')
        .attr('fill', '#94a3b8')
        .text(cat.framework_type);

      // Arrows between
      if (i < cats.length - 1) {
        const nextYear = parseInt(cats[i + 1].period);
        const nextX = xScale(nextYear);
        const arrowX = (x + nextX) / 2;

        svg.append('text')
          .attr('x', arrowX).attr('y', cy + 5)
          .attr('text-anchor', 'middle')
          .attr('font-size', '16px')
          .attr('fill', '#cbd5e1')
          .text('→');
      }
    });
  }

  function renderEpistemicChain() {
    epistContainer.innerHTML = '';

    const chain = scD.interpretive_chain;
    const grid = document.createElement('div');
    grid.className = 'event-reconstructor__epist-grid';

    chain.forEach((level, i) => {
      const card = document.createElement('div');
      card.className = 'event-reconstructor__epist-card';
      card.style.opacity = 1 - (i * 0.25);

      let html = `
        <div class="event-reconstructor__epist-level">Level ${level.level}: ${level.type}</div>
        <div class="event-reconstructor__epist-source">${level.source}</div>
        <div class="event-reconstructor__epist-desc">${level.description}</div>
        <div class="event-reconstructor__epist-dims">${level.information_dimensions} dimensions</div>
      `;

      if (level.what_is_lost) {
        html += `<div class="event-reconstructor__epist-lost">Lost: ${level.what_is_lost.join(', ')}</div>`;
      }
      if (level.what_is_added) {
        html += `<div class="event-reconstructor__epist-added">Added: ${level.what_is_added.join(', ')}</div>`;
      }

      card.innerHTML = html;
      grid.appendChild(card);

      if (i < chain.length - 1) {
        const arrow = document.createElement('div');
        arrow.className = 'event-reconstructor__epist-arrow';
        arrow.textContent = '↓';
        grid.appendChild(arrow);
      }
    });

    epistContainer.appendChild(grid);
  }

  function wrapText(text, maxChars) {
    const words = text.split(' ');
    const lines = [];
    let current = '';
    words.forEach(word => {
      if ((current + ' ' + word).trim().length > maxChars) {
        if (current) lines.push(current.trim());
        current = word;
      } else {
        current += ' ' + word;
      }
    });
    if (current.trim()) lines.push(current.trim());
    return lines;
  }

  render();
}
