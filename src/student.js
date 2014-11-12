var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var studentSchema = new Schema ({
  name:         String,
  email:        String,
  makeathon_id: String
})

var Student = mongoose.model('Student', studentSchema)

module.exports = Student;
