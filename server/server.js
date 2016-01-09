var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var bodyParser = require('body-parser');
var SC = require('node-soundcloud');
var db = require('./db/dbConfig')
var User = require('./db/userController')

require('./routes.js')(app, express);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client'));

server.listen(8000);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/test.html');
});

io.on('connection', function (socket) {
  User.getQueue(function(queue) {
    socket.emit('getQueue', queue);
  });
  // socket.emit('news', { hello: 'world' });
  socket.on('addSong', function (newSong) {
    User.addSong(newSong, function() {
      User.getQueue(function(queue) {
        socket.emit('queueUpdated', queue);
        socket.broadcast.emit('queueUpdated', queue);
      });
    });
  });
});