import { r as r_1 } from "./index.eager-vendor-Qbf9YA6n.js";
import { Gr, Ht, Mg, Og, hn, lO, o, zr } from "./xr.js";
export const CO = "none";
export const NO = "trigger-press";
export const PO = "trigger-hover";
export const RO = "trigger-focus";
export const VO = "outside-press";
export const _O = "item-press";
export const OO = "close-press";
export const MO = "link-press";
export const DO = "clear-press";
export const LO = "chip-remove-press";
export const $O = "track-press";
export const FO = "increment-press";
export const BO = "decrement-press";
export const UO = "input-change";
export const jO = "input-clear";
export const zO = "input-blur";
export const GO = "input-paste";
export const HO = "input-press";
export const KO = "focus-out";
export const WO = "escape-key";
export const YO = "close-watcher";
export const XO = "list-navigation";
export const ZO = "keyboard";
export const qO = "pointer";
export const QO = "drag";
export const JO = "wheel";
export const e3 = "scrub";
export const t3 = "cancel-open";
export const r3 = "sibling-open";
export const n3 = "disabled";
export const a3 = "missing";
export const o3 = "initial";
export const i3 = "imperative-action";
export const s3 = "swipe";
export const c3 = "window-resize";
export function zt(reason, t, trigger, n) {
    let isCanceled = false;
    let isPropagationAllowed = false;
    const s = n ?? Ht;
    return {
        reason,
        event: t ?? new Event("base-ui"),
        cancel () {
            isCanceled = true;
        },
        allowPropagation () {
            isPropagationAllowed = true;
        },
        get isCanceled () {
            return isCanceled;
        },
        get isPropagationAllowed () {
            return isPropagationAllowed;
        },
        trigger,
        ...s
    };
}
o(zt, "createChangeEventDetails");
const l3 = r_1.forwardRef(o((t, r)=>{
    const { render, className, style, disabled = false, nativeButton = true, ...rest } = t;
    const u = zr();
    const m = u.useState("open");
    const { getButtonProps, buttonRef } = Mg({
        disabled,
        native: nativeButton
    });
    const state = {
        disabled
    };
    function onClick(g) {
        if (m) {
            u.setOpen(false, zt(Rt.closePress, g.nativeEvent));
        }
    }
    o(onClick, "handleClick");
    return Gr("button", t, {
        state,
        ref: [
            r,
            buttonRef
        ],
        props: [
            {
                onClick
            },
            rest,
            getButtonProps
        ]
    });
}, "DialogClose"));
let I0 = 0;
function useU2(e, t = "mui") {
    const [r, setR] = r_1.useState(e);
    const a = e || r;
    r_1.useEffect(()=>{
        if (r == null) {
            I0 += 1;
            setR(`${t}-${I0}`);
        }
    }, [
        r,
        t
    ]);
    return a;
}
o(useU2, "useGlobalId");
const Og_useId = Og.useId;
export function Wu(e, t) {
    if (Og_useId !== undefined) {
        const r = Og_useId();
        return e ?? (t ? `${t}-${r}` : r);
    }
    return useU2(e, t);
}
o(Wu, "useId");
export function Yu(e) {
    return Wu(e, "base-ui");
}
o(Yu, "useBaseUiId");
export const u3 = r_1.forwardRef(o((t, ref)=>{
    const { render, className, style, id, ...rest } = t;
    const l = zr();
    const id_1 = Yu(id);
    l.useSyncedValueWithCleanup("descriptionElementId", id_1);
    return Gr("p", t, {
        ref,
        props: [
            {
                id: id_1
            },
            rest
        ]
    });
}, "DialogDescription"));
export function Dg(e) {
    r_1.useEffect(e, lO);
}
o(Dg, "useOnMount");
const Es = 0;
let Ea;
Ea = class {
    static create() {
        return new Ea;
    }
    currentId = Es;
    start(t, r) {
        this.clear();
        this.currentId = setTimeout(()=>{
            this.currentId = Es;
            r();
        }, t);
    }
    isStarted() {
        return this.currentId !== Es;
    }
    clear = o(()=>{
        if (this.currentId !== Es) {
            clearTimeout(this.currentId);
            this.currentId = Es;
        }
    }, "clear");
    disposeEffect = o(()=>this.clear, "disposeEffect");
};
o(Ea, "Timeout");
const ac = Ea;
export function Hi() {
    const current = hn(ac.create).current;
    Dg(current.disposeEffect);
    return current;
}
o(Hi, "useTimeout");
export { ac, l3 };
export var Rt = {
    get cancelOpen () {
        return t3;
    },
    get chipRemovePress () {
        return LO;
    },
    get clearPress () {
        return DO;
    },
    get closePress () {
        return OO;
    },
    get closeWatcher () {
        return YO;
    },
    get decrementPress () {
        return BO;
    },
    get disabled () {
        return n3;
    },
    get drag () {
        return QO;
    },
    get escapeKey () {
        return WO;
    },
    get focusOut () {
        return KO;
    },
    get imperativeAction () {
        return i3;
    },
    get incrementPress () {
        return FO;
    },
    get initial () {
        return o3;
    },
    get inputBlur () {
        return zO;
    },
    get inputChange () {
        return UO;
    },
    get inputClear () {
        return jO;
    },
    get inputPaste () {
        return GO;
    },
    get inputPress () {
        return HO;
    },
    get itemPress () {
        return _O;
    },
    get keyboard () {
        return ZO;
    },
    get linkPress () {
        return MO;
    },
    get listNavigation () {
        return XO;
    },
    get missing () {
        return a3;
    },
    get none () {
        return CO;
    },
    get outsidePress () {
        return VO;
    },
    get pointer () {
        return qO;
    },
    get scrub () {
        return e3;
    },
    get siblingOpen () {
        return r3;
    },
    get swipe () {
        return s3;
    },
    get trackPress () {
        return $O;
    },
    get triggerFocus () {
        return RO;
    },
    get triggerHover () {
        return PO;
    },
    get triggerPress () {
        return NO;
    },
    get wheel () {
        return JO;
    },
    get windowResize () {
        return c3;
    }
};
