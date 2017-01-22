const Evolution = require('../other/behaviour/controller.js')
var world = require('../other/behaviour/world.js')

angular.module('SimulationService', []).factory('Simulation',[function() {

	var settings = {
	  brainSize: 5,

	  mutation: {
	    newTieChance: 20,
	    addTieChance: 10,
	    changeTieChance: 30,
	    removeTieChance: 10
	  },

	  populationSize: 100,

	  defaultCreature: {
	    energy: 15,
	    viewArea: 5,
	    position: {
	      x: 11,
	      y: 11
	    }
	  },

	  behaviourSteps: 10,

	  cullPercentage: 99
	}

	var evolution = Evolution.initialiseEvolution({
	  'world': new world.World(world.loadFromJSON('./worlds/main.json'), 21),
	  'settings': settings
	})
	console.log(evolution)

	var options = {
		playing: true,
		speed: 10 //Updates per second.
	}

  return {
		latestCreature : function () {
			return evolution.creatures[0];
		},
		options: options,
    evolution: evolution
  }

}]);
