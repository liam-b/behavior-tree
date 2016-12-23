var tile = require('./tile.js')

module.exports = {
  'move': {
    up: function (creature) {
      creature.position.y += 1
    },

    down: function (creature) {
      creature.position.y -= 1
    },

    left: function (creature) {
      creature.position.x -= 1
    },

    right: function (creature) {
      creature.position.x += 1
    }
  },

  eat: function (creature) {
    if (creature.world.world[creature.position.x][creature.position.y] = tile.food) {
      creature.energy += 10;
    }
  }
}
