var Creature = require('./creature.js')
var mutation = require('./mutation.js')

module.exports = function (settings) {
  this.settings = settings
  this.creatures = []
  this.generation = 0

  this.populate = function () {
    for (var i = 0; i < this.settings.populationCount; i += 1) {
      this.creatures.push(new Creature ({
        energy: this.settings.generation.energy,
        rotation: this.settings.generation.rotation,
        fitness: 0,
        position: {
          x: this.settings.generation.position.x,
          y: this.settings.generation.position.y
        },
        finishedBehaving: false
      }, mutation.generate({
        'minGen': this.settings.generation.mutation.min,
        'maxGen': this.settings.generation.mutation.max
      })))
    }
  }

  this.grade = function () {
    for (var creature in this.creatures) {
      while (this.creatures[creature].iter < this.creatures[creature].behavior.length) {
        this.creatures[creature].behave()
      }
      this.creatures[creature].properties.fitness = this.creatures[creature].evaluateFitness()
    }

    this.creatures.sort(function (a, b) {
      if (a.properties.fitness > b.properties.fitness) return 1;
      if (a.properties.fitness < b.properties.fitness) return -1;
      return 0
    })
  }

  this.cull = function () {
    let cullBelow = settings.cullPercent / 100 * this.creatures.length

    for (var creature = this.creatures.length; creature > cullBelow; creature -= 1) {
      this.creatures.splice(creature, 1)
    }
  }

  this.repopulate = function () {
    for (var oldCreature in this.creatures) {
      this.creatures[oldCreature].properties = {
        energy: this.settings.generation.energy,
        rotation: this.settings.generation.rotation,
        fitness: this.creatures[oldCreature].properties.fitness,
        position: {
          x: this.settings.generation.position.x,
          y: this.settings.generation.position.y
        },
        finishedBehaving: false
      }
      this.creatures[oldCreature].iter = 0
    }
    var newCreatures = this.creatures
    while (newCreatures.length < this.settings.populationCount) {
      for (var newCreature in this.creatures) {
        if (parseInt(newCreatures.length) >= this.settings.populationCount) break
        newCreatures.push(new Creature ({
          energy: this.settings.generation.energy,
          rotation: this.settings.generation.rotation,
          fitness: 0,
          position: {
            x: this.settings.generation.position.x,
            y: this.settings.generation.position.y
          },
          finishedBehaving: false
        }, mutation.change({
          modify: this.settings.mutation.modify,
          modifyRange: this.settings.mutation.modifyRange,
          change: this.settings.mutation.change,
          edit: this.settings.mutation.edit
        }, this.creatures[newCreature].behavior)))
      }
    }
    // for (var d in newCreatures) {
    //   console.log(newCreatures[d].properties.fitness)
    // }
    // console.log('w---------'  + newCreatures.length + '---------')
    this.creatures = newCreatures
  }
}

var test = new module.exports ({
  generation: {
    energy: 100,
    rotation: 0,
    position: {
      x: 0,
      y: 0
    },
    mutation: {
      min: 5,
      max: 10
    }
  },

  cullPercent: 10,
  populationCount: 100,

  mutation: {
    modify: 1,
    modifyRange: 1,
    change: 0,
    edit: 0
  }
})

test.populate()
test.grade()
// console.log('l', test.creatures[0].properties.fitness)
// test.cull()
// test.repopulate()
// test.grade()
// console.log('t', test.creatures[0].properties.fitness)

// for (var l in test.creatures) {
//   console.log(test.creatures[l].behavior, test.creatures[l].properties.fitness)
// }
// console.log(test.creatures)

// console.log(JSON.stringify(test.creatures))

for (var i = 0; i < 50; i += 1) {
  test.grade()
  // for (var d in test.creatures) {
  //   console.log(test.creatures[d].properties.fitness)
  // }
  // console.log('s---------'  + test.creatures.length + '---------')
  test.cull()
  // for (var d in test.creatures) {
  //   console.log(test.creatures[d].properties.fitness)
  // }
  // console.log('c---------'  + test.creatures.length + '---------')
  test.repopulate()
  test.grade()
  for (var d in test.creatures) {
    console.log(test.creatures[d].properties.fitness)
  }
  console.log('---------'  + test.creatures.length + '---------')
}

// console.log(test.creatures)
