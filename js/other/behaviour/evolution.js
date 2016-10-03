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
    while (this.creatures.length < this.settings.populationCount) {
      for (var newCreature in this.creatures) {
        if (newCreature + this.creatures.length >= this.settings.populationCount) break
        this.creatures[newCreature].properties = {
          energy: this.settings.generation.energy,
          rotation: this.settings.generation.rotation,
          fitness: 0,
          position: {
            x: this.settings.generation.position.x,
            y: this.settings.generation.position.y
          },
          finishedBehaving: false
        }
        this.creatures.push(new Creature ({
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
  }
}

var test = new module.exports ({
  'generation': {
    'energy': 100,
    'rotation': 0,
    'position': {
      'x': 0,
      'y': 0
    },
    'mutation': {
      'min': 4,
      'max': 10
    }
  },

  'cullPercent': 10,
  'populationCount': 100,

  'mutation': {
    'modify': 30,
    'modifyRange': 2,
    'change': 20,
    'edit': 10
  }
})

test.populate()

for (var i = 0; i < 20; i += 1) {
  test.grade()
  test.cull()
  test.repopulate()
  console.log(i)
}

test.grade()

if (test.creatures[0].properties.fitness < 5) {
  console.log(test.creatures[0])
}

console.log(test.creatures)
