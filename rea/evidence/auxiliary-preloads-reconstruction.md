# Auxiliary preload reconstruction

## Sources and scope

Static behavior was reconstructed from these shipped artifacts extracted from Grok Bot 0.66.0:

- `rea/recovered/dist/electron-preload/preload-meeting-avatar.cjs`
- `rea/recovered/dist/electron-preload/preload-desktop-mount-panel.cjs`
- `rea/recovered/dist/electron-preload/preload-webview.cjs`
- `rea/recovered/dist/electron-preload/preload-vnc.cjs`
- `rea/recovered/dist/electron-preload/preload-meeting.cjs`

The REA reverse-engineer-anything skill's JavaScript/Electron route applies. The parent investigation owns the REA MCP application evidence. This report describes source observations and isolated equivalence probes, not live Electron execution.

## Build mapping

Bundle each entry with esbuild, `platform: node`, `format: cjs`, `external: ['electron']`. The five source/output mappings are:

| Authored TypeScript entry | Packaged output |
| --- | --- |
| `src/auxiliary-preloads/preload-meeting-avatar.ts` | `dist/electron-preload/preload-meeting-avatar.cjs` |
| `src/auxiliary-preloads/preload-desktop-mount-panel.ts` | `dist/electron-preload/preload-desktop-mount-panel.cjs` |
| `src/auxiliary-preloads/preload-webview.ts` | `dist/electron-preload/preload-webview.cjs` |
| `src/auxiliary-preloads/preload-vnc.ts` | `dist/electron-preload/preload-vnc.cjs` |
| `src/auxiliary-preloads/preload-meeting.ts` | `dist/electron-preload/preload-meeting.cjs` |

These modules share typed timing policies, meeting constants, and browser preload installation. They do not depend on or modify the main preload reconstruction.

## Observed behavior preserved

### Avatar and desktop panel

The avatar exposes `sandMeetingAvatar.send` and `.onSource` using `sand:meetings:avatar-frame` and `sand:meetings:avatar-source`. The original listener API returns no unsubscriber; that remains the case. Avatar payloads pass through unvalidated and are explicitly `unknown` at this boundary.

The panel exposes all ten `desktopMount` methods and `subscribe`; calls use the `dune-rpc:desktop-mount:m:*` transport. Events use `dune-rpc:desktop-mount:e:*` and unsubscribe removes the exact wrapper. On invoke rejection, a probe distinguishes unknown methods from transport failures. Non-envelope replies produce `edge/handler-failed`. Devtools registration and declaration argument schemas are preserved. The original client does not validate outgoing method arguments; schemas describe server/devtools contracts. Nonblank IDs/names, SVG prefix and 64 KiB limit, at most 64 choices, menu height 0..640, displacement -16384..16384, and trimmed-prompt validation are represented explicitly. RPC return shapes remain unknown because this artifact supplies no result validators.

### Browser webview

Trusted mouse buttons 3/4 request history navigation and suppress the matching down/up/auxclick sequence. The identity-host suffix allowlist injects the local-network permission shim; its leading-dot suffix semantics are preserved. Credential create/get use a 60-second deadline, report `sand:browser-passkey-stalled`, and reject with `NotAllowedError` on stalls. Dialog overrides are idempotent. Before-unload/pagehide report popup closure; persisted same-origin pageshow reports origin return. Each installer has its original separate warning boundary.

### VNC

The VNC entry composes browser installation with chrome hiding, visible-viewer clipboard mirroring, arrow-key forwarding, RFB session reporting, frame hold/pacing, Mac key mapping, IME input, and liveness detection. Interactive-only features require `/vnc.html?sandInteractive=1`; chrome/session/frame hold apply to all VNC pages. Clipboard reads are throttled at 200 ms; mirrors run at 500 ms and avoid echo loops. The box-vnc RPC schema, probe/failure behavior, and devtools registration remain available. Visibility changes hold framebuffer requests. Passive pacing uses a 500 ms minimum, large update threshold 8192 bytes, small threshold 1024 bytes, and four follow-up small updates; interactive pacing uses zero minimum. Page programs patch noVNC module members, preserve frame stamps, install the composition-aware IME field, and increment liveness counters. A ten-second window with at least three key/click inputs but no draw or incoming bytes emits one post-connect stall report; drawing rearms it. Pagehide disposes samplers/observers.

The page-world programs are readable JavaScript string programs with typed source builders, since Electron's executeJavaScript accepts source strings and the injected world has no TypeScript runtime. Host orchestration and data readers are actual strict TypeScript, without ts-nocheck or untyped copied entry modules.

### Meetings

The meeting entry injects a page-world media adapter and installs typed page, audio, avatar, and speaker controllers. The adapter supplies Grok Bot virtual microphone/camera devices, silent microphone tracks, a 2560x1440 30-fps avatar stream, captured remote audio sinks, RTC source tracking/stamping, and the observed language/device overrides. The injected function is preserved as readable page-world source; no Electron objects cross into it.

The host taps live audio tracks once, retaps changed source keys, converts clamped float samples into signed PCM16 chunks of 2048 frames at 16 kHz, and reports lane/source/speaker metadata. Page polling runs at 1000 ms, speaker polling at 250 ms, source stamping at 100 ms. Google Meet and Zoom are supported; Teams is a display-name constant only and is not accepted as a meeting page provider. Site-specific control selectors, participant-name filtering, bot detection, denied/ended/waiting phrase order, alone/in-call/prejoin classification, roster opening, and the five-click autojoin limit are preserved. Single-speaker state holds for 1200 ms, source binding requires two unambiguous observations, and recent sources require 400 ms freshness and level >=0.005 when a level exists.

Avatar frames validate strokes and finite six-element matrices, accept photo frames, preserve transform multiplication and crop geometry, and draw to the virtual camera canvas. Photos reject SVG decoding, cap data URLs at 8 MiB, decode/cache ImageBitmaps, and retain the original circular crop and miss classification.

## Verification

`npx tsc --noEmit` reports no errors in `src/auxiliary-preloads`. `node rea/evidence/verify-auxiliary-preloads.mjs` passes:

- Differential exposed API, IPC channel/argument, callback, and unsubscribe checks against the original desktop and avatar bundles.
- Differential VNC liveness rolling-window and rearming behavior against the original sampler.
- Meeting provider/status classification and PCM clamp/conversion checks.

All five entrypoints bundle successfully using esbuild during these probes. Tests use mocked Electron transports and isolated pure-controller execution. Live noVNC imports, real WebAuthn, browser navigation, virtual-camera media flows, actual audio capture, and visual avatar output remain integration verification work. Original identifier names, comments, source maps, and original upstream module boundaries cannot be recovered from the bundle; reconstructed boundaries and descriptive types are authored choices.

## Additional lifecycle verification and scoped REA MCP evidence

`node rea/evidence/verify-auxiliary-lifecycle.mjs` compares the actual shipped webview, VNC, and meeting entrypoints against the authored TypeScript bundles inside isolated VM contexts. Fake documents/events, Electron bridges, clock handles, DOM inputs, mutation observers, and page-script execution are used; no real meeting, camera, microphone, network, or user browser session is opened.

The differential checks pass for:

- Webview installer effects, trusted mouse history sequence, ignored untrusted input, dialog results, credential create/get completion, 60-second credential stall reporting and `NotAllowedError`, popup-close events, persisted same-origin return, and rejected cross-origin return.
- VNC installer ordering, visible clipboard host-to-VM paste, key forwarding, first connection/disconnection/reconnection reporting, frame hold on hidden viewer/document, interval cancellation and observer disposal on pagehide.
- Meeting page-media injection, leading polling, native name-input setter and input/change events, delayed autojoin clicks, page-status changes, and ignored invalid avatar frames.

REA MCP 6.3.0 analyzed the inert lifecycle extraction in `rea/evidence/rea-input/auxiliary-lifecycle`; `provenance.json` records original artifact hashes and selected declarations. Parent analysis Evidence ID: `ev_c35c4c4de0cfd955e7354d1f65e92a2f5b1ac91bc040fbc54ce275a7a083550d`. Same-session `inspect_analysis_view` summary Evidence ID: `ev_8e38503ab373a62968aae7cfc6b88785385f768a4ac8b866e72a836be3d1e4de`.

The complete retained evidence is exported to `rea/evidence/rea-auxiliary-lifecycle-bundle.json`; the MCP response and view are saved as `rea-auxiliary-lifecycle.json` and `rea-auxiliary-lifecycle-summary.json`. The scoped analyzer parsed three JavaScript files, read 10,128 text bytes, visited 1,956 AST nodes, and reported zero parse failures. Application inventory coverage was complete within this extraction. Semantic coverage remained unknown with 396 graph unknowns because the selected controllers deliberately omit their shared dependency bindings; its zero resolved Electron IPC observations are therefore not evidence that the shipped app lacks IPC. REA did not execute bootstrap code and its conservative graph does not prove equivalence. Equivalence claims above come from the separate mocked differential probes.

Earlier larger auxiliary/controller extractions completed analysis but exceeded the server's 10 MiB stdio response budget; their exact transport responses and retained IDs are recorded in `rea-auxiliary-preloads.json` and `rea-auxiliary-controllers.json`. A narrower lifecycle extraction and immediate same-session export/view avoided truncation. `rea/evidence/rea-auxiliary-persistent.mjs` preserves the session for those follow-up tools without changing MCP client registration.
