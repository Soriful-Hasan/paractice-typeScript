type User = {
  name: string;
  salary: number;
  address: {
    division: string;
    city: string;
  };
};

const user: User = {
  name: "sofiful",
  salary: 2000,
  address: {
    division: "sylhet",
    city: "sunamgonj",
  },
};

console.log(user);

const isAdmin: boolean = true;
console.log(isAdmin);

