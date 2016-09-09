module.exports = {
  'rotation': class {
    constructor (rotation) {
      this.rotation = rotation
    }

    run (properties) {
      if ([0, 1, 2, 3].indexOf(this.rotation) != -1) {
        properties.rotation = this.rotation
      }
      else {
        properties.rotation = 0
      }
    }
  }
}
