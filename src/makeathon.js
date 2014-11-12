var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
var Schema = mongoose.Schema;

var makeathonSchema = new Schema({
	id: 				ObjectId,
	name: 			String,
	projects: 	{type: Array, "default": []}, 
});

var Makeathon = mongoose.model('Makeathon', makeathonSchema);

Makeathon.prototype.addProject = function(project){
	this.projects.push(project);
};

module.exports = Makeathon