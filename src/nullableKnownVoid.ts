//? nullable
//? unKnown
//? Void

function calculate(input: unknown) {
  if (typeof input === "number") {
    const discountedPrice = input * 0.5;
    console.log(discountedPrice);
  } else if (typeof input === "string") {
    const [discountedPrice] = input.split(" ");
    console.log(Number(discountedPrice * 0.9));
  }
}

calculate(100);
calculate("100 Tk");
calculate(null);
