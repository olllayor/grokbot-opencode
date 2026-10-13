!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "6a67f704-6a2e-4332-8b05-0fe308518f8f";
            e._sentryDebugIdIdentifier = "sentry-dbid-6a67f704-6a2e-4332-8b05-0fe308518f8f";
        }
    } catch (e) {}
})();
export const groups = [
    {
        key: "smileys-emotion",
        message: "Φατσούλες και συναισθήματα",
        order: 0
    },
    {
        key: "people-body",
        message: "Άνθρωποι και σώμα",
        order: 1
    },
    {
        key: "component",
        message: "Στοιχεία",
        order: 2
    },
    {
        key: "animals-nature",
        message: "Ζώα και φύση",
        order: 3
    },
    {
        key: "food-drink",
        message: "Φαγητό και ποτό",
        order: 4
    },
    {
        key: "travel-places",
        message: "Ταξίδια και τοποθεσίες",
        order: 5
    },
    {
        key: "activities",
        message: "Δραστηριότητες",
        order: 6
    },
    {
        key: "objects",
        message: "Αντικείμενα",
        order: 7
    },
    {
        key: "symbols",
        message: "Σύμβολα",
        order: 8
    },
    {
        key: "flags",
        message: "Σημαίες",
        order: 9
    }
];
const s = {
    groups
};
export { s as default };
