#!/usr/bin/env node
declare var console: any;
declare var process: any;
declare var require: any;
var proc: any = (require as any)('child_process');
var os: any = (require as any)('os');
var path: any = (require as any)('path');
if (!(buildFromSource as any)()) {
  ((proc as any).exec as any)('node-gyp-build-test', function (this: any, err: any, stdout: any, stderr: any): any {
    if (err) {
      if ((verbose as any)()) ((console as any).error as any)(stderr);
      (preinstall as any)();
    }
  });
} else {
  (preinstall as any)();
}
function build(this: any): any {
  var win32: any = (((os as any).platform as any)() as any) === ('win32' as any);
  var shell: any = win32;
  var args: any = [win32 ? 'node-gyp.cmd' : 'node-gyp', 'rebuild'];
  try {
    var pkg: any = (require as any)('node-gyp/package.json');
    args = [(process as any).execPath, ((path as any).join as any)(((require as any).resolve as any)('node-gyp/package.json'), '..', (typeof (pkg as any).bin as any) === ('string' as any) ? (pkg as any).bin : ((pkg as any).bin as any)['node-gyp']), 'rebuild'];
    shell = false;
  } catch (_: any) {}
  ((((proc as any).spawn as any)((args as any)[0], ((args as any).slice as any)(1), {
    stdio: 'inherit',
    shell,
    windowsHide: true
  }) as any).on as any)('exit', function (this: any, code: any): any {
    if (code || !((process as any).argv as any)[3]) ((process as any).exit as any)(code);
    (((exec as any)(((process as any).argv as any)[3]) as any).on as any)('exit', function (this: any, code: any): any {
      ((process as any).exit as any)(code);
    });
  });
}
function preinstall(this: any): any {
  if (!((process as any).argv as any)[2]) return (build as any)();
  (((exec as any)(((process as any).argv as any)[2]) as any).on as any)('exit', function (this: any, code: any): any {
    if (code) ((process as any).exit as any)(code);
    (build as any)();
  });
}
function exec(this: any, cmd: any): any {
  if (((process as any).platform as any) !== ('win32' as any)) {
    var shell: any = (((os as any).platform as any)() as any) === ('android' as any) ? 'sh' : true;
    return ((proc as any).spawn as any)(cmd, [], {
      shell,
      stdio: 'inherit'
    });
  }
  return ((proc as any).spawn as any)(cmd, [], {
    windowsVerbatimArguments: true,
    stdio: 'inherit',
    shell: true,
    windowsHide: true
  });
}
function buildFromSource(this: any): any {
  return (hasFlag as any)('--build-from-source') || (((process as any).env as any).npm_config_build_from_source as any) === ('true' as any);
}
function verbose(this: any): any {
  return (hasFlag as any)('--verbose') || (((process as any).env as any).npm_config_loglevel as any) === ('verbose' as any);
}

// TODO (next major): remove in favor of env.npm_config_* which works since npm
// 0.1.8 while npm_config_argv will stop working in npm 7. See npm/rfcs#90
function hasFlag(this: any, flag: any): any {
  if (!((process as any).env as any).npm_config_argv) return false;
  try {
    return ((((((JSON as any).parse as any)(((process as any).env as any).npm_config_argv) as any).original as any).indexOf as any)(flag) as any) !== (-1 as any);
  } catch (_: any) {
    return false;
  }
}
