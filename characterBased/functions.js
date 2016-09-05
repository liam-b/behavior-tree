var Job = require('./job.js')

module.exports = {
  'add': new Job({shortName: 'a', inputCount: 2}, function (execute, inputs, arguments, validArguments) {
    console.log(execute, inputs, arguments, validArguments)
    return (validArguments) ? execute(inputs, arguments[1]) + execute(inputs, arguments[2]) : 0
  }),
  'subtract': new Job({shortName: 'b', inputCount: 2}, function (execute, inputs, arguments, validArguments) {
    console.log(execute, inputs, arguments, validArguments)
    return (validArguments) ? execute(inputs, arguments[1]) - execute(inputs, arguments[2]) : 0
  }),
  'input': new Job({shortName: 'c', inputCount: 1}, function (execute, inputs, arguments, validArguments) {
    return (validArguments) ? inputs[execute(inputs, arguments[1])] : 0
  })
}
