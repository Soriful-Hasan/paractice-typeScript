class Payment {
  process(amount: number) {
    console.log(`Processing Payment`);
  }
}

class PayPalPayment extends Payment {
  process(amount: number) {
    console.log(`Processing Paypal Payment ${amount}`);
  }
}
class StripePayment extends Payment {
  process(amount: number) {
    console.log(`Processing Stripe Payment ${amount}`);
  }
}
class BkashPayment extends Payment {
  process(amount: number) {
    console.log(`Processing Bkash Payment ${amount}`);
  }
}

const PayNow = (method: Payment) => {
  method.process(500);
};

const paymentMethod1 = new BkashPayment();
const paymentMethod2 = new StripePayment();
PayNow(paymentMethod2);

class Shape {
  getShape(): number {
    return 0;
  }
}

class Circle extends Shape {
  radius: number;
  constructor(radius: number) {
    super();
    this.radius = radius;
  }
  getShape(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  height: number;
  width: number;
  constructor(height: number, width: number) {
    super();
    this.height = height;
    this.width = width;
  }
  getShape(): number {
    return this.height * this.width;
  }
}

const getArea = (params: Shape) => {
  return console.log(params.getShape());
};

const mainShape = new Shape();
const shape1 = new Rectangle(22, 11);
const shape2 = new Circle(22);
getArea(shape2);
