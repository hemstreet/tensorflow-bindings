var TensorFlow = require('../TensorFlow'),
    tf = new TensorFlow();

var hello = tf.constant('hello', 'Hello world');

var sess = tf.Session();

sess.run(hello);