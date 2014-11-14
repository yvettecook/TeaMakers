var mongoose = require('mongoose')

var Makeathon = require('../src/makeathon');
var Project = require('../src/project')
var Student = require('../src/student')

var chai = require('chai')
expect = chai.expect
should = chai.should

var query = null

var dbURI = 'mongodb://localhost/testmakeathon'

describe('a makeathon', function(){

  function isArray(object){
    return Object.prototype.toString.call(object) == '[object Array]';
  }

  before(function(done) {
    mongoose.connect('mongodb://localhost/testmakeathon')
    Makeathon.collection.remove(function(){done()});
  });

  it('starts with no makeathons', function(done) {
      Makeathon.count({}, function(err, count) {
        expect(count).to.eql(0)
        done()
    })
  })

  it('has a name', function(done){
    september = new Makeathon({ name: 'September 2014', projects: ['kickstarter', 'git racer'], blbllbnssdg: "q23434t" });
    september.save(function (err) {
      if (err) console.log(err);
      Makeathon.findOne({	'name' : 'September 2014'	}, function(error, data) {
        console.log(data)
        expect(data['name']).to.eql('September 2014')
        done()
      })
    })
  });


  });
