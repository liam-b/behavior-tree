var img = new Image();
img.src = "assets/goal.png";

var Goal = function (x,y,level){
	this.x = x;
	this.y = y;

	this.level = level;
}
Goal.prototype.draw = function (c){
	c.drawImage(img,this.x*this.level.tileSize,this.y*this.level.tileSize,this.level.tileSize,this.level.tileSize);
}

module.exports = Goal;
