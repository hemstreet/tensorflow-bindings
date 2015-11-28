var Shell = function(config) {

    this.config = config || {};

    this.config.shell = (config && config.shell) ? config.shell : require('python').shell;

    this.init();
    this.helloWorld();

};

Shell.prototype.init = function(config) {
    process.stdin.resume();
    process.stdin.setEncoding('utf8');

    setTimeout(function() {
        this.quit();
    }.bind(this), 5000);
};

Shell.prototype.dataCallback = function(err, data) {
    if (err) {
        console.error(err);
    } else {
        process.stdout.write(data);
    }
};

Shell.prototype.exec = function(command) {
    this.config.shell(command, this.dataCallback);
};

Shell.prototype.helloWorld = function() {


    this.config.shell("hello = tf.constant('Hello, TensorFlow!')", this.dataCallback);
    this.config.shell("print sess.run(hello)", this.dataCallback);
    this.config.shell("a = tf.constant(10)", this.dataCallback);
    this.config.shell("b = tf.constant(32)", this.dataCallback);
    this.config.shell("print sess.run(a+b)", this.dataCallback);
};

Shell.prototype.quit = function() {
    this.config.shell("quit()", this.dataCallback);
};


module.exports = Shell;