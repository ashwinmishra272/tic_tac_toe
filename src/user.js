var express = require('express');
var app = express();
var expressWs = require('express-ws')(app);
var clients = []
pairs = {}

app.use(function (req, res, next) {
  console.log('middleware');
  req.testing = 'testing';
  return next();
});

app.get('/', function (req, res, next) {
  console.log('get route', req.testing);
  res.end();
});
app.ws('/:id', function (ws, req) {
  let pairId = req.params.id
  console.log(pairId)
  if (!pairId && pairId !== 0) {
    console.log("1st if")
    ws.close()

  }
  else if (pairs.hasOwnProperty(pairId) && pairs[pairId].length >= 2) {
    console.log("1st esle if")
    ws.close()

  }
  else if (!pairs.hasOwnProperty(pairId) || pairs[pairId].length == 1) {
    if (!pairs.hasOwnProperty(pairId)) {
      pairs[pairId] = []
    }
    pairs[pairId].push(ws)
    console.log("2nd esle if")
  }
  ws.on('message', function (msg) {
    if (pairs[pairId].length === 1) {
      ws.send("Waiting for your pair")
    }
    else {
      pairs[pairId].forEach(function (client) {
        if (client != ws) {
          client.send(`Joining game ${msg}`)
        }
      })
    }
  })
})
app.listen(3000);