---
type: design-document
created: 2026-03-21
tags: [json-schema, data-documentation, validation]
status: draft
---

# Data Documentation

**Version:** 2.0 (M17 — scenario_d.json hinzugefügt)
**Purpose:** Schema documentation for all JSON data files. Single source of truth for data structure.

---

## File Overview

| File | Purpose | Key Counts |
|------|---------|------------|
| `data/primitives.json` | 3 theoretical primitives | 3 entries |
| `data/derivation_graph.json` | DAG: P → E/M/S | 15 nodes, 12 edges |
| `data/requirements.json` | 24 formal requirements | 24 entries, 5 systemic gaps |
| `data/evaluation_matrix.json` | 7×24 rating matrix | 168 ratings + justifications |
| `data/examples/scenario_a.json` | Account book scenario | 4 persons, 4 transactions |
| `data/examples/scenario_b.json` | Prosopographic scenario | 5 sources, 4 persons |
| `data/examples/scenario_c.json` | Text edition scenario | 4 witnesses, 1 text passage |
| `data/examples/scenario_d.json` | Guild dispute scenario | 5 sources, 3 categorizations, 1 event |
| `data/examples/requirement_examples.json` | Requirement → example mapping | 24 entries |

**Note:** `derivation_graph.json` and `evaluation_matrix.json` sind weiterhin valide Theorie-Daten, werden aber von der aktuellen Website (M17) nicht direkt visualisiert. Sie werden vom DataLoader geladen und stehen für zukünftige Erweiterungen bereit.

---

## Schema: primitives.json

```
{
  primitives: [
    {
      id: string          // "P1", "P2", "P3"
      label_en: string
      label_de: string
      formal_notation: string   // Predicate logic expression
      description_en: string
      description_de: string
      distinctness_test_en: string  // What happens when removing this primitive
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

## Schema: derivation_graph.json

```
{
  nodes: [
    {
      id: string           // "P1"-"P3", "E1"-"E5", "M1"-"M4", "S1"-"S3"
      type: "primitive" | "property"
      group: "primitive" | "epistemic" | "medial" | "semiotic"
      label_en: string
      label_de: string
      description_en: string
    }
  ],
  edges: [
    {
      source: string | string[]    // Single ID or array for combined derivations
      target: string
      derivation_type: "single" | "combined"
      label_en: string
    }
  ],
  meta: { ... }
}
```

**Invariants:**
- Exactly 15 nodes (3 primitive + 5 epistemic + 4 medial + 3 semiotic)
- Exactly 12 edges (10 single + 2 combined)
- Combined edges: `["P1","P2"] → S3` and `["P2","P3"] → M2`
- Graph is acyclic (DAG)

## Schema: requirements.json

```
{
  requirements: [
    {
      id: string                    // "R-E1.1" through "R-A4"
      label_en: string
      label_de: string
      derived_from: string | null   // Property ID (E1, M2, etc.) or null for structural
      group: "epistemic" | "medial" | "semiotic" | "structural"
      test_condition: string        // Formal testable condition
      is_systemic_gap: boolean
      gap_category: null | "absence_modeling" | "category_provenance" | "normalization"
      scenario_assignments: string[]  // ["A"], ["B"], ["A","B"], etc.
    }
  ],
  systemic_gaps: string[]            // IDs of the 5 systemic gap requirements
  systemic_gap_analysis: { ... }     // OWA paradox explanation
}
```

**Invariants:**
- Exactly 24 requirements
- Group distribution: 10 epistemic, 6 medial, 4 semiotic, 4 structural
- Exactly 5 systemic gaps: R-E1.3, R-E5.2, R-M2.2, R-M3.1, R-S2.1
- 3 absence-related gaps: R-E1.3, R-M2.2, R-M3.1

## Schema: evaluation_matrix.json

```
{
  approaches: [
    {
      id: string           // "thaller", "sdhss", "cidoc_crm", etc.
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

**Invariants:**
- Exactly 7 approaches
- 168 ratings (7 × 24), each with level + justification
- Coverage: Thaller 79%, SDHSS 67%, CIDOC-CRM 63%, Bookkeeping 38%, Factoid 33%, STAR 33%, PROV-O 17%

## Schema: scenario_a.json

Account book scenario. Top-level keys: `id`, `title_en/de`, `setting`, `source` (single source object), `persons[]`, `transactions[]`, `reference_systems[]`.

Key data modeling decisions:
- **Fuzzy dates:** `date.value` can be partial ("1480-06" for month-only). `date.certainty` is "high"/"medium"/"low". `date.uncertainty_type` describes the uncertainty.
- **Value candidates:** `amount.value_candidates: [2000, 2500]` for illegible amounts.
- **Emic/etic categories:** Both present on person objects: `role_emic` (historical term) and `role_etic` (researcher's term).
- **Temporal layers:** `temporal_layers` object with `event_time`, `recording_time`, `interpretation_time`.

## Schema: scenario_b.json

Prosopographic scenario. Top-level keys: `id`, `title_en/de`, `setting`, `sources[]`, `persons[]`, `epistemic_distance_example`, `cross_references`, `monotonicity_example`.

Key data modeling decisions:
- **Systematic omissions:** Modeled on source objects: `source.systematic_omission = { excluded_category, reason, requirement }`.
- **Transmission gaps:** Modeled on source objects: `source.transmission_gap = { cause, known_contents, requirement }`.
- **Known unknowns:** `person.birth.known_unknown = true` with `reason` explaining why.
- **Name variants:** `person.name_variants[]` with `form`, `source`, and `type` (diplomatic/normalized).
- **Identifications:** `person.identifications[]` with researcher, year, framework, confidence, evidence.
- **Perspective relations:** `person.perspective_relations` with typed relations (tension, independence).
- **Absence from sources:** `person.absence_from_sources` tracking which sources omit the person and why.
- **Cross-references:** `cross_references.scenario_d` links Johann Meier's 1702 council appearance to the guild dispute in Scenario D.

## Schema: scenario_c.json

Text edition scenario. Top-level keys: `id`, `title_en/de`, `setting`, `witnesses[]`, `stemma`, `text_passage`, `carrier_content_separation`.

Key data modeling decisions:
- **Witnesses** include material features with `informational_significance` field.
- **Stemma** has typed relations: copy, abbreviation, possibly_derived_from, with certainty levels.
- **Text variants** per witness: `text_diplomatic` and `text_normalized` as parallel strings.
- **Variant analysis** distinguishes orthographic from substantive variants.

## Schema: scenario_d.json

Guild dispute scenario (NEU in M17). Top-level keys: `id`, `title_en/de`, `setting`, `event`, `sources[]`, `categorizations[]`, `interpretive_chain[]`, `perspective_comparisons[]`, `cross_references`.

Key data modeling decisions:
- **Event as hub:** `event` object with `id`, `label_en/de`, `date`, `place`, `participants[]`, `intersection` (what all sources agree on).
- **5 Sources spanning 3 centuries:** Each source has `level` (primary/secondary/tertiary), `perspective`, `text_diplomatic`, `text_normalized`, `text_translation`, `event_characterization`, `meier_characterization`, `blind_spots[]`, `temporal_layers`.
- **Categorizations:** 3 objects showing semantic drift: `label_original`, `framework` (emic/etic), `framework_type`, `connotation`.
- **Interpretive chain:** 3 levels with `information_dimensions` count and `what_is_preserved`/`what_is_lost`/`what_is_added` arrays.
- **Perspective comparisons:** Pre-computed comparison objects for source pairs with `agreement`, `unique_to_a`, `unique_to_b`, `contradiction`, `tension`.
- **Cross-references:** Link to scenario_b (Johann Meier's council appearance is this event).

## Schema: requirement_examples.json

```
{
  requirement_examples: [
    {
      requirement_id: string       // Must exist in requirements.json
      title_en: string
      scenario: string             // "scenario_a" | "scenario_b" | "scenario_c" | "scenario_d"
      data_path: string            // JSON path within scenario file
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

**Invariants:**
- Exactly 24 entries, one per requirement
- All `requirement_id` values exist in `requirements.json`
- All `scenario` values are valid scenario IDs (a, b, c, d)
- R-A2 (Event-Centricity) and R-E5.1 (Temporal Categorization) reference scenario_d

## Cross-File References

| From | Field | To | Field |
|------|-------|----|-------|
| requirements.json | `derived_from` | derivation_graph.json | `nodes[].id` |
| evaluation_matrix.json | `ratings[approach][req]` | requirements.json | `requirements[].id` |
| requirement_examples.json | `requirement_id` | requirements.json | `requirements[].id` |
| requirement_examples.json | `scenario` | scenario_*.json | `id` |
| scenario_b.json | `sources[].systematic_omission.requirement` | requirements.json | `requirements[].id` |
| scenario_b.json | `cross_references.scenario_d` | scenario_d.json | person/event |
| scenario_d.json | `cross_references.scenario_b` | scenario_b.json | person/appearance |

## Related

- [[Design]] — Website-Architektur
- [[Evaluation-Framework]] — Bewertungsmethodik
- [[Requirements]] — 24 Requirements als Kernschema
