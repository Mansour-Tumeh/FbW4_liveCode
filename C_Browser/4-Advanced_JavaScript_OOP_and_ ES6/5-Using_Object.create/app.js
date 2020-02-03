let animal = {
    eats : true,
    doesEat : function(){
        return this.eats
    }
}
///create a new object using Object.create
// let rabbit = Object.create(animal, {
//     longEars:{value: 2},
//     jumps:{value: true}})
let rabbit = Object.create(animal)
rabbit.longEars = 2
rabbit.jumps = true
//console.log(rabbit)
//Re Create our person object /////


const persoProtos = {
    greetings : function(){
        return `Hello Mrs ${this.firstName} ${this.lastName}`
    },
    getsMarried : function(newLastName){
        this.lastName = newLastName
    }
}
const person = Object.create(persoProtos)


   person.firstName = 'Farah';
   person.lastName = 'Yousef';
   person.age = 25;
   person.martialStatus = 'single';
  


console.log(person)