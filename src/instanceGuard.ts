class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  getSleep(hourOfSleep: string) {
    console.log(`${this.name} sleeping time is ${hourOfSleep}`);
  }
}

class Student extends Person {
  constructor(name: string) {
    super(name);
  }

  doStudy(hourOfStudy: string) {
    console.log(`${this.name} study time is ${hourOfStudy}`);
  }
}

class Teacher extends Person {
  constructor(name: string) {
    super(name);
  }
  takeClass(hourOfStudy: string) {
    console.log(`${this.name} taking class time is ${hourOfStudy}`);
  }
}

const isStudent = (user: Person) => {
  return user instanceof Student;
};

const getUserInfo = (user: Person) => {
  if (isStudent(user)) {
    user.getSleep("22");
  } else if (user instanceof Teacher) {
    user.takeClass("33");
  } else {
    user.getSleep("44");
  }
};

const student1 = new Student("Student 1");
const teacher = new Teacher("Teacher 1");
getUserInfo(student1);

console.log(student1);
