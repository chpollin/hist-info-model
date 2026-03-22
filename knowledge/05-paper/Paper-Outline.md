---
type: knowledge
created: 2026-03-21
tags: [paper, outline, data-model-foundations, historical-information]
status: stub
---

# Paper Outline

**Working title**: "Foundations for a Data Model of Historical Information"

> **Critical dependency**: This paper's argument rests on the evaluation being genuinely evidence-based. Every claim about what existing approaches can or cannot do must be grounded in concrete evidence from real projects, not in assumptions or impressionistic readings. The [[Approaches-Comparison]] must be completed with evidence before the paper can be written.

## 1. Introduction

- The problem: Historical information has formal properties that no single existing approach fully addresses. Thaller (2020) argues the entire conceptual stack of modern IT must be replaced — and proposes 9 building blocks (Ivory Stack). But there is no systematic mapping between theoretical requirements and implementation architecture.
- The gap: No paradigm-neutral, evidence-based evaluation of how existing representation approaches (ontologies, graph models, text encoding, archival standards, aggregation, linked data profiles, statement annotation, temporal KGs) meet formally specified requirements for historical information.
- The contribution: A systematic mapping between formally derived requirements (from 5 properties / 3 primitives) and Thaller's Ivory Stack, evaluated against 18 approaches across 8 paradigms using evidence from 4 real DH projects. The mapping reveals which building blocks are addressed, which remain open, and how they must interact.
- Research question: Can the formally specified requirements for historical information be systematically mapped onto Thaller's Ivory Stack — and does this mapping show which building blocks existing approaches address, which are missing, and how they must interact?

## 2. Theoretical Framework

- Historical information as a distinct domain (source-boundedness, epistemic layering, temporal imprecision)
- Informationswissenschaftliches Fundament: [[Information|Langefors I=i(D,S,t)]], DIKW-Kritik, capta (Drucker 2011)
- Berettas Pyramide der historischen Wissensproduktion
- Three primitives: [[Primitives|P1/P2/P3]] and their derivation of [[Properties|11 properties]]
- Prior work: CIDOC-CRM tradition, prosopographic tradition (Factoid/STAR), Thaller's conceptual work
- See: [[Approaches-Comparison]], [[Thaller-Synthesis]]

## 3. Requirements

- Derivation methodology: [[Dissertation-Context|Scholar-Centred Design]] → Deep Dive Sessions → [[Requirements|24 Requirements]]
- Three requirement categories: Epistemic (10), Medial (6), Semiotic (4), Structural (4)
- Full requirements catalog (or reference to appendix)
- The five [[Systemic-Gaps|systemic gaps]]

## 4. Evaluation

- [[Evaluation-Framework|Evaluation methodology]]: How each approach was assessed (structural / metadata / absent)
- 18 approaches across 8 paradigms: [[Approaches-Comparison]]
- Comparative matrix: All approaches × all requirements
- New developments 2024–2025: Linked Art 1.0, RDF-star, CRMinf, Hypergraph-KGs, MemO/NFDI4Memory, ProbFuzzOnto
- The five [[Systemic-Gaps|systemic gaps]]: R-E1.3, R-E5.2, R-M2.2, R-M3.1, R-S2.1
- **Key methodological claim**: Ratings must be evidence-based, not impressionistic
- TODO: This section cannot be written until all assessment ratings have evidence

## 5. Implementation Experiment

- Design rationale: What the implementation tests and how
- Architecture choices
- Four test cases: [[Project-Evidence]] (DEPCHA, SuGW, M³GIM, ZBZ)
- Results: Which requirements were met, which were not, and what was learned
- TODO: Implementation must precede this section

## 6. Discussion

- What the evaluation reveals about the state of historical information modeling
- The [[Absence-Modeling|absence modeling problem]] as the hardest unsolved challenge
- Honest limitations: What this study cannot show
- Self-critical positioning of own work ([[Approaches-Comparison#1.3 Bookkeeping Ontology|Bookkeeping Ontology]])
- Implications for the field
- TODO: Write after evaluation and implementation are complete

## 7. Conclusion

- Summary of contributions
- Practical recommendations
- Future work
- TODO: Write last

## Related

- [[Approaches-Comparison]]
- [[Systemic-Gaps]]
- [[Project-Evidence]]
- [[Thaller-Synthesis]]
- [[Requirements]]
