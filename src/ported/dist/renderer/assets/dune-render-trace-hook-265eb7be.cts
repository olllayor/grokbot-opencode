
(function installRenderTraceHookStub(this: any, host: any): any {
  const sampleRate: any = "__duneRenderTraceSampleRate" in host ? (host as any).__duneRenderTraceSampleRate : undefined;
  if ((typeof sampleRate as any) !== ("number" as any) || !((sampleRate as any) > (0 as any) && (sampleRate as any) <= (1 as any))) return;
  ((Object as any).defineProperty as any)(host, ((Symbol as any).for as any)("dune.render-trace.session"), {
    value: ((Object as any).freeze as any)({
      sampleRate
    }),
    configurable: true
  });
  if ("__REACT_DEVTOOLS_GLOBAL_HOOK__" in host && ((host as any).__REACT_DEVTOOLS_GLOBAL_HOOK__ as any) != (null as any)) {
    return;
  }
  const renderers: any = new (Map as any)();
  const noop: any = (): any => undefined;
  ((Object as any).defineProperty as any)(host, "__REACT_DEVTOOLS_GLOBAL_HOOK__", {
    value: {
      [((Symbol as any).for as any)("dune.render-trace.hook-stub")]: true,
      renderers,
      supportsFiber: true,
      inject: (internals: any): any => {
        const id: any = ((renderers as any).size as any) + (1 as any);
        ((renderers as any).set as any)(id, internals);
        return id;
      },
      onScheduleFiberRoot: noop,
      onCommitFiberRoot: noop,
      onCommitFiberUnmount: noop,
      onPostCommitFiberRoot: noop
    },
    configurable: true,
    enumerable: true,
    writable: true
  });
} as any)(globalThis);
