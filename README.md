# Foundations for a Data Model of Historical Information

This repository develops the theoretical and comparative strand of the existing research on historical information. Pollin's 2025 dissertation supplies its conceptual foundation, the Bookkeeping Ontology, DEPCHA workflows and scholar-centred modelling. Ivory KLEIO develops operational specifications and a bounded temporal experiment within the same undertaking.

The [shared requirements integration](https://github.com/DigitalHumanitiesCraft/ivory-kleio/blob/codex/temporal-prototype/knowledge/requirements-integration.md) maps every R requirement and H operation candidate to dissertation passages, existing examples, evidence limits and specific open questions. The local [knowledge map](knowledge/00-process/MOC.md) routes to the maintained theoretical documents. [PLAN.md](PLAN.md) carries future work.

## Foundation and hypotheses

The dissertation elaborates human agency, context sensitivity, multiperspectivity and uncertainty, and includes source veto as a historiographic principle. The later P1/P2/P3 reconstruction is a hypothesis about their organization. Its additional explanatory value and its proposed derivations remain open.

The R register preserves representation needs, including source types, materiality, category provenance and transmission gaps. The H register emphasizes executable operations, revision and agent-mediated research. Their relationship is many-to-many. A general database engine and the agent harness remain proposed.

## Examples and comparison

The source-driven examples in the dissertation already include financial annotation, units and conversions, alternative assertions, hypergraph groupings, network exploration and hierarchical aggregation. The local scenarios are invented teaching material. Existing ratings, gap flags and simplified Model Mirror projections are exploratory artifacts, not validated evaluations or general expressiveness limits of relational databases, spreadsheets or ontologies.

The comparison is developed against named requirements, equivalent information and declared operations. Missing evidence remains unknown. A missing dedicated construct does not establish that a representation is impossible.

## Reading and implementation

- [Dissertation context](knowledge/01-theory/Dissertation-Context.md)
- [Requirement vocabulary](knowledge/01-theory/Requirements.md)
- [Project evidence](knowledge/03-examples/Project-Evidence.md)
- [Evaluation procedure](knowledge/02-approaches/Evaluation-Framework.md)
- [Ivory KLEIO knowledge](https://github.com/DigitalHumanitiesCraft/ivory-kleio/blob/codex/temporal-prototype/knowledge/INDEX.md)

The static website source lives in `site/`, JSON artifacts in `data/`, and their structural validator in `scripts/`. Historical acquisition, empirical evaluation and public release remain separate from running the teaching prototype.

## Local checks

Serve the repository root with `python -m http.server 8081`, then open `http://localhost:8081/site/index.html`. Run `python scripts/validate_data.py` for JSON structure and references. Structural validation does not validate the research claims or the historical authenticity of the synthetic scenarios.

## Source

Pollin, C. (2025). *Modelling, Operationalising and Exploring Historical Information. Using Historical Financial Sources as an Example*. University of Graz. [Published record](https://unipub.uni-graz.at/obvugrhs/12127700), URN `urn:nbn:at:at-ubg:1-220602`. The integration contains passage-level evidence and the consulted PDF identity. Other literature remains routed through the knowledge documents with its recorded reading state.
