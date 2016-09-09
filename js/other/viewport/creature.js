var img = new Image();
img.src = "assets/creature.png";

var creatureBrains = require('../behaviour/creature.js');
var tree = require('../behaviour/tree.js')

var Creature = function(x,y,level){

	this.level = level;

	this.brains = new creatureBrains({
		energy: 1000,
		rotation: 0,
		position: {
			x: x,
			y: y
		}
	}, [
		// new tree.action.turn(1),
		// new tree.action.move(1),
		// new tree.action.turn(0),
		// new tree.action.move(1),
		// new tree.action.sleep(5)
		new tree.action.turn(0),
	  new tree.action.move(1),
		new tree.action.move(1),
		new tree.action.turn(1),
	  new tree.action.move(1),
		new tree.action.move(1),
		new tree.action.turn(2),
	  new tree.action.move(1),
		new tree.action.move(1),
		new tree.action.turn(1),
	  new tree.action.move(1),
		new tree.action.move(1),
		new tree.action.turn(0),
	  new tree.action.move(1),
		new tree.action.move(1),
		new tree.action.turn(3),
	  new tree.action.move(1),
		new tree.action.move(1),
		new tree.action.turn(2),
	  new tree.action.move(1),
		new tree.action.move(1),
		new tree.action.turn(3),
	  new tree.action.move(1),
		new tree.action.move(1)
	])

}

Creature.prototype.update = function() {
	this.brains.behave();
}

Creature.prototype.draw = function(c) {
	c.drawImage(img,this.brains.properties.position.x*this.level.tileSize,this.brains.properties.position.y*this.level.tileSize,this.level.tileSize,this.level.tileSize);
	console.log(this.brains.properties.position.x + ":" + this.brains.properties.position.y)
}
module.exports = Creature;
