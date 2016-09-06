module.exports = {
  'move': class {
    constructor (distance) {
      this.distance = distance
    }

    run (creature) {
      creature.position.x += 10
      console.log('I moved ' + this.distance.run() + ' steps')
    }
  },
  'sleep': class {
    constructor (time) {
      this.time = time
    }

    run (creature) {
      creature.energy += 10
      console.log('I slept for ' + this.time.run() + ' minute(s)')
    }
  },
  'turn': class {
    constructor (rotation) {
      this.rotation = rotation
    }

    run (creature) {
      if ([0, 1, 2, 3].indexOf(this.rotation) != -1) {
        creature.rotation = this.rotation
        console.log('I rotated to direction ' + this.rotation.run())
      }
      else {
        creature.rotation = 0
        console.log('I rotated to direction ' + 0)
      }
    }
  }
}
