#!/usr/bin/env node
declare var process: any;
declare var require: any;
((process as any).env as any).NODE_ENV = 'test';
var path: any = (require as any)('path');
var test: any = null;
try {
  var pkg: any = (require as any)(((path as any).join as any)(((process as any).cwd as any)(), 'package.json'));
  if ((pkg as any).name && ((process as any).env as any)[(((((pkg as any).name as any).toUpperCase as any)() as any).replace as any)(/-/g, '_')]) {
    ((process as any).exit as any)(0);
  }
  test = ((pkg as any).prebuild as any).test;
} catch (err: any) {
  //  do nothing
}
if (test) (require as any)(((path as any).join as any)(((process as any).cwd as any)(), test));else ((require as any)('./') as any)();
