type Test = { id: '1' }

type AppendToObject<O extends {}, K extends Readonly<string>, V> = Keys<{
  [k in keyof O]: O[k]
} & { [k in K]: V }>;

type Keys<T> = {
  [k in keyof T]: T[k]
}

type Result = AppendToObject<Test, 'value', 4> // expected to be { id: '1', value: 4 }