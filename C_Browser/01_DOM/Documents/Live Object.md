# DOM: What Does Live Object Mean?
JavaScript DOM Methods such as `document. getElementsByClassName()` returns a live NodeList or HTMLCollection.

For example, if you use  `es = document.getElementsByTagName("p")`  and use for-loop by checking  `es.length`, and for each iteration you add a new "p" element, it'll be a infinite loop, because the number of items (the  `es.length`) also gets updated.

## What does live object mean?
The DOM specifications model says:

> If a collection is live, then the attributes and methods on that object must operate on the actual underlying data, not a snapshot of the data.

Here's another example. When you get a element of “h6”, if there's none, but if later a h6 element is inserted to the page, your previous get result magically contains the item.
Evaluate the following line by line in your browser console.
```js
// demo of live object 
const x = document. getElementsByTagName("h6");

x.length // is 0 
// insert a h6 tag into document body document. body.appendChild(document. createElement("h6"));

// our selection of h6 got updated x.length // is 1
```
## NodeList
**`NodeList`** objects are collections of [nodes](https://developer.mozilla.org/en-US/docs/Glossary/Node/DOM), usually returned by properties such as [`Node.childNodes`](https://developer.mozilla.org/en-US/docs/Web/API/Node/childNodes "The Node.childNodes read-only property returns a live NodeList of child nodes of the given element where the first child node is assigned index 0.") and methods such as [`document.querySelectorAll()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll "The Document method querySelectorAll() returns a static (not live) NodeList representing a list of the document's elements that match the specified group of selectors.").

In some cases, the `NodeList` is _live_, which means that changes in the DOM automatically update the collection. For example, [`Node.childNodes`](https://developer.mozilla.org/en-US/docs/Web/API/Node/childNodes "The Node.childNodes read-only property returns a live NodeList of child nodes of the given element where the first child node is assigned index 0.") is live:

```js
var parent = document.getElementById('parent');
var child_nodes = parent.childNodes;
console.log(child_nodes.length); // let's assume "2"
parent.appendChild(document.createElement('div'));
console.log(child_nodes.length); // outputs "3"
```
In other cases, the  `NodeList`  is  _static,_ where any changes in the DOM does not affect the content of the collection.  [`document.querySelectorAll()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll "The Document method querySelectorAll() returns a static (not live) NodeList representing a list of the document's elements that match the specified group of selectors.")  returns a static  `NodeList`.

It's good to keep this distinction in mind when you choose how to iterate over the items in the `NodeList`, and if you should cache the list's length.

##  HTMLCollection
The **`HTMLCollection`** interface represents a generic collection (array-like object similar to [`arguments`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments "arguments is an Array-like object accessible inside functions that contains the values of the arguments passed to that function.")) of elements (in document order) and offers methods and properties for selecting from the list.

An `HTMLCollection` in the HTML DOM is live; it is automatically updated when the underlying document is changed.

## More Information:

For further information, please refer to: the  following MDN Pages :

 - [MDN NodeList Reference](https://developer.mozilla.org/en-US/docs/Web/API/NodeList)  page.
 -   [MDN HTMLCollection Reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection)  page.
 
