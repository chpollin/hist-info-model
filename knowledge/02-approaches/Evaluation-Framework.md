---
type: knowledge
created: 2026-03-21
tags: [evaluation, methodology, requirements, approaches]
status: draft
---

# Evaluation Framework

## Summary

Methodik zur systematischen Bewertung von Repräsentationsansätzen gegen die [[Requirements|24 Requirements]]. Das Framework muss paradigmenneutral funktionieren — Ontologien, Graphmodelle, Textkodierungsstandards, Archivstandards und Aggregationsmodelle müssen mit denselben Kriterien bewertbar sein.

## Bewertungsmethodik

### Evidenzquellen (priorisiert)

1. **Ontologie-/Standard-Spezifikation:** Für jedes Requirement wird in der publizierten Spezifikation des Ansatzes (Ontologie-Dokumentation, TEI-Guidelines, RiC-O-Spec) nach dedizierten Konstrukten gesucht. → Primäre Bewertungsgrundlage.
2. **Projekterfahrung:** Wo der Ansatz in einem echten Projekt ([[Project-Evidence]]) eingesetzt wird, werden konkrete Modellierungsentscheidungen als Evidenz herangezogen. → Sekundäre Bewertungsgrundlage.
3. **Expert Judgement:** Wo weder Spezifikation noch Projekterfahrung eine klare Bewertung erlauben, wird begründetes Expertenwissen eingesetzt. → Tertiäre Bewertungsgrundlage, muss als solche markiert werden.

### Dreistufige Skala

| Level | Definition | Kriterium |
|---|---|---|
| `structural` | Dedizierte Konstrukte, die das Requirement direkt adressieren | Eine benennbare Klasse, Property oder ein Pattern in der Spezifikation, das genau für diesen Zweck existiert |
| `metadata` | Über generische Mechanismen abbildbar | Freitext-Annotationen, allgemeine Properties, Kommentarfelder — der Ansatz blockiert die Repräsentation nicht, hat aber kein dediziertes Konstrukt |
| `absent` | Nicht adressiert, kein bekannter Workaround | Das Requirement kann weder durch dedizierte noch durch generische Mechanismen erfüllt werden |

### Paradigmenneutrale Anwendung

Die Skala muss für alle Paradigmen funktionieren:

| Paradigma | `structural` Beispiel | `metadata` Beispiel |
|---|---|---|
| Ontologie (CIDOC-CRM) | E13 Attribute Assignment für R-E2.1 (Provenienz) | rdfs:comment für R-E4.1 (Interpretationsmetadaten) |
| Graphmodell (FactGrid) | Widersprüchliche Statements für R-E3.1 | Qualifikator mit Freitext für R-E1.1 |
| Textkodierung (TEI) | `<choice>/<orig>/<reg>` für R-S2.1 | @cert-Attribut für R-E1.1 |
| Archivstandard (RiC-O) | rico:Event für R-E2.1 | rico:descriptiveNote für R-E4.1 |
| Aggregation (EDM) | edm:Agent für Akteur-Modellierung | dc:description für R-E4.1 |

### Aggregationsformel

**Abdeckung:** `(structural + metadata) / 24 * 100`

Behandelt `structural` und `metadata` als gleichwertig ("adressiert"). Alternative gewichtete Formeln:

- **Gewichtet:** `(structural × 2 + metadata × 1) / 48 × 100` — gibt dedizierten Konstrukten doppeltes Gewicht
- **Domänenprofil Textuelle Quellen:** Epistemische und semiotische Requirements ×3, mediale ×2, strukturelle ×1

## Zu bewertende Ansätze

Vollständige Liste in [[Approaches-Comparison]]. Die systematische Bewertung priorisiert die 10 bestehenden Ansätze (CIDOC-CRM, SDHSS, Bookkeeping, Factoid/STAR, PROV-O, Thaller, FactGrid, TEI, RiC-O, EDM). Die 8 neuen Ansätze (2024–2025) werden als ergänzende Perspektiven einbezogen.

## Offene methodische Fragen

1. **Intersubjektivität:** Expert Judgement durch eine Person ist nicht reproduzierbar. Ein zweiter Gutachter oder ein formales Codebuch würden die Reproduzierbarkeit erhöhen.
2. **Granularität:** "structural" vs. "metadata" ist oft Ermessenssache. Richtlinie: Wenn ein Konstrukt *primär für einen anderen Zweck* existiert, aber *auch* für dieses Requirement genutzt werden kann, ist es `metadata`. Wenn es *genau für diesen Zweck* existiert, ist es `structural`.
3. **Implementierung vs. Spezifikation:** Bewertet wird, was die Spezifikation *erlaubt*, nicht was in der Praxis *implementiert* ist. Ausnahme: Thaller (Design-Level ohne Spezifikation — bewertet nach konzeptuellem Design) und Bookkeeping v1.2 vs. v1.3 (implementiert vs. theoretisch).
4. **Temporale Aktualität:** CIDOC-CRM v7.3 (2024), RiC-O v1.1 (2025), TEI P5 v4.10.2 (2025) — Bewertungen müssen gegen die aktuelle Version erfolgen, nicht gegen historische.

## Noch zu leisten

- [ ] Für jeden Ansatz × jedes Requirement: konkrete Klasse/Property/Pattern benennen (oder explizit: "kein Konstrukt vorhanden")
- [ ] Evidenz aus [[Project-Evidence]] einbeziehen, wo verfügbar
- [ ] Bewertungen von einem zweiten Gutachter prüfen lassen
- [ ] Gewichtete Aggregation für verschiedene Domänenprofile berechnen
- [ ] Ergebnisse in [[Approaches-Comparison]] integrieren

## Related

- [[Requirements]] — Die 24 Requirements als Bewertungsmaßstab
- [[Approaches-Comparison]] — Vergleich aller Ansätze mit Bewertungen
- [[Systemic-Gaps]] — Die 5 systemischen Lücken, die kein Ansatz strukturell adressiert
- [[Project-Evidence]] — Echte Projektdaten als Evidenzquelle
