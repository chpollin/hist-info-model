/**
 * Heatmap — Interactive evaluation matrix visualization.
 * 24 requirements × 7 approaches with filtering, weighting, and tooltips.
 * Refined visual design with better colors and accessibility.
 */

export function initHeatmap(containerSelector, data) {
  const container = document.querySelector(containerSelector);
  if (!container || !data.ready) return;

  const matrix = data.matrix;
  const reqs = data.requirements.requirements;
  const approaches = matrix.approaches;

  // Dimensions
  const margin = { top: 100, right: 20, bottom: 20, left: 140 };
  const cellW = 80;
  const cellH = 26;
  const groupGap = 10;

  // Group requirements
  const groupOrder = ['epistemic', 'medial', 'semiotic', 'structural'];
  const groupedReqs = [];
  let currentFilter = 'all';
  let currentWeight = 'equal';

  groupOrder.forEach(g => {
    const group = reqs.filter(r => r.group === g);
    groupedReqs.push(...group);
  });

  const totalWidth = margin.left + cellW * approaches.length + margin.right;

  function getFilteredReqs() {
    if (currentFilter === 'all') return groupedReqs;
    if (currentFilter === 'gaps') return groupedReqs.filter(r => r.is_systemic_gap);
    return groupedReqs.filter(r => r.group === currentFilter);
  }

  function getCoverage(approachId) {
    const weights = currentWeight === 'textual' ? data.getTextualWeights() : null;
    return data.getCoverage(approachId, weights);
  }

  function render() {
    const filteredReqs = getFilteredReqs();

    // Calculate row Y positions with group gaps
    const rowY = [];
    let y = 0;
    let lastGroup = null;
    filteredReqs.forEach((r) => {
      if (lastGroup && r.group !== lastGroup) y += groupGap;
      rowY.push(y);
      y += cellH;
      lastGroup = r.group;
    });

    const totalHeight = margin.top + y + margin.bottom;

    container.innerHTML = '';

    const svg = d3.select(container)
      .append('svg')
      .attr('viewBox', `0 0 ${totalWidth} ${totalHeight}`)
      .attr('preserveAspectRatio', 'xMinYMin meet');

    const g = svg.append('g').attr('transform', `translate(${margin.left}, ${margin.top})`);

    // Colors
    const levelColor = {
      structural: '#16a34a',
      metadata: '#ca8a04',
      absent: '#dc2626',
    };

    const levelPattern = {
      structural: null,
      metadata: 'url(#pattern-metadata)',
      absent: 'url(#pattern-absent)',
    };

    // Patterns for accessibility
    const defs = svg.append('defs');

    // Metadata: diagonal lines
    const patMeta = defs.append('pattern')
      .attr('id', 'pattern-metadata')
      .attr('width', 6).attr('height', 6)
      .attr('patternUnits', 'userSpaceOnUse');
    patMeta.append('rect').attr('width', 6).attr('height', 6).attr('fill', levelColor.metadata);
    patMeta.append('line').attr('x1', 0).attr('y1', 6).attr('x2', 6).attr('y2', 0)
      .attr('stroke', 'rgba(255,255,255,0.35)').attr('stroke-width', 1);

    // Absent: dots
    const patAbsent = defs.append('pattern')
      .attr('id', 'pattern-absent')
      .attr('width', 6).attr('height', 6)
      .attr('patternUnits', 'userSpaceOnUse');
    patAbsent.append('rect').attr('width', 6).attr('height', 6).attr('fill', levelColor.absent);
    patAbsent.append('circle').attr('cx', 3).attr('cy', 3).attr('r', 1)
      .attr('fill', 'rgba(255,255,255,0.35)');

    // Column headers (approaches)
    approaches.forEach((a, col) => {
      const x = col * cellW + cellW / 2;
      const pct = getCoverage(a.id);

      // Label
      g.append('text')
        .attr('x', x)
        .attr('y', -44)
        .attr('text-anchor', 'middle')
        .attr('font-size', '10px')
        .attr('font-weight', '600')
        .attr('fill', '#475569')
        .text(a.label.length > 12 ? a.label.slice(0, 10) + '…' : a.label);

      // Coverage percentage
      const pctColor = pct >= 75 ? '#16a34a' : pct >= 50 ? '#ca8a04' : '#dc2626';
      g.append('text')
        .attr('x', x)
        .attr('y', -26)
        .attr('text-anchor', 'middle')
        .attr('font-size', '12px')
        .attr('font-weight', '700')
        .attr('fill', pctColor)
        .attr('class', `coverage-label-${a.id}`)
        .text(`${pct}%`);
    });

    // Column separator line
    g.append('line')
      .attr('x1', -4).attr('y1', -16)
      .attr('x2', cellW * approaches.length + 4).attr('y2', -16)
      .attr('stroke', '#e2e8f0').attr('stroke-width', 1);

    // Row headers + cells
    filteredReqs.forEach((req, row) => {
      const y = rowY[row];
      const isGap = req.is_systemic_gap;

      // Row header
      g.append('text')
        .attr('x', -8)
        .attr('y', y + cellH / 2 + 4)
        .attr('text-anchor', 'end')
        .attr('font-size', '10px')
        .attr('font-family', "'JetBrains Mono', monospace")
        .attr('fill', isGap ? '#7c3aed' : '#64748b')
        .attr('font-weight', isGap ? '700' : '500')
        .style('cursor', 'pointer')
        .text(req.id)
        .on('click', () => {
          const btn = document.querySelector(`.req-btn[data-req="${req.id}"]`);
          if (btn) btn.click();
          document.getElementById('explorer')?.scrollIntoView({ behavior: 'smooth' });
        })
        .on('mouseenter', function() {
          d3.select(this).attr('fill', '#1e293b').attr('font-weight', '700');
        })
        .on('mouseleave', function() {
          d3.select(this).attr('fill', isGap ? '#7c3aed' : '#64748b').attr('font-weight', isGap ? '700' : '500');
        });

      // Gap indicator bar
      if (isGap) {
        g.append('rect')
          .attr('x', -margin.left + 4)
          .attr('y', y + 2)
          .attr('width', 3)
          .attr('height', cellH - 4)
          .attr('fill', '#7c3aed')
          .attr('rx', 1.5);
      }

      // Cells
      approaches.forEach((a, col) => {
        const rating = matrix.ratings[a.id]?.[req.id];
        if (!rating) return;

        const x = col * cellW;
        const color = levelColor[rating.level];

        const cell = g.append('g')
          .attr('class', 'heatmap-cell')
          .style('cursor', 'pointer');

        // Cell background
        cell.append('rect')
          .attr('x', x + 2)
          .attr('y', y + 1)
          .attr('width', cellW - 4)
          .attr('height', cellH - 2)
          .attr('fill', color)
          .attr('rx', 4)
          .attr('opacity', 0.85);

        // Accessibility pattern overlay
        if (levelPattern[rating.level]) {
          cell.append('rect')
            .attr('x', x + 2)
            .attr('y', y + 1)
            .attr('width', cellW - 4)
            .attr('height', cellH - 2)
            .attr('fill', levelPattern[rating.level])
            .attr('rx', 4)
            .attr('opacity', 0.5);
        }

        // Level label in cell
        cell.append('text')
          .attr('x', x + cellW / 2)
          .attr('y', y + cellH / 2 + 4)
          .attr('text-anchor', 'middle')
          .attr('font-size', '9px')
          .attr('fill', 'white')
          .attr('font-weight', '600')
          .text(rating.level === 'structural' ? 'S' : rating.level === 'metadata' ? 'M' : '–');

        // Hover effect + tooltip
        cell.on('mouseenter', function(event) {
          d3.select(this).select('rect').attr('opacity', 1);
          showTooltip(event, `<strong>${req.id}</strong> × ${a.label}<br><em>${rating.level}</em><br>${rating.justification}`);
        }).on('mouseleave', function() {
          d3.select(this).select('rect').attr('opacity', 0.85);
          hideTooltip();
        });
      });
    });

    // Group divider lines
    let lastG = null;
    filteredReqs.forEach((req, row) => {
      if (req.group !== lastG && lastG !== null) {
        const y = rowY[row] - groupGap / 2;
        g.append('line')
          .attr('x1', -margin.left + 8)
          .attr('y1', y)
          .attr('x2', cellW * approaches.length)
          .attr('y2', y)
          .attr('stroke', '#e2e8f0')
          .attr('stroke-width', 1);
      }
      lastG = req.group;
    });
  }

  // Tooltip
  let tooltipEl = null;

  function showTooltip(event, html) {
    if (!tooltipEl) {
      tooltipEl = document.createElement('div');
      tooltipEl.className = 'tooltip';
      document.body.appendChild(tooltipEl);
    }
    tooltipEl.innerHTML = html;
    tooltipEl.style.display = 'block';

    // Better positioning: keep tooltip in viewport
    const rect = tooltipEl.getBoundingClientRect();
    let left = event.pageX - 100;
    let top = event.pageY - rect.height - 12;

    if (left < 8) left = 8;
    if (left + 320 > window.innerWidth) left = window.innerWidth - 328;
    if (top < 8) top = event.pageY + 16;

    tooltipEl.style.left = left + 'px';
    tooltipEl.style.top = top + 'px';
  }

  function hideTooltip() {
    if (tooltipEl) tooltipEl.style.display = 'none';
  }

  // Wire up filter buttons
  document.querySelectorAll('[data-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-filter]').forEach(b => b.classList.remove('btn--active'));
      btn.classList.add('btn--active');
      currentFilter = btn.dataset.filter;
      render();
    });
  });

  // Wire up weighting buttons
  document.querySelectorAll('[data-weight]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-weight]').forEach(b => b.classList.remove('btn--active'));
      btn.classList.add('btn--active');
      currentWeight = btn.dataset.weight;
      render();
    });
  });

  // Initial render
  render();
}
