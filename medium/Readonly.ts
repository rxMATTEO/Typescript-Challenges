interface Todo {
  title: string
  description: string
  completed: boolean
}

type MyReadonly2<T extends Readonly<T>, K extends keyof T> = Readonly<Pick<T, K>> & Omit<T, K>

const todo: MyReadonly2<Todo, 'title' | 'description'> = {
  title: "Hey",
  description: "foobar",
  completed: false,
}

// @ts-expect-error
todo.title = "Hello" // Error: cannot reassign a readonly property
// @ts-expect-error
todo.description = "barFoo" // Error: cannot reassign a readonly property
todo.completed = true // OK