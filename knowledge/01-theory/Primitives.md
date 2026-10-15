---
type: knowledge
created: 2026-03-21
updated: 2026-10-15
tags: [historical-information, formal-theory, epistemology]
status: draft
aliases:
  - P1
  - P2
  - P3
---

# Primitives

## Summary

P1–P3 are later analytical proposals concerning temporal irreversibility, trace mediation and interpretive constitution. The name “primitives” and the identifiers are retained for existing references. Necessity, sufficiency and logical independence have not been established. [[Historical-Information#Open relationship between factors and proposals]] records their possible relationship to the dissertation.

The formulas below preserve the existing attempt to express assumptions. Their predicates remain informal, and their universal scope is part of the proposal to be examined. They do not supply proofs or mechanically verifiable axioms.

## P1 Temporal irreversibility

The original proposal states that the referents of historical information cannot be observed again in their original occurrence.

`∀i ∈ HI, ∀s = referent(i) → ¬∃v : reproduces(v, s)`

The dissertation discusses unique, non-replicable events on pp. 38–39 (Pollin, 2025). This motivates a connection to temporal irreversibility. It does not establish the formula as a necessary or distinguishing condition of all historical information.

The distinction from mere reference to the past remains important. Reproducible experiments also concern past observations. Repeating an experimental type does not reproduce its original event. The earlier test “remove P1 and historical information becomes repeatable empirical data” therefore does not demonstrate necessity.

Historical observations of SN 1054 retain a useful boundary case. Inference from physical processes and inference from documentary traces may interact. This example does not establish access to the past without traces.

The former claim that uncertainty and category contingency disappear without P1 is withdrawn. The dissertation identifies multiple sources of uncertainty, including incomplete records, conflicting evidence and cultural or linguistic differences (pp. 38–43). The connection between these phenomena and P1 remains open.

The existing [[Thaller-Synthesis]] relates P1 to the interpretation of past artefacts in the light of present knowledge. This is a conceptual association whose explanatory value requires assessment.

## P2 Trace mediation

The original proposal makes mediation by traces a universal condition of access to historical referents.

`∀i ∈ HI → ∃t ∈ Traces : mediates(t, i, referent(i)) ∧ ¬∃directAccess(referent(i))`

The relationship between surviving material, source documentation and interpretation supplies the operational motivation. [[Dissertation-Context#Bookkeeping Ontology]] documents the existing separation of economic reality, documentation and interpretation on p. 100.

As a retrospective interpretation, that architecture can be related to P2. The architecture predates the proposal. Calling it a direct deduction from P2 would misstate the direction of the evidence.

The proposed dimensions associated with P2 include mediation, source selectivity, materiality and semiotic layers. Their relationships are recorded in [[Properties]]. The earlier count of direct and combined derivations carried no established explanatory result.

Thaller's account of source structure and transmitted tokens supplies another connection, developed in [[Thaller-Synthesis]]. The relationship between a token and a trace needs to preserve their respective definitions and levels of abstraction.

## P3 Interpretive constitution

The original proposal requires an interpretive act and an interpreting agent for historical information.

`∀i ∈ HI → ∃a ∈ InterpretationActs, ∃ag ∈ Agents : constitutes(a, i) ∧ performs(ag, a)`

Human agency in the dissertation provides the existing argument for the role of interpretation (Pollin, 2025, pp. 35–36). Its reformulation as P3 should be judged by whether it clarifies additional requirements.

Trace mediation and interpretive constitution concern different questions. The first concerns access through surviving material, while the second concerns how that material becomes meaningful information. The additional proposition that the trace–referent relationship is always underdetermined requires its own justification. A calibrated instrument remains an instructive comparison, but calibration does not remove all interpretation or establish an absolute boundary between scientific and historical information.

The dissertation describes source-based assertions in Factoid and the explicit source-and-authority structure in STAR (pp. 71–77). These are existing mechanisms for documenting interpretation. Their relation to P3 is an analytical reading of those mechanisms.

The existing comparison with Thaller concerns situated interpretation and the distinction between representation and interpretation. An unresolved reflexive problem remains. Our own formalisation is also an interpretation, even when we temporarily treat its predicates as fixed. A process-oriented treatment of that issue has not been developed.

## Methodological commitments

HI provisionally denotes information units treated as historically meaningful in a specified research context. This scope statement does not validate the universal formulas.

The notation is semi-formal. Intensional predicates such as mediates, constitutes and reproduces require contextual interpretation. The earlier definition of `derivedFrom(E, P)` as an ontologically necessary relation has not been established and is no longer used as a claim of proof.

[[Properties]] therefore records candidate associations rather than deductions. The same uncertainty applies to their relation with the dissertation factors, as maintained in [[Historical-Information]]. No unique minimal set or exhaustive classification is claimed.

## Consolidation with requirements

The [shared requirements integration](https://github.com/DigitalHumanitiesCraft/ivory-kleio/blob/codex/temporal-prototype/knowledge/requirements-integration.md) connects the dissertation, the requirement proposals and implementation evidence. A requirement may already be supported by source analysis and research practice even when its proposed derivation from P1–P3 remains unresolved.

## Sources

Pollin, C. (2025). *Modelling, Operationalising and Exploring Historical Information. Using Historical Financial Sources as an Example.* Dissertation, University of Graz, pp. 35–43, 71–77, 100.

Thaller, M. (2018, 2020, 2021). *On Information in Historical Sources; On Vagueness and Uncertainty; Historical Information and Graph Structures.*

Pasin, M. & Bradley, J. (2015). *Factoid-based Prosopography.*

The dissertation passages were checked in full text. The remaining entries retain the existing research connections and were not independently rechecked in this consolidation. Claims about Factoid and STAR above are limited to the dissertation's discussion.

## Related

- [[Historical-Information]] maintains the relationship to the dissertation factors.
- [[Properties]] develops the proposed dimensions.
- [[Thaller-Synthesis]] preserves the detailed comparison with Thaller.
- [[Approaches-Comparison]] connects the proposals to representation approaches.
- [[Dissertation-Context]] supplies the existing architectural and methodological evidence.
