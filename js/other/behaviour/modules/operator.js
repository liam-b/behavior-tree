function iterate (arr) {
  for (var i in arr) {
    arr[i].run()
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
    run () {
      return Math.floor(Math.random() * (this.max.run() - this.min.run() + 1)) + this.min.run()
    }
  },
  'if': class {
    constructor (condition, whenTrue, whenFalse) {
      this.condition = condition
    }
    run () {
      iterate((condition) ? whenTrue : whenFalse)
    }
  },
  'loop': class {
    constructor (loops, code) {
      this.loops = loops
      this.code = code
    }
    run () {
      for (var int = 0; int < this.loops; int += 1) {
        iterate(this.code)
      }
    }
  }
}
