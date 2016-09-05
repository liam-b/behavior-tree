// Test the functionality of the creature behaviour code.
var Creature = require('./creature.js')
var tree = require('./tree.js')

var creature = new Creature([
  new tree.action.move(10),
  new tree.action.sleep(5),
  new tree.operator.loop(3, [
    new tree.action.sleep(1),
    new tree.action.move(2),
  ])
])

creature.behave()
