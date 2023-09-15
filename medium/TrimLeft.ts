type TrimLeft<T extends string> = T extends `${' ' | '\n'}${infer R}` ? TrimLeft<R>: T;

type trimed = TrimLeft<'  Hello World  '> // expected to be 'Hello World  '