declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "cee7ef77-5090-4076-a027-2c99d2e759a9", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-cee7ef77-5090-4076-a027-2c99d2e759a9");
  } catch (e: any) {}
} as any)();
import { c as y, r as S } from "./index.eager-vendor-Qbf9YA6n.js";
import { bg as M, b7 as p, bh as b, b8 as E, bi as v } from "./index.eager-app-Cj5f8Gby.js";
function O(this: any, e: any): any {
  return ((S as any).useSyncExternalStore as any)((e as any).subscribe, (e as any).get, (e as any).get);
}
function j(this: any): any {
  return (M as any)((((p as any)() as any).credentials as any).statusSnapshots, x);
}
function x(this: any, e: any): any {
  return ((b as any)(e)?.connected as any) === (!0 as any);
}
function k(this: any): any {
  const e: any = ((y as any).c as any)(9),
    n: any = ((p as any)() as any).credentials,
    t: any = (O as any)((n as any).statusSnapshots);
  let i: any;
  ((e as any)[0] as any) !== (t as any) ? (i = (b as any)(t), (e as any)[0] = t, (e as any)[1] = i) : i = (e as any)[1];
  const r: any = ((t as any).status as any) === ("failed" as any) ? (t as any).failure : null,
    c: any = ((t as any).status as any) === ("loading" as any);
  let s: any;
  ((e as any)[2] as any) !== (n as any) ? (s = (): any => {
    ((n as any).refresh as any)();
  }, (e as any)[2] = n, (e as any)[3] = s) : s = (e as any)[3];
  let a: any;
  return ((e as any)[4] as any) !== (i as any) || ((e as any)[5] as any) !== (r as any) || ((e as any)[6] as any) !== (c as any) || ((e as any)[7] as any) !== (s as any) ? (a = {
    data: i,
    error: r,
    isFetching: c,
    refresh: s
  }, (e as any)[4] = i, (e as any)[5] = r, (e as any)[6] = c, (e as any)[7] = s, (e as any)[8] = a) : a = (e as any)[8], a;
}
function D(this: any): any {
  const e: any = ((y as any).c as any)(9),
    n: any = ((p as any)() as any).credentials,
    t: any = (O as any)((n as any).directorySnapshots);
  let i: any;
  ((e as any)[0] as any) !== (t as any) ? (i = ((t as any).status as any) === ("empty" as any) ? null : (b as any)(t), (e as any)[0] = t, (e as any)[1] = i) : i = (e as any)[1];
  const r: any = ((t as any).status as any) === ("failed" as any) ? (t as any).failure : null,
    c: any = ((t as any).status as any) === ("loading" as any);
  let s: any;
  ((e as any)[2] as any) !== (n as any) ? (s = (): any => {
    ((n as any).refresh as any)();
  }, (e as any)[2] = n, (e as any)[3] = s) : s = (e as any)[3];
  let a: any;
  return ((e as any)[4] as any) !== (i as any) || ((e as any)[5] as any) !== (r as any) || ((e as any)[6] as any) !== (c as any) || ((e as any)[7] as any) !== (s as any) ? (a = {
    data: i,
    error: r,
    isFetching: c,
    refresh: s
  }, (e as any)[4] = i, (e as any)[5] = r, (e as any)[6] = c, (e as any)[7] = s, (e as any)[8] = a) : a = (e as any)[8], a;
}
function F(this: any): any {
  const e: any = ((y as any).c as any)(3),
    n: any = ((p as any)() as any).credentials;
  let t: any;
  return ((e as any)[0] as any) !== ((n as any).approve as any) || ((e as any)[1] as any) !== ((n as any).deny as any) ? (t = {
    approve: (n as any).approve,
    deny: (n as any).deny
  }, (e as any)[0] = (n as any).approve, (e as any)[1] = (n as any).deny, (e as any)[2] = t) : t = (e as any)[2], t;
}
function N(this: any, e: any): any {
  return (typeof e as any) != ("object" as any) || (e as any) == (null as any) || !("code" in e) ? null : ((e as any).code as any) === ("permission" as any) || ((e as any).code as any) === ("cancelled" as any) || ((e as any).code as any) === ("denied" as any) ? (e as any).code : null;
}
function R(this: any, e: any): any {
  if (!(e as any).ok) throw ((Object as any).assign as any)(new (Error as any)((e as any).message), {
    code: (e as any).code
  });
  return (e as any).result;
}
function q(this: any, e: any, n: any): any {
  const t: any = ((y as any).c as any)(16),
    {
      onSuccessHoldChange: i,
      onSuccessComplete: r
    }: any = n,
    {
      credentials: c
    }: any = (p as any)(),
    [s]: any = ((S as any).useState as any)(v),
    [a, o]: any = ((S as any).useState as any)(!1),
    f: any = (O as any)((c as any).readinessSnapshots),
    d: any = ((S as any).useSyncExternalStore as any)((s as any).subscribe, (s as any).read, (s as any).read);
  let l: any;
  ((t as any)[0] as any) !== (c as any) || ((t as any)[1] as any) !== (r as any) || ((t as any)[2] as any) !== (i as any) || ((t as any)[3] as any) !== (s as any) ? (l = async (A: any): Promise<any> => ((o as any)(!0), ((s as any).set as any)("checking"), await ((((((c as any).startMint as any)(A) as any).then as any)((w: any): any => {
    const I: any = (R as any)(w);
    return i?.(!0), ((s as any).holdConnected as any)((): any => {
      ((((c as any).refresh as any)() as any).finally as any)((): any => {
        r?.(), i?.(!1), ((s as any).set as any)(null);
      });
    }), I;
  }, (w: any): any => {
    throw ((s as any).set as any)(null), i?.(!1), ((c as any).refresh as any)(), w;
  }) as any).finally as any)((): any => (o as any)(!1))), (t as any)[0] = c, (t as any)[1] = r, (t as any)[2] = i, (t as any)[3] = s, (t as any)[4] = l) : l = (t as any)[4];
  const m: any = l;
  let u: any;
  ((t as any)[5] as any) !== (f as any) ? (u = (b as any)(f), (t as any)[5] = f, (t as any)[6] = u) : u = (t as any)[6];
  const g: any = ((f as any).status as any) === ("loading" as any);
  let h: any;
  ((t as any)[7] as any) !== (c as any) ? (h = (): any => {
    ((c as any).refreshReadiness as any)();
  }, (t as any)[7] = c, (t as any)[8] = h) : h = (t as any)[8];
  const P: any = a || (d as any) === ("connected" as any);
  let C: any;
  return ((t as any)[9] as any) !== (d as any) || ((t as any)[10] as any) !== (m as any) || ((t as any)[11] as any) !== (u as any) || ((t as any)[12] as any) !== (g as any) || ((t as any)[13] as any) !== (h as any) || ((t as any)[14] as any) !== (P as any) ? (C = {
    readiness: u,
    isCheckingReadiness: g,
    refreshReadiness: h,
    start: m,
    stage: d,
    isMinting: P
  }, (t as any)[9] = d, (t as any)[10] = m, (t as any)[11] = u, (t as any)[12] = g, (t as any)[13] = h, (t as any)[14] = P, (t as any)[15] = C) : C = (t as any)[15], C;
}
function H(this: any): any {
  const e: any = ((y as any).c as any)(10),
    {
      credentials: n
    }: any = (p as any)(),
    t: any = (E as any)((n as any).sync),
    i: any = (E as any)((n as any).disconnect),
    [r, c]: any = ((S as any).useState as any)(!1);
  let s: any;
  ((e as any)[0] as any) !== (n as any) ? (s = async (l: any, m: any): Promise<any> => {
    (c as any)(!0);
    let u: any;
    return (m as any) == (null as any) ? u = {
      accountUuid: (l as any).accountUuid,
      vaultName: (l as any).vaultName,
      connectionId: (l as any).connectionId,
      ...(((l as any).accountEmail as any) == (null as any) ? {} : {
        accountEmail: (l as any).accountEmail
      }),
      ...(((l as any).accountUrl as any) == (null as any) ? {} : {
        accountUrl: (l as any).accountUrl
      })
    } : u = {
      serviceAccountToken: m,
      connectionId: (l as any).connectionId
    }, await ((((((n as any).startMint as any)(u) as any).then as any)((g: any): any => {
      const h: any = (R as any)(g);
      return ((n as any).refresh as any)(), h;
    }, (g: any): any => {
      throw ((n as any).refresh as any)(), g;
    }) as any).finally as any)((): any => (c as any)(!1));
  }, (e as any)[0] = n, (e as any)[1] = s) : s = (e as any)[1];
  const a: any = s,
    o: any = (E as any)((n as any).connectOAuth),
    f: any = (t as any).isPending || (i as any).isPending || r || (o as any).isPending;
  let d: any;
  return ((e as any)[2] as any) !== ((o as any).isPending as any) || ((e as any)[3] as any) !== ((o as any).run as any) || ((e as any)[4] as any) !== ((n as any).cancelOAuth as any) || ((e as any)[5] as any) !== ((i as any).run as any) || ((e as any)[6] as any) !== (a as any) || ((e as any)[7] as any) !== ((t as any).run as any) || ((e as any)[8] as any) !== (f as any) ? (d = {
    sync: (t as any).run,
    disconnect: (i as any).run,
    renew: a,
    connectOAuth: (o as any).run,
    cancelOAuth: (n as any).cancelOAuth,
    isConnectingOAuth: (o as any).isPending,
    isPending: f
  }, (e as any)[2] = (o as any).isPending, (e as any)[3] = (o as any).run, (e as any)[4] = (n as any).cancelOAuth, (e as any)[5] = (i as any).run, (e as any)[6] = a, (e as any)[7] = (t as any).run, (e as any)[8] = f, (e as any)[9] = d) : d = (e as any)[9], d;
}
export { D as a, F as b, q as c, N as d, k as e, H as f, j as u };
//# debugId=cee7ef77-5090-4076-a027-2c99d2e759a9
