import React from "react";
import Events from "../components/Events";

export default function Day14() {
  return (
    <div>
      <h1>Day14</h1>
      <Events />
    </div>
  );
}

//js vs ts
//ts is a superset of js, it has everything js has and more

// CheatSheet
// https://react-typescript-cheatsheet.netlify.app/

//Q: Have you ever used TypeScript before?
//A: Yes. //explain typescript
// TypeScript is a statically typed language that is a superset of JavaScript.
// It ensures type safety, important for larger applications, gives me more confidence in my code.



//primitive types
let number: number = 1;
let str: string = "hello";
let bool: boolean = true;
let nul: null = null;
let und: undefined = undefined;

//arrays
const numbers: number[] = [1, 2, 3];
const words: string[] = ["a", "b", "c"];
const good: [string, number] = ["Apple", 1000];

//objects
const person: { name: string; age: number } = { name: "John", age: 30 };

interface Person {
  name: string;
  age: number;
  isAlive?: boolean;
}

interface Immortal {
  name: string;
  age: number;
}

const person2: Person = { name: "John", age: 30 };
const people: Person[] = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
];

function addPerson(person: Person) {
  //
}

addPerson({ name: "John", age: 30 } as Person);

type Dogggggg = {
  name: string;
  age: number;
};

//functions
function add(a: number, b: number): number {
  return a + b;
}

const addArrow = (a: number, b: number): number => a + b;

interface Animal {
  name: string;
  age: number;
  breathe: () => void;
  isAlive?: boolean;
}

interface Dog extends Animal {
  bark: () => void;
}

interface Cat extends Animal {
  meow: () => void;
}

const dog1: Dog = {
  name: "Dog1",
  age: 10,
  breathe: () => console.log("Breathing"),
  bark: () => console.log("Barking"),
};

const cat1: Cat = {
  name: "Cat1",
  age: 5,
  breathe: () => console.log("Breathing"),
  meow: () => console.log("Meowing"),
};

//generics
// function addNumToArr(nums: number[], num: number): number {
//   nums.push(num);
//   return num;
// }

// function addWordToArr(words: string[], word: string): string {
//   words.push(word);
//   return word;
// }

// function addBoolToArr(bools: boolean[], bool: boolean): bool {
//   bools.push(bool);
//   return bool;
// }

function addElementToArr<T>(arr: T[], element: T): T {
  arr.push(element);
  return element;
}

addElementToArr<number>([1, 2, 3], 4);
