var img = new Image();
img.src = "assets/creature.png";

var CreatureBrains = require('../behaviour/creature.js')
var World = require('../behaviour/world.js')
var tile = require('../behaviour/tile.js')
var action = require('../behaviour/action.js')

var Creature = function(brain){
  this.brains = brain;
}

Creature.prototype.update = function(world) {
  //if (this.brains == null) return;

  this.brains.behave(world);
}

Creature.prototype.draw = function(c,level) {
  //if (this.brains == null) return;

  c.save();
  // c.translate(this.brains.properties.position.x*this.level.tileSize,this.brains.properties.position.y*this.level.tileSize);
  c.translate(this.brains.position.x*level.tileSize+level.tileSize/2,this.brains.position.y*level.tileSize+level.tileSize/2);
  c.translate(-level.tileSize/2,-level.tileSize/2);
  c.drawImage(img,0,0,level.tileSize,level.tileSize);
  c.restore();

}
module.exports = Creature;
