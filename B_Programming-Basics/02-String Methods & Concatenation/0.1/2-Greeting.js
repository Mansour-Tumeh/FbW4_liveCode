function greetingAtTime(name){
    let g= "Hello "
    let result = g + name
    return result
}

let myName = `World  ${2+4}  AM` ;
let str = greetingAtTime(myName);
console.log(str);