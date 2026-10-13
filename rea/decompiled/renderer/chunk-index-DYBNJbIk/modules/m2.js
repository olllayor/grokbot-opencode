import { o } from "./xr.js";
function d2() {
    if (typeof navigator === "undefined") {
        return {
            userAgent: "",
            platform: "",
            maxTouchPoints: 0
        };
    }
    return {
        userAgent: navigator.userAgent,
        platform: navigator.platform ?? "",
        maxTouchPoints: navigator.maxTouchPoints ?? 0
    };
}
o(d2, "readRawData");
const { userAgent, platform, maxTouchPoints } = d2();
const Xu = userAgent.toLowerCase();
const Ki = platform.toLowerCase();
const ios = /^i(os$|p)/.test(Ki) || Ki === "macintel" && maxTouchPoints > 1;
const N0 = "android";
const android = Ki === N0 || Xu.includes(N0);
const mac = !ios && Ki.startsWith("mac");
const windows = Ki.startsWith("win");
const linux = !android && /^(linux|chrome os)/.test(Ki);
const apple = mac || ios;
const g2 = {};
export { ios as Lg, Xu, mac as f2, windows as f3, g2, apple as h2, linux as h3, android as p2 };
export const m2 = {
    get android () {
        return android;
    },
    get apple () {
        return apple;
    },
    get ios () {
        return ios;
    },
    get linux () {
        return linux;
    },
    get mac () {
        return mac;
    },
    get windows () {
        return windows;
    }
};
