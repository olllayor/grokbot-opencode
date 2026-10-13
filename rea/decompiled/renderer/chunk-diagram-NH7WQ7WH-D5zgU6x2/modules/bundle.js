import { p } from "./chunk-chunk-JWPE2WC7-firmgLgH.js";
import { _, B, F, e as e_1, l, b, a, o, p as p_1, g, s, z, D, q } from "./chunk-mermaid.core-B9Iu5CoE.js";
import { p as p_2 } from "./chunk-cynefin-VYW2F7L2-ChVxrOa1.js";
import "./index.eager-vendor-Qbf9YA6n.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "f4fedf63-6ddd-4720-82a8-e4713d58a33b";
            e._sentryDebugIdIdentifier = "sentry-dbid-f4fedf63-6ddd-4720-82a8-e4713d58a33b";
        }
    } catch (e) {}
})();
const D_1_packet = D.packet;
const u = class {
    constructor(){
        this.packet = [];
        this.setAccTitle = b;
        this.getAccTitle = a;
        this.setDiagramTitle = o;
        this.getDiagramTitle = p_1;
        this.getAccDescription = g;
        this.setAccDescription = s;
    }
    getConfig() {
        const t = B({
            ...D_1_packet,
            ...z().packet
        });
        if (t.showBits) {
            t.paddingY += 10;
        }
        return t;
    }
    getPacket() {
        return this.packet;
    }
    pushWord(t) {
        if (t.length > 0) {
            this.packet.push(t);
        }
    }
    clear() {
        q();
        this.packet = [];
    }
};
_(u, "PacketDB");
const v = u;
const M = 10000;
const Y = _((e, t)=>{
    p(e, t);
    let r = -1;
    let s = [];
    let n = 1;
    const { bitsPerRow } = t.getConfig();
    for (let { start, end, bits, label } of e.blocks){
        if (start !== undefined && end !== undefined && end < start) {
            throw new Error(`Packet block ${start} - ${end} is invalid. End must be greater than start.`);
        }
        start ??= r + 1;
        if (start !== r + 1) {
            throw new Error(`Packet block ${start} - ${end ?? start} is not contiguous. It should start from ${r + 1}.`);
        }
        if (bits === 0) {
            throw new Error(`Packet block ${start} is invalid. Cannot have a zero bit field.`);
        }
        end ??= start + (bits ?? 1) - 1;
        bits ??= end - start + 1;
        r = end;
        l.debug(`Packet block ${start} - ${r} with label ${label}`);
        while(s.length <= bitsPerRow + 1 && t.getPacket().length < M){
            const [p, o] = I({
                start,
                end,
                bits,
                label
            }, n, bitsPerRow);
            s.push(p);
            if (p.end + 1 === n * bitsPerRow) {
                t.pushWord(s);
                s = [];
                n++;
            }
            if (!o) {
                break;
            }
            ({ start, end, bits, label } = o);
        }
    }
    t.pushWord(s);
}, "populate");
var I = _((e, t, r)=>{
    if (e.start === undefined) {
        throw new Error("start should have been set during first phase");
    }
    if (e.end === undefined) {
        throw new Error("end should have been set during first phase");
    }
    if (e.start > e.end) {
        throw new Error(`Block start ${e.start} is greater than block end ${e.end}.`);
    }
    if (e.end + 1 <= t * r) {
        return [
            e,
            undefined
        ];
    }
    const end = t * r - 1;
    const start = t * r;
    return [
        {
            start: e.start,
            end,
            label: e.label,
            bits: end - e.start
        },
        {
            start,
            end: e.end,
            label: e.label,
            bits: e.end - start
        }
    ];
}, "getNextFittingBlock");
var parser = {
    parser: {
        yy: undefined
    },
    parse: _(async (e)=>{
        const t = await p_2("packet", e);
        const r = parser.parser?.yy;
        if (!(r instanceof v)) {
            throw new Error("parser.parser?.yy was not a PacketDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues.");
        }
        l.debug(t);
        Y(t, r);
    }, "parse")
};
const draw = _((e, t, r, s)=>{
    const n = s.db;
    const l = n.getConfig();
    const { rowHeight, paddingY, bitWidth, bitsPerRow } = l;
    const p = n.getPacket();
    const o = n.getDiagramTitle();
    const h = rowHeight + paddingY;
    const g = h * (p.length + 1) - (o ? 0 : rowHeight);
    const k = bitWidth * bitsPerRow + 2;
    const f = F(t);
    f.attr("viewBox", `0 0 ${k} ${g}`);
    e_1(f, g, k, l.useMaxWidth);
    for (const [y, B] of p.entries()){
        j(f, B, y, l);
    }
    f.append("text").text(o).attr("x", k / 2).attr("y", g - h / 2).attr("dominant-baseline", "middle").attr("text-anchor", "middle").attr("class", "packetTitle");
}, "draw");
var j = _((e, t, r, { rowHeight, paddingX, paddingY, bitWidth, bitsPerRow, showBits })=>{
    const c = e.append("g");
    const p = r * (rowHeight + paddingY) + paddingY;
    for (const o of t){
        const h = o.start % bitsPerRow * bitWidth + 1;
        const g = (o.end - o.start + 1) * bitWidth - paddingX;
        c.append("rect").attr("x", h).attr("y", p).attr("width", g).attr("height", rowHeight).attr("class", "packetBlock");
        c.append("text").attr("x", h + g / 2).attr("y", p + rowHeight / 2).attr("class", "packetLabel").attr("dominant-baseline", "middle").attr("text-anchor", "middle").text(o.label);
        if (!showBits) {
            continue;
        }
        const k = o.end === o.start;
        const f = p - 2;
        c.append("text").attr("x", h + (k ? g / 2 : 0)).attr("y", f).attr("class", "packetByte start").attr("dominant-baseline", "auto").attr("text-anchor", k ? "middle" : "start").text(o.start);
        if (!k) {
            c.append("text").attr("x", h + g).attr("y", f).attr("class", "packetByte end").attr("dominant-baseline", "auto").attr("text-anchor", "end").text(o.end);
        }
    }
}, "drawWord");
const renderer = {
    draw
};
const G = {
    byteFontSize: "10px",
    startByteColor: "black",
    endByteColor: "black",
    labelColor: "black",
    labelFontSize: "12px",
    titleColor: "black",
    titleFontSize: "14px",
    blockStrokeColor: "black",
    blockStrokeWidth: "1",
    blockFillColor: "#efefef"
};
const styles = _(({ packet } = {})=>{
    const t = B(G, packet);
    return `
	.packetByte {
		font-size: ${t.byteFontSize};
	}
	.packetByte.start {
		fill: ${t.startByteColor};
	}
	.packetByte.end {
		fill: ${t.endByteColor};
	}
	.packetLabel {
		fill: ${t.labelColor};
		font-size: ${t.labelFontSize};
	}
	.packetTitle {
		fill: ${t.titleColor};
		font-size: ${t.titleFontSize};
	}
	.packetBlock {
		stroke: ${t.blockStrokeColor};
		stroke-width: ${t.blockStrokeWidth};
		fill: ${t.blockFillColor};
	}
	`;
}, "styles");
export const diagram = {
    parser,
    get db () {
        return new v;
    },
    renderer,
    styles
};
