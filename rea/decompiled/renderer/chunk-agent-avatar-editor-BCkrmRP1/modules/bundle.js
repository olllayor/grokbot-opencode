import { i as i_1, c, u, r, T, p } from "./index.eager-vendor-Qbf9YA6n.js";
import { J } from "./index.eager-common-CdCvBQNJ.js";
import { dr, b7, ds, b8, E as E_1, r as r_1, dt as max, du as min, aK, dv, dw, dx, ab as onKeyDown, bB, dy, dz } from "./index.eager-app-Cj5f8Gby.js";
import { aY as Se } from "./index.eager-platform-Dcfeegfw.js";
import { W, g as $ } from "./index-ZYxf-aBb.js";
import { u as u_1, A as A_1 } from "./chunk-agent-character-picker-DUX3hpCp.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "dc48026d-3df2-49c5-b7ab-b6f7702db958";
            e._sentryDebugIdIdentifier = "sentry-dbid-dc48026d-3df2-49c5-b7ab-b6f7702db958";
        }
    } catch (e) {}
})();
class Xa extends Error {
}
const Ga = {
    id: "sUxahT"
};
function Ya(l) {
    return l.type.toLowerCase().startsWith("image/");
}
function Ka(clipboardData) {
    if (clipboardData == null) {
        return null;
    }
    for(let e = 0; e < clipboardData.items.length; e += 1){
        const item = clipboardData.items[e];
        if (item?.kind !== "file" || !item.type.toLowerCase().startsWith("image/")) {
            continue;
        }
        const c = item.getAsFile();
        if (c != null) {
            return c;
        }
    }
    for(let e = 0; e < clipboardData.files.length; e += 1){
        const s = clipboardData.files.item(e);
        if (s != null && Ya(s)) {
            return s;
        }
    }
    return null;
}
function La(l) {
    if (dr(l.size)) {
        throw new Xa(i_1._(Ga));
    }
}
export class SandAvatarImageError extends Error {
}
const Ve = 96;
const B = {
    tab: {
        kysU6D: "sand-jyslct",
        k3lkva: "sand-1lugfcp",
        k1xSpc: "sand-78zum5",
        kGNEyG: "sand-6s0dn4",
        kB7OPa: "sand-9f619",
        kLKAdn: "sand-f6zju3",
        kwRFfy: "sand-196pc8s",
        kGO01o: "sand-cnij5n",
        kZCmMZ: "sand-22095l",
        keoZOQ: "sand-dj266r",
        k71WvV: "sand-14z9mp",
        k1K539: "sand-at24cr",
        keTefX: "sand-1lziwak",
        kMzoRj: "sand-c342km",
        ksu8eU: "sand-ng3xce",
        kaIpWk: "sand-1043rbw",
        kMwMTN: "sand-19aaqeu",
        kMv6JI: "sand-jb2p0i",
        kGuDYH: "sand-11wthnw",
        kLWn49: "sand-1ja60sm",
        kkrTdU: "sand-1ypdohk",
        khDVqt: "sand-uxw1ft",
        $$css: true
    },
    tabActive: {
        kWkggS: "sand-i07v4r sand-oli092",
        kMwMTN: "sand-1wd3ewq",
        $$css: true
    },
    resetButton: {
        kaIpWk: "sand-1043rbw",
        kGuDYH: "sand-11wthnw",
        kLWn49: "sand-1ja60sm",
        $$css: true
    },
    zoomButton: {
        kysU6D: "sand-jyslct",
        k3lkva: "sand-1lugfcp",
        k1xSpc: "sand-3nfvp2",
        kGNEyG: "sand-6s0dn4",
        kjj79g: "sand-l56j7k",
        kmVPX3: "sand-9ms5i6",
        kMzoRj: "sand-c342km",
        ksu8eU: "sand-ng3xce",
        kaIpWk: "sand-1043rbw",
        kWkggS: "sand-jbqb8w sand-1iuyybk",
        kMwMTN: "sand-1heor9g",
        kkrTdU: "sand-1ypdohk",
        $$css: true
    },
    promptInput: {
        kB7OPa: "sand-9f619",
        kzqmXN: "sand-h8yej3",
        kzQI83: "sand-1iyjqo2",
        kAzted: "sand-bwy6ji",
        kHenm0: "sand-tt52l0",
        kLKAdn: "sand-13ly8rp",
        kwRFfy: "sand-1fg0g13",
        kGO01o: "sand-1xlntvz",
        kZCmMZ: "sand-1tajz9i",
        kMzoRj: "sand-mkeg23",
        ksu8eU: "sand-1y0btm7",
        kVAM5u: "sand-13747pv",
        kaIpWk: "sand-1m7fhj7",
        kWkggS: "sand-1ua6jya",
        kMwMTN: "sand-1wd3ewq",
        kMv6JI: "sand-jb2p0i",
        kGuDYH: "sand-fc7y3v",
        kLWn49: "sand-1yxxptd",
        k3XXqK: "sand-1t137rt",
        k8Qsv1: "sand-ltfok3",
        $$css: true
    }
};
const ba = 1024;
function Za(dataUrl) {
    return new Promise((resolve, reject)=>{
        const c = new Image;
        c.onload = ()=>{
            if (c.naturalWidth <= 0 || c.naturalHeight <= 0) {
                reject(new Error(i_1._({
                    id: "QzjTo3"
                })));
                return;
            }
            resolve(c);
        };
        c.onerror = ()=>reject(new Error(i_1._({
                id: "QzjTo3"
            })));
        c.src = dataUrl;
    });
}
async function wa(dataUrl) {
    const e = await Za(dataUrl);
    const { naturalWidth, naturalHeight } = e;
    const h = Math.max(naturalWidth, naturalHeight);
    if (h <= ba) {
        return {
            dataUrl,
            width: naturalWidth,
            height: naturalHeight
        };
    }
    const p = ba / h;
    const t = document.createElement("canvas");
    t.width = Math.max(1, Math.round(naturalWidth * p));
    t.height = Math.max(1, Math.round(naturalHeight * p));
    const i = t.getContext("2d");
    if (i == null) {
        throw new SandAvatarImageError(i_1._({
            id: "QzjTo3"
        }));
    }
    i.imageSmoothingEnabled = true;
    i.imageSmoothingQuality = "high";
    i.drawImage(e, 0, 0, t.width, t.height);
    return {
        dataUrl: t.toDataURL("image/png"),
        width: t.width,
        height: t.height
    };
}
function ka(l) {
    La(l);
    return new Promise((resolve, reject)=>{
        const c = new FileReader;
        c.onload = ()=>{
            const c_result = c.result;
            if (typeof c_result === "string") {
                resolve(c_result);
                return;
            }
            reject(new Error(i_1._({
                id: "4qmctu"
            })));
        };
        c.onerror = ()=>reject(new Error(i_1._({
                id: "4qmctu"
            })));
        c.readAsDataURL(l);
    });
}
async function ja(l, e) {
    const s = await new Promise((resolve, reject)=>{
        const w = new Image;
        w.onload = ()=>resolve(w);
        w.onerror = ()=>reject(new Error(i_1._({
                id: "QzjTo3"
            })));
        w.src = l.dataUrl;
    });
    const c = document.createElement("canvas");
    c.width = dy;
    c.height = dy;
    const h = c.getContext("2d");
    if (h == null) {
        throw new SandAvatarImageError(i_1._({
            id: "9vUUUt"
        }));
    }
    h.imageSmoothingEnabled = true;
    h.imageSmoothingQuality = "high";
    const p = dz(l.width, l.height, e);
    h.drawImage(s, p.x, p.y, p.width, p.height, 0, 0, dy, dy);
    const t = c.toDataURL("image/png");
    const i = t.slice(t.indexOf(",") + 1);
    if (i.length === 0) {
        throw new SandAvatarImageError(i_1._({
            id: "9vUUUt"
        }));
    }
    return i;
}
const $a = new Set([
    "email",
    "number",
    "password",
    "search",
    "tel",
    "text",
    "url"
]);
export function isTextEntryTarget(l) {
    if (l instanceof HTMLTextAreaElement) {
        return true;
    }
    return l instanceof HTMLInputElement && $a.has(l.type);
}
async function H(l, setAe) {
    try {
        await l();
    } catch (error) {
        setAe(J(error));
    }
}
async function Qa({ generateImage, description, selectionSeqRef, isEditorClosed, commitDismissedResult, setCandidate, setError, setIsGenerating }) {
    const G = ++selectionSeqRef.current;
    try {
        const m = await generateImage({
            description
        });
        if (selectionSeqRef.current !== G) {
            return;
        }
        const w = await wa(m);
        if (selectionSeqRef.current !== G) {
            return;
        }
        if (isEditorClosed()) {
            try {
                await commitDismissedResult(w);
            } catch (error) {
                bB(error);
            }
            return;
        }
        setCandidate({
            source: w,
            crop: dv(w.width, w.height),
            fileName: null
        });
    } catch (error) {
        if (selectionSeqRef.current === G) {
            setError(J(error));
        }
    } finally{
        if (selectionSeqRef.current === G) {
            setIsGenerating(false);
        }
    }
}
export function AgentAvatarEditor(l) {
    AgentAvatarEditor.d = 61;
    const e = c.c(211);
    const { agent, stagedCharacter, onStageCharacter, onClose } = l;
    const { _: __1 } = u();
    const [i, setI] = r.useState(agent.isGroup ? "upload" : "bot");
    const [m, setM] = r.useState(null);
    const [ve, setVe] = r.useState(false);
    const [E, setE] = r.useState("");
    const [ze, setZe] = r.useState(false);
    const [Ae, setAe] = r.useState(null);
    const eaRef = r.useRef(null);
    const _eRef = r.useRef(null);
    const YRef = r.useRef(0);
    const { roster } = b7();
    const Q = ds();
    const { run, isPending } = b8(roster.setAgentAvatarBytes);
    const b = u_1(agent);
    const ref_1 = E_1();
    let qe;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        qe = (n)=>{
            eaRef.current = n;
            if (n != null) {
                n.focus({
                    preventScroll: true
                });
                return ()=>{
                    eaRef.current = null;
                };
            }
        };
        e[0] = qe;
    } else {
        qe = e[0];
    }
    const ref = qe;
    let Te;
    if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
        Te = async (n, fileName)=>{
            const j = YRef.current = YRef.current + 1;
            const f = await wa(n);
            if (YRef.current === j) {
                setM({
                    source: f,
                    crop: dv(f.width, f.height),
                    fileName
                });
            }
        };
        e[1] = Te;
    } else {
        Te = e[1];
    }
    const sa = Te;
    let Ee;
    if (e[2] !== Q) {
        Ee = ()=>{
            setAe(null);
            H(async ()=>{
                const n = await Q.pickFile();
                if (n != null) {
                    await sa(n.dataUrl, n.fileName);
                }
            }, setAe);
        };
        e[2] = Q;
        e[3] = Ee;
    } else {
        Ee = e[3];
    }
    const ta = Ee;
    let Re;
    if (e[4] === Symbol.for("react.memo_cache_sentinel")) {
        Re = (n)=>{
            n.preventDefault();
            setVe(false);
            setAe(null);
            const o = n.dataTransfer.files.item(0);
            if (o != null) {
                H(async ()=>{
                    await sa(await ka(o), o.name);
                }, setAe);
            }
        };
        e[4] = Re;
    } else {
        Re = e[4];
    }
    const onDrop = Re;
    let Me;
    if (e[5] !== agent.id || e[6] !== Q || e[7] !== ze || e[8] !== E || e[9] !== roster) {
        Me = ()=>{
            const description = E.trim();
            if (!(description.length === 0 || ze)) {
                setAe(null);
                setZe(true);
                Qa({
                    generateImage: Q.generateImage,
                    description,
                    selectionSeqRef: YRef,
                    isEditorClosed: ()=>eaRef.current == null,
                    commitDismissedResult: async (o)=>{
                        const j = await ja(o, dv(o.width, o.height));
                        await roster.setAgentAvatarBytes({
                            id: agent.id,
                            pngBase64: j
                        });
                    },
                    setCandidate: setM,
                    setError: setAe,
                    setIsGenerating: setZe
                });
            }
        };
        e[5] = agent.id;
        e[6] = Q;
        e[7] = ze;
        e[8] = E;
        e[9] = roster;
        e[10] = Me;
    } else {
        Me = e[10];
    }
    const V = Me;
    let onPasteCapture;
    let onKeyDownCapture;
    let ae;
    let se;
    let te;
    let onPointerDown;
    let onPointerMove;
    let onPointerUp;
    let A;
    let K;
    if (e[11] !== __1 || e[12] !== agent.id || e[13] !== m || e[14] !== isPending || e[15] !== onClose || e[16] !== onStageCharacter || e[17] !== run || e[18] !== i) {
        onPasteCapture = (r)=>{
            if (isTextEntryTarget(r.target)) {
                return;
            }
            const d = Ka(r.clipboardData);
            if (d == null) {
                r.stopPropagation();
                if (i !== "upload") {
                    A("upload");
                }
                return;
            }
            r.preventDefault();
            r.stopPropagation();
            if (i !== "upload") {
                A("upload");
            }
            setAe(null);
            H(async ()=>{
                await sa(await ka(d), d.name.length > 0 ? d.name : __1({
                    id: "xD1In1"
                }));
            }, setAe);
        };
        onKeyDownCapture = Ja;
        let n;
        if (e[29] === Symbol.for("react.memo_cache_sentinel")) {
            n = ()=>{
                YRef.current = YRef.current + 1;
                setM(null);
                setZe(false);
                setAe(null);
            };
            e[29] = n;
        } else {
            n = e[29];
        }
        ae = n;
        let o;
        if (e[30] !== agent.id || e[31] !== m || e[32] !== isPending || e[33] !== onClose || e[34] !== run) {
            o = ()=>{
                if (!(m == null || isPending)) {
                    setAe(null);
                    H(async ()=>{
                        const r = await ja(m.source, m.crop);
                        await run({
                            id: agent.id,
                            pngBase64: r
                        });
                        onClose();
                    }, setAe);
                }
            };
            e[30] = agent.id;
            e[31] = m;
            e[32] = isPending;
            e[33] = onClose;
            e[34] = run;
            e[35] = o;
        } else {
            o = e[35];
        }
        te = o;
        let j;
        if (e[36] !== agent.id || e[37] !== isPending || e[38] !== onStageCharacter || e[39] !== run) {
            j = ()=>{
                if (!isPending) {
                    onStageCharacter(null);
                    setAe(null);
                    H(async ()=>{
                        await run({
                            id: agent.id,
                            pngBase64: null
                        });
                    }, setAe);
                }
            };
            e[36] = agent.id;
            e[37] = isPending;
            e[38] = onStageCharacter;
            e[39] = run;
            e[40] = j;
        } else {
            j = e[40];
        }
        se = j;
        let f;
        if (e[41] === Symbol.for("react.memo_cache_sentinel")) {
            f = (r)=>{
                setM((d)=>{
                    if (d == null) {
                        return d;
                    }
                    const q = {
                        zoom: dx(r),
                        centerX: d.crop.centerX,
                        centerY: d.crop.centerY
                    };
                    return {
                        ...d,
                        crop: {
                            zoom: q.zoom,
                            ...dw(q, d.source.width, d.source.height)
                        }
                    };
                });
            };
            e[41] = f;
        } else {
            f = e[41];
        }
        K = f;
        let k;
        if (e[42] === Symbol.for("react.memo_cache_sentinel")) {
            k = (r)=>{
                r.currentTarget.setPointerCapture(r.pointerId);
                _eRef.current = {
                    pointerId: r.pointerId,
                    lastX: r.clientX,
                    lastY: r.clientY
                };
            };
            e[42] = k;
        } else {
            k = e[42];
        }
        onPointerDown = k;
        let T;
        if (e[43] === Symbol.for("react.memo_cache_sentinel")) {
            T = (r)=>{
                const _eRef_current = _eRef.current;
                if (_eRef_current == null || _eRef_current.pointerId !== r.pointerId) {
                    return;
                }
                const q = r.clientX - _eRef_current.lastX;
                const L = r.clientY - _eRef_current.lastY;
                _eRef_current.lastX = r.clientX;
                _eRef_current.lastY = r.clientY;
                setM((x)=>{
                    if (x == null) {
                        return x;
                    }
                    const u = Math.min(x.source.width, x.source.height);
                    const g = Ve / u * x.crop.zoom;
                    const C = {
                        zoom: x.crop.zoom,
                        centerX: x.crop.centerX - q / g,
                        centerY: x.crop.centerY - L / g
                    };
                    return {
                        ...x,
                        crop: {
                            zoom: x.crop.zoom,
                            ...dw(C, x.source.width, x.source.height)
                        }
                    };
                });
            };
            e[43] = T;
        } else {
            T = e[43];
        }
        onPointerMove = T;
        let z;
        if (e[44] === Symbol.for("react.memo_cache_sentinel")) {
            z = (r)=>{
                const _eRef_current = _eRef.current;
                if (!(_eRef_current == null || _eRef_current.pointerId !== r.pointerId)) {
                    _eRef.current = null;
                    if (r.currentTarget.hasPointerCapture(r.pointerId)) {
                        r.currentTarget.releasePointerCapture(r.pointerId);
                    }
                }
            };
            e[44] = z;
        } else {
            z = e[44];
        }
        onPointerUp = z;
        A = (r)=>{
            YRef.current = YRef.current + 1;
            setI(r);
            setM(null);
            onStageCharacter(null);
            setZe(false);
            setAe(null);
        };
        e[11] = __1;
        e[12] = agent.id;
        e[13] = m;
        e[14] = isPending;
        e[15] = onClose;
        e[16] = onStageCharacter;
        e[17] = run;
        e[18] = i;
        e[19] = onPasteCapture;
        e[20] = onKeyDownCapture;
        e[21] = ae;
        e[22] = se;
        e[23] = te;
        e[24] = onPointerDown;
        e[25] = onPointerMove;
        e[26] = onPointerUp;
        e[27] = A;
        e[28] = K;
    } else {
        onPasteCapture = e[19];
        onKeyDownCapture = e[20];
        ae = e[21];
        se = e[22];
        te = e[23];
        onPointerDown = e[24];
        onPointerMove = e[25];
        onPointerUp = e[26];
        A = e[27];
        K = e[28];
    }
    const F = (agent.avatarDataUrl ?? "").length > 0;
    const _ = isPending;
    const staged = F ? stagedCharacter : null;
    let Pe;
    if (e[45] !== b || e[46] !== F || e[47] !== onStageCharacter || e[48] !== staged) {
        Pe = {
            commitCharacter: (n)=>{
                if (F) {
                    onStageCharacter({
                        ...staged,
                        ...n
                    });
                    return;
                }
                setAe(null);
                H(()=>b.commitCharacter(n), setAe);
            }
        };
        e[45] = b;
        e[46] = F;
        e[47] = onStageCharacter;
        e[48] = staged;
        e[49] = Pe;
    } else {
        Pe = e[49];
    }
    const character = Pe;
    let De;
    if (e[50] !== agent.id || e[51] !== b || e[52] !== _ || e[53] !== onClose || e[54] !== run || e[55] !== staged) {
        De = ()=>{
            if (!(staged == null || _ || b.isCommitting)) {
                setAe(null);
                H(async ()=>{
                    await b.commitCharacter(staged);
                    await run({
                        id: agent.id,
                        pngBase64: null
                    });
                    onClose();
                }, setAe);
            }
        };
        e[50] = agent.id;
        e[51] = b;
        e[52] = _;
        e[53] = onClose;
        e[54] = run;
        e[55] = staged;
        e[56] = De;
    } else {
        De = e[56];
    }
    const la = De;
    const za = agent.avatarShape != null || agent.avatarColor != null;
    let Ue;
    e: {
        if (F) {
            let f;
            if (e[57] !== __1 || e[58] !== agent.isGroup) {
                f = agent.isGroup ? __1({
                    id: "bpkpZv"
                }) : __1({
                    id: "mjLbra"
                });
                e[57] = __1;
                e[58] = agent.isGroup;
                e[59] = f;
            } else {
                f = e[59];
            }
            let k;
            if (e[60] !== se || e[61] !== _ || e[62] !== f) {
                k = {
                    label: f,
                    disabled: _,
                    run: se
                };
                e[60] = se;
                e[61] = _;
                e[62] = f;
                e[63] = k;
            } else {
                k = e[63];
            }
            Ue = k;
            break e;
        }
        if (i !== "bot" || !za) {
            Ue = null;
            break e;
        }
        let n;
        if (e[64] !== __1) {
            n = __1({
                id: "xdBJIU"
            });
            e[64] = __1;
            e[65] = n;
        } else {
            n = e[65];
        }
        let o;
        if (e[66] !== b) {
            o = ()=>{
                b.commitCharacter({
                    avatarShape: "",
                    avatarColor: ""
                });
            };
            e[66] = b;
            e[67] = o;
        } else {
            o = e[67];
        }
        let j;
        if (e[68] !== b.isCommitting || e[69] !== o || e[70] !== n) {
            j = {
                label: n,
                disabled: b.isCommitting,
                run: o
            };
            e[68] = b.isCommitting;
            e[69] = o;
            e[70] = n;
            e[71] = j;
        } else {
            j = e[71];
        }
        Ue = j;
    }
    const ie = Ue;
    let ra;
    e: {
        if (m == null) {
            ra = null;
            break e;
        }
        const { source, crop } = m;
        const j = Math.min(source.width, source.height);
        const f = Ve / j * crop.zoom;
        const k = Ve / 2 - crop.centerX * f;
        const T = Ve / 2 - crop.centerY * f;
        const width = source.width * f;
        const height = source.height * f;
        const transform = `translate(${k}px, ${T}px)`;
        let q;
        if (e[72] !== width || e[73] !== height || e[74] !== transform) {
            q = {
                width,
                height,
                transform
            };
            e[72] = width;
            e[73] = height;
            e[74] = transform;
            e[75] = q;
        } else {
            q = e[75];
        }
        ra = q;
    }
    const style = ra;
    let Fe;
    if (e[76] !== __1 || e[77] !== m || e[78] !== ae || e[79] !== te || e[80] !== onPointerDown || e[81] !== onPointerMove || e[82] !== onPointerUp || e[83] !== _ || e[84] !== isPending || e[85] !== K || e[86] !== style) {
        Fe = m != null && style != null ? <div className="sand-78zum5 sand-dt5ytf sand-6s0dn4 sand-ehausa"><div aria-label={__1({
            id: "SyPDzB"
        })} className={r_1("sand-avatar-editor__stage", "sand-1n2onr6 sand-13oubkp sand-jp8j0k sand-16rqkct sand-b3r6kr sand-i07v4r sand-1jm3nie sand-ch2mbi sand-5ve5x3 sand-87ps6o sand-1t137rt")} onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={onPointerUp} role="img"><img alt="" className="sand-10l6tqk sand-13vifvy sand-u96u03 sand-1x1rfll sand-47corl sand-87ps6o sand-1so62im" draggable={false} src={m.source.dataUrl} style={style}/><span aria-hidden className="sand-10l6tqk sand-10a8y8t sand-16rqkct sand-24fn8l sand-47corl"/></div><div className="sand-78zum5 sand-dt5ytf sand-6s0dn4 sand-137clkk sand-2b8uid">{m.fileName != null ? <Se as="span" color="secondary" size="md">{__1({
            id: "hEBKgT",
            values: {
                0: m.fileName,
                1: m.source.width,
                2: m.source.height
            }
        })}</Se> : null}<Se as="span" color="tertiary" size="md"><T id="SyPDzB"/></Se></div><div className={r_1("sand-avatar-editor__zoom", "sand-78zum5 sand-6s0dn4 sand-ehausa sand-19aaqeu")} style={{
            width: "100%"
        }}><button aria-label={__1({
            id: "FjkaiT"
        })} className={p(B.zoomButton, aK.keyboardFocus).className} onClick={()=>K(m.crop.zoom - (max - min) / 8)} type="button"><W name="minus" size="base"/></button><input aria-label={__1({
            id: "Qwg3u4"
        })} className="sand-1iyjqo2 sand-s83m0k sand-euugli sand-1ghz6dp sand-1ypdohk sand-jyslct sand-1lugfcp sand-jbqb8w sand-1t137rt sand-13m05e8 sand-1ysdatd sand-tk3z5d sand-ibs45w sand-1hzk0bc sand-3cp4ko sand-e55cdc sand-jfutqj sand-fiu4hc sand-13y9dww sand-5pni9w" max={max} min={min} onChange={(n)=>K(Number.parseFloat(n.currentTarget.value))} step={0.01} type="range" value={m.crop.zoom}/><button aria-label={__1({
            id: "AWOSPo"
        })} className={p(B.zoomButton, aK.keyboardFocus).className} onClick={()=>K(m.crop.zoom + (max - min) / 8)} type="button"><W name="plus" size="base"/></button></div><div className="sand-78zum5 sand-1qjc9v5 sand-ehausa" style={{
            width: "100%"
        }}><$ className="sand-1iyjqo2 sand-s83m0k sand-1r8uery sand-euugli" disabled={_} onClick={ae} rootStyle={aK.buttonRadius} variant="secondary"><T id="6z9W13"/></$><$ className="sand-1iyjqo2 sand-s83m0k sand-1r8uery sand-euugli" tone="monochrome" disabled={_} onClick={te} rootStyle={aK.buttonRadius} variant="primary">{__1(isPending ? {
            id: "K/F6pa"
        } : {
            id: "eCtMfe"
        })}</$></div></div> : null;
        e[76] = __1;
        e[77] = m;
        e[78] = ae;
        e[79] = te;
        e[80] = onPointerDown;
        e[81] = onPointerMove;
        e[82] = onPointerUp;
        e[83] = _;
        e[84] = isPending;
        e[85] = K;
        e[86] = style;
        e[87] = Fe;
    } else {
        Fe = e[87];
    }
    const Ca = Fe;
    let oe;
    e: {
        if (i === "bot") {
            const isCharacterActive = !F || staged != null;
            let g;
            if (e[88] !== agent || e[89] !== character || e[90] !== staged || e[91] !== isCharacterActive) {
                g = <A_1 agent={agent} character={character} isCharacterActive={isCharacterActive} staged={staged}/>;
                e[88] = agent;
                e[89] = character;
                e[90] = staged;
                e[91] = isCharacterActive;
                e[92] = g;
            } else {
                g = e[92];
            }
            let C;
            if (e[93] !== __1 || e[94] !== b || e[95] !== la || e[96] !== F || e[97] !== _ || e[98] !== isPending || e[99] !== onClose || e[100] !== staged) {
                C = F ? <div className="sand-78zum5 sand-1qjc9v5 sand-ehausa"><$ className="sand-1iyjqo2 sand-s83m0k sand-1r8uery sand-euugli" disabled={_ || b.isCommitting} onClick={onClose} rootStyle={aK.buttonRadius} variant="secondary"><T id="dEgA5A"/></$><$ className="sand-1iyjqo2 sand-s83m0k sand-1r8uery sand-euugli" tone="monochrome" disabled={staged == null || _ || b.isCommitting} onClick={la} rootStyle={aK.buttonRadius} variant="primary">{isPending || b.isCommitting ? __1({
                    id: "K/F6pa"
                }) : __1({
                    id: "eCtMfe"
                })}</$></div> : null;
                e[93] = __1;
                e[94] = b;
                e[95] = la;
                e[96] = F;
                e[97] = _;
                e[98] = isPending;
                e[99] = onClose;
                e[100] = staged;
                e[101] = C;
            } else {
                C = e[101];
            }
            let N;
            if (e[102] !== g || e[103] !== C) {
                N = <>{g}{C}</>;
                e[102] = g;
                e[103] = C;
                e[104] = N;
            } else {
                N = e[104];
            }
            oe = N;
            break e;
        }
        if (m != null) {
            oe = Ca;
            break e;
        }
        if (i === "upload") {
            let u;
            if (e[105] !== ve) {
                u = r_1("sand-avatar-editor__dropzone", {
                    0: {
                        className: "sand-78zum5 sand-dt5ytf sand-6s0dn4 sand-l56j7k sand-ehausa sand-9f619 sand-1iyjqo2 sand-1awnzvw sand-8fiw5y sand-t1q3vd sand-mkeg23 sand-bsl7fq sand-13747pv sand-1m7fhj7 sand-2b8uid"
                    },
                    1: {
                        className: "sand-78zum5 sand-dt5ytf sand-6s0dn4 sand-l56j7k sand-ehausa sand-9f619 sand-1iyjqo2 sand-1awnzvw sand-8fiw5y sand-t1q3vd sand-mkeg23 sand-bsl7fq sand-1m7fhj7 sand-2b8uid sand-1xmqp4p sand-i07v4r"
                    }
                }[!!ve << 0].className);
                e[105] = ve;
                e[106] = u;
            } else {
                u = e[106];
            }
            let onDragLeave;
            let onDragOver;
            if (e[107] === Symbol.for("react.memo_cache_sentinel")) {
                onDragLeave = ()=>setVe(false);
                onDragOver = (Z)=>{
                    Z.preventDefault();
                    setVe(true);
                };
                e[107] = onDragLeave;
                e[108] = onDragOver;
            } else {
                onDragLeave = e[107];
                onDragOver = e[108];
            }
            let N;
            if (e[109] === Symbol.for("react.memo_cache_sentinel")) {
                N = <Se as="span" color="secondary" size="lg"><T id="fRyHYd"/></Se>;
                e[109] = N;
            } else {
                N = e[109];
            }
            let P;
            if (e[110] === Symbol.for("react.memo_cache_sentinel")) {
                P = <Se as="span" color="tertiary" size="lg"><T id="BzEFor"/></Se>;
                e[110] = P;
            } else {
                P = e[110];
            }
            let D;
            if (e[111] === Symbol.for("react.memo_cache_sentinel")) {
                D = <T id="JYj5R2"/>;
                e[111] = D;
            } else {
                D = e[111];
            }
            let U;
            if (e[112] !== ta) {
                U = <$ onClick={ta} rootStyle={aK.buttonRadius} variant="secondary">{D}</$>;
                e[112] = ta;
                e[113] = U;
            } else {
                U = e[113];
            }
            let W;
            if (e[114] !== u || e[115] !== U) {
                W = <div className={u} onDragLeave={onDragLeave} onDragOver={onDragOver} onDrop={onDrop}>{N}{P}{U}</div>;
                e[114] = u;
                e[115] = U;
                e[116] = W;
            } else {
                W = e[116];
            }
            oe = W;
            break e;
        }
        if (ze) {
            let u;
            if (e[117] !== __1) {
                u = __1({
                    id: "IVpf8Z"
                });
                e[117] = __1;
                e[118] = u;
            } else {
                u = e[118];
            }
            let g;
            if (e[119] === Symbol.for("react.memo_cache_sentinel")) {
                g = {
                    className: "sand-9f619 sand-h8yej3 sand-c9qbxq sand-exx8yu sand-1fg0g13 sand-18d9i69 sand-1tajz9i sand-mkeg23 sand-1y0btm7 sand-13747pv sand-1m7fhj7 sand-1ua6jya sand-1wd3ewq sand-jb2p0i sand-fc7y3v sand-1yxxptd sand-lyipyv sand-1t137rt"
                };
                e[119] = g;
            } else {
                g = e[119];
            }
            const C = g.className;
            let N;
            if (e[120] !== E) {
                N = E.replace(/\s+/g, " ").trim();
                e[120] = E;
                e[121] = N;
            } else {
                N = e[121];
            }
            let P;
            if (e[122] !== u || e[123] !== N) {
                P = <input aria-label={u} className={C} readOnly type="text" value={N}/>;
                e[122] = u;
                e[123] = N;
                e[124] = P;
            } else {
                P = e[124];
            }
            let D;
            if (e[125] !== __1) {
                D = __1({
                    id: "lhKkFq"
                });
                e[125] = __1;
                e[126] = D;
            } else {
                D = e[126];
            }
            let U;
            if (e[127] === Symbol.for("react.memo_cache_sentinel")) {
                U = {
                    className: "sand-78zum5 sand-6s0dn4 sand-l56j7k sand-t9g0qb sand-20eq2h"
                };
                e[127] = U;
            } else {
                U = e[127];
            }
            let W;
            if (e[128] === Symbol.for("react.memo_cache_sentinel")) {
                W = <span className="sand-13oubkp sand-jp8j0k sand-16rqkct sand-i07v4r sand-c79vkq sand-1aquc0h sand-njfjcd sand-a4qsjk sand-4hg4is"/>;
                e[128] = W;
            } else {
                W = e[128];
            }
            let Z;
            if (e[129] !== D) {
                Z = <div aria-label={D} className={U.className} role="status">{W}</div>;
                e[129] = D;
                e[130] = Z;
            } else {
                Z = e[130];
            }
            let Ze;
            if (e[131] === Symbol.for("react.memo_cache_sentinel")) {
                Ze = <$ disabled rootStyle={aK.buttonRadius} variant="secondary"><T id="B1MVWs"/></$>;
                e[131] = Ze;
            } else {
                Ze = e[131];
            }
            let $e;
            if (e[132] !== P || e[133] !== Z) {
                $e = <>{P}{Z}{Ze}</>;
                e[132] = P;
                e[133] = Z;
                e[134] = $e;
            } else {
                $e = e[134];
            }
            oe = $e;
            break e;
        }
        let n;
        if (e[135] !== __1) {
            n = __1({
                id: "IVpf8Z"
            });
            e[135] = __1;
            e[136] = n;
        } else {
            n = e[136];
        }
        let o;
        if (e[137] === Symbol.for("react.memo_cache_sentinel")) {
            o = p(B.promptInput, aK.thinScrollbar);
            e[137] = o;
        } else {
            o = e[137];
        }
        const j = o.className;
        let onChange;
        if (e[138] === Symbol.for("react.memo_cache_sentinel")) {
            onChange = (u)=>setE(u.currentTarget.value);
            e[138] = onChange;
        } else {
            onChange = e[138];
        }
        let onKeyDown_1;
        if (e[139] !== V) {
            onKeyDown_1 = (u)=>{
                if (u.key === "Enter" && (u.metaKey || u.ctrlKey)) {
                    u.preventDefault();
                    V();
                }
            };
            e[139] = V;
            e[140] = onKeyDown_1;
        } else {
            onKeyDown_1 = e[140];
        }
        let placeholder;
        if (e[141] !== __1) {
            placeholder = __1({
                id: "7KrBp7"
            });
            e[141] = __1;
            e[142] = placeholder;
        } else {
            placeholder = e[142];
        }
        let z;
        if (e[143] !== E || e[144] !== n || e[145] !== onKeyDown_1 || e[146] !== placeholder) {
            z = <textarea aria-label={n} className={j} onChange={onChange} onKeyDown={onKeyDown_1} placeholder={placeholder} value={E}/>;
            e[143] = E;
            e[144] = n;
            e[145] = onKeyDown_1;
            e[146] = placeholder;
            e[147] = z;
        } else {
            z = e[147];
        }
        let r;
        if (e[148] !== E) {
            r = E.trim();
            e[148] = E;
            e[149] = r;
        } else {
            r = e[149];
        }
        const d = r.length === 0;
        let q;
        if (e[150] === Symbol.for("react.memo_cache_sentinel")) {
            q = <T id="ziAjHi"/>;
            e[150] = q;
        } else {
            q = e[150];
        }
        let L;
        if (e[151] !== V || e[152] !== d) {
            L = <$ tone="monochrome" disabled={d} onClick={V} rootStyle={aK.buttonRadius} variant="primary">{q}</$>;
            e[151] = V;
            e[152] = d;
            e[153] = L;
        } else {
            L = e[153];
        }
        let x;
        if (e[154] !== z || e[155] !== L) {
            x = <>{z}{L}</>;
            e[154] = z;
            e[155] = L;
            e[156] = x;
        } else {
            x = e[156];
        }
        oe = x;
    }
    const ia = oe;
    let de;
    if (e[157] !== __1) {
        de = __1({
            id: "p9Xy+W"
        });
        e[157] = __1;
        e[158] = de;
    } else {
        de = e[158];
    }
    let We;
    if (e[159] === Symbol.for("react.memo_cache_sentinel")) {
        We = r_1("sand-avatar-editor", "sand-10l6tqk sand-wwefxd sand-1nrll8i sand-uuh30 sand-1n327nk sand-78zum5 sand-dt5ytf sand-37ym55 sand-1afcbsf sand-1828qc5 sand-4hv7ue sand-1y0btm7 sand-qz0629 sand-f1vpex sand-1bioihg sand-b3r6kr");
        e[159] = We;
    } else {
        We = e[159];
    }
    let Oe;
    if (e[160] === Symbol.for("react.memo_cache_sentinel")) {
        Oe = {
            className: "sand-78zum5 sand-6s0dn4 sand-ehausa sand-2lah0s sand-9f619 sand-13ly8rp sand-196pc8s sand-1xlntvz sand-22095l sand-1co6499 sand-1q0q8m5 sand-17fyfba"
        };
        e[160] = Oe;
    } else {
        Oe = e[160];
    }
    const Oe_className = Oe.className;
    let ce;
    if (e[161] !== __1) {
        ce = __1({
            id: "ciFwRi"
        });
        e[161] = __1;
        e[162] = ce;
    } else {
        ce = e[162];
    }
    let Xe;
    if (e[163] === Symbol.for("react.memo_cache_sentinel")) {
        Xe = {
            className: "sand-78zum5 sand-6s0dn4 sand-137clkk sand-1iyjqo2 sand-euugli"
        };
        e[163] = Xe;
    } else {
        Xe = e[163];
    }
    const Xe_className = Xe.className;
    let me;
    if (e[164] !== agent.isGroup || e[165] !== A || e[166] !== i) {
        me = agent.isGroup ? null : <button aria-selected={i === "bot"} className={p(B.tab, aK.interactive, aK.keyboardFocus, i === "bot" && B.tabActive).className} onClick={()=>A("bot")} role="tab" tabIndex={i === "bot" ? 0 : -1} type="button"><T id="ixkTse"/></button>;
        e[164] = agent.isGroup;
        e[165] = A;
        e[166] = i;
        e[167] = me;
    } else {
        me = e[167];
    }
    const oa = i === "generate";
    let ue;
    if (e[168] !== i) {
        ue = p(B.tab, aK.interactive, aK.keyboardFocus, i === "generate" && B.tabActive);
        e[168] = i;
        e[169] = ue;
    } else {
        ue = e[169];
    }
    let fe;
    if (e[170] !== A) {
        fe = ()=>A("generate");
        e[170] = A;
        e[171] = fe;
    } else {
        fe = e[171];
    }
    const da = i === "generate" ? 0 : -1;
    let Ge;
    if (e[172] === Symbol.for("react.memo_cache_sentinel")) {
        Ge = <T id="ziAjHi"/>;
        e[172] = Ge;
    } else {
        Ge = e[172];
    }
    let he;
    if (e[173] !== oa || e[174] !== ue.className || e[175] !== fe || e[176] !== da) {
        he = <button aria-selected={oa} className={ue.className} onClick={fe} role="tab" tabIndex={da} type="button">{Ge}</button>;
        e[173] = oa;
        e[174] = ue.className;
        e[175] = fe;
        e[176] = da;
        e[177] = he;
    } else {
        he = e[177];
    }
    const ca = i === "upload";
    let pe;
    if (e[178] !== i) {
        pe = p(B.tab, aK.interactive, aK.keyboardFocus, i === "upload" && B.tabActive);
        e[178] = i;
        e[179] = pe;
    } else {
        pe = e[179];
    }
    let ge;
    if (e[180] !== A) {
        ge = ()=>A("upload");
        e[180] = A;
        e[181] = ge;
    } else {
        ge = e[181];
    }
    const ma = i === "upload" ? 0 : -1;
    let Ye;
    if (e[182] === Symbol.for("react.memo_cache_sentinel")) {
        Ye = <T id="ONWvwQ"/>;
        e[182] = Ye;
    } else {
        Ye = e[182];
    }
    let ye;
    if (e[183] !== ca || e[184] !== pe.className || e[185] !== ge || e[186] !== ma) {
        ye = <button aria-selected={ca} className={pe.className} onClick={ge} role="tab" tabIndex={ma} type="button">{Ye}</button>;
        e[183] = ca;
        e[184] = pe.className;
        e[185] = ge;
        e[186] = ma;
        e[187] = ye;
    } else {
        ye = e[187];
    }
    let be;
    if (e[188] !== ce || e[189] !== me || e[190] !== he || e[191] !== ye) {
        be = <div aria-label={ce} className={Xe_className} onKeyDown={onKeyDown} role="tablist">{me}{he}{ye}</div>;
        e[188] = ce;
        e[189] = me;
        e[190] = he;
        e[191] = ye;
        e[192] = be;
    } else {
        be = e[192];
    }
    let ke;
    if (e[193] !== ie) {
        ke = ie != null ? <$ aria-label={ie.label} disabled={ie.disabled} onClick={ie.run} rootStyle={B.resetButton} size="xs" variant="ghost"><T id="OfhWJH"/></$> : null;
        e[193] = ie;
        e[194] = ke;
    } else {
        ke = e[194];
    }
    let je;
    if (e[195] !== ref_1 || e[196] !== be || e[197] !== ke) {
        je = <div className={Oe_className} ref={ref_1}>{be}{ke}</div>;
        e[195] = ref_1;
        e[196] = be;
        e[197] = ke;
        e[198] = je;
    } else {
        je = e[198];
    }
    let Ke;
    if (e[199] === Symbol.for("react.memo_cache_sentinel")) {
        Ke = {
            className: "sand-78zum5 sand-dt5ytf sand-1oot3zn sand-9f619 sand-1ficeh5 sand-1t8xvyj sand-t1q3vd sand-usxwy5 sand-8fiw5y"
        };
        e[199] = Ke;
    } else {
        Ke = e[199];
    }
    let xe;
    if (e[200] !== Ae) {
        xe = Ae != null ? <Se as="div" color="red" size="sm">{Ae}</Se> : null;
        e[200] = Ae;
        e[201] = xe;
    } else {
        xe = e[201];
    }
    let we;
    if (e[202] !== ia || e[203] !== xe) {
        we = <div className={Ke.className}>{ia}{xe}</div>;
        e[202] = ia;
        e[203] = xe;
        e[204] = we;
    } else {
        we = e[204];
    }
    let Le;
    if (e[205] !== onPasteCapture || e[206] !== onKeyDownCapture || e[207] !== de || e[208] !== je || e[209] !== we) {
        Le = <div aria-label={de} className={We} onKeyDownCapture={onKeyDownCapture} onPasteCapture={onPasteCapture} ref={ref} role="dialog" tabIndex={-1}>{je}{we}</div>;
        e[205] = onPasteCapture;
        e[206] = onKeyDownCapture;
        e[207] = de;
        e[208] = je;
        e[209] = we;
        e[210] = Le;
    } else {
        Le = e[210];
    }
    return Le;
}
function Ja(l) {
    if (!(!(l.metaKey || l.ctrlKey) || l.altKey || l.key.toLowerCase() !== "v")) {
        l.stopPropagation();
    }
}
