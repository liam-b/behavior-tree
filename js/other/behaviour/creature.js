var Entity = require('./entity.js')

class Creature {
	constructor (info, behavior) {
		this.behavior = behavior
		this.entity = new Entity(info)
	}

  behave () {
		for (var i in this.behavior) {
	    this.behavior[i].run(this.entity)
	  }
	}
}

module.exports = Creature
