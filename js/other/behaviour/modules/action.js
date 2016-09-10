module.exports = {
  'move': class {
    constructor (distance) {
      this.distance = distance
      this.type = 'move'
    }

    run (properties) {
      var changedDist = this.distance.run(properties)
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
      this.time = time
      this.type = 'sleep'
    }
    run (properties) {
      properties.energy += Math.abs(this.time.run(properties))
    }
  },
  'turn': class {
    constructor (rotation) {
      this.rotation = rotation
      this.type = 'turn'
    }

    run (properties) {
      properties.rotation = this.rotation.run(properties)
    }
  }
}
