import Header from './header.js'
import Body from './body.js'
import Footer from './footer.js'

//creating the components
let h =  Header.create()
let b =  Body.create()
let f =  Footer.create()

//appending the components to my document
document.body.append(h)
document.body.append(b)
document.body.append(f)

//Handling the input event

document.getElementById('inpt').addEventListener('keyup', (e)=>{
document.getElementById('title').innerHTML = e.target.value
})
