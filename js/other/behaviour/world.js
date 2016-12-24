var tile = require('./tile.js')
var fs = require('fs')

module.exports = {
  World: function (world, worldSize) {
    this.world = world
    this.size = worldSize
  },

  loadFromJSON: function (path) {
    return require(path)
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
    // generatedWorld[49][52] = tile.wall
    // generatedWorld[50][52] = tile.wall
    // generatedWorld[51][52] = tile.wall
    //
    // generatedWorld[49][48] = tile.wall
    // generatedWorld[50][48] = tile.wall
    // generatedWorld[51][48] = tile.wall
    //
    // generatedWorld[48][51] = tile.wall
    // generatedWorld[48][50] = tile.wall
    // generatedWorld[48][49] = tile.wall

    // generatedWorld[53][51] = tile.wall
    // generatedWorld[53][50] = tile.wall
    // generatedWorld[53][49] = tile.wall
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
