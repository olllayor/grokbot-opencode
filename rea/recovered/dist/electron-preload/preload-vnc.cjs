"use strict";!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="bf05ff57-50f7-469e-9fa9-f1ff0acb31b6",e._sentryDebugIdIdentifier="sentry-dbid-bf05ff57-50f7-469e-9fa9-f1ff0acb31b6")}catch(e){}}();
"use strict";var J=Object.defineProperty;var Cn=Object.getOwnPropertyDescriptor;var In=Object.getOwnPropertyNames;var Mn=Object.prototype.hasOwnProperty;var An=(e,n)=>()=>(e&&(n=e(e=0)),n);var Re=(e,n)=>{for(var r in n)J(e,r,{get:n[r],enumerable:!0})},On=(e,n,r,o)=>{if(n&&typeof n=="object"||typeof n=="function")for(let i of In(n))!Mn.call(e,i)&&i!==r&&J(e,i,{get:()=>n[i],enumerable:!(o=Cn(n,i))||o.enumerable});return e};var Dn=e=>On(J({},"__esModule",{value:!0}),e);var t=An(()=>{});var Dt={};Re(Dt,{installVncPreload:()=>wn});module.exports=Dn(Dt);t();t();var L=require("electron");t();var be=["ready","failed","stuck","aborted"];t();t();var w={now:()=>Date.now(),monotonicNow:()=>performance.now(),schedule(e,n,r){Pn(e);let o=!0,i=globalThis.setTimeout(()=>{o&&(o=!1,n())},e);return r?.keepEventLoopAlive!==!0&&Ln(i)&&i.unref(),{dispose(){o&&(o=!1,globalThis.clearTimeout(i))}}}};function Ln(e){return typeof e=="object"&&e!==null&&"unref"in e&&typeof e.unref=="function"}function Pn(e){if(!Number.isFinite(e)||e<0)throw new RangeError("delayMs must be a finite non-negative number")}t();var Nn=()=>{};function Fn(e,n,r){return{policyName:e,reason:n,errorClass:r instanceof Error?r.name:typeof r}}var I=class extends Error{constructor(n){super(`Deadline exceeded for ${n}`),this.code="deadline_exceeded",this.name="DeadlineExceededError",this.policyName=n}};function A(e){Se(e.name),he(e.timeoutMs,"timeoutMs");let n=e.clock??w;return{name:e.name,async run(r,o){if(o?.aborted)throw ke(o,e.name);let i=new AbortController,s=()=>{},f=new Promise((d,l)=>{s=l}),u=()=>{},c=new Promise((d,l)=>{u=l}),m=()=>{};if(o!=null){let d=()=>{let l=ke(o,e.name);u(l),i.abort(l)};o.addEventListener("abort",d,{once:!0}),m=()=>o.removeEventListener("abort",d)}let p=n.schedule(e.timeoutMs,()=>{let d=new I(e.name);s(d),i.abort(d)});try{return await Promise.race([r(i.signal),f,c])}finally{p.dispose(),m()}}}}function O(e){if(Se(e.name),he(e.intervalMs,"intervalMs"),e.intervalMs===0)throw new RangeError(`${e.name}: intervalMs must be greater than 0`);let n=e.clock??w,r=e.report??Nn;return{name:e.name,start(o,i){let s=Vn(),f=()=>{},u=new Promise(E=>{f=E}),c=()=>{},m=E=>s.dispose()?(c(),f(E),!0):!1,p=()=>{m({policyName:e.name,reason:"disposed"})},d=E=>{m({policyName:e.name,reason:"tick-failed",cause:E})&&r(Fn(e.name,"tick-failed",E))},l=()=>{if(s.fired(),s.current.state==="disposed")return;let E;try{E=o()}catch(C){d(C);return}E.then(()=>{s.current.state!=="disposed"&&s.arm(n.schedule(e.intervalMs,l))},d)},R={dispose:p,stopped:u};return i?.aborted?(p(),R):(i!=null&&(i.addEventListener("abort",p,{once:!0}),c=()=>i.removeEventListener("abort",p)),e.leading??!0?l():s.arm(n.schedule(e.intervalMs,l)),R)}}}function Vn(){let e={state:"running"};return{get current(){return e},arm(n){if(e.state==="disposed"){n.dispose();return}e.state==="armed"&&e.handle.dispose(),e={state:"armed",handle:n}},fired(){e.state==="armed"&&(e={state:"running"})},dispose(){return e.state==="disposed"?!1:(e.state==="armed"&&e.handle.dispose(),e={state:"disposed"},!0)}}}var jt={none:0,equal:1/2,full:1};function ke(e,n){return e.reason??Bn(n)}function Bn(e){let n=new Error(`Operation aborted for ${e}`);return n.name="AbortError",n}var Un=/^[a-z0-9]+([-.][a-z0-9]+)*$/;function Se(e){if(!Un.test(e))throw new TypeError(`name must be lowercase segments joined by "-" or ".", got ${JSON.stringify(e)}`)}function he(e,n){if(!Number.isFinite(e)||e<0)throw new RangeError(`${n} must be a finite non-negative number`)}t();t();t();t();t();t();t();t();t();t();t();function S(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}var Or=1024*1024;t();t();t();t();t();var Kn=864e5,lo=30*Kn;var co=[...be,"pending"];t();t();t();var Mo=256*1024;t();t();var Wn=/^[a-z0-9]+-[0-9]+$/;function _e(e){return Wn.test(e)}var Gn=2**32;function ve(e){return Number.isInteger(e)&&e>=0&&e<Gn}var X=2,Te=["click","keydown","pointerdown","wheel","input"],xe=["open","close"],we=["overlay","workspace","shell"],Ce=["button","link","menuitem","menuitemcheckbox","menuitemradio","option","tab","checkbox","radio","switch","slider","textbox","searchbox","combobox","listbox","treeitem","gridcell","row","dialog","alertdialog","log","region","status"],Ie=["immediate","user-blocking","normal","idle"],Me=["mount","update"],Ae=["layout","passive"],Oe=["view","layout"],De=["transition","restore"],Le=["default","transition"],Q=["quiet","cap","superseded"],Pe=["presented",...Q];t();t();var $n=Object.freeze({sampled:!1,sampleRate:0,additionalArguments:Object.freeze([])});t();var Yn=["dune_session_id","dune_app","app_version","app_built_at","track","platform","arch","dune_install_id","dune_row_id"],ii=new Set(["dune_signal","dune_reason",...Yn]);t();t();t();t();t();var bi=BigInt(127),ki=BigInt(7),Si=new TextEncoder;var wi=BigInt(1e3);t();t();t();var Jn=Symbol("redirect"),Ne=class{constructor(n,r){this.link=n;this.history=r}link;history;[Jn](){return"redirect"}};var Fe=Object.freeze({workspace:Object.freeze({idPrefix:"view"}),overlay:Object.freeze({idPrefix:"overlay"})}),Mi=Object.freeze({text:"",value:void 0});var v=e=>typeof e=="string",Z=e=>typeof e=="boolean",g=e=>typeof e=="number"&&Number.isFinite(e),b=e=>typeof e=="number"&&Number.isInteger(e)&&e>=0,Ve=e=>typeof e=="string"&&_e(e),ee=e=>typeof e=="number"&&ve(e),Xn=e=>e===X,U=e=>g(e)&&e>=0,Qn=e=>g(e)&&e>0&&e<=1;function k(e){let n=new Set(e);return r=>typeof r=="string"&&n.has(r)}function Be(e){return n=>n===null||e(n)}function H(e){return n=>Array.isArray(n)&&n.every(e)}function D(e,n,r={}){if(!S(e))return!1;for(let o of Object.keys(e))if(!Object.hasOwn(n,o)&&!Object.hasOwn(r,o))return!1;for(let[o,i]of Object.entries(n))if(!i(e[o]))return!1;for(let[o,i]of Object.entries(r))if(e[o]!==void 0&&!i(e[o]))return!1;return!0}function ne(e,n={}){return r=>{if(!S(r)||typeof r.kind!="string")return!1;let o=Object.hasOwn(e,r.kind)?e[r.kind]:void 0,i=Object.hasOwn(n,r.kind)?n[r.kind]:void 0;return o!=null&&D(r,{kind:v,...o},i)}}var Ue=k(Object.keys(Fe)),Zn=/^(view|overlay):[a-z0-9-]+(\/[a-z0-9-]+)*$/,et=e=>!S(e)||typeof e.entrypointId!="string"||!D(e,{surface:k(we),entrypointId:v})?!1:e.surface==="shell"?e.entrypointId==="":Zn.test(e.entrypointId),nt=ne({navigation:{action:k(xe),surface:Ue,entrypointId:v,startMs:g},selection:{startMs:g},interaction:{event:k(Te),startMs:g}},{navigation:{absorbedInputs:b},interaction:{route:et,target:e=>D(e,{component:ee},{role:k(Ce)})}}),tt=ne({render:{component:ee,phase:k(Me),compiled:Z,baseMs:g},commit:{priority:k(Ie)},effects:{boundary:v,passiveMs:g},"component-effects":{component:ee,phase:k(Ae)}}),rt=ne({settle:{entrypointId:v,chunk:k(Oe),cached:Z},presented:{ticket:b,entrypointId:v,surface:Ue,commitClass:k(De)},publish:{store:v,commit:k(Le),version:b,listeners:b},rpc:{edge:v,method:v,ok:Z,failureCode:Be(v)},event:{event:v,interactionId:b,inputDelayMs:g,processingMs:g},"long-animation-frame":{blockingMs:g,renderMs:g,styleAndLayoutMs:g,scripts:b}}),He=e=>D(e,{id:b,parent:Be(b),startMs:g,durationMs:g,selfMs:g,detail:tt}),je=e=>D(e,{startMs:g,durationMs:g,detail:rt}),Ke={version:Xn,lastCommitMs:U,commitCount:b,renderSelfMs:U,sampleRate:Qn},Fi={...Ke,id:Ve,root:nt,endMs:g,closedBy:k(Q),spans:H(He),folded:b,dropped:b},Vi={ticket:b,measures:H(je),presentedMs:U,dismissedMs:U},Bi={...Ke,id:Ve,startMs:g,endMs:g,closedBy:k(Pe),spans:H(He),measures:H(je),folded:b,dropped:b};function We(e){return{invoke:(n,r)=>e.invoke(n,r),on:(n,r)=>{let o=(i,s)=>{r(s)};return e.on(n,o),()=>{e.off(n,o)}}}}function Ge(e){return e!=null?We(e.ipcRenderer):We(L.ipcRenderer)}t();t();t();function it(e){return e===null?"null":Array.isArray(e)?"array":typeof e}function $e(e,n,r){return{ok:!1,path:e,expected:n,received:it(r)}}function at(e){return e.optional===!0}function Ye(e,n){return{expects:e,check:n,"~standard":{version:1,vendor:"dune",validate:r=>{let o=n(r,[]);return o.ok?{value:o.value}:{issues:[{message:`must be ${o.expected}, got ${o.received}`,path:o.path}]}}}}}function st(e,n,r){if(!S(n))return $e(r,"object",n);let o=[];for(let[i,s]of Object.entries(e)){let f=Object.hasOwn(n,i)?n[i]:void 0;if(f===void 0&&at(s))continue;let u=s.check(f,[...r,i]);if(!u.ok)return u;o.push([i,u.value])}return{ok:!0,value:Object.fromEntries(o)}}function te(){return Ye("string",(e,n)=>typeof e=="string"?{ok:!0,value:e}:$e(n,"string",e))}function P(e){return Ye("object",(n,r)=>st(e,n,r))}function dt(e){let n=e["~standard"];return typeof n=="object"&&n!==null&&n.version===1&&typeof n.validate=="function"}var j=class extends Error{constructor(n){super(`rpcMethod().args: field "${n}" is not an rpc field validator; pass rpc* combinators or one Standard Schema v1 value.`),this.name="RpcMethodDeclarationError"}};function K(){return{noArgs:{schema:null},args:e=>{if(dt(e))return{schema:e};for(let[n,r]of Object.entries(e))if(typeof r?.check!="function")throw new j(n);return{schema:P(e)}}}}function re(e,n){return Object.freeze({kind:"rpc-edge",edge:e,methods:n.methods,hasEvents:n.events!=null})}t();t();var lt="__DUNE_DEVTOOLS_HOOK__";function ct(e){return S(e)&&e.version===1&&typeof e.register=="function"}function qe(e=globalThis){let n=S(e)?e[lt]:void 0;return ct(n)?n:null}var Je="edge/unknown-method",oe="edge/transport-failed";var Xe="edge/handler-failed";var T=class extends Error{code;detail;constructor(n){super(`${n.code}: ${n.detail}`),this.name="EdgeCallFailure",this.code=n.code,this.detail=n.detail}};function ze(e){return typeof e!="object"||e==null||!("ok"in e)?!1:typeof e.ok=="boolean"}function ut(e,n){return`dune-rpc:${e}:m:${n}`}function Qe(e,n){return`dune-rpc:${e}:e:${n}`}function pt(e){return`dune-rpc:${e}:probe`}var ts=P({});function ie(e,n,r={}){let o={},i=r.measures??null,s=async(c,m)=>{let p=m instanceof Error?m.message:String(m),d;try{d=await n.invoke(pt(e.edge),c)}catch{return new T({code:oe,detail:p})}return ze(d)&&!d.ok&&d.failure.code===Je?new T(d.failure):new T({code:oe,detail:p})},f=async(c,m)=>{let p;try{p=await n.invoke(ut(e.edge,c),m)}catch(d){throw await s(c,d)}if(!ze(p))throw new T({code:Xe,detail:"The edge replied outside its envelope."});if(p.ok)return p.value;throw new T(p.failure)},u=(c,m)=>{if(i==null)return f(c,m);let p=i.now(),d=(l,R)=>{i.record({startMs:p,durationMs:i.now()-p,detail:{kind:"rpc",edge:e.edge,method:c,ok:l,failureCode:R}})};return f(c,m).then(l=>(d(!0,null),l),l=>{throw d(!1,l instanceof T?l.code:null),l})};for(let[c,{schema:m}]of Object.entries(e.methods))o[c]=m===null?()=>u(c,{}):p=>u(c,p);return e.hasEvents&&(o.subscribe=c=>{let m=[];for(let[p,d]of Object.entries(c))d!=null&&m.push(n.on(Qe(e.edge,p),d));return()=>{for(let p of m)p()}}),qe()?.register({kind:"rpc-edge",role:"bridge",declaration:e,trust:[]}),o}t();t();t();var ae=[{code:"KeyA",keysym:97,forceShift:!1},{code:"KeyC",keysym:99,forceShift:!1},{code:"KeyV",keysym:118,forceShift:!0},{code:"KeyX",keysym:120,forceShift:!1},{code:"KeyZ",keysym:122,forceShift:!1}],W=65507,G=65505,se=[[65511,"MetaLeft"],[65512,"MetaRight"],[65513,"AltLeft"],[65514,"AltRight"],[65515,"SuperLeft"],[65516,"SuperRight"]];function de(){let e="",n="";return{shouldSendHostText(r){return r.length>0&&r!==e&&r!==n},commitHostText(r){e=r},resolveVmText(r){return r.length===0||r===e||r===n?null:(n=r,r)}}}t();var Ze=re("box-vnc",{methods:{readClipboard:K().noArgs,writeClipboard:K().args({text:te()})}});t();var en="sand:vnc-host-key";t();t();function le(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}var nn="sand:vnc-liveness",ce=1e4,tn=3;t();var ue="sand:vnc-viewer-visible";t();function rn(e){return`
    import("./app/ui.js")
      .then(function (m) {
        var rfb = m && m.default && m.default.rfb;
        var text = ${JSON.stringify(e)};
        if (rfb && typeof rfb.clipboardPasteFrom === "function" && text) {
          rfb.clipboardPasteFrom(text);
          return true;
        }
        return false;
      })
      .catch(function () {
        return false;
      });
  `}function on(e,n){return n&&e.length>0?e:null}t();t();var pe="__sandVncFrameStamp";t();var N=[{member:"keyEvent",modulePath:"./core/rfb.js"},{member:"QEMUExtendedKeyEvent",modulePath:"./core/rfb.js"},{member:"pointerEvent",modulePath:"./core/rfb.js"},{member:"_damage",modulePath:"./core/display.js"},{member:"_recvMessage",modulePath:"./core/websock.js"},{member:"fbUpdateRequest",modulePath:"./core/rfb.js"},{member:"flip",modulePath:"./core/display.js"}];var $="__sandVncFrameHold";function an(e){let n=N[5],r=N[6];return`
    (function () {
      if (window.${$}) return;
      var pace = ${JSON.stringify(e)};
      var hold = { isHeld: false, request: null, minIntervalMs: pace.minIntervalMs, pacedAt: -Infinity, receivedBytes: 0, unpacedLeft: 0, isPastFirstRequest: false, timer: null };
      var countedChannels = new WeakSet();
      function countReceivedBytes(sock) {
        var channel = sock && sock._websocket;
        if (!channel || typeof channel.onmessage !== "function" || countedChannels.has(channel)) return;
        countedChannels.add(channel);
        var receive = channel.onmessage;
        channel.onmessage = function (event) {
          hold.receivedBytes += (event.data && event.data.byteLength) || 0;
          return receive.apply(this, arguments);
        };
      }
      function flush() {
        var request = hold.request;
        if (hold.isHeld || request == null) return;
        var isIncremental = request.args[1] === true;
        var wait = isIncremental ? hold.pacedAt + hold.minIntervalMs - performance.now() : 0;
        var isUnpaced = wait > 0 && request.followsSmallUpdate && hold.unpacedLeft > 0;
        if (wait > 0 && !isUnpaced) {
          if (hold.timer == null) {
            hold.timer = setTimeout(function () {
              hold.timer = null;
              flush();
            }, Math.ceil(wait));
          }
          return;
        }
        clearTimeout(hold.timer);
        hold.timer = null;
        hold.request = null;
        if (isUnpaced) hold.unpacedLeft -= 1;
        else if (isIncremental) {
          if (hold.isPastFirstRequest) hold.pacedAt = performance.now();
          hold.isPastFirstRequest = true;
        }
        request.send.apply(request.messages, request.args);
      }
      hold.set = function (isHeld) {
        hold.isHeld = isHeld;
        if (isHeld) return;
        hold.pacedAt = -Infinity;
        flush();
      };
      window.${$} = hold;
      var paced = import(${JSON.stringify(n.modulePath)}).then(function (m) {
        var messages = m && m.default && m.default.messages;
        if (!messages || typeof messages.${n.member} !== "function") {
          throw new Error("noVNC RFB lacks messages.${n.member}");
        }
        var send = messages.${n.member};
        messages.${n.member} = function (sock, incremental) {
          if (incremental !== true) hold.isPastFirstRequest = false;
          countReceivedBytes(sock);
          var updateBytes = hold.receivedBytes;
          hold.receivedBytes = 0;
          if (updateBytes >= pace.largeUpdateBytes) hold.unpacedLeft = pace.smallUpdatesAfterLarge;
          hold.request = {
            send: send,
            messages: this,
            args: arguments,
            followsSmallUpdate: updateBytes < pace.smallUpdateBytes,
          };
          flush();
        };
      });
      var stamped = import(${JSON.stringify(r.modulePath)}).then(function (m) {
        var display = m && m.default && m.default.prototype;
        if (!display || typeof display.${r.member} !== "function") {
          throw new Error("noVNC Display lacks prototype.${r.member}");
        }
        var draw = display.${r.member};
        display.${r.member} = function () {
          window.${pe} = Math.random();
          return draw.apply(this, arguments);
        };
        window.${pe} = Math.random();
      });
      return Promise.all([paced, stamped]);
    })();
  `}function sn(e){return`window.${$} && window.${$}.set(${e})`}t();var ft="sandVncImeInput";function dn(){return`
    (function () {
      if (window.__sandVncImeFieldInstalled) return;
      window.__sandVncImeFieldInstalled = true;

      var FIELD_ID = ${JSON.stringify(ft)};
      var XK_RETURN = 65293;
      var ui = null;
      var keysyms = null;

      function liveRfb() {
        var rfb = ui && ui.rfb;
        return rfb && typeof rfb.sendKey === "function" ? rfb : null;
      }

      function keysymOf(codepoint) {
        if (codepoint === 0x0a || codepoint === 0x0d) return XK_RETURN;
        if (codepoint < 0x20) return null;
        return keysyms.lookup(codepoint);
      }

      function sendText(text) {
        var rfb = liveRfb();
        if (!rfb) return;
        var chars = Array.from(text);
        for (var i = 0; i < chars.length; i++) {
          var keysym = keysymOf(chars[i].codePointAt(0));
          if (keysym === null) continue;
          rfb.sendKey(keysym, null, true);
          rfb.sendKey(keysym, null, false);
        }
      }

      function isViewerCanvas(node) {
        return node instanceof HTMLCanvasElement && node.closest("#noVNC_container") !== null;
      }

      function hostImeOwnsPhysicalKey(e) {
        if (e.ctrlKey || e.metaKey) return false;
        if (e.key === "Shift" || e.key === "Alt") return false;
        return e.isComposing || e.keyCode === 229 || e.key === "Process" || e.key === "Dead";
      }

      function install(Keyboard) {
        var field = document.createElement("textarea");
        field.id = FIELD_ID;
        field.tabIndex = -1;
        field.setAttribute("aria-label", "Remote desktop keyboard input");
        field.setAttribute("autocapitalize", "off");
        field.setAttribute("autocomplete", "off");
        field.setAttribute("autocorrect", "off");
        field.setAttribute("spellcheck", "false");
        field.style.cssText =
          "position:fixed;left:0;top:0;width:1px;height:1px;margin:0;padding:0;border:0;" +
          "opacity:0;overflow:hidden;resize:none;pointer-events:none;";
        document.body.appendChild(field);

        field.addEventListener(
          "keydown",
          function (e) {
            if (!hostImeOwnsPhysicalKey(e)) return;
            if (e.key === "Tab") e.preventDefault();
            e.stopImmediatePropagation();
          },
          true,
        );

        var keyboard = new Keyboard(field);
        keyboard.onkeyevent = function (keysym, code, down) {
          var rfb = liveRfb();
          if (rfb) rfb.sendKey(keysym, code, down);
        };
        keyboard.grab();

        function moveCandidateWindowAnchorTo(e) {
          if (!isViewerCanvas(e.target)) return;
          field.style.left = e.clientX + "px";
          field.style.top = e.clientY + "px";
        }

        field.addEventListener("compositionend", function (e) {
          if (typeof e.data === "string") sendText(e.data);
          field.value = "";
        });
        field.addEventListener("beforeinput", function (e) {
          if (e.isComposing || e.inputType === "insertCompositionText") return;
          e.preventDefault();
          if (e.inputType === "insertText" && typeof e.data === "string") {
            sendText(e.data);
          } else if (e.inputType === "insertLineBreak" || e.inputType === "insertParagraph") {
            sendText("\\n");
          }
        });
        field.addEventListener("input", function (e) {
          if (!e.isComposing) field.value = "";
        });

        document.addEventListener(
          "focus",
          function (e) {
            if (isViewerCanvas(e.target)) field.focus({ preventScroll: true });
          },
          true,
        );
        document.addEventListener("mousedown", moveCandidateWindowAnchorTo, true);

        if (isViewerCanvas(document.activeElement)) field.focus({ preventScroll: true });
      }

      return Promise.all([
        import("./app/ui.js"),
        import("./core/input/keyboard.js"),
        import("./core/input/keysymdef.js"),
      ]).then(function (modules) {
        ui = modules[0] && modules[0].default;
        var Keyboard = modules[1] && modules[1].default;
        keysyms = modules[2] && modules[2].default;
        if (!ui || !keysyms || typeof Keyboard !== "function") {
          throw new Error("noVNC modules lack Keyboard, keysymdef, or UI");
        }
        if (document.body) {
          install(Keyboard);
        } else {
          document.addEventListener("DOMContentLoaded", function () { install(Keyboard); }, { once: true });
        }
      });
    })();
  `}t();var fe="__sandVncLivenessBeacon";function ln(){let[e,n,r,o,i]=N;return`
    (function () {
      if (window.${fe}) return;
      var counters = { keys: 0, clicks: 0, moves: 0, drawOps: 0, inBytes: 0 };
      window.${fe} = counters;
      var PRIMARY_BUTTON_MASK_BITS = 0x07;
      var lastButtonMask = 0;
      import(${JSON.stringify(e.modulePath)}).then(function (m) {
        var messages = m.default.messages;
        var keyEvent = messages.${e.member};
        messages.${e.member} = function (sock, keysym, down) {
          if (down) counters.keys += 1;
          return keyEvent.apply(this, arguments);
        };
        if (typeof messages.${n.member} === "function") {
          var qemuKeyEvent = messages.${n.member};
          messages.${n.member} = function (sock, keysym, down) {
            if (down) counters.keys += 1;
            return qemuKeyEvent.apply(this, arguments);
          };
        }
        var pointerEvent = messages.${r.member};
        messages.${r.member} = function (sock, x, y, mask) {
          if (mask & ~lastButtonMask & PRIMARY_BUTTON_MASK_BITS) counters.clicks += 1;
          else counters.moves += 1;
          lastButtonMask = mask;
          return pointerEvent.apply(this, arguments);
        };
      }).catch(function () {});
      import(${JSON.stringify(o.modulePath)}).then(function (m) {
        var damage = m.default.prototype.${o.member};
        m.default.prototype.${o.member} = function () {
          counters.drawOps += 1;
          return damage.apply(this, arguments);
        };
      }).catch(function () {});
      import(${JSON.stringify(i.modulePath)}).then(function (m) {
        var recvMessage = m.default.prototype.${i.member};
        m.default.prototype.${i.member} = function (e) {
          counters.inBytes += (e && e.data && e.data.byteLength) || 0;
          return recvMessage.apply(this, arguments);
        };
      }).catch(function () {});
    })();
  `}function cn(){return`JSON.stringify(window.${fe} || null)`}function F(e){return typeof e=="number"&&Number.isFinite(e)&&e>=0}function un(e){if(typeof e!="string")return null;let n=JSON.parse(e);return!le(n)||!F(n.keys)||!F(n.clicks)||!F(n.moves)||!F(n.drawOps)||!F(n.inBytes)?null:{keys:n.keys,clicks:n.clicks,moves:n.moves,drawOps:n.drawOps,inBytes:n.inBytes}}function pn(){let e=null,n=[],r=null,o=!1;function i(){e=null,n=[],r=null,o=!1}function s(u,c){i(),e=c,r=u}function f(u,c){if(e==null)return s(u,c),null;let m={atMs:u,keys:c.keys-e.keys,clicks:c.clicks-e.clicks,moves:c.moves-e.moves,drawOps:c.drawOps-e.drawOps,inBytes:c.inBytes-e.inBytes};if(m.keys<0||m.clicks<0||m.moves<0||m.drawOps<0||m.inBytes<0)return s(u,c),null;e=c,n.push(m);let p=u-ce;if(n=n.filter(y=>y.atMs>p),m.drawOps>0&&(o=!1),o||r==null||u-r<ce)return null;let d=0,l=0,R=0,E=0,C=0;for(let y of n)d+=y.keys,l+=y.clicks,R+=y.moves,E+=y.drawOps,C+=y.inBytes;if(d+l<tn||E>0||C>0)return null;o=!0;let x=n.find(y=>y.keys+y.clicks>0);return{phase:"post_connect",stallMs:u-(x?.atMs??u),keys:d,clicks:l,moves:R,inBytes:C}}return{sample:f,reset:i}}t();function fn(){let e=!1;return{isVisible:()=>e,update(n){let r=n===!0,o=r&&!e;return e=r,o}}}var ge={};Re(ge,{getErrorMessage:()=>h,getIpcRenderer:()=>Y,getWebFrame:()=>vn,installSandBrowserPreload:()=>ht,logWarn:()=>_});t();t();var mn="sand:mouse-history-navigation";function me(e){return e===3?-1:e===4?1:null}function ye(e){e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation()}function yn(e,n){let r=!1,o=f=>{let u=me(f.button);u==null||f.isTrusted===!1||(r=!0,ye(f),n(u))},i=f=>{!r||me(f.button)==null||ye(f)},s=f=>{!r||me(f.button)==null||(ye(f),r=!1)};return e.addEventListener("mousedown",o,!0),e.addEventListener("mouseup",i,!0),e.addEventListener("auxclick",s,!0),()=>{e.removeEventListener("mousedown",o,!0),e.removeEventListener("mouseup",i,!0),e.removeEventListener("auxclick",s,!0)}}t();var gn=6e4;function En(e){return e.policy.run(()=>e.call).catch(n=>{throw n instanceof I?(e.reportStall({method:e.method,since:e.since}),e.buildStallError()):n})}t();function h(e){return e instanceof Error?e.message:void 0}function _(...e){console.warn("[sand-webview-preload]",...e)}var Rn=[".okta.com",".okta-emea.com",".oktapreview.com",".duosecurity.com",".login.microsoftonline.com",".onelogin.com",".auth0.com",".pingidentity.com",".rippling.com"];var bn=!1,Sn=null,hn=null;function _n(){if(!bn){bn=!0;try{let e=require("electron");Sn=e.ipcRenderer??null,hn=e.webFrame??null}catch(e){_("electron module unavailable",h(e))}}}function Y(){return _n(),Sn}function vn(){return _n(),hn}function mt(e){if(typeof e!="string"||e.length===0)return!1;for(let n=0;n<Rn.length;n++)if(e.endsWith(Rn[n]))return!0;return!1}function yt(){let e=vn();if(e==null||typeof location>"u"||!mt(location.hostname))return;e.executeJavaScript(`
    (function () {
      var permissions = navigator && navigator.permissions;
      if (!permissions || typeof permissions.query !== "function") return;
      if (permissions.__sandLocalNetworkPolyfill) return;
      permissions.__sandLocalNetworkPolyfill = true;
      var originalQuery = permissions.query.bind(permissions);
      permissions.query = function (descriptor) {
        var name = descriptor && descriptor.name;
        if (name === "local-network-access" || name === "local-network") {
          var status = new EventTarget();
          Object.defineProperties(status, {
            name: { value: name },
            state: { value: "granted" },
            onchange: { value: null, writable: true },
          });
          return Promise.resolve(status);
        }
        return originalQuery(descriptor);
      };
    })();
  `).catch(r=>{_("local network polyfill injection failed",h(r))})}function gt(){try{return new DOMException("Passkey request stalled","NotAllowedError")}catch{let n=new Error("Passkey request stalled");return n.name="NotAllowedError",n}}var Et=A({name:"sand-webview-passkey-stall",timeoutMs:gn});function kn(e,n,r){return function(...i){let s=Date.now(),f;try{let u=r.apply(navigator.credentials,i);f=Promise.resolve(u)}catch(u){return Promise.reject(u)}return En({policy:Et,method:n,since:s,call:f,reportStall:u=>{try{e.sendToHost("sand:browser-passkey-stalled",u)}catch(c){_("passkey stall send failed",h(c))}},buildStallError:gt})}}function Rt(){if(typeof navigator>"u")return;let e=Y();if(e!=null&&navigator.credentials){if(typeof navigator.credentials.create=="function"){let n=navigator.credentials.create.bind(navigator.credentials);navigator.credentials.create=kn(e,"create",n)}if(typeof navigator.credentials.get=="function"){let n=navigator.credentials.get.bind(navigator.credentials);navigator.credentials.get=kn(e,"get",n)}}}function bt(){typeof window>"u"||window.__sandDialogOverridesApplied!==!0&&(window.alert=function(){},window.confirm=function(){return!0},window.prompt=function(){return null},window.__sandDialogOverridesApplied=!0)}function kt(){let e=Y();if(e==null)return;let n=e;if(typeof window>"u"||typeof location>"u")return;let r=location.origin;function o(){try{n.sendToHost("sand:browser-popup-closed",{url:location.href})}catch(i){_("popup-closed send failed",h(i))}}window.addEventListener("beforeunload",o),window.addEventListener("pagehide",o),window.addEventListener("pageshow",function(s){if(!(!s||s.persisted!==!0)&&location.origin===r)try{n.sendToHost("sand:browser-origin-return",{origin:r,currentUrl:location.href})}catch(f){_("origin-return send failed",h(f))}})}function St(){let e=Y();e==null||typeof window>"u"||yn(window,n=>{e.send(mn,n)})}function ht(){try{St()}catch(e){_("mouse history install failed",h(e))}try{yt()}catch(e){_("local network polyfill install failed",h(e))}try{Rt()}catch(e){_("webauthn polyfill install failed",h(e))}try{bt()}catch(e){_("dialog stubs install failed",h(e))}try{kt()}catch(e){_("ipc wiring install failed",h(e))}}function _t(e){let n=e.getIpcRenderer();return n==null?null:ie(Ze,Ge({ipcRenderer:n}))}var xn={minIntervalMs:500,largeUpdateBytes:8*1024,smallUpdateBytes:1024,smallUpdatesAfterLarge:4},vt={...xn,minIntervalMs:0};function M(){if(typeof location>"u"||!location.pathname.endsWith("/vnc.html"))return!1;try{return new URLSearchParams(location.search).get("sandInteractive")==="1"}catch{return!1}}function Tn(){if(typeof document>"u")return null;let e=document.getElementById("noVNC_clipboard_text");return e instanceof HTMLTextAreaElement?e:null}function Tt({getErrorMessage:e,getWebFrame:n,logWarn:r}){if(typeof location>"u"||!location.pathname.endsWith("/vnc.html"))return;let o=`
    #noVNC_control_bar,
    #noVNC_control_bar_handle,
    #noVNC_control_bar_anchor,
    #noVNC_status,
    .noVNC_logo {
      display: none !important;
      pointer-events: none !important;
      visibility: hidden !important;
    }
    :root:not(.noVNC_loading):not(.noVNC_connecting):not(.noVNC_disconnecting):not(.noVNC_reconnecting) #noVNC_transition{display:none!important}
  `;try{n()?.insertCSS(o)}catch(s){r("noVNC CSS injection failed",e(s))}function i(){document.getElementById("noVNC_control_bar")?.classList.remove("noVNC_open")}typeof document>"u"||(i(),document.addEventListener("DOMContentLoaded",i,{once:!0}),window.addEventListener("load",i,{once:!0}))}function xt(e){let{getErrorMessage:n,getIpcRenderer:r,getWebFrame:o,logWarn:i}=e,s=r(),f=_t(e);if(s==null||f==null)return;let u=f;if(typeof window>"u"||typeof document>"u"||!M())return;let c=500,m=200,p=de(),d=0,l=fn();s.on(ue,(x,y)=>{l.update(y)&&E()});function R(){if(!l.isVisible())return;let x=Tn();if(x==null)return;let y=p.resolveVmText(x.value);y!=null&&u.writeClipboard({text:y}).catch(V=>{i("vnc clipboard write failed",n(V))})}function E(){if(!l.isVisible())return;let x=Date.now();x-d<m||(d=x,u.readClipboard().then(y=>{if(!p.shouldSendHostText(y))return;let V=o();V?.executeJavaScript(rn(y)).then(q=>{let z=on(y,q===!0);if(z==null)return;p.commitHostText(z);let Ee=Tn();Ee!=null&&(Ee.value=z)}).catch(q=>{i("vnc clipboard paste failed",n(q))})}).catch(y=>{i("vnc clipboard read failed",n(y))}))}let C=O({name:"vnc-clipboard-mirror",intervalMs:c}).start(async()=>{R()});window.addEventListener("focus",E),document.addEventListener("mousedown",E,!0),document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&E()}),window.addEventListener("pagehide",()=>C.dispose(),{once:!0})}function wt({getErrorMessage:e,getIpcRenderer:n,logWarn:r}){let o=n();if(o==null||typeof document>"u"||!M())return;let i=new Set(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"]);document.addEventListener("keydown",s=>{if(i.has(s.key))try{o.sendToHost(en,s.key)}catch(f){r("vnc host key forward failed",e(f))}},!0)}function Ct({getErrorMessage:e,getIpcRenderer:n,logWarn:r}){let o=n();if(o==null)return;let i=o;if(typeof window>"u"||typeof document>"u"||typeof location>"u"||!location.pathname.endsWith("/vnc.html"))return;function s(l,R){try{i.sendToHost("sand:vnc-session",JSON.stringify({phase:l,clean:R}))}catch(E){r("vnc session report failed",e(E))}}let f=0,u=!1,c=null;function m(){let l=document.documentElement.classList;return l.contains("noVNC_connected")?"connected":l.contains("noVNC_reconnecting")?"reconnecting":l.contains("noVNC_connecting")?"connecting":l.contains("noVNC_disconnecting")?"disconnecting":"disconnected"}function p(){let l=m();l!==c&&(c=l,l==="connected"?(f+=1,s(f>1?"reconnect":"rfb_connect",!0),u=!0):u&&l!=="connecting"&&(s("rfb_disconnect",l==="disconnecting"),u=!1))}function d(){let l=new MutationObserver(p);l.observe(document.documentElement,{attributes:!0,attributeFilter:["class"]}),p(),window.addEventListener("pagehide",()=>l.disconnect(),{once:!0})}document.documentElement==null?document.addEventListener("DOMContentLoaded",()=>d(),{once:!0}):d()}function It({getErrorMessage:e,getIpcRenderer:n,getWebFrame:r,logWarn:o}){let i=r();if(i==null)return;let s=i;if(typeof document>"u"||!location.pathname.endsWith("/vnc.html"))return;function f(p){s.executeJavaScript(p).catch(d=>{o("vnc frame hold failed",e(d))})}let u=!0,c=!1;function m(){let p=document.visibilityState==="hidden"||!u;p!==c&&(c=p,f(sn(c)))}f(an(M()?vt:xn)),n()?.on(ue,(p,d)=>{typeof d=="boolean"&&(u=d,m())}),document.addEventListener("visibilitychange",m),m()}function Mt({getErrorMessage:e,getIpcRenderer:n,getWebFrame:r,logWarn:o}){let i=n(),s=r();if(i==null||s==null)return;let f=i,u=s;if(typeof window>"u"||typeof document>"u"||!M())return;u.executeJavaScript(ln()).catch(d=>{o("vnc liveness beacon install failed",e(d))});let c=pn(),m=cn(),p=O({name:"vnc-liveness-sampler",intervalMs:1e3}).start(async()=>{if(document.documentElement?.classList.contains("noVNC_connected")!==!0){c.reset();return}try{let d=await u.executeJavaScript(m),l=un(d);if(l==null)return;let R=c.sample(performance.now(),l);if(R==null)return;f.sendToHost(nn,R)}catch(d){o("vnc liveness sample failed",e(d))}});window.addEventListener("pagehide",()=>p.dispose(),{once:!0})}function At({getErrorMessage:e,getWebFrame:n,logWarn:r}){let o=n();if(o==null||!M())return;let i=`
    (function () {
      if (window.__sandVncMacKeysInstalled) return;
      if (!/Mac/i.test((navigator && navigator.platform) || "")) return;
      window.__sandVncMacKeysInstalled = true;

      var CHORDS = ${JSON.stringify(ae)};
      var HELD_MODIFIERS = ${JSON.stringify(se)};

      var ui = null;
      import("./app/ui.js")
        .then(function (m) { ui = m && m.default; })
        .catch(function () {});

      document.addEventListener("keydown", function (e) {
        if (!e.metaKey) return;
        var chord = CHORDS.find(function (entry) { return entry.code === e.code; });
        if (!chord) return;
        var rfb = ui && ui.rfb;
        if (!rfb || typeof rfb.sendKey !== "function") return;
        e.preventDefault();
        e.stopImmediatePropagation();
        // noVNC presses Meta/Alt down for Cmd, so release them first to avoid
        // sending Alt+Ctrl+key instead of a clean Ctrl+key.
        for (var i = 0; i < HELD_MODIFIERS.length; i++) {
          try { rfb.sendKey(HELD_MODIFIERS[i][0], HELD_MODIFIERS[i][1], false); } catch (_e) {}
        }
        var withShift = e.shiftKey || chord.forceShift;
        var chordKeysym = withShift ? chord.keysym - 0x20 : chord.keysym;
        rfb.sendKey(${W}, "ControlLeft", true);
        if (withShift) rfb.sendKey(${G}, "ShiftLeft", true);
        rfb.sendKey(chordKeysym, e.code, true);
        rfb.sendKey(chordKeysym, e.code, false);
        if (withShift) rfb.sendKey(${G}, "ShiftLeft", false);
        rfb.sendKey(${W}, "ControlLeft", false);
      }, true);
    })();
  `;o.executeJavaScript(i).catch(s=>{r("vnc mac key mapping injection failed",e(s))})}function Ot({getErrorMessage:e,getWebFrame:n,logWarn:r}){let o=n();o!=null&&M()&&o.executeJavaScript(dn()).catch(i=>{r("vnc ime field injection failed",e(i))})}function wn(e=ge){let{getErrorMessage:n,installSandBrowserPreload:r,logWarn:o}=e;r();try{Tt(e)}catch(i){o("noVNC chrome hider install failed",n(i))}try{xt(e)}catch(i){o("vnc clipboard bridge install failed",n(i))}try{wt(e)}catch(i){o("vnc host key forwarder install failed",n(i))}try{Ct(e)}catch(i){o("vnc rfb session reporter install failed",n(i))}try{It(e)}catch(i){o("vnc frame hold install failed",n(i))}try{At(e)}catch(i){o("vnc mac key mapping install failed",n(i))}try{Ot(e)}catch(i){o("vnc ime field install failed",n(i))}try{Mt(e)}catch(i){o("vnc liveness tripwire install failed",n(i))}}wn();0&&(module.exports={installVncPreload});
//# debugId=bf05ff57-50f7-469e-9fa9-f1ff0acb31b6
