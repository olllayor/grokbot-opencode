declare var __dirname: any;
declare var key: any;
declare var module: any;
declare var require: any;
declare var stringValues: any;
const binding: any = ((require as any)('node-gyp-build') as any)(__dirname);
const {
  Query,
  Parser,
  NodeMethods,
  Tree,
  TreeCursor,
  LookaheadIterator
}: any = binding;
const util: any = (require as any)('util');

/*
 * Tree
 */

const {
  rootNode,
  rootNodeWithOffset,
  edit
}: any = (Tree as any).prototype;
((Object as any).defineProperty as any)((Tree as any).prototype, 'rootNode', {
  get(): any {
    /*
      Due to a race condition arising from Jest's worker pool, "this"
      has no knowledge of the native extension if the extension has not
      yet loaded when multiple Jest tests are being run simultaneously.
      If the extension has correctly loaded, "this" should be an instance 
      of the class whose prototype we are acting on (in this case, Tree).
      Furthermore, the race condition sometimes results in the function in 
      question being undefined even when the context is correct, so we also 
      perform a null function check.
    */
    if (this instanceof Tree && rootNode) {
      return (unmarshalNode as any)(((rootNode as any).call as any)(this), this);
    }
  },
  // Jest worker pool may attempt to override property due to race condition,
  // we don't want to error on this
  configurable: true
});
((Tree as any).prototype as any).rootNodeWithOffset = function (this: any, offset_bytes: any, offset_extent: any): any {
  return (unmarshalNode as any)(((rootNodeWithOffset as any).call as any)(this, offset_bytes, (offset_extent as any).row, (offset_extent as any).column), this);
};
((Tree as any).prototype as any).edit = function (this: any, arg: any): any {
  if (this instanceof Tree && edit) {
    ((edit as any).call as any)(this, ((arg as any).startPosition as any).row, ((arg as any).startPosition as any).column, ((arg as any).oldEndPosition as any).row, ((arg as any).oldEndPosition as any).column, ((arg as any).newEndPosition as any).row, ((arg as any).newEndPosition as any).column, (arg as any).startIndex, (arg as any).oldEndIndex, (arg as any).newEndIndex);
  }
};
((Tree as any).prototype as any).walk = function (this: any): any {
  return (((this as any).rootNode as any).walk as any)();
};

/*
 * Node
 */

class SyntaxNode {
  declare tree: any;
  [key: string]: any;
  constructor(tree: any) {
    (this as any).tree = tree;
  }
  [((util as any).inspect as any).custom](): any {
    return ((((((((((((((((this as any).constructor as any).name as any) + (' {\n' as any) as any) + ('  type: ' as any) as any) + ((this as any).type as any) as any) + (',\n' as any) as any) + ('  startPosition: ' as any) as any) + ((pointToString as any)((this as any).startPosition) as any) as any) + (',\n' as any) as any) + ('  endPosition: ' as any) as any) + ((pointToString as any)((this as any).endPosition) as any) as any) + (',\n' as any) as any) + ('  childCount: ' as any) as any) + ((this as any).childCount as any) as any) + (',\n' as any) as any) + ('}' as any);
  }
  get id(): any {
    (marshalNode as any)(this);
    return ((NodeMethods as any).id as any)((this as any).tree);
  }
  get typeId(): any {
    (marshalNode as any)(this);
    return ((NodeMethods as any).typeId as any)((this as any).tree);
  }
  get grammarId(): any {
    (marshalNode as any)(this);
    return ((NodeMethods as any).grammarId as any)((this as any).tree);
  }
  get type(): any {
    (marshalNode as any)(this);
    return ((NodeMethods as any).type as any)((this as any).tree);
  }
  get grammarType(): any {
    (marshalNode as any)(this);
    return ((NodeMethods as any).grammarType as any)((this as any).tree);
  }
  get isExtra(): any {
    (marshalNode as any)(this);
    return ((NodeMethods as any).isExtra as any)((this as any).tree);
  }
  get isNamed(): any {
    (marshalNode as any)(this);
    return ((NodeMethods as any).isNamed as any)((this as any).tree);
  }
  get isMissing(): any {
    (marshalNode as any)(this);
    return ((NodeMethods as any).isMissing as any)((this as any).tree);
  }
  get hasChanges(): any {
    (marshalNode as any)(this);
    return ((NodeMethods as any).hasChanges as any)((this as any).tree);
  }
  get hasError(): any {
    (marshalNode as any)(this);
    return ((NodeMethods as any).hasError as any)((this as any).tree);
  }
  get isError(): any {
    (marshalNode as any)(this);
    return ((NodeMethods as any).isError as any)((this as any).tree);
  }
  get text(): any {
    return (((this as any).tree as any).getText as any)(this);
  }
  get startPosition(): any {
    (marshalNode as any)(this);
    ((NodeMethods as any).startPosition as any)((this as any).tree);
    return (unmarshalPoint as any)();
  }
  get endPosition(): any {
    (marshalNode as any)(this);
    ((NodeMethods as any).endPosition as any)((this as any).tree);
    return (unmarshalPoint as any)();
  }
  get startIndex(): any {
    (marshalNode as any)(this);
    return ((NodeMethods as any).startIndex as any)((this as any).tree);
  }
  get endIndex(): any {
    (marshalNode as any)(this);
    return ((NodeMethods as any).endIndex as any)((this as any).tree);
  }
  get parent(): any {
    (marshalNode as any)(this);
    return (unmarshalNode as any)(((NodeMethods as any).parent as any)((this as any).tree), (this as any).tree);
  }
  get children(): any {
    (marshalNode as any)(this);
    return (unmarshalNodes as any)(((NodeMethods as any).children as any)((this as any).tree), (this as any).tree);
  }
  get namedChildren(): any {
    (marshalNode as any)(this);
    return (unmarshalNodes as any)(((NodeMethods as any).namedChildren as any)((this as any).tree), (this as any).tree);
  }
  get childCount(): any {
    (marshalNode as any)(this);
    return ((NodeMethods as any).childCount as any)((this as any).tree);
  }
  get namedChildCount(): any {
    (marshalNode as any)(this);
    return ((NodeMethods as any).namedChildCount as any)((this as any).tree);
  }
  get firstChild(): any {
    (marshalNode as any)(this);
    return (unmarshalNode as any)(((NodeMethods as any).firstChild as any)((this as any).tree), (this as any).tree);
  }
  get firstNamedChild(): any {
    (marshalNode as any)(this);
    return (unmarshalNode as any)(((NodeMethods as any).firstNamedChild as any)((this as any).tree), (this as any).tree);
  }
  get lastChild(): any {
    (marshalNode as any)(this);
    return (unmarshalNode as any)(((NodeMethods as any).lastChild as any)((this as any).tree), (this as any).tree);
  }
  get lastNamedChild(): any {
    (marshalNode as any)(this);
    return (unmarshalNode as any)(((NodeMethods as any).lastNamedChild as any)((this as any).tree), (this as any).tree);
  }
  get nextSibling(): any {
    (marshalNode as any)(this);
    return (unmarshalNode as any)(((NodeMethods as any).nextSibling as any)((this as any).tree), (this as any).tree);
  }
  get nextNamedSibling(): any {
    (marshalNode as any)(this);
    return (unmarshalNode as any)(((NodeMethods as any).nextNamedSibling as any)((this as any).tree), (this as any).tree);
  }
  get previousSibling(): any {
    (marshalNode as any)(this);
    return (unmarshalNode as any)(((NodeMethods as any).previousSibling as any)((this as any).tree), (this as any).tree);
  }
  get previousNamedSibling(): any {
    (marshalNode as any)(this);
    return (unmarshalNode as any)(((NodeMethods as any).previousNamedSibling as any)((this as any).tree), (this as any).tree);
  }
  get parseState(): any {
    (marshalNode as any)(this);
    return ((NodeMethods as any).parseState as any)((this as any).tree);
  }
  get nextParseState(): any {
    (marshalNode as any)(this);
    return ((NodeMethods as any).nextParseState as any)((this as any).tree);
  }
  get descendantCount(): any {
    (marshalNode as any)(this);
    return ((NodeMethods as any).descendantCount as any)((this as any).tree);
  }
  toString(): any {
    (marshalNode as any)(this);
    return ((NodeMethods as any).toString as any)((this as any).tree);
  }
  child(index: any): any {
    (marshalNode as any)(this);
    return (unmarshalNode as any)(((NodeMethods as any).child as any)((this as any).tree, index), (this as any).tree);
  }
  namedChild(index: any): any {
    (marshalNode as any)(this);
    return (unmarshalNode as any)(((NodeMethods as any).namedChild as any)((this as any).tree, index), (this as any).tree);
  }
  childForFieldName(fieldName: any): any {
    (marshalNode as any)(this);
    return (unmarshalNode as any)(((NodeMethods as any).childForFieldName as any)((this as any).tree, fieldName), (this as any).tree);
  }
  childForFieldId(fieldId: any): any {
    (marshalNode as any)(this);
    return (unmarshalNode as any)(((NodeMethods as any).childForFieldId as any)((this as any).tree, fieldId), (this as any).tree);
  }
  fieldNameForChild(childIndex: any): any {
    (marshalNode as any)(this);
    return ((NodeMethods as any).fieldNameForChild as any)((this as any).tree, childIndex);
  }
  childrenForFieldName(fieldName: any): any {
    (marshalNode as any)(this);
    return (unmarshalNodes as any)(((NodeMethods as any).childrenForFieldName as any)((this as any).tree, fieldName), (this as any).tree);
  }
  childrenForFieldId(fieldId: any): any {
    (marshalNode as any)(this);
    return (unmarshalNodes as any)(((NodeMethods as any).childrenForFieldId as any)((this as any).tree, fieldId), (this as any).tree);
  }
  firstChildForIndex(index: any): any {
    (marshalNode as any)(this);
    return (unmarshalNode as any)(((NodeMethods as any).firstChildForIndex as any)((this as any).tree, index), (this as any).tree);
  }
  firstNamedChildForIndex(index: any): any {
    (marshalNode as any)(this);
    return (unmarshalNode as any)(((NodeMethods as any).firstNamedChildForIndex as any)((this as any).tree, index), (this as any).tree);
  }
  namedDescendantForIndex(start: any, end: any): any {
    (marshalNode as any)(this);
    if ((end as any) == (null as any)) end = start;
    return (unmarshalNode as any)(((NodeMethods as any).namedDescendantForIndex as any)((this as any).tree, start, end), (this as any).tree);
  }
  descendantForIndex(start: any, end: any): any {
    (marshalNode as any)(this);
    if ((end as any) == (null as any)) end = start;
    return (unmarshalNode as any)(((NodeMethods as any).descendantForIndex as any)((this as any).tree, start, end), (this as any).tree);
  }
  descendantsOfType(types: any, start: any, end: any): any {
    (marshalNode as any)(this);
    if ((typeof types as any) === ('string' as any)) types = [types];
    return (unmarshalNodes as any)(((NodeMethods as any).descendantsOfType as any)((this as any).tree, types, start, end), (this as any).tree);
  }
  namedDescendantForPosition(start: any, end: any): any {
    (marshalNode as any)(this);
    if ((end as any) == (null as any)) end = start;
    return (unmarshalNode as any)(((NodeMethods as any).namedDescendantForPosition as any)((this as any).tree, start, end), (this as any).tree);
  }
  descendantForPosition(start: any, end: any): any {
    (marshalNode as any)(this);
    if ((end as any) == (null as any)) end = start;
    return (unmarshalNode as any)(((NodeMethods as any).descendantForPosition as any)((this as any).tree, start, end), (this as any).tree);
  }
  closest(types: any): any {
    (marshalNode as any)(this);
    if ((typeof types as any) === ('string' as any)) types = [types];
    return (unmarshalNode as any)(((NodeMethods as any).closest as any)((this as any).tree, types), (this as any).tree);
  }
  walk(): any {
    (marshalNode as any)(this);
    const cursor: any = ((NodeMethods as any).walk as any)((this as any).tree);
    (cursor as any).tree = (this as any).tree;
    (unmarshalNode as any)((cursor as any).currentNode, (this as any).tree);
    return cursor;
  }
}

/*
 * Parser
 */

const {
  parse,
  setLanguage
}: any = (Parser as any).prototype;
const languageSymbol: any = (Symbol as any)('parser.language');
((Parser as any).prototype as any).setLanguage = function (this: any, language: any): any {
  if (this instanceof Parser && setLanguage) {
    ((setLanguage as any).call as any)(this, language);
  }
  (this as any)[languageSymbol] = language;
  if (!(language as any).nodeSubclasses) {
    (initializeLanguageNodeClasses as any)(language);
  }
  return this;
};
((Parser as any).prototype as any).getLanguage = function (this: any, _language: any): any {
  return (this as any)[languageSymbol] || null;
};
((Parser as any).prototype as any).parse = function (this: any, input: any, oldTree: any, {
  bufferSize,
  includedRanges
}: any = {}): any {
  let getText: any,
    treeInput: any = input;
  if ((typeof input as any) === ('string' as any)) {
    const inputString: any = input;
    input = (offset: any, _position: any): any => ((inputString as any).slice as any)(offset);
    getText = getTextFromString;
  } else {
    getText = getTextFromFunction;
  }
  const tree: any = this instanceof Parser && parse ? ((parse as any).call as any)(this, input, oldTree, bufferSize, includedRanges) : undefined;
  if (tree) {
    (tree as any).input = treeInput;
    (tree as any).getText = getText;
    (tree as any).language = ((this as any).getLanguage as any)();
  }
  return tree;
};

/*
 * TreeCursor
 */

const {
  startPosition,
  endPosition,
  currentNode
}: any = (TreeCursor as any).prototype;
((Object as any).defineProperties as any)((TreeCursor as any).prototype, {
  currentNode: {
    get(): any {
      if (this instanceof TreeCursor && currentNode) {
        return (unmarshalNode as any)(((currentNode as any).call as any)(this), (this as any).tree);
      }
    },
    configurable: true
  },
  startPosition: {
    get(): any {
      if (this instanceof TreeCursor && startPosition) {
        ((startPosition as any).call as any)(this);
        return (unmarshalPoint as any)();
      }
    },
    configurable: true
  },
  endPosition: {
    get(): any {
      if (this instanceof TreeCursor && endPosition) {
        ((endPosition as any).call as any)(this);
        return (unmarshalPoint as any)();
      }
    },
    configurable: true
  },
  nodeText: {
    get(): any {
      return (((this as any).tree as any).getText as any)(this);
    },
    configurable: true
  }
});

/*
 * Query
 */

const {
  _matches,
  _captures
}: any = (Query as any).prototype;
const PREDICATE_STEP_TYPE: any = {
  DONE: 0,
  CAPTURE: 1,
  STRING: 2
};
const ZERO_POINT: any = {
  row: 0,
  column: 0
};
((Query as any).prototype as any)._init = function (this: any): any {
  /*
   * Initialize predicate functions
   * format: [type1, value1, type2, value2, ...]
   */
  const predicateDescriptions: any = ((this as any)._getPredicates as any)();
  const patternCount: any = (predicateDescriptions as any).length;
  const setProperties: any = new (Array as any)(patternCount);
  const assertedProperties: any = new (Array as any)(patternCount);
  const refutedProperties: any = new (Array as any)(patternCount);
  const predicates: any = new (Array as any)(patternCount);
  const FIRST: number = 0;
  const SECOND: number = 2;
  const THIRD: number = 4;
  for (let i: any = 0; (i as any) < ((predicateDescriptions as any).length as any); i++) {
    (predicates as any)[i] = [];
    for (let j: any = 0; (j as any) < (((predicateDescriptions as any)[i] as any).length as any); j++) {
      const steps: any = ((predicateDescriptions as any)[i] as any)[j];
      const stepsLength: any = ((steps as any).length as any) / (2 as any);
      if (((steps as any)[FIRST] as any) !== ((PREDICATE_STEP_TYPE as any).STRING as any)) {
        throw new (Error as any)('Predicates must begin with a literal value');
      }
      const operator: any = (steps as any)[(FIRST as any) + (1 as any)];
      let isPositive: any = true;
      let matchAll: any = true;
      let captureName: any;
      switch (operator) {
        case 'any-not-eq?':
        case 'not-eq?':
          isPositive = false;
        case 'any-eq?':
        case 'eq?':
          if ((stepsLength as any) !== (3 as any)) throw new (Error as any)(`Wrong number of arguments to \`#eq?\` predicate. Expected 2, got ${(stepsLength as any) - (1 as any)}`);
          if (((steps as any)[SECOND] as any) !== ((PREDICATE_STEP_TYPE as any).CAPTURE as any)) throw new (Error as any)(`First argument of \`#eq?\` predicate must be a capture. Got "${(steps as any)[(SECOND as any) + (1 as any)]}"`);
          matchAll = !((operator as any).startsWith as any)('any-');
          if (((steps as any)[THIRD] as any) === ((PREDICATE_STEP_TYPE as any).CAPTURE as any)) {
            const captureName1: any = (steps as any)[(SECOND as any) + (1 as any)];
            const captureName2: any = (steps as any)[(THIRD as any) + (1 as any)];
            (((predicates as any)[i] as any).push as any)(function (this: any, captures: any): any {
              let nodes_1: any = [];
              let nodes_2: any = [];
              for (const c of captures) {
                if (((c as any).name as any) === (captureName1 as any)) ((nodes_1 as any).push as any)((c as any).node);
                if (((c as any).name as any) === (captureName2 as any)) ((nodes_2 as any).push as any)((c as any).node);
              }
              let compare: any = (n1: any, n2: any, positive: any): any => {
                return positive ? ((n1 as any).text as any) === ((n2 as any).text as any) : ((n1 as any).text as any) !== ((n2 as any).text as any);
              };
              return matchAll ? ((nodes_1 as any).every as any)((n1: any): any => ((nodes_2 as any).some as any)((n2: any): any => (compare as any)(n1, n2, isPositive))) : ((nodes_1 as any).some as any)((n1: any): any => ((nodes_2 as any).some as any)((n2: any): any => (compare as any)(n1, n2, isPositive)));
            });
          } else {
            captureName = (steps as any)[(SECOND as any) + (1 as any)];
            const stringValue: any = (steps as any)[(THIRD as any) + (1 as any)];
            let matches: any = (n: any): any => ((n as any).text as any) === (stringValue as any);
            let doesNotMatch: any = (n: any): any => ((n as any).text as any) !== (stringValue as any);
            (((predicates as any)[i] as any).push as any)(function (this: any, captures: any): any {
              let nodes: any = [];
              for (const c of captures) {
                if (((c as any).name as any) === (captureName as any)) ((nodes as any).push as any)((c as any).node);
              }
              let test: any = isPositive ? matches : doesNotMatch;
              return matchAll ? ((nodes as any).every as any)(test) : ((nodes as any).some as any)(test);
            });
          }
          break;
        case 'any-not-match?':
        case 'not-match?':
          isPositive = false;
        case 'any-match?':
        case 'match?':
          if ((stepsLength as any) !== (3 as any)) throw new (Error as any)(`Wrong number of arguments to \`#match?\` predicate. Expected 2, got ${(stepsLength as any) - (1 as any)}.`);
          if (((steps as any)[SECOND] as any) !== ((PREDICATE_STEP_TYPE as any).CAPTURE as any)) throw new (Error as any)(`First argument of \`#match?\` predicate must be a capture. Got "${(steps as any)[(SECOND as any) + (1 as any)]}".`);
          if (((steps as any)[THIRD] as any) !== ((PREDICATE_STEP_TYPE as any).STRING as any)) throw new (Error as any)(`Second argument of \`#match?\` predicate must be a string. Got @${(steps as any)[(THIRD as any) + (1 as any)]}.`);
          captureName = (steps as any)[(SECOND as any) + (1 as any)];
          const regex: any = new (RegExp as any)((steps as any)[(THIRD as any) + (1 as any)]);
          matchAll = !((operator as any).startsWith as any)('any-');
          (((predicates as any)[i] as any).push as any)(function (this: any, captures: any): any {
            const nodes: any = [];
            for (const c of captures) {
              if (((c as any).name as any) === (captureName as any)) ((nodes as any).push as any)(((c as any).node as any).text);
            }
            let test: any = (text: any, positive: any): any => {
              return positive ? ((regex as any).test as any)(text) : !((regex as any).test as any)(text);
            };
            if (((nodes as any).length as any) === (0 as any)) return !isPositive;
            return matchAll ? ((nodes as any).every as any)((text: any): any => (test as any)(text, isPositive)) : ((nodes as any).some as any)((text: any): any => (test as any)(text, isPositive));
          });
          break;
        case 'set!':
          if ((stepsLength as any) < (2 as any) || (stepsLength as any) > (3 as any)) throw new (Error as any)(`Wrong number of arguments to \`#set!\` predicate. Expected 1 or 2. Got ${(stepsLength as any) - (1 as any)}.`);
          if (((steps as any).some as any)((s: any, i: any): any => ((i as any) % (2 as any) as any) !== (1 as any) && (s as any) !== ((PREDICATE_STEP_TYPE as any).STRING as any))) throw new (Error as any)(`Arguments to \`#set!\` predicate must be a strings.".`);
          if (!(setProperties as any)[i]) (setProperties as any)[i] = {};
          ((setProperties as any)[i] as any)[(steps as any)[(SECOND as any) + (1 as any)]] = (steps as any)[THIRD] ? (steps as any)[(THIRD as any) + (1 as any)] : null;
          break;
        case 'is?':
        case 'is-not?':
          if ((stepsLength as any) < (2 as any) || (stepsLength as any) > (3 as any)) throw new (Error as any)(`Wrong number of arguments to \`#${operator}\` predicate. Expected 1 or 2. Got ${(stepsLength as any) - (1 as any)}.`);
          if (((steps as any).some as any)((s: any, i: any): any => ((i as any) % (2 as any) as any) !== (1 as any) && (s as any) !== ((PREDICATE_STEP_TYPE as any).STRING as any))) throw new (Error as any)(`Arguments to \`#${operator}\` predicate must be a strings.".`);
          const properties: any = (operator as any) === ('is?' as any) ? assertedProperties : refutedProperties;
          if (!(properties as any)[i]) (properties as any)[i] = {};
          ((properties as any)[i] as any)[(steps as any)[(SECOND as any) + (1 as any)]] = (steps as any)[THIRD] ? (steps as any)[(THIRD as any) + (1 as any)] : null;
          break;
        case 'not-any-of?':
          isPositive = false;
        case 'any-of?':
          if ((stepsLength as any) < (2 as any)) throw new (Error as any)(`Wrong number of arguments to \`#${operator}\` predicate. Expected at least 1. Got ${(stepsLength as any) - (1 as any)}.`);
          if (((steps as any)[SECOND] as any) !== ((PREDICATE_STEP_TYPE as any).CAPTURE as any)) throw new (Error as any)(`First argument of \`#${operator}\` predicate must be a capture. Got "${((steps as any)[1] as any).value}".`);
          stringValues = [];
          for (let k: any = THIRD; (k as any) < ((2 as any) * (stepsLength as any) as any); k += 2) {
            if (((steps as any)[k] as any) !== ((PREDICATE_STEP_TYPE as any).STRING as any)) throw new (Error as any)(`Arguments to \`#${operator}\` predicate must be a strings.".`);
            ((stringValues as any).push as any)((steps as any)[(k as any) + (1 as any)]);
          }
          captureName = (steps as any)[(SECOND as any) + (1 as any)];
          (((predicates as any)[i] as any).push as any)(function (this: any, captures: any): any {
            const nodes: any = [];
            for (const c of captures) {
              if (((c as any).name as any) === (captureName as any)) ((nodes as any).push as any)(((c as any).node as any).text);
            }
            if (((nodes as any).length as any) === (0 as any)) return !isPositive;
            return (((nodes as any).every as any)((text: any): any => ((stringValues as any).includes as any)(text)) as any) === (isPositive as any);
          });
          break;
        default:
          throw new (Error as any)(`Unknown query predicate \`#${(steps as any)[(FIRST as any) + (1 as any)]}\``);
      }
    }
  }
  (this as any).predicates = ((Object as any).freeze as any)(predicates);
  (this as any).setProperties = ((Object as any).freeze as any)(setProperties);
  (this as any).assertedProperties = ((Object as any).freeze as any)(assertedProperties);
  (this as any).refutedProperties = ((Object as any).freeze as any)(refutedProperties);
};
((Query as any).prototype as any).matches = function (this: any, node: any, {
  startPosition = ZERO_POINT,
  endPosition = ZERO_POINT,
  startIndex = 0,
  endIndex = 0,
  matchLimit = 0xFFFFFFFF,
  maxStartDepth = 0xFFFFFFFF
}: any = {}): any {
  (marshalNode as any)(node);
  const [returnedMatches, returnedNodes]: any = ((_matches as any).call as any)(this, (node as any).tree, (startPosition as any).row, (startPosition as any).column, (endPosition as any).row, (endPosition as any).column, startIndex, endIndex, matchLimit, maxStartDepth);
  const nodes: any = (unmarshalNodes as any)(returnedNodes, (node as any).tree);
  const results: any = [];
  let i: any = 0;
  let nodeIndex: any = 0;
  while ((i as any) < ((returnedMatches as any).length as any)) {
    const patternIndex: any = (returnedMatches as any)[i++];
    const captures: any = [];
    while ((i as any) < ((returnedMatches as any).length as any) && (typeof (returnedMatches as any)[i] as any) === ('string' as any)) {
      const captureName: any = (returnedMatches as any)[i++];
      ((captures as any).push as any)({
        name: captureName,
        node: (nodes as any)[nodeIndex++]
      });
    }
    if (((((this as any).predicates as any)[patternIndex] as any).every as any)((p: any): any => (p as any)(captures))) {
      const result: any = {
        pattern: patternIndex,
        captures
      };
      const setProperties: any = ((this as any).setProperties as any)[patternIndex];
      const assertedProperties: any = ((this as any).assertedProperties as any)[patternIndex];
      const refutedProperties: any = ((this as any).refutedProperties as any)[patternIndex];
      if (setProperties) (result as any).setProperties = setProperties;
      if (assertedProperties) (result as any).assertedProperties = assertedProperties;
      if (refutedProperties) (result as any).refutedProperties = refutedProperties;
      ((results as any).push as any)(result);
    }
  }
  return results;
};
((Query as any).prototype as any).captures = function (this: any, node: any, {
  startPosition = ZERO_POINT,
  endPosition = ZERO_POINT,
  startIndex = 0,
  endIndex = 0,
  matchLimit = 0xFFFFFFFF,
  maxStartDepth = 0xFFFFFFFF
}: any = {}): any {
  (marshalNode as any)(node);
  const [returnedMatches, returnedNodes]: any = ((_captures as any).call as any)(this, (node as any).tree, (startPosition as any).row, (startPosition as any).column, (endPosition as any).row, (endPosition as any).column, startIndex, endIndex, matchLimit, maxStartDepth);
  const nodes: any = (unmarshalNodes as any)(returnedNodes, (node as any).tree);
  const results: any = [];
  let i: any = 0;
  let nodeIndex: any = 0;
  while ((i as any) < ((returnedMatches as any).length as any)) {
    const patternIndex: any = (returnedMatches as any)[i++];
    const captureIndex: any = (returnedMatches as any)[i++];
    const captures: any = [];
    while ((i as any) < ((returnedMatches as any).length as any) && (typeof (returnedMatches as any)[i] as any) === ('string' as any)) {
      const captureName: any = (returnedMatches as any)[i++];
      ((captures as any).push as any)({
        name: captureName,
        node: (nodes as any)[nodeIndex++]
      });
    }
    if (((((this as any).predicates as any)[patternIndex] as any).every as any)((p: any): any => (p as any)(captures))) {
      const result: any = (captures as any)[captureIndex];
      const setProperties: any = ((this as any).setProperties as any)[patternIndex];
      const assertedProperties: any = ((this as any).assertedProperties as any)[patternIndex];
      const refutedProperties: any = ((this as any).refutedProperties as any)[patternIndex];
      if (setProperties) (result as any).setProperties = setProperties;
      if (assertedProperties) (result as any).assertedProperties = assertedProperties;
      if (refutedProperties) (result as any).refutedProperties = refutedProperties;
      ((results as any).push as any)(result);
    }
  }
  return results;
};

/*
 * LookaheadIterator
 */

((LookaheadIterator as any).prototype as any)[(Symbol as any).iterator] = function (this: any): any {
  const self: any = this;
  return {
    next(): any {
      if (((self as any)._next as any)()) {
        return {
          done: false,
          value: (self as any).currentType
        };
      }
      return {
        done: true,
        value: ''
      };
    }
  };
};

/*
 * Other functions
 */

function getTextFromString(this: any, node: any): any {
  return (((this as any).input as any).substring as any)((node as any).startIndex, (node as any).endIndex);
}
function getTextFromFunction(this: any, {
  startIndex,
  endIndex
}: any): any {
  const {
    input
  }: any = this;
  let result: any = '';
  const goalLength: any = (endIndex as any) - (startIndex as any);
  while (((result as any).length as any) < (goalLength as any)) {
    const text: any = (input as any)((startIndex as any) + ((result as any).length as any));
    result += text;
  }
  return ((result as any).slice as any)(0, goalLength);
}
const {
  pointTransferArray
}: any = binding;
const NODE_FIELD_COUNT: number = 6;
const ERROR_TYPE_ID: number = 0xFFFF;
function getID(this: any, buffer: any, offset: any): any {
  const low: any = (BigInt as any)((buffer as any)[offset]);
  const high: any = (BigInt as any)((buffer as any)[(offset as any) + (1 as any)]);
  return ((high as any) << (32n as any) as any) + (low as any);
}
function unmarshalNode(this: any, value: any, tree: any, offset: any = 0, cache: any = null): any {
  /* case 1: node from the tree cache */
  if ((typeof value as any) === ('object' as any)) {
    const node: any = value;
    return node;
  }

  /* case 2: node being transferred */
  const nodeTypeId: any = value;
  const NodeClass: any = (nodeTypeId as any) === (ERROR_TYPE_ID as any) ? SyntaxNode : (((tree as any).language as any).nodeSubclasses as any)[nodeTypeId];
  const {
    nodeTransferArray
  }: any = binding;
  const id: any = (getID as any)(nodeTransferArray, offset);
  if ((id as any) === (0n as any)) {
    return null;
  }
  let cachedResult: any;
  if (cache && (cachedResult = ((cache as any).get as any)(id))) return cachedResult;
  const result: any = new (NodeClass as any)(tree);
  for (let i: any = 0; (i as any) < (NODE_FIELD_COUNT as any); i++) {
    (result as any)[i] = (nodeTransferArray as any)[(offset as any) + (i as any)];
  }
  if (cache) ((cache as any).set as any)(id, result);else ((tree as any)._cacheNode as any)(result);
  return result;
}
function unmarshalNodes(this: any, nodes: any, tree: any): any {
  const cache: any = new (Map as any)();
  let offset: any = 0;
  for (let i: any = 0, {
      length
    }: any = nodes; (i as any) < (length as any); i++) {
    const node: any = (unmarshalNode as any)((nodes as any)[i], tree, offset, cache);
    if ((node as any) !== ((nodes as any)[i] as any)) {
      (nodes as any)[i] = node;
      offset += NODE_FIELD_COUNT;
    }
  }
  ((tree as any)._cacheNodes as any)(((Array as any).from as any)(((cache as any).values as any)()));
  return nodes;
}
function marshalNode(this: any, node: any): any {
  if (!((node as any).tree instanceof Tree)) {
    throw new (TypeError as any)("SyntaxNode must belong to a Tree");
  }
  const {
    nodeTransferArray
  }: any = binding;
  for (let i: any = 0; (i as any) < (NODE_FIELD_COUNT as any); i++) {
    (nodeTransferArray as any)[i] = (node as any)[i];
  }
}
function unmarshalPoint(this: any): any {
  return {
    row: (pointTransferArray as any)[0],
    column: (pointTransferArray as any)[1]
  };
}
function pointToString(this: any, point: any): any {
  return `{row: ${(point as any).row}, column: ${(point as any).column}}`;
}
function initializeLanguageNodeClasses(this: any, language: any): any {
  const nodeTypeNamesById: any = ((binding as any).getNodeTypeNamesById as any)(language);
  const nodeFieldNamesById: any = ((binding as any).getNodeFieldNamesById as any)(language);
  const nodeTypeInfo: any = (language as any).nodeTypeInfo || [];
  const nodeSubclasses: any = [];
  for (let id: any = 0, n: any = (nodeTypeNamesById as any).length; (id as any) < (n as any); id++) {
    (nodeSubclasses as any)[id] = SyntaxNode;
    const typeName: any = (nodeTypeNamesById as any)[id];
    if (!typeName) continue;
    const typeInfo: any = ((nodeTypeInfo as any).find as any)((info: any): any => (info as any).named && ((info as any).type as any) === (typeName as any));
    if (!typeInfo) continue;
    const fieldNames: any = [];
    let classBody: any = '\n';
    if ((typeInfo as any).fields) {
      for (const fieldName in (typeInfo as any).fields) {
        const fieldId: any = ((nodeFieldNamesById as any).indexOf as any)(fieldName);
        if ((fieldId as any) === (-1 as any)) continue;
        if ((((typeInfo as any).fields as any)[fieldName] as any).multiple) {
          const getterName: any = ((camelCase as any)(fieldName) as any) + ('Nodes' as any);
          ((fieldNames as any).push as any)(getterName);
          classBody += (((`
            get ${getterName}() {
              marshalNode(this);
              return unmarshalNodes(NodeMethods.childNodesForFieldId(this.tree, ${fieldId}), this.tree);
            }
          ` as any).replace as any)(/\s+/g, ' ') as any) + ('\n' as any);
        } else {
          const getterName: any = ((camelCase as any)(fieldName, false) as any) + ('Node' as any);
          ((fieldNames as any).push as any)(getterName);
          classBody += (((`
            get ${getterName}() {
              marshalNode(this);
              return unmarshalNode(NodeMethods.childNodeForFieldId(this.tree, ${fieldId}), this.tree);
            }
          ` as any).replace as any)(/\s+/g, ' ') as any) + ('\n' as any);
        }
      }
    }
    const className: any = ((camelCase as any)(typeName, true) as any) + ('Node' as any);
    const nodeSubclass: any = (eval as any)(`class ${className} extends SyntaxNode {${classBody}}; ${className}`);
    ((Object as any).defineProperties as any)((nodeSubclass as any).prototype, {
      type: {
        value: typeName,
        enumerable: true
      },
      fields: {
        value: ((Object as any).freeze as any)(((fieldNames as any).sort as any)()),
        enumerable: true
      }
    });
    (nodeSubclasses as any)[id] = nodeSubclass;
  }
  (language as any).nodeSubclasses = nodeSubclasses;
}
function camelCase(this: any, name: any, upperCase: any): any {
  name = ((name as any).replace as any)(/_(\w)/g, (_match: any, letter: any): any => ((letter as any).toUpperCase as any)());
  if (upperCase) name = ((((name as any)[0] as any).toUpperCase as any)() as any) + (((name as any).slice as any)(1) as any);
  return name;
}
(module as any).exports = Parser;
((module as any).exports as any).Query = Query;
((module as any).exports as any).Tree = Tree;
((module as any).exports as any).SyntaxNode = SyntaxNode;
((module as any).exports as any).TreeCursor = TreeCursor;
((module as any).exports as any).LookaheadIterator = LookaheadIterator;
