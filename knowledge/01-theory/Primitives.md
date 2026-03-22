---
type: knowledge
created: 2026-03-21
tags: [historical-information, formal-theory, epistemology]
status: draft
aliases:
  - P1
  - P2
  - P3
---

# Primitives

## Summary

Drei analytisch distinkte und jeweils notwendige Bedingungen für historische Information. Entfernen eines Primitivs erzeugt Nicht-HI-Fälle. Status: **Hypothese** — die Notwendigkeitstests zeigen Notwendigkeit, nicht formale logische Unabhängigkeit. Die Beziehung zu den fünf empirischen Eigenschaften aus der Dissertation ist noch zu klären (siehe [[Historical-Information#Offene Frage: Beziehung 5 Eigenschaften ↔ 3 Primitive]]).

## P1: Temporale Irreversibilität

Die beschriebenen Sachverhalte können nicht erneut beobachtet werden.

`∀i ∈ HI, ∀s = referent(i) → ¬∃v : reproduces(v, s)`

**Abgrenzung:** Nicht identisch mit Vergangenheitsbezug. Naturwissenschaftliche Messungen beziehen sich auch auf Vergangenes, aber das Experiment ist wiederholbar. Astronomische Beobachtungen historischer Supernovae (SN 1054) sind Grenzfälle: Das Ereignis ist irreversibel, aber die physikalischen Gesetze erlauben Rückschlüsse ohne Spurenvermitteltheit.

**Notwendigkeitstest:** Ohne P1 → empirische Daten (wiederholbar), keine historische Information. Uncertainty (E1) und Kategorienkontingenz (E5) verschwinden.

**Bezug Thaller:** Thallers Assumption 1 ("Historische Forschung besteht in der Interpretation von Artefakten der Vergangenheit im Licht heutigen Wissens") setzt P1 implizit voraus.

## P2: Spurenvermitteltheit

Jeder Zugang zum Referenten läuft ausschließlich über Spuren.

`∀i ∈ HI → ∃t ∈ Traces : mediates(t, i, referent(i)) ∧ ¬∃directAccess(referent(i))`

**Produktivstes Primitiv:** P2 hat die meisten direkten Ableitungen (5 direkte + 2 kombinierte Eigenschaften), weil die Spurenvermitteltheit die meisten operationalen Konsequenzen hat: Medialität, Selektivität, Materialität, semiotische Schichtung — alles folgt daraus, dass wir nur über Spuren Zugang haben.

**Bezug Bookkeeping Ontology:** Die Drei-Schichten-Architektur (Realität / Dokumentation / Interpretation) ist eine direkte Operationalisierung von P2: Die mittlere Schicht (Entry, UnitMention, AgentMention) *ist* die Spurenschicht.

**Bezug Thaller:** Assumptions 4–6 (Struktur historischer Quellen, Tokens als übermittelte Daten) operationalisieren P2. Thallers Token-Konzept = Spur.

## P3: Interpretative Konstitution

Historische Information existiert nicht unabhängig von Interpretation.

`∀i ∈ HI → ∃a ∈ InterpretationActs, ∃ag ∈ Agents : constitutes(a, i) ∧ performs(ag, a)`

**Abgrenzung gegenüber P2:** P2 sagt, dass der Zugang über Spuren läuft. P3 sagt, dass die Spur-Sachverhalt-Beziehung *prinzipiell unterdeterminiert* ist. Bei kalibrierten Messinstrumenten ist die Spur-Sachverhalt-Beziehung determiniert (P2 ohne P3); bei historischen Quellen ist sie unterdeterminiert (P2 + P3).

**Bezug Factoid/STAR:** Das Factoid Model operationalisiert P3 durch die Trennung von Source Layer und Assertion Layer. STAR's Pentile (Subjekt, Objekt, Prädikat, Quelle, *Autorität*) macht den interpretierenden Agenten explizit.

**Bezug Thaller:** Assumptions 2–3 ("Interpretation kann nie objektiv sein" + "Trennung Repräsentation von Interpretation") = P3.

**Offenes Problem:** P3 als konstitutiver Akt ist pragmatisch eingeklammert (wir operieren auf der Metaebene, als ob P3 nicht für unsere eigene Formalisierung gilt). Eine prozessontologische Formalisierung steht aus.

## Methodische Festlegungen

**Epistemischer Status:** Semi-formal. Prädikate sind intensional, nicht axiomatisch definiert. Struktur wird expliziert, mechanische Verifikation ist nicht möglich.

**Beobachtungsebene:** HI bezeichnet die Menge der historischen Informationseinheiten, die in einem gegebenen Forschungskontext als konstituiert gelten.

**Ableitungskriterium:** `derivedFrom(E, P)` bedeutet: E ist als Eigenschaft historischer Information nur denkbar, wenn P gilt. Ontologisch notwendige Voraussetzung, nicht epistemische Erkenntnisbedingung.

## Sources

Pollin, C. (2024). Dissertation, Universität Graz.

Thaller, M. (2018, 2020, 2021). On Information in Historical Sources; On Vagueness and Uncertainty; Historical Information and Graph Structures.

Pasin, M. & Bradley, J. (2015). Factoid-based Prosopography.

## Related

- [[Historical-Information]] — Übergeordnetes Theoriedokument
- [[Properties]] — Elf abgeleitete Eigenschaften
- [[Thaller-Synthesis]] — Detaillierter Vergleich mit Thallers Framework
- [[Approaches-Comparison#1.3 Bookkeeping Ontology|Bookkeeping Ontology]] — P2 operationalisiert in der Drei-Schichten-Architektur
- [[Approaches-Comparison#1.4 Factoid / STAR|Factoid/STAR]] — P3 operationalisiert im Assertion Layer
