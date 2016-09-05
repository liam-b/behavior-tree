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
  }
}
