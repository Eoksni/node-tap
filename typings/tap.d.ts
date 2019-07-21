// Type definitions for tap 14.4.2
// Project: tap
// Definitions by: Dmitry Mazurok <https://github.com/Eoksni>

declare const tap: Export;

export = tap;

declare interface Export extends TAP {
  default: Export;
  t: Export;
  Test: Test;
}

declare class TAP extends Test {
  pass(message?: string, extra?: Options.Assert): boolean;
}

declare namespace Options {
  export interface Assert {
    todo?: boolean | string;
    skip?: boolean | string;
  }
}

declare class Test {}
