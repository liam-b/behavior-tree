module.exports = {
  'move': class {
    constructor (distance) {
      this.distance = distance
    }

    run (entity) {
      var changedDist = this.distance.run(entity)
      if (entity.energy - changedDist < 0) {
        changedDist = entity.energy
      }
      entity.energy -= changedDist
      switch (entity.rotation) {
        case 0:
          entity.position.y += changedDist
          break
        case 1:
        case 90:
          entity.position.x += changedDist
          break
        case 2:
        case 180:
          entity.position.y -= changedDist
          break
        case 3:
        case 270:
          entity.position.x -= changedDist
          break
      }
      // console.log('I moved ' + changedDist + ' steps')
    }
  },
  'sleep': class {
    constructor (time) {
      this.time = time
    }

    run (entity) {
      entity.energy += Math.abs(this.time.run(entity))
      // console.log('I slept for ' +  Math.abs(this.time.run(entity)) + ' game update(s)')
    }
  },
  'turn': class {
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
