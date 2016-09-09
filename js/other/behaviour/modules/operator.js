function iterate (arr, creature) {
  for (var i in arr) {
    arr[i].run(creature)
  }
}

module.exports = {
  'constant': class {
    constructor (value) {
      this.value = value
    }
    run () {
      return this.value
    }
  },
  'random': class {
    constructor (min, max) {
      this.min = min
      this.max = max
    }
    run (properties) {
      return Math.floor(Math.random() * (this.max.run(properties) - this.min.run(properties) + 1)) + this.min.run(properties)
    }
  },
  'if': class {
    constructor (condition, whenTrue, whenFalse) {
      this.condition = condition
    }
    run (properties) {
      iterate((condition) ? whenTrue : whenFalse, properties)
    }
  },
  'loop': class {
    constructor (loops, code) {
      this.loops = loops
      this.code = code
    }
    run (properties) {
      for (var int = 0; int < this.loops; int += 1) {
        iterate(this.code, properties)
      }
    }
  }
}
