const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === '/') {
    res.end('<h1>We are at the Last of our Topic today</h1>');
  } else {
    res.end('<h1>Here is about our app</h1>');
  }
});

const PORT = process.env.PORT || 7000;
server.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
