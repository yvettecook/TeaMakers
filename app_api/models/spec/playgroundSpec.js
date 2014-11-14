'use strict';

var _ = require('underscore-node')

var Makeathon = require('../src/makeathon');
var Project = require('../src/project');
var Student = require('../src/student');
var Algorithm = require('../src/algorithm');
var october = null;
var project1 = null;
var project2 = null;
var project3 = null;
var project4 = null;
var project5 = null;
var project6 = null;


describe ('Test Makeathon', function(){

	beforeEach(function(){
		october = new Makeathon({ name: 'October' })
		october.projects = [ 	project1 = new Project({name: 'project1' }),
													project2 = new Project({name: 'project2' }),
													project3 = new Project({name: 'project3' }),
													project4 = new Project({name: 'project4' }),
													project5 = new Project({name: 'project5' }),
													project6 = new Project({name: 'project6' })
												]
		october.students = [ 	new Student({name: 'dog' }), new Student({name: 'cat' }),
													new Student({name: 'moo' }), new Student({name: 'ibex' }),
													new Student({name: 'rat' }), new Student({name: 'zeb' }),
													new Student({name: 'lion' }), new Student({name: 'pig' }),
													new Student({name: 'frog' }), new Student({name: 'lla' }),
													new Student({name: 'fox' }), new Student({name: 'wolf' }),
												]
		october.students.forEach(function(student){
			// console.log(threeRandomProjects(october.projects))
		});
	});

		it('can list all projects', function() {
			var names = october.listProjectNames()
			expect(names.length).toEqual(6);
		});


		it('can generate three random projects', function() {
			var projects = october.listProjectNames();
			var choices = threeRandomProjects(projects)
			expect(choices.length).toEqual(3)
			console.log(october)
		});

});


	var threeRandomProjects = function(projectsArray) {
		var randomChoices = []
		randomChoices = _.sample(projectsArray, 3);
		return randomChoices;
};
