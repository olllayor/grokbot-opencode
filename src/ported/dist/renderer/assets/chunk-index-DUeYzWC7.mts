declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "9c60ee03-4f93-4a17-b72e-75ed14cd8891", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-9c60ee03-4f93-4a17-b72e-75ed14cd8891");
  } catch (e: any) {}
} as any)();
import { bk as d } from "./index.eager-app-Cj5f8Gby.js";
import "./index.eager-platform-Dcfeegfw.js";
import "./index.eager-common-CdCvBQNJ.js";
import "./index.eager-vendor-Qbf9YA6n.js";
const c: string = "USD",
  u: number = 1e6;
function a(this: any, n: any): any {
  return {
    currencyCode: c,
    unitMicros: ((Math as any).round as any)((n as any) * (u as any))
  };
}
function l(this: any, n: any, i: any): any {
  const e: any = [{
      id: "dev-spend-1",
      kind: "spend",
      amount: (a as any)(-2.5),
      createdAt: (i as any) - (36e5 as any)
    }, {
      id: "dev-purchase-1",
      kind: "purchase",
      amount: (a as any)(15),
      createdAt: (i as any) - (864e5 as any),
      status: "succeeded"
    }],
    r: any = {
      balance: (a as any)(12.5),
      autoTopUp: null,
      autoTopUpSpentThisPeriod: (a as any)(0),
      pendingTopUps: 0,
      limits: {
        minimum: (a as any)(5),
        maximum: (a as any)(500),
        monthlyCapMaximum: (a as any)(2e3)
      },
      history: e
    };
  switch (n) {
    case "saved-card":
      return {
        ...r,
        availability: {
          kind: "available",
          topUpMethod: "saved-payment-method"
        }
      };
    case "no-card":
      return {
        ...r,
        availability: {
          kind: "available",
          topUpMethod: "inline-payment-method"
        }
      };
    case "not-permitted":
      return {
        ...r,
        availability: {
          kind: "unavailable",
          reason: "not-permitted"
        }
      };
  }
}
function w(this: any, n: any, i: any): any {
  const e: any = {
      wallet: (l as any)(n, ((i as any).now as any)()),
      purchases: 0
    },
    r: any = (t: any): any => {
      (e as any).purchases += 1;
      const s: any = {
        id: `dev-purchase-${((e as any).purchases as any) + (1 as any)}`,
        kind: "purchase",
        amount: t,
        createdAt: ((i as any).now as any)(),
        status: "succeeded"
      };
      (e as any).wallet = {
        ...(e as any).wallet,
        balance: {
          currencyCode: c,
          unitMicros: ((((e as any).wallet as any).balance as any).unitMicros as any) + ((t as any).unitMicros as any)
        },
        history: [s, ...((e as any).wallet as any).history]
      };
    },
    o: any = {
      capabilities: {
        authed: !0
      },
      wallet: (): any => (e as any).wallet,
      async getWallet(): Promise<any> {
        return (e as any).wallet;
      },
      async topUp(t: any): Promise<any> {
        return (r as any)((t as any).amount), {
          kind: "succeeded",
          amount: (t as any).amount
        };
      },
      async setAutoTopUpRule(t: any): Promise<any> {
        return (e as any).wallet = {
          ...(e as any).wallet,
          autoTopUp: t
        }, t;
      }
    };
  return (n as any) === ("no-card" as any) && ((o as any).startInlineTopUp = async (t: any): Promise<any> => ({
    kind: "redirect",
    url: `${d}&dev-top-up=${((t as any).amount as any).unitMicros}`
  })), o;
}
export { w as createScriptedPrepaidEdge };
//# debugId=9c60ee03-4f93-4a17-b72e-75ed14cd8891
