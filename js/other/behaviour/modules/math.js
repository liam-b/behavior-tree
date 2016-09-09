module.exports = {
  'add': class {
    constructor (value1, value2) {
      this.value = value
      this.value2 = value2
    }
    run () {
      return this.value.run() + this.value2.run()
    }
  },
  'subtract': class {
    constructor (value1, value2) {
      this.value = value
      this.value2 = value2
    }
    run () {
      return this.value.run() - this.value2.run()
    }
  },
  'multiply': class {
    constructor (value1, value2) {
      this.value = value
      this.value2 = value2
    }
    run () {
      return this.value.run() * this.value2.run()
    }
  },
  'divide': class {
    constructor (value1, value2) {
      this.value = value
      this.value2 = value2
    }
    run () {
      return this.value.run() / this.value2.run()
    }
  }
}
