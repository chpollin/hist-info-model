---
type: design-document
created: 2026-03-21
updated: 2026-10-15
tags: [website-design, visualization, d3js]
status: draft
---

# Design Document: Historical Information Web Interface

Version 2.0 (M17) records the data-driven website design. Its architecture uses static HTML/CSS/Vanilla JS and a local D3.js v7 copy. The stations illustrate synthetic cases from [[Examples-Overview]]. They do not constitute an evaluated historical information model.

The [canonical requirements integration](https://github.com/DigitalHumanitiesCraft/ivory-kleio/blob/codex/temporal-prototype/knowledge/requirements-integration.md) owns the connection to dissertation findings, R-IDs and Ivory KLEIO H-candidates. The website is a teaching and communication strand.

## 1 Page Structure

The single-page layout uses scroll navigation through Introduction, Reading, Tracing, Comparing, Reconstructing, Reflecting and About.

| Section | Function | Module |
|---|---|---|
| Introduction | Introduce the source-to-data problem and mark the primitives as hypotheses | Introductory content |
| Reading | Inspect one source passage and its representations | Source Reading Table |
| Tracing | Inspect appearances, identities and explicitly modelled absences | Person Tracer |
| Comparing | Inspect witnesses, variants and material features | Witness Comparator |
| Reconstructing | Compare accounts of one synthetic event | Event Reconstructor |
| Reflecting | Compare deliberately selected data projections | Model Mirror |
| About | Explain synthetic provenance, method and references | Methodology content |

The retained public guiding question is “Was passiert, wenn man eine historische Quelle in Daten übersetzen will?” The narrative follows scholarly tasks. Illustrations must distinguish observations within the fictional case from claims about historical practice.

## 2 Navigation

- Sticky navigation links to the named sections.
- IntersectionObserver identifies the visible section and supports lazy initialisation.
- Link navigation scrolls to the target.
- The mobile menu applies at widths up to 767px.
- The progress indicator uses a 3px top bar.
- Keyboard access and reduced-motion behaviour require interface verification.

## 3 Color System

### Primary Palette (Property Groups)

| Group | Hue | CSS variable | Hex |
|---|---|---|---|
| Primitive hypothesis | Indigo | `--color-primitive` | `#4338ca` |
| Epistemic | Teal | `--color-epistemic` | `#0d9488` |
| Medial | Amber | `--color-medial` | `#d97706` |
| Semiotic | Rose | `--color-semiotic` | `#e11d48` |
| Structural | Slate | `--color-structural` | `#475569` |

### Rating Palette (used in Model Mirror)

These retained design tokens describe display categories. They are not measured ratings of representation technologies.

| Legacy token category | Color | CSS variable | Hex |
|---|---|---|---|
| Structural | Green | `--color-rating-structural` | `#16a34a` |
| Metadata | Yellow | `--color-rating-metadata` | `#ca8a04` |
| Absent | Red | `--color-rating-absent` | `#dc2626` |

### Systemic Gap / Absence Indicator

Purple `--color-gap: #7c3aed` identifies explicit gaps and absence states in the synthetic examples. Its use does not establish a systemic deficit in other approaches.

### Accessibility

WCAG AA text contrast is a design target, including 4.5:1 where applicable. Text, patterns and icons supplement color. This document does not certify measured compliance.

## 4 Typography

- Headings and body use Inter with system fallbacks.
- The body baseline is 16px with 1.65 line height.
- Code/formal notation uses JetBrains Mono, Fira Code, Consolas and monospace fallbacks.
- The design scale is 1.25, with h1 2.75rem, h2 2rem, h3 1.5rem and h4 1.2rem.
- Font loading must preserve the repository's local-asset constraint.

## 5 Layout Grid

The maximum width is 1200px. Responsive layout changes at 1200px and 768px. Station visualisation containers have a 500px minimum height in the desktop design. Reveal animation uses 0.7s timing where motion is enabled.

## 6 Visualization Specifications

### 6.1 Source Reading Table (§2 — Station 1: "Reading")

The reader inspects a synthetic pepper trade, uncertain loan, dowry entry or chronicle passage.

- Module `site/js/viz/source-reader.js`.
- Data `scenario_a.json` and `scenario_c.json`.
- Entry tabs select the existing synthetic passages.
- Layer controls expose diplomatic/normalised text, temporal layers, reference systems, emic/etic categories and uncertainty.
- D3 supplies temporal swimlanes for event, recording and interpretation time.
- HTML renders wrapping text. D3 renders bars and timelines.
- The amount candidates `[2000, 2500]` illustrate an invented reading alternative. They are not observed historical amounts or probabilities.

### 6.2 Person Tracer (§3 — Station 2: "Tracing")

The reader inspects fictional guild members and household relationships in `scenario_b.json`.

- Module `site/js/viz/person-tracer.js`.
- The selector changes the displayed person and source appearances.
- The grid relates time in the scenario domain 1650–1750 to the listed sources.
- Filled teal circles indicate recorded appearances.
- Dashed purple circles indicate a declared known unknown.
- Shaded areas indicate a declared systematic omission.
- Empty cells indicate no recorded mention in this fixture.
- The synthetic 1681 fire marker displays the scenario's invented transmission loss.
- Characterisation callouts compare the fictional guild and council perspectives.
- An identity fork exposes competing research identifications.
- The absence toggle exposes or hides explicit absence annotations.

Claims of systematic exclusion are premises of this synthetic scenario. Historical generalisation requires evidence from real sources.

### 6.3 Witness Comparator (§4 — Station 3: "Comparing")

The reader compares fictional chronicle witnesses in `scenario_c.json`.

- Module `site/js/viz/witness-comparator.js`.
- A D3 stemma represents the recorded relationships and marks hypothetical nodes.
- Selected witnesses appear in parallel diplomatic text columns with a normalisation toggle.
- Orthographic variants use amber underlining. Substantive variants use rose borders.
- Material panels expose carrier, script, damage, watermarks and ink.
- A carrier/content toggle distinguishes physical features from the represented text.

The fictional red ink, water damage and watermarks are teaching examples of possible evidential roles. Their interpretation is encoded in the fixture.

### 6.4 Event Reconstructor (§5 — Station 4: "Reconstructing")

The reader compares synthetic accounts of the 1702 guild dispute in `scenario_d.json`.

- Module `site/js/viz/event-reconstructor.js`.
- A radial event hub connects the listed source representations.
- Selecting sources opens the recorded agreements, unique details, contradictions and tensions.
- A categorisation timeline compares guild language in 1702, the later 1905 framing and the 2020 database category `labor_dispute`.
- The interpretive chain shows source derivations and the explicitly selected retained/omitted fields.

Dependent accounts must remain visibly dependent. The displayed field counts are properties of the teaching projection, not measures of truth, epistemic reliability or model coverage. The common event keeps month-level dating; the finer September 15 reading remains attributed to the council account. The later database projection can still illustrate unjustified precision.

### 6.5 Model Mirror (§6 — Station 5: "Reflecting")

The Model Mirror compares deliberately lossy teaching projections of the same synthetic example.

- Module `site/js/viz/model-mirror.js`.
- Data are the existing scenario JSON files.
- Tabs select the trade, guild member, chronicle passage or dispute.
- The detailed fixture view exposes the fields chosen for the example. It is not a complete or validated HI model.
- The reduced relational view selects a narrow schema with a date, amount and name.
- The reduced spreadsheet view selects a flattened display.
- The ghost overlay and lost-field panel expose fields omitted by those specific projections.
- Any displayed dimension count is derived from the selected projection and must be labelled accordingly.

Relational databases can represent related records, alternatives, provenance and revisions through appropriate schemas. Spreadsheets can retain typed values, multiple sheets and references. The selected reductions illustrate design choices. They do not demonstrate expressive limits of either technology.

## 7 Responsive Behavior

### Desktop (≥1200px)

The desktop design supports parallel Model Mirror views and witness columns. The Source Reader separates the display and its controls.

### Tablet/Mobile (≤767px)

The views stack in a single column. Source Reader controls precede the display. Witnesses and Model Mirror projections stack, with navigation available through the mobile menu.

## 8 Data Loading Strategy

The following retained architectural sketch lists the named inputs. [[Data]] describes their structures and evidence limits.

```javascript
const DataLoader = {
  primitives, graph, requirements, matrix,
  scenarioA, scenarioB, scenarioC, scenarioD,
  requirementExamples,

  async init(basePath) {
    const [p, g, r, m, sa, sb, sc, sd, re] = await Promise.all([
      fetch(`${basePath}/primitives.json`),
      fetch(`${basePath}/derivation_graph.json`),
      fetch(`${basePath}/requirements.json`),
      fetch(`${basePath}/evaluation_matrix.json`),
      fetch(`${basePath}/examples/scenario_a.json`),
      fetch(`${basePath}/examples/scenario_b.json`),
      fetch(`${basePath}/examples/scenario_c.json`),
      fetch(`${basePath}/examples/scenario_d.json`),
      fetch(`${basePath}/examples/requirement_examples.json`),
    ]);
  }
};
```

The design initialises visualisations when their containers approach visibility through IntersectionObserver with `rootMargin: 200px`. Loaded theory and rating files remain provisional records even where they are not directly displayed.

## 9 Module Architecture

Each visualisation has its own ES-module initialisation function.

```javascript
// site/js/viz/source-reader.js
export function initSourceReader(containerSelector, data) { ... }

// site/js/viz/person-tracer.js
export function initPersonTracer(containerSelector, data) { ... }

// site/js/viz/witness-comparator.js
export function initWitnessComparator(containerSelector, data) { ... }

// site/js/viz/event-reconstructor.js
export function initEventReconstructor(containerSelector, data) { ... }

// site/js/viz/model-mirror.js
export function initModelMirror(containerSelector, data) { ... }
```

`app.js` coordinates DataLoader, IntersectionObserver and initialisation. These sketches preserve the documented architecture and are not a fresh implementation read-back.

## 10 Print/Export

The print stylesheet hides navigation and simplifies visualisations. Reveal elements become visible with `opacity: 1; transform: none`. Exported screenshots need their synthetic-case and projection labels to remain legible.

## Related

- [[Data]] — JSON structures and evidence status
- [[Examples-Overview]] — Synthetic scenarios
- [[Evaluation-Framework]] — Research evaluation procedure
