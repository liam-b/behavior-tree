angular.module('SimulationService', []).factory('Simulation',[function() {

  var creatures = []; //Perhaps store in a tree like format, showing inheritence and mutation?
  var options = {
    playing: true,
    speed: 10 //Updates per second.
  }

    return {
    latestCreature : function () {
      return creatures[0];
    },
    options: options,
        creatures: creatures
    }

}]);
