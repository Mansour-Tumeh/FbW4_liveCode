# NodeList vs HTMLCollection



 ## Difference Between NodeList, HTMLCollection
 

  
•  **NodeList**  is a collection of nodes. Node includes any type such as HTML element, as well as  text nodes.

•  **HTMLCollection**  is a collection of HTML elements only like `<p>…</p>`.

 ## Conclusion 

 - An  `HTMLCollection`  is a collection of HTML elements.

 - A  `NodeList`  is a collection of document nodes.

 - A NodeList and an HTML collection is very much the same thing.

 - Both an HTMLCollection object and a NodeList object is an array-like list (collection) of objects.

 - Both have a length property defining the number of items in the list (collection).

 - Both provide an index (0, 1, 2, 3, 4, ...) to access each item like an array.

 - HTMLCollection items can be accessed by their name, id, or index number.

 - NodeList items can only be accessed by their index number.

 - Only the NodeList object can contain attribute nodes and text nodes.