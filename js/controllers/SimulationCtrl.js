const Creature = require('../other/viewport/creature.js');
var View = require('../other/viewport/view.js');

angular.module('SimulationCtrl',[]).controller('SimulationController', function($scope,Simulation){
  console.log(Simulation);
  var viewport = new View(document.getElementById('simulationCanvas'),Simulation.evolution.map);

  viewport.draw();
  console.log(viewport);

  viewport.creature = new Creature(Simulation.latestCreature());

  function tick() {
    Simulation.evolution.stepGeneration();
    console.log(Simulation.evolution.creatures[0])
    viewport.creature.brains = Simulation.evolution.creatures[Simulation.evolution.creatures.length-1];
    if (Simulation.options.playing){
      if ($scope.$root.$$phase != '$apply' && $scope.$root.$$phase != '$digest') {
          $scope.$apply();
      }
      viewport.draw();
    }

    setTimeout(function() { tick(); }, 1000/Simulation.options.speed);
  }
  tick();
});
