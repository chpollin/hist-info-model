---
type: knowledge
created: 2026-03-21
updated: 2026-10-15
tags: [historical-information, requirements, data-modeling, requirements-engineering]
status: draft
---

# Requirements

## Summary

The R register names candidate representation requirements for historical information. The dissertation supplies the conceptual foundation and documented source-driven modelling. The [requirements integration](https://github.com/DigitalHumanitiesCraft/ivory-kleio/blob/codex/temporal-prototype/knowledge/requirements-integration.md) owns the complete correspondence to dissertation pages, existing examples, H operation candidates and specific open questions.

The identifiers retain continuity with [requirements.json](../../data/requirements.json) and the synthetic examples. The primitive/property connections are analytical hypotheses rather than proven derivations. Historical adequacy and comparative capability assessments require explicit evidence.

## Methodische Herleitung

### 1. Empirische Grundlage: Deep Dive Sessions

Pollin (2025, pp. 89–98) connects source work and requirements engineering. Collective tax actors motivate Group, rights motivate Right, and wording in the Wheaton daybook motivates AgentMention. Network analysis and hierarchical aggregation provide documented research tasks. These are existing requirement-bearing cases, not evidence that the entire later R taxonomy has been empirically validated.

### 2. Theoretische Abstraktion: Eigenschaften → Requirements

[[Historical-Information]] distinguishes the dissertation's characteristics and source veto from the later [[Primitives]] reconstruction. [[Properties]] organizes candidate distinctions. A connection to a property supplies a rationale to examine, not logical necessity or universal scope.

### 3. Validierung: Echte Projekte

[[Project-Evidence]] distinguishes dissertation-backed DEPCHA examples from candidate extensions to SuGW, M³GIM and the Zentralbibliothek Zürich workflow. [[Examples-Overview]] contains invented teaching cases. A source location, attributed interpretation, defined operation and counterexample are required before treating an example as a historical test fixture.

## Offene Fragen

- Which requirements are necessary for a named operation and which are optional contextual descriptions?
- Which proposed distinctions add value to the dissertation's existing architecture?
- Which source and implementation evidence supports each capability comparison?
- How do preservation of old assertions, revision of acceptance and non-monotonic reasoning interact?
- Which concerns have no direct H counterpart and must remain explicitly represented?

## Requirements nach Gruppe

Labels preserve the existing vocabulary. The last column states the present interpretation to be evaluated. JSON gap flags and ratings are legacy exploratory annotations, not accepted research results.

### Epistemisch (10)

| ID | Label | Candidate property | Interpretation to evaluate |
|---|---|---|---|
| R-E1.1 | Uncertainty Degrees | E1 | Preserve the stated uncertainty form. Graded certainty is required only with defined meaning and evidence. |
| R-E1.2 | Alternative Interpretations | E1 | Retain competing readings without forced resolution; distinguish exclusion from coexistence. |
| R-E1.3 | Explicit Knowledge Gaps | E1 | Distinguish known missing, not expected, unknown and not applicable when evidence warrants it. |
| R-E2.1 | Provenance | E2 | Connect assertions to sources and transformations. |
| R-E2.2 | Epistemic Distance | E2 | Describe evidentiary/derivation relations; no reliability score follows from path length. |
| R-E3.1 | Perspective Coexistence | E3 | Attribute different perspectives on a shared referent. |
| R-E3.2 | Perspective Relations | E3 | Specify agreement, contradiction, subsumption and independence separately from operational dependency. |
| R-E4.1 | Interpretation Metadata | E4 | Identify the interpreter, time, framework and purpose relevant to the operation. |
| R-E5.1 | Temporal Categorization | E5 | Distinguish historical category validity from later changes in research classifications. |
| R-E5.2 | Category Provenance (emic/etic) | E5 | Attribute source categories and analyst categories and preserve their relation. |

### Medial (6)

| ID | Label | Candidate property | Interpretation to evaluate |
|---|---|---|---|
| R-M1.1 | Source Type as Dimension | M1 | Represent source-type differences where they affect a reading or operation. |
| R-M2.1 | Creation Purpose | M2 | Separate evidenced historical purpose from later research use. |
| R-M2.2 | Systematic Omissions | M2 | Record an evidenced exclusion policy and scope; absence alone does not prove one. |
| R-M3.1 | Transmission Gaps | M3 | Link evidence of former existence, a loss event and its informational consequences. |
| R-M4.1 | Carrier-Content Separation | M4 | Keep physical carrier and represented content separately describable where the material requires it. |
| R-M4.2 | Material as Information | M4 | Link a material observation to the interpretation it supports. |

### Semiotisch (4)

| ID | Label | Candidate property | Interpretation to evaluate |
|---|---|---|---|
| R-S1.1 | Temporal Contextualization | S1 | Distinguish event, recording, copying and research times when needed. |
| R-S1.2 | Historical Reference Systems | S1 | Retain historical units/calendars and attributed conversions, including their validity. |
| R-S2.1 | Readings / Normalization | S2 | Preserve diplomatic and normalized forms and their transformation relationship. |
| R-S3.1 | Source Relations | S3 | Distinguish copying, translation, commentary and citation from contradiction between assertions. |

### Strukturell (4)

| ID | Label | Existing foundation | Interpretation to evaluate |
|---|---|---|---|
| R-A1 | Separation of Concerns | Bookkeeping, pp. 100–108 | Distinguish source representation and interpretive assertion while acknowledging that representation itself involves choices. |
| R-A2 | Event-Centricity | CIDOC-CRM/Bookkeeping discussion, pp. 64–70, 101–103 | An architecture candidate for event-oriented cases, not a proven obligation for every source type. |
| R-A3 | Monotonicity | Hypergraph extension, pp. 151–154 | Evaluate preservation of earlier evidence separately from logical monotonicity and changing scholarly acceptance. |
| R-A4 | Assertion-Based | Factoid/STAR, pp. 71–77 | Attribute scholarly assertions without forcing source objects or activities into one assertion wrapper or an undefined confidence scale. |

## Noch zu leisten

The [integrated open questions](https://github.com/DigitalHumanitiesCraft/ivory-kleio/blob/codex/temporal-prototype/knowledge/requirements-integration.md#open-questions-from-the-existing-material) name the remaining semantic issues. [[Evaluation-Framework]] defines how a concrete comparison gains evidence. A fixture or implementation is commissioned from the applicable requirement and operation contract, rather than from the legacy gap flags.

## Sources

Pollin, C. (2025). *Modelling, Operationalising and Exploring Historical Information. Using Historical Financial Sources as an Example*. University of Graz. [Published record](https://unipub.uni-graz.at/obvugrhs/12127700). Chapters 1–7 read for the requirements integration.

Inherited theoretical references are discussed in [[Dissertation-Context]] and [[Thaller-Synthesis]] with their reading limits.

## Related

- [[Information]]
- [[Properties]]
- [[Dissertation-Context]]
- [[Systemic-Gaps]]
- [[Approaches-Overview]]
- [[Evaluation-Framework]]
- [[Project-Evidence]]
