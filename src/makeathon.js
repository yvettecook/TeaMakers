var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
var Schema = mongoose.Schema;

var makeathonSchema = new Schema({
	id: 				ObjectId,
	name: 			String,
	projects: 	{type: Array, "default": []}, 
	students: 	{type: Array, "default": []}, 
});

var Makeathon = mongoose.model('Makeathon', makeathonSchema);

Makeathon.prototype.addProject = function(project){
	this.projects.push(project);
};

Makeathon.prototype.addStudent = function(student){
	this.students.push(student);
};

module.exports = Makeathon