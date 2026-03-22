---
type: knowledge
created: 2026-03-21
tags: [historical-information, formal-theory, data-modeling]
status: draft
---

# Properties

## Summary

Elf abgeleitete Eigenschaften historischer Information, gruppiert in epistemisch, medial und semiotisch. Jede Eigenschaft wird aus einem oder zwei [[Primitives|Primitiven]] abgeleitet. Die Gruppierung ist pragmatisch, nicht erschöpfend — pragmatische Dimensionen (Zugangsbeschränkungen, Archivordnungen) und soziale Dimensionen (Schulenbildung, Kanonisierung) sind nicht abgedeckt.

## Ableitungsgraph

```
P1 → E1 (Unsicherheit), E5 (Kategorienkontingenz), S1 (Temporale Komplexität)
P2 → E2 (Quellengebundenheit), M1 (Medialität), M3 (Selektivität), M4 (Materialität), S2 (Semiotische Schichtung)
P3 → E3 (Multiperspektivität), E4 (Kontextabhängigkeit)
P1+P2 → S3 (Intertextualität)
P2+P3 → M2 (Intentionalität)
```

P2 ist das produktivste Primitiv (5 direkte, 2 kombinierte Ableitungen). P3 hat nur 2 direkte, weil es primär in Kombination wirkt.

## Epistemische Eigenschaften

**E1 Unsicherheit (← P1).** Historische Aussagen tragen inhärente Unsicherheitsgrade. Aus der Dissertation: fünf Dimensionen — Vagueness, Inconsistency, Incompleteness, Polyvalence, Negation. Thallers Fuzziness-als-Systemeigenschaft konvergiert.

**E2 Quellengebundenheit (← P2).** Jede historische Behauptung muss auf Quellen rückführbar sein. Operationalisiert in [[Approaches-Comparison#1.3 Bookkeeping Ontology|Bookkeeping Ontology]] durch Entry-Klasse und AgentMention, in [[Approaches-Comparison#1.4 Factoid / STAR|Factoid/STAR]] durch Source Layer.

**E3 Multiperspektivität (← P3).** Multiple gültige Interpretationen koexistieren. Aus der Dissertation: Beispiel baltische Holzmaße (drei Historiker, drei Methoden, drei plausible Schätzungen). Operationalisiert in STAR durch multiple E13_Attribute_Assignments.

**E4 Kontextabhängigkeit (← P3).** Die Bedeutung historischer Information ändert sich mit dem Interpretationskontext. Aus der Dissertation: "Bushell corn" erfordert Wissen über regionale Agrarpraktiken, lokale Handelsstandards, individuelle Buchführungskonventionen.

**E5 Kategorienkontingenz (← P1).** Kategorien sind selbst historisch kontingent. "Kaufmann" im 15. Jh. ≠ "merchant" im 21. Jh. Ontologisch kontingent wegen P1; epistemisch erkannt durch P2+P3.

## Mediale Eigenschaften

**M1 Medialität (← P2).** Das Medium einer Quelle formt und begrenzt die Information. Thallers LOD-Kritik: schwache Typisierung zerstört diese mediale Spezifik.

**M2 Intentionalität (← P2+P3).** Quellen wurden mit bestimmten Zwecken erstellt. Aus [[Approaches-Comparison#1.3 Bookkeeping Ontology|Bookkeeping Ontology]]: Rechnungsbücher dienen der Rechenschaftslegung, nicht der Geschichtsschreibung — das erklärt, was aufgezeichnet wird und was nicht.

**M3 Selektivität (← P2).** Quellen dokumentieren nur einen Bruchteil des Geschehenen. Die Selektion ist inhärent, nicht zufällig.

**M4 Materialität (← P2).** Der physische Träger ist informationell signifikant. Aus [[Approaches-Comparison#1.3 Bookkeeping Ontology|Bookkeeping Ontology]]: Measurement Framework adressiert historische Maße und Währungen als materiell-semiotische Systeme.

## Semiotische Eigenschaften

**S1 Temporale Komplexität (← P1).** Historische Information involviert multiple, nicht-trivial verbundene Zeitschichten. Aus [[Approaches-Comparison#1.4 Factoid / STAR|Factoid/STAR]]: drei Datumstypen (dateForAssertion, occurredOn, hasDateAssertionMade).

**S2 Semiotische Schichtung (← P2).** Quellen kodieren Bedeutung durch multiple semiotische Schichten (Abkürzungen, Konventionen, Schriftarten). Thallers Token-Konzept: historische Datentypen verlangen semantisch reiche Repräsentation.

**S3 Intertextualität (← P1+P2).** Quellen referenzieren, hängen ab von und beziehen sich auf andere Quellen. Thallers Factlet-Arrangement: Informationseinheiten müssen rekombinierbar sein ohne Trennung vom Übermittlungskontext.

## Nicht abgedeckte Dimensionen

- **Pragmatisch:** Zugangsbeschränkungen, Archivordnungen, digitale Verfügbarkeit
- **Sozial:** Schulenbildung, Kanonisierung, Machtdynamiken, Gender-Bias in Quellen
- → Der Gender-Bias ist für das Absence-Modeling relevant: [[Absence-Modeling#Systematic Omissions]]

## Sources

Pollin, C. (2024). Dissertation, Universität Graz.

Thaller, M. (2018, 2021). On Information in Historical Sources; Historical Information and Graph Structures.

Andrews, T., Deierl, V. & Ebel, C. (2024). The STAR Model: Gender as Event.

## Related

- [[Historical-Information]] — Übergeordnetes Theoriedokument
- [[Primitives]] — Die drei Primitive, aus denen die Eigenschaften abgeleitet werden
- [[Requirements]] — 24 Requirements, die aus den Eigenschaften folgen
- [[Thaller-Synthesis]] — Thallers 4 Defizite als operationale Konsequenzen
