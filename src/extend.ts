type User = { class: string; studentId: number };

interface Developer<T extends User> {
  name: string;
  age: number;
  smartWatch?: T;
}

const poorDeveloper: Developer<User> = {
  name: "Soriful",
  age: 20,
  smartWatch: {
    class: "six",
    studentId: 22,
  },
};
