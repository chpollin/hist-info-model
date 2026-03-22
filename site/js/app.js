/**
 * App — main entry point. Loads data and initializes all modules.
 * New architecture: 5 data-driven visualizations + hero + about.
 */
import DataLoader from './data-loader.js';
import { initNavigation } from './navigation.js';
import { initSourceReader } from './viz/source-reader.js';
import { initPersonTracer } from './viz/person-tracer.js';
import { initWitnessComparator } from './viz/witness-comparator.js';
import { initEventReconstructor } from './viz/event-reconstructor.js';
import { initModelMirror } from './viz/model-mirror.js';

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

  // 4. Initialize visualizations (lazy — only when section becomes visible)
  const vizMap = {
    'source-reader-container': () => initSourceReader('#source-reader-container', DataLoader),
    'person-tracer-container': () => initPersonTracer('#person-tracer-container', DataLoader),
    'witness-comparator-container': () => initWitnessComparator('#witness-comparator-container', DataLoader),
    'event-reconstructor-container': () => initEventReconstructor('#event-reconstructor-container', DataLoader),
    'model-mirror-container': () => initModelMirror('#model-mirror-container', DataLoader),
  };

  const initialized = new Set();

  const vizObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !initialized.has(entry.target.id)) {
        const initFn = vizMap[entry.target.id];
        if (initFn) {
          initFn();
          initialized.add(entry.target.id);
        }
      }
    });
  }, { rootMargin: '200px' });

  Object.keys(vizMap).forEach(id => {
    const el = document.getElementById(id);
    if (el) vizObserver.observe(el);
  });

  // 5. Primitive card click → scroll to first viz
  document.querySelectorAll('.primitive-card').forEach(card => {
    card.addEventListener('click', () => {
      document.getElementById('reading')?.scrollIntoView({ behavior: 'smooth' });
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
