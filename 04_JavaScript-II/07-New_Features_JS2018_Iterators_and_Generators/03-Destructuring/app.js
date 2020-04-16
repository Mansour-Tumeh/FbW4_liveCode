//Destructuring Assignment

//let a, b, c;
//[a, b] = [100, 200]


//Rest pattenrn
//[a, b, c, ...x] = [100,200,300, 500, 600, 700]

//({a, b} = { a:100, b: 200})

//({a, b, ...c} = { a:100, b: 200, d:400, e:500})

//Array Destructuring
//const people = ['John', 'Jay', 'Andri']
//const [person1, person2, person3] = people

//Parse array returned from function
// function getPeople(){
//     return ['Mike', 'Jay', 'Andri']
// }

// let person1, person2, person3;
// [person1, person2, person3] = getPeople()

//Object Destructuring
const person = {
    name: 'John Doe',
    age: 32,
    city: 'Miami',
    gender: 'Male',
    sayHello: function(){
      console.log('Hello');
    }
}
//Old ES5
// const name = person.name,
//       age = person.age,
//       city = person.city

//New ES6 Destructuring

const { name, age, city, sayHello} = person

console.log(name, age, city)

sayHello()