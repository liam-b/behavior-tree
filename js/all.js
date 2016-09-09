'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/******/(function (modules) {
	// webpackBootstrap
	/******/ // The module cache
	/******/var installedModules = {};

	/******/ // The require function
	/******/function __webpack_require__(moduleId) {

		/******/ // Check if module is in cache
		/******/if (installedModules[moduleId])
			/******/return installedModules[moduleId].exports;

		/******/ // Create a new module (and put it into the cache)
		/******/var module = installedModules[moduleId] = {
			/******/exports: {},
			/******/id: moduleId,
			/******/loaded: false
			/******/ };

		/******/ // Execute the module function
		/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

		/******/ // Flag the module as loaded
		/******/module.loaded = true;

		/******/ // Return the exports of the module
		/******/return module.exports;
		/******/
	}

	/******/ // expose the modules object (__webpack_modules__)
	/******/__webpack_require__.m = modules;

	/******/ // expose the module cache
	/******/__webpack_require__.c = installedModules;

	/******/ // __webpack_public_path__
	/******/__webpack_require__.p = "";

	/******/ // Load entry module and return exports
	/******/return __webpack_require__(0);
	/******/
})(
/************************************************************************/
/******/[
/* 0 */
/***/function (module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(2);
	__webpack_require__(3);
	__webpack_require__(4);
	__webpack_require__(14);
	__webpack_require__(7);
	__webpack_require__(8);
	__webpack_require__(15);
	__webpack_require__(9);
	__webpack_require__(6);
	__webpack_require__(13);
	__webpack_require__(16);
	__webpack_require__(5);
	__webpack_require__(10);
	__webpack_require__(17);
	__webpack_require__(12);
	module.exports = __webpack_require__(11);

	/***/
},
/* 1 */
/***/function (module, exports) {

	angular.module('creatureSim', ['SimulationService', 'GenerationsCtrl', 'BrainCtrl', 'SimulationCtrl']);

	/***/
},
/* 2 */
/***/function (module, exports) {

	angular.module('BrainCtrl', []).controller('BrainController', function ($scope, Simulation) {
		$scope.Brain = {};
	});

	/***/
},
/* 3 */
/***/function (module, exports) {

	angular.module('GenerationsCtrl', []).controller('GenerationsController', function ($scope, Simulation) {
		$scope.generations = Simulation.creatures;

		$scope.newCreature = function () {};
	});

	/***/
},
/* 4 */
/***/function (module, exports, __webpack_require__) {

	angular.module('SimulationCtrl', []).controller('SimulationController', function ($scope, Simulation) {
		var view = __webpack_require__(5);
		console.log(view);
		view(document.getElementById('simulationCanvas'));
	});

	/***/
},
/* 5 */
/***/function (module, exports, __webpack_require__) {

	var Creature = __webpack_require__(6);
	var Map = __webpack_require__(13);
	module.exports = function (canvasElement) {
		var c = canvasElement.getContext('2d');

		canvasElement.setAttribute('width', window.getComputedStyle(canvasElement).width);
		canvasElement.setAttribute('height', window.getComputedStyle(canvasElement).height);

		var width = canvasElement.width;
		var height = canvasElement.height;

		var level = new Map();
		var activeCreature = new Creature(0, 0, level);

		function draw() {
			c.fillStyle = "rgb(57, 59, 57)";
			c.fillRect(0, 0, width, height);

			level.update();
			level.draw(c);

			activeCreature.update();
			activeCreature.draw(c);

			setTimeout(function () {
				requestAnimationFrame(draw);
			}, 100);
		}
		requestAnimationFrame(draw);
	};

	/***/
},
/* 6 */
/***/function (module, exports, __webpack_require__) {

	var img = new Image();
	img.src = "assets/creature.png";

	var creatureBrains = __webpack_require__(7);
	var tree = __webpack_require__(9);

	var Creature = function Creature(x, y, level) {

		this.level = level;

		this.brains = new creatureBrains({
			energy: 1000,
			rotation: 0,
			position: {
				x: x,
				y: y
			}
		}, [
		// new tree.action.turn(1),
		// new tree.action.move(1),
		// new tree.action.turn(0),
		// new tree.action.move(1),
		// new tree.action.sleep(5)
		new tree.action.turn(0), new tree.action.move(1), new tree.action.move(1), new tree.action.turn(1), new tree.action.move(1), new tree.action.move(1), new tree.action.turn(2), new tree.action.move(1), new tree.action.move(1), new tree.action.turn(1), new tree.action.move(1), new tree.action.move(1), new tree.action.turn(0), new tree.action.move(1), new tree.action.move(1), new tree.action.turn(3), new tree.action.move(1), new tree.action.move(1), new tree.action.turn(2), new tree.action.move(1), new tree.action.move(1), new tree.action.turn(3), new tree.action.move(1), new tree.action.move(1)]);
	};

	Creature.prototype.update = function () {
		this.brains.behave();
	};

	Creature.prototype.draw = function (c) {
		c.drawImage(img, this.brains.properties.position.x * this.level.tileSize, this.brains.properties.position.y * this.level.tileSize, this.level.tileSize, this.level.tileSize);
		console.log(this.brains.properties.position.x + ":" + this.brains.properties.position.y);
	};
	module.exports = Creature;

	/***/
},
/* 7 */
/***/function (module, exports, __webpack_require__) {

	var Properties = __webpack_require__(8);

	var Creature = function () {
		function Creature(info, behavior) {
			_classCallCheck(this, Creature);

			this.behavior = behavior;
			this.properties = new Properties(info);
			this.iter = 0;
		}

		_createClass(Creature, [{
			key: 'behaveLoop',
			value: function behaveLoop() {
				for (var i = 0; i < this.behavior.length; i += 1) {
					this.behavior[i].run(this.properties);
					console.log(this.properties.log());
				}
				// this.properties = new Properties(info)
			}

			// behave () {
			// 	for (var i in this.behavior) {
			// 		this.behavior[i].run(this.properties)
			// 	}
			// }

		}, {
			key: 'behave',
			value: function behave() {
				if (this.iter >= this.behavior.length) this.iter = 0;
				this.behavior[this.iter].run(this.properties);
				this.iter += 1;
				console.log('info', this.properties.log());
			}
		}]);

		return Creature;
	}();

	module.exports = Creature;

	/***/
},
/* 8 */
/***/function (module, exports) {

	module.exports = function () {
		function _class(info) {
			_classCallCheck(this, _class);

			this.energy = info.energy;
			this.rotation = info.rotation;
			this.position = {
				x: info.position.x,
				y: info.position.y
			};
		}

		_createClass(_class, [{
			key: 'log',
			value: function log() {
				return 'x: ' + this.position.x + ', y: ' + this.position.y + ', r: ' + this.rotation + ', e: ' + this.energy;
			}
		}]);

		return _class;
	}();

	/***/
},
/* 9 */
/***/function (module, exports, __webpack_require__) {

	module.exports = {
		action: __webpack_require__(10),
		operator: __webpack_require__(11),
		math: __webpack_require__(12)
	};

	Number.prototype.run = function () {
		return this;
	};

	/***/
},
/* 10 */
/***/function (module, exports) {

	module.exports = {
		'move': function () {
			function move(distance) {
				_classCallCheck(this, move);

				this.distance = distance;
			}

			_createClass(move, [{
				key: 'run',
				value: function run(properties) {
					var changedDist = this.distance.run(properties);
					if (properties.energy - changedDist < 0) {
						changedDist = properties.energy;
					}
					properties.energy -= changedDist;
					switch (parseInt(properties.rotation)) {
						case 0:
							properties.position.y += changedDist;
							break;
						case 1:
							properties.position.x += changedDist;
							break;
						case 2:
							properties.position.y -= changedDist;
							break;
						case 3:
							properties.position.x -= changedDist;
							break;
					}
				}
			}]);

			return move;
		}(),
		'sleep': function () {
			function sleep(time) {
				_classCallCheck(this, sleep);

				this.time = time;
			}

			_createClass(sleep, [{
				key: 'run',
				value: function run(properties) {
					properties.energy += Math.abs(this.time.run(properties));
					// console.log('I slept for ' +  Math.abs(this.time.run(properties)) + ' game update(s)')
					// console.log('I slept for ' + this.time.run(properties) + ' game update(s)')
				}
			}]);

			return sleep;
		}(),
		'turn': function () {
			function turn(rotation) {
				_classCallCheck(this, turn);

				this.rotation = rotation;
			}

			_createClass(turn, [{
				key: 'run',
				value: function run(properties) {
					properties.rotation = this.rotation.run(properties);
					// if ([0, 1, 2, 3].indexOf(this.rotation) != -1) {
					//   properties.rotation = this.rotation
					//   // console.log('I rotated to direction ' + this.rotation.run(properties))
					// }
				}
			}]);

			return turn;
		}()
	};

	/***/
},
/* 11 */
/***/function (module, exports) {

	function iterate(arr, creature) {
		for (var i in arr) {
			arr[i].run(creature);
		}
	}

	module.exports = {
		'constant': function () {
			function constant(value) {
				_classCallCheck(this, constant);

				this.value = value;
			}

			_createClass(constant, [{
				key: 'run',
				value: function run() {
					return this.value;
				}
			}]);

			return constant;
		}(),
		'random': function () {
			function random(min, max) {
				_classCallCheck(this, random);

				this.min = min;
				this.max = max;
			}

			_createClass(random, [{
				key: 'run',
				value: function run(properties) {
					return Math.floor(Math.random() * (this.max.run(properties) - this.min.run(properties) + 1)) + this.min.run(properties);
				}
			}]);

			return random;
		}(),
		'if': function () {
			function _if(condition, whenTrue, whenFalse) {
				_classCallCheck(this, _if);

				this.condition = condition;
			}

			_createClass(_if, [{
				key: 'run',
				value: function run(properties) {
					iterate(condition ? whenTrue : whenFalse, properties);
				}
			}]);

			return _if;
		}(),
		'loop': function () {
			function loop(loops, code) {
				_classCallCheck(this, loop);

				this.loops = loops;
				this.code = code;
			}

			_createClass(loop, [{
				key: 'run',
				value: function run(properties) {
					for (var int = 0; int < this.loops; int += 1) {
						iterate(this.code, properties);
					}
				}
			}]);

			return loop;
		}()
	};

	/***/
},
/* 12 */
/***/function (module, exports) {

	module.exports = {
		'add': function () {
			function add(value1, value2) {
				_classCallCheck(this, add);

				this.value = value;
				this.value2 = value2;
			}

			_createClass(add, [{
				key: 'run',
				value: function run() {
					return this.value.run() + this.value2.run();
				}
			}]);

			return add;
		}(),
		'subtract': function () {
			function subtract(value1, value2) {
				_classCallCheck(this, subtract);

				this.value = value;
				this.value2 = value2;
			}

			_createClass(subtract, [{
				key: 'run',
				value: function run() {
					return this.value.run() - this.value2.run();
				}
			}]);

			return subtract;
		}(),
		'multiply': function () {
			function multiply(value1, value2) {
				_classCallCheck(this, multiply);

				this.value = value;
				this.value2 = value2;
			}

			_createClass(multiply, [{
				key: 'run',
				value: function run() {
					return this.value.run() * this.value2.run();
				}
			}]);

			return multiply;
		}(),
		'divide': function () {
			function divide(value1, value2) {
				_classCallCheck(this, divide);

				this.value = value;
				this.value2 = value2;
			}

			_createClass(divide, [{
				key: 'run',
				value: function run() {
					return this.value.run() / this.value2.run();
				}
			}]);

			return divide;
		}()
	};

	/***/
},
/* 13 */
/***/function (module, exports) {

	var tileImg = new Image();
	tileImg.src = "assets/tiles.png";

	var Map = function Map() {
		this.width = 10;
		this.height = 10;
		this.fitOnScreen = false;

		if (this.fitOnScreen) {
			this.tileSize = Math.min(width / this.width, height / this.height);
		} else {
			this.tileSize = 64;
		}

		this.drawGrid = true;
		this.tiles = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
	};

	Map.prototype.update = function () {};

	Map.prototype.getTile = function (x, y) {
		return this.tiles[y * this.width + x];
	};

	Map.prototype.draw = function (c) {

		for (var x = 0; x < this.width; x++) {
			for (var y = 0; y < this.height; y++) {
				var tile = this.getTile(x, y);
				c.drawImage(tileImg, 300 * tile, 0, 300, 300, x * this.tileSize, y * this.tileSize, this.tileSize, this.tileSize);
			}
		}

		if (this.drawGrid) {

			c.strokeStyle = "rgba(97, 120, 93, 0.53)";

			c.beginPath();
			//Vertical gridlines.
			for (var x = 0; x < this.width; x++) {
				c.moveTo(x * this.tileSize, 0);
				c.lineTo(x * this.tileSize, this.height * this.tileSize);
			}
			//Horizontal lines
			for (var y = 0; y < this.height; y++) {
				c.moveTo(0, y * this.tileSize);
				c.lineTo(this.width * this.tileSize, y * this.tileSize);
			}
			c.stroke();
		}
	};
	module.exports = Map;

	/***/
},
/* 14 */
/***/function (module, exports) {

	angular.module('SimulationService', []).factory('Simulation', [function () {

		var creatures = {}; //Perhaps store in a tree like format, showing inheritence and mutation?

		return {
			creatures: creatures
		};
	}]);

	/***/
},
/* 15 */
/***/function (module, exports, __webpack_require__) {

	var Creature = __webpack_require__(7);
	var tree = __webpack_require__(9);

	var myCreature = new Creature({
		energy: 0,
		rotation: 0,
		position: {
			x: 0,
			y: 0
		}
	}, [new tree.action.turn(1), new tree.action.sleep(1), new tree.action.move(1)]);

	myCreature.behave();

	/***/
},
/* 16 */
/***/function (module, exports) {

	/***/},
/* 17 */
/***/function (module, exports) {

	module.exports = {
		'rotation': function () {
			function rotation(_rotation) {
				_classCallCheck(this, rotation);

				this.rotation = _rotation;
			}

			_createClass(rotation, [{
				key: 'run',
				value: function run(properties) {
					if ([0, 1, 2, 3].indexOf(this.rotation) != -1) {
						properties.rotation = this.rotation;
						// console.log('I rotated to direction ' + this.rotation.run(properties))
					} else {
						properties.rotation = 0;
						// console.log('I rotated to direction ' + 0)
					}
				}
			}]);

			return rotation;
		}()
	};

	/***/
}
/******/]);