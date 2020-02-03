
const btnTry = document.getElementById('try')
btnTry.addEventListener('click', myFunction )
function myFunction() {
    var span = document.getElementById("mySPAN");
    var div = document.getElementById("myDIV").contains(span);
    document.getElementById("demo").innerHTML = div;
  }

