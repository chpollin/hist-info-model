---
type: knowledge
created: 2026-03-22
tags: [approaches, paradigms, historical-information, evaluation]
status: draft
---

# Approaches Overview

## Summary

Die Repräsentation historischer Information wird durch ein Spektrum von Ansätzen aus verschiedenen Paradigmen adressiert. Dieses Dokument gruppiert die untersuchten Ansätze nach Paradigmen und beschreibt, was jedes Paradigma zur Modellierung historischer Information beiträgt und wo seine Grenzen liegen. Für die Detailbeschreibung und den Vergleich aller 16 Ansätze siehe [[Approaches-Comparison]].

## Paradigmen

### 1. Ontologien

Formale Spezifikationen gemeinsamer Konzeptualisierungen (Gruber 1993). Stärke: semantische Präzision, maschinenlesbare Schlussfolgerungen, Interoperabilität. Schwäche: hohe Modellierungskomplexität, Tendenz zu Vollständigkeitsanspruch, schlechte Handhabung von Unschärfe und Widerspruch.

| Ansatz | Scope | Paradigma |
|--------|-------|-----------|
| CIDOC-CRM (v7.3, 2024) | ISO 21127, kulturelles Erbe, ereigniszentriert | Referenzontologie |
| SDHSS | CIDOC-CRM-Erweiterung für Humanities (Beretta 2024) | Domain-Extension |
| Bookkeeping Ontology | REA + CIDOC-CRM für historische Finanzdaten (Pollin 2024) | Domain-Ontologie |
| Factoid / STAR | Assertionsbasiert, prosopographisch (Bradley 2015, Andrews 2024) | Assertion-Ontologie |
| PROV-O | W3C Provenance, general-purpose (2013) | Provenance-Ontologie |
| **CRMinf** (NEU) | CIDOC-CRM-Extension für Argumentation und Belief | Argumentation-Extension |

### 2. Graphmodelle

Graphbasierte Repräsentationen, die Flexibilität über formale Axiomatik stellen. Stärke: Darstellung komplexer, provisorischer Beziehungen, Hypergraphen für konkurrierende Hypothesen. Schwäche: geringe Standardisierung, wenige Implementierungen.

| Ansatz | Scope | Paradigma |
|--------|-------|-----------|
| Thaller (Ivory Stack) | Conceptual Stack, Factlets, Graphoids, Hypergraphen (2018–2021) | Design-Level |
| FactGrid | Wikibase-Instanz, 1,3M+ Items, widersprüchliche Statements | Property Graph |
| **Hypergraph-KGs** (NEU) | N-äre Relationen, HySAE, HyperGraphRAG (2024–2025) | Knowledge Hypergraph |

### 3. Textkodierung

Standards für die strukturierte Kodierung von Texten. Stärke: quellennahe Modellierung, diplomatische und normalisierte Repräsentation. Schwäche: hierarchische XML-Struktur (Overlapping-Problem), schwer mit Graphmodellen integrierbar.

| Ansatz | Scope | Paradigma |
|--------|-------|-----------|
| TEI XML (P5 v4.10.2) | De-facto-Standard für Digital Editions | XML-Schema |

### 4. Archivstandards

Standards für die Erschließung archivischer Bestände. Stärke: Provenienzprinzip, Multirelationalität. Schwäche: auf Bestandsebene konzipiert, Quelleninhalt nicht modelliert.

| Ansatz | Scope | Paradigma |
|--------|-------|-----------|
| RiC-O (v1.1, 2025) | ICA Records in Contexts, graphbasierte Archiverschließung | OWL-2 Ontologie |

### 5. Aggregation

Standards für die Harmonisierung heterogener Metadaten. Stärke: Interoperabilität, institutionsübergreifend. Schwäche: Abstraktion verliert domänenspezifische Semantik.

| Ansatz | Scope | Paradigma |
|--------|-------|-----------|
| EDM | Europeana Data Model, 50+ Mio. Objekte | RDF-Metadatenmodell |

### 6. Linked Data Profiles (NEU)

Vereinfachte, auf Nutzbarkeit optimierte Profile existierender Ontologien. Stärke: niedrige Einstiegshürde, JSON-LD-basiert, breite Adoption. Schwäche: Vereinfachung kann Ausdrucksstärke reduzieren.

| Ansatz | Scope | Paradigma |
|--------|-------|-----------|
| **Linked Art 1.0** (NEU) | JSON-LD-Profil von CIDOC-CRM, Getty-Vokabulare (Feb 2025) | Application Profile |
| **MemO / NFDI4Memory** (NEU) | Föderierter KG für historische Forschungsdaten (DE) | Föderierte Infrastruktur |

### 7. Statement-Annotation (NEU)

Mechanismen für Metadaten auf Aussagen-Ebene. Stärke: effiziente Provenienz-Annotation, kompakt. Schwäche: noch nicht vollständig standardisiert.

| Ansatz | Scope | Paradigma |
|--------|-------|-----------|
| **RDF-star** (NEU) | W3C-Erweiterung für Statement-Level-Metadaten (2024–2025) | RDF-Extension |
| **CHAD-KG** (NEU) | KG für Digitalisierungs-Paradata, CIDOC-CRM 7.1.3 (2025) | Domain-KG |

### 8. Temporal Knowledge Graphs (NEU)

Temporales Reasoning über Wissensgraphen. Stärke: formales Reasoning über Zeit, Unsicherheitsmodellierung. Schwäche: wenig Cultural-Heritage-Anwendungen bisher.

| Ansatz | Scope | Paradigma |
|--------|-------|-----------|
| **TKG-Ansätze** (NEU) | Event-basiertes temporales Reasoning (Survey 2024) | KG + Zeit |
| **ProbFuzzOnto** (NEU) | Fuzzy Bayesian Networks in Ontologien (2024) | Fuzzy Ontologie |

## Was die Paradigmen-Gruppierung zeigt

1. **Kein Paradigma deckt alles ab.** Ontologien modellieren Semantik, aber nicht Textstruktur. TEI modelliert Textstruktur, aber nicht semantische Beziehungen. Graphmodelle sind flexibel, aber nicht standardisiert.
2. **Historische Information durchschneidet alle Paradigmen.** Eine Rechnung aus dem 15. Jahrhundert braucht: TEI für die diplomatische Edition, CIDOC-CRM/Bookkeeping für die semantische Modellierung, RiC-O für die archivische Einordnung, und möglicherweise FactGrid für die prosopographische Verknüpfung.
3. **Die Requirements müssen paradigmenübergreifend formuliert sein.** Wenn ein Requirement nur von Ontologien erfüllt werden kann, ist es zu eng. Die [[Requirements]] müssen neutral gegenüber dem Repräsentationsparadigma sein.
4. **Neue Paradigmen schließen alte Lücken.** RDF-star adressiert Provenienz-Verbosität, CRMinf adressiert Unsicherheit, Hypergraph-KGs adressieren n-äre Relationen. Keines davon existierte in seiner aktuellen Form, als die ursprüngliche Evaluation durchgeführt wurde.
5. **LLM-gestützte KG-Konstruktion** (ATR4CH, CIDOC-CRM + GPT) ist kein Datenmodell, aber eine zunehmend relevante *Methode* zur Popuierung von Datenmodellen aus unstrukturierten historischen Texten.

## Gesamtzählung

| Paradigma | Bestehend | Neu (2024–2025) | Gesamt |
|-----------|----------|-----------------|--------|
| Ontologien | 5 | 1 (CRMinf) | 6 |
| Graphmodelle | 2 | 1 (Hypergraph-KGs) | 3 |
| Textkodierung | 1 | 0 | 1 |
| Archivstandards | 1 | 0 | 1 |
| Aggregation | 1 | 0 | 1 |
| Linked Data Profiles | 0 | 2 (Linked Art, MemO) | 2 |
| Statement-Annotation | 0 | 2 (RDF-star, CHAD-KG) | 2 |
| Temporal KGs | 0 | 2 (TKGs, ProbFuzzOnto) | 2 |
| **Gesamt** | **10** | **8** | **18** |

## Related

- [[Approaches-Comparison]] — Detailvergleich aller 16+ Ansätze
- [[Evaluation-Framework]] — Bewertungsmethodik
- [[Systemic-Gaps]] — Paradigmenübergreifende Lücken
- [[Requirements]] — 24 Requirements als Bewertungsmaßstab
- [[Information]] — Informationswissenschaftliches Fundament
