/** Executed in the page main world, independent of Electron's isolated preload. */
export const meetingPageProgram = `function Be(n) {
  let e = Object.freeze([n.pageLanguage]);
  Object.defineProperty(Navigator.prototype, "language", {
    configurable: !0,
    get: () => n.pageLanguage
  }), Object.defineProperty(Navigator.prototype, "languages", {
    configurable: !0,
    get: () => e
  });
  let t = !1,
    r = new Set(),
    i = s => {
      let c = document.getElementById(n.hostId);
      return c === null && s && (c = document.createElement("div"), c.id = n.hostId, c.style.display = "none", document.documentElement.appendChild(c), c.attachShadow({
        mode: "open"
      })), c?.shadowRoot ?? null;
    },
    a = (s, c) => {
      let v = i(!0);
      if (v !== null) for (let h of s) {
        if (h.readyState === "ended" || r.has(h.id)) continue;
        let u = [...v.querySelectorAll("audio")].find(b => b.dataset.sandLane === h.id);
        u === void 0 && (u = document.createElement("audio"), u.dataset.sandLane = h.id, c && (u.dataset.sandMix = ""), u.autoplay = !0, v.appendChild(u), u.srcObject = new MediaStream([h])), u.muted = !1, u.play();
      }
    },
    o = (s, c = !1) => {
      if (t || !(s instanceof MediaStream)) return;
      let v = s.getAudioTracks();
      if (v.length !== 0) {
        t = !0;
        try {
          a(v, c);
        } finally {
          t = !1;
        }
      }
    },
    l = new Map(),
    d = new Set(),
    g = () => {
      let s = i(!1);
      if (s === null) return;
      let c = performance.timeOrigin + performance.now(),
        v = new Map(),
        h = new Map();
      for (let u of s.querySelectorAll("audio")) {
        let b = l.get(u.dataset.sandLane ?? "");
        if (b === void 0) continue;
        let x = b.getContributingSources();
        v.set(u, x);
        for (let T of x) h.set(T.source, (h.get(T.source) ?? 0) + 1);
      }
      for (let [u, b] of h) b > 1 && d.add(u);
      for (let [u, b] of v) {
        let x = null,
          T = null;
        for (let D of b) (T === null || (D.audioLevel ?? 0) > (T.audioLevel ?? 0)) && (T = D), !d.has(D.source) && (x === null || D.timestamp > x.timestamp) && (x = D);
        let Le = l.get(u.dataset.sandLane ?? "")?.getSynchronizationSources()[0],
          B = T ?? Le;
        if (B === void 0 || c - B.timestamp > n.sourceRecentMs) {
          delete u.dataset.sandHeardAt;
          continue;
        }
        x === null ? delete u.dataset.sandSource : u.dataset.sandSource = String(x.source), u.dataset.sandLevel = String(B.audioLevel ?? 0), u.dataset.sandHeardAt = String(Math.round(B.timestamp));
      }
    };
  document.addEventListener(n.stampEvent, g);
  let m = window.RTCPeerConnection;
  if (m !== void 0) {
    let s = function (...c) {
      let v = new m(...c);
      return v.addEventListener("track", h => {
        h.track.kind === "audio" && l.set(h.track.id, h.receiver), o(new MediaStream([h.track]));
        for (let u of h.streams) o(u);
      }), v;
    };
    s.prototype = m.prototype, Object.setPrototypeOf(s, m), Object.defineProperty(window, "RTCPeerConnection", {
      configurable: !0,
      writable: !0,
      value: s
    });
  }
  let M = Object.getOwnPropertyDescriptor(HTMLMediaElement.prototype, "srcObject"),
    y = M?.set;
  M !== void 0 && y !== void 0 && Object.defineProperty(HTMLMediaElement.prototype, "srcObject", {
    configurable: !0,
    enumerable: M.enumerable,
    get: M.get,
    set(s) {
      o(s), y.call(this, s);
    }
  });
  let A = window.AudioContext,
    k = new WeakMap(),
    O = [],
    X = s => s instanceof A && s.state !== "closed",
    K = s => {
      X(s) && s.state !== "running" && s.resume();
    },
    ae = s => {
      !X(s) || O.includes(s) || (O.push(s), K(s), s.addEventListener("statechange", () => K(s)));
    },
    Z = function (...s) {
      let c = new A(...s);
      return ae(c), c;
    };
  Z.prototype = A.prototype, Object.setPrototypeOf(Z, A), Object.defineProperty(window, "AudioContext", {
    configurable: !0,
    writable: !0,
    value: Z
  }), document.addEventListener(n.wakeEvent, () => {
    for (let s of O) K(s);
  });
  let oe = AudioNode.prototype.connect,
    xe = AudioNode.prototype.connect;
  Object.defineProperty(AudioNode.prototype, "connect", {
    configurable: !0,
    writable: !0,
    value: function (s, c, v) {
      if (!(s instanceof AudioNode)) return xe.call(this, s, c);
      let h = oe.call(this, s, c, v),
        u = this.context;
      if (X(u) && s === u.destination) {
        ae(u);
        let b = k.get(u);
        b === void 0 && (b = u.createMediaStreamDestination(), k.set(u, b)), oe.call(this, b), o(b.stream, !0);
      }
      return h;
    }
  });
  let Te = navigator.mediaDevices,
    F = null,
    S = null,
    Ce = () => ((F === null || !F.active) && (F = new AudioContext().createMediaStreamDestination().stream), F),
    P = null,
    se = !1,
    Ne = () => {
      if (S !== null && S.active) return S;
      let s = i(!0);
      if (s === null) return S = new MediaStream(), S;
      for (let c of s.querySelectorAll("canvas[data-sand-avatar]")) c !== P && c.remove();
      if (P === null || P.isConnected === !1) {
        let c = document.createElement("canvas");
        c.width = n.frameWidth, c.height = n.frameHeight, c.dataset.sandAvatar = "idle", s.appendChild(c);
        let v = c.getContext("2d");
        v !== null && (v.fillStyle = "#000000", v.fillRect(0, 0, c.width, c.height)), P = c;
      }
      se || (se = !0, document.addEventListener(n.hearEvent, () => {
        P !== null && (P.dataset.sandAvatar = "listening");
      }), document.addEventListener(n.idleEvent, () => {
        P !== null && (P.dataset.sandAvatar = "idle");
      })), document.dispatchEvent(new Event(n.cameraReadyEvent)), S = P.captureStream(n.frameRate);
      for (let c of S.getVideoTracks()) c.contentHint = "detail";
      return S;
    },
    le = (s, c) => (c === "audio" ? s.getAudioTracks() : s.getVideoTracks()).map(h => {
      r.add(h.id);
      let u = h.clone();
      return r.add(u.id), u;
    });
  Object.assign(Te, {
    getUserMedia: async s => {
      let c = s?.audio !== void 0 && s.audio !== !1,
        v = s?.video !== void 0 && s.video !== !1;
      if (!c && !v) throw new DOMException("Requested device not found", "NotFoundError");
      let h = {
        audio: c,
        video: v
      };
      return new MediaStream([...(h.audio ? le(Ce(), "audio") : []), ...(h.video ? le(Ne(), "video") : [])]);
    },
    enumerateDevices: async () => [{
      deviceId: "grok-bot-listener",
      groupId: "grok-bot-listener",
      kind: "audioinput",
      label: n.micLabel,
      toJSON() {
        return {
          ...this
        };
      }
    }, {
      deviceId: "grok-bot-camera",
      groupId: "grok-bot-listener",
      kind: "videoinput",
      label: n.micLabel,
      toJSON() {
        return {
          ...this
        };
      }
    }],
    getDisplayMedia: async () => {
      throw new DOMException("Permission denied", "NotAllowedError");
    }
  });
}`;
