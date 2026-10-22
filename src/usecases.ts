import { CHAIN_ORIGIN, HISTORY_ORIGIN, currencyBalance, historyActions } from "./api";
import { returned } from "./retain";
import type { ChainAction, HttpRequest } from "./api";

export type UseCase = {
  title: string;
  detail: string;
  request: HttpRequest;
  transaction: { note: string; actions: ChainAction[] } | null;
};

const names = "abcdefghij".split("");
const rows = names.map((ch, i) => ({ name: `name${ch}`, last: i < 7 ? 100 : 99 }));
const row = returned(rows, 100);
if (!row.ok) throw new Error(row.reason);
const back = row.returned;
const total = row.total;
const bps = row.bps;

export const USE_CASES: UseCase[] = [
  {
    title: "A balance is not a last-active time",
    detail: `${back} of ${total} is ${bps} bps. The balance request is not sent.`,
    request: currencyBalance(CHAIN_ORIGIN, "alice"),
    transaction: null,
  },
  {
    title: "Transfer history is not a cohort",
    detail: "No stake action is built.",
    request: historyActions(HISTORY_ORIGIN, "alice", "eosio.token:transfer", 20),
    transaction: null,
  },
];

export function assertUseCases(): void {
  if (bps !== 7000) throw new Error("retain");
}
