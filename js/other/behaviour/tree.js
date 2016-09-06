module.exports = {
  action: require('./modules/action.js'),
  operator: require('./modules/operator.js'),
  math: require('./modules/math.js')
}

Number.prototype.run = function () {
  return this
}
