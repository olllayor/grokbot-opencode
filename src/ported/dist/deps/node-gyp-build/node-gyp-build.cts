declare var __non_webpack_require__: any;
declare var __webpack_require__: any;
declare var module: any;
declare var process: any;
declare var require: any;
declare var window: any;
var fs: any = (require as any)('fs');
var path: any = (require as any)('path');
var os: any = (require as any)('os');

// Workaround to fix webpack's build warnings: 'the request of a dependency is an expression'
var runtimeRequire: any = (typeof __webpack_require__ as any) === ('function' as any) ? __non_webpack_require__ : require; // eslint-disable-line

var vars: any = (process as any).config && ((process as any).config as any).variables || {};
var prebuildsOnly: any = !!((process as any).env as any).PREBUILDS_ONLY;
var abi: any = ((process as any).versions as any).modules; // TODO: support old node where this is undef
var runtime: any = (isElectron as any)() ? 'electron' : (isNwjs as any)() ? 'node-webkit' : 'node';
var arch: any = ((process as any).env as any).npm_config_arch || ((os as any).arch as any)();
var platform: any = ((process as any).env as any).npm_config_platform || ((os as any).platform as any)();
var libc: any = ((process as any).env as any).LIBC || ((isAlpine as any)(platform) ? 'musl' : 'glibc');
var armv: any = ((process as any).env as any).ARM_VERSION || ((arch as any) === ('arm64' as any) ? '8' : (vars as any).arm_version) || '';
var uv: any = ((((((process as any).versions as any).uv || '') as any).split as any)('.') as any)[0];
(module as any).exports = load;
function load(this: any, dir: any): any {
  return (runtimeRequire as any)(((load as any).resolve as any)(dir));
}
(load as any).resolve = (load as any).path = function (this: any, dir: any): any {
  dir = ((path as any).resolve as any)(dir || '.');
  try {
    var name: any = ((((((runtimeRequire as any)(((path as any).join as any)(dir, 'package.json')) as any).name as any).toUpperCase as any)() as any).replace as any)(/-/g, '_');
    if (((process as any).env as any)[(name as any) + ('_PREBUILD' as any)]) dir = ((process as any).env as any)[(name as any) + ('_PREBUILD' as any)];
  } catch (err: any) {}
  if (!prebuildsOnly) {
    var release: any = (getFirst as any)(((path as any).join as any)(dir, 'build/Release'), matchBuild);
    if (release) return release;
    var debug: any = (getFirst as any)(((path as any).join as any)(dir, 'build/Debug'), matchBuild);
    if (debug) return debug;
  }
  var prebuild: any = (resolve as any)(dir);
  if (prebuild) return prebuild;
  var nearby: any = (resolve as any)(((path as any).dirname as any)((process as any).execPath));
  if (nearby) return nearby;
  var target: any = (((([('platform=' as any) + (platform as any), ('arch=' as any) + (arch as any), ('runtime=' as any) + (runtime as any), ('abi=' as any) + (abi as any), ('uv=' as any) + (uv as any), armv ? ('armv=' as any) + (armv as any) : '', ('libc=' as any) + (libc as any), ('node=' as any) + (((process as any).versions as any).node as any), ((process as any).versions as any).electron ? ('electron=' as any) + (((process as any).versions as any).electron as any) : '', (typeof __webpack_require__ as any) === ('function' as any) ? 'webpack=true' : '' // eslint-disable-line
  ] as any).filter as any)(Boolean) as any).join as any)(' ');
  throw new (Error as any)((((('No native build was found for ' as any) + (target as any) as any) + ('\n    loaded from: ' as any) as any) + (dir as any) as any) + ('\n' as any));
  function resolve(this: any, dir: any): any {
    // Find matching "prebuilds/<platform>-<arch>" directory
    var tuples: any = (((readdirSync as any)(((path as any).join as any)(dir, 'prebuilds')) as any).map as any)(parseTuple);
    var tuple: any = (((((tuples as any).filter as any)((matchTuple as any)(platform, arch)) as any).sort as any)(compareTuples) as any)[0];
    if (!tuple) return;

    // Find most specific flavor first
    var prebuilds: any = ((path as any).join as any)(dir, 'prebuilds', (tuple as any).name);
    var parsed: any = (((readdirSync as any)(prebuilds) as any).map as any)(parseTags);
    var candidates: any = ((parsed as any).filter as any)((matchTags as any)(runtime, abi));
    var winner: any = (((candidates as any).sort as any)((compareTags as any)(runtime)) as any)[0];
    if (winner) return ((path as any).join as any)(prebuilds, (winner as any).file);
  }
};
function readdirSync(this: any, dir: any): any {
  try {
    return ((fs as any).readdirSync as any)(dir);
  } catch (err: any) {
    return [];
  }
}
function getFirst(this: any, dir: any, filter: any): any {
  var files: any = (((readdirSync as any)(dir) as any).filter as any)(filter);
  return (files as any)[0] && ((path as any).join as any)(dir, (files as any)[0]);
}
function matchBuild(this: any, name: any): any {
  return ((/\.node$/ as any).test as any)(name);
}
function parseTuple(this: any, name: any): any {
  // Example: darwin-x64+arm64
  var arr: any = ((name as any).split as any)('-');
  if (((arr as any).length as any) !== (2 as any)) return;
  var platform: any = (arr as any)[0];
  var architectures: any = (((arr as any)[1] as any).split as any)('+');
  if (!platform) return;
  if (!(architectures as any).length) return;
  if (!((architectures as any).every as any)(Boolean)) return;
  return {
    name,
    platform,
    architectures
  };
}
function matchTuple(this: any, platform: any, arch: any): any {
  return function (this: any, tuple: any): any {
    if ((tuple as any) == (null as any)) return false;
    if (((tuple as any).platform as any) !== (platform as any)) return false;
    return (((tuple as any).architectures as any).includes as any)(arch);
  };
}
function compareTuples(this: any, a: any, b: any): any {
  // Prefer single-arch prebuilds over multi-arch
  return (((a as any).architectures as any).length as any) - (((b as any).architectures as any).length as any);
}
function parseTags(this: any, file: any): any {
  var arr: any = ((file as any).split as any)('.');
  var extension: any = ((arr as any).pop as any)();
  var tags: any = {
    file: file,
    specificity: 0
  };
  if ((extension as any) !== ('node' as any)) return;
  for (var i: any = 0; (i as any) < ((arr as any).length as any); i++) {
    var tag: any = (arr as any)[i];
    if ((tag as any) === ('node' as any) || (tag as any) === ('electron' as any) || (tag as any) === ('node-webkit' as any)) {
      (tags as any).runtime = tag;
    } else if ((tag as any) === ('napi' as any)) {
      (tags as any).napi = true;
    } else if ((((tag as any).slice as any)(0, 3) as any) === ('abi' as any)) {
      (tags as any).abi = ((tag as any).slice as any)(3);
    } else if ((((tag as any).slice as any)(0, 2) as any) === ('uv' as any)) {
      (tags as any).uv = ((tag as any).slice as any)(2);
    } else if ((((tag as any).slice as any)(0, 4) as any) === ('armv' as any)) {
      (tags as any).armv = ((tag as any).slice as any)(4);
    } else if ((tag as any) === ('glibc' as any) || (tag as any) === ('musl' as any)) {
      (tags as any).libc = tag;
    } else {
      continue;
    }
    (tags as any).specificity++;
  }
  return tags;
}
function matchTags(this: any, runtime: any, abi: any): any {
  return function (this: any, tags: any): any {
    if ((tags as any) == (null as any)) return false;
    if ((tags as any).runtime && ((tags as any).runtime as any) !== (runtime as any) && !(runtimeAgnostic as any)(tags)) return false;
    if ((tags as any).abi && ((tags as any).abi as any) !== (abi as any) && !(tags as any).napi) return false;
    if ((tags as any).uv && ((tags as any).uv as any) !== (uv as any)) return false;
    if ((tags as any).armv && ((tags as any).armv as any) !== (armv as any)) return false;
    if ((tags as any).libc && ((tags as any).libc as any) !== (libc as any)) return false;
    return true;
  };
}
function runtimeAgnostic(this: any, tags: any): any {
  return ((tags as any).runtime as any) === ('node' as any) && (tags as any).napi;
}
function compareTags(this: any, runtime: any): any {
  // Precedence: non-agnostic runtime, abi over napi, then by specificity.
  return function (this: any, a: any, b: any): any {
    if (((a as any).runtime as any) !== ((b as any).runtime as any)) {
      return ((a as any).runtime as any) === (runtime as any) ? -1 : 1;
    } else if (((a as any).abi as any) !== ((b as any).abi as any)) {
      return (a as any).abi ? -1 : 1;
    } else if (((a as any).specificity as any) !== ((b as any).specificity as any)) {
      return ((a as any).specificity as any) > ((b as any).specificity as any) ? -1 : 1;
    } else {
      return 0;
    }
  };
}
function isNwjs(this: any): any {
  return !!((process as any).versions && ((process as any).versions as any).nw);
}
function isElectron(this: any): any {
  if ((process as any).versions && ((process as any).versions as any).electron) return true;
  if (((process as any).env as any).ELECTRON_RUN_AS_NODE) return true;
  return (typeof window as any) !== ('undefined' as any) && (window as any).process && (((window as any).process as any).type as any) === ('renderer' as any);
}
function isAlpine(this: any, platform: any): any {
  return (platform as any) === ('linux' as any) && ((fs as any).existsSync as any)('/etc/alpine-release');
}

// Exposed for unit tests
// TODO: move to lib
(load as any).parseTags = parseTags;
(load as any).matchTags = matchTags;
(load as any).compareTags = compareTags;
(load as any).parseTuple = parseTuple;
(load as any).matchTuple = matchTuple;
(load as any).compareTuples = compareTuples;
