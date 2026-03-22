# CLAUDE.md — Action Document: Foundations for a Data Model of Historical Information

## Project Overview

Erarbeitung der theoretischen und evidenzbasierten Grundlagen für ein Datenmodell historischer Information. Das Projekt konsolidiert: die Dissertation (Bookkeeping Ontology, DEPCHA, 5 Eigenschaften historischer Information), Thallers Framework (Ivory Stack, Factlets, Hypergraphen), Factoid/STAR-Modelle, CIDOC-CRM-Analyse und Erfahrungen aus echten DH-Projekten (SuGW, M³GIM, zbz-ocr-tei). Literatur-Survey 2024–2025 integriert (Linked Art 1.0, RDF-star, CRMinf, Hypergraph-KGs, MemO/NFDI4Memory, ProbFuzzOnto). Methode: Promptotyping.

**Aktueller Stand:** Website-Prototyp umgebaut zu datengetriebenen Visualisierungen (M17, 2026-03-22). 5 Stationen (Reading, Tracing, Comparing, Reconstructing, Reflecting) mit echten historischen Daten aus 4 Szenarien. Research Vault (`knowledge/`) konsolidiert (M16). 20 Dateien, 18 Ansätze aus 8 Paradigmen dokumentiert. Theorie-Schicht ist 70% fertig (draft). Evidenzbasierte Evaluation und Extraktion echter Projektdaten stehen noch aus.

## Repository Structure

```
CLAUDE.md                # Action Document (dieses File)
README.md                # Projektübersicht
PLAN.md                  # Forschungsplan mit offenen Fragen und Arbeitsphasen

knowledge/               # Research Vault (Obsidian-kompatibel, 20 Dateien)
  00-process/
    Journal.md           # Process Document (M0–M17)
    MOC.md               # Map of Contents mit Status-Übersicht
  01-theory/             # Theoretische Grundlagen (9 Dateien)
    Information.md            # Informationswissenschaftliches Fundament
    Dissertation-Context.md   # Zentrale Referenz: Pollin 2024
    Historical-Information.md # 5 Eigenschaften + 3 Primitive
    Primitives.md             # P1/P2/P3 mit Ableitungen
    Properties.md             # 11 abgeleitete Eigenschaften
    Requirements.md           # 24 Requirements mit RE-Methodik
    Absence-Modeling.md       # Abwesenheitsmodellierung
    Thaller-Synthesis.md      # Konvergenz/Divergenz mit Thaller
    research-archive.md       # Archiv: ursprüngliche Synthese v1.0
  02-approaches/         # Repräsentationsansätze (4 Dateien, konsolidiert)
    Approaches-Overview.md    # 8 Paradigmen, 18 Ansätze
    Approaches-Comparison.md  # Konsolidierter Vergleich aller Ansätze
    Evaluation-Framework.md   # Bewertungsmethodik
    Systemic-Gaps.md          # 5 systemische Lücken mit Status 2024–2025
  03-examples/           # Evidenz und Beispiele (2 Dateien)
    Examples-Overview.md      # 4 synthetische Szenarien (A–D), alle 24 Requirements
    Project-Evidence.md       # 4 echte Projekte konsolidiert (DEPCHA, SuGW, M³GIM, ZBZ)
  04-design/
    Design.md                 # Website-Architektur
    Data.md                   # JSON-Schema-Dokumentation
  05-paper/
    Paper-Outline.md          # Paper-Gliederung

data/                    # JSON Single Source of Truth (9 Dateien, inkl. scenario_d.json)
scripts/                 # Python-Validierungsscripts
site/                    # Website-Prototyp (5 Stationen, HTML/CSS/Vanilla JS + D3.js)
  js/viz/                # 5 Visualisierungsmodule (source-reader, person-tracer, witness-comparator, event-reconstructor, model-mirror)
```

## Key Principles

- **Obsidian-kompatibel:** knowledge/-Dokumente verwenden [[Wikilinks]], Frontmatter nach Vault-Konventionen (type, created, tags, status)
- **Evidenzbasiert:** Keine Ratings/Bewertungen ohne Beleg aus Ontologie-Spezifikation oder Projekterfahrung
- **Echte Daten vor synthetischen:** Fallbeispiele aus DEPCHA, SuGW, M³GIM, zbz-ocr-tei haben Priorität
- **Status-Transparenz:** Jedes Dokument markiert seinen Status (stub/draft/complete/reviewed/archived)
- **Obsidian-Hauptvault:** Quellmaterial in `C:\Users\Chrisi\Documents\obsidian\`
- **Navigation:** `knowledge/00-process/MOC.md` als Map of Contents für den Research Vault

## Technology Constraints

- **Vanilla JS only** – no frameworks, no npm, no build system
- **D3.js** (local copy in `site/js/lib/`) for visualizations
- **Static HTML/CSS/JS** – deployable via GitHub Pages
- **JSON as Single Source of Truth** – all content data lives in `data/`

## Verification

- `python scripts/validate_data.py` für JSON-Integrität
- Jedes knowledge/-Dokument muss YAML-Frontmatter haben (type, created, tags, status)
- Alle [[Wikilinks]] müssen auf existierende Dateien zeigen
- Journal.md nach jedem Milestone aktualisieren
