class Counter {
  static count: number = 0;
  increMent() {
    return (Counter.count = Counter.count + 1);
  }
  decrement() {
    return (Counter.count = Counter.count - 1);
  }
}

const counter1 = new Counter();

counter1.increMent();
counter1.increMent();
counter1.increMent();
counter1.increMent();

console.log(Counter.count);
const counter2 = new Counter();
counter2.increMent();
counter2.increMent();
counter2.increMent();

console.log(Counter.count);
