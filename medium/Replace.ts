type Replace<S extends string, F extends string, T extends string> =
  S extends `${infer V}${F}${infer R}`
      ? `${V}${T}${R}`
      : S;

type replaced = Replace<'types are fun!', 'fun', 'awesome'> // expected to be 'types are awesome!'