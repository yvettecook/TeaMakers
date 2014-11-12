'use strict';

var Makeathon = require('../src/makeathon');
var Project = require('../src/project')
var september = null
var october = null

describe('a makeathon', function(){

	function isArray(object){
		return Object.prototype.toString.call(object) == '[object Array]';
	}

	beforeEach(function(){
		september = new Makeathon({ name: 'September 2014', projects: ['kickstarter', 'git racer'] });
	});

	it('has a name', function(){
		expect(september.name).toEqual('September 2014')
	});

	it('has an id', function(){
		expect(september._id).not.toBe(null);
	});

	it('has a unique id', function(){
		var october = new Makeathon();
		expect(september._id).not.toEqual(october._id);
	});

	describe('relationships', function() {

		describe('with projects as strings', function(){

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

		});

		describe('with projects as objects', function() {

			beforeEach(function(){
				october = new Makeathon ({ name: 'October' })
				var kickstarter = new Project({ name: 'Kickstarter', description: 'Money for Universities' });
				var gitracer = new Project({ name: 'GitRacer', description: 'A race to commit' });
				october.addProject(kickstarter);
				october.addProject(gitracer);
			})

			it('can retrieve a project name', function() {
				expect(october.projects[0].name).toEqual('Kickstarter')
			});

			it('can list all the project names', function() {
				expect(october.listProjectNames()).toEqual(['Kickstarter', 'GitRacer'])
			});

			it('can list all the project descriptions', function(){
				expect(october.listProjectNamesAndDescriptions()).toEqual({Kickstarter: 'Money for Universities', GitRacer: 'A race to commit' })
			});

		});

		describe('with students', function(){

			it('has an array of students', function() {
				expect(isArray(september.students)).toBe(true)
			});

			it('can add a student to its student array', function(){
				september.addStudent('Hercules')
				expect(september.students[0]).toEqual('Hercules')
			});

		});

	});

});
