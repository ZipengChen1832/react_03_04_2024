//DOM Manipulation

// const titleElement = document.querySelector(".title")

// document.querySelectorAll

// let count = 0;

// button.addEventListener("click", ()=>{
//     count = count + 1;
//     titleElement.textContent = count;
// })

// var, let, const

// //besides these five, almost everything else is an object
// var str = "qwjdioqw";
// var num = 1;
// var bool = true;
// var und = undefined;
// var nul = null;

// console.log(str, typeof str);
// console.log(num, typeof num);
// console.log(bool, typeof bool);
// console.log(und, typeof und);
// console.log(nul, typeof nul);

//hoisting
// console.log(todo)
// var todo = "learn coding"

// let a = 0;
// a = 12412

// const b = 124
// b = 192847124

// const obj = {
//   a: "a",
//   b: "b",
// };

// const obj1 = {
//   a: "a",
//   b: "b",
// };
// const arr = [1, 2, 3, 4];

// const keyName = "a"
// console.log(obj[keyName]);

// const length = arr.length;
// console.log(arr[length - 1]);

// const inputElem1 = document.querySelector(".input1");
// const inputElem2 = document.querySelector(".input2");
// const button = document.querySelector(".click-btn");

// button.addEventListener("click", () => {
//   const value1 = Number(inputElem1.value);
//   const value2 = Number(inputElem2.value);
//   console.log("value1", typeof value1, value1);
//   console.log("value2", typeof value2, value2);
//   console.log("result", value1 + value2);
// });

// const person = {
//     name: "joe"
// }

// if (person.age) {
//   console.log("truthy");
// } else {
//   console.log("falsy");
// }

// if (!1 == 1) {
//   console.log("truthy");
// } else {
//   console.log("falsy");
// }

// const type = "A"

// switch(type){
//     case "A":
//         console.log("the type is A")
//         break;
//     case "B":
//         console.log("the type is B")
//         break;
//     case "C":
//         console.log("the type is C")
//         break;
//     default:
//         console.log("unknown type")
//         break;
// }

// const scoped = "outside";

// function foo() {
//   //   const scoped = "inside";
//   const privateVar = "private";
//   console.log(scoped);
// }

// foo();

// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(1,2));

// const address = "21984u2198";

const person1 = {
  name: "Joe",
  age: 11,
  gender: "M",
  address: {
    address1: "123",
    address2: "something random",
    zip: 100000,
  },
};

//shallow copy
const person3 = {
  ...person1,
  //   name: person1.name,
  //   age: person1.age,
  //   gender: person1.gender,
};

// const person1Str = JSON.stringify(person1);
// const personDeepCopy = JSON.parse(person1Str);
// const personDeepCopy = JSON.parse(JSON.stringify(person1))
const personDeepCopy = structuredClone(person1)
personDeepCopy.address.address1="eqwewqewq"
// console.log(person1);
// console.log(personDeepCopy);


// console.log(person3);

// person3.name = "Jack";
person3.address.zip = 200000;

// console.log("person1", person1);
// console.log("person3", person3);

// const person2 = {
//   name: "Joe",
//   age: 11,
//   gender: "M",
// };

// const person1Address = person1.address.address2
// const person2Address = person2.address?.address2
// console.log(person2Address);

// const { age, gender1, address: personAddress, name } = person;
// console.log(address);

// const pname = person.name;
// const age = person.age;
// const gender = person.gender

// const personElem = document.querySelector(".person");
// const nameElem = document.createElement("div");
// nameElem.textContent = person.name;
// const ageElem = document.createElement("div");
// ageElem.textContent = person.age;
// personElem.append(nameElem, ageElem);



//TODO
//array destructure
//rest operator / spread operator
