const express = require('express');
const path = require('path');
const members = require('./Members');
const logger = require('./middleware/logger')
const dotenv = require('dotenv');

//initialze a variable called app as instance of express
const app = express();


//Init middleware
//app.use(logger);

//this rout Gets all Members
app.get('/api/members/', (req, res) => res.json(members));


//Get single member
app.get('/api/members/:id', (req, res) => {
  // res.send(req.params.id)
  // res.json(members.filter(member => member.id === parseInt(req.params.id)))

  /*JavaScript Array some() Method
The some() method checks if any of the elements in an array pass a test (provided as a function). ... If it finds an array element where the function returns a true value, some() returns true (and does not check the remaining values) Otherwise it returns false. */

  const found = members.some(member => member.id === parseInt(req.params.id))
  if (found) {
    res.json(members.filter(member => member.id === parseInt(req.params.id)))
  } else {
    res.status(400).json({
      msg: `Member with id:${req.params.id} cannot be found`
    })
  }

})

//Set a static folder : use is a method to include a middleware
app.use(express.static(path.join(__dirname, 'public')));

dotenv.config();
const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`app is listining to port ${PORT}`));