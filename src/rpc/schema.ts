/** Standard Schema v1 and Dune field validators recovered from the preload bundle. */
export type Path = Array<string | number>;
export interface Issue {
  message: string;
  path?: Array<string | number | { key: unknown }>;
}
export type Validation<T> =
  | { value: T; issues?: undefined }
  | { issues: Issue[] };
export interface StandardSchema<T = unknown> {
  "~standard": {
    version: 1;
    vendor: string;
    validate(value: unknown): Validation<T> | Promise<Validation<T>>;
  };
}
export type Check<T> =
  | { ok: true; value: T }
  | { ok: false; path: Path; expected: string; received: string };
export interface Field<T = unknown> extends StandardSchema<T> {
  expects: string;
  optional?: true;
  check(value: unknown, path: Path): Check<T>;
}
function received(value: unknown): string {
  return value === null
    ? "null"
    : Array.isArray(value)
      ? "array"
      : typeof value;
}
function failure(path: Path, expected: string, value: unknown): Check<never> {
  return { ok: false, path, expected, received: received(value) };
}
export function field<T>(expects: string, check: Field<T>["check"]): Field<T> {
  return {
    expects,
    check,
    "~standard": {
      version: 1,
      vendor: "dune",
      validate(value) {
        const result = check(value, []);
        return result.ok
          ? { value: result.value }
          : {
              issues: [
                {
                  message: `must be ${result.expected}, got ${result.received}`,
                  path: result.path,
                },
              ],
            };
      },
    },
  };
}
export function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
export const rpcString = (): Field<string> =>
  field("string", (value, path) =>
    typeof value === "string"
      ? { ok: true, value }
      : failure(path, "string", value),
  );
export const rpcBoolean = (): Field<boolean> =>
  field("boolean", (value, path) =>
    typeof value === "boolean"
      ? { ok: true, value }
      : failure(path, "boolean", value),
  );
export const rpcNumber = (): Field<number> =>
  field("number", (value, path) =>
    typeof value !== "number"
      ? failure(path, "number", value)
      : Number.isFinite(value)
        ? { ok: true, value }
        : {
            ok: false,
            path,
            expected: "number",
            received: "non-finite number",
          },
  );
export const rpcUnknown = (): Field<unknown> =>
  field("unknown", (value) => ({ ok: true, value }));
export const rpcBytes = (): Field<Uint8Array> =>
  field("Uint8Array", (value, path) =>
    value instanceof Uint8Array
      ? { ok: true, value }
      : failure(path, "Uint8Array", value),
  );
export function rpcLiteral<T extends string | boolean | number | null>(
  literal: T,
): Field<T> {
  const expects = JSON.stringify(literal);
  return field(expects, (value, path) =>
    value === literal
      ? { ok: true, value: literal }
      : failure(path, expects, value),
  );
}
export function rpcOptional<T>(
  validator: Field<T>,
): Field<T> & { optional: true } {
  return { ...validator, optional: true };
}
export function rpcNullable<T>(validator: Field<T>): Field<T | null> {
  const expects = `${validator.expects} | null`;
  return field<T | null>(expects, (value, path) => {
    if (value === null) return { ok: true, value: null };
    const result = validator.check(value, path);
    return result.ok || result.path.length !== path.length
      ? result
      : { ...result, path, expected: expects };
  });
}
export function rpcUnion(...validators: Field[]): Field {
  const expects = [
    ...new Set(validators.map((validator) => validator.expects)),
  ].join(" | ");
  return field(expects, (value, path) => {
    for (const validator of validators) {
      const result = validator.check(value, path);
      if (result.ok) return result;
    }
    return failure(path, expects, value);
  });
}
export function rpcArray<T>(validator: Field<T>): Field<T[]> {
  return field(`array of ${validator.expects}`, (value, path) => {
    if (!Array.isArray(value)) return failure(path, "array", value);
    const output: T[] = [];
    for (const [index, item] of value.entries()) {
      const result = validator.check(item, [...path, index]);
      if (!result.ok) return result;
      output.push(result.value);
    }
    return { ok: true, value: output };
  });
}
export function rpcObject(
  fields: Record<string, Field>,
): Field<Record<string, unknown>> {
  return field("object", (value, path) => {
    if (!isRecord(value)) return failure(path, "object", value);
    const entries: Array<[string, unknown]> = [];
    for (const [key, validator] of Object.entries(fields)) {
      const candidate = Object.hasOwn(value, key) ? value[key] : undefined;
      if (candidate === undefined && validator.optional === true) continue;
      const result = validator.check(candidate, [...path, key]);
      if (!result.ok) return result;
      entries.push([key, result.value]);
    }
    return { ok: true, value: Object.fromEntries(entries) };
  });
}
export function rpcRecord<T>(validator: Field<T>): Field<Record<string, T>> {
  const expects = `record of ${validator.expects}`;
  return field(expects, (value, path) => {
    if (!isRecord(value)) return failure(path, "object", value);
    const entries: Array<[string, T]> = [];
    for (const [key, item] of Object.entries(value)) {
      const result = validator.check(item, path);
      if (!result.ok)
        return {
          ok: false,
          path,
          expected: expects,
          received: result.received,
        };
      entries.push([key, result.value]);
    }
    return { ok: true, value: Object.fromEntries(entries) };
  });
}
export function rpcRefine<T>(
  expects: string,
  predicate: (value: unknown) => value is T,
): Field<T>;
export function rpcRefine(
  expects: string,
  predicate: (value: unknown) => boolean,
): Field;
export function rpcRefine(
  expects: string,
  predicate: (value: unknown) => boolean,
): Field {
  const validator = field(expects, (value, path) =>
    predicate(value) ? { ok: true, value } : failure(path, expects, value),
  );
  validator["~standard"].vendor = "sand";
  return validator;
}
export function rpcTransform<T>(
  expects: string,
  transform: (
    value: unknown,
  ) => { success: true; data: T } | { success: false },
): Field<T> {
  const validator = field(expects, (value, path) => {
    const result = transform(value);
    return result.success
      ? { ok: true, value: result.data }
      : failure(path, expects, value);
  });
  validator["~standard"].vendor = "sand";
  return validator;
}
export class RpcMethodDeclarationError extends Error {
  constructor(fieldName: string) {
    super(
      `rpcMethod().args: field "${fieldName}" is not an rpc field validator; pass rpc* combinators or one Standard Schema v1 value.`,
    );
    this.name = "RpcMethodDeclarationError";
  }
}
export interface Method {
  schema: StandardSchema | null;
}
export function rpcMethod() {
  return {
    noArgs: { schema: null } as Method,
    args(value: StandardSchema | Record<string, Field>): Method {
      const standard = value["~standard"];
      if (
        isRecord(standard) &&
        standard.version === 1 &&
        typeof standard.validate === "function"
      )
        return { schema: value as StandardSchema };
      for (const [name, validator] of Object.entries(value))
        if (typeof (validator as Field)?.check !== "function")
          throw new RpcMethodDeclarationError(name);
      return { schema: rpcObject(value as Record<string, Field>) };
    },
  };
}
export interface EdgeDeclaration {
  kind: "rpc-edge";
  edge: string;
  methods: Record<string, Method>;
  hasEvents: boolean;
}
export function declareEdge(
  edge: string,
  declaration: { methods: Record<string, Method>; events?: unknown },
): EdgeDeclaration {
  return Object.freeze({
    kind: "rpc-edge",
    edge,
    methods: declaration.methods,
    hasEvents: declaration.events != null,
  });
}
