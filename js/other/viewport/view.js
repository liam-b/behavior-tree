const Map = require('./map.js');
const Goal = require('./goal.js');

var View = function(canvasElement,map) {
	this.c = canvasElement.getContext('2d');

	canvasElement.setAttribute('width', window.getComputedStyle(canvasElement).width);
	canvasElement.setAttribute('height', window.getComputedStyle(canvasElement).height);

	this.width = canvasElement.width;
	this.height = canvasElement.height;

	this.level = new Map(map);
	this.creature = null;

	this.goal = new Goal(4,4,this.level);

	this.sceneEntities = [];

	// requestAnimationFrame(this.draw);
}

View.prototype.draw = function() {
	this.c.fillStyle = "rgb(57, 59, 57)"
	this.c.fillRect(0,0,this.width,this.height);

	this.c.save();
	if (this.creature)
		this.c.translate(-this.creature.brains.position.x*64 -32 + this.width/2,-this.creature.brains.position.y*64 -32 + this.height/2)

	this.level.update();
	this.level.draw(this.c);

	for (var i = 0; i < this.sceneEntities.length; i++){
		this.sceneEntities[i].update();
		this.sceneEntities[i].draw(this.c);

	}
	if (this.creature){
		this.creature.update(this.level.world);
		this.creature.draw(this.c,this.level);
	}

	this.goal.draw(this.c);

	this.c.restore();
}
module.exports = View;
