!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "02a57e1e-d33a-484b-9336-fed047976217";
            e._sentryDebugIdIdentifier = "sentry-dbid-02a57e1e-d33a-484b-9336-fed047976217";
        }
    } catch (e) {}
})();
export const groups = [
    {
        key: "smileys-emotion",
        message: "Smiley dan emosi",
        order: 0
    },
    {
        key: "people-body",
        message: "Orang dan tubuh",
        order: 1
    },
    {
        key: "component",
        message: "Komponen",
        order: 2
    },
    {
        key: "animals-nature",
        message: "Hewan dan alam",
        order: 3
    },
    {
        key: "food-drink",
        message: "Makanan dan minuman",
        order: 4
    },
    {
        key: "travel-places",
        message: "Perjalanan dan tempat",
        order: 5
    },
    {
        key: "activities",
        message: "Aktivitas",
        order: 6
    },
    {
        key: "objects",
        message: "Objek",
        order: 7
    },
    {
        key: "symbols",
        message: "Simbol",
        order: 8
    },
    {
        key: "flags",
        message: "Bendera",
        order: 9
    }
];
const a = {
    groups
};
export { a as default };
