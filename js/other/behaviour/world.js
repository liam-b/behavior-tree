var tile = require('./tile.js')

module.exports = {
  World: function (world, worldSize) {
    this.world = world
    this.size = worldSize
  },

  generateEmpty: function (worldSize) {
    var generatedWorld = []
    for (var x = 0; x < worldSize; x += 1) {
      generatedWorld[x] = []
      for (var y = 0; y < worldSize; y += 1) {
        generatedWorld[x][y] = tile.air
      }
    }

    // HACK //
    generatedWorld[3][2] = tile.wall
    // HACK //

    return generatedWorld
  },

  log: function (world) {
    var logString = '\n'
    for (var y = 0; y < world.length; y += 1) {
      for (var x = 0; x < world.length; x += 1) {
        if (world[x][y] == tile.wall) {
          logString += 'w '
        }
        else {
          logString += 'a '
        }
      }
      logString += '\n'
    }

    console.log(logString)
  }
}
