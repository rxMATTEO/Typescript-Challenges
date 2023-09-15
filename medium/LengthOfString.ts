type LengthOfString<S extends string, A extends string[] = []> = S extends `${string}${infer R}` ? LengthOfString<R, [...A,string]>: A['length'];

type Len = LengthOfString<'kumamam'>;

const a: Len = 7;