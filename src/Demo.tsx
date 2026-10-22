"use client";

import { returned } from "./retain";

const rows = [
  { name: "namea", last: 100 },
  { name: "nameb", last: 100 },
  { name: "namec", last: 100 },
  { name: "named", last: 100 },
  { name: "namee", last: 100 },
  { name: "namef", last: 100 },
  { name: "nameg", last: 100 },
  { name: "nameh", last: 99 },
  { name: "namei", last: 99 },
  { name: "namej", last: 99 },
];

export function Demo() {
  const row = returned(rows, 100);
  return (
    <main className="wrap">
      <p className="kicker">Educational reference</p>
      <h1>How many came back</h1>
      <p className="lede">7 of 10 last times are at or after 100. 7000 bps is a count, not a grade. No pool is read.</p>
      {row.ok ? <p>{row.returned} of {row.total}. {row.bps} bps.</p> : <p>{row.reason}</p>}
    </main>
  );
}
