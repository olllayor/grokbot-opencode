declare var Dimension: any;
declare var DimensionD: any;
declare var Layout: any;
declare var Point: any;
declare var cancelAnimationFrame: any;
declare var cytoscape: any;
declare var document: any;
declare var global: any;
declare var instance: any;
declare var next: any;
declare var pred1: any;
declare var pred2: any;
declare var processed: any;
declare var requestAnimationFrame: any;
declare var self: any;
declare var update: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "c1ea1496-850f-48a7-ae20-d9c1c6153ec4", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-c1ea1496-850f-48a7-ae20-d9c1c6153ec4");
  } catch (e: any) {}
} as any)();
import { _ as V, l as k, d as lt } from "./chunk-mermaid.core-B9Iu5CoE.js";
import { c as tt } from "./chunk-cytoscape.esm-CY9iOoO4.js";
import { a4 as gt } from "./index.eager-vendor-Qbf9YA6n.js";
var Z: any = {
    exports: {}
  },
  $: any = {
    exports: {}
  },
  Q: any = {
    exports: {}
  },
  ut: any = (Q as any).exports,
  j: any;
function ft(this: any): any {
  return j || (j = 1, (function (this: any, G: any, b: any): any {
    (function (this: any, I: any, L: any): any {
      (G as any).exports = (L as any)();
    } as any)(ut, function (this: any): any {
      return (function (this: any, N: any): any {
        var I: any = {};
        function L(this: any, o: any): any {
          if ((I as any)[o]) return ((I as any)[o] as any).exports;
          var e: any = (I as any)[o] = {
            i: o,
            l: !1,
            exports: {}
          };
          return (((N as any)[o] as any).call as any)((e as any).exports, e, (e as any).exports, L), (e as any).l = !0, (e as any).exports;
        }
        return (L as any).m = N, (L as any).c = I, (L as any).i = function (this: any, o: any): any {
          return o;
        }, (L as any).d = function (this: any, o: any, e: any, t: any): any {
          ((L as any).o as any)(o, e) || ((Object as any).defineProperty as any)(o, e, {
            configurable: !1,
            enumerable: !0,
            get: t
          });
        }, (L as any).n = function (this: any, o: any): any {
          var e: any = o && (o as any).__esModule ? function (this: any): any {
            return (o as any).default;
          } : function (this: any): any {
            return o;
          };
          return ((L as any).d as any)(e, "a", e), e;
        }, (L as any).o = function (this: any, o: any, e: any): any {
          return ((((Object as any).prototype as any).hasOwnProperty as any).call as any)(o, e);
        }, (L as any).p = "", (L as any)((L as any).s = 26);
      } as any)([function (this: any, N: any, I: any, L: any): any {
        function o(this: any): any {}
        (o as any).QUALITY = 1, (o as any).DEFAULT_CREATE_BENDS_AS_NEEDED = !1, (o as any).DEFAULT_INCREMENTAL = !1, (o as any).DEFAULT_ANIMATION_ON_LAYOUT = !0, (o as any).DEFAULT_ANIMATION_DURING_LAYOUT = !1, (o as any).DEFAULT_ANIMATION_PERIOD = 50, (o as any).DEFAULT_UNIFORM_LEAF_NODE_SIZES = !1, (o as any).DEFAULT_GRAPH_MARGIN = 15, (o as any).NODE_DIMENSIONS_INCLUDE_LABELS = !1, (o as any).SIMPLE_NODE_SIZE = 40, (o as any).SIMPLE_NODE_HALF_SIZE = ((o as any).SIMPLE_NODE_SIZE as any) / (2 as any), (o as any).EMPTY_COMPOUND_NODE_SIZE = 40, (o as any).MIN_EDGE_LENGTH = 1, (o as any).WORLD_BOUNDARY = 1e6, (o as any).INITIAL_WORLD_BOUNDARY = ((o as any).WORLD_BOUNDARY as any) / (1e3 as any), (o as any).WORLD_CENTER_X = 1200, (o as any).WORLD_CENTER_Y = 900, (N as any).exports = o;
      }, function (this: any, N: any, I: any, L: any): any {
        var l: any;
        var o: any = (L as any)(2),
          e: any = (L as any)(8),
          t: any = (L as any)(9);
        function i(this: any, g: any, n: any, d: any): any {
          ((o as any).call as any)(this, d), (this as any).isOverlapingSourceAndTarget = !1, (this as any).vGraphObject = d, (this as any).bendpoints = [], (this as any).source = g, (this as any).target = n;
        }
        (i as any).prototype = ((Object as any).create as any)((o as any).prototype);
        for (l in o) (i as any)[l] = (o as any)[l];
        ((i as any).prototype as any).getSource = function (this: any): any {
          return (this as any).source;
        }, ((i as any).prototype as any).getTarget = function (this: any): any {
          return (this as any).target;
        }, ((i as any).prototype as any).isInterGraph = function (this: any): any {
          return (this as any).isInterGraph;
        }, ((i as any).prototype as any).getLength = function (this: any): any {
          return (this as any).length;
        }, ((i as any).prototype as any).isOverlapingSourceAndTarget = function (this: any): any {
          return (this as any).isOverlapingSourceAndTarget;
        }, ((i as any).prototype as any).getBendpoints = function (this: any): any {
          return (this as any).bendpoints;
        }, ((i as any).prototype as any).getLca = function (this: any): any {
          return (this as any).lca;
        }, ((i as any).prototype as any).getSourceInLca = function (this: any): any {
          return (this as any).sourceInLca;
        }, ((i as any).prototype as any).getTargetInLca = function (this: any): any {
          return (this as any).targetInLca;
        }, ((i as any).prototype as any).getOtherEnd = function (this: any, g: any): any {
          if (((this as any).source as any) === (g as any)) return (this as any).target;
          if (((this as any).target as any) === (g as any)) return (this as any).source;
          throw "Node is not incident with this edge";
        }, ((i as any).prototype as any).getOtherEndInGraph = function (this: any, g: any, n: any): any {
          for (var d: any = ((this as any).getOtherEnd as any)(g), r: any = ((((n as any).getGraphManager as any)() as any).getRoot as any)();;) {
            if ((((d as any).getOwner as any)() as any) == (n as any)) return d;
            if ((((d as any).getOwner as any)() as any) == (r as any)) break;
            d = ((((d as any).getOwner as any)() as any).getParent as any)();
          }
          return null;
        }, ((i as any).prototype as any).updateLength = function (this: any): any {
          var g: any = new (Array as any)(4);
          (this as any).isOverlapingSourceAndTarget = ((e as any).getIntersection as any)((((this as any).target as any).getRect as any)(), (((this as any).source as any).getRect as any)(), g), (this as any).isOverlapingSourceAndTarget || ((this as any).lengthX = ((g as any)[0] as any) - ((g as any)[2] as any), (this as any).lengthY = ((g as any)[1] as any) - ((g as any)[3] as any), (((Math as any).abs as any)((this as any).lengthX) as any) < (1 as any) && ((this as any).lengthX = ((t as any).sign as any)((this as any).lengthX)), (((Math as any).abs as any)((this as any).lengthY) as any) < (1 as any) && ((this as any).lengthY = ((t as any).sign as any)((this as any).lengthY)), (this as any).length = ((Math as any).sqrt as any)((((this as any).lengthX as any) * ((this as any).lengthX as any) as any) + (((this as any).lengthY as any) * ((this as any).lengthY as any) as any)));
        }, ((i as any).prototype as any).updateLengthSimple = function (this: any): any {
          (this as any).lengthX = ((((this as any).target as any).getCenterX as any)() as any) - ((((this as any).source as any).getCenterX as any)() as any), (this as any).lengthY = ((((this as any).target as any).getCenterY as any)() as any) - ((((this as any).source as any).getCenterY as any)() as any), (((Math as any).abs as any)((this as any).lengthX) as any) < (1 as any) && ((this as any).lengthX = ((t as any).sign as any)((this as any).lengthX)), (((Math as any).abs as any)((this as any).lengthY) as any) < (1 as any) && ((this as any).lengthY = ((t as any).sign as any)((this as any).lengthY)), (this as any).length = ((Math as any).sqrt as any)((((this as any).lengthX as any) * ((this as any).lengthX as any) as any) + (((this as any).lengthY as any) * ((this as any).lengthY as any) as any));
        }, (N as any).exports = i;
      }, function (this: any, N: any, I: any, L: any): any {
        function o(this: any, e: any): any {
          (this as any).vGraphObject = e;
        }
        (N as any).exports = o;
      }, function (this: any, N: any, I: any, L: any): any {
        var d: any;
        var o: any = (L as any)(2),
          e: any = (L as any)(10),
          t: any = (L as any)(13),
          i: any = (L as any)(0),
          l: any = (L as any)(16),
          g: any = (L as any)(4);
        function n(this: any, r: any, h: any, a: any, p: any): any {
          (a as any) == (null as any) && (p as any) == (null as any) && (p = h), ((o as any).call as any)(this, p), ((r as any).graphManager as any) != (null as any) && (r = (r as any).graphManager), (this as any).estimatedSize = (e as any).MIN_VALUE, (this as any).inclusionTreeDepth = (e as any).MAX_VALUE, (this as any).vGraphObject = p, (this as any).edges = [], (this as any).graphManager = r, (a as any) != (null as any) && (h as any) != (null as any) ? (this as any).rect = new (t as any)((h as any).x, (h as any).y, (a as any).width, (a as any).height) : (this as any).rect = new (t as any)();
        }
        (n as any).prototype = ((Object as any).create as any)((o as any).prototype);
        for (d in o) (n as any)[d] = (o as any)[d];
        ((n as any).prototype as any).getEdges = function (this: any): any {
          return (this as any).edges;
        }, ((n as any).prototype as any).getChild = function (this: any): any {
          return (this as any).child;
        }, ((n as any).prototype as any).getOwner = function (this: any): any {
          return (this as any).owner;
        }, ((n as any).prototype as any).getWidth = function (this: any): any {
          return ((this as any).rect as any).width;
        }, ((n as any).prototype as any).setWidth = function (this: any, r: any): any {
          ((this as any).rect as any).width = r;
        }, ((n as any).prototype as any).getHeight = function (this: any): any {
          return ((this as any).rect as any).height;
        }, ((n as any).prototype as any).setHeight = function (this: any, r: any): any {
          ((this as any).rect as any).height = r;
        }, ((n as any).prototype as any).getCenterX = function (this: any): any {
          return (((this as any).rect as any).x as any) + ((((this as any).rect as any).width as any) / (2 as any) as any);
        }, ((n as any).prototype as any).getCenterY = function (this: any): any {
          return (((this as any).rect as any).y as any) + ((((this as any).rect as any).height as any) / (2 as any) as any);
        }, ((n as any).prototype as any).getCenter = function (this: any): any {
          return new (g as any)((((this as any).rect as any).x as any) + ((((this as any).rect as any).width as any) / (2 as any) as any), (((this as any).rect as any).y as any) + ((((this as any).rect as any).height as any) / (2 as any) as any));
        }, ((n as any).prototype as any).getLocation = function (this: any): any {
          return new (g as any)(((this as any).rect as any).x, ((this as any).rect as any).y);
        }, ((n as any).prototype as any).getRect = function (this: any): any {
          return (this as any).rect;
        }, ((n as any).prototype as any).getDiagonal = function (this: any): any {
          return ((Math as any).sqrt as any)(((((this as any).rect as any).width as any) * (((this as any).rect as any).width as any) as any) + ((((this as any).rect as any).height as any) * (((this as any).rect as any).height as any) as any));
        }, ((n as any).prototype as any).getHalfTheDiagonal = function (this: any): any {
          return (((Math as any).sqrt as any)(((((this as any).rect as any).height as any) * (((this as any).rect as any).height as any) as any) + ((((this as any).rect as any).width as any) * (((this as any).rect as any).width as any) as any)) as any) / (2 as any);
        }, ((n as any).prototype as any).setRect = function (this: any, r: any, h: any): any {
          ((this as any).rect as any).x = (r as any).x, ((this as any).rect as any).y = (r as any).y, ((this as any).rect as any).width = (h as any).width, ((this as any).rect as any).height = (h as any).height;
        }, ((n as any).prototype as any).setCenter = function (this: any, r: any, h: any): any {
          ((this as any).rect as any).x = (r as any) - ((((this as any).rect as any).width as any) / (2 as any) as any), ((this as any).rect as any).y = (h as any) - ((((this as any).rect as any).height as any) / (2 as any) as any);
        }, ((n as any).prototype as any).setLocation = function (this: any, r: any, h: any): any {
          ((this as any).rect as any).x = r, ((this as any).rect as any).y = h;
        }, ((n as any).prototype as any).moveBy = function (this: any, r: any, h: any): any {
          ((this as any).rect as any).x += r, ((this as any).rect as any).y += h;
        }, ((n as any).prototype as any).getEdgeListToNode = function (this: any, r: any): any {
          var h: any = [],
            a: any = this;
          return (((a as any).edges as any).forEach as any)(function (this: any, p: any): any {
            if (((p as any).target as any) == (r as any)) {
              if (((p as any).source as any) != (a as any)) throw "Incorrect edge source!";
              ((h as any).push as any)(p);
            }
          }), h;
        }, ((n as any).prototype as any).getEdgesBetween = function (this: any, r: any): any {
          var h: any = [],
            a: any = this;
          return (((a as any).edges as any).forEach as any)(function (this: any, p: any): any {
            if (!(((p as any).source as any) == (a as any) || ((p as any).target as any) == (a as any))) throw "Incorrect edge source and/or target";
            (((p as any).target as any) == (r as any) || ((p as any).source as any) == (r as any)) && ((h as any).push as any)(p);
          }), h;
        }, ((n as any).prototype as any).getNeighborsList = function (this: any): any {
          var r: any = new (Set as any)(),
            h: any = this;
          return (((h as any).edges as any).forEach as any)(function (this: any, a: any): any {
            if (((a as any).source as any) == (h as any)) ((r as any).add as any)((a as any).target);else {
              if (((a as any).target as any) != (h as any)) throw "Incorrect incidency!";
              ((r as any).add as any)((a as any).source);
            }
          }), r;
        }, ((n as any).prototype as any).withChildren = function (this: any): any {
          var r: any = new (Set as any)(),
            h: any,
            a: any;
          if (((r as any).add as any)(this), ((this as any).child as any) != (null as any)) for (var p: any = (((this as any).child as any).getNodes as any)(), v: any = 0; (v as any) < ((p as any).length as any); v++) h = (p as any)[v], a = ((h as any).withChildren as any)(), ((a as any).forEach as any)(function (this: any, D: any): any {
            ((r as any).add as any)(D);
          });
          return r;
        }, ((n as any).prototype as any).getNoOfChildren = function (this: any): any {
          var r: any = 0,
            h: any;
          if (((this as any).child as any) == (null as any)) r = 1;else for (var a: any = (((this as any).child as any).getNodes as any)(), p: any = 0; (p as any) < ((a as any).length as any); p++) h = (a as any)[p], r += ((h as any).getNoOfChildren as any)();
          return (r as any) == (0 as any) && (r = 1), r;
        }, ((n as any).prototype as any).getEstimatedSize = function (this: any): any {
          if (((this as any).estimatedSize as any) == ((e as any).MIN_VALUE as any)) throw "assert failed";
          return (this as any).estimatedSize;
        }, ((n as any).prototype as any).calcEstimatedSize = function (this: any): any {
          return ((this as any).child as any) == (null as any) ? (this as any).estimatedSize = ((((this as any).rect as any).width as any) + (((this as any).rect as any).height as any) as any) / (2 as any) : ((this as any).estimatedSize = (((this as any).child as any).calcEstimatedSize as any)(), ((this as any).rect as any).width = (this as any).estimatedSize, ((this as any).rect as any).height = (this as any).estimatedSize, (this as any).estimatedSize);
        }, ((n as any).prototype as any).scatter = function (this: any): any {
          var r: any,
            h: any,
            a: any = -(i as any).INITIAL_WORLD_BOUNDARY,
            p: any = (i as any).INITIAL_WORLD_BOUNDARY;
          r = (((i as any).WORLD_CENTER_X as any) + ((((l as any).nextDouble as any)() as any) * ((p as any) - (a as any) as any) as any) as any) + (a as any);
          var v: any = -(i as any).INITIAL_WORLD_BOUNDARY,
            D: any = (i as any).INITIAL_WORLD_BOUNDARY;
          h = (((i as any).WORLD_CENTER_Y as any) + ((((l as any).nextDouble as any)() as any) * ((D as any) - (v as any) as any) as any) as any) + (v as any), ((this as any).rect as any).x = r, ((this as any).rect as any).y = h;
        }, ((n as any).prototype as any).updateBounds = function (this: any): any {
          if ((((this as any).getChild as any)() as any) == (null as any)) throw "assert failed";
          if (((((((this as any).getChild as any)() as any).getNodes as any)() as any).length as any) != (0 as any)) {
            var r: any = ((this as any).getChild as any)();
            if (((r as any).updateBounds as any)(!0), ((this as any).rect as any).x = ((r as any).getLeft as any)(), ((this as any).rect as any).y = ((r as any).getTop as any)(), ((this as any).setWidth as any)((((r as any).getRight as any)() as any) - (((r as any).getLeft as any)() as any)), ((this as any).setHeight as any)((((r as any).getBottom as any)() as any) - (((r as any).getTop as any)() as any)), (i as any).NODE_DIMENSIONS_INCLUDE_LABELS) {
              var h: any = (((r as any).getRight as any)() as any) - (((r as any).getLeft as any)() as any),
                a: any = (((r as any).getBottom as any)() as any) - (((r as any).getTop as any)() as any);
              ((this as any).labelWidth as any) > (h as any) && (((this as any).rect as any).x -= (((this as any).labelWidth as any) - (h as any) as any) / (2 as any), ((this as any).setWidth as any)((this as any).labelWidth)), ((this as any).labelHeight as any) > (a as any) && (((this as any).labelPos as any) == ("center" as any) ? ((this as any).rect as any).y -= (((this as any).labelHeight as any) - (a as any) as any) / (2 as any) : ((this as any).labelPos as any) == ("top" as any) && (((this as any).rect as any).y -= ((this as any).labelHeight as any) - (a as any)), ((this as any).setHeight as any)((this as any).labelHeight));
            }
          }
        }, ((n as any).prototype as any).getInclusionTreeDepth = function (this: any): any {
          if (((this as any).inclusionTreeDepth as any) == ((e as any).MAX_VALUE as any)) throw "assert failed";
          return (this as any).inclusionTreeDepth;
        }, ((n as any).prototype as any).transform = function (this: any, r: any): any {
          var h: any = ((this as any).rect as any).x;
          (h as any) > ((i as any).WORLD_BOUNDARY as any) ? h = (i as any).WORLD_BOUNDARY : (h as any) < (-(i as any).WORLD_BOUNDARY as any) && (h = -(i as any).WORLD_BOUNDARY);
          var a: any = ((this as any).rect as any).y;
          (a as any) > ((i as any).WORLD_BOUNDARY as any) ? a = (i as any).WORLD_BOUNDARY : (a as any) < (-(i as any).WORLD_BOUNDARY as any) && (a = -(i as any).WORLD_BOUNDARY);
          var p: any = new (g as any)(h, a),
            v: any = ((r as any).inverseTransformPoint as any)(p);
          ((this as any).setLocation as any)((v as any).x, (v as any).y);
        }, ((n as any).prototype as any).getLeft = function (this: any): any {
          return ((this as any).rect as any).x;
        }, ((n as any).prototype as any).getRight = function (this: any): any {
          return (((this as any).rect as any).x as any) + (((this as any).rect as any).width as any);
        }, ((n as any).prototype as any).getTop = function (this: any): any {
          return ((this as any).rect as any).y;
        }, ((n as any).prototype as any).getBottom = function (this: any): any {
          return (((this as any).rect as any).y as any) + (((this as any).rect as any).height as any);
        }, ((n as any).prototype as any).getParent = function (this: any): any {
          return ((this as any).owner as any) == (null as any) ? null : (((this as any).owner as any).getParent as any)();
        }, (N as any).exports = n;
      }, function (this: any, N: any, I: any, L: any): any {
        function o(this: any, e: any, t: any): any {
          (e as any) == (null as any) && (t as any) == (null as any) ? ((this as any).x = 0, (this as any).y = 0) : ((this as any).x = e, (this as any).y = t);
        }
        ((o as any).prototype as any).getX = function (this: any): any {
          return (this as any).x;
        }, ((o as any).prototype as any).getY = function (this: any): any {
          return (this as any).y;
        }, ((o as any).prototype as any).setX = function (this: any, e: any): any {
          (this as any).x = e;
        }, ((o as any).prototype as any).setY = function (this: any, e: any): any {
          (this as any).y = e;
        }, ((o as any).prototype as any).getDifference = function (this: any, e: any): any {
          return new (DimensionD as any)(((this as any).x as any) - ((e as any).x as any), ((this as any).y as any) - ((e as any).y as any));
        }, ((o as any).prototype as any).getCopy = function (this: any): any {
          return new (o as any)((this as any).x, (this as any).y);
        }, ((o as any).prototype as any).translate = function (this: any, e: any): any {
          return (this as any).x += (e as any).width, (this as any).y += (e as any).height, this;
        }, (N as any).exports = o;
      }, function (this: any, N: any, I: any, L: any): any {
        var a: any;
        var o: any = (L as any)(2),
          e: any = (L as any)(10),
          t: any = (L as any)(0),
          i: any = (L as any)(6),
          l: any = (L as any)(3),
          g: any = (L as any)(1),
          n: any = (L as any)(13),
          d: any = (L as any)(12),
          r: any = (L as any)(11);
        function h(this: any, p: any, v: any, D: any): any {
          ((o as any).call as any)(this, D), (this as any).estimatedSize = (e as any).MIN_VALUE, (this as any).margin = (t as any).DEFAULT_GRAPH_MARGIN, (this as any).edges = [], (this as any).nodes = [], (this as any).isConnected = !1, (this as any).parent = p, (v as any) != (null as any) && v instanceof i ? (this as any).graphManager = v : (v as any) != (null as any) && v instanceof Layout && ((this as any).graphManager = (v as any).graphManager);
        }
        (h as any).prototype = ((Object as any).create as any)((o as any).prototype);
        for (a in o) (h as any)[a] = (o as any)[a];
        ((h as any).prototype as any).getNodes = function (this: any): any {
          return (this as any).nodes;
        }, ((h as any).prototype as any).getEdges = function (this: any): any {
          return (this as any).edges;
        }, ((h as any).prototype as any).getGraphManager = function (this: any): any {
          return (this as any).graphManager;
        }, ((h as any).prototype as any).getParent = function (this: any): any {
          return (this as any).parent;
        }, ((h as any).prototype as any).getLeft = function (this: any): any {
          return (this as any).left;
        }, ((h as any).prototype as any).getRight = function (this: any): any {
          return (this as any).right;
        }, ((h as any).prototype as any).getTop = function (this: any): any {
          return (this as any).top;
        }, ((h as any).prototype as any).getBottom = function (this: any): any {
          return (this as any).bottom;
        }, ((h as any).prototype as any).isConnected = function (this: any): any {
          return (this as any).isConnected;
        }, ((h as any).prototype as any).add = function (this: any, p: any, v: any, D: any): any {
          if ((v as any) == (null as any) && (D as any) == (null as any)) {
            var u: any = p;
            if (((this as any).graphManager as any) == (null as any)) throw "Graph has no graph mgr!";
            if ((((((this as any).getNodes as any)() as any).indexOf as any)(u) as any) > (-1 as any)) throw "Node already in graph!";
            return (u as any).owner = this, ((((this as any).getNodes as any)() as any).push as any)(u), u;
          } else {
            var T: any = p;
            if (!((((((this as any).getNodes as any)() as any).indexOf as any)(v) as any) > (-1 as any) && (((((this as any).getNodes as any)() as any).indexOf as any)(D) as any) > (-1 as any))) throw "Source or target not in graph!";
            if (!(((v as any).owner as any) == ((D as any).owner as any) && ((v as any).owner as any) == (this as any))) throw "Both owners must be this graph!";
            return ((v as any).owner as any) != ((D as any).owner as any) ? null : ((T as any).source = v, (T as any).target = D, (T as any).isInterGraph = !1, ((((this as any).getEdges as any)() as any).push as any)(T), (((v as any).edges as any).push as any)(T), (D as any) != (v as any) && (((D as any).edges as any).push as any)(T), T);
          }
        }, ((h as any).prototype as any).remove = function (this: any, p: any): any {
          var v: any = p;
          if (p instanceof l) {
            if ((v as any) == (null as any)) throw "Node is null!";
            if (!(((v as any).owner as any) != (null as any) && ((v as any).owner as any) == (this as any))) throw "Owner graph is invalid!";
            if (((this as any).graphManager as any) == (null as any)) throw "Owner graph manager is invalid!";
            for (var D: any = (((v as any).edges as any).slice as any)(), u: any, T: any = (D as any).length, y: any = 0; (y as any) < (T as any); y++) u = (D as any)[y], (u as any).isInterGraph ? (((this as any).graphManager as any).remove as any)(u) : ((((u as any).source as any).owner as any).remove as any)(u);
            var O: any = (((this as any).nodes as any).indexOf as any)(v);
            if ((O as any) == (-1 as any)) throw "Node not in owner node list!";
            (((this as any).nodes as any).splice as any)(O, 1);
          } else if (p instanceof g) {
            var u: any = p;
            if ((u as any) == (null as any)) throw "Edge is null!";
            if (!(((u as any).source as any) != (null as any) && ((u as any).target as any) != (null as any))) throw "Source and/or target is null!";
            if (!((((u as any).source as any).owner as any) != (null as any) && (((u as any).target as any).owner as any) != (null as any) && (((u as any).source as any).owner as any) == (this as any) && (((u as any).target as any).owner as any) == (this as any))) throw "Source and/or target owner is invalid!";
            var s: any = ((((u as any).source as any).edges as any).indexOf as any)(u),
              f: any = ((((u as any).target as any).edges as any).indexOf as any)(u);
            if (!((s as any) > (-1 as any) && (f as any) > (-1 as any))) throw "Source and/or target doesn't know this edge!";
            ((((u as any).source as any).edges as any).splice as any)(s, 1), ((u as any).target as any) != ((u as any).source as any) && ((((u as any).target as any).edges as any).splice as any)(f, 1);
            var O: any = ((((((u as any).source as any).owner as any).getEdges as any)() as any).indexOf as any)(u);
            if ((O as any) == (-1 as any)) throw "Not in owner's edge list!";
            ((((((u as any).source as any).owner as any).getEdges as any)() as any).splice as any)(O, 1);
          }
        }, ((h as any).prototype as any).updateLeftTop = function (this: any): any {
          for (var p: any = (e as any).MAX_VALUE, v: any = (e as any).MAX_VALUE, D: any, u: any, T: any, y: any = ((this as any).getNodes as any)(), O: any = (y as any).length, s: any = 0; (s as any) < (O as any); s++) {
            var f: any = (y as any)[s];
            D = ((f as any).getTop as any)(), u = ((f as any).getLeft as any)(), (p as any) > (D as any) && (p = D), (v as any) > (u as any) && (v = u);
          }
          return (p as any) == ((e as any).MAX_VALUE as any) ? null : ((((((y as any)[0] as any).getParent as any)() as any).paddingLeft as any) != (null as any) ? T = ((((y as any)[0] as any).getParent as any)() as any).paddingLeft : T = (this as any).margin, (this as any).left = (v as any) - (T as any), (this as any).top = (p as any) - (T as any), new (d as any)((this as any).left, (this as any).top));
        }, ((h as any).prototype as any).updateBounds = function (this: any, p: any): any {
          for (var v: any = (e as any).MAX_VALUE, D: any = -(e as any).MAX_VALUE, u: any = (e as any).MAX_VALUE, T: any = -(e as any).MAX_VALUE, y: any, O: any, s: any, f: any, c: any, E: any = (this as any).nodes, A: any = (E as any).length, m: any = 0; (m as any) < (A as any); m++) {
            var C: any = (E as any)[m];
            p && ((C as any).child as any) != (null as any) && ((C as any).updateBounds as any)(), y = ((C as any).getLeft as any)(), O = ((C as any).getRight as any)(), s = ((C as any).getTop as any)(), f = ((C as any).getBottom as any)(), (v as any) > (y as any) && (v = y), (D as any) < (O as any) && (D = O), (u as any) > (s as any) && (u = s), (T as any) < (f as any) && (T = f);
          }
          var R: any = new (n as any)(v, u, (D as any) - (v as any), (T as any) - (u as any));
          (v as any) == ((e as any).MAX_VALUE as any) && ((this as any).left = (((this as any).parent as any).getLeft as any)(), (this as any).right = (((this as any).parent as any).getRight as any)(), (this as any).top = (((this as any).parent as any).getTop as any)(), (this as any).bottom = (((this as any).parent as any).getBottom as any)()), (((((E as any)[0] as any).getParent as any)() as any).paddingLeft as any) != (null as any) ? c = ((((E as any)[0] as any).getParent as any)() as any).paddingLeft : c = (this as any).margin, (this as any).left = ((R as any).x as any) - (c as any), (this as any).right = (((R as any).x as any) + ((R as any).width as any) as any) + (c as any), (this as any).top = ((R as any).y as any) - (c as any), (this as any).bottom = (((R as any).y as any) + ((R as any).height as any) as any) + (c as any);
        }, (h as any).calculateBounds = function (this: any, p: any): any {
          for (var v: any = (e as any).MAX_VALUE, D: any = -(e as any).MAX_VALUE, u: any = (e as any).MAX_VALUE, T: any = -(e as any).MAX_VALUE, y: any, O: any, s: any, f: any, c: any = (p as any).length, E: any = 0; (E as any) < (c as any); E++) {
            var A: any = (p as any)[E];
            y = ((A as any).getLeft as any)(), O = ((A as any).getRight as any)(), s = ((A as any).getTop as any)(), f = ((A as any).getBottom as any)(), (v as any) > (y as any) && (v = y), (D as any) < (O as any) && (D = O), (u as any) > (s as any) && (u = s), (T as any) < (f as any) && (T = f);
          }
          var m: any = new (n as any)(v, u, (D as any) - (v as any), (T as any) - (u as any));
          return m;
        }, ((h as any).prototype as any).getInclusionTreeDepth = function (this: any): any {
          return (this as any) == ((((this as any).graphManager as any).getRoot as any)() as any) ? 1 : (((this as any).parent as any).getInclusionTreeDepth as any)();
        }, ((h as any).prototype as any).getEstimatedSize = function (this: any): any {
          if (((this as any).estimatedSize as any) == ((e as any).MIN_VALUE as any)) throw "assert failed";
          return (this as any).estimatedSize;
        }, ((h as any).prototype as any).calcEstimatedSize = function (this: any): any {
          for (var p: any = 0, v: any = (this as any).nodes, D: any = (v as any).length, u: any = 0; (u as any) < (D as any); u++) {
            var T: any = (v as any)[u];
            p += ((T as any).calcEstimatedSize as any)();
          }
          return (p as any) == (0 as any) ? (this as any).estimatedSize = (t as any).EMPTY_COMPOUND_NODE_SIZE : (this as any).estimatedSize = (p as any) / (((Math as any).sqrt as any)(((this as any).nodes as any).length) as any), (this as any).estimatedSize;
        }, ((h as any).prototype as any).updateConnected = function (this: any): any {
          var p: any = this;
          if ((((this as any).nodes as any).length as any) == (0 as any)) {
            (this as any).isConnected = !0;
            return;
          }
          var v: any = new (r as any)(),
            D: any = new (Set as any)(),
            u: any = ((this as any).nodes as any)[0],
            T: any,
            y: any,
            O: any = ((u as any).withChildren as any)();
          for (((O as any).forEach as any)(function (this: any, m: any): any {
            ((v as any).push as any)(m), ((D as any).add as any)(m);
          }); ((v as any).length as any) !== (0 as any);) {
            u = ((v as any).shift as any)(), T = ((u as any).getEdges as any)();
            for (var s: any = (T as any).length, f: any = 0; (f as any) < (s as any); f++) {
              var c: any = (T as any)[f];
              if (y = ((c as any).getOtherEndInGraph as any)(u, this), (y as any) != (null as any) && !((D as any).has as any)(y)) {
                var E: any = ((y as any).withChildren as any)();
                ((E as any).forEach as any)(function (this: any, m: any): any {
                  ((v as any).push as any)(m), ((D as any).add as any)(m);
                });
              }
            }
          }
          if ((this as any).isConnected = !1, ((D as any).size as any) >= (((this as any).nodes as any).length as any)) {
            var A: any = 0;
            ((D as any).forEach as any)(function (this: any, m: any): any {
              ((m as any).owner as any) == (p as any) && A++;
            }), (A as any) == (((this as any).nodes as any).length as any) && ((this as any).isConnected = !0);
          }
        }, (N as any).exports = h;
      }, function (this: any, N: any, I: any, L: any): any {
        var o: any,
          e: any = (L as any)(1);
        function t(this: any, i: any): any {
          o = (L as any)(5), (this as any).layout = i, (this as any).graphs = [], (this as any).edges = [];
        }
        ((t as any).prototype as any).addRoot = function (this: any): any {
          var i: any = (((this as any).layout as any).newGraph as any)(),
            l: any = (((this as any).layout as any).newNode as any)(null),
            g: any = ((this as any).add as any)(i, l);
          return ((this as any).setRootGraph as any)(g), (this as any).rootGraph;
        }, ((t as any).prototype as any).add = function (this: any, i: any, l: any, g: any, n: any, d: any): any {
          if ((g as any) == (null as any) && (n as any) == (null as any) && (d as any) == (null as any)) {
            if ((i as any) == (null as any)) throw "Graph is null!";
            if ((l as any) == (null as any)) throw "Parent node is null!";
            if (((((this as any).graphs as any).indexOf as any)(i) as any) > (-1 as any)) throw "Graph already in this graph mgr!";
            if ((((this as any).graphs as any).push as any)(i), ((i as any).parent as any) != (null as any)) throw "Already has a parent!";
            if (((l as any).child as any) != (null as any)) throw "Already has a child!";
            return (i as any).parent = l, (l as any).child = i, i;
          } else {
            d = g, n = l, g = i;
            var r: any = ((n as any).getOwner as any)(),
              h: any = ((d as any).getOwner as any)();
            if (!((r as any) != (null as any) && (((r as any).getGraphManager as any)() as any) == (this as any))) throw "Source not in this graph mgr!";
            if (!((h as any) != (null as any) && (((h as any).getGraphManager as any)() as any) == (this as any))) throw "Target not in this graph mgr!";
            if ((r as any) == (h as any)) return (g as any).isInterGraph = !1, ((r as any).add as any)(g, n, d);
            if ((g as any).isInterGraph = !0, (g as any).source = n, (g as any).target = d, ((((this as any).edges as any).indexOf as any)(g) as any) > (-1 as any)) throw "Edge already in inter-graph edge list!";
            if ((((this as any).edges as any).push as any)(g), !(((g as any).source as any) != (null as any) && ((g as any).target as any) != (null as any))) throw "Edge source and/or target is null!";
            if (!((((((g as any).source as any).edges as any).indexOf as any)(g) as any) == (-1 as any) && (((((g as any).target as any).edges as any).indexOf as any)(g) as any) == (-1 as any))) throw "Edge already in source and/or target incidency list!";
            return ((((g as any).source as any).edges as any).push as any)(g), ((((g as any).target as any).edges as any).push as any)(g), g;
          }
        }, ((t as any).prototype as any).remove = function (this: any, i: any): any {
          if (i instanceof o) {
            var l: any = i;
            if ((((l as any).getGraphManager as any)() as any) != (this as any)) throw "Graph not in this graph mgr";
            if (!((l as any) == ((this as any).rootGraph as any) || ((l as any).parent as any) != (null as any) && (((l as any).parent as any).graphManager as any) == (this as any))) throw "Invalid parent node!";
            var g: any = [];
            g = ((g as any).concat as any)(((l as any).getEdges as any)());
            for (var n: any, d: any = (g as any).length, r: any = 0; (r as any) < (d as any); r++) n = (g as any)[r], ((l as any).remove as any)(n);
            var h: any = [];
            h = ((h as any).concat as any)(((l as any).getNodes as any)());
            var a: any;
            d = (h as any).length;
            for (var r: any = 0; (r as any) < (d as any); r++) a = (h as any)[r], ((l as any).remove as any)(a);
            (l as any) == ((this as any).rootGraph as any) && ((this as any).setRootGraph as any)(null);
            var p: any = (((this as any).graphs as any).indexOf as any)(l);
            (((this as any).graphs as any).splice as any)(p, 1), (l as any).parent = null;
          } else if (i instanceof e) {
            if (n = i, (n as any) == (null as any)) throw "Edge is null!";
            if (!(n as any).isInterGraph) throw "Not an inter-graph edge!";
            if (!(((n as any).source as any) != (null as any) && ((n as any).target as any) != (null as any))) throw "Source and/or target is null!";
            if (!((((((n as any).source as any).edges as any).indexOf as any)(n) as any) != (-1 as any) && (((((n as any).target as any).edges as any).indexOf as any)(n) as any) != (-1 as any))) throw "Source and/or target doesn't know this edge!";
            var p: any = ((((n as any).source as any).edges as any).indexOf as any)(n);
            if (((((n as any).source as any).edges as any).splice as any)(p, 1), p = ((((n as any).target as any).edges as any).indexOf as any)(n), ((((n as any).target as any).edges as any).splice as any)(p, 1), !((((n as any).source as any).owner as any) != (null as any) && (((((n as any).source as any).owner as any).getGraphManager as any)() as any) != (null as any))) throw "Edge owner graph or owner graph manager is null!";
            if (((((((((n as any).source as any).owner as any).getGraphManager as any)() as any).edges as any).indexOf as any)(n) as any) == (-1 as any)) throw "Not in owner graph manager's edge list!";
            var p: any = (((((((n as any).source as any).owner as any).getGraphManager as any)() as any).edges as any).indexOf as any)(n);
            (((((((n as any).source as any).owner as any).getGraphManager as any)() as any).edges as any).splice as any)(p, 1);
          }
        }, ((t as any).prototype as any).updateBounds = function (this: any): any {
          (((this as any).rootGraph as any).updateBounds as any)(!0);
        }, ((t as any).prototype as any).getGraphs = function (this: any): any {
          return (this as any).graphs;
        }, ((t as any).prototype as any).getAllNodes = function (this: any): any {
          if (((this as any).allNodes as any) == (null as any)) {
            for (var i: any = [], l: any = ((this as any).getGraphs as any)(), g: any = (l as any).length, n: any = 0; (n as any) < (g as any); n++) i = ((i as any).concat as any)((((l as any)[n] as any).getNodes as any)());
            (this as any).allNodes = i;
          }
          return (this as any).allNodes;
        }, ((t as any).prototype as any).resetAllNodes = function (this: any): any {
          (this as any).allNodes = null;
        }, ((t as any).prototype as any).resetAllEdges = function (this: any): any {
          (this as any).allEdges = null;
        }, ((t as any).prototype as any).resetAllNodesToApplyGravitation = function (this: any): any {
          (this as any).allNodesToApplyGravitation = null;
        }, ((t as any).prototype as any).getAllEdges = function (this: any): any {
          if (((this as any).allEdges as any) == (null as any)) {
            var i: any = [],
              l: any = ((this as any).getGraphs as any)();
            (l as any).length;
            for (var g: any = 0; (g as any) < ((l as any).length as any); g++) i = ((i as any).concat as any)((((l as any)[g] as any).getEdges as any)());
            i = ((i as any).concat as any)((this as any).edges), (this as any).allEdges = i;
          }
          return (this as any).allEdges;
        }, ((t as any).prototype as any).getAllNodesToApplyGravitation = function (this: any): any {
          return (this as any).allNodesToApplyGravitation;
        }, ((t as any).prototype as any).setAllNodesToApplyGravitation = function (this: any, i: any): any {
          if (((this as any).allNodesToApplyGravitation as any) != (null as any)) throw "assert failed";
          (this as any).allNodesToApplyGravitation = i;
        }, ((t as any).prototype as any).getRoot = function (this: any): any {
          return (this as any).rootGraph;
        }, ((t as any).prototype as any).setRootGraph = function (this: any, i: any): any {
          if ((((i as any).getGraphManager as any)() as any) != (this as any)) throw "Root not in this graph mgr!";
          (this as any).rootGraph = i, ((i as any).parent as any) == (null as any) && ((i as any).parent = (((this as any).layout as any).newNode as any)("Root node"));
        }, ((t as any).prototype as any).getLayout = function (this: any): any {
          return (this as any).layout;
        }, ((t as any).prototype as any).isOneAncestorOfOther = function (this: any, i: any, l: any): any {
          if (!((i as any) != (null as any) && (l as any) != (null as any))) throw "assert failed";
          if ((i as any) == (l as any)) return !0;
          var g: any = ((i as any).getOwner as any)(),
            n: any;
          do {
            if (n = ((g as any).getParent as any)(), (n as any) == (null as any)) break;
            if ((n as any) == (l as any)) return !0;
            if (g = ((n as any).getOwner as any)(), (g as any) == (null as any)) break;
          } while (!0);
          g = ((l as any).getOwner as any)();
          do {
            if (n = ((g as any).getParent as any)(), (n as any) == (null as any)) break;
            if ((n as any) == (i as any)) return !0;
            if (g = ((n as any).getOwner as any)(), (g as any) == (null as any)) break;
          } while (!0);
          return !1;
        }, ((t as any).prototype as any).calcLowestCommonAncestors = function (this: any): any {
          for (var i: any, l: any, g: any, n: any, d: any, r: any = ((this as any).getAllEdges as any)(), h: any = (r as any).length, a: any = 0; (a as any) < (h as any); a++) {
            if (i = (r as any)[a], l = (i as any).source, g = (i as any).target, (i as any).lca = null, (i as any).sourceInLca = l, (i as any).targetInLca = g, (l as any) == (g as any)) {
              (i as any).lca = ((l as any).getOwner as any)();
              continue;
            }
            for (n = ((l as any).getOwner as any)(); ((i as any).lca as any) == (null as any);) {
              for ((i as any).targetInLca = g, d = ((g as any).getOwner as any)(); ((i as any).lca as any) == (null as any);) {
                if ((d as any) == (n as any)) {
                  (i as any).lca = d;
                  break;
                }
                if ((d as any) == ((this as any).rootGraph as any)) break;
                if (((i as any).lca as any) != (null as any)) throw "assert failed";
                (i as any).targetInLca = ((d as any).getParent as any)(), d = (((i as any).targetInLca as any).getOwner as any)();
              }
              if ((n as any) == ((this as any).rootGraph as any)) break;
              ((i as any).lca as any) == (null as any) && ((i as any).sourceInLca = ((n as any).getParent as any)(), n = (((i as any).sourceInLca as any).getOwner as any)());
            }
            if (((i as any).lca as any) == (null as any)) throw "assert failed";
          }
        }, ((t as any).prototype as any).calcLowestCommonAncestor = function (this: any, i: any, l: any): any {
          if ((i as any) == (l as any)) return ((i as any).getOwner as any)();
          var g: any = ((i as any).getOwner as any)();
          do {
            if ((g as any) == (null as any)) break;
            var n: any = ((l as any).getOwner as any)();
            do {
              if ((n as any) == (null as any)) break;
              if ((n as any) == (g as any)) return n;
              n = ((((n as any).getParent as any)() as any).getOwner as any)();
            } while (!0);
            g = ((((g as any).getParent as any)() as any).getOwner as any)();
          } while (!0);
          return g;
        }, ((t as any).prototype as any).calcInclusionTreeDepths = function (this: any, i: any, l: any): any {
          (i as any) == (null as any) && (l as any) == (null as any) && (i = (this as any).rootGraph, l = 1);
          for (var g: any, n: any = ((i as any).getNodes as any)(), d: any = (n as any).length, r: any = 0; (r as any) < (d as any); r++) g = (n as any)[r], (g as any).inclusionTreeDepth = l, ((g as any).child as any) != (null as any) && ((this as any).calcInclusionTreeDepths as any)((g as any).child, (l as any) + (1 as any));
        }, ((t as any).prototype as any).includesInvalidEdge = function (this: any): any {
          for (var i: any, l: any = ((this as any).edges as any).length, g: any = 0; (g as any) < (l as any); g++) if (i = ((this as any).edges as any)[g], ((this as any).isOneAncestorOfOther as any)((i as any).source, (i as any).target)) return !0;
          return !1;
        }, (N as any).exports = t;
      }, function (this: any, N: any, I: any, L: any): any {
        var t: any;
        var o: any = (L as any)(0);
        function e(this: any): any {}
        for (t in o) (e as any)[t] = (o as any)[t];
        (e as any).MAX_ITERATIONS = 2500, (e as any).DEFAULT_EDGE_LENGTH = 50, (e as any).DEFAULT_SPRING_STRENGTH = .45, (e as any).DEFAULT_REPULSION_STRENGTH = 4500, (e as any).DEFAULT_GRAVITY_STRENGTH = .4, (e as any).DEFAULT_COMPOUND_GRAVITY_STRENGTH = 1, (e as any).DEFAULT_GRAVITY_RANGE_FACTOR = 3.8, (e as any).DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = 1.5, (e as any).DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION = !0, (e as any).DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION = !0, (e as any).DEFAULT_COOLING_FACTOR_INCREMENTAL = .3, (e as any).COOLING_ADAPTATION_FACTOR = .33, (e as any).ADAPTATION_LOWER_NODE_LIMIT = 1e3, (e as any).ADAPTATION_UPPER_NODE_LIMIT = 5e3, (e as any).MAX_NODE_DISPLACEMENT_INCREMENTAL = 100, (e as any).MAX_NODE_DISPLACEMENT = ((e as any).MAX_NODE_DISPLACEMENT_INCREMENTAL as any) * (3 as any), (e as any).MIN_REPULSION_DIST = ((e as any).DEFAULT_EDGE_LENGTH as any) / (10 as any), (e as any).CONVERGENCE_CHECK_PERIOD = 100, (e as any).PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = .1, (e as any).MIN_EDGE_LENGTH = 1, (e as any).GRID_CALCULATION_CHECK_PERIOD = 10, (N as any).exports = e;
      }, function (this: any, N: any, I: any, L: any): any {
        var o: any = (L as any)(12);
        function e(this: any): any {}
        (e as any).calcSeparationAmount = function (this: any, t: any, i: any, l: any, g: any): any {
          if (!((t as any).intersects as any)(i)) throw "assert failed";
          var n: any = new (Array as any)(2);
          ((this as any).decideDirectionsForOverlappingNodes as any)(t, i, n), (l as any)[0] = (((Math as any).min as any)(((t as any).getRight as any)(), ((i as any).getRight as any)()) as any) - (((Math as any).max as any)((t as any).x, (i as any).x) as any), (l as any)[1] = (((Math as any).min as any)(((t as any).getBottom as any)(), ((i as any).getBottom as any)()) as any) - (((Math as any).max as any)((t as any).y, (i as any).y) as any), (((t as any).getX as any)() as any) <= (((i as any).getX as any)() as any) && (((t as any).getRight as any)() as any) >= (((i as any).getRight as any)() as any) ? (l as any)[0] += ((Math as any).min as any)((((i as any).getX as any)() as any) - (((t as any).getX as any)() as any), (((t as any).getRight as any)() as any) - (((i as any).getRight as any)() as any)) : (((i as any).getX as any)() as any) <= (((t as any).getX as any)() as any) && (((i as any).getRight as any)() as any) >= (((t as any).getRight as any)() as any) && ((l as any)[0] += ((Math as any).min as any)((((t as any).getX as any)() as any) - (((i as any).getX as any)() as any), (((i as any).getRight as any)() as any) - (((t as any).getRight as any)() as any))), (((t as any).getY as any)() as any) <= (((i as any).getY as any)() as any) && (((t as any).getBottom as any)() as any) >= (((i as any).getBottom as any)() as any) ? (l as any)[1] += ((Math as any).min as any)((((i as any).getY as any)() as any) - (((t as any).getY as any)() as any), (((t as any).getBottom as any)() as any) - (((i as any).getBottom as any)() as any)) : (((i as any).getY as any)() as any) <= (((t as any).getY as any)() as any) && (((i as any).getBottom as any)() as any) >= (((t as any).getBottom as any)() as any) && ((l as any)[1] += ((Math as any).min as any)((((t as any).getY as any)() as any) - (((i as any).getY as any)() as any), (((i as any).getBottom as any)() as any) - (((t as any).getBottom as any)() as any)));
          var d: any = ((Math as any).abs as any)(((((i as any).getCenterY as any)() as any) - (((t as any).getCenterY as any)() as any) as any) / ((((i as any).getCenterX as any)() as any) - (((t as any).getCenterX as any)() as any) as any));
          (((i as any).getCenterY as any)() as any) === (((t as any).getCenterY as any)() as any) && (((i as any).getCenterX as any)() as any) === (((t as any).getCenterX as any)() as any) && (d = 1);
          var r: any = (d as any) * ((l as any)[0] as any),
            h: any = ((l as any)[1] as any) / (d as any);
          ((l as any)[0] as any) < (h as any) ? h = (l as any)[0] : r = (l as any)[1], (l as any)[0] = ((-1 as any) * ((n as any)[0] as any) as any) * (((h as any) / (2 as any) as any) + (g as any) as any), (l as any)[1] = ((-1 as any) * ((n as any)[1] as any) as any) * (((r as any) / (2 as any) as any) + (g as any) as any);
        }, (e as any).decideDirectionsForOverlappingNodes = function (this: any, t: any, i: any, l: any): any {
          (((t as any).getCenterX as any)() as any) < (((i as any).getCenterX as any)() as any) ? (l as any)[0] = -1 : (l as any)[0] = 1, (((t as any).getCenterY as any)() as any) < (((i as any).getCenterY as any)() as any) ? (l as any)[1] = -1 : (l as any)[1] = 1;
        }, (e as any).getIntersection2 = function (this: any, t: any, i: any, l: any): any {
          var g: any = ((t as any).getCenterX as any)(),
            n: any = ((t as any).getCenterY as any)(),
            d: any = ((i as any).getCenterX as any)(),
            r: any = ((i as any).getCenterY as any)();
          if (((t as any).intersects as any)(i)) return (l as any)[0] = g, (l as any)[1] = n, (l as any)[2] = d, (l as any)[3] = r, !0;
          var h: any = ((t as any).getX as any)(),
            a: any = ((t as any).getY as any)(),
            p: any = ((t as any).getRight as any)(),
            v: any = ((t as any).getX as any)(),
            D: any = ((t as any).getBottom as any)(),
            u: any = ((t as any).getRight as any)(),
            T: any = ((t as any).getWidthHalf as any)(),
            y: any = ((t as any).getHeightHalf as any)(),
            O: any = ((i as any).getX as any)(),
            s: any = ((i as any).getY as any)(),
            f: any = ((i as any).getRight as any)(),
            c: any = ((i as any).getX as any)(),
            E: any = ((i as any).getBottom as any)(),
            A: any = ((i as any).getRight as any)(),
            m: any = ((i as any).getWidthHalf as any)(),
            C: any = ((i as any).getHeightHalf as any)(),
            R: any = !1,
            M: any = !1;
          if ((g as any) === (d as any)) {
            if ((n as any) > (r as any)) return (l as any)[0] = g, (l as any)[1] = a, (l as any)[2] = d, (l as any)[3] = E, !1;
            if ((n as any) < (r as any)) return (l as any)[0] = g, (l as any)[1] = D, (l as any)[2] = d, (l as any)[3] = s, !1;
          } else if ((n as any) === (r as any)) {
            if ((g as any) > (d as any)) return (l as any)[0] = h, (l as any)[1] = n, (l as any)[2] = f, (l as any)[3] = r, !1;
            if ((g as any) < (d as any)) return (l as any)[0] = p, (l as any)[1] = n, (l as any)[2] = O, (l as any)[3] = r, !1;
          } else {
            var S: any = ((t as any).height as any) / ((t as any).width as any),
              Y: any = ((i as any).height as any) / ((i as any).width as any),
              w: any = ((r as any) - (n as any) as any) / ((d as any) - (g as any) as any),
              x: any = void 0,
              F: any = void 0,
              U: any = void 0,
              P: any = void 0,
              _: any = void 0,
              X: any = void 0;
            if ((-S as any) === (w as any) ? (g as any) > (d as any) ? ((l as any)[0] = v, (l as any)[1] = D, R = !0) : ((l as any)[0] = p, (l as any)[1] = a, R = !0) : (S as any) === (w as any) && ((g as any) > (d as any) ? ((l as any)[0] = h, (l as any)[1] = a, R = !0) : ((l as any)[0] = u, (l as any)[1] = D, R = !0)), (-Y as any) === (w as any) ? (d as any) > (g as any) ? ((l as any)[2] = c, (l as any)[3] = E, M = !0) : ((l as any)[2] = f, (l as any)[3] = s, M = !0) : (Y as any) === (w as any) && ((d as any) > (g as any) ? ((l as any)[2] = O, (l as any)[3] = s, M = !0) : ((l as any)[2] = A, (l as any)[3] = E, M = !0)), R && M) return !1;
            if ((g as any) > (d as any) ? (n as any) > (r as any) ? (x = ((this as any).getCardinalDirection as any)(S, w, 4), F = ((this as any).getCardinalDirection as any)(Y, w, 2)) : (x = ((this as any).getCardinalDirection as any)(-S, w, 3), F = ((this as any).getCardinalDirection as any)(-Y, w, 1)) : (n as any) > (r as any) ? (x = ((this as any).getCardinalDirection as any)(-S, w, 1), F = ((this as any).getCardinalDirection as any)(-Y, w, 3)) : (x = ((this as any).getCardinalDirection as any)(S, w, 2), F = ((this as any).getCardinalDirection as any)(Y, w, 4)), !R) switch (x) {
              case 1:
                P = a, U = (g as any) + ((-y as any) / (w as any) as any), (l as any)[0] = U, (l as any)[1] = P;
                break;
              case 2:
                U = u, P = (n as any) + ((T as any) * (w as any) as any), (l as any)[0] = U, (l as any)[1] = P;
                break;
              case 3:
                P = D, U = (g as any) + ((y as any) / (w as any) as any), (l as any)[0] = U, (l as any)[1] = P;
                break;
              case 4:
                U = v, P = (n as any) + ((-T as any) * (w as any) as any), (l as any)[0] = U, (l as any)[1] = P;
                break;
            }
            if (!M) switch (F) {
              case 1:
                X = s, _ = (d as any) + ((-C as any) / (w as any) as any), (l as any)[2] = _, (l as any)[3] = X;
                break;
              case 2:
                _ = A, X = (r as any) + ((m as any) * (w as any) as any), (l as any)[2] = _, (l as any)[3] = X;
                break;
              case 3:
                X = E, _ = (d as any) + ((C as any) / (w as any) as any), (l as any)[2] = _, (l as any)[3] = X;
                break;
              case 4:
                _ = c, X = (r as any) + ((-m as any) * (w as any) as any), (l as any)[2] = _, (l as any)[3] = X;
                break;
            }
          }
          return !1;
        }, (e as any).getCardinalDirection = function (this: any, t: any, i: any, l: any): any {
          return (t as any) > (i as any) ? l : (1 as any) + ((l as any) % (4 as any) as any);
        }, (e as any).getIntersection = function (this: any, t: any, i: any, l: any, g: any): any {
          if ((g as any) == (null as any)) return ((this as any).getIntersection2 as any)(t, i, l);
          var n: any = (t as any).x,
            d: any = (t as any).y,
            r: any = (i as any).x,
            h: any = (i as any).y,
            a: any = (l as any).x,
            p: any = (l as any).y,
            v: any = (g as any).x,
            D: any = (g as any).y,
            u: any = void 0,
            T: any = void 0,
            y: any = void 0,
            O: any = void 0,
            s: any = void 0,
            f: any = void 0,
            c: any = void 0,
            E: any = void 0,
            A: any = void 0;
          return y = (h as any) - (d as any), s = (n as any) - (r as any), c = ((r as any) * (d as any) as any) - ((n as any) * (h as any) as any), O = (D as any) - (p as any), f = (a as any) - (v as any), E = ((v as any) * (p as any) as any) - ((a as any) * (D as any) as any), A = ((y as any) * (f as any) as any) - ((O as any) * (s as any) as any), (A as any) === (0 as any) ? null : (u = (((s as any) * (E as any) as any) - ((f as any) * (c as any) as any) as any) / (A as any), T = (((O as any) * (c as any) as any) - ((y as any) * (E as any) as any) as any) / (A as any), new (o as any)(u, T));
        }, (e as any).angleOfVector = function (this: any, t: any, i: any, l: any, g: any): any {
          var n: any = void 0;
          return (t as any) !== (l as any) ? (n = ((Math as any).atan as any)(((g as any) - (i as any) as any) / ((l as any) - (t as any) as any)), (l as any) < (t as any) ? n += (Math as any).PI : (g as any) < (i as any) && (n += (this as any).TWO_PI)) : (g as any) < (i as any) ? n = (this as any).ONE_AND_HALF_PI : n = (this as any).HALF_PI, n;
        }, (e as any).doIntersect = function (this: any, t: any, i: any, l: any, g: any): any {
          var n: any = (t as any).x,
            d: any = (t as any).y,
            r: any = (i as any).x,
            h: any = (i as any).y,
            a: any = (l as any).x,
            p: any = (l as any).y,
            v: any = (g as any).x,
            D: any = (g as any).y,
            u: any = (((r as any) - (n as any) as any) * ((D as any) - (p as any) as any) as any) - (((v as any) - (a as any) as any) * ((h as any) - (d as any) as any) as any);
          if ((u as any) === (0 as any)) return !1;
          var T: any = ((((D as any) - (p as any) as any) * ((v as any) - (n as any) as any) as any) + (((a as any) - (v as any) as any) * ((D as any) - (d as any) as any) as any) as any) / (u as any),
            y: any = ((((d as any) - (h as any) as any) * ((v as any) - (n as any) as any) as any) + (((r as any) - (n as any) as any) * ((D as any) - (d as any) as any) as any) as any) / (u as any);
          return (0 as any) < (T as any) && (T as any) < (1 as any) && (0 as any) < (y as any) && (y as any) < (1 as any);
        }, (e as any).HALF_PI = (.5 as any) * ((Math as any).PI as any), (e as any).ONE_AND_HALF_PI = (1.5 as any) * ((Math as any).PI as any), (e as any).TWO_PI = (2 as any) * ((Math as any).PI as any), (e as any).THREE_PI = (3 as any) * ((Math as any).PI as any), (N as any).exports = e;
      }, function (this: any, N: any, I: any, L: any): any {
        function o(this: any): any {}
        (o as any).sign = function (this: any, e: any): any {
          return (e as any) > (0 as any) ? 1 : (e as any) < (0 as any) ? -1 : 0;
        }, (o as any).floor = function (this: any, e: any): any {
          return (e as any) < (0 as any) ? ((Math as any).ceil as any)(e) : ((Math as any).floor as any)(e);
        }, (o as any).ceil = function (this: any, e: any): any {
          return (e as any) < (0 as any) ? ((Math as any).floor as any)(e) : ((Math as any).ceil as any)(e);
        }, (N as any).exports = o;
      }, function (this: any, N: any, I: any, L: any): any {
        function o(this: any): any {}
        (o as any).MAX_VALUE = 2147483647, (o as any).MIN_VALUE = -2147483648, (N as any).exports = o;
      }, function (this: any, N: any, I: any, L: any): any {
        var o: any = (function (this: any): any {
          function n(this: any, d: any, r: any): any {
            for (var h: any = 0; (h as any) < ((r as any).length as any); h++) {
              var a: any = (r as any)[h];
              (a as any).enumerable = (a as any).enumerable || !1, (a as any).configurable = !0, "value" in a && ((a as any).writable = !0), ((Object as any).defineProperty as any)(d, (a as any).key, a);
            }
          }
          return function (this: any, d: any, r: any, h: any): any {
            return r && (n as any)((d as any).prototype, r), h && (n as any)(d, h), d;
          };
        } as any)();
        function e(this: any, n: any, d: any): any {
          if (!(n instanceof d)) throw new (TypeError as any)("Cannot call a class as a function");
        }
        var t: any = function (this: any, d: any): any {
            return {
              value: d,
              next: null,
              prev: null
            };
          },
          i: any = function (this: any, d: any, r: any, h: any, a: any): any {
            return (d as any) !== (null as any) ? (d as any).next = r : (a as any).head = r, (h as any) !== (null as any) ? (h as any).prev = r : (a as any).tail = r, (r as any).prev = d, (r as any).next = h, (a as any).length++, r;
          },
          l: any = function (this: any, d: any, r: any): any {
            var h: any = (d as any).prev,
              a: any = (d as any).next;
            return (h as any) !== (null as any) ? (h as any).next = a : (r as any).head = a, (a as any) !== (null as any) ? (a as any).prev = h : (r as any).tail = h, (d as any).prev = (d as any).next = null, (r as any).length--, d;
          },
          g: any = (function (this: any): any {
            function n(this: any, d: any): any {
              var r: any = this;
              (e as any)(this, n), (this as any).length = 0, (this as any).head = null, (this as any).tail = null, d?.forEach(function (this: any, h: any): any {
                return ((r as any).push as any)(h);
              });
            }
            return (o as any)(n, [{
              key: "size",
              value: function (this: any): any {
                return (this as any).length;
              }
            }, {
              key: "insertBefore",
              value: function (this: any, r: any, h: any): any {
                return (i as any)((h as any).prev, (t as any)(r), h, this);
              }
            }, {
              key: "insertAfter",
              value: function (this: any, r: any, h: any): any {
                return (i as any)(h, (t as any)(r), (h as any).next, this);
              }
            }, {
              key: "insertNodeBefore",
              value: function (this: any, r: any, h: any): any {
                return (i as any)((h as any).prev, r, h, this);
              }
            }, {
              key: "insertNodeAfter",
              value: function (this: any, r: any, h: any): any {
                return (i as any)(h, r, (h as any).next, this);
              }
            }, {
              key: "push",
              value: function (this: any, r: any): any {
                return (i as any)((this as any).tail, (t as any)(r), null, this);
              }
            }, {
              key: "unshift",
              value: function (this: any, r: any): any {
                return (i as any)(null, (t as any)(r), (this as any).head, this);
              }
            }, {
              key: "remove",
              value: function (this: any, r: any): any {
                return (l as any)(r, this);
              }
            }, {
              key: "pop",
              value: function (this: any): any {
                return ((l as any)((this as any).tail, this) as any).value;
              }
            }, {
              key: "popNode",
              value: function (this: any): any {
                return (l as any)((this as any).tail, this);
              }
            }, {
              key: "shift",
              value: function (this: any): any {
                return ((l as any)((this as any).head, this) as any).value;
              }
            }, {
              key: "shiftNode",
              value: function (this: any): any {
                return (l as any)((this as any).head, this);
              }
            }, {
              key: "get_object_at",
              value: function (this: any, r: any): any {
                if ((r as any) <= (((this as any).length as any)() as any)) {
                  for (var h: any = 1, a: any = (this as any).head; (h as any) < (r as any);) a = (a as any).next, h++;
                  return (a as any).value;
                }
              }
            }, {
              key: "set_object_at",
              value: function (this: any, r: any, h: any): any {
                if ((r as any) <= (((this as any).length as any)() as any)) {
                  for (var a: any = 1, p: any = (this as any).head; (a as any) < (r as any);) p = (p as any).next, a++;
                  (p as any).value = h;
                }
              }
            }]), n;
          } as any)();
        (N as any).exports = g;
      }, function (this: any, N: any, I: any, L: any): any {
        function o(this: any, e: any, t: any, i: any): any {
          (this as any).x = null, (this as any).y = null, (e as any) == (null as any) && (t as any) == (null as any) && (i as any) == (null as any) ? ((this as any).x = 0, (this as any).y = 0) : (typeof e as any) == ("number" as any) && (typeof t as any) == ("number" as any) && (i as any) == (null as any) ? ((this as any).x = e, (this as any).y = t) : (((e as any).constructor as any).name as any) == ("Point" as any) && (t as any) == (null as any) && (i as any) == (null as any) && (i = e, (this as any).x = (i as any).x, (this as any).y = (i as any).y);
        }
        ((o as any).prototype as any).getX = function (this: any): any {
          return (this as any).x;
        }, ((o as any).prototype as any).getY = function (this: any): any {
          return (this as any).y;
        }, ((o as any).prototype as any).getLocation = function (this: any): any {
          return new (o as any)((this as any).x, (this as any).y);
        }, ((o as any).prototype as any).setLocation = function (this: any, e: any, t: any, i: any): any {
          (((e as any).constructor as any).name as any) == ("Point" as any) && (t as any) == (null as any) && (i as any) == (null as any) ? (i = e, ((this as any).setLocation as any)((i as any).x, (i as any).y)) : (typeof e as any) == ("number" as any) && (typeof t as any) == ("number" as any) && (i as any) == (null as any) && (((parseInt as any)(e) as any) == (e as any) && ((parseInt as any)(t) as any) == (t as any) ? ((this as any).move as any)(e, t) : ((this as any).x = ((Math as any).floor as any)((e as any) + (.5 as any)), (this as any).y = ((Math as any).floor as any)((t as any) + (.5 as any))));
        }, ((o as any).prototype as any).move = function (this: any, e: any, t: any): any {
          (this as any).x = e, (this as any).y = t;
        }, ((o as any).prototype as any).translate = function (this: any, e: any, t: any): any {
          (this as any).x += e, (this as any).y += t;
        }, ((o as any).prototype as any).equals = function (this: any, e: any): any {
          if ((((e as any).constructor as any).name as any) == ("Point" as any)) {
            var t: any = e;
            return ((this as any).x as any) == ((t as any).x as any) && ((this as any).y as any) == ((t as any).y as any);
          }
          return (this as any) == (e as any);
        }, ((o as any).prototype as any).toString = function (this: any): any {
          return (((((((new (o as any)() as any).constructor as any).name as any) + ("[x=" as any) as any) + ((this as any).x as any) as any) + (",y=" as any) as any) + ((this as any).y as any) as any) + ("]" as any);
        }, (N as any).exports = o;
      }, function (this: any, N: any, I: any, L: any): any {
        function o(this: any, e: any, t: any, i: any, l: any): any {
          (this as any).x = 0, (this as any).y = 0, (this as any).width = 0, (this as any).height = 0, (e as any) != (null as any) && (t as any) != (null as any) && (i as any) != (null as any) && (l as any) != (null as any) && ((this as any).x = e, (this as any).y = t, (this as any).width = i, (this as any).height = l);
        }
        ((o as any).prototype as any).getX = function (this: any): any {
          return (this as any).x;
        }, ((o as any).prototype as any).setX = function (this: any, e: any): any {
          (this as any).x = e;
        }, ((o as any).prototype as any).getY = function (this: any): any {
          return (this as any).y;
        }, ((o as any).prototype as any).setY = function (this: any, e: any): any {
          (this as any).y = e;
        }, ((o as any).prototype as any).getWidth = function (this: any): any {
          return (this as any).width;
        }, ((o as any).prototype as any).setWidth = function (this: any, e: any): any {
          (this as any).width = e;
        }, ((o as any).prototype as any).getHeight = function (this: any): any {
          return (this as any).height;
        }, ((o as any).prototype as any).setHeight = function (this: any, e: any): any {
          (this as any).height = e;
        }, ((o as any).prototype as any).getRight = function (this: any): any {
          return ((this as any).x as any) + ((this as any).width as any);
        }, ((o as any).prototype as any).getBottom = function (this: any): any {
          return ((this as any).y as any) + ((this as any).height as any);
        }, ((o as any).prototype as any).intersects = function (this: any, e: any): any {
          return !((((this as any).getRight as any)() as any) < ((e as any).x as any) || (((this as any).getBottom as any)() as any) < ((e as any).y as any) || (((e as any).getRight as any)() as any) < ((this as any).x as any) || (((e as any).getBottom as any)() as any) < ((this as any).y as any));
        }, ((o as any).prototype as any).getCenterX = function (this: any): any {
          return ((this as any).x as any) + (((this as any).width as any) / (2 as any) as any);
        }, ((o as any).prototype as any).getMinX = function (this: any): any {
          return ((this as any).getX as any)();
        }, ((o as any).prototype as any).getMaxX = function (this: any): any {
          return (((this as any).getX as any)() as any) + ((this as any).width as any);
        }, ((o as any).prototype as any).getCenterY = function (this: any): any {
          return ((this as any).y as any) + (((this as any).height as any) / (2 as any) as any);
        }, ((o as any).prototype as any).getMinY = function (this: any): any {
          return ((this as any).getY as any)();
        }, ((o as any).prototype as any).getMaxY = function (this: any): any {
          return (((this as any).getY as any)() as any) + ((this as any).height as any);
        }, ((o as any).prototype as any).getWidthHalf = function (this: any): any {
          return ((this as any).width as any) / (2 as any);
        }, ((o as any).prototype as any).getHeightHalf = function (this: any): any {
          return ((this as any).height as any) / (2 as any);
        }, (N as any).exports = o;
      }, function (this: any, N: any, I: any, L: any): any {
        var o: any = (typeof Symbol as any) == ("function" as any) && (typeof (Symbol as any).iterator as any) == ("symbol" as any) ? function (this: any, t: any): any {
          return typeof t;
        } : function (this: any, t: any): any {
          return t && (typeof Symbol as any) == ("function" as any) && ((t as any).constructor as any) === (Symbol as any) && (t as any) !== ((Symbol as any).prototype as any) ? "symbol" : typeof t;
        };
        function e(this: any): any {}
        (e as any).lastID = 0, (e as any).createID = function (this: any, t: any): any {
          return ((e as any).isPrimitive as any)(t) ? t : (((t as any).uniqueID as any) != (null as any) || ((t as any).uniqueID = ((e as any).getString as any)(), (e as any).lastID++), (t as any).uniqueID);
        }, (e as any).getString = function (this: any, t: any): any {
          return (t as any) == (null as any) && (t = (e as any).lastID), ("Object#" as any) + (t as any);
        }, (e as any).isPrimitive = function (this: any, t: any): any {
          var i: any = (typeof t as any) > ("u" as any) ? "undefined" : (o as any)(t);
          return (t as any) == (null as any) || (i as any) != ("object" as any) && (i as any) != ("function" as any);
        }, (N as any).exports = e;
      }, function (this: any, N: any, I: any, L: any): any {
        function o(this: any, a: any): any {
          if (((Array as any).isArray as any)(a)) {
            for (var p: any = 0, v: any = (Array as any)((a as any).length); (p as any) < ((a as any).length as any); p++) (v as any)[p] = (a as any)[p];
            return v;
          } else return ((Array as any).from as any)(a);
        }
        var e: any = (L as any)(0),
          t: any = (L as any)(6),
          i: any = (L as any)(3),
          l: any = (L as any)(1),
          g: any = (L as any)(5),
          n: any = (L as any)(4),
          d: any = (L as any)(17),
          r: any = (L as any)(27);
        function h(this: any, a: any): any {
          ((r as any).call as any)(this), (this as any).layoutQuality = (e as any).QUALITY, (this as any).createBendsAsNeeded = (e as any).DEFAULT_CREATE_BENDS_AS_NEEDED, (this as any).incremental = (e as any).DEFAULT_INCREMENTAL, (this as any).animationOnLayout = (e as any).DEFAULT_ANIMATION_ON_LAYOUT, (this as any).animationDuringLayout = (e as any).DEFAULT_ANIMATION_DURING_LAYOUT, (this as any).animationPeriod = (e as any).DEFAULT_ANIMATION_PERIOD, (this as any).uniformLeafNodeSizes = (e as any).DEFAULT_UNIFORM_LEAF_NODE_SIZES, (this as any).edgeToDummyNodes = new (Map as any)(), (this as any).graphManager = new (t as any)(this), (this as any).isLayoutFinished = !1, (this as any).isSubLayout = !1, (this as any).isRemoteUse = !1, (a as any) != (null as any) && ((this as any).isRemoteUse = a);
        }
        (h as any).RANDOM_SEED = 1, (h as any).prototype = ((Object as any).create as any)((r as any).prototype), ((h as any).prototype as any).getGraphManager = function (this: any): any {
          return (this as any).graphManager;
        }, ((h as any).prototype as any).getAllNodes = function (this: any): any {
          return (((this as any).graphManager as any).getAllNodes as any)();
        }, ((h as any).prototype as any).getAllEdges = function (this: any): any {
          return (((this as any).graphManager as any).getAllEdges as any)();
        }, ((h as any).prototype as any).getAllNodesToApplyGravitation = function (this: any): any {
          return (((this as any).graphManager as any).getAllNodesToApplyGravitation as any)();
        }, ((h as any).prototype as any).newGraphManager = function (this: any): any {
          var a: any = new (t as any)(this);
          return (this as any).graphManager = a, a;
        }, ((h as any).prototype as any).newGraph = function (this: any, a: any): any {
          return new (g as any)(null, (this as any).graphManager, a);
        }, ((h as any).prototype as any).newNode = function (this: any, a: any): any {
          return new (i as any)((this as any).graphManager, a);
        }, ((h as any).prototype as any).newEdge = function (this: any, a: any): any {
          return new (l as any)(null, null, a);
        }, ((h as any).prototype as any).checkLayoutSuccess = function (this: any): any {
          return ((((this as any).graphManager as any).getRoot as any)() as any) == (null as any) || (((((((this as any).graphManager as any).getRoot as any)() as any).getNodes as any)() as any).length as any) == (0 as any) || (((this as any).graphManager as any).includesInvalidEdge as any)();
        }, ((h as any).prototype as any).runLayout = function (this: any): any {
          (this as any).isLayoutFinished = !1, (this as any).tilingPreLayout && ((this as any).tilingPreLayout as any)(), ((this as any).initParameters as any)();
          var a: any;
          return ((this as any).checkLayoutSuccess as any)() ? a = !1 : a = ((this as any).layout as any)(), ((e as any).ANIMATE as any) === ("during" as any) ? !1 : (a && ((this as any).isSubLayout || ((this as any).doPostLayout as any)()), (this as any).tilingPostLayout && ((this as any).tilingPostLayout as any)(), (this as any).isLayoutFinished = !0, a);
        }, ((h as any).prototype as any).doPostLayout = function (this: any): any {
          (this as any).incremental || ((this as any).transform as any)(), ((this as any).update as any)();
        }, ((h as any).prototype as any).update2 = function (this: any): any {
          if ((this as any).createBendsAsNeeded && (((this as any).createBendpointsFromDummyNodes as any)(), (((this as any).graphManager as any).resetAllEdges as any)()), !(this as any).isRemoteUse) {
            for (var a: any = (((this as any).graphManager as any).getAllEdges as any)(), p: any = 0; (p as any) < ((a as any).length as any); p++) (a as any)[p];
            for (var v: any = (((((this as any).graphManager as any).getRoot as any)() as any).getNodes as any)(), p: any = 0; (p as any) < ((v as any).length as any); p++) (v as any)[p];
            ((this as any).update as any)((((this as any).graphManager as any).getRoot as any)());
          }
        }, ((h as any).prototype as any).update = function (this: any, a: any): any {
          if ((a as any) == (null as any)) ((this as any).update2 as any)();else if (a instanceof i) {
            var p: any = a;
            if ((((p as any).getChild as any)() as any) != (null as any)) for (var v: any = ((((p as any).getChild as any)() as any).getNodes as any)(), D: any = 0; (D as any) < ((v as any).length as any); D++) (update as any)((v as any)[D]);
            if (((p as any).vGraphObject as any) != (null as any)) {
              var u: any = (p as any).vGraphObject;
              ((u as any).update as any)(p);
            }
          } else if (a instanceof l) {
            var T: any = a;
            if (((T as any).vGraphObject as any) != (null as any)) {
              var y: any = (T as any).vGraphObject;
              ((y as any).update as any)(T);
            }
          } else if (a instanceof g) {
            var O: any = a;
            if (((O as any).vGraphObject as any) != (null as any)) {
              var s: any = (O as any).vGraphObject;
              ((s as any).update as any)(O);
            }
          }
        }, ((h as any).prototype as any).initParameters = function (this: any): any {
          (this as any).isSubLayout || ((this as any).layoutQuality = (e as any).QUALITY, (this as any).animationDuringLayout = (e as any).DEFAULT_ANIMATION_DURING_LAYOUT, (this as any).animationPeriod = (e as any).DEFAULT_ANIMATION_PERIOD, (this as any).animationOnLayout = (e as any).DEFAULT_ANIMATION_ON_LAYOUT, (this as any).incremental = (e as any).DEFAULT_INCREMENTAL, (this as any).createBendsAsNeeded = (e as any).DEFAULT_CREATE_BENDS_AS_NEEDED, (this as any).uniformLeafNodeSizes = (e as any).DEFAULT_UNIFORM_LEAF_NODE_SIZES), (this as any).animationDuringLayout && ((this as any).animationOnLayout = !1);
        }, ((h as any).prototype as any).transform = function (this: any, a: any): any {
          if ((a as any) == (null as any)) ((this as any).transform as any)(new (n as any)(0, 0));else {
            var p: any = new (d as any)(),
              v: any = (((((this as any).graphManager as any).getRoot as any)() as any).updateLeftTop as any)();
            if ((v as any) != (null as any)) {
              ((p as any).setWorldOrgX as any)((a as any).x), ((p as any).setWorldOrgY as any)((a as any).y), ((p as any).setDeviceOrgX as any)((v as any).x), ((p as any).setDeviceOrgY as any)((v as any).y);
              for (var D: any = ((this as any).getAllNodes as any)(), u: any, T: any = 0; (T as any) < ((D as any).length as any); T++) u = (D as any)[T], ((u as any).transform as any)(p);
            }
          }
        }, ((h as any).prototype as any).positionNodesRandomly = function (this: any, a: any): any {
          if ((a as any) == (null as any)) ((this as any).positionNodesRandomly as any)(((((this as any).getGraphManager as any)() as any).getRoot as any)()), ((((((this as any).getGraphManager as any)() as any).getRoot as any)() as any).updateBounds as any)(!0);else for (var p: any, v: any, D: any = ((a as any).getNodes as any)(), u: any = 0; (u as any) < ((D as any).length as any); u++) p = (D as any)[u], v = ((p as any).getChild as any)(), (v as any) == (null as any) || ((((v as any).getNodes as any)() as any).length as any) == (0 as any) ? ((p as any).scatter as any)() : (((this as any).positionNodesRandomly as any)(v), ((p as any).updateBounds as any)());
        }, ((h as any).prototype as any).getFlatForest = function (this: any): any {
          for (var a: any = [], p: any = !0, v: any = (((((this as any).graphManager as any).getRoot as any)() as any).getNodes as any)(), D: any = !0, u: any = 0; (u as any) < ((v as any).length as any); u++) ((((v as any)[u] as any).getChild as any)() as any) != (null as any) && (D = !1);
          if (!D) return a;
          var T: any = new (Set as any)(),
            y: any = [],
            O: any = new (Map as any)(),
            s: any = [];
          for (s = ((s as any).concat as any)(v); ((s as any).length as any) > (0 as any) && p;) {
            for (((y as any).push as any)((s as any)[0]); ((y as any).length as any) > (0 as any) && p;) {
              var f: any = (y as any)[0];
              ((y as any).splice as any)(0, 1), ((T as any).add as any)(f);
              for (var c: any = ((f as any).getEdges as any)(), u: any = 0; (u as any) < ((c as any).length as any); u++) {
                var E: any = (((c as any)[u] as any).getOtherEnd as any)(f);
                if ((((O as any).get as any)(f) as any) != (E as any)) if (!((T as any).has as any)(E)) ((y as any).push as any)(E), ((O as any).set as any)(E, f);else {
                  p = !1;
                  break;
                }
              }
            }
            if (!p) a = [];else {
              var A: any = (([] as any).concat as any)((o as any)(T));
              ((a as any).push as any)(A);
              for (var u: any = 0; (u as any) < ((A as any).length as any); u++) {
                var m: any = (A as any)[u],
                  C: any = ((s as any).indexOf as any)(m);
                (C as any) > (-1 as any) && ((s as any).splice as any)(C, 1);
              }
              T = new (Set as any)(), O = new (Map as any)();
            }
          }
          return a;
        }, ((h as any).prototype as any).createDummyNodesForBendpoints = function (this: any, a: any): any {
          for (var p: any = [], v: any = (a as any).source, D: any = (((this as any).graphManager as any).calcLowestCommonAncestor as any)((a as any).source, (a as any).target), u: any = 0; (u as any) < (((a as any).bendpoints as any).length as any); u++) {
            var T: any = ((this as any).newNode as any)(null);
            ((T as any).setRect as any)(new (Point as any)(0, 0), new (Dimension as any)(1, 1)), ((D as any).add as any)(T);
            var y: any = ((this as any).newEdge as any)(null);
            (((this as any).graphManager as any).add as any)(y, v, T), ((p as any).add as any)(T), v = T;
          }
          var y: any = ((this as any).newEdge as any)(null);
          return (((this as any).graphManager as any).add as any)(y, v, (a as any).target), (((this as any).edgeToDummyNodes as any).set as any)(a, p), ((a as any).isInterGraph as any)() ? (((this as any).graphManager as any).remove as any)(a) : ((D as any).remove as any)(a), p;
        }, ((h as any).prototype as any).createBendpointsFromDummyNodes = function (this: any): any {
          var a: any = [];
          a = ((a as any).concat as any)((((this as any).graphManager as any).getAllEdges as any)()), a = (((([] as any).concat as any)((o as any)((((this as any).edgeToDummyNodes as any).keys as any)())) as any).concat as any)(a);
          for (var p: any = 0; (p as any) < ((a as any).length as any); p++) {
            var v: any = (a as any)[p];
            if ((((v as any).bendpoints as any).length as any) > (0 as any)) {
              for (var D: any = (((this as any).edgeToDummyNodes as any).get as any)(v), u: any = 0; (u as any) < ((D as any).length as any); u++) {
                var T: any = (D as any)[u],
                  y: any = new (n as any)(((T as any).getCenterX as any)(), ((T as any).getCenterY as any)()),
                  O: any = (((v as any).bendpoints as any).get as any)(u);
                (O as any).x = (y as any).x, (O as any).y = (y as any).y, ((((T as any).getOwner as any)() as any).remove as any)(T);
              }
              (((this as any).graphManager as any).add as any)(v, (v as any).source, (v as any).target);
            }
          }
        }, (h as any).transform = function (this: any, a: any, p: any, v: any, D: any): any {
          if ((v as any) != (null as any) && (D as any) != (null as any)) {
            var u: any = p;
            if ((a as any) <= (50 as any)) {
              var T: any = (p as any) / (v as any);
              u -= (((p as any) - (T as any) as any) / (50 as any) as any) * ((50 as any) - (a as any) as any);
            } else {
              var y: any = (p as any) * (D as any);
              u += (((y as any) - (p as any) as any) / (50 as any) as any) * ((a as any) - (50 as any) as any);
            }
            return u;
          } else {
            var O: any, s: any;
            return (a as any) <= (50 as any) ? (O = ((9 as any) * (p as any) as any) / (500 as any), s = (p as any) / (10 as any)) : (O = ((9 as any) * (p as any) as any) / (50 as any), s = (-8 as any) * (p as any)), ((O as any) * (a as any) as any) + (s as any);
          }
        }, (h as any).findCenterOfTree = function (this: any, a: any): any {
          var p: any = [];
          p = ((p as any).concat as any)(a);
          var v: any = [],
            D: any = new (Map as any)(),
            u: any = !1,
            T: any = null;
          (((p as any).length as any) == (1 as any) || ((p as any).length as any) == (2 as any)) && (u = !0, T = (p as any)[0]);
          for (var y: any = 0; (y as any) < ((p as any).length as any); y++) {
            var O: any = (p as any)[y],
              s: any = (((O as any).getNeighborsList as any)() as any).size;
            ((D as any).set as any)(O, (((O as any).getNeighborsList as any)() as any).size), (s as any) == (1 as any) && ((v as any).push as any)(O);
          }
          var f: any = [];
          for (f = ((f as any).concat as any)(v); !u;) {
            var c: any = [];
            c = ((c as any).concat as any)(f), f = [];
            for (var y: any = 0; (y as any) < ((p as any).length as any); y++) {
              var O: any = (p as any)[y],
                E: any = ((p as any).indexOf as any)(O);
              (E as any) >= (0 as any) && ((p as any).splice as any)(E, 1);
              var A: any = ((O as any).getNeighborsList as any)();
              ((A as any).forEach as any)(function (this: any, R: any): any {
                if ((((v as any).indexOf as any)(R) as any) < (0 as any)) {
                  var M: any = ((D as any).get as any)(R),
                    S: any = (M as any) - (1 as any);
                  (S as any) == (1 as any) && ((f as any).push as any)(R), ((D as any).set as any)(R, S);
                }
              });
            }
            v = ((v as any).concat as any)(f), (((p as any).length as any) == (1 as any) || ((p as any).length as any) == (2 as any)) && (u = !0, T = (p as any)[0]);
          }
          return T;
        }, ((h as any).prototype as any).setGraphManager = function (this: any, a: any): any {
          (this as any).graphManager = a;
        }, (N as any).exports = h;
      }, function (this: any, N: any, I: any, L: any): any {
        function o(this: any): any {}
        (o as any).seed = 1, (o as any).x = 0, (o as any).nextDouble = function (this: any): any {
          return (o as any).x = (((Math as any).sin as any)((o as any).seed++) as any) * (1e4 as any), ((o as any).x as any) - (((Math as any).floor as any)((o as any).x) as any);
        }, (N as any).exports = o;
      }, function (this: any, N: any, I: any, L: any): any {
        var o: any = (L as any)(4);
        function e(this: any, t: any, i: any): any {
          (this as any).lworldOrgX = 0, (this as any).lworldOrgY = 0, (this as any).ldeviceOrgX = 0, (this as any).ldeviceOrgY = 0, (this as any).lworldExtX = 1, (this as any).lworldExtY = 1, (this as any).ldeviceExtX = 1, (this as any).ldeviceExtY = 1;
        }
        ((e as any).prototype as any).getWorldOrgX = function (this: any): any {
          return (this as any).lworldOrgX;
        }, ((e as any).prototype as any).setWorldOrgX = function (this: any, t: any): any {
          (this as any).lworldOrgX = t;
        }, ((e as any).prototype as any).getWorldOrgY = function (this: any): any {
          return (this as any).lworldOrgY;
        }, ((e as any).prototype as any).setWorldOrgY = function (this: any, t: any): any {
          (this as any).lworldOrgY = t;
        }, ((e as any).prototype as any).getWorldExtX = function (this: any): any {
          return (this as any).lworldExtX;
        }, ((e as any).prototype as any).setWorldExtX = function (this: any, t: any): any {
          (this as any).lworldExtX = t;
        }, ((e as any).prototype as any).getWorldExtY = function (this: any): any {
          return (this as any).lworldExtY;
        }, ((e as any).prototype as any).setWorldExtY = function (this: any, t: any): any {
          (this as any).lworldExtY = t;
        }, ((e as any).prototype as any).getDeviceOrgX = function (this: any): any {
          return (this as any).ldeviceOrgX;
        }, ((e as any).prototype as any).setDeviceOrgX = function (this: any, t: any): any {
          (this as any).ldeviceOrgX = t;
        }, ((e as any).prototype as any).getDeviceOrgY = function (this: any): any {
          return (this as any).ldeviceOrgY;
        }, ((e as any).prototype as any).setDeviceOrgY = function (this: any, t: any): any {
          (this as any).ldeviceOrgY = t;
        }, ((e as any).prototype as any).getDeviceExtX = function (this: any): any {
          return (this as any).ldeviceExtX;
        }, ((e as any).prototype as any).setDeviceExtX = function (this: any, t: any): any {
          (this as any).ldeviceExtX = t;
        }, ((e as any).prototype as any).getDeviceExtY = function (this: any): any {
          return (this as any).ldeviceExtY;
        }, ((e as any).prototype as any).setDeviceExtY = function (this: any, t: any): any {
          (this as any).ldeviceExtY = t;
        }, ((e as any).prototype as any).transformX = function (this: any, t: any): any {
          var i: any = 0,
            l: any = (this as any).lworldExtX;
          return (l as any) != (0 as any) && (i = ((this as any).ldeviceOrgX as any) + ((((t as any) - ((this as any).lworldOrgX as any) as any) * ((this as any).ldeviceExtX as any) as any) / (l as any) as any)), i;
        }, ((e as any).prototype as any).transformY = function (this: any, t: any): any {
          var i: any = 0,
            l: any = (this as any).lworldExtY;
          return (l as any) != (0 as any) && (i = ((this as any).ldeviceOrgY as any) + ((((t as any) - ((this as any).lworldOrgY as any) as any) * ((this as any).ldeviceExtY as any) as any) / (l as any) as any)), i;
        }, ((e as any).prototype as any).inverseTransformX = function (this: any, t: any): any {
          var i: any = 0,
            l: any = (this as any).ldeviceExtX;
          return (l as any) != (0 as any) && (i = ((this as any).lworldOrgX as any) + ((((t as any) - ((this as any).ldeviceOrgX as any) as any) * ((this as any).lworldExtX as any) as any) / (l as any) as any)), i;
        }, ((e as any).prototype as any).inverseTransformY = function (this: any, t: any): any {
          var i: any = 0,
            l: any = (this as any).ldeviceExtY;
          return (l as any) != (0 as any) && (i = ((this as any).lworldOrgY as any) + ((((t as any) - ((this as any).ldeviceOrgY as any) as any) * ((this as any).lworldExtY as any) as any) / (l as any) as any)), i;
        }, ((e as any).prototype as any).inverseTransformPoint = function (this: any, t: any): any {
          var i: any = new (o as any)(((this as any).inverseTransformX as any)((t as any).x), ((this as any).inverseTransformY as any)((t as any).y));
          return i;
        }, (N as any).exports = e;
      }, function (this: any, N: any, I: any, L: any): any {
        var d: any;
        function o(this: any, r: any): any {
          if (((Array as any).isArray as any)(r)) {
            for (var h: any = 0, a: any = (Array as any)((r as any).length); (h as any) < ((r as any).length as any); h++) (a as any)[h] = (r as any)[h];
            return a;
          } else return ((Array as any).from as any)(r);
        }
        var e: any = (L as any)(15),
          t: any = (L as any)(7),
          i: any = (L as any)(0),
          l: any = (L as any)(8),
          g: any = (L as any)(9);
        function n(this: any): any {
          ((e as any).call as any)(this), (this as any).useSmartIdealEdgeLengthCalculation = (t as any).DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION, (this as any).idealEdgeLength = (t as any).DEFAULT_EDGE_LENGTH, (this as any).springConstant = (t as any).DEFAULT_SPRING_STRENGTH, (this as any).repulsionConstant = (t as any).DEFAULT_REPULSION_STRENGTH, (this as any).gravityConstant = (t as any).DEFAULT_GRAVITY_STRENGTH, (this as any).compoundGravityConstant = (t as any).DEFAULT_COMPOUND_GRAVITY_STRENGTH, (this as any).gravityRangeFactor = (t as any).DEFAULT_GRAVITY_RANGE_FACTOR, (this as any).compoundGravityRangeFactor = (t as any).DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR, (this as any).displacementThresholdPerNode = ((3 as any) * ((t as any).DEFAULT_EDGE_LENGTH as any) as any) / (100 as any), (this as any).coolingFactor = (t as any).DEFAULT_COOLING_FACTOR_INCREMENTAL, (this as any).initialCoolingFactor = (t as any).DEFAULT_COOLING_FACTOR_INCREMENTAL, (this as any).totalDisplacement = 0, (this as any).oldTotalDisplacement = 0, (this as any).maxIterations = (t as any).MAX_ITERATIONS;
        }
        (n as any).prototype = ((Object as any).create as any)((e as any).prototype);
        for (d in e) (n as any)[d] = (e as any)[d];
        ((n as any).prototype as any).initParameters = function (this: any): any {
          ((((e as any).prototype as any).initParameters as any).call as any)(this, arguments), (this as any).totalIterations = 0, (this as any).notAnimatedIterations = 0, (this as any).useFRGridVariant = (t as any).DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION, (this as any).grid = [];
        }, ((n as any).prototype as any).calcIdealEdgeLengths = function (this: any): any {
          for (var r: any, h: any, a: any, p: any, v: any, D: any, u: any = ((((this as any).getGraphManager as any)() as any).getAllEdges as any)(), T: any = 0; (T as any) < ((u as any).length as any); T++) r = (u as any)[T], (r as any).idealLength = (this as any).idealEdgeLength, (r as any).isInterGraph && (a = ((r as any).getSource as any)(), p = ((r as any).getTarget as any)(), v = ((((r as any).getSourceInLca as any)() as any).getEstimatedSize as any)(), D = ((((r as any).getTargetInLca as any)() as any).getEstimatedSize as any)(), (this as any).useSmartIdealEdgeLengthCalculation && ((r as any).idealLength += ((v as any) + (D as any) as any) - ((2 as any) * ((i as any).SIMPLE_NODE_SIZE as any) as any)), h = ((((r as any).getLca as any)() as any).getInclusionTreeDepth as any)(), (r as any).idealLength += (((t as any).DEFAULT_EDGE_LENGTH as any) * ((t as any).PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR as any) as any) * (((((a as any).getInclusionTreeDepth as any)() as any) + (((p as any).getInclusionTreeDepth as any)() as any) as any) - ((2 as any) * (h as any) as any) as any));
        }, ((n as any).prototype as any).initSpringEmbedder = function (this: any): any {
          var r: any = (((this as any).getAllNodes as any)() as any).length;
          (this as any).incremental ? ((r as any) > ((t as any).ADAPTATION_LOWER_NODE_LIMIT as any) && ((this as any).coolingFactor = ((Math as any).max as any)(((this as any).coolingFactor as any) * ((t as any).COOLING_ADAPTATION_FACTOR as any), ((this as any).coolingFactor as any) - (((((r as any) - ((t as any).ADAPTATION_LOWER_NODE_LIMIT as any) as any) / (((t as any).ADAPTATION_UPPER_NODE_LIMIT as any) - ((t as any).ADAPTATION_LOWER_NODE_LIMIT as any) as any) as any) * ((this as any).coolingFactor as any) as any) * ((1 as any) - ((t as any).COOLING_ADAPTATION_FACTOR as any) as any) as any))), (this as any).maxNodeDisplacement = (t as any).MAX_NODE_DISPLACEMENT_INCREMENTAL) : ((r as any) > ((t as any).ADAPTATION_LOWER_NODE_LIMIT as any) ? (this as any).coolingFactor = ((Math as any).max as any)((t as any).COOLING_ADAPTATION_FACTOR, (1 as any) - ((((r as any) - ((t as any).ADAPTATION_LOWER_NODE_LIMIT as any) as any) / (((t as any).ADAPTATION_UPPER_NODE_LIMIT as any) - ((t as any).ADAPTATION_LOWER_NODE_LIMIT as any) as any) as any) * ((1 as any) - ((t as any).COOLING_ADAPTATION_FACTOR as any) as any) as any)) : (this as any).coolingFactor = 1, (this as any).initialCoolingFactor = (this as any).coolingFactor, (this as any).maxNodeDisplacement = (t as any).MAX_NODE_DISPLACEMENT), (this as any).maxIterations = ((Math as any).max as any)(((((this as any).getAllNodes as any)() as any).length as any) * (5 as any), (this as any).maxIterations), (this as any).totalDisplacementThreshold = ((this as any).displacementThresholdPerNode as any) * ((((this as any).getAllNodes as any)() as any).length as any), (this as any).repulsionRange = ((this as any).calcRepulsionRange as any)();
        }, ((n as any).prototype as any).calcSpringForces = function (this: any): any {
          for (var r: any = ((this as any).getAllEdges as any)(), h: any, a: any = 0; (a as any) < ((r as any).length as any); a++) h = (r as any)[a], ((this as any).calcSpringForce as any)(h, (h as any).idealLength);
        }, ((n as any).prototype as any).calcRepulsionForces = function (this: any): any {
          var r: any = ((arguments as any).length as any) > (0 as any) && ((arguments as any)[0] as any) !== (void 0 as any) ? (arguments as any)[0] : !0,
            h: any = ((arguments as any).length as any) > (1 as any) && ((arguments as any)[1] as any) !== (void 0 as any) ? (arguments as any)[1] : !1,
            a: any,
            p: any,
            v: any,
            D: any,
            u: any = ((this as any).getAllNodes as any)(),
            T: any;
          if ((this as any).useFRGridVariant) for ((((this as any).totalIterations as any) % ((t as any).GRID_CALCULATION_CHECK_PERIOD as any) as any) == (1 as any) && r && ((this as any).updateGrid as any)(), T = new (Set as any)(), a = 0; (a as any) < ((u as any).length as any); a++) v = (u as any)[a], ((this as any).calculateRepulsionForceOfANode as any)(v, T, r, h), ((T as any).add as any)(v);else for (a = 0; (a as any) < ((u as any).length as any); a++) for (v = (u as any)[a], p = (a as any) + (1 as any); (p as any) < ((u as any).length as any); p++) D = (u as any)[p], (((v as any).getOwner as any)() as any) == (((D as any).getOwner as any)() as any) && ((this as any).calcRepulsionForce as any)(v, D);
        }, ((n as any).prototype as any).calcGravitationalForces = function (this: any): any {
          for (var r: any, h: any = ((this as any).getAllNodesToApplyGravitation as any)(), a: any = 0; (a as any) < ((h as any).length as any); a++) r = (h as any)[a], ((this as any).calcGravitationalForce as any)(r);
        }, ((n as any).prototype as any).moveNodes = function (this: any): any {
          for (var r: any = ((this as any).getAllNodes as any)(), h: any, a: any = 0; (a as any) < ((r as any).length as any); a++) h = (r as any)[a], ((h as any).move as any)();
        }, ((n as any).prototype as any).calcSpringForce = function (this: any, r: any, h: any): any {
          var a: any = ((r as any).getSource as any)(),
            p: any = ((r as any).getTarget as any)(),
            v: any,
            D: any,
            u: any,
            T: any;
          if ((this as any).uniformLeafNodeSizes && (((a as any).getChild as any)() as any) == (null as any) && (((p as any).getChild as any)() as any) == (null as any)) ((r as any).updateLengthSimple as any)();else if (((r as any).updateLength as any)(), (r as any).isOverlapingSourceAndTarget) return;
          v = ((r as any).getLength as any)(), (v as any) != (0 as any) && (D = ((this as any).springConstant as any) * ((v as any) - (h as any) as any), u = (D as any) * (((r as any).lengthX as any) / (v as any) as any), T = (D as any) * (((r as any).lengthY as any) / (v as any) as any), (a as any).springForceX += u, (a as any).springForceY += T, (p as any).springForceX -= u, (p as any).springForceY -= T);
        }, ((n as any).prototype as any).calcRepulsionForce = function (this: any, r: any, h: any): any {
          var a: any = ((r as any).getRect as any)(),
            p: any = ((h as any).getRect as any)(),
            v: any = new (Array as any)(2),
            D: any = new (Array as any)(4),
            u: any,
            T: any,
            y: any,
            O: any,
            s: any,
            f: any,
            c: any;
          if (((a as any).intersects as any)(p)) {
            ((l as any).calcSeparationAmount as any)(a, p, v, ((t as any).DEFAULT_EDGE_LENGTH as any) / (2 as any)), f = (2 as any) * ((v as any)[0] as any), c = (2 as any) * ((v as any)[1] as any);
            var E: any = (((r as any).noOfChildren as any) * ((h as any).noOfChildren as any) as any) / (((r as any).noOfChildren as any) + ((h as any).noOfChildren as any) as any);
            (r as any).repulsionForceX -= (E as any) * (f as any), (r as any).repulsionForceY -= (E as any) * (c as any), (h as any).repulsionForceX += (E as any) * (f as any), (h as any).repulsionForceY += (E as any) * (c as any);
          } else (this as any).uniformLeafNodeSizes && (((r as any).getChild as any)() as any) == (null as any) && (((h as any).getChild as any)() as any) == (null as any) ? (u = (((p as any).getCenterX as any)() as any) - (((a as any).getCenterX as any)() as any), T = (((p as any).getCenterY as any)() as any) - (((a as any).getCenterY as any)() as any)) : (((l as any).getIntersection as any)(a, p, D), u = ((D as any)[2] as any) - ((D as any)[0] as any), T = ((D as any)[3] as any) - ((D as any)[1] as any)), (((Math as any).abs as any)(u) as any) < ((t as any).MIN_REPULSION_DIST as any) && (u = (((g as any).sign as any)(u) as any) * ((t as any).MIN_REPULSION_DIST as any)), (((Math as any).abs as any)(T) as any) < ((t as any).MIN_REPULSION_DIST as any) && (T = (((g as any).sign as any)(T) as any) * ((t as any).MIN_REPULSION_DIST as any)), y = ((u as any) * (u as any) as any) + ((T as any) * (T as any) as any), O = ((Math as any).sqrt as any)(y), s = ((((this as any).repulsionConstant as any) * ((r as any).noOfChildren as any) as any) * ((h as any).noOfChildren as any) as any) / (y as any), f = ((s as any) * (u as any) as any) / (O as any), c = ((s as any) * (T as any) as any) / (O as any), (r as any).repulsionForceX -= f, (r as any).repulsionForceY -= c, (h as any).repulsionForceX += f, (h as any).repulsionForceY += c;
        }, ((n as any).prototype as any).calcGravitationalForce = function (this: any, r: any): any {
          var h: any, a: any, p: any, v: any, D: any, u: any, T: any, y: any;
          h = ((r as any).getOwner as any)(), a = ((((h as any).getRight as any)() as any) + (((h as any).getLeft as any)() as any) as any) / (2 as any), p = ((((h as any).getTop as any)() as any) + (((h as any).getBottom as any)() as any) as any) / (2 as any), v = (((r as any).getCenterX as any)() as any) - (a as any), D = (((r as any).getCenterY as any)() as any) - (p as any), u = (((Math as any).abs as any)(v) as any) + ((((r as any).getWidth as any)() as any) / (2 as any) as any), T = (((Math as any).abs as any)(D) as any) + ((((r as any).getHeight as any)() as any) / (2 as any) as any), (((r as any).getOwner as any)() as any) == ((((this as any).graphManager as any).getRoot as any)() as any) ? (y = (((h as any).getEstimatedSize as any)() as any) * ((this as any).gravityRangeFactor as any), ((u as any) > (y as any) || (T as any) > (y as any)) && ((r as any).gravitationForceX = (-(this as any).gravityConstant as any) * (v as any), (r as any).gravitationForceY = (-(this as any).gravityConstant as any) * (D as any))) : (y = (((h as any).getEstimatedSize as any)() as any) * ((this as any).compoundGravityRangeFactor as any), ((u as any) > (y as any) || (T as any) > (y as any)) && ((r as any).gravitationForceX = ((-(this as any).gravityConstant as any) * (v as any) as any) * ((this as any).compoundGravityConstant as any), (r as any).gravitationForceY = ((-(this as any).gravityConstant as any) * (D as any) as any) * ((this as any).compoundGravityConstant as any)));
        }, ((n as any).prototype as any).isConverged = function (this: any): any {
          var r: any,
            h: any = !1;
          return ((this as any).totalIterations as any) > (((this as any).maxIterations as any) / (3 as any) as any) && (h = (((Math as any).abs as any)(((this as any).totalDisplacement as any) - ((this as any).oldTotalDisplacement as any)) as any) < (2 as any)), r = ((this as any).totalDisplacement as any) < ((this as any).totalDisplacementThreshold as any), (this as any).oldTotalDisplacement = (this as any).totalDisplacement, r || h;
        }, ((n as any).prototype as any).animate = function (this: any): any {
          (this as any).animationDuringLayout && !(this as any).isSubLayout && (((this as any).notAnimatedIterations as any) == ((this as any).animationPeriod as any) ? (((this as any).update as any)(), (this as any).notAnimatedIterations = 0) : (this as any).notAnimatedIterations++);
        }, ((n as any).prototype as any).calcNoOfChildrenForAllNodes = function (this: any): any {
          for (var r: any, h: any = (((this as any).graphManager as any).getAllNodes as any)(), a: any = 0; (a as any) < ((h as any).length as any); a++) r = (h as any)[a], (r as any).noOfChildren = ((r as any).getNoOfChildren as any)();
        }, ((n as any).prototype as any).calcGrid = function (this: any, r: any): any {
          var h: any = 0,
            a: any = 0;
          h = (parseInt as any)(((Math as any).ceil as any)(((((r as any).getRight as any)() as any) - (((r as any).getLeft as any)() as any) as any) / ((this as any).repulsionRange as any))), a = (parseInt as any)(((Math as any).ceil as any)(((((r as any).getBottom as any)() as any) - (((r as any).getTop as any)() as any) as any) / ((this as any).repulsionRange as any)));
          for (var p: any = new (Array as any)(h), v: any = 0; (v as any) < (h as any); v++) (p as any)[v] = new (Array as any)(a);
          for (var v: any = 0; (v as any) < (h as any); v++) for (var D: any = 0; (D as any) < (a as any); D++) ((p as any)[v] as any)[D] = new (Array as any)();
          return p;
        }, ((n as any).prototype as any).addNodeToGrid = function (this: any, r: any, h: any, a: any): any {
          var p: any = 0,
            v: any = 0,
            D: any = 0,
            u: any = 0;
          p = (parseInt as any)(((Math as any).floor as any)((((((r as any).getRect as any)() as any).x as any) - (h as any) as any) / ((this as any).repulsionRange as any))), v = (parseInt as any)(((Math as any).floor as any)(((((((r as any).getRect as any)() as any).width as any) + ((((r as any).getRect as any)() as any).x as any) as any) - (h as any) as any) / ((this as any).repulsionRange as any))), D = (parseInt as any)(((Math as any).floor as any)((((((r as any).getRect as any)() as any).y as any) - (a as any) as any) / ((this as any).repulsionRange as any))), u = (parseInt as any)(((Math as any).floor as any)(((((((r as any).getRect as any)() as any).height as any) + ((((r as any).getRect as any)() as any).y as any) as any) - (a as any) as any) / ((this as any).repulsionRange as any)));
          for (var T: any = p; (T as any) <= (v as any); T++) for (var y: any = D; (y as any) <= (u as any); y++) (((((this as any).grid as any)[T] as any)[y] as any).push as any)(r), ((r as any).setGridCoordinates as any)(p, v, D, u);
        }, ((n as any).prototype as any).updateGrid = function (this: any): any {
          var r: any,
            h: any,
            a: any = ((this as any).getAllNodes as any)();
          for ((this as any).grid = ((this as any).calcGrid as any)((((this as any).graphManager as any).getRoot as any)()), r = 0; (r as any) < ((a as any).length as any); r++) h = (a as any)[r], ((this as any).addNodeToGrid as any)(h, (((((this as any).graphManager as any).getRoot as any)() as any).getLeft as any)(), (((((this as any).graphManager as any).getRoot as any)() as any).getTop as any)());
        }, ((n as any).prototype as any).calculateRepulsionForceOfANode = function (this: any, r: any, h: any, a: any, p: any): any {
          if ((((this as any).totalIterations as any) % ((t as any).GRID_CALCULATION_CHECK_PERIOD as any) as any) == (1 as any) && a || p) {
            var v: any = new (Set as any)();
            (r as any).surrounding = new (Array as any)();
            for (var D: any, u: any = (this as any).grid, T: any = ((r as any).startX as any) - (1 as any); (T as any) < (((r as any).finishX as any) + (2 as any) as any); T++) for (var y: any = ((r as any).startY as any) - (1 as any); (y as any) < (((r as any).finishY as any) + (2 as any) as any); y++) if (!((T as any) < (0 as any) || (y as any) < (0 as any) || (T as any) >= ((u as any).length as any) || (y as any) >= (((u as any)[0] as any).length as any))) {
              for (var O: any = 0; (O as any) < ((((u as any)[T] as any)[y] as any).length as any); O++) if (D = (((u as any)[T] as any)[y] as any)[O], !((((r as any).getOwner as any)() as any) != (((D as any).getOwner as any)() as any) || (r as any) == (D as any)) && !((h as any).has as any)(D) && !((v as any).has as any)(D)) {
                var s: any = (((Math as any).abs as any)((((r as any).getCenterX as any)() as any) - (((D as any).getCenterX as any)() as any)) as any) - (((((r as any).getWidth as any)() as any) / (2 as any) as any) + ((((D as any).getWidth as any)() as any) / (2 as any) as any) as any),
                  f: any = (((Math as any).abs as any)((((r as any).getCenterY as any)() as any) - (((D as any).getCenterY as any)() as any)) as any) - (((((r as any).getHeight as any)() as any) / (2 as any) as any) + ((((D as any).getHeight as any)() as any) / (2 as any) as any) as any);
                (s as any) <= ((this as any).repulsionRange as any) && (f as any) <= ((this as any).repulsionRange as any) && ((v as any).add as any)(D);
              }
            }
            (r as any).surrounding = (([] as any).concat as any)((o as any)(v));
          }
          for (T = 0; (T as any) < (((r as any).surrounding as any).length as any); T++) ((this as any).calcRepulsionForce as any)(r, ((r as any).surrounding as any)[T]);
        }, ((n as any).prototype as any).calcRepulsionRange = function (this: any): any {
          return 0;
        }, (N as any).exports = n;
      }, function (this: any, N: any, I: any, L: any): any {
        var i: any;
        var o: any = (L as any)(1),
          e: any = (L as any)(7);
        function t(this: any, l: any, g: any, n: any): any {
          ((o as any).call as any)(this, l, g, n), (this as any).idealLength = (e as any).DEFAULT_EDGE_LENGTH;
        }
        (t as any).prototype = ((Object as any).create as any)((o as any).prototype);
        for (i in o) (t as any)[i] = (o as any)[i];
        (N as any).exports = t;
      }, function (this: any, N: any, I: any, L: any): any {
        var t: any;
        var o: any = (L as any)(3);
        function e(this: any, i: any, l: any, g: any, n: any): any {
          ((o as any).call as any)(this, i, l, g, n), (this as any).springForceX = 0, (this as any).springForceY = 0, (this as any).repulsionForceX = 0, (this as any).repulsionForceY = 0, (this as any).gravitationForceX = 0, (this as any).gravitationForceY = 0, (this as any).displacementX = 0, (this as any).displacementY = 0, (this as any).startX = 0, (this as any).finishX = 0, (this as any).startY = 0, (this as any).finishY = 0, (this as any).surrounding = [];
        }
        (e as any).prototype = ((Object as any).create as any)((o as any).prototype);
        for (t in o) (e as any)[t] = (o as any)[t];
        ((e as any).prototype as any).setGridCoordinates = function (this: any, i: any, l: any, g: any, n: any): any {
          (this as any).startX = i, (this as any).finishX = l, (this as any).startY = g, (this as any).finishY = n;
        }, (N as any).exports = e;
      }, function (this: any, N: any, I: any, L: any): any {
        function o(this: any, e: any, t: any): any {
          (this as any).width = 0, (this as any).height = 0, (e as any) !== (null as any) && (t as any) !== (null as any) && ((this as any).height = t, (this as any).width = e);
        }
        ((o as any).prototype as any).getWidth = function (this: any): any {
          return (this as any).width;
        }, ((o as any).prototype as any).setWidth = function (this: any, e: any): any {
          (this as any).width = e;
        }, ((o as any).prototype as any).getHeight = function (this: any): any {
          return (this as any).height;
        }, ((o as any).prototype as any).setHeight = function (this: any, e: any): any {
          (this as any).height = e;
        }, (N as any).exports = o;
      }, function (this: any, N: any, I: any, L: any): any {
        var o: any = (L as any)(14);
        function e(this: any): any {
          (this as any).map = {}, (this as any).keys = [];
        }
        ((e as any).prototype as any).put = function (this: any, t: any, i: any): any {
          var l: any = ((o as any).createID as any)(t);
          ((this as any).contains as any)(l) || (((this as any).map as any)[l] = i, (((this as any).keys as any).push as any)(t));
        }, ((e as any).prototype as any).contains = function (this: any, t: any): any {
          return ((o as any).createID as any)(t), (((this as any).map as any)[t] as any) != (null as any);
        }, ((e as any).prototype as any).get = function (this: any, t: any): any {
          var i: any = ((o as any).createID as any)(t);
          return ((this as any).map as any)[i];
        }, ((e as any).prototype as any).keySet = function (this: any): any {
          return (this as any).keys;
        }, (N as any).exports = e;
      }, function (this: any, N: any, I: any, L: any): any {
        var o: any = (L as any)(14);
        function e(this: any): any {
          (this as any).set = {};
        }
        ((e as any).prototype as any).add = function (this: any, t: any): any {
          var i: any = ((o as any).createID as any)(t);
          ((this as any).contains as any)(i) || (((this as any).set as any)[i] = t);
        }, ((e as any).prototype as any).remove = function (this: any, t: any): any {
          delete ((this as any).set as any)[((o as any).createID as any)(t)];
        }, ((e as any).prototype as any).clear = function (this: any): any {
          (this as any).set = {};
        }, ((e as any).prototype as any).contains = function (this: any, t: any): any {
          return (((this as any).set as any)[((o as any).createID as any)(t)] as any) == (t as any);
        }, ((e as any).prototype as any).isEmpty = function (this: any): any {
          return (((this as any).size as any)() as any) === (0 as any);
        }, ((e as any).prototype as any).size = function (this: any): any {
          return (((Object as any).keys as any)((this as any).set) as any).length;
        }, ((e as any).prototype as any).addAllTo = function (this: any, t: any): any {
          for (var i: any = ((Object as any).keys as any)((this as any).set), l: any = (i as any).length, g: any = 0; (g as any) < (l as any); g++) ((t as any).push as any)(((this as any).set as any)[(i as any)[g]]);
        }, ((e as any).prototype as any).size = function (this: any): any {
          return (((Object as any).keys as any)((this as any).set) as any).length;
        }, ((e as any).prototype as any).addAll = function (this: any, t: any): any {
          for (var i: any = (t as any).length, l: any = 0; (l as any) < (i as any); l++) {
            var g: any = (t as any)[l];
            ((this as any).add as any)(g);
          }
        }, (N as any).exports = e;
      }, function (this: any, N: any, I: any, L: any): any {
        var o: any = (function (this: any): any {
          function l(this: any, g: any, n: any): any {
            for (var d: any = 0; (d as any) < ((n as any).length as any); d++) {
              var r: any = (n as any)[d];
              (r as any).enumerable = (r as any).enumerable || !1, (r as any).configurable = !0, "value" in r && ((r as any).writable = !0), ((Object as any).defineProperty as any)(g, (r as any).key, r);
            }
          }
          return function (this: any, g: any, n: any, d: any): any {
            return n && (l as any)((g as any).prototype, n), d && (l as any)(g, d), g;
          };
        } as any)();
        function e(this: any, l: any, g: any): any {
          if (!(l instanceof g)) throw new (TypeError as any)("Cannot call a class as a function");
        }
        var t: any = (L as any)(11),
          i: any = (function (this: any): any {
            function l(this: any, g: any, n: any): any {
              (e as any)(this, l), ((n as any) !== (null as any) || (n as any) !== (void 0 as any)) && ((this as any).compareFunction = (this as any)._defaultCompareFunction);
              var d: any = void 0;
              g instanceof t ? d = ((g as any).size as any)() : d = (g as any).length, ((this as any)._quicksort as any)(g, 0, (d as any) - (1 as any));
            }
            return (o as any)(l, [{
              key: "_quicksort",
              value: function (this: any, n: any, d: any, r: any): any {
                if ((d as any) < (r as any)) {
                  var h: any = ((this as any)._partition as any)(n, d, r);
                  ((this as any)._quicksort as any)(n, d, h), ((this as any)._quicksort as any)(n, (h as any) + (1 as any), r);
                }
              }
            }, {
              key: "_partition",
              value: function (this: any, n: any, d: any, r: any): any {
                for (var h: any = ((this as any)._get as any)(n, d), a: any = d, p: any = r;;) {
                  for (; ((this as any).compareFunction as any)(h, ((this as any)._get as any)(n, p));) p--;
                  for (; ((this as any).compareFunction as any)(((this as any)._get as any)(n, a), h);) a++;
                  if ((a as any) < (p as any)) ((this as any)._swap as any)(n, a, p), a++, p--;else return p;
                }
              }
            }, {
              key: "_get",
              value: function (this: any, n: any, d: any): any {
                return n instanceof t ? ((n as any).get_object_at as any)(d) : (n as any)[d];
              }
            }, {
              key: "_set",
              value: function (this: any, n: any, d: any, r: any): any {
                n instanceof t ? ((n as any).set_object_at as any)(d, r) : (n as any)[d] = r;
              }
            }, {
              key: "_swap",
              value: function (this: any, n: any, d: any, r: any): any {
                var h: any = ((this as any)._get as any)(n, d);
                ((this as any)._set as any)(n, d, ((this as any)._get as any)(n, r)), ((this as any)._set as any)(n, r, h);
              }
            }, {
              key: "_defaultCompareFunction",
              value: function (this: any, n: any, d: any): any {
                return (d as any) > (n as any);
              }
            }]), l;
          } as any)();
        (N as any).exports = i;
      }, function (this: any, N: any, I: any, L: any): any {
        var o: any = (function (this: any): any {
          function i(this: any, l: any, g: any): any {
            for (var n: any = 0; (n as any) < ((g as any).length as any); n++) {
              var d: any = (g as any)[n];
              (d as any).enumerable = (d as any).enumerable || !1, (d as any).configurable = !0, "value" in d && ((d as any).writable = !0), ((Object as any).defineProperty as any)(l, (d as any).key, d);
            }
          }
          return function (this: any, l: any, g: any, n: any): any {
            return g && (i as any)((l as any).prototype, g), n && (i as any)(l, n), l;
          };
        } as any)();
        function e(this: any, i: any, l: any): any {
          if (!(i instanceof l)) throw new (TypeError as any)("Cannot call a class as a function");
        }
        var t: any = (function (this: any): any {
          function i(this: any, l: any, g: any): any {
            var n: any = ((arguments as any).length as any) > (2 as any) && ((arguments as any)[2] as any) !== (void 0 as any) ? (arguments as any)[2] : 1,
              d: any = ((arguments as any).length as any) > (3 as any) && ((arguments as any)[3] as any) !== (void 0 as any) ? (arguments as any)[3] : -1,
              r: any = ((arguments as any).length as any) > (4 as any) && ((arguments as any)[4] as any) !== (void 0 as any) ? (arguments as any)[4] : -1;
            (e as any)(this, i), (this as any).sequence1 = l, (this as any).sequence2 = g, (this as any).match_score = n, (this as any).mismatch_penalty = d, (this as any).gap_penalty = r, (this as any).iMax = ((l as any).length as any) + (1 as any), (this as any).jMax = ((g as any).length as any) + (1 as any), (this as any).grid = new (Array as any)((this as any).iMax);
            for (var h: any = 0; (h as any) < ((this as any).iMax as any); h++) {
              ((this as any).grid as any)[h] = new (Array as any)((this as any).jMax);
              for (var a: any = 0; (a as any) < ((this as any).jMax as any); a++) (((this as any).grid as any)[h] as any)[a] = 0;
            }
            (this as any).tracebackGrid = new (Array as any)((this as any).iMax);
            for (var p: any = 0; (p as any) < ((this as any).iMax as any); p++) {
              ((this as any).tracebackGrid as any)[p] = new (Array as any)((this as any).jMax);
              for (var v: any = 0; (v as any) < ((this as any).jMax as any); v++) (((this as any).tracebackGrid as any)[p] as any)[v] = [null, null, null];
            }
            (this as any).alignments = [], (this as any).score = -1, ((this as any).computeGrids as any)();
          }
          return (o as any)(i, [{
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
              for (var g: any = 1; (g as any) < ((this as any).jMax as any); g++) (((this as any).grid as any)[0] as any)[g] = ((((this as any).grid as any)[0] as any)[(g as any) - (1 as any)] as any) + ((this as any).gap_penalty as any), (((this as any).tracebackGrid as any)[0] as any)[g] = [!1, !1, !0];
              for (var n: any = 1; (n as any) < ((this as any).iMax as any); n++) (((this as any).grid as any)[n] as any)[0] = ((((this as any).grid as any)[(n as any) - (1 as any)] as any)[0] as any) + ((this as any).gap_penalty as any), (((this as any).tracebackGrid as any)[n] as any)[0] = [!1, !0, !1];
              for (var d: any = 1; (d as any) < ((this as any).iMax as any); d++) for (var r: any = 1; (r as any) < ((this as any).jMax as any); r++) {
                var h: any = void 0;
                (((this as any).sequence1 as any)[(d as any) - (1 as any)] as any) === (((this as any).sequence2 as any)[(r as any) - (1 as any)] as any) ? h = ((((this as any).grid as any)[(d as any) - (1 as any)] as any)[(r as any) - (1 as any)] as any) + ((this as any).match_score as any) : h = ((((this as any).grid as any)[(d as any) - (1 as any)] as any)[(r as any) - (1 as any)] as any) + ((this as any).mismatch_penalty as any);
                var a: any = ((((this as any).grid as any)[(d as any) - (1 as any)] as any)[r] as any) + ((this as any).gap_penalty as any),
                  p: any = ((((this as any).grid as any)[d] as any)[(r as any) - (1 as any)] as any) + ((this as any).gap_penalty as any),
                  v: any = [h, a, p],
                  D: any = ((this as any).arrayAllMaxIndexes as any)(v);
                (((this as any).grid as any)[d] as any)[r] = (v as any)[(D as any)[0]], (((this as any).tracebackGrid as any)[d] as any)[r] = [((D as any).includes as any)(0), ((D as any).includes as any)(1), ((D as any).includes as any)(2)];
              }
              (this as any).score = (((this as any).grid as any)[((this as any).iMax as any) - (1 as any)] as any)[((this as any).jMax as any) - (1 as any)];
            }
          }, {
            key: "alignmentTraceback",
            value: function (this: any): any {
              var g: any = [];
              for (((g as any).push as any)({
                pos: [((this as any).sequence1 as any).length, ((this as any).sequence2 as any).length],
                seq1: "",
                seq2: ""
              }); (g as any)[0];) {
                var n: any = (g as any)[0],
                  d: any = (((this as any).tracebackGrid as any)[((n as any).pos as any)[0]] as any)[((n as any).pos as any)[1]];
                (d as any)[0] && ((g as any).push as any)({
                  pos: [(((n as any).pos as any)[0] as any) - (1 as any), (((n as any).pos as any)[1] as any) - (1 as any)],
                  seq1: (((this as any).sequence1 as any)[(((n as any).pos as any)[0] as any) - (1 as any)] as any) + ((n as any).seq1 as any),
                  seq2: (((this as any).sequence2 as any)[(((n as any).pos as any)[1] as any) - (1 as any)] as any) + ((n as any).seq2 as any)
                }), (d as any)[1] && ((g as any).push as any)({
                  pos: [(((n as any).pos as any)[0] as any) - (1 as any), ((n as any).pos as any)[1]],
                  seq1: (((this as any).sequence1 as any)[(((n as any).pos as any)[0] as any) - (1 as any)] as any) + ((n as any).seq1 as any),
                  seq2: ("-" as any) + ((n as any).seq2 as any)
                }), (d as any)[2] && ((g as any).push as any)({
                  pos: [((n as any).pos as any)[0], (((n as any).pos as any)[1] as any) - (1 as any)],
                  seq1: ("-" as any) + ((n as any).seq1 as any),
                  seq2: (((this as any).sequence2 as any)[(((n as any).pos as any)[1] as any) - (1 as any)] as any) + ((n as any).seq2 as any)
                }), (((n as any).pos as any)[0] as any) === (0 as any) && (((n as any).pos as any)[1] as any) === (0 as any) && (((this as any).alignments as any).push as any)({
                  sequence1: (n as any).seq1,
                  sequence2: (n as any).seq2
                }), ((g as any).shift as any)();
              }
              return (this as any).alignments;
            }
          }, {
            key: "getAllIndexes",
            value: function (this: any, g: any, n: any): any {
              for (var d: any = [], r: any = -1; ((r = ((g as any).indexOf as any)(n, (r as any) + (1 as any))) as any) !== (-1 as any);) ((d as any).push as any)(r);
              return d;
            }
          }, {
            key: "arrayAllMaxIndexes",
            value: function (this: any, g: any): any {
              return ((this as any).getAllIndexes as any)(g, (((Math as any).max as any).apply as any)(null, g));
            }
          }]), i;
        } as any)();
        (N as any).exports = t;
      }, function (this: any, N: any, I: any, L: any): any {
        var o: any = function (this: any): any {};
        (o as any).FDLayout = (L as any)(18), (o as any).FDLayoutConstants = (L as any)(7), (o as any).FDLayoutEdge = (L as any)(19), (o as any).FDLayoutNode = (L as any)(20), (o as any).DimensionD = (L as any)(21), (o as any).HashMap = (L as any)(22), (o as any).HashSet = (L as any)(23), (o as any).IGeometry = (L as any)(8), (o as any).IMath = (L as any)(9), (o as any).Integer = (L as any)(10), (o as any).Point = (L as any)(12), (o as any).PointD = (L as any)(4), (o as any).RandomSeed = (L as any)(16), (o as any).RectangleD = (L as any)(13), (o as any).Transform = (L as any)(17), (o as any).UniqueIDGeneretor = (L as any)(14), (o as any).Quicksort = (L as any)(24), (o as any).LinkedList = (L as any)(11), (o as any).LGraphObject = (L as any)(2), (o as any).LGraph = (L as any)(5), (o as any).LEdge = (L as any)(1), (o as any).LGraphManager = (L as any)(6), (o as any).LNode = (L as any)(3), (o as any).Layout = (L as any)(15), (o as any).LayoutConstants = (L as any)(0), (o as any).NeedlemanWunsch = (L as any)(25), (N as any).exports = o;
      }, function (this: any, N: any, I: any, L: any): any {
        function o(this: any): any {
          (this as any).listeners = [];
        }
        var e: any = (o as any).prototype;
        (e as any).addListener = function (this: any, t: any, i: any): any {
          (((this as any).listeners as any).push as any)({
            event: t,
            callback: i
          });
        }, (e as any).removeListener = function (this: any, t: any, i: any): any {
          for (var l: any = ((this as any).listeners as any).length; (l as any) >= (0 as any); l--) {
            var g: any = ((this as any).listeners as any)[l];
            ((g as any).event as any) === (t as any) && ((g as any).callback as any) === (i as any) && (((this as any).listeners as any).splice as any)(l, 1);
          }
        }, (e as any).emit = function (this: any, t: any, i: any): any {
          for (var l: any = 0; (l as any) < (((this as any).listeners as any).length as any); l++) {
            var g: any = ((this as any).listeners as any)[l];
            (t as any) === ((g as any).event as any) && ((g as any).callback as any)(i);
          }
        }, (N as any).exports = o;
      }]);
    });
  } as any)(Q)), (Q as any).exports;
}
var ct: any = ($ as any).exports,
  z: any;
function pt(this: any): any {
  return z || (z = 1, (function (this: any, G: any, b: any): any {
    (function (this: any, I: any, L: any): any {
      (G as any).exports = (L as any)((ft as any)());
    } as any)(ct, function (this: any, N: any): any {
      return (function (this: any, I: any): any {
        var L: any = {};
        function o(this: any, e: any): any {
          if ((L as any)[e]) return ((L as any)[e] as any).exports;
          var t: any = (L as any)[e] = {
            i: e,
            l: !1,
            exports: {}
          };
          return (((I as any)[e] as any).call as any)((t as any).exports, t, (t as any).exports, o), (t as any).l = !0, (t as any).exports;
        }
        return (o as any).m = I, (o as any).c = L, (o as any).i = function (this: any, e: any): any {
          return e;
        }, (o as any).d = function (this: any, e: any, t: any, i: any): any {
          ((o as any).o as any)(e, t) || ((Object as any).defineProperty as any)(e, t, {
            configurable: !1,
            enumerable: !0,
            get: i
          });
        }, (o as any).n = function (this: any, e: any): any {
          var t: any = e && (e as any).__esModule ? function (this: any): any {
            return (e as any).default;
          } : function (this: any): any {
            return e;
          };
          return ((o as any).d as any)(t, "a", t), t;
        }, (o as any).o = function (this: any, e: any, t: any): any {
          return ((((Object as any).prototype as any).hasOwnProperty as any).call as any)(e, t);
        }, (o as any).p = "", (o as any)((o as any).s = 7);
      } as any)([function (this: any, I: any, L: any): any {
        (I as any).exports = N;
      }, function (this: any, I: any, L: any, o: any): any {
        var i: any;
        var e: any = ((o as any)(0) as any).FDLayoutConstants;
        function t(this: any): any {}
        for (i in e) (t as any)[i] = (e as any)[i];
        (t as any).DEFAULT_USE_MULTI_LEVEL_SCALING = !1, (t as any).DEFAULT_RADIAL_SEPARATION = (e as any).DEFAULT_EDGE_LENGTH, (t as any).DEFAULT_COMPONENT_SEPERATION = 60, (t as any).TILE = !0, (t as any).TILING_PADDING_VERTICAL = 10, (t as any).TILING_PADDING_HORIZONTAL = 10, (t as any).TREE_REDUCTION_ON_INCREMENTAL = !1, (I as any).exports = t;
      }, function (this: any, I: any, L: any, o: any): any {
        var i: any;
        var e: any = ((o as any)(0) as any).FDLayoutEdge;
        function t(this: any, l: any, g: any, n: any): any {
          ((e as any).call as any)(this, l, g, n);
        }
        (t as any).prototype = ((Object as any).create as any)((e as any).prototype);
        for (i in e) (t as any)[i] = (e as any)[i];
        (I as any).exports = t;
      }, function (this: any, I: any, L: any, o: any): any {
        var i: any;
        var e: any = ((o as any)(0) as any).LGraph;
        function t(this: any, l: any, g: any, n: any): any {
          ((e as any).call as any)(this, l, g, n);
        }
        (t as any).prototype = ((Object as any).create as any)((e as any).prototype);
        for (i in e) (t as any)[i] = (e as any)[i];
        (I as any).exports = t;
      }, function (this: any, I: any, L: any, o: any): any {
        var i: any;
        var e: any = ((o as any)(0) as any).LGraphManager;
        function t(this: any, l: any): any {
          ((e as any).call as any)(this, l);
        }
        (t as any).prototype = ((Object as any).create as any)((e as any).prototype);
        for (i in e) (t as any)[i] = (e as any)[i];
        (I as any).exports = t;
      }, function (this: any, I: any, L: any, o: any): any {
        var l: any;
        var e: any = ((o as any)(0) as any).FDLayoutNode,
          t: any = ((o as any)(0) as any).IMath;
        function i(this: any, g: any, n: any, d: any, r: any): any {
          ((e as any).call as any)(this, g, n, d, r);
        }
        (i as any).prototype = ((Object as any).create as any)((e as any).prototype);
        for (l in e) (i as any)[l] = (e as any)[l];
        ((i as any).prototype as any).move = function (this: any): any {
          var g: any = (((this as any).graphManager as any).getLayout as any)();
          (this as any).displacementX = (((g as any).coolingFactor as any) * ((((this as any).springForceX as any) + ((this as any).repulsionForceX as any) as any) + ((this as any).gravitationForceX as any) as any) as any) / ((this as any).noOfChildren as any), (this as any).displacementY = (((g as any).coolingFactor as any) * ((((this as any).springForceY as any) + ((this as any).repulsionForceY as any) as any) + ((this as any).gravitationForceY as any) as any) as any) / ((this as any).noOfChildren as any), (((Math as any).abs as any)((this as any).displacementX) as any) > (((g as any).coolingFactor as any) * ((g as any).maxNodeDisplacement as any) as any) && ((this as any).displacementX = (((g as any).coolingFactor as any) * ((g as any).maxNodeDisplacement as any) as any) * (((t as any).sign as any)((this as any).displacementX) as any)), (((Math as any).abs as any)((this as any).displacementY) as any) > (((g as any).coolingFactor as any) * ((g as any).maxNodeDisplacement as any) as any) && ((this as any).displacementY = (((g as any).coolingFactor as any) * ((g as any).maxNodeDisplacement as any) as any) * (((t as any).sign as any)((this as any).displacementY) as any)), ((this as any).child as any) == (null as any) ? ((this as any).moveBy as any)((this as any).displacementX, (this as any).displacementY) : (((((this as any).child as any).getNodes as any)() as any).length as any) == (0 as any) ? ((this as any).moveBy as any)((this as any).displacementX, (this as any).displacementY) : ((this as any).propogateDisplacementToChildren as any)((this as any).displacementX, (this as any).displacementY), (g as any).totalDisplacement += (((Math as any).abs as any)((this as any).displacementX) as any) + (((Math as any).abs as any)((this as any).displacementY) as any), (this as any).springForceX = 0, (this as any).springForceY = 0, (this as any).repulsionForceX = 0, (this as any).repulsionForceY = 0, (this as any).gravitationForceX = 0, (this as any).gravitationForceY = 0, (this as any).displacementX = 0, (this as any).displacementY = 0;
        }, ((i as any).prototype as any).propogateDisplacementToChildren = function (this: any, g: any, n: any): any {
          for (var d: any = ((((this as any).getChild as any)() as any).getNodes as any)(), r: any, h: any = 0; (h as any) < ((d as any).length as any); h++) r = (d as any)[h], (((r as any).getChild as any)() as any) == (null as any) ? (((r as any).moveBy as any)(g, n), (r as any).displacementX += g, (r as any).displacementY += n) : ((r as any).propogateDisplacementToChildren as any)(g, n);
        }, ((i as any).prototype as any).setPred1 = function (this: any, g: any): any {
          (this as any).pred1 = g;
        }, ((i as any).prototype as any).getPred1 = function (this: any): any {
          return pred1;
        }, ((i as any).prototype as any).getPred2 = function (this: any): any {
          return pred2;
        }, ((i as any).prototype as any).setNext = function (this: any, g: any): any {
          (this as any).next = g;
        }, ((i as any).prototype as any).getNext = function (this: any): any {
          return next;
        }, ((i as any).prototype as any).setProcessed = function (this: any, g: any): any {
          (this as any).processed = g;
        }, ((i as any).prototype as any).isProcessed = function (this: any): any {
          return processed;
        }, (I as any).exports = i;
      }, function (this: any, I: any, L: any, o: any): any {
        var O: any;
        var e: any = ((o as any)(0) as any).FDLayout,
          t: any = (o as any)(4),
          i: any = (o as any)(3),
          l: any = (o as any)(5),
          g: any = (o as any)(2),
          n: any = (o as any)(1),
          d: any = ((o as any)(0) as any).FDLayoutConstants,
          r: any = ((o as any)(0) as any).LayoutConstants,
          h: any = ((o as any)(0) as any).Point,
          a: any = ((o as any)(0) as any).PointD,
          p: any = ((o as any)(0) as any).Layout,
          v: any = ((o as any)(0) as any).Integer,
          D: any = ((o as any)(0) as any).IGeometry,
          u: any = ((o as any)(0) as any).LGraph,
          T: any = ((o as any)(0) as any).Transform;
        function y(this: any): any {
          ((e as any).call as any)(this), (this as any).toBeTiled = {};
        }
        (y as any).prototype = ((Object as any).create as any)((e as any).prototype);
        for (O in e) (y as any)[O] = (e as any)[O];
        ((y as any).prototype as any).newGraphManager = function (this: any): any {
          var s: any = new (t as any)(this);
          return (this as any).graphManager = s, s;
        }, ((y as any).prototype as any).newGraph = function (this: any, s: any): any {
          return new (i as any)(null, (this as any).graphManager, s);
        }, ((y as any).prototype as any).newNode = function (this: any, s: any): any {
          return new (l as any)((this as any).graphManager, s);
        }, ((y as any).prototype as any).newEdge = function (this: any, s: any): any {
          return new (g as any)(null, null, s);
        }, ((y as any).prototype as any).initParameters = function (this: any): any {
          ((((e as any).prototype as any).initParameters as any).call as any)(this, arguments), (this as any).isSubLayout || (((n as any).DEFAULT_EDGE_LENGTH as any) < (10 as any) ? (this as any).idealEdgeLength = 10 : (this as any).idealEdgeLength = (n as any).DEFAULT_EDGE_LENGTH, (this as any).useSmartIdealEdgeLengthCalculation = (n as any).DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION, (this as any).springConstant = (d as any).DEFAULT_SPRING_STRENGTH, (this as any).repulsionConstant = (d as any).DEFAULT_REPULSION_STRENGTH, (this as any).gravityConstant = (d as any).DEFAULT_GRAVITY_STRENGTH, (this as any).compoundGravityConstant = (d as any).DEFAULT_COMPOUND_GRAVITY_STRENGTH, (this as any).gravityRangeFactor = (d as any).DEFAULT_GRAVITY_RANGE_FACTOR, (this as any).compoundGravityRangeFactor = (d as any).DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR, (this as any).prunedNodesAll = [], (this as any).growTreeIterations = 0, (this as any).afterGrowthIterations = 0, (this as any).isTreeGrowing = !1, (this as any).isGrowthFinished = !1, (this as any).coolingCycle = 0, (this as any).maxCoolingCycle = ((this as any).maxIterations as any) / ((d as any).CONVERGENCE_CHECK_PERIOD as any), (this as any).finalTemperature = ((d as any).CONVERGENCE_CHECK_PERIOD as any) / ((this as any).maxIterations as any), (this as any).coolingAdjuster = 1);
        }, ((y as any).prototype as any).layout = function (this: any): any {
          var s: any = (r as any).DEFAULT_CREATE_BENDS_AS_NEEDED;
          return s && (((this as any).createBendpoints as any)(), (((this as any).graphManager as any).resetAllEdges as any)()), (this as any).level = 0, ((this as any).classicLayout as any)();
        }, ((y as any).prototype as any).classicLayout = function (this: any): any {
          if ((this as any).nodesWithGravity = ((this as any).calculateNodesToApplyGravitationTo as any)(), (((this as any).graphManager as any).setAllNodesToApplyGravitation as any)((this as any).nodesWithGravity), ((this as any).calcNoOfChildrenForAllNodes as any)(), (((this as any).graphManager as any).calcLowestCommonAncestors as any)(), (((this as any).graphManager as any).calcInclusionTreeDepths as any)(), (((((this as any).graphManager as any).getRoot as any)() as any).calcEstimatedSize as any)(), ((this as any).calcIdealEdgeLengths as any)(), (this as any).incremental) {
            if ((n as any).TREE_REDUCTION_ON_INCREMENTAL) {
              ((this as any).reduceTrees as any)(), (((this as any).graphManager as any).resetAllNodesToApplyGravitation as any)();
              var f: any = new (Set as any)(((this as any).getAllNodes as any)()),
                c: any = (((this as any).nodesWithGravity as any).filter as any)(function (this: any, m: any): any {
                  return ((f as any).has as any)(m);
                });
              (((this as any).graphManager as any).setAllNodesToApplyGravitation as any)(c);
            }
          } else {
            var s: any = ((this as any).getFlatForest as any)();
            if (((s as any).length as any) > (0 as any)) ((this as any).positionNodesRadially as any)(s);else {
              ((this as any).reduceTrees as any)(), (((this as any).graphManager as any).resetAllNodesToApplyGravitation as any)();
              var f: any = new (Set as any)(((this as any).getAllNodes as any)()),
                c: any = (((this as any).nodesWithGravity as any).filter as any)(function (this: any, E: any): any {
                  return ((f as any).has as any)(E);
                });
              (((this as any).graphManager as any).setAllNodesToApplyGravitation as any)(c), ((this as any).positionNodesRandomly as any)();
            }
          }
          return ((this as any).initSpringEmbedder as any)(), ((this as any).runSpringEmbedder as any)(), !0;
        }, ((y as any).prototype as any).tick = function (this: any): any {
          if ((this as any).totalIterations++, ((this as any).totalIterations as any) === ((this as any).maxIterations as any) && !(this as any).isTreeGrowing && !(this as any).isGrowthFinished) if ((((this as any).prunedNodesAll as any).length as any) > (0 as any)) (this as any).isTreeGrowing = !0;else return !0;
          if ((((this as any).totalIterations as any) % ((d as any).CONVERGENCE_CHECK_PERIOD as any) as any) == (0 as any) && !(this as any).isTreeGrowing && !(this as any).isGrowthFinished) {
            if (((this as any).isConverged as any)()) if ((((this as any).prunedNodesAll as any).length as any) > (0 as any)) (this as any).isTreeGrowing = !0;else return !0;
            (this as any).coolingCycle++, ((this as any).layoutQuality as any) == (0 as any) ? (this as any).coolingAdjuster = (this as any).coolingCycle : ((this as any).layoutQuality as any) == (1 as any) && ((this as any).coolingAdjuster = ((this as any).coolingCycle as any) / (3 as any)), (this as any).coolingFactor = ((Math as any).max as any)(((this as any).initialCoolingFactor as any) - (((((Math as any).pow as any)((this as any).coolingCycle, (((Math as any).log as any)((100 as any) * (((this as any).initialCoolingFactor as any) - ((this as any).finalTemperature as any) as any)) as any) / (((Math as any).log as any)((this as any).maxCoolingCycle) as any)) as any) / (100 as any) as any) * ((this as any).coolingAdjuster as any) as any), (this as any).finalTemperature), (this as any).animationPeriod = ((Math as any).ceil as any)(((this as any).initialAnimationPeriod as any) * (((Math as any).sqrt as any)((this as any).coolingFactor) as any));
          }
          if ((this as any).isTreeGrowing) {
            if ((((this as any).growTreeIterations as any) % (10 as any) as any) == (0 as any)) if ((((this as any).prunedNodesAll as any).length as any) > (0 as any)) {
              (((this as any).graphManager as any).updateBounds as any)(), ((this as any).updateGrid as any)(), ((this as any).growTree as any)((this as any).prunedNodesAll), (((this as any).graphManager as any).resetAllNodesToApplyGravitation as any)();
              var s: any = new (Set as any)(((this as any).getAllNodes as any)()),
                f: any = (((this as any).nodesWithGravity as any).filter as any)(function (this: any, A: any): any {
                  return ((s as any).has as any)(A);
                });
              (((this as any).graphManager as any).setAllNodesToApplyGravitation as any)(f), (((this as any).graphManager as any).updateBounds as any)(), ((this as any).updateGrid as any)(), (this as any).coolingFactor = (d as any).DEFAULT_COOLING_FACTOR_INCREMENTAL;
            } else (this as any).isTreeGrowing = !1, (this as any).isGrowthFinished = !0;
            (this as any).growTreeIterations++;
          }
          if ((this as any).isGrowthFinished) {
            if (((this as any).isConverged as any)()) return !0;
            (((this as any).afterGrowthIterations as any) % (10 as any) as any) == (0 as any) && ((((this as any).graphManager as any).updateBounds as any)(), ((this as any).updateGrid as any)()), (this as any).coolingFactor = ((d as any).DEFAULT_COOLING_FACTOR_INCREMENTAL as any) * (((100 as any) - ((this as any).afterGrowthIterations as any) as any) / (100 as any) as any), (this as any).afterGrowthIterations++;
          }
          var c: any = !(this as any).isTreeGrowing && !(this as any).isGrowthFinished,
            E: any = (((this as any).growTreeIterations as any) % (10 as any) as any) == (1 as any) && (this as any).isTreeGrowing || (((this as any).afterGrowthIterations as any) % (10 as any) as any) == (1 as any) && (this as any).isGrowthFinished;
          return (this as any).totalDisplacement = 0, (((this as any).graphManager as any).updateBounds as any)(), ((this as any).calcSpringForces as any)(), ((this as any).calcRepulsionForces as any)(c, E), ((this as any).calcGravitationalForces as any)(), ((this as any).moveNodes as any)(), ((this as any).animate as any)(), !1;
        }, ((y as any).prototype as any).getPositionsData = function (this: any): any {
          for (var s: any = (((this as any).graphManager as any).getAllNodes as any)(), f: any = {}, c: any = 0; (c as any) < ((s as any).length as any); c++) {
            var E: any = ((s as any)[c] as any).rect,
              A: any = ((s as any)[c] as any).id;
            (f as any)[A] = {
              id: A,
              x: ((E as any).getCenterX as any)(),
              y: ((E as any).getCenterY as any)(),
              w: (E as any).width,
              h: (E as any).height
            };
          }
          return f;
        }, ((y as any).prototype as any).runSpringEmbedder = function (this: any): any {
          (this as any).initialAnimationPeriod = 25, (this as any).animationPeriod = (this as any).initialAnimationPeriod;
          var s: any = !1;
          if (((d as any).ANIMATE as any) === ("during" as any)) ((this as any).emit as any)("layoutstarted");else {
            for (; !s;) s = ((this as any).tick as any)();
            (((this as any).graphManager as any).updateBounds as any)();
          }
        }, ((y as any).prototype as any).calculateNodesToApplyGravitationTo = function (this: any): any {
          var s: any = [],
            f: any,
            c: any = (((this as any).graphManager as any).getGraphs as any)(),
            E: any = (c as any).length,
            A: any;
          for (A = 0; (A as any) < (E as any); A++) f = (c as any)[A], ((f as any).updateConnected as any)(), (f as any).isConnected || (s = ((s as any).concat as any)(((f as any).getNodes as any)()));
          return s;
        }, ((y as any).prototype as any).createBendpoints = function (this: any): any {
          var s: any = [];
          s = ((s as any).concat as any)((((this as any).graphManager as any).getAllEdges as any)());
          var f: any = new (Set as any)(),
            c: any;
          for (c = 0; (c as any) < ((s as any).length as any); c++) {
            var E: any = (s as any)[c];
            if (!((f as any).has as any)(E)) {
              var A: any = ((E as any).getSource as any)(),
                m: any = ((E as any).getTarget as any)();
              if ((A as any) == (m as any)) ((((E as any).getBendpoints as any)() as any).push as any)(new (a as any)()), ((((E as any).getBendpoints as any)() as any).push as any)(new (a as any)()), ((this as any).createDummyNodesForBendpoints as any)(E), ((f as any).add as any)(E);else {
                var C: any = [];
                if (C = ((C as any).concat as any)(((A as any).getEdgeListToNode as any)(m)), C = ((C as any).concat as any)(((m as any).getEdgeListToNode as any)(A)), !((f as any).has as any)((C as any)[0])) {
                  if (((C as any).length as any) > (1 as any)) {
                    var R: any;
                    for (R = 0; (R as any) < ((C as any).length as any); R++) {
                      var M: any = (C as any)[R];
                      ((((M as any).getBendpoints as any)() as any).push as any)(new (a as any)()), ((this as any).createDummyNodesForBendpoints as any)(M);
                    }
                  }
                  ((C as any).forEach as any)(function (this: any, S: any): any {
                    ((f as any).add as any)(S);
                  });
                }
              }
            }
            if (((f as any).size as any) == ((s as any).length as any)) break;
          }
        }, ((y as any).prototype as any).positionNodesRadially = function (this: any, s: any): any {
          for (var f: any = new (h as any)(0, 0), c: any = ((Math as any).ceil as any)(((Math as any).sqrt as any)((s as any).length)), E: any = 0, A: any = 0, m: any = 0, C: any = new (a as any)(0, 0), R: any = 0; (R as any) < ((s as any).length as any); R++) {
            ((R as any) % (c as any) as any) == (0 as any) && (m = 0, A = E, (R as any) != (0 as any) && (A += (n as any).DEFAULT_COMPONENT_SEPERATION), E = 0);
            var M: any = (s as any)[R],
              S: any = ((p as any).findCenterOfTree as any)(M);
            (f as any).x = m, (f as any).y = A, C = ((y as any).radialLayout as any)(M, S, f), ((C as any).y as any) > (E as any) && (E = ((Math as any).floor as any)((C as any).y)), m = ((Math as any).floor as any)(((C as any).x as any) + ((n as any).DEFAULT_COMPONENT_SEPERATION as any));
          }
          ((this as any).transform as any)(new (a as any)(((r as any).WORLD_CENTER_X as any) - (((C as any).x as any) / (2 as any) as any), ((r as any).WORLD_CENTER_Y as any) - (((C as any).y as any) / (2 as any) as any)));
        }, (y as any).radialLayout = function (this: any, s: any, f: any, c: any): any {
          var E: any = ((Math as any).max as any)(((this as any).maxDiagonalInTree as any)(s), (n as any).DEFAULT_RADIAL_SEPARATION);
          ((y as any).branchRadialLayout as any)(f, null, 0, 359, 0, E);
          var A: any = ((u as any).calculateBounds as any)(s),
            m: any = new (T as any)();
          ((m as any).setDeviceOrgX as any)(((A as any).getMinX as any)()), ((m as any).setDeviceOrgY as any)(((A as any).getMinY as any)()), ((m as any).setWorldOrgX as any)((c as any).x), ((m as any).setWorldOrgY as any)((c as any).y);
          for (var C: any = 0; (C as any) < ((s as any).length as any); C++) {
            var R: any = (s as any)[C];
            ((R as any).transform as any)(m);
          }
          var M: any = new (a as any)(((A as any).getMaxX as any)(), ((A as any).getMaxY as any)());
          return ((m as any).inverseTransformPoint as any)(M);
        }, (y as any).branchRadialLayout = function (this: any, s: any, f: any, c: any, E: any, A: any, m: any): any {
          var C: any = (((E as any) - (c as any) as any) + (1 as any) as any) / (2 as any);
          (C as any) < (0 as any) && (C += 180);
          var R: any = ((C as any) + (c as any) as any) % (360 as any),
            M: any = ((R as any) * ((D as any).TWO_PI as any) as any) / (360 as any),
            S: any = (A as any) * (((Math as any).cos as any)(M) as any),
            Y: any = (A as any) * (((Math as any).sin as any)(M) as any);
          ((s as any).setCenter as any)(S, Y);
          var w: any = [];
          w = ((w as any).concat as any)(((s as any).getEdges as any)());
          var x: any = (w as any).length;
          (f as any) != (null as any) && x--;
          for (var F: any = 0, U: any = (w as any).length, P: any, _: any = ((s as any).getEdgesBetween as any)(f); ((_ as any).length as any) > (1 as any);) {
            var X: any = (_ as any)[0];
            ((_ as any).splice as any)(0, 1);
            var H: any = ((w as any).indexOf as any)(X);
            (H as any) >= (0 as any) && ((w as any).splice as any)(H, 1), U--, x--;
          }
          (f as any) != (null as any) ? P = ((((w as any).indexOf as any)((_ as any)[0]) as any) + (1 as any) as any) % (U as any) : P = 0;
          for (var W: any = (((Math as any).abs as any)((E as any) - (c as any)) as any) / (x as any), B: any = P; (F as any) != (x as any); B = (++B as any) % (U as any)) {
            var K: any = (((w as any)[B] as any).getOtherEnd as any)(s);
            if ((K as any) != (f as any)) {
              var q: any = ((c as any) + ((F as any) * (W as any) as any) as any) % (360 as any),
                ht: any = ((q as any) + (W as any) as any) % (360 as any);
              ((y as any).branchRadialLayout as any)(K, s, q, ht, (A as any) + (m as any), m), F++;
            }
          }
        }, (y as any).maxDiagonalInTree = function (this: any, s: any): any {
          for (var f: any = (v as any).MIN_VALUE, c: any = 0; (c as any) < ((s as any).length as any); c++) {
            var E: any = (s as any)[c],
              A: any = ((E as any).getDiagonal as any)();
            (A as any) > (f as any) && (f = A);
          }
          return f;
        }, ((y as any).prototype as any).calcRepulsionRange = function (this: any): any {
          return ((2 as any) * (((this as any).level as any) + (1 as any) as any) as any) * ((this as any).idealEdgeLength as any);
        }, ((y as any).prototype as any).groupZeroDegreeMembers = function (this: any): any {
          var s: any = this,
            f: any = {};
          (this as any).memberGroups = {}, (this as any).idToDummyNode = {};
          for (var c: any = [], E: any = (((this as any).graphManager as any).getAllNodes as any)(), A: any = 0; (A as any) < ((E as any).length as any); A++) {
            var m: any = (E as any)[A],
              C: any = ((m as any).getParent as any)();
            (((this as any).getNodeDegreeWithChildren as any)(m) as any) === (0 as any) && (((C as any).id as any) == (null as any) || !((this as any).getToBeTiled as any)(C)) && ((c as any).push as any)(m);
          }
          for (var A: any = 0; (A as any) < ((c as any).length as any); A++) {
            var m: any = (c as any)[A],
              R: any = (((m as any).getParent as any)() as any).id;
            (typeof (f as any)[R] as any) > ("u" as any) && ((f as any)[R] = []), (f as any)[R] = (((f as any)[R] as any).concat as any)(m);
          }
          ((((Object as any).keys as any)(f) as any).forEach as any)(function (this: any, M: any): any {
            if ((((f as any)[M] as any).length as any) > (1 as any)) {
              var S: any = ("DummyCompound_" as any) + (M as any);
              ((s as any).memberGroups as any)[S] = (f as any)[M];
              var Y: any = ((((f as any)[M] as any)[0] as any).getParent as any)(),
                w: any = new (l as any)((s as any).graphManager);
              (w as any).id = S, (w as any).paddingLeft = (Y as any).paddingLeft || 0, (w as any).paddingRight = (Y as any).paddingRight || 0, (w as any).paddingBottom = (Y as any).paddingBottom || 0, (w as any).paddingTop = (Y as any).paddingTop || 0, ((s as any).idToDummyNode as any)[S] = w;
              var x: any = ((((s as any).getGraphManager as any)() as any).add as any)(((s as any).newGraph as any)(), w),
                F: any = ((Y as any).getChild as any)();
              ((F as any).add as any)(w);
              for (var U: any = 0; (U as any) < (((f as any)[M] as any).length as any); U++) {
                var P: any = ((f as any)[M] as any)[U];
                ((F as any).remove as any)(P), ((x as any).add as any)(P);
              }
            }
          });
        }, ((y as any).prototype as any).clearCompounds = function (this: any): any {
          var s: any = {},
            f: any = {};
          ((this as any).performDFSOnCompounds as any)();
          for (var c: any = 0; (c as any) < (((this as any).compoundOrder as any).length as any); c++) (f as any)[(((this as any).compoundOrder as any)[c] as any).id] = ((this as any).compoundOrder as any)[c], (s as any)[(((this as any).compoundOrder as any)[c] as any).id] = (([] as any).concat as any)(((((((this as any).compoundOrder as any)[c] as any).getChild as any)() as any).getNodes as any)()), (((this as any).graphManager as any).remove as any)(((((this as any).compoundOrder as any)[c] as any).getChild as any)()), (((this as any).compoundOrder as any)[c] as any).child = null;
          (((this as any).graphManager as any).resetAllNodes as any)(), ((this as any).tileCompoundMembers as any)(s, f);
        }, ((y as any).prototype as any).clearZeroDegreeMembers = function (this: any): any {
          var s: any = this,
            f: any = (this as any).tiledZeroDegreePack = [];
          ((((Object as any).keys as any)((this as any).memberGroups) as any).forEach as any)(function (this: any, c: any): any {
            var E: any = ((s as any).idToDummyNode as any)[c];
            (f as any)[c] = ((s as any).tileNodes as any)(((s as any).memberGroups as any)[c], ((E as any).paddingLeft as any) + ((E as any).paddingRight as any)), ((E as any).rect as any).width = ((f as any)[c] as any).width, ((E as any).rect as any).height = ((f as any)[c] as any).height;
          });
        }, ((y as any).prototype as any).repopulateCompounds = function (this: any): any {
          for (var s: any = (((this as any).compoundOrder as any).length as any) - (1 as any); (s as any) >= (0 as any); s--) {
            var f: any = ((this as any).compoundOrder as any)[s],
              c: any = (f as any).id,
              E: any = (f as any).paddingLeft,
              A: any = (f as any).paddingTop;
            ((this as any).adjustLocations as any)(((this as any).tiledMemberPack as any)[c], ((f as any).rect as any).x, ((f as any).rect as any).y, E, A);
          }
        }, ((y as any).prototype as any).repopulateZeroDegreeMembers = function (this: any): any {
          var s: any = this,
            f: any = (this as any).tiledZeroDegreePack;
          ((((Object as any).keys as any)(f) as any).forEach as any)(function (this: any, c: any): any {
            var E: any = ((s as any).idToDummyNode as any)[c],
              A: any = (E as any).paddingLeft,
              m: any = (E as any).paddingTop;
            ((s as any).adjustLocations as any)((f as any)[c], ((E as any).rect as any).x, ((E as any).rect as any).y, A, m);
          });
        }, ((y as any).prototype as any).getToBeTiled = function (this: any, s: any): any {
          var f: any = (s as any).id;
          if ((((this as any).toBeTiled as any)[f] as any) != (null as any)) return ((this as any).toBeTiled as any)[f];
          var c: any = ((s as any).getChild as any)();
          if ((c as any) == (null as any)) return ((this as any).toBeTiled as any)[f] = !1, !1;
          for (var E: any = ((c as any).getNodes as any)(), A: any = 0; (A as any) < ((E as any).length as any); A++) {
            var m: any = (E as any)[A];
            if ((((this as any).getNodeDegree as any)(m) as any) > (0 as any)) return ((this as any).toBeTiled as any)[f] = !1, !1;
            if ((((m as any).getChild as any)() as any) == (null as any)) {
              ((this as any).toBeTiled as any)[(m as any).id] = !1;
              continue;
            }
            if (!((this as any).getToBeTiled as any)(m)) return ((this as any).toBeTiled as any)[f] = !1, !1;
          }
          return ((this as any).toBeTiled as any)[f] = !0, !0;
        }, ((y as any).prototype as any).getNodeDegree = function (this: any, s: any): any {
          (s as any).id;
          for (var f: any = ((s as any).getEdges as any)(), c: any = 0, E: any = 0; (E as any) < ((f as any).length as any); E++) {
            var A: any = (f as any)[E];
            ((((A as any).getSource as any)() as any).id as any) !== ((((A as any).getTarget as any)() as any).id as any) && (c = (c as any) + (1 as any));
          }
          return c;
        }, ((y as any).prototype as any).getNodeDegreeWithChildren = function (this: any, s: any): any {
          var f: any = ((this as any).getNodeDegree as any)(s);
          if ((((s as any).getChild as any)() as any) == (null as any)) return f;
          for (var c: any = ((((s as any).getChild as any)() as any).getNodes as any)(), E: any = 0; (E as any) < ((c as any).length as any); E++) {
            var A: any = (c as any)[E];
            f += ((this as any).getNodeDegreeWithChildren as any)(A);
          }
          return f;
        }, ((y as any).prototype as any).performDFSOnCompounds = function (this: any): any {
          (this as any).compoundOrder = [], ((this as any).fillCompexOrderByDFS as any)((((((this as any).graphManager as any).getRoot as any)() as any).getNodes as any)());
        }, ((y as any).prototype as any).fillCompexOrderByDFS = function (this: any, s: any): any {
          for (var f: any = 0; (f as any) < ((s as any).length as any); f++) {
            var c: any = (s as any)[f];
            (((c as any).getChild as any)() as any) != (null as any) && ((this as any).fillCompexOrderByDFS as any)(((((c as any).getChild as any)() as any).getNodes as any)()), ((this as any).getToBeTiled as any)(c) && (((this as any).compoundOrder as any).push as any)(c);
          }
        }, ((y as any).prototype as any).adjustLocations = function (this: any, s: any, f: any, c: any, E: any, A: any): any {
          f += E, c += A;
          for (var m: any = f, C: any = 0; (C as any) < (((s as any).rows as any).length as any); C++) {
            var R: any = ((s as any).rows as any)[C];
            f = m;
            for (var M: any = 0, S: any = 0; (S as any) < ((R as any).length as any); S++) {
              var Y: any = (R as any)[S];
              ((Y as any).rect as any).x = f, ((Y as any).rect as any).y = c, f += (((Y as any).rect as any).width as any) + ((s as any).horizontalPadding as any), (((Y as any).rect as any).height as any) > (M as any) && (M = ((Y as any).rect as any).height);
            }
            c += (M as any) + ((s as any).verticalPadding as any);
          }
        }, ((y as any).prototype as any).tileCompoundMembers = function (this: any, s: any, f: any): any {
          var c: any = this;
          (this as any).tiledMemberPack = [], ((((Object as any).keys as any)(s) as any).forEach as any)(function (this: any, E: any): any {
            var A: any = (f as any)[E];
            ((c as any).tiledMemberPack as any)[E] = ((c as any).tileNodes as any)((s as any)[E], ((A as any).paddingLeft as any) + ((A as any).paddingRight as any)), ((A as any).rect as any).width = (((c as any).tiledMemberPack as any)[E] as any).width, ((A as any).rect as any).height = (((c as any).tiledMemberPack as any)[E] as any).height;
          });
        }, ((y as any).prototype as any).tileNodes = function (this: any, s: any, f: any): any {
          var c: any = (n as any).TILING_PADDING_VERTICAL,
            E: any = (n as any).TILING_PADDING_HORIZONTAL,
            A: any = {
              rows: [],
              rowWidth: [],
              rowHeight: [],
              width: 0,
              height: f,
              verticalPadding: c,
              horizontalPadding: E
            };
          ((s as any).sort as any)(function (this: any, R: any, M: any): any {
            return ((((R as any).rect as any).width as any) * (((R as any).rect as any).height as any) as any) > ((((M as any).rect as any).width as any) * (((M as any).rect as any).height as any) as any) ? -1 : ((((R as any).rect as any).width as any) * (((R as any).rect as any).height as any) as any) < ((((M as any).rect as any).width as any) * (((M as any).rect as any).height as any) as any) ? 1 : 0;
          });
          for (var m: any = 0; (m as any) < ((s as any).length as any); m++) {
            var C: any = (s as any)[m];
            (((A as any).rows as any).length as any) == (0 as any) ? ((this as any).insertNodeToRow as any)(A, C, 0, f) : ((this as any).canAddHorizontal as any)(A, ((C as any).rect as any).width, ((C as any).rect as any).height) ? ((this as any).insertNodeToRow as any)(A, C, ((this as any).getShortestRowIndex as any)(A), f) : ((this as any).insertNodeToRow as any)(A, C, ((A as any).rows as any).length, f), ((this as any).shiftToLastRow as any)(A);
          }
          return A;
        }, ((y as any).prototype as any).insertNodeToRow = function (this: any, s: any, f: any, c: any, E: any): any {
          var A: any = E;
          if ((c as any) == (((s as any).rows as any).length as any)) {
            var m: any = [];
            (((s as any).rows as any).push as any)(m), (((s as any).rowWidth as any).push as any)(A), (((s as any).rowHeight as any).push as any)(0);
          }
          var C: any = (((s as any).rowWidth as any)[c] as any) + (((f as any).rect as any).width as any);
          ((((s as any).rows as any)[c] as any).length as any) > (0 as any) && (C += (s as any).horizontalPadding), ((s as any).rowWidth as any)[c] = C, ((s as any).width as any) < (C as any) && ((s as any).width = C);
          var R: any = ((f as any).rect as any).height;
          (c as any) > (0 as any) && (R += (s as any).verticalPadding);
          var M: any = 0;
          (R as any) > (((s as any).rowHeight as any)[c] as any) && (M = ((s as any).rowHeight as any)[c], ((s as any).rowHeight as any)[c] = R, M = (((s as any).rowHeight as any)[c] as any) - (M as any)), (s as any).height += M, ((((s as any).rows as any)[c] as any).push as any)(f);
        }, ((y as any).prototype as any).getShortestRowIndex = function (this: any, s: any): any {
          for (var f: any = -1, c: any = (Number as any).MAX_VALUE, E: any = 0; (E as any) < (((s as any).rows as any).length as any); E++) (((s as any).rowWidth as any)[E] as any) < (c as any) && (f = E, c = ((s as any).rowWidth as any)[E]);
          return f;
        }, ((y as any).prototype as any).getLongestRowIndex = function (this: any, s: any): any {
          for (var f: any = -1, c: any = (Number as any).MIN_VALUE, E: any = 0; (E as any) < (((s as any).rows as any).length as any); E++) (((s as any).rowWidth as any)[E] as any) > (c as any) && (f = E, c = ((s as any).rowWidth as any)[E]);
          return f;
        }, ((y as any).prototype as any).canAddHorizontal = function (this: any, s: any, f: any, c: any): any {
          var E: any = ((this as any).getShortestRowIndex as any)(s);
          if ((E as any) < (0 as any)) return !0;
          var A: any = ((s as any).rowWidth as any)[E];
          if ((((A as any) + ((s as any).horizontalPadding as any) as any) + (f as any) as any) <= ((s as any).width as any)) return !0;
          var m: any = 0;
          (((s as any).rowHeight as any)[E] as any) < (c as any) && (E as any) > (0 as any) && (m = ((c as any) + ((s as any).verticalPadding as any) as any) - (((s as any).rowHeight as any)[E] as any));
          var C: any;
          (((s as any).width as any) - (A as any) as any) >= ((f as any) + ((s as any).horizontalPadding as any) as any) ? C = (((s as any).height as any) + (m as any) as any) / (((A as any) + (f as any) as any) + ((s as any).horizontalPadding as any) as any) : C = (((s as any).height as any) + (m as any) as any) / ((s as any).width as any), m = (c as any) + ((s as any).verticalPadding as any);
          var R: any;
          return ((s as any).width as any) < (f as any) ? R = (((s as any).height as any) + (m as any) as any) / (f as any) : R = (((s as any).height as any) + (m as any) as any) / ((s as any).width as any), (R as any) < (1 as any) && (R = (1 as any) / (R as any)), (C as any) < (1 as any) && (C = (1 as any) / (C as any)), (C as any) < (R as any);
        }, ((y as any).prototype as any).shiftToLastRow = function (this: any, s: any): any {
          var f: any = ((this as any).getLongestRowIndex as any)(s),
            c: any = (((s as any).rowWidth as any).length as any) - (1 as any),
            E: any = ((s as any).rows as any)[f],
            A: any = (E as any)[((E as any).length as any) - (1 as any)],
            m: any = ((A as any).width as any) + ((s as any).horizontalPadding as any);
          if ((((s as any).width as any) - (((s as any).rowWidth as any)[c] as any) as any) > (m as any) && (f as any) != (c as any)) {
            ((E as any).splice as any)(-1, 1), ((((s as any).rows as any)[c] as any).push as any)(A), ((s as any).rowWidth as any)[f] = (((s as any).rowWidth as any)[f] as any) - (m as any), ((s as any).rowWidth as any)[c] = (((s as any).rowWidth as any)[c] as any) + (m as any), (s as any).width = ((s as any).rowWidth as any)[((instance as any).getLongestRowIndex as any)(s)];
            for (var C: any = (Number as any).MIN_VALUE, R: any = 0; (R as any) < ((E as any).length as any); R++) (((E as any)[R] as any).height as any) > (C as any) && (C = ((E as any)[R] as any).height);
            (f as any) > (0 as any) && (C += (s as any).verticalPadding);
            var M: any = (((s as any).rowHeight as any)[f] as any) + (((s as any).rowHeight as any)[c] as any);
            ((s as any).rowHeight as any)[f] = C, (((s as any).rowHeight as any)[c] as any) < (((A as any).height as any) + ((s as any).verticalPadding as any) as any) && (((s as any).rowHeight as any)[c] = ((A as any).height as any) + ((s as any).verticalPadding as any));
            var S: any = (((s as any).rowHeight as any)[f] as any) + (((s as any).rowHeight as any)[c] as any);
            (s as any).height += (S as any) - (M as any), ((this as any).shiftToLastRow as any)(s);
          }
        }, ((y as any).prototype as any).tilingPreLayout = function (this: any): any {
          (n as any).TILE && (((this as any).groupZeroDegreeMembers as any)(), ((this as any).clearCompounds as any)(), ((this as any).clearZeroDegreeMembers as any)());
        }, ((y as any).prototype as any).tilingPostLayout = function (this: any): any {
          (n as any).TILE && (((this as any).repopulateZeroDegreeMembers as any)(), ((this as any).repopulateCompounds as any)());
        }, ((y as any).prototype as any).reduceTrees = function (this: any): any {
          for (var s: any = [], f: any = !0, c: any; f;) {
            var E: any = (((this as any).graphManager as any).getAllNodes as any)(),
              A: any = [];
            f = !1;
            for (var m: any = 0; (m as any) < ((E as any).length as any); m++) c = (E as any)[m], ((((c as any).getEdges as any)() as any).length as any) == (1 as any) && !((((c as any).getEdges as any)() as any)[0] as any).isInterGraph && (((c as any).getChild as any)() as any) == (null as any) && (((A as any).push as any)([c, (((c as any).getEdges as any)() as any)[0], ((c as any).getOwner as any)()]), f = !0);
            if ((f as any) == (!0 as any)) {
              for (var C: any = [], R: any = 0; (R as any) < ((A as any).length as any); R++) ((((((A as any)[R] as any)[0] as any).getEdges as any)() as any).length as any) == (1 as any) && (((C as any).push as any)((A as any)[R]), ((((((A as any)[R] as any)[0] as any).getOwner as any)() as any).remove as any)(((A as any)[R] as any)[0]));
              ((s as any).push as any)(C), (((this as any).graphManager as any).resetAllNodes as any)(), (((this as any).graphManager as any).resetAllEdges as any)();
            }
          }
          (this as any).prunedNodesAll = s;
        }, ((y as any).prototype as any).growTree = function (this: any, s: any): any {
          for (var f: any = (s as any).length, c: any = (s as any)[(f as any) - (1 as any)], E: any, A: any = 0; (A as any) < ((c as any).length as any); A++) E = (c as any)[A], ((this as any).findPlaceforPrunedNode as any)(E), (((E as any)[2] as any).add as any)((E as any)[0]), (((E as any)[2] as any).add as any)((E as any)[1], ((E as any)[1] as any).source, ((E as any)[1] as any).target);
          ((s as any).splice as any)(((s as any).length as any) - (1 as any), 1), (((this as any).graphManager as any).resetAllNodes as any)(), (((this as any).graphManager as any).resetAllEdges as any)();
        }, ((y as any).prototype as any).findPlaceforPrunedNode = function (this: any, s: any): any {
          var f: any,
            c: any,
            E: any = (s as any)[0];
          (E as any) == (((s as any)[1] as any).source as any) ? c = ((s as any)[1] as any).target : c = ((s as any)[1] as any).source;
          var A: any = (c as any).startX,
            m: any = (c as any).finishX,
            C: any = (c as any).startY,
            R: any = (c as any).finishY,
            M: number = 0,
            S: number = 0,
            Y: number = 0,
            w: number = 0,
            x: any = [M, Y, S, w];
          if ((C as any) > (0 as any)) for (var F: any = A; (F as any) <= (m as any); F++) (x as any)[0] += ((((((this as any).grid as any)[F] as any)[(C as any) - (1 as any)] as any).length as any) + (((((this as any).grid as any)[F] as any)[C] as any).length as any) as any) - (1 as any);
          if ((m as any) < ((((this as any).grid as any).length as any) - (1 as any) as any)) for (var F: any = C; (F as any) <= (R as any); F++) (x as any)[1] += ((((((this as any).grid as any)[(m as any) + (1 as any)] as any)[F] as any).length as any) + (((((this as any).grid as any)[m] as any)[F] as any).length as any) as any) - (1 as any);
          if ((R as any) < (((((this as any).grid as any)[0] as any).length as any) - (1 as any) as any)) for (var F: any = A; (F as any) <= (m as any); F++) (x as any)[2] += ((((((this as any).grid as any)[F] as any)[(R as any) + (1 as any)] as any).length as any) + (((((this as any).grid as any)[F] as any)[R] as any).length as any) as any) - (1 as any);
          if ((A as any) > (0 as any)) for (var F: any = C; (F as any) <= (R as any); F++) (x as any)[3] += ((((((this as any).grid as any)[(A as any) - (1 as any)] as any)[F] as any).length as any) + (((((this as any).grid as any)[A] as any)[F] as any).length as any) as any) - (1 as any);
          for (var U: any = (v as any).MAX_VALUE, P: any, _: any, X: any = 0; (X as any) < ((x as any).length as any); X++) ((x as any)[X] as any) < (U as any) ? (U = (x as any)[X], P = 1, _ = X) : ((x as any)[X] as any) == (U as any) && P++;
          if ((P as any) == (3 as any) && (U as any) == (0 as any)) ((x as any)[0] as any) == (0 as any) && ((x as any)[1] as any) == (0 as any) && ((x as any)[2] as any) == (0 as any) ? f = 1 : ((x as any)[0] as any) == (0 as any) && ((x as any)[1] as any) == (0 as any) && ((x as any)[3] as any) == (0 as any) ? f = 0 : ((x as any)[0] as any) == (0 as any) && ((x as any)[2] as any) == (0 as any) && ((x as any)[3] as any) == (0 as any) ? f = 3 : ((x as any)[1] as any) == (0 as any) && ((x as any)[2] as any) == (0 as any) && ((x as any)[3] as any) == (0 as any) && (f = 2);else if ((P as any) == (2 as any) && (U as any) == (0 as any)) {
            var H: any = ((Math as any).floor as any)((((Math as any).random as any)() as any) * (2 as any));
            ((x as any)[0] as any) == (0 as any) && ((x as any)[1] as any) == (0 as any) ? (H as any) == (0 as any) ? f = 0 : f = 1 : ((x as any)[0] as any) == (0 as any) && ((x as any)[2] as any) == (0 as any) ? (H as any) == (0 as any) ? f = 0 : f = 2 : ((x as any)[0] as any) == (0 as any) && ((x as any)[3] as any) == (0 as any) ? (H as any) == (0 as any) ? f = 0 : f = 3 : ((x as any)[1] as any) == (0 as any) && ((x as any)[2] as any) == (0 as any) ? (H as any) == (0 as any) ? f = 1 : f = 2 : ((x as any)[1] as any) == (0 as any) && ((x as any)[3] as any) == (0 as any) ? (H as any) == (0 as any) ? f = 1 : f = 3 : (H as any) == (0 as any) ? f = 2 : f = 3;
          } else if ((P as any) == (4 as any) && (U as any) == (0 as any)) {
            var H: any = ((Math as any).floor as any)((((Math as any).random as any)() as any) * (4 as any));
            f = H;
          } else f = _;
          (f as any) == (0 as any) ? ((E as any).setCenter as any)(((c as any).getCenterX as any)(), (((((c as any).getCenterY as any)() as any) - ((((c as any).getHeight as any)() as any) / (2 as any) as any) as any) - ((d as any).DEFAULT_EDGE_LENGTH as any) as any) - ((((E as any).getHeight as any)() as any) / (2 as any) as any)) : (f as any) == (1 as any) ? ((E as any).setCenter as any)((((((c as any).getCenterX as any)() as any) + ((((c as any).getWidth as any)() as any) / (2 as any) as any) as any) + ((d as any).DEFAULT_EDGE_LENGTH as any) as any) + ((((E as any).getWidth as any)() as any) / (2 as any) as any), ((c as any).getCenterY as any)()) : (f as any) == (2 as any) ? ((E as any).setCenter as any)(((c as any).getCenterX as any)(), (((((c as any).getCenterY as any)() as any) + ((((c as any).getHeight as any)() as any) / (2 as any) as any) as any) + ((d as any).DEFAULT_EDGE_LENGTH as any) as any) + ((((E as any).getHeight as any)() as any) / (2 as any) as any)) : ((E as any).setCenter as any)((((((c as any).getCenterX as any)() as any) - ((((c as any).getWidth as any)() as any) / (2 as any) as any) as any) - ((d as any).DEFAULT_EDGE_LENGTH as any) as any) - ((((E as any).getWidth as any)() as any) / (2 as any) as any), ((c as any).getCenterY as any)());
        }, (I as any).exports = y;
      }, function (this: any, I: any, L: any, o: any): any {
        var e: any = {};
        (e as any).layoutBase = (o as any)(0), (e as any).CoSEConstants = (o as any)(1), (e as any).CoSEEdge = (o as any)(2), (e as any).CoSEGraph = (o as any)(3), (e as any).CoSEGraphManager = (o as any)(4), (e as any).CoSELayout = (o as any)(6), (e as any).CoSENode = (o as any)(5), (I as any).exports = e;
      }]);
    });
  } as any)($)), ($ as any).exports;
}
var dt: any = (Z as any).exports,
  J: any;
function vt(this: any): any {
  return J || (J = 1, (function (this: any, G: any, b: any): any {
    (function (this: any, I: any, L: any): any {
      (G as any).exports = (L as any)((pt as any)());
    } as any)(dt, function (this: any, N: any): any {
      return (function (this: any, I: any): any {
        var L: any = {};
        function o(this: any, e: any): any {
          if ((L as any)[e]) return ((L as any)[e] as any).exports;
          var t: any = (L as any)[e] = {
            i: e,
            l: !1,
            exports: {}
          };
          return (((I as any)[e] as any).call as any)((t as any).exports, t, (t as any).exports, o), (t as any).l = !0, (t as any).exports;
        }
        return (o as any).m = I, (o as any).c = L, (o as any).i = function (this: any, e: any): any {
          return e;
        }, (o as any).d = function (this: any, e: any, t: any, i: any): any {
          ((o as any).o as any)(e, t) || ((Object as any).defineProperty as any)(e, t, {
            configurable: !1,
            enumerable: !0,
            get: i
          });
        }, (o as any).n = function (this: any, e: any): any {
          var t: any = e && (e as any).__esModule ? function (this: any): any {
            return (e as any).default;
          } : function (this: any): any {
            return e;
          };
          return ((o as any).d as any)(t, "a", t), t;
        }, (o as any).o = function (this: any, e: any, t: any): any {
          return ((((Object as any).prototype as any).hasOwnProperty as any).call as any)(e, t);
        }, (o as any).p = "", (o as any)((o as any).s = 1);
      } as any)([function (this: any, I: any, L: any): any {
        (I as any).exports = N;
      }, function (this: any, I: any, L: any, o: any): any {
        var e: any = (((o as any)(0) as any).layoutBase as any).LayoutConstants,
          t: any = (((o as any)(0) as any).layoutBase as any).FDLayoutConstants,
          i: any = ((o as any)(0) as any).CoSEConstants,
          l: any = ((o as any)(0) as any).CoSELayout,
          g: any = ((o as any)(0) as any).CoSENode,
          n: any = (((o as any)(0) as any).layoutBase as any).PointD,
          d: any = (((o as any)(0) as any).layoutBase as any).DimensionD,
          r: any = {
            ready: function (this: any): any {},
            stop: function (this: any): any {},
            quality: "default",
            nodeDimensionsIncludeLabels: !1,
            refresh: 30,
            fit: !0,
            padding: 10,
            randomize: !0,
            nodeRepulsion: 4500,
            idealEdgeLength: 50,
            edgeElasticity: .45,
            nestingFactor: .1,
            gravity: .25,
            numIter: 2500,
            tile: !0,
            animate: "end",
            animationDuration: 500,
            tilingPaddingVertical: 10,
            tilingPaddingHorizontal: 10,
            gravityRangeCompound: 1.5,
            gravityCompound: 1,
            gravityRange: 3.8,
            initialEnergyOnIncremental: .5
          };
        function h(this: any, D: any, u: any): any {
          var y: any;
          var T: any = {};
          for (y in D) (T as any)[y] = (D as any)[y];
          for (y in u) (T as any)[y] = (u as any)[y];
          return T;
        }
        function a(this: any, D: any): any {
          (this as any).options = (h as any)(r, D), (p as any)((this as any).options);
        }
        var p: any = function (this: any, u: any): any {
          ((u as any).nodeRepulsion as any) != (null as any) && ((i as any).DEFAULT_REPULSION_STRENGTH = (t as any).DEFAULT_REPULSION_STRENGTH = (u as any).nodeRepulsion), ((u as any).idealEdgeLength as any) != (null as any) && ((i as any).DEFAULT_EDGE_LENGTH = (t as any).DEFAULT_EDGE_LENGTH = (u as any).idealEdgeLength), ((u as any).edgeElasticity as any) != (null as any) && ((i as any).DEFAULT_SPRING_STRENGTH = (t as any).DEFAULT_SPRING_STRENGTH = (u as any).edgeElasticity), ((u as any).nestingFactor as any) != (null as any) && ((i as any).PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = (t as any).PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = (u as any).nestingFactor), ((u as any).gravity as any) != (null as any) && ((i as any).DEFAULT_GRAVITY_STRENGTH = (t as any).DEFAULT_GRAVITY_STRENGTH = (u as any).gravity), ((u as any).numIter as any) != (null as any) && ((i as any).MAX_ITERATIONS = (t as any).MAX_ITERATIONS = (u as any).numIter), ((u as any).gravityRange as any) != (null as any) && ((i as any).DEFAULT_GRAVITY_RANGE_FACTOR = (t as any).DEFAULT_GRAVITY_RANGE_FACTOR = (u as any).gravityRange), ((u as any).gravityCompound as any) != (null as any) && ((i as any).DEFAULT_COMPOUND_GRAVITY_STRENGTH = (t as any).DEFAULT_COMPOUND_GRAVITY_STRENGTH = (u as any).gravityCompound), ((u as any).gravityRangeCompound as any) != (null as any) && ((i as any).DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = (t as any).DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = (u as any).gravityRangeCompound), ((u as any).initialEnergyOnIncremental as any) != (null as any) && ((i as any).DEFAULT_COOLING_FACTOR_INCREMENTAL = (t as any).DEFAULT_COOLING_FACTOR_INCREMENTAL = (u as any).initialEnergyOnIncremental), ((u as any).quality as any) == ("draft" as any) ? (e as any).QUALITY = 0 : ((u as any).quality as any) == ("proof" as any) ? (e as any).QUALITY = 2 : (e as any).QUALITY = 1, (i as any).NODE_DIMENSIONS_INCLUDE_LABELS = (t as any).NODE_DIMENSIONS_INCLUDE_LABELS = (e as any).NODE_DIMENSIONS_INCLUDE_LABELS = (u as any).nodeDimensionsIncludeLabels, (i as any).DEFAULT_INCREMENTAL = (t as any).DEFAULT_INCREMENTAL = (e as any).DEFAULT_INCREMENTAL = !(u as any).randomize, (i as any).ANIMATE = (t as any).ANIMATE = (e as any).ANIMATE = (u as any).animate, (i as any).TILE = (u as any).tile, (i as any).TILING_PADDING_VERTICAL = (typeof (u as any).tilingPaddingVertical as any) == ("function" as any) ? (((u as any).tilingPaddingVertical as any).call as any)() : (u as any).tilingPaddingVertical, (i as any).TILING_PADDING_HORIZONTAL = (typeof (u as any).tilingPaddingHorizontal as any) == ("function" as any) ? (((u as any).tilingPaddingHorizontal as any).call as any)() : (u as any).tilingPaddingHorizontal;
        };
        ((a as any).prototype as any).run = function (this: any): any {
          var D: any,
            u: any,
            T: any = (this as any).options;
          (this as any).idToLNode = {};
          var y: any = (this as any).layout = new (l as any)(),
            O: any = this;
          (O as any).stopped = !1, (this as any).cy = ((this as any).options as any).cy, (((this as any).cy as any).trigger as any)({
            type: "layoutstart",
            layout: this
          });
          var s: any = ((y as any).newGraphManager as any)();
          (this as any).gm = s;
          var f: any = ((((this as any).options as any).eles as any).nodes as any)(),
            c: any = ((((this as any).options as any).eles as any).edges as any)();
          (this as any).root = ((s as any).addRoot as any)(), ((this as any).processChildrenList as any)((this as any).root, ((this as any).getTopMostNodes as any)(f), y);
          for (var E: any = 0; (E as any) < ((c as any).length as any); E++) {
            var A: any = (c as any)[E],
              m: any = ((this as any).idToLNode as any)[((A as any).data as any)("source")],
              C: any = ((this as any).idToLNode as any)[((A as any).data as any)("target")];
            if ((m as any) !== (C as any) && ((((m as any).getEdgesBetween as any)(C) as any).length as any) == (0 as any)) {
              var R: any = ((s as any).add as any)(((y as any).newEdge as any)(), m, C);
              (R as any).id = ((A as any).id as any)();
            }
          }
          var M: any = function (this: any, w: any, x: any): any {
              (typeof w as any) == ("number" as any) && (w = x);
              var F: any = ((w as any).data as any)("id"),
                U: any = ((O as any).idToLNode as any)[F];
              return {
                x: ((((U as any).getRect as any)() as any).getCenterX as any)(),
                y: ((((U as any).getRect as any)() as any).getCenterY as any)()
              };
            },
            S: any = function Y(this: any): any {
              for (var w: any = function (this: any): any {
                  (T as any).fit && (((T as any).cy as any).fit as any)((T as any).eles, (T as any).padding), D || (D = !0, (((O as any).cy as any).one as any)("layoutready", (T as any).ready), (((O as any).cy as any).trigger as any)({
                    type: "layoutready",
                    layout: O
                  }));
                }, x: any = ((O as any).options as any).refresh, F: any, U: any = 0; (U as any) < (x as any) && !F; U++) F = (O as any).stopped || (((O as any).layout as any).tick as any)();
              if (F) {
                ((y as any).checkLayoutSuccess as any)() && !(y as any).isSubLayout && ((y as any).doPostLayout as any)(), (y as any).tilingPostLayout && ((y as any).tilingPostLayout as any)(), (y as any).isLayoutFinished = !0, ((((((O as any).options as any).eles as any).nodes as any)() as any).positions as any)(M), (w as any)(), (((O as any).cy as any).one as any)("layoutstop", ((O as any).options as any).stop), (((O as any).cy as any).trigger as any)({
                  type: "layoutstop",
                  layout: O
                }), u && (cancelAnimationFrame as any)(u), D = !1;
                return;
              }
              var P: any = (((O as any).layout as any).getPositionsData as any)();
              (((((T as any).eles as any).nodes as any)() as any).positions as any)(function (this: any, _: any, X: any): any {
                if ((typeof _ as any) == ("number" as any) && (_ = X), !((_ as any).isParent as any)()) {
                  for (var H: any = ((_ as any).id as any)(), W: any = (P as any)[H], B: any = _; (W as any) == (null as any) && (W = (P as any)[((B as any).data as any)("parent")] || (P as any)[("DummyCompound_" as any) + (((B as any).data as any)("parent") as any)], (P as any)[H] = W, B = (((B as any).parent as any)() as any)[0], (B as any) != (null as any)););
                  return (W as any) != (null as any) ? {
                    x: (W as any).x,
                    y: (W as any).y
                  } : {
                    x: ((_ as any).position as any)("x"),
                    y: ((_ as any).position as any)("y")
                  };
                }
              }), (w as any)(), u = (requestAnimationFrame as any)(Y);
            };
          return ((y as any).addListener as any)("layoutstarted", function (this: any): any {
            (((O as any).options as any).animate as any) === ("during" as any) && (u = (requestAnimationFrame as any)(S));
          }), ((y as any).runLayout as any)(), (((this as any).options as any).animate as any) !== ("during" as any) && (((((((((O as any).options as any).eles as any).nodes as any)() as any).not as any)(":parent") as any).layoutPositions as any)(O, (O as any).options, M), D = !1), this;
        }, ((a as any).prototype as any).getTopMostNodes = function (this: any, D: any): any {
          for (var u: any = {}, T: any = 0; (T as any) < ((D as any).length as any); T++) (u as any)[(((D as any)[T] as any).id as any)()] = !0;
          var y: any = ((D as any).filter as any)(function (this: any, O: any, s: any): any {
            (typeof O as any) == ("number" as any) && (O = s);
            for (var f: any = (((O as any).parent as any)() as any)[0]; (f as any) != (null as any);) {
              if ((u as any)[((f as any).id as any)()]) return !1;
              f = (((f as any).parent as any)() as any)[0];
            }
            return !0;
          });
          return y;
        }, ((a as any).prototype as any).processChildrenList = function (this: any, D: any, u: any, T: any): any {
          for (var y: any = (u as any).length, O: any = 0; (O as any) < (y as any); O++) {
            var s: any = (u as any)[O],
              f: any = ((s as any).children as any)(),
              c: any,
              E: any = ((s as any).layoutDimensions as any)({
                nodeDimensionsIncludeLabels: ((this as any).options as any).nodeDimensionsIncludeLabels
              });
            if ((((s as any).outerWidth as any)() as any) != (null as any) && (((s as any).outerHeight as any)() as any) != (null as any) ? c = ((D as any).add as any)(new (g as any)((T as any).graphManager, new (n as any)((((s as any).position as any)("x") as any) - (((E as any).w as any) / (2 as any) as any), (((s as any).position as any)("y") as any) - (((E as any).h as any) / (2 as any) as any)), new (d as any)((parseFloat as any)((E as any).w), (parseFloat as any)((E as any).h)))) : c = ((D as any).add as any)(new (g as any)((this as any).graphManager)), (c as any).id = ((s as any).data as any)("id"), (c as any).paddingLeft = (parseInt as any)(((s as any).css as any)("padding")), (c as any).paddingTop = (parseInt as any)(((s as any).css as any)("padding")), (c as any).paddingRight = (parseInt as any)(((s as any).css as any)("padding")), (c as any).paddingBottom = (parseInt as any)(((s as any).css as any)("padding")), ((this as any).options as any).nodeDimensionsIncludeLabels && ((s as any).isParent as any)()) {
              var A: any = (((s as any).boundingBox as any)({
                  includeLabels: !0,
                  includeNodes: !1
                }) as any).w,
                m: any = (((s as any).boundingBox as any)({
                  includeLabels: !0,
                  includeNodes: !1
                }) as any).h,
                C: any = ((s as any).css as any)("text-halign");
              (c as any).labelWidth = A, (c as any).labelHeight = m, (c as any).labelPos = C;
            }
            if (((this as any).idToLNode as any)[((s as any).data as any)("id")] = c, (isNaN as any)(((c as any).rect as any).x) && (((c as any).rect as any).x = 0), (isNaN as any)(((c as any).rect as any).y) && (((c as any).rect as any).y = 0), (f as any) != (null as any) && ((f as any).length as any) > (0 as any)) {
              var R: any;
              R = ((((T as any).getGraphManager as any)() as any).add as any)(((T as any).newGraph as any)(), c), ((this as any).processChildrenList as any)(R, f, T);
            }
          }
        }, ((a as any).prototype as any).stop = function (this: any): any {
          return (this as any).stopped = !0, this;
        };
        var v: any = function (this: any, u: any): any {
          (u as any)("layout", "cose-bilkent", a);
        };
        (typeof cytoscape as any) < ("u" as any) && (v as any)(cytoscape), (I as any).exports = v;
      }]);
    });
  } as any)(Z)), (Z as any).exports;
}
var yt: any = (vt as any)();
const Et: any = (gt as any)(yt);
((tt as any).use as any)(Et);
function et(this: any, G: any, b: any): any {
  ((G as any).forEach as any)((N: any): any => {
    const I: any = {
      id: (N as any).id,
      labelText: (N as any).label,
      height: (N as any).height,
      width: (N as any).width,
      padding: (N as any).padding ?? 0
    };
    ((((Object as any).keys as any)(N) as any).forEach as any)((L: any): any => {
      ((["id", "label", "height", "width", "padding", "x", "y"] as any).includes as any)(L) || ((I as any)[L] = (N as any)[L]);
    }), ((b as any).add as any)({
      group: "nodes",
      data: I,
      position: {
        x: (N as any).x ?? 0,
        y: (N as any).y ?? 0
      }
    });
  });
}
(V as any)(et, "addNodes");
function rt(this: any, G: any, b: any): any {
  ((G as any).forEach as any)((N: any): any => {
    const I: any = {
      id: (N as any).id,
      source: (N as any).start,
      target: (N as any).end
    };
    ((((Object as any).keys as any)(N) as any).forEach as any)((L: any): any => {
      ((["id", "start", "end"] as any).includes as any)(L) || ((I as any)[L] = (N as any)[L]);
    }), ((b as any).add as any)({
      group: "edges",
      data: I
    });
  });
}
(V as any)(rt, "addEdges");
function it(this: any, G: any): any {
  return new (Promise as any)((b: any): any => {
    const N: any = (((((((lt as any)("body") as any).append as any)("div") as any).attr as any)("id", "cy") as any).attr as any)("style", "display:none"),
      I: any = (tt as any)({
        container: ((document as any).getElementById as any)("cy"),
        style: [{
          selector: "edge",
          style: {
            "curve-style": "bezier"
          }
        }]
      });
    ((N as any).remove as any)(), (et as any)((G as any).nodes, I), (rt as any)((G as any).edges, I), ((((I as any).nodes as any)() as any).forEach as any)(function (this: any, o: any): any {
      (o as any).layoutDimensions = (): any => {
        const e: any = ((o as any).data as any)();
        return {
          w: (e as any).width,
          h: (e as any).height
        };
      };
    });
    const L: any = {
      name: "cose-bilkent",
      quality: "proof",
      styleEnabled: !1,
      animate: !1
    };
    ((((I as any).layout as any)(L) as any).run as any)(), ((I as any).ready as any)((o: any): any => {
      ((k as any).info as any)("Cytoscape ready", o), (b as any)(I);
    });
  });
}
(V as any)(it, "createCytoscapeInstance");
function nt(this: any, G: any): any {
  return ((((G as any).nodes as any)() as any).map as any)((b: any): any => {
    const N: any = ((b as any).data as any)(),
      I: any = ((b as any).position as any)(),
      L: any = {
        id: (N as any).id,
        x: (I as any).x,
        y: (I as any).y
      };
    return ((((Object as any).keys as any)(N) as any).forEach as any)((o: any): any => {
      (o as any) !== ("id" as any) && ((L as any)[o] = (N as any)[o]);
    }), L;
  });
}
(V as any)(nt, "extractPositionedNodes");
function ot(this: any, G: any): any {
  return ((((G as any).edges as any)() as any).map as any)((b: any): any => {
    const N: any = ((b as any).data as any)(),
      I: any = ((b as any)._private as any).rscratch,
      L: any = {
        id: (N as any).id,
        source: (N as any).source,
        target: (N as any).target,
        startX: (I as any).startX,
        startY: (I as any).startY,
        midX: (I as any).midX,
        midY: (I as any).midY,
        endX: (I as any).endX,
        endY: (I as any).endY
      };
    return ((((Object as any).keys as any)(N) as any).forEach as any)((o: any): any => {
      ((["id", "source", "target"] as any).includes as any)(o) || ((L as any)[o] = (N as any)[o]);
    }), L;
  });
}
(V as any)(ot, "extractPositionedEdges");
async function st(this: any, G: any, b: any): Promise<any> {
  ((k as any).debug as any)("Starting cose-bilkent layout algorithm");
  try {
    (at as any)(G);
    const N: any = await (it as any)(G),
      I: any = (nt as any)(N),
      L: any = (ot as any)(N);
    return ((k as any).debug as any)(`Layout completed: ${(I as any).length} nodes, ${(L as any).length} edges`), {
      nodes: I,
      edges: L
    };
  } catch (N: any) {
    throw ((k as any).error as any)("Error in cose-bilkent layout algorithm:", N), N;
  }
}
(V as any)(st, "executeCoseBilkentLayout");
function at(this: any, G: any): any {
  if (!G) throw new (Error as any)("Layout data is required");
  if (!(G as any).config) throw new (Error as any)("Configuration is required in layout data");
  if (!(G as any).rootNode) throw new (Error as any)("Root node is required");
  if (!(G as any).nodes || !((Array as any).isArray as any)((G as any).nodes)) throw new (Error as any)("No nodes found in layout data");
  if (!((Array as any).isArray as any)((G as any).edges)) throw new (Error as any)("Edges array is required in layout data");
  return !0;
}
(V as any)(at, "validateLayoutData");
var Lt: any = (V as any)(async (G: any, b: any, {
    insertCluster: N,
    insertEdge: I,
    insertEdgeLabel: L,
    insertMarkers: o,
    insertNode: e,
    log: t,
    positionEdgeLabel: i
  }: any, {
    algorithm: l
  }: any): Promise<any> => {
    const g: any = {},
      n: any = {},
      d: any = ((b as any).select as any)("g");
    (o as any)(d, (G as any).markers, (G as any).type, (G as any).diagramId);
    const r: any = ((((d as any).insert as any)("g") as any).attr as any)("class", "subgraphs"),
      h: any = ((((d as any).insert as any)("g") as any).attr as any)("class", "edgePaths"),
      a: any = ((((d as any).insert as any)("g") as any).attr as any)("class", "edgeLabels"),
      p: any = ((((d as any).insert as any)("g") as any).attr as any)("class", "nodes");
    ((t as any).debug as any)("Inserting nodes into DOM for dimension calculation"), await ((Promise as any).all as any)((((G as any).nodes as any).map as any)(async (u: any): Promise<any> => {
      if ((u as any).isGroup) {
        const T: any = {
          ...u
        };
        (n as any)[(u as any).id] = T, (g as any)[(u as any).id] = T, await (N as any)(r, u);
      } else {
        const T: any = {
          ...u
        };
        (g as any)[(u as any).id] = T;
        const y: any = await (e as any)(p, u, {
            config: (G as any).config,
            dir: (G as any).direction || "TB"
          }),
          O: any = ((((y as any).node as any)() as any).getBBox as any)();
        (T as any).width = (O as any).width, (T as any).height = (O as any).height, (T as any).domId = y, ((t as any).debug as any)(`Node ${(u as any).id} dimensions: ${(O as any).width}x${(O as any).height}`);
      }
    })), ((t as any).debug as any)("Running cose-bilkent layout algorithm");
    const v: any = {
        ...G,
        nodes: (((G as any).nodes as any).map as any)((u: any): any => {
          const T: any = (g as any)[(u as any).id];
          return {
            ...u,
            width: (T as any).width,
            height: (T as any).height
          };
        })
      },
      D: any = await (st as any)(v, (G as any).config);
    ((t as any).debug as any)("Positioning nodes based on layout results"), (((D as any).nodes as any).forEach as any)((u: any): any => {
      const T: any = (g as any)[(u as any).id];
      T?.domId && ((((T as any).domId as any).attr as any)("transform", `translate(${(u as any).x}, ${(u as any).y})`), (T as any).x = (u as any).x, (T as any).y = (u as any).y, ((t as any).debug as any)(`Positioned node ${(T as any).id} at center (${(u as any).x}, ${(u as any).y})`));
    }), (((D as any).edges as any).forEach as any)((u: any): any => {
      const T: any = (((G as any).edges as any).find as any)((y: any): any => ((y as any).id as any) === ((u as any).id as any));
      T && ((T as any).points = [{
        x: (u as any).startX,
        y: (u as any).startY
      }, {
        x: (u as any).midX,
        y: (u as any).midY
      }, {
        x: (u as any).endX,
        y: (u as any).endY
      }]);
    }), ((t as any).debug as any)("Inserting and positioning edges"), await ((Promise as any).all as any)((((G as any).edges as any).map as any)(async (u: any): Promise<any> => {
      await (L as any)(a, u);
      const T: any = (g as any)[(u as any).start ?? ""],
        y: any = (g as any)[(u as any).end ?? ""];
      if (T && y) {
        const O: any = (((D as any).edges as any).find as any)((s: any): any => ((s as any).id as any) === ((u as any).id as any));
        if (O) {
          ((t as any).debug as any)("APA01 positionedEdge", O);
          const s: any = {
              ...u
            },
            f: any = (I as any)(h, s, n, (G as any).type, T, y, (G as any).diagramId);
          (i as any)(s, f);
        } else {
          const s: any = {
              ...u,
              points: [{
                x: (T as any).x || 0,
                y: (T as any).y || 0
              }, {
                x: (y as any).x || 0,
                y: (y as any).y || 0
              }]
            },
            f: any = (I as any)(h, s, n, (G as any).type, T, y, (G as any).diagramId);
          (i as any)(s, f);
        }
      }
    })), ((t as any).debug as any)("Cose-bilkent rendering completed");
  }, "render"),
  Nt: any = Lt;
export { Nt as render };
//# debugId=c1ea1496-850f-48a7-ae20-d9c1c6153ec4
