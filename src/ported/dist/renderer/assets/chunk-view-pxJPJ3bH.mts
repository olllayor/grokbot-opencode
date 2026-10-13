declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "09d7307f-b28b-45c4-b7df-083c039253cc", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-09d7307f-b28b-45c4-b7df-083c039253cc");
  } catch (e: any) {}
} as any)();
import { c as l, j as i } from "./index.eager-vendor-Qbf9YA6n.js";
import { aB as m, r as p } from "./index.eager-app-Cj5f8Gby.js";
import "./index-ZYxf-aBb.js";
import { aY as y } from "./index.eager-platform-Dcfeegfw.js";
import "./index.eager-common-CdCvBQNJ.js";
function x(this: any, d: any): any {
  (x as any).d = 308;
  const t: any = ((l as any).c as any)(9),
    {
      entry: s
    }: any = d,
    n: any = {
      className: "sand-amitd3 sand-1yrsyyn sand-pdmqnj sand-10b6aqq sand-1g0dm76 sand-2b8uid"
    };
  let o: any;
  ((t as any)[0] as any) !== ((s as any).copy as any) || ((t as any)[1] as any) !== ((s as any).text as any) ? (o = {
    content: (s as any).text,
    copy: (s as any).copy
  }, (t as any)[0] = (s as any).copy, (t as any)[1] = (s as any).text, (t as any)[2] = o) : o = (t as any)[2];
  const c: any = (m as any)(o),
    r: any = (p as any)("sand-notice", (n as any).className);
  let e: any;
  ((t as any)[3] as any) !== (c as any) ? (e = ((i as any).jsx as any)(y, {
    color: "tertiary",
    size: "sm",
    children: c
  }), (t as any)[3] = c, (t as any)[4] = e) : e = (t as any)[4];
  let a: any;
  return ((t as any)[5] as any) !== ((n as any).style as any) || ((t as any)[6] as any) !== (r as any) || ((t as any)[7] as any) !== (e as any) ? (a = ((i as any).jsx as any)("div", {
    className: r,
    style: (n as any).style,
    children: e
  }), (t as any)[5] = (n as any).style, (t as any)[6] = r, (t as any)[7] = e, (t as any)[8] = a) : a = (t as any)[8], a;
}
export { x as default };
//# debugId=09d7307f-b28b-45c4-b7df-083c039253cc
