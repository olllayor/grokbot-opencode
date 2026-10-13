declare var console: any;
declare var document: any;
declare var global: any;
declare var key: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "69c4665f-0b40-40ac-8498-6e89ba1c95c2", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-69c4665f-0b40-40ac-8498-6e89ba1c95c2");
  } catch (e: any) {}
} as any)();
class S extends (Error as any) {
  declare rawMessage: any;
  declare length: any;
  declare position: any;
  declare name: any;
  [key: string]: any;
  constructor(e: any, t: any) {
    var a: any = ("KaTeX parse error: " as any) + (e as any),
      n: any,
      l: any,
      u: any = t && (t as any).loc;
    if (u && ((u as any).start as any) <= ((u as any).end as any)) {
      var h: any = ((u as any).lexer as any).input;
      n = (u as any).start, l = (u as any).end, (n as any) === ((h as any).length as any) ? a += " at end of input: " : a += ((" at position " as any) + ((n as any) + (1 as any) as any) as any) + (": " as any);
      var c: any = ((((h as any).slice as any)(n, l) as any).replace as any)(/[^]/g, "$&\u0332"),
        v: any;
      (n as any) > (15 as any) ? v = ("\u2026" as any) + (((h as any).slice as any)((n as any) - (15 as any), n) as any) : v = ((h as any).slice as any)(0, n);
      var g: any;
      ((l as any) + (15 as any) as any) < ((h as any).length as any) ? g = (((h as any).slice as any)(l, (l as any) + (15 as any)) as any) + ("\u2026" as any) : g = ((h as any).slice as any)(l), a += ((v as any) + (c as any) as any) + (g as any);
    }
    super(a), (this as any).name = "ParseError", ((Object as any).setPrototypeOf as any)(this, (S as any).prototype), (this as any).position = n, (n as any) != (null as any) && (l as any) != (null as any) && ((this as any).length = (l as any) - (n as any)), (this as any).rawMessage = e;
  }
}
var I1: any = /([A-Z])/g,
  Tt: any = (r: any): any => ((((r as any).replace as any)(I1, "-$1") as any).toLowerCase as any)(),
  N1: any = {
    "&": "&amp;",
    ">": "&gt;",
    "<": "&lt;",
    '"': "&quot;",
    "'": "&#x27;"
  },
  O1: any = /[&><"']/g,
  n0: any = (r: any): any => (((String as any)(r) as any).replace as any)(O1, (e: any): any => (N1 as any)[e]),
  De: any = (r: any): any => ((r as any).type as any) === ("ordgroup" as any) || ((r as any).type as any) === ("color" as any) ? (((r as any).body as any).length as any) === (1 as any) ? (De as any)(((r as any).body as any)[0]) : r : ((r as any).type as any) === ("font" as any) ? (De as any)((r as any).body) : r,
  H1: any = new (Set as any)(["mathord", "textord", "atom"]),
  C0: any = (r: any): any => ((H1 as any).has as any)(((De as any)(r) as any).type),
  F1: any = (r: any): any => {
    var e: any = ((/^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i as any).exec as any)(r);
    return e ? ((e as any)[2] as any) !== (":" as any) || !((/^[a-zA-Z][a-zA-Z0-9+\-.]*$/ as any).test as any)((e as any)[1]) ? null : (((e as any)[1] as any).toLowerCase as any)() : "_relative";
  },
  dt: any = {
    displayMode: {
      type: "boolean",
      description: "Render math in display mode, which puts the math in display style (so \\int and \\sum are large, for example), and centers the math on the page on its own line.",
      cli: "-d, --display-mode"
    },
    output: {
      type: {
        enum: ["htmlAndMathml", "html", "mathml"]
      },
      description: "Determines the markup language of the output.",
      cli: "-F, --format <type>"
    },
    leqno: {
      type: "boolean",
      description: "Render display math in leqno style (left-justified tags)."
    },
    fleqn: {
      type: "boolean",
      description: "Render display math flush left."
    },
    throwOnError: {
      type: "boolean",
      default: !0,
      cli: "-t, --no-throw-on-error",
      cliDescription: "Render errors (in the color given by --error-color) instead of throwing a ParseError exception when encountering an error."
    },
    errorColor: {
      type: "string",
      default: "#cc0000",
      cli: "-c, --error-color <color>",
      cliDescription: "A color string given in the format 'rgb' or 'rrggbb' (no #). This option determines the color of errors rendered by the -t option.",
      cliProcessor: (r: any): any => ("#" as any) + (r as any)
    },
    macros: {
      type: "object",
      cli: "-m, --macro <def>",
      cliDescription: "Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).",
      cliDefault: [],
      cliProcessor: (r: any, e: any): any => (((e as any).push as any)(r), e)
    },
    minRuleThickness: {
      type: "number",
      description: "Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.",
      processor: (r: any): any => ((Math as any).max as any)(0, r),
      cli: "--min-rule-thickness <size>",
      cliProcessor: parseFloat
    },
    colorIsTextColor: {
      type: "boolean",
      description: "Makes \\color behave like LaTeX's 2-argument \\textcolor, instead of LaTeX's one-argument \\color mode change.",
      cli: "-b, --color-is-text-color"
    },
    strict: {
      type: [{
        enum: ["warn", "ignore", "error"]
      }, "boolean", "function"],
      description: "Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.",
      cli: "-S, --strict",
      cliDefault: !1
    },
    trust: {
      type: ["boolean", "function"],
      description: "Trust the input, enabling all HTML features such as \\url.",
      cli: "-T, --trust"
    },
    maxSize: {
      type: "number",
      default: (1 as any) / (0 as any),
      description: "If non-zero, all user-specified sizes, e.g. in \\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, elements and spaces can be arbitrarily large",
      processor: (r: any): any => ((Math as any).max as any)(0, r),
      cli: "-s, --max-size <n>",
      cliProcessor: parseInt
    },
    maxExpand: {
      type: "number",
      default: 1e3,
      description: "Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.",
      processor: (r: any): any => ((Math as any).max as any)(0, r),
      cli: "-e, --max-expand <n>",
      cliProcessor: (r: any): any => (r as any) === ("Infinity" as any) ? (1 as any) / (0 as any) : (parseInt as any)(r)
    },
    globalGroup: {
      type: "boolean",
      cli: !1
    }
  };
function L1(this: any, r: any): any {
  if ("default" in r) return (r as any).default;
  var e: any = (r as any).type,
    t: any = ((Array as any).isArray as any)(e) ? (e as any)[0] : e;
  if ((typeof t as any) != ("string" as any)) return ((t as any).enum as any)[0];
  switch (t) {
    case "boolean":
      return !1;
    case "string":
      return "";
    case "number":
      return 0;
    case "object":
      return {};
  }
}
class Bt {
  [key: string]: any;
  constructor(e: any) {
    (e as any) === (void 0 as any) && (e = {}), e = e || {};
    for (var t of ((Object as any).keys as any)(dt)) {
      var a: any = (dt as any)[t],
        n: any = (e as any)[t];
      (this as any)[t] = (n as any) !== (void 0 as any) ? (a as any).processor ? ((a as any).processor as any)(n) : n : (L1 as any)(a);
    }
  }
  reportNonstrict(e: any, t: any, a: any): any {
    var n: any = (this as any).strict;
    if ((typeof n as any) == ("function" as any) && (n = (n as any)(e, t, a)), !(!n || (n as any) === ("ignore" as any))) {
      if ((n as any) === (!0 as any) || (n as any) === ("error" as any)) throw new (S as any)(("LaTeX-incompatible input and strict mode is set to 'error': " as any) + ((((t as any) + (" [" as any) as any) + (e as any) as any) + ("]" as any) as any), a);
      (n as any) === ("warn" as any) ? (typeof console as any) < ("u" as any) && ((console as any).warn as any)(("LaTeX-incompatible input and strict mode is set to 'warn': " as any) + ((((t as any) + (" [" as any) as any) + (e as any) as any) + ("]" as any) as any)) : (typeof console as any) < ("u" as any) && ((console as any).warn as any)(("LaTeX-incompatible input and strict mode is set to " as any) + ((((((("unrecognized '" as any) + (n as any) as any) + ("': " as any) as any) + (t as any) as any) + (" [" as any) as any) + (e as any) as any) + ("]" as any) as any));
    }
  }
  useStrictBehavior(e: any, t: any, a: any): any {
    var n: any = (this as any).strict;
    if ((typeof n as any) == ("function" as any)) try {
      n = (n as any)(e, t, a);
    } catch {
      n = "error";
    }
    return !n || (n as any) === ("ignore" as any) ? !1 : (n as any) === (!0 as any) || (n as any) === ("error" as any) ? !0 : (n as any) === ("warn" as any) ? ((typeof console as any) < ("u" as any) && ((console as any).warn as any)(("LaTeX-incompatible input and strict mode is set to 'warn': " as any) + ((((t as any) + (" [" as any) as any) + (e as any) as any) + ("]" as any) as any)), !1) : ((typeof console as any) < ("u" as any) && ((console as any).warn as any)(("LaTeX-incompatible input and strict mode is set to " as any) + ((((((("unrecognized '" as any) + (n as any) as any) + ("': " as any) as any) + (t as any) as any) + (" [" as any) as any) + (e as any) as any) + ("]" as any) as any)), !1);
  }
  isTrusted(e: any): any {
    if ("url" in e && (e as any).url && !(e as any).protocol) {
      var t: any = (F1 as any)((e as any).url);
      if ((t as any) == (null as any)) return !1;
      (e as any).protocol = t;
    }
    var a: any = (typeof (this as any).trust as any) == ("function" as any) ? ((this as any).trust as any)(e) : (this as any).trust;
    return !!a;
  }
}
class O0 {
  declare cramped: any;
  declare size: any;
  declare id: any;
  [key: string]: any;
  constructor(e: any, t: any, a: any) {
    (this as any).id = e, (this as any).size = t, (this as any).cramped = a;
  }
  sup(): any {
    return (w0 as any)[(P1 as any)[(this as any).id]];
  }
  sub(): any {
    return (w0 as any)[(G1 as any)[(this as any).id]];
  }
  fracNum(): any {
    return (w0 as any)[(U1 as any)[(this as any).id]];
  }
  fracDen(): any {
    return (w0 as any)[(V1 as any)[(this as any).id]];
  }
  cramp(): any {
    return (w0 as any)[(X1 as any)[(this as any).id]];
  }
  text(): any {
    return (w0 as any)[(Y1 as any)[(this as any).id]];
  }
  isTight(): any {
    return ((this as any).size as any) >= (2 as any);
  }
}
var Dt: number = 0,
  qe: number = 1,
  _0: number = 2,
  B0: number = 3,
  he: number = 4,
  g0: number = 5,
  ee: number = 6,
  u0: number = 7,
  w0: any = [new (O0 as any)(Dt, 0, !1), new (O0 as any)(qe, 0, !0), new (O0 as any)(_0, 1, !1), new (O0 as any)(B0, 1, !0), new (O0 as any)(he, 2, !1), new (O0 as any)(g0, 2, !0), new (O0 as any)(ee, 3, !1), new (O0 as any)(u0, 3, !0)],
  P1: any = [he, g0, he, g0, ee, u0, ee, u0],
  G1: any = [g0, g0, g0, g0, u0, u0, u0, u0],
  U1: any = [_0, B0, he, g0, ee, u0, ee, u0],
  V1: any = [B0, B0, g0, g0, u0, u0, u0, u0],
  X1: any = [qe, qe, B0, B0, g0, g0, u0, u0],
  Y1: any = [Dt, qe, _0, B0, _0, B0, _0, B0],
  N: any = {
    DISPLAY: (w0 as any)[Dt],
    TEXT: (w0 as any)[_0],
    SCRIPT: (w0 as any)[he],
    SCRIPTSCRIPT: (w0 as any)[ee]
  },
  ft: any = [{
    name: "latin",
    blocks: [[256, 591], [768, 879]]
  }, {
    name: "cyrillic",
    blocks: [[1024, 1279]]
  }, {
    name: "armenian",
    blocks: [[1328, 1423]]
  }, {
    name: "brahmic",
    blocks: [[2304, 4255]]
  }, {
    name: "georgian",
    blocks: [[4256, 4351]]
  }, {
    name: "cjk",
    blocks: [[12288, 12543], [19968, 40879], [65280, 65376]]
  }, {
    name: "hangul",
    blocks: [[44032, 55215]]
  }];
function W1(this: any, r: any): any {
  for (var e: any = 0; (e as any) < ((ft as any).length as any); e++) for (var t: any = (ft as any)[e], a: any = 0; (a as any) < (((t as any).blocks as any).length as any); a++) {
    var n: any = ((t as any).blocks as any)[a];
    if ((r as any) >= ((n as any)[0] as any) && (r as any) <= ((n as any)[1] as any)) return (t as any).name;
  }
  return null;
}
var Ce: any = [];
((ft as any).forEach as any)((r: any): any => (((r as any).blocks as any).forEach as any)((e: any): any => ((Ce as any).push as any)(...e)));
function Cr(this: any, r: any): any {
  for (var e: any = 0; (e as any) < ((Ce as any).length as any); e += 2) if ((r as any) >= ((Ce as any)[e] as any) && (r as any) <= ((Ce as any)[(e as any) + (1 as any)] as any)) return !0;
  return !1;
}
var r0: any = (r: any): any => ((r as any) + (" " as any) as any) + (r as any),
  Q0: number = 80,
  $1: any = function (this: any, e: any, t: any): any {
    return (((((((((((((("M95," as any) + (((622 as any) + (e as any) as any) + (t as any) as any) as any) + (`
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l` as any) as any) + ((e as any) / (2.075 as any) as any) as any) + (" -" as any) as any) + (e as any) as any) + (`
c5.3,-9.3,12,-14,20,-14
H400000v` as any) as any) + ((40 as any) + (e as any) as any) as any) + (`H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M` as any) as any) + ((834 as any) + (e as any) as any) as any) + (" " as any) as any) + (t as any) as any) + ("h400000v" as any) as any) + ((40 as any) + (e as any) as any) as any) + ("h-400000z" as any);
  },
  j1: any = function (this: any, e: any, t: any): any {
    return (((((((((((((("M263," as any) + (((601 as any) + (e as any) as any) + (t as any) as any) as any) + (`c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l` as any) as any) + ((e as any) / (2.084 as any) as any) as any) + (" -" as any) as any) + (e as any) as any) + (`
c4.7,-7.3,11,-11,19,-11
H40000v` as any) as any) + ((40 as any) + (e as any) as any) as any) + (`H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M` as any) as any) + ((1001 as any) + (e as any) as any) as any) + (" " as any) as any) + (t as any) as any) + ("h400000v" as any) as any) + ((40 as any) + (e as any) as any) as any) + ("h-400000z" as any);
  },
  Z1: any = function (this: any, e: any, t: any): any {
    return (((((((((((((("M983 " as any) + (((10 as any) + (e as any) as any) + (t as any) as any) as any) + (`
l` as any) as any) + ((e as any) / (3.13 as any) as any) as any) + (" -" as any) as any) + (e as any) as any) + (`
c4,-6.7,10,-10,18,-10 H400000v` as any) as any) + ((40 as any) + (e as any) as any) as any) + (`
H1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7
s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744
c-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30
c26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722
c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5
c53.7,-170.3,84.5,-266.8,92.5,-289.5z
M` as any) as any) + ((1001 as any) + (e as any) as any) as any) + (" " as any) as any) + (t as any) as any) + ("h400000v" as any) as any) + ((40 as any) + (e as any) as any) as any) + ("h-400000z" as any);
  },
  K1: any = function (this: any, e: any, t: any): any {
    return (((((((((((((("M424," as any) + (((2398 as any) + (e as any) as any) + (t as any) as any) as any) + (`
c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514
c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20
s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121
s209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081
l` as any) as any) + ((e as any) / (4.223 as any) as any) as any) + (" -" as any) as any) + (e as any) as any) + (`c4,-6.7,10,-10,18,-10 H400000
v` as any) as any) + ((40 as any) + (e as any) as any) as any) + (`H1014.6
s-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185
c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2z M` as any) as any) + ((1001 as any) + (e as any) as any) as any) + (" " as any) as any) + (t as any) as any) + (`
h400000v` as any) as any) + ((40 as any) + (e as any) as any) as any) + ("h-400000z" as any);
  },
  J1: any = function (this: any, e: any, t: any): any {
    return (((((((((((((("M473," as any) + (((2713 as any) + (e as any) as any) + (t as any) as any) as any) + (`
c339.3,-1799.3,509.3,-2700,510,-2702 l` as any) as any) + ((e as any) / (5.298 as any) as any) as any) + (" -" as any) as any) + (e as any) as any) + (`
c3.3,-7.3,9.3,-11,18,-11 H400000v` as any) as any) + ((40 as any) + (e as any) as any) as any) + (`H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM` as any) as any) + ((1001 as any) + (e as any) as any) as any) + (" " as any) as any) + (t as any) as any) + ("h400000v" as any) as any) + ((40 as any) + (e as any) as any) as any) + ("H1017.7z" as any);
  },
  Q1: any = function (this: any, e: any): any {
    var t: any = (e as any) / (2 as any);
    return (((((("M400000 " as any) + (e as any) as any) + (" H0 L" as any) as any) + (t as any) as any) + (" 0 l65 45 L145 " as any) as any) + ((e as any) - (80 as any) as any) as any) + (" H400000z" as any);
  },
  _1: any = function (this: any, e: any, t: any, a: any): any {
    var n: any = (((a as any) - (54 as any) as any) - (t as any) as any) - (e as any);
    return (((((((((("M702 " as any) + ((e as any) + (t as any) as any) as any) + ("H400000" as any) as any) + ((40 as any) + (e as any) as any) as any) + (`
H742v` as any) as any) + (n as any) as any) + (`l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 ` as any) as any) + (t as any) as any) + ("H400000v" as any) as any) + ((40 as any) + (e as any) as any) as any) + ("H742z" as any);
  },
  ea: any = function (this: any, e: any, t: any, a: any): any {
    t = (1e3 as any) * (t as any);
    var n: any = "";
    switch (e) {
      case "sqrtMain":
        n = ($1 as any)(t, Q0);
        break;
      case "sqrtSize1":
        n = (j1 as any)(t, Q0);
        break;
      case "sqrtSize2":
        n = (Z1 as any)(t, Q0);
        break;
      case "sqrtSize3":
        n = (K1 as any)(t, Q0);
        break;
      case "sqrtSize4":
        n = (J1 as any)(t, Q0);
        break;
      case "sqrtTall":
        n = (_1 as any)(t, Q0, a);
    }
    return n;
  },
  ta: any = function (this: any, e: any, t: any): any {
    switch (e) {
      case "\u239C":
        return (r0 as any)((("M291 0 H417 V" as any) + (t as any) as any) + (" H291z" as any));
      case "\u2223":
        return (r0 as any)((("M145 0 H188 V" as any) + (t as any) as any) + (" H145z" as any));
      case "\u2225":
        return ((r0 as any)((("M145 0 H188 V" as any) + (t as any) as any) + (" H145z" as any)) as any) + ((r0 as any)((("M367 0 H410 V" as any) + (t as any) as any) + (" H367z" as any)) as any);
      case "\u239F":
        return (r0 as any)((("M457 0 H583 V" as any) + (t as any) as any) + (" H457z" as any));
      case "\u23A2":
        return (r0 as any)((("M319 0 H403 V" as any) + (t as any) as any) + (" H319z" as any));
      case "\u23A5":
        return (r0 as any)((("M263 0 H347 V" as any) + (t as any) as any) + (" H263z" as any));
      case "\u23AA":
        return (r0 as any)((("M384 0 H504 V" as any) + (t as any) as any) + (" H384z" as any));
      case "\u23D0":
        return (r0 as any)((("M312 0 H355 V" as any) + (t as any) as any) + (" H312z" as any));
      case "\u2016":
        return ((r0 as any)((("M257 0 H300 V" as any) + (t as any) as any) + (" H257z" as any)) as any) + ((r0 as any)((("M478 0 H521 V" as any) + (t as any) as any) + (" H478z" as any)) as any);
      default:
        return "";
    }
  },
  Qt: any = {
    doubleleftarrow: `M262 157
l10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3
 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28
 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5
c2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5
 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87
-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7
-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z
m8 0v40h399730v-40zm0 194v40h399730v-40z`,
    doublerightarrow: `M399738 392l
-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5
 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88
-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68
-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18
-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782
c-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3
-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z`,
    leftarrow: `M400000 241H110l3-3c68.7-52.7 113.7-120
 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8
-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247
c-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208
 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3
 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202
 l-3-3h399890zM100 241v40h399900v-40z`,
    leftbrace: `M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117
-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7
 5-6 9-10 13-.7 1-7.3 1-20 1H6z`,
    leftbraceunder: `M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13
 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688
 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7
-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z`,
    leftgroup: `M400000 80
H435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0
 435 0h399565z`,
    leftgroupunder: `M400000 262
H435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219
 435 219h399565z`,
    leftharpoon: `M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3
-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5
-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7
-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z`,
    leftharpoonplus: `M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5
 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3
-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7
-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z
m0 0v40h400000v-40z`,
    leftharpoondown: `M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333
 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5
 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667
-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z`,
    leftharpoondownplus: `M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12
 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7
-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0
v40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z`,
    lefthook: `M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5
-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3
-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21
 71.5 23h399859zM103 281v-40h399897v40z`,
    leftlinesegment: (r0 as any)("M40 281 V428 H0 V94 H40 V241 H400000 v40z"),
    leftbracketunder: (r0 as any)("M0 0 h120 V290 H399995 v120 H0z"),
    leftbracketover: (r0 as any)("M0 440 h120 V150 H399995 v-120 H0z"),
    leftmapsto: (r0 as any)("M40 281 V448H0V74H40V241H400000v40z"),
    leftToFrom: `M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23
-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8
c28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3
 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z`,
    longequal: (r0 as any)("M0 50 h400000 v40H0z m0 194h40000v40H0z"),
    midbrace: `M200428 334
c-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14
-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7
 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11
 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z`,
    midbraceunder: `M199572 214
c100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14
 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3
 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0
-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z`,
    oiintSize1: `M512.6 71.6c272.6 0 320.3 106.8 320.3 178.2 0 70.8-47.7 177.6
-320.3 177.6S193.1 320.6 193.1 249.8c0-71.4 46.9-178.2 319.5-178.2z
m368.1 178.2c0-86.4-60.9-215.4-368.1-215.4-306.4 0-367.3 129-367.3 215.4 0 85.8
60.9 214.8 367.3 214.8 307.2 0 368.1-129 368.1-214.8z`,
    oiintSize2: `M757.8 100.1c384.7 0 451.1 137.6 451.1 230 0 91.3-66.4 228.8
-451.1 228.8-386.3 0-452.7-137.5-452.7-228.8 0-92.4 66.4-230 452.7-230z
m502.4 230c0-111.2-82.4-277.2-502.4-277.2s-504 166-504 277.2
c0 110 84 276 504 276s502.4-166 502.4-276z`,
    oiiintSize1: `M681.4 71.6c408.9 0 480.5 106.8 480.5 178.2 0 70.8-71.6 177.6
-480.5 177.6S202.1 320.6 202.1 249.8c0-71.4 70.5-178.2 479.3-178.2z
m525.8 178.2c0-86.4-86.8-215.4-525.7-215.4-437.9 0-524.7 129-524.7 215.4 0
85.8 86.8 214.8 524.7 214.8 438.9 0 525.7-129 525.7-214.8z`,
    oiiintSize2: `M1021.2 53c603.6 0 707.8 165.8 707.8 277.2 0 110-104.2 275.8
-707.8 275.8-606 0-710.2-165.8-710.2-275.8C311 218.8 415.2 53 1021.2 53z
m770.4 277.1c0-131.2-126.4-327.6-770.5-327.6S248.4 198.9 248.4 330.1
c0 130 128.8 326.4 772.7 326.4s770.5-196.4 770.5-326.4z`,
    rightarrow: `M0 241v40h399891c-47.3 35.3-84 78-110 128
-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20
 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7
 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85
-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
 151.7 139 205zm0 0v40h399900v-40z`,
    rightbrace: `M400000 542l
-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5
s-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1
c124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z`,
    rightbraceunder: `M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3
 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237
-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z`,
    rightgroup: `M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0
 3-1 3-3v-38c-76-158-257-219-435-219H0z`,
    rightgroupunder: `M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18
 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z`,
    rightharpoon: `M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3
-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2
-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58
 69.2 92 94.5zm0 0v40h399900v-40z`,
    rightharpoonplus: `M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11
-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7
 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z
m0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z`,
    rightharpoondown: `M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8
 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5
-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95
-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z`,
    rightharpoondownplus: `M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8
 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3
 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3
-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z
m0-194v40h400000v-40zm0 0v40h400000v-40z`,
    righthook: `M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3
 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0
-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21
 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z`,
    rightlinesegment: (r0 as any)("M399960 241 V94 h40 V428 h-40 V281 H0 v-40z"),
    rightbracketunder: (r0 as any)("M399995 0 h-120 V290 H0 v120 H400000z"),
    rightbracketover: (r0 as any)("M399995 440 h-120 V150 H0 v-120 H399995z"),
    rightToFrom: `M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23
 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32
-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142
-167z M100 147v40h399900v-40zM0 341v40h399900v-40z`,
    twoheadleftarrow: `M0 167c68 40
 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69
-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3
-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19
-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101
 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z`,
    twoheadrightarrow: `M400000 167
c-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3
 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42
 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333
-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70
 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z`,
    tilde1: `M200 55.538c-77 0-168 73.953-177 73.953-3 0-7
-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0
 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0
 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128
-68.267.847-113-73.952-191-73.952z`,
    tilde2: `M344 55.266c-142 0-300.638 81.316-311.5 86.418
-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9
 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114
c1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751
 181.476 676 181.476c-149 0-189-126.21-332-126.21z`,
    tilde3: `M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457
-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0
 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697
 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696
 -338 0-409-156.573-744-156.573z`,
    tilde4: `M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345
-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409
 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9
 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409
 -175.236-744-175.236z`,
    vec: `M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`,
    widehat1: `M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22
c-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z`,
    widehat2: `M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
    widehat3: `M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
    widehat4: `M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
    widecheck1: `M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,
-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z`,
    widecheck2: `M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
    widecheck3: `M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
    widecheck4: `M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
    baraboveleftarrow: `M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202
c4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5
c-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130
s-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47
121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6
s2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11
c0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z
M100 620v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z`,
    rightarrowabovebar: `M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32
-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0
13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39
-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5
-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z`,
    baraboveshortleftharpoon: `M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17
c2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21
c-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40
c-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z
M0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z`,
    rightharpoonaboveshortbar: `M0,241 l0,40c399126,0,399993,0,399993,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z`,
    shortbaraboveleftharpoon: `M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,
1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,
-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z
M93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z`,
    shortrightharpoonabovebar: `M53,241l0,40c398570,0,399437,0,399437,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z`
  },
  ra: any = function (this: any, e: any, t: any): any {
    switch (e) {
      case "lbrack":
        return (((("M403 1759 V84 H666 V0 H319 V1759 v" as any) + (t as any) as any) + (` v1759 h347 v-84
H403z M403 1759 V0 H319 V1759 v` as any) as any) + (t as any) as any) + (" v1759 h84z" as any);
      case "rbrack":
        return (((("M347 1759 V0 H0 V84 H263 V1759 v" as any) + (t as any) as any) + (` v1759 H0 v84 H347z
M347 1759 V0 H263 V1759 v` as any) as any) + (t as any) as any) + (" v1759 h84z" as any);
      case "vert":
        return (((((("M145 15 v585 v" as any) + (t as any) as any) + (` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` as any) as any) + (-t as any) as any) + (` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v` as any) as any) + (t as any) as any) + (" v585 h43z" as any);
      case "doublevert":
        return (((((((((((("M145 15 v585 v" as any) + (t as any) as any) + (` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` as any) as any) + (-t as any) as any) + (` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v` as any) as any) + (t as any) as any) + (` v585 h43z
M367 15 v585 v` as any) as any) + (t as any) as any) + (` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` as any) as any) + (-t as any) as any) + (` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M410 15 H367 v585 v` as any) as any) + (t as any) as any) + (" v585 h43z" as any);
      case "lfloor":
        return (((("M319 602 V0 H403 V602 v" as any) + (t as any) as any) + (` v1715 h263 v84 H319z
MM319 602 V0 H403 V602 v` as any) as any) + (t as any) as any) + (" v1715 H319z" as any);
      case "rfloor":
        return (((("M319 602 V0 H403 V602 v" as any) + (t as any) as any) + (` v1799 H0 v-84 H319z
MM319 602 V0 H403 V602 v` as any) as any) + (t as any) as any) + (" v1715 H319z" as any);
      case "lceil":
        return (((("M403 1759 V84 H666 V0 H319 V1759 v" as any) + (t as any) as any) + (` v602 h84z
M403 1759 V0 H319 V1759 v` as any) as any) + (t as any) as any) + (" v602 h84z" as any);
      case "rceil":
        return (((("M347 1759 V0 H0 V84 H263 V1759 v" as any) + (t as any) as any) + (` v602 h84z
M347 1759 V0 h-84 V1759 v` as any) as any) + (t as any) as any) + (" v602 h84z" as any);
      case "lparen":
        return ((((`M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1
c-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,
-36,557 l0,` as any) + ((t as any) + (84 as any) as any) as any) + (`c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,
949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9
c0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,
-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189
l0,-` as any) as any) + ((t as any) + (92 as any) as any) as any) + (`c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,
-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z` as any);
      case "rparen":
        return ((((`M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,
63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5
c11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0,` as any) + ((t as any) + (9 as any) as any) as any) + (`
c-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664
c-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11
c0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17
c242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558
l0,-` as any) as any) + ((t as any) + (144 as any) as any) as any) + (`c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,
-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z` as any);
      default:
        throw new (Error as any)("Unknown stretchy delimiter.");
    }
  };
class ae {
  declare style: any;
  declare maxFontSize: any;
  declare depth: any;
  declare height: any;
  declare classes: any;
  declare children: any;
  [key: string]: any;
  constructor(e: any) {
    (this as any).children = e, (this as any).classes = [], (this as any).height = 0, (this as any).depth = 0, (this as any).maxFontSize = 0, (this as any).style = {};
  }
  hasClass(e: any): any {
    return (((this as any).classes as any).includes as any)(e);
  }
  toNode(): any {
    for (var e: any = ((document as any).createDocumentFragment as any)(), t: any = 0; (t as any) < (((this as any).children as any).length as any); t++) ((e as any).appendChild as any)(((((this as any).children as any)[t] as any).toNode as any)());
    return e;
  }
  toMarkup(): any {
    for (var e: any = "", t: any = 0; (t as any) < (((this as any).children as any).length as any); t++) e += ((((this as any).children as any)[t] as any).toMarkup as any)();
    return e;
  }
  toText(): any {
    var e: any = (t: any): any => ((t as any).toText as any)();
    return (((((this as any).children as any).map as any)(e) as any).join as any)("");
  }
}
var vt: any = {
    pt: 1,
    mm: (7227 as any) / (2540 as any),
    cm: (7227 as any) / (254 as any),
    in: 72.27,
    bp: (803 as any) / (800 as any),
    pc: 12,
    dd: (1238 as any) / (1157 as any),
    cc: (14856 as any) / (1157 as any),
    nd: (685 as any) / (642 as any),
    nc: (1370 as any) / (107 as any),
    sp: (1 as any) / (65536 as any),
    px: (803 as any) / (800 as any)
  },
  aa: any = {
    ex: !0,
    em: !0,
    mu: !0
  },
  qr: any = function (this: any, e: any): any {
    return (typeof e as any) != ("string" as any) && (e = (e as any).unit), e in vt || e in aa || (e as any) === ("ex" as any);
  },
  K: any = function (this: any, e: any, t: any): any {
    var a: any;
    if ((e as any).unit in vt) a = (((vt as any)[(e as any).unit] as any) / ((((t as any).fontMetrics as any)() as any).ptPerEm as any) as any) / ((t as any).sizeMultiplier as any);else if (((e as any).unit as any) === ("mu" as any)) a = (((t as any).fontMetrics as any)() as any).cssEmPerMu;else {
      var n: any;
      if ((((t as any).style as any).isTight as any)() ? n = ((t as any).havingStyle as any)((((t as any).style as any).text as any)()) : n = t, ((e as any).unit as any) === ("ex" as any)) a = (((n as any).fontMetrics as any)() as any).xHeight;else if (((e as any).unit as any) === ("em" as any)) a = (((n as any).fontMetrics as any)() as any).quad;else throw new (S as any)((("Invalid unit: '" as any) + ((e as any).unit as any) as any) + ("'" as any));
      (n as any) !== (t as any) && (a *= ((n as any).sizeMultiplier as any) / ((t as any).sizeMultiplier as any));
    }
    return ((Math as any).min as any)(((e as any).number as any) * (a as any), (t as any).maxSize);
  },
  A: any = function (this: any, e: any): any {
    return (+((e as any).toFixed as any)(4) as any) + ("em" as any);
  },
  L0: any = function (this: any, e: any): any {
    return ((((e as any).filter as any)((t: any): any => t) as any).join as any)(" ");
  },
  Er: any = function (this: any, e: any, t: any, a: any): any {
    if ((this as any).classes = e || [], (this as any).attributes = {}, (this as any).height = 0, (this as any).depth = 0, (this as any).maxFontSize = 0, (this as any).style = a || {}, t) {
      (((t as any).style as any).isTight as any)() && (((this as any).classes as any).push as any)("mtight");
      var n: any = ((t as any).getColor as any)();
      n && (((this as any).style as any).color = n);
    }
  },
  Rr: any = function (this: any, e: any): any {
    var t: any = ((document as any).createElement as any)(e);
    (t as any).className = (L0 as any)((this as any).classes);
    for (var a of ((Object as any).keys as any)((this as any).style)) ((t as any).style as any)[a] = ((this as any).style as any)[a];
    for (var n of ((Object as any).keys as any)((this as any).attributes)) ((t as any).setAttribute as any)(n, ((this as any).attributes as any)[n]);
    for (var l: any = 0; (l as any) < (((this as any).children as any).length as any); l++) ((t as any).appendChild as any)(((((this as any).children as any)[l] as any).toNode as any)());
    return t;
  },
  na: any = /[\s"'>/=\x00-\x1f]/,
  Ir: any = function (this: any, e: any): any {
    var t: any = ("<" as any) + (e as any);
    ((this as any).classes as any).length && (t += ((' class="' as any) + ((n0 as any)((L0 as any)((this as any).classes)) as any) as any) + ('"' as any));
    var a: any = "";
    for (var n of ((Object as any).keys as any)((this as any).style)) a += ((((Tt as any)(n) as any) + (":" as any) as any) + (((this as any).style as any)[n] as any) as any) + (";" as any);
    a && (t += ((' style="' as any) + ((n0 as any)(a) as any) as any) + ('"' as any));
    for (var l of ((Object as any).keys as any)((this as any).attributes)) {
      if (((na as any).test as any)(l)) throw new (S as any)((("Invalid attribute name '" as any) + (l as any) as any) + ("'" as any));
      t += ((((" " as any) + (l as any) as any) + ('="' as any) as any) + ((n0 as any)(((this as any).attributes as any)[l]) as any) as any) + ('"' as any);
    }
    t += ">";
    for (var u: any = 0; (u as any) < (((this as any).children as any).length as any); u++) t += ((((this as any).children as any)[u] as any).toMarkup as any)();
    return t += (("</" as any) + (e as any) as any) + (">" as any), t;
  };
class ne {
  declare children: any;
  [key: string]: any;
  constructor(e: any, t: any, a: any, n: any) {
    ((Er as any).call as any)(this, e, a, n), (this as any).children = t || [];
  }
  setAttribute(e: any, t: any): any {
    ((this as any).attributes as any)[e] = t;
  }
  hasClass(e: any): any {
    return (((this as any).classes as any).includes as any)(e);
  }
  toNode(): any {
    return ((Rr as any).call as any)(this, "span");
  }
  toMarkup(): any {
    return ((Ir as any).call as any)(this, "span");
  }
}
class Oe {
  declare children: any;
  [key: string]: any;
  constructor(e: any, t: any, a: any, n: any) {
    ((Er as any).call as any)(this, t, n), (this as any).children = a || [], ((this as any).setAttribute as any)("href", e);
  }
  setAttribute(e: any, t: any): any {
    ((this as any).attributes as any)[e] = t;
  }
  hasClass(e: any): any {
    return (((this as any).classes as any).includes as any)(e);
  }
  toNode(): any {
    return ((Rr as any).call as any)(this, "a");
  }
  toMarkup(): any {
    return ((Ir as any).call as any)(this, "a");
  }
}
class ia {
  declare style: any;
  declare maxFontSize: any;
  declare depth: any;
  declare height: any;
  declare classes: any;
  declare src: any;
  declare alt: any;
  [key: string]: any;
  constructor(e: any, t: any, a: any) {
    (this as any).alt = t, (this as any).src = e, (this as any).classes = ["mord"], (this as any).height = 0, (this as any).depth = 0, (this as any).maxFontSize = 0, (this as any).style = a;
  }
  hasClass(e: any): any {
    return (((this as any).classes as any).includes as any)(e);
  }
  toNode(): any {
    var e: any = ((document as any).createElement as any)("img");
    (e as any).src = (this as any).src, (e as any).alt = (this as any).alt, (e as any).className = "mord";
    for (var t of ((Object as any).keys as any)((this as any).style)) ((e as any).style as any)[t] = ((this as any).style as any)[t];
    return e;
  }
  toMarkup(): any {
    var e: any = ((('<img src="' as any) + ((n0 as any)((this as any).src) as any) as any) + ('"' as any) as any) + (((' alt="' as any) + ((n0 as any)((this as any).alt) as any) as any) + ('"' as any) as any),
      t: any = "";
    for (var a of ((Object as any).keys as any)((this as any).style)) t += ((((Tt as any)(a) as any) + (":" as any) as any) + (((this as any).style as any)[a] as any) as any) + (";" as any);
    return t && (e += ((' style="' as any) + ((n0 as any)(t) as any) as any) + ('"' as any)), e += "'/>", e;
  }
}
var la: any = {
  î: "\u0131\u0302",
  ï: "\u0131\u0308",
  í: "\u0131\u0301",
  ì: "\u0131\u0300"
};
class f0 {
  declare maxFontSize: any;
  declare style: any;
  declare classes: any;
  declare width: any;
  declare skew: any;
  declare italic: any;
  declare depth: any;
  declare height: any;
  declare text: any;
  [key: string]: any;
  constructor(e: any, t: any, a: any, n: any, l: any, u: any, h: any, c: any) {
    (this as any).text = e, (this as any).height = t || 0, (this as any).depth = a || 0, (this as any).italic = n || 0, (this as any).skew = l || 0, (this as any).width = u || 0, (this as any).classes = h || [], (this as any).style = c || {}, (this as any).maxFontSize = 0;
    var v: any = (W1 as any)((((this as any).text as any).charCodeAt as any)(0));
    v && (((this as any).classes as any).push as any)((v as any) + ("_fallback" as any)), ((/[îïíì]/ as any).test as any)((this as any).text) && ((this as any).text = (la as any)[(this as any).text]);
  }
  hasClass(e: any): any {
    return (((this as any).classes as any).includes as any)(e);
  }
  toNode(): any {
    var e: any = ((document as any).createTextNode as any)((this as any).text),
      t: any = null;
    ((this as any).italic as any) > (0 as any) && (t = ((document as any).createElement as any)("span"), ((t as any).style as any).marginRight = (A as any)((this as any).italic)), (((this as any).classes as any).length as any) > (0 as any) && (t = t || ((document as any).createElement as any)("span"), (t as any).className = (L0 as any)((this as any).classes));
    for (var a of ((Object as any).keys as any)((this as any).style)) t = t || ((document as any).createElement as any)("span"), ((t as any).style as any)[a] = ((this as any).style as any)[a];
    return t ? (((t as any).appendChild as any)(e), t) : e;
  }
  toMarkup(): any {
    var e: any = !1,
      t: any = "<span";
    ((this as any).classes as any).length && (e = !0, t += ' class="', t += (n0 as any)((L0 as any)((this as any).classes)), t += '"');
    var a: any = "";
    ((this as any).italic as any) > (0 as any) && (a += (("margin-right:" as any) + ((A as any)((this as any).italic) as any) as any) + (";" as any));
    for (var n of ((Object as any).keys as any)((this as any).style)) a += ((((Tt as any)(n) as any) + (":" as any) as any) + (((this as any).style as any)[n] as any) as any) + (";" as any);
    a && (e = !0, t += ((' style="' as any) + ((n0 as any)(a) as any) as any) + ('"' as any));
    var l: any = (n0 as any)((this as any).text);
    return e ? (t += ">", t += l, t += "</span>", t) : l;
  }
}
class D0 {
  declare attributes: any;
  declare children: any;
  [key: string]: any;
  constructor(e: any, t: any) {
    (this as any).children = e || [], (this as any).attributes = t || {};
  }
  toNode(): any {
    var e: string = "http://www.w3.org/2000/svg",
      t: any = ((document as any).createElementNS as any)(e, "svg");
    for (var a of ((Object as any).keys as any)((this as any).attributes)) ((t as any).setAttribute as any)(a, ((this as any).attributes as any)[a]);
    for (var n: any = 0; (n as any) < (((this as any).children as any).length as any); n++) ((t as any).appendChild as any)(((((this as any).children as any)[n] as any).toNode as any)());
    return t;
  }
  toMarkup(): any {
    var e: any = '<svg xmlns="http://www.w3.org/2000/svg"';
    for (var t of ((Object as any).keys as any)((this as any).attributes)) e += ((((" " as any) + (t as any) as any) + ('="' as any) as any) + ((n0 as any)(((this as any).attributes as any)[t]) as any) as any) + ('"' as any);
    e += ">";
    for (var a: any = 0; (a as any) < (((this as any).children as any).length as any); a++) e += ((((this as any).children as any)[a] as any).toMarkup as any)();
    return e += "</svg>", e;
  }
}
class P0 {
  declare alternate: any;
  declare pathName: any;
  [key: string]: any;
  constructor(e: any, t: any) {
    (this as any).pathName = e, (this as any).alternate = t;
  }
  toNode(): any {
    var e: string = "http://www.w3.org/2000/svg",
      t: any = ((document as any).createElementNS as any)(e, "path");
    return (this as any).alternate ? ((t as any).setAttribute as any)("d", (this as any).alternate) : ((t as any).setAttribute as any)("d", (Qt as any)[(this as any).pathName]), t;
  }
  toMarkup(): any {
    return (this as any).alternate ? (('<path d="' as any) + ((n0 as any)((this as any).alternate) as any) as any) + ('"/>' as any) : (('<path d="' as any) + ((n0 as any)((Qt as any)[(this as any).pathName]) as any) as any) + ('"/>' as any);
  }
}
class pt {
  declare attributes: any;
  [key: string]: any;
  constructor(e: any) {
    (this as any).attributes = e || {};
  }
  toNode(): any {
    var e: string = "http://www.w3.org/2000/svg",
      t: any = ((document as any).createElementNS as any)(e, "line");
    for (var a of ((Object as any).keys as any)((this as any).attributes)) ((t as any).setAttribute as any)(a, ((this as any).attributes as any)[a]);
    return t;
  }
  toMarkup(): any {
    var e: any = "<line";
    for (var t of ((Object as any).keys as any)((this as any).attributes)) e += ((((" " as any) + (t as any) as any) + ('="' as any) as any) + ((n0 as any)(((this as any).attributes as any)[t]) as any) as any) + ('"' as any);
    return e += "/>", e;
  }
}
function sa(this: any, r: any): any {
  if (r instanceof f0) return r;
  throw new (Error as any)((("Expected symbolNode but got " as any) + ((String as any)(r) as any) as any) + ("." as any));
}
function ua(this: any, r: any): any {
  if (r instanceof ne) return r;
  throw new (Error as any)((("Expected span<HtmlDomNode> but got " as any) + ((String as any)(r) as any) as any) + ("." as any));
}
var oa: any = (r: any): any => r instanceof ne || r instanceof Oe || r instanceof ae,
  k0: any = {
    "AMS-Regular": {
      32: [0, 0, 0, 0, .25],
      65: [0, .68889, 0, 0, .72222],
      66: [0, .68889, 0, 0, .66667],
      67: [0, .68889, 0, 0, .72222],
      68: [0, .68889, 0, 0, .72222],
      69: [0, .68889, 0, 0, .66667],
      70: [0, .68889, 0, 0, .61111],
      71: [0, .68889, 0, 0, .77778],
      72: [0, .68889, 0, 0, .77778],
      73: [0, .68889, 0, 0, .38889],
      74: [.16667, .68889, 0, 0, .5],
      75: [0, .68889, 0, 0, .77778],
      76: [0, .68889, 0, 0, .66667],
      77: [0, .68889, 0, 0, .94445],
      78: [0, .68889, 0, 0, .72222],
      79: [.16667, .68889, 0, 0, .77778],
      80: [0, .68889, 0, 0, .61111],
      81: [.16667, .68889, 0, 0, .77778],
      82: [0, .68889, 0, 0, .72222],
      83: [0, .68889, 0, 0, .55556],
      84: [0, .68889, 0, 0, .66667],
      85: [0, .68889, 0, 0, .72222],
      86: [0, .68889, 0, 0, .72222],
      87: [0, .68889, 0, 0, 1],
      88: [0, .68889, 0, 0, .72222],
      89: [0, .68889, 0, 0, .72222],
      90: [0, .68889, 0, 0, .66667],
      107: [0, .68889, 0, 0, .55556],
      160: [0, 0, 0, 0, .25],
      165: [0, .675, .025, 0, .75],
      174: [.15559, .69224, 0, 0, .94666],
      240: [0, .68889, 0, 0, .55556],
      295: [0, .68889, 0, 0, .54028],
      710: [0, .825, 0, 0, 2.33334],
      732: [0, .9, 0, 0, 2.33334],
      770: [0, .825, 0, 0, 2.33334],
      771: [0, .9, 0, 0, 2.33334],
      989: [.08167, .58167, 0, 0, .77778],
      1008: [0, .43056, .04028, 0, .66667],
      8245: [0, .54986, 0, 0, .275],
      8463: [0, .68889, 0, 0, .54028],
      8487: [0, .68889, 0, 0, .72222],
      8498: [0, .68889, 0, 0, .55556],
      8502: [0, .68889, 0, 0, .66667],
      8503: [0, .68889, 0, 0, .44445],
      8504: [0, .68889, 0, 0, .66667],
      8513: [0, .68889, 0, 0, .63889],
      8592: [-.03598, .46402, 0, 0, .5],
      8594: [-.03598, .46402, 0, 0, .5],
      8602: [-.13313, .36687, 0, 0, 1],
      8603: [-.13313, .36687, 0, 0, 1],
      8606: [.01354, .52239, 0, 0, 1],
      8608: [.01354, .52239, 0, 0, 1],
      8610: [.01354, .52239, 0, 0, 1.11111],
      8611: [.01354, .52239, 0, 0, 1.11111],
      8619: [0, .54986, 0, 0, 1],
      8620: [0, .54986, 0, 0, 1],
      8621: [-.13313, .37788, 0, 0, 1.38889],
      8622: [-.13313, .36687, 0, 0, 1],
      8624: [0, .69224, 0, 0, .5],
      8625: [0, .69224, 0, 0, .5],
      8630: [0, .43056, 0, 0, 1],
      8631: [0, .43056, 0, 0, 1],
      8634: [.08198, .58198, 0, 0, .77778],
      8635: [.08198, .58198, 0, 0, .77778],
      8638: [.19444, .69224, 0, 0, .41667],
      8639: [.19444, .69224, 0, 0, .41667],
      8642: [.19444, .69224, 0, 0, .41667],
      8643: [.19444, .69224, 0, 0, .41667],
      8644: [.1808, .675, 0, 0, 1],
      8646: [.1808, .675, 0, 0, 1],
      8647: [.1808, .675, 0, 0, 1],
      8648: [.19444, .69224, 0, 0, .83334],
      8649: [.1808, .675, 0, 0, 1],
      8650: [.19444, .69224, 0, 0, .83334],
      8651: [.01354, .52239, 0, 0, 1],
      8652: [.01354, .52239, 0, 0, 1],
      8653: [-.13313, .36687, 0, 0, 1],
      8654: [-.13313, .36687, 0, 0, 1],
      8655: [-.13313, .36687, 0, 0, 1],
      8666: [.13667, .63667, 0, 0, 1],
      8667: [.13667, .63667, 0, 0, 1],
      8669: [-.13313, .37788, 0, 0, 1],
      8672: [-.064, .437, 0, 0, 1.334],
      8674: [-.064, .437, 0, 0, 1.334],
      8705: [0, .825, 0, 0, .5],
      8708: [0, .68889, 0, 0, .55556],
      8709: [.08167, .58167, 0, 0, .77778],
      8717: [0, .43056, 0, 0, .42917],
      8722: [-.03598, .46402, 0, 0, .5],
      8724: [.08198, .69224, 0, 0, .77778],
      8726: [.08167, .58167, 0, 0, .77778],
      8733: [0, .69224, 0, 0, .77778],
      8736: [0, .69224, 0, 0, .72222],
      8737: [0, .69224, 0, 0, .72222],
      8738: [.03517, .52239, 0, 0, .72222],
      8739: [.08167, .58167, 0, 0, .22222],
      8740: [.25142, .74111, 0, 0, .27778],
      8741: [.08167, .58167, 0, 0, .38889],
      8742: [.25142, .74111, 0, 0, .5],
      8756: [0, .69224, 0, 0, .66667],
      8757: [0, .69224, 0, 0, .66667],
      8764: [-.13313, .36687, 0, 0, .77778],
      8765: [-.13313, .37788, 0, 0, .77778],
      8769: [-.13313, .36687, 0, 0, .77778],
      8770: [-.03625, .46375, 0, 0, .77778],
      8774: [.30274, .79383, 0, 0, .77778],
      8776: [-.01688, .48312, 0, 0, .77778],
      8778: [.08167, .58167, 0, 0, .77778],
      8782: [.06062, .54986, 0, 0, .77778],
      8783: [.06062, .54986, 0, 0, .77778],
      8785: [.08198, .58198, 0, 0, .77778],
      8786: [.08198, .58198, 0, 0, .77778],
      8787: [.08198, .58198, 0, 0, .77778],
      8790: [0, .69224, 0, 0, .77778],
      8791: [.22958, .72958, 0, 0, .77778],
      8796: [.08198, .91667, 0, 0, .77778],
      8806: [.25583, .75583, 0, 0, .77778],
      8807: [.25583, .75583, 0, 0, .77778],
      8808: [.25142, .75726, 0, 0, .77778],
      8809: [.25142, .75726, 0, 0, .77778],
      8812: [.25583, .75583, 0, 0, .5],
      8814: [.20576, .70576, 0, 0, .77778],
      8815: [.20576, .70576, 0, 0, .77778],
      8816: [.30274, .79383, 0, 0, .77778],
      8817: [.30274, .79383, 0, 0, .77778],
      8818: [.22958, .72958, 0, 0, .77778],
      8819: [.22958, .72958, 0, 0, .77778],
      8822: [.1808, .675, 0, 0, .77778],
      8823: [.1808, .675, 0, 0, .77778],
      8828: [.13667, .63667, 0, 0, .77778],
      8829: [.13667, .63667, 0, 0, .77778],
      8830: [.22958, .72958, 0, 0, .77778],
      8831: [.22958, .72958, 0, 0, .77778],
      8832: [.20576, .70576, 0, 0, .77778],
      8833: [.20576, .70576, 0, 0, .77778],
      8840: [.30274, .79383, 0, 0, .77778],
      8841: [.30274, .79383, 0, 0, .77778],
      8842: [.13597, .63597, 0, 0, .77778],
      8843: [.13597, .63597, 0, 0, .77778],
      8847: [.03517, .54986, 0, 0, .77778],
      8848: [.03517, .54986, 0, 0, .77778],
      8858: [.08198, .58198, 0, 0, .77778],
      8859: [.08198, .58198, 0, 0, .77778],
      8861: [.08198, .58198, 0, 0, .77778],
      8862: [0, .675, 0, 0, .77778],
      8863: [0, .675, 0, 0, .77778],
      8864: [0, .675, 0, 0, .77778],
      8865: [0, .675, 0, 0, .77778],
      8872: [0, .69224, 0, 0, .61111],
      8873: [0, .69224, 0, 0, .72222],
      8874: [0, .69224, 0, 0, .88889],
      8876: [0, .68889, 0, 0, .61111],
      8877: [0, .68889, 0, 0, .61111],
      8878: [0, .68889, 0, 0, .72222],
      8879: [0, .68889, 0, 0, .72222],
      8882: [.03517, .54986, 0, 0, .77778],
      8883: [.03517, .54986, 0, 0, .77778],
      8884: [.13667, .63667, 0, 0, .77778],
      8885: [.13667, .63667, 0, 0, .77778],
      8888: [0, .54986, 0, 0, 1.11111],
      8890: [.19444, .43056, 0, 0, .55556],
      8891: [.19444, .69224, 0, 0, .61111],
      8892: [.19444, .69224, 0, 0, .61111],
      8901: [0, .54986, 0, 0, .27778],
      8903: [.08167, .58167, 0, 0, .77778],
      8905: [.08167, .58167, 0, 0, .77778],
      8906: [.08167, .58167, 0, 0, .77778],
      8907: [0, .69224, 0, 0, .77778],
      8908: [0, .69224, 0, 0, .77778],
      8909: [-.03598, .46402, 0, 0, .77778],
      8910: [0, .54986, 0, 0, .76042],
      8911: [0, .54986, 0, 0, .76042],
      8912: [.03517, .54986, 0, 0, .77778],
      8913: [.03517, .54986, 0, 0, .77778],
      8914: [0, .54986, 0, 0, .66667],
      8915: [0, .54986, 0, 0, .66667],
      8916: [0, .69224, 0, 0, .66667],
      8918: [.0391, .5391, 0, 0, .77778],
      8919: [.0391, .5391, 0, 0, .77778],
      8920: [.03517, .54986, 0, 0, 1.33334],
      8921: [.03517, .54986, 0, 0, 1.33334],
      8922: [.38569, .88569, 0, 0, .77778],
      8923: [.38569, .88569, 0, 0, .77778],
      8926: [.13667, .63667, 0, 0, .77778],
      8927: [.13667, .63667, 0, 0, .77778],
      8928: [.30274, .79383, 0, 0, .77778],
      8929: [.30274, .79383, 0, 0, .77778],
      8934: [.23222, .74111, 0, 0, .77778],
      8935: [.23222, .74111, 0, 0, .77778],
      8936: [.23222, .74111, 0, 0, .77778],
      8937: [.23222, .74111, 0, 0, .77778],
      8938: [.20576, .70576, 0, 0, .77778],
      8939: [.20576, .70576, 0, 0, .77778],
      8940: [.30274, .79383, 0, 0, .77778],
      8941: [.30274, .79383, 0, 0, .77778],
      8994: [.19444, .69224, 0, 0, .77778],
      8995: [.19444, .69224, 0, 0, .77778],
      9416: [.15559, .69224, 0, 0, .90222],
      9484: [0, .69224, 0, 0, .5],
      9488: [0, .69224, 0, 0, .5],
      9492: [0, .37788, 0, 0, .5],
      9496: [0, .37788, 0, 0, .5],
      9585: [.19444, .68889, 0, 0, .88889],
      9586: [.19444, .74111, 0, 0, .88889],
      9632: [0, .675, 0, 0, .77778],
      9633: [0, .675, 0, 0, .77778],
      9650: [0, .54986, 0, 0, .72222],
      9651: [0, .54986, 0, 0, .72222],
      9654: [.03517, .54986, 0, 0, .77778],
      9660: [0, .54986, 0, 0, .72222],
      9661: [0, .54986, 0, 0, .72222],
      9664: [.03517, .54986, 0, 0, .77778],
      9674: [.11111, .69224, 0, 0, .66667],
      9733: [.19444, .69224, 0, 0, .94445],
      10003: [0, .69224, 0, 0, .83334],
      10016: [0, .69224, 0, 0, .83334],
      10731: [.11111, .69224, 0, 0, .66667],
      10846: [.19444, .75583, 0, 0, .61111],
      10877: [.13667, .63667, 0, 0, .77778],
      10878: [.13667, .63667, 0, 0, .77778],
      10885: [.25583, .75583, 0, 0, .77778],
      10886: [.25583, .75583, 0, 0, .77778],
      10887: [.13597, .63597, 0, 0, .77778],
      10888: [.13597, .63597, 0, 0, .77778],
      10889: [.26167, .75726, 0, 0, .77778],
      10890: [.26167, .75726, 0, 0, .77778],
      10891: [.48256, .98256, 0, 0, .77778],
      10892: [.48256, .98256, 0, 0, .77778],
      10901: [.13667, .63667, 0, 0, .77778],
      10902: [.13667, .63667, 0, 0, .77778],
      10933: [.25142, .75726, 0, 0, .77778],
      10934: [.25142, .75726, 0, 0, .77778],
      10935: [.26167, .75726, 0, 0, .77778],
      10936: [.26167, .75726, 0, 0, .77778],
      10937: [.26167, .75726, 0, 0, .77778],
      10938: [.26167, .75726, 0, 0, .77778],
      10949: [.25583, .75583, 0, 0, .77778],
      10950: [.25583, .75583, 0, 0, .77778],
      10955: [.28481, .79383, 0, 0, .77778],
      10956: [.28481, .79383, 0, 0, .77778],
      57350: [.08167, .58167, 0, 0, .22222],
      57351: [.08167, .58167, 0, 0, .38889],
      57352: [.08167, .58167, 0, 0, .77778],
      57353: [0, .43056, .04028, 0, .66667],
      57356: [.25142, .75726, 0, 0, .77778],
      57357: [.25142, .75726, 0, 0, .77778],
      57358: [.41951, .91951, 0, 0, .77778],
      57359: [.30274, .79383, 0, 0, .77778],
      57360: [.30274, .79383, 0, 0, .77778],
      57361: [.41951, .91951, 0, 0, .77778],
      57366: [.25142, .75726, 0, 0, .77778],
      57367: [.25142, .75726, 0, 0, .77778],
      57368: [.25142, .75726, 0, 0, .77778],
      57369: [.25142, .75726, 0, 0, .77778],
      57370: [.13597, .63597, 0, 0, .77778],
      57371: [.13597, .63597, 0, 0, .77778]
    },
    "Caligraphic-Regular": {
      32: [0, 0, 0, 0, .25],
      65: [0, .68333, 0, .19445, .79847],
      66: [0, .68333, .03041, .13889, .65681],
      67: [0, .68333, .05834, .13889, .52653],
      68: [0, .68333, .02778, .08334, .77139],
      69: [0, .68333, .08944, .11111, .52778],
      70: [0, .68333, .09931, .11111, .71875],
      71: [.09722, .68333, .0593, .11111, .59487],
      72: [0, .68333, .00965, .11111, .84452],
      73: [0, .68333, .07382, 0, .54452],
      74: [.09722, .68333, .18472, .16667, .67778],
      75: [0, .68333, .01445, .05556, .76195],
      76: [0, .68333, 0, .13889, .68972],
      77: [0, .68333, 0, .13889, 1.2009],
      78: [0, .68333, .14736, .08334, .82049],
      79: [0, .68333, .02778, .11111, .79611],
      80: [0, .68333, .08222, .08334, .69556],
      81: [.09722, .68333, 0, .11111, .81667],
      82: [0, .68333, 0, .08334, .8475],
      83: [0, .68333, .075, .13889, .60556],
      84: [0, .68333, .25417, 0, .54464],
      85: [0, .68333, .09931, .08334, .62583],
      86: [0, .68333, .08222, 0, .61278],
      87: [0, .68333, .08222, .08334, .98778],
      88: [0, .68333, .14643, .13889, .7133],
      89: [.09722, .68333, .08222, .08334, .66834],
      90: [0, .68333, .07944, .13889, .72473],
      160: [0, 0, 0, 0, .25]
    },
    "Fraktur-Regular": {
      32: [0, 0, 0, 0, .25],
      33: [0, .69141, 0, 0, .29574],
      34: [0, .69141, 0, 0, .21471],
      38: [0, .69141, 0, 0, .73786],
      39: [0, .69141, 0, 0, .21201],
      40: [.24982, .74947, 0, 0, .38865],
      41: [.24982, .74947, 0, 0, .38865],
      42: [0, .62119, 0, 0, .27764],
      43: [.08319, .58283, 0, 0, .75623],
      44: [0, .10803, 0, 0, .27764],
      45: [.08319, .58283, 0, 0, .75623],
      46: [0, .10803, 0, 0, .27764],
      47: [.24982, .74947, 0, 0, .50181],
      48: [0, .47534, 0, 0, .50181],
      49: [0, .47534, 0, 0, .50181],
      50: [0, .47534, 0, 0, .50181],
      51: [.18906, .47534, 0, 0, .50181],
      52: [.18906, .47534, 0, 0, .50181],
      53: [.18906, .47534, 0, 0, .50181],
      54: [0, .69141, 0, 0, .50181],
      55: [.18906, .47534, 0, 0, .50181],
      56: [0, .69141, 0, 0, .50181],
      57: [.18906, .47534, 0, 0, .50181],
      58: [0, .47534, 0, 0, .21606],
      59: [.12604, .47534, 0, 0, .21606],
      61: [-.13099, .36866, 0, 0, .75623],
      63: [0, .69141, 0, 0, .36245],
      65: [0, .69141, 0, 0, .7176],
      66: [0, .69141, 0, 0, .88397],
      67: [0, .69141, 0, 0, .61254],
      68: [0, .69141, 0, 0, .83158],
      69: [0, .69141, 0, 0, .66278],
      70: [.12604, .69141, 0, 0, .61119],
      71: [0, .69141, 0, 0, .78539],
      72: [.06302, .69141, 0, 0, .7203],
      73: [0, .69141, 0, 0, .55448],
      74: [.12604, .69141, 0, 0, .55231],
      75: [0, .69141, 0, 0, .66845],
      76: [0, .69141, 0, 0, .66602],
      77: [0, .69141, 0, 0, 1.04953],
      78: [0, .69141, 0, 0, .83212],
      79: [0, .69141, 0, 0, .82699],
      80: [.18906, .69141, 0, 0, .82753],
      81: [.03781, .69141, 0, 0, .82699],
      82: [0, .69141, 0, 0, .82807],
      83: [0, .69141, 0, 0, .82861],
      84: [0, .69141, 0, 0, .66899],
      85: [0, .69141, 0, 0, .64576],
      86: [0, .69141, 0, 0, .83131],
      87: [0, .69141, 0, 0, 1.04602],
      88: [0, .69141, 0, 0, .71922],
      89: [.18906, .69141, 0, 0, .83293],
      90: [.12604, .69141, 0, 0, .60201],
      91: [.24982, .74947, 0, 0, .27764],
      93: [.24982, .74947, 0, 0, .27764],
      94: [0, .69141, 0, 0, .49965],
      97: [0, .47534, 0, 0, .50046],
      98: [0, .69141, 0, 0, .51315],
      99: [0, .47534, 0, 0, .38946],
      100: [0, .62119, 0, 0, .49857],
      101: [0, .47534, 0, 0, .40053],
      102: [.18906, .69141, 0, 0, .32626],
      103: [.18906, .47534, 0, 0, .5037],
      104: [.18906, .69141, 0, 0, .52126],
      105: [0, .69141, 0, 0, .27899],
      106: [0, .69141, 0, 0, .28088],
      107: [0, .69141, 0, 0, .38946],
      108: [0, .69141, 0, 0, .27953],
      109: [0, .47534, 0, 0, .76676],
      110: [0, .47534, 0, 0, .52666],
      111: [0, .47534, 0, 0, .48885],
      112: [.18906, .52396, 0, 0, .50046],
      113: [.18906, .47534, 0, 0, .48912],
      114: [0, .47534, 0, 0, .38919],
      115: [0, .47534, 0, 0, .44266],
      116: [0, .62119, 0, 0, .33301],
      117: [0, .47534, 0, 0, .5172],
      118: [0, .52396, 0, 0, .5118],
      119: [0, .52396, 0, 0, .77351],
      120: [.18906, .47534, 0, 0, .38865],
      121: [.18906, .47534, 0, 0, .49884],
      122: [.18906, .47534, 0, 0, .39054],
      160: [0, 0, 0, 0, .25],
      8216: [0, .69141, 0, 0, .21471],
      8217: [0, .69141, 0, 0, .21471],
      58112: [0, .62119, 0, 0, .49749],
      58113: [0, .62119, 0, 0, .4983],
      58114: [.18906, .69141, 0, 0, .33328],
      58115: [.18906, .69141, 0, 0, .32923],
      58116: [.18906, .47534, 0, 0, .50343],
      58117: [0, .69141, 0, 0, .33301],
      58118: [0, .62119, 0, 0, .33409],
      58119: [0, .47534, 0, 0, .50073]
    },
    "Main-Bold": {
      32: [0, 0, 0, 0, .25],
      33: [0, .69444, 0, 0, .35],
      34: [0, .69444, 0, 0, .60278],
      35: [.19444, .69444, 0, 0, .95833],
      36: [.05556, .75, 0, 0, .575],
      37: [.05556, .75, 0, 0, .95833],
      38: [0, .69444, 0, 0, .89444],
      39: [0, .69444, 0, 0, .31944],
      40: [.25, .75, 0, 0, .44722],
      41: [.25, .75, 0, 0, .44722],
      42: [0, .75, 0, 0, .575],
      43: [.13333, .63333, 0, 0, .89444],
      44: [.19444, .15556, 0, 0, .31944],
      45: [0, .44444, 0, 0, .38333],
      46: [0, .15556, 0, 0, .31944],
      47: [.25, .75, 0, 0, .575],
      48: [0, .64444, 0, 0, .575],
      49: [0, .64444, 0, 0, .575],
      50: [0, .64444, 0, 0, .575],
      51: [0, .64444, 0, 0, .575],
      52: [0, .64444, 0, 0, .575],
      53: [0, .64444, 0, 0, .575],
      54: [0, .64444, 0, 0, .575],
      55: [0, .64444, 0, 0, .575],
      56: [0, .64444, 0, 0, .575],
      57: [0, .64444, 0, 0, .575],
      58: [0, .44444, 0, 0, .31944],
      59: [.19444, .44444, 0, 0, .31944],
      60: [.08556, .58556, 0, 0, .89444],
      61: [-.10889, .39111, 0, 0, .89444],
      62: [.08556, .58556, 0, 0, .89444],
      63: [0, .69444, 0, 0, .54305],
      64: [0, .69444, 0, 0, .89444],
      65: [0, .68611, 0, 0, .86944],
      66: [0, .68611, 0, 0, .81805],
      67: [0, .68611, 0, 0, .83055],
      68: [0, .68611, 0, 0, .88194],
      69: [0, .68611, 0, 0, .75555],
      70: [0, .68611, 0, 0, .72361],
      71: [0, .68611, 0, 0, .90416],
      72: [0, .68611, 0, 0, .9],
      73: [0, .68611, 0, 0, .43611],
      74: [0, .68611, 0, 0, .59444],
      75: [0, .68611, 0, 0, .90138],
      76: [0, .68611, 0, 0, .69166],
      77: [0, .68611, 0, 0, 1.09166],
      78: [0, .68611, 0, 0, .9],
      79: [0, .68611, 0, 0, .86388],
      80: [0, .68611, 0, 0, .78611],
      81: [.19444, .68611, 0, 0, .86388],
      82: [0, .68611, 0, 0, .8625],
      83: [0, .68611, 0, 0, .63889],
      84: [0, .68611, 0, 0, .8],
      85: [0, .68611, 0, 0, .88472],
      86: [0, .68611, .01597, 0, .86944],
      87: [0, .68611, .01597, 0, 1.18888],
      88: [0, .68611, 0, 0, .86944],
      89: [0, .68611, .02875, 0, .86944],
      90: [0, .68611, 0, 0, .70277],
      91: [.25, .75, 0, 0, .31944],
      92: [.25, .75, 0, 0, .575],
      93: [.25, .75, 0, 0, .31944],
      94: [0, .69444, 0, 0, .575],
      95: [.31, .13444, .03194, 0, .575],
      97: [0, .44444, 0, 0, .55902],
      98: [0, .69444, 0, 0, .63889],
      99: [0, .44444, 0, 0, .51111],
      100: [0, .69444, 0, 0, .63889],
      101: [0, .44444, 0, 0, .52708],
      102: [0, .69444, .10903, 0, .35139],
      103: [.19444, .44444, .01597, 0, .575],
      104: [0, .69444, 0, 0, .63889],
      105: [0, .69444, 0, 0, .31944],
      106: [.19444, .69444, 0, 0, .35139],
      107: [0, .69444, 0, 0, .60694],
      108: [0, .69444, 0, 0, .31944],
      109: [0, .44444, 0, 0, .95833],
      110: [0, .44444, 0, 0, .63889],
      111: [0, .44444, 0, 0, .575],
      112: [.19444, .44444, 0, 0, .63889],
      113: [.19444, .44444, 0, 0, .60694],
      114: [0, .44444, 0, 0, .47361],
      115: [0, .44444, 0, 0, .45361],
      116: [0, .63492, 0, 0, .44722],
      117: [0, .44444, 0, 0, .63889],
      118: [0, .44444, .01597, 0, .60694],
      119: [0, .44444, .01597, 0, .83055],
      120: [0, .44444, 0, 0, .60694],
      121: [.19444, .44444, .01597, 0, .60694],
      122: [0, .44444, 0, 0, .51111],
      123: [.25, .75, 0, 0, .575],
      124: [.25, .75, 0, 0, .31944],
      125: [.25, .75, 0, 0, .575],
      126: [.35, .34444, 0, 0, .575],
      160: [0, 0, 0, 0, .25],
      163: [0, .69444, 0, 0, .86853],
      168: [0, .69444, 0, 0, .575],
      172: [0, .44444, 0, 0, .76666],
      176: [0, .69444, 0, 0, .86944],
      177: [.13333, .63333, 0, 0, .89444],
      184: [.17014, 0, 0, 0, .51111],
      198: [0, .68611, 0, 0, 1.04166],
      215: [.13333, .63333, 0, 0, .89444],
      216: [.04861, .73472, 0, 0, .89444],
      223: [0, .69444, 0, 0, .59722],
      230: [0, .44444, 0, 0, .83055],
      247: [.13333, .63333, 0, 0, .89444],
      248: [.09722, .54167, 0, 0, .575],
      305: [0, .44444, 0, 0, .31944],
      338: [0, .68611, 0, 0, 1.16944],
      339: [0, .44444, 0, 0, .89444],
      567: [.19444, .44444, 0, 0, .35139],
      710: [0, .69444, 0, 0, .575],
      711: [0, .63194, 0, 0, .575],
      713: [0, .59611, 0, 0, .575],
      714: [0, .69444, 0, 0, .575],
      715: [0, .69444, 0, 0, .575],
      728: [0, .69444, 0, 0, .575],
      729: [0, .69444, 0, 0, .31944],
      730: [0, .69444, 0, 0, .86944],
      732: [0, .69444, 0, 0, .575],
      733: [0, .69444, 0, 0, .575],
      915: [0, .68611, 0, 0, .69166],
      916: [0, .68611, 0, 0, .95833],
      920: [0, .68611, 0, 0, .89444],
      923: [0, .68611, 0, 0, .80555],
      926: [0, .68611, 0, 0, .76666],
      928: [0, .68611, 0, 0, .9],
      931: [0, .68611, 0, 0, .83055],
      933: [0, .68611, 0, 0, .89444],
      934: [0, .68611, 0, 0, .83055],
      936: [0, .68611, 0, 0, .89444],
      937: [0, .68611, 0, 0, .83055],
      8211: [0, .44444, .03194, 0, .575],
      8212: [0, .44444, .03194, 0, 1.14999],
      8216: [0, .69444, 0, 0, .31944],
      8217: [0, .69444, 0, 0, .31944],
      8220: [0, .69444, 0, 0, .60278],
      8221: [0, .69444, 0, 0, .60278],
      8224: [.19444, .69444, 0, 0, .51111],
      8225: [.19444, .69444, 0, 0, .51111],
      8242: [0, .55556, 0, 0, .34444],
      8407: [0, .72444, .15486, 0, .575],
      8463: [0, .69444, 0, 0, .66759],
      8465: [0, .69444, 0, 0, .83055],
      8467: [0, .69444, 0, 0, .47361],
      8472: [.19444, .44444, 0, 0, .74027],
      8476: [0, .69444, 0, 0, .83055],
      8501: [0, .69444, 0, 0, .70277],
      8592: [-.10889, .39111, 0, 0, 1.14999],
      8593: [.19444, .69444, 0, 0, .575],
      8594: [-.10889, .39111, 0, 0, 1.14999],
      8595: [.19444, .69444, 0, 0, .575],
      8596: [-.10889, .39111, 0, 0, 1.14999],
      8597: [.25, .75, 0, 0, .575],
      8598: [.19444, .69444, 0, 0, 1.14999],
      8599: [.19444, .69444, 0, 0, 1.14999],
      8600: [.19444, .69444, 0, 0, 1.14999],
      8601: [.19444, .69444, 0, 0, 1.14999],
      8636: [-.10889, .39111, 0, 0, 1.14999],
      8637: [-.10889, .39111, 0, 0, 1.14999],
      8640: [-.10889, .39111, 0, 0, 1.14999],
      8641: [-.10889, .39111, 0, 0, 1.14999],
      8656: [-.10889, .39111, 0, 0, 1.14999],
      8657: [.19444, .69444, 0, 0, .70277],
      8658: [-.10889, .39111, 0, 0, 1.14999],
      8659: [.19444, .69444, 0, 0, .70277],
      8660: [-.10889, .39111, 0, 0, 1.14999],
      8661: [.25, .75, 0, 0, .70277],
      8704: [0, .69444, 0, 0, .63889],
      8706: [0, .69444, .06389, 0, .62847],
      8707: [0, .69444, 0, 0, .63889],
      8709: [.05556, .75, 0, 0, .575],
      8711: [0, .68611, 0, 0, .95833],
      8712: [.08556, .58556, 0, 0, .76666],
      8715: [.08556, .58556, 0, 0, .76666],
      8722: [.13333, .63333, 0, 0, .89444],
      8723: [.13333, .63333, 0, 0, .89444],
      8725: [.25, .75, 0, 0, .575],
      8726: [.25, .75, 0, 0, .575],
      8727: [-.02778, .47222, 0, 0, .575],
      8728: [-.02639, .47361, 0, 0, .575],
      8729: [-.02639, .47361, 0, 0, .575],
      8730: [.18, .82, 0, 0, .95833],
      8733: [0, .44444, 0, 0, .89444],
      8734: [0, .44444, 0, 0, 1.14999],
      8736: [0, .69224, 0, 0, .72222],
      8739: [.25, .75, 0, 0, .31944],
      8741: [.25, .75, 0, 0, .575],
      8743: [0, .55556, 0, 0, .76666],
      8744: [0, .55556, 0, 0, .76666],
      8745: [0, .55556, 0, 0, .76666],
      8746: [0, .55556, 0, 0, .76666],
      8747: [.19444, .69444, .12778, 0, .56875],
      8764: [-.10889, .39111, 0, 0, .89444],
      8768: [.19444, .69444, 0, 0, .31944],
      8771: [.00222, .50222, 0, 0, .89444],
      8773: [.027, .638, 0, 0, .894],
      8776: [.02444, .52444, 0, 0, .89444],
      8781: [.00222, .50222, 0, 0, .89444],
      8801: [.00222, .50222, 0, 0, .89444],
      8804: [.19667, .69667, 0, 0, .89444],
      8805: [.19667, .69667, 0, 0, .89444],
      8810: [.08556, .58556, 0, 0, 1.14999],
      8811: [.08556, .58556, 0, 0, 1.14999],
      8826: [.08556, .58556, 0, 0, .89444],
      8827: [.08556, .58556, 0, 0, .89444],
      8834: [.08556, .58556, 0, 0, .89444],
      8835: [.08556, .58556, 0, 0, .89444],
      8838: [.19667, .69667, 0, 0, .89444],
      8839: [.19667, .69667, 0, 0, .89444],
      8846: [0, .55556, 0, 0, .76666],
      8849: [.19667, .69667, 0, 0, .89444],
      8850: [.19667, .69667, 0, 0, .89444],
      8851: [0, .55556, 0, 0, .76666],
      8852: [0, .55556, 0, 0, .76666],
      8853: [.13333, .63333, 0, 0, .89444],
      8854: [.13333, .63333, 0, 0, .89444],
      8855: [.13333, .63333, 0, 0, .89444],
      8856: [.13333, .63333, 0, 0, .89444],
      8857: [.13333, .63333, 0, 0, .89444],
      8866: [0, .69444, 0, 0, .70277],
      8867: [0, .69444, 0, 0, .70277],
      8868: [0, .69444, 0, 0, .89444],
      8869: [0, .69444, 0, 0, .89444],
      8900: [-.02639, .47361, 0, 0, .575],
      8901: [-.02639, .47361, 0, 0, .31944],
      8902: [-.02778, .47222, 0, 0, .575],
      8968: [.25, .75, 0, 0, .51111],
      8969: [.25, .75, 0, 0, .51111],
      8970: [.25, .75, 0, 0, .51111],
      8971: [.25, .75, 0, 0, .51111],
      8994: [-.13889, .36111, 0, 0, 1.14999],
      8995: [-.13889, .36111, 0, 0, 1.14999],
      9651: [.19444, .69444, 0, 0, 1.02222],
      9657: [-.02778, .47222, 0, 0, .575],
      9661: [.19444, .69444, 0, 0, 1.02222],
      9667: [-.02778, .47222, 0, 0, .575],
      9711: [.19444, .69444, 0, 0, 1.14999],
      9824: [.12963, .69444, 0, 0, .89444],
      9825: [.12963, .69444, 0, 0, .89444],
      9826: [.12963, .69444, 0, 0, .89444],
      9827: [.12963, .69444, 0, 0, .89444],
      9837: [0, .75, 0, 0, .44722],
      9838: [.19444, .69444, 0, 0, .44722],
      9839: [.19444, .69444, 0, 0, .44722],
      10216: [.25, .75, 0, 0, .44722],
      10217: [.25, .75, 0, 0, .44722],
      10815: [0, .68611, 0, 0, .9],
      10927: [.19667, .69667, 0, 0, .89444],
      10928: [.19667, .69667, 0, 0, .89444],
      57376: [.19444, .69444, 0, 0, 0]
    },
    "Main-BoldItalic": {
      32: [0, 0, 0, 0, .25],
      33: [0, .69444, .11417, 0, .38611],
      34: [0, .69444, .07939, 0, .62055],
      35: [.19444, .69444, .06833, 0, .94444],
      37: [.05556, .75, .12861, 0, .94444],
      38: [0, .69444, .08528, 0, .88555],
      39: [0, .69444, .12945, 0, .35555],
      40: [.25, .75, .15806, 0, .47333],
      41: [.25, .75, .03306, 0, .47333],
      42: [0, .75, .14333, 0, .59111],
      43: [.10333, .60333, .03306, 0, .88555],
      44: [.19444, .14722, 0, 0, .35555],
      45: [0, .44444, .02611, 0, .41444],
      46: [0, .14722, 0, 0, .35555],
      47: [.25, .75, .15806, 0, .59111],
      48: [0, .64444, .13167, 0, .59111],
      49: [0, .64444, .13167, 0, .59111],
      50: [0, .64444, .13167, 0, .59111],
      51: [0, .64444, .13167, 0, .59111],
      52: [.19444, .64444, .13167, 0, .59111],
      53: [0, .64444, .13167, 0, .59111],
      54: [0, .64444, .13167, 0, .59111],
      55: [.19444, .64444, .13167, 0, .59111],
      56: [0, .64444, .13167, 0, .59111],
      57: [0, .64444, .13167, 0, .59111],
      58: [0, .44444, .06695, 0, .35555],
      59: [.19444, .44444, .06695, 0, .35555],
      61: [-.10889, .39111, .06833, 0, .88555],
      63: [0, .69444, .11472, 0, .59111],
      64: [0, .69444, .09208, 0, .88555],
      65: [0, .68611, 0, 0, .86555],
      66: [0, .68611, .0992, 0, .81666],
      67: [0, .68611, .14208, 0, .82666],
      68: [0, .68611, .09062, 0, .87555],
      69: [0, .68611, .11431, 0, .75666],
      70: [0, .68611, .12903, 0, .72722],
      71: [0, .68611, .07347, 0, .89527],
      72: [0, .68611, .17208, 0, .8961],
      73: [0, .68611, .15681, 0, .47166],
      74: [0, .68611, .145, 0, .61055],
      75: [0, .68611, .14208, 0, .89499],
      76: [0, .68611, 0, 0, .69777],
      77: [0, .68611, .17208, 0, 1.07277],
      78: [0, .68611, .17208, 0, .8961],
      79: [0, .68611, .09062, 0, .85499],
      80: [0, .68611, .0992, 0, .78721],
      81: [.19444, .68611, .09062, 0, .85499],
      82: [0, .68611, .02559, 0, .85944],
      83: [0, .68611, .11264, 0, .64999],
      84: [0, .68611, .12903, 0, .7961],
      85: [0, .68611, .17208, 0, .88083],
      86: [0, .68611, .18625, 0, .86555],
      87: [0, .68611, .18625, 0, 1.15999],
      88: [0, .68611, .15681, 0, .86555],
      89: [0, .68611, .19803, 0, .86555],
      90: [0, .68611, .14208, 0, .70888],
      91: [.25, .75, .1875, 0, .35611],
      93: [.25, .75, .09972, 0, .35611],
      94: [0, .69444, .06709, 0, .59111],
      95: [.31, .13444, .09811, 0, .59111],
      97: [0, .44444, .09426, 0, .59111],
      98: [0, .69444, .07861, 0, .53222],
      99: [0, .44444, .05222, 0, .53222],
      100: [0, .69444, .10861, 0, .59111],
      101: [0, .44444, .085, 0, .53222],
      102: [.19444, .69444, .21778, 0, .4],
      103: [.19444, .44444, .105, 0, .53222],
      104: [0, .69444, .09426, 0, .59111],
      105: [0, .69326, .11387, 0, .35555],
      106: [.19444, .69326, .1672, 0, .35555],
      107: [0, .69444, .11111, 0, .53222],
      108: [0, .69444, .10861, 0, .29666],
      109: [0, .44444, .09426, 0, .94444],
      110: [0, .44444, .09426, 0, .64999],
      111: [0, .44444, .07861, 0, .59111],
      112: [.19444, .44444, .07861, 0, .59111],
      113: [.19444, .44444, .105, 0, .53222],
      114: [0, .44444, .11111, 0, .50167],
      115: [0, .44444, .08167, 0, .48694],
      116: [0, .63492, .09639, 0, .385],
      117: [0, .44444, .09426, 0, .62055],
      118: [0, .44444, .11111, 0, .53222],
      119: [0, .44444, .11111, 0, .76777],
      120: [0, .44444, .12583, 0, .56055],
      121: [.19444, .44444, .105, 0, .56166],
      122: [0, .44444, .13889, 0, .49055],
      126: [.35, .34444, .11472, 0, .59111],
      160: [0, 0, 0, 0, .25],
      168: [0, .69444, .11473, 0, .59111],
      176: [0, .69444, 0, 0, .94888],
      184: [.17014, 0, 0, 0, .53222],
      198: [0, .68611, .11431, 0, 1.02277],
      216: [.04861, .73472, .09062, 0, .88555],
      223: [.19444, .69444, .09736, 0, .665],
      230: [0, .44444, .085, 0, .82666],
      248: [.09722, .54167, .09458, 0, .59111],
      305: [0, .44444, .09426, 0, .35555],
      338: [0, .68611, .11431, 0, 1.14054],
      339: [0, .44444, .085, 0, .82666],
      567: [.19444, .44444, .04611, 0, .385],
      710: [0, .69444, .06709, 0, .59111],
      711: [0, .63194, .08271, 0, .59111],
      713: [0, .59444, .10444, 0, .59111],
      714: [0, .69444, .08528, 0, .59111],
      715: [0, .69444, 0, 0, .59111],
      728: [0, .69444, .10333, 0, .59111],
      729: [0, .69444, .12945, 0, .35555],
      730: [0, .69444, 0, 0, .94888],
      732: [0, .69444, .11472, 0, .59111],
      733: [0, .69444, .11472, 0, .59111],
      915: [0, .68611, .12903, 0, .69777],
      916: [0, .68611, 0, 0, .94444],
      920: [0, .68611, .09062, 0, .88555],
      923: [0, .68611, 0, 0, .80666],
      926: [0, .68611, .15092, 0, .76777],
      928: [0, .68611, .17208, 0, .8961],
      931: [0, .68611, .11431, 0, .82666],
      933: [0, .68611, .10778, 0, .88555],
      934: [0, .68611, .05632, 0, .82666],
      936: [0, .68611, .10778, 0, .88555],
      937: [0, .68611, .0992, 0, .82666],
      8211: [0, .44444, .09811, 0, .59111],
      8212: [0, .44444, .09811, 0, 1.18221],
      8216: [0, .69444, .12945, 0, .35555],
      8217: [0, .69444, .12945, 0, .35555],
      8220: [0, .69444, .16772, 0, .62055],
      8221: [0, .69444, .07939, 0, .62055]
    },
    "Main-Italic": {
      32: [0, 0, 0, 0, .25],
      33: [0, .69444, .12417, 0, .30667],
      34: [0, .69444, .06961, 0, .51444],
      35: [.19444, .69444, .06616, 0, .81777],
      37: [.05556, .75, .13639, 0, .81777],
      38: [0, .69444, .09694, 0, .76666],
      39: [0, .69444, .12417, 0, .30667],
      40: [.25, .75, .16194, 0, .40889],
      41: [.25, .75, .03694, 0, .40889],
      42: [0, .75, .14917, 0, .51111],
      43: [.05667, .56167, .03694, 0, .76666],
      44: [.19444, .10556, 0, 0, .30667],
      45: [0, .43056, .02826, 0, .35778],
      46: [0, .10556, 0, 0, .30667],
      47: [.25, .75, .16194, 0, .51111],
      48: [0, .64444, .13556, 0, .51111],
      49: [0, .64444, .13556, 0, .51111],
      50: [0, .64444, .13556, 0, .51111],
      51: [0, .64444, .13556, 0, .51111],
      52: [.19444, .64444, .13556, 0, .51111],
      53: [0, .64444, .13556, 0, .51111],
      54: [0, .64444, .13556, 0, .51111],
      55: [.19444, .64444, .13556, 0, .51111],
      56: [0, .64444, .13556, 0, .51111],
      57: [0, .64444, .13556, 0, .51111],
      58: [0, .43056, .0582, 0, .30667],
      59: [.19444, .43056, .0582, 0, .30667],
      61: [-.13313, .36687, .06616, 0, .76666],
      63: [0, .69444, .1225, 0, .51111],
      64: [0, .69444, .09597, 0, .76666],
      65: [0, .68333, 0, 0, .74333],
      66: [0, .68333, .10257, 0, .70389],
      67: [0, .68333, .14528, 0, .71555],
      68: [0, .68333, .09403, 0, .755],
      69: [0, .68333, .12028, 0, .67833],
      70: [0, .68333, .13305, 0, .65277],
      71: [0, .68333, .08722, 0, .77361],
      72: [0, .68333, .16389, 0, .74333],
      73: [0, .68333, .15806, 0, .38555],
      74: [0, .68333, .14028, 0, .525],
      75: [0, .68333, .14528, 0, .76888],
      76: [0, .68333, 0, 0, .62722],
      77: [0, .68333, .16389, 0, .89666],
      78: [0, .68333, .16389, 0, .74333],
      79: [0, .68333, .09403, 0, .76666],
      80: [0, .68333, .10257, 0, .67833],
      81: [.19444, .68333, .09403, 0, .76666],
      82: [0, .68333, .03868, 0, .72944],
      83: [0, .68333, .11972, 0, .56222],
      84: [0, .68333, .13305, 0, .71555],
      85: [0, .68333, .16389, 0, .74333],
      86: [0, .68333, .18361, 0, .74333],
      87: [0, .68333, .18361, 0, .99888],
      88: [0, .68333, .15806, 0, .74333],
      89: [0, .68333, .19383, 0, .74333],
      90: [0, .68333, .14528, 0, .61333],
      91: [.25, .75, .1875, 0, .30667],
      93: [.25, .75, .10528, 0, .30667],
      94: [0, .69444, .06646, 0, .51111],
      95: [.31, .12056, .09208, 0, .51111],
      97: [0, .43056, .07671, 0, .51111],
      98: [0, .69444, .06312, 0, .46],
      99: [0, .43056, .05653, 0, .46],
      100: [0, .69444, .10333, 0, .51111],
      101: [0, .43056, .07514, 0, .46],
      102: [.19444, .69444, .21194, 0, .30667],
      103: [.19444, .43056, .08847, 0, .46],
      104: [0, .69444, .07671, 0, .51111],
      105: [0, .65536, .1019, 0, .30667],
      106: [.19444, .65536, .14467, 0, .30667],
      107: [0, .69444, .10764, 0, .46],
      108: [0, .69444, .10333, 0, .25555],
      109: [0, .43056, .07671, 0, .81777],
      110: [0, .43056, .07671, 0, .56222],
      111: [0, .43056, .06312, 0, .51111],
      112: [.19444, .43056, .06312, 0, .51111],
      113: [.19444, .43056, .08847, 0, .46],
      114: [0, .43056, .10764, 0, .42166],
      115: [0, .43056, .08208, 0, .40889],
      116: [0, .61508, .09486, 0, .33222],
      117: [0, .43056, .07671, 0, .53666],
      118: [0, .43056, .10764, 0, .46],
      119: [0, .43056, .10764, 0, .66444],
      120: [0, .43056, .12042, 0, .46389],
      121: [.19444, .43056, .08847, 0, .48555],
      122: [0, .43056, .12292, 0, .40889],
      126: [.35, .31786, .11585, 0, .51111],
      160: [0, 0, 0, 0, .25],
      168: [0, .66786, .10474, 0, .51111],
      176: [0, .69444, 0, 0, .83129],
      184: [.17014, 0, 0, 0, .46],
      198: [0, .68333, .12028, 0, .88277],
      216: [.04861, .73194, .09403, 0, .76666],
      223: [.19444, .69444, .10514, 0, .53666],
      230: [0, .43056, .07514, 0, .71555],
      248: [.09722, .52778, .09194, 0, .51111],
      338: [0, .68333, .12028, 0, .98499],
      339: [0, .43056, .07514, 0, .71555],
      710: [0, .69444, .06646, 0, .51111],
      711: [0, .62847, .08295, 0, .51111],
      713: [0, .56167, .10333, 0, .51111],
      714: [0, .69444, .09694, 0, .51111],
      715: [0, .69444, 0, 0, .51111],
      728: [0, .69444, .10806, 0, .51111],
      729: [0, .66786, .11752, 0, .30667],
      730: [0, .69444, 0, 0, .83129],
      732: [0, .66786, .11585, 0, .51111],
      733: [0, .69444, .1225, 0, .51111],
      915: [0, .68333, .13305, 0, .62722],
      916: [0, .68333, 0, 0, .81777],
      920: [0, .68333, .09403, 0, .76666],
      923: [0, .68333, 0, 0, .69222],
      926: [0, .68333, .15294, 0, .66444],
      928: [0, .68333, .16389, 0, .74333],
      931: [0, .68333, .12028, 0, .71555],
      933: [0, .68333, .11111, 0, .76666],
      934: [0, .68333, .05986, 0, .71555],
      936: [0, .68333, .11111, 0, .76666],
      937: [0, .68333, .10257, 0, .71555],
      8211: [0, .43056, .09208, 0, .51111],
      8212: [0, .43056, .09208, 0, 1.02222],
      8216: [0, .69444, .12417, 0, .30667],
      8217: [0, .69444, .12417, 0, .30667],
      8220: [0, .69444, .1685, 0, .51444],
      8221: [0, .69444, .06961, 0, .51444],
      8463: [0, .68889, 0, 0, .54028]
    },
    "Main-Regular": {
      32: [0, 0, 0, 0, .25],
      33: [0, .69444, 0, 0, .27778],
      34: [0, .69444, 0, 0, .5],
      35: [.19444, .69444, 0, 0, .83334],
      36: [.05556, .75, 0, 0, .5],
      37: [.05556, .75, 0, 0, .83334],
      38: [0, .69444, 0, 0, .77778],
      39: [0, .69444, 0, 0, .27778],
      40: [.25, .75, 0, 0, .38889],
      41: [.25, .75, 0, 0, .38889],
      42: [0, .75, 0, 0, .5],
      43: [.08333, .58333, 0, 0, .77778],
      44: [.19444, .10556, 0, 0, .27778],
      45: [0, .43056, 0, 0, .33333],
      46: [0, .10556, 0, 0, .27778],
      47: [.25, .75, 0, 0, .5],
      48: [0, .64444, 0, 0, .5],
      49: [0, .64444, 0, 0, .5],
      50: [0, .64444, 0, 0, .5],
      51: [0, .64444, 0, 0, .5],
      52: [0, .64444, 0, 0, .5],
      53: [0, .64444, 0, 0, .5],
      54: [0, .64444, 0, 0, .5],
      55: [0, .64444, 0, 0, .5],
      56: [0, .64444, 0, 0, .5],
      57: [0, .64444, 0, 0, .5],
      58: [0, .43056, 0, 0, .27778],
      59: [.19444, .43056, 0, 0, .27778],
      60: [.0391, .5391, 0, 0, .77778],
      61: [-.13313, .36687, 0, 0, .77778],
      62: [.0391, .5391, 0, 0, .77778],
      63: [0, .69444, 0, 0, .47222],
      64: [0, .69444, 0, 0, .77778],
      65: [0, .68333, 0, 0, .75],
      66: [0, .68333, 0, 0, .70834],
      67: [0, .68333, 0, 0, .72222],
      68: [0, .68333, 0, 0, .76389],
      69: [0, .68333, 0, 0, .68056],
      70: [0, .68333, 0, 0, .65278],
      71: [0, .68333, 0, 0, .78472],
      72: [0, .68333, 0, 0, .75],
      73: [0, .68333, 0, 0, .36111],
      74: [0, .68333, 0, 0, .51389],
      75: [0, .68333, 0, 0, .77778],
      76: [0, .68333, 0, 0, .625],
      77: [0, .68333, 0, 0, .91667],
      78: [0, .68333, 0, 0, .75],
      79: [0, .68333, 0, 0, .77778],
      80: [0, .68333, 0, 0, .68056],
      81: [.19444, .68333, 0, 0, .77778],
      82: [0, .68333, 0, 0, .73611],
      83: [0, .68333, 0, 0, .55556],
      84: [0, .68333, 0, 0, .72222],
      85: [0, .68333, 0, 0, .75],
      86: [0, .68333, .01389, 0, .75],
      87: [0, .68333, .01389, 0, 1.02778],
      88: [0, .68333, 0, 0, .75],
      89: [0, .68333, .025, 0, .75],
      90: [0, .68333, 0, 0, .61111],
      91: [.25, .75, 0, 0, .27778],
      92: [.25, .75, 0, 0, .5],
      93: [.25, .75, 0, 0, .27778],
      94: [0, .69444, 0, 0, .5],
      95: [.31, .12056, .02778, 0, .5],
      97: [0, .43056, 0, 0, .5],
      98: [0, .69444, 0, 0, .55556],
      99: [0, .43056, 0, 0, .44445],
      100: [0, .69444, 0, 0, .55556],
      101: [0, .43056, 0, 0, .44445],
      102: [0, .69444, .07778, 0, .30556],
      103: [.19444, .43056, .01389, 0, .5],
      104: [0, .69444, 0, 0, .55556],
      105: [0, .66786, 0, 0, .27778],
      106: [.19444, .66786, 0, 0, .30556],
      107: [0, .69444, 0, 0, .52778],
      108: [0, .69444, 0, 0, .27778],
      109: [0, .43056, 0, 0, .83334],
      110: [0, .43056, 0, 0, .55556],
      111: [0, .43056, 0, 0, .5],
      112: [.19444, .43056, 0, 0, .55556],
      113: [.19444, .43056, 0, 0, .52778],
      114: [0, .43056, 0, 0, .39167],
      115: [0, .43056, 0, 0, .39445],
      116: [0, .61508, 0, 0, .38889],
      117: [0, .43056, 0, 0, .55556],
      118: [0, .43056, .01389, 0, .52778],
      119: [0, .43056, .01389, 0, .72222],
      120: [0, .43056, 0, 0, .52778],
      121: [.19444, .43056, .01389, 0, .52778],
      122: [0, .43056, 0, 0, .44445],
      123: [.25, .75, 0, 0, .5],
      124: [.25, .75, 0, 0, .27778],
      125: [.25, .75, 0, 0, .5],
      126: [.35, .31786, 0, 0, .5],
      160: [0, 0, 0, 0, .25],
      163: [0, .69444, 0, 0, .76909],
      167: [.19444, .69444, 0, 0, .44445],
      168: [0, .66786, 0, 0, .5],
      172: [0, .43056, 0, 0, .66667],
      176: [0, .69444, 0, 0, .75],
      177: [.08333, .58333, 0, 0, .77778],
      182: [.19444, .69444, 0, 0, .61111],
      184: [.17014, 0, 0, 0, .44445],
      198: [0, .68333, 0, 0, .90278],
      215: [.08333, .58333, 0, 0, .77778],
      216: [.04861, .73194, 0, 0, .77778],
      223: [0, .69444, 0, 0, .5],
      230: [0, .43056, 0, 0, .72222],
      247: [.08333, .58333, 0, 0, .77778],
      248: [.09722, .52778, 0, 0, .5],
      305: [0, .43056, 0, 0, .27778],
      338: [0, .68333, 0, 0, 1.01389],
      339: [0, .43056, 0, 0, .77778],
      567: [.19444, .43056, 0, 0, .30556],
      710: [0, .69444, 0, 0, .5],
      711: [0, .62847, 0, 0, .5],
      713: [0, .56778, 0, 0, .5],
      714: [0, .69444, 0, 0, .5],
      715: [0, .69444, 0, 0, .5],
      728: [0, .69444, 0, 0, .5],
      729: [0, .66786, 0, 0, .27778],
      730: [0, .69444, 0, 0, .75],
      732: [0, .66786, 0, 0, .5],
      733: [0, .69444, 0, 0, .5],
      915: [0, .68333, 0, 0, .625],
      916: [0, .68333, 0, 0, .83334],
      920: [0, .68333, 0, 0, .77778],
      923: [0, .68333, 0, 0, .69445],
      926: [0, .68333, 0, 0, .66667],
      928: [0, .68333, 0, 0, .75],
      931: [0, .68333, 0, 0, .72222],
      933: [0, .68333, 0, 0, .77778],
      934: [0, .68333, 0, 0, .72222],
      936: [0, .68333, 0, 0, .77778],
      937: [0, .68333, 0, 0, .72222],
      8211: [0, .43056, .02778, 0, .5],
      8212: [0, .43056, .02778, 0, 1],
      8216: [0, .69444, 0, 0, .27778],
      8217: [0, .69444, 0, 0, .27778],
      8220: [0, .69444, 0, 0, .5],
      8221: [0, .69444, 0, 0, .5],
      8224: [.19444, .69444, 0, 0, .44445],
      8225: [.19444, .69444, 0, 0, .44445],
      8230: [0, .123, 0, 0, 1.172],
      8242: [0, .55556, 0, 0, .275],
      8407: [0, .71444, .15382, 0, .5],
      8463: [0, .68889, 0, 0, .54028],
      8465: [0, .69444, 0, 0, .72222],
      8467: [0, .69444, 0, .11111, .41667],
      8472: [.19444, .43056, 0, .11111, .63646],
      8476: [0, .69444, 0, 0, .72222],
      8501: [0, .69444, 0, 0, .61111],
      8592: [-.13313, .36687, 0, 0, 1],
      8593: [.19444, .69444, 0, 0, .5],
      8594: [-.13313, .36687, 0, 0, 1],
      8595: [.19444, .69444, 0, 0, .5],
      8596: [-.13313, .36687, 0, 0, 1],
      8597: [.25, .75, 0, 0, .5],
      8598: [.19444, .69444, 0, 0, 1],
      8599: [.19444, .69444, 0, 0, 1],
      8600: [.19444, .69444, 0, 0, 1],
      8601: [.19444, .69444, 0, 0, 1],
      8614: [.011, .511, 0, 0, 1],
      8617: [.011, .511, 0, 0, 1.126],
      8618: [.011, .511, 0, 0, 1.126],
      8636: [-.13313, .36687, 0, 0, 1],
      8637: [-.13313, .36687, 0, 0, 1],
      8640: [-.13313, .36687, 0, 0, 1],
      8641: [-.13313, .36687, 0, 0, 1],
      8652: [.011, .671, 0, 0, 1],
      8656: [-.13313, .36687, 0, 0, 1],
      8657: [.19444, .69444, 0, 0, .61111],
      8658: [-.13313, .36687, 0, 0, 1],
      8659: [.19444, .69444, 0, 0, .61111],
      8660: [-.13313, .36687, 0, 0, 1],
      8661: [.25, .75, 0, 0, .61111],
      8704: [0, .69444, 0, 0, .55556],
      8706: [0, .69444, .05556, .08334, .5309],
      8707: [0, .69444, 0, 0, .55556],
      8709: [.05556, .75, 0, 0, .5],
      8711: [0, .68333, 0, 0, .83334],
      8712: [.0391, .5391, 0, 0, .66667],
      8715: [.0391, .5391, 0, 0, .66667],
      8722: [.08333, .58333, 0, 0, .77778],
      8723: [.08333, .58333, 0, 0, .77778],
      8725: [.25, .75, 0, 0, .5],
      8726: [.25, .75, 0, 0, .5],
      8727: [-.03472, .46528, 0, 0, .5],
      8728: [-.05555, .44445, 0, 0, .5],
      8729: [-.05555, .44445, 0, 0, .5],
      8730: [.2, .8, 0, 0, .83334],
      8733: [0, .43056, 0, 0, .77778],
      8734: [0, .43056, 0, 0, 1],
      8736: [0, .69224, 0, 0, .72222],
      8739: [.25, .75, 0, 0, .27778],
      8741: [.25, .75, 0, 0, .5],
      8743: [0, .55556, 0, 0, .66667],
      8744: [0, .55556, 0, 0, .66667],
      8745: [0, .55556, 0, 0, .66667],
      8746: [0, .55556, 0, 0, .66667],
      8747: [.19444, .69444, .11111, 0, .41667],
      8764: [-.13313, .36687, 0, 0, .77778],
      8768: [.19444, .69444, 0, 0, .27778],
      8771: [-.03625, .46375, 0, 0, .77778],
      8773: [-.022, .589, 0, 0, .778],
      8776: [-.01688, .48312, 0, 0, .77778],
      8781: [-.03625, .46375, 0, 0, .77778],
      8784: [-.133, .673, 0, 0, .778],
      8801: [-.03625, .46375, 0, 0, .77778],
      8804: [.13597, .63597, 0, 0, .77778],
      8805: [.13597, .63597, 0, 0, .77778],
      8810: [.0391, .5391, 0, 0, 1],
      8811: [.0391, .5391, 0, 0, 1],
      8826: [.0391, .5391, 0, 0, .77778],
      8827: [.0391, .5391, 0, 0, .77778],
      8834: [.0391, .5391, 0, 0, .77778],
      8835: [.0391, .5391, 0, 0, .77778],
      8838: [.13597, .63597, 0, 0, .77778],
      8839: [.13597, .63597, 0, 0, .77778],
      8846: [0, .55556, 0, 0, .66667],
      8849: [.13597, .63597, 0, 0, .77778],
      8850: [.13597, .63597, 0, 0, .77778],
      8851: [0, .55556, 0, 0, .66667],
      8852: [0, .55556, 0, 0, .66667],
      8853: [.08333, .58333, 0, 0, .77778],
      8854: [.08333, .58333, 0, 0, .77778],
      8855: [.08333, .58333, 0, 0, .77778],
      8856: [.08333, .58333, 0, 0, .77778],
      8857: [.08333, .58333, 0, 0, .77778],
      8866: [0, .69444, 0, 0, .61111],
      8867: [0, .69444, 0, 0, .61111],
      8868: [0, .69444, 0, 0, .77778],
      8869: [0, .69444, 0, 0, .77778],
      8872: [.249, .75, 0, 0, .867],
      8900: [-.05555, .44445, 0, 0, .5],
      8901: [-.05555, .44445, 0, 0, .27778],
      8902: [-.03472, .46528, 0, 0, .5],
      8904: [.005, .505, 0, 0, .9],
      8942: [.03, .903, 0, 0, .278],
      8943: [-.19, .313, 0, 0, 1.172],
      8945: [-.1, .823, 0, 0, 1.282],
      8968: [.25, .75, 0, 0, .44445],
      8969: [.25, .75, 0, 0, .44445],
      8970: [.25, .75, 0, 0, .44445],
      8971: [.25, .75, 0, 0, .44445],
      8994: [-.14236, .35764, 0, 0, 1],
      8995: [-.14236, .35764, 0, 0, 1],
      9136: [.244, .744, 0, 0, .412],
      9137: [.244, .745, 0, 0, .412],
      9651: [.19444, .69444, 0, 0, .88889],
      9657: [-.03472, .46528, 0, 0, .5],
      9661: [.19444, .69444, 0, 0, .88889],
      9667: [-.03472, .46528, 0, 0, .5],
      9711: [.19444, .69444, 0, 0, 1],
      9824: [.12963, .69444, 0, 0, .77778],
      9825: [.12963, .69444, 0, 0, .77778],
      9826: [.12963, .69444, 0, 0, .77778],
      9827: [.12963, .69444, 0, 0, .77778],
      9837: [0, .75, 0, 0, .38889],
      9838: [.19444, .69444, 0, 0, .38889],
      9839: [.19444, .69444, 0, 0, .38889],
      10216: [.25, .75, 0, 0, .38889],
      10217: [.25, .75, 0, 0, .38889],
      10222: [.244, .744, 0, 0, .412],
      10223: [.244, .745, 0, 0, .412],
      10229: [.011, .511, 0, 0, 1.609],
      10230: [.011, .511, 0, 0, 1.638],
      10231: [.011, .511, 0, 0, 1.859],
      10232: [.024, .525, 0, 0, 1.609],
      10233: [.024, .525, 0, 0, 1.638],
      10234: [.024, .525, 0, 0, 1.858],
      10236: [.011, .511, 0, 0, 1.638],
      10815: [0, .68333, 0, 0, .75],
      10927: [.13597, .63597, 0, 0, .77778],
      10928: [.13597, .63597, 0, 0, .77778],
      57376: [.19444, .69444, 0, 0, 0]
    },
    "Math-BoldItalic": {
      32: [0, 0, 0, 0, .25],
      48: [0, .44444, 0, 0, .575],
      49: [0, .44444, 0, 0, .575],
      50: [0, .44444, 0, 0, .575],
      51: [.19444, .44444, 0, 0, .575],
      52: [.19444, .44444, 0, 0, .575],
      53: [.19444, .44444, 0, 0, .575],
      54: [0, .64444, 0, 0, .575],
      55: [.19444, .44444, 0, 0, .575],
      56: [0, .64444, 0, 0, .575],
      57: [.19444, .44444, 0, 0, .575],
      65: [0, .68611, 0, 0, .86944],
      66: [0, .68611, .04835, 0, .8664],
      67: [0, .68611, .06979, 0, .81694],
      68: [0, .68611, .03194, 0, .93812],
      69: [0, .68611, .05451, 0, .81007],
      70: [0, .68611, .15972, 0, .68889],
      71: [0, .68611, 0, 0, .88673],
      72: [0, .68611, .08229, 0, .98229],
      73: [0, .68611, .07778, 0, .51111],
      74: [0, .68611, .10069, 0, .63125],
      75: [0, .68611, .06979, 0, .97118],
      76: [0, .68611, 0, 0, .75555],
      77: [0, .68611, .11424, 0, 1.14201],
      78: [0, .68611, .11424, 0, .95034],
      79: [0, .68611, .03194, 0, .83666],
      80: [0, .68611, .15972, 0, .72309],
      81: [.19444, .68611, 0, 0, .86861],
      82: [0, .68611, .00421, 0, .87235],
      83: [0, .68611, .05382, 0, .69271],
      84: [0, .68611, .15972, 0, .63663],
      85: [0, .68611, .11424, 0, .80027],
      86: [0, .68611, .25555, 0, .67778],
      87: [0, .68611, .15972, 0, 1.09305],
      88: [0, .68611, .07778, 0, .94722],
      89: [0, .68611, .25555, 0, .67458],
      90: [0, .68611, .06979, 0, .77257],
      97: [0, .44444, 0, 0, .63287],
      98: [0, .69444, 0, 0, .52083],
      99: [0, .44444, 0, 0, .51342],
      100: [0, .69444, 0, 0, .60972],
      101: [0, .44444, 0, 0, .55361],
      102: [.19444, .69444, .11042, 0, .56806],
      103: [.19444, .44444, .03704, 0, .5449],
      104: [0, .69444, 0, 0, .66759],
      105: [0, .69326, 0, 0, .4048],
      106: [.19444, .69326, .0622, 0, .47083],
      107: [0, .69444, .01852, 0, .6037],
      108: [0, .69444, .0088, 0, .34815],
      109: [0, .44444, 0, 0, 1.0324],
      110: [0, .44444, 0, 0, .71296],
      111: [0, .44444, 0, 0, .58472],
      112: [.19444, .44444, 0, 0, .60092],
      113: [.19444, .44444, .03704, 0, .54213],
      114: [0, .44444, .03194, 0, .5287],
      115: [0, .44444, 0, 0, .53125],
      116: [0, .63492, 0, 0, .41528],
      117: [0, .44444, 0, 0, .68102],
      118: [0, .44444, .03704, 0, .56666],
      119: [0, .44444, .02778, 0, .83148],
      120: [0, .44444, 0, 0, .65903],
      121: [.19444, .44444, .03704, 0, .59028],
      122: [0, .44444, .04213, 0, .55509],
      160: [0, 0, 0, 0, .25],
      915: [0, .68611, .15972, 0, .65694],
      916: [0, .68611, 0, 0, .95833],
      920: [0, .68611, .03194, 0, .86722],
      923: [0, .68611, 0, 0, .80555],
      926: [0, .68611, .07458, 0, .84125],
      928: [0, .68611, .08229, 0, .98229],
      931: [0, .68611, .05451, 0, .88507],
      933: [0, .68611, .15972, 0, .67083],
      934: [0, .68611, 0, 0, .76666],
      936: [0, .68611, .11653, 0, .71402],
      937: [0, .68611, .04835, 0, .8789],
      945: [0, .44444, 0, 0, .76064],
      946: [.19444, .69444, .03403, 0, .65972],
      947: [.19444, .44444, .06389, 0, .59003],
      948: [0, .69444, .03819, 0, .52222],
      949: [0, .44444, 0, 0, .52882],
      950: [.19444, .69444, .06215, 0, .50833],
      951: [.19444, .44444, .03704, 0, .6],
      952: [0, .69444, .03194, 0, .5618],
      953: [0, .44444, 0, 0, .41204],
      954: [0, .44444, 0, 0, .66759],
      955: [0, .69444, 0, 0, .67083],
      956: [.19444, .44444, 0, 0, .70787],
      957: [0, .44444, .06898, 0, .57685],
      958: [.19444, .69444, .03021, 0, .50833],
      959: [0, .44444, 0, 0, .58472],
      960: [0, .44444, .03704, 0, .68241],
      961: [.19444, .44444, 0, 0, .6118],
      962: [.09722, .44444, .07917, 0, .42361],
      963: [0, .44444, .03704, 0, .68588],
      964: [0, .44444, .13472, 0, .52083],
      965: [0, .44444, .03704, 0, .63055],
      966: [.19444, .44444, 0, 0, .74722],
      967: [.19444, .44444, 0, 0, .71805],
      968: [.19444, .69444, .03704, 0, .75833],
      969: [0, .44444, .03704, 0, .71782],
      977: [0, .69444, 0, 0, .69155],
      981: [.19444, .69444, 0, 0, .7125],
      982: [0, .44444, .03194, 0, .975],
      1009: [.19444, .44444, 0, 0, .6118],
      1013: [0, .44444, 0, 0, .48333],
      57649: [0, .44444, 0, 0, .39352],
      57911: [.19444, .44444, 0, 0, .43889]
    },
    "Math-Italic": {
      32: [0, 0, 0, 0, .25],
      48: [0, .43056, 0, 0, .5],
      49: [0, .43056, 0, 0, .5],
      50: [0, .43056, 0, 0, .5],
      51: [.19444, .43056, 0, 0, .5],
      52: [.19444, .43056, 0, 0, .5],
      53: [.19444, .43056, 0, 0, .5],
      54: [0, .64444, 0, 0, .5],
      55: [.19444, .43056, 0, 0, .5],
      56: [0, .64444, 0, 0, .5],
      57: [.19444, .43056, 0, 0, .5],
      65: [0, .68333, 0, .13889, .75],
      66: [0, .68333, .05017, .08334, .75851],
      67: [0, .68333, .07153, .08334, .71472],
      68: [0, .68333, .02778, .05556, .82792],
      69: [0, .68333, .05764, .08334, .7382],
      70: [0, .68333, .13889, .08334, .64306],
      71: [0, .68333, 0, .08334, .78625],
      72: [0, .68333, .08125, .05556, .83125],
      73: [0, .68333, .07847, .11111, .43958],
      74: [0, .68333, .09618, .16667, .55451],
      75: [0, .68333, .07153, .05556, .84931],
      76: [0, .68333, 0, .02778, .68056],
      77: [0, .68333, .10903, .08334, .97014],
      78: [0, .68333, .10903, .08334, .80347],
      79: [0, .68333, .02778, .08334, .76278],
      80: [0, .68333, .13889, .08334, .64201],
      81: [.19444, .68333, 0, .08334, .79056],
      82: [0, .68333, .00773, .08334, .75929],
      83: [0, .68333, .05764, .08334, .6132],
      84: [0, .68333, .13889, .08334, .58438],
      85: [0, .68333, .10903, .02778, .68278],
      86: [0, .68333, .22222, 0, .58333],
      87: [0, .68333, .13889, 0, .94445],
      88: [0, .68333, .07847, .08334, .82847],
      89: [0, .68333, .22222, 0, .58056],
      90: [0, .68333, .07153, .08334, .68264],
      97: [0, .43056, 0, 0, .52859],
      98: [0, .69444, 0, 0, .42917],
      99: [0, .43056, 0, .05556, .43276],
      100: [0, .69444, 0, .16667, .52049],
      101: [0, .43056, 0, .05556, .46563],
      102: [.19444, .69444, .10764, .16667, .48959],
      103: [.19444, .43056, .03588, .02778, .47697],
      104: [0, .69444, 0, 0, .57616],
      105: [0, .65952, 0, 0, .34451],
      106: [.19444, .65952, .05724, 0, .41181],
      107: [0, .69444, .03148, 0, .5206],
      108: [0, .69444, .01968, .08334, .29838],
      109: [0, .43056, 0, 0, .87801],
      110: [0, .43056, 0, 0, .60023],
      111: [0, .43056, 0, .05556, .48472],
      112: [.19444, .43056, 0, .08334, .50313],
      113: [.19444, .43056, .03588, .08334, .44641],
      114: [0, .43056, .02778, .05556, .45116],
      115: [0, .43056, 0, .05556, .46875],
      116: [0, .61508, 0, .08334, .36111],
      117: [0, .43056, 0, .02778, .57246],
      118: [0, .43056, .03588, .02778, .48472],
      119: [0, .43056, .02691, .08334, .71592],
      120: [0, .43056, 0, .02778, .57153],
      121: [.19444, .43056, .03588, .05556, .49028],
      122: [0, .43056, .04398, .05556, .46505],
      160: [0, 0, 0, 0, .25],
      915: [0, .68333, .13889, .08334, .61528],
      916: [0, .68333, 0, .16667, .83334],
      920: [0, .68333, .02778, .08334, .76278],
      923: [0, .68333, 0, .16667, .69445],
      926: [0, .68333, .07569, .08334, .74236],
      928: [0, .68333, .08125, .05556, .83125],
      931: [0, .68333, .05764, .08334, .77986],
      933: [0, .68333, .13889, .05556, .58333],
      934: [0, .68333, 0, .08334, .66667],
      936: [0, .68333, .11, .05556, .61222],
      937: [0, .68333, .05017, .08334, .7724],
      945: [0, .43056, .0037, .02778, .6397],
      946: [.19444, .69444, .05278, .08334, .56563],
      947: [.19444, .43056, .05556, 0, .51773],
      948: [0, .69444, .03785, .05556, .44444],
      949: [0, .43056, 0, .08334, .46632],
      950: [.19444, .69444, .07378, .08334, .4375],
      951: [.19444, .43056, .03588, .05556, .49653],
      952: [0, .69444, .02778, .08334, .46944],
      953: [0, .43056, 0, .05556, .35394],
      954: [0, .43056, 0, 0, .57616],
      955: [0, .69444, 0, 0, .58334],
      956: [.19444, .43056, 0, .02778, .60255],
      957: [0, .43056, .06366, .02778, .49398],
      958: [.19444, .69444, .04601, .11111, .4375],
      959: [0, .43056, 0, .05556, .48472],
      960: [0, .43056, .03588, 0, .57003],
      961: [.19444, .43056, 0, .08334, .51702],
      962: [.09722, .43056, .07986, .08334, .36285],
      963: [0, .43056, .03588, 0, .57141],
      964: [0, .43056, .1132, .02778, .43715],
      965: [0, .43056, .03588, .02778, .54028],
      966: [.19444, .43056, 0, .08334, .65417],
      967: [.19444, .43056, 0, .05556, .62569],
      968: [.19444, .69444, .03588, .11111, .65139],
      969: [0, .43056, .03588, 0, .62245],
      977: [0, .69444, 0, .08334, .59144],
      981: [.19444, .69444, 0, .08334, .59583],
      982: [0, .43056, .02778, 0, .82813],
      1009: [.19444, .43056, 0, .08334, .51702],
      1013: [0, .43056, 0, .05556, .4059],
      57649: [0, .43056, 0, .02778, .32246],
      57911: [.19444, .43056, 0, .08334, .38403]
    },
    "SansSerif-Bold": {
      32: [0, 0, 0, 0, .25],
      33: [0, .69444, 0, 0, .36667],
      34: [0, .69444, 0, 0, .55834],
      35: [.19444, .69444, 0, 0, .91667],
      36: [.05556, .75, 0, 0, .55],
      37: [.05556, .75, 0, 0, 1.02912],
      38: [0, .69444, 0, 0, .83056],
      39: [0, .69444, 0, 0, .30556],
      40: [.25, .75, 0, 0, .42778],
      41: [.25, .75, 0, 0, .42778],
      42: [0, .75, 0, 0, .55],
      43: [.11667, .61667, 0, 0, .85556],
      44: [.10556, .13056, 0, 0, .30556],
      45: [0, .45833, 0, 0, .36667],
      46: [0, .13056, 0, 0, .30556],
      47: [.25, .75, 0, 0, .55],
      48: [0, .69444, 0, 0, .55],
      49: [0, .69444, 0, 0, .55],
      50: [0, .69444, 0, 0, .55],
      51: [0, .69444, 0, 0, .55],
      52: [0, .69444, 0, 0, .55],
      53: [0, .69444, 0, 0, .55],
      54: [0, .69444, 0, 0, .55],
      55: [0, .69444, 0, 0, .55],
      56: [0, .69444, 0, 0, .55],
      57: [0, .69444, 0, 0, .55],
      58: [0, .45833, 0, 0, .30556],
      59: [.10556, .45833, 0, 0, .30556],
      61: [-.09375, .40625, 0, 0, .85556],
      63: [0, .69444, 0, 0, .51945],
      64: [0, .69444, 0, 0, .73334],
      65: [0, .69444, 0, 0, .73334],
      66: [0, .69444, 0, 0, .73334],
      67: [0, .69444, 0, 0, .70278],
      68: [0, .69444, 0, 0, .79445],
      69: [0, .69444, 0, 0, .64167],
      70: [0, .69444, 0, 0, .61111],
      71: [0, .69444, 0, 0, .73334],
      72: [0, .69444, 0, 0, .79445],
      73: [0, .69444, 0, 0, .33056],
      74: [0, .69444, 0, 0, .51945],
      75: [0, .69444, 0, 0, .76389],
      76: [0, .69444, 0, 0, .58056],
      77: [0, .69444, 0, 0, .97778],
      78: [0, .69444, 0, 0, .79445],
      79: [0, .69444, 0, 0, .79445],
      80: [0, .69444, 0, 0, .70278],
      81: [.10556, .69444, 0, 0, .79445],
      82: [0, .69444, 0, 0, .70278],
      83: [0, .69444, 0, 0, .61111],
      84: [0, .69444, 0, 0, .73334],
      85: [0, .69444, 0, 0, .76389],
      86: [0, .69444, .01528, 0, .73334],
      87: [0, .69444, .01528, 0, 1.03889],
      88: [0, .69444, 0, 0, .73334],
      89: [0, .69444, .0275, 0, .73334],
      90: [0, .69444, 0, 0, .67223],
      91: [.25, .75, 0, 0, .34306],
      93: [.25, .75, 0, 0, .34306],
      94: [0, .69444, 0, 0, .55],
      95: [.35, .10833, .03056, 0, .55],
      97: [0, .45833, 0, 0, .525],
      98: [0, .69444, 0, 0, .56111],
      99: [0, .45833, 0, 0, .48889],
      100: [0, .69444, 0, 0, .56111],
      101: [0, .45833, 0, 0, .51111],
      102: [0, .69444, .07639, 0, .33611],
      103: [.19444, .45833, .01528, 0, .55],
      104: [0, .69444, 0, 0, .56111],
      105: [0, .69444, 0, 0, .25556],
      106: [.19444, .69444, 0, 0, .28611],
      107: [0, .69444, 0, 0, .53056],
      108: [0, .69444, 0, 0, .25556],
      109: [0, .45833, 0, 0, .86667],
      110: [0, .45833, 0, 0, .56111],
      111: [0, .45833, 0, 0, .55],
      112: [.19444, .45833, 0, 0, .56111],
      113: [.19444, .45833, 0, 0, .56111],
      114: [0, .45833, .01528, 0, .37222],
      115: [0, .45833, 0, 0, .42167],
      116: [0, .58929, 0, 0, .40417],
      117: [0, .45833, 0, 0, .56111],
      118: [0, .45833, .01528, 0, .5],
      119: [0, .45833, .01528, 0, .74445],
      120: [0, .45833, 0, 0, .5],
      121: [.19444, .45833, .01528, 0, .5],
      122: [0, .45833, 0, 0, .47639],
      126: [.35, .34444, 0, 0, .55],
      160: [0, 0, 0, 0, .25],
      168: [0, .69444, 0, 0, .55],
      176: [0, .69444, 0, 0, .73334],
      180: [0, .69444, 0, 0, .55],
      184: [.17014, 0, 0, 0, .48889],
      305: [0, .45833, 0, 0, .25556],
      567: [.19444, .45833, 0, 0, .28611],
      710: [0, .69444, 0, 0, .55],
      711: [0, .63542, 0, 0, .55],
      713: [0, .63778, 0, 0, .55],
      728: [0, .69444, 0, 0, .55],
      729: [0, .69444, 0, 0, .30556],
      730: [0, .69444, 0, 0, .73334],
      732: [0, .69444, 0, 0, .55],
      733: [0, .69444, 0, 0, .55],
      915: [0, .69444, 0, 0, .58056],
      916: [0, .69444, 0, 0, .91667],
      920: [0, .69444, 0, 0, .85556],
      923: [0, .69444, 0, 0, .67223],
      926: [0, .69444, 0, 0, .73334],
      928: [0, .69444, 0, 0, .79445],
      931: [0, .69444, 0, 0, .79445],
      933: [0, .69444, 0, 0, .85556],
      934: [0, .69444, 0, 0, .79445],
      936: [0, .69444, 0, 0, .85556],
      937: [0, .69444, 0, 0, .79445],
      8211: [0, .45833, .03056, 0, .55],
      8212: [0, .45833, .03056, 0, 1.10001],
      8216: [0, .69444, 0, 0, .30556],
      8217: [0, .69444, 0, 0, .30556],
      8220: [0, .69444, 0, 0, .55834],
      8221: [0, .69444, 0, 0, .55834]
    },
    "SansSerif-Italic": {
      32: [0, 0, 0, 0, .25],
      33: [0, .69444, .05733, 0, .31945],
      34: [0, .69444, .00316, 0, .5],
      35: [.19444, .69444, .05087, 0, .83334],
      36: [.05556, .75, .11156, 0, .5],
      37: [.05556, .75, .03126, 0, .83334],
      38: [0, .69444, .03058, 0, .75834],
      39: [0, .69444, .07816, 0, .27778],
      40: [.25, .75, .13164, 0, .38889],
      41: [.25, .75, .02536, 0, .38889],
      42: [0, .75, .11775, 0, .5],
      43: [.08333, .58333, .02536, 0, .77778],
      44: [.125, .08333, 0, 0, .27778],
      45: [0, .44444, .01946, 0, .33333],
      46: [0, .08333, 0, 0, .27778],
      47: [.25, .75, .13164, 0, .5],
      48: [0, .65556, .11156, 0, .5],
      49: [0, .65556, .11156, 0, .5],
      50: [0, .65556, .11156, 0, .5],
      51: [0, .65556, .11156, 0, .5],
      52: [0, .65556, .11156, 0, .5],
      53: [0, .65556, .11156, 0, .5],
      54: [0, .65556, .11156, 0, .5],
      55: [0, .65556, .11156, 0, .5],
      56: [0, .65556, .11156, 0, .5],
      57: [0, .65556, .11156, 0, .5],
      58: [0, .44444, .02502, 0, .27778],
      59: [.125, .44444, .02502, 0, .27778],
      61: [-.13, .37, .05087, 0, .77778],
      63: [0, .69444, .11809, 0, .47222],
      64: [0, .69444, .07555, 0, .66667],
      65: [0, .69444, 0, 0, .66667],
      66: [0, .69444, .08293, 0, .66667],
      67: [0, .69444, .11983, 0, .63889],
      68: [0, .69444, .07555, 0, .72223],
      69: [0, .69444, .11983, 0, .59722],
      70: [0, .69444, .13372, 0, .56945],
      71: [0, .69444, .11983, 0, .66667],
      72: [0, .69444, .08094, 0, .70834],
      73: [0, .69444, .13372, 0, .27778],
      74: [0, .69444, .08094, 0, .47222],
      75: [0, .69444, .11983, 0, .69445],
      76: [0, .69444, 0, 0, .54167],
      77: [0, .69444, .08094, 0, .875],
      78: [0, .69444, .08094, 0, .70834],
      79: [0, .69444, .07555, 0, .73611],
      80: [0, .69444, .08293, 0, .63889],
      81: [.125, .69444, .07555, 0, .73611],
      82: [0, .69444, .08293, 0, .64584],
      83: [0, .69444, .09205, 0, .55556],
      84: [0, .69444, .13372, 0, .68056],
      85: [0, .69444, .08094, 0, .6875],
      86: [0, .69444, .1615, 0, .66667],
      87: [0, .69444, .1615, 0, .94445],
      88: [0, .69444, .13372, 0, .66667],
      89: [0, .69444, .17261, 0, .66667],
      90: [0, .69444, .11983, 0, .61111],
      91: [.25, .75, .15942, 0, .28889],
      93: [.25, .75, .08719, 0, .28889],
      94: [0, .69444, .0799, 0, .5],
      95: [.35, .09444, .08616, 0, .5],
      97: [0, .44444, .00981, 0, .48056],
      98: [0, .69444, .03057, 0, .51667],
      99: [0, .44444, .08336, 0, .44445],
      100: [0, .69444, .09483, 0, .51667],
      101: [0, .44444, .06778, 0, .44445],
      102: [0, .69444, .21705, 0, .30556],
      103: [.19444, .44444, .10836, 0, .5],
      104: [0, .69444, .01778, 0, .51667],
      105: [0, .67937, .09718, 0, .23889],
      106: [.19444, .67937, .09162, 0, .26667],
      107: [0, .69444, .08336, 0, .48889],
      108: [0, .69444, .09483, 0, .23889],
      109: [0, .44444, .01778, 0, .79445],
      110: [0, .44444, .01778, 0, .51667],
      111: [0, .44444, .06613, 0, .5],
      112: [.19444, .44444, .0389, 0, .51667],
      113: [.19444, .44444, .04169, 0, .51667],
      114: [0, .44444, .10836, 0, .34167],
      115: [0, .44444, .0778, 0, .38333],
      116: [0, .57143, .07225, 0, .36111],
      117: [0, .44444, .04169, 0, .51667],
      118: [0, .44444, .10836, 0, .46111],
      119: [0, .44444, .10836, 0, .68334],
      120: [0, .44444, .09169, 0, .46111],
      121: [.19444, .44444, .10836, 0, .46111],
      122: [0, .44444, .08752, 0, .43472],
      126: [.35, .32659, .08826, 0, .5],
      160: [0, 0, 0, 0, .25],
      168: [0, .67937, .06385, 0, .5],
      176: [0, .69444, 0, 0, .73752],
      184: [.17014, 0, 0, 0, .44445],
      305: [0, .44444, .04169, 0, .23889],
      567: [.19444, .44444, .04169, 0, .26667],
      710: [0, .69444, .0799, 0, .5],
      711: [0, .63194, .08432, 0, .5],
      713: [0, .60889, .08776, 0, .5],
      714: [0, .69444, .09205, 0, .5],
      715: [0, .69444, 0, 0, .5],
      728: [0, .69444, .09483, 0, .5],
      729: [0, .67937, .07774, 0, .27778],
      730: [0, .69444, 0, 0, .73752],
      732: [0, .67659, .08826, 0, .5],
      733: [0, .69444, .09205, 0, .5],
      915: [0, .69444, .13372, 0, .54167],
      916: [0, .69444, 0, 0, .83334],
      920: [0, .69444, .07555, 0, .77778],
      923: [0, .69444, 0, 0, .61111],
      926: [0, .69444, .12816, 0, .66667],
      928: [0, .69444, .08094, 0, .70834],
      931: [0, .69444, .11983, 0, .72222],
      933: [0, .69444, .09031, 0, .77778],
      934: [0, .69444, .04603, 0, .72222],
      936: [0, .69444, .09031, 0, .77778],
      937: [0, .69444, .08293, 0, .72222],
      8211: [0, .44444, .08616, 0, .5],
      8212: [0, .44444, .08616, 0, 1],
      8216: [0, .69444, .07816, 0, .27778],
      8217: [0, .69444, .07816, 0, .27778],
      8220: [0, .69444, .14205, 0, .5],
      8221: [0, .69444, .00316, 0, .5]
    },
    "SansSerif-Regular": {
      32: [0, 0, 0, 0, .25],
      33: [0, .69444, 0, 0, .31945],
      34: [0, .69444, 0, 0, .5],
      35: [.19444, .69444, 0, 0, .83334],
      36: [.05556, .75, 0, 0, .5],
      37: [.05556, .75, 0, 0, .83334],
      38: [0, .69444, 0, 0, .75834],
      39: [0, .69444, 0, 0, .27778],
      40: [.25, .75, 0, 0, .38889],
      41: [.25, .75, 0, 0, .38889],
      42: [0, .75, 0, 0, .5],
      43: [.08333, .58333, 0, 0, .77778],
      44: [.125, .08333, 0, 0, .27778],
      45: [0, .44444, 0, 0, .33333],
      46: [0, .08333, 0, 0, .27778],
      47: [.25, .75, 0, 0, .5],
      48: [0, .65556, 0, 0, .5],
      49: [0, .65556, 0, 0, .5],
      50: [0, .65556, 0, 0, .5],
      51: [0, .65556, 0, 0, .5],
      52: [0, .65556, 0, 0, .5],
      53: [0, .65556, 0, 0, .5],
      54: [0, .65556, 0, 0, .5],
      55: [0, .65556, 0, 0, .5],
      56: [0, .65556, 0, 0, .5],
      57: [0, .65556, 0, 0, .5],
      58: [0, .44444, 0, 0, .27778],
      59: [.125, .44444, 0, 0, .27778],
      61: [-.13, .37, 0, 0, .77778],
      63: [0, .69444, 0, 0, .47222],
      64: [0, .69444, 0, 0, .66667],
      65: [0, .69444, 0, 0, .66667],
      66: [0, .69444, 0, 0, .66667],
      67: [0, .69444, 0, 0, .63889],
      68: [0, .69444, 0, 0, .72223],
      69: [0, .69444, 0, 0, .59722],
      70: [0, .69444, 0, 0, .56945],
      71: [0, .69444, 0, 0, .66667],
      72: [0, .69444, 0, 0, .70834],
      73: [0, .69444, 0, 0, .27778],
      74: [0, .69444, 0, 0, .47222],
      75: [0, .69444, 0, 0, .69445],
      76: [0, .69444, 0, 0, .54167],
      77: [0, .69444, 0, 0, .875],
      78: [0, .69444, 0, 0, .70834],
      79: [0, .69444, 0, 0, .73611],
      80: [0, .69444, 0, 0, .63889],
      81: [.125, .69444, 0, 0, .73611],
      82: [0, .69444, 0, 0, .64584],
      83: [0, .69444, 0, 0, .55556],
      84: [0, .69444, 0, 0, .68056],
      85: [0, .69444, 0, 0, .6875],
      86: [0, .69444, .01389, 0, .66667],
      87: [0, .69444, .01389, 0, .94445],
      88: [0, .69444, 0, 0, .66667],
      89: [0, .69444, .025, 0, .66667],
      90: [0, .69444, 0, 0, .61111],
      91: [.25, .75, 0, 0, .28889],
      93: [.25, .75, 0, 0, .28889],
      94: [0, .69444, 0, 0, .5],
      95: [.35, .09444, .02778, 0, .5],
      97: [0, .44444, 0, 0, .48056],
      98: [0, .69444, 0, 0, .51667],
      99: [0, .44444, 0, 0, .44445],
      100: [0, .69444, 0, 0, .51667],
      101: [0, .44444, 0, 0, .44445],
      102: [0, .69444, .06944, 0, .30556],
      103: [.19444, .44444, .01389, 0, .5],
      104: [0, .69444, 0, 0, .51667],
      105: [0, .67937, 0, 0, .23889],
      106: [.19444, .67937, 0, 0, .26667],
      107: [0, .69444, 0, 0, .48889],
      108: [0, .69444, 0, 0, .23889],
      109: [0, .44444, 0, 0, .79445],
      110: [0, .44444, 0, 0, .51667],
      111: [0, .44444, 0, 0, .5],
      112: [.19444, .44444, 0, 0, .51667],
      113: [.19444, .44444, 0, 0, .51667],
      114: [0, .44444, .01389, 0, .34167],
      115: [0, .44444, 0, 0, .38333],
      116: [0, .57143, 0, 0, .36111],
      117: [0, .44444, 0, 0, .51667],
      118: [0, .44444, .01389, 0, .46111],
      119: [0, .44444, .01389, 0, .68334],
      120: [0, .44444, 0, 0, .46111],
      121: [.19444, .44444, .01389, 0, .46111],
      122: [0, .44444, 0, 0, .43472],
      126: [.35, .32659, 0, 0, .5],
      160: [0, 0, 0, 0, .25],
      168: [0, .67937, 0, 0, .5],
      176: [0, .69444, 0, 0, .66667],
      184: [.17014, 0, 0, 0, .44445],
      305: [0, .44444, 0, 0, .23889],
      567: [.19444, .44444, 0, 0, .26667],
      710: [0, .69444, 0, 0, .5],
      711: [0, .63194, 0, 0, .5],
      713: [0, .60889, 0, 0, .5],
      714: [0, .69444, 0, 0, .5],
      715: [0, .69444, 0, 0, .5],
      728: [0, .69444, 0, 0, .5],
      729: [0, .67937, 0, 0, .27778],
      730: [0, .69444, 0, 0, .66667],
      732: [0, .67659, 0, 0, .5],
      733: [0, .69444, 0, 0, .5],
      915: [0, .69444, 0, 0, .54167],
      916: [0, .69444, 0, 0, .83334],
      920: [0, .69444, 0, 0, .77778],
      923: [0, .69444, 0, 0, .61111],
      926: [0, .69444, 0, 0, .66667],
      928: [0, .69444, 0, 0, .70834],
      931: [0, .69444, 0, 0, .72222],
      933: [0, .69444, 0, 0, .77778],
      934: [0, .69444, 0, 0, .72222],
      936: [0, .69444, 0, 0, .77778],
      937: [0, .69444, 0, 0, .72222],
      8211: [0, .44444, .02778, 0, .5],
      8212: [0, .44444, .02778, 0, 1],
      8216: [0, .69444, 0, 0, .27778],
      8217: [0, .69444, 0, 0, .27778],
      8220: [0, .69444, 0, 0, .5],
      8221: [0, .69444, 0, 0, .5]
    },
    "Script-Regular": {
      32: [0, 0, 0, 0, .25],
      65: [0, .7, .22925, 0, .80253],
      66: [0, .7, .04087, 0, .90757],
      67: [0, .7, .1689, 0, .66619],
      68: [0, .7, .09371, 0, .77443],
      69: [0, .7, .18583, 0, .56162],
      70: [0, .7, .13634, 0, .89544],
      71: [0, .7, .17322, 0, .60961],
      72: [0, .7, .29694, 0, .96919],
      73: [0, .7, .19189, 0, .80907],
      74: [.27778, .7, .19189, 0, 1.05159],
      75: [0, .7, .31259, 0, .91364],
      76: [0, .7, .19189, 0, .87373],
      77: [0, .7, .15981, 0, 1.08031],
      78: [0, .7, .3525, 0, .9015],
      79: [0, .7, .08078, 0, .73787],
      80: [0, .7, .08078, 0, 1.01262],
      81: [0, .7, .03305, 0, .88282],
      82: [0, .7, .06259, 0, .85],
      83: [0, .7, .19189, 0, .86767],
      84: [0, .7, .29087, 0, .74697],
      85: [0, .7, .25815, 0, .79996],
      86: [0, .7, .27523, 0, .62204],
      87: [0, .7, .27523, 0, .80532],
      88: [0, .7, .26006, 0, .94445],
      89: [0, .7, .2939, 0, .70961],
      90: [0, .7, .24037, 0, .8212],
      160: [0, 0, 0, 0, .25]
    },
    "Size1-Regular": {
      32: [0, 0, 0, 0, .25],
      40: [.35001, .85, 0, 0, .45834],
      41: [.35001, .85, 0, 0, .45834],
      47: [.35001, .85, 0, 0, .57778],
      91: [.35001, .85, 0, 0, .41667],
      92: [.35001, .85, 0, 0, .57778],
      93: [.35001, .85, 0, 0, .41667],
      123: [.35001, .85, 0, 0, .58334],
      125: [.35001, .85, 0, 0, .58334],
      160: [0, 0, 0, 0, .25],
      710: [0, .72222, 0, 0, .55556],
      732: [0, .72222, 0, 0, .55556],
      770: [0, .72222, 0, 0, .55556],
      771: [0, .72222, 0, 0, .55556],
      8214: [-99e-5, .601, 0, 0, .77778],
      8593: [1e-5, .6, 0, 0, .66667],
      8595: [1e-5, .6, 0, 0, .66667],
      8657: [1e-5, .6, 0, 0, .77778],
      8659: [1e-5, .6, 0, 0, .77778],
      8719: [.25001, .75, 0, 0, .94445],
      8720: [.25001, .75, 0, 0, .94445],
      8721: [.25001, .75, 0, 0, 1.05556],
      8730: [.35001, .85, 0, 0, 1],
      8739: [-.00599, .606, 0, 0, .33333],
      8741: [-.00599, .606, 0, 0, .55556],
      8747: [.30612, .805, .19445, 0, .47222],
      8748: [.306, .805, .19445, 0, .47222],
      8749: [.306, .805, .19445, 0, .47222],
      8750: [.30612, .805, .19445, 0, .47222],
      8896: [.25001, .75, 0, 0, .83334],
      8897: [.25001, .75, 0, 0, .83334],
      8898: [.25001, .75, 0, 0, .83334],
      8899: [.25001, .75, 0, 0, .83334],
      8968: [.35001, .85, 0, 0, .47222],
      8969: [.35001, .85, 0, 0, .47222],
      8970: [.35001, .85, 0, 0, .47222],
      8971: [.35001, .85, 0, 0, .47222],
      9168: [-99e-5, .601, 0, 0, .66667],
      10216: [.35001, .85, 0, 0, .47222],
      10217: [.35001, .85, 0, 0, .47222],
      10752: [.25001, .75, 0, 0, 1.11111],
      10753: [.25001, .75, 0, 0, 1.11111],
      10754: [.25001, .75, 0, 0, 1.11111],
      10756: [.25001, .75, 0, 0, .83334],
      10758: [.25001, .75, 0, 0, .83334]
    },
    "Size2-Regular": {
      32: [0, 0, 0, 0, .25],
      40: [.65002, 1.15, 0, 0, .59722],
      41: [.65002, 1.15, 0, 0, .59722],
      47: [.65002, 1.15, 0, 0, .81111],
      91: [.65002, 1.15, 0, 0, .47222],
      92: [.65002, 1.15, 0, 0, .81111],
      93: [.65002, 1.15, 0, 0, .47222],
      123: [.65002, 1.15, 0, 0, .66667],
      125: [.65002, 1.15, 0, 0, .66667],
      160: [0, 0, 0, 0, .25],
      710: [0, .75, 0, 0, 1],
      732: [0, .75, 0, 0, 1],
      770: [0, .75, 0, 0, 1],
      771: [0, .75, 0, 0, 1],
      8719: [.55001, 1.05, 0, 0, 1.27778],
      8720: [.55001, 1.05, 0, 0, 1.27778],
      8721: [.55001, 1.05, 0, 0, 1.44445],
      8730: [.65002, 1.15, 0, 0, 1],
      8747: [.86225, 1.36, .44445, 0, .55556],
      8748: [.862, 1.36, .44445, 0, .55556],
      8749: [.862, 1.36, .44445, 0, .55556],
      8750: [.86225, 1.36, .44445, 0, .55556],
      8896: [.55001, 1.05, 0, 0, 1.11111],
      8897: [.55001, 1.05, 0, 0, 1.11111],
      8898: [.55001, 1.05, 0, 0, 1.11111],
      8899: [.55001, 1.05, 0, 0, 1.11111],
      8968: [.65002, 1.15, 0, 0, .52778],
      8969: [.65002, 1.15, 0, 0, .52778],
      8970: [.65002, 1.15, 0, 0, .52778],
      8971: [.65002, 1.15, 0, 0, .52778],
      10216: [.65002, 1.15, 0, 0, .61111],
      10217: [.65002, 1.15, 0, 0, .61111],
      10752: [.55001, 1.05, 0, 0, 1.51112],
      10753: [.55001, 1.05, 0, 0, 1.51112],
      10754: [.55001, 1.05, 0, 0, 1.51112],
      10756: [.55001, 1.05, 0, 0, 1.11111],
      10758: [.55001, 1.05, 0, 0, 1.11111]
    },
    "Size3-Regular": {
      32: [0, 0, 0, 0, .25],
      40: [.95003, 1.45, 0, 0, .73611],
      41: [.95003, 1.45, 0, 0, .73611],
      47: [.95003, 1.45, 0, 0, 1.04445],
      91: [.95003, 1.45, 0, 0, .52778],
      92: [.95003, 1.45, 0, 0, 1.04445],
      93: [.95003, 1.45, 0, 0, .52778],
      123: [.95003, 1.45, 0, 0, .75],
      125: [.95003, 1.45, 0, 0, .75],
      160: [0, 0, 0, 0, .25],
      710: [0, .75, 0, 0, 1.44445],
      732: [0, .75, 0, 0, 1.44445],
      770: [0, .75, 0, 0, 1.44445],
      771: [0, .75, 0, 0, 1.44445],
      8730: [.95003, 1.45, 0, 0, 1],
      8968: [.95003, 1.45, 0, 0, .58334],
      8969: [.95003, 1.45, 0, 0, .58334],
      8970: [.95003, 1.45, 0, 0, .58334],
      8971: [.95003, 1.45, 0, 0, .58334],
      10216: [.95003, 1.45, 0, 0, .75],
      10217: [.95003, 1.45, 0, 0, .75]
    },
    "Size4-Regular": {
      32: [0, 0, 0, 0, .25],
      40: [1.25003, 1.75, 0, 0, .79167],
      41: [1.25003, 1.75, 0, 0, .79167],
      47: [1.25003, 1.75, 0, 0, 1.27778],
      91: [1.25003, 1.75, 0, 0, .58334],
      92: [1.25003, 1.75, 0, 0, 1.27778],
      93: [1.25003, 1.75, 0, 0, .58334],
      123: [1.25003, 1.75, 0, 0, .80556],
      125: [1.25003, 1.75, 0, 0, .80556],
      160: [0, 0, 0, 0, .25],
      710: [0, .825, 0, 0, 1.8889],
      732: [0, .825, 0, 0, 1.8889],
      770: [0, .825, 0, 0, 1.8889],
      771: [0, .825, 0, 0, 1.8889],
      8730: [1.25003, 1.75, 0, 0, 1],
      8968: [1.25003, 1.75, 0, 0, .63889],
      8969: [1.25003, 1.75, 0, 0, .63889],
      8970: [1.25003, 1.75, 0, 0, .63889],
      8971: [1.25003, 1.75, 0, 0, .63889],
      9115: [.64502, 1.155, 0, 0, .875],
      9116: [1e-5, .6, 0, 0, .875],
      9117: [.64502, 1.155, 0, 0, .875],
      9118: [.64502, 1.155, 0, 0, .875],
      9119: [1e-5, .6, 0, 0, .875],
      9120: [.64502, 1.155, 0, 0, .875],
      9121: [.64502, 1.155, 0, 0, .66667],
      9122: [-99e-5, .601, 0, 0, .66667],
      9123: [.64502, 1.155, 0, 0, .66667],
      9124: [.64502, 1.155, 0, 0, .66667],
      9125: [-99e-5, .601, 0, 0, .66667],
      9126: [.64502, 1.155, 0, 0, .66667],
      9127: [1e-5, .9, 0, 0, .88889],
      9128: [.65002, 1.15, 0, 0, .88889],
      9129: [.90001, 0, 0, 0, .88889],
      9130: [0, .3, 0, 0, .88889],
      9131: [1e-5, .9, 0, 0, .88889],
      9132: [.65002, 1.15, 0, 0, .88889],
      9133: [.90001, 0, 0, 0, .88889],
      9143: [.88502, .915, 0, 0, 1.05556],
      10216: [1.25003, 1.75, 0, 0, .80556],
      10217: [1.25003, 1.75, 0, 0, .80556],
      57344: [-.00499, .605, 0, 0, 1.05556],
      57345: [-.00499, .605, 0, 0, 1.05556],
      57680: [0, .12, 0, 0, .45],
      57681: [0, .12, 0, 0, .45],
      57682: [0, .12, 0, 0, .45],
      57683: [0, .12, 0, 0, .45]
    },
    "Typewriter-Regular": {
      32: [0, 0, 0, 0, .525],
      33: [0, .61111, 0, 0, .525],
      34: [0, .61111, 0, 0, .525],
      35: [0, .61111, 0, 0, .525],
      36: [.08333, .69444, 0, 0, .525],
      37: [.08333, .69444, 0, 0, .525],
      38: [0, .61111, 0, 0, .525],
      39: [0, .61111, 0, 0, .525],
      40: [.08333, .69444, 0, 0, .525],
      41: [.08333, .69444, 0, 0, .525],
      42: [0, .52083, 0, 0, .525],
      43: [-.08056, .53055, 0, 0, .525],
      44: [.13889, .125, 0, 0, .525],
      45: [-.08056, .53055, 0, 0, .525],
      46: [0, .125, 0, 0, .525],
      47: [.08333, .69444, 0, 0, .525],
      48: [0, .61111, 0, 0, .525],
      49: [0, .61111, 0, 0, .525],
      50: [0, .61111, 0, 0, .525],
      51: [0, .61111, 0, 0, .525],
      52: [0, .61111, 0, 0, .525],
      53: [0, .61111, 0, 0, .525],
      54: [0, .61111, 0, 0, .525],
      55: [0, .61111, 0, 0, .525],
      56: [0, .61111, 0, 0, .525],
      57: [0, .61111, 0, 0, .525],
      58: [0, .43056, 0, 0, .525],
      59: [.13889, .43056, 0, 0, .525],
      60: [-.05556, .55556, 0, 0, .525],
      61: [-.19549, .41562, 0, 0, .525],
      62: [-.05556, .55556, 0, 0, .525],
      63: [0, .61111, 0, 0, .525],
      64: [0, .61111, 0, 0, .525],
      65: [0, .61111, 0, 0, .525],
      66: [0, .61111, 0, 0, .525],
      67: [0, .61111, 0, 0, .525],
      68: [0, .61111, 0, 0, .525],
      69: [0, .61111, 0, 0, .525],
      70: [0, .61111, 0, 0, .525],
      71: [0, .61111, 0, 0, .525],
      72: [0, .61111, 0, 0, .525],
      73: [0, .61111, 0, 0, .525],
      74: [0, .61111, 0, 0, .525],
      75: [0, .61111, 0, 0, .525],
      76: [0, .61111, 0, 0, .525],
      77: [0, .61111, 0, 0, .525],
      78: [0, .61111, 0, 0, .525],
      79: [0, .61111, 0, 0, .525],
      80: [0, .61111, 0, 0, .525],
      81: [.13889, .61111, 0, 0, .525],
      82: [0, .61111, 0, 0, .525],
      83: [0, .61111, 0, 0, .525],
      84: [0, .61111, 0, 0, .525],
      85: [0, .61111, 0, 0, .525],
      86: [0, .61111, 0, 0, .525],
      87: [0, .61111, 0, 0, .525],
      88: [0, .61111, 0, 0, .525],
      89: [0, .61111, 0, 0, .525],
      90: [0, .61111, 0, 0, .525],
      91: [.08333, .69444, 0, 0, .525],
      92: [.08333, .69444, 0, 0, .525],
      93: [.08333, .69444, 0, 0, .525],
      94: [0, .61111, 0, 0, .525],
      95: [.09514, 0, 0, 0, .525],
      96: [0, .61111, 0, 0, .525],
      97: [0, .43056, 0, 0, .525],
      98: [0, .61111, 0, 0, .525],
      99: [0, .43056, 0, 0, .525],
      100: [0, .61111, 0, 0, .525],
      101: [0, .43056, 0, 0, .525],
      102: [0, .61111, 0, 0, .525],
      103: [.22222, .43056, 0, 0, .525],
      104: [0, .61111, 0, 0, .525],
      105: [0, .61111, 0, 0, .525],
      106: [.22222, .61111, 0, 0, .525],
      107: [0, .61111, 0, 0, .525],
      108: [0, .61111, 0, 0, .525],
      109: [0, .43056, 0, 0, .525],
      110: [0, .43056, 0, 0, .525],
      111: [0, .43056, 0, 0, .525],
      112: [.22222, .43056, 0, 0, .525],
      113: [.22222, .43056, 0, 0, .525],
      114: [0, .43056, 0, 0, .525],
      115: [0, .43056, 0, 0, .525],
      116: [0, .55358, 0, 0, .525],
      117: [0, .43056, 0, 0, .525],
      118: [0, .43056, 0, 0, .525],
      119: [0, .43056, 0, 0, .525],
      120: [0, .43056, 0, 0, .525],
      121: [.22222, .43056, 0, 0, .525],
      122: [0, .43056, 0, 0, .525],
      123: [.08333, .69444, 0, 0, .525],
      124: [.08333, .69444, 0, 0, .525],
      125: [.08333, .69444, 0, 0, .525],
      126: [0, .61111, 0, 0, .525],
      127: [0, .61111, 0, 0, .525],
      160: [0, 0, 0, 0, .525],
      176: [0, .61111, 0, 0, .525],
      184: [.19445, 0, 0, 0, .525],
      305: [0, .43056, 0, 0, .525],
      567: [.22222, .43056, 0, 0, .525],
      711: [0, .56597, 0, 0, .525],
      713: [0, .56555, 0, 0, .525],
      714: [0, .61111, 0, 0, .525],
      715: [0, .61111, 0, 0, .525],
      728: [0, .61111, 0, 0, .525],
      730: [0, .61111, 0, 0, .525],
      770: [0, .61111, 0, 0, .525],
      771: [0, .61111, 0, 0, .525],
      776: [0, .61111, 0, 0, .525],
      915: [0, .61111, 0, 0, .525],
      916: [0, .61111, 0, 0, .525],
      920: [0, .61111, 0, 0, .525],
      923: [0, .61111, 0, 0, .525],
      926: [0, .61111, 0, 0, .525],
      928: [0, .61111, 0, 0, .525],
      931: [0, .61111, 0, 0, .525],
      933: [0, .61111, 0, 0, .525],
      934: [0, .61111, 0, 0, .525],
      936: [0, .61111, 0, 0, .525],
      937: [0, .61111, 0, 0, .525],
      8216: [0, .61111, 0, 0, .525],
      8217: [0, .61111, 0, 0, .525],
      8242: [0, .61111, 0, 0, .525],
      9251: [.11111, .21944, 0, 0, .525]
    }
  },
  xe: any = {
    slant: [.25, .25, .25],
    space: [0, 0, 0],
    stretch: [0, 0, 0],
    shrink: [0, 0, 0],
    xHeight: [.431, .431, .431],
    quad: [1, 1.171, 1.472],
    extraSpace: [0, 0, 0],
    num1: [.677, .732, .925],
    num2: [.394, .384, .387],
    num3: [.444, .471, .504],
    denom1: [.686, .752, 1.025],
    denom2: [.345, .344, .532],
    sup1: [.413, .503, .504],
    sup2: [.363, .431, .404],
    sup3: [.289, .286, .294],
    sub1: [.15, .143, .2],
    sub2: [.247, .286, .4],
    supDrop: [.386, .353, .494],
    subDrop: [.05, .071, .1],
    delim1: [2.39, 1.7, 1.98],
    delim2: [1.01, 1.157, 1.42],
    axisHeight: [.25, .25, .25],
    defaultRuleThickness: [.04, .049, .049],
    bigOpSpacing1: [.111, .111, .111],
    bigOpSpacing2: [.166, .166, .166],
    bigOpSpacing3: [.2, .2, .2],
    bigOpSpacing4: [.6, .611, .611],
    bigOpSpacing5: [.1, .143, .143],
    sqrtRuleThickness: [.04, .04, .04],
    ptPerEm: [10, 10, 10],
    doubleRuleSep: [.2, .2, .2],
    arrayRuleWidth: [.04, .04, .04],
    fboxsep: [.3, .3, .3],
    fboxrule: [.04, .04, .04]
  },
  _t: any = {
    Å: "A",
    Ð: "D",
    Þ: "o",
    å: "a",
    ð: "d",
    þ: "o",
    А: "A",
    Б: "B",
    В: "B",
    Г: "F",
    Д: "A",
    Е: "E",
    Ж: "K",
    З: "3",
    И: "N",
    Й: "N",
    К: "K",
    Л: "N",
    М: "M",
    Н: "H",
    О: "O",
    П: "N",
    Р: "P",
    С: "C",
    Т: "T",
    У: "y",
    Ф: "O",
    Х: "X",
    Ц: "U",
    Ч: "h",
    Ш: "W",
    Щ: "W",
    Ъ: "B",
    Ы: "X",
    Ь: "B",
    Э: "3",
    Ю: "X",
    Я: "R",
    а: "a",
    б: "b",
    в: "a",
    г: "r",
    д: "y",
    е: "e",
    ж: "m",
    з: "e",
    и: "n",
    й: "n",
    к: "n",
    л: "n",
    м: "m",
    н: "n",
    о: "o",
    п: "n",
    р: "p",
    с: "c",
    т: "o",
    у: "y",
    ф: "b",
    х: "x",
    ц: "n",
    ч: "n",
    ш: "w",
    щ: "w",
    ъ: "a",
    ы: "m",
    ь: "a",
    э: "e",
    ю: "m",
    я: "r"
  };
function ha(this: any, r: any, e: any): any {
  (k0 as any)[r] = e;
}
function Ct(this: any, r: any, e: any, t: any): any {
  if (!(k0 as any)[e]) throw new (Error as any)((("Font metrics not found for font: " as any) + (e as any) as any) + ("." as any));
  var a: any = ((r as any).charCodeAt as any)(0),
    n: any = ((k0 as any)[e] as any)[a];
  if (!n && (r as any)[0] in _t && (a = (((_t as any)[(r as any)[0]] as any).charCodeAt as any)(0), n = ((k0 as any)[e] as any)[a]), !n && (t as any) === ("text" as any) && (Cr as any)(a) && (n = ((k0 as any)[e] as any)[77]), n) return {
    depth: (n as any)[0],
    height: (n as any)[1],
    italic: (n as any)[2],
    skew: (n as any)[3],
    width: (n as any)[4]
  };
}
var Je: any = {};
function ma(this: any, r: any): any {
  var a: any;
  var e: any;
  if ((r as any) >= (5 as any) ? e = 0 : (r as any) >= (3 as any) ? e = 1 : e = 2, !(Je as any)[e]) {
    var t: any = (Je as any)[e] = {
      cssEmPerMu: (((xe as any).quad as any)[e] as any) / (18 as any)
    };
    for (a in xe) ((xe as any).hasOwnProperty as any)(a) && ((t as any)[a] = ((xe as any)[a] as any)[e]);
  }
  return (Je as any)[e];
}
var ca: any = {
    bin: 1,
    close: 1,
    inner: 1,
    open: 1,
    punct: 1,
    rel: 1
  },
  da: any = {
    "accent-token": 1,
    mathord: 1,
    "op-token": 1,
    spacing: 1,
    textord: 1
  },
  $: any = {
    math: {},
    text: {}
  };
function i(this: any, r: any, e: any, t: any, a: any, n: any, l: any): any {
  (($ as any)[r] as any)[n] = {
    font: e,
    group: t,
    replace: a
  }, l && a && ((($ as any)[r] as any)[a] = (($ as any)[r] as any)[n]);
}
var s: string = "math",
  w: string = "text",
  o: string = "main",
  d: string = "ams",
  j: string = "accent-token",
  D: string = "bin",
  o0: string = "close",
  ie: string = "inner",
  E: string = "mathord",
  e0: string = "op-token",
  v0: string = "open",
  ce: string = "punct",
  f: string = "rel",
  q0: string = "spacing",
  p: string = "textord";
(i as any)(s, o, f, "\u2261", "\\equiv", !0);
(i as any)(s, o, f, "\u227A", "\\prec", !0);
(i as any)(s, o, f, "\u227B", "\\succ", !0);
(i as any)(s, o, f, "\u223C", "\\sim", !0);
(i as any)(s, o, f, "\u22A5", "\\perp");
(i as any)(s, o, f, "\u2AAF", "\\preceq", !0);
(i as any)(s, o, f, "\u2AB0", "\\succeq", !0);
(i as any)(s, o, f, "\u2243", "\\simeq", !0);
(i as any)(s, o, f, "\u2223", "\\mid", !0);
(i as any)(s, o, f, "\u226A", "\\ll", !0);
(i as any)(s, o, f, "\u226B", "\\gg", !0);
(i as any)(s, o, f, "\u224D", "\\asymp", !0);
(i as any)(s, o, f, "\u2225", "\\parallel");
(i as any)(s, o, f, "\u22C8", "\\bowtie", !0);
(i as any)(s, o, f, "\u2323", "\\smile", !0);
(i as any)(s, o, f, "\u2291", "\\sqsubseteq", !0);
(i as any)(s, o, f, "\u2292", "\\sqsupseteq", !0);
(i as any)(s, o, f, "\u2250", "\\doteq", !0);
(i as any)(s, o, f, "\u2322", "\\frown", !0);
(i as any)(s, o, f, "\u220B", "\\ni", !0);
(i as any)(s, o, f, "\u221D", "\\propto", !0);
(i as any)(s, o, f, "\u22A2", "\\vdash", !0);
(i as any)(s, o, f, "\u22A3", "\\dashv", !0);
(i as any)(s, o, f, "\u220B", "\\owns");
(i as any)(s, o, ce, ".", "\\ldotp");
(i as any)(s, o, ce, "\u22C5", "\\cdotp");
(i as any)(s, o, ce, "\u22C5", "·");
(i as any)(w, o, p, "\u22C5", "·");
(i as any)(s, o, p, "#", "\\#");
(i as any)(w, o, p, "#", "\\#");
(i as any)(s, o, p, "&", "\\&");
(i as any)(w, o, p, "&", "\\&");
(i as any)(s, o, p, "\u2135", "\\aleph", !0);
(i as any)(s, o, p, "\u2200", "\\forall", !0);
(i as any)(s, o, p, "\u210F", "\\hbar", !0);
(i as any)(s, o, p, "\u2203", "\\exists", !0);
(i as any)(s, o, p, "\u2207", "\\nabla", !0);
(i as any)(s, o, p, "\u266D", "\\flat", !0);
(i as any)(s, o, p, "\u2113", "\\ell", !0);
(i as any)(s, o, p, "\u266E", "\\natural", !0);
(i as any)(s, o, p, "\u2663", "\\clubsuit", !0);
(i as any)(s, o, p, "\u2118", "\\wp", !0);
(i as any)(s, o, p, "\u266F", "\\sharp", !0);
(i as any)(s, o, p, "\u2662", "\\diamondsuit", !0);
(i as any)(s, o, p, "\u211C", "\\Re", !0);
(i as any)(s, o, p, "\u2661", "\\heartsuit", !0);
(i as any)(s, o, p, "\u2111", "\\Im", !0);
(i as any)(s, o, p, "\u2660", "\\spadesuit", !0);
(i as any)(s, o, p, "§", "\\S", !0);
(i as any)(w, o, p, "§", "\\S");
(i as any)(s, o, p, "¶", "\\P", !0);
(i as any)(w, o, p, "¶", "\\P");
(i as any)(s, o, p, "\u2020", "\\dag");
(i as any)(w, o, p, "\u2020", "\\dag");
(i as any)(w, o, p, "\u2020", "\\textdagger");
(i as any)(s, o, p, "\u2021", "\\ddag");
(i as any)(w, o, p, "\u2021", "\\ddag");
(i as any)(w, o, p, "\u2021", "\\textdaggerdbl");
(i as any)(s, o, o0, "\u23B1", "\\rmoustache", !0);
(i as any)(s, o, v0, "\u23B0", "\\lmoustache", !0);
(i as any)(s, o, o0, "\u27EF", "\\rgroup", !0);
(i as any)(s, o, v0, "\u27EE", "\\lgroup", !0);
(i as any)(s, o, D, "\u2213", "\\mp", !0);
(i as any)(s, o, D, "\u2296", "\\ominus", !0);
(i as any)(s, o, D, "\u228E", "\\uplus", !0);
(i as any)(s, o, D, "\u2293", "\\sqcap", !0);
(i as any)(s, o, D, "\u2217", "\\ast");
(i as any)(s, o, D, "\u2294", "\\sqcup", !0);
(i as any)(s, o, D, "\u25EF", "\\bigcirc", !0);
(i as any)(s, o, D, "\u2219", "\\bullet", !0);
(i as any)(s, o, D, "\u2021", "\\ddagger");
(i as any)(s, o, D, "\u2240", "\\wr", !0);
(i as any)(s, o, D, "\u2A3F", "\\amalg");
(i as any)(s, o, D, "&", "\\And");
(i as any)(s, o, f, "\u27F5", "\\longleftarrow", !0);
(i as any)(s, o, f, "\u21D0", "\\Leftarrow", !0);
(i as any)(s, o, f, "\u27F8", "\\Longleftarrow", !0);
(i as any)(s, o, f, "\u27F6", "\\longrightarrow", !0);
(i as any)(s, o, f, "\u21D2", "\\Rightarrow", !0);
(i as any)(s, o, f, "\u27F9", "\\Longrightarrow", !0);
(i as any)(s, o, f, "\u2194", "\\leftrightarrow", !0);
(i as any)(s, o, f, "\u27F7", "\\longleftrightarrow", !0);
(i as any)(s, o, f, "\u21D4", "\\Leftrightarrow", !0);
(i as any)(s, o, f, "\u27FA", "\\Longleftrightarrow", !0);
(i as any)(s, o, f, "\u21A6", "\\mapsto", !0);
(i as any)(s, o, f, "\u27FC", "\\longmapsto", !0);
(i as any)(s, o, f, "\u2197", "\\nearrow", !0);
(i as any)(s, o, f, "\u21A9", "\\hookleftarrow", !0);
(i as any)(s, o, f, "\u21AA", "\\hookrightarrow", !0);
(i as any)(s, o, f, "\u2198", "\\searrow", !0);
(i as any)(s, o, f, "\u21BC", "\\leftharpoonup", !0);
(i as any)(s, o, f, "\u21C0", "\\rightharpoonup", !0);
(i as any)(s, o, f, "\u2199", "\\swarrow", !0);
(i as any)(s, o, f, "\u21BD", "\\leftharpoondown", !0);
(i as any)(s, o, f, "\u21C1", "\\rightharpoondown", !0);
(i as any)(s, o, f, "\u2196", "\\nwarrow", !0);
(i as any)(s, o, f, "\u21CC", "\\rightleftharpoons", !0);
(i as any)(s, d, f, "\u226E", "\\nless", !0);
(i as any)(s, d, f, "\uE010", "\\@nleqslant");
(i as any)(s, d, f, "\uE011", "\\@nleqq");
(i as any)(s, d, f, "\u2A87", "\\lneq", !0);
(i as any)(s, d, f, "\u2268", "\\lneqq", !0);
(i as any)(s, d, f, "\uE00C", "\\@lvertneqq");
(i as any)(s, d, f, "\u22E6", "\\lnsim", !0);
(i as any)(s, d, f, "\u2A89", "\\lnapprox", !0);
(i as any)(s, d, f, "\u2280", "\\nprec", !0);
(i as any)(s, d, f, "\u22E0", "\\npreceq", !0);
(i as any)(s, d, f, "\u22E8", "\\precnsim", !0);
(i as any)(s, d, f, "\u2AB9", "\\precnapprox", !0);
(i as any)(s, d, f, "\u2241", "\\nsim", !0);
(i as any)(s, d, f, "\uE006", "\\@nshortmid");
(i as any)(s, d, f, "\u2224", "\\nmid", !0);
(i as any)(s, d, f, "\u22AC", "\\nvdash", !0);
(i as any)(s, d, f, "\u22AD", "\\nvDash", !0);
(i as any)(s, d, f, "\u22EA", "\\ntriangleleft");
(i as any)(s, d, f, "\u22EC", "\\ntrianglelefteq", !0);
(i as any)(s, d, f, "\u228A", "\\subsetneq", !0);
(i as any)(s, d, f, "\uE01A", "\\@varsubsetneq");
(i as any)(s, d, f, "\u2ACB", "\\subsetneqq", !0);
(i as any)(s, d, f, "\uE017", "\\@varsubsetneqq");
(i as any)(s, d, f, "\u226F", "\\ngtr", !0);
(i as any)(s, d, f, "\uE00F", "\\@ngeqslant");
(i as any)(s, d, f, "\uE00E", "\\@ngeqq");
(i as any)(s, d, f, "\u2A88", "\\gneq", !0);
(i as any)(s, d, f, "\u2269", "\\gneqq", !0);
(i as any)(s, d, f, "\uE00D", "\\@gvertneqq");
(i as any)(s, d, f, "\u22E7", "\\gnsim", !0);
(i as any)(s, d, f, "\u2A8A", "\\gnapprox", !0);
(i as any)(s, d, f, "\u2281", "\\nsucc", !0);
(i as any)(s, d, f, "\u22E1", "\\nsucceq", !0);
(i as any)(s, d, f, "\u22E9", "\\succnsim", !0);
(i as any)(s, d, f, "\u2ABA", "\\succnapprox", !0);
(i as any)(s, d, f, "\u2246", "\\ncong", !0);
(i as any)(s, d, f, "\uE007", "\\@nshortparallel");
(i as any)(s, d, f, "\u2226", "\\nparallel", !0);
(i as any)(s, d, f, "\u22AF", "\\nVDash", !0);
(i as any)(s, d, f, "\u22EB", "\\ntriangleright");
(i as any)(s, d, f, "\u22ED", "\\ntrianglerighteq", !0);
(i as any)(s, d, f, "\uE018", "\\@nsupseteqq");
(i as any)(s, d, f, "\u228B", "\\supsetneq", !0);
(i as any)(s, d, f, "\uE01B", "\\@varsupsetneq");
(i as any)(s, d, f, "\u2ACC", "\\supsetneqq", !0);
(i as any)(s, d, f, "\uE019", "\\@varsupsetneqq");
(i as any)(s, d, f, "\u22AE", "\\nVdash", !0);
(i as any)(s, d, f, "\u2AB5", "\\precneqq", !0);
(i as any)(s, d, f, "\u2AB6", "\\succneqq", !0);
(i as any)(s, d, f, "\uE016", "\\@nsubseteqq");
(i as any)(s, d, D, "\u22B4", "\\unlhd");
(i as any)(s, d, D, "\u22B5", "\\unrhd");
(i as any)(s, d, f, "\u219A", "\\nleftarrow", !0);
(i as any)(s, d, f, "\u219B", "\\nrightarrow", !0);
(i as any)(s, d, f, "\u21CD", "\\nLeftarrow", !0);
(i as any)(s, d, f, "\u21CF", "\\nRightarrow", !0);
(i as any)(s, d, f, "\u21AE", "\\nleftrightarrow", !0);
(i as any)(s, d, f, "\u21CE", "\\nLeftrightarrow", !0);
(i as any)(s, d, f, "\u25B3", "\\vartriangle");
(i as any)(s, d, p, "\u210F", "\\hslash");
(i as any)(s, d, p, "\u25BD", "\\triangledown");
(i as any)(s, d, p, "\u25CA", "\\lozenge");
(i as any)(s, d, p, "\u24C8", "\\circledS");
(i as any)(s, d, p, "®", "\\circledR");
(i as any)(w, d, p, "®", "\\circledR");
(i as any)(s, d, p, "\u2221", "\\measuredangle", !0);
(i as any)(s, d, p, "\u2204", "\\nexists");
(i as any)(s, d, p, "\u2127", "\\mho");
(i as any)(s, d, p, "\u2132", "\\Finv", !0);
(i as any)(s, d, p, "\u2141", "\\Game", !0);
(i as any)(s, d, p, "\u2035", "\\backprime");
(i as any)(s, d, p, "\u25B2", "\\blacktriangle");
(i as any)(s, d, p, "\u25BC", "\\blacktriangledown");
(i as any)(s, d, p, "\u25A0", "\\blacksquare");
(i as any)(s, d, p, "\u29EB", "\\blacklozenge");
(i as any)(s, d, p, "\u2605", "\\bigstar");
(i as any)(s, d, p, "\u2222", "\\sphericalangle", !0);
(i as any)(s, d, p, "\u2201", "\\complement", !0);
(i as any)(s, d, p, "ð", "\\eth", !0);
(i as any)(w, o, p, "ð", "ð");
(i as any)(s, d, p, "\u2571", "\\diagup");
(i as any)(s, d, p, "\u2572", "\\diagdown");
(i as any)(s, d, p, "\u25A1", "\\square");
(i as any)(s, d, p, "\u25A1", "\\Box");
(i as any)(s, d, p, "\u25CA", "\\Diamond");
(i as any)(s, d, p, "¥", "\\yen", !0);
(i as any)(w, d, p, "¥", "\\yen", !0);
(i as any)(s, d, p, "\u2713", "\\checkmark", !0);
(i as any)(w, d, p, "\u2713", "\\checkmark");
(i as any)(s, d, p, "\u2136", "\\beth", !0);
(i as any)(s, d, p, "\u2138", "\\daleth", !0);
(i as any)(s, d, p, "\u2137", "\\gimel", !0);
(i as any)(s, d, p, "\u03DD", "\\digamma", !0);
(i as any)(s, d, p, "\u03F0", "\\varkappa");
(i as any)(s, d, v0, "\u250C", "\\@ulcorner", !0);
(i as any)(s, d, o0, "\u2510", "\\@urcorner", !0);
(i as any)(s, d, v0, "\u2514", "\\@llcorner", !0);
(i as any)(s, d, o0, "\u2518", "\\@lrcorner", !0);
(i as any)(s, d, f, "\u2266", "\\leqq", !0);
(i as any)(s, d, f, "\u2A7D", "\\leqslant", !0);
(i as any)(s, d, f, "\u2A95", "\\eqslantless", !0);
(i as any)(s, d, f, "\u2272", "\\lesssim", !0);
(i as any)(s, d, f, "\u2A85", "\\lessapprox", !0);
(i as any)(s, d, f, "\u224A", "\\approxeq", !0);
(i as any)(s, d, D, "\u22D6", "\\lessdot");
(i as any)(s, d, f, "\u22D8", "\\lll", !0);
(i as any)(s, d, f, "\u2276", "\\lessgtr", !0);
(i as any)(s, d, f, "\u22DA", "\\lesseqgtr", !0);
(i as any)(s, d, f, "\u2A8B", "\\lesseqqgtr", !0);
(i as any)(s, d, f, "\u2251", "\\doteqdot");
(i as any)(s, d, f, "\u2253", "\\risingdotseq", !0);
(i as any)(s, d, f, "\u2252", "\\fallingdotseq", !0);
(i as any)(s, d, f, "\u223D", "\\backsim", !0);
(i as any)(s, d, f, "\u22CD", "\\backsimeq", !0);
(i as any)(s, d, f, "\u2AC5", "\\subseteqq", !0);
(i as any)(s, d, f, "\u22D0", "\\Subset", !0);
(i as any)(s, d, f, "\u228F", "\\sqsubset", !0);
(i as any)(s, d, f, "\u227C", "\\preccurlyeq", !0);
(i as any)(s, d, f, "\u22DE", "\\curlyeqprec", !0);
(i as any)(s, d, f, "\u227E", "\\precsim", !0);
(i as any)(s, d, f, "\u2AB7", "\\precapprox", !0);
(i as any)(s, d, f, "\u22B2", "\\vartriangleleft");
(i as any)(s, d, f, "\u22B4", "\\trianglelefteq");
(i as any)(s, d, f, "\u22A8", "\\vDash", !0);
(i as any)(s, d, f, "\u22AA", "\\Vvdash", !0);
(i as any)(s, d, f, "\u2323", "\\smallsmile");
(i as any)(s, d, f, "\u2322", "\\smallfrown");
(i as any)(s, d, f, "\u224F", "\\bumpeq", !0);
(i as any)(s, d, f, "\u224E", "\\Bumpeq", !0);
(i as any)(s, d, f, "\u2267", "\\geqq", !0);
(i as any)(s, d, f, "\u2A7E", "\\geqslant", !0);
(i as any)(s, d, f, "\u2A96", "\\eqslantgtr", !0);
(i as any)(s, d, f, "\u2273", "\\gtrsim", !0);
(i as any)(s, d, f, "\u2A86", "\\gtrapprox", !0);
(i as any)(s, d, D, "\u22D7", "\\gtrdot");
(i as any)(s, d, f, "\u22D9", "\\ggg", !0);
(i as any)(s, d, f, "\u2277", "\\gtrless", !0);
(i as any)(s, d, f, "\u22DB", "\\gtreqless", !0);
(i as any)(s, d, f, "\u2A8C", "\\gtreqqless", !0);
(i as any)(s, d, f, "\u2256", "\\eqcirc", !0);
(i as any)(s, d, f, "\u2257", "\\circeq", !0);
(i as any)(s, d, f, "\u225C", "\\triangleq", !0);
(i as any)(s, d, f, "\u223C", "\\thicksim");
(i as any)(s, d, f, "\u2248", "\\thickapprox");
(i as any)(s, d, f, "\u2AC6", "\\supseteqq", !0);
(i as any)(s, d, f, "\u22D1", "\\Supset", !0);
(i as any)(s, d, f, "\u2290", "\\sqsupset", !0);
(i as any)(s, d, f, "\u227D", "\\succcurlyeq", !0);
(i as any)(s, d, f, "\u22DF", "\\curlyeqsucc", !0);
(i as any)(s, d, f, "\u227F", "\\succsim", !0);
(i as any)(s, d, f, "\u2AB8", "\\succapprox", !0);
(i as any)(s, d, f, "\u22B3", "\\vartriangleright");
(i as any)(s, d, f, "\u22B5", "\\trianglerighteq");
(i as any)(s, d, f, "\u22A9", "\\Vdash", !0);
(i as any)(s, d, f, "\u2223", "\\shortmid");
(i as any)(s, d, f, "\u2225", "\\shortparallel");
(i as any)(s, d, f, "\u226C", "\\between", !0);
(i as any)(s, d, f, "\u22D4", "\\pitchfork", !0);
(i as any)(s, d, f, "\u221D", "\\varpropto");
(i as any)(s, d, f, "\u25C0", "\\blacktriangleleft");
(i as any)(s, d, f, "\u2234", "\\therefore", !0);
(i as any)(s, d, f, "\u220D", "\\backepsilon");
(i as any)(s, d, f, "\u25B6", "\\blacktriangleright");
(i as any)(s, d, f, "\u2235", "\\because", !0);
(i as any)(s, d, f, "\u22D8", "\\llless");
(i as any)(s, d, f, "\u22D9", "\\gggtr");
(i as any)(s, d, D, "\u22B2", "\\lhd");
(i as any)(s, d, D, "\u22B3", "\\rhd");
(i as any)(s, d, f, "\u2242", "\\eqsim", !0);
(i as any)(s, o, f, "\u22C8", "\\Join");
(i as any)(s, d, f, "\u2251", "\\Doteq", !0);
(i as any)(s, d, D, "\u2214", "\\dotplus", !0);
(i as any)(s, d, D, "\u2216", "\\smallsetminus");
(i as any)(s, d, D, "\u22D2", "\\Cap", !0);
(i as any)(s, d, D, "\u22D3", "\\Cup", !0);
(i as any)(s, d, D, "\u2A5E", "\\doublebarwedge", !0);
(i as any)(s, d, D, "\u229F", "\\boxminus", !0);
(i as any)(s, d, D, "\u229E", "\\boxplus", !0);
(i as any)(s, d, D, "\u22C7", "\\divideontimes", !0);
(i as any)(s, d, D, "\u22C9", "\\ltimes", !0);
(i as any)(s, d, D, "\u22CA", "\\rtimes", !0);
(i as any)(s, d, D, "\u22CB", "\\leftthreetimes", !0);
(i as any)(s, d, D, "\u22CC", "\\rightthreetimes", !0);
(i as any)(s, d, D, "\u22CF", "\\curlywedge", !0);
(i as any)(s, d, D, "\u22CE", "\\curlyvee", !0);
(i as any)(s, d, D, "\u229D", "\\circleddash", !0);
(i as any)(s, d, D, "\u229B", "\\circledast", !0);
(i as any)(s, d, D, "\u22C5", "\\centerdot");
(i as any)(s, d, D, "\u22BA", "\\intercal", !0);
(i as any)(s, d, D, "\u22D2", "\\doublecap");
(i as any)(s, d, D, "\u22D3", "\\doublecup");
(i as any)(s, d, D, "\u22A0", "\\boxtimes", !0);
(i as any)(s, d, f, "\u21E2", "\\dashrightarrow", !0);
(i as any)(s, d, f, "\u21E0", "\\dashleftarrow", !0);
(i as any)(s, d, f, "\u21C7", "\\leftleftarrows", !0);
(i as any)(s, d, f, "\u21C6", "\\leftrightarrows", !0);
(i as any)(s, d, f, "\u21DA", "\\Lleftarrow", !0);
(i as any)(s, d, f, "\u219E", "\\twoheadleftarrow", !0);
(i as any)(s, d, f, "\u21A2", "\\leftarrowtail", !0);
(i as any)(s, d, f, "\u21AB", "\\looparrowleft", !0);
(i as any)(s, d, f, "\u21CB", "\\leftrightharpoons", !0);
(i as any)(s, d, f, "\u21B6", "\\curvearrowleft", !0);
(i as any)(s, d, f, "\u21BA", "\\circlearrowleft", !0);
(i as any)(s, d, f, "\u21B0", "\\Lsh", !0);
(i as any)(s, d, f, "\u21C8", "\\upuparrows", !0);
(i as any)(s, d, f, "\u21BF", "\\upharpoonleft", !0);
(i as any)(s, d, f, "\u21C3", "\\downharpoonleft", !0);
(i as any)(s, o, f, "\u22B6", "\\origof", !0);
(i as any)(s, o, f, "\u22B7", "\\imageof", !0);
(i as any)(s, d, f, "\u22B8", "\\multimap", !0);
(i as any)(s, d, f, "\u21AD", "\\leftrightsquigarrow", !0);
(i as any)(s, d, f, "\u21C9", "\\rightrightarrows", !0);
(i as any)(s, d, f, "\u21C4", "\\rightleftarrows", !0);
(i as any)(s, d, f, "\u21A0", "\\twoheadrightarrow", !0);
(i as any)(s, d, f, "\u21A3", "\\rightarrowtail", !0);
(i as any)(s, d, f, "\u21AC", "\\looparrowright", !0);
(i as any)(s, d, f, "\u21B7", "\\curvearrowright", !0);
(i as any)(s, d, f, "\u21BB", "\\circlearrowright", !0);
(i as any)(s, d, f, "\u21B1", "\\Rsh", !0);
(i as any)(s, d, f, "\u21CA", "\\downdownarrows", !0);
(i as any)(s, d, f, "\u21BE", "\\upharpoonright", !0);
(i as any)(s, d, f, "\u21C2", "\\downharpoonright", !0);
(i as any)(s, d, f, "\u21DD", "\\rightsquigarrow", !0);
(i as any)(s, d, f, "\u21DD", "\\leadsto");
(i as any)(s, d, f, "\u21DB", "\\Rrightarrow", !0);
(i as any)(s, d, f, "\u21BE", "\\restriction");
(i as any)(s, o, p, "\u2018", "`");
(i as any)(s, o, p, "$", "\\$");
(i as any)(w, o, p, "$", "\\$");
(i as any)(w, o, p, "$", "\\textdollar");
(i as any)(s, o, p, "%", "\\%");
(i as any)(w, o, p, "%", "\\%");
(i as any)(s, o, p, "_", "\\_");
(i as any)(w, o, p, "_", "\\_");
(i as any)(w, o, p, "_", "\\textunderscore");
(i as any)(s, o, p, "\u2220", "\\angle", !0);
(i as any)(s, o, p, "\u221E", "\\infty", !0);
(i as any)(s, o, p, "\u2032", "\\prime");
(i as any)(s, o, p, "\u25B3", "\\triangle");
(i as any)(s, o, p, "\u0393", "\\Gamma", !0);
(i as any)(s, o, p, "\u0394", "\\Delta", !0);
(i as any)(s, o, p, "\u0398", "\\Theta", !0);
(i as any)(s, o, p, "\u039B", "\\Lambda", !0);
(i as any)(s, o, p, "\u039E", "\\Xi", !0);
(i as any)(s, o, p, "\u03A0", "\\Pi", !0);
(i as any)(s, o, p, "\u03A3", "\\Sigma", !0);
(i as any)(s, o, p, "\u03A5", "\\Upsilon", !0);
(i as any)(s, o, p, "\u03A6", "\\Phi", !0);
(i as any)(s, o, p, "\u03A8", "\\Psi", !0);
(i as any)(s, o, p, "\u03A9", "\\Omega", !0);
(i as any)(s, o, p, "A", "\u0391");
(i as any)(s, o, p, "B", "\u0392");
(i as any)(s, o, p, "E", "\u0395");
(i as any)(s, o, p, "Z", "\u0396");
(i as any)(s, o, p, "H", "\u0397");
(i as any)(s, o, p, "I", "\u0399");
(i as any)(s, o, p, "K", "\u039A");
(i as any)(s, o, p, "M", "\u039C");
(i as any)(s, o, p, "N", "\u039D");
(i as any)(s, o, p, "O", "\u039F");
(i as any)(s, o, p, "P", "\u03A1");
(i as any)(s, o, p, "T", "\u03A4");
(i as any)(s, o, p, "X", "\u03A7");
(i as any)(s, o, p, "¬", "\\neg", !0);
(i as any)(s, o, p, "¬", "\\lnot");
(i as any)(s, o, p, "\u22A4", "\\top");
(i as any)(s, o, p, "\u22A5", "\\bot");
(i as any)(s, o, p, "\u2205", "\\emptyset");
(i as any)(s, d, p, "\u2205", "\\varnothing");
(i as any)(s, o, E, "\u03B1", "\\alpha", !0);
(i as any)(s, o, E, "\u03B2", "\\beta", !0);
(i as any)(s, o, E, "\u03B3", "\\gamma", !0);
(i as any)(s, o, E, "\u03B4", "\\delta", !0);
(i as any)(s, o, E, "\u03F5", "\\epsilon", !0);
(i as any)(s, o, E, "\u03B6", "\\zeta", !0);
(i as any)(s, o, E, "\u03B7", "\\eta", !0);
(i as any)(s, o, E, "\u03B8", "\\theta", !0);
(i as any)(s, o, E, "\u03B9", "\\iota", !0);
(i as any)(s, o, E, "\u03BA", "\\kappa", !0);
(i as any)(s, o, E, "\u03BB", "\\lambda", !0);
(i as any)(s, o, E, "\u03BC", "\\mu", !0);
(i as any)(s, o, E, "\u03BD", "\\nu", !0);
(i as any)(s, o, E, "\u03BE", "\\xi", !0);
(i as any)(s, o, E, "\u03BF", "\\omicron", !0);
(i as any)(s, o, E, "\u03C0", "\\pi", !0);
(i as any)(s, o, E, "\u03C1", "\\rho", !0);
(i as any)(s, o, E, "\u03C3", "\\sigma", !0);
(i as any)(s, o, E, "\u03C4", "\\tau", !0);
(i as any)(s, o, E, "\u03C5", "\\upsilon", !0);
(i as any)(s, o, E, "\u03D5", "\\phi", !0);
(i as any)(s, o, E, "\u03C7", "\\chi", !0);
(i as any)(s, o, E, "\u03C8", "\\psi", !0);
(i as any)(s, o, E, "\u03C9", "\\omega", !0);
(i as any)(s, o, E, "\u03B5", "\\varepsilon", !0);
(i as any)(s, o, E, "\u03D1", "\\vartheta", !0);
(i as any)(s, o, E, "\u03D6", "\\varpi", !0);
(i as any)(s, o, E, "\u03F1", "\\varrho", !0);
(i as any)(s, o, E, "\u03C2", "\\varsigma", !0);
(i as any)(s, o, E, "\u03C6", "\\varphi", !0);
(i as any)(s, o, D, "\u2217", "*", !0);
(i as any)(s, o, D, "+", "+");
(i as any)(s, o, D, "\u2212", "-", !0);
(i as any)(s, o, D, "\u22C5", "\\cdot", !0);
(i as any)(s, o, D, "\u2218", "\\circ", !0);
(i as any)(s, o, D, "÷", "\\div", !0);
(i as any)(s, o, D, "±", "\\pm", !0);
(i as any)(s, o, D, "×", "\\times", !0);
(i as any)(s, o, D, "\u2229", "\\cap", !0);
(i as any)(s, o, D, "\u222A", "\\cup", !0);
(i as any)(s, o, D, "\u2216", "\\setminus", !0);
(i as any)(s, o, D, "\u2227", "\\land");
(i as any)(s, o, D, "\u2228", "\\lor");
(i as any)(s, o, D, "\u2227", "\\wedge", !0);
(i as any)(s, o, D, "\u2228", "\\vee", !0);
(i as any)(s, o, p, "\u221A", "\\surd");
(i as any)(s, o, v0, "\u27E8", "\\langle", !0);
(i as any)(s, o, v0, "\u2223", "\\lvert");
(i as any)(s, o, v0, "\u2225", "\\lVert");
(i as any)(s, o, o0, "?", "?");
(i as any)(s, o, o0, "!", "!");
(i as any)(s, o, o0, "\u27E9", "\\rangle", !0);
(i as any)(s, o, o0, "\u2223", "\\rvert");
(i as any)(s, o, o0, "\u2225", "\\rVert");
(i as any)(s, o, f, "=", "=");
(i as any)(s, o, f, ":", ":");
(i as any)(s, o, f, "\u2248", "\\approx", !0);
(i as any)(s, o, f, "\u2245", "\\cong", !0);
(i as any)(s, o, f, "\u2265", "\\ge");
(i as any)(s, o, f, "\u2265", "\\geq", !0);
(i as any)(s, o, f, "\u2190", "\\gets");
(i as any)(s, o, f, ">", "\\gt", !0);
(i as any)(s, o, f, "\u2208", "\\in", !0);
(i as any)(s, o, f, "\uE020", "\\@not");
(i as any)(s, o, f, "\u2282", "\\subset", !0);
(i as any)(s, o, f, "\u2283", "\\supset", !0);
(i as any)(s, o, f, "\u2286", "\\subseteq", !0);
(i as any)(s, o, f, "\u2287", "\\supseteq", !0);
(i as any)(s, d, f, "\u2288", "\\nsubseteq", !0);
(i as any)(s, d, f, "\u2289", "\\nsupseteq", !0);
(i as any)(s, o, f, "\u22A8", "\\models");
(i as any)(s, o, f, "\u2190", "\\leftarrow", !0);
(i as any)(s, o, f, "\u2264", "\\le");
(i as any)(s, o, f, "\u2264", "\\leq", !0);
(i as any)(s, o, f, "<", "\\lt", !0);
(i as any)(s, o, f, "\u2192", "\\rightarrow", !0);
(i as any)(s, o, f, "\u2192", "\\to");
(i as any)(s, d, f, "\u2271", "\\ngeq", !0);
(i as any)(s, d, f, "\u2270", "\\nleq", !0);
(i as any)(s, o, q0, " ", "\\ ");
(i as any)(s, o, q0, " ", "\\space");
(i as any)(s, o, q0, " ", "\\nobreakspace");
(i as any)(w, o, q0, " ", "\\ ");
(i as any)(w, o, q0, " ", " ");
(i as any)(w, o, q0, " ", "\\space");
(i as any)(w, o, q0, " ", "\\nobreakspace");
(i as any)(s, o, q0, null, "\\nobreak");
(i as any)(s, o, q0, null, "\\allowbreak");
(i as any)(s, o, ce, ",", ",");
(i as any)(s, o, ce, ";", ";");
(i as any)(s, d, D, "\u22BC", "\\barwedge", !0);
(i as any)(s, d, D, "\u22BB", "\\veebar", !0);
(i as any)(s, o, D, "\u2299", "\\odot", !0);
(i as any)(s, o, D, "\u2295", "\\oplus", !0);
(i as any)(s, o, D, "\u2297", "\\otimes", !0);
(i as any)(s, o, p, "\u2202", "\\partial", !0);
(i as any)(s, o, D, "\u2298", "\\oslash", !0);
(i as any)(s, d, D, "\u229A", "\\circledcirc", !0);
(i as any)(s, d, D, "\u22A1", "\\boxdot", !0);
(i as any)(s, o, D, "\u25B3", "\\bigtriangleup");
(i as any)(s, o, D, "\u25BD", "\\bigtriangledown");
(i as any)(s, o, D, "\u2020", "\\dagger");
(i as any)(s, o, D, "\u22C4", "\\diamond");
(i as any)(s, o, D, "\u22C6", "\\star");
(i as any)(s, o, D, "\u25C3", "\\triangleleft");
(i as any)(s, o, D, "\u25B9", "\\triangleright");
(i as any)(s, o, v0, "{", "\\{");
(i as any)(w, o, p, "{", "\\{");
(i as any)(w, o, p, "{", "\\textbraceleft");
(i as any)(s, o, o0, "}", "\\}");
(i as any)(w, o, p, "}", "\\}");
(i as any)(w, o, p, "}", "\\textbraceright");
(i as any)(s, o, v0, "{", "\\lbrace");
(i as any)(s, o, o0, "}", "\\rbrace");
(i as any)(s, o, v0, "[", "\\lbrack", !0);
(i as any)(w, o, p, "[", "\\lbrack", !0);
(i as any)(s, o, o0, "]", "\\rbrack", !0);
(i as any)(w, o, p, "]", "\\rbrack", !0);
(i as any)(s, o, v0, "(", "\\lparen", !0);
(i as any)(s, o, o0, ")", "\\rparen", !0);
(i as any)(w, o, p, "<", "\\textless", !0);
(i as any)(w, o, p, ">", "\\textgreater", !0);
(i as any)(s, o, v0, "\u230A", "\\lfloor", !0);
(i as any)(s, o, o0, "\u230B", "\\rfloor", !0);
(i as any)(s, o, v0, "\u2308", "\\lceil", !0);
(i as any)(s, o, o0, "\u2309", "\\rceil", !0);
(i as any)(s, o, p, "\\", "\\backslash");
(i as any)(s, o, p, "\u2223", "|");
(i as any)(s, o, p, "\u2223", "\\vert");
(i as any)(w, o, p, "|", "\\textbar", !0);
(i as any)(s, o, p, "\u2225", "\\|");
(i as any)(s, o, p, "\u2225", "\\Vert");
(i as any)(w, o, p, "\u2225", "\\textbardbl");
(i as any)(w, o, p, "~", "\\textasciitilde");
(i as any)(w, o, p, "\\", "\\textbackslash");
(i as any)(w, o, p, "^", "\\textasciicircum");
(i as any)(s, o, f, "\u2191", "\\uparrow", !0);
(i as any)(s, o, f, "\u21D1", "\\Uparrow", !0);
(i as any)(s, o, f, "\u2193", "\\downarrow", !0);
(i as any)(s, o, f, "\u21D3", "\\Downarrow", !0);
(i as any)(s, o, f, "\u2195", "\\updownarrow", !0);
(i as any)(s, o, f, "\u21D5", "\\Updownarrow", !0);
(i as any)(s, o, e0, "\u2210", "\\coprod");
(i as any)(s, o, e0, "\u22C1", "\\bigvee");
(i as any)(s, o, e0, "\u22C0", "\\bigwedge");
(i as any)(s, o, e0, "\u2A04", "\\biguplus");
(i as any)(s, o, e0, "\u22C2", "\\bigcap");
(i as any)(s, o, e0, "\u22C3", "\\bigcup");
(i as any)(s, o, e0, "\u222B", "\\int");
(i as any)(s, o, e0, "\u222B", "\\intop");
(i as any)(s, o, e0, "\u222C", "\\iint");
(i as any)(s, o, e0, "\u222D", "\\iiint");
(i as any)(s, o, e0, "\u220F", "\\prod");
(i as any)(s, o, e0, "\u2211", "\\sum");
(i as any)(s, o, e0, "\u2A02", "\\bigotimes");
(i as any)(s, o, e0, "\u2A01", "\\bigoplus");
(i as any)(s, o, e0, "\u2A00", "\\bigodot");
(i as any)(s, o, e0, "\u222E", "\\oint");
(i as any)(s, o, e0, "\u222F", "\\oiint");
(i as any)(s, o, e0, "\u2230", "\\oiiint");
(i as any)(s, o, e0, "\u2A06", "\\bigsqcup");
(i as any)(s, o, e0, "\u222B", "\\smallint");
(i as any)(w, o, ie, "\u2026", "\\textellipsis");
(i as any)(s, o, ie, "\u2026", "\\mathellipsis");
(i as any)(w, o, ie, "\u2026", "\\ldots", !0);
(i as any)(s, o, ie, "\u2026", "\\ldots", !0);
(i as any)(s, o, ie, "\u22EF", "\\@cdots", !0);
(i as any)(s, o, ie, "\u22F1", "\\ddots", !0);
(i as any)(s, o, p, "\u22EE", "\\varvdots");
(i as any)(w, o, p, "\u22EE", "\\varvdots");
(i as any)(s, o, j, "\u02CA", "\\acute");
(i as any)(s, o, j, "\u02CB", "\\grave");
(i as any)(s, o, j, "¨", "\\ddot");
(i as any)(s, o, j, "~", "\\tilde");
(i as any)(s, o, j, "\u02C9", "\\bar");
(i as any)(s, o, j, "\u02D8", "\\breve");
(i as any)(s, o, j, "\u02C7", "\\check");
(i as any)(s, o, j, "^", "\\hat");
(i as any)(s, o, j, "\u20D7", "\\vec");
(i as any)(s, o, j, "\u02D9", "\\dot");
(i as any)(s, o, j, "\u02DA", "\\mathring");
(i as any)(s, o, E, "\uE131", "\\@imath");
(i as any)(s, o, E, "\uE237", "\\@jmath");
(i as any)(s, o, p, "\u0131", "\u0131");
(i as any)(s, o, p, "\u0237", "\u0237");
(i as any)(w, o, p, "\u0131", "\\i", !0);
(i as any)(w, o, p, "\u0237", "\\j", !0);
(i as any)(w, o, p, "ß", "\\ss", !0);
(i as any)(w, o, p, "æ", "\\ae", !0);
(i as any)(w, o, p, "\u0153", "\\oe", !0);
(i as any)(w, o, p, "ø", "\\o", !0);
(i as any)(w, o, p, "Æ", "\\AE", !0);
(i as any)(w, o, p, "\u0152", "\\OE", !0);
(i as any)(w, o, p, "Ø", "\\O", !0);
(i as any)(w, o, j, "\u02CA", "\\'");
(i as any)(w, o, j, "\u02CB", "\\`");
(i as any)(w, o, j, "\u02C6", "\\^");
(i as any)(w, o, j, "\u02DC", "\\~");
(i as any)(w, o, j, "\u02C9", "\\=");
(i as any)(w, o, j, "\u02D8", "\\u");
(i as any)(w, o, j, "\u02D9", "\\.");
(i as any)(w, o, j, "¸", "\\c");
(i as any)(w, o, j, "\u02DA", "\\r");
(i as any)(w, o, j, "\u02C7", "\\v");
(i as any)(w, o, j, "¨", '\\"');
(i as any)(w, o, j, "\u02DD", "\\H");
(i as any)(w, o, j, "\u25EF", "\\textcircled");
var Nr: any = {
  "--": !0,
  "---": !0,
  "``": !0,
  "''": !0
};
(i as any)(w, o, p, "\u2013", "--", !0);
(i as any)(w, o, p, "\u2013", "\\textendash");
(i as any)(w, o, p, "\u2014", "---", !0);
(i as any)(w, o, p, "\u2014", "\\textemdash");
(i as any)(w, o, p, "\u2018", "`", !0);
(i as any)(w, o, p, "\u2018", "\\textquoteleft");
(i as any)(w, o, p, "\u2019", "'", !0);
(i as any)(w, o, p, "\u2019", "\\textquoteright");
(i as any)(w, o, p, "\u201C", "``", !0);
(i as any)(w, o, p, "\u201C", "\\textquotedblleft");
(i as any)(w, o, p, "\u201D", "''", !0);
(i as any)(w, o, p, "\u201D", "\\textquotedblright");
(i as any)(s, o, p, "°", "\\degree", !0);
(i as any)(w, o, p, "°", "\\degree");
(i as any)(w, o, p, "°", "\\textdegree", !0);
(i as any)(s, o, p, "£", "\\pounds");
(i as any)(s, o, p, "£", "\\mathsterling", !0);
(i as any)(w, o, p, "£", "\\pounds");
(i as any)(w, o, p, "£", "\\textsterling", !0);
(i as any)(s, d, p, "\u2720", "\\maltese");
(i as any)(w, d, p, "\u2720", "\\maltese");
var er: string = '0123456789/@."';
for (var Qe: any = 0; (Qe as any) < ((er as any).length as any); Qe++) {
  var tr: any = ((er as any).charAt as any)(Qe);
  (i as any)(s, o, p, tr, tr);
}
var rr: string = '0123456789!@*()-=+";:?/.,';
for (var _e: any = 0; (_e as any) < ((rr as any).length as any); _e++) {
  var ar: any = ((rr as any).charAt as any)(_e);
  (i as any)(w, o, p, ar, ar);
}
var Ee: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
for (var et: any = 0; (et as any) < ((Ee as any).length as any); et++) {
  var we: any = ((Ee as any).charAt as any)(et);
  (i as any)(s, o, E, we, we), (i as any)(w, o, p, we, we);
}
(i as any)(s, d, p, "C", "\u2102");
(i as any)(w, d, p, "C", "\u2102");
(i as any)(s, d, p, "H", "\u210D");
(i as any)(w, d, p, "H", "\u210D");
(i as any)(s, d, p, "N", "\u2115");
(i as any)(w, d, p, "N", "\u2115");
(i as any)(s, d, p, "P", "\u2119");
(i as any)(w, d, p, "P", "\u2119");
(i as any)(s, d, p, "Q", "\u211A");
(i as any)(w, d, p, "Q", "\u211A");
(i as any)(s, d, p, "R", "\u211D");
(i as any)(w, d, p, "R", "\u211D");
(i as any)(s, d, p, "Z", "\u2124");
(i as any)(w, d, p, "Z", "\u2124");
(i as any)(s, o, E, "h", "\u210E");
(i as any)(w, o, E, "h", "\u210E");
var R: any = "";
for (var l0: any = 0; (l0 as any) < ((Ee as any).length as any); l0++) {
  var J: any = ((Ee as any).charAt as any)(l0);
  R = ((String as any).fromCharCode as any)(55349, (56320 as any) + (l0 as any)), (i as any)(s, o, E, J, R), (i as any)(w, o, p, J, R), R = ((String as any).fromCharCode as any)(55349, (56372 as any) + (l0 as any)), (i as any)(s, o, E, J, R), (i as any)(w, o, p, J, R), R = ((String as any).fromCharCode as any)(55349, (56424 as any) + (l0 as any)), (i as any)(s, o, E, J, R), (i as any)(w, o, p, J, R), R = ((String as any).fromCharCode as any)(55349, (56580 as any) + (l0 as any)), (i as any)(s, o, E, J, R), (i as any)(w, o, p, J, R), R = ((String as any).fromCharCode as any)(55349, (56684 as any) + (l0 as any)), (i as any)(s, o, E, J, R), (i as any)(w, o, p, J, R), R = ((String as any).fromCharCode as any)(55349, (56736 as any) + (l0 as any)), (i as any)(s, o, E, J, R), (i as any)(w, o, p, J, R), R = ((String as any).fromCharCode as any)(55349, (56788 as any) + (l0 as any)), (i as any)(s, o, E, J, R), (i as any)(w, o, p, J, R), R = ((String as any).fromCharCode as any)(55349, (56840 as any) + (l0 as any)), (i as any)(s, o, E, J, R), (i as any)(w, o, p, J, R), R = ((String as any).fromCharCode as any)(55349, (56944 as any) + (l0 as any)), (i as any)(s, o, E, J, R), (i as any)(w, o, p, J, R), (l0 as any) < (26 as any) && (R = ((String as any).fromCharCode as any)(55349, (56632 as any) + (l0 as any)), (i as any)(s, o, E, J, R), (i as any)(w, o, p, J, R), R = ((String as any).fromCharCode as any)(55349, (56476 as any) + (l0 as any)), (i as any)(s, o, E, J, R), (i as any)(w, o, p, J, R));
}
R = "\uD835\uDD5C";
(i as any)(s, o, E, "k", R);
(i as any)(w, o, p, "k", R);
for (var Y0: any = 0; (Y0 as any) < (10 as any); Y0++) {
  var H0: any = ((Y0 as any).toString as any)();
  R = ((String as any).fromCharCode as any)(55349, (57294 as any) + (Y0 as any)), (i as any)(s, o, E, H0, R), (i as any)(w, o, p, H0, R), R = ((String as any).fromCharCode as any)(55349, (57314 as any) + (Y0 as any)), (i as any)(s, o, E, H0, R), (i as any)(w, o, p, H0, R), R = ((String as any).fromCharCode as any)(55349, (57324 as any) + (Y0 as any)), (i as any)(s, o, E, H0, R), (i as any)(w, o, p, H0, R), R = ((String as any).fromCharCode as any)(55349, (57334 as any) + (Y0 as any)), (i as any)(s, o, E, H0, R), (i as any)(w, o, p, H0, R);
}
var gt: string = "ÐÞþ";
for (var tt: any = 0; (tt as any) < ((gt as any).length as any); tt++) {
  var ke: any = ((gt as any).charAt as any)(tt);
  (i as any)(s, o, E, ke, ke), (i as any)(w, o, p, ke, ke);
}
var Se: any = [["mathbf", "textbf", "Main-Bold"], ["mathbf", "textbf", "Main-Bold"], ["mathnormal", "textit", "Math-Italic"], ["mathnormal", "textit", "Math-Italic"], ["boldsymbol", "boldsymbol", "Main-BoldItalic"], ["boldsymbol", "boldsymbol", "Main-BoldItalic"], ["mathscr", "textscr", "Script-Regular"], ["", "", ""], ["", "", ""], ["", "", ""], ["mathfrak", "textfrak", "Fraktur-Regular"], ["mathfrak", "textfrak", "Fraktur-Regular"], ["mathbb", "textbb", "AMS-Regular"], ["mathbb", "textbb", "AMS-Regular"], ["mathboldfrak", "textboldfrak", "Fraktur-Regular"], ["mathboldfrak", "textboldfrak", "Fraktur-Regular"], ["mathsf", "textsf", "SansSerif-Regular"], ["mathsf", "textsf", "SansSerif-Regular"], ["mathboldsf", "textboldsf", "SansSerif-Bold"], ["mathboldsf", "textboldsf", "SansSerif-Bold"], ["mathitsf", "textitsf", "SansSerif-Italic"], ["mathitsf", "textitsf", "SansSerif-Italic"], ["", "", ""], ["", "", ""], ["mathtt", "texttt", "Typewriter-Regular"], ["mathtt", "texttt", "Typewriter-Regular"]],
  nr: any = [["mathbf", "textbf", "Main-Bold"], ["", "", ""], ["mathsf", "textsf", "SansSerif-Regular"], ["mathboldsf", "textboldsf", "SansSerif-Bold"], ["mathtt", "texttt", "Typewriter-Regular"]],
  fa: any = (r: any, e: any): any => {
    var t: any = ((r as any).charCodeAt as any)(0),
      a: any = ((r as any).charCodeAt as any)(1),
      n: any = ((((t as any) - (55296 as any) as any) * (1024 as any) as any) + ((a as any) - (56320 as any) as any) as any) + (65536 as any),
      l: any = (e as any) === ("math" as any) ? 0 : 1;
    if ((119808 as any) <= (n as any) && (n as any) < (120484 as any)) {
      var u: any = ((Math as any).floor as any)(((n as any) - (119808 as any) as any) / (26 as any));
      return [((Se as any)[u] as any)[2], ((Se as any)[u] as any)[l]];
    } else if ((120782 as any) <= (n as any) && (n as any) <= (120831 as any)) {
      var h: any = ((Math as any).floor as any)(((n as any) - (120782 as any) as any) / (10 as any));
      return [((nr as any)[h] as any)[2], ((nr as any)[h] as any)[l]];
    } else {
      if ((n as any) === (120485 as any) || (n as any) === (120486 as any)) return [((Se as any)[0] as any)[2], ((Se as any)[0] as any)[l]];
      if ((120486 as any) < (n as any) && (n as any) < (120782 as any)) return ["", ""];
      throw new (S as any)(("Unsupported character: " as any) + (r as any));
    }
  },
  He: any = function (this: any, e: any, t: any, a: any): any {
    if ((($ as any)[a] as any)[e]) {
      var n: any = ((($ as any)[a] as any)[e] as any).replace;
      n && (e = n);
    }
    return {
      value: e,
      metrics: (Ct as any)(e, t, a)
    };
  },
  s0: any = function (this: any, e: any, t: any, a: any, n: any, l: any): any {
    var u: any = (He as any)(e, t, a),
      h: any = (u as any).metrics;
    e = (u as any).value;
    var c: any;
    if (h) {
      var v: any = (h as any).italic;
      ((a as any) === ("text" as any) || n && ((n as any).font as any) === ("mathit" as any)) && (v = 0), c = new (f0 as any)(e, (h as any).height, (h as any).depth, v, (h as any).skew, (h as any).width, l);
    } else (typeof console as any) < ("u" as any) && ((console as any).warn as any)(("No character metrics " as any) + ((((((("for '" as any) + (e as any) as any) + ("' in style '" as any) as any) + (t as any) as any) + ("' and mode '" as any) as any) + (a as any) as any) + ("'" as any) as any)), c = new (f0 as any)(e, 0, 0, 0, 0, 0, l);
    if (n) {
      (c as any).maxFontSize = (n as any).sizeMultiplier, (((n as any).style as any).isTight as any)() && (((c as any).classes as any).push as any)("mtight");
      var g: any = ((n as any).getColor as any)();
      g && (((c as any).style as any).color = g);
    }
    return c;
  },
  qt: any = function (this: any, e: any, t: any, a: any, n: any): any {
    return (n as any) === (void 0 as any) && (n = []), ((a as any).font as any) === ("boldsymbol" as any) && ((He as any)(e, "Main-Bold", t) as any).metrics ? (s0 as any)(e, "Main-Bold", t, a, ((n as any).concat as any)(["mathbf"])) : (e as any) === ("\\" as any) || (((($ as any)[t] as any)[e] as any).font as any) === ("main" as any) ? (s0 as any)(e, "Main-Regular", t, a, n) : (s0 as any)(e, "AMS-Regular", t, a, ((n as any).concat as any)(["amsrm"]));
  },
  va: any = function (this: any, e: any, t: any, a: any, n: any, l: any): any {
    return (l as any) !== ("textord" as any) && ((He as any)(e, "Math-BoldItalic", t) as any).metrics ? {
      fontName: "Math-BoldItalic",
      fontClass: "boldsymbol"
    } : {
      fontName: "Main-Bold",
      fontClass: "mathbf"
    };
  },
  Fe: any = function (this: any, e: any, t: any, a: any): any {
    var n: any = (e as any).mode,
      l: any = (e as any).text,
      u: any = ["mord"],
      h: any = (n as any) === ("math" as any) || (n as any) === ("text" as any) && (t as any).font,
      c: any = h ? (t as any).font : (t as any).fontFamily,
      v: any = "",
      g: any = "";
    if ((((l as any).charCodeAt as any)(0) as any) === (55349 as any) && ([v, g] = (fa as any)(l, n)), ((v as any).length as any) > (0 as any)) return (s0 as any)(l, v, n, t, ((u as any).concat as any)(g));
    if (c) {
      var b: any, y: any;
      if ((c as any) === ("boldsymbol" as any)) {
        var x: any = (va as any)(l, n, t, u, a);
        b = (x as any).fontName, y = [(x as any).fontClass];
      } else h ? (b = ((bt as any)[c] as any).fontName, y = [c]) : (b = (ze as any)(c, (t as any).fontWeight, (t as any).fontShape), y = [c, (t as any).fontWeight, (t as any).fontShape]);
      if (((He as any)(l, b, n) as any).metrics) return (s0 as any)(l, b, n, t, ((u as any).concat as any)(y));
      if (((Nr as any).hasOwnProperty as any)(l) && (((b as any).slice as any)(0, 10) as any) === ("Typewriter" as any)) {
        for (var M: any = [], T: any = 0; (T as any) < ((l as any).length as any); T++) ((M as any).push as any)((s0 as any)((l as any)[T], b, n, t, ((u as any).concat as any)(y)));
        return (E0 as any)(M);
      }
    }
    if ((a as any) === ("mathord" as any)) return (s0 as any)(l, "Math-Italic", n, t, ((u as any).concat as any)(["mathnormal"]));
    if ((a as any) === ("textord" as any)) {
      var C: any = (($ as any)[n] as any)[l] && ((($ as any)[n] as any)[l] as any).font;
      if ((C as any) === ("ams" as any)) {
        var q: any = (ze as any)("amsrm", (t as any).fontWeight, (t as any).fontShape);
        return (s0 as any)(l, q, n, t, ((u as any).concat as any)("amsrm", (t as any).fontWeight, (t as any).fontShape));
      } else if ((C as any) === ("main" as any) || !C) {
        var I: any = (ze as any)("textrm", (t as any).fontWeight, (t as any).fontShape);
        return (s0 as any)(l, I, n, t, ((u as any).concat as any)((t as any).fontWeight, (t as any).fontShape));
      } else {
        var O: any = (ze as any)(C, (t as any).fontWeight, (t as any).fontShape);
        return (s0 as any)(l, O, n, t, ((u as any).concat as any)(O, (t as any).fontWeight, (t as any).fontShape));
      }
    } else throw new (Error as any)((("unexpected type: " as any) + (a as any) as any) + (" in makeOrd" as any));
  },
  pa: any = (r: any, e: any): any => {
    if (((L0 as any)((r as any).classes) as any) !== ((L0 as any)((e as any).classes) as any) || ((r as any).skew as any) !== ((e as any).skew as any) || ((r as any).maxFontSize as any) !== ((e as any).maxFontSize as any) || ((r as any).italic as any) !== (0 as any) && ((r as any).hasClass as any)("mathnormal")) return !1;
    if ((((r as any).classes as any).length as any) === (1 as any)) {
      var t: any = ((r as any).classes as any)[0];
      if ((t as any) === ("mbin" as any) || (t as any) === ("mord" as any)) return !1;
    }
    for (var a of ((Object as any).keys as any)((r as any).style)) if ((((r as any).style as any)[a] as any) !== (((e as any).style as any)[a] as any)) return !1;
    for (var n of ((Object as any).keys as any)((e as any).style)) if ((((r as any).style as any)[n] as any) !== (((e as any).style as any)[n] as any)) return !1;
    return !0;
  },
  Or: any = (r: any): any => {
    for (var e: any = 0; (e as any) < (((r as any).length as any) - (1 as any) as any); e++) {
      var t: any = (r as any)[e],
        a: any = (r as any)[(e as any) + (1 as any)];
      t instanceof f0 && a instanceof f0 && (pa as any)(t, a) && ((t as any).text += (a as any).text, (t as any).height = ((Math as any).max as any)((t as any).height, (a as any).height), (t as any).depth = ((Math as any).max as any)((t as any).depth, (a as any).depth), (t as any).italic = (a as any).italic, ((r as any).splice as any)((e as any) + (1 as any), 1), e--);
    }
    return r;
  },
  Et: any = function (this: any, e: any): any {
    for (var t: any = 0, a: any = 0, n: any = 0, l: any = 0; (l as any) < (((e as any).children as any).length as any); l++) {
      var u: any = ((e as any).children as any)[l];
      ((u as any).height as any) > (t as any) && (t = (u as any).height), ((u as any).depth as any) > (a as any) && (a = (u as any).depth), ((u as any).maxFontSize as any) > (n as any) && (n = (u as any).maxFontSize);
    }
    (e as any).height = t, (e as any).depth = a, (e as any).maxFontSize = n;
  },
  k: any = function (this: any, e: any, t: any, a: any, n: any): any {
    var l: any = new (ne as any)(e, t, a, n);
    return (Et as any)(l), l;
  },
  G0: any = (r: any, e: any, t: any, a: any): any => new (ne as any)(r, e, t, a),
  te: any = function (this: any, e: any, t: any, a: any): any {
    var n: any = (k as any)([e], [], t);
    return (n as any).height = ((Math as any).max as any)(a || (((t as any).fontMetrics as any)() as any).defaultRuleThickness, (t as any).minRuleThickness), ((n as any).style as any).borderBottomWidth = (A as any)((n as any).height), (n as any).maxFontSize = 1, n;
  },
  ga: any = function (this: any, e: any, t: any, a: any, n: any): any {
    var l: any = new (Oe as any)(e, t, a, n);
    return (Et as any)(l), l;
  },
  E0: any = function (this: any, e: any): any {
    var t: any = new (ae as any)(e);
    return (Et as any)(t), t;
  },
  re: any = function (this: any, e: any, t: any): any {
    return e instanceof ae ? (k as any)([], [e], t) : e;
  },
  ba: any = function (this: any, e: any): any {
    if (((e as any).positionType as any) === ("individualShift" as any)) {
      for (var t: any = (e as any).children, a: any = [(t as any)[0]], n: any = (-((t as any)[0] as any).shift as any) - ((((t as any)[0] as any).elem as any).depth as any), l: any = n, u: any = 1; (u as any) < ((t as any).length as any); u++) {
        var h: any = ((-((t as any)[u] as any).shift as any) - (l as any) as any) - ((((t as any)[u] as any).elem as any).depth as any),
          c: any = (h as any) - (((((t as any)[(u as any) - (1 as any)] as any).elem as any).height as any) + ((((t as any)[(u as any) - (1 as any)] as any).elem as any).depth as any) as any);
        l = (l as any) + (h as any), ((a as any).push as any)({
          type: "kern",
          size: c
        }), ((a as any).push as any)((t as any)[u]);
      }
      return {
        children: a,
        depth: n
      };
    }
    var v: any;
    if (((e as any).positionType as any) === ("top" as any)) {
      for (var g: any = (e as any).positionData, b: any = 0; (b as any) < (((e as any).children as any).length as any); b++) {
        var y: any = ((e as any).children as any)[b];
        g -= ((y as any).type as any) === ("kern" as any) ? (y as any).size : (((y as any).elem as any).height as any) + (((y as any).elem as any).depth as any);
      }
      v = g;
    } else if (((e as any).positionType as any) === ("bottom" as any)) v = -(e as any).positionData;else {
      var x: any = ((e as any).children as any)[0];
      if (((x as any).type as any) !== ("elem" as any)) throw new (Error as any)('First child must have type "elem".');
      if (((e as any).positionType as any) === ("shift" as any)) v = (-((x as any).elem as any).depth as any) - ((e as any).positionData as any);else if (((e as any).positionType as any) === ("firstBaseline" as any)) v = -((x as any).elem as any).depth;else throw new (Error as any)((("Invalid positionType " as any) + ((e as any).positionType as any) as any) + ("." as any));
    }
    return {
      children: (e as any).children,
      depth: v
    };
  },
  G: any = function (this: any, e: any, t: any): any {
    for (var {
        children: a,
        depth: n
      }: any = (ba as any)(e), l: any = 0, u: any = 0; (u as any) < ((a as any).length as any); u++) {
      var h: any = (a as any)[u];
      if (((h as any).type as any) === ("elem" as any)) {
        var c: any = (h as any).elem;
        l = ((Math as any).max as any)(l, (c as any).maxFontSize, (c as any).height);
      }
    }
    l += 2;
    var v: any = (k as any)(["pstrut"], []);
    ((v as any).style as any).height = (A as any)(l);
    for (var g: any = [], b: any = n, y: any = n, x: any = n, M: any = 0; (M as any) < ((a as any).length as any); M++) {
      var T: any = (a as any)[M];
      if (((T as any).type as any) === ("kern" as any)) x += (T as any).size;else {
        var C: any = (T as any).elem,
          q: any = (T as any).wrapperClasses || [],
          I: any = (T as any).wrapperStyle || {},
          O: any = (k as any)(q, [v, C], void 0, I);
        ((O as any).style as any).top = (A as any)(((-l as any) - (x as any) as any) - ((C as any).depth as any)), (T as any).marginLeft && (((O as any).style as any).marginLeft = (T as any).marginLeft), (T as any).marginRight && (((O as any).style as any).marginRight = (T as any).marginRight), ((g as any).push as any)(O), x += ((C as any).height as any) + ((C as any).depth as any);
      }
      b = ((Math as any).min as any)(b, x), y = ((Math as any).max as any)(y, x);
    }
    var F: any = (k as any)(["vlist"], g);
    ((F as any).style as any).height = (A as any)(y);
    var V: any;
    if ((b as any) < (0 as any)) {
      var L: any = (k as any)([], []),
        P: any = (k as any)(["vlist"], [L]);
      ((P as any).style as any).height = (A as any)(-b);
      var W: any = (k as any)(["vlist-s"], [new (f0 as any)("\u200B")]);
      V = [(k as any)(["vlist-r"], [F, W]), (k as any)(["vlist-r"], [P])];
    } else V = [(k as any)(["vlist-r"], [F])];
    var X: any = (k as any)(["vlist-t"], V);
    return ((V as any).length as any) === (2 as any) && (((X as any).classes as any).push as any)("vlist-t2"), (X as any).height = y, (X as any).depth = -b, X;
  },
  Hr: any = (r: any, e: any): any => {
    var t: any = (k as any)(["mspace"], [], e),
      a: any = (K as any)(r, e);
    return ((t as any).style as any).marginRight = (A as any)(a), t;
  },
  ze: any = function (this: any, e: any, t: any, a: any): any {
    var n: any = "";
    switch (e) {
      case "amsrm":
        n = "AMS";
        break;
      case "textrm":
        n = "Main";
        break;
      case "textsf":
        n = "SansSerif";
        break;
      case "texttt":
        n = "Typewriter";
        break;
      default:
        n = e;
    }
    var l: any;
    return (t as any) === ("textbf" as any) && (a as any) === ("textit" as any) ? l = "BoldItalic" : (t as any) === ("textbf" as any) ? l = "Bold" : (t as any) === ("textit" as any) ? l = "Italic" : l = "Regular", ((n as any) + ("-" as any) as any) + (l as any);
  },
  bt: any = {
    mathbf: {
      variant: "bold",
      fontName: "Main-Bold"
    },
    mathrm: {
      variant: "normal",
      fontName: "Main-Regular"
    },
    textit: {
      variant: "italic",
      fontName: "Main-Italic"
    },
    mathit: {
      variant: "italic",
      fontName: "Main-Italic"
    },
    mathnormal: {
      variant: "italic",
      fontName: "Math-Italic"
    },
    mathsfit: {
      variant: "sans-serif-italic",
      fontName: "SansSerif-Italic"
    },
    mathbb: {
      variant: "double-struck",
      fontName: "AMS-Regular"
    },
    mathcal: {
      variant: "script",
      fontName: "Caligraphic-Regular"
    },
    mathfrak: {
      variant: "fraktur",
      fontName: "Fraktur-Regular"
    },
    mathscr: {
      variant: "script",
      fontName: "Script-Regular"
    },
    mathsf: {
      variant: "sans-serif",
      fontName: "SansSerif-Regular"
    },
    mathtt: {
      variant: "monospace",
      fontName: "Typewriter-Regular"
    }
  },
  Fr: any = {
    vec: ["vec", .471, .714],
    oiintSize1: ["oiintSize1", .957, .499],
    oiintSize2: ["oiintSize2", 1.472, .659],
    oiiintSize1: ["oiiintSize1", 1.304, .499],
    oiiintSize2: ["oiiintSize2", 1.98, .659]
  },
  Lr: any = function (this: any, e: any, t: any): any {
    var [a, n, l]: any = (Fr as any)[e],
      u: any = new (P0 as any)(a),
      h: any = new (D0 as any)([u], {
        width: (A as any)(n),
        height: (A as any)(l),
        style: ("width:" as any) + ((A as any)(n) as any),
        viewBox: ((("0 0 " as any) + ((1e3 as any) * (n as any) as any) as any) + (" " as any) as any) + ((1e3 as any) * (l as any) as any),
        preserveAspectRatio: "xMinYMin"
      }),
      c: any = (G0 as any)(["overlay"], [h], t);
    return (c as any).height = l, ((c as any).style as any).height = (A as any)(l), ((c as any).style as any).width = (A as any)(n), c;
  },
  Z: any = {
    number: 3,
    unit: "mu"
  },
  W0: any = {
    number: 4,
    unit: "mu"
  },
  M0: any = {
    number: 5,
    unit: "mu"
  },
  ya: any = {
    mord: {
      mop: Z,
      mbin: W0,
      mrel: M0,
      minner: Z
    },
    mop: {
      mord: Z,
      mop: Z,
      mrel: M0,
      minner: Z
    },
    mbin: {
      mord: W0,
      mop: W0,
      mopen: W0,
      minner: W0
    },
    mrel: {
      mord: M0,
      mop: M0,
      mopen: M0,
      minner: M0
    },
    mopen: {},
    mclose: {
      mop: Z,
      mbin: W0,
      mrel: M0,
      minner: Z
    },
    mpunct: {
      mord: Z,
      mop: Z,
      mrel: M0,
      mopen: Z,
      mclose: Z,
      mpunct: Z,
      minner: Z
    },
    minner: {
      mord: Z,
      mop: Z,
      mbin: W0,
      mrel: M0,
      mopen: Z,
      mpunct: Z,
      minner: Z
    }
  },
  xa: any = {
    mord: {
      mop: Z
    },
    mop: {
      mord: Z,
      mop: Z
    },
    mbin: {},
    mrel: {},
    mopen: {},
    mclose: {
      mop: Z
    },
    mpunct: {},
    minner: {
      mop: Z
    }
  },
  Pr: any = {},
  Re: any = {},
  Ie: any = {};
function B(this: any, r: any): any {
  for (var {
      type: e,
      names: t,
      props: a,
      handler: n,
      htmlBuilder: l,
      mathmlBuilder: u
    }: any = r, h: any = {
      type: e,
      numArgs: (a as any).numArgs,
      argTypes: (a as any).argTypes,
      allowedInArgument: !!(a as any).allowedInArgument,
      allowedInText: !!(a as any).allowedInText,
      allowedInMath: ((a as any).allowedInMath as any) === (void 0 as any) ? !0 : (a as any).allowedInMath,
      numOptionalArgs: (a as any).numOptionalArgs || 0,
      infix: !!(a as any).infix,
      primitive: !!(a as any).primitive,
      handler: n
    }, c: any = 0; (c as any) < ((t as any).length as any); ++c) (Pr as any)[(t as any)[c]] = h;
  e && (l && ((Re as any)[e] = l), u && ((Ie as any)[e] = u));
}
function $0(this: any, r: any): any {
  var {
    type: e,
    htmlBuilder: t,
    mathmlBuilder: a
  }: any = r;
  (B as any)({
    type: e,
    names: [],
    props: {
      numArgs: 0
    },
    handler(): any {
      throw new (Error as any)("Should never be called.");
    },
    htmlBuilder: t,
    mathmlBuilder: a
  });
}
var Ne: any = function (this: any, e: any): any {
    return ((e as any).type as any) === ("ordgroup" as any) && (((e as any).body as any).length as any) === (1 as any) ? ((e as any).body as any)[0] : e;
  },
  Q: any = function (this: any, e: any): any {
    return ((e as any).type as any) === ("ordgroup" as any) ? (e as any).body : [e];
  },
  wa: any = new (Set as any)(["leftmost", "mbin", "mopen", "mrel", "mop", "mpunct"]),
  ka: any = new (Set as any)(["rightmost", "mrel", "mclose", "mpunct"]),
  Sa: any = {
    display: (N as any).DISPLAY,
    text: (N as any).TEXT,
    script: (N as any).SCRIPT,
    scriptscript: (N as any).SCRIPTSCRIPT
  },
  za: any = {
    mord: "mord",
    mop: "mop",
    mbin: "mbin",
    mrel: "mrel",
    mopen: "mopen",
    mclose: "mclose",
    mpunct: "mpunct",
    minner: "minner"
  },
  a0: any = function (this: any, e: any, t: any, a: any, n: any): any {
    (n as any) === (void 0 as any) && (n = [null, null]);
    for (var l: any = [], u: any = 0; (u as any) < ((e as any).length as any); u++) {
      var h: any = (U as any)((e as any)[u], t);
      if (h instanceof ae) {
        var c: any = (h as any).children;
        ((l as any).push as any)(...c);
      } else ((l as any).push as any)(h);
    }
    if ((Or as any)(l), !a) return l;
    var v: any = t;
    if (((e as any).length as any) === (1 as any)) {
      var g: any = (e as any)[0];
      ((g as any).type as any) === ("sizing" as any) ? v = ((t as any).havingSize as any)((g as any).size) : ((g as any).type as any) === ("styling" as any) && (v = ((t as any).havingStyle as any)((Sa as any)[(g as any).style]));
    }
    var b: any = (k as any)([(n as any)[0] || "leftmost"], [], t),
      y: any = (k as any)([(n as any)[1] || "rightmost"], [], t),
      x: any = (a as any) === ("root" as any);
    return (yt as any)(l, (M: any, T: any): any => {
      var C: any = ((T as any).classes as any)[0],
        q: any = ((M as any).classes as any)[0];
      (C as any) === ("mbin" as any) && ((ka as any).has as any)(q) ? ((T as any).classes as any)[0] = "mord" : (q as any) === ("mbin" as any) && ((wa as any).has as any)(C) && (((M as any).classes as any)[0] = "mord");
    }, {
      node: b
    }, y, x), (yt as any)(l, (M: any, T: any): any => {
      var C: any,
        q: any,
        I: any = (wt as any)(T),
        O: any = (wt as any)(M),
        F: any = I && O ? ((M as any).hasClass as any)("mtight") ? ((C = (xa as any)[I]) as any) == (null as any) ? void 0 : (C as any)[O] : ((q = (ya as any)[I]) as any) == (null as any) ? void 0 : (q as any)[O] : null;
      if (F) return (Hr as any)(F, v);
    }, {
      node: b
    }, y, x), l;
  },
  yt: any = function (this: any, e: any, t: any, a: any, n: any, l: any): any {
    n && ((e as any).push as any)(n);
    for (var u: any = 0; (u as any) < ((e as any).length as any); u++) {
      var h: any = (e as any)[u],
        c: any = (Gr as any)(h);
      if (c) {
        (yt as any)((c as any).children, t, a, null, l);
        continue;
      }
      var v: any = !((h as any).hasClass as any)("mspace");
      if (v) {
        var g: any = (t as any)(h, (a as any).node);
        g && ((a as any).insertAfter ? ((a as any).insertAfter as any)(g) : (((e as any).unshift as any)(g), u++));
      }
      v ? (a as any).node = h : l && ((h as any).hasClass as any)("newline") && ((a as any).node = (k as any)(["leftmost"])), (a as any).insertAfter = (((b: any): any => (y: any): any => {
        ((e as any).splice as any)((b as any) + (1 as any), 0, y), u++;
      }) as any)(u);
    }
    n && ((e as any).pop as any)();
  },
  Gr: any = function (this: any, e: any): any {
    return e instanceof ae || e instanceof Oe || e instanceof ne && ((e as any).hasClass as any)("enclosing") ? e : null;
  },
  xt: any = function (this: any, e: any, t: any): any {
    var a: any = (Gr as any)(e);
    if (a) {
      var n: any = (a as any).children;
      if ((n as any).length) {
        if ((t as any) === ("right" as any)) return (xt as any)((n as any)[((n as any).length as any) - (1 as any)], "right");
        if ((t as any) === ("left" as any)) return (xt as any)((n as any)[0], "left");
      }
    }
    return e;
  },
  wt: any = function (this: any, e: any, t: any): any {
    if (!e) return null;
    t && (e = (xt as any)(e, t));
    var a: any = ((e as any).classes as any)[0];
    return (za as any)[a] || null;
  },
  me: any = function (this: any, e: any, t: any): any {
    var a: any = ((["nulldelimiter"] as any).concat as any)(((e as any).baseSizingClasses as any)());
    return (k as any)(((t as any).concat as any)(a));
  },
  U: any = function (this: any, e: any, t: any, a: any): any {
    if (!e) return (k as any)();
    if ((Re as any)[(e as any).type]) {
      var n: any = ((Re as any)[(e as any).type] as any)(e, t);
      if (a && ((t as any).size as any) !== ((a as any).size as any)) {
        n = (k as any)(((t as any).sizingClasses as any)(a), [n], t);
        var l: any = ((t as any).sizeMultiplier as any) / ((a as any).sizeMultiplier as any);
        (n as any).height *= l, (n as any).depth *= l;
      }
      return n;
    } else throw new (S as any)((("Got group of unknown type: '" as any) + ((e as any).type as any) as any) + ("'" as any));
  };
function Ae(this: any, r: any, e: any): any {
  var t: any = (k as any)(["base"], r, e),
    a: any = (k as any)(["strut"]);
  return ((a as any).style as any).height = (A as any)(((t as any).height as any) + ((t as any).depth as any)), (t as any).depth && (((a as any).style as any).verticalAlign = (A as any)(-(t as any).depth)), (((t as any).children as any).unshift as any)(a), t;
}
function kt(this: any, r: any, e: any): any {
  var t: any = null;
  ((r as any).length as any) === (1 as any) && (((r as any)[0] as any).type as any) === ("tag" as any) && (t = ((r as any)[0] as any).tag, r = ((r as any)[0] as any).body);
  var a: any = (a0 as any)(r, e, "root"),
    n: any;
  ((a as any).length as any) === (2 as any) && (((a as any)[1] as any).hasClass as any)("tag") && (n = ((a as any).pop as any)());
  for (var l: any = [], u: any = [], h: any = 0; (h as any) < ((a as any).length as any); h++) if (((u as any).push as any)((a as any)[h]), (((a as any)[h] as any).hasClass as any)("mbin") || (((a as any)[h] as any).hasClass as any)("mrel") || (((a as any)[h] as any).hasClass as any)("allowbreak")) {
    for (var c: any = !1; (h as any) < (((a as any).length as any) - (1 as any) as any) && (((a as any)[(h as any) + (1 as any)] as any).hasClass as any)("mspace") && !(((a as any)[(h as any) + (1 as any)] as any).hasClass as any)("newline");) h++, ((u as any).push as any)((a as any)[h]), (((a as any)[h] as any).hasClass as any)("nobreak") && (c = !0);
    c || (((l as any).push as any)((Ae as any)(u, e)), u = []);
  } else (((a as any)[h] as any).hasClass as any)("newline") && (((u as any).pop as any)(), ((u as any).length as any) > (0 as any) && (((l as any).push as any)((Ae as any)(u, e)), u = []), ((l as any).push as any)((a as any)[h]));
  ((u as any).length as any) > (0 as any) && ((l as any).push as any)((Ae as any)(u, e));
  var v: any;
  t ? (v = (Ae as any)((a0 as any)(t, e, !0), e), (v as any).classes = ["tag"], ((l as any).push as any)(v)) : n && ((l as any).push as any)(n);
  var g: any = (k as any)(["katex-html"], l);
  if (((g as any).setAttribute as any)("aria-hidden", "true"), v) {
    var b: any = ((v as any).children as any)[0];
    ((b as any).style as any).height = (A as any)(((g as any).height as any) + ((g as any).depth as any)), (g as any).depth && (((b as any).style as any).verticalAlign = (A as any)(-(g as any).depth));
  }
  return g;
}
function Ur(this: any, r: any): any {
  return new (ae as any)(r);
}
class z {
  declare classes: any;
  declare children: any;
  declare attributes: any;
  declare type: any;
  [key: string]: any;
  constructor(e: any, t: any, a: any) {
    (this as any).type = e, (this as any).attributes = {}, (this as any).children = t || [], (this as any).classes = a || [];
  }
  setAttribute(e: any, t: any): any {
    ((this as any).attributes as any)[e] = t;
  }
  getAttribute(e: any): any {
    return ((this as any).attributes as any)[e];
  }
  toNode(): any {
    var t: any;
    var e: any = ((document as any).createElementNS as any)("http://www.w3.org/1998/Math/MathML", (this as any).type);
    for (t in (this as any).attributes) ((((Object as any).prototype as any).hasOwnProperty as any).call as any)((this as any).attributes, t) && ((e as any).setAttribute as any)(t, ((this as any).attributes as any)[t]);
    (((this as any).classes as any).length as any) > (0 as any) && ((e as any).className = (L0 as any)((this as any).classes));
    for (var a: any = 0; (a as any) < (((this as any).children as any).length as any); a++) if (((this as any).children as any)[a] instanceof _ && ((this as any).children as any)[(a as any) + (1 as any)] instanceof _) {
      for (var n: any = (((((this as any).children as any)[a] as any).toText as any)() as any) + (((((this as any).children as any)[++a] as any).toText as any)() as any); ((this as any).children as any)[(a as any) + (1 as any)] instanceof _;) n += ((((this as any).children as any)[++a] as any).toText as any)();
      ((e as any).appendChild as any)(((new (_ as any)(n) as any).toNode as any)());
    } else ((e as any).appendChild as any)(((((this as any).children as any)[a] as any).toNode as any)());
    return e;
  }
  toMarkup(): any {
    var t: any;
    var e: any = ("<" as any) + ((this as any).type as any);
    for (t in (this as any).attributes) ((((Object as any).prototype as any).hasOwnProperty as any).call as any)((this as any).attributes, t) && (e += ((" " as any) + (t as any) as any) + ('="' as any), e += (n0 as any)(((this as any).attributes as any)[t]), e += '"');
    (((this as any).classes as any).length as any) > (0 as any) && (e += ((' class ="' as any) + ((n0 as any)((L0 as any)((this as any).classes)) as any) as any) + ('"' as any)), e += ">";
    for (var a: any = 0; (a as any) < (((this as any).children as any).length as any); a++) e += ((((this as any).children as any)[a] as any).toMarkup as any)();
    return e += (("</" as any) + ((this as any).type as any) as any) + (">" as any), e;
  }
  toText(): any {
    return (((((this as any).children as any).map as any)((e: any): any => ((e as any).toText as any)()) as any).join as any)("");
  }
}
class _ {
  declare text: any;
  [key: string]: any;
  constructor(e: any) {
    (this as any).text = e;
  }
  toNode(): any {
    return ((document as any).createTextNode as any)((this as any).text);
  }
  toMarkup(): any {
    return (n0 as any)(((this as any).toText as any)());
  }
  toText(): any {
    return (this as any).text;
  }
}
class Vr {
  declare character: any;
  declare width: any;
  [key: string]: any;
  constructor(e: any) {
    (this as any).width = e, (e as any) >= (.05555 as any) && (e as any) <= (.05556 as any) ? (this as any).character = "\u200A" : (e as any) >= (.1666 as any) && (e as any) <= (.1667 as any) ? (this as any).character = "\u2009" : (e as any) >= (.2222 as any) && (e as any) <= (.2223 as any) ? (this as any).character = "\u2005" : (e as any) >= (.2777 as any) && (e as any) <= (.2778 as any) ? (this as any).character = "\u2005\u200A" : (e as any) >= (-.05556 as any) && (e as any) <= (-.05555 as any) ? (this as any).character = "\u200A\u2063" : (e as any) >= (-.1667 as any) && (e as any) <= (-.1666 as any) ? (this as any).character = "\u2009\u2063" : (e as any) >= (-.2223 as any) && (e as any) <= (-.2222 as any) ? (this as any).character = "\u205F\u2063" : (e as any) >= (-.2778 as any) && (e as any) <= (-.2777 as any) ? (this as any).character = "\u2005\u2063" : (this as any).character = null;
  }
  toNode(): any {
    if ((this as any).character) return ((document as any).createTextNode as any)((this as any).character);
    var e: any = ((document as any).createElementNS as any)("http://www.w3.org/1998/Math/MathML", "mspace");
    return ((e as any).setAttribute as any)("width", (A as any)((this as any).width)), e;
  }
  toMarkup(): any {
    return (this as any).character ? (("<mtext>" as any) + ((this as any).character as any) as any) + ("</mtext>" as any) : (('<mspace width="' as any) + ((A as any)((this as any).width) as any) as any) + ('"/>' as any);
  }
  toText(): any {
    return (this as any).character ? (this as any).character : " ";
  }
}
var Aa: any = new (Set as any)(["\\imath", "\\jmath"]),
  Ma: any = new (Set as any)(["mrow", "mtable"]),
  b0: any = function (this: any, e: any, t: any, a: any): any {
    return (($ as any)[t] as any)[e] && ((($ as any)[t] as any)[e] as any).replace && (((e as any).charCodeAt as any)(0) as any) !== (55349 as any) && !(((Nr as any).hasOwnProperty as any)(e) && a && ((a as any).fontFamily && ((((a as any).fontFamily as any).slice as any)(4, 6) as any) === ("tt" as any) || (a as any).font && ((((a as any).font as any).slice as any)(4, 6) as any) === ("tt" as any))) && (e = ((($ as any)[t] as any)[e] as any).replace), new (_ as any)(e);
  },
  Rt: any = function (this: any, e: any): any {
    return ((e as any).length as any) === (1 as any) ? (e as any)[0] : new (z as any)("mrow", e);
  },
  It: any = function (this: any, e: any, t: any): any {
    if (((t as any).fontFamily as any) === ("texttt" as any)) return "monospace";
    if (((t as any).fontFamily as any) === ("textsf" as any)) return ((t as any).fontShape as any) === ("textit" as any) && ((t as any).fontWeight as any) === ("textbf" as any) ? "sans-serif-bold-italic" : ((t as any).fontShape as any) === ("textit" as any) ? "sans-serif-italic" : ((t as any).fontWeight as any) === ("textbf" as any) ? "bold-sans-serif" : "sans-serif";
    if (((t as any).fontShape as any) === ("textit" as any) && ((t as any).fontWeight as any) === ("textbf" as any)) return "bold-italic";
    if (((t as any).fontShape as any) === ("textit" as any)) return "italic";
    if (((t as any).fontWeight as any) === ("textbf" as any)) return "bold";
    var a: any = (t as any).font;
    if (!a || (a as any) === ("mathnormal" as any)) return null;
    var n: any = (e as any).mode;
    if ((a as any) === ("mathit" as any)) return "italic";
    if ((a as any) === ("boldsymbol" as any)) return ((e as any).type as any) === ("textord" as any) ? "bold" : "bold-italic";
    if ((a as any) === ("mathbf" as any)) return "bold";
    if ((a as any) === ("mathbb" as any)) return "double-struck";
    if ((a as any) === ("mathsfit" as any)) return "sans-serif-italic";
    if ((a as any) === ("mathfrak" as any)) return "fraktur";
    if ((a as any) === ("mathscr" as any) || (a as any) === ("mathcal" as any)) return "script";
    if ((a as any) === ("mathsf" as any)) return "sans-serif";
    if ((a as any) === ("mathtt" as any)) return "monospace";
    var l: any = (e as any).text;
    if (((Aa as any).has as any)(l)) return null;
    if ((($ as any)[n] as any)[l]) {
      var u: any = ((($ as any)[n] as any)[l] as any).replace;
      u && (l = u);
    }
    var h: any = ((bt as any)[a] as any).fontName;
    return (Ct as any)(l, h, n) ? ((bt as any)[a] as any).variant : null;
  };
function rt(this: any, r: any): any {
  if (!r) return !1;
  if (((r as any).type as any) === ("mi" as any) && (((r as any).children as any).length as any) === (1 as any)) {
    var e: any = ((r as any).children as any)[0];
    return e instanceof _ && ((e as any).text as any) === ("." as any);
  } else if (((r as any).type as any) === ("mo" as any) && (((r as any).children as any).length as any) === (1 as any) && (((r as any).getAttribute as any)("separator") as any) === ("true" as any) && (((r as any).getAttribute as any)("lspace") as any) === ("0em" as any) && (((r as any).getAttribute as any)("rspace") as any) === ("0em" as any)) {
    var t: any = ((r as any).children as any)[0];
    return t instanceof _ && ((t as any).text as any) === ("," as any);
  } else return !1;
}
var p0: any = function (this: any, e: any, t: any, a: any): any {
    if (((e as any).length as any) === (1 as any)) {
      var n: any = (Y as any)((e as any)[0], t);
      return a && n instanceof z && ((n as any).type as any) === ("mo" as any) && (((n as any).setAttribute as any)("lspace", "0em"), ((n as any).setAttribute as any)("rspace", "0em")), [n];
    }
    for (var l: any = [], u: any, h: any = 0; (h as any) < ((e as any).length as any); h++) {
      var c: any = (Y as any)((e as any)[h], t);
      if (c instanceof z && u instanceof z) {
        if (((c as any).type as any) === ("mtext" as any) && ((u as any).type as any) === ("mtext" as any) && (((c as any).getAttribute as any)("mathvariant") as any) === (((u as any).getAttribute as any)("mathvariant") as any)) {
          (((u as any).children as any).push as any)(...(c as any).children);
          continue;
        } else if (((c as any).type as any) === ("mn" as any) && ((u as any).type as any) === ("mn" as any)) {
          (((u as any).children as any).push as any)(...(c as any).children);
          continue;
        } else if ((rt as any)(c) && ((u as any).type as any) === ("mn" as any)) {
          (((u as any).children as any).push as any)(...(c as any).children);
          continue;
        } else if (((c as any).type as any) === ("mn" as any) && (rt as any)(u)) (c as any).children = [...(u as any).children, ...(c as any).children], ((l as any).pop as any)();else if ((((c as any).type as any) === ("msup" as any) || ((c as any).type as any) === ("msub" as any)) && (((c as any).children as any).length as any) >= (1 as any) && (((u as any).type as any) === ("mn" as any) || (rt as any)(u))) {
          var v: any = ((c as any).children as any)[0];
          v instanceof z && ((v as any).type as any) === ("mn" as any) && ((v as any).children = [...(u as any).children, ...(v as any).children], ((l as any).pop as any)());
        } else if (((u as any).type as any) === ("mi" as any) && (((u as any).children as any).length as any) === (1 as any)) {
          var g: any = ((u as any).children as any)[0];
          if (g instanceof _ && ((g as any).text as any) === ("\u0338" as any) && (((c as any).type as any) === ("mo" as any) || ((c as any).type as any) === ("mi" as any) || ((c as any).type as any) === ("mn" as any))) {
            var b: any = ((c as any).children as any)[0];
            b instanceof _ && (((b as any).text as any).length as any) > (0 as any) && ((b as any).text = (((((b as any).text as any).slice as any)(0, 1) as any) + ("\u0338" as any) as any) + ((((b as any).text as any).slice as any)(1) as any), ((l as any).pop as any)());
          }
        }
      }
      ((l as any).push as any)(c), u = c;
    }
    return l;
  },
  U0: any = function (this: any, e: any, t: any, a: any): any {
    return (Rt as any)((p0 as any)(e, t, a));
  },
  Y: any = function (this: any, e: any, t: any): any {
    if (!e) return new (z as any)("mrow");
    if ((Ie as any)[(e as any).type]) {
      var a: any = ((Ie as any)[(e as any).type] as any)(e, t);
      return a;
    } else throw new (S as any)((("Got group of unknown type: '" as any) + ((e as any).type as any) as any) + ("'" as any));
  };
function ir(this: any, r: any, e: any, t: any, a: any, n: any): any {
  var l: any = (p0 as any)(r, t),
    u: any;
  ((l as any).length as any) === (1 as any) && (l as any)[0] instanceof z && ((Ma as any).has as any)(((l as any)[0] as any).type) ? u = (l as any)[0] : u = new (z as any)("mrow", l);
  var h: any = new (z as any)("annotation", [new (_ as any)(e)]);
  ((h as any).setAttribute as any)("encoding", "application/x-tex");
  var c: any = new (z as any)("semantics", [u, h]),
    v: any = new (z as any)("math", [c]);
  ((v as any).setAttribute as any)("xmlns", "http://www.w3.org/1998/Math/MathML"), a && ((v as any).setAttribute as any)("display", "block");
  var g: any = n ? "katex" : "katex-mathml";
  return (k as any)([g], [v]);
}
var Ta: any = [[1, 1, 1], [2, 1, 1], [3, 1, 1], [4, 2, 1], [5, 2, 1], [6, 3, 1], [7, 4, 2], [8, 6, 3], [9, 7, 6], [10, 8, 7], [11, 10, 9]],
  lr: any = [.5, .6, .7, .8, .9, 1, 1.2, 1.44, 1.728, 2.074, 2.488],
  sr: any = function (this: any, e: any, t: any): any {
    return ((t as any).size as any) < (2 as any) ? e : ((Ta as any)[(e as any) - (1 as any)] as any)[((t as any).size as any) - (1 as any)];
  };
class T0 {
  declare _fontMetrics: any;
  declare minRuleThickness: any;
  declare maxSize: any;
  declare sizeMultiplier: any;
  declare fontShape: any;
  declare fontWeight: any;
  declare fontFamily: any;
  declare font: any;
  declare phantom: any;
  declare textSize: any;
  declare size: any;
  declare color: any;
  declare style: any;
  [key: string]: any;
  constructor(e: any) {
    (this as any).style = (e as any).style, (this as any).color = (e as any).color, (this as any).size = (e as any).size || (T0 as any).BASESIZE, (this as any).textSize = (e as any).textSize || (this as any).size, (this as any).phantom = !!(e as any).phantom, (this as any).font = (e as any).font || "", (this as any).fontFamily = (e as any).fontFamily || "", (this as any).fontWeight = (e as any).fontWeight || "", (this as any).fontShape = (e as any).fontShape || "", (this as any).sizeMultiplier = (lr as any)[((this as any).size as any) - (1 as any)], (this as any).maxSize = (e as any).maxSize, (this as any).minRuleThickness = (e as any).minRuleThickness, (this as any)._fontMetrics = void 0;
  }
  extend(e: any): any {
    var t: any = {
      style: (this as any).style,
      size: (this as any).size,
      textSize: (this as any).textSize,
      color: (this as any).color,
      phantom: (this as any).phantom,
      font: (this as any).font,
      fontFamily: (this as any).fontFamily,
      fontWeight: (this as any).fontWeight,
      fontShape: (this as any).fontShape,
      maxSize: (this as any).maxSize,
      minRuleThickness: (this as any).minRuleThickness
    };
    return ((Object as any).assign as any)(t, e), new (T0 as any)(t);
  }
  havingStyle(e: any): any {
    return ((this as any).style as any) === (e as any) ? this : ((this as any).extend as any)({
      style: e,
      size: (sr as any)((this as any).textSize, e)
    });
  }
  havingCrampedStyle(): any {
    return ((this as any).havingStyle as any)((((this as any).style as any).cramp as any)());
  }
  havingSize(e: any): any {
    return ((this as any).size as any) === (e as any) && ((this as any).textSize as any) === (e as any) ? this : ((this as any).extend as any)({
      style: (((this as any).style as any).text as any)(),
      size: e,
      textSize: e,
      sizeMultiplier: (lr as any)[(e as any) - (1 as any)]
    });
  }
  havingBaseStyle(e: any): any {
    e = e || (((this as any).style as any).text as any)();
    var t: any = (sr as any)((T0 as any).BASESIZE, e);
    return ((this as any).size as any) === (t as any) && ((this as any).textSize as any) === ((T0 as any).BASESIZE as any) && ((this as any).style as any) === (e as any) ? this : ((this as any).extend as any)({
      style: e,
      size: t
    });
  }
  havingBaseSizing(): any {
    var e: any;
    switch (((this as any).style as any).id) {
      case 4:
      case 5:
        e = 3;
        break;
      case 6:
      case 7:
        e = 1;
        break;
      default:
        e = 6;
    }
    return ((this as any).extend as any)({
      style: (((this as any).style as any).text as any)(),
      size: e
    });
  }
  withColor(e: any): any {
    return ((this as any).extend as any)({
      color: e
    });
  }
  withPhantom(): any {
    return ((this as any).extend as any)({
      phantom: !0
    });
  }
  withFont(e: any): any {
    return ((this as any).extend as any)({
      font: e
    });
  }
  withTextFontFamily(e: any): any {
    return ((this as any).extend as any)({
      fontFamily: e,
      font: ""
    });
  }
  withTextFontWeight(e: any): any {
    return ((this as any).extend as any)({
      fontWeight: e,
      font: ""
    });
  }
  withTextFontShape(e: any): any {
    return ((this as any).extend as any)({
      fontShape: e,
      font: ""
    });
  }
  sizingClasses(e: any): any {
    return ((e as any).size as any) !== ((this as any).size as any) ? ["sizing", ("reset-size" as any) + ((e as any).size as any), ("size" as any) + ((this as any).size as any)] : [];
  }
  baseSizingClasses(): any {
    return ((this as any).size as any) !== ((T0 as any).BASESIZE as any) ? ["sizing", ("reset-size" as any) + ((this as any).size as any), ("size" as any) + ((T0 as any).BASESIZE as any)] : [];
  }
  fontMetrics(): any {
    return (this as any)._fontMetrics || ((this as any)._fontMetrics = (ma as any)((this as any).size)), (this as any)._fontMetrics;
  }
  getColor(): any {
    return (this as any).phantom ? "transparent" : (this as any).color;
  }
}
(T0 as any).BASESIZE = 6;
var Xr: any = function (this: any, e: any): any {
    return new (T0 as any)({
      style: (e as any).displayMode ? (N as any).DISPLAY : (N as any).TEXT,
      maxSize: (e as any).maxSize,
      minRuleThickness: (e as any).minRuleThickness
    });
  },
  Yr: any = function (this: any, e: any, t: any): any {
    if ((t as any).displayMode) {
      var a: any = ["katex-display"];
      (t as any).leqno && ((a as any).push as any)("leqno"), (t as any).fleqn && ((a as any).push as any)("fleqn"), e = (k as any)(a, [e]);
    }
    return e;
  },
  Ba: any = function (this: any, e: any, t: any, a: any): any {
    var n: any = (Xr as any)(a),
      l: any;
    if (((a as any).output as any) === ("mathml" as any)) return (ir as any)(e, t, n, (a as any).displayMode, !0);
    if (((a as any).output as any) === ("html" as any)) {
      var u: any = (kt as any)(e, n);
      l = (k as any)(["katex"], [u]);
    } else {
      var h: any = (ir as any)(e, t, n, (a as any).displayMode, !1),
        c: any = (kt as any)(e, n);
      l = (k as any)(["katex"], [h, c]);
    }
    return (Yr as any)(l, a);
  },
  Da: any = function (this: any, e: any, t: any, a: any): any {
    var n: any = (Xr as any)(a),
      l: any = (kt as any)(e, n),
      u: any = (k as any)(["katex"], [l]);
    return (Yr as any)(u, a);
  },
  Ca: any = {
    widehat: "^",
    widecheck: "\u02C7",
    widetilde: "~",
    utilde: "~",
    overleftarrow: "\u2190",
    underleftarrow: "\u2190",
    xleftarrow: "\u2190",
    overrightarrow: "\u2192",
    underrightarrow: "\u2192",
    xrightarrow: "\u2192",
    underbrace: "\u23DF",
    overbrace: "\u23DE",
    underbracket: "\u23B5",
    overbracket: "\u23B4",
    overgroup: "\u23E0",
    undergroup: "\u23E1",
    overleftrightarrow: "\u2194",
    underleftrightarrow: "\u2194",
    xleftrightarrow: "\u2194",
    Overrightarrow: "\u21D2",
    xRightarrow: "\u21D2",
    overleftharpoon: "\u21BC",
    xleftharpoonup: "\u21BC",
    overrightharpoon: "\u21C0",
    xrightharpoonup: "\u21C0",
    xLeftarrow: "\u21D0",
    xLeftrightarrow: "\u21D4",
    xhookleftarrow: "\u21A9",
    xhookrightarrow: "\u21AA",
    xmapsto: "\u21A6",
    xrightharpoondown: "\u21C1",
    xleftharpoondown: "\u21BD",
    xrightleftharpoons: "\u21CC",
    xleftrightharpoons: "\u21CB",
    xtwoheadleftarrow: "\u219E",
    xtwoheadrightarrow: "\u21A0",
    xlongequal: "=",
    xtofrom: "\u21C4",
    xrightleftarrows: "\u21C4",
    xrightequilibrium: "\u21CC",
    xleftequilibrium: "\u21CB",
    "\\cdrightarrow": "\u2192",
    "\\cdleftarrow": "\u2190",
    "\\cdlongequal": "="
  },
  Le: any = function (this: any, e: any): any {
    var t: any = new (z as any)("mo", [new (_ as any)((Ca as any)[((e as any).replace as any)(/^\\/, "")])]);
    return ((t as any).setAttribute as any)("stretchy", "true"), t;
  },
  qa: any = {
    overrightarrow: [["rightarrow"], .888, 522, "xMaxYMin"],
    overleftarrow: [["leftarrow"], .888, 522, "xMinYMin"],
    underrightarrow: [["rightarrow"], .888, 522, "xMaxYMin"],
    underleftarrow: [["leftarrow"], .888, 522, "xMinYMin"],
    xrightarrow: [["rightarrow"], 1.469, 522, "xMaxYMin"],
    "\\cdrightarrow": [["rightarrow"], 3, 522, "xMaxYMin"],
    xleftarrow: [["leftarrow"], 1.469, 522, "xMinYMin"],
    "\\cdleftarrow": [["leftarrow"], 3, 522, "xMinYMin"],
    Overrightarrow: [["doublerightarrow"], .888, 560, "xMaxYMin"],
    xRightarrow: [["doublerightarrow"], 1.526, 560, "xMaxYMin"],
    xLeftarrow: [["doubleleftarrow"], 1.526, 560, "xMinYMin"],
    overleftharpoon: [["leftharpoon"], .888, 522, "xMinYMin"],
    xleftharpoonup: [["leftharpoon"], .888, 522, "xMinYMin"],
    xleftharpoondown: [["leftharpoondown"], .888, 522, "xMinYMin"],
    overrightharpoon: [["rightharpoon"], .888, 522, "xMaxYMin"],
    xrightharpoonup: [["rightharpoon"], .888, 522, "xMaxYMin"],
    xrightharpoondown: [["rightharpoondown"], .888, 522, "xMaxYMin"],
    xlongequal: [["longequal"], .888, 334, "xMinYMin"],
    "\\cdlongequal": [["longequal"], 3, 334, "xMinYMin"],
    xtwoheadleftarrow: [["twoheadleftarrow"], .888, 334, "xMinYMin"],
    xtwoheadrightarrow: [["twoheadrightarrow"], .888, 334, "xMaxYMin"],
    overleftrightarrow: [["leftarrow", "rightarrow"], .888, 522],
    overbrace: [["leftbrace", "midbrace", "rightbrace"], 1.6, 548],
    underbrace: [["leftbraceunder", "midbraceunder", "rightbraceunder"], 1.6, 548],
    underleftrightarrow: [["leftarrow", "rightarrow"], .888, 522],
    xleftrightarrow: [["leftarrow", "rightarrow"], 1.75, 522],
    xLeftrightarrow: [["doubleleftarrow", "doublerightarrow"], 1.75, 560],
    xrightleftharpoons: [["leftharpoondownplus", "rightharpoonplus"], 1.75, 716],
    xleftrightharpoons: [["leftharpoonplus", "rightharpoondownplus"], 1.75, 716],
    xhookleftarrow: [["leftarrow", "righthook"], 1.08, 522],
    xhookrightarrow: [["lefthook", "rightarrow"], 1.08, 522],
    overlinesegment: [["leftlinesegment", "rightlinesegment"], .888, 522],
    underlinesegment: [["leftlinesegment", "rightlinesegment"], .888, 522],
    overbracket: [["leftbracketover", "rightbracketover"], 1.6, 440],
    underbracket: [["leftbracketunder", "rightbracketunder"], 1.6, 410],
    overgroup: [["leftgroup", "rightgroup"], .888, 342],
    undergroup: [["leftgroupunder", "rightgroupunder"], .888, 342],
    xmapsto: [["leftmapsto", "rightarrow"], 1.5, 522],
    xtofrom: [["leftToFrom", "rightToFrom"], 1.75, 528],
    xrightleftarrows: [["baraboveleftarrow", "rightarrowabovebar"], 1.75, 901],
    xrightequilibrium: [["baraboveshortleftharpoon", "rightharpoonaboveshortbar"], 1.75, 716],
    xleftequilibrium: [["shortbaraboveleftharpoon", "shortrightharpoonabovebar"], 1.75, 716]
  },
  Ea: any = new (Set as any)(["widehat", "widecheck", "widetilde", "utilde"]),
  Pe: any = function (this: any, e: any, t: any): any {
    function a(this: any): any {
      var h: any = 4e5,
        c: any = (((e as any).label as any).slice as any)(1);
      if (((Ea as any).has as any)(c)) {
        var v: any = e,
          g: any = (((v as any).base as any).type as any) === ("ordgroup" as any) ? (((v as any).base as any).body as any).length : 1,
          b: any,
          y: any,
          x: any;
        if ((g as any) > (5 as any)) (c as any) === ("widehat" as any) || (c as any) === ("widecheck" as any) ? (b = 420, h = 2364, x = .42, y = (c as any) + ("4" as any)) : (b = 312, h = 2340, x = .34, y = "tilde4");else {
          var M: any = ([1, 1, 2, 2, 3, 3] as any)[g];
          (c as any) === ("widehat" as any) || (c as any) === ("widecheck" as any) ? (h = ([0, 1062, 2364, 2364, 2364] as any)[M], b = ([0, 239, 300, 360, 420] as any)[M], x = ([0, .24, .3, .3, .36, .42] as any)[M], y = (c as any) + (M as any)) : (h = ([0, 600, 1033, 2339, 2340] as any)[M], b = ([0, 260, 286, 306, 312] as any)[M], x = ([0, .26, .286, .3, .306, .34] as any)[M], y = ("tilde" as any) + (M as any));
        }
        var T: any = new (P0 as any)(y),
          C: any = new (D0 as any)([T], {
            width: "100%",
            height: (A as any)(x),
            viewBox: ((("0 0 " as any) + (h as any) as any) + (" " as any) as any) + (b as any),
            preserveAspectRatio: "none"
          });
        return {
          span: (G0 as any)([], [C], t),
          minWidth: 0,
          height: x
        };
      } else {
        var q: any = [],
          I: any = (qa as any)[c],
          [O, F, V]: any = I,
          L: any = (V as any) / (1e3 as any),
          P: any = (O as any).length,
          W: any,
          X: any;
        if ((P as any) === (1 as any)) {
          var h0: any = (I as any)[3];
          W = ["hide-tail"], X = [h0];
        } else if ((P as any) === (2 as any)) W = ["halfarrow-left", "halfarrow-right"], X = ["xMinYMin", "xMaxYMin"];else if ((P as any) === (3 as any)) W = ["brace-left", "brace-center", "brace-right"], X = ["xMinYMin", "xMidYMin", "xMaxYMin"];else throw new (Error as any)(((`Correct katexImagesData or update code here to support
                    ` as any) + (P as any) as any) + (" children." as any));
        for (var i0: any = 0; (i0 as any) < (P as any); i0++) {
          var t0: any = new (P0 as any)((O as any)[i0]),
            X0: any = new (D0 as any)([t0], {
              width: "400em",
              height: (A as any)(L),
              viewBox: ((("0 0 " as any) + (h as any) as any) + (" " as any) as any) + (V as any),
              preserveAspectRatio: ((X as any)[i0] as any) + (" slice" as any)
            }),
            m0: any = (G0 as any)([(W as any)[i0]], [X0], t);
          if ((P as any) === (1 as any)) return {
            span: m0,
            minWidth: F,
            height: L
          };
          ((m0 as any).style as any).height = (A as any)(L), ((q as any).push as any)(m0);
        }
        return {
          span: (k as any)(["stretchy"], q, t),
          minWidth: F,
          height: L
        };
      }
    }
    var {
      span: n,
      minWidth: l,
      height: u
    }: any = (a as any)();
    return (n as any).height = u, ((n as any).style as any).height = (A as any)(u), (l as any) > (0 as any) && (((n as any).style as any).minWidth = (A as any)(l)), n;
  },
  Ra: any = function (this: any, e: any, t: any, a: any, n: any, l: any): any {
    var u: any,
      h: any = ((((e as any).height as any) + ((e as any).depth as any) as any) + (a as any) as any) + (n as any);
    if (((/fbox|color|angl/ as any).test as any)(t)) {
      if (u = (k as any)(["stretchy", t], [], l), (t as any) === ("fbox" as any)) {
        var c: any = (l as any).color && ((l as any).getColor as any)();
        c && (((u as any).style as any).borderColor = c);
      }
    } else {
      var v: any = [];
      ((/^[bx]cancel$/ as any).test as any)(t) && ((v as any).push as any)(new (pt as any)({
        x1: "0",
        y1: "0",
        x2: "100%",
        y2: "100%",
        "stroke-width": "0.046em"
      })), ((/^x?cancel$/ as any).test as any)(t) && ((v as any).push as any)(new (pt as any)({
        x1: "0",
        y1: "100%",
        x2: "100%",
        y2: "0",
        "stroke-width": "0.046em"
      }));
      var g: any = new (D0 as any)(v, {
        width: "100%",
        height: (A as any)(h)
      });
      u = (G0 as any)([], [g], l);
    }
    return (u as any).height = h, ((u as any).style as any).height = (A as any)(h), u;
  };
function H(this: any, r: any, e: any): any {
  if (!r || ((r as any).type as any) !== (e as any)) throw new (Error as any)(((("Expected node of type " as any) + (e as any) as any) + (", but got " as any) as any) + ((r ? ("node of type " as any) + ((r as any).type as any) : (String as any)(r)) as any));
  return r;
}
function Ge(this: any, r: any): any {
  var e: any = (Ue as any)(r);
  if (!e) throw new (Error as any)(("Expected node of symbol group type, but got " as any) + ((r ? ("node of type " as any) + ((r as any).type as any) : (String as any)(r)) as any));
  return e;
}
function Ue(this: any, r: any): any {
  return r && (((r as any).type as any) === ("atom" as any) || ((da as any).hasOwnProperty as any)((r as any).type)) ? r : null;
}
var Wr: any = (r: any): any => {
    if (r instanceof f0) return r;
    if ((oa as any)(r) && (((r as any).children as any).length as any) === (1 as any)) return (Wr as any)(((r as any).children as any)[0]);
  },
  Nt: any = (r: any, e: any): any => {
    var t: any, a: any, n: any;
    r && ((r as any).type as any) === ("supsub" as any) ? (a = (H as any)((r as any).base, "accent"), t = (a as any).base, (r as any).base = t, n = (ua as any)((U as any)(r, e)), (r as any).base = a) : (a = (H as any)(r, "accent"), t = (a as any).base);
    var l: any = (U as any)(t, ((e as any).havingCrampedStyle as any)()),
      u: any = (a as any).isShifty && (C0 as any)(t),
      h: any = 0;
    if (u) {
      var c: any, v: any;
      h = ((c = ((v = (Wr as any)(l)) as any) == (null as any) ? void 0 : (v as any).skew) as any) != (null as any) ? c : 0;
    }
    var g: any = ((a as any).label as any) === ("\\c" as any),
      b: any = g ? ((l as any).height as any) + ((l as any).depth as any) : ((Math as any).min as any)((l as any).height, (((e as any).fontMetrics as any)() as any).xHeight),
      y: any;
    if ((a as any).isStretchy) y = (Pe as any)(a, e), y = (G as any)({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: l
      }, {
        type: "elem",
        elem: y,
        wrapperClasses: ["svg-align"],
        wrapperStyle: (h as any) > (0 as any) ? {
          width: (("calc(100% - " as any) + ((A as any)((2 as any) * (h as any)) as any) as any) + (")" as any),
          marginLeft: (A as any)((2 as any) * (h as any))
        } : void 0
      }]
    });else {
      var x: any, M: any;
      ((a as any).label as any) === ("\\vec" as any) ? (x = (Lr as any)("vec", e), M = ((Fr as any).vec as any)[1]) : (x = (Fe as any)({
        mode: (a as any).mode,
        text: (a as any).label
      }, e, "textord"), x = (sa as any)(x), (x as any).italic = 0, M = (x as any).width, g && (b += (x as any).depth)), y = (k as any)(["accent-body"], [x]);
      var T: any = ((a as any).label as any) === ("\\textcircled" as any);
      T && ((((y as any).classes as any).push as any)("accent-full"), b = (l as any).height);
      var C: any = h;
      T || (C -= (M as any) / (2 as any)), ((y as any).style as any).left = (A as any)(C), ((a as any).label as any) === ("\\textcircled" as any) && (((y as any).style as any).top = ".2em"), y = (G as any)({
        positionType: "firstBaseline",
        children: [{
          type: "elem",
          elem: l
        }, {
          type: "kern",
          size: -b
        }, {
          type: "elem",
          elem: y
        }]
      });
    }
    var q: any = (k as any)(["mord", "accent"], [y], e);
    return n ? (((n as any).children as any)[0] = q, (n as any).height = ((Math as any).max as any)((q as any).height, (n as any).height), ((n as any).classes as any)[0] = "mord", n) : q;
  },
  $r: any = (r: any, e: any): any => {
    var t: any = (r as any).isStretchy ? (Le as any)((r as any).label) : new (z as any)("mo", [(b0 as any)((r as any).label, (r as any).mode)]),
      a: any = new (z as any)("mover", [(Y as any)((r as any).base, e), t]);
    return ((a as any).setAttribute as any)("accent", "true"), a;
  },
  Ia: any = new (RegExp as any)(((((["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring"] as any).map as any)((r: any): any => ("\\" as any) + (r as any)) as any).join as any)("|"));
(B as any)({
  type: "accent",
  names: ["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring", "\\widecheck", "\\widehat", "\\widetilde", "\\overrightarrow", "\\overleftarrow", "\\Overrightarrow", "\\overleftrightarrow", "\\overgroup", "\\overlinesegment", "\\overleftharpoon", "\\overrightharpoon"],
  props: {
    numArgs: 1
  },
  handler: (r: any, e: any): any => {
    var t: any = (Ne as any)((e as any)[0]),
      a: any = !((Ia as any).test as any)((r as any).funcName),
      n: any = !a || ((r as any).funcName as any) === ("\\widehat" as any) || ((r as any).funcName as any) === ("\\widetilde" as any) || ((r as any).funcName as any) === ("\\widecheck" as any);
    return {
      type: "accent",
      mode: ((r as any).parser as any).mode,
      label: (r as any).funcName,
      isStretchy: a,
      isShifty: n,
      base: t
    };
  },
  htmlBuilder: Nt,
  mathmlBuilder: $r
});
(B as any)({
  type: "accent",
  names: ["\\'", "\\`", "\\^", "\\~", "\\=", "\\u", "\\.", '\\"', "\\c", "\\r", "\\H", "\\v", "\\textcircled"],
  props: {
    numArgs: 1,
    allowedInText: !0,
    allowedInMath: !0,
    argTypes: ["primitive"]
  },
  handler: (r: any, e: any): any => {
    var t: any = (e as any)[0],
      a: any = ((r as any).parser as any).mode;
    return (a as any) === ("math" as any) && (((((r as any).parser as any).settings as any).reportNonstrict as any)("mathVsTextAccents", (("LaTeX's accent " as any) + ((r as any).funcName as any) as any) + (" works only in text mode" as any)), a = "text"), {
      type: "accent",
      mode: a,
      label: (r as any).funcName,
      isStretchy: !1,
      isShifty: !0,
      base: t
    };
  },
  htmlBuilder: Nt,
  mathmlBuilder: $r
});
(B as any)({
  type: "accentUnder",
  names: ["\\underleftarrow", "\\underrightarrow", "\\underleftrightarrow", "\\undergroup", "\\underlinesegment", "\\utilde"],
  props: {
    numArgs: 1
  },
  handler: (r: any, e: any): any => {
    var {
        parser: t,
        funcName: a
      }: any = r,
      n: any = (e as any)[0];
    return {
      type: "accentUnder",
      mode: (t as any).mode,
      label: a,
      base: n
    };
  },
  htmlBuilder: (r: any, e: any): any => {
    var t: any = (U as any)((r as any).base, e),
      a: any = (Pe as any)(r, e),
      n: any = ((r as any).label as any) === ("\\utilde" as any) ? .12 : 0,
      l: any = (G as any)({
        positionType: "top",
        positionData: (t as any).height,
        children: [{
          type: "elem",
          elem: a,
          wrapperClasses: ["svg-align"]
        }, {
          type: "kern",
          size: n
        }, {
          type: "elem",
          elem: t
        }]
      });
    return (k as any)(["mord", "accentunder"], [l], e);
  },
  mathmlBuilder: (r: any, e: any): any => {
    var t: any = (Le as any)((r as any).label),
      a: any = new (z as any)("munder", [(Y as any)((r as any).base, e), t]);
    return ((a as any).setAttribute as any)("accentunder", "true"), a;
  }
});
var Me: any = (r: any): any => {
  var e: any = new (z as any)("mpadded", r ? [r] : []);
  return ((e as any).setAttribute as any)("width", "+0.6em"), ((e as any).setAttribute as any)("lspace", "0.3em"), e;
};
(B as any)({
  type: "xArrow",
  names: ["\\xleftarrow", "\\xrightarrow", "\\xLeftarrow", "\\xRightarrow", "\\xleftrightarrow", "\\xLeftrightarrow", "\\xhookleftarrow", "\\xhookrightarrow", "\\xmapsto", "\\xrightharpoondown", "\\xrightharpoonup", "\\xleftharpoondown", "\\xleftharpoonup", "\\xrightleftharpoons", "\\xleftrightharpoons", "\\xlongequal", "\\xtwoheadrightarrow", "\\xtwoheadleftarrow", "\\xtofrom", "\\xrightleftarrows", "\\xrightequilibrium", "\\xleftequilibrium", "\\\\cdrightarrow", "\\\\cdleftarrow", "\\\\cdlongequal"],
  props: {
    numArgs: 1,
    numOptionalArgs: 1
  },
  handler(r: any, e: any, t: any): any {
    var {
      parser: a,
      funcName: n
    }: any = r;
    return {
      type: "xArrow",
      mode: (a as any).mode,
      label: n,
      body: (e as any)[0],
      below: (t as any)[0]
    };
  },
  htmlBuilder(r: any, e: any): any {
    var t: any = (e as any).style,
      a: any = ((e as any).havingStyle as any)(((t as any).sup as any)()),
      n: any = (re as any)((U as any)((r as any).body, a, e), e),
      l: any = ((((r as any).label as any).slice as any)(0, 2) as any) === ("\\x" as any) ? "x" : "cd";
    (((n as any).classes as any).push as any)((l as any) + ("-arrow-pad" as any));
    var u: any;
    (r as any).below && (a = ((e as any).havingStyle as any)(((t as any).sub as any)()), u = (re as any)((U as any)((r as any).below, a, e), e), (((u as any).classes as any).push as any)((l as any) + ("-arrow-pad" as any)));
    var h: any = (Pe as any)(r, e),
      c: any = (-(((e as any).fontMetrics as any)() as any).axisHeight as any) + ((.5 as any) * ((h as any).height as any) as any),
      v: any = ((-(((e as any).fontMetrics as any)() as any).axisHeight as any) - ((.5 as any) * ((h as any).height as any) as any) as any) - (.111 as any);
    (((n as any).depth as any) > (.25 as any) || ((r as any).label as any) === ("\\xleftequilibrium" as any)) && (v -= (n as any).depth);
    var g: any;
    if (u) {
      var b: any = (((-(((e as any).fontMetrics as any)() as any).axisHeight as any) + ((u as any).height as any) as any) + ((.5 as any) * ((h as any).height as any) as any) as any) + (.111 as any);
      g = (G as any)({
        positionType: "individualShift",
        children: [{
          type: "elem",
          elem: n,
          shift: v
        }, {
          type: "elem",
          elem: h,
          shift: c
        }, {
          type: "elem",
          elem: u,
          shift: b
        }]
      });
    } else g = (G as any)({
      positionType: "individualShift",
      children: [{
        type: "elem",
        elem: n,
        shift: v
      }, {
        type: "elem",
        elem: h,
        shift: c
      }]
    });
    return (((((((((g as any).children as any)[0] as any).children as any)[0] as any).children as any)[1] as any).classes as any).push as any)("svg-align"), (k as any)(["mrel", "x-arrow"], [g], e);
  },
  mathmlBuilder(r: any, e: any): any {
    var t: any = (Le as any)((r as any).label);
    ((t as any).setAttribute as any)("minsize", ((((r as any).label as any).charAt as any)(0) as any) === ("x" as any) ? "1.75em" : "3.0em");
    var a: any;
    if ((r as any).body) {
      var n: any = (Me as any)((Y as any)((r as any).body, e));
      if ((r as any).below) {
        var l: any = (Me as any)((Y as any)((r as any).below, e));
        a = new (z as any)("munderover", [t, l, n]);
      } else a = new (z as any)("mover", [t, n]);
    } else if ((r as any).below) {
      var u: any = (Me as any)((Y as any)((r as any).below, e));
      a = new (z as any)("munder", [t, u]);
    } else a = (Me as any)(), a = new (z as any)("mover", [t, a]);
    return a;
  }
});
function jr(this: any, r: any, e: any): any {
  var t: any = (a0 as any)((r as any).body, e, !0);
  return (k as any)([(r as any).mclass], t, e);
}
function Zr(this: any, r: any, e: any): any {
  var t: any,
    a: any = (p0 as any)((r as any).body, e);
  return ((r as any).mclass as any) === ("minner" as any) ? t = new (z as any)("mpadded", a) : ((r as any).mclass as any) === ("mord" as any) ? (r as any).isCharacterBox ? (t = (a as any)[0], (t as any).type = "mi") : t = new (z as any)("mi", a) : ((r as any).isCharacterBox ? (t = (a as any)[0], (t as any).type = "mo") : t = new (z as any)("mo", a), ((r as any).mclass as any) === ("mbin" as any) ? (((t as any).attributes as any).lspace = "0.22em", ((t as any).attributes as any).rspace = "0.22em") : ((r as any).mclass as any) === ("mpunct" as any) ? (((t as any).attributes as any).lspace = "0em", ((t as any).attributes as any).rspace = "0.17em") : ((r as any).mclass as any) === ("mopen" as any) || ((r as any).mclass as any) === ("mclose" as any) ? (((t as any).attributes as any).lspace = "0em", ((t as any).attributes as any).rspace = "0em") : ((r as any).mclass as any) === ("minner" as any) && (((t as any).attributes as any).lspace = "0.0556em", ((t as any).attributes as any).width = "+0.1111em")), t;
}
(B as any)({
  type: "mclass",
  names: ["\\mathord", "\\mathbin", "\\mathrel", "\\mathopen", "\\mathclose", "\\mathpunct", "\\mathinner"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler(r: any, e: any): any {
    var {
        parser: t,
        funcName: a
      }: any = r,
      n: any = (e as any)[0];
    return {
      type: "mclass",
      mode: (t as any).mode,
      mclass: ("m" as any) + (((a as any).slice as any)(5) as any),
      body: (Q as any)(n),
      isCharacterBox: (C0 as any)(n)
    };
  },
  htmlBuilder: jr,
  mathmlBuilder: Zr
});
var Ve: any = (r: any): any => {
  var e: any = ((r as any).type as any) === ("ordgroup" as any) && ((r as any).body as any).length ? ((r as any).body as any)[0] : r;
  return ((e as any).type as any) === ("atom" as any) && (((e as any).family as any) === ("bin" as any) || ((e as any).family as any) === ("rel" as any)) ? ("m" as any) + ((e as any).family as any) : "mord";
};
(B as any)({
  type: "mclass",
  names: ["\\@binrel"],
  props: {
    numArgs: 2
  },
  handler(r: any, e: any): any {
    var {
      parser: t
    }: any = r;
    return {
      type: "mclass",
      mode: (t as any).mode,
      mclass: (Ve as any)((e as any)[0]),
      body: (Q as any)((e as any)[1]),
      isCharacterBox: (C0 as any)((e as any)[1])
    };
  }
});
(B as any)({
  type: "mclass",
  names: ["\\stackrel", "\\overset", "\\underset"],
  props: {
    numArgs: 2
  },
  handler(r: any, e: any): any {
    var {
        parser: t,
        funcName: a
      }: any = r,
      n: any = (e as any)[1],
      l: any = (e as any)[0],
      u: any;
    (a as any) !== ("\\stackrel" as any) ? u = (Ve as any)(n) : u = "mrel";
    var h: any = {
        type: "op",
        mode: (n as any).mode,
        limits: !0,
        alwaysHandleSupSub: !0,
        parentIsSupSub: !1,
        symbol: !1,
        suppressBaseShift: (a as any) !== ("\\stackrel" as any),
        body: (Q as any)(n)
      },
      c: any = {
        type: "supsub",
        mode: (l as any).mode,
        base: h,
        sup: (a as any) === ("\\underset" as any) ? null : l,
        sub: (a as any) === ("\\underset" as any) ? l : null
      };
    return {
      type: "mclass",
      mode: (t as any).mode,
      mclass: u,
      body: [c],
      isCharacterBox: (C0 as any)(c)
    };
  },
  htmlBuilder: jr,
  mathmlBuilder: Zr
});
(B as any)({
  type: "pmb",
  names: ["\\pmb"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler(r: any, e: any): any {
    var {
      parser: t
    }: any = r;
    return {
      type: "pmb",
      mode: (t as any).mode,
      mclass: (Ve as any)((e as any)[0]),
      body: (Q as any)((e as any)[0])
    };
  },
  htmlBuilder(r: any, e: any): any {
    var t: any = (a0 as any)((r as any).body, e, !0),
      a: any = (k as any)([(r as any).mclass], t, e);
    return ((a as any).style as any).textShadow = "0.02em 0.01em 0.04px", a;
  },
  mathmlBuilder(r: any, e: any): any {
    var t: any = (p0 as any)((r as any).body, e),
      a: any = new (z as any)("mstyle", t);
    return ((a as any).setAttribute as any)("style", "text-shadow: 0.02em 0.01em 0.04px"), a;
  }
});
var Na: any = {
    ">": "\\\\cdrightarrow",
    "<": "\\\\cdleftarrow",
    "=": "\\\\cdlongequal",
    A: "\\uparrow",
    V: "\\downarrow",
    "|": "\\Vert",
    ".": "no arrow"
  },
  ur: any = (): any => ({
    type: "styling",
    body: [],
    mode: "math",
    style: "display"
  }),
  or: any = (r: any): any => ((r as any).type as any) === ("textord" as any) && ((r as any).text as any) === ("@" as any),
  Oa: any = (r: any, e: any): any => (((r as any).type as any) === ("mathord" as any) || ((r as any).type as any) === ("atom" as any)) && ((r as any).text as any) === (e as any);
function Ha(this: any, r: any, e: any, t: any): any {
  var a: any = (Na as any)[r];
  switch (a) {
    case "\\\\cdrightarrow":
    case "\\\\cdleftarrow":
      return ((t as any).callFunction as any)(a, [(e as any)[0]], [(e as any)[1]]);
    case "\\uparrow":
    case "\\downarrow":
      {
        var n: any = ((t as any).callFunction as any)("\\\\cdleft", [(e as any)[0]], []),
          l: any = {
            type: "atom",
            text: a,
            mode: "math",
            family: "rel"
          },
          u: any = ((t as any).callFunction as any)("\\Big", [l], []),
          h: any = ((t as any).callFunction as any)("\\\\cdright", [(e as any)[1]], []),
          c: any = {
            type: "ordgroup",
            mode: "math",
            body: [n, u, h]
          };
        return ((t as any).callFunction as any)("\\\\cdparent", [c], []);
      }
    case "\\\\cdlongequal":
      return ((t as any).callFunction as any)("\\\\cdlongequal", [], []);
    case "\\Vert":
      {
        var v: any = {
          type: "textord",
          text: "\\Vert",
          mode: "math"
        };
        return ((t as any).callFunction as any)("\\Big", [v], []);
      }
    default:
      return {
        type: "textord",
        text: " ",
        mode: "math"
      };
  }
}
function Fa(this: any, r: any): any {
  var e: any = [];
  for ((((r as any).gullet as any).beginGroup as any)(), ((((r as any).gullet as any).macros as any).set as any)("\\cr", "\\\\\\relax"), (((r as any).gullet as any).beginGroup as any)();;) {
    ((e as any).push as any)(((r as any).parseExpression as any)(!1, "\\\\")), (((r as any).gullet as any).endGroup as any)(), (((r as any).gullet as any).beginGroup as any)();
    var t: any = (((r as any).fetch as any)() as any).text;
    if ((t as any) === ("&" as any) || (t as any) === ("\\\\" as any)) ((r as any).consume as any)();else if ((t as any) === ("\\end" as any)) {
      (((e as any)[((e as any).length as any) - (1 as any)] as any).length as any) === (0 as any) && ((e as any).pop as any)();
      break;
    } else throw new (S as any)("Expected \\\\ or \\cr or \\end", (r as any).nextToken);
  }
  for (var a: any = [], n: any = [a], l: any = 0; (l as any) < ((e as any).length as any); l++) {
    for (var u: any = (e as any)[l], h: any = (ur as any)(), c: any = 0; (c as any) < ((u as any).length as any); c++) if (!(or as any)((u as any)[c])) (((h as any).body as any).push as any)((u as any)[c]);else {
      ((a as any).push as any)(h), c += 1;
      var v: any = ((Ge as any)((u as any)[c]) as any).text,
        g: any = new (Array as any)(2);
      if ((g as any)[0] = {
        type: "ordgroup",
        mode: "math",
        body: []
      }, (g as any)[1] = {
        type: "ordgroup",
        mode: "math",
        body: []
      }, !(("=|." as any).includes as any)(v)) if ((("<>AV" as any).includes as any)(v)) for (var b: any = 0; (b as any) < (2 as any); b++) {
        for (var y: any = !0, x: any = (c as any) + (1 as any); (x as any) < ((u as any).length as any); x++) {
          if ((Oa as any)((u as any)[x], v)) {
            y = !1, c = x;
            break;
          }
          if ((or as any)((u as any)[x])) throw new (S as any)((("Missing a " as any) + (v as any) as any) + (" character to complete a CD arrow." as any), (u as any)[x]);
          ((((g as any)[b] as any).body as any).push as any)((u as any)[x]);
        }
        if (y) throw new (S as any)((("Missing a " as any) + (v as any) as any) + (" character to complete a CD arrow." as any), (u as any)[c]);
      } else throw new (S as any)('Expected one of "<>AV=|." after @', (u as any)[c]);
      var M: any = (Ha as any)(v, g, r),
        T: any = {
          type: "styling",
          body: [M],
          mode: "math",
          style: "display"
        };
      ((a as any).push as any)(T), h = (ur as any)();
    }
    ((l as any) % (2 as any) as any) === (0 as any) ? ((a as any).push as any)(h) : ((a as any).shift as any)(), a = [], ((n as any).push as any)(a);
  }
  (((r as any).gullet as any).endGroup as any)(), (((r as any).gullet as any).endGroup as any)();
  var C: any = ((new (Array as any)(((n as any)[0] as any).length) as any).fill as any)({
    type: "align",
    align: "c",
    pregap: .25,
    postgap: .25
  });
  return {
    type: "array",
    mode: "math",
    body: n,
    arraystretch: 1,
    addJot: !0,
    rowGaps: [null],
    cols: C,
    colSeparationType: "CD",
    hLinesBeforeRow: ((new (Array as any)(((n as any).length as any) + (1 as any)) as any).fill as any)([])
  };
}
(B as any)({
  type: "cdlabel",
  names: ["\\\\cdleft", "\\\\cdright"],
  props: {
    numArgs: 1
  },
  handler(r: any, e: any): any {
    var {
      parser: t,
      funcName: a
    }: any = r;
    return {
      type: "cdlabel",
      mode: (t as any).mode,
      side: ((a as any).slice as any)(4),
      label: (e as any)[0]
    };
  },
  htmlBuilder(r: any, e: any): any {
    var t: any = ((e as any).havingStyle as any)((((e as any).style as any).sup as any)()),
      a: any = (re as any)((U as any)((r as any).label, t, e), e);
    return (((a as any).classes as any).push as any)(("cd-label-" as any) + ((r as any).side as any)), ((a as any).style as any).bottom = (A as any)((.8 as any) - ((a as any).depth as any)), (a as any).height = 0, (a as any).depth = 0, a;
  },
  mathmlBuilder(r: any, e: any): any {
    var t: any = new (z as any)("mrow", [(Y as any)((r as any).label, e)]);
    return t = new (z as any)("mpadded", [t]), ((t as any).setAttribute as any)("width", "0"), ((r as any).side as any) === ("left" as any) && ((t as any).setAttribute as any)("lspace", "-1width"), ((t as any).setAttribute as any)("voffset", "0.7em"), t = new (z as any)("mstyle", [t]), ((t as any).setAttribute as any)("displaystyle", "false"), ((t as any).setAttribute as any)("scriptlevel", "1"), t;
  }
});
(B as any)({
  type: "cdlabelparent",
  names: ["\\\\cdparent"],
  props: {
    numArgs: 1
  },
  handler(r: any, e: any): any {
    var {
      parser: t
    }: any = r;
    return {
      type: "cdlabelparent",
      mode: (t as any).mode,
      fragment: (e as any)[0]
    };
  },
  htmlBuilder(r: any, e: any): any {
    var t: any = (re as any)((U as any)((r as any).fragment, e), e);
    return (((t as any).classes as any).push as any)("cd-vert-arrow"), t;
  },
  mathmlBuilder(r: any, e: any): any {
    return new (z as any)("mrow", [(Y as any)((r as any).fragment, e)]);
  }
});
(B as any)({
  type: "textord",
  names: ["\\@char"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler(r: any, e: any): any {
    for (var {
        parser: t
      }: any = r, a: any = (H as any)((e as any)[0], "ordgroup"), n: any = (a as any).body, l: any = "", u: any = 0; (u as any) < ((n as any).length as any); u++) {
      var h: any = (H as any)((n as any)[u], "textord");
      l += (h as any).text;
    }
    var c: any = (parseInt as any)(l),
      v: any;
    if ((isNaN as any)(c)) throw new (S as any)(("\\@char has non-numeric argument " as any) + (l as any));
    if ((c as any) < (0 as any) || (c as any) >= (1114111 as any)) throw new (S as any)(("\\@char with invalid code point " as any) + (l as any));
    return (c as any) <= (65535 as any) ? v = ((String as any).fromCharCode as any)(c) : (c -= 65536, v = ((String as any).fromCharCode as any)(((c as any) >> (10 as any) as any) + (55296 as any), (((c as any) & (1023 as any)) as any) + (56320 as any))), {
      type: "textord",
      mode: (t as any).mode,
      text: v
    };
  }
});
var Kr: any = (r: any, e: any): any => {
    var t: any = (a0 as any)((r as any).body, ((e as any).withColor as any)((r as any).color), !1);
    return (E0 as any)(t);
  },
  Jr: any = (r: any, e: any): any => {
    var t: any = (p0 as any)((r as any).body, ((e as any).withColor as any)((r as any).color)),
      a: any = new (z as any)("mstyle", t);
    return ((a as any).setAttribute as any)("mathcolor", (r as any).color), a;
  };
(B as any)({
  type: "color",
  names: ["\\textcolor"],
  props: {
    numArgs: 2,
    allowedInText: !0,
    argTypes: ["color", "original"]
  },
  handler(r: any, e: any): any {
    var {
        parser: t
      }: any = r,
      a: any = ((H as any)((e as any)[0], "color-token") as any).color,
      n: any = (e as any)[1];
    return {
      type: "color",
      mode: (t as any).mode,
      color: a,
      body: (Q as any)(n)
    };
  },
  htmlBuilder: Kr,
  mathmlBuilder: Jr
});
(B as any)({
  type: "color",
  names: ["\\color"],
  props: {
    numArgs: 1,
    allowedInText: !0,
    argTypes: ["color"]
  },
  handler(r: any, e: any): any {
    var {
        parser: t,
        breakOnTokenText: a
      }: any = r,
      n: any = ((H as any)((e as any)[0], "color-token") as any).color;
    ((((t as any).gullet as any).macros as any).set as any)("\\current@color", n);
    var l: any = ((t as any).parseExpression as any)(!0, a);
    return {
      type: "color",
      mode: (t as any).mode,
      color: n,
      body: l
    };
  },
  htmlBuilder: Kr,
  mathmlBuilder: Jr
});
(B as any)({
  type: "cr",
  names: ["\\\\"],
  props: {
    numArgs: 0,
    numOptionalArgs: 0,
    allowedInText: !0
  },
  handler(r: any, e: any, t: any): any {
    var {
        parser: a
      }: any = r,
      n: any = (((((a as any).gullet as any).future as any)() as any).text as any) === ("[" as any) ? ((a as any).parseSizeGroup as any)(!0) : null,
      l: any = !((a as any).settings as any).displayMode || !(((a as any).settings as any).useStrictBehavior as any)("newLineInDisplayMode", "In LaTeX, \\\\ or \\newline does nothing in display mode");
    return {
      type: "cr",
      mode: (a as any).mode,
      newLine: l,
      size: n && ((H as any)(n, "size") as any).value
    };
  },
  htmlBuilder(r: any, e: any): any {
    var t: any = (k as any)(["mspace"], [], e);
    return (r as any).newLine && ((((t as any).classes as any).push as any)("newline"), (r as any).size && (((t as any).style as any).marginTop = (A as any)((K as any)((r as any).size, e)))), t;
  },
  mathmlBuilder(r: any, e: any): any {
    var t: any = new (z as any)("mspace");
    return (r as any).newLine && (((t as any).setAttribute as any)("linebreak", "newline"), (r as any).size && ((t as any).setAttribute as any)("height", (A as any)((K as any)((r as any).size, e)))), t;
  }
});
var St: any = {
    "\\global": "\\global",
    "\\long": "\\\\globallong",
    "\\\\globallong": "\\\\globallong",
    "\\def": "\\gdef",
    "\\gdef": "\\gdef",
    "\\edef": "\\xdef",
    "\\xdef": "\\xdef",
    "\\let": "\\\\globallet",
    "\\futurelet": "\\\\globalfuture"
  },
  Qr: any = (r: any): any => {
    var e: any = (r as any).text;
    if (((/^(?:[\\{}$&#^_]|EOF)$/ as any).test as any)(e)) throw new (S as any)("Expected a control sequence", r);
    return e;
  },
  La: any = (r: any): any => {
    var e: any = (((r as any).gullet as any).popToken as any)();
    return ((e as any).text as any) === ("=" as any) && (e = (((r as any).gullet as any).popToken as any)(), ((e as any).text as any) === (" " as any) && (e = (((r as any).gullet as any).popToken as any)())), e;
  },
  _r: any = (r: any, e: any, t: any, a: any): any => {
    var n: any = ((((r as any).gullet as any).macros as any).get as any)((t as any).text);
    (n as any) == (null as any) && ((t as any).noexpand = !0, n = {
      tokens: [t],
      numArgs: 0,
      unexpandable: !(((r as any).gullet as any).isExpandable as any)((t as any).text)
    }), ((((r as any).gullet as any).macros as any).set as any)(e, n, a);
  };
(B as any)({
  type: "internal",
  names: ["\\global", "\\long", "\\\\globallong"],
  props: {
    numArgs: 0,
    allowedInText: !0
  },
  handler(r: any): any {
    var {
      parser: e,
      funcName: t
    }: any = r;
    ((e as any).consumeSpaces as any)();
    var a: any = ((e as any).fetch as any)();
    if ((St as any)[(a as any).text]) return ((t as any) === ("\\global" as any) || (t as any) === ("\\\\globallong" as any)) && ((a as any).text = (St as any)[(a as any).text]), (H as any)(((e as any).parseFunction as any)(), "internal");
    throw new (S as any)("Invalid token after macro prefix", a);
  }
});
(B as any)({
  type: "internal",
  names: ["\\def", "\\gdef", "\\edef", "\\xdef"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    primitive: !0
  },
  handler(r: any): any {
    var {
        parser: e,
        funcName: t
      }: any = r,
      a: any = (((e as any).gullet as any).popToken as any)(),
      n: any = (a as any).text;
    if (((/^(?:[\\{}$&#^_]|EOF)$/ as any).test as any)(n)) throw new (S as any)("Expected a control sequence", a);
    for (var l: any = 0, u: any, h: any = [[]]; (((((e as any).gullet as any).future as any)() as any).text as any) !== ("{" as any);) if (a = (((e as any).gullet as any).popToken as any)(), ((a as any).text as any) === ("#" as any)) {
      if ((((((e as any).gullet as any).future as any)() as any).text as any) === ("{" as any)) {
        u = (((e as any).gullet as any).future as any)(), (((h as any)[l] as any).push as any)("{");
        break;
      }
      if (a = (((e as any).gullet as any).popToken as any)(), !((/^[1-9]$/ as any).test as any)((a as any).text)) throw new (S as any)((('Invalid argument number "' as any) + ((a as any).text as any) as any) + ('"' as any));
      if (((parseInt as any)((a as any).text) as any) !== ((l as any) + (1 as any) as any)) throw new (S as any)((('Argument number "' as any) + ((a as any).text as any) as any) + ('" out of order' as any));
      l++, ((h as any).push as any)([]);
    } else {
      if (((a as any).text as any) === ("EOF" as any)) throw new (S as any)("Expected a macro definition");
      (((h as any)[l] as any).push as any)((a as any).text);
    }
    var {
      tokens: c
    }: any = (((e as any).gullet as any).consumeArg as any)();
    return u && ((c as any).unshift as any)(u), ((t as any) === ("\\edef" as any) || (t as any) === ("\\xdef" as any)) && (c = (((e as any).gullet as any).expandTokens as any)(c), ((c as any).reverse as any)()), ((((e as any).gullet as any).macros as any).set as any)(n, {
      tokens: c,
      numArgs: l,
      delimiters: h
    }, (t as any) === ((St as any)[t] as any)), {
      type: "internal",
      mode: (e as any).mode
    };
  }
});
(B as any)({
  type: "internal",
  names: ["\\let", "\\\\globallet"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    primitive: !0
  },
  handler(r: any): any {
    var {
        parser: e,
        funcName: t
      }: any = r,
      a: any = (Qr as any)((((e as any).gullet as any).popToken as any)());
    (((e as any).gullet as any).consumeSpaces as any)();
    var n: any = (La as any)(e);
    return (_r as any)(e, a, n, (t as any) === ("\\\\globallet" as any)), {
      type: "internal",
      mode: (e as any).mode
    };
  }
});
(B as any)({
  type: "internal",
  names: ["\\futurelet", "\\\\globalfuture"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    primitive: !0
  },
  handler(r: any): any {
    var {
        parser: e,
        funcName: t
      }: any = r,
      a: any = (Qr as any)((((e as any).gullet as any).popToken as any)()),
      n: any = (((e as any).gullet as any).popToken as any)(),
      l: any = (((e as any).gullet as any).popToken as any)();
    return (_r as any)(e, a, l, (t as any) === ("\\\\globalfuture" as any)), (((e as any).gullet as any).pushToken as any)(l), (((e as any).gullet as any).pushToken as any)(n), {
      type: "internal",
      mode: (e as any).mode
    };
  }
});
var ue: any = function (this: any, e: any, t: any, a: any): any {
    var n: any = (($ as any).math as any)[e] && ((($ as any).math as any)[e] as any).replace,
      l: any = (Ct as any)(n || e, t, a);
    if (!l) throw new (Error as any)((((("Unsupported symbol " as any) + (e as any) as any) + (" and font size " as any) as any) + (t as any) as any) + ("." as any));
    return l;
  },
  Ot: any = function (this: any, e: any, t: any, a: any, n: any): any {
    var l: any = ((a as any).havingBaseStyle as any)(t),
      u: any = (k as any)(((n as any).concat as any)(((l as any).sizingClasses as any)(a)), [e], a),
      h: any = ((l as any).sizeMultiplier as any) / ((a as any).sizeMultiplier as any);
    return (u as any).height *= h, (u as any).depth *= h, (u as any).maxFontSize = (l as any).sizeMultiplier, u;
  },
  e1: any = function (this: any, e: any, t: any, a: any): any {
    var n: any = ((t as any).havingBaseStyle as any)(a),
      l: any = ((1 as any) - (((t as any).sizeMultiplier as any) / ((n as any).sizeMultiplier as any) as any) as any) * ((((t as any).fontMetrics as any)() as any).axisHeight as any);
    (((e as any).classes as any).push as any)("delimcenter"), ((e as any).style as any).top = (A as any)(l), (e as any).height -= l, (e as any).depth += l;
  },
  Pa: any = function (this: any, e: any, t: any, a: any, n: any, l: any, u: any): any {
    var h: any = (s0 as any)(e, "Main-Regular", l, n),
      c: any = (Ot as any)(h, t, n, u);
    return (e1 as any)(c, n, t), c;
  },
  Ga: any = function (this: any, e: any, t: any, a: any, n: any): any {
    return (s0 as any)(e, (("Size" as any) + (t as any) as any) + ("-Regular" as any), a, n);
  },
  t1: any = function (this: any, e: any, t: any, a: any, n: any, l: any, u: any): any {
    var h: any = (Ga as any)(e, t, l, n),
      c: any = (Ot as any)((k as any)(["delimsizing", ("size" as any) + (t as any)], [h], n), (N as any).TEXT, n, u);
    return a && (e1 as any)(c, n, (N as any).TEXT), c;
  },
  at: any = function (this: any, e: any, t: any, a: any): any {
    var n: any;
    (t as any) === ("Size1-Regular" as any) ? n = "delim-size1" : n = "delim-size4";
    var l: any = (k as any)(["delimsizinginner", n], [(k as any)([], [(s0 as any)(e, t, a)])]);
    return {
      type: "elem",
      elem: l
    };
  },
  nt: any = function (this: any, e: any, t: any, a: any): any {
    var n: any = ((k0 as any)["Size4-Regular"] as any)[((e as any).charCodeAt as any)(0)] ? (((k0 as any)["Size4-Regular"] as any)[((e as any).charCodeAt as any)(0)] as any)[4] : (((k0 as any)["Size1-Regular"] as any)[((e as any).charCodeAt as any)(0)] as any)[4],
      l: any = new (P0 as any)("inner", (ta as any)(e, ((Math as any).round as any)((1e3 as any) * (t as any)))),
      u: any = new (D0 as any)([l], {
        width: (A as any)(n),
        height: (A as any)(t),
        style: ("width:" as any) + ((A as any)(n) as any),
        viewBox: ((("0 0 " as any) + ((1e3 as any) * (n as any) as any) as any) + (" " as any) as any) + (((Math as any).round as any)((1e3 as any) * (t as any)) as any),
        preserveAspectRatio: "xMinYMin"
      }),
      h: any = (G0 as any)([], [u], a);
    return (h as any).height = t, ((h as any).style as any).height = (A as any)(t), ((h as any).style as any).width = (A as any)(n), {
      type: "elem",
      elem: h
    };
  },
  zt: number = .008,
  Te: any = {
    type: "kern",
    size: (-1 as any) * (zt as any)
  },
  Ua: any = new (Set as any)(["|", "\\lvert", "\\rvert", "\\vert"]),
  Va: any = new (Set as any)(["\\|", "\\lVert", "\\rVert", "\\Vert"]),
  r1: any = function (this: any, e: any, t: any, a: any, n: any, l: any, u: any): any {
    var h: any,
      c: any,
      v: any,
      g: any,
      b: any = "",
      y: any = 0;
    h = v = g = e, c = null;
    var x: any = "Size1-Regular";
    (e as any) === ("\\uparrow" as any) ? v = g = "\u23D0" : (e as any) === ("\\Uparrow" as any) ? v = g = "\u2016" : (e as any) === ("\\downarrow" as any) ? h = v = "\u23D0" : (e as any) === ("\\Downarrow" as any) ? h = v = "\u2016" : (e as any) === ("\\updownarrow" as any) ? (h = "\\uparrow", v = "\u23D0", g = "\\downarrow") : (e as any) === ("\\Updownarrow" as any) ? (h = "\\Uparrow", v = "\u2016", g = "\\Downarrow") : ((Ua as any).has as any)(e) ? (v = "\u2223", b = "vert", y = 333) : ((Va as any).has as any)(e) ? (v = "\u2225", b = "doublevert", y = 556) : (e as any) === ("[" as any) || (e as any) === ("\\lbrack" as any) ? (h = "\u23A1", v = "\u23A2", g = "\u23A3", x = "Size4-Regular", b = "lbrack", y = 667) : (e as any) === ("]" as any) || (e as any) === ("\\rbrack" as any) ? (h = "\u23A4", v = "\u23A5", g = "\u23A6", x = "Size4-Regular", b = "rbrack", y = 667) : (e as any) === ("\\lfloor" as any) || (e as any) === ("\u230A" as any) ? (v = h = "\u23A2", g = "\u23A3", x = "Size4-Regular", b = "lfloor", y = 667) : (e as any) === ("\\lceil" as any) || (e as any) === ("\u2308" as any) ? (h = "\u23A1", v = g = "\u23A2", x = "Size4-Regular", b = "lceil", y = 667) : (e as any) === ("\\rfloor" as any) || (e as any) === ("\u230B" as any) ? (v = h = "\u23A5", g = "\u23A6", x = "Size4-Regular", b = "rfloor", y = 667) : (e as any) === ("\\rceil" as any) || (e as any) === ("\u2309" as any) ? (h = "\u23A4", v = g = "\u23A5", x = "Size4-Regular", b = "rceil", y = 667) : (e as any) === ("(" as any) || (e as any) === ("\\lparen" as any) ? (h = "\u239B", v = "\u239C", g = "\u239D", x = "Size4-Regular", b = "lparen", y = 875) : (e as any) === (")" as any) || (e as any) === ("\\rparen" as any) ? (h = "\u239E", v = "\u239F", g = "\u23A0", x = "Size4-Regular", b = "rparen", y = 875) : (e as any) === ("\\{" as any) || (e as any) === ("\\lbrace" as any) ? (h = "\u23A7", c = "\u23A8", g = "\u23A9", v = "\u23AA", x = "Size4-Regular") : (e as any) === ("\\}" as any) || (e as any) === ("\\rbrace" as any) ? (h = "\u23AB", c = "\u23AC", g = "\u23AD", v = "\u23AA", x = "Size4-Regular") : (e as any) === ("\\lgroup" as any) || (e as any) === ("\u27EE" as any) ? (h = "\u23A7", g = "\u23A9", v = "\u23AA", x = "Size4-Regular") : (e as any) === ("\\rgroup" as any) || (e as any) === ("\u27EF" as any) ? (h = "\u23AB", g = "\u23AD", v = "\u23AA", x = "Size4-Regular") : (e as any) === ("\\lmoustache" as any) || (e as any) === ("\u23B0" as any) ? (h = "\u23A7", g = "\u23AD", v = "\u23AA", x = "Size4-Regular") : ((e as any) === ("\\rmoustache" as any) || (e as any) === ("\u23B1" as any)) && (h = "\u23AB", g = "\u23A9", v = "\u23AA", x = "Size4-Regular");
    var M: any = (ue as any)(h, x, l),
      T: any = ((M as any).height as any) + ((M as any).depth as any),
      C: any = (ue as any)(v, x, l),
      q: any = ((C as any).height as any) + ((C as any).depth as any),
      I: any = (ue as any)(g, x, l),
      O: any = ((I as any).height as any) + ((I as any).depth as any),
      F: any = 0,
      V: any = 1;
    if ((c as any) !== (null as any)) {
      var L: any = (ue as any)(c, x, l);
      F = ((L as any).height as any) + ((L as any).depth as any), V = 2;
    }
    var P: any = ((T as any) + (O as any) as any) + (F as any),
      W: any = ((Math as any).max as any)(0, ((Math as any).ceil as any)(((t as any) - (P as any) as any) / ((V as any) * (q as any) as any))),
      X: any = (P as any) + (((W as any) * (V as any) as any) * (q as any) as any),
      h0: any = (((n as any).fontMetrics as any)() as any).axisHeight;
    a && (h0 *= (n as any).sizeMultiplier);
    var i0: any = ((X as any) / (2 as any) as any) - (h0 as any),
      t0: any = [];
    if (((b as any).length as any) > (0 as any)) {
      var X0: any = ((X as any) - (T as any) as any) - (O as any),
        m0: any = ((Math as any).round as any)((X as any) * (1e3 as any)),
        y0: any = (ra as any)(b, ((Math as any).round as any)((X0 as any) * (1e3 as any))),
        R0: any = new (P0 as any)(b, y0),
        j0: any = (A as any)((y as any) / (1e3 as any)),
        Z0: any = (A as any)((m0 as any) / (1e3 as any)),
        Ze: any = new (D0 as any)([R0], {
          width: j0,
          height: Z0,
          viewBox: ((("0 0 " as any) + (y as any) as any) + (" " as any) as any) + (m0 as any)
        }),
        I0: any = (G0 as any)([], [Ze], n);
      (I0 as any).height = (m0 as any) / (1e3 as any), ((I0 as any).style as any).width = j0, ((I0 as any).style as any).height = Z0, ((t0 as any).push as any)({
        type: "elem",
        elem: I0
      });
    } else {
      if (((t0 as any).push as any)((at as any)(g, x, l)), ((t0 as any).push as any)(Te), (c as any) === (null as any)) {
        var N0: any = (((X as any) - (T as any) as any) - (O as any) as any) + ((2 as any) * (zt as any) as any);
        ((t0 as any).push as any)((nt as any)(v, N0, n));
      } else {
        var se: any = (((((X as any) - (T as any) as any) - (O as any) as any) - (F as any) as any) / (2 as any) as any) + ((2 as any) * (zt as any) as any);
        ((t0 as any).push as any)((nt as any)(v, se, n)), ((t0 as any).push as any)(Te), ((t0 as any).push as any)((at as any)(c, x, l)), ((t0 as any).push as any)(Te), ((t0 as any).push as any)((nt as any)(v, se, n));
      }
      ((t0 as any).push as any)(Te), ((t0 as any).push as any)((at as any)(h, x, l));
    }
    var x0: any = ((n as any).havingBaseStyle as any)((N as any).TEXT),
      fe: any = (G as any)({
        positionType: "bottom",
        positionData: i0,
        children: t0
      });
    return (Ot as any)((k as any)(["delimsizing", "mult"], [fe], x0), (N as any).TEXT, n, u);
  },
  it: number = 80,
  lt: number = .08,
  st: any = function (this: any, e: any, t: any, a: any, n: any, l: any): any {
    var u: any = (ea as any)(e, n, a),
      h: any = new (P0 as any)(e, u),
      c: any = new (D0 as any)([h], {
        width: "400em",
        height: (A as any)(t),
        viewBox: ("0 0 400000 " as any) + (a as any),
        preserveAspectRatio: "xMinYMin slice"
      });
    return (G0 as any)(["hide-tail"], [c], l);
  },
  Xa: any = function (this: any, e: any, t: any): any {
    var a: any = ((t as any).havingBaseSizing as any)(),
      n: any = (s1 as any)("\\surd", (e as any) * ((a as any).sizeMultiplier as any), l1, a),
      l: any = (a as any).sizeMultiplier,
      u: any = ((Math as any).max as any)(0, ((t as any).minRuleThickness as any) - ((((t as any).fontMetrics as any)() as any).sqrtRuleThickness as any)),
      h: any,
      c: any = 0,
      v: any = 0,
      g: any = 0,
      b: any;
    return ((n as any).type as any) === ("small" as any) ? (g = ((1e3 as any) + ((1e3 as any) * (u as any) as any) as any) + (it as any), (e as any) < (1 as any) ? l = 1 : (e as any) < (1.4 as any) && (l = .7), c = (((1 as any) + (u as any) as any) + (lt as any) as any) / (l as any), v = ((1 as any) + (u as any) as any) / (l as any), h = (st as any)("sqrtMain", c, g, u, t), ((h as any).style as any).minWidth = "0.853em", b = (.833 as any) / (l as any)) : ((n as any).type as any) === ("large" as any) ? (g = ((1e3 as any) + (it as any) as any) * ((oe as any)[(n as any).size] as any), v = (((oe as any)[(n as any).size] as any) + (u as any) as any) / (l as any), c = ((((oe as any)[(n as any).size] as any) + (u as any) as any) + (lt as any) as any) / (l as any), h = (st as any)(("sqrtSize" as any) + ((n as any).size as any), c, g, u, t), ((h as any).style as any).minWidth = "1.02em", b = (1 as any) / (l as any)) : (c = ((e as any) + (u as any) as any) + (lt as any), v = (e as any) + (u as any), g = (((Math as any).floor as any)(((1e3 as any) * (e as any) as any) + (u as any)) as any) + (it as any), h = (st as any)("sqrtTall", c, g, u, t), ((h as any).style as any).minWidth = "0.742em", b = 1.056), (h as any).height = v, ((h as any).style as any).height = (A as any)(c), {
      span: h,
      advanceWidth: b,
      ruleWidth: (((((t as any).fontMetrics as any)() as any).sqrtRuleThickness as any) + (u as any) as any) * (l as any)
    };
  },
  a1: any = new (Set as any)(["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "\u230A", "\u230B", "\\lceil", "\\rceil", "\u2308", "\u2309", "\\surd"]),
  Ya: any = new (Set as any)(["\\uparrow", "\\downarrow", "\\updownarrow", "\\Uparrow", "\\Downarrow", "\\Updownarrow", "|", "\\|", "\\vert", "\\Vert", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "\u27EE", "\u27EF", "\\lmoustache", "\\rmoustache", "\u23B0", "\u23B1"]),
  n1: any = new (Set as any)(["<", ">", "\\langle", "\\rangle", "/", "\\backslash", "\\lt", "\\gt"]),
  oe: any = [0, 1.2, 1.8, 2.4, 3],
  i1: any = function (this: any, e: any, t: any, a: any, n: any, l: any): any {
    if ((e as any) === ("<" as any) || (e as any) === ("\\lt" as any) || (e as any) === ("\u27E8" as any) ? e = "\\langle" : ((e as any) === (">" as any) || (e as any) === ("\\gt" as any) || (e as any) === ("\u27E9" as any)) && (e = "\\rangle"), ((a1 as any).has as any)(e) || ((n1 as any).has as any)(e)) return (t1 as any)(e, t, !1, a, n, l);
    if (((Ya as any).has as any)(e)) return (r1 as any)(e, (oe as any)[t], !1, a, n, l);
    throw new (S as any)((("Illegal delimiter: '" as any) + (e as any) as any) + ("'" as any));
  },
  Wa: any = [{
    type: "small",
    style: (N as any).SCRIPTSCRIPT
  }, {
    type: "small",
    style: (N as any).SCRIPT
  }, {
    type: "small",
    style: (N as any).TEXT
  }, {
    type: "large",
    size: 1
  }, {
    type: "large",
    size: 2
  }, {
    type: "large",
    size: 3
  }, {
    type: "large",
    size: 4
  }],
  $a: any = [{
    type: "small",
    style: (N as any).SCRIPTSCRIPT
  }, {
    type: "small",
    style: (N as any).SCRIPT
  }, {
    type: "small",
    style: (N as any).TEXT
  }, {
    type: "stack"
  }],
  l1: any = [{
    type: "small",
    style: (N as any).SCRIPTSCRIPT
  }, {
    type: "small",
    style: (N as any).SCRIPT
  }, {
    type: "small",
    style: (N as any).TEXT
  }, {
    type: "large",
    size: 1
  }, {
    type: "large",
    size: 2
  }, {
    type: "large",
    size: 3
  }, {
    type: "large",
    size: 4
  }, {
    type: "stack"
  }],
  ja: any = function (this: any, e: any): any {
    if (((e as any).type as any) === ("small" as any)) return "Main-Regular";
    if (((e as any).type as any) === ("large" as any)) return (("Size" as any) + ((e as any).size as any) as any) + ("-Regular" as any);
    if (((e as any).type as any) === ("stack" as any)) return "Size4-Regular";
    var t: any = (e as any).type;
    throw new (Error as any)((("Add support for delim type '" as any) + (t as any) as any) + ("' here." as any));
  },
  s1: any = function (this: any, e: any, t: any, a: any, n: any): any {
    for (var l: any = ((Math as any).min as any)(2, (3 as any) - (((n as any).style as any).size as any)), u: any = l; (u as any) < ((a as any).length as any); u++) {
      var h: any = (a as any)[u];
      if (((h as any).type as any) === ("stack" as any)) break;
      var c: any = (ue as any)(e, (ja as any)(h), "math"),
        v: any = ((c as any).height as any) + ((c as any).depth as any);
      if (((h as any).type as any) === ("small" as any)) {
        var g: any = ((n as any).havingBaseStyle as any)((h as any).style);
        v *= (g as any).sizeMultiplier;
      }
      if ((v as any) > (t as any)) return h;
    }
    return (a as any)[((a as any).length as any) - (1 as any)];
  },
  At: any = function (this: any, e: any, t: any, a: any, n: any, l: any, u: any): any {
    (e as any) === ("<" as any) || (e as any) === ("\\lt" as any) || (e as any) === ("\u27E8" as any) ? e = "\\langle" : ((e as any) === (">" as any) || (e as any) === ("\\gt" as any) || (e as any) === ("\u27E9" as any)) && (e = "\\rangle");
    var h: any;
    ((n1 as any).has as any)(e) ? h = Wa : ((a1 as any).has as any)(e) ? h = l1 : h = $a;
    var c: any = (s1 as any)(e, t, h, n);
    return ((c as any).type as any) === ("small" as any) ? (Pa as any)(e, (c as any).style, a, n, l, u) : ((c as any).type as any) === ("large" as any) ? (t1 as any)(e, (c as any).size, a, n, l, u) : (r1 as any)(e, t, a, n, l, u);
  },
  ut: any = function (this: any, e: any, t: any, a: any, n: any, l: any, u: any): any {
    var h: any = ((((n as any).fontMetrics as any)() as any).axisHeight as any) * ((n as any).sizeMultiplier as any),
      c: number = 901,
      v: any = (5 as any) / ((((n as any).fontMetrics as any)() as any).ptPerEm as any),
      g: any = ((Math as any).max as any)((t as any) - (h as any), (a as any) + (h as any)),
      b: any = ((Math as any).max as any)(((g as any) / (500 as any) as any) * (c as any), ((2 as any) * (g as any) as any) - (v as any));
    return (At as any)(e, b, !0, n, l, u);
  },
  hr: any = {
    "\\bigl": {
      mclass: "mopen",
      size: 1
    },
    "\\Bigl": {
      mclass: "mopen",
      size: 2
    },
    "\\biggl": {
      mclass: "mopen",
      size: 3
    },
    "\\Biggl": {
      mclass: "mopen",
      size: 4
    },
    "\\bigr": {
      mclass: "mclose",
      size: 1
    },
    "\\Bigr": {
      mclass: "mclose",
      size: 2
    },
    "\\biggr": {
      mclass: "mclose",
      size: 3
    },
    "\\Biggr": {
      mclass: "mclose",
      size: 4
    },
    "\\bigm": {
      mclass: "mrel",
      size: 1
    },
    "\\Bigm": {
      mclass: "mrel",
      size: 2
    },
    "\\biggm": {
      mclass: "mrel",
      size: 3
    },
    "\\Biggm": {
      mclass: "mrel",
      size: 4
    },
    "\\big": {
      mclass: "mord",
      size: 1
    },
    "\\Big": {
      mclass: "mord",
      size: 2
    },
    "\\bigg": {
      mclass: "mord",
      size: 3
    },
    "\\Bigg": {
      mclass: "mord",
      size: 4
    }
  },
  Za: any = new (Set as any)(["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "\u230A", "\u230B", "\\lceil", "\\rceil", "\u2308", "\u2309", "<", ">", "\\langle", "\u27E8", "\\rangle", "\u27E9", "\\lt", "\\gt", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "\u27EE", "\u27EF", "\\lmoustache", "\\rmoustache", "\u23B0", "\u23B1", "/", "\\backslash", "|", "\\vert", "\\|", "\\Vert", "\\uparrow", "\\Uparrow", "\\downarrow", "\\Downarrow", "\\updownarrow", "\\Updownarrow", "."]);
function Xe(this: any, r: any, e: any): any {
  var t: any = (Ue as any)(r);
  if (t && ((Za as any).has as any)((t as any).text)) return t;
  throw t ? new (S as any)((((("Invalid delimiter '" as any) + ((t as any).text as any) as any) + ("' after '" as any) as any) + ((e as any).funcName as any) as any) + ("'" as any), r) : new (S as any)((("Invalid delimiter type '" as any) + ((r as any).type as any) as any) + ("'" as any), r);
}
(B as any)({
  type: "delimsizing",
  names: ["\\bigl", "\\Bigl", "\\biggl", "\\Biggl", "\\bigr", "\\Bigr", "\\biggr", "\\Biggr", "\\bigm", "\\Bigm", "\\biggm", "\\Biggm", "\\big", "\\Big", "\\bigg", "\\Bigg"],
  props: {
    numArgs: 1,
    argTypes: ["primitive"]
  },
  handler: (r: any, e: any): any => {
    var t: any = (Xe as any)((e as any)[0], r);
    return {
      type: "delimsizing",
      mode: ((r as any).parser as any).mode,
      size: ((hr as any)[(r as any).funcName] as any).size,
      mclass: ((hr as any)[(r as any).funcName] as any).mclass,
      delim: (t as any).text
    };
  },
  htmlBuilder: (r: any, e: any): any => ((r as any).delim as any) === ("." as any) ? (k as any)([(r as any).mclass]) : (i1 as any)((r as any).delim, (r as any).size, e, (r as any).mode, [(r as any).mclass]),
  mathmlBuilder: (r: any): any => {
    var e: any = [];
    ((r as any).delim as any) !== ("." as any) && ((e as any).push as any)((b0 as any)((r as any).delim, (r as any).mode));
    var t: any = new (z as any)("mo", e);
    ((r as any).mclass as any) === ("mopen" as any) || ((r as any).mclass as any) === ("mclose" as any) ? ((t as any).setAttribute as any)("fence", "true") : ((t as any).setAttribute as any)("fence", "false"), ((t as any).setAttribute as any)("stretchy", "true");
    var a: any = (A as any)((oe as any)[(r as any).size]);
    return ((t as any).setAttribute as any)("minsize", a), ((t as any).setAttribute as any)("maxsize", a), t;
  }
});
function mr(this: any, r: any): any {
  if (!(r as any).body) throw new (Error as any)("Bug: The leftright ParseNode wasn't fully parsed.");
}
(B as any)({
  type: "leftright-right",
  names: ["\\right"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler: (r: any, e: any): any => {
    var t: any = (((((r as any).parser as any).gullet as any).macros as any).get as any)("\\current@color");
    if (t && (typeof t as any) != ("string" as any)) throw new (S as any)("\\current@color set to non-string in \\right");
    return {
      type: "leftright-right",
      mode: ((r as any).parser as any).mode,
      delim: ((Xe as any)((e as any)[0], r) as any).text,
      color: t
    };
  }
});
(B as any)({
  type: "leftright",
  names: ["\\left"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler: (r: any, e: any): any => {
    var t: any = (Xe as any)((e as any)[0], r),
      a: any = (r as any).parser;
    ++(a as any).leftrightDepth;
    var n: any = ((a as any).parseExpression as any)(!1);
    --(a as any).leftrightDepth, ((a as any).expect as any)("\\right", !1);
    var l: any = (H as any)(((a as any).parseFunction as any)(), "leftright-right");
    return {
      type: "leftright",
      mode: (a as any).mode,
      body: n,
      left: (t as any).text,
      right: (l as any).delim,
      rightColor: (l as any).color
    };
  },
  htmlBuilder: (r: any, e: any): any => {
    (mr as any)(r);
    for (var t: any = (a0 as any)((r as any).body, e, !0, ["mopen", "mclose"]), a: any = 0, n: any = 0, l: any = !1, u: any = 0; (u as any) < ((t as any).length as any); u++) ((t as any)[u] as any).isMiddle ? l = !0 : (a = ((Math as any).max as any)(((t as any)[u] as any).height, a), n = ((Math as any).max as any)(((t as any)[u] as any).depth, n));
    a *= (e as any).sizeMultiplier, n *= (e as any).sizeMultiplier;
    var h: any;
    if (((r as any).left as any) === ("." as any) ? h = (me as any)(e, ["mopen"]) : h = (ut as any)((r as any).left, a, n, e, (r as any).mode, ["mopen"]), ((t as any).unshift as any)(h), l) for (var c: any = 1; (c as any) < ((t as any).length as any); c++) {
      var v: any = (t as any)[c],
        g: any = (v as any).isMiddle;
      g && ((t as any)[c] = (ut as any)((g as any).delim, a, n, (g as any).options, (r as any).mode, []));
    }
    var b: any;
    if (((r as any).right as any) === ("." as any)) b = (me as any)(e, ["mclose"]);else {
      var y: any = (r as any).rightColor ? ((e as any).withColor as any)((r as any).rightColor) : e;
      b = (ut as any)((r as any).right, a, n, y, (r as any).mode, ["mclose"]);
    }
    return ((t as any).push as any)(b), (k as any)(["minner"], t, e);
  },
  mathmlBuilder: (r: any, e: any): any => {
    (mr as any)(r);
    var t: any = (p0 as any)((r as any).body, e);
    if (((r as any).left as any) !== ("." as any)) {
      var a: any = new (z as any)("mo", [(b0 as any)((r as any).left, (r as any).mode)]);
      ((a as any).setAttribute as any)("fence", "true"), ((t as any).unshift as any)(a);
    }
    if (((r as any).right as any) !== ("." as any)) {
      var n: any = new (z as any)("mo", [(b0 as any)((r as any).right, (r as any).mode)]);
      ((n as any).setAttribute as any)("fence", "true"), (r as any).rightColor && ((n as any).setAttribute as any)("mathcolor", (r as any).rightColor), ((t as any).push as any)(n);
    }
    return (Rt as any)(t);
  }
});
(B as any)({
  type: "middle",
  names: ["\\middle"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler: (r: any, e: any): any => {
    var t: any = (Xe as any)((e as any)[0], r);
    if (!((r as any).parser as any).leftrightDepth) throw new (S as any)("\\middle without preceding \\left", t);
    return {
      type: "middle",
      mode: ((r as any).parser as any).mode,
      delim: (t as any).text
    };
  },
  htmlBuilder: (r: any, e: any): any => {
    var t: any;
    if (((r as any).delim as any) === ("." as any)) t = (me as any)(e, []);else {
      t = (i1 as any)((r as any).delim, 1, e, (r as any).mode, []);
      var a: any = {
        delim: (r as any).delim,
        options: e
      };
      (t as any).isMiddle = a;
    }
    return t;
  },
  mathmlBuilder: (r: any, e: any): any => {
    var t: any = ((r as any).delim as any) === ("\\vert" as any) || ((r as any).delim as any) === ("|" as any) ? (b0 as any)("|", "text") : (b0 as any)((r as any).delim, (r as any).mode),
      a: any = new (z as any)("mo", [t]);
    return ((a as any).setAttribute as any)("fence", "true"), ((a as any).setAttribute as any)("lspace", "0.05em"), ((a as any).setAttribute as any)("rspace", "0.05em"), a;
  }
});
var Ye: any = (r: any, e: any): any => {
    var t: any = (re as any)((U as any)((r as any).body, e), e),
      a: any = (((r as any).label as any).slice as any)(1),
      n: any = (e as any).sizeMultiplier,
      l: any,
      u: any = 0,
      h: any = (C0 as any)((r as any).body);
    if ((a as any) === ("sout" as any)) l = (k as any)(["stretchy", "sout"]), (l as any).height = ((((e as any).fontMetrics as any)() as any).defaultRuleThickness as any) / (n as any), u = (-.5 as any) * ((((e as any).fontMetrics as any)() as any).xHeight as any);else if ((a as any) === ("phase" as any)) {
      var c: any = (K as any)({
          number: .6,
          unit: "pt"
        }, e),
        v: any = (K as any)({
          number: .35,
          unit: "ex"
        }, e),
        g: any = ((e as any).havingBaseSizing as any)();
      n = (n as any) / ((g as any).sizeMultiplier as any);
      var b: any = ((((t as any).height as any) + ((t as any).depth as any) as any) + (c as any) as any) + (v as any);
      ((t as any).style as any).paddingLeft = (A as any)(((b as any) / (2 as any) as any) + (c as any));
      var y: any = ((Math as any).floor as any)(((1e3 as any) * (b as any) as any) * (n as any)),
        x: any = (Q1 as any)(y),
        M: any = new (D0 as any)([new (P0 as any)("phase", x)], {
          width: "400em",
          height: (A as any)((y as any) / (1e3 as any)),
          viewBox: ("0 0 400000 " as any) + (y as any),
          preserveAspectRatio: "xMinYMin slice"
        });
      l = (G0 as any)(["hide-tail"], [M], e), ((l as any).style as any).height = (A as any)(b), u = (((t as any).depth as any) + (c as any) as any) + (v as any);
    } else {
      ((/cancel/ as any).test as any)(a) ? h || (((t as any).classes as any).push as any)("cancel-pad") : (a as any) === ("angl" as any) ? (((t as any).classes as any).push as any)("anglpad") : (((t as any).classes as any).push as any)("boxpad");
      var T: any = 0,
        C: any = 0,
        q: any = 0;
      ((/box/ as any).test as any)(a) ? (q = ((Math as any).max as any)((((e as any).fontMetrics as any)() as any).fboxrule, (e as any).minRuleThickness), T = ((((e as any).fontMetrics as any)() as any).fboxsep as any) + (((a as any) === ("colorbox" as any) ? 0 : q) as any), C = T) : (a as any) === ("angl" as any) ? (q = ((Math as any).max as any)((((e as any).fontMetrics as any)() as any).defaultRuleThickness, (e as any).minRuleThickness), T = (4 as any) * (q as any), C = ((Math as any).max as any)(0, (.25 as any) - ((t as any).depth as any))) : (T = h ? .2 : 0, C = T), l = (Ra as any)(t, a, T, C, e), ((/fbox|boxed|fcolorbox/ as any).test as any)(a) ? (((l as any).style as any).borderStyle = "solid", ((l as any).style as any).borderWidth = (A as any)(q)) : (a as any) === ("angl" as any) && (q as any) !== (.049 as any) && (((l as any).style as any).borderTopWidth = (A as any)(q), ((l as any).style as any).borderRightWidth = (A as any)(q)), u = ((t as any).depth as any) + (C as any), (r as any).backgroundColor && (((l as any).style as any).backgroundColor = (r as any).backgroundColor, (r as any).borderColor && (((l as any).style as any).borderColor = (r as any).borderColor));
    }
    var I: any;
    if ((r as any).backgroundColor) I = (G as any)({
      positionType: "individualShift",
      children: [{
        type: "elem",
        elem: l,
        shift: u
      }, {
        type: "elem",
        elem: t,
        shift: 0
      }]
    });else {
      var O: any = ((/cancel|phase/ as any).test as any)(a) ? ["svg-align"] : [];
      I = (G as any)({
        positionType: "individualShift",
        children: [{
          type: "elem",
          elem: t,
          shift: 0
        }, {
          type: "elem",
          elem: l,
          shift: u,
          wrapperClasses: O
        }]
      });
    }
    return ((/cancel/ as any).test as any)(a) && ((I as any).height = (t as any).height, (I as any).depth = (t as any).depth), ((/cancel/ as any).test as any)(a) && !h ? (k as any)(["mord", "cancel-lap"], [I], e) : (k as any)(["mord"], [I], e);
  },
  We: any = (r: any, e: any): any => {
    var t: any = 0,
      a: any = new (z as any)((((r as any).label as any).includes as any)("colorbox") ? "mpadded" : "menclose", [(Y as any)((r as any).body, e)]);
    switch ((r as any).label) {
      case "\\cancel":
        ((a as any).setAttribute as any)("notation", "updiagonalstrike");
        break;
      case "\\bcancel":
        ((a as any).setAttribute as any)("notation", "downdiagonalstrike");
        break;
      case "\\phase":
        ((a as any).setAttribute as any)("notation", "phasorangle");
        break;
      case "\\sout":
        ((a as any).setAttribute as any)("notation", "horizontalstrike");
        break;
      case "\\fbox":
        ((a as any).setAttribute as any)("notation", "box");
        break;
      case "\\angl":
        ((a as any).setAttribute as any)("notation", "actuarial");
        break;
      case "\\fcolorbox":
      case "\\colorbox":
        if (t = ((((e as any).fontMetrics as any)() as any).fboxsep as any) * ((((e as any).fontMetrics as any)() as any).ptPerEm as any), ((a as any).setAttribute as any)("width", (("+" as any) + ((2 as any) * (t as any) as any) as any) + ("pt" as any)), ((a as any).setAttribute as any)("height", (("+" as any) + ((2 as any) * (t as any) as any) as any) + ("pt" as any)), ((a as any).setAttribute as any)("lspace", (t as any) + ("pt" as any)), ((a as any).setAttribute as any)("voffset", (t as any) + ("pt" as any)), ((r as any).label as any) === ("\\fcolorbox" as any)) {
          var n: any = ((Math as any).max as any)((((e as any).fontMetrics as any)() as any).fboxrule, (e as any).minRuleThickness);
          ((a as any).setAttribute as any)("style", ((("border: " as any) + ((A as any)(n) as any) as any) + (" solid " as any) as any) + ((r as any).borderColor as any));
        }
        break;
      case "\\xcancel":
        ((a as any).setAttribute as any)("notation", "updiagonalstrike downdiagonalstrike");
        break;
    }
    return (r as any).backgroundColor && ((a as any).setAttribute as any)("mathbackground", (r as any).backgroundColor), a;
  };
(B as any)({
  type: "enclose",
  names: ["\\colorbox"],
  props: {
    numArgs: 2,
    allowedInText: !0,
    argTypes: ["color", "text"]
  },
  handler(r: any, e: any, t: any): any {
    var {
        parser: a,
        funcName: n
      }: any = r,
      l: any = ((H as any)((e as any)[0], "color-token") as any).color,
      u: any = (e as any)[1];
    return {
      type: "enclose",
      mode: (a as any).mode,
      label: n,
      backgroundColor: l,
      body: u
    };
  },
  htmlBuilder: Ye,
  mathmlBuilder: We
});
(B as any)({
  type: "enclose",
  names: ["\\fcolorbox"],
  props: {
    numArgs: 3,
    allowedInText: !0,
    argTypes: ["color", "color", "text"]
  },
  handler(r: any, e: any, t: any): any {
    var {
        parser: a,
        funcName: n
      }: any = r,
      l: any = ((H as any)((e as any)[0], "color-token") as any).color,
      u: any = ((H as any)((e as any)[1], "color-token") as any).color,
      h: any = (e as any)[2];
    return {
      type: "enclose",
      mode: (a as any).mode,
      label: n,
      backgroundColor: u,
      borderColor: l,
      body: h
    };
  },
  htmlBuilder: Ye,
  mathmlBuilder: We
});
(B as any)({
  type: "enclose",
  names: ["\\fbox"],
  props: {
    numArgs: 1,
    argTypes: ["hbox"],
    allowedInText: !0
  },
  handler(r: any, e: any): any {
    var {
      parser: t
    }: any = r;
    return {
      type: "enclose",
      mode: (t as any).mode,
      label: "\\fbox",
      body: (e as any)[0]
    };
  }
});
(B as any)({
  type: "enclose",
  names: ["\\cancel", "\\bcancel", "\\xcancel", "\\phase"],
  props: {
    numArgs: 1
  },
  handler(r: any, e: any): any {
    var {
        parser: t,
        funcName: a
      }: any = r,
      n: any = (e as any)[0];
    return {
      type: "enclose",
      mode: (t as any).mode,
      label: a,
      body: n
    };
  },
  htmlBuilder: Ye,
  mathmlBuilder: We
});
(B as any)({
  type: "enclose",
  names: ["\\sout"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler(r: any, e: any): any {
    var {
      parser: t,
      funcName: a
    }: any = r;
    ((t as any).mode as any) === ("math" as any) && (((t as any).settings as any).reportNonstrict as any)("mathVsSout", "LaTeX's \\sout works only in text mode");
    var n: any = (e as any)[0];
    return {
      type: "enclose",
      mode: (t as any).mode,
      label: a,
      body: n
    };
  },
  htmlBuilder: Ye,
  mathmlBuilder: We
});
(B as any)({
  type: "enclose",
  names: ["\\angl"],
  props: {
    numArgs: 1,
    argTypes: ["hbox"],
    allowedInText: !1
  },
  handler(r: any, e: any): any {
    var {
      parser: t
    }: any = r;
    return {
      type: "enclose",
      mode: (t as any).mode,
      label: "\\angl",
      body: (e as any)[0]
    };
  }
});
var u1: any = {};
function S0(this: any, r: any): any {
  for (var {
      type: e,
      names: t,
      props: a,
      handler: n,
      htmlBuilder: l,
      mathmlBuilder: u
    }: any = r, h: any = {
      type: e,
      numArgs: (a as any).numArgs || 0,
      allowedInText: !1,
      numOptionalArgs: 0,
      handler: n
    }, c: any = 0; (c as any) < ((t as any).length as any); ++c) (u1 as any)[(t as any)[c]] = h;
  l && ((Re as any)[e] = l), u && ((Ie as any)[e] = u);
}
var o1: any = {};
function m(this: any, r: any, e: any): any {
  (o1 as any)[r] = e;
}
class c0 {
  declare end: any;
  declare start: any;
  declare lexer: any;
  [key: string]: any;
  constructor(e: any, t: any, a: any) {
    (this as any).lexer = e, (this as any).start = t, (this as any).end = a;
  }
  static range(e: any, t: any): any {
    return t ? !e || !(e as any).loc || !(t as any).loc || (((e as any).loc as any).lexer as any) !== (((t as any).loc as any).lexer as any) ? null : new (c0 as any)(((e as any).loc as any).lexer, ((e as any).loc as any).start, ((t as any).loc as any).end) : e && (e as any).loc;
  }
}
class d0 {
  declare loc: any;
  declare text: any;
  [key: string]: any;
  constructor(e: any, t: any) {
    (this as any).text = e, (this as any).loc = t;
  }
  range(e: any, t: any): any {
    return new (d0 as any)(t, ((c0 as any).range as any)(this, e));
  }
}
function cr(this: any, r: any): any {
  var e: any = [];
  ((r as any).consumeSpaces as any)();
  var t: any = (((r as any).fetch as any)() as any).text;
  for ((t as any) === ("\\relax" as any) && (((r as any).consume as any)(), ((r as any).consumeSpaces as any)(), t = (((r as any).fetch as any)() as any).text); (t as any) === ("\\hline" as any) || (t as any) === ("\\hdashline" as any);) ((r as any).consume as any)(), ((e as any).push as any)((t as any) === ("\\hdashline" as any)), ((r as any).consumeSpaces as any)(), t = (((r as any).fetch as any)() as any).text;
  return e;
}
var $e: any = (r: any): any => {
    var e: any = ((r as any).parser as any).settings;
    if (!(e as any).displayMode) throw new (S as any)((("{" as any) + ((r as any).envName as any) as any) + ("} can be used only in display mode." as any));
  },
  Ka: any = new (Set as any)(["gather", "gather*"]);
function Ht(this: any, r: any): any {
  if (!((r as any).includes as any)("ed")) return !((r as any).includes as any)("*");
}
function V0(this: any, r: any, e: any, t: any): any {
  var {
    hskipBeforeAndAfter: a,
    addJot: n,
    cols: l,
    arraystretch: u,
    colSeparationType: h,
    autoTag: c,
    singleRow: v,
    emptySingleRow: g,
    maxNumCols: b,
    leqno: y
  }: any = e;
  if ((((r as any).gullet as any).beginGroup as any)(), v || ((((r as any).gullet as any).macros as any).set as any)("\\cr", "\\\\\\relax"), !u) {
    var x: any = (((r as any).gullet as any).expandMacroAsText as any)("\\arraystretch");
    if ((x as any) == (null as any)) u = 1;else if (u = (parseFloat as any)(x), !u || (u as any) < (0 as any)) throw new (S as any)(("Invalid \\arraystretch: " as any) + (x as any));
  }
  (((r as any).gullet as any).beginGroup as any)();
  var M: any = [],
    T: any = [M],
    C: any = [],
    q: any = [],
    I: any = (c as any) != (null as any) ? [] : void 0;
  function O(this: any): any {
    c && ((((r as any).gullet as any).macros as any).set as any)("\\@eqnsw", "1", !0);
  }
  function F(this: any): any {
    I && (((((r as any).gullet as any).macros as any).get as any)("\\df@tag") ? (((I as any).push as any)(((r as any).subparse as any)([new (d0 as any)("\\df@tag")])), ((((r as any).gullet as any).macros as any).set as any)("\\df@tag", void 0, !0)) : ((I as any).push as any)(!!c && (((((r as any).gullet as any).macros as any).get as any)("\\@eqnsw") as any) === ("1" as any)));
  }
  for ((O as any)(), ((q as any).push as any)((cr as any)(r));;) {
    var V: any = ((r as any).parseExpression as any)(!1, v ? "\\end" : "\\\\");
    (((r as any).gullet as any).endGroup as any)(), (((r as any).gullet as any).beginGroup as any)();
    var L: any = {
      type: "ordgroup",
      mode: (r as any).mode,
      body: V
    };
    t && (L = {
      type: "styling",
      mode: (r as any).mode,
      style: t,
      body: [L]
    }), ((M as any).push as any)(L);
    var P: any = (((r as any).fetch as any)() as any).text;
    if ((P as any) === ("&" as any)) {
      if (b && ((M as any).length as any) === (b as any)) {
        if (v || h) throw new (S as any)("Too many tab characters: &", (r as any).nextToken);
        (((r as any).settings as any).reportNonstrict as any)("textEnv", "Too few columns specified in the {array} column argument.");
      }
      ((r as any).consume as any)();
    } else if ((P as any) === ("\\end" as any)) {
      (F as any)(), ((M as any).length as any) === (1 as any) && ((L as any).type as any) === ("styling" as any) && (((L as any).body as any).length as any) === (1 as any) && ((((L as any).body as any)[0] as any).type as any) === ("ordgroup" as any) && (((((L as any).body as any)[0] as any).body as any).length as any) === (0 as any) && (((T as any).length as any) > (1 as any) || !g) && ((T as any).pop as any)(), ((q as any).length as any) < (((T as any).length as any) + (1 as any) as any) && ((q as any).push as any)([]);
      break;
    } else if ((P as any) === ("\\\\" as any)) {
      ((r as any).consume as any)();
      var W: any = void 0;
      (((((r as any).gullet as any).future as any)() as any).text as any) !== (" " as any) && (W = ((r as any).parseSizeGroup as any)(!0)), ((C as any).push as any)(W ? (W as any).value : null), (F as any)(), ((q as any).push as any)((cr as any)(r)), M = [], ((T as any).push as any)(M), (O as any)();
    } else throw new (S as any)("Expected & or \\\\ or \\cr or \\end", (r as any).nextToken);
  }
  return (((r as any).gullet as any).endGroup as any)(), (((r as any).gullet as any).endGroup as any)(), {
    type: "array",
    mode: (r as any).mode,
    addJot: n,
    arraystretch: u,
    body: T,
    cols: l,
    rowGaps: C,
    hskipBeforeAndAfter: a,
    hLinesBeforeRow: q,
    colSeparationType: h,
    tags: I,
    leqno: y
  };
}
function Ft(this: any, r: any): any {
  return (((r as any).slice as any)(0, 1) as any) === ("d" as any) ? "display" : "text";
}
var z0: any = function (this: any, e: any, t: any): any {
    var a: any,
      n: any,
      l: any = ((e as any).body as any).length,
      u: any = (e as any).hLinesBeforeRow,
      h: any = 0,
      c: any = new (Array as any)(l),
      v: any = [],
      g: any = ((Math as any).max as any)((((t as any).fontMetrics as any)() as any).arrayRuleWidth, (t as any).minRuleThickness),
      b: any = (1 as any) / ((((t as any).fontMetrics as any)() as any).ptPerEm as any),
      y: any = (5 as any) * (b as any);
    if ((e as any).colSeparationType && ((e as any).colSeparationType as any) === ("small" as any)) {
      var x: any = (((t as any).havingStyle as any)((N as any).SCRIPT) as any).sizeMultiplier;
      y = (.2778 as any) * ((x as any) / ((t as any).sizeMultiplier as any) as any);
    }
    var M: any = ((e as any).colSeparationType as any) === ("CD" as any) ? (K as any)({
        number: 3,
        unit: "ex"
      }, t) : (12 as any) * (b as any),
      T: any = (3 as any) * (b as any),
      C: any = ((e as any).arraystretch as any) * (M as any),
      q: any = (.7 as any) * (C as any),
      I: any = (.3 as any) * (C as any),
      O: any = 0;
    function F(this: any, be: any): any {
      for (var ye: any = 0; (ye as any) < ((be as any).length as any); ++ye) (ye as any) > (0 as any) && (O += .25), ((v as any).push as any)({
        pos: O,
        isDashed: (be as any)[ye]
      });
    }
    for ((F as any)((u as any)[0]), a = 0; (a as any) < (((e as any).body as any).length as any); ++a) {
      var V: any = ((e as any).body as any)[a],
        L: any = q,
        P: any = I;
      (h as any) < ((V as any).length as any) && (h = (V as any).length);
      var W: any = new (Array as any)((V as any).length);
      for (n = 0; (n as any) < ((V as any).length as any); ++n) {
        var X: any = (U as any)((V as any)[n], t);
        (P as any) < ((X as any).depth as any) && (P = (X as any).depth), (L as any) < ((X as any).height as any) && (L = (X as any).height), (W as any)[n] = X;
      }
      var h0: any = ((e as any).rowGaps as any)[a],
        i0: any = 0;
      h0 && (i0 = (K as any)(h0, t), (i0 as any) > (0 as any) && (i0 += I, (P as any) < (i0 as any) && (P = i0), i0 = 0)), (e as any).addJot && (a as any) < ((((e as any).body as any).length as any) - (1 as any) as any) && (P += T), (W as any).height = L, (W as any).depth = P, O += L, (W as any).pos = O, O += (P as any) + (i0 as any), (c as any)[a] = W, (F as any)((u as any)[(a as any) + (1 as any)]);
    }
    var t0: any = ((O as any) / (2 as any) as any) + ((((t as any).fontMetrics as any)() as any).axisHeight as any),
      X0: any = (e as any).cols || [],
      m0: any = [],
      y0: any,
      R0: any,
      j0: any = [];
    if ((e as any).tags && (((e as any).tags as any).some as any)((be: any): any => be)) for (a = 0; (a as any) < (l as any); ++a) {
      var Z0: any = (c as any)[a],
        Ze: any = ((Z0 as any).pos as any) - (t0 as any),
        I0: any = ((e as any).tags as any)[a],
        N0: any = void 0;
      (I0 as any) === (!0 as any) ? N0 = (k as any)(["eqn-num"], [], t) : (I0 as any) === (!1 as any) ? N0 = (k as any)([], [], t) : N0 = (k as any)([], (a0 as any)(I0, t, !0), t), (N0 as any).depth = (Z0 as any).depth, (N0 as any).height = (Z0 as any).height, ((j0 as any).push as any)({
        type: "elem",
        elem: N0,
        shift: Ze
      });
    }
    for (n = 0, R0 = 0; (n as any) < (h as any) || (R0 as any) < ((X0 as any).length as any); ++n, ++R0) {
      for (var se: any, x0: any = (X0 as any)[R0], fe: any = !0; ((((Vt = x0) as any) == (null as any) ? void 0 : (Vt as any).type) as any) === ("separator" as any);) {
        var Vt: any;
        if (fe || (y0 = (k as any)(["arraycolsep"], []), ((y0 as any).style as any).width = (A as any)((((t as any).fontMetrics as any)() as any).doubleRuleSep), ((m0 as any).push as any)(y0)), ((x0 as any).separator as any) === ("|" as any) || ((x0 as any).separator as any) === (":" as any)) {
          var M1: any = ((x0 as any).separator as any) === ("|" as any) ? "solid" : "dashed",
            K0: any = (k as any)(["vertical-separator"], [], t);
          ((K0 as any).style as any).height = (A as any)(O), ((K0 as any).style as any).borderRightWidth = (A as any)(g), ((K0 as any).style as any).borderRightStyle = M1, ((K0 as any).style as any).margin = ("0 " as any) + ((A as any)((-g as any) / (2 as any)) as any);
          var Xt: any = (O as any) - (t0 as any);
          Xt && (((K0 as any).style as any).verticalAlign = (A as any)(-Xt)), ((m0 as any).push as any)(K0);
        } else throw new (S as any)(("Invalid separator type: " as any) + ((x0 as any).separator as any));
        R0++, x0 = (X0 as any)[R0], fe = !1;
      }
      if (!((n as any) >= (h as any))) {
        var J0: any = void 0;
        if ((n as any) > (0 as any) || (e as any).hskipBeforeAndAfter) {
          var Yt: any, Wt: any;
          J0 = ((Yt = ((Wt = x0) as any) == (null as any) ? void 0 : (Wt as any).pregap) as any) != (null as any) ? Yt : y, (J0 as any) !== (0 as any) && (y0 = (k as any)(["arraycolsep"], []), ((y0 as any).style as any).width = (A as any)(J0), ((m0 as any).push as any)(y0));
        }
        var $t: any = [];
        for (a = 0; (a as any) < (l as any); ++a) {
          var ve: any = (c as any)[a],
            pe: any = (ve as any)[n];
          if (pe) {
            var T1: any = ((ve as any).pos as any) - (t0 as any);
            (pe as any).depth = (ve as any).depth, (pe as any).height = (ve as any).height, (($t as any).push as any)({
              type: "elem",
              elem: pe,
              shift: T1
            });
          }
        }
        var B1: any = (G as any)({
            positionType: "individualShift",
            children: $t
          }),
          D1: any = (k as any)([("col-align-" as any) + (((((se = x0) as any) == (null as any) ? void 0 : (se as any).align) || "c") as any)], [B1]);
        if (((m0 as any).push as any)(D1), (n as any) < ((h as any) - (1 as any) as any) || (e as any).hskipBeforeAndAfter) {
          var jt: any, Zt: any;
          J0 = ((jt = ((Zt = x0) as any) == (null as any) ? void 0 : (Zt as any).postgap) as any) != (null as any) ? jt : y, (J0 as any) !== (0 as any) && (y0 = (k as any)(["arraycolsep"], []), ((y0 as any).style as any).width = (A as any)(J0), ((m0 as any).push as any)(y0));
        }
      }
    }
    var ge: any = (k as any)(["mtable"], m0);
    if (((v as any).length as any) > (0 as any)) {
      for (var C1: any = (te as any)("hline", t, g), q1: any = (te as any)("hdashline", t, g), Ke: any = [{
          type: "elem",
          elem: ge,
          shift: 0
        }]; ((v as any).length as any) > (0 as any);) {
        var Kt: any = ((v as any).pop as any)(),
          Jt: any = ((Kt as any).pos as any) - (t0 as any);
        (Kt as any).isDashed ? ((Ke as any).push as any)({
          type: "elem",
          elem: q1,
          shift: Jt
        }) : ((Ke as any).push as any)({
          type: "elem",
          elem: C1,
          shift: Jt
        });
      }
      ge = (G as any)({
        positionType: "individualShift",
        children: Ke
      });
    }
    if (((j0 as any).length as any) === (0 as any)) return (k as any)(["mord"], [ge], t);
    var E1: any = (G as any)({
        positionType: "individualShift",
        children: j0
      }),
      R1: any = (k as any)(["tag"], [E1], t);
    return (E0 as any)([ge, R1]);
  },
  Ja: any = {
    c: "center ",
    l: "left ",
    r: "right "
  },
  A0: any = function (this: any, e: any, t: any): any {
    for (var a: any = [], n: any = new (z as any)("mtd", [], ["mtr-glue"]), l: any = new (z as any)("mtd", [], ["mml-eqn-num"]), u: any = 0; (u as any) < (((e as any).body as any).length as any); u++) {
      for (var h: any = ((e as any).body as any)[u], c: any = [], v: any = 0; (v as any) < ((h as any).length as any); v++) ((c as any).push as any)(new (z as any)("mtd", [(Y as any)((h as any)[v], t)]));
      (e as any).tags && ((e as any).tags as any)[u] && (((c as any).unshift as any)(n), ((c as any).push as any)(n), (e as any).leqno ? ((c as any).unshift as any)(l) : ((c as any).push as any)(l)), ((a as any).push as any)(new (z as any)("mtr", c));
    }
    var g: any = new (z as any)("mtable", a),
      b: any = ((e as any).arraystretch as any) === (.5 as any) ? .1 : (((.16 as any) + ((e as any).arraystretch as any) as any) - (1 as any) as any) + (((e as any).addJot ? .09 : 0) as any);
    ((g as any).setAttribute as any)("rowspacing", (A as any)(b));
    var y: any = "",
      x: any = "";
    if ((e as any).cols && (((e as any).cols as any).length as any) > (0 as any)) {
      var M: any = (e as any).cols,
        T: any = "",
        C: any = !1,
        q: any = 0,
        I: any = (M as any).length;
      (((M as any)[0] as any).type as any) === ("separator" as any) && (y += "top ", q = 1), (((M as any)[((M as any).length as any) - (1 as any)] as any).type as any) === ("separator" as any) && (y += "bottom ", I -= 1);
      for (var O: any = q; (O as any) < (I as any); O++) {
        var F: any = (M as any)[O];
        ((F as any).type as any) === ("align" as any) ? (x += (Ja as any)[(F as any).align], C && (T += "none "), C = !0) : ((F as any).type as any) === ("separator" as any) && C && (T += ((F as any).separator as any) === ("|" as any) ? "solid " : "dashed ", C = !1);
      }
      ((g as any).setAttribute as any)("columnalign", ((x as any).trim as any)()), ((/[sd]/ as any).test as any)(T) && ((g as any).setAttribute as any)("columnlines", ((T as any).trim as any)());
    }
    if (((e as any).colSeparationType as any) === ("align" as any)) {
      for (var V: any = (e as any).cols || [], L: any = "", P: any = 1; (P as any) < ((V as any).length as any); P++) L += (P as any) % (2 as any) ? "0em " : "1em ";
      ((g as any).setAttribute as any)("columnspacing", ((L as any).trim as any)());
    } else ((e as any).colSeparationType as any) === ("alignat" as any) || ((e as any).colSeparationType as any) === ("gather" as any) ? ((g as any).setAttribute as any)("columnspacing", "0em") : ((e as any).colSeparationType as any) === ("small" as any) ? ((g as any).setAttribute as any)("columnspacing", "0.2778em") : ((e as any).colSeparationType as any) === ("CD" as any) ? ((g as any).setAttribute as any)("columnspacing", "0.5em") : ((g as any).setAttribute as any)("columnspacing", "1em");
    var W: any = "",
      X: any = (e as any).hLinesBeforeRow;
    y += (((X as any)[0] as any).length as any) > (0 as any) ? "left " : "", y += (((X as any)[((X as any).length as any) - (1 as any)] as any).length as any) > (0 as any) ? "right " : "";
    for (var h0: any = 1; (h0 as any) < (((X as any).length as any) - (1 as any) as any); h0++) W += (((X as any)[h0] as any).length as any) === (0 as any) ? "none " : ((X as any)[h0] as any)[0] ? "dashed " : "solid ";
    return ((/[sd]/ as any).test as any)(W) && ((g as any).setAttribute as any)("rowlines", ((W as any).trim as any)()), (y as any) !== ("" as any) && (g = new (z as any)("menclose", [g]), ((g as any).setAttribute as any)("notation", ((y as any).trim as any)())), (e as any).arraystretch && ((e as any).arraystretch as any) < (1 as any) && (g = new (z as any)("mstyle", [g]), ((g as any).setAttribute as any)("scriptlevel", "1")), g;
  },
  h1: any = function (this: any, e: any, t: any): any {
    (((e as any).envName as any).includes as any)("ed") || ($e as any)(e);
    var a: any = [],
      n: any = (((e as any).envName as any).includes as any)("at") ? "alignat" : "align",
      l: any = ((e as any).envName as any) === ("split" as any),
      u: any = (V0 as any)((e as any).parser, {
        cols: a,
        addJot: !0,
        autoTag: l ? void 0 : (Ht as any)((e as any).envName),
        emptySingleRow: !0,
        colSeparationType: n,
        maxNumCols: l ? 2 : void 0,
        leqno: (((e as any).parser as any).settings as any).leqno
      }, "display"),
      h: any = 0,
      c: any = 0,
      v: any = {
        type: "ordgroup",
        mode: (e as any).mode,
        body: []
      };
    if ((t as any)[0] && (((t as any)[0] as any).type as any) === ("ordgroup" as any)) {
      for (var g: any = "", b: any = 0; (b as any) < ((((t as any)[0] as any).body as any).length as any); b++) {
        var y: any = (H as any)((((t as any)[0] as any).body as any)[b], "textord");
        g += (y as any).text;
      }
      h = (Number as any)(g), c = (h as any) * (2 as any);
    }
    var x: any = !c;
    (((u as any).body as any).forEach as any)(function (this: any, q: any): any {
      for (var I: any = 1; (I as any) < ((q as any).length as any); I += 2) {
        var O: any = (H as any)((q as any)[I], "styling"),
          F: any = (H as any)(((O as any).body as any)[0], "ordgroup");
        (((F as any).body as any).unshift as any)(v);
      }
      if (x) (c as any) < ((q as any).length as any) && (c = (q as any).length);else {
        var V: any = ((q as any).length as any) / (2 as any);
        if ((h as any) < (V as any)) throw new (S as any)(("Too many math in a row: " as any) + (((("expected " as any) + (h as any) as any) + (", but got " as any) as any) + (V as any) as any), (q as any)[0]);
      }
    });
    for (var M: any = 0; (M as any) < (c as any); ++M) {
      var T: any = "r",
        C: any = 0;
      ((M as any) % (2 as any) as any) === (1 as any) ? T = "l" : (M as any) > (0 as any) && x && (C = 1), (a as any)[M] = {
        type: "align",
        align: T,
        pregap: C,
        postgap: 0
      };
    }
    return (u as any).colSeparationType = x ? "align" : "alignat", u;
  };
(S0 as any)({
  type: "array",
  names: ["array", "darray"],
  props: {
    numArgs: 1
  },
  handler(r: any, e: any): any {
    var t: any = (Ue as any)((e as any)[0]),
      a: any = t ? [(e as any)[0]] : ((H as any)((e as any)[0], "ordgroup") as any).body,
      n: any = ((a as any).map as any)(function (this: any, u: any): any {
        var h: any = (Ge as any)(u),
          c: any = (h as any).text;
        if ((("lcr" as any).includes as any)(c)) return {
          type: "align",
          align: c
        };
        if ((c as any) === ("|" as any)) return {
          type: "separator",
          separator: "|"
        };
        if ((c as any) === (":" as any)) return {
          type: "separator",
          separator: ":"
        };
        throw new (S as any)(("Unknown column alignment: " as any) + (c as any), u);
      }),
      l: any = {
        cols: n,
        hskipBeforeAndAfter: !0,
        maxNumCols: (n as any).length
      };
    return (V0 as any)((r as any).parser, l, (Ft as any)((r as any).envName));
  },
  htmlBuilder: z0,
  mathmlBuilder: A0
});
(S0 as any)({
  type: "array",
  names: ["matrix", "pmatrix", "bmatrix", "Bmatrix", "vmatrix", "Vmatrix", "matrix*", "pmatrix*", "bmatrix*", "Bmatrix*", "vmatrix*", "Vmatrix*"],
  props: {
    numArgs: 0
  },
  handler(r: any): any {
    var e: any = ({
        matrix: null,
        pmatrix: ["(", ")"],
        bmatrix: ["[", "]"],
        Bmatrix: ["\\{", "\\}"],
        vmatrix: ["|", "|"],
        Vmatrix: ["\\Vert", "\\Vert"]
      } as any)[(((r as any).envName as any).replace as any)("*", "")],
      t: any = "c",
      a: any = {
        hskipBeforeAndAfter: !1,
        cols: [{
          type: "align",
          align: t
        }]
      };
    if (((((r as any).envName as any).charAt as any)((((r as any).envName as any).length as any) - (1 as any)) as any) === ("*" as any)) {
      var n: any = (r as any).parser;
      if (((n as any).consumeSpaces as any)(), ((((n as any).fetch as any)() as any).text as any) === ("[" as any)) {
        if (((n as any).consume as any)(), ((n as any).consumeSpaces as any)(), t = (((n as any).fetch as any)() as any).text, !(("lcr" as any).includes as any)(t)) throw new (S as any)("Expected l or c or r", (n as any).nextToken);
        ((n as any).consume as any)(), ((n as any).consumeSpaces as any)(), ((n as any).expect as any)("]"), ((n as any).consume as any)(), (a as any).cols = [{
          type: "align",
          align: t
        }];
      }
    }
    var l: any = (V0 as any)((r as any).parser, a, (Ft as any)((r as any).envName)),
      u: any = ((Math as any).max as any)(0, ...(((l as any).body as any).map as any)((h: any): any => (h as any).length));
    return (l as any).cols = ((new (Array as any)(u) as any).fill as any)({
      type: "align",
      align: t
    }), e ? {
      type: "leftright",
      mode: (r as any).mode,
      body: [l],
      left: (e as any)[0],
      right: (e as any)[1],
      rightColor: void 0
    } : l;
  },
  htmlBuilder: z0,
  mathmlBuilder: A0
});
(S0 as any)({
  type: "array",
  names: ["smallmatrix"],
  props: {
    numArgs: 0
  },
  handler(r: any): any {
    var e: any = {
        arraystretch: .5
      },
      t: any = (V0 as any)((r as any).parser, e, "script");
    return (t as any).colSeparationType = "small", t;
  },
  htmlBuilder: z0,
  mathmlBuilder: A0
});
(S0 as any)({
  type: "array",
  names: ["subarray"],
  props: {
    numArgs: 1
  },
  handler(r: any, e: any): any {
    var t: any = (Ue as any)((e as any)[0]),
      a: any = t ? [(e as any)[0]] : ((H as any)((e as any)[0], "ordgroup") as any).body,
      n: any = ((a as any).map as any)(function (this: any, h: any): any {
        var c: any = (Ge as any)(h),
          v: any = (c as any).text;
        if ((("lc" as any).includes as any)(v)) return {
          type: "align",
          align: v
        };
        throw new (S as any)(("Unknown column alignment: " as any) + (v as any), h);
      });
    if (((n as any).length as any) > (1 as any)) throw new (S as any)("{subarray} can contain only one column");
    var l: any = {
        cols: n,
        hskipBeforeAndAfter: !1,
        arraystretch: .5
      },
      u: any = (V0 as any)((r as any).parser, l, "script");
    if ((((u as any).body as any).length as any) > (0 as any) && ((((u as any).body as any)[0] as any).length as any) > (1 as any)) throw new (S as any)("{subarray} can contain only one column");
    return u;
  },
  htmlBuilder: z0,
  mathmlBuilder: A0
});
(S0 as any)({
  type: "array",
  names: ["cases", "dcases", "rcases", "drcases"],
  props: {
    numArgs: 0
  },
  handler(r: any): any {
    var e: any = {
        arraystretch: 1.2,
        cols: [{
          type: "align",
          align: "l",
          pregap: 0,
          postgap: 1
        }, {
          type: "align",
          align: "l",
          pregap: 0,
          postgap: 0
        }]
      },
      t: any = (V0 as any)((r as any).parser, e, (Ft as any)((r as any).envName));
    return {
      type: "leftright",
      mode: (r as any).mode,
      body: [t],
      left: (((r as any).envName as any).includes as any)("r") ? "." : "\\{",
      right: (((r as any).envName as any).includes as any)("r") ? "\\}" : ".",
      rightColor: void 0
    };
  },
  htmlBuilder: z0,
  mathmlBuilder: A0
});
(S0 as any)({
  type: "array",
  names: ["align", "align*", "aligned", "split"],
  props: {
    numArgs: 0
  },
  handler: h1,
  htmlBuilder: z0,
  mathmlBuilder: A0
});
(S0 as any)({
  type: "array",
  names: ["gathered", "gather", "gather*"],
  props: {
    numArgs: 0
  },
  handler(r: any): any {
    ((Ka as any).has as any)((r as any).envName) && ($e as any)(r);
    var e: any = {
      cols: [{
        type: "align",
        align: "c"
      }],
      addJot: !0,
      colSeparationType: "gather",
      autoTag: (Ht as any)((r as any).envName),
      emptySingleRow: !0,
      leqno: (((r as any).parser as any).settings as any).leqno
    };
    return (V0 as any)((r as any).parser, e, "display");
  },
  htmlBuilder: z0,
  mathmlBuilder: A0
});
(S0 as any)({
  type: "array",
  names: ["alignat", "alignat*", "alignedat"],
  props: {
    numArgs: 1
  },
  handler: h1,
  htmlBuilder: z0,
  mathmlBuilder: A0
});
(S0 as any)({
  type: "array",
  names: ["equation", "equation*"],
  props: {
    numArgs: 0
  },
  handler(r: any): any {
    ($e as any)(r);
    var e: any = {
      autoTag: (Ht as any)((r as any).envName),
      emptySingleRow: !0,
      singleRow: !0,
      maxNumCols: 1,
      leqno: (((r as any).parser as any).settings as any).leqno
    };
    return (V0 as any)((r as any).parser, e, "display");
  },
  htmlBuilder: z0,
  mathmlBuilder: A0
});
(S0 as any)({
  type: "array",
  names: ["CD"],
  props: {
    numArgs: 0
  },
  handler(r: any): any {
    return ($e as any)(r), (Fa as any)((r as any).parser);
  },
  htmlBuilder: z0,
  mathmlBuilder: A0
});
(m as any)("\\nonumber", "\\gdef\\@eqnsw{0}");
(m as any)("\\notag", "\\nonumber");
(B as any)({
  type: "text",
  names: ["\\hline", "\\hdashline"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    allowedInMath: !0
  },
  handler(r: any, e: any): any {
    throw new (S as any)(((r as any).funcName as any) + (" valid only within array environment" as any));
  }
});
var dr: any = u1;
(B as any)({
  type: "environment",
  names: ["\\begin", "\\end"],
  props: {
    numArgs: 1,
    argTypes: ["text"]
  },
  handler(r: any, e: any): any {
    var {
        parser: t,
        funcName: a
      }: any = r,
      n: any = (e as any)[0];
    if (((n as any).type as any) !== ("ordgroup" as any)) throw new (S as any)("Invalid environment name", n);
    for (var l: any = "", u: any = 0; (u as any) < (((n as any).body as any).length as any); ++u) l += ((H as any)(((n as any).body as any)[u], "textord") as any).text;
    if ((a as any) === ("\\begin" as any)) {
      if (!((dr as any).hasOwnProperty as any)(l)) throw new (S as any)(("No such environment: " as any) + (l as any), n);
      var h: any = (dr as any)[l],
        {
          args: c,
          optArgs: v
        }: any = ((t as any).parseArguments as any)((("\\begin{" as any) + (l as any) as any) + ("}" as any), h),
        g: any = {
          mode: (t as any).mode,
          envName: l,
          parser: t
        },
        b: any = ((h as any).handler as any)(g, c, v);
      ((t as any).expect as any)("\\end", !1);
      var y: any = (t as any).nextToken,
        x: any = (H as any)(((t as any).parseFunction as any)(), "environment");
      if (((x as any).name as any) !== (l as any)) throw new (S as any)((((("Mismatch: \\begin{" as any) + (l as any) as any) + ("} matched by \\end{" as any) as any) + ((x as any).name as any) as any) + ("}" as any), y);
      return b;
    }
    return {
      type: "environment",
      mode: (t as any).mode,
      name: l,
      nameGroup: n
    };
  }
});
var m1: any = (r: any, e: any): any => {
    var t: any = (r as any).font,
      a: any = ((e as any).withFont as any)(t);
    return (U as any)((r as any).body, a);
  },
  c1: any = (r: any, e: any): any => {
    var t: any = (r as any).font,
      a: any = ((e as any).withFont as any)(t);
    return (Y as any)((r as any).body, a);
  },
  fr: any = {
    "\\Bbb": "\\mathbb",
    "\\bold": "\\mathbf",
    "\\frak": "\\mathfrak",
    "\\bm": "\\boldsymbol"
  };
(B as any)({
  type: "font",
  names: ["\\mathrm", "\\mathit", "\\mathbf", "\\mathnormal", "\\mathsfit", "\\mathbb", "\\mathcal", "\\mathfrak", "\\mathscr", "\\mathsf", "\\mathtt", "\\Bbb", "\\bold", "\\frak"],
  props: {
    numArgs: 1,
    allowedInArgument: !0
  },
  handler: (r: any, e: any): any => {
    var {
        parser: t,
        funcName: a
      }: any = r,
      n: any = (Ne as any)((e as any)[0]),
      l: any = a;
    return l in fr && (l = (fr as any)[l]), {
      type: "font",
      mode: (t as any).mode,
      font: ((l as any).slice as any)(1),
      body: n
    };
  },
  htmlBuilder: m1,
  mathmlBuilder: c1
});
(B as any)({
  type: "mclass",
  names: ["\\boldsymbol", "\\bm"],
  props: {
    numArgs: 1
  },
  handler: (r: any, e: any): any => {
    var {
        parser: t
      }: any = r,
      a: any = (e as any)[0];
    return {
      type: "mclass",
      mode: (t as any).mode,
      mclass: (Ve as any)(a),
      body: [{
        type: "font",
        mode: (t as any).mode,
        font: "boldsymbol",
        body: a
      }],
      isCharacterBox: (C0 as any)(a)
    };
  }
});
(B as any)({
  type: "font",
  names: ["\\rm", "\\sf", "\\tt", "\\bf", "\\it", "\\cal"],
  props: {
    numArgs: 0,
    allowedInText: !0
  },
  handler: (r: any, e: any): any => {
    var {
        parser: t,
        funcName: a,
        breakOnTokenText: n
      }: any = r,
      {
        mode: l
      }: any = t,
      u: any = ((t as any).parseExpression as any)(!0, n),
      h: any = ("math" as any) + (((a as any).slice as any)(1) as any);
    return {
      type: "font",
      mode: l,
      font: h,
      body: {
        type: "ordgroup",
        mode: (t as any).mode,
        body: u
      }
    };
  },
  htmlBuilder: m1,
  mathmlBuilder: c1
});
var Qa: any = (r: any, e: any): any => {
    var t: any = (e as any).style,
      a: any = ((t as any).fracNum as any)(),
      n: any = ((t as any).fracDen as any)(),
      l: any;
    l = ((e as any).havingStyle as any)(a);
    var u: any = (U as any)((r as any).numer, l, e);
    if ((r as any).continued) {
      var h: any = (8.5 as any) / ((((e as any).fontMetrics as any)() as any).ptPerEm as any),
        c: any = (3.5 as any) / ((((e as any).fontMetrics as any)() as any).ptPerEm as any);
      (u as any).height = ((u as any).height as any) < (h as any) ? h : (u as any).height, (u as any).depth = ((u as any).depth as any) < (c as any) ? c : (u as any).depth;
    }
    l = ((e as any).havingStyle as any)(n);
    var v: any = (U as any)((r as any).denom, l, e),
      g: any,
      b: any,
      y: any;
    (r as any).hasBarLine ? ((r as any).barSize ? (b = (K as any)((r as any).barSize, e), g = (te as any)("frac-line", e, b)) : g = (te as any)("frac-line", e), b = (g as any).height, y = (g as any).height) : (g = null, b = 0, y = (((e as any).fontMetrics as any)() as any).defaultRuleThickness);
    var x: any, M: any, T: any;
    ((t as any).size as any) === (((N as any).DISPLAY as any).size as any) ? (x = (((e as any).fontMetrics as any)() as any).num1, (b as any) > (0 as any) ? M = (3 as any) * (y as any) : M = (7 as any) * (y as any), T = (((e as any).fontMetrics as any)() as any).denom1) : ((b as any) > (0 as any) ? (x = (((e as any).fontMetrics as any)() as any).num2, M = y) : (x = (((e as any).fontMetrics as any)() as any).num3, M = (3 as any) * (y as any)), T = (((e as any).fontMetrics as any)() as any).denom2);
    var C: any;
    if (g) {
      var I: any = (((e as any).fontMetrics as any)() as any).axisHeight;
      (((x as any) - ((u as any).depth as any) as any) - ((I as any) + ((.5 as any) * (b as any) as any) as any) as any) < (M as any) && (x += (M as any) - (((x as any) - ((u as any).depth as any) as any) - ((I as any) + ((.5 as any) * (b as any) as any) as any) as any)), (((I as any) - ((.5 as any) * (b as any) as any) as any) - (((v as any).height as any) - (T as any) as any) as any) < (M as any) && (T += (M as any) - (((I as any) - ((.5 as any) * (b as any) as any) as any) - (((v as any).height as any) - (T as any) as any) as any));
      var O: any = -((I as any) - ((.5 as any) * (b as any) as any));
      C = (G as any)({
        positionType: "individualShift",
        children: [{
          type: "elem",
          elem: v,
          shift: T
        }, {
          type: "elem",
          elem: g,
          shift: O
        }, {
          type: "elem",
          elem: u,
          shift: -x
        }]
      });
    } else {
      var q: any = ((x as any) - ((u as any).depth as any) as any) - (((v as any).height as any) - (T as any) as any);
      (q as any) < (M as any) && (x += (.5 as any) * ((M as any) - (q as any) as any), T += (.5 as any) * ((M as any) - (q as any) as any)), C = (G as any)({
        positionType: "individualShift",
        children: [{
          type: "elem",
          elem: v,
          shift: T
        }, {
          type: "elem",
          elem: u,
          shift: -x
        }]
      });
    }
    l = ((e as any).havingStyle as any)(t), (C as any).height *= ((l as any).sizeMultiplier as any) / ((e as any).sizeMultiplier as any), (C as any).depth *= ((l as any).sizeMultiplier as any) / ((e as any).sizeMultiplier as any);
    var F: any;
    ((t as any).size as any) === (((N as any).DISPLAY as any).size as any) ? F = (((e as any).fontMetrics as any)() as any).delim1 : ((t as any).size as any) === (((N as any).SCRIPTSCRIPT as any).size as any) ? F = (((((e as any).havingStyle as any)((N as any).SCRIPT) as any).fontMetrics as any)() as any).delim2 : F = (((e as any).fontMetrics as any)() as any).delim2;
    var V: any, L: any;
    return ((r as any).leftDelim as any) == (null as any) ? V = (me as any)(e, ["mopen"]) : V = (At as any)((r as any).leftDelim, F, !0, ((e as any).havingStyle as any)(t), (r as any).mode, ["mopen"]), (r as any).continued ? L = (k as any)([]) : ((r as any).rightDelim as any) == (null as any) ? L = (me as any)(e, ["mclose"]) : L = (At as any)((r as any).rightDelim, F, !0, ((e as any).havingStyle as any)(t), (r as any).mode, ["mclose"]), (k as any)(((["mord"] as any).concat as any)(((l as any).sizingClasses as any)(e)), [V, (k as any)(["mfrac"], [C]), L], e);
  },
  _a: any = (r: any, e: any): any => {
    var t: any = new (z as any)("mfrac", [(Y as any)((r as any).numer, e), (Y as any)((r as any).denom, e)]);
    if (!(r as any).hasBarLine) ((t as any).setAttribute as any)("linethickness", "0px");else if ((r as any).barSize) {
      var a: any = (K as any)((r as any).barSize, e);
      ((t as any).setAttribute as any)("linethickness", (A as any)(a));
    }
    if (((r as any).leftDelim as any) != (null as any) || ((r as any).rightDelim as any) != (null as any)) {
      var n: any = [];
      if (((r as any).leftDelim as any) != (null as any)) {
        var l: any = new (z as any)("mo", [new (_ as any)((((r as any).leftDelim as any).replace as any)("\\", ""))]);
        ((l as any).setAttribute as any)("fence", "true"), ((n as any).push as any)(l);
      }
      if (((n as any).push as any)(t), ((r as any).rightDelim as any) != (null as any)) {
        var u: any = new (z as any)("mo", [new (_ as any)((((r as any).rightDelim as any).replace as any)("\\", ""))]);
        ((u as any).setAttribute as any)("fence", "true"), ((n as any).push as any)(u);
      }
      return (Rt as any)(n);
    }
    return t;
  },
  d1: any = (r: any, e: any): any => {
    if (!e) return r;
    var t: any = {
      type: "styling",
      mode: (r as any).mode,
      style: e,
      body: [r]
    };
    return t;
  };
(B as any)({
  type: "genfrac",
  names: ["\\cfrac", "\\dfrac", "\\frac", "\\tfrac", "\\dbinom", "\\binom", "\\tbinom", "\\\\atopfrac", "\\\\bracefrac", "\\\\brackfrac"],
  props: {
    numArgs: 2,
    allowedInArgument: !0
  },
  handler: (r: any, e: any): any => {
    var {
        parser: t,
        funcName: a
      }: any = r,
      n: any = (e as any)[0],
      l: any = (e as any)[1],
      u: any,
      h: any = null,
      c: any = null;
    switch (a) {
      case "\\cfrac":
      case "\\dfrac":
      case "\\frac":
      case "\\tfrac":
        u = !0;
        break;
      case "\\\\atopfrac":
        u = !1;
        break;
      case "\\dbinom":
      case "\\binom":
      case "\\tbinom":
        u = !1, h = "(", c = ")";
        break;
      case "\\\\bracefrac":
        u = !1, h = "\\{", c = "\\}";
        break;
      case "\\\\brackfrac":
        u = !1, h = "[", c = "]";
        break;
      default:
        throw new (Error as any)("Unrecognized genfrac command");
    }
    var v: any = (a as any) === ("\\cfrac" as any),
      g: any = null;
    return v || ((a as any).startsWith as any)("\\d") ? g = "display" : ((a as any).startsWith as any)("\\t") && (g = "text"), (d1 as any)({
      type: "genfrac",
      mode: (t as any).mode,
      numer: n,
      denom: l,
      continued: v,
      hasBarLine: u,
      leftDelim: h,
      rightDelim: c,
      barSize: null
    }, g);
  },
  htmlBuilder: Qa,
  mathmlBuilder: _a
});
(B as any)({
  type: "infix",
  names: ["\\over", "\\choose", "\\atop", "\\brace", "\\brack"],
  props: {
    numArgs: 0,
    infix: !0
  },
  handler(r: any): any {
    var {
        parser: e,
        funcName: t,
        token: a
      }: any = r,
      n: any;
    switch (t) {
      case "\\over":
        n = "\\frac";
        break;
      case "\\choose":
        n = "\\binom";
        break;
      case "\\atop":
        n = "\\\\atopfrac";
        break;
      case "\\brace":
        n = "\\\\bracefrac";
        break;
      case "\\brack":
        n = "\\\\brackfrac";
        break;
      default:
        throw new (Error as any)("Unrecognized infix genfrac command");
    }
    return {
      type: "infix",
      mode: (e as any).mode,
      replaceWith: n,
      token: a
    };
  }
});
var vr: any = ["display", "text", "script", "scriptscript"],
  pr: any = function (this: any, e: any): any {
    var t: any = null;
    return ((e as any).length as any) > (0 as any) && (t = e, t = (t as any) === ("." as any) ? null : t), t;
  };
(B as any)({
  type: "genfrac",
  names: ["\\genfrac"],
  props: {
    numArgs: 6,
    allowedInArgument: !0,
    argTypes: ["math", "math", "size", "text", "math", "math"]
  },
  handler(r: any, e: any): any {
    var {
        parser: t
      }: any = r,
      a: any = (e as any)[4],
      n: any = (e as any)[5],
      l: any = (Ne as any)((e as any)[0]),
      u: any = ((l as any).type as any) === ("atom" as any) && ((l as any).family as any) === ("open" as any) ? (pr as any)((l as any).text) : null,
      h: any = (Ne as any)((e as any)[1]),
      c: any = ((h as any).type as any) === ("atom" as any) && ((h as any).family as any) === ("close" as any) ? (pr as any)((h as any).text) : null,
      v: any = (H as any)((e as any)[2], "size"),
      g: any,
      b: any = null;
    (v as any).isBlank ? g = !0 : (b = (v as any).value, g = ((b as any).number as any) > (0 as any));
    var y: any = null,
      x: any = (e as any)[3];
    if (((x as any).type as any) === ("ordgroup" as any)) {
      if ((((x as any).body as any).length as any) > (0 as any)) {
        var M: any = (H as any)(((x as any).body as any)[0], "textord");
        y = (vr as any)[(Number as any)((M as any).text)];
      }
    } else x = (H as any)(x, "textord"), y = (vr as any)[(Number as any)((x as any).text)];
    return (d1 as any)({
      type: "genfrac",
      mode: (t as any).mode,
      numer: a,
      denom: n,
      continued: !1,
      hasBarLine: g,
      barSize: b,
      leftDelim: u,
      rightDelim: c
    }, y);
  }
});
(B as any)({
  type: "infix",
  names: ["\\above"],
  props: {
    numArgs: 1,
    argTypes: ["size"],
    infix: !0
  },
  handler(r: any, e: any): any {
    var {
      parser: t,
      funcName: a,
      token: n
    }: any = r;
    return {
      type: "infix",
      mode: (t as any).mode,
      replaceWith: "\\\\abovefrac",
      size: ((H as any)((e as any)[0], "size") as any).value,
      token: n
    };
  }
});
(B as any)({
  type: "genfrac",
  names: ["\\\\abovefrac"],
  props: {
    numArgs: 3,
    argTypes: ["math", "size", "math"]
  },
  handler: (r: any, e: any): any => {
    var {
        parser: t,
        funcName: a
      }: any = r,
      n: any = (e as any)[0],
      l: any = ((H as any)((e as any)[1], "infix") as any).size;
    if (!l) throw new (Error as any)(("\\\\abovefrac expected size, but got " as any) + ((String as any)(l) as any));
    var u: any = (e as any)[2],
      h: any = ((l as any).number as any) > (0 as any);
    return {
      type: "genfrac",
      mode: (t as any).mode,
      numer: n,
      denom: u,
      continued: !1,
      hasBarLine: h,
      barSize: l,
      leftDelim: null,
      rightDelim: null
    };
  }
});
var f1: any = (r: any, e: any): any => {
    var t: any = (e as any).style,
      a: any,
      n: any;
    ((r as any).type as any) === ("supsub" as any) ? (a = (r as any).sup ? (U as any)((r as any).sup, ((e as any).havingStyle as any)(((t as any).sup as any)()), e) : (U as any)((r as any).sub, ((e as any).havingStyle as any)(((t as any).sub as any)()), e), n = (H as any)((r as any).base, "horizBrace")) : n = (H as any)(r, "horizBrace");
    var l: any = (U as any)((n as any).base, ((e as any).havingBaseStyle as any)((N as any).DISPLAY)),
      u: any = (Pe as any)(n, e),
      h: any;
    if ((n as any).isOver ? (h = (G as any)({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: l
      }, {
        type: "kern",
        size: .1
      }, {
        type: "elem",
        elem: u
      }]
    }), (((((((((h as any).children as any)[0] as any).children as any)[0] as any).children as any)[1] as any).classes as any).push as any)("svg-align")) : (h = (G as any)({
      positionType: "bottom",
      positionData: (((l as any).depth as any) + (.1 as any) as any) + ((u as any).height as any),
      children: [{
        type: "elem",
        elem: u
      }, {
        type: "kern",
        size: .1
      }, {
        type: "elem",
        elem: l
      }]
    }), (((((((((h as any).children as any)[0] as any).children as any)[0] as any).children as any)[0] as any).classes as any).push as any)("svg-align")), a) {
      var c: any = (k as any)(["minner", (n as any).isOver ? "mover" : "munder"], [h], e);
      (n as any).isOver ? h = (G as any)({
        positionType: "firstBaseline",
        children: [{
          type: "elem",
          elem: c
        }, {
          type: "kern",
          size: .2
        }, {
          type: "elem",
          elem: a
        }]
      }) : h = (G as any)({
        positionType: "bottom",
        positionData: ((((c as any).depth as any) + (.2 as any) as any) + ((a as any).height as any) as any) + ((a as any).depth as any),
        children: [{
          type: "elem",
          elem: a
        }, {
          type: "kern",
          size: .2
        }, {
          type: "elem",
          elem: c
        }]
      });
    }
    return (k as any)(["minner", (n as any).isOver ? "mover" : "munder"], [h], e);
  },
  e4: any = (r: any, e: any): any => {
    var t: any = (Le as any)((r as any).label);
    return new (z as any)((r as any).isOver ? "mover" : "munder", [(Y as any)((r as any).base, e), t]);
  };
(B as any)({
  type: "horizBrace",
  names: ["\\overbrace", "\\underbrace", "\\overbracket", "\\underbracket"],
  props: {
    numArgs: 1
  },
  handler(r: any, e: any): any {
    var {
      parser: t,
      funcName: a
    }: any = r;
    return {
      type: "horizBrace",
      mode: (t as any).mode,
      label: a,
      isOver: ((a as any).includes as any)("\\over"),
      base: (e as any)[0]
    };
  },
  htmlBuilder: f1,
  mathmlBuilder: e4
});
(B as any)({
  type: "href",
  names: ["\\href"],
  props: {
    numArgs: 2,
    argTypes: ["url", "original"],
    allowedInText: !0
  },
  handler: (r: any, e: any): any => {
    var {
        parser: t
      }: any = r,
      a: any = (e as any)[1],
      n: any = ((H as any)((e as any)[0], "url") as any).url;
    return (((t as any).settings as any).isTrusted as any)({
      command: "\\href",
      url: n
    }) ? {
      type: "href",
      mode: (t as any).mode,
      href: n,
      body: (Q as any)(a)
    } : ((t as any).formatUnsupportedCmd as any)("\\href");
  },
  htmlBuilder: (r: any, e: any): any => {
    var t: any = (a0 as any)((r as any).body, e, !1);
    return (ga as any)((r as any).href, [], t, e);
  },
  mathmlBuilder: (r: any, e: any): any => {
    var t: any = (U0 as any)((r as any).body, e);
    return t instanceof z || (t = new (z as any)("mrow", [t])), ((t as any).setAttribute as any)("href", (r as any).href), t;
  }
});
(B as any)({
  type: "href",
  names: ["\\url"],
  props: {
    numArgs: 1,
    argTypes: ["url"],
    allowedInText: !0
  },
  handler: (r: any, e: any): any => {
    var {
        parser: t
      }: any = r,
      a: any = ((H as any)((e as any)[0], "url") as any).url;
    if (!(((t as any).settings as any).isTrusted as any)({
      command: "\\url",
      url: a
    })) return ((t as any).formatUnsupportedCmd as any)("\\url");
    for (var n: any = [], l: any = 0; (l as any) < ((a as any).length as any); l++) {
      var u: any = (a as any)[l];
      (u as any) === ("~" as any) && (u = "\\textasciitilde"), ((n as any).push as any)({
        type: "textord",
        mode: "text",
        text: u
      });
    }
    var h: any = {
      type: "text",
      mode: (t as any).mode,
      font: "\\texttt",
      body: n
    };
    return {
      type: "href",
      mode: (t as any).mode,
      href: a,
      body: (Q as any)(h)
    };
  }
});
(B as any)({
  type: "hbox",
  names: ["\\hbox"],
  props: {
    numArgs: 1,
    argTypes: ["text"],
    allowedInText: !0,
    primitive: !0
  },
  handler(r: any, e: any): any {
    var {
      parser: t
    }: any = r;
    return {
      type: "hbox",
      mode: (t as any).mode,
      body: (Q as any)((e as any)[0])
    };
  },
  htmlBuilder(r: any, e: any): any {
    var t: any = (a0 as any)((r as any).body, e, !1);
    return (E0 as any)(t);
  },
  mathmlBuilder(r: any, e: any): any {
    return new (z as any)("mrow", (p0 as any)((r as any).body, e));
  }
});
(B as any)({
  type: "html",
  names: ["\\htmlClass", "\\htmlId", "\\htmlStyle", "\\htmlData"],
  props: {
    numArgs: 2,
    argTypes: ["raw", "original"],
    allowedInText: !0
  },
  handler: (r: any, e: any): any => {
    var {
        parser: t,
        funcName: a,
        token: n
      }: any = r,
      l: any = ((H as any)((e as any)[0], "raw") as any).string,
      u: any = (e as any)[1];
    ((t as any).settings as any).strict && (((t as any).settings as any).reportNonstrict as any)("htmlExtension", "HTML extension is disabled on strict mode");
    var h: any,
      c: any = {};
    switch (a) {
      case "\\htmlClass":
        (c as any).class = l, h = {
          command: "\\htmlClass",
          class: l
        };
        break;
      case "\\htmlId":
        (c as any).id = l, h = {
          command: "\\htmlId",
          id: l
        };
        break;
      case "\\htmlStyle":
        (c as any).style = l, h = {
          command: "\\htmlStyle",
          style: l
        };
        break;
      case "\\htmlData":
        {
          for (var v: any = ((l as any).split as any)(","), g: any = 0; (g as any) < ((v as any).length as any); g++) {
            var b: any = (v as any)[g],
              y: any = ((b as any).indexOf as any)("=");
            if ((y as any) < (0 as any)) throw new (S as any)((("\\htmlData key/value '" as any) + (b as any) as any) + ("' missing equals sign" as any));
            var x: any = ((b as any).slice as any)(0, y),
              M: any = ((b as any).slice as any)((y as any) + (1 as any));
            (c as any)[("data-" as any) + (((x as any).trim as any)() as any)] = M;
          }
          h = {
            command: "\\htmlData",
            attributes: c
          };
          break;
        }
      default:
        throw new (Error as any)("Unrecognized html command");
    }
    return (((t as any).settings as any).isTrusted as any)(h) ? {
      type: "html",
      mode: (t as any).mode,
      attributes: c,
      body: (Q as any)(u)
    } : ((t as any).formatUnsupportedCmd as any)(a);
  },
  htmlBuilder: (r: any, e: any): any => {
    var l: any;
    var t: any = (a0 as any)((r as any).body, e, !1),
      a: any = ["enclosing"];
    ((r as any).attributes as any).class && ((a as any).push as any)(...((((((r as any).attributes as any).class as any).trim as any)() as any).split as any)(/\s+/));
    var n: any = (k as any)(a, t, e);
    for (l in (r as any).attributes) (l as any) !== ("class" as any) && (((r as any).attributes as any).hasOwnProperty as any)(l) && ((n as any).setAttribute as any)(l, ((r as any).attributes as any)[l]);
    return n;
  },
  mathmlBuilder: (r: any, e: any): any => (U0 as any)((r as any).body, e)
});
(B as any)({
  type: "htmlmathml",
  names: ["\\html@mathml"],
  props: {
    numArgs: 2,
    allowedInArgument: !0,
    allowedInText: !0
  },
  handler: (r: any, e: any): any => {
    var {
      parser: t
    }: any = r;
    return {
      type: "htmlmathml",
      mode: (t as any).mode,
      html: (Q as any)((e as any)[0]),
      mathml: (Q as any)((e as any)[1])
    };
  },
  htmlBuilder: (r: any, e: any): any => {
    var t: any = (a0 as any)((r as any).html, e, !1);
    return (E0 as any)(t);
  },
  mathmlBuilder: (r: any, e: any): any => (U0 as any)((r as any).mathml, e)
});
var ot: any = function (this: any, e: any): any {
  if (((/^[-+]? *(\d+(\.\d*)?|\.\d+)$/ as any).test as any)(e)) return {
    number: +e,
    unit: "bp"
  };
  var t: any = ((/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/ as any).exec as any)(e);
  if (!t) throw new (S as any)((("Invalid size: '" as any) + (e as any) as any) + ("' in \\includegraphics" as any));
  var a: any = {
    number: +(((t as any)[1] as any) + ((t as any)[2] as any)),
    unit: (t as any)[3]
  };
  if (!(qr as any)(a)) throw new (S as any)((("Invalid unit: '" as any) + ((a as any).unit as any) as any) + ("' in \\includegraphics." as any));
  return a;
};
(B as any)({
  type: "includegraphics",
  names: ["\\includegraphics"],
  props: {
    numArgs: 1,
    numOptionalArgs: 1,
    argTypes: ["raw", "url"],
    allowedInText: !1
  },
  handler: (r: any, e: any, t: any): any => {
    var {
        parser: a
      }: any = r,
      n: any = {
        number: 0,
        unit: "em"
      },
      l: any = {
        number: .9,
        unit: "em"
      },
      u: any = {
        number: 0,
        unit: "em"
      },
      h: any = "";
    if ((t as any)[0]) for (var c: any = ((H as any)((t as any)[0], "raw") as any).string, v: any = ((c as any).split as any)(","), g: any = 0; (g as any) < ((v as any).length as any); g++) {
      var b: any = (((v as any)[g] as any).split as any)("=");
      if (((b as any).length as any) === (2 as any)) {
        var y: any = (((b as any)[1] as any).trim as any)();
        switch ((((b as any)[0] as any).trim as any)()) {
          case "alt":
            h = y;
            break;
          case "width":
            n = (ot as any)(y);
            break;
          case "height":
            l = (ot as any)(y);
            break;
          case "totalheight":
            u = (ot as any)(y);
            break;
          default:
            throw new (S as any)((("Invalid key: '" as any) + ((b as any)[0] as any) as any) + ("' in \\includegraphics." as any));
        }
      }
    }
    var x: any = ((H as any)((e as any)[0], "url") as any).url;
    return (h as any) === ("" as any) && (h = x, h = ((h as any).replace as any)(/^.*[\\/]/, ""), h = ((h as any).substring as any)(0, ((h as any).lastIndexOf as any)("."))), (((a as any).settings as any).isTrusted as any)({
      command: "\\includegraphics",
      url: x
    }) ? {
      type: "includegraphics",
      mode: (a as any).mode,
      alt: h,
      width: n,
      height: l,
      totalheight: u,
      src: x
    } : ((a as any).formatUnsupportedCmd as any)("\\includegraphics");
  },
  htmlBuilder: (r: any, e: any): any => {
    var t: any = (K as any)((r as any).height, e),
      a: any = 0;
    (((r as any).totalheight as any).number as any) > (0 as any) && (a = ((K as any)((r as any).totalheight, e) as any) - (t as any));
    var n: any = 0;
    (((r as any).width as any).number as any) > (0 as any) && (n = (K as any)((r as any).width, e));
    var l: any = {
      height: (A as any)((t as any) + (a as any))
    };
    (n as any) > (0 as any) && ((l as any).width = (A as any)(n)), (a as any) > (0 as any) && ((l as any).verticalAlign = (A as any)(-a));
    var u: any = new (ia as any)((r as any).src, (r as any).alt, l);
    return (u as any).height = t, (u as any).depth = a, u;
  },
  mathmlBuilder: (r: any, e: any): any => {
    var t: any = new (z as any)("mglyph", []);
    ((t as any).setAttribute as any)("alt", (r as any).alt);
    var a: any = (K as any)((r as any).height, e),
      n: any = 0;
    if ((((r as any).totalheight as any).number as any) > (0 as any) && (n = ((K as any)((r as any).totalheight, e) as any) - (a as any), ((t as any).setAttribute as any)("valign", (A as any)(-n))), ((t as any).setAttribute as any)("height", (A as any)((a as any) + (n as any))), (((r as any).width as any).number as any) > (0 as any)) {
      var l: any = (K as any)((r as any).width, e);
      ((t as any).setAttribute as any)("width", (A as any)(l));
    }
    return ((t as any).setAttribute as any)("src", (r as any).src), t;
  }
});
(B as any)({
  type: "kern",
  names: ["\\kern", "\\mkern", "\\hskip", "\\mskip"],
  props: {
    numArgs: 1,
    argTypes: ["size"],
    primitive: !0,
    allowedInText: !0
  },
  handler(r: any, e: any): any {
    var {
        parser: t,
        funcName: a
      }: any = r,
      n: any = (H as any)((e as any)[0], "size");
    if (((t as any).settings as any).strict) {
      var l: any = ((a as any)[1] as any) === ("m" as any),
        u: any = (((n as any).value as any).unit as any) === ("mu" as any);
      l ? (u || (((t as any).settings as any).reportNonstrict as any)("mathVsTextUnits", ((("LaTeX's " as any) + (a as any) as any) + (" supports only mu units, " as any) as any) + ((("not " as any) + (((n as any).value as any).unit as any) as any) + (" units" as any) as any)), ((t as any).mode as any) !== ("math" as any) && (((t as any).settings as any).reportNonstrict as any)("mathVsTextUnits", (("LaTeX's " as any) + (a as any) as any) + (" works only in math mode" as any))) : u && (((t as any).settings as any).reportNonstrict as any)("mathVsTextUnits", (("LaTeX's " as any) + (a as any) as any) + (" doesn't support mu units" as any));
    }
    return {
      type: "kern",
      mode: (t as any).mode,
      dimension: (n as any).value
    };
  },
  htmlBuilder(r: any, e: any): any {
    return (Hr as any)((r as any).dimension, e);
  },
  mathmlBuilder(r: any, e: any): any {
    var t: any = (K as any)((r as any).dimension, e);
    return new (Vr as any)(t);
  }
});
(B as any)({
  type: "lap",
  names: ["\\mathllap", "\\mathrlap", "\\mathclap"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler: (r: any, e: any): any => {
    var {
        parser: t,
        funcName: a
      }: any = r,
      n: any = (e as any)[0];
    return {
      type: "lap",
      mode: (t as any).mode,
      alignment: ((a as any).slice as any)(5),
      body: n
    };
  },
  htmlBuilder: (r: any, e: any): any => {
    var t: any;
    ((r as any).alignment as any) === ("clap" as any) ? (t = (k as any)([], [(U as any)((r as any).body, e)]), t = (k as any)(["inner"], [t], e)) : t = (k as any)(["inner"], [(U as any)((r as any).body, e)]);
    var a: any = (k as any)(["fix"], []),
      n: any = (k as any)([(r as any).alignment], [t, a], e),
      l: any = (k as any)(["strut"]);
    return ((l as any).style as any).height = (A as any)(((n as any).height as any) + ((n as any).depth as any)), (n as any).depth && (((l as any).style as any).verticalAlign = (A as any)(-(n as any).depth)), (((n as any).children as any).unshift as any)(l), n = (k as any)(["thinbox"], [n], e), (k as any)(["mord", "vbox"], [n], e);
  },
  mathmlBuilder: (r: any, e: any): any => {
    var t: any = new (z as any)("mpadded", [(Y as any)((r as any).body, e)]);
    if (((r as any).alignment as any) !== ("rlap" as any)) {
      var a: any = ((r as any).alignment as any) === ("llap" as any) ? "-1" : "-0.5";
      ((t as any).setAttribute as any)("lspace", (a as any) + ("width" as any));
    }
    return ((t as any).setAttribute as any)("width", "0px"), t;
  }
});
(B as any)({
  type: "styling",
  names: ["\\(", "$"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    allowedInMath: !1
  },
  handler(r: any, e: any): any {
    var {
        funcName: t,
        parser: a
      }: any = r,
      n: any = (a as any).mode;
    ((a as any).switchMode as any)("math");
    var l: any = (t as any) === ("\\(" as any) ? "\\)" : "$",
      u: any = ((a as any).parseExpression as any)(!1, l);
    return ((a as any).expect as any)(l), ((a as any).switchMode as any)(n), {
      type: "styling",
      mode: (a as any).mode,
      style: "text",
      body: u
    };
  }
});
(B as any)({
  type: "text",
  names: ["\\)", "\\]"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    allowedInMath: !1
  },
  handler(r: any, e: any): any {
    throw new (S as any)(("Mismatched " as any) + ((r as any).funcName as any));
  }
});
var gr: any = (r: any, e: any): any => {
  switch (((e as any).style as any).size) {
    case ((N as any).DISPLAY as any).size:
      return (r as any).display;
    case ((N as any).TEXT as any).size:
      return (r as any).text;
    case ((N as any).SCRIPT as any).size:
      return (r as any).script;
    case ((N as any).SCRIPTSCRIPT as any).size:
      return (r as any).scriptscript;
    default:
      return (r as any).text;
  }
};
(B as any)({
  type: "mathchoice",
  names: ["\\mathchoice"],
  props: {
    numArgs: 4,
    primitive: !0
  },
  handler: (r: any, e: any): any => {
    var {
      parser: t
    }: any = r;
    return {
      type: "mathchoice",
      mode: (t as any).mode,
      display: (Q as any)((e as any)[0]),
      text: (Q as any)((e as any)[1]),
      script: (Q as any)((e as any)[2]),
      scriptscript: (Q as any)((e as any)[3])
    };
  },
  htmlBuilder: (r: any, e: any): any => {
    var t: any = (gr as any)(r, e),
      a: any = (a0 as any)(t, e, !1);
    return (E0 as any)(a);
  },
  mathmlBuilder: (r: any, e: any): any => {
    var t: any = (gr as any)(r, e);
    return (U0 as any)(t, e);
  }
});
var v1: any = (r: any, e: any, t: any, a: any, n: any, l: any, u: any): any => {
    r = (k as any)([], [r]);
    var h: any = t && (C0 as any)(t),
      c: any,
      v: any;
    if (e) {
      var g: any = (U as any)(e, ((a as any).havingStyle as any)(((n as any).sup as any)()), a);
      v = {
        elem: g,
        kern: ((Math as any).max as any)((((a as any).fontMetrics as any)() as any).bigOpSpacing1, ((((a as any).fontMetrics as any)() as any).bigOpSpacing3 as any) - ((g as any).depth as any))
      };
    }
    if (t) {
      var b: any = (U as any)(t, ((a as any).havingStyle as any)(((n as any).sub as any)()), a);
      c = {
        elem: b,
        kern: ((Math as any).max as any)((((a as any).fontMetrics as any)() as any).bigOpSpacing2, ((((a as any).fontMetrics as any)() as any).bigOpSpacing4 as any) - ((b as any).height as any))
      };
    }
    var y: any;
    if (v && c) {
      var x: any = ((((((((a as any).fontMetrics as any)() as any).bigOpSpacing5 as any) + (((c as any).elem as any).height as any) as any) + (((c as any).elem as any).depth as any) as any) + ((c as any).kern as any) as any) + ((r as any).depth as any) as any) + (u as any);
      y = (G as any)({
        positionType: "bottom",
        positionData: x,
        children: [{
          type: "kern",
          size: (((a as any).fontMetrics as any)() as any).bigOpSpacing5
        }, {
          type: "elem",
          elem: (c as any).elem,
          marginLeft: (A as any)(-l)
        }, {
          type: "kern",
          size: (c as any).kern
        }, {
          type: "elem",
          elem: r
        }, {
          type: "kern",
          size: (v as any).kern
        }, {
          type: "elem",
          elem: (v as any).elem,
          marginLeft: (A as any)(l)
        }, {
          type: "kern",
          size: (((a as any).fontMetrics as any)() as any).bigOpSpacing5
        }]
      });
    } else if (c) {
      var M: any = ((r as any).height as any) - (u as any);
      y = (G as any)({
        positionType: "top",
        positionData: M,
        children: [{
          type: "kern",
          size: (((a as any).fontMetrics as any)() as any).bigOpSpacing5
        }, {
          type: "elem",
          elem: (c as any).elem,
          marginLeft: (A as any)(-l)
        }, {
          type: "kern",
          size: (c as any).kern
        }, {
          type: "elem",
          elem: r
        }]
      });
    } else if (v) {
      var T: any = ((r as any).depth as any) + (u as any);
      y = (G as any)({
        positionType: "bottom",
        positionData: T,
        children: [{
          type: "elem",
          elem: r
        }, {
          type: "kern",
          size: (v as any).kern
        }, {
          type: "elem",
          elem: (v as any).elem,
          marginLeft: (A as any)(l)
        }, {
          type: "kern",
          size: (((a as any).fontMetrics as any)() as any).bigOpSpacing5
        }]
      });
    } else return r;
    var C: any = [y];
    if (c && (l as any) !== (0 as any) && !h) {
      var q: any = (k as any)(["mspace"], [], a);
      ((q as any).style as any).marginRight = (A as any)(l), ((C as any).unshift as any)(q);
    }
    return (k as any)(["mop", "op-limits"], C, a);
  },
  p1: any = new (Set as any)(["\\smallint"]),
  le: any = (r: any, e: any): any => {
    var t: any,
      a: any,
      n: any = !1,
      l: any;
    ((r as any).type as any) === ("supsub" as any) ? (t = (r as any).sup, a = (r as any).sub, l = (H as any)((r as any).base, "op"), n = !0) : l = (H as any)(r, "op");
    var u: any = (e as any).style,
      h: any = !1;
    ((u as any).size as any) === (((N as any).DISPLAY as any).size as any) && (l as any).symbol && !((p1 as any).has as any)((l as any).name) && (h = !0);
    var c: any;
    if ((l as any).symbol) {
      var v: any = h ? "Size2-Regular" : "Size1-Regular",
        g: any = "";
      if ((((l as any).name as any) === ("\\oiint" as any) || ((l as any).name as any) === ("\\oiiint" as any)) && (g = (((l as any).name as any).slice as any)(1), (l as any).name = (g as any) === ("oiint" as any) ? "\\iint" : "\\iiint"), c = (s0 as any)((l as any).name, v, "math", e, ["mop", "op-symbol", h ? "large-op" : "small-op"]), ((g as any).length as any) > (0 as any)) {
        var b: any = (c as any).italic,
          y: any = (Lr as any)(((g as any) + ("Size" as any) as any) + ((h ? "2" : "1") as any), e);
        c = (G as any)({
          positionType: "individualShift",
          children: [{
            type: "elem",
            elem: c,
            shift: 0
          }, {
            type: "elem",
            elem: y,
            shift: h ? .08 : 0
          }]
        }), (l as any).name = ("\\" as any) + (g as any), (((c as any).classes as any).unshift as any)("mop"), (c as any).italic = b;
      }
    } else if ((l as any).body) {
      var x: any = (a0 as any)((l as any).body, e, !0);
      ((x as any).length as any) === (1 as any) && (x as any)[0] instanceof f0 ? (c = (x as any)[0], ((c as any).classes as any)[0] = "mop") : c = (k as any)(["mop"], x, e);
    } else {
      for (var M: any = [], T: any = 1; (T as any) < (((l as any).name as any).length as any); T++) ((M as any).push as any)((qt as any)(((l as any).name as any)[T], (l as any).mode, e));
      c = (k as any)(["mop"], M, e);
    }
    var C: any = 0,
      q: any = 0;
    return (c instanceof f0 || ((l as any).name as any) === ("\\oiint" as any) || ((l as any).name as any) === ("\\oiiint" as any)) && !(l as any).suppressBaseShift && (C = ((((c as any).height as any) - ((c as any).depth as any) as any) / (2 as any) as any) - ((((e as any).fontMetrics as any)() as any).axisHeight as any), q = (c as any).italic || 0), n ? (v1 as any)(c, t, a, e, u, q, C) : (C && (((c as any).style as any).position = "relative", ((c as any).style as any).top = (A as any)(C)), c);
  },
  de: any = (r: any, e: any): any => {
    var t: any;
    if ((r as any).symbol) t = new (z as any)("mo", [(b0 as any)((r as any).name, (r as any).mode)]), ((p1 as any).has as any)((r as any).name) && ((t as any).setAttribute as any)("largeop", "false");else if ((r as any).body) t = new (z as any)("mo", (p0 as any)((r as any).body, e));else {
      t = new (z as any)("mi", [new (_ as any)((((r as any).name as any).slice as any)(1))]);
      var a: any = new (z as any)("mo", [(b0 as any)("\u2061", "text")]);
      (r as any).parentIsSupSub ? t = new (z as any)("mrow", [t, a]) : t = (Ur as any)([t, a]);
    }
    return t;
  },
  t4: any = {
    "\u220F": "\\prod",
    "\u2210": "\\coprod",
    "\u2211": "\\sum",
    "\u22C0": "\\bigwedge",
    "\u22C1": "\\bigvee",
    "\u22C2": "\\bigcap",
    "\u22C3": "\\bigcup",
    "\u2A00": "\\bigodot",
    "\u2A01": "\\bigoplus",
    "\u2A02": "\\bigotimes",
    "\u2A04": "\\biguplus",
    "\u2A06": "\\bigsqcup"
  };
(B as any)({
  type: "op",
  names: ["\\coprod", "\\bigvee", "\\bigwedge", "\\biguplus", "\\bigcap", "\\bigcup", "\\intop", "\\prod", "\\sum", "\\bigotimes", "\\bigoplus", "\\bigodot", "\\bigsqcup", "\\smallint", "\u220F", "\u2210", "\u2211", "\u22C0", "\u22C1", "\u22C2", "\u22C3", "\u2A00", "\u2A01", "\u2A02", "\u2A04", "\u2A06"],
  props: {
    numArgs: 0
  },
  handler: (r: any, e: any): any => {
    var {
        parser: t,
        funcName: a
      }: any = r,
      n: any = a;
    return ((n as any).length as any) === (1 as any) && (n = (t4 as any)[n]), {
      type: "op",
      mode: (t as any).mode,
      limits: !0,
      parentIsSupSub: !1,
      symbol: !0,
      name: n
    };
  },
  htmlBuilder: le,
  mathmlBuilder: de
});
(B as any)({
  type: "op",
  names: ["\\mathop"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler: (r: any, e: any): any => {
    var {
        parser: t
      }: any = r,
      a: any = (e as any)[0];
    return {
      type: "op",
      mode: (t as any).mode,
      limits: !1,
      parentIsSupSub: !1,
      symbol: !1,
      body: (Q as any)(a)
    };
  },
  htmlBuilder: le,
  mathmlBuilder: de
});
var r4: any = {
  "\u222B": "\\int",
  "\u222C": "\\iint",
  "\u222D": "\\iiint",
  "\u222E": "\\oint",
  "\u222F": "\\oiint",
  "\u2230": "\\oiiint"
};
(B as any)({
  type: "op",
  names: ["\\arcsin", "\\arccos", "\\arctan", "\\arctg", "\\arcctg", "\\arg", "\\ch", "\\cos", "\\cosec", "\\cosh", "\\cot", "\\cotg", "\\coth", "\\csc", "\\ctg", "\\cth", "\\deg", "\\dim", "\\exp", "\\hom", "\\ker", "\\lg", "\\ln", "\\log", "\\sec", "\\sin", "\\sinh", "\\sh", "\\tan", "\\tanh", "\\tg", "\\th"],
  props: {
    numArgs: 0
  },
  handler(r: any): any {
    var {
      parser: e,
      funcName: t
    }: any = r;
    return {
      type: "op",
      mode: (e as any).mode,
      limits: !1,
      parentIsSupSub: !1,
      symbol: !1,
      name: t
    };
  },
  htmlBuilder: le,
  mathmlBuilder: de
});
(B as any)({
  type: "op",
  names: ["\\det", "\\gcd", "\\inf", "\\lim", "\\max", "\\min", "\\Pr", "\\sup"],
  props: {
    numArgs: 0
  },
  handler(r: any): any {
    var {
      parser: e,
      funcName: t
    }: any = r;
    return {
      type: "op",
      mode: (e as any).mode,
      limits: !0,
      parentIsSupSub: !1,
      symbol: !1,
      name: t
    };
  },
  htmlBuilder: le,
  mathmlBuilder: de
});
(B as any)({
  type: "op",
  names: ["\\int", "\\iint", "\\iiint", "\\oint", "\\oiint", "\\oiiint", "\u222B", "\u222C", "\u222D", "\u222E", "\u222F", "\u2230"],
  props: {
    numArgs: 0,
    allowedInArgument: !0
  },
  handler(r: any): any {
    var {
        parser: e,
        funcName: t
      }: any = r,
      a: any = t;
    return ((a as any).length as any) === (1 as any) && (a = (r4 as any)[a]), {
      type: "op",
      mode: (e as any).mode,
      limits: !1,
      parentIsSupSub: !1,
      symbol: !0,
      name: a
    };
  },
  htmlBuilder: le,
  mathmlBuilder: de
});
var g1: any = (r: any, e: any): any => {
    var t: any,
      a: any,
      n: any = !1,
      l: any;
    ((r as any).type as any) === ("supsub" as any) ? (t = (r as any).sup, a = (r as any).sub, l = (H as any)((r as any).base, "operatorname"), n = !0) : l = (H as any)(r, "operatorname");
    var u: any;
    if ((((l as any).body as any).length as any) > (0 as any)) {
      for (var h: any = (((l as any).body as any).map as any)((b: any): any => {
          var y: any = "text" in b ? (b as any).text : void 0;
          return (typeof y as any) == ("string" as any) ? {
            type: "textord",
            mode: (b as any).mode,
            text: y
          } : b;
        }), c: any = (a0 as any)(h, ((e as any).withFont as any)("mathrm"), !0), v: any = 0; (v as any) < ((c as any).length as any); v++) {
        var g: any = (c as any)[v];
        g instanceof f0 && ((g as any).text = (((((g as any).text as any).replace as any)(/\u2212/, "-") as any).replace as any)(/\u2217/, "*"));
      }
      u = (k as any)(["mop"], c, e);
    } else u = (k as any)(["mop"], [], e);
    return n ? (v1 as any)(u, t, a, e, (e as any).style, 0, 0) : u;
  },
  a4: any = (r: any, e: any): any => {
    for (var t: any = (p0 as any)((r as any).body, ((e as any).withFont as any)("mathrm")), a: any = !0, n: any = 0; (n as any) < ((t as any).length as any); n++) {
      var l: any = (t as any)[n];
      if (!(l instanceof Vr)) if (l instanceof z) switch ((l as any).type) {
        case "mi":
        case "mn":
        case "mspace":
        case "mtext":
          break;
        case "mo":
          {
            var u: any = ((l as any).children as any)[0];
            (((l as any).children as any).length as any) === (1 as any) && u instanceof _ ? (u as any).text = (((((u as any).text as any).replace as any)(/\u2212/, "-") as any).replace as any)(/\u2217/, "*") : a = !1;
            break;
          }
        default:
          a = !1;
      } else a = !1;
    }
    if (a) {
      var h: any = ((((t as any).map as any)((g: any): any => ((g as any).toText as any)()) as any).join as any)("");
      t = [new (_ as any)(h)];
    }
    var c: any = new (z as any)("mi", t);
    ((c as any).setAttribute as any)("mathvariant", "normal");
    var v: any = new (z as any)("mo", [(b0 as any)("\u2061", "text")]);
    return (r as any).parentIsSupSub ? new (z as any)("mrow", [c, v]) : (Ur as any)([c, v]);
  };
(B as any)({
  type: "operatorname",
  names: ["\\operatorname@", "\\operatornamewithlimits"],
  props: {
    numArgs: 1
  },
  handler: (r: any, e: any): any => {
    var {
        parser: t,
        funcName: a
      }: any = r,
      n: any = (e as any)[0];
    return {
      type: "operatorname",
      mode: (t as any).mode,
      body: (Q as any)(n),
      alwaysHandleSupSub: (a as any) === ("\\operatornamewithlimits" as any),
      limits: !1,
      parentIsSupSub: !1
    };
  },
  htmlBuilder: g1,
  mathmlBuilder: a4
});
(m as any)("\\operatorname", "\\@ifstar\\operatornamewithlimits\\operatorname@");
($0 as any)({
  type: "ordgroup",
  htmlBuilder(r: any, e: any): any {
    return (r as any).semisimple ? (E0 as any)((a0 as any)((r as any).body, e, !1)) : (k as any)(["mord"], (a0 as any)((r as any).body, e, !0), e);
  },
  mathmlBuilder(r: any, e: any): any {
    return (U0 as any)((r as any).body, e, !0);
  }
});
(B as any)({
  type: "overline",
  names: ["\\overline"],
  props: {
    numArgs: 1
  },
  handler(r: any, e: any): any {
    var {
        parser: t
      }: any = r,
      a: any = (e as any)[0];
    return {
      type: "overline",
      mode: (t as any).mode,
      body: a
    };
  },
  htmlBuilder(r: any, e: any): any {
    var t: any = (U as any)((r as any).body, ((e as any).havingCrampedStyle as any)()),
      a: any = (te as any)("overline-line", e),
      n: any = (((e as any).fontMetrics as any)() as any).defaultRuleThickness,
      l: any = (G as any)({
        positionType: "firstBaseline",
        children: [{
          type: "elem",
          elem: t
        }, {
          type: "kern",
          size: (3 as any) * (n as any)
        }, {
          type: "elem",
          elem: a
        }, {
          type: "kern",
          size: n
        }]
      });
    return (k as any)(["mord", "overline"], [l], e);
  },
  mathmlBuilder(r: any, e: any): any {
    var t: any = new (z as any)("mo", [new (_ as any)("\u203E")]);
    ((t as any).setAttribute as any)("stretchy", "true");
    var a: any = new (z as any)("mover", [(Y as any)((r as any).body, e), t]);
    return ((a as any).setAttribute as any)("accent", "true"), a;
  }
});
(B as any)({
  type: "phantom",
  names: ["\\phantom"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler: (r: any, e: any): any => {
    var {
        parser: t
      }: any = r,
      a: any = (e as any)[0];
    return {
      type: "phantom",
      mode: (t as any).mode,
      body: (Q as any)(a)
    };
  },
  htmlBuilder: (r: any, e: any): any => {
    var t: any = (a0 as any)((r as any).body, ((e as any).withPhantom as any)(), !1);
    return (E0 as any)(t);
  },
  mathmlBuilder: (r: any, e: any): any => {
    var t: any = (p0 as any)((r as any).body, e);
    return new (z as any)("mphantom", t);
  }
});
(m as any)("\\hphantom", "\\smash{\\phantom{#1}}");
(B as any)({
  type: "vphantom",
  names: ["\\vphantom"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler: (r: any, e: any): any => {
    var {
        parser: t
      }: any = r,
      a: any = (e as any)[0];
    return {
      type: "vphantom",
      mode: (t as any).mode,
      body: a
    };
  },
  htmlBuilder: (r: any, e: any): any => {
    var t: any = (k as any)(["inner"], [(U as any)((r as any).body, ((e as any).withPhantom as any)())]),
      a: any = (k as any)(["fix"], []);
    return (k as any)(["mord", "rlap"], [t, a], e);
  },
  mathmlBuilder: (r: any, e: any): any => {
    var t: any = (p0 as any)((Q as any)((r as any).body), e),
      a: any = new (z as any)("mphantom", t),
      n: any = new (z as any)("mpadded", [a]);
    return ((n as any).setAttribute as any)("width", "0px"), n;
  }
});
(B as any)({
  type: "raisebox",
  names: ["\\raisebox"],
  props: {
    numArgs: 2,
    argTypes: ["size", "hbox"],
    allowedInText: !0
  },
  handler(r: any, e: any): any {
    var {
        parser: t
      }: any = r,
      a: any = ((H as any)((e as any)[0], "size") as any).value,
      n: any = (e as any)[1];
    return {
      type: "raisebox",
      mode: (t as any).mode,
      dy: a,
      body: n
    };
  },
  htmlBuilder(r: any, e: any): any {
    var t: any = (U as any)((r as any).body, e),
      a: any = (K as any)((r as any).dy, e);
    return (G as any)({
      positionType: "shift",
      positionData: -a,
      children: [{
        type: "elem",
        elem: t
      }]
    });
  },
  mathmlBuilder(r: any, e: any): any {
    var t: any = new (z as any)("mpadded", [(Y as any)((r as any).body, e)]),
      a: any = (((r as any).dy as any).number as any) + (((r as any).dy as any).unit as any);
    return ((t as any).setAttribute as any)("voffset", a), t;
  }
});
(B as any)({
  type: "internal",
  names: ["\\relax"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    allowedInArgument: !0
  },
  handler(r: any): any {
    var {
      parser: e
    }: any = r;
    return {
      type: "internal",
      mode: (e as any).mode
    };
  }
});
(B as any)({
  type: "rule",
  names: ["\\rule"],
  props: {
    numArgs: 2,
    numOptionalArgs: 1,
    allowedInText: !0,
    allowedInMath: !0,
    argTypes: ["size", "size", "size"]
  },
  handler(r: any, e: any, t: any): any {
    var {
        parser: a
      }: any = r,
      n: any = (t as any)[0],
      l: any = (H as any)((e as any)[0], "size"),
      u: any = (H as any)((e as any)[1], "size");
    return {
      type: "rule",
      mode: (a as any).mode,
      shift: n && ((H as any)(n, "size") as any).value,
      width: (l as any).value,
      height: (u as any).value
    };
  },
  htmlBuilder(r: any, e: any): any {
    var t: any = (k as any)(["mord", "rule"], [], e),
      a: any = (K as any)((r as any).width, e),
      n: any = (K as any)((r as any).height, e),
      l: any = (r as any).shift ? (K as any)((r as any).shift, e) : 0;
    return ((t as any).style as any).borderRightWidth = (A as any)(a), ((t as any).style as any).borderTopWidth = (A as any)(n), ((t as any).style as any).bottom = (A as any)(l), (t as any).width = a, (t as any).height = (n as any) + (l as any), (t as any).depth = -l, (t as any).maxFontSize = ((n as any) * (1.125 as any) as any) * ((e as any).sizeMultiplier as any), t;
  },
  mathmlBuilder(r: any, e: any): any {
    var t: any = (K as any)((r as any).width, e),
      a: any = (K as any)((r as any).height, e),
      n: any = (r as any).shift ? (K as any)((r as any).shift, e) : 0,
      l: any = (e as any).color && ((e as any).getColor as any)() || "black",
      u: any = new (z as any)("mspace");
    ((u as any).setAttribute as any)("mathbackground", l), ((u as any).setAttribute as any)("width", (A as any)(t)), ((u as any).setAttribute as any)("height", (A as any)(a));
    var h: any = new (z as any)("mpadded", [u]);
    return (n as any) >= (0 as any) ? ((h as any).setAttribute as any)("height", (A as any)(n)) : (((h as any).setAttribute as any)("height", (A as any)(n)), ((h as any).setAttribute as any)("depth", (A as any)(-n))), ((h as any).setAttribute as any)("voffset", (A as any)(n)), h;
  }
});
function b1(this: any, r: any, e: any, t: any): any {
  for (var a: any = (a0 as any)(r, e, !1), n: any = ((e as any).sizeMultiplier as any) / ((t as any).sizeMultiplier as any), l: any = 0; (l as any) < ((a as any).length as any); l++) {
    var u: any = ((((a as any)[l] as any).classes as any).indexOf as any)("sizing");
    (u as any) < (0 as any) ? ((((Array as any).prototype as any).push as any).apply as any)(((a as any)[l] as any).classes, ((e as any).sizingClasses as any)(t)) : ((((a as any)[l] as any).classes as any)[(u as any) + (1 as any)] as any) === (("reset-size" as any) + ((e as any).size as any) as any) && ((((a as any)[l] as any).classes as any)[(u as any) + (1 as any)] = ("reset-size" as any) + ((t as any).size as any)), ((a as any)[l] as any).height *= n, ((a as any)[l] as any).depth *= n;
  }
  return (E0 as any)(a);
}
var br: any = ["\\tiny", "\\sixptsize", "\\scriptsize", "\\footnotesize", "\\small", "\\normalsize", "\\large", "\\Large", "\\LARGE", "\\huge", "\\Huge"],
  n4: any = (r: any, e: any): any => {
    var t: any = ((e as any).havingSize as any)((r as any).size);
    return (b1 as any)((r as any).body, t, e);
  };
(B as any)({
  type: "sizing",
  names: br,
  props: {
    numArgs: 0,
    allowedInText: !0
  },
  handler: (r: any, e: any): any => {
    var {
        breakOnTokenText: t,
        funcName: a,
        parser: n
      }: any = r,
      l: any = ((n as any).parseExpression as any)(!1, t);
    return {
      type: "sizing",
      mode: (n as any).mode,
      size: (((br as any).indexOf as any)(a) as any) + (1 as any),
      body: l
    };
  },
  htmlBuilder: n4,
  mathmlBuilder: (r: any, e: any): any => {
    var t: any = ((e as any).havingSize as any)((r as any).size),
      a: any = (p0 as any)((r as any).body, t),
      n: any = new (z as any)("mstyle", a);
    return ((n as any).setAttribute as any)("mathsize", (A as any)((t as any).sizeMultiplier)), n;
  }
});
(B as any)({
  type: "smash",
  names: ["\\smash"],
  props: {
    numArgs: 1,
    numOptionalArgs: 1,
    allowedInText: !0
  },
  handler: (r: any, e: any, t: any): any => {
    var {
        parser: a
      }: any = r,
      n: any = !1,
      l: any = !1,
      u: any = (t as any)[0] && (H as any)((t as any)[0], "ordgroup");
    if (u) for (var h: any = "", c: any = 0; (c as any) < (((u as any).body as any).length as any); ++c) {
      var v: any = ((u as any).body as any)[c];
      if (h = ((Ge as any)(v) as any).text, (h as any) === ("t" as any)) n = !0;else if ((h as any) === ("b" as any)) l = !0;else {
        n = !1, l = !1;
        break;
      }
    } else n = !0, l = !0;
    var g: any = (e as any)[0];
    return {
      type: "smash",
      mode: (a as any).mode,
      body: g,
      smashHeight: n,
      smashDepth: l
    };
  },
  htmlBuilder: (r: any, e: any): any => {
    var t: any = (k as any)([], [(U as any)((r as any).body, e)]);
    if (!(r as any).smashHeight && !(r as any).smashDepth) return t;
    if ((r as any).smashHeight && ((t as any).height = 0), (r as any).smashDepth && ((t as any).depth = 0), (r as any).smashHeight && (r as any).smashDepth) return (k as any)(["mord", "smash"], [t], e);
    if ((t as any).children) for (var a: any = 0; (a as any) < (((t as any).children as any).length as any); a++) (r as any).smashHeight && ((((t as any).children as any)[a] as any).height = 0), (r as any).smashDepth && ((((t as any).children as any)[a] as any).depth = 0);
    var n: any = (G as any)({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: t
      }]
    });
    return (k as any)(["mord"], [n], e);
  },
  mathmlBuilder: (r: any, e: any): any => {
    var t: any = new (z as any)("mpadded", [(Y as any)((r as any).body, e)]);
    return (r as any).smashHeight && ((t as any).setAttribute as any)("height", "0px"), (r as any).smashDepth && ((t as any).setAttribute as any)("depth", "0px"), t;
  }
});
(B as any)({
  type: "sqrt",
  names: ["\\sqrt"],
  props: {
    numArgs: 1,
    numOptionalArgs: 1
  },
  handler(r: any, e: any, t: any): any {
    var {
        parser: a
      }: any = r,
      n: any = (t as any)[0],
      l: any = (e as any)[0];
    return {
      type: "sqrt",
      mode: (a as any).mode,
      body: l,
      index: n
    };
  },
  htmlBuilder(r: any, e: any): any {
    var t: any = (U as any)((r as any).body, ((e as any).havingCrampedStyle as any)());
    ((t as any).height as any) === (0 as any) && ((t as any).height = (((e as any).fontMetrics as any)() as any).xHeight), t = (re as any)(t, e);
    var a: any = ((e as any).fontMetrics as any)(),
      n: any = (a as any).defaultRuleThickness,
      l: any = n;
    (((e as any).style as any).id as any) < (((N as any).TEXT as any).id as any) && (l = (((e as any).fontMetrics as any)() as any).xHeight);
    var u: any = (n as any) + ((l as any) / (4 as any) as any),
      h: any = ((((t as any).height as any) + ((t as any).depth as any) as any) + (u as any) as any) + (n as any),
      {
        span: c,
        ruleWidth: v,
        advanceWidth: g
      }: any = (Xa as any)(h, e),
      b: any = ((c as any).height as any) - (v as any);
    (b as any) > ((((t as any).height as any) + ((t as any).depth as any) as any) + (u as any) as any) && (u = ((((u as any) + (b as any) as any) - ((t as any).height as any) as any) - ((t as any).depth as any) as any) / (2 as any));
    var y: any = ((((c as any).height as any) - ((t as any).height as any) as any) - (u as any) as any) - (v as any);
    ((t as any).style as any).paddingLeft = (A as any)(g);
    var x: any = (G as any)({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: t,
        wrapperClasses: ["svg-align"]
      }, {
        type: "kern",
        size: -(((t as any).height as any) + (y as any))
      }, {
        type: "elem",
        elem: c
      }, {
        type: "kern",
        size: v
      }]
    });
    if ((r as any).index) {
      var M: any = ((e as any).havingStyle as any)((N as any).SCRIPTSCRIPT),
        T: any = (U as any)((r as any).index, M, e),
        C: any = (.6 as any) * (((x as any).height as any) - ((x as any).depth as any) as any),
        q: any = (G as any)({
          positionType: "shift",
          positionData: -C,
          children: [{
            type: "elem",
            elem: T
          }]
        }),
        I: any = (k as any)(["root"], [q]);
      return (k as any)(["mord", "sqrt"], [I, x], e);
    } else return (k as any)(["mord", "sqrt"], [x], e);
  },
  mathmlBuilder(r: any, e: any): any {
    var {
      body: t,
      index: a
    }: any = r;
    return a ? new (z as any)("mroot", [(Y as any)(t, e), (Y as any)(a, e)]) : new (z as any)("msqrt", [(Y as any)(t, e)]);
  }
});
var yr: any = {
  display: (N as any).DISPLAY,
  text: (N as any).TEXT,
  script: (N as any).SCRIPT,
  scriptscript: (N as any).SCRIPTSCRIPT
};
(B as any)({
  type: "styling",
  names: ["\\displaystyle", "\\textstyle", "\\scriptstyle", "\\scriptscriptstyle"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    primitive: !0
  },
  handler(r: any, e: any): any {
    var {
        breakOnTokenText: t,
        funcName: a,
        parser: n
      }: any = r,
      l: any = ((n as any).parseExpression as any)(!0, t),
      u: any = ((a as any).slice as any)(1, ((a as any).length as any) - (5 as any));
    return {
      type: "styling",
      mode: (n as any).mode,
      style: u,
      body: l
    };
  },
  htmlBuilder(r: any, e: any): any {
    var t: any = (yr as any)[(r as any).style],
      a: any = ((((e as any).havingStyle as any)(t) as any).withFont as any)("");
    return (b1 as any)((r as any).body, a, e);
  },
  mathmlBuilder(r: any, e: any): any {
    var t: any = (yr as any)[(r as any).style],
      a: any = ((e as any).havingStyle as any)(t),
      n: any = (p0 as any)((r as any).body, a),
      l: any = new (z as any)("mstyle", n),
      u: any = {
        display: ["0", "true"],
        text: ["0", "false"],
        script: ["1", "false"],
        scriptscript: ["2", "false"]
      },
      h: any = (u as any)[(r as any).style];
    return ((l as any).setAttribute as any)("scriptlevel", (h as any)[0]), ((l as any).setAttribute as any)("displaystyle", (h as any)[1]), l;
  }
});
var i4: any = function (this: any, e: any, t: any): any {
  var a: any = (e as any).base;
  if (a) {
    if (((a as any).type as any) === ("op" as any)) {
      var n: any = (a as any).limits && ((((t as any).style as any).size as any) === (((N as any).DISPLAY as any).size as any) || (a as any).alwaysHandleSupSub);
      return n ? le : null;
    } else if (((a as any).type as any) === ("operatorname" as any)) {
      var l: any = (a as any).alwaysHandleSupSub && ((((t as any).style as any).size as any) === (((N as any).DISPLAY as any).size as any) || (a as any).limits);
      return l ? g1 : null;
    } else {
      if (((a as any).type as any) === ("accent" as any)) return (C0 as any)((a as any).base) ? Nt : null;
      if (((a as any).type as any) === ("horizBrace" as any)) {
        var u: any = !(e as any).sub;
        return (u as any) === ((a as any).isOver as any) ? f1 : null;
      } else return null;
    }
  } else return null;
};
($0 as any)({
  type: "supsub",
  htmlBuilder(r: any, e: any): any {
    var t: any = (i4 as any)(r, e);
    if (t) return (t as any)(r, e);
    var {
        base: a,
        sup: n,
        sub: l
      }: any = r,
      u: any = (U as any)(a, e),
      h: any,
      c: any,
      v: any = ((e as any).fontMetrics as any)(),
      g: any = 0,
      b: any = 0,
      y: any = a && (C0 as any)(a);
    if (n) {
      var x: any = ((e as any).havingStyle as any)((((e as any).style as any).sup as any)());
      h = (U as any)(n, x, e), y || (g = ((u as any).height as any) - ((((((x as any).fontMetrics as any)() as any).supDrop as any) * ((x as any).sizeMultiplier as any) as any) / ((e as any).sizeMultiplier as any) as any));
    }
    if (l) {
      var M: any = ((e as any).havingStyle as any)((((e as any).style as any).sub as any)());
      c = (U as any)(l, M, e), y || (b = ((u as any).depth as any) + ((((((M as any).fontMetrics as any)() as any).subDrop as any) * ((M as any).sizeMultiplier as any) as any) / ((e as any).sizeMultiplier as any) as any));
    }
    var T: any;
    ((e as any).style as any) === ((N as any).DISPLAY as any) ? T = (v as any).sup1 : ((e as any).style as any).cramped ? T = (v as any).sup3 : T = (v as any).sup2;
    var C: any = (e as any).sizeMultiplier,
      q: any = (A as any)(((.5 as any) / ((v as any).ptPerEm as any) as any) / (C as any)),
      I: any = null;
    if (c) {
      var O: any = (r as any).base && (((r as any).base as any).type as any) === ("op" as any) && ((r as any).base as any).name && ((((r as any).base as any).name as any) === ("\\oiint" as any) || (((r as any).base as any).name as any) === ("\\oiiint" as any));
      (u instanceof f0 || O) && (I = (A as any)(-(u as any).italic));
    }
    var F: any;
    if (h && c) {
      g = ((Math as any).max as any)(g, T, ((h as any).depth as any) + ((.25 as any) * ((v as any).xHeight as any) as any)), b = ((Math as any).max as any)(b, (v as any).sub2);
      var V: any = (v as any).defaultRuleThickness,
        L: any = (4 as any) * (V as any);
      if ((((g as any) - ((h as any).depth as any) as any) - (((c as any).height as any) - (b as any) as any) as any) < (L as any)) {
        b = ((L as any) - ((g as any) - ((h as any).depth as any) as any) as any) + ((c as any).height as any);
        var P: any = ((.8 as any) * ((v as any).xHeight as any) as any) - ((g as any) - ((h as any).depth as any) as any);
        (P as any) > (0 as any) && (g += P, b -= P);
      }
      var W: any = [{
        type: "elem",
        elem: c,
        shift: b,
        marginRight: q,
        marginLeft: I
      }, {
        type: "elem",
        elem: h,
        shift: -g,
        marginRight: q
      }];
      F = (G as any)({
        positionType: "individualShift",
        children: W
      });
    } else if (c) {
      b = ((Math as any).max as any)(b, (v as any).sub1, ((c as any).height as any) - ((.8 as any) * ((v as any).xHeight as any) as any));
      var X: any = [{
        type: "elem",
        elem: c,
        marginLeft: I,
        marginRight: q
      }];
      F = (G as any)({
        positionType: "shift",
        positionData: b,
        children: X
      });
    } else if (h) g = ((Math as any).max as any)(g, T, ((h as any).depth as any) + ((.25 as any) * ((v as any).xHeight as any) as any)), F = (G as any)({
      positionType: "shift",
      positionData: -g,
      children: [{
        type: "elem",
        elem: h,
        marginRight: q
      }]
    });else throw new (Error as any)("supsub must have either sup or sub.");
    var h0: any = (wt as any)(u, "right") || "mord";
    return (k as any)([h0], [u, (k as any)(["msupsub"], [F])], e);
  },
  mathmlBuilder(r: any, e: any): any {
    var t: any = !1,
      a: any,
      n: any;
    (r as any).base && (((r as any).base as any).type as any) === ("horizBrace" as any) && (n = !!(r as any).sup, (n as any) === (((r as any).base as any).isOver as any) && (t = !0, a = ((r as any).base as any).isOver)), (r as any).base && ((((r as any).base as any).type as any) === ("op" as any) || (((r as any).base as any).type as any) === ("operatorname" as any)) && (((r as any).base as any).parentIsSupSub = !0);
    var l: any = [(Y as any)((r as any).base, e)];
    (r as any).sub && ((l as any).push as any)((Y as any)((r as any).sub, e)), (r as any).sup && ((l as any).push as any)((Y as any)((r as any).sup, e));
    var u: any;
    if (t) u = a ? "mover" : "munder";else if ((r as any).sub) {
      if ((r as any).sup) {
        var v: any = (r as any).base;
        v && ((v as any).type as any) === ("op" as any) && (v as any).limits && ((e as any).style as any) === ((N as any).DISPLAY as any) || v && ((v as any).type as any) === ("operatorname" as any) && (v as any).alwaysHandleSupSub && (((e as any).style as any) === ((N as any).DISPLAY as any) || (v as any).limits) ? u = "munderover" : u = "msubsup";
      } else {
        var c: any = (r as any).base;
        c && ((c as any).type as any) === ("op" as any) && (c as any).limits && (((e as any).style as any) === ((N as any).DISPLAY as any) || (c as any).alwaysHandleSupSub) || c && ((c as any).type as any) === ("operatorname" as any) && (c as any).alwaysHandleSupSub && ((c as any).limits || ((e as any).style as any) === ((N as any).DISPLAY as any)) ? u = "munder" : u = "msub";
      }
    } else {
      var h: any = (r as any).base;
      h && ((h as any).type as any) === ("op" as any) && (h as any).limits && (((e as any).style as any) === ((N as any).DISPLAY as any) || (h as any).alwaysHandleSupSub) || h && ((h as any).type as any) === ("operatorname" as any) && (h as any).alwaysHandleSupSub && ((h as any).limits || ((e as any).style as any) === ((N as any).DISPLAY as any)) ? u = "mover" : u = "msup";
    }
    return new (z as any)(u, l);
  }
});
($0 as any)({
  type: "atom",
  htmlBuilder(r: any, e: any): any {
    return (qt as any)((r as any).text, (r as any).mode, e, [("m" as any) + ((r as any).family as any)]);
  },
  mathmlBuilder(r: any, e: any): any {
    var t: any = new (z as any)("mo", [(b0 as any)((r as any).text, (r as any).mode)]);
    if (((r as any).family as any) === ("bin" as any)) {
      var a: any = (It as any)(r, e);
      (a as any) === ("bold-italic" as any) && ((t as any).setAttribute as any)("mathvariant", a);
    } else ((r as any).family as any) === ("punct" as any) ? ((t as any).setAttribute as any)("separator", "true") : (((r as any).family as any) === ("open" as any) || ((r as any).family as any) === ("close" as any)) && ((t as any).setAttribute as any)("stretchy", "false");
    return t;
  }
});
var y1: any = {
  mi: "italic",
  mn: "normal",
  mtext: "normal"
};
($0 as any)({
  type: "mathord",
  htmlBuilder(r: any, e: any): any {
    return (Fe as any)(r, e, "mathord");
  },
  mathmlBuilder(r: any, e: any): any {
    var t: any = new (z as any)("mi", [(b0 as any)((r as any).text, (r as any).mode, e)]),
      a: any = (It as any)(r, e) || "italic";
    return (a as any) !== ((y1 as any)[(t as any).type] as any) && ((t as any).setAttribute as any)("mathvariant", a), t;
  }
});
($0 as any)({
  type: "textord",
  htmlBuilder(r: any, e: any): any {
    return (Fe as any)(r, e, "textord");
  },
  mathmlBuilder(r: any, e: any): any {
    var t: any = (b0 as any)((r as any).text, (r as any).mode, e),
      a: any = (It as any)(r, e) || "normal",
      n: any;
    return ((r as any).mode as any) === ("text" as any) ? n = new (z as any)("mtext", [t]) : ((/[0-9]/ as any).test as any)((r as any).text) ? n = new (z as any)("mn", [t]) : ((r as any).text as any) === ("\\prime" as any) ? n = new (z as any)("mo", [t]) : n = new (z as any)("mi", [t]), (a as any) !== ((y1 as any)[(n as any).type] as any) && ((n as any).setAttribute as any)("mathvariant", a), n;
  }
});
var ht: any = {
    "\\nobreak": "nobreak",
    "\\allowbreak": "allowbreak"
  },
  mt: any = {
    " ": {},
    "\\ ": {},
    "~": {
      className: "nobreak"
    },
    "\\space": {},
    "\\nobreakspace": {
      className: "nobreak"
    }
  };
($0 as any)({
  type: "spacing",
  htmlBuilder(r: any, e: any): any {
    if (((mt as any).hasOwnProperty as any)((r as any).text)) {
      var t: any = ((mt as any)[(r as any).text] as any).className || "";
      if (((r as any).mode as any) === ("text" as any)) {
        var a: any = (Fe as any)(r, e, "textord");
        return (((a as any).classes as any).push as any)(t), a;
      } else return (k as any)(["mspace", t], [(qt as any)((r as any).text, (r as any).mode, e)], e);
    } else {
      if (((ht as any).hasOwnProperty as any)((r as any).text)) return (k as any)(["mspace", (ht as any)[(r as any).text]], [], e);
      throw new (S as any)((('Unknown type of space "' as any) + ((r as any).text as any) as any) + ('"' as any));
    }
  },
  mathmlBuilder(r: any, e: any): any {
    var t: any;
    if (((mt as any).hasOwnProperty as any)((r as any).text)) t = new (z as any)("mtext", [new (_ as any)(" ")]);else {
      if (((ht as any).hasOwnProperty as any)((r as any).text)) return new (z as any)("mspace");
      throw new (S as any)((('Unknown type of space "' as any) + ((r as any).text as any) as any) + ('"' as any));
    }
    return t;
  }
});
var xr: any = (): any => {
  var r: any = new (z as any)("mtd", []);
  return ((r as any).setAttribute as any)("width", "50%"), r;
};
($0 as any)({
  type: "tag",
  mathmlBuilder(r: any, e: any): any {
    var t: any = new (z as any)("mtable", [new (z as any)("mtr", [(xr as any)(), new (z as any)("mtd", [(U0 as any)((r as any).body, e)]), (xr as any)(), new (z as any)("mtd", [(U0 as any)((r as any).tag, e)])])]);
    return ((t as any).setAttribute as any)("width", "100%"), t;
  }
});
var wr: any = {
    "\\text": void 0,
    "\\textrm": "textrm",
    "\\textsf": "textsf",
    "\\texttt": "texttt",
    "\\textnormal": "textrm"
  },
  kr: any = {
    "\\textbf": "textbf",
    "\\textmd": "textmd"
  },
  l4: any = {
    "\\textit": "textit",
    "\\textup": "textup"
  },
  Sr: any = (r: any, e: any): any => {
    var t: any = (r as any).font;
    if (t) {
      if ((wr as any)[t]) return ((e as any).withTextFontFamily as any)((wr as any)[t]);
      if ((kr as any)[t]) return ((e as any).withTextFontWeight as any)((kr as any)[t]);
      if ((t as any) === ("\\emph" as any)) return ((e as any).fontShape as any) === ("textit" as any) ? ((e as any).withTextFontShape as any)("textup") : ((e as any).withTextFontShape as any)("textit");
    } else return e;
    return ((e as any).withTextFontShape as any)((l4 as any)[t]);
  };
(B as any)({
  type: "text",
  names: ["\\text", "\\textrm", "\\textsf", "\\texttt", "\\textnormal", "\\textbf", "\\textmd", "\\textit", "\\textup", "\\emph"],
  props: {
    numArgs: 1,
    argTypes: ["text"],
    allowedInArgument: !0,
    allowedInText: !0
  },
  handler(r: any, e: any): any {
    var {
        parser: t,
        funcName: a
      }: any = r,
      n: any = (e as any)[0];
    return {
      type: "text",
      mode: (t as any).mode,
      body: (Q as any)(n),
      font: a
    };
  },
  htmlBuilder(r: any, e: any): any {
    var t: any = (Sr as any)(r, e),
      a: any = (a0 as any)((r as any).body, t, !0);
    return (k as any)(["mord", "text"], a, t);
  },
  mathmlBuilder(r: any, e: any): any {
    var t: any = (Sr as any)(r, e);
    return (U0 as any)((r as any).body, t);
  }
});
(B as any)({
  type: "underline",
  names: ["\\underline"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler(r: any, e: any): any {
    var {
      parser: t
    }: any = r;
    return {
      type: "underline",
      mode: (t as any).mode,
      body: (e as any)[0]
    };
  },
  htmlBuilder(r: any, e: any): any {
    var t: any = (U as any)((r as any).body, e),
      a: any = (te as any)("underline-line", e),
      n: any = (((e as any).fontMetrics as any)() as any).defaultRuleThickness,
      l: any = (G as any)({
        positionType: "top",
        positionData: (t as any).height,
        children: [{
          type: "kern",
          size: n
        }, {
          type: "elem",
          elem: a
        }, {
          type: "kern",
          size: (3 as any) * (n as any)
        }, {
          type: "elem",
          elem: t
        }]
      });
    return (k as any)(["mord", "underline"], [l], e);
  },
  mathmlBuilder(r: any, e: any): any {
    var t: any = new (z as any)("mo", [new (_ as any)("\u203E")]);
    ((t as any).setAttribute as any)("stretchy", "true");
    var a: any = new (z as any)("munder", [(Y as any)((r as any).body, e), t]);
    return ((a as any).setAttribute as any)("accentunder", "true"), a;
  }
});
(B as any)({
  type: "vcenter",
  names: ["\\vcenter"],
  props: {
    numArgs: 1,
    argTypes: ["original"],
    allowedInText: !1
  },
  handler(r: any, e: any): any {
    var {
      parser: t
    }: any = r;
    return {
      type: "vcenter",
      mode: (t as any).mode,
      body: (e as any)[0]
    };
  },
  htmlBuilder(r: any, e: any): any {
    var t: any = (U as any)((r as any).body, e),
      a: any = (((e as any).fontMetrics as any)() as any).axisHeight,
      n: any = (.5 as any) * ((((t as any).height as any) - (a as any) as any) - (((t as any).depth as any) + (a as any) as any) as any);
    return (G as any)({
      positionType: "shift",
      positionData: n,
      children: [{
        type: "elem",
        elem: t
      }]
    });
  },
  mathmlBuilder(r: any, e: any): any {
    var t: any = new (z as any)("mpadded", [(Y as any)((r as any).body, e)], ["vcenter"]);
    return new (z as any)("mrow", [t]);
  }
});
(B as any)({
  type: "verb",
  names: ["\\verb"],
  props: {
    numArgs: 0,
    allowedInText: !0
  },
  handler(r: any, e: any, t: any): any {
    throw new (S as any)("\\verb ended by end of line instead of matching delimiter");
  },
  htmlBuilder(r: any, e: any): any {
    for (var t: any = (zr as any)(r), a: any = [], n: any = ((e as any).havingStyle as any)((((e as any).style as any).text as any)()), l: any = 0; (l as any) < ((t as any).length as any); l++) {
      var u: any = (t as any)[l];
      (u as any) === ("~" as any) && (u = "\\textasciitilde"), ((a as any).push as any)((s0 as any)(u, "Typewriter-Regular", (r as any).mode, n, ["mord", "texttt"]));
    }
    return (k as any)(((["mord", "text"] as any).concat as any)(((n as any).sizingClasses as any)(e)), (Or as any)(a), n);
  },
  mathmlBuilder(r: any, e: any): any {
    var t: any = new (_ as any)((zr as any)(r)),
      a: any = new (z as any)("mtext", [t]);
    return ((a as any).setAttribute as any)("mathvariant", "monospace"), a;
  }
});
var zr: any = (r: any): any => (((r as any).body as any).replace as any)(/ /g, (r as any).star ? "\u2423" : " "),
  F0: any = Pr,
  x1: any = `[ \r
	]`,
  s4: string = "\\\\[a-zA-Z@]+",
  u4: string = "\\\\[^\uD800-\uDFFF]",
  o4: any = (((("(" as any) + (s4 as any) as any) + (")" as any) as any) + (x1 as any) as any) + ("*" as any),
  h4: any = `\\\\(
|[ \r	]+
?)[ \r	]*`,
  Mt: string = "[\u0300-\u036F]",
  m4: any = new (RegExp as any)((Mt as any) + ("+$" as any)),
  c4: any = (((((((((("(" as any) + (x1 as any) as any) + ("+)|" as any) as any) + ((h4 as any) + ("|" as any) as any) as any) + ("([!-\\[\\]-\u2027\u202A-\uD7FF\uF900-\uFFFF]" as any) as any) + ((Mt as any) + ("*" as any) as any) as any) + ("|[\uD800-\uDBFF][\uDC00-\uDFFF]" as any) as any) + ((Mt as any) + ("*" as any) as any) as any) + ("|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5" as any) as any) + (("|" as any) + (o4 as any) as any) as any) + ((("|" as any) + (u4 as any) as any) + (")" as any) as any);
class Ar {
  declare catcodes: any;
  declare tokenRegex: any;
  declare settings: any;
  declare input: any;
  [key: string]: any;
  constructor(e: any, t: any) {
    (this as any).input = e, (this as any).settings = t, (this as any).tokenRegex = new (RegExp as any)(c4, "g"), (this as any).catcodes = {
      "%": 14,
      "~": 13
    };
  }
  setCatcode(e: any, t: any): any {
    ((this as any).catcodes as any)[e] = t;
  }
  lex(): any {
    var e: any = (this as any).input,
      t: any = ((this as any).tokenRegex as any).lastIndex;
    if ((t as any) === ((e as any).length as any)) return new (d0 as any)("EOF", new (c0 as any)(this, t, t));
    var a: any = (((this as any).tokenRegex as any).exec as any)(e);
    if ((a as any) === (null as any) || ((a as any).index as any) !== (t as any)) throw new (S as any)((("Unexpected character: '" as any) + ((e as any)[t] as any) as any) + ("'" as any), new (d0 as any)((e as any)[t], new (c0 as any)(this, t, (t as any) + (1 as any))));
    var n: any = (a as any)[6] || (a as any)[3] || ((a as any)[2] ? "\\ " : " ");
    if ((((this as any).catcodes as any)[n] as any) === (14 as any)) {
      var l: any = ((e as any).indexOf as any)(`
`, ((this as any).tokenRegex as any).lastIndex);
      return (l as any) === (-1 as any) ? (((this as any).tokenRegex as any).lastIndex = (e as any).length, (((this as any).settings as any).reportNonstrict as any)("commentAtEnd", "% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")) : ((this as any).tokenRegex as any).lastIndex = (l as any) + (1 as any), ((this as any).lex as any)();
    }
    return new (d0 as any)(n, new (c0 as any)(this, t, ((this as any).tokenRegex as any).lastIndex));
  }
}
class d4 {
  declare undefStack: any;
  declare builtins: any;
  declare current: any;
  [key: string]: any;
  constructor(e: any, t: any) {
    (e as any) === (void 0 as any) && (e = {}), (t as any) === (void 0 as any) && (t = {}), (this as any).current = t, (this as any).builtins = e, (this as any).undefStack = [];
  }
  beginGroup(): any {
    (((this as any).undefStack as any).push as any)({});
  }
  endGroup(): any {
    var t: any;
    if ((((this as any).undefStack as any).length as any) === (0 as any)) throw new (S as any)("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");
    var e: any = (((this as any).undefStack as any).pop as any)();
    for (t in e) ((e as any).hasOwnProperty as any)(t) && (((e as any)[t] as any) == (null as any) ? delete ((this as any).current as any)[t] : ((this as any).current as any)[t] = (e as any)[t]);
  }
  endGroups(): any {
    for (; (((this as any).undefStack as any).length as any) > (0 as any);) ((this as any).endGroup as any)();
  }
  has(e: any): any {
    return (((this as any).current as any).hasOwnProperty as any)(e) || (((this as any).builtins as any).hasOwnProperty as any)(e);
  }
  get(e: any): any {
    return (((this as any).current as any).hasOwnProperty as any)(e) ? ((this as any).current as any)[e] : ((this as any).builtins as any)[e];
  }
  set(e: any, t: any, a: any): any {
    if ((a as any) === (void 0 as any) && (a = !1), a) {
      for (var n: any = 0; (n as any) < (((this as any).undefStack as any).length as any); n++) delete (((this as any).undefStack as any)[n] as any)[e];
      (((this as any).undefStack as any).length as any) > (0 as any) && ((((this as any).undefStack as any)[(((this as any).undefStack as any).length as any) - (1 as any)] as any)[e] = t);
    } else {
      var l: any = ((this as any).undefStack as any)[(((this as any).undefStack as any).length as any) - (1 as any)];
      l && !((l as any).hasOwnProperty as any)(e) && ((l as any)[e] = ((this as any).current as any)[e]);
    }
    (t as any) == (null as any) ? delete ((this as any).current as any)[e] : ((this as any).current as any)[e] = t;
  }
}
var f4: any = o1;
(m as any)("\\noexpand", function (this: any, r: any): any {
  var e: any = ((r as any).popToken as any)();
  return ((r as any).isExpandable as any)((e as any).text) && ((e as any).noexpand = !0, (e as any).treatAsRelax = !0), {
    tokens: [e],
    numArgs: 0
  };
});
(m as any)("\\expandafter", function (this: any, r: any): any {
  var e: any = ((r as any).popToken as any)();
  return ((r as any).expandOnce as any)(!0), {
    tokens: [e],
    numArgs: 0
  };
});
(m as any)("\\@firstoftwo", function (this: any, r: any): any {
  var e: any = ((r as any).consumeArgs as any)(2);
  return {
    tokens: (e as any)[0],
    numArgs: 0
  };
});
(m as any)("\\@secondoftwo", function (this: any, r: any): any {
  var e: any = ((r as any).consumeArgs as any)(2);
  return {
    tokens: (e as any)[1],
    numArgs: 0
  };
});
(m as any)("\\@ifnextchar", function (this: any, r: any): any {
  var e: any = ((r as any).consumeArgs as any)(3);
  ((r as any).consumeSpaces as any)();
  var t: any = ((r as any).future as any)();
  return (((e as any)[0] as any).length as any) === (1 as any) && ((((e as any)[0] as any)[0] as any).text as any) === ((t as any).text as any) ? {
    tokens: (e as any)[1],
    numArgs: 0
  } : {
    tokens: (e as any)[2],
    numArgs: 0
  };
});
(m as any)("\\@ifstar", "\\@ifnextchar *{\\@firstoftwo{#1}}");
(m as any)("\\TextOrMath", function (this: any, r: any): any {
  var e: any = ((r as any).consumeArgs as any)(2);
  return ((r as any).mode as any) === ("text" as any) ? {
    tokens: (e as any)[0],
    numArgs: 0
  } : {
    tokens: (e as any)[1],
    numArgs: 0
  };
});
var Mr: any = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  a: 10,
  A: 10,
  b: 11,
  B: 11,
  c: 12,
  C: 12,
  d: 13,
  D: 13,
  e: 14,
  E: 14,
  f: 15,
  F: 15
};
(m as any)("\\char", function (this: any, r: any): any {
  var e: any = ((r as any).popToken as any)(),
    t: any,
    a: any = 0;
  if (((e as any).text as any) === ("'" as any)) t = 8, e = ((r as any).popToken as any)();else if (((e as any).text as any) === ('"' as any)) t = 16, e = ((r as any).popToken as any)();else if (((e as any).text as any) === ("`" as any)) {
    if (e = ((r as any).popToken as any)(), (((e as any).text as any)[0] as any) === ("\\" as any)) a = (((e as any).text as any).charCodeAt as any)(1);else {
      if (((e as any).text as any) === ("EOF" as any)) throw new (S as any)("\\char` missing argument");
      a = (((e as any).text as any).charCodeAt as any)(0);
    }
  } else t = 10;
  if (t) {
    if (a = (Mr as any)[(e as any).text], (a as any) == (null as any) || (a as any) >= (t as any)) throw new (S as any)(((("Invalid base-" as any) + (t as any) as any) + (" digit " as any) as any) + ((e as any).text as any));
    for (var n: any; ((n = (Mr as any)[(((r as any).future as any)() as any).text]) as any) != (null as any) && (n as any) < (t as any);) a *= t, a += n, ((r as any).popToken as any)();
  }
  return (("\\@char{" as any) + (a as any) as any) + ("}" as any);
});
var Lt: any = (r: any, e: any, t: any, a: any): any => {
  var n: any = (((r as any).consumeArg as any)() as any).tokens;
  if (((n as any).length as any) !== (1 as any)) throw new (S as any)("\\newcommand's first argument must be a macro name");
  var l: any = ((n as any)[0] as any).text,
    u: any = ((r as any).isDefined as any)(l);
  if (u && !e) throw new (S as any)(((("\\newcommand{" as any) + (l as any) as any) + ("} attempting to redefine " as any) as any) + ((l as any) + ("; use \\renewcommand" as any) as any));
  if (!u && !t) throw new (S as any)((((("\\renewcommand{" as any) + (l as any) as any) + ("} when command " as any) as any) + (l as any) as any) + (" does not yet exist; use \\newcommand" as any));
  var h: any = 0;
  if (n = (((r as any).consumeArg as any)() as any).tokens, ((n as any).length as any) === (1 as any) && (((n as any)[0] as any).text as any) === ("[" as any)) {
    for (var c: any = "", v: any = ((r as any).expandNextToken as any)(); ((v as any).text as any) !== ("]" as any) && ((v as any).text as any) !== ("EOF" as any);) c += (v as any).text, v = ((r as any).expandNextToken as any)();
    if (!((c as any).match as any)(/^\s*[0-9]+\s*$/)) throw new (S as any)(("Invalid number of arguments: " as any) + (c as any));
    h = (parseInt as any)(c), n = (((r as any).consumeArg as any)() as any).tokens;
  }
  return u && a || (((r as any).macros as any).set as any)(l, {
    tokens: n,
    numArgs: h
  }), "";
};
(m as any)("\\newcommand", (r: any): any => (Lt as any)(r, !1, !0, !1));
(m as any)("\\renewcommand", (r: any): any => (Lt as any)(r, !0, !1, !1));
(m as any)("\\providecommand", (r: any): any => (Lt as any)(r, !0, !0, !0));
(m as any)("\\message", (r: any): any => {
  var e: any = (((r as any).consumeArgs as any)(1) as any)[0];
  return ((console as any).log as any)(((((((e as any).reverse as any)() as any).map as any)((t: any): any => (t as any).text) as any).join as any)("")), "";
});
(m as any)("\\errmessage", (r: any): any => {
  var e: any = (((r as any).consumeArgs as any)(1) as any)[0];
  return ((console as any).error as any)(((((((e as any).reverse as any)() as any).map as any)((t: any): any => (t as any).text) as any).join as any)("")), "";
});
(m as any)("\\show", (r: any): any => {
  var e: any = ((r as any).popToken as any)(),
    t: any = (e as any).text;
  return ((console as any).log as any)(e, (((r as any).macros as any).get as any)(t), (F0 as any)[t], (($ as any).math as any)[t], (($ as any).text as any)[t]), "";
});
(m as any)("\\bgroup", "{");
(m as any)("\\egroup", "}");
(m as any)("~", "\\nobreakspace");
(m as any)("\\lq", "`");
(m as any)("\\rq", "'");
(m as any)("\\aa", "\\r a");
(m as any)("\\AA", "\\r A");
(m as any)("\\textcopyright", "\\html@mathml{\\textcircled{c}}{\\char`©}");
(m as any)("\\copyright", "\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}");
(m as any)("\\textregistered", "\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}");
(m as any)("\u212C", "\\mathscr{B}");
(m as any)("\u2130", "\\mathscr{E}");
(m as any)("\u2131", "\\mathscr{F}");
(m as any)("\u210B", "\\mathscr{H}");
(m as any)("\u2110", "\\mathscr{I}");
(m as any)("\u2112", "\\mathscr{L}");
(m as any)("\u2133", "\\mathscr{M}");
(m as any)("\u211B", "\\mathscr{R}");
(m as any)("\u212D", "\\mathfrak{C}");
(m as any)("\u210C", "\\mathfrak{H}");
(m as any)("\u2128", "\\mathfrak{Z}");
(m as any)("\\Bbbk", "\\Bbb{k}");
(m as any)("\\llap", "\\mathllap{\\textrm{#1}}");
(m as any)("\\rlap", "\\mathrlap{\\textrm{#1}}");
(m as any)("\\clap", "\\mathclap{\\textrm{#1}}");
(m as any)("\\mathstrut", "\\vphantom{(}");
(m as any)("\\underbar", "\\underline{\\text{#1}}");
(m as any)("\\not", '\\html@mathml{\\mathrel{\\mathrlap\\@not}\\nobreak}{\\char"338}');
(m as any)("\\neq", "\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`\u2260}}");
(m as any)("\\ne", "\\neq");
(m as any)("\u2260", "\\neq");
(m as any)("\\notin", "\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`\u2209}}");
(m as any)("\u2209", "\\notin");
(m as any)("\u2258", "\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`\u2258}}");
(m as any)("\u2259", "\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`\u2258}}");
(m as any)("\u225A", "\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`\u225A}}");
(m as any)("\u225B", "\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`\u225B}}");
(m as any)("\u225D", "\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`\u225D}}");
(m as any)("\u225E", "\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`\u225E}}");
(m as any)("\u225F", "\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`\u225F}}");
(m as any)("\u27C2", "\\perp");
(m as any)("\u203C", "\\mathclose{!\\mkern-0.8mu!}");
(m as any)("\u220C", "\\notni");
(m as any)("\u231C", "\\ulcorner");
(m as any)("\u231D", "\\urcorner");
(m as any)("\u231E", "\\llcorner");
(m as any)("\u231F", "\\lrcorner");
(m as any)("©", "\\copyright");
(m as any)("®", "\\textregistered");
(m as any)("\\ulcorner", '\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}');
(m as any)("\\urcorner", '\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}');
(m as any)("\\llcorner", '\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}');
(m as any)("\\lrcorner", '\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}');
(m as any)("\\vdots", "{\\varvdots\\rule{0pt}{15pt}}");
(m as any)("\u22EE", "\\vdots");
(m as any)("\\varGamma", "\\mathit{\\Gamma}");
(m as any)("\\varDelta", "\\mathit{\\Delta}");
(m as any)("\\varTheta", "\\mathit{\\Theta}");
(m as any)("\\varLambda", "\\mathit{\\Lambda}");
(m as any)("\\varXi", "\\mathit{\\Xi}");
(m as any)("\\varPi", "\\mathit{\\Pi}");
(m as any)("\\varSigma", "\\mathit{\\Sigma}");
(m as any)("\\varUpsilon", "\\mathit{\\Upsilon}");
(m as any)("\\varPhi", "\\mathit{\\Phi}");
(m as any)("\\varPsi", "\\mathit{\\Psi}");
(m as any)("\\varOmega", "\\mathit{\\Omega}");
(m as any)("\\substack", "\\begin{subarray}{c}#1\\end{subarray}");
(m as any)("\\colon", "\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax");
(m as any)("\\boxed", "\\fbox{$\\displaystyle{#1}$}");
(m as any)("\\iff", "\\DOTSB\\;\\Longleftrightarrow\\;");
(m as any)("\\implies", "\\DOTSB\\;\\Longrightarrow\\;");
(m as any)("\\impliedby", "\\DOTSB\\;\\Longleftarrow\\;");
(m as any)("\\dddot", "{\\overset{\\raisebox{-0.1ex}{\\normalsize ...}}{#1}}");
(m as any)("\\ddddot", "{\\overset{\\raisebox{-0.1ex}{\\normalsize ....}}{#1}}");
var Tr: any = {
    ",": "\\dotsc",
    "\\not": "\\dotsb",
    "+": "\\dotsb",
    "=": "\\dotsb",
    "<": "\\dotsb",
    ">": "\\dotsb",
    "-": "\\dotsb",
    "*": "\\dotsb",
    ":": "\\dotsb",
    "\\DOTSB": "\\dotsb",
    "\\coprod": "\\dotsb",
    "\\bigvee": "\\dotsb",
    "\\bigwedge": "\\dotsb",
    "\\biguplus": "\\dotsb",
    "\\bigcap": "\\dotsb",
    "\\bigcup": "\\dotsb",
    "\\prod": "\\dotsb",
    "\\sum": "\\dotsb",
    "\\bigotimes": "\\dotsb",
    "\\bigoplus": "\\dotsb",
    "\\bigodot": "\\dotsb",
    "\\bigsqcup": "\\dotsb",
    "\\And": "\\dotsb",
    "\\longrightarrow": "\\dotsb",
    "\\Longrightarrow": "\\dotsb",
    "\\longleftarrow": "\\dotsb",
    "\\Longleftarrow": "\\dotsb",
    "\\longleftrightarrow": "\\dotsb",
    "\\Longleftrightarrow": "\\dotsb",
    "\\mapsto": "\\dotsb",
    "\\longmapsto": "\\dotsb",
    "\\hookrightarrow": "\\dotsb",
    "\\doteq": "\\dotsb",
    "\\mathbin": "\\dotsb",
    "\\mathrel": "\\dotsb",
    "\\relbar": "\\dotsb",
    "\\Relbar": "\\dotsb",
    "\\xrightarrow": "\\dotsb",
    "\\xleftarrow": "\\dotsb",
    "\\DOTSI": "\\dotsi",
    "\\int": "\\dotsi",
    "\\oint": "\\dotsi",
    "\\iint": "\\dotsi",
    "\\iiint": "\\dotsi",
    "\\iiiint": "\\dotsi",
    "\\idotsint": "\\dotsi",
    "\\DOTSX": "\\dotsx"
  },
  v4: any = new (Set as any)(["bin", "rel"]);
(m as any)("\\dots", function (this: any, r: any): any {
  var e: any = "\\dotso",
    t: any = (((r as any).expandAfterFuture as any)() as any).text;
  return t in Tr ? e = (Tr as any)[t] : ((((t as any).slice as any)(0, 4) as any) === ("\\not" as any) || t in ($ as any).math && ((v4 as any).has as any)(((($ as any).math as any)[t] as any).group)) && (e = "\\dotsb"), e;
});
var Pt: any = {
  ")": !0,
  "]": !0,
  "\\rbrack": !0,
  "\\}": !0,
  "\\rbrace": !0,
  "\\rangle": !0,
  "\\rceil": !0,
  "\\rfloor": !0,
  "\\rgroup": !0,
  "\\rmoustache": !0,
  "\\right": !0,
  "\\bigr": !0,
  "\\biggr": !0,
  "\\Bigr": !0,
  "\\Biggr": !0,
  $: !0,
  ";": !0,
  ".": !0,
  ",": !0
};
(m as any)("\\dotso", function (this: any, r: any): any {
  var e: any = (((r as any).future as any)() as any).text;
  return e in Pt ? "\\ldots\\," : "\\ldots";
});
(m as any)("\\dotsc", function (this: any, r: any): any {
  var e: any = (((r as any).future as any)() as any).text;
  return e in Pt && (e as any) !== ("," as any) ? "\\ldots\\," : "\\ldots";
});
(m as any)("\\cdots", function (this: any, r: any): any {
  var e: any = (((r as any).future as any)() as any).text;
  return e in Pt ? "\\@cdots\\," : "\\@cdots";
});
(m as any)("\\dotsb", "\\cdots");
(m as any)("\\dotsm", "\\cdots");
(m as any)("\\dotsi", "\\!\\cdots");
(m as any)("\\dotsx", "\\ldots\\,");
(m as any)("\\DOTSI", "\\relax");
(m as any)("\\DOTSB", "\\relax");
(m as any)("\\DOTSX", "\\relax");
(m as any)("\\tmspace", "\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax");
(m as any)("\\,", "\\tmspace+{3mu}{.1667em}");
(m as any)("\\thinspace", "\\,");
(m as any)("\\>", "\\mskip{4mu}");
(m as any)("\\:", "\\tmspace+{4mu}{.2222em}");
(m as any)("\\medspace", "\\:");
(m as any)("\\;", "\\tmspace+{5mu}{.2777em}");
(m as any)("\\thickspace", "\\;");
(m as any)("\\!", "\\tmspace-{3mu}{.1667em}");
(m as any)("\\negthinspace", "\\!");
(m as any)("\\negmedspace", "\\tmspace-{4mu}{.2222em}");
(m as any)("\\negthickspace", "\\tmspace-{5mu}{.277em}");
(m as any)("\\enspace", "\\kern.5em ");
(m as any)("\\enskip", "\\hskip.5em\\relax");
(m as any)("\\quad", "\\hskip1em\\relax");
(m as any)("\\qquad", "\\hskip2em\\relax");
(m as any)("\\tag", "\\@ifstar\\tag@literal\\tag@paren");
(m as any)("\\tag@paren", "\\tag@literal{({#1})}");
(m as any)("\\tag@literal", (r: any): any => {
  if ((((r as any).macros as any).get as any)("\\df@tag")) throw new (S as any)("Multiple \\tag");
  return "\\gdef\\df@tag{\\text{#1}}";
});
(m as any)("\\bmod", "\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}");
(m as any)("\\pod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)");
(m as any)("\\pmod", "\\pod{{\\rm mod}\\mkern6mu#1}");
(m as any)("\\mod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1");
(m as any)("\\newline", "\\\\\\relax");
(m as any)("\\TeX", "\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");
var w1: any = (A as any)(((((k0 as any)["Main-Regular"] as any)[84] as any)[1] as any) - ((.7 as any) * ((((k0 as any)["Main-Regular"] as any)[65] as any)[1] as any) as any));
(m as any)("\\LaTeX", (("\\textrm{\\html@mathml{" as any) + ((("L\\kern-.36em\\raisebox{" as any) + (w1 as any) as any) + ("}{\\scriptstyle A}" as any) as any) as any) + ("\\kern-.15em\\TeX}{LaTeX}}" as any));
(m as any)("\\KaTeX", (("\\textrm{\\html@mathml{" as any) + ((("K\\kern-.17em\\raisebox{" as any) + (w1 as any) as any) + ("}{\\scriptstyle A}" as any) as any) as any) + ("\\kern-.15em\\TeX}{KaTeX}}" as any));
(m as any)("\\hspace", "\\@ifstar\\@hspacer\\@hspace");
(m as any)("\\@hspace", "\\hskip #1\\relax");
(m as any)("\\@hspacer", "\\rule{0pt}{0pt}\\hskip #1\\relax");
(m as any)("\\ordinarycolon", ":");
(m as any)("\\vcentcolon", "\\mathrel{\\mathop\\ordinarycolon}");
(m as any)("\\dblcolon", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}');
(m as any)("\\coloneqq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}');
(m as any)("\\Coloneqq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}');
(m as any)("\\coloneq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}');
(m as any)("\\Coloneq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}');
(m as any)("\\eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}');
(m as any)("\\Eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}');
(m as any)("\\eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}');
(m as any)("\\Eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}');
(m as any)("\\colonapprox", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}');
(m as any)("\\Colonapprox", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}');
(m as any)("\\colonsim", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}');
(m as any)("\\Colonsim", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}');
(m as any)("\u2237", "\\dblcolon");
(m as any)("\u2239", "\\eqcolon");
(m as any)("\u2254", "\\coloneqq");
(m as any)("\u2255", "\\eqqcolon");
(m as any)("\u2A74", "\\Coloneqq");
(m as any)("\\ratio", "\\vcentcolon");
(m as any)("\\coloncolon", "\\dblcolon");
(m as any)("\\colonequals", "\\coloneqq");
(m as any)("\\coloncolonequals", "\\Coloneqq");
(m as any)("\\equalscolon", "\\eqqcolon");
(m as any)("\\equalscoloncolon", "\\Eqqcolon");
(m as any)("\\colonminus", "\\coloneq");
(m as any)("\\coloncolonminus", "\\Coloneq");
(m as any)("\\minuscolon", "\\eqcolon");
(m as any)("\\minuscoloncolon", "\\Eqcolon");
(m as any)("\\coloncolonapprox", "\\Colonapprox");
(m as any)("\\coloncolonsim", "\\Colonsim");
(m as any)("\\simcolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}");
(m as any)("\\simcoloncolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}");
(m as any)("\\approxcolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}");
(m as any)("\\approxcoloncolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}");
(m as any)("\\notni", "\\html@mathml{\\not\\ni}{\\mathrel{\\char`\u220C}}");
(m as any)("\\limsup", "\\DOTSB\\operatorname*{lim\\,sup}");
(m as any)("\\liminf", "\\DOTSB\\operatorname*{lim\\,inf}");
(m as any)("\\injlim", "\\DOTSB\\operatorname*{inj\\,lim}");
(m as any)("\\projlim", "\\DOTSB\\operatorname*{proj\\,lim}");
(m as any)("\\varlimsup", "\\DOTSB\\operatorname*{\\overline{lim}}");
(m as any)("\\varliminf", "\\DOTSB\\operatorname*{\\underline{lim}}");
(m as any)("\\varinjlim", "\\DOTSB\\operatorname*{\\underrightarrow{lim}}");
(m as any)("\\varprojlim", "\\DOTSB\\operatorname*{\\underleftarrow{lim}}");
(m as any)("\\gvertneqq", "\\html@mathml{\\@gvertneqq}{\u2269}");
(m as any)("\\lvertneqq", "\\html@mathml{\\@lvertneqq}{\u2268}");
(m as any)("\\ngeqq", "\\html@mathml{\\@ngeqq}{\u2271}");
(m as any)("\\ngeqslant", "\\html@mathml{\\@ngeqslant}{\u2271}");
(m as any)("\\nleqq", "\\html@mathml{\\@nleqq}{\u2270}");
(m as any)("\\nleqslant", "\\html@mathml{\\@nleqslant}{\u2270}");
(m as any)("\\nshortmid", "\\html@mathml{\\@nshortmid}{\u2224}");
(m as any)("\\nshortparallel", "\\html@mathml{\\@nshortparallel}{\u2226}");
(m as any)("\\nsubseteqq", "\\html@mathml{\\@nsubseteqq}{\u2288}");
(m as any)("\\nsupseteqq", "\\html@mathml{\\@nsupseteqq}{\u2289}");
(m as any)("\\varsubsetneq", "\\html@mathml{\\@varsubsetneq}{\u228A}");
(m as any)("\\varsubsetneqq", "\\html@mathml{\\@varsubsetneqq}{\u2ACB}");
(m as any)("\\varsupsetneq", "\\html@mathml{\\@varsupsetneq}{\u228B}");
(m as any)("\\varsupsetneqq", "\\html@mathml{\\@varsupsetneqq}{\u2ACC}");
(m as any)("\\imath", "\\html@mathml{\\@imath}{\u0131}");
(m as any)("\\jmath", "\\html@mathml{\\@jmath}{\u0237}");
(m as any)("\\llbracket", "\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`\u27E6}}");
(m as any)("\\rrbracket", "\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`\u27E7}}");
(m as any)("\u27E6", "\\llbracket");
(m as any)("\u27E7", "\\rrbracket");
(m as any)("\\lBrace", "\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`\u2983}}");
(m as any)("\\rBrace", "\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`\u2984}}");
(m as any)("\u2983", "\\lBrace");
(m as any)("\u2984", "\\rBrace");
(m as any)("\\minuso", "\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`\u29B5}}");
(m as any)("\u29B5", "\\minuso");
(m as any)("\\darr", "\\downarrow");
(m as any)("\\dArr", "\\Downarrow");
(m as any)("\\Darr", "\\Downarrow");
(m as any)("\\lang", "\\langle");
(m as any)("\\rang", "\\rangle");
(m as any)("\\uarr", "\\uparrow");
(m as any)("\\uArr", "\\Uparrow");
(m as any)("\\Uarr", "\\Uparrow");
(m as any)("\\N", "\\mathbb{N}");
(m as any)("\\R", "\\mathbb{R}");
(m as any)("\\Z", "\\mathbb{Z}");
(m as any)("\\alef", "\\aleph");
(m as any)("\\alefsym", "\\aleph");
(m as any)("\\Alpha", "\\mathrm{A}");
(m as any)("\\Beta", "\\mathrm{B}");
(m as any)("\\bull", "\\bullet");
(m as any)("\\Chi", "\\mathrm{X}");
(m as any)("\\clubs", "\\clubsuit");
(m as any)("\\cnums", "\\mathbb{C}");
(m as any)("\\Complex", "\\mathbb{C}");
(m as any)("\\Dagger", "\\ddagger");
(m as any)("\\diamonds", "\\diamondsuit");
(m as any)("\\empty", "\\emptyset");
(m as any)("\\Epsilon", "\\mathrm{E}");
(m as any)("\\Eta", "\\mathrm{H}");
(m as any)("\\exist", "\\exists");
(m as any)("\\harr", "\\leftrightarrow");
(m as any)("\\hArr", "\\Leftrightarrow");
(m as any)("\\Harr", "\\Leftrightarrow");
(m as any)("\\hearts", "\\heartsuit");
(m as any)("\\image", "\\Im");
(m as any)("\\infin", "\\infty");
(m as any)("\\Iota", "\\mathrm{I}");
(m as any)("\\isin", "\\in");
(m as any)("\\Kappa", "\\mathrm{K}");
(m as any)("\\larr", "\\leftarrow");
(m as any)("\\lArr", "\\Leftarrow");
(m as any)("\\Larr", "\\Leftarrow");
(m as any)("\\lrarr", "\\leftrightarrow");
(m as any)("\\lrArr", "\\Leftrightarrow");
(m as any)("\\Lrarr", "\\Leftrightarrow");
(m as any)("\\Mu", "\\mathrm{M}");
(m as any)("\\natnums", "\\mathbb{N}");
(m as any)("\\Nu", "\\mathrm{N}");
(m as any)("\\Omicron", "\\mathrm{O}");
(m as any)("\\plusmn", "\\pm");
(m as any)("\\rarr", "\\rightarrow");
(m as any)("\\rArr", "\\Rightarrow");
(m as any)("\\Rarr", "\\Rightarrow");
(m as any)("\\real", "\\Re");
(m as any)("\\reals", "\\mathbb{R}");
(m as any)("\\Reals", "\\mathbb{R}");
(m as any)("\\Rho", "\\mathrm{P}");
(m as any)("\\sdot", "\\cdot");
(m as any)("\\sect", "\\S");
(m as any)("\\spades", "\\spadesuit");
(m as any)("\\sub", "\\subset");
(m as any)("\\sube", "\\subseteq");
(m as any)("\\supe", "\\supseteq");
(m as any)("\\Tau", "\\mathrm{T}");
(m as any)("\\thetasym", "\\vartheta");
(m as any)("\\weierp", "\\wp");
(m as any)("\\Zeta", "\\mathrm{Z}");
(m as any)("\\argmin", "\\DOTSB\\operatorname*{arg\\,min}");
(m as any)("\\argmax", "\\DOTSB\\operatorname*{arg\\,max}");
(m as any)("\\plim", "\\DOTSB\\mathop{\\operatorname{plim}}\\limits");
(m as any)("\\bra", "\\mathinner{\\langle{#1}|}");
(m as any)("\\ket", "\\mathinner{|{#1}\\rangle}");
(m as any)("\\braket", "\\mathinner{\\langle{#1}\\rangle}");
(m as any)("\\Bra", "\\left\\langle#1\\right|");
(m as any)("\\Ket", "\\left|#1\\right\\rangle");
var k1: any = (r: any): any => (e: any): any => {
  var t: any = (((e as any).consumeArg as any)() as any).tokens,
    a: any = (((e as any).consumeArg as any)() as any).tokens,
    n: any = (((e as any).consumeArg as any)() as any).tokens,
    l: any = (((e as any).consumeArg as any)() as any).tokens,
    u: any = (((e as any).macros as any).get as any)("|"),
    h: any = (((e as any).macros as any).get as any)("\\|");
  (((e as any).macros as any).beginGroup as any)();
  var c: any = (b: any): any => (y: any): any => {
    r && ((((y as any).macros as any).set as any)("|", u), (n as any).length && (((y as any).macros as any).set as any)("\\|", h));
    var x: any = b;
    if (!b && (n as any).length) {
      var M: any = ((y as any).future as any)();
      ((M as any).text as any) === ("|" as any) && (((y as any).popToken as any)(), x = !0);
    }
    return {
      tokens: x ? n : a,
      numArgs: 0
    };
  };
  (((e as any).macros as any).set as any)("|", (c as any)(!1)), (n as any).length && (((e as any).macros as any).set as any)("\\|", (c as any)(!0));
  var v: any = (((e as any).consumeArg as any)() as any).tokens,
    g: any = ((e as any).expandTokens as any)([...l, ...v, ...t]);
  return (((e as any).macros as any).endGroup as any)(), {
    tokens: ((g as any).reverse as any)(),
    numArgs: 0
  };
};
(m as any)("\\bra@ket", (k1 as any)(!1));
(m as any)("\\bra@set", (k1 as any)(!0));
(m as any)("\\Braket", "\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}");
(m as any)("\\Set", "\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}");
(m as any)("\\set", "\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}");
(m as any)("\\angln", "{\\angl n}");
(m as any)("\\blue", "\\textcolor{##6495ed}{#1}");
(m as any)("\\orange", "\\textcolor{##ffa500}{#1}");
(m as any)("\\pink", "\\textcolor{##ff00af}{#1}");
(m as any)("\\red", "\\textcolor{##df0030}{#1}");
(m as any)("\\green", "\\textcolor{##28ae7b}{#1}");
(m as any)("\\gray", "\\textcolor{gray}{#1}");
(m as any)("\\purple", "\\textcolor{##9d38bd}{#1}");
(m as any)("\\blueA", "\\textcolor{##ccfaff}{#1}");
(m as any)("\\blueB", "\\textcolor{##80f6ff}{#1}");
(m as any)("\\blueC", "\\textcolor{##63d9ea}{#1}");
(m as any)("\\blueD", "\\textcolor{##11accd}{#1}");
(m as any)("\\blueE", "\\textcolor{##0c7f99}{#1}");
(m as any)("\\tealA", "\\textcolor{##94fff5}{#1}");
(m as any)("\\tealB", "\\textcolor{##26edd5}{#1}");
(m as any)("\\tealC", "\\textcolor{##01d1c1}{#1}");
(m as any)("\\tealD", "\\textcolor{##01a995}{#1}");
(m as any)("\\tealE", "\\textcolor{##208170}{#1}");
(m as any)("\\greenA", "\\textcolor{##b6ffb0}{#1}");
(m as any)("\\greenB", "\\textcolor{##8af281}{#1}");
(m as any)("\\greenC", "\\textcolor{##74cf70}{#1}");
(m as any)("\\greenD", "\\textcolor{##1fab54}{#1}");
(m as any)("\\greenE", "\\textcolor{##0d923f}{#1}");
(m as any)("\\goldA", "\\textcolor{##ffd0a9}{#1}");
(m as any)("\\goldB", "\\textcolor{##ffbb71}{#1}");
(m as any)("\\goldC", "\\textcolor{##ff9c39}{#1}");
(m as any)("\\goldD", "\\textcolor{##e07d10}{#1}");
(m as any)("\\goldE", "\\textcolor{##a75a05}{#1}");
(m as any)("\\redA", "\\textcolor{##fca9a9}{#1}");
(m as any)("\\redB", "\\textcolor{##ff8482}{#1}");
(m as any)("\\redC", "\\textcolor{##f9685d}{#1}");
(m as any)("\\redD", "\\textcolor{##e84d39}{#1}");
(m as any)("\\redE", "\\textcolor{##bc2612}{#1}");
(m as any)("\\maroonA", "\\textcolor{##ffbde0}{#1}");
(m as any)("\\maroonB", "\\textcolor{##ff92c6}{#1}");
(m as any)("\\maroonC", "\\textcolor{##ed5fa6}{#1}");
(m as any)("\\maroonD", "\\textcolor{##ca337c}{#1}");
(m as any)("\\maroonE", "\\textcolor{##9e034e}{#1}");
(m as any)("\\purpleA", "\\textcolor{##ddd7ff}{#1}");
(m as any)("\\purpleB", "\\textcolor{##c6b9fc}{#1}");
(m as any)("\\purpleC", "\\textcolor{##aa87ff}{#1}");
(m as any)("\\purpleD", "\\textcolor{##7854ab}{#1}");
(m as any)("\\purpleE", "\\textcolor{##543b78}{#1}");
(m as any)("\\mintA", "\\textcolor{##f5f9e8}{#1}");
(m as any)("\\mintB", "\\textcolor{##edf2df}{#1}");
(m as any)("\\mintC", "\\textcolor{##e0e5cc}{#1}");
(m as any)("\\grayA", "\\textcolor{##f6f7f7}{#1}");
(m as any)("\\grayB", "\\textcolor{##f0f1f2}{#1}");
(m as any)("\\grayC", "\\textcolor{##e3e5e6}{#1}");
(m as any)("\\grayD", "\\textcolor{##d6d8da}{#1}");
(m as any)("\\grayE", "\\textcolor{##babec2}{#1}");
(m as any)("\\grayF", "\\textcolor{##888d93}{#1}");
(m as any)("\\grayG", "\\textcolor{##626569}{#1}");
(m as any)("\\grayH", "\\textcolor{##3b3e40}{#1}");
(m as any)("\\grayI", "\\textcolor{##21242c}{#1}");
(m as any)("\\kaBlue", "\\textcolor{##314453}{#1}");
(m as any)("\\kaGreen", "\\textcolor{##71B307}{#1}");
var S1: any = {
  "^": !0,
  _: !0,
  "\\limits": !0,
  "\\nolimits": !0
};
class p4 {
  declare lexer: any;
  declare stack: any;
  declare mode: any;
  declare macros: any;
  declare expansionCount: any;
  declare settings: any;
  [key: string]: any;
  constructor(e: any, t: any, a: any) {
    (this as any).settings = t, (this as any).expansionCount = 0, ((this as any).feed as any)(e), (this as any).macros = new (d4 as any)(f4, (t as any).macros), (this as any).mode = a, (this as any).stack = [];
  }
  feed(e: any): any {
    (this as any).lexer = new (Ar as any)(e, (this as any).settings);
  }
  switchMode(e: any): any {
    (this as any).mode = e;
  }
  beginGroup(): any {
    (((this as any).macros as any).beginGroup as any)();
  }
  endGroup(): any {
    (((this as any).macros as any).endGroup as any)();
  }
  endGroups(): any {
    (((this as any).macros as any).endGroups as any)();
  }
  future(): any {
    return (((this as any).stack as any).length as any) === (0 as any) && ((this as any).pushToken as any)((((this as any).lexer as any).lex as any)()), ((this as any).stack as any)[(((this as any).stack as any).length as any) - (1 as any)];
  }
  popToken(): any {
    return ((this as any).future as any)(), (((this as any).stack as any).pop as any)();
  }
  pushToken(e: any): any {
    (((this as any).stack as any).push as any)(e);
  }
  pushTokens(e: any): any {
    (((this as any).stack as any).push as any)(...e);
  }
  scanArgument(e: any): any {
    var t: any, a: any, n: any;
    if (e) {
      if (((this as any).consumeSpaces as any)(), ((((this as any).future as any)() as any).text as any) !== ("[" as any)) return null;
      t = ((this as any).popToken as any)(), {
        tokens: n,
        end: a
      } = ((this as any).consumeArg as any)(["]"]);
    } else ({
      tokens: n,
      start: t,
      end: a
    } = ((this as any).consumeArg as any)());
    return ((this as any).pushToken as any)(new (d0 as any)("EOF", (a as any).loc)), ((this as any).pushTokens as any)(n), new (d0 as any)("", ((c0 as any).range as any)(t, a));
  }
  consumeSpaces(): any {
    for (;;) {
      var e: any = ((this as any).future as any)();
      if (((e as any).text as any) === (" " as any)) (((this as any).stack as any).pop as any)();else break;
    }
  }
  consumeArg(e: any): any {
    var t: any = [],
      a: any = e && ((e as any).length as any) > (0 as any);
    a || ((this as any).consumeSpaces as any)();
    var n: any = ((this as any).future as any)(),
      l: any,
      u: any = 0,
      h: any = 0;
    do {
      if (l = ((this as any).popToken as any)(), ((t as any).push as any)(l), ((l as any).text as any) === ("{" as any)) ++u;else if (((l as any).text as any) === ("}" as any)) {
        if (--u, (u as any) === (-1 as any)) throw new (S as any)("Extra }", l);
      } else if (((l as any).text as any) === ("EOF" as any)) throw new (S as any)((("Unexpected end of input in a macro argument, expected '" as any) + ((e && a ? (e as any)[h] : "}") as any) as any) + ("'" as any), l);
      if (e && a) if (((u as any) === (0 as any) || (u as any) === (1 as any) && ((e as any)[h] as any) === ("{" as any)) && ((l as any).text as any) === ((e as any)[h] as any)) {
        if (++h, (h as any) === ((e as any).length as any)) {
          ((t as any).splice as any)(-h, h);
          break;
        }
      } else h = 0;
    } while ((u as any) !== (0 as any) || a);
    return ((n as any).text as any) === ("{" as any) && (((t as any)[((t as any).length as any) - (1 as any)] as any).text as any) === ("}" as any) && (((t as any).pop as any)(), ((t as any).shift as any)()), ((t as any).reverse as any)(), {
      tokens: t,
      start: n,
      end: l
    };
  }
  consumeArgs(e: any, t: any): any {
    if (t) {
      if (((t as any).length as any) !== ((e as any) + (1 as any) as any)) throw new (S as any)("The length of delimiters doesn't match the number of args!");
      for (var a: any = (t as any)[0], n: any = 0; (n as any) < ((a as any).length as any); n++) {
        var l: any = ((this as any).popToken as any)();
        if (((a as any)[n] as any) !== ((l as any).text as any)) throw new (S as any)("Use of the macro doesn't match its definition", l);
      }
    }
    for (var u: any = [], h: any = 0; (h as any) < (e as any); h++) ((u as any).push as any)((((this as any).consumeArg as any)(t && (t as any)[(h as any) + (1 as any)]) as any).tokens);
    return u;
  }
  countExpansion(e: any): any {
    if ((this as any).expansionCount += e, ((this as any).expansionCount as any) > (((this as any).settings as any).maxExpand as any)) throw new (S as any)("Too many expansions: infinite loop or need to increase maxExpand setting");
  }
  expandOnce(e: any): any {
    var t: any = ((this as any).popToken as any)(),
      a: any = (t as any).text,
      n: any = (t as any).noexpand ? null : ((this as any)._getExpansion as any)(a);
    if ((n as any) == (null as any) || e && (n as any).unexpandable) {
      if (e && (n as any) == (null as any) && ((a as any)[0] as any) === ("\\" as any) && !((this as any).isDefined as any)(a)) throw new (S as any)(("Undefined control sequence: " as any) + (a as any));
      return ((this as any).pushToken as any)(t), !1;
    }
    ((this as any).countExpansion as any)(1);
    var l: any = (n as any).tokens,
      u: any = ((this as any).consumeArgs as any)((n as any).numArgs, (n as any).delimiters);
    if ((n as any).numArgs) {
      l = ((l as any).slice as any)();
      for (var h: any = ((l as any).length as any) - (1 as any); (h as any) >= (0 as any); --h) {
        var c: any = (l as any)[h];
        if (((c as any).text as any) === ("#" as any)) {
          if ((h as any) === (0 as any)) throw new (S as any)("Incomplete placeholder at end of macro body", c);
          if (c = (l as any)[--h], ((c as any).text as any) === ("#" as any)) ((l as any).splice as any)((h as any) + (1 as any), 1);else if (((/^[1-9]$/ as any).test as any)((c as any).text)) ((l as any).splice as any)(h, 2, ...(u as any)[(+(c as any).text as any) - (1 as any)]);else throw new (S as any)("Not a valid argument number", c);
        }
      }
    }
    return ((this as any).pushTokens as any)(l), (l as any).length;
  }
  expandAfterFuture(): any {
    return ((this as any).expandOnce as any)(), ((this as any).future as any)();
  }
  expandNextToken(): any {
    for (;;) if ((((this as any).expandOnce as any)() as any) === (!1 as any)) {
      var e: any = (((this as any).stack as any).pop as any)();
      return (e as any).treatAsRelax && ((e as any).text = "\\relax"), e;
    }
  }
  expandMacro(e: any): any {
    return (((this as any).macros as any).has as any)(e) ? ((this as any).expandTokens as any)([new (d0 as any)(e)]) : void 0;
  }
  expandTokens(e: any): any {
    var t: any = [],
      a: any = ((this as any).stack as any).length;
    for (((this as any).pushTokens as any)(e); (((this as any).stack as any).length as any) > (a as any);) if ((((this as any).expandOnce as any)(!0) as any) === (!1 as any)) {
      var n: any = (((this as any).stack as any).pop as any)();
      (n as any).treatAsRelax && ((n as any).noexpand = !1, (n as any).treatAsRelax = !1), ((t as any).push as any)(n);
    }
    return ((this as any).countExpansion as any)((t as any).length), t;
  }
  expandMacroAsText(e: any): any {
    var t: any = ((this as any).expandMacro as any)(e);
    return t && ((((t as any).map as any)((a: any): any => (a as any).text) as any).join as any)("");
  }
  _getExpansion(e: any): any {
    var t: any = (((this as any).macros as any).get as any)(e);
    if ((t as any) == (null as any)) return t;
    if (((e as any).length as any) === (1 as any)) {
      var a: any = (((this as any).lexer as any).catcodes as any)[e];
      if ((a as any) != (null as any) && (a as any) !== (13 as any)) return;
    }
    var n: any = (typeof t as any) == ("function" as any) ? (t as any)(this) : t;
    if ((typeof n as any) == ("string" as any)) {
      var l: any = 0;
      if (((n as any).includes as any)("#")) for (var u: any = ((n as any).replace as any)(/##/g, ""); ((u as any).includes as any)(("#" as any) + ((l as any) + (1 as any) as any));) ++l;
      for (var h: any = new (Ar as any)(n, (this as any).settings), c: any = [], v: any = ((h as any).lex as any)(); ((v as any).text as any) !== ("EOF" as any);) ((c as any).push as any)(v), v = ((h as any).lex as any)();
      ((c as any).reverse as any)();
      var g: any = {
        tokens: c,
        numArgs: l
      };
      return g;
    }
    return n;
  }
  isDefined(e: any): any {
    return (((this as any).macros as any).has as any)(e) || ((F0 as any).hasOwnProperty as any)(e) || ((($ as any).math as any).hasOwnProperty as any)(e) || ((($ as any).text as any).hasOwnProperty as any)(e) || ((S1 as any).hasOwnProperty as any)(e);
  }
  isExpandable(e: any): any {
    var t: any = (((this as any).macros as any).get as any)(e);
    return (t as any) != (null as any) ? (typeof t as any) == ("string" as any) || (typeof t as any) == ("function" as any) || !(t as any).unexpandable : ((F0 as any).hasOwnProperty as any)(e) && !((F0 as any)[e] as any).primitive;
  }
}
var Br: any = /^[\u208A\u208B\u208C\u208D\u208E\u2080\u2081\u2082\u2083\u2084\u2085\u2086\u2087\u2088\u2089\u2090\u2091\u2095\u1D62\u2C7C\u2096\u2097\u2098\u2099\u2092\u209A\u1D63\u209B\u209C\u1D64\u1D65\u2093\u1D66\u1D67\u1D68\u1D69\u1D6A]/,
  Be: any = ((Object as any).freeze as any)({
    "\u208A": "+",
    "\u208B": "-",
    "\u208C": "=",
    "\u208D": "(",
    "\u208E": ")",
    "\u2080": "0",
    "\u2081": "1",
    "\u2082": "2",
    "\u2083": "3",
    "\u2084": "4",
    "\u2085": "5",
    "\u2086": "6",
    "\u2087": "7",
    "\u2088": "8",
    "\u2089": "9",
    "\u2090": "a",
    "\u2091": "e",
    "\u2095": "h",
    "\u1D62": "i",
    "\u2C7C": "j",
    "\u2096": "k",
    "\u2097": "l",
    "\u2098": "m",
    "\u2099": "n",
    "\u2092": "o",
    "\u209A": "p",
    "\u1D63": "r",
    "\u209B": "s",
    "\u209C": "t",
    "\u1D64": "u",
    "\u1D65": "v",
    "\u2093": "x",
    "\u1D66": "\u03B2",
    "\u1D67": "\u03B3",
    "\u1D68": "\u03C1",
    "\u1D69": "\u03D5",
    "\u1D6A": "\u03C7",
    "\u207A": "+",
    "\u207B": "-",
    "\u207C": "=",
    "\u207D": "(",
    "\u207E": ")",
    "\u2070": "0",
    "¹": "1",
    "²": "2",
    "³": "3",
    "\u2074": "4",
    "\u2075": "5",
    "\u2076": "6",
    "\u2077": "7",
    "\u2078": "8",
    "\u2079": "9",
    "\u1D2C": "A",
    "\u1D2E": "B",
    "\u1D30": "D",
    "\u1D31": "E",
    "\u1D33": "G",
    "\u1D34": "H",
    "\u1D35": "I",
    "\u1D36": "J",
    "\u1D37": "K",
    "\u1D38": "L",
    "\u1D39": "M",
    "\u1D3A": "N",
    "\u1D3C": "O",
    "\u1D3E": "P",
    "\u1D3F": "R",
    "\u1D40": "T",
    "\u1D41": "U",
    "\u2C7D": "V",
    "\u1D42": "W",
    "\u1D43": "a",
    "\u1D47": "b",
    "\u1D9C": "c",
    "\u1D48": "d",
    "\u1D49": "e",
    "\u1DA0": "f",
    "\u1D4D": "g",
    ʰ: "h",
    "\u2071": "i",
    ʲ: "j",
    "\u1D4F": "k",
    ˡ: "l",
    "\u1D50": "m",
    ⁿ: "n",
    "\u1D52": "o",
    "\u1D56": "p",
    ʳ: "r",
    ˢ: "s",
    "\u1D57": "t",
    "\u1D58": "u",
    "\u1D5B": "v",
    ʷ: "w",
    ˣ: "x",
    ʸ: "y",
    "\u1DBB": "z",
    "\u1D5D": "\u03B2",
    "\u1D5E": "\u03B3",
    "\u1D5F": "\u03B4",
    "\u1D60": "\u03D5",
    "\u1D61": "\u03C7",
    "\u1DBF": "\u03B8"
  }),
  ct: any = {
    "\u0301": {
      text: "\\'",
      math: "\\acute"
    },
    "\u0300": {
      text: "\\`",
      math: "\\grave"
    },
    "\u0308": {
      text: '\\"',
      math: "\\ddot"
    },
    "\u0303": {
      text: "\\~",
      math: "\\tilde"
    },
    "\u0304": {
      text: "\\=",
      math: "\\bar"
    },
    "\u0306": {
      text: "\\u",
      math: "\\breve"
    },
    "\u030C": {
      text: "\\v",
      math: "\\check"
    },
    "\u0302": {
      text: "\\^",
      math: "\\hat"
    },
    "\u0307": {
      text: "\\.",
      math: "\\dot"
    },
    "\u030A": {
      text: "\\r",
      math: "\\mathring"
    },
    "\u030B": {
      text: "\\H"
    },
    "\u0327": {
      text: "\\c"
    }
  },
  Dr: any = {
    á: "a\u0301",
    à: "a\u0300",
    ä: "a\u0308",
    ǟ: "a\u0308\u0304",
    ã: "a\u0303",
    ā: "a\u0304",
    ă: "a\u0306",
    ắ: "a\u0306\u0301",
    ằ: "a\u0306\u0300",
    ẵ: "a\u0306\u0303",
    ǎ: "a\u030C",
    â: "a\u0302",
    ấ: "a\u0302\u0301",
    ầ: "a\u0302\u0300",
    ẫ: "a\u0302\u0303",
    ȧ: "a\u0307",
    ǡ: "a\u0307\u0304",
    å: "a\u030A",
    ǻ: "a\u030A\u0301",
    ḃ: "b\u0307",
    ć: "c\u0301",
    ḉ: "c\u0327\u0301",
    č: "c\u030C",
    ĉ: "c\u0302",
    ċ: "c\u0307",
    ç: "c\u0327",
    ď: "d\u030C",
    ḋ: "d\u0307",
    ḑ: "d\u0327",
    é: "e\u0301",
    è: "e\u0300",
    ë: "e\u0308",
    ẽ: "e\u0303",
    ē: "e\u0304",
    ḗ: "e\u0304\u0301",
    ḕ: "e\u0304\u0300",
    ĕ: "e\u0306",
    ḝ: "e\u0327\u0306",
    ě: "e\u030C",
    ê: "e\u0302",
    ế: "e\u0302\u0301",
    ề: "e\u0302\u0300",
    ễ: "e\u0302\u0303",
    ė: "e\u0307",
    ȩ: "e\u0327",
    ḟ: "f\u0307",
    ǵ: "g\u0301",
    ḡ: "g\u0304",
    ğ: "g\u0306",
    ǧ: "g\u030C",
    ĝ: "g\u0302",
    ġ: "g\u0307",
    ģ: "g\u0327",
    ḧ: "h\u0308",
    ȟ: "h\u030C",
    ĥ: "h\u0302",
    ḣ: "h\u0307",
    ḩ: "h\u0327",
    í: "i\u0301",
    ì: "i\u0300",
    ï: "i\u0308",
    ḯ: "i\u0308\u0301",
    ĩ: "i\u0303",
    ī: "i\u0304",
    ĭ: "i\u0306",
    ǐ: "i\u030C",
    î: "i\u0302",
    ǰ: "j\u030C",
    ĵ: "j\u0302",
    ḱ: "k\u0301",
    ǩ: "k\u030C",
    ķ: "k\u0327",
    ĺ: "l\u0301",
    ľ: "l\u030C",
    ļ: "l\u0327",
    ḿ: "m\u0301",
    ṁ: "m\u0307",
    ń: "n\u0301",
    ǹ: "n\u0300",
    ñ: "n\u0303",
    ň: "n\u030C",
    ṅ: "n\u0307",
    ņ: "n\u0327",
    ó: "o\u0301",
    ò: "o\u0300",
    ö: "o\u0308",
    ȫ: "o\u0308\u0304",
    õ: "o\u0303",
    ṍ: "o\u0303\u0301",
    ṏ: "o\u0303\u0308",
    ȭ: "o\u0303\u0304",
    ō: "o\u0304",
    ṓ: "o\u0304\u0301",
    ṑ: "o\u0304\u0300",
    ŏ: "o\u0306",
    ǒ: "o\u030C",
    ô: "o\u0302",
    ố: "o\u0302\u0301",
    ồ: "o\u0302\u0300",
    ỗ: "o\u0302\u0303",
    ȯ: "o\u0307",
    ȱ: "o\u0307\u0304",
    ő: "o\u030B",
    ṕ: "p\u0301",
    ṗ: "p\u0307",
    ŕ: "r\u0301",
    ř: "r\u030C",
    ṙ: "r\u0307",
    ŗ: "r\u0327",
    ś: "s\u0301",
    ṥ: "s\u0301\u0307",
    š: "s\u030C",
    ṧ: "s\u030C\u0307",
    ŝ: "s\u0302",
    ṡ: "s\u0307",
    ş: "s\u0327",
    ẗ: "t\u0308",
    ť: "t\u030C",
    ṫ: "t\u0307",
    ţ: "t\u0327",
    ú: "u\u0301",
    ù: "u\u0300",
    ü: "u\u0308",
    ǘ: "u\u0308\u0301",
    ǜ: "u\u0308\u0300",
    ǖ: "u\u0308\u0304",
    ǚ: "u\u0308\u030C",
    ũ: "u\u0303",
    ṹ: "u\u0303\u0301",
    ū: "u\u0304",
    ṻ: "u\u0304\u0308",
    ŭ: "u\u0306",
    ǔ: "u\u030C",
    û: "u\u0302",
    ů: "u\u030A",
    ű: "u\u030B",
    ṽ: "v\u0303",
    ẃ: "w\u0301",
    ẁ: "w\u0300",
    ẅ: "w\u0308",
    ŵ: "w\u0302",
    ẇ: "w\u0307",
    ẘ: "w\u030A",
    ẍ: "x\u0308",
    ẋ: "x\u0307",
    ý: "y\u0301",
    ỳ: "y\u0300",
    ÿ: "y\u0308",
    ỹ: "y\u0303",
    ȳ: "y\u0304",
    ŷ: "y\u0302",
    ẏ: "y\u0307",
    ẙ: "y\u030A",
    ź: "z\u0301",
    ž: "z\u030C",
    ẑ: "z\u0302",
    ż: "z\u0307",
    Á: "A\u0301",
    À: "A\u0300",
    Ä: "A\u0308",
    Ǟ: "A\u0308\u0304",
    Ã: "A\u0303",
    Ā: "A\u0304",
    Ă: "A\u0306",
    Ắ: "A\u0306\u0301",
    Ằ: "A\u0306\u0300",
    Ẵ: "A\u0306\u0303",
    Ǎ: "A\u030C",
    Â: "A\u0302",
    Ấ: "A\u0302\u0301",
    Ầ: "A\u0302\u0300",
    Ẫ: "A\u0302\u0303",
    Ȧ: "A\u0307",
    Ǡ: "A\u0307\u0304",
    Å: "A\u030A",
    Ǻ: "A\u030A\u0301",
    Ḃ: "B\u0307",
    Ć: "C\u0301",
    Ḉ: "C\u0327\u0301",
    Č: "C\u030C",
    Ĉ: "C\u0302",
    Ċ: "C\u0307",
    Ç: "C\u0327",
    Ď: "D\u030C",
    Ḋ: "D\u0307",
    Ḑ: "D\u0327",
    É: "E\u0301",
    È: "E\u0300",
    Ë: "E\u0308",
    Ẽ: "E\u0303",
    Ē: "E\u0304",
    Ḗ: "E\u0304\u0301",
    Ḕ: "E\u0304\u0300",
    Ĕ: "E\u0306",
    Ḝ: "E\u0327\u0306",
    Ě: "E\u030C",
    Ê: "E\u0302",
    Ế: "E\u0302\u0301",
    Ề: "E\u0302\u0300",
    Ễ: "E\u0302\u0303",
    Ė: "E\u0307",
    Ȩ: "E\u0327",
    Ḟ: "F\u0307",
    Ǵ: "G\u0301",
    Ḡ: "G\u0304",
    Ğ: "G\u0306",
    Ǧ: "G\u030C",
    Ĝ: "G\u0302",
    Ġ: "G\u0307",
    Ģ: "G\u0327",
    Ḧ: "H\u0308",
    Ȟ: "H\u030C",
    Ĥ: "H\u0302",
    Ḣ: "H\u0307",
    Ḩ: "H\u0327",
    Í: "I\u0301",
    Ì: "I\u0300",
    Ï: "I\u0308",
    Ḯ: "I\u0308\u0301",
    Ĩ: "I\u0303",
    Ī: "I\u0304",
    Ĭ: "I\u0306",
    Ǐ: "I\u030C",
    Î: "I\u0302",
    İ: "I\u0307",
    Ĵ: "J\u0302",
    Ḱ: "K\u0301",
    Ǩ: "K\u030C",
    Ķ: "K\u0327",
    Ĺ: "L\u0301",
    Ľ: "L\u030C",
    Ļ: "L\u0327",
    Ḿ: "M\u0301",
    Ṁ: "M\u0307",
    Ń: "N\u0301",
    Ǹ: "N\u0300",
    Ñ: "N\u0303",
    Ň: "N\u030C",
    Ṅ: "N\u0307",
    Ņ: "N\u0327",
    Ó: "O\u0301",
    Ò: "O\u0300",
    Ö: "O\u0308",
    Ȫ: "O\u0308\u0304",
    Õ: "O\u0303",
    Ṍ: "O\u0303\u0301",
    Ṏ: "O\u0303\u0308",
    Ȭ: "O\u0303\u0304",
    Ō: "O\u0304",
    Ṓ: "O\u0304\u0301",
    Ṑ: "O\u0304\u0300",
    Ŏ: "O\u0306",
    Ǒ: "O\u030C",
    Ô: "O\u0302",
    Ố: "O\u0302\u0301",
    Ồ: "O\u0302\u0300",
    Ỗ: "O\u0302\u0303",
    Ȯ: "O\u0307",
    Ȱ: "O\u0307\u0304",
    Ő: "O\u030B",
    Ṕ: "P\u0301",
    Ṗ: "P\u0307",
    Ŕ: "R\u0301",
    Ř: "R\u030C",
    Ṙ: "R\u0307",
    Ŗ: "R\u0327",
    Ś: "S\u0301",
    Ṥ: "S\u0301\u0307",
    Š: "S\u030C",
    Ṧ: "S\u030C\u0307",
    Ŝ: "S\u0302",
    Ṡ: "S\u0307",
    Ş: "S\u0327",
    Ť: "T\u030C",
    Ṫ: "T\u0307",
    Ţ: "T\u0327",
    Ú: "U\u0301",
    Ù: "U\u0300",
    Ü: "U\u0308",
    Ǘ: "U\u0308\u0301",
    Ǜ: "U\u0308\u0300",
    Ǖ: "U\u0308\u0304",
    Ǚ: "U\u0308\u030C",
    Ũ: "U\u0303",
    Ṹ: "U\u0303\u0301",
    Ū: "U\u0304",
    Ṻ: "U\u0304\u0308",
    Ŭ: "U\u0306",
    Ǔ: "U\u030C",
    Û: "U\u0302",
    Ů: "U\u030A",
    Ű: "U\u030B",
    Ṽ: "V\u0303",
    Ẃ: "W\u0301",
    Ẁ: "W\u0300",
    Ẅ: "W\u0308",
    Ŵ: "W\u0302",
    Ẇ: "W\u0307",
    Ẍ: "X\u0308",
    Ẋ: "X\u0307",
    Ý: "Y\u0301",
    Ỳ: "Y\u0300",
    Ÿ: "Y\u0308",
    Ỹ: "Y\u0303",
    Ȳ: "Y\u0304",
    Ŷ: "Y\u0302",
    Ẏ: "Y\u0307",
    Ź: "Z\u0301",
    Ž: "Z\u030C",
    Ẑ: "Z\u0302",
    Ż: "Z\u0307",
    ά: "\u03B1\u0301",
    ὰ: "\u03B1\u0300",
    ᾱ: "\u03B1\u0304",
    ᾰ: "\u03B1\u0306",
    έ: "\u03B5\u0301",
    ὲ: "\u03B5\u0300",
    ή: "\u03B7\u0301",
    ὴ: "\u03B7\u0300",
    ί: "\u03B9\u0301",
    ὶ: "\u03B9\u0300",
    ϊ: "\u03B9\u0308",
    ΐ: "\u03B9\u0308\u0301",
    ῒ: "\u03B9\u0308\u0300",
    ῑ: "\u03B9\u0304",
    ῐ: "\u03B9\u0306",
    ό: "\u03BF\u0301",
    ὸ: "\u03BF\u0300",
    ύ: "\u03C5\u0301",
    ὺ: "\u03C5\u0300",
    ϋ: "\u03C5\u0308",
    ΰ: "\u03C5\u0308\u0301",
    ῢ: "\u03C5\u0308\u0300",
    ῡ: "\u03C5\u0304",
    ῠ: "\u03C5\u0306",
    ώ: "\u03C9\u0301",
    ὼ: "\u03C9\u0300",
    Ύ: "\u03A5\u0301",
    Ὺ: "\u03A5\u0300",
    Ϋ: "\u03A5\u0308",
    Ῡ: "\u03A5\u0304",
    Ῠ: "\u03A5\u0306",
    Ώ: "\u03A9\u0301",
    Ὼ: "\u03A9\u0300"
  };
class je {
  declare nextToken: any;
  declare leftrightDepth: any;
  declare settings: any;
  declare gullet: any;
  declare mode: any;
  [key: string]: any;
  constructor(e: any, t: any) {
    (this as any).mode = "math", (this as any).gullet = new (p4 as any)(e, t, (this as any).mode), (this as any).settings = t, (this as any).leftrightDepth = 0, (this as any).nextToken = null;
  }
  expect(e: any, t: any): any {
    if ((t as any) === (void 0 as any) && (t = !0), ((((this as any).fetch as any)() as any).text as any) !== (e as any)) throw new (S as any)((((("Expected '" as any) + (e as any) as any) + ("', got '" as any) as any) + ((((this as any).fetch as any)() as any).text as any) as any) + ("'" as any), ((this as any).fetch as any)());
    t && ((this as any).consume as any)();
  }
  consume(): any {
    (this as any).nextToken = null;
  }
  fetch(): any {
    return ((this as any).nextToken as any) == (null as any) && ((this as any).nextToken = (((this as any).gullet as any).expandNextToken as any)()), (this as any).nextToken;
  }
  switchMode(e: any): any {
    (this as any).mode = e, (((this as any).gullet as any).switchMode as any)(e);
  }
  parse(): any {
    ((this as any).settings as any).globalGroup || (((this as any).gullet as any).beginGroup as any)(), ((this as any).settings as any).colorIsTextColor && ((((this as any).gullet as any).macros as any).set as any)("\\color", "\\textcolor");
    try {
      var e: any = ((this as any).parseExpression as any)(!1);
      return ((this as any).expect as any)("EOF"), ((this as any).settings as any).globalGroup || (((this as any).gullet as any).endGroup as any)(), e;
    } finally {
      (((this as any).gullet as any).endGroups as any)();
    }
  }
  subparse(e: any): any {
    var t: any = (this as any).nextToken;
    ((this as any).consume as any)(), (((this as any).gullet as any).pushToken as any)(new (d0 as any)("}")), (((this as any).gullet as any).pushTokens as any)(e);
    var a: any = ((this as any).parseExpression as any)(!1);
    return ((this as any).expect as any)("}"), (this as any).nextToken = t, a;
  }
  parseExpression(e: any, t: any): any {
    for (var a: any = [];;) {
      ((this as any).mode as any) === ("math" as any) && ((this as any).consumeSpaces as any)();
      var n: any = ((this as any).fetch as any)();
      if ((((je as any).endOfExpression as any).has as any)((n as any).text) || t && ((n as any).text as any) === (t as any) || e && (F0 as any)[(n as any).text] && ((F0 as any)[(n as any).text] as any).infix) break;
      var l: any = ((this as any).parseAtom as any)(t);
      if (l) {
        if (((l as any).type as any) === ("internal" as any)) continue;
      } else break;
      ((a as any).push as any)(l);
    }
    return ((this as any).mode as any) === ("text" as any) && ((this as any).formLigatures as any)(a), ((this as any).handleInfixNodes as any)(a);
  }
  handleInfixNodes(e: any): any {
    for (var t: any = -1, a: any, n: any = 0; (n as any) < ((e as any).length as any); n++) {
      var l: any = (e as any)[n];
      if (((l as any).type as any) === ("infix" as any)) {
        if ((t as any) !== (-1 as any)) throw new (S as any)("only one infix operator per group", (l as any).token);
        t = n, a = (l as any).replaceWith;
      }
    }
    if ((t as any) !== (-1 as any) && a) {
      var u: any,
        h: any,
        c: any = ((e as any).slice as any)(0, t),
        v: any = ((e as any).slice as any)((t as any) + (1 as any));
      ((c as any).length as any) === (1 as any) && (((c as any)[0] as any).type as any) === ("ordgroup" as any) ? u = (c as any)[0] : u = {
        type: "ordgroup",
        mode: (this as any).mode,
        body: c
      }, ((v as any).length as any) === (1 as any) && (((v as any)[0] as any).type as any) === ("ordgroup" as any) ? h = (v as any)[0] : h = {
        type: "ordgroup",
        mode: (this as any).mode,
        body: v
      };
      var g: any;
      return (a as any) === ("\\\\abovefrac" as any) ? g = ((this as any).callFunction as any)(a, [u, (e as any)[t], h], []) : g = ((this as any).callFunction as any)(a, [u, h], []), [g];
    } else return e;
  }
  handleSupSubscript(e: any): any {
    var t: any = ((this as any).fetch as any)(),
      a: any = (t as any).text;
    ((this as any).consume as any)(), ((this as any).consumeSpaces as any)();
    var n: any;
    do {
      var l: any;
      n = ((this as any).parseGroup as any)(e);
    } while (((((l = n) as any) == (null as any) ? void 0 : (l as any).type) as any) === ("internal" as any));
    if (!n) throw new (S as any)((("Expected group after '" as any) + (a as any) as any) + ("'" as any), t);
    return n;
  }
  formatUnsupportedCmd(e: any): any {
    for (var t: any = [], a: any = 0; (a as any) < ((e as any).length as any); a++) ((t as any).push as any)({
      type: "textord",
      mode: "text",
      text: (e as any)[a]
    });
    var n: any = {
        type: "text",
        mode: (this as any).mode,
        body: t
      },
      l: any = {
        type: "color",
        mode: (this as any).mode,
        color: ((this as any).settings as any).errorColor,
        body: [n]
      };
    return l;
  }
  parseAtom(e: any): any {
    var t: any = ((this as any).parseGroup as any)("atom", e);
    if ((t?.type as any) === ("internal" as any) || ((this as any).mode as any) === ("text" as any)) return t;
    for (var a: any, n: any;;) {
      ((this as any).consumeSpaces as any)();
      var l: any = ((this as any).fetch as any)();
      if (((l as any).text as any) === ("\\limits" as any) || ((l as any).text as any) === ("\\nolimits" as any)) {
        if (t && ((t as any).type as any) === ("op" as any)) {
          var u: any = ((l as any).text as any) === ("\\limits" as any);
          (t as any).limits = u, (t as any).alwaysHandleSupSub = !0;
        } else if (t && ((t as any).type as any) === ("operatorname" as any)) (t as any).alwaysHandleSupSub && ((t as any).limits = ((l as any).text as any) === ("\\limits" as any));else throw new (S as any)("Limit controls must follow a math operator", l);
        ((this as any).consume as any)();
      } else if (((l as any).text as any) === ("^" as any)) {
        if (a) throw new (S as any)("Double superscript", l);
        a = ((this as any).handleSupSubscript as any)("superscript");
      } else if (((l as any).text as any) === ("_" as any)) {
        if (n) throw new (S as any)("Double subscript", l);
        n = ((this as any).handleSupSubscript as any)("subscript");
      } else if (((l as any).text as any) === ("'" as any)) {
        if (a) throw new (S as any)("Double superscript", l);
        var h: any = {
            type: "textord",
            mode: (this as any).mode,
            text: "\\prime"
          },
          c: any = [h];
        for (((this as any).consume as any)(); ((((this as any).fetch as any)() as any).text as any) === ("'" as any);) ((c as any).push as any)(h), ((this as any).consume as any)();
        ((((this as any).fetch as any)() as any).text as any) === ("^" as any) && ((c as any).push as any)(((this as any).handleSupSubscript as any)("superscript")), a = {
          type: "ordgroup",
          mode: (this as any).mode,
          body: c
        };
      } else if ((Be as any)[(l as any).text]) {
        var v: any = ((Br as any).test as any)((l as any).text),
          g: any = [];
        for (((g as any).push as any)(new (d0 as any)((Be as any)[(l as any).text])), ((this as any).consume as any)();;) {
          var b: any = (((this as any).fetch as any)() as any).text;
          if (!(Be as any)[b] || (((Br as any).test as any)(b) as any) !== (v as any)) break;
          ((g as any).unshift as any)(new (d0 as any)((Be as any)[b])), ((this as any).consume as any)();
        }
        var y: any = ((this as any).subparse as any)(g);
        v ? n = {
          type: "ordgroup",
          mode: "math",
          body: y
        } : a = {
          type: "ordgroup",
          mode: "math",
          body: y
        };
      } else break;
    }
    return a || n ? {
      type: "supsub",
      mode: (this as any).mode,
      base: t,
      sup: a,
      sub: n
    } : t;
  }
  parseFunction(e: any, t: any): any {
    var a: any = ((this as any).fetch as any)(),
      n: any = (a as any).text,
      l: any = (F0 as any)[n];
    if (!l) return null;
    if (((this as any).consume as any)(), t && (t as any) !== ("atom" as any) && !(l as any).allowedInArgument) throw new (S as any)(((("Got function '" as any) + (n as any) as any) + ("' with no arguments" as any) as any) + ((t ? (" as " as any) + (t as any) : "") as any), a);
    if (((this as any).mode as any) === ("text" as any) && !(l as any).allowedInText) throw new (S as any)((("Can't use function '" as any) + (n as any) as any) + ("' in text mode" as any), a);
    if (((this as any).mode as any) === ("math" as any) && ((l as any).allowedInMath as any) === (!1 as any)) throw new (S as any)((("Can't use function '" as any) + (n as any) as any) + ("' in math mode" as any), a);
    var {
      args: u,
      optArgs: h
    }: any = ((this as any).parseArguments as any)(n, l);
    return ((this as any).callFunction as any)(n, u, h, a, e);
  }
  callFunction(e: any, t: any, a: any, n: any, l: any): any {
    var u: any = {
        funcName: e,
        parser: this,
        token: n,
        breakOnTokenText: l
      },
      h: any = (F0 as any)[e];
    if (h && (h as any).handler) return ((h as any).handler as any)(u, t, a);
    throw new (S as any)(("No function handler for " as any) + (e as any));
  }
  parseArguments(e: any, t: any): any {
    var a: any = ((t as any).numArgs as any) + ((t as any).numOptionalArgs as any);
    if ((a as any) === (0 as any)) return {
      args: [],
      optArgs: []
    };
    for (var n: any = [], l: any = [], u: any = 0; (u as any) < (a as any); u++) {
      var h: any = (t as any).argTypes && ((t as any).argTypes as any)[u],
        c: any = (u as any) < ((t as any).numOptionalArgs as any);
      ("primitive" in t && (t as any).primitive && (h as any) == (null as any) || ((t as any).type as any) === ("sqrt" as any) && (u as any) === (1 as any) && ((l as any)[0] as any) == (null as any)) && (h = "primitive");
      var v: any = ((this as any).parseGroupOfType as any)((("argument to '" as any) + (e as any) as any) + ("'" as any), h, c);
      if (c) ((l as any).push as any)(v);else if ((v as any) != (null as any)) ((n as any).push as any)(v);else throw new (S as any)("Null argument, please report this as a bug");
    }
    return {
      args: n,
      optArgs: l
    };
  }
  parseGroupOfType(e: any, t: any, a: any): any {
    switch (t) {
      case "color":
        return ((this as any).parseColorGroup as any)(a);
      case "size":
        return ((this as any).parseSizeGroup as any)(a);
      case "url":
        return ((this as any).parseUrlGroup as any)(a);
      case "math":
      case "text":
        return ((this as any).parseArgumentGroup as any)(a, t);
      case "hbox":
        {
          var n: any = ((this as any).parseArgumentGroup as any)(a, "text");
          return (n as any) != (null as any) ? {
            type: "styling",
            mode: (n as any).mode,
            body: [n],
            style: "text"
          } : null;
        }
      case "raw":
        {
          var l: any = ((this as any).parseStringGroup as any)("raw", a);
          return (l as any) != (null as any) ? {
            type: "raw",
            mode: "text",
            string: (l as any).text
          } : null;
        }
      case "primitive":
        {
          if (a) throw new (S as any)("A primitive argument cannot be optional");
          var u: any = ((this as any).parseGroup as any)(e);
          if ((u as any) == (null as any)) throw new (S as any)(("Expected group as " as any) + (e as any), ((this as any).fetch as any)());
          return u;
        }
      case "original":
      case null:
      case void 0:
        return ((this as any).parseArgumentGroup as any)(a);
      default:
        throw new (S as any)(("Unknown group type as " as any) + (e as any), ((this as any).fetch as any)());
    }
  }
  consumeSpaces(): any {
    for (; ((((this as any).fetch as any)() as any).text as any) === (" " as any);) ((this as any).consume as any)();
  }
  parseStringGroup(e: any, t: any): any {
    var a: any = (((this as any).gullet as any).scanArgument as any)(t);
    if ((a as any) == (null as any)) return null;
    for (var n: any = "", l: any; (((l = ((this as any).fetch as any)()) as any).text as any) !== ("EOF" as any);) n += (l as any).text, ((this as any).consume as any)();
    return ((this as any).consume as any)(), (a as any).text = n, a;
  }
  parseRegexGroup(e: any, t: any): any {
    for (var a: any = ((this as any).fetch as any)(), n: any = a, l: any = "", u: any; (((u = ((this as any).fetch as any)()) as any).text as any) !== ("EOF" as any) && ((e as any).test as any)((l as any) + ((u as any).text as any));) n = u, l += (n as any).text, ((this as any).consume as any)();
    if ((l as any) === ("" as any)) throw new (S as any)((((("Invalid " as any) + (t as any) as any) + (": '" as any) as any) + ((a as any).text as any) as any) + ("'" as any), a);
    return ((a as any).range as any)(n, l);
  }
  parseColorGroup(e: any): any {
    var t: any = ((this as any).parseStringGroup as any)("color", e);
    if ((t as any) == (null as any)) return null;
    var a: any = ((/^(#[a-f0-9]{3,4}|#[a-f0-9]{6}|#[a-f0-9]{8}|[a-f0-9]{6}|[a-z]+)$/i as any).exec as any)((t as any).text);
    if (!a) throw new (S as any)((("Invalid color: '" as any) + ((t as any).text as any) as any) + ("'" as any), t);
    var n: any = (a as any)[0];
    return ((/^[0-9a-f]{6}$/i as any).test as any)(n) && (n = ("#" as any) + (n as any)), {
      type: "color-token",
      mode: (this as any).mode,
      color: n
    };
  }
  parseSizeGroup(e: any): any {
    var t: any,
      a: any = !1;
    if ((((this as any).gullet as any).consumeSpaces as any)(), !e && (((((this as any).gullet as any).future as any)() as any).text as any) !== ("{" as any) ? t = ((this as any).parseRegexGroup as any)(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/, "size") : t = ((this as any).parseStringGroup as any)("size", e), !t) return null;
    !e && (((t as any).text as any).length as any) === (0 as any) && ((t as any).text = "0pt", a = !0);
    var n: any = ((/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/ as any).exec as any)((t as any).text);
    if (!n) throw new (S as any)((("Invalid size: '" as any) + ((t as any).text as any) as any) + ("'" as any), t);
    var l: any = {
      number: +(((n as any)[1] as any) + ((n as any)[2] as any)),
      unit: (n as any)[3]
    };
    if (!(qr as any)(l)) throw new (S as any)((("Invalid unit: '" as any) + ((l as any).unit as any) as any) + ("'" as any), t);
    return {
      type: "size",
      mode: (this as any).mode,
      value: l,
      isBlank: a
    };
  }
  parseUrlGroup(e: any): any {
    ((((this as any).gullet as any).lexer as any).setCatcode as any)("%", 13), ((((this as any).gullet as any).lexer as any).setCatcode as any)("~", 12);
    var t: any = ((this as any).parseStringGroup as any)("url", e);
    if (((((this as any).gullet as any).lexer as any).setCatcode as any)("%", 14), ((((this as any).gullet as any).lexer as any).setCatcode as any)("~", 13), (t as any) == (null as any)) return null;
    var a: any = (((t as any).text as any).replace as any)(/\\([#$%&~_^{}])/g, "$1");
    return {
      type: "url",
      mode: (this as any).mode,
      url: a
    };
  }
  parseArgumentGroup(e: any, t: any): any {
    var a: any = (((this as any).gullet as any).scanArgument as any)(e);
    if ((a as any) == (null as any)) return null;
    var n: any = (this as any).mode;
    t && ((this as any).switchMode as any)(t), (((this as any).gullet as any).beginGroup as any)();
    var l: any = ((this as any).parseExpression as any)(!1, "EOF");
    ((this as any).expect as any)("EOF"), (((this as any).gullet as any).endGroup as any)();
    var u: any = {
      type: "ordgroup",
      mode: (this as any).mode,
      loc: (a as any).loc,
      body: l
    };
    return t && ((this as any).switchMode as any)(n), u;
  }
  parseGroup(e: any, t: any): any {
    var a: any = ((this as any).fetch as any)(),
      n: any = (a as any).text,
      l: any;
    if ((n as any) === ("{" as any) || (n as any) === ("\\begingroup" as any)) {
      ((this as any).consume as any)();
      var u: any = (n as any) === ("{" as any) ? "}" : "\\endgroup";
      (((this as any).gullet as any).beginGroup as any)();
      var h: any = ((this as any).parseExpression as any)(!1, u),
        c: any = ((this as any).fetch as any)();
      ((this as any).expect as any)(u), (((this as any).gullet as any).endGroup as any)(), l = {
        type: "ordgroup",
        mode: (this as any).mode,
        loc: ((c0 as any).range as any)(a, c),
        body: h,
        semisimple: (n as any) === ("\\begingroup" as any) || void 0
      };
    } else if (l = ((this as any).parseFunction as any)(t, e) || ((this as any).parseSymbol as any)(), (l as any) == (null as any) && ((n as any)[0] as any) === ("\\" as any) && !((S1 as any).hasOwnProperty as any)(n)) {
      if (((this as any).settings as any).throwOnError) throw new (S as any)(("Undefined control sequence: " as any) + (n as any), a);
      l = ((this as any).formatUnsupportedCmd as any)(n), ((this as any).consume as any)();
    }
    return l;
  }
  formLigatures(e: any): any {
    for (var t: any = ((e as any).length as any) - (1 as any), a: any = 0; (a as any) < (t as any); ++a) {
      var n: any = (e as any)[a];
      if (((n as any).type as any) === ("textord" as any)) {
        var l: any = (n as any).text,
          u: any = (e as any)[(a as any) + (1 as any)];
        if (!(!u || ((u as any).type as any) !== ("textord" as any))) {
          if ((l as any) === ("-" as any) && ((u as any).text as any) === ("-" as any)) {
            var h: any = (e as any)[(a as any) + (2 as any)];
            ((a as any) + (1 as any) as any) < (t as any) && h && ((h as any).type as any) === ("textord" as any) && ((h as any).text as any) === ("-" as any) ? (((e as any).splice as any)(a, 3, {
              type: "textord",
              mode: "text",
              loc: ((c0 as any).range as any)(n, h),
              text: "---"
            }), t -= 2) : (((e as any).splice as any)(a, 2, {
              type: "textord",
              mode: "text",
              loc: ((c0 as any).range as any)(n, u),
              text: "--"
            }), t -= 1);
          }
          ((l as any) === ("'" as any) || (l as any) === ("`" as any)) && ((u as any).text as any) === (l as any) && (((e as any).splice as any)(a, 2, {
            type: "textord",
            mode: "text",
            loc: ((c0 as any).range as any)(n, u),
            text: (l as any) + (l as any)
          }), t -= 1);
        }
      }
    }
  }
  parseSymbol(): any {
    var e: any = ((this as any).fetch as any)(),
      t: any = (e as any).text;
    if (((/^\\verb[^a-zA-Z]/ as any).test as any)(t)) {
      ((this as any).consume as any)();
      var a: any = ((t as any).slice as any)(5),
        n: any = (((a as any).charAt as any)(0) as any) === ("*" as any);
      if (n && (a = ((a as any).slice as any)(1)), ((a as any).length as any) < (2 as any) || (((a as any).charAt as any)(0) as any) !== (((a as any).slice as any)(-1) as any)) throw new (S as any)(`\\verb assertion failed --
                    please report what input caused this bug`);
      return a = ((a as any).slice as any)(1, -1), {
        type: "verb",
        mode: "text",
        body: a,
        star: n
      };
    }
    ((Dr as any).hasOwnProperty as any)((t as any)[0]) && !(($ as any)[(this as any).mode] as any)[(t as any)[0]] && (((this as any).settings as any).strict && ((this as any).mode as any) === ("math" as any) && (((this as any).settings as any).reportNonstrict as any)("unicodeTextInMathMode", (('Accented Unicode text character "' as any) + ((t as any)[0] as any) as any) + ('" used in math mode' as any), e), t = ((Dr as any)[(t as any)[0]] as any) + (((t as any).slice as any)(1) as any));
    var l: any = ((m4 as any).exec as any)(t);
    l && (t = ((t as any).substring as any)(0, (l as any).index), (t as any) === ("i" as any) ? t = "\u0131" : (t as any) === ("j" as any) && (t = "\u0237"));
    var u: any;
    if ((($ as any)[(this as any).mode] as any)[t]) {
      ((this as any).settings as any).strict && ((this as any).mode as any) === ("math" as any) && ((gt as any).includes as any)(t) && (((this as any).settings as any).reportNonstrict as any)("unicodeTextInMathMode", (('Latin-1/Unicode text character "' as any) + ((t as any)[0] as any) as any) + ('" used in math mode' as any), e);
      var h: any = ((($ as any)[(this as any).mode] as any)[t] as any).group,
        c: any = ((c0 as any).range as any)(e),
        v: any;
      if (((ca as any).hasOwnProperty as any)(h)) {
        var g: any = h;
        v = {
          type: "atom",
          mode: (this as any).mode,
          family: g,
          loc: c,
          text: t
        };
      } else v = {
        type: h,
        mode: (this as any).mode,
        loc: c,
        text: t
      };
      u = v;
    } else if ((((t as any).charCodeAt as any)(0) as any) >= (128 as any)) ((this as any).settings as any).strict && ((Cr as any)(((t as any).charCodeAt as any)(0)) ? ((this as any).mode as any) === ("math" as any) && (((this as any).settings as any).reportNonstrict as any)("unicodeTextInMathMode", (('Unicode text character "' as any) + ((t as any)[0] as any) as any) + ('" used in math mode' as any), e) : (((this as any).settings as any).reportNonstrict as any)("unknownSymbol", ((('Unrecognized Unicode character "' as any) + ((t as any)[0] as any) as any) + ('"' as any) as any) + (((" (" as any) + (((t as any).charCodeAt as any)(0) as any) as any) + (")" as any) as any), e)), u = {
      type: "textord",
      mode: "text",
      loc: ((c0 as any).range as any)(e),
      text: t
    };else return null;
    if (((this as any).consume as any)(), l) for (var b: any = 0; (b as any) < (((l as any)[0] as any).length as any); b++) {
      var y: any = ((l as any)[0] as any)[b];
      if (!(ct as any)[y]) throw new (S as any)((("Unknown accent ' " as any) + (y as any) as any) + ("'" as any), e);
      var x: any = ((ct as any)[y] as any)[(this as any).mode] || ((ct as any)[y] as any).text;
      if (!x) throw new (S as any)((((("Accent " as any) + (y as any) as any) + (" unsupported in " as any) as any) + ((this as any).mode as any) as any) + (" mode" as any), e);
      u = {
        type: "accent",
        mode: (this as any).mode,
        loc: ((c0 as any).range as any)(e),
        label: x,
        isStretchy: !1,
        isShifty: !0,
        base: u
      };
    }
    return u;
  }
}
(je as any).endOfExpression = new (Set as any)(["}", "\\endgroup", "\\end", "\\right", "&"]);
var Gt: any = function (this: any, e: any, t: any): any {
    if (!((typeof e as any) == ("string" as any) || e instanceof String)) throw new (TypeError as any)("KaTeX can only parse string typed expression");
    var a: any = new (je as any)(e, t);
    delete ((((a as any).gullet as any).macros as any).current as any)["\\df@tag"];
    var n: any = ((a as any).parse as any)();
    if (delete ((((a as any).gullet as any).macros as any).current as any)["\\current@color"], delete ((((a as any).gullet as any).macros as any).current as any)["\\color"], ((((a as any).gullet as any).macros as any).get as any)("\\df@tag")) {
      if (!(t as any).displayMode) throw new (S as any)("\\tag works only in display equations");
      n = [{
        type: "tag",
        mode: "text",
        body: n,
        tag: ((a as any).subparse as any)([new (d0 as any)("\\df@tag")])
      }];
    }
    return n;
  },
  z1: any = function (this: any, e: any, t: any, a: any): any {
    (t as any).textContent = "";
    var n: any = (((Ut as any)(e, a) as any).toNode as any)();
    ((t as any).appendChild as any)(n);
  };
(typeof document as any) < ("u" as any) && ((document as any).compatMode as any) !== ("CSS1Compat" as any) && ((typeof console as any) < ("u" as any) && ((console as any).warn as any)("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."), z1 = function (this: any): any {
  throw new (S as any)("KaTeX doesn't work in quirks mode.");
});
var g4: any = function (this: any, e: any, t: any): any {
    var a: any = (((Ut as any)(e, t) as any).toMarkup as any)();
    return a;
  },
  b4: any = function (this: any, e: any, t: any): any {
    var a: any = new (Bt as any)(t);
    return (Gt as any)(e, a);
  },
  A1: any = function (this: any, e: any, t: any, a: any): any {
    if ((a as any).throwOnError || !(e instanceof S)) throw e;
    var n: any = (k as any)(["katex-error"], [new (f0 as any)(t)]);
    return ((n as any).setAttribute as any)("title", ((e as any).toString as any)()), ((n as any).setAttribute as any)("style", ("color:" as any) + ((a as any).errorColor as any)), n;
  },
  Ut: any = function (this: any, e: any, t: any): any {
    var a: any = new (Bt as any)(t);
    try {
      var n: any = (Gt as any)(e, a);
      return (Ba as any)(n, e, a);
    } catch (l: any) {
      return (A1 as any)(l, e, a);
    }
  },
  y4: any = function (this: any, e: any, t: any): any {
    var a: any = new (Bt as any)(t);
    try {
      var n: any = (Gt as any)(e, a);
      return (Da as any)(n, e, a);
    } catch (l: any) {
      return (A1 as any)(l, e, a);
    }
  },
  x4: string = "0.16.45",
  w4: any = {
    Span: ne,
    Anchor: Oe,
    SymbolNode: f0,
    SvgNode: D0,
    PathNode: P0,
    LineNode: pt
  },
  k4: any = {
    version: x4,
    render: z1,
    renderToString: g4,
    ParseError: S,
    SETTINGS_SCHEMA: dt,
    __parse: b4,
    __renderToDomTree: Ut,
    __renderToHTMLTree: y4,
    __setFontMetrics: ha,
    __defineSymbol: i,
    __defineFunction: B,
    __defineMacro: m,
    __domTree: w4
  };
export { S as ParseError, dt as SETTINGS_SCHEMA, B as __defineFunction, m as __defineMacro, i as __defineSymbol, w4 as __domTree, b4 as __parse, Ut as __renderToDomTree, y4 as __renderToHTMLTree, ha as __setFontMetrics, k4 as default, z1 as render, g4 as renderToString, x4 as version };
//# debugId=69c4665f-0b40-40ac-8498-6e89ba1c95c2
