var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res) {
//   res.render('welcomepage');
// });

// router.post('/makeathonmanagement', function(req, res) {
// });

router.get('/create', function(req, res) {
  res.render('createmakeathon');
});

// router.post('/create', function(req, res) {
//   makeathonProject.save({
//       makeathon_name: req.param('makeathon_name')
//       project_name: req.param('project_name')
//       project_details: req.param('project_details')
//   }, function(error, docs) {
//       res.redirect('/')
//     });
// });

// router.get('/manage', function(req, res) {
//   console.log(req.params);
//   res.render('makeathonmanagement', req.query);
// });


router.get('/student/form', function(req, res) {
  res.render('studentform');
});

router.post('/student/manage', function(req, res) {
  console.log(req.body.makeathon_name);
  res.render('studentconfmessage')
});


module.exports = router;
