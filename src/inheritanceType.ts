class Parent {
  name: string;
  age: string;
  school: string;
  constructor(name: string, age: string, school: string) {
    this.name = name;
    this.age = age;
    this.school = school;
  }
  getStatus(time: number) {
    console.log(`this student name ${this.name}and roll number is a ${time}`);
  }
}

class Student extends Parent {
  roll: number;

  constructor(name: string, age: string, roll: number, school: string) {
    super(name, age, school);
    this.roll = roll;
  }
}

const student = new Student("soriful", "22", 22, "sylhet gov collage");
console.log(student.getStatus(2));

class Teacher extends Parent {
  expartceSubject: string;

  constructor(
    expartceSubject: string,
    name: string,
    age: string,
    school: string
  ) {
    super(name, age, school);
    this.expartceSubject = expartceSubject;
  }

  haveCar() {
    console.log("sir have a car");
  }
}

const newTecher = new Teacher("English", "Sajid", "22", "bl collage");
console.log(newTecher);
