!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "7dd74d8c-afa2-45e1-b017-b091c3d75772";
            e._sentryDebugIdIdentifier = "sentry-dbid-7dd74d8c-afa2-45e1-b017-b091c3d75772";
        }
    } catch (e) {}
})();
export const groups = [
    {
        key: "smileys-emotion",
        message: "مسکراہٹیں اور جذبات",
        order: 0
    },
    {
        key: "people-body",
        message: "لوگ اور جسم",
        order: 1
    },
    {
        key: "component",
        message: "اجزا",
        order: 2
    },
    {
        key: "animals-nature",
        message: "جانور اور فطرت",
        order: 3
    },
    {
        key: "food-drink",
        message: "کھانا اور مشروبات",
        order: 4
    },
    {
        key: "travel-places",
        message: "سفر اور مقامات",
        order: 5
    },
    {
        key: "activities",
        message: "سرگرمیاں",
        order: 6
    },
    {
        key: "objects",
        message: "اشیا",
        order: 7
    },
    {
        key: "symbols",
        message: "علامتیں",
        order: 8
    },
    {
        key: "flags",
        message: "پرچم",
        order: 9
    }
];
const s = {
    groups
};
export { s as default };
