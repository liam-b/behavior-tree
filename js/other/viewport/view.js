function showViewport(canvasElement){
	var c = canvasElement.getContext('2d');

	canvasElement.setAttribute('width', window.getComputedStyle(canvasElement).width);
	canvasElement.setAttribute('height', window.getComputedStyle(canvasElement).height);

	var width = canvasElement.width;
	var height = canvasElement.height;

	var activeCreature = new Creature(100,100);

	function draw(){
		c.fillStyle = "rgb(57, 59, 57)"
		c.fillRect(0,0,width,height);

		activeCreature.update();
		activeCreature.draw(c);

		requestAnimationFrame(draw);
	}
	requestAnimationFrame(draw);
}
