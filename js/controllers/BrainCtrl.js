angular.module('BrainCtrl',[]).controller('BrainController', function($timeout,$scope,Simulation){
	$scope.brain = Simulation.latestCreature().brains;
	console.log(Simulation.latestCreature());

	$scope.$watch(function () {
		return Simulation.latestCreature();
	}, function (newVal, oldVal){
		$scope.creature = Simulation.latestCreature();
	},true);

});
