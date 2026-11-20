# Education — how many came back

> **Rung:** `npm test` passes. The rows are arguments. No pool is read.  
> **The test is the rule.**

## Predict, then run

`last >= since` counts. Basis points are `floor(returned * 10000 / total)`.

| Rows | Locked result |
| --- | --- |
| 7 accounts at time `100` and 3 at `99`, cutoff `100` | returned `7`, total `10`, bps `7000` |
| `alice` at `100`, `bob` and `carol` at `99`, cutoff `100` | returned `1`, total `3`, bps `3333`. `floor(10000 / 3)` drops the remainder. |

`100` is included. `99` is not. A name longer than 12 characters is refused. Duplicate names are refused. This is not a pool query.
