/**
 * Derivation Graph — Interactive DAG visualization.
 * P → E/M/S derivation structure using D3.js hierarchical layout.
 * Includes detail panel with overlay and click-outside-to-close.
 */

export function initDerivationGraph(containerSelector, data) {
  const container = document.querySelector(containerSelector);
  if (!container || !data.ready) return;

  const graph = data.graph;
  const width = container.clientWidth;
  const height = 520;

  // Clear placeholder
  container.innerHTML = '';

  const svg = d3.select(container)
    .append('svg')
    .attr('viewBox', `0 0 ${width} ${height}`)
    .attr('preserveAspectRatio', 'xMidYMid meet');

  // Color map
  const colors = {
    primitive: '#4338ca',
    epistemic: '#0d9488',
    medial: '#d97706',
    semiotic: '#e11d48',
  };

  // Layout: three tiers
  const tierY = { primitive: 60, property: 260, requirement: 460 };
  const nodeRadius = { primitive: 32, property: 22 };

  // Position primitives
  const primitives = graph.nodes.filter(n => n.type === 'primitive');
  const properties = graph.nodes.filter(n => n.type === 'property');

  // Group properties by group for horizontal positioning
  const groups = ['epistemic', 'medial', 'semiotic'];
  const groupedProps = {};
  groups.forEach(g => {
    groupedProps[g] = properties.filter(n => n.group === g);
  });

  // Calculate positions
  const positions = {};

  // Primitives: evenly spaced
  const primSpacing = width / (primitives.length + 1);
  primitives.forEach((p, i) => {
    positions[p.id] = { x: primSpacing * (i + 1), y: tierY.primitive };
  });

  // Properties: grouped, evenly spaced within the full width
  const allProps = [...groupedProps.epistemic, ...groupedProps.medial, ...groupedProps.semiotic];
  const propSpacing = width / (allProps.length + 1);
  allProps.forEach((p, i) => {
    positions[p.id] = { x: propSpacing * (i + 1), y: tierY.property };
  });

  // Arrowhead marker (defined before edges so it's available)
  const defs = svg.append('defs');
  defs.append('marker')
    .attr('id', 'arrowhead')
    .attr('viewBox', '0 0 10 10')
    .attr('refX', 10)
    .attr('refY', 5)
    .attr('markerWidth', 8)
    .attr('markerHeight', 8)
    .attr('orient', 'auto')
    .append('path')
    .attr('d', 'M0,0 L10,5 L0,10 Z')
    .attr('fill', '#94a3b8');

  // Highlight arrowhead
  defs.append('marker')
    .attr('id', 'arrowhead-active')
    .attr('viewBox', '0 0 10 10')
    .attr('refX', 10)
    .attr('refY', 5)
    .attr('markerWidth', 8)
    .attr('markerHeight', 8)
    .attr('orient', 'auto')
    .append('path')
    .attr('d', 'M0,0 L10,5 L0,10 Z')
    .attr('fill', '#4338ca');

  // Draw edges
  const edgeGroup = svg.append('g').attr('class', 'edges');

  graph.edges.forEach(edge => {
    const sources = Array.isArray(edge.source) ? edge.source : [edge.source];
    const target = positions[edge.target];
    if (!target) return;

    sources.forEach(srcId => {
      const src = positions[srcId];
      if (!src) return;

      const midY = (src.y + target.y) / 2;

      edgeGroup.append('path')
        .attr('d', `M${src.x},${src.y + (srcId.startsWith('P') ? nodeRadius.primitive : nodeRadius.property)} Q${src.x},${midY} ${target.x},${target.y - nodeRadius.property}`)
        .attr('fill', 'none')
        .attr('stroke', '#cbd5e1')
        .attr('stroke-width', edge.derivation_type === 'combined' ? 1.5 : 2)
        .attr('stroke-dasharray', edge.derivation_type === 'combined' ? '6,4' : 'none')
        .attr('marker-end', 'url(#arrowhead)')
        .attr('class', `edge edge-to-${edge.target}`)
        .attr('data-sources', sources.join(','))
        .attr('data-target', edge.target);
    });
  });

  // Draw nodes
  const nodeGroup = svg.append('g').attr('class', 'nodes');

  function drawNode(node) {
    const pos = positions[node.id];
    if (!pos) return;

    const r = node.type === 'primitive' ? nodeRadius.primitive : nodeRadius.property;
    const color = colors[node.group] || '#475569';

    const g = nodeGroup.append('g')
      .attr('class', `node node-${node.id}`)
      .attr('transform', `translate(${pos.x}, ${pos.y})`)
      .style('cursor', 'pointer');

    // Shadow (subtle)
    if (node.type === 'primitive') {
      g.append('circle')
        .attr('r', r + 2)
        .attr('fill', 'none')
        .attr('stroke', color)
        .attr('stroke-width', 1)
        .attr('opacity', 0.15);
    }

    // Circle
    g.append('circle')
      .attr('r', r)
      .attr('fill', color)
      .attr('stroke', 'white')
      .attr('stroke-width', 2.5)
      .attr('opacity', 0.92)
      .attr('class', 'node-circle');

    // Label inside
    g.append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', '0.35em')
      .attr('fill', 'white')
      .attr('font-size', node.type === 'primitive' ? '14px' : '11px')
      .attr('font-weight', '700')
      .attr('letter-spacing', '-0.02em')
      .text(node.id);

    // Name below
    g.append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', r + 16)
      .attr('fill', '#64748b')
      .attr('font-size', '10px')
      .attr('font-weight', '500')
      .text(node.label_en.length > 20 ? node.label_en.slice(0, 18) + '…' : node.label_en);

    // Interactions
    g.on('mouseenter', () => highlightConnected(node.id))
      .on('mouseleave', () => resetHighlight())
      .on('click', () => showDetail(node));
  }

  graph.nodes.forEach(drawNode);

  // Group labels
  const groupLabels = [
    { label: 'Epistemic', x: propSpacing * (groupedProps.epistemic.length / 2 + 0.5), color: colors.epistemic },
    { label: 'Medial', x: propSpacing * (groupedProps.epistemic.length + groupedProps.medial.length / 2 + 0.5), color: colors.medial },
    { label: 'Semiotic', x: propSpacing * (groupedProps.epistemic.length + groupedProps.medial.length + groupedProps.semiotic.length / 2 + 0.5), color: colors.semiotic },
  ];

  groupLabels.forEach(gl => {
    svg.append('text')
      .attr('x', gl.x)
      .attr('y', tierY.property + 56)
      .attr('text-anchor', 'middle')
      .attr('fill', gl.color)
      .attr('font-size', '11px')
      .attr('font-weight', '700')
      .attr('opacity', 0.6)
      .attr('letter-spacing', '0.02em')
      .text(gl.label);
  });

  // Tier labels
  svg.append('text')
    .attr('x', 16).attr('y', tierY.primitive + 4)
    .attr('font-size', '9px')
    .attr('fill', '#cbd5e1')
    .attr('font-weight', '600')
    .attr('text-anchor', 'start')
    .text('PRIMITIVES');

  svg.append('text')
    .attr('x', 16).attr('y', tierY.property + 4)
    .attr('font-size', '9px')
    .attr('fill', '#cbd5e1')
    .attr('font-weight', '600')
    .attr('text-anchor', 'start')
    .text('PROPERTIES');

  // Highlight connected nodes/edges
  function highlightConnected(nodeId) {
    nodeGroup.selectAll('.node').attr('opacity', 0.15);
    edgeGroup.selectAll('.edge').attr('opacity', 0.08);

    nodeGroup.select(`.node-${nodeId}`).attr('opacity', 1);

    const connectedNodes = new Set([nodeId]);
    graph.edges.forEach(edge => {
      const sources = Array.isArray(edge.source) ? edge.source : [edge.source];
      if (sources.includes(nodeId)) {
        connectedNodes.add(edge.target);
        sources.forEach(s => connectedNodes.add(s));
      }
      if (edge.target === nodeId) {
        sources.forEach(s => connectedNodes.add(s));
      }
    });

    connectedNodes.forEach(id => {
      nodeGroup.select(`.node-${id}`).attr('opacity', 1);
    });

    edgeGroup.selectAll('.edge').each(function() {
      const el = d3.select(this);
      const eSources = el.attr('data-sources').split(',');
      const eTarget = el.attr('data-target');
      if (eSources.includes(nodeId) || eTarget === nodeId) {
        el.attr('opacity', 1)
          .attr('stroke', '#4338ca')
          .attr('stroke-width', 2.5)
          .attr('marker-end', 'url(#arrowhead-active)');
      }
    });
  }

  function resetHighlight() {
    nodeGroup.selectAll('.node').attr('opacity', 1);
    edgeGroup.selectAll('.edge')
      .attr('opacity', 1)
      .attr('stroke', '#cbd5e1')
      .attr('marker-end', 'url(#arrowhead)')
      .attr('stroke-width', function() {
        return d3.select(this).attr('stroke-dasharray') !== 'none' ? 1.5 : 2;
      });
  }

  // Detail panel with overlay
  const panel = document.getElementById('derivation-detail');
  const overlay = document.getElementById('detail-overlay');

  function showDetail(node) {
    const titleEl = document.getElementById('detail-title');
    const descEl = document.getElementById('detail-description');
    const formalEl = document.getElementById('detail-formal');
    const connEl = document.getElementById('detail-connections');

    titleEl.textContent = `${node.id}: ${node.label_en}`;
    descEl.textContent = node.description_en;

    // Formal notation (for primitives)
    const primitive = data.primitives?.primitives.find(p => p.id === node.id);
    if (primitive) {
      formalEl.textContent = primitive.formal_notation;
      formalEl.style.display = 'block';
    } else {
      formalEl.style.display = 'none';
    }

    // Connected nodes
    const connected = data.getConnectedEdges(node.id);
    const connectedNodes = new Set();
    connected.forEach(e => {
      const sources = Array.isArray(e.source) ? e.source : [e.source];
      sources.forEach(s => connectedNodes.add(s));
      connectedNodes.add(e.target);
    });
    connectedNodes.delete(node.id);

    let html = '';

    if (connectedNodes.size > 0) {
      html += '<h4 class="detail-panel__section-title">Connected</h4><ul class="detail-panel__list">' +
        [...connectedNodes].map(id => {
          const n = data.getNode(id);
          return `<li><span class="node-id">${id}</span> ${n ? n.label_en : id}</li>`;
        }).join('') + '</ul>';
    }

    // Requirements derived from this property
    const reqs = data.requirements?.requirements.filter(r => r.derived_from === node.id) || [];
    if (reqs.length > 0) {
      html += '<h4 class="detail-panel__section-title">Requirements</h4><ul class="detail-panel__list">' +
        reqs.map(r => {
          const gapBadge = r.is_systemic_gap ? '<span class="gap-badge">gap</span>' : '';
          return `<li><span class="node-id">${r.id}</span> ${r.label_en}${gapBadge}</li>`;
        }).join('') + '</ul>';
    }

    connEl.innerHTML = html;

    openPanel();
  }

  function openPanel() {
    panel.removeAttribute('hidden');
    panel.setAttribute('aria-hidden', 'false');
    panel.classList.add('detail-panel--open');
    overlay.classList.add('detail-overlay--visible');
  }

  function closePanel() {
    panel.classList.remove('detail-panel--open');
    overlay.classList.remove('detail-overlay--visible');
    setTimeout(() => {
      panel.setAttribute('hidden', '');
      panel.setAttribute('aria-hidden', 'true');
    }, 350);
  }

  // Close button
  panel.querySelector('.detail-panel__close').addEventListener('click', closePanel);

  // Click overlay to close
  overlay.addEventListener('click', closePanel);

  // Escape key to close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && panel.classList.contains('detail-panel--open')) {
      closePanel();
    }
  });
}
