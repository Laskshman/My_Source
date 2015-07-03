'use strict';
var isInit = true,
    helpers = require('../../utils/widgets/helper'),

    service = require('./home-service'),

    // additional requires
    viewModel = require('./home-view-model');

function onLogout() {
    viewModel.onLogout();
    helpers.navigate('./authenticationView');
}

// additional functions
function pageLoaded(args) {
    var page = args.object;

    helpers.platformInit(page);
    page.bindingContext = viewModel;
    // additional pageLoaded

    if (isInit) {
        isInit = false;

        viewModel.on(viewModel.events.Logout, onLogout);
        // additional pageInit
    }
}

exports.pageLoaded = pageLoaded;