import { c, p } from "./index.eager-vendor-Qbf9YA6n.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "00411293-442f-4922-8fd5-ec2d8dd905b9";
            e._sentryDebugIdIdentifier = "sentry-dbid-00411293-442f-4922-8fd5-ec2d8dd905b9";
        }
    } catch (e) {}
})();
const src = `${new URL("link-dE5q15v1.svg", import.meta.url).href}`;
const k = 41 / 14;
const m = {
    wordmark: {
        k1xSpc: "sand-1rg5ohu",
        kmuXW: "sand-2lah0s",
        kXLuUW: "sand-1x7wgjd",
        kVIFPx: "sand-19kjcj4",
        kfzvcC: "sand-47corl",
        kfSwDN: "sand-87ps6o",
        $$css: true
    }
};
export function L(a) {
    L.d = 1442;
    const s = c.c(8);
    const { heightPx, style } = a;
    let e;
    if (s[0] !== style) {
        e = p(m.wordmark, style);
        s[0] = style;
        s[1] = e;
    } else {
        e = s[1];
    }
    let width;
    if (s[2] !== heightPx) {
        width = Math.round(heightPx * k);
        s[2] = heightPx;
        s[3] = width;
    } else {
        width = s[3];
    }
    let n;
    if (s[4] !== heightPx || s[5] !== e || s[6] !== width) {
        n = <img {...e} alt="" draggable={false} height={heightPx} src={src} width={width}/>;
        s[4] = heightPx;
        s[5] = e;
        s[6] = width;
        s[7] = n;
    } else {
        n = s[7];
    }
    return n;
}
