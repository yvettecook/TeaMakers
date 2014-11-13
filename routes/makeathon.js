var express = require('express');
var router = express.Router();
var makeathons = [
  { id: 12,
    name : 'september',
    description: 'flippin awesome cohort' }
]

router.get('/create', function(req, res) {
  res.render('createmakeathon');
});

router.post('/create', function(req, res) {
  console.log(req.body); //provides all params info in an object
  console.log(req.body.makeathon_name)
  var makeathon_name = req.body.makeathon_name
  // res.render('makeathonmanagement', {makeathonName: makeathonName} )
  res.redirect('/makeathon/:makeathon_name')
});

router.get('/manage', function(req, res) {
  res.render('makeathonmanagement');
  console.log(req.body);
});

router.get('/:id', function(req, res) {

  var makeathon = makeathons.filter(function( makeathon ) {
    return makeathon.id == req.params.id;
  });
  
  var makeathon_name = makeathon[0].name
  var makeathon_description = makeathon[0].description
  
  res.render('makeathonmanagement', {makeathon_name : makeathon_name, makeathon_description : makeathon_description } );
});

  // makeathonProject.save({
  //     makeathon_name: req.param('makeathon_name')
  //     project_name: req.param('project_name')
  //     project_details: req.param('project_details')
  // }, function(error, docs) {
  //     res.redirect('/')
  //   });

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
