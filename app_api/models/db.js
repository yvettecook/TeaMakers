var mongoose = require('mongoose');
var dbURI = 'mongodb://localhost/makeathon';

mongoose.connect(dbURI);

mongoose.connection.on('connected', function() {
  console.log('Mongoose connected to ' + dbURI);
});

mongoose.connection.on('error', function(err) {
  console.log('Mongoose connection error: ' + err);
});

require('./src/makeathon');