function _(R) {
    if (typeof R !== "string") {
        throw new TypeError(`Path must be a string. Received ${JSON.stringify(R)}`);
    }
}
s(_, "e");
function $(R, A) {
    let S;
    let L = "";
    let x = 0;
    let O = -1;
    let z = 0;
    for(let M = 0; M <= R.length; ++M){
        if (M < R.length) {
            S = R.charCodeAt(M);
        } else {
            if (S === 47) {
                break;
            }
            S = 47;
        }
        if (S === 47) {
            if (!(O === M - 1 || z === 1)) {
                if (O !== M - 1 && z === 2) {
                    if (L.length < 2 || x !== 2 || L.charCodeAt(L.length - 1) !== 46 || L.charCodeAt(L.length - 2) !== 46) {
                        if (L.length > 2) {
                            const Y = L.lastIndexOf("/");
                            if (Y !== L.length - 1) {
                                if (Y === -1) {
                                    L = "";
                                    x = 0;
                                } else {
                                    x = (L = L.slice(0, Y)).length - 1 - L.lastIndexOf("/");
                                }
                                O = M;
                                z = 0;
                                continue;
                            }
                        } else if (L.length === 2 || L.length === 1) {
                            L = "";
                            x = 0;
                            O = M;
                            z = 0;
                            continue;
                        }
                    }
                    if (A) {
                        if (L.length > 0) {
                            L += "/..";
                        } else {
                            L = "..";
                        }
                        x = 2;
                    }
                } else {
                    if (L.length > 0) {
                        L += `/${R.slice(O + 1, M)}`;
                    } else {
                        L = R.slice(O + 1, M);
                    }
                    x = M - O - 1;
                }
            }
            O = M;
            z = 0;
        } else {
            if (S === 46 && z !== -1) {
                ++z;
            } else {
                z = -1;
            }
        }
    }
    return L;
}
s($, "r");
var I = {
    resolve: s(function() {
        let R;
        let A = "";
        for(var S = false, L = arguments.length - 1; L >= -1 && !S; L--){
            let x;
            if (L >= 0) {
                x = arguments[L];
            } else {
                if (R === undefined) {
                    R = process.cwd();
                }
                x = R;
            }
            _(x);
            if (x.length !== 0) {
                A = `${x}/${A}`;
                S = x.charCodeAt(0) === 47;
            }
        }
        A = $(A, !S);
        if (S) {
            if (A.length > 0) {
                return `/${A}`;
            }
            return "/";
        }
        if (A.length > 0) {
            return A;
        }
        return ".";
    }, "resolve"),
    normalize: s((R)=>{
        _(R);
        if (R.length === 0) {
            return ".";
        }
        const A = R.charCodeAt(0) === 47;
        const S = R.charCodeAt(R.length - 1) === 47;
        if (!((R = $(R, !A)).length !== 0 || A)) {
            R = ".";
        }
        if (R.length > 0 && S) {
            R += "/";
        }
        if (A) {
            return `/${R}`;
        }
        return R;
    }, "normalize"),
    isAbsolute: s((R)=>{
        _(R);
        return R.length > 0 && R.charCodeAt(0) === 47;
    }, "isAbsolute"),
    join: s((...args)=>{
        if (args.length === 0) {
            return ".";
        }
        let R;
        for (const S of args){
            _(S);
            S.length > 0 && (R === undefined ? R = S : R += `/${S}`);
        }
        if (R === undefined) {
            return ".";
        }
        return I.normalize(R);
    }, "join"),
    relative: s((R, A)=>{
        _(R);
        _(A);
        if (R === A || (R = I.resolve(R)) === (A = I.resolve(A))) {
            return "";
        }
        for(var S = 1; S < R.length && R.charCodeAt(S) === 47; ++S);
        const R_length = R.length;
        const x = R_length - S;
        for(var O = 1; O < A.length && A.charCodeAt(O) === 47; ++O);
        const z = A.length - O;
        for(var M = x < z ? x : z, Y = -1, q = 0; q <= M; ++q){
            if (q === M) {
                if (z > M) {
                    if (A.charCodeAt(O + q) === 47) {
                        return A.slice(O + q + 1);
                    }
                    if (q === 0) {
                        return A.slice(O + q);
                    }
                } else {
                    x > M && (R.charCodeAt(S + q) === 47 ? Y = q : q === 0 && (Y = 0));
                }
                break;
            }
            const Z = R.charCodeAt(S + q);
            if (Z !== A.charCodeAt(O + q)) {
                break;
            }
            if (Z === 47) {
                Y = q;
            }
        }
        let ae = "";
        for(q = S + Y + 1; q <= R_length; ++q){
            q !== R_length && R.charCodeAt(q) !== 47 || (ae.length === 0 ? ae += ".." : ae += "/..");
        }
        if (ae.length > 0) {
            return ae + A.slice(O + Y);
        }
        O += Y;
        A.charCodeAt(O) === 47 && ++O;
        return A.slice(O);
    }, "relative"),
    _makeLong: s((R)=>R, "_makeLong"),
    dirname: s((R)=>{
        _(R);
        if (R.length === 0) {
            return ".";
        }
        let A = R.charCodeAt(0);
        const S = A === 47;
        let L = -1;
        let x = true;
        for(let O = R.length - 1; O >= 1; --O){
            if ((A = R.charCodeAt(O)) === 47) {
                if (!x) {
                    L = O;
                    break;
                }
            } else {
                x = false;
            }
        }
        if (L === -1) {
            if (S) {
                return "/";
            }
            return ".";
        }
        if (S && L === 1) {
            return "//";
        }
        return R.slice(0, L);
    }, "dirname"),
    basename: s((R, A)=>{
        if (A !== undefined && typeof A !== "string") {
            throw new TypeError('"ext" argument must be a string');
        }
        _(R);
        let S;
        let L = 0;
        let x = -1;
        let O = true;
        if (A !== undefined && A.length > 0 && A.length <= R.length) {
            if (A.length === R.length && A === R) {
                return "";
            }
            let z = A.length - 1;
            let M = -1;
            for(S = R.length - 1; S >= 0; --S){
                const Y = R.charCodeAt(S);
                if (Y === 47) {
                    if (!O) {
                        L = S + 1;
                        break;
                    }
                } else {
                    if (M === -1) {
                        O = false;
                        M = S + 1;
                    }
                    z >= 0 && (Y === A.charCodeAt(z) ? --z == -1 && (x = S) : (z = -1, x = M));
                }
            }
            if (L === x) {
                x = M;
            } else if (x === -1) {
                x = R.length;
            }
            return R.slice(L, x);
        }
        for(S = R.length - 1; S >= 0; --S){
            if (R.charCodeAt(S) === 47) {
                if (!O) {
                    L = S + 1;
                    break;
                }
            } else {
                if (x === -1) {
                    O = false;
                    x = S + 1;
                }
            }
        }
        if (x === -1) {
            return "";
        }
        return R.slice(L, x);
    }, "basename"),
    extname: s((R)=>{
        _(R);
        let A = -1;
        let S = 0;
        let L = -1;
        let x = true;
        let O = 0;
        for(let z = R.length - 1; z >= 0; --z){
            const M = R.charCodeAt(z);
            if (M !== 47) {
                if (L === -1) {
                    x = false;
                    L = z + 1;
                }
                M === 46 ? A === -1 ? A = z : O !== 1 && (O = 1) : A !== -1 && (O = -1);
            } else if (!x) {
                S = z + 1;
                break;
            }
        }
        if (A === -1 || L === -1 || O === 0 || O === 1 && A === L - 1 && A === S + 1) {
            return "";
        }
        return R.slice(A, L);
    }, "extname"),
    format: s((R)=>{
        if (R === null || typeof R !== "object") {
            throw new TypeError(`The "pathObject" argument must be of type Object. Received type ${typeof R}`);
        }
        return ((S)=>{
            const A = 0;
            const L = S.dir || S.root;
            const x = S.base || (S.name || "") + (S.ext || "");
            if (L) {
                if (L === S.root) {
                    return L + x;
                }
                return `${L}/${x}`;
            }
            return x;
        })(R);
    }, "format"),
    parse: s((R)=>{
        _(R);
        const A = {
            root: "",
            dir: "",
            base: "",
            ext: "",
            name: ""
        };
        if (R.length === 0) {
            return A;
        }
        let S;
        let L = R.charCodeAt(0);
        const x = L === 47;
        if (x) {
            A.root = "/";
            S = 1;
        } else {
            S = 0;
        }
        let O = -1;
        let z = 0;
        let M = -1;
        let Y = true;
        for(var q = R.length - 1, Z = 0; q >= S; --q){
            if ((L = R.charCodeAt(q)) !== 47) {
                if (M === -1) {
                    Y = false;
                    M = q + 1;
                }
                L === 46 ? O === -1 ? O = q : Z !== 1 && (Z = 1) : O !== -1 && (Z = -1);
            } else if (!Y) {
                z = q + 1;
                break;
            }
        }
        if (O === -1 || M === -1 || Z === 0 || Z === 1 && O === M - 1 && O === z + 1) {
            if (M !== -1) {
                A.base = A.name = z === 0 && x ? R.slice(1, M) : R.slice(z, M);
            }
        } else {
            if (z === 0 && x) {
                A.name = R.slice(1, O);
                A.base = R.slice(1, M);
            } else {
                A.name = R.slice(z, O);
                A.base = R.slice(z, M);
            }
            A.ext = R.slice(O, M);
        }
        if (z > 0) {
            A.dir = R.slice(0, z - 1);
        } else if (x) {
            A.dir = "/";
        }
        return A;
    }, "parse"),
    sep: "/",
    delimiter: ":",
    win32: null,
    posix: null
};
I.posix = I;
export default I;
