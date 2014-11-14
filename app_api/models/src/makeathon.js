var mongoose = require('mongoose');
var Schema = mongoose.Schema;
uniqueValidator =require('mongoose-unique-validator')

var Student = require('./student')
var Project = require('./project')

var makeathonSchema = new Schema({
	name: 			{type: String, required: true },
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

Makeathon.prototype.listProjectNames = function () {
	var allProjectNames = []
	this.projects.forEach(function(project){
		allProjectNames.push(project.name);
	});
	return allProjectNames;
};

//
Makeathon.prototype.listProjectNamesAndDescriptions = function () {
	var projectNamesAndDescriptions = {}
	this.projects.forEach(function(project){
		projectNamesAndDescriptions[project.name] = project.description
	});
	return projectNamesAndDescriptions
};

Makeathon.prototype.countProjects = function () {
	return this.projects.length;
};

Makeathon.prototype.countStudents = function () {
	return this.students.length;
};

Makeathon.prototype.isStudentsSubmitted = function () {
	var studentStatus = this.eachStudentStatus();
	if(studentStatus[0] === false) {
		return false
		} else {
			return true
		}
};

Makeathon.prototype.eachStudentStatus = function () {
	var studentStatus = []
	this.students.forEach(function(student) {
		studentStatus.push(student.submitted === true)
	});
	return studentStatus.sort();
};

Makeathon.prototype.findMakeathonById = function(id) {
	Makeathon.find({ makeathon_id: id}, function(err, obj) {
		console.log(obj[0].name)
	})
};


module.exports = Makeathon

// this.findOne({ 'local.students': {$elemMatch: {submitted: false}}}, function (err, student) {
// 	if (err) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// });

// Makeathon.prototype.listProjectIDs = function () {
// 	var allProjectIDs = []
// 	this.projects.forEach(function(project){
// 		allProjectIDs.push(project._id);
// 	});
// 	return allProjectIDs;
// };
