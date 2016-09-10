const Creature = require('../other/viewport/creature.js');
var View = require('../other/viewport/view.js');

angular.module('SimulationCtrl',[]).controller('SimulationController', function($scope,Simulation){

	var viewport = new View(document.getElementById('simulationCanvas'));

	var creature = new Creature(0,0,viewport.level);
	Simulation.creatures.push(creature);
	viewport.sceneEntities = [creature];

	viewport.draw();
	setInterval(function () {
		Simulation.creatures = [creature];
		$scope.$apply();
		viewport.draw();
	}, 100);
});
