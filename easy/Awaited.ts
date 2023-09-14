type ExampleType = Promise<Promise<string>>

type MyAwaited<T> = T extends Promise<infer S> ? S extends Promise<unknown> ? MyAwaited<S>: S: never;

type Result = MyAwaited<ExampleType> // string