module.exports = {
  'rotation': class {
    constructor (rotation) {
      this.rotation = rotation
    }

    run (properties) {
      if ([0, 1, 2, 3].indexOf(this.rotation) != -1) {
        properties.rotation = this.rotation
        // console.log('I rotated to direction ' + this.rotation.run(properties))
      }
      else {
        properties.rotation = 0
        // console.log('I rotated to direction ' + 0)
      }
    }
  }
}
