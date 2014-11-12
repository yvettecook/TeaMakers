process.env.NODE_ENV = 'test'
var server = require ('../../server.js')
var Browser = require('zombie');

var chai = require('chai');
var mocha = require('mocha');
var expect = chai.expect;

describe('home page', function() {

  before(function() {
    server = server.listen(5000);
    browser = new Browser({ site: 'http://localhost:5000' });
  });

  // after(function(done){
  //   this.server.close(done);
  // });

  it('should have the name of the site', function(done){
    browser.visit('/', function(error) {
      try {
        expect(browser.text('h1')).to.equal('TeaMakers');  
        done();
      } catch(error) {
        done(error);
      }
    });     
  });

});
