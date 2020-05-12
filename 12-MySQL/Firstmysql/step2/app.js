const express = require('express');
const session = require('express-session');
const path = require('path');
const dotenv = require('dotenv')
const indexRouter = require('./routes')
const app = express();

dotenv.config();

// for body encoding, decoding from the client
app.use(express.urlencoded({extended:false}))

// Create the static folder for public and get CSS, images...
app.use(express.static(path.join(__dirname, 'public')));

//Setting the configuration for the view engine, PUG
app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug')


// use fo express-session and options configuration
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60*60
    }
}))

//Use of the index route
app.use('/',indexRouter);

//Creating 404 error message
app.use((req,res,next) =>{
    let err = new Error('Page not found')
    err.status = 404;
    next(err)
})

//Erro handling function (take error info and send it back to client)
app.use((err,req,res,next) => {
    res.status(err.status || 500).send(err.message)
})

//Listening for the port
app.listen(5000,()=>{
    console.log('Server is running on port 5000')
})

module.exports = app;