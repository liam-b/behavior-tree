// const tree = require('./tree.js')
//
// Math.randomInt = function (min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
//
// Math.randomChance = function (chance) {
//   return Math.randomInt(0, 100) < chance
// }
//
// function insert (arr, index, item) {
//   arr.splice(index, 0, item);
// }
// 
// module.exports = {
//   change: function (options, behaviors) {
//     // console.log('in', behaviors[0].paramaters)
//     for (var behavior in behaviors) {
//       if (Math.randomChance(options.modify)) {
//         if (behaviors[behavior].type == 'move') {
//           behaviors[behavior].paramaters.distance = Math.randomInt(behaviors[behavior].paramaters.distance - options.modifyRange, behaviors[behavior].paramaters.distance + options.modifyRange)
//         }
//         else if (behaviors[behavior].type == 'turn') {
//           behaviors[behavior].paramaters.rotation = Math.randomInt(behaviors[behavior].paramaters.rotation - options.modifyRange, behaviors[behavior].paramaters.rotation + options.modifyRange)
//         }
//       }
//       if (Math.randomChance(options.change)) {
//         if (Math.randomChance(50)) {
//           behaviors[behavior] = new tree.action.turn(Math.randomInt(0, 3))
//         }
//         else {
//           behaviors[behavior] = new tree.action.move(Math.randomInt(0, 3))
//         }
//       }
//       if (Math.randomChance(options.edit)) {
//         if (Math.randomChance(50)) {
//           behaviors.splice(behavior)
//         }
//         else {
//           if (Math.randomChance(50)) {
//             insert(behaviors, behavior, new tree.action.turn(Math.randomInt(0, 3)))
//           }
//           else {
//             insert(behaviors, behavior, new tree.action.move(Math.randomInt(0, 3)))
//           }
//         }
//       }
//     }
//     // console.log('out', behaviors[0].paramaters)
//     return behaviors
//   },
//
//   generate (options) {
//     var newBehaviors = []
//     for (var i = 0; i < Math.randomInt(options.minGen, options.maxGen); i += 1) {
//       if (Math.randomChance(50)) {
//         newBehaviors.push(new tree.action.turn(Math.randomInt(0, 3)))
//       }
//       else {
//         newBehaviors.push(new tree.action.move(Math.randomInt(0, 5)))
//       }
//     }
//     // console.log('gen', newBehaviors[0].paramaters)
//     return newBehaviors
//   }
// }
//
// // var test = module.exports.generate({
// //   'minGen': 5,
// //   'maxGen': 10
// // })
//
// //
// // var test = [
// //   new tree.action.turn(2),
// //   new tree.action.move(1)
// // ]
// //
// // console.log('start: ' + test)
// //
// // test = module.exports.change({
// //   'modify': 30,
// //   'modifyRange': 2,
// //
// //   'change': 20,
// //
// //   'edit': 10
// // }, test)
// //
// // console.log('finish: ' + JSON.stringify(test))
