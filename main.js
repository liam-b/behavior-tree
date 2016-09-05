var tree = require('./tree.js')
require('./proto.js')

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

console.log(tree.run([
  action.move(10),
  action.sleep(),
  operator.loop(10, [
    action.move(1)
  ])
]))
