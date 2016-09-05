var jobs = require('./functions.js');

function run (inputs, code) {
  let final = execute(inputs, code)
  if (final == undefined || final == NaN) return 0
  return final
}

function execute (inputs, code) {
  // console.log("'info'", code, typeof code, ['number', 'string', 'boolean'].contains(typeof code))
  if (['number', 'string', 'boolean'].contains(typeof code)) {
    return code
  }
  else if (typeof code[0] == 'object') {
    var output = []
    for (let iter in code) {
      if (typeof code[iter] != 'function') {
        output.push(execute(inputs, code[iter]))
      }
    }
    return output
  }
  else {
    for (var func in jobs) {
      if (code[0] == func || code[0] == jobs[func].shortName) {
        return jobs[func].run(execute, inputs, code, code.length > jobs[func].count)
      }
    }
  }
}
