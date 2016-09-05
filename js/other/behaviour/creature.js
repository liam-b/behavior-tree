// const actionMove = require('./modules/action/actionMove.js');
// const actionSleep = require('./modules/action/actionSleep.js');
// const operatorLoop = require('./modules/operator/operatorLoop.js');
// const operatorRandom = require('./modules/operator/operatorRandom.js');
// const operatorConstant = require('./modules/operator/operatorConstant.js');
//
// function read (subtree) {
// 	for (var i = 0; i < subtree.length; i++) {
// 		subtree[i].execute();
// 	}
// }
//
// class Creature {
// 	constructor () {
// 		//this.behaviour = {}; //A tree defining the behaviour.
//
// 		this.behaviour = [
// 			new actionSleep(),
//
// 			new operatorLoop (
// 				[
// 					new actionMove(
// 						new operatorRandom(new operatorConstant(0),new operatorConstant(100))
// 					),
//
// 					new actionMove(
// 						new operatorConstant (5)
// 					)
// 				],
// 				new operatorConstant (5)
// 			),
//
// 			new actionSleep()
// 		]
//
// 	}
//
// 	behave () {
// 		read(this.behaviour);
// 	}
// }
//
// module.exports = Creature;

class Creature {
	constructor (behavior) {
		this.behavior = behavior
	}

	behave () {
		for (var i in this.behavior) {
	    this.behavior[i].run()
	  }
	}
}

module.exports = Creature
