// heroku endpoint: listens for posts from leap motion device & sends them to three app

const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const bodyParser = require('body-parser');

// Middleware: Search for static files in the public folder
app.use(express.static('public'));
// Looks at incoming body of the request and converts it into json 
app.use(bodyParser.json());

// https://expressjs.com/en/starter/basic-routing.html
// express receives posts on the path sensor-update, then it sends a response back to leap.js
app.post('/sensor-update', (req, res) => {
  console.log(req.body);
  io.sockets.emit('sensor-update', req.body);
  res.send('OK');
});

server.listen(8080);
