type Capitalize<T extends string> = T extends `${infer F}${infer R}`? `${Uppercase<F>}${R}`: T;
// for tests
type MyCapitalize<T extends string> = T extends `${infer F}${infer R}`? `${Uppercase<F>}${R}`: T;

type capitalized = Capitalize<'hello world'> // expected to be 'Hello world'