process.env.NODE_ENV = 'test'
var server = require ('../../server.js')
var Browser = require('zombie');

var chai = require('chai');
var mocha = require('mocha');
var expect = chai.expect;
var assert = require('assert');

describe('coach makeathon creation form', function() {

  before(function() {
    server = server.listen(5000);
    browser = new Browser({ site: 'http://localhost:5000' });
  });

  // before(function(done) {
  //   this.browser.visit('/createmakeathon', done);
  // });

  // after(function(){
  //   this.server.close();
  // });

  it('should have a header "Create makeathon"', function(done) {
    browser.visit('/createmakeathon', function(error) {
      try {
        expect(browser.text("h1")).to.equal('Create makeathon');
        done();
      } catch(error) {
        done(error);
      }
    });     
  });

  it('should have a field to enter the name of the makeathon', function(done) {
    browser.visit('/createmakeathon/createmakeathon/makeathonmanagement', function(error) {
      try {
        expect(browser.text('h2')).to.equal('Success!');
        done();
      } catch(error) {
        done(error);
      }
    });
  });


    // assert.ok(this.browser.success);
    // assert.equal(this.browser.text('h1'), 'Contact');
    // assert.equal(this.browser.text('form label'), 'First NameLast NameEmailMessage');

    // // assert.equal(this.browser.text('form label'), 'Name')

    // expect(browser.html("#create-makeathon")).to.be.a('form');
    // expect(browser.text('#create-makeathon')).to.equal('createmakeathon');

    // browser.pressButton('Submit');

    //     //.fill('name', 'September 2014 Makeathon')

    // expect(browser.text('h1')).to.equal('Success!');






});
