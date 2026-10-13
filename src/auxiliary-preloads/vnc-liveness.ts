export interface LivenessCounters {
  keys: number;
  clicks: number;
  moves: number;
  drawOps: number;
  inBytes: number;
}
export interface LivenessReport {
  phase: "post_connect";
  stallMs: number;
  keys: number;
  clicks: number;
  moves: number;
  inBytes: number;
}
export function parseLivenessSample(value: unknown): LivenessCounters | null {
  if (typeof value !== "string") return null;
  const parsed: unknown = JSON.parse(value);
  if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed))
    return null;
  const counters = parsed as Record<string, unknown>;
  const valid = (n: unknown): n is number =>
    typeof n === "number" && Number.isFinite(n) && n >= 0;
  if (
    !valid(counters.keys) ||
    !valid(counters.clicks) ||
    !valid(counters.moves) ||
    !valid(counters.drawOps) ||
    !valid(counters.inBytes)
  )
    return null;
  return {
    keys: counters.keys,
    clicks: counters.clicks,
    moves: counters.moves,
    drawOps: counters.drawOps,
    inBytes: counters.inBytes,
  };
}
export function createLivenessSampler() {
  let previous: LivenessCounters | null = null;
  let window: (LivenessCounters & { atMs: number })[] = [];
  let connectedAt: number | null = null;
  let reported = false;
  const reset = () => {
    previous = null;
    window = [];
    connectedAt = null;
    reported = false;
  };
  const seed = (atMs: number, counters: LivenessCounters) => {
    reset();
    previous = counters;
    connectedAt = atMs;
  };
  return {
    reset,
    sample(atMs: number, counters: LivenessCounters): LivenessReport | null {
      if (previous === null) {
        seed(atMs, counters);
        return null;
      }
      const delta = {
        atMs,
        keys: counters.keys - previous.keys,
        clicks: counters.clicks - previous.clicks,
        moves: counters.moves - previous.moves,
        drawOps: counters.drawOps - previous.drawOps,
        inBytes: counters.inBytes - previous.inBytes,
      };
      if (
        delta.keys < 0 ||
        delta.clicks < 0 ||
        delta.moves < 0 ||
        delta.drawOps < 0 ||
        delta.inBytes < 0
      ) {
        seed(atMs, counters);
        return null;
      }
      previous = counters;
      window.push(delta);
      window = window.filter((sample) => sample.atMs > atMs - 10000);
      if (delta.drawOps > 0) reported = false;
      if (reported || connectedAt === null || atMs - connectedAt < 10000)
        return null;
      const total = window.reduce(
        (sum, sample) => ({
          keys: sum.keys + sample.keys,
          clicks: sum.clicks + sample.clicks,
          moves: sum.moves + sample.moves,
          drawOps: sum.drawOps + sample.drawOps,
          inBytes: sum.inBytes + sample.inBytes,
        }),
        { keys: 0, clicks: 0, moves: 0, drawOps: 0, inBytes: 0 },
      );
      if (
        total.keys + total.clicks < 3 ||
        total.drawOps > 0 ||
        total.inBytes > 0
      )
        return null;
      reported = true;
      const firstInput = window.find(
        (sample) => sample.keys + sample.clicks > 0,
      );
      return {
        phase: "post_connect",
        stallMs: atMs - (firstInput?.atMs ?? atMs),
        keys: total.keys,
        clicks: total.clicks,
        moves: total.moves,
        inBytes: total.inBytes,
      };
    },
  };
}
