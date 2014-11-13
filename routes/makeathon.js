var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var Makeathon = mongoose.model('Makeathon')

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
    // id: req.param('makeathon_id'),
    name: req.param('makeathon_name')
  });
  new_makeathon.save(function(err) {
    if (err) return handleError(err);
  }); 
  var id = new_makeathon._id
  console.log(id);
  res.redirect('/makeathon/' + id )
});



router.get('/:id', function(req, res) {

  Makeathon.findById(req.params.id, function(error, data) {
    console.log(data)
    res.render('makeathonmanagement', { makeathon : data } );
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
