module.exports = {
  'myClass': class {
    constructor (doop) {
      console.log(doop)
    }
  }
}

var test = new module.exports['myClass']('hello')
