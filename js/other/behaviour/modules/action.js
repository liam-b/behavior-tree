module.exports = {
  'move': class {
    constructor (distance) {
      this.distance = distance
    }

    run (properties) {
      var changedDist = this.distance.run(properties)
      properties.energy -= 1
      switch (properties.rotation) {
        case 0: //Down
          properties.position.y += changedDist
          break
        case 1: //Right
          properties.position.x += changedDist
          break
        case 2: //Up
          properties.position.y -= changedDist
          break
        case 3: // Left
          properties.position.x -= changedDist
          break
      }
      console.log('I moved ' + changedDist + ' steps')
    }
  },
  'sleep': class {
    constructor (time) {
      this.time = time
    }

    run (properties) {
      properties.energy += this.time.run(properties)
      console.log('I slept for ' + this.time.run(properties) + ' game update(s)')
    }
  },
  'turn': class {
    constructor (rotation) {
      this.rotation = rotation
    }

    run (properties) {
      if ([0, 1, 2, 3].indexOf(this.rotation) != -1) {
        properties.rotation = this.rotation
        console.log('I rotated to direction ' + this.rotation.run(properties))
      }
      else {
        properties.rotation = 0
        console.log('I rotated to direction ' + 0)
      }
    }
  }
}
