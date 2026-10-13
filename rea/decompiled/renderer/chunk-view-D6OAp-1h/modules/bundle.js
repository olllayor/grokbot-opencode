import { c as c_1, u as u_1, r } from "./index.eager-vendor-Qbf9YA6n.js";
import { b0 as J, bt, b$, b7, aU, ew, c1, ex, ey, ez, d0, eA, eB as approvalPlatform, eC, dd, bB, b9, eD } from "./index.eager-app-Cj5f8Gby.js";
import "./index.eager-platform-Dcfeegfw.js";
import { b9 as Le1, I as I_1, an, ah, a5 as Qe, a6 as Oe } from "./index-ZYxf-aBb.js";
import { c as Ee } from "./chunk-group-chat-connect-waiting-Cu67aNHe.js";
import "./index.eager-common-CdCvBQNJ.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "dec7d943-7bad-4280-a133-e37f07fb9a38";
            e._sentryDebugIdIdentifier = "sentry-dbid-dec7d943-7bad-4280-a133-e37f07fb9a38";
        }
    } catch (e) {}
})();
function $e(a) {
    return a.replace(/https?:\/\/[^\s"'`]+/gi, (e)=>{
        try {
            const t = new URL(e).href.replace(/^(https?:\/\/)[^/?#]*@/i, "$1");
            const i = t.split("#")[0] ?? t;
            return i.split("?")[0] ?? i;
        } catch  {
            return e;
        }
    }).replace(/((?:--)?(?:api[_-]?key|authorization|credential|password|secret|signature|token)\s*(?:=|:|\s)\s*)(?:"[^"]*"|'[^']*'|[^\s]+)/gi, "$1…").replace(/\bBearer\s+[^\s"'`]+/gi, "Bearer …").replace(/\b(?:sk[-_]|gh[pousr]_|xox[baprs]-|AIza)[A-Za-z0-9+/_=-]+/gi, "…");
}
const X = {
    toLabel: {
        kMwMTN: "sand-1o0liin",
        $$css: true
    },
    destination: {
        k1xSpc: "sand-3nfvp2",
        kGNEyG: "sand-6s0dn4",
        kAzted: "sand-jwf9q1",
        k7Eaqz: "sand-euugli",
        kg3NbH: "sand-dqyycr",
        kaIpWk: "sand-149ho13",
        kWkggS: "sand-1tiofj7",
        kMwMTN: "sand-tyxrsu",
        kHjlTd: "sand-j0a0fe",
        $$css: true
    },
    request: {
        kB7OPa: "sand-9f619",
        kzqmXN: "sand-h8yej3",
        k7Eaqz: "sand-euugli",
        kmVPX3: "sand-7z7khe",
        kMzoRj: "sand-mkeg23",
        ksu8eU: "sand-1y0btm7",
        kVAM5u: "sand-q03nf1",
        kaIpWk: "sand-4pepcl",
        kWkggS: "sand-13l7odt",
        kMwMTN: "sand-tyxrsu",
        khDVqt: "sand-126k92a",
        kHjlTd: "sand-j0a0fe",
        $$css: true
    },
    consequence: {
        kMwMTN: "sand-1o0liin",
        $$css: true
    }
};
function De1Component(a) {
    De1Component.d = 498;
    const e = c_1.c(46);
    const { entryId, destination, request, notice, actions, status, settledNote, answeredNote } = a;
    const { _: __1 } = u_1();
    const R = actions === undefined;
    let l;
    if (e[0] !== __1 || e[1] !== actions || e[2] !== destination || e[3] !== R || e[4] !== status) {
        l = R ? {
            status,
            description: __1({
                id: "rQJPIM",
                values: {
                    destination
                }
            })
        } : {
            actions
        };
        e[0] = __1;
        e[1] = actions;
        e[2] = destination;
        e[3] = R;
        e[4] = status;
        e[5] = l;
    } else {
        l = e[5];
    }
    let d;
    if (e[6] !== __1) {
        d = __1({
            id: "NWvYSE"
        });
        e[6] = __1;
        e[7] = d;
    } else {
        d = e[7];
    }
    let m;
    if (e[8] === Symbol.for("react.memo_cache_sentinel")) {
        m = {
            className: "sand-78zum5 sand-6s0dn4 sand-17d4w8g sand-euugli"
        };
        e[8] = m;
    } else {
        m = e[8];
    }
    let v;
    if (e[9] !== __1) {
        v = __1({
            id: "/jQctM"
        });
        e[9] = __1;
        e[10] = v;
    } else {
        v = e[10];
    }
    let k;
    if (e[11] !== v) {
        k = <J level="body2" style={X.toLabel}>{v}</J>;
        e[11] = v;
        e[12] = k;
    } else {
        k = e[12];
    }
    let c;
    if (e[13] !== destination) {
        c = <J level="body2" style={X.destination} weight="medium"><bdi dir="ltr">{destination}</bdi></J>;
        e[13] = destination;
        e[14] = c;
    } else {
        c = e[14];
    }
    let u;
    if (e[15] !== k || e[16] !== c) {
        u = <div {...m}>{k}{c}</div>;
        e[15] = k;
        e[16] = c;
        e[17] = u;
    } else {
        u = e[17];
    }
    let w;
    if (e[18] !== request) {
        w = <J as="div" dir="auto" level="body2" style={X.request}>{request}</J>;
        e[18] = request;
        e[19] = w;
    } else {
        w = e[19];
    }
    let A;
    if (e[20] !== __1) {
        A = __1({
            id: "vKyPFY"
        });
        e[20] = __1;
        e[21] = A;
    } else {
        A = e[21];
    }
    let b;
    if (e[22] !== A) {
        b = <J as="div" level="body2" style={X.consequence}>{A}</J>;
        e[22] = A;
        e[23] = b;
    } else {
        b = e[23];
    }
    let body;
    if (e[24] !== b || e[25] !== u || e[26] !== w) {
        body = <>{u}{w}{b}</>;
        e[24] = b;
        e[25] = u;
        e[26] = w;
        e[27] = body;
    } else {
        body = e[27];
    }
    let leading;
    if (e[28] === Symbol.for("react.memo_cache_sentinel")) {
        leading = <I_1 name="headset" size="sm"/>;
        e[28] = leading;
    } else {
        leading = e[28];
    }
    let C;
    if (e[29] !== settledNote) {
        C = settledNote === undefined ? {} : {
            settledNote
        };
        e[29] = settledNote;
        e[30] = C;
    } else {
        C = e[30];
    }
    let I;
    if (e[31] !== answeredNote) {
        I = answeredNote === undefined ? {} : {
            answeredNote
        };
        e[31] = answeredNote;
        e[32] = I;
    } else {
        I = e[32];
    }
    let p;
    if (e[33] !== notice) {
        p = notice === undefined ? {} : {
            summary: notice
        };
        e[33] = notice;
        e[34] = p;
    } else {
        p = e[34];
    }
    let N;
    if (e[35] !== __1) {
        N = __1({
            id: "emKTy2"
        });
        e[35] = __1;
        e[36] = N;
    } else {
        N = e[36];
    }
    let _;
    if (e[37] !== entryId || e[38] !== l || e[39] !== body || e[40] !== C || e[41] !== I || e[42] !== p || e[43] !== N || e[44] !== d) {
        _ = <Le1 {...l} ariaLabel={d} body={body} entryId={entryId} leading={leading} {...C} {...I} {...p} title={N}/>;
        e[37] = entryId;
        e[38] = l;
        e[39] = body;
        e[40] = C;
        e[41] = I;
        e[42] = p;
        e[43] = N;
        e[44] = d;
        e[45] = _;
    } else {
        _ = e[45];
    }
    return _;
}
const Z = 340;
const ze = /[.!?\u2026\u3002\uFF01\uFF1F]+$/u;
function Fe(a, approval) {
    const summary = eA(approval).replace(ze, "");
    return a({
        id: "gNO4Vk",
        values: {
            summary
        }
    });
}
function Ge(a, command) {
    if (command.length <= Z) {
        return command;
    }
    const omitted = command.length - Z;
    return a({
        id: "pxPNa6",
        values: {
            0: command.slice(0, Z),
            omitted
        }
    });
}
function Le(a, e) {
    switch(e){
        case "pending":
            return a({
                id: "d3O6NK"
            });
        case "approved":
        case "always":
            return a({
                id: "z0ekBu"
            });
        case "denied":
            return a({
                id: "2rI1+N"
            });
        case "expired":
            return a({
                id: "TpP+jq"
            });
        default:
            return a({
                id: "d3O6NK"
            });
    }
}
function ie(a, e) {
    switch(e){
        case "approved":
            return {
                kind: "success",
                label: a({
                    id: "gk2v4K"
                })
            };
        case "always":
            return {
                kind: "success",
                label: a({
                    id: "gBhy/k"
                })
            };
        case "denied":
            return {
                kind: "danger",
                label: a({
                    id: "JsY1p5"
                })
            };
        case "expired":
            return {
                kind: "muted",
                label: a({
                    id: "M1RnFv"
                })
            };
        case "pending":
            return;
        default:
            return {
                kind: "muted",
                label: a({
                    id: "PS2Itk"
                })
            };
    }
}
function Be(a) {
    switch(a.status){
        case "ready":
            return a.value;
        case "loading":
        case "failed":
            return a.previous;
        case "empty":
        case "unavailable":
            return;
    }
}
function ne(a, e, allowRule) {
    if (e === "pending") {
        return;
    }
    if (e !== "always") {
        return a({
            id: "29OkUG"
        });
    }
    const base = a({
        id: "a8MGYp"
    });
    if (allowRule === undefined) {
        return base;
    }
    return a({
        id: "NP9SA4",
        values: {
            base,
            allowRule
        }
    });
}
function Ke(approval) {
    const e = approval.proposedRule?.trim();
    if (e === undefined || e.length === 0) {
        return;
    }
    const t = $e(e).replace(/\s+/g, " ").trim();
    if (t.length > 0) {
        return t;
    }
}
async function oe(autoReviewInstructions, e) {
    if (e === undefined) {
        return "approved";
    }
    try {
        await autoReviewInstructions.load();
        const t = Be(autoReviewInstructions.snapshots.get());
        if (t == null) {
            return "approved";
        }
        await autoReviewInstructions.setInstructions(eC(t, e));
        return "always";
    } catch (error) {
        if (!(error instanceof dd)) {
            bB(error);
        }
        return "approved";
    }
}
async function Ue(a) {
    const { agentId, entryId, requestId, resolution, loadAlwaysAllow, localAnswers, resolveAutoReviewApproval } = a;
    let r = resolution;
    if (resolution === "always") {
        r = await loadAlwaysAllow();
    }
    try {
        const S = await resolveAutoReviewApproval({
            entryId,
            requestId,
            resolution: r,
            agentId,
            approvalPlatform,
            ...a.sessionId.length > 0 ? {
                sessionId: a.sessionId
            } : {}
        });
        localAnswers.record("auto-review", {
            agentId,
            entryId
        }, S === "stale" ? "expired" : r);
    } catch  {
        localAnswers.clear("auto-review", {
            agentId,
            entryId
        });
    }
}
function Ce1Component(a) {
    Ce1Component.d = 457;
    const e = c_1.c(76);
    const { agentId, entryId, approval, groupChat } = a;
    const { _: __1 } = u_1();
    const [h, setH] = r.useState();
    const { resolveAutoReviewApproval } = bt();
    const o = b$(agentId);
    const sessionId = groupChat?.sessionId ?? o;
    const waitingOn = groupChat?.waitingOn;
    const d = b7();
    aU(d.autoReviewInstructions.load);
    const m = ew();
    let v;
    if (e[0] !== agentId || e[1] !== entryId) {
        v = {
            agentId,
            entryId
        };
        e[0] = agentId;
        e[1] = entryId;
        e[2] = v;
    } else {
        v = e[2];
    }
    const k = c1("auto-review", v);
    const c = approval.status !== "pending" ? approval.status : k ?? "pending";
    const u = c === "pending";
    const w = u && h === undefined && agentId != null && waitingOn === undefined;
    let detail;
    let b;
    let y;
    let actions;
    let C;
    let I;
    let answeredNote;
    if (e[3] !== __1 || e[4] !== agentId || e[5] !== approval || e[6] !== w || e[7] !== d.autoReviewInstructions || e[8] !== d.localAnswers || e[9] !== entryId || e[10] !== groupChat || e[11] !== m || e[12] !== u || e[13] !== resolveAutoReviewApproval || e[14] !== sessionId || e[15] !== c || e[16] !== h || e[17] !== waitingOn) {
        I = Symbol.for("react.early_return_sentinel");
        e: {
            const K = waitingOn === undefined ? {} : {
                tooltip: __1({
                    id: "wiJDLs",
                    values: {
                        waitingOn
                    }
                })
            };
            let U;
            if (e[25] !== __1 || e[26] !== u || e[27] !== waitingOn) {
                U = u && waitingOn !== undefined ? __1({
                    id: "wShbj+",
                    values: {
                        waitingOn
                    }
                }) : undefined;
                e[25] = __1;
                e[26] = u;
                e[27] = waitingOn;
                e[28] = U;
            } else {
                U = e[28];
            }
            answeredNote = U;
            const j = groupChat === undefined ? Ke(approval) : undefined;
            y = c === "expired" && j !== undefined;
            const te = j !== undefined && ex(m, j);
            const L = (M)=>{
                !w || agentId == null || d.localAnswers.get("auto-review", {
                    agentId,
                    entryId
                }) == null && (setH(M), Ue({
                    agentId,
                    entryId,
                    requestId: approval.requestId,
                    resolution: M,
                    sessionId,
                    loadAlwaysAllow: ()=>oe(d.autoReviewInstructions, j),
                    localAnswers: d.localAnswers,
                    resolveAutoReviewApproval
                }).then(()=>setH(undefined), (Q)=>{
                    d0(Q, {
                        tags: {
                            sand_area: "auto-review-approval"
                        }
                    });
                    setH(undefined);
                }));
            };
            const ue = ()=>{
                if (!(!y || te || h !== undefined)) {
                    setH("always");
                    oe(d.autoReviewInstructions, j).then(()=>setH(undefined), (M)=>{
                        d0(M, {
                            tags: {
                                sand_area: "auto-review-approval"
                            }
                        });
                        setH(undefined);
                    });
                }
            };
            let V;
            if (e[29] !== approval.summaryCopy) {
                V = ey(approval.summaryCopy);
                e[29] = approval.summaryCopy;
                e[30] = V;
            } else {
                V = e[30];
            }
            const se = V;
            if (se?.kind === "phone_call") {
                const M = ne(__1, c, j);
                const { destination, notice, request } = se.params;
                let W;
                if (e[31] !== answeredNote) {
                    W = answeredNote === undefined ? {} : {
                        answeredNote
                    };
                    e[31] = answeredNote;
                    e[32] = W;
                } else {
                    W = e[32];
                }
                let Y;
                if (e[33] !== notice) {
                    Y = notice === undefined ? {} : {
                        notice
                    };
                    e[33] = notice;
                    e[34] = Y;
                } else {
                    Y = e[34];
                }
                I = <De1Component {...u ? {
                    actions: [
                        {
                            label: __1({
                                id: "8hvxGX"
                            }),
                            onClick: ()=>L("approved"),
                            disabled: !w,
                            variant: "primary",
                            ...K
                        },
                        {
                            label: __1({
                                id: "4fBv6H"
                            }),
                            onClick: ()=>L("denied"),
                            disabled: !w,
                            ...K
                        }
                    ]
                } : {
                    status: ie(__1, c)
                }} {...W} destination={destination} entryId={entryId} {...Y} request={request} {...M === undefined ? {} : {
                    settledNote: M
                }}/>;
                break e;
            }
            const pe = {
                label: __1({
                    id: "NoKBgy"
                }),
                onClick: ()=>L("always"),
                disabled: !w,
                variant: "primary"
            };
            actions = [
                ...j === undefined ? [] : [
                    pe
                ],
                {
                    label: __1({
                        id: "pFfO26"
                    }),
                    onClick: ()=>L("approved"),
                    disabled: !w,
                    variant: j === undefined ? "primary" : "secondary",
                    ...K
                },
                {
                    label: __1({
                        id: "cFCKYZ"
                    }),
                    onClick: ()=>L("denied"),
                    disabled: !w,
                    variant: "tertiary",
                    ...K
                }
            ];
            let D;
            if (e[35] !== __1 || e[36] !== approval.command) {
                D = approval.command === undefined ? undefined : {
                    kind: "text",
                    text: Ge(__1, approval.command),
                    copyText: approval.command
                };
                e[35] = __1;
                e[36] = approval.command;
                e[37] = D;
            } else {
                D = e[37];
            }
            detail = D;
            b = te ? {
                label: __1({
                    id: "wHA55r"
                }),
                onClick: Ve,
                disabled: true,
                variant: "secondary",
                leadingIcon: "check"
            } : {
                label: __1({
                    id: "nKpP3+"
                }),
                onClick: ue,
                disabled: h !== undefined,
                variant: "secondary"
            };
            C = y ? undefined : ne(__1, c, j);
        }
        e[3] = __1;
        e[4] = agentId;
        e[5] = approval;
        e[6] = w;
        e[7] = d.autoReviewInstructions;
        e[8] = d.localAnswers;
        e[9] = entryId;
        e[10] = groupChat;
        e[11] = m;
        e[12] = u;
        e[13] = resolveAutoReviewApproval;
        e[14] = sessionId;
        e[15] = c;
        e[16] = h;
        e[17] = waitingOn;
        e[18] = detail;
        e[19] = b;
        e[20] = y;
        e[21] = actions;
        e[22] = C;
        e[23] = I;
        e[24] = answeredNote;
    } else {
        detail = e[18];
        b = e[19];
        y = e[20];
        actions = e[21];
        C = e[22];
        I = e[23];
        answeredNote = e[24];
    }
    if (I !== Symbol.for("react.early_return_sentinel")) {
        return I;
    }
    const N = C;
    let _;
    if (e[38] !== __1 || e[39] !== u || e[40] !== actions || e[41] !== c) {
        _ = u ? {
            actions
        } : {
            status: ie(__1, c)
        };
        e[38] = __1;
        e[39] = u;
        e[40] = actions;
        e[41] = c;
        e[42] = _;
    } else {
        _ = e[42];
    }
    let T;
    if (e[43] !== b || e[44] !== y) {
        T = y ? {
            settledActions: [
                b
            ]
        } : {};
        e[43] = b;
        e[44] = y;
        e[45] = T;
    } else {
        T = e[45];
    }
    let P;
    if (e[46] !== __1) {
        P = __1({
            id: "U3Kd/c"
        });
        e[46] = __1;
        e[47] = P;
    } else {
        P = e[47];
    }
    let description;
    if (e[48] !== __1 || e[49] !== approval) {
        description = Fe(__1, approval);
        e[48] = __1;
        e[49] = approval;
        e[50] = description;
    } else {
        description = e[50];
    }
    let label;
    if (e[51] !== __1) {
        label = __1({
            id: "5+TRII"
        });
        e[51] = __1;
        e[52] = label;
    } else {
        label = e[52];
    }
    let note;
    if (e[53] !== approval) {
        note = ez(approval);
        e[53] = approval;
        e[54] = note;
    } else {
        note = e[54];
    }
    let $;
    if (e[55] !== detail) {
        $ = detail === undefined ? {} : {
            detail
        };
        e[55] = detail;
        e[56] = $;
    } else {
        $ = e[56];
    }
    let disclosure;
    if (e[57] !== $ || e[58] !== label || e[59] !== note) {
        disclosure = {
            label,
            note,
            ...$
        };
        e[57] = $;
        e[58] = label;
        e[59] = note;
        e[60] = disclosure;
    } else {
        disclosure = e[60];
    }
    let F;
    if (e[61] !== N) {
        F = N === undefined ? {} : {
            settledNote: N
        };
        e[61] = N;
        e[62] = F;
    } else {
        F = e[62];
    }
    let G;
    if (e[63] !== __1 || e[64] !== c) {
        G = Le(__1, c);
        e[63] = __1;
        e[64] = c;
        e[65] = G;
    } else {
        G = e[65];
    }
    let B;
    if (e[66] !== entryId || e[67] !== disclosure || e[68] !== F || e[69] !== G || e[70] !== _ || e[71] !== T || e[72] !== P || e[73] !== description || e[74] !== answeredNote) {
        B = <Le1 {..._} {...T} answeredNote={answeredNote} ariaLabel={P} description={description} disclosure={disclosure} entryId={entryId} {...F} title={G}/>;
        e[66] = entryId;
        e[67] = disclosure;
        e[68] = F;
        e[69] = G;
        e[70] = _;
        e[71] = T;
        e[72] = P;
        e[73] = description;
        e[74] = answeredNote;
        e[75] = B;
    } else {
        B = e[75];
    }
    return B;
}
function Ve() {}
function DeComponent(a) {
    DeComponent.d = 310;
    const e = c_1.c(17);
    const { entry, adjacency } = a;
    const n = an();
    const { isReadOnly, viewerAuthId } = ah();
    const h = b9("grok_bot_group_chats");
    if (eD(entry)) {
        return null;
    }
    const { targeted } = entry;
    const S = targeted?.answerAt.agentId ?? n ?? undefined;
    const o = targeted?.forUser.authId === viewerAuthId ? undefined : targeted?.forUser.name;
    if (h && entry.message.approval.status === "pending" && o !== undefined) {
        let k;
        if (e[0] !== o) {
            k = <Ee name={o}/>;
            e[0] = o;
            e[1] = k;
        } else {
            k = e[1];
        }
        return k;
    }
    const agentId = isReadOnly ? undefined : S;
    let l;
    if (e[2] !== targeted || e[3] !== o) {
        l = targeted === undefined ? {} : {
            groupChat: {
                sessionId: targeted.answerAt.sessionId,
                waitingOn: o
            }
        };
        e[2] = targeted;
        e[3] = o;
        e[4] = l;
    } else {
        l = e[4];
    }
    let d;
    if (e[5] !== entry.id || e[6] !== entry.message.approval || e[7] !== agentId || e[8] !== l) {
        d = <Ce1Component agentId={agentId} approval={entry.message.approval} entryId={entry.id} {...l}/>;
        e[5] = entry.id;
        e[6] = entry.message.approval;
        e[7] = agentId;
        e[8] = l;
        e[9] = d;
    } else {
        d = e[9];
    }
    let m;
    if (e[10] !== adjacency.isGroupStart || e[11] !== entry.timestampMs || e[12] !== d) {
        m = <Qe className="sand-auto-review-approval-wrap" isGroupStart={adjacency.isGroupStart} timestampMs={entry.timestampMs} variant="widget">{d}</Qe>;
        e[10] = adjacency.isGroupStart;
        e[11] = entry.timestampMs;
        e[12] = d;
        e[13] = m;
    } else {
        m = e[13];
    }
    let v;
    if (e[14] !== entry || e[15] !== m) {
        v = <Oe entry={entry}>{m}</Oe>;
        e[14] = entry;
        e[15] = m;
        e[16] = v;
    } else {
        v = e[16];
    }
    return v;
}
export { DeComponent as default };
