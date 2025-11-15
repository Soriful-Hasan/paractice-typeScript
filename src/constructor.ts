class Animal {
  constructor(
    public name: string,
    public species: string,
    public sound: string
  ) {}

  makeSound() {
    console.log(`${this.name} make sound like ${this.sound}`);
  }
}

const dog = new Animal("dogi", "dog", "gaw gaw");

dog.makeSound();
console.log(dog.name);
