import J from "./module-975.js";
const n = {};
let a;
require.r(n);
require.d(n, {
    URI: s(()=>p, "URI"),
    Utils: s(()=>ye, "Utils")
});
if (typeof process === "object") {
    a = process.platform === "win32";
} else if (typeof navigator === "object") {
    a = navigator.userAgent.indexOf("Windows") >= 0;
}
const i = /^\w[\w\d+.-]*$/;
const o = /^\//;
const u = /^\/\//;
function l(k, _) {
    if (!k.scheme && _) {
        throw new Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${k.authority}", path: "${k.path}", query: "${k.query}", fragment: "${k.fragment}"}`);
    }
    if (k.scheme && !i.test(k.scheme)) {
        throw new Error("[UriError]: Scheme contains illegal characters.");
    }
    if (k.path) {
        if (k.authority) {
            if (!o.test(k.path)) {
                throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character');
            }
        } else if (u.test(k.path)) {
            throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")');
        }
    }
}
s(l, "a");
const c = "";
const f = "/";
const d = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
const ue = class ue {
    static isUri(_) {
        return _ instanceof ue || !!_ && typeof _.authority === "string" && typeof _.fragment === "string" && typeof _.path === "string" && typeof _.query === "string" && typeof _.scheme === "string" && typeof _.fsPath === "string" && typeof _.with === "function" && typeof _.toString === "function";
    }
    scheme;
    authority;
    path;
    query;
    fragment;
    constructor(_, $, I, R, A, S = false){
        if (typeof _ === "object") {
            this.scheme = _.scheme || c;
            this.authority = _.authority || c;
            this.path = _.path || c;
            this.query = _.query || c;
            this.fragment = _.fragment || c;
        } else {
            this.scheme = ((L, x)=>{
                if (L || x) {
                    return L;
                }
                return "file";
            })(_, S);
            this.authority = $ || c;
            this.path = ((L, x)=>{
                switch(L){
                    case "https":
                    case "http":
                    case "file":
                        if (x) {
                            if (x[0] !== f) {
                                x = f + x;
                            }
                        } else {
                            x = f;
                        }
                }
                return x;
            })(this.scheme, I || c);
            this.query = R || c;
            this.fragment = A || c;
            l(this, S);
        }
    }
    get fsPath() {
        return w(this, false);
    }
    with(_) {
        if (!_) {
            return this;
        }
        let { scheme, authority, path, query, fragment } = _;
        if (scheme === undefined) {
            scheme = this.scheme;
        } else if (scheme === null) {
            scheme = c;
        }
        if (authority === undefined) {
            authority = this.authority;
        } else if (authority === null) {
            authority = c;
        }
        if (path === undefined) {
            path = this.path;
        } else if (path === null) {
            path = c;
        }
        if (query === undefined) {
            query = this.query;
        } else if (query === null) {
            query = c;
        }
        if (fragment === undefined) {
            fragment = this.fragment;
        } else if (fragment === null) {
            fragment = c;
        }
        if (scheme === this.scheme && authority === this.authority && path === this.path && query === this.query && fragment === this.fragment) {
            return this;
        }
        return new h(scheme, authority, path, query, fragment);
    }
    static parse(_, $ = false) {
        const I = d.exec(_);
        if (I) {
            return new h(I[2] || c, ne(I[4] || c), ne(I[5] || c), ne(I[7] || c), ne(I[9] || c), $);
        }
        return new h(c, c, c, c, c);
    }
    static file(_) {
        let $ = c;
        if (a) {
            _ = _.replace(/\\/g, f);
        }
        if (_[0] === f && _[1] === f) {
            const I = _.indexOf(f, 2);
            if (I === -1) {
                $ = _.substring(2);
                _ = f;
            } else {
                $ = _.substring(2, I);
                _ = _.substring(I) || f;
            }
        }
        return new h("file", $, _, c, c);
    }
    static from(_) {
        const $ = new h(_.scheme, _.authority, _.path, _.query, _.fragment);
        l($, true);
        return $;
    }
    toString(_ = false) {
        return C(this, _);
    }
    toJSON() {
        return this;
    }
    static revive(_) {
        if (_) {
            if (_ instanceof ue) {
                return _;
            }
            {
                const $ = new h(_);
                $._formatted = _.external;
                $._fsPath = _._sep === y ? _.fsPath : null;
                return $;
            }
        }
        return _;
    }
};
s(ue, "l");
let p = ue;
const y = a ? 1 : undefined;
const ot = class ot extends p {
    _formatted = null;
    _fsPath = null;
    get fsPath() {
        if (!this._fsPath) {
            this._fsPath = w(this, false);
        }
        return this._fsPath;
    }
    toString(_ = false) {
        if (_) {
            return C(this, true);
        }
        if (!this._formatted) {
            this._formatted = C(this, false);
        }
        return this._formatted;
    }
    toJSON() {
        const _ = {
            $mid: 1
        };
        if (this._fsPath) {
            _.fsPath = this._fsPath;
            _._sep = y;
        }
        if (this._formatted) {
            _.external = this._formatted;
        }
        if (this.path) {
            _.path = this.path;
        }
        if (this.scheme) {
            _.scheme = this.scheme;
        }
        if (this.authority) {
            _.authority = this.authority;
        }
        if (this.query) {
            _.query = this.query;
        }
        if (this.fragment) {
            _.fragment = this.fragment;
        }
        return _;
    }
};
s(ot, "d");
let h = ot;
const T = {
    58: "%3A",
    47: "%2F",
    63: "%3F",
    35: "%23",
    91: "%5B",
    93: "%5D",
    64: "%40",
    33: "%21",
    36: "%24",
    38: "%26",
    39: "%27",
    40: "%28",
    41: "%29",
    42: "%2A",
    43: "%2B",
    44: "%2C",
    59: "%3B",
    61: "%3D",
    32: "%20"
};
function b(k, _, $) {
    let I;
    let R = -1;
    for(let A = 0; A < k.length; A++){
        const S = k.charCodeAt(A);
        if (S >= 97 && S <= 122 || S >= 65 && S <= 90 || S >= 48 && S <= 57 || S === 45 || S === 46 || S === 95 || S === 126 || _ && S === 47 || $ && S === 91 || $ && S === 93 || $ && S === 58) {
            if (R !== -1) {
                I += encodeURIComponent(k.substring(R, A));
                R = -1;
            }
            if (I !== undefined) {
                I += k.charAt(A);
            }
        } else {
            if (I === undefined) {
                I = k.substr(0, A);
            }
            const L = T[S];
            if (L !== undefined) {
                if (R !== -1) {
                    I += encodeURIComponent(k.substring(R, A));
                    R = -1;
                }
                I += L;
            } else if (R === -1) {
                R = A;
            }
        }
    }
    if (R !== -1) {
        I += encodeURIComponent(k.substring(R));
    }
    if (I !== undefined) {
        return I;
    }
    return k;
}
s(b, "m");
function v(k) {
    let _;
    for(let $ = 0; $ < k.length; $++){
        const I = k.charCodeAt($);
        if (I === 35 || I === 63) {
            if (_ === undefined) {
                _ = k.substr(0, $);
            }
            _ += T[I];
        } else if (_ !== undefined) {
            _ += k[$];
        }
    }
    if (_ !== undefined) {
        return _;
    }
    return k;
}
s(v, "y");
function w(k, _) {
    let $;
    $ = k.authority && k.path.length > 1 && k.scheme === "file" ? `//${k.authority}${k.path}` : k.path.charCodeAt(0) === 47 && (k.path.charCodeAt(1) >= 65 && k.path.charCodeAt(1) <= 90 || k.path.charCodeAt(1) >= 97 && k.path.charCodeAt(1) <= 122) && k.path.charCodeAt(2) === 58 ? _ ? k.path.substr(1) : k.path[1].toLowerCase() + k.path.substr(2) : k.path;
    if (a) {
        $ = $.replace(/\//g, "\\");
    }
    return $;
}
s(w, "v");
function C(k, _) {
    const $ = _ ? v : b;
    let I = "";
    let { scheme, authority, path, query, fragment } = k;
    if (scheme) {
        I += scheme;
        I += ":";
    }
    if (authority || scheme === "file") {
        I += f;
        I += f;
    }
    if (authority) {
        let O = authority.indexOf("@");
        if (O !== -1) {
            const z = authority.substr(0, O);
            authority = authority.substr(O + 1);
            O = z.lastIndexOf(":");
            if (O === -1) {
                I += $(z, false, false);
            } else {
                I += $(z.substr(0, O), false, false);
                I += ":";
                I += $(z.substr(O + 1), false, true);
            }
            I += "@";
        }
        authority = authority.toLowerCase();
        O = authority.lastIndexOf(":");
        if (O === -1) {
            I += $(authority, false, true);
        } else {
            I += $(authority.substr(0, O), false, true);
            I += authority.substr(O);
        }
    }
    if (path) {
        if (path.length >= 3 && path.charCodeAt(0) === 47 && path.charCodeAt(2) === 58) {
            const O = path.charCodeAt(1);
            if (O >= 65 && O <= 90) {
                path = `/${String.fromCharCode(O + 32)}:${path.substr(3)}`;
            }
        } else if (path.length >= 2 && path.charCodeAt(1) === 58) {
            const O = path.charCodeAt(0);
            if (O >= 65 && O <= 90) {
                path = `${String.fromCharCode(O + 32)}:${path.substr(2)}`;
            }
        }
        I += $(path, true, false);
    }
    if (query) {
        I += "?";
        I += $(query, false, false);
    }
    if (fragment) {
        I += "#";
        I += _ ? fragment : b(fragment, false, false);
    }
    return I;
}
s(C, "b");
function N(k) {
    try {
        return decodeURIComponent(k);
    } catch  {
        if (k.length > 3) {
            return k.substr(0, 3) + N(k.substr(3));
        }
        return k;
    }
}
s(N, "C");
const B = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
function ne(k) {
    if (k.match(B)) {
        return k.replace(B, (_)=>N(_));
    }
    return k;
}
s(ne, "w");
const he = J.posix || J;
const Ae = "/";
var ye;
{
    const k = ye || (ye = {});
    k.joinPath = (_, ...$)=>_.with({
            path: he.join(_.path, ...$)
        });
    k.resolvePath = (_, ...$)=>{
        let __path = _.path;
        let R = false;
        if (__path[0] !== Ae) {
            __path = Ae + __path;
            R = true;
        }
        let A = he.resolve(__path, ...$);
        if (R && A[0] === Ae && !_.authority) {
            A = A.substring(1);
        }
        return _.with({
            path: A
        });
    };
    k.dirname = (_)=>{
        if (_.path.length === 0 || _.path === Ae) {
            return _;
        }
        let $ = he.dirname(_.path);
        if ($.length === 1 && $.charCodeAt(0) === 46) {
            $ = "";
        }
        return _.with({
            path: $
        });
    };
    k.basename = (_)=>he.basename(_.path);
    k.extname = (_)=>he.extname(_.path);
}BN = n;
