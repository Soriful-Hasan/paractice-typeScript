// console.log((user.organization = "hasan"));

const addFounding = {
  organizationName: "Ass Sunnah",
  balance: 200,
  addBalance(found: number): number {
    const totalBalance = this.balance + found;
    return totalBalance;
  },
};

// const totalbal = addFounding.addBalance(4000);
// console.log(totalbal);

const arr: number[] = [2, 3, 2, 4];
const allNumber = arr.map((num: number): number => num * num);
console.log(allNumber);
