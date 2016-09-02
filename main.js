const tree = require('./tree.js')

Array.prototype.remove = function (index, index2) {
  if (!index2) index2 = index
  return this.splice(index, index2 - index + 1)
}
Array.prototype.insert = function(i,...rest) {
  return this.splice(i,0,...rest)
}
Array.prototype.contains = function(value) {
  return this.indexOf(value) != -1
}

function randInt (min, max) {
  return Math.floor((Math.random() * (max + 1)) + min)
}

function randChance (chance) {
  return  Math.floor(Math.random() * 100) <= chance
}

const possible = 'nfi'

function random (length) {
    var result = [];
    for (var i = length; i > 0; --i) result.push(possible[Math.floor(Math.random() * possible.length)])
    return result;
}

// console.log(random(10))

var newDna = tree.parse([['a', 1, 'c', 'b', 1, 1]])
console.log(newDna)
console.log(tree.execute([5], newDna))
