# # What's the difference between the ParentNode.children and Node.childNodes properties in vanilla JS?

Today’s question comes from [Kieran Barker](https://github.com/kieranbarker):

> What’s the difference between the `ParentNode.children` and `Node.childNodes` properties of an element?

Great question! At first glance, they look pretty similar.

    var elem = document.querySelector('#my-element');
    elem.children;
    elem.childNodes;

There are some subtle and not-so-subtle differences between the two, though. Understanding those differences will help you decide which one to use, and why.

## Return Type  [#](https://gomakethings.com/whats-the-difference-between-the-parentnode.children-and-node.childnodes-properties-in-vanilla-js/#return-type)
Neither `ParentNode.children` nor `Node.childNodes` returns an array.

Both of these are _array-like_: they have a set of indexed values and can be looped through with a `for` loop. However, you can’t use any of the `Array` methods on either of these, since they’re not actually arrays.

    var elem = document.querySelector('#my-element');
    
    // This won't work
    var newArray1 = elem.children.filter(function (item) {
    // Only show items that have the [data-sandwich] attribute
    return item.hasAttribute('data-sandwich');
    });
    // You have to do something like this
    for (var i = 0; i < elem.children.length; i++) {
    console.log(elem.children[i]);
    }

In order to use things like `Array.map()`, `Array.filter()`, or `Array.forEach()`, you’d have to [pass the resulting list through  `Array.from()`](https://gomakethings.com/converting-a-nodelist-to-an-array-with-vanilla-javascript/) first.


    // This works!
    var newArray = Array.from(elem.childNodes).filter(function (item) {
    // Only show items that have the [data-sandwich] attribute
    return item.hasAttribute('data-sandwich');
    });
You _can_  [use  `NodeList.forEach()`](https://gomakethings.com/looping-through-nodelists-with-es6/) with `Node.childNodes`, however.

    // This also works!
    // (Don't forget to polyfill NodeList.forEach())
    elem.childNodes.forEach(function (item) {
	console.log(item);
	});

## Returned items  [#](https://gomakethings.com/whats-the-difference-between-the-parentnode.children-and-node.childnodes-properties-in-vanilla-js/#returned-items)

There’s another not-so-subtle difference between these two properties: the `ParentNode.children` property only returns child _elements_, while the `Node.childNodes` returns _all child nodes_.

Not sure what the difference is?

`Node.childNodes` also includes text that’s not wrapped in an element. `ParentNode.children` does not.

Open up the Console tab in your browsers Developer Tools for [this example demo](https://codepen.io/cferdinandi/pen/VBNGvZ) to see it in action.

`Node.childNodes` also picks up empty text fragments caused by spaces and tabs between elements in your markup, which can be super annoying.

## Which one should you use?  [#](https://gomakethings.com/whats-the-difference-between-the-parentnode.children-and-node.childnodes-properties-in-vanilla-js/#which-one-should-you-use)

If you need to get _all_ content, including stuff that’s not wrapped in an element, use `Node.childNodes`. Otherwise, use `ParentNode.children`.



