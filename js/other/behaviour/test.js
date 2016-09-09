var Creature = require('./creature.js')
var tree = require('./tree.js')

var myCreature = new Creature({
  energy: 0,
  rotation: 0,
  position: {
    x: 0,
    y: 0
  }
}, [
  new tree.action.sleep(16),
  new tree.action.move(10),
  new tree.action.turn(1),
  new tree.action.move(10)
])

setInterval(function () {
  myCreature.behave()
}, 200)
// console.log(myCreature)
