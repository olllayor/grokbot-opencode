declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "bba7aa1d-a1b0-407d-abc2-89ccb7519d3f", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-bba7aa1d-a1b0-407d-abc2-89ccb7519d3f");
  } catch (e: any) {}
} as any)();
const n: any = ((Object as any).freeze as any)(((JSON as any).parse as any)(`{"displayName":"INI","name":"ini","patterns":[{"begin":"(^[\\\\t ]+)?(?=#)","beginCaptures":{"1":{"name":"punctuation.whitespace.comment.leading.ini"}},"end":"(?!\\\\G)","patterns":[{"begin":"#","beginCaptures":{"0":{"name":"punctuation.definition.comment.ini"}},"end":"\\\\n","name":"comment.line.number-sign.ini"}]},{"begin":"(^[\\\\t ]+)?(?=;)","beginCaptures":{"1":{"name":"punctuation.whitespace.comment.leading.ini"}},"end":"(?!\\\\G)","patterns":[{"begin":";","beginCaptures":{"0":{"name":"punctuation.definition.comment.ini"}},"end":"\\\\n","name":"comment.line.semicolon.ini"}]},{"captures":{"1":{"name":"keyword.other.definition.ini"},"2":{"name":"punctuation.separator.key-value.ini"}},"match":"\\\\b([-.0-9A-Z_a-z]+)\\\\b\\\\s*(=)"},{"captures":{"1":{"name":"punctuation.definition.entity.ini"},"3":{"name":"punctuation.definition.entity.ini"}},"match":"^(\\\\[)(.*?)(])","name":"entity.name.section.group-title.ini"},{"begin":"'","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.ini"}},"end":"'","endCaptures":{"0":{"name":"punctuation.definition.string.end.ini"}},"name":"string.quoted.single.ini","patterns":[{"match":"\\\\\\\\.","name":"constant.character.escape.ini"}]},{"begin":"\\"","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.ini"}},"end":"\\"","endCaptures":{"0":{"name":"punctuation.definition.string.end.ini"}},"name":"string.quoted.double.ini"}],"scopeName":"source.ini","aliases":["properties"]}`)),
  i: any = [n];
export { i as default };
//# debugId=bba7aa1d-a1b0-407d-abc2-89ccb7519d3f
