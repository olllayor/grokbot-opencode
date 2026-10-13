import { c, u } from "./index.eager-vendor-Qbf9YA6n.js";
import { b7, aU, c9, ca, cb, cc, cd } from "./index.eager-app-Cj5f8Gby.js";
import { az, aA, E as E_1 } from "./index-ZYxf-aBb.js";
import "./index.eager-platform-Dcfeegfw.js";
import { S as S_1, a as W } from "./chunk-settings-row-I8ggwIzt.js";
import { u as u_2 } from "./chunk-provider-team-policy-CBjUAi-4.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "fe5f0e70-9bdf-408b-81e7-01485ffc6458";
            e._sentryDebugIdIdentifier = "sentry-dbid-fe5f0e70-9bdf-408b-81e7-01485ffc6458";
        }
    } catch (e) {}
})();
const Q = {
    id: "fuUvu2"
};
const Z = {
    id: "hrkSSQ"
};
const q = {
    id: "ENHi8c"
};
const V = {
    always: {
        id: "NoKBgy"
    },
    ask: {
        id: "6CTZeX"
    },
    never: {
        id: "wvd4WD"
    }
};
function Component(x) {
    Component.d = 1286;
    const e = c.c(39);
    const { machine, executionLabel } = x;
    const { i18n, _: __1 } = u();
    const N = b7();
    aU(N.localToolPermission.load);
    aU(N.teamPolicy.load);
    const B = az();
    const ceiling = u_2();
    const I = machine === undefined ? B : machine.localToolPermission ?? c9;
    let _;
    if (e[0] !== ceiling || e[1] !== I) {
        _ = cd(I, ceiling);
        e[0] = ceiling;
        e[1] = I;
        e[2] = _;
    } else {
        _ = e[2];
    }
    const p = _;
    const { dispatchPermission, failure, isPending } = aA();
    let S;
    if (e[3] !== ceiling || e[4] !== i18n) {
        S = ca.map((s)=>({
                value: s,
                label: i18n._(V[s]),
                disabled: cb(s, ceiling)
            }));
        e[3] = ceiling;
        e[4] = i18n;
        e[5] = S;
    } else {
        S = e[5];
    }
    const options = S;
    let T;
    if (e[6] !== __1 || e[7] !== i18n || e[8] !== machine) {
        T = machine === undefined ? i18n._(Q) : __1({
            id: "kvhz1P"
        });
        e[6] = __1;
        e[7] = i18n;
        e[8] = machine;
        e[9] = T;
    } else {
        T = e[9];
    }
    const label = T;
    let E;
    if (e[10] !== i18n || e[11] !== machine) {
        E = machine === undefined ? i18n._(Z) : i18n._(q);
        e[10] = i18n;
        e[11] = machine;
        e[12] = E;
    } else {
        E = e[12];
    }
    const f = E;
    let description;
    if (failure != null) {
        let s;
        if (e[13] !== __1) {
            s = __1({
                id: "QqKsGg"
            });
            e[13] = __1;
            e[14] = s;
        } else {
            s = e[14];
        }
        description = s;
    } else {
        if (machine !== undefined) {
            description = f;
        }
    }
    const anchorId = machine === undefined || machine.isCurrent ? "local-execution" : cc;
    let n;
    if (e[15] !== f || e[16] !== machine) {
        n = machine === undefined ? <S_1>{f}</S_1> : null;
        e[15] = f;
        e[16] = machine;
        e[17] = n;
    } else {
        n = e[17];
    }
    let a;
    if (e[18] !== __1 || e[19] !== ceiling) {
        a = ceiling === undefined ? null : <S_1>{__1({
            id: "68SHzZ",
            values: {
                ceiling
            }
        })}</S_1>;
        e[18] = __1;
        e[19] = ceiling;
        e[20] = a;
    } else {
        a = e[20];
    }
    let extraCopy;
    if (e[21] !== n || e[22] !== a) {
        extraCopy = <>{n}{a}</>;
        e[21] = n;
        e[22] = a;
        e[23] = extraCopy;
    } else {
        extraCopy = e[23];
    }
    const v = executionLabel ?? label;
    let onValueChange;
    if (e[24] !== dispatchPermission || e[25] !== machine?.machineId) {
        onValueChange = (s)=>{
            if (s !== null) {
                dispatchPermission(s, machine?.machineId);
            }
        };
        e[24] = dispatchPermission;
        e[25] = machine?.machineId;
        e[26] = onValueChange;
    } else {
        onValueChange = e[26];
    }
    let d;
    if (e[27] !== isPending || e[28] !== options || e[29] !== p || e[30] !== v || e[31] !== onValueChange) {
        d = <E_1 aria-label={v} disabled={isPending} onValueChange={onValueChange} options={options} placement="bottom-end" size="lg" value={p} variant="ghost"/>;
        e[27] = isPending;
        e[28] = options;
        e[29] = p;
        e[30] = v;
        e[31] = onValueChange;
        e[32] = d;
    } else {
        d = e[32];
    }
    let O;
    if (e[33] !== description || e[34] !== label || e[35] !== d || e[36] !== anchorId || e[37] !== extraCopy) {
        O = <W anchorId={anchorId} description={description} extraCopy={extraCopy} label={label} variant="card">{d}</W>;
        e[33] = description;
        e[34] = label;
        e[35] = d;
        e[36] = anchorId;
        e[37] = extraCopy;
        e[38] = O;
    } else {
        O = e[38];
    }
    return O;
}
export { Component as L };
