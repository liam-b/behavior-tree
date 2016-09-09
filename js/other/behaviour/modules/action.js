module.exports = {
  'move': class {
    constructor (distance) {
      this.distance = distance
    }

    run (properties) {
      var changedDist = this.distance.run(properties)
      if (properties.energy - changedDist < 0) {
        changedDist = properties.energy
      }
      properties.energy -= changedDist
      switch (parseInt(properties.rotation)) {
        case 0:
          properties.position.y += changedDist
          break
        case 1:
          properties.position.x += changedDist
          break
        case 2:
          properties.position.y -= changedDist
          break
        case 3:
          properties.position.x -= changedDist
          break
      }
    }
  },
  'sleep': class {
    constructor (time) {
      this.time = time
    }
    run (properties) {
      properties.energy += Math.abs(this.time.run(properties))
      // console.log('I slept for ' +  Math.abs(this.time.run(properties)) + ' game update(s)')
      // console.log('I slept for ' + this.time.run(properties) + ' game update(s)')
    }
  },
  'turn': class {
    constructor (rotation) {
      this.rotation = rotation
    }

    run (properties) {
      properties.rotation = this.rotation.run(properties)
      // if ([0, 1, 2, 3].indexOf(this.rotation) != -1) {
      //   properties.rotation = this.rotation
      //   // console.log('I rotated to direction ' + this.rotation.run(properties))
      // }
    }
  }
}
