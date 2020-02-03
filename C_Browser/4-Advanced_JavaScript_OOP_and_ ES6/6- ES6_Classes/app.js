//class basic syntax for declaration 'Erklärung'

class User{
    //we should start with constructor
    constructor(userName, passWord){
        this.name = userName;
        this.pass = passWord
    }
    // we write the properties ninside the constructor
    // but we write the methods out side the constructor
    changePass(newPass){
        this.pass = newPass 
    }
}

// the Usage (die Verwendung):
let u1 = new User('Kumaro','1234')
console.log(u1)

class Person {
    constructor(firstName, lastName, dob){
        this.fName = firstName;
        this.lName = lastName;
        this.birthdate = new Date(dob)
    }

    greeting(){
        return `Hello there ${this.fName} ${this.lName}`
    }

    calAge(){
        const diff = Date.now() - this.birthdate.getTime()
        const ageDate = new Date(diff)
        return Math.abs(ageDate.getUTCFullYear() - 1970)
    }

    getsMarried(newLastName){
        this.lName = newLastName
    }
}

let mustafa = new Person('Mustafa','Othman','08-19-1987')
mustafa.getsMarried('Mercedes')
console.log(typeof Person)
//function sum(){}
//let sum = function (){}
const Book = class{
    constructor(title, author){
        this.title = title;
        this.author = author;
        
    }

    givePrice(price){
        this.price = price;
    }
}

let b1 = new Book('JS','Max')
console.log(b1.price)
//b1.givePrice(45)
//console.log(b1.price)