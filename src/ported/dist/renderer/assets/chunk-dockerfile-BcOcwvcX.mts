declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "7d145c17-ffda-4fe6-9a50-d1771fc2d46b", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-7d145c17-ffda-4fe6-9a50-d1771fc2d46b");
  } catch (e: any) {}
} as any)();
const e: any = ((Object as any).freeze as any)(((JSON as any).parse as any)(`{"displayName":"Dockerfile","name":"docker","patterns":[{"captures":{"1":{"name":"keyword.other.special-method.dockerfile"},"2":{"name":"keyword.other.special-method.dockerfile"}},"match":"^\\\\s*\\\\b(?i:(FROM))\\\\b.*?\\\\b(?i:(AS))\\\\b"},{"captures":{"1":{"name":"keyword.control.dockerfile"},"2":{"name":"keyword.other.special-method.dockerfile"}},"match":"^\\\\s*(?i:(ONBUILD)\\\\s+)?(?i:(ADD|ARG|CMD|COPY|ENTRYPOINT|ENV|EXPOSE|FROM|HEALTHCHECK|LABEL|MAINTAINER|RUN|SHELL|STOPSIGNAL|USER|VOLUME|WORKDIR))\\\\s"},{"captures":{"1":{"name":"keyword.operator.dockerfile"},"2":{"name":"keyword.other.special-method.dockerfile"}},"match":"^\\\\s*(?i:(ONBUILD)\\\\s+)?(?i:(CMD|ENTRYPOINT))\\\\s"},{"include":"#string-character-escape"},{"begin":"\\"","beginCaptures":{"1":{"name":"punctuation.definition.string.begin.dockerfile"}},"end":"\\"","endCaptures":{"1":{"name":"punctuation.definition.string.end.dockerfile"}},"name":"string.quoted.double.dockerfile","patterns":[{"include":"#string-character-escape"}]},{"begin":"'","beginCaptures":{"1":{"name":"punctuation.definition.string.begin.dockerfile"}},"end":"'","endCaptures":{"1":{"name":"punctuation.definition.string.end.dockerfile"}},"name":"string.quoted.single.dockerfile","patterns":[{"include":"#string-character-escape"}]},{"captures":{"1":{"name":"punctuation.whitespace.comment.leading.dockerfile"},"2":{"name":"comment.line.number-sign.dockerfile"},"3":{"name":"punctuation.definition.comment.dockerfile"}},"match":"^(\\\\s*)((#).*$\\\\n?)"}],"repository":{"string-character-escape":{"match":"\\\\\\\\.","name":"constant.character.escaped.dockerfile"}},"scopeName":"source.dockerfile","aliases":["dockerfile"]}`)),
  n: any = [e];
export { n as default };
//# debugId=7d145c17-ffda-4fe6-9a50-d1771fc2d46b
