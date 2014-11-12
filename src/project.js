var mongoose = require('mongoose');
// var ObjectId = mongoose.Schema.Types.ObjectId;
var Schema = mongoose.Schema;

var projectSchema = new Schema({
  name:         String,
  description:  String,
  makeathon_id: Object
});

var Project = mongoose.model('Project', projectSchema);

module.exports = Project
