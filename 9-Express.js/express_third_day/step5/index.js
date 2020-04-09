const express = require('express');
const path = require('path');
const logger = require('./middleware/logger')
const dotenv = require('dotenv');

//initialze a variable called app as instance of express
const app = express();


//Init middleware
//app.use(logger);



//Set a static folder : use is a method to include a middleware
app.use(express.static(path.join(__dirname, 'public')));


//Members API Routes
app.use('/api/members', require('./routes/api/members'))

dotenv.config();
const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`app is listining to port ${PORT}`));