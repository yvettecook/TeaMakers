var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var studentSchema = new Schema ({
  name:         String,
  email:        String,
  makeathon_id: String
})

var Student = mongoose.model('Student', studentSchema)

Student.prototype.setRanking = function (project, ranking) {
  project.studentPreferences[this._id] = ranking;
};

module.exports = Student;
