// keyof type defined
type ReachPeople = {
  car: string;
  bike: string;
};

type MyVehicle2 = keyof ReachPeople;
const res: MyVehicle2 = "car";
