var img = new Image();
img.src = "assets/creature.png";

var Creature = function(x,y,level){
	this.x = x;
	this.y = y;
	this.level = level;

	this.energy = 100;
	this.health = 100;
}

Creature.prototype.update = function() {

}

Creature.prototype.draw = function(c) {
	c.drawImage(img,this.x*this.level.tileSize,this.y*this.level.tileSize,this.level.tileSize,this.level.tileSize);
}
