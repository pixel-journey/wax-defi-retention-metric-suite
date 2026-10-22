/**
 * Accounts active again at or after a cutoff.
 * The rows are arguments. No pool is read.
 */

const NAME = /^(?!.*\.\.)(?!\.)(?!.*\.$)[a-z1-5.]{1,12}$/;

export function returned(rows: readonly { name: string; last: number }[], since: number): { ok: false; reason: string } | { ok: true; returned: number; total: number; bps: number } {
  if (!Number.isInteger(since) || since < 0 || since > 4_000_000_000) return { ok: false, reason: "since must be an integer from 0 to 4000000000" };
  if (rows.length < 1 || rows.length > 20) return { ok: false, reason: "pass 1 to 20 accounts" };
  const seen = new Set<string>();
  let back = 0;
  for (const row of rows) {
    if (!NAME.test(row.name)) return { ok: false, reason: "name must be an Antelope name" };
    if (seen.has(row.name)) return { ok: false, reason: "names must be unique" };
    seen.add(row.name);
    if (!Number.isInteger(row.last) || row.last < 0 || row.last > 4_000_000_000) return { ok: false, reason: "last must be an integer from 0 to 4000000000" };
    if (row.last >= since) back += 1;
  }
  return { ok: true, returned: back, total: rows.length, bps: Math.floor((back * 10_000) / rows.length) };
}
