// get the element
let firstDiv = .sty('elem');

// make its background red
firstDiv.style.background = 'red';

//Also, there’s a global variable named by id that references the element:

// sDiv is a reference to DOM-element with id="sDiv"
sDiv.style.background = 'blue';

// id="elem-content" has a hyphen inside, so it can't be a variable name
// ...but we can access it using square brackets: window['elem-content']


//That’s unless we declare a JavaScript variable with the same name, then it takes precedence:

let sDiv = 5; // now elem is 5, not a reference to <div id="elem">