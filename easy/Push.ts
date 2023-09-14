type Push<A extends unknown[], V> = [...A, V];

type Result = Push<[1, 2], '3'> // [1, 2, '3']