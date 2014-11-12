'use strict'

var Student = require('../src/student')

var student = null

describe('a student do', function() {

  beforeEach(function(){
    student = new Student ({name: 'Andrew'})
  });

  it('should have a name', function() {
    expect(student.name).toEqual('Andrew');
  });

  it('should have an email', function(){
    student.email = 'andrew@test.com'
    expect(student.email).toEqual('andrew@test.com')
  })

});
