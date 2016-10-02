const Evolution = require('../other/behaviour/evolution.js')

angular.module('SimulationService', []).factory('Simulation',[function() {

	var evolution = new Evolution({
	  'minGen': 2,
	  'maxGen': 6
	});

	var options = {
		playing: true,
		speed: 10 //Updates per second.
	}

    return {
		latestCreature : function () {
			return evolution.creatures[0];
		},
		options: options,
        evolution: evolution
    }

}]);
