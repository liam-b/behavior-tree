const actionMove = require('./modules/action/actionMove.js');
const actionSleep = require('./modules/action/actionSleep.js');
const operatorLoop = require('./modules/operator/operatorLoop.js');
const operatorRandom = require('./modules/operator/operatorRandom.js');
const operatorConstant = require('./modules/operator/operatorConstant.js');

function read (subtree) {
	for (var i = 0; i < subtree.length; i++) {
		subtree[i].execute();
	}
}

class Creature {
	constructor () {
		//this.behaviour = {}; //A tree defining the behaviour.

		//Behaviour for this creature is
		//
		/*
		Loop {
			sleep (random(0-10))
			turn 40 degrees
			if this creatures health is less than ten
				turn -10 degrees
			otherwise
				move 20 units in it's current direction.
		}
		*/

		// [loop [ sleep(random(0,10) turn(40) if(mem('health') < 10)[ turn(-10) move(20) ]) ]]

		this.behaviour = [
			new actionSleep(),

			new operatorLoop (
				[
					new actionMove(
						new operatorRandom(new operatorConstant(0),new operatorConstant(100))
					),

					new actionMove(
						new operatorConstant (5)
					)
				],
				new operatorConstant (5)
			),

			new actionSleep()
		]

		/*this.behaviour = [
			new operatorLoop ([
				new actionSleep (
					new operatorRandom(0,10)
				),
				new actionTurn (
					40
				),
				new operatorIf (
					[operatorMemory(
						'health'
					),
					'<',
					10 ],
					new actionTurn (
						-10
					),
					new actionMove (
						20
					)
				)
			])
		];*/

	}

	behave () {
		read(this.behaviour);
	}
}

module.exports = Creature;
