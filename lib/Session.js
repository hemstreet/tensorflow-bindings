var Session = function(config) {

    this.config = config;

    this.shell = config.shell;

};

Session.prototype.run = function(commands) {
    this.shell.exec("print sess.run(" + commands + ")");
};

module.exports = Session;