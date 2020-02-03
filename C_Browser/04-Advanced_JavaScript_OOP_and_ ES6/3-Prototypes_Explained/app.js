function Student(){
    this.name = 'Marria'
    this.gender = 'Female'
}



let studOne = new Student()
let studTwo = new Student()
Student.prototype.age = 15
Student.prototype.sayHi = function (){
    return `Hi ${this.name}`
}
//console.log(studOne.sayHi())

/*for(x in studOne){
    console.log(x,` : ${studOne[x]}`)
}*/
//console.log(studOne)
//console.log(studTwo.age)
//Prototype is invisible property of an object.
//It returns prototype object of a function to which it links to.

//Person Constructor
function Person(f, l, dob){
    this.firstName = f;
    this.lastName = l;
    this.birthday = new Date(dob)
    // this.calculateAge = function(){
    //     const diff =  Date.now() - this.birthday.getTime();
    //     const ageDate = new Date(diff);
    //     return Math.abs(ageDate.getUTCFullYear() - 1970);
    //   }
}
//Calculate Age
Person.prototype.calculateAge = function(){
    const diff =  Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  let person1 = new Person('Mustafa','Othman','08-19-1987')
  console.log(person1.calculateAge())

  // Gets Marrid
  let person2 = new Person('Marria','Smith','08-19-1996')
  Person.prototype.getsMarrid = function(newLastName){
      this.lastName = newLastName
  }

  person2.getsMarrid(person1.lastName)
  console.log(person2)

  //Get full name
  Person.prototype.getFullName = function(){
      return `${this.firstName} ${this.lastName}`
  }

  console.log(person2.getFullName())
  
  Animal.prototype.calLges = function(){
      if(this.kind == 'bird'){
          this.legs = 2
      }else {
          this.legs = 4
      }
  }