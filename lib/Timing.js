// We may need this for later

var q = require('q');

var Timing = function() {};

Timing.prototype.setTimeout = function(options) {
    var defer = q.defer();

    setTimeout(function() {
        defer.resolve()
    }, options.delay || 1000);

    return defer.promise;
};

module.exports = Timing;