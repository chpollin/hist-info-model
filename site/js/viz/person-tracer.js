/**
 * Person Tracer — Viz 2
 * "What do we really know about Johann Meier?"
 * Grid of persons × sources with meaningful absence visualization.
 */

export function initPersonTracer(containerSelector, data) {
  const container = document.querySelector(containerSelector);
  if (!container || !data.ready) return;

  const scB = data.scenarioB;
  container.innerHTML = '';

  const persons = scB.persons;
  const sources = scB.sources;

  let activePerson = persons[0]; // Johann by default
  let absenceVisible = true;

  // ── DOM Structure ──
  const wrapper = document.createElement('div');
  wrapper.className = 'person-tracer';

  // Person selector
  const selector = document.createElement('div');
  selector.className = 'person-tracer__selector';

  const selectorLabel = document.createElement('span');
  selectorLabel.className = 'person-tracer__selector-label';
  selectorLabel.textContent = 'Person:';
  selector.appendChild(selectorLabel);

  persons.forEach(person => {
    const btn = document.createElement('button');
    const firstName = person.name_variants?.[person.name_variants.length - 1]?.form?.split(' ')[0]
      || person.id.replace('per-', '');
    btn.className = 'person-tracer__person-btn' + (person === activePerson ? ' person-tracer__person-btn--active' : '');
    btn.textContent = firstName;
    btn.addEventListener('click', () => {
      activePerson = person;
      selector.querySelectorAll('.person-tracer__person-btn').forEach(b => b.classList.remove('person-tracer__person-btn--active'));
      btn.classList.add('person-tracer__person-btn--active');
      renderInfo();
      renderGrid();
    });
    selector.appendChild(btn);
  });

  // Absence toggle
  const absenceBtn = document.createElement('button');
  absenceBtn.className = 'person-tracer__absence-btn';
  absenceBtn.innerHTML = '<span class="toggle-on">Hide Absences</span><span class="toggle-off" hidden>Show Absences</span>';
  absenceBtn.addEventListener('click', () => {
    absenceVisible = !absenceVisible;
    absenceBtn.querySelector('.toggle-on').hidden = !absenceVisible;
    absenceBtn.querySelector('.toggle-off').hidden = absenceVisible;
    renderGrid();
  });
  selector.appendChild(absenceBtn);

  wrapper.appendChild(selector);

  // Info panel
  const infoPanel = document.createElement('div');
  infoPanel.className = 'person-tracer__info';
  wrapper.appendChild(infoPanel);

  // SVG container
  const svgContainer = document.createElement('div');
  svgContainer.className = 'person-tracer__grid';
  wrapper.appendChild(svgContainer);

  // Legend
  const legend = document.createElement('div');
  legend.className = 'person-tracer__legend';
  legend.innerHTML = `
    <div class="person-tracer__legend-item"><span class="person-tracer__legend-dot person-tracer__legend-dot--present"></span> Appears in source</div>
    <div class="person-tracer__legend-item"><span class="person-tracer__legend-dot person-tracer__legend-dot--known-unknown"></span> Known Unknown (source destroyed)</div>
    <div class="person-tracer__legend-item"><span class="person-tracer__legend-dot person-tracer__legend-dot--omission"></span> Systematic Omission (by design)</div>
    <div class="person-tracer__legend-item"><span class="person-tracer__legend-dot person-tracer__legend-dot--empty"></span> Not mentioned</div>
  `;
  wrapper.appendChild(legend);

  container.appendChild(wrapper);

  // ── Render info panel ──
  function renderInfo() {
    const p = activePerson;
    const normName = p.name_variants?.find(v => v.type === 'normalized')?.form || p.id;
    const birthStr = p.birth?.date || p.birth?.date_estimate || '?';
    const deathStr = p.death?.date || '?';
    const birthNote = p.birth?.known_unknown ? ' (known unknown — parish registers destroyed)' : '';
    const deathNote = p.death?.known_unknown === false && !p.death?.date ? ' (simply not recorded)' : '';

    let html = `<div class="person-tracer__info-name">${normName}</div>`;
    html += `<div class="person-tracer__info-dates">${birthStr}${birthNote} – ${deathStr}${deathNote}</div>`;

    // Name variants
    if (p.name_variants && p.name_variants.length > 1) {
      html += `<div class="person-tracer__info-variants">`;
      p.name_variants.filter(v => v.type === 'diplomatic').forEach(v => {
        html += `<span class="person-tracer__variant">"${v.form}" <small>(${v.source?.replace('src-', '')})</small></span>`;
      });
      html += `</div>`;
    }

    // Competing identifications
    if (p.identifications) {
      html += `<div class="person-tracer__identifications">`;
      html += `<div class="person-tracer__id-title">Competing Identifications</div>`;
      p.identifications.forEach(ident => {
        html += `<div class="person-tracer__id-card">
          <span class="person-tracer__id-claim">${ident.claim}</span>
          <span class="person-tracer__id-meta">${ident.researcher} (${ident.year}), confidence: ${ident.confidence}</span>
        </div>`;
      });
      html += `</div>`;
    }

    if (p.identification_problem) {
      html += `<div class="person-tracer__identifications">`;
      html += `<div class="person-tracer__id-title">${p.identification_problem.question}</div>`;
      html += `<div class="person-tracer__id-card">
        <span class="person-tracer__id-claim">${p.identification_problem.interpretation_a.claim}</span>
        <span class="person-tracer__id-meta">${p.identification_problem.interpretation_a.researcher}, confidence: ${p.identification_problem.interpretation_a.confidence}</span>
      </div>`;
      html += `<div class="person-tracer__id-card">
        <span class="person-tracer__id-claim">${p.identification_problem.interpretation_b.claim}</span>
        <span class="person-tracer__id-meta">${p.identification_problem.interpretation_b.researcher}, confidence: ${p.identification_problem.interpretation_b.confidence}</span>
      </div>`;
      html += `</div>`;
    }

    infoPanel.innerHTML = html;
  }

  // ── Render grid ──
  function renderGrid() {
    svgContainer.innerHTML = '';

    const width = Math.min(svgContainer.clientWidth || 900, 1100);
    const margin = { top: 20, right: 30, bottom: 30, left: 200 };
    const rowHeight = 60;
    const height = margin.top + sources.length * rowHeight + margin.bottom;

    const svg = d3.select(svgContainer)
      .append('svg')
      .attr('viewBox', `0 0 ${width} ${height}`)
      .attr('preserveAspectRatio', 'xMidYMid meet');

    // Defs
    const defs = svg.append('defs');

    // Torn pattern
    const tornPat = defs.append('pattern')
      .attr('id', 'pt-torn')
      .attr('width', 8).attr('height', 8)
      .attr('patternUnits', 'userSpaceOnUse');
    tornPat.append('rect').attr('width', 8).attr('height', 8).attr('fill', '#faf5ff');
    tornPat.append('line').attr('x1', 0).attr('y1', 0).attr('x2', 8).attr('y2', 8)
      .attr('stroke', '#c4b5fd').attr('stroke-width', 0.8);

    // Scales
    const xScale = d3.scaleLinear()
      .domain([1640, 1760])
      .range([margin.left, width - margin.right]);

    const yScale = d3.scaleBand()
      .domain(sources.map(s => s.id))
      .range([margin.top, height - margin.bottom])
      .padding(0.15);

    // Grid background
    sources.forEach(src => {
      const y = yScale(src.id);
      const h = yScale.bandwidth();

      // Row background
      svg.append('rect')
        .attr('x', margin.left)
        .attr('y', y)
        .attr('width', width - margin.left - margin.right)
        .attr('height', h)
        .attr('fill', src.status === 'destroyed' ? '#faf5ff' : '#f8fafc')
        .attr('opacity', 0.5);

      // Row label
      const label = src.title.length > 28 ? src.title.substring(0, 26) + '…' : src.title;
      svg.append('text')
        .attr('x', margin.left - 10)
        .attr('y', y + h / 2 + 4)
        .attr('text-anchor', 'end')
        .attr('font-size', '10px')
        .attr('font-weight', src.status === 'destroyed' ? '500' : '500')
        .attr('fill', src.status === 'destroyed' ? '#7c3aed' : '#475569')
        .attr('font-style', src.status === 'destroyed' ? 'italic' : 'normal')
        .text(label);

      if (src.status === 'destroyed') {
        svg.append('text')
          .attr('x', margin.left - 10)
          .attr('y', y + h / 2 + 16)
          .attr('text-anchor', 'end')
          .attr('font-size', '8px')
          .attr('fill', '#a78bfa')
          .attr('font-weight', '600')
          .attr('letter-spacing', '0.08em')
          .text('DESTROYED');
      }

      // Grid lines
      svg.append('line')
        .attr('x1', margin.left).attr('y1', y + h)
        .attr('x2', width - margin.right).attr('y2', y + h)
        .attr('stroke', '#e2e8f0').attr('stroke-width', 0.5);
    });

    // Time axis
    const ticks = [1650, 1681, 1700, 1720, 1750];
    ticks.forEach(year => {
      const x = xScale(year);
      svg.append('line')
        .attr('x1', x).attr('y1', margin.top)
        .attr('x2', x).attr('y2', height - margin.bottom)
        .attr('stroke', year === 1681 ? '#7c3aed' : '#e2e8f0')
        .attr('stroke-width', year === 1681 ? 1.5 : 0.5)
        .attr('stroke-dasharray', year === 1681 ? '4,3' : 'none');

      svg.append('text')
        .attr('x', x).attr('y', height - margin.bottom + 16)
        .attr('text-anchor', 'middle')
        .attr('font-size', '10px')
        .attr('fill', year === 1681 ? '#7c3aed' : '#94a3b8')
        .attr('font-weight', year === 1681 ? '700' : '400')
        .text(year);
    });

    // Fire scar label
    const fireX = xScale(1681);
    svg.append('text')
      .attr('x', fireX).attr('y', margin.top - 5)
      .attr('text-anchor', 'middle')
      .attr('font-size', '9px')
      .attr('fill', '#7c3aed')
      .attr('font-weight', '600')
      .text('Fire 1681');

    // ── Systematic Omission regions ──
    if (absenceVisible) {
      sources.forEach(src => {
        if (src.systematic_omission && activePerson.absence_from_sources) {
          const absenceInfo = activePerson.absence_from_sources[src.id.replace('src-', '')];
          if (absenceInfo?.reason === 'systematic_omission') {
            const y = yScale(src.id);
            const h = yScale.bandwidth();
            svg.append('rect')
              .attr('x', margin.left + 2)
              .attr('y', y + 2)
              .attr('width', width - margin.left - margin.right - 4)
              .attr('height', h - 4)
              .attr('fill', '#faf5ff')
              .attr('stroke', '#7c3aed')
              .attr('stroke-width', 1)
              .attr('stroke-dasharray', '4,3')
              .attr('rx', 4)
              .attr('opacity', 0.6)
              .attr('class', 'person-tracer__omission-region');

            svg.append('text')
              .attr('x', (margin.left + width - margin.right) / 2)
              .attr('y', y + h / 2 + 4)
              .attr('text-anchor', 'middle')
              .attr('font-size', '9px')
              .attr('fill', '#7c3aed')
              .attr('font-weight', '500')
              .attr('font-style', 'italic')
              .text(`Systematically excluded: ${src.systematic_omission.excluded_category}`)
              .attr('class', 'person-tracer__omission-label');
          }
        }
      });

      // Transmission gap overlay
      const destroyedSrc = sources.find(s => s.status === 'destroyed');
      if (destroyedSrc) {
        const y = yScale(destroyedSrc.id);
        const h = yScale.bandwidth();
        svg.append('rect')
          .attr('x', margin.left + 2)
          .attr('y', y + 2)
          .attr('width', width - margin.left - margin.right - 4)
          .attr('height', h - 4)
          .attr('fill', 'url(#pt-torn)')
          .attr('rx', 4)
          .attr('opacity', 0.8)
          .attr('class', 'person-tracer__gap-region');
      }
    }

    // ── Appearance nodes ──
    const p = activePerson;
    if (p.appearances) {
      p.appearances.forEach(app => {
        const srcId = app.source;
        const year = parseInt(app.date);
        if (!yScale(srcId) && yScale(srcId) !== 0) return;

        const cx = xScale(year);
        const cy = yScale(srcId) + yScale.bandwidth() / 2;

        // Filled circle = present
        const g = svg.append('g')
          .attr('transform', `translate(${cx}, ${cy})`)
          .style('cursor', 'pointer');

        g.append('circle')
          .attr('r', 10)
          .attr('fill', '#0d9488')
          .attr('stroke', '#fff')
          .attr('stroke-width', 2);

        g.append('text')
          .attr('dy', '0.35em')
          .attr('text-anchor', 'middle')
          .attr('font-size', '7px')
          .attr('fill', '#fff')
          .attr('font-weight', '700')
          .text(app.date);

        // Tooltip on hover
        if (app.characterization) {
          const tooltip = svg.append('g')
            .attr('transform', `translate(${cx}, ${cy - 20})`)
            .attr('opacity', 0)
            .attr('class', 'person-tracer__tooltip');

          const bg = tooltip.append('rect')
            .attr('rx', 6)
            .attr('fill', '#1e293b')
            .attr('opacity', 0.95);

          const text = tooltip.append('text')
            .attr('text-anchor', 'middle')
            .attr('font-size', '9px')
            .attr('fill', '#fff')
            .attr('y', -4);

          text.append('tspan').text(`"${app.characterization}"`);
          text.append('tspan')
            .attr('x', 0).attr('dy', '1.2em')
            .attr('font-size', '8px')
            .attr('fill', '#94a3b8')
            .text(app.content);

          const bbox = text.node().getBBox();
          bg.attr('x', bbox.x - 8).attr('y', bbox.y - 6)
            .attr('width', bbox.width + 16).attr('height', bbox.height + 12);

          g.on('mouseenter', () => tooltip.transition().duration(200).attr('opacity', 1))
           .on('mouseleave', () => tooltip.transition().duration(200).attr('opacity', 0));
        }
      });
    }

    // ── Known Unknown markers ──
    if (absenceVisible && p.birth?.known_unknown) {
      const birthYear = parseInt(p.birth.date_estimate?.replace('ca. ', '')) || 1660;
      // Find a pre-fire parish source
      const parishPre = sources.find(s => s.id === 'src-parish-pre');
      if (parishPre) {
        const cx = xScale(birthYear);
        const cy = yScale(parishPre.id) + yScale.bandwidth() / 2;

        svg.append('circle')
          .attr('cx', cx).attr('cy', cy)
          .attr('r', 10)
          .attr('fill', 'rgba(250, 245, 255, 0.4)')
          .attr('stroke', '#7c3aed')
          .attr('stroke-width', 2)
          .attr('stroke-dasharray', '3,2')
          .attr('class', 'person-tracer__known-unknown');

        svg.append('text')
          .attr('x', cx).attr('y', cy + 4)
          .attr('text-anchor', 'middle')
          .attr('font-size', '12px')
          .attr('fill', '#7c3aed')
          .attr('font-weight', '700')
          .text('?')
          .attr('class', 'person-tracer__known-unknown');

        svg.append('text')
          .attr('x', cx).attr('y', cy + 22)
          .attr('text-anchor', 'middle')
          .attr('font-size', '7px')
          .attr('fill', '#7c3aed')
          .attr('font-weight', '500')
          .text('birth: known unknown')
          .attr('class', 'person-tracer__known-unknown');
      }
    }

    // ── Identity fork for Hans Weber ──
    if (p.identification_problem) {
      const ip = p.identification_problem;
      // Draw fork symbol at the overlap point
      const guildApp = p.appearances?.find(a => a.source === 'src-guild');
      const councilEntry = p.name_variants?.find(v => v.source === 'src-council');
      if (guildApp) {
        const x = xScale(parseInt(guildApp.date));
        const y1 = yScale('src-guild') + yScale.bandwidth() / 2;

        // Fork line to council row
        const y2 = yScale('src-council') ? yScale('src-council') + yScale.bandwidth() / 2 : y1 + 60;

        svg.append('line')
          .attr('x1', x + 14).attr('y1', y1)
          .attr('x2', x + 40).attr('y2', (y1 + y2) / 2)
          .attr('stroke', '#d97706').attr('stroke-width', 1.5).attr('stroke-dasharray', '4,2');

        svg.append('text')
          .attr('x', x + 44).attr('y', (y1 + y2) / 2 + 4)
          .attr('font-size', '11px')
          .attr('fill', '#d97706')
          .attr('font-weight', '700')
          .text('?');

        svg.append('text')
          .attr('x', x + 54).attr('y', (y1 + y2) / 2 + 4)
          .attr('font-size', '8px')
          .attr('fill', '#d97706')
          .text('same person?');
      }
    }
  }

  // Initial render
  renderInfo();
  renderGrid();
}
