/** Extracted shipped domain validators. Pure predicates/transforms; typed primitives are injected by declarations.ts. */
module.exports = function createDomainDeclarations({B,s,P,y,p,c,W,I,R,m,se,De,ln,r,_e,f,te,Bt,ae,K}) {
function l(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
function Ee(e) {
  if (e === null) return !0;
  switch (typeof e) {
    case "string":
    case "boolean":
      return !0;
    case "number":
      return Number.isFinite(e);
    case "object":
      return Array.isArray(e)
        ? e.every(Ee)
        : l(e) && Object.values(e).every(Ee);
    default:
      return !1;
  }
}
const ls = "data:image/svg+xml";
const cs = 64 * 1024;
function pn(e) {
  return typeof e == "string" && e.startsWith(ls) && e.length <= cs;
}
const mn = 64;
function us(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    "agentId" in e &&
    "name" in e &&
    "markSvgDataUrl" in e &&
    typeof e.agentId == "string" &&
    e.agentId.trim().length > 0 &&
    typeof e.name == "string" &&
    e.name.trim().length > 0 &&
    pn(e.markSvgDataUrl)
  );
}
function Pt(e) {
  return Array.isArray(e) && e.length <= mn && e.every(us);
}
const Sn = 640;
function wt(e) {
  return typeof e == "number" && Number.isInteger(e) && e >= 0 && e <= Sn;
}
const ve = 16384;
function Dt(e) {
  return typeof e == "number" && Number.isInteger(e) && Math.abs(e) <= ve;
}
function Ae(e, n) {
  let o = Object.getOwnPropertyDescriptor(e, n);
  return o !== void 0 && "value" in o ? o.value : void 0;
}
function gn(e) {
  return typeof e == "number" && Number.isInteger(e) && e >= 0;
}
function Mt(e) {
  if (typeof e != "object" || e === null) return null;
  try {
    let n = Object.getPrototypeOf(e);
    if (n !== Object.prototype && n !== null) return null;
    let o = Ae(e, "usedBytes"),
      i = Ae(e, "limitBytes"),
      d = Ae(e, "loadedAgents"),
      E = Ae(e, "loadedTranscriptEntries"),
      O = Ae(e, "idleMinutesLast15m");
    return typeof o != "number" ||
      !Number.isFinite(o) ||
      o < 0 ||
      typeof i != "number" ||
      !Number.isFinite(i) ||
      i <= 0
      ? null
      : {
          ...{ usedBytes: o === 0 ? 0 : o, limitBytes: i },
          ...(gn(d) ? { loadedAgents: d } : {}),
          ...(gn(E) ? { loadedTranscriptEntries: E } : {}),
          ...(gn(O) ? { idleMinutesLast15m: O } : {}),
        };
  } catch {
    return null;
  }
}
function vt(e, n) {
  return typeof n == "string" && Object.hasOwn(e, n);
}
const g = f("non-empty string", (e) => typeof e == "string" && e.length > 0);
const u = f("non-blank string", (e) => typeof e == "string" && e.trim().length > 0);
const Ue = te("non-empty string", (e) => {
    if (typeof e != "string") return { success: !1 };
    let n = e.trim();
    return n.length > 0 ? { success: !0, data: n } : { success: !1 };
  });
function En(e, n) {
  return f(e, (o) => n.some((i) => i === o));
}
function A(e, n) {
  return te("telemetry report", (o) => {
    if (!l(o) || !e(o)) return { success: !1 };
    let i = typeof n == "function" ? n(o) : n,
      d = {};
    for (let E of Object.keys(i))
      vt(i, E) && Object.hasOwn(o, E) && (d[E] = o[E]);
    return e(d) ? { success: !0, data: d } : { success: !1 };
  });
}
const Vt = te("heap metrics report", (e) => {
  let n = Mt(e);
  return n === null ? { success: !1 } : { success: !0, data: n };
});
const ms = f("svg data url", pn);
const Ss = f(`at most ${mn} mount targets`, Pt);
const ys = f(`integer from 0 to ${Sn}`, wt);
const Gt = f(`integer from -${ve} to ${ve}`, Dt);
const Ft = _e("desktop-mount", {
    methods: {
      mount: r().args({ agentId: u, name: u, markSvgDataUrl: ms }),
      unmount: r().noArgs,
      offerChoices: r().args({ choices: Ss }),
      read: r().noArgs,
      readChoices: r().noArgs,
      submitPrompt: r().args({ prompt: Ue }),
      switchTo: r().args({ agentId: u }),
      reachForMenu: r().args({ heightPx: ys }),
      movePanel: r().args({ dx: Gt, dy: Gt }),
      endPanelMove: r().noArgs,
    },
    events: ae(),
    failureCodes: ae(),
  });
const Ht =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-57][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
function hn(e) {
  let n = e.trim().toLowerCase();
  return Ht.test(n) ? { ok: !0, value: n } : { ok: !1 };
}
const Wt = ["image/png", "image/jpeg", "image/webp"];
function Rn(e) {
  return Wt.some((n) => n === e);
}
function Yt(e) {
  return Rn(e.contentType)
    ? e.byteLength <= 0
      ? "empty"
      : e.byteLength > 2097152
        ? "too-large"
        : null
    : "unsupported-type";
}
const As = /^\d{6}$/;
function $t(e) {
  return typeof e == "string" && As.test(e);
}
const hs = 2147483647;
function Xt(e) {
  return l(e)
    ? e.mode === "none" || e.mode === "unlimited"
      ? !0
      : e.mode === "fixed" &&
        typeof e.limitDollars == "number" &&
        Number.isInteger(e.limitDollars) &&
        e.limitDollars > 0 &&
        e.limitDollars < hs
    : !1;
}
const zt = ["github", "gitlab", "bitbucket", "azure-devops"];
const Jt = /^[A-Za-z0-9_-]{21}$/;
const Ts = /^[a-z0-9][a-z0-9-]{2,63}$/;
function Zt(e) {
  return Ts.test(e);
}
function he(e) {
  if (e.length === 0) return !1;
  try {
    return (new Intl.DateTimeFormat("en-US", { timeZone: e }), !0);
  } catch {
    return !1;
  }
}
const Cs = /^(?:[01]\d|2[0-3]):[0-5]\d$/;
function Qt(e) {
  return e == null || typeof e != "object" || Array.isArray(e)
    ? !1
    : "localTime" in e &&
        typeof e.localTime == "string" &&
        Cs.test(e.localTime) &&
        "timeZone" in e &&
        typeof e.timeZone == "string" &&
        he(e.timeZone) &&
        "recurring" in e &&
        typeof e.recurring == "boolean";
}
function er(e) {
  return (
    e != null &&
    typeof e == "object" &&
    !Array.isArray(e) &&
    "dismissTerminalOutcome" in e &&
    typeof e.dismissTerminalOutcome == "boolean"
  );
}
const ks = ["system", "light", "dark"];
function nr(e) {
  return typeof e == "string" && ks.includes(e);
}
const Is = [
  "ping-1-open-blip",
  "ping-2-tick",
  "ping-3-double-tick",
  "ping-4-chime-a",
  "ping-5-chime-b",
];
function Os(e) {
  return typeof e == "string" && Is.some((n) => n === e);
}
function tr(e) {
  return typeof e != "object" ||
    e == null ||
    Array.isArray(e) ||
    !("sound" in e) ||
    !Os(e.sound)
    ? !1
    : "playSound" in e && typeof e.playSound == "boolean";
}
const Ns =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const xs = "general";
const rr = { kind: "absent" };
const or = { kind: "rejects-the-report" };
function Ge(e, n) {
  if (e == null) return rr;
  if (typeof e != "string") return or;
  let o = e.trim();
  return o.length === 0
    ? rr
    : o.length > n
      ? or
      : { kind: "present", value: o };
}
function Ps(e) {
  if (typeof e != "object" || e == null) return null;
  let n = Ge("callId" in e ? e.callId : void 0, 128);
  if (n.kind !== "present") return null;
  let o = "rating" in e ? e.rating : void 0;
  if (o !== "up" && o !== "down") return null;
  let i = Ge("requestId" in e ? e.requestId : void 0, 128);
  if (i.kind === "rejects-the-report") return null;
  let d = Ge(
    "realtimeConversationId" in e ? e.realtimeConversationId : void 0,
    128,
  );
  return d.kind === "rejects-the-report"
    ? null
    : {
        callId: n.value,
        rating: o,
        ...(i.kind === "present" ? { requestId: i.value } : {}),
        ...(d.kind === "present" ? { realtimeConversationId: d.value } : {}),
      };
}
function ar(e) {
  if (
    typeof e != "object" ||
    e == null ||
    !("message" in e) ||
    typeof e.message != "string"
  )
    return null;
  let n = e.message.trim();
  if (
    n.length === 0 ||
    n.length > 1e4 ||
    !("accountSlot" in e) ||
    typeof e.accountSlot != "string"
  )
    return null;
  let o = e.accountSlot.trim();
  if (
    o.length === 0 ||
    o.length > 512 ||
    !("submissionId" in e) ||
    typeof e.submissionId != "string" ||
    !Ns.test(e.submissionId)
  )
    return null;
  let i = e.submissionId,
    d = Ge("conversationId" in e ? e.conversationId : void 0, 512);
  if (d.kind === "rejects-the-report") return null;
  let E = {
      accountSlot: o,
      message: n,
      submissionId: i,
      ...(d.kind === "present" ? { conversationId: d.value } : {}),
    },
    O = ("kind" in e ? e.kind : void 0) ?? xs;
  if (O === "voice-call") {
    let C = Ps("voiceCall" in e ? e.voiceCall : void 0);
    return C === null ? null : { ...E, kind: "voice-call", voiceCall: C };
  }
  if (O !== "general") return null;
  let b;
  if (
    "wantsResponse" in e &&
    e.wantsResponse !== void 0 &&
    e.wantsResponse !== null
  ) {
    if (typeof e.wantsResponse != "boolean") return null;
    b = e.wantsResponse;
  }
  return {
    ...E,
    kind: "general",
    ...(b === void 0 ? {} : { wantsResponse: b }),
  };
}
const ws = [
    { tag: "en", endonym: "English", englishName: "English", direction: "ltr" },
    {
      tag: "hi",
      endonym: "\u0939\u093F\u0928\u094D\u0926\u0940",
      englishName: "Hindi",
      direction: "ltr",
    },
    {
      tag: "zh-CN",
      endonym: "\u7B80\u4F53\u4E2D\u6587",
      englishName: "Simplified Chinese",
      direction: "ltr",
    },
    {
      tag: "zh-TW",
      endonym: "\u7E41\u9AD4\u4E2D\u6587",
      englishName: "Traditional Chinese",
      direction: "ltr",
    },
    { tag: "pl", endonym: "Polski", englishName: "Polish", direction: "ltr" },
    {
      tag: "es",
      endonym: "Espa\xF1ol",
      englishName: "Spanish",
      direction: "ltr",
    },
    {
      tag: "pt",
      endonym: "Portugu\xEAs",
      englishName: "Portuguese",
      direction: "ltr",
    },
    {
      tag: "ja",
      endonym: "\u65E5\u672C\u8A9E",
      englishName: "Japanese",
      direction: "ltr",
    },
    {
      tag: "fr",
      endonym: "Fran\xE7ais",
      englishName: "French",
      direction: "ltr",
    },
    {
      tag: "ko",
      endonym: "\uD55C\uAD6D\uC5B4",
      englishName: "Korean",
      direction: "ltr",
    },
    { tag: "de", endonym: "Deutsch", englishName: "German", direction: "ltr" },
    {
      tag: "ru",
      endonym: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439",
      englishName: "Russian",
      direction: "ltr",
    },
    {
      tag: "tr",
      endonym: "T\xFCrk\xE7e",
      englishName: "Turkish",
      direction: "ltr",
    },
    {
      tag: "ar",
      endonym: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629",
      englishName: "Arabic",
      direction: "rtl",
    },
    {
      tag: "it",
      endonym: "Italiano",
      englishName: "Italian",
      direction: "ltr",
    },
    { tag: "sv", endonym: "Svenska", englishName: "Swedish", direction: "ltr" },
    {
      tag: "uk",
      endonym: "\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430",
      englishName: "Ukrainian",
      direction: "ltr",
    },
    {
      tag: "nl",
      endonym: "Nederlands",
      englishName: "Dutch",
      direction: "ltr",
    },
    {
      tag: "el",
      endonym: "\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC",
      englishName: "Greek",
      direction: "ltr",
    },
    {
      tag: "af",
      endonym: "Afrikaans",
      englishName: "Afrikaans",
      direction: "ltr",
    },
    {
      tag: "he",
      endonym: "\u05E2\u05D1\u05E8\u05D9\u05EA",
      englishName: "Hebrew",
      direction: "rtl",
    },
    {
      tag: "vi",
      endonym: "Ti\u1EBFng Vi\u1EC7t",
      englishName: "Vietnamese",
      direction: "ltr",
    },
    {
      tag: "id",
      endonym: "Bahasa Indonesia",
      englishName: "Indonesian",
      direction: "ltr",
    },
    {
      tag: "ur",
      endonym: "\u0627\u0631\u062F\u0648",
      englishName: "Urdu",
      direction: "rtl",
    },
    {
      tag: "th",
      endonym: "\u0E44\u0E17\u0E22",
      englishName: "Thai",
      direction: "ltr",
    },
    {
      tag: "bn",
      endonym: "\u09AC\u09BE\u0982\u09B2\u09BE",
      englishName: "Bengali",
      direction: "ltr",
    },
    {
      tag: "cs",
      endonym: "\u010Ce\u0161tina",
      englishName: "Czech",
      direction: "ltr",
    },
    {
      tag: "hu",
      endonym: "Magyar",
      englishName: "Hungarian",
      direction: "ltr",
    },
    {
      tag: "nb",
      endonym: "Norsk bokm\xE5l",
      englishName: "Norwegian Bokm\xE5l",
      direction: "ltr",
    },
    { tag: "da", endonym: "Dansk", englishName: "Danish", direction: "ltr" },
    { tag: "fi", endonym: "Suomi", englishName: "Finnish", direction: "ltr" },
  ];
const Ds = ws.map((e) => e.tag);
const Ls = ["system", ...Ds];
function ir(e) {
  return typeof e == "string" && Ls.includes(e);
}
function Ms(e) {
  if (typeof e != "string") return null;
  let n = /^tile-([1-9]\d{1,3})$/.exec(e);
  if (n == null) return null;
  let o = Number(n[1]);
  return o >= 16 && o <= 1024 ? o : null;
}
function vs(e) {
  return Ms(e) != null;
}
function sr(e) {
  return e === "preview" || e === "original" || vs(e);
}
const Tn = 1500;
function dr(e) {
  let n = e.trim();
  return n.length === 0 ? "empty" : n.length > Tn ? "too-long" : "ok";
}
function $(e, n) {
  return n === "absent" || n === "unrecognized"
    ? n
    : (e.find((o) => o === n) ?? "unrecognized");
}
const xn = [
    "not_configured",
    "unsupported_model",
    "rejected",
    "unreachable",
    "malformed_response",
  ];
const Pn = ["429", "401", "403", "503"];
const mr = [
    "invalid_request_error",
    "server_error",
    "authentication_error",
    "rate_limit_error",
  ];
const Sr = [
    "internal_error",
    "async_not_enabled",
    "invalid_request_error",
    "missing_tool_call_results",
  ];
const yr = ["async_update_add", "response_cancel"];
const gr = ["1008", "1006", "1011", "1000"];
const fr = ["connecting", "live"];
const _r = [
    "sent",
    "sent_after_wait",
    "carried_by_live_response",
    "folded",
    "dropped_line_dead",
    "dropped_caller_holds",
    "dropped_caller_barged_in",
    "dropped_answered_live",
    "dropped_superseded",
    "dropped_call_closed",
  ];
const Er = ["outcome", "greeting", "steer", "bare"];
function ce(e) {
  return typeof e == "number" && Number.isSafeInteger(e) && e >= 0;
}
function $s(e) {
  return $(fr, e);
}
function qs(e) {
  return e === !0 ? !0 : e === !1 ? !1 : "absent";
}
function j(e, n) {
  return n in e ? e[n] : void 0;
}
function Xs(e) {
  return (
    j(e, "fault_class") !== void 0 ||
    j(e, "fault_code") !== void 0 ||
    j(e, "fault_about") !== void 0
  );
}
function $e(e, n) {
  let o = j(e, "fault_stage");
  return !n && o === void 0 ? {} : { fault_stage: $s(o) };
}
function zs(e) {
  if (
    typeof e != "object" ||
    e === null ||
    Array.isArray(e) ||
    !("call_id" in e) ||
    typeof e.call_id != "string" ||
    e.call_id.length !== 41 ||
    !/^call-[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
      e.call_id,
    ) ||
    !("telemetry_version" in e) ||
    e.telemetry_version !== "1" ||
    !("phase" in e)
  )
    return;
  let n = { call_id: e.call_id, telemetry_version: e.telemetry_version };
  switch (e.phase) {
    case "started":
      return { ...n, phase: e.phase };
    case "connected":
      return !("elapsed_ms" in e) || !ce(e.elapsed_ms)
        ? void 0
        : { ...n, phase: e.phase, elapsed_ms: e.elapsed_ms };
    case "usage":
      return !("active_ms" in e) ||
        !ce(e.active_ms) ||
        !("sequence" in e) ||
        !ce(e.sequence)
        ? void 0
        : {
            ...n,
            phase: e.phase,
            active_ms: e.active_ms,
            sequence: e.sequence,
          };
    case "first_audio":
      return !("trigger" in e) ||
        (e.trigger !== "call_start" && e.trigger !== "user_speech") ||
        !("ttfa_ms" in e) ||
        !ce(e.ttfa_ms)
        ? void 0
        : { ...n, phase: e.phase, trigger: e.trigger, ttfa_ms: e.ttfa_ms };
    case "ui_opened":
      return !("surface" in e) ||
        (e.surface !== "full_menu" && e.surface !== "transcript")
        ? void 0
        : { ...n, phase: e.phase, surface: e.surface };
    case "ended":
      return !("outcome" in e) ||
        (e.outcome !== "hung_up" &&
          e.outcome !== "disconnected" &&
          e.outcome !== "failed" &&
          e.outcome !== "reset") ||
        !("connected" in e) ||
        typeof e.connected != "boolean" ||
        !("duration_ms" in e) ||
        !ce(e.duration_ms) ||
        !("elapsed_ms" in e) ||
        !ce(e.elapsed_ms) ||
        e.duration_ms > e.elapsed_ms ||
        (!e.connected && e.duration_ms !== 0)
        ? void 0
        : {
            ...n,
            phase: e.phase,
            outcome: e.outcome,
            connected: e.connected,
            duration_ms: e.duration_ms,
            elapsed_ms: e.elapsed_ms,
          };
    case "fault": {
      if (!("fault_kind" in e)) return;
      if (e.fault_kind === "tool" || e.fault_kind === "relay")
        return { ...n, phase: e.phase, fault_kind: e.fault_kind, ...$e(e, !1) };
      if (e.fault_kind === "mint")
        return {
          ...n,
          phase: e.phase,
          fault_kind: "mint",
          fault_reason: $(xn, j(e, "fault_reason")),
          fault_http: $(Pn, j(e, "fault_http")),
          ...$e(e, !0),
        };
      if (e.fault_kind === "socket")
        return {
          ...n,
          phase: e.phase,
          fault_kind: "socket",
          fault_close: $(gr, j(e, "fault_close")),
          fault_clean: qs(j(e, "fault_clean")),
          ...$e(e, !0),
        };
      if (e.fault_kind !== "protocol") return;
      let o = { ...n, phase: e.phase, fault_kind: e.fault_kind };
      return Xs(e)
        ? {
            ...o,
            fault_class: $(mr, j(e, "fault_class")),
            fault_code: $(Sr, j(e, "fault_code")),
            fault_about: $(yr, j(e, "fault_about")),
            ...$e(e, !1),
          }
        : o;
    }
    default:
      return;
  }
}
function Ar(e) {
  let n = zs(e);
  if (
    n === void 0 ||
    typeof e != "object" ||
    e === null ||
    (n.phase === "fault" &&
      n.fault_kind === "protocol" &&
      !("fault_class" in n))
  )
    return !1;
  let o = { ...e };
  return (
    Object.keys(o).length === Object.keys(n).length &&
    Object.entries(n).every(([i, d]) => Object.hasOwn(o, i) && o[i] === d)
  );
}
const Js = [
    "unspecified",
    "none",
    "teamPrivacyMode",
    "teamSetupRequired",
    "teamAccessRequired",
    "notOffered",
    "freeTrialAvailable",
    "paywallIndividual",
    "paywallTeamMember",
    "paywallTeamAdmin",
  ];
const Qs = new Set(Js);
function hr(e) {
  return typeof e == "string" && Qs.has(e);
}
const wn = [
  "message",
  "tool-call",
  "send-message",
  "user-attachment",
  "notice",
  "event",
  "feedback",
  "voice-call",
  "mcp-app",
];
const Rr = ["ready", "superseded", "failed"];
const Tr = ["entered", "retry", "recovered", "waking"];
const br = ["started", "recovered", "exhausted", "refused"];
const Cr = ["waking", "first_load_retry"];
const kr = ["retry", "recover", "reset", "relaunch"];
const Ir = ["update", "reset", "recover", "reconnecting"];
const Or = ["taking-longer", "unreachable"];
const Nr = ["shown", "keep_waiting", "retry"];
const xr = ["roster", "transcript"];
const Pr = ["covered", "superseded", "abandoned"];
const wr = ["dispatched", "retired", "parked", "failed"];
const Dr = ["queued", "prepared", "dispatching", "accepted-awaiting-echo"];
const Lr = ["install", "delta", "older-page"];
const Mr = wn;
const vr = ["window-installed", "seed-in-flight", "server-tail"];
const Ur = ["shadow-compare", "store-first", "server-tail"];
const Vr = ["entered", "recovered"];
const Gr = [
    "wrong_account_suspected",
    "seat_revoked",
    "plan_expired",
    "no_plan",
    "unknown",
  ];
const Fr = ["setup", "recreate"];
const Hr = ["ready", "failed", "connectivity", "abandoned"];
const Kr = [
    "cold_create",
    "first_connect",
    "manual_update",
    "manual_reset",
    "auto_update",
    "remote_reset",
    "reconnect",
  ];
const jr = ["begin", "heartbeat", "end", "stage_transition"];
const Wr = ["foreground", "background"];
const Yr = ["acked", "failed", "timeout", "queued_offline"];
const $r = ["landed", "timeout"];
const qr = ["preview", "interactive"];
const Xr = [
    "navigate",
    "dom_ready",
    "load_fail",
    "rfb_connect",
    "rfb_disconnect",
    "reconnect",
    "focus",
  ];
const zr = ["vnc", "composer", "pending"];
const Jr = ["preview", "handoff", "teach"];
const Dn = ["success", "cancelled", "error"];
const Zr = ["action_required", "bot_block", "pipeline", "agent"];
const Qr = ["user_form", "none"];
const eo = ["assistant_text", "send_message", "tool_call"];
const no = ["rendered", "timeout", "switched"];
const to = ["turn_ended", "switched", "superseded", "timeout"];
const ro = ["footer_pill", "account_menu", "palette", "settings", "blocker"];
const oo = ["shown", "clicked", "confirmed", "canceled", "refused_superseded"];
const ao = ["check", "progress", "ready", "error", "disabled"];
const io = ["clicked", "opened", "load_failed"];
const so = ["document", "canvas"];
const lo = ["chat_card", "chat_link", "library"];
const co = ["pointer", "focus", "key"];
const uo = ["shown", "dismissed", "get_more_usage"];
const po = [
    "pin",
    "unpin",
    "move_to_section",
    "move_to_new_section",
    "mark_read",
    "mark_unread",
    "rename",
    "copy_link",
    "copy_conversation_id",
    "show_full_conversation",
    "show_async_tasks",
    "hide_from_sidebar",
    "unhide_from_sidebar",
    "delete",
    "replace_main_agent",
  ];
const mo = ["context_menu"];
const So = ["shell", "onboarding", "sign-in"];
const yo = [
    "veto-seen",
    "veto-roster",
    "fresh",
    "fail-open-probes",
    "fail-open-deadline",
  ];
const go = ["seen-probe", "agent-probe", "deadline"];
const fo = ["meet", "computer-demo", "jobs", "role", "tools", "create", "hand-off"];
const _o = ["forward", "back"];
const Eo = ["failed", "recovered"];
const Ao = ["tick-failed", "run-failed"];
const ho = [
    "app",
    "chat_screen",
    "info_pane",
    "transcript_row",
    "mermaid",
    "other",
  ];
const ue = {
    nonceMismatch: "SAND-E0703",
    capabilityUnavailable: "SAND-E0704",
    hostRejected: "SAND-E0705",
    superseded: "SAND-E0706",
    ackExpired: "SAND-E0707",
  };
const ed = [
    "bot-templates.deleted-shares",
    "client-meta.account-slot",
    "cloud-agents.infos",
    "composer-drafts",
    "host-settings.onboarding",
    "roster.agent-avatars",
    "roster.last-roster",
    "selection.last-agent",
    "send-journal",
    "sidebar.last-sections",
    "transcript.replicas",
    "ui-agent-refs",
    "ui-layout",
    "usage-warning.dismissal",
    "other",
  ];
const nd = new Set(ed);
function Ro(e) {
  return typeof e == "string" && nd.has(e);
}
const To = [...wn, "unknown-kind"];
const bo = [
    "connecting_started",
    "mint_ok",
    "mint_failed",
    "socket_open",
    "socket_error",
    "socket_close",
    "session_created",
    "mic_granted",
    "mic_denied",
    "mic_timeout",
    "audible",
    "connecting_stuck",
    "connecting_abandoned",
  ];
const Co = [
    "account-slot",
    "ui-state",
    "voice-settings",
    "cloud-agent-open-target",
    "cloud-agent-infos",
    "sidebar-sections",
    "last-selection",
    "last-roster",
    "transcript-replicas",
    "composer-drafts",
    "send-journal",
    "bot-templates",
  ];
const ko = ["failed", "stuck"];
const Io = ["settled", "cap", "ceiling"];
const Oo = ["ok", "absent", "failed"];
const No = ["hover", "card", "row"];
const xo = [
    "cursor",
    "github",
    "gitlab",
    "azure",
    "slack",
    "notion",
    "public-web",
    "none",
  ];
const Po = ["fresh", "stale", "negative", "none"];
const wo = ["content", "empty", "unavailable", "failed", "closed_before_settle"];
const Do = "box";
const Lo = "temporal";
const qe = [
    "ECONNREFUSED",
    "ECONNRESET",
    "ECONNABORTED",
    "ETIMEDOUT",
    "EPIPE",
    "ENETRESET",
    "ENETDOWN",
    "ENETUNREACH",
    "EHOSTUNREACH",
    "EHOSTDOWN",
    "EAI_AGAIN",
    "ENOTFOUND",
    "EADDRINUSE",
    "EACCES",
    "EPERM",
    "ENOENT",
    "ENOSPC",
    "EDQUOT",
    "EROFS",
    "EBUSY",
    "EMFILE",
    "EIO",
  ];
const Mn = "E_OTHER";
const vo = ["none", "single", "double"];
const Ko = ["private", "team", "public", "unknown"];
const $o = [
    "image",
    "video",
    "audio",
    "pdf",
    "markdown",
    "html",
    "text",
    "json",
    "table",
    "docx",
    "unknown",
  ];
const qo = /^[0-9A-Za-z.+-]{1,64}$/;
function Xo(e) {
  return e === "stable" || e === "nightly" || e === "dogfood";
}
const ld = "tool_serve";
const cd = "relay";
const zo = [ld, cd];
const Jo = ["nudge", "recall", "hangup", "silent", "unknown"];
const Zo = "memo";
const ud = "[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}";
const pd = new RegExp(`^${Zo}-${ud}$`, "i");
const md = Zo.length + 37;
function pe(e) {
  return typeof e == "number" && Number.isSafeInteger(e) && e >= 0;
}
function Sd(e) {
  if (
    typeof e != "object" ||
    e === null ||
    Array.isArray(e) ||
    !("memo_id" in e) ||
    typeof e.memo_id != "string" ||
    e.memo_id.length !== md ||
    !pd.test(e.memo_id) ||
    !("telemetry_version" in e) ||
    e.telemetry_version !== "1" ||
    !("phase" in e)
  )
    return;
  let n = { memo_id: e.memo_id, telemetry_version: e.telemetry_version };
  switch (e.phase) {
    case "offered":
      return { ...n, phase: e.phase };
    case "started":
      return !("attempt" in e) ||
        !pe(e.attempt) ||
        e.attempt < 1 ||
        !("warmth" in e) ||
        (e.warmth !== "cold" && e.warmth !== "warming" && e.warmth !== "ready")
        ? void 0
        : { ...n, phase: e.phase, attempt: e.attempt, warmth: e.warmth };
    case "first_audio":
      return !("ttfa_ms" in e) || !pe(e.ttfa_ms)
        ? void 0
        : { ...n, phase: e.phase, ttfa_ms: e.ttfa_ms };
    case "seek":
      return !("sequence" in e) || !pe(e.sequence) || e.sequence < 1
        ? void 0
        : { ...n, phase: e.phase, sequence: e.sequence };
    case "transcript":
      return !("action" in e) ||
        (e.action !== "expanded" && e.action !== "collapsed")
        ? void 0
        : { ...n, phase: e.phase, action: e.action };
    case "ended":
      return !("outcome" in e) ||
        (e.outcome !== "completed" &&
          e.outcome !== "stopped" &&
          e.outcome !== "preempted" &&
          e.outcome !== "navigated" &&
          e.outcome !== "gate_off" &&
          e.outcome !== "superseded" &&
          e.outcome !== "failed" &&
          e.outcome !== "not_entitled" &&
          e.outcome !== "disposed") ||
        !("heard_audio" in e) ||
        typeof e.heard_audio != "boolean" ||
        !("listened_ms" in e) ||
        !pe(e.listened_ms) ||
        !("audio_ms" in e) ||
        !pe(e.audio_ms) ||
        e.listened_ms > e.audio_ms ||
        !("elapsed_ms" in e) ||
        !pe(e.elapsed_ms)
        ? void 0
        : {
            ...n,
            phase: e.phase,
            outcome: e.outcome,
            heard_audio: e.heard_audio,
            listened_ms: e.listened_ms,
            audio_ms: e.audio_ms,
            elapsed_ms: e.elapsed_ms,
          };
    case "fault":
      return !("fault_kind" in e) ||
        (e.fault_kind !== "synthesis" &&
          e.fault_kind !== "playback" &&
          e.fault_kind !== "prefetch" &&
          e.fault_kind !== "empty_text" &&
          e.fault_kind !== "dictation_active" &&
          e.fault_kind !== "call_active" &&
          e.fault_kind !== "not_entitled")
        ? void 0
        : { ...n, phase: e.phase, fault_kind: e.fault_kind };
    default:
      return;
  }
}
function Qo(e) {
  let n = Sd(e);
  return (
    n !== void 0 &&
    typeof e == "object" &&
    e !== null &&
    Object.keys(e).length === Object.keys(n).length &&
    Object.keys(n).every((o) => Object.hasOwn(e, o))
  );
}
const yd = [
    "engineering",
    "design",
    "marketing",
    "customer-support",
    "product",
    "ops-finance",
    "recruiting-people",
    "sales",
    "productivity",
  ];
const gd = new Set(yd);
function ea(e) {
  return gd.has(e);
}
const Un = [
    "workspace",
    "slack",
    "notion",
    "salesforce",
    "microsoft-365",
    "linkedin",
    "zoom",
    "github",
    "cursor",
    "jira",
    "figma",
    "hubspot",
    "canva",
    "trello",
    "monday",
    "clickup",
    "intercom",
    "zendesk",
    "box",
    "dropbox",
    "docusign",
    "calendly",
    "loom",
    "outreach",
    "salesloft",
    "apollo",
    "clay",
    "zoominfo",
    "nooks",
    "stripe",
    "shopify",
    "quickbooks",
    "netsuite",
    "ramp",
    "workday",
    "rippling",
    "ashby",
    "greenhouse",
    "vercel",
    "tableau",
    "hex",
    "amplitude",
    "mixpanel",
    "snowflake",
    "databricks",
    "mailchimp",
  ];
const fd = new Set(Un);
function na(e) {
  return fd.has(e);
}
const Ed = /^<REDACTED: [A-Za-z ,-]+>$/;
const Ad = /^[A-Za-z0-9._:@-]+$/;
function hd(e, n = 128) {
  if (!(typeof e != "string" || e.length === 0 || e.length > n))
    return Ad.test(e) ? e : void 0;
}
function Rd(e) {
  let n = hd(e);
  if (n !== void 0) return bd(n) === n ? n : void 0;
}
function Xe(e) {
  return Rd(e) !== void 0;
}
const Td = [
  { label: "Google API Key", regex: /AIza[A-Za-z0-9_\\\-]{35}/ },
  { label: "Slack Token", regex: /xox[pbar]\-[A-Za-z0-9]/ },
  {
    label: "GitHub Token",
    regex:
      /(gh[psuro]_[a-zA-Z0-9]{36}|github_pat_[a-zA-Z0-9]{22}_[a-zA-Z0-9]{59})/,
  },
  {
    label: "Generic Secret",
    regex:
      /(key|token|sig|secret|signature|password|passwd|pwd|android:value)[^a-zA-Z0-9]/i,
  },
  {
    label: "CLI Credentials",
    regex:
      /((login|psexec|(certutil|psexec)\.exe).{1,50}(\s-u(ser(name)?)?\s+.{3,100})?\s-(admin|user|vm|root)?p(ass(word)?)?\s+["']?[^$\-\/\s]|(^|[\s\r\n\\])net(\.exe)?.{1,5}(user\s+|share\s+\/user:| user -? secrets ? set) \s + [^ $\s \/])/,
  },
  {
    label: "Microsoft Entra ID",
    regex: /eyJ(?:0eXAiOiJKV1Qi|hbGci|[a-zA-Z0-9\-_]+\.[a-zA-Z0-9\-_]+\.)/,
  },
  { label: "Email", regex: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/ },
];
function bd(e) {
  if (!e || Ed.test(e)) return e;
  for (let { label: n, regex: o } of Td)
    if (o.test(e)) return `<REDACTED: ${n}>`;
  return e;
}
const ta = ["chat", "agent-exchange"];
const ra = ["install", "cards", "boundary", "edge", "prepend", "live"];
const ze = [
    "entry:message",
    "entry:send-message",
    "entry:event",
    "entry:notice",
    "entry:feedback",
    "entry:voice-call",
    "entry:user-attachment",
    "entry:spend-initiation",
    "entry:other",
    "timestamp",
    "unread-divider",
    "attachment-group",
    "agent-comm-group",
    "routine-event-group",
    "cloud-agent-group",
    "other",
  ];
const oa = [
  "Error",
  "TypeError",
  "RangeError",
  "ReferenceError",
  "SyntaxError",
  "EvalError",
  "URIError",
  "AggregateError",
  "SandInvariantViolation",
  "other",
];
function S(e) {
  return typeof e == "number" && Number.isFinite(e) && e >= 0;
}
function w(e) {
  return e === void 0 || S(e);
}
function _(e) {
  return e === void 0 || typeof e == "string";
}
function q(e) {
  return e === void 0 || typeof e == "boolean";
}
function Se(e) {
  return typeof e == "number" && Number.isInteger(e) && e >= 1;
}
function ee(e) {
  return typeof e == "number" && Number.isInteger(e) && e >= 0;
}
function aa(e, n) {
  return typeof e == "string" && e.length > 0 && e.length <= n;
}
const Cd = new Set(Rr);
const la = {
    durationMs: !0,
    openRpcMs: !0,
    queueMs: !0,
    renderMs: !0,
    cold: !0,
    stale: !0,
    boxState: !0,
    outcome: !0,
  };
function ca(e) {
  return l(e)
    ? S(e.durationMs) &&
        w(e.openRpcMs) &&
        w(e.queueMs) &&
        w(e.renderMs) &&
        typeof e.cold == "boolean" &&
        q(e.stale) &&
        typeof e.boxState == "string" &&
        typeof e.outcome == "string" &&
        Cd.has(e.outcome)
    : !1;
}
const kd = new Set(Vr);
const Id = new Set(Gr);
const ua = { edge: !0, cause: !0, accessReason: !0, msBlocked: !0 };
function pa(e) {
  return l(e)
    ? typeof e.edge == "string" &&
        kd.has(e.edge) &&
        typeof e.cause == "string" &&
        Id.has(e.cause) &&
        hr(e.accessReason) &&
        w(e.msBlocked)
    : !1;
}
const Od = new Set(Tr);
const Nd = new Set(br);
const xd = new Set(Cr);
const ma = {
    phase: !0,
    isManual: !0,
    errorClass: !0,
    msSinceLastReachedMs: !0,
    outcome: !0,
    reason: !0,
    durationMs: !0,
    heldMs: !0,
  };
function Sa(e) {
  return l(e)
    ? typeof e.phase == "string" &&
        Od.has(e.phase) &&
        typeof e.isManual == "boolean" &&
        _(e.errorClass) &&
        w(e.msSinceLastReachedMs) &&
        (e.outcome === void 0 ||
          (typeof e.outcome == "string" && Nd.has(e.outcome))) &&
        (e.reason === void 0 ||
          (typeof e.reason == "string" && xd.has(e.reason))) &&
        w(e.durationMs) &&
        w(e.heldMs)
    : !1;
}
const Pd = new Set(kr);
const wd = /^[a-z0-9_]{1,64}$/i;
const ya = { action: !0, failureClass: !0, consecutiveIdentical: !0 };
function ga(e) {
  return l(e)
    ? typeof e.action == "string" &&
        Pd.has(e.action) &&
        typeof e.failureClass == "string" &&
        wd.test(e.failureClass) &&
        Se(e.consecutiveIdentical)
    : !1;
}
const Dd = new Set(Ir);
const Ld = new Set(Or);
const Md = new Set(Nr);
const vd = {
    escalation: {
      kind: !0,
      action: !0,
      escalation: !0,
      rebuildKind: !0,
      elapsedMs: !0,
    },
    pending_stall: {
      kind: !0,
      rebuildKind: !0,
      hasAck: !0,
      streamAttached: !0,
      elapsedMs: !0,
    },
  };
const fa = (e) => vd[e.kind];
function _a(e) {
  return !l(e) ||
    typeof e.rebuildKind != "string" ||
    !Dd.has(e.rebuildKind) ||
    !S(e.elapsedMs)
    ? !1
    : e.kind === "escalation"
      ? typeof e.action == "string" &&
        Md.has(e.action) &&
        typeof e.escalation == "string" &&
        Ld.has(e.escalation)
      : e.kind === "pending_stall"
        ? typeof e.hasAck == "boolean" && typeof e.streamAttached == "boolean"
        : !1;
}
const Ud = new Set(xr);
const Bd = new Set(Pr);
const Vd = new Set(wr);
const Gd = new Set(Dr);
const Fd = new Set(Ur);
const Hd = new Set(vr);
const Kd = new Set(Lr);
const jd = new Set([Do, Lo]);
const Wd = new Set(Mr);
function Yd(e) {
  return l(e)
    ? S(e.gatewayEntries) &&
        S(e.storeEntries) &&
        S(e.matched) &&
        S(e.mismatched) &&
        S(e.missing) &&
        S(e.extra) &&
        S(e.staleTail) &&
        typeof e.readReason == "string" &&
        Fd.has(e.readReason) &&
        typeof e.painted == "boolean"
    : !1;
}
const $d = {
    replica_resync: {
      kind: !0,
      replica: !0,
      outcome: !0,
      attempts: !0,
      durationMs: !0,
      bufferOverflowed: !0,
      epochChanged: !0,
    },
    send_journal_restore: {
      kind: !0,
      outcome: !0,
      phase: !0,
      ageMs: !0,
      recordCount: !0,
    },
    transcript_store_parity: {
      kind: !0,
      agentId: !0,
      readReason: !0,
      painted: !0,
      gatewayEntries: !0,
      storeEntries: !0,
      matched: !0,
      mismatched: !0,
      missing: !0,
      extra: !0,
      staleTail: !0,
    },
    transcript_store_first_skip: { kind: !0, agentId: !0, skipReason: !0 },
    transcript_window_rows_hidden: {
      kind: !0,
      agentId: !0,
      reason: !0,
      harness: !0,
      rowKind: !0,
      hiddenRows: !0,
      twinIds: !0,
    },
  };
const Ea = (e) => $d[e.kind];
function Aa(e) {
  return l(e)
    ? e.kind === "replica_resync"
      ? typeof e.replica == "string" &&
        Ud.has(e.replica) &&
        typeof e.outcome == "string" &&
        Bd.has(e.outcome) &&
        S(e.attempts) &&
        S(e.durationMs) &&
        typeof e.bufferOverflowed == "boolean" &&
        typeof e.epochChanged == "boolean"
      : e.kind === "send_journal_restore"
        ? typeof e.outcome == "string" &&
          Vd.has(e.outcome) &&
          typeof e.phase == "string" &&
          Gd.has(e.phase) &&
          S(e.ageMs) &&
          S(e.recordCount)
        : e.kind === "transcript_store_parity"
          ? typeof e.agentId == "string" && e.agentId.length > 0 && Yd(e)
          : e.kind === "transcript_store_first_skip"
            ? typeof e.agentId == "string" &&
              e.agentId.length > 0 &&
              typeof e.skipReason == "string" &&
              Hd.has(e.skipReason)
            : e.kind === "transcript_window_rows_hidden"
              ? typeof e.agentId == "string" &&
                e.agentId.length > 0 &&
                typeof e.reason == "string" &&
                Kd.has(e.reason) &&
                typeof e.harness == "string" &&
                jd.has(e.harness) &&
                typeof e.rowKind == "string" &&
                Wd.has(e.rowKind) &&
                S(e.hiddenRows) &&
                S(e.twinIds)
              : !1
    : !1;
}
const qd = new Set(Fr);
const Xd = new Set(jr);
const zd = new Set(Kr);
const Jd = new Set(Hr);
const Zd = new Set(Wr);
function ke(e, n) {
  return e === void 0 || (typeof e == "string" && n.has(e));
}
const ha = {
  event: !0,
  phase: !0,
  trigger: !0,
  outcome: !0,
  operationId: !0,
  kind: !0,
  surface: !0,
  stage: !0,
  migrationPhase: !0,
  fromStage: !0,
  stageElapsedMs: !0,
};
function Ra(e) {
  return l(e)
    ? typeof e.event == "string" &&
        qd.has(e.event) &&
        typeof e.phase == "string" &&
        Xd.has(e.phase) &&
        ke(e.trigger, zd) &&
        ke(e.outcome, Jd) &&
        _(e.operationId) &&
        _(e.kind) &&
        ke(e.surface, Zd) &&
        _(e.stage) &&
        _(e.migrationPhase) &&
        _(e.fromStage) &&
        w(e.stageElapsedMs)
    : !1;
}
const Ta = {
  durationMs: !0,
  commitMs: !0,
  attachmentCount: !0,
  isFork: !0,
  traceId: !0,
  spanId: !0,
  conversationId: !0,
};
function ba(e) {
  return l(e)
    ? S(e.durationMs) &&
        w(e.commitMs) &&
        S(e.attachmentCount) &&
        typeof e.isFork == "boolean" &&
        _(e.traceId) &&
        _(e.spanId) &&
        _(e.conversationId)
    : !1;
}
const Qd = new Set(Yr);
const Ca = {
    ackMs: !0,
    outcome: !0,
    enterEpochMs: !0,
    traceparent: !0,
    traceId: !0,
    spanId: !0,
    clientNonce: !0,
    conversationId: !0,
    isFork: !0,
    attachmentCount: !0,
    commitOffsetMs: !0,
    commitMs: !0,
    clientOnlineAtTimeout: !0,
    didReachDeadline: !0,
  };
function ka(e) {
  return l(e)
    ? S(e.ackMs) &&
        typeof e.outcome == "string" &&
        Qd.has(e.outcome) &&
        S(e.enterEpochMs) &&
        _(e.traceparent) &&
        _(e.traceId) &&
        _(e.spanId) &&
        _(e.clientNonce) &&
        _(e.conversationId) &&
        typeof e.isFork == "boolean" &&
        S(e.attachmentCount) &&
        w(e.commitOffsetMs) &&
        w(e.commitMs) &&
        q(e.clientOnlineAtTimeout) &&
        q(e.didReachDeadline)
    : !1;
}
const el = /^[0-9A-Za-z._-]{1,64}$/;
function Je(e) {
  return e === void 0 || (typeof e == "string" && el.test(e));
}
const Ia = {
  clientNonce: !0,
  conversationId: !0,
  enterEpochMs: !0,
  isFork: !0,
  attachmentCount: !0,
  hasMessageText: !0,
  traceId: !0,
  spanId: !0,
};
function Oa(e) {
  return l(e)
    ? typeof e.clientNonce == "string" &&
        e.clientNonce.length > 0 &&
        typeof e.conversationId == "string" &&
        S(e.enterEpochMs) &&
        typeof e.isFork == "boolean" &&
        S(e.attachmentCount) &&
        typeof e.hasMessageText == "boolean" &&
        _(e.traceId) &&
        _(e.spanId)
    : !1;
}
const nl = new Set(Dn);
const tl = new Set(Zr);
const rl = new Set(Qr);
const Na = {
    outcome: !0,
    errorType: !0,
    errorCode: !0,
    registryCode: !0,
    errorDomain: !0,
    errorRetryable: !0,
    siteBlockFamily: !0,
    siteBlockConfidence: !0,
    userAction: !0,
    settleBasis: !0,
    reconnected: !0,
    durationMs: !0,
    clientNonce: !0,
    conversationId: !0,
    isFork: !0,
    traceId: !0,
    spanId: !0,
  };
function xa(e) {
  return l(e)
    ? typeof e.outcome == "string" &&
        nl.has(e.outcome) &&
        (e.errorType === void 0 ||
          (typeof e.errorType == "string" && tl.has(e.errorType))) &&
        Je(e.errorCode) &&
        Je(e.registryCode) &&
        Je(e.errorDomain) &&
        q(e.errorRetryable) &&
        Je(e.siteBlockFamily) &&
        (e.siteBlockConfidence === void 0 ||
          e.siteBlockConfidence === "high" ||
          e.siteBlockConfidence === "low") &&
        typeof e.userAction == "string" &&
        rl.has(e.userAction) &&
        (e.settleBasis === "host" || e.settleBasis === "client") &&
        typeof e.reconnected == "boolean" &&
        S(e.durationMs) &&
        typeof e.clientNonce == "string" &&
        e.clientNonce.length > 0 &&
        typeof e.conversationId == "string" &&
        typeof e.isFork == "boolean" &&
        _(e.traceId) &&
        _(e.spanId)
    : !1;
}
const ol = new Set($r);
const Pa = { ackMs: !0, outcome: !0, conversationId: !0, emoji: !0 };
function wa(e) {
  return l(e)
    ? S(e.ackMs) &&
        typeof e.outcome == "string" &&
        ol.has(e.outcome) &&
        aa(e.conversationId, 256) &&
        aa(e.emoji, 64)
    : !1;
}
const al = new Set(qr);
const il = new Set(Xr);
const sl = new Set(zr);
const Da = {
    surface: !0,
    phase: !0,
    vncHost: !0,
    display: !0,
    durationMs: !0,
    sinceOpenMs: !0,
    failCode: !0,
    clean: !0,
    focusOwner: !0,
    focusLanded: !0,
  };
function La(e) {
  return l(e)
    ? typeof e.surface == "string" &&
        al.has(e.surface) &&
        typeof e.phase == "string" &&
        il.has(e.phase) &&
        _(e.vncHost) &&
        _(e.display) &&
        w(e.durationMs) &&
        w(e.sinceOpenMs) &&
        _(e.failCode) &&
        q(e.clean) &&
        ke(e.focusOwner, sl) &&
        q(e.focusLanded)
    : !1;
}
const dl = new Set(Jr);
const Ma = { trigger: !0, hadVncUrl: !0, monitorFocused: !0 };
function va(e) {
  return l(e)
    ? typeof e.trigger == "string" &&
        dl.has(e.trigger) &&
        typeof e.hadVncUrl == "boolean" &&
        typeof e.monitorFocused == "boolean"
    : !1;
}
const ll = new Set(no);
const cl = new Set(to);
const ul = new Set(eo);
const Ua = {
    ttfrMs: !0,
    outcome: !0,
    chunkType: !0,
    enterEpochMs: !0,
    traceparent: !0,
    traceId: !0,
    spanId: !0,
    clientNonce: !0,
    conversationId: !0,
    isFork: !0,
  };
function Ba(e) {
  return l(e)
    ? S(e.ttfrMs) &&
        typeof e.outcome == "string" &&
        ll.has(e.outcome) &&
        ke(e.chunkType, ul) &&
        S(e.enterEpochMs) &&
        _(e.traceparent) &&
        _(e.traceId) &&
        _(e.spanId) &&
        _(e.clientNonce) &&
        _(e.conversationId) &&
        typeof e.isFork == "boolean"
    : !1;
}
const Va = {
  outcome: !0,
  chunkCount: !0,
  maxGapMs: !0,
  stalledMs: !0,
  stallCount: !0,
  streamMs: !0,
  traceId: !0,
  spanId: !0,
  clientNonce: !0,
  conversationId: !0,
  isFork: !0,
};
function Ga(e) {
  return l(e)
    ? typeof e.outcome == "string" &&
        cl.has(e.outcome) &&
        S(e.chunkCount) &&
        S(e.maxGapMs) &&
        S(e.stalledMs) &&
        S(e.stallCount) &&
        S(e.streamMs) &&
        _(e.traceId) &&
        _(e.spanId) &&
        _(e.clientNonce) &&
        _(e.conversationId) &&
        typeof e.isFork == "boolean"
    : !1;
}
const pl = new Set(ro);
const ml = new Set(oo);
const Sl = new Set(ao);
const Fa = { surface: !0, action: !0, kind: !0, targetVersion: !0 };
function Ha(e) {
  return l(e)
    ? typeof e.surface == "string" &&
        pl.has(e.surface) &&
        typeof e.action == "string" &&
        ml.has(e.action) &&
        typeof e.kind == "string" &&
        Sl.has(e.kind) &&
        (e.targetVersion === void 0 ||
          (typeof e.targetVersion == "string" && qo.test(e.targetVersion)))
    : !1;
}
const yl = new Set(uo);
const gl = new Set(vo);
const Ka = { action: !0, thresholdPercent: !0, policy: !0 };
function ja(e) {
  return l(e)
    ? typeof e.action == "string" &&
        yl.has(e.action) &&
        typeof e.thresholdPercent == "number" &&
        Number.isFinite(e.thresholdPercent) &&
        e.thresholdPercent > 0 &&
        e.thresholdPercent < 100 &&
        typeof e.policy == "string" &&
        gl.has(e.policy)
    : !1;
}
const fl = new Set($o);
const _l = new Set(io);
const Wa = { stage: !0, agentId: !0, bcId: !0, kind: !0 };
function Ya(e) {
  return l(e)
    ? typeof e.stage == "string" &&
        _l.has(e.stage) &&
        Xe(e.agentId) &&
        Xe(e.bcId) &&
        typeof e.kind == "string" &&
        fl.has(e.kind)
    : !1;
}
const El = new Set(so);
const Al = new Set(co);
const Bn = new Set(lo);
const hl = new Set(Ko);
const Rl = {
    opened: {
      action: !0,
      artifactType: !0,
      surface: !0,
      inGroupChat: !0,
      ageMinutes: !0,
    },
    edit_attempted: {
      action: !0,
      artifactType: !0,
      surface: !0,
      inGroupChat: !0,
      canEdit: !0,
      trigger: !0,
    },
    edit_saved: { action: !0, artifactType: !0, surface: !0, inGroupChat: !0 },
    link_copied: { action: !0, artifactType: !0, visibility: !0 },
  };
const $a = (e) => Rl[e.action];
function qa(e) {
  if (!l(e) || typeof e.artifactType != "string" || !El.has(e.artifactType))
    return !1;
  switch (e.action) {
    case "opened":
      return (
        typeof e.surface == "string" &&
        Bn.has(e.surface) &&
        typeof e.inGroupChat == "boolean" &&
        (e.ageMinutes === null ||
          (typeof e.ageMinutes == "number" &&
            Number.isInteger(e.ageMinutes) &&
            e.ageMinutes >= 0))
      );
    case "edit_attempted":
      return (
        e.artifactType === "document" &&
        typeof e.surface == "string" &&
        Bn.has(e.surface) &&
        typeof e.inGroupChat == "boolean" &&
        typeof e.canEdit == "boolean" &&
        typeof e.trigger == "string" &&
        Al.has(e.trigger)
      );
    case "edit_saved":
      return (
        e.artifactType === "document" &&
        typeof e.surface == "string" &&
        Bn.has(e.surface) &&
        typeof e.inGroupChat == "boolean"
      );
    case "link_copied":
      return typeof e.visibility == "string" && hl.has(e.visibility);
    default:
      return !1;
  }
}
const Tl = new Set(po);
const bl = new Set(mo);
const Xa = { action: !0, entrypoint: !0 };
function za(e) {
  return l(e)
    ? typeof e.action == "string" &&
        Tl.has(e.action) &&
        typeof e.entrypoint == "string" &&
        bl.has(e.entrypoint)
    : !1;
}
const Cl = new Set(So);
const kl = new Set(yo);
const Il = new Set(go);
function Ja(e) {
  return typeof e.gate == "string"
    ? "gate"
    : typeof e.stall == "string"
      ? "stall"
      : "consult";
}
const Ol = {
    gate: { gate: !0 },
    stall: { stall: !0, signedIn: !0 },
    consult: { consult: !0 },
  };
const Za = (e) => Ol[Ja(e)];
function Qa(e) {
  if (!l(e)) return !1;
  switch (Ja(e)) {
    case "gate":
      return typeof e.gate == "string" && Cl.has(e.gate);
    case "stall":
      return (
        typeof e.stall == "string" &&
        Il.has(e.stall) &&
        (e.signedIn === null || typeof e.signedIn == "boolean")
      );
    case "consult":
      return typeof e.consult == "string" && kl.has(e.consult);
  }
}
const Nl = new Set(fo);
const xl = new Set(_o);
const Pl = 16;
const ei = { step: !0, stepIndex: !0, direction: !0 };
function ni(e) {
  return l(e)
    ? typeof e.step == "string" &&
        Nl.has(e.step) &&
        typeof e.stepIndex == "number" &&
        Number.isInteger(e.stepIndex) &&
        e.stepIndex >= 0 &&
        e.stepIndex <= Pl &&
        typeof e.direction == "string" &&
        xl.has(e.direction)
    : !1;
}
const ti = { role: !0, tools: !0 };
function ri(e) {
  return !l(e) || !Array.isArray(e.tools) || e.tools.length > Un.length
    ? !1
    : (e.role === void 0 || (typeof e.role == "string" && ea(e.role))) &&
        e.tools.every((n) => typeof n == "string" && na(n));
}
const wl = /^[0-9A-Za-z._/:|-]{1,64}$/;
const Dl = /^[0-9A-Za-z._-]{1,128}$/;
const Ll = new Set(Eo);
const Ml = new Set(Ao);
const vl = new Set(ho);
const Ul = new Set([ue.nonceMismatch, ue.capabilityUnavailable, ue.hostRejected]);
const Bl = new Set([...qe, Mn]);
const Vl = new Set(To);
const Gl = new Set(["transcript"]);
const Fl = new Set(ta);
const Hl = new Set(ra);
const Kl = new Set(ze);
const jl = ze.length;
const Wl = new Set(oa);
const Yl = new Set(bo);
const $l = new Set(zo);
const ql = new Set(Jo);
const Xl = new Set(_r);
const zl = new Set(Er);
const Jl = new Set(ko);
const Zl = new Set([...Co, "none"]);
const Ql = new Set(Io);
const ec = new Set(Oo);
const nc = new Set(No);
const tc = new Set(xo);
const rc = new Set(Po);
const oc = new Set(wo);
const ac = 256;
function F(e) {
  return typeof e == "string" && wl.test(e);
}
function me(e) {
  return e === void 0 || F(e);
}
function oi(e) {
  return e === void 0 || (typeof e == "string" && Dl.test(e));
}
function ia(e, n) {
  return l(e) && e.code === n;
}
function sa(e) {
  if (!l(e) || e.code !== "SAND-E0701") return !1;
  let n = e.errno;
  return n === void 0 || (typeof n == "string" && Bl.has(n));
}
function ic(e) {
  return l(e)
    ? F(e.domain) &&
        F(e.operation) &&
        typeof e.state == "string" &&
        Ll.has(e.state) &&
        F(e.failureCode) &&
        F(e.boundary) &&
        me(e.retryOwner) &&
        me(e.transportKind) &&
        w(e.failedMs)
    : !1;
}
function sc(e) {
  return l(e)
    ? typeof e.boundary == "string" &&
        vl.has(e.boundary) &&
        F(e.errorClass) &&
        Se(e.occurrence)
    : !1;
}
function dc(e) {
  return !l(e) || !S(e.queuedMs) || !S(e.queueDepth)
    ? !1
    : e.outcome === "delivered"
      ? e.cause === void 0
      : e.outcome === "superseded"
        ? e.cause === ue.superseded
        : e.outcome === "expired"
          ? e.cause === ue.ackExpired
          : e.outcome === "flush_failed" &&
            typeof e.cause == "string" &&
            Ul.has(e.cause);
}
function lc(e) {
  return l(e)
    ? (e.serverName === void 0 ||
        (typeof e.serverName == "string" && e.serverName.length <= ac)) &&
        me(e.serverId)
    : !1;
}
function cc(e) {
  return !l(e) || !Ro(e.slice) || !w(e.bytes)
    ? !1
    : e.op === "writeback"
      ? e.outcome === "ok" && e.error === void 0 && e.bytes === void 0
      : e.op === "load"
        ? e.outcome === "ok"
          ? e.error === void 0
          : e.outcome === "corrupt"
            ? ia(e.error, "SAND-E0700")
            : e.outcome === "io_error" && sa(e.error)
        : e.op !== "persist"
          ? !1
          : e.outcome === "quota"
            ? ia(e.error, "SAND-E0702")
            : e.outcome === "io_error" && sa(e.error);
}
function uc(e) {
  return l(e)
    ? typeof e.entryKind == "string" && Vl.has(e.entryKind) && Se(e.occurrence)
    : !1;
}
function pc(e) {
  return (
    l(e) &&
    Object.keys(e).length === 3 &&
    (e.accountSlot === null ||
      (typeof e.accountSlot == "string" &&
        e.accountSlot.length > 0 &&
        e.accountSlot.length <= 512)) &&
    Ar(e.event)
  );
}
function mc(e) {
  return l(e)
    ? typeof e.phase == "string" &&
        Yl.has(e.phase) &&
        F(e.callId) &&
        oi(e.realtimeConversationId) &&
        S(e.elapsedMs) &&
        me(e.errorClass) &&
        w(e.closeCode) &&
        q(e.closeClean) &&
        q(e.socketOpen) &&
        q(e.sessionCreated) &&
        q(e.micReady) &&
        w(e.beat)
    : !1;
}
function Sc(e) {
  return l(e)
    ? typeof e.fault == "string" &&
        $l.has(e.fault) &&
        typeof e.tool == "string" &&
        ql.has(e.tool) &&
        F(e.callId) &&
        oi(e.realtimeConversationId) &&
        F(e.errorClass) &&
        me(e.failureCode)
    : !1;
}
function yc(e) {
  return l(e)
    ? typeof e.settlement == "string" &&
        Xl.has(e.settlement) &&
        typeof e.carries == "string" &&
        zl.has(e.carries) &&
        F(e.callId)
    : !1;
}
function gc(e) {
  return (
    l(e) &&
    Object.keys(e).length === 3 &&
    (e.accountSlot === null ||
      (typeof e.accountSlot == "string" &&
        e.accountSlot.length > 0 &&
        e.accountSlot.length <= 512)) &&
    Qo(e.event)
  );
}
function da(e, n) {
  return !ee(n) || n > jl
    ? !1
    : n === 0
      ? e === void 0
      : typeof e == "string" && Kl.has(e);
}
function fc(e) {
  return l(e)
    ? typeof e.surface == "string" &&
        Fl.has(e.surface) &&
        typeof e.reason == "string" &&
        Hl.has(e.reason) &&
        ee(e.removedRows) &&
        ee(e.insertedRows) &&
        e.removedRows + e.insertedRows > 0 &&
        da(e.removedKind, e.removedKindCount) &&
        da(e.insertedKind, e.insertedKindCount) &&
        ee(e.rowsBefore) &&
        ee(e.rowsAfter) &&
        Se(e.occurrence)
    : !1;
}
function _c(e) {
  return l(e)
    ? typeof e.pane == "string" &&
        Gl.has(e.pane) &&
        typeof e.errorClass == "string" &&
        Wl.has(e.errorClass) &&
        Se(e.occurrence)
    : !1;
}
function Ec(e) {
  return (
    l(e) &&
    F(e.policyName) &&
    typeof e.reason == "string" &&
    Ml.has(e.reason) &&
    F(e.errorClass)
  );
}
function Ac(e) {
  return l(e)
    ? typeof e.outcome == "string" &&
        Jl.has(e.outcome) &&
        typeof e.stage == "string" &&
        Zl.has(e.stage) &&
        me(e.errorClass) &&
        Se(e.generation) &&
        S(e.elapsedMs)
    : !1;
}
function hc(e) {
  return l(e)
    ? Object.keys(e).length === 6 &&
        typeof e.reason == "string" &&
        Ql.has(e.reason) &&
        S(e.heldMs) &&
        ee(e.unsettledBodies) &&
        ee(e.unsettledPlaceholders) &&
        ee(e.cloudAgentCards)
    : !1;
}
function Rc(e) {
  return l(e)
    ? Object.keys(e).length === 4 &&
        typeof e.outcome == "string" &&
        ec.has(e.outcome) &&
        S(e.durationMs) &&
        typeof e.seeded == "boolean"
    : !1;
}
function Ze(e, n) {
  return typeof n == "string" && e.has(n);
}
function Tc(e) {
  return l(e)
    ? Object.keys(e).length === 7 &&
        Ze(nc, e.surface) &&
        Ze(tc, e.hostClass) &&
        Ze(rc, e.heldAtOpen) &&
        Ze(oc, e.outcome) &&
        S(e.waitMs) &&
        ee(e.urlBytes)
    : !1;
}
const bc = {
    client_resource: {
      kind: !0,
      domain: !0,
      operation: !0,
      state: !0,
      failureCode: !0,
      boundary: !0,
      retryOwner: !0,
      transportKind: !0,
      failedMs: !0,
    },
    policy_stopped: { kind: !0, policyName: !0, reason: !0, errorClass: !0 },
    renderer_boundary_caught: {
      kind: !0,
      boundary: !0,
      errorClass: !0,
      occurrence: !0,
    },
    send_queued_flush: {
      kind: !0,
      queuedMs: !0,
      queueDepth: !0,
      outcome: !0,
      cause: !0,
    },
    client_persistence: {
      kind: !0,
      op: !0,
      outcome: !0,
      slice: !0,
      bytes: !0,
      error: !0,
    },
    connector_auth_clicked: { kind: !0, serverName: !0, serverId: !0 },
    unclaimed_card_key: { kind: !0, entryKind: !0, occurrence: !0 },
    pane_boundary: { kind: !0, pane: !0, errorClass: !0, occurrence: !0 },
    transcript_paint_rows_changed: {
      kind: !0,
      surface: !0,
      reason: !0,
      removedRows: !0,
      insertedRows: !0,
      removedKind: !0,
      removedKindCount: !0,
      insertedKind: !0,
      insertedKindCount: !0,
      rowsBefore: !0,
      rowsAfter: !0,
      occurrence: !0,
    },
    voice_call: { kind: !0, accountSlot: !0, event: !0 },
    voice_call_connect: {
      kind: !0,
      phase: !0,
      callId: !0,
      realtimeConversationId: !0,
      elapsedMs: !0,
      errorClass: !0,
      closeCode: !0,
      closeClean: !0,
      socketOpen: !0,
      sessionCreated: !0,
      micReady: !0,
      beat: !0,
    },
    voice_call_fault: {
      kind: !0,
      fault: !0,
      tool: !0,
      callId: !0,
      realtimeConversationId: !0,
      errorClass: !0,
      failureCode: !0,
    },
    voice_call_delivery: { kind: !0, settlement: !0, carries: !0, callId: !0 },
    voice_memo: { kind: !0, accountSlot: !0, event: !0 },
    client_restore: {
      kind: !0,
      outcome: !0,
      stage: !0,
      errorClass: !0,
      generation: !0,
      elapsedMs: !0,
    },
    transcript_first_layout: {
      kind: !0,
      reason: !0,
      heldMs: !0,
      unsettledBodies: !0,
      unsettledPlaceholders: !0,
      cloudAgentCards: !0,
    },
    cloud_agent_info_read: {
      kind: !0,
      outcome: !0,
      durationMs: !0,
      seeded: !0,
    },
    chip_first_content: {
      kind: !0,
      surface: !0,
      hostClass: !0,
      heldAtOpen: !0,
      outcome: !0,
      waitMs: !0,
      urlBytes: !0,
    },
  };
const ai = (e) => bc[e.kind];
function ii(e) {
  return l(e)
    ? e.kind === "client_resource"
      ? ic(e)
      : e.kind === "policy_stopped"
        ? Ec(e)
        : e.kind === "renderer_boundary_caught"
          ? sc(e)
          : e.kind === "send_queued_flush"
            ? dc(e)
            : e.kind === "client_persistence"
              ? cc(e)
              : e.kind === "connector_auth_clicked"
                ? lc(e)
                : e.kind === "unclaimed_card_key"
                  ? uc(e)
                  : e.kind === "pane_boundary"
                    ? _c(e)
                    : e.kind === "transcript_paint_rows_changed"
                      ? fc(e)
                      : e.kind === "voice_call"
                        ? pc(e)
                        : e.kind === "voice_call_connect"
                          ? mc(e)
                          : e.kind === "voice_call_fault"
                            ? Sc(e)
                            : e.kind === "voice_call_delivery"
                              ? yc(e)
                              : e.kind === "voice_memo"
                                ? gc(e)
                                : e.kind === "client_restore"
                                  ? Ac(e)
                                  : e.kind === "transcript_first_layout"
                                    ? hc(e)
                                    : e.kind === "cloud_agent_info_read"
                                      ? Rc(e)
                                      : e.kind === "chip_first_content"
                                        ? Tc(e)
                                        : !1
    : !1;
}
const si = { agentId: !0 };
function di(e) {
  return l(e) ? e.agentId === null || Xe(e.agentId) : !1;
}
const Qe = "/grok-bot/passkey/";
const Cc = /^[A-Za-z0-9._-]+$/;
function li(e) {
  if (!e.startsWith(Qe)) return !1;
  let n = e.slice(Qe.length).split("/");
  return (
    n.at(-1) === "" && n.pop(),
    n.length === 0 || !n.every((o) => Cc.test(o) && o !== "." && o !== "..")
      ? !1
      : new URL(e, "https://ceremony.invalid").pathname === e
  );
}
const kc = ["always", "ask", "never"];
function ci(e) {
  return typeof e == "string" && kc.includes(e);
}
const Ic = [
  "run-command",
  "send-input",
  "read-file",
  "list-directory",
  "write-file",
  "read-ai-tool-setup",
  "read-messages",
  "send-imessage",
];
function Ie(e) {
  return typeof e == "string" && Ic.includes(e);
}
function ui(e) {
  return typeof e == "number" && Number.isFinite(e) && e >= 0;
}
const Nc = [
  "open-failed",
  "load-failed",
  "shadow-compare",
  "store-first",
  "server-tail",
];
function pi(e) {
  if (typeof e != "object" || e == null) return !1;
  let n = e;
  return (
    typeof n.agentId == "string" &&
    n.agentId.length > 0 &&
    Number.isInteger(n.limit) &&
    n.limit > 0 &&
    (n.sessionId === void 0 || typeof n.sessionId == "string") &&
    (n.unreadBoundaryAt === void 0 || ui(n.unreadBoundaryAt)) &&
    Nc.includes(n.reason)
  );
}
const xc = new Set(["post_connect"]);
function Oe(e) {
  return typeof e == "number" && Number.isFinite(e) && e >= 0;
}
const mi = {
  phase: !0,
  stallMs: !0,
  keys: !0,
  clicks: !0,
  moves: !0,
  inBytes: !0,
};
function Si(e) {
  return l(e)
    ? typeof e.phase == "string" &&
        xc.has(e.phase) &&
        Oe(e.stallMs) &&
        Oe(e.keys) &&
        Oe(e.clicks) &&
        Oe(e.moves) &&
        Oe(e.inBytes)
    : !1;
}
const ye = { enabled: y() };
const wc = f("JSON value", Ee);
const Dc = f("IANA time zone", (e) => typeof e == "string" && he(e));
const Lc = f(`relative path under ${Qe}`, (e) => typeof e == "string" && li(e));
const Mc = f(`${6}-digit enrollment code`, $t);
const en = c(R(s()));
const vc = m({
    connectDomains: en,
    resourceDomains: en,
    frameDomains: en,
    baseUriDomains: en,
  });
const yi = R(m({ path: u, content: s() }));
const Uc = I(
    m({
      accountUuid: g,
      vaultName: g,
      accountUrl: c(s()),
      accountEmail: c(s()),
      connectionId: c(g),
    }),
    m({ serviceAccountToken: g, connectionId: c(g) }),
  );
const gi = c(I(p("box"), p("temporal")));
const Bc = te("non-empty audio bytes", (e) => {
    let n = null;
    return (
      e instanceof Uint8Array
        ? (n = e)
        : e instanceof ArrayBuffer && (n = new Uint8Array(e)),
      n == null || n.length === 0 ? { success: !1 } : { success: !0, data: n }
    );
  });
const Vc = te("profile photo: PNG, JPEG, or WebP bytes of at most 2 MB", (e) => {
    if (!l(e)) return { success: !1 };
    let { contentType: n, bytes: o } = e;
    return typeof n != "string" ||
      !Rn(n) ||
      !(o instanceof Uint8Array) ||
      Yt({ contentType: n, byteLength: o.byteLength }) !== null
      ? { success: !1 }
      : { success: !0, data: { contentType: n, bytes: o } };
  });
const Gc = f(
    `non-blank text of at most ${Tn} characters`,
    (e) => typeof e == "string" && dr(e) === "ok",
  );
const fi = f("computer upgrade schedule args (local time, IANA time zone)", Qt);
const Fc = te("feedback report", (e) => {
    let n = ar(e);
    return n === null ? { success: !1 } : { success: !0, data: n };
  });
const Hc = f(
    "caller name: string, null, or absent",
    (e) => e == null || typeof e == "string",
  );
const _i = I(
    m({ kind: p("store"), storeId: s(), canvasId: s() }),
    m({ kind: p("active-user-store"), canvasId: s() }),
  );
const Kc = I(p("private"), p("team-view"));
const Ne = m({ storeId: s(), documentId: s() });
const jc = I(p("private"), p("team-view"));
const Ei = te("canvas id (bare UUID)", (e) => {
    if (typeof e != "string") return { success: !1 };
    let n = hn(e);
    return n.ok ? { success: !0, data: n.value } : { success: !1 };
  });
const Wc = I(
    m({ kind: p("canvas"), storeId: g, canvasId: Ei }),
    m({ kind: p("active-user-store-canvas"), canvasId: Ei }),
    m({
      kind: p("document"),
      storeId: g,
      documentId: f("document id", (e) => typeof e == "string" && Zt(e)),
    }),
  );
const Ai = I(
    m({ kind: p("backend") }),
    m({
      kind: p("package"),
      loop: I(p("box"), p("temporal")),
      hasStaySilent: y(),
      hasOverheard: y(),
    }),
  );
const hi = _e("main", {
    methods: {
      openExternal: r().args({ url: s() }),
      getCanvasShare: r().args({ locator: _i }),
      setCanvasVisibility: r().args({ locator: _i, visibility: Kc }),
      getDocument: r().args({ locator: Ne, groupChatId: c(g) }),
      getDocumentEditRight: r().args({ locator: Ne }),
      saveDocument: r().args({ locator: Ne, source: s() }),
      resolveLibraryPages: r().args({ refs: R(Wc), includeDocuments: y() }),
      listLibraryDocs: r().args({ agentId: g }),
      setDocumentVisibility: r().args({ locator: Ne, visibility: jc }),
      getDocumentAssets: r().args({
        locator: Ne,
        names: R(s()),
        groupChatId: c(g),
      }),
      submitFeedback: r().args(Fc),
      getWindowState: r().noArgs,
      minimizeWindow: r().noArgs,
      focusWindow: r().noArgs,
      toggleMaximizeWindow: r().noArgs,
      closeWindow: r().noArgs,
      resizeWindowWidth: r().args({ deltaWidth: P() }),
      setTitleBarOverlayTone: r().args({ isOverlayTone: y() }),
      setViewingAgent: r().args({ agentId: W(s()) }),
      setComposingAgent: r().args({ agentId: s(), composing: y() }),
      setComputerViewOpen: r().args({ isOpen: y() }),
      getThemeState: r().noArgs,
      setThemePreference: r().args({ preference: f("theme preference", nr) }),
      getBotColorInChatEnabled: r().noArgs,
      setBotColorInChatEnabled: r().args(ye),
      getHardwareAcceleration: r().noArgs,
      setHardwareAccelerationEnabled: r().args(ye),
      getSpellCheckEnabled: r().noArgs,
      setSpellCheckEnabled: r().args(ye),
      getDesktopNotificationPreferences: r().noArgs,
      setDesktopNotificationPreferences: r().args({
        preferences: f("notification-preferences", tr),
      }),
      relaunchDesktop: r().noArgs,
      getLanguageState: r().noArgs,
      setLanguagePreference: r().args({
        preference: f("language preference", ir),
      }),
      getEgressTunnelEnabled: r().noArgs,
      setEgressTunnelEnabled: r().args(ye),
      getEgressTunnelStatus: r().noArgs,
      claimEgressTunnel: r().noArgs,
      getWebauthnProxyEnabled: r().noArgs,
      setWebauthnProxyEnabled: r().args(ye),
      runNetworkDiagnostics: r().noArgs,
      getUpdateStatus: r().noArgs,
      checkForUpdates: r().noArgs,
      setUpdateTrack: r().args({ track: W(f("update track", Xo)) }),
      quitAndInstallUpdate: r().args({ expectedVersion: s() }),
      setAutoUpdateWhenIdle: r().args(ye),
      getBoxMigrationStatus: r().noArgs,
      getBoxHostPhase: r().noArgs,
      markDeepLinksReady: r().noArgs,
      getOnboardingSeen: r().noArgs,
      setOnboardingSeen: r().args({ seen: y() }),
      getTimeZone: r().noArgs,
      setTimeZoneOverride: r().args({ timeZone: W(Dc) }),
      getAutoReviewInstructions: r().noArgs,
      setAutoReviewInstructions: r().args({
        instructions: m({
          isEnabled: y(),
          allowInstructions: R(s()),
          blockInstructions: R(s()),
        }),
      }),
      getLocalToolPermission: r().noArgs,
      getMessagesAppIcon: r().noArgs,
      getTeamMemberPolicy: r().noArgs,
      setLocalToolPermission: r().args({
        permission: f("local tool permission", ci),
        machineId: c(u),
      }),
      recordLocalToolApproval: r().args({
        approvalId: g,
        action: f("local tool action", Ie),
        target: s(),
        machineId: c(s()),
      }),
      clearLocalToolApprovals: r().noArgs,
      recordLocalToolStandingGrant: r().args({
        action: f("local tool action", Ie),
        recipient: g,
        machineId: c(s()),
      }),
      getLocalToolActionGrant: r().args({ action: f("local tool action", Ie) }),
      setLocalToolActionGrant: r().args({
        action: f("local tool action", Ie),
        granted: y(),
      }),
      pickAvatarSource: r().noArgs,
      pickAvatarFile: r().noArgs,
      generateAgentAvatarImage: r().args({ description: s() }),
      resolveAttachmentMedia: r().args({
        source: s(),
        inline: c(y()),
        rendition: c(f("image rendition", sr)),
        inRoom: c(y()),
        preview: c(De()),
      }),
      readAttachmentText: r().args({ path: s(), agentId: c(s()) }),
      readAttachmentBytes: r().args({
        path: s(),
        maxBytes: c(P()),
        agentId: c(s()),
      }),
      stageAttachmentBytes: r().args({ filename: s(), bytes: De() }),
      stageAttachmentPath: r().args({ filename: s(), sourcePath: s() }),
      downloadAttachment: r().args({ path: s(), suggestedName: c(s()) }),
      commitStagedAttachments: r().args({
        agentId: g,
        paths: R(s()),
        filenames: R(s()),
      }),
      discardStagedAttachment: r().args({ path: s() }),
      precaptionStagedAttachment: r().args({
        path: s(),
        agentId: s(),
        draftText: s(),
        priorUserMessages: R(s()),
      }),
      forceRecreateComputer: r().noArgs,
      updateComputer: r().args({
        id: s(),
        requestId: g,
        acknowledgeTerminalUpgradeSchedule: c(y()),
      }),
      getComputerUpgradeSchedule: r().noArgs,
      scheduleComputerUpgrade: r().args(fi),
      rescheduleComputerUpgrade: r().args(fi),
      cancelComputerUpgrade: r().args(
        f("computer upgrade cancellation args", er),
      ),
      forceReconnectGateway: r().noArgs,
      getExperimentsSnapshot: r().noArgs,
      exposeFeatureGate: r().args({ name: s() }),
      peekUsageWarningAssignment: r().noArgs,
      exposeUsageWarningExperiment: r().args({ percentUsed: P() }),
      logComposerTriggerExperimentExposure: r().args({ trigger: p("at") }),
      logGroupChatDiscouragementExperimentExposure: r().noArgs,
      logOnboardingJobRoleExperimentExposure: r().noArgs,
      logOnboardingRoleUseCaseBotsExperimentExposure: r().noArgs,
      applyFeatureFlagOverride: r().args({
        command: I(
          m({ kind: p("set"), name: s(), value: y() }),
          m({ kind: p("clear"), name: s() }),
          m({ kind: p("clear-all") }),
          m({ kind: p("set-all-bundled") }),
        ),
      }),
      refreshFeatureFlags: r().noArgs,
      applyExperimentOverride: r().args({
        command: I(
          m({ kind: p("set"), experiment: s(), param: s(), value: wc }),
          m({ kind: p("clear"), experiment: s(), param: s() }),
          m({ kind: p("clear-experiment"), experiment: s() }),
          m({ kind: p("clear-all") }),
        ),
      }),
      startRpcTraceWindow: r().noArgs,
      readTranscriptStoreTail: r().args(
        f("transcript store read args (agent id, positive limit, reason)", pi),
      ),
      getPublicBotTemplate: r().args({
        shareId: f("share id", (e) => typeof e == "string" && Jt.test(e)),
      }),
      listPublicBotMarketplace: r().noArgs,
      getGrokBotSlackInstallState: r().args({ agentId: u }),
      startGrokBotSlackConnect: r().args({ agentId: u }),
      installGrokBotSlackApp: r().args({
        agentId: u,
        slackTeamId: W(u),
        replaceExistingApp: c(y()),
      }),
      reinstallGrokBotSlackApp: r().args({ agentId: u, automatic: y() }),
      uninstallGrokBotSlackApp: r().args({
        agentId: u,
        forgetIfUnreachable: c(y()),
      }),
      listGrokBotTeamAgents: r().noArgs,
      listGrokBotAgentSessions: r().args({ agentId: u }),
      setGrokBotAgentVisibility: r().args({
        agentId: u,
        visibility: En("Grok Bot agent visibility", ["owner", "team"]),
      }),
      cloneGrokBotAgentToTeam: r().args({ agentId: u, offerEntryId: u }),
      setGrokBotAgentVoice: r().args({
        agentId: u,
        voiceId: c(W(s())),
        voiceSpeed: c(P()),
        voiceLanguage: c(s()),
      }),
      updateGrokBotAgent: r().args({
        serverId: u,
        name: c(s()),
        description: c(s()),
        title: c(s()),
        avatarShape: c(s()),
        avatarColor: c(s()),
        avatarPngBase64: c(W(s())),
      }),
      publishGrokBotAgent: r().args({ agentId: u }),
      unpublishGrokBotAgent: r().args({ agentId: u }),
      setGrokBotAgentSidebarHidden: r().args({ agentId: u, isHidden: y() }),
      addGrokBotRoomPeople: r().args({ agentId: u, userIds: R(P()) }),
      removeGrokBotRoomPeople: r().args({ agentId: u, userIds: R(P()) }),
      listGrokBotAgentManagers: r().args({ serverId: u }),
      addGrokBotAgentManager: r().args({ serverId: u, userId: P() }),
      removeGrokBotAgentManager: r().args({ serverId: u, userId: P() }),
      getGrokBotAgentPlugins: r().args({ agentId: u }),
      setGrokBotAgentPlugins: r().args({
        agentId: u,
        plugins: R(
          I(
            m({ kind: p("plugin"), pluginId: u }),
            m({ kind: p("config-update"), pluginId: u, mcpConfigJson: u }),
            m({
              kind: p("inline"),
              name: u,
              displayName: s(),
              description: s(),
              mcpConfigJson: u,
            }),
          ),
        ),
      }),
      setGrokBotAgentPluginVariables: r().args({
        agentId: u,
        pluginId: u,
        variables: se(I(s(), P(), y())),
      }),
      addGrokBotAgentSkill: r().args({
        agentId: u,
        name: c(s()),
        description: c(s()),
        content: u,
        files: c(yi),
      }),
      updateGrokBotAgentSkill: r().args({
        agentId: u,
        name: u,
        description: c(s()),
        content: u,
        files: c(yi),
      }),
      removeGrokBotAgentSkill: r().args({ agentId: u, name: u }),
      listGrokBotUserBotMemories: r().args({ agentId: u }),
      promoteGrokBotMemoriesToTeam: r().args({ agentId: u, factIds: R(u) }),
      listGrokBotEmailInboxes: r().noArgs,
      createGrokBotEmailInbox: r().args({ username: s(), displayName: s() }),
      listGrokBotSecrets: r().args({ serverId: u }),
      putGrokBotSecret: r().args({
        serverId: u,
        name: u,
        description: s(),
        value: g,
      }),
      deleteGrokBotSecret: r().args({ serverId: u, name: u }),
      carryUserSecretsToGrokBot: r().args({ serverId: u, names: R(u) }),
      getHostPinnedAgents: r().noArgs,
      setHostPinnedAgents: r().args({ pinnedAgentIds: R(s()) }),
      getHostSidebarSections: r().noArgs,
      setHostSidebarSections: r().args({
        sections: R(m({ id: s(), name: s(), agentIds: R(s()) })),
      }),
      transcribeAudio: r().args({ audio: Bc, mimeType: s(), language: c(s()) }),
      synthesizeSpeech: r().args({ text: Gc, voiceId: c(s()) }),
      getCursorAuthStatus: r().noArgs,
      loginCursor: r().noArgs,
      getCursorLoginFlight: r().noArgs,
      cancelCursorLoginFlight: r().noArgs,
      logoutCursor: r().noArgs,
      listCursorAccounts: r().noArgs,
      addCursorAccount: r().noArgs,
      switchCursorAccount: r().args({ accountId: s() }),
      removeCursorAccount: r().args({ accountId: s() }),
      updateCursorAccountName: r().args({ name: s() }),
      getCursorAvatar: r().noArgs,
      updateCursorProfilePhoto: r().args({ photo: Vc }),
      getSandMachines: r().noArgs,
      updateSandMachineLabel: r().args({ machineId: s(), label: s() }),
      startPasskeyEnrollment: r().noArgs,
      verifyPasskeyEnrollmentCode: r().args({ code: Mc }),
      beginPasskeyRegistration: r().args({ enrollmentTicket: u }),
      listPasskeys: r().noArgs,
      revokePasskey: r().args({ credentialId: u }),
      getCursorSelectedTeam: r().noArgs,
      listCursorTeamMemberships: r().noArgs,
      listCursorTeamMembers: r().args({ teamId: P() }),
      ackCursorTeamFallback: r().args({
        notice: m({
          fromTeamId: P(),
          fromTeamName: W(s()),
          toTeam: W(m({ id: P(), name: s() })),
        }),
      }),
      getCursorWeeklyUsage: r().noArgs,
      getCursorUsageSummary: r().noArgs,
      getCursorEnterpriseUsage: r().args({ teamId: P() }),
      getCursorUsageBreakdown: r().args({ includeCredits: y() }),
      getCursorPrReviewPreferences: r().noArgs,
      getCursorOriginPrStatus: r().args({ prUrl: s() }),
      getCursorPrivacyModeEnabled: r().noArgs,
      getSandAccess: r().noArgs,
      getSandAccessFresh: r().noArgs,
      getGrokBotTermsRecord: r().noArgs,
      markGrokBotTermsSeen: r().noArgs,
      clearGrokBotConnectorPreferences: r().noArgs,
      mintVoiceCallCredential: r().noArgs,
      mintXaiCommerceBearer: r().noArgs,
      voiceCallHarnessSession: r().args({
        dial: Ai,
        args: m({
          agentId: s(),
          agentName: s(),
          userName: c(Hc),
          description: c(s()),
          spokenLanguage: c(s()),
        }),
      }),
      voiceCallHarnessTool: r().args({
        dial: Ai,
        invocation: m({
          agentId: s(),
          callId: s(),
          name: s(),
          input: ln(),
          line: m({
            theyJustTalked: y(),
            newsOwed: y(),
            receiptOwed: y(),
            alreadySpokeThisTurn: y(),
          }),
        }),
      }),
      invokeCursorDashboardAction: r().args({ action: s(), args: se(s()) }),
      cancelCursorSandTrial: r().noArgs,
      prepareCursorScmConnect: r().args({
        provider: En("SCM connect provider", zt),
        forceOauth: c(y()),
      }),
      completeCursorScmConnect: r().args({
        state: u,
        code: c(s()),
        installationId: c(s()),
        setupAction: c(s()),
        error: c(s()),
      }),
      getCursorGithubRepoAccess: r().args({ repoSlug: u }),
      runPasskeyCeremony: r().args({
        ceremonyId: u,
        path: Lc,
        token: u,
        challengeId: c(u),
      }),
      cancelPasskeyCeremony: r().args({ ceremonyId: u }),
      setCursorSpendLimit: r().args(f("spend limit update", Xt)),
      reportAgentLoad: r().args(A(ca, la)),
      reportAccessBlocked: r().args(A(pa, ua)),
      reportAgentsUnreachable: r().args(A(Sa, ma)),
      reportRecoveryAction: r().args(A(ga, ya)),
      reportRebuildLifecycle: r().args(A(_a, fa)),
      reportReconciliation: r().args(A(Aa, Ea)),
      reportBoxVisibility: r().args(A(Ra, ha)),
      reportSendLatency: r().args(A(ba, Ta)),
      reportSendAck: r().args(A(ka, Ca)),
      reportTurnClientStart: r().args(A(Oa, Ia)),
      reportTurnClientOutcome: r().args(A(xa, Na)),
      reportReactionAck: r().args(A(wa, Pa)),
      reportRenderTtfr: r().args(A(Ba, Ua)),
      reportRenderStream: r().args(A(Ga, Va)),
      reportVncSession: r().args(A(La, Da)),
      reportVncLiveness: r().args(A(Si, mi)),
      reportOpenComputer: r().args(A(va, Ma)),
      reportUpdatePrompt: r().args(A(Ha, Fa)),
      reportUsageWarning: r().args(A(ja, Ka)),
      reportSidebarAction: r().args(A(za, Xa)),
      reportArtifactEngagement: r().args(A(qa, $a)),
      reportCloudAgentArtifact: r().args(A(Ya, Wa)),
      reportSigninGate: r().args(A(Qa, Za)),
      reportOnboardingStep: r().args(A(ni, ei)),
      reportOnboardingCompleted: r().args(A(ri, ti)),
      reportClientFailure: r().args(A(ii, ai)),
      reportHeapMetrics: r().args(Vt),
      noteSentryConversation: r().args(A(di, si)),
      openCloudAgent: r().args({
        bcId: Ue,
        target: c(I(p("default"), p("web"))),
      }),
      getLinkMetadata: r().args({
        url: s(),
        image: c(I(p("card"), p("source"))),
      }),
      stageMcpAppDocument: r().args({ html: s(), csp: c(vc) }),
      listSecrets: r().noArgs,
      readClientPersistence: r().args({ key: s() }),
      readManyClientPersistence: r().args({ include: R(s()), exclude: R(s()) }),
      writeClientPersistence: r().args({ key: s(), value: s() }),
      removeClientPersistence: r().args({ key: s() }),
      listClientPersistenceKeys: r().args({ prefix: s() }),
      hasMigratedClientPersistence: r().noArgs,
      migrateClientPersistence: r().args({
        entries: R(m({ key: s(), value: s() })),
      }),
      getCredentialsState: r().noArgs,
      syncCredentialProvider: r().noArgs,
      disconnectCredentialProvider: r().args({ connectionId: g }),
      disconnectScmConnection: r().args({ platform: g }),
      isSlackLinked: r().noArgs,
      getSlackLinkUrl: r().noArgs,
      approveCredentialRequest: r().args({
        entryId: g,
        agentId: g,
        credentialId: g,
        connectionId: g,
        catalogRevision: g,
        targetSite: g,
        harness: gi,
      }),
      denyCredentialRequest: r().args({ entryId: g, agentId: g, harness: gi }),
      detectCredentialMint: r().noArgs,
      startCredentialMint: r().args(Uc),
      connectCredentialProviderOAuth: r().args({ connectionId: c(g) }),
      cancelCredentialProviderOAuth: r().noArgs,
      getMcpState: r().noArgs,
      getGrokBotAgentMcpServers: r().args({ agentId: s() }),
      getEffectivePlugins: r().noArgs,
      getMcpCatalog: r().noArgs,
      refreshMcpCatalog: r().noArgs,
      getMcpTeamPopularity: r().noArgs,
      getMcpPluginLogo: r().args({ url: s() }),
      installEntry: r().args({
        entryId: s(),
        values: c(se(I(s(), P(), y()))),
        hasTeamConfiguredVariables: c(y()),
      }),
      updatePluginInstall: r().args({
        pluginId: s(),
        values: se(I(s(), P(), y())),
      }),
      removeMcpServer: r().args({ serverId: s() }),
      uninstallPlugin: r().args({ pluginId: s() }),
      reconcileUnpublishedPlugin: r().args({ pluginId: s() }),
      authenticateMcpServer: r().args({
        serverId: s(),
        accountKey: c(s()),
        trigger: c(p("connector_card")),
        forceReauth: c(y()),
        grokBotAgentId: c(s()),
      }),
      renameMcpAccount: r().args({
        serverId: s(),
        accountKey: s(),
        newAccountKey: s(),
      }),
      removeMcpAccount: r().args({ serverId: s(), accountKey: s() }),
      setMcpCustomInstructions: r().args({ serverId: s(), instructions: s() }),
      listMcpServerTools: r().args({
        serverId: s(),
        demand: c(p("background")),
      }),
      toggleMcpToolDisabled: r().args({ serverId: s(), toolName: s() }),
      getFinanceOverview: r().noArgs,
      deleteFinanceConnection: r().args({ connectionId: s() }),
      startFinanceLink: r().args({ repairLinkedBank: c(y()) }),
      attachProdBoxStatus: r().noArgs,
      setAttachProdBoxEnabled: r().args({
        enabled: y(),
        isRestartMainApp: c(y()),
      }),
      checkMessagesPermissions: r().args({
        prompt: c(I(p("automation"), p("fullDiskAccess"), p("contacts"))),
      }),
      getCurrentMachineMessagesEnabled: r().noArgs,
      updateCurrentMachineMessagesEnabled: r().args({ messagesEnabled: y() }),
      listMessagesAllowedRecipients: r().noArgs,
      revokeMessagesAllowedRecipient: r().args({ recipient: g }),
      listChromeCookieAllowItems: r().noArgs,
      importChromeCookies: r().args({
        cookies: R(m({ profileId: g, domain: g, name: g, path: g })),
      }),
      listCookieOriginGrants: r().noArgs,
      putCookieOriginGrants: r().args({
        grants: R(m({ profileId: u, origin: u })),
      }),
      listMeetings: r().noArgs,
      meetingCensus: r().noArgs,
      leaveMeeting: r().args({
        meetingId: g,
        host: I(p("desktop"), p("server")),
      }),
    },
    events: ae(),
    failureCodes: ae(),
  });
return {main:hi,mount:Ft};
};
