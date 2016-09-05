// Operator Constant is a unique class because it will always return
// what it was initiated with, and, it is the only module that takes a JS
// type as an input. Unlike other functions, that .execute their arguments every
// type they are executed, this will just return it's value.

class operatorConstant {
	constructor (value){
		this.value = 0;

		if (value != undefined){
			this.value = value;
		}
	}

	execute () {
		return this.value;
	}
}
module.exports = operatorConstant;
