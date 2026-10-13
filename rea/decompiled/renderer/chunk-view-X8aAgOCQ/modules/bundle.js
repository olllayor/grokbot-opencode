import { c as c_1, R, _, i } from "./index.eager-vendor-Qbf9YA6n.js";
import { aZ, b1, x as x_1, i as i_1 } from "./index.eager-platform-Dcfeegfw.js";
import { bz, bA, es, et, ay, bk as returnUrl, aj, ah, z, eu, d0, ev } from "./index.eager-app-Cj5f8Gby.js";
import "./index-ZYxf-aBb.js";
import "./index.eager-common-CdCvBQNJ.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "d6b7dc9d-f38f-447a-9568-3aebc642dc8e";
            e._sentryDebugIdIdentifier = "sentry-dbid-d6b7dc9d-f38f-447a-9568-3aebc642dc8e";
        }
    } catch (e) {}
})();
const __vite__mapDeps = (i, m = __vite__mapDeps, d = m.f || (m.f = [
    "./chunk-index-DYBNJbIk.js",
    "./index.eager-vendor-Qbf9YA6n.js"
]))=>i.map((i)=>d[i]);
const F = "en";
const Z = {
    "Buy credits": {
        id: "iM5q08"
    },
    "Auto top-up when balance is low": {
        id: "zTs8vS"
    },
    "Top up amount": {
        id: "EB1xbN"
    }
};
function J(t) {
    const e = {};
    for (const [o, n] of Object.entries(Z)){
        e[o] = t._(n);
    }
    return e;
}
const K = "overlay";
const T = "unified-billing";
const regions = new Set(ah);
async function W() {
    const t = await _(()=>import("./chunk-index-DYBNJbIk.js"), __vite__mapDeps([
        0,
        1
    ]), import.meta.url);
    await t.applyCursorTopUpCopy(F, J(i));
    return t;
}
const x = ay(W);
const X = x.component((t)=>t.CursorTopUpModal);
const Ee = x.component((t)=>t.CursorAutoTopUpModal);
function ref(t) {
    if (t == null) {
        return;
    }
    const e = z();
    const o = aj.cover({
        surface: T,
        regions
    });
    return ()=>{
        o();
        e();
    };
}
function AComponent(t) {
    AComponent.d = 1353;
    const e = c_1.c(19);
    const { view } = t;
    const n = aZ();
    const l = bz();
    const U = bA();
    const { openPrepaidClient, subscribeNotice } = es();
    const i = et();
    const { portalLayerStyles } = b1("modal", true);
    let p;
    if (e[0] !== n) {
        p = ()=>{
            n.close(K);
        };
        e[0] = n;
        e[1] = p;
    } else {
        p = e[1];
    }
    const s = x_1(p);
    let c;
    if (e[2] !== s || e[3] !== openPrepaidClient || e[4] !== subscribeNotice) {
        c = ()=>{
            let r = true;
            (async ()=>{
                const y = await openPrepaidClient();
                if (r && y.status !== "ready") {
                    s();
                }
            })();
            const P = subscribeNotice((y)=>{
                if (y?.kind === "credits-purchased") {
                    s();
                }
            });
            return ()=>{
                r = false;
                P();
            };
        };
        e[2] = s;
        e[3] = openPrepaidClient;
        e[4] = subscribeNotice;
        e[5] = c;
    } else {
        c = e[5];
    }
    i_1(c);
    let u;
    if (e[6] !== U) {
        u = (r)=>{
            const O = eu(r);
            if (O === null) {
                d0(new ev("checkout"), {
                    tags: {
                        sand_area: T
                    }
                });
                return;
            }
            U(O).catch(oe);
        };
        e[6] = U;
        e[7] = u;
    } else {
        u = e[7];
    }
    const onOpenUrl = u;
    if (i.status !== "ready") {
        return null;
    }
    let f;
    if (e[8] !== s) {
        f = (r)=>{
            if (!r) {
                s();
            }
        };
        e[8] = s;
        e[9] = f;
    } else {
        f = e[9];
    }
    const onOpenChange = f;
    let a;
    if (e[10] !== i.client || e[11] !== onOpenChange || e[12] !== onOpenUrl || e[13] !== l.resolved || e[14] !== view) {
        a = view === "auto-top-up" ? <Ee onOpenChange={onOpenChange} onOpenUrl={onOpenUrl} open prepaidClient={i.client} themeType={l.resolved}/> : <X onOpenChange={onOpenChange} onOpenUrl={onOpenUrl} open prepaidClient={i.client} returnUrl={returnUrl} themeType={l.resolved}/>;
        e[10] = i.client;
        e[11] = onOpenChange;
        e[12] = onOpenUrl;
        e[13] = l.resolved;
        e[14] = view;
        e[15] = a;
    } else {
        a = e[15];
    }
    let C;
    if (e[16] !== portalLayerStyles || e[17] !== a) {
        C = R.createPortal(<div data-component="top-up-modal-host" ref={ref} style={portalLayerStyles}>{a}</div>, document.body);
        e[16] = portalLayerStyles;
        e[17] = a;
        e[18] = C;
    } else {
        C = e[18];
    }
    return C;
}
function oe(t) {
    d0(t, {
        tags: {
            sand_area: T
        }
    });
}
function NeComponent(t) {
    NeComponent.d = 1352;
    const e = c_1.c(2);
    const { params } = t;
    let n;
    if (e[0] !== params.view) {
        n = <AComponent view={params.view}/>;
        e[0] = params.view;
        e[1] = n;
    } else {
        n = e[1];
    }
    return n;
}
export { NeComponent as default };
