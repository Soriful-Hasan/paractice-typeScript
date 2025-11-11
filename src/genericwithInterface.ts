//? Y=undefined dewar karon Y holo optional Generic Type
interface Developer<T, Y = undefined> {
  name: T;
  age: number;
  smartWatch?: Y;
}
interface SmartWatch {
  watch: string;
  aiFeuture: boolean;
}
const poorDeveloper: Developer<string> = {
  name: "Soriful",
  age: 20,
};

const proDeveloper: Developer<number> = {
  name: 300,
  age: 30,
};

const anotherDeveloper: Developer<string, SmartWatch> = {
  name: "junayed",
  age: 10,
  smartWatch: {
    watch: "apple",
    aiFeuture: true,
  },
};
