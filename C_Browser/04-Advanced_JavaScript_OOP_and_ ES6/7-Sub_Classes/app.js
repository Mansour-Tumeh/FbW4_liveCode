// class Person {
//     constructor(firstName, lastName){
//         this.fName = firstName;
//         this.lName = lastName;
        
//     }

    // greeting(){
    //     return `Hello there ${this.fName} ${this.lName}`
    // }

  
    //}
    // class Customer extends Person{
    //     constructor(cFirstName, cLastName, phoneN, memberShip){
    //         super(cFirstName, cLastName)
    //         this.phone = phoneN
    //         this.membership = memberShip
    //     }

    //     giveMemebrshipCost(cost){
    //         this.memcost = cost
    //     }
    // }

    // let c1 = new Customer('Harris','Riazh','555-5555','standered')

    // console.log(c1)
////////////Exercises////////////////////////////
class Prop {
    constructor(location, size){
        this.location = location;
        this.size = size
    }
}

class Flat extends Prop {
    constructor(location, size, owner, price){
        super(location, size)
        this.owner = owner;
        this.price = price
    }

    calculatePrice(){
        return this.price * this.size
    }
}

class Clinice extends Flat {
    constructor(location, size, owner, price, types , doctors){
        super(location, size, owner, price)
        this.types = types
        this.doctors = doctors
    }
}

class Person {
    constructor(firstName, lastName){
        this.fName = firstName;
        this.lName = lastName;
        
    }
    greeting(){
        return `Hello there ${this.fName} ${this.lName}`
    }
}

class Doctor extends Person{
    constructor(firstName, lastName, specialization, exp){
        super(firstName, lastName)
        this.specialization = specialization
        this.exp = exp
    }
}

let owner = new Person ('Harris','Riazh')
let d1 = new Doctor('Harris', 'Riazh','Mental', 'Advanced')
let d2 = new Doctor('Harris2', 'Riazh','Mental', 'Advanced')
let d3 = new Doctor('Harris3', 'Riazh','Mental', 'Advanced')

let arrOfDoc = [d1,d2,d3]

let clinic = new Clinice('Hammerbrook',625,owner,1000,['Mental'],arrOfDoc)
//clinic.calculatePrice()
console.log(clinic.calculatePrice())
