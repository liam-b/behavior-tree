var Creature = require('./creature.js')
var tree = require('./tree.js')

var creature = new Creature([
  new tree.action.move(10), // BUG: actions need to be able to actually change the creatures location and roatation but how?
  new tree.action.sleep(5),
  new tree.operator.loop(3, [
    new tree.action.sleep(1),
    new tree.action.move(2),
    new tree.action.turn(2)
  ])
])

creature.behave()
