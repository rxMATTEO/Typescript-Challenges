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

todo.title = "Hello" // Error: cannot reassign a readonly property
todo.description = "barFoo" // Error: cannot reassign a readonly property