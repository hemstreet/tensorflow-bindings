var Utilties = require('./utilities/variables'),
    utilities = new Utilties;

var TensorFlow = function() {};

TensorFlow.prototype.constant = function(data) {
    utilities.constant(data);
};

module.exports = TensorFlow;