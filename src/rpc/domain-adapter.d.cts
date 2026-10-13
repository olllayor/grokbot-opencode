import type * as Schema from './schema.js';
/** Contract for the pure shipped domain validator adapter. */
interface DomainPrimitives {
  B: typeof Schema.isRecord;
  K: typeof Schema.field;
  s: typeof Schema.rpcString;
  P: typeof Schema.rpcNumber;
  y: typeof Schema.rpcBoolean;
  p: typeof Schema.rpcLiteral;
  c: typeof Schema.rpcOptional;
  W: typeof Schema.rpcNullable;
  I: typeof Schema.rpcUnion;
  R: typeof Schema.rpcArray;
  m: typeof Schema.rpcObject;
  se: typeof Schema.rpcRecord;
  De: typeof Schema.rpcBytes;
  ln: typeof Schema.rpcUnknown;
  r: typeof Schema.rpcMethod;
  _e: typeof Schema.declareEdge;
  f: typeof Schema.rpcRefine;
  te: typeof Schema.rpcTransform;
  Bt: typeof Schema.field;
  ae: () => Record<string, never>;
}
declare function createDomainDeclarations(primitives: DomainPrimitives): {
  main: Schema.EdgeDeclaration;
  mount: Schema.EdgeDeclaration;
};
export = createDomainDeclarations;
