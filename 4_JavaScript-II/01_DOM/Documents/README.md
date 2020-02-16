# How To Traverse the DOM

The Document Object Model **(DOM)** is a standard convention for accessing and manipulating elements within HTML and XML documents. Elements in the DOM are organized into a tree-like data structure that can be traversed to navigate, locate, or modify elements and/or content within an XML/HTML document.


## Requirements:

A programming language or library which implements the DOM API, such as JavaScript, VBScript, C#, Java, etc. The following How-To will utilize the JavaScript programming language in its examples.

## Procedure:

The DOM tree can be imagined as a collection of “nodes” related to each other through parent-child and sibling-sibling relationships. Each node represents an object in an XML document including elements, textual content, and comments. Each XML document contains a single root element (<html> in HTML, for example) from which all other nodes ultimately descend.

DOM tree traversal may be accomplished through the use of six basic properties. All properties, except childNodes, contain a reference to another node object. The childNodes property contains a reference to an array of nodes.

 - previousSibling   
 - nextSibling   
 - childNodes   
 - firstChild   
 - lastChild  
 - parentNode

Given the following HTML:

    <ul>
    <li>node</li>
    <li><span>node</span><a href="#">node</a><p>node</p></li>
    <li>node</li>
    </ul>
The following schematic succinctly illustrates the relationship between nodes:
![enter image description here](https://www.qualitestgroup.com/images/howto/DOMTree_HowTo.png)

> NB: The above schematic does not take into account text nodes, which
> would be considered child nodes of their containing element node.

Given this information, traversing the DOM tree becomes a matter of utilizing the above six properties. For example, to iterate through child nodes for a particular parent node we could use the following loop:


    for (var i = 0; i < rootNode.childNodes.length; i++)
    {
     var curChild = rootNode.childNodes[i];
     DoSomething(curChild);
     }
   
  

Or if we do not wish to deal with array indices:

    for (var curChild = rootNode.firstChild; curChild != null; curChild = curChild.nextSibling)
    DoSomething(curChild);
We can also traverse up the DOM tree, using the parentNode property.

    while (node = node.parentNode)
     DoSomething(node);
This will traverse the DOM tree until it reaches the root element, when the parentNode property becomes null.

The above examples assumed you already had a reference to an existing node. There are several standard methods one can use to select one or more nodes from an XML document. The three most popular are:

 - getElementById  
 - getElementsByClassName  
 - getElementsByTagName

The first and second methods are more suited to an HTML environment. They use the values for the “id” and “class” attributes of an HTML element to locate the node(s) within the DOM tree. The final method, however, is suitable for all XML documents because all XML documents are made up of tags.

Examples:

    var rootNode = document.getElementById("root");
    var paragraphs = document.getElementsByTagName("p");

One final piece of information important to traversing the DOM tree is the understanding the different types of nodes involved. Most often, you will be dealing with ELEMENT and TEXT nodes. A node’s type can be differentiated using the constant nodeType property

    if (node.nodeType == Node.ELEMENT_NODE)
        // do element processing
    else if (node.nodeType == Node.TEXT_NODE)
		// do text processing
	else
		// something else (comments, document fragments, etc)
From this short tutorial one can see that the DOM tree can be easily traversed using a selection of basic properties and methods available.

## More Information:

For further information, please refer to: the [MDN DOM Reference](https://developer.mozilla.org/en-US/docs/DOM/DOM_Reference) page.