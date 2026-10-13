import { N, k as k_1, h as h_1, o as o_1, A, w as w_1, l as l_1 } from "./index.eager-common-CdCvBQNJ.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "0c433d22-eb3c-4884-869d-4f433bee97b2";
            e._sentryDebugIdIdentifier = "sentry-dbid-0c433d22-eb3c-4884-869d-4f433bee97b2";
        }
    } catch (e) {}
})();
class T {
    static of(t) {
        const dataUrl = t.avatarDataUrl ?? "";
        if (dataUrl.length > 0) {
            return {
                kind: "photo",
                dataUrl
            };
        }
        const e = N({
            agentId: t.agentId ?? "",
            ...t.avatarShape === undefined ? {} : {
                avatarShape: t.avatarShape
            },
            ...t.avatarColor === undefined ? {} : {
                avatarColor: t.avatarColor
            }
        });
        return {
            kind: "mark",
            shape: e.shape,
            color: e.color
        };
    }
    static read(t) {
        if (typeof t !== "object" || t === null || !("kind" in t)) {
            return null;
        }
        if (t.kind === "photo") {
            if (!("dataUrl" in t) || typeof t.dataUrl !== "string" || t.dataUrl.length === 0) {
                return null;
            }
            return {
                kind: "photo",
                dataUrl: t.dataUrl
            };
        }
        if (t.kind !== "mark" || !("shape" in t) || typeof t.shape !== "string" || !("color" in t) || typeof t.color !== "string") {
            return null;
        }
        const a = N({
            agentId: "",
            avatarShape: t.shape,
            avatarColor: t.color
        });
        if (a.shape !== t.shape || a.color !== t.color) {
            return null;
        }
        return {
            kind: "mark",
            shape: a.shape,
            color: a.color
        };
    }
}
class n {
    static audioChannel = "sand:meetings:audio";
    static pageChannel = "sand:meetings:page";
    static debugChannel = "sand:meetings:debug";
    static avatarFrameChannel = "sand:meetings:avatar-frame";
    static avatarSourceChannel = "sand:meetings:avatar-source";
    static displayNameArg = "--sand-meetings-display-name=";
    static pageLanguage = "en-US";
    static sampleRateHz = 16000;
    static pagePollMs = 1000;
    static sourcePollMs = 100;
    static sourceRecentMs = 400;
    static stampEvent = "sand-meeting-stamp";
    static wakeEvent = "sand-meeting-wake";
    static hearEvent = "sand-meeting-hear";
    static idleEvent = "sand-meeting-idle";
    static cameraReadyEvent = "sand-meeting-camera";
    static displayNameOf(t) {
        const a = t.find((i)=>i.startsWith(n.displayNameArg));
        if (a === undefined) {
            return null;
        }
        const e = decodeURIComponent(a.slice(n.displayNameArg.length)).trim();
        if (e.length > 0) {
            return e;
        }
        return null;
    }
}
const L = 30;
const w = 259;
const y = 15;
const F = 1000 / L;
const matrix = [
    1,
    0,
    0,
    1,
    y,
    y
];
class l {
    static start(t, a, e) {
        l.keepDocumentVisible(t);
        if (e.kind === "photo") {
            a.send({
                kind: "photo",
                dataUrl: e.dataUrl
            });
            return {
                dispose () {}
            };
        }
        const ink = k_1(e.color, "dark");
        const body = h_1(e.shape);
        const o = o_1({
            body
        });
        const h = A(o, "idle");
        let state = "idle";
        const f = (r)=>{
            state = r;
            h.setState(r);
        };
        const u = ()=>f("listening");
        const k = ()=>f("idle");
        t.addEventListener(n.hearEvent, u);
        t.addEventListener(n.idleEvent, k);
        let s = null;
        const b = w_1({
            name: "meeting-avatar",
            park: "hidden"
        }).arm(({ timestampMs })=>{
            if (s !== null && timestampMs - s < F - 1) {
                return "continue";
            }
            const v = s === null ? 0 : (timestampMs - s) / 1000;
            s = timestampMs;
            h.advance(v);
            o.advance(v);
            const c = l_1(o.frame(), body, w);
            if (c.body.length > 0) {
                const S = {
                    state,
                    body: {
                        d: c.body,
                        matrix
                    },
                    eyes: c.eyes.map((d)=>({
                            d,
                            matrix
                        })),
                    ink
                };
                a.send(S);
            }
            return "continue";
        });
        return {
            dispose () {
                b.dispose();
                t.removeEventListener(n.hearEvent, u);
                t.removeEventListener(n.idleEvent, k);
            }
        };
    }
    static keepDocumentVisible(t) {
        Object.defineProperty(t, "hidden", {
            configurable: true,
            get: ()=>false
        });
        Object.defineProperty(t, "visibilityState", {
            configurable: true,
            get: ()=>"visible"
        });
    }
}
const window_sandMeetingAvatar = window.sandMeetingAvatar;
window_sandMeetingAvatar?.onSource((p)=>{
    const t = T.read(p);
    if (t !== null) {
        l.start(document, window_sandMeetingAvatar, t);
    }
});
