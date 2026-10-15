---
type: knowledge
created: 2026-03-21
updated: 2026-10-15
tags: [gaps, owa, absence-modeling, systemic, evaluation-synthesis]
status: draft
---

# Systemic Gaps

## Summary

The requirements below identify candidate gaps in representing absence, category provenance and source readings. Their cross-paradigm scope remains unverified. [[Requirements]] is a provisional register, and [[Evaluation-Framework]] requires evidence for each approach, version and behavior before assigning a coverage judgment.

The dissertation already supplies partial answers and working examples. The [requirements integration](https://github.com/DigitalHumanitiesCraft/ivory-kleio/blob/codex/temporal-prototype/knowledge/requirements-integration.md) owns the cross-repository mapping. This document retains the candidate problems and comparison questions.

## Das OWA-Paradox

Under the Open World Assumption (OWA), a missing statement does not imply falsity. A model can nevertheless record a completed search, a documented omission or a destruction event. The question is which evidence and scoped rules support an absence claim and how operations use it. Pollin (2025, pp. 140–144) already discusses scoped closed-world reasoning and distinguishes inference from validation. OWA supplies no general proof that these requirements are inexpressible.

[[Absence-Modeling]] distinguishes the relevant absence types and default mechanisms.

## Die fünf systemischen Lücken

The inherited heading preserves existing navigation. These entries are candidate gaps whose generality remains open.

### Gap 1: R-E1.3 — Explizite Abwesenheit / Negative Evidenz

The requirement concerns explicit missingness, loss or deliberate omission, with evidence and scope. A missing database statement, a negative historical claim and a failed search are different inputs.

The inherited comparison names CRMinf beliefs and proposition sets, RDF-star statement metadata and ProbFuzzOnto probability or confidence values as comparison targets. Their ability to represent the intended distinction has not been established here. A probability of zero alone supplies no account of the historical reason for missingness. CRMinf is already discussed as a richer argumentation pattern in the dissertation (Pollin, 2025, p. 124, note 97). None of these observations warrants an `absent` judgment without the concrete model and operation.

### Gap 2: R-E5.2 — Kategorienprovenienz emic/etic

The requirement distinguishes categories used in a source from categories introduced through scholarly analysis and records who made that distinction. A vocabulary's normalization policy does not establish that it cannot retain both.

SDHSS/OntoME, Linked Art and FactGrid remain inherited comparison targets for parallel classifications, authority-vocabulary use and qualifiers. Their relevant patterns need direct specification evidence. The dissertation already preserves a source occupation label beside its normalized form and illustrates source rubrics and analytical classifications (Pollin, 2025, pp. 161–164). Whether the transformation and its scholarly rationale are sufficiently explicit remains a narrower question.

### Gap 3: R-M2.2 — Systematische Auslassungen

The requirement concerns a category omitted because of the source's creation purpose or selection conditions. A test needs both evidence for that selection and an operation that uses the declared scope. [[Absence-Modeling]] retains the illustrative guild-register example.

The inherited survey associates FAIREST with heterogeneous humanities data. No source analysis in this document establishes whether it or another approach can express the specified omission pattern. Its adequacy is `unknown` under the evaluation framework. Calling this the least addressed requirement would require a completed comparison.

### Gap 4: R-M3.1 — Überlieferungslücken

The requirement concerns sources known to have existed, evidence of their loss and the resulting limits on reconstruction. The illustrative destruction of parish registers in 1681 motivates separate claims for the event and its informational consequences.

RiC-O events and custody history, CHAD-KG process provenance, and the inherited provenance-survey record identified as arXiv:2305.08477 remain comparison leads. Their capacities and limitations need direct evidence. Describing a destruction event may meet one part of the requirement while leaving the consequences for a query unspecified. That distinction does not prove the consequences impossible to model.

### Gap 5: R-S2.1 — Lesarten/Normalisierung

The requirement concerns coexisting source and normalized forms with an explicit transformation relationship. TEI patterns such as `<choice>/<orig>/<reg>` and `<choice>/<sic>/<corr>` remain candidate mechanisms. Linked Art and RDF-star remain comparison targets for identifiers and statement metadata.

The bridge to semantic processing already exists in the dissertation's DEPCHA workflow. It preserves source notation with normalized quantities, references contextual unit definitions, and converts TEI annotations to RDF (Pollin, 2025, pp. 157–164). The CSV workflow explicitly accepts contextual losses (pp. 166–168). Open questions concern what each transformation preserves, its rule version and decision provenance, and whether later operations retain those distinctions. The general assertion that ontologies only support normalized forms is unsupported.

## Zusammenfassung: Stand 2024–2025

The historical heading identifies the inherited survey scope. It does not certify a completed survey or current specification versions.

| Requirement | Existing evidence in the dissertation | Remaining comparison question |
|---|---|---|
| R-E1.3 | Scoped open- and closed-world treatment, pp. 140–144 | Which model records absence evidence and supports the intended operation? |
| R-E5.2 | Source and normalized categories, pp. 161–164 | Which pattern retains category origin and analytical justification? |
| R-M2.2 | Source-oriented workflows and interpretive context, pp. 144–145, 155–171 | How is a documented selection rule applied to an omission claim? |
| R-M3.1 | Source provenance and preservation requirements, pp. 155–158 | How does documented loss constrain reconstruction and query results? |
| R-S2.1 | TEI-to-RDF workflow and source/normalized pairs, pp. 157–164 | Which transformation semantics and dependencies survive later processing? |

These are entry points for evaluation. They establish neither universal failure nor a ranking of the candidate gaps.

## Implikationen für die Implementierung

An absence pattern should identify the expected item, evidence and scope of missingness, and the operation that uses that claim. Compare an explicit project pattern with appropriate existing assertion, event and provenance mechanisms before proposing new primitives.

R-A3 monotonicity concerns whether an inference remains entailed when premises are added under a stated logic. Revision history, recoverable snapshots and retained competing interpretations require their own contracts. They must not be used as interchangeable acceptance criteria.

## Sources

Pollin, C. (2025). *Modelling, Operationalising and Exploring Historical Information. Using Historical Financial Sources as an Example*. Dissertation, University of Graz, chapter 5, pp. 111–172, read in full.

The approach names retained above are inherited survey leads. No additional specifications or cited third-party studies were read for this revision, so their coverage remains unverified.

## Related

- [[Absence-Modeling]] distinguishes the absence cases.
- [[Approaches-Comparison]] contains the inherited approach comparison requiring evidence review.
- [[Thaller-Synthesis]] retains the provisional Ivory mapping.
- [[Requirements]] owns the candidate requirements.
- [[Paper-Outline]] must derive contribution claims from verified comparisons.
