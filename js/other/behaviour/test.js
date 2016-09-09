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
  new tree.action.turn(1),
  new tree.action.sleep(1),
  new tree.action.move(1),
])

myCreature.behave()
