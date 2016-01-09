var mongoose = require('mongoose');
var User = require('./userModel');

module.exports = {
  addUser: function(req, res, next) {
    var newUser = new User({
      //to check with Harun and Spener
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

  getQueue: function(callback) {
    User.findOne({}, function(err, result) {
      callback(result.queue);
    });
  },

  addSong: function(data, callback) {
    delete data['$$hashKey'];
    User.findOne({}, function(err, result) {
      result.queue.push(data);
      result.save(function(err) {
        console.error(err);
        callback();
      });
    });
  }

};