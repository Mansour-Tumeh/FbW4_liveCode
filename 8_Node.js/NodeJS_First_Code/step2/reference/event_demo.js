const EventEmitter = require('events');

//Create class

class MyEmitter extends EventEmitter {}

//Init object
const myEmitter = new MyEmitter();

//Event listener
//THE EVENT LISTNER NEEDS TO BE SEPERTAED TO HAVE IT IN DIFFERENRT PLACES WITH OTHER CALLBACKS
myEmitter.on('serverStart', () => console.log('Event Fired !!!'))

//Init event
//if (200) myEmitter.emit('serverStart')
//if (404) myEmitter.emit('NOTfOUND')
//if (500) myEmitter.emit('SERVERERR')