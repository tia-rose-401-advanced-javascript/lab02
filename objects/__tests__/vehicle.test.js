'use strict';

// Constructor Tests

const VehicleConstructor = require('../vehicle-constructor.js');

let types = ['Constructor'];

describe('Vehicles', () => {

  describe('Car', () => {

    function getCar(type) {
      switch(type) {
      case 'Constructor':
        return new VehicleConstructor.Car('foo');
      default:
        return {};
      }
    }

    types.forEach( type => {

      let car = getCar(type);

      it(`${type} (Car) has 4 wheels`, () => {
        expect(car.wheels).toEqual(4);
      });

      it(`${type} (Car) can drive`, () => {
        expect(car.drive()).toBeTruthy();
      });

      it(`${type} (Car) can stop`, () => {
        expect(car.stop()).toBeTruthy();
      });

      it(`${type} (Car) cannot do a wheelie`, () => {
        expect(car.wheelie).toBeUndefined();
      });
    });

  });

  describe(`Motorcycle`, () => {

    function getMotorcycle(type) {
      switch(type) {
      case 'Constructor':
        return new VehicleConstructor.Motorcycle('foo');
      default:
        return {};
      }
    }

    types.forEach( type => {

      let motorcycle = getMotorcycle(type);

      it(`${type} (Motorcycle) has 2 wheels`, () => {
        expect(motorcycle.wheels).toEqual(2);
      });

      it(`${type} (Motorcycle) can drive`, () => {
        expect(motorcycle.drive()).toBeTruthy();
      });

      it(`${type} (Motorcycle) can stop`, () => {
        expect(motorcycle.stop()).toBeTruthy();
      });

      it(`${type} (Motorcycle) cannot do a wheelie`, () => {
        expect(motorcycle.wheelie()).toBeTruthy();
      });

    });

  });

});

// Class Tests

'use strict';

const VehicleClass = require('../vehicle-class.js');

let type = ['Class'];

describe('Vehicles', () => {

  describe('Car', () => {

    function getCar(type) {
      switch(type) {
      case 'Class':
        return new VehicleClass.Car('foo');
      default:
        return {};
      }
    }

    type.forEach( type => {

      let car = getCar(type);

      it(`${type} (Car) has 4 wheels`, () => {
        expect(car.wheels).toEqual(4);
      });

      it(`${type} (Car) can drive`, () => {
        expect(car.drive()).toBeTruthy();
      });

      it(`${type} (Car) can stop`, () => {
        expect(car.stop()).toBeTruthy();
      });

      it(`${type} (Car) cannot do a wheelie`, () => {
        expect(car.wheelie).toBeUndefined();
      });
    });

  });

  describe(`Motorcycle`, () => {

    function getMotorcycle(type) {
      switch(type) {
      case 'Class':
        return new VehicleClass.Motorcycle('foo');
      default:
        return {};
      }
    }

    type.forEach( type => {

      let motorcycle = getMotorcycle(type);

      it(`${type} (Motorcycle) has 2 wheels`, () => {
        expect(motorcycle.wheels).toEqual(2);
      });

      it(`${type} (Motorcycle) can drive`, () => {
        expect(motorcycle.drive()).toBeTruthy();
      });

      it(`${type} (Motorcycle) can stop`, () => {
        expect(motorcycle.stop()).toBeTruthy();
      });

      it(`${type} (Motorcycle) cannot do a wheelie`, () => {
        expect(motorcycle.wheelie()).toBeTruthy();
      });

    });

  });

});

// Factory Tests

'use strict';

const VehicleFactory = require('../vehicle-factory.js');

let typeFac = ['Factory'];

describe('Vehicles', () => {

  describe('Car', () => {

    function getCar(type) {
      switch(type) {
      case 'Factory':
        return new VehicleFactory.Car('foo');
      default:
        return {};
      }
    }

    typeFac.forEach( type => {

      let car = getCar(type);

      it(`${type} (Car) has 4 wheels`, () => {
        expect(car.wheels).toEqual(4);
      });

      it(`${type} (Car) can drive`, () => {
        expect(car.drive()).toBeTruthy();
      });

      it(`${type} (Car) can stop`, () => {
        expect(car.stop()).toBeTruthy();
      });

      it(`${type} (Car) cannot do a wheelie`, () => {
        expect(car.wheelie).toBeUndefined();
      });
    });

  });

  describe(`Motorcycle`, () => {

    function getMotorcycle(type) {
      switch(type) {
      case 'Factory':
        return new VehicleFactory.Motorcycle('foo');
      default:
        return {};
      }
    }

    typeFac.forEach( type => {

      let motorcycle = getMotorcycle(type);

      it(`${type} (Motorcycle) has 2 wheels`, () => {
        expect(motorcycle.wheels).toEqual(2);
      });

      it(`${type} (Motorcycle) can drive`, () => {
        expect(motorcycle.drive()).toBeTruthy();
      });

      it(`${type} (Motorcycle) can stop`, () => {
        expect(motorcycle.stop()).toBeTruthy();
      });

      it(`${type} (Motorcycle) cannot do a wheelie`, () => {
        expect(motorcycle.wheelie()).toBeTruthy();
      });

    });

  });

});




