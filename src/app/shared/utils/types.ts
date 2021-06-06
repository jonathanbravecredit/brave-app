/**
 * To change read only types to mutable
 * Example:
 * interface Foo {
 *   readonly bar: boolean;
 * }
 *
 * const Bar: Foo = {
 *    bar: false
 * }
 *
 * const FooBar = {...Bar} as DeepWriteable<Foo>
 * Bar.bar = true; // ERROR!!
 * FooBar.bar = true; // OK
 * FooBar.bar = false; // OK
 */
export type Mutable<T> = { -readonly [P in keyof T]: T[P] };
