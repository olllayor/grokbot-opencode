!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "15dc224c-caf8-45e1-8ecd-d3e59e86e7ee";
            e._sentryDebugIdIdentifier = "sentry-dbid-15dc224c-caf8-45e1-8ecd-d3e59e86e7ee";
        }
    } catch (e) {}
})();
export const groups = [
    {
        key: "smileys-emotion",
        message: "Smajlíky a emoce",
        order: 0
    },
    {
        key: "people-body",
        message: "Lidé a tělo",
        order: 1
    },
    {
        key: "component",
        message: "Komponenty",
        order: 2
    },
    {
        key: "animals-nature",
        message: "Zvířata a příroda",
        order: 3
    },
    {
        key: "food-drink",
        message: "Jídlo a pití",
        order: 4
    },
    {
        key: "travel-places",
        message: "Cestování a místa",
        order: 5
    },
    {
        key: "activities",
        message: "Aktivity",
        order: 6
    },
    {
        key: "objects",
        message: "Předměty",
        order: 7
    },
    {
        key: "symbols",
        message: "Symboly",
        order: 8
    },
    {
        key: "flags",
        message: "Vlajky",
        order: 9
    }
];
const s = {
    groups
};
export { s as default };
