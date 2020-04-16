// import {hi} from './user.js';
// console.log(hi('FbW4'))

// import {sqr} from './user.js';
// console.log(sqr(2))
// import {square, makeElement} from './user.js';
//  import squr from './user.js'

//  console.log(squr(2))
//  console.log(square())

//  makeElement('h3',square(),'red')


 let deleteBtn = document.createElement('button')
 deleteBtn.append(document.createTextNode('Delete'))
document.body.append(deleteBtn)
 let changeBtn = document.createElement('button')
 changeBtn.append(document.createTextNode('Change'))
 document.body.append(changeBtn)

 let input = document.createElement('input')

 document.body.append(input)

 let createBtn = document.createElement('button')
 createBtn.append(document.createTextNode('create'))
 document.body.append(createBtn)
import create from './user.js'
import{change,delet} from './user.js'

deleteBtn.addEventListener("click",delet)
changeBtn.addEventListener('click',change)


createBtn.addEventListener('click',create)





