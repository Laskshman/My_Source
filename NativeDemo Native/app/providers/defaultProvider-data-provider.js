var provider,
    TelerikBackendServices = require('../everlive/everlive.all.min');

provider = new TelerikBackendServices({

    url: '//platform.telerik.com/bs-api/v1/',

    apiKey: 'vHav5riKi5AqSbnf',
    scheme: 'https'
});

module.exports = provider;