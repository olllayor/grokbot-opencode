import portedDomainDeclarations from "../ported/domain/domain-adapter.cts";
const createDomainDeclarations = portedDomainDeclarations as typeof import("./domain-adapter.cjs");
import {
  isRecord,
  field,
  rpcString,
  rpcNumber,
  rpcBoolean,
  rpcLiteral,
  rpcOptional,
  rpcNullable,
  rpcUnion,
  rpcArray,
  rpcObject,
  rpcRecord,
  rpcBytes,
  rpcUnknown,
  rpcMethod,
  declareEdge,
  rpcRefine,
  rpcTransform,
  type Field,
} from "./schema.js";

// Shared schema mechanics are TypeScript. The isolated shipped adapter retains
// domain-specific predicates and normalization without executing application code.
function domainField<T>(expects: string, check: Field<T>["check"]): Field<T> {
  const validator = field(expects, check);
  validator["~standard"].vendor = "sand";
  return validator;
}
export const { main: mainDeclaration, mount: mountDeclaration } =
  createDomainDeclarations({
    B: isRecord,
    K: field,
    s: rpcString,
    P: rpcNumber,
    y: rpcBoolean,
    p: rpcLiteral,
    c: rpcOptional,
    W: rpcNullable,
    I: rpcUnion,
    R: rpcArray,
    m: rpcObject,
    se: rpcRecord,
    De: rpcBytes,
    ln: rpcUnknown,
    r: rpcMethod,
    _e: declareEdge,
    f: rpcRefine,
    te: rpcTransform,
    Bt: domainField,
    ae: () => ({}),
  });
