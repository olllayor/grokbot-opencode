!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "f26c327e-6fe5-4ccc-9130-de0382c217dc";
            e._sentryDebugIdIdentifier = "sentry-dbid-f26c327e-6fe5-4ccc-9130-de0382c217dc";
        }
    } catch (e) {}
})();
export const groups = [
    {
        key: "smileys-emotion",
        message: "Yüz ifadeleri ve duygular",
        order: 0
    },
    {
        key: "people-body",
        message: "Kişiler ve vücut",
        order: 1
    },
    {
        key: "component",
        message: "Bileşenler",
        order: 2
    },
    {
        key: "animals-nature",
        message: "Hayvanlar ve doğa",
        order: 3
    },
    {
        key: "food-drink",
        message: "Yiyecek ve içecek",
        order: 4
    },
    {
        key: "travel-places",
        message: "Seyahat ve yerler",
        order: 5
    },
    {
        key: "activities",
        message: "Etkinlikler",
        order: 6
    },
    {
        key: "objects",
        message: "Nesneler",
        order: 7
    },
    {
        key: "symbols",
        message: "Semboller",
        order: 8
    },
    {
        key: "flags",
        message: "Bayraklar",
        order: 9
    }
];
const r = {
    groups
};
export { r as default };
