declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "386589f7-c114-4ad2-9931-ef715555bc1b", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-386589f7-c114-4ad2-9931-ef715555bc1b");
  } catch (e: any) {}
} as any)();
import { c as w, p as u, j as t } from "./index.eager-vendor-Qbf9YA6n.js";
import { r as o, bb as k } from "./index.eager-app-Cj5f8Gby.js";
import { _ as p, $ as x, a0 as j, a1 as g, a2 as q } from "./index-ZYxf-aBb.js";
import "./index.eager-platform-Dcfeegfw.js";
import { M as N, r as f, a as b, b as z, c as h, g as l } from "./chunk-markdown-math-D9a2zKdp.js";
import "./index.eager-common-CdCvBQNJ.js";
import "./chunk-index-C0dBjfzC.js";
const r: any = {
    root: {
      k1xSpc: "sand-78zum5",
      kXwgrk: "sand-dt5ytf",
      k7Eaqz: "sand-euugli",
      kHjlTd: "sand-j0a0fe",
      $$css: !0
    },
    documentRoot: {
      kOIVth: "sand-1oot3zn",
      kMwMTN: "sand-1wd3ewq",
      kGuDYH: "sand-1jvydc1",
      kLWn49: "sand-1dbl2gt",
      $$css: !0
    },
    leaf: {
      keoZOQ: "sand-dj266r",
      k1K539: "sand-at24cr",
      $$css: !0
    },
    firstRootElement: {
      keoZOQ: "sand-dj266r",
      $$css: !0
    },
    link: {
      kMwMTN: "sand-l1v4ol",
      kMnn75: "sand-krqix3 sand-1sur9pj",
      $$css: !0
    },
    list: {
      kpqbRz: "sand-43c9pm",
      $$css: !0
    },
    documentList: {
      kZCmMZ: "sand-1gycotm",
      $$css: !0
    },
    documentNestedList: {
      keoZOQ: "sand-1om1abp",
      kZCmMZ: "sand-92arao",
      $$css: !0
    },
    unorderedListDisc: {
      kH6xsr: "sand-taz4m5",
      $$css: !0
    },
    unorderedListCircle: {
      kH6xsr: "sand-rylv2j",
      $$css: !0
    },
    unorderedListSquare: {
      kH6xsr: "sand-152237o",
      $$css: !0
    },
    taskList: {
      kZCmMZ: "sand-22095l",
      kH6xsr: "sand-3ct3a4",
      $$css: !0
    },
    documentCodeBlockText: {
      kGuDYH: "sand-11wthnw",
      $$css: !0
    },
    pre: {
      k8WAf4: "sand-12ffz05",
      kg3NbH: "sand-1m31zm8",
      kaIpWk: "sand-ur7f20",
      kWkggS: "sand-1ciwos8",
      kMwMTN: "sand-19aaqeu",
      kLWn49: "sand-1evy7pa",
      $$css: !0
    },
    codeFallback: {
      k8WAf4: "sand-12ffz05",
      kg3NbH: "sand-1m31zm8",
      kaIpWk: "sand-ur7f20",
      kWkggS: "sand-1ciwos8",
      kMwMTN: "sand-19aaqeu",
      kMv6JI: "sand-67nlm8",
      kLWn49: "sand-1evy7pa",
      $$css: !0
    },
    documentBlockquoteChild: {
      keoZOQ: "sand-1e66mq1",
      $$css: !0
    },
    image: {
      ks0D6T: "sand-193iq5w",
      kZKoxP: "sand-t7dq6l",
      kaIpWk: "sand-1043rbw",
      $$css: !0
    }
  },
  y: any = [[f, {
    singleTilde: !1
  }], ...b];
function v(this: any, d: any): any {
  return (d as any) === (0 as any) ? (r as any).unorderedListDisc : (d as any) === (1 as any) ? (r as any).unorderedListCircle : (r as any).unorderedListSquare;
}
function T(this: any): any {
  return {
    h1({
      node: d,
      children: a,
      ...n
    }: any): any {
      ((c as any).h1 as any).d = 621;
      const s: any = (l as any)(d);
      return ((t as any).jsx as any)("h1", {
        ...n,
        ...({
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
        } as any)[(((((s as any).parentTag as any) === ("blockquote" as any) && !((s as any).elementSibling as any).isFirst) as any) << (1 as any) as any) | ((!!(((s as any).parentTag as any) === (null as any) && ((s as any).elementSibling as any).isFirst) as any) << (0 as any) as any)],
        children: a
      });
    },
    h2({
      node: d,
      children: a,
      ...n
    }: any): any {
      ((c as any).h2 as any).d = 622;
      const s: any = (l as any)(d);
      return ((t as any).jsx as any)("h2", {
        ...n,
        ...({
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
        } as any)[(((((s as any).parentTag as any) === ("blockquote" as any) && !((s as any).elementSibling as any).isFirst) as any) << (1 as any) as any) | ((!!(((s as any).parentTag as any) === (null as any) && ((s as any).elementSibling as any).isFirst) as any) << (0 as any) as any)],
        children: a
      });
    },
    h3({
      node: d,
      children: a,
      ...n
    }: any): any {
      ((c as any).h3 as any).d = 623;
      const s: any = (l as any)(d);
      return ((t as any).jsx as any)("h3", {
        ...n,
        ...({
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
        } as any)[(((((s as any).parentTag as any) === ("blockquote" as any) && !((s as any).elementSibling as any).isFirst) as any) << (1 as any) as any) | ((!!(((s as any).parentTag as any) === (null as any) && ((s as any).elementSibling as any).isFirst) as any) << (0 as any) as any)],
        children: a
      });
    },
    h4({
      node: d,
      children: a,
      ...n
    }: any): any {
      ((c as any).h4 as any).d = 624;
      const s: any = (l as any)(d);
      return ((t as any).jsx as any)("h4", {
        ...n,
        ...({
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
        } as any)[(((((s as any).parentTag as any) === ("blockquote" as any) && !((s as any).elementSibling as any).isFirst) as any) << (1 as any) as any) | ((!!(((s as any).parentTag as any) === (null as any) && ((s as any).elementSibling as any).isFirst) as any) << (0 as any) as any)],
        children: a
      });
    },
    h5({
      node: d,
      children: a,
      ...n
    }: any): any {
      ((c as any).h5 as any).d = 625;
      const s: any = (l as any)(d);
      return ((t as any).jsx as any)("h5", {
        ...n,
        ...({
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
        } as any)[(((((s as any).parentTag as any) === ("blockquote" as any) && !((s as any).elementSibling as any).isFirst) as any) << (1 as any) as any) | ((!!(((s as any).parentTag as any) === (null as any) && ((s as any).elementSibling as any).isFirst) as any) << (0 as any) as any)],
        children: a
      });
    },
    h6({
      node: d,
      children: a,
      ...n
    }: any): any {
      ((c as any).h6 as any).d = 626;
      const s: any = (l as any)(d);
      return ((t as any).jsx as any)("h6", {
        ...n,
        ...({
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
        } as any)[(((((s as any).parentTag as any) === ("blockquote" as any) && !((s as any).elementSibling as any).isFirst) as any) << (1 as any) as any) | ((!!(((s as any).parentTag as any) === (null as any) && ((s as any).elementSibling as any).isFirst) as any) << (0 as any) as any)],
        children: a
      });
    },
    p({
      node: d,
      children: a,
      ...n
    }: any): any {
      ((c as any).p as any).d = 632;
      const s: any = (l as any)(d);
      return ((t as any).jsx as any)("p", {
        ...n,
        ...({
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
        } as any)[((((!!(((s as any).parentTag as any) === ("li" as any) && (s as any).followsParagraph) as any) << (2 as any) as any) | (((((s as any).parentTag as any) === ("blockquote" as any) && !((s as any).elementSibling as any).isFirst) as any) << (1 as any) as any)) as any) | ((!!(((s as any).parentTag as any) === (null as any) && ((s as any).elementSibling as any).isFirst) as any) << (0 as any) as any)],
        children: a
      });
    },
    a({
      node: d,
      children: a,
      href: n,
      ...s
    }: any): any {
      return ((c as any).a as any).d = 615, (l as any)(d), ((t as any).jsx as any)(q, {
        anchorStyle: [(r as any).leaf, (r as any).link],
        href: n,
        ...s,
        children: a
      });
    },
    blockquote({
      node: d,
      children: a,
      ...n
    }: any): any {
      ((c as any).blockquote as any).d = 616;
      const s: any = (l as any)(d);
      return ((t as any).jsx as any)("blockquote", {
        ...n,
        ...({
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
        } as any)[(((((s as any).parentTag as any) === ("blockquote" as any) && !((s as any).elementSibling as any).isFirst) as any) << (1 as any) as any) | ((!!(((s as any).parentTag as any) === (null as any) && ((s as any).elementSibling as any).isFirst) as any) << (0 as any) as any)],
        children: a
      });
    },
    br({
      node: d,
      ...a
    }: any): any {
      return ((c as any).br as any).d = 617, (l as any)(d), ((t as any).jsx as any)("br", {
        ...a,
        className: "sand-dj266r sand-at24cr"
      });
    },
    code({
      node: d,
      children: a,
      className: n,
      ...s
    }: any): any {
      ((c as any).code as any).d = 618;
      const e: any = (l as any)(d),
        m: any = ({
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
        } as any)[(((((e as any).parentTag as any) === ("pre" as any)) as any) << (1 as any) as any) | (((((e as any).parentTag as any) === ("pre" as any)) as any) << (0 as any) as any)];
      return ((t as any).jsx as any)("code", {
        ...s,
        className: (o as any)(n, (m as any).className),
        style: (m as any).style,
        children: a
      });
    },
    del({
      node: d,
      children: a,
      ...n
    }: any): any {
      return ((c as any).del as any).d = 619, (l as any)(d), ((t as any).jsx as any)("del", {
        ...n,
        className: "sand-dj266r sand-at24cr sand-4b2ntj",
        children: a
      });
    },
    em({
      node: d,
      children: a,
      ...n
    }: any): any {
      return ((c as any).em as any).d = 620, (l as any)(d), ((t as any).jsx as any)("em", {
        ...n,
        className: "sand-dj266r sand-at24cr",
        children: a
      });
    },
    hr({
      node: d,
      ...a
    }: any): any {
      ((c as any).hr as any).d = 627;
      const n: any = (l as any)(d);
      return ((t as any).jsx as any)("hr", {
        ...a,
        ...({
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
        } as any)[(((((n as any).parentTag as any) === ("blockquote" as any) && !((n as any).elementSibling as any).isFirst) as any) << (1 as any) as any) | ((!!(((n as any).parentTag as any) === (null as any) && ((n as any).elementSibling as any).isFirst) as any) << (0 as any) as any)]
      });
    },
    img({
      node: d,
      src: a,
      alt: n
    }: any): any {
      ((c as any).img as any).d = 628;
      const s: any = (l as any)(d);
      return (typeof a as any) != ("string" as any) || ((a as any).length as any) === (0 as any) ? null : ((t as any).jsx as any)(g, {
        accessibleName: n,
        imageStyle: [(r as any).leaf, (r as any).image],
        rootStyle: [(r as any).leaf, ((s as any).parentTag as any) === ("blockquote" as any) && !((s as any).elementSibling as any).isFirst && (r as any).documentBlockquoteChild, ((s as any).parentTag as any) === (null as any) && ((s as any).elementSibling as any).isFirst && (r as any).firstRootElement],
        url: a
      });
    },
    input({
      node: d,
      ...a
    }: any): any {
      ((c as any).input as any).d = 629;
      const n: any = (l as any)(d);
      return (((n as any).task as any).kind as any) === ("checkbox" as any) ? ((t as any).jsx as any)(j, {
        isChecked: ((n as any).task as any).checked
      }) : ((t as any).jsx as any)("input", {
        ...a,
        className: "sand-dj266r sand-at24cr"
      });
    },
    li({
      node: d,
      children: a,
      className: n,
      ...s
    }: any): any {
      ((c as any).li as any).d = 630;
      const e: any = (l as any)(d),
        m: any = ({
          0: {
            className: "sand-dj266r sand-at24cr sand-1xnkbjl"
          },
          1: {
            className: "sand-at24cr sand-1xnkbjl sand-1om1abp"
          }
        } as any)[((!((e as any).elementSibling as any).isFirst && (((e as any).parentTag as any) === ("ul" as any) || ((e as any).parentTag as any) === ("ol" as any))) as any) << (0 as any)];
      return ((t as any).jsx as any)("li", {
        ...s,
        className: (o as any)(n, (m as any).className),
        style: (m as any).style,
        children: a
      });
    },
    ol({
      node: d,
      children: a,
      className: n,
      ...s
    }: any): any {
      ((c as any).ol as any).d = 631;
      const e: any = (l as any)(d),
        m: any = ({
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
        } as any)[(((((((e as any).parentTag as any) === ("li" as any)) as any) << (2 as any) as any) | (((((e as any).parentTag as any) === ("blockquote" as any) && !((e as any).elementSibling as any).isFirst) as any) << (1 as any) as any)) as any) | ((!!(((e as any).parentTag as any) === (null as any) && ((e as any).elementSibling as any).isFirst) as any) << (0 as any) as any)];
      return ((t as any).jsx as any)("ol", {
        ...s,
        className: (o as any)(n, (m as any).className),
        style: (m as any).style,
        children: a
      });
    },
    pre({
      node: d,
      ...a
    }: any): any {
      ((c as any).pre as any).d = 633;
      const n: any = (l as any)(d),
        s: any = ((n as any).parentTag as any) === ("blockquote" as any) && !((n as any).elementSibling as any).isFirst,
        e: any = ((n as any).parentTag as any) === (null as any) && ((n as any).elementSibling as any).isFirst;
      return ((t as any).jsx as any)(x, {
        ...a,
        codeBlockStyle: [(r as any).leaf, s && (r as any).documentBlockquoteChild],
        fallbackStyle: [(r as any).leaf, (r as any).codeFallback, (r as any).documentCodeBlockText, s && (r as any).documentBlockquoteChild, e && (r as any).firstRootElement],
        node: d,
        preStyle: [(r as any).leaf, (r as any).pre, s && (r as any).documentBlockquoteChild, e && (r as any).firstRootElement]
      });
    },
    span: h,
    strong({
      node: d,
      children: a,
      ...n
    }: any): any {
      return ((c as any).strong as any).d = 634, (l as any)(d), ((t as any).jsx as any)("strong", {
        ...n,
        className: "sand-dj266r sand-at24cr sand-xzm5a7",
        children: a
      });
    },
    table({
      node: d,
      children: a,
      ...n
    }: any): any {
      ((c as any).table as any).d = 635;
      const s: any = (l as any)(d),
        e: any = ({
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
        } as any)[(((((s as any).parentTag as any) === ("blockquote" as any) && !((s as any).elementSibling as any).isFirst) as any) << (1 as any) as any) | ((!!(((s as any).parentTag as any) === (null as any) && ((s as any).elementSibling as any).isFirst) as any) << (0 as any) as any)];
      return ((t as any).jsx as any)("div", {
        className: (o as any)("sand-file-markdown__table-scroll", (e as any).className),
        style: (e as any).style,
        children: ((t as any).jsx as any)("table", {
          ...n,
          className: "sand-dj266r sand-at24cr sand-1mwwwfo sand-1gojbwh",
          children: a
        })
      });
    },
    tbody({
      node: d,
      children: a,
      ...n
    }: any): any {
      return ((c as any).tbody as any).d = 636, (l as any)(d), ((t as any).jsx as any)("tbody", {
        ...n,
        className: "sand-dj266r sand-at24cr",
        children: a
      });
    },
    td({
      node: d,
      children: a,
      ...n
    }: any): any {
      ((c as any).td as any).d = 637;
      const s: any = (l as any)(d);
      return ((t as any).jsx as any)("td", {
        ...n,
        ...({
          0: {
            className: "sand-dj266r sand-at24cr sand-so031l sand-1q0q8m5 sand-17fyfba sand-1yc453h sand-16dsc37 sand-19aaqeu sand-1lqmthn sand-1m31zm8"
          },
          1: {
            className: "sand-dj266r sand-at24cr sand-17fyfba sand-1yc453h sand-16dsc37 sand-19aaqeu sand-1lqmthn sand-1m31zm8 sand-1qhh985 sand-1sy0etr"
          }
        } as any)[(!!(s as any).isFinalBodyRow as any) << (0 as any)],
        children: a
      });
    },
    th({
      node: d,
      children: a,
      ...n
    }: any): any {
      return ((c as any).th as any).d = 638, (l as any)(d), ((t as any).jsx as any)("th", {
        ...n,
        className: "sand-dj266r sand-at24cr sand-so031l sand-1q0q8m5 sand-17fyfba sand-1yc453h sand-16dsc37 sand-1lqmthn sand-1m31zm8 sand-1rhlpx6 sand-1wd3ewq",
        children: a
      });
    },
    thead({
      node: d,
      children: a,
      ...n
    }: any): any {
      return ((c as any).thead as any).d = 639, (l as any)(d), ((t as any).jsx as any)("thead", {
        ...n,
        className: "sand-dj266r sand-at24cr",
        children: a
      });
    },
    tr({
      node: d,
      children: a,
      ...n
    }: any): any {
      return ((c as any).tr as any).d = 640, (l as any)(d), ((t as any).jsx as any)("tr", {
        ...n,
        className: "sand-dj266r sand-at24cr",
        children: a
      });
    },
    ul({
      node: d,
      children: a,
      className: n,
      ...s
    }: any): any {
      ((c as any).ul as any).d = 641;
      const e: any = (l as any)(d),
        m: any = (u as any)((r as any).leaf, (r as any).list, (r as any).documentList, (v as any)(((e as any).listDepth as any).unordered), ((e as any).parentTag as any) === ("li" as any) && (r as any).documentNestedList, (((e as any).task as any).kind as any) === ("list" as any) && (r as any).taskList, ((e as any).parentTag as any) === ("blockquote" as any) && !((e as any).elementSibling as any).isFirst && (r as any).documentBlockquoteChild, ((e as any).parentTag as any) === (null as any) && ((e as any).elementSibling as any).isFirst && (r as any).firstRootElement);
      return ((t as any).jsx as any)("ul", {
        ...s,
        className: (o as any)(n, (m as any).className),
        style: (m as any).style,
        children: a
      });
    }
  };
}
const c: any = (T as any)();
function S(this: any, d: any): any {
  (S as any).d = 642;
  const a: any = ((w as any).c as any)(7),
    {
      text: n,
      rootStyle: s
    }: any = d;
  let e: any;
  ((a as any)[0] as any) !== (s as any) ? (e = (o as any)("sand-file-markdown", "sand-file-markdown--document", ((u as any)((r as any).root, (r as any).documentRoot, s) as any).className), (a as any)[0] = s, (a as any)[1] = e) : e = (a as any)[1];
  let m: any;
  ((a as any)[2] as any) !== (n as any) ? (m = ((t as any).jsx as any)(p, {
    isTrusted: !1,
    children: ((t as any).jsx as any)(N, {
      components: c,
      rehypePlugins: z,
      remarkPlugins: y,
      urlTransform: k,
      children: n
    })
  }), (a as any)[2] = n, (a as any)[3] = m) : m = (a as any)[3];
  let i: any;
  return ((a as any)[4] as any) !== (e as any) || ((a as any)[5] as any) !== (m as any) ? (i = ((t as any).jsx as any)("div", {
    className: e,
    children: m
  }), (a as any)[4] = e, (a as any)[5] = m, (a as any)[6] = i) : i = (a as any)[6], i;
}
export { S as FileMarkdown };
//# debugId=386589f7-c114-4ad2-9931-ef715555bc1b
