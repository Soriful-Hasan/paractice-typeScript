
//? type assertion tokhon use korbo jokhon amara sure thakbo type niye tokhon .......


const convertKg = (input: Number | String): String | Number | undefined => {
  if (typeof input === "number") {
    return input * 100;
  } else if (typeof input === "string") {
    const [value] = input.split(" ");
    const res = Number(value * 100);
    return res;
  }
};

const res1 = convertKg(100) as Number;

const res2 = convertKg("100 Kg") as String;
console.log(res1, res2);
