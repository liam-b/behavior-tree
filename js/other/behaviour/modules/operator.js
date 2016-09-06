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
    run (creature) {
      return Math.floor(Math.random() * (this.max.run(creature) - this.min.run(creature) + 1)) + this.min.run(creature)
    }
  },
  'if': class {
    constructor (condition, whenTrue, whenFalse) {
      this.condition = condition
    }
    run (creature) {
      iterate((condition) ? whenTrue : whenFalse, creature)
    }
  },
  'loop': class {
    constructor (loops, code) {
      this.loops = loops
      this.code = code
    }
    run (creature) {
      for (var int = 0; int < this.loops; int += 1) {
        iterate(this.code, creature)
      }
    }
  }
}
