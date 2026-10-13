declare var FS: any;
declare var PATH: any;
declare var TextDecoder: any;
declare var URL: any;
declare var WebAssembly: any;
declare var XMLHttpRequest: any;
declare var __dirname: any;
declare var clearInterval: any;
declare var console: any;
declare var exports: any;
declare var fetch: any;
declare var importScripts: any;
declare var key: any;
declare var module: any;
declare var performance: any;
declare var preloadedWasm: any;
declare var process: any;
declare var require: any;
declare var self: any;
declare var setTimeout: any;
declare var window: any;
var Module: any = (void 0 as any) !== (Module as any) ? Module : {},
  TreeSitter: any = (function (this: any): any {
    var initPromise: any,
      document: any = ("object" as any) == (typeof window as any) ? {
        currentScript: ((window as any).document as any).currentScript
      } : null;
    class Parser {
      declare status: any;
      declare message: any;
      declare name: any;
      [key: string]: any;
      constructor() {
        ((this as any).initialize as any)();
      }
      initialize(): any {
        throw new (Error as any)("cannot construct a Parser before calling `init()`");
      }
      static init(moduleOptions: any): any {
        return initPromise || (Module = ((Object as any).assign as any)({}, Module, moduleOptions), initPromise = new (Promise as any)((resolveInitPromise: any): any => {
          var moduleOverrides: any = ((Object as any).assign as any)({}, Module),
            arguments_: any = [],
            thisProgram: any = "./this.program",
            quit_: any = (e: any, t: any): any => {
              throw t;
            },
            ENVIRONMENT_IS_WEB: any = ("object" as any) == (typeof window as any),
            ENVIRONMENT_IS_WORKER: any = ("function" as any) == (typeof importScripts as any),
            ENVIRONMENT_IS_NODE: any = ("object" as any) == (typeof process as any) && ("object" as any) == (typeof (process as any).versions as any) && ("string" as any) == (typeof ((process as any).versions as any).node as any),
            scriptDirectory: any = "",
            read_: any,
            readAsync: any,
            readBinary: any,
            setWindowTitle: any;
          function locateFile(this: any, e: any): any {
            return (Module as any).locateFile ? ((Module as any).locateFile as any)(e, scriptDirectory) : (scriptDirectory as any) + (e as any);
          }
          if (ENVIRONMENT_IS_NODE) {
            var fs: any = (require as any)("fs"),
              nodePath: any = (require as any)("path");
            scriptDirectory = ENVIRONMENT_IS_WORKER ? (((nodePath as any).dirname as any)(scriptDirectory) as any) + ("/" as any) : (__dirname as any) + ("/" as any), read_ = (e: any, t: any): any => (e = (isFileURI as any)(e) ? new (URL as any)(e) : ((nodePath as any).normalize as any)(e), ((fs as any).readFileSync as any)(e, t ? void 0 : "utf8")), readBinary = (e: any): any => {
              var t: any = (read_ as any)(e, !0);
              return (t as any).buffer || (t = new (Uint8Array as any)(t)), t;
            }, readAsync = (e: any, t: any, r: any, _: any = !0): any => {
              e = (isFileURI as any)(e) ? new (URL as any)(e) : ((nodePath as any).normalize as any)(e), ((fs as any).readFile as any)(e, _ ? void 0 : "utf8", (e: any, s: any): any => {
                e ? (r as any)(e) : (t as any)(_ ? (s as any).buffer : s);
              });
            }, !(Module as any).thisProgram && (((process as any).argv as any).length as any) > (1 as any) && (thisProgram = ((((process as any).argv as any)[1] as any).replace as any)(/\\/g, "/")), arguments_ = (((process as any).argv as any).slice as any)(2), ("undefined" as any) != (typeof module as any) && ((module as any).exports = Module), quit_ = (e: any, t: any): any => {
              throw (process as any).exitCode = e, t;
            }, (Module as any).inspect = (): any => "[Emscripten Module object]";
          } else (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) && (ENVIRONMENT_IS_WORKER ? scriptDirectory = ((self as any).location as any).href : (void 0 as any) !== (document as any) && (document as any).currentScript && (scriptDirectory = ((document as any).currentScript as any).src), scriptDirectory = (0 as any) !== (((scriptDirectory as any).indexOf as any)("blob:") as any) ? ((scriptDirectory as any).substr as any)(0, (((((scriptDirectory as any).replace as any)(/[?#].*/, "") as any).lastIndexOf as any)("/") as any) + (1 as any)) : "", read_ = (e: any): any => {
            var t: any = new (XMLHttpRequest as any)();
            return ((t as any).open as any)("GET", e, !1), ((t as any).send as any)(null), (t as any).responseText;
          }, ENVIRONMENT_IS_WORKER && (readBinary = (e: any): any => {
            var t: any = new (XMLHttpRequest as any)();
            return ((t as any).open as any)("GET", e, !1), (t as any).responseType = "arraybuffer", ((t as any).send as any)(null), new (Uint8Array as any)((t as any).response);
          }), readAsync = (e: any, t: any, r: any): any => {
            var _: any = new (XMLHttpRequest as any)();
            ((_ as any).open as any)("GET", e, !0), (_ as any).responseType = "arraybuffer", (_ as any).onload = (): any => {
              (200 as any) == ((_ as any).status as any) || (0 as any) == ((_ as any).status as any) && (_ as any).response ? (t as any)((_ as any).response) : (r as any)();
            }, (_ as any).onerror = r, ((_ as any).send as any)(null);
          }, setWindowTitle = (e: any): any => (document as any).title = e);
          var out: any = (Module as any).print || (((console as any).log as any).bind as any)(console),
            err: any = (Module as any).printErr || (((console as any).warn as any).bind as any)(console);
          ((Object as any).assign as any)(Module, moduleOverrides), moduleOverrides = null, (Module as any).arguments && (arguments_ = (Module as any).arguments), (Module as any).thisProgram && (thisProgram = (Module as any).thisProgram), (Module as any).quit && (quit_ = (Module as any).quit);
          var dynamicLibraries: any = (Module as any).dynamicLibraries || [],
            wasmBinary: any;
          (Module as any).wasmBinary && (wasmBinary = (Module as any).wasmBinary);
          var noExitRuntime: any = (Module as any).noExitRuntime || !0,
            wasmMemory: any;
          ("object" as any) != (typeof WebAssembly as any) && (abort as any)("no native wasm support detected");
          var ABORT: any = !1,
            EXITSTATUS: any,
            HEAP8: any,
            HEAPU8: any,
            HEAP16: any,
            HEAPU16: any,
            HEAP32: any,
            HEAPU32: any,
            HEAPF32: any,
            HEAPF64: any;
          function assert(this: any, e: any, t: any): any {
            e || (abort as any)(t);
          }
          function updateMemoryViews(this: any): any {
            var e: any = (wasmMemory as any).buffer;
            (Module as any).HEAP8 = HEAP8 = new (Int8Array as any)(e), (Module as any).HEAP16 = HEAP16 = new (Int16Array as any)(e), (Module as any).HEAP32 = HEAP32 = new (Int32Array as any)(e), (Module as any).HEAPU8 = HEAPU8 = new (Uint8Array as any)(e), (Module as any).HEAPU16 = HEAPU16 = new (Uint16Array as any)(e), (Module as any).HEAPU32 = HEAPU32 = new (Uint32Array as any)(e), (Module as any).HEAPF32 = HEAPF32 = new (Float32Array as any)(e), (Module as any).HEAPF64 = HEAPF64 = new (Float64Array as any)(e);
          }
          var INITIAL_MEMORY: any = (Module as any).INITIAL_MEMORY || 33554432;
          (assert as any)((INITIAL_MEMORY as any) >= (65536 as any), (("INITIAL_MEMORY should be larger than STACK_SIZE, was " as any) + (INITIAL_MEMORY as any) as any) + ("! (STACK_SIZE=65536)" as any)), wasmMemory = (Module as any).wasmMemory ? (Module as any).wasmMemory : new ((WebAssembly as any).Memory as any)({
            initial: (INITIAL_MEMORY as any) / (65536 as any),
            maximum: 32768
          }), (updateMemoryViews as any)(), INITIAL_MEMORY = ((wasmMemory as any).buffer as any).byteLength;
          var wasmTable: any = new ((WebAssembly as any).Table as any)({
              initial: 25,
              element: "anyfunc"
            }),
            __ATPRERUN__: any = [],
            __ATINIT__: any = [],
            __ATMAIN__: any = [],
            __ATPOSTRUN__: any = [],
            __RELOC_FUNCS__: any = [],
            runtimeInitialized: any = !1,
            runtimeKeepaliveCounter: number = 0;
          function keepRuntimeAlive(this: any): any {
            return noExitRuntime || (runtimeKeepaliveCounter as any) > (0 as any);
          }
          function preRun(this: any): any {
            if ((Module as any).preRun) for (("function" as any) == (typeof (Module as any).preRun as any) && ((Module as any).preRun = [(Module as any).preRun]); ((Module as any).preRun as any).length;) (addOnPreRun as any)((((Module as any).preRun as any).shift as any)());
            (callRuntimeCallbacks as any)(__ATPRERUN__);
          }
          function initRuntime(this: any): any {
            runtimeInitialized = !0, (callRuntimeCallbacks as any)(__RELOC_FUNCS__), (callRuntimeCallbacks as any)(__ATINIT__);
          }
          function preMain(this: any): any {
            (callRuntimeCallbacks as any)(__ATMAIN__);
          }
          function postRun(this: any): any {
            if ((Module as any).postRun) for (("function" as any) == (typeof (Module as any).postRun as any) && ((Module as any).postRun = [(Module as any).postRun]); ((Module as any).postRun as any).length;) (addOnPostRun as any)((((Module as any).postRun as any).shift as any)());
            (callRuntimeCallbacks as any)(__ATPOSTRUN__);
          }
          function addOnPreRun(this: any, e: any): any {
            ((__ATPRERUN__ as any).unshift as any)(e);
          }
          function addOnInit(this: any, e: any): any {
            ((__ATINIT__ as any).unshift as any)(e);
          }
          function addOnPostRun(this: any, e: any): any {
            ((__ATPOSTRUN__ as any).unshift as any)(e);
          }
          var runDependencies: any = 0,
            runDependencyWatcher: any = null,
            dependenciesFulfilled: any = null;
          function getUniqueRunDependency(this: any, e: any): any {
            return e;
          }
          function addRunDependency(this: any, e: any): any {
            runDependencies++, (Module as any).monitorRunDependencies && ((Module as any).monitorRunDependencies as any)(runDependencies);
          }
          function removeRunDependency(this: any, e: any): any {
            if (runDependencies--, (Module as any).monitorRunDependencies && ((Module as any).monitorRunDependencies as any)(runDependencies), (0 as any) == (runDependencies as any) && ((null as any) !== (runDependencyWatcher as any) && ((clearInterval as any)(runDependencyWatcher), runDependencyWatcher = null), dependenciesFulfilled)) {
              var t: any = dependenciesFulfilled;
              dependenciesFulfilled = null, (t as any)();
            }
          }
          function abort(this: any, e: any): any {
            throw (Module as any).onAbort && ((Module as any).onAbort as any)(e), (err as any)(e = (("Aborted(" as any) + (e as any) as any) + (")" as any)), ABORT = !0, EXITSTATUS = 1, e += ". Build with -sASSERTIONS for more info.", new ((WebAssembly as any).RuntimeError as any)(e);
          }
          var dataURIPrefix: string = "data:application/octet-stream;base64,",
            wasmBinaryFile: any,
            tempDouble: any,
            tempI64: any;
          function isDataURI(this: any, e: any): any {
            return ((e as any).startsWith as any)(dataURIPrefix);
          }
          function isFileURI(this: any, e: any): any {
            return ((e as any).startsWith as any)("file://");
          }
          function getBinary(this: any, e: any): any {
            try {
              if ((e as any) == (wasmBinaryFile as any) && wasmBinary) return new (Uint8Array as any)(wasmBinary);
              if (readBinary) return (readBinary as any)(e);
              throw "both async and sync fetching of the wasm failed";
            } catch (e: any) {
              (abort as any)(e);
            }
          }
          function getBinaryPromise(this: any, e: any): any {
            if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER)) {
              if (("function" as any) == (typeof fetch as any) && !(isFileURI as any)(e)) return (((((fetch as any)(e, {
                credentials: "same-origin"
              }) as any).then as any)((t: any): any => {
                if (!(t as any).ok) throw (("failed to load wasm binary file at '" as any) + (e as any) as any) + ("'" as any);
                return ((t as any).arrayBuffer as any)();
              }) as any).catch as any)((): any => (getBinary as any)(e));
              if (readAsync) return new (Promise as any)((t: any, r: any): any => {
                (readAsync as any)(e, (e: any): any => (t as any)(new (Uint8Array as any)(e)), r);
              });
            }
            return ((((Promise as any).resolve as any)() as any).then as any)((): any => (getBinary as any)(e));
          }
          function instantiateArrayBuffer(this: any, e: any, t: any, r: any): any {
            return (((((((getBinaryPromise as any)(e) as any).then as any)((e: any): any => ((WebAssembly as any).instantiate as any)(e, t)) as any).then as any)((e: any): any => e) as any).then as any)(r, (e: any): any => {
              (err as any)(("failed to asynchronously prepare wasm: " as any) + (e as any)), (abort as any)(e);
            });
          }
          function instantiateAsync(this: any, e: any, t: any, r: any, _: any): any {
            return e || ("function" as any) != (typeof (WebAssembly as any).instantiateStreaming as any) || (isDataURI as any)(t) || (isFileURI as any)(t) || ENVIRONMENT_IS_NODE || ("function" as any) != (typeof fetch as any) ? (instantiateArrayBuffer as any)(t, r, _) : (((fetch as any)(t, {
              credentials: "same-origin"
            }) as any).then as any)((e: any): any => ((((WebAssembly as any).instantiateStreaming as any)(e, r) as any).then as any)(_, function (this: any, e: any): any {
              return (err as any)(("wasm streaming compile failed: " as any) + (e as any)), (err as any)("falling back to ArrayBuffer instantiation"), (instantiateArrayBuffer as any)(t, r, _);
            }));
          }
          function createWasm(this: any): any {
            var e: any = {
              env: wasmImports,
              wasi_snapshot_preview1: wasmImports,
              "GOT.mem": new (Proxy as any)(wasmImports, GOTHandler),
              "GOT.func": new (Proxy as any)(wasmImports, GOTHandler)
            };
            function t(this: any, e: any, t: any): any {
              var r: any = (e as any).exports;
              r = (relocateExports as any)(r, 1024);
              var _: any = (getDylinkMetadata as any)(t);
              return (_ as any).neededDynlibs && (dynamicLibraries = (((_ as any).neededDynlibs as any).concat as any)(dynamicLibraries)), (mergeLibSymbols as any)(r, "main"), (Module as any).asm = r, (addOnInit as any)(((Module as any).asm as any).__wasm_call_ctors), ((__RELOC_FUNCS__ as any).push as any)(((Module as any).asm as any).__wasm_apply_data_relocs), (removeRunDependency as any)("wasm-instantiate"), r;
            }
            if ((addRunDependency as any)("wasm-instantiate"), (Module as any).instantiateWasm) try {
              return ((Module as any).instantiateWasm as any)(e, t);
            } catch (e: any) {
              return (err as any)(("Module.instantiateWasm callback failed with error: " as any) + (e as any)), !1;
            }
            return (instantiateAsync as any)(wasmBinary, wasmBinaryFile, e, function (this: any, e: any): any {
              (t as any)((e as any).instance, (e as any).module);
            }), {};
          }
          wasmBinaryFile = "tree-sitter.wasm", (isDataURI as any)(wasmBinaryFile) || (wasmBinaryFile = (locateFile as any)(wasmBinaryFile));
          var ASM_CONSTS: any = {};
          function ExitStatus(this: any, e: any): any {
            (this as any).name = "ExitStatus", (this as any).message = (("Program terminated with exit(" as any) + (e as any) as any) + (")" as any), (this as any).status = e;
          }
          var GOT: any = {},
            currentModuleWeakSymbols: any = new (Set as any)([]),
            GOTHandler: any = {
              get: function (this: any, e: any, t: any): any {
                var r: any = (GOT as any)[t];
                return r || (r = (GOT as any)[t] = new ((WebAssembly as any).Global as any)({
                  value: "i32",
                  mutable: !0
                })), ((currentModuleWeakSymbols as any).has as any)(t) || ((r as any).required = !0), r;
              }
            };
          function callRuntimeCallbacks(this: any, e: any): any {
            for (; ((e as any).length as any) > (0 as any);) (((e as any).shift as any)() as any)(Module);
          }
          var UTF8Decoder: any = ("undefined" as any) != (typeof TextDecoder as any) ? new (TextDecoder as any)("utf8") : void 0;
          function UTF8ArrayToString(this: any, e: any, t: any, r: any): any {
            for (var _: any = (t as any) + (r as any), s: any = t; (e as any)[s] && !((s as any) >= (_ as any));) ++s;
            if (((s as any) - (t as any) as any) > (16 as any) && (e as any).buffer && UTF8Decoder) return ((UTF8Decoder as any).decode as any)(((e as any).subarray as any)(t, s));
            for (var n: any = ""; (t as any) < (s as any);) {
              var a: any = (e as any)[t++];
              if ((128 as any) & (a as any)) {
                var o: any = (63 as any) & ((e as any)[t++] as any);
                if ((192 as any) != (((224 as any) & (a as any)) as any)) {
                  var l: any = (63 as any) & ((e as any)[t++] as any);
                  if (((a = (224 as any) == (((240 as any) & (a as any)) as any) ? ((((((15 as any) & (a as any)) as any) << (12 as any) as any) | ((o as any) << (6 as any) as any)) as any) | (l as any) : ((((((((7 as any) & (a as any)) as any) << (18 as any) as any) | ((o as any) << (12 as any) as any)) as any) | ((l as any) << (6 as any) as any)) as any) | (((63 as any) & ((e as any)[t++] as any)) as any)) as any) < (65536 as any)) n += ((String as any).fromCharCode as any)(a);else {
                    var i: any = (a as any) - (65536 as any);
                    n += ((String as any).fromCharCode as any)((55296 as any) | ((i as any) >> (10 as any) as any), (56320 as any) | (((1023 as any) & (i as any)) as any));
                  }
                } else n += ((String as any).fromCharCode as any)(((((31 as any) & (a as any)) as any) << (6 as any) as any) | (o as any));
              } else n += ((String as any).fromCharCode as any)(a);
            }
            return n;
          }
          function getDylinkMetadata(this: any, e: any): any {
            var t: any = 0,
              r: any = 0;
            function _(this: any): any {
              for (var r: any = 0, _: any = 1;;) {
                var s: any = (e as any)[t++];
                if (r += (((127 as any) & (s as any)) as any) * (_ as any), _ *= 128, !((128 as any) & (s as any))) break;
              }
              return r;
            }
            function s(this: any): any {
              var r: any = (_ as any)();
              return (UTF8ArrayToString as any)(e, ((t += r) as any) - (r as any), r);
            }
            function n(this: any, e: any, t: any): any {
              if (e) throw new (Error as any)(t);
            }
            var a: any = "dylink.0";
            if (e instanceof (WebAssembly as any).Module) {
              var o: any = (((WebAssembly as any).Module as any).customSections as any)(e, a);
              (0 as any) === ((o as any).length as any) && (a = "dylink", o = (((WebAssembly as any).Module as any).customSections as any)(e, a)), (n as any)((0 as any) === ((o as any).length as any), "need dylink section"), r = ((e = new (Uint8Array as any)((o as any)[0])) as any).length;
            } else {
              (n as any)(!((1836278016 as any) == ((new (Uint32Array as any)((new (Uint8Array as any)(((e as any).subarray as any)(0, 24)) as any).buffer) as any)[0] as any)), "need to see wasm magic number"), (n as any)((0 as any) !== ((e as any)[8] as any), "need the dylink section to be first"), t = 9;
              var l: any = (_ as any)();
              r = (t as any) + (l as any), a = (s as any)();
            }
            var i: any = {
              neededDynlibs: [],
              tlsExports: new (Set as any)(),
              weakImports: new (Set as any)()
            };
            if (("dylink" as any) == (a as any)) {
              (i as any).memorySize = (_ as any)(), (i as any).memoryAlign = (_ as any)(), (i as any).tableSize = (_ as any)(), (i as any).tableAlign = (_ as any)();
              for (var u: any = (_ as any)(), d: any = 0; (d as any) < (u as any); ++d) {
                var m: any = (s as any)();
                (((i as any).neededDynlibs as any).push as any)(m);
              }
            } else {
              (n as any)(("dylink.0" as any) !== (a as any));
              for (; (t as any) < (r as any);) {
                var c: any = (e as any)[t++],
                  p: any = (_ as any)();
                if ((1 as any) === (c as any)) (i as any).memorySize = (_ as any)(), (i as any).memoryAlign = (_ as any)(), (i as any).tableSize = (_ as any)(), (i as any).tableAlign = (_ as any)();else if ((2 as any) === (c as any)) for (u = (_ as any)(), d = 0; (d as any) < (u as any); ++d) m = (s as any)(), (((i as any).neededDynlibs as any).push as any)(m);else if ((3 as any) === (c as any)) for (var h: any = (_ as any)(); h--;) {
                  var f: any = (s as any)();
                  (256 as any) & ((_ as any)() as any) && (((i as any).tlsExports as any).add as any)(f);
                } else if ((4 as any) === (c as any)) for (h = (_ as any)(); h--;) {
                  (s as any)(), f = (s as any)();
                  (1 as any) == (((3 as any) & ((_ as any)() as any)) as any) && (((i as any).weakImports as any).add as any)(f);
                } else t += p;
              }
            }
            return i;
          }
          function getValue(this: any, e: any, t: any = "i8"): any {
            switch (((t as any).endsWith as any)("*") && (t = "*"), t) {
              case "i1":
              case "i8":
                return (HEAP8 as any)[(e as any) >> (0 as any)];
              case "i16":
                return (HEAP16 as any)[(e as any) >> (1 as any)];
              case "i32":
              case "i64":
                return (HEAP32 as any)[(e as any) >> (2 as any)];
              case "float":
                return (HEAPF32 as any)[(e as any) >> (2 as any)];
              case "double":
                return (HEAPF64 as any)[(e as any) >> (3 as any)];
              case "*":
                return (HEAPU32 as any)[(e as any) >> (2 as any)];
              default:
                (abort as any)(("invalid type for getValue: " as any) + (t as any));
            }
          }
          function newDSO(this: any, e: any, t: any, r: any): any {
            var _: any = {
              refcount: (1 as any) / (0 as any),
              name: e,
              exports: r,
              global: !0
            };
            return ((LDSO as any).loadedLibsByName as any)[e] = _, (null as any) != (t as any) && (((LDSO as any).loadedLibsByHandle as any)[t] = _), _;
          }
          var LDSO: any = {
              loadedLibsByName: {},
              loadedLibsByHandle: {},
              init: (): any => (newDSO as any)("__main__", 0, wasmImports)
            },
            ___heap_base: any = 78144;
          function zeroMemory(this: any, e: any, t: any): any {
            return ((HEAPU8 as any).fill as any)(0, e, (e as any) + (t as any)), e;
          }
          function getMemory(this: any, e: any): any {
            if (runtimeInitialized) return (zeroMemory as any)((_malloc as any)(e), e);
            var t: any = ___heap_base,
              r: any = (((t as any) + (e as any) as any) + (15 as any) as any) & (-16 as any);
            return ___heap_base = r, ((GOT as any).__heap_base as any).value = r, t;
          }
          function isInternalSym(this: any, e: any): any {
            return ((["__cpp_exception", "__c_longjmp", "__wasm_apply_data_relocs", "__dso_handle", "__tls_size", "__tls_align", "__set_stack_limits", "_emscripten_tls_init", "__wasm_init_tls", "__wasm_call_ctors", "__start_em_asm", "__stop_em_asm"] as any).includes as any)(e);
          }
          function uleb128Encode(this: any, e: any, t: any): any {
            (e as any) < (128 as any) ? ((t as any).push as any)(e) : ((t as any).push as any)(((e as any) % (128 as any) as any) | (128 as any), (e as any) >> (7 as any));
          }
          function sigToWasmTypes(this: any, e: any): any {
            for (var t: any = {
                i: "i32",
                j: "i32",
                f: "f32",
                d: "f64",
                p: "i32"
              }, r: any = {
                parameters: [],
                results: ("v" as any) == ((e as any)[0] as any) ? [] : [(t as any)[(e as any)[0]]]
              }, _: any = 1; (_ as any) < ((e as any).length as any); ++_) (((r as any).parameters as any).push as any)((t as any)[(e as any)[_]]), ("j" as any) === ((e as any)[_] as any) && (((r as any).parameters as any).push as any)("i32");
            return r;
          }
          function generateFuncType(this: any, e: any, t: any): any {
            var r: any = ((e as any).slice as any)(0, 1),
              _: any = ((e as any).slice as any)(1),
              s: any = {
                i: 127,
                p: 127,
                j: 126,
                f: 125,
                d: 124
              };
            ((t as any).push as any)(96), (uleb128Encode as any)((_ as any).length, t);
            for (var n: any = 0; (n as any) < ((_ as any).length as any); ++n) ((t as any).push as any)((s as any)[(_ as any)[n]]);
            ("v" as any) == (r as any) ? ((t as any).push as any)(0) : ((t as any).push as any)(1, (s as any)[r]);
          }
          function convertJsFunctionToWasm(this: any, e: any, t: any): any {
            if (("function" as any) == (typeof (WebAssembly as any).Function as any)) return new ((WebAssembly as any).Function as any)((sigToWasmTypes as any)(t), e);
            var r: any = [1];
            (generateFuncType as any)(t, r);
            var _: any = [0, 97, 115, 109, 1, 0, 0, 0, 1];
            (uleb128Encode as any)((r as any).length, _), (((_ as any).push as any).apply as any)(_, r), ((_ as any).push as any)(2, 7, 1, 1, 101, 1, 102, 0, 0, 7, 5, 1, 1, 102, 0, 0);
            var s: any = new ((WebAssembly as any).Module as any)(new (Uint8Array as any)(_));
            return ((new ((WebAssembly as any).Instance as any)(s, {
              e: {
                f: e
              }
            }) as any).exports as any).f;
          }
          var wasmTableMirror: any = [];
          function getWasmTableEntry(this: any, e: any): any {
            var t: any = (wasmTableMirror as any)[e];
            return t || ((e as any) >= ((wasmTableMirror as any).length as any) && ((wasmTableMirror as any).length = (e as any) + (1 as any)), (wasmTableMirror as any)[e] = t = ((wasmTable as any).get as any)(e)), t;
          }
          function updateTableMap(this: any, e: any, t: any): any {
            if (functionsInTableMap) for (var r: any = e; (r as any) < ((e as any) + (t as any) as any); r++) {
              var _: any = (getWasmTableEntry as any)(r);
              _ && ((functionsInTableMap as any).set as any)(_, r);
            }
          }
          var functionsInTableMap: any = void 0;
          function getFunctionAddress(this: any, e: any): any {
            return functionsInTableMap || (functionsInTableMap = new (WeakMap as any)(), (updateTableMap as any)(0, (wasmTable as any).length)), ((functionsInTableMap as any).get as any)(e) || 0;
          }
          var freeTableIndexes: any = [];
          function getEmptyTableSlot(this: any): any {
            if ((freeTableIndexes as any).length) return ((freeTableIndexes as any).pop as any)();
            try {
              ((wasmTable as any).grow as any)(1);
            } catch (e: any) {
              if (!(e instanceof RangeError)) throw e;
              throw "Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.";
            }
            return ((wasmTable as any).length as any) - (1 as any);
          }
          function setWasmTableEntry(this: any, e: any, t: any): any {
            ((wasmTable as any).set as any)(e, t), (wasmTableMirror as any)[e] = ((wasmTable as any).get as any)(e);
          }
          function addFunction(this: any, e: any, t: any): any {
            var r: any = (getFunctionAddress as any)(e);
            if (r) return r;
            var _: any = (getEmptyTableSlot as any)();
            try {
              (setWasmTableEntry as any)(_, e);
            } catch (r: any) {
              if (!(r instanceof TypeError)) throw r;
              (setWasmTableEntry as any)(_, (convertJsFunctionToWasm as any)(e, t));
            }
            return ((functionsInTableMap as any).set as any)(e, _), _;
          }
          function updateGOT(this: any, e: any, t: any): any {
            var r: any;
            for (r in e) if (!(isInternalSym as any)(r)) {
              var _: any = (e as any)[r];
              ((r as any).startsWith as any)("orig$") && (r = (((r as any).split as any)("$") as any)[1], t = !0), (GOT as any)[r] || ((GOT as any)[r] = new ((WebAssembly as any).Global as any)({
                value: "i32",
                mutable: !0
              })), (t || (0 as any) == (((GOT as any)[r] as any).value as any)) && (("function" as any) == (typeof _ as any) ? ((GOT as any)[r] as any).value = (addFunction as any)(_) : ("number" as any) == (typeof _ as any) ? ((GOT as any)[r] as any).value = _ : (err as any)(((("unhandled export type for `" as any) + (r as any) as any) + ("`: " as any) as any) + (typeof _ as any)));
            }
          }
          function relocateExports(this: any, e: any, t: any, r: any): any {
            var s: any;
            var _: any = {};
            for (s in e) {
              var n: any = (e as any)[s];
              ("object" as any) == (typeof n as any) && (n = (n as any).value), ("number" as any) == (typeof n as any) && (n += t), (_ as any)[s] = n;
            }
            return (updateGOT as any)(_, r), _;
          }
          function isSymbolDefined(this: any, e: any): any {
            var t: any = (wasmImports as any)[e];
            return !(!t || (t as any).stub);
          }
          function resolveGlobalSymbol(this: any, e: any, t: any = !1): any {
            var r: any;
            return t && ("orig$" as any) + (e as any) in wasmImports && (e = ("orig$" as any) + (e as any)), (isSymbolDefined as any)(e) ? r = (wasmImports as any)[e] : ((e as any).startsWith as any)("invoke_") && (r = (wasmImports as any)[e] = (createInvokeFunction as any)((((e as any).split as any)("_") as any)[1])), {
              sym: r,
              name: e
            };
          }
          function alignMemory(this: any, e: any, t: any): any {
            return (((Math as any).ceil as any)((e as any) / (t as any)) as any) * (t as any);
          }
          function dynCallLegacy(this: any, e: any, t: any, r: any): any {
            var _: any = (Module as any)[("dynCall_" as any) + (e as any)];
            return r && (r as any).length ? ((_ as any).apply as any)(null, (([t] as any).concat as any)(r)) : ((_ as any).call as any)(null, t);
          }
          function dynCall(this: any, e: any, t: any, r: any): any {
            return ((e as any).includes as any)("j") ? (dynCallLegacy as any)(e, t, r) : (((getWasmTableEntry as any)(t) as any).apply as any)(null, r);
          }
          function createInvokeFunction(this: any, e: any): any {
            return function (this: any): any {
              var t: any = (stackSave as any)();
              try {
                return (dynCall as any)(e, (arguments as any)[0], ((((Array as any).prototype as any).slice as any).call as any)(arguments, 1));
              } catch (e: any) {
                if ((stackRestore as any)(t), (e as any) !== ((e as any) + (0 as any) as any)) throw e;
                (_setThrew as any)(1, 0);
              }
            };
          }
          function UTF8ToString(this: any, e: any, t: any): any {
            return e ? (UTF8ArrayToString as any)(HEAPU8, e, t) : "";
          }
          function loadWebAssemblyModule(this: any, binary: any, flags: any, localScope: any, handle: any): any {
            var metadata: any = (getDylinkMetadata as any)(binary);
            function loadModule(this: any): any {
              var firstLoad: any = !handle || !(HEAP8 as any)[((handle as any) + (8 as any) as any) >> (0 as any)];
              if (firstLoad) {
                var memAlign: any = ((Math as any).pow as any)(2, (metadata as any).memoryAlign);
                memAlign = ((Math as any).max as any)(memAlign, 16);
                var memoryBase: any = (metadata as any).memorySize ? (alignMemory as any)((getMemory as any)(((metadata as any).memorySize as any) + (memAlign as any)), memAlign) : 0,
                  tableBase: any = (metadata as any).tableSize ? (wasmTable as any).length : 0;
                handle && ((HEAP8 as any)[((handle as any) + (8 as any) as any) >> (0 as any)] = 1, (HEAPU32 as any)[((handle as any) + (12 as any) as any) >> (2 as any)] = memoryBase, (HEAP32 as any)[((handle as any) + (16 as any) as any) >> (2 as any)] = (metadata as any).memorySize, (HEAPU32 as any)[((handle as any) + (20 as any) as any) >> (2 as any)] = tableBase, (HEAP32 as any)[((handle as any) + (24 as any) as any) >> (2 as any)] = (metadata as any).tableSize);
              } else memoryBase = (HEAPU32 as any)[((handle as any) + (12 as any) as any) >> (2 as any)], tableBase = (HEAPU32 as any)[((handle as any) + (20 as any) as any) >> (2 as any)];
              var tableGrowthNeeded: any = ((tableBase as any) + ((metadata as any).tableSize as any) as any) - ((wasmTable as any).length as any),
                moduleExports: any;
              function resolveSymbol(this: any, e: any): any {
                var t: any = ((resolveGlobalSymbol as any)(e) as any).sym;
                return !t && localScope && (t = (localScope as any)[e]), t || (t = (moduleExports as any)[e]), t;
              }
              (tableGrowthNeeded as any) > (0 as any) && ((wasmTable as any).grow as any)(tableGrowthNeeded);
              var proxyHandler: any = {
                  get: function (this: any, e: any, t: any): any {
                    switch (t) {
                      case "__memory_base":
                        return memoryBase;
                      case "__table_base":
                        return tableBase;
                    }
                    if (t in wasmImports && !((wasmImports as any)[t] as any).stub) return (wasmImports as any)[t];
                    var r: any;
                    t in e || ((e as any)[t] = function (this: any): any {
                      return r || (r = (resolveSymbol as any)(t)), ((r as any).apply as any)(null, arguments);
                    });
                    return (e as any)[t];
                  }
                },
                proxy: any = new (Proxy as any)({}, proxyHandler),
                info: any = {
                  "GOT.mem": new (Proxy as any)({}, GOTHandler),
                  "GOT.func": new (Proxy as any)({}, GOTHandler),
                  env: proxy,
                  wasi_snapshot_preview1: proxy
                };
              function postInstantiation(this: any, instance: any): any {
                function addEmAsm(this: any, addr: any, body: any): any {
                  for (var args: any = [], arity: any = 0; (arity as any) < (16 as any) && (-1 as any) != (((body as any).indexOf as any)(("$" as any) + (arity as any)) as any); arity++) ((args as any).push as any)(("$" as any) + (arity as any));
                  args = ((args as any).join as any)(",");
                  var func: any = (((("(" as any) + (args as any) as any) + (" ) => { " as any) as any) + (body as any) as any) + ("};" as any);
                  (ASM_CONSTS as any)[start] = (eval as any)(func);
                }
                if ((updateTableMap as any)(tableBase, (metadata as any).tableSize), moduleExports = (relocateExports as any)((instance as any).exports, memoryBase), (flags as any).allowUndefined || (reportUndefinedSymbols as any)(), "__start_em_asm" in moduleExports) for (var start: any = (moduleExports as any).__start_em_asm, stop: any = (moduleExports as any).__stop_em_asm; (start as any) < (stop as any);) {
                  var jsString: any = (UTF8ToString as any)(start);
                  (addEmAsm as any)(start, jsString), start = (((HEAPU8 as any).indexOf as any)(0, start) as any) + (1 as any);
                }
                var applyRelocs: any = (moduleExports as any).__wasm_apply_data_relocs;
                applyRelocs && (runtimeInitialized ? (applyRelocs as any)() : ((__RELOC_FUNCS__ as any).push as any)(applyRelocs));
                var init: any = (moduleExports as any).__wasm_call_ctors;
                return init && (runtimeInitialized ? (init as any)() : ((__ATINIT__ as any).push as any)(init)), moduleExports;
              }
              if ((flags as any).loadAsync) {
                if (binary instanceof (WebAssembly as any).Module) {
                  var instance: any = new ((WebAssembly as any).Instance as any)(binary, info);
                  return ((Promise as any).resolve as any)((postInstantiation as any)(instance));
                }
                return ((((WebAssembly as any).instantiate as any)(binary, info) as any).then as any)((e: any): any => (postInstantiation as any)((e as any).instance));
              }
              var module: any = binary instanceof (WebAssembly as any).Module ? binary : new ((WebAssembly as any).Module as any)(binary),
                instance: any = new ((WebAssembly as any).Instance as any)(module, info);
              return (postInstantiation as any)(instance);
            }
            return currentModuleWeakSymbols = (metadata as any).weakImports, (flags as any).loadAsync ? (((((metadata as any).neededDynlibs as any).reduce as any)((e: any, t: any): any => ((e as any).then as any)((): any => (loadDynamicLibrary as any)(t, flags)), ((Promise as any).resolve as any)()) as any).then as any)(loadModule) : ((((metadata as any).neededDynlibs as any).forEach as any)((e: any): any => (loadDynamicLibrary as any)(e, flags, localScope)), (loadModule as any)());
          }
          function mergeLibSymbols(this: any, e: any, t: any): any {
            var r: any;
            for (r in e) {
              if (!((e as any).hasOwnProperty as any)(r)) continue;
              const t: any = (t: any): any => {
                (isSymbolDefined as any)(t) || ((wasmImports as any)[t] = (e as any)[r]);
              };
              (t as any)(r);
              const _: string = "__main_argc_argv";
              ("main" as any) == (r as any) && (t as any)(_), (r as any) == (_ as any) && (t as any)("main"), ((r as any).startsWith as any)("dynCall_") && !((Module as any).hasOwnProperty as any)(r) && ((Module as any)[r] = (e as any)[r]);
            }
          }
          function asyncLoad(this: any, e: any, t: any, r: any, _: any): any {
            var s: any = _ ? "" : (getUniqueRunDependency as any)(("al " as any) + (e as any));
            (readAsync as any)(e, (r: any): any => {
              (assert as any)(r, (('Loading data file "' as any) + (e as any) as any) + ('" failed (no arrayBuffer).' as any)), (t as any)(new (Uint8Array as any)(r)), s && (removeRunDependency as any)(s);
            }, (t: any): any => {
              if (!r) throw (('Loading data file "' as any) + (e as any) as any) + ('" failed.' as any);
              (r as any)();
            }), s && (addRunDependency as any)(s);
          }
          function loadDynamicLibrary(this: any, e: any, t: any = {
            global: !0,
            nodelete: !0
          }, r: any, _: any): any {
            var s: any = ((LDSO as any).loadedLibsByName as any)[e];
            if (s) return (t as any).global && !(s as any).global && ((s as any).global = !0, ("loading" as any) !== ((s as any).exports as any) && (mergeLibSymbols as any)((s as any).exports, e)), (t as any).nodelete && ((s as any).refcount as any) !== ((1 as any) / (0 as any) as any) && ((s as any).refcount = (1 as any) / (0 as any)), (s as any).refcount++, _ && (((LDSO as any).loadedLibsByHandle as any)[_] = s), !(t as any).loadAsync || ((Promise as any).resolve as any)(!0);
            function n(this: any): any {
              if ((t as any).fs && (((t as any).fs as any).findObject as any)(e)) {
                var r: any = (((t as any).fs as any).readFile as any)(e, {
                  encoding: "binary"
                });
                return r instanceof Uint8Array || (r = new (Uint8Array as any)(r)), (t as any).loadAsync ? ((Promise as any).resolve as any)(r) : r;
              }
              var _: any = (locateFile as any)(e);
              if ((t as any).loadAsync) return new (Promise as any)(function (this: any, e: any, t: any): any {
                (asyncLoad as any)(_, (t: any): any => (e as any)(t), t);
              });
              if (!readBinary) throw new (Error as any)((_ as any) + (": file not found, and synchronous loading of external files is not available" as any));
              return (readBinary as any)(_);
            }
            function a(this: any): any {
              if (("undefined" as any) != (typeof preloadedWasm as any) && (preloadedWasm as any)[e]) {
                var s: any = (preloadedWasm as any)[e];
                return (t as any).loadAsync ? ((Promise as any).resolve as any)(s) : s;
              }
              return (t as any).loadAsync ? (((n as any)() as any).then as any)((e: any): any => (loadWebAssemblyModule as any)(e, t, r, _)) : (loadWebAssemblyModule as any)((n as any)(), t, r, _);
            }
            function o(this: any, t: any): any {
              (s as any).global ? (mergeLibSymbols as any)(t, e) : r && ((Object as any).assign as any)(r, t), (s as any).exports = t;
            }
            return ((s = (newDSO as any)(e, _, "loading")) as any).refcount = (t as any).nodelete ? (1 as any) / (0 as any) : 1, (s as any).global = (t as any).global, (t as any).loadAsync ? (((a as any)() as any).then as any)((e: any): any => ((o as any)(e), !0)) : ((o as any)((a as any)()), !0);
          }
          function reportUndefinedSymbols(this: any): any {
            var e: any;
            for (e in GOT) if ((0 as any) == (((GOT as any)[e] as any).value as any)) {
              var t: any = ((resolveGlobalSymbol as any)(e, !0) as any).sym;
              if (!t && !((GOT as any)[e] as any).required) continue;
              if (("function" as any) == (typeof t as any)) ((GOT as any)[e] as any).value = (addFunction as any)(t, (t as any).sig);else {
                if (("number" as any) != (typeof t as any)) throw new (Error as any)(((("bad export type for `" as any) + (e as any) as any) + ("`: " as any) as any) + (typeof t as any));
                ((GOT as any)[e] as any).value = t;
              }
            }
          }
          function loadDylibs(this: any): any {
            (dynamicLibraries as any).length ? ((addRunDependency as any)("loadDylibs"), ((((dynamicLibraries as any).reduce as any)((e: any, t: any): any => ((e as any).then as any)((): any => (loadDynamicLibrary as any)(t, {
              loadAsync: !0,
              global: !0,
              nodelete: !0,
              allowUndefined: !0
            })), ((Promise as any).resolve as any)()) as any).then as any)((): any => {
              (reportUndefinedSymbols as any)(), (removeRunDependency as any)("loadDylibs");
            })) : (reportUndefinedSymbols as any)();
          }
          function setValue(this: any, e: any, t: any, r: any = "i8"): any {
            switch (((r as any).endsWith as any)("*") && (r = "*"), r) {
              case "i1":
              case "i8":
                (HEAP8 as any)[(e as any) >> (0 as any)] = t;
                break;
              case "i16":
                (HEAP16 as any)[(e as any) >> (1 as any)] = t;
                break;
              case "i32":
                (HEAP32 as any)[(e as any) >> (2 as any)] = t;
                break;
              case "i64":
                tempI64 = [(t as any) >>> (0 as any), (tempDouble = t, (+((Math as any).abs as any)(tempDouble) as any) >= (1 as any) ? (tempDouble as any) > (0 as any) ? (+((Math as any).floor as any)((tempDouble as any) / (4294967296 as any)) as any) >>> (0 as any) : (~~+((Math as any).ceil as any)(((tempDouble as any) - (+((~~tempDouble as any) >>> (0 as any)) as any) as any) / (4294967296 as any)) as any) >>> (0 as any) : 0)], (HEAP32 as any)[(e as any) >> (2 as any)] = (tempI64 as any)[0], (HEAP32 as any)[((e as any) + (4 as any) as any) >> (2 as any)] = (tempI64 as any)[1];
                break;
              case "float":
                (HEAPF32 as any)[(e as any) >> (2 as any)] = t;
                break;
              case "double":
                (HEAPF64 as any)[(e as any) >> (3 as any)] = t;
                break;
              case "*":
                (HEAPU32 as any)[(e as any) >> (2 as any)] = t;
                break;
              default:
                (abort as any)(("invalid type for setValue: " as any) + (r as any));
            }
          }
          var ___memory_base: any = new ((WebAssembly as any).Global as any)({
              value: "i32",
              mutable: !1
            }, 1024),
            ___stack_pointer: any = new ((WebAssembly as any).Global as any)({
              value: "i32",
              mutable: !0
            }, 78144),
            ___table_base: any = new ((WebAssembly as any).Global as any)({
              value: "i32",
              mutable: !1
            }, 1),
            nowIsMonotonic: any = !0,
            _emscripten_get_now: any;
          function __emscripten_get_now_is_monotonic(this: any): any {
            return nowIsMonotonic;
          }
          function _abort(this: any): any {
            (abort as any)("");
          }
          function _emscripten_date_now(this: any): any {
            return ((Date as any).now as any)();
          }
          function _emscripten_memcpy_big(this: any, e: any, t: any, r: any): any {
            ((HEAPU8 as any).copyWithin as any)(e, t, (t as any) + (r as any));
          }
          function getHeapMax(this: any): any {
            return 2147483648;
          }
          function emscripten_realloc_buffer(this: any, e: any): any {
            var t: any = (wasmMemory as any).buffer;
            try {
              return ((wasmMemory as any).grow as any)((((e as any) - ((t as any).byteLength as any) as any) + (65535 as any) as any) >>> (16 as any)), (updateMemoryViews as any)(), 1;
            } catch (e: any) {}
          }
          function _emscripten_resize_heap(this: any, e: any): any {
            var t: any = (HEAPU8 as any).length;
            e >>>= 0;
            var r: any = (getHeapMax as any)();
            if ((e as any) > (r as any)) return !1;
            for (var _: any = 1; (_ as any) <= (4 as any); _ *= 2) {
              var s: any = (t as any) * ((1 as any) + ((.2 as any) / (_ as any) as any) as any);
              if (s = ((Math as any).min as any)(s, (e as any) + (100663296 as any)), (emscripten_realloc_buffer as any)(((Math as any).min as any)(r, ((n = ((Math as any).max as any)(e, s)) as any) + ((((a = 65536) as any) - ((n as any) % (a as any) as any) as any) % (a as any) as any)))) return !0;
            }
            var n: any, a: any;
            return !1;
          }
          (__emscripten_get_now_is_monotonic as any).sig = "i", (_abort as any).sig = "v", (_emscripten_date_now as any).sig = "d", _emscripten_get_now = ENVIRONMENT_IS_NODE ? (): any => {
            var e: any = ((process as any).hrtime as any)();
            return ((1e3 as any) * ((e as any)[0] as any) as any) + (((e as any)[1] as any) / (1e6 as any) as any);
          } : (): any => ((performance as any).now as any)(), (_emscripten_get_now as any).sig = "d", (_emscripten_memcpy_big as any).sig = "vppp", (_emscripten_resize_heap as any).sig = "ip";
          var SYSCALLS: any = {
            DEFAULT_POLLMASK: 5,
            calculateAt: function (this: any, e: any, t: any, r: any): any {
              if (((PATH as any).isAbs as any)(t)) return t;
              var _: any;
              (-100 as any) === (e as any) ? _ = ((FS as any).cwd as any)() : _ = (((SYSCALLS as any).getStreamFromFD as any)(e) as any).path;
              if ((0 as any) == ((t as any).length as any)) {
                if (!r) throw new ((FS as any).ErrnoError as any)(44);
                return _;
              }
              return ((PATH as any).join2 as any)(_, t);
            },
            doStat: function (this: any, e: any, t: any, r: any): any {
              try {
                var _: any = (e as any)(t);
              } catch (e: any) {
                if (e && (e as any).node && (((PATH as any).normalize as any)(t) as any) !== (((PATH as any).normalize as any)(((FS as any).getPath as any)((e as any).node)) as any)) return -54;
                throw e;
              }
              (HEAP32 as any)[(r as any) >> (2 as any)] = (_ as any).dev, (HEAP32 as any)[((r as any) + (8 as any) as any) >> (2 as any)] = (_ as any).ino, (HEAP32 as any)[((r as any) + (12 as any) as any) >> (2 as any)] = (_ as any).mode, (HEAPU32 as any)[((r as any) + (16 as any) as any) >> (2 as any)] = (_ as any).nlink, (HEAP32 as any)[((r as any) + (20 as any) as any) >> (2 as any)] = (_ as any).uid, (HEAP32 as any)[((r as any) + (24 as any) as any) >> (2 as any)] = (_ as any).gid, (HEAP32 as any)[((r as any) + (28 as any) as any) >> (2 as any)] = (_ as any).rdev, tempI64 = [((_ as any).size as any) >>> (0 as any), (tempDouble = (_ as any).size, (+((Math as any).abs as any)(tempDouble) as any) >= (1 as any) ? (tempDouble as any) > (0 as any) ? (+((Math as any).floor as any)((tempDouble as any) / (4294967296 as any)) as any) >>> (0 as any) : (~~+((Math as any).ceil as any)(((tempDouble as any) - (+((~~tempDouble as any) >>> (0 as any)) as any) as any) / (4294967296 as any)) as any) >>> (0 as any) : 0)], (HEAP32 as any)[((r as any) + (40 as any) as any) >> (2 as any)] = (tempI64 as any)[0], (HEAP32 as any)[((r as any) + (44 as any) as any) >> (2 as any)] = (tempI64 as any)[1], (HEAP32 as any)[((r as any) + (48 as any) as any) >> (2 as any)] = 4096, (HEAP32 as any)[((r as any) + (52 as any) as any) >> (2 as any)] = (_ as any).blocks;
              var s: any = (((_ as any).atime as any).getTime as any)(),
                n: any = (((_ as any).mtime as any).getTime as any)(),
                a: any = (((_ as any).ctime as any).getTime as any)();
              return tempI64 = [(((Math as any).floor as any)((s as any) / (1e3 as any)) as any) >>> (0 as any), (tempDouble = ((Math as any).floor as any)((s as any) / (1e3 as any)), (+((Math as any).abs as any)(tempDouble) as any) >= (1 as any) ? (tempDouble as any) > (0 as any) ? (+((Math as any).floor as any)((tempDouble as any) / (4294967296 as any)) as any) >>> (0 as any) : (~~+((Math as any).ceil as any)(((tempDouble as any) - (+((~~tempDouble as any) >>> (0 as any)) as any) as any) / (4294967296 as any)) as any) >>> (0 as any) : 0)], (HEAP32 as any)[((r as any) + (56 as any) as any) >> (2 as any)] = (tempI64 as any)[0], (HEAP32 as any)[((r as any) + (60 as any) as any) >> (2 as any)] = (tempI64 as any)[1], (HEAPU32 as any)[((r as any) + (64 as any) as any) >> (2 as any)] = ((s as any) % (1e3 as any) as any) * (1e3 as any), tempI64 = [(((Math as any).floor as any)((n as any) / (1e3 as any)) as any) >>> (0 as any), (tempDouble = ((Math as any).floor as any)((n as any) / (1e3 as any)), (+((Math as any).abs as any)(tempDouble) as any) >= (1 as any) ? (tempDouble as any) > (0 as any) ? (+((Math as any).floor as any)((tempDouble as any) / (4294967296 as any)) as any) >>> (0 as any) : (~~+((Math as any).ceil as any)(((tempDouble as any) - (+((~~tempDouble as any) >>> (0 as any)) as any) as any) / (4294967296 as any)) as any) >>> (0 as any) : 0)], (HEAP32 as any)[((r as any) + (72 as any) as any) >> (2 as any)] = (tempI64 as any)[0], (HEAP32 as any)[((r as any) + (76 as any) as any) >> (2 as any)] = (tempI64 as any)[1], (HEAPU32 as any)[((r as any) + (80 as any) as any) >> (2 as any)] = ((n as any) % (1e3 as any) as any) * (1e3 as any), tempI64 = [(((Math as any).floor as any)((a as any) / (1e3 as any)) as any) >>> (0 as any), (tempDouble = ((Math as any).floor as any)((a as any) / (1e3 as any)), (+((Math as any).abs as any)(tempDouble) as any) >= (1 as any) ? (tempDouble as any) > (0 as any) ? (+((Math as any).floor as any)((tempDouble as any) / (4294967296 as any)) as any) >>> (0 as any) : (~~+((Math as any).ceil as any)(((tempDouble as any) - (+((~~tempDouble as any) >>> (0 as any)) as any) as any) / (4294967296 as any)) as any) >>> (0 as any) : 0)], (HEAP32 as any)[((r as any) + (88 as any) as any) >> (2 as any)] = (tempI64 as any)[0], (HEAP32 as any)[((r as any) + (92 as any) as any) >> (2 as any)] = (tempI64 as any)[1], (HEAPU32 as any)[((r as any) + (96 as any) as any) >> (2 as any)] = ((a as any) % (1e3 as any) as any) * (1e3 as any), tempI64 = [((_ as any).ino as any) >>> (0 as any), (tempDouble = (_ as any).ino, (+((Math as any).abs as any)(tempDouble) as any) >= (1 as any) ? (tempDouble as any) > (0 as any) ? (+((Math as any).floor as any)((tempDouble as any) / (4294967296 as any)) as any) >>> (0 as any) : (~~+((Math as any).ceil as any)(((tempDouble as any) - (+((~~tempDouble as any) >>> (0 as any)) as any) as any) / (4294967296 as any)) as any) >>> (0 as any) : 0)], (HEAP32 as any)[((r as any) + (104 as any) as any) >> (2 as any)] = (tempI64 as any)[0], (HEAP32 as any)[((r as any) + (108 as any) as any) >> (2 as any)] = (tempI64 as any)[1], 0;
            },
            doMsync: function (this: any, e: any, t: any, r: any, _: any, s: any): any {
              if (!((FS as any).isFile as any)(((t as any).node as any).mode)) throw new ((FS as any).ErrnoError as any)(43);
              if ((2 as any) & (_ as any)) return 0;
              var n: any = ((HEAPU8 as any).slice as any)(e, (e as any) + (r as any));
              ((FS as any).msync as any)(t, n, s, r, _);
            },
            varargs: void 0,
            get: function (this: any): any {
              return (SYSCALLS as any).varargs += 4, (HEAP32 as any)[(((SYSCALLS as any).varargs as any) - (4 as any) as any) >> (2 as any)];
            },
            getStr: function (this: any, e: any): any {
              return (UTF8ToString as any)(e);
            },
            getStreamFromFD: function (this: any, e: any): any {
              var t: any = ((FS as any).getStream as any)(e);
              if (!t) throw new ((FS as any).ErrnoError as any)(8);
              return t;
            }
          };
          function _fd_close(this: any, e: any): any {
            try {
              var t: any = ((SYSCALLS as any).getStreamFromFD as any)(e);
              return ((FS as any).close as any)(t), 0;
            } catch (e: any) {
              if (("undefined" as any) == (typeof FS as any) || ("ErrnoError" as any) !== ((e as any).name as any)) throw e;
              return (e as any).errno;
            }
          }
          function convertI32PairToI53Checked(this: any, e: any, t: any): any {
            return (((t as any) + (2097152 as any) as any) >>> (0 as any) as any) < ((4194305 as any) - (!!e as any) as any) ? ((e as any) >>> (0 as any) as any) + ((4294967296 as any) * (t as any) as any) : NaN;
          }
          function _fd_seek(this: any, e: any, t: any, r: any, _: any, s: any): any {
            try {
              var n: any = (convertI32PairToI53Checked as any)(t, r);
              if ((isNaN as any)(n)) return 61;
              var a: any = ((SYSCALLS as any).getStreamFromFD as any)(e);
              return ((FS as any).llseek as any)(a, n, _), tempI64 = [((a as any).position as any) >>> (0 as any), (tempDouble = (a as any).position, (+((Math as any).abs as any)(tempDouble) as any) >= (1 as any) ? (tempDouble as any) > (0 as any) ? (+((Math as any).floor as any)((tempDouble as any) / (4294967296 as any)) as any) >>> (0 as any) : (~~+((Math as any).ceil as any)(((tempDouble as any) - (+((~~tempDouble as any) >>> (0 as any)) as any) as any) / (4294967296 as any)) as any) >>> (0 as any) : 0)], (HEAP32 as any)[(s as any) >> (2 as any)] = (tempI64 as any)[0], (HEAP32 as any)[((s as any) + (4 as any) as any) >> (2 as any)] = (tempI64 as any)[1], (a as any).getdents && (0 as any) === (n as any) && (0 as any) === (_ as any) && ((a as any).getdents = null), 0;
            } catch (e: any) {
              if (("undefined" as any) == (typeof FS as any) || ("ErrnoError" as any) !== ((e as any).name as any)) throw e;
              return (e as any).errno;
            }
          }
          function doWritev(this: any, e: any, t: any, r: any, _: any): any {
            for (var s: any = 0, n: any = 0; (n as any) < (r as any); n++) {
              var a: any = (HEAPU32 as any)[(t as any) >> (2 as any)],
                o: any = (HEAPU32 as any)[((t as any) + (4 as any) as any) >> (2 as any)];
              t += 8;
              var l: any = ((FS as any).write as any)(e, HEAP8, a, o, _);
              if ((l as any) < (0 as any)) return -1;
              s += l, (void 0 as any) !== (_ as any) && (_ += l);
            }
            return s;
          }
          function _fd_write(this: any, e: any, t: any, r: any, _: any): any {
            try {
              var s: any = (doWritev as any)(((SYSCALLS as any).getStreamFromFD as any)(e), t, r);
              return (HEAPU32 as any)[(_ as any) >> (2 as any)] = s, 0;
            } catch (e: any) {
              if (("undefined" as any) == (typeof FS as any) || ("ErrnoError" as any) !== ((e as any).name as any)) throw e;
              return (e as any).errno;
            }
          }
          function _tree_sitter_log_callback(this: any, e: any, t: any): any {
            if (currentLogCallback) {
              const r: any = (UTF8ToString as any)(t);
              (currentLogCallback as any)(r, (0 as any) !== (e as any));
            }
          }
          function _tree_sitter_parse_callback(this: any, e: any, t: any, r: any, _: any, s: any): any {
            const n: any = (currentParseCallback as any)(t, {
              row: r,
              column: _
            });
            ("string" as any) == (typeof n as any) ? ((setValue as any)(s, (n as any).length, "i32"), (stringToUTF16 as any)(n, e, 10240)) : (setValue as any)(s, 0, "i32");
          }
          function _proc_exit(this: any, e: any): any {
            EXITSTATUS = e, (keepRuntimeAlive as any)() || ((Module as any).onExit && ((Module as any).onExit as any)(e), ABORT = !0), (quit_ as any)(e, new (ExitStatus as any)(e));
          }
          function exitJS(this: any, e: any, t: any): any {
            EXITSTATUS = e, (_proc_exit as any)(e);
          }
          function handleException(this: any, e: any): any {
            if (e instanceof ExitStatus || ("unwind" as any) == (e as any)) return EXITSTATUS;
            (quit_ as any)(1, e);
          }
          function lengthBytesUTF8(this: any, e: any): any {
            for (var t: any = 0, r: any = 0; (r as any) < ((e as any).length as any); ++r) {
              var _: any = ((e as any).charCodeAt as any)(r);
              (_ as any) <= (127 as any) ? t++ : (_ as any) <= (2047 as any) ? t += 2 : (_ as any) >= (55296 as any) && (_ as any) <= (57343 as any) ? (t += 4, ++r) : t += 3;
            }
            return t;
          }
          function stringToUTF8Array(this: any, e: any, t: any, r: any, _: any): any {
            if (!((_ as any) > (0 as any))) return 0;
            for (var s: any = r, n: any = ((r as any) + (_ as any) as any) - (1 as any), a: any = 0; (a as any) < ((e as any).length as any); ++a) {
              var o: any = ((e as any).charCodeAt as any)(a);
              if ((o as any) >= (55296 as any) && (o as any) <= (57343 as any)) o = ((65536 as any) + ((((1023 as any) & (o as any)) as any) << (10 as any) as any) as any) | (((1023 as any) & (((e as any).charCodeAt as any)(++a) as any)) as any);
              if ((o as any) <= (127 as any)) {
                if ((r as any) >= (n as any)) break;
                (t as any)[r++] = o;
              } else if ((o as any) <= (2047 as any)) {
                if (((r as any) + (1 as any) as any) >= (n as any)) break;
                (t as any)[r++] = (192 as any) | ((o as any) >> (6 as any) as any), (t as any)[r++] = (128 as any) | (((63 as any) & (o as any)) as any);
              } else if ((o as any) <= (65535 as any)) {
                if (((r as any) + (2 as any) as any) >= (n as any)) break;
                (t as any)[r++] = (224 as any) | ((o as any) >> (12 as any) as any), (t as any)[r++] = (128 as any) | ((((o as any) >> (6 as any) as any) & (63 as any)) as any), (t as any)[r++] = (128 as any) | (((63 as any) & (o as any)) as any);
              } else {
                if (((r as any) + (3 as any) as any) >= (n as any)) break;
                (t as any)[r++] = (240 as any) | ((o as any) >> (18 as any) as any), (t as any)[r++] = (128 as any) | ((((o as any) >> (12 as any) as any) & (63 as any)) as any), (t as any)[r++] = (128 as any) | ((((o as any) >> (6 as any) as any) & (63 as any)) as any), (t as any)[r++] = (128 as any) | (((63 as any) & (o as any)) as any);
              }
            }
            return (t as any)[r] = 0, (r as any) - (s as any);
          }
          function stringToUTF8(this: any, e: any, t: any, r: any): any {
            return (stringToUTF8Array as any)(e, HEAPU8, t, r);
          }
          function stringToUTF8OnStack(this: any, e: any): any {
            var t: any = ((lengthBytesUTF8 as any)(e) as any) + (1 as any),
              r: any = (stackAlloc as any)(t);
            return (stringToUTF8 as any)(e, r, t), r;
          }
          function stringToUTF16(this: any, e: any, t: any, r: any): any {
            if ((void 0 as any) === (r as any) && (r = 2147483647), (r as any) < (2 as any)) return 0;
            for (var _: any = t, s: any = ((r -= 2) as any) < ((2 as any) * ((e as any).length as any) as any) ? (r as any) / (2 as any) : (e as any).length, n: any = 0; (n as any) < (s as any); ++n) {
              var a: any = ((e as any).charCodeAt as any)(n);
              (HEAP16 as any)[(t as any) >> (1 as any)] = a, t += 2;
            }
            return (HEAP16 as any)[(t as any) >> (1 as any)] = 0, (t as any) - (_ as any);
          }
          function AsciiToString(this: any, e: any): any {
            for (var t: any = "";;) {
              var r: any = (HEAPU8 as any)[(e++ as any) >> (0 as any)];
              if (!r) return t;
              t += ((String as any).fromCharCode as any)(r);
            }
          }
          (_fd_close as any).sig = "ii", (_fd_seek as any).sig = "iijip", (_fd_write as any).sig = "iippp", (_proc_exit as any).sig = "vi";
          var wasmImports: any = {
              __heap_base: ___heap_base,
              __indirect_function_table: wasmTable,
              __memory_base: ___memory_base,
              __stack_pointer: ___stack_pointer,
              __table_base: ___table_base,
              _emscripten_get_now_is_monotonic: __emscripten_get_now_is_monotonic,
              abort: _abort,
              emscripten_get_now: _emscripten_get_now,
              emscripten_memcpy_big: _emscripten_memcpy_big,
              emscripten_resize_heap: _emscripten_resize_heap,
              fd_close: _fd_close,
              fd_seek: _fd_seek,
              fd_write: _fd_write,
              memory: wasmMemory,
              tree_sitter_log_callback: _tree_sitter_log_callback,
              tree_sitter_parse_callback: _tree_sitter_parse_callback
            },
            asm: any = (createWasm as any)(),
            ___wasm_call_ctors: any = function (this: any): any {
              return (((___wasm_call_ctors = ((Module as any).asm as any).__wasm_call_ctors) as any).apply as any)(null, arguments);
            },
            ___wasm_apply_data_relocs: any = (Module as any).___wasm_apply_data_relocs = function (this: any): any {
              return (((___wasm_apply_data_relocs = (Module as any).___wasm_apply_data_relocs = ((Module as any).asm as any).__wasm_apply_data_relocs) as any).apply as any)(null, arguments);
            },
            _malloc: any = (Module as any)._malloc = function (this: any): any {
              return (((_malloc = (Module as any)._malloc = ((Module as any).asm as any).malloc) as any).apply as any)(null, arguments);
            },
            _calloc: any = (Module as any)._calloc = function (this: any): any {
              return (((_calloc = (Module as any)._calloc = ((Module as any).asm as any).calloc) as any).apply as any)(null, arguments);
            },
            _realloc: any = (Module as any)._realloc = function (this: any): any {
              return (((_realloc = (Module as any)._realloc = ((Module as any).asm as any).realloc) as any).apply as any)(null, arguments);
            },
            _free: any = (Module as any)._free = function (this: any): any {
              return (((_free = (Module as any)._free = ((Module as any).asm as any).free) as any).apply as any)(null, arguments);
            },
            _ts_language_symbol_count: any = (Module as any)._ts_language_symbol_count = function (this: any): any {
              return (((_ts_language_symbol_count = (Module as any)._ts_language_symbol_count = ((Module as any).asm as any).ts_language_symbol_count) as any).apply as any)(null, arguments);
            },
            _ts_language_state_count: any = (Module as any)._ts_language_state_count = function (this: any): any {
              return (((_ts_language_state_count = (Module as any)._ts_language_state_count = ((Module as any).asm as any).ts_language_state_count) as any).apply as any)(null, arguments);
            },
            _ts_language_version: any = (Module as any)._ts_language_version = function (this: any): any {
              return (((_ts_language_version = (Module as any)._ts_language_version = ((Module as any).asm as any).ts_language_version) as any).apply as any)(null, arguments);
            },
            _ts_language_field_count: any = (Module as any)._ts_language_field_count = function (this: any): any {
              return (((_ts_language_field_count = (Module as any)._ts_language_field_count = ((Module as any).asm as any).ts_language_field_count) as any).apply as any)(null, arguments);
            },
            _ts_language_next_state: any = (Module as any)._ts_language_next_state = function (this: any): any {
              return (((_ts_language_next_state = (Module as any)._ts_language_next_state = ((Module as any).asm as any).ts_language_next_state) as any).apply as any)(null, arguments);
            },
            _ts_language_symbol_name: any = (Module as any)._ts_language_symbol_name = function (this: any): any {
              return (((_ts_language_symbol_name = (Module as any)._ts_language_symbol_name = ((Module as any).asm as any).ts_language_symbol_name) as any).apply as any)(null, arguments);
            },
            _ts_language_symbol_for_name: any = (Module as any)._ts_language_symbol_for_name = function (this: any): any {
              return (((_ts_language_symbol_for_name = (Module as any)._ts_language_symbol_for_name = ((Module as any).asm as any).ts_language_symbol_for_name) as any).apply as any)(null, arguments);
            },
            _ts_language_symbol_type: any = (Module as any)._ts_language_symbol_type = function (this: any): any {
              return (((_ts_language_symbol_type = (Module as any)._ts_language_symbol_type = ((Module as any).asm as any).ts_language_symbol_type) as any).apply as any)(null, arguments);
            },
            _ts_language_field_name_for_id: any = (Module as any)._ts_language_field_name_for_id = function (this: any): any {
              return (((_ts_language_field_name_for_id = (Module as any)._ts_language_field_name_for_id = ((Module as any).asm as any).ts_language_field_name_for_id) as any).apply as any)(null, arguments);
            },
            _ts_lookahead_iterator_new: any = (Module as any)._ts_lookahead_iterator_new = function (this: any): any {
              return (((_ts_lookahead_iterator_new = (Module as any)._ts_lookahead_iterator_new = ((Module as any).asm as any).ts_lookahead_iterator_new) as any).apply as any)(null, arguments);
            },
            _ts_lookahead_iterator_delete: any = (Module as any)._ts_lookahead_iterator_delete = function (this: any): any {
              return (((_ts_lookahead_iterator_delete = (Module as any)._ts_lookahead_iterator_delete = ((Module as any).asm as any).ts_lookahead_iterator_delete) as any).apply as any)(null, arguments);
            },
            _ts_lookahead_iterator_reset_state: any = (Module as any)._ts_lookahead_iterator_reset_state = function (this: any): any {
              return (((_ts_lookahead_iterator_reset_state = (Module as any)._ts_lookahead_iterator_reset_state = ((Module as any).asm as any).ts_lookahead_iterator_reset_state) as any).apply as any)(null, arguments);
            },
            _ts_lookahead_iterator_reset: any = (Module as any)._ts_lookahead_iterator_reset = function (this: any): any {
              return (((_ts_lookahead_iterator_reset = (Module as any)._ts_lookahead_iterator_reset = ((Module as any).asm as any).ts_lookahead_iterator_reset) as any).apply as any)(null, arguments);
            },
            _ts_lookahead_iterator_next: any = (Module as any)._ts_lookahead_iterator_next = function (this: any): any {
              return (((_ts_lookahead_iterator_next = (Module as any)._ts_lookahead_iterator_next = ((Module as any).asm as any).ts_lookahead_iterator_next) as any).apply as any)(null, arguments);
            },
            _ts_lookahead_iterator_current_symbol: any = (Module as any)._ts_lookahead_iterator_current_symbol = function (this: any): any {
              return (((_ts_lookahead_iterator_current_symbol = (Module as any)._ts_lookahead_iterator_current_symbol = ((Module as any).asm as any).ts_lookahead_iterator_current_symbol) as any).apply as any)(null, arguments);
            },
            _memset: any = (Module as any)._memset = function (this: any): any {
              return (((_memset = (Module as any)._memset = ((Module as any).asm as any).memset) as any).apply as any)(null, arguments);
            },
            _memcpy: any = (Module as any)._memcpy = function (this: any): any {
              return (((_memcpy = (Module as any)._memcpy = ((Module as any).asm as any).memcpy) as any).apply as any)(null, arguments);
            },
            _ts_parser_delete: any = (Module as any)._ts_parser_delete = function (this: any): any {
              return (((_ts_parser_delete = (Module as any)._ts_parser_delete = ((Module as any).asm as any).ts_parser_delete) as any).apply as any)(null, arguments);
            },
            _ts_parser_reset: any = (Module as any)._ts_parser_reset = function (this: any): any {
              return (((_ts_parser_reset = (Module as any)._ts_parser_reset = ((Module as any).asm as any).ts_parser_reset) as any).apply as any)(null, arguments);
            },
            _ts_parser_set_language: any = (Module as any)._ts_parser_set_language = function (this: any): any {
              return (((_ts_parser_set_language = (Module as any)._ts_parser_set_language = ((Module as any).asm as any).ts_parser_set_language) as any).apply as any)(null, arguments);
            },
            _ts_parser_timeout_micros: any = (Module as any)._ts_parser_timeout_micros = function (this: any): any {
              return (((_ts_parser_timeout_micros = (Module as any)._ts_parser_timeout_micros = ((Module as any).asm as any).ts_parser_timeout_micros) as any).apply as any)(null, arguments);
            },
            _ts_parser_set_timeout_micros: any = (Module as any)._ts_parser_set_timeout_micros = function (this: any): any {
              return (((_ts_parser_set_timeout_micros = (Module as any)._ts_parser_set_timeout_micros = ((Module as any).asm as any).ts_parser_set_timeout_micros) as any).apply as any)(null, arguments);
            },
            _memmove: any = (Module as any)._memmove = function (this: any): any {
              return (((_memmove = (Module as any)._memmove = ((Module as any).asm as any).memmove) as any).apply as any)(null, arguments);
            },
            _memcmp: any = (Module as any)._memcmp = function (this: any): any {
              return (((_memcmp = (Module as any)._memcmp = ((Module as any).asm as any).memcmp) as any).apply as any)(null, arguments);
            },
            _ts_query_new: any = (Module as any)._ts_query_new = function (this: any): any {
              return (((_ts_query_new = (Module as any)._ts_query_new = ((Module as any).asm as any).ts_query_new) as any).apply as any)(null, arguments);
            },
            _ts_query_delete: any = (Module as any)._ts_query_delete = function (this: any): any {
              return (((_ts_query_delete = (Module as any)._ts_query_delete = ((Module as any).asm as any).ts_query_delete) as any).apply as any)(null, arguments);
            },
            _iswspace: any = (Module as any)._iswspace = function (this: any): any {
              return (((_iswspace = (Module as any)._iswspace = ((Module as any).asm as any).iswspace) as any).apply as any)(null, arguments);
            },
            _iswalnum: any = (Module as any)._iswalnum = function (this: any): any {
              return (((_iswalnum = (Module as any)._iswalnum = ((Module as any).asm as any).iswalnum) as any).apply as any)(null, arguments);
            },
            _ts_query_pattern_count: any = (Module as any)._ts_query_pattern_count = function (this: any): any {
              return (((_ts_query_pattern_count = (Module as any)._ts_query_pattern_count = ((Module as any).asm as any).ts_query_pattern_count) as any).apply as any)(null, arguments);
            },
            _ts_query_capture_count: any = (Module as any)._ts_query_capture_count = function (this: any): any {
              return (((_ts_query_capture_count = (Module as any)._ts_query_capture_count = ((Module as any).asm as any).ts_query_capture_count) as any).apply as any)(null, arguments);
            },
            _ts_query_string_count: any = (Module as any)._ts_query_string_count = function (this: any): any {
              return (((_ts_query_string_count = (Module as any)._ts_query_string_count = ((Module as any).asm as any).ts_query_string_count) as any).apply as any)(null, arguments);
            },
            _ts_query_capture_name_for_id: any = (Module as any)._ts_query_capture_name_for_id = function (this: any): any {
              return (((_ts_query_capture_name_for_id = (Module as any)._ts_query_capture_name_for_id = ((Module as any).asm as any).ts_query_capture_name_for_id) as any).apply as any)(null, arguments);
            },
            _ts_query_string_value_for_id: any = (Module as any)._ts_query_string_value_for_id = function (this: any): any {
              return (((_ts_query_string_value_for_id = (Module as any)._ts_query_string_value_for_id = ((Module as any).asm as any).ts_query_string_value_for_id) as any).apply as any)(null, arguments);
            },
            _ts_query_predicates_for_pattern: any = (Module as any)._ts_query_predicates_for_pattern = function (this: any): any {
              return (((_ts_query_predicates_for_pattern = (Module as any)._ts_query_predicates_for_pattern = ((Module as any).asm as any).ts_query_predicates_for_pattern) as any).apply as any)(null, arguments);
            },
            _ts_tree_copy: any = (Module as any)._ts_tree_copy = function (this: any): any {
              return (((_ts_tree_copy = (Module as any)._ts_tree_copy = ((Module as any).asm as any).ts_tree_copy) as any).apply as any)(null, arguments);
            },
            _ts_tree_delete: any = (Module as any)._ts_tree_delete = function (this: any): any {
              return (((_ts_tree_delete = (Module as any)._ts_tree_delete = ((Module as any).asm as any).ts_tree_delete) as any).apply as any)(null, arguments);
            },
            _ts_init: any = (Module as any)._ts_init = function (this: any): any {
              return (((_ts_init = (Module as any)._ts_init = ((Module as any).asm as any).ts_init) as any).apply as any)(null, arguments);
            },
            _ts_parser_new_wasm: any = (Module as any)._ts_parser_new_wasm = function (this: any): any {
              return (((_ts_parser_new_wasm = (Module as any)._ts_parser_new_wasm = ((Module as any).asm as any).ts_parser_new_wasm) as any).apply as any)(null, arguments);
            },
            _ts_parser_enable_logger_wasm: any = (Module as any)._ts_parser_enable_logger_wasm = function (this: any): any {
              return (((_ts_parser_enable_logger_wasm = (Module as any)._ts_parser_enable_logger_wasm = ((Module as any).asm as any).ts_parser_enable_logger_wasm) as any).apply as any)(null, arguments);
            },
            _ts_parser_parse_wasm: any = (Module as any)._ts_parser_parse_wasm = function (this: any): any {
              return (((_ts_parser_parse_wasm = (Module as any)._ts_parser_parse_wasm = ((Module as any).asm as any).ts_parser_parse_wasm) as any).apply as any)(null, arguments);
            },
            _ts_language_type_is_named_wasm: any = (Module as any)._ts_language_type_is_named_wasm = function (this: any): any {
              return (((_ts_language_type_is_named_wasm = (Module as any)._ts_language_type_is_named_wasm = ((Module as any).asm as any).ts_language_type_is_named_wasm) as any).apply as any)(null, arguments);
            },
            _ts_language_type_is_visible_wasm: any = (Module as any)._ts_language_type_is_visible_wasm = function (this: any): any {
              return (((_ts_language_type_is_visible_wasm = (Module as any)._ts_language_type_is_visible_wasm = ((Module as any).asm as any).ts_language_type_is_visible_wasm) as any).apply as any)(null, arguments);
            },
            _ts_tree_root_node_wasm: any = (Module as any)._ts_tree_root_node_wasm = function (this: any): any {
              return (((_ts_tree_root_node_wasm = (Module as any)._ts_tree_root_node_wasm = ((Module as any).asm as any).ts_tree_root_node_wasm) as any).apply as any)(null, arguments);
            },
            _ts_tree_edit_wasm: any = (Module as any)._ts_tree_edit_wasm = function (this: any): any {
              return (((_ts_tree_edit_wasm = (Module as any)._ts_tree_edit_wasm = ((Module as any).asm as any).ts_tree_edit_wasm) as any).apply as any)(null, arguments);
            },
            _ts_tree_get_changed_ranges_wasm: any = (Module as any)._ts_tree_get_changed_ranges_wasm = function (this: any): any {
              return (((_ts_tree_get_changed_ranges_wasm = (Module as any)._ts_tree_get_changed_ranges_wasm = ((Module as any).asm as any).ts_tree_get_changed_ranges_wasm) as any).apply as any)(null, arguments);
            },
            _ts_tree_cursor_new_wasm: any = (Module as any)._ts_tree_cursor_new_wasm = function (this: any): any {
              return (((_ts_tree_cursor_new_wasm = (Module as any)._ts_tree_cursor_new_wasm = ((Module as any).asm as any).ts_tree_cursor_new_wasm) as any).apply as any)(null, arguments);
            },
            _ts_tree_cursor_delete_wasm: any = (Module as any)._ts_tree_cursor_delete_wasm = function (this: any): any {
              return (((_ts_tree_cursor_delete_wasm = (Module as any)._ts_tree_cursor_delete_wasm = ((Module as any).asm as any).ts_tree_cursor_delete_wasm) as any).apply as any)(null, arguments);
            },
            _ts_tree_cursor_reset_wasm: any = (Module as any)._ts_tree_cursor_reset_wasm = function (this: any): any {
              return (((_ts_tree_cursor_reset_wasm = (Module as any)._ts_tree_cursor_reset_wasm = ((Module as any).asm as any).ts_tree_cursor_reset_wasm) as any).apply as any)(null, arguments);
            },
            _ts_tree_cursor_reset_to_wasm: any = (Module as any)._ts_tree_cursor_reset_to_wasm = function (this: any): any {
              return (((_ts_tree_cursor_reset_to_wasm = (Module as any)._ts_tree_cursor_reset_to_wasm = ((Module as any).asm as any).ts_tree_cursor_reset_to_wasm) as any).apply as any)(null, arguments);
            },
            _ts_tree_cursor_goto_first_child_wasm: any = (Module as any)._ts_tree_cursor_goto_first_child_wasm = function (this: any): any {
              return (((_ts_tree_cursor_goto_first_child_wasm = (Module as any)._ts_tree_cursor_goto_first_child_wasm = ((Module as any).asm as any).ts_tree_cursor_goto_first_child_wasm) as any).apply as any)(null, arguments);
            },
            _ts_tree_cursor_goto_last_child_wasm: any = (Module as any)._ts_tree_cursor_goto_last_child_wasm = function (this: any): any {
              return (((_ts_tree_cursor_goto_last_child_wasm = (Module as any)._ts_tree_cursor_goto_last_child_wasm = ((Module as any).asm as any).ts_tree_cursor_goto_last_child_wasm) as any).apply as any)(null, arguments);
            },
            _ts_tree_cursor_goto_next_sibling_wasm: any = (Module as any)._ts_tree_cursor_goto_next_sibling_wasm = function (this: any): any {
              return (((_ts_tree_cursor_goto_next_sibling_wasm = (Module as any)._ts_tree_cursor_goto_next_sibling_wasm = ((Module as any).asm as any).ts_tree_cursor_goto_next_sibling_wasm) as any).apply as any)(null, arguments);
            },
            _ts_tree_cursor_goto_previous_sibling_wasm: any = (Module as any)._ts_tree_cursor_goto_previous_sibling_wasm = function (this: any): any {
              return (((_ts_tree_cursor_goto_previous_sibling_wasm = (Module as any)._ts_tree_cursor_goto_previous_sibling_wasm = ((Module as any).asm as any).ts_tree_cursor_goto_previous_sibling_wasm) as any).apply as any)(null, arguments);
            },
            _ts_tree_cursor_goto_parent_wasm: any = (Module as any)._ts_tree_cursor_goto_parent_wasm = function (this: any): any {
              return (((_ts_tree_cursor_goto_parent_wasm = (Module as any)._ts_tree_cursor_goto_parent_wasm = ((Module as any).asm as any).ts_tree_cursor_goto_parent_wasm) as any).apply as any)(null, arguments);
            },
            _ts_tree_cursor_current_node_type_id_wasm: any = (Module as any)._ts_tree_cursor_current_node_type_id_wasm = function (this: any): any {
              return (((_ts_tree_cursor_current_node_type_id_wasm = (Module as any)._ts_tree_cursor_current_node_type_id_wasm = ((Module as any).asm as any).ts_tree_cursor_current_node_type_id_wasm) as any).apply as any)(null, arguments);
            },
            _ts_tree_cursor_current_node_state_id_wasm: any = (Module as any)._ts_tree_cursor_current_node_state_id_wasm = function (this: any): any {
              return (((_ts_tree_cursor_current_node_state_id_wasm = (Module as any)._ts_tree_cursor_current_node_state_id_wasm = ((Module as any).asm as any).ts_tree_cursor_current_node_state_id_wasm) as any).apply as any)(null, arguments);
            },
            _ts_tree_cursor_current_node_is_named_wasm: any = (Module as any)._ts_tree_cursor_current_node_is_named_wasm = function (this: any): any {
              return (((_ts_tree_cursor_current_node_is_named_wasm = (Module as any)._ts_tree_cursor_current_node_is_named_wasm = ((Module as any).asm as any).ts_tree_cursor_current_node_is_named_wasm) as any).apply as any)(null, arguments);
            },
            _ts_tree_cursor_current_node_is_missing_wasm: any = (Module as any)._ts_tree_cursor_current_node_is_missing_wasm = function (this: any): any {
              return (((_ts_tree_cursor_current_node_is_missing_wasm = (Module as any)._ts_tree_cursor_current_node_is_missing_wasm = ((Module as any).asm as any).ts_tree_cursor_current_node_is_missing_wasm) as any).apply as any)(null, arguments);
            },
            _ts_tree_cursor_current_node_id_wasm: any = (Module as any)._ts_tree_cursor_current_node_id_wasm = function (this: any): any {
              return (((_ts_tree_cursor_current_node_id_wasm = (Module as any)._ts_tree_cursor_current_node_id_wasm = ((Module as any).asm as any).ts_tree_cursor_current_node_id_wasm) as any).apply as any)(null, arguments);
            },
            _ts_tree_cursor_start_position_wasm: any = (Module as any)._ts_tree_cursor_start_position_wasm = function (this: any): any {
              return (((_ts_tree_cursor_start_position_wasm = (Module as any)._ts_tree_cursor_start_position_wasm = ((Module as any).asm as any).ts_tree_cursor_start_position_wasm) as any).apply as any)(null, arguments);
            },
            _ts_tree_cursor_end_position_wasm: any = (Module as any)._ts_tree_cursor_end_position_wasm = function (this: any): any {
              return (((_ts_tree_cursor_end_position_wasm = (Module as any)._ts_tree_cursor_end_position_wasm = ((Module as any).asm as any).ts_tree_cursor_end_position_wasm) as any).apply as any)(null, arguments);
            },
            _ts_tree_cursor_start_index_wasm: any = (Module as any)._ts_tree_cursor_start_index_wasm = function (this: any): any {
              return (((_ts_tree_cursor_start_index_wasm = (Module as any)._ts_tree_cursor_start_index_wasm = ((Module as any).asm as any).ts_tree_cursor_start_index_wasm) as any).apply as any)(null, arguments);
            },
            _ts_tree_cursor_end_index_wasm: any = (Module as any)._ts_tree_cursor_end_index_wasm = function (this: any): any {
              return (((_ts_tree_cursor_end_index_wasm = (Module as any)._ts_tree_cursor_end_index_wasm = ((Module as any).asm as any).ts_tree_cursor_end_index_wasm) as any).apply as any)(null, arguments);
            },
            _ts_tree_cursor_current_field_id_wasm: any = (Module as any)._ts_tree_cursor_current_field_id_wasm = function (this: any): any {
              return (((_ts_tree_cursor_current_field_id_wasm = (Module as any)._ts_tree_cursor_current_field_id_wasm = ((Module as any).asm as any).ts_tree_cursor_current_field_id_wasm) as any).apply as any)(null, arguments);
            },
            _ts_tree_cursor_current_node_wasm: any = (Module as any)._ts_tree_cursor_current_node_wasm = function (this: any): any {
              return (((_ts_tree_cursor_current_node_wasm = (Module as any)._ts_tree_cursor_current_node_wasm = ((Module as any).asm as any).ts_tree_cursor_current_node_wasm) as any).apply as any)(null, arguments);
            },
            _ts_node_symbol_wasm: any = (Module as any)._ts_node_symbol_wasm = function (this: any): any {
              return (((_ts_node_symbol_wasm = (Module as any)._ts_node_symbol_wasm = ((Module as any).asm as any).ts_node_symbol_wasm) as any).apply as any)(null, arguments);
            },
            _ts_node_field_name_for_child_wasm: any = (Module as any)._ts_node_field_name_for_child_wasm = function (this: any): any {
              return (((_ts_node_field_name_for_child_wasm = (Module as any)._ts_node_field_name_for_child_wasm = ((Module as any).asm as any).ts_node_field_name_for_child_wasm) as any).apply as any)(null, arguments);
            },
            _ts_node_grammar_symbol_wasm: any = (Module as any)._ts_node_grammar_symbol_wasm = function (this: any): any {
              return (((_ts_node_grammar_symbol_wasm = (Module as any)._ts_node_grammar_symbol_wasm = ((Module as any).asm as any).ts_node_grammar_symbol_wasm) as any).apply as any)(null, arguments);
            },
            _ts_node_child_count_wasm: any = (Module as any)._ts_node_child_count_wasm = function (this: any): any {
              return (((_ts_node_child_count_wasm = (Module as any)._ts_node_child_count_wasm = ((Module as any).asm as any).ts_node_child_count_wasm) as any).apply as any)(null, arguments);
            },
            _ts_node_named_child_count_wasm: any = (Module as any)._ts_node_named_child_count_wasm = function (this: any): any {
              return (((_ts_node_named_child_count_wasm = (Module as any)._ts_node_named_child_count_wasm = ((Module as any).asm as any).ts_node_named_child_count_wasm) as any).apply as any)(null, arguments);
            },
            _ts_node_child_wasm: any = (Module as any)._ts_node_child_wasm = function (this: any): any {
              return (((_ts_node_child_wasm = (Module as any)._ts_node_child_wasm = ((Module as any).asm as any).ts_node_child_wasm) as any).apply as any)(null, arguments);
            },
            _ts_node_named_child_wasm: any = (Module as any)._ts_node_named_child_wasm = function (this: any): any {
              return (((_ts_node_named_child_wasm = (Module as any)._ts_node_named_child_wasm = ((Module as any).asm as any).ts_node_named_child_wasm) as any).apply as any)(null, arguments);
            },
            _ts_node_child_by_field_id_wasm: any = (Module as any)._ts_node_child_by_field_id_wasm = function (this: any): any {
              return (((_ts_node_child_by_field_id_wasm = (Module as any)._ts_node_child_by_field_id_wasm = ((Module as any).asm as any).ts_node_child_by_field_id_wasm) as any).apply as any)(null, arguments);
            },
            _ts_node_next_sibling_wasm: any = (Module as any)._ts_node_next_sibling_wasm = function (this: any): any {
              return (((_ts_node_next_sibling_wasm = (Module as any)._ts_node_next_sibling_wasm = ((Module as any).asm as any).ts_node_next_sibling_wasm) as any).apply as any)(null, arguments);
            },
            _ts_node_prev_sibling_wasm: any = (Module as any)._ts_node_prev_sibling_wasm = function (this: any): any {
              return (((_ts_node_prev_sibling_wasm = (Module as any)._ts_node_prev_sibling_wasm = ((Module as any).asm as any).ts_node_prev_sibling_wasm) as any).apply as any)(null, arguments);
            },
            _ts_node_next_named_sibling_wasm: any = (Module as any)._ts_node_next_named_sibling_wasm = function (this: any): any {
              return (((_ts_node_next_named_sibling_wasm = (Module as any)._ts_node_next_named_sibling_wasm = ((Module as any).asm as any).ts_node_next_named_sibling_wasm) as any).apply as any)(null, arguments);
            },
            _ts_node_prev_named_sibling_wasm: any = (Module as any)._ts_node_prev_named_sibling_wasm = function (this: any): any {
              return (((_ts_node_prev_named_sibling_wasm = (Module as any)._ts_node_prev_named_sibling_wasm = ((Module as any).asm as any).ts_node_prev_named_sibling_wasm) as any).apply as any)(null, arguments);
            },
            _ts_node_parent_wasm: any = (Module as any)._ts_node_parent_wasm = function (this: any): any {
              return (((_ts_node_parent_wasm = (Module as any)._ts_node_parent_wasm = ((Module as any).asm as any).ts_node_parent_wasm) as any).apply as any)(null, arguments);
            },
            _ts_node_descendant_for_index_wasm: any = (Module as any)._ts_node_descendant_for_index_wasm = function (this: any): any {
              return (((_ts_node_descendant_for_index_wasm = (Module as any)._ts_node_descendant_for_index_wasm = ((Module as any).asm as any).ts_node_descendant_for_index_wasm) as any).apply as any)(null, arguments);
            },
            _ts_node_named_descendant_for_index_wasm: any = (Module as any)._ts_node_named_descendant_for_index_wasm = function (this: any): any {
              return (((_ts_node_named_descendant_for_index_wasm = (Module as any)._ts_node_named_descendant_for_index_wasm = ((Module as any).asm as any).ts_node_named_descendant_for_index_wasm) as any).apply as any)(null, arguments);
            },
            _ts_node_descendant_for_position_wasm: any = (Module as any)._ts_node_descendant_for_position_wasm = function (this: any): any {
              return (((_ts_node_descendant_for_position_wasm = (Module as any)._ts_node_descendant_for_position_wasm = ((Module as any).asm as any).ts_node_descendant_for_position_wasm) as any).apply as any)(null, arguments);
            },
            _ts_node_named_descendant_for_position_wasm: any = (Module as any)._ts_node_named_descendant_for_position_wasm = function (this: any): any {
              return (((_ts_node_named_descendant_for_position_wasm = (Module as any)._ts_node_named_descendant_for_position_wasm = ((Module as any).asm as any).ts_node_named_descendant_for_position_wasm) as any).apply as any)(null, arguments);
            },
            _ts_node_start_point_wasm: any = (Module as any)._ts_node_start_point_wasm = function (this: any): any {
              return (((_ts_node_start_point_wasm = (Module as any)._ts_node_start_point_wasm = ((Module as any).asm as any).ts_node_start_point_wasm) as any).apply as any)(null, arguments);
            },
            _ts_node_end_point_wasm: any = (Module as any)._ts_node_end_point_wasm = function (this: any): any {
              return (((_ts_node_end_point_wasm = (Module as any)._ts_node_end_point_wasm = ((Module as any).asm as any).ts_node_end_point_wasm) as any).apply as any)(null, arguments);
            },
            _ts_node_start_index_wasm: any = (Module as any)._ts_node_start_index_wasm = function (this: any): any {
              return (((_ts_node_start_index_wasm = (Module as any)._ts_node_start_index_wasm = ((Module as any).asm as any).ts_node_start_index_wasm) as any).apply as any)(null, arguments);
            },
            _ts_node_end_index_wasm: any = (Module as any)._ts_node_end_index_wasm = function (this: any): any {
              return (((_ts_node_end_index_wasm = (Module as any)._ts_node_end_index_wasm = ((Module as any).asm as any).ts_node_end_index_wasm) as any).apply as any)(null, arguments);
            },
            _ts_node_to_string_wasm: any = (Module as any)._ts_node_to_string_wasm = function (this: any): any {
              return (((_ts_node_to_string_wasm = (Module as any)._ts_node_to_string_wasm = ((Module as any).asm as any).ts_node_to_string_wasm) as any).apply as any)(null, arguments);
            },
            _ts_node_children_wasm: any = (Module as any)._ts_node_children_wasm = function (this: any): any {
              return (((_ts_node_children_wasm = (Module as any)._ts_node_children_wasm = ((Module as any).asm as any).ts_node_children_wasm) as any).apply as any)(null, arguments);
            },
            _ts_node_named_children_wasm: any = (Module as any)._ts_node_named_children_wasm = function (this: any): any {
              return (((_ts_node_named_children_wasm = (Module as any)._ts_node_named_children_wasm = ((Module as any).asm as any).ts_node_named_children_wasm) as any).apply as any)(null, arguments);
            },
            _ts_node_descendants_of_type_wasm: any = (Module as any)._ts_node_descendants_of_type_wasm = function (this: any): any {
              return (((_ts_node_descendants_of_type_wasm = (Module as any)._ts_node_descendants_of_type_wasm = ((Module as any).asm as any).ts_node_descendants_of_type_wasm) as any).apply as any)(null, arguments);
            },
            _ts_node_is_named_wasm: any = (Module as any)._ts_node_is_named_wasm = function (this: any): any {
              return (((_ts_node_is_named_wasm = (Module as any)._ts_node_is_named_wasm = ((Module as any).asm as any).ts_node_is_named_wasm) as any).apply as any)(null, arguments);
            },
            _ts_node_has_changes_wasm: any = (Module as any)._ts_node_has_changes_wasm = function (this: any): any {
              return (((_ts_node_has_changes_wasm = (Module as any)._ts_node_has_changes_wasm = ((Module as any).asm as any).ts_node_has_changes_wasm) as any).apply as any)(null, arguments);
            },
            _ts_node_has_error_wasm: any = (Module as any)._ts_node_has_error_wasm = function (this: any): any {
              return (((_ts_node_has_error_wasm = (Module as any)._ts_node_has_error_wasm = ((Module as any).asm as any).ts_node_has_error_wasm) as any).apply as any)(null, arguments);
            },
            _ts_node_is_error_wasm: any = (Module as any)._ts_node_is_error_wasm = function (this: any): any {
              return (((_ts_node_is_error_wasm = (Module as any)._ts_node_is_error_wasm = ((Module as any).asm as any).ts_node_is_error_wasm) as any).apply as any)(null, arguments);
            },
            _ts_node_is_missing_wasm: any = (Module as any)._ts_node_is_missing_wasm = function (this: any): any {
              return (((_ts_node_is_missing_wasm = (Module as any)._ts_node_is_missing_wasm = ((Module as any).asm as any).ts_node_is_missing_wasm) as any).apply as any)(null, arguments);
            },
            _ts_node_parse_state_wasm: any = (Module as any)._ts_node_parse_state_wasm = function (this: any): any {
              return (((_ts_node_parse_state_wasm = (Module as any)._ts_node_parse_state_wasm = ((Module as any).asm as any).ts_node_parse_state_wasm) as any).apply as any)(null, arguments);
            },
            _ts_node_next_parse_state_wasm: any = (Module as any)._ts_node_next_parse_state_wasm = function (this: any): any {
              return (((_ts_node_next_parse_state_wasm = (Module as any)._ts_node_next_parse_state_wasm = ((Module as any).asm as any).ts_node_next_parse_state_wasm) as any).apply as any)(null, arguments);
            },
            _ts_query_matches_wasm: any = (Module as any)._ts_query_matches_wasm = function (this: any): any {
              return (((_ts_query_matches_wasm = (Module as any)._ts_query_matches_wasm = ((Module as any).asm as any).ts_query_matches_wasm) as any).apply as any)(null, arguments);
            },
            _ts_query_captures_wasm: any = (Module as any)._ts_query_captures_wasm = function (this: any): any {
              return (((_ts_query_captures_wasm = (Module as any)._ts_query_captures_wasm = ((Module as any).asm as any).ts_query_captures_wasm) as any).apply as any)(null, arguments);
            },
            ___errno_location: any = function (this: any): any {
              return (((___errno_location = ((Module as any).asm as any).__errno_location) as any).apply as any)(null, arguments);
            },
            _iswdigit: any = (Module as any)._iswdigit = function (this: any): any {
              return (((_iswdigit = (Module as any)._iswdigit = ((Module as any).asm as any).iswdigit) as any).apply as any)(null, arguments);
            },
            _iswalpha: any = (Module as any)._iswalpha = function (this: any): any {
              return (((_iswalpha = (Module as any)._iswalpha = ((Module as any).asm as any).iswalpha) as any).apply as any)(null, arguments);
            },
            _iswblank: any = (Module as any)._iswblank = function (this: any): any {
              return (((_iswblank = (Module as any)._iswblank = ((Module as any).asm as any).iswblank) as any).apply as any)(null, arguments);
            },
            _iswlower: any = (Module as any)._iswlower = function (this: any): any {
              return (((_iswlower = (Module as any)._iswlower = ((Module as any).asm as any).iswlower) as any).apply as any)(null, arguments);
            },
            _iswupper: any = (Module as any)._iswupper = function (this: any): any {
              return (((_iswupper = (Module as any)._iswupper = ((Module as any).asm as any).iswupper) as any).apply as any)(null, arguments);
            },
            _iswxdigit: any = (Module as any)._iswxdigit = function (this: any): any {
              return (((_iswxdigit = (Module as any)._iswxdigit = ((Module as any).asm as any).iswxdigit) as any).apply as any)(null, arguments);
            },
            _memchr: any = (Module as any)._memchr = function (this: any): any {
              return (((_memchr = (Module as any)._memchr = ((Module as any).asm as any).memchr) as any).apply as any)(null, arguments);
            },
            _strlen: any = (Module as any)._strlen = function (this: any): any {
              return (((_strlen = (Module as any)._strlen = ((Module as any).asm as any).strlen) as any).apply as any)(null, arguments);
            },
            _strcmp: any = (Module as any)._strcmp = function (this: any): any {
              return (((_strcmp = (Module as any)._strcmp = ((Module as any).asm as any).strcmp) as any).apply as any)(null, arguments);
            },
            _strncpy: any = (Module as any)._strncpy = function (this: any): any {
              return (((_strncpy = (Module as any)._strncpy = ((Module as any).asm as any).strncpy) as any).apply as any)(null, arguments);
            },
            _towlower: any = (Module as any)._towlower = function (this: any): any {
              return (((_towlower = (Module as any)._towlower = ((Module as any).asm as any).towlower) as any).apply as any)(null, arguments);
            },
            _towupper: any = (Module as any)._towupper = function (this: any): any {
              return (((_towupper = (Module as any)._towupper = ((Module as any).asm as any).towupper) as any).apply as any)(null, arguments);
            },
            _setThrew: any = function (this: any): any {
              return (((_setThrew = ((Module as any).asm as any).setThrew) as any).apply as any)(null, arguments);
            },
            stackSave: any = function (this: any): any {
              return (((stackSave = ((Module as any).asm as any).stackSave) as any).apply as any)(null, arguments);
            },
            stackRestore: any = function (this: any): any {
              return (((stackRestore = ((Module as any).asm as any).stackRestore) as any).apply as any)(null, arguments);
            },
            stackAlloc: any = function (this: any): any {
              return (((stackAlloc = ((Module as any).asm as any).stackAlloc) as any).apply as any)(null, arguments);
            },
            dynCall_jiji: any = (Module as any).dynCall_jiji = function (this: any): any {
              return (((dynCall_jiji = (Module as any).dynCall_jiji = ((Module as any).asm as any).dynCall_jiji) as any).apply as any)(null, arguments);
            },
            _orig$ts_parser_timeout_micros: any = (Module as any)._orig$ts_parser_timeout_micros = function (this: any): any {
              return (((_orig$ts_parser_timeout_micros = (Module as any)._orig$ts_parser_timeout_micros = ((Module as any).asm as any).orig$ts_parser_timeout_micros) as any).apply as any)(null, arguments);
            },
            _orig$ts_parser_set_timeout_micros: any = (Module as any)._orig$ts_parser_set_timeout_micros = function (this: any): any {
              return (((_orig$ts_parser_set_timeout_micros = (Module as any)._orig$ts_parser_set_timeout_micros = ((Module as any).asm as any).orig$ts_parser_set_timeout_micros) as any).apply as any)(null, arguments);
            },
            calledRun: any;
          function callMain(this: any, e: any = []): any {
            var t: any = ((resolveGlobalSymbol as any)("main") as any).sym;
            if (t) {
              ((e as any).unshift as any)(thisProgram);
              var r: any = (e as any).length,
                _: any = (stackAlloc as any)((4 as any) * ((r as any) + (1 as any) as any)),
                s: any = (_ as any) >> (2 as any);
              ((e as any).forEach as any)((e: any): any => {
                (HEAP32 as any)[s++] = (stringToUTF8OnStack as any)(e);
              }), (HEAP32 as any)[s] = 0;
              try {
                var n: any = (t as any)(r, _);
                return (exitJS as any)(n, !0), n;
              } catch (e: any) {
                return (handleException as any)(e);
              }
            }
          }
          (Module as any).AsciiToString = AsciiToString, (Module as any).stringToUTF16 = stringToUTF16, dependenciesFulfilled = function e(this: any): any {
            calledRun || (run as any)(), calledRun || (dependenciesFulfilled = e);
          };
          var dylibsLoaded: any = !1;
          function run(this: any, e: any = arguments_): any {
            function t(this: any): any {
              calledRun || (calledRun = !0, (Module as any).calledRun = !0, ABORT || ((initRuntime as any)(), (preMain as any)(), (Module as any).onRuntimeInitialized && ((Module as any).onRuntimeInitialized as any)(), shouldRunNow && (callMain as any)(e), (postRun as any)()));
            }
            (runDependencies as any) > (0 as any) || !dylibsLoaded && ((loadDylibs as any)(), dylibsLoaded = !0, (runDependencies as any) > (0 as any)) || ((preRun as any)(), (runDependencies as any) > (0 as any) || ((Module as any).setStatus ? (((Module as any).setStatus as any)("Running..."), (setTimeout as any)(function (this: any): any {
              (setTimeout as any)(function (this: any): any {
                ((Module as any).setStatus as any)("");
              }, 1), (t as any)();
            }, 1)) : (t as any)()));
          }
          if (((LDSO as any).init as any)(), (Module as any).preInit) for (("function" as any) == (typeof (Module as any).preInit as any) && ((Module as any).preInit = [(Module as any).preInit]); (((Module as any).preInit as any).length as any) > (0 as any);) ((((Module as any).preInit as any).pop as any)() as any)();
          var shouldRunNow: any = !0;
          (Module as any).noInitialRun && (shouldRunNow = !1), (run as any)();
          const C: any = Module,
            INTERNAL: any = {},
            SIZE_OF_INT: number = 4,
            SIZE_OF_CURSOR: any = (3 as any) * (SIZE_OF_INT as any),
            SIZE_OF_NODE: any = (5 as any) * (SIZE_OF_INT as any),
            SIZE_OF_POINT: any = (2 as any) * (SIZE_OF_INT as any),
            SIZE_OF_RANGE: any = ((2 as any) * (SIZE_OF_INT as any) as any) + ((2 as any) * (SIZE_OF_POINT as any) as any),
            ZERO_POINT: any = {
              row: 0,
              column: 0
            },
            QUERY_WORD_REGEX: any = /[\w-.]*/g,
            PREDICATE_STEP_TYPE_CAPTURE: number = 1,
            PREDICATE_STEP_TYPE_STRING: number = 2,
            LANGUAGE_FUNCTION_REGEX: any = /^_?tree_sitter_\w+/;
          let VERSION: any, MIN_COMPATIBLE_VERSION: any, TRANSFER_BUFFER: any, currentParseCallback: any, currentLogCallback: any;
          class ParserImpl {
            declare logCallback: any;
            declare language: any;
            [key: string]: any;
            static init(): any {
              TRANSFER_BUFFER = ((C as any)._ts_init as any)(), VERSION = (getValue as any)(TRANSFER_BUFFER, "i32"), MIN_COMPATIBLE_VERSION = (getValue as any)((TRANSFER_BUFFER as any) + (SIZE_OF_INT as any), "i32");
            }
            initialize(): any {
              ((C as any)._ts_parser_new_wasm as any)(), (this as any)[0] = (getValue as any)(TRANSFER_BUFFER, "i32"), (this as any)[1] = (getValue as any)((TRANSFER_BUFFER as any) + (SIZE_OF_INT as any), "i32");
            }
            delete(): any {
              ((C as any)._ts_parser_delete as any)((this as any)[0]), ((C as any)._free as any)((this as any)[1]), (this as any)[0] = 0, (this as any)[1] = 0;
            }
            setLanguage(e: any): any {
              let t: any;
              if (e) {
                if (((e as any).constructor as any) !== (Language as any)) throw new (Error as any)("Argument must be a Language");
                {
                  t = (e as any)[0];
                  const r: any = ((C as any)._ts_language_version as any)(t);
                  if ((r as any) < (MIN_COMPATIBLE_VERSION as any) || (VERSION as any) < (r as any)) throw new (Error as any)(`Incompatible language version ${r}. Compatibility range ${MIN_COMPATIBLE_VERSION} through ${VERSION}.`);
                }
              } else t = 0, e = null;
              return (this as any).language = e, ((C as any)._ts_parser_set_language as any)((this as any)[0], t), this;
            }
            getLanguage(): any {
              return (this as any).language;
            }
            parse(e: any, t: any, r: any): any {
              if (("string" as any) == (typeof e as any)) currentParseCallback = (t: any, r: any, _: any): any => ((e as any).slice as any)(t, _);else {
                if (("function" as any) != (typeof e as any)) throw new (Error as any)("Argument must be a string or a function");
                currentParseCallback = e;
              }
              (this as any).logCallback ? (currentLogCallback = (this as any).logCallback, ((C as any)._ts_parser_enable_logger_wasm as any)((this as any)[0], 1)) : (currentLogCallback = null, ((C as any)._ts_parser_enable_logger_wasm as any)((this as any)[0], 0));
              let _: any = 0,
                s: any = 0;
              if (r && (r as any).includedRanges) {
                _ = ((r as any).includedRanges as any).length, s = ((C as any)._calloc as any)(_, SIZE_OF_RANGE);
                let e: any = s;
                for (let t: any = 0; (t as any) < (_ as any); t++) (marshalRange as any)(e, ((r as any).includedRanges as any)[t]), e += SIZE_OF_RANGE;
              }
              const n: any = ((C as any)._ts_parser_parse_wasm as any)((this as any)[0], (this as any)[1], t ? (t as any)[0] : 0, s, _);
              if (!n) throw currentParseCallback = null, currentLogCallback = null, new (Error as any)("Parsing failed");
              const a: any = new (Tree as any)(INTERNAL, n, (this as any).language, currentParseCallback);
              return currentParseCallback = null, currentLogCallback = null, a;
            }
            reset(): any {
              ((C as any)._ts_parser_reset as any)((this as any)[0]);
            }
            setTimeoutMicros(e: any): any {
              ((C as any)._ts_parser_set_timeout_micros as any)((this as any)[0], e);
            }
            getTimeoutMicros(): any {
              return ((C as any)._ts_parser_timeout_micros as any)((this as any)[0]);
            }
            setLogger(e: any): any {
              if (e) {
                if (("function" as any) != (typeof e as any)) throw new (Error as any)("Logger callback must be a function");
              } else e = null;
              return (this as any).logCallback = e, this;
            }
            getLogger(): any {
              return (this as any).logCallback;
            }
          }
          class Tree {
            declare textCallback: any;
            declare language: any;
            [key: string]: any;
            constructor(e: any, t: any, r: any, _: any) {
              (assertInternal as any)(e), (this as any)[0] = t, (this as any).language = r, (this as any).textCallback = _;
            }
            copy(): any {
              const e: any = ((C as any)._ts_tree_copy as any)((this as any)[0]);
              return new (Tree as any)(INTERNAL, e, (this as any).language, (this as any).textCallback);
            }
            delete(): any {
              ((C as any)._ts_tree_delete as any)((this as any)[0]), (this as any)[0] = 0;
            }
            edit(e: any): any {
              (marshalEdit as any)(e), ((C as any)._ts_tree_edit_wasm as any)((this as any)[0]);
            }
            get rootNode(): any {
              return ((C as any)._ts_tree_root_node_wasm as any)((this as any)[0]), (unmarshalNode as any)(this);
            }
            getLanguage(): any {
              return (this as any).language;
            }
            walk(): any {
              return (((this as any).rootNode as any).walk as any)();
            }
            getChangedRanges(e: any): any {
              if (((e as any).constructor as any) !== (Tree as any)) throw new (TypeError as any)("Argument must be a Tree");
              ((C as any)._ts_tree_get_changed_ranges_wasm as any)((this as any)[0], (e as any)[0]);
              const t: any = (getValue as any)(TRANSFER_BUFFER, "i32"),
                r: any = (getValue as any)((TRANSFER_BUFFER as any) + (SIZE_OF_INT as any), "i32"),
                _: any = new (Array as any)(t);
              if ((t as any) > (0 as any)) {
                let e: any = r;
                for (let r: any = 0; (r as any) < (t as any); r++) (_ as any)[r] = (unmarshalRange as any)(e), e += SIZE_OF_RANGE;
                ((C as any)._free as any)(r);
              }
              return _;
            }
          }
          class Node {
            declare _namedChildren: any;
            declare _children: any;
            declare tree: any;
            [key: string]: any;
            constructor(e: any, t: any) {
              (assertInternal as any)(e), (this as any).tree = t;
            }
            get typeId(): any {
              return (marshalNode as any)(this), ((C as any)._ts_node_symbol_wasm as any)(((this as any).tree as any)[0]);
            }
            get grammarId(): any {
              return (marshalNode as any)(this), ((C as any)._ts_node_grammar_symbol_wasm as any)(((this as any).tree as any)[0]);
            }
            get type(): any {
              return ((((this as any).tree as any).language as any).types as any)[(this as any).typeId] || "ERROR";
            }
            get grammarType(): any {
              return ((((this as any).tree as any).language as any).types as any)[(this as any).grammarId] || "ERROR";
            }
            get endPosition(): any {
              return (marshalNode as any)(this), ((C as any)._ts_node_end_point_wasm as any)(((this as any).tree as any)[0]), (unmarshalPoint as any)(TRANSFER_BUFFER);
            }
            get endIndex(): any {
              return (marshalNode as any)(this), ((C as any)._ts_node_end_index_wasm as any)(((this as any).tree as any)[0]);
            }
            get text(): any {
              return (getText as any)((this as any).tree, (this as any).startIndex, (this as any).endIndex);
            }
            get parseState(): any {
              return (marshalNode as any)(this), ((C as any)._ts_node_parse_state_wasm as any)(((this as any).tree as any)[0]);
            }
            get nextParseState(): any {
              return (marshalNode as any)(this), ((C as any)._ts_node_next_parse_state_wasm as any)(((this as any).tree as any)[0]);
            }
            isNamed(): any {
              return (marshalNode as any)(this), (1 as any) === (((C as any)._ts_node_is_named_wasm as any)(((this as any).tree as any)[0]) as any);
            }
            hasError(): any {
              return (marshalNode as any)(this), (1 as any) === (((C as any)._ts_node_has_error_wasm as any)(((this as any).tree as any)[0]) as any);
            }
            hasChanges(): any {
              return (marshalNode as any)(this), (1 as any) === (((C as any)._ts_node_has_changes_wasm as any)(((this as any).tree as any)[0]) as any);
            }
            isError(): any {
              return (marshalNode as any)(this), (1 as any) === (((C as any)._ts_node_is_error_wasm as any)(((this as any).tree as any)[0]) as any);
            }
            isMissing(): any {
              return (marshalNode as any)(this), (1 as any) === (((C as any)._ts_node_is_missing_wasm as any)(((this as any).tree as any)[0]) as any);
            }
            equals(e: any): any {
              return ((this as any).id as any) === ((e as any).id as any);
            }
            child(e: any): any {
              return (marshalNode as any)(this), ((C as any)._ts_node_child_wasm as any)(((this as any).tree as any)[0], e), (unmarshalNode as any)((this as any).tree);
            }
            fieldNameForChild(e: any): any {
              (marshalNode as any)(this);
              const t: any = ((C as any)._ts_node_field_name_for_child_wasm as any)(((this as any).tree as any)[0], e);
              if (!t) return null;
              return (AsciiToString as any)(t);
            }
            namedChild(e: any): any {
              return (marshalNode as any)(this), ((C as any)._ts_node_named_child_wasm as any)(((this as any).tree as any)[0], e), (unmarshalNode as any)((this as any).tree);
            }
            childForFieldId(e: any): any {
              return (marshalNode as any)(this), ((C as any)._ts_node_child_by_field_id_wasm as any)(((this as any).tree as any)[0], e), (unmarshalNode as any)((this as any).tree);
            }
            childForFieldName(e: any): any {
              const t: any = (((((this as any).tree as any).language as any).fields as any).indexOf as any)(e);
              if ((-1 as any) !== (t as any)) return ((this as any).childForFieldId as any)(t);
            }
            get childCount(): any {
              return (marshalNode as any)(this), ((C as any)._ts_node_child_count_wasm as any)(((this as any).tree as any)[0]);
            }
            get namedChildCount(): any {
              return (marshalNode as any)(this), ((C as any)._ts_node_named_child_count_wasm as any)(((this as any).tree as any)[0]);
            }
            get firstChild(): any {
              return ((this as any).child as any)(0);
            }
            get firstNamedChild(): any {
              return ((this as any).namedChild as any)(0);
            }
            get lastChild(): any {
              return ((this as any).child as any)(((this as any).childCount as any) - (1 as any));
            }
            get lastNamedChild(): any {
              return ((this as any).namedChild as any)(((this as any).namedChildCount as any) - (1 as any));
            }
            get children(): any {
              if (!(this as any)._children) {
                (marshalNode as any)(this), ((C as any)._ts_node_children_wasm as any)(((this as any).tree as any)[0]);
                const e: any = (getValue as any)(TRANSFER_BUFFER, "i32"),
                  t: any = (getValue as any)((TRANSFER_BUFFER as any) + (SIZE_OF_INT as any), "i32");
                if ((this as any)._children = new (Array as any)(e), (e as any) > (0 as any)) {
                  let r: any = t;
                  for (let t: any = 0; (t as any) < (e as any); t++) ((this as any)._children as any)[t] = (unmarshalNode as any)((this as any).tree, r), r += SIZE_OF_NODE;
                  ((C as any)._free as any)(t);
                }
              }
              return (this as any)._children;
            }
            get namedChildren(): any {
              if (!(this as any)._namedChildren) {
                (marshalNode as any)(this), ((C as any)._ts_node_named_children_wasm as any)(((this as any).tree as any)[0]);
                const e: any = (getValue as any)(TRANSFER_BUFFER, "i32"),
                  t: any = (getValue as any)((TRANSFER_BUFFER as any) + (SIZE_OF_INT as any), "i32");
                if ((this as any)._namedChildren = new (Array as any)(e), (e as any) > (0 as any)) {
                  let r: any = t;
                  for (let t: any = 0; (t as any) < (e as any); t++) ((this as any)._namedChildren as any)[t] = (unmarshalNode as any)((this as any).tree, r), r += SIZE_OF_NODE;
                  ((C as any)._free as any)(t);
                }
              }
              return (this as any)._namedChildren;
            }
            descendantsOfType(e: any, t: any, r: any): any {
              ((Array as any).isArray as any)(e) || (e = [e]), t || (t = ZERO_POINT), r || (r = ZERO_POINT);
              const _: any = [],
                s: any = (((this as any).tree as any).language as any).types;
              for (let t: any = 0, r: any = (s as any).length; (t as any) < (r as any); t++) ((e as any).includes as any)((s as any)[t]) && ((_ as any).push as any)(t);
              const n: any = ((C as any)._malloc as any)((SIZE_OF_INT as any) * ((_ as any).length as any));
              for (let e: any = 0, t: any = (_ as any).length; (e as any) < (t as any); e++) (setValue as any)((n as any) + ((e as any) * (SIZE_OF_INT as any) as any), (_ as any)[e], "i32");
              (marshalNode as any)(this), ((C as any)._ts_node_descendants_of_type_wasm as any)(((this as any).tree as any)[0], n, (_ as any).length, (t as any).row, (t as any).column, (r as any).row, (r as any).column);
              const a: any = (getValue as any)(TRANSFER_BUFFER, "i32"),
                o: any = (getValue as any)((TRANSFER_BUFFER as any) + (SIZE_OF_INT as any), "i32"),
                l: any = new (Array as any)(a);
              if ((a as any) > (0 as any)) {
                let e: any = o;
                for (let t: any = 0; (t as any) < (a as any); t++) (l as any)[t] = (unmarshalNode as any)((this as any).tree, e), e += SIZE_OF_NODE;
              }
              return ((C as any)._free as any)(o), ((C as any)._free as any)(n), l;
            }
            get nextSibling(): any {
              return (marshalNode as any)(this), ((C as any)._ts_node_next_sibling_wasm as any)(((this as any).tree as any)[0]), (unmarshalNode as any)((this as any).tree);
            }
            get previousSibling(): any {
              return (marshalNode as any)(this), ((C as any)._ts_node_prev_sibling_wasm as any)(((this as any).tree as any)[0]), (unmarshalNode as any)((this as any).tree);
            }
            get nextNamedSibling(): any {
              return (marshalNode as any)(this), ((C as any)._ts_node_next_named_sibling_wasm as any)(((this as any).tree as any)[0]), (unmarshalNode as any)((this as any).tree);
            }
            get previousNamedSibling(): any {
              return (marshalNode as any)(this), ((C as any)._ts_node_prev_named_sibling_wasm as any)(((this as any).tree as any)[0]), (unmarshalNode as any)((this as any).tree);
            }
            get parent(): any {
              return (marshalNode as any)(this), ((C as any)._ts_node_parent_wasm as any)(((this as any).tree as any)[0]), (unmarshalNode as any)((this as any).tree);
            }
            descendantForIndex(e: any, t: any = e): any {
              if (("number" as any) != (typeof e as any) || ("number" as any) != (typeof t as any)) throw new (Error as any)("Arguments must be numbers");
              (marshalNode as any)(this);
              const r: any = (TRANSFER_BUFFER as any) + (SIZE_OF_NODE as any);
              return (setValue as any)(r, e, "i32"), (setValue as any)((r as any) + (SIZE_OF_INT as any), t, "i32"), ((C as any)._ts_node_descendant_for_index_wasm as any)(((this as any).tree as any)[0]), (unmarshalNode as any)((this as any).tree);
            }
            namedDescendantForIndex(e: any, t: any = e): any {
              if (("number" as any) != (typeof e as any) || ("number" as any) != (typeof t as any)) throw new (Error as any)("Arguments must be numbers");
              (marshalNode as any)(this);
              const r: any = (TRANSFER_BUFFER as any) + (SIZE_OF_NODE as any);
              return (setValue as any)(r, e, "i32"), (setValue as any)((r as any) + (SIZE_OF_INT as any), t, "i32"), ((C as any)._ts_node_named_descendant_for_index_wasm as any)(((this as any).tree as any)[0]), (unmarshalNode as any)((this as any).tree);
            }
            descendantForPosition(e: any, t: any = e): any {
              if (!(isPoint as any)(e) || !(isPoint as any)(t)) throw new (Error as any)("Arguments must be {row, column} objects");
              (marshalNode as any)(this);
              const r: any = (TRANSFER_BUFFER as any) + (SIZE_OF_NODE as any);
              return (marshalPoint as any)(r, e), (marshalPoint as any)((r as any) + (SIZE_OF_POINT as any), t), ((C as any)._ts_node_descendant_for_position_wasm as any)(((this as any).tree as any)[0]), (unmarshalNode as any)((this as any).tree);
            }
            namedDescendantForPosition(e: any, t: any = e): any {
              if (!(isPoint as any)(e) || !(isPoint as any)(t)) throw new (Error as any)("Arguments must be {row, column} objects");
              (marshalNode as any)(this);
              const r: any = (TRANSFER_BUFFER as any) + (SIZE_OF_NODE as any);
              return (marshalPoint as any)(r, e), (marshalPoint as any)((r as any) + (SIZE_OF_POINT as any), t), ((C as any)._ts_node_named_descendant_for_position_wasm as any)(((this as any).tree as any)[0]), (unmarshalNode as any)((this as any).tree);
            }
            walk(): any {
              return (marshalNode as any)(this), ((C as any)._ts_tree_cursor_new_wasm as any)(((this as any).tree as any)[0]), new (TreeCursor as any)(INTERNAL, (this as any).tree);
            }
            toString(): any {
              (marshalNode as any)(this);
              const e: any = ((C as any)._ts_node_to_string_wasm as any)(((this as any).tree as any)[0]),
                t: any = (AsciiToString as any)(e);
              return ((C as any)._free as any)(e), t;
            }
          }
          class TreeCursor {
            declare tree: any;
            [key: string]: any;
            constructor(e: any, t: any) {
              (assertInternal as any)(e), (this as any).tree = t, (unmarshalTreeCursor as any)(this);
            }
            delete(): any {
              (marshalTreeCursor as any)(this), ((C as any)._ts_tree_cursor_delete_wasm as any)(((this as any).tree as any)[0]), (this as any)[0] = (this as any)[1] = (this as any)[2] = 0;
            }
            reset(e: any): any {
              (marshalNode as any)(e), (marshalTreeCursor as any)(this, (TRANSFER_BUFFER as any) + (SIZE_OF_NODE as any)), ((C as any)._ts_tree_cursor_reset_wasm as any)(((this as any).tree as any)[0]), (unmarshalTreeCursor as any)(this);
            }
            resetTo(e: any): any {
              (marshalTreeCursor as any)(this, TRANSFER_BUFFER), (marshalTreeCursor as any)(e, (TRANSFER_BUFFER as any) + (SIZE_OF_CURSOR as any)), ((C as any)._ts_tree_cursor_reset_to_wasm as any)(((this as any).tree as any)[0], ((e as any).tree as any)[0]), (unmarshalTreeCursor as any)(this);
            }
            get nodeType(): any {
              return ((((this as any).tree as any).language as any).types as any)[(this as any).nodeTypeId] || "ERROR";
            }
            get nodeTypeId(): any {
              return (marshalTreeCursor as any)(this), ((C as any)._ts_tree_cursor_current_node_type_id_wasm as any)(((this as any).tree as any)[0]);
            }
            get nodeStateId(): any {
              return (marshalTreeCursor as any)(this), ((C as any)._ts_tree_cursor_current_node_state_id_wasm as any)(((this as any).tree as any)[0]);
            }
            get nodeId(): any {
              return (marshalTreeCursor as any)(this), ((C as any)._ts_tree_cursor_current_node_id_wasm as any)(((this as any).tree as any)[0]);
            }
            get nodeIsNamed(): any {
              return (marshalTreeCursor as any)(this), (1 as any) === (((C as any)._ts_tree_cursor_current_node_is_named_wasm as any)(((this as any).tree as any)[0]) as any);
            }
            get nodeIsMissing(): any {
              return (marshalTreeCursor as any)(this), (1 as any) === (((C as any)._ts_tree_cursor_current_node_is_missing_wasm as any)(((this as any).tree as any)[0]) as any);
            }
            get nodeText(): any {
              (marshalTreeCursor as any)(this);
              const e: any = ((C as any)._ts_tree_cursor_start_index_wasm as any)(((this as any).tree as any)[0]),
                t: any = ((C as any)._ts_tree_cursor_end_index_wasm as any)(((this as any).tree as any)[0]);
              return (getText as any)((this as any).tree, e, t);
            }
            get startPosition(): any {
              return (marshalTreeCursor as any)(this), ((C as any)._ts_tree_cursor_start_position_wasm as any)(((this as any).tree as any)[0]), (unmarshalPoint as any)(TRANSFER_BUFFER);
            }
            get endPosition(): any {
              return (marshalTreeCursor as any)(this), ((C as any)._ts_tree_cursor_end_position_wasm as any)(((this as any).tree as any)[0]), (unmarshalPoint as any)(TRANSFER_BUFFER);
            }
            get startIndex(): any {
              return (marshalTreeCursor as any)(this), ((C as any)._ts_tree_cursor_start_index_wasm as any)(((this as any).tree as any)[0]);
            }
            get endIndex(): any {
              return (marshalTreeCursor as any)(this), ((C as any)._ts_tree_cursor_end_index_wasm as any)(((this as any).tree as any)[0]);
            }
            currentNode(): any {
              return (marshalTreeCursor as any)(this), ((C as any)._ts_tree_cursor_current_node_wasm as any)(((this as any).tree as any)[0]), (unmarshalNode as any)((this as any).tree);
            }
            currentFieldId(): any {
              return (marshalTreeCursor as any)(this), ((C as any)._ts_tree_cursor_current_field_id_wasm as any)(((this as any).tree as any)[0]);
            }
            currentFieldName(): any {
              return ((((this as any).tree as any).language as any).fields as any)[((this as any).currentFieldId as any)()];
            }
            gotoFirstChild(): any {
              (marshalTreeCursor as any)(this);
              const e: any = ((C as any)._ts_tree_cursor_goto_first_child_wasm as any)(((this as any).tree as any)[0]);
              return (unmarshalTreeCursor as any)(this), (1 as any) === (e as any);
            }
            gotoLastChild(): any {
              (marshalTreeCursor as any)(this);
              const e: any = ((C as any)._ts_tree_cursor_goto_last_child_wasm as any)(((this as any).tree as any)[0]);
              return (unmarshalTreeCursor as any)(this), (1 as any) === (e as any);
            }
            gotoNextSibling(): any {
              (marshalTreeCursor as any)(this);
              const e: any = ((C as any)._ts_tree_cursor_goto_next_sibling_wasm as any)(((this as any).tree as any)[0]);
              return (unmarshalTreeCursor as any)(this), (1 as any) === (e as any);
            }
            gotoPreviousSibling(): any {
              (marshalTreeCursor as any)(this);
              const e: any = ((C as any)._ts_tree_cursor_goto_previous_sibling_wasm as any)(((this as any).tree as any)[0]);
              return (unmarshalTreeCursor as any)(this), (1 as any) === (e as any);
            }
            gotoParent(): any {
              (marshalTreeCursor as any)(this);
              const e: any = ((C as any)._ts_tree_cursor_goto_parent_wasm as any)(((this as any).tree as any)[0]);
              return (unmarshalTreeCursor as any)(this), (1 as any) === (e as any);
            }
          }
          class Language {
            declare fields: any;
            declare types: any;
            [key: string]: any;
            constructor(e: any, t: any) {
              (assertInternal as any)(e), (this as any)[0] = t, (this as any).types = new (Array as any)(((C as any)._ts_language_symbol_count as any)((this as any)[0]));
              for (let e: any = 0, t: any = ((this as any).types as any).length; (e as any) < (t as any); e++) (((C as any)._ts_language_symbol_type as any)((this as any)[0], e) as any) < (2 as any) && (((this as any).types as any)[e] = (UTF8ToString as any)(((C as any)._ts_language_symbol_name as any)((this as any)[0], e)));
              (this as any).fields = new (Array as any)((((C as any)._ts_language_field_count as any)((this as any)[0]) as any) + (1 as any));
              for (let e: any = 0, t: any = ((this as any).fields as any).length; (e as any) < (t as any); e++) {
                const t: any = ((C as any)._ts_language_field_name_for_id as any)((this as any)[0], e);
                ((this as any).fields as any)[e] = (0 as any) !== (t as any) ? (UTF8ToString as any)(t) : null;
              }
            }
            get version(): any {
              return ((C as any)._ts_language_version as any)((this as any)[0]);
            }
            get fieldCount(): any {
              return (((this as any).fields as any).length as any) - (1 as any);
            }
            get stateCount(): any {
              return ((C as any)._ts_language_state_count as any)((this as any)[0]);
            }
            fieldIdForName(e: any): any {
              const t: any = (((this as any).fields as any).indexOf as any)(e);
              return (-1 as any) !== (t as any) ? t : null;
            }
            fieldNameForId(e: any): any {
              return ((this as any).fields as any)[e] || null;
            }
            idForNodeType(e: any, t: any): any {
              const r: any = (lengthBytesUTF8 as any)(e),
                _: any = ((C as any)._malloc as any)((r as any) + (1 as any));
              (stringToUTF8 as any)(e, _, (r as any) + (1 as any));
              const s: any = ((C as any)._ts_language_symbol_for_name as any)((this as any)[0], _, r, t);
              return ((C as any)._free as any)(_), s || null;
            }
            get nodeTypeCount(): any {
              return ((C as any)._ts_language_symbol_count as any)((this as any)[0]);
            }
            nodeTypeForId(e: any): any {
              const t: any = ((C as any)._ts_language_symbol_name as any)((this as any)[0], e);
              return t ? (UTF8ToString as any)(t) : null;
            }
            nodeTypeIsNamed(e: any): any {
              return !!((C as any)._ts_language_type_is_named_wasm as any)((this as any)[0], e);
            }
            nodeTypeIsVisible(e: any): any {
              return !!((C as any)._ts_language_type_is_visible_wasm as any)((this as any)[0], e);
            }
            nextState(e: any, t: any): any {
              return ((C as any)._ts_language_next_state as any)((this as any)[0], e, t);
            }
            lookaheadIterator(e: any): any {
              const t: any = ((C as any)._ts_lookahead_iterator_new as any)((this as any)[0], e);
              if (t) return new (LookaheadIterable as any)(INTERNAL, t, this);
            }
            query(e: any): any {
              const t: any = (lengthBytesUTF8 as any)(e),
                r: any = ((C as any)._malloc as any)((t as any) + (1 as any));
              (stringToUTF8 as any)(e, r, (t as any) + (1 as any));
              const _: any = ((C as any)._ts_query_new as any)((this as any)[0], r, t, TRANSFER_BUFFER, (TRANSFER_BUFFER as any) + (SIZE_OF_INT as any));
              if (!_) {
                const t: any = (getValue as any)((TRANSFER_BUFFER as any) + (SIZE_OF_INT as any), "i32"),
                  _: any = ((UTF8ToString as any)(r, (getValue as any)(TRANSFER_BUFFER, "i32")) as any).length,
                  s: any = (((((e as any).substr as any)(_, 100) as any).split as any)("\n") as any)[0];
                let n: any,
                  a: any = (((s as any).match as any)(QUERY_WORD_REGEX) as any)[0];
                switch (t) {
                  case 2:
                    n = new (RangeError as any)(`Bad node name '${a}'`);
                    break;
                  case 3:
                    n = new (RangeError as any)(`Bad field name '${a}'`);
                    break;
                  case 4:
                    n = new (RangeError as any)(`Bad capture name @${a}`);
                    break;
                  case 5:
                    n = new (TypeError as any)(`Bad pattern structure at offset ${_}: '${s}'...`), a = "";
                    break;
                  default:
                    n = new (SyntaxError as any)(`Bad syntax at offset ${_}: '${s}'...`), a = "";
                }
                throw (n as any).index = _, (n as any).length = (a as any).length, ((C as any)._free as any)(r), n;
              }
              const s: any = ((C as any)._ts_query_string_count as any)(_),
                n: any = ((C as any)._ts_query_capture_count as any)(_),
                a: any = ((C as any)._ts_query_pattern_count as any)(_),
                o: any = new (Array as any)(n),
                l: any = new (Array as any)(s);
              for (let e: any = 0; (e as any) < (n as any); e++) {
                const t: any = ((C as any)._ts_query_capture_name_for_id as any)(_, e, TRANSFER_BUFFER),
                  r: any = (getValue as any)(TRANSFER_BUFFER, "i32");
                (o as any)[e] = (UTF8ToString as any)(t, r);
              }
              for (let e: any = 0; (e as any) < (s as any); e++) {
                const t: any = ((C as any)._ts_query_string_value_for_id as any)(_, e, TRANSFER_BUFFER),
                  r: any = (getValue as any)(TRANSFER_BUFFER, "i32");
                (l as any)[e] = (UTF8ToString as any)(t, r);
              }
              const i: any = new (Array as any)(a),
                u: any = new (Array as any)(a),
                d: any = new (Array as any)(a),
                m: any = new (Array as any)(a),
                c: any = new (Array as any)(a);
              for (let e: any = 0; (e as any) < (a as any); e++) {
                const t: any = ((C as any)._ts_query_predicates_for_pattern as any)(_, e, TRANSFER_BUFFER),
                  r: any = (getValue as any)(TRANSFER_BUFFER, "i32");
                (m as any)[e] = [], (c as any)[e] = [];
                const s: any = [];
                let n: any = t;
                for (let t: any = 0; (t as any) < (r as any); t++) {
                  const t: any = (getValue as any)(n, "i32");
                  n += SIZE_OF_INT;
                  const r: any = (getValue as any)(n, "i32");
                  if (n += SIZE_OF_INT, (t as any) === (PREDICATE_STEP_TYPE_CAPTURE as any)) ((s as any).push as any)({
                    type: "capture",
                    name: (o as any)[r]
                  });else if ((t as any) === (PREDICATE_STEP_TYPE_STRING as any)) ((s as any).push as any)({
                    type: "string",
                    value: (l as any)[r]
                  });else if (((s as any).length as any) > (0 as any)) {
                    if (("string" as any) !== (((s as any)[0] as any).type as any)) throw new (Error as any)("Predicates must begin with a literal value");
                    const t: any = ((s as any)[0] as any).value;
                    let r: any,
                      _: any = !0,
                      n: any = !0;
                    switch (t) {
                      case "any-not-eq?":
                      case "not-eq?":
                        _ = !1;
                      case "any-eq?":
                      case "eq?":
                        if ((3 as any) !== ((s as any).length as any)) throw new (Error as any)(`Wrong number of arguments to \`#${t}\` predicate. Expected 2, got ${((s as any).length as any) - (1 as any)}`);
                        if (("capture" as any) !== (((s as any)[1] as any).type as any)) throw new (Error as any)(`First argument of \`#${t}\` predicate must be a capture. Got "${((s as any)[1] as any).value}"`);
                        if (n = !((t as any).startsWith as any)("any-"), ("capture" as any) === (((s as any)[2] as any).type as any)) {
                          const t: any = ((s as any)[1] as any).name,
                            r: any = ((s as any)[2] as any).name;
                          (((c as any)[e] as any).push as any)(function (this: any, e: any): any {
                            const s: any = [],
                              a: any = [];
                            for (const _ of e) ((_ as any).name as any) === (t as any) && ((s as any).push as any)((_ as any).node), ((_ as any).name as any) === (r as any) && ((a as any).push as any)((_ as any).node);
                            const o: any = (e: any, t: any, r: any): any => r ? ((e as any).text as any) === ((t as any).text as any) : ((e as any).text as any) !== ((t as any).text as any);
                            return n ? ((s as any).every as any)((e: any): any => ((a as any).some as any)((t: any): any => (o as any)(e, t, _))) : ((s as any).some as any)((e: any): any => ((a as any).some as any)((t: any): any => (o as any)(e, t, _)));
                          });
                        } else {
                          r = ((s as any)[1] as any).name;
                          const t: any = ((s as any)[2] as any).value,
                            a: any = (e: any): any => ((e as any).text as any) === (t as any),
                            o: any = (e: any): any => ((e as any).text as any) !== (t as any);
                          (((c as any)[e] as any).push as any)(function (this: any, e: any): any {
                            const t: any = [];
                            for (const _ of e) ((_ as any).name as any) === (r as any) && ((t as any).push as any)((_ as any).node);
                            const s: any = _ ? a : o;
                            return n ? ((t as any).every as any)(s) : ((t as any).some as any)(s);
                          });
                        }
                        break;
                      case "any-not-match?":
                      case "not-match?":
                        _ = !1;
                      case "any-match?":
                      case "match?":
                        if ((3 as any) !== ((s as any).length as any)) throw new (Error as any)(`Wrong number of arguments to \`#${t}\` predicate. Expected 2, got ${((s as any).length as any) - (1 as any)}.`);
                        if (("capture" as any) !== (((s as any)[1] as any).type as any)) throw new (Error as any)(`First argument of \`#${t}\` predicate must be a capture. Got "${((s as any)[1] as any).value}".`);
                        if (("string" as any) !== (((s as any)[2] as any).type as any)) throw new (Error as any)(`Second argument of \`#${t}\` predicate must be a string. Got @${((s as any)[2] as any).value}.`);
                        r = ((s as any)[1] as any).name;
                        const a: any = new (RegExp as any)(((s as any)[2] as any).value);
                        n = !((t as any).startsWith as any)("any-"), (((c as any)[e] as any).push as any)(function (this: any, e: any): any {
                          const t: any = [];
                          for (const _ of e) ((_ as any).name as any) === (r as any) && ((t as any).push as any)(((_ as any).node as any).text);
                          const s: any = (e: any, t: any): any => t ? ((a as any).test as any)(e) : !((a as any).test as any)(e);
                          return (0 as any) === ((t as any).length as any) ? !_ : n ? ((t as any).every as any)((e: any): any => (s as any)(e, _)) : ((t as any).some as any)((e: any): any => (s as any)(e, _));
                        });
                        break;
                      case "set!":
                        if (((s as any).length as any) < (2 as any) || ((s as any).length as any) > (3 as any)) throw new (Error as any)(`Wrong number of arguments to \`#set!\` predicate. Expected 1 or 2. Got ${((s as any).length as any) - (1 as any)}.`);
                        if (((s as any).some as any)((e: any): any => ("string" as any) !== ((e as any).type as any))) throw new (Error as any)('Arguments to `#set!` predicate must be a strings.".');
                        (i as any)[e] || ((i as any)[e] = {}), ((i as any)[e] as any)[((s as any)[1] as any).value] = (s as any)[2] ? ((s as any)[2] as any).value : null;
                        break;
                      case "is?":
                      case "is-not?":
                        if (((s as any).length as any) < (2 as any) || ((s as any).length as any) > (3 as any)) throw new (Error as any)(`Wrong number of arguments to \`#${t}\` predicate. Expected 1 or 2. Got ${((s as any).length as any) - (1 as any)}.`);
                        if (((s as any).some as any)((e: any): any => ("string" as any) !== ((e as any).type as any))) throw new (Error as any)(`Arguments to \`#${t}\` predicate must be a strings.".`);
                        const o: any = ("is?" as any) === (t as any) ? u : d;
                        (o as any)[e] || ((o as any)[e] = {}), ((o as any)[e] as any)[((s as any)[1] as any).value] = (s as any)[2] ? ((s as any)[2] as any).value : null;
                        break;
                      case "not-any-of?":
                        _ = !1;
                      case "any-of?":
                        if (((s as any).length as any) < (2 as any)) throw new (Error as any)(`Wrong number of arguments to \`#${t}\` predicate. Expected at least 1. Got ${((s as any).length as any) - (1 as any)}.`);
                        if (("capture" as any) !== (((s as any)[1] as any).type as any)) throw new (Error as any)(`First argument of \`#${t}\` predicate must be a capture. Got "${((s as any)[1] as any).value}".`);
                        for (let e: any = 2; (e as any) < ((s as any).length as any); e++) if (("string" as any) !== (((s as any)[e] as any).type as any)) throw new (Error as any)(`Arguments to \`#${t}\` predicate must be a strings.".`);
                        r = ((s as any)[1] as any).name;
                        const l: any = ((((s as any).slice as any)(2) as any).map as any)((e: any): any => (e as any).value);
                        (((c as any)[e] as any).push as any)(function (this: any, e: any): any {
                          const t: any = [];
                          for (const _ of e) ((_ as any).name as any) === (r as any) && ((t as any).push as any)(((_ as any).node as any).text);
                          return (0 as any) === ((t as any).length as any) ? !_ : (((t as any).every as any)((e: any): any => ((l as any).includes as any)(e)) as any) === (_ as any);
                        });
                        break;
                      default:
                        (((m as any)[e] as any).push as any)({
                          operator: t,
                          operands: ((s as any).slice as any)(1)
                        });
                    }
                    (s as any).length = 0;
                  }
                }
                ((Object as any).freeze as any)((i as any)[e]), ((Object as any).freeze as any)((u as any)[e]), ((Object as any).freeze as any)((d as any)[e]);
              }
              return ((C as any)._free as any)(r), new (Query as any)(INTERNAL, _, o, c, m, ((Object as any).freeze as any)(i), ((Object as any).freeze as any)(u), ((Object as any).freeze as any)(d));
            }
            static load(e: any): any {
              let t: any;
              if (e instanceof Uint8Array) t = ((Promise as any).resolve as any)(e);else {
                const r: any = e;
                if (("undefined" as any) != (typeof process as any) && (process as any).versions && ((process as any).versions as any).node) {
                  const e: any = (require as any)("fs");
                  t = ((Promise as any).resolve as any)(((e as any).readFileSync as any)(r));
                } else t = (((fetch as any)(r) as any).then as any)((e: any): any => ((((e as any).arrayBuffer as any)() as any).then as any)((t: any): any => {
                  if ((e as any).ok) return new (Uint8Array as any)(t);
                  {
                    const r: any = ((new (TextDecoder as any)("utf-8") as any).decode as any)(t);
                    throw new (Error as any)(`Language.load failed with status ${(e as any).status}.\n\n${r}`);
                  }
                }));
              }
              return ((((t as any).then as any)((e: any): any => (loadWebAssemblyModule as any)(e, {
                loadAsync: !0
              })) as any).then as any)((e: any): any => {
                const t: any = ((Object as any).keys as any)(e),
                  r: any = ((t as any).find as any)((e: any): any => ((LANGUAGE_FUNCTION_REGEX as any).test as any)(e) && !((e as any).includes as any)("external_scanner_"));
                r || ((console as any).log as any)(`Couldn't find language function in WASM file. Symbols:\n${((JSON as any).stringify as any)(t, null, 2)}`);
                const _: any = ((e as any)[r] as any)();
                return new (Language as any)(INTERNAL, _);
              });
            }
          }
          class LookaheadIterable {
            declare language: any;
            [key: string]: any;
            constructor(e: any, t: any, r: any) {
              (assertInternal as any)(e), (this as any)[0] = t, (this as any).language = r;
            }
            get currentTypeId(): any {
              return ((C as any)._ts_lookahead_iterator_current_symbol as any)((this as any)[0]);
            }
            get currentType(): any {
              return (((this as any).language as any).types as any)[(this as any).currentTypeId] || "ERROR";
            }
            delete(): any {
              ((C as any)._ts_lookahead_iterator_delete as any)((this as any)[0]), (this as any)[0] = 0;
            }
            resetState(e: any): any {
              return ((C as any)._ts_lookahead_iterator_reset_state as any)((this as any)[0], e);
            }
            reset(e: any, t: any): any {
              return !!((C as any)._ts_lookahead_iterator_reset as any)((this as any)[0], (e as any)[0], t) && ((this as any).language = e, !0);
            }
            [Symbol.iterator](): any {
              const e: any = this;
              return {
                next: (): any => ((C as any)._ts_lookahead_iterator_next as any)((e as any)[0]) ? {
                  done: !1,
                  value: (e as any).currentType
                } : {
                  done: !0,
                  value: ""
                }
              };
            }
          }
          class Query {
            declare exceededMatchLimit: any;
            declare refutedProperties: any;
            declare assertedProperties: any;
            declare setProperties: any;
            declare predicates: any;
            declare textPredicates: any;
            declare captureNames: any;
            [key: string]: any;
            constructor(e: any, t: any, r: any, _: any, s: any, n: any, a: any, o: any) {
              (assertInternal as any)(e), (this as any)[0] = t, (this as any).captureNames = r, (this as any).textPredicates = _, (this as any).predicates = s, (this as any).setProperties = n, (this as any).assertedProperties = a, (this as any).refutedProperties = o, (this as any).exceededMatchLimit = !1;
            }
            delete(): any {
              ((C as any)._ts_query_delete as any)((this as any)[0]), (this as any)[0] = 0;
            }
            matches(e: any, t: any, r: any, _: any): any {
              t || (t = ZERO_POINT), r || (r = ZERO_POINT), _ || (_ = {});
              let s: any = (_ as any).matchLimit;
              if ((void 0 as any) === (s as any)) s = 0;else if (("number" as any) != (typeof s as any)) throw new (Error as any)("Arguments must be numbers");
              (marshalNode as any)(e), ((C as any)._ts_query_matches_wasm as any)((this as any)[0], ((e as any).tree as any)[0], (t as any).row, (t as any).column, (r as any).row, (r as any).column, s);
              const n: any = (getValue as any)(TRANSFER_BUFFER, "i32"),
                a: any = (getValue as any)((TRANSFER_BUFFER as any) + (SIZE_OF_INT as any), "i32"),
                o: any = (getValue as any)((TRANSFER_BUFFER as any) + ((2 as any) * (SIZE_OF_INT as any) as any), "i32"),
                l: any = new (Array as any)(n);
              (this as any).exceededMatchLimit = !!o;
              let i: any = 0,
                u: any = a;
              for (let t: any = 0; (t as any) < (n as any); t++) {
                const t: any = (getValue as any)(u, "i32");
                u += SIZE_OF_INT;
                const r: any = (getValue as any)(u, "i32");
                u += SIZE_OF_INT;
                const _: any = new (Array as any)(r);
                if (u = (unmarshalCaptures as any)(this, (e as any).tree, u, _), ((((this as any).textPredicates as any)[t] as any).every as any)((e: any): any => (e as any)(_))) {
                  (l as any)[i] = {
                    pattern: t,
                    captures: _
                  };
                  const e: any = ((this as any).setProperties as any)[t];
                  e && (((l as any)[i] as any).setProperties = e);
                  const r: any = ((this as any).assertedProperties as any)[t];
                  r && (((l as any)[i] as any).assertedProperties = r);
                  const s: any = ((this as any).refutedProperties as any)[t];
                  s && (((l as any)[i] as any).refutedProperties = s), i++;
                }
              }
              return (l as any).length = i, ((C as any)._free as any)(a), l;
            }
            captures(e: any, t: any, r: any, _: any): any {
              t || (t = ZERO_POINT), r || (r = ZERO_POINT), _ || (_ = {});
              let s: any = (_ as any).matchLimit;
              if ((void 0 as any) === (s as any)) s = 0;else if (("number" as any) != (typeof s as any)) throw new (Error as any)("Arguments must be numbers");
              (marshalNode as any)(e), ((C as any)._ts_query_captures_wasm as any)((this as any)[0], ((e as any).tree as any)[0], (t as any).row, (t as any).column, (r as any).row, (r as any).column, s);
              const n: any = (getValue as any)(TRANSFER_BUFFER, "i32"),
                a: any = (getValue as any)((TRANSFER_BUFFER as any) + (SIZE_OF_INT as any), "i32"),
                o: any = (getValue as any)((TRANSFER_BUFFER as any) + ((2 as any) * (SIZE_OF_INT as any) as any), "i32"),
                l: any = [];
              (this as any).exceededMatchLimit = !!o;
              const i: any = [];
              let u: any = a;
              for (let t: any = 0; (t as any) < (n as any); t++) {
                const t: any = (getValue as any)(u, "i32");
                u += SIZE_OF_INT;
                const r: any = (getValue as any)(u, "i32");
                u += SIZE_OF_INT;
                const _: any = (getValue as any)(u, "i32");
                if (u += SIZE_OF_INT, (i as any).length = r, u = (unmarshalCaptures as any)(this, (e as any).tree, u, i), ((((this as any).textPredicates as any)[t] as any).every as any)((e: any): any => (e as any)(i))) {
                  const e: any = (i as any)[_],
                    r: any = ((this as any).setProperties as any)[t];
                  r && ((e as any).setProperties = r);
                  const s: any = ((this as any).assertedProperties as any)[t];
                  s && ((e as any).assertedProperties = s);
                  const n: any = ((this as any).refutedProperties as any)[t];
                  n && ((e as any).refutedProperties = n), ((l as any).push as any)(e);
                }
              }
              return ((C as any)._free as any)(a), l;
            }
            predicatesForPattern(e: any): any {
              return ((this as any).predicates as any)[e];
            }
            didExceedMatchLimit(): any {
              return (this as any).exceededMatchLimit;
            }
          }
          function getText(this: any, e: any, t: any, r: any): any {
            const _: any = (r as any) - (t as any);
            let s: any = ((e as any).textCallback as any)(t, null, r);
            for (t += (s as any).length; (t as any) < (r as any);) {
              const _: any = ((e as any).textCallback as any)(t, null, r);
              if (!(_ && ((_ as any).length as any) > (0 as any))) break;
              t += (_ as any).length, s += _;
            }
            return (t as any) > (r as any) && (s = ((s as any).slice as any)(0, _)), s;
          }
          function unmarshalCaptures(this: any, e: any, t: any, r: any, _: any): any {
            for (let s: any = 0, n: any = (_ as any).length; (s as any) < (n as any); s++) {
              const n: any = (getValue as any)(r, "i32"),
                a: any = (unmarshalNode as any)(t, r += SIZE_OF_INT);
              r += SIZE_OF_NODE, (_ as any)[s] = {
                name: ((e as any).captureNames as any)[n],
                node: a
              };
            }
            return r;
          }
          function assertInternal(this: any, e: any): any {
            if ((e as any) !== (INTERNAL as any)) throw new (Error as any)("Illegal constructor");
          }
          function isPoint(this: any, e: any): any {
            return e && ("number" as any) == (typeof (e as any).row as any) && ("number" as any) == (typeof (e as any).column as any);
          }
          function marshalNode(this: any, e: any): any {
            let t: any = TRANSFER_BUFFER;
            (setValue as any)(t, (e as any).id, "i32"), t += SIZE_OF_INT, (setValue as any)(t, (e as any).startIndex, "i32"), t += SIZE_OF_INT, (setValue as any)(t, ((e as any).startPosition as any).row, "i32"), t += SIZE_OF_INT, (setValue as any)(t, ((e as any).startPosition as any).column, "i32"), t += SIZE_OF_INT, (setValue as any)(t, (e as any)[0], "i32");
          }
          function unmarshalNode(this: any, e: any, t: any = TRANSFER_BUFFER): any {
            const r: any = (getValue as any)(t, "i32");
            if ((0 as any) === (r as any)) return null;
            const _: any = (getValue as any)(t += SIZE_OF_INT, "i32"),
              s: any = (getValue as any)(t += SIZE_OF_INT, "i32"),
              n: any = (getValue as any)(t += SIZE_OF_INT, "i32"),
              a: any = (getValue as any)(t += SIZE_OF_INT, "i32"),
              o: any = new (Node as any)(INTERNAL, e);
            return (o as any).id = r, (o as any).startIndex = _, (o as any).startPosition = {
              row: s,
              column: n
            }, (o as any)[0] = a, o;
          }
          function marshalTreeCursor(this: any, e: any, t: any = TRANSFER_BUFFER): any {
            (setValue as any)((t as any) + ((0 as any) * (SIZE_OF_INT as any) as any), (e as any)[0], "i32"), (setValue as any)((t as any) + ((1 as any) * (SIZE_OF_INT as any) as any), (e as any)[1], "i32"), (setValue as any)((t as any) + ((2 as any) * (SIZE_OF_INT as any) as any), (e as any)[2], "i32");
          }
          function unmarshalTreeCursor(this: any, e: any): any {
            (e as any)[0] = (getValue as any)((TRANSFER_BUFFER as any) + ((0 as any) * (SIZE_OF_INT as any) as any), "i32"), (e as any)[1] = (getValue as any)((TRANSFER_BUFFER as any) + ((1 as any) * (SIZE_OF_INT as any) as any), "i32"), (e as any)[2] = (getValue as any)((TRANSFER_BUFFER as any) + ((2 as any) * (SIZE_OF_INT as any) as any), "i32");
          }
          function marshalPoint(this: any, e: any, t: any): any {
            (setValue as any)(e, (t as any).row, "i32"), (setValue as any)((e as any) + (SIZE_OF_INT as any), (t as any).column, "i32");
          }
          function unmarshalPoint(this: any, e: any): any {
            return {
              row: (getValue as any)(e, "i32"),
              column: (getValue as any)((e as any) + (SIZE_OF_INT as any), "i32")
            };
          }
          function marshalRange(this: any, e: any, t: any): any {
            (marshalPoint as any)(e, (t as any).startPosition), (marshalPoint as any)(e += SIZE_OF_POINT, (t as any).endPosition), (setValue as any)(e += SIZE_OF_POINT, (t as any).startIndex, "i32"), (setValue as any)(e += SIZE_OF_INT, (t as any).endIndex, "i32"), e += SIZE_OF_INT;
          }
          function unmarshalRange(this: any, e: any): any {
            const t: any = {};
            return (t as any).startPosition = (unmarshalPoint as any)(e), e += SIZE_OF_POINT, (t as any).endPosition = (unmarshalPoint as any)(e), e += SIZE_OF_POINT, (t as any).startIndex = (getValue as any)(e, "i32"), e += SIZE_OF_INT, (t as any).endIndex = (getValue as any)(e, "i32"), t;
          }
          function marshalEdit(this: any, e: any): any {
            let t: any = TRANSFER_BUFFER;
            (marshalPoint as any)(t, (e as any).startPosition), t += SIZE_OF_POINT, (marshalPoint as any)(t, (e as any).oldEndPosition), t += SIZE_OF_POINT, (marshalPoint as any)(t, (e as any).newEndPosition), t += SIZE_OF_POINT, (setValue as any)(t, (e as any).startIndex, "i32"), t += SIZE_OF_INT, (setValue as any)(t, (e as any).oldEndIndex, "i32"), t += SIZE_OF_INT, (setValue as any)(t, (e as any).newEndIndex, "i32"), t += SIZE_OF_INT;
          }
          for (const e of ((Object as any).getOwnPropertyNames as any)((ParserImpl as any).prototype)) ((Object as any).defineProperty as any)((Parser as any).prototype, e, {
            value: ((ParserImpl as any).prototype as any)[e],
            enumerable: !1,
            writable: !1
          });
          (Parser as any).Language = Language, (Module as any).onRuntimeInitialized = (): any => {
            ((ParserImpl as any).init as any)(), (resolveInitPromise as any)();
          };
        }));
      }
    }
    return Parser;
  } as any)();
("object" as any) == (typeof exports as any) && ((module as any).exports = TreeSitter);
