module.exports = class Job {
  constructor (argumments, func) {
    this.job = func
    this.count = argumments.inputCount
    this.name = argumments.shortName
  }

  run (execute, inputs, args, check) {
    return this.job(execute, inputs, args, check)
  }
}
