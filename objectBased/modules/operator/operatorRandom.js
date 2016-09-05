const operatorConstant = require('../operator/operatorConstant.js');

class operatorRandom {
	constructor (min,max){
		this.min = new operatorConstant(0);
		this.max = new operatorConstant(10);

		if (min != undefined){
			this.max = min;
		}

		if (max != undefined){
			this.max = max;
		}
	}

	execute () {
		return Math.round(this.min.execute() + Math.random()*this.max.execute());
	}
}
module.exports = operatorRandom;
