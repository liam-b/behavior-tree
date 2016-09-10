const Creature = require('../other/viewport/creature.js');
var View = require('../other/viewport/view.js');

angular.module('SimulationCtrl',[]).controller('SimulationController', function($scope,Simulation){

	var viewport = new View(document.getElementById('simulationCanvas'));

	var activeCreature = new Creature(0,0,viewport.level);
	viewport.sceneEntities.push(activeCreature);
	viewport.draw();
	setInterval(function () {
		viewport.draw();
	}, 100);
});
