---
type: knowledge
created: 2026-03-21
tags: [research-plan, historical-information, promptotyping]
status: active
---

# Forschungsplan: Grundlagen eines Datenmodells historischer Information

## Ziel

Erarbeitung der theoretischen und evidenzbasierten Grundlagen für ein Datenmodell historischer Information. Das Projekt konsolidiert:

1. **Dissertation** — Bookkeeping Ontology, DEPCHA, 5 Eigenschaften historischer Information, Scholar-Centred Design
2. **Thaller** — Ivory Stack (2018–2021), Factlets, Hypergraphen, Active Database, 8 Annahmen, 4 Defizite
3. **Factoid/STAR + CIDOC-CRM** — Assertionsbasierte Modellierung, E13_Attribute_Assignment, Pentile-System
4. **Echte Projektdaten** — DEPCHA, SuGW, M³GIM, zbz-ocr-tei als Evidenzbasis

## Zentrale Forschungsfrage

Können die formal spezifizierten Requirements für historische Information systematisch auf Thallers Ivory Stack abgebildet werden — und zeigt diese Abbildung, welche Bausteine durch bestehende Repräsentationsansätze bereits adressiert werden, welche fehlen, und wie sie interagieren müssen?

Thaller (2020) argumentiert, dass der gesamte Conceptual Stack moderner IT die primären Eigenschaften historischer Information verletzt und ersetzt werden muss. Er formuliert 9 Forschungsvorhaben (IvI–IvV) als konkrete Bausteine. Dieses Projekt liefert das theoretische Gegenstück: Requirements als paradigmenneutraler Bewertungsmaßstab, der zeigt, *warum* bestimmte Bausteine nötig sind.

→ Dokument: `knowledge/01-theory/Thaller-Synthesis.md`

## Offene Teilfragen

### F1: Beziehung 5 Eigenschaften ↔ 3 Primitive
Die 5 Eigenschaften aus der Dissertation (Human Agency, Context Sensitivity, Multiperspectivity, Uncertainty, Vetorecht) sind empirisch gesichert. Die 3 Primitive (P1 Temporale Irreversibilität, P2 Spurenvermitteltheit, P3 Interpretative Konstitution) sind ein axiomatischer Reduktionsversuch. Sind die Primitive fundamentaler? Komplementär? Oder eine Überformalisierung?

→ Dokument: `knowledge/01-theory/Historical-Information.md`

### F2: Sind 24 die richtigen Requirements?
Die 24 Requirements müssen durch echte Modellierungsprobleme aus DEPCHA, SuGW, M³GIM, zbz-ocr-tei validiert werden. Fehlen Requirements? Sind welche redundant? Sind sie paradigmenneutral — adressierbar von Ontologien, TEI, Graphmodellen und Archivstandards?

→ Dokument: `knowledge/01-theory/Requirements.md`

### F3: Evidenzbasierte Evaluation von Repräsentationsansätzen
Die bisherigen Ratings sind Platzhalter. Jede Bewertung braucht einen Beleg aus der Spezifikation oder Projekterfahrung. Die Evaluation umfasst nicht nur Ontologien, sondern fünf Paradigmen: Ontologien, Graphmodelle, Textkodierung, Archivstandards, Aggregation.

→ Dokumente: `knowledge/02-approaches/`

### F4: Korrespondenz systemische Lücken ↔ Ivory Stack
Sind es wirklich 5 systemische Lücken? Warum genau diese? Die Abbildung auf den Ivory Stack zeigt: Die unbeantworteten Bausteine (IvF Frozen Algorithms, IvT Linguistic Variables, IvC Fuzzy Control) korrespondieren mit den systemischen Lücken. Ist diese Korrespondenz systematisch oder zufällig?

→ Dokumente: `knowledge/02-approaches/Systemic-Gaps.md`, `knowledge/01-theory/Thaller-Synthesis.md`

### F5: Was ist der neue Beitrag?
Die Zusammenführung liefert, was keiner allein hat: Thaller hat die Implementierungsarchitektur (Ivory Stack), dieses Projekt die theoretische Begründung (Requirements) und die paradigmenübergreifende Evaluation. Die Abbildung zwischen beiden Seiten zeigt die Lücken — und die Lücken definieren das Forschungsdesiderat.

→ Dokument: `knowledge/01-theory/Thaller-Synthesis.md`

---

## Arbeitsplan

### Phase A: Theorie konsolidieren
**Status: In Arbeit**

| Schritt | Dokument | Status |
|---------|----------|--------|
| A1: 5 Eigenschaften ↔ 3 Primitive klären | `01-theory/Historical-Information.md` | draft — Frage formuliert, Antwort offen |
| A2: Primitive formal spezifizieren | `01-theory/Primitives.md` | draft — Bezüge zu Thaller + Factoid hergestellt |
| A3: Ableitungsgraph validieren | `01-theory/Properties.md` | draft — Ableitungen beschrieben |
| A4: Requirements evidenzbasiert überarbeiten | `01-theory/Requirements.md` | stub — braucht Projektdaten |
| A5: Thaller-Synthese vertiefen | `01-theory/Thaller-Synthesis.md` | draft — Konvergenz/Divergenz systematisiert |
| A6: Abwesenheitsmodellierung schärfen | `01-theory/Absence-Modeling.md` | draft — 3 Typen + OWA-Paradox |

### Phase B: Evidenz aus echten Projekten
**Status: Stubs angelegt**

| Schritt | Dokument | Datenquelle |
|---------|----------|-------------|
| B1: DEPCHA-Modellierungsprobleme extrahieren | `03-examples/DEPCHA-Evidence.md` | Obsidian: `DEPCHA.md`, `Bookkeeping Ontology.md` |
| B2: SuGW-Modellierungsprobleme extrahieren | `03-examples/SuGW-Evidence.md` | Obsidian: SuGW-Projektdokumentation |
| B3: M³GIM-Modellierungsprobleme extrahieren | `03-examples/M3GIM-Evidence.md` | GitHub: `DHCraft/m3gim`, Obsidian: `Projects/M³GIM/` |
| B4: zbz-ocr-tei-Probleme extrahieren | `03-examples/ZBZ-Evidence.md` | GitHub: `DHCraft/zbz-ocr-tei`, 34 Design Decisions |

**Methode:** Für jedes Projekt: Welche konkreten Modellierungsentscheidungen mussten getroffen werden? Wo hat die verwendete Ontologie nicht ausgereicht? Welche Requirements werden dadurch illustriert?

### Phase C: Ontologie-Evaluation
**Status: Stubs angelegt**

| Schritt | Dokument | Primärquelle |
|---------|----------|-------------|
| C1: CIDOC-CRM systematisch bewerten | `02-evaluation/CIDOC-CRM-Assessment.md` | ISO 21127, CRM-Spezifikation |
| C2: SDHSS systematisch bewerten | `02-evaluation/SDHSS-Assessment.md` | Beretta 2021, OntoME |
| C3: Factoid/STAR bewerten | `02-evaluation/Factoid-STAR-Assessment.md` | Pasin/Bradley 2015, Andrews et al. 2024 |
| C4: Bookkeeping Ontology selbstkritisch bewerten | `02-evaluation/Bookkeeping-Assessment.md` | Pollin 2024, v1.2 vs. v1.3 |
| C5: Thaller bewerten | `02-evaluation/Thaller-Assessment.md` | Thaller 2018, 2020, 2021 |
| C6: PROV-O bewerten | `02-evaluation/PROV-O-Assessment.md` | W3C 2013 |
| C7: Systemische Lücken validieren | `02-evaluation/Systemic-Gaps.md` | Alle Assessments |

**Methode:** Pro Ansatz und pro Requirement: Konkrete Klasse/Property benennen (structural), generischen Mechanismus benennen (metadata), oder explizit belegen warum nicht adressiert (absent). Websuche für Ontologie-Spezifikationen wo nötig.

### Phase D: JSON-Daten aktualisieren
**Status: Wartend auf Phase B+C**

- `data/evaluation_matrix.json` mit evidenzbasierten Ratings ersetzen
- `data/examples/` mit Daten aus echten Projekten ergänzen oder ersetzen
- `scripts/validate_data.py` anpassen

### Phase E: Website mit echtem Inhalt
**Status: Prototyp existiert, Inhalte sind Platzhalter**

- Visualisierungen an echte Daten binden
- Design überarbeiten (aktuelles Design als Ausgangspunkt, nicht Endprodukt)
- Neue Visualisierungen: z.B. Thallers Mother-Child-Problem als Hypergraph-Demonstration

### Phase F: Paper
**Status: Gliederung steht**

→ `knowledge/05-paper/Paper-Outline.md`
Arbeitstitel: *Foundations for a Data Model of Historical Information*
Hängt ab von: Phase A (Theorie), Phase C (Evaluation), Phase E (Website als Evidenz)

---

## Abhängigkeiten

```
Phase A (Theorie) ──→ Phase C (Evaluation) ──→ Phase D (JSON)
     ↓                                             ↓
Phase B (Evidenz) ──────────────────────────→ Phase E (Website)
                                                    ↓
                                              Phase F (Paper)
```

Phasen A und B können parallel laufen. C braucht A (Requirements als Bewertungsmaßstab) und B (Evidenz als Beleg). D und E brauchen C. F braucht alles.

---

## Nächste konkrete Schritte

1. **F1 klären:** Die Beziehung 5 Eigenschaften ↔ 3 Primitive durchdenken. Ist es Lesart A (Primitive fundamentaler), B (komplementär), oder C (Überformalisierung)?
2. **B1 beginnen:** DEPCHA-Evidence aus dem Obsidian-Vault extrahieren — die Bookkeeping Ontology ist dein eigenes Werk, dort kennst du die Modellierungsprobleme am besten.
3. **C4 beginnen:** Bookkeeping-Assessment als erstes evidenzbasiertes Assessment — Selbstkritik an der eigenen Ontologie ist die überzeugendste Grundlage für das Paper.
