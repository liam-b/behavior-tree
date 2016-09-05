var img = new Image();
img.src = "assets/creature.png";

var Creature = function(x,y){
	this.x = x;
	this.y = y;

	this.energy = 100;
	this.health = 100;
}

Creature.prototype.update = function() {

}

Creature.prototype.draw = function(c) {
	c.drawImage(img,this.x,this.y,64,64);
}
