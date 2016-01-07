var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    queue: [],
    hash: String
});

var User = mongoose.model('User', userSchema);

module.exports = User;