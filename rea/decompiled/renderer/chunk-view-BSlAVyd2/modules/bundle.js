import { c as c_1, u as u_1, r as r_1, p as p_1, T } from "./index.eager-vendor-Qbf9YA6n.js";
import { cl, W, ba as ba_1, cm, cn as Dt1, z as Fe1, co, H, bx as Ys1, I, p as Rs1, E as E_1, cp, G as G_1, cq, cr as Ut1, bZ as Ft1 } from "./index-ZYxf-aBb.js";
import { ip as accept, aP as Ht1, fd, cq as cq_1, iq, b9, ir, b7, aU, is, it, iu, iv, bT, iw, r as r_2, a4 as Jt1, a$, a_, aV, ix, iy, iz, iA, iB, dl, iC, iD as SAND_AUTO_REVIEW_INSTRUCTION_MAX_ENTRIES, ew, iE, aK, iF, cm as cm_1, fB, eY, ad, em, iG, iH, iI, gz, iJ as searchText, iK, iL, bz, iM, iN, iO, iP, iQ, iR, iS, iT, iU, iV, iW, iX, bh, iY, iZ, i_, i$, j0, j1, j2, D, j3, j4, dh, di, cc as anchorId, cr, fh, j5, j6, j7, j8, j9, ja, jb, gT, bA, jc, dn } from "./index.eager-app-Cj5f8Gby.js";
import { i as i_1, aY as Ee, l, c as c_2 } from "./index.eager-platform-Dcfeegfw.js";
import { S } from "./chunk-scroll-pane-CoxKzaOs.js";
import { c as c_3 } from "./chunk-provider-team-policy-CBjUAi-4.js";
import { a as Ae1, G as G_2, S as S_1 } from "./chunk-settings-row-I8ggwIzt.js";
import { L as L_1 } from "./chunk-local-tools-row-BLtLBTlf.js";
import { c as c_4, a } from "./chunk-provider-listener-integrations-CR9f28xA.js";
import "./index.eager-common-CdCvBQNJ.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "7967ad07-c5b8-49d1-98d3-25481635e736";
            e._sentryDebugIdIdentifier = "sentry-dbid-7967ad07-c5b8-49d1-98d3-25481635e736";
        }
    } catch (e) {}
})();
function IsComponent(s) {
    IsComponent.d = 1234;
    const e = c_1.c(29);
    const { children, updateProfilePhoto } = s;
    const { _: __1 } = u_1();
    const d = cl();
    const mRef = r_1.useRef(null);
    const [i, setI] = r_1.useState(false);
    let u;
    if (e[0] !== __1) {
        u = (k)=>{
            switch(k.kind){
                case "updated":
                    return {
                        kind: "success",
                        text: __1({
                            id: "kVzOFh"
                        })
                    };
                case "superseded":
                    return null;
                case "failed":
                    return {
                        kind: "error",
                        text: __1({
                            id: "dWPnw4"
                        })
                    };
                case "refused":
                    switch(k.refusal){
                        case "unsupported-type":
                            return {
                                kind: "error",
                                text: __1({
                                    id: "V+eTNE"
                                })
                            };
                        case "too-large":
                            return {
                                kind: "error",
                                text: __1({
                                    id: "Rjk5Ve"
                                })
                            };
                        case "empty":
                            return {
                                kind: "error",
                                text: __1({
                                    id: "kLCn9/"
                                })
                            };
                    }
            }
        };
        e[0] = __1;
        e[1] = u;
    } else {
        u = e[1];
    }
    const c = u;
    let r;
    if (e[2] !== c || e[3] !== d || e[4] !== updateProfilePhoto) {
        r = async (k)=>{
            const N = k.currentTarget.files?.item(0) ?? null;
            k.currentTarget.value = "";
            if (N == null) {
                return;
            }
            setI(true);
            const A = await updateProfilePhoto(N);
            setI(false);
            const I = c(A);
            if (I != null) {
                d(I);
            }
        };
        e[2] = c;
        e[3] = d;
        e[4] = updateProfilePhoto;
        e[5] = r;
    } else {
        r = e[5];
    }
    const f = r;
    let h;
    if (e[6] !== __1 || e[7] !== i) {
        h = __1(i ? {
            id: "vUlhzq"
        } : {
            id: "7Oqlib"
        });
        e[6] = __1;
        e[7] = i;
        e[8] = h;
    } else {
        h = e[8];
    }
    let p;
    if (e[9] === Symbol.for("react.memo_cache_sentinel")) {
        p = {
            className: "sand--default-marker sand-1n2onr6 sand-3nfvp2 sand-2lah0s sand-1717udv sand-c342km sand-ng3xce sand-149ho13 sand-jbqb8w sand-1ypdohk sand-1ar62m4 sand-1t137rt sand-9v5kkp sand-1k57tk5 sand-784prv sand-1hl8ikr sand-4sht9k"
        };
        e[9] = p;
    } else {
        p = e[9];
    }
    let b;
    if (e[10] === Symbol.for("react.memo_cache_sentinel")) {
        b = ()=>mRef.current?.click();
        e[10] = b;
    } else {
        b = e[10];
    }
    let v;
    if (e[11] !== i) {
        v = ({
            0: {
                className: "sand-10l6tqk sand-10a8y8t sand-78zum5 sand-6s0dn4 sand-l56j7k sand-149ho13 sand-a44r0r sand-fungia sand-g01cxk sand-1t642l6 sand-1i7crgf sand-19991ni sand-1uacuc8 sand-wji4o3 sand-47corl"
            },
            1: {
                className: "sand-10l6tqk sand-10a8y8t sand-78zum5 sand-6s0dn4 sand-l56j7k sand-149ho13 sand-a44r0r sand-fungia sand-19991ni sand-1uacuc8 sand-wji4o3 sand-47corl sand-1hc1fzr"
            }
        })[!!i << 0];
        e[11] = i;
        e[12] = v;
    } else {
        v = e[12];
    }
    let y;
    if (e[13] !== i) {
        y = i ? <Ht1 borderWidth={2} inheritColor size={16}/> : <W name="pencil" size={16}/>;
        e[13] = i;
        e[14] = y;
    } else {
        y = e[14];
    }
    let j;
    if (e[15] !== v || e[16] !== y) {
        j = <span aria-hidden data-testid="account-photo-overlay" {...v}>{y}</span>;
        e[15] = v;
        e[16] = y;
        e[17] = j;
    } else {
        j = e[17];
    }
    let x;
    if (e[18] !== children || e[19] !== i || e[20] !== h || e[21] !== j) {
        x = <button aria-busy={i} aria-label={h} {...p} data-testid="account-photo-button" disabled={i} onClick={b} type="button">{children}{j}</button>;
        e[18] = children;
        e[19] = i;
        e[20] = h;
        e[21] = j;
        e[22] = x;
    } else {
        x = e[22];
    }
    let g;
    if (e[23] === Symbol.for("react.memo_cache_sentinel")) {
        g = {
            className: "sand-1s85apg"
        };
        e[23] = g;
    } else {
        g = e[23];
    }
    let _;
    if (e[24] !== f) {
        _ = <input accept={accept} {...g} data-testid="account-photo-input" onChange={(k)=>{
            f(k);
        }} ref={mRef} tabIndex={-1} type="file"/>;
        e[24] = f;
        e[25] = _;
    } else {
        _ = e[25];
    }
    let w;
    if (e[26] !== _ || e[27] !== x) {
        w = <>{x}{_}</>;
        e[26] = _;
        e[27] = x;
        e[28] = w;
    } else {
        w = e[28];
    }
    return w;
}
const hs = "sand_profile_photo_edit";
const Ie = {
    name: {
        kB7OPa: "sand-9f619",
        kVQacm: "sand-b3r6kr",
        kMwMTN: "sand-tyxrsu",
        kg5iWk: "sand-lyipyv",
        khDVqt: "sand-uxw1ft",
        $$css: true
    },
    meta: {
        kB7OPa: "sand-9f619",
        k1xSpc: "sand-78zum5",
        kGNEyG: "sand-6s0dn4",
        kOIVth: "sand-167g77z",
        k7Eaqz: "sand-euugli",
        kMwMTN: "sand-1o0liin",
        $$css: true
    },
    actionWeakBorder: {
        kGVxlE: "sand-lkpa4b",
        $$css: true
    },
    teamLabel: {
        kMwMTN: "sand-169k319",
        $$css: true
    },
    teamName: {
        kMwMTN: "sand-tyxrsu",
        kVQacm: "sand-b3r6kr",
        kg5iWk: "sand-lyipyv",
        khDVqt: "sand-uxw1ft",
        k7Eaqz: "sand-euugli",
        $$css: true
    }
};
function UeComponent(s) {
    UeComponent.d = 1236;
    const e = c_1.c(6);
    const { className, testId, children } = s;
    let d;
    if (e[0] !== className) {
        d = r_2(className, "sand-9f619 sand-pmgbkh");
        e[0] = className;
        e[1] = d;
    } else {
        d = e[1];
    }
    let m;
    if (e[2] !== children || e[3] !== d || e[4] !== testId) {
        m = <Ee as="p" className={d} color="red" data-testid={testId} size="sm">{children}</Ee>;
        e[2] = children;
        e[3] = d;
        e[4] = testId;
        e[5] = m;
    } else {
        m = e[5];
    }
    return m;
}
function zn(authId) {
    if (authId == null) {
        return null;
    }
    const e = authId.indexOf("|");
    if (e <= 0 || e >= authId.length - 1) {
        return null;
    }
    return {
        subject: authId.slice(e + 1)
    };
}
function QeComponent(s) {
    QeComponent.d = 1235;
    const e = c_1.c(27);
    const { dataUrl, name, isSignedIn } = s;
    if (!isSignedIn) {
        let f;
        let h;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            f = {
                className: "sand-9f619 sand-3nfvp2 sand-6s0dn4 sand-l56j7k sand-2lah0s sand-187nhsf sand-n3w4p2 sand-4hv7ue sand-1y0btm7 sand-1atdlfd sand-149ho13 sand-b3r6kr sand-i07v4r sand-87ps6o sand-4b2ntj"
            };
            h = r_2("sand-account-card__avatar", f.className);
            e[0] = f;
            e[1] = h;
        } else {
            f = e[0];
            h = e[1];
        }
        let p;
        if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
            p = <W name="person" size={20}/>;
            e[2] = p;
        } else {
            p = e[2];
        }
        let b;
        if (e[3] !== f.style || e[4] !== h) {
            b = <span className={h} data-empty style={f.style}>{p}</span>;
            e[3] = f.style;
            e[4] = h;
            e[5] = b;
        } else {
            b = e[5];
        }
        return b;
    }
    if (dataUrl == null || dataUrl.length === 0) {
        let f;
        let h;
        if (e[6] === Symbol.for("react.memo_cache_sentinel")) {
            f = {
                className: "sand-9f619 sand-3nfvp2 sand-6s0dn4 sand-l56j7k sand-2lah0s sand-187nhsf sand-n3w4p2 sand-4hv7ue sand-1y0btm7 sand-1atdlfd sand-149ho13 sand-b3r6kr sand-87ps6o sand-1b8i4yy sand-1o0liin sand-19d36u7 sand-1rhlpx6"
            };
            h = r_2("sand-account-card__avatar", f.className);
            e[6] = f;
            e[7] = h;
        } else {
            f = e[6];
            h = e[7];
        }
        const style = f.style;
        let b;
        if (e[8] !== name) {
            b = ix(name);
            e[8] = name;
            e[9] = b;
        } else {
            b = e[9];
        }
        let v;
        if (e[10] !== f.style || e[11] !== h || e[12] !== b) {
            v = <span className={h} style={style}>{b}</span>;
            e[10] = f.style;
            e[11] = h;
            e[12] = b;
            e[13] = v;
        } else {
            v = e[13];
        }
        return v;
    }
    let d;
    let alt;
    let i;
    let o;
    let u;
    if (e[14] === Symbol.for("react.memo_cache_sentinel")) {
        const f = {
            className: "sand-9f619 sand-3nfvp2 sand-6s0dn4 sand-l56j7k sand-2lah0s sand-187nhsf sand-n3w4p2 sand-4hv7ue sand-1y0btm7 sand-1atdlfd sand-149ho13 sand-b3r6kr sand-i07v4r sand-87ps6o"
        };
        d = {
            className: "sand-9f619 sand-h8yej3 sand-5yr21d sand-l1xv1r"
        };
        o = r_2("sand-account-card__avatar", f.className);
        u = f.style;
        alt = "";
        i = r_2("sand-account-card__avatar-image", d.className);
        e[14] = d;
        e[15] = alt;
        e[16] = i;
        e[17] = o;
        e[18] = u;
    } else {
        d = e[14];
        alt = e[15];
        i = e[16];
        o = e[17];
        u = e[18];
    }
    let c;
    if (e[19] !== dataUrl || e[20] !== d.style || e[21] !== i) {
        c = <img alt={alt} className={i} src={dataUrl} style={d.style}/>;
        e[19] = dataUrl;
        e[20] = d.style;
        e[21] = i;
        e[22] = c;
    } else {
        c = e[22];
    }
    let r;
    if (e[23] !== o || e[24] !== u || e[25] !== c) {
        r = <span className={o} style={u}>{c}</span>;
        e[23] = o;
        e[24] = u;
        e[25] = c;
        e[26] = r;
    } else {
        r = e[26];
    }
    return r;
}
const Pn = {
    email: "sand-account-card__copy-email",
    "team-id": "sand-account-team__copy-id"
};
function ZeComponent(s) {
    ZeComponent.d = 1238;
    const e = c_1.c(12);
    const { ariaLabel, subject, value } = s;
    const [d, m] = aV();
    const i = Pn[subject];
    let o;
    if (e[0] !== i) {
        o = r_2(i, "sand-9f619 sand-3nfvp2 sand-6s0dn4 sand-l56j7k sand-2lah0s sand-w4jnvo sand-1qx5ct2 sand-1717udv sand-c342km sand-ng3xce sand-t9pb60 sand-jbqb8w sand-tfy4bk sand-1o0liin sand-n4ifyr sand-1ypdohk");
        e[0] = i;
        e[1] = o;
    } else {
        o = e[1];
    }
    let u;
    if (e[2] !== m || e[3] !== value) {
        u = ()=>m(value);
        e[2] = m;
        e[3] = value;
        e[4] = u;
    } else {
        u = e[4];
    }
    const c = d ? "check" : "copy";
    let r;
    if (e[5] !== c) {
        r = <W aria-hidden name={c} size={14}/>;
        e[5] = c;
        e[6] = r;
    } else {
        r = e[6];
    }
    let f;
    if (e[7] !== ariaLabel || e[8] !== o || e[9] !== u || e[10] !== r) {
        f = <button aria-label={ariaLabel} className={o} onClick={u} type="button">{r}</button>;
        e[7] = ariaLabel;
        e[8] = o;
        e[9] = u;
        e[10] = r;
        e[11] = f;
    } else {
        f = e[11];
    }
    return f;
}
function EsComponent(s) {
    EsComponent.d = 1239;
    const e = c_1.c(31);
    const { error, hasRemoveFailed, isBusy, onRemove, saved } = s;
    const { _: __1 } = u_1();
    const { _: __2 } = u_1();
    const u = cq_1();
    let c;
    if (e[0] !== __1 || e[1] !== error) {
        c = error == null ? null : iw(__1, error);
        e[0] = __1;
        e[1] = error;
        e[2] = c;
    } else {
        c = e[2];
    }
    const r = c;
    let f;
    if (e[3] !== __2 || e[4] !== r || e[5] !== hasRemoveFailed) {
        f = hasRemoveFailed ? __2({
            id: "8MU7+l"
        }) : r;
        e[3] = __2;
        e[4] = r;
        e[5] = hasRemoveFailed;
        e[6] = f;
    } else {
        f = e[6];
    }
    const h = f;
    let p;
    if (e[7] !== u || e[8] !== onRemove) {
        p = async (w)=>{
            if (await u(iz())) {
                onRemove(w);
            }
        };
        e[7] = u;
        e[8] = onRemove;
        e[9] = p;
    } else {
        p = e[9];
    }
    const b = p;
    let v;
    let y;
    let j;
    let x;
    if (e[10] !== __2 || e[11] !== b || e[12] !== isBusy || e[13] !== h || e[14] !== saved) {
        x = Symbol.for("react.early_return_sentinel");
        e: {
            const w = iy(saved) ? saved.accounts.filter((N)=>N.id !== saved.activeAccountId) : [];
            if (w.length === 0 && h == null) {
                x = null;
                break e;
            }
            if (e[19] === Symbol.for("react.memo_cache_sentinel")) {
                v = r_2("sand-account-saved", "sand-9f619 sand-78zum5 sand-dt5ytf sand-195vfkc sand-1iorvi4 sand-v54qhq sand-1a8lsjc sand-f7dkkf");
                e[19] = v;
            } else {
                v = e[19];
            }
            y = "saved-accounts";
            let k;
            if (e[20] !== __2 || e[21] !== b || e[22] !== isBusy) {
                k = (account)=>{
                    const target = account.email?.trim() || account.name?.trim();
                    return <Dt1 key={account.id} account={account} fallbackLabel={__2({
                        id: "XCrgCo"
                    })} size="settings" trailing=<Fe1 aria-label={__2(target ? {
                        id: "6f5U0u",
                        values: {
                            target
                        }
                    } : {
                        id: "Nmbj3M"
                    })} disabled={isBusy} onClick={()=>{
                        b(account.id);
                    }} sentiment="danger" size="sm" variant="secondary"><T id="t/YqKh"/></Fe1>/>;
                };
                e[20] = __2;
                e[21] = b;
                e[22] = isBusy;
                e[23] = k;
            } else {
                k = e[23];
            }
            j = w.map(k);
        }
        e[10] = __2;
        e[11] = b;
        e[12] = isBusy;
        e[13] = h;
        e[14] = saved;
        e[15] = v;
        e[16] = y;
        e[17] = j;
        e[18] = x;
    } else {
        v = e[15];
        y = e[16];
        j = e[17];
        x = e[18];
    }
    if (x !== Symbol.for("react.early_return_sentinel")) {
        return x;
    }
    let g;
    if (e[24] !== h) {
        g = h != null ? <UeComponent testId="account-error-notice">{h}</UeComponent> : null;
        e[24] = h;
        e[25] = g;
    } else {
        g = e[25];
    }
    let _;
    if (e[26] !== v || e[27] !== y || e[28] !== j || e[29] !== g) {
        _ = <div className={v} data-testid={y}>{j}{g}</div>;
        e[26] = v;
        e[27] = y;
        e[28] = j;
        e[29] = g;
        e[30] = _;
    } else {
        _ = e[30];
    }
    return _;
}
function AsComponent(s) {
    AsComponent.d = 1237;
    const e = c_1.c(110);
    const { auth } = s;
    ba_1("account");
    const { _: __1 } = u_1();
    const { _: __2 } = u_1();
    const d = fd();
    const m = cq_1();
    const i = cm();
    const o = iq();
    const u = b9(hs);
    const c = ir() != null;
    const r = b7();
    aU(r.savedAccounts.refresh);
    const { saved } = is();
    const h = it();
    const { status } = auth;
    const isSignedIn = status.kind === "logged-in";
    const v = iu(isSignedIn).filter(iv);
    let y;
    if (e[0] !== r || e[1] !== isSignedIn) {
        y = ()=>{
            if (isSignedIn) {
                iA(r);
            }
            return Ln;
        };
        e[0] = r;
        e[1] = isSignedIn;
        e[2] = y;
    } else {
        y = e[2];
    }
    i_1(y);
    const j = bT();
    let x;
    if (e[3] !== j || e[4] !== isSignedIn) {
        x = ()=>{
            if (isSignedIn) {
                j(hs);
            }
            return Rn;
        };
        e[3] = j;
        e[4] = isSignedIn;
        e[5] = x;
    } else {
        x = e[5];
    }
    i_1(x);
    const g = status.kind === "logging-in" || auth.isPending;
    let _;
    if (e[6] !== __1 || e[7] !== auth.error) {
        _ = auth.error == null ? null : iw(__1, auth.error);
        e[6] = __1;
        e[7] = auth.error;
        e[8] = _;
    } else {
        _ = e[8];
    }
    const w = _;
    const saved_1 = isSignedIn && saved != null && saved.accounts.length > 0 ? saved : null;
    const N = v.find((S)=>S.id === h) ?? null;
    const A = auth.flight.kind === "waiting-for-browser" && auth.flight.flow === "add-account";
    const I = auth.isPending || o.isPending;
    let C;
    if (e[9] !== __2) {
        C = __2({
            id: "c6o3E/"
        });
        e[9] = __2;
        e[10] = C;
    } else {
        C = e[10];
    }
    let Z = C;
    let variant = "primary";
    if (isSignedIn) {
        let S;
        if (e[11] !== __2) {
            S = __2({
                id: "bHYIks"
            });
            e[11] = __2;
            e[12] = S;
        } else {
            S = e[12];
        }
        Z = S;
        variant = "secondary";
    } else if (g) {
        let S;
        if (e[13] !== __2) {
            S = __2({
                id: "dEgA5A"
            });
            e[13] = __2;
            e[14] = S;
        } else {
            S = e[14];
        }
        Z = S;
        variant = "tertiary";
    }
    let q;
    if (e[15] !== m || e[16] !== auth || e[17] !== isSignedIn || e[18] !== g) {
        q = async ()=>{
            if (isSignedIn) {
                if (await m(iB)) {
                    await auth.logout();
                }
                return;
            }
            if (g) {
                await auth.cancelLoginFlight();
                return;
            }
            await auth.login();
        };
        e[15] = m;
        e[16] = auth;
        e[17] = isSignedIn;
        e[18] = g;
        e[19] = q;
    } else {
        q = e[19];
    }
    const z = q;
    let W;
    if (e[20] !== isSignedIn || e[21] !== status.authId) {
        W = isSignedIn ? zn(status.authId) : null;
        e[20] = isSignedIn;
        e[21] = status.authId;
        e[22] = W;
    } else {
        W = e[22];
    }
    const O = W;
    let R;
    let K;
    if (isSignedIn) {
        let S;
        if (e[23] !== d || e[24] !== status.displayName || e[25] !== status.email) {
            S = d.resolveAccountDisplay({
                displayName: status.displayName,
                email: status.email
            });
            e[23] = d;
            e[24] = status.displayName;
            e[25] = status.email;
            e[26] = S;
        } else {
            S = e[26];
        }
        const $ = S;
        R = $.name;
        const oe = $.secondary;
        const ne = oe ?? (O != null ? `#${O.subject}` : null);
        let ge;
        if (e[27] === Symbol.for("react.memo_cache_sentinel")) {
            ge = r_2("sand-account-card__id", "sand-9f619 sand-b3r6kr sand-euugli sand-lyipyv sand-uxw1ft");
            e[27] = ge;
        } else {
            ge = e[27];
        }
        let Se;
        if (e[28] !== __2 || e[29] !== ne) {
            Se = ne != null ? <Jt1 dir="ltr" text={ne} token={ne}/> : __2({
                id: "2xWX7o"
            });
            e[28] = __2;
            e[29] = ne;
            e[30] = Se;
        } else {
            Se = e[30];
        }
        let we;
        if (e[31] !== ge || e[32] !== Se) {
            we = <span className={ge}>{Se}</span>;
            e[31] = ge;
            e[32] = Se;
            e[33] = we;
        } else {
            we = e[33];
        }
        let Ne;
        if (e[34] !== __2 || e[35] !== oe) {
            Ne = oe != null ? <ZeComponent ariaLabel={__2({
                id: "/lLfdi"
            })} subject="email" value={oe}/> : null;
            e[34] = __2;
            e[35] = oe;
            e[36] = Ne;
        } else {
            Ne = e[36];
        }
        let qe;
        if (e[37] !== we || e[38] !== Ne) {
            qe = <>{we}{Ne}</>;
            e[37] = we;
            e[38] = Ne;
            e[39] = qe;
        } else {
            qe = e[39];
        }
        K = qe;
    } else if (g) {
        let S;
        if (e[40] !== __2) {
            S = __2({
                id: "5pYsL1"
            });
            e[40] = __2;
            e[41] = S;
        } else {
            S = e[41];
        }
        R = S;
        let $;
        if (e[42] !== __2) {
            $ = __2({
                id: "96E02j"
            });
            e[42] = __2;
            e[43] = $;
        } else {
            $ = e[43];
        }
        K = $;
    } else {
        let S;
        if (e[44] !== __2) {
            S = __2({
                id: "95+rix"
            });
            e[44] = __2;
            e[45] = S;
        } else {
            S = e[45];
        }
        R = S;
        let $;
        if (e[46] !== __2) {
            $ = __2({
                id: "2Jy5wv"
            });
            e[46] = __2;
            e[47] = $;
        } else {
            $ = e[47];
        }
        K = $;
    }
    let Y;
    let M;
    let ue;
    if (e[48] === Symbol.for("react.memo_cache_sentinel")) {
        Y = r_2("sand-account", "sand-9f619 sand-78zum5 sand-dt5ytf sand-1v2ro7d");
        M = dl("account");
        ue = r_2("sand-account-card", "sand-9f619 sand-78zum5 sand-1a02dak sand-6s0dn4 sand-1af02g3 sand-yinxu5 sand-v54qhq sand-1g2khh7 sand-f7dkkf");
        e[48] = Y;
        e[49] = M;
        e[50] = ue;
    } else {
        Y = e[48];
        M = e[49];
        ue = e[50];
    }
    const status_kind = status.kind;
    let me;
    if (e[51] !== auth.avatarDataUrl || e[52] !== auth.updateProfilePhoto || e[53] !== isSignedIn || e[54] !== u || e[55] !== R) {
        me = isSignedIn && u ? <IsComponent updateProfilePhoto={auth.updateProfilePhoto}><QeComponent dataUrl={auth.avatarDataUrl} isSignedIn name={R}/></IsComponent> : <QeComponent dataUrl={isSignedIn ? auth.avatarDataUrl : null} isSignedIn={isSignedIn} name={R}/>;
        e[51] = auth.avatarDataUrl;
        e[52] = auth.updateProfilePhoto;
        e[53] = isSignedIn;
        e[54] = u;
        e[55] = R;
        e[56] = me;
    } else {
        me = e[56];
    }
    let B;
    if (e[57] === Symbol.for("react.memo_cache_sentinel")) {
        B = r_2("sand-account-card__body", "sand-9f619 sand-78zum5 sand-1iyjqo2 sand-s83m0k sand-1r8uery sand-dt5ytf sand-xhr3t sand-17y4j5z");
        e[57] = B;
    } else {
        B = e[57];
    }
    let se;
    if (e[58] === Symbol.for("react.memo_cache_sentinel")) {
        se = r_2("sand-account-card__name", p_1(Ie.name, a_.body2, a$.medium).className);
        e[58] = se;
    } else {
        se = e[58];
    }
    let H;
    if (e[59] !== R) {
        H = <span className={se}>{R}</span>;
        e[59] = R;
        e[60] = H;
    } else {
        H = e[60];
    }
    let J;
    if (e[61] === Symbol.for("react.memo_cache_sentinel")) {
        J = r_2("sand-account-card__meta", p_1(Ie.meta, a_.body2).className);
        e[61] = J;
    } else {
        J = e[61];
    }
    let le;
    if (e[62] !== K) {
        le = <span className={J}>{K}</span>;
        e[62] = K;
        e[63] = le;
    } else {
        le = e[63];
    }
    let F;
    if (e[64] !== H || e[65] !== le) {
        F = <div aria-live="polite" className={B} role="status">{H}{le}</div>;
        e[64] = H;
        e[65] = le;
        e[66] = F;
    } else {
        F = e[66];
    }
    let V;
    if (e[67] === Symbol.for("react.memo_cache_sentinel")) {
        V = r_2("sand-account-card__actions", "sand-9f619 sand-78zum5 sand-1a02dak sand-6s0dn4 sand-13a6bvl sand-ehausa sand-vc5jky");
        e[67] = V;
    } else {
        V = e[67];
    }
    let E;
    if (e[68] !== i || e[69] !== auth || e[70] !== A || e[71] !== I || e[72] !== saved_1) {
        E = saved_1 != null ? <Fe1 disabled={I} onClick={A ? ()=>{
            auth.cancelLoginFlight();
        } : ()=>{
            i();
        }} size="md" style={Ie.actionWeakBorder} variant="secondary">{A ? <T id="dEgA5A"/> : <T id="MPPZ54"/>}</Fe1> : null;
        e[68] = i;
        e[69] = auth;
        e[70] = A;
        e[71] = I;
        e[72] = saved_1;
        e[73] = E;
    } else {
        E = e[73];
    }
    const X = !auth.isLoaded || isSignedIn && auth.isPending;
    let D;
    if (e[74] !== z) {
        D = ()=>{
            z();
        };
        e[74] = z;
        e[75] = D;
    } else {
        D = e[75];
    }
    const ie = isSignedIn ? Ie.actionWeakBorder : null;
    let G;
    if (e[76] !== Z || e[77] !== variant || e[78] !== X || e[79] !== D || e[80] !== ie) {
        G = <Fe1 className="sand-account-card__action" disabled={X} onClick={D} size="md" style={ie} variant={variant}>{Z}</Fe1>;
        e[76] = Z;
        e[77] = variant;
        e[78] = X;
        e[79] = D;
        e[80] = ie;
        e[81] = G;
    } else {
        G = e[81];
    }
    let te;
    if (e[82] !== E || e[83] !== G) {
        te = <div className={V}>{E}{G}</div>;
        e[82] = E;
        e[83] = G;
        e[84] = te;
    } else {
        te = e[84];
    }
    let de;
    if (e[85] !== status.kind || e[86] !== me || e[87] !== F || e[88] !== te) {
        de = <div className={ue} data-state={status_kind}>{me}{F}{te}</div>;
        e[85] = status.kind;
        e[86] = me;
        e[87] = F;
        e[88] = te;
        e[89] = de;
    } else {
        de = e[89];
    }
    let L;
    if (e[90] !== __2 || e[91] !== N || e[92] !== c) {
        L = N != null ? <div className="sand-9f619 sand-78zum5 sand-6s0dn4 sand-167g77z sand-1y1aw1k sand-v54qhq sand-wib8y2 sand-f7dkkf" data-testid="acting-team"><span {...p_1(Ie.teamLabel, a_.body2)}><T id="KM6m8p"/></span><span className="sand-9f619 sand-78zum5 sand-6s0dn4 sand-167g77z sand-euugli sand-1iyjqo2"><span {...p_1(Ie.teamName, a_.body2, a$.medium)}>{N.name}</span>{c ? <ZeComponent ariaLabel={__2({
            id: "30CLl6"
        })} subject="team-id" value={String(N.id)}/> : null}</span></div> : null;
        e[90] = __2;
        e[91] = N;
        e[92] = c;
        e[93] = L;
    } else {
        L = e[93];
    }
    let he;
    if (e[94] !== auth.error || e[95] !== I || e[96] !== o || e[97] !== saved_1) {
        he = saved_1 != null ? <EsComponent error={auth.error} hasRemoveFailed={o.failure != null} isBusy={I} onRemove={o.removeAccount} saved={saved_1}/> : null;
        e[94] = auth.error;
        e[95] = I;
        e[96] = o;
        e[97] = saved_1;
        e[98] = he;
    } else {
        he = e[98];
    }
    let pe;
    if (e[99] !== saved?.corrupt) {
        pe = saved?.corrupt === true ? <UeComponent className="sand-account__corrupt" testId="saved-accounts-corrupt"><T id="7kTh1F"/></UeComponent> : null;
        e[99] = saved?.corrupt;
        e[100] = pe;
    } else {
        pe = e[100];
    }
    let ve;
    if (e[101] !== w || e[102] !== saved_1) {
        ve = w != null && saved_1 == null ? <UeComponent className="sand-account__error">{w}</UeComponent> : null;
        e[101] = w;
        e[102] = saved_1;
        e[103] = ve;
    } else {
        ve = e[103];
    }
    let ke;
    if (e[104] !== de || e[105] !== L || e[106] !== he || e[107] !== pe || e[108] !== ve) {
        ke = <div className={Y} id={M}>{de}{L}{he}{pe}{ve}</div>;
        e[104] = de;
        e[105] = L;
        e[106] = he;
        e[107] = pe;
        e[108] = ve;
        e[109] = ke;
    } else {
        ke = e[109];
    }
    return ke;
}
function Rn() {}
function Ln() {}
function CsComponent() {
    CsComponent.d = 1316;
    const s = c_1.c(24);
    const { _ } = u_1();
    const t = iC();
    const l = cq_1();
    const { clear } = co();
    const [d, setD] = r_1.useState(false);
    if (!t) {
        return null;
    }
    let i;
    if (s[0] !== _ || s[1] !== l || s[2] !== clear) {
        i = async ()=>{
            if (await l({
                title: _({
                    id: "dei+5f"
                }),
                description: _({
                    id: "7O7nXp"
                }),
                confirmLabel: _({
                    id: "xCJdfg"
                }),
                pendingLabel: _({
                    id: "ubqkP9"
                }),
                cancelLabel: _({
                    id: "dEgA5A"
                }),
                destructive: true,
                perform: async ()=>{
                    await clear();
                    return null;
                }
            })) {
                setD(true);
            }
        };
        s[0] = _;
        s[1] = l;
        s[2] = clear;
        s[3] = i;
    } else {
        i = s[3];
    }
    const o = i;
    let u;
    if (s[4] !== _) {
        u = _({
            id: "8Ri8tN"
        });
        s[4] = _;
        s[5] = u;
    } else {
        u = s[5];
    }
    let c;
    if (s[6] === Symbol.for("react.memo_cache_sentinel")) {
        c = <TsComponent/>;
        s[6] = c;
    } else {
        c = s[6];
    }
    let r;
    if (s[7] !== _) {
        r = _({
            id: "FTN9h/"
        });
        s[7] = _;
        s[8] = r;
    } else {
        r = s[8];
    }
    let f;
    if (s[9] !== o) {
        f = ()=>{
            o();
        };
        s[9] = o;
        s[10] = f;
    } else {
        f = s[10];
    }
    let h;
    if (s[11] !== _ || s[12] !== d) {
        h = _(d ? {
            id: "FWxdTT"
        } : {
            id: "xCJdfg"
        });
        s[11] = _;
        s[12] = d;
        s[13] = h;
    } else {
        h = s[13];
    }
    let p;
    if (s[14] !== d || s[15] !== f || s[16] !== h) {
        p = <Fe1 disabled={d} onClick={f} size="md" style={a_.body2} type="button" variant="secondary">{h}</Fe1>;
        s[14] = d;
        s[15] = f;
        s[16] = h;
        s[17] = p;
    } else {
        p = s[17];
    }
    let b;
    if (s[18] !== r || s[19] !== p) {
        b = <Ae1 anchorId="team-bot-connector-preferences" description={r} variant="card">{p}</Ae1>;
        s[18] = r;
        s[19] = p;
        s[20] = b;
    } else {
        b = s[20];
    }
    let v;
    if (s[21] !== u || s[22] !== b) {
        v = <G_2 title={u}>{c}{b}</G_2>;
        s[21] = u;
        s[22] = b;
        s[23] = v;
    } else {
        v = s[23];
    }
    return v;
}
function TsComponent() {
    TsComponent.d = 1315;
    const s = c_1.c(16);
    const { _ } = u_1();
    const t = cq_1();
    const { isLinked, isLoading } = c_4();
    const { connect, disconnect, isPending } = a();
    let o;
    if (s[0] !== _ || s[1] !== t || s[2] !== disconnect) {
        o = async ()=>{
            await t({
                title: _({
                    id: "Gvan1Y"
                }),
                description: _({
                    id: "M/Y8bO"
                }),
                confirmLabel: _({
                    id: "5NcO7h"
                }),
                pendingLabel: _({
                    id: "s+7hxs"
                }),
                cancelLabel: _({
                    id: "dEgA5A"
                }),
                destructive: true,
                perform: async ()=>{
                    await disconnect("slack");
                    return null;
                }
            });
        };
        s[0] = _;
        s[1] = t;
        s[2] = disconnect;
        s[3] = o;
    } else {
        o = s[3];
    }
    const u = o;
    let c;
    if (s[4] !== _) {
        c = _({
            id: "bYJccz"
        });
        s[4] = _;
        s[5] = c;
    } else {
        c = s[5];
    }
    let r;
    if (s[6] !== _ || s[7] !== u || s[8] !== connect || s[9] !== isLinked || s[10] !== isLoading || s[11] !== isPending) {
        r = isLinked ? <Fe1 disabled={isPending} onClick={()=>{
            u();
        }} size="md" style={a_.body2} type="button" variant="secondary">{_({
            id: "5NcO7h"
        })}</Fe1> : <Fe1 disabled={isPending || isLoading} onClick={()=>{
            connect("slack");
        }} size="md" style={a_.body2} type="button" variant="secondary">{_({
            id: "+iht1R"
        })}</Fe1>;
        s[6] = _;
        s[7] = u;
        s[8] = connect;
        s[9] = isLinked;
        s[10] = isLoading;
        s[11] = isPending;
        s[12] = r;
    } else {
        r = s[12];
    }
    let f;
    if (s[13] !== c || s[14] !== r) {
        f = <Ae1 anchorId="team-bot-slack-link" description={c} variant="card">{r}</Ae1>;
        s[13] = c;
        s[14] = r;
        s[15] = f;
    } else {
        f = s[15];
    }
    return f;
}
function Ae(s, e) {
    if (e === "allow") {
        return s.allowInstructions;
    }
    return s.blockInstructions;
}
function Fe(s, behavior, t) {
    if (behavior === "allow") {
        return {
            ...s,
            allowInstructions: t
        };
    }
    return {
        ...s,
        blockInstructions: t
    };
}
function Dn(teamRules) {
    return [
        ...teamRules.allowInstructions.map((e)=>({
                behavior: "allow",
                text: e
            })),
        ...teamRules.blockInstructions.map((e)=>({
                behavior: "ask",
                text: e
            }))
    ];
}
function $n(instructions) {
    return [
        ...instructions.allowInstructions.map((e, t)=>({
                behavior: "allow",
                text: e,
                listIndex: t
            })),
        ...instructions.blockInstructions.map((e, t)=>({
                behavior: "ask",
                text: e,
                listIndex: t
            }))
    ];
}
function zs(instructions, e) {
    const t = Ae(instructions, e.behavior);
    return Fe(instructions, e.behavior, t.filter((l, n)=>n !== e.listIndex));
}
function bs(rule, e) {
    return rule.behavior === e.behavior && rule.text === e.text;
}
function qn(rule, instructions) {
    const l = Ae(instructions, rule.behavior).indexOf(rule.text);
    if (l === -1) {
        return null;
    }
    if (l === rule.listIndex) {
        return rule;
    }
    return {
        behavior: rule.behavior,
        text: rule.text,
        listIndex: l
    };
}
function Ge(s) {
    return s.length >= SAND_AUTO_REVIEW_INSTRUCTION_MAX_ENTRIES;
}
function Oe({ instructions, text, behavior, editing }) {
    const d = Ae(instructions, behavior);
    const m = editing != null && editing.behavior === behavior;
    if (d.some((c, r)=>c === text && !(m && r === editing.listIndex))) {
        return null;
    }
    if (editing == null) {
        if (Ge(d)) {
            return null;
        }
        return Fe(instructions, behavior, [
            ...d,
            text
        ]);
    }
    if (m) {
        const c = [
            ...d
        ];
        c[editing.listIndex] = text;
        return Fe(instructions, behavior, c);
    }
    if (Ge(d)) {
        return null;
    }
    const o = zs(instructions, editing);
    const u = Ae(o, behavior);
    return Fe(o, behavior, [
        ...u,
        text
    ]);
}
const We = {
    allow: {
        id: "H+RaRS"
    },
    ask: {
        id: "4YjKLA"
    }
};
const On = [
    {
        value: "allow",
        label: We.allow
    },
    {
        value: "ask",
        label: We.ask
    }
];
const Ye = {
    ruleLock: {
        kB7OPa: "sand-9f619",
        k1xSpc: "sand-3nfvp2",
        kGNEyG: "sand-6s0dn4",
        kjj79g: "sand-l56j7k",
        kmuXW: "sand-2lah0s",
        kzqmXN: "sand-w4jnvo",
        kZKoxP: "sand-1qx5ct2",
        kaIpWk: "sand-1kogg8i",
        kMwMTN: "sand-1o0liin",
        kkrTdU: "sand-t0e3qv",
        $$css: true
    },
    composerButton: {
        kB7OPa: "sand-9f619",
        kZKoxP: "sand-1fgtraw",
        $$css: true
    }
};
function JeComponent(s) {
    JeComponent.d = 1245;
    const e = c_1.c(68);
    const { draft, behavior, disabled, canSubmit, showEntryLimit, submitLabel, submitAriaLabel, draftAriaLabel, behaviorAriaLabel, placeholder, autoFocus, onCancel, onDraftChange, onBehaviorChange, onSubmit } = s;
    const autoFocus_1 = autoFocus === undefined ? false : autoFocus;
    const { i18n, _: __1 } = u_1();
    const g = r_1.useId();
    let _;
    if (e[0] !== onDraftChange) {
        _ = (L)=>{
            const value = L.target.value;
            onDraftChange(value.length <= iF ? value : value.slice(0, iF));
        };
        e[0] = onDraftChange;
        e[1] = _;
    } else {
        _ = e[1];
    }
    const w = _;
    let k;
    if (e[2] !== behavior || e[3] !== draft || e[4] !== onBehaviorChange || e[5] !== onCancel || e[6] !== onDraftChange || e[7] !== onSubmit) {
        k = (L)=>{
            if (L.key === "Enter" && (L.metaKey || L.ctrlKey)) {
                L.preventDefault();
                onSubmit();
            }
            L.key === "Escape" && (onCancel != null ? (L.preventDefault(), onCancel()) : (draft !== "" || behavior !== "allow") && (L.preventDefault(), onDraftChange(""), onBehaviorChange("allow")));
        };
        e[2] = behavior;
        e[3] = draft;
        e[4] = onBehaviorChange;
        e[5] = onCancel;
        e[6] = onDraftChange;
        e[7] = onSubmit;
        e[8] = k;
    } else {
        k = e[8];
    }
    const onKeyDown_1 = k;
    let A;
    if (e[9] === Symbol.for("react.memo_cache_sentinel")) {
        A = {
            className: "sand-9f619 sand-78zum5 sand-dt5ytf sand-ehausa sand-h8yej3"
        };
        e[9] = A;
    } else {
        A = e[9];
    }
    const A_className = A.className;
    let C;
    if (e[10] === Symbol.for("react.memo_cache_sentinel")) {
        C = {
            className: "sand-9f619 sand-78zum5 sand-dt5ytf sand-11twubx sand-h8yej3"
        };
        e[10] = C;
    } else {
        C = e[10];
    }
    const C_className = C.className;
    let P;
    if (e[11] === Symbol.for("react.memo_cache_sentinel")) {
        P = {
            className: "sand-dj266r sand-14z9mp sand-at24cr sand-1lziwak"
        };
        e[11] = P;
    } else {
        P = e[11];
    }
    let q;
    if (e[12] === Symbol.for("react.memo_cache_sentinel")) {
        q = <Ee as="span" color="primary" size="md"><T id="8X0v3P"/></Ee>;
        e[12] = q;
    } else {
        q = e[12];
    }
    let z;
    if (e[13] !== g) {
        z = <label className={P.className} htmlFor={g}>{q}</label>;
        e[13] = g;
        e[14] = z;
    } else {
        z = e[14];
    }
    let W;
    if (e[15] === Symbol.for("react.memo_cache_sentinel")) {
        W = {
            className: "sand-9f619 sand-h8yej3 sand-5f5z56 sand-u97haq sand-lrnmfh sand-uve7l6 sand-1fg0g13 sand-1rgtt3y sand-1tajz9i sand-mkeg23 sand-1y0btm7 sand-qz0629 sand-1043rbw sand-13l7odt sand-1wd3ewq sand-jb2p0i sand-11wthnw sand-frs9s4 sand-tt52l0 sand-1odjw0f sand-1t137rt sand-ltfok3"
        };
        e[15] = W;
    } else {
        W = e[15];
    }
    let O;
    if (e[16] !== autoFocus_1 || e[17] !== disabled || e[18] !== draft || e[19] !== draftAriaLabel || e[20] !== w || e[21] !== onKeyDown_1 || e[22] !== placeholder || e[23] !== g) {
        O = <textarea aria-label={draftAriaLabel} autoFocus={autoFocus_1} className={W.className} disabled={disabled} id={g} onChange={w} onKeyDown={onKeyDown_1} placeholder={placeholder} rows={1} value={draft}/>;
        e[16] = autoFocus_1;
        e[17] = disabled;
        e[18] = draft;
        e[19] = draftAriaLabel;
        e[20] = w;
        e[21] = onKeyDown_1;
        e[22] = placeholder;
        e[23] = g;
        e[24] = O;
    } else {
        O = e[24];
    }
    let R;
    if (e[25] !== z || e[26] !== O) {
        R = <div className={C_className}>{z}{O}</div>;
        e[25] = z;
        e[26] = O;
        e[27] = R;
    } else {
        R = e[27];
    }
    let K;
    if (e[28] === Symbol.for("react.memo_cache_sentinel")) {
        K = {
            className: "sand-9f619 sand-78zum5 sand-dt5ytf sand-11twubx sand-h8yej3"
        };
        e[28] = K;
    } else {
        K = e[28];
    }
    const K_className = K.className;
    let M;
    if (e[29] === Symbol.for("react.memo_cache_sentinel")) {
        M = {
            className: "sand-dj266r sand-14z9mp sand-at24cr sand-1lziwak"
        };
        e[29] = M;
    } else {
        M = e[29];
    }
    let ue;
    let be;
    if (e[30] === Symbol.for("react.memo_cache_sentinel")) {
        ue = <Ee as="span" className={M.className} color="primary" size="md"><T id="nFnkzP"/></Ee>;
        be = {
            className: "sand-9f619 sand-78zum5 sand-6s0dn4 sand-1qughib sand-ehausa"
        };
        e[30] = ue;
        e[31] = be;
    } else {
        ue = e[30];
        be = e[31];
    }
    const be_className = be.className;
    let B;
    if (e[32] !== onBehaviorChange) {
        B = (L)=>{
            if (L != null) {
                onBehaviorChange(L);
            }
        };
        e[32] = onBehaviorChange;
        e[33] = B;
    } else {
        B = e[33];
    }
    let se;
    if (e[34] !== i18n) {
        se = On.map((L)=>({
                ...L,
                label: i18n._(L.label)
            }));
        e[34] = i18n;
        e[35] = se;
    } else {
        se = e[35];
    }
    let H;
    if (e[36] !== behavior || e[37] !== behaviorAriaLabel || e[38] !== disabled || e[39] !== B || e[40] !== se) {
        H = <E_1 aria-label={behaviorAriaLabel} disabled={disabled} onValueChange={B} options={se} placement="bottom-start" size="lg" value={behavior} variant="ghost"/>;
        e[36] = behavior;
        e[37] = behaviorAriaLabel;
        e[38] = disabled;
        e[39] = B;
        e[40] = se;
        e[41] = H;
    } else {
        H = e[41];
    }
    let J;
    if (e[42] === Symbol.for("react.memo_cache_sentinel")) {
        J = {
            className: "sand-9f619 sand-78zum5 sand-6s0dn4 sand-13a6bvl sand-2lah0s sand-ehausa sand-euugli"
        };
        e[42] = J;
    } else {
        J = e[42];
    }
    const J_className = J.className;
    let F;
    if (e[43] !== __1 || e[44] !== showEntryLimit) {
        F = showEntryLimit ? <span className="sand-y5h43f sand-wn7fz2 sand-uxw1ft sand-8bfsz3">{__1({
            id: "/B44yX",
            values: {
                SAND_AUTO_REVIEW_INSTRUCTION_MAX_ENTRIES
            }
        })}</span> : null;
        e[43] = __1;
        e[44] = showEntryLimit;
        e[45] = F;
    } else {
        F = e[45];
    }
    let V;
    if (e[46] === Symbol.for("react.memo_cache_sentinel")) {
        V = {
            className: "sand-9f619 sand-78zum5 sand-6s0dn4 sand-2lah0s sand-ehausa"
        };
        e[46] = V;
    } else {
        V = e[46];
    }
    let E;
    if (e[47] !== __1 || e[48] !== disabled || e[49] !== onCancel) {
        E = onCancel != null ? <Fe1 aria-label={__1({
            id: "1tYiQU"
        })} disabled={disabled} onClick={onCancel} size="md" style={Ye.composerButton} variant="secondary"><T id="dEgA5A"/></Fe1> : null;
        e[47] = __1;
        e[48] = disabled;
        e[49] = onCancel;
        e[50] = E;
    } else {
        E = e[50];
    }
    const X = !canSubmit;
    let D;
    if (e[51] !== onSubmit || e[52] !== submitAriaLabel || e[53] !== submitLabel || e[54] !== X) {
        D = <Fe1 aria-label={submitAriaLabel} disabled={X} onClick={onSubmit} size="md" style={Ye.composerButton} variant="primary">{submitLabel}</Fe1>;
        e[51] = onSubmit;
        e[52] = submitAriaLabel;
        e[53] = submitLabel;
        e[54] = X;
        e[55] = D;
    } else {
        D = e[55];
    }
    let ie;
    if (e[56] !== E || e[57] !== D) {
        ie = <div className={V.className}>{E}{D}</div>;
        e[56] = E;
        e[57] = D;
        e[58] = ie;
    } else {
        ie = e[58];
    }
    let G;
    if (e[59] !== F || e[60] !== ie) {
        G = <div className={J_className}>{F}{ie}</div>;
        e[59] = F;
        e[60] = ie;
        e[61] = G;
    } else {
        G = e[61];
    }
    let te;
    if (e[62] !== H || e[63] !== G) {
        te = <div className={K_className}>{ue}<div className={be_className}>{H}{G}</div></div>;
        e[62] = H;
        e[63] = G;
        e[64] = te;
    } else {
        te = e[64];
    }
    let de;
    if (e[65] !== R || e[66] !== te) {
        de = <div className={A_className}>{R}{te}</div>;
        e[65] = R;
        e[66] = te;
        e[67] = de;
    } else {
        de = e[67];
    }
    return de;
}
function PsComponent(s) {
    PsComponent.d = 1244;
    const e = c_1.c(8);
    const { text } = s;
    const [l, setL] = r_1.useState(false);
    let d;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        d = ()=>(r)=>{
                if (r == null) {
                    return;
                }
                const f = ()=>setL(r.scrollWidth > r.clientWidth);
                f();
                const h = new ResizeObserver(f);
                h.observe(r);
                return ()=>h.disconnect();
            };
        e[0] = d;
    } else {
        d = e[0];
    }
    const [ref] = r_1.useState(d);
    const i = !l;
    let o;
    if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
        o = {
            className: "sand-9f619 sand-euugli sand-dj266r sand-14z9mp sand-at24cr sand-1lziwak sand-11wthnw sand-1xfvgam sand-1wd3ewq sand-b3r6kr sand-lyipyv sand-uxw1ft"
        };
        e[1] = o;
    } else {
        o = e[1];
    }
    let u;
    if (e[2] !== text) {
        u = <p {...o} ref={ref} role="cell">{text}</p>;
        e[2] = text;
        e[3] = u;
    } else {
        u = e[3];
    }
    let c;
    if (e[4] !== i || e[5] !== u || e[6] !== text) {
        c = <Ys1 content={text} disabled={i}>{u}</Ys1>;
        e[4] = i;
        e[5] = u;
        e[6] = text;
        e[7] = c;
    } else {
        c = e[7];
    }
    return c;
}
function Es1Component(s) {
    Es1Component.d = 1246;
    const e = c_1.c(14);
    const { text, behaviorLabel, actions, locked } = s;
    const m = locked === undefined ? false : locked;
    let i;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        i = r_2("sand-auto-review-rule", "sand-9f619 sand-rvj5dj sand-1pam42o sand-6s0dn4 sand-tqikln sand-1yrsyyn sand-19bzwdx sand-10b6aqq sand-v853mj sand-1e1y6u3 sand-jbqb8w sand-1s9i74l");
        e[0] = i;
    } else {
        i = e[0];
    }
    let o;
    if (e[1] !== m || e[2] !== text) {
        o = m ? <PsComponent text={text}/> : <p className="sand-9f619 sand-euugli sand-dj266r sand-14z9mp sand-at24cr sand-1lziwak sand-11wthnw sand-1xfvgam sand-1wd3ewq sand-b3r6kr sand-lyipyv sand-uxw1ft" role="cell" title={text}>{text}</p>;
        e[1] = m;
        e[2] = text;
        e[3] = o;
    } else {
        o = e[3];
    }
    let u;
    if (e[4] === Symbol.for("react.memo_cache_sentinel")) {
        u = {
            className: "sand-9f619 sand-euugli sand-dj266r sand-14z9mp sand-at24cr sand-1lziwak sand-11wthnw sand-1xfvgam sand-1wd3ewq sand-b3r6kr sand-lyipyv sand-uxw1ft"
        };
        e[4] = u;
    } else {
        u = e[4];
    }
    let c;
    if (e[5] !== behaviorLabel) {
        c = <p className={u.className} role="cell">{behaviorLabel}</p>;
        e[5] = behaviorLabel;
        e[6] = c;
    } else {
        c = e[6];
    }
    let r;
    if (e[7] === Symbol.for("react.memo_cache_sentinel")) {
        r = {
            className: "sand-9f619 sand-78zum5 sand-2lah0s sand-13a6bvl sand-6s0dn4 sand-17d4w8g"
        };
        e[7] = r;
    } else {
        r = e[7];
    }
    let f;
    if (e[8] !== actions) {
        f = <div className={r.className} role="cell">{actions}</div>;
        e[8] = actions;
        e[9] = f;
    } else {
        f = e[9];
    }
    let h;
    if (e[10] !== o || e[11] !== c || e[12] !== f) {
        h = <div className={i} role="row">{o}{c}{f}</div>;
        e[10] = o;
        e[11] = c;
        e[12] = f;
        e[13] = h;
    } else {
        h = e[13];
    }
    return h;
}
function RsComponent(s) {
    RsComponent.d = 1247;
    const e = c_1.c(50);
    const { instructions, teamRules, disabled, onChange } = s;
    const { i18n, _: __1 } = u_1();
    const [o, setO] = r_1.useState("");
    const [c, setC] = r_1.useState("allow");
    const [f, setF] = r_1.useState(null);
    let p;
    if (e[0] !== __1 || e[1] !== disabled || e[2] !== o || e[3] !== c || e[4] !== i18n || e[5] !== f || e[6] !== instructions || e[7] !== onChange || e[8] !== teamRules) {
        const b = f == null ? null : qn(f.rule, instructions);
        if (f != null && b == null) {
            setF(null);
        }
        const v = f != null && b != null ? {
            ...f,
            rule: b
        } : null;
        const y = Dn(teamRules);
        const j = $n(instructions);
        const x = y.length;
        let g;
        if (e[10] !== __1) {
            g = __1({
                id: "aoONzQ"
            });
            e[10] = __1;
            e[11] = g;
        } else {
            g = e[11];
        }
        const content = g;
        const w = o.trim();
        let k;
        if (e[12] !== c || e[13] !== instructions) {
            const E = Ae(instructions, c);
            k = Ge(E);
            e[12] = c;
            e[13] = instructions;
            e[14] = k;
        } else {
            k = e[14];
        }
        const showEntryLimit_1 = k;
        const canSubmit_1 = !disabled && v == null && w.length > 0 && Oe({
            instructions,
            text: w,
            behavior: c,
            editing: null
        }) != null;
        const showEntryLimit = v != null && v.rule.behavior !== v.draftBehavior && Ge(Ae(instructions, v.draftBehavior));
        let C;
        if (e[15] === Symbol.for("react.memo_cache_sentinel")) {
            C = ()=>{
                setO("");
                setC("allow");
            };
            e[15] = C;
        } else {
            C = e[15];
        }
        const Z = C;
        let P;
        if (e[16] !== canSubmit_1 || e[17] !== c || e[18] !== instructions || e[19] !== onChange || e[20] !== w) {
            P = ()=>{
                if (!canSubmit_1) {
                    return;
                }
                const E = Oe({
                    instructions,
                    text: w,
                    behavior: c,
                    editing: null
                });
                if (E != null) {
                    onChange(E);
                    Z();
                }
            };
            e[16] = canSubmit_1;
            e[17] = c;
            e[18] = instructions;
            e[19] = onChange;
            e[20] = w;
            e[21] = P;
        } else {
            P = e[21];
        }
        const onSubmit_1 = P;
        let z;
        if (e[22] === Symbol.for("react.memo_cache_sentinel")) {
            z = (E)=>{
                setF({
                    rule: E,
                    draftText: E.text,
                    draftBehavior: E.behavior
                });
            };
            e[22] = z;
        } else {
            z = e[22];
        }
        const W = z;
        let O;
        if (e[23] === Symbol.for("react.memo_cache_sentinel")) {
            O = ()=>{
                setF(null);
            };
            e[23] = O;
        } else {
            O = e[23];
        }
        const onCancel = O;
        const onSubmit = ()=>{
            if (v == null || disabled) {
                return;
            }
            const E = v.draftText.trim();
            if (E.length === 0) {
                return;
            }
            const X = Oe({
                instructions,
                text: E,
                behavior: v.draftBehavior,
                editing: v.rule
            });
            if (X != null) {
                onChange(X);
                setF(null);
            }
        };
        let Y;
        if (e[24] !== instructions || e[25] !== onChange) {
            Y = (E)=>{
                onChange(zs(instructions, E));
                setF((X)=>{
                    if (X == null || bs(X.rule, E)) {
                        return null;
                    }
                    return X;
                });
            };
            e[24] = instructions;
            e[25] = onChange;
            e[26] = Y;
        } else {
            Y = e[26];
        }
        const M = Y;
        const canSubmit = v != null && !disabled && v.draftText.trim().length > 0 && Oe({
            instructions,
            text: v.draftText.trim(),
            behavior: v.draftBehavior,
            editing: v.rule
        }) != null;
        let be;
        if (e[27] === Symbol.for("react.memo_cache_sentinel")) {
            be = {
                className: "sand-9f619 sand-78zum5 sand-dt5ytf sand-3qzy4x sand-h8yej3"
            };
            e[27] = be;
        } else {
            be = e[27];
        }
        const className = be.className;
        let behaviorAriaLabel;
        if (e[28] !== __1) {
            behaviorAriaLabel = __1({
                id: "j74EnZ"
            });
            e[28] = __1;
            e[29] = behaviorAriaLabel;
        } else {
            behaviorAriaLabel = e[29];
        }
        const se = disabled || v != null;
        let draftAriaLabel;
        if (e[30] !== __1) {
            draftAriaLabel = __1({
                id: "oUa4Ur"
            });
            e[30] = __1;
            e[31] = draftAriaLabel;
        } else {
            draftAriaLabel = e[31];
        }
        let placeholder;
        if (e[32] !== __1) {
            placeholder = __1({
                id: "TWBOU+"
            });
            e[32] = __1;
            e[33] = placeholder;
        } else {
            placeholder = e[33];
        }
        let submitAriaLabel;
        if (e[34] !== __1) {
            submitAriaLabel = __1({
                id: "O8tK4v"
            });
            e[34] = __1;
            e[35] = submitAriaLabel;
        } else {
            submitAriaLabel = e[35];
        }
        let submitLabel;
        if (e[36] !== __1) {
            submitLabel = __1({
                id: "bmQLn5"
            });
            e[36] = __1;
            e[37] = submitLabel;
        } else {
            submitLabel = e[37];
        }
        let V;
        if (e[38] !== onSubmit_1 || e[39] !== canSubmit_1 || e[40] !== o || e[41] !== c || e[42] !== showEntryLimit_1 || e[43] !== behaviorAriaLabel || e[44] !== se || e[45] !== draftAriaLabel || e[46] !== placeholder || e[47] !== submitAriaLabel || e[48] !== submitLabel) {
            V = <JeComponent behavior={c} behaviorAriaLabel={behaviorAriaLabel} canSubmit={canSubmit_1} disabled={se} draft={o} draftAriaLabel={draftAriaLabel} onBehaviorChange={setC} onDraftChange={setO} onSubmit={onSubmit_1} placeholder={placeholder} showEntryLimit={showEntryLimit_1} submitAriaLabel={submitAriaLabel} submitLabel={submitLabel}/>;
            e[38] = onSubmit_1;
            e[39] = canSubmit_1;
            e[40] = o;
            e[41] = c;
            e[42] = showEntryLimit_1;
            e[43] = behaviorAriaLabel;
            e[44] = se;
            e[45] = draftAriaLabel;
            e[46] = placeholder;
            e[47] = submitAriaLabel;
            e[48] = submitLabel;
            e[49] = V;
        } else {
            V = e[49];
        }
        p = <div className={className}>{V}{y.length > 0 || j.length > 0 ? <div aria-label={__1({
            id: "7KwN2p"
        })} className={r_2("sand-auto-review-rules-table", "sand-9f619 sand-78zum5 sand-dt5ytf sand-h8yej3 sand-exx8yu sand-196pc8s sand-1xlntvz sand-22095l sand-4hv7ue sand-1y0btm7 sand-fnq37j sand-1043rbw")} role="table"><div className="sand-9f619 sand-rvj5dj sand-1pam42o sand-6s0dn4 sand-tqikln sand-1t8xvyj sand-19bzwdx sand-2lprc sand-v853mj" role="row"><div className="sand-1wm8ruf sand-wn7fz2 sand-4b2ntj" role="columnheader"><T id="bwRvnp"/></div><div className="sand-1wm8ruf sand-wn7fz2 sand-4b2ntj" role="columnheader"><T id="tK9OCv"/></div><div aria-hidden/></div><div className="sand-9f619 sand-78zum5 sand-dt5ytf sand-uve7l6" role="rowgroup">{y.map((E, X)=><Es1Component key={`team:${E.behavior}:${X}:${E.text}`} actions=<Ys1 content={content}><span aria-label={content} role="img" tabIndex={0} {...p_1(Ye.ruleLock, aK.controlRing)}><I name="lock-locked" size="sm"/></span></Ys1> behaviorLabel={i18n._(We[E.behavior])} locked text={E.text}/>)}{j.map((E, X)=>{
            const D = x + X;
            if (v != null && bs(v.rule, E) && v != null) {
                return <div key={`${E.behavior}:${E.listIndex}:${E.text}`} className={r_2("sand-auto-review-rule", "sand-9f619 sand-1t8xvyj sand-t1q3vd sand-usxwy5 sand-8fiw5y sand-4hv7ue sand-1y0btm7 sand-fnq37j sand-1e1y6u3")} role="row"><JeComponent autoFocus behavior={v.draftBehavior} behaviorAriaLabel={__1({
                    id: "Dreb42",
                    values: {
                        0: D + 1
                    }
                })} canSubmit={canSubmit} disabled={disabled} draft={v.draftText} draftAriaLabel={__1({
                    id: "iqx6+R",
                    values: {
                        0: D + 1
                    }
                })} onBehaviorChange={(draftBehavior)=>{
                    setF({
                        ...v,
                        draftBehavior
                    });
                }} onCancel={onCancel} onDraftChange={(draftText)=>{
                    setF({
                        ...v,
                        draftText
                    });
                }} onSubmit={onSubmit} placeholder={__1({
                    id: "TWBOU+"
                })} showEntryLimit={showEntryLimit} submitAriaLabel={__1({
                    id: "c+k1s0",
                    values: {
                        0: D + 1
                    }
                })} submitLabel={__1({
                    id: "LvKmBo"
                })}/></div>;
            }
            return <Es1Component key={`${E.behavior}:${E.listIndex}:${E.text}`} actions=<><Rs1 aria-label={__1({
                id: "23JPFP",
                values: {
                    0: D + 1
                }
            })} disabled={disabled || v != null} icon="pencil-square" onClick={()=>W(E)} shape="square" size="xs" variant="ghost"/><Rs1 aria-label={__1({
                id: "NcUUHs",
                values: {
                    0: D + 1
                }
            })} disabled={disabled} icon="trash" onClick={()=>M(E)} shape="square" size="xs" variant="ghost"/></> behaviorLabel={i18n._(We[E.behavior])} text={E.text}/>;
        })}</div></div> : null}</div>;
        e[0] = __1;
        e[1] = disabled;
        e[2] = o;
        e[3] = c;
        e[4] = i18n;
        e[5] = f;
        e[6] = instructions;
        e[7] = onChange;
        e[8] = teamRules;
        e[9] = p;
    } else {
        p = e[9];
    }
    return p;
}
function LsComponent() {
    LsComponent.d = 1242;
    const s = c_1.c(1);
    let e;
    if (s[0] === Symbol.for("react.memo_cache_sentinel")) {
        e = <DsComponent/>;
        s[0] = e;
    } else {
        e = s[0];
    }
    return e;
}
function DsComponent() {
    DsComponent.d = 1243;
    const s = c_1.c(33);
    ba_1("auto-review-rules");
    const { _: __1 } = u_1();
    const t = b7();
    aU(t.autoReviewInstructions.load);
    const instructions = ew();
    const { setInstructions, isPending, failure } = iE();
    aU(t.teamPolicy.load);
    const i = c_3();
    const o = instructions.isEnabled || i.lock === "held";
    const u = i.rules.allowInstructions.length > 0 || i.rules.blockInstructions.length > 0;
    let c;
    if (s[0] !== setInstructions) {
        c = (w)=>{
            setInstructions(w);
        };
        s[0] = setInstructions;
        s[1] = c;
    } else {
        c = s[1];
    }
    const r = c;
    let f;
    if (s[2] === Symbol.for("react.memo_cache_sentinel")) {
        f = dl("auto-review-rules");
        s[2] = f;
    } else {
        f = s[2];
    }
    let h;
    if (s[3] !== __1 || s[4] !== failure) {
        h = failure == null ? __1({
            id: "De8ppO"
        }) : __1({
            id: "QqKsGg"
        });
        s[3] = __1;
        s[4] = failure;
        s[5] = h;
    } else {
        h = s[5];
    }
    let p;
    if (s[6] !== __1 || s[7] !== i.lock) {
        p = i.lock === "held" ? {
            heldReason: __1({
                id: "HrUSV3"
            })
        } : {};
        s[6] = __1;
        s[7] = i.lock;
        s[8] = p;
    } else {
        p = s[8];
    }
    const b = isPending || i.lock === "unknown";
    let v;
    if (s[9] !== __1) {
        v = __1({
            id: "RkLueX"
        });
        s[9] = __1;
        s[10] = v;
    } else {
        v = s[10];
    }
    let y;
    if (s[11] !== instructions || s[12] !== r) {
        y = ()=>r({
                ...instructions,
                isEnabled: !instructions.isEnabled
            });
        s[11] = instructions;
        s[12] = r;
        s[13] = y;
    } else {
        y = s[13];
    }
    let j;
    if (s[14] !== o || s[15] !== p || s[16] !== b || s[17] !== v || s[18] !== y) {
        j = <H {...p} isChecked={o} isDisabled={b} label={v} onToggle={y} size="md"/>;
        s[14] = o;
        s[15] = p;
        s[16] = b;
        s[17] = v;
        s[18] = y;
        s[19] = j;
    } else {
        j = s[19];
    }
    let x;
    if (s[20] !== h || s[21] !== j) {
        x = <Ae1 anchorId="auto-review" description={h} variant="card">{j}</Ae1>;
        s[20] = h;
        s[21] = j;
        s[22] = x;
    } else {
        x = s[22];
    }
    let g;
    if (s[23] !== u || s[24] !== instructions || s[25] !== o || s[26] !== isPending || s[27] !== r || s[28] !== i.rules) {
        g = o ? <div className="sand-9f619 sand-1n2onr6 sand-78zum5 sand-dt5ytf sand-1qqbgdy sand-h8yej3 sand-1t8xvyj sand-1n9uuka sand-usxwy5 sand-cssynl"><div className="sand-9f619 sand-78zum5 sand-dt5ytf sand-137clkk"><Ee as="h3" color="primary" size="md"><T id="LgRXPe"/></Ee><S_1><T id="NFRGrQ"/></S_1></div><RsComponent disabled={isPending} instructions={instructions} onChange={r} teamRules={i.rules}/><Ee as="span" color="tertiary" size="md">{u ? <T id="jFU9Pu"/> : <T id="n9YiIv"/>}</Ee></div> : null;
        s[23] = u;
        s[24] = instructions;
        s[25] = o;
        s[26] = isPending;
        s[27] = r;
        s[28] = i.rules;
        s[29] = g;
    } else {
        g = s[29];
    }
    let _;
    if (s[30] !== x || s[31] !== g) {
        _ = <div id={f}>{x}{g}</div>;
        s[30] = x;
        s[31] = g;
        s[32] = _;
    } else {
        _ = s[32];
    }
    return _;
}
const Mn = {
    kVAEAm: "sand-1n2onr6",
    kZKoxP: "sand-16ye13r",
    kmuXW: "sand-2lah0s",
    $$css: true
};
const Bn = {
    kVAEAm: "sand-10l6tqk",
    k87sOh: "sand-5mnzd7",
    kLqNvP: "sand-rr41r3",
    kt4wiu: "sand-1f889gz",
    kzqmXN: "sand-14atkfc",
    kZKoxP: "sand-1gnnpzl",
    $$css: true
};
const heightPx = 30;
const qs = 2;
const rowPitchPx = heightPx + qs;
const leadingOffsetPx = 6;
const initialViewportPx = 480;
const xe = {
    panel: {
        kLKAdn: "sand-exx8yu",
        kwRFfy: "sand-yri2b",
        kGO01o: "sand-18d9i69",
        kZCmMZ: "sand-1c1uobl",
        kVQacm: "sand-b3r6kr",
        kWkggS: "sand-10e981r",
        kEafiO: "sand-1hc762m",
        kLZC3w: "sand-s351rv",
        ke9TFa: "sand-qm0940",
        kBCPoo: "sand-bz7umk",
        kt9PQ7: "sand-1hkp6id",
        kL6WhQ: "sand-1kp61ed",
        k2ei4v: "sand-1sd92yl",
        kGJrpR: "sand-g1r0qo",
        kaIpWk: "sand-hojbe8",
        $$css: true
    },
    panelWidth: (s)=>[
            {
                kzqmXN: s != null ? "sand-5lhr3w" : s,
                ks0D6T: s != null ? "sand-f68679" : s,
                $$css: true
            },
            {
                "--x-width": ((e)=>{
                    if (typeof e === "number") {
                        return `${e}px`;
                    }
                    return e ?? undefined;
                })(s),
                "--x-maxWidth": ((e)=>{
                    if (typeof e === "number") {
                        return `${e}px`;
                    }
                    return e ?? undefined;
                })(s)
            }
        ],
    searchIcon: {
        kMwMTN: "sand-169k319",
        $$css: true
    },
    searchInput: {
        kB7OPa: "sand-9f619",
        kzQI83: "sand-1iyjqo2",
        kmuXW: "sand-s83m0k",
        kCS8Yb: "sand-dl72j9",
        k7Eaqz: "sand-euugli",
        kMzoRj: "sand-c342km",
        k3XXqK: "sand-1t137rt",
        kWkggS: "sand-jbqb8w",
        kMwMTN: "sand-tyxrsu",
        kMv6JI: "sand-jb2p0i",
        k63SB2: "sand-1k6tqyu",
        k8Qsv1: "sand-1h7ufjq",
        $$css: true
    },
    windowList: (s)=>[
            Mn,
            {
                "--x-height": ((e)=>{
                    if (typeof e === "number") {
                        return `${e}px`;
                    }
                    return e ?? undefined;
                })(leadingOffsetPx * 2 + s * rowPitchPx - qs)
            }
        ],
    windowItem: (s)=>[
            Bn,
            {
                "--x-insetBlockStart": ((e)=>{
                    if (typeof e === "number") {
                        return `${e}px`;
                    }
                    return e ?? undefined;
                })(leadingOffsetPx + s * rowPitchPx)
            }
        ],
    option: {
        kB7OPa: "sand-9f619",
        k1xSpc: "sand-78zum5",
        kGNEyG: "sand-6s0dn4",
        kjj79g: "sand-1qughib",
        kOIVth: "sand-ou54vl",
        kzqmXN: "sand-h8yej3",
        kAzted: "sand-110b6j0",
        kwRFfy: "sand-f159sx",
        kZCmMZ: "sand-mzvs34",
        kMzoRj: "sand-c342km",
        kaIpWk: "sand-t9pb60",
        kMeerF: "sand-t08umf",
        k3XXqK: "sand-1t137rt sand-9v5kkp",
        kjBf7l: "sand-4sht9k",
        kInvED: "sand-1g40iwv",
        kWkggS: "sand-jbqb8w sand-aalx5g sand-1nef6xh",
        kMwMTN: "sand-tyxrsu",
        kMv6JI: "sand-jb2p0i",
        k63SB2: "sand-1k6tqyu",
        k9WMMc: "sand-1yc453h",
        kkrTdU: "sand-1ypdohk",
        $$css: true
    },
    check: {
        kMwMTN: "sand-tyxrsu",
        $$css: true
    },
    empty: {
        k1xSpc: "sand-78zum5",
        kGNEyG: "sand-6s0dn4",
        kjj79g: "sand-l56j7k",
        kAzted: "sand-110b6j0",
        kMwMTN: "sand-1o0liin",
        $$css: true
    },
    emptyInset: {
        kogj98: "sand-1f8r7k0",
        $$css: true
    }
};
function Un(s, e) {
    const t = eY();
    return fB(s.label, t).includes(e) || s.searchText != null && fB(s.searchText, t).includes(e);
}
function useGn(entries) {
    const e = c_1.c(6);
    const [t, setT] = r_1.useState("");
    let n;
    if (e[0] !== entries || e[1] !== t) {
        const i = fB(t.trim(), eY());
        n = i === "" ? entries : entries.filter((o)=>Un(o, i));
        e[0] = entries;
        e[1] = t;
        e[2] = n;
    } else {
        n = e[2];
    }
    const shownEntries = n;
    let m;
    if (e[3] !== t || e[4] !== shownEntries) {
        m = {
            query: t,
            setQuery: setT,
            shownEntries
        };
        e[3] = t;
        e[4] = shownEntries;
        e[5] = m;
    } else {
        m = e[5];
    }
    return m;
}
function Wn({ rowWindow, rowCount, selectedIndex, tabStopIndex }) {
    const n = new Set;
    for(let d = rowWindow.start; d < rowWindow.end; d += 1){
        n.add(d);
    }
    for (const d of [
        selectedIndex,
        tabStopIndex - 1,
        tabStopIndex,
        tabStopIndex + 1
    ]){
        if (d >= 0 && d < rowCount) {
            n.add(d);
        }
    }
    return [
        ...n
    ].sort((d, m)=>d - m);
}
function Vn(s) {
    s?.scrollIntoView({
        block: "nearest"
    });
}
function onKeyDown(s) {
    if (s.altKey || s.ctrlKey || s.metaKey || s.shiftKey || s.key !== "ArrowDown" && s.key !== "ArrowUp" || !(s.target instanceof HTMLElement)) {
        return;
    }
    const e = [
        ...s.currentTarget.querySelectorAll('[role="option"]')
    ];
    const t = e.indexOf(s.target);
    if (t < 0) {
        return;
    }
    s.preventDefault();
    const l = e[ad(t, e.length, s.key === "ArrowDown" ? 1 : -1)];
    l?.focus({
        preventScroll: true
    });
    l?.scrollIntoView({
        block: "nearest"
    });
}
function OsComponent(s) {
    OsComponent.d = 1304;
    const e = c_1.c(15);
    const { searchPlaceholder, searchInputRef, query, onQueryChange, closeLabel } = s;
    let i;
    let o;
    let u;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        i = {
            className: "sand-9f619 sand-78zum5 sand-6s0dn4 sand-167g77z sand-n3w4p2 sand-1pic42t sand-1onr9mi sand-1hkp6id sand-1q0q8m5 sand-13u5rpf"
        };
        o = <I name="search" size="sm" style={xe.searchIcon}/>;
        u = p_1(a_.body1, xe.searchInput);
        e[0] = i;
        e[1] = o;
        e[2] = u;
    } else {
        i = e[0];
        o = e[1];
        u = e[2];
    }
    let c;
    if (e[3] !== onQueryChange) {
        c = (p)=>onQueryChange(p.currentTarget.value);
        e[3] = onQueryChange;
        e[4] = c;
    } else {
        c = e[4];
    }
    let r;
    if (e[5] !== query || e[6] !== searchInputRef || e[7] !== searchPlaceholder || e[8] !== c) {
        r = <input {...u} aria-label={searchPlaceholder} onChange={c} placeholder={searchPlaceholder} ref={searchInputRef} spellCheck={false} type="text" value={query}/>;
        e[5] = query;
        e[6] = searchInputRef;
        e[7] = searchPlaceholder;
        e[8] = c;
        e[9] = r;
    } else {
        r = e[9];
    }
    let f;
    if (e[10] !== closeLabel) {
        f = closeLabel != null ? <cp.Close render=<button className="sand-9f619 sand-3nfvp2 sand-6s0dn4 sand-l56j7k sand-2lah0s sand-vy4d1p sand-xk0z11 sand-exx8yu sand-yri2b sand-18d9i69 sand-1c1uobl sand-c342km sand-1qmwy7c sand-t08umf sand-1t137rt sand-9v5kkp sand-4sht9k sand-1g40iwv sand-jbqb8w sand-aalx5g sand-1nef6xh sand-169k319 sand-1ypdohk" aria-label={closeLabel} type="button"/>><I name="close" size="sm"/></cp.Close> : null;
        e[10] = closeLabel;
        e[11] = f;
    } else {
        f = e[11];
    }
    let h;
    if (e[12] !== r || e[13] !== f) {
        h = <div {...i}>{o}{r}{f}</div>;
        e[12] = r;
        e[13] = f;
        e[14] = h;
    } else {
        h = e[14];
    }
    return h;
}
function MsComponent(s) {
    MsComponent.d = 1303;
    const e = c_1.c(5);
    const { windowRows } = s;
    let l;
    if (e[0] !== windowRows) {
        l = p_1(a_.body2, xe.empty, windowRows && xe.emptyInset);
        e[0] = windowRows;
        e[1] = l;
    } else {
        l = e[1];
    }
    let n;
    if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
        n = <T id="Ev2r9A"/>;
        e[2] = n;
    } else {
        n = e[2];
    }
    let d;
    if (e[3] !== l) {
        d = <div {...l} role="status">{n}</div>;
        e[3] = l;
        e[4] = d;
    } else {
        d = e[4];
    }
    return d;
}
function Ds1Component(s) {
    Ds1Component.d = 1305;
    const e = c_1.c(75);
    const { entries, value, onValueChange, disabled, label, searchPlaceholder, closeLabel, panelWidth, onOpenChange, renderMeta, windowRows } = s;
    const h = panelWidth === undefined ? 320 : panelWidth;
    const windowRows_1 = windowRows === undefined ? false : windowRows;
    const [b, setB] = r_1.useState(false);
    const [y, setY] = r_1.useState(0);
    const [x, setX] = r_1.useState(null);
    const [_, set_] = r_1.useState(null);
    const kRef = r_1.useRef(null);
    const { query, setQuery, shownEntries } = useGn(entries);
    const CRef = r_1.useRef(null);
    let Z;
    if (e[0] !== entries || e[1] !== value) {
        Z = entries.find((S)=>S.value === value)?.label ?? value;
        e[0] = entries;
        e[1] = value;
        e[2] = Z;
    } else {
        Z = e[2];
    }
    const P = Z;
    let q;
    if (e[3] !== _ || e[4] !== shownEntries) {
        q = shownEntries.some((S)=>S.value === _) ? _ : shownEntries[0]?.value;
        e[3] = _;
        e[4] = shownEntries;
        e[5] = q;
    } else {
        q = e[5];
    }
    const z = q;
    let W;
    if (e[6] !== value) {
        W = (S)=>S.value === value;
        e[6] = value;
        e[7] = W;
    } else {
        W = e[7];
    }
    const selectedIndex = shownEntries.findIndex(W);
    const scrollEl = windowRows_1 ? x : null;
    const reveal = windowRows_1 && b && selectedIndex >= 0 ? {
        kind: "row",
        key: `${y}:${value}`,
        rowTopPx: selectedIndex * rowPitchPx,
        heightPx
    } : null;
    let Y;
    if (e[8] !== shownEntries.length || e[9] !== scrollEl || e[10] !== reveal) {
        Y = {
            scrollEl,
            rowCount: shownEntries.length,
            rowPitchPx,
            leadingOffsetPx,
            initialViewportPx,
            reveal
        };
        e[8] = shownEntries.length;
        e[9] = scrollEl;
        e[10] = reveal;
        e[11] = Y;
    } else {
        Y = e[11];
    }
    const rowWindow = cm_1(Y);
    let ue;
    if (e[12] !== z) {
        ue = (S)=>S.value === z;
        e[12] = z;
        e[13] = ue;
    } else {
        ue = e[13];
    }
    const be = Wn({
        rowWindow,
        rowCount: shownEntries.length,
        selectedIndex,
        tabStopIndex: shownEntries.findIndex(ue)
    });
    let me;
    if (e[14] !== onOpenChange || e[15] !== setQuery) {
        me = (S)=>{
            setB(S);
            if (S) {
                setY(Hn);
            }
            if (!S) {
                setQuery("");
                set_(null);
            }
            onOpenChange?.(S);
        };
        e[14] = onOpenChange;
        e[15] = setQuery;
        e[16] = me;
    } else {
        me = e[16];
    }
    const B = me;
    let se;
    if (e[17] === Symbol.for("react.memo_cache_sentinel")) {
        se = (S)=>{
            kRef.current = S;
            setX(S);
        };
        e[17] = se;
    } else {
        se = e[17];
    }
    const H = se;
    let J;
    if (e[18] !== setQuery) {
        J = (S)=>{
            setQuery(S);
            const kRef_current = kRef.current;
            if (kRef_current != null) {
                kRef_current.scrollTop = 0;
                kRef_current.dispatchEvent(new Event("scroll"));
            }
        };
        e[18] = setQuery;
        e[19] = J;
    } else {
        J = e[19];
    }
    const onQueryChange = J;
    let F;
    if (e[20] !== B || e[21] !== onValueChange) {
        F = (S)=>{
            onValueChange(S);
            B(false);
        };
        e[20] = B;
        e[21] = onValueChange;
        e[22] = F;
    } else {
        F = e[22];
    }
    const V = F;
    let E;
    if (shownEntries.length === 0) {
        let S;
        if (e[23] !== windowRows_1) {
            S = <MsComponent windowRows={windowRows_1}/>;
            e[23] = windowRows_1;
            e[24] = S;
        } else {
            S = e[24];
        }
        E = S;
    } else if (windowRows_1) {
        let S;
        if (e[25] !== shownEntries.length) {
            S = p_1(xe.windowList(shownEntries.length));
            e[25] = shownEntries.length;
            e[26] = S;
        } else {
            S = e[26];
        }
        let $;
        if (e[27] !== renderMeta || e[28] !== V || e[29] !== shownEntries || e[30] !== z || e[31] !== value) {
            $ = (oe)=>{
                const ne = shownEntries[oe];
                if (ne == null) {
                    return null;
                }
                const ge = ne.value === value;
                return <button {...p_1(a_.body2, xe.option, xe.windowItem(oe))} aria-label={ne.label} aria-posinset={oe + 1} aria-selected={ge} aria-setsize={shownEntries.length} key={ne.value} onClick={()=>V(ne.value)} onFocus={()=>set_(ne.value)} role="option" tabIndex={ne.value === z ? 0 : -1} type="button"><span className="sand-euugli sand-b3r6kr sand-lyipyv sand-uxw1ft">{ne.label}</span><span className="sand-3nfvp2 sand-6s0dn4 sand-13a6bvl sand-2lah0s sand-167g77z sand-16xo4sp sand-1o0liin sand-uxw1ft">{renderMeta != null ? renderMeta(ne) : ne.meta}{ge ? <I name="check" size="sm" style={xe.check}/> : null}</span></button>;
            };
            e[27] = renderMeta;
            e[28] = V;
            e[29] = shownEntries;
            e[30] = z;
            e[31] = value;
            e[32] = $;
        } else {
            $ = e[32];
        }
        E = <div {...S}>{be.map($)}</div>;
    } else {
        let S;
        if (e[33] !== V || e[34] !== shownEntries || e[35] !== z || e[36] !== value) {
            let $;
            if (e[38] !== V || e[39] !== z || e[40] !== value) {
                $ = (oe)=>{
                    const ne = oe.value === value;
                    return <button {...p_1(a_.body2, xe.option)} aria-label={oe.label} aria-selected={ne} key={oe.value} onClick={()=>V(oe.value)} onFocus={()=>set_(oe.value)} ref={ne ? Vn : undefined} role="option" tabIndex={oe.value === z ? 0 : -1} type="button"><span className="sand-euugli sand-b3r6kr sand-lyipyv sand-uxw1ft">{oe.label}</span><span className="sand-3nfvp2 sand-6s0dn4 sand-13a6bvl sand-2lah0s sand-167g77z sand-16xo4sp sand-1o0liin sand-uxw1ft">{oe.meta}{ne ? <I name="check" size="sm" style={xe.check}/> : null}</span></button>;
                };
                e[38] = V;
                e[39] = z;
                e[40] = value;
                e[41] = $;
            } else {
                $ = e[41];
            }
            S = shownEntries.map($);
            e[33] = V;
            e[34] = shownEntries;
            e[35] = z;
            e[36] = value;
            e[37] = S;
        } else {
            S = e[37];
        }
        E = S;
    }
    const X = `${label}, ${P}`;
    let render;
    if (e[42] !== disabled || e[43] !== P || e[44] !== X) {
        render = <G_1 aria-label={X} disabled={disabled} size="lg" title={P} variant="ghost"/>;
        e[42] = disabled;
        e[43] = P;
        e[44] = X;
        e[45] = render;
    } else {
        render = e[45];
    }
    let ie;
    if (e[46] !== P || e[47] !== render) {
        ie = <cp.Trigger render={render}>{P}</cp.Trigger>;
        e[46] = P;
        e[47] = render;
        e[48] = ie;
    } else {
        ie = e[48];
    }
    let G;
    if (e[49] !== h) {
        G = xe.panelWidth(h);
        e[49] = h;
        e[50] = G;
    } else {
        G = e[50];
    }
    let surfaceStyle;
    if (e[51] !== G) {
        surfaceStyle = [
            xe.panel,
            G
        ];
        e[51] = G;
        e[52] = surfaceStyle;
    } else {
        surfaceStyle = e[52];
    }
    let de;
    if (e[53] !== closeLabel || e[54] !== onQueryChange || e[55] !== query || e[56] !== searchPlaceholder) {
        de = <OsComponent closeLabel={closeLabel} onQueryChange={onQueryChange} query={query} searchInputRef={CRef} searchPlaceholder={searchPlaceholder}/>;
        e[53] = closeLabel;
        e[54] = onQueryChange;
        e[55] = query;
        e[56] = searchPlaceholder;
        e[57] = de;
    } else {
        de = e[57];
    }
    let L;
    if (e[58] !== windowRows_1) {
        L = ({
            0: {
                className: "sand-9f619 sand-78zum5 sand-dt5ytf sand-195vfkc sand-e91c59 sand-1yrsyyn sand-1icxu4v sand-10b6aqq sand-25sj25 sand-1odjw0f"
            },
            1: {
                className: "sand-9f619 sand-78zum5 sand-dt5ytf sand-195vfkc sand-e91c59 sand-1odjw0f sand-exx8yu sand-yri2b sand-18d9i69 sand-1c1uobl"
            }
        })[!!windowRows_1 << 0];
        e[58] = windowRows_1;
        e[59] = L;
    } else {
        L = e[59];
    }
    const ref = windowRows_1 ? H : undefined;
    let pe;
    if (e[60] !== label || e[61] !== E || e[62] !== L || e[63] !== ref) {
        pe = <div {...L} aria-label={label} onKeyDown={onKeyDown} ref={ref} role="listbox">{E}</div>;
        e[60] = label;
        e[61] = E;
        e[62] = L;
        e[63] = ref;
        e[64] = pe;
    } else {
        pe = e[64];
    }
    let ve;
    if (e[65] !== label || e[66] !== surfaceStyle || e[67] !== de || e[68] !== pe) {
        ve = <cp.Popup aria-label={label} initialFocus={CRef} offset={4} placement="bottom-end" surfaceStyle={surfaceStyle}>{de}{pe}</cp.Popup>;
        e[65] = label;
        e[66] = surfaceStyle;
        e[67] = de;
        e[68] = pe;
        e[69] = ve;
    } else {
        ve = e[69];
    }
    let ke;
    if (e[70] !== B || e[71] !== b || e[72] !== ie || e[73] !== ve) {
        ke = <cp.Root modal="trap-focus" onOpenChange={B} open={b}>{ie}{ve}</cp.Root>;
        e[70] = B;
        e[71] = b;
        e[72] = ie;
        e[73] = ve;
        e[74] = ke;
    } else {
        ke = e[74];
    }
    return ke;
}
function Hn(s) {
    return s + 1;
}
const Me = "auto";
const panelWidth = 424;
function ts(s) {
    return s.replaceAll("_", " ");
}
function Bs(s) {
    return `${s.toLowerCase().replaceAll("_", " ")} ${s}`;
}
const Qn = gz(()=>new Map);
function Zn(s, timeZone) {
    try {
        return new Intl.DateTimeFormat(s, {
            timeStyle: "short",
            timeZone
        });
    } catch  {
        return null;
    }
}
function Yn(s) {
    const e = Qn();
    if (!e.has(s)) {
        e.set(s, Zn(eY(), s));
    }
    return e.get(s) ?? null;
}
function JnComponent(s, e) {
    if (s === null || e === null) {
        return;
    }
    const t = Yn(s)?.format(e);
    if (t === undefined) {
        return undefined;
    }
    return <Ee as="span" color="tertiary" size="inherit">{t}</Ee>;
}
function ea() {
    try {
        return Intl.supportedValuesOf("timeZone");
    } catch  {
        return [];
    }
}
function FsComponent() {
    FsComponent.d = 1241;
    const s = c_1.c(21);
    const { _: __1 } = u_1();
    const t = b7();
    aU(t.timeZone.load);
    const { detectedTimeZone, overrideTimeZone } = iH();
    const { setOverride, isPending, failure } = iI();
    const o = ea();
    const [u, setU] = r_1.useState(null);
    let r;
    if (s[0] !== setOverride) {
        r = (N)=>{
            setOverride(N === Me ? null : N);
        };
        s[0] = setOverride;
        s[1] = r;
    } else {
        r = s[1];
    }
    const onValueChange = r;
    let h;
    if (s[2] !== __1 || s[3] !== detectedTimeZone) {
        h = detectedTimeZone != null ? __1({
            id: "SprHbY",
            values: {
                0: ts(detectedTimeZone)
            }
        }) : __1({
            id: "pEb1UY"
        });
        s[2] = __1;
        s[3] = detectedTimeZone;
        s[4] = h;
    } else {
        h = s[4];
    }
    const p = h;
    let b;
    if (s[5] !== p) {
        b = {
            value: Me,
            label: p
        };
        s[5] = p;
        s[6] = b;
    } else {
        b = s[6];
    }
    const entries = [
        b,
        ...overrideTimeZone != null && !o.includes(overrideTimeZone) ? [
            {
                value: overrideTimeZone,
                label: ts(overrideTimeZone),
                searchText: Bs(overrideTimeZone)
            }
        ] : [],
        ...o.map(sa)
    ];
    let y;
    if (s[7] !== detectedTimeZone || s[8] !== u) {
        y = (N)=>JnComponent(N.value === Me ? detectedTimeZone : N.value, u);
        s[7] = detectedTimeZone;
        s[8] = u;
        s[9] = y;
    } else {
        y = s[9];
    }
    const renderMeta = y;
    let x;
    if (s[10] !== __1 || s[11] !== failure) {
        x = failure != null ? __1({
            id: "QqKsGg"
        }) : undefined;
        s[10] = __1;
        s[11] = failure;
        s[12] = x;
    } else {
        x = s[12];
    }
    let g;
    if (s[13] !== __1) {
        g = __1({
            id: "OVO7HN"
        });
        s[13] = __1;
        s[14] = g;
    } else {
        g = s[14];
    }
    let _;
    if (s[15] !== setU) {
        _ = (N)=>{
            if (N) {
                setU(new Date);
            }
        };
        s[15] = setU;
        s[16] = _;
    } else {
        _ = s[16];
    }
    let w;
    if (s[17] !== __1) {
        w = __1({
            id: "40Gx0U"
        });
        s[17] = __1;
        s[18] = w;
    } else {
        w = s[18];
    }
    let k;
    if (s[19] !== __1) {
        k = __1({
            id: "prDuBY"
        });
        s[19] = __1;
        s[20] = k;
    } else {
        k = s[20];
    }
    return <Ae1 anchorId="timezone" description={x} variant="card"><Ds1Component closeLabel={g} disabled={isPending} onOpenChange={_} entries={entries} label={w} renderMeta={renderMeta} windowRows onValueChange={onValueChange} panelWidth={panelWidth} searchPlaceholder={k} value={overrideTimeZone ?? Me}/></Ae1>;
}
function sa(s) {
    return {
        value: s,
        label: ts(s),
        searchText: Bs(s)
    };
}
function UsComponent() {
    UsComponent.d = 1240;
    const s = c_1.c(9);
    const { _ } = u_1();
    const t = l(em());
    const L = G_2;
    let n;
    if (s[0] !== _) {
        n = _({
            id: "ixkTse"
        });
        s[0] = _;
        s[1] = n;
    } else {
        n = s[1];
    }
    let d;
    if (s[2] === Symbol.for("react.memo_cache_sentinel")) {
        d = <FsComponent/>;
        s[2] = d;
    } else {
        d = s[2];
    }
    const m = iG("local-execution", t) === "general" ? <L_1/> : null;
    let i;
    if (s[3] === Symbol.for("react.memo_cache_sentinel")) {
        i = <LsComponent/>;
        s[3] = i;
    } else {
        i = s[3];
    }
    let o;
    if (s[4] !== L || s[5] !== n || s[6] !== d || s[7] !== m) {
        o = <L title={n}>{d}{m}{i}</L>;
        s[4] = L;
        s[5] = n;
        s[6] = d;
        s[7] = m;
        s[8] = o;
    } else {
        o = s[8];
    }
    return o;
}
const ta = {
    "zh-CN": "zh-Hans",
    "zh-TW": "zh-Hant"
};
const na = gz((s)=>{
    const e = new Intl.DisplayNames(s, {
        type: "language",
        fallback: "none"
    });
    const t = new Intl.Collator(s);
    return iL.map((row)=>({
            row,
            name: e.of(ta[row.tag] ?? row.tag) ?? row.englishName
        })).toSorted((l, n)=>t.compare(l.name, n.name)).map(({ row, name })=>({
            value: row.tag,
            label: row.endonym,
            searchText: name === row.englishName ? name : `${name} ${row.englishName}`,
            meta: name
        }));
});
function GsComponent(s) {
    GsComponent.d = 1285;
    const e = c_1.c(18);
    const { disabled, preference, onPreferenceChange } = s;
    const { _ } = u_1();
    let m;
    if (e[0] !== _) {
        m = _({
            id: "Ea4oxV"
        });
        e[0] = _;
        e[1] = m;
    } else {
        m = e[1];
    }
    let i;
    if (e[2] !== m) {
        i = [
            {
                value: iK[0],
                label: m,
                searchText,
                meta: null
            },
            ...na()
        ];
        e[2] = m;
        e[3] = i;
    } else {
        i = e[3];
    }
    const entries = i;
    let u;
    if (e[4] !== _) {
        u = _({
            id: "RoIbhu"
        });
        e[4] = _;
        e[5] = u;
    } else {
        u = e[5];
    }
    let c;
    if (e[6] !== _) {
        c = _({
            id: "vXIe7J"
        });
        e[6] = _;
        e[7] = c;
    } else {
        c = e[7];
    }
    let r;
    if (e[8] !== _) {
        r = _({
            id: "RNnopd"
        });
        e[8] = _;
        e[9] = r;
    } else {
        r = e[9];
    }
    let f;
    if (e[10] !== disabled || e[11] !== entries || e[12] !== onPreferenceChange || e[13] !== preference || e[14] !== u || e[15] !== c || e[16] !== r) {
        f = <Ds1Component closeLabel={u} disabled={disabled} entries={entries} label={c} onValueChange={onPreferenceChange} searchPlaceholder={r} value={preference}/>;
        e[10] = disabled;
        e[11] = entries;
        e[12] = onPreferenceChange;
        e[13] = preference;
        e[14] = u;
        e[15] = c;
        e[16] = r;
        e[17] = f;
    } else {
        f = e[17];
    }
    return f;
}
const aa = {
    system: {
        id: "Ea4oxV"
    },
    light: {
        id: "1njn7W"
    },
    dark: {
        id: "pvnfJD"
    }
};
const la = {
    black: {
        id: "THokF3"
    },
    "bot-color": {
        id: "p7v5PZ"
    }
};
function WsComponent() {
    WsComponent.d = 1283;
    const s = c_1.c(26);
    const { i18n, _: __1 } = u_1();
    const l = b7();
    aU(l.spellCheck.load);
    const { state, reload } = iW();
    const { setEnabled, isPending, failure } = iX();
    if (state.status === "unavailable") {
        return null;
    }
    let u;
    if (s[0] !== state) {
        u = bh(state);
        s[0] = state;
        s[1] = u;
    } else {
        u = s[1];
    }
    const c = u;
    if (state.status === "failed" && c == null) {
        let j;
        if (s[2] !== __1) {
            j = __1({
                id: "mmzR7e"
            });
            s[2] = __1;
            s[3] = j;
        } else {
            j = s[3];
        }
        let x;
        if (s[4] !== reload) {
            x = ()=>reload();
            s[4] = reload;
            s[5] = x;
        } else {
            x = s[5];
        }
        let g;
        if (s[6] === Symbol.for("react.memo_cache_sentinel")) {
            g = <T id="6gRgw8"/>;
            s[6] = g;
        } else {
            g = s[6];
        }
        let _;
        if (s[7] !== x) {
            _ = <Fe1 onClick={x} size="md" style={a_.body2} type="button" variant="secondary">{g}</Fe1>;
            s[7] = x;
            s[8] = _;
        } else {
            _ = s[8];
        }
        let w;
        if (s[9] !== j || s[10] !== _) {
            w = <Ae1 anchorId="spell-check" description={j} variant="card">{_}</Ae1>;
            s[9] = j;
            s[10] = _;
            s[11] = w;
        } else {
            w = s[11];
        }
        return w;
    }
    let r;
    if (s[12] !== __1 || s[13] !== failure || s[14] !== state.status) {
        r = failure != null || state.status === "failed" ? __1({
            id: "QqKsGg"
        }) : undefined;
        s[12] = __1;
        s[13] = failure;
        s[14] = state.status;
        s[15] = r;
    } else {
        r = s[15];
    }
    const f = r;
    const h = c ?? iY;
    const p = c == null || isPending;
    let b;
    if (s[16] !== i18n) {
        b = i18n._(iS["spell-check"].label);
        s[16] = i18n;
        s[17] = b;
    } else {
        b = s[17];
    }
    let v;
    if (s[18] !== setEnabled || s[19] !== h || s[20] !== p || s[21] !== b) {
        v = <H isChecked={h} isDisabled={p} label={b} onToggle={setEnabled} size="md"/>;
        s[18] = setEnabled;
        s[19] = h;
        s[20] = p;
        s[21] = b;
        s[22] = v;
    } else {
        v = s[22];
    }
    let y;
    if (s[23] !== f || s[24] !== v) {
        y = <Ae1 anchorId="spell-check" description={f} variant="card">{v}</Ae1>;
        s[23] = f;
        s[24] = v;
        s[25] = y;
    } else {
        y = s[25];
    }
    return y;
}
function VsComponent() {
    VsComponent.d = 1282;
    const s = c_1.c(50);
    const { i18n, _: __1 } = u_1();
    const { preference } = bz();
    const { setPreference, isPending, failure } = iM();
    const { preference: preference_1 } = iN();
    const { setPreference: setPreference_1, isPending: isPending_1, failure: failure_1 } = iO();
    const r = b9("sand_enable_accent_theming");
    const isDefaultOn = b9("grok_bot_all_bots_color_theming");
    const h = iP({
        preference: iQ(),
        isDefaultOn
    });
    const { setEnabled, isPending: isPending_2, failure: failure_2 } = iR();
    let y;
    if (s[0] !== i18n) {
        y = i18n._(iS.theme.label);
        s[0] = i18n;
        s[1] = y;
    } else {
        y = s[1];
    }
    const j = y;
    let x;
    if (s[2] !== i18n) {
        x = i18n._(iS.accent.label);
        s[2] = i18n;
        s[3] = x;
    } else {
        x = s[3];
    }
    const g = x;
    let _;
    if (s[4] !== i18n) {
        _ = iT.map((M)=>({
                value: M,
                label: i18n._(aa[M])
            }));
        s[4] = i18n;
        s[5] = _;
    } else {
        _ = s[5];
    }
    const w = _;
    let k;
    if (s[6] !== i18n) {
        k = iU.map((M)=>({
                value: M,
                label: i18n._(la[M])
            }));
        s[6] = i18n;
        s[7] = k;
    } else {
        k = s[7];
    }
    const N = k;
    const A = iV(h);
    let I;
    if (s[8] !== __1) {
        I = __1({
            id: "aAIQg2"
        });
        s[8] = __1;
        s[9] = I;
    } else {
        I = s[9];
    }
    let C;
    if (s[10] !== __1 || s[11] !== failure) {
        C = failure != null ? __1({
            id: "QqKsGg"
        }) : undefined;
        s[10] = __1;
        s[11] = failure;
        s[12] = C;
    } else {
        C = s[12];
    }
    let Z;
    if (s[13] !== setPreference) {
        Z = (M)=>{
            if (M !== null) {
                setPreference(M);
            }
        };
        s[13] = setPreference;
        s[14] = Z;
    } else {
        Z = s[14];
    }
    let P;
    if (s[15] !== isPending || s[16] !== Z || s[17] !== j || s[18] !== w || s[19] !== preference) {
        P = <E_1 aria-label={j} disabled={isPending} onValueChange={Z} options={w} placement="bottom-end" size="lg" value={preference} variant="ghost"/>;
        s[15] = isPending;
        s[16] = Z;
        s[17] = j;
        s[18] = w;
        s[19] = preference;
        s[20] = P;
    } else {
        P = s[20];
    }
    let q;
    if (s[21] !== C || s[22] !== P) {
        q = <Ae1 anchorId="theme" description={C} variant="card">{P}</Ae1>;
        s[21] = C;
        s[22] = P;
        s[23] = q;
    } else {
        q = s[23];
    }
    let z;
    if (s[24] !== __1 || s[25] !== g || s[26] !== N || s[27] !== A || s[28] !== failure_2 || s[29] !== r || s[30] !== isDefaultOn || s[31] !== isPending_2 || s[32] !== setEnabled) {
        z = r || isDefaultOn ? <Ae1 anchorId="accent" description={failure_2 != null ? __1({
            id: "QqKsGg"
        }) : undefined} variant="card"><E_1 aria-label={g} disabled={isPending_2} onValueChange={(M)=>{
            if (M !== null) {
                setEnabled(M === "bot-color");
            }
        }} options={N} placement="bottom-end" size="lg" value={A} variant="ghost"/></Ae1> : null;
        s[24] = __1;
        s[25] = g;
        s[26] = N;
        s[27] = A;
        s[28] = failure_2;
        s[29] = r;
        s[30] = isDefaultOn;
        s[31] = isPending_2;
        s[32] = setEnabled;
        s[33] = z;
    } else {
        z = s[33];
    }
    let W;
    if (s[34] !== __1 || s[35] !== failure_1) {
        W = failure_1 != null ? __1({
            id: "QqKsGg"
        }) : undefined;
        s[34] = __1;
        s[35] = failure_1;
        s[36] = W;
    } else {
        W = s[36];
    }
    let O;
    if (s[37] !== isPending_1 || s[38] !== preference_1 || s[39] !== setPreference_1) {
        O = <GsComponent disabled={isPending_1} onPreferenceChange={setPreference_1} preference={preference_1}/>;
        s[37] = isPending_1;
        s[38] = preference_1;
        s[39] = setPreference_1;
        s[40] = O;
    } else {
        O = s[40];
    }
    let R;
    if (s[41] !== W || s[42] !== O) {
        R = <Ae1 anchorId="language" description={W} variant="card">{O}</Ae1>;
        s[41] = W;
        s[42] = O;
        s[43] = R;
    } else {
        R = s[43];
    }
    let K;
    if (s[44] === Symbol.for("react.memo_cache_sentinel")) {
        K = <WsComponent/>;
        s[44] = K;
    } else {
        K = s[44];
    }
    let Y;
    if (s[45] !== R || s[46] !== I || s[47] !== q || s[48] !== z) {
        Y = <G_2 title={I}>{q}{z}{R}{K}</G_2>;
        s[45] = R;
        s[46] = I;
        s[47] = q;
        s[48] = z;
        s[49] = Y;
    } else {
        Y = s[49];
    }
    return Y;
}
function KsComponent() {
    KsComponent.d = 1295;
    const s = c_1.c(40);
    const { i18n, _: __1 } = u_1();
    const l = i_();
    const { setPreferences, isPending, failure } = i$();
    const i = l.status === "ready" ? l.value : ("previous" in l ? l.previous : undefined) ?? j0;
    const o = isPending || l.status === "loading" || l.status === "unavailable";
    let u;
    if (s[0] !== setPreferences) {
        u = (C)=>setPreferences(C);
        s[0] = setPreferences;
        s[1] = u;
    } else {
        u = s[1];
    }
    const c = u;
    let r;
    if (s[2] !== i18n) {
        r = j1.map((C)=>({
                value: C.id,
                label: i18n._(C.label)
            }));
        s[2] = i18n;
        s[3] = r;
    } else {
        r = s[3];
    }
    const f = r;
    let h;
    if (s[4] !== __1 || s[5] !== failure || s[6] !== l.status) {
        h = failure != null || l.status === "failed" ? __1({
            id: "QqKsGg"
        }) : null;
        s[4] = __1;
        s[5] = failure;
        s[6] = l.status;
        s[7] = h;
    } else {
        h = s[7];
    }
    const p = h;
    let b;
    if (s[8] !== __1) {
        b = __1({
            id: "iDNBZe"
        });
        s[8] = __1;
        s[9] = b;
    } else {
        b = s[9];
    }
    let v;
    if (s[10] !== b) {
        v = <D>{b}</D>;
        s[10] = b;
        s[11] = v;
    } else {
        v = s[11];
    }
    const i_playSound = i.playSound;
    let j;
    if (s[12] !== __1) {
        j = j2(__1({
            id: "6EhUT7"
        }));
        s[12] = __1;
        s[13] = j;
    } else {
        j = s[13];
    }
    let x;
    if (s[14] !== i || s[15] !== c) {
        x = ()=>{
            if (i.playSound) {
                j3();
            }
            c({
                ...i,
                playSound: !i.playSound
            });
        };
        s[14] = i;
        s[15] = c;
        s[16] = x;
    } else {
        x = s[16];
    }
    let g;
    if (s[17] !== o || s[18] !== i.playSound || s[19] !== j || s[20] !== x) {
        g = <H isChecked={i_playSound} isDisabled={o} label={j} onToggle={x} size="md"/>;
        s[17] = o;
        s[18] = i.playSound;
        s[19] = j;
        s[20] = x;
        s[21] = g;
    } else {
        g = s[21];
    }
    let _;
    if (s[22] !== p || s[23] !== g) {
        _ = <Ae1 anchorId="notification-sound-enabled" description={p} variant="card">{g}</Ae1>;
        s[22] = p;
        s[23] = g;
        s[24] = _;
    } else {
        _ = s[24];
    }
    let w;
    if (s[25] !== __1) {
        w = j2(__1({
            id: "wm7RV4"
        }));
        s[25] = __1;
        s[26] = w;
    } else {
        w = s[26];
    }
    const k = o || !i.playSound;
    let N;
    if (s[27] !== i || s[28] !== c) {
        N = (sound)=>{
            if (sound != null) {
                c({
                    ...i,
                    sound
                });
                j4(sound);
            }
        };
        s[27] = i;
        s[28] = c;
        s[29] = N;
    } else {
        N = s[29];
    }
    let A;
    if (s[30] !== f || s[31] !== i.sound || s[32] !== w || s[33] !== k || s[34] !== N) {
        A = <Ae1 anchorId="notification-sound" variant="card"><E_1 aria-label={w} disabled={k} onValueChange={N} options={f} placement="bottom-end" size="lg" value={i.sound} variant="ghost"/></Ae1>;
        s[30] = f;
        s[31] = i.sound;
        s[32] = w;
        s[33] = k;
        s[34] = N;
        s[35] = A;
    } else {
        A = s[35];
    }
    let I;
    if (s[36] !== A || s[37] !== v || s[38] !== _) {
        I = <G_2 title={v}>{_}{A}</G_2>;
        s[36] = A;
        s[37] = v;
        s[38] = _;
        s[39] = I;
    } else {
        I = s[39];
    }
    return I;
}
function HsComponent() {
    HsComponent.d = 1296;
    const s = c_1.c(2);
    const e = iZ();
    let t;
    if (s[0] !== e) {
        t = e ? <KsComponent/> : null;
        s[0] = e;
        s[1] = t;
    } else {
        t = s[1];
    }
    return t;
}
const ps = "grok_bot_spend_approval_passkey";
function XsComponent(s) {
    XsComponent.d = 1300;
    const e = c_1.c(24);
    const { passkey } = s;
    const { i18n, _ } = u_1();
    const d = cq_1();
    const { revoke, isRevoking, revokeFailure } = di();
    let u;
    if (e[0] !== _ || e[1] !== i18n || e[2] !== passkey.backedUp || e[3] !== passkey.createdAtMs || e[4] !== passkey.lastUsedAtMs) {
        const added = i18n.date(new Date(passkey.createdAtMs), {
            dateStyle: "medium"
        });
        u = passkey.lastUsedAtMs == null ? _({
            id: "YGg4Ab",
            values: {
                added
            }
        }) : _({
            id: "WwZac5",
            values: {
                0: i18n.date(new Date(passkey.lastUsedAtMs), {
                    dateStyle: "medium"
                }),
                added
            }
        });
        if (passkey.backedUp) {
            u = _({
                id: "rktTfb",
                values: {
                    description: u
                }
            });
        }
        e[0] = _;
        e[1] = i18n;
        e[2] = passkey.backedUp;
        e[3] = passkey.createdAtMs;
        e[4] = passkey.lastUsedAtMs;
        e[5] = u;
    } else {
        u = e[5];
    }
    if (revokeFailure != null) {
        let v;
        if (e[6] !== _) {
            v = _({
                id: "U3VC9i"
            });
            e[6] = _;
            e[7] = v;
        } else {
            v = e[7];
        }
        u = v;
    }
    let c;
    if (e[8] !== _ || e[9] !== d || e[10] !== passkey.credentialId || e[11] !== passkey.name || e[12] !== revoke) {
        c = async ()=>{
            if (await d(cr({
                title: _({
                    id: "LGsvdS"
                }),
                description: _({
                    id: "zJhZD5",
                    values: {
                        0: passkey.name
                    }
                }),
                confirmLabel: _({
                    id: "t/YqKh"
                }),
                cancelLabel: _({
                    id: "dEgA5A"
                })
            }))) {
                revoke(passkey.credentialId);
            }
        };
        e[8] = _;
        e[9] = d;
        e[10] = passkey.credentialId;
        e[11] = passkey.name;
        e[12] = revoke;
        e[13] = c;
    } else {
        c = e[13];
    }
    const r = c;
    let f;
    if (e[14] !== r) {
        f = ()=>{
            r();
        };
        e[14] = r;
        e[15] = f;
    } else {
        f = e[15];
    }
    let h;
    if (e[16] === Symbol.for("react.memo_cache_sentinel")) {
        h = <T id="t/YqKh"/>;
        e[16] = h;
    } else {
        h = e[16];
    }
    let p;
    if (e[17] !== isRevoking || e[18] !== f) {
        p = <Fe1 disabled={isRevoking} onClick={f} sentiment="danger" size="md" style={a_.body2} type="button" variant="secondary">{h}</Fe1>;
        e[17] = isRevoking;
        e[18] = f;
        e[19] = p;
    } else {
        p = e[19];
    }
    let b;
    if (e[20] !== u || e[21] !== passkey.name || e[22] !== p) {
        b = <Ae1 anchorId={anchorId} description={u} label={passkey.name} variant="card">{p}</Ae1>;
        e[20] = u;
        e[21] = passkey.name;
        e[22] = p;
        e[23] = b;
    } else {
        b = e[23];
    }
    return b;
}
function QsComponent() {
    QsComponent.d = 1302;
    const s = c_1.c(21);
    const { _ } = u_1();
    const { passkeys } = dh();
    const { loadPasskeys, retryPasskeys } = di();
    const d = cq();
    aU(loadPasskeys);
    let m;
    if (s[0] !== _ || s[1] !== d || s[2] !== retryPasskeys || s[3] !== passkeys.previous || s[4] !== passkeys.status || s[5] !== passkeys.value) {
        let i = [];
        let o = null;
        let u = false;
        e: switch(passkeys.status){
            case "loading":
                {
                    i = passkeys.previous ?? [];
                    o = i.length === 0 ? _({
                        id: "Pwqkdw"
                    }) : null;
                    break e;
                }
            case "ready":
                {
                    i = passkeys.value;
                    break e;
                }
            case "unavailable":
                {
                    let p;
                    if (s[7] !== _) {
                        p = _({
                            id: "0BvlbM"
                        });
                        s[7] = _;
                        s[8] = p;
                    } else {
                        p = s[8];
                    }
                    o = p;
                    break e;
                }
            case "failed":
                {
                    i = passkeys.previous ?? [];
                    let p;
                    if (s[9] !== _) {
                        p = _({
                            id: "gMTXM2"
                        });
                        s[9] = _;
                        s[10] = p;
                    } else {
                        p = s[10];
                    }
                    o = p;
                    u = true;
                    break e;
                }
        }
        const c = o ?? (i.length === 0 ? _({
            id: "RnIHB3"
        }) : _({
            id: "mI2MkV"
        }));
        let r;
        if (s[11] !== _) {
            r = _({
                id: "UZKLEA"
            });
            s[11] = _;
            s[12] = r;
        } else {
            r = s[12];
        }
        let f;
        if (s[13] !== u || s[14] !== d || s[15] !== retryPasskeys || s[16] !== passkeys.status) {
            f = u ? <Fe1 onClick={retryPasskeys} size="md" style={a_.body2} type="button" variant="secondary"><T id="6gRgw8"/></Fe1> : <Fe1 disabled={passkeys.status === "unavailable"} onClick={()=>{
                d();
            }} size="md" style={a_.body2} type="button" variant="primary"><T id="w3zmQl"/></Fe1>;
            s[13] = u;
            s[14] = d;
            s[15] = retryPasskeys;
            s[16] = passkeys.status;
            s[17] = f;
        } else {
            f = s[17];
        }
        let h;
        if (s[18] !== c || s[19] !== f) {
            h = <Ae1 anchorId="passkeys" description={c} variant="card">{f}</Ae1>;
            s[18] = c;
            s[19] = f;
            s[20] = h;
        } else {
            h = s[20];
        }
        m = <G_2 title={r}>{h}{[
            ...i
        ].sort(da).map(IaComponent)}</G_2>;
        s[0] = _;
        s[1] = d;
        s[2] = retryPasskeys;
        s[3] = passkeys.previous;
        s[4] = passkeys.status;
        s[5] = passkeys.value;
        s[6] = m;
    } else {
        m = s[6];
    }
    return m;
}
function IaComponent(passkey) {
    return <XsComponent key={passkey.credentialId} passkey={passkey}/>;
}
function da(s, e) {
    return e.createdAtMs - s.createdAtMs;
}
function ZsComponent() {
    ZsComponent.d = 1301;
    const s = c_1.c(4);
    const e = b9(ps);
    const t = bT();
    let l;
    if (s[0] !== t) {
        l = ()=>{
            t(ps);
            return oa;
        };
        s[0] = t;
        s[1] = l;
    } else {
        l = s[1];
    }
    i_1(l);
    let n;
    if (s[2] !== e) {
        n = e ? <QsComponent/> : null;
        s[2] = e;
        s[3] = n;
    } else {
        n = s[3];
    }
    return n;
}
function oa() {}
const ca = [
    "darwin",
    "win32"
];
function ra(platform) {
    return ca.includes(platform);
}
function YsComponent() {
    YsComponent.d = 1306;
    const s = c_1.c(26);
    const { _ } = u_1();
    const { platform } = fh();
    const l = j5();
    const { setEnabled, isPending, failure } = j6();
    let i;
    if (s[0] !== platform) {
        i = ra(platform);
        s[0] = platform;
        s[1] = i;
    } else {
        i = s[1];
    }
    const o = i;
    const u = l && o;
    let c;
    if (failure != null) {
        let x;
        if (s[2] !== _) {
            x = _({
                id: "QqKsGg"
            });
            s[2] = _;
            s[3] = x;
        } else {
            x = s[3];
        }
        c = x;
    } else if (o) {
        let x;
        if (s[4] !== _) {
            x = _({
                id: "rmVuan"
            });
            s[4] = _;
            s[5] = x;
        } else {
            x = s[5];
        }
        c = x;
    } else {
        let x;
        if (s[6] !== _) {
            x = _({
                id: "TmxDiI"
            });
            s[6] = _;
            s[7] = x;
        } else {
            x = s[7];
        }
        c = x;
    }
    let r;
    if (s[8] !== _) {
        r = _({
            id: "0qyGnO"
        });
        s[8] = _;
        s[9] = r;
    } else {
        r = s[9];
    }
    const f = c;
    const h = isPending || !o;
    let p;
    if (s[10] !== _) {
        p = _({
            id: "VUEkDl"
        });
        s[10] = _;
        s[11] = p;
    } else {
        p = s[11];
    }
    let b;
    if (s[12] !== setEnabled || s[13] !== l) {
        b = ()=>setEnabled(!l);
        s[12] = setEnabled;
        s[13] = l;
        s[14] = b;
    } else {
        b = s[14];
    }
    let v;
    if (s[15] !== h || s[16] !== p || s[17] !== b || s[18] !== u) {
        v = <H isChecked={u} isDisabled={h} label={p} onToggle={b} size="md"/>;
        s[15] = h;
        s[16] = p;
        s[17] = b;
        s[18] = u;
        s[19] = v;
    } else {
        v = s[19];
    }
    let y;
    if (s[20] !== v || s[21] !== c) {
        y = <Ae1 anchorId="security-keys" description={f} variant="card">{v}</Ae1>;
        s[20] = v;
        s[21] = c;
        s[22] = y;
    } else {
        y = s[22];
    }
    let j;
    if (s[23] !== r || s[24] !== y) {
        j = <G_2 title={r}>{y}</G_2>;
        s[23] = r;
        s[24] = y;
        s[25] = j;
    } else {
        j = s[25];
    }
    return j;
}
const os = [];
const Re = c_2(os);
let Ke = null;
let ns = 0;
function cs() {
    if (typeof navigator === "undefined") {
        return null;
    }
    const navigator_mediaDevices = navigator.mediaDevices;
    if (typeof navigator_mediaDevices?.enumerateDevices === "function") {
        return navigator_mediaDevices;
    }
    return null;
}
function ua(s) {
    return s.filter((e)=>e.kind === "audioinput").map((e)=>({
            deviceId: e.deviceId,
            label: e.label
        }));
}
function fa(s, e) {
    return s.length === e.length && s.every((t, l)=>t.deviceId === e[l]?.deviceId && t.label === e[l]?.label);
}
function ma() {
    return null;
}
async function ha(s) {
    const e = ++ns;
    const t = await s.enumerateDevices().then(ua, ma);
    t != null && (s !== Ke || e !== ns || fa(Re.get(), t) || Re.set(t));
}
function ba() {
    const s = cs();
    if (s == null) {
        return ()=>{};
    }
    if (s !== Ke) {
        Ke = s;
        Re.set(os);
        ns += 1;
    }
    const e = ()=>{
        ha(s);
    };
    s.addEventListener("devicechange", e);
    e();
    return ()=>{
        s.removeEventListener("devicechange", e);
    };
}
function vs() {
    const s = cs();
    if (s != null && s === Ke) {
        return Re.get();
    }
    return os;
}
function JsComponent() {
    JsComponent.d = 1294;
    const s = c_1.c(22);
    const { _ } = u_1();
    const { inputDeviceId } = j7();
    const l = j8();
    i_1(ba);
    const n = r_1.useSyncExternalStore(Re.subscribe, vs, vs);
    if (cs() == null) {
        return null;
    }
    let d;
    if (s[0] !== _) {
        d = _({
            id: "1iY5xv"
        });
        s[0] = _;
        s[1] = d;
    } else {
        d = s[1];
    }
    const m = d;
    let i;
    if (s[2] !== n || s[3] !== inputDeviceId) {
        i = inputDeviceId != null && n.some((b)=>b.deviceId === inputDeviceId) ? inputDeviceId : "";
        s[2] = n;
        s[3] = inputDeviceId;
        s[4] = i;
    } else {
        i = s[4];
    }
    const o = i;
    let u;
    if (s[5] !== _) {
        u = _({
            id: "9YHrNC"
        });
        s[5] = _;
        s[6] = u;
    } else {
        u = s[6];
    }
    let c;
    if (s[7] !== u) {
        c = {
            value: "",
            label: u
        };
        s[7] = u;
        s[8] = c;
    } else {
        c = s[8];
    }
    let r;
    if (s[9] !== _ || s[10] !== n || s[11] !== c) {
        let b;
        if (s[13] !== _) {
            b = (v, y)=>({
                    value: v.deviceId,
                    label: v.label || _({
                        id: "IBi8Io",
                        values: {
                            0: y + 1
                        }
                    })
                });
            s[13] = _;
            s[14] = b;
        } else {
            b = s[14];
        }
        r = [
            c,
            ...n.map(b)
        ];
        s[9] = _;
        s[10] = n;
        s[11] = c;
        s[12] = r;
    } else {
        r = s[12];
    }
    const f = r;
    let h;
    if (s[15] !== l) {
        h = (b)=>{
            if (b !== null) {
                l(b === "" ? null : b);
            }
        };
        s[15] = l;
        s[16] = h;
    } else {
        h = s[16];
    }
    let p;
    if (s[17] !== m || s[18] !== f || s[19] !== h || s[20] !== o) {
        p = <Ae1 anchorId="microphone" variant="card"><E_1 aria-label={m} onValueChange={h} options={f} placement="bottom-end" size="lg" value={o} variant="ghost"/></Ae1>;
        s[17] = m;
        s[18] = f;
        s[19] = h;
        s[20] = o;
        s[21] = p;
    } else {
        p = s[21];
    }
    return p;
}
function Et1Component() {
    Et1Component.d = 1312;
    const s = c_1.c(36);
    const { _: __1 } = u_1();
    const t = b7();
    aU(t.hardwareAcceleration.load);
    const { state, reload } = j9();
    const { setEnabled, isPending, failure } = ja();
    const { relaunch, isPending: isPending_1, failure: failure_1 } = jb();
    if (state.status === "unavailable" || state.status === "empty") {
        return null;
    }
    const r = state.status === "ready" ? state.value : state.previous ?? null;
    if (state.status === "failed" && r == null) {
        let k;
        if (s[0] !== __1) {
            k = __1({
                id: "mmzR7e"
            });
            s[0] = __1;
            s[1] = k;
        } else {
            k = s[1];
        }
        let N;
        if (s[2] !== reload) {
            N = ()=>reload();
            s[2] = reload;
            s[3] = N;
        } else {
            N = s[3];
        }
        let A;
        if (s[4] === Symbol.for("react.memo_cache_sentinel")) {
            A = <T id="6gRgw8"/>;
            s[4] = A;
        } else {
            A = s[4];
        }
        let I;
        if (s[5] !== N) {
            I = <Fe1 onClick={N} size="md" style={a_.body2} type="button" variant="secondary">{A}</Fe1>;
            s[5] = N;
            s[6] = I;
        } else {
            I = s[6];
        }
        let C;
        if (s[7] !== k || s[8] !== I) {
            C = <Ae1 anchorId="hardware-acceleration" description={k} variant="card">{I}</Ae1>;
            s[7] = k;
            s[8] = I;
            s[9] = C;
        } else {
            C = s[9];
        }
        return C;
    }
    let f;
    if (failure != null || state.status === "failed" && r != null) {
        let k;
        if (s[10] !== __1) {
            k = __1({
                id: "QqKsGg"
            });
            s[10] = __1;
            s[11] = k;
        } else {
            k = s[11];
        }
        f = k;
    } else if (state.status === "loading" && r == null) {
        let k;
        if (s[12] !== __1) {
            k = __1({
                id: "Pwqkdw"
            });
            s[12] = __1;
            s[13] = k;
        } else {
            k = s[13];
        }
        f = k;
    }
    const h = r != null && r.enabled !== r.enabledAtLaunch;
    const p = f;
    const b = r?.enabled ?? false;
    const v = r == null || isPending;
    let y;
    if (s[14] !== __1) {
        y = __1({
            id: "gkVAUt"
        });
        s[14] = __1;
        s[15] = y;
    } else {
        y = s[15];
    }
    let j;
    if (s[16] !== setEnabled || s[17] !== r) {
        j = ()=>{
            if (r != null) {
                setEnabled(!r.enabled);
            }
        };
        s[16] = setEnabled;
        s[17] = r;
        s[18] = j;
    } else {
        j = s[18];
    }
    let x;
    if (s[19] !== b || s[20] !== v || s[21] !== y || s[22] !== j) {
        x = <H isChecked={b} isDisabled={v} label={y} onToggle={j} size="md"/>;
        s[19] = b;
        s[20] = v;
        s[21] = y;
        s[22] = j;
        s[23] = x;
    } else {
        x = s[23];
    }
    let g;
    if (s[24] !== f || s[25] !== x) {
        g = <Ae1 anchorId="hardware-acceleration" description={p} variant="card">{x}</Ae1>;
        s[24] = f;
        s[25] = x;
        s[26] = g;
    } else {
        g = s[26];
    }
    let _;
    if (s[27] !== __1 || s[28] !== isPending_1 || s[29] !== h || s[30] !== relaunch || s[31] !== failure_1) {
        _ = h ? <Ae1 anchorId="hardware-acceleration-restart" description={failure_1 != null ? __1({
            id: "MVyXqf"
        }) : __1({
            id: "jZlVjK"
        })} variant="card"><Fe1 disabled={isPending_1} onClick={()=>relaunch()} sentiment="accent" size="md" style={a_.body2} type="button" variant="primary"><T id="u6QeR6"/></Fe1></Ae1> : null;
        s[27] = __1;
        s[28] = isPending_1;
        s[29] = h;
        s[30] = relaunch;
        s[31] = failure_1;
        s[32] = _;
    } else {
        _ = s[32];
    }
    let w;
    if (s[33] !== g || s[34] !== _) {
        w = <>{g}{_}</>;
        s[33] = g;
        s[34] = _;
        s[35] = w;
    } else {
        w = s[35];
    }
    return w;
}
function St1Component() {
    St1Component.d = 1313;
    const s = c_1.c(11);
    const { _ } = u_1();
    const [t, setT] = r_1.useState(false);
    let n;
    if (s[0] !== _) {
        n = _({
            id: "vhgAB7"
        });
        s[0] = _;
        s[1] = n;
    } else {
        n = s[1];
    }
    let d;
    if (s[2] === Symbol.for("react.memo_cache_sentinel")) {
        d = ()=>setT(true);
        s[2] = d;
    } else {
        d = s[2];
    }
    let m;
    if (s[3] === Symbol.for("react.memo_cache_sentinel")) {
        m = <Fe1 onClick={d} size="md" style={a_.body2} type="button" variant="secondary"><T id="QVjG8n"/></Fe1>;
        s[3] = m;
    } else {
        m = s[3];
    }
    let i;
    if (s[4] !== n) {
        i = <Ae1 anchorId="network-debugger" description={n} variant="card">{m}</Ae1>;
        s[4] = n;
        s[5] = i;
    } else {
        i = s[5];
    }
    let o;
    if (s[6] !== t) {
        o = t ? <Ut1 onClose={()=>setT(false)}/> : null;
        s[6] = t;
        s[7] = o;
    } else {
        o = s[7];
    }
    let u;
    if (s[8] !== i || s[9] !== o) {
        u = <>{i}{o}</>;
        s[8] = i;
        s[9] = o;
        s[10] = u;
    } else {
        u = s[10];
    }
    return u;
}
function Tt1Component() {
    Tt1Component.d = 1314;
    const s = c_1.c(11);
    const { _ } = u_1();
    const t = b9("grok_bot_network_debugger");
    const l = bT();
    let n;
    if (s[0] !== l) {
        n = ()=>{
            l("grok_bot_network_debugger");
            return pa;
        };
        s[0] = l;
        s[1] = n;
    } else {
        n = s[1];
    }
    i_1(n);
    let d;
    if (s[2] !== _) {
        d = _({
            id: "D+NlUC"
        });
        s[2] = _;
        s[3] = d;
    } else {
        d = s[3];
    }
    let m;
    let i;
    if (s[4] === Symbol.for("react.memo_cache_sentinel")) {
        m = <JsComponent/>;
        i = <Et1Component/>;
        s[4] = m;
        s[5] = i;
    } else {
        m = s[4];
        i = s[5];
    }
    let o;
    if (s[6] !== t) {
        o = t ? <St1Component/> : null;
        s[6] = t;
        s[7] = o;
    } else {
        o = s[7];
    }
    let u;
    if (s[8] !== d || s[9] !== o) {
        u = <G_2 title={d}>{m}{i}{o}</G_2>;
        s[8] = d;
        s[9] = o;
        s[10] = u;
    } else {
        u = s[10];
    }
    return u;
}
function pa() {}
function va(s) {
    const e = l(s);
    if (e === null) {
        return null;
    }
    return jc(e);
}
function Nt1Component() {
    Nt1Component.d = 1317;
    const s = c_1.c(23);
    const { _ } = u_1();
    const t = gT();
    let l;
    if (s[0] !== t) {
        l = va(t);
        s[0] = t;
        s[1] = l;
    } else {
        l = s[1];
    }
    const n = l;
    const d = bA();
    if (n === null) {
        return null;
    }
    let m;
    if (s[2] !== _) {
        m = _({
            id: "GdgCoi"
        });
        s[2] = _;
        s[3] = m;
    } else {
        m = s[3];
    }
    let i;
    if (s[4] !== _) {
        i = _({
            id: "LpqpbB"
        });
        s[4] = _;
        s[5] = i;
    } else {
        i = s[5];
    }
    let o;
    if (s[6] !== _) {
        o = _({
            id: "FRc2UR"
        });
        s[6] = _;
        s[7] = o;
    } else {
        o = s[7];
    }
    let u;
    if (s[8] !== n.href || s[9] !== d) {
        u = ()=>{
            d(n.href);
        };
        s[8] = n.href;
        s[9] = d;
        s[10] = u;
    } else {
        u = s[10];
    }
    let c;
    if (s[11] !== _) {
        c = _({
            id: "eDBYeI"
        });
        s[11] = _;
        s[12] = c;
    } else {
        c = s[12];
    }
    let r;
    if (s[13] !== u || s[14] !== c) {
        r = <Fe1 onClick={u} size="sm" variant="primary">{c}</Fe1>;
        s[13] = u;
        s[14] = c;
        s[15] = r;
    } else {
        r = s[15];
    }
    let f;
    if (s[16] !== i || s[17] !== o || s[18] !== r) {
        f = <div data-sand-unified-plan-migration=""><Ae1 anchorId={anchorId} description={i} label={o} variant="card">{r}</Ae1></div>;
        s[16] = i;
        s[17] = o;
        s[18] = r;
        s[19] = f;
    } else {
        f = s[19];
    }
    let h;
    if (s[20] !== m || s[21] !== f) {
        h = <G_2 title={m}>{f}</G_2>;
        s[20] = m;
        s[21] = f;
        s[22] = h;
    } else {
        h = s[22];
    }
    return h;
}
function At1Component() {
    At1Component.d = 1222;
    const s = c_1.c(18);
    const { _ } = u_1();
    const { cursorAuth } = dn();
    let l;
    if (s[0] === Symbol.for("react.memo_cache_sentinel")) {
        l = r_2("sand-settings-general", "sand-9f619 sand-78zum5 sand-dt5ytf sand-3qzy4x");
        s[0] = l;
    } else {
        l = s[0];
    }
    let n;
    if (s[1] !== _) {
        n = _({
            id: "AeXO77"
        });
        s[1] = _;
        s[2] = n;
    } else {
        n = s[2];
    }
    let d;
    if (s[3] !== cursorAuth) {
        d = <AsComponent auth={cursorAuth}/>;
        s[3] = cursorAuth;
        s[4] = d;
    } else {
        d = s[4];
    }
    let m;
    if (s[5] !== n || s[6] !== d) {
        m = <G_2 title={n}>{d}</G_2>;
        s[5] = n;
        s[6] = d;
        s[7] = m;
    } else {
        m = s[7];
    }
    let i;
    let o;
    let u;
    let c;
    let r;
    let f;
    let h;
    let p;
    if (s[8] === Symbol.for("react.memo_cache_sentinel")) {
        u = <Nt1Component/>;
        c = <VsComponent/>;
        r = <HsComponent/>;
        f = <Tt1Component/>;
        h = <UsComponent/>;
        p = <YsComponent/>;
        i = <CsComponent/>;
        o = <ZsComponent/>;
        s[8] = i;
        s[9] = o;
        s[10] = u;
        s[11] = c;
        s[12] = r;
        s[13] = f;
        s[14] = h;
        s[15] = p;
    } else {
        i = s[8];
        o = s[9];
        u = s[10];
        c = s[11];
        r = s[12];
        f = s[13];
        h = s[14];
        p = s[15];
    }
    let b;
    if (s[16] !== m) {
        b = <S><div className={l}>{m}{u}{c}{r}{f}{h}{p}{i}{o}</div></S>;
        s[16] = m;
        s[17] = b;
    } else {
        b = s[17];
    }
    return b;
}
function XaComponent(s) {
    XaComponent.d = 1229;
    const e = c_1.c(3);
    const { params } = s;
    const focus = params.focusSetting ?? null;
    let n;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        n = <At1Component/>;
        e[0] = n;
    } else {
        n = e[0];
    }
    let d;
    if (e[1] !== focus) {
        d = <Ft1 focus={focus}>{n}</Ft1>;
        e[1] = focus;
        e[2] = d;
    } else {
        d = e[2];
    }
    return d;
}
export { XaComponent as default };
