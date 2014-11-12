'use strict';

var Makeathon = require('../src/makeathon');
var september = null

describe('a makeathon', function(){

	function isArray(object){
		return Object.prototype.toString.call(object) == '[object Array]';
	}

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
		expect(isArray(september.projects)).toBe(true)
	});

	it('can access individual projects', function(){
		expect(september.projects[0]).toEqual('kickstarter')
	});

	it('can add projects to its project array', function(){
		september.addProject('hairnado');
		expect(september.projects[2]).toEqual('hairnado')
	});

	it('has an array of students', function() {
		expect(isArray(september.students)).toBe(true)
	});

	it('can add a student to its student array', function(){
		september.addStudent('Hercules')
		expect(september.students[0]).toEqual('Hercules')
	});
});
