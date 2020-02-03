//onclick="myFunction()"
const btnTry = document.getElementById('try')

console.log(btnTry)

btnTry.addEventListener('click',myFunction)

function myFunction() {
    let h = document.getElementById("myH2");
    h.insertAdjacentHTML("afterbegin", "<p>My new paragraph</p>");
  }