type Space = '\n' | ' ' | '\t';

type Trim<T extends string> = T extends `${infer R}${Space}`? Trim<R>: T;

type trimmed = Trim<'  Hello World  '>;