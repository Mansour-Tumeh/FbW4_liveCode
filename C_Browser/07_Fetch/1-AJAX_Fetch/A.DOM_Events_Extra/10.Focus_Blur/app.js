//Get the two <button> elements
const btnF = document.getElementById('focus')
const btnB = document.getElementById('blur')
const inpt = document.getElementById('userName')
const div = document.getElementById('status')
//Adding the Event Listners
btnF.addEventListener('click', do_focus)
btnB.addEventListener('click', do_blur)
inpt.addEventListener('focus',logf)
inpt.addEventListener('blur',logb)

//Defining the Event Handler
function do_focus(){
    document.getElementById('userName').focus();
}

function do_blur(){
    document.getElementById('userName').blur();
}

function logf(){
    div.innerHTML = "on Focus"
}

function logb(){
    div.innerHTML = "on Blur"
}