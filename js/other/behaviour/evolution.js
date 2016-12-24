var Creature = require('./creature.js')
var world = require('./world.js')
var grade = require('./grade.js')
var mutation = require('./mutation.js')
var Brain = require('./brain.js')

function compare (a,b) {
  if (a.fitness < b.fitness) return -1
  if (a.fitness > b.fitness) return 1
  return 0
}

module.exports = {
  populate: function (settings) {
    var generation = []
    for (var size = 0; size < settings.populationSize; size += 1) {
      generation.push(new Creature({
        energy: settings.defaultCreature.energy,
        position: {
          x: settings.defaultCreature.position.x,
          y: settings.defaultCreature.position.y
        } // TODO add brain class for more brainy stuff
      }, new Brain(settings.brainSize, mutation.create({brainSize: settings.brainSize, newTieChance: settings.mutation.newTieChance})), settings.defaultCreature.viewArea))
    }
    return generation
  },

  grade: function (generation, settings, map) {
    testingEnviroment = map

    for (var index = 0; index < generation.length; index += 1) {
      grade(generation[index], testingEnviroment, settings)
    }

    return generation
  },

  cull: function (generation, settings) {
    generation.sort(compare)

    for (var index = 0; index < ((settings.cullPercentage / 100) * generation.length); index += 1) {
      generation.splice(index, 1)
    }

    return generation
  },

  repopulate: function (generation, settings) {
    for (var creature = 0; creature < generation.length; creature += 1) {
      generation[creature].energy = settings.defaultCreature.energy
      generation[creature].position = {
        x: settings.defaultCreature.position.x,
        y: settings.defaultCreature.position.y,
      }
    }
    bestBrain = generation[generation.length - 1].brain
    while (generation.length < settings.populationSize) {
      generation.push(new Creature({
        energy: settings.defaultCreature.energy,
        position: {
          x: settings.defaultCreature.position.x,
          y: settings.defaultCreature.position.y
        } // TODO add brain class for more brainy stuff
      }, new Brain(settings.brainSize, mutation.mutate(bestBrain, settings.mutation)), settings.defaultCreature.viewArea))
    }

    return generation
  },

  postGrade: function (generation) {
    generation.sort(compare)
  }
}
