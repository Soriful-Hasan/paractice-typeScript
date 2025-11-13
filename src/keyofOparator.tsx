//? if string behavior type . then we can call string lateral type

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
