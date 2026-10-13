!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "88c06817-e9c6-49f4-a24a-8954916ed343";
            e._sentryDebugIdIdentifier = "sentry-dbid-88c06817-e9c6-49f4-a24a-8954916ed343";
        }
    } catch (e) {}
})();
export const groups = [
    {
        key: "smileys-emotion",
        message: "Glimlaggies en emosies",
        order: 0
    },
    {
        key: "people-body",
        message: "Mense en liggaam",
        order: 1
    },
    {
        key: "component",
        message: "Komponente",
        order: 2
    },
    {
        key: "animals-nature",
        message: "Diere en natuur",
        order: 3
    },
    {
        key: "food-drink",
        message: "Kos en drank",
        order: 4
    },
    {
        key: "travel-places",
        message: "Reis en plekke",
        order: 5
    },
    {
        key: "activities",
        message: "Aktiwiteite",
        order: 6
    },
    {
        key: "objects",
        message: "Voorwerpe",
        order: 7
    },
    {
        key: "symbols",
        message: "Simbole",
        order: 8
    },
    {
        key: "flags",
        message: "Vlae",
        order: 9
    }
];
const s = {
    groups
};
export { s as default };
