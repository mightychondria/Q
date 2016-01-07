var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var bodyParser = require('body-parser');
var SC = require('node-soundcloud');
var db = require('./db/dbConfig')

require('./routes.js')(app, express);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client'));

server.listen(8000);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/test.html');
});

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});