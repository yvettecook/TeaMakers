process.env.NODE_ENV = 'test'
var app = require ('../../server.js')
var Browser = require('zombie');
var http = require('http')

var chai = require('chai');
var mocha = require('mocha');
var expect = chai.expect;


describe('coach makeathon creation form', function() {

  before(function() {
    this.server = http.createServer(app).listen(5000);
    this.browser = new Browser({ site: 'http://localhost:5000' });
    console.log('Hello')
  });

  before(function(done) {
    this.browser.visit('/', done);
  });

  it('should have a header "Create makeathon"', function(){
    this.browser.visit('/createmakeathon', done);
    expect(this.browser.text('h1')).to.equal('Create makeathon')
  });

});
