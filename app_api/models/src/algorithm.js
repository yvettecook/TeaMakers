var Combinatorics = require('js-combinatorics').Combinatorics;


Algorithm = function () {

  Algorithm.prototype.possibleCombos = function (array, groupsize) {
    var combos = []
    cmb = Combinatorics.combination(array, groupsize)
    while(a = cmb.next())
      combos.push(a);
    return combos
  };

  Algorithm.prototype.possiblePermu = function (array) {
    // var results = null
    cmb = Combinatorics.permutation(array);
    results = cmb.toArray()
    return results
  };

};

module.exports = Algorithm
