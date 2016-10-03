module.exports = function (info, behavior) {
  this.behavior = behavior
  this.properties = {
    energy: info.energy,
    rotation: info.rotation,
    fitness: 0,
    position: {
      x: info.position.x,
      y: info.position.y
    },
    finishedBehaving: false
  }

  this.iter = 0

  this.evaluateFitness = function () {
    return (Math.abs(4 - this.properties.position.x) + Math.abs(4 - this.properties.position.y)) * (100 - (this.properties.energy / 30))
  }

  this.behave = function () {
    this.behavior[this.iter].run(this.properties)
    this.iter += 1
  }
}
