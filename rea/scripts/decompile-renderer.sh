#!/bin/sh
set -eu
TASK_ROOT=$(CDPATH= cd -- "$(dirname -- "$0")/../.." && pwd)
docker build --platform linux/amd64 -t grokbot-rea-wakaru:6.3.0-1.13.0 "$TASK_ROOT/rea/tools/rea-linux"
docker run --rm --platform linux/amd64 --network none --memory 3g --cpus 2 \
  -v "$TASK_ROOT:/workspace" \
  -e REA_LOCAL_ENTRY=/opt/rea/node_modules/rea-agents/scripts/rea.mjs \
  grokbot-rea-wakaru:6.3.0-1.13.0 node rea/scripts/decompile-renderer.mjs

cd "$TASK_ROOT"
node rea/scripts/repair-decompiled-exports.mjs
node rea/scripts/repair-decompiled-pdf.mjs
node rea/scripts/verify-decompilation.mjs
