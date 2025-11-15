/*
Mapped type basically:

প্রোপার্টি গুলোর উপর loop

key বা value modify করা

নতুন type generate করা

এটা TypeScript এর সবচেয়ে powerful concept utility type গুলা (Partial, Pick, Record, Required, Readonly) সবই mapped type দিয়ে বানানো।
*/
type User = {
  name: string;
  age: number;
};

type CopyUser = {
  [K in keyof User]: User[K];
};

type Area<T> = {
  [k in keyof T]: T[k];
};

// example
const area1: Area<{ height: string; width: boolean }> = {
  height: "100M",
  width: true,
};
