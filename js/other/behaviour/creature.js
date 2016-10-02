var Properties = require('./properties.js')

// class Creature {
//   constructor (info, behavior) {
//     this.behavior = behavior
//     this.properties = new Properties(info)
//     this.iter = 0
//   }
//
//   behaveLoop () {
//     for (var i = 0; i < this.behavior.length; i += 1) {
//       this.behavior[i].run(this.properties)
//       console.log(this.properties.log())
//     }
//   }
//
//   fitness () {
//     this.properties.fitness = (Math.abs(4 - this.properties.position.x) + Math.abs(4 - this.properties.position.y)) * (this.properties.energy / 30)
//     return this.properties.fitness;
//   }
//
//   behave () {
//     if (this.iter >= this.behavior.length) {
//       this.finishedBehaving = true
//     }
//     else {
//       this.behavior[this.iter].run(this.properties)
//       this.iter += 1
//     }
//     //console.log('info', this.properties.log())
//   }
// }

module.exports = function (info, behavior) {
  this.behavior = behavior
  this.properties = new Properties(info)
  this.iter = 0

  this.behaveLoop = function () {
    for (var i = 0; i < this.behavior.length; i += 1) {
      this.behavior[i].run(this.properties)
      console.log(this.properties.log())
    }
  }

  this.evaluateFitness = function () {
    return (Math.abs(4 - this.properties.position.x) + Math.abs(4 - this.properties.position.y)) * (this.properties.energy / 30)
  }

  this.behave = function () {
    if (this.iter >= this.behavior.length) {
      this.finishedBehaving = true
    }
    else {
      this.behavior[this.iter].run(this.properties)
      this.iter += 1
    }
    //console.log('info', this.properties.log())
  }
}
