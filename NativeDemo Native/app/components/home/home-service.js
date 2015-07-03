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

Service.prototype.logout = function() {
   return dataService.Users.logout();
};

// additional properties

module.exports = new Service();