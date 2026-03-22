---
type: knowledge
created: 2026-03-22
tags: [evidence, projects, depcha, sugw, m3gim, zbz, consolidated]
status: stub
---

# Project Evidence

## Summary

Konsolidierte Dokumentation der vier echten DH-Projekte, die als Evidenzbasis für die Validierung der [[Requirements|24 Requirements]] dienen. Dieses Dokument ersetzt die einzelnen Evidence-Stubs und enthält für jedes Projekt: Beschreibung, Datenvolumen, bekannte Modellierungsherausforderungen, potentielle Requirements-Mappings und Datenzugangspfade.

**Status:** Die systematische Extraktion konkreter Modellierungsprobleme und das Mapping auf Requirements stehen noch aus. Die hier aufgeführten Herausforderungen sind identifiziert, aber nicht analysiert.

**Priorisierung:** ZBZ (34 dokumentierte Design Decisions) und SuGW (16K Personen, Skalierung) bieten das höchste Evidenzpotential.

---

## DEPCHA

**Projekt:** Digital Edition Publishing Cooperative for Historical Accounts.
**Plattform:** gams.uni-graz.at/depcha (GAMS-Infrastruktur: Fedora, Blazegraph Triple Store, Apache Cocoon, IIIF Server).
**Datenvolumen:** 8+ historische Finanzquellen, TEI-XML → RDF via Bookkeeping Ontology v1.2.
**Ontologie:** [[Approaches-Comparison#1.3 Bookkeeping Ontology|Bookkeeping Ontology]] v1.2 (implementiert), v1.3 (theoretisch).

### Modellierungsherausforderungen

1. **Drei-Schichten-Separation in der Praxis** — Wie hält die Trennung Ökonomische Realität / Quellendokumentation / Historische Interpretation unter echtem Datendruck?
2. **TEI-zu-RDF-Informationsverlust** — Fälle, in denen die Transformation Information verliert oder verzerrt
3. **REA-resistente Transaktionen** — Wirtschaftliche Vorgänge, die das Resource-Event-Agent-Pattern nicht abbilden kann
4. **Währungs- und Maßeinheitskomplexität** — Historische Konversionssysteme (Rhenische Gulden, Venezianische Dukaten, lokale Pfennige)
5. **Temporale Ambiguität** — Datierungen nach Heiligentagen, unvollständige Datumsangaben

### Potentielle Requirements-Mappings

| Requirement | Erwartete Evidenz |
|---|---|
| R-E2.1 Provenienz | Jede Assertion muss auf Folio/Eintrag rückführbar sein |
| R-S1.2 Historische Referenzsysteme | Historische Währungen, Maßeinheiten, Konversionssysteme |
| R-M2.1 Erstellungszweck | Rechnungsbücher für Rechenschaftslegung, nicht Geschichtsschreibung |
| R-A1 Separation of Concerns | Drei-Schichten-Architektur als Operationalisierung |
| R-E1.1 Unsicherheitsgrade | Teilweise unleserliche Beträge, unscharfe Datierungen |

### Datenzugang

- **Plattform:** https://gams.uni-graz.at/depcha
- **Ontologie:** https://gams.uni-graz.at/o:depcha.bookkeeping
- **Obsidian:** `Digital Humanities/Standards und Datenmodelle/DEPCHA.md`

---

## SuGW

**Projekt:** Schreiben über die Geschäfte Wiens (Writing about the Businesses of Vienna).
**Datenvolumen:** ~6.400 TEI-XML-Dokumente, 16.084 identifizierte Personen, 11.942 dokumentierte Transaktionen.
**Zeitraum:** Mittelalterliche Rechtsgeschäfte in Wien.

### Modellierungsherausforderungen

1. **Personendisambiguierung bei 16K Individuen** — Mittelalterliche Namenskonventionen (Patronyme, Beinamen, lateinische/deutsche Varianten)
2. **Co-Referenz-Auflösung** — Dieselbe Person unter verschiedenen Namen/Titeln in verschiedenen Quellen
3. **Temporale Modellierung** — Nicht-gregorianische Datierungen, regierungszeitbasierte Angaben, approximative Datierungen
4. **Rechtsgeschäftstypen** — Formale Repräsentation verschiedener Transaktionsarten
5. **Skalierungsherausforderungen** — Funktioniert der Modellierungsansatz bei 16K Personen / 12K Transaktionen?

### Potentielle Requirements-Mappings

| Requirement | Erwartete Evidenz |
|---|---|
| R-E1.2 Alternativinterpretationen | Personenidentifikation: gleiche Person oder verschiedene? |
| R-E3.1 Perspektivenkoexistenz | Verschiedene Quellen charakterisieren dieselbe Person verschieden |
| R-E4.1 Interpretationsmetadaten | Forscher A identifiziert anders als Forscher B |
| R-S2.1 Lesarten/Normalisierung | Mittelalterliche Namensvarianten |
| R-E5.1 Temporale Kategorisierung | Mittelalterliche Berufsbezeichnungen vs. moderne Kategorien |

### Datenzugang

- **TEI-XML-Korpus:** ~6.400 Dokumente (Zugang zu klären)
- **Obsidian:** Projektnotizen im Vault (Pfade zu lokalisieren)

---

## M³GIM

**Projekt:** Multimediales Archiv — Ira-Malaniuk-Archiv.
**Datenvolumen:** 283 Archiveinheiten, 1.264 dokumentierte Beziehungen (∅ 4,5 Relationen pro Objekt).
**Ontologie:** [[Approaches-Comparison#4.1 RiC-O|RiC-O]] mit Domänenerweiterungen (m3gim:MusicalWork, m3gim:Performance).

### Modellierungsherausforderungen

1. **Hohe relationale Dichte** — 4,5 Relationen pro Objekt erfordern ausdrucksstarke Beziehungstypen
2. **Beziehungstypen** — part-of, references, depicts, performed-in, composed-by, etc.
3. **Archivbeschreibung ↔ biographischer Kontext** — Verknüpfung von Bestandsebene mit historischem Kontext
4. **Provenienz- und Besitzketten** — Custody chains für Archivmaterialien
5. **Multimediale Materialien** — Noten, Fotos, Programme, Korrespondenz als heterogene Quelltypen

### Potentielle Requirements-Mappings

| Requirement | Erwartete Evidenz |
|---|---|
| R-M4.1 Träger-Inhalt-Separation | Physisches Archivstück vs. Information |
| R-E2.1 Provenienz | Provenienz- und Custody Chains |
| R-S3.1 Quellenrelationen | 1.264 typisierte Relationen |
| R-M1.1 Quellentyp als Dimension | Heterogene Materialien (Noten, Fotos, Briefe) |

### Datenzugang

- **GitHub:** `DHCraft/m3gim` (`C:/Users/Chrisi/Documents/GitHub/DHCraft/m3gim`)
- **Output Views:** `C:/Users/Chrisi/Documents/GitHub/DHCraft/m3gim/data/output/views`

---

## ZBZ

**Projekt:** Jeanne-Hersch-Materialien an der Zentralbibliothek Zürich.
**Datenvolumen:** 286 PDFs, ~4.150 Seiten, 34 dokumentierte Design Decisions.
**Pipeline:** Physische Seite → PDF → OCR → TEI-XML.

### Modellierungsherausforderungen

1. **OCR-Qualität und Informationsqualität** — Materialzustand beeinflusst OCR, OCR beeinflusst downstream-Modellierung
2. **34 dokumentierte Design Decisions** — Ungewöhnlich gut dokumentierte epistemische Entscheidungen im Transformationsprozess
3. **Transformationspipeline** — Informationsverlust auf jeder Stufe (Physisch → PDF → OCR → TEI)
4. **Mehrsprachigkeit** — Hersch schrieb in mehreren Sprachen
5. **Strukturelle Ambiguität** — Kopfzeilen, Fußnoten, Marginalien in gescannten Dokumenten

### Potentielle Requirements-Mappings

| Requirement | Erwartete Evidenz |
|---|---|
| R-M4.2 Material als Information | Physischer Zustand beeinflusst OCR-Qualität |
| R-E4.1 Interpretationsmetadaten | 34 Design Decisions als dokumentierte interpretive Entscheidungen |
| R-E2.1 Provenienz | Transformationsprovenienz (PDF→OCR→TEI) |
| R-E1.1 Unsicherheitsgrade | OCR-Confidence, Leseambiguität |
| R-A1 Separation of Concerns | Trennung Transkription/Interpretation in der Pipeline |

### Datenzugang

- **GitHub:** `DHCraft/zbz-ocr-tei` (`C:/Users/Chrisi/Documents/GitHub/DHCraft/zbz-ocr-tei`)
- **Design Decisions:** 34 dokumentierte Entscheidungen (Datei zu lokalisieren)

---

## Cross-Project-Analyse

### Paradigmenverteilung über Projekte

| Projekt | TEI | CIDOC-CRM | RiC-O | Bookkeeping | Factoid/STAR | PROV-O |
|---------|-----|-----------|-------|-------------|-------------|--------|
| DEPCHA | ✓ (Quelle) | ✓ (Basis) | — | ✓ (Kern) | — | (Pipeline) |
| SuGW | ✓ (6.400 Docs) | — | — | — | (Potential) | — |
| M³GIM | — | ✓ (Patterns) | ✓ (Kern) | — | — | — |
| ZBZ | ✓ (Ziel) | ✓ (Referenz) | — | — | — | (Pipeline) |

### Noch zu leisten

- [ ] Für jedes Projekt: 5–10 konkrete Modellierungsentscheidungen extrahieren, die ein Requirement illustrieren oder verletzen
- [ ] ZBZ: Die 34 Design Decisions systematisch den 24 Requirements zuordnen
- [ ] SuGW: Personendisambiguierungsfälle als Testdaten für R-E1.2 und R-E3.1 identifizieren
- [ ] M³GIM: Die 1.264 Relationen typisieren und gegen R-S3.1 testen
- [ ] DEPCHA: Konkrete Fälle von TEI→RDF-Informationsverlust dokumentieren
- [ ] Cross-Project: Welche Requirements werden von allen Projekten bestätigt? Welche nur von einem?

## Related

- [[Examples-Overview]] — Synthetische Beispiele (ergänzend zu echten Projektdaten)
- [[Requirements]] — 24 Requirements als Bewertungsmaßstab
- [[Approaches-Comparison]] — Ansätze, die in den Projekten zum Einsatz kommen
- [[Evaluation-Framework]] — Methodik der evidenzbasierten Bewertung
