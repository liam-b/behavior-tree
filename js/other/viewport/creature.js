var img = new Image();
img.src = "assets/creature.png";

var creatureBrains = require('../behaviour/creature.js');
var tree = require('../behaviour/tree.js')

var Creature = function(x,y,level){

	this.level = level;

	this.brains = new creatureBrains({
		energy: 100,
		rotation: 0,
		position: {
			x: x,
			y: y
		}
	}, [
		new tree.action.turn(1),
		new tree.operator.loop(2, [
			new tree.action.move(new tree.operator.constant(1)),
		]),
		new tree.action.turn(2),
		new tree.operator.loop(2, [
			new tree.action.move(new tree.operator.constant(1)),
		]),
		new tree.action.turn(1),
		new tree.operator.loop(2, [
			new tree.action.move(new tree.operator.constant(1)),
		]),
		new tree.action.turn(0),
		new tree.operator.loop(2, [
			new tree.action.move(new tree.operator.constant(1)),
		]),
		new tree.action.turn(3),
		new tree.operator.loop(4, [
			new tree.action.move(new tree.operator.constant(1)),
		]),
	])
}

Creature.prototype.update = function() {
	this.brains.behave();
}

Creature.prototype.draw = function(c) {
	c.save();
	// c.translate(this.brains.properties.position.x*this.level.tileSize,this.brains.properties.position.y*this.level.tileSize);
	c.translate(this.brains.properties.position.x*this.level.tileSize+this.level.tileSize/2,this.brains.properties.position.y*this.level.tileSize+this.level.tileSize/2);
	c.rotate(this.brains.properties.rotation*90 * (Math.PI / 180));
	c.translate(-this.level.tileSize/2,-this.level.tileSize/2);
	c.drawImage(img,0,0,this.level.tileSize,this.level.tileSize);
	c.restore();

}
module.exports = Creature;
