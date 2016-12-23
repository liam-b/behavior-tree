var evolution = require('./controller.js')

// needed to setup stuff
evolution.initialiseEvolution()

// go through one generation
// evolution.stepGeneration()

// loop through multiple generations
evolution.loopGenerations(1000)

console.log(evolution.creatures[evolution.creatures.length - 1])
