const student = {
  name: "Hasan",
  age: 22,
  contact: {
    phone: "01700000000",
    email: "hasan@example.com",
    address: {
      city: "Sylhet",
      area: "Zindabazar",
      postalCode: 3100,
    },
  },
  subjects: {
    math: { marks: 85, teacher: "Mr. Karim" },
    english: { marks: 90, teacher: "Ms. Lima" },
  },
};
// object destructuring er khetre type defind kore dewa lage na uoto metic bhabe type dore nei .
const {
  subjects: {
    math: { marks },
  },
} = student;
console.log(marks);
