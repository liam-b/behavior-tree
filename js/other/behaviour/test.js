var evolution = require('./controller.js')

// needed to setup stuff
evolution.initialiseEvolution()

// go through one generation
evolution.stepGeneration()

// loop through multiple generations
evolution.loopGenerations(10)

// loop through multiple generations as fast as possible but you can't access creature array while this is happening
evolution.loopGenerationsFast(10)

// array of creatures updated after each generation
evolution.creatures
