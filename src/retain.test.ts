import { describe, expect, it } from "vitest";
import { returned } from "./retain";

describe("retention count", () => {
  it("is 7 of 10", () => {
    const rows = [
      ..."abcdefg".split("").map((ch) => ({ name: `name${ch}`, last: 100 })),
      { name: "nameh", last: 99 },
      { name: "namei", last: 99 },
      { name: "namej", last: 99 },
    ];
    expect(returned(rows, 100)).toEqual({ ok: true, returned: 7, total: 10, bps: 7000 });
  });

  it("counts a last time equal to the cutoff, and floors one of three", () => {
    expect(
      returned(
        [
          { name: "alice", last: 100 },
          { name: "bob", last: 99 },
          { name: "carol", last: 99 },
        ],
        100,
      ),
    ).toEqual({ ok: true, returned: 1, total: 3, bps: 3333 });
  });
});
