/**
 * Model Mirror — Viz 5
 * "What does every data model lose?"
 * Three-column comparison showing progressive information loss.
 */

export function initModelMirror(containerSelector, data) {
  const container = document.querySelector(containerSelector);
  if (!container || !data.ready) return;

  container.innerHTML = '';

  // Define what each scenario looks like in each model
  const dataPoints = [
    {
      id: 'pepper',
      label: 'Pfefferhandel (1478)',
      scenario: 'scenario_a',
      full: {
        dimensions: 17,
        fields: [
          { label: 'Date', value: '1478-03-15 (Julian)', type: 'temporal', present: true },
          { label: 'Event Time', value: 'March 1478 (pepper delivery in Venice)', type: 'temporal', present: true },
          { label: 'Recording Time', value: 'April 1478? (Schwarz entered weeks later)', type: 'temporal', present: true },
          { label: 'Interpretation Time', value: '2024 (modern researcher)', type: 'temporal', present: true },
          { label: 'Amount', value: '2,000 duc.', type: 'value', present: true },
          { label: 'Exchange Rate', value: '1 duc. = 1.15 fl.rh.', type: 'reference', present: true },
          { label: 'Calendar System', value: 'Julian (not Gregorian)', type: 'reference', present: true },
          { label: 'Person (diplomatic)', value: 'Iohannes Bellini de Venetia', type: 'naming', present: true },
          { label: 'Person (normalized)', value: 'Giovanni Bellini', type: 'naming', present: true },
          { label: 'Role (emic)', value: '"welscher Handler"', type: 'category', present: true },
          { label: 'Role (etic)', value: 'Venetian long-distance trader', type: 'category', present: true },
          { label: 'Source', value: 'H.F. Ledger, fol. 127r, entry 3', type: 'provenance', present: true },
          { label: 'Source Type', value: 'accounting_record', type: 'provenance', present: true },
          { label: 'Creation Purpose', value: 'Commercial accountability', type: 'provenance', present: true },
          { label: 'Date Certainty', value: 'high', type: 'uncertainty', present: true },
          { label: 'Amount Certainty', value: 'high', type: 'uncertainty', present: true },
          { label: 'Commodity', value: '500 lb. pepper', type: 'value', present: true },
        ]
      },
      db: {
        dimensions: 8,
        fields: [
          { label: 'date', value: '1478-03-15', type: 'temporal', present: true },
          { label: 'amount', value: '2000', type: 'value', present: true },
          { label: 'currency', value: 'ducats', type: 'value', present: true },
          { label: 'person_name', value: 'Giovanni Bellini', type: 'naming', present: true },
          { label: 'person_role', value: 'trader', type: 'category', present: true },
          { label: 'source_ref', value: 'fol. 127r', type: 'provenance', present: true },
          { label: 'commodity', value: 'pepper', type: 'value', present: true },
          { label: 'quantity', value: '500', type: 'value', present: true },
        ],
        lost: [
          'Temporal layers (event/recording/interpretation)',
          'Exchange rate & currency system',
          'Calendar system (Julian)',
          'Diplomatic name forms',
          'Emic/etic category distinction',
          'Source type & creation purpose',
          'Uncertainty metadata',
          'Folio-level provenance',
          'That the date is Julian, not Gregorian',
        ]
      },
      spreadsheet: {
        dimensions: 4,
        fields: [
          { label: 'A', value: '15.03.1478', type: 'temporal', present: true },
          { label: 'B', value: 'Bellini', type: 'naming', present: true },
          { label: 'C', value: '2000 ducats', type: 'value', present: true },
          { label: 'D', value: 'pepper 500lb', type: 'value', present: true },
        ],
        lost: [
          'All temporal layers',
          'All currency conversions',
          'All name variants',
          'All category distinctions',
          'All provenance information',
          'All uncertainty markers',
          'Source type',
          'Calendar system',
          'Recording context',
          'Creation purpose',
          'Diplomatic forms',
          'Exchange rates',
          'That this is a person with multiple roles',
        ]
      }
    },
    {
      id: 'johann',
      label: 'Johann Meier',
      scenario: 'scenario_b',
      full: {
        dimensions: 15,
        fields: [
          { label: 'Name (guild)', value: '"Johann Meÿer"', type: 'naming', present: true },
          { label: 'Name (parish)', value: '"Johanß Meÿer"', type: 'naming', present: true },
          { label: 'Name (tax)', value: '"Johannes Maier"', type: 'naming', present: true },
          { label: 'Birth', value: 'ca. 1655 (KNOWN UNKNOWN)', type: 'uncertainty', present: true },
          { label: 'Death', value: '1723 (parish register)', type: 'temporal', present: true },
          { label: 'Guild admission', value: '1678, "ehrbarer Meister"', type: 'provenance', present: true },
          { label: 'Council mention', value: '1702, "streitbarer Weber"', type: 'provenance', present: true },
          { label: 'Tax record', value: '45 fl. (1695)', type: 'value', present: true },
          { label: 'Birth: known unknown', value: 'Parish registers 1600–1680 destroyed', type: 'absence', present: true },
          { label: 'Guild vs Council', value: 'perspective tension', type: 'perspective', present: true },
          { label: 'Identification A', value: 'same person (Researcher A, 0.7)', type: 'uncertainty', present: true },
          { label: 'Identification B', value: 'different person (Researcher B, 0.6)', type: 'uncertainty', present: true },
          { label: 'Epistemic chain', value: 'primary→secondary→tertiary', type: 'provenance', present: true },
          { label: 'Systematic exclusion', value: 'Wife Anna invisible in guild records', type: 'absence', present: true },
          { label: 'Transmission gap', value: 'Fire 1681 destroyed parish records', type: 'absence', present: true },
        ]
      },
      db: {
        dimensions: 7,
        fields: [
          { label: 'name', value: 'Johann Meier', type: 'naming', present: true },
          { label: 'birth_year', value: '1655', type: 'temporal', present: true },
          { label: 'death_year', value: '1723', type: 'temporal', present: true },
          { label: 'occupation', value: 'weaver', type: 'category', present: true },
          { label: 'guild_member', value: 'TRUE', type: 'value', present: true },
          { label: 'tax_1695', value: '45', type: 'value', present: true },
          { label: 'dispute_1702', value: 'TRUE', type: 'value', present: true },
        ],
        lost: [
          'All name variants (3 diplomatic forms)',
          'Known unknown status for birth',
          'Reason for missing birth date',
          'Perspective tension (guild vs council)',
          'Competing identifications',
          'Epistemic distance chain',
          'Systematic exclusion of Anna',
          'Transmission gap (fire)',
        ]
      },
      spreadsheet: {
        dimensions: 4,
        fields: [
          { label: 'A', value: 'Meier, Johann', type: 'naming', present: true },
          { label: 'B', value: '1655–1723', type: 'temporal', present: true },
          { label: 'C', value: 'weaver', type: 'category', present: true },
          { label: 'D', value: 'guild dispute 1702', type: 'value', present: true },
        ],
        lost: [
          'Everything the DB already lost, PLUS:',
          'Exact birth/death uncertainty',
          'Tax assessment value',
          'Guild membership details',
          'Any structured relationship to other persons',
        ]
      }
    },
    {
      id: 'chronicle',
      label: 'Chronikpassage',
      scenario: 'scenario_c',
      full: {
        dimensions: 14,
        fields: [
          { label: 'Text A (diplomatic)', value: '"do wart ain grozzer brant…"', type: 'naming', present: true },
          { label: 'Text B (diplomatic)', value: '"da wart ein großer brand…"', type: 'naming', present: true },
          { label: 'Text C (paraphrase)', value: '"es brante der markt…"', type: 'naming', present: true },
          { label: 'Text D (modernized)', value: '"Da ward ein grosser Brand…"', type: 'naming', present: true },
          { label: 'Normalized form', value: '"Da ward ein großer Brand…"', type: 'naming', present: true },
          { label: 'Stemma', value: 'Original→α→A/β→B/C/D', type: 'provenance', present: true },
          { label: 'Carrier A', value: 'Parchment, 28×20cm, textura', type: 'material', present: true },
          { label: 'Red ink (A)', value: 'Proper names highlighted', type: 'material', present: true },
          { label: 'Water damage (B)', value: 'fols. 12–18', type: 'material', present: true },
          { label: 'Watermark (B)', value: "Bull's head, ca. 1415–1425", type: 'material', present: true },
          { label: 'Marginal note (B)', value: 'Date from second hand', type: 'provenance', present: true },
          { label: 'Abbreviation (C)', value: 'Paraphrased, not copied', type: 'provenance', present: true },
          { label: 'Modernization (D)', value: 'Printer changed spelling', type: 'provenance', present: true },
          { label: 'Orthographic variants', value: 'grozzer/großer/grosser', type: 'naming', present: true },
        ]
      },
      db: {
        dimensions: 6,
        fields: [
          { label: 'text', value: 'Da ward ein großer Brand auf dem Markt zu Brückstadt', type: 'naming', present: true },
          { label: 'date', value: '1298', type: 'temporal', present: true },
          { label: 'witnesses', value: '4', type: 'value', present: true },
          { label: 'earliest_ms', value: 'ca. 1350', type: 'temporal', present: true },
          { label: 'language', value: 'Middle High German', type: 'category', present: true },
          { label: 'location', value: 'Brückstadt market', type: 'value', present: true },
        ],
        lost: [
          'All diplomatic readings (4 different texts)',
          'Stemma codicum (transmission history)',
          'All material features (ink, watermarks, damage)',
          'Orthographic variants',
          'Marginal notes',
          'Abbreviation/modernization information',
          'Carrier-content distinction',
          'That 4 witnesses tell slightly different stories',
        ]
      },
      spreadsheet: {
        dimensions: 3,
        fields: [
          { label: 'A', value: 'Market fire Brückstadt', type: 'value', present: true },
          { label: 'B', value: '1298', type: 'temporal', present: true },
          { label: 'C', value: 'Chronicle', type: 'category', present: true },
        ],
        lost: [
          'All of the above, PLUS:',
          'The actual text in any form',
          'Number of witnesses',
          'Language information',
          'Any connection to physical manuscripts',
        ]
      }
    },
    {
      id: 'dispute',
      label: 'Zunftstreit (1702)',
      scenario: 'scenario_d',
      full: {
        dimensions: 19,
        fields: [
          { label: 'Event', value: 'Guild Dispute over Dye Monopoly', type: 'value', present: true },
          { label: 'Date', value: '1702-09 (medium certainty)', type: 'temporal', present: true },
          { label: 'Source 1: Guild', value: '"dem Meister Meÿer das Handwerk geleget"', type: 'provenance', present: true },
          { label: 'Source 2: Council', value: '"streitet mit dem Farbmeister"', type: 'provenance', present: true },
          { label: 'Source 3: Letter', value: '"hab das recht auf meiner Seiten"', type: 'provenance', present: true },
          { label: 'Source 4: History', value: '"gegen den Zunftzwang aufbegehrte"', type: 'provenance', present: true },
          { label: 'Source 5: Database', value: '{ type: "labor_dispute" }', type: 'provenance', present: true },
          { label: 'Category 1702', value: '"wider die Ehre des Handwerks" (emic)', type: 'category', present: true },
          { label: 'Category 1905', value: '"Zunftzwang" (etic/historicism)', type: 'category', present: true },
          { label: 'Category 2020', value: '"labor_dispute" (etic/database)', type: 'category', present: true },
          { label: 'Guild characterization', value: 'Violation of honor', type: 'perspective', present: true },
          { label: 'Council characterization', value: 'Administrative dispute', type: 'perspective', present: true },
          { label: 'Meier characterization', value: 'Injustice suffered', type: 'perspective', present: true },
          { label: 'Contradiction', value: 'Guild: offender ↔ Letter: wronged', type: 'perspective', present: true },
          { label: 'Epistemic Level 0', value: 'Primary (3 sources)', type: 'provenance', present: true },
          { label: 'Epistemic Level 1', value: 'Secondary (1905 book)', type: 'provenance', present: true },
          { label: 'Epistemic Level 2', value: 'Tertiary (2020 database)', type: 'provenance', present: true },
          { label: 'Blind spots', value: 'Each source has documented limitations', type: 'absence', present: true },
          { label: 'Selection bias', value: '1905 book ignores letter and council', type: 'absence', present: true },
        ]
      },
      db: {
        dimensions: 7,
        fields: [
          { label: 'event_type', value: 'guild_conflict', type: 'category', present: true },
          { label: 'date', value: '1702-09-15', type: 'temporal', present: true },
          { label: 'location', value: 'Brückstadt', type: 'value', present: true },
          { label: 'person_1', value: 'Meier, Johann', type: 'naming', present: true },
          { label: 'person_2', value: 'Dye Master', type: 'naming', present: true },
          { label: 'outcome', value: 'disciplinary_action', type: 'value', present: true },
          { label: 'source', value: 'Lokalgeschichte 1905', type: 'provenance', present: true },
        ],
        lost: [
          'All 5 source perspectives (collapsed to 1)',
          'Category change over 300 years',
          'All emic categories',
          'All characterization tensions',
          'Epistemic distance chain',
          'Blind spots of each source',
          'That the date precision varies by source',
          'Meier\'s personal experience',
          'Selection bias in 1905 book',
          'Original diplomatic texts',
          'The contradiction (offender vs wronged)',
          'That "guild_conflict" is anachronistic',
        ]
      },
      spreadsheet: {
        dimensions: 4,
        fields: [
          { label: 'A', value: 'Guild dispute', type: 'value', present: true },
          { label: 'B', value: '1702', type: 'temporal', present: true },
          { label: 'C', value: 'Brückstadt', type: 'value', present: true },
          { label: 'D', value: 'Meier', type: 'naming', present: true },
        ],
        lost: [
          'Everything the DB already lost, PLUS:',
          'Event type classification',
          'Outcome',
          'Second person involved',
          'Source reference',
          'Any structured data at all',
        ]
      }
    }
  ];

  let activePoint = dataPoints[0];

  const wrapper = document.createElement('div');
  wrapper.className = 'model-mirror';

  // ── Tabs ──
  const tabBar = document.createElement('div');
  tabBar.className = 'model-mirror__tabs';
  dataPoints.forEach(dp => {
    const tab = document.createElement('button');
    tab.className = 'model-mirror__tab' + (dp === activePoint ? ' model-mirror__tab--active' : '');
    tab.textContent = dp.label;
    tab.addEventListener('click', () => {
      activePoint = dp;
      tabBar.querySelectorAll('.model-mirror__tab').forEach(t => t.classList.remove('model-mirror__tab--active'));
      tab.classList.add('model-mirror__tab--active');
      render();
    });
    tabBar.appendChild(tab);
  });
  wrapper.appendChild(tabBar);

  // ── Dimension counter ──
  const counter = document.createElement('div');
  counter.className = 'model-mirror__counter';
  wrapper.appendChild(counter);

  // ── Three columns ──
  const columns = document.createElement('div');
  columns.className = 'model-mirror__columns';
  wrapper.appendChild(columns);

  container.appendChild(wrapper);

  function render() {
    const dp = activePoint;

    // Counter
    counter.innerHTML = `
      <span class="model-mirror__count model-mirror__count--full">${dp.full.dimensions}</span>
      <span class="model-mirror__count-arrow">→</span>
      <span class="model-mirror__count model-mirror__count--db">${dp.db.dimensions}</span>
      <span class="model-mirror__count-arrow">→</span>
      <span class="model-mirror__count model-mirror__count--sheet">${dp.spreadsheet.dimensions}</span>
      <span class="model-mirror__count-label">information dimensions</span>
    `;

    // Columns
    columns.innerHTML = '';

    // Column 1: Full model
    const col1 = createColumn('Full HI Model', 'full', dp.full.fields, dp.full.dimensions, null);
    columns.appendChild(col1);

    // Column 2: Relational DB
    const col2 = createColumn('Relational Database', 'db', dp.db.fields, dp.db.dimensions, dp.db.lost);
    columns.appendChild(col2);

    // Column 3: Spreadsheet
    const col3 = createColumn('Spreadsheet', 'sheet', dp.spreadsheet.fields, dp.spreadsheet.dimensions, dp.spreadsheet.lost);
    columns.appendChild(col3);

    // Add ghost overlays to columns 2 and 3
    addGhosts(col2, dp.full.fields, dp.db.fields);
    addGhosts(col3, dp.full.fields, dp.spreadsheet.fields);
  }

  function createColumn(title, type, fields, dims, lost) {
    const col = document.createElement('div');
    col.className = `model-mirror__column model-mirror__column--${type}`;

    let html = `<div class="model-mirror__col-header model-mirror__col-header--${type}">
      <div class="model-mirror__col-title">${title}</div>
      <div class="model-mirror__col-dims">${dims} dimensions</div>
    </div>`;

    html += `<div class="model-mirror__fields">`;
    fields.forEach(f => {
      const typeColors = {
        temporal: '#0d9488',
        value: '#475569',
        reference: '#d97706',
        naming: '#4338ca',
        category: '#e11d48',
        provenance: '#7c3aed',
        uncertainty: '#dc2626',
        perspective: '#0891b2',
        material: '#d97706',
        absence: '#7c3aed',
      };
      const color = typeColors[f.type] || '#475569';

      html += `<div class="model-mirror__field" style="border-left-color: ${color}">
        <span class="model-mirror__field-label">${f.label}</span>
        <span class="model-mirror__field-value">${f.value}</span>
      </div>`;
    });
    html += `</div>`;

    if (lost) {
      html += `<div class="model-mirror__lost">`;
      html += `<div class="model-mirror__lost-title">Lost (${lost.length})</div>`;
      lost.forEach(l => {
        html += `<div class="model-mirror__lost-item">${l}</div>`;
      });
      html += `</div>`;
    }

    col.innerHTML = html;
    return col;
  }

  function addGhosts(column, fullFields, presentFields) {
    const presentLabels = new Set(presentFields.map(f => f.label));
    const fieldsContainer = column.querySelector('.model-mirror__fields');
    if (!fieldsContainer) return;

    fullFields.forEach(f => {
      if (!presentLabels.has(f.label)) {
        const ghost = document.createElement('div');
        ghost.className = 'model-mirror__ghost';
        ghost.innerHTML = `<span class="model-mirror__ghost-label">${f.label}</span>`;
        fieldsContainer.appendChild(ghost);
      }
    });
  }

  render();
}
