'use strict';

const VehicleConstructor = require('./vehicle-constructor.js');
const VehicleClass = require('./vehicle-class.js');

// Implement a car and motorcycle using a Constructor
const mazda = new VehicleConstructor.Car('Mazda 3');
console.log(mazda.name, mazda.drive(), mazda.stop());

const harley = new VehicleConstructor.Motorcycle('Harley');
console.log(harley.name, harley.wheelie(), harley.stop());

// Implement a car and motorcycle using a Class
let car =  new VehicleClass.Car('Honda', 4);
console.log(car.name, car.wheels, car.drive(), car.stop());

let vespa =  new VehicleClass.Motorcycle('Vespa', 2);
console.log(vespa.name, vespa.wheels, vespa.wheelie(), vespa.stop());

// Implement a car and motorcycle using a Factory
