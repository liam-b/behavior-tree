angular.module('SimulationCtrl',[]).controller('SimulationController', function($scope,Simulation){
	var view = require('../other/viewport/view');
	console.log(view);
	view(document.getElementById('simulationCanvas'));
});
