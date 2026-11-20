# Education — how many came back

> **Rung:** `npm test` passes. The rows are arguments. No pool is read.  
> **The test is the rule.** A turnover tag, which this file does not compute, is [wax-defi-protocol-health-dashboard](https://github.com/pixel-journey/wax-defi-protocol-health-dashboard).

Official context: [docs.wax.io](https://docs.wax.io/). Account names here follow a local regex, not a chain lookup.

## Learning outcomes

| Level | After this file |
| --- | --- |
| Beginner | Count who came back and floor the basis points |
| Intermediate | Show why the cutoff is inclusive and why 1 of 3 is 3333 |
| Masterclass | Refuse to call the integer a live cohort |

---

## Beginner — one scene

`last >= since` counts as returned. Basis points are `floor(returned * 10000 / total)`.

| Rows | Locked result |
| --- | --- |
| 7 accounts at time `100` and 3 at `99`, cutoff `100` | returned `7`, total `10`, bps `7000` |
| `alice` at `100`, `bob` and `carol` at `99`, cutoff `100` | returned `1`, total `3`, bps `3333`. `floor(10000 / 3)` drops the remainder. |

`100` is included. `99` is not.

```bash
npm test
```

---

## Intermediate — bounds

| Input | Rule |
| --- | --- |
| `since` | integer 0 .. 4_000_000_000 |
| `last` | same range |
| row count | **1 to 20** |
| name | `a-z`, `1-5`, and `.`, length 1..12, no leading, trailing, or doubled `.` |
| duplicate name | refused |

The name rule is **looser** than [px-invariant-kit](https://github.com/pixel-journey/px-invariant-kit) `name.ts`, which does not allow `.`. Do not merge them without a test.

A batch of 21 accounts is refused even if every timestamp is valid. That cap is teaching RAM, not a chain limit.

---

## Masterclass

### Common mistakes

1. Treating 7000 bps as "70% of TVL." It is 7 of 10 **rows you passed in**.  
2. Using a half-open window. This cutoff is `last >= since`, so the instant itself counts.  
3. Rounding 3333.333 up to 3334. This lab floors.  
4. Reading a Hyperion action history and citing this file as the query.  
5. Calling a 12-character name with a dot illegal because the invariant kit would refuse it. This file allows the dot.

### What this is not

- A pool or DEX retention oracle
- Proof a wallet is the same person
- A reason to market "70% retention" from ten typed rows

### Exercises

1. Cutoff 100, last times 100, 100, 99. Returned and bps? (2 of 3 → 6666.)  
2. Why is one of three 3333 and not 3334?  
3. Does an empty list succeed? (No. At least one row.)

---

## What this course will not teach

- A live Hyperion or Alcor query
- That coming back once makes an account loyal
