class Person {
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender
    }

    sayYourName(){
        return `Hi, My Name is ${this.name}`
    }
}

function makeHimSayhisname(human){
    return human.sayYourName()
}

function makeHerSayherage(human){
    return human.age
}
export{makeHimSayhisname,makeHerSayherage}
export default Person;