/**
 * Data Loader — fetches and provides access to all JSON data files.
 * Single point of data access for all visualization modules.
 */
const DataLoader = {
  primitives: null,
  graph: null,
  requirements: null,
  matrix: null,
  scenarioA: null,
  scenarioB: null,
  scenarioC: null,
  scenarioD: null,
  requirementExamples: null,

  /** True once init() has completed successfully */
  ready: false,

  /**
   * Load all JSON data files in parallel.
   * @param {string} basePath — path prefix to data/ directory (default: relative from site/)
   */
  async init(basePath = '../data') {
    try {
      const [p, g, r, m, sa, sb, sc, sd, re] = await Promise.all([
        fetch(`${basePath}/primitives.json`).then(r => r.json()),
        fetch(`${basePath}/derivation_graph.json`).then(r => r.json()),
        fetch(`${basePath}/requirements.json`).then(r => r.json()),
        fetch(`${basePath}/evaluation_matrix.json`).then(r => r.json()),
        fetch(`${basePath}/examples/scenario_a.json`).then(r => r.json()),
        fetch(`${basePath}/examples/scenario_b.json`).then(r => r.json()),
        fetch(`${basePath}/examples/scenario_c.json`).then(r => r.json()),
        fetch(`${basePath}/examples/scenario_d.json`).then(r => r.json()),
        fetch(`${basePath}/examples/requirement_examples.json`).then(r => r.json()),
      ]);

      this.primitives = p;
      this.graph = g;
      this.requirements = r;
      this.matrix = m;
      this.scenarioA = sa;
      this.scenarioB = sb;
      this.scenarioC = sc;
      this.scenarioD = sd;
      this.requirementExamples = re;
      this.ready = true;

      console.log('[DataLoader] All data loaded:', {
        primitives: p.primitives.length,
        graphNodes: g.nodes.length,
        graphEdges: g.edges.length,
        requirements: r.requirements.length,
        approaches: m.approaches.length,
        examples: re.requirement_examples.length,
        scenarioD: sd.sources.length + ' sources',
      });

      return true;
    } catch (err) {
      console.error('[DataLoader] Failed to load data:', err);
      return false;
    }
  },

  /** Get a requirement by ID */
  getRequirement(id) {
    return this.requirements?.requirements.find(r => r.id === id) || null;
  },

  /** Get all requirements in a group */
  getRequirementsByGroup(group) {
    return this.requirements?.requirements.filter(r => r.group === group) || [];
  },

  /** Get systemic gap requirements */
  getSystemicGaps() {
    return this.requirements?.requirements.filter(r => r.is_systemic_gap) || [];
  },

  /** Get a graph node by ID */
  getNode(id) {
    return this.graph?.nodes.find(n => n.id === id) || null;
  },

  /** Get edges connected to a node (as source or target) */
  getConnectedEdges(nodeId) {
    return this.graph?.edges.filter(e => {
      const sources = Array.isArray(e.source) ? e.source : [e.source];
      return sources.includes(nodeId) || e.target === nodeId;
    }) || [];
  },

  /** Get ratings for a specific approach */
  getApproachRatings(approachId) {
    return this.matrix?.ratings[approachId] || {};
  },

  /** Calculate coverage for an approach with optional weighting */
  getCoverage(approachId, weights = null) {
    const ratings = this.getApproachRatings(approachId);
    if (!Object.keys(ratings).length) return 0;

    let score = 0, maxScore = 0;
    for (const [reqId, rating] of Object.entries(ratings)) {
      const w = weights ? (weights[reqId] || 1) : 1;
      maxScore += w;
      if (rating.level === 'structural' || rating.level === 'metadata') {
        score += w;
      }
    }
    return maxScore > 0 ? Math.round(score / maxScore * 100) : 0;
  },

  /** Get example for a specific requirement */
  getExample(requirementId) {
    return this.requirementExamples?.requirement_examples.find(
      e => e.requirement_id === requirementId
    ) || null;
  },

  /** Get scenario data by ID */
  getScenario(scenarioId) {
    switch (scenarioId) {
      case 'scenario_a': return this.scenarioA;
      case 'scenario_b': return this.scenarioB;
      case 'scenario_c': return this.scenarioC;
      case 'scenario_d': return this.scenarioD;
      default: return null;
    }
  },

  /** Get the textual domain weights */
  getTextualWeights() {
    return this.matrix?.coverage?.domain_profiles?.textual_sources?.weights || null;
  }
};

export default DataLoader;
