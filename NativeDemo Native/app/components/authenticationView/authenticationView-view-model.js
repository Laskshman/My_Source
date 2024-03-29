'use strict';
var ViewModel,
    Observable = require('data/observable').Observable;

ViewModel = new Observable({

    backButtonHidden: true,

    pageTitle: 'Authentication',

    signinVisibility: 'visible',
    registerVisibility: 'collapsed',
    displayName: '',
    email: '',
    password: '',

    events: {
        register: 'register',
        showRegister: 'showRegister',
        showSignin: 'showSignin',
        signin: 'signin',
        logout: 'logout'
    },

    onSignin: function() {
        this.notify({
            eventName: this.events.signin,
            email: this.get('email'),
            password: this.get('password')
        });
    },

    onShowRegister: function() {
        this.set('signinVisibility', 'collapsed');
        this.set('registerVisibility', 'visible');
    },

    onRegister: function() {
        this.notify({
            eventName: this.events.register,
            displayName: this.get('displayName'),
            password: this.get('password'),
            email: this.get('email')
        });
    },
    onLogout: function(){
         this.notify({
            eventName: this.events.logout          
        });       
    },

    onShowSignin: function() {
        this.set('signinVisibility', 'visible');
        this.set('registerVisibility', 'collapsed');
    },

    // additional properties
});

module.exports = ViewModel;