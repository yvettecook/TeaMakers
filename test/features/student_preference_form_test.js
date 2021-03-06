process.env.NODE_ENV = 'test'
var server = require ('../../server.js')
var Browser = require('zombie');

var chai = require('chai');
var mocha = require('mocha');
var expect = chai.expect;
var assert = require('assert');

describe('Makeathon creation form', function() {

  before(function() {
    server = server.listen(5000);
    browser = new Browser({ site: 'http://localhost:5000' });
  });

	// after(function(done){
 //    this.server.close(done);
 //  });

  it('should have a header', function(done) {
    browser.visit('/makeathon/student/form', function(error) {
      try {
        expect(browser.text('h1')).to.equal('Student Makeathon Form');
        done();
      } catch(error) {
        done(error);
      }
    });     
  });

  it('should have a form with input boxes for makeathon name, project name, project description, and students', function(done) {
    browser.visit('/makeathon/student/form', function(error) {
      try {
        expect(browser.text('form')).to.equal('Name: Email: 1st Choice: 2nd Choice: 3rd Choice: Submit');
        done();
      } catch(error) {
        done(error);
      }
    });     
  });

	it('should have a form that students can fill out', function() {
    browser.visit('/makeathon/create')
    .then(function() {
      browser.fill('name', 'Test User')
      browser.fill('email', 'test@test.com')
      browser.fill('student_first_choice', 'Group Maker')
      browser.fill('student_second_choice', 'Kickstarter')
      browser.fill('student_third_choice', 'Jumper Finder')
      browser.pressButton('Submit')
    })
    .then(function() {
      expect(browser.text('h1')).to.equal('Thank you for submitting your preferences');
    })
 	});
});
