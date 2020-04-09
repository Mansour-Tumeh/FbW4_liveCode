const express = require('express');
// const path = require('path');
const dotenv = require('dotenv');
// const logger = require('./middleware/logger');
const exphbs = require('express-handlebars');
let members = require('./Members');

//initialize a variable called app as an instance object of express
const app = express();

//use your middleware functions
//app.use(logger);

//Handlebars Middleware
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

//Body Parser Middleware functions
app.use(express.json());
app.use(
    express.urlencoded({
        extended: false,
    })
);

// Homepage Route
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Add Memeber',
        members: members
    })
})

//Member API Routes

app.use('/api/members', require('./routes/api/members'));

//Set a static folder : use method is for using a middlerware

// app.use(express.static('public'));

dotenv.config();
PORT = process.env.PORT;
app.listen(PORT, () => console.log(`app is listening to port ${PORT}`));