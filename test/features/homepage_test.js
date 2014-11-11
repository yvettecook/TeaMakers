process.env.NODE_ENV = 'test'
var app = require ('../../server.js')
var Browser = require('zombie');
var http = require('http')

var chai = require('chai');
var mocha = require('mocha');
var expect = chai.expect;


describe('home page', function() {

  before(function() {
    this.server = http.createServer(app).listen(5000);
    this.browser = new Browser({ site: 'http://localhost:5000' });
  });

  before(function(done) {
    this.browser.visit('/', done);
  });

  after(function(done){
    this.server.close(done);
  });

  it('should have the name of the site', function(){
    expect(this.browser.text('h1')).to.equal('TeaMakers')
  });
});
