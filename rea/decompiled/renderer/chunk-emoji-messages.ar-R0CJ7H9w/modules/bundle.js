!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "ea3c6dc0-1a52-4f34-a18f-234b7bc573a4";
            e._sentryDebugIdIdentifier = "sentry-dbid-ea3c6dc0-1a52-4f34-a18f-234b7bc573a4";
        }
    } catch (e) {}
})();
export const groups = [
    {
        key: "smileys-emotion",
        message: "الوجوه التعبيرية والمشاعر",
        order: 0
    },
    {
        key: "people-body",
        message: "الأشخاص والجسم",
        order: 1
    },
    {
        key: "component",
        message: "المكوّن",
        order: 2
    },
    {
        key: "animals-nature",
        message: "الحيوانات والطبيعة",
        order: 3
    },
    {
        key: "food-drink",
        message: "الطعام والشراب",
        order: 4
    },
    {
        key: "travel-places",
        message: "السفر والأماكن",
        order: 5
    },
    {
        key: "activities",
        message: "الأنشطة",
        order: 6
    },
    {
        key: "objects",
        message: "الأشياء",
        order: 7
    },
    {
        key: "symbols",
        message: "الرموز",
        order: 8
    },
    {
        key: "flags",
        message: "الأعلام",
        order: 9
    }
];
const s = {
    groups
};
export { s as default };
