var Properties = require('./properties.js')

class Creature {
	constructor (info, behavior) {
		this.behavior = behavior
		this.properties = new Properties(info)
	}

  behave () {
		for (var i in this.behavior) {
			this.behavior[i].run(this.properties)
		}
	}
}

module.exports = Creature
