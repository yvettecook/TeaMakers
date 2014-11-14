'use strict';

var Project = require ('../src/project')
var Makeathon = require('../src/makeathon')
var Student = require('../src/student')
var teamakers = null
var september = null
var victoria = null
var andrew = null
var yvette = null

describe('a project', function() {

  beforeEach(function(){
    teamakers = new Project({name: "teamakers", description: 'Putting people in teams.'});
  })

  it('should have a name', function() {
    expect(teamakers.name).toEqual('teamakers')
  })

  it('has a description', function(){
    expect(teamakers.description).toEqual('Putting people in teams.')
  });

  it('should have an ID', function() {
    expect(teamakers._id).not.toBe(undefined)
  })

  describe('belongs to', function(){

    beforeEach(function(){
      september = new Makeathon({name: 'september'})
    })

    it('should have the Makeathon ID', function(){
      september.addProject(teamakers)
      expect(teamakers.makeathon_id).toEqual(september._id)
    })

  })

  describe('stores student preferences', function() {

    beforeEach(function(){
      victoria = new Student({name: "Victoria"});
      andrew = new Student({name: "Andrew"});
      yvette = new Student({name: "Yvette"});
    })

    xit('students can rank a project', function(){
      teamakers.setAStudentsRanking(victoria, 1)
      expect(teamakers.studentPreferences[victoria._id]).toEqual(1)
    });

    xit('2 students can rank a project', function(){
      teamakers.setAStudentsRanking(andrew, 2)
      teamakers.setAStudentsRanking(victoria, 1)
      expect(teamakers.studentPreferences[victoria._id]).toEqual(1)
      expect(teamakers.studentPreferences[andrew._id]).toEqual(2)
    });


  });

})
