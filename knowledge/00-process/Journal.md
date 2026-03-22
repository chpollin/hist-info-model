---
type: knowledge
created: 2026-03-21
tags: [process-document, promptotyping, historical-information]
status: active
---

# Journal

## 2026-03-21

### M0: Repository Bootstrap

- Created directory structure: `data/`, `data/examples/`, `knowledge/concepts/`, `site/css/`, `site/js/lib/`, `scripts/`
- Created `CLAUDE.md` as Action Document with technology constraints, repository structure, coding conventions, and data integrity rules
- Created `Journal.md` (this file) as Process Document
- Created `.gitignore`
- Phase 1 (Preparation) was the intellectual synthesis resulting in `research.md`. M0 begins Phase 2 (Exploration and Mapping).

### M1: JSON Data Foundation

- Created `data/primitives.json` (3 primitives with formal notation, distinctness tests, de/en labels)
- Created `data/derivation_graph.json` (15 nodes: 3P + 5E + 4M + 3S, 12 derivation edges including 2 combined)
- Created `data/requirements.json` (24 requirements with test conditions, systemic gap flags, scenario assignments)
- Created `data/evaluation_matrix.json` (7 approaches x 24 requirements = 168 ratings with justifications)
- Created `scripts/quick_validate.py` for automated verification
- All coverage percentages verified against research.md: Thaller 79%, SDHSS 67%, CIDOC-CRM 63%, Bookkeeping 38%, Factoid 33%, STAR 33%, PROV-O 17%
- Coverage formula: `(structural + metadata) / 24 * 100` (both levels count as "addressed")
- 5 systemic gaps correctly marked: R-E1.3, R-E5.2, R-M2.2, R-M3.1, R-S2.1
- Key insight: The 168 individual rating justifications required significant knowledge generation beyond what research.md specifies. The justifications encode domain knowledge about each approach's capabilities. Expert review needed.
- Textual domain weighting produces different percentages than research.md states (e.g., SDHSS 62% vs. 72%). The weighting formula in research.md likely differentiates structural/metadata differently within the weighted calculation. To be resolved in M5.

### M2: Synthetic Historical Examples

- Created `knowledge/concepts/Examples.md` with three fully specified scenarios:
  - Scenario A (Augsburg merchant ledger, 1472–1489): 10 requirements, focus on uncertainty, temporal complexity, reference systems
  - Scenario B (Brückstadt prosopographic DB, 1650–1750): 13 requirements, focus on absence modeling, multiperspectivity, person identification
  - Scenario C (Middle High German chronicle edition, 14th century): 7 requirements, focus on textual criticism, materiality, source relations
- All 24 requirements have concrete examples with specific entities, dates, and data points
- All 5 systemic gaps covered (3 absence-related gaps concentrated in Scenario B by design)
- Scenario B is the richest (13 requirements) because it carries the novel contribution (absence modeling)
- Key design principle: examples are historically plausible composites, not real data, to avoid copyright/accuracy issues while maintaining disciplinary authenticity

### M3: Design Document

- Created `Design.md` with complete website architecture
- Key decision: hierarchical layout for DAG (NOT force-directed) — the three-tier P→E/M/S structure is too important for random physics
- Color system: 5 group colors + 3 rating colors + systemic gap indicator (purple pulse)
- Accessibility: WCAG AA contrast, pattern fills supplement color
- 6 visualization types specified with D3 components, interactions, and data sources
- Lacuna visualization: toggle "Show/Hide Absence Modeling" is the centerpiece interaction
- Responsive: 3 breakpoints (1200/768/375), visualizations adapt
- Module architecture: each viz is self-contained with init function, cross-links coordinated centrally

### M4: Example Data as JSON

- Created `data/examples/scenario_a.json` (Augsburg merchant ledger): 4 persons, 4 transactions, 2 reference systems, uncertainty/fuzzy date modeling
- Created `data/examples/scenario_b.json` (Brückstadt prosopography): 5 sources with systematic omissions and transmission gaps, 4 persons with identification problems, perspective relations, epistemic distance chain
- Created `data/examples/scenario_c.json` (chronicle edition): 4 witnesses with stemma, variant text passage with diplomatic/normalized forms, material features (red ink, water damage, watermarks)
- Created `data/examples/requirement_examples.json`: all 24 requirements mapped to scenarios with "with/without" descriptions and visual specifications
- Validation: all 24 requirements covered, no missing/extra, all scenario references valid
- Key design: each requirement example has explicit `with_requirement` and `without_requirement` fields describing what the visualization shows in each state — this drives the Scenario Explorer's toggle interaction

### M5: Data.md, Validation Scripts, Knowledge Consolidation

- Created `Data.md` with complete schema documentation for all 8 JSON files, invariants, and cross-file reference table
- Created `knowledge/concepts/Absence.md`: deep dive into the 3 absence types, OWA paradox, Thaller comparison, visual language specification
- Created `scripts/validate_data.py`: comprehensive validation (primitives, graph acyclicity, 24 requirements, 168 ratings, coverage percentages, cross-references)
- ALL CHECKS PASSED: 3 primitives, 15 nodes, 12 edges (acyclic), 24 requirements, 168 rated justifications, 24 examples, all cross-references valid
- Phase 2 (Exploration and Mapping) and Phase 3 (Distillation) complete. All Knowledge Documents finalized. Ready for Phase 4 (Implementation).

### M6: Site Shell and Navigation

- Created `site/index.html` with 6 semantic sections (Introduction, Derivation, Evaluation, Explorer, Absence, About)
- Created `site/css/style.css` with complete design system: CSS custom properties, 5 group colors, 3 rating colors, gap pulse animation, responsive breakpoints, print styles
- Created `site/js/data-loader.js` as central data access module with helper methods
- Created `site/js/navigation.js` with Intersection Observer-based section highlighting
- Created `site/js/app.js` as module entry point
- Downloaded D3.js v7 locally (280KB)
- Tested: server from project root, site at /site/index.html, data at /data/*.json

### M7: Derivation Graph (Interactive DAG)

- Created `site/js/derivation-graph.js`: full hierarchical layout (not force-directed)
- Three tiers: Primitives (top) → Properties grouped by epistemic/medial/semiotic (middle)
- 15 nodes with group-specific coloring, 12 edges (solid for single, dashed for combined)
- Hover: highlights connected subgraph, dims unconnected
- Click: opens detail panel with description, formal notation, connected nodes, derived requirements
- Systemic gap requirements marked with purple badge in detail panel

### M8: Evaluation Heatmap

- Created `site/js/heatmap.js`: D3 SVG grid with 168 cells
- Row headers (requirement IDs) with group coloring, gap indicator bars
- Column headers with approach names and dynamic coverage percentages
- Filter buttons: All / Epistemic / Medial / Semiotic / Structural / Systemic Gaps
- Weight toggle: Equal / Textual Sources (recalculates coverage on switch)
- Tooltip on cell hover showing rating level and justification
- Accessibility: pattern fills (hatched for metadata, dotted for absent) supplement color
- Click on requirement ID navigates to Requirement Explorer section

### Requirement Selector (part of M9)

- Created `site/js/requirement-selector.js`: generates clickable buttons for all 24 requirements
- Buttons colored by group, systemic gaps have purple border
- Click shows split-screen "with/without" view from requirement_examples.json
- Green panel = with requirement, Red panel = without requirement

### M10: Lacuna Visualization

- Created `site/js/lacuna-viz.js`: prosopographic dataset (Scenario B) with three types of absence
  - Known unknowns (R-E1.3): hollow dashed circles for Johann Meier's missing birth date
  - Systematic omissions (R-M2.2): shaded void region for women excluded from guild registers, Anna Meier as ghost node
  - Transmission gaps (R-M3.1): torn timeline segment for destroyed parish registers 1600–1680
- Toggle "Show/Hide Absence Modeling": animated fade in/out makes absence invisible when toggled off
- Source boxes show destroyed sources with dashed borders and "DESTROYED" label
- Three cause cards below: Positive Bias, OWA problem, Missing Formalization

### M11: Radar Charts

- Created `site/js/radar-chart.js`: 4-axis spider chart (epistemic/medial/semiotic/structural)
- Default overlay: Thaller + SDHSS + CIDOC-CRM
- Clickable approach buttons for overlay selection (max 3 simultaneous)
- Concentric circles with percentage labels, group-colored axis labels
- Polygons with semi-transparent fill and colored strokes

### M12: Integration

- Connected all modules in app.js: DataLoader → 5 visualizations + navigation
- Primitive cards on landing page populated from JSON data
- Primitive card click scrolls to derivation graph
- Heatmap requirement click navigates to Requirement Explorer section
- All 24 requirements accessible via selector with grouped, colored buttons

### M13: Verification and Deployment

- `python scripts/validate_data.py` — ALL CHECKS PASSED
- Final file count: 27 files (excluding D3.js library)
  - 8 JSON data files (4 core + 4 example)
  - 8 JS modules (app + data-loader + navigation + 5 visualizations)
  - 1 HTML, 1 CSS
  - 5 Knowledge/Process/Action documents (research.md, Data.md, Design.md, Journal.md, CLAUDE.md)
  - 2 concept documents (Examples.md, Absence.md)
  - 3 Python scripts (validate_data.py, quick_validate.py, fix_ratings.py)
- To test locally: `python -m http.server 8081` from project root, open `http://localhost:8081/site/index.html`
- For GitHub Pages: serve from project root (site/ references ../data/)

### Summary: Promptotyping Process

This project followed all four Promptotyping phases:
1. **Preparation** (pre-existing): `research.md` synthesized years of theoretical work
2. **Exploration and Mapping** (M0–M3): Created JSON data foundation (168 ratings, 24 requirements), designed synthetic examples across 3 scenarios, wrote Design.md
3. **Distillation** (M4–M5): Compressed examples into structured JSON, wrote Data.md, built validation scripts
4. **Implementation** (M6–M12): Built interactive static website with 5 visualization types, all reading from JSON single source of truth

The website is simultaneously:
- **Research prototype**: validates 24 requirements against 7 approaches
- **Communication medium**: makes the theory experienceable through visualizations
- **Methodological demonstration**: is itself a Promptotype built with the method it demonstrates

### Kurskorrektur: Von Hülle zu Substanz

Kritische Reflexion nach M0–M13:

**Problem:** Die Website-Infrastruktur (HTML/CSS/JS, JSON-Schemata, Visualisierungs-Stubs) wurde gebaut, bevor die eigentliche intellektuelle Arbeit geleistet war. Die 168 Ratings in `evaluation_matrix.json` sind synthetisch — auf die Zielprozentwerte aus research.md hingetrimmt, nicht evidenzbasiert aus Ontologie-Spezifikationen abgeleitet. Die synthetischen Beispiele (Szenarien A/B/C) sind fiktional statt aus echten Projekten.

**Erkenntnis:** research.md versucht eine Zusammenführung aus drei Strängen:
1. Dissertation (Bookkeeping Ontology, DEPCHA, 5 Eigenschaften historischer Information)
2. Thaller (Ivory Stack, Factlets, Hypergraphen, 8 Annahmen, 4 Defizite)
3. Factoid/STAR + CIDOC-CRM

Die Beziehung zwischen den 5 empirischen Eigenschaften (Human Agency, Context Sensitivity, Multiperspectivity, Uncertainty, Vetorecht) und den 3 Primitiven (P1/P2/P3) ist eine offene Forschungsfrage, keine gesicherte Ableitung.

**Konsequenz:** Refactoring des `knowledge/`-Ordners zum Research Vault.

### Knowledge Vault Refactoring

- `research.md` → archiviert als `knowledge/01-theory/research-archive.md`
- Aufgeteilt in 6 Theorie-Dokumente: Historical-Information.md, Primitives.md, Properties.md, Requirements.md, Absence-Modeling.md, Thaller-Synthesis.md
- Status jedes Dokuments explizit markiert (stub/draft/complete)
- 7 Evaluation-Stubs angelegt (1 Framework + 6 Assessments) — alle Ratings als "TODO: needs evidence-based review"
- 4 Evidence-Stubs für echte Projekte (DEPCHA, SuGW, M³GIM, zbz-ocr-tei) — Verweise auf Obsidian-Vault und GitHub
- Paper-Outline als Stub
- Root-Dokumente (Journal, Design, Data) in knowledge/ verschoben
- CLAUDE.md und README.md aktualisiert mit ehrlichem Status
- Alle Dokumente Obsidian-kompatibel (Frontmatter, [[Wikilinks]])

## 2026-03-22

### M14: Vault Refactoring — Titel und Struktur

- Projekttitel vereinheitlicht: "Foundations for a Data Model of Historical Information"
- Alter Titel ("From Theory to Code", "Making Theory Experienceable", "erfahrbar machen") aus allen aktiven Dokumenten entfernt, nur in research-archive.md als historischer Bestand erhalten
- CLAUDE.md und README.md auf neues Framing umgeschrieben: "Datenmodell-Grundlagen" statt "Web Interface"
- PLAN.md aktualisiert (Titel, Eröffnung, Paper-Arbeitstitel)
- Paper-Outline.md: Neuer Titel, gebrochener Wikilink [[Requirements-Catalog]] → [[Requirements]] repariert
- 4 Dateien mit fehlender YAML-Frontmatter versehen: Design.md, Data.md, Examples-Overview.md, research-archive.md
- Dissertation-Context.md neu erstellt: Zentrales Referenzdokument für Pollin 2024, 5 Eigenschaften, Bookkeeping Ontology, DEPCHA, Scholar-Centred Design
- MOC.md (Map of Contents) neu erstellt: Navigations-Dokument mit Status-Tabellen für alle 26 Vault-Dateien
- Wikilink-Audit: [[Historical Information]] → [[Historical-Information]], [[Requirements-Catalog]] → [[Requirements]], Alias-Fixes
- Related-Sektionen ergänzt: Absence-Modeling, Examples-Overview, Design, Data + bidirektionale Links

### Offene inhaltliche Fragen nach M14

Erkenntnisse aus der kritischen Reflexion:

1. **Informationswissenschaftliches Fundament fehlt.** Keine Definition von "Information" im Vault — Langefors, DIKW-Kritik, Berettas Pyramide, Druckers "capta" müssen aus dem Obsidian-Vault hierher.
2. **Requirements ohne methodische Herleitung.** Die 24 Requirements wirken axiomatisch. Die Dissertation hat eine RE-Methodik (Scholar-Centred Design → Deep Dive Sessions → User Stories → Requirements). Diese Ableitung muss dokumentiert werden.
3. **02-evaluation/ ist zu eng gefasst.** "Ontologie-Bewertung" greift zu kurz. Historische Information wird nicht nur durch Ontologien, sondern auch durch Archivstandards (RiC-O), Textkodierung (TEI XML), Graphstrukturen (FactGrid, Wikibase), Annotationsmodelle und Aggregationsstandards (EDM) repräsentiert. Umbenennung zu 02-approaches/ und Erweiterung des Bewertungsrahmens.
4. **Sprache und Substanz.** Dokumente sollen neutral, sachlich, informativ und gehaltvoll sein — Wissen transportieren, nicht Platzhalter-Strukturen.

### M15: Inhaltliche Weiterentwicklung — Information, Paradigmen, Requirements

Alle vier offenen Fragen aus M14 adressiert:

**1. Information.md erstellt** (`01-theory/Information.md`)
- Informationswissenschaftliches Fundament: Was ist Information?
- Langefors' infologische Gleichung I=i(D,S,t) als zentrales Modell
- DIKW-Kritik: lineare Hierarchie inadäquat für historische Forschung
- Druckers "capta": Geisteswissenschaftliche Daten sind aktiv selektiert
- Berettas Pyramide der historischen Wissensproduktion
- Kuhlen: Information ist kein Ding, sondern ein Konstrukt
- Konsequenzen für Modellierung: Interpret mitmodellieren, Multiperspektivität als Systemeigenschaft

**2. Requirements.md refactored**
- Methodische Herleitung dokumentiert: Scholar-Centred Design → Deep Dive Sessions → User Stories → Requirements
- RE-Methodik aus Dissertation (Pollin 2024) integriert
- Paradigmenneutralität als offene Frage explizit gemacht
- Strukturelle Requirements (R-A1 bis R-A4) methodisch verortet: Thaller + DEPCHA-Erfahrungen

**3. 02-evaluation/ → 02-approaches/ — Paradigmengruppierung**
- Umbenennung von "Evaluation" zu "Approaches" — nicht nur Ontologien, sondern Repräsentationsansätze
- Fünf Paradigmen als Unterordner:
  - `ontologies/` — CIDOC-CRM, SDHSS, Bookkeeping, Factoid/STAR, PROV-O (bestehende Assessments verschoben)
  - `graph-models/` — Thaller (verschoben), FactGrid (NEU)
  - `text-encoding/` — TEI XML (NEU)
  - `archival-standards/` — RiC-O (NEU)
  - `aggregation/` — EDM (NEU)
- Approaches-Overview.md erstellt: Paradigmengruppierung mit Stärken/Schwächen jedes Paradigmas
- Erkenntnis: "Kein Paradigma deckt alles ab" — Requirements müssen paradigmenneutral sein

**4. Neue Approach-Dokumente**
- FactGrid-Assessment.md: Wikibase-Instanz, widersprüchliche Statements, 1.3+ Mio. Objekte
- TEI-Assessment.md: Textkodierung, Variantenapparat, diplomatisch/normalisiert, 3 Projekte
- RiC-O-Assessment.md: Archivstandard, ICA, Multirelationalität, operativ bei M³GIM
- EDM-Assessment.md: Aggregation, 50+ Mio. Objekte, Minimalmodell als Kontrastfall

**Navigations-Dokumente aktualisiert:** MOC.md, CLAUDE.md, README.md — alle mit neuer 02-approaches/-Struktur

**Vault-Statistik nach M15:** 31 Markdown-Dateien im Research Vault (9 Theory, 14 Approaches, 5 Evidence, 2 Design, 1 Paper)

### M16: Konsolidierung und Literatur-Update 2024–2025

Kritische Analyse des Vault-Zustands: 31 Dateien mit hoher struktureller Vollständigkeit aber niedriger inhaltlicher Vollständigkeit. 16 von 31 Dateien waren Stubs mit identischen TODO-Tabellen. Wissenschaftliche Webrecherche zu aktueller Forschungsliteratur (2024–2025) für historische Informationsmodellierung durchgeführt.

**Konsolidierung (31 → 20 Dateien):**

1. **02-approaches/: 14 Dateien → 4 Dateien**
   - 9 einzelne Assessment-Stubs (CIDOC-CRM, SDHSS, Bookkeeping, Factoid/STAR, PROV-O, Thaller, FactGrid, TEI, RiC-O, EDM) + 3 übergreifende Dateien → 4 konsolidierte Dateien
   - NEU: `Approaches-Comparison.md` — Konsolidierter Vergleich aller Ansätze an einem Ort
   - AKTUALISIERT: `Approaches-Overview.md` — Erweitert von 5 auf 8 Paradigmen
   - AKTUALISIERT: `Evaluation-Framework.md` — Von Stub zu Draft (Methodik, Evidenzquellen, paradigmenneutrale Anwendung)
   - AKTUALISIERT: `Systemic-Gaps.md` — Von Stub zu Draft (Status 2024–2025 für jede Lücke)
   - GELÖSCHT: 9 Assessment-Stubs + 5 Unterordner (ontologies/, graph-models/, text-encoding/, archival-standards/, aggregation/)

2. **03-examples/: 5 Dateien → 2 Dateien**
   - 4 Evidence-Stubs (DEPCHA, SuGW, M³GIM, ZBZ) → 1 konsolidierte `Project-Evidence.md`
   - `Examples-Overview.md` beibehalten (substanziell)

3. **01-theory/: Überlappungen reduziert**
   - `Historical-Information.md`: 5 Eigenschaften als Kurzliste mit Verweis auf Dissertation-Context statt Volltext-Duplikat
   - Wikilinks auf gelöschte Assessment-Dateien durch Verweise auf Approaches-Comparison aktualisiert

**8 neue Ansätze aus Literatur 2024–2025 identifiziert und dokumentiert:**
- CRMinf (Argumentation/Belief, CIDOC-CRM Extension)
- Hypergraph-KGs (HySAE, HyperGraphRAG — n-äre Relationen)
- Linked Art 1.0 (JSON-LD-Profil von CIDOC-CRM, Feb 2025)
- MemO / NFDI4Memory KG (Föderierte Infrastruktur für historische Forschungsdaten)
- RDF-star (Statement-Level-Metadaten, W3C Working Group)
- CHAD-KG (Digitalisierungs-Paradata, CIDOC-CRM 7.1.3 + LRMoo)
- TKG-Ansätze (Temporale Knowledge Graphs, Event-basiertes Reasoning)
- ProbFuzzOnto (Fuzzy Bayesian Networks für Ontologien)

**Versions-Updates für bestehende Ansätze:**
- CIDOC-CRM: v7.3 (August 2024)
- RiC-O: v1.1 (Mai 2025, 3 Releases in 12 Monaten)
- TEI: P5 v4.10.2 (September 2025)
- FactGrid: 1,3M+ Items (Oktober 2024), ~700 Nutzer
- SDHSS: Beretta 2024 mit neuen Papern zu Geovistory + OntoME + geographische Orte

**Wikilink-Audit:** Alle Verweise auf gelöschte Dateien durch Verweise auf konsolidierte Dokumente ersetzt. Broken Links: [[Bookkeeping Ontology]], [[Factoid Model]] → auf Approaches-Comparison-Anker umgeleitet.

**Kernbefund der Literaturrecherche:**
- Abwesenheitsmodellierung (R-M2.2) bleibt die härteste ungelöste Lücke — kein neuer Ansatz adressiert sie
- CRMinf und ProbFuzzOnto adressieren Unsicherheit partiell (R-E1.3)
- RDF-star könnte die Provenienz-Verbosität von Factoid/STAR und E13 lösen
- Thallers Hypergraph-Konzept wird durch HySAE und HyperGraphRAG validiert
- LLM-gestützte KG-Konstruktion (ATR4CH) ist keine Modellierung, aber eine zunehmend relevante Popuierungsmethode

**Vault-Statistik nach M16:** 20 Markdown-Dateien im Research Vault (9 Theory, 4 Approaches, 2 Evidence/Examples, 2 Design, 1 Paper, 2 Process). Reduktion um 35% bei gleichzeitiger Verdichtung der Information und Erweiterung um 8 neue Ansätze
