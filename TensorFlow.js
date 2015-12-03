var Session = require('./lib/Session.js'),
    Shell = require('./lib/Shell.js'),
    Variables = require('./lib/Variables.js');

var TensorFlow = function(config) {

    this.config = config || {};
    this.session = [];

    this.shell = (config && config.shell) ? config.shell : new Shell();
    this.variables = (config && config.variables) ? config.variables : new Variables({
        shell: this.shell
    });

};

TensorFlow.prototype.constant = function(variableName, value) {
    return this.variables.constant(variableName, value);


};

// @todo break out this code into lib/Session.js
// use getters for session retrieval
TensorFlow.prototype.Session = function(config) {

    if(!config) {
        config = {};
    }

    config.shell = this.shell;

    var index = this.session.length,
        sess = new Session(config);

    this.session.push(sess);

    return this.session[index];

};

module.exports = TensorFlow;