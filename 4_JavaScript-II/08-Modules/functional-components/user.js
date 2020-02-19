
// let greeting = "welcome back"

// function hi(user){
//     return `${greeting} ${user} in Javascript Module`
// }

// //add export after declaration 

// export {hi}

//add export before declaration
// export function sqr(num){
//     return num*num
// }
// function square(num){
//     return "I am here for making proplems !!!"
// }
// export {square, makeElement}
// export default function sqr(num){
//     return num*num
// }

// function makeElement(tagName, text, background){
//     let el = document.createElement(tagName);
//     el.append(text);
//     el.style.background = background;
//     el.style.color = '#fff';
//     el.style.height = "100px";
//     document.body.append(el)
// }



function  createUser(){
let li = document.createElement('li')

let input = document.querySelector('input')

li.innerText = input.value

document.body.append(li)



}



function delet(){
let li = document.querySelector('li')
li.parentNode.removeChild(li)


}



function change(){
let input = document.querySelector('input')
let li = document.querySelector('li')
li.innerText = input.value


}


export{delet,change}
export default createUser

