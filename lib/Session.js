var Session = function(config) {

    this.config = config;

    console.log('Session Setup', this.config);
};

Session.prototype.run = function(commands) {
    console.log('Session Run', commands);
};

module.exports = Session;