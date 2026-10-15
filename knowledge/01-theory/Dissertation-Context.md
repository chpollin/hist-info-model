---
type: knowledge
created: 2026-03-22
updated: 2026-10-15
tags: [dissertation, bookkeeping-ontology, depcha, historical-information]
status: draft
---

# Dissertation-Context

## Summary

The dissertation *Modelling, Operationalising and Exploring Historical Information. Using Historical Financial Sources as an Example* provides the theoretical, empirical and methodological foundation of this project (Pollin, 2025). Its title page gives 2025. The previously recorded DOI retains its 2024 identifier.

Chapter 3 develops human agency, context sensitivity, multiperspectivity and uncertainty as four factors. The source-veto principle constrains interpretations within the same argument. Chapter 4 already compares historical-information models and financial ontologies, develops scholar-centred requirements and explains the Bookkeeping Ontology. The present work consolidates these results with the later proposals in this repository and the implementation work in ivory-kleio.

## Dissertation research questions

- Modelling concerns the characteristics of historical information and their consequences for digital representation, including human agency, context, uncertainty, provenance and domain semantics. The dissertation develops and integrates Bookkeeping, CIDOC-CRM and TEI.
- Operationalising concerns the transformation of sources through TEI XML annotation and XSLT pipelines into RDF within GAMS, while preserving source integrity.
- Exploring concerns scholar-centred interfaces informed by collaborative source analysis and historians' research practices, including Collections, Edition and Dashboard views.
- The LLM theme examines support for modelling, operationalisation and interface development through Promptotyping.

## Four factors and the source-veto principle

The dissertation names four factors on p. 35 and develops them in §§3.2.1–3.2.4. Their grounding combines literature, source examples and project experience. This is an articulated account of historical information, rather than an experimentally validated exhaustive taxonomy.

1. Human agency concerns the interpretive activity through which historical data becomes meaningful information, pp. 35–36.
2. Context sensitivity concerns the reconstruction of temporal, cultural, social and epistemic conditions, pp. 36–37. Interpreting “bushell corn” in a Massachusetts daybook requires regional agricultural practices, local trading standards and the merchant's bookkeeping conventions.
3. Multiperspectivity concerns the coexistence of plausible interpretations produced through different methods and source selections, pp. 37–38. The discussion of Baltic timber measurements illustrates such differences.
4. Uncertainty encompasses vagueness, inconsistency, incompleteness, polyvalence and negation, pp. 38–43. These require distinct treatment. A definite negative statement has a different logical role from a missing value.

The source-veto principle is discussed on p. 33 and included in the definition on p. 55, drawing on Koselleck (1977). Sources may invalidate unsupported interpretations without guaranteeing a final truth. The former repository grouping of “five dissertation properties” placed this principle alongside the four factors. That grouping is a later reconstruction and should be identified as such.

The definition on p. 55 describes historical information as contextualised interpretations of past events, conditions or states, constructed through human agency and critical analysis of fragmentary sources. Its provisional character and evidential constraints remain part of that definition.

## Existing comparison of representation approaches

Chapter 4 already examines CIDOC-CRM and its extensions, including LRMoo/FRBRoo, CRMsci, CRMgeo and SDHSS, alongside Factoid/STAR, PROV-O and the Web Annotation Data Model (§4.5.1, pp. 64–81). It discusses context sensitivity, assertions, source connections, provenance and limitations in uncertainty handling. The examples include source-based assertions, competing interpretations of measurement units and chains of scholarly interpretation.

The financial comparison covers XBRL, REA, FIBO, OCE and COEX (§4.5.2, pp. 81–88). It distinguishes their conceptual foundations and assesses their applicability to historical financial sources. This comparison informs the Bookkeeping Ontology.

The proposed [[Evaluation-Framework]] extends that work through explicit requirement identifiers, traceable evidence and comparison across representation paradigms. Its contribution would be a more reproducible and broader evaluation. Comparison of existing approaches is already part of the dissertation.

## Bookkeeping Ontology

The ontology combines REA exchange patterns, CIDOC-CRM documentation structures and SKOS classifications. The dissertation describes three architectural layers on p. 100.

- Economic reality is represented through transactions and transfers.
- Source documentation is preserved through Entry, UnitMention and AgentMention, alongside accounting-document structures.
- Historical context and modern interpretation support measurement and currency interpretation, including conversion relationships.

The distinction between unit definitions and historical attestations is developed on pp. 106–108. UnitMention retains the textual expression and documentary context, while Conversion expresses a deterministic transformation between units. This provides an existing point of connection to later requirements concerning source values, interpreted values and operations.

Version 1.2 remained in DEPCHA workflows. Its treatment of services combined inheritance from the activity and human-made-thing branches. Version 1.3 introduced a more precise hierarchy, including a distinction between service rights and service delivery, but was not implemented in DEPCHA (pp. 99–100). The dissertation explains the resulting tension between semantic precision and practical complexity in markup, transformation and interfaces.

The model also covers collective economic agents, economic rights and liabilities, hierarchical account categories, subtotals and totals, and historical measurements. These domain structures remain substantive results. Their preservation or replacement in a later implementation requires an explicit mapping.

Uncertainty remains incompletely resolved. The dissertation identifies limitations at the levels of ontology, encoded data and data structure, alongside layered contexts and practical feasibility (pp. 109–110).

## Scholar-centred requirements

Scholar-centred design combines user-centred design with requirements engineering (§4.6, pp. 89–98). Deep-dive sessions between 2017 and 2020 combined source analysis, TEI XML annotation exercises, interdisciplinary questions and rapid prototyping. The dissertation documents how this work shaped the model.

- Tax-record analysis motivated collective agents through Group.
- The Rentrechnung motivated the representation of grazing rights through Right.
- Daybook entries concerning intermediary participation motivated the by property and AgentMention (p. 92).
- The social-history use case connects transaction networks with family, gender and institutional relationships (pp. 95–96).
- The economic-history use case connects hierarchical aggregation, category comparisons and temporal analysis to the Basel accounts (pp. 97–98).

These requirements arise from source structures, explicit research needs and interpretive practices. The repository's [[Requirements]] should connect its proposed abstractions back to this evidence. An unresolved ethical modelling problem concerning records of enslaved people is documented on pp. 92–93. It remains a limitation of the existing work.

## DEPCHA

DEPCHA, the Digital Edition Publishing Cooperative for Historical Accounts, provides the implementation context. It uses the GAMS infrastructure with Fedora, a Blazegraph triple store, Apache Cocoon and IIIF. Its source collections span medieval tax records and later accounting records. The Collections, Edition and Dashboard views connect source access, semantic representation and exploration. Further project evidence is maintained in [[Project-Evidence#DEPCHA]].

## Consolidation with the current projects

[[Historical-Information]], [[Primitives]] and [[Properties]] contain later analytical proposals. Their necessity, sufficiency and contribution beyond the dissertation have not been established. The requirement catalogue and its proposed evaluation similarly retain the validation tasks documented in [[Requirements]] and [[Evaluation-Framework]].

The [shared requirements integration](https://github.com/DigitalHumanitiesCraft/ivory-kleio/blob/codex/temporal-prototype/knowledge/requirements-integration.md) connects dissertation results, the proposals in this repository and ivory-kleio. It is the canonical cross-project mapping. This document supplies the dissertation evidence rather than duplicating that mapping.

## Sources

Pollin, C. (2025). *Modelling, Operationalising and Exploring Historical Information. Using Historical Financial Sources as an Example.* Dissertation, University of Graz. Title-page year of the inspected full text. [Published record](https://unipub.uni-graz.at/obvugrhs/12127700), URN `urn:nbn:at:at-ubg:1-220602`.

Pollin, C. & Vogeler, G. (2022). *Bookkeeping Ontology Version 1.2.* https://gams.uni-graz.at/o:depcha.bookkeeping.

Pollin, C. & Vogeler, G. (2024). *Bookkeeping Ontology Version 1.3.*

Thaller, M. (2018). *On Information in Historical Sources.*

Koselleck, R. (1977). *Standortbindung und Zeitlichkeit.*

Drucker, J. (2011). Humanities Approaches to Graphical Display. *Digital Humanities Quarterly, 5*(1).

Beretta, F. (2024). *The Pyramid of Historical Knowledge Production.*

The dissertation passages cited above were checked in full text. The remaining entries preserve existing research connections. Their original full texts were not rechecked in this consolidation.

## Related

- [[Historical-Information]] connects the dissertation factors with the later analytical proposals.
- [[Properties]] retains the proposed dimensions and their open relationships.
- [[Approaches-Comparison]] records the wider comparison and Bookkeeping assessment.
- [[Project-Evidence#DEPCHA]] connects the account to project material.
- [[Thaller-Synthesis]] develops the existing comparison with Thaller.
