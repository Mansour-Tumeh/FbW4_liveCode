const express = require('express');
const path = require('path');

const dotenv = require('dotenv');

//initialze a variable called app as instance of express
const app = express();

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

//Set a static folder : use is a method to include a middleware
app.use(express.static(path.join(__dirname, 'public')));

dotenv.config();
const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`app is listining to port ${PORT}`));
