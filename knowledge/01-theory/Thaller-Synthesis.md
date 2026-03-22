---
type: knowledge
created: 2026-03-21
tags: [historical-information, thaller, ivory-stack, synthesis]
status: draft
---

# Thaller-Synthesis

## Summary

Systematischer Vergleich zwischen Manfred Thallers Framework (2018–2021) und dem in diesem Projekt entwickelten Theoriegerüst. Beide Wege — Thaller aus dem Informationsbegriff und der Kleio-Praxis, wir aus den Primitiven/Eigenschaften und der Bookkeeping Ontology — führen zu konvergierenden Architekturprinzipien. Die Divergenzen sind produktiv: Thaller liefert die Implementierungsarchitektur (Ivory Stack), wir liefern die theoretische Begründung (Primitive → Eigenschaften → Requirements). Die Abbildung zwischen beiden Seiten ist die zentrale Forschungsfrage dieses Projekts.

## Konvergenz

### Thallers 8 Foundational Assumptions ↔ Unsere 3 Primitive

| Thaller | Unser Framework |
|---------|----------------|
| A1: "Interpretation von Artefakten der Vergangenheit" | P1 (Irreversibilität) + P2 (Spurenvermitteltheit) |
| A2: "Interpretation kann nie objektiv sein" | P3 (Interpretative Konstitution) |
| A3: "Trennung Repräsentation von Interpretation" | R-A1 (Separation of Concerns) |
| A4: "Quellen = gemeinsam übermittelte Daten-Tokens" | P2 (Spuren als einziger Zugang) |
| A5: "Information nur in Verbindung mit anderen Tokens interpretierbar" | S3 (Intertextualität), E4 (Kontextabhängigkeit) |
| A6: "Kontext der Quelle nie aus dem Blick verlieren" | E2 (Quellengebundenheit) |
| A7: "Token-Sammlungen mit Rekombination ohne Kontextverlust" | R-A3 (Monotonizität) |
| A8: "Tokens = Daten, interpretiert = Information, Token + Interpretation = Factlet" | P2 + P3 als Prozess, [[Information|Langefors: I=i(D,S,t)]] |

A8 ist besonders aufschlussreich: Thallers Token → Factlet-Transformation entspricht exakt Langefors' I=i(D,S,t), wobei Token = D (Daten), Interpretation = S (Wissensstrukturen des Interpreten), und der provisorische Charakter = t (temporale Bedingungen). Thaller sagt: "Provisorisch interpretiert werden Tokens zu Information" — das ist Langefors in der Sprache der historischen Informationsverarbeitung.

### Thallers 4 Defizite ↔ Unsere systemischen Lücken

| Thaller-Defizit | Bezug zu unseren Requirements |
|----------------|------------------------------|
| Passivität (keine Rückverfolgung) | R-A3 (Monotonizität), R-E2.1 (Provenienz) |
| Schwache Typisierung (LOD-Problem) | R-S1.2 (Historische Referenzsysteme), R-E5.1 (Temporale Kategorisierung) |
| Unidirektionalität | R-A3 (Active Database mit Backtracking) |
| Quellenorientierung | R-A2 (Ereigniszentrierung statt Quellenzentrierung) |

### Architekturkonvergenz

Thallers Prinzipien aus "On Information in Historical Sources" konvergieren direkt mit R-A1 bis R-A4:
- "Represents the artifacts as free from any interpretation as possible" = R-A1
- "Embeds them in a network of interpretations" = R-A4
- "Accepts that contradictions may resist resolution" = R-A3 / R-E1.2
- "All interpretations represent tendencies, no certainties" = R-E1.1

## Der Ivory Stack

Thaller (2020, Appendix III) formuliert 9 Forschungsvorhaben als "Ivory Stack" — die konkreten Bausteine, die für einen neuen Conceptual Stack historischer Informationsverarbeitung nötig sind. Sein Argument: Der gesamte Stack moderner IT verletzt primäre Eigenschaften historischer Information und muss **ersetzt**, nicht erweitert werden.

### Abbildung Ivory Stack → Requirements → Bestehende Ansätze

| Ivory Stack | Baustein | Requirements | Bestehende Ansätze |
|---|---|---|---|
| IvI (Infons) | Informationseinheiten nach Devlin (1991) als Grunddatentyp | R-A4 Assertionsbasierung | [[Approaches-Comparison#1.4 Factoid / STAR\|Factoid/STAR]] (Factlet ≈ Infon), teilweise |
| IvF (Frozen Algorithms) | Information als permanent laufende Algorithmen, deren Zustand eingefroren werden kann | P3 Interpretative Konstitution als Prozess | **Kein bestehender Ansatz** — adressiert die prozedurale Natur von Information |
| IvN (Grey Numbers) | Graue Zahlen (Liu/Lin 2006) für inhärente numerische Unsicherheit | R-E1.1 Unsicherheitsgrade | **Nur Thaller** — weder CIDOC-CRM noch RDF kennen Grey Numbers |
| IvT (Linguistic Variables) | Linguistische Variablen (Zadeh 2005) als Datentyp | R-E5.1 Temporale Kategorisierung, R-E5.2 Kategorienprovenienz | **Kein bestehender Ansatz** — adressiert die Fuzzy-Natur historischer Kategorien |
| IvC (Fuzzy Control) | Fuzzy-Kontrollstrukturen in Programmiersprachen | R-E1.2 Alternativinterpretationen | **Kein bestehender Ansatz** — adressiert Entscheidungslogik unter Unschärfe |
| IvG (Co-Reference Graphs) | Graphen mit Co-Referenzen und probabilistischen Gewichten | R-E3.1 Perspektivenkoexistenz, R-E3.2 Perspektivenrelationen | [[Approaches-Comparison#2.2 FactGrid\|FactGrid]] (widersprüchliche Statements), [[Approaches-Comparison#1.4 Factoid / STAR\|STAR]] (E13), teilweise |
| IvM (Information Objects) | Datenobj. beliebiger Dimensionalität + interpretative Schichten, ohne die Daten zu beschädigen | R-M4.1 Träger-Inhalt-Separation, R-A1 Separation of Concerns | [[Approaches-Comparison#3.1 TEI XML\|TEI]] (diplomatisch/normalisiert), [[Approaches-Comparison#1.3 Bookkeeping Ontology\|Bookkeeping Ontology]] (drei Schichten), teilweise |

### Was die Abbildung zeigt

1. **IvF, IvT, IvC haben keine Entsprechung in bestehenden Ansätzen.** Das sind die eigentlich harten Probleme — die prozedurale Natur von Information, linguistische Variablen als Grunddatentyp, Fuzzy-Kontrollstrukturen. Sie korrespondieren mit den systemischen Lücken.

2. **IvI und IvG werden teilweise durch Factoid/STAR und FactGrid adressiert.** Assertionsbasierung und widersprüchliche Statements sind implementiert, aber ohne die formale Grundlage (Devlins Situationstheorie, probabilistische Co-Referenzen).

3. **IvM wird am besten durch TEI + Bookkeeping Ontology adressiert.** Die Trennung von Datenträger und Interpretation ist in beiden operationalisiert — TEI auf Textebene, Bookkeeping Ontology auf semantischer Ebene.

4. **IvN (Grey Numbers) ist Thallers spezifischster Beitrag.** Kein anderer Ansatz adressiert inhärente numerische Unsicherheit als Grunddatentyp. Das Measurement Framework der Bookkeeping Ontology (historische Maße, Konversionssysteme) kommt am nächsten, arbeitet aber mit deterministischen Konversionen.

### Die Interdependenz

Thaller betont: Die 9 Bausteine können nicht isoliert implementiert werden, weil die Interdependenzen zu groß sind. Genau deshalb hat er das 2021er Paper geschrieben — als "concept, how the different blocks would interact". Unser Projekt liefert das theoretische Gegenstück: die Requirements als paradigmenneutraler Bewertungsmaßstab, der zeigt, *warum* bestimmte Bausteine nötig sind und *welche* Interaktionen zwischen ihnen bestehen.

## Divergenz

### Kein explizites P3

Thaller unterscheidet Repräsentation und Interpretation, behandelt Interpretation aber als etwas, das *auf* Information angewendet wird, nicht als etwas, das sie *konstituiert*. Die Architektur (Token → Factlet) implementiert P3, ohne es zu benennen.

→ **Frage:** Ist das eine echte Divergenz oder nur terminologisch? Thaller sagt: "Provisorisch interpretiert werden [Tokens] zu Information" — das klingt nach konstitutiver Interpretation. IvF (Frozen Algorithms) geht sogar weiter: Information als permanent laufende Algorithmen — das *ist* P3, radikal gedacht.

### Thallers Incompleteness-Taxonomie

Thaller differenziert feiner als unsere drei Abwesenheits-Requirements:
- Ex 6.1: Known Defaults (aus Kontext inferierbar)
- Ex 6.2: Explicit Defaults (explizit deklariert)
- Ex 6.3: Triggered Defaults (regelbasiert berechnet)

→ Liefert operationalisierbare Mechanismen, die unsere [[Absence-Modeling]] ergänzen.

### Fuzziness als Systemeigenschaft

Thaller fordert, dass *alle* Daten inhärent fuzzy sind, nicht nur als Ausnahme. Co-Referenzen mit probabilistischen/possibilistischen Gewichten als universeller Mechanismus. IvN, IvT und IvC zusammen machen Fuzziness zum Grundprinzip des gesamten Stacks.

→ Radikaler als unser Framework, das Unsicherheit als eine Eigenschaft unter mehreren behandelt. Die Ivory-Stack-Abbildung legt nahe, dass Thaller recht hat: Fuzziness ist nicht E1 (eine Eigenschaft), sondern durchzieht den gesamten Stack.

### Hypergraphen

Thallers Graphoid/Hypergraph-Konzept (IvG, IvL) hat kein Äquivalent in unserem Framework. Das Mother-Child-Problem (drei mögliche Mütter für zwei mögliche Kinder als *eine* Hyperkante) zeigt die Grenzen von RDF-Tripeln und einfachen Graphen.

## Produktivstes Ergebnis

Die Abbildung Ivory Stack ↔ Requirements zeigt:

1. **Thaller und dieses Projekt sind komplementär, nicht konkurrierend.** Thaller hat die Implementierungsarchitektur (9 Bausteine mit konkreten technischen Aufgaben). Wir haben die theoretische Begründung (Primitive → Eigenschaften → Requirements) und die Evaluation bestehender Ansätze.

2. **Die Lücken in der Abbildung sind der neue Beitrag.** Wo kein bestehender Ansatz einen Ivory-Stack-Baustein adressiert, dort liegt das Forschungsdesiderat. Die drei unbeantworteten Bausteine (IvF, IvT, IvC) definieren die Grenzen dessen, was mit heutigen Mitteln modellierbar ist.

3. **Die Requirements brücken Theorie und Implementierung.** Thaller fragte: "How do the different blocks interact?" Die Requirements-basierte Evaluation zeigt genau das — welcher Baustein welche Anforderung adressiert und wo die Interaktionen liegen.

## Sources

Thaller, M. (2018). On Information in Historical Sources.

Thaller, M. (2020). On Vagueness and Uncertainty in Historical Information. Appendix III: The Ivory Stack.

Thaller, M. (2021). Can historical information be represented outside of a graph / hypergraph / network?

Devlin, K. (1991). *Logic and Information.* Cambridge University Press.

Liu, S. & Lin, Y. (2006, 2011). Grey Numbers and Grey Systems.

Zadeh, L. (2005). Toward a Generalized Theory of Uncertainty.

## Related

- [[Historical-Information]] — Übergeordnetes Theoriedokument
- [[Information]] — Langefors' I=i(D,S,t) als Brücke zu Thallers Token→Factlet
- [[Primitives]] — Die drei Primitive im Vergleich mit Thaller
- [[Absence-Modeling]] — Thallers Incompleteness-Taxonomie als Ergänzung
- [[Approaches-Comparison#2.1 Thaller (Ivory Stack)|Approaches-Comparison]] — Bewertung des Ivory Stack Designs
- [[Approaches-Overview]] — Paradigmengruppierung zeigt Lücken in der Ivory-Stack-Abbildung
- [[Systemic-Gaps]] — Korrespondenz systemische Lücken ↔ unbeantwortete Ivory-Stack-Bausteine
