!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "fce4060d-f3de-4687-8fe2-a2c820c40944";
            e._sentryDebugIdIdentifier = "sentry-dbid-fce4060d-f3de-4687-8fe2-a2c820c40944";
        }
    } catch (e) {}
})();
export const groups = [
    {
        key: "smileys-emotion",
        message: "סמיילים ורגשות",
        order: 0
    },
    {
        key: "people-body",
        message: "אנשים וגוף",
        order: 1
    },
    {
        key: "component",
        message: "רכיבים",
        order: 2
    },
    {
        key: "animals-nature",
        message: "חיות וטבע",
        order: 3
    },
    {
        key: "food-drink",
        message: "אוכל ושתייה",
        order: 4
    },
    {
        key: "travel-places",
        message: "נסיעות ומקומות",
        order: 5
    },
    {
        key: "activities",
        message: "פעילויות",
        order: 6
    },
    {
        key: "objects",
        message: "חפצים",
        order: 7
    },
    {
        key: "symbols",
        message: "סמלים",
        order: 8
    },
    {
        key: "flags",
        message: "דגלים",
        order: 9
    }
];
const s = {
    groups
};
export { s as default };
