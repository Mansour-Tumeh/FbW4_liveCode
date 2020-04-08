const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const members = require('./Members');
const logger = require('./middleware/logger')

//initialize a variable called app as an instance object of express
const app = express();



//use your middleware function
// app.use(logger);

//Get all Members
app.get('/api/members', (req, res) => {
    res.json(members);
});

//Get a single Member
app.get('/api/members/:id', (req, res) => {
    // res.send(req.params.id)
    // res.json(members.filter(member => {
    //     return (member.id === parseInt(req.params.id))
    // }))

    // array.some(function(){condition}):boolean--returns true if one atleast follow the condition otherwise false
    const found = members.some(member => (member.id === parseInt(req.params.id)))
    if (found) {
        res.json(members.filter(member => {
            return (member.id === parseInt(req.params.id))
        }))
    } else {
        res.status(404).json({
            msg: `Member with id ${req.params.id} not found`
        })
    }
});


//Set a static folder : use method is for using a middlerware

app.use(express.static('public'));

dotenv.config();
PORT = process.env.PORT;
app.listen(PORT, () => console.log(`app is listening to port ${PORT}`));