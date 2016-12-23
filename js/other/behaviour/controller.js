var evolution = require('./evolution.js')
var world = require('./world.js')

const mutationSettings = {
  brainSize: 3,
  newTie: 20,
  addTie: 10,
  changeTie: 20,
  removeTie: 10
}
const evolutionSettings = {
  generationSize: 100
}
const newCreatureSettings = {
  energy: 15,
  position: {
    x: 50,
    y: 50
  },
  viewArea: 3
}
const gradeSettings = {
  mapSize: 100,
  steps: 5
}
const cullBelow = 50

var map = new world.World(world.generateEmpty(gradeSettings.mapSize), gradeSettings.mapSize)
module.exports.map = map


var creatures = []
module.exports.creatures = creatures

module.exports.initialiseEvolution = function () {
  creatures = evolution.populate(mutationSettings, evolutionSettings, newCreatureSettings)
  module.exports.creatures = creatures
}

module.exports.stepGeneration = function () {
  creatures = evolution.grade(creatures, gradeSettings, map)
  creatures = evolution.cull(creatures, cullBelow)
  creatures = evolution.repopulate(creatures, evolutionSettings, newCreatureSettings, mutationSettings)
  evolution.postGrade(creatures)
  module.exports.creatures = creatures
}

module.exports.loopGenerations = function (loops) {
  for (var loop = 0; loop < loops; loop += 1) {
    creatures = evolution.grade(creatures, gradeSettings, map)
    creatures = evolution.cull(creatures, cullBelow)
    creatures = evolution.repopulate(creatures, evolutionSettings, newCreatureSettings, mutationSettings)
    evolution.postGrade(creatures)
    module.exports.creatures = creatures
  }
}

module.exports.loopGenerationsFast = function (loops) {
  for (var loop = 0; loop < loops; loop += 1) {
    creatures = evolution.grade(creatures, gradeSettings, map)
    creatures = evolution.cull(creatures, cullBelow)
    creatures = evolution.repopulate(creatures, evolutionSettings, newCreatureSettings, mutationSettings)
  }
  module.exports.creatures = creatures
}
