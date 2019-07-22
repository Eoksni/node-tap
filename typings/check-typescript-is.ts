import { is, assertType } from "typescript-is";

const wildString: any = 123;
//   const wildString: any =
//   "a string, but nobody knows at compile time, because it is cast to `any`";

if (is<string>(wildString)) {
  console.log(wildString);
} else {
  console.log("impossibru");
}

interface SomeObject {
  qwer: any;
}

const q: SomeObject = {
  qwer: () => {}
} as any;

assertType<SomeObject>(q);
assertType<typeof q>(q);
