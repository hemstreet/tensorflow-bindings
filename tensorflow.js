'use strict';

var Session = require('Session.js'),
    Variables = require('./utilities/Variables'),
    variables = new Variables;

var TensorFlow = function() {};

TensorFlow.prototype.constant = function(data) {
    variables.constant(data);
};

TensorFlow.prototype.Session = function(config) {
    if(!config) {
        config = null
    }

    return new Session(config);
};

module.exports = TensorFlow;