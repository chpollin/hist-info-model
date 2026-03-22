/**
 * Requirement Selector — Generates clickable requirement buttons
 * grouped by category with labels, and displays the scenario explorer
 * using CSS classes instead of inline styles.
 */

export function initRequirementSelector(containerSelector, data) {
  const container = document.querySelector(containerSelector);
  const explorerContainer = document.getElementById('explorer-container');
  if (!container || !data.ready) return;

  const reqs = data.requirements.requirements;
  const groupOrder = ['epistemic', 'medial', 'semiotic', 'structural'];
  const groupColors = {
    epistemic: '#0d9488',
    medial: '#d97706',
    semiotic: '#e11d48',
    structural: '#475569',
  };

  const groupNames = {
    epistemic: 'Epistemic',
    medial: 'Medial',
    semiotic: 'Semiotic',
    structural: 'Structural',
  };

  // Generate grouped buttons with labels
  container.innerHTML = '';
  groupOrder.forEach(group => {
    const groupReqs = reqs.filter(r => r.group === group);
    if (groupReqs.length === 0) return;

    const groupDiv = document.createElement('div');
    groupDiv.className = 'req-group';

    const label = document.createElement('span');
    label.className = `req-group__label req-group__label--${group}`;
    label.textContent = `${groupNames[group]} (${groupReqs.length})`;
    groupDiv.appendChild(label);

    const buttonsDiv = document.createElement('div');
    buttonsDiv.className = 'req-group__buttons';

    groupReqs.forEach(req => {
      const btn = document.createElement('button');
      btn.className = 'req-btn' + (req.is_systemic_gap ? ' req-btn--gap' : '');
      btn.dataset.req = req.id;
      btn.dataset.group = req.group;
      btn.textContent = req.id;
      btn.title = req.label_en;
      btn.addEventListener('click', () => selectRequirement(req.id, btn));
      buttonsDiv.appendChild(btn);
    });

    groupDiv.appendChild(buttonsDiv);
    container.appendChild(groupDiv);
  });

  function selectRequirement(reqId, btn) {
    // Update active state
    container.querySelectorAll('.req-btn').forEach(b => b.classList.remove('req-btn--active'));
    btn.classList.add('req-btn--active');

    // Get example data
    const example = data.getExample(reqId);
    const req = data.getRequirement(reqId);
    if (!example || !req) return;

    const scenario = data.getScenario(example.scenario);
    const scenarioTitle = scenario ? scenario.title_en : example.scenario;
    const isGap = req.is_systemic_gap;
    const groupColor = groupColors[req.group] || '#475569';

    explorerContainer.innerHTML = `
      <div class="explorer-content">
        <div class="explorer-badges">
          <span class="explorer-badge explorer-badge--id" style="background:${groupColor};">${req.id}</span>
          <span class="explorer-badge explorer-badge--group" style="color:${groupColor};">${req.group}</span>
          ${isGap ? '<span class="explorer-badge explorer-badge--gap">Systemic Gap</span>' : ''}
        </div>
        <h3 class="explorer-title">${req.label_en}</h3>
        <p class="explorer-test">${req.test_condition}</p>

        <div class="explorer-scenario">
          Scenario: <strong>${scenarioTitle}</strong>
        </div>

        <p class="explorer-description">${example.description_en}</p>

        <div class="explorer-comparison">
          <div class="comparison-card comparison-card--with">
            <h4 class="comparison-card__title">With Requirement</h4>
            <p class="comparison-card__text">${example.with_requirement.description}</p>
            <div class="comparison-card__visual">
              <strong>Visual:</strong> ${example.with_requirement.visual}
            </div>
          </div>
          <div class="comparison-card comparison-card--without">
            <h4 class="comparison-card__title">Without Requirement</h4>
            <p class="comparison-card__text">${example.without_requirement.description}</p>
            <div class="comparison-card__visual">
              <strong>Visual:</strong> ${example.without_requirement.visual}
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
