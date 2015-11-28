var Variables = function(config) {
    this.shell = config.shell;
};

Variables.prototype.constant = function(variableName, value) {
    this.shell.exec(variableName + " = tf.constant(" + value + ")");
};

module.exports = Variables;