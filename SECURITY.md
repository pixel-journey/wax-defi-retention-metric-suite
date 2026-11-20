# Security — return-count function

## Closed in tests

| Issue | Behavior |
| --- | --- |
| `last` equal to the cutoff | counted |
| `last` one below the cutoff | not counted |
| 7 of 10 | **7000** bps |
| 1 of 3 | **3333** bps (floor) |
| Bad name, duplicate name, empty or 21-row batch, bad timestamp | refused |

## Not closed (production)

| Concern | Guidance |
| --- | --- |
| Data source | Rows are arguments, not Hyperion history |
| Identity | A name returning is not proof of one human |
| Sybil | Nothing here clusters wallets |
| Name charset | This regex allows `.`. The invariant kit does not |

## Attack angles

1. Publishing "70% retention" from ten hand-typed rows.  
2. Excluding the cutoff instant (`>` instead of `>=`) and still citing 7000.  
3. Rounding 10000/3 up.  
4. Feeding the same account twice under two spellings to inflate the denominator or the numerator.

## Honesty limits

No network. No wasm. [docs.wax.io](https://docs.wax.io/) · turnover labels live in [health dashboard](https://github.com/pixel-journey/wax-defi-protocol-health-dashboard).
