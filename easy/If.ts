type If <TF extends boolean, T,F> = TF extends true ? T: F;

type A = If<true, 'a', 'b'>  // expected to be 'a'
type B = If<false, 'a', 'b'> // expected to be 'b'