/*let animal = {
    kind : 'cat',
    sound : 'meau',
    legs : 4,
    tail : true,
    numOfLegs : function (){
        return this.legs
    }
}

console.log(animal['numOfLegs']())

let bird = animal
//console.log(bird.numOfLegs())
bird.legs = 5
console.log(animal.numOfLegs())
console.log(bird.numOfLegs())*/

//////////////////////////////////////
/*const person = {
    firstName : 'Merry',
    lastName : 'Christmas',
    birthdate : new Date ('9-10-1969'),//transform birthdate into date-object
     calculateAge : function(){
        const diff = Date.now() - this.birthdate.getTime()
        //now (in ms) and  getTime() (in ms)
        //diff is the age in ms
        const ageDate= new Date(diff) 
        //Date.now() return ms starting from 1970
        return Math.abs(ageDate.getUTCFullYear() - 1970)
    }

}
console.log(person['calculateAge']())*/
///////////////////////////////////////////////////
//Person Constructor
function Person(name, dob){
    this.myName = name;
    this.birthdate = new Date(dob)
    this.calAge = function(){
        const diff =  Date.now() - this.birthdate.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}
// the constructor is a function used to build up and object
// a constructor function name must start with Capital letter
const trainer1 = new Person('Mustafa', '08-19-1987')
// to call a constructor we need 'new' keyword
console.log(trainer1.calAge())

