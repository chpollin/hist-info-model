---
type: design-document
created: 2026-03-21
tags: [website-design, visualization, d3js]
status: draft
---

# Design Document: Historical Information Web Interface

**Version:** 2.0 (M17 — datengetriebene Visualisierungen)
**Technology:** Static HTML/CSS/Vanilla JS + D3.js v7 (local copy, no CDN)

---

## 1 Page Structure

Single-page application with scroll-based navigation. Seven sections structured as five scholarly "stations" plus introduction and about:

```
┌──────────────────────────────────────────┐
│  Header / Navigation Bar (sticky)        │
├──────────────────────────────────────────┤
│  §1 Introduction                         │
│  Leitfrage + Three Primitives overview   │
├──────────────────────────────────────────┤
│  §2 Reading (Station 1)                  │
│  Source Reading Table — Viz 1            │
├──────────────────────────────────────────┤
│  §3 Tracing (Station 2)                 │
│  Person Tracer — Viz 2                   │
├──────────────────────────────────────────┤
│  §4 Comparing (Station 3)               │
│  Witness Comparator — Viz 3              │
├──────────────────────────────────────────┤
│  §5 Reconstructing (Station 4)           │
│  Event Reconstructor — Viz 4             │
├──────────────────────────────────────────┤
│  §6 Reflecting (Station 5)              │
│  Model Mirror — Viz 5                    │
├──────────────────────────────────────────┤
│  §7 About / Methodology                  │
│  Promptotyping as method, references     │
└──────────────────────────────────────────┘
```

**Leitfrage der Seite:** "Was passiert, wenn man eine historische Quelle in Daten übersetzen will?"

**Narrativer Fluss:** Jede Station entspricht einem scholarly task. Die Eigenschaften historischer Information emergieren aus den Daten, nicht aus Labels.

## 2 Navigation

- Sticky top bar with section links (7 links: Introduction, Reading, Tracing, Comparing, Reconstructing, Reflecting, About)
- Active section highlighted during scroll (Intersection Observer API)
- Smooth scroll on click
- Hamburger menu on mobile (≤767px)
- Scroll progress bar (3px gradient top)

## 3 Color System

### Primary Palette (Property Groups)

| Group | Hue | CSS Variable | Hex |
|-------|-----|-------------|-----|
| Primitive | Indigo | `--color-primitive` | `#4338ca` |
| Epistemic | Teal | `--color-epistemic` | `#0d9488` |
| Medial | Amber | `--color-medial` | `#d97706` |
| Semiotic | Rose | `--color-semiotic` | `#e11d48` |
| Structural | Slate | `--color-structural` | `#475569` |

### Rating Palette (used in Model Mirror)

| Level | Color | CSS Variable | Hex |
|-------|-------|-------------|-----|
| Structural (dedicated) | Green | `--color-rating-structural` | `#16a34a` |
| Metadata (generic) | Yellow | `--color-rating-metadata` | `#ca8a04` |
| Absent | Red | `--color-rating-absent` | `#dc2626` |

### Systemic Gap / Absence Indicator

- Purple (`--color-gap`: `#7c3aed`)
- Used for absence markers, known unknowns, systematic omissions, transmission gaps

### Accessibility

- All color pairs meet WCAG AA contrast ratio (4.5:1 minimum)
- Patterns/icons supplement color for colorblind users

## 4 Typography

- **Headings:** Inter (Google Fonts) + system fallback stack
- **Body:** Inter, 16px base, 1.65 line height
- **Code/Formal:** `'JetBrains Mono', 'Fira Code', 'Consolas', monospace`
- **Scale:** 1.25 ratio (h1: 2.75rem, h2: 2rem, h3: 1.5rem, h4: 1.2rem)

## 5 Layout Grid

- Max width: 1200px, centered
- Responsive breakpoints: 1200px (desktop), 768px (tablet/mobile)
- Viz containers: min-height 500px for station vizs
- Scroll reveal animations on `.reveal` class elements (0.7s cubic-bezier)

## 6 Visualization Specifications

### 6.1 Source Reading Table (§2 — Station 1: "Reading")

**"Was sagt ein einzelner Eintrag wirklich?"**

- **Module:** `site/js/viz/source-reader.js`
- **Data:** `scenario_a.json` (Fugger-Transaktionen), `scenario_c.json` (Chronikpassage)
- **Entry-Tabs:** Pfefferhandel | Darlehen | Mitgift | Chronikpassage
- **Layer-Toggles:** Diplomatisch/Normalisiert, Temporale Schichten, Referenzsysteme, Kategorien (emic/etic), Unsicherheit
- **D3-Einsatz:** SVG swimlanes für temporale Schichten (Event/Recording/Interpretation Time)
- **DOM-Pattern:** HTML für Text (besseres Wrapping), D3 nur für Balken/Timeline
- **HI emergiert durch:** Schimmernder Split-Betrag (2000/2500), emic/etic-Split, drei Zeitebenen für dasselbe Ereignis

### 6.2 Person Tracer (§3 — Station 2: "Tracing")

**"Was wissen wir wirklich über Johann Meier?"**

- **Module:** `site/js/viz/person-tracer.js`
- **Data:** `scenario_b.json` (Prosopographie mit Abwesenheiten)
- **Person-Selector:** Johann | Anna | Peter | Hans — jede Person erzählt eine andere Abwesenheitsgeschichte
- **Grid:** x=Zeit (1650–1750), y=Quellen (5 Zeilen), Schnittpunkte = Erscheinungen/Abwesenheiten
- **Zell-Typen:**
  - Gefüllter Kreis (teal) = Person erscheint
  - Gestrichelter Hohlkreis (lila) = Known Unknown (Quelle zerstört)
  - Schattierte Fläche (lila) = Systematische Auslassung (by design)
  - Leer = nicht erwähnt
- **Feuernarbe:** 1681 Markierung auf Timeline mit torn-pattern
- **Characterization-Callouts:** Hover → "ehrbarer Meister" vs. "streitbarer Weber"
- **Identity-Fork:** Hans Weber → Gabelung mit "?" und zwei Forscher-Interpretationen
- **Absence Toggle:** Hide/Show aller strukturierten Abwesenheitsmarker
- **HI emergiert durch:** Johanns Geburt als Hohlkreis, Annas Gilde-Spalte als strukturelle Leere, Feuernarbe als viszeraler Verlust

### 6.3 Witness Comparator (§4 — Station 3: "Comparing")

**"Ist das derselbe Text?"**

- **Module:** `site/js/viz/witness-comparator.js`
- **Data:** `scenario_c.json` (4 Textzeugen, Stemma, Varianten)
- **Stemma-Diagramm:** D3 tree (Original → Archetypus → A/β → B/C/D), hypothetische Knoten gestrichelt
- **Synoptische Text-Spalten:** 2–4 Spalten je nach Auswahl, diplomatisch mit Toggle für Normalisierung
- **Varianten-Highlighting:** Orthographische Varianten (amber underline via CSS), substantive Varianten (rose border-left)
- **Material-Features-Panel:** Pro Textzeuge: Material, Schrift, Schäden, Wasserzeichen, Tintenfarbe
- **Carrier/Content Toggle:** "Trägermaterial" an/aus
- **HI emergiert durch:** Diplomatisch→Normalisiert zeigt Transkription als Interpretation; rote Tinte als Information über die Handschrift

### 6.4 Event Reconstructor (§5 — Station 4: "Reconstructing")

**"Fünf Berichte über einen Streit"**

- **Module:** `site/js/viz/event-reconstructor.js`
- **Data:** `scenario_d.json` (Zunftstreit 1702, 5 Quellen)
- **Event-Hub:** D3 radiale Anordnung — zentraler Ereignisknoten, 5 Quellen trigonometrisch verteilt
- **Quellen-Karten:** Klick auf 2 Quellen → Perspektivenvergleich (Übereinstimmung/nur A/nur B/Widerspruch/Spannung)
- **Kategorienwandel-Timeline:** 1702→1905→2020 mit 3 Knoten ("Handwerkerehre"→"Zunftzwang"→"labor_dispute")
- **Epistemische Distanz-Kette:** 3 Stufen mit abnehmender Opazität und Dimensionszähler (17→8→4)
- **HI emergiert durch:** Fünf Quellen, fünf Wahrheiten, ein Ereignis; Kategorienwandel als semantischer Drift; Widerspruch Täter vs. Opfer

### 6.5 Model Mirror (§6 — Station 5: "Reflecting")

**"Was verliert jedes Datenmodell?"**

- **Module:** `site/js/viz/model-mirror.js`
- **Data:** Alle Szenarien (A, B, C, D)
- **Datenpunkt-Tabs:** Pfefferhandel | Johann Meier | Chronikpassage | Zunftstreit
- **3-Spalten-Vergleich:**
  - Spalte 1: Volles HI-Modell (alle Schichten, Unsicherheit, Provenienz, Abwesenheit)
  - Spalte 2: Relationale DB (ein Datum, ein Betrag, ein Name)
  - Spalte 3: Spreadsheet (alles ist ein String)
- **Informationsverlust-Zähler:** "17 → 8 → 4 dimensions" als große Zahlen
- **Geister-Overlay:** Verlorene Felder als 0.15 opacity Einträge in Spalte 2/3
- **Lost-Panel:** Auflistung aller verlorenen Dimensionen pro Spalte
- **HI emergiert durch:** Alle Properties gleichzeitig, durch ihre Abwesenheit

## 7 Responsive Behavior

### Desktop (≥1200px)
- Full layout: 3-column Model Mirror, 4-column Witness Comparator
- Source Reader: 2-column (display + controls)

### Tablet/Mobile (≤767px)
- Single column layout for all viz components
- Source Reader controls above display
- Witness Comparator: 1 column (stacked)
- Model Mirror: 1 column (stacked)
- Hamburger navigation

## 8 Data Loading Strategy

```javascript
// data-loader.js provides:
const DataLoader = {
  primitives, graph, requirements, matrix,
  scenarioA, scenarioB, scenarioC, scenarioD,
  requirementExamples,

  async init(basePath) {
    // Parallel fetch of all 9 JSON files
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

**Lazy Loading:** Visualisierungen werden erst initialisiert, wenn ihre Container via IntersectionObserver sichtbar werden (rootMargin: 200px).

## 9 Module Architecture

Jede Visualisierung ist ein selbständiges ES-Modul:

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

`app.js` koordiniert: DataLoader → IntersectionObserver → init-Funktionen.

## 10 Print/Export

- `@media print` stylesheet hides navigation, simplifies visualizations
- `.reveal` elements set to `opacity: 1; transform: none`
- Each section self-contained for academic screenshot use

## Related

- [[Data]] — JSON-Schema-Dokumentation
- [[Examples-Overview]] — Synthetische Beispiele für Visualisierungen
- [[Evaluation-Framework]] — Bewertungsmethodik (Theorie-Daten, nicht direkt visualisiert)
