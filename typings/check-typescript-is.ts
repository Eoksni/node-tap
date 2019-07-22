import { is, assertType } from "typescript-is";
import { AnyClass, AnyPrototype } from "tsdef";

const wildString: any = 123;
//   const wildString: any =
//   "a string, but nobody knows at compile time, because it is cast to `any`";

if (is<string>(wildString)) {
  console.log(wildString);
} else {
  console.log("impossibru");
}

class InnerClass {
  someField: string = "zcvx";
}

interface SomeObject {
  qwer: string;
  asdf: number;
  classField: InnerClass;
}

type Public<T> = { [P in keyof T]: Public<T[P]> };

type E = SomeObject extends AnyClass ? true : false;
type W = InnerClass extends AnyClass ? true : false;

type T0 = Public<SomeObject>;

const q: SomeObject = {
  qwer: () => {}
} as any;

assertType<T0>(q);
// assertType<typeof q>(q);
