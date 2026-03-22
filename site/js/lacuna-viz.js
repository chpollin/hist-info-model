/**
 * Lacuna Visualization — Interactive absence modeling demonstration.
 * Shows three types of absence and allows toggling visibility.
 * Refined visual design with smoother transitions.
 */

export function initLacunaViz(containerSelector, data) {
  const container = document.querySelector(containerSelector);
  if (!container || !data.ready) return;

  const width = Math.min(container.clientWidth, 1100);
  const height = 600;

  container.innerHTML = '';

  const svg = d3.select(container)
    .append('svg')
    .attr('viewBox', `0 0 ${width} ${height}`)
    .attr('preserveAspectRatio', 'xMidYMid meet');

  let lacunaVisible = true;

  // ── Data from Scenario B ──
  const persons = [
    { id: 'johann', name: 'Johann Meier', birth: '~1655?', death: '1723', x: 200, y: 180, known_unknown_birth: true },
    { id: 'anna', name: 'Anna Meier née Berger', birth: '?', death: '1731', x: 500, y: 180, systematically_excluded: true },
    { id: 'peter', name: 'Peter Meier', birth: '1682', death: '?', x: 350, y: 340, known_unknown_birth: false },
    { id: 'hans', name: 'Hans Weber', birth: '?', death: '?', x: 700, y: 280, known_unknown_birth: false },
  ];

  const sources = [
    { id: 'guild', name: 'Guild Register', y: 480, x: 150, w: 180 },
    { id: 'parish_lost', name: 'Parish Registers\n1600–1680', y: 480, x: 380, w: 180, destroyed: true },
    { id: 'parish_ext', name: 'Parish Registers\n1682–1800', y: 480, x: 610, w: 180 },
    { id: 'tax', name: 'Tax List 1695', y: 480, x: 840, w: 140 },
  ];

  const links = [
    { person: 'johann', source: 'guild', label: '1678 master' },
    { person: 'johann', source: 'tax', label: '1695' },
    { person: 'anna', source: 'parish_ext', label: '1680 marriage' },
    { person: 'anna', source: 'parish_ext', label: '1731 death' },
    { person: 'peter', source: 'parish_ext', label: '1682 baptism' },
    { person: 'peter', source: 'guild', label: '1705 master' },
  ];

  // ── Defs ──
  const defs = svg.append('defs');

  // Torn pattern for destroyed sources
  const tornPat = defs.append('pattern')
    .attr('id', 'torn-pattern')
    .attr('width', 12).attr('height', 12)
    .attr('patternUnits', 'userSpaceOnUse');
  tornPat.append('rect').attr('width', 12).attr('height', 12).attr('fill', '#ede9fe');
  tornPat.append('line').attr('x1', 0).attr('y1', 0).attr('x2', 12).attr('y2', 12)
    .attr('stroke', '#c4b5fd').attr('stroke-width', 1);
  tornPat.append('line').attr('x1', 12).attr('y1', 0).attr('x2', 0).attr('y2', 12)
    .attr('stroke', '#c4b5fd').attr('stroke-width', 1);

  // Drop shadow filter
  const filter = defs.append('filter').attr('id', 'node-shadow');
  filter.append('feDropShadow')
    .attr('dx', 0).attr('dy', 1)
    .attr('stdDeviation', 2)
    .attr('flood-opacity', 0.08);

  // ── Timeline at top ──
  const timelineY = 50;
  const timelineX1 = 80;
  const timelineX2 = width - 80;
  const timeScale = d3.scaleLinear().domain([1600, 1800]).range([timelineX1, timelineX2]);

  const timelineG = svg.append('g').attr('class', 'timeline');
  timelineG.append('line')
    .attr('x1', timelineX1).attr('y1', timelineY)
    .attr('x2', timelineX2).attr('y2', timelineY)
    .attr('stroke', '#cbd5e1').attr('stroke-width', 2);

  [1600, 1650, 1700, 1750, 1800].forEach(year => {
    timelineG.append('line')
      .attr('x1', timeScale(year)).attr('y1', timelineY - 6)
      .attr('x2', timeScale(year)).attr('y2', timelineY + 6)
      .attr('stroke', '#94a3b8').attr('stroke-width', 1);
    timelineG.append('text')
      .attr('x', timeScale(year)).attr('y', timelineY + 20)
      .attr('text-anchor', 'middle').attr('font-size', '10px').attr('fill', '#94a3b8')
      .text(year);
  });

  // ── Transmission Gap (R-M3.1) ──
  const gapG = svg.append('g').attr('class', 'lacuna-gap');

  const gapX1 = timeScale(1600);
  const gapX2 = timeScale(1680);

  gapG.append('rect')
    .attr('x', gapX1).attr('y', timelineY - 12)
    .attr('width', gapX2 - gapX1).attr('height', 24)
    .attr('fill', 'url(#torn-pattern)')
    .attr('opacity', 0.6)
    .attr('rx', 2);

  gapG.append('text')
    .attr('x', (gapX1 + gapX2) / 2).attr('y', timelineY - 18)
    .attr('text-anchor', 'middle').attr('font-size', '9px').attr('fill', '#7c3aed')
    .attr('font-weight', '600')
    .text('Parish registers destroyed, 1681');

  gapG.append('text')
    .attr('x', gapX2 + 4).attr('y', timelineY + 4)
    .attr('font-size', '14px')
    .text('1681');

  // ── Systematic Omission Region (R-M2.2) ──
  const omissionG = svg.append('g').attr('class', 'lacuna-omission');

  omissionG.append('rect')
    .attr('x', 60).attr('y', 130)
    .attr('width', 200).attr('height', 120)
    .attr('fill', '#faf5ff')
    .attr('stroke', '#7c3aed')
    .attr('stroke-width', 1.5)
    .attr('stroke-dasharray', '6,3')
    .attr('rx', 12)
    .attr('opacity', 0.7);

  omissionG.append('text')
    .attr('x', 160).attr('y', 148)
    .attr('text-anchor', 'middle')
    .attr('font-size', '9px')
    .attr('fill', '#7c3aed')
    .attr('font-weight', '600')
    .text('Systematically excluded: women');

  omissionG.append('text')
    .attr('x', 160).attr('y', 162)
    .attr('text-anchor', 'middle')
    .attr('font-size', '8px')
    .attr('fill', '#a78bfa')
    .text('(Guild registers defined members as male)');

  // ── Links (person → source) — drawn before persons so they appear behind ──
  const linkG = svg.append('g').attr('class', 'links');

  links.forEach(link => {
    const person = persons.find(p => p.id === link.person);
    const source = sources.find(s => s.id === link.source);
    if (!person || !source) return;

    const isExcluded = person.systematically_excluded;

    linkG.append('line')
      .attr('x1', person.x).attr('y1', person.y + 28)
      .attr('x2', source.x).attr('y2', source.y - 20)
      .attr('stroke', isExcluded ? '#c4b5fd' : '#cbd5e1')
      .attr('stroke-width', 1.5)
      .attr('stroke-dasharray', isExcluded ? '4,3' : 'none');

    const mx = (person.x + source.x) / 2;
    const my = (person.y + 28 + source.y - 20) / 2;

    linkG.append('text')
      .attr('x', mx).attr('y', my - 4)
      .attr('text-anchor', 'middle')
      .attr('font-size', '8px')
      .attr('fill', '#94a3b8')
      .attr('font-weight', '500')
      .text(link.label);
  });

  // ── Person Nodes ──
  const personG = svg.append('g').attr('class', 'persons');

  persons.forEach(p => {
    const g = personG.append('g')
      .attr('transform', `translate(${p.x}, ${p.y})`)
      .attr('class', `person person-${p.id}`)
      .attr('filter', 'url(#node-shadow)');

    const isExcluded = p.systematically_excluded;
    const hasKnownUnknown = p.known_unknown_birth;

    if (isExcluded) {
      g.append('circle')
        .attr('r', 28)
        .attr('fill', 'rgba(250, 245, 255, 0.5)')
        .attr('stroke', '#a78bfa')
        .attr('stroke-width', 2)
        .attr('stroke-dasharray', '4,3')
        .attr('class', 'lacuna-excluded-node');
    } else {
      g.append('circle')
        .attr('r', 28)
        .attr('fill', '#f8fafc')
        .attr('stroke', '#475569')
        .attr('stroke-width', 2);
    }

    // Name
    g.append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', '-0.2em')
      .attr('font-size', '10px')
      .attr('font-weight', '600')
      .attr('fill', isExcluded ? '#a78bfa' : '#1e293b')
      .text(p.name.split(' ')[0]);

    g.append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', '1em')
      .attr('font-size', '9px')
      .attr('fill', isExcluded ? '#a78bfa' : '#64748b')
      .text(p.name.split(' ').slice(1).join(' '));

    // Birth date — Known Unknown (R-E1.3)
    if (hasKnownUnknown) {
      const birthG = g.append('g')
        .attr('transform', 'translate(-40, -40)')
        .attr('class', 'lacuna-known-unknown');

      birthG.append('circle')
        .attr('r', 14)
        .attr('fill', 'rgba(250, 245, 255, 0.4)')
        .attr('stroke', '#7c3aed')
        .attr('stroke-width', 2)
        .attr('stroke-dasharray', '3,2');

      birthG.append('text')
        .attr('text-anchor', 'middle')
        .attr('dy', '0.35em')
        .attr('font-size', '10px')
        .attr('fill', '#7c3aed')
        .attr('font-weight', '700')
        .text('?');

      birthG.append('text')
        .attr('x', 0).attr('y', 22)
        .attr('text-anchor', 'middle')
        .attr('font-size', '7px')
        .attr('fill', '#7c3aed')
        .text('birth: known unknown');
    }
  });

  // ── Source Boxes ──
  const sourceG = svg.append('g').attr('class', 'sources');

  sources.forEach(s => {
    const g = sourceG.append('g')
      .attr('transform', `translate(${s.x}, ${s.y})`)
      .attr('class', `source source-${s.id}`);

    if (s.destroyed) {
      g.append('rect')
        .attr('x', -s.w/2).attr('y', -20)
        .attr('width', s.w).attr('height', 40)
        .attr('fill', '#faf5ff')
        .attr('stroke', '#7c3aed')
        .attr('stroke-width', 1.5)
        .attr('stroke-dasharray', '6,3')
        .attr('rx', 8)
        .attr('class', 'lacuna-destroyed-source');

      const lines = s.name.split('\n');
      lines.forEach((line, i) => {
        g.append('text')
          .attr('text-anchor', 'middle')
          .attr('dy', (i - 0.3) * 14)
          .attr('font-size', '10px')
          .attr('fill', '#7c3aed')
          .attr('font-style', 'italic')
          .text(line);
      });

      g.append('text')
        .attr('text-anchor', 'middle')
        .attr('y', 30)
        .attr('font-size', '8px')
        .attr('fill', '#a78bfa')
        .attr('font-weight', '600')
        .attr('letter-spacing', '0.1em')
        .text('DESTROYED');
    } else {
      g.append('rect')
        .attr('x', -s.w/2).attr('y', -20)
        .attr('width', s.w).attr('height', 40)
        .attr('fill', '#f8fafc')
        .attr('stroke', '#94a3b8')
        .attr('stroke-width', 1.5)
        .attr('rx', 8)
        .attr('filter', 'url(#node-shadow)');

      const lines = s.name.split('\n');
      lines.forEach((line, i) => {
        g.append('text')
          .attr('text-anchor', 'middle')
          .attr('dy', (i - 0.3) * 14)
          .attr('font-size', '10px')
          .attr('fill', '#475569')
          .attr('font-weight', '500')
          .text(line);
      });
    }
  });

  // ── Legend ──
  const legendG = svg.append('g').attr('transform', `translate(${width - 240}, 100)`);

  // Legend background
  legendG.append('rect')
    .attr('x', -12).attr('y', -16)
    .attr('width', 230).attr('height', 100)
    .attr('fill', 'rgba(255,255,255,0.85)')
    .attr('stroke', '#e2e8f0')
    .attr('stroke-width', 1)
    .attr('rx', 8);

  const legendItems = [
    { label: 'Known Unknown (R-E1.3)', symbol: 'hollow-circle' },
    { label: 'Systematic Omission (R-M2.2)', symbol: 'void-region' },
    { label: 'Transmission Gap (R-M3.1)', symbol: 'torn-segment' },
  ];

  legendItems.forEach((item, i) => {
    const y = i * 28;
    legendG.append('circle')
      .attr('cx', 8).attr('cy', y)
      .attr('r', 8)
      .attr('fill', 'rgba(250, 245, 255, 0.4)')
      .attr('stroke', '#7c3aed')
      .attr('stroke-width', 1.5)
      .attr('stroke-dasharray', '3,2');
    legendG.append('text')
      .attr('x', 22).attr('y', y + 4)
      .attr('font-size', '9px')
      .attr('fill', '#475569')
      .attr('font-weight', '500')
      .text(item.label);
  });

  // ── Toggle Functionality ──
  const toggleBtn = document.getElementById('lacuna-toggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      lacunaVisible = !lacunaVisible;

      toggleBtn.querySelector('.toggle-on').hidden = !lacunaVisible;
      toggleBtn.querySelector('.toggle-off').hidden = lacunaVisible;

      const dur = 700;

      if (lacunaVisible) {
        gapG.transition().duration(dur).attr('opacity', 1);
        omissionG.transition().duration(dur).attr('opacity', 1);
        svg.selectAll('.lacuna-known-unknown').transition().duration(dur).attr('opacity', 1);
        svg.selectAll('.lacuna-excluded-node').transition().duration(dur).attr('opacity', 1);
        svg.selectAll('.lacuna-destroyed-source').transition().duration(dur).attr('opacity', 1);
        legendG.transition().duration(dur).attr('opacity', 1);
        svg.select('.person-anna').transition().duration(dur).attr('opacity', 1);
        svg.select('.source-parish_lost').transition().duration(dur).attr('opacity', 1);
      } else {
        gapG.transition().duration(dur).attr('opacity', 0);
        omissionG.transition().duration(dur).attr('opacity', 0);
        svg.selectAll('.lacuna-known-unknown').transition().duration(dur).attr('opacity', 0);
        svg.selectAll('.lacuna-excluded-node').transition().duration(dur).attr('opacity', 0);
        svg.selectAll('.lacuna-destroyed-source').transition().duration(dur).attr('opacity', 0);
        legendG.transition().duration(dur).attr('opacity', 0);
        svg.select('.person-anna').transition().duration(dur).attr('opacity', 0.08);
        svg.select('.source-parish_lost').transition().duration(dur).attr('opacity', 0.08);
      }
    });
  }

  // ── Section Label ──
  svg.append('text')
    .attr('x', width / 2).attr('y', height - 10)
    .attr('text-anchor', 'middle')
    .attr('font-size', '10px')
    .attr('fill', '#94a3b8')
    .attr('font-weight', '500')
    .text('Scenario B: Prosopographic Database — Brückstadt, 1650–1750');
}
