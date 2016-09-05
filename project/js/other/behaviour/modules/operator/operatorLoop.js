const operatorConstant = require('../operator/operatorConstant.js');

class operatorLoop {
	constructor (subTree,iterations){
		this.tree = [];
		this.iterations = new operatorConstant(1);

		if (iterations != undefined){
			this.iterations = iterations;
		}

		if (subTree != undefined){
			this.tree = subTree;
		}
	}

	execute () {
		//Cache iterations. Let's say that iterations is a random module...
		//we don't want a different number of loops every loop!
		let iterations = this.iterations.execute();

		for (var r = 0; r < iterations; r++) {
			for (var i = 0; i < this.tree.length; i++) {
				this.tree[i].execute();
			}
		}
	}
}
module.exports = operatorLoop;
