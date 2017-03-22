exports.exports = function () {

    var api = {
        createUser: createUser
    };

    var mongoose = require('mongoose');

    var UserSchema = require('./widget.schema.server.js')();
    var UserModel = mongoose.model('UserMorningModel', UserSchema);

    return api;

    function createUser(user) {
        return UserModel.create(user);
    }
};