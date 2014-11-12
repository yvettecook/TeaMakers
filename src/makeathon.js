var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var makeathonSchema = new Schema({
	name: 	String,
});

var Makeathon = mongoose.model('Makeathon', makeathonSchema);

module.exports = Makeathon