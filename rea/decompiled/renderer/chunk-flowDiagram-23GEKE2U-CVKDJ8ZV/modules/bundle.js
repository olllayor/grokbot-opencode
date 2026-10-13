import { g } from "./chunk-chunk-5VM5RSS4-CTCaRfNa.js";
import { g as g_1 } from "./chunk-chunk-XXDRQBXY-DVdINg3t.js";
import { s as s_1 } from "./chunk-chunk-VR4S4FIN-HF2Hbh9A.js";
import { _ as __1, b6, X, l as l_1, c as c_1, v as v_1, x, y, b, s as s_2, o, a, g as g_2, p, k, Y, Z as schema, bo, r as r_1, d, a5, q, b8, t } from "./chunk-mermaid.core-B9Iu5CoE.js";
import { f as f_1 } from "./chunk-chunk-32BRIVSS-CL4hvhVG.js";
import { c as c_2 } from "./chunk-channel-Bm516PE5.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "a6c34a46-9410-498d-91b9-861aecdd5913";
            e._sentryDebugIdIdentifier = "sentry-dbid-a6c34a46-9410-498d-91b9-861aecdd5913";
        }
    } catch (e) {}
})();
const At = "flowchart-";
const G1 = class {
    constructor(){
        this.vertexCounter = 0;
        this.config = c_1();
        this.diagramId = "";
        this.vertices = new Map;
        this.edges = [];
        this.classes = new Map;
        this.subGraphs = [];
        this.subGraphLookup = new Map;
        this.tooltips = new Map;
        this.subCount = 0;
        this.firstGraphFlag = true;
        this.secCount = -1;
        this.posCrossRef = [];
        this.funs = [];
        this.setAccTitle = b;
        this.setAccDescription = s_2;
        this.setDiagramTitle = o;
        this.getAccTitle = a;
        this.getAccDescription = g_2;
        this.getDiagramTitle = p;
        this.funs.push(this.setupToolTips.bind(this));
        this.addVertex = this.addVertex.bind(this);
        this.firstGraph = this.firstGraph.bind(this);
        this.setDirection = this.setDirection.bind(this);
        this.addSubGraph = this.addSubGraph.bind(this);
        this.addLink = this.addLink.bind(this);
        this.setLink = this.setLink.bind(this);
        this.updateLink = this.updateLink.bind(this);
        this.addClass = this.addClass.bind(this);
        this.setClass = this.setClass.bind(this);
        this.destructLink = this.destructLink.bind(this);
        this.setClickEvent = this.setClickEvent.bind(this);
        this.setTooltip = this.setTooltip.bind(this);
        this.updateLinkInterpolate = this.updateLinkInterpolate.bind(this);
        this.setClickFun = this.setClickFun.bind(this);
        this.bindFunctions = this.bindFunctions.bind(this);
        this.lex = {
            firstGraph: this.firstGraph.bind(this)
        };
        this.clear();
        this.setGen("gen-2");
    }
    sanitizeText(i) {
        return k.sanitizeText(i, this.config);
    }
    sanitizeNodeLabelType(i) {
        switch(i){
            case "markdown":
            case "string":
            case "text":
                return i;
            default:
                return "markdown";
        }
    }
    setDiagramId(i) {
        this.diagramId = i;
    }
    lookUpDomId(i) {
        for (const r of this.vertices.values()){
            if (r.id === i) {
                if (this.diagramId) {
                    return `${this.diagramId}-${r.domId}`;
                }
                return r.domId;
            }
        }
        if (this.diagramId) {
            return `${this.diagramId}-${i}`;
        }
        return i;
    }
    addVertex(i, r, a, n, l, p, c = {}, g) {
        if (!i || i.trim().length === 0) {
            return;
        }
        let u;
        if (g !== undefined) {
            let m;
            if (g.includes(`
`)) {
                m = g + `
`;
            } else {
                m = `{
` + g + `
}`;
            }
            u = Y(m, {
                schema
            });
        }
        const A = this.edges.find((m)=>m.id === i);
        if (A) {
            const m = u;
            if (m?.animate !== undefined) {
                A.animate = m.animate;
            }
            if (m?.animation !== undefined) {
                A.animation = m.animation;
            }
            if (m?.curve !== undefined) {
                A.interpolate = m.curve;
            }
            return;
        }
        let v;
        let b = this.vertices.get(i);
        if (b === undefined) {
            if (r === undefined && a === undefined && n !== undefined && n !== null) {
                l_1.warn(`Style applied to unknown node "${i}". This may indicate a typo. The node will be created automatically.`);
            }
            b = {
                id: i,
                labelType: "text",
                domId: `${At + i}-${this.vertexCounter}`,
                styles: [],
                classes: []
            };
            this.vertices.set(i, b);
        }
        this.vertexCounter++;
        if (r !== undefined) {
            this.config = c_1();
            v = this.sanitizeText(r.text.trim());
            b.labelType = r.type;
            if (v.startsWith('"') && v.endsWith('"')) {
                v = v.substring(1, v.length - 1);
            }
            b.text = v;
        } else if (b.text === undefined) {
            b.text = i;
        }
        if (a !== undefined) {
            b.type = a;
        }
        n?.forEach((m)=>{
            b.styles.push(m);
        });
        l?.forEach((m)=>{
            b.classes.push(m);
        });
        if (p !== undefined) {
            b.dir = p;
        }
        if (b.props === undefined) {
            b.props = c;
        } else if (c !== undefined) {
            Object.assign(b.props, c);
        }
        if (u !== undefined) {
            if (u.shape) {
                if (u.shape !== u.shape.toLowerCase() || u.shape.includes("_")) {
                    throw new Error(`No such shape: ${u.shape}. Shape names should be lowercase.`);
                }
                if (!bo(u.shape)) {
                    throw new Error(`No such shape: ${u.shape}.`);
                }
                b.type = u?.shape;
            }
            if (u?.label) {
                b.text = u?.label;
                b.labelType = this.sanitizeNodeLabelType(u?.labelType);
            }
            if (u?.icon) {
                b.icon = u?.icon;
                if (!u.label?.trim() && b.text === i) {
                    b.text = "";
                }
            }
            if (u?.form) {
                b.form = u?.form;
            }
            if (u?.pos) {
                b.pos = u?.pos;
            }
            if (u?.img) {
                b.img = u?.img;
                if (!u.label?.trim() && b.text === i) {
                    b.text = "";
                }
            }
            if (u?.constraint) {
                b.constraint = u.constraint;
            }
            if (u.w) {
                b.assetWidth = Number(u.w);
            }
            if (u.h) {
                b.assetHeight = Number(u.h);
            }
        }
    }
    addSingleLink(start, end, a, n) {
        const c = {
            start,
            end,
            type: undefined,
            text: "",
            labelType: "text",
            classes: [],
            isUserDefinedId: false,
            interpolate: this.edges.defaultInterpolate
        };
        l_1.info("abc78 Got edge...", c);
        const a_text = a.text;
        if (a_text !== undefined) {
            c.text = this.sanitizeText(a_text.text.trim());
            if (c.text.startsWith('"') && c.text.endsWith('"')) {
                c.text = c.text.substring(1, c.text.length - 1);
            }
            c.labelType = this.sanitizeNodeLabelType(a_text.type);
        }
        if (a !== undefined) {
            c.type = a.type;
            c.stroke = a.stroke;
            c.length = a.length > 10 ? 10 : a.length;
        }
        if (n && !this.edges.some((u)=>u.id === n)) {
            c.id = n;
            c.isUserDefinedId = true;
        } else {
            const u = this.edges.filter((A)=>A.start === c.start && A.end === c.end);
            if (u.length === 0) {
                c.id = r_1(c.start, c.end, {
                    counter: 0,
                    prefix: "L"
                });
            } else {
                c.id = r_1(c.start, c.end, {
                    counter: u.length + 1,
                    prefix: "L"
                });
            }
        }
        if (this.edges.length < (this.config.maxEdges ?? 500)) {
            l_1.info("Pushing edge...");
            this.edges.push(c);
        } else {
            throw new Error(`Edge limit exceeded. ${this.edges.length} edges found, but the limit is ${this.config.maxEdges}.

Initialize mermaid with maxEdges set to a higher number to allow more edges.
You cannot set this config via configuration inside the diagram as it is a secure config.
You have to call mermaid.initialize.`);
        }
    }
    isLinkData(i) {
        return i !== null && typeof i === "object" && "id" in i && typeof i.id === "string";
    }
    addLink(i, r, a) {
        const n = this.isLinkData(a) ? a.id.replace("@", "") : undefined;
        l_1.info("addLink", i, r, n);
        for (const l of i){
            for (const p of r){
                const c = l === i[i.length - 1];
                const g = p === r[0];
                if (c && g) {
                    this.addSingleLink(l, p, a, n);
                } else {
                    this.addSingleLink(l, p, a, undefined);
                }
            }
        }
    }
    updateLinkInterpolate(i, r) {
        i.forEach((a)=>{
            if (a === "default") {
                this.edges.defaultInterpolate = r;
            } else {
                this.edges[a].interpolate = r;
            }
        });
    }
    updateLink(i, r) {
        i.forEach((a)=>{
            if (typeof a === "number" && a >= this.edges.length) {
                throw new Error(`The index ${a} for linkStyle is out of bounds. Valid indices for linkStyle are between 0 and ${this.edges.length - 1}. (Help: Ensure that the index is within the range of existing edges.)`);
            }
            if (a === "default") {
                this.edges.defaultStyle = r;
            } else {
                this.edges[a].style = r;
                (this.edges[a]?.style?.length ?? 0) > 0 && !this.edges[a]?.style?.some((n)=>n?.startsWith("fill")) && this.edges[a]?.style?.push("fill:none");
            }
        });
    }
    addClass(i, r) {
        const a = r.join().replace(/\\,/g, "§§§").replace(/,/g, ";").replace(/§§§/g, ",").split(";");
        i.split(",").forEach((n)=>{
            let l = this.classes.get(n);
            if (l === undefined) {
                l = {
                    id: n,
                    styles: [],
                    textStyles: []
                };
                this.classes.set(n, l);
            }
            a?.forEach((p)=>{
                if (/color/.exec(p)) {
                    const c = p.replace("fill", "bgFill");
                    l.textStyles.push(c);
                }
                l.styles.push(p);
            });
        });
    }
    setDirection(i) {
        this.direction = i.trim();
        if (/.*</.exec(this.direction)) {
            this.direction = "RL";
        }
        if (/.*\^/.exec(this.direction)) {
            this.direction = "BT";
        }
        if (/.*>/.exec(this.direction)) {
            this.direction = "LR";
        }
        if (/.*v/.exec(this.direction)) {
            this.direction = "TB";
        }
        if (this.direction === "TD") {
            this.direction = "TB";
        }
    }
    setClass(i, r) {
        for (const a of i.split(",")){
            const n = this.vertices.get(a);
            if (n) {
                n.classes.push(r);
            }
            const l = this.edges.find((c)=>c.id === a);
            if (l) {
                l.classes.push(r);
            }
            const p = this.subGraphLookup.get(a);
            if (p) {
                p.classes.push(r);
            }
        }
    }
    setTooltip(i, r) {
        if (r !== undefined) {
            r = this.sanitizeText(r);
            for (const a of i.split(",")){
                this.tooltips.set(this.version === "gen-1" ? this.lookUpDomId(a) : a, r);
            }
        }
    }
    setClickFun(i, r, a) {
        if (c_1().securityLevel !== "loose" || r === undefined) {
            return;
        }
        let n = [];
        if (typeof a === "string") {
            n = a.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
            for(let p = 0; p < n.length; p++){
                let c = n[p].trim();
                if (c.startsWith('"') && c.endsWith('"')) {
                    c = c.substr(1, c.length - 2);
                }
                n[p] = c;
            }
        }
        if (n.length === 0) {
            n.push(i);
        }
        const l = this.vertices.get(i);
        if (l) {
            l.haveCallback = true;
            this.funs.push(()=>{
                const p = this.lookUpDomId(i);
                const c = document.querySelector(`[id="${p}"]`);
                if (c !== null) {
                    c.addEventListener("click", ()=>{
                        y.runFunc(r, ...n);
                    }, false);
                }
            });
        }
    }
    setLink(i, r, a) {
        i.split(",").forEach((n)=>{
            const l = this.vertices.get(n);
            if (l !== undefined) {
                l.link = y.formatUrl(r, this.config);
                l.linkTarget = a;
            }
        });
        this.setClass(i, "clickable");
    }
    getTooltip(i) {
        return this.tooltips.get(i);
    }
    setClickEvent(i, r, a) {
        i.split(",").forEach((n)=>{
            this.setClickFun(n, r, a);
        });
        this.setClass(i, "clickable");
    }
    bindFunctions(i) {
        this.funs.forEach((r)=>{
            r(i);
        });
    }
    getDirection() {
        return this.direction?.trim();
    }
    getVertices() {
        return this.vertices;
    }
    getEdges() {
        return this.edges;
    }
    getClasses() {
        return this.classes;
    }
    setupToolTips(i) {
        const r = f_1();
        d(i).select("svg").selectAll("g.node").on("mouseover", (l)=>{
            const p = d(l.currentTarget);
            const c = p.attr("title");
            if (c === null) {
                return;
            }
            const g = l.currentTarget?.getBoundingClientRect();
            r.transition().duration(200).style("opacity", ".9");
            r.text(p.attr("title")).style("left", `${window.scrollX + g.left + (g.right - g.left) / 2}px`).style("top", `${window.scrollY + g.bottom}px`);
            r.html(a5.sanitize(c));
            p.classed("hover", true);
        }).on("mouseout", (l)=>{
            r.transition().duration(500).style("opacity", 0);
            d(l.currentTarget).classed("hover", false);
        });
    }
    clear(i = "gen-2") {
        this.vertices = new Map;
        this.classes = new Map;
        this.edges = [];
        this.funs = [
            this.setupToolTips.bind(this)
        ];
        this.diagramId = "";
        this.subGraphs = [];
        this.subGraphLookup = new Map;
        this.subCount = 0;
        this.tooltips = new Map;
        this.firstGraphFlag = true;
        this.version = i;
        this.config = c_1();
        q();
    }
    setGen(i) {
        this.version = i || "gen-2";
    }
    defaultStyle() {
        return "fill:#ffa;stroke: #f66; stroke-width: 3px; stroke-dasharray: 5, 5;fill:#ffa;stroke: #666;";
    }
    addSubGraph(i, r, a) {
        let n = i.text.trim();
        let a_text = a.text;
        if (i === a && /\s/.exec(a.text)) {
            n = undefined;
        }
        const c = __1((S)=>{
            const B = {
                boolean: {},
                number: {},
                string: {}
            };
            const b1 = [];
            let dir_2;
            return {
                nodeList: S.filter((K)=>{
                    const h1 = typeof K;
                    if (K.stmt && K.stmt === "dir") {
                        dir_2 = K.value;
                        return false;
                    }
                    if (K.trim() === "") {
                        return false;
                    }
                    if (h1 in B) {
                        if (B[h1].hasOwnProperty(K)) {
                            return false;
                        }
                        return B[h1][K] = true;
                    }
                    if (b1.includes(K)) {
                        return false;
                    }
                    return b1.push(K);
                }),
                dir: dir_2
            };
        }, "uniq")(r.flat());
        const { nodeList, dir } = c;
        const hasExplicitDir = dir !== undefined;
        const v = c_1().flowchart ?? {};
        const dir_1 = dir ?? (v.inheritDir ? this.getDirection() ?? c_1().direction ?? undefined : undefined);
        if (this.version === "gen-1") {
            for(let S = 0; S < nodeList.length; S++){
                nodeList[S] = this.lookUpDomId(nodeList[S]);
            }
        }
        n = n ?? `subGraph${this.subCount}`;
        a_text = a_text || "";
        a_text = this.sanitizeText(a_text);
        this.subCount = this.subCount + 1;
        const m = {
            id: n,
            nodes: nodeList,
            title: a_text.trim(),
            classes: [],
            dir: dir_1,
            hasExplicitDir,
            labelType: this.sanitizeNodeLabelType(a?.type)
        };
        l_1.info("Adding", m.id, m.nodes, m.dir);
        m.nodes = this.makeUniq(m, this.subGraphs).nodes;
        this.subGraphs.push(m);
        this.subGraphLookup.set(n, m);
        return n;
    }
    getPosForId(i) {
        for (const [r, a] of this.subGraphs.entries()){
            if (a.id === i) {
                return r;
            }
        }
        return -1;
    }
    indexNodes2(i, r) {
        const nodes = this.subGraphs[r].nodes;
        this.secCount = this.secCount + 1;
        if (this.secCount > 2000) {
            return {
                result: false,
                count: 0
            };
        }
        this.posCrossRef[this.secCount] = r;
        if (this.subGraphs[r].id === i) {
            return {
                result: true,
                count: 0
            };
        }
        let n = 0;
        let count = 1;
        while(n < nodes.length){
            const p = this.getPosForId(nodes[n]);
            if (p >= 0) {
                const c = this.indexNodes2(i, p);
                if (c.result) {
                    return {
                        result: true,
                        count: count + c.count
                    };
                }
                count = count + c.count;
            }
            n = n + 1;
        }
        return {
            result: false,
            count
        };
    }
    getDepthFirstPos(i) {
        return this.posCrossRef[i];
    }
    indexNodes() {
        this.secCount = -1;
        if (this.subGraphs.length > 0) {
            this.indexNodes2("none", this.subGraphs.length - 1);
        }
    }
    getSubGraphs() {
        return this.subGraphs;
    }
    firstGraph() {
        if (this.firstGraphFlag) {
            this.firstGraphFlag = false;
            return true;
        }
        return false;
    }
    destructStartLink(i) {
        let r = i.trim();
        let a = "arrow_open";
        switch(r[0]){
            case "<":
                a = "arrow_point";
                r = r.slice(1);
                break;
            case "x":
                a = "arrow_cross";
                r = r.slice(1);
                break;
            case "o":
                a = "arrow_circle";
                r = r.slice(1);
                break;
        }
        let n = "normal";
        if (r.includes("=")) {
            n = "thick";
        }
        if (r.includes(".")) {
            n = "dotted";
        }
        return {
            type: a,
            stroke: n
        };
    }
    countChar(i, r) {
        const r_length = r.length;
        let n = 0;
        for(let l = 0; l < r_length; ++l){
            r[l] === i && ++n;
        }
        return n;
    }
    destructEndLink(i) {
        const r = i.trim();
        let a = r.slice(0, -1);
        let n = "arrow_open";
        switch(r.slice(-1)){
            case "x":
                n = "arrow_cross";
                if (r.startsWith("x")) {
                    n = `double_${n}`;
                    a = a.slice(1);
                }
                break;
            case ">":
                n = "arrow_point";
                if (r.startsWith("<")) {
                    n = `double_${n}`;
                    a = a.slice(1);
                }
                break;
            case "o":
                n = "arrow_circle";
                if (r.startsWith("o")) {
                    n = `double_${n}`;
                    a = a.slice(1);
                }
                break;
        }
        let l = "normal";
        let length = a.length - 1;
        if (a.startsWith("=")) {
            l = "thick";
        }
        if (a.startsWith("~")) {
            l = "invisible";
        }
        const c = this.countChar(".", a);
        if (c) {
            l = "dotted";
            length = c;
        }
        return {
            type: n,
            stroke: l,
            length
        };
    }
    destructLink(i, r) {
        const a = this.destructEndLink(i);
        let n;
        if (r) {
            n = this.destructStartLink(r);
            if (n.stroke !== a.stroke) {
                return {
                    type: "INVALID",
                    stroke: "INVALID"
                };
            }
            if (n.type === "arrow_open") {
                n.type = a.type;
            } else {
                if (n.type !== a.type) {
                    return {
                        type: "INVALID",
                        stroke: "INVALID"
                    };
                }
                n.type = `double_${n.type}`;
            }
            if (n.type === "double_arrow") {
                n.type = "double_arrow_point";
            }
            n.length = a.length;
            return n;
        }
        return a;
    }
    exists(i, r) {
        for (const a of i){
            if (a.nodes.includes(r)) {
                return true;
            }
        }
        return false;
    }
    makeUniq(i, r) {
        const a = [];
        i.nodes.forEach((n, l)=>{
            if (!this.exists(r, n)) {
                a.push(i.nodes[l]);
            }
        });
        return {
            nodes: a
        };
    }
    getTypeFromVertex(i) {
        if (i.img) {
            return "imageSquare";
        }
        if (i.icon) {
            if (i.form === "circle") {
                return "iconCircle";
            }
            if (i.form === "square") {
                return "iconSquare";
            }
            if (i.form === "rounded") {
                return "iconRounded";
            }
            return "icon";
        }
        switch(i.type){
            case "square":
            case undefined:
                return "squareRect";
            case "round":
                return "roundedRect";
            case "ellipse":
                return "ellipse";
            default:
                return i.type;
        }
    }
    findNode(i, r) {
        return i.find((a)=>a.id === r);
    }
    destructEdgeType(i) {
        let arrowTypeStart = "none";
        let arrowTypeEnd = "arrow_point";
        switch(i){
            case "arrow_point":
            case "arrow_circle":
            case "arrow_cross":
                arrowTypeEnd = i;
                break;
            case "double_arrow_point":
            case "double_arrow_circle":
            case "double_arrow_cross":
                arrowTypeStart = i.replace("double_", "");
                arrowTypeEnd = arrowTypeStart;
                break;
        }
        return {
            arrowTypeStart,
            arrowTypeEnd
        };
    }
    addNodeFromVertex(i, r, a, n, l, look) {
        const parentId = a.get(i.id);
        const g = n.get(i.id) ?? false;
        const u = this.findNode(r, i.id);
        if (u) {
            u.cssStyles = i.styles;
            u.cssCompiledStyles = this.getCompiledStyles(i.classes);
            u.cssClasses = i.classes.join(" ");
        } else {
            const A = {
                id: i.id,
                label: i.text,
                labelType: i.labelType,
                labelStyle: "",
                parentId,
                padding: l.flowchart?.padding || 8,
                cssStyles: i.styles,
                cssCompiledStyles: this.getCompiledStyles([
                    "default",
                    "node",
                    ...i.classes
                ]),
                cssClasses: `default ${i.classes.join(" ")}`,
                dir: i.dir,
                domId: i.domId,
                look,
                link: i.link,
                linkTarget: i.linkTarget,
                tooltip: this.getTooltip(i.id),
                icon: i.icon,
                pos: i.pos,
                img: i.img,
                assetWidth: i.assetWidth,
                assetHeight: i.assetHeight,
                constraint: i.constraint
            };
            if (g) {
                r.push({
                    ...A,
                    isGroup: true,
                    shape: "rect"
                });
            } else {
                r.push({
                    ...A,
                    isGroup: false,
                    shape: this.getTypeFromVertex(i)
                });
            }
        }
    }
    getCompiledStyles(i) {
        let r = [];
        for (const a of i){
            const n = this.classes.get(a);
            if (n?.styles) {
                r = [
                    ...r,
                    ...n.styles ?? []
                ].map((l)=>l.trim());
            }
            if (n?.textStyles) {
                r = [
                    ...r,
                    ...n.textStyles ?? []
                ].map((l)=>l.trim());
            }
        }
        return r;
    }
    getData() {
        const config = c_1();
        const r = [];
        const edges = [];
        const n = this.getSubGraphs();
        const l = new Map;
        const p = new Map;
        for(let u = n.length - 1; u >= 0; u--){
            const A = n[u];
            if (A.nodes.length > 0) {
                p.set(A.id, true);
            }
            for (const v of A.nodes){
                l.set(v, A.id);
            }
        }
        for(let u = n.length - 1; u >= 0; u--){
            const A = n[u];
            r.push({
                id: A.id,
                label: A.title,
                labelStyle: "",
                labelType: A.labelType,
                parentId: l.get(A.id),
                padding: 8,
                cssCompiledStyles: this.getCompiledStyles(A.classes),
                cssClasses: A.classes.join(" "),
                shape: "rect",
                dir: A.dir === "TD" ? "TB" : A.dir,
                explicitDir: A.hasExplicitDir,
                isGroup: true,
                look: config.look
            });
        }
        this.getVertices().forEach((u)=>{
            this.addNodeFromVertex(u, r, l, p, config, config.look || "classic");
        });
        const g = this.getEdges();
        g.forEach((u, counter)=>{
            const { arrowTypeStart, arrowTypeEnd } = this.destructEdgeType(u.type);
            const m = [
                ...g.defaultStyle ?? []
            ];
            if (u.style) {
                m.push(...u.style);
            }
            const S = {
                id: r_1(u.start, u.end, {
                    counter,
                    prefix: "L"
                }, u.id),
                isUserDefinedId: u.isUserDefinedId,
                start: u.start,
                end: u.end,
                type: u.type ?? "normal",
                label: u.text,
                labelType: u.labelType,
                labelpos: "c",
                thickness: u.stroke,
                minlen: u.length,
                classes: u?.stroke === "invisible" ? "" : "edge-thickness-normal edge-pattern-solid flowchart-link",
                arrowTypeStart: u?.stroke === "invisible" || u?.type === "arrow_open" ? "none" : arrowTypeStart,
                arrowTypeEnd: u?.stroke === "invisible" || u?.type === "arrow_open" ? "none" : arrowTypeEnd,
                arrowheadStyle: "fill: #333",
                cssCompiledStyles: this.getCompiledStyles(u.classes),
                labelStyle: m,
                style: m,
                pattern: u.stroke,
                look: config.look,
                animate: u.animate,
                animation: u.animation,
                curve: u.interpolate || this.edges.defaultInterpolate || config.flowchart?.curve
            };
            edges.push(S);
        });
        return {
            nodes: r,
            edges,
            other: {},
            config
        };
    }
    defaultConfig() {
        return b8.flowchart;
    }
};
__1(G1, "FlowDB");
const kt = G1;
const getClasses = __1((s, i)=>i.db.getClasses(), "getClasses");
const draw = __1(async (s, i, r, a, n)=>{
    l_1.info("REF0:");
    l_1.info("Drawing state diagram (v2)", i);
    const { securityLevel, flowchart, layout } = c_1();
    a.db.setDiagramId(i);
    l_1.debug("Before getData: ");
    const g = a.db.getData();
    l_1.debug("Data: ", g);
    const u = g_1(i, securityLevel);
    const A = a.db.getDirection();
    g.type = a.type;
    g.layoutAlgorithm = v_1(layout);
    if (g.layoutAlgorithm === "dagre" && layout === "elk") {
        l_1.warn("flowchart-elk was moved to an external package in Mermaid v11. Please refer [release notes](https://github.com/mermaid-js/mermaid/releases/tag/v11.0.0) for more details. This diagram will be rendered using `dagre` layout as a fallback.");
    }
    g.direction = A;
    g.nodeSpacing = flowchart?.nodeSpacing || 50;
    g.rankSpacing = flowchart?.rankSpacing || 50;
    g.markers = [
        "point",
        "circle",
        "cross"
    ];
    g.diagramId = i;
    l_1.debug("REF1:", g);
    await x(g, u, n);
    const v = g.config.flowchart?.diagramPadding ?? 8;
    y.insertTitle(u, "flowchartTitleText", flowchart?.titleTopMargin || 0, a.db.getDiagramTitle());
    s_1(u, v, "flowchart", flowchart?.useMaxWidth || false);
}, "draw");
const renderer = {
    getClasses,
    draw
};
const ae = (()=>{
    const s = __1((f1, h, d, f)=>{
        d = d || {};
        for(f = f1.length; f--; d[f1[f]] = h);
        return d;
    }, "o");
    const i = [
        1,
        4
    ];
    const r = [
        1,
        3
    ];
    const a = [
        1,
        5
    ];
    const n = [
        1,
        8,
        9,
        10,
        11,
        27,
        34,
        36,
        38,
        44,
        60,
        84,
        85,
        86,
        87,
        88,
        89,
        102,
        105,
        106,
        109,
        111,
        114,
        115,
        116,
        121,
        122,
        123,
        124,
        125
    ];
    const l = [
        2,
        2
    ];
    const p = [
        1,
        13
    ];
    const c = [
        1,
        14
    ];
    const g = [
        1,
        15
    ];
    const u = [
        1,
        16
    ];
    const A = [
        1,
        23
    ];
    const v = [
        1,
        25
    ];
    const b = [
        1,
        26
    ];
    const m = [
        1,
        27
    ];
    const S = [
        1,
        50
    ];
    const B = [
        1,
        49
    ];
    const b1 = [
        1,
        29
    ];
    const A1 = [
        1,
        30
    ];
    const P1 = [
        1,
        31
    ];
    const K = [
        1,
        32
    ];
    const h1 = [
        1,
        33
    ];
    const V = [
        1,
        45
    ];
    const I = [
        1,
        47
    ];
    const w = [
        1,
        43
    ];
    const R = [
        1,
        48
    ];
    const N = [
        1,
        44
    ];
    const G = [
        1,
        51
    ];
    const P = [
        1,
        46
    ];
    const O = [
        1,
        52
    ];
    const M = [
        1,
        53
    ];
    const M1 = [
        1,
        34
    ];
    const U1 = [
        1,
        35
    ];
    const z1 = [
        1,
        36
    ];
    const W1 = [
        1,
        37
    ];
    const j1 = [
        1,
        38
    ];
    const d1 = [
        1,
        58
    ];
    const y = [
        1,
        8,
        9,
        10,
        11,
        27,
        32,
        34,
        36,
        38,
        44,
        60,
        84,
        85,
        86,
        87,
        88,
        89,
        102,
        105,
        106,
        109,
        111,
        114,
        115,
        116,
        121,
        122,
        123,
        124,
        125
    ];
    const $ = [
        1,
        62
    ];
    const e1 = [
        1,
        61
    ];
    const t1 = [
        1,
        63
    ];
    const E1 = [
        8,
        9,
        11,
        75,
        77,
        78
    ];
    const ne = [
        1,
        79
    ];
    const C1 = [
        1,
        92
    ];
    const T1 = [
        1,
        97
    ];
    const S1 = [
        1,
        96
    ];
    const y1 = [
        1,
        93
    ];
    const x1 = [
        1,
        89
    ];
    const F1 = [
        1,
        95
    ];
    const _1 = [
        1,
        91
    ];
    const B1 = [
        1,
        98
    ];
    const v1 = [
        1,
        94
    ];
    const L1 = [
        1,
        99
    ];
    const V1 = [
        1,
        90
    ];
    const k1 = [
        8,
        9,
        10,
        11,
        40,
        75,
        77,
        78
    ];
    const z = [
        8,
        9,
        10,
        11,
        40,
        46,
        75,
        77,
        78
    ];
    const q = [
        8,
        9,
        10,
        11,
        29,
        40,
        44,
        46,
        48,
        50,
        52,
        54,
        56,
        58,
        60,
        63,
        65,
        67,
        68,
        70,
        75,
        77,
        78,
        89,
        102,
        105,
        106,
        109,
        111,
        114,
        115,
        116
    ];
    const ue = [
        8,
        9,
        11,
        44,
        60,
        75,
        77,
        78,
        89,
        102,
        105,
        106,
        109,
        111,
        114,
        115,
        116
    ];
    const I1 = [
        44,
        60,
        89,
        102,
        105,
        106,
        109,
        111,
        114,
        115,
        116
    ];
    const oe = [
        1,
        122
    ];
    const le = [
        1,
        123
    ];
    const K1 = [
        1,
        125
    ];
    const Y1 = [
        1,
        124
    ];
    const ce = [
        44,
        60,
        62,
        74,
        89,
        102,
        105,
        106,
        109,
        111,
        114,
        115,
        116
    ];
    const he = [
        1,
        134
    ];
    const de = [
        1,
        148
    ];
    const pe = [
        1,
        149
    ];
    const fe = [
        1,
        150
    ];
    const ge = [
        1,
        151
    ];
    const be = [
        1,
        136
    ];
    const Ae = [
        1,
        138
    ];
    const ke = [
        1,
        142
    ];
    const me = [
        1,
        143
    ];
    const De = [
        1,
        144
    ];
    const Ee = [
        1,
        145
    ];
    const Ce = [
        1,
        146
    ];
    const Te = [
        1,
        147
    ];
    const Se = [
        1,
        152
    ];
    const ye = [
        1,
        153
    ];
    const xe = [
        1,
        132
    ];
    const Fe = [
        1,
        133
    ];
    const _e = [
        1,
        140
    ];
    const Be = [
        1,
        135
    ];
    const ve = [
        1,
        139
    ];
    const Le = [
        1,
        137
    ];
    const Q1 = [
        8,
        9,
        10,
        11,
        27,
        32,
        34,
        36,
        38,
        44,
        60,
        84,
        85,
        86,
        87,
        88,
        89,
        102,
        105,
        106,
        109,
        111,
        114,
        115,
        116,
        121,
        122,
        123,
        124,
        125
    ];
    const Ve = [
        1,
        155
    ];
    const Ie = [
        1,
        157
    ];
    const _ = [
        8,
        9,
        11
    ];
    const H = [
        8,
        9,
        10,
        11,
        14,
        44,
        60,
        89,
        105,
        106,
        109,
        111,
        114,
        115,
        116
    ];
    const D = [
        1,
        177
    ];
    const W = [
        1,
        173
    ];
    const j = [
        1,
        174
    ];
    const E = [
        1,
        178
    ];
    const C = [
        1,
        175
    ];
    const T = [
        1,
        176
    ];
    const w1 = [
        77,
        116,
        119
    ];
    const x = [
        8,
        9,
        10,
        11,
        12,
        14,
        27,
        29,
        32,
        44,
        60,
        75,
        84,
        85,
        86,
        87,
        88,
        89,
        90,
        105,
        109,
        111,
        114,
        115,
        116
    ];
    const we = [
        10,
        106
    ];
    const p1 = [
        31,
        49,
        51,
        53,
        55,
        57,
        62,
        64,
        66,
        67,
        69,
        71,
        116,
        117,
        118
    ];
    const s1 = [
        1,
        248
    ];
    const i1 = [
        1,
        246
    ];
    const r1 = [
        1,
        250
    ];
    const a1 = [
        1,
        244
    ];
    const n1 = [
        1,
        245
    ];
    const u1 = [
        1,
        247
    ];
    const o1 = [
        1,
        249
    ];
    const l1 = [
        1,
        251
    ];
    const R1 = [
        1,
        269
    ];
    const Re = [
        8,
        9,
        11,
        106
    ];
    const J = [
        8,
        9,
        10,
        11,
        60,
        84,
        105,
        106,
        109,
        110,
        111,
        112
    ];
    const Z1 = {
        trace: __1(()=>{}, "trace"),
        yy: {},
        symbols_: {
            error: 2,
            start: 3,
            graphConfig: 4,
            document: 5,
            line: 6,
            statement: 7,
            SEMI: 8,
            NEWLINE: 9,
            SPACE: 10,
            EOF: 11,
            GRAPH: 12,
            NODIR: 13,
            DIR: 14,
            FirstStmtSeparator: 15,
            ending: 16,
            endToken: 17,
            spaceList: 18,
            spaceListNewline: 19,
            vertexStatement: 20,
            separator: 21,
            styleStatement: 22,
            linkStyleStatement: 23,
            classDefStatement: 24,
            classStatement: 25,
            clickStatement: 26,
            subgraph: 27,
            textNoTags: 28,
            SQS: 29,
            text: 30,
            SQE: 31,
            end: 32,
            direction: 33,
            acc_title: 34,
            acc_title_value: 35,
            acc_descr: 36,
            acc_descr_value: 37,
            acc_descr_multiline_value: 38,
            shapeData: 39,
            SHAPE_DATA: 40,
            link: 41,
            node: 42,
            styledVertex: 43,
            AMP: 44,
            vertex: 45,
            STYLE_SEPARATOR: 46,
            idString: 47,
            DOUBLECIRCLESTART: 48,
            DOUBLECIRCLEEND: 49,
            PS: 50,
            PE: 51,
            "(-": 52,
            "-)": 53,
            STADIUMSTART: 54,
            STADIUMEND: 55,
            SUBROUTINESTART: 56,
            SUBROUTINEEND: 57,
            VERTEX_WITH_PROPS_START: 58,
            "NODE_STRING[field]": 59,
            COLON: 60,
            "NODE_STRING[value]": 61,
            PIPE: 62,
            CYLINDERSTART: 63,
            CYLINDEREND: 64,
            DIAMOND_START: 65,
            DIAMOND_STOP: 66,
            TAGEND: 67,
            TRAPSTART: 68,
            TRAPEND: 69,
            INVTRAPSTART: 70,
            INVTRAPEND: 71,
            linkStatement: 72,
            arrowText: 73,
            TESTSTR: 74,
            START_LINK: 75,
            edgeText: 76,
            LINK: 77,
            LINK_ID: 78,
            edgeTextToken: 79,
            STR: 80,
            MD_STR: 81,
            textToken: 82,
            keywords: 83,
            STYLE: 84,
            LINKSTYLE: 85,
            CLASSDEF: 86,
            CLASS: 87,
            CLICK: 88,
            DOWN: 89,
            UP: 90,
            textNoTagsToken: 91,
            stylesOpt: 92,
            "idString[vertex]": 93,
            "idString[class]": 94,
            CALLBACKNAME: 95,
            CALLBACKARGS: 96,
            HREF: 97,
            LINK_TARGET: 98,
            "STR[link]": 99,
            "STR[tooltip]": 100,
            alphaNum: 101,
            DEFAULT: 102,
            numList: 103,
            INTERPOLATE: 104,
            NUM: 105,
            COMMA: 106,
            style: 107,
            styleComponent: 108,
            NODE_STRING: 109,
            UNIT: 110,
            BRKT: 111,
            PCT: 112,
            idStringToken: 113,
            MINUS: 114,
            MULT: 115,
            UNICODE_TEXT: 116,
            TEXT: 117,
            TAGSTART: 118,
            EDGE_TEXT: 119,
            alphaNumToken: 120,
            direction_tb: 121,
            direction_bt: 122,
            direction_rl: 123,
            direction_lr: 124,
            direction_td: 125,
            $accept: 0,
            $end: 1
        },
        terminals_: {
            2: "error",
            8: "SEMI",
            9: "NEWLINE",
            10: "SPACE",
            11: "EOF",
            12: "GRAPH",
            13: "NODIR",
            14: "DIR",
            27: "subgraph",
            29: "SQS",
            31: "SQE",
            32: "end",
            34: "acc_title",
            35: "acc_title_value",
            36: "acc_descr",
            37: "acc_descr_value",
            38: "acc_descr_multiline_value",
            40: "SHAPE_DATA",
            44: "AMP",
            46: "STYLE_SEPARATOR",
            48: "DOUBLECIRCLESTART",
            49: "DOUBLECIRCLEEND",
            50: "PS",
            51: "PE",
            52: "(-",
            53: "-)",
            54: "STADIUMSTART",
            55: "STADIUMEND",
            56: "SUBROUTINESTART",
            57: "SUBROUTINEEND",
            58: "VERTEX_WITH_PROPS_START",
            59: "NODE_STRING[field]",
            60: "COLON",
            61: "NODE_STRING[value]",
            62: "PIPE",
            63: "CYLINDERSTART",
            64: "CYLINDEREND",
            65: "DIAMOND_START",
            66: "DIAMOND_STOP",
            67: "TAGEND",
            68: "TRAPSTART",
            69: "TRAPEND",
            70: "INVTRAPSTART",
            71: "INVTRAPEND",
            74: "TESTSTR",
            75: "START_LINK",
            77: "LINK",
            78: "LINK_ID",
            80: "STR",
            81: "MD_STR",
            84: "STYLE",
            85: "LINKSTYLE",
            86: "CLASSDEF",
            87: "CLASS",
            88: "CLICK",
            89: "DOWN",
            90: "UP",
            93: "idString[vertex]",
            94: "idString[class]",
            95: "CALLBACKNAME",
            96: "CALLBACKARGS",
            97: "HREF",
            98: "LINK_TARGET",
            99: "STR[link]",
            100: "STR[tooltip]",
            102: "DEFAULT",
            104: "INTERPOLATE",
            105: "NUM",
            106: "COMMA",
            109: "NODE_STRING",
            110: "UNIT",
            111: "BRKT",
            112: "PCT",
            114: "MINUS",
            115: "MULT",
            116: "UNICODE_TEXT",
            117: "TEXT",
            118: "TAGSTART",
            119: "EDGE_TEXT",
            121: "direction_tb",
            122: "direction_bt",
            123: "direction_rl",
            124: "direction_lr",
            125: "direction_td"
        },
        productions_: [
            0,
            [
                3,
                2
            ],
            [
                5,
                0
            ],
            [
                5,
                2
            ],
            [
                6,
                1
            ],
            [
                6,
                1
            ],
            [
                6,
                1
            ],
            [
                6,
                1
            ],
            [
                6,
                1
            ],
            [
                4,
                2
            ],
            [
                4,
                2
            ],
            [
                4,
                2
            ],
            [
                4,
                3
            ],
            [
                16,
                2
            ],
            [
                16,
                1
            ],
            [
                17,
                1
            ],
            [
                17,
                1
            ],
            [
                17,
                1
            ],
            [
                15,
                1
            ],
            [
                15,
                1
            ],
            [
                15,
                2
            ],
            [
                19,
                2
            ],
            [
                19,
                2
            ],
            [
                19,
                1
            ],
            [
                19,
                1
            ],
            [
                18,
                2
            ],
            [
                18,
                1
            ],
            [
                7,
                2
            ],
            [
                7,
                2
            ],
            [
                7,
                2
            ],
            [
                7,
                2
            ],
            [
                7,
                2
            ],
            [
                7,
                2
            ],
            [
                7,
                9
            ],
            [
                7,
                6
            ],
            [
                7,
                4
            ],
            [
                7,
                1
            ],
            [
                7,
                2
            ],
            [
                7,
                2
            ],
            [
                7,
                1
            ],
            [
                21,
                1
            ],
            [
                21,
                1
            ],
            [
                21,
                1
            ],
            [
                39,
                2
            ],
            [
                39,
                1
            ],
            [
                20,
                4
            ],
            [
                20,
                3
            ],
            [
                20,
                4
            ],
            [
                20,
                2
            ],
            [
                20,
                2
            ],
            [
                20,
                1
            ],
            [
                42,
                1
            ],
            [
                42,
                6
            ],
            [
                42,
                5
            ],
            [
                43,
                1
            ],
            [
                43,
                3
            ],
            [
                45,
                4
            ],
            [
                45,
                4
            ],
            [
                45,
                6
            ],
            [
                45,
                4
            ],
            [
                45,
                4
            ],
            [
                45,
                4
            ],
            [
                45,
                8
            ],
            [
                45,
                4
            ],
            [
                45,
                4
            ],
            [
                45,
                4
            ],
            [
                45,
                6
            ],
            [
                45,
                4
            ],
            [
                45,
                4
            ],
            [
                45,
                4
            ],
            [
                45,
                4
            ],
            [
                45,
                4
            ],
            [
                45,
                1
            ],
            [
                41,
                2
            ],
            [
                41,
                3
            ],
            [
                41,
                3
            ],
            [
                41,
                1
            ],
            [
                41,
                3
            ],
            [
                41,
                4
            ],
            [
                76,
                1
            ],
            [
                76,
                2
            ],
            [
                76,
                1
            ],
            [
                76,
                1
            ],
            [
                72,
                1
            ],
            [
                72,
                2
            ],
            [
                73,
                3
            ],
            [
                30,
                1
            ],
            [
                30,
                2
            ],
            [
                30,
                1
            ],
            [
                30,
                1
            ],
            [
                83,
                1
            ],
            [
                83,
                1
            ],
            [
                83,
                1
            ],
            [
                83,
                1
            ],
            [
                83,
                1
            ],
            [
                83,
                1
            ],
            [
                83,
                1
            ],
            [
                83,
                1
            ],
            [
                83,
                1
            ],
            [
                83,
                1
            ],
            [
                83,
                1
            ],
            [
                28,
                1
            ],
            [
                28,
                2
            ],
            [
                28,
                1
            ],
            [
                28,
                1
            ],
            [
                24,
                5
            ],
            [
                25,
                5
            ],
            [
                26,
                2
            ],
            [
                26,
                4
            ],
            [
                26,
                3
            ],
            [
                26,
                5
            ],
            [
                26,
                3
            ],
            [
                26,
                5
            ],
            [
                26,
                5
            ],
            [
                26,
                7
            ],
            [
                26,
                2
            ],
            [
                26,
                4
            ],
            [
                26,
                2
            ],
            [
                26,
                4
            ],
            [
                26,
                4
            ],
            [
                26,
                6
            ],
            [
                22,
                5
            ],
            [
                23,
                5
            ],
            [
                23,
                5
            ],
            [
                23,
                9
            ],
            [
                23,
                9
            ],
            [
                23,
                7
            ],
            [
                23,
                7
            ],
            [
                103,
                1
            ],
            [
                103,
                3
            ],
            [
                92,
                1
            ],
            [
                92,
                3
            ],
            [
                107,
                1
            ],
            [
                107,
                2
            ],
            [
                108,
                1
            ],
            [
                108,
                1
            ],
            [
                108,
                1
            ],
            [
                108,
                1
            ],
            [
                108,
                1
            ],
            [
                108,
                1
            ],
            [
                108,
                1
            ],
            [
                108,
                1
            ],
            [
                113,
                1
            ],
            [
                113,
                1
            ],
            [
                113,
                1
            ],
            [
                113,
                1
            ],
            [
                113,
                1
            ],
            [
                113,
                1
            ],
            [
                113,
                1
            ],
            [
                113,
                1
            ],
            [
                113,
                1
            ],
            [
                113,
                1
            ],
            [
                113,
                1
            ],
            [
                82,
                1
            ],
            [
                82,
                1
            ],
            [
                82,
                1
            ],
            [
                82,
                1
            ],
            [
                91,
                1
            ],
            [
                91,
                1
            ],
            [
                91,
                1
            ],
            [
                91,
                1
            ],
            [
                91,
                1
            ],
            [
                91,
                1
            ],
            [
                91,
                1
            ],
            [
                91,
                1
            ],
            [
                91,
                1
            ],
            [
                91,
                1
            ],
            [
                91,
                1
            ],
            [
                79,
                1
            ],
            [
                79,
                1
            ],
            [
                120,
                1
            ],
            [
                120,
                1
            ],
            [
                120,
                1
            ],
            [
                120,
                1
            ],
            [
                120,
                1
            ],
            [
                120,
                1
            ],
            [
                120,
                1
            ],
            [
                120,
                1
            ],
            [
                120,
                1
            ],
            [
                120,
                1
            ],
            [
                120,
                1
            ],
            [
                47,
                1
            ],
            [
                47,
                2
            ],
            [
                101,
                1
            ],
            [
                101,
                2
            ],
            [
                33,
                1
            ],
            [
                33,
                1
            ],
            [
                33,
                1
            ],
            [
                33,
                1
            ],
            [
                33,
                1
            ]
        ],
        performAction: __1(function(h, d, f, o, F, e, O1) {
            const t = e.length - 1;
            switch(F){
                case 2:
                    this.$ = [];
                    break;
                case 3:
                    if (!Array.isArray(e[t]) || e[t].length > 0) {
                        e[t - 1].push(e[t]);
                    }
                    this.$ = e[t - 1];
                    break;
                case 4:
                case 183:
                    this.$ = e[t];
                    break;
                case 11:
                    o.setDirection("TB");
                    this.$ = "TB";
                    break;
                case 12:
                    o.setDirection(e[t - 1]);
                    this.$ = e[t - 1];
                    break;
                case 27:
                    this.$ = e[t - 1].nodes;
                    break;
                case 28:
                case 29:
                case 30:
                case 31:
                case 32:
                    this.$ = [];
                    break;
                case 33:
                    this.$ = o.addSubGraph(e[t - 6], e[t - 1], e[t - 4]);
                    break;
                case 34:
                    this.$ = o.addSubGraph(e[t - 3], e[t - 1], e[t - 3]);
                    break;
                case 35:
                    this.$ = o.addSubGraph(undefined, e[t - 1], undefined);
                    break;
                case 37:
                    this.$ = e[t].trim();
                    o.setAccTitle(this.$);
                    break;
                case 38:
                case 39:
                    this.$ = e[t].trim();
                    o.setAccDescription(this.$);
                    break;
                case 43:
                    this.$ = e[t - 1] + e[t];
                    break;
                case 44:
                    this.$ = e[t];
                    break;
                case 45:
                    o.addVertex(e[t - 1][e[t - 1].length - 1], undefined, undefined, undefined, undefined, undefined, undefined, e[t]);
                    o.addLink(e[t - 3].stmt, e[t - 1], e[t - 2]);
                    this.$ = {
                        stmt: e[t - 1],
                        nodes: e[t - 1].concat(e[t - 3].nodes)
                    };
                    break;
                case 46:
                    o.addLink(e[t - 2].stmt, e[t], e[t - 1]);
                    this.$ = {
                        stmt: e[t],
                        nodes: e[t].concat(e[t - 2].nodes)
                    };
                    break;
                case 47:
                    o.addLink(e[t - 3].stmt, e[t - 1], e[t - 2]);
                    this.$ = {
                        stmt: e[t - 1],
                        nodes: e[t - 1].concat(e[t - 3].nodes)
                    };
                    break;
                case 48:
                    this.$ = {
                        stmt: e[t - 1],
                        nodes: e[t - 1]
                    };
                    break;
                case 49:
                    o.addVertex(e[t - 1][e[t - 1].length - 1], undefined, undefined, undefined, undefined, undefined, undefined, e[t]);
                    this.$ = {
                        stmt: e[t - 1],
                        nodes: e[t - 1],
                        shapeData: e[t]
                    };
                    break;
                case 50:
                    this.$ = {
                        stmt: e[t],
                        nodes: e[t]
                    };
                    break;
                case 51:
                    this.$ = [
                        e[t]
                    ];
                    break;
                case 52:
                    o.addVertex(e[t - 5][e[t - 5].length - 1], undefined, undefined, undefined, undefined, undefined, undefined, e[t - 4]);
                    this.$ = e[t - 5].concat(e[t]);
                    break;
                case 53:
                    this.$ = e[t - 4].concat(e[t]);
                    break;
                case 54:
                    this.$ = e[t];
                    break;
                case 55:
                    this.$ = e[t - 2];
                    o.setClass(e[t - 2], e[t]);
                    break;
                case 56:
                    this.$ = e[t - 3];
                    o.addVertex(e[t - 3], e[t - 1], "square");
                    break;
                case 57:
                    this.$ = e[t - 3];
                    o.addVertex(e[t - 3], e[t - 1], "doublecircle");
                    break;
                case 58:
                    this.$ = e[t - 5];
                    o.addVertex(e[t - 5], e[t - 2], "circle");
                    break;
                case 59:
                    this.$ = e[t - 3];
                    o.addVertex(e[t - 3], e[t - 1], "ellipse");
                    break;
                case 60:
                    this.$ = e[t - 3];
                    o.addVertex(e[t - 3], e[t - 1], "stadium");
                    break;
                case 61:
                    this.$ = e[t - 3];
                    o.addVertex(e[t - 3], e[t - 1], "subroutine");
                    break;
                case 62:
                    this.$ = e[t - 7];
                    o.addVertex(e[t - 7], e[t - 1], "rect", undefined, undefined, undefined, Object.fromEntries([
                        [
                            e[t - 5],
                            e[t - 3]
                        ]
                    ]));
                    break;
                case 63:
                    this.$ = e[t - 3];
                    o.addVertex(e[t - 3], e[t - 1], "cylinder");
                    break;
                case 64:
                    this.$ = e[t - 3];
                    o.addVertex(e[t - 3], e[t - 1], "round");
                    break;
                case 65:
                    this.$ = e[t - 3];
                    o.addVertex(e[t - 3], e[t - 1], "diamond");
                    break;
                case 66:
                    this.$ = e[t - 5];
                    o.addVertex(e[t - 5], e[t - 2], "hexagon");
                    break;
                case 67:
                    this.$ = e[t - 3];
                    o.addVertex(e[t - 3], e[t - 1], "odd");
                    break;
                case 68:
                    this.$ = e[t - 3];
                    o.addVertex(e[t - 3], e[t - 1], "trapezoid");
                    break;
                case 69:
                    this.$ = e[t - 3];
                    o.addVertex(e[t - 3], e[t - 1], "inv_trapezoid");
                    break;
                case 70:
                    this.$ = e[t - 3];
                    o.addVertex(e[t - 3], e[t - 1], "lean_right");
                    break;
                case 71:
                    this.$ = e[t - 3];
                    o.addVertex(e[t - 3], e[t - 1], "lean_left");
                    break;
                case 72:
                    this.$ = e[t];
                    o.addVertex(e[t]);
                    break;
                case 73:
                    e[t - 1].text = e[t];
                    this.$ = e[t - 1];
                    break;
                case 74:
                case 75:
                    e[t - 2].text = e[t - 1];
                    this.$ = e[t - 2];
                    break;
                case 76:
                    this.$ = e[t];
                    break;
                case 77:
                    var L = o.destructLink(e[t], e[t - 2]);
                    this.$ = {
                        type: L.type,
                        stroke: L.stroke,
                        length: L.length,
                        text: e[t - 1]
                    };
                    break;
                case 78:
                    var L = o.destructLink(e[t], e[t - 2]);
                    this.$ = {
                        type: L.type,
                        stroke: L.stroke,
                        length: L.length,
                        text: e[t - 1],
                        id: e[t - 3]
                    };
                    break;
                case 79:
                    this.$ = {
                        text: e[t],
                        type: "text"
                    };
                    break;
                case 80:
                    this.$ = {
                        text: `${e[t - 1].text}${e[t]}`,
                        type: e[t - 1].type
                    };
                    break;
                case 81:
                    this.$ = {
                        text: e[t],
                        type: "string"
                    };
                    break;
                case 82:
                    this.$ = {
                        text: e[t],
                        type: "markdown"
                    };
                    break;
                case 83:
                    var L = o.destructLink(e[t]);
                    this.$ = {
                        type: L.type,
                        stroke: L.stroke,
                        length: L.length
                    };
                    break;
                case 84:
                    var L = o.destructLink(e[t]);
                    this.$ = {
                        type: L.type,
                        stroke: L.stroke,
                        length: L.length,
                        id: e[t - 1]
                    };
                    break;
                case 85:
                    this.$ = e[t - 1];
                    break;
                case 86:
                    this.$ = {
                        text: e[t],
                        type: "text"
                    };
                    break;
                case 87:
                    this.$ = {
                        text: `${e[t - 1].text}${e[t]}`,
                        type: e[t - 1].type
                    };
                    break;
                case 88:
                    this.$ = {
                        text: e[t],
                        type: "string"
                    };
                    break;
                case 89:
                case 104:
                    this.$ = {
                        text: e[t],
                        type: "markdown"
                    };
                    break;
                case 101:
                    this.$ = {
                        text: e[t],
                        type: "text"
                    };
                    break;
                case 102:
                    this.$ = {
                        text: `${e[t - 1].text}${e[t]}`,
                        type: e[t - 1].type
                    };
                    break;
                case 103:
                    this.$ = {
                        text: e[t],
                        type: "text"
                    };
                    break;
                case 105:
                    this.$ = e[t - 4];
                    o.addClass(e[t - 2], e[t]);
                    break;
                case 106:
                    this.$ = e[t - 4];
                    o.setClass(e[t - 2], e[t]);
                    break;
                case 107:
                case 115:
                    this.$ = e[t - 1];
                    o.setClickEvent(e[t - 1], e[t]);
                    break;
                case 108:
                case 116:
                    this.$ = e[t - 3];
                    o.setClickEvent(e[t - 3], e[t - 2]);
                    o.setTooltip(e[t - 3], e[t]);
                    break;
                case 109:
                    this.$ = e[t - 2];
                    o.setClickEvent(e[t - 2], e[t - 1], e[t]);
                    break;
                case 110:
                    this.$ = e[t - 4];
                    o.setClickEvent(e[t - 4], e[t - 3], e[t - 2]);
                    o.setTooltip(e[t - 4], e[t]);
                    break;
                case 111:
                    this.$ = e[t - 2];
                    o.setLink(e[t - 2], e[t]);
                    break;
                case 112:
                    this.$ = e[t - 4];
                    o.setLink(e[t - 4], e[t - 2]);
                    o.setTooltip(e[t - 4], e[t]);
                    break;
                case 113:
                    this.$ = e[t - 4];
                    o.setLink(e[t - 4], e[t - 2], e[t]);
                    break;
                case 114:
                    this.$ = e[t - 6];
                    o.setLink(e[t - 6], e[t - 4], e[t]);
                    o.setTooltip(e[t - 6], e[t - 2]);
                    break;
                case 117:
                    this.$ = e[t - 1];
                    o.setLink(e[t - 1], e[t]);
                    break;
                case 118:
                    this.$ = e[t - 3];
                    o.setLink(e[t - 3], e[t - 2]);
                    o.setTooltip(e[t - 3], e[t]);
                    break;
                case 119:
                    this.$ = e[t - 3];
                    o.setLink(e[t - 3], e[t - 2], e[t]);
                    break;
                case 120:
                    this.$ = e[t - 5];
                    o.setLink(e[t - 5], e[t - 4], e[t]);
                    o.setTooltip(e[t - 5], e[t - 2]);
                    break;
                case 121:
                    this.$ = e[t - 4];
                    o.addVertex(e[t - 2], undefined, undefined, e[t]);
                    break;
                case 122:
                    this.$ = e[t - 4];
                    o.updateLink([
                        e[t - 2]
                    ], e[t]);
                    break;
                case 123:
                    this.$ = e[t - 4];
                    o.updateLink(e[t - 2], e[t]);
                    break;
                case 124:
                    this.$ = e[t - 8];
                    o.updateLinkInterpolate([
                        e[t - 6]
                    ], e[t - 2]);
                    o.updateLink([
                        e[t - 6]
                    ], e[t]);
                    break;
                case 125:
                    this.$ = e[t - 8];
                    o.updateLinkInterpolate(e[t - 6], e[t - 2]);
                    o.updateLink(e[t - 6], e[t]);
                    break;
                case 126:
                    this.$ = e[t - 6];
                    o.updateLinkInterpolate([
                        e[t - 4]
                    ], e[t]);
                    break;
                case 127:
                    this.$ = e[t - 6];
                    o.updateLinkInterpolate(e[t - 4], e[t]);
                    break;
                case 128:
                case 130:
                    this.$ = [
                        e[t]
                    ];
                    break;
                case 129:
                case 131:
                    e[t - 2].push(e[t]);
                    this.$ = e[t - 2];
                    break;
                case 133:
                    this.$ = e[t - 1] + e[t];
                    break;
                case 181:
                    this.$ = e[t];
                    break;
                case 182:
                    this.$ = `${e[t - 1]}${e[t]}`;
                    break;
                case 184:
                    this.$ = `${e[t - 1]}${e[t]}`;
                    break;
                case 185:
                    this.$ = {
                        stmt: "dir",
                        value: "TB"
                    };
                    break;
                case 186:
                    this.$ = {
                        stmt: "dir",
                        value: "BT"
                    };
                    break;
                case 187:
                    this.$ = {
                        stmt: "dir",
                        value: "RL"
                    };
                    break;
                case 188:
                    this.$ = {
                        stmt: "dir",
                        value: "LR"
                    };
                    break;
                case 189:
                    this.$ = {
                        stmt: "dir",
                        value: "TD"
                    };
                    break;
            }
        }, "anonymous"),
        table: [
            {
                3: 1,
                4: 2,
                9: i,
                10: r,
                12: a
            },
            {
                1: [
                    3
                ]
            },
            s(n, l, {
                5: 6
            }),
            {
                4: 7,
                9: i,
                10: r,
                12: a
            },
            {
                4: 8,
                9: i,
                10: r,
                12: a
            },
            {
                13: [
                    1,
                    9
                ],
                14: [
                    1,
                    10
                ]
            },
            {
                1: [
                    2,
                    1
                ],
                6: 11,
                7: 12,
                8: p,
                9: c,
                10: g,
                11: u,
                20: 17,
                22: 18,
                23: 19,
                24: 20,
                25: 21,
                26: 22,
                27: A,
                33: 24,
                34: v,
                36: b,
                38: m,
                42: 28,
                43: 39,
                44: S,
                45: 40,
                47: 41,
                60: B,
                84: b1,
                85: A1,
                86: P1,
                87: K,
                88: h1,
                89: V,
                102: I,
                105: w,
                106: R,
                109: N,
                111: G,
                113: 42,
                114: P,
                115: O,
                116: M,
                121: M1,
                122: U1,
                123: z1,
                124: W1,
                125: j1
            },
            s(n, [
                2,
                9
            ]),
            s(n, [
                2,
                10
            ]),
            s(n, [
                2,
                11
            ]),
            {
                8: [
                    1,
                    55
                ],
                9: [
                    1,
                    56
                ],
                10: d1,
                15: 54,
                18: 57
            },
            s(y, [
                2,
                3
            ]),
            s(y, [
                2,
                4
            ]),
            s(y, [
                2,
                5
            ]),
            s(y, [
                2,
                6
            ]),
            s(y, [
                2,
                7
            ]),
            s(y, [
                2,
                8
            ]),
            {
                8: $,
                9: e1,
                11: t1,
                21: 59,
                41: 60,
                72: 64,
                75: [
                    1,
                    65
                ],
                77: [
                    1,
                    67
                ],
                78: [
                    1,
                    66
                ]
            },
            {
                8: $,
                9: e1,
                11: t1,
                21: 68
            },
            {
                8: $,
                9: e1,
                11: t1,
                21: 69
            },
            {
                8: $,
                9: e1,
                11: t1,
                21: 70
            },
            {
                8: $,
                9: e1,
                11: t1,
                21: 71
            },
            {
                8: $,
                9: e1,
                11: t1,
                21: 72
            },
            {
                8: $,
                9: e1,
                10: [
                    1,
                    73
                ],
                11: t1,
                21: 74
            },
            s(y, [
                2,
                36
            ]),
            {
                35: [
                    1,
                    75
                ]
            },
            {
                37: [
                    1,
                    76
                ]
            },
            s(y, [
                2,
                39
            ]),
            s(E1, [
                2,
                50
            ], {
                18: 77,
                39: 78,
                10: d1,
                40: ne
            }),
            {
                10: [
                    1,
                    80
                ]
            },
            {
                10: [
                    1,
                    81
                ]
            },
            {
                10: [
                    1,
                    82
                ]
            },
            {
                10: [
                    1,
                    83
                ]
            },
            {
                14: C1,
                44: T1,
                60: S1,
                80: [
                    1,
                    87
                ],
                89: y1,
                95: [
                    1,
                    84
                ],
                97: [
                    1,
                    85
                ],
                101: 86,
                105: x1,
                106: F1,
                109: _1,
                111: B1,
                114: v1,
                115: L1,
                116: V1,
                120: 88
            },
            s(y, [
                2,
                185
            ]),
            s(y, [
                2,
                186
            ]),
            s(y, [
                2,
                187
            ]),
            s(y, [
                2,
                188
            ]),
            s(y, [
                2,
                189
            ]),
            s(k1, [
                2,
                51
            ]),
            s(k1, [
                2,
                54
            ], {
                46: [
                    1,
                    100
                ]
            }),
            s(z, [
                2,
                72
            ], {
                113: 113,
                29: [
                    1,
                    101
                ],
                44: S,
                48: [
                    1,
                    102
                ],
                50: [
                    1,
                    103
                ],
                52: [
                    1,
                    104
                ],
                54: [
                    1,
                    105
                ],
                56: [
                    1,
                    106
                ],
                58: [
                    1,
                    107
                ],
                60: B,
                63: [
                    1,
                    108
                ],
                65: [
                    1,
                    109
                ],
                67: [
                    1,
                    110
                ],
                68: [
                    1,
                    111
                ],
                70: [
                    1,
                    112
                ],
                89: V,
                102: I,
                105: w,
                106: R,
                109: N,
                111: G,
                114: P,
                115: O,
                116: M
            }),
            s(q, [
                2,
                181
            ]),
            s(q, [
                2,
                142
            ]),
            s(q, [
                2,
                143
            ]),
            s(q, [
                2,
                144
            ]),
            s(q, [
                2,
                145
            ]),
            s(q, [
                2,
                146
            ]),
            s(q, [
                2,
                147
            ]),
            s(q, [
                2,
                148
            ]),
            s(q, [
                2,
                149
            ]),
            s(q, [
                2,
                150
            ]),
            s(q, [
                2,
                151
            ]),
            s(q, [
                2,
                152
            ]),
            s(n, [
                2,
                12
            ]),
            s(n, [
                2,
                18
            ]),
            s(n, [
                2,
                19
            ]),
            {
                9: [
                    1,
                    114
                ]
            },
            s(ue, [
                2,
                26
            ], {
                18: 115,
                10: d1
            }),
            s(y, [
                2,
                27
            ]),
            {
                42: 116,
                43: 39,
                44: S,
                45: 40,
                47: 41,
                60: B,
                89: V,
                102: I,
                105: w,
                106: R,
                109: N,
                111: G,
                113: 42,
                114: P,
                115: O,
                116: M
            },
            s(y, [
                2,
                40
            ]),
            s(y, [
                2,
                41
            ]),
            s(y, [
                2,
                42
            ]),
            s(I1, [
                2,
                76
            ], {
                73: 117,
                62: [
                    1,
                    119
                ],
                74: [
                    1,
                    118
                ]
            }),
            {
                76: 120,
                79: 121,
                80: oe,
                81: le,
                116: K1,
                119: Y1
            },
            {
                75: [
                    1,
                    126
                ],
                77: [
                    1,
                    127
                ]
            },
            s(ce, [
                2,
                83
            ]),
            s(y, [
                2,
                28
            ]),
            s(y, [
                2,
                29
            ]),
            s(y, [
                2,
                30
            ]),
            s(y, [
                2,
                31
            ]),
            s(y, [
                2,
                32
            ]),
            {
                10: he,
                12: de,
                14: pe,
                27: fe,
                28: 128,
                32: ge,
                44: be,
                60: Ae,
                75: ke,
                80: [
                    1,
                    130
                ],
                81: [
                    1,
                    131
                ],
                83: 141,
                84: me,
                85: De,
                86: Ee,
                87: Ce,
                88: Te,
                89: Se,
                90: ye,
                91: 129,
                105: xe,
                109: Fe,
                111: _e,
                114: Be,
                115: ve,
                116: Le
            },
            s(Q1, l, {
                5: 154
            }),
            s(y, [
                2,
                37
            ]),
            s(y, [
                2,
                38
            ]),
            s(E1, [
                2,
                48
            ], {
                44: Ve
            }),
            s(E1, [
                2,
                49
            ], {
                18: 156,
                10: d1,
                40: Ie
            }),
            s(k1, [
                2,
                44
            ]),
            {
                44: S,
                47: 158,
                60: B,
                89: V,
                102: I,
                105: w,
                106: R,
                109: N,
                111: G,
                113: 42,
                114: P,
                115: O,
                116: M
            },
            {
                102: [
                    1,
                    159
                ],
                103: 160,
                105: [
                    1,
                    161
                ]
            },
            {
                44: S,
                47: 162,
                60: B,
                89: V,
                102: I,
                105: w,
                106: R,
                109: N,
                111: G,
                113: 42,
                114: P,
                115: O,
                116: M
            },
            {
                44: S,
                47: 163,
                60: B,
                89: V,
                102: I,
                105: w,
                106: R,
                109: N,
                111: G,
                113: 42,
                114: P,
                115: O,
                116: M
            },
            s(_, [
                2,
                107
            ], {
                10: [
                    1,
                    164
                ],
                96: [
                    1,
                    165
                ]
            }),
            {
                80: [
                    1,
                    166
                ]
            },
            s(_, [
                2,
                115
            ], {
                120: 168,
                10: [
                    1,
                    167
                ],
                14: C1,
                44: T1,
                60: S1,
                89: y1,
                105: x1,
                106: F1,
                109: _1,
                111: B1,
                114: v1,
                115: L1,
                116: V1
            }),
            s(_, [
                2,
                117
            ], {
                10: [
                    1,
                    169
                ]
            }),
            s(H, [
                2,
                183
            ]),
            s(H, [
                2,
                170
            ]),
            s(H, [
                2,
                171
            ]),
            s(H, [
                2,
                172
            ]),
            s(H, [
                2,
                173
            ]),
            s(H, [
                2,
                174
            ]),
            s(H, [
                2,
                175
            ]),
            s(H, [
                2,
                176
            ]),
            s(H, [
                2,
                177
            ]),
            s(H, [
                2,
                178
            ]),
            s(H, [
                2,
                179
            ]),
            s(H, [
                2,
                180
            ]),
            {
                44: S,
                47: 170,
                60: B,
                89: V,
                102: I,
                105: w,
                106: R,
                109: N,
                111: G,
                113: 42,
                114: P,
                115: O,
                116: M
            },
            {
                30: 171,
                67: D,
                80: W,
                81: j,
                82: 172,
                116: E,
                117: C,
                118: T
            },
            {
                30: 179,
                67: D,
                80: W,
                81: j,
                82: 172,
                116: E,
                117: C,
                118: T
            },
            {
                30: 181,
                50: [
                    1,
                    180
                ],
                67: D,
                80: W,
                81: j,
                82: 172,
                116: E,
                117: C,
                118: T
            },
            {
                30: 182,
                67: D,
                80: W,
                81: j,
                82: 172,
                116: E,
                117: C,
                118: T
            },
            {
                30: 183,
                67: D,
                80: W,
                81: j,
                82: 172,
                116: E,
                117: C,
                118: T
            },
            {
                30: 184,
                67: D,
                80: W,
                81: j,
                82: 172,
                116: E,
                117: C,
                118: T
            },
            {
                109: [
                    1,
                    185
                ]
            },
            {
                30: 186,
                67: D,
                80: W,
                81: j,
                82: 172,
                116: E,
                117: C,
                118: T
            },
            {
                30: 187,
                65: [
                    1,
                    188
                ],
                67: D,
                80: W,
                81: j,
                82: 172,
                116: E,
                117: C,
                118: T
            },
            {
                30: 189,
                67: D,
                80: W,
                81: j,
                82: 172,
                116: E,
                117: C,
                118: T
            },
            {
                30: 190,
                67: D,
                80: W,
                81: j,
                82: 172,
                116: E,
                117: C,
                118: T
            },
            {
                30: 191,
                67: D,
                80: W,
                81: j,
                82: 172,
                116: E,
                117: C,
                118: T
            },
            s(q, [
                2,
                182
            ]),
            s(n, [
                2,
                20
            ]),
            s(ue, [
                2,
                25
            ]),
            s(E1, [
                2,
                46
            ], {
                39: 192,
                18: 193,
                10: d1,
                40: ne
            }),
            s(I1, [
                2,
                73
            ], {
                10: [
                    1,
                    194
                ]
            }),
            {
                10: [
                    1,
                    195
                ]
            },
            {
                30: 196,
                67: D,
                80: W,
                81: j,
                82: 172,
                116: E,
                117: C,
                118: T
            },
            {
                77: [
                    1,
                    197
                ],
                79: 198,
                116: K1,
                119: Y1
            },
            s(w1, [
                2,
                79
            ]),
            s(w1, [
                2,
                81
            ]),
            s(w1, [
                2,
                82
            ]),
            s(w1, [
                2,
                168
            ]),
            s(w1, [
                2,
                169
            ]),
            {
                76: 199,
                79: 121,
                80: oe,
                81: le,
                116: K1,
                119: Y1
            },
            s(ce, [
                2,
                84
            ]),
            {
                8: $,
                9: e1,
                10: he,
                11: t1,
                12: de,
                14: pe,
                21: 201,
                27: fe,
                29: [
                    1,
                    200
                ],
                32: ge,
                44: be,
                60: Ae,
                75: ke,
                83: 141,
                84: me,
                85: De,
                86: Ee,
                87: Ce,
                88: Te,
                89: Se,
                90: ye,
                91: 202,
                105: xe,
                109: Fe,
                111: _e,
                114: Be,
                115: ve,
                116: Le
            },
            s(x, [
                2,
                101
            ]),
            s(x, [
                2,
                103
            ]),
            s(x, [
                2,
                104
            ]),
            s(x, [
                2,
                157
            ]),
            s(x, [
                2,
                158
            ]),
            s(x, [
                2,
                159
            ]),
            s(x, [
                2,
                160
            ]),
            s(x, [
                2,
                161
            ]),
            s(x, [
                2,
                162
            ]),
            s(x, [
                2,
                163
            ]),
            s(x, [
                2,
                164
            ]),
            s(x, [
                2,
                165
            ]),
            s(x, [
                2,
                166
            ]),
            s(x, [
                2,
                167
            ]),
            s(x, [
                2,
                90
            ]),
            s(x, [
                2,
                91
            ]),
            s(x, [
                2,
                92
            ]),
            s(x, [
                2,
                93
            ]),
            s(x, [
                2,
                94
            ]),
            s(x, [
                2,
                95
            ]),
            s(x, [
                2,
                96
            ]),
            s(x, [
                2,
                97
            ]),
            s(x, [
                2,
                98
            ]),
            s(x, [
                2,
                99
            ]),
            s(x, [
                2,
                100
            ]),
            {
                6: 11,
                7: 12,
                8: p,
                9: c,
                10: g,
                11: u,
                20: 17,
                22: 18,
                23: 19,
                24: 20,
                25: 21,
                26: 22,
                27: A,
                32: [
                    1,
                    203
                ],
                33: 24,
                34: v,
                36: b,
                38: m,
                42: 28,
                43: 39,
                44: S,
                45: 40,
                47: 41,
                60: B,
                84: b1,
                85: A1,
                86: P1,
                87: K,
                88: h1,
                89: V,
                102: I,
                105: w,
                106: R,
                109: N,
                111: G,
                113: 42,
                114: P,
                115: O,
                116: M,
                121: M1,
                122: U1,
                123: z1,
                124: W1,
                125: j1
            },
            {
                10: d1,
                18: 204
            },
            {
                44: [
                    1,
                    205
                ]
            },
            s(k1, [
                2,
                43
            ]),
            {
                10: [
                    1,
                    206
                ],
                44: S,
                60: B,
                89: V,
                102: I,
                105: w,
                106: R,
                109: N,
                111: G,
                113: 113,
                114: P,
                115: O,
                116: M
            },
            {
                10: [
                    1,
                    207
                ]
            },
            {
                10: [
                    1,
                    208
                ],
                106: [
                    1,
                    209
                ]
            },
            s(we, [
                2,
                128
            ]),
            {
                10: [
                    1,
                    210
                ],
                44: S,
                60: B,
                89: V,
                102: I,
                105: w,
                106: R,
                109: N,
                111: G,
                113: 113,
                114: P,
                115: O,
                116: M
            },
            {
                10: [
                    1,
                    211
                ],
                44: S,
                60: B,
                89: V,
                102: I,
                105: w,
                106: R,
                109: N,
                111: G,
                113: 113,
                114: P,
                115: O,
                116: M
            },
            {
                80: [
                    1,
                    212
                ]
            },
            s(_, [
                2,
                109
            ], {
                10: [
                    1,
                    213
                ]
            }),
            s(_, [
                2,
                111
            ], {
                10: [
                    1,
                    214
                ]
            }),
            {
                80: [
                    1,
                    215
                ]
            },
            s(H, [
                2,
                184
            ]),
            {
                80: [
                    1,
                    216
                ],
                98: [
                    1,
                    217
                ]
            },
            s(k1, [
                2,
                55
            ], {
                113: 113,
                44: S,
                60: B,
                89: V,
                102: I,
                105: w,
                106: R,
                109: N,
                111: G,
                114: P,
                115: O,
                116: M
            }),
            {
                31: [
                    1,
                    218
                ],
                67: D,
                82: 219,
                116: E,
                117: C,
                118: T
            },
            s(p1, [
                2,
                86
            ]),
            s(p1, [
                2,
                88
            ]),
            s(p1, [
                2,
                89
            ]),
            s(p1, [
                2,
                153
            ]),
            s(p1, [
                2,
                154
            ]),
            s(p1, [
                2,
                155
            ]),
            s(p1, [
                2,
                156
            ]),
            {
                49: [
                    1,
                    220
                ],
                67: D,
                82: 219,
                116: E,
                117: C,
                118: T
            },
            {
                30: 221,
                67: D,
                80: W,
                81: j,
                82: 172,
                116: E,
                117: C,
                118: T
            },
            {
                51: [
                    1,
                    222
                ],
                67: D,
                82: 219,
                116: E,
                117: C,
                118: T
            },
            {
                53: [
                    1,
                    223
                ],
                67: D,
                82: 219,
                116: E,
                117: C,
                118: T
            },
            {
                55: [
                    1,
                    224
                ],
                67: D,
                82: 219,
                116: E,
                117: C,
                118: T
            },
            {
                57: [
                    1,
                    225
                ],
                67: D,
                82: 219,
                116: E,
                117: C,
                118: T
            },
            {
                60: [
                    1,
                    226
                ]
            },
            {
                64: [
                    1,
                    227
                ],
                67: D,
                82: 219,
                116: E,
                117: C,
                118: T
            },
            {
                66: [
                    1,
                    228
                ],
                67: D,
                82: 219,
                116: E,
                117: C,
                118: T
            },
            {
                30: 229,
                67: D,
                80: W,
                81: j,
                82: 172,
                116: E,
                117: C,
                118: T
            },
            {
                31: [
                    1,
                    230
                ],
                67: D,
                82: 219,
                116: E,
                117: C,
                118: T
            },
            {
                67: D,
                69: [
                    1,
                    231
                ],
                71: [
                    1,
                    232
                ],
                82: 219,
                116: E,
                117: C,
                118: T
            },
            {
                67: D,
                69: [
                    1,
                    234
                ],
                71: [
                    1,
                    233
                ],
                82: 219,
                116: E,
                117: C,
                118: T
            },
            s(E1, [
                2,
                45
            ], {
                18: 156,
                10: d1,
                40: Ie
            }),
            s(E1, [
                2,
                47
            ], {
                44: Ve
            }),
            s(I1, [
                2,
                75
            ]),
            s(I1, [
                2,
                74
            ]),
            {
                62: [
                    1,
                    235
                ],
                67: D,
                82: 219,
                116: E,
                117: C,
                118: T
            },
            s(I1, [
                2,
                77
            ]),
            s(w1, [
                2,
                80
            ]),
            {
                77: [
                    1,
                    236
                ],
                79: 198,
                116: K1,
                119: Y1
            },
            {
                30: 237,
                67: D,
                80: W,
                81: j,
                82: 172,
                116: E,
                117: C,
                118: T
            },
            s(Q1, l, {
                5: 238
            }),
            s(x, [
                2,
                102
            ]),
            s(y, [
                2,
                35
            ]),
            {
                43: 239,
                44: S,
                45: 40,
                47: 41,
                60: B,
                89: V,
                102: I,
                105: w,
                106: R,
                109: N,
                111: G,
                113: 42,
                114: P,
                115: O,
                116: M
            },
            {
                10: d1,
                18: 240
            },
            {
                10: s1,
                60: i1,
                84: r1,
                92: 241,
                105: a1,
                107: 242,
                108: 243,
                109: n1,
                110: u1,
                111: o1,
                112: l1
            },
            {
                10: s1,
                60: i1,
                84: r1,
                92: 252,
                104: [
                    1,
                    253
                ],
                105: a1,
                107: 242,
                108: 243,
                109: n1,
                110: u1,
                111: o1,
                112: l1
            },
            {
                10: s1,
                60: i1,
                84: r1,
                92: 254,
                104: [
                    1,
                    255
                ],
                105: a1,
                107: 242,
                108: 243,
                109: n1,
                110: u1,
                111: o1,
                112: l1
            },
            {
                105: [
                    1,
                    256
                ]
            },
            {
                10: s1,
                60: i1,
                84: r1,
                92: 257,
                105: a1,
                107: 242,
                108: 243,
                109: n1,
                110: u1,
                111: o1,
                112: l1
            },
            {
                44: S,
                47: 258,
                60: B,
                89: V,
                102: I,
                105: w,
                106: R,
                109: N,
                111: G,
                113: 42,
                114: P,
                115: O,
                116: M
            },
            s(_, [
                2,
                108
            ]),
            {
                80: [
                    1,
                    259
                ]
            },
            {
                80: [
                    1,
                    260
                ],
                98: [
                    1,
                    261
                ]
            },
            s(_, [
                2,
                116
            ]),
            s(_, [
                2,
                118
            ], {
                10: [
                    1,
                    262
                ]
            }),
            s(_, [
                2,
                119
            ]),
            s(z, [
                2,
                56
            ]),
            s(p1, [
                2,
                87
            ]),
            s(z, [
                2,
                57
            ]),
            {
                51: [
                    1,
                    263
                ],
                67: D,
                82: 219,
                116: E,
                117: C,
                118: T
            },
            s(z, [
                2,
                64
            ]),
            s(z, [
                2,
                59
            ]),
            s(z, [
                2,
                60
            ]),
            s(z, [
                2,
                61
            ]),
            {
                109: [
                    1,
                    264
                ]
            },
            s(z, [
                2,
                63
            ]),
            s(z, [
                2,
                65
            ]),
            {
                66: [
                    1,
                    265
                ],
                67: D,
                82: 219,
                116: E,
                117: C,
                118: T
            },
            s(z, [
                2,
                67
            ]),
            s(z, [
                2,
                68
            ]),
            s(z, [
                2,
                70
            ]),
            s(z, [
                2,
                69
            ]),
            s(z, [
                2,
                71
            ]),
            s([
                10,
                44,
                60,
                89,
                102,
                105,
                106,
                109,
                111,
                114,
                115,
                116
            ], [
                2,
                85
            ]),
            s(I1, [
                2,
                78
            ]),
            {
                31: [
                    1,
                    266
                ],
                67: D,
                82: 219,
                116: E,
                117: C,
                118: T
            },
            {
                6: 11,
                7: 12,
                8: p,
                9: c,
                10: g,
                11: u,
                20: 17,
                22: 18,
                23: 19,
                24: 20,
                25: 21,
                26: 22,
                27: A,
                32: [
                    1,
                    267
                ],
                33: 24,
                34: v,
                36: b,
                38: m,
                42: 28,
                43: 39,
                44: S,
                45: 40,
                47: 41,
                60: B,
                84: b1,
                85: A1,
                86: P1,
                87: K,
                88: h1,
                89: V,
                102: I,
                105: w,
                106: R,
                109: N,
                111: G,
                113: 42,
                114: P,
                115: O,
                116: M,
                121: M1,
                122: U1,
                123: z1,
                124: W1,
                125: j1
            },
            s(k1, [
                2,
                53
            ]),
            {
                43: 268,
                44: S,
                45: 40,
                47: 41,
                60: B,
                89: V,
                102: I,
                105: w,
                106: R,
                109: N,
                111: G,
                113: 42,
                114: P,
                115: O,
                116: M
            },
            s(_, [
                2,
                121
            ], {
                106: R1
            }),
            s(Re, [
                2,
                130
            ], {
                108: 270,
                10: s1,
                60: i1,
                84: r1,
                105: a1,
                109: n1,
                110: u1,
                111: o1,
                112: l1
            }),
            s(J, [
                2,
                132
            ]),
            s(J, [
                2,
                134
            ]),
            s(J, [
                2,
                135
            ]),
            s(J, [
                2,
                136
            ]),
            s(J, [
                2,
                137
            ]),
            s(J, [
                2,
                138
            ]),
            s(J, [
                2,
                139
            ]),
            s(J, [
                2,
                140
            ]),
            s(J, [
                2,
                141
            ]),
            s(_, [
                2,
                122
            ], {
                106: R1
            }),
            {
                10: [
                    1,
                    271
                ]
            },
            s(_, [
                2,
                123
            ], {
                106: R1
            }),
            {
                10: [
                    1,
                    272
                ]
            },
            s(we, [
                2,
                129
            ]),
            s(_, [
                2,
                105
            ], {
                106: R1
            }),
            s(_, [
                2,
                106
            ], {
                113: 113,
                44: S,
                60: B,
                89: V,
                102: I,
                105: w,
                106: R,
                109: N,
                111: G,
                114: P,
                115: O,
                116: M
            }),
            s(_, [
                2,
                110
            ]),
            s(_, [
                2,
                112
            ], {
                10: [
                    1,
                    273
                ]
            }),
            s(_, [
                2,
                113
            ]),
            {
                98: [
                    1,
                    274
                ]
            },
            {
                51: [
                    1,
                    275
                ]
            },
            {
                62: [
                    1,
                    276
                ]
            },
            {
                66: [
                    1,
                    277
                ]
            },
            {
                8: $,
                9: e1,
                11: t1,
                21: 278
            },
            s(y, [
                2,
                34
            ]),
            s(k1, [
                2,
                52
            ]),
            {
                10: s1,
                60: i1,
                84: r1,
                105: a1,
                107: 279,
                108: 243,
                109: n1,
                110: u1,
                111: o1,
                112: l1
            },
            s(J, [
                2,
                133
            ]),
            {
                14: C1,
                44: T1,
                60: S1,
                89: y1,
                101: 280,
                105: x1,
                106: F1,
                109: _1,
                111: B1,
                114: v1,
                115: L1,
                116: V1,
                120: 88
            },
            {
                14: C1,
                44: T1,
                60: S1,
                89: y1,
                101: 281,
                105: x1,
                106: F1,
                109: _1,
                111: B1,
                114: v1,
                115: L1,
                116: V1,
                120: 88
            },
            {
                98: [
                    1,
                    282
                ]
            },
            s(_, [
                2,
                120
            ]),
            s(z, [
                2,
                58
            ]),
            {
                30: 283,
                67: D,
                80: W,
                81: j,
                82: 172,
                116: E,
                117: C,
                118: T
            },
            s(z, [
                2,
                66
            ]),
            s(Q1, l, {
                5: 284
            }),
            s(Re, [
                2,
                131
            ], {
                108: 270,
                10: s1,
                60: i1,
                84: r1,
                105: a1,
                109: n1,
                110: u1,
                111: o1,
                112: l1
            }),
            s(_, [
                2,
                126
            ], {
                120: 168,
                10: [
                    1,
                    285
                ],
                14: C1,
                44: T1,
                60: S1,
                89: y1,
                105: x1,
                106: F1,
                109: _1,
                111: B1,
                114: v1,
                115: L1,
                116: V1
            }),
            s(_, [
                2,
                127
            ], {
                120: 168,
                10: [
                    1,
                    286
                ],
                14: C1,
                44: T1,
                60: S1,
                89: y1,
                105: x1,
                106: F1,
                109: _1,
                111: B1,
                114: v1,
                115: L1,
                116: V1
            }),
            s(_, [
                2,
                114
            ]),
            {
                31: [
                    1,
                    287
                ],
                67: D,
                82: 219,
                116: E,
                117: C,
                118: T
            },
            {
                6: 11,
                7: 12,
                8: p,
                9: c,
                10: g,
                11: u,
                20: 17,
                22: 18,
                23: 19,
                24: 20,
                25: 21,
                26: 22,
                27: A,
                32: [
                    1,
                    288
                ],
                33: 24,
                34: v,
                36: b,
                38: m,
                42: 28,
                43: 39,
                44: S,
                45: 40,
                47: 41,
                60: B,
                84: b1,
                85: A1,
                86: P1,
                87: K,
                88: h1,
                89: V,
                102: I,
                105: w,
                106: R,
                109: N,
                111: G,
                113: 42,
                114: P,
                115: O,
                116: M,
                121: M1,
                122: U1,
                123: z1,
                124: W1,
                125: j1
            },
            {
                10: s1,
                60: i1,
                84: r1,
                92: 289,
                105: a1,
                107: 242,
                108: 243,
                109: n1,
                110: u1,
                111: o1,
                112: l1
            },
            {
                10: s1,
                60: i1,
                84: r1,
                92: 290,
                105: a1,
                107: 242,
                108: 243,
                109: n1,
                110: u1,
                111: o1,
                112: l1
            },
            s(z, [
                2,
                62
            ]),
            s(y, [
                2,
                33
            ]),
            s(_, [
                2,
                124
            ], {
                106: R1
            }),
            s(_, [
                2,
                125
            ], {
                106: R1
            })
        ],
        defaultActions: {},
        parseError: __1(function(h, d) {
            if (d.recoverable) {
                this.trace(h);
            } else {
                const f = new Error(h);
                f.hash = d;
                throw f;
            }
        }, "parseError"),
        parse: __1(function(h) {
            const d = this;
            let f = [
                0
            ];
            let o = [];
            let F = [
                null
            ];
            let e = [];
            const table = this.table;
            let t = "";
            let L = 0;
            let Ne = 0;
            const Ke = 2;
            const Ge = 1;
            const Ye = e.slice.call(arguments, 1);
            const U = Object.create(this.lexer);
            const m1 = {
                yy: {}
            };
            for(const J1 in this.yy){
                if (Object.prototype.hasOwnProperty.call(this.yy, J1)) {
                    m1.yy[J1] = this.yy[J1];
                }
            }
            U.setInput(h, m1.yy);
            m1.yy.lexer = U;
            m1.yy.parser = this;
            if (typeof U.yylloc === "undefined") {
                U.yylloc = {};
            }
            let U_yylloc = U.yylloc;
            e.push(U_yylloc);
            const qe = U.options && U.options.ranges;
            if (typeof m1.yy.parseError === "function") {
                this.parseError = m1.yy.parseError;
            } else {
                this.parseError = Object.getPrototypeOf(this).parseError;
            }
            function He(X) {
                f.length = f.length - 2 * X;
                F.length = F.length - X;
                e.length = e.length - X;
            }
            __1(He, "popStack");
            function Pe() {
                let X;
                X = o.pop() || U.lex() || Ge;
                if (typeof X !== "number") {
                    if (X instanceof Array) {
                        o = X;
                        X = o.pop();
                    }
                    X = d.symbols_[X] || X;
                }
                return X;
            }
            __1(Pe, "lex");
            let Y;
            let D1;
            let Q;
            let ee;
            const N1 = {};
            let H1;
            let c1;
            let Oe;
            let expected;
            while(true){
                D1 = f[f.length - 1];
                if (this.defaultActions[D1]) {
                    Q = this.defaultActions[D1];
                } else {
                    if (Y === null || typeof Y === "undefined") {
                        Y = Pe();
                    }
                    Q = table[D1] && table[D1][Y];
                }
                if (typeof Q === "undefined" || !Q.length || !Q[0]) {
                    let te = "";
                    expected = [];
                    for(H1 in table[D1]){
                        if (this.terminals_[H1] && H1 > Ke) {
                            expected.push(`'${this.terminals_[H1]}'`);
                        }
                    }
                    if (U.showPosition) {
                        te = `Parse error on line ${L + 1}${`:
`}${U.showPosition()}${`
Expecting `}${expected.join(", ")}, got '${this.terminals_[Y] || Y}'`;
                    } else {
                        te = `Parse error on line ${L + 1}: Unexpected ${Y == Ge ? "end of input" : `'${this.terminals_[Y] || Y}'`}`;
                    }
                    this.parseError(te, {
                        text: U.match,
                        token: this.terminals_[Y] || Y,
                        line: U.yylineno,
                        loc: U_yylloc,
                        expected
                    });
                }
                if (Q[0] instanceof Array && Q.length > 1) {
                    throw new Error(`Parse Error: multiple actions possible at state: ${D1}, token: ${Y}`);
                }
                switch(Q[0]){
                    case 1:
                        f.push(Y);
                        F.push(U.yytext);
                        e.push(U.yylloc);
                        f.push(Q[1]);
                        Y = null;
                        Ne = U.yyleng;
                        t = U.yytext;
                        L = U.yylineno;
                        U_yylloc = U.yylloc;
                        break;
                    case 2:
                        c1 = this.productions_[Q[1]][1];
                        N1.$ = F[F.length - c1];
                        N1._$ = {
                            first_line: e[e.length - (c1 || 1)].first_line,
                            last_line: e[e.length - 1].last_line,
                            first_column: e[e.length - (c1 || 1)].first_column,
                            last_column: e[e.length - 1].last_column
                        };
                        if (qe) {
                            N1._$.range = [
                                e[e.length - (c1 || 1)].range[0],
                                e[e.length - 1].range[1]
                            ];
                        }
                        ee = this.performAction.apply(N1, [
                            t,
                            Ne,
                            L,
                            m1.yy,
                            Q[1],
                            F,
                            e
                        ].concat(Ye));
                        if (typeof ee !== "undefined") {
                            return ee;
                        }
                        if (c1) {
                            f = f.slice(0, -1 * c1 * 2);
                            F = F.slice(0, -1 * c1);
                            e = e.slice(0, -1 * c1);
                        }
                        f.push(this.productions_[Q[1]][0]);
                        F.push(N1.$);
                        e.push(N1._$);
                        Oe = table[f[f.length - 2]][f[f.length - 1]];
                        f.push(Oe);
                        break;
                    case 3:
                        return true;
                }
            }
            return true;
        }, "parse")
    };
    const je = (()=>{
        const f1 = {
            EOF: 1,
            parseError: __1(function(d, f) {
                if (this.yy.parser) {
                    this.yy.parser.parseError(d, f);
                } else {
                    throw new Error(d);
                }
            }, "parseError"),
            setInput: __1(function(h, d) {
                this.yy = d || this.yy || {};
                this._input = h;
                this._more = this._backtrack = this.done = false;
                this.yylineno = this.yyleng = 0;
                this.yytext = this.matched = this.match = "";
                this.conditionStack = [
                    "INITIAL"
                ];
                this.yylloc = {
                    first_line: 1,
                    first_column: 0,
                    last_line: 1,
                    last_column: 0
                };
                if (this.options.ranges) {
                    this.yylloc.range = [
                        0,
                        0
                    ];
                }
                this.offset = 0;
                return this;
            }, "setInput"),
            input: __1(function() {
                const h = this._input[0];
                this.yytext += h;
                this.yyleng++;
                this.offset++;
                this.match += h;
                this.matched += h;
                const d = h.match(/(?:\r\n?|\n).*/g);
                d ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++;
                this.options.ranges && this.yylloc.range[1]++;
                this._input = this._input.slice(1);
                return h;
            }, "input"),
            unput: __1(function(h) {
                const h_length = h.length;
                const f = h.split(/(?:\r\n?|\n)/g);
                this._input = h + this._input;
                this.yytext = this.yytext.substr(0, this.yytext.length - h_length);
                this.offset -= h_length;
                const o = this.match.split(/(?:\r\n?|\n)/g);
                this.match = this.match.substr(0, this.match.length - 1);
                this.matched = this.matched.substr(0, this.matched.length - 1);
                if (f.length - 1) {
                    this.yylineno -= f.length - 1;
                }
                const range = this.yylloc.range;
                this.yylloc = {
                    first_line: this.yylloc.first_line,
                    last_line: this.yylineno + 1,
                    first_column: this.yylloc.first_column,
                    last_column: f ? (f.length === o.length ? this.yylloc.first_column : 0) + o[o.length - f.length].length - f[0].length : this.yylloc.first_column - h_length
                };
                if (this.options.ranges) {
                    this.yylloc.range = [
                        range[0],
                        range[0] + this.yyleng - h_length
                    ];
                }
                this.yyleng = this.yytext.length;
                return this;
            }, "unput"),
            more: __1(function() {
                this._more = true;
                return this;
            }, "more"),
            reject: __1(function() {
                if (this.options.backtrack_lexer) {
                    this._backtrack = true;
                } else {
                    return this.parseError(`Lexical error on line ${this.yylineno + 1}${`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`}${this.showPosition()}`, {
                        text: "",
                        token: null,
                        line: this.yylineno
                    });
                }
                return this;
            }, "reject"),
            less: __1(function(h) {
                this.unput(this.match.slice(h));
            }, "less"),
            pastInput: __1(function() {
                const h = this.matched.substr(0, this.matched.length - this.match.length);
                return (h.length > 20 ? "..." : "") + h.substr(-20).replace(/\n/g, "");
            }, "pastInput"),
            upcomingInput: __1(function() {
                let match = this.match;
                if (match.length < 20) {
                    match += this._input.substr(0, 20 - match.length);
                }
                return (match.substr(0, 20) + (match.length > 20 ? "..." : "")).replace(/\n/g, "");
            }, "upcomingInput"),
            showPosition: __1(function() {
                const h = this.pastInput();
                const d = new Array(h.length + 1).join("-");
                return `${h + this.upcomingInput() + `
` + d}^`;
            }, "showPosition"),
            test_match: __1(function(h, d) {
                let f;
                let o;
                let F;
                if (this.options.backtrack_lexer) {
                    F = {
                        yylineno: this.yylineno,
                        yylloc: {
                            first_line: this.yylloc.first_line,
                            last_line: this.last_line,
                            first_column: this.yylloc.first_column,
                            last_column: this.yylloc.last_column
                        },
                        yytext: this.yytext,
                        match: this.match,
                        matches: this.matches,
                        matched: this.matched,
                        yyleng: this.yyleng,
                        offset: this.offset,
                        _more: this._more,
                        _input: this._input,
                        yy: this.yy,
                        conditionStack: this.conditionStack.slice(0),
                        done: this.done
                    };
                    if (this.options.ranges) {
                        F.yylloc.range = this.yylloc.range.slice(0);
                    }
                }
                o = h[0].match(/(?:\r\n?|\n).*/g);
                if (o) {
                    this.yylineno += o.length;
                }
                this.yylloc = {
                    first_line: this.yylloc.last_line,
                    last_line: this.yylineno + 1,
                    first_column: this.yylloc.last_column,
                    last_column: o ? o[o.length - 1].length - o[o.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + h[0].length
                };
                this.yytext += h[0];
                this.match += h[0];
                this.matches = h;
                this.yyleng = this.yytext.length;
                if (this.options.ranges) {
                    this.yylloc.range = [
                        this.offset,
                        this.offset += this.yyleng
                    ];
                }
                this._more = false;
                this._backtrack = false;
                this._input = this._input.slice(h[0].length);
                this.matched += h[0];
                f = this.performAction.call(this, this.yy, this, d, this.conditionStack[this.conditionStack.length - 1]);
                if (this.done && this._input) {
                    this.done = false;
                }
                if (f) {
                    return f;
                }
                if (this._backtrack) {
                    for(const e in F){
                        this[e] = F[e];
                    }
                    return false;
                }
                return false;
            }, "test_match"),
            next: __1(function() {
                if (this.done) {
                    return this.EOF;
                }
                if (!this._input) {
                    this.done = true;
                }
                let h;
                let d;
                let f;
                let o;
                if (!this._more) {
                    this.yytext = "";
                    this.match = "";
                }
                for(var F = this._currentRules(), e = 0; e < F.length; e++){
                    f = this._input.match(this.rules[F[e]]);
                    if (f && (!d || f[0].length > d[0].length)) {
                        d = f;
                        o = e;
                        if (this.options.backtrack_lexer) {
                            h = this.test_match(f, F[e]);
                            if (h !== false) {
                                return h;
                            }
                            if (this._backtrack) {
                                d = false;
                                continue;
                            } else {
                                return false;
                            }
                        } else if (!this.options.flex) {
                            break;
                        }
                    }
                }
                if (d) {
                    h = this.test_match(d, F[o]);
                    if (h !== false) {
                        return h;
                    }
                    return false;
                }
                if (this._input === "") {
                    return this.EOF;
                }
                return this.parseError(`Lexical error on line ${this.yylineno + 1}${`. Unrecognized text.
`}${this.showPosition()}`, {
                    text: "",
                    token: null,
                    line: this.yylineno
                });
            }, "next"),
            lex: __1(function() {
                const d = this.next();
                return d || this.lex();
            }, "lex"),
            begin: __1(function(d) {
                this.conditionStack.push(d);
            }, "begin"),
            popState: __1(function() {
                const d = this.conditionStack.length - 1;
                if (d > 0) {
                    return this.conditionStack.pop();
                }
                return this.conditionStack[0];
            }, "popState"),
            _currentRules: __1(function() {
                if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
                    return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
                }
                return this.conditions.INITIAL.rules;
            }, "_currentRules"),
            topState: __1(function(d) {
                d = this.conditionStack.length - 1 - Math.abs(d || 0);
                if (d >= 0) {
                    return this.conditionStack[d];
                }
                return "INITIAL";
            }, "topState"),
            pushState: __1(function(d) {
                this.begin(d);
            }, "pushState"),
            stateStackSize: __1(function() {
                return this.conditionStack.length;
            }, "stateStackSize"),
            options: {},
            performAction: __1(function(d, f, o, F) {
                switch(o){
                    case 0:
                        this.begin("acc_title");
                        return 34;
                    case 1:
                        this.popState();
                        return "acc_title_value";
                    case 2:
                        this.begin("acc_descr");
                        return 36;
                    case 3:
                        this.popState();
                        return "acc_descr_value";
                    case 4:
                        this.begin("acc_descr_multiline");
                        break;
                    case 5:
                        this.popState();
                        break;
                    case 6:
                        return "acc_descr_multiline_value";
                    case 7:
                        this.pushState("shapeData");
                        f.yytext = "";
                        return 40;
                    case 8:
                        this.pushState("shapeDataStr");
                        return 40;
                    case 9:
                        this.popState();
                        return 40;
                    case 10:
                        const e = /\n\s*/g;
                        f.yytext = f.yytext.replace(e, "<br/>");
                        return 40;
                    case 11:
                        return 40;
                    case 12:
                        this.popState();
                        break;
                    case 13:
                        this.begin("callbackname");
                        break;
                    case 14:
                        this.popState();
                        break;
                    case 15:
                        this.popState();
                        this.begin("callbackargs");
                        break;
                    case 16:
                        return 95;
                    case 17:
                        this.popState();
                        break;
                    case 18:
                        return 96;
                    case 19:
                        return "MD_STR";
                    case 20:
                        this.popState();
                        break;
                    case 21:
                        this.begin("md_string");
                        break;
                    case 22:
                        return "STR";
                    case 23:
                        this.popState();
                        break;
                    case 24:
                        this.pushState("string");
                        break;
                    case 25:
                        return 84;
                    case 26:
                        return 102;
                    case 27:
                        return 85;
                    case 28:
                        return 104;
                    case 29:
                        return 86;
                    case 30:
                        return 87;
                    case 31:
                        return 97;
                    case 32:
                        this.begin("click");
                        break;
                    case 33:
                        this.popState();
                        break;
                    case 34:
                        return 88;
                    case 35:
                        if (d.lex.firstGraph()) {
                            this.begin("dir");
                        }
                        return 12;
                    case 36:
                        if (d.lex.firstGraph()) {
                            this.begin("dir");
                        }
                        return 12;
                    case 37:
                        if (d.lex.firstGraph()) {
                            this.begin("dir");
                        }
                        return 12;
                    case 38:
                        if (d.lex.firstGraph()) {
                            this.begin("dir");
                        }
                        return 12;
                    case 39:
                        return 27;
                    case 40:
                        return 32;
                    case 41:
                        return 98;
                    case 42:
                        return 98;
                    case 43:
                        return 98;
                    case 44:
                        return 98;
                    case 45:
                        this.popState();
                        return 13;
                    case 46:
                        this.popState();
                        return 14;
                    case 47:
                        this.popState();
                        return 14;
                    case 48:
                        this.popState();
                        return 14;
                    case 49:
                        this.popState();
                        return 14;
                    case 50:
                        this.popState();
                        return 14;
                    case 51:
                        this.popState();
                        return 14;
                    case 52:
                        this.popState();
                        return 14;
                    case 53:
                        this.popState();
                        return 14;
                    case 54:
                        this.popState();
                        return 14;
                    case 55:
                        this.popState();
                        return 14;
                    case 56:
                        return 121;
                    case 57:
                        return 122;
                    case 58:
                        return 123;
                    case 59:
                        return 124;
                    case 60:
                        return 125;
                    case 61:
                        return 78;
                    case 62:
                        return 105;
                    case 63:
                        return 111;
                    case 64:
                        return 46;
                    case 65:
                        return 60;
                    case 66:
                        return 44;
                    case 67:
                        return 8;
                    case 68:
                        return 106;
                    case 69:
                        return 115;
                    case 70:
                        this.popState();
                        return 77;
                    case 71:
                        this.pushState("edgeText");
                        return 75;
                    case 72:
                        return 119;
                    case 73:
                        this.popState();
                        return 77;
                    case 74:
                        this.pushState("thickEdgeText");
                        return 75;
                    case 75:
                        return 119;
                    case 76:
                        this.popState();
                        return 77;
                    case 77:
                        this.pushState("dottedEdgeText");
                        return 75;
                    case 78:
                        return 119;
                    case 79:
                        return 77;
                    case 80:
                        this.popState();
                        return 53;
                    case 81:
                        return "TEXT";
                    case 82:
                        this.pushState("ellipseText");
                        return 52;
                    case 83:
                        this.popState();
                        return 55;
                    case 84:
                        this.pushState("text");
                        return 54;
                    case 85:
                        this.popState();
                        return 57;
                    case 86:
                        this.pushState("text");
                        return 56;
                    case 87:
                        return 58;
                    case 88:
                        this.pushState("text");
                        return 67;
                    case 89:
                        this.popState();
                        return 64;
                    case 90:
                        this.pushState("text");
                        return 63;
                    case 91:
                        this.popState();
                        return 49;
                    case 92:
                        this.pushState("text");
                        return 48;
                    case 93:
                        this.popState();
                        return 69;
                    case 94:
                        this.popState();
                        return 71;
                    case 95:
                        return 117;
                    case 96:
                        this.pushState("trapText");
                        return 68;
                    case 97:
                        this.pushState("trapText");
                        return 70;
                    case 98:
                        return 118;
                    case 99:
                        return 67;
                    case 100:
                        return 90;
                    case 101:
                        return "SEP";
                    case 102:
                        return 89;
                    case 103:
                        return 115;
                    case 104:
                        return 111;
                    case 105:
                        return 44;
                    case 106:
                        return 109;
                    case 107:
                        return 114;
                    case 108:
                        return 116;
                    case 109:
                        this.popState();
                        return 62;
                    case 110:
                        this.pushState("text");
                        return 62;
                    case 111:
                        this.popState();
                        return 51;
                    case 112:
                        this.pushState("text");
                        return 50;
                    case 113:
                        this.popState();
                        return 31;
                    case 114:
                        this.pushState("text");
                        return 29;
                    case 115:
                        this.popState();
                        return 66;
                    case 116:
                        this.pushState("text");
                        return 65;
                    case 117:
                        return "TEXT";
                    case 118:
                        return "QUOTE";
                    case 119:
                        return 9;
                    case 120:
                        return 10;
                    case 121:
                        return 11;
                }
            }, "anonymous"),
            rules: [
                /^(?:accTitle\s*:\s*)/,
                /^(?:(?!\n||)*[^\n]*)/,
                /^(?:accDescr\s*:\s*)/,
                /^(?:(?!\n||)*[^\n]*)/,
                /^(?:accDescr\s*\{\s*)/,
                /^(?:[\}])/,
                /^(?:[^\}]*)/,
                /^(?:@\{)/,
                /^(?:["])/,
                /^(?:["])/,
                /^(?:[^\"]+)/,
                /^(?:[^}^"]+)/,
                /^(?:\})/,
                /^(?:call[\s]+)/,
                /^(?:\([\s]*\))/,
                /^(?:\()/,
                /^(?:[^(]*)/,
                /^(?:\))/,
                /^(?:[^)]*)/,
                /^(?:[^`"]+)/,
                /^(?:[`]["])/,
                /^(?:["][`])/,
                /^(?:[^"]+)/,
                /^(?:["])/,
                /^(?:["])/,
                /^(?:style\b)/,
                /^(?:default\b)/,
                /^(?:linkStyle\b)/,
                /^(?:interpolate\b)/,
                /^(?:classDef\b)/,
                /^(?:class\b)/,
                /^(?:href[\s])/,
                /^(?:click[\s]+)/,
                /^(?:[\s\n])/,
                /^(?:[^\s\n]*)/,
                /^(?:flowchart-elk\b)/,
                /^(?:swimlane-beta\b)/,
                /^(?:graph\b)/,
                /^(?:flowchart\b)/,
                /^(?:subgraph\b)/,
                /^(?:end\b\s*)/,
                /^(?:_self\b)/,
                /^(?:_blank\b)/,
                /^(?:_parent\b)/,
                /^(?:_top\b)/,
                /^(?:(\r?\n)*\s*\n)/,
                /^(?:\s*LR\b)/,
                /^(?:\s*RL\b)/,
                /^(?:\s*TB\b)/,
                /^(?:\s*BT\b)/,
                /^(?:\s*TD\b)/,
                /^(?:\s*BR\b)/,
                /^(?:\s*<)/,
                /^(?:\s*>)/,
                /^(?:\s*\^)/,
                /^(?:\s*v\b)/,
                /^(?:.*direction\s+TB[^\n]*)/,
                /^(?:.*direction\s+BT[^\n]*)/,
                /^(?:.*direction\s+RL[^\n]*)/,
                /^(?:.*direction\s+LR[^\n]*)/,
                /^(?:.*direction\s+TD[^\n]*)/,
                /^(?:[^\s\"]+@(?=[^\{\"]))/,
                /^(?:[0-9]+)/,
                /^(?:#)/,
                /^(?::::)/,
                /^(?::)/,
                /^(?:&)/,
                /^(?:;)/,
                /^(?:,)/,
                /^(?:\*)/,
                /^(?:\s*[xo<]?--+[-xo>]\s*)/,
                /^(?:\s*[xo<]?--\s*)/,
                /^(?:[^-]|-(?!-)+)/,
                /^(?:\s*[xo<]?==+[=xo>]\s*)/,
                /^(?:\s*[xo<]?==\s*)/,
                /^(?:[^=]|=(?!))/,
                /^(?:\s*[xo<]?-?\.+-[xo>]?\s*)/,
                /^(?:\s*[xo<]?-\.\s*)/,
                /^(?:[^\.]|\.(?!))/,
                /^(?:\s*~~[\~]+\s*)/,
                /^(?:[-/\)][\)])/,
                /^(?:[^\(\)\[\]\{\}]|!\)+)/,
                /^(?:\(-)/,
                /^(?:\]\))/,
                /^(?:\(\[)/,
                /^(?:\]\])/,
                /^(?:\[\[)/,
                /^(?:\[\|)/,
                /^(?:>)/,
                /^(?:\)\])/,
                /^(?:\[\()/,
                /^(?:\)\)\))/,
                /^(?:\(\(\()/,
                /^(?:[\\(?=\])][\]])/,
                /^(?:\/(?=\])\])/,
                /^(?:\/(?!\])|\\(?!\])|[^\\\[\]\(\)\{\}\/]+)/,
                /^(?:\[\/)/,
                /^(?:\[\\)/,
                /^(?:<)/,
                /^(?:>)/,
                /^(?:\^)/,
                /^(?:\\\|)/,
                /^(?:v\b)/,
                /^(?:\*)/,
                /^(?:#)/,
                /^(?:&)/,
                /^(?:([A-Za-z0-9!"\#$%&'*+\.`?\\_\/]|-(?=[^\>\-\.])|(?!))+)/,
                /^(?:-)/,
                /^(?:[\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6]|[\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377]|[\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5]|[\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA]|[\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE]|[\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA]|[\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0]|[\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977]|[\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2]|[\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A]|[\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39]|[\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8]|[\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C]|[\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C]|[\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99]|[\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0]|[\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D]|[\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3]|[\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10]|[\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1]|[\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81]|[\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3]|[\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6]|[\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A]|[\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081]|[\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D]|[\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0]|[\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310]|[\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C]|[\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711]|[\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7]|[\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C]|[\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16]|[\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF]|[\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC]|[\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D]|[\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D]|[\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3]|[\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F]|[\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128]|[\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184]|[\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3]|[\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6]|[\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE]|[\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C]|[\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D]|[\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC]|[\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B]|[\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788]|[\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805]|[\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB]|[\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28]|[\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5]|[\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4]|[\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E]|[\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D]|[\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36]|[\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D]|[\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC]|[\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF]|[\uFFD2-\uFFD7\uFFDA-\uFFDC])/,
                /^(?:\|)/,
                /^(?:\|)/,
                /^(?:\))/,
                /^(?:\()/,
                /^(?:\])/,
                /^(?:\[)/,
                /^(?:(\}))/,
                /^(?:\{)/,
                /^(?:[^\[\]\(\)\{\}\|\"]+)/,
                /^(?:")/,
                /^(?:(\r?\n)+)/,
                /^(?:\s)/,
                /^(?:$)/
            ],
            conditions: {
                shapeDataEndBracket: {
                    rules: [
                        21,
                        24,
                        79,
                        82,
                        84,
                        86,
                        90,
                        92,
                        96,
                        97,
                        110,
                        112,
                        114,
                        116
                    ],
                    inclusive: false
                },
                shapeDataStr: {
                    rules: [
                        9,
                        10,
                        21,
                        24,
                        79,
                        82,
                        84,
                        86,
                        90,
                        92,
                        96,
                        97,
                        110,
                        112,
                        114,
                        116
                    ],
                    inclusive: false
                },
                shapeData: {
                    rules: [
                        8,
                        11,
                        12,
                        21,
                        24,
                        79,
                        82,
                        84,
                        86,
                        90,
                        92,
                        96,
                        97,
                        110,
                        112,
                        114,
                        116
                    ],
                    inclusive: false
                },
                callbackargs: {
                    rules: [
                        17,
                        18,
                        21,
                        24,
                        79,
                        82,
                        84,
                        86,
                        90,
                        92,
                        96,
                        97,
                        110,
                        112,
                        114,
                        116
                    ],
                    inclusive: false
                },
                callbackname: {
                    rules: [
                        14,
                        15,
                        16,
                        21,
                        24,
                        79,
                        82,
                        84,
                        86,
                        90,
                        92,
                        96,
                        97,
                        110,
                        112,
                        114,
                        116
                    ],
                    inclusive: false
                },
                href: {
                    rules: [
                        21,
                        24,
                        79,
                        82,
                        84,
                        86,
                        90,
                        92,
                        96,
                        97,
                        110,
                        112,
                        114,
                        116
                    ],
                    inclusive: false
                },
                click: {
                    rules: [
                        21,
                        24,
                        33,
                        34,
                        79,
                        82,
                        84,
                        86,
                        90,
                        92,
                        96,
                        97,
                        110,
                        112,
                        114,
                        116
                    ],
                    inclusive: false
                },
                dottedEdgeText: {
                    rules: [
                        21,
                        24,
                        76,
                        78,
                        79,
                        82,
                        84,
                        86,
                        90,
                        92,
                        96,
                        97,
                        110,
                        112,
                        114,
                        116
                    ],
                    inclusive: false
                },
                thickEdgeText: {
                    rules: [
                        21,
                        24,
                        73,
                        75,
                        79,
                        82,
                        84,
                        86,
                        90,
                        92,
                        96,
                        97,
                        110,
                        112,
                        114,
                        116
                    ],
                    inclusive: false
                },
                edgeText: {
                    rules: [
                        21,
                        24,
                        70,
                        72,
                        79,
                        82,
                        84,
                        86,
                        90,
                        92,
                        96,
                        97,
                        110,
                        112,
                        114,
                        116
                    ],
                    inclusive: false
                },
                trapText: {
                    rules: [
                        21,
                        24,
                        79,
                        82,
                        84,
                        86,
                        90,
                        92,
                        93,
                        94,
                        95,
                        96,
                        97,
                        110,
                        112,
                        114,
                        116
                    ],
                    inclusive: false
                },
                ellipseText: {
                    rules: [
                        21,
                        24,
                        79,
                        80,
                        81,
                        82,
                        84,
                        86,
                        90,
                        92,
                        96,
                        97,
                        110,
                        112,
                        114,
                        116
                    ],
                    inclusive: false
                },
                text: {
                    rules: [
                        21,
                        24,
                        79,
                        82,
                        83,
                        84,
                        85,
                        86,
                        89,
                        90,
                        91,
                        92,
                        96,
                        97,
                        109,
                        110,
                        111,
                        112,
                        113,
                        114,
                        115,
                        116,
                        117
                    ],
                    inclusive: false
                },
                vertex: {
                    rules: [
                        21,
                        24,
                        79,
                        82,
                        84,
                        86,
                        90,
                        92,
                        96,
                        97,
                        110,
                        112,
                        114,
                        116
                    ],
                    inclusive: false
                },
                dir: {
                    rules: [
                        21,
                        24,
                        45,
                        46,
                        47,
                        48,
                        49,
                        50,
                        51,
                        52,
                        53,
                        54,
                        55,
                        79,
                        82,
                        84,
                        86,
                        90,
                        92,
                        96,
                        97,
                        110,
                        112,
                        114,
                        116
                    ],
                    inclusive: false
                },
                acc_descr_multiline: {
                    rules: [
                        5,
                        6,
                        21,
                        24,
                        79,
                        82,
                        84,
                        86,
                        90,
                        92,
                        96,
                        97,
                        110,
                        112,
                        114,
                        116
                    ],
                    inclusive: false
                },
                acc_descr: {
                    rules: [
                        3,
                        21,
                        24,
                        79,
                        82,
                        84,
                        86,
                        90,
                        92,
                        96,
                        97,
                        110,
                        112,
                        114,
                        116
                    ],
                    inclusive: false
                },
                acc_title: {
                    rules: [
                        1,
                        21,
                        24,
                        79,
                        82,
                        84,
                        86,
                        90,
                        92,
                        96,
                        97,
                        110,
                        112,
                        114,
                        116
                    ],
                    inclusive: false
                },
                md_string: {
                    rules: [
                        19,
                        20,
                        21,
                        24,
                        79,
                        82,
                        84,
                        86,
                        90,
                        92,
                        96,
                        97,
                        110,
                        112,
                        114,
                        116
                    ],
                    inclusive: false
                },
                string: {
                    rules: [
                        21,
                        22,
                        23,
                        24,
                        79,
                        82,
                        84,
                        86,
                        90,
                        92,
                        96,
                        97,
                        110,
                        112,
                        114,
                        116
                    ],
                    inclusive: false
                },
                INITIAL: {
                    rules: [
                        0,
                        2,
                        4,
                        7,
                        13,
                        21,
                        24,
                        25,
                        26,
                        27,
                        28,
                        29,
                        30,
                        31,
                        32,
                        35,
                        36,
                        37,
                        38,
                        39,
                        40,
                        41,
                        42,
                        43,
                        44,
                        56,
                        57,
                        58,
                        59,
                        60,
                        61,
                        62,
                        63,
                        64,
                        65,
                        66,
                        67,
                        68,
                        69,
                        70,
                        71,
                        73,
                        74,
                        76,
                        77,
                        79,
                        82,
                        84,
                        86,
                        87,
                        88,
                        90,
                        92,
                        96,
                        97,
                        98,
                        99,
                        100,
                        101,
                        102,
                        103,
                        104,
                        105,
                        106,
                        107,
                        108,
                        110,
                        112,
                        114,
                        116,
                        118,
                        119,
                        120,
                        121
                    ],
                    inclusive: true
                }
            }
        };
        return f1;
    })();
    Z1.lexer = je;
    function q1() {
        this.yy = {};
    }
    __1(q1, "Parser");
    q1.prototype = Z1;
    Z1.Parser = q1;
    return new q1;
})();
ae.parser = ae;
const Ue = ae;
const ze = {
    ...Ue
};
ze.parse = (s)=>{
    const i = s.replace(/}\s*\n/g, `}
`);
    return Ue.parse(i);
};
const parser = ze;
const Tt = __1((s, i)=>{
    const r = c_2;
    const a = r(s, "r");
    const n = r(s, "g");
    const l = r(s, "b");
    return t(a, n, l, i);
}, "fade");
const St = __1((s)=>`.label {
    font-family: ${s.fontFamily};
    color: ${s.nodeTextColor || s.textColor};
  }
  .cluster-label text {
    fill: ${s.titleColor};
  }
  .cluster-label span {
    color: ${s.titleColor};
  }
  .cluster-label span p {
    background-color: transparent;
  }

  .label text,span {
    fill: ${s.nodeTextColor || s.textColor};
    color: ${s.nodeTextColor || s.textColor};
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${s.mainBkg};
    stroke: ${s.nodeBorder};
    stroke-width: ${s.strokeWidth ?? 1}px;
  }
  .rough-node .label text , .node .label text, .image-shape .label, .icon-shape .label {
    text-anchor: middle;
  }

  .node .katex path {
    fill: #000;
    stroke: #000;
    stroke-width: 1px;
  }

  .rough-node .label,.node .label, .image-shape .label, .icon-shape .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }


  .root .anchor path {
    fill: ${s.lineColor} !important;
    stroke-width: 0;
    stroke: ${s.lineColor};
  }

  .arrowheadPath {
    fill: ${s.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${s.lineColor};
    stroke-width: ${s.strokeWidth ?? 2}px;
  }

  .flowchart-link {
    stroke: ${s.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${s.edgeLabelBackground};
    p {
      background-color: ${s.edgeLabelBackground};
    }
    rect {
      opacity: 0.5;
      background-color: ${s.edgeLabelBackground};
      fill: ${s.edgeLabelBackground};
    }
    text-align: center;
  }

  /* For html labels only */
  .labelBkg {
    background-color: ${Tt(s.edgeLabelBackground, 0.5)};
    // background-color:
  }

  .cluster rect {
    fill: ${s.clusterBkg};
    stroke: ${s.clusterBorder};
    stroke-width: 1px;
  }

  .cluster text {
    fill: ${s.titleColor};
  }

  .cluster span {
    color: ${s.titleColor};
  }
  /* .cluster div {
    color: ${s.titleColor};
  } */

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${s.fontFamily};
    font-size: 12px;
    background: ${s.tertiaryColor};
    border: 1px solid ${s.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .flowchartTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${s.textColor};
  }

  rect.text {
    fill: none;
    stroke-width: 0;
  }

  .icon-shape, .image-shape {
    background-color: ${s.edgeLabelBackground};
    p {
      background-color: ${s.edgeLabelBackground};
      padding: 2px;
    }
    .label rect {
      opacity: 0.5;
      background-color: ${s.edgeLabelBackground};
      fill: ${s.edgeLabelBackground};
    }
    text-align: center;
  }
  ${g()}
`, "getStyles");
const yt = St;
const createFlowDiagram = __1(({ defaultLayout, styles = yt } = {})=>({
        parser,
        get db () {
            return new kt;
        },
        renderer,
        styles,
        init: __1((r)=>{
            if (!r.flowchart) {
                r.flowchart = {};
            }
            const layout = b6().layout ?? defaultLayout ?? r.layout;
            if (layout) {
                X({
                    layout
                });
            }
            r.flowchart.arrowMarkerAbsolute = r.arrowMarkerAbsolute;
            X({
                flowchart: {
                    arrowMarkerAbsolute: r.arrowMarkerAbsolute
                }
            });
        }, "init")
    }), "createFlowDiagram");
const diagram = createFlowDiagram();
const It = Object.freeze(Object.defineProperty({
    __proto__: null,
    createFlowDiagram,
    diagram
}, Symbol.toStringTag, {
    value: "Module"
}));
export { createFlowDiagram as c, It as f, yt as s };
