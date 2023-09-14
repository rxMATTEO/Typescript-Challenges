type MyExclude<K, E> = K extends E ? never: K;


type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'
