export interface FramePacing {
  minIntervalMs: number;
  largeUpdateBytes: number;
  smallUpdateBytes: number;
  smallUpdatesAfterLarge: number;
}
const pe = "__sandVncFrameStamp";
const $ = "__sandVncFrameHold";
const ft = "sandVncImeInput";
const fe = "__sandVncLivenessBeacon";
const N = [
  { member: "keyEvent", modulePath: "./core/rfb.js" },
  { member: "QEMUExtendedKeyEvent", modulePath: "./core/rfb.js" },
  { member: "pointerEvent", modulePath: "./core/rfb.js" },
  { member: "_damage", modulePath: "./core/display.js" },
  { member: "_recvMessage", modulePath: "./core/websock.js" },
  { member: "fbUpdateRequest", modulePath: "./core/rfb.js" },
  { member: "flip", modulePath: "./core/display.js" },
];
export function clipboardPasteSource(e: string) {
  return `
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
  `;
}
export function framePacingSource(e: FramePacing) {
  let n = N[5],
    r = N[6];
  return `
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
  `;
}
export function frameHoldSource(e: boolean) {
  return `window.${$} && window.${$}.set(${e})`;
}
export function imeFieldSource() {
  return `
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
  `;
}
export function livenessBeaconSource() {
  let [e, n, r, o, i] = N;
  return `
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
  `;
}
export function livenessSampleSource() {
  return `JSON.stringify(window.${fe} || null)`;
}
