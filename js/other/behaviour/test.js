var Creature = require('../behaviour/creature.js')
var world = require('../behaviour/world.js')
var action = require('../behaviour/action.js')
var tile = require('../behaviour/tile.js')

var creature = new Creature({
  energy: 100,
  rotation: 0,
  position: {
    x: 1,
    y: 2
  }
}, [
  [
    [

    ],
    [

    ],
    [

    ]
  ],
  [
    [

    ],
    [

    ],
    [

    ]
  ],
  [
    [

    ],
    [
      {'test': tile.wall, 'run': action.move.left}
    ],
    [

    ]
  ]
], new world.World(world.generateEmpty(5), 5), 3)

console.log(creature.world.world)
console.log(creature.properties.position)
creature.behave()
console.log(creature.viewport)
console.log(creature.properties.position)
