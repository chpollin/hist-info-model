---
type: knowledge
created: 2026-03-21
tags: [historical-information, epistemology, data-modeling]
status: draft
---

# Historical Information

## Summary

Dieses Dokument führt zwei komplementäre Perspektiven auf historische Information zusammen: die **fünf Eigenschaften** aus der Dissertation (Human Agency, Context Sensitivity, Multiperspectivity, Uncertainty, Vetorecht der Quellen) und den Versuch einer **axiomatischen Reduktion** auf drei Primitive (P1 Temporale Irreversibilität, P2 Spurenvermitteltheit, P3 Interpretative Konstitution). Die Beziehung zwischen beiden Perspektiven ist noch nicht abschließend geklärt — das ist eine offene Forschungsfrage dieses Projekts.

## Fünf Eigenschaften (gesichert, Dissertation)

Vollständige Beschreibung mit Beispielen: [[Dissertation-Context#Fünf Eigenschaften historischer Information]]. Zusammenfassung:

1. **Human Agency** — Information entsteht durch aktive Konstruktion, nicht durch Entdeckung.
2. **Context Sensitivity** — Rekonstruktion temporaler, kultureller, sozialer und epistemischer Rahmenbedingungen nötig.
3. **Multiperspectivity** — Multiple gültige Interpretationen koexistieren.
4. **Uncertainty** — Fünf Dimensionen: Vagueness, Inconsistency, Incompleteness, Polyvalence, Negation.
5. **Vetorecht der Quellen** — Quellen können falsche Interpretationen invalidieren, nicht Wahrheit garantieren (Koselleck 1977).

## Drei Primitive (Hypothese, noch zu validieren)

Quelle: research.md (Synthese 2026-03-21). Status: **Hypothese** — die Ableitung aus den 5 Eigenschaften muss noch systematisch geprüft werden.

**P1 Temporale Irreversibilität.** Die beschriebenen Sachverhalte können nicht erneut beobachtet werden.
- Formal: `∀i ∈ HI, ∀s = referent(i) → ¬∃v : reproduces(v, s)`
- Abgrenzung: Nicht identisch mit Vergangenheitsbezug (naturwissenschaftliche Experimente sind wiederholbar).

**P2 Spurenvermitteltheit.** Jeder Zugang zum Referenten läuft über Spuren (Vestiges, Reflections).
- Formal: `∀i ∈ HI → ∃t ∈ Traces : mediates(t, i, referent(i)) ∧ ¬∃directAccess(referent(i))`

**P3 Interpretative Konstitution.** Historische Information existiert nicht unabhängig von Interpretation. Die Spur-Sachverhalt-Beziehung ist prinzipiell unterdeterminiert.
- Formal: `∀i ∈ HI → ∃a ∈ InterpretationActs, ∃ag ∈ Agents : constitutes(a, i) ∧ performs(ag, a)`

## Offene Frage: Beziehung 5 Eigenschaften ↔ 3 Primitive

Mögliche Lesarten:

**Lesart A: Primitive sind fundamentaler.** Die 5 Eigenschaften lassen sich aus den 3 Primitiven ableiten:
- Human Agency ≈ P3 (Interpretative Konstitution)
- Context Sensitivity ≈ P1 + P3 (Irreversibilität erzwingt Rekonstruktion, Interpretation ist kontextgebunden)
- Multiperspectivity ≈ P3 (Unterdeterminiertheit der Spur-Sachverhalt-Beziehung)
- Uncertainty ≈ P1 + P2 (Irreversibilität + Spurenvermitteltheit erzeugen inhärente Unsicherheit)
- Vetorecht der Quellen ≈ P2 (Spuren als nicht-eliminierbare Vermittlungsinstanz)

**Lesart B: Komplementäre Perspektiven.** Die 5 Eigenschaften beschreiben *was* historische Information ausmacht (phänomenologisch), die 3 Primitive beschreiben *warum* sie so ist (ontologisch). Beide sind nötig.

**Lesart C: Die Primitive sind eine Überformalisierung.** Die 5 Eigenschaften aus der empirischen Forschungspraxis (Deep-Dive-Sessions, Bookkeeping Ontology, DEPCHA) sind die eigentliche Grundlage; die Primitive sind ein nachträglicher Formalisierungsversuch, dessen Mehrwert noch zu zeigen ist.

→ Diese Frage muss durch Rückgriff auf die echten Projekte geklärt werden: Welche Perspektive erklärt die konkreten Modellierungsprobleme besser?

## Bezug zu Thaller

Thallers 8 foundational assumptions (2021) konvergieren mit beiden Perspektiven:
- Assumptions 1–3 (Natur historischer Arbeit) ↔ P3 / Human Agency
- Assumptions 4–6 (Struktur historischer Quellen) ↔ P2 / Context Sensitivity
- Assumptions 7–8 (Anforderungen an Informationssysteme) ↔ Folgerungen aus P1+P2+P3

Thallers 4 Defizite (Passivität, schwache Typisierung, Unidirektionalität, Quellenorientierung) sind operationale Konsequenzen, die aus den Primitiven/Eigenschaften ableitbar sein sollten.

## Bezug zu Langefors

Langefors' infologische Gleichung `I = i(D, S, t)` erfasst die Prozesshaftigkeit besser als DIKW:
- D (verfügbare Daten) ↔ P2 (Spuren als einziger Zugang)
- S (existierende Wissensstrukturen) ↔ P3 (Interpretation durch Agenten mit Vorwissen)
- t (temporale Bedingungen) ↔ P1 (Irreversibilität der beschriebenen Sachverhalte)

## Sources

Pollin, C. (2024). Modelling, Operationalising and Exploring Historical Information. Dissertation, Universität Graz.

Thaller, M. (2018). On Information in Historical Sources.

Thaller, M. (2021). Can historical information be represented outside of a graph / hypergraph / network?

Koselleck, R. (1977). Standortbindung und Zeitlichkeit.

Langefors, B. (1966). Theoretical Analysis of Information Systems.

## Related

- [[Primitives]] — Formale Spezifikation der drei Primitive
- [[Properties]] — Elf abgeleitete Eigenschaften
- [[Thaller-Synthesis]] — Konvergenz/Divergenz mit Thaller
- [[Absence-Modeling]] — Abwesenheitsmodellierung als systemische Lücke
- [[Approaches-Comparison#1.3 Bookkeeping Ontology|Bookkeeping Ontology]] — Drei-Schichten-Architektur als partielle Implementierung
- [[Dissertation-Context]] — Empirisches Fundament: Dissertation Pollin 2024
