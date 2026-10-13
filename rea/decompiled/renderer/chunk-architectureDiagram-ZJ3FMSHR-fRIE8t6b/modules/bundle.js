import { p } from "./chunk-chunk-JWPE2WC7-firmgLgH.js";
import { _, F, ad, l as l_1, b, a, o, p as p_1, g, s, q, B, z, D, c as c_1, a$, ai, i, d, r as r_1, aj, b7 as unknown } from "./chunk-mermaid.core-B9Iu5CoE.js";
import { p as p_2 } from "./chunk-cynefin-VYW2F7L2-ChVxrOa1.js";
import { c as c_2 } from "./chunk-cytoscape.esm-CY9iOoO4.js";
import { a4 } from "./index.eager-vendor-Qbf9YA6n.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "afd97758-6555-4c8a-81f5-9d03836bc6a5";
            e._sentryDebugIdIdentifier = "sentry-dbid-afd97758-6555-4c8a-81f5-9d03836bc6a5";
        }
    } catch (e) {}
})();
const he = {
    exports: {}
};
const le = {
    exports: {}
};
const fe = {
    exports: {}
};
const fe_exports = fe.exports;
let Oe;
function dr() {
    if (!Oe) {
        Oe = 1;
        ((x, A)=>{
            ((fe_exports_1, N)=>{
                x.exports = N();
            })(fe_exports, ()=>((C)=>{
                    const R = {};
                    function N(i) {
                        if (R[i]) {
                            return R[i].exports;
                        }
                        const h = R[i] = {
                            i,
                            l: false,
                            exports: {}
                        };
                        C[i].call(h.exports, h, h.exports, N);
                        h.l = true;
                        return h.exports;
                    }
                    N.m = C;
                    N.c = R;
                    N.i = (v)=>v;
                    N.d = (v, h, get)=>{
                        if (!N.o(v, h)) {
                            Object.defineProperty(v, h, {
                                configurable: false,
                                enumerable: true,
                                get
                            });
                        }
                    };
                    N.n = (v)=>{
                        const h = v && v.__esModule ? ()=>v.default : ()=>v;
                        N.d(h, "a", h);
                        return h;
                    };
                    N.o = (v, h)=>Object.prototype.hasOwnProperty.call(v, h);
                    N.p = "";
                    return N(N.s = 28);
                })([
                    (C, R, N)=>{
                        function v() {}
                        v.QUALITY = 1;
                        v.DEFAULT_CREATE_BENDS_AS_NEEDED = false;
                        v.DEFAULT_INCREMENTAL = false;
                        v.DEFAULT_ANIMATION_ON_LAYOUT = true;
                        v.DEFAULT_ANIMATION_DURING_LAYOUT = false;
                        v.DEFAULT_ANIMATION_PERIOD = 50;
                        v.DEFAULT_UNIFORM_LEAF_NODE_SIZES = false;
                        v.DEFAULT_GRAPH_MARGIN = 15;
                        v.NODE_DIMENSIONS_INCLUDE_LABELS = false;
                        v.SIMPLE_NODE_SIZE = 40;
                        v.SIMPLE_NODE_HALF_SIZE = v.SIMPLE_NODE_SIZE / 2;
                        v.EMPTY_COMPOUND_NODE_SIZE = 40;
                        v.MIN_EDGE_LENGTH = 1;
                        v.WORLD_BOUNDARY = 1000000;
                        v.INITIAL_WORLD_BOUNDARY = v.WORLD_BOUNDARY / 1000;
                        v.WORLD_CENTER_X = 1200;
                        v.WORLD_CENTER_Y = 900;
                        C.exports = v;
                    },
                    function(C, R, N) {
                        const v = N(2);
                        const h = N(8);
                        const a = N(9);
                        class r extends v {
                            constructor(f, e, g){
                                super(g);
                                this.isOverlapingSourceAndTarget = false;
                                this.vGraphObject = g;
                                this.bendpoints = [];
                                this.source = f;
                                this.target = e;
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
                            getOtherEnd(f) {
                                if (this.source === f) {
                                    return this.target;
                                }
                                if (this.target === f) {
                                    return this.source;
                                }
                                throw "Node is not incident with this edge";
                            }
                            getOtherEndInGraph(f, e) {
                                let g = this.getOtherEnd(f);
                                const t = e.getGraphManager().getRoot();
                                while(true){
                                    if (g.getOwner() == e) {
                                        return g;
                                    }
                                    if (g.getOwner() == t) {
                                        break;
                                    }
                                    g = g.getOwner().getParent();
                                }
                                return null;
                            }
                            updateLength() {
                                const f = new Array(4);
                                this.isOverlapingSourceAndTarget = h.getIntersection(this.target.getRect(), this.source.getRect(), f);
                                if (!this.isOverlapingSourceAndTarget) {
                                    this.lengthX = f[0] - f[2];
                                    this.lengthY = f[1] - f[3];
                                    if (Math.abs(this.lengthX) < 1) {
                                        this.lengthX = a.sign(this.lengthX);
                                    }
                                    if (Math.abs(this.lengthY) < 1) {
                                        this.lengthY = a.sign(this.lengthY);
                                    }
                                    this.length = Math.sqrt(this.lengthX * this.lengthX + this.lengthY * this.lengthY);
                                }
                            }
                            updateLengthSimple() {
                                this.lengthX = this.target.getCenterX() - this.source.getCenterX();
                                this.lengthY = this.target.getCenterY() - this.source.getCenterY();
                                if (Math.abs(this.lengthX) < 1) {
                                    this.lengthX = a.sign(this.lengthX);
                                }
                                if (Math.abs(this.lengthY) < 1) {
                                    this.lengthY = a.sign(this.lengthY);
                                }
                                this.length = Math.sqrt(this.lengthX * this.lengthX + this.lengthY * this.lengthY);
                            }
                        }
                        for(const i in v){
                            r[i] = v[i];
                        }
                        C.exports = r;
                    },
                    (C, R, N)=>{
                        function v(h) {
                            this.vGraphObject = h;
                        }
                        C.exports = v;
                    },
                    function(C, R, N) {
                        const v = N(2);
                        const h = N(10);
                        const a = N(13);
                        const r = N(0);
                        const i = N(16);
                        const f = N(5);
                        class e extends v {
                            constructor(t, s, n, c){
                                if (n == null && c == null) {
                                    c = s;
                                }
                                super(c);
                                if (t.graphManager != null) {
                                    t = t.graphManager;
                                }
                                this.estimatedSize = h.MIN_VALUE;
                                this.inclusionTreeDepth = h.MAX_VALUE;
                                this.vGraphObject = c;
                                this.edges = [];
                                this.graphManager = t;
                                if (n != null && s != null) {
                                    this.rect = new a(s.x, s.y, n.width, n.height);
                                } else {
                                    this.rect = new a;
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
                            setWidth(t) {
                                this.rect.width = t;
                            }
                            getHeight() {
                                return this.rect.height;
                            }
                            setHeight(t) {
                                this.rect.height = t;
                            }
                            getCenterX() {
                                return this.rect.x + this.rect.width / 2;
                            }
                            getCenterY() {
                                return this.rect.y + this.rect.height / 2;
                            }
                            getCenter() {
                                return new f(this.rect.x + this.rect.width / 2, this.rect.y + this.rect.height / 2);
                            }
                            getLocation() {
                                return new f(this.rect.x, this.rect.y);
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
                            setRect(t, s) {
                                this.rect.x = t.x;
                                this.rect.y = t.y;
                                this.rect.width = s.width;
                                this.rect.height = s.height;
                            }
                            setCenter(t, s) {
                                this.rect.x = t - this.rect.width / 2;
                                this.rect.y = s - this.rect.height / 2;
                            }
                            setLocation(t, s) {
                                this.rect.x = t;
                                this.rect.y = s;
                            }
                            moveBy(t, s) {
                                this.rect.x += t;
                                this.rect.y += s;
                            }
                            getEdgeListToNode(t) {
                                const s = [];
                                const n = this;
                                n.edges.forEach((c)=>{
                                    if (c.target == t) {
                                        if (c.source != n) {
                                            throw "Incorrect edge source!";
                                        }
                                        s.push(c);
                                    }
                                });
                                return s;
                            }
                            getEdgesBetween(t) {
                                const s = [];
                                const n = this;
                                n.edges.forEach((c)=>{
                                    if (!(c.source == n || c.target == n)) {
                                        throw "Incorrect edge source and/or target";
                                    }
                                    if (c.target == t || c.source == t) {
                                        s.push(c);
                                    }
                                });
                                return s;
                            }
                            getNeighborsList() {
                                const t = new Set;
                                const s = this;
                                s.edges.forEach((n)=>{
                                    if (n.source == s) {
                                        t.add(n.target);
                                    } else {
                                        if (n.target != s) {
                                            throw "Incorrect incidency!";
                                        }
                                        t.add(n.source);
                                    }
                                });
                                return t;
                            }
                            withChildren() {
                                const t = new Set;
                                let s;
                                let n;
                                t.add(this);
                                if (this.child != null) {
                                    for(let c = this.child.getNodes(), l = 0; l < c.length; l++){
                                        s = c[l];
                                        n = s.withChildren();
                                        n.forEach((T)=>{
                                            t.add(T);
                                        });
                                    }
                                }
                                return t;
                            }
                            getNoOfChildren() {
                                let t = 0;
                                let s;
                                if (this.child == null) {
                                    t = 1;
                                } else {
                                    for(let n = this.child.getNodes(), c = 0; c < n.length; c++){
                                        s = n[c];
                                        t += s.getNoOfChildren();
                                    }
                                }
                                if (t == 0) {
                                    t = 1;
                                }
                                return t;
                            }
                            getEstimatedSize() {
                                if (this.estimatedSize == h.MIN_VALUE) {
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
                                let t;
                                let s;
                                const n = -r.INITIAL_WORLD_BOUNDARY;
                                const r_INITIAL_WORLD_BOUNDARY = r.INITIAL_WORLD_BOUNDARY;
                                t = r.WORLD_CENTER_X + i.nextDouble() * (r_INITIAL_WORLD_BOUNDARY - n) + n;
                                const l = -r.INITIAL_WORLD_BOUNDARY;
                                const r_INITIAL_WORLD_BOUNDARY_1 = r.INITIAL_WORLD_BOUNDARY;
                                s = r.WORLD_CENTER_Y + i.nextDouble() * (r_INITIAL_WORLD_BOUNDARY_1 - l) + l;
                                this.rect.x = t;
                                this.rect.y = s;
                            }
                            updateBounds() {
                                if (this.getChild() == null) {
                                    throw "assert failed";
                                }
                                if (this.getChild().getNodes().length != 0) {
                                    const t = this.getChild();
                                    t.updateBounds(true);
                                    this.rect.x = t.getLeft();
                                    this.rect.y = t.getTop();
                                    this.setWidth(t.getRight() - t.getLeft());
                                    this.setHeight(t.getBottom() - t.getTop());
                                    if (r.NODE_DIMENSIONS_INCLUDE_LABELS) {
                                        const s = t.getRight() - t.getLeft();
                                        const n = t.getBottom() - t.getTop();
                                        this.labelWidth && (this.labelPosHorizontal == "left" ? (this.rect.x -= this.labelWidth, this.setWidth(s + this.labelWidth)) : this.labelPosHorizontal == "center" && this.labelWidth > s ? (this.rect.x -= (this.labelWidth - s) / 2, this.setWidth(this.labelWidth)) : this.labelPosHorizontal == "right" && this.setWidth(s + this.labelWidth));
                                        this.labelHeight && (this.labelPosVertical == "top" ? (this.rect.y -= this.labelHeight, this.setHeight(n + this.labelHeight)) : this.labelPosVertical == "center" && this.labelHeight > n ? (this.rect.y -= (this.labelHeight - n) / 2, this.setHeight(this.labelHeight)) : this.labelPosVertical == "bottom" && this.setHeight(n + this.labelHeight));
                                    }
                                }
                            }
                            getInclusionTreeDepth() {
                                if (this.inclusionTreeDepth == h.MAX_VALUE) {
                                    throw "assert failed";
                                }
                                return this.inclusionTreeDepth;
                            }
                            transform(t) {
                                let s = this.rect.x;
                                if (s > r.WORLD_BOUNDARY) {
                                    s = r.WORLD_BOUNDARY;
                                } else if (s < -r.WORLD_BOUNDARY) {
                                    s = -r.WORLD_BOUNDARY;
                                }
                                let n = this.rect.y;
                                if (n > r.WORLD_BOUNDARY) {
                                    n = r.WORLD_BOUNDARY;
                                } else if (n < -r.WORLD_BOUNDARY) {
                                    n = -r.WORLD_BOUNDARY;
                                }
                                const c = new f(s, n);
                                const l = t.inverseTransformPoint(c);
                                this.setLocation(l.x, l.y);
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
                        for(const g in v){
                            e[g] = v[g];
                        }
                        C.exports = e;
                    },
                    (C, R, N)=>{
                        const v = N(0);
                        function h() {}
                        for(const a in v){
                            h[a] = v[a];
                        }
                        h.MAX_ITERATIONS = 2500;
                        h.DEFAULT_EDGE_LENGTH = 50;
                        h.DEFAULT_SPRING_STRENGTH = 0.45;
                        h.DEFAULT_REPULSION_STRENGTH = 4500;
                        h.DEFAULT_GRAVITY_STRENGTH = 0.4;
                        h.DEFAULT_COMPOUND_GRAVITY_STRENGTH = 1;
                        h.DEFAULT_GRAVITY_RANGE_FACTOR = 3.8;
                        h.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = 1.5;
                        h.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION = true;
                        h.DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION = true;
                        h.DEFAULT_COOLING_FACTOR_INCREMENTAL = 0.3;
                        h.COOLING_ADAPTATION_FACTOR = 0.33;
                        h.ADAPTATION_LOWER_NODE_LIMIT = 1000;
                        h.ADAPTATION_UPPER_NODE_LIMIT = 5000;
                        h.MAX_NODE_DISPLACEMENT_INCREMENTAL = 100;
                        h.MAX_NODE_DISPLACEMENT = h.MAX_NODE_DISPLACEMENT_INCREMENTAL * 3;
                        h.MIN_REPULSION_DIST = h.DEFAULT_EDGE_LENGTH / 10;
                        h.CONVERGENCE_CHECK_PERIOD = 100;
                        h.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = 0.1;
                        h.MIN_EDGE_LENGTH = 1;
                        h.GRID_CALCULATION_CHECK_PERIOD = 10;
                        C.exports = h;
                    },
                    function(C, R, N) {
                        class v {
                            constructor(h, a){
                                if (h == null && a == null) {
                                    this.x = 0;
                                    this.y = 0;
                                } else {
                                    this.x = h;
                                    this.y = a;
                                }
                            }
                            getX() {
                                return this.x;
                            }
                            getY() {
                                return this.y;
                            }
                            setX(h) {
                                this.x = h;
                            }
                            setY(h) {
                                this.y = h;
                            }
                            getDifference(h) {
                                return new DimensionD(this.x - h.x, this.y - h.y);
                            }
                            getCopy() {
                                return new v(this.x, this.y);
                            }
                            translate(h) {
                                this.x += h.width;
                                this.y += h.height;
                                return this;
                            }
                        }
                        C.exports = v;
                    },
                    function(C, R, N) {
                        const v = N(2);
                        const h = N(10);
                        const a = N(0);
                        const r = N(7);
                        const i = N(3);
                        const f = N(1);
                        const e = N(13);
                        const g = N(12);
                        const t = N(11);
                        class s extends v {
                            constructor(c, l, T){
                                super(T);
                                this.estimatedSize = h.MIN_VALUE;
                                this.margin = a.DEFAULT_GRAPH_MARGIN;
                                this.edges = [];
                                this.nodes = [];
                                this.isConnected = false;
                                this.parent = c;
                                if (l != null && l instanceof r) {
                                    this.graphManager = l;
                                } else if (l != null && l instanceof Layout) {
                                    this.graphManager = l.graphManager;
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
                            add(c, l, T) {
                                if (l == null && T == null) {
                                    const u = c;
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
                                    const d = c;
                                    if (!(this.getNodes().indexOf(l) > -1 && this.getNodes().indexOf(T) > -1)) {
                                        throw "Source or target not in graph!";
                                    }
                                    if (!(l.owner == T.owner && l.owner == this)) {
                                        throw "Both owners must be this graph!";
                                    }
                                    if (l.owner != T.owner) {
                                        return null;
                                    }
                                    d.source = l;
                                    d.target = T;
                                    d.isInterGraph = false;
                                    this.getEdges().push(d);
                                    l.edges.push(d);
                                    if (T != l) {
                                        T.edges.push(d);
                                    }
                                    return d;
                                }
                            }
                            remove(c) {
                                const l = c;
                                if (c instanceof i) {
                                    if (l == null) {
                                        throw "Node is null!";
                                    }
                                    if (!(l.owner != null && l.owner == this)) {
                                        throw "Owner graph is invalid!";
                                    }
                                    if (this.graphManager == null) {
                                        throw "Owner graph manager is invalid!";
                                    }
                                    const T = l.edges.slice();
                                    var u;
                                    for(let d = T.length, L = 0; L < d; L++){
                                        u = T[L];
                                        if (u.isInterGraph) {
                                            this.graphManager.remove(u);
                                        } else {
                                            u.source.owner.remove(u);
                                        }
                                    }
                                    var b = this.nodes.indexOf(l);
                                    if (b == -1) {
                                        throw "Node not in owner node list!";
                                    }
                                    this.nodes.splice(b, 1);
                                } else if (c instanceof f) {
                                    var u = c;
                                    if (u == null) {
                                        throw "Edge is null!";
                                    }
                                    if (!(u.source != null && u.target != null)) {
                                        throw "Source and/or target is null!";
                                    }
                                    if (!(u.source.owner != null && u.target.owner != null && u.source.owner == this && u.target.owner == this)) {
                                        throw "Source and/or target owner is invalid!";
                                    }
                                    const w = u.source.edges.indexOf(u);
                                    const G = u.target.edges.indexOf(u);
                                    if (!(w > -1 && G > -1)) {
                                        throw "Source and/or target doesn't know this edge!";
                                    }
                                    u.source.edges.splice(w, 1);
                                    if (u.target != u.source) {
                                        u.target.edges.splice(G, 1);
                                    }
                                    var b = u.source.owner.getEdges().indexOf(u);
                                    if (b == -1) {
                                        throw "Not in owner's edge list!";
                                    }
                                    u.source.owner.getEdges().splice(b, 1);
                                }
                            }
                            updateLeftTop() {
                                let h_MAX_VALUE = h.MAX_VALUE;
                                let h_MAX_VALUE_1 = h.MAX_VALUE;
                                let T;
                                let u;
                                let d;
                                const L = this.getNodes();
                                for(let b = L.length, w = 0; w < b; w++){
                                    const G = L[w];
                                    T = G.getTop();
                                    u = G.getLeft();
                                    if (h_MAX_VALUE > T) {
                                        h_MAX_VALUE = T;
                                    }
                                    if (h_MAX_VALUE_1 > u) {
                                        h_MAX_VALUE_1 = u;
                                    }
                                }
                                if (h_MAX_VALUE == h.MAX_VALUE) {
                                    return null;
                                }
                                if (L[0].getParent().paddingLeft != null) {
                                    d = L[0].getParent().paddingLeft;
                                } else {
                                    d = this.margin;
                                }
                                this.left = h_MAX_VALUE_1 - d;
                                this.top = h_MAX_VALUE - d;
                                return new g(this.left, this.top);
                            }
                            updateBounds(c) {
                                let h_MAX_VALUE = h.MAX_VALUE;
                                let T = -h.MAX_VALUE;
                                let h_MAX_VALUE_1 = h.MAX_VALUE;
                                let d = -h.MAX_VALUE;
                                let L;
                                let b;
                                let w;
                                let G;
                                let B;
                                const nodes = this.nodes;
                                for(let V = nodes.length, M = 0; M < V; M++){
                                    const _ = nodes[M];
                                    if (c && _.child != null) {
                                        _.updateBounds();
                                    }
                                    L = _.getLeft();
                                    b = _.getRight();
                                    w = _.getTop();
                                    G = _.getBottom();
                                    if (h_MAX_VALUE > L) {
                                        h_MAX_VALUE = L;
                                    }
                                    if (T < b) {
                                        T = b;
                                    }
                                    if (h_MAX_VALUE_1 > w) {
                                        h_MAX_VALUE_1 = w;
                                    }
                                    if (d < G) {
                                        d = G;
                                    }
                                }
                                const o = new e(h_MAX_VALUE, h_MAX_VALUE_1, T - h_MAX_VALUE, d - h_MAX_VALUE_1);
                                if (h_MAX_VALUE == h.MAX_VALUE) {
                                    this.left = this.parent.getLeft();
                                    this.right = this.parent.getRight();
                                    this.top = this.parent.getTop();
                                    this.bottom = this.parent.getBottom();
                                }
                                if (nodes[0].getParent().paddingLeft != null) {
                                    B = nodes[0].getParent().paddingLeft;
                                } else {
                                    B = this.margin;
                                }
                                this.left = o.x - B;
                                this.right = o.x + o.width + B;
                                this.top = o.y - B;
                                this.bottom = o.y + o.height + B;
                            }
                            static calculateBounds(c) {
                                let h_MAX_VALUE = h.MAX_VALUE;
                                let T = -h.MAX_VALUE;
                                let h_MAX_VALUE_1 = h.MAX_VALUE;
                                let d = -h.MAX_VALUE;
                                let L;
                                let b;
                                let w;
                                let G;
                                for(let B = c.length, U = 0; U < B; U++){
                                    const V = c[U];
                                    L = V.getLeft();
                                    b = V.getRight();
                                    w = V.getTop();
                                    G = V.getBottom();
                                    if (h_MAX_VALUE > L) {
                                        h_MAX_VALUE = L;
                                    }
                                    if (T < b) {
                                        T = b;
                                    }
                                    if (h_MAX_VALUE_1 > w) {
                                        h_MAX_VALUE_1 = w;
                                    }
                                    if (d < G) {
                                        d = G;
                                    }
                                }
                                const M = new e(h_MAX_VALUE, h_MAX_VALUE_1, T - h_MAX_VALUE, d - h_MAX_VALUE_1);
                                return M;
                            }
                            getInclusionTreeDepth() {
                                if (this == this.graphManager.getRoot()) {
                                    return 1;
                                }
                                return this.parent.getInclusionTreeDepth();
                            }
                            getEstimatedSize() {
                                if (this.estimatedSize == h.MIN_VALUE) {
                                    throw "assert failed";
                                }
                                return this.estimatedSize;
                            }
                            calcEstimatedSize() {
                                let c = 0;
                                const nodes = this.nodes;
                                for(let T = nodes.length, u = 0; u < T; u++){
                                    const d = nodes[u];
                                    c += d.calcEstimatedSize();
                                }
                                if (c == 0) {
                                    this.estimatedSize = a.EMPTY_COMPOUND_NODE_SIZE;
                                } else {
                                    this.estimatedSize = c / Math.sqrt(this.nodes.length);
                                }
                                return this.estimatedSize;
                            }
                            updateConnected() {
                                const c = this;
                                if (this.nodes.length == 0) {
                                    this.isConnected = true;
                                    return;
                                }
                                const l = new t;
                                const T = new Set;
                                let u = this.nodes[0];
                                let d;
                                let L;
                                const b = u.withChildren();
                                for(b.forEach((M)=>{
                                    l.push(M);
                                    T.add(M);
                                }); l.length !== 0;){
                                    u = l.shift();
                                    d = u.getEdges();
                                    for(let w = d.length, G = 0; G < w; G++){
                                        const B = d[G];
                                        L = B.getOtherEndInGraph(u, this);
                                        if (L != null && !T.has(L)) {
                                            const U = L.withChildren();
                                            U.forEach((M)=>{
                                                l.push(M);
                                                T.add(M);
                                            });
                                        }
                                    }
                                }
                                this.isConnected = false;
                                if (T.size >= this.nodes.length) {
                                    let V = 0;
                                    T.forEach((M)=>{
                                        M.owner == c && V++;
                                    });
                                    if (V == this.nodes.length) {
                                        this.isConnected = true;
                                    }
                                }
                            }
                        }
                        for(const n in v){
                            s[n] = v[n];
                        }
                        C.exports = s;
                    },
                    function(C, R, N) {
                        let v;
                        const h = N(1);
                        class a {
                            constructor(r){
                                v = N(6);
                                this.layout = r;
                                this.graphs = [];
                                this.edges = [];
                            }
                            addRoot() {
                                const r = this.layout.newGraph();
                                const i = this.layout.newNode(null);
                                const f = this.add(r, i);
                                this.setRootGraph(f);
                                return this.rootGraph;
                            }
                            add(r, i, f, e, g) {
                                if (f == null && e == null && g == null) {
                                    if (r == null) {
                                        throw "Graph is null!";
                                    }
                                    if (i == null) {
                                        throw "Parent node is null!";
                                    }
                                    if (this.graphs.indexOf(r) > -1) {
                                        throw "Graph already in this graph mgr!";
                                    }
                                    this.graphs.push(r);
                                    if (r.parent != null) {
                                        throw "Already has a parent!";
                                    }
                                    if (i.child != null) {
                                        throw "Already has a child!";
                                    }
                                    r.parent = i;
                                    i.child = r;
                                    return r;
                                } else {
                                    g = f;
                                    e = i;
                                    f = r;
                                    const t = e.getOwner();
                                    const s = g.getOwner();
                                    if (!(t != null && t.getGraphManager() == this)) {
                                        throw "Source not in this graph mgr!";
                                    }
                                    if (!(s != null && s.getGraphManager() == this)) {
                                        throw "Target not in this graph mgr!";
                                    }
                                    if (t == s) {
                                        f.isInterGraph = false;
                                        return t.add(f, e, g);
                                    }
                                    f.isInterGraph = true;
                                    f.source = e;
                                    f.target = g;
                                    if (this.edges.indexOf(f) > -1) {
                                        throw "Edge already in inter-graph edge list!";
                                    }
                                    this.edges.push(f);
                                    if (!(f.source != null && f.target != null)) {
                                        throw "Edge source and/or target is null!";
                                    }
                                    if (!(f.source.edges.indexOf(f) == -1 && f.target.edges.indexOf(f) == -1)) {
                                        throw "Edge already in source and/or target incidency list!";
                                    }
                                    f.source.edges.push(f);
                                    f.target.edges.push(f);
                                    return f;
                                }
                            }
                            remove(r) {
                                if (r instanceof v) {
                                    const i = r;
                                    if (i.getGraphManager() != this) {
                                        throw "Graph not in this graph mgr";
                                    }
                                    if (!(i == this.rootGraph || i.parent != null && i.parent.graphManager == this)) {
                                        throw "Invalid parent node!";
                                    }
                                    let f = [];
                                    f = f.concat(i.getEdges());
                                    var e;
                                    for(var g = f.length, t = 0; t < g; t++){
                                        e = f[t];
                                        i.remove(e);
                                    }
                                    let s = [];
                                    s = s.concat(i.getNodes());
                                    let n;
                                    g = s.length;
                                    for(var t = 0; t < g; t++){
                                        n = s[t];
                                        i.remove(n);
                                    }
                                    if (i == this.rootGraph) {
                                        this.setRootGraph(null);
                                    }
                                    var c = this.graphs.indexOf(i);
                                    this.graphs.splice(c, 1);
                                    i.parent = null;
                                } else if (r instanceof h) {
                                    e = r;
                                    if (e == null) {
                                        throw "Edge is null!";
                                    }
                                    if (!e.isInterGraph) {
                                        throw "Not an inter-graph edge!";
                                    }
                                    if (!(e.source != null && e.target != null)) {
                                        throw "Source and/or target is null!";
                                    }
                                    if (!(e.source.edges.indexOf(e) != -1 && e.target.edges.indexOf(e) != -1)) {
                                        throw "Source and/or target doesn't know this edge!";
                                    }
                                    var c = e.source.edges.indexOf(e);
                                    e.source.edges.splice(c, 1);
                                    c = e.target.edges.indexOf(e);
                                    e.target.edges.splice(c, 1);
                                    if (!(e.source.owner != null && e.source.owner.getGraphManager() != null)) {
                                        throw "Edge owner graph or owner graph manager is null!";
                                    }
                                    if (e.source.owner.getGraphManager().edges.indexOf(e) == -1) {
                                        throw "Not in owner graph manager's edge list!";
                                    }
                                    var c = e.source.owner.getGraphManager().edges.indexOf(e);
                                    e.source.owner.getGraphManager().edges.splice(c, 1);
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
                                    let r = [];
                                    const i = this.getGraphs();
                                    for(let f = i.length, e = 0; e < f; e++){
                                        r = r.concat(i[e].getNodes());
                                    }
                                    this.allNodes = r;
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
                                    let r = [];
                                    const i = this.getGraphs();
                                    i.length;
                                    for(let f = 0; f < i.length; f++){
                                        r = r.concat(i[f].getEdges());
                                    }
                                    r = r.concat(this.edges);
                                    this.allEdges = r;
                                }
                                return this.allEdges;
                            }
                            getAllNodesToApplyGravitation() {
                                return this.allNodesToApplyGravitation;
                            }
                            setAllNodesToApplyGravitation(r) {
                                if (this.allNodesToApplyGravitation != null) {
                                    throw "assert failed";
                                }
                                this.allNodesToApplyGravitation = r;
                            }
                            getRoot() {
                                return this.rootGraph;
                            }
                            setRootGraph(r) {
                                if (r.getGraphManager() != this) {
                                    throw "Root not in this graph mgr!";
                                }
                                this.rootGraph = r;
                                if (r.parent == null) {
                                    r.parent = this.layout.newNode("Root node");
                                }
                            }
                            getLayout() {
                                return this.layout;
                            }
                            isOneAncestorOfOther(r, i) {
                                if (!(r != null && i != null)) {
                                    throw "assert failed";
                                }
                                if (r == i) {
                                    return true;
                                }
                                let f = r.getOwner();
                                let e;
                                do {
                                    e = f.getParent();
                                    if (e == null) {
                                        break;
                                    }
                                    if (e == i) {
                                        return true;
                                    }
                                    f = e.getOwner();
                                    if (f == null) {
                                        break;
                                    }
                                }while (true)
                                f = i.getOwner();
                                do {
                                    e = f.getParent();
                                    if (e == null) {
                                        break;
                                    }
                                    if (e == r) {
                                        return true;
                                    }
                                    f = e.getOwner();
                                    if (f == null) {
                                        break;
                                    }
                                }while (true)
                                return false;
                            }
                            calcLowestCommonAncestors() {
                                let r;
                                let i;
                                let f;
                                let e;
                                let g;
                                const t = this.getAllEdges();
                                for(let s = t.length, n = 0; n < s; n++){
                                    r = t[n];
                                    i = r.source;
                                    f = r.target;
                                    r.lca = null;
                                    r.sourceInLca = i;
                                    r.targetInLca = f;
                                    if (i == f) {
                                        r.lca = i.getOwner();
                                        continue;
                                    }
                                    for(e = i.getOwner(); r.lca == null;){
                                        r.targetInLca = f;
                                        for(g = f.getOwner(); r.lca == null;){
                                            if (g == e) {
                                                r.lca = g;
                                                break;
                                            }
                                            if (g == this.rootGraph) {
                                                break;
                                            }
                                            if (r.lca != null) {
                                                throw "assert failed";
                                            }
                                            r.targetInLca = g.getParent();
                                            g = r.targetInLca.getOwner();
                                        }
                                        if (e == this.rootGraph) {
                                            break;
                                        }
                                        if (r.lca == null) {
                                            r.sourceInLca = e.getParent();
                                            e = r.sourceInLca.getOwner();
                                        }
                                    }
                                    if (r.lca == null) {
                                        throw "assert failed";
                                    }
                                }
                            }
                            calcLowestCommonAncestor(r, i) {
                                if (r == i) {
                                    return r.getOwner();
                                }
                                let f = r.getOwner();
                                do {
                                    if (f == null) {
                                        break;
                                    }
                                    let e = i.getOwner();
                                    do {
                                        if (e == null) {
                                            break;
                                        }
                                        if (e == f) {
                                            return e;
                                        }
                                        e = e.getParent().getOwner();
                                    }while (true)
                                    f = f.getParent().getOwner();
                                }while (true)
                                return f;
                            }
                            calcInclusionTreeDepths(r, i) {
                                if (r == null && i == null) {
                                    r = this.rootGraph;
                                    i = 1;
                                }
                                let f;
                                const e = r.getNodes();
                                for(let g = e.length, t = 0; t < g; t++){
                                    f = e[t];
                                    f.inclusionTreeDepth = i;
                                    if (f.child != null) {
                                        this.calcInclusionTreeDepths(f.child, i + 1);
                                    }
                                }
                            }
                            includesInvalidEdge() {
                                let r;
                                const i = [];
                                for(var f = this.edges.length, e = 0; e < f; e++){
                                    r = this.edges[e];
                                    if (this.isOneAncestorOfOther(r.source, r.target)) {
                                        i.push(r);
                                    }
                                }
                                for(var e = 0; e < i.length; e++){
                                    this.remove(i[e]);
                                }
                                return false;
                            }
                        }
                        C.exports = a;
                    },
                    (C, R, N)=>{
                        const v = N(12);
                        function h() {}
                        h.calcSeparationAmount = function(a, r, i, f) {
                            if (!a.intersects(r)) {
                                throw "assert failed";
                            }
                            const e = new Array(2);
                            this.decideDirectionsForOverlappingNodes(a, r, e);
                            i[0] = Math.min(a.getRight(), r.getRight()) - Math.max(a.x, r.x);
                            i[1] = Math.min(a.getBottom(), r.getBottom()) - Math.max(a.y, r.y);
                            if (a.getX() <= r.getX() && a.getRight() >= r.getRight()) {
                                i[0] += Math.min(r.getX() - a.getX(), a.getRight() - r.getRight());
                            } else if (r.getX() <= a.getX() && r.getRight() >= a.getRight()) {
                                i[0] += Math.min(a.getX() - r.getX(), r.getRight() - a.getRight());
                            }
                            if (a.getY() <= r.getY() && a.getBottom() >= r.getBottom()) {
                                i[1] += Math.min(r.getY() - a.getY(), a.getBottom() - r.getBottom());
                            } else if (r.getY() <= a.getY() && r.getBottom() >= a.getBottom()) {
                                i[1] += Math.min(a.getY() - r.getY(), r.getBottom() - a.getBottom());
                            }
                            let g = Math.abs((r.getCenterY() - a.getCenterY()) / (r.getCenterX() - a.getCenterX()));
                            if (r.getCenterY() === a.getCenterY() && r.getCenterX() === a.getCenterX()) {
                                g = 1;
                            }
                            let t = g * i[0];
                            let s = i[1] / g;
                            if (i[0] < s) {
                                s = i[0];
                            } else {
                                t = i[1];
                            }
                            i[0] = -1 * e[0] * (s / 2 + f);
                            i[1] = -1 * e[1] * (t / 2 + f);
                        };
                        h.decideDirectionsForOverlappingNodes = (a, r, i)=>{
                            if (a.getCenterX() < r.getCenterX()) {
                                i[0] = -1;
                            } else {
                                i[0] = 1;
                            }
                            if (a.getCenterY() < r.getCenterY()) {
                                i[1] = -1;
                            } else {
                                i[1] = 1;
                            }
                        };
                        h.getIntersection2 = function(a, r, i) {
                            const f = a.getCenterX();
                            const e = a.getCenterY();
                            const g = r.getCenterX();
                            const t = r.getCenterY();
                            if (a.intersects(r)) {
                                i[0] = f;
                                i[1] = e;
                                i[2] = g;
                                i[3] = t;
                                return true;
                            }
                            const s = a.getX();
                            const n = a.getY();
                            const c = a.getRight();
                            const l = a.getX();
                            const T = a.getBottom();
                            const u = a.getRight();
                            const d = a.getWidthHalf();
                            const L = a.getHeightHalf();
                            const b = r.getX();
                            const w = r.getY();
                            const G = r.getRight();
                            const B = r.getX();
                            const U = r.getBottom();
                            const V = r.getRight();
                            const M = r.getWidthHalf();
                            const _ = r.getHeightHalf();
                            let o = false;
                            let E = false;
                            if (f === g) {
                                if (e > t) {
                                    i[0] = f;
                                    i[1] = n;
                                    i[2] = g;
                                    i[3] = U;
                                    return false;
                                }
                                if (e < t) {
                                    i[0] = f;
                                    i[1] = T;
                                    i[2] = g;
                                    i[3] = w;
                                    return false;
                                }
                            } else if (e === t) {
                                if (f > g) {
                                    i[0] = s;
                                    i[1] = e;
                                    i[2] = G;
                                    i[3] = t;
                                    return false;
                                }
                                if (f < g) {
                                    i[0] = c;
                                    i[1] = e;
                                    i[2] = b;
                                    i[3] = t;
                                    return false;
                                }
                            } else {
                                const p = a.height / a.width;
                                const m = r.height / r.width;
                                const y = (t - e) / (g - f);
                                let S;
                                let O;
                                let F;
                                let W;
                                let I;
                                let Q;
                                -p === y ? f > g ? (i[0] = l, i[1] = T, o = true) : (i[0] = c, i[1] = n, o = true) : p === y && (f > g ? (i[0] = s, i[1] = n, o = true) : (i[0] = u, i[1] = T, o = true));
                                -m === y ? g > f ? (i[2] = B, i[3] = U, E = true) : (i[2] = G, i[3] = w, E = true) : m === y && (g > f ? (i[2] = b, i[3] = w, E = true) : (i[2] = V, i[3] = U, E = true));
                                if (o && E) {
                                    return false;
                                }
                                f > g ? e > t ? (S = this.getCardinalDirection(p, y, 4), O = this.getCardinalDirection(m, y, 2)) : (S = this.getCardinalDirection(-p, y, 3), O = this.getCardinalDirection(-m, y, 1)) : e > t ? (S = this.getCardinalDirection(-p, y, 1), O = this.getCardinalDirection(-m, y, 3)) : (S = this.getCardinalDirection(p, y, 2), O = this.getCardinalDirection(m, y, 4));
                                if (!o) {
                                    switch(S){
                                        case 1:
                                            W = n;
                                            F = f + -L / y;
                                            i[0] = F;
                                            i[1] = W;
                                            break;
                                        case 2:
                                            F = u;
                                            W = e + d * y;
                                            i[0] = F;
                                            i[1] = W;
                                            break;
                                        case 3:
                                            W = T;
                                            F = f + L / y;
                                            i[0] = F;
                                            i[1] = W;
                                            break;
                                        case 4:
                                            F = l;
                                            W = e + -d * y;
                                            i[0] = F;
                                            i[1] = W;
                                            break;
                                    }
                                }
                                if (!E) {
                                    switch(O){
                                        case 1:
                                            Q = w;
                                            I = g + -_ / y;
                                            i[2] = I;
                                            i[3] = Q;
                                            break;
                                        case 2:
                                            I = V;
                                            Q = t + M * y;
                                            i[2] = I;
                                            i[3] = Q;
                                            break;
                                        case 3:
                                            Q = U;
                                            I = g + _ / y;
                                            i[2] = I;
                                            i[3] = Q;
                                            break;
                                        case 4:
                                            I = B;
                                            Q = t + -M * y;
                                            i[2] = I;
                                            i[3] = Q;
                                            break;
                                    }
                                }
                            }
                            return false;
                        };
                        h.getCardinalDirection = (a, r, i)=>{
                            if (a > r) {
                                return i;
                            }
                            return 1 + i % 4;
                        };
                        h.getIntersection = function(a, r, i, f) {
                            if (f == null) {
                                return this.getIntersection2(a, r, i);
                            }
                            const { x, y } = a;
                            const { x: x_1, y: y_1 } = r;
                            const { x: x_2, y: y_2 } = i;
                            const { x: x_3, y: y_3 } = f;
                            let u;
                            let d;
                            let L;
                            let b;
                            let w;
                            let G;
                            let B;
                            let U;
                            let V;
                            L = y_1 - y;
                            w = x - x_1;
                            B = x_1 * y - x * y_1;
                            b = y_3 - y_2;
                            G = x_2 - x_3;
                            U = x_3 * y_2 - x_2 * y_3;
                            V = L * G - b * w;
                            if (V === 0) {
                                return null;
                            }
                            u = (w * U - G * B) / V;
                            d = (b * B - L * U) / V;
                            return new v(u, d);
                        };
                        h.angleOfVector = function(a, r, i, f) {
                            let e;
                            if (a !== i) {
                                e = Math.atan((f - r) / (i - a));
                                if (i < a) {
                                    e += Math.PI;
                                } else if (f < r) {
                                    e += this.TWO_PI;
                                }
                            } else if (f < r) {
                                e = this.ONE_AND_HALF_PI;
                            } else {
                                e = this.HALF_PI;
                            }
                            return e;
                        };
                        h.doIntersect = ({ x, y }, { x: x_1, y: y_1 }, { x: x_2, y: y_2 }, { x: x_3, y: y_3 })=>{
                            const u = (x_1 - x) * (y_3 - y_2) - (x_3 - x_2) * (y_1 - y);
                            if (u === 0) {
                                return false;
                            }
                            const d = ((y_3 - y_2) * (x_3 - x) + (x_2 - x_3) * (y_3 - y)) / u;
                            const L = ((y - y_1) * (x_3 - x) + (x_1 - x) * (y_3 - y)) / u;
                            return d > 0 && d < 1 && L > 0 && L < 1;
                        };
                        h.findCircleLineIntersections = (a, r, i, f, e, g, t)=>{
                            const s = (i - a) * (i - a) + (f - r) * (f - r);
                            const n = 2 * ((a - e) * (i - a) + (r - g) * (f - r));
                            const c = (a - e) * (a - e) + (r - g) * (r - g) - t * t;
                            const l = n * n - 4 * s * c;
                            if (l >= 0) {
                                const T = (-n + Math.sqrt(n * n - 4 * s * c)) / (2 * s);
                                const u = (-n - Math.sqrt(n * n - 4 * s * c)) / (2 * s);
                                const d = null;
                                if (T >= 0 && T <= 1) {
                                    return [
                                        T
                                    ];
                                }
                                if (u >= 0 && u <= 1) {
                                    return [
                                        u
                                    ];
                                }
                                return d;
                            } else {
                                return null;
                            }
                        };
                        h.HALF_PI = 0.5 * Math.PI;
                        h.ONE_AND_HALF_PI = 1.5 * Math.PI;
                        h.TWO_PI = 2 * Math.PI;
                        h.THREE_PI = 3 * Math.PI;
                        C.exports = h;
                    },
                    (C, R, N)=>{
                        function v() {}
                        v.sign = (h)=>{
                            if (h > 0) {
                                return 1;
                            }
                            if (h < 0) {
                                return -1;
                            }
                            return 0;
                        };
                        v.floor = (h)=>{
                            if (h < 0) {
                                return Math.ceil(h);
                            }
                            return Math.floor(h);
                        };
                        v.ceil = (h)=>{
                            if (h < 0) {
                                return Math.floor(h);
                            }
                            return Math.ceil(h);
                        };
                        C.exports = v;
                    },
                    (C, R, N)=>{
                        function v() {}
                        v.MAX_VALUE = 2147483647;
                        v.MIN_VALUE = -2147483648;
                        C.exports = v;
                    },
                    (C, R, N)=>{
                        const v = (()=>{
                            function e(g, t) {
                                for (const n of t){
                                    n.enumerable = n.enumerable || false;
                                    n.configurable = true;
                                    if ("value" in n) {
                                        n.writable = true;
                                    }
                                    Object.defineProperty(g, n.key, n);
                                }
                            }
                            return (g, t, s)=>{
                                if (t) {
                                    e(g.prototype, t);
                                }
                                if (s) {
                                    e(g, s);
                                }
                                return g;
                            };
                        })();
                        function h(e, g) {
                            if (!(e instanceof g)) {
                                throw new TypeError("Cannot call a class as a function");
                            }
                        }
                        const a = (value)=>({
                                value,
                                next: null,
                                prev: null
                            });
                        const r = (g, t, s, n)=>{
                            if (g !== null) {
                                g.next = t;
                            } else {
                                n.head = t;
                            }
                            if (s !== null) {
                                s.prev = t;
                            } else {
                                n.tail = t;
                            }
                            t.prev = g;
                            t.next = s;
                            n.length++;
                            return t;
                        };
                        const i = (g, t)=>{
                            const { prev, next } = g;
                            if (prev !== null) {
                                prev.next = next;
                            } else {
                                t.head = next;
                            }
                            if (next !== null) {
                                next.prev = prev;
                            } else {
                                t.tail = prev;
                            }
                            g.prev = g.next = null;
                            t.length--;
                            return g;
                        };
                        const f = (()=>{
                            function e(g) {
                                const t = this;
                                h(this, e);
                                this.length = 0;
                                this.head = null;
                                this.tail = null;
                                g?.forEach((s)=>t.push(s));
                            }
                            v(e, [
                                {
                                    key: "size",
                                    value () {
                                        return this.length;
                                    }
                                },
                                {
                                    key: "insertBefore",
                                    value (t, s) {
                                        return r(s.prev, a(t), s, this);
                                    }
                                },
                                {
                                    key: "insertAfter",
                                    value (t, s) {
                                        return r(s, a(t), s.next, this);
                                    }
                                },
                                {
                                    key: "insertNodeBefore",
                                    value (t, s) {
                                        return r(s.prev, t, s, this);
                                    }
                                },
                                {
                                    key: "insertNodeAfter",
                                    value (t, s) {
                                        return r(s, t, s.next, this);
                                    }
                                },
                                {
                                    key: "push",
                                    value (t) {
                                        return r(this.tail, a(t), null, this);
                                    }
                                },
                                {
                                    key: "unshift",
                                    value (t) {
                                        return r(null, a(t), this.head, this);
                                    }
                                },
                                {
                                    key: "remove",
                                    value (t) {
                                        return i(t, this);
                                    }
                                },
                                {
                                    key: "pop",
                                    value () {
                                        return i(this.tail, this).value;
                                    }
                                },
                                {
                                    key: "popNode",
                                    value () {
                                        return i(this.tail, this);
                                    }
                                },
                                {
                                    key: "shift",
                                    value () {
                                        return i(this.head, this).value;
                                    }
                                },
                                {
                                    key: "shiftNode",
                                    value () {
                                        return i(this.head, this);
                                    }
                                },
                                {
                                    key: "get_object_at",
                                    value (t) {
                                        if (t <= this.length()) {
                                            for(var s = 1, n = this.head; s < t;){
                                                n = n.next;
                                                s++;
                                            }
                                            return n.value;
                                        }
                                    }
                                },
                                {
                                    key: "set_object_at",
                                    value (t, s) {
                                        if (t <= this.length()) {
                                            for(var n = 1, c = this.head; n < t;){
                                                c = c.next;
                                                n++;
                                            }
                                            c.value = s;
                                        }
                                    }
                                }
                            ]);
                            return e;
                        })();
                        C.exports = f;
                    },
                    function(C, R, N) {
                        class v {
                            constructor(h, a, r){
                                this.x = null;
                                this.y = null;
                                if (h == null && a == null && r == null) {
                                    this.x = 0;
                                    this.y = 0;
                                } else if (typeof h === "number" && typeof a === "number" && r == null) {
                                    this.x = h;
                                    this.y = a;
                                } else if (h.constructor.name == "Point" && a == null && r == null) {
                                    r = h;
                                    this.x = r.x;
                                    this.y = r.y;
                                }
                            }
                            getX() {
                                return this.x;
                            }
                            getY() {
                                return this.y;
                            }
                            getLocation() {
                                return new v(this.x, this.y);
                            }
                            setLocation(h, a, r) {
                                if (h.constructor.name == "Point" && a == null && r == null) {
                                    r = h;
                                    this.setLocation(r.x, r.y);
                                } else {
                                    typeof h === "number" && typeof a === "number" && r == null && (parseInt(h) == h && parseInt(a) == a ? this.move(h, a) : (this.x = Math.floor(h + 0.5), this.y = Math.floor(a + 0.5)));
                                }
                            }
                            move(h, a) {
                                this.x = h;
                                this.y = a;
                            }
                            translate(h, a) {
                                this.x += h;
                                this.y += a;
                            }
                            equals(h) {
                                if (h.constructor.name == "Point") {
                                    const a = h;
                                    return this.x == a.x && this.y == a.y;
                                }
                                return this == h;
                            }
                            toString() {
                                return `${new v().constructor.name}[x=${this.x},y=${this.y}]`;
                            }
                        }
                        C.exports = v;
                    },
                    function(C, R, N) {
                        class v {
                            constructor(h, a, r, i){
                                this.x = 0;
                                this.y = 0;
                                this.width = 0;
                                this.height = 0;
                                if (h != null && a != null && r != null && i != null) {
                                    this.x = h;
                                    this.y = a;
                                    this.width = r;
                                    this.height = i;
                                }
                            }
                            getX() {
                                return this.x;
                            }
                            setX(h) {
                                this.x = h;
                            }
                            getY() {
                                return this.y;
                            }
                            setY(h) {
                                this.y = h;
                            }
                            getWidth() {
                                return this.width;
                            }
                            setWidth(h) {
                                this.width = h;
                            }
                            getHeight() {
                                return this.height;
                            }
                            setHeight(h) {
                                this.height = h;
                            }
                            getRight() {
                                return this.x + this.width;
                            }
                            getBottom() {
                                return this.y + this.height;
                            }
                            intersects(h) {
                                return !(this.getRight() < h.x || this.getBottom() < h.y || h.getRight() < this.x || h.getBottom() < this.y);
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
                        C.exports = v;
                    },
                    (C, R, N)=>{
                        const v = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? (a)=>typeof a : (a)=>{
                            if (a && typeof Symbol === "function" && a.constructor === Symbol && a !== Symbol.prototype) {
                                return "symbol";
                            }
                            return typeof a;
                        };
                        function h() {}
                        h.lastID = 0;
                        h.createID = (a)=>{
                            if (h.isPrimitive(a)) {
                                return a;
                            }
                            if (!(a.uniqueID != null)) {
                                a.uniqueID = h.getString();
                                h.lastID++;
                            }
                            return a.uniqueID;
                        };
                        h.getString = (a)=>{
                            if (a == null) {
                                a = h.lastID;
                            }
                            return `Object#${a}`;
                        };
                        h.isPrimitive = (a)=>{
                            const r = typeof a === "undefined" ? "undefined" : v(a);
                            return a == null || r != "object" && r != "function";
                        };
                        C.exports = h;
                    },
                    function(C, R, N) {
                        function v(n) {
                            if (Array.isArray(n)) {
                                for(var c = 0, l = Array(n.length); c < n.length; c++){
                                    l[c] = n[c];
                                }
                                return l;
                            } else {
                                return Array.from(n);
                            }
                        }
                        const h = N(0);
                        const a = N(7);
                        const r = N(3);
                        const i = N(1);
                        const f = N(6);
                        const e = N(5);
                        const g = N(17);
                        const t = N(29);
                        class s extends t {
                            constructor(n){
                                super();
                                this.layoutQuality = h.QUALITY;
                                this.createBendsAsNeeded = h.DEFAULT_CREATE_BENDS_AS_NEEDED;
                                this.incremental = h.DEFAULT_INCREMENTAL;
                                this.animationOnLayout = h.DEFAULT_ANIMATION_ON_LAYOUT;
                                this.animationDuringLayout = h.DEFAULT_ANIMATION_DURING_LAYOUT;
                                this.animationPeriod = h.DEFAULT_ANIMATION_PERIOD;
                                this.uniformLeafNodeSizes = h.DEFAULT_UNIFORM_LEAF_NODE_SIZES;
                                this.edgeToDummyNodes = new Map;
                                this.graphManager = new a(this);
                                this.isLayoutFinished = false;
                                this.isSubLayout = false;
                                this.isRemoteUse = false;
                                if (n != null) {
                                    this.isRemoteUse = n;
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
                                const n = new a(this);
                                this.graphManager = n;
                                return n;
                            }
                            newGraph(n) {
                                return new f(null, this.graphManager, n);
                            }
                            newNode(n) {
                                return new r(this.graphManager, n);
                            }
                            newEdge(n) {
                                return new i(null, null, n);
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
                                let n;
                                if (this.checkLayoutSuccess()) {
                                    n = false;
                                } else {
                                    n = this.layout();
                                }
                                if (h.ANIMATE === "during") {
                                    return false;
                                }
                                n && (this.isSubLayout || this.doPostLayout());
                                if (this.tilingPostLayout) {
                                    this.tilingPostLayout();
                                }
                                this.isLayoutFinished = true;
                                return n;
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
                                    for(var n = this.graphManager.getAllEdges(), c = 0; c < n.length; c++){
                                        n[c];
                                    }
                                    for(var l = this.graphManager.getRoot().getNodes(), c = 0; c < l.length; c++){
                                        l[c];
                                    }
                                    this.update(this.graphManager.getRoot());
                                }
                            }
                            update(n) {
                                if (n == null) {
                                    this.update2();
                                } else if (n instanceof r) {
                                    const c = n;
                                    if (c.getChild() != null) {
                                        for(let l = c.getChild().getNodes(), T = 0; T < l.length; T++){
                                            update(l[T]);
                                        }
                                    }
                                    if (c.vGraphObject != null) {
                                        const u = c.vGraphObject;
                                        u.update(c);
                                    }
                                } else if (n instanceof i) {
                                    const d = n;
                                    if (d.vGraphObject != null) {
                                        const L = d.vGraphObject;
                                        L.update(d);
                                    }
                                } else if (n instanceof f) {
                                    const b = n;
                                    if (b.vGraphObject != null) {
                                        const w = b.vGraphObject;
                                        w.update(b);
                                    }
                                }
                            }
                            initParameters() {
                                if (!this.isSubLayout) {
                                    this.layoutQuality = h.QUALITY;
                                    this.animationDuringLayout = h.DEFAULT_ANIMATION_DURING_LAYOUT;
                                    this.animationPeriod = h.DEFAULT_ANIMATION_PERIOD;
                                    this.animationOnLayout = h.DEFAULT_ANIMATION_ON_LAYOUT;
                                    this.incremental = h.DEFAULT_INCREMENTAL;
                                    this.createBendsAsNeeded = h.DEFAULT_CREATE_BENDS_AS_NEEDED;
                                    this.uniformLeafNodeSizes = h.DEFAULT_UNIFORM_LEAF_NODE_SIZES;
                                }
                                if (this.animationDuringLayout) {
                                    this.animationOnLayout = false;
                                }
                            }
                            transform(n) {
                                if (n == null) {
                                    this.transform(new e(0, 0));
                                } else {
                                    const c = new g;
                                    const l = this.graphManager.getRoot().updateLeftTop();
                                    if (l != null) {
                                        c.setWorldOrgX(n.x);
                                        c.setWorldOrgY(n.y);
                                        c.setDeviceOrgX(l.x);
                                        c.setDeviceOrgY(l.y);
                                        let u;
                                        for(let T = this.getAllNodes(), d = 0; d < T.length; d++){
                                            u = T[d];
                                            u.transform(c);
                                        }
                                    }
                                }
                            }
                            positionNodesRandomly(n) {
                                if (n == null) {
                                    this.positionNodesRandomly(this.getGraphManager().getRoot());
                                    this.getGraphManager().getRoot().updateBounds(true);
                                } else {
                                    let c;
                                    let l;
                                    for(let T = n.getNodes(), u = 0; u < T.length; u++){
                                        c = T[u];
                                        l = c.getChild();
                                        if (l == null || l.getNodes().length == 0) {
                                            c.scatter();
                                        } else {
                                            this.positionNodesRandomly(l);
                                            c.updateBounds();
                                        }
                                    }
                                }
                            }
                            getFlatForest() {
                                let n = [];
                                let c = true;
                                for(var l = this.graphManager.getRoot().getNodes(), T = true, u = 0; u < l.length; u++){
                                    if (l[u].getChild() != null) {
                                        T = false;
                                    }
                                }
                                if (!T) {
                                    return n;
                                }
                                let d = new Set;
                                const L = [];
                                let b = new Map;
                                let w = [];
                                for(w = w.concat(l); w.length > 0 && c;){
                                    for(L.push(w[0]); L.length > 0 && c;){
                                        const G = L[0];
                                        L.splice(0, 1);
                                        d.add(G);
                                        for(var B = G.getEdges(), u = 0; u < B.length; u++){
                                            const U = B[u].getOtherEnd(G);
                                            if (b.get(G) != U) {
                                                if (!d.has(U)) {
                                                    L.push(U);
                                                    b.set(U, G);
                                                } else {
                                                    c = false;
                                                    break;
                                                }
                                            }
                                        }
                                    }
                                    if (!c) {
                                        n = [];
                                    } else {
                                        const V = [].concat(v(d));
                                        n.push(V);
                                        for(var u = 0; u < V.length; u++){
                                            const M = V[u];
                                            const _ = w.indexOf(M);
                                            if (_ > -1) {
                                                w.splice(_, 1);
                                            }
                                        }
                                        d = new Set;
                                        b = new Map;
                                    }
                                }
                                return n;
                            }
                            createDummyNodesForBendpoints(n) {
                                const c = [];
                                let n_source = n.source;
                                const T = this.graphManager.calcLowestCommonAncestor(n.source, n.target);
                                for(let u = 0; u < n.bendpoints.length; u++){
                                    const d = this.newNode(null);
                                    d.setRect(new Point(0, 0), new Dimension(1, 1));
                                    T.add(d);
                                    var L = this.newEdge(null);
                                    this.graphManager.add(L, n_source, d);
                                    c.add(d);
                                    n_source = d;
                                }
                                var L = this.newEdge(null);
                                this.graphManager.add(L, n_source, n.target);
                                this.edgeToDummyNodes.set(n, c);
                                if (n.isInterGraph()) {
                                    this.graphManager.remove(n);
                                } else {
                                    T.remove(n);
                                }
                                return c;
                            }
                            createBendpointsFromDummyNodes() {
                                let n = [];
                                n = n.concat(this.graphManager.getAllEdges());
                                n = [].concat(v(this.edgeToDummyNodes.keys())).concat(n);
                                for (const l of n){
                                    if (l.bendpoints.length > 0) {
                                        for(let T = this.edgeToDummyNodes.get(l), u = 0; u < T.length; u++){
                                            const d = T[u];
                                            const L = new e(d.getCenterX(), d.getCenterY());
                                            const b = l.bendpoints.get(u);
                                            b.x = L.x;
                                            b.y = L.y;
                                            d.getOwner().remove(d);
                                        }
                                        this.graphManager.add(l, l.source, l.target);
                                    }
                                }
                            }
                            static transform(n, c, l, T) {
                                if (l != null && T != null) {
                                    let u = c;
                                    if (n <= 50) {
                                        const d = c / l;
                                        u -= (c - d) / 50 * (50 - n);
                                    } else {
                                        const L = c * T;
                                        u += (L - c) / 50 * (n - 50);
                                    }
                                    return u;
                                } else {
                                    let b;
                                    let w;
                                    if (n <= 50) {
                                        b = 9 * c / 500;
                                        w = c / 10;
                                    } else {
                                        b = 9 * c / 50;
                                        w = -8 * c;
                                    }
                                    return b * n + w;
                                }
                            }
                            static findCenterOfTree(n) {
                                let c = [];
                                c = c.concat(n);
                                let l = [];
                                const T = new Map;
                                let u = false;
                                let d = null;
                                if (c.length == 1 || c.length == 2) {
                                    u = true;
                                    d = c[0];
                                }
                                for(var L = 0; L < c.length; L++){
                                    var b = c[L];
                                    const w = b.getNeighborsList().size;
                                    T.set(b, b.getNeighborsList().size);
                                    if (w == 1) {
                                        l.push(b);
                                    }
                                }
                                let G = [];
                                for(G = G.concat(l); !u;){
                                    let B = [];
                                    B = B.concat(G);
                                    G = [];
                                    for(var L = 0; L < c.length; L++){
                                        var b = c[L];
                                        const U = c.indexOf(b);
                                        if (U >= 0) {
                                            c.splice(U, 1);
                                        }
                                        const V = b.getNeighborsList();
                                        V.forEach((o)=>{
                                            if (l.indexOf(o) < 0) {
                                                const E = T.get(o);
                                                const p = E - 1;
                                                if (p == 1) {
                                                    G.push(o);
                                                }
                                                T.set(o, p);
                                            }
                                        });
                                    }
                                    l = l.concat(G);
                                    if (c.length == 1 || c.length == 2) {
                                        u = true;
                                        d = c[0];
                                    }
                                }
                                return d;
                            }
                            setGraphManager(n) {
                                this.graphManager = n;
                            }
                        }
                        s.RANDOM_SEED = 1;
                        C.exports = s;
                    },
                    (C, R, N)=>{
                        function v() {}
                        v.seed = 1;
                        v.x = 0;
                        v.nextDouble = ()=>{
                            v.x = Math.sin(v.seed++) * 10000;
                            return v.x - Math.floor(v.x);
                        };
                        C.exports = v;
                    },
                    function(C, R, N) {
                        const v = N(5);
                        class h {
                            constructor(a, r){
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
                            setWorldOrgX(a) {
                                this.lworldOrgX = a;
                            }
                            getWorldOrgY() {
                                return this.lworldOrgY;
                            }
                            setWorldOrgY(a) {
                                this.lworldOrgY = a;
                            }
                            getWorldExtX() {
                                return this.lworldExtX;
                            }
                            setWorldExtX(a) {
                                this.lworldExtX = a;
                            }
                            getWorldExtY() {
                                return this.lworldExtY;
                            }
                            setWorldExtY(a) {
                                this.lworldExtY = a;
                            }
                            getDeviceOrgX() {
                                return this.ldeviceOrgX;
                            }
                            setDeviceOrgX(a) {
                                this.ldeviceOrgX = a;
                            }
                            getDeviceOrgY() {
                                return this.ldeviceOrgY;
                            }
                            setDeviceOrgY(a) {
                                this.ldeviceOrgY = a;
                            }
                            getDeviceExtX() {
                                return this.ldeviceExtX;
                            }
                            setDeviceExtX(a) {
                                this.ldeviceExtX = a;
                            }
                            getDeviceExtY() {
                                return this.ldeviceExtY;
                            }
                            setDeviceExtY(a) {
                                this.ldeviceExtY = a;
                            }
                            transformX(a) {
                                let r = 0;
                                const lworldExtX = this.lworldExtX;
                                if (lworldExtX != 0) {
                                    r = this.ldeviceOrgX + (a - this.lworldOrgX) * this.ldeviceExtX / lworldExtX;
                                }
                                return r;
                            }
                            transformY(a) {
                                let r = 0;
                                const lworldExtY = this.lworldExtY;
                                if (lworldExtY != 0) {
                                    r = this.ldeviceOrgY + (a - this.lworldOrgY) * this.ldeviceExtY / lworldExtY;
                                }
                                return r;
                            }
                            inverseTransformX(a) {
                                let r = 0;
                                const ldeviceExtX = this.ldeviceExtX;
                                if (ldeviceExtX != 0) {
                                    r = this.lworldOrgX + (a - this.ldeviceOrgX) * this.lworldExtX / ldeviceExtX;
                                }
                                return r;
                            }
                            inverseTransformY(a) {
                                let r = 0;
                                const ldeviceExtY = this.ldeviceExtY;
                                if (ldeviceExtY != 0) {
                                    r = this.lworldOrgY + (a - this.ldeviceOrgY) * this.lworldExtY / ldeviceExtY;
                                }
                                return r;
                            }
                            inverseTransformPoint(a) {
                                const r = new v(this.inverseTransformX(a.x), this.inverseTransformY(a.y));
                                return r;
                            }
                        }
                        C.exports = h;
                    },
                    function(C, R, N) {
                        function v(t) {
                            if (Array.isArray(t)) {
                                for(var s = 0, n = Array(t.length); s < t.length; s++){
                                    n[s] = t[s];
                                }
                                return n;
                            } else {
                                return Array.from(t);
                            }
                        }
                        const h = N(15);
                        const a = N(4);
                        const r = N(0);
                        const i = N(8);
                        const f = N(9);
                        class e extends h {
                            constructor(){
                                super();
                                this.useSmartIdealEdgeLengthCalculation = a.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION;
                                this.gravityConstant = a.DEFAULT_GRAVITY_STRENGTH;
                                this.compoundGravityConstant = a.DEFAULT_COMPOUND_GRAVITY_STRENGTH;
                                this.gravityRangeFactor = a.DEFAULT_GRAVITY_RANGE_FACTOR;
                                this.compoundGravityRangeFactor = a.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR;
                                this.displacementThresholdPerNode = 3 * a.DEFAULT_EDGE_LENGTH / 100;
                                this.coolingFactor = a.DEFAULT_COOLING_FACTOR_INCREMENTAL;
                                this.initialCoolingFactor = a.DEFAULT_COOLING_FACTOR_INCREMENTAL;
                                this.totalDisplacement = 0;
                                this.oldTotalDisplacement = 0;
                                this.maxIterations = a.MAX_ITERATIONS;
                            }
                            initParameters() {
                                h.prototype.initParameters.call(this, arguments);
                                this.totalIterations = 0;
                                this.notAnimatedIterations = 0;
                                this.useFRGridVariant = a.DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION;
                                this.grid = [];
                            }
                            calcIdealEdgeLengths() {
                                let t;
                                let s;
                                let n;
                                let c;
                                let l;
                                let T;
                                let u;
                                for(let d = this.getGraphManager().getAllEdges(), L = 0; L < d.length; L++){
                                    t = d[L];
                                    s = t.idealLength;
                                    if (t.isInterGraph) {
                                        c = t.getSource();
                                        l = t.getTarget();
                                        T = t.getSourceInLca().getEstimatedSize();
                                        u = t.getTargetInLca().getEstimatedSize();
                                        if (this.useSmartIdealEdgeLengthCalculation) {
                                            t.idealLength += T + u - 2 * r.SIMPLE_NODE_SIZE;
                                        }
                                        n = t.getLca().getInclusionTreeDepth();
                                        t.idealLength += s * a.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR * (c.getInclusionTreeDepth() + l.getInclusionTreeDepth() - 2 * n);
                                    }
                                }
                            }
                            initSpringEmbedder() {
                                const length = this.getAllNodes().length;
                                if (this.incremental) {
                                    if (length > a.ADAPTATION_LOWER_NODE_LIMIT) {
                                        this.coolingFactor = Math.max(this.coolingFactor * a.COOLING_ADAPTATION_FACTOR, this.coolingFactor - (length - a.ADAPTATION_LOWER_NODE_LIMIT) / (a.ADAPTATION_UPPER_NODE_LIMIT - a.ADAPTATION_LOWER_NODE_LIMIT) * this.coolingFactor * (1 - a.COOLING_ADAPTATION_FACTOR));
                                    }
                                    this.maxNodeDisplacement = a.MAX_NODE_DISPLACEMENT_INCREMENTAL;
                                } else {
                                    if (length > a.ADAPTATION_LOWER_NODE_LIMIT) {
                                        this.coolingFactor = Math.max(a.COOLING_ADAPTATION_FACTOR, 1 - (length - a.ADAPTATION_LOWER_NODE_LIMIT) / (a.ADAPTATION_UPPER_NODE_LIMIT - a.ADAPTATION_LOWER_NODE_LIMIT) * (1 - a.COOLING_ADAPTATION_FACTOR));
                                    } else {
                                        this.coolingFactor = 1;
                                    }
                                    this.initialCoolingFactor = this.coolingFactor;
                                    this.maxNodeDisplacement = a.MAX_NODE_DISPLACEMENT;
                                }
                                this.maxIterations = Math.max(this.getAllNodes().length * 5, this.maxIterations);
                                this.displacementThresholdPerNode = 3 * a.DEFAULT_EDGE_LENGTH / 100;
                                this.totalDisplacementThreshold = this.displacementThresholdPerNode * this.getAllNodes().length;
                                this.repulsionRange = this.calcRepulsionRange();
                            }
                            calcSpringForces() {
                                let s;
                                for(let t = this.getAllEdges(), n = 0; n < t.length; n++){
                                    s = t[n];
                                    this.calcSpringForce(s, s.idealLength);
                                }
                            }
                            calcRepulsionForces(t = true, s = false) {
                                let n;
                                let c;
                                let l;
                                let T;
                                const u = this.getAllNodes();
                                let d;
                                if (this.useFRGridVariant) {
                                    if (this.totalIterations % a.GRID_CALCULATION_CHECK_PERIOD == 1 && t) {
                                        this.updateGrid();
                                    }
                                    d = new Set;
                                    for(n = 0; n < u.length; n++){
                                        l = u[n];
                                        this.calculateRepulsionForceOfANode(l, d, t, s);
                                        d.add(l);
                                    }
                                } else {
                                    for(n = 0; n < u.length; n++){
                                        l = u[n];
                                        for(c = n + 1; c < u.length; c++){
                                            T = u[c];
                                            if (l.getOwner() == T.getOwner()) {
                                                this.calcRepulsionForce(l, T);
                                            }
                                        }
                                    }
                                }
                            }
                            calcGravitationalForces() {
                                let t;
                                for(let s = this.getAllNodesToApplyGravitation(), n = 0; n < s.length; n++){
                                    t = s[n];
                                    this.calcGravitationalForce(t);
                                }
                            }
                            moveNodes() {
                                let s;
                                for(let t = this.getAllNodes(), n = 0; n < t.length; n++){
                                    s = t[n];
                                    s.move();
                                }
                            }
                            calcSpringForce(t, s) {
                                const n = t.getSource();
                                const c = t.getTarget();
                                let l;
                                let T;
                                let u;
                                let d;
                                if (this.uniformLeafNodeSizes && n.getChild() == null && c.getChild() == null) {
                                    t.updateLengthSimple();
                                } else {
                                    t.updateLength();
                                    if (t.isOverlapingSourceAndTarget) {
                                        return;
                                    }
                                }
                                l = t.getLength();
                                if (l != 0) {
                                    T = t.edgeElasticity * (l - s);
                                    u = T * (t.lengthX / l);
                                    d = T * (t.lengthY / l);
                                    n.springForceX += u;
                                    n.springForceY += d;
                                    c.springForceX -= u;
                                    c.springForceY -= d;
                                }
                            }
                            calcRepulsionForce(t, s) {
                                const n = t.getRect();
                                const c = s.getRect();
                                const l = new Array(2);
                                const T = new Array(4);
                                let u;
                                let d;
                                let L;
                                let b;
                                let w;
                                let G;
                                let B;
                                if (n.intersects(c)) {
                                    i.calcSeparationAmount(n, c, l, a.DEFAULT_EDGE_LENGTH / 2);
                                    G = 2 * l[0];
                                    B = 2 * l[1];
                                    const U = t.noOfChildren * s.noOfChildren / (t.noOfChildren + s.noOfChildren);
                                    t.repulsionForceX -= U * G;
                                    t.repulsionForceY -= U * B;
                                    s.repulsionForceX += U * G;
                                    s.repulsionForceY += U * B;
                                } else {
                                    if (this.uniformLeafNodeSizes && t.getChild() == null && s.getChild() == null) {
                                        u = c.getCenterX() - n.getCenterX();
                                        d = c.getCenterY() - n.getCenterY();
                                    } else {
                                        i.getIntersection(n, c, T);
                                        u = T[2] - T[0];
                                        d = T[3] - T[1];
                                    }
                                    if (Math.abs(u) < a.MIN_REPULSION_DIST) {
                                        u = f.sign(u) * a.MIN_REPULSION_DIST;
                                    }
                                    if (Math.abs(d) < a.MIN_REPULSION_DIST) {
                                        d = f.sign(d) * a.MIN_REPULSION_DIST;
                                    }
                                    L = u * u + d * d;
                                    b = Math.sqrt(L);
                                    w = (t.nodeRepulsion / 2 + s.nodeRepulsion / 2) * t.noOfChildren * s.noOfChildren / L;
                                    G = w * u / b;
                                    B = w * d / b;
                                    t.repulsionForceX -= G;
                                    t.repulsionForceY -= B;
                                    s.repulsionForceX += G;
                                    s.repulsionForceY += B;
                                }
                            }
                            calcGravitationalForce(t) {
                                let s;
                                let n;
                                let c;
                                let l;
                                let T;
                                let u;
                                let d;
                                let L;
                                s = t.getOwner();
                                n = (s.getRight() + s.getLeft()) / 2;
                                c = (s.getTop() + s.getBottom()) / 2;
                                l = t.getCenterX() - n;
                                T = t.getCenterY() - c;
                                u = Math.abs(l) + t.getWidth() / 2;
                                d = Math.abs(T) + t.getHeight() / 2;
                                if (t.getOwner() == this.graphManager.getRoot()) {
                                    L = s.getEstimatedSize() * this.gravityRangeFactor;
                                    if (u > L || d > L) {
                                        t.gravitationForceX = -this.gravityConstant * l;
                                        t.gravitationForceY = -this.gravityConstant * T;
                                    }
                                } else {
                                    L = s.getEstimatedSize() * this.compoundGravityRangeFactor;
                                    if (u > L || d > L) {
                                        t.gravitationForceX = -this.gravityConstant * l * this.compoundGravityConstant;
                                        t.gravitationForceY = -this.gravityConstant * T * this.compoundGravityConstant;
                                    }
                                }
                            }
                            isConverged() {
                                let t;
                                let s = false;
                                if (this.totalIterations > this.maxIterations / 3) {
                                    s = Math.abs(this.totalDisplacement - this.oldTotalDisplacement) < 2;
                                }
                                t = this.totalDisplacement < this.totalDisplacementThreshold;
                                this.oldTotalDisplacement = this.totalDisplacement;
                                return t || s;
                            }
                            animate() {
                                this.animationDuringLayout && !this.isSubLayout && (this.notAnimatedIterations == this.animationPeriod ? (this.update(), this.notAnimatedIterations = 0) : this.notAnimatedIterations++);
                            }
                            calcNoOfChildrenForAllNodes() {
                                let t;
                                for(let s = this.graphManager.getAllNodes(), n = 0; n < s.length; n++){
                                    t = s[n];
                                    t.noOfChildren = t.getNoOfChildren();
                                }
                            }
                            calcGrid(t) {
                                let s = 0;
                                let n = 0;
                                s = parseInt(Math.ceil((t.getRight() - t.getLeft()) / this.repulsionRange));
                                n = parseInt(Math.ceil((t.getBottom() - t.getTop()) / this.repulsionRange));
                                const c = new Array(s);
                                for(var l = 0; l < s; l++){
                                    c[l] = new Array(n);
                                }
                                for(var l = 0; l < s; l++){
                                    for(let T = 0; T < n; T++){
                                        c[l][T] = new Array;
                                    }
                                }
                                return c;
                            }
                            addNodeToGrid(t, s, n) {
                                let c = 0;
                                let l = 0;
                                let T = 0;
                                let u = 0;
                                c = parseInt(Math.floor((t.getRect().x - s) / this.repulsionRange));
                                l = parseInt(Math.floor((t.getRect().width + t.getRect().x - s) / this.repulsionRange));
                                T = parseInt(Math.floor((t.getRect().y - n) / this.repulsionRange));
                                u = parseInt(Math.floor((t.getRect().height + t.getRect().y - n) / this.repulsionRange));
                                for(let d = c; d <= l; d++){
                                    for(let L = T; L <= u; L++){
                                        this.grid[d][L].push(t);
                                        t.setGridCoordinates(c, l, T, u);
                                    }
                                }
                            }
                            updateGrid() {
                                let t;
                                let s;
                                const n = this.getAllNodes();
                                this.grid = this.calcGrid(this.graphManager.getRoot());
                                for(t = 0; t < n.length; t++){
                                    s = n[t];
                                    this.addNodeToGrid(s, this.graphManager.getRoot().getLeft(), this.graphManager.getRoot().getTop());
                                }
                            }
                            calculateRepulsionForceOfANode(t, s, n, c) {
                                if (this.totalIterations % a.GRID_CALCULATION_CHECK_PERIOD == 1 && n || c) {
                                    const l = new Set;
                                    t.surrounding = new Array;
                                    let T;
                                    const u = this.grid;
                                    for(var d = t.startX - 1; d < t.finishX + 2; d++){
                                        for(let L = t.startY - 1; L < t.finishY + 2; L++){
                                            if (!(d < 0 || L < 0 || d >= u.length || L >= u[0].length)) {
                                                for(let b = 0; b < u[d][L].length; b++){
                                                    T = u[d][L][b];
                                                    if (!(t.getOwner() != T.getOwner() || t == T) && !s.has(T) && !l.has(T)) {
                                                        const w = Math.abs(t.getCenterX() - T.getCenterX()) - (t.getWidth() / 2 + T.getWidth() / 2);
                                                        const G = Math.abs(t.getCenterY() - T.getCenterY()) - (t.getHeight() / 2 + T.getHeight() / 2);
                                                        if (w <= this.repulsionRange && G <= this.repulsionRange) {
                                                            l.add(T);
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    t.surrounding = [].concat(v(l));
                                }
                                for(d = 0; d < t.surrounding.length; d++){
                                    this.calcRepulsionForce(t, t.surrounding[d]);
                                }
                            }
                            calcRepulsionRange() {
                                return 0;
                            }
                        }
                        for(const g in h){
                            e[g] = h[g];
                        }
                        C.exports = e;
                    },
                    (C, R, N)=>{
                        const v = N(1);
                        const h = N(4);
                        function a(i, f, e) {
                            v.call(this, i, f, e);
                            this.idealLength = h.DEFAULT_EDGE_LENGTH;
                            this.edgeElasticity = h.DEFAULT_SPRING_STRENGTH;
                        }
                        a.prototype = Object.create(v.prototype);
                        for(const r in v){
                            a[r] = v[r];
                        }
                        C.exports = a;
                    },
                    function(C, R, N) {
                        const v = N(3);
                        const h = N(4);
                        class a extends v {
                            constructor(i, f, e, g){
                                super(i, f, e, g);
                                this.nodeRepulsion = h.DEFAULT_REPULSION_STRENGTH;
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
                            setGridCoordinates(i, f, e, g) {
                                this.startX = i;
                                this.finishX = f;
                                this.startY = e;
                                this.finishY = g;
                            }
                        }
                        for(const r in v){
                            a[r] = v[r];
                        }
                        C.exports = a;
                    },
                    function(C, R, N) {
                        class v {
                            constructor(h, a){
                                this.width = 0;
                                this.height = 0;
                                if (h !== null && a !== null) {
                                    this.height = a;
                                    this.width = h;
                                }
                            }
                            getWidth() {
                                return this.width;
                            }
                            setWidth(h) {
                                this.width = h;
                            }
                            getHeight() {
                                return this.height;
                            }
                            setHeight(h) {
                                this.height = h;
                            }
                        }
                        C.exports = v;
                    },
                    function(C, R, N) {
                        const v = N(14);
                        class h {
                            constructor(){
                                this.map = {};
                                this.keys = [];
                            }
                            put(a, r) {
                                const i = v.createID(a);
                                if (!this.contains(i)) {
                                    this.map[i] = r;
                                    this.keys.push(a);
                                }
                            }
                            contains(a) {
                                v.createID(a);
                                return this.map[a] != null;
                            }
                            get(a) {
                                const r = v.createID(a);
                                return this.map[r];
                            }
                            keySet() {
                                return this.keys;
                            }
                        }
                        C.exports = h;
                    },
                    function(C, R, N) {
                        const v = N(14);
                        class h {
                            constructor(){
                                this.set = {};
                            }
                            add(a) {
                                const r = v.createID(a);
                                if (!this.contains(r)) {
                                    this.set[r] = a;
                                }
                            }
                            remove(a) {
                                delete this.set[v.createID(a)];
                            }
                            clear() {
                                this.set = {};
                            }
                            contains(a) {
                                return this.set[v.createID(a)] == a;
                            }
                            isEmpty() {
                                return this.size() === 0;
                            }
                            size() {
                                return Object.keys(this.set).length;
                            }
                            addAllTo(a) {
                                const r = Object.keys(this.set);
                                for(let i = r.length, f = 0; f < i; f++){
                                    a.push(this.set[r[f]]);
                                }
                            }
                            size() {
                                return Object.keys(this.set).length;
                            }
                            addAll(a) {
                                for(let r = a.length, i = 0; i < r; i++){
                                    const f = a[i];
                                    this.add(f);
                                }
                            }
                        }
                        C.exports = h;
                    },
                    (C, R, N)=>{
                        function v() {}
                        v.multMat = (h, a)=>{
                            const r = [];
                            for(let i = 0; i < h.length; i++){
                                r[i] = [];
                                for(let f = 0; f < a[0].length; f++){
                                    r[i][f] = 0;
                                    for(let e = 0; e < h[0].length; e++){
                                        r[i][f] += h[i][e] * a[e][f];
                                    }
                                }
                            }
                            return r;
                        };
                        v.transpose = (h)=>{
                            const a = [];
                            for(let r = 0; r < h[0].length; r++){
                                a[r] = [];
                                for(let i = 0; i < h.length; i++){
                                    a[r][i] = h[i][r];
                                }
                            }
                            return a;
                        };
                        v.multCons = (h, a)=>{
                            const r = [];
                            for(let i = 0; i < h.length; i++){
                                r[i] = h[i] * a;
                            }
                            return r;
                        };
                        v.minusOp = (h, a)=>{
                            const r = [];
                            for(let i = 0; i < h.length; i++){
                                r[i] = h[i] - a[i];
                            }
                            return r;
                        };
                        v.dotProduct = (h, a)=>{
                            let r = 0;
                            for(let i = 0; i < h.length; i++){
                                r += h[i] * a[i];
                            }
                            return r;
                        };
                        v.mag = function(h) {
                            return Math.sqrt(this.dotProduct(h, h));
                        };
                        v.normalize = function(h) {
                            const a = [];
                            const r = this.mag(h);
                            for(let i = 0; i < h.length; i++){
                                a[i] = h[i] / r;
                            }
                            return a;
                        };
                        v.multGamma = (h)=>{
                            const a = [];
                            let r = 0;
                            for(let i = 0; i < h.length; i++){
                                r += h[i];
                            }
                            r *= -1 / h.length;
                            for(let f = 0; f < h.length; f++){
                                a[f] = r + h[f];
                            }
                            return a;
                        };
                        v.multL = (h, a, r)=>{
                            const i = [];
                            const f = [];
                            const e = [];
                            for(let g = 0; g < a[0].length; g++){
                                let t = 0;
                                for(let s = 0; s < a.length; s++){
                                    t += -0.5 * a[s][g] * h[s];
                                }
                                f[g] = t;
                            }
                            for(let n = 0; n < r.length; n++){
                                let c = 0;
                                for(let l = 0; l < r.length; l++){
                                    c += r[n][l] * f[l];
                                }
                                e[n] = c;
                            }
                            for(let T = 0; T < a.length; T++){
                                let u = 0;
                                for(let d = 0; d < a[0].length; d++){
                                    u += a[T][d] * e[d];
                                }
                                i[T] = u;
                            }
                            return i;
                        };
                        C.exports = v;
                    },
                    (C, R, N)=>{
                        const v = (()=>{
                            function i(f, e) {
                                for (const t of e){
                                    t.enumerable = t.enumerable || false;
                                    t.configurable = true;
                                    if ("value" in t) {
                                        t.writable = true;
                                    }
                                    Object.defineProperty(f, t.key, t);
                                }
                            }
                            return (f, e, g)=>{
                                if (e) {
                                    i(f.prototype, e);
                                }
                                if (g) {
                                    i(f, g);
                                }
                                return f;
                            };
                        })();
                        function h(i, f) {
                            if (!(i instanceof f)) {
                                throw new TypeError("Cannot call a class as a function");
                            }
                        }
                        const a = N(11);
                        const r = (()=>{
                            function i(f, e) {
                                h(this, i);
                                if (e !== null || e !== undefined) {
                                    this.compareFunction = this._defaultCompareFunction;
                                }
                                let g;
                                if (f instanceof a) {
                                    g = f.size();
                                } else {
                                    g = f.length;
                                }
                                this._quicksort(f, 0, g - 1);
                            }
                            v(i, [
                                {
                                    key: "_quicksort",
                                    value (e, g, t) {
                                        if (g < t) {
                                            const s = this._partition(e, g, t);
                                            this._quicksort(e, g, s);
                                            this._quicksort(e, s + 1, t);
                                        }
                                    }
                                },
                                {
                                    key: "_partition",
                                    value (e, g, t) {
                                        const s = this._get(e, g);
                                        let n = g;
                                        let c = t;
                                        while(true){
                                            while(this.compareFunction(s, this._get(e, c))){
                                                c--;
                                            }
                                            while(this.compareFunction(this._get(e, n), s)){
                                                n++;
                                            }
                                            if (n < c) {
                                                this._swap(e, n, c);
                                                n++;
                                                c--;
                                            } else {
                                                return c;
                                            }
                                        }
                                    }
                                },
                                {
                                    key: "_get",
                                    value (e, g) {
                                        if (e instanceof a) {
                                            return e.get_object_at(g);
                                        }
                                        return e[g];
                                    }
                                },
                                {
                                    key: "_set",
                                    value (e, g, t) {
                                        if (e instanceof a) {
                                            e.set_object_at(g, t);
                                        } else {
                                            e[g] = t;
                                        }
                                    }
                                },
                                {
                                    key: "_swap",
                                    value (e, g, t) {
                                        const s = this._get(e, g);
                                        this._set(e, g, this._get(e, t));
                                        this._set(e, t, s);
                                    }
                                },
                                {
                                    key: "_defaultCompareFunction",
                                    value (e, g) {
                                        return g > e;
                                    }
                                }
                            ]);
                            return i;
                        })();
                        C.exports = r;
                    },
                    (C, R, N)=>{
                        function v() {}
                        v.svd = function(h) {
                            this.U = null;
                            this.V = null;
                            this.s = null;
                            this.m = 0;
                            this.n = 0;
                            this.m = h.length;
                            this.n = h[0].length;
                            const a = Math.min(this.m, this.n);
                            this.s = ((Tt)=>{
                                const Ct = [];
                                while(Tt-- > 0){
                                    Ct.push(0);
                                }
                                return Ct;
                            })(Math.min(this.m + 1, this.n));
                            this.U = ((Tt)=>{
                                const Ct = function Bt(bt) {
                                    if (bt.length == 0) {
                                        return 0;
                                    }
                                    const zt = [];
                                    for(let St = 0; St < bt[0]; St++){
                                        zt.push(Bt(bt.slice(1)));
                                    }
                                    return zt;
                                };
                                return Ct(Tt);
                            })([
                                this.m,
                                a
                            ]);
                            this.V = ((Tt)=>{
                                const Ct = function Bt(bt) {
                                    if (bt.length == 0) {
                                        return 0;
                                    }
                                    const zt = [];
                                    for(let St = 0; St < bt[0]; St++){
                                        zt.push(Bt(bt.slice(1)));
                                    }
                                    return zt;
                                };
                                return Ct(Tt);
                            })([
                                this.n,
                                this.n
                            ]);
                            const r = ((Tt)=>{
                                const Ct = [];
                                while(Tt-- > 0){
                                    Ct.push(0);
                                }
                                return Ct;
                            })(this.n);
                            const i = ((Tt)=>{
                                const Ct = [];
                                while(Tt-- > 0){
                                    Ct.push(0);
                                }
                                return Ct;
                            })(this.m);
                            const f = true;
                            for(var e = Math.min(this.m - 1, this.n), g = Math.max(0, Math.min(this.n - 2, this.m)), t = 0; t < Math.max(e, g); t++){
                                if (t < e) {
                                    this.s[t] = 0;
                                    for(let s = t; s < this.m; s++){
                                        this.s[t] = v.hypot(this.s[t], h[s][t]);
                                    }
                                    if (this.s[t] !== 0) {
                                        if (h[t][t] < 0) {
                                            this.s[t] = -this.s[t];
                                        }
                                        for(let n = t; n < this.m; n++){
                                            h[n][t] /= this.s[t];
                                        }
                                        h[t][t] += 1;
                                    }
                                    this.s[t] = -this.s[t];
                                }
                                for(let c = t + 1; c < this.n; c++){
                                    if (((Tt, Ct)=>Tt && Ct)(t < e, this.s[t] !== 0)) {
                                        let l = 0;
                                        for(let T = t; T < this.m; T++){
                                            l += h[T][t] * h[T][c];
                                        }
                                        l = -l / h[t][t];
                                        for(let u = t; u < this.m; u++){
                                            h[u][c] += l * h[u][t];
                                        }
                                    }
                                    r[c] = h[t][c];
                                }
                                if (((Tt, Ct)=>Ct)(f, t < e)) {
                                    for(let d = t; d < this.m; d++){
                                        this.U[d][t] = h[d][t];
                                    }
                                }
                                if (t < g) {
                                    r[t] = 0;
                                    for(let L = t + 1; L < this.n; L++){
                                        r[t] = v.hypot(r[t], r[L]);
                                    }
                                    if (r[t] !== 0) {
                                        if (r[t + 1] < 0) {
                                            r[t] = -r[t];
                                        }
                                        for(let b = t + 1; b < this.n; b++){
                                            r[b] /= r[t];
                                        }
                                        r[t + 1] += 1;
                                    }
                                    r[t] = -r[t];
                                    if (((Tt, Ct)=>Tt && Ct)(t + 1 < this.m, r[t] !== 0)) {
                                        for(let w = t + 1; w < this.m; w++){
                                            i[w] = 0;
                                        }
                                        for(let G = t + 1; G < this.n; G++){
                                            for(let B = t + 1; B < this.m; B++){
                                                i[B] += r[G] * h[B][G];
                                            }
                                        }
                                        for(let U = t + 1; U < this.n; U++){
                                            const V = -r[U] / r[t + 1];
                                            for(let M = t + 1; M < this.m; M++){
                                                h[M][U] += V * i[M];
                                            }
                                        }
                                    }
                                    for(let _ = t + 1; _ < this.n; _++){
                                        this.V[_][t] = r[_];
                                    }
                                }
                            }
                            let o = Math.min(this.n, this.m + 1);
                            if (e < this.n) {
                                this.s[e] = h[e][e];
                            }
                            if (this.m < o) {
                                this.s[o - 1] = 0;
                            }
                            if (g + 1 < o) {
                                r[g] = h[g][o - 1];
                            }
                            r[o - 1] = 0;
                            {
                                for(let E = e; E < a; E++){
                                    for(let p = 0; p < this.m; p++){
                                        this.U[p][E] = 0;
                                    }
                                    this.U[E][E] = 1;
                                }
                                for(let m = e - 1; m >= 0; m--){
                                    if (this.s[m] !== 0) {
                                        for(let y = m + 1; y < a; y++){
                                            let S = 0;
                                            for(let O = m; O < this.m; O++){
                                                S += this.U[O][m] * this.U[O][y];
                                            }
                                            S = -S / this.U[m][m];
                                            for(let F = m; F < this.m; F++){
                                                this.U[F][y] += S * this.U[F][m];
                                            }
                                        }
                                        for(let W = m; W < this.m; W++){
                                            this.U[W][m] = -this.U[W][m];
                                        }
                                        this.U[m][m] = 1 + this.U[m][m];
                                        for(let I = 0; I < m - 1; I++){
                                            this.U[I][m] = 0;
                                        }
                                    } else {
                                        for(let Q = 0; Q < this.m; Q++){
                                            this.U[Q][m] = 0;
                                        }
                                        this.U[m][m] = 1;
                                    }
                                }
                            }
                            for(let z = this.n - 1; z >= 0; z--){
                                if (((Tt, Ct)=>Tt && Ct)(z < g, r[z] !== 0)) {
                                    for(let X = z + 1; X < a; X++){
                                        let rt = 0;
                                        for(let $ = z + 1; $ < this.n; $++){
                                            rt += this.V[$][z] * this.V[$][X];
                                        }
                                        rt = -rt / this.V[z + 1][z];
                                        for(let D = z + 1; D < this.n; D++){
                                            this.V[D][X] += rt * this.V[D][z];
                                        }
                                    }
                                }
                                for(let H = 0; H < this.n; H++){
                                    this.V[H][z] = 0;
                                }
                                this.V[z][z] = 1;
                            }
                            const k = o - 1;
                            const tt = 2 ** -52;
                            const ht = 2 ** -966;
                            while(o > 0){
                                let J;
                                let It;
                                for(J = o - 2; J >= -1 && J !== -1; J--){
                                    if (Math.abs(r[J]) <= ht + tt * (Math.abs(this.s[J]) + Math.abs(this.s[J + 1]))) {
                                        r[J] = 0;
                                        break;
                                    }
                                }
                                if (J === o - 2) {
                                    It = 4;
                                } else {
                                    let Nt;
                                    for(Nt = o - 1; Nt >= J && Nt !== J; Nt--){
                                        const vt = (Nt !== o ? Math.abs(r[Nt]) : 0) + (Nt !== J + 1 ? Math.abs(r[Nt - 1]) : 0);
                                        if (Math.abs(this.s[Nt]) <= ht + tt * vt) {
                                            this.s[Nt] = 0;
                                            break;
                                        }
                                    }
                                    if (Nt === J) {
                                        It = 3;
                                    } else if (Nt === o - 1) {
                                        It = 1;
                                    } else {
                                        It = 2;
                                        J = Nt;
                                    }
                                }
                                J++;
                                switch(It){
                                    case 1:
                                        {
                                            let it = r[o - 2];
                                            r[o - 2] = 0;
                                            for(let ut = o - 2; ut >= J; ut--){
                                                let Et = v.hypot(this.s[ut], it);
                                                const wt = this.s[ut] / Et;
                                                const Ot = it / Et;
                                                this.s[ut] = Et;
                                                if (ut !== J) {
                                                    it = -Ot * r[ut - 1];
                                                    r[ut - 1] = wt * r[ut - 1];
                                                }
                                                for(let mt = 0; mt < this.n; mt++){
                                                    Et = wt * this.V[mt][ut] + Ot * this.V[mt][o - 1];
                                                    this.V[mt][o - 1] = -Ot * this.V[mt][ut] + wt * this.V[mt][o - 1];
                                                    this.V[mt][ut] = Et;
                                                }
                                            }
                                        }
                                        break;
                                    case 2:
                                        {
                                            let Dt = r[J - 1];
                                            r[J - 1] = 0;
                                            for(let Rt = J; Rt < o; Rt++){
                                                let Ht = v.hypot(this.s[Rt], Dt);
                                                const Ut = this.s[Rt] / Ht;
                                                const Pt = Dt / Ht;
                                                this.s[Rt] = Ht;
                                                Dt = -Pt * r[Rt];
                                                r[Rt] = Ut * r[Rt];
                                                for(let Ft = 0; Ft < this.m; Ft++){
                                                    Ht = Ut * this.U[Ft][Rt] + Pt * this.U[Ft][J - 1];
                                                    this.U[Ft][J - 1] = -Pt * this.U[Ft][Rt] + Ut * this.U[Ft][J - 1];
                                                    this.U[Ft][Rt] = Ht;
                                                }
                                            }
                                        }
                                        break;
                                    case 3:
                                        {
                                            const Yt = Math.max(Math.max(Math.max(Math.max(Math.abs(this.s[o - 1]), Math.abs(this.s[o - 2])), Math.abs(r[o - 2])), Math.abs(this.s[J])), Math.abs(r[J]));
                                            const Vt = this.s[o - 1] / Yt;
                                            const P = this.s[o - 2] / Yt;
                                            const Y = r[o - 2] / Yt;
                                            const Z = this.s[J] / Yt;
                                            const K = r[J] / Yt;
                                            const q = ((P + Vt) * (P - Vt) + Y * Y) / 2;
                                            const at = Vt * Y * (Vt * Y);
                                            let ct = 0;
                                            if (((Tt, Ct)=>Tt || Ct)(q !== 0, at !== 0)) {
                                                ct = Math.sqrt(q * q + at);
                                                if (q < 0) {
                                                    ct = -ct;
                                                }
                                                ct = at / (q + ct);
                                            }
                                            let nt = (Z + Vt) * (Z - Vt) + ct;
                                            let et = Z * K;
                                            for(let j = J; j < o - 1; j++){
                                                let dt = v.hypot(nt, et);
                                                let At = nt / dt;
                                                let pt = et / dt;
                                                if (j !== J) {
                                                    r[j - 1] = dt;
                                                }
                                                nt = At * this.s[j] + pt * r[j];
                                                r[j] = At * r[j] - pt * this.s[j];
                                                et = pt * this.s[j + 1];
                                                this.s[j + 1] = At * this.s[j + 1];
                                                for(let xt = 0; xt < this.n; xt++){
                                                    dt = At * this.V[xt][j] + pt * this.V[xt][j + 1];
                                                    this.V[xt][j + 1] = -pt * this.V[xt][j] + At * this.V[xt][j + 1];
                                                    this.V[xt][j] = dt;
                                                }
                                                dt = v.hypot(nt, et);
                                                At = nt / dt;
                                                pt = et / dt;
                                                this.s[j] = dt;
                                                nt = At * r[j] + pt * this.s[j + 1];
                                                this.s[j + 1] = -pt * r[j] + At * this.s[j + 1];
                                                et = pt * r[j + 1];
                                                r[j + 1] = At * r[j + 1];
                                                if (j < this.m - 1) {
                                                    for(let lt = 0; lt < this.m; lt++){
                                                        dt = At * this.U[lt][j] + pt * this.U[lt][j + 1];
                                                        this.U[lt][j + 1] = -pt * this.U[lt][j] + At * this.U[lt][j + 1];
                                                        this.U[lt][j] = dt;
                                                    }
                                                }
                                            }
                                            r[o - 2] = nt;
                                        }
                                        break;
                                    case 4:
                                        {
                                            if (this.s[J] <= 0) {
                                                this.s[J] = this.s[J] < 0 ? -this.s[J] : 0;
                                                for(let ot = 0; ot <= k; ot++){
                                                    this.V[ot][J] = -this.V[ot][J];
                                                }
                                            }
                                            while(J < k && !(this.s[J] >= this.s[J + 1])){
                                                let Lt = this.s[J];
                                                this.s[J] = this.s[J + 1];
                                                this.s[J + 1] = Lt;
                                                if (J < this.n - 1) {
                                                    for(let ft = 0; ft < this.n; ft++){
                                                        Lt = this.V[ft][J + 1];
                                                        this.V[ft][J + 1] = this.V[ft][J];
                                                        this.V[ft][J] = Lt;
                                                    }
                                                }
                                                if (J < this.m - 1) {
                                                    for(let st = 0; st < this.m; st++){
                                                        Lt = this.U[st][J + 1];
                                                        this.U[st][J + 1] = this.U[st][J];
                                                        this.U[st][J] = Lt;
                                                    }
                                                }
                                                J++;
                                            }
                                            o--;
                                        }
                                        break;
                                }
                            }
                            const Xt = {
                                U: this.U,
                                V: this.V,
                                S: this.s
                            };
                            return Xt;
                        };
                        v.hypot = (h, a)=>{
                            let r;
                            if (Math.abs(h) > Math.abs(a)) {
                                r = a / h;
                                r = Math.abs(h) * Math.sqrt(1 + r * r);
                            } else if (a != 0) {
                                r = h / a;
                                r = Math.abs(a) * Math.sqrt(1 + r * r);
                            } else {
                                r = 0;
                            }
                            return r;
                        };
                        C.exports = v;
                    },
                    (C, R, N)=>{
                        const v = (()=>{
                            function r(i, f) {
                                for (const g of f){
                                    g.enumerable = g.enumerable || false;
                                    g.configurable = true;
                                    if ("value" in g) {
                                        g.writable = true;
                                    }
                                    Object.defineProperty(i, g.key, g);
                                }
                            }
                            return (i, f, e)=>{
                                if (f) {
                                    r(i.prototype, f);
                                }
                                if (e) {
                                    r(i, e);
                                }
                                return i;
                            };
                        })();
                        function h(r, i) {
                            if (!(r instanceof i)) {
                                throw new TypeError("Cannot call a class as a function");
                            }
                        }
                        const a = (()=>{
                            function r(i, f, e = 1, g = -1, t = -1) {
                                h(this, r);
                                this.sequence1 = i;
                                this.sequence2 = f;
                                this.match_score = e;
                                this.mismatch_penalty = g;
                                this.gap_penalty = t;
                                this.iMax = i.length + 1;
                                this.jMax = f.length + 1;
                                this.grid = new Array(this.iMax);
                                for(let s = 0; s < this.iMax; s++){
                                    this.grid[s] = new Array(this.jMax);
                                    for(let n = 0; n < this.jMax; n++){
                                        this.grid[s][n] = 0;
                                    }
                                }
                                this.tracebackGrid = new Array(this.iMax);
                                for(let c = 0; c < this.iMax; c++){
                                    this.tracebackGrid[c] = new Array(this.jMax);
                                    for(let l = 0; l < this.jMax; l++){
                                        this.tracebackGrid[c][l] = [
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
                            v(r, [
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
                                        for(let f = 1; f < this.jMax; f++){
                                            this.grid[0][f] = this.grid[0][f - 1] + this.gap_penalty;
                                            this.tracebackGrid[0][f] = [
                                                false,
                                                false,
                                                true
                                            ];
                                        }
                                        for(let e = 1; e < this.iMax; e++){
                                            this.grid[e][0] = this.grid[e - 1][0] + this.gap_penalty;
                                            this.tracebackGrid[e][0] = [
                                                false,
                                                true,
                                                false
                                            ];
                                        }
                                        for(let g = 1; g < this.iMax; g++){
                                            for(let t = 1; t < this.jMax; t++){
                                                let s;
                                                if (this.sequence1[g - 1] === this.sequence2[t - 1]) {
                                                    s = this.grid[g - 1][t - 1] + this.match_score;
                                                } else {
                                                    s = this.grid[g - 1][t - 1] + this.mismatch_penalty;
                                                }
                                                const n = this.grid[g - 1][t] + this.gap_penalty;
                                                const c = this.grid[g][t - 1] + this.gap_penalty;
                                                const l = [
                                                    s,
                                                    n,
                                                    c
                                                ];
                                                const T = this.arrayAllMaxIndexes(l);
                                                this.grid[g][t] = l[T[0]];
                                                this.tracebackGrid[g][t] = [
                                                    T.includes(0),
                                                    T.includes(1),
                                                    T.includes(2)
                                                ];
                                            }
                                        }
                                        this.score = this.grid[this.iMax - 1][this.jMax - 1];
                                    }
                                },
                                {
                                    key: "alignmentTraceback",
                                    value () {
                                        const f = [];
                                        for(f.push({
                                            pos: [
                                                this.sequence1.length,
                                                this.sequence2.length
                                            ],
                                            seq1: "",
                                            seq2: ""
                                        }); f[0];){
                                            const e = f[0];
                                            const g = this.tracebackGrid[e.pos[0]][e.pos[1]];
                                            if (g[0]) {
                                                f.push({
                                                    pos: [
                                                        e.pos[0] - 1,
                                                        e.pos[1] - 1
                                                    ],
                                                    seq1: this.sequence1[e.pos[0] - 1] + e.seq1,
                                                    seq2: this.sequence2[e.pos[1] - 1] + e.seq2
                                                });
                                            }
                                            if (g[1]) {
                                                f.push({
                                                    pos: [
                                                        e.pos[0] - 1,
                                                        e.pos[1]
                                                    ],
                                                    seq1: this.sequence1[e.pos[0] - 1] + e.seq1,
                                                    seq2: `-${e.seq2}`
                                                });
                                            }
                                            if (g[2]) {
                                                f.push({
                                                    pos: [
                                                        e.pos[0],
                                                        e.pos[1] - 1
                                                    ],
                                                    seq1: `-${e.seq1}`,
                                                    seq2: this.sequence2[e.pos[1] - 1] + e.seq2
                                                });
                                            }
                                            if (e.pos[0] === 0 && e.pos[1] === 0) {
                                                this.alignments.push({
                                                    sequence1: e.seq1,
                                                    sequence2: e.seq2
                                                });
                                            }
                                            f.shift();
                                        }
                                        return this.alignments;
                                    }
                                },
                                {
                                    key: "getAllIndexes",
                                    value (f, e) {
                                        const g = [];
                                        for(let t = -1; (t = f.indexOf(e, t + 1)) !== -1;){
                                            g.push(t);
                                        }
                                        return g;
                                    }
                                },
                                {
                                    key: "arrayAllMaxIndexes",
                                    value (f) {
                                        return this.getAllIndexes(f, Math.max.apply(null, f));
                                    }
                                }
                            ]);
                            return r;
                        })();
                        C.exports = a;
                    },
                    (C, R, N)=>{
                        const v = ()=>{};
                        v.FDLayout = N(18);
                        v.FDLayoutConstants = N(4);
                        v.FDLayoutEdge = N(19);
                        v.FDLayoutNode = N(20);
                        v.DimensionD = N(21);
                        v.HashMap = N(22);
                        v.HashSet = N(23);
                        v.IGeometry = N(8);
                        v.IMath = N(9);
                        v.Integer = N(10);
                        v.Point = N(12);
                        v.PointD = N(5);
                        v.RandomSeed = N(16);
                        v.RectangleD = N(13);
                        v.Transform = N(17);
                        v.UniqueIDGeneretor = N(14);
                        v.Quicksort = N(25);
                        v.LinkedList = N(11);
                        v.LGraphObject = N(2);
                        v.LGraph = N(6);
                        v.LEdge = N(1);
                        v.LGraphManager = N(7);
                        v.LNode = N(3);
                        v.Layout = N(15);
                        v.LayoutConstants = N(0);
                        v.NeedlemanWunsch = N(27);
                        v.Matrix = N(24);
                        v.SVD = N(26);
                        C.exports = v;
                    },
                    (C, R, N)=>{
                        function v() {
                            this.listeners = [];
                        }
                        const v_prototype = v.prototype;
                        v_prototype.addListener = function(event, callback) {
                            this.listeners.push({
                                event,
                                callback
                            });
                        };
                        v_prototype.removeListener = function(a, r) {
                            for(let i = this.listeners.length; i >= 0; i--){
                                const f = this.listeners[i];
                                if (f.event === a && f.callback === r) {
                                    this.listeners.splice(i, 1);
                                }
                            }
                        };
                        v_prototype.emit = function(a, r) {
                            for(let i = 0; i < this.listeners.length; i++){
                                const listener = this.listeners[i];
                                if (a === listener.event) {
                                    listener.callback(r);
                                }
                            }
                        };
                        C.exports = v;
                    }
                ]));
        })(fe);
    }
    return fe.exports;
}
const le_exports = le.exports;
let De;
function pr() {
    if (!De) {
        De = 1;
        ((x, A)=>{
            ((le_exports_1, N)=>{
                x.exports = N(dr());
            })(le_exports, function(C) {
                return (()=>{
                    var R = {
                        45: (a, r, i)=>{
                            var f = {};
                            f.layoutBase = i(551);
                            f.CoSEConstants = i(806);
                            f.CoSEEdge = i(767);
                            f.CoSEGraph = i(880);
                            f.CoSEGraphManager = i(578);
                            f.CoSELayout = i(765);
                            f.CoSENode = i(991);
                            f.ConstraintHandler = i(902);
                            a.exports = f;
                        },
                        806: (a, r, i)=>{
                            var FDLayoutConstants = i(551).FDLayoutConstants;
                            function e() {}
                            for(var g in FDLayoutConstants){
                                e[g] = FDLayoutConstants[g];
                            }
                            e.DEFAULT_USE_MULTI_LEVEL_SCALING = false;
                            e.DEFAULT_RADIAL_SEPARATION = FDLayoutConstants.DEFAULT_EDGE_LENGTH;
                            e.DEFAULT_COMPONENT_SEPERATION = 60;
                            e.TILE = true;
                            e.TILING_PADDING_VERTICAL = 10;
                            e.TILING_PADDING_HORIZONTAL = 10;
                            e.TRANSFORM_ON_CONSTRAINT_HANDLING = true;
                            e.ENFORCE_CONSTRAINTS = true;
                            e.APPLY_LAYOUT = true;
                            e.RELAX_MOVEMENT_ON_CONSTRAINTS = true;
                            e.TREE_REDUCTION_ON_INCREMENTAL = true;
                            e.PURE_INCREMENTAL = e.DEFAULT_INCREMENTAL;
                            a.exports = e;
                        },
                        767: (a, r, i)=>{
                            var FDLayoutEdge = i(551).FDLayoutEdge;
                            function e(t, s, n) {
                                FDLayoutEdge.call(this, t, s, n);
                            }
                            e.prototype = Object.create(FDLayoutEdge.prototype);
                            for(var g in FDLayoutEdge){
                                e[g] = FDLayoutEdge[g];
                            }
                            a.exports = e;
                        },
                        880: (a, r, i)=>{
                            var LGraph = i(551).LGraph;
                            function e(t, s, n) {
                                LGraph.call(this, t, s, n);
                            }
                            e.prototype = Object.create(LGraph.prototype);
                            for(var g in LGraph){
                                e[g] = LGraph[g];
                            }
                            a.exports = e;
                        },
                        578: (a, r, i)=>{
                            var LGraphManager = i(551).LGraphManager;
                            function e(t) {
                                LGraphManager.call(this, t);
                            }
                            e.prototype = Object.create(LGraphManager.prototype);
                            for(var g in LGraphManager){
                                e[g] = LGraphManager[g];
                            }
                            a.exports = e;
                        },
                        765: (a, r, i)=>{
                            var FDLayout = i(551).FDLayout;
                            var e = i(578);
                            var g = i(880);
                            var t = i(991);
                            var s = i(767);
                            var n = i(806);
                            var c = i(902);
                            var FDLayoutConstants = i(551).FDLayoutConstants;
                            var LayoutConstants = i(551).LayoutConstants;
                            var Point = i(551).Point;
                            var PointD = i(551).PointD;
                            var DimensionD = i(551).DimensionD;
                            var Layout = i(551).Layout;
                            var Integer = i(551).Integer;
                            var IGeometry = i(551).IGeometry;
                            var LGraph = i(551).LGraph;
                            var Transform = i(551).Transform;
                            var LinkedList = i(551).LinkedList;
                            class M extends FDLayout {
                                constructor(){
                                    super();
                                    this.toBeTiled = {};
                                    this.constraints = {};
                                }
                                newGraphManager() {
                                    const o = new e(this);
                                    this.graphManager = o;
                                    return o;
                                }
                                newGraph(o) {
                                    return new g(null, this.graphManager, o);
                                }
                                newNode(o) {
                                    return new t(this.graphManager, o);
                                }
                                newEdge(o) {
                                    return new s(null, null, o);
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
                                        this.gravityConstant = FDLayoutConstants.DEFAULT_GRAVITY_STRENGTH;
                                        this.compoundGravityConstant = FDLayoutConstants.DEFAULT_COMPOUND_GRAVITY_STRENGTH;
                                        this.gravityRangeFactor = FDLayoutConstants.DEFAULT_GRAVITY_RANGE_FACTOR;
                                        this.compoundGravityRangeFactor = FDLayoutConstants.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR;
                                        this.prunedNodesAll = [];
                                        this.growTreeIterations = 0;
                                        this.afterGrowthIterations = 0;
                                        this.isTreeGrowing = false;
                                        this.isGrowthFinished = false;
                                    }
                                }
                                initSpringEmbedder() {
                                    FDLayout.prototype.initSpringEmbedder.call(this);
                                    this.coolingCycle = 0;
                                    this.maxCoolingCycle = this.maxIterations / FDLayoutConstants.CONVERGENCE_CHECK_PERIOD;
                                    this.finalTemperature = 0.04;
                                    this.coolingAdjuster = 1;
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
                                            var E = new Set(this.getAllNodes());
                                            var p = this.nodesWithGravity.filter((S)=>E.has(S));
                                            this.graphManager.setAllNodesToApplyGravitation(p);
                                        }
                                    } else {
                                        const o = this.getFlatForest();
                                        if (o.length > 0) {
                                            this.positionNodesRadially(o);
                                        } else {
                                            this.reduceTrees();
                                            this.graphManager.resetAllNodesToApplyGravitation();
                                            var E = new Set(this.getAllNodes());
                                            var p = this.nodesWithGravity.filter((m)=>E.has(m));
                                            this.graphManager.setAllNodesToApplyGravitation(p);
                                            this.positionNodesRandomly();
                                        }
                                    }
                                    if (Object.keys(this.constraints).length > 0) {
                                        c.handleConstraints(this);
                                        this.initConstraintVariables();
                                    }
                                    this.initSpringEmbedder();
                                    if (n.APPLY_LAYOUT) {
                                        this.runSpringEmbedder();
                                    }
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
                                                const o = new Set(this.getAllNodes());
                                                const E = this.nodesWithGravity.filter((y)=>o.has(y));
                                                this.graphManager.setAllNodesToApplyGravitation(E);
                                                this.graphManager.updateBounds();
                                                this.updateGrid();
                                                if (n.PURE_INCREMENTAL) {
                                                    this.coolingFactor = FDLayoutConstants.DEFAULT_COOLING_FACTOR_INCREMENTAL / 2;
                                                } else {
                                                    this.coolingFactor = FDLayoutConstants.DEFAULT_COOLING_FACTOR_INCREMENTAL;
                                                }
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
                                        if (n.PURE_INCREMENTAL) {
                                            this.coolingFactor = FDLayoutConstants.DEFAULT_COOLING_FACTOR_INCREMENTAL / 2 * ((100 - this.afterGrowthIterations) / 100);
                                        } else {
                                            this.coolingFactor = FDLayoutConstants.DEFAULT_COOLING_FACTOR_INCREMENTAL * ((100 - this.afterGrowthIterations) / 100);
                                        }
                                        this.afterGrowthIterations++;
                                    }
                                    const p = !this.isTreeGrowing && !this.isGrowthFinished;
                                    const m = this.growTreeIterations % 10 == 1 && this.isTreeGrowing || this.afterGrowthIterations % 10 == 1 && this.isGrowthFinished;
                                    this.totalDisplacement = 0;
                                    this.graphManager.updateBounds();
                                    this.calcSpringForces();
                                    this.calcRepulsionForces(p, m);
                                    this.calcGravitationalForces();
                                    this.moveNodes();
                                    this.animate();
                                    return false;
                                }
                                getPositionsData() {
                                    for(var o = this.graphManager.getAllNodes(), E = {}, p = 0; p < o.length; p++){
                                        const m = o[p].rect;
                                        const y = o[p].id;
                                        E[y] = {
                                            id: y,
                                            x: m.getCenterX(),
                                            y: m.getCenterY(),
                                            w: m.width,
                                            h: m.height
                                        };
                                    }
                                    return E;
                                }
                                runSpringEmbedder() {
                                    this.initialAnimationPeriod = 25;
                                    this.animationPeriod = this.initialAnimationPeriod;
                                    let o = false;
                                    if (FDLayoutConstants.ANIMATE === "during") {
                                        this.emit("layoutstarted");
                                    } else {
                                        while(!o){
                                            o = this.tick();
                                        }
                                        this.graphManager.updateBounds();
                                    }
                                }
                                moveNodes() {
                                    let E;
                                    for(var o = this.getAllNodes(), p = 0; p < o.length; p++){
                                        E = o[p];
                                        E.calculateDisplacement();
                                    }
                                    if (Object.keys(this.constraints).length > 0) {
                                        this.updateDisplacements();
                                    }
                                    for(var p = 0; p < o.length; p++){
                                        E = o[p];
                                        E.move();
                                    }
                                }
                                initConstraintVariables() {
                                    const o = this;
                                    this.idToNodeMap = new Map;
                                    this.fixedNodeSet = new Set;
                                    for(var E = this.graphManager.getAllNodes(), p = 0; p < E.length; p++){
                                        var m = E[p];
                                        this.idToNodeMap.set(m.id, m);
                                    }
                                    const y = function D(H) {
                                        let tt;
                                        for(var k = H.getChild().getNodes(), ht = 0, J = 0; J < k.length; J++){
                                            tt = k[J];
                                            if (tt.getChild() == null) {
                                                if (o.fixedNodeSet.has(tt.id)) {
                                                    ht += 100;
                                                }
                                            } else {
                                                ht += D(tt);
                                            }
                                        }
                                        return ht;
                                    };
                                    if (this.constraints.fixedNodeConstraint) {
                                        this.constraints.fixedNodeConstraint.forEach((k)=>{
                                            o.fixedNodeSet.add(k.nodeId);
                                        });
                                        var m;
                                        for(var E = this.graphManager.getAllNodes(), p = 0; p < E.length; p++){
                                            m = E[p];
                                            if (m.getChild() != null) {
                                                const S = y(m);
                                                if (S > 0) {
                                                    m.fixedNodeWeight = S;
                                                }
                                            }
                                        }
                                    }
                                    if (this.constraints.relativePlacementConstraint) {
                                        const O = new Map;
                                        const F = new Map;
                                        this.dummyToNodeForVerticalAlignment = new Map;
                                        this.dummyToNodeForHorizontalAlignment = new Map;
                                        this.fixedNodesOnHorizontal = new Set;
                                        this.fixedNodesOnVertical = new Set;
                                        this.fixedNodeSet.forEach((D)=>{
                                            o.fixedNodesOnHorizontal.add(D);
                                            o.fixedNodesOnVertical.add(D);
                                        });
                                        if (this.constraints.alignmentConstraint) {
                                            if (this.constraints.alignmentConstraint.vertical) {
                                                for(var W = this.constraints.alignmentConstraint.vertical, p = 0; p < W.length; p++){
                                                    this.dummyToNodeForVerticalAlignment.set(`dummy${p}`, []);
                                                    W[p].forEach((H)=>{
                                                        O.set(H, `dummy${p}`);
                                                        o.dummyToNodeForVerticalAlignment.get(`dummy${p}`).push(H);
                                                        if (o.fixedNodeSet.has(H)) {
                                                            o.fixedNodesOnHorizontal.add(`dummy${p}`);
                                                        }
                                                    });
                                                }
                                            }
                                            if (this.constraints.alignmentConstraint.horizontal) {
                                                for(var I = this.constraints.alignmentConstraint.horizontal, p = 0; p < I.length; p++){
                                                    this.dummyToNodeForHorizontalAlignment.set(`dummy${p}`, []);
                                                    I[p].forEach((H)=>{
                                                        F.set(H, `dummy${p}`);
                                                        o.dummyToNodeForHorizontalAlignment.get(`dummy${p}`).push(H);
                                                        if (o.fixedNodeSet.has(H)) {
                                                            o.fixedNodesOnVertical.add(`dummy${p}`);
                                                        }
                                                    });
                                                }
                                            }
                                        }
                                        if (n.RELAX_MOVEMENT_ON_CONSTRAINTS) {
                                            this.shuffle = (D)=>{
                                                let H;
                                                let k;
                                                let tt;
                                                for(tt = D.length - 1; tt >= 2 * D.length / 3; tt--){
                                                    H = Math.floor(Math.random() * (tt + 1));
                                                    k = D[tt];
                                                    D[tt] = D[H];
                                                    D[H] = k;
                                                }
                                                return D;
                                            };
                                            this.nodesInRelativeHorizontal = [];
                                            this.nodesInRelativeVertical = [];
                                            this.nodeToRelativeConstraintMapHorizontal = new Map;
                                            this.nodeToRelativeConstraintMapVertical = new Map;
                                            this.nodeToTempPositionMapHorizontal = new Map;
                                            this.nodeToTempPositionMapVertical = new Map;
                                            this.constraints.relativePlacementConstraint.forEach((D)=>{
                                                if (D.left) {
                                                    const left = O.has(D.left) ? O.get(D.left) : D.left;
                                                    const right = O.has(D.right) ? O.get(D.right) : D.right;
                                                    if (!o.nodesInRelativeHorizontal.includes(left)) {
                                                        o.nodesInRelativeHorizontal.push(left);
                                                        o.nodeToRelativeConstraintMapHorizontal.set(left, []);
                                                        if (o.dummyToNodeForVerticalAlignment.has(left)) {
                                                            o.nodeToTempPositionMapHorizontal.set(left, o.idToNodeMap.get(o.dummyToNodeForVerticalAlignment.get(left)[0]).getCenterX());
                                                        } else {
                                                            o.nodeToTempPositionMapHorizontal.set(left, o.idToNodeMap.get(left).getCenterX());
                                                        }
                                                    }
                                                    if (!o.nodesInRelativeHorizontal.includes(right)) {
                                                        o.nodesInRelativeHorizontal.push(right);
                                                        o.nodeToRelativeConstraintMapHorizontal.set(right, []);
                                                        if (o.dummyToNodeForVerticalAlignment.has(right)) {
                                                            o.nodeToTempPositionMapHorizontal.set(right, o.idToNodeMap.get(o.dummyToNodeForVerticalAlignment.get(right)[0]).getCenterX());
                                                        } else {
                                                            o.nodeToTempPositionMapHorizontal.set(right, o.idToNodeMap.get(right).getCenterX());
                                                        }
                                                    }
                                                    o.nodeToRelativeConstraintMapHorizontal.get(left).push({
                                                        right,
                                                        gap: D.gap
                                                    });
                                                    o.nodeToRelativeConstraintMapHorizontal.get(right).push({
                                                        left,
                                                        gap: D.gap
                                                    });
                                                } else {
                                                    const top = F.has(D.top) ? F.get(D.top) : D.top;
                                                    const bottom = F.has(D.bottom) ? F.get(D.bottom) : D.bottom;
                                                    if (!o.nodesInRelativeVertical.includes(top)) {
                                                        o.nodesInRelativeVertical.push(top);
                                                        o.nodeToRelativeConstraintMapVertical.set(top, []);
                                                        if (o.dummyToNodeForHorizontalAlignment.has(top)) {
                                                            o.nodeToTempPositionMapVertical.set(top, o.idToNodeMap.get(o.dummyToNodeForHorizontalAlignment.get(top)[0]).getCenterY());
                                                        } else {
                                                            o.nodeToTempPositionMapVertical.set(top, o.idToNodeMap.get(top).getCenterY());
                                                        }
                                                    }
                                                    if (!o.nodesInRelativeVertical.includes(bottom)) {
                                                        o.nodesInRelativeVertical.push(bottom);
                                                        o.nodeToRelativeConstraintMapVertical.set(bottom, []);
                                                        if (o.dummyToNodeForHorizontalAlignment.has(bottom)) {
                                                            o.nodeToTempPositionMapVertical.set(bottom, o.idToNodeMap.get(o.dummyToNodeForHorizontalAlignment.get(bottom)[0]).getCenterY());
                                                        } else {
                                                            o.nodeToTempPositionMapVertical.set(bottom, o.idToNodeMap.get(bottom).getCenterY());
                                                        }
                                                    }
                                                    o.nodeToRelativeConstraintMapVertical.get(top).push({
                                                        bottom,
                                                        gap: D.gap
                                                    });
                                                    o.nodeToRelativeConstraintMapVertical.get(bottom).push({
                                                        top,
                                                        gap: D.gap
                                                    });
                                                }
                                            });
                                        } else {
                                            const Q = new Map;
                                            const z = new Map;
                                            this.constraints.relativePlacementConstraint.forEach((D)=>{
                                                if (D.left) {
                                                    const H = O.has(D.left) ? O.get(D.left) : D.left;
                                                    const k = O.has(D.right) ? O.get(D.right) : D.right;
                                                    if (Q.has(H)) {
                                                        Q.get(H).push(k);
                                                    } else {
                                                        Q.set(H, [
                                                            k
                                                        ]);
                                                    }
                                                    if (Q.has(k)) {
                                                        Q.get(k).push(H);
                                                    } else {
                                                        Q.set(k, [
                                                            H
                                                        ]);
                                                    }
                                                } else {
                                                    const tt = F.has(D.top) ? F.get(D.top) : D.top;
                                                    const ht = F.has(D.bottom) ? F.get(D.bottom) : D.bottom;
                                                    if (z.has(tt)) {
                                                        z.get(tt).push(ht);
                                                    } else {
                                                        z.set(tt, [
                                                            ht
                                                        ]);
                                                    }
                                                    if (z.has(ht)) {
                                                        z.get(ht).push(tt);
                                                    } else {
                                                        z.set(ht, [
                                                            tt
                                                        ]);
                                                    }
                                                }
                                            });
                                            const X = (H, k)=>{
                                                const components = [];
                                                const isFixed = [];
                                                const J = new LinkedList;
                                                const It = new Set;
                                                let Nt = 0;
                                                H.forEach((vt, it)=>{
                                                    if (!It.has(it)) {
                                                        components[Nt] = [];
                                                        isFixed[Nt] = false;
                                                        let ut = it;
                                                        J.push(ut);
                                                        It.add(ut);
                                                        components[Nt].push(ut);
                                                        while(J.length != 0){
                                                            ut = J.shift();
                                                            if (k.has(ut)) {
                                                                isFixed[Nt] = true;
                                                            }
                                                            const Et = H.get(ut);
                                                            Et.forEach((wt)=>{
                                                                if (!It.has(wt)) {
                                                                    J.push(wt);
                                                                    It.add(wt);
                                                                    components[Nt].push(wt);
                                                                }
                                                            });
                                                        }
                                                        Nt++;
                                                    }
                                                });
                                                return {
                                                    components,
                                                    isFixed
                                                };
                                            };
                                            const rt = X(Q, o.fixedNodesOnHorizontal);
                                            this.componentsOnHorizontal = rt.components;
                                            this.fixedComponentsOnHorizontal = rt.isFixed;
                                            const $ = X(z, o.fixedNodesOnVertical);
                                            this.componentsOnVertical = $.components;
                                            this.fixedComponentsOnVertical = $.isFixed;
                                        }
                                    }
                                }
                                updateDisplacements() {
                                    const o = this;
                                    if (this.constraints.fixedNodeConstraint) {
                                        this.constraints.fixedNodeConstraint.forEach(($)=>{
                                            const D = o.idToNodeMap.get($.nodeId);
                                            D.displacementX = 0;
                                            D.displacementY = 0;
                                        });
                                    }
                                    if (this.constraints.alignmentConstraint) {
                                        if (this.constraints.alignmentConstraint.vertical) {
                                            for(var E = this.constraints.alignmentConstraint.vertical, p = 0; p < E.length; p++){
                                                let m = 0;
                                                for(var y = 0; y < E[p].length; y++){
                                                    if (this.fixedNodeSet.has(E[p][y])) {
                                                        m = 0;
                                                        break;
                                                    }
                                                    m += this.idToNodeMap.get(E[p][y]).displacementX;
                                                }
                                                const S = m / E[p].length;
                                                for(var y = 0; y < E[p].length; y++){
                                                    this.idToNodeMap.get(E[p][y]).displacementX = S;
                                                }
                                            }
                                        }
                                        if (this.constraints.alignmentConstraint.horizontal) {
                                            for(var O = this.constraints.alignmentConstraint.horizontal, p = 0; p < O.length; p++){
                                                let F = 0;
                                                for(var y = 0; y < O[p].length; y++){
                                                    if (this.fixedNodeSet.has(O[p][y])) {
                                                        F = 0;
                                                        break;
                                                    }
                                                    F += this.idToNodeMap.get(O[p][y]).displacementY;
                                                }
                                                const W = F / O[p].length;
                                                for(var y = 0; y < O[p].length; y++){
                                                    this.idToNodeMap.get(O[p][y]).displacementY = W;
                                                }
                                            }
                                        }
                                    }
                                    if (this.constraints.relativePlacementConstraint) {
                                        if (n.RELAX_MOVEMENT_ON_CONSTRAINTS) {
                                            if (this.totalIterations % 10 == 0) {
                                                this.shuffle(this.nodesInRelativeHorizontal);
                                                this.shuffle(this.nodesInRelativeVertical);
                                            }
                                            this.nodesInRelativeHorizontal.forEach(($)=>{
                                                if (!o.fixedNodesOnHorizontal.has($)) {
                                                    let D = 0;
                                                    if (o.dummyToNodeForVerticalAlignment.has($)) {
                                                        D = o.idToNodeMap.get(o.dummyToNodeForVerticalAlignment.get($)[0]).displacementX;
                                                    } else {
                                                        D = o.idToNodeMap.get($).displacementX;
                                                    }
                                                    o.nodeToRelativeConstraintMapHorizontal.get($).forEach((H)=>{
                                                        if (H.right) {
                                                            var k = o.nodeToTempPositionMapHorizontal.get(H.right) - o.nodeToTempPositionMapHorizontal.get($) - D;
                                                            if (k < H.gap) {
                                                                D -= H.gap - k;
                                                            }
                                                        } else {
                                                            var k = o.nodeToTempPositionMapHorizontal.get($) - o.nodeToTempPositionMapHorizontal.get(H.left) + D;
                                                            if (k < H.gap) {
                                                                D += H.gap - k;
                                                            }
                                                        }
                                                    });
                                                    o.nodeToTempPositionMapHorizontal.set($, o.nodeToTempPositionMapHorizontal.get($) + D);
                                                    if (o.dummyToNodeForVerticalAlignment.has($)) {
                                                        o.dummyToNodeForVerticalAlignment.get($).forEach((H)=>{
                                                            o.idToNodeMap.get(H).displacementX = D;
                                                        });
                                                    } else {
                                                        o.idToNodeMap.get($).displacementX = D;
                                                    }
                                                }
                                            });
                                            this.nodesInRelativeVertical.forEach(($)=>{
                                                if (!o.fixedNodesOnHorizontal.has($)) {
                                                    let D = 0;
                                                    if (o.dummyToNodeForHorizontalAlignment.has($)) {
                                                        D = o.idToNodeMap.get(o.dummyToNodeForHorizontalAlignment.get($)[0]).displacementY;
                                                    } else {
                                                        D = o.idToNodeMap.get($).displacementY;
                                                    }
                                                    o.nodeToRelativeConstraintMapVertical.get($).forEach((H)=>{
                                                        if (H.bottom) {
                                                            var k = o.nodeToTempPositionMapVertical.get(H.bottom) - o.nodeToTempPositionMapVertical.get($) - D;
                                                            if (k < H.gap) {
                                                                D -= H.gap - k;
                                                            }
                                                        } else {
                                                            var k = o.nodeToTempPositionMapVertical.get($) - o.nodeToTempPositionMapVertical.get(H.top) + D;
                                                            if (k < H.gap) {
                                                                D += H.gap - k;
                                                            }
                                                        }
                                                    });
                                                    o.nodeToTempPositionMapVertical.set($, o.nodeToTempPositionMapVertical.get($) + D);
                                                    if (o.dummyToNodeForHorizontalAlignment.has($)) {
                                                        o.dummyToNodeForHorizontalAlignment.get($).forEach((H)=>{
                                                            o.idToNodeMap.get(H).displacementY = D;
                                                        });
                                                    } else {
                                                        o.idToNodeMap.get($).displacementY = D;
                                                    }
                                                }
                                            });
                                        } else {
                                            for(var p = 0; p < this.componentsOnHorizontal.length; p++){
                                                var I = this.componentsOnHorizontal[p];
                                                if (this.fixedComponentsOnHorizontal[p]) {
                                                    for(var y = 0; y < I.length; y++){
                                                        if (this.dummyToNodeForVerticalAlignment.has(I[y])) {
                                                            this.dummyToNodeForVerticalAlignment.get(I[y]).forEach((H)=>{
                                                                o.idToNodeMap.get(H).displacementX = 0;
                                                            });
                                                        } else {
                                                            this.idToNodeMap.get(I[y]).displacementX = 0;
                                                        }
                                                    }
                                                } else {
                                                    var Q = 0;
                                                    var z = 0;
                                                    for(var y = 0; y < I.length; y++){
                                                        if (this.dummyToNodeForVerticalAlignment.has(I[y])) {
                                                            var X = this.dummyToNodeForVerticalAlignment.get(I[y]);
                                                            Q += X.length * this.idToNodeMap.get(X[0]).displacementX;
                                                            z += X.length;
                                                        } else {
                                                            Q += this.idToNodeMap.get(I[y]).displacementX;
                                                            z++;
                                                        }
                                                    }
                                                    var rt = Q / z;
                                                    for(var y = 0; y < I.length; y++){
                                                        if (this.dummyToNodeForVerticalAlignment.has(I[y])) {
                                                            this.dummyToNodeForVerticalAlignment.get(I[y]).forEach((H)=>{
                                                                o.idToNodeMap.get(H).displacementX = rt;
                                                            });
                                                        } else {
                                                            this.idToNodeMap.get(I[y]).displacementX = rt;
                                                        }
                                                    }
                                                }
                                            }
                                            for(var p = 0; p < this.componentsOnVertical.length; p++){
                                                var I = this.componentsOnVertical[p];
                                                if (this.fixedComponentsOnVertical[p]) {
                                                    for(var y = 0; y < I.length; y++){
                                                        if (this.dummyToNodeForHorizontalAlignment.has(I[y])) {
                                                            this.dummyToNodeForHorizontalAlignment.get(I[y]).forEach((k)=>{
                                                                o.idToNodeMap.get(k).displacementY = 0;
                                                            });
                                                        } else {
                                                            this.idToNodeMap.get(I[y]).displacementY = 0;
                                                        }
                                                    }
                                                } else {
                                                    var Q = 0;
                                                    var z = 0;
                                                    for(var y = 0; y < I.length; y++){
                                                        if (this.dummyToNodeForHorizontalAlignment.has(I[y])) {
                                                            var X = this.dummyToNodeForHorizontalAlignment.get(I[y]);
                                                            Q += X.length * this.idToNodeMap.get(X[0]).displacementY;
                                                            z += X.length;
                                                        } else {
                                                            Q += this.idToNodeMap.get(I[y]).displacementY;
                                                            z++;
                                                        }
                                                    }
                                                    var rt = Q / z;
                                                    for(var y = 0; y < I.length; y++){
                                                        if (this.dummyToNodeForHorizontalAlignment.has(I[y])) {
                                                            this.dummyToNodeForHorizontalAlignment.get(I[y]).forEach((J)=>{
                                                                o.idToNodeMap.get(J).displacementY = rt;
                                                            });
                                                        } else {
                                                            this.idToNodeMap.get(I[y]).displacementY = rt;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                                calculateNodesToApplyGravitationTo() {
                                    let o = [];
                                    let E;
                                    const p = this.graphManager.getGraphs();
                                    const p_length = p.length;
                                    let y;
                                    for(y = 0; y < p_length; y++){
                                        E = p[y];
                                        E.updateConnected();
                                        if (!E.isConnected) {
                                            o = o.concat(E.getNodes());
                                        }
                                    }
                                    return o;
                                }
                                createBendpoints() {
                                    let o = [];
                                    o = o.concat(this.graphManager.getAllEdges());
                                    const E = new Set;
                                    let p;
                                    for(p = 0; p < o.length; p++){
                                        const m = o[p];
                                        if (!E.has(m)) {
                                            const y = m.getSource();
                                            const S = m.getTarget();
                                            if (y == S) {
                                                m.getBendpoints().push(new PointD);
                                                m.getBendpoints().push(new PointD);
                                                this.createDummyNodesForBendpoints(m);
                                                E.add(m);
                                            } else {
                                                let O = [];
                                                O = O.concat(y.getEdgeListToNode(S));
                                                O = O.concat(S.getEdgeListToNode(y));
                                                if (!E.has(O[0])) {
                                                    if (O.length > 1) {
                                                        let F;
                                                        for(F = 0; F < O.length; F++){
                                                            const W = O[F];
                                                            W.getBendpoints().push(new PointD);
                                                            this.createDummyNodesForBendpoints(W);
                                                        }
                                                    }
                                                    O.forEach((I)=>{
                                                        E.add(I);
                                                    });
                                                }
                                            }
                                        }
                                        if (E.size == o.length) {
                                            break;
                                        }
                                    }
                                }
                                positionNodesRadially(o) {
                                    const E = new Point(0, 0);
                                    const p = Math.ceil(Math.sqrt(o.length));
                                    let m = 0;
                                    let y = 0;
                                    let S = 0;
                                    let O = new PointD(0, 0);
                                    for(let F = 0; F < o.length; F++){
                                        if (F % p == 0) {
                                            S = 0;
                                            y = m;
                                            if (F != 0) {
                                                y += n.DEFAULT_COMPONENT_SEPERATION;
                                            }
                                            m = 0;
                                        }
                                        const W = o[F];
                                        const I = Layout.findCenterOfTree(W);
                                        E.x = S;
                                        E.y = y;
                                        O = M.radialLayout(W, I, E);
                                        if (O.y > m) {
                                            m = Math.floor(O.y);
                                        }
                                        S = Math.floor(O.x + n.DEFAULT_COMPONENT_SEPERATION);
                                    }
                                    this.transform(new PointD(LayoutConstants.WORLD_CENTER_X - O.x / 2, LayoutConstants.WORLD_CENTER_Y - O.y / 2));
                                }
                                static radialLayout(o, E, p) {
                                    const m = Math.max(this.maxDiagonalInTree(o), n.DEFAULT_RADIAL_SEPARATION);
                                    M.branchRadialLayout(E, null, 0, 359, 0, m);
                                    const y = LGraph.calculateBounds(o);
                                    const S = new Transform;
                                    S.setDeviceOrgX(y.getMinX());
                                    S.setDeviceOrgY(y.getMinY());
                                    S.setWorldOrgX(p.x);
                                    S.setWorldOrgY(p.y);
                                    for (const F of o){
                                        F.transform(S);
                                    }
                                    const W = new PointD(y.getMaxX(), y.getMaxY());
                                    return S.inverseTransformPoint(W);
                                }
                                static branchRadialLayout(o, E, p, m, y, S) {
                                    let O = (m - p + 1) / 2;
                                    if (O < 0) {
                                        O += 180;
                                    }
                                    const F = (O + p) % 360;
                                    const W = F * IGeometry.TWO_PI / 360;
                                    const I = y * Math.cos(W);
                                    const Q = y * Math.sin(W);
                                    o.setCenter(I, Q);
                                    let z = [];
                                    z = z.concat(o.getEdges());
                                    let z_length = z.length;
                                    E != null && z_length--;
                                    let rt = 0;
                                    let z_length_1 = z.length;
                                    let D;
                                    for(var H = o.getEdgesBetween(E); H.length > 1;){
                                        const k = H[0];
                                        H.splice(0, 1);
                                        const tt = z.indexOf(k);
                                        if (tt >= 0) {
                                            z.splice(tt, 1);
                                        }
                                        z_length_1--;
                                        z_length--;
                                    }
                                    if (E != null) {
                                        D = (z.indexOf(H[0]) + 1) % z_length_1;
                                    } else {
                                        D = 0;
                                    }
                                    const ht = Math.abs(m - p) / z_length;
                                    for(let J = D; rt != z_length; J = ++J % z_length_1){
                                        const It = z[J].getOtherEnd(o);
                                        if (It != E) {
                                            const Nt = (p + rt * ht) % 360;
                                            const vt = (Nt + ht) % 360;
                                            M.branchRadialLayout(It, o, Nt, vt, y + S, S);
                                            rt++;
                                        }
                                    }
                                }
                                static maxDiagonalInTree(o) {
                                    let Integer_MIN_VALUE = Integer.MIN_VALUE;
                                    for (const m of o){
                                        const y = m.getDiagonal();
                                        if (y > Integer_MIN_VALUE) {
                                            Integer_MIN_VALUE = y;
                                        }
                                    }
                                    return Integer_MIN_VALUE;
                                }
                                calcRepulsionRange() {
                                    return 2 * (this.level + 1) * this.idealEdgeLength;
                                }
                                groupZeroDegreeMembers() {
                                    const o = this;
                                    const E = {};
                                    this.memberGroups = {};
                                    this.idToDummyNode = {};
                                    const p = [];
                                    for(var m = this.graphManager.getAllNodes(), y = 0; y < m.length; y++){
                                        var S = m[y];
                                        const O = S.getParent();
                                        if (this.getNodeDegreeWithChildren(S) === 0 && (O.id == null || !this.getToBeTiled(O))) {
                                            p.push(S);
                                        }
                                    }
                                    for(var y = 0; y < p.length; y++){
                                        var S = p[y];
                                        const F = S.getParent().id;
                                        if (typeof E[F] === "undefined") {
                                            E[F] = [];
                                        }
                                        E[F] = E[F].concat(S);
                                    }
                                    Object.keys(E).forEach((W)=>{
                                        if (E[W].length > 1) {
                                            const I = `DummyCompound_${W}`;
                                            o.memberGroups[I] = E[W];
                                            const Q = E[W][0].getParent();
                                            const z = new t(o.graphManager);
                                            z.id = I;
                                            z.paddingLeft = Q.paddingLeft || 0;
                                            z.paddingRight = Q.paddingRight || 0;
                                            z.paddingBottom = Q.paddingBottom || 0;
                                            z.paddingTop = Q.paddingTop || 0;
                                            o.idToDummyNode[I] = z;
                                            const X = o.getGraphManager().add(o.newGraph(), z);
                                            const rt = Q.getChild();
                                            rt.add(z);
                                            for(let $ = 0; $ < E[W].length; $++){
                                                const D = E[W][$];
                                                rt.remove(D);
                                                X.add(D);
                                            }
                                        }
                                    });
                                }
                                clearCompounds() {
                                    const o = {};
                                    const E = {};
                                    this.performDFSOnCompounds();
                                    for(let p = 0; p < this.compoundOrder.length; p++){
                                        E[this.compoundOrder[p].id] = this.compoundOrder[p];
                                        o[this.compoundOrder[p].id] = [].concat(this.compoundOrder[p].getChild().getNodes());
                                        this.graphManager.remove(this.compoundOrder[p].getChild());
                                        this.compoundOrder[p].child = null;
                                    }
                                    this.graphManager.resetAllNodes();
                                    this.tileCompoundMembers(o, E);
                                }
                                clearZeroDegreeMembers() {
                                    const o = this;
                                    const E = this.tiledZeroDegreePack = [];
                                    Object.keys(this.memberGroups).forEach((p)=>{
                                        const m = o.idToDummyNode[p];
                                        E[p] = o.tileNodes(o.memberGroups[p], m.paddingLeft + m.paddingRight);
                                        m.rect.width = E[p].width;
                                        m.rect.height = E[p].height;
                                        m.setCenter(E[p].centerX, E[p].centerY);
                                        m.labelMarginLeft = 0;
                                        m.labelMarginTop = 0;
                                        if (n.NODE_DIMENSIONS_INCLUDE_LABELS) {
                                            const y = m.rect.width;
                                            const S = m.rect.height;
                                            m.labelWidth && (m.labelPosHorizontal == "left" ? (m.rect.x -= m.labelWidth, m.setWidth(y + m.labelWidth), m.labelMarginLeft = m.labelWidth) : m.labelPosHorizontal == "center" && m.labelWidth > y ? (m.rect.x -= (m.labelWidth - y) / 2, m.setWidth(m.labelWidth), m.labelMarginLeft = (m.labelWidth - y) / 2) : m.labelPosHorizontal == "right" && m.setWidth(y + m.labelWidth));
                                            m.labelHeight && (m.labelPosVertical == "top" ? (m.rect.y -= m.labelHeight, m.setHeight(S + m.labelHeight), m.labelMarginTop = m.labelHeight) : m.labelPosVertical == "center" && m.labelHeight > S ? (m.rect.y -= (m.labelHeight - S) / 2, m.setHeight(m.labelHeight), m.labelMarginTop = (m.labelHeight - S) / 2) : m.labelPosVertical == "bottom" && m.setHeight(S + m.labelHeight));
                                        }
                                    });
                                }
                                repopulateCompounds() {
                                    for(let o = this.compoundOrder.length - 1; o >= 0; o--){
                                        const E = this.compoundOrder[o];
                                        const { id, paddingLeft, paddingTop, labelMarginLeft, labelMarginTop } = E;
                                        this.adjustLocations(this.tiledMemberPack[id], E.rect.x, E.rect.y, paddingLeft, paddingTop, labelMarginLeft, labelMarginTop);
                                    }
                                }
                                repopulateZeroDegreeMembers() {
                                    const o = this;
                                    const tiledZeroDegreePack = this.tiledZeroDegreePack;
                                    Object.keys(tiledZeroDegreePack).forEach((p)=>{
                                        const m = o.idToDummyNode[p];
                                        const { paddingLeft, paddingTop, labelMarginLeft, labelMarginTop } = m;
                                        o.adjustLocations(tiledZeroDegreePack[p], m.rect.x, m.rect.y, paddingLeft, paddingTop, labelMarginLeft, labelMarginTop);
                                    });
                                }
                                getToBeTiled(o) {
                                    const E = o.id;
                                    if (this.toBeTiled[E] != null) {
                                        return this.toBeTiled[E];
                                    }
                                    const p = o.getChild();
                                    if (p == null) {
                                        this.toBeTiled[E] = false;
                                        return false;
                                    }
                                    for(let m = p.getNodes(), y = 0; y < m.length; y++){
                                        const S = m[y];
                                        if (this.getNodeDegree(S) > 0) {
                                            this.toBeTiled[E] = false;
                                            return false;
                                        }
                                        if (S.getChild() == null) {
                                            this.toBeTiled[S.id] = false;
                                            continue;
                                        }
                                        if (!this.getToBeTiled(S)) {
                                            this.toBeTiled[E] = false;
                                            return false;
                                        }
                                    }
                                    this.toBeTiled[E] = true;
                                    return true;
                                }
                                getNodeDegree(o) {
                                    o.id;
                                    for(var E = o.getEdges(), p = 0, m = 0; m < E.length; m++){
                                        const y = E[m];
                                        if (y.getSource().id !== y.getTarget().id) {
                                            p = p + 1;
                                        }
                                    }
                                    return p;
                                }
                                getNodeDegreeWithChildren(o) {
                                    let E = this.getNodeDegree(o);
                                    if (o.getChild() == null) {
                                        return E;
                                    }
                                    for(let p = o.getChild().getNodes(), m = 0; m < p.length; m++){
                                        const y = p[m];
                                        E += this.getNodeDegreeWithChildren(y);
                                    }
                                    return E;
                                }
                                performDFSOnCompounds() {
                                    this.compoundOrder = [];
                                    this.fillCompexOrderByDFS(this.graphManager.getRoot().getNodes());
                                }
                                fillCompexOrderByDFS(o) {
                                    for (const p of o){
                                        if (p.getChild() != null) {
                                            this.fillCompexOrderByDFS(p.getChild().getNodes());
                                        }
                                        if (this.getToBeTiled(p)) {
                                            this.compoundOrder.push(p);
                                        }
                                    }
                                }
                                adjustLocations(o, E, p, m, y, S, O) {
                                    E += m + S;
                                    p += y + O;
                                    const F = E;
                                    for(let W = 0; W < o.rows.length; W++){
                                        const row = o.rows[W];
                                        E = F;
                                        let Q = 0;
                                        for (const X of row){
                                            X.rect.x = E;
                                            X.rect.y = p;
                                            E += X.rect.width + o.horizontalPadding;
                                            if (X.rect.height > Q) {
                                                Q = X.rect.height;
                                            }
                                        }
                                        p += Q + o.verticalPadding;
                                    }
                                }
                                tileCompoundMembers(o, E) {
                                    const p = this;
                                    this.tiledMemberPack = [];
                                    Object.keys(o).forEach((m)=>{
                                        const y = E[m];
                                        p.tiledMemberPack[m] = p.tileNodes(o[m], y.paddingLeft + y.paddingRight);
                                        y.rect.width = p.tiledMemberPack[m].width;
                                        y.rect.height = p.tiledMemberPack[m].height;
                                        y.setCenter(p.tiledMemberPack[m].centerX, p.tiledMemberPack[m].centerY);
                                        y.labelMarginLeft = 0;
                                        y.labelMarginTop = 0;
                                        if (n.NODE_DIMENSIONS_INCLUDE_LABELS) {
                                            const S = y.rect.width;
                                            const O = y.rect.height;
                                            y.labelWidth && (y.labelPosHorizontal == "left" ? (y.rect.x -= y.labelWidth, y.setWidth(S + y.labelWidth), y.labelMarginLeft = y.labelWidth) : y.labelPosHorizontal == "center" && y.labelWidth > S ? (y.rect.x -= (y.labelWidth - S) / 2, y.setWidth(y.labelWidth), y.labelMarginLeft = (y.labelWidth - S) / 2) : y.labelPosHorizontal == "right" && y.setWidth(S + y.labelWidth));
                                            y.labelHeight && (y.labelPosVertical == "top" ? (y.rect.y -= y.labelHeight, y.setHeight(O + y.labelHeight), y.labelMarginTop = y.labelHeight) : y.labelPosVertical == "center" && y.labelHeight > O ? (y.rect.y -= (y.labelHeight - O) / 2, y.setHeight(y.labelHeight), y.labelMarginTop = (y.labelHeight - O) / 2) : y.labelPosVertical == "bottom" && y.setHeight(O + y.labelHeight));
                                        }
                                    });
                                }
                                tileNodes(o, E) {
                                    const p = this.tileNodesByFavoringDim(o, E, true);
                                    const m = this.tileNodesByFavoringDim(o, E, false);
                                    const y = this.getOrgRatio(p);
                                    const S = this.getOrgRatio(m);
                                    let O;
                                    if (S < y) {
                                        O = m;
                                    } else {
                                        O = p;
                                    }
                                    return O;
                                }
                                getOrgRatio({ width, height }) {
                                    let m = width / height;
                                    if (m < 1) {
                                        m = 1 / m;
                                    }
                                    return m;
                                }
                                calcIdealRowWidth(o, E) {
                                    const { TILING_PADDING_VERTICAL, TILING_PADDING_HORIZONTAL } = n;
                                    const o_length = o.length;
                                    let S = 0;
                                    let O = 0;
                                    let F = 0;
                                    o.forEach(($)=>{
                                        S += $.getWidth();
                                        O += $.getHeight();
                                        if ($.getWidth() > F) {
                                            F = $.getWidth();
                                        }
                                    });
                                    const W = S / o_length;
                                    const I = O / o_length;
                                    const Q = (TILING_PADDING_VERTICAL - TILING_PADDING_HORIZONTAL) ** 2 + 4 * (W + TILING_PADDING_HORIZONTAL) * (I + TILING_PADDING_VERTICAL) * o_length;
                                    const z = (TILING_PADDING_HORIZONTAL - TILING_PADDING_VERTICAL + Math.sqrt(Q)) / (2 * (W + TILING_PADDING_HORIZONTAL));
                                    let X;
                                    if (E) {
                                        X = Math.ceil(z);
                                        X == z && X++;
                                    } else {
                                        X = Math.floor(z);
                                    }
                                    let rt = X * (W + TILING_PADDING_HORIZONTAL) - TILING_PADDING_HORIZONTAL;
                                    if (F > rt) {
                                        rt = F;
                                    }
                                    rt += TILING_PADDING_HORIZONTAL * 2;
                                    return rt;
                                }
                                tileNodesByFavoringDim(o, height, p) {
                                    const { TILING_PADDING_VERTICAL, TILING_PADDING_HORIZONTAL, TILING_COMPARE_BY } = n;
                                    const O = {
                                        rows: [],
                                        rowWidth: [],
                                        rowHeight: [],
                                        width: 0,
                                        height,
                                        verticalPadding: TILING_PADDING_VERTICAL,
                                        horizontalPadding: TILING_PADDING_HORIZONTAL,
                                        centerX: 0,
                                        centerY: 0
                                    };
                                    if (TILING_COMPARE_BY) {
                                        O.idealRowWidth = this.calcIdealRowWidth(o, p);
                                    }
                                    const F = (D)=>D.rect.width * D.rect.height;
                                    const W = (D, H)=>F(H) - F(D);
                                    o.sort(($, D)=>{
                                        let H = W;
                                        if (O.idealRowWidth) {
                                            H = TILING_COMPARE_BY;
                                            return H($.id, D.id);
                                        }
                                        return H($, D);
                                    });
                                    let I = 0;
                                    let Q = 0;
                                    for(var z = 0; z < o.length; z++){
                                        var X = o[z];
                                        I += X.getCenterX();
                                        Q += X.getCenterY();
                                    }
                                    O.centerX = I / o.length;
                                    O.centerY = Q / o.length;
                                    for(var z = 0; z < o.length; z++){
                                        var X = o[z];
                                        if (O.rows.length == 0) {
                                            this.insertNodeToRow(O, X, 0, height);
                                        } else if (this.canAddHorizontal(O, X.rect.width, X.rect.height)) {
                                            let rt = O.rows.length - 1;
                                            if (!O.idealRowWidth) {
                                                rt = this.getShortestRowIndex(O);
                                            }
                                            this.insertNodeToRow(O, X, rt, height);
                                        } else {
                                            this.insertNodeToRow(O, X, O.rows.length, height);
                                        }
                                        this.shiftToLastRow(O);
                                    }
                                    return O;
                                }
                                insertNodeToRow(o, E, p, m) {
                                    if (p == o.rows.length) {
                                        const S = [];
                                        o.rows.push(S);
                                        o.rowWidth.push(m);
                                        o.rowHeight.push(0);
                                    }
                                    let O = o.rowWidth[p] + E.rect.width;
                                    if (o.rows[p].length > 0) {
                                        O += o.horizontalPadding;
                                    }
                                    o.rowWidth[p] = O;
                                    if (o.width < O) {
                                        o.width = O;
                                    }
                                    let height = E.rect.height;
                                    if (p > 0) {
                                        height += o.verticalPadding;
                                    }
                                    let W = 0;
                                    if (height > o.rowHeight[p]) {
                                        W = o.rowHeight[p];
                                        o.rowHeight[p] = height;
                                        W = o.rowHeight[p] - W;
                                    }
                                    o.height += W;
                                    o.rows[p].push(E);
                                }
                                getShortestRowIndex(o) {
                                    let E = -1;
                                    let Number_MAX_VALUE = Number.MAX_VALUE;
                                    for(let m = 0; m < o.rows.length; m++){
                                        if (o.rowWidth[m] < Number_MAX_VALUE) {
                                            E = m;
                                            Number_MAX_VALUE = o.rowWidth[m];
                                        }
                                    }
                                    return E;
                                }
                                getLongestRowIndex(o) {
                                    let E = -1;
                                    let Number_MIN_VALUE = Number.MIN_VALUE;
                                    for(let m = 0; m < o.rows.length; m++){
                                        if (o.rowWidth[m] > Number_MIN_VALUE) {
                                            E = m;
                                            Number_MIN_VALUE = o.rowWidth[m];
                                        }
                                    }
                                    return E;
                                }
                                canAddHorizontal(o, E, p) {
                                    if (o.idealRowWidth) {
                                        const m = o.rows.length - 1;
                                        const y = o.rowWidth[m];
                                        return y + E + o.horizontalPadding <= o.idealRowWidth;
                                    }
                                    const S = this.getShortestRowIndex(o);
                                    if (S < 0) {
                                        return true;
                                    }
                                    const O = o.rowWidth[S];
                                    if (O + o.horizontalPadding + E <= o.width) {
                                        return true;
                                    }
                                    let F = 0;
                                    if (o.rowHeight[S] < p && S > 0) {
                                        F = p + o.verticalPadding - o.rowHeight[S];
                                    }
                                    let W;
                                    if (o.width - O >= E + o.horizontalPadding) {
                                        W = (o.height + F) / (O + E + o.horizontalPadding);
                                    } else {
                                        W = (o.height + F) / o.width;
                                    }
                                    F = p + o.verticalPadding;
                                    let I;
                                    if (o.width < E) {
                                        I = (o.height + F) / E;
                                    } else {
                                        I = (o.height + F) / o.width;
                                    }
                                    if (I < 1) {
                                        I = 1 / I;
                                    }
                                    if (W < 1) {
                                        W = 1 / W;
                                    }
                                    return W < I;
                                }
                                shiftToLastRow(o) {
                                    const E = this.getLongestRowIndex(o);
                                    const p = o.rowWidth.length - 1;
                                    const m = o.rows[E];
                                    const y = m[m.length - 1];
                                    const S = y.width + o.horizontalPadding;
                                    if (o.width - o.rowWidth[p] > S && E != p) {
                                        m.splice(-1, 1);
                                        o.rows[p].push(y);
                                        o.rowWidth[E] = o.rowWidth[E] - S;
                                        o.rowWidth[p] = o.rowWidth[p] + S;
                                        o.width = o.rowWidth[instance.getLongestRowIndex(o)];
                                        let O = Number.MIN_VALUE;
                                        for(let F = 0; F < m.length; F++){
                                            if (m[F].height > O) {
                                                O = m[F].height;
                                            }
                                        }
                                        if (E > 0) {
                                            O += o.verticalPadding;
                                        }
                                        const W = o.rowHeight[E] + o.rowHeight[p];
                                        o.rowHeight[E] = O;
                                        if (o.rowHeight[p] < y.height + o.verticalPadding) {
                                            o.rowHeight[p] = y.height + o.verticalPadding;
                                        }
                                        const I = o.rowHeight[E] + o.rowHeight[p];
                                        o.height += I - W;
                                        this.shiftToLastRow(o);
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
                                    const o = [];
                                    let p;
                                    for(let E = true; E;){
                                        const m = this.graphManager.getAllNodes();
                                        const y = [];
                                        E = false;
                                        for(let S = 0; S < m.length; S++){
                                            p = m[S];
                                            if (p.getEdges().length == 1 && !p.getEdges()[0].isInterGraph && p.getChild() == null) {
                                                if (n.PURE_INCREMENTAL) {
                                                    const O = p.getEdges()[0].getOtherEnd(p);
                                                    const F = new DimensionD(p.getCenterX() - O.getCenterX(), p.getCenterY() - O.getCenterY());
                                                    y.push([
                                                        p,
                                                        p.getEdges()[0],
                                                        p.getOwner(),
                                                        F
                                                    ]);
                                                } else {
                                                    y.push([
                                                        p,
                                                        p.getEdges()[0],
                                                        p.getOwner()
                                                    ]);
                                                }
                                                E = true;
                                            }
                                        }
                                        if (E == true) {
                                            const W = [];
                                            for(let I = 0; I < y.length; I++){
                                                if (y[I][0].getEdges().length == 1) {
                                                    W.push(y[I]);
                                                    y[I][0].getOwner().remove(y[I][0]);
                                                }
                                            }
                                            o.push(W);
                                            this.graphManager.resetAllNodes();
                                            this.graphManager.resetAllEdges();
                                        }
                                    }
                                    this.prunedNodesAll = o;
                                }
                                growTree(o) {
                                    const o_length = o.length;
                                    let m;
                                    for(let p = o[o_length - 1], y = 0; y < p.length; y++){
                                        m = p[y];
                                        this.findPlaceforPrunedNode(m);
                                        m[2].add(m[0]);
                                        m[2].add(m[1], m[1].source, m[1].target);
                                    }
                                    o.splice(o.length - 1, 1);
                                    this.graphManager.resetAllNodes();
                                    this.graphManager.resetAllEdges();
                                }
                                findPlaceforPrunedNode(o) {
                                    let E;
                                    let p;
                                    const m = o[0];
                                    if (m == o[1].source) {
                                        p = o[1].target;
                                    } else {
                                        p = o[1].source;
                                    }
                                    if (n.PURE_INCREMENTAL) {
                                        m.setCenter(p.getCenterX() + o[3].getWidth(), p.getCenterY() + o[3].getHeight());
                                    } else {
                                        const { startX, finishX, startY, finishY } = p;
                                        const W = 0;
                                        const I = 0;
                                        const Q = 0;
                                        const z = 0;
                                        const X = [
                                            W,
                                            Q,
                                            I,
                                            z
                                        ];
                                        if (startY > 0) {
                                            for(var rt = startX; rt <= finishX; rt++){
                                                X[0] += this.grid[rt][startY - 1].length + this.grid[rt][startY].length - 1;
                                            }
                                        }
                                        if (finishX < this.grid.length - 1) {
                                            for(var rt = startY; rt <= finishY; rt++){
                                                X[1] += this.grid[finishX + 1][rt].length + this.grid[finishX][rt].length - 1;
                                            }
                                        }
                                        if (finishY < this.grid[0].length - 1) {
                                            for(var rt = startX; rt <= finishX; rt++){
                                                X[2] += this.grid[rt][finishY + 1].length + this.grid[rt][finishY].length - 1;
                                            }
                                        }
                                        if (startX > 0) {
                                            for(var rt = startY; rt <= finishY; rt++){
                                                X[3] += this.grid[startX - 1][rt].length + this.grid[startX][rt].length - 1;
                                            }
                                        }
                                        let $ = Integer.MAX_VALUE;
                                        let D;
                                        let H;
                                        for(let k = 0; k < X.length; k++){
                                            if (X[k] < $) {
                                                $ = X[k];
                                                D = 1;
                                                H = k;
                                            } else {
                                                X[k] == $ && D++;
                                            }
                                        }
                                        if (D == 3 && $ == 0) {
                                            if (X[0] == 0 && X[1] == 0 && X[2] == 0) {
                                                E = 1;
                                            } else if (X[0] == 0 && X[1] == 0 && X[3] == 0) {
                                                E = 0;
                                            } else if (X[0] == 0 && X[2] == 0 && X[3] == 0) {
                                                E = 3;
                                            } else if (X[1] == 0 && X[2] == 0 && X[3] == 0) {
                                                E = 2;
                                            }
                                        } else if (D == 2 && $ == 0) {
                                            var tt = Math.floor(Math.random() * 2);
                                            X[0] == 0 && X[1] == 0 ? tt == 0 ? E = 0 : E = 1 : X[0] == 0 && X[2] == 0 ? tt == 0 ? E = 0 : E = 2 : X[0] == 0 && X[3] == 0 ? tt == 0 ? E = 0 : E = 3 : X[1] == 0 && X[2] == 0 ? tt == 0 ? E = 1 : E = 2 : X[1] == 0 && X[3] == 0 ? tt == 0 ? E = 1 : E = 3 : tt == 0 ? E = 2 : E = 3;
                                        } else if (D == 4 && $ == 0) {
                                            var tt = Math.floor(Math.random() * 4);
                                            E = tt;
                                        } else {
                                            E = H;
                                        }
                                        if (E == 0) {
                                            m.setCenter(p.getCenterX(), p.getCenterY() - p.getHeight() / 2 - FDLayoutConstants.DEFAULT_EDGE_LENGTH - m.getHeight() / 2);
                                        } else if (E == 1) {
                                            m.setCenter(p.getCenterX() + p.getWidth() / 2 + FDLayoutConstants.DEFAULT_EDGE_LENGTH + m.getWidth() / 2, p.getCenterY());
                                        } else if (E == 2) {
                                            m.setCenter(p.getCenterX(), p.getCenterY() + p.getHeight() / 2 + FDLayoutConstants.DEFAULT_EDGE_LENGTH + m.getHeight() / 2);
                                        } else {
                                            m.setCenter(p.getCenterX() - p.getWidth() / 2 - FDLayoutConstants.DEFAULT_EDGE_LENGTH - m.getWidth() / 2, p.getCenterY());
                                        }
                                    }
                                }
                            }
                            for(var _ in FDLayout){
                                M[_] = FDLayout[_];
                            }
                            a.exports = M;
                        },
                        991: (a, r, i)=>{
                            var FDLayoutNode = i(551).FDLayoutNode;
                            var IMath = i(551).IMath;
                            class g extends FDLayoutNode {
                                constructor(s, n, c, l){
                                    super(s, n, c, l);
                                }
                                calculateDisplacement() {
                                    const s = this.graphManager.getLayout();
                                    if (this.getChild() != null && this.fixedNodeWeight) {
                                        this.displacementX += s.coolingFactor * (this.springForceX + this.repulsionForceX + this.gravitationForceX) / this.fixedNodeWeight;
                                        this.displacementY += s.coolingFactor * (this.springForceY + this.repulsionForceY + this.gravitationForceY) / this.fixedNodeWeight;
                                    } else {
                                        this.displacementX += s.coolingFactor * (this.springForceX + this.repulsionForceX + this.gravitationForceX) / this.noOfChildren;
                                        this.displacementY += s.coolingFactor * (this.springForceY + this.repulsionForceY + this.gravitationForceY) / this.noOfChildren;
                                    }
                                    if (Math.abs(this.displacementX) > s.coolingFactor * s.maxNodeDisplacement) {
                                        this.displacementX = s.coolingFactor * s.maxNodeDisplacement * IMath.sign(this.displacementX);
                                    }
                                    if (Math.abs(this.displacementY) > s.coolingFactor * s.maxNodeDisplacement) {
                                        this.displacementY = s.coolingFactor * s.maxNodeDisplacement * IMath.sign(this.displacementY);
                                    }
                                    if (this.child && this.child.getNodes().length > 0) {
                                        this.propogateDisplacementToChildren(this.displacementX, this.displacementY);
                                    }
                                }
                                propogateDisplacementToChildren(s, n) {
                                    let l;
                                    for(let c = this.getChild().getNodes(), T = 0; T < c.length; T++){
                                        l = c[T];
                                        if (l.getChild() == null) {
                                            l.displacementX += s;
                                            l.displacementY += n;
                                        } else {
                                            l.propogateDisplacementToChildren(s, n);
                                        }
                                    }
                                }
                                move() {
                                    const s = this.graphManager.getLayout();
                                    if (this.child == null || this.child.getNodes().length == 0) {
                                        this.moveBy(this.displacementX, this.displacementY);
                                        s.totalDisplacement += Math.abs(this.displacementX) + Math.abs(this.displacementY);
                                    }
                                    this.springForceX = 0;
                                    this.springForceY = 0;
                                    this.repulsionForceX = 0;
                                    this.repulsionForceY = 0;
                                    this.gravitationForceX = 0;
                                    this.gravitationForceY = 0;
                                    this.displacementX = 0;
                                    this.displacementY = 0;
                                }
                                setPred1(s) {
                                    this.pred1 = s;
                                }
                                getPred1() {
                                    return pred1;
                                }
                                getPred2() {
                                    return pred2;
                                }
                                setNext(s) {
                                    this.next = s;
                                }
                                getNext() {
                                    return next;
                                }
                                setProcessed(s) {
                                    this.processed = s;
                                }
                                isProcessed() {
                                    return processed;
                                }
                            }
                            for(var t in FDLayoutNode){
                                g[t] = FDLayoutNode[t];
                            }
                            a.exports = g;
                        },
                        902: (a, r, i)=>{
                            function f(c) {
                                if (Array.isArray(c)) {
                                    for(var l = 0, T = Array(c.length); l < c.length; l++){
                                        T[l] = c[l];
                                    }
                                    return T;
                                } else {
                                    return Array.from(c);
                                }
                            }
                            var e = i(806);
                            var LinkedList = i(551).LinkedList;
                            var Matrix = i(551).Matrix;
                            var SVD = i(551).SVD;
                            function n() {}
                            n.handleConstraints = (c)=>{
                                const l = {};
                                l.fixedNodeConstraint = c.constraints.fixedNodeConstraint;
                                l.alignmentConstraint = c.constraints.alignmentConstraint;
                                l.relativePlacementConstraint = c.constraints.relativePlacementConstraint;
                                const T = new Map;
                                const u = new Map;
                                const d = [];
                                const L = [];
                                for(var b = c.getAllNodes(), w = 0, G = 0; G < b.length; G++){
                                    const B = b[G];
                                    if (B.getChild() == null) {
                                        u.set(B.id, w++);
                                        d.push(B.getCenterX());
                                        L.push(B.getCenterY());
                                        T.set(B.id, B);
                                    }
                                }
                                if (l.relativePlacementConstraint) {
                                    l.relativePlacementConstraint.forEach((P)=>{
                                        !P.gap && P.gap != 0 && (P.left ? P.gap = e.DEFAULT_EDGE_LENGTH + T.get(P.left).getWidth() / 2 + T.get(P.right).getWidth() / 2 : P.gap = e.DEFAULT_EDGE_LENGTH + T.get(P.top).getHeight() / 2 + T.get(P.bottom).getHeight() / 2);
                                    });
                                }
                                const U = (Y, Z)=>({
                                        x: Y.x - Z.x,
                                        y: Y.y - Z.y
                                    });
                                const V = (Y)=>{
                                    let Z = 0;
                                    let K = 0;
                                    Y.forEach((q)=>{
                                        Z += d[u.get(q)];
                                        K += L[u.get(q)];
                                    });
                                    return {
                                        x: Z / Y.size,
                                        y: K / Y.size
                                    };
                                };
                                const M = (Y, Z, K, q, at)=>{
                                    function ct(lt, ot) {
                                        const Lt = new Set(lt);
                                        for (const Bt of ot){
                                            Lt.add(Bt);
                                        }
                                        return Lt;
                                    }
                                    const nt = new Map;
                                    Y.forEach((lt, ot)=>{
                                        nt.set(ot, 0);
                                    });
                                    Y.forEach((lt, ot)=>{
                                        lt.forEach((Lt)=>{
                                            nt.set(Lt.id, nt.get(Lt.id) + 1);
                                        });
                                    });
                                    const et = new Map;
                                    const j = new Map;
                                    const dt = new LinkedList;
                                    nt.forEach((lt, ot)=>{
                                        if (lt == 0) {
                                            dt.push(ot);
                                            K || (Z == "horizontal" ? et.set(ot, u.has(ot) ? d[u.get(ot)] : q.get(ot)) : et.set(ot, u.has(ot) ? L[u.get(ot)] : q.get(ot)));
                                        } else {
                                            et.set(ot, Number.NEGATIVE_INFINITY);
                                        }
                                        if (K) {
                                            j.set(ot, new Set([
                                                ot
                                            ]));
                                        }
                                    });
                                    if (K) {
                                        at.forEach((lt)=>{
                                            const ot = [];
                                            lt.forEach((st)=>{
                                                if (K.has(st)) {
                                                    ot.push(st);
                                                }
                                            });
                                            if (ot.length > 0) {
                                                let Lt = 0;
                                                ot.forEach((st)=>{
                                                    if (Z == "horizontal") {
                                                        et.set(st, u.has(st) ? d[u.get(st)] : q.get(st));
                                                        Lt += et.get(st);
                                                    } else {
                                                        et.set(st, u.has(st) ? L[u.get(st)] : q.get(st));
                                                        Lt += et.get(st);
                                                    }
                                                });
                                                Lt = Lt / ot.length;
                                                lt.forEach((st)=>{
                                                    if (!K.has(st)) {
                                                        et.set(st, Lt);
                                                    }
                                                });
                                            } else {
                                                let ft = 0;
                                                lt.forEach((st)=>{
                                                    if (Z == "horizontal") {
                                                        ft += u.has(st) ? d[u.get(st)] : q.get(st);
                                                    } else {
                                                        ft += u.has(st) ? L[u.get(st)] : q.get(st);
                                                    }
                                                });
                                                ft = ft / lt.length;
                                                lt.forEach((st)=>{
                                                    et.set(st, ft);
                                                });
                                            }
                                        });
                                    }
                                    const At = ()=>{
                                        const ot = dt.shift();
                                        const Lt = Y.get(ot);
                                        Lt.forEach((ft)=>{
                                            if (et.get(ft.id) < et.get(ot) + ft.gap) {
                                                if (K && K.has(ft.id)) {
                                                    let st;
                                                    if (Z == "horizontal") {
                                                        st = u.has(ft.id) ? d[u.get(ft.id)] : q.get(ft.id);
                                                    } else {
                                                        st = u.has(ft.id) ? L[u.get(ft.id)] : q.get(ft.id);
                                                    }
                                                    et.set(ft.id, st);
                                                    if (st < et.get(ot) + ft.gap) {
                                                        const Xt = et.get(ot) + ft.gap - st;
                                                        j.get(ot).forEach((Tt)=>{
                                                            et.set(Tt, et.get(Tt) - Xt);
                                                        });
                                                    }
                                                } else {
                                                    et.set(ft.id, et.get(ot) + ft.gap);
                                                }
                                            }
                                            nt.set(ft.id, nt.get(ft.id) - 1);
                                            if (nt.get(ft.id) == 0) {
                                                dt.push(ft.id);
                                            }
                                            if (K) {
                                                j.set(ft.id, ct(j.get(ot), j.get(ft.id)));
                                            }
                                        });
                                    };
                                    while(dt.length != 0){
                                        At();
                                    }
                                    if (K) {
                                        const pt = new Set;
                                        Y.forEach((lt, ot)=>{
                                            if (lt.length == 0) {
                                                pt.add(ot);
                                            }
                                        });
                                        const xt = [];
                                        j.forEach((lt, ot)=>{
                                            if (pt.has(ot)) {
                                                let Lt = false;
                                                for (const Bt of lt){
                                                    if (K.has(Bt)) {
                                                        Lt = true;
                                                    }
                                                }
                                                if (!Lt) {
                                                    let bt = false;
                                                    let zt;
                                                    xt.forEach((St, kt)=>{
                                                        if (St.has([].concat(f(lt))[0])) {
                                                            bt = true;
                                                            zt = kt;
                                                        }
                                                    });
                                                    if (bt) {
                                                        lt.forEach((St)=>{
                                                            xt[zt].add(St);
                                                        });
                                                    } else {
                                                        xt.push(new Set(lt));
                                                    }
                                                }
                                            }
                                        });
                                        xt.forEach((lt, ot)=>{
                                            let Number_POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
                                            let Number_POSITIVE_INFINITY_1 = Number.POSITIVE_INFINITY;
                                            let Number_NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
                                            let Number_NEGATIVE_INFINITY_1 = Number.NEGATIVE_INFINITY;
                                            for (const St of lt){
                                                let kt;
                                                if (Z == "horizontal") {
                                                    kt = u.has(St) ? d[u.get(St)] : q.get(St);
                                                } else {
                                                    kt = u.has(St) ? L[u.get(St)] : q.get(St);
                                                }
                                                const Kt = et.get(St);
                                                if (kt < Number_POSITIVE_INFINITY) {
                                                    Number_POSITIVE_INFINITY = kt;
                                                }
                                                if (kt > Number_NEGATIVE_INFINITY) {
                                                    Number_NEGATIVE_INFINITY = kt;
                                                }
                                                if (Kt < Number_POSITIVE_INFINITY_1) {
                                                    Number_POSITIVE_INFINITY_1 = Kt;
                                                }
                                                if (Kt > Number_NEGATIVE_INFINITY_1) {
                                                    Number_NEGATIVE_INFINITY_1 = Kt;
                                                }
                                            }
                                            const ce = (Number_POSITIVE_INFINITY + Number_NEGATIVE_INFINITY) / 2 - (Number_POSITIVE_INFINITY_1 + Number_NEGATIVE_INFINITY_1) / 2;
                                            for (const te of lt){
                                                et.set(te, et.get(te) + ce);
                                            }
                                        });
                                    }
                                    return et;
                                };
                                const _ = (Y)=>{
                                    let Z = 0;
                                    let K = 0;
                                    let q = 0;
                                    let at = 0;
                                    Y.forEach((j)=>{
                                        j.left ? d[u.get(j.left)] - d[u.get(j.right)] >= 0 ? Z++ : K++ : L[u.get(j.top)] - L[u.get(j.bottom)] >= 0 ? q++ : at++;
                                    });
                                    if (Z > K && q > at) {
                                        for(let ct = 0; ct < u.size; ct++){
                                            d[ct] = -1 * d[ct];
                                            L[ct] = -1 * L[ct];
                                        }
                                    } else if (Z > K) {
                                        for(let nt = 0; nt < u.size; nt++){
                                            d[nt] = -1 * d[nt];
                                        }
                                    } else if (q > at) {
                                        for(let et = 0; et < u.size; et++){
                                            L[et] = -1 * L[et];
                                        }
                                    }
                                };
                                const o = (Y)=>{
                                    const Z = [];
                                    const K = new LinkedList;
                                    const q = new Set;
                                    let at = 0;
                                    Y.forEach((ct, nt)=>{
                                        if (!q.has(nt)) {
                                            Z[at] = [];
                                            let et = nt;
                                            K.push(et);
                                            q.add(et);
                                            Z[at].push(et);
                                            while(K.length != 0){
                                                et = K.shift();
                                                const j = Y.get(et);
                                                j.forEach((dt)=>{
                                                    if (!q.has(dt.id)) {
                                                        K.push(dt.id);
                                                        q.add(dt.id);
                                                        Z[at].push(dt.id);
                                                    }
                                                });
                                            }
                                            at++;
                                        }
                                    });
                                    return Z;
                                };
                                const E = (Y)=>{
                                    const Z = new Map;
                                    Y.forEach((K, q)=>{
                                        Z.set(q, []);
                                    });
                                    Y.forEach((K, q)=>{
                                        K.forEach((at)=>{
                                            Z.get(q).push(at);
                                            Z.get(at.id).push({
                                                id: q,
                                                gap: at.gap,
                                                direction: at.direction
                                            });
                                        });
                                    });
                                    return Z;
                                };
                                const p = (Y)=>{
                                    const Z = new Map;
                                    Y.forEach((K, q)=>{
                                        Z.set(q, []);
                                    });
                                    Y.forEach((K, id)=>{
                                        K.forEach((at)=>{
                                            Z.get(at.id).push({
                                                id,
                                                gap: at.gap,
                                                direction: at.direction
                                            });
                                        });
                                    });
                                    return Z;
                                };
                                const m = [];
                                const y = [];
                                let S = false;
                                let O = false;
                                const F = new Set;
                                const W = new Map;
                                let I = new Map;
                                let Q = [];
                                if (l.fixedNodeConstraint) {
                                    l.fixedNodeConstraint.forEach((P)=>{
                                        F.add(P.nodeId);
                                    });
                                }
                                if (l.relativePlacementConstraint) {
                                    l.relativePlacementConstraint.forEach((P)=>{
                                        P.left ? (W.has(P.left) ? W.get(P.left).push({
                                            id: P.right,
                                            gap: P.gap,
                                            direction: "horizontal"
                                        }) : W.set(P.left, [
                                            {
                                                id: P.right,
                                                gap: P.gap,
                                                direction: "horizontal"
                                            }
                                        ]), W.has(P.right) || W.set(P.right, [])) : (W.has(P.top) ? W.get(P.top).push({
                                            id: P.bottom,
                                            gap: P.gap,
                                            direction: "vertical"
                                        }) : W.set(P.top, [
                                            {
                                                id: P.bottom,
                                                gap: P.gap,
                                                direction: "vertical"
                                            }
                                        ]), W.has(P.bottom) || W.set(P.bottom, []));
                                    });
                                    I = E(W);
                                    Q = o(I);
                                }
                                if (e.TRANSFORM_ON_CONSTRAINT_HANDLING) {
                                    if (l.fixedNodeConstraint && l.fixedNodeConstraint.length > 1) {
                                        l.fixedNodeConstraint.forEach((P, Y)=>{
                                            m[Y] = [
                                                P.position.x,
                                                P.position.y
                                            ];
                                            y[Y] = [
                                                d[u.get(P.nodeId)],
                                                L[u.get(P.nodeId)]
                                            ];
                                        });
                                        S = true;
                                    } else if (l.alignmentConstraint) {
                                        (()=>{
                                            let P = 0;
                                            if (l.alignmentConstraint.vertical) {
                                                for(var Y = l.alignmentConstraint.vertical, Z = (et)=>{
                                                    const j = new Set;
                                                    Y[et].forEach((pt)=>{
                                                        j.add(pt);
                                                    });
                                                    const dt = new Set([].concat(f(j)).filter((pt)=>F.has(pt)));
                                                    let At;
                                                    if (dt.size > 0) {
                                                        At = d[u.get(dt.values().next().value)];
                                                    } else {
                                                        At = V(j).x;
                                                    }
                                                    Y[et].forEach((pt)=>{
                                                        m[P] = [
                                                            At,
                                                            L[u.get(pt)]
                                                        ];
                                                        y[P] = [
                                                            d[u.get(pt)],
                                                            L[u.get(pt)]
                                                        ];
                                                        P++;
                                                    });
                                                }, K = 0; K < Y.length; K++){
                                                    Z(K);
                                                }
                                                S = true;
                                            }
                                            if (l.alignmentConstraint.horizontal) {
                                                for(var q = l.alignmentConstraint.horizontal, at = (et)=>{
                                                    const j = new Set;
                                                    q[et].forEach((pt)=>{
                                                        j.add(pt);
                                                    });
                                                    const dt = new Set([].concat(f(j)).filter((pt)=>F.has(pt)));
                                                    let At;
                                                    if (dt.size > 0) {
                                                        At = d[u.get(dt.values().next().value)];
                                                    } else {
                                                        At = V(j).y;
                                                    }
                                                    q[et].forEach((pt)=>{
                                                        m[P] = [
                                                            d[u.get(pt)],
                                                            At
                                                        ];
                                                        y[P] = [
                                                            d[u.get(pt)],
                                                            L[u.get(pt)]
                                                        ];
                                                        P++;
                                                    });
                                                }, ct = 0; ct < q.length; ct++){
                                                    at(ct);
                                                }
                                                S = true;
                                            }
                                            if (l.relativePlacementConstraint) {
                                                O = true;
                                            }
                                        })();
                                    } else if (l.relativePlacementConstraint) {
                                        let z = 0;
                                        let X = 0;
                                        for(let rt = 0; rt < Q.length; rt++){
                                            if (Q[rt].length > z) {
                                                z = Q[rt].length;
                                                X = rt;
                                            }
                                        }
                                        if (z < I.size / 2) {
                                            _(l.relativePlacementConstraint);
                                            S = false;
                                            O = false;
                                        } else {
                                            const $ = new Map;
                                            const D = new Map;
                                            const H = [];
                                            Q[X].forEach((P)=>{
                                                W.get(P).forEach((Y)=>{
                                                    if (Y.direction == "horizontal") {
                                                        if ($.has(P)) {
                                                            $.get(P).push(Y);
                                                        } else {
                                                            $.set(P, [
                                                                Y
                                                            ]);
                                                        }
                                                        if (!$.has(Y.id)) {
                                                            $.set(Y.id, []);
                                                        }
                                                        H.push({
                                                            left: P,
                                                            right: Y.id
                                                        });
                                                    } else {
                                                        if (D.has(P)) {
                                                            D.get(P).push(Y);
                                                        } else {
                                                            D.set(P, [
                                                                Y
                                                            ]);
                                                        }
                                                        if (!D.has(Y.id)) {
                                                            D.set(Y.id, []);
                                                        }
                                                        H.push({
                                                            top: P,
                                                            bottom: Y.id
                                                        });
                                                    }
                                                });
                                            });
                                            _(H);
                                            O = false;
                                            const k = M($, "horizontal");
                                            const tt = M(D, "vertical");
                                            Q[X].forEach((P, Y)=>{
                                                y[Y] = [
                                                    d[u.get(P)],
                                                    L[u.get(P)]
                                                ];
                                                m[Y] = [];
                                                if (k.has(P)) {
                                                    m[Y][0] = k.get(P);
                                                } else {
                                                    m[Y][0] = d[u.get(P)];
                                                }
                                                if (tt.has(P)) {
                                                    m[Y][1] = tt.get(P);
                                                } else {
                                                    m[Y][1] = L[u.get(P)];
                                                }
                                            });
                                            S = true;
                                        }
                                    }
                                    if (S) {
                                        let ht;
                                        for(var J = Matrix.transpose(m), It = Matrix.transpose(y), Nt = 0; Nt < J.length; Nt++){
                                            J[Nt] = Matrix.multGamma(J[Nt]);
                                            It[Nt] = Matrix.multGamma(It[Nt]);
                                        }
                                        const vt = Matrix.multMat(J, Matrix.transpose(It));
                                        const it = SVD.svd(vt);
                                        ht = Matrix.multMat(it.V, Matrix.transpose(it.U));
                                        for(let ut = 0; ut < u.size; ut++){
                                            const Et = [
                                                d[ut],
                                                L[ut]
                                            ];
                                            const wt = [
                                                ht[0][0],
                                                ht[1][0]
                                            ];
                                            const Ot = [
                                                ht[0][1],
                                                ht[1][1]
                                            ];
                                            d[ut] = Matrix.dotProduct(Et, wt);
                                            L[ut] = Matrix.dotProduct(Et, Ot);
                                        }
                                        if (O) {
                                            _(l.relativePlacementConstraint);
                                        }
                                    }
                                }
                                if (e.ENFORCE_CONSTRAINTS) {
                                    if (l.fixedNodeConstraint && l.fixedNodeConstraint.length > 0) {
                                        const mt = {
                                            x: 0,
                                            y: 0
                                        };
                                        l.fixedNodeConstraint.forEach((P, Y)=>{
                                            const Z = {
                                                x: d[u.get(P.nodeId)],
                                                y: L[u.get(P.nodeId)]
                                            };
                                            const P_position = P.position;
                                            const q = U(P_position, Z);
                                            mt.x += q.x;
                                            mt.y += q.y;
                                        });
                                        mt.x /= l.fixedNodeConstraint.length;
                                        mt.y /= l.fixedNodeConstraint.length;
                                        d.forEach((P, Y)=>{
                                            d[Y] += mt.x;
                                        });
                                        L.forEach((P, Y)=>{
                                            L[Y] += mt.y;
                                        });
                                        l.fixedNodeConstraint.forEach((P)=>{
                                            d[u.get(P.nodeId)] = P.position.x;
                                            L[u.get(P.nodeId)] = P.position.y;
                                        });
                                    }
                                    if (l.alignmentConstraint) {
                                        if (l.alignmentConstraint.vertical) {
                                            for(var Dt = l.alignmentConstraint.vertical, Rt = (Y)=>{
                                                const Z = new Set;
                                                Dt[Y].forEach((at)=>{
                                                    Z.add(at);
                                                });
                                                const K = new Set([].concat(f(Z)).filter((at)=>F.has(at)));
                                                let q;
                                                if (K.size > 0) {
                                                    q = d[u.get(K.values().next().value)];
                                                } else {
                                                    q = V(Z).x;
                                                }
                                                Z.forEach((at)=>{
                                                    if (!F.has(at)) {
                                                        d[u.get(at)] = q;
                                                    }
                                                });
                                            }, Ht = 0; Ht < Dt.length; Ht++){
                                                Rt(Ht);
                                            }
                                        }
                                        if (l.alignmentConstraint.horizontal) {
                                            for(var Ut = l.alignmentConstraint.horizontal, Pt = (Y)=>{
                                                const Z = new Set;
                                                Ut[Y].forEach((at)=>{
                                                    Z.add(at);
                                                });
                                                const K = new Set([].concat(f(Z)).filter((at)=>F.has(at)));
                                                let q;
                                                if (K.size > 0) {
                                                    q = L[u.get(K.values().next().value)];
                                                } else {
                                                    q = V(Z).y;
                                                }
                                                Z.forEach((at)=>{
                                                    if (!F.has(at)) {
                                                        L[u.get(at)] = q;
                                                    }
                                                });
                                            }, Ft = 0; Ft < Ut.length; Ft++){
                                                Pt(Ft);
                                            }
                                        }
                                    }
                                    if (l.relativePlacementConstraint) {
                                        (()=>{
                                            const P = new Map;
                                            const Y = new Map;
                                            const Z = new Map;
                                            const K = new Map;
                                            const q = new Map;
                                            const at = new Map;
                                            const ct = new Set;
                                            const nt = new Set;
                                            F.forEach((Gt)=>{
                                                ct.add(Gt);
                                                nt.add(Gt);
                                            });
                                            if (l.alignmentConstraint) {
                                                if (l.alignmentConstraint.vertical) {
                                                    for(var et = l.alignmentConstraint.vertical, j = (yt)=>{
                                                        Z.set(`dummy${yt}`, []);
                                                        et[yt].forEach((Mt)=>{
                                                            P.set(Mt, `dummy${yt}`);
                                                            Z.get(`dummy${yt}`).push(Mt);
                                                            if (F.has(Mt)) {
                                                                ct.add(`dummy${yt}`);
                                                            }
                                                        });
                                                        q.set(`dummy${yt}`, d[u.get(et[yt][0])]);
                                                    }, dt = 0; dt < et.length; dt++){
                                                        j(dt);
                                                    }
                                                }
                                                if (l.alignmentConstraint.horizontal) {
                                                    for(var At = l.alignmentConstraint.horizontal, pt = (yt)=>{
                                                        K.set(`dummy${yt}`, []);
                                                        At[yt].forEach((Mt)=>{
                                                            Y.set(Mt, `dummy${yt}`);
                                                            K.get(`dummy${yt}`).push(Mt);
                                                            if (F.has(Mt)) {
                                                                nt.add(`dummy${yt}`);
                                                            }
                                                        });
                                                        at.set(`dummy${yt}`, L[u.get(At[yt][0])]);
                                                    }, xt = 0; xt < At.length; xt++){
                                                        pt(xt);
                                                    }
                                                }
                                            }
                                            const lt = new Map;
                                            const ot = new Map;
                                            const Lt = (yt)=>{
                                                W.get(yt).forEach((Mt)=>{
                                                    let Zt;
                                                    let $t;
                                                    if (Mt.direction == "horizontal") {
                                                        Zt = P.get(yt) ? P.get(yt) : yt;
                                                        if (P.get(Mt.id)) {
                                                            $t = {
                                                                id: P.get(Mt.id),
                                                                gap: Mt.gap,
                                                                direction: Mt.direction
                                                            };
                                                        } else {
                                                            $t = Mt;
                                                        }
                                                        if (lt.has(Zt)) {
                                                            lt.get(Zt).push($t);
                                                        } else {
                                                            lt.set(Zt, [
                                                                $t
                                                            ]);
                                                        }
                                                        if (!lt.has($t.id)) {
                                                            lt.set($t.id, []);
                                                        }
                                                    } else {
                                                        Zt = Y.get(yt) ? Y.get(yt) : yt;
                                                        if (Y.get(Mt.id)) {
                                                            $t = {
                                                                id: Y.get(Mt.id),
                                                                gap: Mt.gap,
                                                                direction: Mt.direction
                                                            };
                                                        } else {
                                                            $t = Mt;
                                                        }
                                                        if (ot.has(Zt)) {
                                                            ot.get(Zt).push($t);
                                                        } else {
                                                            ot.set(Zt, [
                                                                $t
                                                            ]);
                                                        }
                                                        if (!ot.has($t.id)) {
                                                            ot.set($t.id, []);
                                                        }
                                                    }
                                                });
                                            };
                                            for (const Bt of W.keys()){
                                                Lt(Bt);
                                            }
                                            const bt = E(lt);
                                            const zt = E(ot);
                                            const St = o(bt);
                                            const kt = o(zt);
                                            const Kt = p(lt);
                                            const ce = p(ot);
                                            const Qt = [];
                                            const jt = [];
                                            St.forEach((Gt, yt)=>{
                                                Qt[yt] = [];
                                                Gt.forEach((Mt)=>{
                                                    if (Kt.get(Mt).length == 0) {
                                                        Qt[yt].push(Mt);
                                                    }
                                                });
                                            });
                                            kt.forEach((Gt, yt)=>{
                                                jt[yt] = [];
                                                Gt.forEach((Mt)=>{
                                                    if (ce.get(Mt).length == 0) {
                                                        jt[yt].push(Mt);
                                                    }
                                                });
                                            });
                                            const _t = M(lt, "horizontal", ct, q, Qt);
                                            const Jt = M(ot, "vertical", nt, at, jt);
                                            const oe = (yt)=>{
                                                if (Z.get(yt)) {
                                                    Z.get(yt).forEach((Mt)=>{
                                                        d[u.get(Mt)] = _t.get(yt);
                                                    });
                                                } else {
                                                    d[u.get(yt)] = _t.get(yt);
                                                }
                                            };
                                            for (var ue of _t.keys()){
                                                oe(ue);
                                            }
                                            const ke = (yt)=>{
                                                if (K.get(yt)) {
                                                    K.get(yt).forEach((Mt)=>{
                                                        L[u.get(Mt)] = Jt.get(yt);
                                                    });
                                                } else {
                                                    L[u.get(yt)] = Jt.get(yt);
                                                }
                                            };
                                            for (var ue of Jt.keys()){
                                                ke(ue);
                                            }
                                        })();
                                    }
                                }
                                for (const Vt of b){
                                    if (Vt.getChild() == null) {
                                        Vt.setCenter(d[u.get(Vt.id)], L[u.get(Vt.id)]);
                                    }
                                }
                            };
                            a.exports = n;
                        },
                        551: (a)=>{
                            a.exports = C;
                        }
                    };
                    var N = {};
                    function v(a) {
                        const r = N[a];
                        if (r !== undefined) {
                            return r.exports;
                        }
                        const i = N[a] = {
                            exports: {}
                        };
                        R[a](i, i.exports, v);
                        return i.exports;
                    }
                    var h = v(45);
                    return h;
                })();
            });
        })(le);
    }
    return le.exports;
}
const he_exports = he.exports;
let xe;
function mr() {
    if (!xe) {
        xe = 1;
        ((x, A)=>{
            ((he_exports_1, N)=>{
                x.exports = N(pr());
            })(he_exports, (C)=>(()=>{
                    var R = {
                        658: (a)=>{
                            a.exports = Object.assign != null ? Object.assign.bind(Object) : (r, ...f)=>{
                                f.forEach((g)=>{
                                    Object.keys(g).forEach((t)=>r[t] = g[t]);
                                });
                                return r;
                            };
                        },
                        548: (a, r, i)=>{
                            var f = (()=>{
                                function t(s, n) {
                                    const c = [];
                                    let l = true;
                                    let T = false;
                                    let u;
                                    try {
                                        for(var d = s[Symbol.iterator](), L; !(l = (L = d.next()).done) && (c.push(L.value), !(n && c.length === n)); l = true);
                                    } catch (error) {
                                        T = true;
                                        u = error;
                                    } finally{
                                        try {
                                            if (!l && d.return) {
                                                d.return();
                                            }
                                        } finally{
                                            if (T) {
                                                throw u;
                                            }
                                        }
                                    }
                                    return c;
                                }
                                return (s, n)=>{
                                    if (Array.isArray(s)) {
                                        return s;
                                    }
                                    if (Symbol.iterator in Object(s)) {
                                        return t(s, n);
                                    }
                                    throw new TypeError("Invalid attempt to destructure non-iterable instance");
                                };
                            })();
                            var LinkedList = i(140).layoutBase.LinkedList;
                            var g = {};
                            g.getTopMostNodes = (t)=>{
                                const s = {};
                                for(let n = 0; n < t.length; n++){
                                    s[t[n].id()] = true;
                                }
                                const c = t.filter((l, T)=>{
                                    if (typeof l === "number") {
                                        l = T;
                                    }
                                    for(let u = l.parent()[0]; u != null;){
                                        if (s[u.id()]) {
                                            return false;
                                        }
                                        u = u.parent()[0];
                                    }
                                    return true;
                                });
                                return c;
                            };
                            g.connectComponents = (t, s, n, c)=>{
                                const l = new LinkedList;
                                const T = new Set;
                                let u = [];
                                let d;
                                let L;
                                let b;
                                let w = false;
                                let G = 1;
                                const B = [];
                                const U = [];
                                const V = ()=>{
                                    const _ = t.collection();
                                    U.push(_);
                                    let o = n[0];
                                    const E = t.collection();
                                    E.merge(o).merge(o.descendants().intersection(s));
                                    u.push(o);
                                    E.forEach((y)=>{
                                        l.push(y);
                                        T.add(y);
                                        _.merge(y);
                                    });
                                    const p = ()=>{
                                        o = l.shift();
                                        const S = t.collection();
                                        o.neighborhood().nodes().forEach((I)=>{
                                            if (s.intersection(o.edgesWith(I)).length > 0) {
                                                S.merge(I);
                                            }
                                        });
                                        for (const F of S){
                                            d = n.intersection(F.union(F.ancestors()));
                                            if (d != null && !T.has(d[0])) {
                                                const W = d.union(d.descendants());
                                                W.forEach((I)=>{
                                                    l.push(I);
                                                    T.add(I);
                                                    _.merge(I);
                                                    if (n.has(I)) {
                                                        u.push(I);
                                                    }
                                                });
                                            }
                                        }
                                    };
                                    while(l.length != 0){
                                        p();
                                    }
                                    _.forEach((y)=>{
                                        s.intersection(y.connectedEdges()).forEach((S)=>{
                                            if (_.has(S.source()) && _.has(S.target())) {
                                                _.merge(S);
                                            }
                                        });
                                    });
                                    if (u.length == n.length) {
                                        w = true;
                                    }
                                    if (!w || w && G > 1) {
                                        L = u[0];
                                        b = L.connectedEdges().length;
                                        u.forEach((y)=>{
                                            if (y.connectedEdges().length < b) {
                                                b = y.connectedEdges().length;
                                                L = y;
                                            }
                                        });
                                        B.push(L.id());
                                        const m = t.collection();
                                        m.merge(u[0]);
                                        u.forEach((y)=>{
                                            m.merge(y);
                                        });
                                        u = [];
                                        n = n.difference(m);
                                        G++;
                                    }
                                };
                                do {
                                    V();
                                }while (!w)
                                if (c && B.length > 0) {
                                    c.set(`dummy${c.size + 1}`, B);
                                }
                                return U;
                            };
                            g.relocateComponent = (t, s, n)=>{
                                if (!n.fixedNodeConstraint) {
                                    let c = Number.POSITIVE_INFINITY;
                                    let l = Number.NEGATIVE_INFINITY;
                                    let T = Number.POSITIVE_INFINITY;
                                    let u = Number.NEGATIVE_INFINITY;
                                    if (n.quality == "draft") {
                                        for (const B of s.nodeIndexes){
                                            const U = f(B, 2);
                                            const V = U[0];
                                            const M = U[1];
                                            const _ = n.cy.getElementById(V);
                                            if (_) {
                                                const o = _.boundingBox();
                                                const E = s.xCoords[M] - o.w / 2;
                                                const p = s.xCoords[M] + o.w / 2;
                                                const m = s.yCoords[M] - o.h / 2;
                                                const y = s.yCoords[M] + o.h / 2;
                                                if (E < c) {
                                                    c = E;
                                                }
                                                if (p > l) {
                                                    l = p;
                                                }
                                                if (m < T) {
                                                    T = m;
                                                }
                                                if (y > u) {
                                                    u = y;
                                                }
                                            }
                                        }
                                        const S = t.x - (l + c) / 2;
                                        const O = t.y - (u + T) / 2;
                                        s.xCoords = s.xCoords.map((I)=>I + S);
                                        s.yCoords = s.yCoords.map((I)=>I + O);
                                    } else {
                                        Object.keys(s).forEach((I)=>{
                                            const Q = s[I];
                                            const z = Q.getRect().x;
                                            const X = Q.getRect().x + Q.getRect().width;
                                            const rt = Q.getRect().y;
                                            const $ = Q.getRect().y + Q.getRect().height;
                                            if (z < c) {
                                                c = z;
                                            }
                                            if (X > l) {
                                                l = X;
                                            }
                                            if (rt < T) {
                                                T = rt;
                                            }
                                            if ($ > u) {
                                                u = $;
                                            }
                                        });
                                        const F = t.x - (l + c) / 2;
                                        const W = t.y - (u + T) / 2;
                                        Object.keys(s).forEach((I)=>{
                                            const Q = s[I];
                                            Q.setCenter(Q.getCenterX() + F, Q.getCenterY() + W);
                                        });
                                    }
                                }
                            };
                            g.calcBoundingBox = (t, s, n, c)=>{
                                let Number_MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER;
                                let Number_MIN_SAFE_INTEGER = Number.MIN_SAFE_INTEGER;
                                let Number_MAX_SAFE_INTEGER_1 = Number.MAX_SAFE_INTEGER;
                                let Number_MIN_SAFE_INTEGER_1 = Number.MIN_SAFE_INTEGER;
                                let L;
                                let b;
                                let w;
                                let G;
                                const B = t.descendants().not(":parent");
                                for(let U = B.length, V = 0; V < U; V++){
                                    const M = B[V];
                                    L = s[c.get(M.id())] - M.width() / 2;
                                    b = s[c.get(M.id())] + M.width() / 2;
                                    w = n[c.get(M.id())] - M.height() / 2;
                                    G = n[c.get(M.id())] + M.height() / 2;
                                    if (Number_MAX_SAFE_INTEGER > L) {
                                        Number_MAX_SAFE_INTEGER = L;
                                    }
                                    if (Number_MIN_SAFE_INTEGER < b) {
                                        Number_MIN_SAFE_INTEGER = b;
                                    }
                                    if (Number_MAX_SAFE_INTEGER_1 > w) {
                                        Number_MAX_SAFE_INTEGER_1 = w;
                                    }
                                    if (Number_MIN_SAFE_INTEGER_1 < G) {
                                        Number_MIN_SAFE_INTEGER_1 = G;
                                    }
                                }
                                const _ = {};
                                _.topLeftX = Number_MAX_SAFE_INTEGER;
                                _.topLeftY = Number_MAX_SAFE_INTEGER_1;
                                _.width = Number_MIN_SAFE_INTEGER - Number_MAX_SAFE_INTEGER;
                                _.height = Number_MIN_SAFE_INTEGER_1 - Number_MAX_SAFE_INTEGER_1;
                                return _;
                            };
                            g.calcParentsWithoutChildren = (t, s)=>{
                                const n = t.collection();
                                s.nodes(":parent").forEach((c)=>{
                                    let l = false;
                                    c.children().forEach((T)=>{
                                        if (T.css("display") != "none") {
                                            l = true;
                                        }
                                    });
                                    if (!l) {
                                        n.merge(c);
                                    }
                                });
                                return n;
                            };
                            a.exports = g;
                        },
                        816: (a, r, i)=>{
                            var f = i(548);
                            var CoSELayout = i(140).CoSELayout;
                            var CoSENode = i(140).CoSENode;
                            var PointD = i(140).layoutBase.PointD;
                            var DimensionD = i(140).layoutBase.DimensionD;
                            var LayoutConstants = i(140).layoutBase.LayoutConstants;
                            var FDLayoutConstants = i(140).layoutBase.FDLayoutConstants;
                            var CoSEConstants = i(140).CoSEConstants;
                            var coseLayout = (d, L)=>{
                                const { cy, eles } = d;
                                const G = eles.nodes();
                                const B = eles.edges();
                                let U;
                                let V;
                                let M;
                                const _ = {};
                                if (d.randomize) {
                                    U = L.nodeIndexes;
                                    V = L.xCoords;
                                    M = L.yCoords;
                                }
                                const o = (I)=>typeof I === "function";
                                const E = (I, Q)=>{
                                    if (o(I)) {
                                        return I(Q);
                                    }
                                    return I;
                                };
                                const p = f.calcParentsWithoutChildren(cy, eles);
                                const m = function W(I, Q, z, X) {
                                    for(let rt = Q.length, $ = 0; $ < rt; $++){
                                        const D = Q[$];
                                        let H = null;
                                        if (D.intersection(p).length == 0) {
                                            H = D.children();
                                        }
                                        let k;
                                        const tt = D.layoutDimensions({
                                            nodeDimensionsIncludeLabels: X.nodeDimensionsIncludeLabels
                                        });
                                        if (D.outerWidth() != null && D.outerHeight() != null) {
                                            if (X.randomize) {
                                                if (!D.isParent()) {
                                                    k = I.add(new CoSENode(z.graphManager, new PointD(V[U.get(D.id())] - tt.w / 2, M[U.get(D.id())] - tt.h / 2), new DimensionD(parseFloat(tt.w), parseFloat(tt.h))));
                                                } else {
                                                    const ht = f.calcBoundingBox(D, V, M, U);
                                                    if (D.intersection(p).length == 0) {
                                                        k = I.add(new CoSENode(z.graphManager, new PointD(ht.topLeftX, ht.topLeftY), new DimensionD(ht.width, ht.height)));
                                                    } else {
                                                        k = I.add(new CoSENode(z.graphManager, new PointD(ht.topLeftX, ht.topLeftY), new DimensionD(parseFloat(tt.w), parseFloat(tt.h))));
                                                    }
                                                }
                                            } else {
                                                k = I.add(new CoSENode(z.graphManager, new PointD(D.position("x") - tt.w / 2, D.position("y") - tt.h / 2), new DimensionD(parseFloat(tt.w), parseFloat(tt.h))));
                                            }
                                        } else {
                                            k = I.add(new CoSENode(this.graphManager));
                                        }
                                        k.id = D.data("id");
                                        k.nodeRepulsion = E(X.nodeRepulsion, D);
                                        k.paddingLeft = parseInt(D.css("padding"));
                                        k.paddingTop = parseInt(D.css("padding"));
                                        k.paddingRight = parseInt(D.css("padding"));
                                        k.paddingBottom = parseInt(D.css("padding"));
                                        if (X.nodeDimensionsIncludeLabels) {
                                            k.labelWidth = D.boundingBox({
                                                includeLabels: true,
                                                includeNodes: false,
                                                includeOverlays: false
                                            }).w;
                                            k.labelHeight = D.boundingBox({
                                                includeLabels: true,
                                                includeNodes: false,
                                                includeOverlays: false
                                            }).h;
                                            k.labelPosVertical = D.css("text-valign");
                                            k.labelPosHorizontal = D.css("text-halign");
                                        }
                                        _[D.data("id")] = k;
                                        if (isNaN(k.rect.x)) {
                                            k.rect.x = 0;
                                        }
                                        if (isNaN(k.rect.y)) {
                                            k.rect.y = 0;
                                        }
                                        if (H != null && H.length > 0) {
                                            let J;
                                            J = z.getGraphManager().add(z.newGraph(), k);
                                            W(J, H, z, X);
                                        }
                                    }
                                };
                                const y = (I, Q, z)=>{
                                    let X = 0;
                                    let rt = 0;
                                    for (const D of z){
                                        const H = _[D.data("source")];
                                        const k = _[D.data("target")];
                                        if (H && k && H !== k && H.getEdgesBetween(k).length == 0) {
                                            const tt = Q.add(I.newEdge(), H, k);
                                            tt.id = D.id();
                                            tt.idealLength = E(d.idealEdgeLength, D);
                                            tt.edgeElasticity = E(d.edgeElasticity, D);
                                            X += tt.idealLength;
                                            rt++;
                                        }
                                    }
                                    if (d.idealEdgeLength != null) {
                                        if (rt > 0) {
                                            CoSEConstants.DEFAULT_EDGE_LENGTH = FDLayoutConstants.DEFAULT_EDGE_LENGTH = X / rt;
                                        } else if (o(d.idealEdgeLength)) {
                                            CoSEConstants.DEFAULT_EDGE_LENGTH = FDLayoutConstants.DEFAULT_EDGE_LENGTH = 50;
                                        } else {
                                            CoSEConstants.DEFAULT_EDGE_LENGTH = FDLayoutConstants.DEFAULT_EDGE_LENGTH = d.idealEdgeLength;
                                        }
                                        CoSEConstants.MIN_REPULSION_DIST = FDLayoutConstants.MIN_REPULSION_DIST = FDLayoutConstants.DEFAULT_EDGE_LENGTH / 10;
                                        CoSEConstants.DEFAULT_RADIAL_SEPARATION = FDLayoutConstants.DEFAULT_EDGE_LENGTH;
                                    }
                                };
                                const S = (I, Q)=>{
                                    if (Q.fixedNodeConstraint) {
                                        I.constraints.fixedNodeConstraint = Q.fixedNodeConstraint;
                                    }
                                    if (Q.alignmentConstraint) {
                                        I.constraints.alignmentConstraint = Q.alignmentConstraint;
                                    }
                                    if (Q.relativePlacementConstraint) {
                                        I.constraints.relativePlacementConstraint = Q.relativePlacementConstraint;
                                    }
                                };
                                if (d.nestingFactor != null) {
                                    CoSEConstants.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = FDLayoutConstants.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = d.nestingFactor;
                                }
                                if (d.gravity != null) {
                                    CoSEConstants.DEFAULT_GRAVITY_STRENGTH = FDLayoutConstants.DEFAULT_GRAVITY_STRENGTH = d.gravity;
                                }
                                if (d.numIter != null) {
                                    CoSEConstants.MAX_ITERATIONS = FDLayoutConstants.MAX_ITERATIONS = d.numIter;
                                }
                                if (d.gravityRange != null) {
                                    CoSEConstants.DEFAULT_GRAVITY_RANGE_FACTOR = FDLayoutConstants.DEFAULT_GRAVITY_RANGE_FACTOR = d.gravityRange;
                                }
                                if (d.gravityCompound != null) {
                                    CoSEConstants.DEFAULT_COMPOUND_GRAVITY_STRENGTH = FDLayoutConstants.DEFAULT_COMPOUND_GRAVITY_STRENGTH = d.gravityCompound;
                                }
                                if (d.gravityRangeCompound != null) {
                                    CoSEConstants.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = FDLayoutConstants.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = d.gravityRangeCompound;
                                }
                                if (d.initialEnergyOnIncremental != null) {
                                    CoSEConstants.DEFAULT_COOLING_FACTOR_INCREMENTAL = FDLayoutConstants.DEFAULT_COOLING_FACTOR_INCREMENTAL = d.initialEnergyOnIncremental;
                                }
                                if (d.tilingCompareBy != null) {
                                    CoSEConstants.TILING_COMPARE_BY = d.tilingCompareBy;
                                }
                                if (d.quality == "proof") {
                                    LayoutConstants.QUALITY = 2;
                                } else {
                                    LayoutConstants.QUALITY = 0;
                                }
                                CoSEConstants.NODE_DIMENSIONS_INCLUDE_LABELS = FDLayoutConstants.NODE_DIMENSIONS_INCLUDE_LABELS = LayoutConstants.NODE_DIMENSIONS_INCLUDE_LABELS = d.nodeDimensionsIncludeLabels;
                                CoSEConstants.DEFAULT_INCREMENTAL = FDLayoutConstants.DEFAULT_INCREMENTAL = LayoutConstants.DEFAULT_INCREMENTAL = !d.randomize;
                                CoSEConstants.ANIMATE = FDLayoutConstants.ANIMATE = LayoutConstants.ANIMATE = d.animate;
                                CoSEConstants.TILE = d.tile;
                                CoSEConstants.TILING_PADDING_VERTICAL = typeof d.tilingPaddingVertical === "function" ? d.tilingPaddingVertical.call() : d.tilingPaddingVertical;
                                CoSEConstants.TILING_PADDING_HORIZONTAL = typeof d.tilingPaddingHorizontal === "function" ? d.tilingPaddingHorizontal.call() : d.tilingPaddingHorizontal;
                                CoSEConstants.DEFAULT_INCREMENTAL = FDLayoutConstants.DEFAULT_INCREMENTAL = LayoutConstants.DEFAULT_INCREMENTAL = true;
                                CoSEConstants.PURE_INCREMENTAL = !d.randomize;
                                LayoutConstants.DEFAULT_UNIFORM_LEAF_NODE_SIZES = d.uniformNodeDimensions;
                                if (d.step == "transformed") {
                                    CoSEConstants.TRANSFORM_ON_CONSTRAINT_HANDLING = true;
                                    CoSEConstants.ENFORCE_CONSTRAINTS = false;
                                    CoSEConstants.APPLY_LAYOUT = false;
                                }
                                if (d.step == "enforced") {
                                    CoSEConstants.TRANSFORM_ON_CONSTRAINT_HANDLING = false;
                                    CoSEConstants.ENFORCE_CONSTRAINTS = true;
                                    CoSEConstants.APPLY_LAYOUT = false;
                                }
                                if (d.step == "cose") {
                                    CoSEConstants.TRANSFORM_ON_CONSTRAINT_HANDLING = false;
                                    CoSEConstants.ENFORCE_CONSTRAINTS = false;
                                    CoSEConstants.APPLY_LAYOUT = true;
                                }
                                if (d.step == "all") {
                                    if (d.randomize) {
                                        CoSEConstants.TRANSFORM_ON_CONSTRAINT_HANDLING = true;
                                    } else {
                                        CoSEConstants.TRANSFORM_ON_CONSTRAINT_HANDLING = false;
                                    }
                                    CoSEConstants.ENFORCE_CONSTRAINTS = true;
                                    CoSEConstants.APPLY_LAYOUT = true;
                                }
                                if (d.fixedNodeConstraint || d.alignmentConstraint || d.relativePlacementConstraint) {
                                    CoSEConstants.TREE_REDUCTION_ON_INCREMENTAL = false;
                                } else {
                                    CoSEConstants.TREE_REDUCTION_ON_INCREMENTAL = true;
                                }
                                const O = new CoSELayout;
                                const F = O.newGraphManager();
                                m(F.addRoot(), f.getTopMostNodes(G), O, d);
                                y(O, F, B);
                                S(O, d);
                                O.runLayout();
                                return _;
                            };
                            a.exports = {
                                coseLayout
                            };
                        },
                        212: (a, r, i)=>{
                            var f = (()=>{
                                function d(L, b) {
                                    for (const G of b){
                                        G.enumerable = G.enumerable || false;
                                        G.configurable = true;
                                        if ("value" in G) {
                                            G.writable = true;
                                        }
                                        Object.defineProperty(L, G.key, G);
                                    }
                                }
                                return (L, b, w)=>{
                                    if (b) {
                                        d(L.prototype, b);
                                    }
                                    if (w) {
                                        d(L, w);
                                    }
                                    return L;
                                };
                            })();
                            function e(d, L) {
                                if (!(d instanceof L)) {
                                    throw new TypeError("Cannot call a class as a function");
                                }
                            }
                            var g = i(658);
                            var t = i(548);
                            var s = i(657);
                            var s_spectralLayout = s.spectralLayout;
                            var c = i(816);
                            var c_coseLayout = c.coseLayout;
                            var T = Object.freeze({
                                quality: "default",
                                randomize: true,
                                animate: true,
                                animationDuration: 1000,
                                animationEasing: undefined,
                                fit: true,
                                padding: 30,
                                nodeDimensionsIncludeLabels: false,
                                uniformNodeDimensions: false,
                                packComponents: true,
                                step: "all",
                                samplingType: true,
                                sampleSize: 25,
                                nodeSeparation: 75,
                                piTol: 1e-7,
                                nodeRepulsion (L) {
                                    return 4500;
                                },
                                idealEdgeLength (L) {
                                    return 50;
                                },
                                edgeElasticity (L) {
                                    return 0.45;
                                },
                                nestingFactor: 0.1,
                                gravity: 0.25,
                                numIter: 2500,
                                tile: true,
                                tilingCompareBy: undefined,
                                tilingPaddingVertical: 10,
                                tilingPaddingHorizontal: 10,
                                gravityRangeCompound: 1.5,
                                gravityCompound: 1,
                                gravityRange: 3.8,
                                initialEnergyOnIncremental: 0.3,
                                fixedNodeConstraint: undefined,
                                alignmentConstraint: undefined,
                                relativePlacementConstraint: undefined,
                                ready () {},
                                stop () {}
                            });
                            var u = (()=>{
                                function d(L) {
                                    e(this, d);
                                    this.options = g({}, T, L);
                                }
                                f(d, [
                                    {
                                        key: "run",
                                        value () {
                                            const b = this;
                                            const options = this.options;
                                            const { cy, eles } = options;
                                            const U = [];
                                            const V = [];
                                            let M;
                                            const _ = [];
                                            if (options.fixedNodeConstraint && (!Array.isArray(options.fixedNodeConstraint) || options.fixedNodeConstraint.length == 0)) {
                                                options.fixedNodeConstraint = undefined;
                                            }
                                            options.alignmentConstraint && (options.alignmentConstraint.vertical && (!Array.isArray(options.alignmentConstraint.vertical) || options.alignmentConstraint.vertical.length == 0) && (options.alignmentConstraint.vertical = undefined), options.alignmentConstraint.horizontal && (!Array.isArray(options.alignmentConstraint.horizontal) || options.alignmentConstraint.horizontal.length == 0) && (options.alignmentConstraint.horizontal = undefined));
                                            if (options.relativePlacementConstraint && (!Array.isArray(options.relativePlacementConstraint) || options.relativePlacementConstraint.length == 0)) {
                                                options.relativePlacementConstraint = undefined;
                                            }
                                            const o = options.fixedNodeConstraint || options.alignmentConstraint || options.relativePlacementConstraint;
                                            if (o) {
                                                options.tile = false;
                                                options.packComponents = false;
                                            }
                                            let E;
                                            let p = false;
                                            if (cy.layoutUtilities && options.packComponents) {
                                                E = cy.layoutUtilities("get");
                                                if (!E) {
                                                    E = cy.layoutUtilities();
                                                }
                                                p = true;
                                            }
                                            if (eles.nodes().length > 0) {
                                                if (p) {
                                                    const S = t.getTopMostNodes(options.eles.nodes());
                                                    M = t.connectComponents(cy, options.eles, S);
                                                    M.forEach((vt)=>{
                                                        const it = vt.boundingBox();
                                                        _.push({
                                                            x: it.x1 + it.w / 2,
                                                            y: it.y1 + it.h / 2
                                                        });
                                                    });
                                                    if (options.randomize) {
                                                        M.forEach((vt)=>{
                                                            options.eles = vt;
                                                            U.push(s_spectralLayout(options));
                                                        });
                                                    }
                                                    if (options.quality == "default" || options.quality == "proof") {
                                                        const O = cy.collection();
                                                        if (options.tile) {
                                                            const nodeIndexes = new Map;
                                                            const xCoords = [];
                                                            const yCoords = [];
                                                            let Q = 0;
                                                            const z = {
                                                                nodeIndexes,
                                                                xCoords,
                                                                yCoords
                                                            };
                                                            const X = [];
                                                            M.forEach((vt, it)=>{
                                                                if (vt.edges().length == 0) {
                                                                    vt.nodes().forEach((ut, Et)=>{
                                                                        O.merge(vt.nodes()[Et]);
                                                                        if (!ut.isParent()) {
                                                                            z.nodeIndexes.set(vt.nodes()[Et].id(), Q++);
                                                                            z.xCoords.push(vt.nodes()[0].position().x);
                                                                            z.yCoords.push(vt.nodes()[0].position().y);
                                                                        }
                                                                    });
                                                                    X.push(it);
                                                                }
                                                            });
                                                            if (O.length > 1) {
                                                                const rt = O.boundingBox();
                                                                _.push({
                                                                    x: rt.x1 + rt.w / 2,
                                                                    y: rt.y1 + rt.h / 2
                                                                });
                                                                M.push(O);
                                                                U.push(z);
                                                                for(let $ = X.length - 1; $ >= 0; $--){
                                                                    M.splice(X[$], 1);
                                                                    U.splice(X[$], 1);
                                                                    _.splice(X[$], 1);
                                                                }
                                                            }
                                                        }
                                                        M.forEach((vt, it)=>{
                                                            options.eles = vt;
                                                            V.push(c_coseLayout(options, U[it]));
                                                            t.relocateComponent(_[it], V[it], options);
                                                        });
                                                    } else {
                                                        M.forEach((vt, it)=>{
                                                            t.relocateComponent(_[it], U[it], options);
                                                        });
                                                    }
                                                    const D = new Set;
                                                    if (M.length > 1) {
                                                        const H = [];
                                                        const k = eles.filter((vt)=>vt.css("display") == "none");
                                                        M.forEach((vt, it)=>{
                                                            let ut;
                                                            if (options.quality == "draft") {
                                                                ut = U[it].nodeIndexes;
                                                            }
                                                            if (vt.nodes().not(k).length > 0) {
                                                                const Et = {};
                                                                Et.edges = [];
                                                                Et.nodes = [];
                                                                let wt;
                                                                vt.nodes().not(k).forEach((Ot)=>{
                                                                    if (options.quality == "draft") {
                                                                        if (!Ot.isParent()) {
                                                                            wt = ut.get(Ot.id());
                                                                            Et.nodes.push({
                                                                                x: U[it].xCoords[wt] - Ot.boundingbox().w / 2,
                                                                                y: U[it].yCoords[wt] - Ot.boundingbox().h / 2,
                                                                                width: Ot.boundingbox().w,
                                                                                height: Ot.boundingbox().h
                                                                            });
                                                                        } else {
                                                                            const mt = t.calcBoundingBox(Ot, U[it].xCoords, U[it].yCoords, ut);
                                                                            Et.nodes.push({
                                                                                x: mt.topLeftX,
                                                                                y: mt.topLeftY,
                                                                                width: mt.width,
                                                                                height: mt.height
                                                                            });
                                                                        }
                                                                    } else {
                                                                        if (V[it][Ot.id()]) {
                                                                            Et.nodes.push({
                                                                                x: V[it][Ot.id()].getLeft(),
                                                                                y: V[it][Ot.id()].getTop(),
                                                                                width: V[it][Ot.id()].getWidth(),
                                                                                height: V[it][Ot.id()].getHeight()
                                                                            });
                                                                        }
                                                                    }
                                                                });
                                                                vt.edges().forEach((Ot)=>{
                                                                    const mt = Ot.source();
                                                                    const Dt = Ot.target();
                                                                    if (mt.css("display") != "none" && Dt.css("display") != "none") {
                                                                        if (options.quality == "draft") {
                                                                            const Rt = ut.get(mt.id());
                                                                            const Ht = ut.get(Dt.id());
                                                                            const Ut = [];
                                                                            const Pt = [];
                                                                            if (mt.isParent()) {
                                                                                const Ft = t.calcBoundingBox(mt, U[it].xCoords, U[it].yCoords, ut);
                                                                                Ut.push(Ft.topLeftX + Ft.width / 2);
                                                                                Ut.push(Ft.topLeftY + Ft.height / 2);
                                                                            } else {
                                                                                Ut.push(U[it].xCoords[Rt]);
                                                                                Ut.push(U[it].yCoords[Rt]);
                                                                            }
                                                                            if (Dt.isParent()) {
                                                                                const Yt = t.calcBoundingBox(Dt, U[it].xCoords, U[it].yCoords, ut);
                                                                                Pt.push(Yt.topLeftX + Yt.width / 2);
                                                                                Pt.push(Yt.topLeftY + Yt.height / 2);
                                                                            } else {
                                                                                Pt.push(U[it].xCoords[Ht]);
                                                                                Pt.push(U[it].yCoords[Ht]);
                                                                            }
                                                                            Et.edges.push({
                                                                                startX: Ut[0],
                                                                                startY: Ut[1],
                                                                                endX: Pt[0],
                                                                                endY: Pt[1]
                                                                            });
                                                                        } else {
                                                                            if (V[it][mt.id()] && V[it][Dt.id()]) {
                                                                                Et.edges.push({
                                                                                    startX: V[it][mt.id()].getCenterX(),
                                                                                    startY: V[it][mt.id()].getCenterY(),
                                                                                    endX: V[it][Dt.id()].getCenterX(),
                                                                                    endY: V[it][Dt.id()].getCenterY()
                                                                                });
                                                                            }
                                                                        }
                                                                    }
                                                                });
                                                                if (Et.nodes.length > 0) {
                                                                    H.push(Et);
                                                                    D.add(it);
                                                                }
                                                            }
                                                        });
                                                        const tt = E.packComponents(H, options.randomize).shifts;
                                                        if (options.quality == "draft") {
                                                            U.forEach((vt, it)=>{
                                                                const ut = vt.xCoords.map((wt)=>wt + tt[it].dx);
                                                                const Et = vt.yCoords.map((wt)=>wt + tt[it].dy);
                                                                vt.xCoords = ut;
                                                                vt.yCoords = Et;
                                                            });
                                                        } else {
                                                            let ht = 0;
                                                            D.forEach((vt)=>{
                                                                Object.keys(V[vt]).forEach((it)=>{
                                                                    const ut = V[vt][it];
                                                                    ut.setCenter(ut.getCenterX() + tt[ht].dx, ut.getCenterY() + tt[ht].dy);
                                                                });
                                                                ht++;
                                                            });
                                                        }
                                                    }
                                                } else {
                                                    const m = options.eles.boundingBox();
                                                    _.push({
                                                        x: m.x1 + m.w / 2,
                                                        y: m.y1 + m.h / 2
                                                    });
                                                    if (options.randomize) {
                                                        const y = s_spectralLayout(options);
                                                        U.push(y);
                                                    }
                                                    if (options.quality == "default" || options.quality == "proof") {
                                                        V.push(c_coseLayout(options, U[0]));
                                                        t.relocateComponent(_[0], V[0], options);
                                                    } else {
                                                        t.relocateComponent(_[0], U[0], options);
                                                    }
                                                }
                                            }
                                            const J = (it, ut)=>{
                                                if (options.quality == "default" || options.quality == "proof") {
                                                    if (typeof it === "number") {
                                                        it = ut;
                                                    }
                                                    let Et;
                                                    let wt;
                                                    const Ot = it.data("id");
                                                    V.forEach((Dt)=>{
                                                        if (Ot in Dt) {
                                                            Et = {
                                                                x: Dt[Ot].getRect().getCenterX(),
                                                                y: Dt[Ot].getRect().getCenterY()
                                                            };
                                                            wt = Dt[Ot];
                                                        }
                                                    });
                                                    options.nodeDimensionsIncludeLabels && (wt.labelWidth && (wt.labelPosHorizontal == "left" ? Et.x += wt.labelWidth / 2 : wt.labelPosHorizontal == "right" && (Et.x -= wt.labelWidth / 2)), wt.labelHeight && (wt.labelPosVertical == "top" ? Et.y += wt.labelHeight / 2 : wt.labelPosVertical == "bottom" && (Et.y -= wt.labelHeight / 2)));
                                                    if (Et == null) {
                                                        Et = {
                                                            x: it.position("x"),
                                                            y: it.position("y")
                                                        };
                                                    }
                                                    return {
                                                        x: Et.x,
                                                        y: Et.y
                                                    };
                                                } else {
                                                    let mt;
                                                    U.forEach((Dt)=>{
                                                        const Rt = Dt.nodeIndexes.get(it.id());
                                                        if (Rt != null) {
                                                            mt = {
                                                                x: Dt.xCoords[Rt],
                                                                y: Dt.yCoords[Rt]
                                                            };
                                                        }
                                                    });
                                                    if (mt == null) {
                                                        mt = {
                                                            x: it.position("x"),
                                                            y: it.position("y")
                                                        };
                                                    }
                                                    return {
                                                        x: mt.x,
                                                        y: mt.y
                                                    };
                                                }
                                            };
                                            if (options.quality == "default" || options.quality == "proof" || options.randomize) {
                                                const It = t.calcParentsWithoutChildren(cy, eles);
                                                const Nt = eles.filter((vt)=>vt.css("display") == "none");
                                                options.eles = eles.not(Nt);
                                                eles.nodes().not(":parent").not(Nt).layoutPositions(b, options, J);
                                                if (It.length > 0) {
                                                    It.forEach((vt)=>{
                                                        vt.position(J(vt));
                                                    });
                                                }
                                            } else {
                                                console.log("If randomize option is set to false, then quality option must be 'default' or 'proof'.");
                                            }
                                        }
                                    }
                                ]);
                                return d;
                            })();
                            a.exports = u;
                        },
                        657: (a, r, i)=>{
                            var f = i(548);
                            var Matrix = i(140).layoutBase.Matrix;
                            var SVD = i(140).layoutBase.SVD;
                            var spectralLayout = (n)=>{
                                const { cy, eles } = n;
                                const T = eles.nodes();
                                const u = eles.nodes(":parent");
                                const d = new Map;
                                const nodeIndexes = new Map;
                                const b = new Map;
                                const w = [];
                                let xCoords = [];
                                let yCoords = [];
                                const U = [];
                                const V = [];
                                const M = [];
                                const _ = [];
                                let o = [];
                                let E;
                                const p = 100000000;
                                const m = 1e-9;
                                const { piTol, samplingType, nodeSeparation } = n;
                                let F;
                                const W = ()=>{
                                    let Y = 0;
                                    for(let Z = 0, K = false; Z < F;){
                                        Y = Math.floor(Math.random() * E);
                                        K = false;
                                        for(let q = 0; q < Z; q++){
                                            if (U[q] == Y) {
                                                K = true;
                                                break;
                                            }
                                        }
                                        if (!K) {
                                            U[Z] = Y;
                                            Z++;
                                        } else {
                                            continue;
                                        }
                                    }
                                };
                                const I = (Y, Z, samplingType)=>{
                                    const q = [];
                                    let at = 0;
                                    let ct = 0;
                                    let nt = 0;
                                    let et;
                                    const j = [];
                                    let dt = 0;
                                    let At = 1;
                                    for(let pt = 0; pt < E; pt++){
                                        j[pt] = p;
                                    }
                                    q[ct] = Y;
                                    for(j[Y] = 0; ct >= at;){
                                        nt = q[at++];
                                        for(let xt = w[nt], lt = 0; lt < xt.length; lt++){
                                            et = nodeIndexes.get(xt[lt]);
                                            if (j[et] == p) {
                                                j[et] = j[nt] + 1;
                                                q[++ct] = et;
                                            }
                                        }
                                        M[nt][Z] = j[nt] * nodeSeparation;
                                    }
                                    if (samplingType) {
                                        for(let ot = 0; ot < E; ot++){
                                            if (M[ot][Z] < V[ot]) {
                                                V[ot] = M[ot][Z];
                                            }
                                        }
                                        for(let Lt = 0; Lt < E; Lt++){
                                            if (V[Lt] > dt) {
                                                dt = V[Lt];
                                                At = Lt;
                                            }
                                        }
                                    }
                                    return At;
                                };
                                const Q = (samplingType)=>{
                                    let Z;
                                    if (samplingType) {
                                        Z = Math.floor(Math.random() * E);
                                        for(let q = 0; q < E; q++){
                                            V[q] = p;
                                        }
                                        for(let at = 0; at < F; at++){
                                            U[at] = Z;
                                            Z = I(Z, at, samplingType);
                                        }
                                    } else {
                                        W();
                                        for(let K = 0; K < F; K++){
                                            I(U[K], K, samplingType);
                                        }
                                    }
                                    for(let ct = 0; ct < E; ct++){
                                        for(let nt = 0; nt < F; nt++){
                                            M[ct][nt] *= M[ct][nt];
                                        }
                                    }
                                    for(let et = 0; et < F; et++){
                                        _[et] = [];
                                    }
                                    for(let j = 0; j < F; j++){
                                        for(let dt = 0; dt < F; dt++){
                                            _[j][dt] = M[U[dt]][j];
                                        }
                                    }
                                };
                                const z = ()=>{
                                    const Y = SVD.svd(_);
                                    const { S, U, V } = Y;
                                    const at = S[0] * S[0] * S[0];
                                    const ct = [];
                                    for(let nt = 0; nt < F; nt++){
                                        ct[nt] = [];
                                        for(let et = 0; et < F; et++){
                                            ct[nt][et] = 0;
                                            if (nt == et) {
                                                ct[nt][et] = S[nt] / (S[nt] * S[nt] + at / (S[nt] * S[nt]));
                                            }
                                        }
                                    }
                                    o = Matrix.multMat(Matrix.multMat(V, ct), Matrix.transpose(U));
                                };
                                const X = ()=>{
                                    let Y;
                                    let Z;
                                    let K = [];
                                    let q = [];
                                    const at = [];
                                    let ct = [];
                                    for(let nt = 0; nt < E; nt++){
                                        K[nt] = Math.random();
                                        q[nt] = Math.random();
                                    }
                                    K = Matrix.normalize(K);
                                    q = Matrix.normalize(q);
                                    let et = m;
                                    let j = m;
                                    let dt;
                                    while(true){
                                        for(let At = 0; At < E; At++){
                                            at[At] = K[At];
                                        }
                                        K = Matrix.multGamma(Matrix.multL(Matrix.multGamma(at), M, o));
                                        Y = Matrix.dotProduct(at, K);
                                        K = Matrix.normalize(K);
                                        et = Matrix.dotProduct(at, K);
                                        dt = Math.abs(et / j);
                                        if (dt <= 1 + piTol && dt >= 1) {
                                            break;
                                        }
                                        j = et;
                                    }
                                    for(let pt = 0; pt < E; pt++){
                                        at[pt] = K[pt];
                                    }
                                    for(j = m;;){
                                        for(let xt = 0; xt < E; xt++){
                                            ct[xt] = q[xt];
                                        }
                                        ct = Matrix.minusOp(ct, Matrix.multCons(at, Matrix.dotProduct(at, ct)));
                                        q = Matrix.multGamma(Matrix.multL(Matrix.multGamma(ct), M, o));
                                        Z = Matrix.dotProduct(ct, q);
                                        q = Matrix.normalize(q);
                                        et = Matrix.dotProduct(ct, q);
                                        dt = Math.abs(et / j);
                                        if (dt <= 1 + piTol && dt >= 1) {
                                            break;
                                        }
                                        j = et;
                                    }
                                    for(let lt = 0; lt < E; lt++){
                                        ct[lt] = q[lt];
                                    }
                                    xCoords = Matrix.multCons(at, Math.sqrt(Math.abs(Y)));
                                    yCoords = Matrix.multCons(ct, Math.sqrt(Math.abs(Z)));
                                };
                                f.connectComponents(cy, eles, f.getTopMostNodes(T), d);
                                u.forEach((P)=>{
                                    f.connectComponents(cy, eles, f.getTopMostNodes(P.descendants().intersection(eles)), d);
                                });
                                let rt = 0;
                                for(let $ = 0; $ < T.length; $++){
                                    if (!T[$].isParent()) {
                                        nodeIndexes.set(T[$].id(), rt++);
                                    }
                                }
                                for (const J of d.keys()){
                                    nodeIndexes.set(J, rt++);
                                }
                                for(let It = 0; It < nodeIndexes.size; It++){
                                    w[It] = [];
                                }
                                u.forEach((P)=>{
                                    for(var Y = P.children().intersection(eles); Y.nodes(":childless").length == 0;){
                                        Y = Y.nodes()[0].children().intersection(eles);
                                    }
                                    let Z = 0;
                                    let length = Y.nodes(":childless")[0].connectedEdges().length;
                                    Y.nodes(":childless").forEach((q, at)=>{
                                        if (q.connectedEdges().length < length) {
                                            length = q.connectedEdges().length;
                                            Z = at;
                                        }
                                    });
                                    b.set(P.id(), Y.nodes(":childless")[Z].id());
                                });
                                T.forEach((P)=>{
                                    let Y;
                                    if (P.isParent()) {
                                        Y = nodeIndexes.get(b.get(P.id()));
                                    } else {
                                        Y = nodeIndexes.get(P.id());
                                    }
                                    P.neighborhood().nodes().forEach((Z)=>{
                                        eles.intersection(P.edgesWith(Z)).length > 0 && (Z.isParent() ? w[Y].push(b.get(Z.id())) : w[Y].push(Z.id()));
                                    });
                                });
                                const Nt = (Y)=>{
                                    const Z = nodeIndexes.get(Y);
                                    let K;
                                    d.get(Y).forEach((q)=>{
                                        if (cy.getElementById(q).isParent()) {
                                            K = b.get(q);
                                        } else {
                                            K = q;
                                        }
                                        w[Z].push(K);
                                        w[nodeIndexes.get(K)].push(Y);
                                    });
                                };
                                for (const Ot of d.keys()){
                                    Nt(Ot);
                                }
                                E = nodeIndexes.size;
                                let mt;
                                if (E > 2) {
                                    F = E < n.sampleSize ? E : n.sampleSize;
                                    for(let Dt = 0; Dt < E; Dt++){
                                        M[Dt] = [];
                                    }
                                    for(let Rt = 0; Rt < F; Rt++){
                                        o[Rt] = [];
                                    }
                                    if (n.quality == "draft" || n.step == "all") {
                                        Q(samplingType);
                                        z();
                                        X();
                                        mt = {
                                            nodeIndexes,
                                            xCoords,
                                            yCoords
                                        };
                                    } else {
                                        nodeIndexes.forEach((P, Y)=>{
                                            xCoords.push(cy.getElementById(Y).position("x"));
                                            yCoords.push(cy.getElementById(Y).position("y"));
                                        });
                                        mt = {
                                            nodeIndexes,
                                            xCoords,
                                            yCoords
                                        };
                                    }
                                    return mt;
                                } else {
                                    const Ht = nodeIndexes.keys();
                                    const Ut = cy.getElementById(Ht.next().value);
                                    const Pt = Ut.position();
                                    const Ft = Ut.outerWidth();
                                    xCoords.push(Pt.x);
                                    yCoords.push(Pt.y);
                                    if (E == 2) {
                                        const Yt = cy.getElementById(Ht.next().value);
                                        const Vt = Yt.outerWidth();
                                        xCoords.push(Pt.x + Ft / 2 + Vt / 2 + n.idealEdgeLength);
                                        yCoords.push(Pt.y);
                                    }
                                    mt = {
                                        nodeIndexes,
                                        xCoords,
                                        yCoords
                                    };
                                    return mt;
                                }
                            };
                            a.exports = {
                                spectralLayout
                            };
                        },
                        579: (a, r, i)=>{
                            var f = i(212);
                            var e = (t)=>{
                                if (t) {
                                    t("layout", "fcose", f);
                                }
                            };
                            if (typeof cytoscape !== "undefined") {
                                e(cytoscape);
                            }
                            a.exports = e;
                        },
                        140: (a)=>{
                            a.exports = C;
                        }
                    };
                    var N = {};
                    function v(a) {
                        const r = N[a];
                        if (r !== undefined) {
                            return r.exports;
                        }
                        const i = N[a] = {
                            exports: {}
                        };
                        R[a](i, i.exports, v);
                        return i.exports;
                    }
                    var h = v(579);
                    return h;
                })());
        })(he);
    }
    return he.exports;
}
const Er = mr();
const Tr = a4(Er);
const Ie = {
    L: "left",
    R: "right",
    T: "top",
    B: "bottom"
};
const Re = {
    L: _((x)=>`${x},${x / 2} 0,${x} 0,0`, "L"),
    R: _((x)=>`0,${x / 2} ${x},0 ${x},${x}`, "R"),
    T: _((x)=>`0,0 ${x},0 ${x / 2},${x}`, "T"),
    B: _((x)=>`${x / 2},0 ${x},${x} 0,${x}`, "B")
};
const se = {
    L: _((x, A)=>x - A + 2, "L"),
    R: _((x, A)=>x - 2, "R"),
    T: _((x, A)=>x - A + 2, "T"),
    B: _((x, A)=>x - 2, "B")
};
const Nr = _((x)=>{
    if (Wt(x)) {
        if (x === "L") {
            return "R";
        }
        return "L";
    }
    if (x === "T") {
        return "B";
    }
    return "T";
}, "getOppositeArchitectureDirection");
const Se = _((x)=>{
    const A = x;
    return A === "L" || A === "R" || A === "T" || A === "B";
}, "isArchitectureDirection");
var Wt = _((x)=>{
    const A = x;
    return A === "L" || A === "R";
}, "isArchitectureDirectionX");
const qt = _((x)=>{
    const A = x;
    return A === "T" || A === "B";
}, "isArchitectureDirectionY");
const Ne = _((x, A)=>{
    const C = Wt(x) && qt(A);
    const R = qt(x) && Wt(A);
    return C || R;
}, "isArchitectureDirectionXY");
const Lr = _(([A, C])=>{
    const R = Wt(A) && qt(C);
    const N = qt(A) && Wt(C);
    return R || N;
}, "isArchitecturePairXY");
const Cr = _((x)=>x !== "LL" && x !== "RR" && x !== "TT" && x !== "BB", "isValidArchitectureDirectionPair");
const ye = _((x, A)=>{
    const C = `${x}${A}`;
    if (Cr(C)) {
        return C;
    }
}, "getArchitectureDirectionPair");
const wr = _(([x, A], C)=>{
    const R = C[0];
    const N = C[1];
    if (Wt(R)) {
        if (qt(N)) {
            return [
                x + (R === "L" ? -1 : 1),
                A + (N === "T" ? 1 : -1)
            ];
        }
        return [
            x + (R === "L" ? -1 : 1),
            A
        ];
    }
    if (Wt(N)) {
        return [
            x + (N === "L" ? 1 : -1),
            A + (R === "T" ? 1 : -1)
        ];
    }
    return [
        x,
        A + (R === "T" ? 1 : -1)
    ];
}, "shiftPositionByArchitectureDirectionPair");
const Ar = _((x)=>{
    if (x === "LT" || x === "TL") {
        return [
            1,
            1
        ];
    }
    if (x === "BL" || x === "LB") {
        return [
            1,
            -1
        ];
    }
    if (x === "BR" || x === "RB") {
        return [
            -1,
            -1
        ];
    }
    return [
        -1,
        1
    ];
}, "getArchitectureDirectionXYFactors");
const Mr = _((x, A)=>{
    if (Ne(x, A)) {
        return "bend";
    }
    if (Wt(x)) {
        return "horizontal";
    }
    return "vertical";
}, "getArchitectureDirectionAlignment");
const Or = _((x)=>x.type === "service", "isArchitectureService");
const Dr = _((x)=>x.type === "junction", "isArchitectureJunction");
const Pe = _((x)=>x.data(), "edgeData");
const ie = _((x)=>x.data(), "nodeData");
const D_architecture = D.architecture;
const ae = class {
    constructor(){
        this.nodes = {};
        this.groups = {};
        this.edges = [];
        this.layoutHints = [];
        this.registeredIds = {};
        this.elements = {};
        this.diagramId = "";
        this.setAccTitle = b;
        this.getAccTitle = a;
        this.setDiagramTitle = o;
        this.getDiagramTitle = p_1;
        this.getAccDescription = g;
        this.setAccDescription = s;
        this.clear();
    }
    setDiagramId(A) {
        this.diagramId = A;
    }
    getDiagramId() {
        return this.diagramId;
    }
    clear() {
        this.nodes = {};
        this.groups = {};
        this.edges = [];
        this.layoutHints = [];
        this.registeredIds = {};
        this.dataStructures = undefined;
        this.elements = {};
        this.diagramId = "";
        q();
    }
    addService({ id, icon, in: _in, title, iconText }) {
        if (this.registeredIds[id] !== undefined) {
            throw new Error(`The service id [${id}] is already in use by another ${this.registeredIds[id]}`);
        }
        if (_in !== undefined) {
            if (id === _in) {
                throw new Error(`The service [${id}] cannot be placed within itself`);
            }
            if (this.registeredIds[_in] === undefined) {
                throw new Error(`The service [${id}]'s parent does not exist. Please make sure the parent is created before this service`);
            }
            if (this.registeredIds[_in] === "node") {
                throw new Error(`The service [${id}]'s parent is not a group`);
            }
        }
        this.registeredIds[id] = "node";
        this.nodes[id] = {
            id,
            type: "service",
            icon,
            iconText,
            title,
            edges: [],
            in: _in
        };
    }
    getServices() {
        return Object.values(this.nodes).filter(Or);
    }
    addJunction({ id, in: _in }) {
        if (this.registeredIds[id] !== undefined) {
            throw new Error(`The junction id [${id}] is already in use by another ${this.registeredIds[id]}`);
        }
        if (_in !== undefined) {
            if (id === _in) {
                throw new Error(`The junction [${id}] cannot be placed within itself`);
            }
            if (this.registeredIds[_in] === undefined) {
                throw new Error(`The junction [${id}]'s parent does not exist. Please make sure the parent is created before this junction`);
            }
            if (this.registeredIds[_in] === "node") {
                throw new Error(`The junction [${id}]'s parent is not a group`);
            }
        }
        this.registeredIds[id] = "node";
        this.nodes[id] = {
            id,
            type: "junction",
            edges: [],
            in: _in
        };
    }
    getJunctions() {
        return Object.values(this.nodes).filter(Dr);
    }
    getNodes() {
        return Object.values(this.nodes);
    }
    getNode(A) {
        return this.nodes[A] ?? null;
    }
    addGroup({ id, icon, in: _in, title }) {
        if (this.registeredIds?.[id] !== undefined) {
            throw new Error(`The group id [${id}] is already in use by another ${this.registeredIds[id]}`);
        }
        if (_in !== undefined) {
            if (id === _in) {
                throw new Error(`The group [${id}] cannot be placed within itself`);
            }
            if (this.registeredIds?.[_in] === undefined) {
                throw new Error(`The group [${id}]'s parent does not exist. Please make sure the parent is created before this group`);
            }
            if (this.registeredIds?.[_in] === "node") {
                throw new Error(`The group [${id}]'s parent is not a group`);
            }
        }
        this.registeredIds[id] = "group";
        this.groups[id] = {
            id,
            icon,
            title,
            in: _in
        };
    }
    getGroups() {
        return Object.values(this.groups);
    }
    addEdge({ lhsId, rhsId, lhsDir, rhsDir, lhsInto, rhsInto, lhsGroup, rhsGroup, title }) {
        if (!Se(lhsDir)) {
            throw new Error(`Invalid direction given for left hand side of edge ${lhsId}--${rhsId}. Expected (L,R,T,B) got ${String(lhsDir)}`);
        }
        if (!Se(rhsDir)) {
            throw new Error(`Invalid direction given for right hand side of edge ${lhsId}--${rhsId}. Expected (L,R,T,B) got ${String(rhsDir)}`);
        }
        if (this.nodes[lhsId] === undefined && this.groups[lhsId] === undefined) {
            throw new Error(`The left-hand id [${lhsId}] does not yet exist. Please create the service/group before declaring an edge to it.`);
        }
        if (this.nodes[rhsId] === undefined && this.groups[rhsId] === undefined) {
            throw new Error(`The right-hand id [${rhsId}] does not yet exist. Please create the service/group before declaring an edge to it.`);
        }
        const f = this.nodes[lhsId].in;
        const e = this.nodes[rhsId].in;
        if (lhsGroup && f && e && f == e) {
            throw new Error(`The left-hand id [${lhsId}] is modified to traverse the group boundary, but the edge does not pass through two groups.`);
        }
        if (rhsGroup && f && e && f == e) {
            throw new Error(`The right-hand id [${rhsId}] is modified to traverse the group boundary, but the edge does not pass through two groups.`);
        }
        const g = {
            lhsId,
            lhsDir,
            lhsInto,
            lhsGroup,
            rhsId,
            rhsDir,
            rhsInto,
            rhsGroup,
            title
        };
        this.edges.push(g);
        if (this.nodes[lhsId] && this.nodes[rhsId]) {
            this.nodes[lhsId].edges.push(this.edges[this.edges.length - 1]);
            this.nodes[rhsId].edges.push(this.edges[this.edges.length - 1]);
        }
    }
    getEdges() {
        return this.edges;
    }
    addLayoutHint(A) {
        if (A.members.length < 2) {
            throw new Error(`An align directive requires at least two members; got ${A.members.length}`);
        }
        const C = new Set;
        A.members.forEach((R)=>{
            if (this.registeredIds[R] !== "node") {
                throw new Error(`align ${A.direction} references [${R}], which is not a service or junction`);
            }
            if (C.has(R)) {
                throw new Error(`align ${A.direction} lists [${R}] more than once`);
            }
            C.add(R);
        });
        this.layoutHints.push(A);
    }
    getLayoutHints() {
        return this.layoutHints;
    }
    getDataStructures() {
        if (this.dataStructures === undefined) {
            const groupAlignments = {};
            const adjList = Object.entries(this.nodes).reduce((acc, [i, f])=>{
                acc[i] = f.edges.reduce((acc_1, edge)=>{
                    const t = this.getNode(edge.lhsId)?.in;
                    const s = this.getNode(edge.rhsId)?.in;
                    if (t && s && t !== s) {
                        const n = Mr(edge.lhsDir, edge.rhsDir);
                        if (n !== "bend") {
                            groupAlignments[t] ??= {};
                            groupAlignments[t][s] = n;
                            groupAlignments[s] ??= {};
                            groupAlignments[s][t] = n;
                        }
                    }
                    if (edge.lhsId === i) {
                        const n = ye(edge.lhsDir, edge.rhsDir);
                        if (n) {
                            acc_1[n] = edge.rhsId;
                        }
                    } else {
                        const n = ye(edge.rhsDir, edge.lhsDir);
                        if (n) {
                            acc_1[n] = edge.lhsId;
                        }
                    }
                    return acc_1;
                }, {});
                return acc;
            }, {});
            const R = Object.keys(adjList)[0];
            const N = {
                [R]: 1
            };
            const v = Object.keys(adjList).reduce((acc, key)=>{
                if (key === R) {
                    return acc;
                }
                return {
                    ...acc,
                    [key]: 1
                };
            }, {});
            const h = _((r)=>{
                const i = {
                    [r]: [
                        0,
                        0
                    ]
                };
                const f = [
                    r
                ];
                while(f.length > 0){
                    const e = f.shift();
                    if (e) {
                        N[e] = 1;
                        delete v[e];
                        const g = adjList[e];
                        const [t, s] = i[e];
                        Object.entries(g).forEach(([n, c])=>{
                            if (!N[c]) {
                                i[c] = wr([
                                    t,
                                    s
                                ], n);
                                f.push(c);
                            }
                        });
                    }
                }
                return i;
            }, "BFS");
            const spatialMaps = [
                h(R)
            ];
            while(Object.keys(v).length > 0){
                spatialMaps.push(h(Object.keys(v)[0]));
            }
            this.dataStructures = {
                adjList,
                spatialMaps,
                groupAlignments
            };
        }
        return this.dataStructures;
    }
    setElementForId(A, C) {
        this.elements[A] = C;
    }
    getElementById(A) {
        return this.elements[A];
    }
    getConfig() {
        return B({
            ...D_architecture,
            ...z().architecture
        });
    }
    getConfigField(A) {
        return this.getConfig()[A];
    }
};
_(ae, "ArchitectureDB");
const Ge = ae;
const Ir = _((x, A)=>{
    p(x, A);
    x.groups.map((C)=>A.addGroup(C));
    x.services.map((C)=>A.addService({
            ...C,
            type: "service"
        }));
    x.junctions.map((C)=>A.addJunction({
            ...C,
            type: "junction"
        }));
    x.edges.map((C)=>A.addEdge(C));
    x.alignments?.map((C)=>A.addLayoutHint({
            direction: C.direction,
            members: [
                ...C.members
            ]
        }));
}, "populateDb");
var parser = {
    parser: {
        yy: undefined
    },
    parse: _(async (x)=>{
        const A = await p_2("architecture", x);
        l_1.debug(A);
        const C = parser.parser?.yy;
        if (!(C instanceof Ge)) {
            throw new Error("parser.parser?.yy was not a ArchitectureDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues.");
        }
        Ir(A, C);
    }, "parse")
};
const Rr = _((x)=>`
  .edge {
    stroke-width: ${x.archEdgeWidth};
    stroke: ${x.archEdgeColor};
    fill: none;
  }

  .arrow {
    fill: ${x.archEdgeArrowColor};
  }

  .node-bkg {
    fill: none;
    stroke: ${x.archGroupBorderColor};
    stroke-width: ${x.archGroupBorderWidth};
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
`, "getStyles");
const styles = Rr;
function me(x, A) {
    if (x === 0) {
        return A();
    }
    let R = x >>> 0;
    Math.random = ()=>{
        R = R + 1831565813 >>> 0;
        let N = R;
        N = Math.imul(N ^ N >>> 15, N | 1);
        N ^= N + Math.imul(N ^ N >>> 7, N | 61);
        return ((N ^ N >>> 14) >>> 0) / 4294967296;
    };
    try {
        return A();
    } finally{
        Math.random = Math.random;
    }
}
_(me, "withSeededRandom");
const re = _((x)=>`<g><rect width="80" height="80" style="fill: #087ebf; stroke-width: 0px;"/>${x}</g>`, "wrapIcon");
const icons = {
    prefix: "mermaid-architecture",
    height: 80,
    width: 80,
    icons: {
        database: {
            body: re('<path id="b" data-name="4" d="m20,57.86c0,3.94,8.95,7.14,20,7.14s20-3.2,20-7.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path id="c" data-name="3" d="m20,45.95c0,3.94,8.95,7.14,20,7.14s20-3.2,20-7.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path id="d" data-name="2" d="m20,34.05c0,3.94,8.95,7.14,20,7.14s20-3.2,20-7.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse id="e" data-name="1" cx="40" cy="22.14" rx="20" ry="7.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="20" y1="57.86" x2="20" y2="22.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="60" y1="57.86" x2="60" y2="22.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/>')
        },
        server: {
            body: re('<rect x="17.5" y="17.5" width="45" height="45" rx="2" ry="2" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="17.5" y1="32.5" x2="62.5" y2="32.5" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="17.5" y1="47.5" x2="62.5" y2="47.5" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><g><path d="m56.25,25c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: #fff; stroke-width: 0px;"/><path d="m56.25,25c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: none; stroke: #fff; stroke-miterlimit: 10;"/></g><g><path d="m56.25,40c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: #fff; stroke-width: 0px;"/><path d="m56.25,40c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: none; stroke: #fff; stroke-miterlimit: 10;"/></g><g><path d="m56.25,55c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: #fff; stroke-width: 0px;"/><path d="m56.25,55c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: none; stroke: #fff; stroke-miterlimit: 10;"/></g><g><circle cx="32.5" cy="25" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="27.5" cy="25" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="22.5" cy="25" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/></g><g><circle cx="32.5" cy="40" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="27.5" cy="40" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="22.5" cy="40" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/></g><g><circle cx="32.5" cy="55" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="27.5" cy="55" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="22.5" cy="55" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/></g>')
        },
        disk: {
            body: re('<rect x="20" y="15" width="40" height="50" rx="1" ry="1" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="24" cy="19.17" rx=".8" ry=".83" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="56" cy="19.17" rx=".8" ry=".83" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="24" cy="60.83" rx=".8" ry=".83" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="56" cy="60.83" rx=".8" ry=".83" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="40" cy="33.75" rx="14" ry="14.58" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="40" cy="33.75" rx="4" ry="4.17" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path d="m37.51,42.52l-4.83,13.22c-.26.71-1.1,1.02-1.76.64l-4.18-2.42c-.66-.38-.81-1.26-.33-1.84l9.01-10.8c.88-1.05,2.56-.08,2.09,1.2Z" style="fill: #fff; stroke-width: 0px;"/>')
        },
        internet: {
            body: re('<circle cx="40" cy="40" r="22.5" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="40" y1="17.5" x2="40" y2="62.5" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="17.5" y1="40" x2="62.5" y2="40" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path d="m39.99,17.51c-15.28,11.1-15.28,33.88,0,44.98" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path d="m40.01,17.51c15.28,11.1,15.28,33.88,0,44.98" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="19.75" y1="30.1" x2="60.25" y2="30.1" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="19.75" y1="49.9" x2="60.25" y2="49.9" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/>')
        },
        cloud: {
            body: re('<path d="m65,47.5c0,2.76-2.24,5-5,5H20c-2.76,0-5-2.24-5-5,0-1.87,1.03-3.51,2.56-4.36-.04-.21-.06-.42-.06-.64,0-2.6,2.48-4.74,5.65-4.97,1.65-4.51,6.34-7.76,11.85-7.76.86,0,1.69.08,2.5.23,2.09-1.57,4.69-2.5,7.5-2.5,6.1,0,11.19,4.38,12.28,10.17,2.14.56,3.72,2.51,3.72,4.83,0,.03,0,.07-.01.1,2.29.46,4.01,2.48,4.01,4.9Z" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/>')
        },
        unknown,
        blank: {
            body: re("")
        }
    }
};
const Fr = _(async (x, A, C, R)=>{
    const N = C.getConfigField("padding");
    const v = C.getConfigField("iconSize");
    const h = v / 2;
    const a = v / 6;
    const r = a / 2;
    await Promise.all(A.edges().map(async (i)=>{
        const { source, sourceDir, sourceArrow, sourceGroup, target, targetDir, targetArrow, targetGroup, label } = Pe(i);
        let { x: x_1, y: y_1 } = i[0].sourceEndpoint();
        const { x: x_2, y: y_2 } = i[0].midpoint();
        let { x: x_3, y: y_3 } = i[0].targetEndpoint();
        const B = N + 4;
        sourceGroup && (Wt(sourceDir) ? x_1 += sourceDir === "L" ? -B : B : y_1 += sourceDir === "T" ? -B : B + 18);
        targetGroup && (Wt(targetDir) ? x_3 += targetDir === "L" ? -B : B : y_3 += targetDir === "T" ? -B : B + 18);
        !sourceGroup && C.getNode(source)?.type === "junction" && (Wt(sourceDir) ? x_1 += sourceDir === "L" ? h : -h : y_1 += sourceDir === "T" ? h : -h);
        !targetGroup && C.getNode(target)?.type === "junction" && (Wt(targetDir) ? x_3 += targetDir === "L" ? h : -h : y_3 += targetDir === "T" ? h : -h);
        if (i[0]._private.rscratch) {
            const U = x.insert("g");
            U.insert("path").attr("d", `M ${x_1},${y_1} L ${x_2},${y_2} L${x_3},${y_3} `).attr("class", "edge").attr("id", `${R}-${r_1(source, target, {
                prefix: "L"
            })}`);
            if (sourceArrow) {
                const V = Wt(sourceDir) ? se[sourceDir](x_1, a) : x_1 - r;
                const M = qt(sourceDir) ? se[sourceDir](y_1, a) : y_1 - r;
                U.insert("polygon").attr("points", Re[sourceDir](a)).attr("transform", `translate(${V},${M})`).attr("class", "arrow");
            }
            if (targetArrow) {
                const V = Wt(targetDir) ? se[targetDir](x_3, a) : x_3 - r;
                const M = qt(targetDir) ? se[targetDir](y_3, a) : y_3 - r;
                U.insert("polygon").attr("points", Re[targetDir](a)).attr("transform", `translate(${V},${M})`).attr("class", "arrow");
            }
            if (label) {
                const V = Ne(sourceDir, targetDir) ? "XY" : Wt(sourceDir) ? "X" : "Y";
                let width = 0;
                switch(V){
                    case "X":
                        width = Math.abs(x_1 - x_3);
                        break;
                    case "Y":
                        width = Math.abs(y_1 - y_3) / 1.5;
                        break;
                    default:
                        width = Math.abs(x_1 - x_3) / 2;
                }
                const _ = U.append("g");
                await a$(_, label, {
                    useHtmlLabels: false,
                    width,
                    classes: "architecture-service-label"
                }, c_1());
                _.attr("dy", "1em").attr("alignment-baseline", "middle").attr("dominant-baseline", "middle").attr("text-anchor", "middle");
                if (V === "X") {
                    _.attr("transform", `translate(${x_2}, ${y_2})`);
                } else if (V === "Y") {
                    _.attr("transform", `translate(${x_2}, ${y_2}) rotate(-90)`);
                } else if (V === "XY") {
                    const o = ye(sourceDir, targetDir);
                    if (o && Lr(o)) {
                        const E = _.node().getBoundingClientRect();
                        const [p, m] = Ar(o);
                        _.attr("dominant-baseline", "auto").attr("transform", `rotate(${-1 * p * m * 45})`);
                        const y = _.node().getBoundingClientRect();
                        _.attr("transform", `
                translate(${x_2}, ${y_2 - E.height / 2})
                translate(${p * y.width / 2}, ${m * y.height / 2})
                rotate(${-1 * p * m * 45}, 0, ${E.height / 2})
              `);
                    }
                }
            }
        }
    }));
}, "drawEdges");
const br = _(async (x, A, C, R)=>{
    const v = C.getConfigField("padding") * 0.75;
    const h = C.getConfigField("fontSize");
    const r = C.getConfigField("iconSize") / 2;
    await Promise.all(A.nodes().map(async (i)=>{
        const f = ie(i);
        if (f.type === "group") {
            const { h: h_1, w, x1, y1 } = i.boundingBox();
            const n = x.append("rect");
            n.attr("id", `${R}-group-${f.id}`).attr("x", x1 + r).attr("y", y1 + r).attr("width", w).attr("height", h_1).attr("class", "node-bkg");
            const c = x.append("g");
            let l = x1;
            let T = y1;
            if (f.icon) {
                const u = c.append("g");
                u.html(`<g>${await ai(f.icon, {
                    height: v,
                    width: v,
                    fallbackPrefix: icons.prefix
                })}</g>`);
                u.attr("transform", `translate(${l + r + 1}, ${T + r + 1})`);
                l += v;
                T += h / 2 - 1 - 2;
            }
            if (f.label) {
                const u = c.append("g");
                await a$(u, f.label, {
                    useHtmlLabels: false,
                    width: w,
                    classes: "architecture-service-label"
                }, c_1());
                u.attr("dy", "1em").attr("alignment-baseline", "middle").attr("dominant-baseline", "start").attr("text-anchor", "start");
                u.attr("transform", `translate(${l + r + 4}, ${T + r + 2})`);
            }
            C.setElementForId(f.id, n);
        }
    }));
}, "drawGroups");
const Pr = _(async (x, A, C, R)=>{
    const N = c_1();
    for (const v of C){
        const h = A.append("g");
        const a = x.getConfigField("iconSize");
        if (v.title) {
            const e = h.append("g");
            await a$(e, v.title, {
                useHtmlLabels: false,
                width: a * 1.5,
                classes: "architecture-service-label"
            }, N);
            e.attr("dy", "1em").attr("alignment-baseline", "middle").attr("dominant-baseline", "middle").attr("text-anchor", "middle");
            e.attr("transform", `translate(${a / 2}, ${a})`);
        }
        const r = h.append("g");
        if (v.icon) {
            r.html(`<g>${await ai(v.icon, {
                height: a,
                width: a,
                fallbackPrefix: icons.prefix
            })}</g>`);
        } else if (v.iconText) {
            r.html(`<g>${await ai("blank", {
                height: a,
                width: a,
                fallbackPrefix: icons.prefix
            })}</g>`);
            const t = r.append("g").append("foreignObject").attr("width", a).attr("height", a).append("div").attr("class", "node-icon-text").attr("style", `height: ${a}px;`).append("div").html(i(v.iconText, N));
            const s = parseInt(window.getComputedStyle(t.node(), null).getPropertyValue("font-size").replace(/\D/g, "")) ?? 16;
            t.attr("style", `-webkit-line-clamp: ${Math.floor((a - 2) / s)};`);
        } else {
            r.append("path").attr("class", "node-bkg").attr("id", `${R}-node-${v.id}`).attr("d", `M0,${a} V5 Q0,0 5,0 H${a - 5} Q${a},0 ${a},5 V${a} Z`);
        }
        h.attr("id", `${R}-service-${v.id}`).attr("class", "architecture-service");
        const { width, height } = h.node().getBBox();
        v.width = width;
        v.height = height;
        x.setElementForId(v.id, h);
    }
    return 0;
}, "drawServices");
const Gr = _((x, A, C, R)=>{
    C.forEach((N)=>{
        const v = A.append("g");
        const h = x.getConfigField("iconSize");
        v.append("g").append("rect").attr("id", `${R}-node-${N.id}`).attr("fill-opacity", "0").attr("width", h).attr("height", h);
        v.attr("class", "architecture-junction");
        const { width, height } = v._groups[0][0].getBBox();
        v.width = width;
        v.height = height;
        x.setElementForId(N.id, v);
    });
}, "drawJunctions");
aj([
    {
        name: icons.prefix,
        icons
    }
]);
c_2.use(Tr);
function Ye(x, A, C) {
    x.forEach((R)=>{
        A.add({
            group: "nodes",
            data: {
                type: "service",
                id: R.id,
                icon: R.icon,
                label: R.title,
                parent: R.in,
                width: C.getConfigField("iconSize"),
                height: C.getConfigField("iconSize")
            },
            classes: "node-service"
        });
    });
}
_(Ye, "addServices");
function Xe(x, A, C) {
    x.forEach((R)=>{
        A.add({
            group: "nodes",
            data: {
                type: "junction",
                id: R.id,
                parent: R.in,
                width: C.getConfigField("iconSize"),
                height: C.getConfigField("iconSize")
            },
            classes: "node-junction"
        });
    });
}
_(Xe, "addJunctions");
function He(x, A) {
    A.nodes().map((C)=>{
        const R = ie(C);
        if (R.type === "group") {
            return;
        }
        R.x = C.position().x;
        R.y = C.position().y;
        x.getElementById(R.id).attr("transform", `translate(${R.x || 0},${R.y || 0})`);
    });
}
_(He, "positionNodes");
function We(x, A) {
    x.forEach((C)=>{
        A.add({
            group: "nodes",
            data: {
                type: "group",
                id: C.id,
                icon: C.icon,
                label: C.title,
                parent: C.in
            },
            classes: "node-group"
        });
    });
}
_(We, "addGroups");
function Ve(x, A) {
    x.forEach((C)=>{
        const { lhsId, rhsId, lhsInto, lhsGroup, rhsInto, lhsDir, rhsDir, rhsGroup, title } = C;
        const classes = Ne(C.lhsDir, C.rhsDir) ? "segments" : "straight";
        const data = {
            id: `${lhsId}-${rhsId}`,
            label: title,
            source: lhsId,
            sourceDir: lhsDir,
            sourceArrow: lhsInto,
            sourceGroup: lhsGroup,
            sourceEndpoint: lhsDir === "L" ? "0 50%" : lhsDir === "R" ? "100% 50%" : lhsDir === "T" ? "50% 0" : "50% 100%",
            target: rhsId,
            targetDir: rhsDir,
            targetArrow: rhsInto,
            targetGroup: rhsGroup,
            targetEndpoint: rhsDir === "L" ? "0 50%" : rhsDir === "R" ? "100% 50%" : rhsDir === "T" ? "50% 0" : "50% 100%"
        };
        A.add({
            group: "edges",
            data,
            classes
        });
    });
}
_(Ve, "addEdges");
function ze(x, A, C, R = []) {
    const N = _((g, t)=>Object.entries(g).reduce((acc, [n, c])=>{
            let l = 0;
            const T = Object.entries(c);
            if (T.length === 1) {
                acc[n] = T[0][1];
                return acc;
            }
            for(let u = 0; u < T.length - 1; u++){
                for(let d = u + 1; d < T.length; d++){
                    const [L, b] = T[u];
                    const [w, G] = T[d];
                    if (C[L]?.[w] === t) {
                        acc[n] ??= [];
                        acc[n] = [
                            ...acc[n],
                            ...b,
                            ...G
                        ];
                    } else if (L === "default" || w === "default") {
                        acc[n] ??= [];
                        acc[n] = [
                            ...acc[n],
                            ...b,
                            ...G
                        ];
                    } else {
                        const U = `${n}-${l++}`;
                        acc[U] = b;
                        const V = `${n}-${l++}`;
                        acc[V] = G;
                    }
                }
            }
            return acc;
        }, {}), "flattenAlignments");
    const v = A.map((g)=>{
        const t = {};
        const s = {};
        Object.entries(g).forEach(([n, [c, l]])=>{
            const T = x.getNode(n)?.in ?? "default";
            t[l] ??= {};
            t[l][T] ??= [];
            t[l][T].push(n);
            s[c] ??= {};
            s[c][T] ??= [];
            s[c][T].push(n);
        });
        return {
            horiz: Object.values(N(t, "horizontal")).filter((n)=>n.length > 1),
            vert: Object.values(N(s, "vertical")).filter((n)=>n.length > 1)
        };
    });
    const [h, a] = v.reduce(([g, t], { horiz, vert })=>[
            [
                ...g,
                ...horiz
            ],
            [
                ...t,
                ...vert
            ]
        ], [
        [],
        []
    ]);
    const r = new Set;
    R.forEach((g)=>g.members.forEach((t)=>r.add(t)));
    const i = _((g)=>g.filter((t)=>!t.some((s)=>r.has(s))), "dropOverlapping");
    const horizontal = i(h);
    const vertical = i(a);
    R.forEach((g)=>{
        g.members.length < 2 || (g.direction === "row" ? horizontal.push([
            ...g.members
        ]) : vertical.push([
            ...g.members
        ]));
    });
    return {
        horizontal,
        vertical
    };
}
_(ze, "getAlignments");
function Be(x, A, C = []) {
    const R = [];
    const N = A.getConfigField("iconSize");
    const v = A.getConfigField("idealEdgeLengthMultiplier");
    const gap = v * N;
    const a = new Set;
    C.forEach((f)=>{
        for(let e = 0; e < f.members.length - 1; e++){
            const g = f.members[e];
            const t = f.members[e + 1];
            a.add(`${g}|${t}`);
            a.add(`${t}|${g}`);
            if (f.direction === "row") {
                R.push({
                    left: g,
                    right: t,
                    gap
                });
            } else {
                R.push({
                    top: g,
                    bottom: t,
                    gap
                });
            }
        }
    });
    const r = _((f)=>`${f[0]},${f[1]}`, "posToStr");
    const i = _((f)=>f.split(",").map((e)=>parseInt(e)), "strToPos");
    x.forEach((f)=>{
        const e = Object.fromEntries(Object.entries(f).map(([n, c])=>[
                r(c),
                n
            ]));
        const g = [
            r([
                0,
                0
            ])
        ];
        const t = {};
        const s = {
            L: [
                -1,
                0
            ],
            R: [
                1,
                0
            ],
            T: [
                0,
                1
            ],
            B: [
                0,
                -1
            ]
        };
        while(g.length > 0){
            const n = g.shift();
            if (n) {
                t[n] = 1;
                const c = e[n];
                if (c) {
                    const l = i(n);
                    Object.entries(s).forEach(([T, u])=>{
                        const d = r([
                            l[0] + u[0],
                            l[1] + u[1]
                        ]);
                        const L = e[d];
                        if (L && !t[d]) {
                            g.push(d);
                            if (a.has(`${c}|${L}`)) {
                                return;
                            }
                            R.push({
                                [Ie[T]]: L,
                                [Ie[Nr(T)]]: c,
                                gap: v * N
                            });
                        }
                    });
                }
            }
        }
    });
    return R;
}
_(Be, "getRelativeConstraints");
function $e(x, A, C, R, N, { spatialMaps, groupAlignments }) {
    return new Promise((resolve)=>{
        const r = d("body").append("div").attr("id", "cy").attr("style", "display:none");
        const i = c_2({
            container: document.getElementById("cy"),
            style: [
                {
                    selector: "edge",
                    style: {
                        "curve-style": "straight",
                        "source-endpoint": "data(sourceEndpoint)",
                        "target-endpoint": "data(targetEndpoint)"
                    }
                },
                {
                    selector: "edge[label]",
                    style: {
                        label: "data(label)"
                    }
                },
                {
                    selector: "edge.segments",
                    style: {
                        "curve-style": "segments",
                        "segment-weights": "0",
                        "segment-distances": [
                            0.5
                        ],
                        "edge-distances": "endpoints",
                        "source-endpoint": "data(sourceEndpoint)",
                        "target-endpoint": "data(targetEndpoint)"
                    }
                },
                {
                    selector: "node",
                    style: {
                        "compound-sizing-wrt-labels": "include"
                    }
                },
                {
                    selector: "node[label]",
                    style: {
                        "text-valign": "bottom",
                        "text-halign": "center",
                        "font-size": `${N.getConfigField("fontSize")}px`
                    }
                },
                {
                    selector: ".node-service",
                    style: {
                        label: "data(label)",
                        width: "data(width)",
                        height: "data(height)"
                    }
                },
                {
                    selector: ".node-junction",
                    style: {
                        width: "data(width)",
                        height: "data(height)"
                    }
                },
                {
                    selector: ".node-group",
                    style: {
                        padding: `${N.getConfigField("padding")}px`
                    }
                }
            ],
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
        r.remove();
        We(C, i);
        Ye(x, i, N);
        Xe(A, i, N);
        Ve(R, i);
        const f = N.getLayoutHints();
        const alignmentConstraint = ze(N, spatialMaps, groupAlignments, f);
        const relativePlacementConstraint = Be(spatialMaps, N, f);
        const t = N.getConfigField("iconSize");
        const s = N.getConfigField("idealEdgeLengthMultiplier") * t;
        const n = 0.5 * t;
        const c = N.getConfigField("edgeElasticity");
        const l = N.getConfigField("seed");
        const T = i.layout({
            name: "fcose",
            quality: "proof",
            randomize: N.getConfigField("randomize"),
            nodeSeparation: N.getConfigField("nodeSeparation"),
            numIter: N.getConfigField("numIter"),
            styleEnabled: false,
            animate: false,
            nodeDimensionsIncludeLabels: false,
            idealEdgeLength (u) {
                const [d, L] = u.connectedNodes();
                const { parent } = ie(d);
                const { parent: parent_1 } = ie(L);
                if (parent === parent_1) {
                    return s;
                }
                return n;
            },
            edgeElasticity (u) {
                const [d, L] = u.connectedNodes();
                const { parent } = ie(d);
                const { parent: parent_1 } = ie(L);
                if (parent === parent_1) {
                    return c;
                }
                return 0.001;
            },
            alignmentConstraint,
            relativePlacementConstraint
        });
        T.one("layoutstop", ()=>{
            function u({ x, y }, { x: x_1, y: y_1 }, b, w) {
                let weights;
                let distances;
                distances = (w - y + (x - b) * (y - y_1) / (x - x_1)) / Math.sqrt(1 + ((y - y_1) / (x - x_1)) ** 2);
                weights = Math.sqrt((w - y) ** 2 + (b - x) ** 2 - distances ** 2);
                const o = Math.sqrt((x_1 - x) ** 2 + (y_1 - y) ** 2);
                weights = weights / o;
                let E = (x_1 - x) * (w - y) - (y_1 - y) * (b - x);
                switch(true){
                    case E >= 0:
                        E = 1;
                        break;
                    case E < 0:
                        E = -1;
                        break;
                }
                let p = (x_1 - x) * (b - x) + (y_1 - y) * (w - y);
                switch(true){
                    case p >= 0:
                        p = 1;
                        break;
                    case p < 0:
                        p = -1;
                        break;
                }
                distances = Math.abs(distances) * E;
                weights = weights * p;
                return {
                    distances,
                    weights
                };
            }
            _(u, "getSegmentWeights");
            i.startBatch();
            for (const d of Object.values(i.edges())){
                if (d.data?.()) {
                    const { x, y } = d.source().position();
                    const { x: x_1, y: y_1 } = d.target().position();
                    if (x !== x_1 && y !== y_1) {
                        const B = d.sourceEndpoint();
                        const U = d.targetEndpoint();
                        const { sourceDir } = Pe(d);
                        const [M, _] = qt(sourceDir) ? [
                            B.x,
                            U.y
                        ] : [
                            U.x,
                            B.y
                        ];
                        const { weights, distances } = u(B, U, M, _);
                        d.style("segment-distances", distances);
                        d.style("segment-weights", weights);
                    }
                }
            }
            i.endBatch();
            me(l, ()=>T.run());
        });
        try {
            me(l, ()=>T.run());
        } catch (error) {
            throw error instanceof RangeError && error.message.includes("Invalid array length") ? new Error("Architecture layout failed: a declared `align row|column` directive likely contradicts the edge directions, or two declared alignments overlap on a shared node. Check that the order of members in each `align` chain is consistent with the edges between them, and that no node appears in two `align` directives along the same axis.") : error;
        }
        i.ready((u)=>{
            l_1.info("Ready", u);
            resolve(i);
        });
    });
}
_($e, "layoutArchitecture");
const draw = _(async (x, A, C, R)=>{
    const N = R.db;
    N.setDiagramId(A);
    const v = N.getServices();
    const h = N.getJunctions();
    const a = N.getGroups();
    const r = N.getEdges();
    const i = N.getDataStructures();
    const f = F(A);
    const e = f.append("g");
    e.attr("class", "architecture-edges");
    const g = f.append("g");
    g.attr("class", "architecture-services");
    const t = f.append("g");
    t.attr("class", "architecture-groups");
    await Pr(N, g, v, A);
    Gr(N, g, h, A);
    const s = await $e(v, h, a, r, N, i);
    await Fr(e, s, N, A);
    await br(t, s, N, A);
    He(N, s);
    ad(undefined, f, N.getConfigField("padding"), N.getConfigField("useMaxWidth"));
}, "draw");
const renderer = {
    draw
};
export const diagram = {
    parser,
    get db () {
        return new Ge;
    },
    renderer,
    styles
};
