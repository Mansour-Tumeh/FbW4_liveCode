
function greet(name){
    
    if(name =="" || name ==null){
        txt="There is no name!"
    }else{
    txt = `Hello ${name} ! How are you today?`}
    return txt;
}
let greetings = greet('Safwan');
document.write(greetings);

//////////////////////////////
let person = prompt("Please enter your name:", "Harry Potter");
document.write(person)
//////////////////////////////
let person = prompt("Please enter your name:");
document.write(person)
//////////////////////////////
function greet(){
    let name = prompt("Please enter your name:");
    if(name =="" || name ==null){
        txt="There is no name!"
    }else{
    txt = `Hello ${name} ! How are you today?`}
    document.write(txt)
}
greet();

//////////////////////////////

function Square(a){
    return a*a
}

function controlSquareNum(num){
    if(num == '' || num == null){
        return "There is no input !!"
    }
    else { 
        return `The Result is ${Square(num)}`}
    
    
}
let number = prompt("Please enter a number :");
let result = controlSquareNum(number);
document.write(result);