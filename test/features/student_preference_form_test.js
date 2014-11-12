process.env.NODE_ENV = 'test'
var server = require ('../../server.js')
var Browser = require('zombie');

var chai = require('chai');
var mocha = require('mocha');
var expect = chai.expect;

describe('student preference form', function(){

	before(function(){
		this.server = server.listen(5002);
		this.browser = new Browser({ site: 'http://localhost:5002' });
	});

	// after(function(done){
 //    this.server.close(done);
 //  });

	xit('should have name of Make-a-Thon', function(){
		this.browser.visit('/september2014/student_form', function(error, browser){
			expect(browser.text('h2')).to.equal('September 2014 Make-a-Thon');
		});
		
	});


});