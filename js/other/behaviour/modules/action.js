module.exports = {
  'move': class {
    constructor (distance) {
      this.distance = distance
    }

<<<<<<< HEAD
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
=======
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
>>>>>>> 8a4601e6a930bdc422a9ac5c9aa12c9a3ac39c34
          break
      }
      // console.log('I moved ' + changedDist + ' steps')
    }
  },
  'sleep': class {
    constructor (time) {
      this.time = time
    }

<<<<<<< HEAD
    run (entity) {
      entity.energy += Math.abs(this.time.run(entity))
      // console.log('I slept for ' +  Math.abs(this.time.run(entity)) + ' game update(s)')
=======
    run (properties) {
      properties.energy += this.time.run(properties)
      console.log('I slept for ' + this.time.run(properties) + ' game update(s)')
>>>>>>> 8a4601e6a930bdc422a9ac5c9aa12c9a3ac39c34
    }
  },
  'turn': class {
    constructor (rotation) {
      this.rotation = rotation
    }

    run (properties) {
      if ([0, 1, 2, 3].indexOf(this.rotation) != -1) {
<<<<<<< HEAD
        entity.rotation = this.rotation
        // console.log('I rotated to direction ' + this.rotation.run(entity))
      }
      else {
        entity.rotation = 0
        // console.log('I rotated to direction ' + 0)
=======
        properties.rotation = this.rotation
        console.log('I rotated to direction ' + this.rotation.run(properties))
      }
      else {
        properties.rotation = 0
        console.log('I rotated to direction ' + 0)
>>>>>>> 8a4601e6a930bdc422a9ac5c9aa12c9a3ac39c34
      }
    }
  }
}
