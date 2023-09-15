type AppendArgument<F extends (...args: any[]) => unknown, T> = F extends (...args: infer R) => infer Z ? (...args: [...R, T]) => Z : never

type Fn = (a: number, b: string) => number

type Result = AppendArgument<Fn, boolean>
// expected be (a: number, b: string, x: boolean) => number