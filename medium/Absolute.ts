type Test = -100;

type Absolute<T extends number> = `${T}` extends `${infer o}${infer R}` ? R: never;
type Result = Absolute<Test> // expected to be "100"