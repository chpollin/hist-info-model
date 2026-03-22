---
type: knowledge
created: 2026-03-22
tags: [dissertation, bookkeeping-ontology, depcha, historical-information]
status: draft
---

# Dissertation-Context

## Summary

Zentrale Referenz für die Dissertation "Modelling, Operationalising and Exploring Historical Information" (Pollin 2024, Universität Graz). Die Dissertation bildet das empirische und theoretische Fundament dieses Projekts: die fünf Eigenschaften historischer Information, die [[Approaches-Comparison#1.3 Bookkeeping Ontology|Bookkeeping Ontology]], die [[Project-Evidence#DEPCHA|DEPCHA]]-Plattform und das Scholar-Centred Design.

## Forschungsfragen der Dissertation

**Theme 1: Modellierung** — Essentielle Charakteristika historischer Information und deren Auswirkung auf digitale Repräsentation. Modellierungsansätze für Human Agency, Kontextabhängigkeiten, Unsicherheit, Provenienz und domänenspezifische Semantik. Implementierung und Integration von [[Approaches-Comparison#1.3 Bookkeeping Ontology|Bookkeeping Ontology]], [[Approaches-Comparison#1.1 CIDOC-CRM|CIDOC-CRM]] und TEI.

**Theme 2: Operationalisierung** — Transformation historischer Quellen via TEI-XML-Annotation und XSLT-Pipelines zu RDF innerhalb der GAMS-Infrastruktur bei Wahrung der Quellenintegrität.

**Theme 3: Exploration** — Scholar-Centred Design durch Deep Dive Sessions mit Historikern. Interface-Implementierungen (Collections View, Edition View, Dashboard View).

**Theme 4: LLMs** — Nachträglich ergänzt. LLM-Unterstützung für Modellierung, Operationalisierung und Interface-Entwicklung durch Promptotyping.

## Fünf Eigenschaften historischer Information

Empirisch gesichert durch Quellenanalyse und Literatur (Thaller 2018, Drucker 2011, Koselleck 1977, Beretta 2024):

1. **Human Agency** — Information entsteht durch aktive Konstruktion kognitiver Agenten, nicht durch Entdeckung. Der Grad menschlicher Beteiligung steigt mit dem Strukturierungsgrad.
2. **Context Sensitivity** — Temporale, kulturelle, soziale und epistemische Rahmenbedingungen müssen rekonstruiert werden. "Bushell corn" in einem Massachusetts-Tagebuch der 1840er verlangt Wissen über regionale Agrarpraktiken, lokale Handelsstandards und individuelle Buchführungskonventionen.
3. **Multiperspectivity** — Multiple gültige Interpretationen derselben Quelle koexistieren. Drei Historiker produzieren mit unterschiedlichen Methoden verschiedene plausible Schätzungen derselben historischen Maßeinheit.
4. **Uncertainty** — Fünf Dimensionen: Vagueness (Intervall + Skala), Inconsistency (widersprüchliche Datenpunkte), Incompleteness (fehlende essentielle Datenpunkte), Polyvalence (Datentyppolyvalenz + konzeptuelle Variablenpolyvalenz), Negation (explizite Erklärungen, was nicht gilt).
5. **Vetorecht der Quellen** (Koselleck 1977) — Quellen können falsche Interpretationen invalidieren, nicht Wahrheit garantieren.

## Bookkeeping Ontology

Kombiniert REA (Resources, Events, Agents) und CIDOC-CRM für historische Finanzquellen. Drei Architekturschichten:

- **Schicht 1: Ökonomische Realität** — Transaction und Transfer erben von crm:E7_Activity und rea:EconomicEvent
- **Schicht 2: Quellendokumentation** — Entry, UnitMentions, AgentMentions bewahren die originale textuelle Repräsentation
- **Schicht 3: Historische Interpretation** — Konversionssysteme für Währungen und Maßeinheiten

**Version 1.2** (Pollin, Vogeler 2022): In DEPCHA operativ. Ontologische Unschärfen (Cross-Branch Inheritance bei Services).

**Version 1.3** (Pollin, Vogeler 2024): Theoretisch vollständig. Präzisere Klassenhierarchie, erweiterte Transaktionstypen, formales TransactionStatus-Konzept. Nicht implementiert.

**Fundamentale Spannung:** Mit zunehmender theoretischer Vollständigkeit steigt die Implementierungskomplexität. Praktische Brauchbarkeit und ontologische Korrektheit stehen in einem Zielkonflikt.

Scholar-Centred Entwicklung durch Deep-Dive-Sessions (2017–2020) mit Historikern: Tomasek (Wheaton Day Book), Brumfield (Stagville), Kokaze (Burgos Ledger), Stertzer/Cavanaugh (Washington Financial Papers), Morreale (Orphan Accounts), Büchel (Rentrechnung 1718). Zentrale Ontologie-Entscheidungen entstanden direkt aus der Quellenarbeit: Group aus Steuerregistern, Right aus der Rentrechnung, AgentMention aus dem Wheaton Day Book.

## DEPCHA

Digital Edition Publishing Cooperative for Historical Accounts. Operative Plattform auf GAMS-Infrastruktur (Fedora, Blazegraph Triple Store, Apache Cocoon, IIIF Server). 8+ historische Finanzquellen von mittelalterlichen Steuerregistern bis frühneuzeitlichen Geschäftsbüchern. Drei Interface-Views: Collections View (kartenbasiert), Edition View (Dual-Pane diplomatisch/semantisch), Dashboard View.

## Bezug zum aktuellen Projekt

Die Dissertation liefert die empirische Grundlage (5 Eigenschaften), eine operationalisierte Ontologie (Bookkeeping) und eine getestete Plattform (DEPCHA). Das aktuelle Projekt geht darüber hinaus:

- Reduziert die 5 Eigenschaften auf 3 Primitive (Hypothese, [[Historical-Information]])
- Leitet daraus 24 formale Requirements ab ([[Requirements]])
- Evaluiert nicht nur die eigene Ontologie, sondern 7 Ansätze systematisch ([[Evaluation-Framework]])
- Nutzt Projektdaten als Evidenzbasis ([[Project-Evidence]])

## Sources

Pollin, C. (2024). *Modelling, Operationalising and Exploring Historical Information.* Dissertation, Universität Graz. https://doi.org/10.25364/402.2024.63

Pollin, C. & Vogeler, G. (2022). Bookkeeping Ontology Version 1.2. https://gams.uni-graz.at/o:depcha.bookkeeping

Pollin, C. & Vogeler, G. (2024). Bookkeeping Ontology Version 1.3.

Thaller, M. (2018). On Information in Historical Sources.

Koselleck, R. (1977). Standortbindung und Zeitlichkeit.

Drucker, J. (2011). Humanities Approaches to Graphical Display. *DHQ, 5*(1).

Beretta, F. (2024). The Pyramid of Historical Knowledge Production.

## Related

- [[Historical-Information]] — Zusammenführung 5 Eigenschaften + 3 Primitive
- [[Properties]] — 11 abgeleitete Eigenschaften
- [[Approaches-Comparison#1.3 Bookkeeping Ontology|Approaches-Comparison]] — Selbstkritische Bewertung der eigenen Ontologie
- [[Project-Evidence#DEPCHA|Project-Evidence]] — Echte Modellierungsprobleme aus DEPCHA
- [[Thaller-Synthesis]] — Konvergenz/Divergenz mit Thaller
