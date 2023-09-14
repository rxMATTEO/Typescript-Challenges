type MyParameters<T extends (...params: any[]) => void> = T extends (...args: infer E) => any ? E : never

const foo = (arg1: string, arg2: number): void => {}

type FunctionParamsType = MyParameters<typeof foo> // [arg1: string, arg2: number]