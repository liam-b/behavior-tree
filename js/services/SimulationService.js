angular.module('SimulationService', []).factory('Simulation',[function() {

	var creatures = []; //Perhaps store in a tree like format, showing inheritence and mutation?

    return {
		latestCreature : function () {
			return creatures[0];
		},
        creatures: creatures
    }

}]);
