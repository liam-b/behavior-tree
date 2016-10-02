const Creature = require('../other/viewport/creature.js');
var View = require('../other/viewport/view.js');

angular.module('SimulationCtrl',[]).controller('SimulationController', function($scope,Simulation){

  var viewport = new View(document.getElementById('simulationCanvas'));

  var creature = new Creature(0,0,viewport.level);
  Simulation.evolution.creatures.push(creature);
  viewport.sceneEntities = [creature];

  viewport.draw();

  function tick() {
    if (Simulation.options.playing){
      if ($scope.$root.$$phase != '$apply' && $scope.$root.$$phase != '$digest') {
          $scope.$apply();
      }
      viewport.draw();
    }

      setTimeout(function() { tick(); }, 10000/Simulation.options.speed);
  }
  tick();
});
