var tile = require('../behaviour/tile.js')

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
    generatedWorld[2][2] = tile.wall
    // HACK //

    return generatedWorld
  }
}
