// PRIMITIVE

// String
const name = 'John Doe';
// Number
const age = 45;
// Boolean
const hasKids = true;
// Null
const car = null;
// Undefined
let test;
// Symbol
const sym = Symbol();

// REFERENCE TYPES - Objects
// Array
const hobbies = ['movies', 'music'];
// Object literal
const address = {
  city: 'Boston',
  state: 'MA'
}
const today = new Date();
console.log(today);
console.log(typeof today);

//REFERENCE vs PRIMITIVE TYPES
let x = {
  name: 'Safwan',
  age: 23
  };
  let y = 'abc';
  let a = x;
  let b = y;
  x.name = 'Saf1';
  console.log(a);
  //console.log(x, y, a, b); // -> 10, 'abc', 10, 'abc'