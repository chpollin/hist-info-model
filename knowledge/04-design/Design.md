---
type: design-document
created: 2026-03-21
tags: [website-design, visualization, d3js]
status: draft
---

# Design Document: Historical Information Web Interface

**Version:** 1.0
**Technology:** Static HTML/CSS/Vanilla JS + D3.js v7 (local copy, no CDN)

---

## 1 Page Structure

Single-page application with scroll-based navigation. Six sections:

```
┌──────────────────────────────────────────┐
│  Header / Navigation Bar (sticky)        │
├──────────────────────────────────────────┤
│  §1 Introduction                         │
│  Three Primitives overview               │
├──────────────────────────────────────────┤
│  §2 Derivation Graph                     │
│  Interactive DAG: P → E/M/S (→ R)        │
├──────────────────────────────────────────┤
│  §3 Evaluation Matrix                    │
│  Heatmap + Radar Charts                  │
├──────────────────────────────────────────┤
│  §4 Requirement Explorer                 │
│  Split-screen scenario visualizations    │
├──────────────────────────────────────────┤
│  §5 Absence Modeling                     │
│  Lacuna visualization + Thaller compare  │
├──────────────────────────────────────────┤
│  §6 About / Methodology                  │
│  Promptotyping as method, references     │
└──────────────────────────────────────────┘
```

## 2 Navigation

- Sticky top bar with section links
- Active section highlighted during scroll (Intersection Observer API)
- Smooth scroll on click
- Breadcrumb-style context indicator when inside deep views (e.g., specific requirement)

## 3 Color System

### Primary Palette (Property Groups)

| Group | Hue | CSS Variable | Hex |
|-------|-----|-------------|-----|
| Primitive | Indigo | `--color-primitive` | `#4338ca` |
| Epistemic | Teal | `--color-epistemic` | `#0d9488` |
| Medial | Amber | `--color-medial` | `#d97706` |
| Semiotic | Rose | `--color-semiotic` | `#e11d48` |
| Structural | Slate | `--color-structural` | `#475569` |

### Rating Palette (Evaluation)

| Level | Color | CSS Variable | Hex |
|-------|-------|-------------|-----|
| Structural (dedicated) | Green | `--color-rating-structural` | `#16a34a` |
| Metadata (generic) | Yellow | `--color-rating-metadata` | `#ca8a04` |
| Absent | Red/Gray | `--color-rating-absent` | `#dc2626` |

### Systemic Gap Indicator

- Pulsing border animation (`--color-gap`: `#7c3aed`, purple)
- Used on DAG nodes, heatmap rows, requirement cards

### Accessibility

- All color pairs meet WCAG AA contrast ratio (4.5:1 minimum)
- Patterns/icons supplement color for colorblind users
- Rating cells use pattern fills in addition to color: structural = solid, metadata = hatched, absent = dotted

## 4 Typography

- **Headings:** System font stack (`-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`)
- **Body:** Same system stack, 16px base, 1.6 line height
- **Code/Formal:** `'JetBrains Mono', 'Fira Code', monospace` for formal notation
- **Scale:** 1.25 ratio (h1: 2.441rem, h2: 1.953rem, h3: 1.563rem, h4: 1.25rem)

## 5 Layout Grid

- Max width: 1200px, centered
- 12-column grid for flexibility
- Responsive breakpoints: 1200px (desktop), 768px (tablet), 375px (mobile)
- Side panels: 400px fixed width on desktop, full-width overlay on mobile

## 6 Visualization Specifications

### 6.1 Derivation Graph (§2)

**D3 Component:** Custom hierarchical layout (NOT force-directed — the three-tier structure P→E/M/S is too important to leave to physics simulation)

**Layout:**
```
Layer 0 (top):     P1        P2        P3
                    |    ╱  ╱╲╲╲  ╲    ╱ ╲
Layer 1 (middle):  E1 E5 S1 E2 M1 M3 M4 S2 E3 E4 S3 M2
                   (property nodes, grouped by type)
Layer 2 (bottom):  R-nodes (shown on click/expand, not by default)
```

**Node Rendering:**
- Primitives: large circles (r=40), filled with group color, bold label
- Properties: medium circles (r=28), filled with group color, smaller label
- Requirements: small rectangles (when expanded), showing ID + short label
- Systemic gap requirements: purple pulsing border

**Edge Rendering:**
- Single derivation: solid line, 2px, slightly curved
- Combined derivation: dashed line from each source, meeting at target. Two lines converge.
- Arrowheads at target end

**Interactions:**
- Hover on node: highlight node + all connected edges + connected nodes. Dim everything else.
- Click on node: open side panel with full definition, formal notation, and list of requirements
- Click on P2: should highlight 7 connected properties (demonstrating it is the most productive primitive)

**Data Source:** `data/derivation_graph.json`

### 6.2 Evaluation Heatmap (§3)

**D3 Component:** SVG grid with rect elements

**Layout:**
```
           Thaller  SDHSS  CRM  Book. Fact. STAR PROV-O
           (79%)    (67%)  (63%) (38%) (33%) (33%) (17%)
R-E1.1     [■]      [▒]    [▒]   [▒]   [▒]   [░]   [░]
R-E1.2     [■]      [▒]    [▒]   [░]   [■]   [░]   [░]
...
(24 rows, grouped by epistemic/medial/semiotic/structural)
```

**Cell Size:** 48x32px, with 2px gap
**Row Groups:** Separated by horizontal divider lines with group label

**Interactions:**
- Hover on cell: tooltip with rating level + justification
- Click on cell: expanded panel with full justification
- Toggle: equal weight / textual domain weighting (updates column header percentages)
- Filter buttons: All | Epistemic | Medial | Semiotic | Structural | Systemic Gaps
- Click on requirement label (row header): navigate to Requirement Explorer §4
- Systemic gap rows: highlighted with purple left border

**Data Source:** `data/evaluation_matrix.json`

### 6.3 Radar Chart (§3, below heatmap)

**D3 Component:** Custom SVG radar/spider chart

**Layout:** One radar chart with overlayable polygons. Axes = requirement groups (4 axes: epistemic, medial, semiotic, structural) or per-requirement (24 axes).

**Default View:** 4 axes (grouped), with Thaller + CIDOC-CRM + SDHSS overlaid as benchmark comparison.

**Interactions:**
- Checkboxes to select 1–3 approaches for overlay
- Toggle: 4-axis (grouped) / 24-axis (per requirement)
- Domain profile selector (equal / textual)
- Hover on polygon edge: show exact value

**Data Source:** `data/evaluation_matrix.json` (aggregated)

### 6.4 Scenario Explorer (§4)

**D3 Component:** Split-screen with custom visualizations per requirement type

**Layout:**
```
┌─────────────────────┬─────────────────────┐
│   Source Material    │   Model View        │
│                     │                     │
│  [rendered example] │  [data model viz]   │
│                     │                     │
│  E.g., ledger page  │  E.g., event graph  │
│  or register entry  │  with assertions    │
├─────────────────────┴─────────────────────┤
│  [Requirement fulfilled]  [NOT fulfilled]  │
│  [Approach: ▼ Thaller] [▼ CIDOC-CRM]     │
└───────────────────────────────────────────┘
```

**Requirement Selector:** Sidebar or top bar with all 24 requirements, grouped. Systemic gaps highlighted.

**"With/Without" Toggle:** Shows same data with requirement fulfilled (approach X) vs. not fulfilled (approach Y). The *absence of information* in the "without" view is the key visual argument.

**Per-Requirement Visualization Types:**
- **Uncertainty (R-E1.x):** Confidence bars, probability distributions, ghost/transparent elements for uncertain values
- **Perspectives (R-E3.x):** Parallel columns showing different source accounts, with connecting lines for agreements/contradictions
- **Absence (R-E1.3, R-M2.2, R-M3.1):** Ghost elements, dashed outlines for known unknowns, shaded void regions, torn timeline
- **Temporal (R-S1.x):** Multi-track timeline with layers for event/creation/interpretation time
- **Textual (R-S2.1):** Synoptic text display with diplomatic/normalized toggle
- **Relations (R-S3.1):** Stemma diagram with typed edges

**Data Source:** `data/examples/requirement_examples.json` + `data/examples/scenario_*.json`

### 6.5 Lacuna Visualization (§5)

**D3 Component:** Custom SVG with interactive toggle

**Concept:** A prosopographic dataset (Scenario B) is shown with full information, then the user can "remove" the lacuna modeling to see what disappears.

**Three Absence Types — Visual Language:**

1. **Known unknowns (R-E1.3):** Hollow circles with dashed borders. Label: "Birth date: ?" The circle is there (the person existed), but the fill is empty (the information is lost). On toggle-off: the hollow circle disappears entirely.

2. **Systematic omissions (R-M2.2):** Shaded void region in a data table or network graph. Where guild members are shown as nodes, women appear as a translucent shaded area labeled "Systematically excluded: women." On toggle-off: the shaded area vanishes, and the data looks complete (the absence becomes invisible).

3. **Transmission gaps (R-M3.1):** Timeline with a torn/faded segment for 1600–1680 (lost registers). The torn segment carries a label: "Parish registers destroyed, 1681." On toggle-off: the timeline appears continuous (no indication that records are missing).

**Toggle:** Large, prominent button: "Show/Hide Absence Modeling." The transition is animated — elements fade in/out to emphasize the visual difference.

**Explanation Panel:** Below the visualization, three cards explain the causes:
1. Positive bias: "Ontologies describe what exists, not what is missing"
2. OWA problem: "In OWL, missing data = unknown, not = informationally significant"
3. Missing tradition: "No formalization tradition for non-knowledge"

**Thaller Comparison:** Side-by-side: Thaller's Incompleteness Taxonomy (Ex 6.1–6.3: Explicit Defaults, Triggered Defaults, Structural Incompleteness) mapped onto the three absence types. Shows convergence and divergence.

**Data Source:** `data/examples/scenario_b.json` + `data/requirements.json` (systemic gaps)

## 7 Responsive Behavior

### Desktop (≥1200px)
- Full layout: side panels visible inline
- Heatmap: all columns visible
- Split-screen: true side-by-side

### Tablet (768–1199px)
- Side panels slide in as overlays
- Heatmap: horizontally scrollable
- Split-screen: stacked vertical

### Mobile (≤767px)
- Single column layout
- Visualizations simplified (fewer labels, touch-optimized)
- Side panels: full-screen modals
- Radar chart: 4-axis only

## 8 Data Loading Strategy

```javascript
// data-loader.js provides:
const DataLoader = {
  primitives: null,
  graph: null,
  requirements: null,
  matrix: null,
  examples: null,

  async init() {
    // Parallel fetch of all JSON files
    const [p, g, r, m, ea, eb, ec, re] = await Promise.all([
      fetch('../data/primitives.json').then(r => r.json()),
      fetch('../data/derivation_graph.json').then(r => r.json()),
      fetch('../data/requirements.json').then(r => r.json()),
      fetch('../data/evaluation_matrix.json').then(r => r.json()),
      fetch('../data/examples/scenario_a.json').then(r => r.json()),
      fetch('../data/examples/scenario_b.json').then(r => r.json()),
      fetch('../data/examples/scenario_c.json').then(r => r.json()),
      fetch('../data/examples/requirement_examples.json').then(r => r.json()),
    ]);
    // Store and validate...
  }
};
```

## 9 Module Architecture

Each visualization is a self-contained module with a single entry point:

```javascript
// Example: derivation-graph.js
export function initDerivationGraph(containerSelector, data) {
  // Creates SVG, binds data, sets up interactions
  // Returns API: { highlight(nodeId), reset(), resize() }
}
```

Cross-linking handled by `cross-links.js` which registers click handlers and coordinates between modules.

## 10 Print/Export

- `@media print` stylesheet hides navigation, simplifies visualizations to static SVG
- Each visualization section self-contained for academic screenshot use

## Related

- [[Data]] — JSON-Schema-Dokumentation
- [[Examples-Overview]] — Synthetische Beispiele für Visualisierungen
- [[Evaluation-Framework]] — Bewertungsmethodik als Datenquelle für Heatmap
