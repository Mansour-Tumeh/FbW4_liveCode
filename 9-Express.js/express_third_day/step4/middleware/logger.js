const moment = require('moment');

//Craete a middleware functio, when you create a middleware it take in (req, res, next)
const logger = (req, res, next) => {
    // console.log(`Time : ${Date.now()}`)
    console.log(
        `${req.protocol}://${req.get('host')}${
        req.originalUrl
      }: ${moment().format()}`
    );
    next();
};

module.exports = logger