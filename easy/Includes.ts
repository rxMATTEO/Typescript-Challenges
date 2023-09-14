type Includes<T extends readonly any[], S> = {
  [k in T[number]]: true;
}[S] extends true ? true: false;

type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`
