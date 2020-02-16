//The elem.matches(css) does not look for anything, it merely checks if elem matches the given CSS-selector. It returns true or false.

//The method comes in handy when we are iterating over elements (like in an array or something) and trying to filter out those that interest us.

// can be any collection instead of document.body.children
for (let elem of document.body.children) {
    if (elem.matches('a[href$="zip"]')) {
      alert("The archive reference: " + elem.href );
    }
  }