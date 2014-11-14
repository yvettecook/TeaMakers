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

  it('should have a header', function(done) {
    browser.visit('/makeathon/new', function(error) {
      try {
        expect(browser.text('h1')).to.equal('Create makeathon');
        done();
      } catch(error) {
        done(error);
      }
    });     
  });

  // it('should have a form with input boxes for makeathon name, project name, project description, and students', function(done) {
  //   browser.visit('/makeathon/new', function(error) {
  //     try {
  //       expect(browser.text('form')).to.equal('Makeathon Name: Project 1 Name: Project 1 Details: Students: Submit');
  //       done();
  //     } catch(error) {
  //       done(error);
  //     }
  //   });     
  // });

  it('should have a form that users can fill out and a link to add new projects', function() {
    browser.visit('/makeathon/new')
    .then(function() {
      browser.fill('makeathon_name', 'September 2014')
      browser.fill('project_name', 'Group Maker')
      browser.fill('project_details', 'Create an application that makes groups')
      browser.fill('students', 'andrew@email.com; victoria@email.com; yvette@email.com')
      browser.pressButton('Submit')
    })
    .then(function() {
      expect(browser.text('h1')).to.equal('Welcome to the Makeathon Management');
      expect(browser.text('h2')).to.equal('September 2014');
      expect(browser.text('a')).to.equal('Add new project')
    })
  });

});
