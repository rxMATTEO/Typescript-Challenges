type Unshift<A extends unknown[], V> = [V, ...A];

type Result = Unshift<[1, 2], 0> // [0, 1, 2,]
