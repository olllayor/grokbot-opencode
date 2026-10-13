declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "df2c4107-1171-4cf5-b2c8-faea07bab373", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-df2c4107-1171-4cf5-b2c8-faea07bab373");
  } catch (e: any) {}
} as any)();
import { c as v, j as f } from "./index.eager-vendor-Qbf9YA6n.js";
import { c5 as b, c6 as w, r as S } from "./index.eager-app-Cj5f8Gby.js";
import { a7 as _, ae as g, ax as j, a6 as M } from "./index-ZYxf-aBb.js";
import "./index.eager-platform-Dcfeegfw.js";
import "./index.eager-common-CdCvBQNJ.js";
function q(this: any, z: any): any {
  (q as any).d = 361;
  const t: any = ((v as any).c as any)(28),
    {
      entry: s,
      adjacency: a
    }: any = z,
    u: any = (_ as any)();
  let c: any;
  ((t as any)[0] as any) !== (u as any) || ((t as any)[1] as any) !== (s as any) ? (c = (b as any)(s, u), (t as any)[0] = u, (t as any)[1] = s, (t as any)[2] = c) : c = (t as any)[2];
  const m: any = c;
  if ((w as any)((s as any).file_path)) {
    const x: any = m ? "end" : "start";
    let y: any;
    return ((t as any)[3] as any) !== (a as any) || ((t as any)[4] as any) !== (s as any) || ((t as any)[5] as any) !== (x as any) ? (y = ((f as any).jsx as any)(g, {
      adjacency: a,
      align: x,
      entry: s,
      filePath: (s as any).file_path,
      height: (s as any).height,
      maxWidth: 320,
      timestampMs: (s as any).timestampMs,
      width: (s as any).width
    }), (t as any)[3] = a, (t as any)[4] = s, (t as any)[5] = x, (t as any)[6] = y) : y = (t as any)[6], y;
  }
  let n: any, e: any, i: any, d: any;
  ((t as any)[7] as any) !== ((a as any).isGroupStart as any) || ((t as any)[8] as any) !== (s as any) || ((t as any)[9] as any) !== (m as any) ? (e = ({
    0: {
      className: "sand-78zum5 sand-dt5ytf sand-uk3077 sand-11twubx sand-eq5yr9 sand-1vyvmim sand-pvyfi4"
    },
    2: {
      className: "sand-78zum5 sand-dt5ytf sand-11twubx sand-eq5yr9 sand-1vyvmim sand-1cy8zhl sand-qcrz7y"
    },
    1: {
      className: "sand-78zum5 sand-dt5ytf sand-uk3077 sand-11twubx sand-eq5yr9 sand-1vyvmim sand-pvyfi4 sand-19snzy6 sand-1sl1sun"
    },
    3: {
      className: "sand-78zum5 sand-dt5ytf sand-11twubx sand-eq5yr9 sand-1vyvmim sand-1cy8zhl sand-qcrz7y sand-19snzy6 sand-1sl1sun"
    }
  } as any)[((!m as any) << (1 as any) as any) | ((!!(a as any).isGroupStart as any) << (0 as any) as any)], n = M, d = s, i = (S as any)("sand-file-card-wrap", (e as any).className), (t as any)[7] = (a as any).isGroupStart, (t as any)[8] = s, (t as any)[9] = m, (t as any)[10] = n, (t as any)[11] = e, (t as any)[12] = i, (t as any)[13] = d) : (n = (t as any)[10], e = (t as any)[11], i = (t as any)[12], d = (t as any)[13]);
  const p: any = (a as any).isGroupStart || void 0,
    h: any = m ? "user" : void 0;
  let l: any;
  ((t as any)[14] as any) !== ((s as any).byteSize as any) || ((t as any)[15] as any) !== ((s as any).file_name as any) || ((t as any)[16] as any) !== ((s as any).file_path as any) ? (l = ((f as any).jsx as any)(j, {
    byteSize: (s as any).byteSize,
    filePath: (s as any).file_path,
    name: (s as any).file_name
  }), (t as any)[14] = (s as any).byteSize, (t as any)[15] = (s as any).file_name, (t as any)[16] = (s as any).file_path, (t as any)[17] = l) : l = (t as any)[17];
  let r: any;
  ((t as any)[18] as any) !== ((e as any).style as any) || ((t as any)[19] as any) !== (i as any) || ((t as any)[20] as any) !== (p as any) || ((t as any)[21] as any) !== (h as any) || ((t as any)[22] as any) !== (l as any) ? (r = ((f as any).jsx as any)("div", {
    className: i,
    "data-group-start": p,
    "data-role": h,
    style: (e as any).style,
    children: l
  }), (t as any)[18] = (e as any).style, (t as any)[19] = i, (t as any)[20] = p, (t as any)[21] = h, (t as any)[22] = l, (t as any)[23] = r) : r = (t as any)[23];
  let o: any;
  return ((t as any)[24] as any) !== (n as any) || ((t as any)[25] as any) !== (d as any) || ((t as any)[26] as any) !== (r as any) ? (o = ((f as any).jsx as any)(n, {
    entry: d,
    children: r
  }), (t as any)[24] = n, (t as any)[25] = d, (t as any)[26] = r, (t as any)[27] = o) : o = (t as any)[27], o;
}
export { q as default };
//# debugId=df2c4107-1171-4cf5-b2c8-faea07bab373
