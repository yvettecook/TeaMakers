var Combinatorics = require('js-combinatorics').Combinatorics;


Algorithm = function () {

  Algorithm.prototype.possibleCombos = function (array, groupsize) {
    var combos = []
    cmb = Combinatorics.combination(array, groupsize)
    while(a = cmb.next())
      combos.push(a);
    return combos
  };

};


module.exports = Algorithm
