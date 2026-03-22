---
type: knowledge
created: 2026-03-21
tags: [historical-information, requirements, data-modeling, requirements-engineering]
status: stub
---

# Requirements

## Summary

24 formale Requirements für die Modellierung historischer Information. Die Requirements beschreiben *was* ein Datenmodell repräsentieren muss, nicht *wie*. Sie sind paradigmenneutral formuliert — ein Requirement muss prinzipiell von einer Ontologie, einem TEI-Schema, einem Graphmodell oder einem Archivstandard erfüllbar sein.

Status: **Stub** — die Requirements sind aus den [[Properties]] abgeleitet, müssen aber durch Evidenz aus echten Projekten validiert und durch konkrete Testbedingungen geschärft werden.

## Methodische Herleitung

Die Requirements-Ableitung folgt der Methodik aus der Dissertation (Pollin 2024), die [[Dissertation-Context|Scholar-Centred Design]] mit Requirements Engineering verbindet:

### 1. Empirische Grundlage: Deep Dive Sessions

In DEPCHA (2017–2020) wurden durch Deep-Dive-Sessions mit Historikern wiederkehrende Repräsentationsbedürfnisse identifiziert. Der Prozess kombinierte Screen-Sharing, Forschungsbesuche, TEI-XML-Annotationsübungen und Rapid Prototyping. Drei Erkenntnisse:

- Die inhärente Logik der Quellen erzeugt Anforderungen (z.B. Steuerregister → Group-Konzept)
- Die expliziten Forschungsbedürfnisse erzeugen Anforderungen (z.B. Netzwerkanalyse → Relationsmodellierung)
- Die impliziten Interpretationspraktiken erzeugen Anforderungen (z.B. verschiedene Historiker → verschiedene Kategorisierungen → Multiperspektivität)

### 2. Theoretische Abstraktion: Eigenschaften → Requirements

Die fünf [[Historical-Information|Eigenschaften historischer Information]] und die elf daraus abgeleiteten [[Properties]] bilden den theoretischen Rahmen. Jedes Requirement ist einer Eigenschaft zugeordnet und formuliert eine konkrete Bedingung, die aus dieser Eigenschaft folgt:

```
Eigenschaft → Property → Requirement → Testbedingung
z.B.: Uncertainty → E1 Unsicherheit → R-E1.1 Unsicherheitsgrade →
      "Das Modell muss graduierte Unsicherheit für Datierungen darstellen können"
```

### 3. Validierung: Echte Projekte

Jedes Requirement soll durch mindestens ein konkretes Modellierungsproblem aus einem echten Projekt belegt werden:

- **DEPCHA** — Historische Finanzdaten, TEI → RDF, Bookkeeping Ontology
- **SuGW** — 16.084 Personen, mittelalterliche Rechtsgeschäfte, Personenidentifikation
- **M³GIM** — 283 Archiveinheiten, RiC-O-basiert, relationale Dichte
- **zbz-ocr-tei** — 286 PDFs, 34 Design Decisions, OCR-Pipeline

TODO: Diese Validierung steht noch aus. Siehe [[Project-Evidence]].

## Offene Fragen

1. **Sind 24 die richtige Zahl?** Oder gibt es Requirements, die redundant sind bzw. fehlen?
2. **Sind alle Requirements gleich gewichtig?** Oder gibt es eine natürliche Hierarchie?
3. **Testbedingungen:** Bisher abstrakt formuliert. Sollten als "In Projekt X scheitert Ansatz Y an diesem Problem" konkretisiert werden.
4. **Die 5 systemischen Lücken:** Sind es wirklich genau 5? Warum nicht mehr?
5. **Paradigmenneutralität:** Sind die Requirements so formuliert, dass sie auch von nicht-ontologischen Ansätzen (TEI, Graphmodelle, Archivstandards) adressiert werden können? Siehe [[Approaches-Overview]].
6. **Strukturelle Requirements:** R-A1 bis R-A4 haben keine `derived_from`-Eigenschaft — sie stammen aus Thallers Architekturprinzipien und den DEPCHA-Erfahrungen, nicht aus den Primitiven.

## Requirements nach Gruppe

### Epistemisch (10)

| ID | Label | Abgeleitet von | Systemische Lücke? |
|---|---|---|---|
| R-E1.1 | Unsicherheitsgrade | E1 | Nein |
| R-E1.2 | Alternativinterpretationen | E1 | Nein |
| R-E1.3 | Explizite Wissenslücken | E1 | **Ja** (Abwesenheit) |
| R-E2.1 | Provenienz | E2 | Nein |
| R-E2.2 | Epistemische Distanz | E2 | Nein |
| R-E3.1 | Perspektivenkoexistenz | E3 | Nein |
| R-E3.2 | Perspektivenrelationen | E3 | Nein |
| R-E4.1 | Interpretationsmetadaten | E4 | Nein |
| R-E5.1 | Temporale Kategorisierung | E5 | Nein |
| R-E5.2 | Kategorienprovenienz emic/etic | E5 | **Ja** (Kategorien) |

### Medial (6)

| ID | Label | Abgeleitet von | Systemische Lücke? |
|---|---|---|---|
| R-M1.1 | Quellentyp als Dimension | M1 | Nein |
| R-M2.1 | Erstellungszweck | M2 | Nein |
| R-M2.2 | Systematische Auslassungen | M2 | **Ja** (Abwesenheit) |
| R-M3.1 | Überlieferungslücken | M3 | **Ja** (Abwesenheit) |
| R-M4.1 | Träger-Inhalt-Separation | M4 | Nein |
| R-M4.2 | Material als Information | M4 | Nein |

### Semiotisch (4)

| ID | Label | Abgeleitet von | Systemische Lücke? |
|---|---|---|---|
| R-S1.1 | Temporale Kontextualisierung | S1 | Nein |
| R-S1.2 | Historische Referenzsysteme | S1 | Nein |
| R-S2.1 | Lesarten/Normalisierung | S2 | **Ja** (Normalisierung) |
| R-S3.1 | Quellenrelationen | S3 | Nein |

### Strukturell (4)

| ID | Label | Abgeleitet von | Systemische Lücke? |
|---|---|---|---|
| R-A1 | Separation of Concerns | Thaller, DEPCHA | Nein |
| R-A2 | Ereigniszentrierung | Thaller, CIDOC-CRM | Nein |
| R-A3 | Monotonizität | Thaller | Nein |
| R-A4 | Assertionsbasierung | Factoid/STAR, Thaller | Nein |

## Noch zu leisten

- [ ] Jedes Requirement mit konkretem Fallbeispiel aus einem echten Projekt belegen
- [ ] Testbedingungen von abstrakt zu evidenzbasiert überarbeiten
- [ ] Prüfen, ob die Zuordnung zu Eigenschaften korrekt ist
- [ ] Paradigmenneutralität der Requirements prüfen (Ansatz-Übersicht: [[Approaches-Overview]])
- [ ] Strukturelle Requirements (R-A1 bis R-A4) methodisch begründen

## Sources

Pollin, C. (2024). *Modelling, Operationalising and Exploring Historical Information.* Dissertation, Universität Graz.

Thaller, M. (2021). Historical Information and Graph Structures.

Pasin, M. & Bradley, J. (2015). Factoid-based Prosopography.

## Related

- [[Information]] — Informationswissenschaftliches Fundament
- [[Properties]] — Die elf Eigenschaften, aus denen die Requirements abgeleitet werden
- [[Dissertation-Context]] — Scholar-Centred Design und RE-Methodik
- [[Systemic-Gaps]] — Detailanalyse der 5 systemischen Lücken
- [[Approaches-Overview]] — Repräsentationsansätze nach Paradigmen
- [[Evaluation-Framework]] — Methodik der Bewertung gegen diese Requirements
- [[Project-Evidence]] — Evidenz aus DEPCHA, SuGW, M³GIM, ZBZ
