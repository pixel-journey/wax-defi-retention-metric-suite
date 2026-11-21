# Security — return-count function

## Closed in tests

| Issue | Behavior |
| --- | --- |
| `last` equal to the cutoff | **counted** (inclusive) |
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
4. Feeding the same account twice under two spellings to inflate numerator or denominator.  
5. Treating return count as proof of one human per name.

## Honesty limits

No network. No wasm.

| Sibling | Distinction |
| --- | --- |
| [protocol health](https://github.com/pixel-journey/wax-defi-protocol-health-dashboard) | Tags on TVL/volume/LPs |
| [loyalty scorecard](https://github.com/pixel-journey/wax-defi-loyalty-health-scorecard) | Multi-vector score |
| [churn predictor](https://github.com/pixel-journey/wax-player-churn-predictor) | Weighted risk score |

[docs.wax.io](https://docs.wax.io/).
