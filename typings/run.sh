#!/usr/bin/env sh

cd "$( dirname "$0" )"
TS_NODE_COMPILER=ttypescript node ../bin/run.js --no-coverage my.ts
