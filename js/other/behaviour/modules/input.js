module.exports = {
  'rotation': class {
    constructor (rotation) {
      this.rotation = rotation
    }

    run (entity) {
      if ([0, 1, 2, 3].indexOf(this.rotation) != -1) {
        entity.rotation = this.rotation
        // console.log('I rotated to direction ' + this.rotation.run(entity))
      }
      else {
        entity.rotation = 0
        // console.log('I rotated to direction ' + 0)
      }
    }
  }
}
