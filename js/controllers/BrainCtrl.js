angular.module('BrainCtrl',[]).controller('BrainController', function($timeout,$scope,Simulation){
	$scope.brain = Simulation.latestCreature().brains;
	console.log(Simulation.latestCreature());

	$scope.$watch(function () {
		return Simulation.latestCreature().brains;
	}, function (newVal, oldVal){
		$scope.brain = Simulation.latestCreature().brains;
	},true);

});
