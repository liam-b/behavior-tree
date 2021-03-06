module.exports = function (info, brain, viewArea) {
  this.brain = brain

  this.energy = info.energy,
  this.fitness = 0
  this.position = {
    x: info.position.x,
    y: info.position.y
  }
  this.behaved = false

  this.viewArea = viewArea
  this.viewport = []

  this.behave = function (world) {
    this.findViewport(world)
    for (var x = 0; x < this.viewArea; x += 1) {
      for (var y = 0; y < this.viewArea; y += 1) {
        if (this.brain.viewArea[x][y].length > 0) {
          for (var link = 0; link < this.brain.viewArea[x][y].length; link += 1) {
            if (this.viewport[x][y] == this.brain.viewArea[x][y][link].test) {
              if (!this.behaved) {
                this.brain.viewArea[x][y][link].run(this, world)
                this.behaved = true
              }
            }
          }
        }
      }
    }
    this.behaved = false
  }

  this.findViewport = function (world) {
    this.viewport = []
    for (var x = 0; x < this.viewArea; x += 1) {
      this.viewport[x] = []
      for (var y = 0; y < this.viewArea; y += 1) {
        if (this.position.x + x - Math.floor(this.viewArea / 2) < 0 || this.position.x + x - Math.floor(this.viewArea / 2) > world.size - 1 || this.position.y + y - Math.floor(this.viewArea / 2) < 0 || this.position.y + y - Math.floor(this.viewArea / 2) > world.size - 1) {
          this.viewport[x][y] = ''
        }
        else {
            this.viewport[x][y] = world.world[this.position.x + x - Math.floor(this.viewArea / 2)][this.position.y + y - Math.floor(this.viewArea / 2)]
        }
      }
    }
  }
}
