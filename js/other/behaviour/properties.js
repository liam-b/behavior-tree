module.exports = class {
  constructor (info) {
    this.energy = info.energy
    this.rotation = info.rotation
    this.fitness = 0;
    this.position = {
      x: info.position.x,
      y: info.position.y
    }
  }

  log () {
    return 'x: ' + this.position.x + ', y: ' + this.position.y + ', r: ' + this.rotation + ', e: ' + this.energy
  }
}
