declare var Dimension: any;
declare var DimensionD: any;
declare var Layout: any;
declare var Point: any;
declare var console: any;
declare var cytoscape: any;
declare var document: any;
declare var global: any;
declare var instance: any;
declare var key: any;
declare var next: any;
declare var pred1: any;
declare var pred2: any;
declare var processed: any;
declare var self: any;
declare var update: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "afd97758-6555-4c8a-81f5-9d03836bc6a5", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-afd97758-6555-4c8a-81f5-9d03836bc6a5");
  } catch (e: any) {}
} as any)();
import { p as Ze } from "./chunk-chunk-JWPE2WC7-firmgLgH.js";
import { _ as gt, F as qe, ad as Qe, l as Fe, b as Je, a as Ke, o as je, p as _e, g as tr, s as er, q as rr, B as ir, z as ar, D as nr, c as Ee, a$ as Te, ai as pe, i as or, d as sr, r as hr, aj as lr, b7 as fr } from "./chunk-mermaid.core-B9Iu5CoE.js";
import { p as cr } from "./chunk-cynefin-VYW2F7L2-ChVxrOa1.js";
import { c as be } from "./chunk-cytoscape.esm-CY9iOoO4.js";
import { a4 as gr } from "./index.eager-vendor-Qbf9YA6n.js";
var he: any = {
    exports: {}
  },
  le: any = {
    exports: {}
  },
  fe: any = {
    exports: {}
  },
  ur: any = (fe as any).exports,
  Oe: any;
function dr(this: any): any {
  return Oe || (Oe = 1, (function (this: any, x: any, A: any): any {
    (function (this: any, R: any, N: any): any {
      (x as any).exports = (N as any)();
    } as any)(ur, function (this: any): any {
      return (function (this: any, C: any): any {
        var R: any = {};
        function N(this: any, v: any): any {
          if ((R as any)[v]) return ((R as any)[v] as any).exports;
          var h: any = (R as any)[v] = {
            i: v,
            l: !1,
            exports: {}
          };
          return (((C as any)[v] as any).call as any)((h as any).exports, h, (h as any).exports, N), (h as any).l = !0, (h as any).exports;
        }
        return (N as any).m = C, (N as any).c = R, (N as any).i = function (this: any, v: any): any {
          return v;
        }, (N as any).d = function (this: any, v: any, h: any, a: any): any {
          ((N as any).o as any)(v, h) || ((Object as any).defineProperty as any)(v, h, {
            configurable: !1,
            enumerable: !0,
            get: a
          });
        }, (N as any).n = function (this: any, v: any): any {
          var h: any = v && (v as any).__esModule ? function (this: any): any {
            return (v as any).default;
          } : function (this: any): any {
            return v;
          };
          return ((N as any).d as any)(h, "a", h), h;
        }, (N as any).o = function (this: any, v: any, h: any): any {
          return ((((Object as any).prototype as any).hasOwnProperty as any).call as any)(v, h);
        }, (N as any).p = "", (N as any)((N as any).s = 28);
      } as any)([function (this: any, C: any, R: any, N: any): any {
        function v(this: any): any {}
        (v as any).QUALITY = 1, (v as any).DEFAULT_CREATE_BENDS_AS_NEEDED = !1, (v as any).DEFAULT_INCREMENTAL = !1, (v as any).DEFAULT_ANIMATION_ON_LAYOUT = !0, (v as any).DEFAULT_ANIMATION_DURING_LAYOUT = !1, (v as any).DEFAULT_ANIMATION_PERIOD = 50, (v as any).DEFAULT_UNIFORM_LEAF_NODE_SIZES = !1, (v as any).DEFAULT_GRAPH_MARGIN = 15, (v as any).NODE_DIMENSIONS_INCLUDE_LABELS = !1, (v as any).SIMPLE_NODE_SIZE = 40, (v as any).SIMPLE_NODE_HALF_SIZE = ((v as any).SIMPLE_NODE_SIZE as any) / (2 as any), (v as any).EMPTY_COMPOUND_NODE_SIZE = 40, (v as any).MIN_EDGE_LENGTH = 1, (v as any).WORLD_BOUNDARY = 1e6, (v as any).INITIAL_WORLD_BOUNDARY = ((v as any).WORLD_BOUNDARY as any) / (1e3 as any), (v as any).WORLD_CENTER_X = 1200, (v as any).WORLD_CENTER_Y = 900, (C as any).exports = v;
      }, function (this: any, C: any, R: any, N: any): any {
        var i: any;
        var v: any = (N as any)(2),
          h: any = (N as any)(8),
          a: any = (N as any)(9);
        function r(this: any, f: any, e: any, g: any): any {
          ((v as any).call as any)(this, g), (this as any).isOverlapingSourceAndTarget = !1, (this as any).vGraphObject = g, (this as any).bendpoints = [], (this as any).source = f, (this as any).target = e;
        }
        (r as any).prototype = ((Object as any).create as any)((v as any).prototype);
        for (i in v) (r as any)[i] = (v as any)[i];
        ((r as any).prototype as any).getSource = function (this: any): any {
          return (this as any).source;
        }, ((r as any).prototype as any).getTarget = function (this: any): any {
          return (this as any).target;
        }, ((r as any).prototype as any).isInterGraph = function (this: any): any {
          return (this as any).isInterGraph;
        }, ((r as any).prototype as any).getLength = function (this: any): any {
          return (this as any).length;
        }, ((r as any).prototype as any).isOverlapingSourceAndTarget = function (this: any): any {
          return (this as any).isOverlapingSourceAndTarget;
        }, ((r as any).prototype as any).getBendpoints = function (this: any): any {
          return (this as any).bendpoints;
        }, ((r as any).prototype as any).getLca = function (this: any): any {
          return (this as any).lca;
        }, ((r as any).prototype as any).getSourceInLca = function (this: any): any {
          return (this as any).sourceInLca;
        }, ((r as any).prototype as any).getTargetInLca = function (this: any): any {
          return (this as any).targetInLca;
        }, ((r as any).prototype as any).getOtherEnd = function (this: any, f: any): any {
          if (((this as any).source as any) === (f as any)) return (this as any).target;
          if (((this as any).target as any) === (f as any)) return (this as any).source;
          throw "Node is not incident with this edge";
        }, ((r as any).prototype as any).getOtherEndInGraph = function (this: any, f: any, e: any): any {
          for (var g: any = ((this as any).getOtherEnd as any)(f), t: any = ((((e as any).getGraphManager as any)() as any).getRoot as any)();;) {
            if ((((g as any).getOwner as any)() as any) == (e as any)) return g;
            if ((((g as any).getOwner as any)() as any) == (t as any)) break;
            g = ((((g as any).getOwner as any)() as any).getParent as any)();
          }
          return null;
        }, ((r as any).prototype as any).updateLength = function (this: any): any {
          var f: any = new (Array as any)(4);
          (this as any).isOverlapingSourceAndTarget = ((h as any).getIntersection as any)((((this as any).target as any).getRect as any)(), (((this as any).source as any).getRect as any)(), f), (this as any).isOverlapingSourceAndTarget || ((this as any).lengthX = ((f as any)[0] as any) - ((f as any)[2] as any), (this as any).lengthY = ((f as any)[1] as any) - ((f as any)[3] as any), (((Math as any).abs as any)((this as any).lengthX) as any) < (1 as any) && ((this as any).lengthX = ((a as any).sign as any)((this as any).lengthX)), (((Math as any).abs as any)((this as any).lengthY) as any) < (1 as any) && ((this as any).lengthY = ((a as any).sign as any)((this as any).lengthY)), (this as any).length = ((Math as any).sqrt as any)((((this as any).lengthX as any) * ((this as any).lengthX as any) as any) + (((this as any).lengthY as any) * ((this as any).lengthY as any) as any)));
        }, ((r as any).prototype as any).updateLengthSimple = function (this: any): any {
          (this as any).lengthX = ((((this as any).target as any).getCenterX as any)() as any) - ((((this as any).source as any).getCenterX as any)() as any), (this as any).lengthY = ((((this as any).target as any).getCenterY as any)() as any) - ((((this as any).source as any).getCenterY as any)() as any), (((Math as any).abs as any)((this as any).lengthX) as any) < (1 as any) && ((this as any).lengthX = ((a as any).sign as any)((this as any).lengthX)), (((Math as any).abs as any)((this as any).lengthY) as any) < (1 as any) && ((this as any).lengthY = ((a as any).sign as any)((this as any).lengthY)), (this as any).length = ((Math as any).sqrt as any)((((this as any).lengthX as any) * ((this as any).lengthX as any) as any) + (((this as any).lengthY as any) * ((this as any).lengthY as any) as any));
        }, (C as any).exports = r;
      }, function (this: any, C: any, R: any, N: any): any {
        function v(this: any, h: any): any {
          (this as any).vGraphObject = h;
        }
        (C as any).exports = v;
      }, function (this: any, C: any, R: any, N: any): any {
        var g: any;
        var v: any = (N as any)(2),
          h: any = (N as any)(10),
          a: any = (N as any)(13),
          r: any = (N as any)(0),
          i: any = (N as any)(16),
          f: any = (N as any)(5);
        function e(this: any, t: any, s: any, n: any, c: any): any {
          (n as any) == (null as any) && (c as any) == (null as any) && (c = s), ((v as any).call as any)(this, c), ((t as any).graphManager as any) != (null as any) && (t = (t as any).graphManager), (this as any).estimatedSize = (h as any).MIN_VALUE, (this as any).inclusionTreeDepth = (h as any).MAX_VALUE, (this as any).vGraphObject = c, (this as any).edges = [], (this as any).graphManager = t, (n as any) != (null as any) && (s as any) != (null as any) ? (this as any).rect = new (a as any)((s as any).x, (s as any).y, (n as any).width, (n as any).height) : (this as any).rect = new (a as any)();
        }
        (e as any).prototype = ((Object as any).create as any)((v as any).prototype);
        for (g in v) (e as any)[g] = (v as any)[g];
        ((e as any).prototype as any).getEdges = function (this: any): any {
          return (this as any).edges;
        }, ((e as any).prototype as any).getChild = function (this: any): any {
          return (this as any).child;
        }, ((e as any).prototype as any).getOwner = function (this: any): any {
          return (this as any).owner;
        }, ((e as any).prototype as any).getWidth = function (this: any): any {
          return ((this as any).rect as any).width;
        }, ((e as any).prototype as any).setWidth = function (this: any, t: any): any {
          ((this as any).rect as any).width = t;
        }, ((e as any).prototype as any).getHeight = function (this: any): any {
          return ((this as any).rect as any).height;
        }, ((e as any).prototype as any).setHeight = function (this: any, t: any): any {
          ((this as any).rect as any).height = t;
        }, ((e as any).prototype as any).getCenterX = function (this: any): any {
          return (((this as any).rect as any).x as any) + ((((this as any).rect as any).width as any) / (2 as any) as any);
        }, ((e as any).prototype as any).getCenterY = function (this: any): any {
          return (((this as any).rect as any).y as any) + ((((this as any).rect as any).height as any) / (2 as any) as any);
        }, ((e as any).prototype as any).getCenter = function (this: any): any {
          return new (f as any)((((this as any).rect as any).x as any) + ((((this as any).rect as any).width as any) / (2 as any) as any), (((this as any).rect as any).y as any) + ((((this as any).rect as any).height as any) / (2 as any) as any));
        }, ((e as any).prototype as any).getLocation = function (this: any): any {
          return new (f as any)(((this as any).rect as any).x, ((this as any).rect as any).y);
        }, ((e as any).prototype as any).getRect = function (this: any): any {
          return (this as any).rect;
        }, ((e as any).prototype as any).getDiagonal = function (this: any): any {
          return ((Math as any).sqrt as any)(((((this as any).rect as any).width as any) * (((this as any).rect as any).width as any) as any) + ((((this as any).rect as any).height as any) * (((this as any).rect as any).height as any) as any));
        }, ((e as any).prototype as any).getHalfTheDiagonal = function (this: any): any {
          return (((Math as any).sqrt as any)(((((this as any).rect as any).height as any) * (((this as any).rect as any).height as any) as any) + ((((this as any).rect as any).width as any) * (((this as any).rect as any).width as any) as any)) as any) / (2 as any);
        }, ((e as any).prototype as any).setRect = function (this: any, t: any, s: any): any {
          ((this as any).rect as any).x = (t as any).x, ((this as any).rect as any).y = (t as any).y, ((this as any).rect as any).width = (s as any).width, ((this as any).rect as any).height = (s as any).height;
        }, ((e as any).prototype as any).setCenter = function (this: any, t: any, s: any): any {
          ((this as any).rect as any).x = (t as any) - ((((this as any).rect as any).width as any) / (2 as any) as any), ((this as any).rect as any).y = (s as any) - ((((this as any).rect as any).height as any) / (2 as any) as any);
        }, ((e as any).prototype as any).setLocation = function (this: any, t: any, s: any): any {
          ((this as any).rect as any).x = t, ((this as any).rect as any).y = s;
        }, ((e as any).prototype as any).moveBy = function (this: any, t: any, s: any): any {
          ((this as any).rect as any).x += t, ((this as any).rect as any).y += s;
        }, ((e as any).prototype as any).getEdgeListToNode = function (this: any, t: any): any {
          var s: any = [],
            n: any = this;
          return (((n as any).edges as any).forEach as any)(function (this: any, c: any): any {
            if (((c as any).target as any) == (t as any)) {
              if (((c as any).source as any) != (n as any)) throw "Incorrect edge source!";
              ((s as any).push as any)(c);
            }
          }), s;
        }, ((e as any).prototype as any).getEdgesBetween = function (this: any, t: any): any {
          var s: any = [],
            n: any = this;
          return (((n as any).edges as any).forEach as any)(function (this: any, c: any): any {
            if (!(((c as any).source as any) == (n as any) || ((c as any).target as any) == (n as any))) throw "Incorrect edge source and/or target";
            (((c as any).target as any) == (t as any) || ((c as any).source as any) == (t as any)) && ((s as any).push as any)(c);
          }), s;
        }, ((e as any).prototype as any).getNeighborsList = function (this: any): any {
          var t: any = new (Set as any)(),
            s: any = this;
          return (((s as any).edges as any).forEach as any)(function (this: any, n: any): any {
            if (((n as any).source as any) == (s as any)) ((t as any).add as any)((n as any).target);else {
              if (((n as any).target as any) != (s as any)) throw "Incorrect incidency!";
              ((t as any).add as any)((n as any).source);
            }
          }), t;
        }, ((e as any).prototype as any).withChildren = function (this: any): any {
          var t: any = new (Set as any)(),
            s: any,
            n: any;
          if (((t as any).add as any)(this), ((this as any).child as any) != (null as any)) for (var c: any = (((this as any).child as any).getNodes as any)(), l: any = 0; (l as any) < ((c as any).length as any); l++) s = (c as any)[l], n = ((s as any).withChildren as any)(), ((n as any).forEach as any)(function (this: any, T: any): any {
            ((t as any).add as any)(T);
          });
          return t;
        }, ((e as any).prototype as any).getNoOfChildren = function (this: any): any {
          var t: any = 0,
            s: any;
          if (((this as any).child as any) == (null as any)) t = 1;else for (var n: any = (((this as any).child as any).getNodes as any)(), c: any = 0; (c as any) < ((n as any).length as any); c++) s = (n as any)[c], t += ((s as any).getNoOfChildren as any)();
          return (t as any) == (0 as any) && (t = 1), t;
        }, ((e as any).prototype as any).getEstimatedSize = function (this: any): any {
          if (((this as any).estimatedSize as any) == ((h as any).MIN_VALUE as any)) throw "assert failed";
          return (this as any).estimatedSize;
        }, ((e as any).prototype as any).calcEstimatedSize = function (this: any): any {
          return ((this as any).child as any) == (null as any) ? (this as any).estimatedSize = ((((this as any).rect as any).width as any) + (((this as any).rect as any).height as any) as any) / (2 as any) : ((this as any).estimatedSize = (((this as any).child as any).calcEstimatedSize as any)(), ((this as any).rect as any).width = (this as any).estimatedSize, ((this as any).rect as any).height = (this as any).estimatedSize, (this as any).estimatedSize);
        }, ((e as any).prototype as any).scatter = function (this: any): any {
          var t: any,
            s: any,
            n: any = -(r as any).INITIAL_WORLD_BOUNDARY,
            c: any = (r as any).INITIAL_WORLD_BOUNDARY;
          t = (((r as any).WORLD_CENTER_X as any) + ((((i as any).nextDouble as any)() as any) * ((c as any) - (n as any) as any) as any) as any) + (n as any);
          var l: any = -(r as any).INITIAL_WORLD_BOUNDARY,
            T: any = (r as any).INITIAL_WORLD_BOUNDARY;
          s = (((r as any).WORLD_CENTER_Y as any) + ((((i as any).nextDouble as any)() as any) * ((T as any) - (l as any) as any) as any) as any) + (l as any), ((this as any).rect as any).x = t, ((this as any).rect as any).y = s;
        }, ((e as any).prototype as any).updateBounds = function (this: any): any {
          if ((((this as any).getChild as any)() as any) == (null as any)) throw "assert failed";
          if (((((((this as any).getChild as any)() as any).getNodes as any)() as any).length as any) != (0 as any)) {
            var t: any = ((this as any).getChild as any)();
            if (((t as any).updateBounds as any)(!0), ((this as any).rect as any).x = ((t as any).getLeft as any)(), ((this as any).rect as any).y = ((t as any).getTop as any)(), ((this as any).setWidth as any)((((t as any).getRight as any)() as any) - (((t as any).getLeft as any)() as any)), ((this as any).setHeight as any)((((t as any).getBottom as any)() as any) - (((t as any).getTop as any)() as any)), (r as any).NODE_DIMENSIONS_INCLUDE_LABELS) {
              var s: any = (((t as any).getRight as any)() as any) - (((t as any).getLeft as any)() as any),
                n: any = (((t as any).getBottom as any)() as any) - (((t as any).getTop as any)() as any);
              (this as any).labelWidth && (((this as any).labelPosHorizontal as any) == ("left" as any) ? (((this as any).rect as any).x -= (this as any).labelWidth, ((this as any).setWidth as any)((s as any) + ((this as any).labelWidth as any))) : ((this as any).labelPosHorizontal as any) == ("center" as any) && ((this as any).labelWidth as any) > (s as any) ? (((this as any).rect as any).x -= (((this as any).labelWidth as any) - (s as any) as any) / (2 as any), ((this as any).setWidth as any)((this as any).labelWidth)) : ((this as any).labelPosHorizontal as any) == ("right" as any) && ((this as any).setWidth as any)((s as any) + ((this as any).labelWidth as any))), (this as any).labelHeight && (((this as any).labelPosVertical as any) == ("top" as any) ? (((this as any).rect as any).y -= (this as any).labelHeight, ((this as any).setHeight as any)((n as any) + ((this as any).labelHeight as any))) : ((this as any).labelPosVertical as any) == ("center" as any) && ((this as any).labelHeight as any) > (n as any) ? (((this as any).rect as any).y -= (((this as any).labelHeight as any) - (n as any) as any) / (2 as any), ((this as any).setHeight as any)((this as any).labelHeight)) : ((this as any).labelPosVertical as any) == ("bottom" as any) && ((this as any).setHeight as any)((n as any) + ((this as any).labelHeight as any)));
            }
          }
        }, ((e as any).prototype as any).getInclusionTreeDepth = function (this: any): any {
          if (((this as any).inclusionTreeDepth as any) == ((h as any).MAX_VALUE as any)) throw "assert failed";
          return (this as any).inclusionTreeDepth;
        }, ((e as any).prototype as any).transform = function (this: any, t: any): any {
          var s: any = ((this as any).rect as any).x;
          (s as any) > ((r as any).WORLD_BOUNDARY as any) ? s = (r as any).WORLD_BOUNDARY : (s as any) < (-(r as any).WORLD_BOUNDARY as any) && (s = -(r as any).WORLD_BOUNDARY);
          var n: any = ((this as any).rect as any).y;
          (n as any) > ((r as any).WORLD_BOUNDARY as any) ? n = (r as any).WORLD_BOUNDARY : (n as any) < (-(r as any).WORLD_BOUNDARY as any) && (n = -(r as any).WORLD_BOUNDARY);
          var c: any = new (f as any)(s, n),
            l: any = ((t as any).inverseTransformPoint as any)(c);
          ((this as any).setLocation as any)((l as any).x, (l as any).y);
        }, ((e as any).prototype as any).getLeft = function (this: any): any {
          return ((this as any).rect as any).x;
        }, ((e as any).prototype as any).getRight = function (this: any): any {
          return (((this as any).rect as any).x as any) + (((this as any).rect as any).width as any);
        }, ((e as any).prototype as any).getTop = function (this: any): any {
          return ((this as any).rect as any).y;
        }, ((e as any).prototype as any).getBottom = function (this: any): any {
          return (((this as any).rect as any).y as any) + (((this as any).rect as any).height as any);
        }, ((e as any).prototype as any).getParent = function (this: any): any {
          return ((this as any).owner as any) == (null as any) ? null : (((this as any).owner as any).getParent as any)();
        }, (C as any).exports = e;
      }, function (this: any, C: any, R: any, N: any): any {
        var a: any;
        var v: any = (N as any)(0);
        function h(this: any): any {}
        for (a in v) (h as any)[a] = (v as any)[a];
        (h as any).MAX_ITERATIONS = 2500, (h as any).DEFAULT_EDGE_LENGTH = 50, (h as any).DEFAULT_SPRING_STRENGTH = .45, (h as any).DEFAULT_REPULSION_STRENGTH = 4500, (h as any).DEFAULT_GRAVITY_STRENGTH = .4, (h as any).DEFAULT_COMPOUND_GRAVITY_STRENGTH = 1, (h as any).DEFAULT_GRAVITY_RANGE_FACTOR = 3.8, (h as any).DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = 1.5, (h as any).DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION = !0, (h as any).DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION = !0, (h as any).DEFAULT_COOLING_FACTOR_INCREMENTAL = .3, (h as any).COOLING_ADAPTATION_FACTOR = .33, (h as any).ADAPTATION_LOWER_NODE_LIMIT = 1e3, (h as any).ADAPTATION_UPPER_NODE_LIMIT = 5e3, (h as any).MAX_NODE_DISPLACEMENT_INCREMENTAL = 100, (h as any).MAX_NODE_DISPLACEMENT = ((h as any).MAX_NODE_DISPLACEMENT_INCREMENTAL as any) * (3 as any), (h as any).MIN_REPULSION_DIST = ((h as any).DEFAULT_EDGE_LENGTH as any) / (10 as any), (h as any).CONVERGENCE_CHECK_PERIOD = 100, (h as any).PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = .1, (h as any).MIN_EDGE_LENGTH = 1, (h as any).GRID_CALCULATION_CHECK_PERIOD = 10, (C as any).exports = h;
      }, function (this: any, C: any, R: any, N: any): any {
        function v(this: any, h: any, a: any): any {
          (h as any) == (null as any) && (a as any) == (null as any) ? ((this as any).x = 0, (this as any).y = 0) : ((this as any).x = h, (this as any).y = a);
        }
        ((v as any).prototype as any).getX = function (this: any): any {
          return (this as any).x;
        }, ((v as any).prototype as any).getY = function (this: any): any {
          return (this as any).y;
        }, ((v as any).prototype as any).setX = function (this: any, h: any): any {
          (this as any).x = h;
        }, ((v as any).prototype as any).setY = function (this: any, h: any): any {
          (this as any).y = h;
        }, ((v as any).prototype as any).getDifference = function (this: any, h: any): any {
          return new (DimensionD as any)(((this as any).x as any) - ((h as any).x as any), ((this as any).y as any) - ((h as any).y as any));
        }, ((v as any).prototype as any).getCopy = function (this: any): any {
          return new (v as any)((this as any).x, (this as any).y);
        }, ((v as any).prototype as any).translate = function (this: any, h: any): any {
          return (this as any).x += (h as any).width, (this as any).y += (h as any).height, this;
        }, (C as any).exports = v;
      }, function (this: any, C: any, R: any, N: any): any {
        var n: any;
        var v: any = (N as any)(2),
          h: any = (N as any)(10),
          a: any = (N as any)(0),
          r: any = (N as any)(7),
          i: any = (N as any)(3),
          f: any = (N as any)(1),
          e: any = (N as any)(13),
          g: any = (N as any)(12),
          t: any = (N as any)(11);
        function s(this: any, c: any, l: any, T: any): any {
          ((v as any).call as any)(this, T), (this as any).estimatedSize = (h as any).MIN_VALUE, (this as any).margin = (a as any).DEFAULT_GRAPH_MARGIN, (this as any).edges = [], (this as any).nodes = [], (this as any).isConnected = !1, (this as any).parent = c, (l as any) != (null as any) && l instanceof r ? (this as any).graphManager = l : (l as any) != (null as any) && l instanceof Layout && ((this as any).graphManager = (l as any).graphManager);
        }
        (s as any).prototype = ((Object as any).create as any)((v as any).prototype);
        for (n in v) (s as any)[n] = (v as any)[n];
        ((s as any).prototype as any).getNodes = function (this: any): any {
          return (this as any).nodes;
        }, ((s as any).prototype as any).getEdges = function (this: any): any {
          return (this as any).edges;
        }, ((s as any).prototype as any).getGraphManager = function (this: any): any {
          return (this as any).graphManager;
        }, ((s as any).prototype as any).getParent = function (this: any): any {
          return (this as any).parent;
        }, ((s as any).prototype as any).getLeft = function (this: any): any {
          return (this as any).left;
        }, ((s as any).prototype as any).getRight = function (this: any): any {
          return (this as any).right;
        }, ((s as any).prototype as any).getTop = function (this: any): any {
          return (this as any).top;
        }, ((s as any).prototype as any).getBottom = function (this: any): any {
          return (this as any).bottom;
        }, ((s as any).prototype as any).isConnected = function (this: any): any {
          return (this as any).isConnected;
        }, ((s as any).prototype as any).add = function (this: any, c: any, l: any, T: any): any {
          if ((l as any) == (null as any) && (T as any) == (null as any)) {
            var u: any = c;
            if (((this as any).graphManager as any) == (null as any)) throw "Graph has no graph mgr!";
            if ((((((this as any).getNodes as any)() as any).indexOf as any)(u) as any) > (-1 as any)) throw "Node already in graph!";
            return (u as any).owner = this, ((((this as any).getNodes as any)() as any).push as any)(u), u;
          } else {
            var d: any = c;
            if (!((((((this as any).getNodes as any)() as any).indexOf as any)(l) as any) > (-1 as any) && (((((this as any).getNodes as any)() as any).indexOf as any)(T) as any) > (-1 as any))) throw "Source or target not in graph!";
            if (!(((l as any).owner as any) == ((T as any).owner as any) && ((l as any).owner as any) == (this as any))) throw "Both owners must be this graph!";
            return ((l as any).owner as any) != ((T as any).owner as any) ? null : ((d as any).source = l, (d as any).target = T, (d as any).isInterGraph = !1, ((((this as any).getEdges as any)() as any).push as any)(d), (((l as any).edges as any).push as any)(d), (T as any) != (l as any) && (((T as any).edges as any).push as any)(d), d);
          }
        }, ((s as any).prototype as any).remove = function (this: any, c: any): any {
          var l: any = c;
          if (c instanceof i) {
            if ((l as any) == (null as any)) throw "Node is null!";
            if (!(((l as any).owner as any) != (null as any) && ((l as any).owner as any) == (this as any))) throw "Owner graph is invalid!";
            if (((this as any).graphManager as any) == (null as any)) throw "Owner graph manager is invalid!";
            for (var T: any = (((l as any).edges as any).slice as any)(), u: any, d: any = (T as any).length, L: any = 0; (L as any) < (d as any); L++) u = (T as any)[L], (u as any).isInterGraph ? (((this as any).graphManager as any).remove as any)(u) : ((((u as any).source as any).owner as any).remove as any)(u);
            var b: any = (((this as any).nodes as any).indexOf as any)(l);
            if ((b as any) == (-1 as any)) throw "Node not in owner node list!";
            (((this as any).nodes as any).splice as any)(b, 1);
          } else if (c instanceof f) {
            var u: any = c;
            if ((u as any) == (null as any)) throw "Edge is null!";
            if (!(((u as any).source as any) != (null as any) && ((u as any).target as any) != (null as any))) throw "Source and/or target is null!";
            if (!((((u as any).source as any).owner as any) != (null as any) && (((u as any).target as any).owner as any) != (null as any) && (((u as any).source as any).owner as any) == (this as any) && (((u as any).target as any).owner as any) == (this as any))) throw "Source and/or target owner is invalid!";
            var w: any = ((((u as any).source as any).edges as any).indexOf as any)(u),
              G: any = ((((u as any).target as any).edges as any).indexOf as any)(u);
            if (!((w as any) > (-1 as any) && (G as any) > (-1 as any))) throw "Source and/or target doesn't know this edge!";
            ((((u as any).source as any).edges as any).splice as any)(w, 1), ((u as any).target as any) != ((u as any).source as any) && ((((u as any).target as any).edges as any).splice as any)(G, 1);
            var b: any = ((((((u as any).source as any).owner as any).getEdges as any)() as any).indexOf as any)(u);
            if ((b as any) == (-1 as any)) throw "Not in owner's edge list!";
            ((((((u as any).source as any).owner as any).getEdges as any)() as any).splice as any)(b, 1);
          }
        }, ((s as any).prototype as any).updateLeftTop = function (this: any): any {
          for (var c: any = (h as any).MAX_VALUE, l: any = (h as any).MAX_VALUE, T: any, u: any, d: any, L: any = ((this as any).getNodes as any)(), b: any = (L as any).length, w: any = 0; (w as any) < (b as any); w++) {
            var G: any = (L as any)[w];
            T = ((G as any).getTop as any)(), u = ((G as any).getLeft as any)(), (c as any) > (T as any) && (c = T), (l as any) > (u as any) && (l = u);
          }
          return (c as any) == ((h as any).MAX_VALUE as any) ? null : ((((((L as any)[0] as any).getParent as any)() as any).paddingLeft as any) != (null as any) ? d = ((((L as any)[0] as any).getParent as any)() as any).paddingLeft : d = (this as any).margin, (this as any).left = (l as any) - (d as any), (this as any).top = (c as any) - (d as any), new (g as any)((this as any).left, (this as any).top));
        }, ((s as any).prototype as any).updateBounds = function (this: any, c: any): any {
          for (var l: any = (h as any).MAX_VALUE, T: any = -(h as any).MAX_VALUE, u: any = (h as any).MAX_VALUE, d: any = -(h as any).MAX_VALUE, L: any, b: any, w: any, G: any, B: any, U: any = (this as any).nodes, V: any = (U as any).length, M: any = 0; (M as any) < (V as any); M++) {
            var _: any = (U as any)[M];
            c && ((_ as any).child as any) != (null as any) && ((_ as any).updateBounds as any)(), L = ((_ as any).getLeft as any)(), b = ((_ as any).getRight as any)(), w = ((_ as any).getTop as any)(), G = ((_ as any).getBottom as any)(), (l as any) > (L as any) && (l = L), (T as any) < (b as any) && (T = b), (u as any) > (w as any) && (u = w), (d as any) < (G as any) && (d = G);
          }
          var o: any = new (e as any)(l, u, (T as any) - (l as any), (d as any) - (u as any));
          (l as any) == ((h as any).MAX_VALUE as any) && ((this as any).left = (((this as any).parent as any).getLeft as any)(), (this as any).right = (((this as any).parent as any).getRight as any)(), (this as any).top = (((this as any).parent as any).getTop as any)(), (this as any).bottom = (((this as any).parent as any).getBottom as any)()), (((((U as any)[0] as any).getParent as any)() as any).paddingLeft as any) != (null as any) ? B = ((((U as any)[0] as any).getParent as any)() as any).paddingLeft : B = (this as any).margin, (this as any).left = ((o as any).x as any) - (B as any), (this as any).right = (((o as any).x as any) + ((o as any).width as any) as any) + (B as any), (this as any).top = ((o as any).y as any) - (B as any), (this as any).bottom = (((o as any).y as any) + ((o as any).height as any) as any) + (B as any);
        }, (s as any).calculateBounds = function (this: any, c: any): any {
          for (var l: any = (h as any).MAX_VALUE, T: any = -(h as any).MAX_VALUE, u: any = (h as any).MAX_VALUE, d: any = -(h as any).MAX_VALUE, L: any, b: any, w: any, G: any, B: any = (c as any).length, U: any = 0; (U as any) < (B as any); U++) {
            var V: any = (c as any)[U];
            L = ((V as any).getLeft as any)(), b = ((V as any).getRight as any)(), w = ((V as any).getTop as any)(), G = ((V as any).getBottom as any)(), (l as any) > (L as any) && (l = L), (T as any) < (b as any) && (T = b), (u as any) > (w as any) && (u = w), (d as any) < (G as any) && (d = G);
          }
          var M: any = new (e as any)(l, u, (T as any) - (l as any), (d as any) - (u as any));
          return M;
        }, ((s as any).prototype as any).getInclusionTreeDepth = function (this: any): any {
          return (this as any) == ((((this as any).graphManager as any).getRoot as any)() as any) ? 1 : (((this as any).parent as any).getInclusionTreeDepth as any)();
        }, ((s as any).prototype as any).getEstimatedSize = function (this: any): any {
          if (((this as any).estimatedSize as any) == ((h as any).MIN_VALUE as any)) throw "assert failed";
          return (this as any).estimatedSize;
        }, ((s as any).prototype as any).calcEstimatedSize = function (this: any): any {
          for (var c: any = 0, l: any = (this as any).nodes, T: any = (l as any).length, u: any = 0; (u as any) < (T as any); u++) {
            var d: any = (l as any)[u];
            c += ((d as any).calcEstimatedSize as any)();
          }
          return (c as any) == (0 as any) ? (this as any).estimatedSize = (a as any).EMPTY_COMPOUND_NODE_SIZE : (this as any).estimatedSize = (c as any) / (((Math as any).sqrt as any)(((this as any).nodes as any).length) as any), (this as any).estimatedSize;
        }, ((s as any).prototype as any).updateConnected = function (this: any): any {
          var c: any = this;
          if ((((this as any).nodes as any).length as any) == (0 as any)) {
            (this as any).isConnected = !0;
            return;
          }
          var l: any = new (t as any)(),
            T: any = new (Set as any)(),
            u: any = ((this as any).nodes as any)[0],
            d: any,
            L: any,
            b: any = ((u as any).withChildren as any)();
          for (((b as any).forEach as any)(function (this: any, M: any): any {
            ((l as any).push as any)(M), ((T as any).add as any)(M);
          }); ((l as any).length as any) !== (0 as any);) {
            u = ((l as any).shift as any)(), d = ((u as any).getEdges as any)();
            for (var w: any = (d as any).length, G: any = 0; (G as any) < (w as any); G++) {
              var B: any = (d as any)[G];
              if (L = ((B as any).getOtherEndInGraph as any)(u, this), (L as any) != (null as any) && !((T as any).has as any)(L)) {
                var U: any = ((L as any).withChildren as any)();
                ((U as any).forEach as any)(function (this: any, M: any): any {
                  ((l as any).push as any)(M), ((T as any).add as any)(M);
                });
              }
            }
          }
          if ((this as any).isConnected = !1, ((T as any).size as any) >= (((this as any).nodes as any).length as any)) {
            var V: any = 0;
            ((T as any).forEach as any)(function (this: any, M: any): any {
              ((M as any).owner as any) == (c as any) && V++;
            }), (V as any) == (((this as any).nodes as any).length as any) && ((this as any).isConnected = !0);
          }
        }, (C as any).exports = s;
      }, function (this: any, C: any, R: any, N: any): any {
        var v: any,
          h: any = (N as any)(1);
        function a(this: any, r: any): any {
          v = (N as any)(6), (this as any).layout = r, (this as any).graphs = [], (this as any).edges = [];
        }
        ((a as any).prototype as any).addRoot = function (this: any): any {
          var r: any = (((this as any).layout as any).newGraph as any)(),
            i: any = (((this as any).layout as any).newNode as any)(null),
            f: any = ((this as any).add as any)(r, i);
          return ((this as any).setRootGraph as any)(f), (this as any).rootGraph;
        }, ((a as any).prototype as any).add = function (this: any, r: any, i: any, f: any, e: any, g: any): any {
          if ((f as any) == (null as any) && (e as any) == (null as any) && (g as any) == (null as any)) {
            if ((r as any) == (null as any)) throw "Graph is null!";
            if ((i as any) == (null as any)) throw "Parent node is null!";
            if (((((this as any).graphs as any).indexOf as any)(r) as any) > (-1 as any)) throw "Graph already in this graph mgr!";
            if ((((this as any).graphs as any).push as any)(r), ((r as any).parent as any) != (null as any)) throw "Already has a parent!";
            if (((i as any).child as any) != (null as any)) throw "Already has a child!";
            return (r as any).parent = i, (i as any).child = r, r;
          } else {
            g = f, e = i, f = r;
            var t: any = ((e as any).getOwner as any)(),
              s: any = ((g as any).getOwner as any)();
            if (!((t as any) != (null as any) && (((t as any).getGraphManager as any)() as any) == (this as any))) throw "Source not in this graph mgr!";
            if (!((s as any) != (null as any) && (((s as any).getGraphManager as any)() as any) == (this as any))) throw "Target not in this graph mgr!";
            if ((t as any) == (s as any)) return (f as any).isInterGraph = !1, ((t as any).add as any)(f, e, g);
            if ((f as any).isInterGraph = !0, (f as any).source = e, (f as any).target = g, ((((this as any).edges as any).indexOf as any)(f) as any) > (-1 as any)) throw "Edge already in inter-graph edge list!";
            if ((((this as any).edges as any).push as any)(f), !(((f as any).source as any) != (null as any) && ((f as any).target as any) != (null as any))) throw "Edge source and/or target is null!";
            if (!((((((f as any).source as any).edges as any).indexOf as any)(f) as any) == (-1 as any) && (((((f as any).target as any).edges as any).indexOf as any)(f) as any) == (-1 as any))) throw "Edge already in source and/or target incidency list!";
            return ((((f as any).source as any).edges as any).push as any)(f), ((((f as any).target as any).edges as any).push as any)(f), f;
          }
        }, ((a as any).prototype as any).remove = function (this: any, r: any): any {
          if (r instanceof v) {
            var i: any = r;
            if ((((i as any).getGraphManager as any)() as any) != (this as any)) throw "Graph not in this graph mgr";
            if (!((i as any) == ((this as any).rootGraph as any) || ((i as any).parent as any) != (null as any) && (((i as any).parent as any).graphManager as any) == (this as any))) throw "Invalid parent node!";
            var f: any = [];
            f = ((f as any).concat as any)(((i as any).getEdges as any)());
            for (var e: any, g: any = (f as any).length, t: any = 0; (t as any) < (g as any); t++) e = (f as any)[t], ((i as any).remove as any)(e);
            var s: any = [];
            s = ((s as any).concat as any)(((i as any).getNodes as any)());
            var n: any;
            g = (s as any).length;
            for (var t: any = 0; (t as any) < (g as any); t++) n = (s as any)[t], ((i as any).remove as any)(n);
            (i as any) == ((this as any).rootGraph as any) && ((this as any).setRootGraph as any)(null);
            var c: any = (((this as any).graphs as any).indexOf as any)(i);
            (((this as any).graphs as any).splice as any)(c, 1), (i as any).parent = null;
          } else if (r instanceof h) {
            if (e = r, (e as any) == (null as any)) throw "Edge is null!";
            if (!(e as any).isInterGraph) throw "Not an inter-graph edge!";
            if (!(((e as any).source as any) != (null as any) && ((e as any).target as any) != (null as any))) throw "Source and/or target is null!";
            if (!((((((e as any).source as any).edges as any).indexOf as any)(e) as any) != (-1 as any) && (((((e as any).target as any).edges as any).indexOf as any)(e) as any) != (-1 as any))) throw "Source and/or target doesn't know this edge!";
            var c: any = ((((e as any).source as any).edges as any).indexOf as any)(e);
            if (((((e as any).source as any).edges as any).splice as any)(c, 1), c = ((((e as any).target as any).edges as any).indexOf as any)(e), ((((e as any).target as any).edges as any).splice as any)(c, 1), !((((e as any).source as any).owner as any) != (null as any) && (((((e as any).source as any).owner as any).getGraphManager as any)() as any) != (null as any))) throw "Edge owner graph or owner graph manager is null!";
            if (((((((((e as any).source as any).owner as any).getGraphManager as any)() as any).edges as any).indexOf as any)(e) as any) == (-1 as any)) throw "Not in owner graph manager's edge list!";
            var c: any = (((((((e as any).source as any).owner as any).getGraphManager as any)() as any).edges as any).indexOf as any)(e);
            (((((((e as any).source as any).owner as any).getGraphManager as any)() as any).edges as any).splice as any)(c, 1);
          }
        }, ((a as any).prototype as any).updateBounds = function (this: any): any {
          (((this as any).rootGraph as any).updateBounds as any)(!0);
        }, ((a as any).prototype as any).getGraphs = function (this: any): any {
          return (this as any).graphs;
        }, ((a as any).prototype as any).getAllNodes = function (this: any): any {
          if (((this as any).allNodes as any) == (null as any)) {
            for (var r: any = [], i: any = ((this as any).getGraphs as any)(), f: any = (i as any).length, e: any = 0; (e as any) < (f as any); e++) r = ((r as any).concat as any)((((i as any)[e] as any).getNodes as any)());
            (this as any).allNodes = r;
          }
          return (this as any).allNodes;
        }, ((a as any).prototype as any).resetAllNodes = function (this: any): any {
          (this as any).allNodes = null;
        }, ((a as any).prototype as any).resetAllEdges = function (this: any): any {
          (this as any).allEdges = null;
        }, ((a as any).prototype as any).resetAllNodesToApplyGravitation = function (this: any): any {
          (this as any).allNodesToApplyGravitation = null;
        }, ((a as any).prototype as any).getAllEdges = function (this: any): any {
          if (((this as any).allEdges as any) == (null as any)) {
            var r: any = [],
              i: any = ((this as any).getGraphs as any)();
            (i as any).length;
            for (var f: any = 0; (f as any) < ((i as any).length as any); f++) r = ((r as any).concat as any)((((i as any)[f] as any).getEdges as any)());
            r = ((r as any).concat as any)((this as any).edges), (this as any).allEdges = r;
          }
          return (this as any).allEdges;
        }, ((a as any).prototype as any).getAllNodesToApplyGravitation = function (this: any): any {
          return (this as any).allNodesToApplyGravitation;
        }, ((a as any).prototype as any).setAllNodesToApplyGravitation = function (this: any, r: any): any {
          if (((this as any).allNodesToApplyGravitation as any) != (null as any)) throw "assert failed";
          (this as any).allNodesToApplyGravitation = r;
        }, ((a as any).prototype as any).getRoot = function (this: any): any {
          return (this as any).rootGraph;
        }, ((a as any).prototype as any).setRootGraph = function (this: any, r: any): any {
          if ((((r as any).getGraphManager as any)() as any) != (this as any)) throw "Root not in this graph mgr!";
          (this as any).rootGraph = r, ((r as any).parent as any) == (null as any) && ((r as any).parent = (((this as any).layout as any).newNode as any)("Root node"));
        }, ((a as any).prototype as any).getLayout = function (this: any): any {
          return (this as any).layout;
        }, ((a as any).prototype as any).isOneAncestorOfOther = function (this: any, r: any, i: any): any {
          if (!((r as any) != (null as any) && (i as any) != (null as any))) throw "assert failed";
          if ((r as any) == (i as any)) return !0;
          var f: any = ((r as any).getOwner as any)(),
            e: any;
          do {
            if (e = ((f as any).getParent as any)(), (e as any) == (null as any)) break;
            if ((e as any) == (i as any)) return !0;
            if (f = ((e as any).getOwner as any)(), (f as any) == (null as any)) break;
          } while (!0);
          f = ((i as any).getOwner as any)();
          do {
            if (e = ((f as any).getParent as any)(), (e as any) == (null as any)) break;
            if ((e as any) == (r as any)) return !0;
            if (f = ((e as any).getOwner as any)(), (f as any) == (null as any)) break;
          } while (!0);
          return !1;
        }, ((a as any).prototype as any).calcLowestCommonAncestors = function (this: any): any {
          for (var r: any, i: any, f: any, e: any, g: any, t: any = ((this as any).getAllEdges as any)(), s: any = (t as any).length, n: any = 0; (n as any) < (s as any); n++) {
            if (r = (t as any)[n], i = (r as any).source, f = (r as any).target, (r as any).lca = null, (r as any).sourceInLca = i, (r as any).targetInLca = f, (i as any) == (f as any)) {
              (r as any).lca = ((i as any).getOwner as any)();
              continue;
            }
            for (e = ((i as any).getOwner as any)(); ((r as any).lca as any) == (null as any);) {
              for ((r as any).targetInLca = f, g = ((f as any).getOwner as any)(); ((r as any).lca as any) == (null as any);) {
                if ((g as any) == (e as any)) {
                  (r as any).lca = g;
                  break;
                }
                if ((g as any) == ((this as any).rootGraph as any)) break;
                if (((r as any).lca as any) != (null as any)) throw "assert failed";
                (r as any).targetInLca = ((g as any).getParent as any)(), g = (((r as any).targetInLca as any).getOwner as any)();
              }
              if ((e as any) == ((this as any).rootGraph as any)) break;
              ((r as any).lca as any) == (null as any) && ((r as any).sourceInLca = ((e as any).getParent as any)(), e = (((r as any).sourceInLca as any).getOwner as any)());
            }
            if (((r as any).lca as any) == (null as any)) throw "assert failed";
          }
        }, ((a as any).prototype as any).calcLowestCommonAncestor = function (this: any, r: any, i: any): any {
          if ((r as any) == (i as any)) return ((r as any).getOwner as any)();
          var f: any = ((r as any).getOwner as any)();
          do {
            if ((f as any) == (null as any)) break;
            var e: any = ((i as any).getOwner as any)();
            do {
              if ((e as any) == (null as any)) break;
              if ((e as any) == (f as any)) return e;
              e = ((((e as any).getParent as any)() as any).getOwner as any)();
            } while (!0);
            f = ((((f as any).getParent as any)() as any).getOwner as any)();
          } while (!0);
          return f;
        }, ((a as any).prototype as any).calcInclusionTreeDepths = function (this: any, r: any, i: any): any {
          (r as any) == (null as any) && (i as any) == (null as any) && (r = (this as any).rootGraph, i = 1);
          for (var f: any, e: any = ((r as any).getNodes as any)(), g: any = (e as any).length, t: any = 0; (t as any) < (g as any); t++) f = (e as any)[t], (f as any).inclusionTreeDepth = i, ((f as any).child as any) != (null as any) && ((this as any).calcInclusionTreeDepths as any)((f as any).child, (i as any) + (1 as any));
        }, ((a as any).prototype as any).includesInvalidEdge = function (this: any): any {
          for (var r: any, i: any = [], f: any = ((this as any).edges as any).length, e: any = 0; (e as any) < (f as any); e++) r = ((this as any).edges as any)[e], ((this as any).isOneAncestorOfOther as any)((r as any).source, (r as any).target) && ((i as any).push as any)(r);
          for (var e: any = 0; (e as any) < ((i as any).length as any); e++) ((this as any).remove as any)((i as any)[e]);
          return !1;
        }, (C as any).exports = a;
      }, function (this: any, C: any, R: any, N: any): any {
        var v: any = (N as any)(12);
        function h(this: any): any {}
        (h as any).calcSeparationAmount = function (this: any, a: any, r: any, i: any, f: any): any {
          if (!((a as any).intersects as any)(r)) throw "assert failed";
          var e: any = new (Array as any)(2);
          ((this as any).decideDirectionsForOverlappingNodes as any)(a, r, e), (i as any)[0] = (((Math as any).min as any)(((a as any).getRight as any)(), ((r as any).getRight as any)()) as any) - (((Math as any).max as any)((a as any).x, (r as any).x) as any), (i as any)[1] = (((Math as any).min as any)(((a as any).getBottom as any)(), ((r as any).getBottom as any)()) as any) - (((Math as any).max as any)((a as any).y, (r as any).y) as any), (((a as any).getX as any)() as any) <= (((r as any).getX as any)() as any) && (((a as any).getRight as any)() as any) >= (((r as any).getRight as any)() as any) ? (i as any)[0] += ((Math as any).min as any)((((r as any).getX as any)() as any) - (((a as any).getX as any)() as any), (((a as any).getRight as any)() as any) - (((r as any).getRight as any)() as any)) : (((r as any).getX as any)() as any) <= (((a as any).getX as any)() as any) && (((r as any).getRight as any)() as any) >= (((a as any).getRight as any)() as any) && ((i as any)[0] += ((Math as any).min as any)((((a as any).getX as any)() as any) - (((r as any).getX as any)() as any), (((r as any).getRight as any)() as any) - (((a as any).getRight as any)() as any))), (((a as any).getY as any)() as any) <= (((r as any).getY as any)() as any) && (((a as any).getBottom as any)() as any) >= (((r as any).getBottom as any)() as any) ? (i as any)[1] += ((Math as any).min as any)((((r as any).getY as any)() as any) - (((a as any).getY as any)() as any), (((a as any).getBottom as any)() as any) - (((r as any).getBottom as any)() as any)) : (((r as any).getY as any)() as any) <= (((a as any).getY as any)() as any) && (((r as any).getBottom as any)() as any) >= (((a as any).getBottom as any)() as any) && ((i as any)[1] += ((Math as any).min as any)((((a as any).getY as any)() as any) - (((r as any).getY as any)() as any), (((r as any).getBottom as any)() as any) - (((a as any).getBottom as any)() as any)));
          var g: any = ((Math as any).abs as any)(((((r as any).getCenterY as any)() as any) - (((a as any).getCenterY as any)() as any) as any) / ((((r as any).getCenterX as any)() as any) - (((a as any).getCenterX as any)() as any) as any));
          (((r as any).getCenterY as any)() as any) === (((a as any).getCenterY as any)() as any) && (((r as any).getCenterX as any)() as any) === (((a as any).getCenterX as any)() as any) && (g = 1);
          var t: any = (g as any) * ((i as any)[0] as any),
            s: any = ((i as any)[1] as any) / (g as any);
          ((i as any)[0] as any) < (s as any) ? s = (i as any)[0] : t = (i as any)[1], (i as any)[0] = ((-1 as any) * ((e as any)[0] as any) as any) * (((s as any) / (2 as any) as any) + (f as any) as any), (i as any)[1] = ((-1 as any) * ((e as any)[1] as any) as any) * (((t as any) / (2 as any) as any) + (f as any) as any);
        }, (h as any).decideDirectionsForOverlappingNodes = function (this: any, a: any, r: any, i: any): any {
          (((a as any).getCenterX as any)() as any) < (((r as any).getCenterX as any)() as any) ? (i as any)[0] = -1 : (i as any)[0] = 1, (((a as any).getCenterY as any)() as any) < (((r as any).getCenterY as any)() as any) ? (i as any)[1] = -1 : (i as any)[1] = 1;
        }, (h as any).getIntersection2 = function (this: any, a: any, r: any, i: any): any {
          var f: any = ((a as any).getCenterX as any)(),
            e: any = ((a as any).getCenterY as any)(),
            g: any = ((r as any).getCenterX as any)(),
            t: any = ((r as any).getCenterY as any)();
          if (((a as any).intersects as any)(r)) return (i as any)[0] = f, (i as any)[1] = e, (i as any)[2] = g, (i as any)[3] = t, !0;
          var s: any = ((a as any).getX as any)(),
            n: any = ((a as any).getY as any)(),
            c: any = ((a as any).getRight as any)(),
            l: any = ((a as any).getX as any)(),
            T: any = ((a as any).getBottom as any)(),
            u: any = ((a as any).getRight as any)(),
            d: any = ((a as any).getWidthHalf as any)(),
            L: any = ((a as any).getHeightHalf as any)(),
            b: any = ((r as any).getX as any)(),
            w: any = ((r as any).getY as any)(),
            G: any = ((r as any).getRight as any)(),
            B: any = ((r as any).getX as any)(),
            U: any = ((r as any).getBottom as any)(),
            V: any = ((r as any).getRight as any)(),
            M: any = ((r as any).getWidthHalf as any)(),
            _: any = ((r as any).getHeightHalf as any)(),
            o: any = !1,
            E: any = !1;
          if ((f as any) === (g as any)) {
            if ((e as any) > (t as any)) return (i as any)[0] = f, (i as any)[1] = n, (i as any)[2] = g, (i as any)[3] = U, !1;
            if ((e as any) < (t as any)) return (i as any)[0] = f, (i as any)[1] = T, (i as any)[2] = g, (i as any)[3] = w, !1;
          } else if ((e as any) === (t as any)) {
            if ((f as any) > (g as any)) return (i as any)[0] = s, (i as any)[1] = e, (i as any)[2] = G, (i as any)[3] = t, !1;
            if ((f as any) < (g as any)) return (i as any)[0] = c, (i as any)[1] = e, (i as any)[2] = b, (i as any)[3] = t, !1;
          } else {
            var p: any = ((a as any).height as any) / ((a as any).width as any),
              m: any = ((r as any).height as any) / ((r as any).width as any),
              y: any = ((t as any) - (e as any) as any) / ((g as any) - (f as any) as any),
              S: any = void 0,
              O: any = void 0,
              F: any = void 0,
              W: any = void 0,
              I: any = void 0,
              Q: any = void 0;
            if ((-p as any) === (y as any) ? (f as any) > (g as any) ? ((i as any)[0] = l, (i as any)[1] = T, o = !0) : ((i as any)[0] = c, (i as any)[1] = n, o = !0) : (p as any) === (y as any) && ((f as any) > (g as any) ? ((i as any)[0] = s, (i as any)[1] = n, o = !0) : ((i as any)[0] = u, (i as any)[1] = T, o = !0)), (-m as any) === (y as any) ? (g as any) > (f as any) ? ((i as any)[2] = B, (i as any)[3] = U, E = !0) : ((i as any)[2] = G, (i as any)[3] = w, E = !0) : (m as any) === (y as any) && ((g as any) > (f as any) ? ((i as any)[2] = b, (i as any)[3] = w, E = !0) : ((i as any)[2] = V, (i as any)[3] = U, E = !0)), o && E) return !1;
            if ((f as any) > (g as any) ? (e as any) > (t as any) ? (S = ((this as any).getCardinalDirection as any)(p, y, 4), O = ((this as any).getCardinalDirection as any)(m, y, 2)) : (S = ((this as any).getCardinalDirection as any)(-p, y, 3), O = ((this as any).getCardinalDirection as any)(-m, y, 1)) : (e as any) > (t as any) ? (S = ((this as any).getCardinalDirection as any)(-p, y, 1), O = ((this as any).getCardinalDirection as any)(-m, y, 3)) : (S = ((this as any).getCardinalDirection as any)(p, y, 2), O = ((this as any).getCardinalDirection as any)(m, y, 4)), !o) switch (S) {
              case 1:
                W = n, F = (f as any) + ((-L as any) / (y as any) as any), (i as any)[0] = F, (i as any)[1] = W;
                break;
              case 2:
                F = u, W = (e as any) + ((d as any) * (y as any) as any), (i as any)[0] = F, (i as any)[1] = W;
                break;
              case 3:
                W = T, F = (f as any) + ((L as any) / (y as any) as any), (i as any)[0] = F, (i as any)[1] = W;
                break;
              case 4:
                F = l, W = (e as any) + ((-d as any) * (y as any) as any), (i as any)[0] = F, (i as any)[1] = W;
                break;
            }
            if (!E) switch (O) {
              case 1:
                Q = w, I = (g as any) + ((-_ as any) / (y as any) as any), (i as any)[2] = I, (i as any)[3] = Q;
                break;
              case 2:
                I = V, Q = (t as any) + ((M as any) * (y as any) as any), (i as any)[2] = I, (i as any)[3] = Q;
                break;
              case 3:
                Q = U, I = (g as any) + ((_ as any) / (y as any) as any), (i as any)[2] = I, (i as any)[3] = Q;
                break;
              case 4:
                I = B, Q = (t as any) + ((-M as any) * (y as any) as any), (i as any)[2] = I, (i as any)[3] = Q;
                break;
            }
          }
          return !1;
        }, (h as any).getCardinalDirection = function (this: any, a: any, r: any, i: any): any {
          return (a as any) > (r as any) ? i : (1 as any) + ((i as any) % (4 as any) as any);
        }, (h as any).getIntersection = function (this: any, a: any, r: any, i: any, f: any): any {
          if ((f as any) == (null as any)) return ((this as any).getIntersection2 as any)(a, r, i);
          var e: any = (a as any).x,
            g: any = (a as any).y,
            t: any = (r as any).x,
            s: any = (r as any).y,
            n: any = (i as any).x,
            c: any = (i as any).y,
            l: any = (f as any).x,
            T: any = (f as any).y,
            u: any = void 0,
            d: any = void 0,
            L: any = void 0,
            b: any = void 0,
            w: any = void 0,
            G: any = void 0,
            B: any = void 0,
            U: any = void 0,
            V: any = void 0;
          return L = (s as any) - (g as any), w = (e as any) - (t as any), B = ((t as any) * (g as any) as any) - ((e as any) * (s as any) as any), b = (T as any) - (c as any), G = (n as any) - (l as any), U = ((l as any) * (c as any) as any) - ((n as any) * (T as any) as any), V = ((L as any) * (G as any) as any) - ((b as any) * (w as any) as any), (V as any) === (0 as any) ? null : (u = (((w as any) * (U as any) as any) - ((G as any) * (B as any) as any) as any) / (V as any), d = (((b as any) * (B as any) as any) - ((L as any) * (U as any) as any) as any) / (V as any), new (v as any)(u, d));
        }, (h as any).angleOfVector = function (this: any, a: any, r: any, i: any, f: any): any {
          var e: any = void 0;
          return (a as any) !== (i as any) ? (e = ((Math as any).atan as any)(((f as any) - (r as any) as any) / ((i as any) - (a as any) as any)), (i as any) < (a as any) ? e += (Math as any).PI : (f as any) < (r as any) && (e += (this as any).TWO_PI)) : (f as any) < (r as any) ? e = (this as any).ONE_AND_HALF_PI : e = (this as any).HALF_PI, e;
        }, (h as any).doIntersect = function (this: any, a: any, r: any, i: any, f: any): any {
          var e: any = (a as any).x,
            g: any = (a as any).y,
            t: any = (r as any).x,
            s: any = (r as any).y,
            n: any = (i as any).x,
            c: any = (i as any).y,
            l: any = (f as any).x,
            T: any = (f as any).y,
            u: any = (((t as any) - (e as any) as any) * ((T as any) - (c as any) as any) as any) - (((l as any) - (n as any) as any) * ((s as any) - (g as any) as any) as any);
          if ((u as any) === (0 as any)) return !1;
          var d: any = ((((T as any) - (c as any) as any) * ((l as any) - (e as any) as any) as any) + (((n as any) - (l as any) as any) * ((T as any) - (g as any) as any) as any) as any) / (u as any),
            L: any = ((((g as any) - (s as any) as any) * ((l as any) - (e as any) as any) as any) + (((t as any) - (e as any) as any) * ((T as any) - (g as any) as any) as any) as any) / (u as any);
          return (0 as any) < (d as any) && (d as any) < (1 as any) && (0 as any) < (L as any) && (L as any) < (1 as any);
        }, (h as any).findCircleLineIntersections = function (this: any, a: any, r: any, i: any, f: any, e: any, g: any, t: any): any {
          var s: any = (((i as any) - (a as any) as any) * ((i as any) - (a as any) as any) as any) + (((f as any) - (r as any) as any) * ((f as any) - (r as any) as any) as any),
            n: any = (2 as any) * ((((a as any) - (e as any) as any) * ((i as any) - (a as any) as any) as any) + (((r as any) - (g as any) as any) * ((f as any) - (r as any) as any) as any) as any),
            c: any = ((((a as any) - (e as any) as any) * ((a as any) - (e as any) as any) as any) + (((r as any) - (g as any) as any) * ((r as any) - (g as any) as any) as any) as any) - ((t as any) * (t as any) as any),
            l: any = ((n as any) * (n as any) as any) - (((4 as any) * (s as any) as any) * (c as any) as any);
          if ((l as any) >= (0 as any)) {
            var T: any = ((-n as any) + (((Math as any).sqrt as any)(((n as any) * (n as any) as any) - (((4 as any) * (s as any) as any) * (c as any) as any)) as any) as any) / ((2 as any) * (s as any) as any),
              u: any = ((-n as any) - (((Math as any).sqrt as any)(((n as any) * (n as any) as any) - (((4 as any) * (s as any) as any) * (c as any) as any)) as any) as any) / ((2 as any) * (s as any) as any),
              d: any = null;
            return (T as any) >= (0 as any) && (T as any) <= (1 as any) ? [T] : (u as any) >= (0 as any) && (u as any) <= (1 as any) ? [u] : d;
          } else return null;
        }, (h as any).HALF_PI = (.5 as any) * ((Math as any).PI as any), (h as any).ONE_AND_HALF_PI = (1.5 as any) * ((Math as any).PI as any), (h as any).TWO_PI = (2 as any) * ((Math as any).PI as any), (h as any).THREE_PI = (3 as any) * ((Math as any).PI as any), (C as any).exports = h;
      }, function (this: any, C: any, R: any, N: any): any {
        function v(this: any): any {}
        (v as any).sign = function (this: any, h: any): any {
          return (h as any) > (0 as any) ? 1 : (h as any) < (0 as any) ? -1 : 0;
        }, (v as any).floor = function (this: any, h: any): any {
          return (h as any) < (0 as any) ? ((Math as any).ceil as any)(h) : ((Math as any).floor as any)(h);
        }, (v as any).ceil = function (this: any, h: any): any {
          return (h as any) < (0 as any) ? ((Math as any).floor as any)(h) : ((Math as any).ceil as any)(h);
        }, (C as any).exports = v;
      }, function (this: any, C: any, R: any, N: any): any {
        function v(this: any): any {}
        (v as any).MAX_VALUE = 2147483647, (v as any).MIN_VALUE = -2147483648, (C as any).exports = v;
      }, function (this: any, C: any, R: any, N: any): any {
        var v: any = (function (this: any): any {
          function e(this: any, g: any, t: any): any {
            for (var s: any = 0; (s as any) < ((t as any).length as any); s++) {
              var n: any = (t as any)[s];
              (n as any).enumerable = (n as any).enumerable || !1, (n as any).configurable = !0, "value" in n && ((n as any).writable = !0), ((Object as any).defineProperty as any)(g, (n as any).key, n);
            }
          }
          return function (this: any, g: any, t: any, s: any): any {
            return t && (e as any)((g as any).prototype, t), s && (e as any)(g, s), g;
          };
        } as any)();
        function h(this: any, e: any, g: any): any {
          if (!(e instanceof g)) throw new (TypeError as any)("Cannot call a class as a function");
        }
        var a: any = function (this: any, g: any): any {
            return {
              value: g,
              next: null,
              prev: null
            };
          },
          r: any = function (this: any, g: any, t: any, s: any, n: any): any {
            return (g as any) !== (null as any) ? (g as any).next = t : (n as any).head = t, (s as any) !== (null as any) ? (s as any).prev = t : (n as any).tail = t, (t as any).prev = g, (t as any).next = s, (n as any).length++, t;
          },
          i: any = function (this: any, g: any, t: any): any {
            var s: any = (g as any).prev,
              n: any = (g as any).next;
            return (s as any) !== (null as any) ? (s as any).next = n : (t as any).head = n, (n as any) !== (null as any) ? (n as any).prev = s : (t as any).tail = s, (g as any).prev = (g as any).next = null, (t as any).length--, g;
          },
          f: any = (function (this: any): any {
            function e(this: any, g: any): any {
              var t: any = this;
              (h as any)(this, e), (this as any).length = 0, (this as any).head = null, (this as any).tail = null, g?.forEach(function (this: any, s: any): any {
                return ((t as any).push as any)(s);
              });
            }
            return (v as any)(e, [{
              key: "size",
              value: function (this: any): any {
                return (this as any).length;
              }
            }, {
              key: "insertBefore",
              value: function (this: any, t: any, s: any): any {
                return (r as any)((s as any).prev, (a as any)(t), s, this);
              }
            }, {
              key: "insertAfter",
              value: function (this: any, t: any, s: any): any {
                return (r as any)(s, (a as any)(t), (s as any).next, this);
              }
            }, {
              key: "insertNodeBefore",
              value: function (this: any, t: any, s: any): any {
                return (r as any)((s as any).prev, t, s, this);
              }
            }, {
              key: "insertNodeAfter",
              value: function (this: any, t: any, s: any): any {
                return (r as any)(s, t, (s as any).next, this);
              }
            }, {
              key: "push",
              value: function (this: any, t: any): any {
                return (r as any)((this as any).tail, (a as any)(t), null, this);
              }
            }, {
              key: "unshift",
              value: function (this: any, t: any): any {
                return (r as any)(null, (a as any)(t), (this as any).head, this);
              }
            }, {
              key: "remove",
              value: function (this: any, t: any): any {
                return (i as any)(t, this);
              }
            }, {
              key: "pop",
              value: function (this: any): any {
                return ((i as any)((this as any).tail, this) as any).value;
              }
            }, {
              key: "popNode",
              value: function (this: any): any {
                return (i as any)((this as any).tail, this);
              }
            }, {
              key: "shift",
              value: function (this: any): any {
                return ((i as any)((this as any).head, this) as any).value;
              }
            }, {
              key: "shiftNode",
              value: function (this: any): any {
                return (i as any)((this as any).head, this);
              }
            }, {
              key: "get_object_at",
              value: function (this: any, t: any): any {
                if ((t as any) <= (((this as any).length as any)() as any)) {
                  for (var s: any = 1, n: any = (this as any).head; (s as any) < (t as any);) n = (n as any).next, s++;
                  return (n as any).value;
                }
              }
            }, {
              key: "set_object_at",
              value: function (this: any, t: any, s: any): any {
                if ((t as any) <= (((this as any).length as any)() as any)) {
                  for (var n: any = 1, c: any = (this as any).head; (n as any) < (t as any);) c = (c as any).next, n++;
                  (c as any).value = s;
                }
              }
            }]), e;
          } as any)();
        (C as any).exports = f;
      }, function (this: any, C: any, R: any, N: any): any {
        function v(this: any, h: any, a: any, r: any): any {
          (this as any).x = null, (this as any).y = null, (h as any) == (null as any) && (a as any) == (null as any) && (r as any) == (null as any) ? ((this as any).x = 0, (this as any).y = 0) : (typeof h as any) == ("number" as any) && (typeof a as any) == ("number" as any) && (r as any) == (null as any) ? ((this as any).x = h, (this as any).y = a) : (((h as any).constructor as any).name as any) == ("Point" as any) && (a as any) == (null as any) && (r as any) == (null as any) && (r = h, (this as any).x = (r as any).x, (this as any).y = (r as any).y);
        }
        ((v as any).prototype as any).getX = function (this: any): any {
          return (this as any).x;
        }, ((v as any).prototype as any).getY = function (this: any): any {
          return (this as any).y;
        }, ((v as any).prototype as any).getLocation = function (this: any): any {
          return new (v as any)((this as any).x, (this as any).y);
        }, ((v as any).prototype as any).setLocation = function (this: any, h: any, a: any, r: any): any {
          (((h as any).constructor as any).name as any) == ("Point" as any) && (a as any) == (null as any) && (r as any) == (null as any) ? (r = h, ((this as any).setLocation as any)((r as any).x, (r as any).y)) : (typeof h as any) == ("number" as any) && (typeof a as any) == ("number" as any) && (r as any) == (null as any) && (((parseInt as any)(h) as any) == (h as any) && ((parseInt as any)(a) as any) == (a as any) ? ((this as any).move as any)(h, a) : ((this as any).x = ((Math as any).floor as any)((h as any) + (.5 as any)), (this as any).y = ((Math as any).floor as any)((a as any) + (.5 as any))));
        }, ((v as any).prototype as any).move = function (this: any, h: any, a: any): any {
          (this as any).x = h, (this as any).y = a;
        }, ((v as any).prototype as any).translate = function (this: any, h: any, a: any): any {
          (this as any).x += h, (this as any).y += a;
        }, ((v as any).prototype as any).equals = function (this: any, h: any): any {
          if ((((h as any).constructor as any).name as any) == ("Point" as any)) {
            var a: any = h;
            return ((this as any).x as any) == ((a as any).x as any) && ((this as any).y as any) == ((a as any).y as any);
          }
          return (this as any) == (h as any);
        }, ((v as any).prototype as any).toString = function (this: any): any {
          return (((((((new (v as any)() as any).constructor as any).name as any) + ("[x=" as any) as any) + ((this as any).x as any) as any) + (",y=" as any) as any) + ((this as any).y as any) as any) + ("]" as any);
        }, (C as any).exports = v;
      }, function (this: any, C: any, R: any, N: any): any {
        function v(this: any, h: any, a: any, r: any, i: any): any {
          (this as any).x = 0, (this as any).y = 0, (this as any).width = 0, (this as any).height = 0, (h as any) != (null as any) && (a as any) != (null as any) && (r as any) != (null as any) && (i as any) != (null as any) && ((this as any).x = h, (this as any).y = a, (this as any).width = r, (this as any).height = i);
        }
        ((v as any).prototype as any).getX = function (this: any): any {
          return (this as any).x;
        }, ((v as any).prototype as any).setX = function (this: any, h: any): any {
          (this as any).x = h;
        }, ((v as any).prototype as any).getY = function (this: any): any {
          return (this as any).y;
        }, ((v as any).prototype as any).setY = function (this: any, h: any): any {
          (this as any).y = h;
        }, ((v as any).prototype as any).getWidth = function (this: any): any {
          return (this as any).width;
        }, ((v as any).prototype as any).setWidth = function (this: any, h: any): any {
          (this as any).width = h;
        }, ((v as any).prototype as any).getHeight = function (this: any): any {
          return (this as any).height;
        }, ((v as any).prototype as any).setHeight = function (this: any, h: any): any {
          (this as any).height = h;
        }, ((v as any).prototype as any).getRight = function (this: any): any {
          return ((this as any).x as any) + ((this as any).width as any);
        }, ((v as any).prototype as any).getBottom = function (this: any): any {
          return ((this as any).y as any) + ((this as any).height as any);
        }, ((v as any).prototype as any).intersects = function (this: any, h: any): any {
          return !((((this as any).getRight as any)() as any) < ((h as any).x as any) || (((this as any).getBottom as any)() as any) < ((h as any).y as any) || (((h as any).getRight as any)() as any) < ((this as any).x as any) || (((h as any).getBottom as any)() as any) < ((this as any).y as any));
        }, ((v as any).prototype as any).getCenterX = function (this: any): any {
          return ((this as any).x as any) + (((this as any).width as any) / (2 as any) as any);
        }, ((v as any).prototype as any).getMinX = function (this: any): any {
          return ((this as any).getX as any)();
        }, ((v as any).prototype as any).getMaxX = function (this: any): any {
          return (((this as any).getX as any)() as any) + ((this as any).width as any);
        }, ((v as any).prototype as any).getCenterY = function (this: any): any {
          return ((this as any).y as any) + (((this as any).height as any) / (2 as any) as any);
        }, ((v as any).prototype as any).getMinY = function (this: any): any {
          return ((this as any).getY as any)();
        }, ((v as any).prototype as any).getMaxY = function (this: any): any {
          return (((this as any).getY as any)() as any) + ((this as any).height as any);
        }, ((v as any).prototype as any).getWidthHalf = function (this: any): any {
          return ((this as any).width as any) / (2 as any);
        }, ((v as any).prototype as any).getHeightHalf = function (this: any): any {
          return ((this as any).height as any) / (2 as any);
        }, (C as any).exports = v;
      }, function (this: any, C: any, R: any, N: any): any {
        var v: any = (typeof Symbol as any) == ("function" as any) && (typeof (Symbol as any).iterator as any) == ("symbol" as any) ? function (this: any, a: any): any {
          return typeof a;
        } : function (this: any, a: any): any {
          return a && (typeof Symbol as any) == ("function" as any) && ((a as any).constructor as any) === (Symbol as any) && (a as any) !== ((Symbol as any).prototype as any) ? "symbol" : typeof a;
        };
        function h(this: any): any {}
        (h as any).lastID = 0, (h as any).createID = function (this: any, a: any): any {
          return ((h as any).isPrimitive as any)(a) ? a : (((a as any).uniqueID as any) != (null as any) || ((a as any).uniqueID = ((h as any).getString as any)(), (h as any).lastID++), (a as any).uniqueID);
        }, (h as any).getString = function (this: any, a: any): any {
          return (a as any) == (null as any) && (a = (h as any).lastID), ("Object#" as any) + (a as any);
        }, (h as any).isPrimitive = function (this: any, a: any): any {
          var r: any = (typeof a as any) > ("u" as any) ? "undefined" : (v as any)(a);
          return (a as any) == (null as any) || (r as any) != ("object" as any) && (r as any) != ("function" as any);
        }, (C as any).exports = h;
      }, function (this: any, C: any, R: any, N: any): any {
        function v(this: any, n: any): any {
          if (((Array as any).isArray as any)(n)) {
            for (var c: any = 0, l: any = (Array as any)((n as any).length); (c as any) < ((n as any).length as any); c++) (l as any)[c] = (n as any)[c];
            return l;
          } else return ((Array as any).from as any)(n);
        }
        var h: any = (N as any)(0),
          a: any = (N as any)(7),
          r: any = (N as any)(3),
          i: any = (N as any)(1),
          f: any = (N as any)(6),
          e: any = (N as any)(5),
          g: any = (N as any)(17),
          t: any = (N as any)(29);
        function s(this: any, n: any): any {
          ((t as any).call as any)(this), (this as any).layoutQuality = (h as any).QUALITY, (this as any).createBendsAsNeeded = (h as any).DEFAULT_CREATE_BENDS_AS_NEEDED, (this as any).incremental = (h as any).DEFAULT_INCREMENTAL, (this as any).animationOnLayout = (h as any).DEFAULT_ANIMATION_ON_LAYOUT, (this as any).animationDuringLayout = (h as any).DEFAULT_ANIMATION_DURING_LAYOUT, (this as any).animationPeriod = (h as any).DEFAULT_ANIMATION_PERIOD, (this as any).uniformLeafNodeSizes = (h as any).DEFAULT_UNIFORM_LEAF_NODE_SIZES, (this as any).edgeToDummyNodes = new (Map as any)(), (this as any).graphManager = new (a as any)(this), (this as any).isLayoutFinished = !1, (this as any).isSubLayout = !1, (this as any).isRemoteUse = !1, (n as any) != (null as any) && ((this as any).isRemoteUse = n);
        }
        (s as any).RANDOM_SEED = 1, (s as any).prototype = ((Object as any).create as any)((t as any).prototype), ((s as any).prototype as any).getGraphManager = function (this: any): any {
          return (this as any).graphManager;
        }, ((s as any).prototype as any).getAllNodes = function (this: any): any {
          return (((this as any).graphManager as any).getAllNodes as any)();
        }, ((s as any).prototype as any).getAllEdges = function (this: any): any {
          return (((this as any).graphManager as any).getAllEdges as any)();
        }, ((s as any).prototype as any).getAllNodesToApplyGravitation = function (this: any): any {
          return (((this as any).graphManager as any).getAllNodesToApplyGravitation as any)();
        }, ((s as any).prototype as any).newGraphManager = function (this: any): any {
          var n: any = new (a as any)(this);
          return (this as any).graphManager = n, n;
        }, ((s as any).prototype as any).newGraph = function (this: any, n: any): any {
          return new (f as any)(null, (this as any).graphManager, n);
        }, ((s as any).prototype as any).newNode = function (this: any, n: any): any {
          return new (r as any)((this as any).graphManager, n);
        }, ((s as any).prototype as any).newEdge = function (this: any, n: any): any {
          return new (i as any)(null, null, n);
        }, ((s as any).prototype as any).checkLayoutSuccess = function (this: any): any {
          return ((((this as any).graphManager as any).getRoot as any)() as any) == (null as any) || (((((((this as any).graphManager as any).getRoot as any)() as any).getNodes as any)() as any).length as any) == (0 as any) || (((this as any).graphManager as any).includesInvalidEdge as any)();
        }, ((s as any).prototype as any).runLayout = function (this: any): any {
          (this as any).isLayoutFinished = !1, (this as any).tilingPreLayout && ((this as any).tilingPreLayout as any)(), ((this as any).initParameters as any)();
          var n: any;
          return ((this as any).checkLayoutSuccess as any)() ? n = !1 : n = ((this as any).layout as any)(), ((h as any).ANIMATE as any) === ("during" as any) ? !1 : (n && ((this as any).isSubLayout || ((this as any).doPostLayout as any)()), (this as any).tilingPostLayout && ((this as any).tilingPostLayout as any)(), (this as any).isLayoutFinished = !0, n);
        }, ((s as any).prototype as any).doPostLayout = function (this: any): any {
          (this as any).incremental || ((this as any).transform as any)(), ((this as any).update as any)();
        }, ((s as any).prototype as any).update2 = function (this: any): any {
          if ((this as any).createBendsAsNeeded && (((this as any).createBendpointsFromDummyNodes as any)(), (((this as any).graphManager as any).resetAllEdges as any)()), !(this as any).isRemoteUse) {
            for (var n: any = (((this as any).graphManager as any).getAllEdges as any)(), c: any = 0; (c as any) < ((n as any).length as any); c++) (n as any)[c];
            for (var l: any = (((((this as any).graphManager as any).getRoot as any)() as any).getNodes as any)(), c: any = 0; (c as any) < ((l as any).length as any); c++) (l as any)[c];
            ((this as any).update as any)((((this as any).graphManager as any).getRoot as any)());
          }
        }, ((s as any).prototype as any).update = function (this: any, n: any): any {
          if ((n as any) == (null as any)) ((this as any).update2 as any)();else if (n instanceof r) {
            var c: any = n;
            if ((((c as any).getChild as any)() as any) != (null as any)) for (var l: any = ((((c as any).getChild as any)() as any).getNodes as any)(), T: any = 0; (T as any) < ((l as any).length as any); T++) (update as any)((l as any)[T]);
            if (((c as any).vGraphObject as any) != (null as any)) {
              var u: any = (c as any).vGraphObject;
              ((u as any).update as any)(c);
            }
          } else if (n instanceof i) {
            var d: any = n;
            if (((d as any).vGraphObject as any) != (null as any)) {
              var L: any = (d as any).vGraphObject;
              ((L as any).update as any)(d);
            }
          } else if (n instanceof f) {
            var b: any = n;
            if (((b as any).vGraphObject as any) != (null as any)) {
              var w: any = (b as any).vGraphObject;
              ((w as any).update as any)(b);
            }
          }
        }, ((s as any).prototype as any).initParameters = function (this: any): any {
          (this as any).isSubLayout || ((this as any).layoutQuality = (h as any).QUALITY, (this as any).animationDuringLayout = (h as any).DEFAULT_ANIMATION_DURING_LAYOUT, (this as any).animationPeriod = (h as any).DEFAULT_ANIMATION_PERIOD, (this as any).animationOnLayout = (h as any).DEFAULT_ANIMATION_ON_LAYOUT, (this as any).incremental = (h as any).DEFAULT_INCREMENTAL, (this as any).createBendsAsNeeded = (h as any).DEFAULT_CREATE_BENDS_AS_NEEDED, (this as any).uniformLeafNodeSizes = (h as any).DEFAULT_UNIFORM_LEAF_NODE_SIZES), (this as any).animationDuringLayout && ((this as any).animationOnLayout = !1);
        }, ((s as any).prototype as any).transform = function (this: any, n: any): any {
          if ((n as any) == (null as any)) ((this as any).transform as any)(new (e as any)(0, 0));else {
            var c: any = new (g as any)(),
              l: any = (((((this as any).graphManager as any).getRoot as any)() as any).updateLeftTop as any)();
            if ((l as any) != (null as any)) {
              ((c as any).setWorldOrgX as any)((n as any).x), ((c as any).setWorldOrgY as any)((n as any).y), ((c as any).setDeviceOrgX as any)((l as any).x), ((c as any).setDeviceOrgY as any)((l as any).y);
              for (var T: any = ((this as any).getAllNodes as any)(), u: any, d: any = 0; (d as any) < ((T as any).length as any); d++) u = (T as any)[d], ((u as any).transform as any)(c);
            }
          }
        }, ((s as any).prototype as any).positionNodesRandomly = function (this: any, n: any): any {
          if ((n as any) == (null as any)) ((this as any).positionNodesRandomly as any)(((((this as any).getGraphManager as any)() as any).getRoot as any)()), ((((((this as any).getGraphManager as any)() as any).getRoot as any)() as any).updateBounds as any)(!0);else for (var c: any, l: any, T: any = ((n as any).getNodes as any)(), u: any = 0; (u as any) < ((T as any).length as any); u++) c = (T as any)[u], l = ((c as any).getChild as any)(), (l as any) == (null as any) || ((((l as any).getNodes as any)() as any).length as any) == (0 as any) ? ((c as any).scatter as any)() : (((this as any).positionNodesRandomly as any)(l), ((c as any).updateBounds as any)());
        }, ((s as any).prototype as any).getFlatForest = function (this: any): any {
          for (var n: any = [], c: any = !0, l: any = (((((this as any).graphManager as any).getRoot as any)() as any).getNodes as any)(), T: any = !0, u: any = 0; (u as any) < ((l as any).length as any); u++) ((((l as any)[u] as any).getChild as any)() as any) != (null as any) && (T = !1);
          if (!T) return n;
          var d: any = new (Set as any)(),
            L: any = [],
            b: any = new (Map as any)(),
            w: any = [];
          for (w = ((w as any).concat as any)(l); ((w as any).length as any) > (0 as any) && c;) {
            for (((L as any).push as any)((w as any)[0]); ((L as any).length as any) > (0 as any) && c;) {
              var G: any = (L as any)[0];
              ((L as any).splice as any)(0, 1), ((d as any).add as any)(G);
              for (var B: any = ((G as any).getEdges as any)(), u: any = 0; (u as any) < ((B as any).length as any); u++) {
                var U: any = (((B as any)[u] as any).getOtherEnd as any)(G);
                if ((((b as any).get as any)(G) as any) != (U as any)) if (!((d as any).has as any)(U)) ((L as any).push as any)(U), ((b as any).set as any)(U, G);else {
                  c = !1;
                  break;
                }
              }
            }
            if (!c) n = [];else {
              var V: any = (([] as any).concat as any)((v as any)(d));
              ((n as any).push as any)(V);
              for (var u: any = 0; (u as any) < ((V as any).length as any); u++) {
                var M: any = (V as any)[u],
                  _: any = ((w as any).indexOf as any)(M);
                (_ as any) > (-1 as any) && ((w as any).splice as any)(_, 1);
              }
              d = new (Set as any)(), b = new (Map as any)();
            }
          }
          return n;
        }, ((s as any).prototype as any).createDummyNodesForBendpoints = function (this: any, n: any): any {
          for (var c: any = [], l: any = (n as any).source, T: any = (((this as any).graphManager as any).calcLowestCommonAncestor as any)((n as any).source, (n as any).target), u: any = 0; (u as any) < (((n as any).bendpoints as any).length as any); u++) {
            var d: any = ((this as any).newNode as any)(null);
            ((d as any).setRect as any)(new (Point as any)(0, 0), new (Dimension as any)(1, 1)), ((T as any).add as any)(d);
            var L: any = ((this as any).newEdge as any)(null);
            (((this as any).graphManager as any).add as any)(L, l, d), ((c as any).add as any)(d), l = d;
          }
          var L: any = ((this as any).newEdge as any)(null);
          return (((this as any).graphManager as any).add as any)(L, l, (n as any).target), (((this as any).edgeToDummyNodes as any).set as any)(n, c), ((n as any).isInterGraph as any)() ? (((this as any).graphManager as any).remove as any)(n) : ((T as any).remove as any)(n), c;
        }, ((s as any).prototype as any).createBendpointsFromDummyNodes = function (this: any): any {
          var n: any = [];
          n = ((n as any).concat as any)((((this as any).graphManager as any).getAllEdges as any)()), n = (((([] as any).concat as any)((v as any)((((this as any).edgeToDummyNodes as any).keys as any)())) as any).concat as any)(n);
          for (var c: any = 0; (c as any) < ((n as any).length as any); c++) {
            var l: any = (n as any)[c];
            if ((((l as any).bendpoints as any).length as any) > (0 as any)) {
              for (var T: any = (((this as any).edgeToDummyNodes as any).get as any)(l), u: any = 0; (u as any) < ((T as any).length as any); u++) {
                var d: any = (T as any)[u],
                  L: any = new (e as any)(((d as any).getCenterX as any)(), ((d as any).getCenterY as any)()),
                  b: any = (((l as any).bendpoints as any).get as any)(u);
                (b as any).x = (L as any).x, (b as any).y = (L as any).y, ((((d as any).getOwner as any)() as any).remove as any)(d);
              }
              (((this as any).graphManager as any).add as any)(l, (l as any).source, (l as any).target);
            }
          }
        }, (s as any).transform = function (this: any, n: any, c: any, l: any, T: any): any {
          if ((l as any) != (null as any) && (T as any) != (null as any)) {
            var u: any = c;
            if ((n as any) <= (50 as any)) {
              var d: any = (c as any) / (l as any);
              u -= (((c as any) - (d as any) as any) / (50 as any) as any) * ((50 as any) - (n as any) as any);
            } else {
              var L: any = (c as any) * (T as any);
              u += (((L as any) - (c as any) as any) / (50 as any) as any) * ((n as any) - (50 as any) as any);
            }
            return u;
          } else {
            var b: any, w: any;
            return (n as any) <= (50 as any) ? (b = ((9 as any) * (c as any) as any) / (500 as any), w = (c as any) / (10 as any)) : (b = ((9 as any) * (c as any) as any) / (50 as any), w = (-8 as any) * (c as any)), ((b as any) * (n as any) as any) + (w as any);
          }
        }, (s as any).findCenterOfTree = function (this: any, n: any): any {
          var c: any = [];
          c = ((c as any).concat as any)(n);
          var l: any = [],
            T: any = new (Map as any)(),
            u: any = !1,
            d: any = null;
          (((c as any).length as any) == (1 as any) || ((c as any).length as any) == (2 as any)) && (u = !0, d = (c as any)[0]);
          for (var L: any = 0; (L as any) < ((c as any).length as any); L++) {
            var b: any = (c as any)[L],
              w: any = (((b as any).getNeighborsList as any)() as any).size;
            ((T as any).set as any)(b, (((b as any).getNeighborsList as any)() as any).size), (w as any) == (1 as any) && ((l as any).push as any)(b);
          }
          var G: any = [];
          for (G = ((G as any).concat as any)(l); !u;) {
            var B: any = [];
            B = ((B as any).concat as any)(G), G = [];
            for (var L: any = 0; (L as any) < ((c as any).length as any); L++) {
              var b: any = (c as any)[L],
                U: any = ((c as any).indexOf as any)(b);
              (U as any) >= (0 as any) && ((c as any).splice as any)(U, 1);
              var V: any = ((b as any).getNeighborsList as any)();
              ((V as any).forEach as any)(function (this: any, o: any): any {
                if ((((l as any).indexOf as any)(o) as any) < (0 as any)) {
                  var E: any = ((T as any).get as any)(o),
                    p: any = (E as any) - (1 as any);
                  (p as any) == (1 as any) && ((G as any).push as any)(o), ((T as any).set as any)(o, p);
                }
              });
            }
            l = ((l as any).concat as any)(G), (((c as any).length as any) == (1 as any) || ((c as any).length as any) == (2 as any)) && (u = !0, d = (c as any)[0]);
          }
          return d;
        }, ((s as any).prototype as any).setGraphManager = function (this: any, n: any): any {
          (this as any).graphManager = n;
        }, (C as any).exports = s;
      }, function (this: any, C: any, R: any, N: any): any {
        function v(this: any): any {}
        (v as any).seed = 1, (v as any).x = 0, (v as any).nextDouble = function (this: any): any {
          return (v as any).x = (((Math as any).sin as any)((v as any).seed++) as any) * (1e4 as any), ((v as any).x as any) - (((Math as any).floor as any)((v as any).x) as any);
        }, (C as any).exports = v;
      }, function (this: any, C: any, R: any, N: any): any {
        var v: any = (N as any)(5);
        function h(this: any, a: any, r: any): any {
          (this as any).lworldOrgX = 0, (this as any).lworldOrgY = 0, (this as any).ldeviceOrgX = 0, (this as any).ldeviceOrgY = 0, (this as any).lworldExtX = 1, (this as any).lworldExtY = 1, (this as any).ldeviceExtX = 1, (this as any).ldeviceExtY = 1;
        }
        ((h as any).prototype as any).getWorldOrgX = function (this: any): any {
          return (this as any).lworldOrgX;
        }, ((h as any).prototype as any).setWorldOrgX = function (this: any, a: any): any {
          (this as any).lworldOrgX = a;
        }, ((h as any).prototype as any).getWorldOrgY = function (this: any): any {
          return (this as any).lworldOrgY;
        }, ((h as any).prototype as any).setWorldOrgY = function (this: any, a: any): any {
          (this as any).lworldOrgY = a;
        }, ((h as any).prototype as any).getWorldExtX = function (this: any): any {
          return (this as any).lworldExtX;
        }, ((h as any).prototype as any).setWorldExtX = function (this: any, a: any): any {
          (this as any).lworldExtX = a;
        }, ((h as any).prototype as any).getWorldExtY = function (this: any): any {
          return (this as any).lworldExtY;
        }, ((h as any).prototype as any).setWorldExtY = function (this: any, a: any): any {
          (this as any).lworldExtY = a;
        }, ((h as any).prototype as any).getDeviceOrgX = function (this: any): any {
          return (this as any).ldeviceOrgX;
        }, ((h as any).prototype as any).setDeviceOrgX = function (this: any, a: any): any {
          (this as any).ldeviceOrgX = a;
        }, ((h as any).prototype as any).getDeviceOrgY = function (this: any): any {
          return (this as any).ldeviceOrgY;
        }, ((h as any).prototype as any).setDeviceOrgY = function (this: any, a: any): any {
          (this as any).ldeviceOrgY = a;
        }, ((h as any).prototype as any).getDeviceExtX = function (this: any): any {
          return (this as any).ldeviceExtX;
        }, ((h as any).prototype as any).setDeviceExtX = function (this: any, a: any): any {
          (this as any).ldeviceExtX = a;
        }, ((h as any).prototype as any).getDeviceExtY = function (this: any): any {
          return (this as any).ldeviceExtY;
        }, ((h as any).prototype as any).setDeviceExtY = function (this: any, a: any): any {
          (this as any).ldeviceExtY = a;
        }, ((h as any).prototype as any).transformX = function (this: any, a: any): any {
          var r: any = 0,
            i: any = (this as any).lworldExtX;
          return (i as any) != (0 as any) && (r = ((this as any).ldeviceOrgX as any) + ((((a as any) - ((this as any).lworldOrgX as any) as any) * ((this as any).ldeviceExtX as any) as any) / (i as any) as any)), r;
        }, ((h as any).prototype as any).transformY = function (this: any, a: any): any {
          var r: any = 0,
            i: any = (this as any).lworldExtY;
          return (i as any) != (0 as any) && (r = ((this as any).ldeviceOrgY as any) + ((((a as any) - ((this as any).lworldOrgY as any) as any) * ((this as any).ldeviceExtY as any) as any) / (i as any) as any)), r;
        }, ((h as any).prototype as any).inverseTransformX = function (this: any, a: any): any {
          var r: any = 0,
            i: any = (this as any).ldeviceExtX;
          return (i as any) != (0 as any) && (r = ((this as any).lworldOrgX as any) + ((((a as any) - ((this as any).ldeviceOrgX as any) as any) * ((this as any).lworldExtX as any) as any) / (i as any) as any)), r;
        }, ((h as any).prototype as any).inverseTransformY = function (this: any, a: any): any {
          var r: any = 0,
            i: any = (this as any).ldeviceExtY;
          return (i as any) != (0 as any) && (r = ((this as any).lworldOrgY as any) + ((((a as any) - ((this as any).ldeviceOrgY as any) as any) * ((this as any).lworldExtY as any) as any) / (i as any) as any)), r;
        }, ((h as any).prototype as any).inverseTransformPoint = function (this: any, a: any): any {
          var r: any = new (v as any)(((this as any).inverseTransformX as any)((a as any).x), ((this as any).inverseTransformY as any)((a as any).y));
          return r;
        }, (C as any).exports = h;
      }, function (this: any, C: any, R: any, N: any): any {
        var g: any;
        function v(this: any, t: any): any {
          if (((Array as any).isArray as any)(t)) {
            for (var s: any = 0, n: any = (Array as any)((t as any).length); (s as any) < ((t as any).length as any); s++) (n as any)[s] = (t as any)[s];
            return n;
          } else return ((Array as any).from as any)(t);
        }
        var h: any = (N as any)(15),
          a: any = (N as any)(4),
          r: any = (N as any)(0),
          i: any = (N as any)(8),
          f: any = (N as any)(9);
        function e(this: any): any {
          ((h as any).call as any)(this), (this as any).useSmartIdealEdgeLengthCalculation = (a as any).DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION, (this as any).gravityConstant = (a as any).DEFAULT_GRAVITY_STRENGTH, (this as any).compoundGravityConstant = (a as any).DEFAULT_COMPOUND_GRAVITY_STRENGTH, (this as any).gravityRangeFactor = (a as any).DEFAULT_GRAVITY_RANGE_FACTOR, (this as any).compoundGravityRangeFactor = (a as any).DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR, (this as any).displacementThresholdPerNode = ((3 as any) * ((a as any).DEFAULT_EDGE_LENGTH as any) as any) / (100 as any), (this as any).coolingFactor = (a as any).DEFAULT_COOLING_FACTOR_INCREMENTAL, (this as any).initialCoolingFactor = (a as any).DEFAULT_COOLING_FACTOR_INCREMENTAL, (this as any).totalDisplacement = 0, (this as any).oldTotalDisplacement = 0, (this as any).maxIterations = (a as any).MAX_ITERATIONS;
        }
        (e as any).prototype = ((Object as any).create as any)((h as any).prototype);
        for (g in h) (e as any)[g] = (h as any)[g];
        ((e as any).prototype as any).initParameters = function (this: any): any {
          ((((h as any).prototype as any).initParameters as any).call as any)(this, arguments), (this as any).totalIterations = 0, (this as any).notAnimatedIterations = 0, (this as any).useFRGridVariant = (a as any).DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION, (this as any).grid = [];
        }, ((e as any).prototype as any).calcIdealEdgeLengths = function (this: any): any {
          for (var t: any, s: any, n: any, c: any, l: any, T: any, u: any, d: any = ((((this as any).getGraphManager as any)() as any).getAllEdges as any)(), L: any = 0; (L as any) < ((d as any).length as any); L++) t = (d as any)[L], s = (t as any).idealLength, (t as any).isInterGraph && (c = ((t as any).getSource as any)(), l = ((t as any).getTarget as any)(), T = ((((t as any).getSourceInLca as any)() as any).getEstimatedSize as any)(), u = ((((t as any).getTargetInLca as any)() as any).getEstimatedSize as any)(), (this as any).useSmartIdealEdgeLengthCalculation && ((t as any).idealLength += ((T as any) + (u as any) as any) - ((2 as any) * ((r as any).SIMPLE_NODE_SIZE as any) as any)), n = ((((t as any).getLca as any)() as any).getInclusionTreeDepth as any)(), (t as any).idealLength += ((s as any) * ((a as any).PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR as any) as any) * (((((c as any).getInclusionTreeDepth as any)() as any) + (((l as any).getInclusionTreeDepth as any)() as any) as any) - ((2 as any) * (n as any) as any) as any));
        }, ((e as any).prototype as any).initSpringEmbedder = function (this: any): any {
          var t: any = (((this as any).getAllNodes as any)() as any).length;
          (this as any).incremental ? ((t as any) > ((a as any).ADAPTATION_LOWER_NODE_LIMIT as any) && ((this as any).coolingFactor = ((Math as any).max as any)(((this as any).coolingFactor as any) * ((a as any).COOLING_ADAPTATION_FACTOR as any), ((this as any).coolingFactor as any) - (((((t as any) - ((a as any).ADAPTATION_LOWER_NODE_LIMIT as any) as any) / (((a as any).ADAPTATION_UPPER_NODE_LIMIT as any) - ((a as any).ADAPTATION_LOWER_NODE_LIMIT as any) as any) as any) * ((this as any).coolingFactor as any) as any) * ((1 as any) - ((a as any).COOLING_ADAPTATION_FACTOR as any) as any) as any))), (this as any).maxNodeDisplacement = (a as any).MAX_NODE_DISPLACEMENT_INCREMENTAL) : ((t as any) > ((a as any).ADAPTATION_LOWER_NODE_LIMIT as any) ? (this as any).coolingFactor = ((Math as any).max as any)((a as any).COOLING_ADAPTATION_FACTOR, (1 as any) - ((((t as any) - ((a as any).ADAPTATION_LOWER_NODE_LIMIT as any) as any) / (((a as any).ADAPTATION_UPPER_NODE_LIMIT as any) - ((a as any).ADAPTATION_LOWER_NODE_LIMIT as any) as any) as any) * ((1 as any) - ((a as any).COOLING_ADAPTATION_FACTOR as any) as any) as any)) : (this as any).coolingFactor = 1, (this as any).initialCoolingFactor = (this as any).coolingFactor, (this as any).maxNodeDisplacement = (a as any).MAX_NODE_DISPLACEMENT), (this as any).maxIterations = ((Math as any).max as any)(((((this as any).getAllNodes as any)() as any).length as any) * (5 as any), (this as any).maxIterations), (this as any).displacementThresholdPerNode = ((3 as any) * ((a as any).DEFAULT_EDGE_LENGTH as any) as any) / (100 as any), (this as any).totalDisplacementThreshold = ((this as any).displacementThresholdPerNode as any) * ((((this as any).getAllNodes as any)() as any).length as any), (this as any).repulsionRange = ((this as any).calcRepulsionRange as any)();
        }, ((e as any).prototype as any).calcSpringForces = function (this: any): any {
          for (var t: any = ((this as any).getAllEdges as any)(), s: any, n: any = 0; (n as any) < ((t as any).length as any); n++) s = (t as any)[n], ((this as any).calcSpringForce as any)(s, (s as any).idealLength);
        }, ((e as any).prototype as any).calcRepulsionForces = function (this: any): any {
          var t: any = ((arguments as any).length as any) > (0 as any) && ((arguments as any)[0] as any) !== (void 0 as any) ? (arguments as any)[0] : !0,
            s: any = ((arguments as any).length as any) > (1 as any) && ((arguments as any)[1] as any) !== (void 0 as any) ? (arguments as any)[1] : !1,
            n: any,
            c: any,
            l: any,
            T: any,
            u: any = ((this as any).getAllNodes as any)(),
            d: any;
          if ((this as any).useFRGridVariant) for ((((this as any).totalIterations as any) % ((a as any).GRID_CALCULATION_CHECK_PERIOD as any) as any) == (1 as any) && t && ((this as any).updateGrid as any)(), d = new (Set as any)(), n = 0; (n as any) < ((u as any).length as any); n++) l = (u as any)[n], ((this as any).calculateRepulsionForceOfANode as any)(l, d, t, s), ((d as any).add as any)(l);else for (n = 0; (n as any) < ((u as any).length as any); n++) for (l = (u as any)[n], c = (n as any) + (1 as any); (c as any) < ((u as any).length as any); c++) T = (u as any)[c], (((l as any).getOwner as any)() as any) == (((T as any).getOwner as any)() as any) && ((this as any).calcRepulsionForce as any)(l, T);
        }, ((e as any).prototype as any).calcGravitationalForces = function (this: any): any {
          for (var t: any, s: any = ((this as any).getAllNodesToApplyGravitation as any)(), n: any = 0; (n as any) < ((s as any).length as any); n++) t = (s as any)[n], ((this as any).calcGravitationalForce as any)(t);
        }, ((e as any).prototype as any).moveNodes = function (this: any): any {
          for (var t: any = ((this as any).getAllNodes as any)(), s: any, n: any = 0; (n as any) < ((t as any).length as any); n++) s = (t as any)[n], ((s as any).move as any)();
        }, ((e as any).prototype as any).calcSpringForce = function (this: any, t: any, s: any): any {
          var n: any = ((t as any).getSource as any)(),
            c: any = ((t as any).getTarget as any)(),
            l: any,
            T: any,
            u: any,
            d: any;
          if ((this as any).uniformLeafNodeSizes && (((n as any).getChild as any)() as any) == (null as any) && (((c as any).getChild as any)() as any) == (null as any)) ((t as any).updateLengthSimple as any)();else if (((t as any).updateLength as any)(), (t as any).isOverlapingSourceAndTarget) return;
          l = ((t as any).getLength as any)(), (l as any) != (0 as any) && (T = ((t as any).edgeElasticity as any) * ((l as any) - (s as any) as any), u = (T as any) * (((t as any).lengthX as any) / (l as any) as any), d = (T as any) * (((t as any).lengthY as any) / (l as any) as any), (n as any).springForceX += u, (n as any).springForceY += d, (c as any).springForceX -= u, (c as any).springForceY -= d);
        }, ((e as any).prototype as any).calcRepulsionForce = function (this: any, t: any, s: any): any {
          var n: any = ((t as any).getRect as any)(),
            c: any = ((s as any).getRect as any)(),
            l: any = new (Array as any)(2),
            T: any = new (Array as any)(4),
            u: any,
            d: any,
            L: any,
            b: any,
            w: any,
            G: any,
            B: any;
          if (((n as any).intersects as any)(c)) {
            ((i as any).calcSeparationAmount as any)(n, c, l, ((a as any).DEFAULT_EDGE_LENGTH as any) / (2 as any)), G = (2 as any) * ((l as any)[0] as any), B = (2 as any) * ((l as any)[1] as any);
            var U: any = (((t as any).noOfChildren as any) * ((s as any).noOfChildren as any) as any) / (((t as any).noOfChildren as any) + ((s as any).noOfChildren as any) as any);
            (t as any).repulsionForceX -= (U as any) * (G as any), (t as any).repulsionForceY -= (U as any) * (B as any), (s as any).repulsionForceX += (U as any) * (G as any), (s as any).repulsionForceY += (U as any) * (B as any);
          } else (this as any).uniformLeafNodeSizes && (((t as any).getChild as any)() as any) == (null as any) && (((s as any).getChild as any)() as any) == (null as any) ? (u = (((c as any).getCenterX as any)() as any) - (((n as any).getCenterX as any)() as any), d = (((c as any).getCenterY as any)() as any) - (((n as any).getCenterY as any)() as any)) : (((i as any).getIntersection as any)(n, c, T), u = ((T as any)[2] as any) - ((T as any)[0] as any), d = ((T as any)[3] as any) - ((T as any)[1] as any)), (((Math as any).abs as any)(u) as any) < ((a as any).MIN_REPULSION_DIST as any) && (u = (((f as any).sign as any)(u) as any) * ((a as any).MIN_REPULSION_DIST as any)), (((Math as any).abs as any)(d) as any) < ((a as any).MIN_REPULSION_DIST as any) && (d = (((f as any).sign as any)(d) as any) * ((a as any).MIN_REPULSION_DIST as any)), L = ((u as any) * (u as any) as any) + ((d as any) * (d as any) as any), b = ((Math as any).sqrt as any)(L), w = ((((((t as any).nodeRepulsion as any) / (2 as any) as any) + (((s as any).nodeRepulsion as any) / (2 as any) as any) as any) * ((t as any).noOfChildren as any) as any) * ((s as any).noOfChildren as any) as any) / (L as any), G = ((w as any) * (u as any) as any) / (b as any), B = ((w as any) * (d as any) as any) / (b as any), (t as any).repulsionForceX -= G, (t as any).repulsionForceY -= B, (s as any).repulsionForceX += G, (s as any).repulsionForceY += B;
        }, ((e as any).prototype as any).calcGravitationalForce = function (this: any, t: any): any {
          var s: any, n: any, c: any, l: any, T: any, u: any, d: any, L: any;
          s = ((t as any).getOwner as any)(), n = ((((s as any).getRight as any)() as any) + (((s as any).getLeft as any)() as any) as any) / (2 as any), c = ((((s as any).getTop as any)() as any) + (((s as any).getBottom as any)() as any) as any) / (2 as any), l = (((t as any).getCenterX as any)() as any) - (n as any), T = (((t as any).getCenterY as any)() as any) - (c as any), u = (((Math as any).abs as any)(l) as any) + ((((t as any).getWidth as any)() as any) / (2 as any) as any), d = (((Math as any).abs as any)(T) as any) + ((((t as any).getHeight as any)() as any) / (2 as any) as any), (((t as any).getOwner as any)() as any) == ((((this as any).graphManager as any).getRoot as any)() as any) ? (L = (((s as any).getEstimatedSize as any)() as any) * ((this as any).gravityRangeFactor as any), ((u as any) > (L as any) || (d as any) > (L as any)) && ((t as any).gravitationForceX = (-(this as any).gravityConstant as any) * (l as any), (t as any).gravitationForceY = (-(this as any).gravityConstant as any) * (T as any))) : (L = (((s as any).getEstimatedSize as any)() as any) * ((this as any).compoundGravityRangeFactor as any), ((u as any) > (L as any) || (d as any) > (L as any)) && ((t as any).gravitationForceX = ((-(this as any).gravityConstant as any) * (l as any) as any) * ((this as any).compoundGravityConstant as any), (t as any).gravitationForceY = ((-(this as any).gravityConstant as any) * (T as any) as any) * ((this as any).compoundGravityConstant as any)));
        }, ((e as any).prototype as any).isConverged = function (this: any): any {
          var t: any,
            s: any = !1;
          return ((this as any).totalIterations as any) > (((this as any).maxIterations as any) / (3 as any) as any) && (s = (((Math as any).abs as any)(((this as any).totalDisplacement as any) - ((this as any).oldTotalDisplacement as any)) as any) < (2 as any)), t = ((this as any).totalDisplacement as any) < ((this as any).totalDisplacementThreshold as any), (this as any).oldTotalDisplacement = (this as any).totalDisplacement, t || s;
        }, ((e as any).prototype as any).animate = function (this: any): any {
          (this as any).animationDuringLayout && !(this as any).isSubLayout && (((this as any).notAnimatedIterations as any) == ((this as any).animationPeriod as any) ? (((this as any).update as any)(), (this as any).notAnimatedIterations = 0) : (this as any).notAnimatedIterations++);
        }, ((e as any).prototype as any).calcNoOfChildrenForAllNodes = function (this: any): any {
          for (var t: any, s: any = (((this as any).graphManager as any).getAllNodes as any)(), n: any = 0; (n as any) < ((s as any).length as any); n++) t = (s as any)[n], (t as any).noOfChildren = ((t as any).getNoOfChildren as any)();
        }, ((e as any).prototype as any).calcGrid = function (this: any, t: any): any {
          var s: any = 0,
            n: any = 0;
          s = (parseInt as any)(((Math as any).ceil as any)(((((t as any).getRight as any)() as any) - (((t as any).getLeft as any)() as any) as any) / ((this as any).repulsionRange as any))), n = (parseInt as any)(((Math as any).ceil as any)(((((t as any).getBottom as any)() as any) - (((t as any).getTop as any)() as any) as any) / ((this as any).repulsionRange as any)));
          for (var c: any = new (Array as any)(s), l: any = 0; (l as any) < (s as any); l++) (c as any)[l] = new (Array as any)(n);
          for (var l: any = 0; (l as any) < (s as any); l++) for (var T: any = 0; (T as any) < (n as any); T++) ((c as any)[l] as any)[T] = new (Array as any)();
          return c;
        }, ((e as any).prototype as any).addNodeToGrid = function (this: any, t: any, s: any, n: any): any {
          var c: any = 0,
            l: any = 0,
            T: any = 0,
            u: any = 0;
          c = (parseInt as any)(((Math as any).floor as any)((((((t as any).getRect as any)() as any).x as any) - (s as any) as any) / ((this as any).repulsionRange as any))), l = (parseInt as any)(((Math as any).floor as any)(((((((t as any).getRect as any)() as any).width as any) + ((((t as any).getRect as any)() as any).x as any) as any) - (s as any) as any) / ((this as any).repulsionRange as any))), T = (parseInt as any)(((Math as any).floor as any)((((((t as any).getRect as any)() as any).y as any) - (n as any) as any) / ((this as any).repulsionRange as any))), u = (parseInt as any)(((Math as any).floor as any)(((((((t as any).getRect as any)() as any).height as any) + ((((t as any).getRect as any)() as any).y as any) as any) - (n as any) as any) / ((this as any).repulsionRange as any)));
          for (var d: any = c; (d as any) <= (l as any); d++) for (var L: any = T; (L as any) <= (u as any); L++) (((((this as any).grid as any)[d] as any)[L] as any).push as any)(t), ((t as any).setGridCoordinates as any)(c, l, T, u);
        }, ((e as any).prototype as any).updateGrid = function (this: any): any {
          var t: any,
            s: any,
            n: any = ((this as any).getAllNodes as any)();
          for ((this as any).grid = ((this as any).calcGrid as any)((((this as any).graphManager as any).getRoot as any)()), t = 0; (t as any) < ((n as any).length as any); t++) s = (n as any)[t], ((this as any).addNodeToGrid as any)(s, (((((this as any).graphManager as any).getRoot as any)() as any).getLeft as any)(), (((((this as any).graphManager as any).getRoot as any)() as any).getTop as any)());
        }, ((e as any).prototype as any).calculateRepulsionForceOfANode = function (this: any, t: any, s: any, n: any, c: any): any {
          if ((((this as any).totalIterations as any) % ((a as any).GRID_CALCULATION_CHECK_PERIOD as any) as any) == (1 as any) && n || c) {
            var l: any = new (Set as any)();
            (t as any).surrounding = new (Array as any)();
            for (var T: any, u: any = (this as any).grid, d: any = ((t as any).startX as any) - (1 as any); (d as any) < (((t as any).finishX as any) + (2 as any) as any); d++) for (var L: any = ((t as any).startY as any) - (1 as any); (L as any) < (((t as any).finishY as any) + (2 as any) as any); L++) if (!((d as any) < (0 as any) || (L as any) < (0 as any) || (d as any) >= ((u as any).length as any) || (L as any) >= (((u as any)[0] as any).length as any))) {
              for (var b: any = 0; (b as any) < ((((u as any)[d] as any)[L] as any).length as any); b++) if (T = (((u as any)[d] as any)[L] as any)[b], !((((t as any).getOwner as any)() as any) != (((T as any).getOwner as any)() as any) || (t as any) == (T as any)) && !((s as any).has as any)(T) && !((l as any).has as any)(T)) {
                var w: any = (((Math as any).abs as any)((((t as any).getCenterX as any)() as any) - (((T as any).getCenterX as any)() as any)) as any) - (((((t as any).getWidth as any)() as any) / (2 as any) as any) + ((((T as any).getWidth as any)() as any) / (2 as any) as any) as any),
                  G: any = (((Math as any).abs as any)((((t as any).getCenterY as any)() as any) - (((T as any).getCenterY as any)() as any)) as any) - (((((t as any).getHeight as any)() as any) / (2 as any) as any) + ((((T as any).getHeight as any)() as any) / (2 as any) as any) as any);
                (w as any) <= ((this as any).repulsionRange as any) && (G as any) <= ((this as any).repulsionRange as any) && ((l as any).add as any)(T);
              }
            }
            (t as any).surrounding = (([] as any).concat as any)((v as any)(l));
          }
          for (d = 0; (d as any) < (((t as any).surrounding as any).length as any); d++) ((this as any).calcRepulsionForce as any)(t, ((t as any).surrounding as any)[d]);
        }, ((e as any).prototype as any).calcRepulsionRange = function (this: any): any {
          return 0;
        }, (C as any).exports = e;
      }, function (this: any, C: any, R: any, N: any): any {
        var r: any;
        var v: any = (N as any)(1),
          h: any = (N as any)(4);
        function a(this: any, i: any, f: any, e: any): any {
          ((v as any).call as any)(this, i, f, e), (this as any).idealLength = (h as any).DEFAULT_EDGE_LENGTH, (this as any).edgeElasticity = (h as any).DEFAULT_SPRING_STRENGTH;
        }
        (a as any).prototype = ((Object as any).create as any)((v as any).prototype);
        for (r in v) (a as any)[r] = (v as any)[r];
        (C as any).exports = a;
      }, function (this: any, C: any, R: any, N: any): any {
        var r: any;
        var v: any = (N as any)(3),
          h: any = (N as any)(4);
        function a(this: any, i: any, f: any, e: any, g: any): any {
          ((v as any).call as any)(this, i, f, e, g), (this as any).nodeRepulsion = (h as any).DEFAULT_REPULSION_STRENGTH, (this as any).springForceX = 0, (this as any).springForceY = 0, (this as any).repulsionForceX = 0, (this as any).repulsionForceY = 0, (this as any).gravitationForceX = 0, (this as any).gravitationForceY = 0, (this as any).displacementX = 0, (this as any).displacementY = 0, (this as any).startX = 0, (this as any).finishX = 0, (this as any).startY = 0, (this as any).finishY = 0, (this as any).surrounding = [];
        }
        (a as any).prototype = ((Object as any).create as any)((v as any).prototype);
        for (r in v) (a as any)[r] = (v as any)[r];
        ((a as any).prototype as any).setGridCoordinates = function (this: any, i: any, f: any, e: any, g: any): any {
          (this as any).startX = i, (this as any).finishX = f, (this as any).startY = e, (this as any).finishY = g;
        }, (C as any).exports = a;
      }, function (this: any, C: any, R: any, N: any): any {
        function v(this: any, h: any, a: any): any {
          (this as any).width = 0, (this as any).height = 0, (h as any) !== (null as any) && (a as any) !== (null as any) && ((this as any).height = a, (this as any).width = h);
        }
        ((v as any).prototype as any).getWidth = function (this: any): any {
          return (this as any).width;
        }, ((v as any).prototype as any).setWidth = function (this: any, h: any): any {
          (this as any).width = h;
        }, ((v as any).prototype as any).getHeight = function (this: any): any {
          return (this as any).height;
        }, ((v as any).prototype as any).setHeight = function (this: any, h: any): any {
          (this as any).height = h;
        }, (C as any).exports = v;
      }, function (this: any, C: any, R: any, N: any): any {
        var v: any = (N as any)(14);
        function h(this: any): any {
          (this as any).map = {}, (this as any).keys = [];
        }
        ((h as any).prototype as any).put = function (this: any, a: any, r: any): any {
          var i: any = ((v as any).createID as any)(a);
          ((this as any).contains as any)(i) || (((this as any).map as any)[i] = r, (((this as any).keys as any).push as any)(a));
        }, ((h as any).prototype as any).contains = function (this: any, a: any): any {
          return ((v as any).createID as any)(a), (((this as any).map as any)[a] as any) != (null as any);
        }, ((h as any).prototype as any).get = function (this: any, a: any): any {
          var r: any = ((v as any).createID as any)(a);
          return ((this as any).map as any)[r];
        }, ((h as any).prototype as any).keySet = function (this: any): any {
          return (this as any).keys;
        }, (C as any).exports = h;
      }, function (this: any, C: any, R: any, N: any): any {
        var v: any = (N as any)(14);
        function h(this: any): any {
          (this as any).set = {};
        }
        ((h as any).prototype as any).add = function (this: any, a: any): any {
          var r: any = ((v as any).createID as any)(a);
          ((this as any).contains as any)(r) || (((this as any).set as any)[r] = a);
        }, ((h as any).prototype as any).remove = function (this: any, a: any): any {
          delete ((this as any).set as any)[((v as any).createID as any)(a)];
        }, ((h as any).prototype as any).clear = function (this: any): any {
          (this as any).set = {};
        }, ((h as any).prototype as any).contains = function (this: any, a: any): any {
          return (((this as any).set as any)[((v as any).createID as any)(a)] as any) == (a as any);
        }, ((h as any).prototype as any).isEmpty = function (this: any): any {
          return (((this as any).size as any)() as any) === (0 as any);
        }, ((h as any).prototype as any).size = function (this: any): any {
          return (((Object as any).keys as any)((this as any).set) as any).length;
        }, ((h as any).prototype as any).addAllTo = function (this: any, a: any): any {
          for (var r: any = ((Object as any).keys as any)((this as any).set), i: any = (r as any).length, f: any = 0; (f as any) < (i as any); f++) ((a as any).push as any)(((this as any).set as any)[(r as any)[f]]);
        }, ((h as any).prototype as any).size = function (this: any): any {
          return (((Object as any).keys as any)((this as any).set) as any).length;
        }, ((h as any).prototype as any).addAll = function (this: any, a: any): any {
          for (var r: any = (a as any).length, i: any = 0; (i as any) < (r as any); i++) {
            var f: any = (a as any)[i];
            ((this as any).add as any)(f);
          }
        }, (C as any).exports = h;
      }, function (this: any, C: any, R: any, N: any): any {
        function v(this: any): any {}
        (v as any).multMat = function (this: any, h: any, a: any): any {
          for (var r: any = [], i: any = 0; (i as any) < ((h as any).length as any); i++) {
            (r as any)[i] = [];
            for (var f: any = 0; (f as any) < (((a as any)[0] as any).length as any); f++) {
              ((r as any)[i] as any)[f] = 0;
              for (var e: any = 0; (e as any) < (((h as any)[0] as any).length as any); e++) ((r as any)[i] as any)[f] += (((h as any)[i] as any)[e] as any) * (((a as any)[e] as any)[f] as any);
            }
          }
          return r;
        }, (v as any).transpose = function (this: any, h: any): any {
          for (var a: any = [], r: any = 0; (r as any) < (((h as any)[0] as any).length as any); r++) {
            (a as any)[r] = [];
            for (var i: any = 0; (i as any) < ((h as any).length as any); i++) ((a as any)[r] as any)[i] = ((h as any)[i] as any)[r];
          }
          return a;
        }, (v as any).multCons = function (this: any, h: any, a: any): any {
          for (var r: any = [], i: any = 0; (i as any) < ((h as any).length as any); i++) (r as any)[i] = ((h as any)[i] as any) * (a as any);
          return r;
        }, (v as any).minusOp = function (this: any, h: any, a: any): any {
          for (var r: any = [], i: any = 0; (i as any) < ((h as any).length as any); i++) (r as any)[i] = ((h as any)[i] as any) - ((a as any)[i] as any);
          return r;
        }, (v as any).dotProduct = function (this: any, h: any, a: any): any {
          for (var r: any = 0, i: any = 0; (i as any) < ((h as any).length as any); i++) r += ((h as any)[i] as any) * ((a as any)[i] as any);
          return r;
        }, (v as any).mag = function (this: any, h: any): any {
          return ((Math as any).sqrt as any)(((this as any).dotProduct as any)(h, h));
        }, (v as any).normalize = function (this: any, h: any): any {
          for (var a: any = [], r: any = ((this as any).mag as any)(h), i: any = 0; (i as any) < ((h as any).length as any); i++) (a as any)[i] = ((h as any)[i] as any) / (r as any);
          return a;
        }, (v as any).multGamma = function (this: any, h: any): any {
          for (var a: any = [], r: any = 0, i: any = 0; (i as any) < ((h as any).length as any); i++) r += (h as any)[i];
          r *= (-1 as any) / ((h as any).length as any);
          for (var f: any = 0; (f as any) < ((h as any).length as any); f++) (a as any)[f] = (r as any) + ((h as any)[f] as any);
          return a;
        }, (v as any).multL = function (this: any, h: any, a: any, r: any): any {
          for (var i: any = [], f: any = [], e: any = [], g: any = 0; (g as any) < (((a as any)[0] as any).length as any); g++) {
            for (var t: any = 0, s: any = 0; (s as any) < ((a as any).length as any); s++) t += ((-.5 as any) * (((a as any)[s] as any)[g] as any) as any) * ((h as any)[s] as any);
            (f as any)[g] = t;
          }
          for (var n: any = 0; (n as any) < ((r as any).length as any); n++) {
            for (var c: any = 0, l: any = 0; (l as any) < ((r as any).length as any); l++) c += (((r as any)[n] as any)[l] as any) * ((f as any)[l] as any);
            (e as any)[n] = c;
          }
          for (var T: any = 0; (T as any) < ((a as any).length as any); T++) {
            for (var u: any = 0, d: any = 0; (d as any) < (((a as any)[0] as any).length as any); d++) u += (((a as any)[T] as any)[d] as any) * ((e as any)[d] as any);
            (i as any)[T] = u;
          }
          return i;
        }, (C as any).exports = v;
      }, function (this: any, C: any, R: any, N: any): any {
        var v: any = (function (this: any): any {
          function i(this: any, f: any, e: any): any {
            for (var g: any = 0; (g as any) < ((e as any).length as any); g++) {
              var t: any = (e as any)[g];
              (t as any).enumerable = (t as any).enumerable || !1, (t as any).configurable = !0, "value" in t && ((t as any).writable = !0), ((Object as any).defineProperty as any)(f, (t as any).key, t);
            }
          }
          return function (this: any, f: any, e: any, g: any): any {
            return e && (i as any)((f as any).prototype, e), g && (i as any)(f, g), f;
          };
        } as any)();
        function h(this: any, i: any, f: any): any {
          if (!(i instanceof f)) throw new (TypeError as any)("Cannot call a class as a function");
        }
        var a: any = (N as any)(11),
          r: any = (function (this: any): any {
            function i(this: any, f: any, e: any): any {
              (h as any)(this, i), ((e as any) !== (null as any) || (e as any) !== (void 0 as any)) && ((this as any).compareFunction = (this as any)._defaultCompareFunction);
              var g: any = void 0;
              f instanceof a ? g = ((f as any).size as any)() : g = (f as any).length, ((this as any)._quicksort as any)(f, 0, (g as any) - (1 as any));
            }
            return (v as any)(i, [{
              key: "_quicksort",
              value: function (this: any, e: any, g: any, t: any): any {
                if ((g as any) < (t as any)) {
                  var s: any = ((this as any)._partition as any)(e, g, t);
                  ((this as any)._quicksort as any)(e, g, s), ((this as any)._quicksort as any)(e, (s as any) + (1 as any), t);
                }
              }
            }, {
              key: "_partition",
              value: function (this: any, e: any, g: any, t: any): any {
                for (var s: any = ((this as any)._get as any)(e, g), n: any = g, c: any = t;;) {
                  for (; ((this as any).compareFunction as any)(s, ((this as any)._get as any)(e, c));) c--;
                  for (; ((this as any).compareFunction as any)(((this as any)._get as any)(e, n), s);) n++;
                  if ((n as any) < (c as any)) ((this as any)._swap as any)(e, n, c), n++, c--;else return c;
                }
              }
            }, {
              key: "_get",
              value: function (this: any, e: any, g: any): any {
                return e instanceof a ? ((e as any).get_object_at as any)(g) : (e as any)[g];
              }
            }, {
              key: "_set",
              value: function (this: any, e: any, g: any, t: any): any {
                e instanceof a ? ((e as any).set_object_at as any)(g, t) : (e as any)[g] = t;
              }
            }, {
              key: "_swap",
              value: function (this: any, e: any, g: any, t: any): any {
                var s: any = ((this as any)._get as any)(e, g);
                ((this as any)._set as any)(e, g, ((this as any)._get as any)(e, t)), ((this as any)._set as any)(e, t, s);
              }
            }, {
              key: "_defaultCompareFunction",
              value: function (this: any, e: any, g: any): any {
                return (g as any) > (e as any);
              }
            }]), i;
          } as any)();
        (C as any).exports = r;
      }, function (this: any, C: any, R: any, N: any): any {
        function v(this: any): any {}
        (v as any).svd = function (this: any, h: any): any {
          (this as any).U = null, (this as any).V = null, (this as any).s = null, (this as any).m = 0, (this as any).n = 0, (this as any).m = (h as any).length, (this as any).n = ((h as any)[0] as any).length;
          var a: any = ((Math as any).min as any)((this as any).m, (this as any).n);
          (this as any).s = (function (this: any, Tt: any): any {
            for (var Ct: any = []; (Tt-- as any) > (0 as any);) ((Ct as any).push as any)(0);
            return Ct;
          } as any)(((Math as any).min as any)(((this as any).m as any) + (1 as any), (this as any).n)), (this as any).U = (function (this: any, Tt: any): any {
            var Ct: any = function Bt(this: any, bt: any): any {
              if (((bt as any).length as any) == (0 as any)) return 0;
              for (var zt: any = [], St: any = 0; (St as any) < ((bt as any)[0] as any); St++) ((zt as any).push as any)((Bt as any)(((bt as any).slice as any)(1)));
              return zt;
            };
            return (Ct as any)(Tt);
          } as any)([(this as any).m, a]), (this as any).V = (function (this: any, Tt: any): any {
            var Ct: any = function Bt(this: any, bt: any): any {
              if (((bt as any).length as any) == (0 as any)) return 0;
              for (var zt: any = [], St: any = 0; (St as any) < ((bt as any)[0] as any); St++) ((zt as any).push as any)((Bt as any)(((bt as any).slice as any)(1)));
              return zt;
            };
            return (Ct as any)(Tt);
          } as any)([(this as any).n, (this as any).n]);
          for (var r: any = (function (this: any, Tt: any): any {
              for (var Ct: any = []; (Tt-- as any) > (0 as any);) ((Ct as any).push as any)(0);
              return Ct;
            } as any)((this as any).n), i: any = (function (this: any, Tt: any): any {
              for (var Ct: any = []; (Tt-- as any) > (0 as any);) ((Ct as any).push as any)(0);
              return Ct;
            } as any)((this as any).m), f: any = !0, e: any = ((Math as any).min as any)(((this as any).m as any) - (1 as any), (this as any).n), g: any = ((Math as any).max as any)(0, ((Math as any).min as any)(((this as any).n as any) - (2 as any), (this as any).m)), t: any = 0; (t as any) < (((Math as any).max as any)(e, g) as any); t++) {
            if ((t as any) < (e as any)) {
              ((this as any).s as any)[t] = 0;
              for (var s: any = t; (s as any) < ((this as any).m as any); s++) ((this as any).s as any)[t] = ((v as any).hypot as any)(((this as any).s as any)[t], ((h as any)[s] as any)[t]);
              if ((((this as any).s as any)[t] as any) !== (0 as any)) {
                (((h as any)[t] as any)[t] as any) < (0 as any) && (((this as any).s as any)[t] = -((this as any).s as any)[t]);
                for (var n: any = t; (n as any) < ((this as any).m as any); n++) ((h as any)[n] as any)[t] /= ((this as any).s as any)[t];
                ((h as any)[t] as any)[t] += 1;
              }
              ((this as any).s as any)[t] = -((this as any).s as any)[t];
            }
            for (var c: any = (t as any) + (1 as any); (c as any) < ((this as any).n as any); c++) {
              if ((function (this: any, Tt: any, Ct: any): any {
                return Tt && Ct;
              } as any)((t as any) < (e as any), (((this as any).s as any)[t] as any) !== (0 as any))) {
                for (var l: any = 0, T: any = t; (T as any) < ((this as any).m as any); T++) l += (((h as any)[T] as any)[t] as any) * (((h as any)[T] as any)[c] as any);
                l = (-l as any) / (((h as any)[t] as any)[t] as any);
                for (var u: any = t; (u as any) < ((this as any).m as any); u++) ((h as any)[u] as any)[c] += (l as any) * (((h as any)[u] as any)[t] as any);
              }
              (r as any)[c] = ((h as any)[t] as any)[c];
            }
            if ((function (this: any, Tt: any, Ct: any): any {
              return Ct;
            } as any)(f, (t as any) < (e as any))) for (var d: any = t; (d as any) < ((this as any).m as any); d++) (((this as any).U as any)[d] as any)[t] = ((h as any)[d] as any)[t];
            if ((t as any) < (g as any)) {
              (r as any)[t] = 0;
              for (var L: any = (t as any) + (1 as any); (L as any) < ((this as any).n as any); L++) (r as any)[t] = ((v as any).hypot as any)((r as any)[t], (r as any)[L]);
              if (((r as any)[t] as any) !== (0 as any)) {
                ((r as any)[(t as any) + (1 as any)] as any) < (0 as any) && ((r as any)[t] = -(r as any)[t]);
                for (var b: any = (t as any) + (1 as any); (b as any) < ((this as any).n as any); b++) (r as any)[b] /= (r as any)[t];
                (r as any)[(t as any) + (1 as any)] += 1;
              }
              if ((r as any)[t] = -(r as any)[t], (function (this: any, Tt: any, Ct: any): any {
                return Tt && Ct;
              } as any)(((t as any) + (1 as any) as any) < ((this as any).m as any), ((r as any)[t] as any) !== (0 as any))) {
                for (var w: any = (t as any) + (1 as any); (w as any) < ((this as any).m as any); w++) (i as any)[w] = 0;
                for (var G: any = (t as any) + (1 as any); (G as any) < ((this as any).n as any); G++) for (var B: any = (t as any) + (1 as any); (B as any) < ((this as any).m as any); B++) (i as any)[B] += ((r as any)[G] as any) * (((h as any)[B] as any)[G] as any);
                for (var U: any = (t as any) + (1 as any); (U as any) < ((this as any).n as any); U++) for (var V: any = (-(r as any)[U] as any) / ((r as any)[(t as any) + (1 as any)] as any), M: any = (t as any) + (1 as any); (M as any) < ((this as any).m as any); M++) ((h as any)[M] as any)[U] += (V as any) * ((i as any)[M] as any);
              }
              for (var _: any = (t as any) + (1 as any); (_ as any) < ((this as any).n as any); _++) (((this as any).V as any)[_] as any)[t] = (r as any)[_];
            }
          }
          var o: any = ((Math as any).min as any)((this as any).n, ((this as any).m as any) + (1 as any));
          (e as any) < ((this as any).n as any) && (((this as any).s as any)[e] = ((h as any)[e] as any)[e]), ((this as any).m as any) < (o as any) && (((this as any).s as any)[(o as any) - (1 as any)] = 0), ((g as any) + (1 as any) as any) < (o as any) && ((r as any)[g] = ((h as any)[g] as any)[(o as any) - (1 as any)]), (r as any)[(o as any) - (1 as any)] = 0;
          {
            for (var E: any = e; (E as any) < (a as any); E++) {
              for (var p: any = 0; (p as any) < ((this as any).m as any); p++) (((this as any).U as any)[p] as any)[E] = 0;
              (((this as any).U as any)[E] as any)[E] = 1;
            }
            for (var m: any = (e as any) - (1 as any); (m as any) >= (0 as any); m--) if ((((this as any).s as any)[m] as any) !== (0 as any)) {
              for (var y: any = (m as any) + (1 as any); (y as any) < (a as any); y++) {
                for (var S: any = 0, O: any = m; (O as any) < ((this as any).m as any); O++) S += ((((this as any).U as any)[O] as any)[m] as any) * ((((this as any).U as any)[O] as any)[y] as any);
                S = (-S as any) / ((((this as any).U as any)[m] as any)[m] as any);
                for (var F: any = m; (F as any) < ((this as any).m as any); F++) (((this as any).U as any)[F] as any)[y] += (S as any) * ((((this as any).U as any)[F] as any)[m] as any);
              }
              for (var W: any = m; (W as any) < ((this as any).m as any); W++) (((this as any).U as any)[W] as any)[m] = -(((this as any).U as any)[W] as any)[m];
              (((this as any).U as any)[m] as any)[m] = (1 as any) + ((((this as any).U as any)[m] as any)[m] as any);
              for (var I: any = 0; (I as any) < ((m as any) - (1 as any) as any); I++) (((this as any).U as any)[I] as any)[m] = 0;
            } else {
              for (var Q: any = 0; (Q as any) < ((this as any).m as any); Q++) (((this as any).U as any)[Q] as any)[m] = 0;
              (((this as any).U as any)[m] as any)[m] = 1;
            }
          }
          for (var z: any = ((this as any).n as any) - (1 as any); (z as any) >= (0 as any); z--) {
            if ((function (this: any, Tt: any, Ct: any): any {
              return Tt && Ct;
            } as any)((z as any) < (g as any), ((r as any)[z] as any) !== (0 as any))) for (var X: any = (z as any) + (1 as any); (X as any) < (a as any); X++) {
              for (var rt: any = 0, $: any = (z as any) + (1 as any); ($ as any) < ((this as any).n as any); $++) rt += ((((this as any).V as any)[$] as any)[z] as any) * ((((this as any).V as any)[$] as any)[X] as any);
              rt = (-rt as any) / ((((this as any).V as any)[(z as any) + (1 as any)] as any)[z] as any);
              for (var D: any = (z as any) + (1 as any); (D as any) < ((this as any).n as any); D++) (((this as any).V as any)[D] as any)[X] += (rt as any) * ((((this as any).V as any)[D] as any)[z] as any);
            }
            for (var H: any = 0; (H as any) < ((this as any).n as any); H++) (((this as any).V as any)[H] as any)[z] = 0;
            (((this as any).V as any)[z] as any)[z] = 1;
          }
          for (var k: any = (o as any) - (1 as any), tt: any = ((Math as any).pow as any)(2, -52), ht: any = ((Math as any).pow as any)(2, -966); (o as any) > (0 as any);) {
            var J: any = void 0,
              It: any = void 0;
            for (J = (o as any) - (2 as any); (J as any) >= (-1 as any) && (J as any) !== (-1 as any); J--) if ((((Math as any).abs as any)((r as any)[J]) as any) <= ((ht as any) + ((tt as any) * ((((Math as any).abs as any)(((this as any).s as any)[J]) as any) + (((Math as any).abs as any)(((this as any).s as any)[(J as any) + (1 as any)]) as any) as any) as any) as any)) {
              (r as any)[J] = 0;
              break;
            }
            if ((J as any) === ((o as any) - (2 as any) as any)) It = 4;else {
              var Nt: any = void 0;
              for (Nt = (o as any) - (1 as any); (Nt as any) >= (J as any) && (Nt as any) !== (J as any); Nt--) {
                var vt: any = (((Nt as any) !== (o as any) ? ((Math as any).abs as any)((r as any)[Nt]) : 0) as any) + (((Nt as any) !== ((J as any) + (1 as any) as any) ? ((Math as any).abs as any)((r as any)[(Nt as any) - (1 as any)]) : 0) as any);
                if ((((Math as any).abs as any)(((this as any).s as any)[Nt]) as any) <= ((ht as any) + ((tt as any) * (vt as any) as any) as any)) {
                  ((this as any).s as any)[Nt] = 0;
                  break;
                }
              }
              (Nt as any) === (J as any) ? It = 3 : (Nt as any) === ((o as any) - (1 as any) as any) ? It = 1 : (It = 2, J = Nt);
            }
            switch (J++, It) {
              case 1:
                {
                  var it: any = (r as any)[(o as any) - (2 as any)];
                  (r as any)[(o as any) - (2 as any)] = 0;
                  for (var ut: any = (o as any) - (2 as any); (ut as any) >= (J as any); ut--) {
                    var Et: any = ((v as any).hypot as any)(((this as any).s as any)[ut], it),
                      wt: any = (((this as any).s as any)[ut] as any) / (Et as any),
                      Ot: any = (it as any) / (Et as any);
                    ((this as any).s as any)[ut] = Et, (ut as any) !== (J as any) && (it = (-Ot as any) * ((r as any)[(ut as any) - (1 as any)] as any), (r as any)[(ut as any) - (1 as any)] = (wt as any) * ((r as any)[(ut as any) - (1 as any)] as any));
                    for (var mt: any = 0; (mt as any) < ((this as any).n as any); mt++) Et = ((wt as any) * ((((this as any).V as any)[mt] as any)[ut] as any) as any) + ((Ot as any) * ((((this as any).V as any)[mt] as any)[(o as any) - (1 as any)] as any) as any), (((this as any).V as any)[mt] as any)[(o as any) - (1 as any)] = ((-Ot as any) * ((((this as any).V as any)[mt] as any)[ut] as any) as any) + ((wt as any) * ((((this as any).V as any)[mt] as any)[(o as any) - (1 as any)] as any) as any), (((this as any).V as any)[mt] as any)[ut] = Et;
                  }
                }
                break;
              case 2:
                {
                  var Dt: any = (r as any)[(J as any) - (1 as any)];
                  (r as any)[(J as any) - (1 as any)] = 0;
                  for (var Rt: any = J; (Rt as any) < (o as any); Rt++) {
                    var Ht: any = ((v as any).hypot as any)(((this as any).s as any)[Rt], Dt),
                      Ut: any = (((this as any).s as any)[Rt] as any) / (Ht as any),
                      Pt: any = (Dt as any) / (Ht as any);
                    ((this as any).s as any)[Rt] = Ht, Dt = (-Pt as any) * ((r as any)[Rt] as any), (r as any)[Rt] = (Ut as any) * ((r as any)[Rt] as any);
                    for (var Ft: any = 0; (Ft as any) < ((this as any).m as any); Ft++) Ht = ((Ut as any) * ((((this as any).U as any)[Ft] as any)[Rt] as any) as any) + ((Pt as any) * ((((this as any).U as any)[Ft] as any)[(J as any) - (1 as any)] as any) as any), (((this as any).U as any)[Ft] as any)[(J as any) - (1 as any)] = ((-Pt as any) * ((((this as any).U as any)[Ft] as any)[Rt] as any) as any) + ((Ut as any) * ((((this as any).U as any)[Ft] as any)[(J as any) - (1 as any)] as any) as any), (((this as any).U as any)[Ft] as any)[Rt] = Ht;
                  }
                }
                break;
              case 3:
                {
                  var Yt: any = ((Math as any).max as any)(((Math as any).max as any)(((Math as any).max as any)(((Math as any).max as any)(((Math as any).abs as any)(((this as any).s as any)[(o as any) - (1 as any)]), ((Math as any).abs as any)(((this as any).s as any)[(o as any) - (2 as any)])), ((Math as any).abs as any)((r as any)[(o as any) - (2 as any)])), ((Math as any).abs as any)(((this as any).s as any)[J])), ((Math as any).abs as any)((r as any)[J])),
                    Vt: any = (((this as any).s as any)[(o as any) - (1 as any)] as any) / (Yt as any),
                    P: any = (((this as any).s as any)[(o as any) - (2 as any)] as any) / (Yt as any),
                    Y: any = ((r as any)[(o as any) - (2 as any)] as any) / (Yt as any),
                    Z: any = (((this as any).s as any)[J] as any) / (Yt as any),
                    K: any = ((r as any)[J] as any) / (Yt as any),
                    q: any = ((((P as any) + (Vt as any) as any) * ((P as any) - (Vt as any) as any) as any) + ((Y as any) * (Y as any) as any) as any) / (2 as any),
                    at: any = ((Vt as any) * (Y as any) as any) * ((Vt as any) * (Y as any) as any),
                    ct: any = 0;
                  (function (this: any, Tt: any, Ct: any): any {
                    return Tt || Ct;
                  } as any)((q as any) !== (0 as any), (at as any) !== (0 as any)) && (ct = ((Math as any).sqrt as any)(((q as any) * (q as any) as any) + (at as any)), (q as any) < (0 as any) && (ct = -ct), ct = (at as any) / ((q as any) + (ct as any) as any));
                  for (var nt: any = (((Z as any) + (Vt as any) as any) * ((Z as any) - (Vt as any) as any) as any) + (ct as any), et: any = (Z as any) * (K as any), j: any = J; (j as any) < ((o as any) - (1 as any) as any); j++) {
                    var dt: any = ((v as any).hypot as any)(nt, et),
                      At: any = (nt as any) / (dt as any),
                      pt: any = (et as any) / (dt as any);
                    (j as any) !== (J as any) && ((r as any)[(j as any) - (1 as any)] = dt), nt = ((At as any) * (((this as any).s as any)[j] as any) as any) + ((pt as any) * ((r as any)[j] as any) as any), (r as any)[j] = ((At as any) * ((r as any)[j] as any) as any) - ((pt as any) * (((this as any).s as any)[j] as any) as any), et = (pt as any) * (((this as any).s as any)[(j as any) + (1 as any)] as any), ((this as any).s as any)[(j as any) + (1 as any)] = (At as any) * (((this as any).s as any)[(j as any) + (1 as any)] as any);
                    for (var xt: any = 0; (xt as any) < ((this as any).n as any); xt++) dt = ((At as any) * ((((this as any).V as any)[xt] as any)[j] as any) as any) + ((pt as any) * ((((this as any).V as any)[xt] as any)[(j as any) + (1 as any)] as any) as any), (((this as any).V as any)[xt] as any)[(j as any) + (1 as any)] = ((-pt as any) * ((((this as any).V as any)[xt] as any)[j] as any) as any) + ((At as any) * ((((this as any).V as any)[xt] as any)[(j as any) + (1 as any)] as any) as any), (((this as any).V as any)[xt] as any)[j] = dt;
                    if (dt = ((v as any).hypot as any)(nt, et), At = (nt as any) / (dt as any), pt = (et as any) / (dt as any), ((this as any).s as any)[j] = dt, nt = ((At as any) * ((r as any)[j] as any) as any) + ((pt as any) * (((this as any).s as any)[(j as any) + (1 as any)] as any) as any), ((this as any).s as any)[(j as any) + (1 as any)] = ((-pt as any) * ((r as any)[j] as any) as any) + ((At as any) * (((this as any).s as any)[(j as any) + (1 as any)] as any) as any), et = (pt as any) * ((r as any)[(j as any) + (1 as any)] as any), (r as any)[(j as any) + (1 as any)] = (At as any) * ((r as any)[(j as any) + (1 as any)] as any), (j as any) < (((this as any).m as any) - (1 as any) as any)) for (var lt: any = 0; (lt as any) < ((this as any).m as any); lt++) dt = ((At as any) * ((((this as any).U as any)[lt] as any)[j] as any) as any) + ((pt as any) * ((((this as any).U as any)[lt] as any)[(j as any) + (1 as any)] as any) as any), (((this as any).U as any)[lt] as any)[(j as any) + (1 as any)] = ((-pt as any) * ((((this as any).U as any)[lt] as any)[j] as any) as any) + ((At as any) * ((((this as any).U as any)[lt] as any)[(j as any) + (1 as any)] as any) as any), (((this as any).U as any)[lt] as any)[j] = dt;
                  }
                  (r as any)[(o as any) - (2 as any)] = nt;
                }
                break;
              case 4:
                {
                  if ((((this as any).s as any)[J] as any) <= (0 as any)) {
                    ((this as any).s as any)[J] = (((this as any).s as any)[J] as any) < (0 as any) ? -((this as any).s as any)[J] : 0;
                    for (var ot: any = 0; (ot as any) <= (k as any); ot++) (((this as any).V as any)[ot] as any)[J] = -(((this as any).V as any)[ot] as any)[J];
                  }
                  for (; (J as any) < (k as any) && !((((this as any).s as any)[J] as any) >= (((this as any).s as any)[(J as any) + (1 as any)] as any));) {
                    var Lt: any = ((this as any).s as any)[J];
                    if (((this as any).s as any)[J] = ((this as any).s as any)[(J as any) + (1 as any)], ((this as any).s as any)[(J as any) + (1 as any)] = Lt, (J as any) < (((this as any).n as any) - (1 as any) as any)) for (var ft: any = 0; (ft as any) < ((this as any).n as any); ft++) Lt = (((this as any).V as any)[ft] as any)[(J as any) + (1 as any)], (((this as any).V as any)[ft] as any)[(J as any) + (1 as any)] = (((this as any).V as any)[ft] as any)[J], (((this as any).V as any)[ft] as any)[J] = Lt;
                    if ((J as any) < (((this as any).m as any) - (1 as any) as any)) for (var st: any = 0; (st as any) < ((this as any).m as any); st++) Lt = (((this as any).U as any)[st] as any)[(J as any) + (1 as any)], (((this as any).U as any)[st] as any)[(J as any) + (1 as any)] = (((this as any).U as any)[st] as any)[J], (((this as any).U as any)[st] as any)[J] = Lt;
                    J++;
                  }
                  o--;
                }
                break;
            }
          }
          var Xt: any = {
            U: (this as any).U,
            V: (this as any).V,
            S: (this as any).s
          };
          return Xt;
        }, (v as any).hypot = function (this: any, h: any, a: any): any {
          var r: any = void 0;
          return (((Math as any).abs as any)(h) as any) > (((Math as any).abs as any)(a) as any) ? (r = (a as any) / (h as any), r = (((Math as any).abs as any)(h) as any) * (((Math as any).sqrt as any)((1 as any) + ((r as any) * (r as any) as any)) as any)) : (a as any) != (0 as any) ? (r = (h as any) / (a as any), r = (((Math as any).abs as any)(a) as any) * (((Math as any).sqrt as any)((1 as any) + ((r as any) * (r as any) as any)) as any)) : r = 0, r;
        }, (C as any).exports = v;
      }, function (this: any, C: any, R: any, N: any): any {
        var v: any = (function (this: any): any {
          function r(this: any, i: any, f: any): any {
            for (var e: any = 0; (e as any) < ((f as any).length as any); e++) {
              var g: any = (f as any)[e];
              (g as any).enumerable = (g as any).enumerable || !1, (g as any).configurable = !0, "value" in g && ((g as any).writable = !0), ((Object as any).defineProperty as any)(i, (g as any).key, g);
            }
          }
          return function (this: any, i: any, f: any, e: any): any {
            return f && (r as any)((i as any).prototype, f), e && (r as any)(i, e), i;
          };
        } as any)();
        function h(this: any, r: any, i: any): any {
          if (!(r instanceof i)) throw new (TypeError as any)("Cannot call a class as a function");
        }
        var a: any = (function (this: any): any {
          function r(this: any, i: any, f: any): any {
            var e: any = ((arguments as any).length as any) > (2 as any) && ((arguments as any)[2] as any) !== (void 0 as any) ? (arguments as any)[2] : 1,
              g: any = ((arguments as any).length as any) > (3 as any) && ((arguments as any)[3] as any) !== (void 0 as any) ? (arguments as any)[3] : -1,
              t: any = ((arguments as any).length as any) > (4 as any) && ((arguments as any)[4] as any) !== (void 0 as any) ? (arguments as any)[4] : -1;
            (h as any)(this, r), (this as any).sequence1 = i, (this as any).sequence2 = f, (this as any).match_score = e, (this as any).mismatch_penalty = g, (this as any).gap_penalty = t, (this as any).iMax = ((i as any).length as any) + (1 as any), (this as any).jMax = ((f as any).length as any) + (1 as any), (this as any).grid = new (Array as any)((this as any).iMax);
            for (var s: any = 0; (s as any) < ((this as any).iMax as any); s++) {
              ((this as any).grid as any)[s] = new (Array as any)((this as any).jMax);
              for (var n: any = 0; (n as any) < ((this as any).jMax as any); n++) (((this as any).grid as any)[s] as any)[n] = 0;
            }
            (this as any).tracebackGrid = new (Array as any)((this as any).iMax);
            for (var c: any = 0; (c as any) < ((this as any).iMax as any); c++) {
              ((this as any).tracebackGrid as any)[c] = new (Array as any)((this as any).jMax);
              for (var l: any = 0; (l as any) < ((this as any).jMax as any); l++) (((this as any).tracebackGrid as any)[c] as any)[l] = [null, null, null];
            }
            (this as any).alignments = [], (this as any).score = -1, ((this as any).computeGrids as any)();
          }
          return (v as any)(r, [{
            key: "getScore",
            value: function (this: any): any {
              return (this as any).score;
            }
          }, {
            key: "getAlignments",
            value: function (this: any): any {
              return (this as any).alignments;
            }
          }, {
            key: "computeGrids",
            value: function (this: any): any {
              for (var f: any = 1; (f as any) < ((this as any).jMax as any); f++) (((this as any).grid as any)[0] as any)[f] = ((((this as any).grid as any)[0] as any)[(f as any) - (1 as any)] as any) + ((this as any).gap_penalty as any), (((this as any).tracebackGrid as any)[0] as any)[f] = [!1, !1, !0];
              for (var e: any = 1; (e as any) < ((this as any).iMax as any); e++) (((this as any).grid as any)[e] as any)[0] = ((((this as any).grid as any)[(e as any) - (1 as any)] as any)[0] as any) + ((this as any).gap_penalty as any), (((this as any).tracebackGrid as any)[e] as any)[0] = [!1, !0, !1];
              for (var g: any = 1; (g as any) < ((this as any).iMax as any); g++) for (var t: any = 1; (t as any) < ((this as any).jMax as any); t++) {
                var s: any = void 0;
                (((this as any).sequence1 as any)[(g as any) - (1 as any)] as any) === (((this as any).sequence2 as any)[(t as any) - (1 as any)] as any) ? s = ((((this as any).grid as any)[(g as any) - (1 as any)] as any)[(t as any) - (1 as any)] as any) + ((this as any).match_score as any) : s = ((((this as any).grid as any)[(g as any) - (1 as any)] as any)[(t as any) - (1 as any)] as any) + ((this as any).mismatch_penalty as any);
                var n: any = ((((this as any).grid as any)[(g as any) - (1 as any)] as any)[t] as any) + ((this as any).gap_penalty as any),
                  c: any = ((((this as any).grid as any)[g] as any)[(t as any) - (1 as any)] as any) + ((this as any).gap_penalty as any),
                  l: any = [s, n, c],
                  T: any = ((this as any).arrayAllMaxIndexes as any)(l);
                (((this as any).grid as any)[g] as any)[t] = (l as any)[(T as any)[0]], (((this as any).tracebackGrid as any)[g] as any)[t] = [((T as any).includes as any)(0), ((T as any).includes as any)(1), ((T as any).includes as any)(2)];
              }
              (this as any).score = (((this as any).grid as any)[((this as any).iMax as any) - (1 as any)] as any)[((this as any).jMax as any) - (1 as any)];
            }
          }, {
            key: "alignmentTraceback",
            value: function (this: any): any {
              var f: any = [];
              for (((f as any).push as any)({
                pos: [((this as any).sequence1 as any).length, ((this as any).sequence2 as any).length],
                seq1: "",
                seq2: ""
              }); (f as any)[0];) {
                var e: any = (f as any)[0],
                  g: any = (((this as any).tracebackGrid as any)[((e as any).pos as any)[0]] as any)[((e as any).pos as any)[1]];
                (g as any)[0] && ((f as any).push as any)({
                  pos: [(((e as any).pos as any)[0] as any) - (1 as any), (((e as any).pos as any)[1] as any) - (1 as any)],
                  seq1: (((this as any).sequence1 as any)[(((e as any).pos as any)[0] as any) - (1 as any)] as any) + ((e as any).seq1 as any),
                  seq2: (((this as any).sequence2 as any)[(((e as any).pos as any)[1] as any) - (1 as any)] as any) + ((e as any).seq2 as any)
                }), (g as any)[1] && ((f as any).push as any)({
                  pos: [(((e as any).pos as any)[0] as any) - (1 as any), ((e as any).pos as any)[1]],
                  seq1: (((this as any).sequence1 as any)[(((e as any).pos as any)[0] as any) - (1 as any)] as any) + ((e as any).seq1 as any),
                  seq2: ("-" as any) + ((e as any).seq2 as any)
                }), (g as any)[2] && ((f as any).push as any)({
                  pos: [((e as any).pos as any)[0], (((e as any).pos as any)[1] as any) - (1 as any)],
                  seq1: ("-" as any) + ((e as any).seq1 as any),
                  seq2: (((this as any).sequence2 as any)[(((e as any).pos as any)[1] as any) - (1 as any)] as any) + ((e as any).seq2 as any)
                }), (((e as any).pos as any)[0] as any) === (0 as any) && (((e as any).pos as any)[1] as any) === (0 as any) && (((this as any).alignments as any).push as any)({
                  sequence1: (e as any).seq1,
                  sequence2: (e as any).seq2
                }), ((f as any).shift as any)();
              }
              return (this as any).alignments;
            }
          }, {
            key: "getAllIndexes",
            value: function (this: any, f: any, e: any): any {
              for (var g: any = [], t: any = -1; ((t = ((f as any).indexOf as any)(e, (t as any) + (1 as any))) as any) !== (-1 as any);) ((g as any).push as any)(t);
              return g;
            }
          }, {
            key: "arrayAllMaxIndexes",
            value: function (this: any, f: any): any {
              return ((this as any).getAllIndexes as any)(f, (((Math as any).max as any).apply as any)(null, f));
            }
          }]), r;
        } as any)();
        (C as any).exports = a;
      }, function (this: any, C: any, R: any, N: any): any {
        var v: any = function (this: any): any {};
        (v as any).FDLayout = (N as any)(18), (v as any).FDLayoutConstants = (N as any)(4), (v as any).FDLayoutEdge = (N as any)(19), (v as any).FDLayoutNode = (N as any)(20), (v as any).DimensionD = (N as any)(21), (v as any).HashMap = (N as any)(22), (v as any).HashSet = (N as any)(23), (v as any).IGeometry = (N as any)(8), (v as any).IMath = (N as any)(9), (v as any).Integer = (N as any)(10), (v as any).Point = (N as any)(12), (v as any).PointD = (N as any)(5), (v as any).RandomSeed = (N as any)(16), (v as any).RectangleD = (N as any)(13), (v as any).Transform = (N as any)(17), (v as any).UniqueIDGeneretor = (N as any)(14), (v as any).Quicksort = (N as any)(25), (v as any).LinkedList = (N as any)(11), (v as any).LGraphObject = (N as any)(2), (v as any).LGraph = (N as any)(6), (v as any).LEdge = (N as any)(1), (v as any).LGraphManager = (N as any)(7), (v as any).LNode = (N as any)(3), (v as any).Layout = (N as any)(15), (v as any).LayoutConstants = (N as any)(0), (v as any).NeedlemanWunsch = (N as any)(27), (v as any).Matrix = (N as any)(24), (v as any).SVD = (N as any)(26), (C as any).exports = v;
      }, function (this: any, C: any, R: any, N: any): any {
        function v(this: any): any {
          (this as any).listeners = [];
        }
        var h: any = (v as any).prototype;
        (h as any).addListener = function (this: any, a: any, r: any): any {
          (((this as any).listeners as any).push as any)({
            event: a,
            callback: r
          });
        }, (h as any).removeListener = function (this: any, a: any, r: any): any {
          for (var i: any = ((this as any).listeners as any).length; (i as any) >= (0 as any); i--) {
            var f: any = ((this as any).listeners as any)[i];
            ((f as any).event as any) === (a as any) && ((f as any).callback as any) === (r as any) && (((this as any).listeners as any).splice as any)(i, 1);
          }
        }, (h as any).emit = function (this: any, a: any, r: any): any {
          for (var i: any = 0; (i as any) < (((this as any).listeners as any).length as any); i++) {
            var f: any = ((this as any).listeners as any)[i];
            (a as any) === ((f as any).event as any) && ((f as any).callback as any)(r);
          }
        }, (C as any).exports = v;
      }]);
    });
  } as any)(fe)), (fe as any).exports;
}
var vr: any = (le as any).exports,
  De: any;
function pr(this: any): any {
  return De || (De = 1, (function (this: any, x: any, A: any): any {
    (function (this: any, R: any, N: any): any {
      (x as any).exports = (N as any)((dr as any)());
    } as any)(vr, function (this: any, C: any): any {
      return (((): any => {
        var R: any = {
            45: (a: any, r: any, i: any): any => {
              var f: any = {};
              (f as any).layoutBase = (i as any)(551), (f as any).CoSEConstants = (i as any)(806), (f as any).CoSEEdge = (i as any)(767), (f as any).CoSEGraph = (i as any)(880), (f as any).CoSEGraphManager = (i as any)(578), (f as any).CoSELayout = (i as any)(765), (f as any).CoSENode = (i as any)(991), (f as any).ConstraintHandler = (i as any)(902), (a as any).exports = f;
            },
            806: (a: any, r: any, i: any): any => {
              var g: any;
              var f: any = ((i as any)(551) as any).FDLayoutConstants;
              function e(this: any): any {}
              for (g in f) (e as any)[g] = (f as any)[g];
              (e as any).DEFAULT_USE_MULTI_LEVEL_SCALING = !1, (e as any).DEFAULT_RADIAL_SEPARATION = (f as any).DEFAULT_EDGE_LENGTH, (e as any).DEFAULT_COMPONENT_SEPERATION = 60, (e as any).TILE = !0, (e as any).TILING_PADDING_VERTICAL = 10, (e as any).TILING_PADDING_HORIZONTAL = 10, (e as any).TRANSFORM_ON_CONSTRAINT_HANDLING = !0, (e as any).ENFORCE_CONSTRAINTS = !0, (e as any).APPLY_LAYOUT = !0, (e as any).RELAX_MOVEMENT_ON_CONSTRAINTS = !0, (e as any).TREE_REDUCTION_ON_INCREMENTAL = !0, (e as any).PURE_INCREMENTAL = (e as any).DEFAULT_INCREMENTAL, (a as any).exports = e;
            },
            767: (a: any, r: any, i: any): any => {
              var g: any;
              var f: any = ((i as any)(551) as any).FDLayoutEdge;
              function e(this: any, t: any, s: any, n: any): any {
                ((f as any).call as any)(this, t, s, n);
              }
              (e as any).prototype = ((Object as any).create as any)((f as any).prototype);
              for (g in f) (e as any)[g] = (f as any)[g];
              (a as any).exports = e;
            },
            880: (a: any, r: any, i: any): any => {
              var g: any;
              var f: any = ((i as any)(551) as any).LGraph;
              function e(this: any, t: any, s: any, n: any): any {
                ((f as any).call as any)(this, t, s, n);
              }
              (e as any).prototype = ((Object as any).create as any)((f as any).prototype);
              for (g in f) (e as any)[g] = (f as any)[g];
              (a as any).exports = e;
            },
            578: (a: any, r: any, i: any): any => {
              var g: any;
              var f: any = ((i as any)(551) as any).LGraphManager;
              function e(this: any, t: any): any {
                ((f as any).call as any)(this, t);
              }
              (e as any).prototype = ((Object as any).create as any)((f as any).prototype);
              for (g in f) (e as any)[g] = (f as any)[g];
              (a as any).exports = e;
            },
            765: (a: any, r: any, i: any): any => {
              var _: any;
              var f: any = ((i as any)(551) as any).FDLayout,
                e: any = (i as any)(578),
                g: any = (i as any)(880),
                t: any = (i as any)(991),
                s: any = (i as any)(767),
                n: any = (i as any)(806),
                c: any = (i as any)(902),
                l: any = ((i as any)(551) as any).FDLayoutConstants,
                T: any = ((i as any)(551) as any).LayoutConstants,
                u: any = ((i as any)(551) as any).Point,
                d: any = ((i as any)(551) as any).PointD,
                L: any = ((i as any)(551) as any).DimensionD,
                b: any = ((i as any)(551) as any).Layout,
                w: any = ((i as any)(551) as any).Integer,
                G: any = ((i as any)(551) as any).IGeometry,
                B: any = ((i as any)(551) as any).LGraph,
                U: any = ((i as any)(551) as any).Transform,
                V: any = ((i as any)(551) as any).LinkedList;
              function M(this: any): any {
                ((f as any).call as any)(this), (this as any).toBeTiled = {}, (this as any).constraints = {};
              }
              (M as any).prototype = ((Object as any).create as any)((f as any).prototype);
              for (_ in f) (M as any)[_] = (f as any)[_];
              ((M as any).prototype as any).newGraphManager = function (this: any): any {
                var o: any = new (e as any)(this);
                return (this as any).graphManager = o, o;
              }, ((M as any).prototype as any).newGraph = function (this: any, o: any): any {
                return new (g as any)(null, (this as any).graphManager, o);
              }, ((M as any).prototype as any).newNode = function (this: any, o: any): any {
                return new (t as any)((this as any).graphManager, o);
              }, ((M as any).prototype as any).newEdge = function (this: any, o: any): any {
                return new (s as any)(null, null, o);
              }, ((M as any).prototype as any).initParameters = function (this: any): any {
                ((((f as any).prototype as any).initParameters as any).call as any)(this, arguments), (this as any).isSubLayout || (((n as any).DEFAULT_EDGE_LENGTH as any) < (10 as any) ? (this as any).idealEdgeLength = 10 : (this as any).idealEdgeLength = (n as any).DEFAULT_EDGE_LENGTH, (this as any).useSmartIdealEdgeLengthCalculation = (n as any).DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION, (this as any).gravityConstant = (l as any).DEFAULT_GRAVITY_STRENGTH, (this as any).compoundGravityConstant = (l as any).DEFAULT_COMPOUND_GRAVITY_STRENGTH, (this as any).gravityRangeFactor = (l as any).DEFAULT_GRAVITY_RANGE_FACTOR, (this as any).compoundGravityRangeFactor = (l as any).DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR, (this as any).prunedNodesAll = [], (this as any).growTreeIterations = 0, (this as any).afterGrowthIterations = 0, (this as any).isTreeGrowing = !1, (this as any).isGrowthFinished = !1);
              }, ((M as any).prototype as any).initSpringEmbedder = function (this: any): any {
                ((((f as any).prototype as any).initSpringEmbedder as any).call as any)(this), (this as any).coolingCycle = 0, (this as any).maxCoolingCycle = ((this as any).maxIterations as any) / ((l as any).CONVERGENCE_CHECK_PERIOD as any), (this as any).finalTemperature = .04, (this as any).coolingAdjuster = 1;
              }, ((M as any).prototype as any).layout = function (this: any): any {
                var o: any = (T as any).DEFAULT_CREATE_BENDS_AS_NEEDED;
                return o && (((this as any).createBendpoints as any)(), (((this as any).graphManager as any).resetAllEdges as any)()), (this as any).level = 0, ((this as any).classicLayout as any)();
              }, ((M as any).prototype as any).classicLayout = function (this: any): any {
                if ((this as any).nodesWithGravity = ((this as any).calculateNodesToApplyGravitationTo as any)(), (((this as any).graphManager as any).setAllNodesToApplyGravitation as any)((this as any).nodesWithGravity), ((this as any).calcNoOfChildrenForAllNodes as any)(), (((this as any).graphManager as any).calcLowestCommonAncestors as any)(), (((this as any).graphManager as any).calcInclusionTreeDepths as any)(), (((((this as any).graphManager as any).getRoot as any)() as any).calcEstimatedSize as any)(), ((this as any).calcIdealEdgeLengths as any)(), (this as any).incremental) {
                  if ((n as any).TREE_REDUCTION_ON_INCREMENTAL) {
                    ((this as any).reduceTrees as any)(), (((this as any).graphManager as any).resetAllNodesToApplyGravitation as any)();
                    var E: any = new (Set as any)(((this as any).getAllNodes as any)()),
                      p: any = (((this as any).nodesWithGravity as any).filter as any)(function (this: any, S: any): any {
                        return ((E as any).has as any)(S);
                      });
                    (((this as any).graphManager as any).setAllNodesToApplyGravitation as any)(p);
                  }
                } else {
                  var o: any = ((this as any).getFlatForest as any)();
                  if (((o as any).length as any) > (0 as any)) ((this as any).positionNodesRadially as any)(o);else {
                    ((this as any).reduceTrees as any)(), (((this as any).graphManager as any).resetAllNodesToApplyGravitation as any)();
                    var E: any = new (Set as any)(((this as any).getAllNodes as any)()),
                      p: any = (((this as any).nodesWithGravity as any).filter as any)(function (this: any, m: any): any {
                        return ((E as any).has as any)(m);
                      });
                    (((this as any).graphManager as any).setAllNodesToApplyGravitation as any)(p), ((this as any).positionNodesRandomly as any)();
                  }
                }
                return ((((Object as any).keys as any)((this as any).constraints) as any).length as any) > (0 as any) && (((c as any).handleConstraints as any)(this), ((this as any).initConstraintVariables as any)()), ((this as any).initSpringEmbedder as any)(), (n as any).APPLY_LAYOUT && ((this as any).runSpringEmbedder as any)(), !0;
              }, ((M as any).prototype as any).tick = function (this: any): any {
                if ((this as any).totalIterations++, ((this as any).totalIterations as any) === ((this as any).maxIterations as any) && !(this as any).isTreeGrowing && !(this as any).isGrowthFinished) if ((((this as any).prunedNodesAll as any).length as any) > (0 as any)) (this as any).isTreeGrowing = !0;else return !0;
                if ((((this as any).totalIterations as any) % ((l as any).CONVERGENCE_CHECK_PERIOD as any) as any) == (0 as any) && !(this as any).isTreeGrowing && !(this as any).isGrowthFinished) {
                  if (((this as any).isConverged as any)()) if ((((this as any).prunedNodesAll as any).length as any) > (0 as any)) (this as any).isTreeGrowing = !0;else return !0;
                  (this as any).coolingCycle++, ((this as any).layoutQuality as any) == (0 as any) ? (this as any).coolingAdjuster = (this as any).coolingCycle : ((this as any).layoutQuality as any) == (1 as any) && ((this as any).coolingAdjuster = ((this as any).coolingCycle as any) / (3 as any)), (this as any).coolingFactor = ((Math as any).max as any)(((this as any).initialCoolingFactor as any) - (((((Math as any).pow as any)((this as any).coolingCycle, (((Math as any).log as any)((100 as any) * (((this as any).initialCoolingFactor as any) - ((this as any).finalTemperature as any) as any)) as any) / (((Math as any).log as any)((this as any).maxCoolingCycle) as any)) as any) / (100 as any) as any) * ((this as any).coolingAdjuster as any) as any), (this as any).finalTemperature), (this as any).animationPeriod = ((Math as any).ceil as any)(((this as any).initialAnimationPeriod as any) * (((Math as any).sqrt as any)((this as any).coolingFactor) as any));
                }
                if ((this as any).isTreeGrowing) {
                  if ((((this as any).growTreeIterations as any) % (10 as any) as any) == (0 as any)) if ((((this as any).prunedNodesAll as any).length as any) > (0 as any)) {
                    (((this as any).graphManager as any).updateBounds as any)(), ((this as any).updateGrid as any)(), ((this as any).growTree as any)((this as any).prunedNodesAll), (((this as any).graphManager as any).resetAllNodesToApplyGravitation as any)();
                    var o: any = new (Set as any)(((this as any).getAllNodes as any)()),
                      E: any = (((this as any).nodesWithGravity as any).filter as any)(function (this: any, y: any): any {
                        return ((o as any).has as any)(y);
                      });
                    (((this as any).graphManager as any).setAllNodesToApplyGravitation as any)(E), (((this as any).graphManager as any).updateBounds as any)(), ((this as any).updateGrid as any)(), (n as any).PURE_INCREMENTAL ? (this as any).coolingFactor = ((l as any).DEFAULT_COOLING_FACTOR_INCREMENTAL as any) / (2 as any) : (this as any).coolingFactor = (l as any).DEFAULT_COOLING_FACTOR_INCREMENTAL;
                  } else (this as any).isTreeGrowing = !1, (this as any).isGrowthFinished = !0;
                  (this as any).growTreeIterations++;
                }
                if ((this as any).isGrowthFinished) {
                  if (((this as any).isConverged as any)()) return !0;
                  (((this as any).afterGrowthIterations as any) % (10 as any) as any) == (0 as any) && ((((this as any).graphManager as any).updateBounds as any)(), ((this as any).updateGrid as any)()), (n as any).PURE_INCREMENTAL ? (this as any).coolingFactor = (((l as any).DEFAULT_COOLING_FACTOR_INCREMENTAL as any) / (2 as any) as any) * (((100 as any) - ((this as any).afterGrowthIterations as any) as any) / (100 as any) as any) : (this as any).coolingFactor = ((l as any).DEFAULT_COOLING_FACTOR_INCREMENTAL as any) * (((100 as any) - ((this as any).afterGrowthIterations as any) as any) / (100 as any) as any), (this as any).afterGrowthIterations++;
                }
                var p: any = !(this as any).isTreeGrowing && !(this as any).isGrowthFinished,
                  m: any = (((this as any).growTreeIterations as any) % (10 as any) as any) == (1 as any) && (this as any).isTreeGrowing || (((this as any).afterGrowthIterations as any) % (10 as any) as any) == (1 as any) && (this as any).isGrowthFinished;
                return (this as any).totalDisplacement = 0, (((this as any).graphManager as any).updateBounds as any)(), ((this as any).calcSpringForces as any)(), ((this as any).calcRepulsionForces as any)(p, m), ((this as any).calcGravitationalForces as any)(), ((this as any).moveNodes as any)(), ((this as any).animate as any)(), !1;
              }, ((M as any).prototype as any).getPositionsData = function (this: any): any {
                for (var o: any = (((this as any).graphManager as any).getAllNodes as any)(), E: any = {}, p: any = 0; (p as any) < ((o as any).length as any); p++) {
                  var m: any = ((o as any)[p] as any).rect,
                    y: any = ((o as any)[p] as any).id;
                  (E as any)[y] = {
                    id: y,
                    x: ((m as any).getCenterX as any)(),
                    y: ((m as any).getCenterY as any)(),
                    w: (m as any).width,
                    h: (m as any).height
                  };
                }
                return E;
              }, ((M as any).prototype as any).runSpringEmbedder = function (this: any): any {
                (this as any).initialAnimationPeriod = 25, (this as any).animationPeriod = (this as any).initialAnimationPeriod;
                var o: any = !1;
                if (((l as any).ANIMATE as any) === ("during" as any)) ((this as any).emit as any)("layoutstarted");else {
                  for (; !o;) o = ((this as any).tick as any)();
                  (((this as any).graphManager as any).updateBounds as any)();
                }
              }, ((M as any).prototype as any).moveNodes = function (this: any): any {
                for (var o: any = ((this as any).getAllNodes as any)(), E: any, p: any = 0; (p as any) < ((o as any).length as any); p++) E = (o as any)[p], ((E as any).calculateDisplacement as any)();
                ((((Object as any).keys as any)((this as any).constraints) as any).length as any) > (0 as any) && ((this as any).updateDisplacements as any)();
                for (var p: any = 0; (p as any) < ((o as any).length as any); p++) E = (o as any)[p], ((E as any).move as any)();
              }, ((M as any).prototype as any).initConstraintVariables = function (this: any): any {
                var o: any = this;
                (this as any).idToNodeMap = new (Map as any)(), (this as any).fixedNodeSet = new (Set as any)();
                for (var E: any = (((this as any).graphManager as any).getAllNodes as any)(), p: any = 0; (p as any) < ((E as any).length as any); p++) {
                  var m: any = (E as any)[p];
                  (((this as any).idToNodeMap as any).set as any)((m as any).id, m);
                }
                var y: any = function D(this: any, H: any): any {
                  for (var k: any = ((((H as any).getChild as any)() as any).getNodes as any)(), tt: any, ht: any = 0, J: any = 0; (J as any) < ((k as any).length as any); J++) tt = (k as any)[J], (((tt as any).getChild as any)() as any) == (null as any) ? (((o as any).fixedNodeSet as any).has as any)((tt as any).id) && (ht += 100) : ht += (D as any)(tt);
                  return ht;
                };
                if (((this as any).constraints as any).fixedNodeConstraint) {
                  ((((this as any).constraints as any).fixedNodeConstraint as any).forEach as any)(function (this: any, k: any): any {
                    (((o as any).fixedNodeSet as any).add as any)((k as any).nodeId);
                  });
                  for (var E: any = (((this as any).graphManager as any).getAllNodes as any)(), m: any, p: any = 0; (p as any) < ((E as any).length as any); p++) if (m = (E as any)[p], (((m as any).getChild as any)() as any) != (null as any)) {
                    var S: any = (y as any)(m);
                    (S as any) > (0 as any) && ((m as any).fixedNodeWeight = S);
                  }
                }
                if (((this as any).constraints as any).relativePlacementConstraint) {
                  var O: any = new (Map as any)(),
                    F: any = new (Map as any)();
                  if ((this as any).dummyToNodeForVerticalAlignment = new (Map as any)(), (this as any).dummyToNodeForHorizontalAlignment = new (Map as any)(), (this as any).fixedNodesOnHorizontal = new (Set as any)(), (this as any).fixedNodesOnVertical = new (Set as any)(), (((this as any).fixedNodeSet as any).forEach as any)(function (this: any, D: any): any {
                    (((o as any).fixedNodesOnHorizontal as any).add as any)(D), (((o as any).fixedNodesOnVertical as any).add as any)(D);
                  }), ((this as any).constraints as any).alignmentConstraint) {
                    if ((((this as any).constraints as any).alignmentConstraint as any).vertical) for (var W: any = (((this as any).constraints as any).alignmentConstraint as any).vertical, p: any = 0; (p as any) < ((W as any).length as any); p++) (((this as any).dummyToNodeForVerticalAlignment as any).set as any)(("dummy" as any) + (p as any), []), (((W as any)[p] as any).forEach as any)(function (this: any, H: any): any {
                      ((O as any).set as any)(H, ("dummy" as any) + (p as any)), (((((o as any).dummyToNodeForVerticalAlignment as any).get as any)(("dummy" as any) + (p as any)) as any).push as any)(H), (((o as any).fixedNodeSet as any).has as any)(H) && (((o as any).fixedNodesOnHorizontal as any).add as any)(("dummy" as any) + (p as any));
                    });
                    if ((((this as any).constraints as any).alignmentConstraint as any).horizontal) for (var I: any = (((this as any).constraints as any).alignmentConstraint as any).horizontal, p: any = 0; (p as any) < ((I as any).length as any); p++) (((this as any).dummyToNodeForHorizontalAlignment as any).set as any)(("dummy" as any) + (p as any), []), (((I as any)[p] as any).forEach as any)(function (this: any, H: any): any {
                      ((F as any).set as any)(H, ("dummy" as any) + (p as any)), (((((o as any).dummyToNodeForHorizontalAlignment as any).get as any)(("dummy" as any) + (p as any)) as any).push as any)(H), (((o as any).fixedNodeSet as any).has as any)(H) && (((o as any).fixedNodesOnVertical as any).add as any)(("dummy" as any) + (p as any));
                    });
                  }
                  if ((n as any).RELAX_MOVEMENT_ON_CONSTRAINTS) (this as any).shuffle = function (this: any, D: any): any {
                    var H: any, k: any, tt: any;
                    for (tt = ((D as any).length as any) - (1 as any); (tt as any) >= (((2 as any) * ((D as any).length as any) as any) / (3 as any) as any); tt--) H = ((Math as any).floor as any)((((Math as any).random as any)() as any) * ((tt as any) + (1 as any) as any)), k = (D as any)[tt], (D as any)[tt] = (D as any)[H], (D as any)[H] = k;
                    return D;
                  }, (this as any).nodesInRelativeHorizontal = [], (this as any).nodesInRelativeVertical = [], (this as any).nodeToRelativeConstraintMapHorizontal = new (Map as any)(), (this as any).nodeToRelativeConstraintMapVertical = new (Map as any)(), (this as any).nodeToTempPositionMapHorizontal = new (Map as any)(), (this as any).nodeToTempPositionMapVertical = new (Map as any)(), ((((this as any).constraints as any).relativePlacementConstraint as any).forEach as any)(function (this: any, D: any): any {
                    if ((D as any).left) {
                      var H: any = ((O as any).has as any)((D as any).left) ? ((O as any).get as any)((D as any).left) : (D as any).left,
                        k: any = ((O as any).has as any)((D as any).right) ? ((O as any).get as any)((D as any).right) : (D as any).right;
                      (((o as any).nodesInRelativeHorizontal as any).includes as any)(H) || ((((o as any).nodesInRelativeHorizontal as any).push as any)(H), (((o as any).nodeToRelativeConstraintMapHorizontal as any).set as any)(H, []), (((o as any).dummyToNodeForVerticalAlignment as any).has as any)(H) ? (((o as any).nodeToTempPositionMapHorizontal as any).set as any)(H, (((((o as any).idToNodeMap as any).get as any)(((((o as any).dummyToNodeForVerticalAlignment as any).get as any)(H) as any)[0]) as any).getCenterX as any)()) : (((o as any).nodeToTempPositionMapHorizontal as any).set as any)(H, (((((o as any).idToNodeMap as any).get as any)(H) as any).getCenterX as any)())), (((o as any).nodesInRelativeHorizontal as any).includes as any)(k) || ((((o as any).nodesInRelativeHorizontal as any).push as any)(k), (((o as any).nodeToRelativeConstraintMapHorizontal as any).set as any)(k, []), (((o as any).dummyToNodeForVerticalAlignment as any).has as any)(k) ? (((o as any).nodeToTempPositionMapHorizontal as any).set as any)(k, (((((o as any).idToNodeMap as any).get as any)(((((o as any).dummyToNodeForVerticalAlignment as any).get as any)(k) as any)[0]) as any).getCenterX as any)()) : (((o as any).nodeToTempPositionMapHorizontal as any).set as any)(k, (((((o as any).idToNodeMap as any).get as any)(k) as any).getCenterX as any)())), (((((o as any).nodeToRelativeConstraintMapHorizontal as any).get as any)(H) as any).push as any)({
                        right: k,
                        gap: (D as any).gap
                      }), (((((o as any).nodeToRelativeConstraintMapHorizontal as any).get as any)(k) as any).push as any)({
                        left: H,
                        gap: (D as any).gap
                      });
                    } else {
                      var tt: any = ((F as any).has as any)((D as any).top) ? ((F as any).get as any)((D as any).top) : (D as any).top,
                        ht: any = ((F as any).has as any)((D as any).bottom) ? ((F as any).get as any)((D as any).bottom) : (D as any).bottom;
                      (((o as any).nodesInRelativeVertical as any).includes as any)(tt) || ((((o as any).nodesInRelativeVertical as any).push as any)(tt), (((o as any).nodeToRelativeConstraintMapVertical as any).set as any)(tt, []), (((o as any).dummyToNodeForHorizontalAlignment as any).has as any)(tt) ? (((o as any).nodeToTempPositionMapVertical as any).set as any)(tt, (((((o as any).idToNodeMap as any).get as any)(((((o as any).dummyToNodeForHorizontalAlignment as any).get as any)(tt) as any)[0]) as any).getCenterY as any)()) : (((o as any).nodeToTempPositionMapVertical as any).set as any)(tt, (((((o as any).idToNodeMap as any).get as any)(tt) as any).getCenterY as any)())), (((o as any).nodesInRelativeVertical as any).includes as any)(ht) || ((((o as any).nodesInRelativeVertical as any).push as any)(ht), (((o as any).nodeToRelativeConstraintMapVertical as any).set as any)(ht, []), (((o as any).dummyToNodeForHorizontalAlignment as any).has as any)(ht) ? (((o as any).nodeToTempPositionMapVertical as any).set as any)(ht, (((((o as any).idToNodeMap as any).get as any)(((((o as any).dummyToNodeForHorizontalAlignment as any).get as any)(ht) as any)[0]) as any).getCenterY as any)()) : (((o as any).nodeToTempPositionMapVertical as any).set as any)(ht, (((((o as any).idToNodeMap as any).get as any)(ht) as any).getCenterY as any)())), (((((o as any).nodeToRelativeConstraintMapVertical as any).get as any)(tt) as any).push as any)({
                        bottom: ht,
                        gap: (D as any).gap
                      }), (((((o as any).nodeToRelativeConstraintMapVertical as any).get as any)(ht) as any).push as any)({
                        top: tt,
                        gap: (D as any).gap
                      });
                    }
                  });else {
                    var Q: any = new (Map as any)(),
                      z: any = new (Map as any)();
                    ((((this as any).constraints as any).relativePlacementConstraint as any).forEach as any)(function (this: any, D: any): any {
                      if ((D as any).left) {
                        var H: any = ((O as any).has as any)((D as any).left) ? ((O as any).get as any)((D as any).left) : (D as any).left,
                          k: any = ((O as any).has as any)((D as any).right) ? ((O as any).get as any)((D as any).right) : (D as any).right;
                        ((Q as any).has as any)(H) ? ((((Q as any).get as any)(H) as any).push as any)(k) : ((Q as any).set as any)(H, [k]), ((Q as any).has as any)(k) ? ((((Q as any).get as any)(k) as any).push as any)(H) : ((Q as any).set as any)(k, [H]);
                      } else {
                        var tt: any = ((F as any).has as any)((D as any).top) ? ((F as any).get as any)((D as any).top) : (D as any).top,
                          ht: any = ((F as any).has as any)((D as any).bottom) ? ((F as any).get as any)((D as any).bottom) : (D as any).bottom;
                        ((z as any).has as any)(tt) ? ((((z as any).get as any)(tt) as any).push as any)(ht) : ((z as any).set as any)(tt, [ht]), ((z as any).has as any)(ht) ? ((((z as any).get as any)(ht) as any).push as any)(tt) : ((z as any).set as any)(ht, [tt]);
                      }
                    });
                    var X: any = function (this: any, H: any, k: any): any {
                        var tt: any = [],
                          ht: any = [],
                          J: any = new (V as any)(),
                          It: any = new (Set as any)(),
                          Nt: any = 0;
                        return ((H as any).forEach as any)(function (this: any, vt: any, it: any): any {
                          if (!((It as any).has as any)(it)) {
                            (tt as any)[Nt] = [], (ht as any)[Nt] = !1;
                            var ut: any = it;
                            for (((J as any).push as any)(ut), ((It as any).add as any)(ut), (((tt as any)[Nt] as any).push as any)(ut); ((J as any).length as any) != (0 as any);) {
                              ut = ((J as any).shift as any)(), ((k as any).has as any)(ut) && ((ht as any)[Nt] = !0);
                              var Et: any = ((H as any).get as any)(ut);
                              ((Et as any).forEach as any)(function (this: any, wt: any): any {
                                ((It as any).has as any)(wt) || (((J as any).push as any)(wt), ((It as any).add as any)(wt), (((tt as any)[Nt] as any).push as any)(wt));
                              });
                            }
                            Nt++;
                          }
                        }), {
                          components: tt,
                          isFixed: ht
                        };
                      },
                      rt: any = (X as any)(Q, (o as any).fixedNodesOnHorizontal);
                    (this as any).componentsOnHorizontal = (rt as any).components, (this as any).fixedComponentsOnHorizontal = (rt as any).isFixed;
                    var $: any = (X as any)(z, (o as any).fixedNodesOnVertical);
                    (this as any).componentsOnVertical = ($ as any).components, (this as any).fixedComponentsOnVertical = ($ as any).isFixed;
                  }
                }
              }, ((M as any).prototype as any).updateDisplacements = function (this: any): any {
                var o: any = this;
                if (((this as any).constraints as any).fixedNodeConstraint && ((((this as any).constraints as any).fixedNodeConstraint as any).forEach as any)(function (this: any, $: any): any {
                  var D: any = (((o as any).idToNodeMap as any).get as any)(($ as any).nodeId);
                  (D as any).displacementX = 0, (D as any).displacementY = 0;
                }), ((this as any).constraints as any).alignmentConstraint) {
                  if ((((this as any).constraints as any).alignmentConstraint as any).vertical) for (var E: any = (((this as any).constraints as any).alignmentConstraint as any).vertical, p: any = 0; (p as any) < ((E as any).length as any); p++) {
                    for (var m: any = 0, y: any = 0; (y as any) < (((E as any)[p] as any).length as any); y++) {
                      if ((((this as any).fixedNodeSet as any).has as any)(((E as any)[p] as any)[y])) {
                        m = 0;
                        break;
                      }
                      m += ((((this as any).idToNodeMap as any).get as any)(((E as any)[p] as any)[y]) as any).displacementX;
                    }
                    for (var S: any = (m as any) / (((E as any)[p] as any).length as any), y: any = 0; (y as any) < (((E as any)[p] as any).length as any); y++) ((((this as any).idToNodeMap as any).get as any)(((E as any)[p] as any)[y]) as any).displacementX = S;
                  }
                  if ((((this as any).constraints as any).alignmentConstraint as any).horizontal) for (var O: any = (((this as any).constraints as any).alignmentConstraint as any).horizontal, p: any = 0; (p as any) < ((O as any).length as any); p++) {
                    for (var F: any = 0, y: any = 0; (y as any) < (((O as any)[p] as any).length as any); y++) {
                      if ((((this as any).fixedNodeSet as any).has as any)(((O as any)[p] as any)[y])) {
                        F = 0;
                        break;
                      }
                      F += ((((this as any).idToNodeMap as any).get as any)(((O as any)[p] as any)[y]) as any).displacementY;
                    }
                    for (var W: any = (F as any) / (((O as any)[p] as any).length as any), y: any = 0; (y as any) < (((O as any)[p] as any).length as any); y++) ((((this as any).idToNodeMap as any).get as any)(((O as any)[p] as any)[y]) as any).displacementY = W;
                  }
                }
                if (((this as any).constraints as any).relativePlacementConstraint) if ((n as any).RELAX_MOVEMENT_ON_CONSTRAINTS) (((this as any).totalIterations as any) % (10 as any) as any) == (0 as any) && (((this as any).shuffle as any)((this as any).nodesInRelativeHorizontal), ((this as any).shuffle as any)((this as any).nodesInRelativeVertical)), (((this as any).nodesInRelativeHorizontal as any).forEach as any)(function (this: any, $: any): any {
                  if (!(((o as any).fixedNodesOnHorizontal as any).has as any)($)) {
                    var D: any = 0;
                    (((o as any).dummyToNodeForVerticalAlignment as any).has as any)($) ? D = ((((o as any).idToNodeMap as any).get as any)(((((o as any).dummyToNodeForVerticalAlignment as any).get as any)($) as any)[0]) as any).displacementX : D = ((((o as any).idToNodeMap as any).get as any)($) as any).displacementX, (((((o as any).nodeToRelativeConstraintMapHorizontal as any).get as any)($) as any).forEach as any)(function (this: any, H: any): any {
                      if ((H as any).right) {
                        var k: any = (((((o as any).nodeToTempPositionMapHorizontal as any).get as any)((H as any).right) as any) - ((((o as any).nodeToTempPositionMapHorizontal as any).get as any)($) as any) as any) - (D as any);
                        (k as any) < ((H as any).gap as any) && (D -= ((H as any).gap as any) - (k as any));
                      } else {
                        var k: any = (((((o as any).nodeToTempPositionMapHorizontal as any).get as any)($) as any) - ((((o as any).nodeToTempPositionMapHorizontal as any).get as any)((H as any).left) as any) as any) + (D as any);
                        (k as any) < ((H as any).gap as any) && (D += ((H as any).gap as any) - (k as any));
                      }
                    }), (((o as any).nodeToTempPositionMapHorizontal as any).set as any)($, ((((o as any).nodeToTempPositionMapHorizontal as any).get as any)($) as any) + (D as any)), (((o as any).dummyToNodeForVerticalAlignment as any).has as any)($) ? (((((o as any).dummyToNodeForVerticalAlignment as any).get as any)($) as any).forEach as any)(function (this: any, H: any): any {
                      ((((o as any).idToNodeMap as any).get as any)(H) as any).displacementX = D;
                    }) : ((((o as any).idToNodeMap as any).get as any)($) as any).displacementX = D;
                  }
                }), (((this as any).nodesInRelativeVertical as any).forEach as any)(function (this: any, $: any): any {
                  if (!(((o as any).fixedNodesOnHorizontal as any).has as any)($)) {
                    var D: any = 0;
                    (((o as any).dummyToNodeForHorizontalAlignment as any).has as any)($) ? D = ((((o as any).idToNodeMap as any).get as any)(((((o as any).dummyToNodeForHorizontalAlignment as any).get as any)($) as any)[0]) as any).displacementY : D = ((((o as any).idToNodeMap as any).get as any)($) as any).displacementY, (((((o as any).nodeToRelativeConstraintMapVertical as any).get as any)($) as any).forEach as any)(function (this: any, H: any): any {
                      if ((H as any).bottom) {
                        var k: any = (((((o as any).nodeToTempPositionMapVertical as any).get as any)((H as any).bottom) as any) - ((((o as any).nodeToTempPositionMapVertical as any).get as any)($) as any) as any) - (D as any);
                        (k as any) < ((H as any).gap as any) && (D -= ((H as any).gap as any) - (k as any));
                      } else {
                        var k: any = (((((o as any).nodeToTempPositionMapVertical as any).get as any)($) as any) - ((((o as any).nodeToTempPositionMapVertical as any).get as any)((H as any).top) as any) as any) + (D as any);
                        (k as any) < ((H as any).gap as any) && (D += ((H as any).gap as any) - (k as any));
                      }
                    }), (((o as any).nodeToTempPositionMapVertical as any).set as any)($, ((((o as any).nodeToTempPositionMapVertical as any).get as any)($) as any) + (D as any)), (((o as any).dummyToNodeForHorizontalAlignment as any).has as any)($) ? (((((o as any).dummyToNodeForHorizontalAlignment as any).get as any)($) as any).forEach as any)(function (this: any, H: any): any {
                      ((((o as any).idToNodeMap as any).get as any)(H) as any).displacementY = D;
                    }) : ((((o as any).idToNodeMap as any).get as any)($) as any).displacementY = D;
                  }
                });else {
                  for (var p: any = 0; (p as any) < (((this as any).componentsOnHorizontal as any).length as any); p++) {
                    var I: any = ((this as any).componentsOnHorizontal as any)[p];
                    if (((this as any).fixedComponentsOnHorizontal as any)[p]) for (var y: any = 0; (y as any) < ((I as any).length as any); y++) (((this as any).dummyToNodeForVerticalAlignment as any).has as any)((I as any)[y]) ? (((((this as any).dummyToNodeForVerticalAlignment as any).get as any)((I as any)[y]) as any).forEach as any)(function (this: any, H: any): any {
                      ((((o as any).idToNodeMap as any).get as any)(H) as any).displacementX = 0;
                    }) : ((((this as any).idToNodeMap as any).get as any)((I as any)[y]) as any).displacementX = 0;else {
                      for (var Q: any = 0, z: any = 0, y: any = 0; (y as any) < ((I as any).length as any); y++) if ((((this as any).dummyToNodeForVerticalAlignment as any).has as any)((I as any)[y])) {
                        var X: any = (((this as any).dummyToNodeForVerticalAlignment as any).get as any)((I as any)[y]);
                        Q += ((X as any).length as any) * (((((this as any).idToNodeMap as any).get as any)((X as any)[0]) as any).displacementX as any), z += (X as any).length;
                      } else Q += ((((this as any).idToNodeMap as any).get as any)((I as any)[y]) as any).displacementX, z++;
                      for (var rt: any = (Q as any) / (z as any), y: any = 0; (y as any) < ((I as any).length as any); y++) (((this as any).dummyToNodeForVerticalAlignment as any).has as any)((I as any)[y]) ? (((((this as any).dummyToNodeForVerticalAlignment as any).get as any)((I as any)[y]) as any).forEach as any)(function (this: any, H: any): any {
                        ((((o as any).idToNodeMap as any).get as any)(H) as any).displacementX = rt;
                      }) : ((((this as any).idToNodeMap as any).get as any)((I as any)[y]) as any).displacementX = rt;
                    }
                  }
                  for (var p: any = 0; (p as any) < (((this as any).componentsOnVertical as any).length as any); p++) {
                    var I: any = ((this as any).componentsOnVertical as any)[p];
                    if (((this as any).fixedComponentsOnVertical as any)[p]) for (var y: any = 0; (y as any) < ((I as any).length as any); y++) (((this as any).dummyToNodeForHorizontalAlignment as any).has as any)((I as any)[y]) ? (((((this as any).dummyToNodeForHorizontalAlignment as any).get as any)((I as any)[y]) as any).forEach as any)(function (this: any, k: any): any {
                      ((((o as any).idToNodeMap as any).get as any)(k) as any).displacementY = 0;
                    }) : ((((this as any).idToNodeMap as any).get as any)((I as any)[y]) as any).displacementY = 0;else {
                      for (var Q: any = 0, z: any = 0, y: any = 0; (y as any) < ((I as any).length as any); y++) if ((((this as any).dummyToNodeForHorizontalAlignment as any).has as any)((I as any)[y])) {
                        var X: any = (((this as any).dummyToNodeForHorizontalAlignment as any).get as any)((I as any)[y]);
                        Q += ((X as any).length as any) * (((((this as any).idToNodeMap as any).get as any)((X as any)[0]) as any).displacementY as any), z += (X as any).length;
                      } else Q += ((((this as any).idToNodeMap as any).get as any)((I as any)[y]) as any).displacementY, z++;
                      for (var rt: any = (Q as any) / (z as any), y: any = 0; (y as any) < ((I as any).length as any); y++) (((this as any).dummyToNodeForHorizontalAlignment as any).has as any)((I as any)[y]) ? (((((this as any).dummyToNodeForHorizontalAlignment as any).get as any)((I as any)[y]) as any).forEach as any)(function (this: any, J: any): any {
                        ((((o as any).idToNodeMap as any).get as any)(J) as any).displacementY = rt;
                      }) : ((((this as any).idToNodeMap as any).get as any)((I as any)[y]) as any).displacementY = rt;
                    }
                  }
                }
              }, ((M as any).prototype as any).calculateNodesToApplyGravitationTo = function (this: any): any {
                var o: any = [],
                  E: any,
                  p: any = (((this as any).graphManager as any).getGraphs as any)(),
                  m: any = (p as any).length,
                  y: any;
                for (y = 0; (y as any) < (m as any); y++) E = (p as any)[y], ((E as any).updateConnected as any)(), (E as any).isConnected || (o = ((o as any).concat as any)(((E as any).getNodes as any)()));
                return o;
              }, ((M as any).prototype as any).createBendpoints = function (this: any): any {
                var o: any = [];
                o = ((o as any).concat as any)((((this as any).graphManager as any).getAllEdges as any)());
                var E: any = new (Set as any)(),
                  p: any;
                for (p = 0; (p as any) < ((o as any).length as any); p++) {
                  var m: any = (o as any)[p];
                  if (!((E as any).has as any)(m)) {
                    var y: any = ((m as any).getSource as any)(),
                      S: any = ((m as any).getTarget as any)();
                    if ((y as any) == (S as any)) ((((m as any).getBendpoints as any)() as any).push as any)(new (d as any)()), ((((m as any).getBendpoints as any)() as any).push as any)(new (d as any)()), ((this as any).createDummyNodesForBendpoints as any)(m), ((E as any).add as any)(m);else {
                      var O: any = [];
                      if (O = ((O as any).concat as any)(((y as any).getEdgeListToNode as any)(S)), O = ((O as any).concat as any)(((S as any).getEdgeListToNode as any)(y)), !((E as any).has as any)((O as any)[0])) {
                        if (((O as any).length as any) > (1 as any)) {
                          var F: any;
                          for (F = 0; (F as any) < ((O as any).length as any); F++) {
                            var W: any = (O as any)[F];
                            ((((W as any).getBendpoints as any)() as any).push as any)(new (d as any)()), ((this as any).createDummyNodesForBendpoints as any)(W);
                          }
                        }
                        ((O as any).forEach as any)(function (this: any, I: any): any {
                          ((E as any).add as any)(I);
                        });
                      }
                    }
                  }
                  if (((E as any).size as any) == ((o as any).length as any)) break;
                }
              }, ((M as any).prototype as any).positionNodesRadially = function (this: any, o: any): any {
                for (var E: any = new (u as any)(0, 0), p: any = ((Math as any).ceil as any)(((Math as any).sqrt as any)((o as any).length)), m: any = 0, y: any = 0, S: any = 0, O: any = new (d as any)(0, 0), F: any = 0; (F as any) < ((o as any).length as any); F++) {
                  ((F as any) % (p as any) as any) == (0 as any) && (S = 0, y = m, (F as any) != (0 as any) && (y += (n as any).DEFAULT_COMPONENT_SEPERATION), m = 0);
                  var W: any = (o as any)[F],
                    I: any = ((b as any).findCenterOfTree as any)(W);
                  (E as any).x = S, (E as any).y = y, O = ((M as any).radialLayout as any)(W, I, E), ((O as any).y as any) > (m as any) && (m = ((Math as any).floor as any)((O as any).y)), S = ((Math as any).floor as any)(((O as any).x as any) + ((n as any).DEFAULT_COMPONENT_SEPERATION as any));
                }
                ((this as any).transform as any)(new (d as any)(((T as any).WORLD_CENTER_X as any) - (((O as any).x as any) / (2 as any) as any), ((T as any).WORLD_CENTER_Y as any) - (((O as any).y as any) / (2 as any) as any)));
              }, (M as any).radialLayout = function (this: any, o: any, E: any, p: any): any {
                var m: any = ((Math as any).max as any)(((this as any).maxDiagonalInTree as any)(o), (n as any).DEFAULT_RADIAL_SEPARATION);
                ((M as any).branchRadialLayout as any)(E, null, 0, 359, 0, m);
                var y: any = ((B as any).calculateBounds as any)(o),
                  S: any = new (U as any)();
                ((S as any).setDeviceOrgX as any)(((y as any).getMinX as any)()), ((S as any).setDeviceOrgY as any)(((y as any).getMinY as any)()), ((S as any).setWorldOrgX as any)((p as any).x), ((S as any).setWorldOrgY as any)((p as any).y);
                for (var O: any = 0; (O as any) < ((o as any).length as any); O++) {
                  var F: any = (o as any)[O];
                  ((F as any).transform as any)(S);
                }
                var W: any = new (d as any)(((y as any).getMaxX as any)(), ((y as any).getMaxY as any)());
                return ((S as any).inverseTransformPoint as any)(W);
              }, (M as any).branchRadialLayout = function (this: any, o: any, E: any, p: any, m: any, y: any, S: any): any {
                var O: any = (((m as any) - (p as any) as any) + (1 as any) as any) / (2 as any);
                (O as any) < (0 as any) && (O += 180);
                var F: any = ((O as any) + (p as any) as any) % (360 as any),
                  W: any = ((F as any) * ((G as any).TWO_PI as any) as any) / (360 as any),
                  I: any = (y as any) * (((Math as any).cos as any)(W) as any),
                  Q: any = (y as any) * (((Math as any).sin as any)(W) as any);
                ((o as any).setCenter as any)(I, Q);
                var z: any = [];
                z = ((z as any).concat as any)(((o as any).getEdges as any)());
                var X: any = (z as any).length;
                (E as any) != (null as any) && X--;
                for (var rt: any = 0, $: any = (z as any).length, D: any, H: any = ((o as any).getEdgesBetween as any)(E); ((H as any).length as any) > (1 as any);) {
                  var k: any = (H as any)[0];
                  ((H as any).splice as any)(0, 1);
                  var tt: any = ((z as any).indexOf as any)(k);
                  (tt as any) >= (0 as any) && ((z as any).splice as any)(tt, 1), $--, X--;
                }
                (E as any) != (null as any) ? D = ((((z as any).indexOf as any)((H as any)[0]) as any) + (1 as any) as any) % ($ as any) : D = 0;
                for (var ht: any = (((Math as any).abs as any)((m as any) - (p as any)) as any) / (X as any), J: any = D; (rt as any) != (X as any); J = (++J as any) % ($ as any)) {
                  var It: any = (((z as any)[J] as any).getOtherEnd as any)(o);
                  if ((It as any) != (E as any)) {
                    var Nt: any = ((p as any) + ((rt as any) * (ht as any) as any) as any) % (360 as any),
                      vt: any = ((Nt as any) + (ht as any) as any) % (360 as any);
                    ((M as any).branchRadialLayout as any)(It, o, Nt, vt, (y as any) + (S as any), S), rt++;
                  }
                }
              }, (M as any).maxDiagonalInTree = function (this: any, o: any): any {
                for (var E: any = (w as any).MIN_VALUE, p: any = 0; (p as any) < ((o as any).length as any); p++) {
                  var m: any = (o as any)[p],
                    y: any = ((m as any).getDiagonal as any)();
                  (y as any) > (E as any) && (E = y);
                }
                return E;
              }, ((M as any).prototype as any).calcRepulsionRange = function (this: any): any {
                return ((2 as any) * (((this as any).level as any) + (1 as any) as any) as any) * ((this as any).idealEdgeLength as any);
              }, ((M as any).prototype as any).groupZeroDegreeMembers = function (this: any): any {
                var o: any = this,
                  E: any = {};
                (this as any).memberGroups = {}, (this as any).idToDummyNode = {};
                for (var p: any = [], m: any = (((this as any).graphManager as any).getAllNodes as any)(), y: any = 0; (y as any) < ((m as any).length as any); y++) {
                  var S: any = (m as any)[y],
                    O: any = ((S as any).getParent as any)();
                  (((this as any).getNodeDegreeWithChildren as any)(S) as any) === (0 as any) && (((O as any).id as any) == (null as any) || !((this as any).getToBeTiled as any)(O)) && ((p as any).push as any)(S);
                }
                for (var y: any = 0; (y as any) < ((p as any).length as any); y++) {
                  var S: any = (p as any)[y],
                    F: any = (((S as any).getParent as any)() as any).id;
                  (typeof (E as any)[F] as any) > ("u" as any) && ((E as any)[F] = []), (E as any)[F] = (((E as any)[F] as any).concat as any)(S);
                }
                ((((Object as any).keys as any)(E) as any).forEach as any)(function (this: any, W: any): any {
                  if ((((E as any)[W] as any).length as any) > (1 as any)) {
                    var I: any = ("DummyCompound_" as any) + (W as any);
                    ((o as any).memberGroups as any)[I] = (E as any)[W];
                    var Q: any = ((((E as any)[W] as any)[0] as any).getParent as any)(),
                      z: any = new (t as any)((o as any).graphManager);
                    (z as any).id = I, (z as any).paddingLeft = (Q as any).paddingLeft || 0, (z as any).paddingRight = (Q as any).paddingRight || 0, (z as any).paddingBottom = (Q as any).paddingBottom || 0, (z as any).paddingTop = (Q as any).paddingTop || 0, ((o as any).idToDummyNode as any)[I] = z;
                    var X: any = ((((o as any).getGraphManager as any)() as any).add as any)(((o as any).newGraph as any)(), z),
                      rt: any = ((Q as any).getChild as any)();
                    ((rt as any).add as any)(z);
                    for (var $: any = 0; ($ as any) < (((E as any)[W] as any).length as any); $++) {
                      var D: any = ((E as any)[W] as any)[$];
                      ((rt as any).remove as any)(D), ((X as any).add as any)(D);
                    }
                  }
                });
              }, ((M as any).prototype as any).clearCompounds = function (this: any): any {
                var o: any = {},
                  E: any = {};
                ((this as any).performDFSOnCompounds as any)();
                for (var p: any = 0; (p as any) < (((this as any).compoundOrder as any).length as any); p++) (E as any)[(((this as any).compoundOrder as any)[p] as any).id] = ((this as any).compoundOrder as any)[p], (o as any)[(((this as any).compoundOrder as any)[p] as any).id] = (([] as any).concat as any)(((((((this as any).compoundOrder as any)[p] as any).getChild as any)() as any).getNodes as any)()), (((this as any).graphManager as any).remove as any)(((((this as any).compoundOrder as any)[p] as any).getChild as any)()), (((this as any).compoundOrder as any)[p] as any).child = null;
                (((this as any).graphManager as any).resetAllNodes as any)(), ((this as any).tileCompoundMembers as any)(o, E);
              }, ((M as any).prototype as any).clearZeroDegreeMembers = function (this: any): any {
                var o: any = this,
                  E: any = (this as any).tiledZeroDegreePack = [];
                ((((Object as any).keys as any)((this as any).memberGroups) as any).forEach as any)(function (this: any, p: any): any {
                  var m: any = ((o as any).idToDummyNode as any)[p];
                  if ((E as any)[p] = ((o as any).tileNodes as any)(((o as any).memberGroups as any)[p], ((m as any).paddingLeft as any) + ((m as any).paddingRight as any)), ((m as any).rect as any).width = ((E as any)[p] as any).width, ((m as any).rect as any).height = ((E as any)[p] as any).height, ((m as any).setCenter as any)(((E as any)[p] as any).centerX, ((E as any)[p] as any).centerY), (m as any).labelMarginLeft = 0, (m as any).labelMarginTop = 0, (n as any).NODE_DIMENSIONS_INCLUDE_LABELS) {
                    var y: any = ((m as any).rect as any).width,
                      S: any = ((m as any).rect as any).height;
                    (m as any).labelWidth && (((m as any).labelPosHorizontal as any) == ("left" as any) ? (((m as any).rect as any).x -= (m as any).labelWidth, ((m as any).setWidth as any)((y as any) + ((m as any).labelWidth as any)), (m as any).labelMarginLeft = (m as any).labelWidth) : ((m as any).labelPosHorizontal as any) == ("center" as any) && ((m as any).labelWidth as any) > (y as any) ? (((m as any).rect as any).x -= (((m as any).labelWidth as any) - (y as any) as any) / (2 as any), ((m as any).setWidth as any)((m as any).labelWidth), (m as any).labelMarginLeft = (((m as any).labelWidth as any) - (y as any) as any) / (2 as any)) : ((m as any).labelPosHorizontal as any) == ("right" as any) && ((m as any).setWidth as any)((y as any) + ((m as any).labelWidth as any))), (m as any).labelHeight && (((m as any).labelPosVertical as any) == ("top" as any) ? (((m as any).rect as any).y -= (m as any).labelHeight, ((m as any).setHeight as any)((S as any) + ((m as any).labelHeight as any)), (m as any).labelMarginTop = (m as any).labelHeight) : ((m as any).labelPosVertical as any) == ("center" as any) && ((m as any).labelHeight as any) > (S as any) ? (((m as any).rect as any).y -= (((m as any).labelHeight as any) - (S as any) as any) / (2 as any), ((m as any).setHeight as any)((m as any).labelHeight), (m as any).labelMarginTop = (((m as any).labelHeight as any) - (S as any) as any) / (2 as any)) : ((m as any).labelPosVertical as any) == ("bottom" as any) && ((m as any).setHeight as any)((S as any) + ((m as any).labelHeight as any)));
                  }
                });
              }, ((M as any).prototype as any).repopulateCompounds = function (this: any): any {
                for (var o: any = (((this as any).compoundOrder as any).length as any) - (1 as any); (o as any) >= (0 as any); o--) {
                  var E: any = ((this as any).compoundOrder as any)[o],
                    p: any = (E as any).id,
                    m: any = (E as any).paddingLeft,
                    y: any = (E as any).paddingTop,
                    S: any = (E as any).labelMarginLeft,
                    O: any = (E as any).labelMarginTop;
                  ((this as any).adjustLocations as any)(((this as any).tiledMemberPack as any)[p], ((E as any).rect as any).x, ((E as any).rect as any).y, m, y, S, O);
                }
              }, ((M as any).prototype as any).repopulateZeroDegreeMembers = function (this: any): any {
                var o: any = this,
                  E: any = (this as any).tiledZeroDegreePack;
                ((((Object as any).keys as any)(E) as any).forEach as any)(function (this: any, p: any): any {
                  var m: any = ((o as any).idToDummyNode as any)[p],
                    y: any = (m as any).paddingLeft,
                    S: any = (m as any).paddingTop,
                    O: any = (m as any).labelMarginLeft,
                    F: any = (m as any).labelMarginTop;
                  ((o as any).adjustLocations as any)((E as any)[p], ((m as any).rect as any).x, ((m as any).rect as any).y, y, S, O, F);
                });
              }, ((M as any).prototype as any).getToBeTiled = function (this: any, o: any): any {
                var E: any = (o as any).id;
                if ((((this as any).toBeTiled as any)[E] as any) != (null as any)) return ((this as any).toBeTiled as any)[E];
                var p: any = ((o as any).getChild as any)();
                if ((p as any) == (null as any)) return ((this as any).toBeTiled as any)[E] = !1, !1;
                for (var m: any = ((p as any).getNodes as any)(), y: any = 0; (y as any) < ((m as any).length as any); y++) {
                  var S: any = (m as any)[y];
                  if ((((this as any).getNodeDegree as any)(S) as any) > (0 as any)) return ((this as any).toBeTiled as any)[E] = !1, !1;
                  if ((((S as any).getChild as any)() as any) == (null as any)) {
                    ((this as any).toBeTiled as any)[(S as any).id] = !1;
                    continue;
                  }
                  if (!((this as any).getToBeTiled as any)(S)) return ((this as any).toBeTiled as any)[E] = !1, !1;
                }
                return ((this as any).toBeTiled as any)[E] = !0, !0;
              }, ((M as any).prototype as any).getNodeDegree = function (this: any, o: any): any {
                (o as any).id;
                for (var E: any = ((o as any).getEdges as any)(), p: any = 0, m: any = 0; (m as any) < ((E as any).length as any); m++) {
                  var y: any = (E as any)[m];
                  ((((y as any).getSource as any)() as any).id as any) !== ((((y as any).getTarget as any)() as any).id as any) && (p = (p as any) + (1 as any));
                }
                return p;
              }, ((M as any).prototype as any).getNodeDegreeWithChildren = function (this: any, o: any): any {
                var E: any = ((this as any).getNodeDegree as any)(o);
                if ((((o as any).getChild as any)() as any) == (null as any)) return E;
                for (var p: any = ((((o as any).getChild as any)() as any).getNodes as any)(), m: any = 0; (m as any) < ((p as any).length as any); m++) {
                  var y: any = (p as any)[m];
                  E += ((this as any).getNodeDegreeWithChildren as any)(y);
                }
                return E;
              }, ((M as any).prototype as any).performDFSOnCompounds = function (this: any): any {
                (this as any).compoundOrder = [], ((this as any).fillCompexOrderByDFS as any)((((((this as any).graphManager as any).getRoot as any)() as any).getNodes as any)());
              }, ((M as any).prototype as any).fillCompexOrderByDFS = function (this: any, o: any): any {
                for (var E: any = 0; (E as any) < ((o as any).length as any); E++) {
                  var p: any = (o as any)[E];
                  (((p as any).getChild as any)() as any) != (null as any) && ((this as any).fillCompexOrderByDFS as any)(((((p as any).getChild as any)() as any).getNodes as any)()), ((this as any).getToBeTiled as any)(p) && (((this as any).compoundOrder as any).push as any)(p);
                }
              }, ((M as any).prototype as any).adjustLocations = function (this: any, o: any, E: any, p: any, m: any, y: any, S: any, O: any): any {
                E += (m as any) + (S as any), p += (y as any) + (O as any);
                for (var F: any = E, W: any = 0; (W as any) < (((o as any).rows as any).length as any); W++) {
                  var I: any = ((o as any).rows as any)[W];
                  E = F;
                  for (var Q: any = 0, z: any = 0; (z as any) < ((I as any).length as any); z++) {
                    var X: any = (I as any)[z];
                    ((X as any).rect as any).x = E, ((X as any).rect as any).y = p, E += (((X as any).rect as any).width as any) + ((o as any).horizontalPadding as any), (((X as any).rect as any).height as any) > (Q as any) && (Q = ((X as any).rect as any).height);
                  }
                  p += (Q as any) + ((o as any).verticalPadding as any);
                }
              }, ((M as any).prototype as any).tileCompoundMembers = function (this: any, o: any, E: any): any {
                var p: any = this;
                (this as any).tiledMemberPack = [], ((((Object as any).keys as any)(o) as any).forEach as any)(function (this: any, m: any): any {
                  var y: any = (E as any)[m];
                  if (((p as any).tiledMemberPack as any)[m] = ((p as any).tileNodes as any)((o as any)[m], ((y as any).paddingLeft as any) + ((y as any).paddingRight as any)), ((y as any).rect as any).width = (((p as any).tiledMemberPack as any)[m] as any).width, ((y as any).rect as any).height = (((p as any).tiledMemberPack as any)[m] as any).height, ((y as any).setCenter as any)((((p as any).tiledMemberPack as any)[m] as any).centerX, (((p as any).tiledMemberPack as any)[m] as any).centerY), (y as any).labelMarginLeft = 0, (y as any).labelMarginTop = 0, (n as any).NODE_DIMENSIONS_INCLUDE_LABELS) {
                    var S: any = ((y as any).rect as any).width,
                      O: any = ((y as any).rect as any).height;
                    (y as any).labelWidth && (((y as any).labelPosHorizontal as any) == ("left" as any) ? (((y as any).rect as any).x -= (y as any).labelWidth, ((y as any).setWidth as any)((S as any) + ((y as any).labelWidth as any)), (y as any).labelMarginLeft = (y as any).labelWidth) : ((y as any).labelPosHorizontal as any) == ("center" as any) && ((y as any).labelWidth as any) > (S as any) ? (((y as any).rect as any).x -= (((y as any).labelWidth as any) - (S as any) as any) / (2 as any), ((y as any).setWidth as any)((y as any).labelWidth), (y as any).labelMarginLeft = (((y as any).labelWidth as any) - (S as any) as any) / (2 as any)) : ((y as any).labelPosHorizontal as any) == ("right" as any) && ((y as any).setWidth as any)((S as any) + ((y as any).labelWidth as any))), (y as any).labelHeight && (((y as any).labelPosVertical as any) == ("top" as any) ? (((y as any).rect as any).y -= (y as any).labelHeight, ((y as any).setHeight as any)((O as any) + ((y as any).labelHeight as any)), (y as any).labelMarginTop = (y as any).labelHeight) : ((y as any).labelPosVertical as any) == ("center" as any) && ((y as any).labelHeight as any) > (O as any) ? (((y as any).rect as any).y -= (((y as any).labelHeight as any) - (O as any) as any) / (2 as any), ((y as any).setHeight as any)((y as any).labelHeight), (y as any).labelMarginTop = (((y as any).labelHeight as any) - (O as any) as any) / (2 as any)) : ((y as any).labelPosVertical as any) == ("bottom" as any) && ((y as any).setHeight as any)((O as any) + ((y as any).labelHeight as any)));
                  }
                });
              }, ((M as any).prototype as any).tileNodes = function (this: any, o: any, E: any): any {
                var p: any = ((this as any).tileNodesByFavoringDim as any)(o, E, !0),
                  m: any = ((this as any).tileNodesByFavoringDim as any)(o, E, !1),
                  y: any = ((this as any).getOrgRatio as any)(p),
                  S: any = ((this as any).getOrgRatio as any)(m),
                  O: any;
                return (S as any) < (y as any) ? O = m : O = p, O;
              }, ((M as any).prototype as any).getOrgRatio = function (this: any, o: any): any {
                var E: any = (o as any).width,
                  p: any = (o as any).height,
                  m: any = (E as any) / (p as any);
                return (m as any) < (1 as any) && (m = (1 as any) / (m as any)), m;
              }, ((M as any).prototype as any).calcIdealRowWidth = function (this: any, o: any, E: any): any {
                var p: any = (n as any).TILING_PADDING_VERTICAL,
                  m: any = (n as any).TILING_PADDING_HORIZONTAL,
                  y: any = (o as any).length,
                  S: any = 0,
                  O: any = 0,
                  F: any = 0;
                ((o as any).forEach as any)(function (this: any, $: any): any {
                  S += (($ as any).getWidth as any)(), O += (($ as any).getHeight as any)(), ((($ as any).getWidth as any)() as any) > (F as any) && (F = (($ as any).getWidth as any)());
                });
                var W: any = (S as any) / (y as any),
                  I: any = (O as any) / (y as any),
                  Q: any = (((Math as any).pow as any)((p as any) - (m as any), 2) as any) + ((((4 as any) * ((W as any) + (m as any) as any) as any) * ((I as any) + (p as any) as any) as any) * (y as any) as any),
                  z: any = (((m as any) - (p as any) as any) + (((Math as any).sqrt as any)(Q) as any) as any) / ((2 as any) * ((W as any) + (m as any) as any) as any),
                  X: any;
                E ? (X = ((Math as any).ceil as any)(z), (X as any) == (z as any) && X++) : X = ((Math as any).floor as any)(z);
                var rt: any = ((X as any) * ((W as any) + (m as any) as any) as any) - (m as any);
                return (F as any) > (rt as any) && (rt = F), rt += (m as any) * (2 as any), rt;
              }, ((M as any).prototype as any).tileNodesByFavoringDim = function (this: any, o: any, E: any, p: any): any {
                var m: any = (n as any).TILING_PADDING_VERTICAL,
                  y: any = (n as any).TILING_PADDING_HORIZONTAL,
                  S: any = (n as any).TILING_COMPARE_BY,
                  O: any = {
                    rows: [],
                    rowWidth: [],
                    rowHeight: [],
                    width: 0,
                    height: E,
                    verticalPadding: m,
                    horizontalPadding: y,
                    centerX: 0,
                    centerY: 0
                  };
                S && ((O as any).idealRowWidth = ((this as any).calcIdealRowWidth as any)(o, p));
                var F: any = function (this: any, D: any): any {
                    return (((D as any).rect as any).width as any) * (((D as any).rect as any).height as any);
                  },
                  W: any = function (this: any, D: any, H: any): any {
                    return ((F as any)(H) as any) - ((F as any)(D) as any);
                  };
                ((o as any).sort as any)(function (this: any, $: any, D: any): any {
                  var H: any = W;
                  return (O as any).idealRowWidth ? (H = S, (H as any)(($ as any).id, (D as any).id)) : (H as any)($, D);
                });
                for (var I: any = 0, Q: any = 0, z: any = 0; (z as any) < ((o as any).length as any); z++) {
                  var X: any = (o as any)[z];
                  I += ((X as any).getCenterX as any)(), Q += ((X as any).getCenterY as any)();
                }
                (O as any).centerX = (I as any) / ((o as any).length as any), (O as any).centerY = (Q as any) / ((o as any).length as any);
                for (var z: any = 0; (z as any) < ((o as any).length as any); z++) {
                  var X: any = (o as any)[z];
                  if ((((O as any).rows as any).length as any) == (0 as any)) ((this as any).insertNodeToRow as any)(O, X, 0, E);else if (((this as any).canAddHorizontal as any)(O, ((X as any).rect as any).width, ((X as any).rect as any).height)) {
                    var rt: any = (((O as any).rows as any).length as any) - (1 as any);
                    (O as any).idealRowWidth || (rt = ((this as any).getShortestRowIndex as any)(O)), ((this as any).insertNodeToRow as any)(O, X, rt, E);
                  } else ((this as any).insertNodeToRow as any)(O, X, ((O as any).rows as any).length, E);
                  ((this as any).shiftToLastRow as any)(O);
                }
                return O;
              }, ((M as any).prototype as any).insertNodeToRow = function (this: any, o: any, E: any, p: any, m: any): any {
                var y: any = m;
                if ((p as any) == (((o as any).rows as any).length as any)) {
                  var S: any = [];
                  (((o as any).rows as any).push as any)(S), (((o as any).rowWidth as any).push as any)(y), (((o as any).rowHeight as any).push as any)(0);
                }
                var O: any = (((o as any).rowWidth as any)[p] as any) + (((E as any).rect as any).width as any);
                ((((o as any).rows as any)[p] as any).length as any) > (0 as any) && (O += (o as any).horizontalPadding), ((o as any).rowWidth as any)[p] = O, ((o as any).width as any) < (O as any) && ((o as any).width = O);
                var F: any = ((E as any).rect as any).height;
                (p as any) > (0 as any) && (F += (o as any).verticalPadding);
                var W: any = 0;
                (F as any) > (((o as any).rowHeight as any)[p] as any) && (W = ((o as any).rowHeight as any)[p], ((o as any).rowHeight as any)[p] = F, W = (((o as any).rowHeight as any)[p] as any) - (W as any)), (o as any).height += W, ((((o as any).rows as any)[p] as any).push as any)(E);
              }, ((M as any).prototype as any).getShortestRowIndex = function (this: any, o: any): any {
                for (var E: any = -1, p: any = (Number as any).MAX_VALUE, m: any = 0; (m as any) < (((o as any).rows as any).length as any); m++) (((o as any).rowWidth as any)[m] as any) < (p as any) && (E = m, p = ((o as any).rowWidth as any)[m]);
                return E;
              }, ((M as any).prototype as any).getLongestRowIndex = function (this: any, o: any): any {
                for (var E: any = -1, p: any = (Number as any).MIN_VALUE, m: any = 0; (m as any) < (((o as any).rows as any).length as any); m++) (((o as any).rowWidth as any)[m] as any) > (p as any) && (E = m, p = ((o as any).rowWidth as any)[m]);
                return E;
              }, ((M as any).prototype as any).canAddHorizontal = function (this: any, o: any, E: any, p: any): any {
                if ((o as any).idealRowWidth) {
                  var m: any = (((o as any).rows as any).length as any) - (1 as any),
                    y: any = ((o as any).rowWidth as any)[m];
                  return (((y as any) + (E as any) as any) + ((o as any).horizontalPadding as any) as any) <= ((o as any).idealRowWidth as any);
                }
                var S: any = ((this as any).getShortestRowIndex as any)(o);
                if ((S as any) < (0 as any)) return !0;
                var O: any = ((o as any).rowWidth as any)[S];
                if ((((O as any) + ((o as any).horizontalPadding as any) as any) + (E as any) as any) <= ((o as any).width as any)) return !0;
                var F: any = 0;
                (((o as any).rowHeight as any)[S] as any) < (p as any) && (S as any) > (0 as any) && (F = ((p as any) + ((o as any).verticalPadding as any) as any) - (((o as any).rowHeight as any)[S] as any));
                var W: any;
                (((o as any).width as any) - (O as any) as any) >= ((E as any) + ((o as any).horizontalPadding as any) as any) ? W = (((o as any).height as any) + (F as any) as any) / (((O as any) + (E as any) as any) + ((o as any).horizontalPadding as any) as any) : W = (((o as any).height as any) + (F as any) as any) / ((o as any).width as any), F = (p as any) + ((o as any).verticalPadding as any);
                var I: any;
                return ((o as any).width as any) < (E as any) ? I = (((o as any).height as any) + (F as any) as any) / (E as any) : I = (((o as any).height as any) + (F as any) as any) / ((o as any).width as any), (I as any) < (1 as any) && (I = (1 as any) / (I as any)), (W as any) < (1 as any) && (W = (1 as any) / (W as any)), (W as any) < (I as any);
              }, ((M as any).prototype as any).shiftToLastRow = function (this: any, o: any): any {
                var E: any = ((this as any).getLongestRowIndex as any)(o),
                  p: any = (((o as any).rowWidth as any).length as any) - (1 as any),
                  m: any = ((o as any).rows as any)[E],
                  y: any = (m as any)[((m as any).length as any) - (1 as any)],
                  S: any = ((y as any).width as any) + ((o as any).horizontalPadding as any);
                if ((((o as any).width as any) - (((o as any).rowWidth as any)[p] as any) as any) > (S as any) && (E as any) != (p as any)) {
                  ((m as any).splice as any)(-1, 1), ((((o as any).rows as any)[p] as any).push as any)(y), ((o as any).rowWidth as any)[E] = (((o as any).rowWidth as any)[E] as any) - (S as any), ((o as any).rowWidth as any)[p] = (((o as any).rowWidth as any)[p] as any) + (S as any), (o as any).width = ((o as any).rowWidth as any)[((instance as any).getLongestRowIndex as any)(o)];
                  for (var O: any = (Number as any).MIN_VALUE, F: any = 0; (F as any) < ((m as any).length as any); F++) (((m as any)[F] as any).height as any) > (O as any) && (O = ((m as any)[F] as any).height);
                  (E as any) > (0 as any) && (O += (o as any).verticalPadding);
                  var W: any = (((o as any).rowHeight as any)[E] as any) + (((o as any).rowHeight as any)[p] as any);
                  ((o as any).rowHeight as any)[E] = O, (((o as any).rowHeight as any)[p] as any) < (((y as any).height as any) + ((o as any).verticalPadding as any) as any) && (((o as any).rowHeight as any)[p] = ((y as any).height as any) + ((o as any).verticalPadding as any));
                  var I: any = (((o as any).rowHeight as any)[E] as any) + (((o as any).rowHeight as any)[p] as any);
                  (o as any).height += (I as any) - (W as any), ((this as any).shiftToLastRow as any)(o);
                }
              }, ((M as any).prototype as any).tilingPreLayout = function (this: any): any {
                (n as any).TILE && (((this as any).groupZeroDegreeMembers as any)(), ((this as any).clearCompounds as any)(), ((this as any).clearZeroDegreeMembers as any)());
              }, ((M as any).prototype as any).tilingPostLayout = function (this: any): any {
                (n as any).TILE && (((this as any).repopulateZeroDegreeMembers as any)(), ((this as any).repopulateCompounds as any)());
              }, ((M as any).prototype as any).reduceTrees = function (this: any): any {
                for (var o: any = [], E: any = !0, p: any; E;) {
                  var m: any = (((this as any).graphManager as any).getAllNodes as any)(),
                    y: any = [];
                  E = !1;
                  for (var S: any = 0; (S as any) < ((m as any).length as any); S++) if (p = (m as any)[S], ((((p as any).getEdges as any)() as any).length as any) == (1 as any) && !((((p as any).getEdges as any)() as any)[0] as any).isInterGraph && (((p as any).getChild as any)() as any) == (null as any)) {
                    if ((n as any).PURE_INCREMENTAL) {
                      var O: any = (((((p as any).getEdges as any)() as any)[0] as any).getOtherEnd as any)(p),
                        F: any = new (L as any)((((p as any).getCenterX as any)() as any) - (((O as any).getCenterX as any)() as any), (((p as any).getCenterY as any)() as any) - (((O as any).getCenterY as any)() as any));
                      ((y as any).push as any)([p, (((p as any).getEdges as any)() as any)[0], ((p as any).getOwner as any)(), F]);
                    } else ((y as any).push as any)([p, (((p as any).getEdges as any)() as any)[0], ((p as any).getOwner as any)()]);
                    E = !0;
                  }
                  if ((E as any) == (!0 as any)) {
                    for (var W: any = [], I: any = 0; (I as any) < ((y as any).length as any); I++) ((((((y as any)[I] as any)[0] as any).getEdges as any)() as any).length as any) == (1 as any) && (((W as any).push as any)((y as any)[I]), ((((((y as any)[I] as any)[0] as any).getOwner as any)() as any).remove as any)(((y as any)[I] as any)[0]));
                    ((o as any).push as any)(W), (((this as any).graphManager as any).resetAllNodes as any)(), (((this as any).graphManager as any).resetAllEdges as any)();
                  }
                }
                (this as any).prunedNodesAll = o;
              }, ((M as any).prototype as any).growTree = function (this: any, o: any): any {
                for (var E: any = (o as any).length, p: any = (o as any)[(E as any) - (1 as any)], m: any, y: any = 0; (y as any) < ((p as any).length as any); y++) m = (p as any)[y], ((this as any).findPlaceforPrunedNode as any)(m), (((m as any)[2] as any).add as any)((m as any)[0]), (((m as any)[2] as any).add as any)((m as any)[1], ((m as any)[1] as any).source, ((m as any)[1] as any).target);
                ((o as any).splice as any)(((o as any).length as any) - (1 as any), 1), (((this as any).graphManager as any).resetAllNodes as any)(), (((this as any).graphManager as any).resetAllEdges as any)();
              }, ((M as any).prototype as any).findPlaceforPrunedNode = function (this: any, o: any): any {
                var E: any,
                  p: any,
                  m: any = (o as any)[0];
                if ((m as any) == (((o as any)[1] as any).source as any) ? p = ((o as any)[1] as any).target : p = ((o as any)[1] as any).source, (n as any).PURE_INCREMENTAL) ((m as any).setCenter as any)((((p as any).getCenterX as any)() as any) + ((((o as any)[3] as any).getWidth as any)() as any), (((p as any).getCenterY as any)() as any) + ((((o as any)[3] as any).getHeight as any)() as any));else {
                  var y: any = (p as any).startX,
                    S: any = (p as any).finishX,
                    O: any = (p as any).startY,
                    F: any = (p as any).finishY,
                    W: number = 0,
                    I: number = 0,
                    Q: number = 0,
                    z: number = 0,
                    X: any = [W, Q, I, z];
                  if ((O as any) > (0 as any)) for (var rt: any = y; (rt as any) <= (S as any); rt++) (X as any)[0] += ((((((this as any).grid as any)[rt] as any)[(O as any) - (1 as any)] as any).length as any) + (((((this as any).grid as any)[rt] as any)[O] as any).length as any) as any) - (1 as any);
                  if ((S as any) < ((((this as any).grid as any).length as any) - (1 as any) as any)) for (var rt: any = O; (rt as any) <= (F as any); rt++) (X as any)[1] += ((((((this as any).grid as any)[(S as any) + (1 as any)] as any)[rt] as any).length as any) + (((((this as any).grid as any)[S] as any)[rt] as any).length as any) as any) - (1 as any);
                  if ((F as any) < (((((this as any).grid as any)[0] as any).length as any) - (1 as any) as any)) for (var rt: any = y; (rt as any) <= (S as any); rt++) (X as any)[2] += ((((((this as any).grid as any)[rt] as any)[(F as any) + (1 as any)] as any).length as any) + (((((this as any).grid as any)[rt] as any)[F] as any).length as any) as any) - (1 as any);
                  if ((y as any) > (0 as any)) for (var rt: any = O; (rt as any) <= (F as any); rt++) (X as any)[3] += ((((((this as any).grid as any)[(y as any) - (1 as any)] as any)[rt] as any).length as any) + (((((this as any).grid as any)[y] as any)[rt] as any).length as any) as any) - (1 as any);
                  for (var $: any = (w as any).MAX_VALUE, D: any, H: any, k: any = 0; (k as any) < ((X as any).length as any); k++) ((X as any)[k] as any) < ($ as any) ? ($ = (X as any)[k], D = 1, H = k) : ((X as any)[k] as any) == ($ as any) && D++;
                  if ((D as any) == (3 as any) && ($ as any) == (0 as any)) ((X as any)[0] as any) == (0 as any) && ((X as any)[1] as any) == (0 as any) && ((X as any)[2] as any) == (0 as any) ? E = 1 : ((X as any)[0] as any) == (0 as any) && ((X as any)[1] as any) == (0 as any) && ((X as any)[3] as any) == (0 as any) ? E = 0 : ((X as any)[0] as any) == (0 as any) && ((X as any)[2] as any) == (0 as any) && ((X as any)[3] as any) == (0 as any) ? E = 3 : ((X as any)[1] as any) == (0 as any) && ((X as any)[2] as any) == (0 as any) && ((X as any)[3] as any) == (0 as any) && (E = 2);else if ((D as any) == (2 as any) && ($ as any) == (0 as any)) {
                    var tt: any = ((Math as any).floor as any)((((Math as any).random as any)() as any) * (2 as any));
                    ((X as any)[0] as any) == (0 as any) && ((X as any)[1] as any) == (0 as any) ? (tt as any) == (0 as any) ? E = 0 : E = 1 : ((X as any)[0] as any) == (0 as any) && ((X as any)[2] as any) == (0 as any) ? (tt as any) == (0 as any) ? E = 0 : E = 2 : ((X as any)[0] as any) == (0 as any) && ((X as any)[3] as any) == (0 as any) ? (tt as any) == (0 as any) ? E = 0 : E = 3 : ((X as any)[1] as any) == (0 as any) && ((X as any)[2] as any) == (0 as any) ? (tt as any) == (0 as any) ? E = 1 : E = 2 : ((X as any)[1] as any) == (0 as any) && ((X as any)[3] as any) == (0 as any) ? (tt as any) == (0 as any) ? E = 1 : E = 3 : (tt as any) == (0 as any) ? E = 2 : E = 3;
                  } else if ((D as any) == (4 as any) && ($ as any) == (0 as any)) {
                    var tt: any = ((Math as any).floor as any)((((Math as any).random as any)() as any) * (4 as any));
                    E = tt;
                  } else E = H;
                  (E as any) == (0 as any) ? ((m as any).setCenter as any)(((p as any).getCenterX as any)(), (((((p as any).getCenterY as any)() as any) - ((((p as any).getHeight as any)() as any) / (2 as any) as any) as any) - ((l as any).DEFAULT_EDGE_LENGTH as any) as any) - ((((m as any).getHeight as any)() as any) / (2 as any) as any)) : (E as any) == (1 as any) ? ((m as any).setCenter as any)((((((p as any).getCenterX as any)() as any) + ((((p as any).getWidth as any)() as any) / (2 as any) as any) as any) + ((l as any).DEFAULT_EDGE_LENGTH as any) as any) + ((((m as any).getWidth as any)() as any) / (2 as any) as any), ((p as any).getCenterY as any)()) : (E as any) == (2 as any) ? ((m as any).setCenter as any)(((p as any).getCenterX as any)(), (((((p as any).getCenterY as any)() as any) + ((((p as any).getHeight as any)() as any) / (2 as any) as any) as any) + ((l as any).DEFAULT_EDGE_LENGTH as any) as any) + ((((m as any).getHeight as any)() as any) / (2 as any) as any)) : ((m as any).setCenter as any)((((((p as any).getCenterX as any)() as any) - ((((p as any).getWidth as any)() as any) / (2 as any) as any) as any) - ((l as any).DEFAULT_EDGE_LENGTH as any) as any) - ((((m as any).getWidth as any)() as any) / (2 as any) as any), ((p as any).getCenterY as any)());
                }
              }, (a as any).exports = M;
            },
            991: (a: any, r: any, i: any): any => {
              var t: any;
              var f: any = ((i as any)(551) as any).FDLayoutNode,
                e: any = ((i as any)(551) as any).IMath;
              function g(this: any, s: any, n: any, c: any, l: any): any {
                ((f as any).call as any)(this, s, n, c, l);
              }
              (g as any).prototype = ((Object as any).create as any)((f as any).prototype);
              for (t in f) (g as any)[t] = (f as any)[t];
              ((g as any).prototype as any).calculateDisplacement = function (this: any): any {
                var s: any = (((this as any).graphManager as any).getLayout as any)();
                (((this as any).getChild as any)() as any) != (null as any) && (this as any).fixedNodeWeight ? ((this as any).displacementX += (((s as any).coolingFactor as any) * ((((this as any).springForceX as any) + ((this as any).repulsionForceX as any) as any) + ((this as any).gravitationForceX as any) as any) as any) / ((this as any).fixedNodeWeight as any), (this as any).displacementY += (((s as any).coolingFactor as any) * ((((this as any).springForceY as any) + ((this as any).repulsionForceY as any) as any) + ((this as any).gravitationForceY as any) as any) as any) / ((this as any).fixedNodeWeight as any)) : ((this as any).displacementX += (((s as any).coolingFactor as any) * ((((this as any).springForceX as any) + ((this as any).repulsionForceX as any) as any) + ((this as any).gravitationForceX as any) as any) as any) / ((this as any).noOfChildren as any), (this as any).displacementY += (((s as any).coolingFactor as any) * ((((this as any).springForceY as any) + ((this as any).repulsionForceY as any) as any) + ((this as any).gravitationForceY as any) as any) as any) / ((this as any).noOfChildren as any)), (((Math as any).abs as any)((this as any).displacementX) as any) > (((s as any).coolingFactor as any) * ((s as any).maxNodeDisplacement as any) as any) && ((this as any).displacementX = (((s as any).coolingFactor as any) * ((s as any).maxNodeDisplacement as any) as any) * (((e as any).sign as any)((this as any).displacementX) as any)), (((Math as any).abs as any)((this as any).displacementY) as any) > (((s as any).coolingFactor as any) * ((s as any).maxNodeDisplacement as any) as any) && ((this as any).displacementY = (((s as any).coolingFactor as any) * ((s as any).maxNodeDisplacement as any) as any) * (((e as any).sign as any)((this as any).displacementY) as any)), (this as any).child && (((((this as any).child as any).getNodes as any)() as any).length as any) > (0 as any) && ((this as any).propogateDisplacementToChildren as any)((this as any).displacementX, (this as any).displacementY);
              }, ((g as any).prototype as any).propogateDisplacementToChildren = function (this: any, s: any, n: any): any {
                for (var c: any = ((((this as any).getChild as any)() as any).getNodes as any)(), l: any, T: any = 0; (T as any) < ((c as any).length as any); T++) l = (c as any)[T], (((l as any).getChild as any)() as any) == (null as any) ? ((l as any).displacementX += s, (l as any).displacementY += n) : ((l as any).propogateDisplacementToChildren as any)(s, n);
              }, ((g as any).prototype as any).move = function (this: any): any {
                var s: any = (((this as any).graphManager as any).getLayout as any)();
                (((this as any).child as any) == (null as any) || (((((this as any).child as any).getNodes as any)() as any).length as any) == (0 as any)) && (((this as any).moveBy as any)((this as any).displacementX, (this as any).displacementY), (s as any).totalDisplacement += (((Math as any).abs as any)((this as any).displacementX) as any) + (((Math as any).abs as any)((this as any).displacementY) as any)), (this as any).springForceX = 0, (this as any).springForceY = 0, (this as any).repulsionForceX = 0, (this as any).repulsionForceY = 0, (this as any).gravitationForceX = 0, (this as any).gravitationForceY = 0, (this as any).displacementX = 0, (this as any).displacementY = 0;
              }, ((g as any).prototype as any).setPred1 = function (this: any, s: any): any {
                (this as any).pred1 = s;
              }, ((g as any).prototype as any).getPred1 = function (this: any): any {
                return pred1;
              }, ((g as any).prototype as any).getPred2 = function (this: any): any {
                return pred2;
              }, ((g as any).prototype as any).setNext = function (this: any, s: any): any {
                (this as any).next = s;
              }, ((g as any).prototype as any).getNext = function (this: any): any {
                return next;
              }, ((g as any).prototype as any).setProcessed = function (this: any, s: any): any {
                (this as any).processed = s;
              }, ((g as any).prototype as any).isProcessed = function (this: any): any {
                return processed;
              }, (a as any).exports = g;
            },
            902: (a: any, r: any, i: any): any => {
              function f(this: any, c: any): any {
                if (((Array as any).isArray as any)(c)) {
                  for (var l: any = 0, T: any = (Array as any)((c as any).length); (l as any) < ((c as any).length as any); l++) (T as any)[l] = (c as any)[l];
                  return T;
                } else return ((Array as any).from as any)(c);
              }
              var e: any = (i as any)(806),
                g: any = ((i as any)(551) as any).LinkedList,
                t: any = ((i as any)(551) as any).Matrix,
                s: any = ((i as any)(551) as any).SVD;
              function n(this: any): any {}
              (n as any).handleConstraints = function (this: any, c: any): any {
                var l: any = {};
                (l as any).fixedNodeConstraint = ((c as any).constraints as any).fixedNodeConstraint, (l as any).alignmentConstraint = ((c as any).constraints as any).alignmentConstraint, (l as any).relativePlacementConstraint = ((c as any).constraints as any).relativePlacementConstraint;
                for (var T: any = new (Map as any)(), u: any = new (Map as any)(), d: any = [], L: any = [], b: any = ((c as any).getAllNodes as any)(), w: any = 0, G: any = 0; (G as any) < ((b as any).length as any); G++) {
                  var B: any = (b as any)[G];
                  (((B as any).getChild as any)() as any) == (null as any) && (((u as any).set as any)((B as any).id, w++), ((d as any).push as any)(((B as any).getCenterX as any)()), ((L as any).push as any)(((B as any).getCenterY as any)()), ((T as any).set as any)((B as any).id, B));
                }
                (l as any).relativePlacementConstraint && (((l as any).relativePlacementConstraint as any).forEach as any)(function (this: any, P: any): any {
                  !(P as any).gap && ((P as any).gap as any) != (0 as any) && ((P as any).left ? (P as any).gap = (((e as any).DEFAULT_EDGE_LENGTH as any) + ((((((T as any).get as any)((P as any).left) as any).getWidth as any)() as any) / (2 as any) as any) as any) + ((((((T as any).get as any)((P as any).right) as any).getWidth as any)() as any) / (2 as any) as any) : (P as any).gap = (((e as any).DEFAULT_EDGE_LENGTH as any) + ((((((T as any).get as any)((P as any).top) as any).getHeight as any)() as any) / (2 as any) as any) as any) + ((((((T as any).get as any)((P as any).bottom) as any).getHeight as any)() as any) / (2 as any) as any));
                });
                var U: any = function (this: any, Y: any, Z: any): any {
                    return {
                      x: ((Y as any).x as any) - ((Z as any).x as any),
                      y: ((Y as any).y as any) - ((Z as any).y as any)
                    };
                  },
                  V: any = function (this: any, Y: any): any {
                    var Z: any = 0,
                      K: any = 0;
                    return ((Y as any).forEach as any)(function (this: any, q: any): any {
                      Z += (d as any)[((u as any).get as any)(q)], K += (L as any)[((u as any).get as any)(q)];
                    }), {
                      x: (Z as any) / ((Y as any).size as any),
                      y: (K as any) / ((Y as any).size as any)
                    };
                  },
                  M: any = function (this: any, Y: any, Z: any, K: any, q: any, at: any): any {
                    function ct(this: any, lt: any, ot: any): any {
                      var Lt: any = new (Set as any)(lt),
                        ft: any = !0,
                        st: any = !1,
                        Xt: any = void 0;
                      try {
                        for (var Tt: any = ((ot as any)[(Symbol as any).iterator] as any)(), Ct: any; !(ft = ((Ct = ((Tt as any).next as any)()) as any).done); ft = !0) {
                          var Bt: any = (Ct as any).value;
                          ((Lt as any).add as any)(Bt);
                        }
                      } catch (bt: any) {
                        st = !0, Xt = bt;
                      } finally {
                        try {
                          !ft && (Tt as any).return && ((Tt as any).return as any)();
                        } finally {
                          if (st) throw Xt;
                        }
                      }
                      return Lt;
                    }
                    var nt: any = new (Map as any)();
                    ((Y as any).forEach as any)(function (this: any, lt: any, ot: any): any {
                      ((nt as any).set as any)(ot, 0);
                    }), ((Y as any).forEach as any)(function (this: any, lt: any, ot: any): any {
                      ((lt as any).forEach as any)(function (this: any, Lt: any): any {
                        ((nt as any).set as any)((Lt as any).id, (((nt as any).get as any)((Lt as any).id) as any) + (1 as any));
                      });
                    });
                    var et: any = new (Map as any)(),
                      j: any = new (Map as any)(),
                      dt: any = new (g as any)();
                    ((nt as any).forEach as any)(function (this: any, lt: any, ot: any): any {
                      (lt as any) == (0 as any) ? (((dt as any).push as any)(ot), K || ((Z as any) == ("horizontal" as any) ? ((et as any).set as any)(ot, ((u as any).has as any)(ot) ? (d as any)[((u as any).get as any)(ot)] : ((q as any).get as any)(ot)) : ((et as any).set as any)(ot, ((u as any).has as any)(ot) ? (L as any)[((u as any).get as any)(ot)] : ((q as any).get as any)(ot)))) : ((et as any).set as any)(ot, (Number as any).NEGATIVE_INFINITY), K && ((j as any).set as any)(ot, new (Set as any)([ot]));
                    }), K && ((at as any).forEach as any)(function (this: any, lt: any): any {
                      var ot: any = [];
                      if (((lt as any).forEach as any)(function (this: any, st: any): any {
                        ((K as any).has as any)(st) && ((ot as any).push as any)(st);
                      }), ((ot as any).length as any) > (0 as any)) {
                        var Lt: any = 0;
                        ((ot as any).forEach as any)(function (this: any, st: any): any {
                          (Z as any) == ("horizontal" as any) ? (((et as any).set as any)(st, ((u as any).has as any)(st) ? (d as any)[((u as any).get as any)(st)] : ((q as any).get as any)(st)), Lt += ((et as any).get as any)(st)) : (((et as any).set as any)(st, ((u as any).has as any)(st) ? (L as any)[((u as any).get as any)(st)] : ((q as any).get as any)(st)), Lt += ((et as any).get as any)(st));
                        }), Lt = (Lt as any) / ((ot as any).length as any), ((lt as any).forEach as any)(function (this: any, st: any): any {
                          ((K as any).has as any)(st) || ((et as any).set as any)(st, Lt);
                        });
                      } else {
                        var ft: any = 0;
                        ((lt as any).forEach as any)(function (this: any, st: any): any {
                          (Z as any) == ("horizontal" as any) ? ft += ((u as any).has as any)(st) ? (d as any)[((u as any).get as any)(st)] : ((q as any).get as any)(st) : ft += ((u as any).has as any)(st) ? (L as any)[((u as any).get as any)(st)] : ((q as any).get as any)(st);
                        }), ft = (ft as any) / ((lt as any).length as any), ((lt as any).forEach as any)(function (this: any, st: any): any {
                          ((et as any).set as any)(st, ft);
                        });
                      }
                    });
                    for (var At: any = function (this: any): any {
                      var ot: any = ((dt as any).shift as any)(),
                        Lt: any = ((Y as any).get as any)(ot);
                      ((Lt as any).forEach as any)(function (this: any, ft: any): any {
                        if ((((et as any).get as any)((ft as any).id) as any) < ((((et as any).get as any)(ot) as any) + ((ft as any).gap as any) as any)) if (K && ((K as any).has as any)((ft as any).id)) {
                          var st: any = void 0;
                          if ((Z as any) == ("horizontal" as any) ? st = ((u as any).has as any)((ft as any).id) ? (d as any)[((u as any).get as any)((ft as any).id)] : ((q as any).get as any)((ft as any).id) : st = ((u as any).has as any)((ft as any).id) ? (L as any)[((u as any).get as any)((ft as any).id)] : ((q as any).get as any)((ft as any).id), ((et as any).set as any)((ft as any).id, st), (st as any) < ((((et as any).get as any)(ot) as any) + ((ft as any).gap as any) as any)) {
                            var Xt: any = ((((et as any).get as any)(ot) as any) + ((ft as any).gap as any) as any) - (st as any);
                            ((((j as any).get as any)(ot) as any).forEach as any)(function (this: any, Tt: any): any {
                              ((et as any).set as any)(Tt, (((et as any).get as any)(Tt) as any) - (Xt as any));
                            });
                          }
                        } else ((et as any).set as any)((ft as any).id, (((et as any).get as any)(ot) as any) + ((ft as any).gap as any));
                        ((nt as any).set as any)((ft as any).id, (((nt as any).get as any)((ft as any).id) as any) - (1 as any)), (((nt as any).get as any)((ft as any).id) as any) == (0 as any) && ((dt as any).push as any)((ft as any).id), K && ((j as any).set as any)((ft as any).id, (ct as any)(((j as any).get as any)(ot), ((j as any).get as any)((ft as any).id)));
                      });
                    }; ((dt as any).length as any) != (0 as any);) (At as any)();
                    if (K) {
                      var pt: any = new (Set as any)();
                      ((Y as any).forEach as any)(function (this: any, lt: any, ot: any): any {
                        ((lt as any).length as any) == (0 as any) && ((pt as any).add as any)(ot);
                      });
                      var xt: any = [];
                      ((j as any).forEach as any)(function (this: any, lt: any, ot: any): any {
                        if (((pt as any).has as any)(ot)) {
                          var Lt: any = !1,
                            ft: any = !0,
                            st: any = !1,
                            Xt: any = void 0;
                          try {
                            for (var Tt: any = ((lt as any)[(Symbol as any).iterator] as any)(), Ct: any; !(ft = ((Ct = ((Tt as any).next as any)()) as any).done); ft = !0) {
                              var Bt: any = (Ct as any).value;
                              ((K as any).has as any)(Bt) && (Lt = !0);
                            }
                          } catch (St: any) {
                            st = !0, Xt = St;
                          } finally {
                            try {
                              !ft && (Tt as any).return && ((Tt as any).return as any)();
                            } finally {
                              if (st) throw Xt;
                            }
                          }
                          if (!Lt) {
                            var bt: any = !1,
                              zt: any = void 0;
                            ((xt as any).forEach as any)(function (this: any, St: any, kt: any): any {
                              ((St as any).has as any)(((([] as any).concat as any)((f as any)(lt)) as any)[0]) && (bt = !0, zt = kt);
                            }), bt ? ((lt as any).forEach as any)(function (this: any, St: any): any {
                              (((xt as any)[zt] as any).add as any)(St);
                            }) : ((xt as any).push as any)(new (Set as any)(lt));
                          }
                        }
                      }), ((xt as any).forEach as any)(function (this: any, lt: any, ot: any): any {
                        var Lt: any = (Number as any).POSITIVE_INFINITY,
                          ft: any = (Number as any).POSITIVE_INFINITY,
                          st: any = (Number as any).NEGATIVE_INFINITY,
                          Xt: any = (Number as any).NEGATIVE_INFINITY,
                          Tt: any = !0,
                          Ct: any = !1,
                          Bt: any = void 0;
                        try {
                          for (var bt: any = ((lt as any)[(Symbol as any).iterator] as any)(), zt: any; !(Tt = ((zt = ((bt as any).next as any)()) as any).done); Tt = !0) {
                            var St: any = (zt as any).value,
                              kt: any = void 0;
                            (Z as any) == ("horizontal" as any) ? kt = ((u as any).has as any)(St) ? (d as any)[((u as any).get as any)(St)] : ((q as any).get as any)(St) : kt = ((u as any).has as any)(St) ? (L as any)[((u as any).get as any)(St)] : ((q as any).get as any)(St);
                            var Kt: any = ((et as any).get as any)(St);
                            (kt as any) < (Lt as any) && (Lt = kt), (kt as any) > (st as any) && (st = kt), (Kt as any) < (ft as any) && (ft = Kt), (Kt as any) > (Xt as any) && (Xt = Kt);
                          }
                        } catch (ee: any) {
                          Ct = !0, Bt = ee;
                        } finally {
                          try {
                            !Tt && (bt as any).return && ((bt as any).return as any)();
                          } finally {
                            if (Ct) throw Bt;
                          }
                        }
                        var ce: any = (((Lt as any) + (st as any) as any) / (2 as any) as any) - (((ft as any) + (Xt as any) as any) / (2 as any) as any),
                          Qt: any = !0,
                          jt: any = !1,
                          _t: any = void 0;
                        try {
                          for (var Jt: any = ((lt as any)[(Symbol as any).iterator] as any)(), oe: any; !(Qt = ((oe = ((Jt as any).next as any)()) as any).done); Qt = !0) {
                            var te: any = (oe as any).value;
                            ((et as any).set as any)(te, (((et as any).get as any)(te) as any) + (ce as any));
                          }
                        } catch (ee: any) {
                          jt = !0, _t = ee;
                        } finally {
                          try {
                            !Qt && (Jt as any).return && ((Jt as any).return as any)();
                          } finally {
                            if (jt) throw _t;
                          }
                        }
                      });
                    }
                    return et;
                  },
                  _: any = function (this: any, Y: any): any {
                    var Z: any = 0,
                      K: any = 0,
                      q: any = 0,
                      at: any = 0;
                    if (((Y as any).forEach as any)(function (this: any, j: any): any {
                      (j as any).left ? (((d as any)[((u as any).get as any)((j as any).left)] as any) - ((d as any)[((u as any).get as any)((j as any).right)] as any) as any) >= (0 as any) ? Z++ : K++ : (((L as any)[((u as any).get as any)((j as any).top)] as any) - ((L as any)[((u as any).get as any)((j as any).bottom)] as any) as any) >= (0 as any) ? q++ : at++;
                    }), (Z as any) > (K as any) && (q as any) > (at as any)) for (var ct: any = 0; (ct as any) < ((u as any).size as any); ct++) (d as any)[ct] = (-1 as any) * ((d as any)[ct] as any), (L as any)[ct] = (-1 as any) * ((L as any)[ct] as any);else if ((Z as any) > (K as any)) for (var nt: any = 0; (nt as any) < ((u as any).size as any); nt++) (d as any)[nt] = (-1 as any) * ((d as any)[nt] as any);else if ((q as any) > (at as any)) for (var et: any = 0; (et as any) < ((u as any).size as any); et++) (L as any)[et] = (-1 as any) * ((L as any)[et] as any);
                  },
                  o: any = function (this: any, Y: any): any {
                    var Z: any = [],
                      K: any = new (g as any)(),
                      q: any = new (Set as any)(),
                      at: any = 0;
                    return ((Y as any).forEach as any)(function (this: any, ct: any, nt: any): any {
                      if (!((q as any).has as any)(nt)) {
                        (Z as any)[at] = [];
                        var et: any = nt;
                        for (((K as any).push as any)(et), ((q as any).add as any)(et), (((Z as any)[at] as any).push as any)(et); ((K as any).length as any) != (0 as any);) {
                          et = ((K as any).shift as any)();
                          var j: any = ((Y as any).get as any)(et);
                          ((j as any).forEach as any)(function (this: any, dt: any): any {
                            ((q as any).has as any)((dt as any).id) || (((K as any).push as any)((dt as any).id), ((q as any).add as any)((dt as any).id), (((Z as any)[at] as any).push as any)((dt as any).id));
                          });
                        }
                        at++;
                      }
                    }), Z;
                  },
                  E: any = function (this: any, Y: any): any {
                    var Z: any = new (Map as any)();
                    return ((Y as any).forEach as any)(function (this: any, K: any, q: any): any {
                      ((Z as any).set as any)(q, []);
                    }), ((Y as any).forEach as any)(function (this: any, K: any, q: any): any {
                      ((K as any).forEach as any)(function (this: any, at: any): any {
                        ((((Z as any).get as any)(q) as any).push as any)(at), ((((Z as any).get as any)((at as any).id) as any).push as any)({
                          id: q,
                          gap: (at as any).gap,
                          direction: (at as any).direction
                        });
                      });
                    }), Z;
                  },
                  p: any = function (this: any, Y: any): any {
                    var Z: any = new (Map as any)();
                    return ((Y as any).forEach as any)(function (this: any, K: any, q: any): any {
                      ((Z as any).set as any)(q, []);
                    }), ((Y as any).forEach as any)(function (this: any, K: any, q: any): any {
                      ((K as any).forEach as any)(function (this: any, at: any): any {
                        ((((Z as any).get as any)((at as any).id) as any).push as any)({
                          id: q,
                          gap: (at as any).gap,
                          direction: (at as any).direction
                        });
                      });
                    }), Z;
                  },
                  m: any = [],
                  y: any = [],
                  S: any = !1,
                  O: any = !1,
                  F: any = new (Set as any)(),
                  W: any = new (Map as any)(),
                  I: any = new (Map as any)(),
                  Q: any = [];
                if ((l as any).fixedNodeConstraint && (((l as any).fixedNodeConstraint as any).forEach as any)(function (this: any, P: any): any {
                  ((F as any).add as any)((P as any).nodeId);
                }), (l as any).relativePlacementConstraint && ((((l as any).relativePlacementConstraint as any).forEach as any)(function (this: any, P: any): any {
                  (P as any).left ? (((W as any).has as any)((P as any).left) ? ((((W as any).get as any)((P as any).left) as any).push as any)({
                    id: (P as any).right,
                    gap: (P as any).gap,
                    direction: "horizontal"
                  }) : ((W as any).set as any)((P as any).left, [{
                    id: (P as any).right,
                    gap: (P as any).gap,
                    direction: "horizontal"
                  }]), ((W as any).has as any)((P as any).right) || ((W as any).set as any)((P as any).right, [])) : (((W as any).has as any)((P as any).top) ? ((((W as any).get as any)((P as any).top) as any).push as any)({
                    id: (P as any).bottom,
                    gap: (P as any).gap,
                    direction: "vertical"
                  }) : ((W as any).set as any)((P as any).top, [{
                    id: (P as any).bottom,
                    gap: (P as any).gap,
                    direction: "vertical"
                  }]), ((W as any).has as any)((P as any).bottom) || ((W as any).set as any)((P as any).bottom, []));
                }), I = (E as any)(W), Q = (o as any)(I)), (e as any).TRANSFORM_ON_CONSTRAINT_HANDLING) {
                  if ((l as any).fixedNodeConstraint && (((l as any).fixedNodeConstraint as any).length as any) > (1 as any)) (((l as any).fixedNodeConstraint as any).forEach as any)(function (this: any, P: any, Y: any): any {
                    (m as any)[Y] = [((P as any).position as any).x, ((P as any).position as any).y], (y as any)[Y] = [(d as any)[((u as any).get as any)((P as any).nodeId)], (L as any)[((u as any).get as any)((P as any).nodeId)]];
                  }), S = !0;else if ((l as any).alignmentConstraint) (function (this: any): any {
                    var P: any = 0;
                    if (((l as any).alignmentConstraint as any).vertical) {
                      for (var Y: any = ((l as any).alignmentConstraint as any).vertical, Z: any = function (this: any, et: any): any {
                          var j: any = new (Set as any)();
                          (((Y as any)[et] as any).forEach as any)(function (this: any, pt: any): any {
                            ((j as any).add as any)(pt);
                          });
                          var dt: any = new (Set as any)((((([] as any).concat as any)((f as any)(j)) as any).filter as any)(function (this: any, pt: any): any {
                              return ((F as any).has as any)(pt);
                            })),
                            At: any = void 0;
                          ((dt as any).size as any) > (0 as any) ? At = (d as any)[((u as any).get as any)((((((dt as any).values as any)() as any).next as any)() as any).value)] : At = ((V as any)(j) as any).x, (((Y as any)[et] as any).forEach as any)(function (this: any, pt: any): any {
                            (m as any)[P] = [At, (L as any)[((u as any).get as any)(pt)]], (y as any)[P] = [(d as any)[((u as any).get as any)(pt)], (L as any)[((u as any).get as any)(pt)]], P++;
                          });
                        }, K: any = 0; (K as any) < ((Y as any).length as any); K++) (Z as any)(K);
                      S = !0;
                    }
                    if (((l as any).alignmentConstraint as any).horizontal) {
                      for (var q: any = ((l as any).alignmentConstraint as any).horizontal, at: any = function (this: any, et: any): any {
                          var j: any = new (Set as any)();
                          (((q as any)[et] as any).forEach as any)(function (this: any, pt: any): any {
                            ((j as any).add as any)(pt);
                          });
                          var dt: any = new (Set as any)((((([] as any).concat as any)((f as any)(j)) as any).filter as any)(function (this: any, pt: any): any {
                              return ((F as any).has as any)(pt);
                            })),
                            At: any = void 0;
                          ((dt as any).size as any) > (0 as any) ? At = (d as any)[((u as any).get as any)((((((dt as any).values as any)() as any).next as any)() as any).value)] : At = ((V as any)(j) as any).y, (((q as any)[et] as any).forEach as any)(function (this: any, pt: any): any {
                            (m as any)[P] = [(d as any)[((u as any).get as any)(pt)], At], (y as any)[P] = [(d as any)[((u as any).get as any)(pt)], (L as any)[((u as any).get as any)(pt)]], P++;
                          });
                        }, ct: any = 0; (ct as any) < ((q as any).length as any); ct++) (at as any)(ct);
                      S = !0;
                    }
                    (l as any).relativePlacementConstraint && (O = !0);
                  } as any)();else if ((l as any).relativePlacementConstraint) {
                    for (var z: any = 0, X: any = 0, rt: any = 0; (rt as any) < ((Q as any).length as any); rt++) (((Q as any)[rt] as any).length as any) > (z as any) && (z = ((Q as any)[rt] as any).length, X = rt);
                    if ((z as any) < (((I as any).size as any) / (2 as any) as any)) (_ as any)((l as any).relativePlacementConstraint), S = !1, O = !1;else {
                      var $: any = new (Map as any)(),
                        D: any = new (Map as any)(),
                        H: any = [];
                      (((Q as any)[X] as any).forEach as any)(function (this: any, P: any): any {
                        ((((W as any).get as any)(P) as any).forEach as any)(function (this: any, Y: any): any {
                          ((Y as any).direction as any) == ("horizontal" as any) ? ((($ as any).has as any)(P) ? (((($ as any).get as any)(P) as any).push as any)(Y) : (($ as any).set as any)(P, [Y]), (($ as any).has as any)((Y as any).id) || (($ as any).set as any)((Y as any).id, []), ((H as any).push as any)({
                            left: P,
                            right: (Y as any).id
                          })) : (((D as any).has as any)(P) ? ((((D as any).get as any)(P) as any).push as any)(Y) : ((D as any).set as any)(P, [Y]), ((D as any).has as any)((Y as any).id) || ((D as any).set as any)((Y as any).id, []), ((H as any).push as any)({
                            top: P,
                            bottom: (Y as any).id
                          }));
                        });
                      }), (_ as any)(H), O = !1;
                      var k: any = (M as any)($, "horizontal"),
                        tt: any = (M as any)(D, "vertical");
                      (((Q as any)[X] as any).forEach as any)(function (this: any, P: any, Y: any): any {
                        (y as any)[Y] = [(d as any)[((u as any).get as any)(P)], (L as any)[((u as any).get as any)(P)]], (m as any)[Y] = [], ((k as any).has as any)(P) ? ((m as any)[Y] as any)[0] = ((k as any).get as any)(P) : ((m as any)[Y] as any)[0] = (d as any)[((u as any).get as any)(P)], ((tt as any).has as any)(P) ? ((m as any)[Y] as any)[1] = ((tt as any).get as any)(P) : ((m as any)[Y] as any)[1] = (L as any)[((u as any).get as any)(P)];
                      }), S = !0;
                    }
                  }
                  if (S) {
                    for (var ht: any = void 0, J: any = ((t as any).transpose as any)(m), It: any = ((t as any).transpose as any)(y), Nt: any = 0; (Nt as any) < ((J as any).length as any); Nt++) (J as any)[Nt] = ((t as any).multGamma as any)((J as any)[Nt]), (It as any)[Nt] = ((t as any).multGamma as any)((It as any)[Nt]);
                    var vt: any = ((t as any).multMat as any)(J, ((t as any).transpose as any)(It)),
                      it: any = ((s as any).svd as any)(vt);
                    ht = ((t as any).multMat as any)((it as any).V, ((t as any).transpose as any)((it as any).U));
                    for (var ut: any = 0; (ut as any) < ((u as any).size as any); ut++) {
                      var Et: any = [(d as any)[ut], (L as any)[ut]],
                        wt: any = [((ht as any)[0] as any)[0], ((ht as any)[1] as any)[0]],
                        Ot: any = [((ht as any)[0] as any)[1], ((ht as any)[1] as any)[1]];
                      (d as any)[ut] = ((t as any).dotProduct as any)(Et, wt), (L as any)[ut] = ((t as any).dotProduct as any)(Et, Ot);
                    }
                    O && (_ as any)((l as any).relativePlacementConstraint);
                  }
                }
                if ((e as any).ENFORCE_CONSTRAINTS) {
                  if ((l as any).fixedNodeConstraint && (((l as any).fixedNodeConstraint as any).length as any) > (0 as any)) {
                    var mt: any = {
                      x: 0,
                      y: 0
                    };
                    (((l as any).fixedNodeConstraint as any).forEach as any)(function (this: any, P: any, Y: any): any {
                      var Z: any = {
                          x: (d as any)[((u as any).get as any)((P as any).nodeId)],
                          y: (L as any)[((u as any).get as any)((P as any).nodeId)]
                        },
                        K: any = (P as any).position,
                        q: any = (U as any)(K, Z);
                      (mt as any).x += (q as any).x, (mt as any).y += (q as any).y;
                    }), (mt as any).x /= ((l as any).fixedNodeConstraint as any).length, (mt as any).y /= ((l as any).fixedNodeConstraint as any).length, ((d as any).forEach as any)(function (this: any, P: any, Y: any): any {
                      (d as any)[Y] += (mt as any).x;
                    }), ((L as any).forEach as any)(function (this: any, P: any, Y: any): any {
                      (L as any)[Y] += (mt as any).y;
                    }), (((l as any).fixedNodeConstraint as any).forEach as any)(function (this: any, P: any): any {
                      (d as any)[((u as any).get as any)((P as any).nodeId)] = ((P as any).position as any).x, (L as any)[((u as any).get as any)((P as any).nodeId)] = ((P as any).position as any).y;
                    });
                  }
                  if ((l as any).alignmentConstraint) {
                    if (((l as any).alignmentConstraint as any).vertical) for (var Dt: any = ((l as any).alignmentConstraint as any).vertical, Rt: any = function (this: any, Y: any): any {
                        var Z: any = new (Set as any)();
                        (((Dt as any)[Y] as any).forEach as any)(function (this: any, at: any): any {
                          ((Z as any).add as any)(at);
                        });
                        var K: any = new (Set as any)((((([] as any).concat as any)((f as any)(Z)) as any).filter as any)(function (this: any, at: any): any {
                            return ((F as any).has as any)(at);
                          })),
                          q: any = void 0;
                        ((K as any).size as any) > (0 as any) ? q = (d as any)[((u as any).get as any)((((((K as any).values as any)() as any).next as any)() as any).value)] : q = ((V as any)(Z) as any).x, ((Z as any).forEach as any)(function (this: any, at: any): any {
                          ((F as any).has as any)(at) || ((d as any)[((u as any).get as any)(at)] = q);
                        });
                      }, Ht: any = 0; (Ht as any) < ((Dt as any).length as any); Ht++) (Rt as any)(Ht);
                    if (((l as any).alignmentConstraint as any).horizontal) for (var Ut: any = ((l as any).alignmentConstraint as any).horizontal, Pt: any = function (this: any, Y: any): any {
                        var Z: any = new (Set as any)();
                        (((Ut as any)[Y] as any).forEach as any)(function (this: any, at: any): any {
                          ((Z as any).add as any)(at);
                        });
                        var K: any = new (Set as any)((((([] as any).concat as any)((f as any)(Z)) as any).filter as any)(function (this: any, at: any): any {
                            return ((F as any).has as any)(at);
                          })),
                          q: any = void 0;
                        ((K as any).size as any) > (0 as any) ? q = (L as any)[((u as any).get as any)((((((K as any).values as any)() as any).next as any)() as any).value)] : q = ((V as any)(Z) as any).y, ((Z as any).forEach as any)(function (this: any, at: any): any {
                          ((F as any).has as any)(at) || ((L as any)[((u as any).get as any)(at)] = q);
                        });
                      }, Ft: any = 0; (Ft as any) < ((Ut as any).length as any); Ft++) (Pt as any)(Ft);
                  }
                  (l as any).relativePlacementConstraint && (function (this: any): any {
                    var P: any = new (Map as any)(),
                      Y: any = new (Map as any)(),
                      Z: any = new (Map as any)(),
                      K: any = new (Map as any)(),
                      q: any = new (Map as any)(),
                      at: any = new (Map as any)(),
                      ct: any = new (Set as any)(),
                      nt: any = new (Set as any)();
                    if (((F as any).forEach as any)(function (this: any, Gt: any): any {
                      ((ct as any).add as any)(Gt), ((nt as any).add as any)(Gt);
                    }), (l as any).alignmentConstraint) {
                      if (((l as any).alignmentConstraint as any).vertical) for (var et: any = ((l as any).alignmentConstraint as any).vertical, j: any = function (this: any, yt: any): any {
                          ((Z as any).set as any)(("dummy" as any) + (yt as any), []), (((et as any)[yt] as any).forEach as any)(function (this: any, Mt: any): any {
                            ((P as any).set as any)(Mt, ("dummy" as any) + (yt as any)), ((((Z as any).get as any)(("dummy" as any) + (yt as any)) as any).push as any)(Mt), ((F as any).has as any)(Mt) && ((ct as any).add as any)(("dummy" as any) + (yt as any));
                          }), ((q as any).set as any)(("dummy" as any) + (yt as any), (d as any)[((u as any).get as any)(((et as any)[yt] as any)[0])]);
                        }, dt: any = 0; (dt as any) < ((et as any).length as any); dt++) (j as any)(dt);
                      if (((l as any).alignmentConstraint as any).horizontal) for (var At: any = ((l as any).alignmentConstraint as any).horizontal, pt: any = function (this: any, yt: any): any {
                          ((K as any).set as any)(("dummy" as any) + (yt as any), []), (((At as any)[yt] as any).forEach as any)(function (this: any, Mt: any): any {
                            ((Y as any).set as any)(Mt, ("dummy" as any) + (yt as any)), ((((K as any).get as any)(("dummy" as any) + (yt as any)) as any).push as any)(Mt), ((F as any).has as any)(Mt) && ((nt as any).add as any)(("dummy" as any) + (yt as any));
                          }), ((at as any).set as any)(("dummy" as any) + (yt as any), (L as any)[((u as any).get as any)(((At as any)[yt] as any)[0])]);
                        }, xt: any = 0; (xt as any) < ((At as any).length as any); xt++) (pt as any)(xt);
                    }
                    var lt: any = new (Map as any)(),
                      ot: any = new (Map as any)(),
                      Lt: any = function (this: any, yt: any): any {
                        ((((W as any).get as any)(yt) as any).forEach as any)(function (this: any, Mt: any): any {
                          var Zt: any = void 0,
                            $t: any = void 0;
                          ((Mt as any).direction as any) == ("horizontal" as any) ? (Zt = ((P as any).get as any)(yt) ? ((P as any).get as any)(yt) : yt, ((P as any).get as any)((Mt as any).id) ? $t = {
                            id: ((P as any).get as any)((Mt as any).id),
                            gap: (Mt as any).gap,
                            direction: (Mt as any).direction
                          } : $t = Mt, ((lt as any).has as any)(Zt) ? ((((lt as any).get as any)(Zt) as any).push as any)($t) : ((lt as any).set as any)(Zt, [$t]), ((lt as any).has as any)(($t as any).id) || ((lt as any).set as any)(($t as any).id, [])) : (Zt = ((Y as any).get as any)(yt) ? ((Y as any).get as any)(yt) : yt, ((Y as any).get as any)((Mt as any).id) ? $t = {
                            id: ((Y as any).get as any)((Mt as any).id),
                            gap: (Mt as any).gap,
                            direction: (Mt as any).direction
                          } : $t = Mt, ((ot as any).has as any)(Zt) ? ((((ot as any).get as any)(Zt) as any).push as any)($t) : ((ot as any).set as any)(Zt, [$t]), ((ot as any).has as any)(($t as any).id) || ((ot as any).set as any)(($t as any).id, []));
                        });
                      },
                      ft: any = !0,
                      st: any = !1,
                      Xt: any = void 0;
                    try {
                      for (var Tt: any = ((((W as any).keys as any)() as any)[(Symbol as any).iterator] as any)(), Ct: any; !(ft = ((Ct = ((Tt as any).next as any)()) as any).done); ft = !0) {
                        var Bt: any = (Ct as any).value;
                        (Lt as any)(Bt);
                      }
                    } catch (Gt: any) {
                      st = !0, Xt = Gt;
                    } finally {
                      try {
                        !ft && (Tt as any).return && ((Tt as any).return as any)();
                      } finally {
                        if (st) throw Xt;
                      }
                    }
                    var bt: any = (E as any)(lt),
                      zt: any = (E as any)(ot),
                      St: any = (o as any)(bt),
                      kt: any = (o as any)(zt),
                      Kt: any = (p as any)(lt),
                      ce: any = (p as any)(ot),
                      Qt: any = [],
                      jt: any = [];
                    ((St as any).forEach as any)(function (this: any, Gt: any, yt: any): any {
                      (Qt as any)[yt] = [], ((Gt as any).forEach as any)(function (this: any, Mt: any): any {
                        ((((Kt as any).get as any)(Mt) as any).length as any) == (0 as any) && (((Qt as any)[yt] as any).push as any)(Mt);
                      });
                    }), ((kt as any).forEach as any)(function (this: any, Gt: any, yt: any): any {
                      (jt as any)[yt] = [], ((Gt as any).forEach as any)(function (this: any, Mt: any): any {
                        ((((ce as any).get as any)(Mt) as any).length as any) == (0 as any) && (((jt as any)[yt] as any).push as any)(Mt);
                      });
                    });
                    var _t: any = (M as any)(lt, "horizontal", ct, q, Qt),
                      Jt: any = (M as any)(ot, "vertical", nt, at, jt),
                      oe: any = function (this: any, yt: any): any {
                        ((Z as any).get as any)(yt) ? ((((Z as any).get as any)(yt) as any).forEach as any)(function (this: any, Mt: any): any {
                          (d as any)[((u as any).get as any)(Mt)] = ((_t as any).get as any)(yt);
                        }) : (d as any)[((u as any).get as any)(yt)] = ((_t as any).get as any)(yt);
                      },
                      te: any = !0,
                      ee: any = !1,
                      Le: any = void 0;
                    try {
                      for (var ge: any = ((((_t as any).keys as any)() as any)[(Symbol as any).iterator] as any)(), Ce: any; !(te = ((Ce = ((ge as any).next as any)()) as any).done); te = !0) {
                        var ue: any = (Ce as any).value;
                        (oe as any)(ue);
                      }
                    } catch (Gt: any) {
                      ee = !0, Le = Gt;
                    } finally {
                      try {
                        !te && (ge as any).return && ((ge as any).return as any)();
                      } finally {
                        if (ee) throw Le;
                      }
                    }
                    var ke: any = function (this: any, yt: any): any {
                        ((K as any).get as any)(yt) ? ((((K as any).get as any)(yt) as any).forEach as any)(function (this: any, Mt: any): any {
                          (L as any)[((u as any).get as any)(Mt)] = ((Jt as any).get as any)(yt);
                        }) : (L as any)[((u as any).get as any)(yt)] = ((Jt as any).get as any)(yt);
                      },
                      de: any = !0,
                      we: any = !1,
                      Ae: any = void 0;
                    try {
                      for (var ve: any = ((((Jt as any).keys as any)() as any)[(Symbol as any).iterator] as any)(), Me: any; !(de = ((Me = ((ve as any).next as any)()) as any).done); de = !0) {
                        var ue: any = (Me as any).value;
                        (ke as any)(ue);
                      }
                    } catch (Gt: any) {
                      we = !0, Ae = Gt;
                    } finally {
                      try {
                        !de && (ve as any).return && ((ve as any).return as any)();
                      } finally {
                        if (we) throw Ae;
                      }
                    }
                  } as any)();
                }
                for (var Yt: any = 0; (Yt as any) < ((b as any).length as any); Yt++) {
                  var Vt: any = (b as any)[Yt];
                  (((Vt as any).getChild as any)() as any) == (null as any) && ((Vt as any).setCenter as any)((d as any)[((u as any).get as any)((Vt as any).id)], (L as any)[((u as any).get as any)((Vt as any).id)]);
                }
              }, (a as any).exports = n;
            },
            551: (a: any): any => {
              (a as any).exports = C;
            }
          },
          N: any = {};
        function v(this: any, a: any): any {
          var r: any = (N as any)[a];
          if ((r as any) !== (void 0 as any)) return (r as any).exports;
          var i: any = (N as any)[a] = {
            exports: {}
          };
          return ((R as any)[a] as any)(i, (i as any).exports, v), (i as any).exports;
        }
        var h: any = (v as any)(45);
        return h;
      }) as any)();
    });
  } as any)(le)), (le as any).exports;
}
var yr: any = (he as any).exports,
  xe: any;
function mr(this: any): any {
  return xe || (xe = 1, (function (this: any, x: any, A: any): any {
    (function (this: any, R: any, N: any): any {
      (x as any).exports = (N as any)((pr as any)());
    } as any)(yr, function (this: any, C: any): any {
      return (((): any => {
        var R: any = {
            658: (a: any): any => {
              (a as any).exports = ((Object as any).assign as any) != (null as any) ? (((Object as any).assign as any).bind as any)(Object) : function (this: any, r: any): any {
                for (var i: any = (arguments as any).length, f: any = (Array as any)((i as any) > (1 as any) ? (i as any) - (1 as any) : 0), e: any = 1; (e as any) < (i as any); e++) (f as any)[(e as any) - (1 as any)] = (arguments as any)[e];
                return ((f as any).forEach as any)(function (this: any, g: any): any {
                  ((((Object as any).keys as any)(g) as any).forEach as any)(function (this: any, t: any): any {
                    return (r as any)[t] = (g as any)[t];
                  });
                }), r;
              };
            },
            548: (a: any, r: any, i: any): any => {
              var f: any = (function (this: any): any {
                  function t(this: any, s: any, n: any): any {
                    var c: any = [],
                      l: any = !0,
                      T: any = !1,
                      u: any = void 0;
                    try {
                      for (var d: any = ((s as any)[(Symbol as any).iterator] as any)(), L: any; !(l = ((L = ((d as any).next as any)()) as any).done) && (((c as any).push as any)((L as any).value), !(n && ((c as any).length as any) === (n as any))); l = !0);
                    } catch (b: any) {
                      T = !0, u = b;
                    } finally {
                      try {
                        !l && (d as any).return && ((d as any).return as any)();
                      } finally {
                        if (T) throw u;
                      }
                    }
                    return c;
                  }
                  return function (this: any, s: any, n: any): any {
                    if (((Array as any).isArray as any)(s)) return s;
                    if ((Symbol as any).iterator in (Object as any)(s)) return (t as any)(s, n);
                    throw new (TypeError as any)("Invalid attempt to destructure non-iterable instance");
                  };
                } as any)(),
                e: any = (((i as any)(140) as any).layoutBase as any).LinkedList,
                g: any = {};
              (g as any).getTopMostNodes = function (this: any, t: any): any {
                for (var s: any = {}, n: any = 0; (n as any) < ((t as any).length as any); n++) (s as any)[(((t as any)[n] as any).id as any)()] = !0;
                var c: any = ((t as any).filter as any)(function (this: any, l: any, T: any): any {
                  (typeof l as any) == ("number" as any) && (l = T);
                  for (var u: any = (((l as any).parent as any)() as any)[0]; (u as any) != (null as any);) {
                    if ((s as any)[((u as any).id as any)()]) return !1;
                    u = (((u as any).parent as any)() as any)[0];
                  }
                  return !0;
                });
                return c;
              }, (g as any).connectComponents = function (this: any, t: any, s: any, n: any, c: any): any {
                var l: any = new (e as any)(),
                  T: any = new (Set as any)(),
                  u: any = [],
                  d: any = void 0,
                  L: any = void 0,
                  b: any = void 0,
                  w: any = !1,
                  G: any = 1,
                  B: any = [],
                  U: any = [],
                  V: any = function (this: any): any {
                    var _: any = ((t as any).collection as any)();
                    ((U as any).push as any)(_);
                    var o: any = (n as any)[0],
                      E: any = ((t as any).collection as any)();
                    ((((E as any).merge as any)(o) as any).merge as any)(((((o as any).descendants as any)() as any).intersection as any)(s)), ((u as any).push as any)(o), ((E as any).forEach as any)(function (this: any, y: any): any {
                      ((l as any).push as any)(y), ((T as any).add as any)(y), ((_ as any).merge as any)(y);
                    });
                    for (var p: any = function (this: any): any {
                      o = ((l as any).shift as any)();
                      var S: any = ((t as any).collection as any)();
                      ((((((o as any).neighborhood as any)() as any).nodes as any)() as any).forEach as any)(function (this: any, I: any): any {
                        ((((s as any).intersection as any)(((o as any).edgesWith as any)(I)) as any).length as any) > (0 as any) && ((S as any).merge as any)(I);
                      });
                      for (var O: any = 0; (O as any) < ((S as any).length as any); O++) {
                        var F: any = (S as any)[O];
                        if (d = ((n as any).intersection as any)(((F as any).union as any)(((F as any).ancestors as any)())), (d as any) != (null as any) && !((T as any).has as any)((d as any)[0])) {
                          var W: any = ((d as any).union as any)(((d as any).descendants as any)());
                          ((W as any).forEach as any)(function (this: any, I: any): any {
                            ((l as any).push as any)(I), ((T as any).add as any)(I), ((_ as any).merge as any)(I), ((n as any).has as any)(I) && ((u as any).push as any)(I);
                          });
                        }
                      }
                    }; ((l as any).length as any) != (0 as any);) (p as any)();
                    if (((_ as any).forEach as any)(function (this: any, y: any): any {
                      ((((s as any).intersection as any)(((y as any).connectedEdges as any)()) as any).forEach as any)(function (this: any, S: any): any {
                        ((_ as any).has as any)(((S as any).source as any)()) && ((_ as any).has as any)(((S as any).target as any)()) && ((_ as any).merge as any)(S);
                      });
                    }), ((u as any).length as any) == ((n as any).length as any) && (w = !0), !w || w && (G as any) > (1 as any)) {
                      L = (u as any)[0], b = (((L as any).connectedEdges as any)() as any).length, ((u as any).forEach as any)(function (this: any, y: any): any {
                        ((((y as any).connectedEdges as any)() as any).length as any) < (b as any) && (b = (((y as any).connectedEdges as any)() as any).length, L = y);
                      }), ((B as any).push as any)(((L as any).id as any)());
                      var m: any = ((t as any).collection as any)();
                      ((m as any).merge as any)((u as any)[0]), ((u as any).forEach as any)(function (this: any, y: any): any {
                        ((m as any).merge as any)(y);
                      }), u = [], n = ((n as any).difference as any)(m), G++;
                    }
                  };
                do (V as any)(); while (!w);
                return c && ((B as any).length as any) > (0 as any) && ((c as any).set as any)(("dummy" as any) + (((c as any).size as any) + (1 as any) as any), B), U;
              }, (g as any).relocateComponent = function (this: any, t: any, s: any, n: any): any {
                if (!(n as any).fixedNodeConstraint) {
                  var c: any = (Number as any).POSITIVE_INFINITY,
                    l: any = (Number as any).NEGATIVE_INFINITY,
                    T: any = (Number as any).POSITIVE_INFINITY,
                    u: any = (Number as any).NEGATIVE_INFINITY;
                  if (((n as any).quality as any) == ("draft" as any)) {
                    var d: any = !0,
                      L: any = !1,
                      b: any = void 0;
                    try {
                      for (var w: any = (((s as any).nodeIndexes as any)[(Symbol as any).iterator] as any)(), G: any; !(d = ((G = ((w as any).next as any)()) as any).done); d = !0) {
                        var B: any = (G as any).value,
                          U: any = (f as any)(B, 2),
                          V: any = (U as any)[0],
                          M: any = (U as any)[1],
                          _: any = (((n as any).cy as any).getElementById as any)(V);
                        if (_) {
                          var o: any = ((_ as any).boundingBox as any)(),
                            E: any = (((s as any).xCoords as any)[M] as any) - (((o as any).w as any) / (2 as any) as any),
                            p: any = (((s as any).xCoords as any)[M] as any) + (((o as any).w as any) / (2 as any) as any),
                            m: any = (((s as any).yCoords as any)[M] as any) - (((o as any).h as any) / (2 as any) as any),
                            y: any = (((s as any).yCoords as any)[M] as any) + (((o as any).h as any) / (2 as any) as any);
                          (E as any) < (c as any) && (c = E), (p as any) > (l as any) && (l = p), (m as any) < (T as any) && (T = m), (y as any) > (u as any) && (u = y);
                        }
                      }
                    } catch (I: any) {
                      L = !0, b = I;
                    } finally {
                      try {
                        !d && (w as any).return && ((w as any).return as any)();
                      } finally {
                        if (L) throw b;
                      }
                    }
                    var S: any = ((t as any).x as any) - (((l as any) + (c as any) as any) / (2 as any) as any),
                      O: any = ((t as any).y as any) - (((u as any) + (T as any) as any) / (2 as any) as any);
                    (s as any).xCoords = (((s as any).xCoords as any).map as any)(function (this: any, I: any): any {
                      return (I as any) + (S as any);
                    }), (s as any).yCoords = (((s as any).yCoords as any).map as any)(function (this: any, I: any): any {
                      return (I as any) + (O as any);
                    });
                  } else {
                    ((((Object as any).keys as any)(s) as any).forEach as any)(function (this: any, I: any): any {
                      var Q: any = (s as any)[I],
                        z: any = (((Q as any).getRect as any)() as any).x,
                        X: any = ((((Q as any).getRect as any)() as any).x as any) + ((((Q as any).getRect as any)() as any).width as any),
                        rt: any = (((Q as any).getRect as any)() as any).y,
                        $: any = ((((Q as any).getRect as any)() as any).y as any) + ((((Q as any).getRect as any)() as any).height as any);
                      (z as any) < (c as any) && (c = z), (X as any) > (l as any) && (l = X), (rt as any) < (T as any) && (T = rt), ($ as any) > (u as any) && (u = $);
                    });
                    var F: any = ((t as any).x as any) - (((l as any) + (c as any) as any) / (2 as any) as any),
                      W: any = ((t as any).y as any) - (((u as any) + (T as any) as any) / (2 as any) as any);
                    ((((Object as any).keys as any)(s) as any).forEach as any)(function (this: any, I: any): any {
                      var Q: any = (s as any)[I];
                      ((Q as any).setCenter as any)((((Q as any).getCenterX as any)() as any) + (F as any), (((Q as any).getCenterY as any)() as any) + (W as any));
                    });
                  }
                }
              }, (g as any).calcBoundingBox = function (this: any, t: any, s: any, n: any, c: any): any {
                for (var l: any = (Number as any).MAX_SAFE_INTEGER, T: any = (Number as any).MIN_SAFE_INTEGER, u: any = (Number as any).MAX_SAFE_INTEGER, d: any = (Number as any).MIN_SAFE_INTEGER, L: any = void 0, b: any = void 0, w: any = void 0, G: any = void 0, B: any = ((((t as any).descendants as any)() as any).not as any)(":parent"), U: any = (B as any).length, V: any = 0; (V as any) < (U as any); V++) {
                  var M: any = (B as any)[V];
                  L = ((s as any)[((c as any).get as any)(((M as any).id as any)())] as any) - ((((M as any).width as any)() as any) / (2 as any) as any), b = ((s as any)[((c as any).get as any)(((M as any).id as any)())] as any) + ((((M as any).width as any)() as any) / (2 as any) as any), w = ((n as any)[((c as any).get as any)(((M as any).id as any)())] as any) - ((((M as any).height as any)() as any) / (2 as any) as any), G = ((n as any)[((c as any).get as any)(((M as any).id as any)())] as any) + ((((M as any).height as any)() as any) / (2 as any) as any), (l as any) > (L as any) && (l = L), (T as any) < (b as any) && (T = b), (u as any) > (w as any) && (u = w), (d as any) < (G as any) && (d = G);
                }
                var _: any = {};
                return (_ as any).topLeftX = l, (_ as any).topLeftY = u, (_ as any).width = (T as any) - (l as any), (_ as any).height = (d as any) - (u as any), _;
              }, (g as any).calcParentsWithoutChildren = function (this: any, t: any, s: any): any {
                var n: any = ((t as any).collection as any)();
                return ((((s as any).nodes as any)(":parent") as any).forEach as any)(function (this: any, c: any): any {
                  var l: any = !1;
                  ((((c as any).children as any)() as any).forEach as any)(function (this: any, T: any): any {
                    (((T as any).css as any)("display") as any) != ("none" as any) && (l = !0);
                  }), l || ((n as any).merge as any)(c);
                }), n;
              }, (a as any).exports = g;
            },
            816: (a: any, r: any, i: any): any => {
              var f: any = (i as any)(548),
                e: any = ((i as any)(140) as any).CoSELayout,
                g: any = ((i as any)(140) as any).CoSENode,
                t: any = (((i as any)(140) as any).layoutBase as any).PointD,
                s: any = (((i as any)(140) as any).layoutBase as any).DimensionD,
                n: any = (((i as any)(140) as any).layoutBase as any).LayoutConstants,
                c: any = (((i as any)(140) as any).layoutBase as any).FDLayoutConstants,
                l: any = ((i as any)(140) as any).CoSEConstants,
                T: any = function (this: any, d: any, L: any): any {
                  var b: any = (d as any).cy,
                    w: any = (d as any).eles,
                    G: any = ((w as any).nodes as any)(),
                    B: any = ((w as any).edges as any)(),
                    U: any = void 0,
                    V: any = void 0,
                    M: any = void 0,
                    _: any = {};
                  (d as any).randomize && (U = (L as any).nodeIndexes, V = (L as any).xCoords, M = (L as any).yCoords);
                  var o: any = function (this: any, I: any): any {
                      return (typeof I as any) == ("function" as any);
                    },
                    E: any = function (this: any, I: any, Q: any): any {
                      return (o as any)(I) ? (I as any)(Q) : I;
                    },
                    p: any = ((f as any).calcParentsWithoutChildren as any)(b, w),
                    m: any = function W(this: any, I: any, Q: any, z: any, X: any): any {
                      for (var rt: any = (Q as any).length, $: any = 0; ($ as any) < (rt as any); $++) {
                        var D: any = (Q as any)[$],
                          H: any = null;
                        ((((D as any).intersection as any)(p) as any).length as any) == (0 as any) && (H = ((D as any).children as any)());
                        var k: any = void 0,
                          tt: any = ((D as any).layoutDimensions as any)({
                            nodeDimensionsIncludeLabels: (X as any).nodeDimensionsIncludeLabels
                          });
                        if ((((D as any).outerWidth as any)() as any) != (null as any) && (((D as any).outerHeight as any)() as any) != (null as any)) {
                          if ((X as any).randomize) {
                            if (!((D as any).isParent as any)()) k = ((I as any).add as any)(new (g as any)((z as any).graphManager, new (t as any)(((V as any)[((U as any).get as any)(((D as any).id as any)())] as any) - (((tt as any).w as any) / (2 as any) as any), ((M as any)[((U as any).get as any)(((D as any).id as any)())] as any) - (((tt as any).h as any) / (2 as any) as any)), new (s as any)((parseFloat as any)((tt as any).w), (parseFloat as any)((tt as any).h))));else {
                              var ht: any = ((f as any).calcBoundingBox as any)(D, V, M, U);
                              ((((D as any).intersection as any)(p) as any).length as any) == (0 as any) ? k = ((I as any).add as any)(new (g as any)((z as any).graphManager, new (t as any)((ht as any).topLeftX, (ht as any).topLeftY), new (s as any)((ht as any).width, (ht as any).height))) : k = ((I as any).add as any)(new (g as any)((z as any).graphManager, new (t as any)((ht as any).topLeftX, (ht as any).topLeftY), new (s as any)((parseFloat as any)((tt as any).w), (parseFloat as any)((tt as any).h))));
                            }
                          } else k = ((I as any).add as any)(new (g as any)((z as any).graphManager, new (t as any)((((D as any).position as any)("x") as any) - (((tt as any).w as any) / (2 as any) as any), (((D as any).position as any)("y") as any) - (((tt as any).h as any) / (2 as any) as any)), new (s as any)((parseFloat as any)((tt as any).w), (parseFloat as any)((tt as any).h))));
                        } else k = ((I as any).add as any)(new (g as any)((this as any).graphManager));
                        if ((k as any).id = ((D as any).data as any)("id"), (k as any).nodeRepulsion = (E as any)((X as any).nodeRepulsion, D), (k as any).paddingLeft = (parseInt as any)(((D as any).css as any)("padding")), (k as any).paddingTop = (parseInt as any)(((D as any).css as any)("padding")), (k as any).paddingRight = (parseInt as any)(((D as any).css as any)("padding")), (k as any).paddingBottom = (parseInt as any)(((D as any).css as any)("padding")), (X as any).nodeDimensionsIncludeLabels && ((k as any).labelWidth = (((D as any).boundingBox as any)({
                          includeLabels: !0,
                          includeNodes: !1,
                          includeOverlays: !1
                        }) as any).w, (k as any).labelHeight = (((D as any).boundingBox as any)({
                          includeLabels: !0,
                          includeNodes: !1,
                          includeOverlays: !1
                        }) as any).h, (k as any).labelPosVertical = ((D as any).css as any)("text-valign"), (k as any).labelPosHorizontal = ((D as any).css as any)("text-halign")), (_ as any)[((D as any).data as any)("id")] = k, (isNaN as any)(((k as any).rect as any).x) && (((k as any).rect as any).x = 0), (isNaN as any)(((k as any).rect as any).y) && (((k as any).rect as any).y = 0), (H as any) != (null as any) && ((H as any).length as any) > (0 as any)) {
                          var J: any = void 0;
                          J = ((((z as any).getGraphManager as any)() as any).add as any)(((z as any).newGraph as any)(), k), (W as any)(J, H, z, X);
                        }
                      }
                    },
                    y: any = function (this: any, I: any, Q: any, z: any): any {
                      for (var X: any = 0, rt: any = 0, $: any = 0; ($ as any) < ((z as any).length as any); $++) {
                        var D: any = (z as any)[$],
                          H: any = (_ as any)[((D as any).data as any)("source")],
                          k: any = (_ as any)[((D as any).data as any)("target")];
                        if (H && k && (H as any) !== (k as any) && ((((H as any).getEdgesBetween as any)(k) as any).length as any) == (0 as any)) {
                          var tt: any = ((Q as any).add as any)(((I as any).newEdge as any)(), H, k);
                          (tt as any).id = ((D as any).id as any)(), (tt as any).idealLength = (E as any)((d as any).idealEdgeLength, D), (tt as any).edgeElasticity = (E as any)((d as any).edgeElasticity, D), X += (tt as any).idealLength, rt++;
                        }
                      }
                      ((d as any).idealEdgeLength as any) != (null as any) && ((rt as any) > (0 as any) ? (l as any).DEFAULT_EDGE_LENGTH = (c as any).DEFAULT_EDGE_LENGTH = (X as any) / (rt as any) : (o as any)((d as any).idealEdgeLength) ? (l as any).DEFAULT_EDGE_LENGTH = (c as any).DEFAULT_EDGE_LENGTH = 50 : (l as any).DEFAULT_EDGE_LENGTH = (c as any).DEFAULT_EDGE_LENGTH = (d as any).idealEdgeLength, (l as any).MIN_REPULSION_DIST = (c as any).MIN_REPULSION_DIST = ((c as any).DEFAULT_EDGE_LENGTH as any) / (10 as any), (l as any).DEFAULT_RADIAL_SEPARATION = (c as any).DEFAULT_EDGE_LENGTH);
                    },
                    S: any = function (this: any, I: any, Q: any): any {
                      (Q as any).fixedNodeConstraint && (((I as any).constraints as any).fixedNodeConstraint = (Q as any).fixedNodeConstraint), (Q as any).alignmentConstraint && (((I as any).constraints as any).alignmentConstraint = (Q as any).alignmentConstraint), (Q as any).relativePlacementConstraint && (((I as any).constraints as any).relativePlacementConstraint = (Q as any).relativePlacementConstraint);
                    };
                  ((d as any).nestingFactor as any) != (null as any) && ((l as any).PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = (c as any).PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = (d as any).nestingFactor), ((d as any).gravity as any) != (null as any) && ((l as any).DEFAULT_GRAVITY_STRENGTH = (c as any).DEFAULT_GRAVITY_STRENGTH = (d as any).gravity), ((d as any).numIter as any) != (null as any) && ((l as any).MAX_ITERATIONS = (c as any).MAX_ITERATIONS = (d as any).numIter), ((d as any).gravityRange as any) != (null as any) && ((l as any).DEFAULT_GRAVITY_RANGE_FACTOR = (c as any).DEFAULT_GRAVITY_RANGE_FACTOR = (d as any).gravityRange), ((d as any).gravityCompound as any) != (null as any) && ((l as any).DEFAULT_COMPOUND_GRAVITY_STRENGTH = (c as any).DEFAULT_COMPOUND_GRAVITY_STRENGTH = (d as any).gravityCompound), ((d as any).gravityRangeCompound as any) != (null as any) && ((l as any).DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = (c as any).DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = (d as any).gravityRangeCompound), ((d as any).initialEnergyOnIncremental as any) != (null as any) && ((l as any).DEFAULT_COOLING_FACTOR_INCREMENTAL = (c as any).DEFAULT_COOLING_FACTOR_INCREMENTAL = (d as any).initialEnergyOnIncremental), ((d as any).tilingCompareBy as any) != (null as any) && ((l as any).TILING_COMPARE_BY = (d as any).tilingCompareBy), ((d as any).quality as any) == ("proof" as any) ? (n as any).QUALITY = 2 : (n as any).QUALITY = 0, (l as any).NODE_DIMENSIONS_INCLUDE_LABELS = (c as any).NODE_DIMENSIONS_INCLUDE_LABELS = (n as any).NODE_DIMENSIONS_INCLUDE_LABELS = (d as any).nodeDimensionsIncludeLabels, (l as any).DEFAULT_INCREMENTAL = (c as any).DEFAULT_INCREMENTAL = (n as any).DEFAULT_INCREMENTAL = !(d as any).randomize, (l as any).ANIMATE = (c as any).ANIMATE = (n as any).ANIMATE = (d as any).animate, (l as any).TILE = (d as any).tile, (l as any).TILING_PADDING_VERTICAL = (typeof (d as any).tilingPaddingVertical as any) == ("function" as any) ? (((d as any).tilingPaddingVertical as any).call as any)() : (d as any).tilingPaddingVertical, (l as any).TILING_PADDING_HORIZONTAL = (typeof (d as any).tilingPaddingHorizontal as any) == ("function" as any) ? (((d as any).tilingPaddingHorizontal as any).call as any)() : (d as any).tilingPaddingHorizontal, (l as any).DEFAULT_INCREMENTAL = (c as any).DEFAULT_INCREMENTAL = (n as any).DEFAULT_INCREMENTAL = !0, (l as any).PURE_INCREMENTAL = !(d as any).randomize, (n as any).DEFAULT_UNIFORM_LEAF_NODE_SIZES = (d as any).uniformNodeDimensions, ((d as any).step as any) == ("transformed" as any) && ((l as any).TRANSFORM_ON_CONSTRAINT_HANDLING = !0, (l as any).ENFORCE_CONSTRAINTS = !1, (l as any).APPLY_LAYOUT = !1), ((d as any).step as any) == ("enforced" as any) && ((l as any).TRANSFORM_ON_CONSTRAINT_HANDLING = !1, (l as any).ENFORCE_CONSTRAINTS = !0, (l as any).APPLY_LAYOUT = !1), ((d as any).step as any) == ("cose" as any) && ((l as any).TRANSFORM_ON_CONSTRAINT_HANDLING = !1, (l as any).ENFORCE_CONSTRAINTS = !1, (l as any).APPLY_LAYOUT = !0), ((d as any).step as any) == ("all" as any) && ((d as any).randomize ? (l as any).TRANSFORM_ON_CONSTRAINT_HANDLING = !0 : (l as any).TRANSFORM_ON_CONSTRAINT_HANDLING = !1, (l as any).ENFORCE_CONSTRAINTS = !0, (l as any).APPLY_LAYOUT = !0), (d as any).fixedNodeConstraint || (d as any).alignmentConstraint || (d as any).relativePlacementConstraint ? (l as any).TREE_REDUCTION_ON_INCREMENTAL = !1 : (l as any).TREE_REDUCTION_ON_INCREMENTAL = !0;
                  var O: any = new (e as any)(),
                    F: any = ((O as any).newGraphManager as any)();
                  return (m as any)(((F as any).addRoot as any)(), ((f as any).getTopMostNodes as any)(G), O, d), (y as any)(O, F, B), (S as any)(O, d), ((O as any).runLayout as any)(), _;
                };
              (a as any).exports = {
                coseLayout: T
              };
            },
            212: (a: any, r: any, i: any): any => {
              var f: any = (function (this: any): any {
                function d(this: any, L: any, b: any): any {
                  for (var w: any = 0; (w as any) < ((b as any).length as any); w++) {
                    var G: any = (b as any)[w];
                    (G as any).enumerable = (G as any).enumerable || !1, (G as any).configurable = !0, "value" in G && ((G as any).writable = !0), ((Object as any).defineProperty as any)(L, (G as any).key, G);
                  }
                }
                return function (this: any, L: any, b: any, w: any): any {
                  return b && (d as any)((L as any).prototype, b), w && (d as any)(L, w), L;
                };
              } as any)();
              function e(this: any, d: any, L: any): any {
                if (!(d instanceof L)) throw new (TypeError as any)("Cannot call a class as a function");
              }
              var g: any = (i as any)(658),
                t: any = (i as any)(548),
                s: any = (i as any)(657),
                n: any = (s as any).spectralLayout,
                c: any = (i as any)(816),
                l: any = (c as any).coseLayout,
                T: any = ((Object as any).freeze as any)({
                  quality: "default",
                  randomize: !0,
                  animate: !0,
                  animationDuration: 1e3,
                  animationEasing: void 0,
                  fit: !0,
                  padding: 30,
                  nodeDimensionsIncludeLabels: !1,
                  uniformNodeDimensions: !1,
                  packComponents: !0,
                  step: "all",
                  samplingType: !0,
                  sampleSize: 25,
                  nodeSeparation: 75,
                  piTol: 1e-7,
                  nodeRepulsion: function (this: any, L: any): any {
                    return 4500;
                  },
                  idealEdgeLength: function (this: any, L: any): any {
                    return 50;
                  },
                  edgeElasticity: function (this: any, L: any): any {
                    return .45;
                  },
                  nestingFactor: .1,
                  gravity: .25,
                  numIter: 2500,
                  tile: !0,
                  tilingCompareBy: void 0,
                  tilingPaddingVertical: 10,
                  tilingPaddingHorizontal: 10,
                  gravityRangeCompound: 1.5,
                  gravityCompound: 1,
                  gravityRange: 3.8,
                  initialEnergyOnIncremental: .3,
                  fixedNodeConstraint: void 0,
                  alignmentConstraint: void 0,
                  relativePlacementConstraint: void 0,
                  ready: function (this: any): any {},
                  stop: function (this: any): any {}
                }),
                u: any = (function (this: any): any {
                  function d(this: any, L: any): any {
                    (e as any)(this, d), (this as any).options = (g as any)({}, T, L);
                  }
                  return (f as any)(d, [{
                    key: "run",
                    value: function (this: any): any {
                      var b: any = this,
                        w: any = (this as any).options,
                        G: any = (w as any).cy,
                        B: any = (w as any).eles,
                        U: any = [],
                        V: any = [],
                        M: any = void 0,
                        _: any = [];
                      (w as any).fixedNodeConstraint && (!((Array as any).isArray as any)((w as any).fixedNodeConstraint) || (((w as any).fixedNodeConstraint as any).length as any) == (0 as any)) && ((w as any).fixedNodeConstraint = void 0), (w as any).alignmentConstraint && (((w as any).alignmentConstraint as any).vertical && (!((Array as any).isArray as any)(((w as any).alignmentConstraint as any).vertical) || ((((w as any).alignmentConstraint as any).vertical as any).length as any) == (0 as any)) && (((w as any).alignmentConstraint as any).vertical = void 0), ((w as any).alignmentConstraint as any).horizontal && (!((Array as any).isArray as any)(((w as any).alignmentConstraint as any).horizontal) || ((((w as any).alignmentConstraint as any).horizontal as any).length as any) == (0 as any)) && (((w as any).alignmentConstraint as any).horizontal = void 0)), (w as any).relativePlacementConstraint && (!((Array as any).isArray as any)((w as any).relativePlacementConstraint) || (((w as any).relativePlacementConstraint as any).length as any) == (0 as any)) && ((w as any).relativePlacementConstraint = void 0);
                      var o: any = (w as any).fixedNodeConstraint || (w as any).alignmentConstraint || (w as any).relativePlacementConstraint;
                      o && ((w as any).tile = !1, (w as any).packComponents = !1);
                      var E: any = void 0,
                        p: any = !1;
                      if ((G as any).layoutUtilities && (w as any).packComponents && (E = ((G as any).layoutUtilities as any)("get"), E || (E = ((G as any).layoutUtilities as any)()), p = !0), ((((B as any).nodes as any)() as any).length as any) > (0 as any)) if (p) {
                        var S: any = ((t as any).getTopMostNodes as any)((((w as any).eles as any).nodes as any)());
                        if (M = ((t as any).connectComponents as any)(G, (w as any).eles, S), ((M as any).forEach as any)(function (this: any, vt: any): any {
                          var it: any = ((vt as any).boundingBox as any)();
                          ((_ as any).push as any)({
                            x: ((it as any).x1 as any) + (((it as any).w as any) / (2 as any) as any),
                            y: ((it as any).y1 as any) + (((it as any).h as any) / (2 as any) as any)
                          });
                        }), (w as any).randomize && ((M as any).forEach as any)(function (this: any, vt: any): any {
                          (w as any).eles = vt, ((U as any).push as any)((n as any)(w));
                        }), ((w as any).quality as any) == ("default" as any) || ((w as any).quality as any) == ("proof" as any)) {
                          var O: any = ((G as any).collection as any)();
                          if ((w as any).tile) {
                            var F: any = new (Map as any)(),
                              W: any = [],
                              I: any = [],
                              Q: any = 0,
                              z: any = {
                                nodeIndexes: F,
                                xCoords: W,
                                yCoords: I
                              },
                              X: any = [];
                            if (((M as any).forEach as any)(function (this: any, vt: any, it: any): any {
                              ((((vt as any).edges as any)() as any).length as any) == (0 as any) && (((((vt as any).nodes as any)() as any).forEach as any)(function (this: any, ut: any, Et: any): any {
                                ((O as any).merge as any)((((vt as any).nodes as any)() as any)[Et]), ((ut as any).isParent as any)() || ((((z as any).nodeIndexes as any).set as any)((((((vt as any).nodes as any)() as any)[Et] as any).id as any)(), Q++), (((z as any).xCoords as any).push as any)(((((((vt as any).nodes as any)() as any)[0] as any).position as any)() as any).x), (((z as any).yCoords as any).push as any)(((((((vt as any).nodes as any)() as any)[0] as any).position as any)() as any).y));
                              }), ((X as any).push as any)(it));
                            }), ((O as any).length as any) > (1 as any)) {
                              var rt: any = ((O as any).boundingBox as any)();
                              ((_ as any).push as any)({
                                x: ((rt as any).x1 as any) + (((rt as any).w as any) / (2 as any) as any),
                                y: ((rt as any).y1 as any) + (((rt as any).h as any) / (2 as any) as any)
                              }), ((M as any).push as any)(O), ((U as any).push as any)(z);
                              for (var $: any = ((X as any).length as any) - (1 as any); ($ as any) >= (0 as any); $--) ((M as any).splice as any)((X as any)[$], 1), ((U as any).splice as any)((X as any)[$], 1), ((_ as any).splice as any)((X as any)[$], 1);
                            }
                          }
                          ((M as any).forEach as any)(function (this: any, vt: any, it: any): any {
                            (w as any).eles = vt, ((V as any).push as any)((l as any)(w, (U as any)[it])), ((t as any).relocateComponent as any)((_ as any)[it], (V as any)[it], w);
                          });
                        } else ((M as any).forEach as any)(function (this: any, vt: any, it: any): any {
                          ((t as any).relocateComponent as any)((_ as any)[it], (U as any)[it], w);
                        });
                        var D: any = new (Set as any)();
                        if (((M as any).length as any) > (1 as any)) {
                          var H: any = [],
                            k: any = ((B as any).filter as any)(function (this: any, vt: any): any {
                              return (((vt as any).css as any)("display") as any) == ("none" as any);
                            });
                          ((M as any).forEach as any)(function (this: any, vt: any, it: any): any {
                            var ut: any = void 0;
                            if (((w as any).quality as any) == ("draft" as any) && (ut = ((U as any)[it] as any).nodeIndexes), ((((((vt as any).nodes as any)() as any).not as any)(k) as any).length as any) > (0 as any)) {
                              var Et: any = {};
                              (Et as any).edges = [], (Et as any).nodes = [];
                              var wt: any = void 0;
                              ((((((vt as any).nodes as any)() as any).not as any)(k) as any).forEach as any)(function (this: any, Ot: any): any {
                                if (((w as any).quality as any) == ("draft" as any)) {
                                  if (!((Ot as any).isParent as any)()) wt = ((ut as any).get as any)(((Ot as any).id as any)()), (((Et as any).nodes as any).push as any)({
                                    x: ((((U as any)[it] as any).xCoords as any)[wt] as any) - (((((Ot as any).boundingbox as any)() as any).w as any) / (2 as any) as any),
                                    y: ((((U as any)[it] as any).yCoords as any)[wt] as any) - (((((Ot as any).boundingbox as any)() as any).h as any) / (2 as any) as any),
                                    width: (((Ot as any).boundingbox as any)() as any).w,
                                    height: (((Ot as any).boundingbox as any)() as any).h
                                  });else {
                                    var mt: any = ((t as any).calcBoundingBox as any)(Ot, ((U as any)[it] as any).xCoords, ((U as any)[it] as any).yCoords, ut);
                                    (((Et as any).nodes as any).push as any)({
                                      x: (mt as any).topLeftX,
                                      y: (mt as any).topLeftY,
                                      width: (mt as any).width,
                                      height: (mt as any).height
                                    });
                                  }
                                } else ((V as any)[it] as any)[((Ot as any).id as any)()] && (((Et as any).nodes as any).push as any)({
                                  x: ((((V as any)[it] as any)[((Ot as any).id as any)()] as any).getLeft as any)(),
                                  y: ((((V as any)[it] as any)[((Ot as any).id as any)()] as any).getTop as any)(),
                                  width: ((((V as any)[it] as any)[((Ot as any).id as any)()] as any).getWidth as any)(),
                                  height: ((((V as any)[it] as any)[((Ot as any).id as any)()] as any).getHeight as any)()
                                });
                              }), ((((vt as any).edges as any)() as any).forEach as any)(function (this: any, Ot: any): any {
                                var mt: any = ((Ot as any).source as any)(),
                                  Dt: any = ((Ot as any).target as any)();
                                if ((((mt as any).css as any)("display") as any) != ("none" as any) && (((Dt as any).css as any)("display") as any) != ("none" as any)) if (((w as any).quality as any) == ("draft" as any)) {
                                  var Rt: any = ((ut as any).get as any)(((mt as any).id as any)()),
                                    Ht: any = ((ut as any).get as any)(((Dt as any).id as any)()),
                                    Ut: any = [],
                                    Pt: any = [];
                                  if (((mt as any).isParent as any)()) {
                                    var Ft: any = ((t as any).calcBoundingBox as any)(mt, ((U as any)[it] as any).xCoords, ((U as any)[it] as any).yCoords, ut);
                                    ((Ut as any).push as any)(((Ft as any).topLeftX as any) + (((Ft as any).width as any) / (2 as any) as any)), ((Ut as any).push as any)(((Ft as any).topLeftY as any) + (((Ft as any).height as any) / (2 as any) as any));
                                  } else ((Ut as any).push as any)((((U as any)[it] as any).xCoords as any)[Rt]), ((Ut as any).push as any)((((U as any)[it] as any).yCoords as any)[Rt]);
                                  if (((Dt as any).isParent as any)()) {
                                    var Yt: any = ((t as any).calcBoundingBox as any)(Dt, ((U as any)[it] as any).xCoords, ((U as any)[it] as any).yCoords, ut);
                                    ((Pt as any).push as any)(((Yt as any).topLeftX as any) + (((Yt as any).width as any) / (2 as any) as any)), ((Pt as any).push as any)(((Yt as any).topLeftY as any) + (((Yt as any).height as any) / (2 as any) as any));
                                  } else ((Pt as any).push as any)((((U as any)[it] as any).xCoords as any)[Ht]), ((Pt as any).push as any)((((U as any)[it] as any).yCoords as any)[Ht]);
                                  (((Et as any).edges as any).push as any)({
                                    startX: (Ut as any)[0],
                                    startY: (Ut as any)[1],
                                    endX: (Pt as any)[0],
                                    endY: (Pt as any)[1]
                                  });
                                } else ((V as any)[it] as any)[((mt as any).id as any)()] && ((V as any)[it] as any)[((Dt as any).id as any)()] && (((Et as any).edges as any).push as any)({
                                  startX: ((((V as any)[it] as any)[((mt as any).id as any)()] as any).getCenterX as any)(),
                                  startY: ((((V as any)[it] as any)[((mt as any).id as any)()] as any).getCenterY as any)(),
                                  endX: ((((V as any)[it] as any)[((Dt as any).id as any)()] as any).getCenterX as any)(),
                                  endY: ((((V as any)[it] as any)[((Dt as any).id as any)()] as any).getCenterY as any)()
                                });
                              }), (((Et as any).nodes as any).length as any) > (0 as any) && (((H as any).push as any)(Et), ((D as any).add as any)(it));
                            }
                          });
                          var tt: any = (((E as any).packComponents as any)(H, (w as any).randomize) as any).shifts;
                          if (((w as any).quality as any) == ("draft" as any)) ((U as any).forEach as any)(function (this: any, vt: any, it: any): any {
                            var ut: any = (((vt as any).xCoords as any).map as any)(function (this: any, wt: any): any {
                                return (wt as any) + (((tt as any)[it] as any).dx as any);
                              }),
                              Et: any = (((vt as any).yCoords as any).map as any)(function (this: any, wt: any): any {
                                return (wt as any) + (((tt as any)[it] as any).dy as any);
                              });
                            (vt as any).xCoords = ut, (vt as any).yCoords = Et;
                          });else {
                            var ht: any = 0;
                            ((D as any).forEach as any)(function (this: any, vt: any): any {
                              ((((Object as any).keys as any)((V as any)[vt]) as any).forEach as any)(function (this: any, it: any): any {
                                var ut: any = ((V as any)[vt] as any)[it];
                                ((ut as any).setCenter as any)((((ut as any).getCenterX as any)() as any) + (((tt as any)[ht] as any).dx as any), (((ut as any).getCenterY as any)() as any) + (((tt as any)[ht] as any).dy as any));
                              }), ht++;
                            });
                          }
                        }
                      } else {
                        var m: any = (((w as any).eles as any).boundingBox as any)();
                        if (((_ as any).push as any)({
                          x: ((m as any).x1 as any) + (((m as any).w as any) / (2 as any) as any),
                          y: ((m as any).y1 as any) + (((m as any).h as any) / (2 as any) as any)
                        }), (w as any).randomize) {
                          var y: any = (n as any)(w);
                          ((U as any).push as any)(y);
                        }
                        ((w as any).quality as any) == ("default" as any) || ((w as any).quality as any) == ("proof" as any) ? (((V as any).push as any)((l as any)(w, (U as any)[0])), ((t as any).relocateComponent as any)((_ as any)[0], (V as any)[0], w)) : ((t as any).relocateComponent as any)((_ as any)[0], (U as any)[0], w);
                      }
                      var J: any = function (this: any, it: any, ut: any): any {
                        if (((w as any).quality as any) == ("default" as any) || ((w as any).quality as any) == ("proof" as any)) {
                          (typeof it as any) == ("number" as any) && (it = ut);
                          var Et: any = void 0,
                            wt: any = void 0,
                            Ot: any = ((it as any).data as any)("id");
                          return ((V as any).forEach as any)(function (this: any, Dt: any): any {
                            Ot in Dt && (Et = {
                              x: (((((Dt as any)[Ot] as any).getRect as any)() as any).getCenterX as any)(),
                              y: (((((Dt as any)[Ot] as any).getRect as any)() as any).getCenterY as any)()
                            }, wt = (Dt as any)[Ot]);
                          }), (w as any).nodeDimensionsIncludeLabels && ((wt as any).labelWidth && (((wt as any).labelPosHorizontal as any) == ("left" as any) ? (Et as any).x += ((wt as any).labelWidth as any) / (2 as any) : ((wt as any).labelPosHorizontal as any) == ("right" as any) && ((Et as any).x -= ((wt as any).labelWidth as any) / (2 as any))), (wt as any).labelHeight && (((wt as any).labelPosVertical as any) == ("top" as any) ? (Et as any).y += ((wt as any).labelHeight as any) / (2 as any) : ((wt as any).labelPosVertical as any) == ("bottom" as any) && ((Et as any).y -= ((wt as any).labelHeight as any) / (2 as any)))), (Et as any) == (null as any) && (Et = {
                            x: ((it as any).position as any)("x"),
                            y: ((it as any).position as any)("y")
                          }), {
                            x: (Et as any).x,
                            y: (Et as any).y
                          };
                        } else {
                          var mt: any = void 0;
                          return ((U as any).forEach as any)(function (this: any, Dt: any): any {
                            var Rt: any = (((Dt as any).nodeIndexes as any).get as any)(((it as any).id as any)());
                            (Rt as any) != (null as any) && (mt = {
                              x: ((Dt as any).xCoords as any)[Rt],
                              y: ((Dt as any).yCoords as any)[Rt]
                            });
                          }), (mt as any) == (null as any) && (mt = {
                            x: ((it as any).position as any)("x"),
                            y: ((it as any).position as any)("y")
                          }), {
                            x: (mt as any).x,
                            y: (mt as any).y
                          };
                        }
                      };
                      if (((w as any).quality as any) == ("default" as any) || ((w as any).quality as any) == ("proof" as any) || (w as any).randomize) {
                        var It: any = ((t as any).calcParentsWithoutChildren as any)(G, B),
                          Nt: any = ((B as any).filter as any)(function (this: any, vt: any): any {
                            return (((vt as any).css as any)("display") as any) == ("none" as any);
                          });
                        (w as any).eles = ((B as any).not as any)(Nt), ((((((((B as any).nodes as any)() as any).not as any)(":parent") as any).not as any)(Nt) as any).layoutPositions as any)(b, w, J), ((It as any).length as any) > (0 as any) && ((It as any).forEach as any)(function (this: any, vt: any): any {
                          ((vt as any).position as any)((J as any)(vt));
                        });
                      } else ((console as any).log as any)("If randomize option is set to false, then quality option must be 'default' or 'proof'.");
                    }
                  }]), d;
                } as any)();
              (a as any).exports = u;
            },
            657: (a: any, r: any, i: any): any => {
              var f: any = (i as any)(548),
                e: any = (((i as any)(140) as any).layoutBase as any).Matrix,
                g: any = (((i as any)(140) as any).layoutBase as any).SVD,
                t: any = function (this: any, n: any): any {
                  var c: any = (n as any).cy,
                    l: any = (n as any).eles,
                    T: any = ((l as any).nodes as any)(),
                    u: any = ((l as any).nodes as any)(":parent"),
                    d: any = new (Map as any)(),
                    L: any = new (Map as any)(),
                    b: any = new (Map as any)(),
                    w: any = [],
                    G: any = [],
                    B: any = [],
                    U: any = [],
                    V: any = [],
                    M: any = [],
                    _: any = [],
                    o: any = [],
                    E: any = void 0,
                    p: number = 1e8,
                    m: number = 1e-9,
                    y: any = (n as any).piTol,
                    S: any = (n as any).samplingType,
                    O: any = (n as any).nodeSeparation,
                    F: any = void 0,
                    W: any = function (this: any): any {
                      for (var Y: any = 0, Z: any = 0, K: any = !1; (Z as any) < (F as any);) {
                        Y = ((Math as any).floor as any)((((Math as any).random as any)() as any) * (E as any)), K = !1;
                        for (var q: any = 0; (q as any) < (Z as any); q++) if (((U as any)[q] as any) == (Y as any)) {
                          K = !0;
                          break;
                        }
                        if (!K) (U as any)[Z] = Y, Z++;else continue;
                      }
                    },
                    I: any = function (this: any, Y: any, Z: any, K: any): any {
                      for (var q: any = [], at: any = 0, ct: any = 0, nt: any = 0, et: any = void 0, j: any = [], dt: any = 0, At: any = 1, pt: any = 0; (pt as any) < (E as any); pt++) (j as any)[pt] = p;
                      for ((q as any)[ct] = Y, (j as any)[Y] = 0; (ct as any) >= (at as any);) {
                        nt = (q as any)[at++];
                        for (var xt: any = (w as any)[nt], lt: any = 0; (lt as any) < ((xt as any).length as any); lt++) et = ((L as any).get as any)((xt as any)[lt]), ((j as any)[et] as any) == (p as any) && ((j as any)[et] = ((j as any)[nt] as any) + (1 as any), (q as any)[++ct] = et);
                        ((M as any)[nt] as any)[Z] = ((j as any)[nt] as any) * (O as any);
                      }
                      if (K) {
                        for (var ot: any = 0; (ot as any) < (E as any); ot++) (((M as any)[ot] as any)[Z] as any) < ((V as any)[ot] as any) && ((V as any)[ot] = ((M as any)[ot] as any)[Z]);
                        for (var Lt: any = 0; (Lt as any) < (E as any); Lt++) ((V as any)[Lt] as any) > (dt as any) && (dt = (V as any)[Lt], At = Lt);
                      }
                      return At;
                    },
                    Q: any = function (this: any, Y: any): any {
                      var Z: any = void 0;
                      if (Y) {
                        Z = ((Math as any).floor as any)((((Math as any).random as any)() as any) * (E as any));
                        for (var q: any = 0; (q as any) < (E as any); q++) (V as any)[q] = p;
                        for (var at: any = 0; (at as any) < (F as any); at++) (U as any)[at] = Z, Z = (I as any)(Z, at, Y);
                      } else {
                        (W as any)();
                        for (var K: any = 0; (K as any) < (F as any); K++) (I as any)((U as any)[K], K, Y);
                      }
                      for (var ct: any = 0; (ct as any) < (E as any); ct++) for (var nt: any = 0; (nt as any) < (F as any); nt++) ((M as any)[ct] as any)[nt] *= ((M as any)[ct] as any)[nt];
                      for (var et: any = 0; (et as any) < (F as any); et++) (_ as any)[et] = [];
                      for (var j: any = 0; (j as any) < (F as any); j++) for (var dt: any = 0; (dt as any) < (F as any); dt++) ((_ as any)[j] as any)[dt] = ((M as any)[(U as any)[dt]] as any)[j];
                    },
                    z: any = function (this: any): any {
                      for (var Y: any = ((g as any).svd as any)(_), Z: any = (Y as any).S, K: any = (Y as any).U, q: any = (Y as any).V, at: any = (((Z as any)[0] as any) * ((Z as any)[0] as any) as any) * ((Z as any)[0] as any), ct: any = [], nt: any = 0; (nt as any) < (F as any); nt++) {
                        (ct as any)[nt] = [];
                        for (var et: any = 0; (et as any) < (F as any); et++) ((ct as any)[nt] as any)[et] = 0, (nt as any) == (et as any) && (((ct as any)[nt] as any)[et] = ((Z as any)[nt] as any) / ((((Z as any)[nt] as any) * ((Z as any)[nt] as any) as any) + ((at as any) / (((Z as any)[nt] as any) * ((Z as any)[nt] as any) as any) as any) as any));
                      }
                      o = ((e as any).multMat as any)(((e as any).multMat as any)(q, ct), ((e as any).transpose as any)(K));
                    },
                    X: any = function (this: any): any {
                      for (var Y: any = void 0, Z: any = void 0, K: any = [], q: any = [], at: any = [], ct: any = [], nt: any = 0; (nt as any) < (E as any); nt++) (K as any)[nt] = ((Math as any).random as any)(), (q as any)[nt] = ((Math as any).random as any)();
                      K = ((e as any).normalize as any)(K), q = ((e as any).normalize as any)(q);
                      for (var et: any = m, j: any = m, dt: any = void 0;;) {
                        for (var At: any = 0; (At as any) < (E as any); At++) (at as any)[At] = (K as any)[At];
                        if (K = ((e as any).multGamma as any)(((e as any).multL as any)(((e as any).multGamma as any)(at), M, o)), Y = ((e as any).dotProduct as any)(at, K), K = ((e as any).normalize as any)(K), et = ((e as any).dotProduct as any)(at, K), dt = ((Math as any).abs as any)((et as any) / (j as any)), (dt as any) <= ((1 as any) + (y as any) as any) && (dt as any) >= (1 as any)) break;
                        j = et;
                      }
                      for (var pt: any = 0; (pt as any) < (E as any); pt++) (at as any)[pt] = (K as any)[pt];
                      for (j = m;;) {
                        for (var xt: any = 0; (xt as any) < (E as any); xt++) (ct as any)[xt] = (q as any)[xt];
                        if (ct = ((e as any).minusOp as any)(ct, ((e as any).multCons as any)(at, ((e as any).dotProduct as any)(at, ct))), q = ((e as any).multGamma as any)(((e as any).multL as any)(((e as any).multGamma as any)(ct), M, o)), Z = ((e as any).dotProduct as any)(ct, q), q = ((e as any).normalize as any)(q), et = ((e as any).dotProduct as any)(ct, q), dt = ((Math as any).abs as any)((et as any) / (j as any)), (dt as any) <= ((1 as any) + (y as any) as any) && (dt as any) >= (1 as any)) break;
                        j = et;
                      }
                      for (var lt: any = 0; (lt as any) < (E as any); lt++) (ct as any)[lt] = (q as any)[lt];
                      G = ((e as any).multCons as any)(at, ((Math as any).sqrt as any)(((Math as any).abs as any)(Y))), B = ((e as any).multCons as any)(ct, ((Math as any).sqrt as any)(((Math as any).abs as any)(Z)));
                    };
                  ((f as any).connectComponents as any)(c, l, ((f as any).getTopMostNodes as any)(T), d), ((u as any).forEach as any)(function (this: any, P: any): any {
                    ((f as any).connectComponents as any)(c, l, ((f as any).getTopMostNodes as any)(((((P as any).descendants as any)() as any).intersection as any)(l)), d);
                  });
                  for (var rt: any = 0, $: any = 0; ($ as any) < ((T as any).length as any); $++) (((T as any)[$] as any).isParent as any)() || ((L as any).set as any)((((T as any)[$] as any).id as any)(), rt++);
                  var D: any = !0,
                    H: any = !1,
                    k: any = void 0;
                  try {
                    for (var tt: any = ((((d as any).keys as any)() as any)[(Symbol as any).iterator] as any)(), ht: any; !(D = ((ht = ((tt as any).next as any)()) as any).done); D = !0) {
                      var J: any = (ht as any).value;
                      ((L as any).set as any)(J, rt++);
                    }
                  } catch (P: any) {
                    H = !0, k = P;
                  } finally {
                    try {
                      !D && (tt as any).return && ((tt as any).return as any)();
                    } finally {
                      if (H) throw k;
                    }
                  }
                  for (var It: any = 0; (It as any) < ((L as any).size as any); It++) (w as any)[It] = [];
                  ((u as any).forEach as any)(function (this: any, P: any): any {
                    for (var Y: any = ((((P as any).children as any)() as any).intersection as any)(l); ((((Y as any).nodes as any)(":childless") as any).length as any) == (0 as any);) Y = (((((((Y as any).nodes as any)() as any)[0] as any).children as any)() as any).intersection as any)(l);
                    var Z: any = 0,
                      K: any = ((((((Y as any).nodes as any)(":childless") as any)[0] as any).connectedEdges as any)() as any).length;
                    ((((Y as any).nodes as any)(":childless") as any).forEach as any)(function (this: any, q: any, at: any): any {
                      ((((q as any).connectedEdges as any)() as any).length as any) < (K as any) && (K = (((q as any).connectedEdges as any)() as any).length, Z = at);
                    }), ((b as any).set as any)(((P as any).id as any)(), (((((Y as any).nodes as any)(":childless") as any)[Z] as any).id as any)());
                  }), ((T as any).forEach as any)(function (this: any, P: any): any {
                    var Y: any = void 0;
                    ((P as any).isParent as any)() ? Y = ((L as any).get as any)(((b as any).get as any)(((P as any).id as any)())) : Y = ((L as any).get as any)(((P as any).id as any)()), ((((((P as any).neighborhood as any)() as any).nodes as any)() as any).forEach as any)(function (this: any, Z: any): any {
                      ((((l as any).intersection as any)(((P as any).edgesWith as any)(Z)) as any).length as any) > (0 as any) && (((Z as any).isParent as any)() ? (((w as any)[Y] as any).push as any)(((b as any).get as any)(((Z as any).id as any)())) : (((w as any)[Y] as any).push as any)(((Z as any).id as any)()));
                    });
                  });
                  var Nt: any = function (this: any, Y: any): any {
                      var Z: any = ((L as any).get as any)(Y),
                        K: any = void 0;
                      ((((d as any).get as any)(Y) as any).forEach as any)(function (this: any, q: any): any {
                        ((((c as any).getElementById as any)(q) as any).isParent as any)() ? K = ((b as any).get as any)(q) : K = q, (((w as any)[Z] as any).push as any)(K), (((w as any)[((L as any).get as any)(K)] as any).push as any)(Y);
                      });
                    },
                    vt: any = !0,
                    it: any = !1,
                    ut: any = void 0;
                  try {
                    for (var Et: any = ((((d as any).keys as any)() as any)[(Symbol as any).iterator] as any)(), wt: any; !(vt = ((wt = ((Et as any).next as any)()) as any).done); vt = !0) {
                      var Ot: any = (wt as any).value;
                      (Nt as any)(Ot);
                    }
                  } catch (P: any) {
                    it = !0, ut = P;
                  } finally {
                    try {
                      !vt && (Et as any).return && ((Et as any).return as any)();
                    } finally {
                      if (it) throw ut;
                    }
                  }
                  E = (L as any).size;
                  var mt: any = void 0;
                  if ((E as any) > (2 as any)) {
                    F = (E as any) < ((n as any).sampleSize as any) ? E : (n as any).sampleSize;
                    for (var Dt: any = 0; (Dt as any) < (E as any); Dt++) (M as any)[Dt] = [];
                    for (var Rt: any = 0; (Rt as any) < (F as any); Rt++) (o as any)[Rt] = [];
                    return ((n as any).quality as any) == ("draft" as any) || ((n as any).step as any) == ("all" as any) ? ((Q as any)(S), (z as any)(), (X as any)(), mt = {
                      nodeIndexes: L,
                      xCoords: G,
                      yCoords: B
                    }) : (((L as any).forEach as any)(function (this: any, P: any, Y: any): any {
                      ((G as any).push as any)(((((c as any).getElementById as any)(Y) as any).position as any)("x")), ((B as any).push as any)(((((c as any).getElementById as any)(Y) as any).position as any)("y"));
                    }), mt = {
                      nodeIndexes: L,
                      xCoords: G,
                      yCoords: B
                    }), mt;
                  } else {
                    var Ht: any = ((L as any).keys as any)(),
                      Ut: any = ((c as any).getElementById as any)((((Ht as any).next as any)() as any).value),
                      Pt: any = ((Ut as any).position as any)(),
                      Ft: any = ((Ut as any).outerWidth as any)();
                    if (((G as any).push as any)((Pt as any).x), ((B as any).push as any)((Pt as any).y), (E as any) == (2 as any)) {
                      var Yt: any = ((c as any).getElementById as any)((((Ht as any).next as any)() as any).value),
                        Vt: any = ((Yt as any).outerWidth as any)();
                      ((G as any).push as any)(((((Pt as any).x as any) + ((Ft as any) / (2 as any) as any) as any) + ((Vt as any) / (2 as any) as any) as any) + ((n as any).idealEdgeLength as any)), ((B as any).push as any)((Pt as any).y);
                    }
                    return mt = {
                      nodeIndexes: L,
                      xCoords: G,
                      yCoords: B
                    }, mt;
                  }
                };
              (a as any).exports = {
                spectralLayout: t
              };
            },
            579: (a: any, r: any, i: any): any => {
              var f: any = (i as any)(212),
                e: any = function (this: any, t: any): any {
                  t && (t as any)("layout", "fcose", f);
                };
              (typeof cytoscape as any) < ("u" as any) && (e as any)(cytoscape), (a as any).exports = e;
            },
            140: (a: any): any => {
              (a as any).exports = C;
            }
          },
          N: any = {};
        function v(this: any, a: any): any {
          var r: any = (N as any)[a];
          if ((r as any) !== (void 0 as any)) return (r as any).exports;
          var i: any = (N as any)[a] = {
            exports: {}
          };
          return ((R as any)[a] as any)(i, (i as any).exports, v), (i as any).exports;
        }
        var h: any = (v as any)(579);
        return h;
      }) as any)();
    });
  } as any)(he)), (he as any).exports;
}
var Er: any = (mr as any)();
const Tr: any = (gr as any)(Er);
var Ie: any = {
    L: "left",
    R: "right",
    T: "top",
    B: "bottom"
  },
  Re: any = {
    L: (gt as any)((x: any): any => `${x},${(x as any) / (2 as any)} 0,${x} 0,0`, "L"),
    R: (gt as any)((x: any): any => `0,${(x as any) / (2 as any)} ${x},0 ${x},${x}`, "R"),
    T: (gt as any)((x: any): any => `0,0 ${x},0 ${(x as any) / (2 as any)},${x}`, "T"),
    B: (gt as any)((x: any): any => `${(x as any) / (2 as any)},0 ${x},${x} 0,${x}`, "B")
  },
  se: any = {
    L: (gt as any)((x: any, A: any): any => ((x as any) - (A as any) as any) + (2 as any), "L"),
    R: (gt as any)((x: any, A: any): any => (x as any) - (2 as any), "R"),
    T: (gt as any)((x: any, A: any): any => ((x as any) - (A as any) as any) + (2 as any), "T"),
    B: (gt as any)((x: any, A: any): any => (x as any) - (2 as any), "B")
  },
  Nr: any = (gt as any)(function (this: any, x: any): any {
    return (Wt as any)(x) ? (x as any) === ("L" as any) ? "R" : "L" : (x as any) === ("T" as any) ? "B" : "T";
  }, "getOppositeArchitectureDirection"),
  Se: any = (gt as any)(function (this: any, x: any): any {
    const A: any = x;
    return (A as any) === ("L" as any) || (A as any) === ("R" as any) || (A as any) === ("T" as any) || (A as any) === ("B" as any);
  }, "isArchitectureDirection"),
  Wt: any = (gt as any)(function (this: any, x: any): any {
    const A: any = x;
    return (A as any) === ("L" as any) || (A as any) === ("R" as any);
  }, "isArchitectureDirectionX"),
  qt: any = (gt as any)(function (this: any, x: any): any {
    const A: any = x;
    return (A as any) === ("T" as any) || (A as any) === ("B" as any);
  }, "isArchitectureDirectionY"),
  Ne: any = (gt as any)(function (this: any, x: any, A: any): any {
    const C: any = (Wt as any)(x) && (qt as any)(A),
      R: any = (qt as any)(x) && (Wt as any)(A);
    return C || R;
  }, "isArchitectureDirectionXY"),
  Lr: any = (gt as any)(function (this: any, x: any): any {
    const A: any = (x as any)[0],
      C: any = (x as any)[1],
      R: any = (Wt as any)(A) && (qt as any)(C),
      N: any = (qt as any)(A) && (Wt as any)(C);
    return R || N;
  }, "isArchitecturePairXY"),
  Cr: any = (gt as any)(function (this: any, x: any): any {
    return (x as any) !== ("LL" as any) && (x as any) !== ("RR" as any) && (x as any) !== ("TT" as any) && (x as any) !== ("BB" as any);
  }, "isValidArchitectureDirectionPair"),
  ye: any = (gt as any)(function (this: any, x: any, A: any): any {
    const C: any = `${x}${A}`;
    return (Cr as any)(C) ? C : void 0;
  }, "getArchitectureDirectionPair"),
  wr: any = (gt as any)(function (this: any, [x, A]: any, C: any): any {
    const R: any = (C as any)[0],
      N: any = (C as any)[1];
    return (Wt as any)(R) ? (qt as any)(N) ? [(x as any) + (((R as any) === ("L" as any) ? -1 : 1) as any), (A as any) + (((N as any) === ("T" as any) ? 1 : -1) as any)] : [(x as any) + (((R as any) === ("L" as any) ? -1 : 1) as any), A] : (Wt as any)(N) ? [(x as any) + (((N as any) === ("L" as any) ? 1 : -1) as any), (A as any) + (((R as any) === ("T" as any) ? 1 : -1) as any)] : [x, (A as any) + (((R as any) === ("T" as any) ? 1 : -1) as any)];
  }, "shiftPositionByArchitectureDirectionPair"),
  Ar: any = (gt as any)(function (this: any, x: any): any {
    return (x as any) === ("LT" as any) || (x as any) === ("TL" as any) ? [1, 1] : (x as any) === ("BL" as any) || (x as any) === ("LB" as any) ? [1, -1] : (x as any) === ("BR" as any) || (x as any) === ("RB" as any) ? [-1, -1] : [-1, 1];
  }, "getArchitectureDirectionXYFactors"),
  Mr: any = (gt as any)(function (this: any, x: any, A: any): any {
    return (Ne as any)(x, A) ? "bend" : (Wt as any)(x) ? "horizontal" : "vertical";
  }, "getArchitectureDirectionAlignment"),
  Or: any = (gt as any)(function (this: any, x: any): any {
    return ((x as any).type as any) === ("service" as any);
  }, "isArchitectureService"),
  Dr: any = (gt as any)(function (this: any, x: any): any {
    return ((x as any).type as any) === ("junction" as any);
  }, "isArchitectureJunction"),
  Pe: any = (gt as any)((x: any): any => ((x as any).data as any)(), "edgeData"),
  ie: any = (gt as any)((x: any): any => ((x as any).data as any)(), "nodeData"),
  xr: any = (nr as any).architecture,
  ae: any,
  Ge: any = (ae = class {
    declare dataStructures: any;
    declare setAccDescription: any;
    declare getAccDescription: any;
    declare getDiagramTitle: any;
    declare setDiagramTitle: any;
    declare getAccTitle: any;
    declare setAccTitle: any;
    declare diagramId: any;
    declare elements: any;
    declare registeredIds: any;
    declare layoutHints: any;
    declare edges: any;
    declare groups: any;
    declare nodes: any;
    [key: string]: any;
    constructor() {
      (this as any).nodes = {}, (this as any).groups = {}, (this as any).edges = [], (this as any).layoutHints = [], (this as any).registeredIds = {}, (this as any).elements = {}, (this as any).diagramId = "", (this as any).setAccTitle = Je, (this as any).getAccTitle = Ke, (this as any).setDiagramTitle = je, (this as any).getDiagramTitle = _e, (this as any).getAccDescription = tr, (this as any).setAccDescription = er, ((this as any).clear as any)();
    }
    setDiagramId(A: any): any {
      (this as any).diagramId = A;
    }
    getDiagramId(): any {
      return (this as any).diagramId;
    }
    clear(): any {
      (this as any).nodes = {}, (this as any).groups = {}, (this as any).edges = [], (this as any).layoutHints = [], (this as any).registeredIds = {}, (this as any).dataStructures = void 0, (this as any).elements = {}, (this as any).diagramId = "", (rr as any)();
    }
    addService({
      id: A,
      icon: C,
      in: R,
      title: N,
      iconText: v
    }: any): any {
      if ((((this as any).registeredIds as any)[A] as any) !== (void 0 as any)) throw new (Error as any)(`The service id [${A}] is already in use by another ${((this as any).registeredIds as any)[A]}`);
      if ((R as any) !== (void 0 as any)) {
        if ((A as any) === (R as any)) throw new (Error as any)(`The service [${A}] cannot be placed within itself`);
        if ((((this as any).registeredIds as any)[R] as any) === (void 0 as any)) throw new (Error as any)(`The service [${A}]'s parent does not exist. Please make sure the parent is created before this service`);
        if ((((this as any).registeredIds as any)[R] as any) === ("node" as any)) throw new (Error as any)(`The service [${A}]'s parent is not a group`);
      }
      ((this as any).registeredIds as any)[A] = "node", ((this as any).nodes as any)[A] = {
        id: A,
        type: "service",
        icon: C,
        iconText: v,
        title: N,
        edges: [],
        in: R
      };
    }
    getServices(): any {
      return ((((Object as any).values as any)((this as any).nodes) as any).filter as any)(Or);
    }
    addJunction({
      id: A,
      in: C
    }: any): any {
      if ((((this as any).registeredIds as any)[A] as any) !== (void 0 as any)) throw new (Error as any)(`The junction id [${A}] is already in use by another ${((this as any).registeredIds as any)[A]}`);
      if ((C as any) !== (void 0 as any)) {
        if ((A as any) === (C as any)) throw new (Error as any)(`The junction [${A}] cannot be placed within itself`);
        if ((((this as any).registeredIds as any)[C] as any) === (void 0 as any)) throw new (Error as any)(`The junction [${A}]'s parent does not exist. Please make sure the parent is created before this junction`);
        if ((((this as any).registeredIds as any)[C] as any) === ("node" as any)) throw new (Error as any)(`The junction [${A}]'s parent is not a group`);
      }
      ((this as any).registeredIds as any)[A] = "node", ((this as any).nodes as any)[A] = {
        id: A,
        type: "junction",
        edges: [],
        in: C
      };
    }
    getJunctions(): any {
      return ((((Object as any).values as any)((this as any).nodes) as any).filter as any)(Dr);
    }
    getNodes(): any {
      return ((Object as any).values as any)((this as any).nodes);
    }
    getNode(A: any): any {
      return ((this as any).nodes as any)[A] ?? null;
    }
    addGroup({
      id: A,
      icon: C,
      in: R,
      title: N
    }: any): any {
      if (((this as any).registeredIds?.[A] as any) !== (void 0 as any)) throw new (Error as any)(`The group id [${A}] is already in use by another ${((this as any).registeredIds as any)[A]}`);
      if ((R as any) !== (void 0 as any)) {
        if ((A as any) === (R as any)) throw new (Error as any)(`The group [${A}] cannot be placed within itself`);
        if (((this as any).registeredIds?.[R] as any) === (void 0 as any)) throw new (Error as any)(`The group [${A}]'s parent does not exist. Please make sure the parent is created before this group`);
        if (((this as any).registeredIds?.[R] as any) === ("node" as any)) throw new (Error as any)(`The group [${A}]'s parent is not a group`);
      }
      ((this as any).registeredIds as any)[A] = "group", ((this as any).groups as any)[A] = {
        id: A,
        icon: C,
        title: N,
        in: R
      };
    }
    getGroups(): any {
      return ((Object as any).values as any)((this as any).groups);
    }
    addEdge({
      lhsId: A,
      rhsId: C,
      lhsDir: R,
      rhsDir: N,
      lhsInto: v,
      rhsInto: h,
      lhsGroup: a,
      rhsGroup: r,
      title: i
    }: any): any {
      if (!(Se as any)(R)) throw new (Error as any)(`Invalid direction given for left hand side of edge ${A}--${C}. Expected (L,R,T,B) got ${(String as any)(R)}`);
      if (!(Se as any)(N)) throw new (Error as any)(`Invalid direction given for right hand side of edge ${A}--${C}. Expected (L,R,T,B) got ${(String as any)(N)}`);
      if ((((this as any).nodes as any)[A] as any) === (void 0 as any) && (((this as any).groups as any)[A] as any) === (void 0 as any)) throw new (Error as any)(`The left-hand id [${A}] does not yet exist. Please create the service/group before declaring an edge to it.`);
      if ((((this as any).nodes as any)[C] as any) === (void 0 as any) && (((this as any).groups as any)[C] as any) === (void 0 as any)) throw new (Error as any)(`The right-hand id [${C}] does not yet exist. Please create the service/group before declaring an edge to it.`);
      const f: any = (((this as any).nodes as any)[A] as any).in,
        e: any = (((this as any).nodes as any)[C] as any).in;
      if (a && f && e && (f as any) == (e as any)) throw new (Error as any)(`The left-hand id [${A}] is modified to traverse the group boundary, but the edge does not pass through two groups.`);
      if (r && f && e && (f as any) == (e as any)) throw new (Error as any)(`The right-hand id [${C}] is modified to traverse the group boundary, but the edge does not pass through two groups.`);
      const g: any = {
        lhsId: A,
        lhsDir: R,
        lhsInto: v,
        lhsGroup: a,
        rhsId: C,
        rhsDir: N,
        rhsInto: h,
        rhsGroup: r,
        title: i
      };
      (((this as any).edges as any).push as any)(g), ((this as any).nodes as any)[A] && ((this as any).nodes as any)[C] && ((((((this as any).nodes as any)[A] as any).edges as any).push as any)(((this as any).edges as any)[(((this as any).edges as any).length as any) - (1 as any)]), (((((this as any).nodes as any)[C] as any).edges as any).push as any)(((this as any).edges as any)[(((this as any).edges as any).length as any) - (1 as any)]));
    }
    getEdges(): any {
      return (this as any).edges;
    }
    addLayoutHint(A: any): any {
      if ((((A as any).members as any).length as any) < (2 as any)) throw new (Error as any)(`An align directive requires at least two members; got ${((A as any).members as any).length}`);
      const C: any = new (Set as any)();
      (((A as any).members as any).forEach as any)((R: any): any => {
        if ((((this as any).registeredIds as any)[R] as any) !== ("node" as any)) throw new (Error as any)(`align ${(A as any).direction} references [${R}], which is not a service or junction`);
        if (((C as any).has as any)(R)) throw new (Error as any)(`align ${(A as any).direction} lists [${R}] more than once`);
        ((C as any).add as any)(R);
      }), (((this as any).layoutHints as any).push as any)(A);
    }
    getLayoutHints(): any {
      return (this as any).layoutHints;
    }
    getDataStructures(): any {
      if (((this as any).dataStructures as any) === (void 0 as any)) {
        const A: any = {},
          C: any = ((((Object as any).entries as any)((this as any).nodes) as any).reduce as any)((r: any, [i, f]: any): any => ((r as any)[i] = (((f as any).edges as any).reduce as any)((e: any, g: any): any => {
            const t: any = ((this as any).getNode as any)((g as any).lhsId)?.in,
              s: any = ((this as any).getNode as any)((g as any).rhsId)?.in;
            if (t && s && (t as any) !== (s as any)) {
              const n: any = (Mr as any)((g as any).lhsDir, (g as any).rhsDir);
              (n as any) !== ("bend" as any) && ((A as any)[t] ??= {}, ((A as any)[t] as any)[s] = n, (A as any)[s] ??= {}, ((A as any)[s] as any)[t] = n);
            }
            if (((g as any).lhsId as any) === (i as any)) {
              const n: any = (ye as any)((g as any).lhsDir, (g as any).rhsDir);
              n && ((e as any)[n] = (g as any).rhsId);
            } else {
              const n: any = (ye as any)((g as any).rhsDir, (g as any).lhsDir);
              n && ((e as any)[n] = (g as any).lhsId);
            }
            return e;
          }, {}), r), {}),
          R: any = (((Object as any).keys as any)(C) as any)[0],
          N: any = {
            [R]: 1
          },
          v: any = ((((Object as any).keys as any)(C) as any).reduce as any)((r: any, i: any): any => (i as any) === (R as any) ? r : {
            ...r,
            [i]: 1
          }, {}),
          h: any = (gt as any)((r: any): any => {
            const i: any = {
                [r]: [0, 0]
              },
              f: any = [r];
            for (; ((f as any).length as any) > (0 as any);) {
              const e: any = ((f as any).shift as any)();
              if (e) {
                (N as any)[e] = 1, delete (v as any)[e];
                const g: any = (C as any)[e],
                  [t, s]: any = (i as any)[e];
                ((((Object as any).entries as any)(g) as any).forEach as any)(([n, c]: any): any => {
                  (N as any)[c] || ((i as any)[c] = (wr as any)([t, s], n), ((f as any).push as any)(c));
                });
              }
            }
            return i;
          }, "BFS"),
          a: any = [(h as any)(R)];
        for (; ((((Object as any).keys as any)(v) as any).length as any) > (0 as any);) ((a as any).push as any)((h as any)((((Object as any).keys as any)(v) as any)[0]));
        (this as any).dataStructures = {
          adjList: C,
          spatialMaps: a,
          groupAlignments: A
        };
      }
      return (this as any).dataStructures;
    }
    setElementForId(A: any, C: any): any {
      ((this as any).elements as any)[A] = C;
    }
    getElementById(A: any): any {
      return ((this as any).elements as any)[A];
    }
    getConfig(): any {
      return (ir as any)({
        ...xr,
        ...((ar as any)() as any).architecture
      });
    }
    getConfigField(A: any): any {
      return (((this as any).getConfig as any)() as any)[A];
    }
  }, (gt as any)(ae, "ArchitectureDB"), ae),
  Ir: any = (gt as any)((x: any, A: any): any => {
    (Ze as any)(x, A), (((x as any).groups as any).map as any)((C: any): any => ((A as any).addGroup as any)(C)), (((x as any).services as any).map as any)((C: any): any => ((A as any).addService as any)({
      ...C,
      type: "service"
    })), (((x as any).junctions as any).map as any)((C: any): any => ((A as any).addJunction as any)({
      ...C,
      type: "junction"
    })), (((x as any).edges as any).map as any)((C: any): any => ((A as any).addEdge as any)(C)), (x as any).alignments?.map((C: any): any => ((A as any).addLayoutHint as any)({
      direction: (C as any).direction,
      members: [...(C as any).members]
    }));
  }, "populateDb"),
  Ue: any = {
    parser: {
      yy: void 0
    },
    parse: (gt as any)(async (x: any): Promise<any> => {
      const A: any = await (cr as any)("architecture", x);
      ((Fe as any).debug as any)(A);
      const C: any = (Ue as any).parser?.yy;
      if (!(C instanceof Ge)) throw new (Error as any)("parser.parser?.yy was not a ArchitectureDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues.");
      (Ir as any)(A, C);
    }, "parse")
  },
  Rr: any = (gt as any)((x: any): any => `
  .edge {
    stroke-width: ${(x as any).archEdgeWidth};
    stroke: ${(x as any).archEdgeColor};
    fill: none;
  }

  .arrow {
    fill: ${(x as any).archEdgeArrowColor};
  }

  .node-bkg {
    fill: none;
    stroke: ${(x as any).archGroupBorderColor};
    stroke-width: ${(x as any).archGroupBorderWidth};
    stroke-dasharray: 8;
  }
  .node-icon-text {
    display: flex; 
    align-items: center;
  }
  
  .node-icon-text > div {
    color: #fff;
    margin: 1px;
    height: fit-content;
    text-align: center;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }
`, "getStyles"),
  Sr: any = Rr;
function me(this: any, x: any, A: any): any {
  if ((x as any) === (0 as any)) return (A as any)();
  const C: any = (Math as any).random;
  let R: any = (x as any) >>> (0 as any);
  (Math as any).random = function (this: any): any {
    R = ((R as any) + (1831565813 as any) as any) >>> (0 as any);
    let N: any = R;
    return N = ((Math as any).imul as any)((N as any) ^ ((N as any) >>> (15 as any) as any), (N as any) | (1 as any)), N ^= (N as any) + (((Math as any).imul as any)((N as any) ^ ((N as any) >>> (7 as any) as any), (N as any) | (61 as any)) as any), ((((N as any) ^ ((N as any) >>> (14 as any) as any)) as any) >>> (0 as any) as any) / (4294967296 as any);
  };
  try {
    return (A as any)();
  } finally {
    (Math as any).random = C;
  }
}
(gt as any)(me, "withSeededRandom");
var re: any = (gt as any)((x: any): any => `<g><rect width="80" height="80" style="fill: #087ebf; stroke-width: 0px;"/>${x}</g>`, "wrapIcon"),
  ne: any = {
    prefix: "mermaid-architecture",
    height: 80,
    width: 80,
    icons: {
      database: {
        body: (re as any)('<path id="b" data-name="4" d="m20,57.86c0,3.94,8.95,7.14,20,7.14s20-3.2,20-7.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path id="c" data-name="3" d="m20,45.95c0,3.94,8.95,7.14,20,7.14s20-3.2,20-7.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path id="d" data-name="2" d="m20,34.05c0,3.94,8.95,7.14,20,7.14s20-3.2,20-7.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse id="e" data-name="1" cx="40" cy="22.14" rx="20" ry="7.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="20" y1="57.86" x2="20" y2="22.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="60" y1="57.86" x2="60" y2="22.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/>')
      },
      server: {
        body: (re as any)('<rect x="17.5" y="17.5" width="45" height="45" rx="2" ry="2" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="17.5" y1="32.5" x2="62.5" y2="32.5" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="17.5" y1="47.5" x2="62.5" y2="47.5" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><g><path d="m56.25,25c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: #fff; stroke-width: 0px;"/><path d="m56.25,25c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: none; stroke: #fff; stroke-miterlimit: 10;"/></g><g><path d="m56.25,40c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: #fff; stroke-width: 0px;"/><path d="m56.25,40c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: none; stroke: #fff; stroke-miterlimit: 10;"/></g><g><path d="m56.25,55c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: #fff; stroke-width: 0px;"/><path d="m56.25,55c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: none; stroke: #fff; stroke-miterlimit: 10;"/></g><g><circle cx="32.5" cy="25" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="27.5" cy="25" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="22.5" cy="25" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/></g><g><circle cx="32.5" cy="40" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="27.5" cy="40" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="22.5" cy="40" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/></g><g><circle cx="32.5" cy="55" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="27.5" cy="55" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="22.5" cy="55" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/></g>')
      },
      disk: {
        body: (re as any)('<rect x="20" y="15" width="40" height="50" rx="1" ry="1" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="24" cy="19.17" rx=".8" ry=".83" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="56" cy="19.17" rx=".8" ry=".83" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="24" cy="60.83" rx=".8" ry=".83" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="56" cy="60.83" rx=".8" ry=".83" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="40" cy="33.75" rx="14" ry="14.58" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="40" cy="33.75" rx="4" ry="4.17" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path d="m37.51,42.52l-4.83,13.22c-.26.71-1.1,1.02-1.76.64l-4.18-2.42c-.66-.38-.81-1.26-.33-1.84l9.01-10.8c.88-1.05,2.56-.08,2.09,1.2Z" style="fill: #fff; stroke-width: 0px;"/>')
      },
      internet: {
        body: (re as any)('<circle cx="40" cy="40" r="22.5" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="40" y1="17.5" x2="40" y2="62.5" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="17.5" y1="40" x2="62.5" y2="40" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path d="m39.99,17.51c-15.28,11.1-15.28,33.88,0,44.98" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path d="m40.01,17.51c15.28,11.1,15.28,33.88,0,44.98" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="19.75" y1="30.1" x2="60.25" y2="30.1" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="19.75" y1="49.9" x2="60.25" y2="49.9" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/>')
      },
      cloud: {
        body: (re as any)('<path d="m65,47.5c0,2.76-2.24,5-5,5H20c-2.76,0-5-2.24-5-5,0-1.87,1.03-3.51,2.56-4.36-.04-.21-.06-.42-.06-.64,0-2.6,2.48-4.74,5.65-4.97,1.65-4.51,6.34-7.76,11.85-7.76.86,0,1.69.08,2.5.23,2.09-1.57,4.69-2.5,7.5-2.5,6.1,0,11.19,4.38,12.28,10.17,2.14.56,3.72,2.51,3.72,4.83,0,.03,0,.07-.01.1,2.29.46,4.01,2.48,4.01,4.9Z" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/>')
      },
      unknown: fr,
      blank: {
        body: (re as any)("")
      }
    }
  },
  Fr: any = (gt as any)(async function (this: any, x: any, A: any, C: any, R: any): Promise<any> {
    const N: any = ((C as any).getConfigField as any)("padding"),
      v: any = ((C as any).getConfigField as any)("iconSize"),
      h: any = (v as any) / (2 as any),
      a: any = (v as any) / (6 as any),
      r: any = (a as any) / (2 as any);
    await ((Promise as any).all as any)(((((A as any).edges as any)() as any).map as any)(async (i: any): Promise<any> => {
      const {
        source: f,
        sourceDir: e,
        sourceArrow: g,
        sourceGroup: t,
        target: s,
        targetDir: n,
        targetArrow: c,
        targetGroup: l,
        label: T
      }: any = (Pe as any)(i);
      let {
        x: u,
        y: d
      }: any = (((i as any)[0] as any).sourceEndpoint as any)();
      const {
        x: L,
        y: b
      }: any = (((i as any)[0] as any).midpoint as any)();
      let {
        x: w,
        y: G
      }: any = (((i as any)[0] as any).targetEndpoint as any)();
      const B: any = (N as any) + (4 as any);
      if (t && ((Wt as any)(e) ? u += (e as any) === ("L" as any) ? -B : B : d += (e as any) === ("T" as any) ? -B : (B as any) + (18 as any)), l && ((Wt as any)(n) ? w += (n as any) === ("L" as any) ? -B : B : G += (n as any) === ("T" as any) ? -B : (B as any) + (18 as any)), !t && (((C as any).getNode as any)(f)?.type as any) === ("junction" as any) && ((Wt as any)(e) ? u += (e as any) === ("L" as any) ? h : -h : d += (e as any) === ("T" as any) ? h : -h), !l && (((C as any).getNode as any)(s)?.type as any) === ("junction" as any) && ((Wt as any)(n) ? w += (n as any) === ("L" as any) ? h : -h : G += (n as any) === ("T" as any) ? h : -h), (((i as any)[0] as any)._private as any).rscratch) {
        const U: any = ((x as any).insert as any)("g");
        if (((((((((U as any).insert as any)("path") as any).attr as any)("d", `M ${u},${d} L ${L},${b} L${w},${G} `) as any).attr as any)("class", "edge") as any).attr as any)("id", `${R}-${(hr as any)(f, s, {
          prefix: "L"
        })}`), g) {
          const V: any = (Wt as any)(e) ? ((se as any)[e] as any)(u, a) : (u as any) - (r as any),
            M: any = (qt as any)(e) ? ((se as any)[e] as any)(d, a) : (d as any) - (r as any);
          ((((((((U as any).insert as any)("polygon") as any).attr as any)("points", ((Re as any)[e] as any)(a)) as any).attr as any)("transform", `translate(${V},${M})`) as any).attr as any)("class", "arrow");
        }
        if (c) {
          const V: any = (Wt as any)(n) ? ((se as any)[n] as any)(w, a) : (w as any) - (r as any),
            M: any = (qt as any)(n) ? ((se as any)[n] as any)(G, a) : (G as any) - (r as any);
          ((((((((U as any).insert as any)("polygon") as any).attr as any)("points", ((Re as any)[n] as any)(a)) as any).attr as any)("transform", `translate(${V},${M})`) as any).attr as any)("class", "arrow");
        }
        if (T) {
          const V: any = (Ne as any)(e, n) ? "XY" : (Wt as any)(e) ? "X" : "Y";
          let M: any = 0;
          (V as any) === ("X" as any) ? M = ((Math as any).abs as any)((u as any) - (w as any)) : (V as any) === ("Y" as any) ? M = (((Math as any).abs as any)((d as any) - (G as any)) as any) / (1.5 as any) : M = (((Math as any).abs as any)((u as any) - (w as any)) as any) / (2 as any);
          const _: any = ((U as any).append as any)("g");
          if (await (Te as any)(_, T, {
            useHtmlLabels: !1,
            width: M,
            classes: "architecture-service-label"
          }, (Ee as any)()), ((((((((_ as any).attr as any)("dy", "1em") as any).attr as any)("alignment-baseline", "middle") as any).attr as any)("dominant-baseline", "middle") as any).attr as any)("text-anchor", "middle"), (V as any) === ("X" as any)) ((_ as any).attr as any)("transform", (((("translate(" as any) + (L as any) as any) + (", " as any) as any) + (b as any) as any) + (")" as any));else if ((V as any) === ("Y" as any)) ((_ as any).attr as any)("transform", (((("translate(" as any) + (L as any) as any) + (", " as any) as any) + (b as any) as any) + (") rotate(-90)" as any));else if ((V as any) === ("XY" as any)) {
            const o: any = (ye as any)(e, n);
            if (o && (Lr as any)(o)) {
              const E: any = ((((_ as any).node as any)() as any).getBoundingClientRect as any)(),
                [p, m]: any = (Ar as any)(o);
              ((((_ as any).attr as any)("dominant-baseline", "auto") as any).attr as any)("transform", `rotate(${(((-1 as any) * (p as any) as any) * (m as any) as any) * (45 as any)})`);
              const y: any = ((((_ as any).node as any)() as any).getBoundingClientRect as any)();
              ((_ as any).attr as any)("transform", `
                translate(${L}, ${(b as any) - (((E as any).height as any) / (2 as any) as any)})
                translate(${((p as any) * ((y as any).width as any) as any) / (2 as any)}, ${((m as any) * ((y as any).height as any) as any) / (2 as any)})
                rotate(${(((-1 as any) * (p as any) as any) * (m as any) as any) * (45 as any)}, 0, ${((E as any).height as any) / (2 as any)})
              `);
            }
          }
        }
      }
    }));
  }, "drawEdges"),
  br: any = (gt as any)(async function (this: any, x: any, A: any, C: any, R: any): Promise<any> {
    const v: any = (((C as any).getConfigField as any)("padding") as any) * (.75 as any),
      h: any = ((C as any).getConfigField as any)("fontSize"),
      r: any = (((C as any).getConfigField as any)("iconSize") as any) / (2 as any);
    await ((Promise as any).all as any)(((((A as any).nodes as any)() as any).map as any)(async (i: any): Promise<any> => {
      const f: any = (ie as any)(i);
      if (((f as any).type as any) === ("group" as any)) {
        const {
            h: e,
            w: g,
            x1: t,
            y1: s
          }: any = ((i as any).boundingBox as any)(),
          n: any = ((x as any).append as any)("rect");
        ((((((((((((n as any).attr as any)("id", `${R}-group-${(f as any).id}`) as any).attr as any)("x", (t as any) + (r as any)) as any).attr as any)("y", (s as any) + (r as any)) as any).attr as any)("width", g) as any).attr as any)("height", e) as any).attr as any)("class", "node-bkg");
        const c: any = ((x as any).append as any)("g");
        let l: any = t,
          T: any = s;
        if ((f as any).icon) {
          const u: any = ((c as any).append as any)("g");
          ((u as any).html as any)(`<g>${await (pe as any)((f as any).icon, {
            height: v,
            width: v,
            fallbackPrefix: (ne as any).prefix
          })}</g>`), ((u as any).attr as any)("transform", (((("translate(" as any) + (((l as any) + (r as any) as any) + (1 as any) as any) as any) + (", " as any) as any) + (((T as any) + (r as any) as any) + (1 as any) as any) as any) + (")" as any)), l += v, T += (((h as any) / (2 as any) as any) - (1 as any) as any) - (2 as any);
        }
        if ((f as any).label) {
          const u: any = ((c as any).append as any)("g");
          await (Te as any)(u, (f as any).label, {
            useHtmlLabels: !1,
            width: g,
            classes: "architecture-service-label"
          }, (Ee as any)()), ((((((((u as any).attr as any)("dy", "1em") as any).attr as any)("alignment-baseline", "middle") as any).attr as any)("dominant-baseline", "start") as any).attr as any)("text-anchor", "start"), ((u as any).attr as any)("transform", (((("translate(" as any) + (((l as any) + (r as any) as any) + (4 as any) as any) as any) + (", " as any) as any) + (((T as any) + (r as any) as any) + (2 as any) as any) as any) + (")" as any));
        }
        ((C as any).setElementForId as any)((f as any).id, n);
      }
    }));
  }, "drawGroups"),
  Pr: any = (gt as any)(async function (this: any, x: any, A: any, C: any, R: any): Promise<any> {
    const N: any = (Ee as any)();
    for (const v of C) {
      const h: any = ((A as any).append as any)("g"),
        a: any = ((x as any).getConfigField as any)("iconSize");
      if ((v as any).title) {
        const e: any = ((h as any).append as any)("g");
        await (Te as any)(e, (v as any).title, {
          useHtmlLabels: !1,
          width: (a as any) * (1.5 as any),
          classes: "architecture-service-label"
        }, N), ((((((((e as any).attr as any)("dy", "1em") as any).attr as any)("alignment-baseline", "middle") as any).attr as any)("dominant-baseline", "middle") as any).attr as any)("text-anchor", "middle"), ((e as any).attr as any)("transform", (((("translate(" as any) + ((a as any) / (2 as any) as any) as any) + (", " as any) as any) + (a as any) as any) + (")" as any));
      }
      const r: any = ((h as any).append as any)("g");
      if ((v as any).icon) ((r as any).html as any)(`<g>${await (pe as any)((v as any).icon, {
        height: a,
        width: a,
        fallbackPrefix: (ne as any).prefix
      })}</g>`);else if ((v as any).iconText) {
        ((r as any).html as any)(`<g>${await (pe as any)("blank", {
          height: a,
          width: a,
          fallbackPrefix: (ne as any).prefix
        })}</g>`);
        const t: any = ((((((((((((((((((r as any).append as any)("g") as any).append as any)("foreignObject") as any).attr as any)("width", a) as any).attr as any)("height", a) as any).append as any)("div") as any).attr as any)("class", "node-icon-text") as any).attr as any)("style", `height: ${a}px;`) as any).append as any)("div") as any).html as any)((or as any)((v as any).iconText, N)),
          s: any = (parseInt as any)(((((((window as any).getComputedStyle as any)(((t as any).node as any)(), null) as any).getPropertyValue as any)("font-size") as any).replace as any)(/\D/g, "")) ?? 16;
        ((t as any).attr as any)("style", `-webkit-line-clamp: ${((Math as any).floor as any)(((a as any) - (2 as any) as any) / (s as any))};`);
      } else ((((((((r as any).append as any)("path") as any).attr as any)("class", "node-bkg") as any).attr as any)("id", `${R}-node-${(v as any).id}`) as any).attr as any)("d", `M0,${a} V5 Q0,0 5,0 H${(a as any) - (5 as any)} Q${a},0 ${a},5 V${a} Z`);
      ((((h as any).attr as any)("id", `${R}-service-${(v as any).id}`) as any).attr as any)("class", "architecture-service");
      const {
        width: i,
        height: f
      }: any = ((((h as any).node as any)() as any).getBBox as any)();
      (v as any).width = i, (v as any).height = f, ((x as any).setElementForId as any)((v as any).id, h);
    }
    return 0;
  }, "drawServices"),
  Gr: any = (gt as any)(function (this: any, x: any, A: any, C: any, R: any): any {
    ((C as any).forEach as any)((N: any): any => {
      const v: any = ((A as any).append as any)("g"),
        h: any = ((x as any).getConfigField as any)("iconSize");
      ((((((((((((v as any).append as any)("g") as any).append as any)("rect") as any).attr as any)("id", `${R}-node-${(N as any).id}`) as any).attr as any)("fill-opacity", "0") as any).attr as any)("width", h) as any).attr as any)("height", h), ((v as any).attr as any)("class", "architecture-junction");
      const {
        width: r,
        height: i
      }: any = (((((v as any)._groups as any)[0] as any)[0] as any).getBBox as any)();
      (v as any).width = r, (v as any).height = i, ((x as any).setElementForId as any)((N as any).id, v);
    });
  }, "drawJunctions");
(lr as any)([{
  name: (ne as any).prefix,
  icons: ne
}]);
((be as any).use as any)(Tr);
function Ye(this: any, x: any, A: any, C: any): any {
  ((x as any).forEach as any)((R: any): any => {
    ((A as any).add as any)({
      group: "nodes",
      data: {
        type: "service",
        id: (R as any).id,
        icon: (R as any).icon,
        label: (R as any).title,
        parent: (R as any).in,
        width: ((C as any).getConfigField as any)("iconSize"),
        height: ((C as any).getConfigField as any)("iconSize")
      },
      classes: "node-service"
    });
  });
}
(gt as any)(Ye, "addServices");
function Xe(this: any, x: any, A: any, C: any): any {
  ((x as any).forEach as any)((R: any): any => {
    ((A as any).add as any)({
      group: "nodes",
      data: {
        type: "junction",
        id: (R as any).id,
        parent: (R as any).in,
        width: ((C as any).getConfigField as any)("iconSize"),
        height: ((C as any).getConfigField as any)("iconSize")
      },
      classes: "node-junction"
    });
  });
}
(gt as any)(Xe, "addJunctions");
function He(this: any, x: any, A: any): any {
  ((((A as any).nodes as any)() as any).map as any)((C: any): any => {
    const R: any = (ie as any)(C);
    if (((R as any).type as any) === ("group" as any)) return;
    (R as any).x = (((C as any).position as any)() as any).x, (R as any).y = (((C as any).position as any)() as any).y, ((((x as any).getElementById as any)((R as any).id) as any).attr as any)("transform", (((("translate(" as any) + (((R as any).x || 0) as any) as any) + ("," as any) as any) + (((R as any).y || 0) as any) as any) + (")" as any));
  });
}
(gt as any)(He, "positionNodes");
function We(this: any, x: any, A: any): any {
  ((x as any).forEach as any)((C: any): any => {
    ((A as any).add as any)({
      group: "nodes",
      data: {
        type: "group",
        id: (C as any).id,
        icon: (C as any).icon,
        label: (C as any).title,
        parent: (C as any).in
      },
      classes: "node-group"
    });
  });
}
(gt as any)(We, "addGroups");
function Ve(this: any, x: any, A: any): any {
  ((x as any).forEach as any)((C: any): any => {
    const {
        lhsId: R,
        rhsId: N,
        lhsInto: v,
        lhsGroup: h,
        rhsInto: a,
        lhsDir: r,
        rhsDir: i,
        rhsGroup: f,
        title: e
      }: any = C,
      g: any = (Ne as any)((C as any).lhsDir, (C as any).rhsDir) ? "segments" : "straight",
      t: any = {
        id: `${R}-${N}`,
        label: e,
        source: R,
        sourceDir: r,
        sourceArrow: v,
        sourceGroup: h,
        sourceEndpoint: (r as any) === ("L" as any) ? "0 50%" : (r as any) === ("R" as any) ? "100% 50%" : (r as any) === ("T" as any) ? "50% 0" : "50% 100%",
        target: N,
        targetDir: i,
        targetArrow: a,
        targetGroup: f,
        targetEndpoint: (i as any) === ("L" as any) ? "0 50%" : (i as any) === ("R" as any) ? "100% 50%" : (i as any) === ("T" as any) ? "50% 0" : "50% 100%"
      };
    ((A as any).add as any)({
      group: "edges",
      data: t,
      classes: g
    });
  });
}
(gt as any)(Ve, "addEdges");
function ze(this: any, x: any, A: any, C: any, R: any = []): any {
  const N: any = (gt as any)((g: any, t: any): any => ((((Object as any).entries as any)(g) as any).reduce as any)((s: any, [n, c]: any): any => {
      let l: any = 0;
      const T: any = ((Object as any).entries as any)(c);
      if (((T as any).length as any) === (1 as any)) return (s as any)[n] = ((T as any)[0] as any)[1], s;
      for (let u: any = 0; (u as any) < (((T as any).length as any) - (1 as any) as any); u++) for (let d: any = (u as any) + (1 as any); (d as any) < ((T as any).length as any); d++) {
        const [L, b]: any = (T as any)[u],
          [w, G]: any = (T as any)[d];
        if (((C as any)[L]?.[w] as any) === (t as any)) (s as any)[n] ??= [], (s as any)[n] = [...(s as any)[n], ...b, ...G];else if ((L as any) === ("default" as any) || (w as any) === ("default" as any)) (s as any)[n] ??= [], (s as any)[n] = [...(s as any)[n], ...b, ...G];else {
          const U: any = `${n}-${l++}`;
          (s as any)[U] = b;
          const V: any = `${n}-${l++}`;
          (s as any)[V] = G;
        }
      }
      return s;
    }, {}), "flattenAlignments"),
    v: any = ((A as any).map as any)((g: any): any => {
      const t: any = {},
        s: any = {};
      return ((((Object as any).entries as any)(g) as any).forEach as any)(([n, [c, l]]: any): any => {
        const T: any = ((x as any).getNode as any)(n)?.in ?? "default";
        (t as any)[l] ??= {}, ((t as any)[l] as any)[T] ??= [], ((((t as any)[l] as any)[T] as any).push as any)(n), (s as any)[c] ??= {}, ((s as any)[c] as any)[T] ??= [], ((((s as any)[c] as any)[T] as any).push as any)(n);
      }), {
        horiz: ((((Object as any).values as any)((N as any)(t, "horizontal")) as any).filter as any)((n: any): any => ((n as any).length as any) > (1 as any)),
        vert: ((((Object as any).values as any)((N as any)(s, "vertical")) as any).filter as any)((n: any): any => ((n as any).length as any) > (1 as any))
      };
    }),
    [h, a]: any = ((v as any).reduce as any)(([g, t]: any, {
      horiz: s,
      vert: n
    }: any): any => [[...g, ...s], [...t, ...n]], [[], []]),
    r: any = new (Set as any)();
  ((R as any).forEach as any)((g: any): any => (((g as any).members as any).forEach as any)((t: any): any => ((r as any).add as any)(t)));
  const i: any = (gt as any)((g: any): any => ((g as any).filter as any)((t: any): any => !((t as any).some as any)((s: any): any => ((r as any).has as any)(s))), "dropOverlapping"),
    f: any = (i as any)(h),
    e: any = (i as any)(a);
  return ((R as any).forEach as any)((g: any): any => {
    (((g as any).members as any).length as any) < (2 as any) || (((g as any).direction as any) === ("row" as any) ? ((f as any).push as any)([...(g as any).members]) : ((e as any).push as any)([...(g as any).members]));
  }), {
    horizontal: f,
    vertical: e
  };
}
(gt as any)(ze, "getAlignments");
function Be(this: any, x: any, A: any, C: any = []): any {
  const R: any = [],
    N: any = ((A as any).getConfigField as any)("iconSize"),
    v: any = ((A as any).getConfigField as any)("idealEdgeLengthMultiplier"),
    h: any = (v as any) * (N as any),
    a: any = new (Set as any)();
  ((C as any).forEach as any)((f: any): any => {
    for (let e: any = 0; (e as any) < ((((f as any).members as any).length as any) - (1 as any) as any); e++) {
      const g: any = ((f as any).members as any)[e],
        t: any = ((f as any).members as any)[(e as any) + (1 as any)];
      ((a as any).add as any)(`${g}|${t}`), ((a as any).add as any)(`${t}|${g}`), ((f as any).direction as any) === ("row" as any) ? ((R as any).push as any)({
        left: g,
        right: t,
        gap: h
      }) : ((R as any).push as any)({
        top: g,
        bottom: t,
        gap: h
      });
    }
  });
  const r: any = (gt as any)((f: any): any => `${(f as any)[0]},${(f as any)[1]}`, "posToStr"),
    i: any = (gt as any)((f: any): any => ((((f as any).split as any)(",") as any).map as any)((e: any): any => (parseInt as any)(e)), "strToPos");
  return ((x as any).forEach as any)((f: any): any => {
    const e: any = ((Object as any).fromEntries as any)(((((Object as any).entries as any)(f) as any).map as any)(([n, c]: any): any => [(r as any)(c), n])),
      g: any = [(r as any)([0, 0])],
      t: any = {},
      s: any = {
        L: [-1, 0],
        R: [1, 0],
        T: [0, 1],
        B: [0, -1]
      };
    for (; ((g as any).length as any) > (0 as any);) {
      const n: any = ((g as any).shift as any)();
      if (n) {
        (t as any)[n] = 1;
        const c: any = (e as any)[n];
        if (c) {
          const l: any = (i as any)(n);
          ((((Object as any).entries as any)(s) as any).forEach as any)(([T, u]: any): any => {
            const d: any = (r as any)([((l as any)[0] as any) + ((u as any)[0] as any), ((l as any)[1] as any) + ((u as any)[1] as any)]),
              L: any = (e as any)[d];
            if (L && !(t as any)[d]) {
              if (((g as any).push as any)(d), ((a as any).has as any)(`${c}|${L}`)) return;
              ((R as any).push as any)({
                [(Ie as any)[T]]: L,
                [(Ie as any)[(Nr as any)(T)]]: c,
                gap: (v as any) * (N as any)
              });
            }
          });
        }
      }
    }
  }), R;
}
(gt as any)(Be, "getRelativeConstraints");
function $e(this: any, x: any, A: any, C: any, R: any, N: any, {
  spatialMaps: v,
  groupAlignments: h
}: any): any {
  return new (Promise as any)((a: any): any => {
    const r: any = (((((((sr as any)("body") as any).append as any)("div") as any).attr as any)("id", "cy") as any).attr as any)("style", "display:none"),
      i: any = (be as any)({
        container: ((document as any).getElementById as any)("cy"),
        style: [{
          selector: "edge",
          style: {
            "curve-style": "straight",
            "source-endpoint": "data(sourceEndpoint)",
            "target-endpoint": "data(targetEndpoint)"
          }
        }, {
          selector: "edge[label]",
          style: {
            label: "data(label)"
          }
        }, {
          selector: "edge.segments",
          style: {
            "curve-style": "segments",
            "segment-weights": "0",
            "segment-distances": [.5],
            "edge-distances": "endpoints",
            "source-endpoint": "data(sourceEndpoint)",
            "target-endpoint": "data(targetEndpoint)"
          }
        }, {
          selector: "node",
          style: {
            "compound-sizing-wrt-labels": "include"
          }
        }, {
          selector: "node[label]",
          style: {
            "text-valign": "bottom",
            "text-halign": "center",
            "font-size": `${((N as any).getConfigField as any)("fontSize")}px`
          }
        }, {
          selector: ".node-service",
          style: {
            label: "data(label)",
            width: "data(width)",
            height: "data(height)"
          }
        }, {
          selector: ".node-junction",
          style: {
            width: "data(width)",
            height: "data(height)"
          }
        }, {
          selector: ".node-group",
          style: {
            padding: `${((N as any).getConfigField as any)("padding")}px`
          }
        }],
        layout: {
          name: "grid",
          boundingBox: {
            x1: 0,
            x2: 100,
            y1: 0,
            y2: 100
          }
        }
      });
    ((r as any).remove as any)(), (We as any)(C, i), (Ye as any)(x, i, N), (Xe as any)(A, i, N), (Ve as any)(R, i);
    const f: any = ((N as any).getLayoutHints as any)(),
      e: any = (ze as any)(N, v, h, f),
      g: any = (Be as any)(v, N, f),
      t: any = ((N as any).getConfigField as any)("iconSize"),
      s: any = (((N as any).getConfigField as any)("idealEdgeLengthMultiplier") as any) * (t as any),
      n: any = (.5 as any) * (t as any),
      c: any = ((N as any).getConfigField as any)("edgeElasticity"),
      l: any = ((N as any).getConfigField as any)("seed"),
      T: any = ((i as any).layout as any)({
        name: "fcose",
        quality: "proof",
        randomize: ((N as any).getConfigField as any)("randomize"),
        nodeSeparation: ((N as any).getConfigField as any)("nodeSeparation"),
        numIter: ((N as any).getConfigField as any)("numIter"),
        styleEnabled: !1,
        animate: !1,
        nodeDimensionsIncludeLabels: !1,
        idealEdgeLength(u: any): any {
          const [d, L]: any = ((u as any).connectedNodes as any)(),
            {
              parent: b
            }: any = (ie as any)(d),
            {
              parent: w
            }: any = (ie as any)(L);
          return (b as any) === (w as any) ? s : n;
        },
        edgeElasticity(u: any): any {
          const [d, L]: any = ((u as any).connectedNodes as any)(),
            {
              parent: b
            }: any = (ie as any)(d),
            {
              parent: w
            }: any = (ie as any)(L);
          return (b as any) === (w as any) ? c : .001;
        },
        alignmentConstraint: e,
        relativePlacementConstraint: g
      });
    ((T as any).one as any)("layoutstop", (): any => {
      function u(this: any, d: any, L: any, b: any, w: any): any {
        let G: any, B: any;
        const {
            x: U,
            y: V
          }: any = d,
          {
            x: M,
            y: _
          }: any = L;
        B = (((w as any) - (V as any) as any) + ((((U as any) - (b as any) as any) * ((V as any) - (_ as any) as any) as any) / ((U as any) - (M as any) as any) as any) as any) / (((Math as any).sqrt as any)((1 as any) + (((Math as any).pow as any)(((V as any) - (_ as any) as any) / ((U as any) - (M as any) as any), 2) as any)) as any), G = ((Math as any).sqrt as any)(((((Math as any).pow as any)((w as any) - (V as any), 2) as any) + (((Math as any).pow as any)((b as any) - (U as any), 2) as any) as any) - (((Math as any).pow as any)(B, 2) as any));
        const o: any = ((Math as any).sqrt as any)((((Math as any).pow as any)((M as any) - (U as any), 2) as any) + (((Math as any).pow as any)((_ as any) - (V as any), 2) as any));
        G = (G as any) / (o as any);
        let E: any = (((M as any) - (U as any) as any) * ((w as any) - (V as any) as any) as any) - (((_ as any) - (V as any) as any) * ((b as any) - (U as any) as any) as any);
        switch (!0) {
          case (E as any) >= (0 as any):
            E = 1;
            break;
          case (E as any) < (0 as any):
            E = -1;
            break;
        }
        let p: any = (((M as any) - (U as any) as any) * ((b as any) - (U as any) as any) as any) + (((_ as any) - (V as any) as any) * ((w as any) - (V as any) as any) as any);
        switch (!0) {
          case (p as any) >= (0 as any):
            p = 1;
            break;
          case (p as any) < (0 as any):
            p = -1;
            break;
        }
        return B = (((Math as any).abs as any)(B) as any) * (E as any), G = (G as any) * (p as any), {
          distances: B,
          weights: G
        };
      }
      (gt as any)(u, "getSegmentWeights"), ((i as any).startBatch as any)();
      for (const d of ((Object as any).values as any)(((i as any).edges as any)())) if ((d as any).data?.()) {
        const {
            x: L,
            y: b
          }: any = ((((d as any).source as any)() as any).position as any)(),
          {
            x: w,
            y: G
          }: any = ((((d as any).target as any)() as any).position as any)();
        if ((L as any) !== (w as any) && (b as any) !== (G as any)) {
          const B: any = ((d as any).sourceEndpoint as any)(),
            U: any = ((d as any).targetEndpoint as any)(),
            {
              sourceDir: V
            }: any = (Pe as any)(d),
            [M, _]: any = (qt as any)(V) ? [(B as any).x, (U as any).y] : [(U as any).x, (B as any).y],
            {
              weights: o,
              distances: E
            }: any = (u as any)(B, U, M, _);
          ((d as any).style as any)("segment-distances", E), ((d as any).style as any)("segment-weights", o);
        }
      }
      ((i as any).endBatch as any)(), (me as any)(l, (): any => ((T as any).run as any)());
    });
    try {
      (me as any)(l, (): any => ((T as any).run as any)());
    } catch (u: any) {
      throw u instanceof RangeError && (((u as any).message as any).includes as any)("Invalid array length") ? new (Error as any)("Architecture layout failed: a declared `align row|column` directive likely contradicts the edge directions, or two declared alignments overlap on a shared node. Check that the order of members in each `align` chain is consistent with the edges between them, and that no node appears in two `align` directives along the same axis.") : u;
    }
    ((i as any).ready as any)((u: any): any => {
      ((Fe as any).info as any)("Ready", u), (a as any)(i);
    });
  });
}
(gt as any)($e, "layoutArchitecture");
var Ur: any = (gt as any)(async (x: any, A: any, C: any, R: any): Promise<any> => {
    const N: any = (R as any).db;
    ((N as any).setDiagramId as any)(A);
    const v: any = ((N as any).getServices as any)(),
      h: any = ((N as any).getJunctions as any)(),
      a: any = ((N as any).getGroups as any)(),
      r: any = ((N as any).getEdges as any)(),
      i: any = ((N as any).getDataStructures as any)(),
      f: any = (qe as any)(A),
      e: any = ((f as any).append as any)("g");
    ((e as any).attr as any)("class", "architecture-edges");
    const g: any = ((f as any).append as any)("g");
    ((g as any).attr as any)("class", "architecture-services");
    const t: any = ((f as any).append as any)("g");
    ((t as any).attr as any)("class", "architecture-groups"), await (Pr as any)(N, g, v, A), (Gr as any)(N, g, h, A);
    const s: any = await ($e as any)(v, h, a, r, N, i);
    await (Fr as any)(e, s, N, A), await (br as any)(t, s, N, A), (He as any)(N, s), (Qe as any)(void 0, f, ((N as any).getConfigField as any)("padding"), ((N as any).getConfigField as any)("useMaxWidth"));
  }, "draw"),
  Yr: any = {
    draw: Ur
  },
  Br: any = {
    parser: Ue,
    get db(): any {
      return new (Ge as any)();
    },
    renderer: Yr,
    styles: Sr
  };
export { Br as diagram };
//# debugId=afd97758-6555-4c8a-81f5-9d03836bc6a5
