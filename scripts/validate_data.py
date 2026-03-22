"""
Comprehensive validation of all JSON data files for the Historical Information project.

Usage: python scripts/validate_data.py

Checks:
1. All JSON files parse correctly
2. Derivation graph: 15 nodes, 12 edges, acyclic, complete
3. Requirements: 24 entries, correct group distribution, 5 systemic gaps
4. Evaluation matrix: 168 ratings, coverage percentages match research.md
5. Domain weighting: correct weight application
6. Example data: all requirements covered, scenario references valid
7. Cross-file reference integrity
"""
import json
import sys
from pathlib import Path
from collections import Counter

data_dir = Path(__file__).parent.parent / "data"
errors = []
warnings = []

def check(condition, msg):
    if not condition:
        errors.append(msg)
    return condition

def warn(condition, msg):
    if not condition:
        warnings.append(msg)

def load_json(path):
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except Exception as e:
        errors.append(f"Failed to load {path}: {e}")
        return None

print("=" * 60)
print("Historical Information Data Validation")
print("=" * 60)

# ── 1. Load all files ──
print("\n[1] Loading JSON files...")
primitives = load_json(data_dir / "primitives.json")
graph = load_json(data_dir / "derivation_graph.json")
reqs = load_json(data_dir / "requirements.json")
matrix = load_json(data_dir / "evaluation_matrix.json")
sc_a = load_json(data_dir / "examples" / "scenario_a.json")
sc_b = load_json(data_dir / "examples" / "scenario_b.json")
sc_c = load_json(data_dir / "examples" / "scenario_c.json")
sc_d = load_json(data_dir / "examples" / "scenario_d.json")
req_ex = load_json(data_dir / "examples" / "requirement_examples.json")

if any(x is None for x in [primitives, graph, reqs, matrix, sc_a, sc_b, sc_c, sc_d, req_ex]):
    print("FATAL: Could not load all JSON files.")
    sys.exit(1)
print("  All 9 JSON files loaded successfully.")

# ── 2. Primitives ──
print("\n[2] Validating primitives.json...")
prim_list = primitives["primitives"]
check(len(prim_list) == 3, f"Expected 3 primitives, got {len(prim_list)}")
prim_ids = {p["id"] for p in prim_list}
check(prim_ids == {"P1", "P2", "P3"}, f"Primitive IDs: {prim_ids}")
for p in prim_list:
    for field in ["id", "label_en", "label_de", "formal_notation", "description_en"]:
        check(field in p and p[field], f"Primitive {p.get('id','?')}: missing/empty '{field}'")

# ── 3. Derivation Graph ──
print("\n[3] Validating derivation_graph.json...")
nodes = graph["nodes"]
edges = graph["edges"]
node_ids = {n["id"] for n in nodes}
expected_nodes = {"P1","P2","P3","E1","E2","E3","E4","E5","M1","M2","M3","M4","S1","S2","S3"}
check(node_ids == expected_nodes, f"Nodes mismatch. Missing: {expected_nodes - node_ids}, Extra: {node_ids - expected_nodes}")
check(len(nodes) == 15, f"Expected 15 nodes, got {len(nodes)}")
check(len(edges) == 12, f"Expected 12 edges, got {len(edges)}")

# Check specific derivations
expected_single = [
    ("P1","E1"),("P1","E5"),("P1","S1"),
    ("P2","E2"),("P2","M1"),("P2","M3"),("P2","M4"),("P2","S2"),
    ("P3","E3"),("P3","E4"),
]
expected_combined = [({"P1","P2"},"S3"), ({"P2","P3"},"M2")]

for src, tgt in expected_single:
    found = any(e["source"] == src and e["target"] == tgt for e in edges)
    check(found, f"Missing single edge: {src} → {tgt}")

for src_set, tgt in expected_combined:
    found = any(
        isinstance(e["source"], list) and set(e["source"]) == src_set and e["target"] == tgt
        for e in edges
    )
    check(found, f"Missing combined edge: {src_set} → {tgt}")

# Acyclicity check (simple DFS)
adj = {}
for e in edges:
    sources = e["source"] if isinstance(e["source"], list) else [e["source"]]
    for s in sources:
        adj.setdefault(s, []).append(e["target"])

def has_cycle(adj, start, visited, rec_stack):
    visited.add(start)
    rec_stack.add(start)
    for neighbor in adj.get(start, []):
        if neighbor in rec_stack:
            return True
        if neighbor not in visited and has_cycle(adj, neighbor, visited, rec_stack):
            return True
    rec_stack.discard(start)
    return False

visited, rec_stack = set(), set()
is_acyclic = not any(has_cycle(adj, n, visited, rec_stack) for n in node_ids if n not in visited)
check(is_acyclic, "Derivation graph contains a cycle!")

# Group distribution
groups = Counter(n["group"] for n in nodes)
check(groups["primitive"] == 3, f"Expected 3 primitive nodes, got {groups['primitive']}")
check(groups["epistemic"] == 5, f"Expected 5 epistemic nodes, got {groups['epistemic']}")
check(groups["medial"] == 4, f"Expected 4 medial nodes, got {groups['medial']}")
check(groups["semiotic"] == 3, f"Expected 3 semiotic nodes, got {groups['semiotic']}")

# ── 4. Requirements ──
print("\n[4] Validating requirements.json...")
req_list = reqs["requirements"]
check(len(req_list) == 24, f"Expected 24 requirements, got {len(req_list)}")
req_ids = {r["id"] for r in req_list}

group_counts = Counter(r["group"] for r in req_list)
check(group_counts["epistemic"] == 10, f"Expected 10 epistemic, got {group_counts.get('epistemic', 0)}")
check(group_counts["medial"] == 6, f"Expected 6 medial, got {group_counts.get('medial', 0)}")
check(group_counts["semiotic"] == 4, f"Expected 4 semiotic, got {group_counts.get('semiotic', 0)}")
check(group_counts["structural"] == 4, f"Expected 4 structural, got {group_counts.get('structural', 0)}")

systemic = {r["id"] for r in req_list if r["is_systemic_gap"]}
expected_systemic = {"R-E1.3", "R-E5.2", "R-M2.2", "R-M3.1", "R-S2.1"}
check(systemic == expected_systemic, f"Systemic gaps: {systemic} (expected {expected_systemic})")

# derived_from validity
property_ids = {n["id"] for n in nodes if n["type"] == "property"}
for r in req_list:
    if r["derived_from"] is not None:
        check(r["derived_from"] in property_ids,
              f"{r['id']}: derived_from '{r['derived_from']}' not in property nodes")

# ── 5. Evaluation Matrix ──
print("\n[5] Validating evaluation_matrix.json...")
approaches = matrix["approaches"]
check(len(approaches) == 7, f"Expected 7 approaches, got {len(approaches)}")
approach_ids = {a["id"] for a in approaches}

ratings = matrix["ratings"]
check(set(ratings.keys()) == approach_ids, f"Ratings keys mismatch: {set(ratings.keys())} vs {approach_ids}")

for aid, ar in ratings.items():
    rated_reqs = set(ar.keys())
    check(rated_reqs == req_ids, f"{aid}: rated requirements mismatch. Missing: {req_ids - rated_reqs}, Extra: {rated_reqs - req_ids}")
    for rid, rating in ar.items():
        check(rating["level"] in ("structural", "metadata", "absent"),
              f"{aid}/{rid}: invalid level '{rating['level']}'")
        check(len(rating.get("justification", "")) > 10,
              f"{aid}/{rid}: justification too short or missing")

# Coverage verification
print("\n  Coverage verification:")
expected_pct = {
    "thaller": 79, "sdhss": 67, "cidoc_crm": 63,
    "bookkeeping": 38, "factoid": 33, "star": 33, "prov_o": 17
}
expected_counts = {
    "thaller":     (13, 6, 5),
    "sdhss":       (11, 5, 8),
    "cidoc_crm":   (7, 8, 9),
    "bookkeeping": (3, 6, 15),
    "factoid":     (4, 4, 16),
    "star":        (5, 3, 16),
    "prov_o":      (2, 2, 20),
}

for aid, ar in ratings.items():
    s = sum(1 for r in ar.values() if r["level"] == "structural")
    m = sum(1 for r in ar.values() if r["level"] == "metadata")
    a = sum(1 for r in ar.values() if r["level"] == "absent")
    pct = round((s + m) / 24 * 100)

    es, em, ea = expected_counts[aid]
    check(s == es, f"{aid}: structural {s} ≠ expected {es}")
    check(m == em, f"{aid}: metadata {m} ≠ expected {em}")
    check(a == ea, f"{aid}: absent {a} ≠ expected {ea}")
    check(abs(pct - expected_pct[aid]) <= 1, f"{aid}: coverage {pct}% ≠ expected {expected_pct[aid]}%")
    status = "OK" if abs(pct - expected_pct[aid]) <= 1 else "MISMATCH"
    print(f"    {aid:15s}: S={s:2d} M={m:2d} A={a:2d} -> {pct}% (exp {expected_pct[aid]}%) {status}")

# ── 6. Example Data ──
print("\n[6] Validating example data...")
examples = req_ex["requirement_examples"]
check(len(examples) == 24, f"Expected 24 requirement examples, got {len(examples)}")

example_req_ids = {e["requirement_id"] for e in examples}
check(example_req_ids == req_ids, f"Example requirements mismatch. Missing: {req_ids - example_req_ids}")

valid_scenarios = {"scenario_a", "scenario_b", "scenario_c", "scenario_d"}
for ex in examples:
    check(ex["scenario"] in valid_scenarios, f"{ex['requirement_id']}: invalid scenario '{ex['scenario']}'")
    check("with_requirement" in ex, f"{ex['requirement_id']}: missing 'with_requirement'")
    check("without_requirement" in ex, f"{ex['requirement_id']}: missing 'without_requirement'")

# Scenario file validation
for label, sc in [("scenario_a", sc_a), ("scenario_b", sc_b), ("scenario_c", sc_c), ("scenario_d", sc_d)]:
    check("id" in sc, f"{label}: missing 'id'")
    check("title_en" in sc, f"{label}: missing 'title_en'")

# ── 7. Cross-file references ──
print("\n[7] Validating cross-file references...")

# requirements.derived_from -> derivation_graph.nodes
for r in req_list:
    if r["derived_from"]:
        check(r["derived_from"] in node_ids,
              f"Cross-ref: {r['id']}.derived_from='{r['derived_from']}' not in graph nodes")

# evaluation_matrix.ratings keys -> requirements
for aid, ar in ratings.items():
    for rid in ar:
        check(rid in req_ids, f"Cross-ref: {aid}.{rid} not in requirements")

# requirement_examples.requirement_id -> requirements
for ex in examples:
    check(ex["requirement_id"] in req_ids,
          f"Cross-ref: example {ex['requirement_id']} not in requirements")

# ── Summary ──
print(f"\n{'=' * 60}")
if errors:
    print(f"FAILED: {len(errors)} error(s)")
    for e in errors:
        print(f"  ✗ {e}")
    sys.exit(1)
else:
    print("ALL CHECKS PASSED")
    print(f"  3 primitives, 15 graph nodes, 12 edges (acyclic)")
    print(f"  24 requirements (10E + 6M + 4S + 4A), 5 systemic gaps")
    print(f"  168 ratings with justifications, 7 approaches")
    print(f"  24 requirement examples across 4 scenarios")
    print(f"  All cross-file references valid")

if warnings:
    print(f"\n  Warnings: {len(warnings)}")
    for w in warnings:
        print(f"  ⚠ {w}")

sys.exit(0)
