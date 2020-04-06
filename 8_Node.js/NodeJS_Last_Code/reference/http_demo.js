const http = require('http');

//Create server object
http
    .createServer((req, res) => {
        //Write response
        res.write('<h1>Hello FbW4 Heroes !!</h1>');
        res.end();
    })
    .listen(8000, () => console.log('server is running...'))

// to stop the server use CTRL+^C    
// clear the terminal : CTRL+^L or clear