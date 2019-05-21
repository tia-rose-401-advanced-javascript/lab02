
'use strict';

const Vehicle = () => ({
  drive: () => {
    return 'Moving Forward';
  },
  stop: () => {
    return 'Stopping';
  }
});

function Car(name) {
  let car = Object.assign(
    {name},
    {wheels: 4},
    Vehicle()
  );
  return Object.freeze(car);
}

function Motorcycle(name) {
  let motorcycle = Object.assign(
    {name},
    {wheels: 2},
    Vehicle(),
    {wheelie}
  );
  function wheelie() {return 'Wheee!';}

  return Object.freeze(motorcycle);
}

module.exports = {Car, Motorcycle};




