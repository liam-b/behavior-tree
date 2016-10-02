var Creature = require('./creature.js')
var mutation = require('./mutation.js')

module.exports = function (settings) {
  this.settings = settings
  this.creatures = []
  this.generation = 0

  this.populate = function (count) {
    for (var i = 0; i < count; i += 1) {
      this.creatures.push(new Creature ({
        energy: this.settings.generation.energy,
        rotation: this.settings.generation.rotation,
        position: {
          x: this.settings.generation.x,
          y: this.settings.generation.y
        }
      }, mutation.generate({
        'minGen': this.settings.generation.mutation.min,
        'maxGen': this.settings.generation.mutation.max
      })))
    }
  }

  this.grade = function () {
    for (var creature in this.creatures) {
      while (!this.creatures[creature].properties.finishedBehaving) {
        this.creatures[creature].behave()
      }
      this.creatures[creature].fitness()
    }
  }

  this.cull = function () {
    this.creatures.sort(function (a, b) {
      if (a.properties.fitness > b.properties.fitness) return 1;
      if (a.properties.fitness < b.properties.fitness) return -1;
      return 0
    })
  }
}
