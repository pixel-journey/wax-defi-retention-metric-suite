# Sources

| Source | Use |
| --- | --- |
| [docs.wax.io](https://docs.wax.io/) | Account and time context |
| [health dashboard](https://github.com/pixel-journey/wax-defi-protocol-health-dashboard) | A different integer (turnover tags) |
| [invariant kit](https://github.com/pixel-journey/px-invariant-kit) | Stricter names (no `.`) |

## Product facts locked by tests

```text
returned = count(last >= since)
bps = floor(returned * 10000 / total)
```

- 7 of 10 at cutoff 100 → **7000** bps.
- 1 of 3 → **3333** bps. The remainder is dropped.
- The cutoff instant counts. One second earlier does not.
- 1 to 20 rows. `since` and `last` are integers 0 .. 4_000_000_000.
- Names: `a-z1-5` and `.`, length 1..12, no leading, trailing, or doubled dot. Duplicates refused.
- Inputs are arguments. **No pool is read.**
