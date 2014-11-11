process.env.NODE_ENV = 'test'
var app = require ('../../server.js')
var Browser = require('zombie');
var http = require('http')

var chai = require('chai');
var mocha = require('mocha');
var expect = chai.expect;

describe('student preference form', function(){

	before(function(){
		this.server = http.createServer(app).listen(5000);
		this.browser = new Browser({ site: 'http://localhost:5000' });
	});

	after(function(done){
    this.server.close(done);
  });

	it('should have name of Make-a-Thon', function(){
		this.browser.visit('/september2014/student_form')
		expect(this.browser.text('h2')).to.equal('September 2014 Make-a-Thon');
	});


});