---
type: knowledge
created: 2026-03-21
updated: 2026-10-15
tags: [historical-information, epistemology, data-modeling]
status: draft
---

# Historical Information

## Summary

Historical information is understood here through the dissertation's account of contextualised, source-constrained interpretation (Pollin, 2025, p. 55). Human agency, context sensitivity, multiperspectivity and uncertainty are its four developed factors. The source-veto principle constrains permissible interpretations. Their evidence and scope are maintained in [[Dissertation-Context#Four factors and the source-veto principle]].

The later proposals P1 temporal irreversibility, P2 trace mediation and P3 interpretive constitution offer a possible analytical perspective on that account. Their relationship to the dissertation remains open. They do not yet constitute a demonstrated reduction, an independent axiom system or a validated definition of historical information.

## Dissertation factors and evidential constraint

Human agency concerns the work of interpretation. Context sensitivity requires the reconstruction of the conditions under which a source was created and is interpreted. Multiperspectivity accommodates different plausible readings. Uncertainty includes distinct phenomena such as vagueness, inconsistency, incompleteness, polyvalence and negation. The dissertation develops these factors on pp. 35–43.

The source-veto principle, discussed on p. 33 and included in the definition on p. 55, limits unsupported interpretation. Treating it as a fifth item is a repository reconstruction of the dissertation's argument. Its role as an evidential constraint should remain distinguishable from the four factors.

## Later analytical proposals

[[Primitives]] retains the labels P1–P3 to preserve links to existing design material. Their current function is to make assumptions available for examination.

### P1 Temporal irreversibility

Historical inquiry concerns past events and conditions that cannot simply be observed again in their original occurrence. The dissertation discusses unique, non-replicable events on pp. 38–39. Whether irreversibility supplies a useful boundary for historical information remains open. Repeating a type of experiment is different from repeating its original occurrence.

### P2 Trace mediation

Access to past events depends on surviving traces and their transmission. Source material, its documentation and its interpretation therefore need to remain distinguishable. The Bookkeeping architecture already implements relevant distinctions, as described in [[Dissertation-Context#Bookkeeping Ontology]].

### P3 Interpretive constitution

Information becomes meaningful through interpretive acts by situated agents. This connects directly to the dissertation's account of human agency. Whether all historical source–referent relationships should additionally be called underdetermined requires a separate argument. Interpretive constitution and underdetermination should not be treated as equivalent propositions.

## Open relationship between factors and proposals

Three interpretations remain available within the existing project.

- The proposals might explain some of the dissertation factors. This requires explicit arguments for each relationship, including counterexamples and scope.
- The proposals might describe a complementary analytical level. In that case the dissertation factors and the proposals serve different purposes.
- The proposals might add formal complexity without improving the explanation of actual modelling problems. Their value would then remain limited to the assumptions they clarify.

The following are candidate connections, rather than established deductions.

| Existing factor or constraint | Candidate connection | Question to resolve |
|---|---|---|
| Human agency | P3 | Does P3 add anything beyond the established account of interpretation? |
| Context sensitivity | P1 and P3, with P2 relevant to reconstruction | How do temporal distance, available traces and interpretive context interact? |
| Multiperspectivity | P3, informed by P2 | When do different readings coexist, and what constrains their validity? |
| Uncertainty | P1 and P2, with P3 relevant to interpretive uncertainty | Which source of uncertainty is involved, and does the proposed connection explain that form? |
| Source-veto principle | P2 and its evidential use in interpretation | How can a trace constrain a claim, and how is that constraint documented? |

[[Properties]] develops the proposed dimensions. It uses the same open-association status. Neither document asserts the former single-arrow deductions.

## Connection to Thaller

The repository's existing [[Thaller-Synthesis]] connects the proposals with Thaller's assumptions about historical work, source structure and information systems. Assumptions concerning interpretation connect to P3, while source structure and transmitted tokens connect to P2. Architectural requirements are considered alongside these conceptual connections.

The recorded deficits of passivity, weak typing, unidirectionality and source orientation identify operational concerns. Their relevance should be checked against documented operations and source cases. Their derivability from P1–P3 has not been shown.

## Connection to Langefors

[[Information#Langefors' infological equation]] explains the equation `I = i(D, S, t)` through available data, existing knowledge structures and time constraints on communication, following the dissertation's discussion on p. 54.

As a project interpretation, data D can be related to mediated source material and knowledge structures S to situated interpretation. The parameter t must retain its communication-time meaning. Historical distance is a separate contextual issue and cannot be substituted for t or used as an identification with P1.

## Consolidation with implementation

The [shared requirements integration](https://github.com/DigitalHumanitiesCraft/ivory-kleio/blob/codex/temporal-prototype/knowledge/requirements-integration.md) provides the canonical connection between dissertation results, proposed requirements and ivory-kleio. Concrete operations and their evidential requirements should determine which of the analytical proposals remain useful.

The separation of source representation and interpretation already exists in Bookkeeping and Factoid/STAR as discussed in the dissertation. Later implementation work should make its own operational contribution explicit.

## Sources

Pollin, C. (2025). *Modelling, Operationalising and Exploring Historical Information. Using Historical Financial Sources as an Example.* Dissertation, University of Graz, pp. 33–43, 54–55, 100.

Thaller, M. (2018). *On Information in Historical Sources.*

Thaller, M. (2021). *Can historical information be represented outside of a graph / hypergraph / network?*

Koselleck, R. (1977). *Standortbindung und Zeitlichkeit.*

Langefors, B. (1966). *Theoretical Analysis of Information Systems.*

The dissertation passages were checked in full text. The other entries preserve existing source connections. The equation is discussed here through the dissertation, which refers to Langefors (1980) through Kettinger and Li (2010). The original works were not independently rechecked in this consolidation.

## Related

- [[Primitives]] records P1–P3 and their unresolved scope.
- [[Properties]] preserves the proposed dimensions without treating their derivation as established.
- [[Thaller-Synthesis]] develops the existing conceptual and operational comparison.
- [[Absence-Modeling]] examines the proposed treatment of absence.
- [[Approaches-Comparison]] connects the account to existing representation approaches.
- [[Dissertation-Context]] supplies the dissertation evidence.
