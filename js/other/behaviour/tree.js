var operator = require('./modules/operator.js')
var action = require('./modules/action.js')

Number.prototype.run = function () {
  return this
}

module.exports.run = function () {
  for (var i in arr) {
    arr[i].run()
  }
}

module.exports.action = action
module.exports.operator = operator
