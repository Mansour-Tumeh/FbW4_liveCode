//Ancestors of an element are: parent, the parent of parent, its parent and so on. The ancestors together form the chain of parents from the element to the top.

//The method elem.closest(css) looks the nearest ancestor that matches the CSS-selector. The elem itself is also included in the search.

//In other words, the method closest goes up from the element and checks each of parents. If it matches the selector, then the search stops, and the ancestor is returned.

let chapter = document.querySelector('.chapter'); // LI

let x = chapter.closest('.book')
  let y = chapter.closest('.contents')
  let z = chapter.closest('h1')
  console.log(x); // UL
  console.log(y); // DIV

  console.log(z); // null (because h1 is not an ancestor)