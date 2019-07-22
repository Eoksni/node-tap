import tap from "..";
import { assertType } from "typescript-is";

type AnyConstructor = new (...args: any[]) => any;
type AnyFunction = (...args: any[]) => any;

type WithoutFunctions<T> = {
  [P in keyof T]: T[P] extends AnyFunction | AnyConstructor
    ? any
    : WithoutFunctions<T[P]>
};

type WithoutSelf<T> = { [P in keyof T]: T[P] extends T ? any : T[P] };

type WithoutProps<T, PtoRemove> = {
  [P in keyof T]: P extends PtoRemove ? any : T[P]
};

type WithoutRecursive = WithoutProps<typeof tap, "t" | "default">;
type Prepare<T> = WithoutFunctions<T>;

(tap as any).test("qwer", (t: any) => {
  type _ = Prepare<WithoutRecursive>;
  assertType<_>(tap);
  //   assertEquals<_>(tap);
  t.end();
});
