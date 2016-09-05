angular.module('GenerationsCtrl',[]).controller('GenerationsController', function($scope,Simulation){
	$scope.generations = Simulation.creatures;

	$scope.newCreature = function () {
		
	}

});
