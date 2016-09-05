const operatorConstant = require('../operator/operatorConstant.js');

class actionMove {

	constructor (a){
		this.amount = new operatorConstant(0);

		if (a != undefined){
			this.amount = a;
		}
	}
	execute () {
		console.log("Moved "+this.amount.execute()+" forwards.");
	}
}
module.exports = actionMove;
