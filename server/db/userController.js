var mongoose = require('mongoose');
var User = require('./userModel');

module.exports = {
  addUser: function(req, res, next) {
    var newUser = new User({
      //to check with Harun and Spener
      hash: 'test',
      queue: []
    });
    newUser.save(function(err) {
      if (err) console.log("error saving new user", err);
      else {
        console.log('saved new user');
      }
      res.end();
    });
  },

  getQueue: function(req, res, next) {
    User.findOne({ hash: 'test' }, function(err, result) {
      res.json(result.queue);
    })
  },

  addSong: function(req, res, next) {
    User.findOne({ hash: "test" }, function(err, result) {
      result.queue.push({title: 'hello', artist: 'adele'});

      result.save(function() {
        res.end();
      });
    });
  }

};