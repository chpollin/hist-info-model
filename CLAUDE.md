# Working in Historical Information Foundations

## Project Overview

This repository develops the theoretical and comparative strand of the existing historical-information research. The dissertation (Pollin 2025) supplies the Bookkeeping Ontology, DEPCHA workflows, four elaborated characteristics and source veto as a historiographic principle. The P1/P2/P3 reconstruction remains a later hypothesis. The [shared requirements integration](https://github.com/DigitalHumanitiesCraft/ivory-kleio/blob/codex/temporal-prototype/knowledge/requirements-integration.md) connects the R register, H operation candidates, dissertation pages and existing examples.

The static teaching prototype uses invented scenarios. Comparative ratings and gap flags remain exploratory artifacts. The current plan is [PLAN.md](PLAN.md), and the local navigation entrypoint is [knowledge/00-process/MOC.md](knowledge/00-process/MOC.md).

## Repository Structure

- `knowledge/01-theory/` contains the conceptual foundation, candidate distinctions and R vocabulary.
- `knowledge/02-approaches/` contains approach notes and the evaluation procedure.
- `knowledge/03-examples/` distinguishes synthetic scenarios and project evidence.
- `knowledge/04-design/` describes the teaching interface and JSON structures.
- `knowledge/05-paper/` contains the existing manuscript outline.
- `knowledge/00-process/Journal.md` records integrated transitions.
- `data/` contains the exploratory JSON artifacts.
- `site/` contains static HTML/CSS/JavaScript and locally supplied D3 visualizations.
- `scripts/` contains structural validators.

## Key Principles

- The research knowledge uses the existing Obsidian-compatible frontmatter and wikilinks.
- Ratings need evidence from a specification or documented project behavior.
- Actual source cases precede synthetic examples in historical validation; invented examples stay explicitly synthetic.
- Each document declares its maturity. Scholarly review is the operator's responsibility.
- The local knowledge map routes to the maintained files; the shared integration is the single R/H correspondence.
- Source material is distinct from agent instructions.

## Technology Constraints

- Vanilla JavaScript, with no framework, npm or build-system migration.
- D3 is supplied locally in `site/js/lib/`.
- The HTML/CSS/JavaScript site remains deployable as static files.
- JSON in `data/` remains the source for the teaching interface.

## Verification

Run `python scripts/validate_data.py` for JSON integrity. Knowledge documents retain their frontmatter, and wikilinks must resolve to existing targets. Record substantive transitions in the journal. Structural checks establish data consistency, not scholarly validity.
