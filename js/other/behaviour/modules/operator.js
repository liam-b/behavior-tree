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
      this.value = min
      this.value2 = max
    }
    run (properties) {
      return Math.floor(Math.random() * (this.value2.run(properties) - this.value.run(properties) + 1)) + this.value.run(properties)
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
      this.value = loops
      this.nest = code
    }
    run (properties) {
      for (var int = 0; int < this.value; int += 1) {
        iterate(this.nest, properties)
      }
    }
  }
}
