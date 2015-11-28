var TensorFlow = require('../TensorFlow'),
    tf = new TensorFlow();

    tf.constant("hello", 'Hello world');

var sess = tf.Session();

sess.run(hello);