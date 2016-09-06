module.exports.operator = require('./modules/operator.js')
module.exports.action = require('./modules/action.js')

Number.prototype.run = function () {
  return this
}

module.exports.run = function () {
  for (var i in arr) {
    arr[i].run()
  }
}
