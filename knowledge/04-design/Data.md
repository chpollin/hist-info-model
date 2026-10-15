---
type: design-document
created: 2026-03-21
updated: 2026-10-15
tags: [json-schema, data-documentation, validation]
status: draft
---

# Data Documentation

Version 2.0 (M17) records the scenario-based JSON structure. The actual [data directory](../../data/) owns the current values and inventories. The shapes below document the existing interface rather than certify the scientific validity of their content.

The [canonical requirements integration](https://github.com/DigitalHumanitiesCraft/ivory-kleio/blob/codex/temporal-prototype/knowledge/requirements-integration.md) relates the dissertation, R-IDs and H-candidates. [[Project-Evidence]] records potential real project material whose case-level extraction remains open.

## File Overview

| File | Function | Evidence boundary |
|---|---|---|
| [primitives.json](../../data/primitives.json) | P1/P2/P3 hypothesis statements | Proposed analytical conditions |
| [derivation_graph.json](../../data/derivation_graph.json) | Proposed primitive/property relations | No validated deductive proof |
| [requirements.json](../../data/requirements.json) | R-IDs and candidate conditions | Requirement-level validation incomplete |
| [evaluation_matrix.json](../../data/evaluation_matrix.json) | Stored ratings and justifications | Provisional judgements, no measured coverage |
| [scenario_a.json](../../data/examples/scenario_a.json) | Account-book teaching case | Synthetic |
| [scenario_b.json](../../data/examples/scenario_b.json) | Prosopographic teaching case | Synthetic |
| [scenario_c.json](../../data/examples/scenario_c.json) | Witness/edition teaching case | Synthetic |
| [scenario_d.json](../../data/examples/scenario_d.json) | Guild-dispute teaching case | Synthetic |
| [requirement_examples.json](../../data/examples/requirement_examples.json) | Requirement-to-example links | Illustrative mapping |

The DataLoader may load theory and rating files without directly visualising them. JSON integrity and scholarly validation are separate checks.

## Schema: primitives.json

```
{
  primitives: [
    {
      id: string                    // "P1", "P2", "P3"
      label_en: string
      label_de: string
      formal_notation: string
      description_en: string
      description_de: string
      distinctness_test_en: string
      distinctness_test_de: string
    }
  ],
  meta: {
    epistemic_status: string
    observation_level: string
    derivation_criterion: string
  }
}
```

The necessity/distinctness texts are hypotheses. In particular, temporal irreversibility is not a validated deduction of uncertainty.

## Schema: derivation_graph.json

```
{
  nodes: [
    {
      id: string                    // P1–P3, E1–E5, M1–M4, S1–S3
      type: "primitive" | "property"
      group: "primitive" | "epistemic" | "medial" | "semiotic"
      label_en: string
      label_de: string
      description_en: string
    }
  ],
  edges: [
    {
      source: string | string[]
      target: string
      derivation_type: "single" | "combined"
      label_en: string
    }
  ],
  meta: { ... }
}
```

Structural checks require unique node identifiers, valid edge endpoints and acyclicity. The recorded combined edges are `["P1","P2"] → S3` and `["P2","P3"] → M2`. Such a well-formed graph does not prove the proposed philosophical derivations.

## Schema: requirements.json

```
{
  requirements: [
    {
      id: string                    // R-E1.1 through R-A4
      label_en: string
      label_de: string
      derived_from: string | null
      group: "epistemic" | "medial" | "semiotic" | "structural"
      test_condition: string
      is_systemic_gap: boolean
      gap_category: null | "absence_modeling" | "category_provenance" | "normalization"
      scenario_assignments: string[]
    }
  ],
  systemic_gaps: string[]
  systemic_gap_analysis: { ... }
}
```

R-IDs must remain unique and references must resolve. The structural candidates R-A1–R-A4 use null `derived_from`. Legacy `is_systemic_gap` and `systemic_gaps` fields record candidate concerns R-E1.3, R-E5.2, R-M2.2, R-M3.1 and R-S2.1. Their names do not make them established cross-system findings.

## Schema: evaluation_matrix.json

```
{
  approaches: [
    {
      id: string
      label: string
      year: string
      source: string
      description_en: string
      note?: string
    }
  ],
  ratings: {
    [approach_id]: {
      [requirement_id]: {
        level: "structural" | "metadata" | "absent"
        justification: string
      }
    }
  },
  coverage: { ... }
}
```

Approach and requirement references must resolve. Every stored rating has its level and justification. The `coverage` object is legacy provisional assessment data. It is not an empirical performance measure or a completed literature result. [[Evaluation-Framework]] governs evidence needed to adopt an assessment.

## Schema: scenario_a.json

The synthetic account-book case uses `id`, `title_en/de`, `setting`, `source`, `persons[]`, `transactions[]` and `reference_systems[]`.

- `date.value` can retain partial notation such as `"1480-06"`.
- `date.certainty` stores the fixture labels `"high"`, `"medium"` and `"low"`. They have no calibrated historical meaning.
- `date.uncertainty_type` describes the intended uncertainty kind.
- `amount.value_candidates: [2000, 2500]` is an invented alternative reading.
- `role_emic` and `role_etic` distinguish source and researcher categories.
- `temporal_layers` distinguishes `event_time`, `recording_time` and `interpretation_time`.

A partial date, discrete alternatives and graded confidence require different semantics. The fixture does not define a common uncertainty calculus.

## Schema: scenario_b.json

The synthetic prosopographic case uses `id`, `title_en/de`, `setting`, `sources[]`, `persons[]`, `epistemic_distance_example`, `cross_references` and `monotonicity_example`.

- `source.systematic_omission = { excluded_category, reason, requirement }` records a scenario premise.
- `source.transmission_gap = { cause, known_contents, requirement }` records the fictional loss event.
- `person.birth.known_unknown = true` and `reason` expose an explicit gap.
- `person.name_variants[]` retains `form`, `source` and diplomatic/normalised type.
- `person.identifications[]` stores researcher, year, framework, confidence and evidence.
- `person.perspective_relations` stores typed relations.
- `person.absence_from_sources` stores the fixture's omission descriptions.
- `cross_references.scenario_d` links the council appearance to the shared synthetic dispute.

Source-chain distance is not a calibrated reliability score. The synthetic editorial example retains distinct diplomatic and normalized forms; source-chain distance carries no automatic reliability value.

## Schema: scenario_c.json

The synthetic edition case uses `id`, `title_en/de`, `setting`, `witnesses[]`, `stemma`, `text_passage` and `carrier_content_separation`.

Witnesses include material features and `informational_significance`. The stemma uses copy, abbreviation and possibly-derived-from relations with fixture certainty labels. Per-witness `text_diplomatic` and `text_normalized` retain parallel readings. Variant analysis separates orthographic and substantive differences. The manuscript descriptions and relations are invented.

## Schema: scenario_d.json

The synthetic dispute case introduced in M17 uses `id`, `title_en/de`, `setting`, `event`, `sources[]`, `categorizations[]`, `interpretive_chain[]`, `perspective_comparisons[]` and `cross_references`.

- `event` contains `id`, `label_en/de`, `date`, `place`, `participants[]` and `intersection`.
- Source objects include `level`, `perspective`, `text_diplomatic`, `text_normalized`, `text_translation`, `event_characterization`, `meier_characterization`, `blind_spots[]` and `temporal_layers`.
- Categories include `label_original`, `framework`, `framework_type` and `connotation`.
- Interpretive-chain entries contain `information_dimensions` and `what_is_preserved`, `what_is_lost` and `what_is_added`.
- Comparisons contain `agreement`, `unique_to_a`, `unique_to_b`, `contradiction` and `tension`.
- Cross-references link the same invented person/event to scenario B.

The dimension values count fields chosen for this teaching case. Later representations depend on earlier ones, so the accounts are not independent evidence. The event note preserves the shared month-level dating and attributes the finer September 15 reading to the council account. Scenario assignments include the existing D examples while retaining the earlier cases.

## Schema: requirement_examples.json

```
{
  requirement_examples: [
    {
      requirement_id: string
      title_en: string
      scenario: string
      data_path: string
      description_en: string
      with_requirement: {
        description: string
        visual: string
      }
      without_requirement: {
        description: string
        visual: string
      }
    }
  ]
}
```

Requirement IDs, scenario IDs and data paths must resolve. The example mapping assigns R-A2 and R-E5.1 to scenario D. Their entries in `requirements.json` include D and preserve the earlier assignments as additional examples.

The paired `with_requirement` and `without_requirement` examples are deliberately selected teaching projections. They do not establish what relational databases, spreadsheets or other representation systems can express.

## Cross-File References

| From | Field | To | Field |
|---|---|---|---|
| requirements.json | `derived_from` | derivation_graph.json | `nodes[].id` |
| evaluation_matrix.json | `ratings[approach][req]` | requirements.json | `requirements[].id` |
| requirement_examples.json | `requirement_id` | requirements.json | `requirements[].id` |
| requirement_examples.json | `scenario` | scenario_*.json | `id` |
| scenario_b.json | `sources[].systematic_omission.requirement` | requirements.json | `requirements[].id` |
| scenario_b.json | `cross_references.scenario_d` | scenario_d.json | person/event |
| scenario_d.json | `cross_references.scenario_b` | scenario_b.json | person/appearance |

## Related

- [[Design]] — Website architecture and teaching projections
- [[Evaluation-Framework]] — Evidence requirements
- [[Requirements]] — Candidate requirement catalogue
