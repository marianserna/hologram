// heroku endpoint (Express) -> Loads index.html & listens for updates from leap.js emitting those via sockets to the browser

const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
// Process JSON
const bodyParser = require('body-parser');

// Middleware: Search for static files in the public folder: Render html
app.use(express.static('public'));
// Looks at incoming body of the request and converts it into json
app.use(bodyParser.json());

// https://expressjs.com/en/starter/basic-routing.html
// express receives posts on the path sensor-update, then it sends a response back to leap.js

// Listening for posts from leap.js. (route in rails)
app.post('/sensor-update', (req, res) => {
  // Sends update to scene first, then it sends response back to leap.js
  io.sockets.emit('sensor-update', req.body);
  res.send('OK');
});

// Allows espress to start listening
server.listen(process.env.PORT || 3000);
