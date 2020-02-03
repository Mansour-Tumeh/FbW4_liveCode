# Mouse events basics

In this chapter we’ll get into more details about mouse events and their properties.

Please note: such events may come not only from “mouse devices”, but are also from other devices, such as phones and tablets, where they are emulated for compatibility.

## Mouse event types

We can split mouse events into two categories: “simple” and “complex”

### Simple events

The most used simple events are:

`mousedown/mouseup`

Mouse button is clicked/released over an element.

`mouseover/mouseout`

Mouse pointer comes over/out from an element.

`mousemove`

Every mouse move over an element triggers that event.

`contextmenu`

Triggers when opening a context menu is attempted. In the most common case, that happens when the right mouse button is pressed. Although, there are other ways to open a context menu, e.g. using a special keyboard key, so it’s not exactly the mouse event.

…There are several other event types too, we’ll cover them later.

### Complex events
`click`

Triggers after  `mousedown`  and then  `mouseup`  over the same element if the left mouse button was used.

`dblclick`

Triggers after a double click over an element.

Complex events are made of simple ones, so in theory we could live without them. But they exist, and that’s good, because they are convenient.

### Events order

An action may trigger multiple events.

For instance, a click first triggers  `mousedown`, when the button is pressed, then  `mouseup`  and  `click`  when it’s released.

In cases when a single action initiates multiple events, their order is fixed. That is, the handlers are called in the order  `mousedown`  →  `mouseup`  →  `click`.

## Getting the button: which

Click-related events always have the  `which`  property, which allows to get the exact mouse button.

It is not used for  `click`  and  `contextmenu`  events, because the former happens only on left-click, and the latter – only on right-click.

But if we track  `mousedown`  and  `mouseup`, then we need it, because these events trigger on any button, so  `which`  allows to distinguish between “right-mousedown” and “left-mousedown”.

There are the three possible values:

-   `event.which == 1`  – the left button
-   `event.which == 2`  – the middle button
-   `event.which == 3`  – the right button

The middle button is somewhat exotic right now and is very rarely used.

## Modifiers: shift, alt, ctrl and meta

All mouse events include the information about pressed modifier keys.

Event properties:

-   `shiftKey`:  Shift
-   `altKey`:  Alt  (or  Opt  for Mac)
-   `ctrlKey`:  Ctrl
-   `metaKey`:  Cmd  for Mac

They are  `true`  if the corresponding key was pressed during the event.


## Coordinates: clientX/Y, pageX/Y

All mouse events have coordinates in two flavours:

1.  Window-relative:  `clientX`  and  `clientY`.
2.  Document-relative:  `pageX`  and  `pageY`.

For instance, if we have a window of the size 500x500, and the mouse is in the left-upper corner, then  `clientX`  and  `clientY`  are  `0`. And if the mouse is in the center, then  `clientX`  and  `clientY`  are  `250`, no matter what place in the document it is, how far the document was scrolled. They are similar to  `position:fixed`.