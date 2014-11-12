'use strict';

var Project = require ('../src/project')
var Makeathon = require('../src/makeathon')
var teamakers = null
var september = null

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

})
