---
type: knowledge
created: 2026-03-21
updated: 2026-10-15
tags: [evaluation, methodology, requirements, approaches]
status: draft
---

# Evaluation Framework

## Summary

The framework evaluates specified representation and operation requirements against declared approaches and versions. [[Requirements]] remains provisional. The [requirements integration](https://github.com/DigitalHumanitiesCraft/ivory-kleio/blob/codex/temporal-prototype/knowledge/requirements-integration.md) owns the connection between this register, the dissertation and Ivory KLEIO. Coverage judgments require evidence for the stated scope.

## Bewertungsmethodik

### Evidenzquellen (priorisiert)

Published specifications establish a construct's declared semantics. A project implementation supplies evidence about what a particular workflow does. A proposed design supplies a hypothesis for implementation. Record these evidence classes separately because they answer different questions.

Read the relevant source in full before citing it. A record must state the consulted representation, version, inspected passage and limits. Inherited summaries and expert interpretation may guide investigation. Without adequate evidence, assign `unknown` rather than inferring failure.

### Dreistufige Skala

The inherited heading retains its navigation target. The original structural/metadata/absent vocabulary now has an explicit unresolved state.

| Judgment | Meaning | Evidence needed |
|---|---|---|
| `structural` | A dedicated construct or documented pattern meets the stated requirement within scope | Identify its semantics and demonstrate the required distinction or behavior |
| `metadata` | A generic annotation or extension pattern records relevant information, while part of the required semantics remains application-defined | Provide the concrete encoding and explain what operations can and cannot infer from it |
| `absent` | The evaluated version or implementation does not supply the specified behavior within the declared configuration | Give a reproducible counterexample, documented boundary or inspected implementation path and limit the finding accordingly |
| `unknown` | Evidence is missing, incomplete or ambiguous | Record the unresolved question and the source or experiment needed to decide it |

No known workaround is a search result, not proof of impossibility. `absent` must not be assigned solely because a class name is missing. A tested absence in one version or configuration does not establish impossibility for the paradigm.

### Paradigmenneutrale Anwendung

| Paradigm | Inherited comparison example | Behavior to inspect |
|---|---|---|
| Ontology | CIDOC CRM attribute assignment and generic comments | Whether actor, source, assertion and interpretive activity remain distinct |
| Statement graph | FactGrid statements and qualifiers | Whether competing claims and their dependencies survive the required query |
| Text encoding | TEI `<choice>/<orig>/<reg>` and `@cert` | Whether the intended reading distinction is explicit and transformations preserve it |
| Archival standard | RiC-O events and descriptive notes | Whether provenance events and their informational consequences are separately retrievable |
| Aggregation model | EDM agents and descriptive metadata | Whether the actual requirement and source relationship are represented, rather than a merely related entity |

These examples are evaluation targets, not preassigned scores. A generic qualifier with a documented, machine-actionable contract may satisfy behavior that a free-text comment cannot. Representation, validation, computation and persistence need separate findings.

### Aggregationsformel

Use an evidence matrix with the requirement, scope, approach version, concrete encoding, expected behavior, observed behavior, judgment and source locator. Preserve `unknown` entries visibly. No aggregate coverage percentage or weighting is justified while requirements and evidence remain provisional.

A later comparison may adopt an explicit aggregation method if its interpretation is justified and the operator requests it. Dedicated constructs and generic metadata should not be treated as equivalent merely because both can store text.

## Zu bewertende Ansätze

[[Approaches-Comparison]] and [[Approaches-Overview]] route to the inherited candidates, including CIDOC CRM, SDHSS, Bookkeeping Ontology, Factoid/STAR, PROV-O, the Ivory programme, FactGrid, TEI, RiC-O and EDM, together with the supplementary survey leads. Inclusion supplies no ranking or verified coverage judgment.

Evaluate each candidate in the representation actually consulted. Record historical specification versions as such. A later version requires fresh evidence and must not silently replace the evaluated one.

## Offene methodische Fragen

1. A review must be reproducible from passage locators, concrete encodings and expected results. Independent review can resolve ambiguous classifications after those records exist.
2. A requirement may need several constructs. Assess their combined declared behavior before labeling the result structural or metadata. Record application-specific rules explicitly.
3. A specification's expressive permission, an implemented feature and historical adequacy are different findings. The Ivory design and Bookkeeping implementation must be assessed at the stage actually evidenced.
4. R-A3 monotonicity requires a declared entailment relation and a test of what happens when premises are added. Retaining earlier research states, keeping competing interpretations and tracing revised results have separate revision and provenance contracts. None alone demonstrates logical monotonicity.
5. A historical case establishes behavior within its interpreted scope. A synthetic counterexample tests a declared contract and supplies no independent historical validation.

## Noch zu leisten

- Link each requirement to a precise dissertation passage or explicit project inference through the canonical integration.
- Select cases already documented in [[Project-Evidence]] and distinguish their read evidence from proposed examples.
- Name the construct or pattern and state expected behavior before testing the approach.
- Keep missing evidence as `unknown` and record the narrow scope of any `absent` judgment.
- Review the inherited ratings in [[Approaches-Comparison]] against these criteria before using them in a contribution claim.

## Sources

Pollin, C. (2025). *Modelling, Operationalising and Exploring Historical Information. Using Historical Financial Sources as an Example*. Dissertation, University of Graz, chapter 5, pp. 111–172, read in full. It distinguishes RDF representation, query behavior, scoped assumptions and validation, and documents implemented transformation workflows.

The evidence matrix and judgment definitions are project methodology. No additional standard specifications or independent approach evaluations were read for this revision.

## Related

- [[Requirements]] owns the provisional comparison criteria.
- [[Approaches-Comparison]] contains inherited judgments awaiting evidence review.
- [[Systemic-Gaps]] retains candidate problems and their evidence boundaries.
- [[Project-Evidence]] routes to existing application cases.
