var Properties = require('./properties.js')

class Creature {
  constructor (info, behavior) {
    this.behavior = behavior
    this.properties = new Properties(info)
    this.iter = 0
  }

  behaveLoop () {
    for (var i = 0; i < this.behavior.length; i += 1) {
      this.behavior[i].run(this.properties)
      console.log(this.properties.log())
    }
  }

	fitness () {
		this.properties.fitness = (
			- Math.abs(4 - this.properties.position.x) //Further from x target = lower
			- Math.abs(4 - this.properties.position.y) //Further from y target = lower
			+ (this.properties.energy/100)*100           //Higher energy = higher
		)

		return this.properties.fitness;
	}

	behave () {
		if (this.iter >= this.behavior.length) this.iter = 0
		this.behavior[this.iter].run(this.properties)
		this.iter += 1
		//console.log('info', this.properties.log())
	}
}3

module.exports = Creature
