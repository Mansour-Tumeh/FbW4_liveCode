import Human from './person.js'
import{makeHimSayhisname,makeHerSayherage} from './person.js'
let fabian = new Human('Fabian', 23, 'male')
//console.log(fabian.sayYourName())

console.log(makeHimSayhisname(fabian))

let mariam = new Human('Mariam',18, 'female')

console.log(makeHerSayherage(mariam))