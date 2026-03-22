/**
 * App — main entry point. Loads data and initializes all modules.
 */
import DataLoader from './data-loader.js';
import { initNavigation } from './navigation.js';
import { initDerivationGraph } from './derivation-graph.js';
import { initHeatmap } from './heatmap.js';
import { initRequirementSelector } from './requirement-selector.js';
import { initLacunaViz } from './lacuna-viz.js';
import { initRadarChart } from './radar-chart.js';

async function main() {
  // 1. Initialize navigation (includes scroll progress, hamburger, reveal animations)
  initNavigation();

  // 2. Load all data
  const success = await DataLoader.init('../data');
  if (!success) {
    document.querySelectorAll('.viz-placeholder').forEach(el => {
      el.textContent = 'Error: Could not load data files. Are you running from a web server?';
      el.style.color = 'var(--color-rating-absent)';
    });
    return;
  }

  // 3. Populate introduction from data
  DataLoader.primitives.primitives.forEach(p => {
    const descEl = document.getElementById(`${p.id.toLowerCase()}-desc`);
    if (descEl) descEl.textContent = p.description_en;
  });

  // 4. Initialize visualizations
  initDerivationGraph('#derivation-graph-container', DataLoader);
  initHeatmap('#heatmap-container', DataLoader);
  initRequirementSelector('#req-selector', DataLoader);
  initLacunaViz('#lacuna-container', DataLoader);
  initRadarChart('#radar-container', DataLoader);

  // 5. Primitive card click → scroll to derivation and highlight
  document.querySelectorAll('.primitive-card').forEach(card => {
    card.addEventListener('click', () => {
      document.getElementById('derivation')?.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // 6. Log readiness
  console.log('[App] All modules initialized.');
}

// Start when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', main);
} else {
  main();
}
