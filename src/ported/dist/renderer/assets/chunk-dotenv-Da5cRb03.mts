declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "6a190778-fda3-4479-b044-7636d4a2a8b0", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-6a190778-fda3-4479-b044-7636d4a2a8b0");
  } catch (e: any) {}
} as any)();
const e: any = ((Object as any).freeze as any)(((JSON as any).parse as any)(`{"displayName":"dotEnv","name":"dotenv","patterns":[{"captures":{"1":{"patterns":[{"include":"#line-comment"}]}},"match":"^\\\\s?(#.*)$\\\\n"},{"captures":{"1":{"patterns":[{"include":"#key"}]},"2":{"name":"keyword.operator.assignment.dotenv"},"3":{"name":"property.value.dotenv","patterns":[{"include":"#line-comment"},{"include":"#double-quoted-string"},{"include":"#single-quoted-string"},{"include":"#interpolation"}]}},"match":"^\\\\s?(.*?)\\\\s?(=)(.*)$"}],"repository":{"double-quoted-string":{"captures":{"1":{"patterns":[{"include":"#interpolation"},{"include":"#escape-characters"}]}},"match":"\\"(.*)\\"","name":"string.quoted.double.dotenv"},"escape-characters":{"match":"\\\\\\\\(?:[\\"'\\\\\\\\bfnrt]|u[0-9A-F]{4})","name":"constant.character.escape.dotenv"},"interpolation":{"captures":{"1":{"name":"keyword.interpolation.begin.dotenv"},"2":{"name":"variable.interpolation.dotenv"},"3":{"name":"keyword.interpolation.end.dotenv"}},"match":"(\\\\$\\\\{)(.*)(})"},"key":{"captures":{"1":{"name":"keyword.key.export.dotenv"},"2":{"name":"variable.key.dotenv","patterns":[{"include":"#variable"}]}},"match":"(export\\\\s)?(.*)"},"line-comment":{"match":"#.*$","name":"comment.line.dotenv"},"single-quoted-string":{"match":"'(.*)'","name":"string.quoted.single.dotenv"},"variable":{"match":"[A-Z_a-z]+[0-9A-Z_a-z]*"}},"scopeName":"source.dotenv"}`)),
  t: any = [e];
export { t as default };
//# debugId=6a190778-fda3-4479-b044-7636d4a2a8b0
