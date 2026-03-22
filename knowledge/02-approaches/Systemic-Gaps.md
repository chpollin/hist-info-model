---
type: knowledge
created: 2026-03-21
tags: [gaps, owa, absence-modeling, systemic, evaluation-synthesis]
status: draft
---

# Systemic Gaps

## Summary

Fünf Requirements aus den [[Requirements|24 Requirements]], die kein evaluierter Ansatz auf struktureller Ebene vollständig adressiert. Diese Lücken sind "systemisch", weil sie fundamentale Limitationen widerspiegeln, die alle Paradigmen teilen — nicht nur individuelle Auslassungen einzelner Ansätze. Die Analyse aktueller Forschungsliteratur (2024–2025) zeigt, dass einige Lücken von neuen Ansätzen partiell adressiert werden, aber keine vollständig geschlossen ist.

## Das OWA-Paradox

Eine Kernspannung liegt mehreren Lücken zugrunde: das **Open World Assumption (OWA) Paradox** in der historischen Informationsmodellierung. OWL/RDF-Ontologien operieren unter der Open World Assumption — das Fehlen einer Aussage bedeutet nicht, dass die Aussage falsch ist; es bedeutet nur, dass nichts bekannt ist. Historische Forschung erfordert jedoch häufig Reasoning über Abwesenheit selbst: eine Quelle, die etwas erwähnen *sollte*, es aber nicht tut; ein Dokument, das bekanntermaßen zerstört wurde; eine Person, die auffällig in einem Dokument fehlt. Unter OWA ist der Unterschied zwischen "wir haben gesucht und nichts gefunden" und "wir haben nicht gesucht" unsichtbar.

Detailanalyse: [[Absence-Modeling]].

## Die fünf systemischen Lücken

### Gap 1: R-E1.3 — Explizite Abwesenheit / Negative Evidenz

**Requirement:** Die Fähigkeit, formal zu repräsentieren, dass etwas bekanntermaßen fehlt, verloren oder bewusst ausgelassen wurde.
**Warum systemisch:** OWA macht Abwesenheit standardmäßig unausdrückbar. Closed-World-Patches (z.B. SHACL-Constraints) verschieben das Problem statt es zu lösen.

**Status 2024–2025:**
- **CRMinf** (in Entwicklung): I2 Belief und I4 Proposition Set könnten negative Propositionen formal ausdrücken, aber kein explizites Absence-Konstrukt
- **RDF-star:** Ermöglicht Metadaten auf Statement-Ebene, aber kein negatives Statement ("dieses Statement existiert nicht")
- **ProbFuzzOnto:** Fuzzy Bayesian Networks können Abwesenheit als probabilistischen Wert (P=0 mit Konfidenz) modellieren, aber die epistemische Signifikanz der Abwesenheit geht verloren
- **Bewertung:** Partiell adressiert durch CRMinf + ProbFuzzOnto, aber keine strukturelle Lösung

### Gap 2: R-E5.2 — Kategorienprovenienz emic/etic

**Requirement:** Die Fähigkeit, emische (quelleneigene) und etische (forscheraufgelegte) Kategorisierungen getrennt zu repräsentieren und ihre Provenienz zu verfolgen.
**Warum systemisch:** Ontologien normalisieren Kategorien per Design. Die Unterscheidung "dieses Konzept stammt aus der Quelle" vs. "dieses Konzept ist meine analytische Kategorie" hat kein Standard-Konstrukt.

**Status 2024–2025:**
- **SDHSS/OntoME** (Beretta 2024): Der kollaborative Ontologiemanagement-Ansatz erlaubt mehrere Klassifikationssysteme parallel, aber die emic/etic-Unterscheidung ist nicht explizit formalisiert
- **Linked Art 1.0:** Nutzt Getty-Vokabulare (AAT) für Klassifikation, aber AAT-Begriffe sind etisch (aus der Fachperspektive)
- **FactGrid:** Qualifikatoren können Quellen für Kategorisierungen angeben, aber die emic/etic-Unterscheidung ist nicht formalisiert
- **Bewertung:** Keine strukturelle Lösung. Am nächsten kommt SDHSS durch parallele Klassifikationssysteme.

### Gap 3: R-M2.2 — Systematische Auslassungen

**Requirement:** Die Fähigkeit zu repräsentieren, dass eine ganze Kategorie von Information aufgrund des Erstellungszwecks der Quelle systematisch fehlt (nicht zufällig, sondern strukturell).
**Warum systemisch:** Betrifft nicht fehlende Datenpunkte, sondern fehlende Datenkategorien. Kein Ansatz modelliert die *Selektivität des Quelltyps als informativen Sachverhalt*.

**Status 2024–2025:**
- **Keine neuen Ansätze** adressieren systematische Auslassungen direkt
- **FAIR-Adaptierung** (FAIREST Framework, Springer 2024): Erkennt an, dass geisteswissenschaftliche Daten heterogen, idiosynkratisch und komplex sind — aber bietet kein Formalisierungsmuster für systematische Lücken
- **Bewertung:** Unverändert die am wenigsten adressierte Lücke

### Gap 4: R-M3.1 — Überlieferungslücken

**Requirement:** Die Fähigkeit, verlorene Quellen als historische Fakten zu repräsentieren (nicht "Daten fehlen", sondern "die Zerstörung der Kirchenbücher 1681 ist ein historischer Sachverhalt").
**Warum systemisch:** Die Lücke selbst ist Information. Kein Standard-Datenmodell hat ein Konstrukt für "hier gab es einmal etwas, das jetzt fehlt".

**Status 2024–2025:**
- **RiC-O v1.1:** Modelliert Archivbestände und deren Geschichte (Custody chains), könnte Zerstörungsereignisse als rico:Event darstellen — aber modelliert die *Konsequenz* der Zerstörung (fehlende Information) nicht explizit
- **CHAD-KG (Barzaghi et al. 2025):** Process Module modelliert Digitalisierungsprovenienz, aber nicht Transmissionsverluste in der vordigitalen Überlieferung
- **Provenienz-Survey** (arXiv 2305.08477): Identifiziert Named Graphs, RDF-star, PROV-O als Provenienz-Tracking-Ansätze — aber Provenienz des *Fehlens* ist nicht adressiert
- **Bewertung:** RiC-O v1.1 kommt am nächsten (Zerstörung als Archiv-Ereignis), aber die informationale Signifikanz der resultierenden Lücke bleibt unmodelliert

### Gap 5: R-S2.1 — Lesarten/Normalisierung

**Requirement:** Die Fähigkeit, diplomatische und normalisierte Lesarten als koexistierende Repräsentationen mit expliziter Transformationsbeziehung zu repräsentieren.
**Warum systemisch:** Betrifft die Schnittstelle zwischen Textrepräsentation und semantischer Modellierung. TEI kann beides (choice/orig/reg), aber Ontologien arbeiten nur mit normalisierten Formen.

**Status 2024–2025:**
- **TEI P5 v4.10.2:** Weiterhin der stärkste Ansatz (`<choice>/<orig>/<reg>`, `<choice>/<sic>/<corr>`)
- **Linked Art 1.0:** Arbeitet ausschließlich mit normalisierten Identifikatoren (Getty AAT, TGN, ULAN) — diplomatische Formen liegen außerhalb des Scope
- **RDF-star:** Könnte die Transformationsbeziehung zwischen diplomatischer und normalisierter Form als Statement-Metadatum ausdrücken
- **Bewertung:** TEI bleibt die beste Lösung, aber die Brücke zwischen TEI-Lesarten und ontologischer Semantik bleibt ungebaut. RDF-star könnte eine Brücke sein.

## Zusammenfassung: Stand 2024–2025

| Gap | Lücke | Bester bestehender Ansatz | Neue Entwicklungen | Status |
|---|---|---|---|---|
| R-E1.3 | Explizite Abwesenheit | Thaller (Incompleteness Taxonomy) | CRMinf (Belief), ProbFuzzOnto | Partiell adressiert |
| R-E5.2 | Emic/etic-Kategorien | SDHSS (parallele Klassifikationen) | — | Nicht adressiert |
| R-M2.2 | Systematische Auslassungen | Keiner | — | **Nicht adressiert** |
| R-M3.1 | Überlieferungslücken | Thaller (Defaults), RiC-O | RiC-O v1.1 (Custody Events) | Partiell adressiert |
| R-S2.1 | Lesarten/Normalisierung | TEI XML | RDF-star (potentiell) | TEI ja, Ontologien nein |

**Kernbefund:** R-M2.2 (Systematische Auslassungen) bleibt die härteste Lücke — kein bestehender oder neuer Ansatz adressiert sie auch nur partiell. Die drei Abwesenheitslücken (R-E1.3, R-M2.2, R-M3.1) korrespondieren mit dem OWA-Paradox und verlangen ein neues Formalisierungsparadigma, das weder OWA noch CWA ist, sondern kontextuell zwischen beiden wechseln kann.

## Implikationen für die Implementierung

Diese fünf Lücken definieren die härtesten Probleme für jeden Implementierungsversuch. Eine ehrliche Evaluation muss anerkennen, wo kein bestehender Ansatz eine strukturelle Lösung bietet und wo das Implementierungsexperiment entweder neuartige Konstrukte vorschlagen oder dokumentierte Limitationen akzeptieren muss.

**Forschungsdesiderat:** Ein formales Absence-Pattern, das:
1. Unter OWA operiert (weil historisches Wissen immer unvollständig ist)
2. Spezifische Abwesenheiten als geschlossen markieren kann ("dieses Register wurde 1681 zerstört" ist ein positiver Fakt über einen negativen Sachverhalt)
3. Die epistemische Signifikanz der Abwesenheit ausdrücken kann (warum fehlt etwas?)

## Related

- [[Absence-Modeling]] — Detailanalyse der drei Abwesenheitstypen
- [[Approaches-Comparison]] — Vergleich aller Ansätze
- [[Thaller-Synthesis]] — Thallers Incompleteness-Taxonomie als partielle Lösung
- [[Requirements]] — Die 24 Requirements mit systemischen Lücken markiert
- [[Paper-Outline]] — Die Lücken als Kernbeitrag des Papers
