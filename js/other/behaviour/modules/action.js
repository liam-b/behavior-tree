module.exports = {
  'move': class {
    constructor (distance) {
      this.distance = distance
    }

    run () {
      console.log('I moved ' + this.distance.run() + ' steps')
    }
  },
  'sleep': class {
    constructor (time) {
      this.time = time
    }

    run () {
      console.log('I slept for ' + this.time.run() + ' minute(s)')
    }
  },
  'turn': class {
    constructor (rotation) {
      this.rotation = rotation
    }

    run () {
      if ([0, 1, 2, 3].indexOf(this.rotation) != -1) {
        console.log('I rotated to direction ' + this.rotation.run())
      }
      else {
        console.log('I rotated to direction ' + 0)
      }
    }
  }
}
