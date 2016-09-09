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

	behave () {
		if (this.iter >= this.behavior.length) this.iter = 0
		this.behavior[this.iter].run(this.properties)
		this.iter += 1
		console.log('info', this.properties.log())
	}
}

module.exports = Creature
