var evolution = require('./evolution.js')
var world = require('./world.js')

var map
var settings

var creatures = []
module.exports.creatures = creatures

module.exports.initialiseEvolution = function (init) {
  map = init.world
  settings = init.settings

  creatures = evolution.populate(settings)
  module.exports.creatures = creatures
}

module.exports.stepGeneration = function () {
  creatures = evolution.grade(creatures, settings, map)
  creatures = evolution.cull(creatures, settings)
  creatures = evolution.repopulate(creatures, settings)

  creatures = evolution.grade(creatures, settings, map)
  evolution.postGrade(creatures)
  module.exports.creatures = creatures
}

module.exports.loopGenerations = function (loops) {
  for (var loop = 0; loop < loops; loop += 1) {
    creatures = evolution.grade(creatures, settings, map)
    creatures = evolution.cull(creatures, settings)
    creatures = evolution.repopulate(creatures, settings)
  }
  creatures = evolution.grade(creatures, settings, map)
  evolution.postGrade(creatures)
  module.exports.creatures = creatures
}
