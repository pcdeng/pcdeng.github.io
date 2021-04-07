import { Car } from './common';

class MyClass {
  name = 'car';
  car: Car = new Car();
}

const my = new MyClass();

console.log(my.car);
