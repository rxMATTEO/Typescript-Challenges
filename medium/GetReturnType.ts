const fn = (v: boolean) => {
  if (v)
    return 1
  else
    return 2
}

type MyReturnType<T extends (...params: any[]) => unknown> = T extends ( ...params: any[] ) => infer E ? E : never;

type a = MyReturnType<typeof fn> // should be "1 | 2"