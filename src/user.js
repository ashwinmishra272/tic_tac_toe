var express = require('express');
var app = express();
var expressWs = require('express-ws')(app);
var clients = []

app.use(function (req, res, next) {
  console.log('middleware');
  req.testing = 'testing';
  return next();
});

app.get('/', function (req, res, next) {
  console.log('get route', req.testing);
  res.end();
});
// ws.clients.forEach(function each(client) {
//   if (client !== ws && client.readyState === WebSocket.OPEN) {
//     client.send(data, { binary: isBinary });
//   }
// });

app.ws('/', function (ws, req) {
  clients.push(ws);
  ws.on('message', function (msg) {
    clients.forEach(function (client) {
      if (client !== ws) {
        client.send(`message receiving:: ${msg}`)
      }
    })
    // ws.send(`message received:: ${msg}`)
    console.log(msg);
  });
  console.log('socket', req.testing);
  console.log("printing hello world");
});

app.listen(3000);