const Map = require('./map.js');
const Goal = require('./goal.js');

var View = function(canvasElement) {
	this.c = canvasElement.getContext('2d');

	canvasElement.setAttribute('width', window.getComputedStyle(canvasElement).width);
	canvasElement.setAttribute('height', window.getComputedStyle(canvasElement).height);

	this.width = canvasElement.width;
	this.height = canvasElement.height;

	this.level = new Map();

	this.goal = new Goal(4,4,this.level);

	this.sceneEntities = [];

	// requestAnimationFrame(this.draw);
}

View.prototype.draw = function() {
	this.c.fillStyle = "rgb(57, 59, 57)"
	this.c.fillRect(0,0,this.width,this.height);

	this.level.update();
	this.level.draw(this.c);

	for (var i = 0; i < this.sceneEntities.length; i++){
		this.sceneEntities[i].update();
		this.sceneEntities[i].draw(this.c);

	}

	this.goal.draw(this.c);



}
module.exports = View;
