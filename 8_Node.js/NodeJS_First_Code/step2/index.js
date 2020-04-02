const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {

  if (req.url === '/') {
    fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
      if (err) throw err
      res.writeHead(200, {
        'Content-Type': 'text/html'
      });

      res.end(content);
    })


  } else if (req.url === '/about') {
    fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
      if (err) throw err
      res.writeHead(200, {

        'Content-type': 'text/html'
      })
      res.end(content)

    })
  } else if (req.url === '/api/users') {
    const users = [{
        name: "Jack",
        age: 30
      },
      {
        name: "Ahmad",
        age: 33
      }
    ]
    res.writeHead(200, {
      'Content-type': 'application/json'
    })

    res.end(JSON.stringify(users))
  }
});




const PORT = process.env.PORT || 7000;
server.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});