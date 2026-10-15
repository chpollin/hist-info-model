---
type: knowledge
created: 2026-03-21
updated: 2026-10-15
tags: [historical-information, absence-modeling, ontology]
status: draft
---

# Absence Modeling in Historical Information

## The Core Problem

[[Requirements]] distinguishes known missing information, systematic omissions and transmission gaps. These distinctions are requirement candidates. Their representation and operational consequences need evaluation against explicit cases. A missing triple alone supplies no account of why information is missing, but Open World Assumption (OWA) semantics does not prevent a model from recording search activities, expectations, omissions or destruction events.

The dissertation already discusses scoped open- and closed-world treatment and separates documented assertions from historical reconstruction (Pollin, 2025, pp. 140–144). The [requirements integration](https://github.com/DigitalHumanitiesCraft/ivory-kleio/blob/codex/temporal-prototype/knowledge/requirements-integration.md) connects this existing contribution to the requirement registers and the temporal experiment.

## Three Types of Absence

### 1. Known Unknowns (R-E1.3)

Information is expected to have a value but is unavailable. An illustrative case is a person's unknown birth date when the relevant parish registers were destroyed. The birth event, the missing date and the evidence for destruction require separate claims. The expectation that an exact recoverable date existed also needs justification.

This differs from not applicable, such as a corporation's biological birth date, and not recorded, where the source never supplied the expected information. These are illustrative distinctions, not findings about a particular register.

### Systematic Omissions

R-M2.2 concerns a category of information excluded by a source's creation purpose or admission rules. The inherited example concerns a guild register whose membership rules excluded women. In a historical application, the statutes and the actual recording practice must support that interpretation. Absence from one entry alone cannot establish a category-wide exclusion.

The relevant claim concerns the source's selection conditions and their scope. It must remain distinguishable from accidental loss of an individual record.

### 3. Transmission Gaps (R-M3.1)

Sources known to have existed may no longer survive. The illustrative case concerns parish registers covering 1600–1680 destroyed in a fire in 1681. The destruction event and the resulting limits on available evidence are different propositions. Their provenance must identify what supports the claimed loss.

## Representing Absence in Ontologies

The evaluation must distinguish several questions.

- Can a chosen vocabulary describe the missing item, its expected presence and the evidence for its absence?
- Can a model represent a completed search with its scope and distinguish it from a search that never occurred?
- Can operations use these claims without treating every unrecorded statement as false?
- Can later evidence revise an absence claim while retaining the earlier research state?

A dedicated absence class is one possible design. Generic event, assertion and provenance patterns may also meet a requirement. Their adequacy depends on the required behavior, not on the presence of a particular class name. No comparative evidence in this document establishes that ontologies generally fail at these tasks.

## The OWA Paradox (detail)

The inherited phrase names a modelling tension, not a logical impossibility. Under OWA, absence of a statement does not license its negation. Explicit claims about destroyed records or unsuccessful searches can still be represented. Their truth and their implications remain matters of evidence and scoped rules.

The dissertation discusses Careful Closed World and local closed-world reasoning, then distinguishes OWL inference from SHACL validation (Pollin, 2025, pp. 140–144). A validation failure identifies nonconformity to a declared shape. It does not by itself explain whether the cause is transmission loss, purposeful omission or incomplete data entry. The open requirement concerns the additional assertions and operations needed for that explanation.

## Thaller's Approach: Incompleteness Taxonomy

The inherited synthesis distinguishes the following candidate mechanisms.

- Ex 6.1, known defaults inferred from context, illustrated by an assumed religious affiliation in a homogeneous community.
- Ex 6.2, defaults explicitly declared for a dataset.
- Ex 6.3, defaults computed by a rule when information is missing.

These labels and their attribution require passage-level verification. The [Ivory corpus register](https://github.com/DigitalHumanitiesCraft/ivory-kleio/blob/codex/temporal-prototype/research-artefacts/corpus.csv) records the 2018 contribution as identified, the 2020 contribution as partially read and the 2021 presentation as known through secondary material. This revision adds no direct full-text reading of those works.

A default used in computation and a claim documenting a gap serve different purposes. The implementation must state whether a default is an analytical assumption, a source assertion or a substituted computational value.

## Convergence and Divergence with This Project

The inherited comparison associates the Ivory programme with operational management of incomplete information and this project with explicit gap representation. That distinction remains a comparison hypothesis until the primary passages are read. The proposed Lacuna concept remains a project option. Its usefulness should be compared with an explicit combination of existing assertion, event and provenance patterns.

## Visual Language for Absence

The inherited Person Tracer design uses a person-by-source grid at Station 2, Tracing.

1. Hollow circles with dashed borders indicate a known unknown, such as the illustrative missing birth date.
2. Shaded regions with dashed borders indicate a claimed category-level omission, illustrated by exclusion from guild membership.
3. A torn overlay on the parish-register row and a fire mark at 1681 indicate the illustrative transmission gap.

The Hide Absences control removes these annotations. Such a view can demonstrate the information lost when an export or interface omits absence claims. It cannot establish that a relational database or spreadsheet is incapable of storing them. Likewise, Station 5, Reflecting, should describe the concrete projection used by Model Mirror and which fields it discards. UI implementation and current behavior have not been checked in this revision.

## Sources

Pollin, C. (2025). *Modelling, Operationalising and Exploring Historical Information. Using Historical Financial Sources as an Example*. Dissertation, University of Graz, pp. 140–144. Chapter 5 read in full for this comparison.

The inherited Thaller attributions remain provisional according to the linked corpus register. They supply questions for source analysis and no independently verified coverage finding.

## Related

- [[Properties]] records the proposed properties behind the absence requirements.
- [[Systemic-Gaps]] retains the candidate gaps and their evidence limits.
- [[Requirements]] owns the requirement identifiers.
- [[Thaller-Synthesis]] retains the provisional comparison with the Ivory programme.
