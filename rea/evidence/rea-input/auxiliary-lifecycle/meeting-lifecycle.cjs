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
