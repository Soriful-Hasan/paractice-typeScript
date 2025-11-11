interface User {
  name: string;
  id: number;
}
interface Geeks {
  name: string;
  age: number;
}

interface MoreGeeks {
  email: string;
}

type CombinedGeeks = Geeks & MoreGeeks;
const gfg: CombinedGeeks = {
  name: "kgowda",
  age: 20,
  email: "kgowda@gmail.com",
};
