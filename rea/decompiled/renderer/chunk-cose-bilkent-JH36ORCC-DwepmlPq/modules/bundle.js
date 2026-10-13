import { _, l, d } from "./chunk-mermaid.core-B9Iu5CoE.js";
import { c } from "./chunk-cytoscape.esm-CY9iOoO4.js";
import { a4 } from "./index.eager-vendor-Qbf9YA6n.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "c1ea1496-850f-48a7-ae20-d9c1c6153ec4";
            e._sentryDebugIdIdentifier = "sentry-dbid-c1ea1496-850f-48a7-ae20-d9c1c6153ec4";
        }
    } catch (e) {}
})();
const Z = {
    exports: {}
};
const $ = {
    exports: {}
};
const Q = {
    exports: {}
};
const Q_exports = Q.exports;
let j;
function ft() {
    if (!j) {
        j = 1;
        ((G, b)=>{
            ((Q_exports_1, L)=>{
                G.exports = L();
            })(Q_exports, ()=>((N)=>{
                    const I = {};
                    function L(o) {
                        if (I[o]) {
                            return I[o].exports;
                        }
                        const e = I[o] = {
                            i: o,
                            l: false,
                            exports: {}
                        };
                        N[o].call(e.exports, e, e.exports, L);
                        e.l = true;
                        return e.exports;
                    }
                    L.m = N;
                    L.c = I;
                    L.i = (o)=>o;
                    L.d = (o, e, t)=>{
                        if (!L.o(o, e)) {
                            Object.defineProperty(o, e, {
                                configurable: false,
                                enumerable: true,
                                get: t
                            });
                        }
                    };
                    L.n = (o)=>{
                        const e = o && o.__esModule ? ()=>o.default : ()=>o;
                        L.d(e, "a", e);
                        return e;
                    };
                    L.o = (o, e)=>Object.prototype.hasOwnProperty.call(o, e);
                    L.p = "";
                    return L(L.s = 26);
                })([
                    (N, I, L)=>{
                        function o() {}
                        o.QUALITY = 1;
                        o.DEFAULT_CREATE_BENDS_AS_NEEDED = false;
                        o.DEFAULT_INCREMENTAL = false;
                        o.DEFAULT_ANIMATION_ON_LAYOUT = true;
                        o.DEFAULT_ANIMATION_DURING_LAYOUT = false;
                        o.DEFAULT_ANIMATION_PERIOD = 50;
                        o.DEFAULT_UNIFORM_LEAF_NODE_SIZES = false;
                        o.DEFAULT_GRAPH_MARGIN = 15;
                        o.NODE_DIMENSIONS_INCLUDE_LABELS = false;
                        o.SIMPLE_NODE_SIZE = 40;
                        o.SIMPLE_NODE_HALF_SIZE = o.SIMPLE_NODE_SIZE / 2;
                        o.EMPTY_COMPOUND_NODE_SIZE = 40;
                        o.MIN_EDGE_LENGTH = 1;
                        o.WORLD_BOUNDARY = 1000000;
                        o.INITIAL_WORLD_BOUNDARY = o.WORLD_BOUNDARY / 1000;
                        o.WORLD_CENTER_X = 1200;
                        o.WORLD_CENTER_Y = 900;
                        N.exports = o;
                    },
                    function(N, I, L) {
                        const o = L(2);
                        const e = L(8);
                        const t = L(9);
                        class i extends o {
                            constructor(g, n, d){
                                super(d);
                                this.isOverlapingSourceAndTarget = false;
                                this.vGraphObject = d;
                                this.bendpoints = [];
                                this.source = g;
                                this.target = n;
                            }
                            getSource() {
                                return this.source;
                            }
                            getTarget() {
                                return this.target;
                            }
                            isInterGraph() {
                                return this.isInterGraph;
                            }
                            getLength() {
                                return this.length;
                            }
                            isOverlapingSourceAndTarget() {
                                return this.isOverlapingSourceAndTarget;
                            }
                            getBendpoints() {
                                return this.bendpoints;
                            }
                            getLca() {
                                return this.lca;
                            }
                            getSourceInLca() {
                                return this.sourceInLca;
                            }
                            getTargetInLca() {
                                return this.targetInLca;
                            }
                            getOtherEnd(g) {
                                if (this.source === g) {
                                    return this.target;
                                }
                                if (this.target === g) {
                                    return this.source;
                                }
                                throw "Node is not incident with this edge";
                            }
                            getOtherEndInGraph(g, n) {
                                let d = this.getOtherEnd(g);
                                const r = n.getGraphManager().getRoot();
                                while(true){
                                    if (d.getOwner() == n) {
                                        return d;
                                    }
                                    if (d.getOwner() == r) {
                                        break;
                                    }
                                    d = d.getOwner().getParent();
                                }
                                return null;
                            }
                            updateLength() {
                                const g = new Array(4);
                                this.isOverlapingSourceAndTarget = e.getIntersection(this.target.getRect(), this.source.getRect(), g);
                                if (!this.isOverlapingSourceAndTarget) {
                                    this.lengthX = g[0] - g[2];
                                    this.lengthY = g[1] - g[3];
                                    if (Math.abs(this.lengthX) < 1) {
                                        this.lengthX = t.sign(this.lengthX);
                                    }
                                    if (Math.abs(this.lengthY) < 1) {
                                        this.lengthY = t.sign(this.lengthY);
                                    }
                                    this.length = Math.sqrt(this.lengthX * this.lengthX + this.lengthY * this.lengthY);
                                }
                            }
                            updateLengthSimple() {
                                this.lengthX = this.target.getCenterX() - this.source.getCenterX();
                                this.lengthY = this.target.getCenterY() - this.source.getCenterY();
                                if (Math.abs(this.lengthX) < 1) {
                                    this.lengthX = t.sign(this.lengthX);
                                }
                                if (Math.abs(this.lengthY) < 1) {
                                    this.lengthY = t.sign(this.lengthY);
                                }
                                this.length = Math.sqrt(this.lengthX * this.lengthX + this.lengthY * this.lengthY);
                            }
                        }
                        for(const l in o){
                            i[l] = o[l];
                        }
                        N.exports = i;
                    },
                    (N, I, L)=>{
                        function o(e) {
                            this.vGraphObject = e;
                        }
                        N.exports = o;
                    },
                    function(N, I, L) {
                        const o = L(2);
                        const e = L(10);
                        const t = L(13);
                        const i = L(0);
                        const l = L(16);
                        const g = L(4);
                        class n extends o {
                            constructor(r, h, a, p){
                                if (a == null && p == null) {
                                    p = h;
                                }
                                super(p);
                                if (r.graphManager != null) {
                                    r = r.graphManager;
                                }
                                this.estimatedSize = e.MIN_VALUE;
                                this.inclusionTreeDepth = e.MAX_VALUE;
                                this.vGraphObject = p;
                                this.edges = [];
                                this.graphManager = r;
                                if (a != null && h != null) {
                                    this.rect = new t(h.x, h.y, a.width, a.height);
                                } else {
                                    this.rect = new t;
                                }
                            }
                            getEdges() {
                                return this.edges;
                            }
                            getChild() {
                                return this.child;
                            }
                            getOwner() {
                                return this.owner;
                            }
                            getWidth() {
                                return this.rect.width;
                            }
                            setWidth(r) {
                                this.rect.width = r;
                            }
                            getHeight() {
                                return this.rect.height;
                            }
                            setHeight(r) {
                                this.rect.height = r;
                            }
                            getCenterX() {
                                return this.rect.x + this.rect.width / 2;
                            }
                            getCenterY() {
                                return this.rect.y + this.rect.height / 2;
                            }
                            getCenter() {
                                return new g(this.rect.x + this.rect.width / 2, this.rect.y + this.rect.height / 2);
                            }
                            getLocation() {
                                return new g(this.rect.x, this.rect.y);
                            }
                            getRect() {
                                return this.rect;
                            }
                            getDiagonal() {
                                return Math.sqrt(this.rect.width * this.rect.width + this.rect.height * this.rect.height);
                            }
                            getHalfTheDiagonal() {
                                return Math.sqrt(this.rect.height * this.rect.height + this.rect.width * this.rect.width) / 2;
                            }
                            setRect(r, h) {
                                this.rect.x = r.x;
                                this.rect.y = r.y;
                                this.rect.width = h.width;
                                this.rect.height = h.height;
                            }
                            setCenter(r, h) {
                                this.rect.x = r - this.rect.width / 2;
                                this.rect.y = h - this.rect.height / 2;
                            }
                            setLocation(r, h) {
                                this.rect.x = r;
                                this.rect.y = h;
                            }
                            moveBy(r, h) {
                                this.rect.x += r;
                                this.rect.y += h;
                            }
                            getEdgeListToNode(r) {
                                const h = [];
                                const a = this;
                                a.edges.forEach((p)=>{
                                    if (p.target == r) {
                                        if (p.source != a) {
                                            throw "Incorrect edge source!";
                                        }
                                        h.push(p);
                                    }
                                });
                                return h;
                            }
                            getEdgesBetween(r) {
                                const h = [];
                                const a = this;
                                a.edges.forEach((p)=>{
                                    if (!(p.source == a || p.target == a)) {
                                        throw "Incorrect edge source and/or target";
                                    }
                                    if (p.target == r || p.source == r) {
                                        h.push(p);
                                    }
                                });
                                return h;
                            }
                            getNeighborsList() {
                                const r = new Set;
                                const h = this;
                                h.edges.forEach((a)=>{
                                    if (a.source == h) {
                                        r.add(a.target);
                                    } else {
                                        if (a.target != h) {
                                            throw "Incorrect incidency!";
                                        }
                                        r.add(a.source);
                                    }
                                });
                                return r;
                            }
                            withChildren() {
                                const r = new Set;
                                let h;
                                let a;
                                r.add(this);
                                if (this.child != null) {
                                    for(let p = this.child.getNodes(), v = 0; v < p.length; v++){
                                        h = p[v];
                                        a = h.withChildren();
                                        a.forEach((D)=>{
                                            r.add(D);
                                        });
                                    }
                                }
                                return r;
                            }
                            getNoOfChildren() {
                                let r = 0;
                                let h;
                                if (this.child == null) {
                                    r = 1;
                                } else {
                                    for(let a = this.child.getNodes(), p = 0; p < a.length; p++){
                                        h = a[p];
                                        r += h.getNoOfChildren();
                                    }
                                }
                                if (r == 0) {
                                    r = 1;
                                }
                                return r;
                            }
                            getEstimatedSize() {
                                if (this.estimatedSize == e.MIN_VALUE) {
                                    throw "assert failed";
                                }
                                return this.estimatedSize;
                            }
                            calcEstimatedSize() {
                                if (this.child == null) {
                                    return this.estimatedSize = (this.rect.width + this.rect.height) / 2;
                                }
                                this.estimatedSize = this.child.calcEstimatedSize();
                                this.rect.width = this.estimatedSize;
                                this.rect.height = this.estimatedSize;
                                return this.estimatedSize;
                            }
                            scatter() {
                                let r;
                                let h;
                                const a = -i.INITIAL_WORLD_BOUNDARY;
                                const i_INITIAL_WORLD_BOUNDARY = i.INITIAL_WORLD_BOUNDARY;
                                r = i.WORLD_CENTER_X + l.nextDouble() * (i_INITIAL_WORLD_BOUNDARY - a) + a;
                                const v = -i.INITIAL_WORLD_BOUNDARY;
                                const i_INITIAL_WORLD_BOUNDARY_1 = i.INITIAL_WORLD_BOUNDARY;
                                h = i.WORLD_CENTER_Y + l.nextDouble() * (i_INITIAL_WORLD_BOUNDARY_1 - v) + v;
                                this.rect.x = r;
                                this.rect.y = h;
                            }
                            updateBounds() {
                                if (this.getChild() == null) {
                                    throw "assert failed";
                                }
                                if (this.getChild().getNodes().length != 0) {
                                    const r = this.getChild();
                                    r.updateBounds(true);
                                    this.rect.x = r.getLeft();
                                    this.rect.y = r.getTop();
                                    this.setWidth(r.getRight() - r.getLeft());
                                    this.setHeight(r.getBottom() - r.getTop());
                                    if (i.NODE_DIMENSIONS_INCLUDE_LABELS) {
                                        const h = r.getRight() - r.getLeft();
                                        const a = r.getBottom() - r.getTop();
                                        if (this.labelWidth > h) {
                                            this.rect.x -= (this.labelWidth - h) / 2;
                                            this.setWidth(this.labelWidth);
                                        }
                                        if (this.labelHeight > a) {
                                            if (this.labelPos == "center") {
                                                this.rect.y -= (this.labelHeight - a) / 2;
                                            } else if (this.labelPos == "top") {
                                                this.rect.y -= this.labelHeight - a;
                                            }
                                            this.setHeight(this.labelHeight);
                                        }
                                    }
                                }
                            }
                            getInclusionTreeDepth() {
                                if (this.inclusionTreeDepth == e.MAX_VALUE) {
                                    throw "assert failed";
                                }
                                return this.inclusionTreeDepth;
                            }
                            transform(r) {
                                let h = this.rect.x;
                                if (h > i.WORLD_BOUNDARY) {
                                    h = i.WORLD_BOUNDARY;
                                } else if (h < -i.WORLD_BOUNDARY) {
                                    h = -i.WORLD_BOUNDARY;
                                }
                                let a = this.rect.y;
                                if (a > i.WORLD_BOUNDARY) {
                                    a = i.WORLD_BOUNDARY;
                                } else if (a < -i.WORLD_BOUNDARY) {
                                    a = -i.WORLD_BOUNDARY;
                                }
                                const p = new g(h, a);
                                const v = r.inverseTransformPoint(p);
                                this.setLocation(v.x, v.y);
                            }
                            getLeft() {
                                return this.rect.x;
                            }
                            getRight() {
                                return this.rect.x + this.rect.width;
                            }
                            getTop() {
                                return this.rect.y;
                            }
                            getBottom() {
                                return this.rect.y + this.rect.height;
                            }
                            getParent() {
                                if (this.owner == null) {
                                    return null;
                                }
                                return this.owner.getParent();
                            }
                        }
                        for(const d in o){
                            n[d] = o[d];
                        }
                        N.exports = n;
                    },
                    function(N, I, L) {
                        class o {
                            constructor(e, t){
                                if (e == null && t == null) {
                                    this.x = 0;
                                    this.y = 0;
                                } else {
                                    this.x = e;
                                    this.y = t;
                                }
                            }
                            getX() {
                                return this.x;
                            }
                            getY() {
                                return this.y;
                            }
                            setX(e) {
                                this.x = e;
                            }
                            setY(e) {
                                this.y = e;
                            }
                            getDifference(e) {
                                return new DimensionD(this.x - e.x, this.y - e.y);
                            }
                            getCopy() {
                                return new o(this.x, this.y);
                            }
                            translate(e) {
                                this.x += e.width;
                                this.y += e.height;
                                return this;
                            }
                        }
                        N.exports = o;
                    },
                    function(N, I, L) {
                        const o = L(2);
                        const e = L(10);
                        const t = L(0);
                        const i = L(6);
                        const l = L(3);
                        const g = L(1);
                        const n = L(13);
                        const d = L(12);
                        const r = L(11);
                        class h extends o {
                            constructor(p, v, D){
                                super(D);
                                this.estimatedSize = e.MIN_VALUE;
                                this.margin = t.DEFAULT_GRAPH_MARGIN;
                                this.edges = [];
                                this.nodes = [];
                                this.isConnected = false;
                                this.parent = p;
                                if (v != null && v instanceof i) {
                                    this.graphManager = v;
                                } else if (v != null && v instanceof Layout) {
                                    this.graphManager = v.graphManager;
                                }
                            }
                            getNodes() {
                                return this.nodes;
                            }
                            getEdges() {
                                return this.edges;
                            }
                            getGraphManager() {
                                return this.graphManager;
                            }
                            getParent() {
                                return this.parent;
                            }
                            getLeft() {
                                return this.left;
                            }
                            getRight() {
                                return this.right;
                            }
                            getTop() {
                                return this.top;
                            }
                            getBottom() {
                                return this.bottom;
                            }
                            isConnected() {
                                return this.isConnected;
                            }
                            add(p, v, D) {
                                if (v == null && D == null) {
                                    const u = p;
                                    if (this.graphManager == null) {
                                        throw "Graph has no graph mgr!";
                                    }
                                    if (this.getNodes().indexOf(u) > -1) {
                                        throw "Node already in graph!";
                                    }
                                    u.owner = this;
                                    this.getNodes().push(u);
                                    return u;
                                } else {
                                    const T = p;
                                    if (!(this.getNodes().indexOf(v) > -1 && this.getNodes().indexOf(D) > -1)) {
                                        throw "Source or target not in graph!";
                                    }
                                    if (!(v.owner == D.owner && v.owner == this)) {
                                        throw "Both owners must be this graph!";
                                    }
                                    if (v.owner != D.owner) {
                                        return null;
                                    }
                                    T.source = v;
                                    T.target = D;
                                    T.isInterGraph = false;
                                    this.getEdges().push(T);
                                    v.edges.push(T);
                                    if (D != v) {
                                        D.edges.push(T);
                                    }
                                    return T;
                                }
                            }
                            remove(p) {
                                const v = p;
                                if (p instanceof l) {
                                    if (v == null) {
                                        throw "Node is null!";
                                    }
                                    if (!(v.owner != null && v.owner == this)) {
                                        throw "Owner graph is invalid!";
                                    }
                                    if (this.graphManager == null) {
                                        throw "Owner graph manager is invalid!";
                                    }
                                    const D = v.edges.slice();
                                    var u;
                                    for(let T = D.length, y = 0; y < T; y++){
                                        u = D[y];
                                        if (u.isInterGraph) {
                                            this.graphManager.remove(u);
                                        } else {
                                            u.source.owner.remove(u);
                                        }
                                    }
                                    var O = this.nodes.indexOf(v);
                                    if (O == -1) {
                                        throw "Node not in owner node list!";
                                    }
                                    this.nodes.splice(O, 1);
                                } else if (p instanceof g) {
                                    var u = p;
                                    if (u == null) {
                                        throw "Edge is null!";
                                    }
                                    if (!(u.source != null && u.target != null)) {
                                        throw "Source and/or target is null!";
                                    }
                                    if (!(u.source.owner != null && u.target.owner != null && u.source.owner == this && u.target.owner == this)) {
                                        throw "Source and/or target owner is invalid!";
                                    }
                                    const s = u.source.edges.indexOf(u);
                                    const f = u.target.edges.indexOf(u);
                                    if (!(s > -1 && f > -1)) {
                                        throw "Source and/or target doesn't know this edge!";
                                    }
                                    u.source.edges.splice(s, 1);
                                    if (u.target != u.source) {
                                        u.target.edges.splice(f, 1);
                                    }
                                    var O = u.source.owner.getEdges().indexOf(u);
                                    if (O == -1) {
                                        throw "Not in owner's edge list!";
                                    }
                                    u.source.owner.getEdges().splice(O, 1);
                                }
                            }
                            updateLeftTop() {
                                let e_MAX_VALUE = e.MAX_VALUE;
                                let e_MAX_VALUE_1 = e.MAX_VALUE;
                                let D;
                                let u;
                                let T;
                                const y = this.getNodes();
                                for(let O = y.length, s = 0; s < O; s++){
                                    const f = y[s];
                                    D = f.getTop();
                                    u = f.getLeft();
                                    if (e_MAX_VALUE > D) {
                                        e_MAX_VALUE = D;
                                    }
                                    if (e_MAX_VALUE_1 > u) {
                                        e_MAX_VALUE_1 = u;
                                    }
                                }
                                if (e_MAX_VALUE == e.MAX_VALUE) {
                                    return null;
                                }
                                if (y[0].getParent().paddingLeft != null) {
                                    T = y[0].getParent().paddingLeft;
                                } else {
                                    T = this.margin;
                                }
                                this.left = e_MAX_VALUE_1 - T;
                                this.top = e_MAX_VALUE - T;
                                return new d(this.left, this.top);
                            }
                            updateBounds(p) {
                                let e_MAX_VALUE = e.MAX_VALUE;
                                let D = -e.MAX_VALUE;
                                let e_MAX_VALUE_1 = e.MAX_VALUE;
                                let T = -e.MAX_VALUE;
                                let y;
                                let O;
                                let s;
                                let f;
                                let c;
                                const nodes = this.nodes;
                                for(let A = nodes.length, m = 0; m < A; m++){
                                    const C = nodes[m];
                                    if (p && C.child != null) {
                                        C.updateBounds();
                                    }
                                    y = C.getLeft();
                                    O = C.getRight();
                                    s = C.getTop();
                                    f = C.getBottom();
                                    if (e_MAX_VALUE > y) {
                                        e_MAX_VALUE = y;
                                    }
                                    if (D < O) {
                                        D = O;
                                    }
                                    if (e_MAX_VALUE_1 > s) {
                                        e_MAX_VALUE_1 = s;
                                    }
                                    if (T < f) {
                                        T = f;
                                    }
                                }
                                const R = new n(e_MAX_VALUE, e_MAX_VALUE_1, D - e_MAX_VALUE, T - e_MAX_VALUE_1);
                                if (e_MAX_VALUE == e.MAX_VALUE) {
                                    this.left = this.parent.getLeft();
                                    this.right = this.parent.getRight();
                                    this.top = this.parent.getTop();
                                    this.bottom = this.parent.getBottom();
                                }
                                if (nodes[0].getParent().paddingLeft != null) {
                                    c = nodes[0].getParent().paddingLeft;
                                } else {
                                    c = this.margin;
                                }
                                this.left = R.x - c;
                                this.right = R.x + R.width + c;
                                this.top = R.y - c;
                                this.bottom = R.y + R.height + c;
                            }
                            static calculateBounds(p) {
                                let e_MAX_VALUE = e.MAX_VALUE;
                                let D = -e.MAX_VALUE;
                                let e_MAX_VALUE_1 = e.MAX_VALUE;
                                let T = -e.MAX_VALUE;
                                let y;
                                let O;
                                let s;
                                let f;
                                for(let c = p.length, E = 0; E < c; E++){
                                    const A = p[E];
                                    y = A.getLeft();
                                    O = A.getRight();
                                    s = A.getTop();
                                    f = A.getBottom();
                                    if (e_MAX_VALUE > y) {
                                        e_MAX_VALUE = y;
                                    }
                                    if (D < O) {
                                        D = O;
                                    }
                                    if (e_MAX_VALUE_1 > s) {
                                        e_MAX_VALUE_1 = s;
                                    }
                                    if (T < f) {
                                        T = f;
                                    }
                                }
                                const m = new n(e_MAX_VALUE, e_MAX_VALUE_1, D - e_MAX_VALUE, T - e_MAX_VALUE_1);
                                return m;
                            }
                            getInclusionTreeDepth() {
                                if (this == this.graphManager.getRoot()) {
                                    return 1;
                                }
                                return this.parent.getInclusionTreeDepth();
                            }
                            getEstimatedSize() {
                                if (this.estimatedSize == e.MIN_VALUE) {
                                    throw "assert failed";
                                }
                                return this.estimatedSize;
                            }
                            calcEstimatedSize() {
                                let p = 0;
                                const nodes = this.nodes;
                                for(let D = nodes.length, u = 0; u < D; u++){
                                    const T = nodes[u];
                                    p += T.calcEstimatedSize();
                                }
                                if (p == 0) {
                                    this.estimatedSize = t.EMPTY_COMPOUND_NODE_SIZE;
                                } else {
                                    this.estimatedSize = p / Math.sqrt(this.nodes.length);
                                }
                                return this.estimatedSize;
                            }
                            updateConnected() {
                                const p = this;
                                if (this.nodes.length == 0) {
                                    this.isConnected = true;
                                    return;
                                }
                                const v = new r;
                                const D = new Set;
                                let u = this.nodes[0];
                                let T;
                                let y;
                                const O = u.withChildren();
                                for(O.forEach((m)=>{
                                    v.push(m);
                                    D.add(m);
                                }); v.length !== 0;){
                                    u = v.shift();
                                    T = u.getEdges();
                                    for(let s = T.length, f = 0; f < s; f++){
                                        const c = T[f];
                                        y = c.getOtherEndInGraph(u, this);
                                        if (y != null && !D.has(y)) {
                                            const E = y.withChildren();
                                            E.forEach((m)=>{
                                                v.push(m);
                                                D.add(m);
                                            });
                                        }
                                    }
                                }
                                this.isConnected = false;
                                if (D.size >= this.nodes.length) {
                                    let A = 0;
                                    D.forEach((m)=>{
                                        m.owner == p && A++;
                                    });
                                    if (A == this.nodes.length) {
                                        this.isConnected = true;
                                    }
                                }
                            }
                        }
                        for(const a in o){
                            h[a] = o[a];
                        }
                        N.exports = h;
                    },
                    function(N, I, L) {
                        let o;
                        const e = L(1);
                        class t {
                            constructor(i){
                                o = L(5);
                                this.layout = i;
                                this.graphs = [];
                                this.edges = [];
                            }
                            addRoot() {
                                const i = this.layout.newGraph();
                                const l = this.layout.newNode(null);
                                const g = this.add(i, l);
                                this.setRootGraph(g);
                                return this.rootGraph;
                            }
                            add(i, l, g, n, d) {
                                if (g == null && n == null && d == null) {
                                    if (i == null) {
                                        throw "Graph is null!";
                                    }
                                    if (l == null) {
                                        throw "Parent node is null!";
                                    }
                                    if (this.graphs.indexOf(i) > -1) {
                                        throw "Graph already in this graph mgr!";
                                    }
                                    this.graphs.push(i);
                                    if (i.parent != null) {
                                        throw "Already has a parent!";
                                    }
                                    if (l.child != null) {
                                        throw "Already has a child!";
                                    }
                                    i.parent = l;
                                    l.child = i;
                                    return i;
                                } else {
                                    d = g;
                                    n = l;
                                    g = i;
                                    const r = n.getOwner();
                                    const h = d.getOwner();
                                    if (!(r != null && r.getGraphManager() == this)) {
                                        throw "Source not in this graph mgr!";
                                    }
                                    if (!(h != null && h.getGraphManager() == this)) {
                                        throw "Target not in this graph mgr!";
                                    }
                                    if (r == h) {
                                        g.isInterGraph = false;
                                        return r.add(g, n, d);
                                    }
                                    g.isInterGraph = true;
                                    g.source = n;
                                    g.target = d;
                                    if (this.edges.indexOf(g) > -1) {
                                        throw "Edge already in inter-graph edge list!";
                                    }
                                    this.edges.push(g);
                                    if (!(g.source != null && g.target != null)) {
                                        throw "Edge source and/or target is null!";
                                    }
                                    if (!(g.source.edges.indexOf(g) == -1 && g.target.edges.indexOf(g) == -1)) {
                                        throw "Edge already in source and/or target incidency list!";
                                    }
                                    g.source.edges.push(g);
                                    g.target.edges.push(g);
                                    return g;
                                }
                            }
                            remove(i) {
                                if (i instanceof o) {
                                    const l = i;
                                    if (l.getGraphManager() != this) {
                                        throw "Graph not in this graph mgr";
                                    }
                                    if (!(l == this.rootGraph || l.parent != null && l.parent.graphManager == this)) {
                                        throw "Invalid parent node!";
                                    }
                                    let g = [];
                                    g = g.concat(l.getEdges());
                                    var n;
                                    for(var d = g.length, r = 0; r < d; r++){
                                        n = g[r];
                                        l.remove(n);
                                    }
                                    let h = [];
                                    h = h.concat(l.getNodes());
                                    let a;
                                    d = h.length;
                                    for(var r = 0; r < d; r++){
                                        a = h[r];
                                        l.remove(a);
                                    }
                                    if (l == this.rootGraph) {
                                        this.setRootGraph(null);
                                    }
                                    var p = this.graphs.indexOf(l);
                                    this.graphs.splice(p, 1);
                                    l.parent = null;
                                } else if (i instanceof e) {
                                    n = i;
                                    if (n == null) {
                                        throw "Edge is null!";
                                    }
                                    if (!n.isInterGraph) {
                                        throw "Not an inter-graph edge!";
                                    }
                                    if (!(n.source != null && n.target != null)) {
                                        throw "Source and/or target is null!";
                                    }
                                    if (!(n.source.edges.indexOf(n) != -1 && n.target.edges.indexOf(n) != -1)) {
                                        throw "Source and/or target doesn't know this edge!";
                                    }
                                    var p = n.source.edges.indexOf(n);
                                    n.source.edges.splice(p, 1);
                                    p = n.target.edges.indexOf(n);
                                    n.target.edges.splice(p, 1);
                                    if (!(n.source.owner != null && n.source.owner.getGraphManager() != null)) {
                                        throw "Edge owner graph or owner graph manager is null!";
                                    }
                                    if (n.source.owner.getGraphManager().edges.indexOf(n) == -1) {
                                        throw "Not in owner graph manager's edge list!";
                                    }
                                    var p = n.source.owner.getGraphManager().edges.indexOf(n);
                                    n.source.owner.getGraphManager().edges.splice(p, 1);
                                }
                            }
                            updateBounds() {
                                this.rootGraph.updateBounds(true);
                            }
                            getGraphs() {
                                return this.graphs;
                            }
                            getAllNodes() {
                                if (this.allNodes == null) {
                                    let i = [];
                                    const l = this.getGraphs();
                                    for(let g = l.length, n = 0; n < g; n++){
                                        i = i.concat(l[n].getNodes());
                                    }
                                    this.allNodes = i;
                                }
                                return this.allNodes;
                            }
                            resetAllNodes() {
                                this.allNodes = null;
                            }
                            resetAllEdges() {
                                this.allEdges = null;
                            }
                            resetAllNodesToApplyGravitation() {
                                this.allNodesToApplyGravitation = null;
                            }
                            getAllEdges() {
                                if (this.allEdges == null) {
                                    let i = [];
                                    const l = this.getGraphs();
                                    l.length;
                                    for(let g = 0; g < l.length; g++){
                                        i = i.concat(l[g].getEdges());
                                    }
                                    i = i.concat(this.edges);
                                    this.allEdges = i;
                                }
                                return this.allEdges;
                            }
                            getAllNodesToApplyGravitation() {
                                return this.allNodesToApplyGravitation;
                            }
                            setAllNodesToApplyGravitation(i) {
                                if (this.allNodesToApplyGravitation != null) {
                                    throw "assert failed";
                                }
                                this.allNodesToApplyGravitation = i;
                            }
                            getRoot() {
                                return this.rootGraph;
                            }
                            setRootGraph(i) {
                                if (i.getGraphManager() != this) {
                                    throw "Root not in this graph mgr!";
                                }
                                this.rootGraph = i;
                                if (i.parent == null) {
                                    i.parent = this.layout.newNode("Root node");
                                }
                            }
                            getLayout() {
                                return this.layout;
                            }
                            isOneAncestorOfOther(i, l) {
                                if (!(i != null && l != null)) {
                                    throw "assert failed";
                                }
                                if (i == l) {
                                    return true;
                                }
                                let g = i.getOwner();
                                let n;
                                do {
                                    n = g.getParent();
                                    if (n == null) {
                                        break;
                                    }
                                    if (n == l) {
                                        return true;
                                    }
                                    g = n.getOwner();
                                    if (g == null) {
                                        break;
                                    }
                                }while (true)
                                g = l.getOwner();
                                do {
                                    n = g.getParent();
                                    if (n == null) {
                                        break;
                                    }
                                    if (n == i) {
                                        return true;
                                    }
                                    g = n.getOwner();
                                    if (g == null) {
                                        break;
                                    }
                                }while (true)
                                return false;
                            }
                            calcLowestCommonAncestors() {
                                let i;
                                let l;
                                let g;
                                let n;
                                let d;
                                const r = this.getAllEdges();
                                for(let h = r.length, a = 0; a < h; a++){
                                    i = r[a];
                                    l = i.source;
                                    g = i.target;
                                    i.lca = null;
                                    i.sourceInLca = l;
                                    i.targetInLca = g;
                                    if (l == g) {
                                        i.lca = l.getOwner();
                                        continue;
                                    }
                                    for(n = l.getOwner(); i.lca == null;){
                                        i.targetInLca = g;
                                        for(d = g.getOwner(); i.lca == null;){
                                            if (d == n) {
                                                i.lca = d;
                                                break;
                                            }
                                            if (d == this.rootGraph) {
                                                break;
                                            }
                                            if (i.lca != null) {
                                                throw "assert failed";
                                            }
                                            i.targetInLca = d.getParent();
                                            d = i.targetInLca.getOwner();
                                        }
                                        if (n == this.rootGraph) {
                                            break;
                                        }
                                        if (i.lca == null) {
                                            i.sourceInLca = n.getParent();
                                            n = i.sourceInLca.getOwner();
                                        }
                                    }
                                    if (i.lca == null) {
                                        throw "assert failed";
                                    }
                                }
                            }
                            calcLowestCommonAncestor(i, l) {
                                if (i == l) {
                                    return i.getOwner();
                                }
                                let g = i.getOwner();
                                do {
                                    if (g == null) {
                                        break;
                                    }
                                    let n = l.getOwner();
                                    do {
                                        if (n == null) {
                                            break;
                                        }
                                        if (n == g) {
                                            return n;
                                        }
                                        n = n.getParent().getOwner();
                                    }while (true)
                                    g = g.getParent().getOwner();
                                }while (true)
                                return g;
                            }
                            calcInclusionTreeDepths(i, l) {
                                if (i == null && l == null) {
                                    i = this.rootGraph;
                                    l = 1;
                                }
                                let g;
                                const n = i.getNodes();
                                for(let d = n.length, r = 0; r < d; r++){
                                    g = n[r];
                                    g.inclusionTreeDepth = l;
                                    if (g.child != null) {
                                        this.calcInclusionTreeDepths(g.child, l + 1);
                                    }
                                }
                            }
                            includesInvalidEdge() {
                                let i;
                                for(let l = this.edges.length, g = 0; g < l; g++){
                                    i = this.edges[g];
                                    if (this.isOneAncestorOfOther(i.source, i.target)) {
                                        return true;
                                    }
                                }
                                return false;
                            }
                        }
                        N.exports = t;
                    },
                    (N, I, L)=>{
                        const o = L(0);
                        function e() {}
                        for(const t in o){
                            e[t] = o[t];
                        }
                        e.MAX_ITERATIONS = 2500;
                        e.DEFAULT_EDGE_LENGTH = 50;
                        e.DEFAULT_SPRING_STRENGTH = 0.45;
                        e.DEFAULT_REPULSION_STRENGTH = 4500;
                        e.DEFAULT_GRAVITY_STRENGTH = 0.4;
                        e.DEFAULT_COMPOUND_GRAVITY_STRENGTH = 1;
                        e.DEFAULT_GRAVITY_RANGE_FACTOR = 3.8;
                        e.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = 1.5;
                        e.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION = true;
                        e.DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION = true;
                        e.DEFAULT_COOLING_FACTOR_INCREMENTAL = 0.3;
                        e.COOLING_ADAPTATION_FACTOR = 0.33;
                        e.ADAPTATION_LOWER_NODE_LIMIT = 1000;
                        e.ADAPTATION_UPPER_NODE_LIMIT = 5000;
                        e.MAX_NODE_DISPLACEMENT_INCREMENTAL = 100;
                        e.MAX_NODE_DISPLACEMENT = e.MAX_NODE_DISPLACEMENT_INCREMENTAL * 3;
                        e.MIN_REPULSION_DIST = e.DEFAULT_EDGE_LENGTH / 10;
                        e.CONVERGENCE_CHECK_PERIOD = 100;
                        e.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = 0.1;
                        e.MIN_EDGE_LENGTH = 1;
                        e.GRID_CALCULATION_CHECK_PERIOD = 10;
                        N.exports = e;
                    },
                    (N, I, L)=>{
                        const o = L(12);
                        function e() {}
                        e.calcSeparationAmount = function(t, i, l, g) {
                            if (!t.intersects(i)) {
                                throw "assert failed";
                            }
                            const n = new Array(2);
                            this.decideDirectionsForOverlappingNodes(t, i, n);
                            l[0] = Math.min(t.getRight(), i.getRight()) - Math.max(t.x, i.x);
                            l[1] = Math.min(t.getBottom(), i.getBottom()) - Math.max(t.y, i.y);
                            if (t.getX() <= i.getX() && t.getRight() >= i.getRight()) {
                                l[0] += Math.min(i.getX() - t.getX(), t.getRight() - i.getRight());
                            } else if (i.getX() <= t.getX() && i.getRight() >= t.getRight()) {
                                l[0] += Math.min(t.getX() - i.getX(), i.getRight() - t.getRight());
                            }
                            if (t.getY() <= i.getY() && t.getBottom() >= i.getBottom()) {
                                l[1] += Math.min(i.getY() - t.getY(), t.getBottom() - i.getBottom());
                            } else if (i.getY() <= t.getY() && i.getBottom() >= t.getBottom()) {
                                l[1] += Math.min(t.getY() - i.getY(), i.getBottom() - t.getBottom());
                            }
                            let d = Math.abs((i.getCenterY() - t.getCenterY()) / (i.getCenterX() - t.getCenterX()));
                            if (i.getCenterY() === t.getCenterY() && i.getCenterX() === t.getCenterX()) {
                                d = 1;
                            }
                            let r = d * l[0];
                            let h = l[1] / d;
                            if (l[0] < h) {
                                h = l[0];
                            } else {
                                r = l[1];
                            }
                            l[0] = -1 * n[0] * (h / 2 + g);
                            l[1] = -1 * n[1] * (r / 2 + g);
                        };
                        e.decideDirectionsForOverlappingNodes = (t, i, l)=>{
                            if (t.getCenterX() < i.getCenterX()) {
                                l[0] = -1;
                            } else {
                                l[0] = 1;
                            }
                            if (t.getCenterY() < i.getCenterY()) {
                                l[1] = -1;
                            } else {
                                l[1] = 1;
                            }
                        };
                        e.getIntersection2 = function(t, i, l) {
                            const g = t.getCenterX();
                            const n = t.getCenterY();
                            const d = i.getCenterX();
                            const r = i.getCenterY();
                            if (t.intersects(i)) {
                                l[0] = g;
                                l[1] = n;
                                l[2] = d;
                                l[3] = r;
                                return true;
                            }
                            const h = t.getX();
                            const a = t.getY();
                            const p = t.getRight();
                            const v = t.getX();
                            const D = t.getBottom();
                            const u = t.getRight();
                            const T = t.getWidthHalf();
                            const y = t.getHeightHalf();
                            const O = i.getX();
                            const s = i.getY();
                            const f = i.getRight();
                            const c = i.getX();
                            const E = i.getBottom();
                            const A = i.getRight();
                            const m = i.getWidthHalf();
                            const C = i.getHeightHalf();
                            let R = false;
                            let M = false;
                            if (g === d) {
                                if (n > r) {
                                    l[0] = g;
                                    l[1] = a;
                                    l[2] = d;
                                    l[3] = E;
                                    return false;
                                }
                                if (n < r) {
                                    l[0] = g;
                                    l[1] = D;
                                    l[2] = d;
                                    l[3] = s;
                                    return false;
                                }
                            } else if (n === r) {
                                if (g > d) {
                                    l[0] = h;
                                    l[1] = n;
                                    l[2] = f;
                                    l[3] = r;
                                    return false;
                                }
                                if (g < d) {
                                    l[0] = p;
                                    l[1] = n;
                                    l[2] = O;
                                    l[3] = r;
                                    return false;
                                }
                            } else {
                                const S = t.height / t.width;
                                const Y = i.height / i.width;
                                const w = (r - n) / (d - g);
                                let x;
                                let F;
                                let U;
                                let P;
                                let _;
                                let X;
                                -S === w ? g > d ? (l[0] = v, l[1] = D, R = true) : (l[0] = p, l[1] = a, R = true) : S === w && (g > d ? (l[0] = h, l[1] = a, R = true) : (l[0] = u, l[1] = D, R = true));
                                -Y === w ? d > g ? (l[2] = c, l[3] = E, M = true) : (l[2] = f, l[3] = s, M = true) : Y === w && (d > g ? (l[2] = O, l[3] = s, M = true) : (l[2] = A, l[3] = E, M = true));
                                if (R && M) {
                                    return false;
                                }
                                g > d ? n > r ? (x = this.getCardinalDirection(S, w, 4), F = this.getCardinalDirection(Y, w, 2)) : (x = this.getCardinalDirection(-S, w, 3), F = this.getCardinalDirection(-Y, w, 1)) : n > r ? (x = this.getCardinalDirection(-S, w, 1), F = this.getCardinalDirection(-Y, w, 3)) : (x = this.getCardinalDirection(S, w, 2), F = this.getCardinalDirection(Y, w, 4));
                                if (!R) {
                                    switch(x){
                                        case 1:
                                            P = a;
                                            U = g + -y / w;
                                            l[0] = U;
                                            l[1] = P;
                                            break;
                                        case 2:
                                            U = u;
                                            P = n + T * w;
                                            l[0] = U;
                                            l[1] = P;
                                            break;
                                        case 3:
                                            P = D;
                                            U = g + y / w;
                                            l[0] = U;
                                            l[1] = P;
                                            break;
                                        case 4:
                                            U = v;
                                            P = n + -T * w;
                                            l[0] = U;
                                            l[1] = P;
                                            break;
                                    }
                                }
                                if (!M) {
                                    switch(F){
                                        case 1:
                                            X = s;
                                            _ = d + -C / w;
                                            l[2] = _;
                                            l[3] = X;
                                            break;
                                        case 2:
                                            _ = A;
                                            X = r + m * w;
                                            l[2] = _;
                                            l[3] = X;
                                            break;
                                        case 3:
                                            X = E;
                                            _ = d + C / w;
                                            l[2] = _;
                                            l[3] = X;
                                            break;
                                        case 4:
                                            _ = c;
                                            X = r + -m * w;
                                            l[2] = _;
                                            l[3] = X;
                                            break;
                                    }
                                }
                            }
                            return false;
                        };
                        e.getCardinalDirection = (t, i, l)=>{
                            if (t > i) {
                                return l;
                            }
                            return 1 + l % 4;
                        };
                        e.getIntersection = function(t, i, l, g) {
                            if (g == null) {
                                return this.getIntersection2(t, i, l);
                            }
                            const { x, y: y_1 } = t;
                            const { x: x_1, y: y_2 } = i;
                            const { x: x_2, y: y_3 } = l;
                            const { x: x_3, y: y_4 } = g;
                            let u;
                            let T;
                            let y;
                            let O;
                            let s;
                            let f;
                            let c;
                            let E;
                            let A;
                            y = y_2 - y_1;
                            s = x - x_1;
                            c = x_1 * y_1 - x * y_2;
                            O = y_4 - y_3;
                            f = x_2 - x_3;
                            E = x_3 * y_3 - x_2 * y_4;
                            A = y * f - O * s;
                            if (A === 0) {
                                return null;
                            }
                            u = (s * E - f * c) / A;
                            T = (O * c - y * E) / A;
                            return new o(u, T);
                        };
                        e.angleOfVector = function(t, i, l, g) {
                            let n;
                            if (t !== l) {
                                n = Math.atan((g - i) / (l - t));
                                if (l < t) {
                                    n += Math.PI;
                                } else if (g < i) {
                                    n += this.TWO_PI;
                                }
                            } else if (g < i) {
                                n = this.ONE_AND_HALF_PI;
                            } else {
                                n = this.HALF_PI;
                            }
                            return n;
                        };
                        e.doIntersect = ({ x, y: y_1 }, { x: x_1, y: y_2 }, { x: x_2, y: y_3 }, { x: x_3, y: y_4 })=>{
                            const u = (x_1 - x) * (y_4 - y_3) - (x_3 - x_2) * (y_2 - y_1);
                            if (u === 0) {
                                return false;
                            }
                            const T = ((y_4 - y_3) * (x_3 - x) + (x_2 - x_3) * (y_4 - y_1)) / u;
                            const y = ((y_1 - y_2) * (x_3 - x) + (x_1 - x) * (y_4 - y_1)) / u;
                            return T > 0 && T < 1 && y > 0 && y < 1;
                        };
                        e.HALF_PI = 0.5 * Math.PI;
                        e.ONE_AND_HALF_PI = 1.5 * Math.PI;
                        e.TWO_PI = 2 * Math.PI;
                        e.THREE_PI = 3 * Math.PI;
                        N.exports = e;
                    },
                    (N, I, L)=>{
                        function o() {}
                        o.sign = (e)=>{
                            if (e > 0) {
                                return 1;
                            }
                            if (e < 0) {
                                return -1;
                            }
                            return 0;
                        };
                        o.floor = (e)=>{
                            if (e < 0) {
                                return Math.ceil(e);
                            }
                            return Math.floor(e);
                        };
                        o.ceil = (e)=>{
                            if (e < 0) {
                                return Math.floor(e);
                            }
                            return Math.ceil(e);
                        };
                        N.exports = o;
                    },
                    (N, I, L)=>{
                        function o() {}
                        o.MAX_VALUE = 2147483647;
                        o.MIN_VALUE = -2147483648;
                        N.exports = o;
                    },
                    (N, I, L)=>{
                        const o = (()=>{
                            function n(d, r) {
                                for (const a of r){
                                    a.enumerable = a.enumerable || false;
                                    a.configurable = true;
                                    if ("value" in a) {
                                        a.writable = true;
                                    }
                                    Object.defineProperty(d, a.key, a);
                                }
                            }
                            return (d, r, h)=>{
                                if (r) {
                                    n(d.prototype, r);
                                }
                                if (h) {
                                    n(d, h);
                                }
                                return d;
                            };
                        })();
                        function e(n, d) {
                            if (!(n instanceof d)) {
                                throw new TypeError("Cannot call a class as a function");
                            }
                        }
                        const t = (value)=>({
                                value,
                                next: null,
                                prev: null
                            });
                        const i = (d, r, h, a)=>{
                            if (d !== null) {
                                d.next = r;
                            } else {
                                a.head = r;
                            }
                            if (h !== null) {
                                h.prev = r;
                            } else {
                                a.tail = r;
                            }
                            r.prev = d;
                            r.next = h;
                            a.length++;
                            return r;
                        };
                        const l = (d, r)=>{
                            const { prev, next } = d;
                            if (prev !== null) {
                                prev.next = next;
                            } else {
                                r.head = next;
                            }
                            if (next !== null) {
                                next.prev = prev;
                            } else {
                                r.tail = prev;
                            }
                            d.prev = d.next = null;
                            r.length--;
                            return d;
                        };
                        const g = (()=>{
                            function n(d) {
                                const r = this;
                                e(this, n);
                                this.length = 0;
                                this.head = null;
                                this.tail = null;
                                d?.forEach((h)=>r.push(h));
                            }
                            o(n, [
                                {
                                    key: "size",
                                    value () {
                                        return this.length;
                                    }
                                },
                                {
                                    key: "insertBefore",
                                    value (r, h) {
                                        return i(h.prev, t(r), h, this);
                                    }
                                },
                                {
                                    key: "insertAfter",
                                    value (r, h) {
                                        return i(h, t(r), h.next, this);
                                    }
                                },
                                {
                                    key: "insertNodeBefore",
                                    value (r, h) {
                                        return i(h.prev, r, h, this);
                                    }
                                },
                                {
                                    key: "insertNodeAfter",
                                    value (r, h) {
                                        return i(h, r, h.next, this);
                                    }
                                },
                                {
                                    key: "push",
                                    value (r) {
                                        return i(this.tail, t(r), null, this);
                                    }
                                },
                                {
                                    key: "unshift",
                                    value (r) {
                                        return i(null, t(r), this.head, this);
                                    }
                                },
                                {
                                    key: "remove",
                                    value (r) {
                                        return l(r, this);
                                    }
                                },
                                {
                                    key: "pop",
                                    value () {
                                        return l(this.tail, this).value;
                                    }
                                },
                                {
                                    key: "popNode",
                                    value () {
                                        return l(this.tail, this);
                                    }
                                },
                                {
                                    key: "shift",
                                    value () {
                                        return l(this.head, this).value;
                                    }
                                },
                                {
                                    key: "shiftNode",
                                    value () {
                                        return l(this.head, this);
                                    }
                                },
                                {
                                    key: "get_object_at",
                                    value (r) {
                                        if (r <= this.length()) {
                                            for(var h = 1, a = this.head; h < r;){
                                                a = a.next;
                                                h++;
                                            }
                                            return a.value;
                                        }
                                    }
                                },
                                {
                                    key: "set_object_at",
                                    value (r, h) {
                                        if (r <= this.length()) {
                                            for(var a = 1, p = this.head; a < r;){
                                                p = p.next;
                                                a++;
                                            }
                                            p.value = h;
                                        }
                                    }
                                }
                            ]);
                            return n;
                        })();
                        N.exports = g;
                    },
                    function(N, I, L) {
                        class o {
                            constructor(e, t, i){
                                this.x = null;
                                this.y = null;
                                if (e == null && t == null && i == null) {
                                    this.x = 0;
                                    this.y = 0;
                                } else if (typeof e === "number" && typeof t === "number" && i == null) {
                                    this.x = e;
                                    this.y = t;
                                } else if (e.constructor.name == "Point" && t == null && i == null) {
                                    i = e;
                                    this.x = i.x;
                                    this.y = i.y;
                                }
                            }
                            getX() {
                                return this.x;
                            }
                            getY() {
                                return this.y;
                            }
                            getLocation() {
                                return new o(this.x, this.y);
                            }
                            setLocation(e, t, i) {
                                if (e.constructor.name == "Point" && t == null && i == null) {
                                    i = e;
                                    this.setLocation(i.x, i.y);
                                } else {
                                    typeof e === "number" && typeof t === "number" && i == null && (parseInt(e) == e && parseInt(t) == t ? this.move(e, t) : (this.x = Math.floor(e + 0.5), this.y = Math.floor(t + 0.5)));
                                }
                            }
                            move(e, t) {
                                this.x = e;
                                this.y = t;
                            }
                            translate(e, t) {
                                this.x += e;
                                this.y += t;
                            }
                            equals(e) {
                                if (e.constructor.name == "Point") {
                                    const t = e;
                                    return this.x == t.x && this.y == t.y;
                                }
                                return this == e;
                            }
                            toString() {
                                return `${new o().constructor.name}[x=${this.x},y=${this.y}]`;
                            }
                        }
                        N.exports = o;
                    },
                    function(N, I, L) {
                        class o {
                            constructor(e, t, i, l){
                                this.x = 0;
                                this.y = 0;
                                this.width = 0;
                                this.height = 0;
                                if (e != null && t != null && i != null && l != null) {
                                    this.x = e;
                                    this.y = t;
                                    this.width = i;
                                    this.height = l;
                                }
                            }
                            getX() {
                                return this.x;
                            }
                            setX(e) {
                                this.x = e;
                            }
                            getY() {
                                return this.y;
                            }
                            setY(e) {
                                this.y = e;
                            }
                            getWidth() {
                                return this.width;
                            }
                            setWidth(e) {
                                this.width = e;
                            }
                            getHeight() {
                                return this.height;
                            }
                            setHeight(e) {
                                this.height = e;
                            }
                            getRight() {
                                return this.x + this.width;
                            }
                            getBottom() {
                                return this.y + this.height;
                            }
                            intersects(e) {
                                return !(this.getRight() < e.x || this.getBottom() < e.y || e.getRight() < this.x || e.getBottom() < this.y);
                            }
                            getCenterX() {
                                return this.x + this.width / 2;
                            }
                            getMinX() {
                                return this.getX();
                            }
                            getMaxX() {
                                return this.getX() + this.width;
                            }
                            getCenterY() {
                                return this.y + this.height / 2;
                            }
                            getMinY() {
                                return this.getY();
                            }
                            getMaxY() {
                                return this.getY() + this.height;
                            }
                            getWidthHalf() {
                                return this.width / 2;
                            }
                            getHeightHalf() {
                                return this.height / 2;
                            }
                        }
                        N.exports = o;
                    },
                    (N, I, L)=>{
                        const o = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? (t)=>typeof t : (t)=>{
                            if (t && typeof Symbol === "function" && t.constructor === Symbol && t !== Symbol.prototype) {
                                return "symbol";
                            }
                            return typeof t;
                        };
                        function e() {}
                        e.lastID = 0;
                        e.createID = (t)=>{
                            if (e.isPrimitive(t)) {
                                return t;
                            }
                            if (!(t.uniqueID != null)) {
                                t.uniqueID = e.getString();
                                e.lastID++;
                            }
                            return t.uniqueID;
                        };
                        e.getString = (t)=>{
                            if (t == null) {
                                t = e.lastID;
                            }
                            return `Object#${t}`;
                        };
                        e.isPrimitive = (t)=>{
                            const i = typeof t === "undefined" ? "undefined" : o(t);
                            return t == null || i != "object" && i != "function";
                        };
                        N.exports = e;
                    },
                    function(N, I, L) {
                        function o(a) {
                            if (Array.isArray(a)) {
                                for(var p = 0, v = Array(a.length); p < a.length; p++){
                                    v[p] = a[p];
                                }
                                return v;
                            } else {
                                return Array.from(a);
                            }
                        }
                        const e = L(0);
                        const t = L(6);
                        const i = L(3);
                        const l = L(1);
                        const g = L(5);
                        const n = L(4);
                        const d = L(17);
                        const r = L(27);
                        class h extends r {
                            constructor(a){
                                super();
                                this.layoutQuality = e.QUALITY;
                                this.createBendsAsNeeded = e.DEFAULT_CREATE_BENDS_AS_NEEDED;
                                this.incremental = e.DEFAULT_INCREMENTAL;
                                this.animationOnLayout = e.DEFAULT_ANIMATION_ON_LAYOUT;
                                this.animationDuringLayout = e.DEFAULT_ANIMATION_DURING_LAYOUT;
                                this.animationPeriod = e.DEFAULT_ANIMATION_PERIOD;
                                this.uniformLeafNodeSizes = e.DEFAULT_UNIFORM_LEAF_NODE_SIZES;
                                this.edgeToDummyNodes = new Map;
                                this.graphManager = new t(this);
                                this.isLayoutFinished = false;
                                this.isSubLayout = false;
                                this.isRemoteUse = false;
                                if (a != null) {
                                    this.isRemoteUse = a;
                                }
                            }
                            getGraphManager() {
                                return this.graphManager;
                            }
                            getAllNodes() {
                                return this.graphManager.getAllNodes();
                            }
                            getAllEdges() {
                                return this.graphManager.getAllEdges();
                            }
                            getAllNodesToApplyGravitation() {
                                return this.graphManager.getAllNodesToApplyGravitation();
                            }
                            newGraphManager() {
                                const a = new t(this);
                                this.graphManager = a;
                                return a;
                            }
                            newGraph(a) {
                                return new g(null, this.graphManager, a);
                            }
                            newNode(a) {
                                return new i(this.graphManager, a);
                            }
                            newEdge(a) {
                                return new l(null, null, a);
                            }
                            checkLayoutSuccess() {
                                return this.graphManager.getRoot() == null || this.graphManager.getRoot().getNodes().length == 0 || this.graphManager.includesInvalidEdge();
                            }
                            runLayout() {
                                this.isLayoutFinished = false;
                                if (this.tilingPreLayout) {
                                    this.tilingPreLayout();
                                }
                                this.initParameters();
                                let a;
                                if (this.checkLayoutSuccess()) {
                                    a = false;
                                } else {
                                    a = this.layout();
                                }
                                if (e.ANIMATE === "during") {
                                    return false;
                                }
                                a && (this.isSubLayout || this.doPostLayout());
                                if (this.tilingPostLayout) {
                                    this.tilingPostLayout();
                                }
                                this.isLayoutFinished = true;
                                return a;
                            }
                            doPostLayout() {
                                if (!this.incremental) {
                                    this.transform();
                                }
                                this.update();
                            }
                            update2() {
                                if (this.createBendsAsNeeded) {
                                    this.createBendpointsFromDummyNodes();
                                    this.graphManager.resetAllEdges();
                                }
                                if (!this.isRemoteUse) {
                                    for(var a = this.graphManager.getAllEdges(), p = 0; p < a.length; p++){
                                        a[p];
                                    }
                                    for(var v = this.graphManager.getRoot().getNodes(), p = 0; p < v.length; p++){
                                        v[p];
                                    }
                                    this.update(this.graphManager.getRoot());
                                }
                            }
                            update(a) {
                                if (a == null) {
                                    this.update2();
                                } else if (a instanceof i) {
                                    const p = a;
                                    if (p.getChild() != null) {
                                        for(let v = p.getChild().getNodes(), D = 0; D < v.length; D++){
                                            update(v[D]);
                                        }
                                    }
                                    if (p.vGraphObject != null) {
                                        const u = p.vGraphObject;
                                        u.update(p);
                                    }
                                } else if (a instanceof l) {
                                    const T = a;
                                    if (T.vGraphObject != null) {
                                        const y = T.vGraphObject;
                                        y.update(T);
                                    }
                                } else if (a instanceof g) {
                                    const O = a;
                                    if (O.vGraphObject != null) {
                                        const s = O.vGraphObject;
                                        s.update(O);
                                    }
                                }
                            }
                            initParameters() {
                                if (!this.isSubLayout) {
                                    this.layoutQuality = e.QUALITY;
                                    this.animationDuringLayout = e.DEFAULT_ANIMATION_DURING_LAYOUT;
                                    this.animationPeriod = e.DEFAULT_ANIMATION_PERIOD;
                                    this.animationOnLayout = e.DEFAULT_ANIMATION_ON_LAYOUT;
                                    this.incremental = e.DEFAULT_INCREMENTAL;
                                    this.createBendsAsNeeded = e.DEFAULT_CREATE_BENDS_AS_NEEDED;
                                    this.uniformLeafNodeSizes = e.DEFAULT_UNIFORM_LEAF_NODE_SIZES;
                                }
                                if (this.animationDuringLayout) {
                                    this.animationOnLayout = false;
                                }
                            }
                            transform(a) {
                                if (a == null) {
                                    this.transform(new n(0, 0));
                                } else {
                                    const p = new d;
                                    const v = this.graphManager.getRoot().updateLeftTop();
                                    if (v != null) {
                                        p.setWorldOrgX(a.x);
                                        p.setWorldOrgY(a.y);
                                        p.setDeviceOrgX(v.x);
                                        p.setDeviceOrgY(v.y);
                                        let u;
                                        for(let D = this.getAllNodes(), T = 0; T < D.length; T++){
                                            u = D[T];
                                            u.transform(p);
                                        }
                                    }
                                }
                            }
                            positionNodesRandomly(a) {
                                if (a == null) {
                                    this.positionNodesRandomly(this.getGraphManager().getRoot());
                                    this.getGraphManager().getRoot().updateBounds(true);
                                } else {
                                    let p;
                                    let v;
                                    for(let D = a.getNodes(), u = 0; u < D.length; u++){
                                        p = D[u];
                                        v = p.getChild();
                                        if (v == null || v.getNodes().length == 0) {
                                            p.scatter();
                                        } else {
                                            this.positionNodesRandomly(v);
                                            p.updateBounds();
                                        }
                                    }
                                }
                            }
                            getFlatForest() {
                                let a = [];
                                let p = true;
                                for(var v = this.graphManager.getRoot().getNodes(), D = true, u = 0; u < v.length; u++){
                                    if (v[u].getChild() != null) {
                                        D = false;
                                    }
                                }
                                if (!D) {
                                    return a;
                                }
                                let T = new Set;
                                const y = [];
                                let O = new Map;
                                let s = [];
                                for(s = s.concat(v); s.length > 0 && p;){
                                    for(y.push(s[0]); y.length > 0 && p;){
                                        const f = y[0];
                                        y.splice(0, 1);
                                        T.add(f);
                                        for(var c = f.getEdges(), u = 0; u < c.length; u++){
                                            const E = c[u].getOtherEnd(f);
                                            if (O.get(f) != E) {
                                                if (!T.has(E)) {
                                                    y.push(E);
                                                    O.set(E, f);
                                                } else {
                                                    p = false;
                                                    break;
                                                }
                                            }
                                        }
                                    }
                                    if (!p) {
                                        a = [];
                                    } else {
                                        const A = [].concat(o(T));
                                        a.push(A);
                                        for(var u = 0; u < A.length; u++){
                                            const m = A[u];
                                            const C = s.indexOf(m);
                                            if (C > -1) {
                                                s.splice(C, 1);
                                            }
                                        }
                                        T = new Set;
                                        O = new Map;
                                    }
                                }
                                return a;
                            }
                            createDummyNodesForBendpoints(a) {
                                const p = [];
                                let a_source = a.source;
                                const D = this.graphManager.calcLowestCommonAncestor(a.source, a.target);
                                for(let u = 0; u < a.bendpoints.length; u++){
                                    const T = this.newNode(null);
                                    T.setRect(new Point(0, 0), new Dimension(1, 1));
                                    D.add(T);
                                    var y = this.newEdge(null);
                                    this.graphManager.add(y, a_source, T);
                                    p.add(T);
                                    a_source = T;
                                }
                                var y = this.newEdge(null);
                                this.graphManager.add(y, a_source, a.target);
                                this.edgeToDummyNodes.set(a, p);
                                if (a.isInterGraph()) {
                                    this.graphManager.remove(a);
                                } else {
                                    D.remove(a);
                                }
                                return p;
                            }
                            createBendpointsFromDummyNodes() {
                                let a = [];
                                a = a.concat(this.graphManager.getAllEdges());
                                a = [].concat(o(this.edgeToDummyNodes.keys())).concat(a);
                                for (const v of a){
                                    if (v.bendpoints.length > 0) {
                                        for(let D = this.edgeToDummyNodes.get(v), u = 0; u < D.length; u++){
                                            const T = D[u];
                                            const y = new n(T.getCenterX(), T.getCenterY());
                                            const O = v.bendpoints.get(u);
                                            O.x = y.x;
                                            O.y = y.y;
                                            T.getOwner().remove(T);
                                        }
                                        this.graphManager.add(v, v.source, v.target);
                                    }
                                }
                            }
                            static transform(a, p, v, D) {
                                if (v != null && D != null) {
                                    let u = p;
                                    if (a <= 50) {
                                        const T = p / v;
                                        u -= (p - T) / 50 * (50 - a);
                                    } else {
                                        const y = p * D;
                                        u += (y - p) / 50 * (a - 50);
                                    }
                                    return u;
                                } else {
                                    let O;
                                    let s;
                                    if (a <= 50) {
                                        O = 9 * p / 500;
                                        s = p / 10;
                                    } else {
                                        O = 9 * p / 50;
                                        s = -8 * p;
                                    }
                                    return O * a + s;
                                }
                            }
                            static findCenterOfTree(a) {
                                let p = [];
                                p = p.concat(a);
                                let v = [];
                                const D = new Map;
                                let u = false;
                                let T = null;
                                if (p.length == 1 || p.length == 2) {
                                    u = true;
                                    T = p[0];
                                }
                                for(var y = 0; y < p.length; y++){
                                    var O = p[y];
                                    const s = O.getNeighborsList().size;
                                    D.set(O, O.getNeighborsList().size);
                                    if (s == 1) {
                                        v.push(O);
                                    }
                                }
                                let f = [];
                                for(f = f.concat(v); !u;){
                                    let c = [];
                                    c = c.concat(f);
                                    f = [];
                                    for(var y = 0; y < p.length; y++){
                                        var O = p[y];
                                        const E = p.indexOf(O);
                                        if (E >= 0) {
                                            p.splice(E, 1);
                                        }
                                        const A = O.getNeighborsList();
                                        A.forEach((R)=>{
                                            if (v.indexOf(R) < 0) {
                                                const M = D.get(R);
                                                const S = M - 1;
                                                if (S == 1) {
                                                    f.push(R);
                                                }
                                                D.set(R, S);
                                            }
                                        });
                                    }
                                    v = v.concat(f);
                                    if (p.length == 1 || p.length == 2) {
                                        u = true;
                                        T = p[0];
                                    }
                                }
                                return T;
                            }
                            setGraphManager(a) {
                                this.graphManager = a;
                            }
                        }
                        h.RANDOM_SEED = 1;
                        N.exports = h;
                    },
                    (N, I, L)=>{
                        function o() {}
                        o.seed = 1;
                        o.x = 0;
                        o.nextDouble = ()=>{
                            o.x = Math.sin(o.seed++) * 10000;
                            return o.x - Math.floor(o.x);
                        };
                        N.exports = o;
                    },
                    function(N, I, L) {
                        const o = L(4);
                        class e {
                            constructor(t, i){
                                this.lworldOrgX = 0;
                                this.lworldOrgY = 0;
                                this.ldeviceOrgX = 0;
                                this.ldeviceOrgY = 0;
                                this.lworldExtX = 1;
                                this.lworldExtY = 1;
                                this.ldeviceExtX = 1;
                                this.ldeviceExtY = 1;
                            }
                            getWorldOrgX() {
                                return this.lworldOrgX;
                            }
                            setWorldOrgX(t) {
                                this.lworldOrgX = t;
                            }
                            getWorldOrgY() {
                                return this.lworldOrgY;
                            }
                            setWorldOrgY(t) {
                                this.lworldOrgY = t;
                            }
                            getWorldExtX() {
                                return this.lworldExtX;
                            }
                            setWorldExtX(t) {
                                this.lworldExtX = t;
                            }
                            getWorldExtY() {
                                return this.lworldExtY;
                            }
                            setWorldExtY(t) {
                                this.lworldExtY = t;
                            }
                            getDeviceOrgX() {
                                return this.ldeviceOrgX;
                            }
                            setDeviceOrgX(t) {
                                this.ldeviceOrgX = t;
                            }
                            getDeviceOrgY() {
                                return this.ldeviceOrgY;
                            }
                            setDeviceOrgY(t) {
                                this.ldeviceOrgY = t;
                            }
                            getDeviceExtX() {
                                return this.ldeviceExtX;
                            }
                            setDeviceExtX(t) {
                                this.ldeviceExtX = t;
                            }
                            getDeviceExtY() {
                                return this.ldeviceExtY;
                            }
                            setDeviceExtY(t) {
                                this.ldeviceExtY = t;
                            }
                            transformX(t) {
                                let i = 0;
                                const lworldExtX = this.lworldExtX;
                                if (lworldExtX != 0) {
                                    i = this.ldeviceOrgX + (t - this.lworldOrgX) * this.ldeviceExtX / lworldExtX;
                                }
                                return i;
                            }
                            transformY(t) {
                                let i = 0;
                                const lworldExtY = this.lworldExtY;
                                if (lworldExtY != 0) {
                                    i = this.ldeviceOrgY + (t - this.lworldOrgY) * this.ldeviceExtY / lworldExtY;
                                }
                                return i;
                            }
                            inverseTransformX(t) {
                                let i = 0;
                                const ldeviceExtX = this.ldeviceExtX;
                                if (ldeviceExtX != 0) {
                                    i = this.lworldOrgX + (t - this.ldeviceOrgX) * this.lworldExtX / ldeviceExtX;
                                }
                                return i;
                            }
                            inverseTransformY(t) {
                                let i = 0;
                                const ldeviceExtY = this.ldeviceExtY;
                                if (ldeviceExtY != 0) {
                                    i = this.lworldOrgY + (t - this.ldeviceOrgY) * this.lworldExtY / ldeviceExtY;
                                }
                                return i;
                            }
                            inverseTransformPoint(t) {
                                const i = new o(this.inverseTransformX(t.x), this.inverseTransformY(t.y));
                                return i;
                            }
                        }
                        N.exports = e;
                    },
                    function(N, I, L) {
                        function o(r) {
                            if (Array.isArray(r)) {
                                for(var h = 0, a = Array(r.length); h < r.length; h++){
                                    a[h] = r[h];
                                }
                                return a;
                            } else {
                                return Array.from(r);
                            }
                        }
                        const e = L(15);
                        const t = L(7);
                        const i = L(0);
                        const l = L(8);
                        const g = L(9);
                        class n extends e {
                            constructor(){
                                super();
                                this.useSmartIdealEdgeLengthCalculation = t.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION;
                                this.idealEdgeLength = t.DEFAULT_EDGE_LENGTH;
                                this.springConstant = t.DEFAULT_SPRING_STRENGTH;
                                this.repulsionConstant = t.DEFAULT_REPULSION_STRENGTH;
                                this.gravityConstant = t.DEFAULT_GRAVITY_STRENGTH;
                                this.compoundGravityConstant = t.DEFAULT_COMPOUND_GRAVITY_STRENGTH;
                                this.gravityRangeFactor = t.DEFAULT_GRAVITY_RANGE_FACTOR;
                                this.compoundGravityRangeFactor = t.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR;
                                this.displacementThresholdPerNode = 3 * t.DEFAULT_EDGE_LENGTH / 100;
                                this.coolingFactor = t.DEFAULT_COOLING_FACTOR_INCREMENTAL;
                                this.initialCoolingFactor = t.DEFAULT_COOLING_FACTOR_INCREMENTAL;
                                this.totalDisplacement = 0;
                                this.oldTotalDisplacement = 0;
                                this.maxIterations = t.MAX_ITERATIONS;
                            }
                            initParameters() {
                                e.prototype.initParameters.call(this, arguments);
                                this.totalIterations = 0;
                                this.notAnimatedIterations = 0;
                                this.useFRGridVariant = t.DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION;
                                this.grid = [];
                            }
                            calcIdealEdgeLengths() {
                                let r;
                                let h;
                                let a;
                                let p;
                                let v;
                                let D;
                                for(let u = this.getGraphManager().getAllEdges(), T = 0; T < u.length; T++){
                                    r = u[T];
                                    r.idealLength = this.idealEdgeLength;
                                    if (r.isInterGraph) {
                                        a = r.getSource();
                                        p = r.getTarget();
                                        v = r.getSourceInLca().getEstimatedSize();
                                        D = r.getTargetInLca().getEstimatedSize();
                                        if (this.useSmartIdealEdgeLengthCalculation) {
                                            r.idealLength += v + D - 2 * i.SIMPLE_NODE_SIZE;
                                        }
                                        h = r.getLca().getInclusionTreeDepth();
                                        r.idealLength += t.DEFAULT_EDGE_LENGTH * t.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR * (a.getInclusionTreeDepth() + p.getInclusionTreeDepth() - 2 * h);
                                    }
                                }
                            }
                            initSpringEmbedder() {
                                const length = this.getAllNodes().length;
                                if (this.incremental) {
                                    if (length > t.ADAPTATION_LOWER_NODE_LIMIT) {
                                        this.coolingFactor = Math.max(this.coolingFactor * t.COOLING_ADAPTATION_FACTOR, this.coolingFactor - (length - t.ADAPTATION_LOWER_NODE_LIMIT) / (t.ADAPTATION_UPPER_NODE_LIMIT - t.ADAPTATION_LOWER_NODE_LIMIT) * this.coolingFactor * (1 - t.COOLING_ADAPTATION_FACTOR));
                                    }
                                    this.maxNodeDisplacement = t.MAX_NODE_DISPLACEMENT_INCREMENTAL;
                                } else {
                                    if (length > t.ADAPTATION_LOWER_NODE_LIMIT) {
                                        this.coolingFactor = Math.max(t.COOLING_ADAPTATION_FACTOR, 1 - (length - t.ADAPTATION_LOWER_NODE_LIMIT) / (t.ADAPTATION_UPPER_NODE_LIMIT - t.ADAPTATION_LOWER_NODE_LIMIT) * (1 - t.COOLING_ADAPTATION_FACTOR));
                                    } else {
                                        this.coolingFactor = 1;
                                    }
                                    this.initialCoolingFactor = this.coolingFactor;
                                    this.maxNodeDisplacement = t.MAX_NODE_DISPLACEMENT;
                                }
                                this.maxIterations = Math.max(this.getAllNodes().length * 5, this.maxIterations);
                                this.totalDisplacementThreshold = this.displacementThresholdPerNode * this.getAllNodes().length;
                                this.repulsionRange = this.calcRepulsionRange();
                            }
                            calcSpringForces() {
                                let h;
                                for(let r = this.getAllEdges(), a = 0; a < r.length; a++){
                                    h = r[a];
                                    this.calcSpringForce(h, h.idealLength);
                                }
                            }
                            calcRepulsionForces(r = true, h = false) {
                                let a;
                                let p;
                                let v;
                                let D;
                                const u = this.getAllNodes();
                                let T;
                                if (this.useFRGridVariant) {
                                    if (this.totalIterations % t.GRID_CALCULATION_CHECK_PERIOD == 1 && r) {
                                        this.updateGrid();
                                    }
                                    T = new Set;
                                    for(a = 0; a < u.length; a++){
                                        v = u[a];
                                        this.calculateRepulsionForceOfANode(v, T, r, h);
                                        T.add(v);
                                    }
                                } else {
                                    for(a = 0; a < u.length; a++){
                                        v = u[a];
                                        for(p = a + 1; p < u.length; p++){
                                            D = u[p];
                                            if (v.getOwner() == D.getOwner()) {
                                                this.calcRepulsionForce(v, D);
                                            }
                                        }
                                    }
                                }
                            }
                            calcGravitationalForces() {
                                let r;
                                for(let h = this.getAllNodesToApplyGravitation(), a = 0; a < h.length; a++){
                                    r = h[a];
                                    this.calcGravitationalForce(r);
                                }
                            }
                            moveNodes() {
                                let h;
                                for(let r = this.getAllNodes(), a = 0; a < r.length; a++){
                                    h = r[a];
                                    h.move();
                                }
                            }
                            calcSpringForce(r, h) {
                                const a = r.getSource();
                                const p = r.getTarget();
                                let v;
                                let D;
                                let u;
                                let T;
                                if (this.uniformLeafNodeSizes && a.getChild() == null && p.getChild() == null) {
                                    r.updateLengthSimple();
                                } else {
                                    r.updateLength();
                                    if (r.isOverlapingSourceAndTarget) {
                                        return;
                                    }
                                }
                                v = r.getLength();
                                if (v != 0) {
                                    D = this.springConstant * (v - h);
                                    u = D * (r.lengthX / v);
                                    T = D * (r.lengthY / v);
                                    a.springForceX += u;
                                    a.springForceY += T;
                                    p.springForceX -= u;
                                    p.springForceY -= T;
                                }
                            }
                            calcRepulsionForce(r, h) {
                                const a = r.getRect();
                                const p = h.getRect();
                                const v = new Array(2);
                                const D = new Array(4);
                                let u;
                                let T;
                                let y;
                                let O;
                                let s;
                                let f;
                                let c;
                                if (a.intersects(p)) {
                                    l.calcSeparationAmount(a, p, v, t.DEFAULT_EDGE_LENGTH / 2);
                                    f = 2 * v[0];
                                    c = 2 * v[1];
                                    const E = r.noOfChildren * h.noOfChildren / (r.noOfChildren + h.noOfChildren);
                                    r.repulsionForceX -= E * f;
                                    r.repulsionForceY -= E * c;
                                    h.repulsionForceX += E * f;
                                    h.repulsionForceY += E * c;
                                } else {
                                    if (this.uniformLeafNodeSizes && r.getChild() == null && h.getChild() == null) {
                                        u = p.getCenterX() - a.getCenterX();
                                        T = p.getCenterY() - a.getCenterY();
                                    } else {
                                        l.getIntersection(a, p, D);
                                        u = D[2] - D[0];
                                        T = D[3] - D[1];
                                    }
                                    if (Math.abs(u) < t.MIN_REPULSION_DIST) {
                                        u = g.sign(u) * t.MIN_REPULSION_DIST;
                                    }
                                    if (Math.abs(T) < t.MIN_REPULSION_DIST) {
                                        T = g.sign(T) * t.MIN_REPULSION_DIST;
                                    }
                                    y = u * u + T * T;
                                    O = Math.sqrt(y);
                                    s = this.repulsionConstant * r.noOfChildren * h.noOfChildren / y;
                                    f = s * u / O;
                                    c = s * T / O;
                                    r.repulsionForceX -= f;
                                    r.repulsionForceY -= c;
                                    h.repulsionForceX += f;
                                    h.repulsionForceY += c;
                                }
                            }
                            calcGravitationalForce(r) {
                                let h;
                                let a;
                                let p;
                                let v;
                                let D;
                                let u;
                                let T;
                                let y;
                                h = r.getOwner();
                                a = (h.getRight() + h.getLeft()) / 2;
                                p = (h.getTop() + h.getBottom()) / 2;
                                v = r.getCenterX() - a;
                                D = r.getCenterY() - p;
                                u = Math.abs(v) + r.getWidth() / 2;
                                T = Math.abs(D) + r.getHeight() / 2;
                                if (r.getOwner() == this.graphManager.getRoot()) {
                                    y = h.getEstimatedSize() * this.gravityRangeFactor;
                                    if (u > y || T > y) {
                                        r.gravitationForceX = -this.gravityConstant * v;
                                        r.gravitationForceY = -this.gravityConstant * D;
                                    }
                                } else {
                                    y = h.getEstimatedSize() * this.compoundGravityRangeFactor;
                                    if (u > y || T > y) {
                                        r.gravitationForceX = -this.gravityConstant * v * this.compoundGravityConstant;
                                        r.gravitationForceY = -this.gravityConstant * D * this.compoundGravityConstant;
                                    }
                                }
                            }
                            isConverged() {
                                let r;
                                let h = false;
                                if (this.totalIterations > this.maxIterations / 3) {
                                    h = Math.abs(this.totalDisplacement - this.oldTotalDisplacement) < 2;
                                }
                                r = this.totalDisplacement < this.totalDisplacementThreshold;
                                this.oldTotalDisplacement = this.totalDisplacement;
                                return r || h;
                            }
                            animate() {
                                this.animationDuringLayout && !this.isSubLayout && (this.notAnimatedIterations == this.animationPeriod ? (this.update(), this.notAnimatedIterations = 0) : this.notAnimatedIterations++);
                            }
                            calcNoOfChildrenForAllNodes() {
                                let r;
                                for(let h = this.graphManager.getAllNodes(), a = 0; a < h.length; a++){
                                    r = h[a];
                                    r.noOfChildren = r.getNoOfChildren();
                                }
                            }
                            calcGrid(r) {
                                let h = 0;
                                let a = 0;
                                h = parseInt(Math.ceil((r.getRight() - r.getLeft()) / this.repulsionRange));
                                a = parseInt(Math.ceil((r.getBottom() - r.getTop()) / this.repulsionRange));
                                const p = new Array(h);
                                for(var v = 0; v < h; v++){
                                    p[v] = new Array(a);
                                }
                                for(var v = 0; v < h; v++){
                                    for(let D = 0; D < a; D++){
                                        p[v][D] = new Array;
                                    }
                                }
                                return p;
                            }
                            addNodeToGrid(r, h, a) {
                                let p = 0;
                                let v = 0;
                                let D = 0;
                                let u = 0;
                                p = parseInt(Math.floor((r.getRect().x - h) / this.repulsionRange));
                                v = parseInt(Math.floor((r.getRect().width + r.getRect().x - h) / this.repulsionRange));
                                D = parseInt(Math.floor((r.getRect().y - a) / this.repulsionRange));
                                u = parseInt(Math.floor((r.getRect().height + r.getRect().y - a) / this.repulsionRange));
                                for(let T = p; T <= v; T++){
                                    for(let y = D; y <= u; y++){
                                        this.grid[T][y].push(r);
                                        r.setGridCoordinates(p, v, D, u);
                                    }
                                }
                            }
                            updateGrid() {
                                let r;
                                let h;
                                const a = this.getAllNodes();
                                this.grid = this.calcGrid(this.graphManager.getRoot());
                                for(r = 0; r < a.length; r++){
                                    h = a[r];
                                    this.addNodeToGrid(h, this.graphManager.getRoot().getLeft(), this.graphManager.getRoot().getTop());
                                }
                            }
                            calculateRepulsionForceOfANode(r, h, a, p) {
                                if (this.totalIterations % t.GRID_CALCULATION_CHECK_PERIOD == 1 && a || p) {
                                    const v = new Set;
                                    r.surrounding = new Array;
                                    let D;
                                    const u = this.grid;
                                    for(var T = r.startX - 1; T < r.finishX + 2; T++){
                                        for(let y = r.startY - 1; y < r.finishY + 2; y++){
                                            if (!(T < 0 || y < 0 || T >= u.length || y >= u[0].length)) {
                                                for(let O = 0; O < u[T][y].length; O++){
                                                    D = u[T][y][O];
                                                    if (!(r.getOwner() != D.getOwner() || r == D) && !h.has(D) && !v.has(D)) {
                                                        const s = Math.abs(r.getCenterX() - D.getCenterX()) - (r.getWidth() / 2 + D.getWidth() / 2);
                                                        const f = Math.abs(r.getCenterY() - D.getCenterY()) - (r.getHeight() / 2 + D.getHeight() / 2);
                                                        if (s <= this.repulsionRange && f <= this.repulsionRange) {
                                                            v.add(D);
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    r.surrounding = [].concat(o(v));
                                }
                                for(T = 0; T < r.surrounding.length; T++){
                                    this.calcRepulsionForce(r, r.surrounding[T]);
                                }
                            }
                            calcRepulsionRange() {
                                return 0;
                            }
                        }
                        for(const d in e){
                            n[d] = e[d];
                        }
                        N.exports = n;
                    },
                    (N, I, L)=>{
                        const o = L(1);
                        const e = L(7);
                        function t(l, g, n) {
                            o.call(this, l, g, n);
                            this.idealLength = e.DEFAULT_EDGE_LENGTH;
                        }
                        t.prototype = Object.create(o.prototype);
                        for(const i in o){
                            t[i] = o[i];
                        }
                        N.exports = t;
                    },
                    function(N, I, L) {
                        const o = L(3);
                        class e extends o {
                            constructor(i, l, g, n){
                                super(i, l, g, n);
                                this.springForceX = 0;
                                this.springForceY = 0;
                                this.repulsionForceX = 0;
                                this.repulsionForceY = 0;
                                this.gravitationForceX = 0;
                                this.gravitationForceY = 0;
                                this.displacementX = 0;
                                this.displacementY = 0;
                                this.startX = 0;
                                this.finishX = 0;
                                this.startY = 0;
                                this.finishY = 0;
                                this.surrounding = [];
                            }
                            setGridCoordinates(i, l, g, n) {
                                this.startX = i;
                                this.finishX = l;
                                this.startY = g;
                                this.finishY = n;
                            }
                        }
                        for(const t in o){
                            e[t] = o[t];
                        }
                        N.exports = e;
                    },
                    function(N, I, L) {
                        class o {
                            constructor(e, t){
                                this.width = 0;
                                this.height = 0;
                                if (e !== null && t !== null) {
                                    this.height = t;
                                    this.width = e;
                                }
                            }
                            getWidth() {
                                return this.width;
                            }
                            setWidth(e) {
                                this.width = e;
                            }
                            getHeight() {
                                return this.height;
                            }
                            setHeight(e) {
                                this.height = e;
                            }
                        }
                        N.exports = o;
                    },
                    function(N, I, L) {
                        const o = L(14);
                        class e {
                            constructor(){
                                this.map = {};
                                this.keys = [];
                            }
                            put(t, i) {
                                const l = o.createID(t);
                                if (!this.contains(l)) {
                                    this.map[l] = i;
                                    this.keys.push(t);
                                }
                            }
                            contains(t) {
                                o.createID(t);
                                return this.map[t] != null;
                            }
                            get(t) {
                                const i = o.createID(t);
                                return this.map[i];
                            }
                            keySet() {
                                return this.keys;
                            }
                        }
                        N.exports = e;
                    },
                    function(N, I, L) {
                        const o = L(14);
                        class e {
                            constructor(){
                                this.set = {};
                            }
                            add(t) {
                                const i = o.createID(t);
                                if (!this.contains(i)) {
                                    this.set[i] = t;
                                }
                            }
                            remove(t) {
                                delete this.set[o.createID(t)];
                            }
                            clear() {
                                this.set = {};
                            }
                            contains(t) {
                                return this.set[o.createID(t)] == t;
                            }
                            isEmpty() {
                                return this.size() === 0;
                            }
                            size() {
                                return Object.keys(this.set).length;
                            }
                            addAllTo(t) {
                                const i = Object.keys(this.set);
                                for(let l = i.length, g = 0; g < l; g++){
                                    t.push(this.set[i[g]]);
                                }
                            }
                            size() {
                                return Object.keys(this.set).length;
                            }
                            addAll(t) {
                                for(let i = t.length, l = 0; l < i; l++){
                                    const g = t[l];
                                    this.add(g);
                                }
                            }
                        }
                        N.exports = e;
                    },
                    (N, I, L)=>{
                        const o = (()=>{
                            function l(g, n) {
                                for (const r of n){
                                    r.enumerable = r.enumerable || false;
                                    r.configurable = true;
                                    if ("value" in r) {
                                        r.writable = true;
                                    }
                                    Object.defineProperty(g, r.key, r);
                                }
                            }
                            return (g, n, d)=>{
                                if (n) {
                                    l(g.prototype, n);
                                }
                                if (d) {
                                    l(g, d);
                                }
                                return g;
                            };
                        })();
                        function e(l, g) {
                            if (!(l instanceof g)) {
                                throw new TypeError("Cannot call a class as a function");
                            }
                        }
                        const t = L(11);
                        const i = (()=>{
                            function l(g, n) {
                                e(this, l);
                                if (n !== null || n !== undefined) {
                                    this.compareFunction = this._defaultCompareFunction;
                                }
                                let d;
                                if (g instanceof t) {
                                    d = g.size();
                                } else {
                                    d = g.length;
                                }
                                this._quicksort(g, 0, d - 1);
                            }
                            o(l, [
                                {
                                    key: "_quicksort",
                                    value (n, d, r) {
                                        if (d < r) {
                                            const h = this._partition(n, d, r);
                                            this._quicksort(n, d, h);
                                            this._quicksort(n, h + 1, r);
                                        }
                                    }
                                },
                                {
                                    key: "_partition",
                                    value (n, d, r) {
                                        const h = this._get(n, d);
                                        let a = d;
                                        let p = r;
                                        while(true){
                                            while(this.compareFunction(h, this._get(n, p))){
                                                p--;
                                            }
                                            while(this.compareFunction(this._get(n, a), h)){
                                                a++;
                                            }
                                            if (a < p) {
                                                this._swap(n, a, p);
                                                a++;
                                                p--;
                                            } else {
                                                return p;
                                            }
                                        }
                                    }
                                },
                                {
                                    key: "_get",
                                    value (n, d) {
                                        if (n instanceof t) {
                                            return n.get_object_at(d);
                                        }
                                        return n[d];
                                    }
                                },
                                {
                                    key: "_set",
                                    value (n, d, r) {
                                        if (n instanceof t) {
                                            n.set_object_at(d, r);
                                        } else {
                                            n[d] = r;
                                        }
                                    }
                                },
                                {
                                    key: "_swap",
                                    value (n, d, r) {
                                        const h = this._get(n, d);
                                        this._set(n, d, this._get(n, r));
                                        this._set(n, r, h);
                                    }
                                },
                                {
                                    key: "_defaultCompareFunction",
                                    value (n, d) {
                                        return d > n;
                                    }
                                }
                            ]);
                            return l;
                        })();
                        N.exports = i;
                    },
                    (N, I, L)=>{
                        const o = (()=>{
                            function i(l, g) {
                                for (const d of g){
                                    d.enumerable = d.enumerable || false;
                                    d.configurable = true;
                                    if ("value" in d) {
                                        d.writable = true;
                                    }
                                    Object.defineProperty(l, d.key, d);
                                }
                            }
                            return (l, g, n)=>{
                                if (g) {
                                    i(l.prototype, g);
                                }
                                if (n) {
                                    i(l, n);
                                }
                                return l;
                            };
                        })();
                        function e(i, l) {
                            if (!(i instanceof l)) {
                                throw new TypeError("Cannot call a class as a function");
                            }
                        }
                        const t = (()=>{
                            function i(l, g, n = 1, d = -1, r = -1) {
                                e(this, i);
                                this.sequence1 = l;
                                this.sequence2 = g;
                                this.match_score = n;
                                this.mismatch_penalty = d;
                                this.gap_penalty = r;
                                this.iMax = l.length + 1;
                                this.jMax = g.length + 1;
                                this.grid = new Array(this.iMax);
                                for(let h = 0; h < this.iMax; h++){
                                    this.grid[h] = new Array(this.jMax);
                                    for(let a = 0; a < this.jMax; a++){
                                        this.grid[h][a] = 0;
                                    }
                                }
                                this.tracebackGrid = new Array(this.iMax);
                                for(let p = 0; p < this.iMax; p++){
                                    this.tracebackGrid[p] = new Array(this.jMax);
                                    for(let v = 0; v < this.jMax; v++){
                                        this.tracebackGrid[p][v] = [
                                            null,
                                            null,
                                            null
                                        ];
                                    }
                                }
                                this.alignments = [];
                                this.score = -1;
                                this.computeGrids();
                            }
                            o(i, [
                                {
                                    key: "getScore",
                                    value () {
                                        return this.score;
                                    }
                                },
                                {
                                    key: "getAlignments",
                                    value () {
                                        return this.alignments;
                                    }
                                },
                                {
                                    key: "computeGrids",
                                    value () {
                                        for(let g = 1; g < this.jMax; g++){
                                            this.grid[0][g] = this.grid[0][g - 1] + this.gap_penalty;
                                            this.tracebackGrid[0][g] = [
                                                false,
                                                false,
                                                true
                                            ];
                                        }
                                        for(let n = 1; n < this.iMax; n++){
                                            this.grid[n][0] = this.grid[n - 1][0] + this.gap_penalty;
                                            this.tracebackGrid[n][0] = [
                                                false,
                                                true,
                                                false
                                            ];
                                        }
                                        for(let d = 1; d < this.iMax; d++){
                                            for(let r = 1; r < this.jMax; r++){
                                                let h;
                                                if (this.sequence1[d - 1] === this.sequence2[r - 1]) {
                                                    h = this.grid[d - 1][r - 1] + this.match_score;
                                                } else {
                                                    h = this.grid[d - 1][r - 1] + this.mismatch_penalty;
                                                }
                                                const a = this.grid[d - 1][r] + this.gap_penalty;
                                                const p = this.grid[d][r - 1] + this.gap_penalty;
                                                const v = [
                                                    h,
                                                    a,
                                                    p
                                                ];
                                                const D = this.arrayAllMaxIndexes(v);
                                                this.grid[d][r] = v[D[0]];
                                                this.tracebackGrid[d][r] = [
                                                    D.includes(0),
                                                    D.includes(1),
                                                    D.includes(2)
                                                ];
                                            }
                                        }
                                        this.score = this.grid[this.iMax - 1][this.jMax - 1];
                                    }
                                },
                                {
                                    key: "alignmentTraceback",
                                    value () {
                                        const g = [];
                                        for(g.push({
                                            pos: [
                                                this.sequence1.length,
                                                this.sequence2.length
                                            ],
                                            seq1: "",
                                            seq2: ""
                                        }); g[0];){
                                            const n = g[0];
                                            const d = this.tracebackGrid[n.pos[0]][n.pos[1]];
                                            if (d[0]) {
                                                g.push({
                                                    pos: [
                                                        n.pos[0] - 1,
                                                        n.pos[1] - 1
                                                    ],
                                                    seq1: this.sequence1[n.pos[0] - 1] + n.seq1,
                                                    seq2: this.sequence2[n.pos[1] - 1] + n.seq2
                                                });
                                            }
                                            if (d[1]) {
                                                g.push({
                                                    pos: [
                                                        n.pos[0] - 1,
                                                        n.pos[1]
                                                    ],
                                                    seq1: this.sequence1[n.pos[0] - 1] + n.seq1,
                                                    seq2: `-${n.seq2}`
                                                });
                                            }
                                            if (d[2]) {
                                                g.push({
                                                    pos: [
                                                        n.pos[0],
                                                        n.pos[1] - 1
                                                    ],
                                                    seq1: `-${n.seq1}`,
                                                    seq2: this.sequence2[n.pos[1] - 1] + n.seq2
                                                });
                                            }
                                            if (n.pos[0] === 0 && n.pos[1] === 0) {
                                                this.alignments.push({
                                                    sequence1: n.seq1,
                                                    sequence2: n.seq2
                                                });
                                            }
                                            g.shift();
                                        }
                                        return this.alignments;
                                    }
                                },
                                {
                                    key: "getAllIndexes",
                                    value (g, n) {
                                        const d = [];
                                        for(let r = -1; (r = g.indexOf(n, r + 1)) !== -1;){
                                            d.push(r);
                                        }
                                        return d;
                                    }
                                },
                                {
                                    key: "arrayAllMaxIndexes",
                                    value (g) {
                                        return this.getAllIndexes(g, Math.max.apply(null, g));
                                    }
                                }
                            ]);
                            return i;
                        })();
                        N.exports = t;
                    },
                    (N, I, L)=>{
                        const o = ()=>{};
                        o.FDLayout = L(18);
                        o.FDLayoutConstants = L(7);
                        o.FDLayoutEdge = L(19);
                        o.FDLayoutNode = L(20);
                        o.DimensionD = L(21);
                        o.HashMap = L(22);
                        o.HashSet = L(23);
                        o.IGeometry = L(8);
                        o.IMath = L(9);
                        o.Integer = L(10);
                        o.Point = L(12);
                        o.PointD = L(4);
                        o.RandomSeed = L(16);
                        o.RectangleD = L(13);
                        o.Transform = L(17);
                        o.UniqueIDGeneretor = L(14);
                        o.Quicksort = L(24);
                        o.LinkedList = L(11);
                        o.LGraphObject = L(2);
                        o.LGraph = L(5);
                        o.LEdge = L(1);
                        o.LGraphManager = L(6);
                        o.LNode = L(3);
                        o.Layout = L(15);
                        o.LayoutConstants = L(0);
                        o.NeedlemanWunsch = L(25);
                        N.exports = o;
                    },
                    (N, I, L)=>{
                        function o() {
                            this.listeners = [];
                        }
                        const o_prototype = o.prototype;
                        o_prototype.addListener = function(event, callback) {
                            this.listeners.push({
                                event,
                                callback
                            });
                        };
                        o_prototype.removeListener = function(t, i) {
                            for(let l = this.listeners.length; l >= 0; l--){
                                const g = this.listeners[l];
                                if (g.event === t && g.callback === i) {
                                    this.listeners.splice(l, 1);
                                }
                            }
                        };
                        o_prototype.emit = function(t, i) {
                            for(let l = 0; l < this.listeners.length; l++){
                                const listener = this.listeners[l];
                                if (t === listener.event) {
                                    listener.callback(i);
                                }
                            }
                        };
                        N.exports = o;
                    }
                ]));
        })(Q);
    }
    return Q.exports;
}
const $_exports = $.exports;
let z;
function pt() {
    if (!z) {
        z = 1;
        ((G, b)=>{
            (($_exports_1, L)=>{
                G.exports = L(ft());
            })($_exports, (N)=>((I)=>{
                    const L = {};
                    function o(e) {
                        if (L[e]) {
                            return L[e].exports;
                        }
                        const t = L[e] = {
                            i: e,
                            l: false,
                            exports: {}
                        };
                        I[e].call(t.exports, t, t.exports, o);
                        t.l = true;
                        return t.exports;
                    }
                    o.m = I;
                    o.c = L;
                    o.i = (e)=>e;
                    o.d = (e, t, i)=>{
                        if (!o.o(e, t)) {
                            Object.defineProperty(e, t, {
                                configurable: false,
                                enumerable: true,
                                get: i
                            });
                        }
                    };
                    o.n = (e)=>{
                        const t = e && e.__esModule ? ()=>e.default : ()=>e;
                        o.d(t, "a", t);
                        return t;
                    };
                    o.o = (e, t)=>Object.prototype.hasOwnProperty.call(e, t);
                    o.p = "";
                    return o(o.s = 7);
                })([
                    (I, L)=>{
                        I.exports = N;
                    },
                    (I, L, o)=>{
                        const FDLayoutConstants = o(0).FDLayoutConstants;
                        function t() {}
                        for(const i in FDLayoutConstants){
                            t[i] = FDLayoutConstants[i];
                        }
                        t.DEFAULT_USE_MULTI_LEVEL_SCALING = false;
                        t.DEFAULT_RADIAL_SEPARATION = FDLayoutConstants.DEFAULT_EDGE_LENGTH;
                        t.DEFAULT_COMPONENT_SEPERATION = 60;
                        t.TILE = true;
                        t.TILING_PADDING_VERTICAL = 10;
                        t.TILING_PADDING_HORIZONTAL = 10;
                        t.TREE_REDUCTION_ON_INCREMENTAL = false;
                        I.exports = t;
                    },
                    (I, L, o)=>{
                        const FDLayoutEdge = o(0).FDLayoutEdge;
                        function t(l, g, n) {
                            FDLayoutEdge.call(this, l, g, n);
                        }
                        t.prototype = Object.create(FDLayoutEdge.prototype);
                        for(const i in FDLayoutEdge){
                            t[i] = FDLayoutEdge[i];
                        }
                        I.exports = t;
                    },
                    (I, L, o)=>{
                        const LGraph = o(0).LGraph;
                        function t(l, g, n) {
                            LGraph.call(this, l, g, n);
                        }
                        t.prototype = Object.create(LGraph.prototype);
                        for(const i in LGraph){
                            t[i] = LGraph[i];
                        }
                        I.exports = t;
                    },
                    (I, L, o)=>{
                        const LGraphManager = o(0).LGraphManager;
                        function t(l) {
                            LGraphManager.call(this, l);
                        }
                        t.prototype = Object.create(LGraphManager.prototype);
                        for(const i in LGraphManager){
                            t[i] = LGraphManager[i];
                        }
                        I.exports = t;
                    },
                    (I, L, o)=>{
                        const FDLayoutNode = o(0).FDLayoutNode;
                        const IMath = o(0).IMath;
                        class i extends FDLayoutNode {
                            constructor(g, n, d, r){
                                super(g, n, d, r);
                            }
                            move() {
                                const g = this.graphManager.getLayout();
                                this.displacementX = g.coolingFactor * (this.springForceX + this.repulsionForceX + this.gravitationForceX) / this.noOfChildren;
                                this.displacementY = g.coolingFactor * (this.springForceY + this.repulsionForceY + this.gravitationForceY) / this.noOfChildren;
                                if (Math.abs(this.displacementX) > g.coolingFactor * g.maxNodeDisplacement) {
                                    this.displacementX = g.coolingFactor * g.maxNodeDisplacement * IMath.sign(this.displacementX);
                                }
                                if (Math.abs(this.displacementY) > g.coolingFactor * g.maxNodeDisplacement) {
                                    this.displacementY = g.coolingFactor * g.maxNodeDisplacement * IMath.sign(this.displacementY);
                                }
                                if (this.child == null) {
                                    this.moveBy(this.displacementX, this.displacementY);
                                } else if (this.child.getNodes().length == 0) {
                                    this.moveBy(this.displacementX, this.displacementY);
                                } else {
                                    this.propogateDisplacementToChildren(this.displacementX, this.displacementY);
                                }
                                g.totalDisplacement += Math.abs(this.displacementX) + Math.abs(this.displacementY);
                                this.springForceX = 0;
                                this.springForceY = 0;
                                this.repulsionForceX = 0;
                                this.repulsionForceY = 0;
                                this.gravitationForceX = 0;
                                this.gravitationForceY = 0;
                                this.displacementX = 0;
                                this.displacementY = 0;
                            }
                            propogateDisplacementToChildren(g, n) {
                                let r;
                                for(let d = this.getChild().getNodes(), h = 0; h < d.length; h++){
                                    r = d[h];
                                    if (r.getChild() == null) {
                                        r.moveBy(g, n);
                                        r.displacementX += g;
                                        r.displacementY += n;
                                    } else {
                                        r.propogateDisplacementToChildren(g, n);
                                    }
                                }
                            }
                            setPred1(g) {
                                this.pred1 = g;
                            }
                            getPred1() {
                                return pred1;
                            }
                            getPred2() {
                                return pred2;
                            }
                            setNext(g) {
                                this.next = g;
                            }
                            getNext() {
                                return next;
                            }
                            setProcessed(g) {
                                this.processed = g;
                            }
                            isProcessed() {
                                return processed;
                            }
                        }
                        for(const l in FDLayoutNode){
                            i[l] = FDLayoutNode[l];
                        }
                        I.exports = i;
                    },
                    function(I, L, o) {
                        const FDLayout = o(0).FDLayout;
                        const t = o(4);
                        const i = o(3);
                        const l = o(5);
                        const g = o(2);
                        const n = o(1);
                        const FDLayoutConstants = o(0).FDLayoutConstants;
                        const LayoutConstants = o(0).LayoutConstants;
                        const Point = o(0).Point;
                        const PointD = o(0).PointD;
                        const Layout = o(0).Layout;
                        const Integer = o(0).Integer;
                        const IGeometry = o(0).IGeometry;
                        const LGraph = o(0).LGraph;
                        const Transform = o(0).Transform;
                        class y extends FDLayout {
                            constructor(){
                                super();
                                this.toBeTiled = {};
                            }
                            newGraphManager() {
                                const s = new t(this);
                                this.graphManager = s;
                                return s;
                            }
                            newGraph(s) {
                                return new i(null, this.graphManager, s);
                            }
                            newNode(s) {
                                return new l(this.graphManager, s);
                            }
                            newEdge(s) {
                                return new g(null, null, s);
                            }
                            initParameters() {
                                FDLayout.prototype.initParameters.call(this, arguments);
                                if (!this.isSubLayout) {
                                    if (n.DEFAULT_EDGE_LENGTH < 10) {
                                        this.idealEdgeLength = 10;
                                    } else {
                                        this.idealEdgeLength = n.DEFAULT_EDGE_LENGTH;
                                    }
                                    this.useSmartIdealEdgeLengthCalculation = n.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION;
                                    this.springConstant = FDLayoutConstants.DEFAULT_SPRING_STRENGTH;
                                    this.repulsionConstant = FDLayoutConstants.DEFAULT_REPULSION_STRENGTH;
                                    this.gravityConstant = FDLayoutConstants.DEFAULT_GRAVITY_STRENGTH;
                                    this.compoundGravityConstant = FDLayoutConstants.DEFAULT_COMPOUND_GRAVITY_STRENGTH;
                                    this.gravityRangeFactor = FDLayoutConstants.DEFAULT_GRAVITY_RANGE_FACTOR;
                                    this.compoundGravityRangeFactor = FDLayoutConstants.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR;
                                    this.prunedNodesAll = [];
                                    this.growTreeIterations = 0;
                                    this.afterGrowthIterations = 0;
                                    this.isTreeGrowing = false;
                                    this.isGrowthFinished = false;
                                    this.coolingCycle = 0;
                                    this.maxCoolingCycle = this.maxIterations / FDLayoutConstants.CONVERGENCE_CHECK_PERIOD;
                                    this.finalTemperature = FDLayoutConstants.CONVERGENCE_CHECK_PERIOD / this.maxIterations;
                                    this.coolingAdjuster = 1;
                                }
                            }
                            layout() {
                                const LayoutConstants_DEFAULT_CREATE_BENDS_AS_NEEDED = LayoutConstants.DEFAULT_CREATE_BENDS_AS_NEEDED;
                                if (LayoutConstants_DEFAULT_CREATE_BENDS_AS_NEEDED) {
                                    this.createBendpoints();
                                    this.graphManager.resetAllEdges();
                                }
                                this.level = 0;
                                return this.classicLayout();
                            }
                            classicLayout() {
                                this.nodesWithGravity = this.calculateNodesToApplyGravitationTo();
                                this.graphManager.setAllNodesToApplyGravitation(this.nodesWithGravity);
                                this.calcNoOfChildrenForAllNodes();
                                this.graphManager.calcLowestCommonAncestors();
                                this.graphManager.calcInclusionTreeDepths();
                                this.graphManager.getRoot().calcEstimatedSize();
                                this.calcIdealEdgeLengths();
                                if (this.incremental) {
                                    if (n.TREE_REDUCTION_ON_INCREMENTAL) {
                                        this.reduceTrees();
                                        this.graphManager.resetAllNodesToApplyGravitation();
                                        var f = new Set(this.getAllNodes());
                                        var c = this.nodesWithGravity.filter((m)=>f.has(m));
                                        this.graphManager.setAllNodesToApplyGravitation(c);
                                    }
                                } else {
                                    const s = this.getFlatForest();
                                    if (s.length > 0) {
                                        this.positionNodesRadially(s);
                                    } else {
                                        this.reduceTrees();
                                        this.graphManager.resetAllNodesToApplyGravitation();
                                        var f = new Set(this.getAllNodes());
                                        var c = this.nodesWithGravity.filter((E)=>f.has(E));
                                        this.graphManager.setAllNodesToApplyGravitation(c);
                                        this.positionNodesRandomly();
                                    }
                                }
                                this.initSpringEmbedder();
                                this.runSpringEmbedder();
                                return true;
                            }
                            tick() {
                                this.totalIterations++;
                                if (this.totalIterations === this.maxIterations && !this.isTreeGrowing && !this.isGrowthFinished) {
                                    if (this.prunedNodesAll.length > 0) {
                                        this.isTreeGrowing = true;
                                    } else {
                                        return true;
                                    }
                                }
                                if (this.totalIterations % FDLayoutConstants.CONVERGENCE_CHECK_PERIOD == 0 && !this.isTreeGrowing && !this.isGrowthFinished) {
                                    if (this.isConverged()) {
                                        if (this.prunedNodesAll.length > 0) {
                                            this.isTreeGrowing = true;
                                        } else {
                                            return true;
                                        }
                                    }
                                    this.coolingCycle++;
                                    if (this.layoutQuality == 0) {
                                        this.coolingAdjuster = this.coolingCycle;
                                    } else if (this.layoutQuality == 1) {
                                        this.coolingAdjuster = this.coolingCycle / 3;
                                    }
                                    this.coolingFactor = Math.max(this.initialCoolingFactor - this.coolingCycle ** (Math.log(100 * (this.initialCoolingFactor - this.finalTemperature)) / Math.log(this.maxCoolingCycle)) / 100 * this.coolingAdjuster, this.finalTemperature);
                                    this.animationPeriod = Math.ceil(this.initialAnimationPeriod * Math.sqrt(this.coolingFactor));
                                }
                                if (this.isTreeGrowing) {
                                    if (this.growTreeIterations % 10 == 0) {
                                        if (this.prunedNodesAll.length > 0) {
                                            this.graphManager.updateBounds();
                                            this.updateGrid();
                                            this.growTree(this.prunedNodesAll);
                                            this.graphManager.resetAllNodesToApplyGravitation();
                                            const s = new Set(this.getAllNodes());
                                            const f = this.nodesWithGravity.filter((A)=>s.has(A));
                                            this.graphManager.setAllNodesToApplyGravitation(f);
                                            this.graphManager.updateBounds();
                                            this.updateGrid();
                                            this.coolingFactor = FDLayoutConstants.DEFAULT_COOLING_FACTOR_INCREMENTAL;
                                        } else {
                                            this.isTreeGrowing = false;
                                            this.isGrowthFinished = true;
                                        }
                                    }
                                    this.growTreeIterations++;
                                }
                                if (this.isGrowthFinished) {
                                    if (this.isConverged()) {
                                        return true;
                                    }
                                    if (this.afterGrowthIterations % 10 == 0) {
                                        this.graphManager.updateBounds();
                                        this.updateGrid();
                                    }
                                    this.coolingFactor = FDLayoutConstants.DEFAULT_COOLING_FACTOR_INCREMENTAL * ((100 - this.afterGrowthIterations) / 100);
                                    this.afterGrowthIterations++;
                                }
                                const c = !this.isTreeGrowing && !this.isGrowthFinished;
                                const E = this.growTreeIterations % 10 == 1 && this.isTreeGrowing || this.afterGrowthIterations % 10 == 1 && this.isGrowthFinished;
                                this.totalDisplacement = 0;
                                this.graphManager.updateBounds();
                                this.calcSpringForces();
                                this.calcRepulsionForces(c, E);
                                this.calcGravitationalForces();
                                this.moveNodes();
                                this.animate();
                                return false;
                            }
                            getPositionsData() {
                                for(var s = this.graphManager.getAllNodes(), f = {}, c = 0; c < s.length; c++){
                                    const E = s[c].rect;
                                    const id = s[c].id;
                                    f[id] = {
                                        id,
                                        x: E.getCenterX(),
                                        y: E.getCenterY(),
                                        w: E.width,
                                        h: E.height
                                    };
                                }
                                return f;
                            }
                            runSpringEmbedder() {
                                this.initialAnimationPeriod = 25;
                                this.animationPeriod = this.initialAnimationPeriod;
                                let s = false;
                                if (FDLayoutConstants.ANIMATE === "during") {
                                    this.emit("layoutstarted");
                                } else {
                                    while(!s){
                                        s = this.tick();
                                    }
                                    this.graphManager.updateBounds();
                                }
                            }
                            calculateNodesToApplyGravitationTo() {
                                let s = [];
                                let f;
                                const c = this.graphManager.getGraphs();
                                const c_length = c.length;
                                let A;
                                for(A = 0; A < c_length; A++){
                                    f = c[A];
                                    f.updateConnected();
                                    if (!f.isConnected) {
                                        s = s.concat(f.getNodes());
                                    }
                                }
                                return s;
                            }
                            createBendpoints() {
                                let s = [];
                                s = s.concat(this.graphManager.getAllEdges());
                                const f = new Set;
                                let c;
                                for(c = 0; c < s.length; c++){
                                    const E = s[c];
                                    if (!f.has(E)) {
                                        const A = E.getSource();
                                        const m = E.getTarget();
                                        if (A == m) {
                                            E.getBendpoints().push(new PointD);
                                            E.getBendpoints().push(new PointD);
                                            this.createDummyNodesForBendpoints(E);
                                            f.add(E);
                                        } else {
                                            let C = [];
                                            C = C.concat(A.getEdgeListToNode(m));
                                            C = C.concat(m.getEdgeListToNode(A));
                                            if (!f.has(C[0])) {
                                                if (C.length > 1) {
                                                    let R;
                                                    for(R = 0; R < C.length; R++){
                                                        const M = C[R];
                                                        M.getBendpoints().push(new PointD);
                                                        this.createDummyNodesForBendpoints(M);
                                                    }
                                                }
                                                C.forEach((S)=>{
                                                    f.add(S);
                                                });
                                            }
                                        }
                                    }
                                    if (f.size == s.length) {
                                        break;
                                    }
                                }
                            }
                            positionNodesRadially(s) {
                                const f = new Point(0, 0);
                                const c = Math.ceil(Math.sqrt(s.length));
                                let E = 0;
                                let A = 0;
                                let m = 0;
                                let C = new PointD(0, 0);
                                for(let R = 0; R < s.length; R++){
                                    if (R % c == 0) {
                                        m = 0;
                                        A = E;
                                        if (R != 0) {
                                            A += n.DEFAULT_COMPONENT_SEPERATION;
                                        }
                                        E = 0;
                                    }
                                    const M = s[R];
                                    const S = Layout.findCenterOfTree(M);
                                    f.x = m;
                                    f.y = A;
                                    C = y.radialLayout(M, S, f);
                                    if (C.y > E) {
                                        E = Math.floor(C.y);
                                    }
                                    m = Math.floor(C.x + n.DEFAULT_COMPONENT_SEPERATION);
                                }
                                this.transform(new PointD(LayoutConstants.WORLD_CENTER_X - C.x / 2, LayoutConstants.WORLD_CENTER_Y - C.y / 2));
                            }
                            static radialLayout(s, f, c) {
                                const E = Math.max(this.maxDiagonalInTree(s), n.DEFAULT_RADIAL_SEPARATION);
                                y.branchRadialLayout(f, null, 0, 359, 0, E);
                                const A = LGraph.calculateBounds(s);
                                const m = new Transform;
                                m.setDeviceOrgX(A.getMinX());
                                m.setDeviceOrgY(A.getMinY());
                                m.setWorldOrgX(c.x);
                                m.setWorldOrgY(c.y);
                                for (const R of s){
                                    R.transform(m);
                                }
                                const M = new PointD(A.getMaxX(), A.getMaxY());
                                return m.inverseTransformPoint(M);
                            }
                            static branchRadialLayout(s, f, c, E, A, m) {
                                let C = (E - c + 1) / 2;
                                if (C < 0) {
                                    C += 180;
                                }
                                const R = (C + c) % 360;
                                const M = R * IGeometry.TWO_PI / 360;
                                const S = A * Math.cos(M);
                                const Y = A * Math.sin(M);
                                s.setCenter(S, Y);
                                let w = [];
                                w = w.concat(s.getEdges());
                                let w_length = w.length;
                                f != null && w_length--;
                                let F = 0;
                                let w_length_1 = w.length;
                                let P;
                                for(var _ = s.getEdgesBetween(f); _.length > 1;){
                                    const X = _[0];
                                    _.splice(0, 1);
                                    const H = w.indexOf(X);
                                    if (H >= 0) {
                                        w.splice(H, 1);
                                    }
                                    w_length_1--;
                                    w_length--;
                                }
                                if (f != null) {
                                    P = (w.indexOf(_[0]) + 1) % w_length_1;
                                } else {
                                    P = 0;
                                }
                                const W = Math.abs(E - c) / w_length;
                                for(let B = P; F != w_length; B = ++B % w_length_1){
                                    const K = w[B].getOtherEnd(s);
                                    if (K != f) {
                                        const q = (c + F * W) % 360;
                                        const ht = (q + W) % 360;
                                        y.branchRadialLayout(K, s, q, ht, A + m, m);
                                        F++;
                                    }
                                }
                            }
                            static maxDiagonalInTree(s) {
                                let Integer_MIN_VALUE = Integer.MIN_VALUE;
                                for (const E of s){
                                    const A = E.getDiagonal();
                                    if (A > Integer_MIN_VALUE) {
                                        Integer_MIN_VALUE = A;
                                    }
                                }
                                return Integer_MIN_VALUE;
                            }
                            calcRepulsionRange() {
                                return 2 * (this.level + 1) * this.idealEdgeLength;
                            }
                            groupZeroDegreeMembers() {
                                const s = this;
                                const f = {};
                                this.memberGroups = {};
                                this.idToDummyNode = {};
                                const c = [];
                                for(var E = this.graphManager.getAllNodes(), A = 0; A < E.length; A++){
                                    var m = E[A];
                                    const C = m.getParent();
                                    if (this.getNodeDegreeWithChildren(m) === 0 && (C.id == null || !this.getToBeTiled(C))) {
                                        c.push(m);
                                    }
                                }
                                for(var A = 0; A < c.length; A++){
                                    var m = c[A];
                                    const R = m.getParent().id;
                                    if (typeof f[R] === "undefined") {
                                        f[R] = [];
                                    }
                                    f[R] = f[R].concat(m);
                                }
                                Object.keys(f).forEach((M)=>{
                                    if (f[M].length > 1) {
                                        const S = `DummyCompound_${M}`;
                                        s.memberGroups[S] = f[M];
                                        const Y = f[M][0].getParent();
                                        const w = new l(s.graphManager);
                                        w.id = S;
                                        w.paddingLeft = Y.paddingLeft || 0;
                                        w.paddingRight = Y.paddingRight || 0;
                                        w.paddingBottom = Y.paddingBottom || 0;
                                        w.paddingTop = Y.paddingTop || 0;
                                        s.idToDummyNode[S] = w;
                                        const x = s.getGraphManager().add(s.newGraph(), w);
                                        const F = Y.getChild();
                                        F.add(w);
                                        for(let U = 0; U < f[M].length; U++){
                                            const P = f[M][U];
                                            F.remove(P);
                                            x.add(P);
                                        }
                                    }
                                });
                            }
                            clearCompounds() {
                                const s = {};
                                const f = {};
                                this.performDFSOnCompounds();
                                for(let c = 0; c < this.compoundOrder.length; c++){
                                    f[this.compoundOrder[c].id] = this.compoundOrder[c];
                                    s[this.compoundOrder[c].id] = [].concat(this.compoundOrder[c].getChild().getNodes());
                                    this.graphManager.remove(this.compoundOrder[c].getChild());
                                    this.compoundOrder[c].child = null;
                                }
                                this.graphManager.resetAllNodes();
                                this.tileCompoundMembers(s, f);
                            }
                            clearZeroDegreeMembers() {
                                const s = this;
                                const f = this.tiledZeroDegreePack = [];
                                Object.keys(this.memberGroups).forEach((c)=>{
                                    const E = s.idToDummyNode[c];
                                    f[c] = s.tileNodes(s.memberGroups[c], E.paddingLeft + E.paddingRight);
                                    E.rect.width = f[c].width;
                                    E.rect.height = f[c].height;
                                });
                            }
                            repopulateCompounds() {
                                for(let s = this.compoundOrder.length - 1; s >= 0; s--){
                                    const f = this.compoundOrder[s];
                                    const { id, paddingLeft, paddingTop } = f;
                                    this.adjustLocations(this.tiledMemberPack[id], f.rect.x, f.rect.y, paddingLeft, paddingTop);
                                }
                            }
                            repopulateZeroDegreeMembers() {
                                const s = this;
                                const tiledZeroDegreePack = this.tiledZeroDegreePack;
                                Object.keys(tiledZeroDegreePack).forEach((c)=>{
                                    const E = s.idToDummyNode[c];
                                    const { paddingLeft, paddingTop } = E;
                                    s.adjustLocations(tiledZeroDegreePack[c], E.rect.x, E.rect.y, paddingLeft, paddingTop);
                                });
                            }
                            getToBeTiled(s) {
                                const f = s.id;
                                if (this.toBeTiled[f] != null) {
                                    return this.toBeTiled[f];
                                }
                                const c = s.getChild();
                                if (c == null) {
                                    this.toBeTiled[f] = false;
                                    return false;
                                }
                                for(let E = c.getNodes(), A = 0; A < E.length; A++){
                                    const m = E[A];
                                    if (this.getNodeDegree(m) > 0) {
                                        this.toBeTiled[f] = false;
                                        return false;
                                    }
                                    if (m.getChild() == null) {
                                        this.toBeTiled[m.id] = false;
                                        continue;
                                    }
                                    if (!this.getToBeTiled(m)) {
                                        this.toBeTiled[f] = false;
                                        return false;
                                    }
                                }
                                this.toBeTiled[f] = true;
                                return true;
                            }
                            getNodeDegree(s) {
                                s.id;
                                for(var f = s.getEdges(), c = 0, E = 0; E < f.length; E++){
                                    const A = f[E];
                                    if (A.getSource().id !== A.getTarget().id) {
                                        c = c + 1;
                                    }
                                }
                                return c;
                            }
                            getNodeDegreeWithChildren(s) {
                                let f = this.getNodeDegree(s);
                                if (s.getChild() == null) {
                                    return f;
                                }
                                for(let c = s.getChild().getNodes(), E = 0; E < c.length; E++){
                                    const A = c[E];
                                    f += this.getNodeDegreeWithChildren(A);
                                }
                                return f;
                            }
                            performDFSOnCompounds() {
                                this.compoundOrder = [];
                                this.fillCompexOrderByDFS(this.graphManager.getRoot().getNodes());
                            }
                            fillCompexOrderByDFS(s) {
                                for (const c of s){
                                    if (c.getChild() != null) {
                                        this.fillCompexOrderByDFS(c.getChild().getNodes());
                                    }
                                    if (this.getToBeTiled(c)) {
                                        this.compoundOrder.push(c);
                                    }
                                }
                            }
                            adjustLocations(s, f, c, E, A) {
                                f += E;
                                c += A;
                                const m = f;
                                for(let C = 0; C < s.rows.length; C++){
                                    const row = s.rows[C];
                                    f = m;
                                    let M = 0;
                                    for (const Y of row){
                                        Y.rect.x = f;
                                        Y.rect.y = c;
                                        f += Y.rect.width + s.horizontalPadding;
                                        if (Y.rect.height > M) {
                                            M = Y.rect.height;
                                        }
                                    }
                                    c += M + s.verticalPadding;
                                }
                            }
                            tileCompoundMembers(s, f) {
                                const c = this;
                                this.tiledMemberPack = [];
                                Object.keys(s).forEach((E)=>{
                                    const A = f[E];
                                    c.tiledMemberPack[E] = c.tileNodes(s[E], A.paddingLeft + A.paddingRight);
                                    A.rect.width = c.tiledMemberPack[E].width;
                                    A.rect.height = c.tiledMemberPack[E].height;
                                });
                            }
                            tileNodes(s, height) {
                                const { TILING_PADDING_VERTICAL, TILING_PADDING_HORIZONTAL } = n;
                                const A = {
                                    rows: [],
                                    rowWidth: [],
                                    rowHeight: [],
                                    width: 0,
                                    height,
                                    verticalPadding: TILING_PADDING_VERTICAL,
                                    horizontalPadding: TILING_PADDING_HORIZONTAL
                                };
                                s.sort((R, M)=>{
                                    if (R.rect.width * R.rect.height > M.rect.width * M.rect.height) {
                                        return -1;
                                    }
                                    if (R.rect.width * R.rect.height < M.rect.width * M.rect.height) {
                                        return 1;
                                    }
                                    return 0;
                                });
                                for (const C of s){
                                    if (A.rows.length == 0) {
                                        this.insertNodeToRow(A, C, 0, height);
                                    } else if (this.canAddHorizontal(A, C.rect.width, C.rect.height)) {
                                        this.insertNodeToRow(A, C, this.getShortestRowIndex(A), height);
                                    } else {
                                        this.insertNodeToRow(A, C, A.rows.length, height);
                                    }
                                    this.shiftToLastRow(A);
                                }
                                return A;
                            }
                            insertNodeToRow(s, f, c, E) {
                                if (c == s.rows.length) {
                                    const m = [];
                                    s.rows.push(m);
                                    s.rowWidth.push(E);
                                    s.rowHeight.push(0);
                                }
                                let C = s.rowWidth[c] + f.rect.width;
                                if (s.rows[c].length > 0) {
                                    C += s.horizontalPadding;
                                }
                                s.rowWidth[c] = C;
                                if (s.width < C) {
                                    s.width = C;
                                }
                                let height = f.rect.height;
                                if (c > 0) {
                                    height += s.verticalPadding;
                                }
                                let M = 0;
                                if (height > s.rowHeight[c]) {
                                    M = s.rowHeight[c];
                                    s.rowHeight[c] = height;
                                    M = s.rowHeight[c] - M;
                                }
                                s.height += M;
                                s.rows[c].push(f);
                            }
                            getShortestRowIndex(s) {
                                let f = -1;
                                let Number_MAX_VALUE = Number.MAX_VALUE;
                                for(let E = 0; E < s.rows.length; E++){
                                    if (s.rowWidth[E] < Number_MAX_VALUE) {
                                        f = E;
                                        Number_MAX_VALUE = s.rowWidth[E];
                                    }
                                }
                                return f;
                            }
                            getLongestRowIndex(s) {
                                let f = -1;
                                let Number_MIN_VALUE = Number.MIN_VALUE;
                                for(let E = 0; E < s.rows.length; E++){
                                    if (s.rowWidth[E] > Number_MIN_VALUE) {
                                        f = E;
                                        Number_MIN_VALUE = s.rowWidth[E];
                                    }
                                }
                                return f;
                            }
                            canAddHorizontal(s, f, c) {
                                const E = this.getShortestRowIndex(s);
                                if (E < 0) {
                                    return true;
                                }
                                const A = s.rowWidth[E];
                                if (A + s.horizontalPadding + f <= s.width) {
                                    return true;
                                }
                                let m = 0;
                                if (s.rowHeight[E] < c && E > 0) {
                                    m = c + s.verticalPadding - s.rowHeight[E];
                                }
                                let C;
                                if (s.width - A >= f + s.horizontalPadding) {
                                    C = (s.height + m) / (A + f + s.horizontalPadding);
                                } else {
                                    C = (s.height + m) / s.width;
                                }
                                m = c + s.verticalPadding;
                                let R;
                                if (s.width < f) {
                                    R = (s.height + m) / f;
                                } else {
                                    R = (s.height + m) / s.width;
                                }
                                if (R < 1) {
                                    R = 1 / R;
                                }
                                if (C < 1) {
                                    C = 1 / C;
                                }
                                return C < R;
                            }
                            shiftToLastRow(s) {
                                const f = this.getLongestRowIndex(s);
                                const c = s.rowWidth.length - 1;
                                const E = s.rows[f];
                                const A = E[E.length - 1];
                                const m = A.width + s.horizontalPadding;
                                if (s.width - s.rowWidth[c] > m && f != c) {
                                    E.splice(-1, 1);
                                    s.rows[c].push(A);
                                    s.rowWidth[f] = s.rowWidth[f] - m;
                                    s.rowWidth[c] = s.rowWidth[c] + m;
                                    s.width = s.rowWidth[instance.getLongestRowIndex(s)];
                                    let C = Number.MIN_VALUE;
                                    for(let R = 0; R < E.length; R++){
                                        if (E[R].height > C) {
                                            C = E[R].height;
                                        }
                                    }
                                    if (f > 0) {
                                        C += s.verticalPadding;
                                    }
                                    const M = s.rowHeight[f] + s.rowHeight[c];
                                    s.rowHeight[f] = C;
                                    if (s.rowHeight[c] < A.height + s.verticalPadding) {
                                        s.rowHeight[c] = A.height + s.verticalPadding;
                                    }
                                    const S = s.rowHeight[f] + s.rowHeight[c];
                                    s.height += S - M;
                                    this.shiftToLastRow(s);
                                }
                            }
                            tilingPreLayout() {
                                if (n.TILE) {
                                    this.groupZeroDegreeMembers();
                                    this.clearCompounds();
                                    this.clearZeroDegreeMembers();
                                }
                            }
                            tilingPostLayout() {
                                if (n.TILE) {
                                    this.repopulateZeroDegreeMembers();
                                    this.repopulateCompounds();
                                }
                            }
                            reduceTrees() {
                                const s = [];
                                let c;
                                for(let f = true; f;){
                                    const E = this.graphManager.getAllNodes();
                                    const A = [];
                                    f = false;
                                    for(let m = 0; m < E.length; m++){
                                        c = E[m];
                                        if (c.getEdges().length == 1 && !c.getEdges()[0].isInterGraph && c.getChild() == null) {
                                            A.push([
                                                c,
                                                c.getEdges()[0],
                                                c.getOwner()
                                            ]);
                                            f = true;
                                        }
                                    }
                                    if (f == true) {
                                        const C = [];
                                        for(let R = 0; R < A.length; R++){
                                            if (A[R][0].getEdges().length == 1) {
                                                C.push(A[R]);
                                                A[R][0].getOwner().remove(A[R][0]);
                                            }
                                        }
                                        s.push(C);
                                        this.graphManager.resetAllNodes();
                                        this.graphManager.resetAllEdges();
                                    }
                                }
                                this.prunedNodesAll = s;
                            }
                            growTree(s) {
                                const s_length = s.length;
                                let E;
                                for(let c = s[s_length - 1], A = 0; A < c.length; A++){
                                    E = c[A];
                                    this.findPlaceforPrunedNode(E);
                                    E[2].add(E[0]);
                                    E[2].add(E[1], E[1].source, E[1].target);
                                }
                                s.splice(s.length - 1, 1);
                                this.graphManager.resetAllNodes();
                                this.graphManager.resetAllEdges();
                            }
                            findPlaceforPrunedNode(s) {
                                let f;
                                let c;
                                const E = s[0];
                                if (E == s[1].source) {
                                    c = s[1].target;
                                } else {
                                    c = s[1].source;
                                }
                                const { startX, finishX, startY, finishY } = c;
                                const M = 0;
                                const S = 0;
                                const Y = 0;
                                const w = 0;
                                const x = [
                                    M,
                                    Y,
                                    S,
                                    w
                                ];
                                if (startY > 0) {
                                    for(var F = startX; F <= finishX; F++){
                                        x[0] += this.grid[F][startY - 1].length + this.grid[F][startY].length - 1;
                                    }
                                }
                                if (finishX < this.grid.length - 1) {
                                    for(var F = startY; F <= finishY; F++){
                                        x[1] += this.grid[finishX + 1][F].length + this.grid[finishX][F].length - 1;
                                    }
                                }
                                if (finishY < this.grid[0].length - 1) {
                                    for(var F = startX; F <= finishX; F++){
                                        x[2] += this.grid[F][finishY + 1].length + this.grid[F][finishY].length - 1;
                                    }
                                }
                                if (startX > 0) {
                                    for(var F = startY; F <= finishY; F++){
                                        x[3] += this.grid[startX - 1][F].length + this.grid[startX][F].length - 1;
                                    }
                                }
                                let Integer_MAX_VALUE = Integer.MAX_VALUE;
                                let P;
                                let _;
                                for(let X = 0; X < x.length; X++){
                                    if (x[X] < Integer_MAX_VALUE) {
                                        Integer_MAX_VALUE = x[X];
                                        P = 1;
                                        _ = X;
                                    } else {
                                        x[X] == Integer_MAX_VALUE && P++;
                                    }
                                }
                                if (P == 3 && Integer_MAX_VALUE == 0) {
                                    if (x[0] == 0 && x[1] == 0 && x[2] == 0) {
                                        f = 1;
                                    } else if (x[0] == 0 && x[1] == 0 && x[3] == 0) {
                                        f = 0;
                                    } else if (x[0] == 0 && x[2] == 0 && x[3] == 0) {
                                        f = 3;
                                    } else if (x[1] == 0 && x[2] == 0 && x[3] == 0) {
                                        f = 2;
                                    }
                                } else if (P == 2 && Integer_MAX_VALUE == 0) {
                                    var H = Math.floor(Math.random() * 2);
                                    x[0] == 0 && x[1] == 0 ? H == 0 ? f = 0 : f = 1 : x[0] == 0 && x[2] == 0 ? H == 0 ? f = 0 : f = 2 : x[0] == 0 && x[3] == 0 ? H == 0 ? f = 0 : f = 3 : x[1] == 0 && x[2] == 0 ? H == 0 ? f = 1 : f = 2 : x[1] == 0 && x[3] == 0 ? H == 0 ? f = 1 : f = 3 : H == 0 ? f = 2 : f = 3;
                                } else if (P == 4 && Integer_MAX_VALUE == 0) {
                                    var H = Math.floor(Math.random() * 4);
                                    f = H;
                                } else {
                                    f = _;
                                }
                                if (f == 0) {
                                    E.setCenter(c.getCenterX(), c.getCenterY() - c.getHeight() / 2 - FDLayoutConstants.DEFAULT_EDGE_LENGTH - E.getHeight() / 2);
                                } else if (f == 1) {
                                    E.setCenter(c.getCenterX() + c.getWidth() / 2 + FDLayoutConstants.DEFAULT_EDGE_LENGTH + E.getWidth() / 2, c.getCenterY());
                                } else if (f == 2) {
                                    E.setCenter(c.getCenterX(), c.getCenterY() + c.getHeight() / 2 + FDLayoutConstants.DEFAULT_EDGE_LENGTH + E.getHeight() / 2);
                                } else {
                                    E.setCenter(c.getCenterX() - c.getWidth() / 2 - FDLayoutConstants.DEFAULT_EDGE_LENGTH - E.getWidth() / 2, c.getCenterY());
                                }
                            }
                        }
                        for(const O in FDLayout){
                            y[O] = FDLayout[O];
                        }
                        I.exports = y;
                    },
                    (I, L, o)=>{
                        const e = {};
                        e.layoutBase = o(0);
                        e.CoSEConstants = o(1);
                        e.CoSEEdge = o(2);
                        e.CoSEGraph = o(3);
                        e.CoSEGraphManager = o(4);
                        e.CoSELayout = o(6);
                        e.CoSENode = o(5);
                        I.exports = e;
                    }
                ]));
        })($);
    }
    return $.exports;
}
const Z_exports = Z.exports;
let J;
function vt() {
    if (!J) {
        J = 1;
        ((G, b)=>{
            ((Z_exports_1, L)=>{
                G.exports = L(pt());
            })(Z_exports, (N)=>((I)=>{
                    const L = {};
                    function o(e) {
                        if (L[e]) {
                            return L[e].exports;
                        }
                        const t = L[e] = {
                            i: e,
                            l: false,
                            exports: {}
                        };
                        I[e].call(t.exports, t, t.exports, o);
                        t.l = true;
                        return t.exports;
                    }
                    o.m = I;
                    o.c = L;
                    o.i = (e)=>e;
                    o.d = (e, t, i)=>{
                        if (!o.o(e, t)) {
                            Object.defineProperty(e, t, {
                                configurable: false,
                                enumerable: true,
                                get: i
                            });
                        }
                    };
                    o.n = (e)=>{
                        const t = e && e.__esModule ? ()=>e.default : ()=>e;
                        o.d(t, "a", t);
                        return t;
                    };
                    o.o = (e, t)=>Object.prototype.hasOwnProperty.call(e, t);
                    o.p = "";
                    return o(o.s = 1);
                })([
                    (I, L)=>{
                        I.exports = N;
                    },
                    function(I, L, o) {
                        const LayoutConstants = o(0).layoutBase.LayoutConstants;
                        const FDLayoutConstants = o(0).layoutBase.FDLayoutConstants;
                        const CoSEConstants = o(0).CoSEConstants;
                        const CoSELayout = o(0).CoSELayout;
                        const CoSENode = o(0).CoSENode;
                        const PointD = o(0).layoutBase.PointD;
                        const DimensionD = o(0).layoutBase.DimensionD;
                        const r = {
                            ready () {},
                            stop () {},
                            quality: "default",
                            nodeDimensionsIncludeLabels: false,
                            refresh: 30,
                            fit: true,
                            padding: 10,
                            randomize: true,
                            nodeRepulsion: 4500,
                            idealEdgeLength: 50,
                            edgeElasticity: 0.45,
                            nestingFactor: 0.1,
                            gravity: 0.25,
                            numIter: 2500,
                            tile: true,
                            animate: "end",
                            animationDuration: 500,
                            tilingPaddingVertical: 10,
                            tilingPaddingHorizontal: 10,
                            gravityRangeCompound: 1.5,
                            gravityCompound: 1,
                            gravityRange: 3.8,
                            initialEnergyOnIncremental: 0.5
                        };
                        function h(D, u) {
                            const T = {};
                            for(var y in D){
                                T[y] = D[y];
                            }
                            for(var y in u){
                                T[y] = u[y];
                            }
                            return T;
                        }
                        class a {
                            constructor(D){
                                this.options = h(r, D);
                                p(this.options);
                            }
                            run() {
                                let D;
                                let u;
                                const options = this.options;
                                this.idToLNode = {};
                                const y = this.layout = new CoSELayout;
                                const layout = this;
                                layout.stopped = false;
                                this.cy = this.options.cy;
                                this.cy.trigger({
                                    type: "layoutstart",
                                    layout: this
                                });
                                const s = y.newGraphManager();
                                this.gm = s;
                                const f = this.options.eles.nodes();
                                const c = this.options.eles.edges();
                                this.root = s.addRoot();
                                this.processChildrenList(this.root, this.getTopMostNodes(f), y);
                                for (const A of c){
                                    const m = this.idToLNode[A.data("source")];
                                    const C = this.idToLNode[A.data("target")];
                                    if (m !== C && m.getEdgesBetween(C).length == 0) {
                                        const R = s.add(y.newEdge(), m, C);
                                        R.id = A.id();
                                    }
                                }
                                const M = (w, x)=>{
                                    if (typeof w === "number") {
                                        w = x;
                                    }
                                    const F = w.data("id");
                                    const U = layout.idToLNode[F];
                                    return {
                                        x: U.getRect().getCenterX(),
                                        y: U.getRect().getCenterY()
                                    };
                                };
                                const S = function Y() {
                                    const w = ()=>{
                                        if (options.fit) {
                                            options.cy.fit(options.eles, options.padding);
                                        }
                                        if (!D) {
                                            D = true;
                                            layout.cy.one("layoutready", options.ready);
                                            layout.cy.trigger({
                                                type: "layoutready",
                                                layout
                                            });
                                        }
                                    };
                                    for(var x = layout.options.refresh, F, U = 0; U < x && !F; U++){
                                        F = layout.stopped || layout.layout.tick();
                                    }
                                    if (F) {
                                        if (y.checkLayoutSuccess() && !y.isSubLayout) {
                                            y.doPostLayout();
                                        }
                                        if (y.tilingPostLayout) {
                                            y.tilingPostLayout();
                                        }
                                        y.isLayoutFinished = true;
                                        layout.options.eles.nodes().positions(M);
                                        w();
                                        layout.cy.one("layoutstop", layout.options.stop);
                                        layout.cy.trigger({
                                            type: "layoutstop",
                                            layout
                                        });
                                        if (u) {
                                            cancelAnimationFrame(u);
                                        }
                                        D = false;
                                        return;
                                    }
                                    const P = layout.layout.getPositionsData();
                                    options.eles.nodes().positions((_, X)=>{
                                        if (typeof _ === "number") {
                                            _ = X;
                                        }
                                        if (!_.isParent()) {
                                            const H = _.id();
                                            for(var W = P[H], B = _; W == null && (W = P[B.data("parent")] || P[`DummyCompound_${B.data("parent")}`], P[H] = W, B = B.parent()[0], B != null););
                                            if (W != null) {
                                                return {
                                                    x: W.x,
                                                    y: W.y
                                                };
                                            }
                                            return {
                                                x: _.position("x"),
                                                y: _.position("y")
                                            };
                                        }
                                    });
                                    w();
                                    u = requestAnimationFrame(Y);
                                };
                                y.addListener("layoutstarted", ()=>{
                                    if (layout.options.animate === "during") {
                                        u = requestAnimationFrame(S);
                                    }
                                });
                                y.runLayout();
                                if (this.options.animate !== "during") {
                                    layout.options.eles.nodes().not(":parent").layoutPositions(layout, layout.options, M);
                                    D = false;
                                }
                                return this;
                            }
                            getTopMostNodes(D) {
                                const u = {};
                                for(let T = 0; T < D.length; T++){
                                    u[D[T].id()] = true;
                                }
                                const y = D.filter((O, s)=>{
                                    if (typeof O === "number") {
                                        O = s;
                                    }
                                    for(let f = O.parent()[0]; f != null;){
                                        if (u[f.id()]) {
                                            return false;
                                        }
                                        f = f.parent()[0];
                                    }
                                    return true;
                                });
                                return y;
                            }
                            processChildrenList(D, u, T) {
                                for(let y = u.length, O = 0; O < y; O++){
                                    const s = u[O];
                                    const f = s.children();
                                    let c;
                                    const E = s.layoutDimensions({
                                        nodeDimensionsIncludeLabels: this.options.nodeDimensionsIncludeLabels
                                    });
                                    if (s.outerWidth() != null && s.outerHeight() != null) {
                                        c = D.add(new CoSENode(T.graphManager, new PointD(s.position("x") - E.w / 2, s.position("y") - E.h / 2), new DimensionD(parseFloat(E.w), parseFloat(E.h))));
                                    } else {
                                        c = D.add(new CoSENode(this.graphManager));
                                    }
                                    c.id = s.data("id");
                                    c.paddingLeft = parseInt(s.css("padding"));
                                    c.paddingTop = parseInt(s.css("padding"));
                                    c.paddingRight = parseInt(s.css("padding"));
                                    c.paddingBottom = parseInt(s.css("padding"));
                                    if (this.options.nodeDimensionsIncludeLabels && s.isParent()) {
                                        const A = s.boundingBox({
                                            includeLabels: true,
                                            includeNodes: false
                                        }).w;
                                        const m = s.boundingBox({
                                            includeLabels: true,
                                            includeNodes: false
                                        }).h;
                                        const C = s.css("text-halign");
                                        c.labelWidth = A;
                                        c.labelHeight = m;
                                        c.labelPos = C;
                                    }
                                    this.idToLNode[s.data("id")] = c;
                                    if (isNaN(c.rect.x)) {
                                        c.rect.x = 0;
                                    }
                                    if (isNaN(c.rect.y)) {
                                        c.rect.y = 0;
                                    }
                                    if (f != null && f.length > 0) {
                                        let R;
                                        R = T.getGraphManager().add(T.newGraph(), c);
                                        this.processChildrenList(R, f, T);
                                    }
                                }
                            }
                            stop() {
                                this.stopped = true;
                                return this;
                            }
                        }
                        var p = (options)=>{
                            if (options.nodeRepulsion != null) {
                                CoSEConstants.DEFAULT_REPULSION_STRENGTH = FDLayoutConstants.DEFAULT_REPULSION_STRENGTH = options.nodeRepulsion;
                            }
                            if (options.idealEdgeLength != null) {
                                CoSEConstants.DEFAULT_EDGE_LENGTH = FDLayoutConstants.DEFAULT_EDGE_LENGTH = options.idealEdgeLength;
                            }
                            if (options.edgeElasticity != null) {
                                CoSEConstants.DEFAULT_SPRING_STRENGTH = FDLayoutConstants.DEFAULT_SPRING_STRENGTH = options.edgeElasticity;
                            }
                            if (options.nestingFactor != null) {
                                CoSEConstants.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = FDLayoutConstants.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = options.nestingFactor;
                            }
                            if (options.gravity != null) {
                                CoSEConstants.DEFAULT_GRAVITY_STRENGTH = FDLayoutConstants.DEFAULT_GRAVITY_STRENGTH = options.gravity;
                            }
                            if (options.numIter != null) {
                                CoSEConstants.MAX_ITERATIONS = FDLayoutConstants.MAX_ITERATIONS = options.numIter;
                            }
                            if (options.gravityRange != null) {
                                CoSEConstants.DEFAULT_GRAVITY_RANGE_FACTOR = FDLayoutConstants.DEFAULT_GRAVITY_RANGE_FACTOR = options.gravityRange;
                            }
                            if (options.gravityCompound != null) {
                                CoSEConstants.DEFAULT_COMPOUND_GRAVITY_STRENGTH = FDLayoutConstants.DEFAULT_COMPOUND_GRAVITY_STRENGTH = options.gravityCompound;
                            }
                            if (options.gravityRangeCompound != null) {
                                CoSEConstants.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = FDLayoutConstants.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = options.gravityRangeCompound;
                            }
                            if (options.initialEnergyOnIncremental != null) {
                                CoSEConstants.DEFAULT_COOLING_FACTOR_INCREMENTAL = FDLayoutConstants.DEFAULT_COOLING_FACTOR_INCREMENTAL = options.initialEnergyOnIncremental;
                            }
                            if (options.quality == "draft") {
                                LayoutConstants.QUALITY = 0;
                            } else if (options.quality == "proof") {
                                LayoutConstants.QUALITY = 2;
                            } else {
                                LayoutConstants.QUALITY = 1;
                            }
                            CoSEConstants.NODE_DIMENSIONS_INCLUDE_LABELS = FDLayoutConstants.NODE_DIMENSIONS_INCLUDE_LABELS = LayoutConstants.NODE_DIMENSIONS_INCLUDE_LABELS = options.nodeDimensionsIncludeLabels;
                            CoSEConstants.DEFAULT_INCREMENTAL = FDLayoutConstants.DEFAULT_INCREMENTAL = LayoutConstants.DEFAULT_INCREMENTAL = !options.randomize;
                            CoSEConstants.ANIMATE = FDLayoutConstants.ANIMATE = LayoutConstants.ANIMATE = options.animate;
                            CoSEConstants.TILE = options.tile;
                            CoSEConstants.TILING_PADDING_VERTICAL = typeof options.tilingPaddingVertical === "function" ? options.tilingPaddingVertical.call() : options.tilingPaddingVertical;
                            CoSEConstants.TILING_PADDING_HORIZONTAL = typeof options.tilingPaddingHorizontal === "function" ? options.tilingPaddingHorizontal.call() : options.tilingPaddingHorizontal;
                        };
                        const v = (u)=>{
                            u("layout", "cose-bilkent", a);
                        };
                        if (typeof cytoscape !== "undefined") {
                            v(cytoscape);
                        }
                        I.exports = v;
                    }
                ]));
        })(Z);
    }
    return Z.exports;
}
const yt = vt();
const Et = a4(yt);
c.use(Et);
function et(G, b) {
    G.forEach((N)=>{
        const I = {
            id: N.id,
            labelText: N.label,
            height: N.height,
            width: N.width,
            padding: N.padding ?? 0
        };
        Object.keys(N).forEach((L)=>{
            if (![
                "id",
                "label",
                "height",
                "width",
                "padding",
                "x",
                "y"
            ].includes(L)) {
                I[L] = N[L];
            }
        });
        b.add({
            group: "nodes",
            data: I,
            position: {
                x: N.x ?? 0,
                y: N.y ?? 0
            }
        });
    });
}
_(et, "addNodes");
function rt(G, b) {
    G.forEach((N)=>{
        const I = {
            id: N.id,
            source: N.start,
            target: N.end
        };
        Object.keys(N).forEach((L)=>{
            if (![
                "id",
                "start",
                "end"
            ].includes(L)) {
                I[L] = N[L];
            }
        });
        b.add({
            group: "edges",
            data: I
        });
    });
}
_(rt, "addEdges");
function it(G) {
    return new Promise((resolve)=>{
        const N = d("body").append("div").attr("id", "cy").attr("style", "display:none");
        const I = c({
            container: document.getElementById("cy"),
            style: [
                {
                    selector: "edge",
                    style: {
                        "curve-style": "bezier"
                    }
                }
            ]
        });
        N.remove();
        et(G.nodes, I);
        rt(G.edges, I);
        I.nodes().forEach((o)=>{
            o.layoutDimensions = ()=>{
                const e = o.data();
                return {
                    w: e.width,
                    h: e.height
                };
            };
        });
        const L = {
            name: "cose-bilkent",
            quality: "proof",
            styleEnabled: false,
            animate: false
        };
        I.layout(L).run();
        I.ready((o)=>{
            l.info("Cytoscape ready", o);
            resolve(I);
        });
    });
}
_(it, "createCytoscapeInstance");
function nt(G) {
    return G.nodes().map((b)=>{
        const N = b.data();
        const I = b.position();
        const L = {
            id: N.id,
            x: I.x,
            y: I.y
        };
        Object.keys(N).forEach((o)=>{
            if (o !== "id") {
                L[o] = N[o];
            }
        });
        return L;
    });
}
_(nt, "extractPositionedNodes");
function ot(G) {
    return G.edges().map((b)=>{
        const N = b.data();
        const rscratch = b._private.rscratch;
        const L = {
            id: N.id,
            source: N.source,
            target: N.target,
            startX: rscratch.startX,
            startY: rscratch.startY,
            midX: rscratch.midX,
            midY: rscratch.midY,
            endX: rscratch.endX,
            endY: rscratch.endY
        };
        Object.keys(N).forEach((o)=>{
            if (![
                "id",
                "source",
                "target"
            ].includes(o)) {
                L[o] = N[o];
            }
        });
        return L;
    });
}
_(ot, "extractPositionedEdges");
async function st(G, b) {
    l.debug("Starting cose-bilkent layout algorithm");
    try {
        at(G);
        const N = await it(G);
        const nodes = nt(N);
        const edges = ot(N);
        l.debug(`Layout completed: ${nodes.length} nodes, ${edges.length} edges`);
        return {
            nodes,
            edges
        };
    } catch (error) {
        l.error("Error in cose-bilkent layout algorithm:", error);
        throw error;
    }
}
_(st, "executeCoseBilkentLayout");
function at(G) {
    if (!G) {
        throw new Error("Layout data is required");
    }
    if (!G.config) {
        throw new Error("Configuration is required in layout data");
    }
    if (!G.rootNode) {
        throw new Error("Root node is required");
    }
    if (!G.nodes || !Array.isArray(G.nodes)) {
        throw new Error("No nodes found in layout data");
    }
    if (!Array.isArray(G.edges)) {
        throw new Error("Edges array is required in layout data");
    }
    return true;
}
_(at, "validateLayoutData");
export const render = _(async (G, b, { insertCluster, insertEdge, insertEdgeLabel, insertMarkers, insertNode, log, positionEdgeLabel }, { algorithm })=>{
    const g = {};
    const n = {};
    const d = b.select("g");
    insertMarkers(d, G.markers, G.type, G.diagramId);
    const r = d.insert("g").attr("class", "subgraphs");
    const h = d.insert("g").attr("class", "edgePaths");
    const a = d.insert("g").attr("class", "edgeLabels");
    const p = d.insert("g").attr("class", "nodes");
    log.debug("Inserting nodes into DOM for dimension calculation");
    await Promise.all(G.nodes.map(async (u)=>{
        if (u.isGroup) {
            const T = {
                ...u
            };
            n[u.id] = T;
            g[u.id] = T;
            await insertCluster(r, u);
        } else {
            const T = {
                ...u
            };
            g[u.id] = T;
            const y = await insertNode(p, u, {
                config: G.config,
                dir: G.direction || "TB"
            });
            const O = y.node().getBBox();
            T.width = O.width;
            T.height = O.height;
            T.domId = y;
            log.debug(`Node ${u.id} dimensions: ${O.width}x${O.height}`);
        }
    }));
    log.debug("Running cose-bilkent layout algorithm");
    const v = {
        ...G,
        nodes: G.nodes.map((u)=>{
            const T = g[u.id];
            return {
                ...u,
                width: T.width,
                height: T.height
            };
        })
    };
    const D = await st(v, G.config);
    log.debug("Positioning nodes based on layout results");
    D.nodes.forEach((u)=>{
        const T = g[u.id];
        if (T?.domId) {
            T.domId.attr("transform", `translate(${u.x}, ${u.y})`);
            T.x = u.x;
            T.y = u.y;
            log.debug(`Positioned node ${T.id} at center (${u.x}, ${u.y})`);
        }
    });
    D.edges.forEach((u)=>{
        const T = G.edges.find((y)=>y.id === u.id);
        if (T) {
            T.points = [
                {
                    x: u.startX,
                    y: u.startY
                },
                {
                    x: u.midX,
                    y: u.midY
                },
                {
                    x: u.endX,
                    y: u.endY
                }
            ];
        }
    });
    log.debug("Inserting and positioning edges");
    await Promise.all(G.edges.map(async (u)=>{
        await insertEdgeLabel(a, u);
        const T = g[u.start ?? ""];
        const y = g[u.end ?? ""];
        if (T && y) {
            const O = D.edges.find((s)=>s.id === u.id);
            if (O) {
                log.debug("APA01 positionedEdge", O);
                const s = {
                    ...u
                };
                const f = insertEdge(h, s, n, G.type, T, y, G.diagramId);
                positionEdgeLabel(s, f);
            } else {
                const s = {
                    ...u,
                    points: [
                        {
                            x: T.x || 0,
                            y: T.y || 0
                        },
                        {
                            x: y.x || 0,
                            y: y.y || 0
                        }
                    ]
                };
                const f = insertEdge(h, s, n, G.type, T, y, G.diagramId);
                positionEdgeLabel(s, f);
            }
        }
    }));
    log.debug("Cose-bilkent rendering completed");
}, "render");
