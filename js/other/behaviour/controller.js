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

var creatures = evolution.populate(mutationSettings, evolutionSettings, newCreatureSettings)
creatures = evolution.grade(creatures, gradeSettings)
creatures = evolution.cull(creatures, cullBelow)
creatures = evolution.repopulate(creatures, evolutionSettings, newCreatureSettings, mutationSettings)
creatures = evolution.grade(creatures, gradeSettings)
creatures = evolution.cull(creatures, cullBelow)
creatures = evolution.repopulate(creatures, evolutionSettings, newCreatureSettings, mutationSettings)
creatures = evolution.grade(creatures, gradeSettings)
evolution.showGrades(creatures)

// console.log(creatures)
