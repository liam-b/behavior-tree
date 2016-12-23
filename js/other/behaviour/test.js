var Creature = require('./creature.js')
var world = require('./world.js')
var action = require('./action.js')
var tile = require('./tile.js')

var creature = new Creature({
  energy: 15,
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
