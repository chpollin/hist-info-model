---
type: knowledge
created: 2026-03-21
tags: [historical-information, absence-modeling, ontology]
status: draft
---

# Absence Modeling in Historical Information

## The Core Problem

Three of the five systemic gaps (R-E1.3, R-M2.2, R-M3.1) concern the modeling of absence. Historical research fundamentally depends on representing what is *not* there — not as a bug or limitation, but as an informationally significant fact.

## Three Types of Absence

### 1. Known Unknowns (R-E1.3)
**What:** A piece of information is known to be missing. The data point *must* exist (or must have existed) but is unavailable.
**Example:** Johann Meier's birth date — he was born, so a birth date exists, but the parish registers were destroyed.
**Key distinction:** Different from "not applicable" (a corporation has no birth date) and "not recorded" (information was never expected to exist).

### 2. Systematic Omissions (R-M2.2)
**What:** An entire category of information is absent from a source type due to its creation purpose.
**Example:** Women absent from guild registers — not because individual entries are lost, but because guild statutes defined membership categories as male.
**Key distinction:** This is a property of the *source type*, not of individual records. It is not accidental, it is structural.

### 3. Transmission Gaps (R-M3.1)
**What:** Sources known to have existed are now lost.
**Example:** Parish registers 1600–1680 destroyed in the 1681 fire.
**Key distinction:** The gap is itself a historical fact. The *absence* of the records is informational — it tells us about the conditions of preservation.

## Why Ontologies Fail at Absence

Three structural causes:

1. **Positive bias of knowledge representation.** Ontologies describe what exists. Classes, properties, and instances are all about presence. There is no established pattern for "this class of things should be here but isn't."

2. **Open World Assumption (OWA).** OWL and RDF operate under OWA: a missing statement means "unknown," not "false" or "informationally significant." Historical research needs OWA (because knowledge is always incomplete) AND the ability to mark specific absences as meaningful. This is a paradox within the standard knowledge representation framework.

3. **Missing formalization tradition.** Philosophy has a rich tradition of discussing negation, absence, and non-being (Heidegger's "Nichts," Sartre's "néant"). But this has not been translated into formal ontology patterns. There is no widely adopted "Lacuna" or "Absence" class in any standard ontology.

## The OWA Paradox (detail)

Historical information systems must simultaneously:
- Operate under OWA: incomplete knowledge is the norm, and open-world reasoning is correct
- Treat specific absences as closed: "We know this record existed and was destroyed" is a positive claim about a negative fact

Standard OWL cannot do both. SHACL (Shapes Constraint Language) can validate that expected data is present, but it cannot *represent* the informational significance of its absence.

## Thaller's Approach: Incompleteness Taxonomy

Thaller (2018, 2020) provides the most detailed treatment:
- **Ex 6.1: Known defaults.** Values that can be inferred from context (e.g., religion in a religiously homogeneous community).
- **Ex 6.2: Explicit defaults.** Values explicitly declared as default for a dataset.
- **Ex 6.3: Triggered defaults.** Values computed from rules when data is missing.

Thaller's approach treats incompleteness as a system-level concern, not an exception. But it focuses on *filling* gaps (defaults, inference) rather than *representing* gaps as informational.

## Convergence and Divergence with This Project

**Convergence:** Both Thaller and this project recognize that absence is not merely "missing data" but informationally significant. Both distinguish multiple types of absence.

**Divergence:** This project focuses on *representing* absence explicitly (the Lacuna concept), while Thaller focuses on *managing* absence operationally (defaults and inference). Both are needed — representation for scholarly communication, management for system behavior.

## Visual Language for Absence

The website's lacuna visualization uses three distinct visual metaphors:
1. **Known unknowns:** Hollow circles with dashed borders (the shape exists because the entity existed, but the fill is empty)
2. **Systematic omissions:** Shaded void regions (a category-level absence, not a point absence)
3. **Transmission gaps:** Torn/faded timeline segments (temporal destruction of continuous records)

The key interaction: toggling absence modeling off makes all three types *invisible* — demonstrating that standard models cannot show what they cannot represent.

## Related

- [[Properties]] — Abwesenheit als Konsequenz von M3 Selektivität und P2 Spurenvermitteltheit
- [[Systemic-Gaps]] — Drei der fünf systemischen Lücken betreffen Abwesenheit
- [[Requirements]] — R-E1.3, R-M2.2, R-M3.1
- [[Thaller-Synthesis]] — Thallers Incompleteness-Taxonomie
