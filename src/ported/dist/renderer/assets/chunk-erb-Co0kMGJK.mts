declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "5bcf0e58-ff8a-404d-b9ff-a4bbb13a71c4", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-5bcf0e58-ff8a-404d-b9ff-a4bbb13a71c4");
  } catch (e: any) {}
} as any)();
import e from "./chunk-html-C1at-c71.js";
import n from "./chunk-ruby-ClSEMAu1.js";
import "./chunk-javascript-wDzz0qaB.js";
import "./chunk-css-CLj8gQPS.js";
import "./chunk-haml-DNnn2NCQ.js";
import "./chunk-xml-DlN-rr7z.js";
import "./chunk-java-CylS5w8V.js";
import "./chunk-sql-BLtJtn59.js";
import "./chunk-graphql-L81lyQ56.js";
import "./chunk-typescript-BPQ3VLAy.js";
import "./chunk-jsx-g9-lgVsj.js";
import "./chunk-tsx-COt5Ahok.js";
import "./chunk-cpp-Ckx2-j3M.js";
import "./chunk-regexp-CDVJQ6XC.js";
import "./chunk-glsl-BnHhRW2T.js";
import "./chunk-c-BIGW1oBm.js";
import "./chunk-shellscript-Yzrsuije.js";
import "./chunk-lua-DtSm4P04.js";
import "./chunk-yaml-Buea-lGh.js";
const t: any = ((Object as any).freeze as any)(((JSON as any).parse as any)('{"displayName":"ERB","fileTypes":["erb","rhtml","html.erb"],"injections":{"text.html.erb - (meta.embedded.block.erb | meta.embedded.line.erb | comment)":{"patterns":[{"begin":"^(\\\\s*)(?=<%+#(?![^%]*%>))","beginCaptures":{"0":{"name":"punctuation.whitespace.comment.leading.erb"}},"end":"(?!\\\\G)(\\\\s*$\\\\n)?","endCaptures":{"0":{"name":"punctuation.whitespace.comment.trailing.erb"}},"patterns":[{"include":"#comment"}]},{"begin":"^(\\\\s*)(?=<%(?![^%]*%>))","beginCaptures":{"0":{"name":"punctuation.whitespace.embedded.leading.erb"}},"end":"(?!\\\\G)(\\\\s*$\\\\n)?","endCaptures":{"0":{"name":"punctuation.whitespace.embedded.trailing.erb"}},"patterns":[{"include":"#tags"}]},{"include":"#comment"},{"include":"#tags"}]}},"name":"erb","patterns":[{"include":"text.html.basic"}],"repository":{"comment":{"patterns":[{"begin":"<%+#","beginCaptures":{"0":{"name":"punctuation.definition.comment.begin.erb"}},"end":"%>","endCaptures":{"0":{"name":"punctuation.definition.comment.end.erb"}},"name":"comment.block.erb"}]},"tags":{"patterns":[{"begin":"<%+(?!>)[-=]?(?![^%]*%>)","beginCaptures":{"0":{"name":"punctuation.section.embedded.begin.erb"}},"contentName":"source.ruby","end":"(-?%)>","endCaptures":{"0":{"name":"punctuation.section.embedded.end.erb"},"1":{"name":"source.ruby"}},"name":"meta.embedded.block.erb","patterns":[{"captures":{"1":{"name":"punctuation.definition.comment.erb"}},"match":"(#).*?(?=-?%>)","name":"comment.line.number-sign.erb"},{"include":"source.ruby"}]},{"begin":"<%+(?!>)[-=]?","beginCaptures":{"0":{"name":"punctuation.section.embedded.begin.erb"}},"contentName":"source.ruby","end":"(-?%)>","endCaptures":{"0":{"name":"punctuation.section.embedded.end.erb"},"1":{"name":"source.ruby"}},"name":"meta.embedded.line.erb","patterns":[{"captures":{"1":{"name":"punctuation.definition.comment.erb"}},"match":"(#).*?(?=-?%>)","name":"comment.line.number-sign.erb"},{"include":"source.ruby"}]}]}},"scopeName":"text.html.erb","embeddedLangs":["html","ruby"]}')),
  x: any = [...e, ...n, t];
export { x as default };
//# debugId=5bcf0e58-ff8a-404d-b9ff-a4bbb13a71c4
