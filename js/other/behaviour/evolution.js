var Creature = require('./creature.js')
var world = require('./world.js')
var grade = require('./grade.js')
var mutation = require('./mutation.js')

function compare (a,b) {
  if (a.fitness < b.fitness) return -1
  if (a.fitness > b.fitness) return 1
  return 0
}

module.exports = {
  populate: function (mutationSettings, evolutionSettings, newCreatureSettings) {
    var generation = []
    for (var size = 0; size < evolutionSettings.generationSize; size += 1) {
      generation.push(new Creature({
        energy: newCreatureSettings.energy,
        position: {
          x: newCreatureSettings.position.x,
          y: newCreatureSettings.position.y
        } // TODO add brain class for more brainy stuff
      }, mutation.create({brainSize: mutationSettings.brainSize, newTie: mutationSettings.newTie}), newCreatureSettings.viewArea))
    }
    return generation
  },

  grade: function (generation, gradeSettings) {
    testingEnviroment = new world.World(world.generateEmpty(gradeSettings.mapSize), gradeSettings.mapSize)

    for (var index = 0; index < generation.length; index += 1) {
      grade(generation[index], testingEnviroment, gradeSettings)
    }

    return generation
  },

  cull: function (generation, cullBelow) {
    generation.sort(compare)

    for (var index = 0; index < ((cullBelow / 100) * generation.length); index += 1) {
      generation.splice(index, 1)
    }

    return generation
  },

  repopulate: function (generation, evolutionSettings, newCreatureSettings, mutationSettings) {
    for (var creature = 0; creature < generation.length; creature += 1) {
      generation[creature].energy = newCreatureSettings.energy
      generation[creature].position = {
        x: newCreatureSettings.x,
        y: newCreatureSettings.y,
      }
    }
    while (generation.length < evolutionSettings.generationSize) {
      generation.push(new Creature({
        energy: newCreatureSettings.energy,
        position: {
          x: newCreatureSettings.position.x,
          y: newCreatureSettings.position.y
        } // TODO add brain class for more brainy stuff
      }, mutation.create({brainSize: mutationSettings.brainSize, newTie: mutationSettings.newTie}), newCreatureSettings.viewArea))
    }

    return generation
  }
}
