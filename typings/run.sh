#!/usr/bin/env sh

cd "$( dirname "$0" )"
node ../bin/run.js --no-coverage my.ts
