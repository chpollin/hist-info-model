# Foundations for a Data Model of Historical Information

Erarbeitung der theoretischen und evidenzbasierten Grundlagen für ein Datenmodell historischer Information. Das Projekt konsolidiert die Dissertation (Bookkeeping Ontology, DEPCHA, 5 Eigenschaften historischer Information), Thallers Framework (Ivory Stack, Factlets, Hypergraphen), Factoid/STAR-Modelle, CIDOC-CRM-Analyse, aktuelle Forschungsliteratur (2024–2025) und Erfahrungen aus echten DH-Projekten (SuGW, M³GIM, zbz-ocr-tei). Methode: Promptotyping.

## Historische Information als epistemische Kategorie

Historische Information ist kein Spezialfall allgemeiner Information, sondern eine eigenständige epistemische Kategorie. Sie ist gekennzeichnet durch:

- **Human Agency** — Information entsteht durch aktive Konstruktion, nicht Entdeckung
- **Context Sensitivity** — Bedeutung erfordert Rekonstruktion verlorener Kontexte
- **Multiperspectivity** — Multiple gültige Interpretationen koexistieren
- **Uncertainty** — Fünf Dimensionen: Vagueness, Inconsistency, Incompleteness, Polyvalence, Negation
- **Vetorecht der Quellen** — Quellen können Interpretationen invalidieren, nicht Wahrheit garantieren

Dieses Projekt untersucht, ob diese Eigenschaften auf drei fundamentale Primitive reduzierbar sind (Temporale Irreversibilität, Spurenvermitteltheit, Interpretative Konstitution), leitet daraus 24 formale Requirements ab und evaluiert, wie 18 Repräsentationsansätze aus 8 Paradigmen diese adressieren.

## Forschungsplan

→ **[PLAN.md](PLAN.md)** für den vollständigen Forschungsplan mit offenen Fragen, Arbeitsphasen und nächsten Schritten.

### Offene Forschungsfragen

1. **F1:** Beziehung 5 Eigenschaften (Dissertation) ↔ 3 Primitive — fundamentaler, komplementär, oder Überformalisierung?
2. **F2:** Sind 24 die richtigen Requirements? Validierung durch echte Projektdaten.
3. **F3:** Evidenzbasierte Bewertung — jede Bewertung braucht Beleg aus der Spezifikation.
4. **F4:** Was leisten die 5 systemischen Lücken? Bezug zu Thallers Incompleteness-Taxonomie.
5. **F5:** Was ist der neue Beitrag der Zusammenführung?

## Struktur

```
CLAUDE.md              Action Document
README.md              Projektübersicht (diese Datei)
PLAN.md                Forschungsplan

knowledge/             Research Vault (Obsidian-kompatibel, 20 Dateien)
  00-process/
    Journal.md         Process Document (M0–M16)
    MOC.md             Map of Contents mit Status-Übersicht
  01-theory/           Theoretische Grundlagen (9 Dateien, 7 draft + 1 stub + 1 archived)
    Information.md            Informationswissenschaftliches Fundament
    Dissertation-Context.md   Zentrale Referenz: Pollin 2024
    Historical-Information.md 5 Eigenschaften + 3 Primitive
    Primitives.md             P1/P2/P3 mit Ableitungen
    Properties.md             11 abgeleitete Eigenschaften
    Requirements.md           24 Requirements mit RE-Methodik
    Absence-Modeling.md       Abwesenheitsmodellierung
    Thaller-Synthesis.md      Konvergenz/Divergenz mit Thaller
    research-archive.md       Archiv: ursprüngliche Synthese v1.0
  02-approaches/       Repräsentationsansätze (4 Dateien, konsolidiert)
    Approaches-Overview.md    8 Paradigmen, 18 Ansätze
    Approaches-Comparison.md  Konsolidierter Vergleich aller Ansätze
    Evaluation-Framework.md   Bewertungsmethodik
    Systemic-Gaps.md          5 systemische Lücken mit Status 2024–2025
  03-examples/         Evidenz und Beispiele (2 Dateien)
    Examples-Overview.md      3 synthetische Szenarien
    Project-Evidence.md       4 echte Projekte (DEPCHA, SuGW, M³GIM, ZBZ)
  04-design/
    Design.md                 Website-Architektur
    Data.md                   JSON-Schema-Dokumentation
  05-paper/
    Paper-Outline.md          Paper-Gliederung

data/                  JSON-Daten (Single Source of Truth — Platzhalter, braucht Review)
site/                  Website-Prototyp (HTML/CSS/Vanilla JS + D3.js)
scripts/               Python-Validierung
```

## Status

| Bereich | Status | Nächster Schritt |
|---------|--------|-----------------|
| Theorie | Draft (7/9) | F1 klären: 5 Eigenschaften ↔ 3 Primitive |
| Ansätze | Draft (4/4, konsolidiert) | Evidenzbasierte Bewertung füllen |
| Evidenz | Stub | Projektdaten extrahieren (ZBZ: 34 Design Decisions) |
| JSON-Daten | Platzhalter | Wartend auf Evidenz-Phase |
| Website | Prototyp | Wartend auf echte Daten |
| Paper | Gliederung | Wartend auf Evaluation |

## Evaluierte Ansätze (18, 8 Paradigmen)

| Paradigma | Ansätze |
|-----------|---------|
| Ontologien | CIDOC-CRM v7.3, SDHSS, Bookkeeping Ontology, Factoid/STAR, PROV-O, CRMinf |
| Graphmodelle | Thaller (Ivory Stack), FactGrid, Hypergraph-KGs |
| Textkodierung | TEI XML P5 |
| Archivstandards | RiC-O v1.1 |
| Aggregation | EDM |
| Linked Data Profiles | Linked Art 1.0, MemO/NFDI4Memory |
| Statement-Annotation | RDF-star, CHAD-KG |
| Temporal KGs | TKG-Ansätze, ProbFuzzOnto |

## Methode

[Promptotyping](https://github.com/DigitalHumanitiesCraft) — iterative Context-Engineering-Methode für datengetriebene Forschungsartefakte mit Frontier LLMs.

## Lokal testen

```bash
python -m http.server 8081
# Browser: http://localhost:8081/site/index.html
```

## Validierung

```bash
python scripts/validate_data.py
```

## Quellen

- Pollin, C. (2024). *Modelling, Operationalising and Exploring Historical Information.* Dissertation, Universität Graz. https://doi.org/10.25364/402.2024.63
- Thaller, M. (2018, 2020, 2021). On Information in Historical Sources; On Vagueness and Uncertainty; Historical Information and Graph Structures.
- Pasin, M. & Bradley, J. (2015). Factoid-based Prosopography and Computer Ontologies.
- Andrews, T., Deierl, V. & Ebel, C. (2024). STAR Model: Gender as Event.
- Doerr, M. (2003). The CIDOC Conceptual Reference Model (ISO 21127). CIDOC-CRM v7.3 (2024).
- Beretta, F. (2021, 2024). SDHSS / OntoME / Geovistory.
- Linked Art 1.0 (Feb 2025). https://linked.art/
- RiC-O v1.1 (Mai 2025). ICA-EGAD.
- Raemy, J. A. (2024). Linked Open Usable Data for Cultural Heritage. PhD, Universität Basel.
