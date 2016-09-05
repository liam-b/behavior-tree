class Creature {
	constructor (behavior) {
		this.behavior = behavior
		this.energy = 0
		this.rotation = 0
		this.position = {x: 0, y: 0}
	}

	behave () {
		for (var i in this.behavior) {
	    this.behavior[i].run()
	  }
	}
}

module.exports = Creature
