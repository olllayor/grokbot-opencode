declare var __non_webpack_require__: any;
declare var __webpack_require__: any;
declare var module: any;
declare var require: any;
const runtimeRequire: any = (typeof __webpack_require__ as any) === ('function' as any) ? __non_webpack_require__ : require; // eslint-disable-line
if ((typeof (runtimeRequire as any).addon as any) === ('function' as any)) {
  // if the platform supports native resolving prefer that
  (module as any).exports = (((runtimeRequire as any).addon as any).bind as any)(runtimeRequire);
} else {
  // else use the runtime version here
  (module as any).exports = (require as any)('./node-gyp-build.js');
}
