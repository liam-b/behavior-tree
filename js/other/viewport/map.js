var tileImg = new Image();
tileImg.src = "assets/tiles.png";

var Map = function(){
	this.width = 10;
	this.height = 10;
	this.fitOnScreen = false;

	if (this.fitOnScreen){
		this.tileSize = Math.min(width / this.width, height / this.height);
	} else {
		this.tileSize = 64;
	}

	this.drawGrid = true;
	this.tiles =
	[
		1,1,1,1,1,1,1,1,1,1,
		1,0,0,0,0,0,0,0,0,1,
		1,0,0,0,0,0,0,0,0,1,
		1,0,0,0,0,0,0,0,0,1,
		1,0,0,0,0,0,0,0,0,1,
		1,0,0,0,0,0,0,0,0,1,
		1,0,0,0,0,0,0,0,0,1,
		1,0,0,0,0,0,0,0,0,1,
		1,0,0,0,0,0,0,0,0,1,
		1,1,1,1,1,1,1,1,1,1
	]
}

Map.prototype.update = function() {

}

Map.prototype.getTile = function(x,y){
	return this.tiles[y*this.width + x];
}

Map.prototype.draw = function(c) {

	for (var x = 0; x < this.width; x++){
		for (var y = 0; y < this.height; y++){
			var tile = this.getTile(x,y);
			c.drawImage(tileImg,300*tile,0,300,300,x*this.tileSize,y*this.tileSize,this.tileSize,this.tileSize);

		}
	}

	if (this.drawGrid){

		c.strokeStyle = "rgba(97, 120, 93, 0.53)";

		c.beginPath();
		//Vertical gridlines.
		for (var x = 0; x < this.width; x++){
			c.moveTo(x*this.tileSize,0);
			c.lineTo(x*this.tileSize,this.height*this.tileSize);
		}
		//Horizontal lines
		for (var y = 0; y < this.height; y++){
			c.moveTo(0,y*this.tileSize);
			c.lineTo(this.width*this.tileSize,y*this.tileSize);

		}
		c.stroke();
	}
}
module.exports = Map;
