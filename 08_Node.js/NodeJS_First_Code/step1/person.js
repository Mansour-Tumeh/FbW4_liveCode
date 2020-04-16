// const person = {
//     name: 'Jay',
//     age: 27
// }
// (function(export, require, module,__filename, __dirname){

// }) // every js file is wrapped by this function
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    inroMe = () => {
        console.log(`My name is ${this.name} and I am ${this.age} years old :)`)
    }
}

console.log(__dirname, __filename);
// export {
//     person
// };


module.exports = Person;