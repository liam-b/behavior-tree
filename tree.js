const information = {
  'a': {
    count: 2,
    job: function (props, vals, check) {
      return (check) ? execute(props, vals[1]) + execute(props, vals[2]) : 0
    },
    name: 'add'
  },
  'b': {
    count: 2,
    job: function (props, vals, check) {
      return (check) ? execute(props, vals[1]) - execute(props, vals[2]) : 0
    },
    name: 'subtract'
  },
  'c': {
    count: 1,
    job: function (props, vals, check) {
      if (check && props[execute(props, vals[1])]) return (check) ? props[execute(props, vals[1])] : 0
      return 0
    },
    name: 'input'
  },
  'd': {
    count: 1,
    job: function (props, vals, check) {
      return (check) ? Math.floor(Math.random() * 100) <= vals[1] : 0
    },
    name: 'random'
  },
  'e': {
    count: 2,
    job: function (props, vals, check) {
      return (check) ? execute(props, vals[1]) * execute(props, vals[2]) : 0
    },
    name: 'multiply'
  },
}

function run (inputs, code) {
  let final = execute(inputs, code)
  if (final == undefined || final == NaN) return 0
  return final
}

function execute (inputs, code) {
  // console.log("'info'", code, typeof code)
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
    for (var func in information) {
      if (code[0] == func || code[0] == information[func].name) {
        return information[func].job(inputs, code, code.length > information[func].count)
      }
    }
  }
}

function parse (dna) {
  for (var char in dna) {
    if (typeof dna[char] == 'string' && char != 0) {
      for (var i = 0; i < information[dna[char]].count; i += 1) {
        let index = parseInt(char) + i + 1
        if (typeof dna[index] == 'string') {
          let next = dna.remove(index, index + information[dna[index]].count)
          next = parse(next)
          dna.insert(index, next)
        }
      }
      let next = dna.remove(char, parseInt(char) + information[dna[char]].count)
      dna.insert(char, next)
    }
    else if (typeof dna[char] == 'object') {
      var newDna = []
      for (var strip of dna) {
        newDna.push(parse(strip))
      }
      dna = newDna
    }
  }
  return dna
}

module.exports.run = run
module.exports.execute = execute
module.exports.parse = parse
