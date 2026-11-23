# AI handoff — retention return counts

## Non-negotiables

1. `returned = count(last >= since)`. `bps = floor(returned * 10000 / total)`.
2. 7 of 10 at cutoff 100 → **7000** bps. 1 of 3 → **3333**. Remainder is dropped.
3. The cutoff instant counts. One second earlier does not.
4. 1 to 20 rows. `since` and `last` are integers 0 .. 4_000_000_000.
5. Names: `a-z1-5` and `.`, length 1..12, no leading, trailing, or doubled dot. Duplicates refused.
6. Inputs are arguments. **No pool is read.** Not the health-dashboard turnover tags.
7. Invariant kit names are stricter (no `.`). Do not merge without a test.

## Prompt seeds

- "1 of 3 returns — 3333 or 3334?"
- "Account whose last equals since — counted?"
- "Refuse a pool read inside the metric."

## Do not

- Half-up the floor.
- Treat this as TVL turnover.
