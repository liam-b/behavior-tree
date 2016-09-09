var Properties = require('./properties.js')

class Creature {
	constructor (info, behavior) {
		this.behavior = behavior
		this.entity = new Entity(info)
		this.iter = 0
	}

  behaveLoop () {
		for (var i = 0; i < this.behavior.length; i += 1) {
			this.behavior[i].run(this.entity)
			console.log(this.entity.log())
	  }
		this.properties = new Properties(info)
	}

  behave () {
		for (var i in this.behavior) {
			this.behavior[i].run(this.properties)
		}
	}

	behave () {
		if (this.iter >= this.behavior.length) this.iter = 0
		this.behavior[this.iter].run(this.entity)
		this.iter += 1
		console.log(this.entity.log())
	}
}

module.exports = Creature
