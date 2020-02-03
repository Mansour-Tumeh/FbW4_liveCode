# Primitive Types & Reference Types in JavaScript
An explanation of JavaScript's pass-by-value, which is unlike pass-by-reference from other languages.

## Facts
- JavaScript has 2 kinds of variable types: primitive and reference.
- A fixed amount of memory is reserved after creation of every variable.
- When a variable is copied, it's in-memory value is copied.
- Passing a variable to a function via a call also creates a copy of that variable.

## Primitive Types
The in-memory value of a primitive type is it's actual value (e.g. boolean `true`, number `42`). A primitive type can be stored in the fixed amount of memory available.

- null
- undefined
- Boolean
- Number
- String
- Symbols (ES6)

Primitive types are also known as: scalar types or simple types.

## Reference Types
A reference type can contain other values. Since the contents of a reference type can not fit in the fixed amount of memory available for a variable, the in-memory value of a reference type is the reference itself (a memory address).

- Array
- Object
- Function
- Dates
- Anything Else ...

Reference types are also known as: complex types or container types.

## Code Examples

### Copying a primitive:
```js
var a = 13         // assign `13` to `a`
var b = a          // copy the value of `a` to `b`
b = 37             // assign `37` to `b`
console.log(a)     // => 13
```
The original was not changed, we can only change the copy.

### Copying a reference:
```js
var a = { c: 13 }  // assign the reference of a new object to `a`
var b = a          // copy the reference of the object inside `a` to new variable `b`
b.c = 37           // modify the contents of the object `b` refers to
console.log(a)     // => { c: 37 }
```
The original was also changed, since the reference got copied.
