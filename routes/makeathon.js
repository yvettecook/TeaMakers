var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var Makeathon = mongoose.model('Makeathon')
var Project = mongoose.model('Project')

// [
//   { id: 12,
//     name : 'septembewr',
//     description: 'flippin awesome cohort' }
// ]

router.get('/new', function(req, res) {
  res.render('createmakeathon');
});

router.post('/create', function(req, res) {
  console.log(req.body); //provides all params info in an object
  //send request body to database
  var new_makeathon = new Makeathon ({ 
    name: req.param('makeathon_name')
  });

  new_makeathon.save(function(err) {
    if (err) return handleError(err);
  }); 

  var id = new_makeathon._id

  var new_project1 = new Project ({
    name: req.param('project1_name'),
    description: req.param('project1_details'),
    makeathon_id: new_makeathon._id
  });

  new_project1.save(function(err) {
    if (err) return handleError(err);
  });

  new_makeathon.addProject(new_project1); 

  var new_project2 = new Project ({
    name: req.param('project2_name'),
    description: req.param('project2_details'),
    makeathon_id: new_makeathon._id
  });

  new_project2.save(function(err) {
    if (err) return handleError(err);
  });

  new_makeathon.addProject(new_project2); 

  console.log(new_makeathon);
  res.redirect('/makeathon/' + id )
});



router.get('/:id', function(req, res) {

  Makeathon.findById(req.params.id, function(error, data) {
    console.log(data)
    // data.listProjectNamesAndDescriptions(function(projects) {
      res.render('makeathonmanagement', { makeathon : data } );
    // });
  }); 

});




router.get('/manage', function(req, res) {
  res.render('makeathonmanagement');
  console.log(req.body);
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
