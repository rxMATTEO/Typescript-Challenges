type Test = '123';

type StringToUnion<T extends string> = T extends `${infer U}${infer R}` ? U | StringToUnion<R> : never
type Result = StringToUnion<Test>;