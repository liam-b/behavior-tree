var Creature = require('../behaviour/creature.js')
var world = require('../behaviour/world.js')
var action = require('../behaviour/action.js')
var tile = require('../behaviour/tile.js')

var creature = new Creature({
  energy: 100,
  rotation: 0,
  position: {
    x: 2,
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

creature.behave()
world.log(creature.viewport)
creature.findViewport()
world.log(creature.viewport)
