'use strict'

var algorithm = require('../src/algorithm')
var array = null
var algorithm = null
var results = null;
var students = 'butt'


describe('algorithm', function() {

  it('can generate all possible combinations of a certain length from an array', function() {
    algorithm = new Algorithm();
    array = [1,2,3,4]
    expect(algorithm.possibleCombos(array, 2)).toEqual([[1,2],[1,3],[2,3],[1,4],[2,4],[3,4]])
  })

  it('can generate all possible combinations of students', function() {
    students = ['Victoria', 'Hercules', 'Yvette', 'Spike']
    expect(algorithm.possibleCombos(students, 2)).toEqual([ [ 'Victoria', 'Hercules' ], [ 'Victoria', 'Yvette' ], [ 'Hercules', 'Yvette' ], [ 'Victoria', 'Spike' ], [ 'Hercules', 'Spike' ], [ 'Yvette', 'Spike' ] ])
  })

  it('how many results for 28', function() {
    students = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]
    results = algorithm.possibleCombos(students, 4)
    expect(results.length).toEqual(20475);
  });

  it('can generate all possible permutations', function(){
    array = [1,2,3,4]
    expect(algorithm.possiblePermu(array)).toEqual([[ 1, 2, 3, 4 ], [ 1, 2, 4, 3 ], [ 1, 3, 2, 4 ], [ 1, 3, 4, 2 ], [ 1, 4, 2, 3 ], [ 1, 4, 3, 2 ], [ 2, 1, 3, 4 ], [ 2, 1, 4, 3 ], [ 2, 3, 1, 4 ], [ 2, 3, 4, 1 ], [ 2, 4, 1, 3 ], [ 2, 4, 3, 1 ], [ 3, 1, 2, 4 ], [ 3, 1, 4, 2 ], [ 3, 2, 1, 4 ], [ 3, 2, 4, 1 ], [ 3, 4, 1, 2 ], [ 3, 4, 2, 1 ], [ 4, 1, 2, 3 ], [ 4, 1, 3, 2 ], [ 4, 2, 1, 3 ], [ 4, 2, 3, 1 ], [ 4, 3, 1, 2 ], [ 4, 3, 2, 1 ]])
  })

  it('')


})
