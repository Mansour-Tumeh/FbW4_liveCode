const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const logger = require('./middleware/logger')

//initialize a variable called app as an instance object of express
const app = express();



//use your middleware functions
//app.use(logger);

//Member API Routes

app.use('/api/members', require('./routes/api/members'))


//Set a static folder : use method is for using a middlerware

app.use(express.static('public'));



dotenv.config();
PORT = process.env.PORT;
app.listen(PORT, () => console.log(`app is listening to port ${PORT}`));