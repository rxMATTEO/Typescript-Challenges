interface Todo {
  title: string
  description: string
}

type MyReadonly<T, K extends keyof T = keyof T> = {
  readonly [k in K]: T[k]
}

const todo: MyReadonly<Todo> = {
  title: "Hey",
  description: "foobar"
}

// @ts-expect-error
todo.title = "Hello" // Error: cannot reassign a readonly property
// @ts-expect-error
todo.description = "barFoo" // Error: cannot reassign a readonly property