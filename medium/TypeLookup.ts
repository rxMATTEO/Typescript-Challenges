interface Cat {
  type: 'cat'
  breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal'
}

interface Dog {
  type: 'dog'
  breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer'
  color: 'brown' | 'white' | 'black'
}

type bc ='dog' extends Cat['type'] | Dog['type']  ? true : false;

type LookUp<T, E extends Readonly<string>> = T extends { type: E } ? T : never;

type MyDogType = LookUp<Cat | Dog, 'dog'> // expected to be `Dog`