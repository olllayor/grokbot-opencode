import { registerDebugId } from "./debug-metadata.js";
registerDebugId("14f0879b-521a-4ae2-b85d-60f21724980c");
export interface TeamAgentRow { teamRank?: number; createdAt: number; viewerIsOwner?: boolean; ownerDisplayName?: string | null; title?: string | null; description?: string | null }
export function o<T extends TeamAgentRow>(rows: readonly T[]): T[] {
  return [...rows].sort((left, right) => {
    if (left.teamRank !== undefined && right.teamRank !== undefined && left.teamRank !== right.teamRank) return left.teamRank - right.teamRank;
    if (left.teamRank !== undefined && right.teamRank === undefined) return -1;
    if (left.teamRank === undefined && right.teamRank !== undefined) return 1;
    return right.createdAt - left.createdAt;
  });
}
export function b(row: TeamAgentRow): string | null {
  if (row.viewerIsOwner === true) return "you";
  if (row.viewerIsOwner !== false) return null;
  const name = row.ownerDisplayName?.trim() ?? "";
  return name.length === 0 ? null : name;
}
export function t(row: TeamAgentRow): string | null {
  const owner = b(row);
  if (owner === null || owner === "you") return owner;
  const [first = "", ...rest] = owner.normalize("NFC").split(/\s+/u);
  if (first.length === 0) return null;
  const surname = rest.reverse().find(part => /^\p{L}/u.test(part)) ?? "";
  const [initial] = Array.from(surname);
  return initial === undefined ? first : `${first} ${initial}`;
}
export function a(row: TeamAgentRow, includeTitle: boolean): string { return includeTitle ? row.title?.trim() ?? "" : ""; }
export function m<T extends TeamAgentRow>(row: T, search: string, displayName: (row: T) => string, includeTitle: boolean): boolean {
  const query = search.trim().toLowerCase();
  return query.length === 0 || [displayName(row), a(row, includeTitle), row.description ?? "", row.ownerDisplayName ?? ""].some(value => value.toLowerCase().includes(query));
}
