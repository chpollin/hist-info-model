---
type: knowledge
created: 2026-03-22
updated: 2026-10-15
tags: [evidence, projects, depcha, sugw, m3gim, zbz, consolidated]
status: draft
---

# Project Evidence

## Summary

DEPCHA supplies documented source-driven modelling and workflow examples in Pollin (2025). SuGW, M³GIM and the Zentralbibliothek Zürich pipeline are existing candidate extensions whose concrete requirement-bearing cases still need extraction. [[Examples-Overview]] and the JSON scenarios are synthetic teaching material.

The [requirements integration](https://github.com/DigitalHumanitiesCraft/ivory-kleio/blob/codex/temporal-prototype/knowledge/requirements-integration.md) owns the dissertation locators and requirement correspondences. A documented workflow, a verified fixture and a controlled comparison establish different evidence.

## DEPCHA

The dissertation documents historical financial sources, TEI annotation, RDF transformation, the Bookkeeping Ontology and research interfaces. Version 1.2 supplies the described deployed workflow; v1.3 supplies the revised theoretical architecture (pp. 99–110).

| Existing case | Dissertation | Requirement-bearing issue |
|---|---|---|
| Collective tax actors, rights and AgentMention | pp. 89–98 | Source-driven requirements and attribution, R-A1, R-E2.1 |
| Source/interpretation layers and units | pp. 100–108 | R-A1, R-E4.1, R-S1.2 |
| Wheaton pension-entry hypergraph | pp. 151–154 | R-E1.2, R-E3.1, R-E3.2, R-A4 |
| TEI wording, quantities, units and normalized forms | pp. 158–164 | R-S2.1, R-S1.2, R-E2.1 |
| Spreadsheet-to-RDF transformation | pp. 166–168 | Transformation provenance and preservation |
| Wheaton network and Basel aggregation | pp. 198–201 | Role relations, aggregation and drill-down with documented limitations |

The timber comparison (pp. 37–38) illustrates different scholarly conversions using different evidence and methods. It is not a controlled rereading of one entry. The RDF-star example (pp. 123–125) illustrates competing assertions; its confidence numbers are not empirical observations. The hypergraph and the Rust temporal experiment have different domains and are not yet one historical demonstrator.

Public entrypoints are [DEPCHA](https://gams.uni-graz.at/depcha), the [Bookkeeping vocabulary](https://gams.uni-graz.at/o:depcha.bookkeeping), and the [edition source repository](https://github.com/MEDEAEditions/DEPCHA). Reusing a case as a fixture requires a precise source locator, checked transcription, reuse conditions and independently stated expected behavior.

## SuGW

The existing project on medieval Viennese legal transactions offers candidate cases for name variants, person identification, contextual dating and legal-event classification. Candidate correspondences are R-E1.2, R-E3.1, R-E4.1, R-E5.1 and R-S2.1. The current integration does not establish a particular identification conflict or measured scale effect. The registered project repository and its knowledge base provide the route to case extraction.

## M³GIM

The multimedia archive offers candidate material for heterogeneous source types, archival description, biography, custody and typed relations. Candidate correspondences are R-M1.1, R-M4.1, R-E2.1 and R-S3.1. Its RiC-O-related modelling must be checked against actual project data before being used as a comparison result. The registered repository is [DigitalHumanitiesCraft/m3gim](https://github.com/DigitalHumanitiesCraft/m3gim).

## ZBZ

The Zentralbibliothek Zürich workflow transforms page images through OCR into TEI. Candidate issues include marginalia, footnotes, material damage, language variation, mapping decisions and transformation provenance. They connect to R-M4.2, R-E4.1, R-E2.1, R-S2.1 and R-A1. OCR confidence concerns extraction performance; it does not quantify historical validity. The registered repository is [chpollin/zbz-ocr-tei](https://github.com/chpollin/zbz-ocr-tei).

## Cross-Project-Analyse

### Paradigmenverteilung über Projekte

DEPCHA provides the dissertation-backed TEI/Bookkeeping/RDF route. SuGW offers a textual legal-source route, M³GIM an archival/multimedia route, and ZBZ a document-transformation route. The latter routes remain candidates for extending the evidence. Neither project size nor the presence of a vocabulary establishes requirement coverage.

### Noch zu leisten

For an existing case, identify the source, interpretation, operation and expected counterexample. State which representation preserves the relevant distinction and which chosen transformation loses it. A valid source fixture and equivalent implementation comparison are necessary before reporting capability or performance findings. The existing examples are examined before adding new material.

## Sources

Pollin, C. (2025). *Modelling, Operationalising and Exploring Historical Information. Using Historical Financial Sources as an Example*. University of Graz. [Published record](https://unipub.uni-graz.at/obvugrhs/12127700). The requirements integration records the read passages and their scope.

## Related

- [[Examples-Overview]]
- [[Requirements]]
- [[Approaches-Comparison]]
- [[Evaluation-Framework]]
