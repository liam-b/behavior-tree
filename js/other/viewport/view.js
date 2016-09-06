const Creature = require('./creature.js');
const Map = require('./map.js');
module.exports = function (canvasElement){
	var c = canvasElement.getContext('2d');

	canvasElement.setAttribute('width', window.getComputedStyle(canvasElement).width);
	canvasElement.setAttribute('height', window.getComputedStyle(canvasElement).height);

	var width = canvasElement.width;
	var height = canvasElement.height;

	var level = new Map();
	var activeCreature = new Creature(5,5,level);

	function draw(){
		c.fillStyle = "rgb(57, 59, 57)"
		c.fillRect(0,0,width,height);

		level.update();
		level.draw(c);

		activeCreature.update();
		activeCreature.draw(c);

		requestAnimationFrame(draw);
	}
	requestAnimationFrame(draw);
}
