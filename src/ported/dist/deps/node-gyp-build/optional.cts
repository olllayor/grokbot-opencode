#!/usr/bin/env node
declare var process: any;

/*
I am only useful as an install script to make node-gyp not compile for purely optional native deps
*/
((process as any).exit as any)(0);
