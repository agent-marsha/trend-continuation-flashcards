# Trend-Continuation Strategy — Flashcards

A single-file study deck (40 cards) built from **"The Only Day Trading Strategy You Will Ever Need"** (The Trading Channel).

**Live:** https://agent-marsha.github.io/trend-continuation-flashcards/

## The strategy in one screen

```
1. TREND       Higher-time-frame trend, one TF up from the one you trade.
               5m→15m · 15m→1h · 1h→4h · 4h→1d
2. LEVEL       The LAST broken MAJOR SWING LEVEL on that higher time frame = your ZONE.
3. TRIGGER     Price pulls back into the zone and REJECTS it:
               double top (short) / double bottom (long), no close beyond the zone,
               then a red/green confirmation candle. Enter at its close.

STOP           Beyond the swing extreme, plus ATR(14).
TARGET         The previous major swing level.  ≈ 2:1 reward:risk.
EXPECTANCY     ~50% win rate × 2:1 = the edge, over a large sample.
```

## Key concepts
- **Major swing levels** = the top and bottom of *impulsive* moves (moves that break structure). Minor swings are ignored in a trend.
- A pullback low is only confirmed **after** price breaks into new highs.
- **Trend intact** = price stays above the most recent major swing low. **Trend over** = a break *and close* below it.
- **Consolidation = do not trade.** Breaking above the prior pullback high while the prior low holds = indecision, and "this is when all of our losses occur."
- **The zone** for a double top: between the **highest bodies** and the **highest wick** of the prior swing high. The only forbidden thing is a **close above** it.
- **Triangle of Trading Success:** strategy + risk management + trading psychology.

## Using the deck
| Key | Action |
|---|---|
| `space` | flip the card |
| `←` `→` | previous / next |
| `G` | got it (when flipped) |
| `R` | review again |
| `S` | shuffle |

Topic chips filter to Trend / Rules / Entry / Risk / Mindset / Practice. Progress is stored in `localStorage`; **Reset** clears it.

## Files
- `index.html` — the whole app (cards are embedded; no build step, no dependencies)
- `cards.json` — the same cards as data, if you want to import them into Anki or similar

---
Study aid summarising a YouTube video. **Nothing here is trading advice.**
