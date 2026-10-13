export function yi(n) {
    if (!n?.trim()) {
        return {};
    }
    const e = {};
    const t = [];
    const r = n.replace(/["']([^"']*)["']/g, (c)=>{
        t.push(c);
        return `__QUOTED_${t.length - 1}__`;
    });
    const s = r.match(/(?:^|\s)\.([a-zA-Z][\w-]*)/g);
    if (s) {
        const c = s.map((u)=>u.trim().slice(1));
        e.class = c.join(" ");
    }
    const i = r.match(/(?:^|\s)#([a-zA-Z][\w-]*)/);
    if (i) {
        e.id = i[1];
    }
    const o = /([a-zA-Z][\w-]*)\s*=\s*(__QUOTED_\d+__)/g;
    Array.from(r.matchAll(o)).forEach(([, c, u])=>{
        var d;
        const f = parseInt(((d = u.match(/__QUOTED_(\d+)__/)) == null ? undefined : d[1]) || "0", 10);
        const h = t[f];
        if (h) {
            e[c] = h.slice(1, -1);
        }
    });
    const a = r.replace(/(?:^|\s)\.([a-zA-Z][\w-]*)/g, "").replace(/(?:^|\s)#([a-zA-Z][\w-]*)/g, "").replace(/([a-zA-Z][\w-]*)\s*=\s*__QUOTED_\d+__/g, "").trim();
    if (a) {
        a.split(/\s+/).filter(Boolean).forEach((u)=>{
            if (u.match(/^[a-zA-Z][\w-]*$/)) {
                e[u] = true;
            }
        });
    }
    return e;
}
export function ki(n) {
    if (!n || Object.keys(n).length === 0) {
        return "";
    }
    const e = [];
    if (n.class) {
        String(n.class).split(/\s+/).filter(Boolean).forEach((r)=>e.push(`.${r}`));
    }
    if (n.id) {
        e.push(`#${n.id}`);
    }
    Object.entries(n).forEach(([t, r])=>{
        t === "class" || t === "id" || (r === true ? e.push(t) : r !== false && r != null && e.push(`${t}="${String(r)}"`));
    });
    return e.join(" ");
}
export function jp(n) {
    const { nodeName, name, parseAttributes = yi, serializeAttributes = ki, defaultAttributes = {}, requiredAttributes = [], allowedAttributes } = n;
    const a = name || nodeName;
    const c = (u)=>{
        if (!allowedAttributes) {
            return u;
        }
        const d = {};
        allowedAttributes.forEach((f)=>{
            if (f in u) {
                d[f] = u[f];
            }
        });
        return d;
    };
    return {
        parseMarkdown: (u, d)=>{
            const f = {
                ...defaultAttributes,
                ...u.attributes
            };
            return d.createNode(nodeName, f, []);
        },
        markdownTokenizer: {
            name: nodeName,
            level: "block",
            start (u) {
                let d;
                const f = new RegExp(`^:::${a}(?:\\s|$)`, "m");
                const h = (d = u.match(f)) == null ? undefined : d.index;
                if (h !== undefined) {
                    return h;
                }
                return -1;
            },
            tokenize (u, d, f) {
                const h = new RegExp(`^:::${a}(?:\\s+\\{([^}]*)\\})?\\s*:::(?:\\n|$)`);
                const p = u.match(h);
                if (!p) {
                    return;
                }
                const m = p[1] || "";
                const g = parseAttributes(m);
                if (!requiredAttributes.find((b)=>!(b in g))) {
                    return {
                        type: nodeName,
                        raw: p[0],
                        attributes: g
                    };
                }
            }
        },
        renderMarkdown: (u)=>{
            const d = c(u.attrs || {});
            const f = serializeAttributes(d);
            const h = f ? ` {${f}}` : "";
            return `:::${a}${h} :::`;
        }
    };
}
export function _p(n) {
    const { nodeName, name, getContent, parseAttributes = yi, serializeAttributes = ki, defaultAttributes = {}, content = "block", allowedAttributes } = n;
    const c = name || nodeName;
    const u = (d)=>{
        if (!allowedAttributes) {
            return d;
        }
        const f = {};
        allowedAttributes.forEach((h)=>{
            if (h in d) {
                f[h] = d[h];
            }
        });
        return f;
    };
    return {
        parseMarkdown: (d, f)=>{
            let h;
            if (getContent) {
                const text = getContent(d);
                h = typeof text === "string" ? [
                    {
                        type: "text",
                        text
                    }
                ] : text;
            } else {
                if (content === "block") {
                    h = f.parseChildren(d.tokens || []);
                } else {
                    h = f.parseInline(d.tokens || []);
                }
            }
            const p = {
                ...defaultAttributes,
                ...d.attributes
            };
            return f.createNode(nodeName, p, h);
        },
        markdownTokenizer: {
            name: nodeName,
            level: "block",
            start (d) {
                let f;
                const h = new RegExp(`^:::${c}`, "m");
                const p = (f = d.match(h)) == null ? undefined : f.index;
                if (p !== undefined) {
                    return p;
                }
                return -1;
            },
            tokenize (d, f, h) {
                let p;
                const m = new RegExp(`^:::${c}(?:\\s+\\{([^}]*)\\})?\\s*\\n`);
                const g = d.match(m);
                if (!g) {
                    return;
                }
                const [y, b = ""] = g;
                const C = parseAttributes(b);
                let M = 1;
                const y_length = y.length;
                let content_1 = "";
                const E = /^:::([\w-]*)(\s.*)?/gm;
                const I = d.slice(y_length);
                for(E.lastIndex = 0;;){
                    const R = E.exec(I);
                    if (R === null) {
                        break;
                    }
                    const ae = R.index;
                    const St = R[1];
                    if (!((p = R[2]) != null && p.endsWith(":::"))) {
                        if (St) {
                            M += 1;
                        } else {
                            M -= 1;
                            if (M === 0) {
                                const $e = I.slice(0, ae);
                                content_1 = $e.trim();
                                const raw = d.slice(0, y_length + ae + R[0].length);
                                let tokens = [];
                                if (content_1) {
                                    if (content === "block") {
                                        tokens = h.blockTokens($e);
                                        tokens.forEach((ie)=>{
                                            if (ie.text && (!ie.tokens || ie.tokens.length === 0)) {
                                                ie.tokens = h.inlineTokens(ie.text);
                                            }
                                        });
                                        while(tokens.length > 0){
                                            const ie = tokens[tokens.length - 1];
                                            if (ie.type === "paragraph" && (!ie.text || ie.text.trim() === "")) {
                                                tokens.pop();
                                            } else {
                                                break;
                                            }
                                        }
                                    } else {
                                        tokens = h.inlineTokens(content_1);
                                    }
                                }
                                return {
                                    type: nodeName,
                                    raw,
                                    attributes: C,
                                    content: content_1,
                                    tokens
                                };
                            }
                        }
                    }
                }
            }
        },
        renderMarkdown: (d, f)=>{
            const h = u(d.attrs || {});
            const p = serializeAttributes(h);
            const m = p ? ` {${p}}` : "";
            const g = f.renderChildren(d.content || [], `

`);
            return `:::${c}${m}

${g}

:::`;
        }
    };
}
function Wp(n) {
    if (!n.trim()) {
        return {};
    }
    const e = {};
    const t = /(\w+)=(?:"([^"]*)"|'([^']*)')/g;
    let r = t.exec(n);
    while(r !== null){
        const [, s, i, o] = r;
        e[s] = i || o;
        r = t.exec(n);
    }
    return e;
}
function qp(n) {
    return Object.entries(n).filter(([, e])=>e != null).map(([e, t])=>`${e}="${t}"`).join(" ");
}
export function Kp(n) {
    const { nodeName, name, getContent, parseAttributes = Wp, serializeAttributes = qp, defaultAttributes = {}, selfClosing = false, allowedAttributes } = n;
    const c = name || nodeName;
    const u = (f)=>{
        if (!allowedAttributes) {
            return f;
        }
        const h = {};
        allowedAttributes.forEach((p)=>{
            const m = typeof p === "string" ? p : p.name;
            const g = typeof p === "string" ? undefined : p.skipIfDefault;
            if (m in f) {
                const y = f[m];
                if (g !== undefined && y === g) {
                    return;
                }
                h[m] = y;
            }
        });
        return h;
    };
    const d = c.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return {
        parseMarkdown: (f, h)=>{
            const p = {
                ...defaultAttributes,
                ...f.attributes
            };
            if (selfClosing) {
                return h.createNode(nodeName, p);
            }
            const m = getContent ? getContent(f) : f.content || "";
            if (m) {
                return h.createNode(nodeName, p, [
                    h.createTextNode(m)
                ]);
            }
            return h.createNode(nodeName, p, []);
        },
        markdownTokenizer: {
            name: nodeName,
            level: "inline",
            start (f) {
                const h = selfClosing ? new RegExp(`\\[${d}\\s*[^\\]]*\\]`) : new RegExp(`\\[${d}\\s*[^\\]]*\\][\\s\\S]*?\\[\\/${d}\\]`);
                const p = f.match(h);
                const m = p?.index;
                if (m !== undefined) {
                    return m;
                }
                return -1;
            },
            tokenize (f, h, p) {
                const m = selfClosing ? new RegExp(`^\\[${d}\\s*([^\\]]*)\\]`) : new RegExp(`^\\[${d}\\s*([^\\]]*)\\]([\\s\\S]*?)\\[\\/${d}\\]`);
                const g = f.match(m);
                if (!g) {
                    return;
                }
                let y = "";
                let b = "";
                if (selfClosing) {
                    const [, M] = g;
                    b = M;
                } else {
                    const [, M, S] = g;
                    b = M;
                    y = S || "";
                }
                const C = parseAttributes(b.trim());
                return {
                    type: nodeName,
                    raw: g[0],
                    content: y.trim(),
                    attributes: C
                };
            }
        },
        renderMarkdown: (f)=>{
            let h = "";
            if (getContent) {
                h = getContent(f);
            } else if (f.content && f.content.length > 0) {
                h = f.content.filter((y)=>y.type === "text").map((y)=>y.text).join("");
            }
            const p = u(f.attrs || {});
            const m = serializeAttributes(p);
            const g = m ? ` ${m}` : "";
            if (selfClosing) {
                return `[${c}${g}]`;
            }
            return `[${c}${g}]${h}[/${c}]`;
        }
    };
}
export function Rs(n, e, t) {
    let r;
    let s;
    let i;
    let o;
    const l = n.split(`
`);
    const items = [];
    let c = "";
    let u = 0;
    const d = e.baseIndentSize || 2;
    while(u < l.length){
        const f = l[u];
        const h = f.match(e.itemPattern);
        if (!h) {
            if (items.length > 0) {
                break;
            }
            if (f.trim() === "") {
                u += 1;
                c = `${c}${f}
`;
                continue;
            } else {
                return;
            }
        }
        const p = e.extractItemData(h);
        const { indentLevel, mainContent } = p;
        c = `${c}${f}
`;
        const y = [
            mainContent
        ];
        for(u += 1; u < l.length;){
            const S = l[u];
            if (S.trim() === "") {
                const E = l.slice(u + 1).findIndex((ae)=>ae.trim() !== "");
                if (E === -1) {
                    break;
                }
                if ((((s = (r = l[u + 1 + E].match(/^(\s*)/)) == null ? undefined : r[1]) == null ? undefined : s.length) || 0) > indentLevel) {
                    y.push(S);
                    c = `${c}${S}
`;
                    u += 1;
                    continue;
                } else {
                    break;
                }
            }
            if ((((o = (i = S.match(/^(\s*)/)) == null ? undefined : i[1]) == null ? undefined : o.length) || 0) > indentLevel) {
                y.push(S);
                c = `${c}${S}
`;
                u += 1;
            } else {
                break;
            }
        }
        let b;
        const C = y.slice(1);
        if (C.length > 0) {
            const S = C.map((A)=>A.slice(indentLevel + d)).join(`
`);
            S.trim() && (e.customNestedParser ? b = e.customNestedParser(S) : b = t.blockTokens(S));
        }
        const M = e.createToken(p, b);
        items.push(M);
    }
    if (items.length !== 0) {
        return {
            items,
            raw: c
        };
    }
}
export function bi(n, e, t, r) {
    if (!n || !Array.isArray(n.content)) {
        return "";
    }
    const s = typeof t === "function" ? t(r) : t;
    const [i, ...o] = n.content;
    const l = e.renderChildren([
        i
    ]);
    const a = [
        `${s}${l}`
    ];
    if (o && o.length > 0) {
        o.forEach((c)=>{
            const u = e.renderChildren([
                c
            ]);
            if (u) {
                const d = u.split(`
`).map((f)=>{
                    if (f) {
                        return e.indent(f);
                    }
                    return "";
                }).join(`
`);
                a.push(d);
            }
        });
    }
    return a.join(`
`);
}
export var Vp = {
    get createAtomBlockMarkdownSpec () {
        return jp;
    },
    get createBlockMarkdownSpec () {
        return _p;
    },
    get createInlineMarkdownSpec () {
        return Kp;
    },
    get parseAttributes () {
        return yi;
    },
    get parseIndentedBlocks () {
        return Rs;
    },
    get renderNestedMarkdownContent () {
        return bi;
    },
    get serializeAttributes () {
        return ki;
    }
};
