---
type: knowledge
created: 2026-03-22
tags: [approaches, comparison, evaluation, historical-information, consolidated]
status: draft
---

# Approaches Comparison

## Summary

Konsolidierte Vergleichsanalyse aller untersuchten Repräsentationsansätze für historische Information — bestehende und neu identifizierte (Literatur 2024–2025). Dieses Dokument ersetzt die einzelnen Assessment-Stubs und enthält für jeden Ansatz: Beschreibung, Key Constructs, erwartete Stärken/Schwächen, Evidenz aus Projekten und Primärquellen. Die systematische Bewertung gegen die [[Requirements|24 Requirements]] steht noch aus (siehe [[Evaluation-Framework]]).

**Gesamtüberblick:** 16 Ansätze aus 7 Paradigmen. Kein Ansatz deckt alle 24 Requirements ab. Die höchste theoretische Abdeckung hat Thallers Ivory Stack (Design-Level), die breiteste operative Adoption CIDOC-CRM.

---

## 1. Ontologien

### 1.1 CIDOC-CRM (ISO 21127)

**Scope:** Ereigniszentrierte Referenzontologie für kulturelles Erbe.
**Version:** 7.3 (August 2024). ISO 21127:2023.

**Key Constructs:**
- **E5 Event** — Zentralklasse; alles wird über Ereignisse modelliert
- **E13 Attribute Assignment** — Meta-Klasse für quellenbasierte Zuweisungen (wer hat wem was zugeschrieben, basierend auf welcher Quelle)
- **E7 Activity** — Menschlich verursachte Ereignisse
- **E52 Time-Span / E61 Time Primitive** — Temporale Verankerung
- **E53 Place, E39 Actor, E73 Information Object**
- **Extensions:** LRMoo (Bibliothek), CRMsci (Beobachtung), CRMgeo (Raum-Zeit), CRMdig (Digitalisierung), [[#1.2 SDHSS|SDHSS]] (Humanities), [[#1.6 CRMinf|CRMinf]] (Argumentation)

**Stärken:** Breite Adoption (ISO-Standard), ereigniszentriertes Paradigma erfasst prozessuale Natur von Geschichte, E13 als eingebaute Provenance, reiches Erweiterungsökosystem.
**Schwächen:** Sehr hohes Abstraktionsniveau, keine native Unterstützung für Abwesenheit/negative Evidenz, Komplexität des Gesamtmodells als Adoptionshürde.

**Neue Literatur (2024–2025):**
- Systematic Literature Review (ACM JOCCH 2025, DOI: 10.1145/3771098): 74 Publikationen 2018–2024 analysiert. Mehr Implementierung bei beweglichem als bei immateriellem Kulturerbe. Lücken bei Zugänglichkeit für Humanisten.
- CIDOC CRM-Based KG Construction Using LLMs (Applied Sciences 2025): GPT-basierte Extraktion strukturierter Tripel aus unstrukturierten Texten mittels CIDOC-CRM v7.2.

**Evidenz:** [[Project-Evidence#DEPCHA|DEPCHA]] (Bookkeeping Ontology baut auf CIDOC-CRM), [[Project-Evidence#M3GIM|M³GIM]] (CIDOC-CRM-Patterns), [[Project-Evidence#ZBZ|ZBZ]] (Design Decisions referenzieren CIDOC-CRM).
**Quellen:** Doerr 2003; ISO 21127:2023; CIDOC-CRM v7.3 (2024); https://www.cidoc-crm.org/

---

### 1.2 SDHSS

**Scope:** CIDOC-CRM-Erweiterung für Sozial- und Geisteswissenschaften.
**Entwickler:** Francesco Beretta (LARHRA Lyon), seit 2021. Verwaltet über OntoME (ontome.net).

**Key Constructs:**
- Erweiterungen von E13 Attribute Assignment für geisteswissenschaftliche Assertionen
- Modellierung sozialer Beziehungen (Verwandtschaft, Zugehörigkeit, Status)
- OntoME-verwaltete Klassen- und Property-Definitionen mit kollaborativer Kuration
- Alignment mit CIDOC-CRM-Basisklassen auf verschiedenen Abstraktionsebenen

**Stärken:** Zweckgebaut für Geistes-/Sozialwissenschaften, kollaboratives Ontologiemanagement, FAIR-Infrastruktur über Geovistory-Plattform.
**Schwächen:** Abhängigkeit von OntoME-Infrastruktur, kleinere Community als Basis-CIDOC-CRM.

**Neue Literatur (2024–2025):**
- Beretta 2024: "Semantic Data for Humanities and Social Sciences (SDHSS): an Ecosystem of CIDOC CRM Extensions for Research Data Production and Reuse" (HTWK Leipzig, DOI: 10.33968/9783966270502-05). Beschreibt geschichtetes System: CIDOC-CRM → SDHSS → domänenspezifische Sub-Extensions.
- Beretta 2024: Ontologie für geographische Orte mit raum-zeitlicher, sozialer Evolution (Taylor & Francis).
- Geovistory-Plattform (59. CIDOC CRM SIG, September 2024): LOD-Forschungsinfrastruktur, FAIR/LOD-R-Prinzipien.

**Evidenz:** [[Project-Evidence#SuGW|SuGW]] (potentielles Alignment), [[Project-Evidence#DEPCHA|DEPCHA]] (ökonomisch-soziale Überlappung).
**Quellen:** Beretta 2021 (Semantic Web Journal); Beretta 2024 (HTWK Leipzig); ontome.net; geovistory.org

---

### 1.3 Bookkeeping Ontology

> **Hinweis:** Eigene Ontologie. Assessment muss selbstkritisch sein und denselben (oder höheren) Standard anlegen wie bei allen anderen Ansätzen.

**Scope:** REA + CIDOC-CRM für historische Finanzdaten.
**Entwickler:** Pollin & Vogeler (2022/2024, Universität Graz).

**Key Constructs:**
- **Drei-Schichten-Architektur:** Ökonomische Realität (Transaction, Transfer ← crm:E7_Activity + rea:EconomicEvent) / Quellendokumentation (Entry, UnitMentions, AgentMentions) / Historische Interpretation (Konversionssysteme)
- **REA-Integration:** Resource-Event-Agent-Pattern für ökonomische Transaktionen
- **v1.2** — Implementiert in DEPCHA, operativ aber limitiert (Cross-Branch Inheritance bei Services)
- **v1.3** — Theoretisch vollständiger, nicht implementiert

**Stärken:** Explizite Drei-Schichten-Separation adressiert Theorie-Quellen-Interpretation-Unterscheidung, fundiert in Accounting-Theorie (REA) und Cultural-Heritage-Standards, getestet mit echten Daten.
**Schwächen:** v1.2/v1.3-Kluft (implementierte vs. theoretisch vollständige Version), Domänenspezifität (Finanzdaten — Generalisierbarkeit unklar), Drei-Schichten-Separation unter realem Datendruck zu prüfen.

**Evidenz:** [[Project-Evidence#DEPCHA|DEPCHA]] (Primäre Implementierungsplattform v1.2), [[Project-Evidence#SuGW|SuGW]] (mittelalterliche Transaktionen relevant für v1.3).
**Quellen:** Pollin 2024 (Dissertation, Universität Graz, DOI: 10.25364/402.2024.63); Pollin & Vogeler 2022/2024; McCarthy 1982 (REA).

---

### 1.4 Factoid / STAR

**Scope:** Assertionsbasierte Modellierung, ursprünglich für Prosopographie.
**Entwickler:** Bradley & Pasin 2015 (Factoid); Andrews et al. 2024 (STAR-Erweiterung).

**Key Constructs:**
- **Factoid** — Atomare Einheit: eine quellenbasierte Assertion über eine Person
- **STAR Pentile** — Subject, Object, Predicate, Source, Authority (5 verknüpfte Komponenten)
- **E13 Attribute Assignment** — CIDOC-CRM-Ankerklasse für STAR
- **Gender as Event** — Andrews et al. 2024: Geschlecht als zeitgebundenes, quellenattribuiertes Ereignis statt statische Eigenschaft

**Stärken:** Explizite Quellengrundierung jeder Assertion, saubere Separation von S/O/P/Source/Authority, E13-Mapping, demonstrierte Flexibilität (Gender als Event).
**Schwächen:** Ursprünglich personenzentriert (Generalisierbarkeit auf Nicht-Personen-Entitäten unklar), Verbosität (jedes Attribut braucht volle Factoid-Struktur), Beziehung zu komplexen Multi-Quellen-Narrativen nicht vollständig adressiert.

**Neue Projekte (2024–2025):**
- Virtual Record Treasury of Ireland (VRTI), Phase 3 (2023–2025): Factoid-basierte Prosopographie mit Semantic Web, 965 Frauen + 8.807 Männer.

**Evidenz:** [[Project-Evidence#SuGW|SuGW]] (16.084 Personen prosopographisch), [[Project-Evidence#ZBZ|ZBZ]] (quellenbasierte Assertionen).
**Quellen:** Bradley & Pasin 2015 (DSH); Andrews et al. 2024 (Gender as Event); KCL Factoid Prosopography Ontology.

---

### 1.5 PROV-O

**Scope:** W3C-Standard für Provenienzinformation (general-purpose).
**Version:** W3C Recommendation 2013.

**Key Constructs:**
- **prov:Entity / prov:Activity / prov:Agent** — Grundvokabular
- **prov:wasGeneratedBy, wasDerivedFrom, wasAttributedTo** — Provenienzrelationen
- **prov:used, wasAssociatedWith, actedOnBehalfOf** — Aktivitäts- und Delegationsrelationen

**Stärken:** W3C-Standard mit breiter Adoption, minimales Vokabular für Provenienz-Ketten, interoperabel mit jedem RDF-System.
**Schwächen:** Nicht domänenspezifisch (keine Konzepte für historische Quellenkritik, epistemische Unsicherheit, interpretive Schichten), Provenienz im PROV-O-Sinne (computationale Derivation) ≠ Provenienz im historischen Sinne (Quellenkritik), muss mit Domain-Ontologie kombiniert werden.

**Evidenz:** [[Project-Evidence#DEPCHA|DEPCHA]] (TEI-XML→RDF-Pipeline), [[Project-Evidence#ZBZ|ZBZ]] (OCR-Pipeline als Provenienz-Kette).
**Quellen:** Lebo, Sahoo & McGuinness 2013 (W3C); https://www.w3.org/TR/prov-o/

---

### 1.6 CRMinf (Argumentation & Belief) — NEU

**Scope:** CIDOC-CRM-Extension für Argumentation, Glauben und Inferenz.
**Status:** In aktiver Entwicklung. Harmonisierung mit CRMsci, CRMbase und CRMtex für März 2026 SIG geplant.

**Key Constructs:**
- **I1 Argumentation** — Formaler Argumentationsprozess
- **I2 Belief** — Überzeugungsgrade von Agenten
- **I4 Proposition Set** — Menge zusammengehöriger Propositionen
- **I5 Inference Making** — Inferenzprozess von Prämissen zu Schlussfolgerungen

**Relevanz:** Direkt relevant für die Modellierung interpretativer Schichten und Unsicherheit in historischer Information. Adressiert das in [[Absence-Modeling]] und [[Properties]] beschriebene Problem der formalen Repräsentation von Glaubensgraden und Argumentationsketten. Potentiell die CIDOC-CRM-Antwort auf R-E1.1 (Unsicherheitsgrade) und R-E1.2 (Alternativinterpretationen).

**Quellen:** CIDOC-CRM SIG; https://cidoc-crm.org/crminf

---

## 2. Graphmodelle

### 2.1 Thaller (Ivory Stack)

**Scope:** Konzeptuelles Design-Framework für historische Informationssysteme.
**Entwickler:** Manfred Thaller (2018–2021).
**Status:** Design-Level — keine formale Ontologie, kein laufendes System.

**Key Constructs:**
- **Co-references** — Multiple Referenzen auf (potentiell) dieselbe Entität über Quellen hinweg
- **Token Strings** — Repräsentation textueller Evidenz unter Bewahrung der Originalform
- **MSF (Multi-Source Facts)** — Quellenübergreifend aggregierte Fakten
- **Factlets** — Atomare quellenabgeleitete Informationseinheiten (vgl. [[#1.4 Factoid / STAR|Factoids]])
- **Graphoids / Hypergraphen** — Komplexe Graphstrukturen für multi-äre Relationen
- **Active Database** — Aktive Verwaltung und Auflösung von Widersprüchen
- **9 Ivory Stack Bausteine:** IvI (Infons), IvF (Frozen Algorithms), IvN (Grey Numbers), IvT (Linguistische Variablen), IvC (Fuzzy Control), IvG (Co-Reference Graphs), IvM (Information Objects) + 2 weitere

**Stärken:** Adressiert Probleme, die andere Ansätze implizit lassen (Co-Referenz, Widerspruch, Multi-Quellen-Aggregation), reiches konzeptuelles Vokabular, Active-Database-Konzept.
**Schwächen:** Nicht implementiert, nicht formalisiert (Prosa, nicht maschinenlesbar), nicht direkt gegen echte Daten testbar, Beziehung zu bestehenden Standards nicht formal spezifiziert.

**Detailanalyse:** Siehe [[Thaller-Synthesis]] für den systematischen Vergleich Ivory Stack ↔ Primitives ↔ Requirements.
**Quellen:** Thaller 2018 (On Information in Historical Sources); Thaller 2020 (On Vagueness and Uncertainty, Appendix III: The Ivory Stack); Thaller 2021 (Historical Information and Graph Structures).

---

### 2.2 FactGrid

**Scope:** Wikibase-Instanz für historische Forschungsdaten.
**Betreiber:** Universität Erfurt, seit 2017/2018. NFDI4Memory-finanziert seit 2023.
**Status:** Operativ, 1,3+ Millionen Items (Oktober 2024 → 1M überschritten), ~700 Nutzer in ~50 Projekten.

**Key Constructs:**
- **Items (Q-Nummern) / Properties (P-Nummern)** — Entitäten und typisierte Relationen
- **Qualifikatoren** — Kontextualisierung von Statements (zeitlich, räumlich, quellenbezogen)
- **Widersprüchliche Statements** — Multiple, sich widersprechende Aussagen mit separaten Quellenbelegen
- **SPARQL-Endpoint** mit Federation zu Wikidata und DBpedia
- **Klarnamen-Prinzip** — Wissenschaftliche Transparenz

**Stärken:** Niedrige Einstiegshürde, Multiperspektivität durch widersprüchliche Statements, breite Quellengebundenheit, SPARQL, Federation.
**Schwächen:** Keine formale Ontologie — semantische Konsistenz abhängig von Community-Praxis, Unsicherheitsgrade nicht formal modelliert, Abwesenheitsmodellierung nicht adressiert.

**Quellen:** Simons 2023; https://database.factgrid.de/; DARIAH Open Methods 2024.

---

### 2.3 Hypergraph-Wissensrepräsentation — NEU

**Scope:** N-äre Relationsmodellierung jenseits von binären Graphen.
**Status:** Aktives Forschungsgebiet 2024–2025.

**Key Constructs:**
- **Hyperedges** — Kanten, die mehr als zwei Knoten verbinden (n-äre Fakten als eine Hyperkante)
- **HySAE** (ACM Web Conference 2025): Semantisch angereicherte 3D-Architektur für Knowledge-Hypergraphen
- **HyperGraphRAG** (2025, arXiv: 2503.21322): Verbessert Context Recall (60.34) und Answer Relevance (85.15) über binäre Graph-Baselines

**Relevanz:** Direkt relevant für Thallers Hypergraph-Konzept ([[Thaller-Synthesis#Hypergraphen]]). Thallers Mother-Child-Problem (drei mögliche Mütter für zwei mögliche Kinder als *eine* Hyperkante) zeigt die Grenzen von RDF-Tripeln. Hypergraph-KGs validieren und erweitern diese Idee. Adressiert potentiell R-E3.1 (Perspektivenkoexistenz) und R-E3.2 (Perspektivenrelationen).

**Quellen:** HySAE (ACM 2025, DOI: 10.1145/3696410.3714549); HyperGraphRAG (arXiv 2025: 2503.21322).

---

## 3. Textkodierung

### 3.1 TEI XML

**Scope:** De-facto-Standard für Textedition in den Digital Humanities.
**Version:** TEI P5, aktuell v4.10.2 (September 2025).

**Key Constructs:**
- **teiHeader** — Strukturierte Metadaten (fileDesc, encodingDesc, profileDesc, revisionDesc)
- **Kritischer Apparat** — `<app>/<lem>/<rdg>` für Variantenmodellierung (3 Methoden)
- **namesdates** — Personen, Orte, Organisationen (standOff)
- **Transkription** — `<choice>/<orig>/<reg>`, `<choice>/<sic>/<corr>` für diplomatisch/normalisiert
- **msdescription** — Handschriftenbeschreibung, physische Merkmale
- **unitDecl** — Historische Metrologie

**Stärken:** Quellennahe Modellierung (R-E2.1), Lesarten/Normalisierung (R-S2.1), Materialität (R-M4.2), Separation Transkription/Interpretation (R-A1).
**Schwächen:** Hierarchische XML-Struktur (Overlapping-Problem), keine native Multiperspektivität als semantisches Konzept, Unsicherheit nur auf Attribut-Ebene (@cert, @evidence), keine formale Ontologie — RDF/LOD-Integration erfordert Transformation.

**Evidenz:** [[Project-Evidence#DEPCHA|DEPCHA]] (TEI→RDF), [[Project-Evidence#SuGW|SuGW]] (~6.400 TEI-XML-Docs), [[Project-Evidence#ZBZ|ZBZ]] (286 PDFs→TEI).
**Quellen:** TEI Consortium 2025 (TEI P5 v4.10.2); https://tei-c.org/

---

## 4. Archivstandards

### 4.1 RiC-O (Records in Contexts)

**Scope:** OWL-2-Ontologie für graphbasierte Archiverschließung.
**Herausgeber:** ICA Expert Group on Archival Description (EGAD).
**Version:** v1.1 (Mai 2025) — 3 Releases in 12 Monaten (v1.0.1 Mai 2024, v1.0.2 Sept 2024, v1.1 Mai 2025).

**Key Constructs:**
- **rico:RecordSet / rico:Record** — Aggregierte und Einzeleinheiten
- **rico:Agent** — Personen, Körperschaften, Gruppen
- **rico:Event, rico:Place, rico:Date** — Kontextualisierung
- **Multirelationalität** — Paradigmenwechsel von hierarchischer Tektonik zu Netzwerkmodell

**Stärken:** Provenienzmodellierung (R-E2.1), Multirelationalität, Linked-Data-Fähigkeit.
**Schwächen:** Auf Bestandsebene konzipiert — modelliert *Existenz* von Quellen, nicht deren *Inhalt*. Unsicherheit, Multiperspektivität und Abwesenheit außerhalb des Designziels.

**Evidenz:** [[Project-Evidence#M3GIM|M³GIM]] (operativer Einsatz mit Domänenerweiterungen m3gim:MusicalWork, m3gim:Performance).
**Quellen:** ICA-EGAD 2023/2025 (RiC-O v1.1); Clavaud et al. 2021; https://github.com/ICA-EGAD/RiC-O

---

## 5. Aggregation

### 5.1 EDM (Europeana Data Model)

**Scope:** RDF-basiertes Metadatenmodell, 50+ Mio. Objekte aus europäischen Institutionen.
**Status:** Operativ. 2024 Review für 3D-Support.

**Key Constructs:**
- **edm:ProvidedCHO** — Kulturerbe-Objekt
- **edm:WebResource** — Digitale Repräsentation
- **ore:Aggregation** — Zusammenfassung
- Aufgebaut auf Dublin Core + SKOS + RDF

**Stärken:** Interoperabilität, breite Adoption, Linked-Data-Fähigkeit.
**Schwächen:** Zu abstrakt für historische Tiefenerschließung. Keine Unsicherheits-, Multiperspektivitäts-, Abwesenheitsmodellierung. Illustriert die Differenz zwischen Aggregation und Modellierung.

**Quellen:** Europeana Foundation; Silva & Terra 2024 (SAGE); https://pro.europeana.eu/page/edm-documentation

---

## 6. Linked Data Profiles — NEU

### 6.1 Linked Art 1.0

**Scope:** JSON-LD-basiertes Applikationsprofil von CIDOC-CRM für Kulturerbedaten.
**Version:** 1.0 (19. Februar 2025) — erste stabile Release.
**Adoption:** National Gallery of Art (Washington D.C.), Rijksmuseum, Yale Center for British Art, J. Paul Getty Trust.

**Key Constructs:**
- JSON-LD-Serialisierung von CIDOC-CRM mit Getty-Vokabularen (AAT, TGN, ULAN)
- Modelliert: Kunstwerke, Archive, bibliographisches Material, Künstler, Orte, Organisationen, Konzepte, Ausstellungen, Provenienz
- Vereinfachtes API-Design gegenüber vollem CIDOC-CRM
- Integriert LRMoo für bibliographische Daten

**Relevanz:** Linked Art demonstriert, wie CIDOC-CRM *usable* gemacht werden kann — das JSON-LD-Format senkt die Adoptionshürde drastisch. Direkt relevant als Bewertungsgegenstand: Wo gewinnt die Vereinfachung (Zugänglichkeit), wo verliert sie (Ausdrucksstärke für historische Information)?

**Quellen:** https://linked.art/; Raemy 2024 (PhD Thesis, Universität Basel: "Linked Open Usable Data for Cultural Heritage"); Linked Art 1.0 Specification (Feb 2025).

---

### 6.2 MemO / NFDI4Memory Knowledge Graph — NEU

**Scope:** Ontologie und föderierter Wissens-Graph für historische Forschungsdaten in Deutschland.
**Entwickler:** NFDI4Memory-Konsortium (Leibniz-IEG Mainz + 80+ Partnerinstitutionen).

**Key Constructs:**
- **MemO (Memory Ontology)** — Erweitert NFDIcore und Culture Ontology für historische Wissenschaften
- Archivmaterialien, hierarchische Dokumentbeziehungen, Provenienz, Dokument-Inhalt-Entitätsverknüpfungen
- Föderierter Index: harmonisiert Metadaten mittels Wikidata- und GND-Identifikatoren über Archivportal-D, EHRI u.a.
- FAIR-Prinzipien als Designgrundlage

**Relevanz:** Repräsentiert den institutionellen Ansatz für historische Forschungsdateninfrastruktur. Zeigt, wie Ontologien, FAIR-Prinzipien und föderierte Architekturen zusammenwirken. Adressiert Interoperabilitätsprobleme, die in Einzelprojekten nicht lösbar sind.

**Quellen:** Ondraszek et al. 2025 (CoRDI Aachen, DOI: 10.5281/zenodo.16736125); https://www.ieg-mainz.de/en/research/research-projects/nfdi4memory/

---

## 7. Statement-Annotation — NEU

### 7.1 RDF-star

**Scope:** W3C-Erweiterung von RDF 1.1 für Statement-Level-Metadaten.
**Status:** W3C Working Group aktiv 2024–2025.

**Key Constructs:**
- **Quoted Triples** — Effiziente Reifikation: ein Triple *über* ein anderes Triple, ohne die 4–5 zusätzlichen Tripel der Standard-Reifikation
- Ermöglicht Assertions wie: "Quelle X behauptet, dass Ereignis Y zum Zeitpunkt Z stattfand" — direkt und kompakt
- **Morph-KGCstar** (2025, SAGE Semantic Web Journal): Deklarative Generierung von RDF-star-Graphen

**Relevanz:** RDF-star adressiert direkt das Provenienz- und Assertionsproblem historischer Information. Die Fähigkeit, *Aussagen über Aussagen* effizient zu machen, ist für R-E2.1 (Provenienz), R-E4.1 (Interpretationsmetadaten) und R-A4 (Assertionsbasierung) zentral. Reduziert die Verbosität, die Factoid/STAR und CIDOC-CRM E13 in Standard-RDF erzeugen.

**Vergleich mit bestehenden Ansätzen:**
- Named Graphs, RDF-star, PROV-O, Dublin Core, Conjectural Graphs und OCDM als Hauptansätze für Provenienz-Tracking in CH-Metadaten identifiziert (Survey: arXiv 2305.08477, 2023/2024).

**Quellen:** W3C RDF-star Working Group 2024; Morph-KGCstar (SAGE 2025, DOI: 10.3233/SW-243602); https://www.w3.org/2022/08/rdf-star-wg/

---

### 7.2 CHAD-KG — NEU

**Scope:** Knowledge Graph für Kulturerbe-Objekte und Digitalisierungs-Paradata.
**Entwickler:** Barzaghi, Moretti, Heibi & Peroni (Universität Bologna, 2025).

**Key Constructs:**
- 52.080 Tripel, 14.506 Entitäten, basierend auf CHAD-AP (OWL-Ontologie)
- **Object Module:** IFLA LRM Schichten (Work/Expression/Manifestation/Item)
- **Process Module:** Digitalisierungs-Workflows mit Personal, Tools, Techniken, Zeitdaten
- Fundament: CIDOC-CRM 7.1.3 + LRMoo 1.0 + CRMdig 4.0

**Relevanz:** Modelliert sowohl Kulturerbe-Objekte als auch die vollständige Digitalisierungsprovenienz — direkt relevant für die Verknüpfung von Quelle und digitaler Repräsentation (R-M4.1, R-E2.1).

**Quellen:** Barzaghi et al. 2025 (arXiv: 2505.13276).

---

## 8. Temporal Knowledge Graphs — NEU

### 8.1 Temporal KG-Ansätze

**Scope:** Ereignisbasiertes Reasoning über temporale Daten.
**Status:** Survey-Level (2024).

**Key Ansätze:**
- **Temporal Knowledge Graphs (TKGs):** Erweitern statische KGs um zeitliche Dimensionen (Survey: arXiv 2403.04782, 2024)
- **PLEASING Framework** (2024, Neural Networks): Zweistufiges Reasoning über historische und potentielle Ereignisse mit adaptivem Gated Mechanism
- **Event-Centric TKG Construction** (2023, MDPI): Identifiziert Kernaufgaben (Event-Extraktion, temporale Relationsidentifikation, KG-Assembly)

**Relevanz:** Ergänzt CIDOC-CRMs ereigniszentrierten Ansatz durch formales temporales Reasoning. Adressiert potentiell R-S1.1 (Temporale Kontextualisierung) und R-S1.2 (Historische Referenzsysteme). Die Fähigkeit, über unvollständige oder unscharfe Daten temporal zu schließen, ist für historische Daten konstitutiv.

**Quellen:** Survey (arXiv 2024: 2403.04782); PLEASING (Neural Networks 2024); Event-Centric TKG (MDPI Mathematics 2023).

---

### 8.2 Fuzzy Temporale Modellierung — NEU

**Scope:** Unsicherheitsmodellierung für temporale Daten in Ontologien.

**Key Ansätze:**
- **ProbFuzzOnto** (2024, Int. J. Fuzzy Systems, Vol. 27, pp. 680–700): Fuzzy Bayesian Networks als Erweiterung fuzzy Ontologien. Handhabt vage, ungenaue und probabilistische Daten gleichzeitig.
- **Vague Temporal Adverbials** (IC3K 2025): Methoden für unscharfe temporale Ausdrücke ("um 1750", "im späten Mittelalter") in Linked-Data-Abfragen.

**Relevanz:** Direkt relevant für Thallers Fuzziness-als-Systemeigenschaft ([[Thaller-Synthesis#Fuzziness als Systemeigenschaft]]). ProbFuzzOnto adressiert genau die Schnittmenge von Vagheit und Probabilistik, die historische Aussagen charakterisiert. Adressiert potentiell R-E1.1 (Unsicherheitsgrade), den IvN-Baustein (Grey Numbers) und den IvT-Baustein (Linguistische Variablen) des Ivory Stack.

**Quellen:** ProbFuzzOnto (Springer 2024, DOI: 10.1007/s40815-024-01796-y); IC3K 2025.

---

## 9. LLM-gestützte Konstruktion — NEU (Methodenansatz)

### 9.1 LLM-basierte KG-Konstruktion für Kulturerbe

**Scope:** Automatisierte Extraktion strukturierter Daten aus historischen Texten mittels LLMs.
**Status:** Schnell wachsendes Forschungsfeld 2024–2025.

**Key Ansätze:**
- **ATR4CH** (Schimmenti et al. 2025, arXiv: 2511.10354): 5-Schritt-Methodik, Claude Sonnet 3.7 + Llama 3.3 70B + GPT-4o-mini in sequentieller Pipeline. F1: 0.96–0.99 für Metadatenextraktion, 0.7–0.8 für Named Entity Recognition.
- **CIDOC CRM-Based KG + LLMs** (Applied Sciences 2025): GPT-basierte Tripel-Extraktion mittels Prompt Engineering und Entitäts-Disambiguation.

**Relevanz:** Kein Datenmodell, sondern eine Methode zur *Popuierung* von Datenmodellen. Relevant für die Operationalisierung: Wenn ein Datenmodell für historische Information existiert, wie werden Daten effizient eingefügt? LLMs als Brücke zwischen unstrukturierten historischen Texten und formalen Modellen.

**Quellen:** Schimmenti et al. 2025 (arXiv: 2511.10354); Applied Sciences 2025 (MDPI, Vol. 15, Issue 22).

---

## Vergleichsmatrix: Paradigmenüberblick

| Paradigma | Ansätze | Semantische Präzision | Quellennahe Modellierung | Unsicherheit | Abwesenheit | Interoperabilität |
|---|---|---|---|---|---|---|
| **Ontologien** | CIDOC-CRM, SDHSS, Bookkeeping, Factoid/STAR, PROV-O, CRMinf | ★★★ | ★★ | ★ (CRMinf: ★★) | ★ | ★★★ |
| **Graphmodelle** | Thaller, FactGrid, Hypergraph-KGs | ★★ | ★★ | ★★ (Thaller: ★★★) | ★ | ★★ |
| **Textkodierung** | TEI XML | ★★ | ★★★ | ★ | ★ | ★★ |
| **Archivstandards** | RiC-O | ★★ | ★★ | ★ | ★ | ★★★ |
| **Aggregation** | EDM | ★ | ★ | ★ | ★ | ★★★ |
| **Linked Data Profiles** | Linked Art, MemO/NFDI4Memory | ★★ | ★★ | ★ | ★ | ★★★ |
| **Statement-Annotation** | RDF-star, CHAD-KG | ★★★ | ★★ | ★ | ★ | ★★★ |
| **Temporal KGs** | TKG-Ansätze, ProbFuzzOnto | ★★ | ★ | ★★★ | ★ | ★★ |

★ = minimal, ★★ = partiell, ★★★ = substantiell

> **Kernbefund:** Abwesenheitsmodellierung bleibt über alle Paradigmen die größte systemische Lücke. Unsicherheitsmodellierung wird von Temporal KGs und Thallers Ivory Stack am besten adressiert, aber kaum von operativen Systemen. Semantic-Precision-Leader (CIDOC-CRM, RDF-star) und Quellennahe-Leader (TEI) ergänzen sich — kein Paradigma deckt beides ab.

## Related

- [[Approaches-Overview]] — Paradigmengruppierung und -logik
- [[Evaluation-Framework]] — Methodik der systematischen Bewertung
- [[Systemic-Gaps]] — Die 5 systemischen Lücken über alle Ansätze
- [[Requirements]] — 24 Requirements als Bewertungsmaßstab
- [[Thaller-Synthesis]] — Detailvergleich Ivory Stack ↔ Requirements
- [[Project-Evidence]] — Echte Projektdaten als Evidenzbasis
