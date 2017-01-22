var tile = require('./tile.js')

module.exports = {
  'move': {
    up: function (creature, world) {
      if (creature.position.y > 0) {
        if (world.world[creature.position.x][creature.position.y - 1] != tile.wall) {
          creature.position.y -= 1;
        }
      }
    },

    down: function (creature, world) {
      if (creature.position.y < world.size-1) {
        if (world.world[creature.position.x][creature.position.y + 1] != tile.wall) {
          creature.position.y += 1
        }
      }
    },

    left: function (creature, world) {
      if (creature.position.x > 1) {
        if (world.world[creature.position.x - 1][creature.position.y] != tile.wall) {
          creature.position.x -= 1
        }
      }
    },

    right: function (creature, world) {
      if (creature.position.x < world.size - 1) {
        if (world.world[creature.position.x + 1][creature.position.y] != tile.wall) {
          creature.position.x += 1
        }
      }
    }
  },

  eat: function (creature, world) {
    if (world.world[creature.position.x][creature.position.y] == tile.food) {
      creature.energy += 10;
    }
  }
}
