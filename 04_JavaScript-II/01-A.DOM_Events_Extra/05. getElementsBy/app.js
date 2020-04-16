//Today, they are mostly history, as querySelector is more powerful and shorter to write.

//So here we cover them mainly for completeness, while you can still find them in the old scripts.

// get all divs in the document
// let divs = document.getElementsByTagName('div');
// Example :

let inputs = table.getElementsByTagName('input');
      
for (let input of inputs) {
  alert( input.value + ': ' + input.checked );
}