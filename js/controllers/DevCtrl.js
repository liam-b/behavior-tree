angular.module('DevCtrl',[]).controller('DevController', function($scope,Simulation){
	$scope.expanded = false;
	$scope.playing = true;
	$scope.options = {
		speed: 100
	}
	$scope.toggleExpansion = function (){
		$scope.expanded = !$scope.expanded;
	}
	$scope.togglePlaying = function (){
		$scope.playing = !$scope.playing;
		Simulation.options.playing = $scope.playing;
	}
	$scope.changeSpeed = function (){
		console.log($scope.options.speed);
		Simulation.options.speed = $scope.options.speed;
	}

});
