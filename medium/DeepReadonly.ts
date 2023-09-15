type X = {
  x: {
    a: 1
    b: 'hi'
  }
  y: 'hey'
}

type Expected = {
  readonly x: {
    readonly a: 1
    readonly b: 'hi'
  }
  readonly y: 'hey'
}


type DeepReadonly<T> = {
  +readonly [k in keyof T]: keyof T[k] extends never ? T[k]: DeepReadonly<T[k]>
}


type Todo = DeepReadonly<X> // should be same as `Expected`

const a : Todo = {
  x: {
    a: 1,
    b: 'hi'
  },
  y: 'hey'
}