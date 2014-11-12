var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('createmakeathon');
});

// router.post('/makeathonmanagement', function(req, res) {
// });

router.get('/createmakeathon', function(req, res) {
  res.render('createmakeathon');
});

router.get('/createmakeathon/makeathonmanagement', function(req, res) {
  res.render('makeathonmanagement');
});


module.exports = router;
