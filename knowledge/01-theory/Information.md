---
type: knowledge
created: 2026-03-22
updated: 2026-10-15
tags: [information-science, epistemology, foundations]
status: draft
---

# Information

## Summary

The dissertation examines information as the result of interpretation and contextualisation within historical research. Its account of data, information, knowledge and information-seeking behaviour supplies the existing foundation for [[Historical-Information]] (Pollin, 2025, chapter 3).

The research connections retained here concern selected data, interpretive knowledge, communication time and iterative inquiry. Their possible relation to P1–P3 is a later project interpretation, developed in [[Primitives]]. Those proposals do not replace the dissertation's account.

## Data and information

The inherited connection to Drucker (2011) distinguishes capta, actively selected material, from the idea of data simply given to a researcher. Schöch (2013) characterises humanities data through selective, machine-actionable abstraction. These connections support examining how selection and representation shape the material available for inquiry.

The dissertation discusses how analysis, interpretation and contextualisation transform historical data into information (pp. 32–36). Researchers examine source content in the present while reconstructing its historical meaning. A source may preserve an intended message as well as information that becomes relevant only to later questions. Its transmitted form and subsequent interpretation must therefore be distinguishable.

## DIKW hierarchy and its limits

The Data–Information–Knowledge–Wisdom hierarchy provides a framework for distinguishing forms of informational organisation. A strictly linear reading gives an inadequate account of iterative historical inquiry. Existing knowledge affects the interpretation of sources, while new source analysis can revise that knowledge.

The dissertation discusses these limitations alongside other frameworks for knowledge production. Its criticism concerns a linear or static representation of the process. It does not establish that every use of a hierarchy must deny feedback or interpretation.

## Langefors' infological equation

The dissertation discusses `I = i(D, S, t)` as an abstract account of information generated through interpretation (p. 54). It refers to Langefors (1980) through Kettinger and Li (2010).

- D denotes the available data.
- S denotes existing knowledge structures or interpretive contexts.
- t denotes temporal constraints on communication.

The earlier repository account substituted historical distance between source and interpreter for t. That substitution is unsupported by the dissertation's definition. The time conditions of communication and interpretation must remain distinct from the historical distance between an event, its recording and later research.

As a project interpretation, D can be connected with the source material made available through selection and transmission. S can be connected with the interpreter's prior knowledge, methods and situated assumptions. Historical distance may influence the contexts that need reconstruction, but it is not an alternative definition of t.

The equation helps formulate how the same data may produce different information through different interpretive resources. It does not establish that all resulting interpretations are equally valid. Their plausibility still depends on evidence and method, including the source-veto principle discussed in [[Dissertation-Context#Four factors and the source-veto principle]].

The dissertation also states that the equation is an abstract model rather than a practical database implementation. Requirements for storing an interpreting agent or tracking transformations require an additional design argument.

## Beretta's pyramid of historical knowledge production

The dissertation discusses Beretta's account of traces, factoids and factual information leading to narration, structural analysis, dynamic modelling, causal inquiry and prediction (pp. 53–54). Representation and interpretation operate throughout this account through conceptual models, critical methods, analysis and theory.

The dissertation observes that upward arrows suggest a linear progression. It proposes feedback to represent how work at different levels affects subsequent inquiry. The earlier repository statement that the pyramid already incorporated this non-linearity misrepresented that discussion.

As a later project reading, source-related levels may be connected with P2, and interpretive activities with P3. This correspondence does not demonstrate that the pyramid reduces to those proposals or that its levels are successive phases in every research process.

## Information and interpretation

The dissertation uses information-science arguments to explain the role of the cognitive agent in transforming data into information (pp. 35–36). Its discussion of Kuhlen and colleagues connects information with action and interpretation in sociocultural contexts.

The existing connection to Thaller (2018) concerns historical information's procedural and fuzzy character. In the dissertation's discussion, historians interpret signals once exchanged in historical contexts that must now be reconstructed (p. 54). Fuzziness is relevant to system design, rather than merely an error to eliminate.

This motivates the project proposal P3. It does not settle the ontological status of every information object or validate the universal formula in [[Primitives]].

## Information-seeking behaviour

The dissertation examines iterative discovery and changing research needs in its discussion of historians' information-seeking behaviour (Pollin, 2025, pp. 46–49). The inherited references connect this discussion with several complementary models.

- Wilson's model (1999), as discussed in the dissertation, concerns cycles of need, searching and use under contextual influences.
- Ellis's behavioural account (1997), as discussed in the dissertation, includes activities such as starting, linking, browsing, differentiating, monitoring and extracting.
- Kuhlthau's Information Search Process (1999), as discussed in the dissertation, connects stages of inquiry with cognitive and affective changes.
- Bates's berrypicking (1989), as discussed in the dissertation, describes how gathered information changes the direction and strategy of searching.

These connections support examining non-linearity, adaptation and user context. The previously quoted expression about recognising an unknown target when it is found remains a research connection to Vallet, Cantador and Jose (2010), rather than a general law of historians' behaviour.

[[Dissertation-Context#Scholar-centred requirements]] connects the methodological argument to documented source-analysis sessions, user stories and interface work. Requirements arise through those practices and require validation in their intended operations.

## Consequences for modelling

The existing foundation motivates the following design questions.

1. Which interpretive acts, agents, assumptions and contexts must be recoverable for a given claim or operation?
2. How can competing interpretations coexist while their evidence and differing validity remain inspectable?
3. Which temporal roles belong to events, source recording, communication and later research?
4. How can representations support revision and feedback between source examination, modelling and analysis?
5. Which parts of a process must be recorded when a static data structure represents only a selected state?

These questions connect existing knowledge to requirements. Their answers should be developed through the dissertation's cases and the implementation evidence in the [shared requirements integration](https://github.com/DigitalHumanitiesCraft/ivory-kleio/blob/codex/temporal-prototype/knowledge/requirements-integration.md).

## Sources

Pollin, C. (2025). *Modelling, Operationalising and Exploring Historical Information. Using Historical Financial Sources as an Example.* Dissertation, University of Graz, chapter 3, especially pp. 32–36, 53–55.

Langefors, B. (1966). *Theoretical Analysis of Information Systems.* Studentlitteratur.

Drucker, J. (2011). Humanities Approaches to Graphical Display. *Digital Humanities Quarterly, 5*(1).

Schöch, C. (2013). Big? Smart? Clean? Messy? Data in the Humanities. *Journal of Digital Humanities, 2*(3).

Beretta, F. (2024). *The Pyramid of Historical Knowledge Production.*

Kuhlen, R. et al. (2023). *Grundlagen der Informationswissenschaft.* 7th edition. De Gruyter Saur.

Thaller, M. (2018). *On Information in Historical Sources.*

Koselleck, R. (1977). *Standortbindung und Zeitlichkeit.*

Vallet, D., Cantador, I. & Jose, J. (2010). *Personalising Access to Digital Cultural Heritage.*

The dissertation is the checked source for the corrections to the infological equation and the discussion of the pyramid. It cites Langefors (1980) through Kettinger and Li (2010). The existing bibliography's Langefors (1966) entry is retained as a research connection without attributing the checked parameter definition to that book. Other original sources and the information-seeking models were not independently rechecked in this consolidation.

## Related

- [[Historical-Information]] connects the information-science account with historical interpretation.
- [[Primitives]] records the later analytical proposals.
- [[Dissertation-Context]] supplies the dissertation evidence and scholar-centred method.
- [[Properties]] preserves proposed conceptual dimensions for requirements work.
