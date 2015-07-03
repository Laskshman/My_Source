'use strict';
var ViewModel,
    Observable = require('data/observable').Observable;

ViewModel = new Observable({

    pageTitle: 'Home',
    events: {        
        logout: 'logout'
    },
    
    onLogout: function(){
         this.notify({
            eventName: this.events.logout          
        });       
    },
    
    // additional properties
});

module.exports = ViewModel;