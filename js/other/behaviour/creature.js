var Entity = require('./entity.js')

class Creature {
	constructor (info, behavior) {
		this.behavior = behavior
		this.entity = new Entity(info)
	}

  behave () {
		for (var i = 0; i < this.behavior.length; i += 1) {
			this.behavior[i].run(this.entity)
			console.log(this.entity.log())
	  }
	}
}

module.exports = Creature
