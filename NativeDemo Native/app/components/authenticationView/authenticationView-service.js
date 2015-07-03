'use strict';
var _,

    _consts,
    dataService = require('../../providers/defaultProvider-data-provider'),
    localSettings = require('application-settings'),

    // additional requires
    consts;

function Service() {}

_consts = {
    accessTokenKey: 'accessToken'
};

function validateArgs(args) {
    if (!args.email) {
        throw new Error('Service: login - missing email');
    }

    if (!args.password) {
        throw new Error('Service: login - missing password');
    }
}

Service.prototype.signin = function(args, successCallback, errorCallback) {
    validateArgs(args);

    return dataService.Users.login(args.email, args.password)
        .then(function(e) {
            localSettings.setString(_consts.accessTokenKey, e.result.access_token);

            successCallback();
        }, errorCallback);
};

Service.prototype.register = function(args, successCallback, errorCallback) {
    validateArgs(args);

    return dataService.Users.register(args.email, args.password, {
            Email: args.email,
            DisplayName: args.displayName
        })
        .then(successCallback, errorCallback);
};

Service.prototype.logout = function() {
   return dataService.Users.logout();
};

Service.prototype.getCurrentUser = function() {
    return dataService.Users.currentUser();
};

Service.prototype.isAuthenticated = function() {
    return localSettings.getString(_consts.accessTokenKey);
};

Service.prototype.setAuthorization = function() {
    dataService.Users.setAuthorization(localSettings.getString(_consts.accessTokenKey), 'bearer');
};

// additional properties

module.exports = new Service();