import { bk } from "./index.eager-app-Cj5f8Gby.js";
import "./index.eager-platform-Dcfeegfw.js";
import "./index.eager-common-CdCvBQNJ.js";
import "./index.eager-vendor-Qbf9YA6n.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "9c60ee03-4f93-4a17-b72e-75ed14cd8891";
            e._sentryDebugIdIdentifier = "sentry-dbid-9c60ee03-4f93-4a17-b72e-75ed14cd8891";
        }
    } catch (e) {}
})();
const currencyCode = "USD";
const u = 1000000;
function a(n) {
    return {
        currencyCode,
        unitMicros: Math.round(n * u)
    };
}
function l(n, i) {
    const history = [
        {
            id: "dev-spend-1",
            kind: "spend",
            amount: a(-2.5),
            createdAt: i - 3600000
        },
        {
            id: "dev-purchase-1",
            kind: "purchase",
            amount: a(15),
            createdAt: i - 86400000,
            status: "succeeded"
        }
    ];
    const r = {
        balance: a(12.5),
        autoTopUp: null,
        autoTopUpSpentThisPeriod: a(0),
        pendingTopUps: 0,
        limits: {
            minimum: a(5),
            maximum: a(500),
            monthlyCapMaximum: a(2000)
        },
        history
    };
    switch(n){
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
export function createScriptedPrepaidEdge(n, i) {
    const e = {
        wallet: l(n, i.now()),
        purchases: 0
    };
    const r = (amount)=>{
        e.purchases += 1;
        const s = {
            id: `dev-purchase-${e.purchases + 1}`,
            kind: "purchase",
            amount,
            createdAt: i.now(),
            status: "succeeded"
        };
        e.wallet = {
            ...e.wallet,
            balance: {
                currencyCode,
                unitMicros: e.wallet.balance.unitMicros + amount.unitMicros
            },
            history: [
                s,
                ...e.wallet.history
            ]
        };
    };
    const o = {
        capabilities: {
            authed: true
        },
        wallet: ()=>e.wallet,
        async getWallet () {
            return e.wallet;
        },
        async topUp (t) {
            r(t.amount);
            return {
                kind: "succeeded",
                amount: t.amount
            };
        },
        async setAutoTopUpRule (autoTopUp) {
            e.wallet = {
                ...e.wallet,
                autoTopUp
            };
            return autoTopUp;
        }
    };
    if (n === "no-card") {
        o.startInlineTopUp = async (t)=>({
                kind: "redirect",
                url: `${bk}&dev-top-up=${t.amount.unitMicros}`
            });
    }
    return o;
}
