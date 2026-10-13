declare var URL: any;
declare var module: any;
/** Extracted shipped domain validators. Pure predicates/transforms; typed primitives are injected by declarations.ts. */
(module as any).exports = function createDomainDeclarations(this: any, {
  B,
  s,
  P,
  y,
  p,
  c,
  W,
  I,
  R,
  m,
  se,
  De,
  ln,
  r,
  _e,
  f,
  te,
  Bt,
  ae,
  K
}: any): any {
  function l(this: any, e: any): any {
    return (typeof e as any) == ("object" as any) && (e as any) !== (null as any) && !((Array as any).isArray as any)(e);
  }
  function Ee(this: any, e: any): any {
    if ((e as any) === (null as any)) return !0;
    switch (typeof e) {
      case "string":
      case "boolean":
        return !0;
      case "number":
        return ((Number as any).isFinite as any)(e);
      case "object":
        return ((Array as any).isArray as any)(e) ? ((e as any).every as any)(Ee) : (l as any)(e) && ((((Object as any).values as any)(e) as any).every as any)(Ee);
      default:
        return !1;
    }
  }
  const ls: string = "data:image/svg+xml";
  const cs: any = (64 as any) * (1024 as any);
  function pn(this: any, e: any): any {
    return (typeof e as any) == ("string" as any) && ((e as any).startsWith as any)(ls) && ((e as any).length as any) <= (cs as any);
  }
  const mn: number = 64;
  function us(this: any, e: any): any {
    return (typeof e as any) == ("object" as any) && (e as any) !== (null as any) && "agentId" in e && "name" in e && "markSvgDataUrl" in e && (typeof (e as any).agentId as any) == ("string" as any) && (((((e as any).agentId as any).trim as any)() as any).length as any) > (0 as any) && (typeof (e as any).name as any) == ("string" as any) && (((((e as any).name as any).trim as any)() as any).length as any) > (0 as any) && (pn as any)((e as any).markSvgDataUrl);
  }
  function Pt(this: any, e: any): any {
    return ((Array as any).isArray as any)(e) && ((e as any).length as any) <= (mn as any) && ((e as any).every as any)(us);
  }
  const Sn: number = 640;
  function wt(this: any, e: any): any {
    return (typeof e as any) == ("number" as any) && ((Number as any).isInteger as any)(e) && (e as any) >= (0 as any) && (e as any) <= (Sn as any);
  }
  const ve: number = 16384;
  function Dt(this: any, e: any): any {
    return (typeof e as any) == ("number" as any) && ((Number as any).isInteger as any)(e) && (((Math as any).abs as any)(e) as any) <= (ve as any);
  }
  function Ae(this: any, e: any, n: any): any {
    let o: any = ((Object as any).getOwnPropertyDescriptor as any)(e, n);
    return (o as any) !== (void 0 as any) && "value" in o ? (o as any).value : void 0;
  }
  function gn(this: any, e: any): any {
    return (typeof e as any) == ("number" as any) && ((Number as any).isInteger as any)(e) && (e as any) >= (0 as any);
  }
  function Mt(this: any, e: any): any {
    if ((typeof e as any) != ("object" as any) || (e as any) === (null as any)) return null;
    try {
      let n: any = ((Object as any).getPrototypeOf as any)(e);
      if ((n as any) !== ((Object as any).prototype as any) && (n as any) !== (null as any)) return null;
      let o: any = (Ae as any)(e, "usedBytes"),
        i: any = (Ae as any)(e, "limitBytes"),
        d: any = (Ae as any)(e, "loadedAgents"),
        E: any = (Ae as any)(e, "loadedTranscriptEntries"),
        O: any = (Ae as any)(e, "idleMinutesLast15m");
      return (typeof o as any) != ("number" as any) || !((Number as any).isFinite as any)(o) || (o as any) < (0 as any) || (typeof i as any) != ("number" as any) || !((Number as any).isFinite as any)(i) || (i as any) <= (0 as any) ? null : {
        ...{
          usedBytes: (o as any) === (0 as any) ? 0 : o,
          limitBytes: i
        },
        ...((gn as any)(d) ? {
          loadedAgents: d
        } : {}),
        ...((gn as any)(E) ? {
          loadedTranscriptEntries: E
        } : {}),
        ...((gn as any)(O) ? {
          idleMinutesLast15m: O
        } : {})
      };
    } catch {
      return null;
    }
  }
  function vt(this: any, e: any, n: any): any {
    return (typeof n as any) == ("string" as any) && ((Object as any).hasOwn as any)(e, n);
  }
  const g: any = (f as any)("non-empty string", (e: any): any => (typeof e as any) == ("string" as any) && ((e as any).length as any) > (0 as any));
  const u: any = (f as any)("non-blank string", (e: any): any => (typeof e as any) == ("string" as any) && ((((e as any).trim as any)() as any).length as any) > (0 as any));
  const Ue: any = (te as any)("non-empty string", (e: any): any => {
    if ((typeof e as any) != ("string" as any)) return {
      success: !1
    };
    let n: any = ((e as any).trim as any)();
    return ((n as any).length as any) > (0 as any) ? {
      success: !0,
      data: n
    } : {
      success: !1
    };
  });
  function En(this: any, e: any, n: any): any {
    return (f as any)(e, (o: any): any => ((n as any).some as any)((i: any): any => (i as any) === (o as any)));
  }
  function A(this: any, e: any, n: any): any {
    return (te as any)("telemetry report", (o: any): any => {
      if (!(l as any)(o) || !(e as any)(o)) return {
        success: !1
      };
      let i: any = (typeof n as any) == ("function" as any) ? (n as any)(o) : n,
        d: any = {};
      for (let E of ((Object as any).keys as any)(i)) (vt as any)(i, E) && ((Object as any).hasOwn as any)(o, E) && ((d as any)[E] = (o as any)[E]);
      return (e as any)(d) ? {
        success: !0,
        data: d
      } : {
        success: !1
      };
    });
  }
  const Vt: any = (te as any)("heap metrics report", (e: any): any => {
    let n: any = (Mt as any)(e);
    return (n as any) === (null as any) ? {
      success: !1
    } : {
      success: !0,
      data: n
    };
  });
  const ms: any = (f as any)("svg data url", pn);
  const Ss: any = (f as any)(`at most ${mn} mount targets`, Pt);
  const ys: any = (f as any)(`integer from 0 to ${Sn}`, wt);
  const Gt: any = (f as any)(`integer from -${ve} to ${ve}`, Dt);
  const Ft: any = (_e as any)("desktop-mount", {
    methods: {
      mount: (((r as any)() as any).args as any)({
        agentId: u,
        name: u,
        markSvgDataUrl: ms
      }),
      unmount: ((r as any)() as any).noArgs,
      offerChoices: (((r as any)() as any).args as any)({
        choices: Ss
      }),
      read: ((r as any)() as any).noArgs,
      readChoices: ((r as any)() as any).noArgs,
      submitPrompt: (((r as any)() as any).args as any)({
        prompt: Ue
      }),
      switchTo: (((r as any)() as any).args as any)({
        agentId: u
      }),
      reachForMenu: (((r as any)() as any).args as any)({
        heightPx: ys
      }),
      movePanel: (((r as any)() as any).args as any)({
        dx: Gt,
        dy: Gt
      }),
      endPanelMove: ((r as any)() as any).noArgs
    },
    events: (ae as any)(),
    failureCodes: (ae as any)()
  });
  const Ht: any = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-57][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  function hn(this: any, e: any): any {
    let n: any = ((((e as any).trim as any)() as any).toLowerCase as any)();
    return ((Ht as any).test as any)(n) ? {
      ok: !0,
      value: n
    } : {
      ok: !1
    };
  }
  const Wt: any = ["image/png", "image/jpeg", "image/webp"];
  function Rn(this: any, e: any): any {
    return ((Wt as any).some as any)((n: any): any => (n as any) === (e as any));
  }
  function Yt(this: any, e: any): any {
    return (Rn as any)((e as any).contentType) ? ((e as any).byteLength as any) <= (0 as any) ? "empty" : ((e as any).byteLength as any) > (2097152 as any) ? "too-large" : null : "unsupported-type";
  }
  const As: any = /^\d{6}$/;
  function $t(this: any, e: any): any {
    return (typeof e as any) == ("string" as any) && ((As as any).test as any)(e);
  }
  const hs: number = 2147483647;
  function Xt(this: any, e: any): any {
    return (l as any)(e) ? ((e as any).mode as any) === ("none" as any) || ((e as any).mode as any) === ("unlimited" as any) ? !0 : ((e as any).mode as any) === ("fixed" as any) && (typeof (e as any).limitDollars as any) == ("number" as any) && ((Number as any).isInteger as any)((e as any).limitDollars) && ((e as any).limitDollars as any) > (0 as any) && ((e as any).limitDollars as any) < (hs as any) : !1;
  }
  const zt: any = ["github", "gitlab", "bitbucket", "azure-devops"];
  const Jt: any = /^[A-Za-z0-9_-]{21}$/;
  const Ts: any = /^[a-z0-9][a-z0-9-]{2,63}$/;
  function Zt(this: any, e: any): any {
    return ((Ts as any).test as any)(e);
  }
  function he(this: any, e: any): any {
    if (((e as any).length as any) === (0 as any)) return !1;
    try {
      return new ((Intl as any).DateTimeFormat as any)("en-US", {
        timeZone: e
      }), !0;
    } catch {
      return !1;
    }
  }
  const Cs: any = /^(?:[01]\d|2[0-3]):[0-5]\d$/;
  function Qt(this: any, e: any): any {
    return (e as any) == (null as any) || (typeof e as any) != ("object" as any) || ((Array as any).isArray as any)(e) ? !1 : "localTime" in e && (typeof (e as any).localTime as any) == ("string" as any) && ((Cs as any).test as any)((e as any).localTime) && "timeZone" in e && (typeof (e as any).timeZone as any) == ("string" as any) && (he as any)((e as any).timeZone) && "recurring" in e && (typeof (e as any).recurring as any) == ("boolean" as any);
  }
  function er(this: any, e: any): any {
    return (e as any) != (null as any) && (typeof e as any) == ("object" as any) && !((Array as any).isArray as any)(e) && "dismissTerminalOutcome" in e && (typeof (e as any).dismissTerminalOutcome as any) == ("boolean" as any);
  }
  const ks: any = ["system", "light", "dark"];
  function nr(this: any, e: any): any {
    return (typeof e as any) == ("string" as any) && ((ks as any).includes as any)(e);
  }
  const Is: any = ["ping-1-open-blip", "ping-2-tick", "ping-3-double-tick", "ping-4-chime-a", "ping-5-chime-b"];
  function Os(this: any, e: any): any {
    return (typeof e as any) == ("string" as any) && ((Is as any).some as any)((n: any): any => (n as any) === (e as any));
  }
  function tr(this: any, e: any): any {
    return (typeof e as any) != ("object" as any) || (e as any) == (null as any) || ((Array as any).isArray as any)(e) || !("sound" in e) || !(Os as any)((e as any).sound) ? !1 : "playSound" in e && (typeof (e as any).playSound as any) == ("boolean" as any);
  }
  const Ns: any = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  const xs: string = "general";
  const rr: any = {
    kind: "absent"
  };
  const or: any = {
    kind: "rejects-the-report"
  };
  function Ge(this: any, e: any, n: any): any {
    if ((e as any) == (null as any)) return rr;
    if ((typeof e as any) != ("string" as any)) return or;
    let o: any = ((e as any).trim as any)();
    return ((o as any).length as any) === (0 as any) ? rr : ((o as any).length as any) > (n as any) ? or : {
      kind: "present",
      value: o
    };
  }
  function Ps(this: any, e: any): any {
    if ((typeof e as any) != ("object" as any) || (e as any) == (null as any)) return null;
    let n: any = (Ge as any)("callId" in e ? (e as any).callId : void 0, 128);
    if (((n as any).kind as any) !== ("present" as any)) return null;
    let o: any = "rating" in e ? (e as any).rating : void 0;
    if ((o as any) !== ("up" as any) && (o as any) !== ("down" as any)) return null;
    let i: any = (Ge as any)("requestId" in e ? (e as any).requestId : void 0, 128);
    if (((i as any).kind as any) === ("rejects-the-report" as any)) return null;
    let d: any = (Ge as any)("realtimeConversationId" in e ? (e as any).realtimeConversationId : void 0, 128);
    return ((d as any).kind as any) === ("rejects-the-report" as any) ? null : {
      callId: (n as any).value,
      rating: o,
      ...(((i as any).kind as any) === ("present" as any) ? {
        requestId: (i as any).value
      } : {}),
      ...(((d as any).kind as any) === ("present" as any) ? {
        realtimeConversationId: (d as any).value
      } : {})
    };
  }
  function ar(this: any, e: any): any {
    if ((typeof e as any) != ("object" as any) || (e as any) == (null as any) || !("message" in e) || (typeof (e as any).message as any) != ("string" as any)) return null;
    let n: any = (((e as any).message as any).trim as any)();
    if (((n as any).length as any) === (0 as any) || ((n as any).length as any) > (1e4 as any) || !("accountSlot" in e) || (typeof (e as any).accountSlot as any) != ("string" as any)) return null;
    let o: any = (((e as any).accountSlot as any).trim as any)();
    if (((o as any).length as any) === (0 as any) || ((o as any).length as any) > (512 as any) || !("submissionId" in e) || (typeof (e as any).submissionId as any) != ("string" as any) || !((Ns as any).test as any)((e as any).submissionId)) return null;
    let i: any = (e as any).submissionId,
      d: any = (Ge as any)("conversationId" in e ? (e as any).conversationId : void 0, 512);
    if (((d as any).kind as any) === ("rejects-the-report" as any)) return null;
    let E: any = {
        accountSlot: o,
        message: n,
        submissionId: i,
        ...(((d as any).kind as any) === ("present" as any) ? {
          conversationId: (d as any).value
        } : {})
      },
      O: any = ("kind" in e ? (e as any).kind : void 0) ?? xs;
    if ((O as any) === ("voice-call" as any)) {
      let C: any = (Ps as any)("voiceCall" in e ? (e as any).voiceCall : void 0);
      return (C as any) === (null as any) ? null : {
        ...E,
        kind: "voice-call",
        voiceCall: C
      };
    }
    if ((O as any) !== ("general" as any)) return null;
    let b: any;
    if ("wantsResponse" in e && ((e as any).wantsResponse as any) !== (void 0 as any) && ((e as any).wantsResponse as any) !== (null as any)) {
      if ((typeof (e as any).wantsResponse as any) != ("boolean" as any)) return null;
      b = (e as any).wantsResponse;
    }
    return {
      ...E,
      kind: "general",
      ...((b as any) === (void 0 as any) ? {} : {
        wantsResponse: b
      })
    };
  }
  const ws: any = [{
    tag: "en",
    endonym: "English",
    englishName: "English",
    direction: "ltr"
  }, {
    tag: "hi",
    endonym: "\u0939\u093F\u0928\u094D\u0926\u0940",
    englishName: "Hindi",
    direction: "ltr"
  }, {
    tag: "zh-CN",
    endonym: "\u7B80\u4F53\u4E2D\u6587",
    englishName: "Simplified Chinese",
    direction: "ltr"
  }, {
    tag: "zh-TW",
    endonym: "\u7E41\u9AD4\u4E2D\u6587",
    englishName: "Traditional Chinese",
    direction: "ltr"
  }, {
    tag: "pl",
    endonym: "Polski",
    englishName: "Polish",
    direction: "ltr"
  }, {
    tag: "es",
    endonym: "Espa\xF1ol",
    englishName: "Spanish",
    direction: "ltr"
  }, {
    tag: "pt",
    endonym: "Portugu\xEAs",
    englishName: "Portuguese",
    direction: "ltr"
  }, {
    tag: "ja",
    endonym: "\u65E5\u672C\u8A9E",
    englishName: "Japanese",
    direction: "ltr"
  }, {
    tag: "fr",
    endonym: "Fran\xE7ais",
    englishName: "French",
    direction: "ltr"
  }, {
    tag: "ko",
    endonym: "\uD55C\uAD6D\uC5B4",
    englishName: "Korean",
    direction: "ltr"
  }, {
    tag: "de",
    endonym: "Deutsch",
    englishName: "German",
    direction: "ltr"
  }, {
    tag: "ru",
    endonym: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439",
    englishName: "Russian",
    direction: "ltr"
  }, {
    tag: "tr",
    endonym: "T\xFCrk\xE7e",
    englishName: "Turkish",
    direction: "ltr"
  }, {
    tag: "ar",
    endonym: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629",
    englishName: "Arabic",
    direction: "rtl"
  }, {
    tag: "it",
    endonym: "Italiano",
    englishName: "Italian",
    direction: "ltr"
  }, {
    tag: "sv",
    endonym: "Svenska",
    englishName: "Swedish",
    direction: "ltr"
  }, {
    tag: "uk",
    endonym: "\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430",
    englishName: "Ukrainian",
    direction: "ltr"
  }, {
    tag: "nl",
    endonym: "Nederlands",
    englishName: "Dutch",
    direction: "ltr"
  }, {
    tag: "el",
    endonym: "\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC",
    englishName: "Greek",
    direction: "ltr"
  }, {
    tag: "af",
    endonym: "Afrikaans",
    englishName: "Afrikaans",
    direction: "ltr"
  }, {
    tag: "he",
    endonym: "\u05E2\u05D1\u05E8\u05D9\u05EA",
    englishName: "Hebrew",
    direction: "rtl"
  }, {
    tag: "vi",
    endonym: "Ti\u1EBFng Vi\u1EC7t",
    englishName: "Vietnamese",
    direction: "ltr"
  }, {
    tag: "id",
    endonym: "Bahasa Indonesia",
    englishName: "Indonesian",
    direction: "ltr"
  }, {
    tag: "ur",
    endonym: "\u0627\u0631\u062F\u0648",
    englishName: "Urdu",
    direction: "rtl"
  }, {
    tag: "th",
    endonym: "\u0E44\u0E17\u0E22",
    englishName: "Thai",
    direction: "ltr"
  }, {
    tag: "bn",
    endonym: "\u09AC\u09BE\u0982\u09B2\u09BE",
    englishName: "Bengali",
    direction: "ltr"
  }, {
    tag: "cs",
    endonym: "\u010Ce\u0161tina",
    englishName: "Czech",
    direction: "ltr"
  }, {
    tag: "hu",
    endonym: "Magyar",
    englishName: "Hungarian",
    direction: "ltr"
  }, {
    tag: "nb",
    endonym: "Norsk bokm\xE5l",
    englishName: "Norwegian Bokm\xE5l",
    direction: "ltr"
  }, {
    tag: "da",
    endonym: "Dansk",
    englishName: "Danish",
    direction: "ltr"
  }, {
    tag: "fi",
    endonym: "Suomi",
    englishName: "Finnish",
    direction: "ltr"
  }];
  const Ds: any = ((ws as any).map as any)((e: any): any => (e as any).tag);
  const Ls: any = ["system", ...Ds];
  function ir(this: any, e: any): any {
    return (typeof e as any) == ("string" as any) && ((Ls as any).includes as any)(e);
  }
  function Ms(this: any, e: any): any {
    if ((typeof e as any) != ("string" as any)) return null;
    let n: any = ((/^tile-([1-9]\d{1,3})$/ as any).exec as any)(e);
    if ((n as any) == (null as any)) return null;
    let o: any = (Number as any)((n as any)[1]);
    return (o as any) >= (16 as any) && (o as any) <= (1024 as any) ? o : null;
  }
  function vs(this: any, e: any): any {
    return ((Ms as any)(e) as any) != (null as any);
  }
  function sr(this: any, e: any): any {
    return (e as any) === ("preview" as any) || (e as any) === ("original" as any) || (vs as any)(e);
  }
  const Tn: number = 1500;
  function dr(this: any, e: any): any {
    let n: any = ((e as any).trim as any)();
    return ((n as any).length as any) === (0 as any) ? "empty" : ((n as any).length as any) > (Tn as any) ? "too-long" : "ok";
  }
  function $(this: any, e: any, n: any): any {
    return (n as any) === ("absent" as any) || (n as any) === ("unrecognized" as any) ? n : ((e as any).find as any)((o: any): any => (o as any) === (n as any)) ?? "unrecognized";
  }
  const xn: any = ["not_configured", "unsupported_model", "rejected", "unreachable", "malformed_response"];
  const Pn: any = ["429", "401", "403", "503"];
  const mr: any = ["invalid_request_error", "server_error", "authentication_error", "rate_limit_error"];
  const Sr: any = ["internal_error", "async_not_enabled", "invalid_request_error", "missing_tool_call_results"];
  const yr: any = ["async_update_add", "response_cancel"];
  const gr: any = ["1008", "1006", "1011", "1000"];
  const fr: any = ["connecting", "live"];
  const _r: any = ["sent", "sent_after_wait", "carried_by_live_response", "folded", "dropped_line_dead", "dropped_caller_holds", "dropped_caller_barged_in", "dropped_answered_live", "dropped_superseded", "dropped_call_closed"];
  const Er: any = ["outcome", "greeting", "steer", "bare"];
  function ce(this: any, e: any): any {
    return (typeof e as any) == ("number" as any) && ((Number as any).isSafeInteger as any)(e) && (e as any) >= (0 as any);
  }
  function $s(this: any, e: any): any {
    return ($ as any)(fr, e);
  }
  function qs(this: any, e: any): any {
    return (e as any) === (!0 as any) ? !0 : (e as any) === (!1 as any) ? !1 : "absent";
  }
  function j(this: any, e: any, n: any): any {
    return n in e ? (e as any)[n] : void 0;
  }
  function Xs(this: any, e: any): any {
    return ((j as any)(e, "fault_class") as any) !== (void 0 as any) || ((j as any)(e, "fault_code") as any) !== (void 0 as any) || ((j as any)(e, "fault_about") as any) !== (void 0 as any);
  }
  function $e(this: any, e: any, n: any): any {
    let o: any = (j as any)(e, "fault_stage");
    return !n && (o as any) === (void 0 as any) ? {} : {
      fault_stage: ($s as any)(o)
    };
  }
  function zs(this: any, e: any): any {
    if ((typeof e as any) != ("object" as any) || (e as any) === (null as any) || ((Array as any).isArray as any)(e) || !("call_id" in e) || (typeof (e as any).call_id as any) != ("string" as any) || (((e as any).call_id as any).length as any) !== (41 as any) || !((/^call-[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i as any).test as any)((e as any).call_id) || !("telemetry_version" in e) || ((e as any).telemetry_version as any) !== ("1" as any) || !("phase" in e)) return;
    let n: any = {
      call_id: (e as any).call_id,
      telemetry_version: (e as any).telemetry_version
    };
    switch ((e as any).phase) {
      case "started":
        return {
          ...n,
          phase: (e as any).phase
        };
      case "connected":
        return !("elapsed_ms" in e) || !(ce as any)((e as any).elapsed_ms) ? void 0 : {
          ...n,
          phase: (e as any).phase,
          elapsed_ms: (e as any).elapsed_ms
        };
      case "usage":
        return !("active_ms" in e) || !(ce as any)((e as any).active_ms) || !("sequence" in e) || !(ce as any)((e as any).sequence) ? void 0 : {
          ...n,
          phase: (e as any).phase,
          active_ms: (e as any).active_ms,
          sequence: (e as any).sequence
        };
      case "first_audio":
        return !("trigger" in e) || ((e as any).trigger as any) !== ("call_start" as any) && ((e as any).trigger as any) !== ("user_speech" as any) || !("ttfa_ms" in e) || !(ce as any)((e as any).ttfa_ms) ? void 0 : {
          ...n,
          phase: (e as any).phase,
          trigger: (e as any).trigger,
          ttfa_ms: (e as any).ttfa_ms
        };
      case "ui_opened":
        return !("surface" in e) || ((e as any).surface as any) !== ("full_menu" as any) && ((e as any).surface as any) !== ("transcript" as any) ? void 0 : {
          ...n,
          phase: (e as any).phase,
          surface: (e as any).surface
        };
      case "ended":
        return !("outcome" in e) || ((e as any).outcome as any) !== ("hung_up" as any) && ((e as any).outcome as any) !== ("disconnected" as any) && ((e as any).outcome as any) !== ("failed" as any) && ((e as any).outcome as any) !== ("reset" as any) || !("connected" in e) || (typeof (e as any).connected as any) != ("boolean" as any) || !("duration_ms" in e) || !(ce as any)((e as any).duration_ms) || !("elapsed_ms" in e) || !(ce as any)((e as any).elapsed_ms) || ((e as any).duration_ms as any) > ((e as any).elapsed_ms as any) || !(e as any).connected && ((e as any).duration_ms as any) !== (0 as any) ? void 0 : {
          ...n,
          phase: (e as any).phase,
          outcome: (e as any).outcome,
          connected: (e as any).connected,
          duration_ms: (e as any).duration_ms,
          elapsed_ms: (e as any).elapsed_ms
        };
      case "fault":
        {
          if (!("fault_kind" in e)) return;
          if (((e as any).fault_kind as any) === ("tool" as any) || ((e as any).fault_kind as any) === ("relay" as any)) return {
            ...n,
            phase: (e as any).phase,
            fault_kind: (e as any).fault_kind,
            ...($e as any)(e, !1)
          };
          if (((e as any).fault_kind as any) === ("mint" as any)) return {
            ...n,
            phase: (e as any).phase,
            fault_kind: "mint",
            fault_reason: ($ as any)(xn, (j as any)(e, "fault_reason")),
            fault_http: ($ as any)(Pn, (j as any)(e, "fault_http")),
            ...($e as any)(e, !0)
          };
          if (((e as any).fault_kind as any) === ("socket" as any)) return {
            ...n,
            phase: (e as any).phase,
            fault_kind: "socket",
            fault_close: ($ as any)(gr, (j as any)(e, "fault_close")),
            fault_clean: (qs as any)((j as any)(e, "fault_clean")),
            ...($e as any)(e, !0)
          };
          if (((e as any).fault_kind as any) !== ("protocol" as any)) return;
          let o: any = {
            ...n,
            phase: (e as any).phase,
            fault_kind: (e as any).fault_kind
          };
          return (Xs as any)(e) ? {
            ...o,
            fault_class: ($ as any)(mr, (j as any)(e, "fault_class")),
            fault_code: ($ as any)(Sr, (j as any)(e, "fault_code")),
            fault_about: ($ as any)(yr, (j as any)(e, "fault_about")),
            ...($e as any)(e, !1)
          } : o;
        }
      default:
        return;
    }
  }
  function Ar(this: any, e: any): any {
    let n: any = (zs as any)(e);
    if ((n as any) === (void 0 as any) || (typeof e as any) != ("object" as any) || (e as any) === (null as any) || ((n as any).phase as any) === ("fault" as any) && ((n as any).fault_kind as any) === ("protocol" as any) && !("fault_class" in n)) return !1;
    let o: any = {
      ...e
    };
    return ((((Object as any).keys as any)(o) as any).length as any) === ((((Object as any).keys as any)(n) as any).length as any) && ((((Object as any).entries as any)(n) as any).every as any)(([i, d]: any): any => ((Object as any).hasOwn as any)(o, i) && ((o as any)[i] as any) === (d as any));
  }
  const Js: any = ["unspecified", "none", "teamPrivacyMode", "teamSetupRequired", "teamAccessRequired", "notOffered", "freeTrialAvailable", "paywallIndividual", "paywallTeamMember", "paywallTeamAdmin"];
  const Qs: any = new (Set as any)(Js);
  function hr(this: any, e: any): any {
    return (typeof e as any) == ("string" as any) && ((Qs as any).has as any)(e);
  }
  const wn: any = ["message", "tool-call", "send-message", "user-attachment", "notice", "event", "feedback", "voice-call", "mcp-app"];
  const Rr: any = ["ready", "superseded", "failed"];
  const Tr: any = ["entered", "retry", "recovered", "waking"];
  const br: any = ["started", "recovered", "exhausted", "refused"];
  const Cr: any = ["waking", "first_load_retry"];
  const kr: any = ["retry", "recover", "reset", "relaunch"];
  const Ir: any = ["update", "reset", "recover", "reconnecting"];
  const Or: any = ["taking-longer", "unreachable"];
  const Nr: any = ["shown", "keep_waiting", "retry"];
  const xr: any = ["roster", "transcript"];
  const Pr: any = ["covered", "superseded", "abandoned"];
  const wr: any = ["dispatched", "retired", "parked", "failed"];
  const Dr: any = ["queued", "prepared", "dispatching", "accepted-awaiting-echo"];
  const Lr: any = ["install", "delta", "older-page"];
  const Mr: any = wn;
  const vr: any = ["window-installed", "seed-in-flight", "server-tail"];
  const Ur: any = ["shadow-compare", "store-first", "server-tail"];
  const Vr: any = ["entered", "recovered"];
  const Gr: any = ["wrong_account_suspected", "seat_revoked", "plan_expired", "no_plan", "unknown"];
  const Fr: any = ["setup", "recreate"];
  const Hr: any = ["ready", "failed", "connectivity", "abandoned"];
  const Kr: any = ["cold_create", "first_connect", "manual_update", "manual_reset", "auto_update", "remote_reset", "reconnect"];
  const jr: any = ["begin", "heartbeat", "end", "stage_transition"];
  const Wr: any = ["foreground", "background"];
  const Yr: any = ["acked", "failed", "timeout", "queued_offline"];
  const $r: any = ["landed", "timeout"];
  const qr: any = ["preview", "interactive"];
  const Xr: any = ["navigate", "dom_ready", "load_fail", "rfb_connect", "rfb_disconnect", "reconnect", "focus"];
  const zr: any = ["vnc", "composer", "pending"];
  const Jr: any = ["preview", "handoff", "teach"];
  const Dn: any = ["success", "cancelled", "error"];
  const Zr: any = ["action_required", "bot_block", "pipeline", "agent"];
  const Qr: any = ["user_form", "none"];
  const eo: any = ["assistant_text", "send_message", "tool_call"];
  const no: any = ["rendered", "timeout", "switched"];
  const to: any = ["turn_ended", "switched", "superseded", "timeout"];
  const ro: any = ["footer_pill", "account_menu", "palette", "settings", "blocker"];
  const oo: any = ["shown", "clicked", "confirmed", "canceled", "refused_superseded"];
  const ao: any = ["check", "progress", "ready", "error", "disabled"];
  const io: any = ["clicked", "opened", "load_failed"];
  const so: any = ["document", "canvas"];
  const lo: any = ["chat_card", "chat_link", "library"];
  const co: any = ["pointer", "focus", "key"];
  const uo: any = ["shown", "dismissed", "get_more_usage"];
  const po: any = ["pin", "unpin", "move_to_section", "move_to_new_section", "mark_read", "mark_unread", "rename", "copy_link", "copy_conversation_id", "show_full_conversation", "show_async_tasks", "hide_from_sidebar", "unhide_from_sidebar", "delete", "replace_main_agent"];
  const mo: any = ["context_menu"];
  const So: any = ["shell", "onboarding", "sign-in"];
  const yo: any = ["veto-seen", "veto-roster", "fresh", "fail-open-probes", "fail-open-deadline"];
  const go: any = ["seen-probe", "agent-probe", "deadline"];
  const fo: any = ["meet", "computer-demo", "jobs", "role", "tools", "create", "hand-off"];
  const _o: any = ["forward", "back"];
  const Eo: any = ["failed", "recovered"];
  const Ao: any = ["tick-failed", "run-failed"];
  const ho: any = ["app", "chat_screen", "info_pane", "transcript_row", "mermaid", "other"];
  const ue: any = {
    nonceMismatch: "SAND-E0703",
    capabilityUnavailable: "SAND-E0704",
    hostRejected: "SAND-E0705",
    superseded: "SAND-E0706",
    ackExpired: "SAND-E0707"
  };
  const ed: any = ["bot-templates.deleted-shares", "client-meta.account-slot", "cloud-agents.infos", "composer-drafts", "host-settings.onboarding", "roster.agent-avatars", "roster.last-roster", "selection.last-agent", "send-journal", "sidebar.last-sections", "transcript.replicas", "ui-agent-refs", "ui-layout", "usage-warning.dismissal", "other"];
  const nd: any = new (Set as any)(ed);
  function Ro(this: any, e: any): any {
    return (typeof e as any) == ("string" as any) && ((nd as any).has as any)(e);
  }
  const To: any = [...wn, "unknown-kind"];
  const bo: any = ["connecting_started", "mint_ok", "mint_failed", "socket_open", "socket_error", "socket_close", "session_created", "mic_granted", "mic_denied", "mic_timeout", "audible", "connecting_stuck", "connecting_abandoned"];
  const Co: any = ["account-slot", "ui-state", "voice-settings", "cloud-agent-open-target", "cloud-agent-infos", "sidebar-sections", "last-selection", "last-roster", "transcript-replicas", "composer-drafts", "send-journal", "bot-templates"];
  const ko: any = ["failed", "stuck"];
  const Io: any = ["settled", "cap", "ceiling"];
  const Oo: any = ["ok", "absent", "failed"];
  const No: any = ["hover", "card", "row"];
  const xo: any = ["cursor", "github", "gitlab", "azure", "slack", "notion", "public-web", "none"];
  const Po: any = ["fresh", "stale", "negative", "none"];
  const wo: any = ["content", "empty", "unavailable", "failed", "closed_before_settle"];
  const Do: string = "box";
  const Lo: string = "temporal";
  const qe: any = ["ECONNREFUSED", "ECONNRESET", "ECONNABORTED", "ETIMEDOUT", "EPIPE", "ENETRESET", "ENETDOWN", "ENETUNREACH", "EHOSTUNREACH", "EHOSTDOWN", "EAI_AGAIN", "ENOTFOUND", "EADDRINUSE", "EACCES", "EPERM", "ENOENT", "ENOSPC", "EDQUOT", "EROFS", "EBUSY", "EMFILE", "EIO"];
  const Mn: string = "E_OTHER";
  const vo: any = ["none", "single", "double"];
  const Ko: any = ["private", "team", "public", "unknown"];
  const $o: any = ["image", "video", "audio", "pdf", "markdown", "html", "text", "json", "table", "docx", "unknown"];
  const qo: any = /^[0-9A-Za-z.+-]{1,64}$/;
  function Xo(this: any, e: any): any {
    return (e as any) === ("stable" as any) || (e as any) === ("nightly" as any) || (e as any) === ("dogfood" as any);
  }
  const ld: string = "tool_serve";
  const cd: string = "relay";
  const zo: any = [ld, cd];
  const Jo: any = ["nudge", "recall", "hangup", "silent", "unknown"];
  const Zo: string = "memo";
  const ud: string = "[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}";
  const pd: any = new (RegExp as any)(`^${Zo}-${ud}$`, "i");
  const md: any = ((Zo as any).length as any) + (37 as any);
  function pe(this: any, e: any): any {
    return (typeof e as any) == ("number" as any) && ((Number as any).isSafeInteger as any)(e) && (e as any) >= (0 as any);
  }
  function Sd(this: any, e: any): any {
    if ((typeof e as any) != ("object" as any) || (e as any) === (null as any) || ((Array as any).isArray as any)(e) || !("memo_id" in e) || (typeof (e as any).memo_id as any) != ("string" as any) || (((e as any).memo_id as any).length as any) !== (md as any) || !((pd as any).test as any)((e as any).memo_id) || !("telemetry_version" in e) || ((e as any).telemetry_version as any) !== ("1" as any) || !("phase" in e)) return;
    let n: any = {
      memo_id: (e as any).memo_id,
      telemetry_version: (e as any).telemetry_version
    };
    switch ((e as any).phase) {
      case "offered":
        return {
          ...n,
          phase: (e as any).phase
        };
      case "started":
        return !("attempt" in e) || !(pe as any)((e as any).attempt) || ((e as any).attempt as any) < (1 as any) || !("warmth" in e) || ((e as any).warmth as any) !== ("cold" as any) && ((e as any).warmth as any) !== ("warming" as any) && ((e as any).warmth as any) !== ("ready" as any) ? void 0 : {
          ...n,
          phase: (e as any).phase,
          attempt: (e as any).attempt,
          warmth: (e as any).warmth
        };
      case "first_audio":
        return !("ttfa_ms" in e) || !(pe as any)((e as any).ttfa_ms) ? void 0 : {
          ...n,
          phase: (e as any).phase,
          ttfa_ms: (e as any).ttfa_ms
        };
      case "seek":
        return !("sequence" in e) || !(pe as any)((e as any).sequence) || ((e as any).sequence as any) < (1 as any) ? void 0 : {
          ...n,
          phase: (e as any).phase,
          sequence: (e as any).sequence
        };
      case "transcript":
        return !("action" in e) || ((e as any).action as any) !== ("expanded" as any) && ((e as any).action as any) !== ("collapsed" as any) ? void 0 : {
          ...n,
          phase: (e as any).phase,
          action: (e as any).action
        };
      case "ended":
        return !("outcome" in e) || ((e as any).outcome as any) !== ("completed" as any) && ((e as any).outcome as any) !== ("stopped" as any) && ((e as any).outcome as any) !== ("preempted" as any) && ((e as any).outcome as any) !== ("navigated" as any) && ((e as any).outcome as any) !== ("gate_off" as any) && ((e as any).outcome as any) !== ("superseded" as any) && ((e as any).outcome as any) !== ("failed" as any) && ((e as any).outcome as any) !== ("not_entitled" as any) && ((e as any).outcome as any) !== ("disposed" as any) || !("heard_audio" in e) || (typeof (e as any).heard_audio as any) != ("boolean" as any) || !("listened_ms" in e) || !(pe as any)((e as any).listened_ms) || !("audio_ms" in e) || !(pe as any)((e as any).audio_ms) || ((e as any).listened_ms as any) > ((e as any).audio_ms as any) || !("elapsed_ms" in e) || !(pe as any)((e as any).elapsed_ms) ? void 0 : {
          ...n,
          phase: (e as any).phase,
          outcome: (e as any).outcome,
          heard_audio: (e as any).heard_audio,
          listened_ms: (e as any).listened_ms,
          audio_ms: (e as any).audio_ms,
          elapsed_ms: (e as any).elapsed_ms
        };
      case "fault":
        return !("fault_kind" in e) || ((e as any).fault_kind as any) !== ("synthesis" as any) && ((e as any).fault_kind as any) !== ("playback" as any) && ((e as any).fault_kind as any) !== ("prefetch" as any) && ((e as any).fault_kind as any) !== ("empty_text" as any) && ((e as any).fault_kind as any) !== ("dictation_active" as any) && ((e as any).fault_kind as any) !== ("call_active" as any) && ((e as any).fault_kind as any) !== ("not_entitled" as any) ? void 0 : {
          ...n,
          phase: (e as any).phase,
          fault_kind: (e as any).fault_kind
        };
      default:
        return;
    }
  }
  function Qo(this: any, e: any): any {
    let n: any = (Sd as any)(e);
    return (n as any) !== (void 0 as any) && (typeof e as any) == ("object" as any) && (e as any) !== (null as any) && ((((Object as any).keys as any)(e) as any).length as any) === ((((Object as any).keys as any)(n) as any).length as any) && ((((Object as any).keys as any)(n) as any).every as any)((o: any): any => ((Object as any).hasOwn as any)(e, o));
  }
  const yd: any = ["engineering", "design", "marketing", "customer-support", "product", "ops-finance", "recruiting-people", "sales", "productivity"];
  const gd: any = new (Set as any)(yd);
  function ea(this: any, e: any): any {
    return ((gd as any).has as any)(e);
  }
  const Un: any = ["workspace", "slack", "notion", "salesforce", "microsoft-365", "linkedin", "zoom", "github", "cursor", "jira", "figma", "hubspot", "canva", "trello", "monday", "clickup", "intercom", "zendesk", "box", "dropbox", "docusign", "calendly", "loom", "outreach", "salesloft", "apollo", "clay", "zoominfo", "nooks", "stripe", "shopify", "quickbooks", "netsuite", "ramp", "workday", "rippling", "ashby", "greenhouse", "vercel", "tableau", "hex", "amplitude", "mixpanel", "snowflake", "databricks", "mailchimp"];
  const fd: any = new (Set as any)(Un);
  function na(this: any, e: any): any {
    return ((fd as any).has as any)(e);
  }
  const Ed: any = /^<REDACTED: [A-Za-z ,-]+>$/;
  const Ad: any = /^[A-Za-z0-9._:@-]+$/;
  function hd(this: any, e: any, n: any = 128): any {
    if (!((typeof e as any) != ("string" as any) || ((e as any).length as any) === (0 as any) || ((e as any).length as any) > (n as any))) return ((Ad as any).test as any)(e) ? e : void 0;
  }
  function Rd(this: any, e: any): any {
    let n: any = (hd as any)(e);
    if ((n as any) !== (void 0 as any)) return ((bd as any)(n) as any) === (n as any) ? n : void 0;
  }
  function Xe(this: any, e: any): any {
    return ((Rd as any)(e) as any) !== (void 0 as any);
  }
  const Td: any = [{
    label: "Google API Key",
    regex: /AIza[A-Za-z0-9_\\\-]{35}/
  }, {
    label: "Slack Token",
    regex: /xox[pbar]\-[A-Za-z0-9]/
  }, {
    label: "GitHub Token",
    regex: /(gh[psuro]_[a-zA-Z0-9]{36}|github_pat_[a-zA-Z0-9]{22}_[a-zA-Z0-9]{59})/
  }, {
    label: "Generic Secret",
    regex: /(key|token|sig|secret|signature|password|passwd|pwd|android:value)[^a-zA-Z0-9]/i
  }, {
    label: "CLI Credentials",
    regex: /((login|psexec|(certutil|psexec)\.exe).{1,50}(\s-u(ser(name)?)?\s+.{3,100})?\s-(admin|user|vm|root)?p(ass(word)?)?\s+["']?[^$\-\/\s]|(^|[\s\r\n\\])net(\.exe)?.{1,5}(user\s+|share\s+\/user:| user -? secrets ? set) \s + [^ $\s \/])/
  }, {
    label: "Microsoft Entra ID",
    regex: /eyJ(?:0eXAiOiJKV1Qi|hbGci|[a-zA-Z0-9\-_]+\.[a-zA-Z0-9\-_]+\.)/
  }, {
    label: "Email",
    regex: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/
  }];
  function bd(this: any, e: any): any {
    if (!e || ((Ed as any).test as any)(e)) return e;
    for (let {
      label: n,
      regex: o
    } of Td) if (((o as any).test as any)(e)) return `<REDACTED: ${n}>`;
    return e;
  }
  const ta: any = ["chat", "agent-exchange"];
  const ra: any = ["install", "cards", "boundary", "edge", "prepend", "live"];
  const ze: any = ["entry:message", "entry:send-message", "entry:event", "entry:notice", "entry:feedback", "entry:voice-call", "entry:user-attachment", "entry:spend-initiation", "entry:other", "timestamp", "unread-divider", "attachment-group", "agent-comm-group", "routine-event-group", "cloud-agent-group", "other"];
  const oa: any = ["Error", "TypeError", "RangeError", "ReferenceError", "SyntaxError", "EvalError", "URIError", "AggregateError", "SandInvariantViolation", "other"];
  function S(this: any, e: any): any {
    return (typeof e as any) == ("number" as any) && ((Number as any).isFinite as any)(e) && (e as any) >= (0 as any);
  }
  function w(this: any, e: any): any {
    return (e as any) === (void 0 as any) || (S as any)(e);
  }
  function _(this: any, e: any): any {
    return (e as any) === (void 0 as any) || (typeof e as any) == ("string" as any);
  }
  function q(this: any, e: any): any {
    return (e as any) === (void 0 as any) || (typeof e as any) == ("boolean" as any);
  }
  function Se(this: any, e: any): any {
    return (typeof e as any) == ("number" as any) && ((Number as any).isInteger as any)(e) && (e as any) >= (1 as any);
  }
  function ee(this: any, e: any): any {
    return (typeof e as any) == ("number" as any) && ((Number as any).isInteger as any)(e) && (e as any) >= (0 as any);
  }
  function aa(this: any, e: any, n: any): any {
    return (typeof e as any) == ("string" as any) && ((e as any).length as any) > (0 as any) && ((e as any).length as any) <= (n as any);
  }
  const Cd: any = new (Set as any)(Rr);
  const la: any = {
    durationMs: !0,
    openRpcMs: !0,
    queueMs: !0,
    renderMs: !0,
    cold: !0,
    stale: !0,
    boxState: !0,
    outcome: !0
  };
  function ca(this: any, e: any): any {
    return (l as any)(e) ? (S as any)((e as any).durationMs) && (w as any)((e as any).openRpcMs) && (w as any)((e as any).queueMs) && (w as any)((e as any).renderMs) && (typeof (e as any).cold as any) == ("boolean" as any) && (q as any)((e as any).stale) && (typeof (e as any).boxState as any) == ("string" as any) && (typeof (e as any).outcome as any) == ("string" as any) && ((Cd as any).has as any)((e as any).outcome) : !1;
  }
  const kd: any = new (Set as any)(Vr);
  const Id: any = new (Set as any)(Gr);
  const ua: any = {
    edge: !0,
    cause: !0,
    accessReason: !0,
    msBlocked: !0
  };
  function pa(this: any, e: any): any {
    return (l as any)(e) ? (typeof (e as any).edge as any) == ("string" as any) && ((kd as any).has as any)((e as any).edge) && (typeof (e as any).cause as any) == ("string" as any) && ((Id as any).has as any)((e as any).cause) && (hr as any)((e as any).accessReason) && (w as any)((e as any).msBlocked) : !1;
  }
  const Od: any = new (Set as any)(Tr);
  const Nd: any = new (Set as any)(br);
  const xd: any = new (Set as any)(Cr);
  const ma: any = {
    phase: !0,
    isManual: !0,
    errorClass: !0,
    msSinceLastReachedMs: !0,
    outcome: !0,
    reason: !0,
    durationMs: !0,
    heldMs: !0
  };
  function Sa(this: any, e: any): any {
    return (l as any)(e) ? (typeof (e as any).phase as any) == ("string" as any) && ((Od as any).has as any)((e as any).phase) && (typeof (e as any).isManual as any) == ("boolean" as any) && (_ as any)((e as any).errorClass) && (w as any)((e as any).msSinceLastReachedMs) && (((e as any).outcome as any) === (void 0 as any) || (typeof (e as any).outcome as any) == ("string" as any) && ((Nd as any).has as any)((e as any).outcome)) && (((e as any).reason as any) === (void 0 as any) || (typeof (e as any).reason as any) == ("string" as any) && ((xd as any).has as any)((e as any).reason)) && (w as any)((e as any).durationMs) && (w as any)((e as any).heldMs) : !1;
  }
  const Pd: any = new (Set as any)(kr);
  const wd: any = /^[a-z0-9_]{1,64}$/i;
  const ya: any = {
    action: !0,
    failureClass: !0,
    consecutiveIdentical: !0
  };
  function ga(this: any, e: any): any {
    return (l as any)(e) ? (typeof (e as any).action as any) == ("string" as any) && ((Pd as any).has as any)((e as any).action) && (typeof (e as any).failureClass as any) == ("string" as any) && ((wd as any).test as any)((e as any).failureClass) && (Se as any)((e as any).consecutiveIdentical) : !1;
  }
  const Dd: any = new (Set as any)(Ir);
  const Ld: any = new (Set as any)(Or);
  const Md: any = new (Set as any)(Nr);
  const vd: any = {
    escalation: {
      kind: !0,
      action: !0,
      escalation: !0,
      rebuildKind: !0,
      elapsedMs: !0
    },
    pending_stall: {
      kind: !0,
      rebuildKind: !0,
      hasAck: !0,
      streamAttached: !0,
      elapsedMs: !0
    }
  };
  const fa: any = (e: any): any => (vd as any)[(e as any).kind];
  function _a(this: any, e: any): any {
    return !(l as any)(e) || (typeof (e as any).rebuildKind as any) != ("string" as any) || !((Dd as any).has as any)((e as any).rebuildKind) || !(S as any)((e as any).elapsedMs) ? !1 : ((e as any).kind as any) === ("escalation" as any) ? (typeof (e as any).action as any) == ("string" as any) && ((Md as any).has as any)((e as any).action) && (typeof (e as any).escalation as any) == ("string" as any) && ((Ld as any).has as any)((e as any).escalation) : ((e as any).kind as any) === ("pending_stall" as any) ? (typeof (e as any).hasAck as any) == ("boolean" as any) && (typeof (e as any).streamAttached as any) == ("boolean" as any) : !1;
  }
  const Ud: any = new (Set as any)(xr);
  const Bd: any = new (Set as any)(Pr);
  const Vd: any = new (Set as any)(wr);
  const Gd: any = new (Set as any)(Dr);
  const Fd: any = new (Set as any)(Ur);
  const Hd: any = new (Set as any)(vr);
  const Kd: any = new (Set as any)(Lr);
  const jd: any = new (Set as any)([Do, Lo]);
  const Wd: any = new (Set as any)(Mr);
  function Yd(this: any, e: any): any {
    return (l as any)(e) ? (S as any)((e as any).gatewayEntries) && (S as any)((e as any).storeEntries) && (S as any)((e as any).matched) && (S as any)((e as any).mismatched) && (S as any)((e as any).missing) && (S as any)((e as any).extra) && (S as any)((e as any).staleTail) && (typeof (e as any).readReason as any) == ("string" as any) && ((Fd as any).has as any)((e as any).readReason) && (typeof (e as any).painted as any) == ("boolean" as any) : !1;
  }
  const $d: any = {
    replica_resync: {
      kind: !0,
      replica: !0,
      outcome: !0,
      attempts: !0,
      durationMs: !0,
      bufferOverflowed: !0,
      epochChanged: !0
    },
    send_journal_restore: {
      kind: !0,
      outcome: !0,
      phase: !0,
      ageMs: !0,
      recordCount: !0
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
      staleTail: !0
    },
    transcript_store_first_skip: {
      kind: !0,
      agentId: !0,
      skipReason: !0
    },
    transcript_window_rows_hidden: {
      kind: !0,
      agentId: !0,
      reason: !0,
      harness: !0,
      rowKind: !0,
      hiddenRows: !0,
      twinIds: !0
    }
  };
  const Ea: any = (e: any): any => ($d as any)[(e as any).kind];
  function Aa(this: any, e: any): any {
    return (l as any)(e) ? ((e as any).kind as any) === ("replica_resync" as any) ? (typeof (e as any).replica as any) == ("string" as any) && ((Ud as any).has as any)((e as any).replica) && (typeof (e as any).outcome as any) == ("string" as any) && ((Bd as any).has as any)((e as any).outcome) && (S as any)((e as any).attempts) && (S as any)((e as any).durationMs) && (typeof (e as any).bufferOverflowed as any) == ("boolean" as any) && (typeof (e as any).epochChanged as any) == ("boolean" as any) : ((e as any).kind as any) === ("send_journal_restore" as any) ? (typeof (e as any).outcome as any) == ("string" as any) && ((Vd as any).has as any)((e as any).outcome) && (typeof (e as any).phase as any) == ("string" as any) && ((Gd as any).has as any)((e as any).phase) && (S as any)((e as any).ageMs) && (S as any)((e as any).recordCount) : ((e as any).kind as any) === ("transcript_store_parity" as any) ? (typeof (e as any).agentId as any) == ("string" as any) && (((e as any).agentId as any).length as any) > (0 as any) && (Yd as any)(e) : ((e as any).kind as any) === ("transcript_store_first_skip" as any) ? (typeof (e as any).agentId as any) == ("string" as any) && (((e as any).agentId as any).length as any) > (0 as any) && (typeof (e as any).skipReason as any) == ("string" as any) && ((Hd as any).has as any)((e as any).skipReason) : ((e as any).kind as any) === ("transcript_window_rows_hidden" as any) ? (typeof (e as any).agentId as any) == ("string" as any) && (((e as any).agentId as any).length as any) > (0 as any) && (typeof (e as any).reason as any) == ("string" as any) && ((Kd as any).has as any)((e as any).reason) && (typeof (e as any).harness as any) == ("string" as any) && ((jd as any).has as any)((e as any).harness) && (typeof (e as any).rowKind as any) == ("string" as any) && ((Wd as any).has as any)((e as any).rowKind) && (S as any)((e as any).hiddenRows) && (S as any)((e as any).twinIds) : !1 : !1;
  }
  const qd: any = new (Set as any)(Fr);
  const Xd: any = new (Set as any)(jr);
  const zd: any = new (Set as any)(Kr);
  const Jd: any = new (Set as any)(Hr);
  const Zd: any = new (Set as any)(Wr);
  function ke(this: any, e: any, n: any): any {
    return (e as any) === (void 0 as any) || (typeof e as any) == ("string" as any) && ((n as any).has as any)(e);
  }
  const ha: any = {
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
    stageElapsedMs: !0
  };
  function Ra(this: any, e: any): any {
    return (l as any)(e) ? (typeof (e as any).event as any) == ("string" as any) && ((qd as any).has as any)((e as any).event) && (typeof (e as any).phase as any) == ("string" as any) && ((Xd as any).has as any)((e as any).phase) && (ke as any)((e as any).trigger, zd) && (ke as any)((e as any).outcome, Jd) && (_ as any)((e as any).operationId) && (_ as any)((e as any).kind) && (ke as any)((e as any).surface, Zd) && (_ as any)((e as any).stage) && (_ as any)((e as any).migrationPhase) && (_ as any)((e as any).fromStage) && (w as any)((e as any).stageElapsedMs) : !1;
  }
  const Ta: any = {
    durationMs: !0,
    commitMs: !0,
    attachmentCount: !0,
    isFork: !0,
    traceId: !0,
    spanId: !0,
    conversationId: !0
  };
  function ba(this: any, e: any): any {
    return (l as any)(e) ? (S as any)((e as any).durationMs) && (w as any)((e as any).commitMs) && (S as any)((e as any).attachmentCount) && (typeof (e as any).isFork as any) == ("boolean" as any) && (_ as any)((e as any).traceId) && (_ as any)((e as any).spanId) && (_ as any)((e as any).conversationId) : !1;
  }
  const Qd: any = new (Set as any)(Yr);
  const Ca: any = {
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
    didReachDeadline: !0
  };
  function ka(this: any, e: any): any {
    return (l as any)(e) ? (S as any)((e as any).ackMs) && (typeof (e as any).outcome as any) == ("string" as any) && ((Qd as any).has as any)((e as any).outcome) && (S as any)((e as any).enterEpochMs) && (_ as any)((e as any).traceparent) && (_ as any)((e as any).traceId) && (_ as any)((e as any).spanId) && (_ as any)((e as any).clientNonce) && (_ as any)((e as any).conversationId) && (typeof (e as any).isFork as any) == ("boolean" as any) && (S as any)((e as any).attachmentCount) && (w as any)((e as any).commitOffsetMs) && (w as any)((e as any).commitMs) && (q as any)((e as any).clientOnlineAtTimeout) && (q as any)((e as any).didReachDeadline) : !1;
  }
  const el: any = /^[0-9A-Za-z._-]{1,64}$/;
  function Je(this: any, e: any): any {
    return (e as any) === (void 0 as any) || (typeof e as any) == ("string" as any) && ((el as any).test as any)(e);
  }
  const Ia: any = {
    clientNonce: !0,
    conversationId: !0,
    enterEpochMs: !0,
    isFork: !0,
    attachmentCount: !0,
    hasMessageText: !0,
    traceId: !0,
    spanId: !0
  };
  function Oa(this: any, e: any): any {
    return (l as any)(e) ? (typeof (e as any).clientNonce as any) == ("string" as any) && (((e as any).clientNonce as any).length as any) > (0 as any) && (typeof (e as any).conversationId as any) == ("string" as any) && (S as any)((e as any).enterEpochMs) && (typeof (e as any).isFork as any) == ("boolean" as any) && (S as any)((e as any).attachmentCount) && (typeof (e as any).hasMessageText as any) == ("boolean" as any) && (_ as any)((e as any).traceId) && (_ as any)((e as any).spanId) : !1;
  }
  const nl: any = new (Set as any)(Dn);
  const tl: any = new (Set as any)(Zr);
  const rl: any = new (Set as any)(Qr);
  const Na: any = {
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
    spanId: !0
  };
  function xa(this: any, e: any): any {
    return (l as any)(e) ? (typeof (e as any).outcome as any) == ("string" as any) && ((nl as any).has as any)((e as any).outcome) && (((e as any).errorType as any) === (void 0 as any) || (typeof (e as any).errorType as any) == ("string" as any) && ((tl as any).has as any)((e as any).errorType)) && (Je as any)((e as any).errorCode) && (Je as any)((e as any).registryCode) && (Je as any)((e as any).errorDomain) && (q as any)((e as any).errorRetryable) && (Je as any)((e as any).siteBlockFamily) && (((e as any).siteBlockConfidence as any) === (void 0 as any) || ((e as any).siteBlockConfidence as any) === ("high" as any) || ((e as any).siteBlockConfidence as any) === ("low" as any)) && (typeof (e as any).userAction as any) == ("string" as any) && ((rl as any).has as any)((e as any).userAction) && (((e as any).settleBasis as any) === ("host" as any) || ((e as any).settleBasis as any) === ("client" as any)) && (typeof (e as any).reconnected as any) == ("boolean" as any) && (S as any)((e as any).durationMs) && (typeof (e as any).clientNonce as any) == ("string" as any) && (((e as any).clientNonce as any).length as any) > (0 as any) && (typeof (e as any).conversationId as any) == ("string" as any) && (typeof (e as any).isFork as any) == ("boolean" as any) && (_ as any)((e as any).traceId) && (_ as any)((e as any).spanId) : !1;
  }
  const ol: any = new (Set as any)($r);
  const Pa: any = {
    ackMs: !0,
    outcome: !0,
    conversationId: !0,
    emoji: !0
  };
  function wa(this: any, e: any): any {
    return (l as any)(e) ? (S as any)((e as any).ackMs) && (typeof (e as any).outcome as any) == ("string" as any) && ((ol as any).has as any)((e as any).outcome) && (aa as any)((e as any).conversationId, 256) && (aa as any)((e as any).emoji, 64) : !1;
  }
  const al: any = new (Set as any)(qr);
  const il: any = new (Set as any)(Xr);
  const sl: any = new (Set as any)(zr);
  const Da: any = {
    surface: !0,
    phase: !0,
    vncHost: !0,
    display: !0,
    durationMs: !0,
    sinceOpenMs: !0,
    failCode: !0,
    clean: !0,
    focusOwner: !0,
    focusLanded: !0
  };
  function La(this: any, e: any): any {
    return (l as any)(e) ? (typeof (e as any).surface as any) == ("string" as any) && ((al as any).has as any)((e as any).surface) && (typeof (e as any).phase as any) == ("string" as any) && ((il as any).has as any)((e as any).phase) && (_ as any)((e as any).vncHost) && (_ as any)((e as any).display) && (w as any)((e as any).durationMs) && (w as any)((e as any).sinceOpenMs) && (_ as any)((e as any).failCode) && (q as any)((e as any).clean) && (ke as any)((e as any).focusOwner, sl) && (q as any)((e as any).focusLanded) : !1;
  }
  const dl: any = new (Set as any)(Jr);
  const Ma: any = {
    trigger: !0,
    hadVncUrl: !0,
    monitorFocused: !0
  };
  function va(this: any, e: any): any {
    return (l as any)(e) ? (typeof (e as any).trigger as any) == ("string" as any) && ((dl as any).has as any)((e as any).trigger) && (typeof (e as any).hadVncUrl as any) == ("boolean" as any) && (typeof (e as any).monitorFocused as any) == ("boolean" as any) : !1;
  }
  const ll: any = new (Set as any)(no);
  const cl: any = new (Set as any)(to);
  const ul: any = new (Set as any)(eo);
  const Ua: any = {
    ttfrMs: !0,
    outcome: !0,
    chunkType: !0,
    enterEpochMs: !0,
    traceparent: !0,
    traceId: !0,
    spanId: !0,
    clientNonce: !0,
    conversationId: !0,
    isFork: !0
  };
  function Ba(this: any, e: any): any {
    return (l as any)(e) ? (S as any)((e as any).ttfrMs) && (typeof (e as any).outcome as any) == ("string" as any) && ((ll as any).has as any)((e as any).outcome) && (ke as any)((e as any).chunkType, ul) && (S as any)((e as any).enterEpochMs) && (_ as any)((e as any).traceparent) && (_ as any)((e as any).traceId) && (_ as any)((e as any).spanId) && (_ as any)((e as any).clientNonce) && (_ as any)((e as any).conversationId) && (typeof (e as any).isFork as any) == ("boolean" as any) : !1;
  }
  const Va: any = {
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
    isFork: !0
  };
  function Ga(this: any, e: any): any {
    return (l as any)(e) ? (typeof (e as any).outcome as any) == ("string" as any) && ((cl as any).has as any)((e as any).outcome) && (S as any)((e as any).chunkCount) && (S as any)((e as any).maxGapMs) && (S as any)((e as any).stalledMs) && (S as any)((e as any).stallCount) && (S as any)((e as any).streamMs) && (_ as any)((e as any).traceId) && (_ as any)((e as any).spanId) && (_ as any)((e as any).clientNonce) && (_ as any)((e as any).conversationId) && (typeof (e as any).isFork as any) == ("boolean" as any) : !1;
  }
  const pl: any = new (Set as any)(ro);
  const ml: any = new (Set as any)(oo);
  const Sl: any = new (Set as any)(ao);
  const Fa: any = {
    surface: !0,
    action: !0,
    kind: !0,
    targetVersion: !0
  };
  function Ha(this: any, e: any): any {
    return (l as any)(e) ? (typeof (e as any).surface as any) == ("string" as any) && ((pl as any).has as any)((e as any).surface) && (typeof (e as any).action as any) == ("string" as any) && ((ml as any).has as any)((e as any).action) && (typeof (e as any).kind as any) == ("string" as any) && ((Sl as any).has as any)((e as any).kind) && (((e as any).targetVersion as any) === (void 0 as any) || (typeof (e as any).targetVersion as any) == ("string" as any) && ((qo as any).test as any)((e as any).targetVersion)) : !1;
  }
  const yl: any = new (Set as any)(uo);
  const gl: any = new (Set as any)(vo);
  const Ka: any = {
    action: !0,
    thresholdPercent: !0,
    policy: !0
  };
  function ja(this: any, e: any): any {
    return (l as any)(e) ? (typeof (e as any).action as any) == ("string" as any) && ((yl as any).has as any)((e as any).action) && (typeof (e as any).thresholdPercent as any) == ("number" as any) && ((Number as any).isFinite as any)((e as any).thresholdPercent) && ((e as any).thresholdPercent as any) > (0 as any) && ((e as any).thresholdPercent as any) < (100 as any) && (typeof (e as any).policy as any) == ("string" as any) && ((gl as any).has as any)((e as any).policy) : !1;
  }
  const fl: any = new (Set as any)($o);
  const _l: any = new (Set as any)(io);
  const Wa: any = {
    stage: !0,
    agentId: !0,
    bcId: !0,
    kind: !0
  };
  function Ya(this: any, e: any): any {
    return (l as any)(e) ? (typeof (e as any).stage as any) == ("string" as any) && ((_l as any).has as any)((e as any).stage) && (Xe as any)((e as any).agentId) && (Xe as any)((e as any).bcId) && (typeof (e as any).kind as any) == ("string" as any) && ((fl as any).has as any)((e as any).kind) : !1;
  }
  const El: any = new (Set as any)(so);
  const Al: any = new (Set as any)(co);
  const Bn: any = new (Set as any)(lo);
  const hl: any = new (Set as any)(Ko);
  const Rl: any = {
    opened: {
      action: !0,
      artifactType: !0,
      surface: !0,
      inGroupChat: !0,
      ageMinutes: !0
    },
    edit_attempted: {
      action: !0,
      artifactType: !0,
      surface: !0,
      inGroupChat: !0,
      canEdit: !0,
      trigger: !0
    },
    edit_saved: {
      action: !0,
      artifactType: !0,
      surface: !0,
      inGroupChat: !0
    },
    link_copied: {
      action: !0,
      artifactType: !0,
      visibility: !0
    }
  };
  const $a: any = (e: any): any => (Rl as any)[(e as any).action];
  function qa(this: any, e: any): any {
    if (!(l as any)(e) || (typeof (e as any).artifactType as any) != ("string" as any) || !((El as any).has as any)((e as any).artifactType)) return !1;
    switch ((e as any).action) {
      case "opened":
        return (typeof (e as any).surface as any) == ("string" as any) && ((Bn as any).has as any)((e as any).surface) && (typeof (e as any).inGroupChat as any) == ("boolean" as any) && (((e as any).ageMinutes as any) === (null as any) || (typeof (e as any).ageMinutes as any) == ("number" as any) && ((Number as any).isInteger as any)((e as any).ageMinutes) && ((e as any).ageMinutes as any) >= (0 as any));
      case "edit_attempted":
        return ((e as any).artifactType as any) === ("document" as any) && (typeof (e as any).surface as any) == ("string" as any) && ((Bn as any).has as any)((e as any).surface) && (typeof (e as any).inGroupChat as any) == ("boolean" as any) && (typeof (e as any).canEdit as any) == ("boolean" as any) && (typeof (e as any).trigger as any) == ("string" as any) && ((Al as any).has as any)((e as any).trigger);
      case "edit_saved":
        return ((e as any).artifactType as any) === ("document" as any) && (typeof (e as any).surface as any) == ("string" as any) && ((Bn as any).has as any)((e as any).surface) && (typeof (e as any).inGroupChat as any) == ("boolean" as any);
      case "link_copied":
        return (typeof (e as any).visibility as any) == ("string" as any) && ((hl as any).has as any)((e as any).visibility);
      default:
        return !1;
    }
  }
  const Tl: any = new (Set as any)(po);
  const bl: any = new (Set as any)(mo);
  const Xa: any = {
    action: !0,
    entrypoint: !0
  };
  function za(this: any, e: any): any {
    return (l as any)(e) ? (typeof (e as any).action as any) == ("string" as any) && ((Tl as any).has as any)((e as any).action) && (typeof (e as any).entrypoint as any) == ("string" as any) && ((bl as any).has as any)((e as any).entrypoint) : !1;
  }
  const Cl: any = new (Set as any)(So);
  const kl: any = new (Set as any)(yo);
  const Il: any = new (Set as any)(go);
  function Ja(this: any, e: any): any {
    return (typeof (e as any).gate as any) == ("string" as any) ? "gate" : (typeof (e as any).stall as any) == ("string" as any) ? "stall" : "consult";
  }
  const Ol: any = {
    gate: {
      gate: !0
    },
    stall: {
      stall: !0,
      signedIn: !0
    },
    consult: {
      consult: !0
    }
  };
  const Za: any = (e: any): any => (Ol as any)[(Ja as any)(e)];
  function Qa(this: any, e: any): any {
    if (!(l as any)(e)) return !1;
    switch ((Ja as any)(e)) {
      case "gate":
        return (typeof (e as any).gate as any) == ("string" as any) && ((Cl as any).has as any)((e as any).gate);
      case "stall":
        return (typeof (e as any).stall as any) == ("string" as any) && ((Il as any).has as any)((e as any).stall) && (((e as any).signedIn as any) === (null as any) || (typeof (e as any).signedIn as any) == ("boolean" as any));
      case "consult":
        return (typeof (e as any).consult as any) == ("string" as any) && ((kl as any).has as any)((e as any).consult);
    }
  }
  const Nl: any = new (Set as any)(fo);
  const xl: any = new (Set as any)(_o);
  const Pl: number = 16;
  const ei: any = {
    step: !0,
    stepIndex: !0,
    direction: !0
  };
  function ni(this: any, e: any): any {
    return (l as any)(e) ? (typeof (e as any).step as any) == ("string" as any) && ((Nl as any).has as any)((e as any).step) && (typeof (e as any).stepIndex as any) == ("number" as any) && ((Number as any).isInteger as any)((e as any).stepIndex) && ((e as any).stepIndex as any) >= (0 as any) && ((e as any).stepIndex as any) <= (Pl as any) && (typeof (e as any).direction as any) == ("string" as any) && ((xl as any).has as any)((e as any).direction) : !1;
  }
  const ti: any = {
    role: !0,
    tools: !0
  };
  function ri(this: any, e: any): any {
    return !(l as any)(e) || !((Array as any).isArray as any)((e as any).tools) || (((e as any).tools as any).length as any) > ((Un as any).length as any) ? !1 : (((e as any).role as any) === (void 0 as any) || (typeof (e as any).role as any) == ("string" as any) && (ea as any)((e as any).role)) && (((e as any).tools as any).every as any)((n: any): any => (typeof n as any) == ("string" as any) && (na as any)(n));
  }
  const wl: any = /^[0-9A-Za-z._/:|-]{1,64}$/;
  const Dl: any = /^[0-9A-Za-z._-]{1,128}$/;
  const Ll: any = new (Set as any)(Eo);
  const Ml: any = new (Set as any)(Ao);
  const vl: any = new (Set as any)(ho);
  const Ul: any = new (Set as any)([(ue as any).nonceMismatch, (ue as any).capabilityUnavailable, (ue as any).hostRejected]);
  const Bl: any = new (Set as any)([...qe, Mn]);
  const Vl: any = new (Set as any)(To);
  const Gl: any = new (Set as any)(["transcript"]);
  const Fl: any = new (Set as any)(ta);
  const Hl: any = new (Set as any)(ra);
  const Kl: any = new (Set as any)(ze);
  const jl: any = (ze as any).length;
  const Wl: any = new (Set as any)(oa);
  const Yl: any = new (Set as any)(bo);
  const $l: any = new (Set as any)(zo);
  const ql: any = new (Set as any)(Jo);
  const Xl: any = new (Set as any)(_r);
  const zl: any = new (Set as any)(Er);
  const Jl: any = new (Set as any)(ko);
  const Zl: any = new (Set as any)([...Co, "none"]);
  const Ql: any = new (Set as any)(Io);
  const ec: any = new (Set as any)(Oo);
  const nc: any = new (Set as any)(No);
  const tc: any = new (Set as any)(xo);
  const rc: any = new (Set as any)(Po);
  const oc: any = new (Set as any)(wo);
  const ac: number = 256;
  function F(this: any, e: any): any {
    return (typeof e as any) == ("string" as any) && ((wl as any).test as any)(e);
  }
  function me(this: any, e: any): any {
    return (e as any) === (void 0 as any) || (F as any)(e);
  }
  function oi(this: any, e: any): any {
    return (e as any) === (void 0 as any) || (typeof e as any) == ("string" as any) && ((Dl as any).test as any)(e);
  }
  function ia(this: any, e: any, n: any): any {
    return (l as any)(e) && ((e as any).code as any) === (n as any);
  }
  function sa(this: any, e: any): any {
    if (!(l as any)(e) || ((e as any).code as any) !== ("SAND-E0701" as any)) return !1;
    let n: any = (e as any).errno;
    return (n as any) === (void 0 as any) || (typeof n as any) == ("string" as any) && ((Bl as any).has as any)(n);
  }
  function ic(this: any, e: any): any {
    return (l as any)(e) ? (F as any)((e as any).domain) && (F as any)((e as any).operation) && (typeof (e as any).state as any) == ("string" as any) && ((Ll as any).has as any)((e as any).state) && (F as any)((e as any).failureCode) && (F as any)((e as any).boundary) && (me as any)((e as any).retryOwner) && (me as any)((e as any).transportKind) && (w as any)((e as any).failedMs) : !1;
  }
  function sc(this: any, e: any): any {
    return (l as any)(e) ? (typeof (e as any).boundary as any) == ("string" as any) && ((vl as any).has as any)((e as any).boundary) && (F as any)((e as any).errorClass) && (Se as any)((e as any).occurrence) : !1;
  }
  function dc(this: any, e: any): any {
    return !(l as any)(e) || !(S as any)((e as any).queuedMs) || !(S as any)((e as any).queueDepth) ? !1 : ((e as any).outcome as any) === ("delivered" as any) ? ((e as any).cause as any) === (void 0 as any) : ((e as any).outcome as any) === ("superseded" as any) ? ((e as any).cause as any) === ((ue as any).superseded as any) : ((e as any).outcome as any) === ("expired" as any) ? ((e as any).cause as any) === ((ue as any).ackExpired as any) : ((e as any).outcome as any) === ("flush_failed" as any) && (typeof (e as any).cause as any) == ("string" as any) && ((Ul as any).has as any)((e as any).cause);
  }
  function lc(this: any, e: any): any {
    return (l as any)(e) ? (((e as any).serverName as any) === (void 0 as any) || (typeof (e as any).serverName as any) == ("string" as any) && (((e as any).serverName as any).length as any) <= (ac as any)) && (me as any)((e as any).serverId) : !1;
  }
  function cc(this: any, e: any): any {
    return !(l as any)(e) || !(Ro as any)((e as any).slice) || !(w as any)((e as any).bytes) ? !1 : ((e as any).op as any) === ("writeback" as any) ? ((e as any).outcome as any) === ("ok" as any) && ((e as any).error as any) === (void 0 as any) && ((e as any).bytes as any) === (void 0 as any) : ((e as any).op as any) === ("load" as any) ? ((e as any).outcome as any) === ("ok" as any) ? ((e as any).error as any) === (void 0 as any) : ((e as any).outcome as any) === ("corrupt" as any) ? (ia as any)((e as any).error, "SAND-E0700") : ((e as any).outcome as any) === ("io_error" as any) && (sa as any)((e as any).error) : ((e as any).op as any) !== ("persist" as any) ? !1 : ((e as any).outcome as any) === ("quota" as any) ? (ia as any)((e as any).error, "SAND-E0702") : ((e as any).outcome as any) === ("io_error" as any) && (sa as any)((e as any).error);
  }
  function uc(this: any, e: any): any {
    return (l as any)(e) ? (typeof (e as any).entryKind as any) == ("string" as any) && ((Vl as any).has as any)((e as any).entryKind) && (Se as any)((e as any).occurrence) : !1;
  }
  function pc(this: any, e: any): any {
    return (l as any)(e) && ((((Object as any).keys as any)(e) as any).length as any) === (3 as any) && (((e as any).accountSlot as any) === (null as any) || (typeof (e as any).accountSlot as any) == ("string" as any) && (((e as any).accountSlot as any).length as any) > (0 as any) && (((e as any).accountSlot as any).length as any) <= (512 as any)) && (Ar as any)((e as any).event);
  }
  function mc(this: any, e: any): any {
    return (l as any)(e) ? (typeof (e as any).phase as any) == ("string" as any) && ((Yl as any).has as any)((e as any).phase) && (F as any)((e as any).callId) && (oi as any)((e as any).realtimeConversationId) && (S as any)((e as any).elapsedMs) && (me as any)((e as any).errorClass) && (w as any)((e as any).closeCode) && (q as any)((e as any).closeClean) && (q as any)((e as any).socketOpen) && (q as any)((e as any).sessionCreated) && (q as any)((e as any).micReady) && (w as any)((e as any).beat) : !1;
  }
  function Sc(this: any, e: any): any {
    return (l as any)(e) ? (typeof (e as any).fault as any) == ("string" as any) && (($l as any).has as any)((e as any).fault) && (typeof (e as any).tool as any) == ("string" as any) && ((ql as any).has as any)((e as any).tool) && (F as any)((e as any).callId) && (oi as any)((e as any).realtimeConversationId) && (F as any)((e as any).errorClass) && (me as any)((e as any).failureCode) : !1;
  }
  function yc(this: any, e: any): any {
    return (l as any)(e) ? (typeof (e as any).settlement as any) == ("string" as any) && ((Xl as any).has as any)((e as any).settlement) && (typeof (e as any).carries as any) == ("string" as any) && ((zl as any).has as any)((e as any).carries) && (F as any)((e as any).callId) : !1;
  }
  function gc(this: any, e: any): any {
    return (l as any)(e) && ((((Object as any).keys as any)(e) as any).length as any) === (3 as any) && (((e as any).accountSlot as any) === (null as any) || (typeof (e as any).accountSlot as any) == ("string" as any) && (((e as any).accountSlot as any).length as any) > (0 as any) && (((e as any).accountSlot as any).length as any) <= (512 as any)) && (Qo as any)((e as any).event);
  }
  function da(this: any, e: any, n: any): any {
    return !(ee as any)(n) || (n as any) > (jl as any) ? !1 : (n as any) === (0 as any) ? (e as any) === (void 0 as any) : (typeof e as any) == ("string" as any) && ((Kl as any).has as any)(e);
  }
  function fc(this: any, e: any): any {
    return (l as any)(e) ? (typeof (e as any).surface as any) == ("string" as any) && ((Fl as any).has as any)((e as any).surface) && (typeof (e as any).reason as any) == ("string" as any) && ((Hl as any).has as any)((e as any).reason) && (ee as any)((e as any).removedRows) && (ee as any)((e as any).insertedRows) && (((e as any).removedRows as any) + ((e as any).insertedRows as any) as any) > (0 as any) && (da as any)((e as any).removedKind, (e as any).removedKindCount) && (da as any)((e as any).insertedKind, (e as any).insertedKindCount) && (ee as any)((e as any).rowsBefore) && (ee as any)((e as any).rowsAfter) && (Se as any)((e as any).occurrence) : !1;
  }
  function _c(this: any, e: any): any {
    return (l as any)(e) ? (typeof (e as any).pane as any) == ("string" as any) && ((Gl as any).has as any)((e as any).pane) && (typeof (e as any).errorClass as any) == ("string" as any) && ((Wl as any).has as any)((e as any).errorClass) && (Se as any)((e as any).occurrence) : !1;
  }
  function Ec(this: any, e: any): any {
    return (l as any)(e) && (F as any)((e as any).policyName) && (typeof (e as any).reason as any) == ("string" as any) && ((Ml as any).has as any)((e as any).reason) && (F as any)((e as any).errorClass);
  }
  function Ac(this: any, e: any): any {
    return (l as any)(e) ? (typeof (e as any).outcome as any) == ("string" as any) && ((Jl as any).has as any)((e as any).outcome) && (typeof (e as any).stage as any) == ("string" as any) && ((Zl as any).has as any)((e as any).stage) && (me as any)((e as any).errorClass) && (Se as any)((e as any).generation) && (S as any)((e as any).elapsedMs) : !1;
  }
  function hc(this: any, e: any): any {
    return (l as any)(e) ? ((((Object as any).keys as any)(e) as any).length as any) === (6 as any) && (typeof (e as any).reason as any) == ("string" as any) && ((Ql as any).has as any)((e as any).reason) && (S as any)((e as any).heldMs) && (ee as any)((e as any).unsettledBodies) && (ee as any)((e as any).unsettledPlaceholders) && (ee as any)((e as any).cloudAgentCards) : !1;
  }
  function Rc(this: any, e: any): any {
    return (l as any)(e) ? ((((Object as any).keys as any)(e) as any).length as any) === (4 as any) && (typeof (e as any).outcome as any) == ("string" as any) && ((ec as any).has as any)((e as any).outcome) && (S as any)((e as any).durationMs) && (typeof (e as any).seeded as any) == ("boolean" as any) : !1;
  }
  function Ze(this: any, e: any, n: any): any {
    return (typeof n as any) == ("string" as any) && ((e as any).has as any)(n);
  }
  function Tc(this: any, e: any): any {
    return (l as any)(e) ? ((((Object as any).keys as any)(e) as any).length as any) === (7 as any) && (Ze as any)(nc, (e as any).surface) && (Ze as any)(tc, (e as any).hostClass) && (Ze as any)(rc, (e as any).heldAtOpen) && (Ze as any)(oc, (e as any).outcome) && (S as any)((e as any).waitMs) && (ee as any)((e as any).urlBytes) : !1;
  }
  const bc: any = {
    client_resource: {
      kind: !0,
      domain: !0,
      operation: !0,
      state: !0,
      failureCode: !0,
      boundary: !0,
      retryOwner: !0,
      transportKind: !0,
      failedMs: !0
    },
    policy_stopped: {
      kind: !0,
      policyName: !0,
      reason: !0,
      errorClass: !0
    },
    renderer_boundary_caught: {
      kind: !0,
      boundary: !0,
      errorClass: !0,
      occurrence: !0
    },
    send_queued_flush: {
      kind: !0,
      queuedMs: !0,
      queueDepth: !0,
      outcome: !0,
      cause: !0
    },
    client_persistence: {
      kind: !0,
      op: !0,
      outcome: !0,
      slice: !0,
      bytes: !0,
      error: !0
    },
    connector_auth_clicked: {
      kind: !0,
      serverName: !0,
      serverId: !0
    },
    unclaimed_card_key: {
      kind: !0,
      entryKind: !0,
      occurrence: !0
    },
    pane_boundary: {
      kind: !0,
      pane: !0,
      errorClass: !0,
      occurrence: !0
    },
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
      occurrence: !0
    },
    voice_call: {
      kind: !0,
      accountSlot: !0,
      event: !0
    },
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
      beat: !0
    },
    voice_call_fault: {
      kind: !0,
      fault: !0,
      tool: !0,
      callId: !0,
      realtimeConversationId: !0,
      errorClass: !0,
      failureCode: !0
    },
    voice_call_delivery: {
      kind: !0,
      settlement: !0,
      carries: !0,
      callId: !0
    },
    voice_memo: {
      kind: !0,
      accountSlot: !0,
      event: !0
    },
    client_restore: {
      kind: !0,
      outcome: !0,
      stage: !0,
      errorClass: !0,
      generation: !0,
      elapsedMs: !0
    },
    transcript_first_layout: {
      kind: !0,
      reason: !0,
      heldMs: !0,
      unsettledBodies: !0,
      unsettledPlaceholders: !0,
      cloudAgentCards: !0
    },
    cloud_agent_info_read: {
      kind: !0,
      outcome: !0,
      durationMs: !0,
      seeded: !0
    },
    chip_first_content: {
      kind: !0,
      surface: !0,
      hostClass: !0,
      heldAtOpen: !0,
      outcome: !0,
      waitMs: !0,
      urlBytes: !0
    }
  };
  const ai: any = (e: any): any => (bc as any)[(e as any).kind];
  function ii(this: any, e: any): any {
    return (l as any)(e) ? ((e as any).kind as any) === ("client_resource" as any) ? (ic as any)(e) : ((e as any).kind as any) === ("policy_stopped" as any) ? (Ec as any)(e) : ((e as any).kind as any) === ("renderer_boundary_caught" as any) ? (sc as any)(e) : ((e as any).kind as any) === ("send_queued_flush" as any) ? (dc as any)(e) : ((e as any).kind as any) === ("client_persistence" as any) ? (cc as any)(e) : ((e as any).kind as any) === ("connector_auth_clicked" as any) ? (lc as any)(e) : ((e as any).kind as any) === ("unclaimed_card_key" as any) ? (uc as any)(e) : ((e as any).kind as any) === ("pane_boundary" as any) ? (_c as any)(e) : ((e as any).kind as any) === ("transcript_paint_rows_changed" as any) ? (fc as any)(e) : ((e as any).kind as any) === ("voice_call" as any) ? (pc as any)(e) : ((e as any).kind as any) === ("voice_call_connect" as any) ? (mc as any)(e) : ((e as any).kind as any) === ("voice_call_fault" as any) ? (Sc as any)(e) : ((e as any).kind as any) === ("voice_call_delivery" as any) ? (yc as any)(e) : ((e as any).kind as any) === ("voice_memo" as any) ? (gc as any)(e) : ((e as any).kind as any) === ("client_restore" as any) ? (Ac as any)(e) : ((e as any).kind as any) === ("transcript_first_layout" as any) ? (hc as any)(e) : ((e as any).kind as any) === ("cloud_agent_info_read" as any) ? (Rc as any)(e) : ((e as any).kind as any) === ("chip_first_content" as any) ? (Tc as any)(e) : !1 : !1;
  }
  const si: any = {
    agentId: !0
  };
  function di(this: any, e: any): any {
    return (l as any)(e) ? ((e as any).agentId as any) === (null as any) || (Xe as any)((e as any).agentId) : !1;
  }
  const Qe: string = "/grok-bot/passkey/";
  const Cc: any = /^[A-Za-z0-9._-]+$/;
  function li(this: any, e: any): any {
    if (!((e as any).startsWith as any)(Qe)) return !1;
    let n: any = ((((e as any).slice as any)((Qe as any).length) as any).split as any)("/");
    return (((n as any).at as any)(-1) as any) === ("" as any) && ((n as any).pop as any)(), ((n as any).length as any) === (0 as any) || !((n as any).every as any)((o: any): any => ((Cc as any).test as any)(o) && (o as any) !== ("." as any) && (o as any) !== (".." as any)) ? !1 : ((new (URL as any)(e, "https://ceremony.invalid") as any).pathname as any) === (e as any);
  }
  const kc: any = ["always", "ask", "never"];
  function ci(this: any, e: any): any {
    return (typeof e as any) == ("string" as any) && ((kc as any).includes as any)(e);
  }
  const Ic: any = ["run-command", "send-input", "read-file", "list-directory", "write-file", "read-ai-tool-setup", "read-messages", "send-imessage"];
  function Ie(this: any, e: any): any {
    return (typeof e as any) == ("string" as any) && ((Ic as any).includes as any)(e);
  }
  function ui(this: any, e: any): any {
    return (typeof e as any) == ("number" as any) && ((Number as any).isFinite as any)(e) && (e as any) >= (0 as any);
  }
  const Nc: any = ["open-failed", "load-failed", "shadow-compare", "store-first", "server-tail"];
  function pi(this: any, e: any): any {
    if ((typeof e as any) != ("object" as any) || (e as any) == (null as any)) return !1;
    let n: any = e;
    return (typeof (n as any).agentId as any) == ("string" as any) && (((n as any).agentId as any).length as any) > (0 as any) && ((Number as any).isInteger as any)((n as any).limit) && ((n as any).limit as any) > (0 as any) && (((n as any).sessionId as any) === (void 0 as any) || (typeof (n as any).sessionId as any) == ("string" as any)) && (((n as any).unreadBoundaryAt as any) === (void 0 as any) || (ui as any)((n as any).unreadBoundaryAt)) && ((Nc as any).includes as any)((n as any).reason);
  }
  const xc: any = new (Set as any)(["post_connect"]);
  function Oe(this: any, e: any): any {
    return (typeof e as any) == ("number" as any) && ((Number as any).isFinite as any)(e) && (e as any) >= (0 as any);
  }
  const mi: any = {
    phase: !0,
    stallMs: !0,
    keys: !0,
    clicks: !0,
    moves: !0,
    inBytes: !0
  };
  function Si(this: any, e: any): any {
    return (l as any)(e) ? (typeof (e as any).phase as any) == ("string" as any) && ((xc as any).has as any)((e as any).phase) && (Oe as any)((e as any).stallMs) && (Oe as any)((e as any).keys) && (Oe as any)((e as any).clicks) && (Oe as any)((e as any).moves) && (Oe as any)((e as any).inBytes) : !1;
  }
  const ye: any = {
    enabled: (y as any)()
  };
  const wc: any = (f as any)("JSON value", Ee);
  const Dc: any = (f as any)("IANA time zone", (e: any): any => (typeof e as any) == ("string" as any) && (he as any)(e));
  const Lc: any = (f as any)(`relative path under ${Qe}`, (e: any): any => (typeof e as any) == ("string" as any) && (li as any)(e));
  const Mc: any = (f as any)(`${6}-digit enrollment code`, $t);
  const en: any = (c as any)((R as any)((s as any)()));
  const vc: any = (m as any)({
    connectDomains: en,
    resourceDomains: en,
    frameDomains: en,
    baseUriDomains: en
  });
  const yi: any = (R as any)((m as any)({
    path: u,
    content: (s as any)()
  }));
  const Uc: any = (I as any)((m as any)({
    accountUuid: g,
    vaultName: g,
    accountUrl: (c as any)((s as any)()),
    accountEmail: (c as any)((s as any)()),
    connectionId: (c as any)(g)
  }), (m as any)({
    serviceAccountToken: g,
    connectionId: (c as any)(g)
  }));
  const gi: any = (c as any)((I as any)((p as any)("box"), (p as any)("temporal")));
  const Bc: any = (te as any)("non-empty audio bytes", (e: any): any => {
    let n: any = null;
    return e instanceof Uint8Array ? n = e : e instanceof ArrayBuffer && (n = new (Uint8Array as any)(e)), (n as any) == (null as any) || ((n as any).length as any) === (0 as any) ? {
      success: !1
    } : {
      success: !0,
      data: n
    };
  });
  const Vc: any = (te as any)("profile photo: PNG, JPEG, or WebP bytes of at most 2 MB", (e: any): any => {
    if (!(l as any)(e)) return {
      success: !1
    };
    let {
      contentType: n,
      bytes: o
    }: any = e;
    return (typeof n as any) != ("string" as any) || !(Rn as any)(n) || !(o instanceof Uint8Array) || ((Yt as any)({
      contentType: n,
      byteLength: (o as any).byteLength
    }) as any) !== (null as any) ? {
      success: !1
    } : {
      success: !0,
      data: {
        contentType: n,
        bytes: o
      }
    };
  });
  const Gc: any = (f as any)(`non-blank text of at most ${Tn} characters`, (e: any): any => (typeof e as any) == ("string" as any) && ((dr as any)(e) as any) === ("ok" as any));
  const fi: any = (f as any)("computer upgrade schedule args (local time, IANA time zone)", Qt);
  const Fc: any = (te as any)("feedback report", (e: any): any => {
    let n: any = (ar as any)(e);
    return (n as any) === (null as any) ? {
      success: !1
    } : {
      success: !0,
      data: n
    };
  });
  const Hc: any = (f as any)("caller name: string, null, or absent", (e: any): any => (e as any) == (null as any) || (typeof e as any) == ("string" as any));
  const _i: any = (I as any)((m as any)({
    kind: (p as any)("store"),
    storeId: (s as any)(),
    canvasId: (s as any)()
  }), (m as any)({
    kind: (p as any)("active-user-store"),
    canvasId: (s as any)()
  }));
  const Kc: any = (I as any)((p as any)("private"), (p as any)("team-view"));
  const Ne: any = (m as any)({
    storeId: (s as any)(),
    documentId: (s as any)()
  });
  const jc: any = (I as any)((p as any)("private"), (p as any)("team-view"));
  const Ei: any = (te as any)("canvas id (bare UUID)", (e: any): any => {
    if ((typeof e as any) != ("string" as any)) return {
      success: !1
    };
    let n: any = (hn as any)(e);
    return (n as any).ok ? {
      success: !0,
      data: (n as any).value
    } : {
      success: !1
    };
  });
  const Wc: any = (I as any)((m as any)({
    kind: (p as any)("canvas"),
    storeId: g,
    canvasId: Ei
  }), (m as any)({
    kind: (p as any)("active-user-store-canvas"),
    canvasId: Ei
  }), (m as any)({
    kind: (p as any)("document"),
    storeId: g,
    documentId: (f as any)("document id", (e: any): any => (typeof e as any) == ("string" as any) && (Zt as any)(e))
  }));
  const Ai: any = (I as any)((m as any)({
    kind: (p as any)("backend")
  }), (m as any)({
    kind: (p as any)("package"),
    loop: (I as any)((p as any)("box"), (p as any)("temporal")),
    hasStaySilent: (y as any)(),
    hasOverheard: (y as any)()
  }));
  const hi: any = (_e as any)("main", {
    methods: {
      openExternal: (((r as any)() as any).args as any)({
        url: (s as any)()
      }),
      getCanvasShare: (((r as any)() as any).args as any)({
        locator: _i
      }),
      setCanvasVisibility: (((r as any)() as any).args as any)({
        locator: _i,
        visibility: Kc
      }),
      getDocument: (((r as any)() as any).args as any)({
        locator: Ne,
        groupChatId: (c as any)(g)
      }),
      getDocumentEditRight: (((r as any)() as any).args as any)({
        locator: Ne
      }),
      saveDocument: (((r as any)() as any).args as any)({
        locator: Ne,
        source: (s as any)()
      }),
      resolveLibraryPages: (((r as any)() as any).args as any)({
        refs: (R as any)(Wc),
        includeDocuments: (y as any)()
      }),
      listLibraryDocs: (((r as any)() as any).args as any)({
        agentId: g
      }),
      setDocumentVisibility: (((r as any)() as any).args as any)({
        locator: Ne,
        visibility: jc
      }),
      getDocumentAssets: (((r as any)() as any).args as any)({
        locator: Ne,
        names: (R as any)((s as any)()),
        groupChatId: (c as any)(g)
      }),
      submitFeedback: (((r as any)() as any).args as any)(Fc),
      getWindowState: ((r as any)() as any).noArgs,
      minimizeWindow: ((r as any)() as any).noArgs,
      focusWindow: ((r as any)() as any).noArgs,
      toggleMaximizeWindow: ((r as any)() as any).noArgs,
      closeWindow: ((r as any)() as any).noArgs,
      resizeWindowWidth: (((r as any)() as any).args as any)({
        deltaWidth: (P as any)()
      }),
      setTitleBarOverlayTone: (((r as any)() as any).args as any)({
        isOverlayTone: (y as any)()
      }),
      setViewingAgent: (((r as any)() as any).args as any)({
        agentId: (W as any)((s as any)())
      }),
      setComposingAgent: (((r as any)() as any).args as any)({
        agentId: (s as any)(),
        composing: (y as any)()
      }),
      setComputerViewOpen: (((r as any)() as any).args as any)({
        isOpen: (y as any)()
      }),
      getThemeState: ((r as any)() as any).noArgs,
      setThemePreference: (((r as any)() as any).args as any)({
        preference: (f as any)("theme preference", nr)
      }),
      getBotColorInChatEnabled: ((r as any)() as any).noArgs,
      setBotColorInChatEnabled: (((r as any)() as any).args as any)(ye),
      getHardwareAcceleration: ((r as any)() as any).noArgs,
      setHardwareAccelerationEnabled: (((r as any)() as any).args as any)(ye),
      getSpellCheckEnabled: ((r as any)() as any).noArgs,
      setSpellCheckEnabled: (((r as any)() as any).args as any)(ye),
      getDesktopNotificationPreferences: ((r as any)() as any).noArgs,
      setDesktopNotificationPreferences: (((r as any)() as any).args as any)({
        preferences: (f as any)("notification-preferences", tr)
      }),
      relaunchDesktop: ((r as any)() as any).noArgs,
      getLanguageState: ((r as any)() as any).noArgs,
      setLanguagePreference: (((r as any)() as any).args as any)({
        preference: (f as any)("language preference", ir)
      }),
      getEgressTunnelEnabled: ((r as any)() as any).noArgs,
      setEgressTunnelEnabled: (((r as any)() as any).args as any)(ye),
      getEgressTunnelStatus: ((r as any)() as any).noArgs,
      claimEgressTunnel: ((r as any)() as any).noArgs,
      getWebauthnProxyEnabled: ((r as any)() as any).noArgs,
      setWebauthnProxyEnabled: (((r as any)() as any).args as any)(ye),
      runNetworkDiagnostics: ((r as any)() as any).noArgs,
      getUpdateStatus: ((r as any)() as any).noArgs,
      checkForUpdates: ((r as any)() as any).noArgs,
      setUpdateTrack: (((r as any)() as any).args as any)({
        track: (W as any)((f as any)("update track", Xo))
      }),
      quitAndInstallUpdate: (((r as any)() as any).args as any)({
        expectedVersion: (s as any)()
      }),
      setAutoUpdateWhenIdle: (((r as any)() as any).args as any)(ye),
      getBoxMigrationStatus: ((r as any)() as any).noArgs,
      getBoxHostPhase: ((r as any)() as any).noArgs,
      markDeepLinksReady: ((r as any)() as any).noArgs,
      getOnboardingSeen: ((r as any)() as any).noArgs,
      setOnboardingSeen: (((r as any)() as any).args as any)({
        seen: (y as any)()
      }),
      getTimeZone: ((r as any)() as any).noArgs,
      setTimeZoneOverride: (((r as any)() as any).args as any)({
        timeZone: (W as any)(Dc)
      }),
      getAutoReviewInstructions: ((r as any)() as any).noArgs,
      setAutoReviewInstructions: (((r as any)() as any).args as any)({
        instructions: (m as any)({
          isEnabled: (y as any)(),
          allowInstructions: (R as any)((s as any)()),
          blockInstructions: (R as any)((s as any)())
        })
      }),
      getLocalToolPermission: ((r as any)() as any).noArgs,
      getMessagesAppIcon: ((r as any)() as any).noArgs,
      getTeamMemberPolicy: ((r as any)() as any).noArgs,
      setLocalToolPermission: (((r as any)() as any).args as any)({
        permission: (f as any)("local tool permission", ci),
        machineId: (c as any)(u)
      }),
      recordLocalToolApproval: (((r as any)() as any).args as any)({
        approvalId: g,
        action: (f as any)("local tool action", Ie),
        target: (s as any)(),
        machineId: (c as any)((s as any)())
      }),
      clearLocalToolApprovals: ((r as any)() as any).noArgs,
      recordLocalToolStandingGrant: (((r as any)() as any).args as any)({
        action: (f as any)("local tool action", Ie),
        recipient: g,
        machineId: (c as any)((s as any)())
      }),
      getLocalToolActionGrant: (((r as any)() as any).args as any)({
        action: (f as any)("local tool action", Ie)
      }),
      setLocalToolActionGrant: (((r as any)() as any).args as any)({
        action: (f as any)("local tool action", Ie),
        granted: (y as any)()
      }),
      pickAvatarSource: ((r as any)() as any).noArgs,
      pickAvatarFile: ((r as any)() as any).noArgs,
      generateAgentAvatarImage: (((r as any)() as any).args as any)({
        description: (s as any)()
      }),
      resolveAttachmentMedia: (((r as any)() as any).args as any)({
        source: (s as any)(),
        inline: (c as any)((y as any)()),
        rendition: (c as any)((f as any)("image rendition", sr)),
        inRoom: (c as any)((y as any)()),
        preview: (c as any)((De as any)())
      }),
      readAttachmentText: (((r as any)() as any).args as any)({
        path: (s as any)(),
        agentId: (c as any)((s as any)())
      }),
      readAttachmentBytes: (((r as any)() as any).args as any)({
        path: (s as any)(),
        maxBytes: (c as any)((P as any)()),
        agentId: (c as any)((s as any)())
      }),
      stageAttachmentBytes: (((r as any)() as any).args as any)({
        filename: (s as any)(),
        bytes: (De as any)()
      }),
      stageAttachmentPath: (((r as any)() as any).args as any)({
        filename: (s as any)(),
        sourcePath: (s as any)()
      }),
      downloadAttachment: (((r as any)() as any).args as any)({
        path: (s as any)(),
        suggestedName: (c as any)((s as any)())
      }),
      commitStagedAttachments: (((r as any)() as any).args as any)({
        agentId: g,
        paths: (R as any)((s as any)()),
        filenames: (R as any)((s as any)())
      }),
      discardStagedAttachment: (((r as any)() as any).args as any)({
        path: (s as any)()
      }),
      precaptionStagedAttachment: (((r as any)() as any).args as any)({
        path: (s as any)(),
        agentId: (s as any)(),
        draftText: (s as any)(),
        priorUserMessages: (R as any)((s as any)())
      }),
      forceRecreateComputer: ((r as any)() as any).noArgs,
      updateComputer: (((r as any)() as any).args as any)({
        id: (s as any)(),
        requestId: g,
        acknowledgeTerminalUpgradeSchedule: (c as any)((y as any)())
      }),
      getComputerUpgradeSchedule: ((r as any)() as any).noArgs,
      scheduleComputerUpgrade: (((r as any)() as any).args as any)(fi),
      rescheduleComputerUpgrade: (((r as any)() as any).args as any)(fi),
      cancelComputerUpgrade: (((r as any)() as any).args as any)((f as any)("computer upgrade cancellation args", er)),
      forceReconnectGateway: ((r as any)() as any).noArgs,
      getExperimentsSnapshot: ((r as any)() as any).noArgs,
      exposeFeatureGate: (((r as any)() as any).args as any)({
        name: (s as any)()
      }),
      peekUsageWarningAssignment: ((r as any)() as any).noArgs,
      exposeUsageWarningExperiment: (((r as any)() as any).args as any)({
        percentUsed: (P as any)()
      }),
      logComposerTriggerExperimentExposure: (((r as any)() as any).args as any)({
        trigger: (p as any)("at")
      }),
      logGroupChatDiscouragementExperimentExposure: ((r as any)() as any).noArgs,
      logOnboardingJobRoleExperimentExposure: ((r as any)() as any).noArgs,
      logOnboardingRoleUseCaseBotsExperimentExposure: ((r as any)() as any).noArgs,
      applyFeatureFlagOverride: (((r as any)() as any).args as any)({
        command: (I as any)((m as any)({
          kind: (p as any)("set"),
          name: (s as any)(),
          value: (y as any)()
        }), (m as any)({
          kind: (p as any)("clear"),
          name: (s as any)()
        }), (m as any)({
          kind: (p as any)("clear-all")
        }), (m as any)({
          kind: (p as any)("set-all-bundled")
        }))
      }),
      refreshFeatureFlags: ((r as any)() as any).noArgs,
      applyExperimentOverride: (((r as any)() as any).args as any)({
        command: (I as any)((m as any)({
          kind: (p as any)("set"),
          experiment: (s as any)(),
          param: (s as any)(),
          value: wc
        }), (m as any)({
          kind: (p as any)("clear"),
          experiment: (s as any)(),
          param: (s as any)()
        }), (m as any)({
          kind: (p as any)("clear-experiment"),
          experiment: (s as any)()
        }), (m as any)({
          kind: (p as any)("clear-all")
        }))
      }),
      startRpcTraceWindow: ((r as any)() as any).noArgs,
      readTranscriptStoreTail: (((r as any)() as any).args as any)((f as any)("transcript store read args (agent id, positive limit, reason)", pi)),
      getPublicBotTemplate: (((r as any)() as any).args as any)({
        shareId: (f as any)("share id", (e: any): any => (typeof e as any) == ("string" as any) && ((Jt as any).test as any)(e))
      }),
      listPublicBotMarketplace: ((r as any)() as any).noArgs,
      getGrokBotSlackInstallState: (((r as any)() as any).args as any)({
        agentId: u
      }),
      startGrokBotSlackConnect: (((r as any)() as any).args as any)({
        agentId: u
      }),
      installGrokBotSlackApp: (((r as any)() as any).args as any)({
        agentId: u,
        slackTeamId: (W as any)(u),
        replaceExistingApp: (c as any)((y as any)())
      }),
      reinstallGrokBotSlackApp: (((r as any)() as any).args as any)({
        agentId: u,
        automatic: (y as any)()
      }),
      uninstallGrokBotSlackApp: (((r as any)() as any).args as any)({
        agentId: u,
        forgetIfUnreachable: (c as any)((y as any)())
      }),
      listGrokBotTeamAgents: ((r as any)() as any).noArgs,
      listGrokBotAgentSessions: (((r as any)() as any).args as any)({
        agentId: u
      }),
      setGrokBotAgentVisibility: (((r as any)() as any).args as any)({
        agentId: u,
        visibility: (En as any)("Grok Bot agent visibility", ["owner", "team"])
      }),
      cloneGrokBotAgentToTeam: (((r as any)() as any).args as any)({
        agentId: u,
        offerEntryId: u
      }),
      setGrokBotAgentVoice: (((r as any)() as any).args as any)({
        agentId: u,
        voiceId: (c as any)((W as any)((s as any)())),
        voiceSpeed: (c as any)((P as any)()),
        voiceLanguage: (c as any)((s as any)())
      }),
      updateGrokBotAgent: (((r as any)() as any).args as any)({
        serverId: u,
        name: (c as any)((s as any)()),
        description: (c as any)((s as any)()),
        title: (c as any)((s as any)()),
        avatarShape: (c as any)((s as any)()),
        avatarColor: (c as any)((s as any)()),
        avatarPngBase64: (c as any)((W as any)((s as any)()))
      }),
      publishGrokBotAgent: (((r as any)() as any).args as any)({
        agentId: u
      }),
      unpublishGrokBotAgent: (((r as any)() as any).args as any)({
        agentId: u
      }),
      setGrokBotAgentSidebarHidden: (((r as any)() as any).args as any)({
        agentId: u,
        isHidden: (y as any)()
      }),
      addGrokBotRoomPeople: (((r as any)() as any).args as any)({
        agentId: u,
        userIds: (R as any)((P as any)())
      }),
      removeGrokBotRoomPeople: (((r as any)() as any).args as any)({
        agentId: u,
        userIds: (R as any)((P as any)())
      }),
      listGrokBotAgentManagers: (((r as any)() as any).args as any)({
        serverId: u
      }),
      addGrokBotAgentManager: (((r as any)() as any).args as any)({
        serverId: u,
        userId: (P as any)()
      }),
      removeGrokBotAgentManager: (((r as any)() as any).args as any)({
        serverId: u,
        userId: (P as any)()
      }),
      getGrokBotAgentPlugins: (((r as any)() as any).args as any)({
        agentId: u
      }),
      setGrokBotAgentPlugins: (((r as any)() as any).args as any)({
        agentId: u,
        plugins: (R as any)((I as any)((m as any)({
          kind: (p as any)("plugin"),
          pluginId: u
        }), (m as any)({
          kind: (p as any)("config-update"),
          pluginId: u,
          mcpConfigJson: u
        }), (m as any)({
          kind: (p as any)("inline"),
          name: u,
          displayName: (s as any)(),
          description: (s as any)(),
          mcpConfigJson: u
        })))
      }),
      setGrokBotAgentPluginVariables: (((r as any)() as any).args as any)({
        agentId: u,
        pluginId: u,
        variables: (se as any)((I as any)((s as any)(), (P as any)(), (y as any)()))
      }),
      addGrokBotAgentSkill: (((r as any)() as any).args as any)({
        agentId: u,
        name: (c as any)((s as any)()),
        description: (c as any)((s as any)()),
        content: u,
        files: (c as any)(yi)
      }),
      updateGrokBotAgentSkill: (((r as any)() as any).args as any)({
        agentId: u,
        name: u,
        description: (c as any)((s as any)()),
        content: u,
        files: (c as any)(yi)
      }),
      removeGrokBotAgentSkill: (((r as any)() as any).args as any)({
        agentId: u,
        name: u
      }),
      listGrokBotUserBotMemories: (((r as any)() as any).args as any)({
        agentId: u
      }),
      promoteGrokBotMemoriesToTeam: (((r as any)() as any).args as any)({
        agentId: u,
        factIds: (R as any)(u)
      }),
      listGrokBotEmailInboxes: ((r as any)() as any).noArgs,
      createGrokBotEmailInbox: (((r as any)() as any).args as any)({
        username: (s as any)(),
        displayName: (s as any)()
      }),
      listGrokBotSecrets: (((r as any)() as any).args as any)({
        serverId: u
      }),
      putGrokBotSecret: (((r as any)() as any).args as any)({
        serverId: u,
        name: u,
        description: (s as any)(),
        value: g
      }),
      deleteGrokBotSecret: (((r as any)() as any).args as any)({
        serverId: u,
        name: u
      }),
      carryUserSecretsToGrokBot: (((r as any)() as any).args as any)({
        serverId: u,
        names: (R as any)(u)
      }),
      getHostPinnedAgents: ((r as any)() as any).noArgs,
      setHostPinnedAgents: (((r as any)() as any).args as any)({
        pinnedAgentIds: (R as any)((s as any)())
      }),
      getHostSidebarSections: ((r as any)() as any).noArgs,
      setHostSidebarSections: (((r as any)() as any).args as any)({
        sections: (R as any)((m as any)({
          id: (s as any)(),
          name: (s as any)(),
          agentIds: (R as any)((s as any)())
        }))
      }),
      transcribeAudio: (((r as any)() as any).args as any)({
        audio: Bc,
        mimeType: (s as any)(),
        language: (c as any)((s as any)())
      }),
      synthesizeSpeech: (((r as any)() as any).args as any)({
        text: Gc,
        voiceId: (c as any)((s as any)())
      }),
      getCursorAuthStatus: ((r as any)() as any).noArgs,
      loginCursor: ((r as any)() as any).noArgs,
      getCursorLoginFlight: ((r as any)() as any).noArgs,
      cancelCursorLoginFlight: ((r as any)() as any).noArgs,
      logoutCursor: ((r as any)() as any).noArgs,
      listCursorAccounts: ((r as any)() as any).noArgs,
      addCursorAccount: ((r as any)() as any).noArgs,
      switchCursorAccount: (((r as any)() as any).args as any)({
        accountId: (s as any)()
      }),
      removeCursorAccount: (((r as any)() as any).args as any)({
        accountId: (s as any)()
      }),
      updateCursorAccountName: (((r as any)() as any).args as any)({
        name: (s as any)()
      }),
      getCursorAvatar: ((r as any)() as any).noArgs,
      updateCursorProfilePhoto: (((r as any)() as any).args as any)({
        photo: Vc
      }),
      getSandMachines: ((r as any)() as any).noArgs,
      updateSandMachineLabel: (((r as any)() as any).args as any)({
        machineId: (s as any)(),
        label: (s as any)()
      }),
      startPasskeyEnrollment: ((r as any)() as any).noArgs,
      verifyPasskeyEnrollmentCode: (((r as any)() as any).args as any)({
        code: Mc
      }),
      beginPasskeyRegistration: (((r as any)() as any).args as any)({
        enrollmentTicket: u
      }),
      listPasskeys: ((r as any)() as any).noArgs,
      revokePasskey: (((r as any)() as any).args as any)({
        credentialId: u
      }),
      getCursorSelectedTeam: ((r as any)() as any).noArgs,
      listCursorTeamMemberships: ((r as any)() as any).noArgs,
      listCursorTeamMembers: (((r as any)() as any).args as any)({
        teamId: (P as any)()
      }),
      ackCursorTeamFallback: (((r as any)() as any).args as any)({
        notice: (m as any)({
          fromTeamId: (P as any)(),
          fromTeamName: (W as any)((s as any)()),
          toTeam: (W as any)((m as any)({
            id: (P as any)(),
            name: (s as any)()
          }))
        })
      }),
      getCursorWeeklyUsage: ((r as any)() as any).noArgs,
      getCursorUsageSummary: ((r as any)() as any).noArgs,
      getCursorEnterpriseUsage: (((r as any)() as any).args as any)({
        teamId: (P as any)()
      }),
      getCursorUsageBreakdown: (((r as any)() as any).args as any)({
        includeCredits: (y as any)()
      }),
      getCursorPrReviewPreferences: ((r as any)() as any).noArgs,
      getCursorOriginPrStatus: (((r as any)() as any).args as any)({
        prUrl: (s as any)()
      }),
      getCursorPrivacyModeEnabled: ((r as any)() as any).noArgs,
      getSandAccess: ((r as any)() as any).noArgs,
      getSandAccessFresh: ((r as any)() as any).noArgs,
      getGrokBotTermsRecord: ((r as any)() as any).noArgs,
      markGrokBotTermsSeen: ((r as any)() as any).noArgs,
      clearGrokBotConnectorPreferences: ((r as any)() as any).noArgs,
      mintVoiceCallCredential: ((r as any)() as any).noArgs,
      mintXaiCommerceBearer: ((r as any)() as any).noArgs,
      voiceCallHarnessSession: (((r as any)() as any).args as any)({
        dial: Ai,
        args: (m as any)({
          agentId: (s as any)(),
          agentName: (s as any)(),
          userName: (c as any)(Hc),
          description: (c as any)((s as any)()),
          spokenLanguage: (c as any)((s as any)())
        })
      }),
      voiceCallHarnessTool: (((r as any)() as any).args as any)({
        dial: Ai,
        invocation: (m as any)({
          agentId: (s as any)(),
          callId: (s as any)(),
          name: (s as any)(),
          input: (ln as any)(),
          line: (m as any)({
            theyJustTalked: (y as any)(),
            newsOwed: (y as any)(),
            receiptOwed: (y as any)(),
            alreadySpokeThisTurn: (y as any)()
          })
        })
      }),
      invokeCursorDashboardAction: (((r as any)() as any).args as any)({
        action: (s as any)(),
        args: (se as any)((s as any)())
      }),
      cancelCursorSandTrial: ((r as any)() as any).noArgs,
      prepareCursorScmConnect: (((r as any)() as any).args as any)({
        provider: (En as any)("SCM connect provider", zt),
        forceOauth: (c as any)((y as any)())
      }),
      completeCursorScmConnect: (((r as any)() as any).args as any)({
        state: u,
        code: (c as any)((s as any)()),
        installationId: (c as any)((s as any)()),
        setupAction: (c as any)((s as any)()),
        error: (c as any)((s as any)())
      }),
      getCursorGithubRepoAccess: (((r as any)() as any).args as any)({
        repoSlug: u
      }),
      runPasskeyCeremony: (((r as any)() as any).args as any)({
        ceremonyId: u,
        path: Lc,
        token: u,
        challengeId: (c as any)(u)
      }),
      cancelPasskeyCeremony: (((r as any)() as any).args as any)({
        ceremonyId: u
      }),
      setCursorSpendLimit: (((r as any)() as any).args as any)((f as any)("spend limit update", Xt)),
      reportAgentLoad: (((r as any)() as any).args as any)((A as any)(ca, la)),
      reportAccessBlocked: (((r as any)() as any).args as any)((A as any)(pa, ua)),
      reportAgentsUnreachable: (((r as any)() as any).args as any)((A as any)(Sa, ma)),
      reportRecoveryAction: (((r as any)() as any).args as any)((A as any)(ga, ya)),
      reportRebuildLifecycle: (((r as any)() as any).args as any)((A as any)(_a, fa)),
      reportReconciliation: (((r as any)() as any).args as any)((A as any)(Aa, Ea)),
      reportBoxVisibility: (((r as any)() as any).args as any)((A as any)(Ra, ha)),
      reportSendLatency: (((r as any)() as any).args as any)((A as any)(ba, Ta)),
      reportSendAck: (((r as any)() as any).args as any)((A as any)(ka, Ca)),
      reportTurnClientStart: (((r as any)() as any).args as any)((A as any)(Oa, Ia)),
      reportTurnClientOutcome: (((r as any)() as any).args as any)((A as any)(xa, Na)),
      reportReactionAck: (((r as any)() as any).args as any)((A as any)(wa, Pa)),
      reportRenderTtfr: (((r as any)() as any).args as any)((A as any)(Ba, Ua)),
      reportRenderStream: (((r as any)() as any).args as any)((A as any)(Ga, Va)),
      reportVncSession: (((r as any)() as any).args as any)((A as any)(La, Da)),
      reportVncLiveness: (((r as any)() as any).args as any)((A as any)(Si, mi)),
      reportOpenComputer: (((r as any)() as any).args as any)((A as any)(va, Ma)),
      reportUpdatePrompt: (((r as any)() as any).args as any)((A as any)(Ha, Fa)),
      reportUsageWarning: (((r as any)() as any).args as any)((A as any)(ja, Ka)),
      reportSidebarAction: (((r as any)() as any).args as any)((A as any)(za, Xa)),
      reportArtifactEngagement: (((r as any)() as any).args as any)((A as any)(qa, $a)),
      reportCloudAgentArtifact: (((r as any)() as any).args as any)((A as any)(Ya, Wa)),
      reportSigninGate: (((r as any)() as any).args as any)((A as any)(Qa, Za)),
      reportOnboardingStep: (((r as any)() as any).args as any)((A as any)(ni, ei)),
      reportOnboardingCompleted: (((r as any)() as any).args as any)((A as any)(ri, ti)),
      reportClientFailure: (((r as any)() as any).args as any)((A as any)(ii, ai)),
      reportHeapMetrics: (((r as any)() as any).args as any)(Vt),
      noteSentryConversation: (((r as any)() as any).args as any)((A as any)(di, si)),
      openCloudAgent: (((r as any)() as any).args as any)({
        bcId: Ue,
        target: (c as any)((I as any)((p as any)("default"), (p as any)("web")))
      }),
      getLinkMetadata: (((r as any)() as any).args as any)({
        url: (s as any)(),
        image: (c as any)((I as any)((p as any)("card"), (p as any)("source")))
      }),
      stageMcpAppDocument: (((r as any)() as any).args as any)({
        html: (s as any)(),
        csp: (c as any)(vc)
      }),
      listSecrets: ((r as any)() as any).noArgs,
      readClientPersistence: (((r as any)() as any).args as any)({
        key: (s as any)()
      }),
      readManyClientPersistence: (((r as any)() as any).args as any)({
        include: (R as any)((s as any)()),
        exclude: (R as any)((s as any)())
      }),
      writeClientPersistence: (((r as any)() as any).args as any)({
        key: (s as any)(),
        value: (s as any)()
      }),
      removeClientPersistence: (((r as any)() as any).args as any)({
        key: (s as any)()
      }),
      listClientPersistenceKeys: (((r as any)() as any).args as any)({
        prefix: (s as any)()
      }),
      hasMigratedClientPersistence: ((r as any)() as any).noArgs,
      migrateClientPersistence: (((r as any)() as any).args as any)({
        entries: (R as any)((m as any)({
          key: (s as any)(),
          value: (s as any)()
        }))
      }),
      getCredentialsState: ((r as any)() as any).noArgs,
      syncCredentialProvider: ((r as any)() as any).noArgs,
      disconnectCredentialProvider: (((r as any)() as any).args as any)({
        connectionId: g
      }),
      disconnectScmConnection: (((r as any)() as any).args as any)({
        platform: g
      }),
      isSlackLinked: ((r as any)() as any).noArgs,
      getSlackLinkUrl: ((r as any)() as any).noArgs,
      approveCredentialRequest: (((r as any)() as any).args as any)({
        entryId: g,
        agentId: g,
        credentialId: g,
        connectionId: g,
        catalogRevision: g,
        targetSite: g,
        harness: gi
      }),
      denyCredentialRequest: (((r as any)() as any).args as any)({
        entryId: g,
        agentId: g,
        harness: gi
      }),
      detectCredentialMint: ((r as any)() as any).noArgs,
      startCredentialMint: (((r as any)() as any).args as any)(Uc),
      connectCredentialProviderOAuth: (((r as any)() as any).args as any)({
        connectionId: (c as any)(g)
      }),
      cancelCredentialProviderOAuth: ((r as any)() as any).noArgs,
      getMcpState: ((r as any)() as any).noArgs,
      getGrokBotAgentMcpServers: (((r as any)() as any).args as any)({
        agentId: (s as any)()
      }),
      getEffectivePlugins: ((r as any)() as any).noArgs,
      getMcpCatalog: ((r as any)() as any).noArgs,
      refreshMcpCatalog: ((r as any)() as any).noArgs,
      getMcpTeamPopularity: ((r as any)() as any).noArgs,
      getMcpPluginLogo: (((r as any)() as any).args as any)({
        url: (s as any)()
      }),
      installEntry: (((r as any)() as any).args as any)({
        entryId: (s as any)(),
        values: (c as any)((se as any)((I as any)((s as any)(), (P as any)(), (y as any)()))),
        hasTeamConfiguredVariables: (c as any)((y as any)())
      }),
      updatePluginInstall: (((r as any)() as any).args as any)({
        pluginId: (s as any)(),
        values: (se as any)((I as any)((s as any)(), (P as any)(), (y as any)()))
      }),
      removeMcpServer: (((r as any)() as any).args as any)({
        serverId: (s as any)()
      }),
      uninstallPlugin: (((r as any)() as any).args as any)({
        pluginId: (s as any)()
      }),
      reconcileUnpublishedPlugin: (((r as any)() as any).args as any)({
        pluginId: (s as any)()
      }),
      authenticateMcpServer: (((r as any)() as any).args as any)({
        serverId: (s as any)(),
        accountKey: (c as any)((s as any)()),
        trigger: (c as any)((p as any)("connector_card")),
        forceReauth: (c as any)((y as any)()),
        grokBotAgentId: (c as any)((s as any)())
      }),
      renameMcpAccount: (((r as any)() as any).args as any)({
        serverId: (s as any)(),
        accountKey: (s as any)(),
        newAccountKey: (s as any)()
      }),
      removeMcpAccount: (((r as any)() as any).args as any)({
        serverId: (s as any)(),
        accountKey: (s as any)()
      }),
      setMcpCustomInstructions: (((r as any)() as any).args as any)({
        serverId: (s as any)(),
        instructions: (s as any)()
      }),
      listMcpServerTools: (((r as any)() as any).args as any)({
        serverId: (s as any)(),
        demand: (c as any)((p as any)("background"))
      }),
      toggleMcpToolDisabled: (((r as any)() as any).args as any)({
        serverId: (s as any)(),
        toolName: (s as any)()
      }),
      getFinanceOverview: ((r as any)() as any).noArgs,
      deleteFinanceConnection: (((r as any)() as any).args as any)({
        connectionId: (s as any)()
      }),
      startFinanceLink: (((r as any)() as any).args as any)({
        repairLinkedBank: (c as any)((y as any)())
      }),
      attachProdBoxStatus: ((r as any)() as any).noArgs,
      setAttachProdBoxEnabled: (((r as any)() as any).args as any)({
        enabled: (y as any)(),
        isRestartMainApp: (c as any)((y as any)())
      }),
      checkMessagesPermissions: (((r as any)() as any).args as any)({
        prompt: (c as any)((I as any)((p as any)("automation"), (p as any)("fullDiskAccess"), (p as any)("contacts")))
      }),
      getCurrentMachineMessagesEnabled: ((r as any)() as any).noArgs,
      updateCurrentMachineMessagesEnabled: (((r as any)() as any).args as any)({
        messagesEnabled: (y as any)()
      }),
      listMessagesAllowedRecipients: ((r as any)() as any).noArgs,
      revokeMessagesAllowedRecipient: (((r as any)() as any).args as any)({
        recipient: g
      }),
      listChromeCookieAllowItems: ((r as any)() as any).noArgs,
      importChromeCookies: (((r as any)() as any).args as any)({
        cookies: (R as any)((m as any)({
          profileId: g,
          domain: g,
          name: g,
          path: g
        }))
      }),
      listCookieOriginGrants: ((r as any)() as any).noArgs,
      putCookieOriginGrants: (((r as any)() as any).args as any)({
        grants: (R as any)((m as any)({
          profileId: u,
          origin: u
        }))
      }),
      listMeetings: ((r as any)() as any).noArgs,
      meetingCensus: ((r as any)() as any).noArgs,
      leaveMeeting: (((r as any)() as any).args as any)({
        meetingId: g,
        host: (I as any)((p as any)("desktop"), (p as any)("server"))
      })
    },
    events: (ae as any)(),
    failureCodes: (ae as any)()
  });
  return {
    main: hi,
    mount: Ft
  };
};
