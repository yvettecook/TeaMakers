'use strict';

var Makeathon = require('../src/makeathon');
var september = null

describe('a makeathon', function(){

	beforeEach(function(){
		september = new Makeathon({ name: 'September 2014', projects: ['kickstarter', 'git racer'] });
	});

	it('should have a name', function(){
		expect(september.name).toEqual('September 2014')
	});

	it('has an id', function(){
		expect(september._id).not.toBe(null);
	});

	it('has a unique id', function(){
		var october = new Makeathon();
		expect(september._id).not.toEqual(october._id);
	});

	it('has an array of projects', function(){
		expect(september.projects).toMatch([]);
	});

	it('can access individual projects', function(){
		expect(september.projects[0]).toEqual('kickstarter')
	});

	it('can add projects to its array', function(){
		september.addProject('hairnado');
		expect(september.projects[2]).toEqual('hairnado')
	});
});