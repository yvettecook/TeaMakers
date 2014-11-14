var mongoose = require('mongoose');
// var ObjectId = mongoose.Schema.Types.ObjectId;
var Schema = mongoose.Schema;
var Student = require('../src/student')

var projectSchema = new Schema({
  name:               String,
  description:        String,
  makeathon_id:       Object,
  studentPreferences: {type: Object, "default": {}},
});

var Project = mongoose.model('Project', projectSchema);

Project.prototype.setAStudentsRanking = function (student, ranking, callback) {
  this.studentPreferences[student._id] = ranking;
  student.statusSubmitted();
  callback()
};

Project.prototype.listStudentNameRanking = function () {
  var listed = [];
  for(var studentId in this.studentPreferences){
    Student.findOne({ '_id' : studentId }, function(error, data) {
      listed.push(data.name)
      console.log(listed)
    })
  }
  return listed;
};

Project.prototype.method_name = function (first_argument) {
  // body...
};

module.exports = Project
