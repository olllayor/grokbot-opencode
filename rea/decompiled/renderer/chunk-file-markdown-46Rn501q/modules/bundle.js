import { c, p } from "./index.eager-vendor-Qbf9YA6n.js";
import { r as r_1, bb as urlTransform } from "./index.eager-app-Cj5f8Gby.js";
import { _, $, a0 as J, a1 as G, a2 as Q } from "./index-ZYxf-aBb.js";
import "./index.eager-platform-Dcfeegfw.js";
import { M, r as r_2, a, b as rehypePlugins, c as c_2, g } from "./chunk-markdown-math-D9a2zKdp.js";
import "./index.eager-common-CdCvBQNJ.js";
import "./chunk-index-C0dBjfzC.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "386589f7-c114-4ad2-9931-ef715555bc1b";
            e._sentryDebugIdIdentifier = "sentry-dbid-386589f7-c114-4ad2-9931-ef715555bc1b";
        }
    } catch (e) {}
})();
const r = {
    root: {
        k1xSpc: "sand-78zum5",
        kXwgrk: "sand-dt5ytf",
        k7Eaqz: "sand-euugli",
        kHjlTd: "sand-j0a0fe",
        $$css: true
    },
    documentRoot: {
        kOIVth: "sand-1oot3zn",
        kMwMTN: "sand-1wd3ewq",
        kGuDYH: "sand-1jvydc1",
        kLWn49: "sand-1dbl2gt",
        $$css: true
    },
    leaf: {
        keoZOQ: "sand-dj266r",
        k1K539: "sand-at24cr",
        $$css: true
    },
    firstRootElement: {
        keoZOQ: "sand-dj266r",
        $$css: true
    },
    link: {
        kMwMTN: "sand-l1v4ol",
        kMnn75: "sand-krqix3 sand-1sur9pj",
        $$css: true
    },
    list: {
        kpqbRz: "sand-43c9pm",
        $$css: true
    },
    documentList: {
        kZCmMZ: "sand-1gycotm",
        $$css: true
    },
    documentNestedList: {
        keoZOQ: "sand-1om1abp",
        kZCmMZ: "sand-92arao",
        $$css: true
    },
    unorderedListDisc: {
        kH6xsr: "sand-taz4m5",
        $$css: true
    },
    unorderedListCircle: {
        kH6xsr: "sand-rylv2j",
        $$css: true
    },
    unorderedListSquare: {
        kH6xsr: "sand-152237o",
        $$css: true
    },
    taskList: {
        kZCmMZ: "sand-22095l",
        kH6xsr: "sand-3ct3a4",
        $$css: true
    },
    documentCodeBlockText: {
        kGuDYH: "sand-11wthnw",
        $$css: true
    },
    pre: {
        k8WAf4: "sand-12ffz05",
        kg3NbH: "sand-1m31zm8",
        kaIpWk: "sand-ur7f20",
        kWkggS: "sand-1ciwos8",
        kMwMTN: "sand-19aaqeu",
        kLWn49: "sand-1evy7pa",
        $$css: true
    },
    codeFallback: {
        k8WAf4: "sand-12ffz05",
        kg3NbH: "sand-1m31zm8",
        kaIpWk: "sand-ur7f20",
        kWkggS: "sand-1ciwos8",
        kMwMTN: "sand-19aaqeu",
        kMv6JI: "sand-67nlm8",
        kLWn49: "sand-1evy7pa",
        $$css: true
    },
    documentBlockquoteChild: {
        keoZOQ: "sand-1e66mq1",
        $$css: true
    },
    image: {
        ks0D6T: "sand-193iq5w",
        kZKoxP: "sand-t7dq6l",
        kaIpWk: "sand-1043rbw",
        $$css: true
    }
};
const remarkPlugins = [
    [
        r_2,
        {
            singleTilde: false
        }
    ],
    ...a
];
function v(unordered) {
    switch(unordered){
        case 0:
            return r.unorderedListDisc;
        case 1:
            return r.unorderedListCircle;
        default:
            return r.unorderedListSquare;
    }
}
function TComponent() {
    return {
        h1 ({ node, children, ...rest }) {
            components.h1.d = 621;
            const s = g(node);
            return <h1 {...rest} {...{
                0: {
                    className: "sand-at24cr sand-1wd3ewq sand-xzm5a7 sand-wn7fz2 sand-1p0p6hz sand-1shq6nw sand-1hi0czg"
                },
                2: {
                    className: "sand-at24cr sand-1wd3ewq sand-xzm5a7 sand-wn7fz2 sand-1shq6nw sand-1hi0czg sand-1e66mq1"
                },
                1: {
                    className: "sand-at24cr sand-1wd3ewq sand-xzm5a7 sand-wn7fz2 sand-1shq6nw sand-1hi0czg sand-dj266r"
                },
                3: {
                    className: "sand-at24cr sand-1wd3ewq sand-xzm5a7 sand-wn7fz2 sand-1shq6nw sand-1hi0czg sand-dj266r"
                }
            }[(s.parentTag === "blockquote" && !s.elementSibling.isFirst) << 1 | !!(s.parentTag === null && s.elementSibling.isFirst) << 0]}>{children}</h1>;
        },
        h2 ({ node, children, ...rest }) {
            components.h2.d = 622;
            const s = g(node);
            return <h2 {...rest} {...{
                0: {
                    className: "sand-at24cr sand-1wd3ewq sand-xzm5a7 sand-wn7fz2 sand-1x419k1 sand-ylt984 sand-1deyeav"
                },
                2: {
                    className: "sand-at24cr sand-1wd3ewq sand-xzm5a7 sand-wn7fz2 sand-ylt984 sand-1deyeav sand-1e66mq1"
                },
                1: {
                    className: "sand-at24cr sand-1wd3ewq sand-xzm5a7 sand-wn7fz2 sand-ylt984 sand-1deyeav sand-dj266r"
                },
                3: {
                    className: "sand-at24cr sand-1wd3ewq sand-xzm5a7 sand-wn7fz2 sand-ylt984 sand-1deyeav sand-dj266r"
                }
            }[(s.parentTag === "blockquote" && !s.elementSibling.isFirst) << 1 | !!(s.parentTag === null && s.elementSibling.isFirst) << 0]}>{children}</h2>;
        },
        h3 ({ node, children, ...rest }) {
            components.h3.d = 623;
            const s = g(node);
            return <h3 {...rest} {...{
                0: {
                    className: "sand-at24cr sand-1wd3ewq sand-xzm5a7 sand-wn7fz2 sand-19snzy6 sand-nc0k7y"
                },
                2: {
                    className: "sand-at24cr sand-1wd3ewq sand-xzm5a7 sand-wn7fz2 sand-nc0k7y sand-1e66mq1"
                },
                1: {
                    className: "sand-at24cr sand-1wd3ewq sand-xzm5a7 sand-wn7fz2 sand-nc0k7y sand-dj266r"
                },
                3: {
                    className: "sand-at24cr sand-1wd3ewq sand-xzm5a7 sand-wn7fz2 sand-nc0k7y sand-dj266r"
                }
            }[(s.parentTag === "blockquote" && !s.elementSibling.isFirst) << 1 | !!(s.parentTag === null && s.elementSibling.isFirst) << 0]}>{children}</h3>;
        },
        h4 ({ node, children, ...rest }) {
            components.h4.d = 624;
            const s = g(node);
            return <h4 {...rest} {...{
                0: {
                    className: "sand-at24cr sand-1wd3ewq sand-xzm5a7 sand-wn7fz2 sand-1e66mq1 sand-rv4cvt"
                },
                2: {
                    className: "sand-at24cr sand-1wd3ewq sand-xzm5a7 sand-wn7fz2 sand-rv4cvt sand-1e66mq1"
                },
                1: {
                    className: "sand-at24cr sand-1wd3ewq sand-xzm5a7 sand-wn7fz2 sand-rv4cvt sand-dj266r"
                },
                3: {
                    className: "sand-at24cr sand-1wd3ewq sand-xzm5a7 sand-wn7fz2 sand-rv4cvt sand-dj266r"
                }
            }[(s.parentTag === "blockquote" && !s.elementSibling.isFirst) << 1 | !!(s.parentTag === null && s.elementSibling.isFirst) << 0]}>{children}</h4>;
        },
        h5 ({ node, children, ...rest }) {
            components.h5.d = 625;
            const s = g(node);
            return <h5 {...rest} {...{
                0: {
                    className: "sand-at24cr sand-1wd3ewq sand-xzm5a7 sand-wn7fz2 sand-1e66mq1 sand-rv4cvt"
                },
                2: {
                    className: "sand-at24cr sand-1wd3ewq sand-xzm5a7 sand-wn7fz2 sand-rv4cvt sand-1e66mq1"
                },
                1: {
                    className: "sand-at24cr sand-1wd3ewq sand-xzm5a7 sand-wn7fz2 sand-rv4cvt sand-dj266r"
                },
                3: {
                    className: "sand-at24cr sand-1wd3ewq sand-xzm5a7 sand-wn7fz2 sand-rv4cvt sand-dj266r"
                }
            }[(s.parentTag === "blockquote" && !s.elementSibling.isFirst) << 1 | !!(s.parentTag === null && s.elementSibling.isFirst) << 0]}>{children}</h5>;
        },
        h6 ({ node, children, ...rest }) {
            components.h6.d = 626;
            const s = g(node);
            return <h6 {...rest} {...{
                0: {
                    className: "sand-at24cr sand-1wd3ewq sand-xzm5a7 sand-wn7fz2 sand-1e66mq1 sand-rv4cvt"
                },
                2: {
                    className: "sand-at24cr sand-1wd3ewq sand-xzm5a7 sand-wn7fz2 sand-rv4cvt sand-1e66mq1"
                },
                1: {
                    className: "sand-at24cr sand-1wd3ewq sand-xzm5a7 sand-wn7fz2 sand-rv4cvt sand-dj266r"
                },
                3: {
                    className: "sand-at24cr sand-1wd3ewq sand-xzm5a7 sand-wn7fz2 sand-rv4cvt sand-dj266r"
                }
            }[(s.parentTag === "blockquote" && !s.elementSibling.isFirst) << 1 | !!(s.parentTag === null && s.elementSibling.isFirst) << 0]}>{children}</h6>;
        },
        p ({ node, children, ...rest }) {
            components.p.d = 632;
            const s = g(node);
            return <p {...rest} {...{
                0: {
                    className: "sand-dj266r sand-at24cr"
                },
                4: {
                    className: "sand-at24cr sand-1mdx765"
                },
                2: {
                    className: "sand-at24cr sand-1e66mq1"
                },
                6: {
                    className: "sand-at24cr sand-1e66mq1"
                },
                1: {
                    className: "sand-at24cr sand-dj266r"
                },
                5: {
                    className: "sand-at24cr sand-dj266r"
                },
                3: {
                    className: "sand-at24cr sand-dj266r"
                },
                7: {
                    className: "sand-at24cr sand-dj266r"
                }
            }[!!(s.parentTag === "li" && s.followsParagraph) << 2 | (s.parentTag === "blockquote" && !s.elementSibling.isFirst) << 1 | !!(s.parentTag === null && s.elementSibling.isFirst) << 0]}>{children}</p>;
        },
        a ({ node, children, href, ...rest }) {
            components.a.d = 615;
            g(node);
            return <Q anchorStyle={[
                r.leaf,
                r.link
            ]} href={href} {...rest}>{children}</Q>;
        },
        blockquote ({ node, children, ...rest }) {
            components.blockquote.d = 616;
            const s = g(node);
            return <blockquote {...rest} {...{
                0: {
                    className: "sand-dj266r sand-at24cr sand-rxpjvj sand-yumdvf sand-1t7ytsu sand-72uvru sand-19aaqeu sand-11jd7i5 sand-7ru5ko"
                },
                2: {
                    className: "sand-at24cr sand-rxpjvj sand-yumdvf sand-1t7ytsu sand-72uvru sand-19aaqeu sand-11jd7i5 sand-7ru5ko sand-1e66mq1"
                },
                1: {
                    className: "sand-at24cr sand-rxpjvj sand-yumdvf sand-1t7ytsu sand-72uvru sand-19aaqeu sand-11jd7i5 sand-7ru5ko sand-dj266r"
                },
                3: {
                    className: "sand-at24cr sand-rxpjvj sand-yumdvf sand-1t7ytsu sand-72uvru sand-19aaqeu sand-11jd7i5 sand-7ru5ko sand-dj266r"
                }
            }[(s.parentTag === "blockquote" && !s.elementSibling.isFirst) << 1 | !!(s.parentTag === null && s.elementSibling.isFirst) << 0]}>{children}</blockquote>;
        },
        br ({ node, ...rest }) {
            components.br.d = 617;
            g(node);
            return <br {...rest} className="sand-dj266r sand-at24cr"/>;
        },
        code ({ node, children, className, ...rest }) {
            components.code.d = 618;
            const e = g(node);
            const m = {
                0: {
                    className: "sand-dj266r sand-at24cr sand-67nlm8 sand-1gojbwh sand-12oo3zp"
                },
                2: {
                    className: "sand-dj266r sand-at24cr sand-67nlm8 sand-1gojbwh sand-12oo3zp sand-19aaqeu"
                },
                1: {
                    className: "sand-dj266r sand-at24cr sand-67nlm8 sand-12oo3zp sand-11wthnw"
                },
                3: {
                    className: "sand-dj266r sand-at24cr sand-67nlm8 sand-12oo3zp sand-19aaqeu sand-11wthnw"
                }
            }[(e.parentTag === "pre") << 1 | (e.parentTag === "pre") << 0];
            return <code {...rest} className={r_1(className, m.className)} style={m.style}>{children}</code>;
        },
        del ({ node, children, ...rest }) {
            components.del.d = 619;
            g(node);
            return <del {...rest} className="sand-dj266r sand-at24cr sand-4b2ntj">{children}</del>;
        },
        em ({ node, children, ...rest }) {
            components.em.d = 620;
            g(node);
            return <em {...rest} className="sand-dj266r sand-at24cr">{children}</em>;
        },
        hr ({ node, ...rest }) {
            components.hr.d = 627;
            const n = g(node);
            return <hr {...rest} {...{
                0: {
                    className: "sand-178xt8z sand-13fuv20 sand-2kampu sand-18oe1m7 sand-1sy0etr sand-stzfhl sand-1mdx765 sand-8kmwxx"
                },
                2: {
                    className: "sand-178xt8z sand-13fuv20 sand-2kampu sand-18oe1m7 sand-1sy0etr sand-stzfhl sand-8kmwxx sand-1e66mq1"
                },
                1: {
                    className: "sand-178xt8z sand-13fuv20 sand-2kampu sand-18oe1m7 sand-1sy0etr sand-stzfhl sand-8kmwxx sand-dj266r"
                },
                3: {
                    className: "sand-178xt8z sand-13fuv20 sand-2kampu sand-18oe1m7 sand-1sy0etr sand-stzfhl sand-8kmwxx sand-dj266r"
                }
            }[(n.parentTag === "blockquote" && !n.elementSibling.isFirst) << 1 | !!(n.parentTag === null && n.elementSibling.isFirst) << 0]}/>;
        },
        img ({ node, src, alt }) {
            components.img.d = 628;
            const s = g(node);
            if (typeof src !== "string" || src.length === 0) {
                return null;
            }
            return <G accessibleName={alt} imageStyle={[
                r.leaf,
                r.image
            ]} rootStyle={[
                r.leaf,
                s.parentTag === "blockquote" && !s.elementSibling.isFirst && r.documentBlockquoteChild,
                s.parentTag === null && s.elementSibling.isFirst && r.firstRootElement
            ]} url={src}/>;
        },
        input ({ node, ...rest }) {
            components.input.d = 629;
            const n = g(node);
            if (n.task.kind === "checkbox") {
                return <J isChecked={n.task.checked}/>;
            }
            return <input {...rest} className="sand-dj266r sand-at24cr"/>;
        },
        li ({ node, children, className, ...rest }) {
            components.li.d = 630;
            const e = g(node);
            const m = {
                0: {
                    className: "sand-dj266r sand-at24cr sand-1xnkbjl"
                },
                1: {
                    className: "sand-at24cr sand-1xnkbjl sand-1om1abp"
                }
            }[(!e.elementSibling.isFirst && (e.parentTag === "ul" || e.parentTag === "ol")) << 0];
            return <li {...rest} className={r_1(className, m.className)} style={m.style}>{children}</li>;
        },
        ol ({ node, children, className, ...rest }) {
            components.ol.d = 631;
            const e = g(node);
            const m = {
                0: {
                    className: "sand-dj266r sand-at24cr sand-43c9pm sand-1gycotm sand-3yw8vx"
                },
                4: {
                    className: "sand-at24cr sand-43c9pm sand-3yw8vx sand-1om1abp sand-92arao"
                },
                2: {
                    className: "sand-at24cr sand-43c9pm sand-1gycotm sand-3yw8vx sand-1e66mq1"
                },
                6: {
                    className: "sand-at24cr sand-43c9pm sand-3yw8vx sand-92arao sand-1e66mq1"
                },
                1: {
                    className: "sand-at24cr sand-43c9pm sand-1gycotm sand-3yw8vx sand-dj266r"
                },
                5: {
                    className: "sand-at24cr sand-43c9pm sand-3yw8vx sand-92arao sand-dj266r"
                },
                3: {
                    className: "sand-at24cr sand-43c9pm sand-1gycotm sand-3yw8vx sand-dj266r"
                },
                7: {
                    className: "sand-at24cr sand-43c9pm sand-3yw8vx sand-92arao sand-dj266r"
                }
            }[(e.parentTag === "li") << 2 | (e.parentTag === "blockquote" && !e.elementSibling.isFirst) << 1 | !!(e.parentTag === null && e.elementSibling.isFirst) << 0];
            return <ol {...rest} className={r_1(className, m.className)} style={m.style}>{children}</ol>;
        },
        pre ({ node, ...rest }) {
            components.pre.d = 633;
            const n = g(node);
            const s = n.parentTag === "blockquote" && !n.elementSibling.isFirst;
            const e = n.parentTag === null && n.elementSibling.isFirst;
            return <$ {...rest} codeBlockStyle={[
                r.leaf,
                s && r.documentBlockquoteChild
            ]} fallbackStyle={[
                r.leaf,
                r.codeFallback,
                r.documentCodeBlockText,
                s && r.documentBlockquoteChild,
                e && r.firstRootElement
            ]} node={node} preStyle={[
                r.leaf,
                r.pre,
                s && r.documentBlockquoteChild,
                e && r.firstRootElement
            ]}/>;
        },
        span: c_2,
        strong ({ node, children, ...rest }) {
            components.strong.d = 634;
            g(node);
            return <strong {...rest} className="sand-dj266r sand-at24cr sand-xzm5a7">{children}</strong>;
        },
        table ({ node, children, ...rest }) {
            components.table.d = 635;
            const s = g(node);
            const e = {
                0: {
                    className: "sand-dj266r sand-at24cr sand-193iq5w sand-w2csxc"
                },
                2: {
                    className: "sand-at24cr sand-193iq5w sand-w2csxc sand-1e66mq1"
                },
                1: {
                    className: "sand-at24cr sand-193iq5w sand-w2csxc sand-dj266r"
                },
                3: {
                    className: "sand-at24cr sand-193iq5w sand-w2csxc sand-dj266r"
                }
            }[(s.parentTag === "blockquote" && !s.elementSibling.isFirst) << 1 | !!(s.parentTag === null && s.elementSibling.isFirst) << 0];
            return <div className={r_1("sand-file-markdown__table-scroll", e.className)} style={e.style}><table {...rest} className="sand-dj266r sand-at24cr sand-1mwwwfo sand-1gojbwh">{children}</table></div>;
        },
        tbody ({ node, children, ...rest }) {
            components.tbody.d = 636;
            g(node);
            return <tbody {...rest} className="sand-dj266r sand-at24cr">{children}</tbody>;
        },
        td ({ node, children, ...rest }) {
            components.td.d = 637;
            const s = g(node);
            return <td {...rest} {...{
                0: {
                    className: "sand-dj266r sand-at24cr sand-so031l sand-1q0q8m5 sand-17fyfba sand-1yc453h sand-16dsc37 sand-19aaqeu sand-1lqmthn sand-1m31zm8"
                },
                1: {
                    className: "sand-dj266r sand-at24cr sand-17fyfba sand-1yc453h sand-16dsc37 sand-19aaqeu sand-1lqmthn sand-1m31zm8 sand-1qhh985 sand-1sy0etr"
                }
            }[!!s.isFinalBodyRow << 0]}>{children}</td>;
        },
        th ({ node, children, ...rest }) {
            components.th.d = 638;
            g(node);
            return <th {...rest} className="sand-dj266r sand-at24cr sand-so031l sand-1q0q8m5 sand-17fyfba sand-1yc453h sand-16dsc37 sand-1lqmthn sand-1m31zm8 sand-1rhlpx6 sand-1wd3ewq">{children}</th>;
        },
        thead ({ node, children, ...rest }) {
            components.thead.d = 639;
            g(node);
            return <thead {...rest} className="sand-dj266r sand-at24cr">{children}</thead>;
        },
        tr ({ node, children, ...rest }) {
            components.tr.d = 640;
            g(node);
            return <tr {...rest} className="sand-dj266r sand-at24cr">{children}</tr>;
        },
        ul ({ node, children, className, ...rest }) {
            components.ul.d = 641;
            const e = g(node);
            const m = p(r.leaf, r.list, r.documentList, v(e.listDepth.unordered), e.parentTag === "li" && r.documentNestedList, e.task.kind === "list" && r.taskList, e.parentTag === "blockquote" && !e.elementSibling.isFirst && r.documentBlockquoteChild, e.parentTag === null && e.elementSibling.isFirst && r.firstRootElement);
            return <ul {...rest} className={r_1(className, m.className)} style={m.style}>{children}</ul>;
        }
    };
}
const components = TComponent();
export function FileMarkdown(d) {
    FileMarkdown.d = 642;
    const a = c.c(7);
    const { text, rootStyle } = d;
    let className;
    if (a[0] !== rootStyle) {
        className = r_1("sand-file-markdown", "sand-file-markdown--document", p(r.root, r.documentRoot, rootStyle).className);
        a[0] = rootStyle;
        a[1] = className;
    } else {
        className = a[1];
    }
    let m;
    if (a[2] !== text) {
        m = <_ isTrusted={false}><M components={components} rehypePlugins={rehypePlugins} remarkPlugins={remarkPlugins} urlTransform={urlTransform}>{text}</M></_>;
        a[2] = text;
        a[3] = m;
    } else {
        m = a[3];
    }
    let i;
    if (a[4] !== className || a[5] !== m) {
        i = <div className={className}>{m}</div>;
        a[4] = className;
        a[5] = m;
        a[6] = i;
    } else {
        i = a[6];
    }
    return i;
}
