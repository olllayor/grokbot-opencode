declare var global: any;
declare var key: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "7a83a076-873c-456b-8c78-e9cfcaccf986", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-7a83a076-873c-456b-8c78-e9cfcaccf986");
  } catch (e: any) {}
} as any)();
import { c as cn, u as Ve, r as P, j as We } from "./index.eager-vendor-Qbf9YA6n.js";
import { i as Vn } from "./index.eager-platform-Dcfeegfw.js";
import { bd as Wn, bl as Yn, b7 as Zn, cs as qn, e3 as Jn, c$ as Qn, e4 as Xn, e5 as _n, e6 as et, e7 as nt, bA as tt, be as ot, bf as at, b9 as st, e8 as it, e9 as lt, ea as je, eb as rt, ec as an, ed as ct, ee as H, ef as ut, eg as dt, eh as ft, ei as mt, ej as un, ek as pt, el as gt } from "./index.eager-app-Cj5f8Gby.js";
import { i as yt } from "./chunk-finance-CSw6gjXN.js";
import { ak as bt } from "./index-ZYxf-aBb.js";
import { r as sn, i as kt, n as Ct, c as ue, f as ht, a as vt, C as dn, b as At, e as It } from "./chunk-connector-card-view-fPUuNO3n.js";
import { a as St } from "./chunk-mcp-connector-status-DhhAF8A6.js";
const wt: any = {
  kind: "account"
};
function Rt(this: any, t: any): any {
  return (t?.harness as any) === ("temporal" as any) && ((t as any).visibility as any) === ("team" as any) ? {
    kind: "grok-bot-team",
    agentId: (t as any).id
  } : wt;
}
function Lt(this: any, t: any, e: any): any {
  if (((e as any).length as any) === (0 as any)) return t;
  const s: any = new (Set as any)(((t as any).map as any)((c: any): any => (c as any).serverIdentifier));
  return [...t, ...((e as any).filter as any)((c: any): any => !((s as any).has as any)((c as any).serverIdentifier))];
}
class E extends (Error as any) {
  [key: string]: any;
  constructor(e: any, s: any = null) {
    super(e), (this as any).detail = s;
  }
  detail: any;
}
function ln(this: any, t: any): any {
  return (t?.status as any) === ("waiting" as any) || (t?.status as any) === ("openFailed" as any) ? (t as any).status : "stalled";
}
function Nt(this: any, t: any, e: any): any {
  switch (e) {
    case "authorize":
      return (t as any)({
        id: "yIVrHZ"
      });
    case "manage":
      return (t as any)({
        id: "wckWOP"
      });
    case "install":
    case "browse":
      return (t as any)({
        id: "m16xKo"
      });
  }
}
const fn: any = {
  kind: "idle"
};
function rn(this: any, t: any): any {
  return ((t as any).servedBy as any) === ("grok" as any) && (yt as any)(t);
}
function Dt(this: any, t: any): any {
  if (!(((t as any).status as any) === ("started" as any) || ((t as any).status as any) === ("already-authenticated" as any))) throw new (E as any)((t as any).status, ((t as any).status as any) === ("not-configured" as any) ? null : (un as any)(t));
}
async function Et(this: any, t: any, e: any, s: any, c: any): Promise<any> {
  if (!(s as any).current) {
    (s as any).current = !0, (c as any)({
      kind: "running",
      target: e
    });
    try {
      await (t as any)(), (c as any)(fn);
    } catch (p: any) {
      (c as any)({
        kind: "failed",
        target: e,
        detail: p instanceof E ? (p as any).detail : null
      });
    } finally {
      (s as any).current = !1;
    }
  }
}
async function Ft(this: any, t: any): Promise<any> {
  try {
    const e: any = await (t as any)();
    return ((e as any).status as any) === ("started" as any) ? {
      kind: "started"
    } : {
      kind: "failed",
      cause: e
    };
  } catch (e: any) {
    return {
      kind: "failed",
      cause: e
    };
  }
}
function mn(this: any, t: any): any {
  (mn as any).d = 883;
  const e: any = ((cn as any).c as any)(49),
    {
      connector: s,
      serverId: c,
      variant: p,
      reason: k,
      suggestions: l
    }: any = t,
    {
      _: b
    }: any = (Ve as any)(),
    {
      i18n: pn
    }: any = (Ve as any)(),
    F: any = (Wn as any)(),
    de: any = (Yn as any)();
  let O: any;
  ((e as any)[0] as any) !== (de as any) ? (O = (Rt as any)(de), (e as any)[0] = de, (e as any)[1] = O) : O = (e as any)[1];
  const G: any = O,
    fe: any = ((G as any).kind as any) === ("grok-bot-team" as any) ? (G as any).agentId : null,
    {
      mcp: me
    }: any = (Zn as any)();
  let $: any;
  ((e as any)[2] as any) !== (me as any) ? ($ = (): any => ((me as any).retainServers as any)({
    pollIntervalMs: pt
  }), (e as any)[2] = me, (e as any)[3] = $) : $ = (e as any)[3], (Vn as any)($);
  const {
      state: gn,
      refetch: K
    }: any = (qn as any)(),
    Ye: any = (Jn as any)(fe),
    {
      catalog: pe,
      isLoading: yn
    }: any = (Qn as any)(),
    {
      install: bn,
      isPending: kn
    }: any = (Xn as any)(),
    {
      authenticate: Cn,
      isPending: hn
    }: any = (_n as any)(),
    {
      remove: vn
    }: any = (et as any)(),
    M: any = (nt as any)(),
    ge: any = (tt as any)(),
    An: any = (bt as any)(),
    g: any = (ot as any)(),
    ye: any = (at as any)(),
    In: any = (st as any)("mcp_multi_account"),
    {
      start: j,
      isPending: Ze
    }: any = (it as any)(),
    [Sn, qe]: any = ((P as any).useState as any)(null),
    [V, W]: any = ((P as any).useState as any)(null),
    wn: any = ((P as any).useRef as any)(!1),
    [r, Rn]: any = ((P as any).useState as any)(fn),
    Y: any = ((r as any).kind as any) === ("running" as any) ? (r as any).target : null;
  let Z: any;
  ((e as any)[4] as any) !== ((r as any).detail as any) || ((e as any)[5] as any) !== ((r as any).kind as any) || ((e as any)[6] as any) !== ((r as any).target as any) ? (Z = ((r as any).kind as any) === ("failed" as any) && ((r as any).target as any) != (null as any) ? {
    accountKey: ((r as any).target as any).accountKey,
    detail: (r as any).detail
  } : null, (e as any)[4] = (r as any).detail, (e as any)[5] = (r as any).kind, (e as any)[6] = (r as any).target, (e as any)[7] = Z) : Z = (e as any)[7];
  const be: any = Z,
    ke: any = (Lt as any)(gn?.servers ?? [], (Ye as any).state?.servers ?? []);
  let Ce: any;
  e: {
    if ((c as any) != (null as any)) {
      const n: any = (sn as any)(ke, c);
      if (((n as any).kind as any) !== ("missing" as any)) {
        Ce = n;
        break e;
      }
    }
    Ce = (sn as any)(ke, s);
  }
  const y: any = Ce;
  let U: any;
  e: {
    if (((y as any).kind as any) === ("resolved" as any)) {
      U = [(y as any).target];
      break e;
    }
    if (((y as any).kind as any) !== ("ambiguous" as any)) {
      U = void 0;
      break e;
    }
    if ((kt as any)((y as any).targets)) {
      U = (y as any).targets;
      break e;
    }
    U = (Ct as any)((y as any).targets);
  }
  const d: any = U,
    q: any = (d as any) != (null as any) && ((d as any).length as any) === (1 as any) ? (d as any)[0] : void 0,
    u: any = ((y as any).kind as any) === ("ambiguous" as any) && (d as any) == (null as any) ? y : void 0,
    f: any = (d as any) != (null as any) && ((d as any).length as any) > (1 as any) ? d : void 0;
  let J: any;
  e: {
    if ((u as any) == (null as any)) {
      J = void 0;
      break e;
    }
    if ((((u as any).preferredTarget as any).status as any) !== ("disabledByTeamAdminPolicy" as any)) {
      J = (u as any).preferredTarget;
      break e;
    }
    J = (((u as any).targets as any).find as any)(Pt) ?? (u as any).preferredTarget;
  }
  const he: any = J,
    C: any = q ?? ((g as any) == (null as any) ? he : void 0),
    m: any = q ?? he ?? f?.[0],
    Je: any = (n: any, o: any): any => {
      if ((o as any) === ((n as any).accountKey as any)) return (n as any).serverIdentifier;
      const i: any = d?.find((z: any): any => ((z as any).accountKey as any) === (o as any));
      if ((i as any) != (null as any)) return (i as any).serverIdentifier;
      const a: any = ((n as any).accountKey as any) === (H as any) ? (n as any).serverIdentifier : d?.find(zt)?.serverIdentifier ?? (n as any).serverIdentifier;
      return (ut as any)(a, o);
    },
    [Ln, Nn]: any = ((P as any).useState as any)(null),
    ve: any = ((f as any) != (null as any) ? Ln : null) ?? C?.serverIdentifier ?? m?.serverIdentifier ?? s,
    Ae: any = (lt as any)();
  let Q: any;
  ((e as any)[8] as any) !== (Ae as any) ? (Q = (n: any): any => ((Ae as any).get as any)((je as any)(n)), (e as any)[8] = Ae, (e as any)[9] = Q) : Q = (e as any)[9];
  const Qe: any = Q,
    v: any = (f as any) != (null as any) && ((f as any).some as any)((n: any): any => ((je as any)((n as any).serverIdentifier) as any) === ((je as any)(ve) as any)) ? void 0 : (Qe as any)(ve),
    X: any = xt,
    I: any = Bt;
  let _: any;
  ((e as any)[10] as any) !== (M as any) ? (_ = (n: any): any => ((M as any).some as any)((o: any): any => ((o as any).outcome as any) !== ("cancelled" as any) && (I as any)(o, n)), (e as any)[10] = M, (e as any)[11] = _) : _ = (e as any)[11];
  const ee: any = _,
    Dn: any = ((M as any).some as any)((n: any): any => {
      if (((n as any).outcome as any) === ("cancelled" as any)) return !1;
      const o: any = (u as any) != (null as any) && (((u as any).targets as any).some as any)((a: any): any => (I as any)(n, a)) && (((u as any).targets as any).every as any)((a: any): any => (I as any)(n, a) || (X as any)(a)),
        i: any = (f as any) != (null as any) && ((f as any).some as any)((a: any): any => (I as any)(n, a)) && ((f as any).every as any)((a: any): any => (I as any)(n, a) || (X as any)(a) || (ee as any)(a));
      return (C as any) != (null as any) && (I as any)(n, C) || o || i || ((y as any).kind as any) === ("missing" as any) && (ue as any)((n as any).serverName, s);
    }),
    En: any = ((M as any).some as any)((n: any): any => ((n as any).outcome as any) === ("cancelled" as any) && ((y as any).kind as any) === ("missing" as any) && (ue as any)((n as any).serverName, s)),
    Xe: any = (c as any) != (null as any) && (m as any) != (null as any) ? (m as any).name : s,
    h: any = (ht as any)(pe, Xe),
    Ie: any = (m?.isTeamServer as any) === (!0 as any),
    S: any = h?.displayName ?? m?.name ?? s,
    Fn: any = ((F as any).buildServerIconResolver as any)(pe),
    T: any = (h as any) != (null as any) ? ((F as any).resolveCatalogEntryIcon as any)(h) : (Fn as any)(S, m?.url) ?? {},
    Kn: any = kn || hn || Ze,
    Mn: any = ((y as any).kind as any) === ("missing" as any) && ((fe as any) != (null as any) && (Ye as any).isLoading || (h as any) == (null as any) && yn),
    Se: any = Kn || Mn,
    ne: any = async (n: any, o: any): Promise<any> => {
      if ((dt as any)({
        serverName: (n as any).name,
        serverId: (n as any).id
      }), (rn as any)(n)) {
        const N: any = await (j as any)({
          repairLinkedBank: !0
        });
        (K as any)(), (Dt as any)(N);
        return;
      }
      const i: any = o ?? (n as any).accountKey,
        a: any = await (Cn as any)((n as any).id, i, "connector_card", fe ?? void 0);
      if (((a as any).status as any) === ("started" as any)) {
        const N: any = (Je as any)(n, i),
          D: any = await (ft as any)({
            connector: N,
            displayName: (mt as any)(S, i),
            authorizationUrl: (a as any).authorizationUrl,
            ...(((a as any).portConflictDetail as any) == (null as any) ? {} : {
              portConflictDetail: (a as any).portConflictDetail
            }),
            consent: {
              connectorName: S,
              icon: T
            }
          }, {
            openExternal: ge,
            confirm: An
          });
        (D as any) === ("opened" as any) && (f as any) != (null as any) && (Nn as any)(N);
        const jn: any = (o as any) != (null as any) && (o as any) !== (H as any) && (d?.some(($e: any): any => (($e as any).accountKey as any) === (o as any)) as any) !== (!0 as any);
        (D as any) === ("declined" as any) && jn && (await (((vn as any)({
          serverId: (n as any).id,
          accountKey: o
        }) as any).catch as any)(($e: any): any => {
          throw (K as any)(), $e;
        }));
        return;
      }
      if (((a as any).status as any) === ("already-authenticated" as any)) {
        (K as any)();
        return;
      }
      (K as any)();
      const z: any = ((a as any).status as any) === ("not-configured" as any) ? null : (un as any)(a);
      throw new (E as any)((a as any).status, z);
    },
    Un: any = async (n: any): Promise<any> => {
      if ((g as any) != (null as any) && (It as any)(n)) {
        (g as any)({
          kind: "mcp-install",
          name: (n as any).displayName
        }, (n as any).displayName);
        return;
      }
      const i: any = ((((await (bn as any)({
        entryId: (n as any).id,
        values: {}
      })) as any).servers as any).find as any)((a: any): any => (ue as any)((a as any).name, (n as any).displayName) || (ue as any)((a as any).name, (n as any).name));
      (i?.status as any) === ("needsAuth" as any) && (await (ne as any)(i));
    },
    we: any = (n: any, o: any): any => (Et as any)(n, (o as any) === (void 0 as any) ? null : o, wn, Rn);
  let te: any;
  ((e as any)[12] as any) !== (ye as any) ? (te = (): any => {
    ye?.();
  }, (e as any)[12] = ye, (e as any)[13] = te) : te = (e as any)[13];
  const Re: any = te,
    _e: any = (): any => {
      (an as any)(ve, ge, se);
    },
    Tn: any = (q?.status as any) === ("connected" as any) || (g as any) == (null as any) && (C?.status as any) === ("connected" as any) || (u as any) != (null as any) && (((u as any).targets as any).every as any)(X) && (((u as any).targets as any).some as any)(Tt) || (f as any) != (null as any) && ((f as any).every as any)((n: any): any => (X as any)(n) || (ee as any)(n)) && ((f as any).some as any)((n: any): any => ((n as any).status as any) === ("connected" as any) || (ee as any)(n)),
    oe: any = (q?.status as any) === ("disabledByTeamAdminPolicy" as any) || (u?.targets.every(Ut) ?? !1),
    ae: any = !oe && ((p as any) === ("connected" as any) || Tn || Dn),
    en: any = (g as any) != (null as any) && (u as any) != (null as any),
    Bn: any = (C as any) != (null as any);
  let w: any;
  e: {
    if (en) {
      w = "manage";
      break e;
    }
    if (Bn) {
      w = "authorize";
      break e;
    }
    if (((G as any).kind as any) === ("grok-bot-team" as any)) {
      w = "authorize";
      break e;
    }
    if ((h as any) == (null as any)) {
      w = "browse";
      break e;
    }
    w = "install";
  }
  const Le: any = w;
  let B: any;
  e: {
    if ((V as any) == (null as any)) {
      B = null;
      break e;
    }
    const n: any = C ?? d?.find(Mt) ?? d?.[0];
    if ((n as any) == (null as any)) {
      B = null;
      break e;
    }
    const o: any = (rt as any)(V);
    if (((o as any).length as any) === (0 as any)) {
      B = null;
      break e;
    }
    B = {
      slot: n,
      label: o,
      key: (Je as any)(n, o)
    };
  }
  const nn: any = B,
    xn: any = (): any => {
      if ((nn as any) == (null as any)) return;
      const {
        slot: n,
        label: o,
        key: i
      }: any = nn;
      (we as any)(async (): Promise<any> => {
        await (ne as any)(n, o), (W as any)(null);
      }, {
        accountKey: i,
        fromLabelRow: !0
      });
    },
    se: any = (): any => {
      (we as any)((): any => {
        if (en) {
          const n: any = he;
          if ((n as any) == (null as any)) throw new (E as any)("Ambiguous connector is unavailable");
          g?.({
            kind: "mcp-server",
            serverId: (n as any).id
          }, (n as any).name);
          return;
        }
        if ((C as any) != (null as any)) return (ne as any)(C);
        if (((G as any).kind as any) === ("grok-bot-team" as any)) throw (K as any)(), new (E as any)(`No marketplace row to authorize for ${s}`);
        if ((h as any) != (null as any)) return (Un as any)(h);
        if ((g as any) != (null as any)) {
          (g as any)({
            kind: "mcp-install",
            name: s
          }, s);
          return;
        }
        throw new (E as any)(`No connector available to add for ${s}`);
      });
    },
    zn: any = new (Set as any)(((ke as any).map as any)(Kt)),
    Pn: any = (vt as any)(pe, zn, Xe, l ?? []);
  let ie: any;
  ((e as any)[14] as any) !== (k as any) ? (ie = k?.trim(), (e as any)[14] = k, (e as any)[15] = ie) : ie = (e as any)[15];
  const Ne: any = ie,
    tn: any = (Ne as any) != (null as any) && ((Ne as any).length as any) > (0 as any) ? Ne : h?.description,
    De: any = f?.map((n: any): any => {
      const o: any = ((n as any).status as any) === ("connected" as any) || (ee as any)(n),
        i: any = o ? void 0 : (Qe as any)((n as any).serverIdentifier),
        a: any = (ln as any)(i),
        z: any = (i?.failureDetail as any) == (null as any) ? {} : {
          failureDetail: (i as any).failureDetail
        },
        N: any = (i?.portConflictDetail as any) == (null as any) ? {} : {
          portConflictDetail: (i as any).portConflictDetail
        },
        D: any = (): any => {
          (we as any)((): any => (ne as any)(n), {
            accountKey: (n as any).serverIdentifier,
            fromLabelRow: !1
          });
        };
      return {
        key: (n as any).serverIdentifier,
        label: ((n as any).accountKey as any) === (H as any) ? ((pn as any)._ as any)({
          id: "Bn9+El"
        }) : (ct as any)((n as any).accountKey),
        isConnected: o,
        statusLabel: (St as any)(b, (n as any).status),
        onAuthorize: D,
        ...((i as any) == (null as any) ? {} : {
          handoff: {
            status: a,
            ...z,
            ...N,
            onReopen: (): any => (an as any)((n as any).serverIdentifier, ge, D),
            onRetry: D
          }
        })
      };
    }),
    Ee: any = In && (De as any) != (null as any) && (m as any) != (null as any) && ((m as any).url as any) != (null as any) && !(m as any).isTeamServer,
    Hn: any = (m as any) != (null as any) && (rn as any)(m);
  let le: any;
  ((e as any)[16] as any) !== (j as any) ? (le = async (): Promise<any> => {
    (qe as any)(null), (qe as any)(await (Ft as any)(j));
  }, (e as any)[16] = j, (e as any)[17] = le) : le = (e as any)[17];
  const On: any = le,
    Gn: any = (v?.failureDetail as any) == (null as any) ? {} : {
      failureDetail: (v as any).failureDetail
    },
    $n: any = (v?.portConflictDetail as any) == (null as any) ? {} : {
      portConflictDetail: (v as any).portConflictDetail
    },
    on: any = ((r as any).kind as any) === ("failed" as any) && ((r as any).target as any) == (null as any) ? (r as any).detail : null;
  let x: any;
  e: {
    if (ae) {
      x = null;
      break e;
    }
    if ((on as any) != (null as any)) {
      x = {
        status: "stalled",
        failureDetail: on,
        onReopen: _e,
        onRetry: se
      };
      break e;
    }
    if (En || (v as any) == (null as any)) {
      x = null;
      break e;
    }
    x = {
      status: (ln as any)(v),
      ...Gn,
      ...$n,
      signInUrl: (v as any).authorizationUrl,
      onReopen: _e,
      onRetry: se
    };
  }
  const Fe: any = x,
    Ke: any = dn,
    Me: any = (De as any) == (null as any) ? {} : {
      accountFooter: De
    },
    Ue: any = Hn ? {
      addBank: {
        isBusy: Ze,
        hasFailed: (Sn?.kind as any) === ("failed" as any),
        onAdd: (): any => {
          (On as any)();
        }
      }
    } : {};
  let R: any;
  ((e as any)[18] as any) !== (b as any) || ((e as any)[19] as any) !== ((r as any).kind as any) || ((e as any)[20] as any) !== (Le as any) ? (R = ((r as any).kind as any) === ("failed" as any) ? (b as any)({
    id: "6gRgw8"
  }) : (Nt as any)(b, Le), (e as any)[18] = b, (e as any)[19] = (r as any).kind, (e as any)[20] = Le, (e as any)[21] = R) : R = (e as any)[21];
  const Te: any = (tn as any) == (null as any) ? {} : {
      description: tn
    },
    Be: any = ((T as any).iconId as any) == (null as any) ? {} : {
      iconId: (T as any).iconId
    },
    xe: any = ((T as any).iconUrl as any) == (null as any) ? {} : {
      iconUrl: (T as any).iconUrl
    },
    ze: any = (V as any) == (null as any) ? null : {
      value: V,
      isBusy: (Y?.fromLabelRow as any) === (!0 as any),
      isDisabled: (Y as any) != (null as any) && !(Y as any).fromLabelRow,
      onChange: W,
      onSubmit: xn,
      onCancel: (): any => (W as any)(null)
    },
    Pe: any = se;
  let L: any;
  ((e as any)[22] as any) !== (Ee as any) ? (L = Ee ? {
    onAddAccount: (): any => (W as any)("")
  } : {}, (e as any)[22] = Ee, (e as any)[23] = L) : L = (e as any)[23];
  const He: any = Y?.accountKey ?? null;
  let re: any;
  ((e as any)[24] as any) !== (F as any) || ((e as any)[25] as any) !== (g as any) ? (re = (n: any): any => {
    const o: any = ((F as any).resolveCatalogEntryIcon as any)(n);
    return {
      key: (n as any).id,
      displayName: (n as any).displayName,
      ...(((o as any).iconId as any) == (null as any) ? {} : {
        iconId: (o as any).iconId
      }),
      ...(((o as any).iconUrl as any) == (null as any) ? {} : {
        iconUrl: (o as any).iconUrl
      }),
      onOpen: (): any => g?.({
        kind: "mcp-install",
        name: (n as any).displayName
      }, (n as any).displayName)
    };
  }, (e as any)[24] = F, (e as any)[25] = g, (e as any)[26] = re) : re = (e as any)[26];
  const Oe: any = ((Pn as any).map as any)(re),
    Ge: any = m?.toolCount ?? 0;
  let ce: any;
  return ((e as any)[27] as any) !== (Ke as any) || ((e as any)[28] as any) !== (be as any) || ((e as any)[29] as any) !== (Fe as any) || ((e as any)[30] as any) !== (S as any) || ((e as any)[31] as any) !== (Re as any) || ((e as any)[32] as any) !== (Se as any) || ((e as any)[33] as any) !== (oe as any) || ((e as any)[34] as any) !== (ae as any) || ((e as any)[35] as any) !== (Ie as any) || ((e as any)[36] as any) !== (Me as any) || ((e as any)[37] as any) !== (Ue as any) || ((e as any)[38] as any) !== (R as any) || ((e as any)[39] as any) !== (Te as any) || ((e as any)[40] as any) !== (Be as any) || ((e as any)[41] as any) !== (xe as any) || ((e as any)[42] as any) !== (ze as any) || ((e as any)[43] as any) !== (Pe as any) || ((e as any)[44] as any) !== (L as any) || ((e as any)[45] as any) !== (He as any) || ((e as any)[46] as any) !== (Oe as any) || ((e as any)[47] as any) !== (Ge as any) ? (ce = ((We as any).jsx as any)(Ke, {
    ...Me,
    ...Ue,
    actionLabel: R,
    authorizeFailure: be,
    ...Te,
    displayName: S,
    handoff: Fe,
    ...Be,
    ...xe,
    isActionPending: Se,
    isAdminDisabled: oe,
    isConnected: ae,
    isTeam: Ie,
    labelInput: ze,
    onAction: Pe,
    ...L,
    onBrowseMore: Re,
    pendingAccountKey: He,
    suggestions: Oe,
    toolCount: Ge
  }), (e as any)[27] = Ke, (e as any)[28] = be, (e as any)[29] = Fe, (e as any)[30] = S, (e as any)[31] = Re, (e as any)[32] = Se, (e as any)[33] = oe, (e as any)[34] = ae, (e as any)[35] = Ie, (e as any)[36] = Me, (e as any)[37] = Ue, (e as any)[38] = R, (e as any)[39] = Te, (e as any)[40] = Be, (e as any)[41] = xe, (e as any)[42] = ze, (e as any)[43] = Pe, (e as any)[44] = L, (e as any)[45] = He, (e as any)[46] = Oe, (e as any)[47] = Ge, (e as any)[48] = ce) : ce = (e as any)[48], ce;
}
function Kt(this: any, t: any): any {
  return (At as any)((t as any).name);
}
function Mt(this: any, t: any): any {
  return ((t as any).accountKey as any) === (H as any);
}
function Ut(this: any, t: any): any {
  return ((t as any).status as any) === ("disabledByTeamAdminPolicy" as any);
}
function Tt(this: any, t: any): any {
  return ((t as any).status as any) === ("connected" as any);
}
function Bt(this: any, t: any, e: any): any {
  return ((t as any).serverId as any) === ((e as any).id as any) && ((t as any).accountKey as any) === ((e as any).accountKey as any);
}
function xt(this: any, t: any): any {
  return ((t as any).status as any) === ("connected" as any) || ((t as any).status as any) === ("disabledByTeamAdminPolicy" as any);
}
function zt(this: any, t: any): any {
  return ((t as any).accountKey as any) === (H as any);
}
function Pt(this: any, t: any): any {
  return ((t as any).status as any) !== ("disabledByTeamAdminPolicy" as any);
}
function A(this: any): any {}
function Ht(this: any, t: any): any {
  (Ht as any).d = 888;
  const e: any = ((cn as any).c as any)(8),
    {
      _: s
    }: any = (Ve as any)(),
    c: any = (gt as any)();
  let p: any;
  if (((e as any)[0] as any) !== (s as any) || ((e as any)[1] as any) !== ((t as any).connector as any) || ((e as any)[2] as any) !== (c as any)) {
    p = ((Symbol as any).for as any)("react.early_return_sentinel");
    e: {
      const l: any = ((c as any).get as any)((t as any).connector);
      if ((l as any) != (null as any)) {
        let b: any;
        ((e as any)[4] as any) !== (s as any) ? (b = (s as any)({
          id: "m16xKo"
        }), (e as any)[4] = s, (e as any)[5] = b) : b = (e as any)[5], p = ((We as any).jsx as any)(dn, {
          ...(((l as any).accountFooter as any) == (null as any) ? {} : {
            accountFooter: (((l as any).accountFooter as any).map as any)(Gt)
          }),
          actionLabel: b,
          ...(((l as any).description as any) == (null as any) ? {} : {
            description: (l as any).description
          }),
          displayName: (l as any).displayName,
          handoff: ((l as any).oauth as any) != (null as any) ? {
            status: (l as any).oauth,
            onReopen: A,
            onRetry: A
          } : null,
          ...(((l as any).iconId as any) == (null as any) ? {} : {
            iconId: (l as any).iconId
          }),
          ...(((l as any).iconUrl as any) == (null as any) ? {} : {
            iconUrl: (l as any).iconUrl
          }),
          isActionPending: !1,
          isAdminDisabled: !1,
          isConnected: (l as any).isConnected,
          isTeam: !1,
          onAction: A,
          ...(((l as any).canAddAccount as any) === (!0 as any) ? {
            onAddAccount: A
          } : {}),
          onBrowseMore: A,
          suggestions: ((((l as any).suggestions ?? []) as any).map as any)(Ot),
          toolCount: (l as any).toolCount ?? 0
        });
        break e;
      }
    }
    (e as any)[0] = s, (e as any)[1] = (t as any).connector, (e as any)[2] = c, (e as any)[3] = p;
  } else p = (e as any)[3];
  if ((p as any) !== (((Symbol as any).for as any)("react.early_return_sentinel") as any)) return p;
  let k: any;
  return ((e as any)[6] as any) !== (t as any) ? (k = ((We as any).jsx as any)(mn, {
    ...t
  }), (e as any)[6] = t, (e as any)[7] = k) : k = (e as any)[7], k;
}
function Ot(this: any, t: any): any {
  return {
    key: (t as any).displayName,
    displayName: (t as any).displayName,
    ...(((t as any).iconId as any) == (null as any) ? {} : {
      iconId: (t as any).iconId
    }),
    ...(((t as any).iconUrl as any) == (null as any) ? {} : {
      iconUrl: (t as any).iconUrl
    }),
    onOpen: A
  };
}
function Gt(this: any, t: any): any {
  return {
    key: (t as any).label,
    label: (t as any).label,
    isConnected: (t as any).isConnected,
    statusLabel: (t as any).statusLabel,
    onAuthorize: A
  };
}
export { Ht as C };
//# debugId=7a83a076-873c-456b-8c78-e9cfcaccf986
