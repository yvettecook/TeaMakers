var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var studentSchema = new Schema ({
  name:         String,
  email:        String,
  makeathon_id: String,
  submitted: 		{type: Boolean, "default": false}
})

var Student = mongoose.model('Student', studentSchema)

Student.prototype.statusSubmitted = function () {
  this.submitted = true
};

module.exports = Student;
