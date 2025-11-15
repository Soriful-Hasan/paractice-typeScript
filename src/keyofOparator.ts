//? if string behavior type . then we can call string lateral type
/*
keyof = object type এর সব key–এর union

এটি শুধু property নাম নিয়ে কাজ করে, value না

এটি generics + mapped types–এ সবচেয়ে powerful জিনিসগুলোর একটি

এটি ছাড়া type-safe dynamic programming করা সম্ভব না
*/
type ReachPeople = {
  car: string;
  bike: string;
  cng: string;
};
type MyVehicle2 = keyof ReachPeople;
type MyVehicle3 = keyof ReachPeople;
const newVehicle: MyVehicle3 = "bike";
const myVehicle: MyVehicle2 = "car";
console.log(myVehicle);

type User = {
  id: number;
  name: string;
  roll: number;
  age: number;
};

const user: User = {
  id: 33,
  name: "soriful",
  roll: 22,
  age: 23,
};

const name = user["id"];
console.log(name);

const car = {
  brand: "mercedes",
  color: "black",
  id: 2,
};
const keyFunc = <T>(user: T, key: keyof T) => {
  return user[key];
};

const res1 = keyFunc(user, "name");
const res2 = keyFunc(car, "brand");

console.log(res2);
