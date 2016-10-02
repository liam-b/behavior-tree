const tree = require('./tree.js')

Math.randomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

Math.randomChance = function (chance) {
  return Math.randomInt(0, 100) < chance
}

Array.prototype.insert = function (index, item) {
  this.splice(index, 0, item);
}

module.exports = {
  change: function (options, behaviors) {
    for (behavior in behaviors) {
      console.log(behaviors[behavior])
      if (Math.randomChance(options.modify)) {
        if (behaviors[behavior].type == 'move') {
          behaviors[behavior].paramaters.distance = Math.randomInt(behaviors[behavior].paramaters.distance - options.modifyRange, behaviors[behavior].paramaters.distance + options.modifyRange)
          console.log('ting: ' + behaviors[behavior].paramaters.distance)
        }
        else if (behaviors[behavior].type == 'turn') {
          behaviors[behavior].paramaters.rotation = Math.randomInt(behaviors[behavior].paramaters.rotation - options.modifyRange, behaviors[behavior].paramaters.rotation + options.modifyRange)
          console.log('ting: ' + behaviors[behavior].paramaters.distance)
        }
      }
      if (Math.randomChance(options.change)) {
        if (Math.randomChance(50)) {
          behaviors[behavior] = new tree.action.turn(Math.randomInt(0, 3))
        }
        else {
          behaviors[behavior] = new tree.action.move(Math.randomInt(0, 5))
        }
      }
      if (Math.randomChance(options.edit)) {
        if (Math.randomChance(50)) {
          behaviors.splice(behavior)
        }
        else {
          if (Math.randomChance(50)) {
            behaviors.insert(behavior, new tree.action.turn(Math.randomInt(0, 3)))
          }
          else {
            behaviors.insert(behavior, new tree.action.move(Math.randomInt(0, 5)))
          }
        }
      }
    }
    return behaviors
  }
}
// 
// var test = [
//   new tree.action.turn(2),
//   new tree.action.move(1)
// ]
//
// console.log('start: ' + test)
//
// test = module.exports.change({
//   'modify': 30,
//   'modifyRange': 2,
//
//   'change': 20,
//
//   'edit': 10
// }, test)
//
// console.log('finish: ' + JSON.stringify(test))
