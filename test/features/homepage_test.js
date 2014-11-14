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

  before(function(done) {
    browser.visit('/', done);
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

  it('should have a link to create a new makeathon', function(done){
    browser.visit('/', function(error) {
      try {
        expect(browser.text('a')).to.equal('Create new makeathon');
        done();
      } catch(error) {
        done(error)
      }
    });
  });

  it('should click the create a new makeathon link and be taken to the create makeathon form', function(done){
    browser.clickLink('Create new makeathon', function(error) {
      try {
        expect(browser.text('h1')).to.equal('Create makeathon');
        done();
      } catch(error) {
        done(error)
      }
    });
  });

});
