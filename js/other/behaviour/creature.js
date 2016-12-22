module.exports = function (info, brain, world, viewArea) {
  this.brain = brain
  this.properties = {
    energy: info.energy,
    rotation: info.rotation,
    fitness: 0,
    position: {
      x: info.position.x,
      y: info.position.y
    },
    finishedBehaving: false
  }

  this.world = world
  this.viewArea = viewArea
  this.viewport = []

  this.behave = function () {
    for (var x = 0; x < this.viewArea; x += 1) {
      this.viewport[x] = []
      for (var y = 0; y < this.viewArea; y += 1) {
        this.viewport[x][y] = this.world.world[this.properties.position.x + x - Math.floor(this.viewArea / 2)][this.properties.position.y + y - Math.floor(this.viewArea / 2)]
      }
    }
    for (var x = 0; x < this.viewArea; x += 1) {
      for (var y = 0; y < this.viewArea; y += 1) {
        if (this.brain[x][y].length > 0) {
          // console.log(this.viewport[x][y], this.brain[x][y])
          for (var link = 0; link < this.brain[x][y].length; link += 1) {
            if (this.viewport[x][y] == this.brain[x][y][link].test) {
              this.brain[x][y][link].run(this.properties)
            }
          }
        }
      }
    }
  }
}
