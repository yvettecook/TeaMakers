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
    september = new Makeathon({ name: 'September 2014', projects: ['kickstarter', 'git racer'] });
    september.save(function (err) {
      if (err) done(err);
      Makeathon.findOne({	'name' : 'September 2014'	}, function(error, data) {
        expect(data['name']).to.eql('September 2014')
        done()
      })
    });
  });

  it('its name must not be empty', function(done){
    september = new Makeathon({ name: '', projects: ['kickstarter', 'git racer'] });
    september.save(function (err) {
      expect(err).to.not.eql(null)
      done()
    });
  });

  describe('projects', function() {

    before(function(done) {
        september = new Makeathon({ name: 'September' });
        september.save(function(err){
        });
        teamakers = new Project({name: "teamakers", description: 'Putting people in teams.'});
        teamakers.save(function(err){
        });
        yvette = new Student({ name: 'Yvette' })
        yvette.save(function(err){
        })
        september.addProject(teamakers)
        september.addStudent(yvette)
        done()
    })


      it('properly can record a student id and preferences', function(done) {
        var yvetteId = yvette.id
        teamakers.setAStudentsRanking(yvette, 1, function() {
          try {
            expect(september.projects[0].studentPreferences[yvetteId]).to.eql(1)
            done()
          } catch(error) {
            done(error)
          }
        })
      });

      it('**', function() {
        console.log(teamakers.listStudentNameRanking())
      })

    });

  });
