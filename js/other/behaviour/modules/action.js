module.exports = {
  'move': class {
    constructor (distance) {
      this.type = 'move'
      this.paramaters = {
        'distance': distance
      }
    }

    run (properties) {
      var changedDist = this.paramaters.distance.run(properties)
      if (properties.energy - changedDist < 0) {
        changedDist = properties.energy
      }
      properties.energy -= changedDist
      switch (parseInt(properties.rotation)) {
        case 0:
          properties.position.y -= changedDist
          break
        case 1:
          properties.position.x += changedDist
          break
        case 2:
          properties.position.y += changedDist
          break
        case 3:
          properties.position.x -= changedDist
          break
      }
    }
  },
  'sleep': class {
    constructor (time) {
      this.type = 'sleep'
      this.paramaters = {
        'time': time
      }
    }
    run (properties) {
      properties.energy += Math.abs(this.paramaters.time.run(properties))
    }
  },
  'turn': class {
    constructor (rotation) {
      this.type = 'turn'
      this.paramaters = {
        'rotation': rotation
      }
    }

    run (properties) {
      properties.rotation = this.paramaters.rotation.run(properties)
    }
  }
}
