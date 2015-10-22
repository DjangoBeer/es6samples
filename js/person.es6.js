// 1. Classes
export class Person {
  // 2. Default parameter
  constructor(firstName, lastName, age=18) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
  }

  getIdentityCard() {
    // 5. Shorthand Object Literals
    let name = this._firstName + ' ' + this._lastName;
    let age = this._age;
    return {name, age}
  }

}