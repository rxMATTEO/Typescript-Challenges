type Chainable<T extends { [key: string]: any } = { [key: string]: any }> = {
  option<K extends string, V>(key: K, value: Readonly<V>): Chainable< T & Record<K, Readonly<V>> >
  get(): T
}

declare const config: Chainable

const result = config
  .option('foo', 123)
  .option('name', 'type-challenges')
  .option('bar', { value: 'Hello World' })
  .get()

// expect the type of result to be:
interface Result {
  foo: number
  name: string
  bar: {
    value: string
  }
}