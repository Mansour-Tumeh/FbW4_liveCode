const express = require('express');
const path = require('path');
const logger = require('./middleware/logger')
const dotenv = require('dotenv');

//initialze a variable called app as instance of express
const app = express();


//Init middleware
//app.use(logger);

//Body Parser Middleware 
//Use body-parser Express Middleware to Parse Text and URL-Encoded Requests
//The json and urlencoded middleware are both part of bodyParser.

//-- https://expressjs.com/en/api.html#express.json
app.use(express.json()) // will parses a raw json

//will parse the url , We pass extended: false to avoid a warning.
/*
If extended is false, you can not post "nested object"
If extended is true, you can do whatever way that you like.
*/
/*
A run-through of the options follows.

extended pretty much a toggle between the qs (when true) and querystring (when false) libraries. qs allows for rich objects and arrays to be encoded, querystring does not. Keep this as false for simple forms (all key-value pairs) and true when you’re sending arrays/maps of values.
*/

//-- https://expressjs.com/en/api.html#express.urlencoded
app.use(express.urlencoded({
    extended: true
}))


//Set a static folder : use is a method to include a middleware
app.use(express.static(path.join(__dirname, 'public')));


//Members API Routes
app.use('/api/members', require('./routes/api/members'))

dotenv.config();
const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`app is listining to port ${PORT}`));