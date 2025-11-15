type isString<T> = T extends string ? "Yes" : "No";

type A = isString<number>;

interface User {
  name: string;
  age: number;
}

type ExtractName<T> = T extends { name: infer N } ? N : never;

type Result = ExtractName<User>;
