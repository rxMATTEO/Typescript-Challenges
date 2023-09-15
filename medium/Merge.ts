type foo = {
  name: string
  age: string
}
type coo = {
  age: number
  sex: string
}

type Merge<F, S> = {
  [P in keyof (F & S)]: P extends keyof S
    ? S[P]
    : P extends keyof F
      ? F[P]
      : never
}

type Result = Merge<foo, coo> // expected to be {name: string, age: number, sex: string}
const a: Result = {
  age: 1,
  name: '',
  sex: 'ne bilo',
}