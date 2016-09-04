const tree = require('./tree.js')

Array.prototype.remove = function (index, index2) {
  if (!index2) index2 = index
  return this.splice(index, index2 - index + 1)
}
Array.prototype.insert = function(i, ...rest) {
  return this.splice(i, 0, ...rest)
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

const possible = [0, 1, 2, 3, 4, 5, 'a', 'b', 'c', 'd', 'e']

function random (length) {
    var result = [];
    for (var i = length; i > 0; --i) result.push(possible[Math.floor(Math.random() * possible.length)])
    return result
}

// console.log(random(10))

// console.log(tree.run([1, 1, 1], ['c', ['c']]))
var loop = true

while (loop) {
  var rand = random(4)
  var currentDna = tree.parse(rand)
  console.log(currentDna)
  var result = tree.run([1], currentDna)
  console.log(result)
  if (result == 2) loop = false
}
