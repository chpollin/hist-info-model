"""Quick validation of M1 JSON data files against research.md specifications."""
import json
import sys
from pathlib import Path

data_dir = Path(__file__).parent.parent / "data"
errors = []
warnings = []

def check(condition, msg):
    if not condition:
        errors.append(msg)

def warn(condition, msg):
    if not condition:
        warnings.append(msg)

# 1. Load all JSON files
try:
    primitives = json.loads((data_dir / "primitives.json").read_text(encoding="utf-8"))
    graph = json.loads((data_dir / "derivation_graph.json").read_text(encoding="utf-8"))
    reqs = json.loads((data_dir / "requirements.json").read_text(encoding="utf-8"))
    matrix = json.loads((data_dir / "evaluation_matrix.json").read_text(encoding="utf-8"))
    print("[OK] All JSON files loaded successfully")
except Exception as e:
    print(f"[FAIL] JSON load error: {e}")
    sys.exit(1)

# 2. Primitives
check(len(primitives["primitives"]) == 3, f"Expected 3 primitives, got {len(primitives['primitives'])}")
prim_ids = {p["id"] for p in primitives["primitives"]}
check(prim_ids == {"P1", "P2", "P3"}, f"Primitive IDs: expected P1,P2,P3, got {prim_ids}")

# 3. Derivation Graph
nodes = graph["nodes"]
edges = graph["edges"]
node_ids = {n["id"] for n in nodes}
expected_nodes = {"P1","P2","P3","E1","E2","E3","E4","E5","M1","M2","M3","M4","S1","S2","S3"}
check(node_ids == expected_nodes, f"Node IDs mismatch. Missing: {expected_nodes - node_ids}, Extra: {node_ids - expected_nodes}")
check(len(nodes) == 15, f"Expected 15 nodes (3P+5E+4M+3S), got {len(nodes)}")
check(len(edges) == 12, f"Expected 12 edges, got {len(edges)}")

# Check edge targets
edge_targets = set()
for e in edges:
    edge_targets.add(e["target"])
    src = e["source"]
    if isinstance(src, list):
        for s in src:
            check(s in node_ids, f"Edge source {s} not in nodes")
    else:
        check(src in node_ids, f"Edge source {src} not in nodes")
    check(e["target"] in node_ids, f"Edge target {e['target']} not in nodes")

# Verify specific derivations from research.md
expected_edges = [
    ("P1", "E1"), ("P1", "E5"), ("P1", "S1"),
    ("P2", "E2"), ("P2", "M1"), ("P2", "M3"), ("P2", "M4"), ("P2", "S2"),
    ("P3", "E3"), ("P3", "E4"),
]
expected_combined = [
    (["P1", "P2"], "S3"),
    (["P2", "P3"], "M2"),
]
actual_edges = [(e["source"], e["target"]) for e in edges]
for src, tgt in expected_edges:
    check((src, tgt) in actual_edges, f"Missing edge: {src} -> {tgt}")
for src, tgt in expected_combined:
    found = any(
        (set(e["source"]) == set(src) if isinstance(e["source"], list) else False) and e["target"] == tgt
        for e in edges
    )
    check(found, f"Missing combined edge: {src} -> {tgt}")

# 4. Requirements
req_list = reqs["requirements"]
check(len(req_list) == 24, f"Expected 24 requirements, got {len(req_list)}")
req_ids = {r["id"] for r in req_list}

# Check systemic gaps
systemic = {r["id"] for r in req_list if r["is_systemic_gap"]}
expected_systemic = {"R-E1.3", "R-E5.2", "R-M2.2", "R-M3.1", "R-S2.1"}
check(systemic == expected_systemic, f"Systemic gaps mismatch. Got: {systemic}, Expected: {expected_systemic}")

# Check groups
groups = {r["group"] for r in req_list}
check(groups == {"epistemic", "medial", "semiotic", "structural"}, f"Unexpected groups: {groups}")

# Count by group
from collections import Counter
group_counts = Counter(r["group"] for r in req_list)
# research.md: 10 epistemic, 6 medial, 4 semiotic, 4 structural
check(group_counts["epistemic"] == 10, f"Expected 10 epistemic, got {group_counts['epistemic']}")
check(group_counts["medial"] == 6, f"Expected 6 medial, got {group_counts['medial']}")
check(group_counts["semiotic"] == 4, f"Expected 4 semiotic, got {group_counts['semiotic']}")
check(group_counts["structural"] == 4, f"Expected 4 structural, got {group_counts['structural']}")

# 5. Evaluation Matrix
approaches = matrix["approaches"]
check(len(approaches) == 7, f"Expected 7 approaches, got {len(approaches)}")

ratings = matrix["ratings"]
for approach_id, approach_ratings in ratings.items():
    check(len(approach_ratings) == 24, f"{approach_id}: expected 24 ratings, got {len(approach_ratings)}")
    for req_id, rating in approach_ratings.items():
        check(req_id in req_ids, f"{approach_id}: unknown requirement {req_id}")
        check(rating["level"] in ("structural", "metadata", "absent"),
              f"{approach_id}/{req_id}: invalid level '{rating['level']}'")

# 6. Coverage calculation verification
print("\n--- Coverage Verification ---")
for approach_id, approach_ratings in ratings.items():
    s = sum(1 for r in approach_ratings.values() if r["level"] == "structural")
    m = sum(1 for r in approach_ratings.values() if r["level"] == "metadata")
    a = sum(1 for r in approach_ratings.values() if r["level"] == "absent")
    score = s + m  # Both structural and metadata count as "addressed"
    pct = round(score / 24 * 100)

    expected = matrix["coverage"]["equal_weight"][approach_id]
    check(expected["structural"] == s, f"{approach_id}: structural count {s} != expected {expected['structural']}")
    check(expected["metadata"] == m, f"{approach_id}: metadata count {m} != expected {expected['metadata']}")
    check(expected["absent"] == a, f"{approach_id}: absent count {a} != expected {expected['absent']}")

    pct_match = "OK" if abs(pct - expected["percentage"]) <= 1 else f"MISMATCH (calculated {pct}%)"
    print(f"  {approach_id:15s}: S={s:2d} M={m:2d} A={a:2d} -> {pct}% (expected {expected['percentage']}%) {pct_match}")

# 7. Domain-weighted coverage for textual sources
print("\n--- Textual Domain Weighting ---")
weights = matrix["coverage"]["domain_profiles"]["textual_sources"]["weights"]
for approach_id, approach_ratings in ratings.items():
    weighted_score = 0
    max_score = 0
    for req_id, rating in approach_ratings.items():
        w = weights.get(req_id, 1)
        max_score += w
        if rating["level"] in ("structural", "metadata"):
            weighted_score += w
    pct = round(weighted_score / max_score * 100)
    print(f"  {approach_id:15s}: {pct}%")

# Summary
print(f"\n{'='*50}")
if errors:
    print(f"ERRORS: {len(errors)}")
    for e in errors:
        print(f"  [FAIL] {e}")
else:
    print("All checks passed!")
if warnings:
    print(f"WARNINGS: {len(warnings)}")
    for w in warnings:
        print(f"  [WARN] {w}")

sys.exit(1 if errors else 0)
