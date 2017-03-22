module.exports = function (model) {

    console.log("File included");
    var q = require('q');
    var mongoose = require('mongoose');

    var userSchema = require('./user.schema.server')();
    var userModel = mongoose.model('AssignmentUser', userSchema);

    var api = {
        createUser: createUser,
        findUserById: findUserById,
        findUserByUsername: findUserByUsername,
        findUserByCredentials: findUserByCredentials,
        updateUser: updateUser,
        deleteUser: deleteUser
    };
    return api;

    function deleteUser(userId) {
        var deferred = q.defer();
        userModel
            .remove({_id: userId}, function (err, status) {
                if(err){
                    deferred.abort(err);
                } else {
                    deferred.resolve(status);
                }
            });
        return deferred.promise;
    }
    function updateUser(userId, newuser) {
        var deferred = q.defer();
        userModel
            .update({_id: userId, $set:newuser}, function (err, status) {
                if(err){
                    deferred.abort(err);
                } else {
                    deferred.resolve(status);
                }
            });
        return deferred.promise;
    }
    function findUserByCredentials(username, password) {
        var deferred = q.defer();
        userModel
            .findOne({username: username, password: password},
                function (err, user) {
                if(err){
                    deferred.abort(err);
                } else {
                    deferred.resolve(user);
                }
            });
        return deferred.promise;
    }
    function findUserByUsername(username) {
        var deferred = q.defer();
        userModel
            .findOne({username: username}, function (err, user) {
            console.log([err,user]);
                if(err){
                    deferred.abort(err);
                } else {
                    deferred.resolve(user);
                }
            });
        return deferred.promise;
    }

    function findUserById(userId) {
        var deferred = q.defer();
        userModel
            .findById(userId, function (err, user) {
                if(err)
                    deferred.abort(err);
                else
                    deferred.resolve(user);
            });
        return deferred.promise;
    }

    function createUser(user) {
        console.log("model");
        var deferred = q.defer();
        userModel
            .create(user, function (err, doc) {
            if (err) {
                deferred.abort(err);
            } else{
                deferred.resolve();
            }
        });
        return deferred.promise;
    }
};