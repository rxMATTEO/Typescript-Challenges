interface Todo {
  title: string
  description: string
  completed: boolean
}

type MyOmit<T, K extends keyof T> = {
  [k in Exclude<keyof T, K>]: k extends K ? never: T[k]
}

type MyOmit2<T, K extends keyof T> = {
  [k in keyof T as k extends K ? never: k ]: k extends K ? never: T[k]
}

type TodoPreview = MyOmit2<Todo, 'description' | 'title'>

const todo: TodoPreview = {
  completed: false
}