process.env.NODE_ENV = 'test'
var app = require ('../../server.js')
var Browser = require('zombie');
var http = require('http');

var chai = require('chai');
var mocha = require('mocha');
var expect = chai.expect;
var assert = require('assert');

describe('coach makeathon creation form', function() {

  before(function() {
    this.server = http.createServer(app).listen(5000);
    this.browser = new Browser({ site: 'http://localhost:5000' });
  });

  // before(function(done) {
  //   this.browser.visit('/createmakeathon', done);
  // });

  after(function(done){
    this.server.close(done);
  });

  // it('should have a header "Create makeathon"', function() {
  //   this.browser.visit('/createmakeathon', function(error, browser) {
  //     expect(browser.text('h1')).to.equal('Create makeathon');
  //   });
      
  // });

  it('should have a field to enter the name of the makeathon', function() {
    // this.browser.pressButton('Submit');
    this.browser.visit('/createmakeathon/createmakeathon/makeathonmanagement', function(error, browser) {
      expect(browser.text('h2')).to.equal('Success!');
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
