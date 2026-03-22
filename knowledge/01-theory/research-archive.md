---
type: knowledge
created: 2026-03-21
tags: [archive, synthesis, historical-information]
status: archived
---

# Wissensdokument: Historische Information erfahrbar machen

**Version:** 1.0  
**Stand:** 2026-03-21  
**Typ:** Forschungswissensdokument (synthetisiert alle bisherigen Arbeitsergebnisse)

---

## 1 Projektgegenstand

Dieses Projekt entwickelt eine interaktive statische Website, die die formalisierte Theorie historischer Information durch Informationsvisualisierungen an synthetischen historischen Beispielen erfahrbar macht. Die Website ist gleichzeitig Forschungsprototyp (validiert 24 Requirements), Kommunikationsmedium (vermittelt die Theorie) und methodisches Demonstrationsobjekt (ist selbst ein Promptotype). Die Methode ist Promptotyping.

### Forschungsfrage

Lassen sich die 24 formal spezifizierten Requirements für die Modellierung historischer Information so implementieren und visualisieren, dass die Theorie an konkreten historischen Beispielen nachvollziehbar wird, und welche der fünf systemischen Lücken können dabei geschlossen werden?

### Deliverables

Das primäre Deliverable ist eine statische Website (HTML/CSS/Vanilla JS), deploybar via GitHub Pages. Sekundär entsteht eine Python-Kernbibliothek, die die Requirements als testbare Bedingungen implementiert. Tertiär ein Paper, das Theorie, Methode und Ergebnisse dokumentiert.

---

## 2 Theoretische Grundlage

### 2.1 Drei Primitive

Historische Information unterscheidet sich von anderen Informationstypen durch drei analytisch distinkte und jeweils notwendige Bedingungen.

**P1 Temporale Irreversibilität.** Die beschriebenen Sachverhalte können nicht erneut beobachtet werden. Formal: `∀i ∈ HI, ∀s = referent(i) → ¬∃v : reproduces(v, s)`. Nicht identisch mit Vergangenheitsbezug (naturwissenschaftliche Messungen beziehen sich auch auf Vergangenes, aber das Experiment ist wiederholbar).

**P2 Spurenvermitteltheit.** Jeder Zugang zum Referenten läuft ausschließlich über Spuren (Vestiges, Reflections). Formal: `∀i ∈ HI → ∃t ∈ Traces : mediates(t, i, referent(i)) ∧ ¬∃directAccess(referent(i))`.

**P3 Interpretative Konstitution.** Historische Information existiert nicht unabhängig von Interpretation. Die Spur-Sachverhalt-Beziehung ist prinzipiell unterdeterminiert. Formal: `∀i ∈ HI → ∃a ∈ InterpretationActs, ∃ag ∈ Agents : constitutes(a, i) ∧ performs(ag, a)`. Abgrenzung gegenüber P2 über Unterdeterminiertheit: bei Messdaten ist die Spur-Sachverhalt-Beziehung durch Kalibrierung determiniert, bei historischen Quellen prinzipiell unterdeterminiert.

Die Primitive sind analytisch distinkt (jedes identifiziert einen nicht-substituierbaren Aspekt) und jeweils notwendig (Entfernen eines Primitivs erzeugt Nicht-HI-Fälle). Der Notwendigkeitstest zeigt Notwendigkeit, nicht formale logische Unabhängigkeit.

### 2.2 Methodische Festlegungen

**Epistemischer Status.** Die Notation ist semi-formal. Prädikate sind intensional, nicht axiomatisch definiert. Struktur wird expliziert, mechanische Verifikation ist nicht möglich.

**Beobachtungsebene.** `HI` bezeichnet die Menge der historischen Informationseinheiten, die in einem gegebenen Forschungskontext als konstituiert gelten. Pragmatische Einklammerung von P3 auf der Metaebene.

**Ableitungskriterium.** `derivedFrom(E, P)` bedeutet: E ist als Eigenschaft historischer Information nur denkbar, wenn P gilt. Ontologisch notwendige Voraussetzung, nicht epistemische Erkenntnisbedingung.

### 2.3 Elf abgeleitete Eigenschaften

Gruppierung (epistemisch, medial, semiotisch) ist pragmatisch, nicht erschöpfend. Nicht abgedeckt: pragmatische Dimensionen (Zugangsbeschränkungen, Archivordnungen) und soziale Dimensionen (Schulenbildung, Kanonisierung, Machtdynamiken).

**Ableitungsgraph**

```
P1 → E1 (Unsicherheit), E5 (Kategorienkontingenz), S1 (Temporale Komplexität)
P2 → E2 (Quellengebundenheit), M1 (Medialität), M3 (Selektivität), M4 (Materialität), S2 (Semiotische Schichtung)
P3 → E3 (Multiperspektivität), E4 (Kontextabhängigkeit)
P1+P2 → S3 (Intertextualität)
P2+P3 → M2 (Intentionalität)
```

P2 ist das produktivste Primitiv (5 direkte, 2 kombinierte Ableitungen). P3 hat nur 2 direkte Ableitungen, weil es primär in Kombination wirkt.

**Epistemisch.** E1 Unsicherheit (← P1), E2 Quellengebundenheit (← P2), E3 Multiperspektivität (← P3), E4 Kontextabhängigkeit (← P3), E5 Kategorienkontingenz (← P1, ontologisch: Kategorien *sind* kontingent wegen P1; epistemisch: Erkenntnis setzt P2+P3 voraus).

**Medial.** M1 Medialität (← P2), M2 Intentionalität (← P2+P3), M3 Selektivität (← P2), M4 Materialität (← P2).

**Semiotisch.** S1 Temporale Komplexität (← P1), S2 Semiotische Schichtung (← P2), S3 Intertextualität (← P1+P2).

### 2.4 Vierundzwanzig Requirements

Jedes Requirement formuliert eine testbare Bedingung, die ein Datenmodell erfüllen muss. Requirements beschreiben *was* repräsentiert werden muss, nicht *wie*. Vollständige Spezifikation in `data/requirements.json`.

**Epistemisch.** R-E1.1 Unsicherheitsgrade. R-E1.2 Alternativinterpretationen. R-E1.3 Explizite Wissenslücken (systemische Lücke). R-E2.1 Provenienz. R-E2.2 Epistemische Distanz. R-E3.1 Perspektivenkoexistenz. R-E3.2 Perspektivenrelationen. R-E4.1 Interpretationsmetadaten. R-E5.1 Temporale Kategorisierung. R-E5.2 Kategorienprovenienz emic/etic (systemische Lücke).

**Medial.** R-M1.1 Quellentyp als Dimension. R-M2.1 Erstellungszweck. R-M2.2 Systematische Auslassungen (systemische Lücke). R-M3.1 Überlieferungslücken (systemische Lücke). R-M4.1 Träger-Inhalt-Separation. R-M4.2 Material als Information.

**Semiotisch.** R-S1.1 Temporale Kontextualisierung. R-S1.2 Historische Referenzsysteme. R-S2.1 Lesarten/Normalisierung (systemische Lücke). R-S3.1 Quellenrelationen.

**Strukturell.** R-A1 Separation of Concerns. R-A2 Ereigniszentrierung. R-A3 Monotonizität. R-A4 Assertionsbasierung.

### 2.5 Bewertungsframework

Methodik: Expert Judgement auf Basis publizierter Ontologie-Dokumentation. Dreistufige Skala: `structural` (dedizierte Konstrukte), `metadata` (über generische Mechanismen abbildbar), `absent` (nicht adressiert).

**Aggregation (gleichgewichtig)**

| Ansatz | structural | metadata | absent | Abdeckung |
|---|---|---|---|---|
| Thaller (Entwurf) | 13 | 6 | 5 | 79% |
| SDHSS | 11 | 5 | 8 | 67% |
| CIDOC-CRM | 7 | 8 | 9 | 63% |
| Bookkeeping Ont. | 3 | 6 | 15 | 38% |
| Factoid | 4 | 4 | 16 | 33% |
| STAR | 5 | 3 | 16 | 33% |
| PROV-O | 2 | 2 | 20 | 17% |

Thaller-Wert basiert auf Entwurf (Ivory Stack 2018–2021), nicht auf Implementierung. Die gewichtete Aggregation für textuelle Quellen (C=3, R=2, M=1) verschiebt SDHSS auf 72%, PROV-O auf 14%.

### 2.6 Fünf systemische Lücken

R-E1.3 (Wissenslücken), R-E5.2 (Kategorienprovenienz), R-M2.2 (systematische Auslassungen), R-M3.1 (Überlieferungslücken), R-S2.1 (Lesarten/Normalisierung). Drei betreffen Abwesenheitsmodellierung.

**Warum Ontologien Abwesenheit schlecht modellieren.** Erstens ein positiver Bias der Wissensrepräsentation (Ontologien beschreiben Existierendes). Zweitens die Open World Assumption von OWL (fehlende Aussagen = unbekannt, nicht = informationell signifikant). Drittens fehlende Formalisierungstradition für Nicht-Wissen. Historische Forschung benötigt eine Wissensrepräsentation, die unter der OWA operiert (weil historisches Wissen immer unvollständig ist) und gleichzeitig Abwesenheit als informationellen Sachverhalt modellieren kann.

### 2.7 Offene Formalisierungsprobleme

**P3 als konstitutiver Akt.** Die pragmatische Einklammerung (2.2) adressiert das Problem auf der Metaebene, aber eine prozessontologische Formalisierung steht aus.

**Reflexivität.** Die formale Beschreibung historischer Information ist selbst eine standortgebundene interpretative Konstitution.

---

## 3 Thaller-Vergleich

### 3.1 Konvergenz

Thallers fünf Prinzipien (Abschnitt 2, "On Information in Historical Sources") konvergieren mit R-A1 bis R-A4. "Represents the artifacts as free from any interpretation as possible" = R-A1. "Embeds them in a network of interpretations" = R-A4. "Accepts that contradictions may resist resolution" = R-A3/R-E1.2. "All interpretations represent tendencies, no certainties" = R-E1.1. Beide Wege (Thaller aus Informationsbegriff, Wissensdokument aus Primitiven) führen zu denselben Architekturprinzipien.

### 3.2 Divergenz

**Kein explizites P3.** Thaller unterscheidet Repräsentation und Interpretation, behandelt Interpretation aber als etwas, das *auf* Information angewendet wird, nicht als etwas, das sie *konstituiert*. Die Architektur implementiert P3, ohne es zu benennen.

**Systematischere Abwesenheitsbehandlung.** Thallers Incompleteness-Taxonomie (Ex 6.1–6.3) differenziert feiner als unsere drei Abwesenheits-Requirements und liefert operationalisierbare Mechanismen (Explicit Defaults, Triggered Defaults).

**Fuzzyness als Systemeigenschaft.** Thaller fordert, dass alle Daten inhärent fuzzy sind, nicht nur als Ausnahme. Co-Referenzen mit probabilistischen/possibilistischen Gewichten sind ein universeller Mechanismus.

### 3.3 Produktivstes Ergebnis

Thaller und das Wissensdokument zusammen erreichen eine Abdeckung, die keiner allein hat. Thaller liefert die Implementierungsarchitektur (Co-Referenzen, Token Strings, MSF). Das Wissensdokument liefert die theoretische Begründung und die Ontologie-Evaluation.

---

## 4 Methode: Promptotyping

### 4.1 Definition

Promptotyping ist eine iterative Context-Engineering-Methode in vier Phasen für den Bau datengetriebener Forschungsartefakte mit Frontier LLMs. Die Methode strukturiert den Prozess in Preparation, Exploration and Mapping, Distillation und Implementation.

### 4.2 Warum Promptotyping für dieses Projekt

Das Projekt erfüllt alle Voraussetzungen. Semantisch strukturierte Daten (24 Requirements, Ableitungsgraph, Bewertungsmatrix als JSON). Iterativ wachsendes Interface, bei dem jede Visualisierung Wissen erzeugt, das in die Knowledge Documents zurückfließt. Critical Expert in the Loop konstitutiv, weil jede Visualisierung eine Modellierungsentscheidung verkörpert. Die drei Dokumenttypen (Knowledge, Process, Action) bilden direkt auf die Repository-Struktur ab.

### 4.3 Dokumenttypen im Projekt

**Knowledge Documents** (deklarativ): Data.md, Design.md, Research.md, dieses Wissensdokument, Konzeptnotizen in `knowledge/concepts/`, die JSON-Dateien in `data/`.

**Process Documents** (chronologisch/analytisch): Journal.md.

**Action Documents** (imperativ): CLAUDE.md, claude-external.md.

### 4.4 Epistemic Infrastructure

Das Projekt erzeugt alle fünf Komponenten der epistemischen Infrastruktur im Sinne des Promptotyping-Papers.

**Verification Milestones.** Für jede Visualisierung: Prüfung, ob die dargestellte Information der formalen Spezifikation in `data/requirements.json` entspricht.

**Promptotyping Interfaces.** Die Website selbst ist ein Exploration Interface. Einzelne Visualisierungen fungieren als Verification Interfaces (machen sichtbar, ob Requirements korrekt implementiert sind) und Audit Interfaces (machen den Formalisierungsprozess nachvollziehbar).

**Promptotyping Documents.** Knowledge/Process/Action-Dokumente im `knowledge/`-Ordner.

**Version Control.** Git-Commits als implizite Process Documents. Journal.md + Git-History als komplementäre Perspektiven.

**Agentic Coding.** Claude Code als primäres Entwicklungswerkzeug. CLAUDE.md konfiguriert die Beziehung zum Repository.

### 4.5 Asymmetric Amplification

Die Theorie historischer Information ist das Produkt jahrelanger Forschungsarbeit (Dissertation, Literaturrecherche, Modellierungspraxis). Das Promptotyping-Projekt amplifiziert dieses Wissen asymmetrisch: die Visualisierungen, die Implementation der Requirements, die programmatische Evaluation, das Forschungsinterface, all das wäre ohne LLM-Unterstützung in diesem Umfang nicht in vertretbarer Zeit realisierbar. Aber ohne das Domänenwissen (was historische Information *ist*, warum die Primitive *irreduzibel* sind, warum Abwesenheit *konstitutiv* ist) wäre die LLM-Ausgabe wertlos. Die Methode substituiert Expertise nicht, sie amplifiziert sie.

---

## 5 Website-Konzept

### 5.1 Grundidee

Die Website macht die formalisierte Theorie an konkreten historischen Beispielen *erfahrbar*. Nicht erklären, dass Unsicherheit existiert, sondern *zeigen*, wie ein Modell mit und ohne Unsicherheitsrepräsentation mit demselben Datensatz umgeht. Jede Visualisierung verkörpert ein Argument.

### 5.2 Struktur

**Einstiegsseite.** Orientierung: Was ist historische Information? Drei Primitive als Ausgangspunkt. Navigation in die Tiefe.

**Ableitungsgraph.** Interaktiver DAG (P → E/M/S → R). Klick auf einen Knoten zeigt Definition, Ableitungslogik und verbundene Requirements. Farbcodierung nach Gruppe (epistemisch, medial, semiotisch).

**Requirement-Explorer.** Für jedes der 24 Requirements eine eigene View mit Definition, formaler Testbedingung, synthetischem historischem Beispiel, interaktiver Visualisierung ("Was passiert, wenn dieses Requirement erfüllt / nicht erfüllt ist?"), Abdeckung durch die sieben Ansätze.

**Bewertungsmatrix.** Interaktive Heatmap. Umschaltbar zwischen gleichgewichtiger und domänengewichteter Ansicht. Filterbar nach Gruppe, nach systemischen Lücken, nach einzelnem Ansatz. Klick auf eine Zelle zeigt die Begründung der Einstufung.

**Abwesenheitsmodellierung.** Eigener Abschnitt für die drei Abwesenheits-Requirements (R-E1.3, R-M2.2, R-M3.1). Visualisiert die drei Ursachen (positiver Bias, OWA, fehlende Formalisierungstradition). Zeigt an einem synthetischen Beispiel, wie eine Lacuna-Klasse funktioniert.

**Thaller-Vergleich.** Thallers Ivory Stack als siebter Ansatz in der Matrix. Konvergenz- und Divergenzanalyse visualisiert.

### 5.3 Synthetische historische Beispiele

Die Qualität der Website hängt von der Qualität der Beispiele ab. Jedes Beispiel muss ein Requirement so illustrieren, dass der Betrachter *sieht*, was das Requirement fordert. Entwurfsprinzip: ein Beispiel pro Requirement, aus maximal drei historischen Szenarien, damit die Beispiele untereinander kohärent sind.

**Szenario A: Frühneuzeitliches Rechnungsbuch.** Wirtschaftstransaktionen mit Währungen, Preisen, Personen, Orten. Geeignet für E1 (Unsicherheit in Datierungen und Beträgen), E2 (Quellengebundenheit), E5 (Kategorienkontingenz: "Kaufmann" im 15. vs. 19. Jh.), M2 (Intentionalität: Buch dient Rechenschaftslegung, nicht Geschichtsschreibung), M3 (Selektivität: nur ein Bruchteil der Transaktionen aufgezeichnet), S1 (temporale Komplexität: historische Währungen und Maßeinheiten), S2 (semiotische Schichtung: Abkürzungen, Konventionen).

**Szenario B: Prosopographische Datenbank.** Personenidentifikation über mehrere Quellen. Geeignet für E3 (Multiperspektivität: widersprüchliche Angaben über dieselbe Person), E4 (Kontextabhängigkeit: verschiedene Forschende identifizieren Personen unterschiedlich), R-E1.3 (Wissenslücke: Geburtsdatum muss existieren, ist aber unbekannt), R-M2.2 (systematische Auslassung: Frauen in bestimmten Quellentypen nicht genannt), R-M3.1 (Überlieferungslücke: Kirchenbücher eines Zeitraums verloren), R-S2.1 (Lesarten: Namensschreibung diplomatisch vs. normalisiert). Thallers Record-Linkage-Problematik (Ex 8.4, Ex 5.1–5.6) liefert hier die operative Tiefe.

**Szenario C: Quellenedition mit Textzeugen.** Variantenapparat, Standoff-Markup. Geeignet für R-S2.1 (Lesarten/Normalisierung), R-S3.1 (Quellenrelationen), R-A1 (Separation Repräsentation/Interpretation), R-M4.1 (Träger-Inhalt-Separation), R-M4.2 (Material als Information: Tintenfarbe, Wasserzeichen).

### 5.4 Visualisierungstypen

**DAG-Visualisierung.** Für den Ableitungsgraph (P → E/M/S → R). Knoten klickbar, Kanten zeigen Ableitungsrelation, Farbcodierung nach Gruppe.

**Heatmap.** Für die Bewertungsmatrix. Zeilen = Requirements, Spalten = Ansätze. Farben = structural/metadata/absent. Umschaltbar zwischen Domänenprofilen.

**Scenario-Explorer.** Für die synthetischen Beispiele. Split-Screen: links das Beispiel (Quellentext, Datenstruktur), rechts die Modellierung (wie das Requirement erfüllt / nicht erfüllt wird). Interaktiv umschaltbar zwischen Ansätzen.

**Lacuna-Visualisierung.** Speziell für die Abwesenheitsproblematik. Zeigt einen Datensatz mit und ohne Lacuna-Klasse. Macht sichtbar, was ein Modell *nicht* repräsentieren kann.

**Radar-Chart / Profil.** Für die Abdeckungsprofile der sieben Ansätze. Vergleichbar, übereinander legbar, domänenspezifisch filterbar.

### 5.5 Technologie

Statisches HTML/CSS/Vanilla JS. Kein Build-System, kein Framework, keine Server-Komponente. D3.js für komplexere Visualisierungen. JSON-Dateien aus `data/` werden vom Browser geladen. Deploybar via GitHub Pages.

---

## 6 Implementierungsplan

### Phase 1: Preparation (abgeschlossen)

Repository-Struktur angelegt. Knowledge Documents erzeugt. JSON-Dateien als Single Source of Truth bereitgestellt (`requirements.json`, `derivation_graph.json`, `evaluation_matrix.json`, `domain_profiles.json`). CLAUDE.md und claude-external.md konfiguriert.

### Phase 2: Exploration and Mapping

Synthetische historische Beispiele für die drei Szenarien entwerfen. Für jedes Requirement prüfen, welches Szenario es am besten illustriert. Visualisierungstypen gegen Datenstruktur und Forschungsfrage mappen. Sechs bis acht Visualisierungstypen explorieren, ungeeignete mit Begründung verwerfen. Ergebnis: `knowledge/concepts/Examples.md` mit allen Beispielen und ihrer Zuordnung zu Requirements.

### Phase 3: Distillation

Alles, was in Phase 2 exploriert wurde, in die Knowledge Documents komprimieren. `Design.md` aktualisieren mit finaler Website-Architektur. `Data.md` aktualisieren mit Datenmodell für die synthetischen Beispiele. JSON-Dateien für die Beispiele erzeugen (`data/examples/`). Prinzip: maximum information, minimum tokens.

### Phase 4: Implementation (iterativ)

**Iteration 1.** Einstiegsseite + Ableitungsgraph als interaktiver DAG. Minimal viable navigation. Eine Visualisierung pro Primitiv.

**Iteration 2.** Bewertungsmatrix als interaktive Heatmap. Gleichgewichtige und domänengewichtete Ansicht. Filterung nach Gruppen und systemischen Lücken.

**Iteration 3.** Requirement-Explorer mit synthetischen Beispielen. Drei bis fünf Requirements vollständig illustriert (Fokus auf die systemischen Lücken).

**Iteration 4.** Abwesenheitsmodellierung als eigener Abschnitt. Lacuna-Visualisierung. Thaller-Vergleich.

**Iteration 5.** Alle 24 Requirements mit Beispielen und Visualisierungen. Design-Konsolidierung. Responsive Layout.

Jede Iteration erzeugt Wissen, das in Journal.md dokumentiert und in die Knowledge Documents zurückgeschrieben wird. Verification Milestones nach jeder Iteration: Stimmen die Visualisierungen mit den formalen Spezifikationen in `data/` überein?

---

## 7 Paper-Konzept

**Arbeitstitel:** *From Theory to Code. An Implementation Experiment for the Formal Requirements of Historical Information Modeling*

**Kernargument.** Die formale Spezifikation der Anforderungen an historische Informationsmodellierung ist nicht nur theoretisch konsistent, sondern implementierbar und visualisierbar. Die Implementierung deckt Lücken auf, die in der theoretischen Analyse unsichtbar bleiben, und schließt drei der fünf systemischen Lücken. Die Website ist die Evidenz.

**Doppelter Beitrag.** Das Paper publiziert sowohl die Theorie (Primitive, Eigenschaften, Requirements, Bewertungsmatrix, systemische Lücken, Abwesenheitsproblematik) als auch die Methode ihrer Erarbeitung (Promptotyping als Context-Engineering-Methode). Die Website ist der Companion, der beides erfahrbar macht.

**Gliederung.** (1) Introduction. (2) Theoretical Framework (Primitive, Eigenschaften, methodische Festlegungen). (3) Requirements Specification (24 Requirements, formale Testbedingungen). (4) Evaluation Framework (Bewertungsmatrix, sieben Ansätze inkl. Thaller, systemische Lücken, Abwesenheitsproblematik). (5) Implementation Experiment (Technologiestack, synthetische Beispiele, Website als Forschungsprototyp). (6) Discussion (Was funktioniert, was nicht; P3 als konstitutiver Akt; asymmetrische Amplifikation; Promptotyping als Methode). (7) Conclusion.

---

## 8 Referenzen (Kernbestand)

**Theorie historischer Information.** Doerr 2003 (CIDOC-CRM). Beretta 2021 (SDHSS, OntoME). Pasin/Bradley 2015 (Factoid). Piotrowski 2019, 2020, 2026 (Unsicherheit, Computational Hermeneutics). Thibodeau (Constructed Past Theory). Pollin 2025 (Bookkeeping Ontology, Dissertation).

**Hermeneutik und Wissenschaftsphilosophie.** Gadamer 1960/1990 (Wahrheit und Methode). Ricoeur 1983–1985 (Temps et récit). Cushing 1995 (Hermeneutics, underdetermination).

**Thaller.** Thaller 2018 (On Information in Historical Sources). Thaller 2020 (On vagueness and uncertainty). Thaller 2021 (On annotations and markup).

**Wissensrepräsentation und Abwesenheit.** OWL/OWA (W3C). SHACL (W3C 2017). Devlin 1991 (Logic and Information).

**Promptotyping.** Pollin 2025c, 2025d, 2026c (Promptotyping, Critical Expert, Asymmetric Amplification). Mei et al. 2025 (Context Engineering Survey). Hong et al. 2025 (Context Rot). Mollick 2024 (Co-Intelligence).

---

*Änderungsprotokoll*

- v1.0 (2026-03-21) – Initiale Synthese aller bisherigen Arbeitsergebnisse: Theorie (3 Primitive, 11 Eigenschaften, 24 Requirements, 15 Kritikpunkte integriert), Thaller-Vergleich (79% Abdeckung, Konvergenz/Divergenz), Promptotyping als Methode, Website-Konzept (3 Szenarien, 5 Visualisierungstypen), Implementierungsplan (5 Iterationen), Paper-Konzept.