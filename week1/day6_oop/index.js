// const obj3 = {
//   c: "c3",
// };

// const obj2 = {
//   b: "b2",
//   __proto__: obj3,
// };

// const obj1 = {
//   a: "a1",
//   __proto__: obj2,
// };

// console.log(obj1);
// console.log(obj1.a);
// console.log(obj1.b);
// console.log(obj1.c);

// const personProto = {
//   //method
//   sayHi() {
//     //this refers to the object that is invoking the method
//     return `Hi, I'm ${this.name}`;
//   },
// };

// const person1 = {
//   name: "Jack",
//   __proto__: personProto,
// };

// const person2 = {
//   name: "Joe",
//   __proto__: personProto,
// };

// const person3 = {
//   name: "Mike",
//   __proto__: personProto,
// };

// console.log(person1.sayHi());
// console.log(person2.sayHi());
// console.log(person3.sayHi());

//es5 constructor function
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.sayHi = function () {
//   return `Hi, I'm ${this.name}`;
// };

// Person.prototype.growUp = function (year = 0) {
//   //   this.age = this.age + year;
//   this.age += year;
// };

//es6 class syntax
class Person {

  //static methods belong to the class
  //instances do not have access to static methods
  static abc(){
    console.log("abc");
  }

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  //instances have access to prototype methods
  //Person class doesn't
  sayHi() {
    console.log("this", this);
    // return `Hi, I'm ${this.name}`;
  }

  sayHiWithDelay(delay = 1000) {
    setTimeout(() => {
      console.log("1 second later: Hi, my name is", this.name);
    }, delay);
    // setTimeout((function () {
    //     console.log("1 second later: Hi, my name is", this.name);
    // }).bind(this), delay);
  }

  growUp(year = 0) {
    //   this.age = this.age + year;
    this.age += year;
  }
}

const p1 = new Person("Joe", 11);
const p2 = new Person("Jack", 12);
p1.sayHiWithDelay();

// p1.sayHi();

// const sayHi = p1.sayHi.bind(p2);
// sayHi();

const arr = ["a", "b", "c", "d"];

// console.log(arr instanceof Array)

Array.prototype.myForEach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i], i, this);
  }
};

// arr.myForEach((element, index, array) => {
//   console.log(element, index, array);
// });

// function foo(cb){
//     cb()
// }
// function callback(){
//     console.log("i'm the callback");
// }
// foo(callback)

//map, filter, reduce, every, find, includes,
//join, pop, push, reverse, slice, some, sort,
