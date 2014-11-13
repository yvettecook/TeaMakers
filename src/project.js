var mongoose = require('mongoose');
// var ObjectId = mongoose.Schema.Types.ObjectId;
var Schema = mongoose.Schema;

var projectSchema = new Schema({
  name:               String,
  description:        String,
  makeathon_id:       Object,
  studentPreferences: {type: Object, "default": {}},
});

var Project = mongoose.model('Project', projectSchema);

Project.prototype.setAStudentsRanking = function (student, ranking) {
  this.studentPreferences[student._id] = ranking;
};

module.exports = Project
