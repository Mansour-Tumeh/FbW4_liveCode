const btnTry = document.getElementById('try')
 btnTry.addEventListener('click', myFunction)

function myFunction() {
    var x = document.getElementById("myP").nodeName;
    document.getElementById("demo").innerHTML = x;
  }