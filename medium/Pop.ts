type arr1 = ['a', 'b', 'c', 'd']
type arr2 = [3, 2, 1]
type pop = [];

type Pop<T extends any[]> = T extends [...infer E, infer A] ? E : [];


type re1 = Pop<arr1> // expected to be ['a', 'b', 'c']
const a: Pop<pop> = [];
type re2 = Pop<arr2> // expected to be [3, 2]