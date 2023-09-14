type Concat<F extends unknown[], S extends unknown[]> = [...F, ...S];

type Result = Concat<[1], [2]> // expected to be [1, 2]
