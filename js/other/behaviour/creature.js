class Creature {
	constructor (info, behavior) {
		this.behavior = behavior
		this.energy = info.energy
		this.rotation = info.rotation
		this.position = {x: info.position.x, y:info.position.y}
	}

	behave () {
		for (var i in this.behavior) {
	    this.behavior[i].run(this)
	  }
	}
}

module.exports = Creature
