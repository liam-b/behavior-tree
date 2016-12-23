var evolution = require('./evolution.js')

const mutationSettings = {
  brainSize: 3,
  newTie: 20,
  addTie: 10,
  changeTie: 20,
  removeTie: 10
}
const evolutionSettings = {
  generationSize: 10
}
const newCreatureSettings = {
  energy: 15,
  position: {
    x: 10,
    y: 10
  },
  viewArea: 3
}
const gradeSettings = {
  mapSize: 20,
  steps: 5
}
const cullBelow = 50


var creatures = []
module.exports.creatures = creatures

module.exports.initialiseEvolution = function () {
  creatures = evolution.populate(mutationSettings, evolutionSettings, newCreatureSettings)
  module.exports.creatures = creatures
}

module.exports.stepGeneration = function () {
  creatures = evolution.grade(creatures, gradeSettings)
  creatures = evolution.cull(creatures, cullBelow)
  creatures = evolution.repopulate(creatures, evolutionSettings, newCreatureSettings, mutationSettings)
  evolution.postGrade(creatures)
  module.exports.creatures = creatures
}

module.exports.loopGenerations = function (loops) {
  for (var loop = 0; loop < loops; loop += 1) {
    creatures = evolution.grade(creatures, gradeSettings)
    creatures = evolution.cull(creatures, cullBelow)
    creatures = evolution.repopulate(creatures, evolutionSettings, newCreatureSettings, mutationSettings)
    evolution.postGrade(creatures)
    module.exports.creatures = creatures
  }
}

module.exports.loopGenerationsFast = function (loops) {
  for (var loop = 0; loop < loops; loop += 1) {
    creatures = evolution.grade(creatures, gradeSettings)
    creatures = evolution.cull(creatures, cullBelow)
    creatures = evolution.repopulate(creatures, evolutionSettings, newCreatureSettings, mutationSettings)
  }
  module.exports.creatures = creatures
}
