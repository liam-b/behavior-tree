var evolution = require('./controller.js')
var world = require('./world.js')

var settings = {
  brainSize: 5,

  mutation: {
    newTieChance: 20,
    addTieChance: 10,
    changeTieChance: 30,
    removeTieChnace: 10
  },

  populationSize: 4,

  defaultCreature: {
    energy: 15,
    viewArea: 5,
    position: {
      x: 11,
      y: 11
    }
  },

  behaviourSteps: 10,

  cullPercentage: 50
}

evolution.initialiseEvolution({
  'world': new world.World(world.loadFromJSON('./worlds/main.json'), 21),
  'settings': settings
})

// console.log(JSON.stringify(world.generateEmpty(21)))

// go through one generation
// evolution.stepGeneration()

// loop through multiple generations
evolution.loopGenerations(50000)

// console.log(JSON.stringify(evolution.creatures[evolution.creatures.length - 1].brain))
console.log(evolution.creatures[evolution.creatures.length - 1].fitness, evolution.creatures[evolution.creatures.length - 1].brain)
