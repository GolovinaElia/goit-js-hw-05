class Car {
  static getSpecs(car) {
    console.log(car.maxSpeed);
    console.log(car.speed);
    console.log(car.isOn);
    console.log(car.distance);
    console.log(car.price);
  } 
constructor({ price, maxSpeed }) {
    this.speed = 0;
    this._price = price;
    this.maxSpeed = maxSpeed;
    this.isOn = false;
    this.distance = 0;
  }
get price() {
    return this._price;
  }

  set price(value) {
    this._price = value;
  }
  turnOn() {
      this.isOn = true;
    }
  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }
  accelerate(value) {
    if (this.speed + value < this.maxSpeed) {
     this.speed += value;
    }
  }
  decelerate(value) {
    if (this.speed - value > 0) {
     this.speed -= value;
    }
  }
  drive(hours) {
    if (this.isOn === true) {
      this.distance += hours * this.speed; 
    }
  }
}
const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);


mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);


console.log(mustang.price); 
mustang.price = 4000;
console.log(mustang.price); 