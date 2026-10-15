---
type: knowledge
created: 2026-03-21
updated: 2026-10-15
tags: [historical-information, thaller, ivory-stack, synthesis]
status: draft
---

# Thaller-Synthesis

## Summary

The inherited synthesis relates the Ivory programme to this project's primitives, properties and requirements. Its correspondences remain project interpretations. The dissertation already develops tokens, factlets, source-preserving interpretation and a hypergraph proposal (Pollin, 2025, pp. 144–145, 151–154). Consolidation must first connect that existing work to the later requirement registers.

The [requirements integration](https://github.com/DigitalHumanitiesCraft/ivory-kleio/blob/codex/temporal-prototype/knowledge/requirements-integration.md) owns the cross-repository mapping. The [Ivory corpus register](https://github.com/DigitalHumanitiesCraft/ivory-kleio/blob/codex/temporal-prototype/research-artefacts/corpus.csv) owns the source-reading states. It records the 2018 contribution as identified, the 2020 contribution as partially read and the 2021 presentation as secondary only. This revision adds no full-text verification of those works.

## Konvergenz

### Thallers 8 Foundational Assumptions ↔ Unsere 3 Primitive

The table retains the inherited assumption labels and candidate correspondences for passage-level verification. Its paraphrases are not independently verified quotations from the primary texts.

| Inherited assumption label | Candidate connection in this project |
|---|---|
| A1, interpretation of past artefacts | P1 irreversibility and P2 access through traces |
| A2, interpretive limits on objectivity | P3 interpretive constitution |
| A3, separate representation and interpretation | R-A1 separation of concerns |
| A4, sources as jointly transmitted tokens | P2 and the source relationship |
| A5, interpretation depends on other tokens | S3 intertextuality and E4 context dependence |
| A6, retain source context | E2 source dependence |
| A7, recombine collections without losing context | Source provenance and retained relationships. This does not establish R-A3 logical monotonicity. |
| A8, tokens become information through interpretation, with factlets connecting both | P2 and P3 as a candidate process account |

The proposed connection to Langefors' `I=i(D,S,t)` remains an analogy to investigate through [[Information]]. A token-to-factlet account and a functional account of interpretation do not establish identical terms, temporal semantics or formal behavior.

### Thallers 4 Defizite ↔ Unsere systemischen Lücken

| Inherited deficit label | Candidate connection and limit |
|---|---|
| Passivity, limited tracing of consequences | Provenance and dependency tracking. Audit history and logical monotonicity require different tests. |
| Weak typing | Historical reference systems and contextual value interpretation |
| Unidirectionality | Tracking affected results and revising assumptions, without equating revision with R-A3 |
| Source orientation | Compare source-based evidence with event-centred reconstruction. Preserve both layers rather than adopting event-centred modelling as a universal replacement. |

### Architekturkonvergenz

The inherited architectural correspondences concern source representation, networks of interpretations, unresolved contradictions and provisional conclusions. These motivate R-A1, assertion provenance and competing perspectives. Neither retaining contradictions nor appending interpretations determines the entailment relation required for a monotonicity claim.

The dissertation treats these as requirements for active information systems and proposes a pragmatic combination of maintained technologies (Pollin, 2025, pp. 144–145). It supplies an existing basis for comparison. A claim that the whole computing stack must be replaced would need direct source evidence and a separately justified project decision.

## Der Ivory Stack

The inherited notes associate Appendix III of the 2020 contribution with an interdependent research stack. The labels below preserve the existing candidate mapping. They do not certify a complete reconstruction of the appendix or a lack of alternatives in existing systems.

### Abbildung Ivory Stack → Requirements → Bestehende Ansätze

| Inherited label | Candidate component | Requirement connection | Comparison to establish |
|---|---|---|---|
| IvI, infons | Basic information units, linked in the inherited notes to situation theory | R-A4 assertions | Compare Factoid/STAR with the required unit and attribution semantics |
| IvF, frozen algorithms | Persisting an information-producing process and its state | Interpretation as a process, reproducibility | Define state, dependencies and reopening behavior before judging existing mechanisms |
| IvN, grey numbers | Intrinsic numerical uncertainty | R-E1.1 and supported arithmetic | Compare the proposed calculus with explicitly specified alternatives. A storage format alone does not supply arithmetic. |
| IvT, linguistic variables | Contextual categories with linguistic uncertainty | R-E5.1 and R-E5.2 | Distinguish historical category variation, membership semantics and category provenance |
| IvC, fuzzy control | Conditional execution under uncertainty | R-E1.2 and operation chains | Specify the meaning of the condition and subsequent execution |
| IvG, co-reference graphs | Co-reference and weighted or competing relationships | R-E3.1 and R-E3.2 | Compare FactGrid and Factoid/STAR at equivalent information and operation scope |
| IvM, information objects | Information objects with interpretive layers | R-M4.1 and R-A1 | Compare TEI source/normalized forms and Bookkeeping Ontology layers |

The inherited hypergraph discussion also mentions IvL, but its definition and relation to IvG remain unresolved here. The source inventory and full primary analysis must settle the complete component list.

### Was die Abbildung zeigt

The mapping supplies questions for formalization. For IvF, IvT and IvC, the current documents do not establish equivalent implemented behavior in the compared systems. That is an evidence gap, not proof that contemporary systems cannot support the behavior.

Factoid/STAR and FactGrid are comparison candidates for attributed and competing statements. TEI and the Bookkeeping Ontology supply existing examples of source-related layers. The dissertation also includes explicit historical-unit definitions and conversions (Pollin, 2025, pp. 159–160, 166–168). Their relationship to uncertain arithmetic requires a declared operation contract.

### Die Interdependenz

Dependencies between value representation, context and operations should be expressed by concrete inputs, rules and results. The inherited statement that the components cannot be implemented separately requires primary verification. The bounded temporal experiment in Ivory KLEIO intentionally isolates one distinction and makes no claim to implement the full programme.

## Divergenz

### Kein explizites P3

The inherited account alternately describes interpretation as applied to information and as constitutive of it. This unresolved wording supplies no established disagreement with P3. Source analysis must distinguish the author's terminology, the dissertation's interpretation and the project's proposed formal account.

### Thallers Incompleteness-Taxonomie

The inherited Ex 6.1 known defaults, Ex 6.2 explicit defaults and Ex 6.3 triggered defaults remain candidate distinctions awaiting precise passage verification. [[Absence-Modeling]] retains the examples and distinguishes operational default substitution from evidence about missingness.

### Fuzziness als Systemeigenschaft

The inherited synthesis suggests uncertainty throughout representation and execution. Whether the primary texts require universal fuzziness or propose several distinct mechanisms remains to be established. Probability, possibility and linguistic vagueness require separate meanings and justified composition rules. Their conceptual connection does not license a shared numerical confidence scale.

### Hypergraphen

The inherited mother-child example concerns several possible mothers and children linked by a higher-order relationship. Preserve it as a question about joint hypotheses, roles and constraints. Merely collecting the participants in one hyperedge does not specify which assignments are possible or mutually exclusive.

The dissertation already proposes overlapping interpretive hyperedges for a bookkeeping entry and acknowledges that RDF-star can represent multi-entity relationships through additional structures (Pollin, 2025, pp. 151–154). The comparison therefore concerns explicit semantics and modelling effort. A native hyperedge is no proof of a general expressive impossibility for RDF.

The dissertation's use of graphoid also needs clarification. Its discussion of internal graph structure on p. 152 differs from the conditional-independence definition in note 152. This terminological issue remains open before the term becomes part of a formal contract.

## Produktivstes Ergebnis

The existing materials can be connected through a common account of source evidence, interpretation and operations. The dissertation supplies the prior argument and examples. This repository supplies candidate theoretical derivations and comparison requirements. Ivory KLEIO supplies provisional operation requirements and a bounded executable temporal contract.

A research contribution can be stated after the correspondences, differences and remaining behaviors have evidence. An unmatched label in the mapping alone establishes neither novelty nor an impossibility in existing approaches.

## Sources

Pollin, C. (2025). *Modelling, Operationalising and Exploring Historical Information. Using Historical Financial Sources as an Example*. Dissertation, University of Graz, chapter 5, pp. 111–172, read in full.

The inherited bibliography names Thaller's *On Information in Historical Sources* (2018), *On vagueness and uncertainty in historical data* (2020), and *Can Historical Information Be Represented Outside of a Graph / Hypergraph / Network?* (2021). Their consulted representations and incomplete reading states belong to the linked corpus register.

The inherited connections to Devlin's *Logic and Information* (1991), Liu and Lin's grey-systems literature and Zadeh's generalized uncertainty theory remain bibliographic leads. Those works were not read for this revision, and the proposed correspondences are unverified.

## Related

- [[Historical-Information]] owns the proposed theoretical framework.
- [[Information]] retains the proposed connection to Langefors.
- [[Primitives]] owns the proposed primitives.
- [[Absence-Modeling]] distinguishes missingness and default behavior.
- [[Approaches-Comparison]] retains inherited ratings requiring source checks.
- [[Approaches-Overview]] routes to the compared paradigms.
- [[Systemic-Gaps]] retains candidate gaps without universal impossibility claims.
