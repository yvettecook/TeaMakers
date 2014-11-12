var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var makeathonSchema = new Schema({
	name: 			String,
	projects: 	{type: Array, "default": []},
	students: 	{type: Array, "default": []},
});

var Makeathon = mongoose.model('Makeathon', makeathonSchema);

Makeathon.prototype.addProject = function(project){
	this.projects.push(project);
	project.makeathon_id = this._id;
};

Makeathon.prototype.addStudent = function(student){
	this.students.push(student);
	student.makeathon_id = this._id;
};

module.exports = Makeathon
