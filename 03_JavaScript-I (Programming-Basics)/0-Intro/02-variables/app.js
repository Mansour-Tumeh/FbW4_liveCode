// var , let , const 
//  let , const were introduced in E.S. 2015 also called ES6 which was an update to the javascript language that included many new features.

/* 
In JavaScript there are two types of scope:

1- Local scope:
Old generation - function Scope
new generation - function Scope , {block}Scope 
2- Global scope

What is Scope:

Scope determines the accessibility (visibility) of these variables.

- Variables defined inside a Local scope are not accessible (visible) from outside the Local scope.
- A variable declared outside a Local scope, becomes GLOBAL.
A global variable has global scope: All scripts and Local scope on a web page can access it. 

In JavaScript there are two types of scope:

1- Local scope:
Old generation - function Scope
new generation - function Scope , {block}Scope 
2- Global scope
*/

//Examples:
//var G & L Scope
// function show(){
//     var num = 7;
//     console.log(num);
// }
// var num = 5;
// {
// var num = 9
// console.log(num);
// }
// show();
// console.log(num);

//let G & L Scope
// function print(){
//     let number = 7;
//     console.log(number);
// }
// let number = 5;
// {
// let number = 9
// console.log(number);
// }
// print();
// console.log(number);

// declare a variable with var
// var name = 'Johe Doe';
// console.log(name);

// declare a variable with let
// let email ='address@domain.suffix'
// console.log(email);

// re assign it , you can re assign when you use var or let
// name = 'Steve Smith';
// email ='steve@webmail.de'

// console.log(name, email);

//Initialising - declaring a variable without giving it any value
// let greeting;
// console.log(greeting);
// greeting = 'Hello mates'
// console.log(greeting);

//Variable Name can consist of :
//letter, number , _, $
//Can not start with a Number
//recomended to use camelCase
/*
camelCase is a naming convention in which a
name is formed of multiple words that are
joined together as a single word with the
first letter of each of the multiple
words capitalized so that each word that
makes up the name can easily be read.
NOTE: first word starts with small ;)
ex: camelCase
*/
// error : let 1name = 'Steve';
//console.log(1name);
// let $currency = 'Not Recommended to Start variable name with $';
// console.log($currency);

// let _lastName = 'Not Recommended to Start variable name with _'
// console.log(_lastName);

//the best way of the variable naming:
// let firstName = 'Steve ';
// let lastName = 'Smith';
// let fullName = firstName + lastName
// console.log(fullName);

//const
//const name = 'Johe';
//console.log(name);
//Can not re assign
//name = 'Steve'
//console.log(name);
//app.js:107 Uncaught TypeError: Assignment to constant variable.

//with const we hav to assign a value
//const x;
//console.log(x);
//app.js:112 Uncaught SyntaxError: Missing initializer in const declaration

//exceptions to const 
// objects and arrays can be re assigned
//objects example :
const person ={
    name: 'Ray',
    age:23
}
 
console.log(person);

//not in this way:
/*person = {
    name: 'Jay',
    age:22
}
*/

//But we can mutate it like below:
person.age=22;
person.name='Jay';
console.log(person);

//arrays example :
const number = [10, 20, 30, 40, 50];
console.log(number);
number.push('Added')
console.log(number);
number[3] = 'Changed'
console.log(number);

//But not :
//number = [44,55];






