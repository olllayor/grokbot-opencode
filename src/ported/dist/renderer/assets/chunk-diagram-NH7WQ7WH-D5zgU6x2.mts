declare var global: any;
declare var key: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "f4fedf63-6ddd-4720-82a8-e4713d58a33b", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-f4fedf63-6ddd-4720-82a8-e4713d58a33b");
  } catch (e: any) {}
} as any)();
import { p as $ } from "./chunk-chunk-JWPE2WC7-firmgLgH.js";
import { _ as b, B as m, F as C, e as S, l as w, b as D, a as T, o as z, p as F, g as P, s as E, z as A, D as W, q as _ } from "./chunk-mermaid.core-B9Iu5CoE.js";
import { p as N } from "./chunk-cynefin-VYW2F7L2-ChVxrOa1.js";
import "./index.eager-vendor-Qbf9YA6n.js";
var L: any = (W as any).packet,
  u: any,
  v: any = (u = class {
    declare setAccDescription: any;
    declare getAccDescription: any;
    declare getDiagramTitle: any;
    declare setDiagramTitle: any;
    declare getAccTitle: any;
    declare setAccTitle: any;
    declare packet: any;
    [key: string]: any;
    constructor() {
      (this as any).packet = [], (this as any).setAccTitle = D, (this as any).getAccTitle = T, (this as any).setDiagramTitle = z, (this as any).getDiagramTitle = F, (this as any).getAccDescription = P, (this as any).setAccDescription = E;
    }
    getConfig(): any {
      const t: any = (m as any)({
        ...L,
        ...((A as any)() as any).packet
      });
      return (t as any).showBits && ((t as any).paddingY += 10), t;
    }
    getPacket(): any {
      return (this as any).packet;
    }
    pushWord(t: any): any {
      ((t as any).length as any) > (0 as any) && (((this as any).packet as any).push as any)(t);
    }
    clear(): any {
      (_ as any)(), (this as any).packet = [];
    }
  }, (b as any)(u, "PacketDB"), u),
  M: number = 1e4,
  Y: any = (b as any)((e: any, t: any): any => {
    ($ as any)(e, t);
    let r: any = -1,
      s: any = [],
      n: any = 1;
    const {
      bitsPerRow: l
    }: any = ((t as any).getConfig as any)();
    for (let {
      start: a,
      end: i,
      bits: d,
      label: c
    } of (e as any).blocks) {
      if ((a as any) !== (void 0 as any) && (i as any) !== (void 0 as any) && (i as any) < (a as any)) throw new (Error as any)(`Packet block ${a} - ${i} is invalid. End must be greater than start.`);
      if (a ??= (r as any) + (1 as any), (a as any) !== ((r as any) + (1 as any) as any)) throw new (Error as any)(`Packet block ${a} - ${i ?? a} is not contiguous. It should start from ${(r as any) + (1 as any)}.`);
      if ((d as any) === (0 as any)) throw new (Error as any)(`Packet block ${a} is invalid. Cannot have a zero bit field.`);
      for (i ??= ((a as any) + ((d ?? 1) as any) as any) - (1 as any), d ??= ((i as any) - (a as any) as any) + (1 as any), r = i, ((w as any).debug as any)(`Packet block ${a} - ${r} with label ${c}`); ((s as any).length as any) <= ((l as any) + (1 as any) as any) && ((((t as any).getPacket as any)() as any).length as any) < (M as any);) {
        const [p, o]: any = (I as any)({
          start: a,
          end: i,
          bits: d,
          label: c
        }, n, l);
        if (((s as any).push as any)(p), (((p as any).end as any) + (1 as any) as any) === ((n as any) * (l as any) as any) && (((t as any).pushWord as any)(s), s = [], n++), !o) break;
        ({
          start: a,
          end: i,
          bits: d,
          label: c
        } = o);
      }
    }
    ((t as any).pushWord as any)(s);
  }, "populate"),
  I: any = (b as any)((e: any, t: any, r: any): any => {
    if (((e as any).start as any) === (void 0 as any)) throw new (Error as any)("start should have been set during first phase");
    if (((e as any).end as any) === (void 0 as any)) throw new (Error as any)("end should have been set during first phase");
    if (((e as any).start as any) > ((e as any).end as any)) throw new (Error as any)(`Block start ${(e as any).start} is greater than block end ${(e as any).end}.`);
    if ((((e as any).end as any) + (1 as any) as any) <= ((t as any) * (r as any) as any)) return [e, void 0];
    const s: any = ((t as any) * (r as any) as any) - (1 as any),
      n: any = (t as any) * (r as any);
    return [{
      start: (e as any).start,
      end: s,
      label: (e as any).label,
      bits: (s as any) - ((e as any).start as any)
    }, {
      start: n,
      end: (e as any).end,
      label: (e as any).label,
      bits: ((e as any).end as any) - (n as any)
    }];
  }, "getNextFittingBlock"),
  x: any = {
    parser: {
      yy: void 0
    },
    parse: (b as any)(async (e: any): Promise<any> => {
      const t: any = await (N as any)("packet", e),
        r: any = (x as any).parser?.yy;
      if (!(r instanceof v)) throw new (Error as any)("parser.parser?.yy was not a PacketDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues.");
      ((w as any).debug as any)(t), (Y as any)(t, r);
    }, "parse")
  },
  O: any = (b as any)((e: any, t: any, r: any, s: any): any => {
    const n: any = (s as any).db,
      l: any = ((n as any).getConfig as any)(),
      {
        rowHeight: a,
        paddingY: i,
        bitWidth: d,
        bitsPerRow: c
      }: any = l,
      p: any = ((n as any).getPacket as any)(),
      o: any = ((n as any).getDiagramTitle as any)(),
      h: any = (a as any) + (i as any),
      g: any = ((h as any) * (((p as any).length as any) + (1 as any) as any) as any) - ((o ? 0 : a) as any),
      k: any = ((d as any) * (c as any) as any) + (2 as any),
      f: any = (C as any)(t);
    ((f as any).attr as any)("viewBox", `0 0 ${k} ${g}`), (S as any)(f, g, k, (l as any).useMaxWidth);
    for (const [y, B] of ((p as any).entries as any)()) (j as any)(f, B, y, l);
    ((((((((((((((f as any).append as any)("text") as any).text as any)(o) as any).attr as any)("x", (k as any) / (2 as any)) as any).attr as any)("y", (g as any) - ((h as any) / (2 as any) as any)) as any).attr as any)("dominant-baseline", "middle") as any).attr as any)("text-anchor", "middle") as any).attr as any)("class", "packetTitle");
  }, "draw"),
  j: any = (b as any)((e: any, t: any, r: any, {
    rowHeight: s,
    paddingX: n,
    paddingY: l,
    bitWidth: a,
    bitsPerRow: i,
    showBits: d
  }: any): any => {
    const c: any = ((e as any).append as any)("g"),
      p: any = ((r as any) * ((s as any) + (l as any) as any) as any) + (l as any);
    for (const o of t) {
      const h: any = ((((o as any).start as any) % (i as any) as any) * (a as any) as any) + (1 as any),
        g: any = (((((o as any).end as any) - ((o as any).start as any) as any) + (1 as any) as any) * (a as any) as any) - (n as any);
      if (((((((((((((c as any).append as any)("rect") as any).attr as any)("x", h) as any).attr as any)("y", p) as any).attr as any)("width", g) as any).attr as any)("height", s) as any).attr as any)("class", "packetBlock"), ((((((((((((((c as any).append as any)("text") as any).attr as any)("x", (h as any) + ((g as any) / (2 as any) as any)) as any).attr as any)("y", (p as any) + ((s as any) / (2 as any) as any)) as any).attr as any)("class", "packetLabel") as any).attr as any)("dominant-baseline", "middle") as any).attr as any)("text-anchor", "middle") as any).text as any)((o as any).label), !d) continue;
      const k: any = ((o as any).end as any) === ((o as any).start as any),
        f: any = (p as any) - (2 as any);
      ((((((((((((((c as any).append as any)("text") as any).attr as any)("x", (h as any) + ((k ? (g as any) / (2 as any) : 0) as any)) as any).attr as any)("y", f) as any).attr as any)("class", "packetByte start") as any).attr as any)("dominant-baseline", "auto") as any).attr as any)("text-anchor", k ? "middle" : "start") as any).text as any)((o as any).start), k || ((((((((((((((c as any).append as any)("text") as any).attr as any)("x", (h as any) + (g as any)) as any).attr as any)("y", f) as any).attr as any)("class", "packetByte end") as any).attr as any)("dominant-baseline", "auto") as any).attr as any)("text-anchor", "end") as any).text as any)((o as any).end);
    }
  }, "drawWord"),
  q: any = {
    draw: O
  },
  G: any = {
    byteFontSize: "10px",
    startByteColor: "black",
    endByteColor: "black",
    labelColor: "black",
    labelFontSize: "12px",
    titleColor: "black",
    titleFontSize: "14px",
    blockStrokeColor: "black",
    blockStrokeWidth: "1",
    blockFillColor: "#efefef"
  },
  H: any = (b as any)(({
    packet: e
  }: any = {}): any => {
    const t: any = (m as any)(G, e);
    return `
	.packetByte {
		font-size: ${(t as any).byteFontSize};
	}
	.packetByte.start {
		fill: ${(t as any).startByteColor};
	}
	.packetByte.end {
		fill: ${(t as any).endByteColor};
	}
	.packetLabel {
		fill: ${(t as any).labelColor};
		font-size: ${(t as any).labelFontSize};
	}
	.packetTitle {
		fill: ${(t as any).titleColor};
		font-size: ${(t as any).titleFontSize};
	}
	.packetBlock {
		stroke: ${(t as any).blockStrokeColor};
		stroke-width: ${(t as any).blockStrokeWidth};
		fill: ${(t as any).blockFillColor};
	}
	`;
  }, "styles"),
  J: any = {
    parser: x,
    get db(): any {
      return new (v as any)();
    },
    renderer: q,
    styles: H
  };
export { J as diagram };
//# debugId=f4fedf63-6ddd-4720-82a8-e4713d58a33b
