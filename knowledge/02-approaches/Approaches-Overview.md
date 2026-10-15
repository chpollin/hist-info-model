---
type: knowledge
created: 2026-03-22
updated: 2026-10-15
tags: [approaches, paradigms, historical-information, evaluation]
status: draft
---

# Approaches Overview

## Summary

Representation models, serialisations, application profiles, platforms and construction methods serve different functions. The grouping below preserves the existing comparison inventory. It supplies review questions rather than a ranking or proof of expressive limits. [[Approaches-Comparison]] retains the associated constructs and reading leads.

The [canonical requirements integration](https://github.com/DigitalHumanitiesCraft/ivory-kleio/blob/codex/temporal-prototype/knowledge/requirements-integration.md) connects the dissertation, R-IDs and H-candidates.

## Paradigms

### 1. Ontologies

Formal conceptualisations can supply shared classes, relations and inference rules. The relevant modelling effort and treatment of uncertainty depend on the selected ontology, extensions and task.

| Approach | Recorded scope | Comparison baseline |
|---|---|---|
| CIDOC-CRM | Cultural heritage reference ontology | v7.3, 2024, ISO 21127 |
| SDHSS | Humanities/social science extensions | Beretta 2024 |
| Bookkeeping Ontology | REA/CIDOC-CRM for historical financial sources | v1.2 implementation and v1.3 design |
| Factoid / STAR | Source-attributed assertions | Pasin and Bradley 2015, Andrews et al. 2024 |
| PROV-O | Provenance vocabulary | W3C Recommendation 2013 |
| CRMinf | Argumentation and belief | Version-specific reading required |

### 2. Graph Models

Graph structures, graph databases and applications are separate comparison objects. Their schemas and constraints determine the meaning of relations.

| Approach | Recorded scope | Review boundary |
|---|---|---|
| Thaller (Ivory Stack) | Factlets, co-reference, active systems and hypergraphs | Conceptual designs from 2018–2021 |
| FactGrid | Wikibase-based historical data | Application conventions and platform patterns |
| Hypergraph leads | HySAE and HyperGraphRAG | Literature candidates from 2024–2025 |

### 3. Text Encoding

Text encoding can preserve document structure, variants and editorial annotations. Particular XML pipelines need to be distinguished from TEI's available modelling patterns.

| Approach | Recorded scope | Comparison baseline |
|---|---|---|
| TEI XML | Digital scholarly editions | TEI P5 v4.10.2 |

### 4. Archival Standards

Archival description supplies record context and relationships. The chosen profile and extensions require inspection before a claim about source content or uncertainty can be made.

| Approach | Recorded scope | Comparison baseline |
|---|---|---|
| RiC-O | Records in Contexts | v1.1, 2025 |

### 5. Aggregation

Aggregation profiles select information for exchange. A profile's omissions do not establish an expressive limit of its underlying representation technology.

| Approach | Recorded scope | Review focus |
|---|---|---|
| EDM | Europeana Data Model | Object, digital representation and aggregation |

### 6. Linked Data Profiles

Application profiles and federated infrastructures can make shared concepts usable in particular workflows. Their functions and assumptions differ.

| Approach | Recorded scope | Comparison baseline |
|---|---|---|
| Linked Art | JSON-LD profile of CIDOC-CRM with Getty vocabularies | 1.0, February 2025 |
| MemO / NFDI4Memory | Historical research vocabulary and federated infrastructure | Recorded 2025 literature leads |

### 7. Statement Annotation

Statement-level metadata concerns attribution and description of claims. Its semantics depend on quotation, assertion and the chosen specification version.

| Approach | Recorded scope | Comparison baseline |
|---|---|---|
| RDF-star | Statement-level metadata | Recorded 2024–2025 notes |
| CHAD-KG | Digitisation paradata and cultural heritage objects | CIDOC-CRM 7.1.3, LRMoo 1.0, CRMdig 4.0 |

### 8. Temporal Knowledge Graphs

Temporal reasoning must be assessed against the stated operation and evidence. Forecasting or temporal benchmark results do not by themselves establish historical adequacy.

| Approach | Recorded scope | Review focus |
|---|---|---|
| TKG approaches | Temporal graph construction and reasoning | Event time, query semantics and incomplete evidence |
| ProbFuzzOnto | Fuzzy Bayesian networks in ontologies | Distinguish membership, probability and alternatives |

## What the Grouping Supports

The existing financial-source examples suggest complementary roles for transcription, domain semantics and archival context. A justified combination depends on the research operation and material. Paradigm-neutral requirements should describe observable behaviour and permit different encodings.

[[Examples-Overview]] contains synthetic illustrations. The website's deliberately reduced relational and spreadsheet projections show selected omissions. Neither establishes that a relational database or spreadsheet is incapable of representing the omitted information.

LLM-supported KG construction remains a population method with its own extraction and validation questions. The H09–H11 connection is limited to the existing agent interpretation case described in the canonical integration.

## Inventory

The named approaches above and the reading leads in [[Approaches-Comparison]] constitute the inventory. [Rating data](../../data/evaluation_matrix.json) preserve the older provisional assessment entries and may have a narrower scope. Inventory size and coverage are not research findings.

## Related

- [[Approaches-Comparison]] — Working comparison notes
- [[Evaluation-Framework]] — Evidence requirements
- [[Systemic-Gaps]] — Candidate concerns
- [[Requirements]] — Candidate requirement catalogue
- [[Information]] — Information-science foundations
