const express = require('express');
const path = require('path');
const moment = require('moment');
const members = require('./Members');

const dotenv = require('dotenv');

//initialze a variable called app as instance of express
const app = express();

//Craete a middleware function, when you create a middleware it take in (req, res, next)
const logger = (req, res, next) => {
  // console.log(`Time : ${Date.now()}`)
  console.log(
    `${req.protocol}://${req.get('host')}${
      req.originalUrl
    }: ${moment().format()}`
  );
  next();
};
//Init middleware
app.use(logger);

//this rout Gets all Members
app.get('/api/members', (req, res) => res.json(members));

//Set a static folder : use is a method to include a middleware
app.use(express.static(path.join(__dirname, 'public')));

dotenv.config();
const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`app is listining to port ${PORT}`));