var action = require('./action.js')
var tile = require('./tile.js')

function randomChance (chance) {
  return Math.random() < chance / 100
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomTile () {
  switch (randomInt(0, 2)) {
    case 0:
      return tile.air
    case 1:
      return tile.wall
    case 2:
      return tile.food
  }
}

function randomAction () {
  switch (randomInt(0, 3)) {
    case 0:
      return action.move.up
    case 1:
      return action.move.down
    case 2:
      return action.move.left
    case 3:
      return action.move.right
  }
}

module.exports = {
  create: function (settings) {
    var newBrain = []
    for (var x = 0; x < settings.brainSize; x += 1) {
      newBrain[x] = []
      for (var y = 0; y < settings.brainSize; y += 1) {
        if (randomChance(settings.newTieChance)) {
          newBrain[x][y] = [{'test': randomTile(), 'run': randomAction()}]
        }
        else {
          newBrain[x][y] = []
        }
      }
    }
    return newBrain
  },

  mutate: function (brain, settings) {
    for (var x = 0; x < settings.brainSize; x += 1) {
      for (var y = 0; y < settings.brainSize; y += 1) {
        for (var tie = 0; tie < brain[x][y].length; tie += 1) {
          if (randomChance(settings.changeTieChance)) {
            brain[x][y][tie] = {'test': randomTile(), 'run': randomAction()}
          }
        }
        if (randomChance(settings.addTieChance)) {
          brain[x][y].push({'test': randomTile(), 'run': randomAction()})
        }
        for (var tie = 0; tie < brain[x][y].length; tie += 1) {
          if (randomChance(settings.removeTieChance) && brain[x][y].length > 0) {
            brain[x][y].splice(tie, 1)
          }
        }
      }
    }

    return brain
  }
}

// var test = module.exports.create({brainSize: 3, newTie: 20})
// console.log(test)
// console.log()
// module.exports.mutate(test, {brainSize: 3, addTie: 10, changeTie: 30, removeTie: 5})
// console.log(test)
