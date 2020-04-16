const express = require('express');
const path = require('path');

const dotenv = require('dotenv');

//initialze a variable called app as instance of express
const app = express();

const members = [{
        id: 1,
        name: 'Yasmin Menke',
        email: 'yasmin@gmail.com',
        status: 'active'
    },
    {
        id: 2,
        name: 'Malina Heggelke',
        email: 'malina@gmail.com',
        status: 'inactive'
    },
    {
        id: 3,
        name: 'Safwan Krüsmann',
        email: 'safwan@gmail.com',
        status: 'active'
    }
];

//this rout Gets all Members
app.get('/api/members', (req, res) => res.json(members))

//Set a static folder : use is a method to include a middleware
app.use(express.static(path.join(__dirname, 'public')));

dotenv.config();
const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`app is listining to port ${PORT}`));