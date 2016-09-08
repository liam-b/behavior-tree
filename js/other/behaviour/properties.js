module.exports = class {
  constructor (info) {
    this.energy = info.energy
    this.rotation = info.rotation
    this.position = {
      x: info.position.x,
      y: info.position.y
    }
  }
}
