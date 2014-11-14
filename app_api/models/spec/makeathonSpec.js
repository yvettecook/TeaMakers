'use strict';

var Makeathon = require('../src/makeathon');
var Project = require('../src/project')
var Student = require('../src/student')
var september = null
var october = null
var victoria = null
var andrew = null
var yvette = null
var query = null

var mongoose = require('mongoose')


describe('a makeathon', function(){

	function isArray(object){
		return Object.prototype.toString.call(object) == '[object Array]';
	}

	beforeEach(function() {
		mongoose.connect('mongodb://localhost/testmakeathon')
		mongoose.connnection.on('connected', function() {
			console.log('***' + 'Mongoose connected')
		mongoose.connection.on('disconnected', function() {
			console.log('Mongoose disconnected')
		});
	})
	//
	afterEach(function() {
		mongoose.connection.close()
		})
	})

	describe('...', function() {

		beforeEach(function(){
			september = new Makeathon({ name: 'September 2014', projects: ['kickstarter', 'git racer'] });
			september.save(function (err) {
				if (err) console.log(err);
			})
		});

		it('has a name', function(){
			Makeathon.findOne({	'name' : 'September 2014'	}, function(error, data) {
				console.log(data)
			})
			expect(query['name']).toEqual('September 2014')
		});
		//
		// Makeathon.findById(req.params.id, function(error, data) {
		// 	console.log(data)
		// 	var projects = data.listProjectNamesAndDescriptions();
		// 	res.render('makeathonmanagement', { makeathon : data, projectList : projects } );
		//
		// 	console.log(makeathon);
		// });


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

				it('can count its projects', function(){
					expect(october.countProjects()).toEqual(2)
				});


			});

			describe('with students', function(){

				beforeEach(function(){
					victoria = new Student({name: "Victoria"});
					andrew = new Student({name: "Andrew"});
					yvette = new Student({name: "Yvette"});
					september.addStudent(andrew)
					september.addStudent(victoria)
					september.addStudent(yvette)
				})

				it('has an array of students', function() {
					expect(isArray(september.students)).toBe(true)
				});

				it('can add a student to its student array', function(){
					september.addStudent('Hercules')
					expect(september.students[3]).toEqual('Hercules')
				});

				it('can count its students', function(){
					expect(september.countStudents()).toEqual(3)
				});

				it('can report if not all students have submitted', function() {
					expect(september.isStudentsSubmitted()).toEqual(false)
				});

				it('can report if all students have submitted', function(){
					victoria.statusSubmitted()
					andrew.statusSubmitted()
					yvette.statusSubmitted()
					expect(september.isStudentsSubmitted()).toEqual(true)
				});
			});

		});

	});

});
