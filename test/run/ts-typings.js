const path = require('path')
const {
  tmpfile,
  run,
  tap,
  t,
} = require('./')

t.test('ts-typings', t => {
  const ok = tmpfile(t, 'ts-typings/ok.ts', `
    import tap from ${tap};
    import { assertType } from "typescript-is";
    import { AnyFunction, AnyClass, AnyConstructor } from "tsdef";

    /**
     * 'typescript-is' has some limitations on what it can check and
     * what it cannot, so here are few utility type convertion types
     * which help construct type that can be checked. We still want to check
     * *existence* of such fields and it is achieved by converting such fields
     * to 'any'.
     */

    /**
     * Recursively exclude from checking fields which have the same type
     * to prevent infinite recursion. It also strips all private/protected
     * fields from class types, essentually converting them into interfaces.
     * This is important because 'typescript-is' cannot handle class instances
     * but can handle interface implementations. Class constructors and functions
     * also not supported, so it excludes them too (their *existence* is still checked).
     */
    type Prepare<T> = {
      [P in keyof T]: T[P] extends T
        ? any
        : (T[P] extends AnyFunction | AnyClass | AnyConstructor
            ? any
            : Prepare<T[P]>)
    };

    (tap as any).test("qwer", (t: any) => {
      type _ = Prepare<typeof tap>;
      assertType<_>(tap);
      // assertEquals<_>(tap);
      t.end();
    });
  `)
  const tsconfig = tmpfile(t, 'ts-typings/tsconfig.json', `
    {
      "compilerOptions": {
        "strict": true,
        "noImplicitReturns": true,
        "noImplicitAny": true,
        "noFallthroughCasesInSwitch": true,
        "noUnusedLocals": true,
        "noUnusedParameters": true,
        "plugins": [
          {
            "transform": "typescript-is/lib/transform-inline/transformer"
          },
        ]
      },
      "files": []
    }
  `)
  const tsNodeRegister = tmpfile(t, 'ts-typings/ts-node-register.js', `
    require('ts-node').register({ 
      compiler: 'ttypescript', 
      project: '${path.resolve(tsconfig)}' 
    })
  `)
  const args = [ok, '--no-ts', '--node-arg=--require', `--node-arg=${path.resolve(tsNodeRegister)}`]
  run(args, {}, (er, o, e) => {
    t.equal(er, null)
    t.matchSnapshot(o)
    t.end()
  })
})