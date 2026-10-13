import { i, e as e_1, K as K_1 } from "./index.eager-common-CdCvBQNJ.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "67091c97-aa47-407b-ba7e-f0771add3792";
            e._sentryDebugIdIdentifier = "sentry-dbid-67091c97-aa47-407b-ba7e-f0771add3792";
        }
    } catch (e) {}
})();
function H(document) {
    const root = document.getElementById("panel");
    const trigger = document.getElementById("mount-trigger");
    const mark = document.getElementById("mark");
    const menu = document.getElementById("bot-menu");
    const menuItem = document.getElementById("bot-menu-item");
    const composer = document.getElementById("composer");
    const p = document.getElementById("prompt");
    const send = document.getElementById("send");
    i(root instanceof HTMLElement && trigger instanceof HTMLButtonElement && mark instanceof HTMLImageElement && menu instanceof HTMLElement && menuItem instanceof HTMLTemplateElement && composer instanceof HTMLFormElement && p instanceof HTMLTextAreaElement && send instanceof HTMLButtonElement, "desktop mount panel: document skeleton missing");
    return {
        root,
        trigger,
        mark,
        menu,
        menuItem,
        composer,
        prompt: p,
        send
    };
}
function D(t) {
    delete t.root.dataset.state;
    delete t.root.dataset.failure;
}
function b(t) {
    return t.root.dataset.expanded != null;
}
function I(t, e) {
    if (e) {
        t.root.dataset.expanded = "true";
    } else {
        delete t.root.dataset.expanded;
    }
    t.trigger.setAttribute("aria-expanded", String(e));
    t.composer.toggleAttribute("inert", !e);
    if (e) {
        t.prompt.focus();
    }
}
function m(t, e) {
    t.root.dataset.state = "failed";
    t.root.dataset.failure = e_1(e);
}
const A = 44;
const S = 52;
function y(prompt) {
    prompt.style.height = "auto";
    const e = Math.min(Math.max(prompt.scrollHeight, A), 140);
    prompt.style.height = `${e}px`;
    if (e > S) {
        prompt.dataset.expanded = "true";
    } else {
        delete prompt.dataset.expanded;
    }
}
const R = 12;
function T(t) {
    for (const e of P(t.menu)){
        e.setAttribute("aria-checked", String(e.dataset.agentId === t.root.dataset.agentId));
    }
}
function _(t, e) {
    t.menu.replaceChildren(...e.map((r)=>{
        const n = t.menuItem.content.firstElementChild?.cloneNode(true);
        i(n instanceof HTMLButtonElement, "desktop mount panel: menu item template missing");
        n.dataset.agentId = r.agentId;
        n.querySelector("img")?.setAttribute("src", r.markSvgDataUrl);
        const o = n.querySelector(".bot-menu-name");
        if (o != null) {
            o.textContent = r.name;
        }
        return n;
    }));
    T(t);
}
function X(t, e) {
    t.root.hidden = e.mount == null;
    if (e.mount == null) {
        delete t.root.dataset.agentId;
        I(t, false);
        return;
    }
    t.root.dataset.agentId = e.mount.agentId;
    T(t);
    t.mark.src = e.mount.markSvgDataUrl;
    t.prompt.placeholder = e.mount.name;
    D(t);
}
function P(menu) {
    return [
        ...menu.querySelectorAll("button.bot-menu-item")
    ].filter((e)=>e instanceof HTMLButtonElement);
}
function G(key, e, r) {
    switch(key){
        case "ArrowDown":
            return (e + 1) % r;
        case "ArrowUp":
            if (e <= 0) {
                return r - 1;
            }
            return e - 1;
        case "Home":
            return 0;
        case "End":
            return r - 1;
        default:
            return null;
    }
}
function F(menu) {
    const t_offsetParent = menu.offsetParent;
    if (t_offsetParent == null) {
        return menu.getBoundingClientRect().top;
    }
    return t_offsetParent.getBoundingClientRect().top + t_offsetParent.clientTop + menu.offsetTop;
}
function U(t) {
    return Math.max(0, Math.ceil(R - t));
}
function K(t, e, r) {
    const { menu, trigger } = t;
    const menu_ownerDocument = menu.ownerDocument;
    let u = 0;
    const p = ()=>!menu.hidden;
    const s = ()=>{
        if (!p()) {
            return;
        }
        u += 1;
        const a = menu.contains(menu_ownerDocument.activeElement);
        menu.hidden = true;
        delete menu.dataset.open;
        e.reachForMenu({
            heightPx: 0
        }).catch((d)=>m(t, d));
        if (a) {
            trigger.focus();
        }
    };
    const E = ()=>{
        const a = P(menu);
        if (a.length === 0) {
            return;
        }
        const d = ++u;
        menu.hidden = false;
        const heightPx = U(F(menu));
        e.reachForMenu({
            heightPx
        }).then(()=>{
            if (d !== u) {
                return;
            }
            menu.dataset.open = "true";
            (a.find((M)=>M.getAttribute("aria-checked") === "true") ?? a[0])?.focus();
        }, (g)=>{
            if (d === u) {
                s();
            }
            m(t, g);
        });
    };
    const v = (a)=>{
        const agentId = a.dataset.agentId;
        const k = a.getAttribute("aria-checked") === "true";
        s();
        if (!(agentId == null || k)) {
            e.switchTo({
                agentId
            }).catch((g)=>m(t, g));
        }
    };
    const f = (a)=>{
        a.preventDefault();
        if (p()) {
            s();
        } else {
            E();
        }
    };
    const l = ()=>s();
    const c = (a)=>{
        const d = a.target instanceof Element ? a.target.closest("button.bot-menu-item") : null;
        if (d instanceof HTMLButtonElement) {
            v(d);
        }
    };
    const h = (a)=>{
        if (a.key === "Escape" || a.key === "Tab") {
            a.preventDefault();
            a.stopPropagation();
            s();
            return;
        }
        const d = P(menu);
        const k = d.findIndex((M)=>M === menu_ownerDocument.activeElement);
        const g = G(a.key, k, d.length);
        if (g != null) {
            a.preventDefault();
            d[g]?.focus();
        }
    };
    const L = (a)=>{
        if (!(!p() || !(a.target instanceof Node) || menu.contains(a.target) || trigger.contains(a.target) && a.button !== 0)) {
            s();
        }
    };
    trigger.addEventListener("contextmenu", f);
    trigger.addEventListener("click", l);
    menu.addEventListener("click", c);
    menu.addEventListener("keydown", h);
    menu_ownerDocument.addEventListener("pointerdown", L);
    r?.addEventListener("blur", s);
    return ()=>{
        trigger.removeEventListener("contextmenu", f);
        trigger.removeEventListener("click", l);
        menu.removeEventListener("click", c);
        menu.removeEventListener("keydown", h);
        menu_ownerDocument.removeEventListener("pointerdown", L);
        r?.removeEventListener("blur", s);
    };
}
const N = 4;
function O(t, e) {
    const { root, trigger } = t;
    let o = null;
    let i = false;
    const u = (c)=>m(t, c);
    const p = ()=>{
        const c = o?.dragging === true;
        o = null;
        delete root.dataset.dragging;
        if (c) {
            e.endPanelMove().catch(u);
        }
        return c;
    };
    const s = (c)=>{
        if (c.button === 0) {
            i = false;
            o = {
                pointerId: c.pointerId,
                screenX: c.screenX,
                screenY: c.screenY,
                dragging: false
            };
            trigger.setPointerCapture(c.pointerId);
        }
    };
    const E = (c)=>{
        if (o == null || c.pointerId !== o.pointerId) {
            return;
        }
        const dx = Math.round(c.screenX - o.screenX);
        const dy = Math.round(c.screenY - o.screenY);
        if (!o.dragging) {
            if (Math.hypot(dx, dy) < N) {
                return;
            }
            o.dragging = true;
            root.dataset.dragging = "true";
        }
        e.movePanel({
            dx,
            dy
        }).catch(u);
    };
    const v = (c)=>{
        if (!(o == null || c.pointerId !== o.pointerId)) {
            i = p();
        }
    };
    const f = (c)=>{
        if (!(o == null || c.pointerId !== o.pointerId)) {
            p();
        }
    };
    const l = (c)=>{
        if (i) {
            i = false;
            c.preventDefault();
            c.stopPropagation();
        }
    };
    trigger.addEventListener("pointerdown", s);
    trigger.addEventListener("pointermove", E);
    trigger.addEventListener("pointerup", v);
    trigger.addEventListener("pointercancel", f);
    trigger.addEventListener("lostpointercapture", f);
    root.addEventListener("click", l, true);
    return ()=>{
        p();
        trigger.removeEventListener("pointerdown", s);
        trigger.removeEventListener("pointermove", E);
        trigger.removeEventListener("pointerup", v);
        trigger.removeEventListener("pointercancel", f);
        trigger.removeEventListener("lostpointercapture", f);
        root.removeEventListener("click", l, true);
    };
}
function Y(t, e) {
    const r = ()=>I(t, !b(t));
    const n = (i)=>{
        if (!(i.key !== "Escape" || !b(t))) {
            I(t, false);
            t.trigger.focus();
        }
    };
    const o = ()=>{
        if (!(t.prompt.disabled || t.prompt.value.trim().length > 0)) {
            I(t, false);
        }
    };
    t.trigger.addEventListener("click", r);
    t.root.addEventListener("keydown", n);
    e?.addEventListener("blur", o);
    return ()=>{
        t.trigger.removeEventListener("click", r);
        t.root.removeEventListener("keydown", n);
        e?.removeEventListener("blur", o);
    };
}
function q(t, submitPrompt) {
    const r = ()=>{
        if (t.prompt.disabled) {
            return;
        }
        const i = t.prompt.value.trim();
        if (i.length !== 0) {
            t.prompt.disabled = true;
            t.send.disabled = true;
            D(t);
            submitPrompt({
                prompt: i
            }).then(()=>{
                t.prompt.value = "";
                y(t.prompt);
                I(t, false);
            }, (u)=>m(t, u)).finally(()=>{
                t.prompt.disabled = false;
                t.send.disabled = false;
                if (b(t)) {
                    t.prompt.focus();
                }
            });
        }
    };
    const n = (i)=>{
        if (!(i.key !== "Enter" || i.shiftKey || i.isComposing)) {
            i.preventDefault();
            r();
        }
    };
    const o = (i)=>{
        i.preventDefault();
        r();
    };
    t.prompt.addEventListener("keydown", n);
    t.composer.addEventListener("submit", o);
    return ()=>{
        t.prompt.removeEventListener("keydown", n);
        t.composer.removeEventListener("submit", o);
    };
}
function W(t) {
    const e = ()=>y(t.prompt);
    t.prompt.addEventListener("input", e);
    y(t.prompt);
    return ()=>t.prompt.removeEventListener("input", e);
}
function V(document, e, r = document.defaultView) {
    const n = H(document);
    const changed = (l)=>X(n, l);
    const i = (l)=>_(n, l);
    const u = e.subscribe({
        changed,
        "choices-changed": i
    });
    e.read().then(changed, (l)=>m(n, l));
    e.readChoices().then(i, (l)=>m(n, l));
    const p = Y(n, r);
    const s = q(n, e.submitPrompt);
    const E = W(n);
    const v = K(n, e, r);
    const f = O(n, e);
    return ()=>{
        f();
        u();
        p();
        s();
        E();
        v();
    };
}
const x = K_1();
i(x != null, "desktop mount panel: preload did not expose window.desktopMount");
V(document, x);
