import { c as c_1, u as u_1, p as p_1 } from "./index.eager-vendor-Qbf9YA6n.js";
import { i as i_1 } from "./index.eager-platform-Dcfeegfw.js";
import { i as i_2 } from "./index.eager-common-CdCvBQNJ.js";
import { dH, dI, dJ, dK, dL, b9, dM, dN, dO, bY, dP, dQ, dR, dS, bT, dT, dU, a_, dV, dW, dX, dY, dZ, d_, aP as Fs1, d$, e0, e1, d as d_1, e2 } from "./index.eager-app-Cj5f8Gby.js";
import { bf as Ts, bg, bh as _s, _, bi, bj, bk, at, p as Ss } from "./index-ZYxf-aBb.js";
import { c as Ns } from "./chunk-voice-memo-waveform-Bfx_1R7r.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "6a2876c9-da82-4263-919a-a81003065c8c";
            e._sentryDebugIdIdentifier = "sentry-dbid-6a2876c9-da82-4263-919a-a81003065c8c";
        }
    } catch (e) {}
})();
function ws(playback) {
    switch(playback.status){
        case "playing":
        case "paused":
            {
                const { segmentDurationsMs, charTimesMs } = playback;
                return {
                    positionMs: playback.positionMs,
                    durationMs: playback.durationMs,
                    ...segmentDurationsMs == null ? {} : {
                        measuredMs: segmentDurationsMs
                    },
                    ...charTimesMs == null ? {} : {
                        charTimesMs
                    }
                };
            }
        case "idle":
        case "preparing":
        case "failed":
            return null;
    }
}
function Ze1Component(t) {
    Ze1Component.d = 836;
    const e = c_1.c(7);
    const { text, playback, onSeek } = t;
    const { _ } = u_1();
    let l;
    if (e[0] !== _ || e[1] !== onSeek || e[2] !== playback || e[3] !== text) {
        const d = ws(playback);
        const u = dH(text);
        const k = d == null ? -1 : dI({
            text,
            positionMs: d.positionMs,
            durationMs: d.durationMs,
            ...d.measuredMs == null ? {} : {
                measuredMs: d.measuredMs
            },
            ...d.charTimesMs == null ? {} : {
                charTimesMs: d.charTimesMs
            }
        });
        const m = k < 0 ? -1 : dJ(u, k);
        const c = (p)=>{
            if (m < 0) {
                return "idle";
            }
            if (p < m) {
                return "past";
            }
            if (p === m) {
                return "current";
            }
            return "future";
        };
        l = u.map((p, i)=>{
            const h = c(i);
            if (!p.spoken) {
                return <span key={`${p.start}:${p.end}`} data-karaoke-gap>{p.text}</span>;
            }
            const g = h === "current";
            return <button key={`${p.start}:${p.end}`} aria-current={g || undefined} aria-label={_({
                id: "M9a/vQ"
            })} data-karaoke-token={h} onClick={()=>onSeek(dK({
                    text,
                    offset: p.start,
                    durationMs: d?.durationMs ?? 0,
                    ...d?.measuredMs == null ? {} : {
                        measuredMs: d.measuredMs
                    },
                    ...d?.charTimesMs == null ? {} : {
                        charTimesMs: d.charTimesMs
                    }
                }))} type="button" {...{
                0: {
                    className: "sand-c342km sand-ng3xce sand-1ghz6dp sand-1717udv sand-ln7xf2 sand-1heor9g sand-jbqb8w sand-1ypdohk sand-18zih8k"
                },
                4: {
                    className: "sand-c342km sand-ng3xce sand-1ghz6dp sand-1717udv sand-ln7xf2 sand-jbqb8w sand-1ypdohk sand-18zih8k sand-tyxrsu"
                },
                2: {
                    className: "sand-c342km sand-ng3xce sand-1ghz6dp sand-1717udv sand-ln7xf2 sand-jbqb8w sand-1ypdohk sand-18zih8k sand-tyxrsu"
                },
                6: {
                    className: "sand-c342km sand-ng3xce sand-1ghz6dp sand-1717udv sand-ln7xf2 sand-jbqb8w sand-1ypdohk sand-18zih8k sand-tyxrsu"
                },
                1: {
                    className: "sand-c342km sand-ng3xce sand-1ghz6dp sand-1717udv sand-ln7xf2 sand-jbqb8w sand-1ypdohk sand-18zih8k sand-1o0liin"
                },
                5: {
                    className: "sand-c342km sand-ng3xce sand-1ghz6dp sand-1717udv sand-ln7xf2 sand-jbqb8w sand-1ypdohk sand-18zih8k sand-1o0liin"
                },
                3: {
                    className: "sand-c342km sand-ng3xce sand-1ghz6dp sand-1717udv sand-ln7xf2 sand-jbqb8w sand-1ypdohk sand-18zih8k sand-1o0liin"
                },
                7: {
                    className: "sand-c342km sand-ng3xce sand-1ghz6dp sand-1717udv sand-ln7xf2 sand-jbqb8w sand-1ypdohk sand-18zih8k sand-1o0liin"
                }
            }[(h === "past") << 2 | (h === "current") << 1 | (h === "future") << 0]}>{p.text}</button>;
        });
        e[0] = _;
        e[1] = onSeek;
        e[2] = playback;
        e[3] = text;
        e[4] = l;
    } else {
        l = e[4];
    }
    let r;
    if (e[5] !== l) {
        r = <>{l}</>;
        e[5] = l;
        e[6] = r;
    } else {
        r = e[6];
    }
    return r;
}
function Pe(entryId) {
    return `sand-voice-memo-transcript-${entryId}`;
}
function LeComponent(t) {
    LeComponent.d = 837;
    const e = c_1.c(10);
    const { entry } = t;
    const matcher = bg();
    let n;
    if (e[0] !== entry) {
        n = dL(entry);
        e[0] = entry;
        e[1] = n;
    } else {
        n = e[1];
    }
    const a = n;
    const isTrusted = entry.channel == null;
    const contentBeforeRichText = a.kind === "teach-recording" ? a.content : undefined;
    let d;
    if (e[2] !== a.content || e[3] !== entry.richText || e[4] !== matcher || e[5] !== contentBeforeRichText) {
        d = <_s content={a.content} contentBeforeRichText={contentBeforeRichText} isOnUserBubble matcher={matcher} richText={entry.richText}/>;
        e[2] = a.content;
        e[3] = entry.richText;
        e[4] = matcher;
        e[5] = contentBeforeRichText;
        e[6] = d;
    } else {
        d = e[6];
    }
    let u;
    if (e[7] !== isTrusted || e[8] !== d) {
        u = <_ isTrusted={isTrusted}>{d}</_>;
        e[7] = isTrusted;
        e[8] = d;
        e[9] = u;
    } else {
        u = e[9];
    }
    return u;
}
function DeComponent(t) {
    DeComponent.d = 838;
    const e = c_1.c(22);
    const { entryId, voice } = t;
    if (voice.tone === "user") {
        let i;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            i = {
                className: "sand-euugli sand-1rlwhtf sand-j0a0fe sand-1hx0egp sand-27l2si"
            };
            e[0] = i;
        } else {
            i = e[0];
        }
        let h;
        if (e[1] !== entryId) {
            h = Pe(entryId);
            e[1] = entryId;
            e[2] = h;
        } else {
            h = e[2];
        }
        let g;
        if (e[3] !== voice.entry) {
            g = <LeComponent entry={voice.entry}/>;
            e[3] = voice.entry;
            e[4] = g;
        } else {
            g = e[4];
        }
        let x;
        if (e[5] !== h || e[6] !== g) {
            x = <div {...i} data-speaker="user" data-voice-memo-transcript id={h}>{g}</div>;
            e[5] = h;
            e[6] = g;
            e[7] = x;
        } else {
            x = e[7];
        }
        return x;
    }
    const { spokenText, playback, onSeek } = voice;
    const r = spokenText != null && spokenText.length > 0 && onSeek != null && playback != null && (playback.status === "playing" || playback.status === "paused");
    let d;
    if (e[8] === Symbol.for("react.memo_cache_sentinel")) {
        d = {
            className: "sand-euugli sand-1rlwhtf sand-j0a0fe sand-1hx0egp sand-27l2si"
        };
        e[8] = d;
    } else {
        d = e[8];
    }
    const u = r || undefined;
    const dir = r ? "auto" : undefined;
    let m;
    if (e[9] !== entryId) {
        m = Pe(entryId);
        e[9] = entryId;
        e[10] = m;
    } else {
        m = e[10];
    }
    let c;
    if (e[11] !== onSeek || e[12] !== playback || e[13] !== r || e[14] !== spokenText || e[15] !== voice.content) {
        c = r && spokenText != null && playback != null && onSeek != null ? <Ze1Component onSeek={onSeek} playback={playback} text={spokenText}/> : <Ts content={voice.content} isSourceTrusted isStreaming={false}/>;
        e[11] = onSeek;
        e[12] = playback;
        e[13] = r;
        e[14] = spokenText;
        e[15] = voice.content;
        e[16] = c;
    } else {
        c = e[16];
    }
    let p;
    if (e[17] !== u || e[18] !== dir || e[19] !== m || e[20] !== c) {
        p = <div {...d} data-karaoke={u} data-speaker="assistant" data-voice-memo-transcript dir={dir} id={m}>{c}</div>;
        e[17] = u;
        e[18] = dir;
        e[19] = m;
        e[20] = c;
        e[21] = p;
    } else {
        p = e[21];
    }
    return p;
}
const js = 8;
const Ps = 28;
const Re = 20;
const Cs = 16;
const Es = 2.75;
const As = (Ps - Re) / 2 + (Re - Cs) / 2 + Es;
const Rs = js + As;
const Os = 0.5;
const Vs = Rs - Os;
const qs = 8;
const $s = Vs - qs;
const zs = "data-voice-memo-transcript-overflow";
const Ls = "data-voice-memo-transcript-well";
const Ds = "data-voice-memo-transcript";
const Hs = "--sand-voice-memo-transcript-fade";
const Fs = 24;
const He = 1;
function Xs(t) {
    if (t.deltaY < 0) {
        return t.scrollTop > 0;
    }
    if (t.deltaY > 0) {
        return t.scrollTop + t.clientHeight < t.scrollHeight - 1;
    }
    return false;
}
function Oe(t) {
    const t_currentTarget = t.currentTarget;
    if (t_currentTarget instanceof HTMLElement && Xs({
        deltaY: t.deltaY,
        scrollTop: t_currentTarget.scrollTop,
        clientHeight: t_currentTarget.clientHeight,
        scrollHeight: t_currentTarget.scrollHeight
    })) {
        t.stopPropagation();
    }
}
function Ws(t) {
    return t.proseHeight - t.wellHeight > He;
}
function Bs(t) {
    const e = (t - He) / Fs;
    return Math.min(1, Math.max(0, Math.round(e * 100) / 100));
}
function ref(t) {
    if (t == null) {
        return;
    }
    const e = t.querySelector(`[${Ls}]`);
    i_2(e != null, "voice memo transcript frame without its scroller");
    const s = e.querySelector(`[${Ds}]`);
    i_2(s != null, "voice memo transcript scroller without its prose");
    let o = false;
    let n = 0;
    let a = -1;
    const l = ()=>{
        const u = n - e.scrollTop - $s;
        const k = o ? Bs(u) : 0;
        if (k !== a) {
            a = k;
            t.style.setProperty(Hs, String(k));
        }
    };
    const r = ()=>{
        o = Ws({
            proseHeight: s.getBoundingClientRect().height,
            wellHeight: e.clientHeight
        });
        t.toggleAttribute(zs, o);
        n = e.scrollHeight - e.clientHeight;
        l();
    };
    e.addEventListener("wheel", Oe, {
        capture: true,
        passive: true
    });
    e.addEventListener("scroll", l, {
        passive: true
    });
    const d = new ResizeObserver(r);
    d.observe(e, {
        box: "border-box"
    });
    d.observe(s, {
        box: "border-box"
    });
    return ()=>{
        d.disconnect();
        e.removeEventListener("scroll", l);
        e.removeEventListener("wheel", Oe, {
            capture: true
        });
    };
}
const T = {
    pellet: {
        k1xSpc: "sand-78zum5",
        kXwgrk: "sand-dt5ytf",
        kGNEyG: "sand-1qjc9v5",
        kzqmXN: "sand-eq5yr9",
        ks0D6T: "sand-193iq5w",
        kLKAdn: "sand-1yrsyyn",
        kwRFfy: "sand-f159sx",
        kGO01o: "sand-10b6aqq",
        kZCmMZ: "sand-mzvs34",
        $$css: true
    },
    pelletOpen: {
        kGO01o: "sand-wib8y2",
        $$css: true
    },
    pelletAgent: {
        kaIpWk: "sand-1m3ak92",
        kWkggS: "sand-18f60m8",
        $$css: true
    },
    pelletAgentWithSpeed: {
        kaIpWk: "sand-rnuji5",
        $$css: true
    },
    control: {
        kMwMTN: "sand-1heor9g sand-15akisz",
        kWkggS: "sand-jbqb8w sand-8pkhp4",
        $$css: true
    },
    duration: {
        kmuXW: "sand-2lah0s",
        k7Eaqz: "sand-13n9wmd",
        k9WMMc: "sand-p4054r",
        kcqcaj: "sand-ss6m8b",
        kMwMTN: "sand-1heor9g",
        kSiTet: "sand-iiclqw",
        $$css: true
    },
    durationAgent: {
        kGuDYH: "sand-1k6wstc",
        kLWn49: "sand-1xxsxie",
        kSiTet: "sand-197sbye",
        $$css: true
    },
    durationUnderSpeed: {
        k9WMMc: "sand-2b8uid",
        $$css: true
    },
    speed: {
        k1xSpc: "sand-3nfvp2",
        kGNEyG: "sand-6s0dn4",
        kjj79g: "sand-l56j7k",
        kzqmXN: "sand-1guw455",
        kZKoxP: "sand-17rw0jw",
        kogj98: "sand-1ghz6dp",
        khDVqt: "sand-uxw1ft",
        kMzoRj: "sand-c342km",
        ksu8eU: "sand-ng3xce",
        kaIpWk: "sand-149ho13",
        kcqcaj: "sand-ss6m8b",
        kkrTdU: "sand-1ypdohk",
        kMwMTN: "sand-ngo0nf",
        kWkggS: "sand-e8d49r sand-1ash6b9",
        $$css: true
    },
    failure: {
        keoZOQ: "sand-1om1abp",
        kZCmMZ: "sand-tw3t59",
        kMwMTN: "sand-1heor9g",
        kSiTet: "sand-iiclqw",
        $$css: true
    },
    abridged: {
        keoZOQ: "sand-1om1abp",
        kZCmMZ: "sand-tw3t59",
        kMwMTN: "sand-1heor9g",
        kSiTet: "sand-1ks1olk",
        $$css: true
    }
};
function lt(t) {
    const e = c_1.c(3);
    const s = b9("sand_voice_memos");
    const o = dM(bi().agentId);
    if (!s || t.clientNonce == null) {
        return null;
    }
    let n;
    if (e[0] !== o || e[1] !== t.clientNonce) {
        n = d_({
            agentMemos: o,
            clientNonce: t.clientNonce
        });
        e[0] = o;
        e[1] = t.clientNonce;
        e[2] = n;
    } else {
        n = e[2];
    }
    return n;
}
const Ve = new WeakMap;
function Ys(t, content) {
    const s = Ve.get(t);
    if (s?.content === content) {
        return s;
    }
    const o = dX(content);
    const n = {
        content,
        text: o.text,
        isTruncated: o.isTruncated,
        textDigest: dZ(o.text),
        estimated: dY({
            seed: t.id,
            text: o.text
        })
    };
    Ve.set(t, n);
    return n;
}
function ct(t, e) {
    const s = c_1.c(25);
    const o = b9("sand_voice_memos");
    const { agentId, owner } = bi();
    const l = dM(agentId);
    let r;
    if (s[0] !== agentId || s[1] !== t.id) {
        r = {
            agentId,
            key: t.id
        };
        s[0] = agentId;
        s[1] = t.id;
        s[2] = r;
    } else {
        r = s[2];
    }
    const playback = dN(r);
    const { toggle, seek } = dO();
    const voiceId = bY(agentId)?.voiceId;
    if (!o || agentId == null || t.streaming === true || !bj(t)) {
        return null;
    }
    let c;
    let p;
    let i;
    if (s[3] !== l || s[4] !== e || s[5] !== t) {
        i = Symbol.for("react.early_return_sentinel");
        e: {
            c = Ys(t, e);
            if (c.text.length === 0) {
                i = null;
                break e;
            }
            p = dP({
                agentMemos: l,
                key: t.id,
                textDigest: c.textDigest,
                estimated: c.estimated
            });
        }
        s[3] = l;
        s[4] = e;
        s[5] = t;
        s[6] = c;
        s[7] = p;
        s[8] = i;
    } else {
        c = s[6];
        p = s[7];
        i = s[8];
    }
    if (i !== Symbol.for("react.early_return_sentinel")) {
        return i;
    }
    const memo = p;
    let onToggle;
    if (s[9] !== agentId || s[10] !== t.id || s[11] !== memo || s[12] !== owner || s[13] !== c.text || s[14] !== c.textDigest || s[15] !== toggle || s[16] !== voiceId) {
        onToggle = ()=>toggle({
                agentId,
                key: t.id,
                text: c.text,
                textDigest: c.textDigest,
                durationMs: memo.durationMs,
                owner,
                ...voiceId == null ? {} : {
                    voiceId
                }
            });
        s[9] = agentId;
        s[10] = t.id;
        s[11] = memo;
        s[12] = owner;
        s[13] = c.text;
        s[14] = c.textDigest;
        s[15] = toggle;
        s[16] = voiceId;
        s[17] = onToggle;
    } else {
        onToggle = s[17];
    }
    let x;
    if (s[18] !== t.id || s[19] !== memo || s[20] !== playback || s[21] !== seek || s[22] !== c.isTruncated || s[23] !== onToggle) {
        x = {
            entryId: t.id,
            memo,
            isTruncated: c.isTruncated,
            playback,
            onToggle,
            onSeek: seek
        };
        s[18] = t.id;
        s[19] = memo;
        s[20] = playback;
        s[21] = seek;
        s[22] = c.isTruncated;
        s[23] = onToggle;
        s[24] = x;
    } else {
        x = s[24];
    }
    return x;
}
function Us(t) {
    switch(t.status){
        case "playing":
        case "paused":
            if (t.durationMs <= 0) {
                return 0;
            }
            return Math.min(1, Math.max(0, t.positionMs / t.durationMs));
        case "idle":
        case "preparing":
        case "failed":
            return 0;
    }
}
function Ks(t) {
    switch(t.status){
        case "playing":
        case "paused":
            return {
                positionMs: t.positionMs,
                durationMs: t.durationMs
            };
        case "preparing":
        case "idle":
        case "failed":
            return null;
    }
}
function Zs(t, durationMs) {
    switch(t.status){
        case "playing":
        case "paused":
            return Math.max(0, t.durationMs - t.positionMs);
        case "idle":
        case "preparing":
        case "failed":
            return durationMs;
    }
}
function Qs(playback) {
    return playback.status === "failed" && playback.failure.retry == null;
}
function FeComponent(t) {
    FeComponent.d = 772;
    const e = c_1.c(15);
    const { playback, onToggle } = t;
    const { _ } = u_1();
    let a;
    if (e[0] !== playback) {
        a = Qs(playback);
        e[0] = playback;
        e[1] = a;
    } else {
        a = e[1];
    }
    const disabled = a;
    const r = disabled ? "idle" : playback.status;
    let d;
    if (e[2] !== _ || e[3] !== r) {
        d = (()=>{
            switch(r){
                case "playing":
                    return {
                        label: _({
                            id: "RH7WEB"
                        }),
                        icon: "pause"
                    };
                case "preparing":
                    return {
                        label: _({
                            id: "YPa5jn"
                        }),
                        icon: "play"
                    };
                case "failed":
                    return {
                        label: _({
                            id: "eX001i"
                        }),
                        icon: "play"
                    };
                case "idle":
                case "paused":
                    return {
                        label: _({
                            id: "dlWMMo"
                        }),
                        icon: "play"
                    };
            }
        })();
        e[2] = _;
        e[3] = r;
        e[4] = d;
    } else {
        d = e[4];
    }
    const u = d;
    const k = r === "preparing";
    const m = k || undefined;
    let glyph;
    if (e[5] !== k) {
        glyph = k ? <Fs1 inheritColor size={16}/> : undefined;
        e[5] = k;
        e[6] = glyph;
    } else {
        glyph = e[6];
    }
    const iconVariant = k ? undefined : "filled";
    let i;
    if (e[7] !== u.icon || e[8] !== u.label || e[9] !== disabled || e[10] !== onToggle || e[11] !== m || e[12] !== glyph || e[13] !== iconVariant) {
        i = <Ss aria-busy={m} aria-label={u.label} disabled={disabled} glyph={glyph} icon={u.icon} iconVariant={iconVariant} onClick={onToggle} shape="circle" size="md" style={T.control}/>;
        e[7] = u.icon;
        e[8] = u.label;
        e[9] = disabled;
        e[10] = onToggle;
        e[11] = m;
        e[12] = glyph;
        e[13] = iconVariant;
        e[14] = i;
    } else {
        i = e[14];
    }
    return i;
}
function XeComponent() {
    XeComponent.d = 774;
    const t = c_1.c(17);
    const { _ } = u_1();
    const playbackRate = d$();
    const { setPlaybackRate } = e0();
    let n;
    if (t[0] !== _) {
        n = (playbackRate)=>_({
                id: "ha5Bzw",
                values: {
                    playbackRate
                }
            });
        t[0] = _;
        t[1] = n;
    } else {
        n = t[1];
    }
    const a = n;
    let l;
    if (t[2] !== playbackRate || t[3] !== a) {
        l = a(playbackRate);
        t[2] = playbackRate;
        t[3] = a;
        t[4] = l;
    } else {
        l = t[4];
    }
    let onClick;
    if (t[5] !== playbackRate || t[6] !== setPlaybackRate || t[7] !== a) {
        onClick = ()=>{
            const m = e1(e2, playbackRate);
            setPlaybackRate(m);
            d_1(a(m));
        };
        t[5] = playbackRate;
        t[6] = setPlaybackRate;
        t[7] = a;
        t[8] = onClick;
    } else {
        onClick = t[8];
    }
    let d;
    if (t[9] === Symbol.for("react.memo_cache_sentinel")) {
        d = p_1(a_.label, T.speed);
        t[9] = d;
    } else {
        d = t[9];
    }
    let u;
    if (t[10] !== _ || t[11] !== playbackRate) {
        u = _({
            id: "vCGjjN",
            values: {
                playbackRate
            }
        });
        t[10] = _;
        t[11] = playbackRate;
        t[12] = u;
    } else {
        u = t[12];
    }
    let k;
    if (t[13] !== l || t[14] !== onClick || t[15] !== u) {
        k = <button aria-label={l} data-voice-memo-speed="" onClick={onClick} type="button" {...d}>{u}</button>;
        t[13] = l;
        t[14] = onClick;
        t[15] = u;
        t[16] = k;
    } else {
        k = t[16];
    }
    return k;
}
function JsComponent(t) {
    JsComponent.d = 773;
    const e = c_1.c(128);
    const { voice, memo, adjacency } = t;
    const { _: __1 } = u_1();
    const assistantName = bk()?.trim() || __1({
        id: "ixkTse"
    });
    const { agentId, scope, shownEntryId, findEntryId } = bi();
    const m = dQ();
    const c = dR();
    const p = dS();
    const i = shownEntryId === voice.entryId;
    const h = findEntryId === voice.entryId;
    const g = voice.tone === "user";
    const x = b9("sand_chat_prose_15px");
    const We = b9("sand_voice_memo_speed");
    const ke = bT();
    const M = voice.tone === "agent" ? voice.playback : dT;
    let Z;
    if (e[0] !== agentId || e[1] !== voice.entryId) {
        Z = {
            agentId,
            key: voice.entryId
        };
        e[0] = agentId;
        e[1] = voice.entryId;
        e[2] = Z;
    } else {
        Z = e[2];
    }
    const ge = dU(Z);
    let Q;
    if (e[3] !== M || e[4] !== voice.tone) {
        Q = voice.tone === "agent" ? Ks(M) : null;
        e[3] = M;
        e[4] = voice.tone;
        e[5] = Q;
    } else {
        Q = e[5];
    }
    const I = Q;
    let J;
    if (e[6] !== agentId || e[7] !== voice.entryId || e[8] !== voice.tone) {
        J = voice.tone === "agent" && agentId != null ? {
            agentId,
            key: voice.entryId
        } : null;
        e[6] = agentId;
        e[7] = voice.entryId;
        e[8] = voice.tone;
        e[9] = J;
    } else {
        J = e[9];
    }
    const _ = J;
    const ee = voice.tone === "agent";
    const b = ee && We;
    let se;
    if (e[10] !== c || e[11] !== p || e[12] !== _) {
        se = ()=>{
            if (_ != null && p != null) {
                c.offered(_);
            }
            return st;
        };
        e[10] = c;
        e[11] = p;
        e[12] = _;
        e[13] = se;
    } else {
        se = e[13];
    }
    i_1(se);
    let te;
    if (e[14] !== ke || e[15] !== ee) {
        te = ()=>{
            if (ee) {
                ke("sand_voice_memo_speed");
            }
            return et;
        };
        e[14] = ke;
        e[15] = ee;
        e[16] = te;
    } else {
        te = e[16];
    }
    i_1(te);
    let ne;
    if (e[17] !== m || e[18] !== h || e[19] !== i || e[20] !== scope || e[21] !== c || e[22] !== _ || e[23] !== voice.entryId) {
        ne = ()=>{
            if (scope != null) {
                if (_ != null) {
                    c.transcriptToggled({
                        ..._,
                        action: i ? "collapsed" : "expanded"
                    });
                }
                if (i) {
                    if (h) {
                        m.foldTranscript({
                            scope,
                            entryId: voice.entryId
                        });
                    } else {
                        m.closeTranscript();
                    }
                    return;
                }
                m.revealTranscript({
                    scope,
                    entryId: voice.entryId
                });
            }
        };
        e[17] = m;
        e[18] = h;
        e[19] = i;
        e[20] = scope;
        e[21] = c;
        e[22] = _;
        e[23] = voice.entryId;
        e[24] = ne;
    } else {
        ne = e[24];
    }
    const S = ne;
    let ae;
    if (e[25] !== voice.entryId) {
        ae = Pe(voice.entryId);
        e[25] = voice.entryId;
        e[26] = ae;
    } else {
        ae = e[26];
    }
    const he = ae;
    let oe;
    if (e[27] !== i || e[28] !== voice) {
        oe = voice.tone === "user" ? {
            tone: "user",
            entry: voice.entry
        } : tt(voice, i);
        e[27] = i;
        e[28] = voice;
        e[29] = oe;
    } else {
        oe = e[29];
    }
    const voice_1 = oe;
    let seek;
    if (voice.tone === "agent" && I != null) {
        let label;
        if (e[30] !== __1) {
            label = __1({
                id: "0zvfOc"
            });
            e[30] = __1;
            e[31] = label;
        } else {
            label = e[31];
        }
        const durationMs = I.durationMs > 0 ? I.durationMs : memo.durationMs;
        let me;
        if (e[32] !== I.positionMs || e[33] !== durationMs || e[34] !== label || e[35] !== voice.onSeek) {
            me = {
                label,
                positionMs: I.positionMs,
                durationMs,
                onSeek: voice.onSeek
            };
            e[32] = I.positionMs;
            e[33] = durationMs;
            e[34] = label;
            e[35] = voice.onSeek;
            e[36] = me;
        } else {
            me = e[36];
        }
        seek = me;
    }
    let N;
    if (e[37] !== adjacency.isContinuedFromPrev || e[38] !== adjacency.isContinuedToNext || e[39] !== b || e[40] !== x || e[41] !== i || e[42] !== g) {
        N = p_1(a_.body1, at.message, x && at.proseFontSize, g && at.user, T.pellet, !g && T.pelletAgent, b && !i && T.pelletAgentWithSpeed, i && T.pelletOpen, adjacency.isContinuedFromPrev && (g ? at.userContinuedPrev : at.assistantContinuedPrev), adjacency.isContinuedToNext && (g ? at.userContinuedNext : at.assistantContinuedNext));
        e[37] = adjacency.isContinuedFromPrev;
        e[38] = adjacency.isContinuedToNext;
        e[39] = b;
        e[40] = x;
        e[41] = i;
        e[42] = g;
        e[43] = N;
    } else {
        N = e[43];
    }
    const xe = M.status === "preparing" || voice.tone === "agent" && M.status === "idle" && ge === "warming" || undefined;
    const Te = __1(g ? {
        id: "5VG8Gj"
    } : {
        id: "Dc4qN0",
        values: {
            assistantName
        }
    });
    const be = adjacency.isContinuedToNext || undefined;
    const _e = adjacency.isContinuedFromPrev || undefined;
    const ye = i || undefined;
    const ve = voice.tone === "agent" && ge !== "idle" ? ge : undefined;
    const M_status = M.status;
    const Ie = g ? "user" : "assistant";
    let ie;
    if (e[44] === Symbol.for("react.memo_cache_sentinel")) {
        ie = {
            className: "sand-78zum5 sand-6s0dn4 sand-ehausa sand-euugli sand-zicqy"
        };
        e[44] = ie;
    } else {
        ie = e[44];
    }
    let w;
    if (e[45] !== voice.onToggle || e[46] !== voice.playback || e[47] !== voice.tone) {
        w = voice.tone === "agent" ? <FeComponent onToggle={voice.onToggle} playback={voice.playback}/> : null;
        e[45] = voice.onToggle;
        e[46] = voice.playback;
        e[47] = voice.tone;
        e[48] = w;
    } else {
        w = e[48];
    }
    const memo_peaks = memo.peaks;
    let progress;
    if (e[49] !== M) {
        progress = Us(M);
        e[49] = M;
        e[50] = progress;
    } else {
        progress = e[50];
    }
    let P;
    if (e[51] !== seek) {
        P = seek == null ? {} : {
            seek
        };
        e[51] = seek;
        e[52] = P;
    } else {
        P = e[52];
    }
    let C;
    if (e[53] !== memo.peaks || e[54] !== progress || e[55] !== P || e[56] !== S) {
        C = <Ns onTap={S} peaks={memo_peaks} progress={progress} {...P}/>;
        e[53] = memo.peaks;
        e[54] = progress;
        e[55] = P;
        e[56] = S;
        e[57] = C;
    } else {
        C = e[57];
    }
    let de;
    if (e[58] === Symbol.for("react.memo_cache_sentinel")) {
        de = {
            className: "sand-78zum5 sand-dt5ytf sand-6s0dn4 sand-1ed6fcf sand-2lah0s sand-euugli"
        };
        e[58] = de;
    } else {
        de = e[58];
    }
    let E;
    if (e[59] !== b) {
        E = b ? <XeComponent/> : null;
        e[59] = b;
        e[60] = E;
    } else {
        E = e[60];
    }
    let A;
    if (e[61] !== __1 || e[62] !== i) {
        A = __1(i ? {
            id: "9uXmKJ"
        } : {
            id: "iko5Ih"
        });
        e[61] = __1;
        e[62] = i;
        e[63] = A;
    } else {
        A = e[63];
    }
    let re;
    if (e[64] === Symbol.for("react.memo_cache_sentinel")) {
        re = {
            className: "sand-78zum5 sand-6s0dn4 sand-euugli sand-1ghz6dp sand-1717udv sand-c342km sand-ng3xce sand-jbqb8w sand-1heor9g sand-ln7xf2 sand-1ypdohk"
        };
        e[64] = re;
    } else {
        re = e[64];
    }
    let R;
    if (e[65] !== b || e[66] !== g) {
        R = p_1(a_.caption, T.duration, !g && T.durationAgent, b && T.durationUnderSpeed);
        e[65] = b;
        e[66] = g;
        e[67] = R;
    } else {
        R = e[67];
    }
    let O;
    if (e[68] !== memo.durationMs || e[69] !== M) {
        O = dV(Zs(M, memo.durationMs));
        e[68] = memo.durationMs;
        e[69] = M;
        e[70] = O;
    } else {
        O = e[70];
    }
    let V;
    if (e[71] !== R || e[72] !== O) {
        V = <span {...R} data-voice-memo-duration>{O}</span>;
        e[71] = R;
        e[72] = O;
        e[73] = V;
    } else {
        V = e[73];
    }
    let q;
    if (e[74] !== i || e[75] !== A || e[76] !== V || e[77] !== S || e[78] !== he) {
        q = <button aria-controls={he} aria-expanded={i} aria-label={A} onClick={S} type="button" {...re}>{V}</button>;
        e[74] = i;
        e[75] = A;
        e[76] = V;
        e[77] = S;
        e[78] = he;
        e[79] = q;
    } else {
        q = e[79];
    }
    let $;
    if (e[80] !== E || e[81] !== q) {
        $ = <div {...de}>{E}{q}</div>;
        e[80] = E;
        e[81] = q;
        e[82] = $;
    } else {
        $ = e[82];
    }
    let z;
    if (e[83] !== w || e[84] !== C || e[85] !== $) {
        z = <div {...ie}>{w}{C}{$}</div>;
        e[83] = w;
        e[84] = C;
        e[85] = $;
        e[86] = z;
    } else {
        z = e[86];
    }
    const Se = i ? undefined : true;
    const Ne = i ? undefined : "";
    const inert = i ? undefined : true;
    let L;
    if (e[87] !== i) {
        L = ({
            0: {
                className: "sand-rvj5dj sand-ihq33y sand-nalus7 sand-gqtt45 sand-47corl sand-1qn9uv2 sand-4wkmsb sand-1da2sx9 sand-1e6nqfh"
            },
            1: {
                className: "sand-rvj5dj sand-nalus7 sand-gqtt45 sand-1qn9uv2 sand-4wkmsb sand-1da2sx9 sand-1e6nqfh sand-1tu4anv sand-67bb7w"
            }
        })[!!i << 0];
        e[87] = i;
        e[88] = L;
    } else {
        L = e[88];
    }
    let le;
    if (e[89] === Symbol.for("react.memo_cache_sentinel")) {
        le = {
            className: "sand-2lwn1j sand-b3r6kr"
        };
        e[89] = le;
    } else {
        le = e[89];
    }
    let D;
    if (e[90] !== i) {
        D = ({
            0: {
                className: "sand--default-marker sand-1anpbxc sand-euugli sand-1v49fql sand-11xpdln sand-4wkmsb sand-1da2sx9 sand-1e6nqfh"
            },
            1: {
                className: "sand--default-marker sand-1anpbxc sand-euugli sand-11xpdln sand-4wkmsb sand-1da2sx9 sand-1e6nqfh sand-nn1q72"
            }
        })[!!i << 0];
        e[90] = i;
        e[91] = D;
    } else {
        D = e[91];
    }
    let ce;
    if (e[92] === Symbol.for("react.memo_cache_sentinel")) {
        ce = {
            className: "sand-1w2wdq1 sand-1odjw0f sand-1rohswg sand-1g39ed sand-zicqy sand-30c7nb sand-18d9i69 sand-1k0tb1a sand-1kzaylv sand-1aecepv sand-5t95al sand-euugli sand-j0a0fe"
        };
        e[92] = ce;
    } else {
        ce = e[92];
    }
    let H;
    if (e[93] !== voice_1 || e[94] !== voice.entryId) {
        H = <div data-voice-memo-transcript-well="" {...ce}><DeComponent entryId={voice.entryId} voice={voice_1}/></div>;
        e[93] = voice_1;
        e[94] = voice.entryId;
        e[95] = H;
    } else {
        H = e[95];
    }
    let F;
    if (e[96] !== D || e[97] !== H) {
        F = <div {...le}><div {...D} ref={ref}>{H}</div></div>;
        e[96] = D;
        e[97] = H;
        e[98] = F;
    } else {
        F = e[98];
    }
    let X;
    if (e[99] !== Se || e[100] !== Ne || e[101] !== inert || e[102] !== L || e[103] !== F) {
        X = <div aria-hidden={Se} data-find-skip={Ne} data-voice-memo-inline-transcript="" inert={inert} {...L}>{F}</div>;
        e[99] = Se;
        e[100] = Ne;
        e[101] = inert;
        e[102] = L;
        e[103] = F;
        e[104] = X;
    } else {
        X = e[104];
    }
    let W;
    if (e[105] !== __1 || e[106] !== i || e[107] !== voice.isTruncated || e[108] !== voice.tone) {
        W = voice.tone === "agent" && voice.isTruncated && !i ? <span {...p_1(a_.label, T.abridged)} data-voice-memo-abridged>{__1({
            id: "QdUZjx"
        })}</span> : null;
        e[105] = __1;
        e[106] = i;
        e[107] = voice.isTruncated;
        e[108] = voice.tone;
        e[109] = W;
    } else {
        W = e[109];
    }
    let B;
    if (e[110] !== __1 || e[111] !== M.failure || e[112] !== M.status) {
        B = M.status === "failed" ? <span {...p_1(a_.label, T.failure)} role="status">{M.failure.code === dW ? __1({
            id: "41Sc6H"
        }) : __1({
            id: "MfurAn"
        })}</span> : null;
        e[110] = __1;
        e[111] = M.failure;
        e[112] = M.status;
        e[113] = B;
    } else {
        B = e[113];
    }
    let ue;
    if (e[114] !== M.status || e[115] !== xe || e[116] !== Te || e[117] !== be || e[118] !== _e || e[119] !== ye || e[120] !== ve || e[121] !== Ie || e[122] !== z || e[123] !== X || e[124] !== W || e[125] !== B || e[126] !== N) {
        ue = <div {...N} aria-busy={xe} aria-label={Te} data-continued-next={be} data-continued-prev={_e} data-expanded={ye} data-lead={ve} data-playback={M_status} data-role={Ie} data-voice-memo role="group">{z}{X}{W}{B}</div>;
        e[114] = M.status;
        e[115] = xe;
        e[116] = Te;
        e[117] = be;
        e[118] = _e;
        e[119] = ye;
        e[120] = ve;
        e[121] = Ie;
        e[122] = z;
        e[123] = X;
        e[124] = W;
        e[125] = B;
        e[126] = N;
        e[127] = ue;
    } else {
        ue = e[127];
    }
    return ue;
}
function et() {}
function st() {}
function tt(voice, e) {
    if (e) {
        return {
            tone: "agent",
            content: voice.content,
            spokenText: dX(voice.content).text,
            playback: voice.playback,
            onSeek: voice.onSeek
        };
    }
    return {
        tone: "agent",
        content: voice.content
    };
}
export { JsComponent as V, ct as a, lt as u };
