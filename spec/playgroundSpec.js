'use strict';

var Makeathon = require('../src/makeathon');
var Project = require('../src/project');
var Student = require('../src/student');
var Algorithm = require('../src/algorithm');
var october = null


describe ('Test Makeathon', function(){

	beforeEach(function(){
		october = new Makeathon({ name: 'October' })
		project1 = new Project
		october.projects = [ 	project1 = new Project, project2 = new Project, 
													project3 = new Project, project4 = new Project, 
													project5 = new Project, project6 = new Project 
												]
		october.students = [ 	dog = new Student, cat = new Student, mouse = new Student,
													hamster = new Student, rat = new Student, zebra = new Student,
													lion = new Student, pig = new Student, penguin = new Student,
													parrot = new Student, frog = new Student, llama = new Student
												]
		october.students.forEach(function(student){
			console.log(threeRandomProjects(october.projects))
		});

		it('can generate three random projects', function() {
			var choices = threeRandomProjects(october.projects)
			expect(choices.length).toEqual(3)
		});

	});


	var threeRandomProjects = function(projectsArray) {
		var project1;
		var project2;
		var project3;
		var projectsArrayLength = projectsArray.length;
		project1 = projectsArray[Math.floor(Math.random() * projectsArrayLength)];
		if (projectsArrayLength > 1) {
		    do {
		      project2 = projectsArray[Math.floor(Math.random() * projectsArrayLength)];
		    } while(project1 == project2);
		}
		return [project1, project2] 
	};

})