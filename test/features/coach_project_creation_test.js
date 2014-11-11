process.env.NODE_ENV = 'test'
var app = require ('../../server.js')
var Browser = require('zombie');
var http = require('http')

var chai = require('chai');
var mocha = require('mocha');
var expect = chai.expect;
var assert = require('assert')

describe('coach makeathon creation form', function() {

  before(function() {
    this.server = http.createServer(app).listen(5000);
    browser = new Browser({ site: 'http://localhost:5000' });
  });

  beforeEach(function(done) {
    browser.visit('/createmakeathon', done);
  });

  after(function(done){
    this.server.close(done);
  });

  it('should have a header "Create makeathon"', function(){
    expect(browser.text('h1')).to.equal('Create makeathon');
  });

  it('should have a field to enter the name of the makeathon', function() {
      browser.pressButton('Submit');
        //.fill('name', 'September 2014 Makeathon')
    expect(browser.text('h1')).to.equal('Success!');
  });

});
