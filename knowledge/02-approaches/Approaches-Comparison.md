---
type: knowledge
created: 2026-03-22
updated: 2026-10-15
tags: [approaches, comparison, evaluation, historical-information, consolidated]
status: draft
---

# Approaches Comparison

## Summary

These working notes retain the representation approaches and literature leads assembled for the project. Their capability statements require source passages, versioned scope and concrete cases under [[Evaluation-Framework]]. The existing [rating data](../../data/evaluation_matrix.json) record provisional judgements. They establish neither measured coverage nor system-wide limitations.

The [canonical requirements integration](https://github.com/DigitalHumanitiesCraft/ivory-kleio/blob/codex/temporal-prototype/knowledge/requirements-integration.md) relates the dissertation, R-IDs and Ivory KLEIO H-candidates. [[Project-Evidence]] identifies possible project material whose requirement-level extraction remains open. [[Examples-Overview]] supplies synthetic illustrations.

References below are retained reading leads. This consolidation did not independently reread their full texts or establish current standard versions. Version identifiers describe the recorded comparison baseline.

## 1. Ontologies

### 1.1 CIDOC-CRM (ISO 21127)

The recorded baseline is CIDOC-CRM 7.3 (2024) and ISO 21127:2023. The comparison concerns cultural heritage documentation and event-based integration.

Relevant constructs include E5 Event, E7 Activity, E13 Attribute Assignment, E52 Time-Span, E61 Time Primitive, E53 Place, E39 Actor and E73 Information Object. E13 is relevant to attributed assignments. Extensions listed for inspection are LRMoo, CRMsci, CRMgeo, CRMdig, [[#1.2 SDHSS|SDHSS]] and [[#1.6 CRMinf (Argumentation & Belief)|CRMinf]].

Review questions concern modelling effort, explicit negative evidence, uncertainty and the distinction between core support and extension patterns. A missing pattern in this notebook does not establish that the ontology cannot express it.

[[Project-Evidence#DEPCHA|DEPCHA]], [[Project-Evidence#M³GIM|M³GIM]] and [[Project-Evidence#ZBZ|ZBZ]] are candidate evidence contexts.

Retained references and reading leads:

- Doerr (2003), ISO 21127:2023 and [CIDOC-CRM](https://www.cidoc-crm.org/).
- Systematic literature review, ACM JOCCH (2025), DOI 10.1145/3771098. Its findings require full-text checking before reuse.
- CIDOC CRM-Based KG Construction Using LLMs, Applied Sciences (2025), recorded as using CIDOC-CRM v7.2. Extraction results and their scope remain to be checked.

### 1.2 SDHSS

SDHSS concerns humanities and social science research data within a CIDOC-CRM extension ecosystem. Recorded constructs include social roles and relationships, attributed propositions, temporal properties and collaborative class/property management through OntoME.

Review questions concern the exact extension patterns needed for R-IDs, dependence on managed vocabularies and the distinction between the conceptual framework and a platform implementation. [[Project-Evidence#SuGW|SuGW]] and [[Project-Evidence#DEPCHA|DEPCHA]] are possible comparison contexts, not demonstrated alignments.

Retained references and reading leads:

- Beretta (2021), Semantic Web Journal.
- Beretta (2024), “Semantic Data for Humanities and Social Sciences (SDHSS): an Ecosystem of CIDOC CRM Extensions for Research Data Production and Reuse”, DOI 10.33968/9783966270502-05.
- Beretta (2024), work on geographical places and social/spatiotemporal evolution, Taylor & Francis. The exact bibliographic record remains to be resolved.
- [OntoME](https://ontome.net), [Geovistory](https://geovistory.org) and the recorded September 2024 CIDOC CRM SIG presentation.

### 1.3 Bookkeeping Ontology

The project's own ontology requires the same evidence criteria as other approaches. The dissertation describes its integration of REA economic transactions with CIDOC-CRM documentation.

The documented architecture distinguishes economic activities (Transaction and Transfer), source documentation (Entry, UnitMention and AgentMention) and historical interpretation, including conversion systems. Version 1.2 is the DEPCHA implementation baseline. Version 1.3 is the revised conceptual design described in the dissertation, whose deployment is a separate question.

Review questions concern the correspondence between these layers and real annotations, the v1.2/v1.3 implementation boundary and the generalisability of financial patterns. [[Project-Evidence#DEPCHA|DEPCHA]] supplies the implementation context. [[Project-Evidence#SuGW|SuGW]] is a potential comparison context.

Retained references are [[Dissertation-Context]], [Bookkeeping Ontology](https://gams.uni-graz.at/o:depcha.bookkeeping), Pollin and Vogeler (2022/2024) and McCarthy (1982) on REA. The inspected dissertation is the published 2025 version, [URN urn:nbn:at:at-ubg:1-220602](https://unipub.uni-graz.at/obvugrhs/12127700).

### 1.4 Factoid / STAR

The comparison concerns source-attributed assertions, initially developed for prosopography. Relevant constructs are the factoid, source references and the STAR subject/object/predicate/source/authority arrangement with CIDOC-CRM E13.

The dissertation discusses temporal attribution and gender assignments through the cited STAR example. Review questions concern the difference between a source assertion and a scholarly interpretation, the handling of competing assertions and the cost of representing complex evidence chains. The original prosopographic scope does not by itself establish an expressive restriction to persons.

[[Project-Evidence#SuGW|SuGW]] and [[Project-Evidence#ZBZ|ZBZ]] are possible case sources. The Virtual Record Treasury of Ireland, Phase 3 (2023–2025), remains a recorded lead for a factoid-based prosopographic application.

Retained references are Pasin and Bradley (2015), Andrews et al. (2024), “Gender as Event”, and the [KCL Factoid Prosopography Ontology](https://www.kcl.ac.uk/factoid-prosopography/ontology).

### 1.5 PROV-O

The recorded baseline is the W3C Recommendation (2013). Relevant constructs include prov:Entity, prov:Activity, prov:Agent, prov:wasGeneratedBy, prov:wasDerivedFrom, prov:wasAttributedTo, prov:used, prov:wasAssociatedWith and prov:actedOnBehalfOf.

Review must distinguish derivation provenance, source custody and historical source criticism. Domain-specific assertions may require combinations with other vocabularies. That need is a modelling question, not a demonstrated incapacity of PROV-O.

[[Project-Evidence#DEPCHA|DEPCHA]] and [[Project-Evidence#ZBZ|ZBZ]] are candidate transformation contexts. Retained reference is Lebo, Sahoo and McGuinness (2013), [PROV-O](https://www.w3.org/TR/prov-o/).

### 1.6 CRMinf (Argumentation & Belief)

The recorded constructs are I1 Argumentation, I2 Belief, I4 Proposition Set and I5 Inference Making. Their version-specific definitions and numbering require checking against the selected specification.

The review question is how belief, premises and inference can support the candidate requirements for uncertainty and alternative interpretation. The former note about a planned March 2026 harmonisation is historical context, not a current completion claim.

Retained reference is [CRMinf](https://cidoc-crm.org/crminf) and CIDOC CRM SIG material.

## 2. Graph Models

### 2.1 Thaller (Ivory Stack)

The comparison concerns the conceptual designs recorded in Thaller (2018–2021). Co-references, token strings, multi-source facts, factlets, graphoids, hypergraphs and active information systems provide candidate connections to the requirements.

Recorded Ivory component identifiers include IvI (Infons), IvF (Frozen Algorithms), IvN (Grey Numbers), IvT (Linguistic Variables), IvC (Fuzzy Control), IvG (Co-Reference Graphs) and IvM (Information Objects). The component inventory and interpretation belong in [[Thaller-Synthesis]].

Review must distinguish design proposals, historical implementations and the current bounded Ivory KLEIO experiment. The latter does not establish implementation of the entire conceptual stack. Claims that this design has the highest coverage require an evidence-based comparison that is still open.

Retained references are Thaller (2018), “On Information in Historical Sources”, Thaller (2020), “On Vagueness and Uncertainty”, Appendix III, and Thaller (2021), work on historical information and graph structures.

### 2.2 FactGrid

FactGrid is retained as a Wikibase-based historical research context. Recorded constructs are items, properties, qualifiers, source references, parallel statements, SPARQL and federation. Institutional attribution and current operating figures require checking at the source.

Review questions concern community conventions, attributed conflicting statements and the distinction between an unused modelling pattern and a platform limitation.

Retained references are Simons (2023), DARIAH Open Methods (2024) and [FactGrid](https://database.factgrid.de/).

### 2.3 Hypergraph Knowledge Representation

Hyperedges represent relations over sets of vertices. Thaller's mother/child example remains a conceptual test case for dependent alternatives. It does not establish that an RDF encoding is impossible. The comparison must state which auxiliary structures, constraints and operations each representation uses.

HySAE and HyperGraphRAG remain literature leads. Their reported benchmark results do not validate the historical interpretation of the example.

Retained references are HySAE (ACM 2025), DOI 10.1145/3696410.3714549, and HyperGraphRAG (2025), arXiv:2503.21322.

## 3. Text Encoding

### 3.1 TEI XML

The recorded baseline is TEI P5 v4.10.2 (2025). Relevant constructs include teiHeader, the critical apparatus with app/lem/rdg, names and dates, standOff, choice/orig/reg, choice/sic/corr, manuscript description and unitDecl.

Review questions concern diplomatic and normalised readings, material description, overlapping annotations and links between documentary and semantic representations. A particular XML serialisation or pipeline must not stand in for a judgement about all TEI modelling options.

[[Project-Evidence#DEPCHA|DEPCHA]], [[Project-Evidence#SuGW|SuGW]] and [[Project-Evidence#ZBZ|ZBZ]] are candidate evidence contexts. Retained reference is the TEI Consortium, [TEI Guidelines](https://tei-c.org/).

## 4. Archival Standards

### 4.1 RiC-O (Records in Contexts)

The recorded baseline is RiC-O v1.1 (2025), with earlier v1.0.1 and v1.0.2 identifiers retained for provenance. Relevant constructs are rico:RecordSet, rico:Record, rico:Agent, rico:Event, rico:Place and rico:Date.

Review questions concern archival context, typed relationships, links between records and documented content, and the patterns needed for uncertain or competing descriptions. The archival focus does not establish that content representation is impossible.

[[Project-Evidence#M³GIM|M³GIM]] is the candidate implementation context, including m3gim:MusicalWork and m3gim:Performance. Retained references are ICA-EGAD (2023/2025), Clavaud et al. (2021) and [RiC-O](https://github.com/ICA-EGAD/RiC-O).

## 5. Aggregation

### 5.1 EDM (Europeana Data Model)

Relevant constructs are edm:ProvidedCHO, edm:WebResource and ore:Aggregation, together with Dublin Core, SKOS and RDF.

Review must state the aggregation task and distinguish an application profile's selected detail from the expression available through extensions. The former note about a 2024 review of 3D support remains a reading lead.

Retained references are Europeana Foundation, Silva and Terra (2024) and [EDM documentation](https://pro.europeana.eu/page/edm-documentation).

## 6. Linked Data Profiles

### 6.1 Linked Art 1.0

The recorded baseline is Linked Art 1.0, released on 19 February 2025. Relevant constructs are JSON-LD profiles of CIDOC-CRM, Getty vocabularies AAT/TGN/ULAN, bibliographic links and API-oriented data patterns. Recorded application contexts include the National Gallery of Art, Rijksmuseum, Yale Center for British Art and J. Paul Getty Trust.

The review question is which modelling choices the selected profile simplifies and which additional patterns a historical case requires. Usability and expression claims need a specified task.

Retained references are [Linked Art](https://linked.art/), the Linked Art 1.0 specification and Raemy (2024), “Linked Open Usable Data for Cultural Heritage”.

### 6.2 MemO / NFDI4Memory Knowledge Graph

The recorded scope is an ontology and federated historical research infrastructure within NFDI4Memory. Recorded constructs include extensions to NFDIcore and Culture Ontology, archival material, document hierarchies, provenance, content/entity links and identifier alignment through Wikidata and GND.

Review questions concern the separation of infrastructure, vocabulary and representation decisions and their relevance to the R-IDs.

Retained references are Ondraszek et al. (2025), DOI 10.5281/zenodo.16736125, and [NFDI4Memory project information](https://www.ieg-mainz.de/en/research/research-projects/nfdi4memory/).

## 7. Statement Annotation

### 7.1 RDF-star

The recorded comparison concerns statement-level metadata and the RDF-star/RDF 1.2 transition discussed in the dissertation. Quoted statements and reification patterns require version-specific definitions. No current W3C standardisation status is inferred from the older notes.

Review questions concern statement attribution, assertion versus quotation, provenance and encoding cost. Named graphs, PROV-O, Dublin Core, Conjectural Graphs and OCDM remain comparison leads.

Retained references are [W3C RDF-star Working Group](https://www.w3.org/2022/08/rdf-star-wg/), Morph-KGCstar (2025), DOI 10.3233/SW-243602, and provenance survey arXiv:2305.08477.

### 7.2 CHAD-KG

The recorded scope combines cultural heritage objects and digitisation paradata. CHAD-AP, an object module using IFLA LRM levels and a process module describing tools, techniques, agents and time remain the constructs to inspect.

The recorded baseline combines CIDOC-CRM 7.1.3, LRMoo 1.0 and CRMdig 4.0. Review concerns the relation between physical source, digital representation and transformation provenance.

Retained reference is Barzaghi et al. (2025), arXiv:2505.13276.

## 8. Temporal Knowledge Graphs

### 8.1 Temporal KG Approaches

Recorded leads concern temporal graph construction and reasoning. Their use of historical observations or event forecasting must be distinguished from historical source interpretation.

Review questions concern explicit time semantics, incomplete evidence and calendar/context assumptions. A temporal benchmark does not itself validate R-S1.1 or R-S1.2.

Retained references are survey arXiv:2403.04782 (2024), PLEASING (Neural Networks, 2024) and Event-Centric TKG Construction (Mathematics, 2023).

### 8.2 Fuzzy Temporal Modelling

Recorded leads concern fuzzy/probabilistic representations and vague temporal expressions. Review must distinguish fuzzy membership, probability and exclusive alternatives before comparing them with Grey Numbers or linguistic variables in the Ivory notes.

Retained references are ProbFuzzOnto, DOI 10.1007/s40815-024-01796-y, and “Vague Temporal Adverbials” (IC3K 2025). Bibliographic and full-text checks remain open.

## 9. LLM-Supported Construction (Method)

### 9.1 LLM-Based KG Construction for Cultural Heritage

These leads concern population of representation models from text. Extraction quality, formal validity and historical validity need separate evidence.

The recorded ATR4CH pipeline names Claude Sonnet 3.7, Llama 3.3 70B and GPT-4o-mini as historical experiment identifiers. These identifiers are retained without an availability or recommendation claim. Reported performance values are deferred to the source.

Retained references are Schimmenti et al. (2025), arXiv:2511.10354, and CIDOC CRM-Based KG Construction Using LLMs, Applied Sciences 15(22), 2025. H09–H11 in the canonical integration describe the existing agent-case connection.

## Comparison Matrix: Paradigm Overview

The grouping below is a review inventory. The former star ratings and coverage ranking lacked completed evidence records and are not findings.

| Group | Retained approaches | Review focus |
|---|---|---|
| Ontologies | CIDOC-CRM, SDHSS, Bookkeeping, Factoid/STAR, PROV-O, CRMinf | Source attribution, domain semantics, interpretation and inference |
| Graph models | Thaller, FactGrid, hypergraph leads | Relations, dependencies and operation semantics |
| Text encoding | TEI XML | Source representation, variants and annotations |
| Archival standards | RiC-O | Archival context and record relationships |
| Aggregation | EDM | Profiled exchange and selected detail |
| Linked data profiles | Linked Art, MemO/NFDI4Memory | Application profiles and infrastructure boundaries |
| Statement annotation | RDF-star, CHAD-KG | Attribution and transformation provenance |
| Temporal approaches | TKG leads, ProbFuzzOnto | Time, uncertainty and task-specific validation |

Absence, categories and normalisation remain candidate review areas in [[Systemic-Gaps]]. No cross-paradigm deficit or best-performing approach has been established by these notes.

## Related

- [[Approaches-Overview]] — Grouping and comparison boundaries
- [[Evaluation-Framework]] — Evidence and evaluation procedure
- [[Systemic-Gaps]] — Candidate concerns requiring validation
- [[Requirements]] — Candidate requirements
- [[Thaller-Synthesis]] — Conceptual connections to Ivory
- [[Project-Evidence]] — Project material awaiting case extraction
