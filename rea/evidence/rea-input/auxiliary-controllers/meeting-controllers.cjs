var V = class n {
  constructor(e, t) {
    this.displayName = e;
    this.debug = t;
  }
  displayName;
  debug;
  static maxClicks = 5;
  previewChecked = !1;
  typed = !1;
  clicks = 0;
  step(e) {
    if (!this.previewChecked) {
      this.previewChecked = !0;
      let a = e.previewOffButton();
      if (a !== null) {
        a.click();
        return;
      }
    }
    let t = e.nameField(),
      r = t !== null && t.value.trim().length === 0;
    if (t !== null && this.displayName !== null && !this.typed && r) {
      t.focus(), n.setInputValue(t, this.displayName), this.typed = !0, this.debug({
        kind: "join.typed"
      });
      return;
    }
    if (this.clicks >= n.maxClicks) return;
    let i = e.joinButton();
    i === null || this.displayName !== null && r || (i.click(), this.clicks += 1, this.debug({
      kind: "join.clicked"
    }));
  }
  static setInputValue(e, t) {
    let r = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value")?.set;
    r != null ? r.call(e, t) : e.value = t, e.dispatchEvent(new Event("input", {
      bubbles: !0
    })), e.dispatchEvent(new Event("change", {
      bubbles: !0
    }));
  }
};
var R = class n {
  constructor(e) {
    this.deps = e;
  }
  deps;
  static framesPerChunk = 2048;
  context = null;
  seenTracks = new Set();
  tapped = new WeakMap();
  tappedCount = 0;
  static createAudioContext() {
    return new AudioContext({
      sampleRate: p.sampleRateHz
    });
  }
  hasPlayback() {
    return this.tappedCount > 0;
  }
  scan(e) {
    for (let t of w.media(e)) this.attach(t);
    for (let t of e.querySelectorAll("audio, video")) this.attach(t);
  }
  attach(e) {
    let t = n.sourceKeyOf(e),
      r = this.tapped.get(e);
    if (t === null || r?.key === t) return;
    let i = n.streamOf(e);
    if (i === null) return;
    let a = i.getAudioTracks().filter(y => y.readyState === "live");
    if (a.length === 0 || a.every(y => this.seenTracks.has(y.id))) return;
    for (let y of a) this.seenTracks.add(y.id);
    r?.node.disconnect();
    let o = this.ensureContext(),
      l = o.createMediaStreamSource(i),
      d = o.createScriptProcessor(n.framesPerChunk, 1, 1),
      g = o.createGain();
    g.gain.value = 0;
    let {
      lane: m,
      mix: M
    } = w.sinkOf(e);
    d.onaudioprocess = y => {
      let {
        source: A
      } = w.sinkOf(e);
      this.deps.audio({
        pcm16: n.pcm16Of(y.inputBuffer.getChannelData(0)),
        lane: m ?? t,
        source: A,
        speaker: this.deps.speakerOf(A, M)
      });
    }, l.connect(d), d.connect(g), g.connect(o.destination), this.tapped.set(e, {
      key: t,
      node: l
    }), this.tappedCount += 1, this.deps.debug({
      kind: r === void 0 ? "tap.attach" : "tap.retap",
      tracks: a.length
    });
  }
  ensureContext() {
    if (this.context !== null) return this.context;
    let e = this.deps.createAudioContext();
    return e.resume(), this.context = e, e;
  }
  static sourceKeyOf(e) {
    if (e.srcObject instanceof MediaStream) {
      let t = e.srcObject.getAudioTracks().filter(r => r.readyState === "live").map(r => r.id);
      return t.length === 0 ? null : `stream:${t.join(",")}`;
    }
    return e.currentSrc.length > 0 ? `src:${e.currentSrc}` : null;
  }
  static streamOf(e) {
    return e.srcObject instanceof MediaStream ? e.srcObject : typeof e.captureStream == "function" ? e.captureStream() : null;
  }
  static pcm16Of(e) {
    let t = new Int16Array(e.length);
    for (let r = 0; r < e.length; r += 1) {
      let i = Math.max(-1, Math.min(1, e[r] ?? 0));
      t[r] = i < 0 ? i * 32768 : i * 32767;
    }
    return t.buffer;
  }
};
var re = class n {
  constructor(e) {
    this.clock = e;
  }
  clock;
  static holdMs = 1200;
  current = null;
  lastSeenAtMs = 0;
  observe(e) {
    let t = G.sole(e);
    if (t !== null) {
      this.current = t, this.lastSeenAtMs = this.clock.now();
      return;
    }
    if (e.length > 1) {
      this.current = null;
      return;
    }
    this.current !== null && this.clock.now() - this.lastSeenAtMs > n.holdMs && (this.current = null);
  }
  speaker() {
    return this.current;
  }
};
var ie = class n {
  static bindingObservations = 2;
  names = new Map();
  pending = null;
  observe(e, t) {
    let r = new Set(t.map(d => this.names.get(d))),
      i = t.filter(d => !this.names.has(d)),
      a = e.filter(d => !r.has(d)),
      o = i[0],
      l = a[0];
    if (i.length !== 1 || a.length !== 1 || o === void 0 || l === void 0) {
      this.pending = null;
      return;
    }
    if ((this.pending?.source !== o || this.pending.name !== l) && (this.pending = {
      source: o,
      name: l,
      count: 0
    }), this.pending.count += 1, !(this.pending.count < n.bindingObservations)) {
      for (let [d, g] of this.names) g === l && this.names.delete(d);
      this.names.set(o, l), this.pending = null;
    }
  }
  nameOf(e) {
    return this.names.get(e) ?? null;
  }
};
var z = class n {
  constructor(e, t) {
    this.clock = e;
    this.debug = t;
    this.watch = new re(e);
  }
  clock;
  debug;
  static speakingLevel = .005;
  watch;
  ledger = new ie();
  announced = new Map();
  mixedLanes = !1;
  observe(e) {
    this.mixedLanes = e.site.speakerSignal.kind === "roster";
    let t = e.speakingNames();
    this.watch.observe(t);
    let r = this.activeSources(e.document);
    this.ledger.observe(t, r);
    for (let i of r) {
      let a = this.ledger.nameOf(i);
      a !== null && this.announced.get(i) !== a && (this.announced.set(i, a), this.debug({
        kind: "source.bound",
        source: i
      }));
    }
  }
  speakerOf(e, t) {
    return e !== null ? this.ledger.nameOf(e) : t || this.mixedLanes ? this.watch.speaker() : null;
  }
  activeSources(e) {
    let t = this.clock.now(),
      r = new Set();
    for (let i of w.sinks(e)) i.source === null || i.heardAtMs === null || t - i.heardAtMs > p.sourceRecentMs || i.level !== null && i.level < n.speakingLevel || r.add(i.source);
    return [...r];
  }
};
var J = class n {
  constructor(e) {
    this.deps = e;
    let t = e.clock ?? L;
    this.speakers = new z(t, e.sink.debug), this.playback = new R({
      createAudioContext: e.createAudioContext,
      audio: e.sink.audio,
      debug: e.sink.debug,
      speakerOf: (r, i) => this.speakers.speakerOf(r, i)
    }), this.autoJoin = new V(e.displayName, e.sink.debug), this.loops = [H({
      name: "meeting-page-tap",
      intervalMs: p.pagePollMs,
      clock: t
    }).start(async () => this.pollPage()), H({
      name: "meeting-speaker-watch",
      intervalMs: n.speakerPollMs,
      clock: t
    }).start(async () => this.pollSpeakers()), H({
      name: "meeting-source-stamp",
      intervalMs: p.sourcePollMs,
      clock: t
    }).start(async () => this.signalPage(p.stampEvent))];
  }
  deps;
  static speakerPollMs = 250;
  static isSameProbe(e, t) {
    return e.pageLanguage === t.pageLanguage && e.leaveControl === t.leaveControl && e.joinControl === t.joinControl && e.nameField === t.nameField && e.playback === t.playback && e.participantEntries === t.participantEntries && e.otherParticipants === t.otherParticipants;
  }
  static isSameStatus(e, t) {
    return e.kind !== t.kind ? !1 : "detail" in e && "detail" in t ? e.detail === t.detail : !0;
  }
  playback;
  speakers;
  autoJoin;
  loops;
  lastStatus = null;
  lastLandmark = null;
  lastProbe = null;
  static install(e) {
    return new n(e);
  }
  dispose = () => {
    for (let e of [...this.loops].reverse()) e.dispose();
  };
  reader() {
    let {
      document: e,
      displayName: t
    } = this.deps;
    if (e.body === null) return null;
    let r = U.forHost(e.location?.hostname ?? "");
    return r === null ? null : new _(e, r, t);
  }
  pollSpeakers() {
    let e = this.reader();
    e !== null && this.speakers.observe(e);
  }
  signalPage(e) {
    this.deps.document.dispatchEvent(new Event(e));
  }
  pollPage() {
    this.signalPage(p.wakeEvent);
    let e = this.reader();
    if (e === null) return;
    let {
      document: t,
      site: r
    } = e;
    this.playback.scan(t);
    let i = t.body.innerText,
      a = r.landmark(i);
    a !== null && a !== this.lastLandmark && (this.lastLandmark = a, this.deps.sink.debug({
      kind: "landmark",
      landmark: a
    }));
    let o = e.probe(this.playback.hasPlayback());
    (this.lastProbe === null || !n.isSameProbe(this.lastProbe, o)) && (this.lastProbe = o, this.deps.sink.debug({
      kind: "signals",
      probe: o
    }));
    let l = r.classify({
      bodyText: i,
      hasLeaveCallButton: o.leaveControl,
      hasJoinButton: o.joinControl,
      hasAudioPlayback: o.playback,
      otherParticipants: o.otherParticipants
    });
    l.kind === "prejoin" && this.autoJoin.step(e), (l.kind === "in-call" || l.kind === "alone") && e.rosterOpener()?.click(), (this.lastStatus === null || !n.isSameStatus(this.lastStatus, l)) && (this.lastStatus = l, this.deps.sink.page(l));
  }
};
