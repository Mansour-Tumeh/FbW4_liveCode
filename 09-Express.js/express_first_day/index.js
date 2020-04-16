const express = require('express')


// const path = require('path');
// const fs = require('fs');


const dotenv = require('dotenv')

const server = express()

// add .html  to the filePath needs to have the Router from express


server.use(express.static('public'))



dotenv.config();
// console.log(process.env.PORT)

const PORT = process.env.PORT;
server.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});