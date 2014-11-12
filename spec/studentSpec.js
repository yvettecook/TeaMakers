'use strict'

var Student = require('../src/student')
var Makeathon = require('../src/makeathon')
var student = null
var september = null

describe('a student', function() {

  beforeEach(function(){
    student = new Student ({name: 'Andrew', email: 'andrew@test.com' })
  });

  it('has a name', function() {
    expect(student.name).toEqual('Andrew');
  });

  it('has an email', function(){
    expect(student.email).toEqual('andrew@test.com')
  })

  describe('relationships ', function() {

    beforeEach(function() {
      september = new Makeathon({name: 'september'})
    })

    it('has the makeathon id', function() {
      september.addStudent(student)
      expect(student.makeathon_id).toEqual(september.id)
    });

    

  });



});
