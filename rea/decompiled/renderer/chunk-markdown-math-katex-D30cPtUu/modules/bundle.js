import u from "./chunk-katex-CBoxBzRj.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "c61630b8-e166-40a1-88fd-c90006a9ec1f";
            e._sentryDebugIdIdentifier = "sentry-dbid-c61630b8-e166-40a1-88fd-c90006a9ec1f";
        }
    } catch (e) {}
})();
const i = /\\(emph|text|textbf|textit|textmd|textnormal|textrm|textsf|texttt|textup)([ \t\r\n]*)\{([^{}]*)\}/g;
const f = /\$|\\[()]|\\verb|%/;
function d(r) {
    let e = "";
    let t = 0;
    for (const n of r){
        if (n === "\\") {
            e += n;
            t += 1;
            continue;
        }
        if (n === "_" && t % 2 === 0) {
            e += "\\_";
        } else {
            e += n;
        }
        t = 0;
    }
    return e;
}
function l(r) {
    return r.replace(i, (e, t, n, c)=>{
        if (f.test(c)) {
            return e;
        }
        return `\\${t}${n}{${d(c)}}`;
    });
}
function a(r, displayMode) {
    try {
        u.renderToString(r, {
            displayMode,
            throwOnError: true
        });
        return true;
    } catch  {
        return false;
    }
}
function m(r, e = false) {
    const t = l(r);
    if (t === r || a(r, e) || !a(t, e)) {
        return r;
    }
    return t;
}
const E = 256;
const o = new Map;
export function renderMathHtml(r, displayMode) {
    const t = `${displayMode ? 1 : 0}\0${r}`;
    const n = o.get(t);
    if (n !== undefined) {
        o.delete(t);
        o.set(t, n);
        return n;
    }
    const c = u.renderToString(m(r, displayMode), {
        displayMode,
        throwOnError: false,
        trust: false
    });
    o.set(t, c);
    if (o.size > E) {
        const s = o.keys().next().value;
        if (s != null) {
            o.delete(s);
        }
    }
    return c;
}
