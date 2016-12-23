var evolution = require('./controller.js')

// needed to setup stuff
evolution.initialiseEvolution()

// go through one generation
evolution.stepGeneration()

// loop through multiple generations
evolution.loopGenerations(1000)
evolution.creatures
