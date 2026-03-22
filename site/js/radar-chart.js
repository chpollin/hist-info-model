/**
 * Radar Chart — Approach coverage profile comparison.
 * Overlayable polygons on 4 group axes.
 * Refined visuals with better colors and hover effects.
 */

export function initRadarChart(containerSelector, data) {
  const container = document.querySelector(containerSelector);
  if (!container || !data.ready) return;

  const width = Math.min(container.clientWidth, 600);
  const height = 500;
  const cx = width / 2;
  const cy = height / 2 + 10;
  const maxRadius = Math.min(width, height) / 2 - 60;

  container.innerHTML = '';

  // Default: show Thaller, SDHSS, CIDOC-CRM
  const defaultApproaches = ['thaller', 'sdhss', 'cidoc_crm'];
  let selectedApproaches = [...defaultApproaches];

  const approachColors = {
    thaller: '#4338ca',
    sdhss: '#0d9488',
    cidoc_crm: '#d97706',
    bookkeeping: '#e11d48',
    factoid: '#475569',
    star: '#84cc16',
    prov_o: '#94a3b8',
  };

  // 4-axis mode: group-level aggregation
  const groups = ['epistemic', 'medial', 'semiotic', 'structural'];
  const groupLabels = {
    epistemic: 'Epistemic (10)',
    medial: 'Medial (6)',
    semiotic: 'Semiotic (4)',
    structural: 'Structural (4)',
  };

  function getGroupScore(approachId, group) {
    const ratings = data.getApproachRatings(approachId);
    const groupReqs = data.getRequirementsByGroup(group);
    let score = 0;
    groupReqs.forEach(r => {
      const rating = ratings[r.id];
      if (rating && (rating.level === 'structural' || rating.level === 'metadata')) {
        score++;
      }
    });
    return groupReqs.length > 0 ? score / groupReqs.length : 0;
  }

  // Controls
  const controlsDiv = document.createElement('div');
  controlsDiv.style.cssText = 'display:flex;flex-wrap:wrap;gap:0.5rem;padding:1rem 1rem 0.5rem;justify-content:center;';

  data.matrix.approaches.forEach(a => {
    const btn = document.createElement('button');
    btn.className = 'btn' + (selectedApproaches.includes(a.id) ? ' btn--active' : '');
    btn.textContent = a.label;

    if (selectedApproaches.includes(a.id)) {
      btn.style.background = approachColors[a.id];
      btn.style.color = 'white';
      btn.style.borderColor = approachColors[a.id];
    } else {
      btn.style.borderColor = approachColors[a.id] || '#94a3b8';
    }

    btn.addEventListener('click', () => {
      if (selectedApproaches.includes(a.id)) {
        selectedApproaches = selectedApproaches.filter(id => id !== a.id);
        btn.classList.remove('btn--active');
        btn.style.background = '';
        btn.style.color = '';
      } else {
        if (selectedApproaches.length >= 3) {
          const removed = selectedApproaches.shift();
          const oldBtn = controlsDiv.querySelector(`[data-approach="${removed}"]`);
          if (oldBtn) {
            oldBtn.classList.remove('btn--active');
            oldBtn.style.background = '';
            oldBtn.style.color = '';
          }
        }
        selectedApproaches.push(a.id);
        btn.classList.add('btn--active');
        btn.style.background = approachColors[a.id];
        btn.style.color = 'white';
        btn.style.borderColor = approachColors[a.id];
      }
      render();
    });
    btn.dataset.approach = a.id;
    controlsDiv.appendChild(btn);
  });

  container.appendChild(controlsDiv);

  const svgContainer = document.createElement('div');
  container.appendChild(svgContainer);

  function render() {
    svgContainer.innerHTML = '';

    const svg = d3.select(svgContainer)
      .append('svg')
      .attr('viewBox', `0 0 ${width} ${height}`)
      .attr('preserveAspectRatio', 'xMidYMid meet');

    const axes = groups;
    const numAxes = axes.length;
    const angleSlice = (Math.PI * 2) / numAxes;

    // Background fill for the chart area
    const bgPoints = axes.map((_, i) => {
      const angle = angleSlice * i - Math.PI / 2;
      return [cx + maxRadius * Math.cos(angle), cy + maxRadius * Math.sin(angle)];
    });
    svg.append('polygon')
      .attr('points', bgPoints.map(p => p.join(',')).join(' '))
      .attr('fill', '#f8fafc')
      .attr('stroke', 'none');

    // Concentric circles
    const levels = 4;
    for (let i = 1; i <= levels; i++) {
      const r = maxRadius * (i / levels);

      // Draw polygon instead of circle for cleaner look
      const points = axes.map((_, j) => {
        const angle = angleSlice * j - Math.PI / 2;
        return [cx + r * Math.cos(angle), cy + r * Math.sin(angle)];
      });

      svg.append('polygon')
        .attr('points', points.map(p => p.join(',')).join(' '))
        .attr('fill', 'none')
        .attr('stroke', '#e2e8f0')
        .attr('stroke-width', 1);

      svg.append('text')
        .attr('x', cx + 4).attr('y', cy - r + 4)
        .attr('font-size', '9px')
        .attr('fill', '#94a3b8')
        .attr('font-weight', '500')
        .text(`${Math.round(i / levels * 100)}%`);
    }

    // Axis lines and labels
    axes.forEach((axis, i) => {
      const angle = angleSlice * i - Math.PI / 2;
      const x2 = cx + maxRadius * Math.cos(angle);
      const y2 = cy + maxRadius * Math.sin(angle);

      svg.append('line')
        .attr('x1', cx).attr('y1', cy)
        .attr('x2', x2).attr('y2', y2)
        .attr('stroke', '#e2e8f0').attr('stroke-width', 1);

      const labelR = maxRadius + 30;
      const lx = cx + labelR * Math.cos(angle);
      const ly = cy + labelR * Math.sin(angle);

      svg.append('text')
        .attr('x', lx).attr('y', ly)
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'middle')
        .attr('font-size', '11px')
        .attr('font-weight', '700')
        .attr('fill', '#475569')
        .attr('letter-spacing', '-0.01em')
        .text(groupLabels[axis] || axis);
    });

    // Polygons for selected approaches
    selectedApproaches.forEach(approachId => {
      const color = approachColors[approachId] || '#94a3b8';

      const points = axes.map((axis, i) => {
        const score = getGroupScore(approachId, axis);
        const angle = angleSlice * i - Math.PI / 2;
        const r = maxRadius * score;
        return [cx + r * Math.cos(angle), cy + r * Math.sin(angle)];
      });

      svg.append('polygon')
        .attr('points', points.map(p => p.join(',')).join(' '))
        .attr('fill', color)
        .attr('fill-opacity', 0.08)
        .attr('stroke', color)
        .attr('stroke-width', 2)
        .attr('stroke-opacity', 0.8);

      // Data points
      points.forEach((p) => {
        svg.append('circle')
          .attr('cx', p[0]).attr('cy', p[1])
          .attr('r', 4)
          .attr('fill', color)
          .attr('stroke', 'white')
          .attr('stroke-width', 2);
      });
    });

    // Legend at bottom
    const legendY = height - 30;
    const legendWidth = selectedApproaches.length * 100;
    const legendStartX = cx - legendWidth / 2;

    selectedApproaches.forEach((id, i) => {
      const approach = data.matrix.approaches.find(a => a.id === id);
      const color = approachColors[id];
      const x = legendStartX + i * 100;

      svg.append('rect')
        .attr('x', x).attr('y', legendY)
        .attr('width', 12).attr('height', 12)
        .attr('fill', color).attr('rx', 3);

      svg.append('text')
        .attr('x', x + 18).attr('y', legendY + 10)
        .attr('font-size', '10px')
        .attr('fill', '#475569')
        .attr('font-weight', '500')
        .text(approach ? approach.label : id);
    });
  }

  render();
}
