const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise<string>((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

declare function PromiseAll<T extends readonly any[]>(...params: T): Promise<{
  [k in keyof T]: T[k] extends Promise<infer E> ? E: T[k]
}>
const p = PromiseAll([promise1, promise2, promise3] as const)
const v = [promise1, promise2, promise3] as const;