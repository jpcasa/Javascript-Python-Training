'use strict';

class Student {

  get name() {
    return `${this.firstName} ${this.lastName}`;
  }

  set name(input) {
    let name = input.split(' ');
    this.firstName = name[0];
    this.lastName = name[1];
  }

  constructor({ firstName, lastName, age, interestLevel = 5 } = {}) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.interestLevel = interestLevel;
  }

}

let juan = new Student({ firstName: 'Juan', lastName: 'Casa', age: 26 });

console.log(juan.name);
juan.name = 'Juan Casabianca';
console.log(juan.name);
