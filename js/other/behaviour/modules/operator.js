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
    run (entity) {
      return Math.floor(Math.random() * (this.max.run(entity) - this.min.run(entity) + 1)) + this.min.run(entity)
    }
  },
  'if': class {
    constructor (condition, whenTrue, whenFalse) {
      this.condition = condition
    }
    run (entity) {
      iterate((condition) ? whenTrue : whenFalse, entity)
    }
  },
  'loop': class {
    constructor (loops, code) {
      this.loops = loops
      this.code = code
    }
    run (entity) {
      for (var int = 0; int < this.loops; int += 1) {
        iterate(this.code, entity)
      }
    }
  }
}
