---
type: knowledge
created: 2026-03-21
tags: [examples, scenarios, synthetic-data]
status: draft
---

# Synthetic Historical Examples

**Version:** 1.0
**Purpose:** Concrete, historically plausible examples for each of the 24 requirements, drawn from three scenarios.

---

## Scenario A: Early Modern Account Book

**Setting:** The household account book of the Augsburg merchant Hans Fugger (fictional composite based on typical 15th-century Augsburg merchant records), covering 1472–1489. Written in Early New High German with Latin abbreviations, recording commercial transactions across the Mediterranean trade network.

### Entities

- **Source:** "Handelsbuch des Hans Fugger" (H.F. Ledger), paper codex, 248 folios, ink on rag paper. Held at Stadtarchiv Augsburg (fictional shelf mark: StadtA Aug, Cod. Merc. 17).
- **Persons:** Hans Fugger (merchant), Katharina Fugger (wife, appears only in dowry transaction), Giovanni Bellini (Venetian trading partner), Jakob Schwarz (bookkeeper/scribe).
- **Transactions:** Pepper purchase from Venice (1478-03-15), cloth sale to Nuremberg (1479-11-02), loan to Archduke Sigismund (1480-06-xx, day uncertain), dowry payment (1473-01-12).
- **Currencies:** Rhenish Guilders (fl. rh.), Venetian Ducats (duc.), Augsburg Pfennige (d. aug.). Exchange rates fluctuating.
- **Dates:** Recorded in Julian calendar. Some entries dated only by saint's day ("uff sant Martinstag" = November 11).

### Requirement Mappings

**R-E1.1 (Uncertainty Degrees):** The loan to Archduke Sigismund is dated "im Brachmonat" (June) 1480 — month known, day uncertain. The amount is partially illegible: "ij[?] fl. rh." could be 2,000 or 2,500 guilders.

**R-E5.1 (Temporal Categorization):** Hans Fugger is called "Kaufmann" in the ledger. This 15th-century term encompasses activities that modern classification would split into "merchant," "banker," and "commodity trader."

**R-E5.2 (Category Provenance emic/etic):** The ledger uses "welscher Handler" (emic term for Italian merchants). A modern researcher might classify Bellini as "Venetian long-distance trader" (etic). The emic category carries connotations (foreignness, Catholic trade privileges) that the etic category loses.

**R-M1.1 (Source Type):** The ledger is an administrative/economic source — not created for historical purposes. Its source type (accounting record) constrains what information it can carry: financial transactions yes, personal emotions no.

**R-M2.1 (Creation Purpose):** The ledger was created for commercial accountability ("Rechenschaftslegung"), not for posterity. This purpose explains what is recorded (amounts, dates, counterparties) and what is omitted (personal relationships, motivations, context).

**R-S1.1 (Temporal Contextualization):** The pepper purchase entry involves three temporal layers: (1) the event — the actual pepper delivery in Venice (March 1478), (2) the recording — when Jakob Schwarz entered it in the ledger (possibly weeks later), (3) the modern interpretation — when a researcher reads it in 2024.

**R-S1.2 (Historical Reference Systems):** The entry "ij M duc. zu xv ß d. aug." (2,000 ducats at 15 shillings Augsburg pence) uses a reference system (Venetian ducats, Augsburg shillings) that requires conversion knowledge no longer in common use. Both the historical and modern equivalents must be representable.

**R-E2.1 (Provenance):** Every assertion about Hans Fugger's trade must trace back to a specific folio in the ledger: "Fugger traded pepper with Venice (source: H.F. Ledger, fol. 127r, entry 3)."

**R-A2 (Event-Centricity):** The pepper purchase is an event linking persons (Fugger, Bellini), places (Augsburg, Venice), times (March 1478), objects (pepper, 500 lb.), and financial instruments (2,000 ducats). The event is the organizing unit.

**R-A4 (Assertion-Based):** "Hans Fugger purchased pepper from Giovanni Bellini in March 1478" is an assertion by the researcher, based on the ledger entry on fol. 127r, with high confidence for the transaction but uncertain confidence for the exact date.

---

## Scenario B: Prosopographic Database

**Setting:** A prosopographic database of guild members in a medium-sized Central European city (fictional: "Brückstadt"), 1650–1750, compiled from multiple source types: guild registers, church records (baptism/marriage/death), city council minutes, and tax lists.

### Entities

- **Sources:**
  - Guild Register of the Weavers' Guild ("Webermeisterbuch"), 1648–1720, continuous entries.
  - Parish registers of St. Martin's Church, 1600–1680 (lost in fire 1681) and 1682–1800 (extant).
  - City Council Minutes ("Ratsprotokoll"), 1650–1750, sporadic mentions.
  - Tax List of 1695 ("Steuerliste").
- **Persons:**
  - Johann Meier (master weaver, b. ca. 1655?, d. 1723). Appears in guild register (1678), tax list (1695), council minutes (1702, dispute).
  - Anna Meier née Berger (wife, b.?, d. 1731). Appears ONLY in church records (marriage 1680, death 1731). Absent from guild and tax records.
  - Peter Meier (son, b. 1682, d.?). Baptism recorded in post-fire registers. Appears in guild register (1705).
  - Hans Weber (also a master weaver, possibly identical with "Johannes Weber" in council minutes — unclear).

### Requirement Mappings

**R-E1.3 (Explicit Knowledge Gaps):** Johann Meier's birth date must exist (he was born), but is unknown because the parish registers from 1600–1680 were destroyed. This is a *known unknown* — we know the information once existed but is now irrecoverable. The model must distinguish this from "birth date not applicable" or "birth date never recorded."

**R-M3.1 (Transmission Gaps):** The parish registers of St. Martin's Church, 1600–1680, burned in 1681. This is a transmission gap — the records *existed* and are *known to have contained* baptisms, marriages, and deaths for that period. The model must represent this gap as an informational fact: "Records for 1600–1680 existed and were destroyed by fire in 1681."

**R-M2.2 (Systematic Omissions):** Anna Meier née Berger appears in church records but not in guild registers or tax lists. This is not accidental — guild registers systematically excluded women (they record masters and journeymen, categories defined as male). Tax lists record household heads (typically male). The absence of women from these source types is *systematic*, not random, and is a property of the source type's creation purpose.

**R-E3.1 (Perspective Coexistence):** The guild register records Johann Meier as "ehrbarer Meister" (honorable master). The council minutes from 1702 describe him as "der streitbare Weber Meier" (the quarrelsome weaver Meier) in the context of a guild dispute. Both characterizations coexist — neither is wrong, they reflect different institutional perspectives.

**R-E3.2 (Perspective Relations):** The guild register's and council minutes' characterizations of Meier stand in a *tension* relationship (not outright contradiction, but different emphasis). A third source (the tax list) is *independent* — it records his tax assessment without characterizing him. The model must express these relations.

**R-E4.1 (Interpretation Metadata):** Researcher A (2015, social history framework) identifies "Johann Meier" in the guild register with "Johannes Maier" in a 1695 tax list based on name similarity and professional match. Researcher B (2020, quantitative prosopography) disputes the identification, arguing that "Maier" and "Meier" are distinct families. Each identification is an interpretation act with metadata: who, when, framework, confidence.

**R-E1.2 (Alternative Interpretations):** Hans Weber in the guild register (1690) may or may not be the same person as "Johannes Weber" in the council minutes (1702). Researcher A: same person (confidence 0.7). Researcher B: different persons (confidence 0.6). Both interpretations must coexist without forced resolution.

**R-E2.2 (Epistemic Distance):** The guild register records Johann Meier's admission directly (primary source, eyewitness-level). A 1905 local history book mentions Meier citing the guild register (secondary source, one degree removed). A 2015 database entry cites the 1905 book (tertiary, two degrees removed). Epistemic distance: guild register < 1905 book < 2015 database.

**R-S2.1 (Readings/Normalization):** The guild register spells the name "Johann Identity Identity Identity Meÿer" (diplomatic reading with historical ÿ). Normalized: "Johann Meier." The parish register spells "Identity Johanß Identity Meÿer" (different hand). The model must preserve both forms and their relationship.

**R-A3 (Monotonicity):** In 2023, a new source is discovered — a letter from Johann Meier to a Nuremberg merchant (1705). This adds information (Meier had trade contacts beyond Brückstadt) without requiring modification of any existing assertions. The model is additive.

**R-A1 (Separation of Concerns):** The guild register entry "Johann Meier, Webermeister, aufgenommen 1678" is a source representation. "Johann Meier was admitted to the weavers' guild in 1678" is an interpretive assertion derived from it. These must be separable.

---

## Scenario C: Text Edition with Witnesses

**Setting:** A critical edition of a 14th-century Middle High German chronicle ("Brückstädter Chronik," fictional), preserved in three manuscript witnesses and one early print.

### Entities

- **Witnesses:**
  - **Ms. A:** Parchment, ca. 1350, closest to the presumed original. Held at Universitätsbibliothek Heidelberg. 84 folios, textura script, red and blue initials.
  - **Ms. B:** Paper, ca. 1420, copy with significant additions and corrections by a second hand. Held at Bayerische Staatsbibliothek München. Water damage on fols. 12–18.
  - **Ms. C:** Paper, ca. 1480, abbreviated version, some passages paraphrased rather than copied. Private collection (access restricted).
  - **Print D:** First printed edition, 1520, by Johann Petri (Basel). Modernized spelling, added chapter divisions.

- **Text passage (fol. 23r in Ms. A):** Describes a market fire in Brückstadt, 1298.
  - Ms. A: "do wart ain grozzer brant uf dem markte ze Brugstat"
  - Ms. B: "da wart ein großer brand uff dem marckte zu Bruckstat" (modernized spelling, second hand added marginal note: "anno domini MCCXCVIII in vigilia sancti Martini")
  - Ms. C: "es brante der markt von Bruckstat" (paraphrased, abbreviated)
  - Print D: "Da ward ein grosser Brand auff dem Marckt zu Brueckstatt" (Early New High German modernization)

### Requirement Mappings

**R-S2.1 (Readings/Normalization):** "grozzer" (Ms. A, diplomatic) vs. "großer" (Ms. B) vs. "grosser" (Print D). The diplomatic reading preserves the scribe's orthography. The normalized reading: "großer" (modern standard). The model must maintain both forms and their witness-specific provenance.

**R-S3.1 (Source Relations):** Ms. A and Ms. B are related through shared Vorlage (common exemplar). Ms. C is an abbreviation of a text closer to Ms. B than Ms. A. Print D derives from Ms. B or a now-lost manuscript close to Ms. B. These are typed relations: copy, abbreviation, derived-from, possibly-derived-from.

**R-M4.1 (Carrier-Content Separation):** Ms. A is a parchment codex (physical carrier) bearing the chronicle text (informational content). The same text appears on paper (Ms. B, C) and in print (D). The carrier and content must be independently describable.

**R-M4.2 (Material as Information):** Ms. A uses red ink for proper names — this is informationally significant (it shows the scribe distinguished proper names as a category). Ms. B has water damage on fols. 12–18, making text partially illegible — the damage is itself information about the manuscript's history. Watermarks in Ms. B date the paper to ca. 1415–1425.

**R-A1 (Separation of Concerns):** The transcription "do wart ain grozzer brant uf dem markte ze Brugstat" is a source representation. The assertion "A large fire destroyed the market of Brückstadt in 1298" is an interpretation. The marginal note in Ms. B adding the date is a separate source intervention.

**R-M1.1 (Source Type):** Ms. A (manuscript, parchment), Ms. B (manuscript, paper), Print D (early print) — each source type carries different implications for transmission fidelity, dating, and editorial intervention.

---

## Scenario D: The Guild Dispute (NEU in M17)

**Setting:** One event — the guild dispute over the dye monopoly in Brückstadt, September 1702 — seen through five sources spanning three centuries. This scenario fills gaps not covered by A–C: event-centricity, temporal categorization change, cross-source synthesis, and epistemic distance across source levels.

### Entities

- **Event:** Guild dispute over dye monopoly, September 1702, Brückstadt. Involves Johann Meier (the same person from Scenario B), a Dye Master, and guild authorities.
- **Sources (5):**
  - **Guild Register (1702, primary):** "dem Meister Meÿer das Handwerk geleget" — frames as violation of guild honor
  - **Council Minutes (1702, primary):** "streitet mit dem Farbmeister wegen des Farbmonopols" — frames as administrative dispute, provides exact date (Sept 15)
  - **Private Letter (1705, primary):** "hab das recht auf meiner Seiten gehabt" — Meier's subjective view, 3 years later
  - **Local History (1905, secondary):** "gegen den Zunftzwang aufbegehrte" — historicist reframing, cites only guild register
  - **Database (2020, tertiary):** `{ type: "labor_dispute" }` — controlled vocabulary, cites 1905 book

### Requirement Mappings

**R-A2 (Event-Centricity):** The guild dispute is the central event connecting five independent sources. Without the event as a hub, the five documents remain unconnected. (Updated from Scenario A.)

**R-E5.1 (Temporal Categorization):** The same event is categorized as "wider die Ehre des Handwerks" (1702, guild language), "Zunftzwang" (1905, historicist framework), and "labor_dispute" (2020, database taxonomy). Each category is temporally bounded. (Updated from Scenario A.)

**Cross-reference to Scenario B:** Johann Meier's appearance in the council minutes (1702, "mentioned in guild dispute") IS this event. The `cross_references` field in both scenario_b.json and scenario_d.json establishes this link.

---

## Requirement-Scenario Assignment Matrix

| Requirement | Primary Scenario | Secondary | Key Example |
|---|---|---|---|
| R-E1.1 | A | — | Fugger loan: month known, day uncertain |
| R-E1.2 | B | — | Hans Weber / Johannes Weber identification |
| R-E1.3 | B | — | Johann Meier birth date: known unknown |
| R-E2.1 | A | B | Every claim traces to folio/entry |
| R-E2.2 | B | D | Guild register → 1905 book → 2015 database |
| R-E3.1 | B | D | "ehrbarer Meister" vs. "streitbarer Weber" |
| R-E3.2 | B | — | Tension (guild/council), independence (tax) |
| R-E4.1 | B | — | Researcher A (2015) vs. B (2020) identification |
| R-E5.1 | **D** | A | "Handwerkerehre" → "Zunftzwang" → "labor_dispute" |
| R-E5.2 | A | — | "welscher Handler" (emic) vs. "Venetian trader" (etic) |
| R-M1.1 | A | C | Accounting record vs. manuscript vs. print |
| R-M2.1 | A | — | Ledger for accountability, not history |
| R-M2.2 | B | — | Women excluded from guild registers by design |
| R-M3.1 | B | — | Parish registers 1600–1680 burned in 1681 |
| R-M4.1 | C | — | Parchment codex vs. text content |
| R-M4.2 | C | — | Red ink for names, water damage, watermarks |
| R-S1.1 | A | C, D | Event time / recording time / reading time |
| R-S1.2 | A | — | Ducats, guilders, saint's day dating |
| R-S2.1 | C | B | "grozzer" (diplomatic) vs. "großer" (normalized) |
| R-S3.1 | C | — | Witness stemma: A/B shared Vorlage, C abbreviates B |
| R-A1 | C | B | Transcription vs. historical assertion |
| R-A2 | **D** | A | Guild dispute as event hub connecting 5 sources |
| R-A3 | B | — | New letter discovery adds without modifying |
| R-A4 | A | B | Every claim wrapped in assertion with source + confidence |

### Coverage Check

- **Scenario A:** R-E1.1, R-E2.1, R-E5.2, R-M1.1, R-M2.1, R-S1.1, R-S1.2, R-A4 = **8 requirements**
- **Scenario B:** R-E1.2, R-E1.3, R-E2.1, R-E2.2, R-E3.1, R-E3.2, R-E4.1, R-M2.2, R-M3.1, R-S2.1, R-A1, R-A3, R-A4 = **13 requirements**
- **Scenario C:** R-M1.1, R-M4.1, R-M4.2, R-S1.1, R-S2.1, R-S3.1, R-A1 = **7 requirements**
- **Scenario D:** R-A2, R-E5.1 = **2 requirements** (primary), + secondary for R-E2.2, R-E3.1, R-S1.1
- All 24 requirements covered: **Yes**
- Systemic gaps: R-E1.3 (B), R-E5.2 (A), R-M2.2 (B), R-M3.1 (B), R-S2.1 (B+C)

## Related

- [[Requirements]] — Alle 24 Requirements mit Szenario-Zuordnung
- [[Project-Evidence]] — Echte Projektdaten (DEPCHA, SuGW, M³GIM, ZBZ)
- [[Absence-Modeling]] — Szenario B trägt die Abwesenheitsmodellierung
