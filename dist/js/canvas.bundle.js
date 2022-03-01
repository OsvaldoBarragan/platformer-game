/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _test__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test */ "./src/js/test.js");
/* harmony import */ var _sprites_buildings_building_1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sprites/buildings/building_1.png */ "./src/sprites/buildings/building_1.png");
/* harmony import */ var _sprites_buildings_building_2_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sprites/buildings/building_2.png */ "./src/sprites/buildings/building_2.png");
/* harmony import */ var _sprites_buildings_building_3_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sprites/buildings/building_3.png */ "./src/sprites/buildings/building_3.png");
/* harmony import */ var _sprites_buildings_building_4_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sprites/buildings/building_4.png */ "./src/sprites/buildings/building_4.png");
/* harmony import */ var _sprites_buildings_home_1_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sprites/buildings/home_1.png */ "./src/sprites/buildings/home_1.png");
/* harmony import */ var _sprites_player_character_2_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sprites/player/character_2.png */ "./src/sprites/player/character_2.png");
/* harmony import */ var _sprites_enemies_enemy_1_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sprites/enemies/enemy_1.png */ "./src/sprites/enemies/enemy_1.png");
/* harmony import */ var _sprites_backgrounds_background_1_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../sprites/backgrounds/background_1.png */ "./src/sprites/backgrounds/background_1.png");
/* harmony import */ var _sprites_objects_treestem_1_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../sprites/objects/treestem_1.png */ "./src/sprites/objects/treestem_1.png");
/* harmony import */ var _sprites_objects_treestemtop_1_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../sprites/objects/treestemtop_1.png */ "./src/sprites/objects/treestemtop_1.png");
/* harmony import */ var _sprites_objects_boat_1_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../sprites/objects/boat_1.png */ "./src/sprites/objects/boat_1.png");
/* harmony import */ var _sprites_objects_ladder_1_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../sprites/objects/ladder_1.png */ "./src/sprites/objects/ladder_1.png");
/* harmony import */ var _sprites_objects_wall_1_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../sprites/objects/wall_1.png */ "./src/sprites/objects/wall_1.png");














console.log(_sprites_buildings_building_1_png__WEBPACK_IMPORTED_MODULE_1__["default"]);
console.log(_sprites_buildings_building_2_png__WEBPACK_IMPORTED_MODULE_2__["default"]);
console.log(_sprites_buildings_building_3_png__WEBPACK_IMPORTED_MODULE_3__["default"]);
console.log(_sprites_buildings_building_4_png__WEBPACK_IMPORTED_MODULE_4__["default"]);
console.log(_sprites_buildings_home_1_png__WEBPACK_IMPORTED_MODULE_5__["default"]); // console.log(character)

console.log(_sprites_enemies_enemy_1_png__WEBPACK_IMPORTED_MODULE_7__["default"]); // console.log(background1)

console.log(_sprites_objects_treestem_1_png__WEBPACK_IMPORTED_MODULE_9__["default"]);
console.log(_sprites_objects_treestemtop_1_png__WEBPACK_IMPORTED_MODULE_10__["default"]);
console.log(_sprites_objects_boat_1_png__WEBPACK_IMPORTED_MODULE_11__["default"]);
console.log(_sprites_objects_ladder_1_png__WEBPACK_IMPORTED_MODULE_12__["default"]);
console.log(_sprites_objects_wall_1_png__WEBPACK_IMPORTED_MODULE_13__["default"]); // const canvas = document.querySelector('canvas')

var canvas = document.getElementById('fullGame');
var c = canvas.getContext('2d');
canvas.width = 1024;
canvas.height = 576;
var gravity = 0.5;

function createImage(imageSrc) {
  var image = new Image();
  image.src = imageSrc;
  return image;
} // // building class
// class Background {
//   constructor() {
//     this.position = {
//       x: 0,
//       y: 0
//     }
//     this.image = createImage(background1)
//   }
//   draw() {
//     c.drawImage(this.image, this.position.x, this.position.y)
//   }
//   update() {
//     this.draw()
//   }
// }
//
// // player class
// class Player {
//   constructor() {
//     this.position = {
//       x: 100,
//       y: 461
//     }
//     this.velocity = {
//       x: 0,
//       y: 0
//     }
//     this.image = createImage(character)
//   }
//   draw() {
//     c.drawImage(this.image, this.position.x, this.position.y)
//   }
//   update() {
//     this.draw()
//     this.position.x += this.velocity.x
//     this.position.y += this.velocity.y
//
//     if (this.position.y + this.image.height + this.velocity.y <= canvas.height) {
//       this.velocity.y += gravity
//     }
//     else {
//       this.velocity.y = 0
//     }
//   }
// }
//
//
// class Enemy {
//   constructor({ image, x, y, orig_x }) {
//     this.position = {
//       x: x,
//       y: y,
//       orig_x: orig_x
//     }
//     this.velocity = {
//       x: 0,
//       y: 0
//     }
//     this.image = image
//   }
//   draw() {
//     c.drawImage(this.image, this.position.x, this.position.y)
//   }
//   update() {
//     this.draw()
//     this.position.x += this.velocity.x
//     // console.log('difference between enemy and player: ', this.position.orig_x - player.position.x)
// }}
//
// // building class
// class Building {
//   constructor({ x, y, image }) {
//     this.position = {
//       x: x,
//       y: y
//     }
//     this.image = image
//   }
//   draw() {
//     c.drawImage(this.image, this.position.x, this.position.y)
//   }
// }
//
// class Objects {
//   constructor({ x, y, image, climbable }) {
//     this.position = {
//       x: x,
//       y: y
//     }
//     this.image = image
//     this.climbable = climbable
//   }
//   draw() {
//     c.drawImage(this.image, this.position.x, this.position.y)
//   }
// }


var building1_image = new Image();
building1_image.src = _sprites_buildings_building_1_png__WEBPACK_IMPORTED_MODULE_1__["default"];
var building2_image = new Image();
building2_image.src = _sprites_buildings_building_2_png__WEBPACK_IMPORTED_MODULE_2__["default"];
var building3_image = new Image();
building3_image.src = _sprites_buildings_building_3_png__WEBPACK_IMPORTED_MODULE_3__["default"];
var building4_image = new Image();
building4_image.src = _sprites_buildings_building_4_png__WEBPACK_IMPORTED_MODULE_4__["default"];
var home1_image = new Image();
home1_image.src = _sprites_buildings_home_1_png__WEBPACK_IMPORTED_MODULE_5__["default"];
var character_image = new Image();
character_image.src = _sprites_player_character_2_png__WEBPACK_IMPORTED_MODULE_6__["default"]; // const enemy1_image = new Image()
// enemy1_image.src = enemy1

var background1_image = new Image();
background1_image.src = _sprites_backgrounds_background_1_png__WEBPACK_IMPORTED_MODULE_8__["default"]; // const treestem1_image = new Image()
// treestem1_image.src = treestem1
//
// const treestemtop1_image = new Image()
// treestemtop1_image.src = treestemtop1

var boat1_image = new Image();
boat1_image.src = _sprites_objects_boat_1_png__WEBPACK_IMPORTED_MODULE_11__["default"];
var ladder1_image = new Image();
ladder1_image.src = _sprites_objects_ladder_1_png__WEBPACK_IMPORTED_MODULE_12__["default"];
var wall1_image = new Image();
wall1_image.src = _sprites_objects_wall_1_png__WEBPACK_IMPORTED_MODULE_13__["default"]; // will create the background

var background = new _test__WEBPACK_IMPORTED_MODULE_0__["Background"]({
  image: background1_image
}); // will create the player

var player = new _test__WEBPACK_IMPORTED_MODULE_0__["Player"]({
  image: character_image
}); // const enemies = [
//   new Enemy({ image: enemy1_image, x: 80, y: 546, orig_x: 80 })
// ]
// will create the buildings

var buildings = [// new Building ({ image: building1_image, x: 100, y: 476 }),
// new Building ({ image: building1_image, x: 200, y: 476 }),
// new Building ({ image: building1_image, x: 300, y: 476 }),
new _test__WEBPACK_IMPORTED_MODULE_0__["Building"]({
  image: building1_image,
  x: 500,
  y: 476
}), new _test__WEBPACK_IMPORTED_MODULE_0__["Building"]({
  image: building2_image,
  x: 600,
  y: 396
}), new _test__WEBPACK_IMPORTED_MODULE_0__["Building"]({
  image: building3_image,
  x: 800,
  y: 476
}), new _test__WEBPACK_IMPORTED_MODULE_0__["Building"]({
  image: home1_image,
  x: 200,
  y: 526
}) // new Building ({ image: building4_image, x: 1000, y: 176})
];
var objects = [// // Tree 1
// new Objects ({ image: treestem1_image, x: 50, y: 556 }),
// new Objects ({ image: treestemtop1_image, x: 48, y: 553 }),
// // Tree 2 etc.
// new Objects ({ image: treestem1_image, x: 10, y: 556 }),
// new Objects ({ image: treestemtop1_image, x: 8, y: 553 })
// // not trees
// new Objects ({ image: boat1_image, x: 50, y: 476 }),
// new Objects ({ image: boat1_image, x: 600, y: 476 })
new _test__WEBPACK_IMPORTED_MODULE_0__["Objects"]({
  image: ladder1_image,
  x: 600,
  y: 476,
  climbable: true
}), new _test__WEBPACK_IMPORTED_MODULE_0__["Objects"]({
  image: ladder1_image,
  x: 600,
  y: 376,
  climbable: true
}), new _test__WEBPACK_IMPORTED_MODULE_0__["Objects"]({
  image: wall1_image,
  x: 0,
  y: 0,
  climbable: false
})];
var keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  },
  up: {
    pressed: false
  },
  down: {
    pressed: false
  },
  spacebar: {
    pressed: false
  }
};
var scrollOffset = 0;

function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = 'white';
  c.fillRect(0, 0, canvas.width, canvas.height);
  background.update();
  buildings.forEach(function (building) {
    building.draw();
  });
  objects.forEach(function (object) {
    object.draw();
  });
  player.update(); // enemies.forEach(enemy => {
  //   enemy.update()
  // })
  // enemies.forEach(enemy => {
  //   if (enemy.position.x >= enemy.position.orig_x + 100) {
  //     enemy.velocity.x--
  //   }
  //   else if (enemy.position.x <= enemy.position.orig_x - 100) {
  //     enemy.velocity.x++
  //   }
  // })
  // prevent player from traveling out of the background top

  if (player.position.y + player.image.height >= background.position.y && player.position.y + player.image.height + player.velocity.y <= background.position.y) {
    player.velocity.y += 10;
  }

  if (player.position.x < 0) {
    player.velocity.x = 0;
  }

  if (keys.right.pressed && player.position.x < 800) {
    player.velocity.x = 3;
  } else if (keys.left.pressed && player.position.x > 100) {
    player.velocity.x = -3;
  } else {
    player.velocity.x = 0; // the world moves back

    if (keys.right.pressed) {
      scrollOffset += 3;
      buildings.forEach(function (building) {
        building.draw();
        building.position.x -= 3;
      }); // enemies.forEach(enemy => {
      //   enemy.update()
      //   enemy.position.x -= 3
      //   // enemy.velocity.x = 0
      // })

      objects.forEach(function (object) {
        object.draw();
        object.position.x -= 3;
      }); // the world moves to the front
    } else if (keys.left.pressed) {
      scrollOffset -= 3;
      buildings.forEach(function (building) {
        building.draw();
        building.position.x += 3;
      }); // enemies.forEach(enemy => {
      //   enemy.update()
      //   enemy.position.x += 3
      //   // enemy.velocity.x = 0
      // })

      objects.forEach(function (object) {
        object.draw();
        object.position.x += 3;
      });
    }
  }

  buildings.forEach(function (building) {
    // platform collision detection
    // will keep player on top of platform
    if (player.position.y + player.image.height <= building.position.y && player.position.y + player.image.height + player.velocity.y >= building.position.y // will allow player to fall off the sides
    && player.position.x + player.image.width >= building.position.x + 5 && player.position.x <= building.position.x + building.image.width) {
      // console.log('Building Height: ', building.image.height)
      // console.log('Building Width: ', building.image.width)
      player.velocity.y = 0;
    }
  });
  objects.forEach(function (object) {
    var determineClimbableLeft = player.image.height / 1.5;
    var determineClimbableRight = player.image.height / 3;

    if (player.position.y + player.image.height <= object.position.y && player.position.y + player.image.height + player.velocity.y >= object.position.y // will allow player to fall off the sides
    && player.position.x + player.image.width >= object.position.x + 5 && player.position.x <= object.position.x + object.image.width) {
      player.velocity.y = 0;
      console.log(object.image.height);

      if (object.climbable === true) {
        if (keys.down.pressed) {
          if (player.position.y > canvas.height - player.image.height) {
            player.velocity.y -= 5;
          }

          player.velocity.y = 1;
        }
      }
    } // Conditionals to see where character has to be before being able to climb


    if (object.climbable === true) {
      if (object.position.y - player.image.height < player.position.y && object.position.y + object.image.height > player.position.y // Determines how much of the character
      // has to be on ladder in order to stay on
      && object.position.x - determineClimbableLeft < player.position.x && object.position.x + object.image.width - determineClimbableRight > player.position.x) {
        if (keys.up.pressed) {
          player.velocity.y = -1;
        } else if (keys.down.pressed) {
          if (object.position) player.velocity.y = 2;
          console.log(determineClimbableLeft);
          console.log(determineClimbableRight);
        } else {
          player.velocity.y = 0;
        }
      }
    } // prevent player from going past limitation wall


    if (player.position.x + player.image.width + player.velocity.x <= object.position.x - (background.image.width - player.image.width) / 1.75) {
      player.velocity.x += 10;
    }
  }); // If the end is reached, do this

  if (scrollOffset > 2000) {
    console.log('You Win!');
  }
} // console.log(player.image.height)


animate(); // if (player.velocity.y === 0) {
//   inAir = false
// }

addEventListener('keydown', function (_ref) {
  var keyCode = _ref.keyCode;

  // console.log(keyCode)
  switch (keyCode) {
    case 65:
      // console.log('left')
      keys.left.pressed = true;
      break;
  }

  switch (keyCode) {
    case 87:
      // console.log('up')
      if (keys.up.pressed === false && player.velocity.y >= 0) {
        if (player.velocity.y < 0) {
          player.velocity.y += 0;
          break;
        }

        keys.up.pressed = true;
        player.velocity.y -= 10;
        break;
      }

    // keys.up.pressed = true
    // console.log('Up Key: ', keys.up.pressed)
    // player.velocity.y -= 10
    // break
  }

  switch (keyCode) {
    case 83:
      // console.log('down')
      keys.down.pressed = true;
      break;
  }

  switch (keyCode) {
    case 68:
      // console.log('right')
      keys.right.pressed = true;
      break;
  }
});
addEventListener('keyup', function (_ref2) {
  var keyCode = _ref2.keyCode;

  // console.log(keyCode)
  switch (keyCode) {
    case 65:
      // console.log('left')
      keys.left.pressed = false;
      console.log(player.position.x);
      break;
  }

  switch (keyCode) {
    case 87:
      // console.log('up')
      keys.up.pressed = false; // player.velocity.y += 5

      break;
  }

  switch (keyCode) {
    case 83:
      // console.log('down')
      keys.down.pressed = false;
      break;
  }

  switch (keyCode) {
    case 68:
      // console.log('right')
      keys.right.pressed = false;
      break;
  }
});

/***/ }),

/***/ "./src/js/test.js":
/*!************************!*\
  !*** ./src/js/test.js ***!
  \************************/
/*! exports provided: Background, Player, Enemy, Building, Objects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Background", function() { return Background; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Enemy", function() { return Enemy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Building", function() { return Building; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Objects", function() { return Objects; });
/* harmony import */ var _sprites_backgrounds_background_1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sprites/backgrounds/background_1.png */ "./src/sprites/backgrounds/background_1.png");
/* harmony import */ var _sprites_player_character_2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sprites/player/character_2.png */ "./src/sprites/player/character_2.png");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




function createImage(imageSrc) {
  var image = new Image();
  image.src = imageSrc;
  return image;
}

var canvas = document.getElementById('fullGame');
var c = canvas.getContext('2d');
canvas.width = 1024;
canvas.height = 576;
var gravity = 0.5; // building class

var Background = /*#__PURE__*/function () {
  function Background() {
    _classCallCheck(this, Background);

    this.position = {
      x: 0,
      y: 0
    };
    this.image = createImage(_sprites_backgrounds_background_1_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
  }

  _createClass(Background, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
    }
  }]);

  return Background;
}(); // player class

var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);

    this.position = {
      x: 100,
      y: 461
    };
    this.velocity = {
      x: 0,
      y: 0
    };
    this.image = createImage(_sprites_player_character_2_png__WEBPACK_IMPORTED_MODULE_1__["default"]);
  }

  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;

      if (this.position.y + this.image.height + this.velocity.y <= canvas.height) {
        this.velocity.y += gravity;
      } else {
        this.velocity.y = 0;
      }
    }
  }]);

  return Player;
}();
var Enemy = /*#__PURE__*/function () {
  function Enemy(_ref) {
    var image = _ref.image,
        x = _ref.x,
        y = _ref.y,
        orig_x = _ref.orig_x;

    _classCallCheck(this, Enemy);

    this.position = {
      x: x,
      y: y,
      orig_x: orig_x
    };
    this.velocity = {
      x: 0,
      y: 0
    };
    this.image = image;
  }

  _createClass(Enemy, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
      this.position.x += this.velocity.x; // console.log('difference between enemy and player: ', this.position.orig_x - player.position.x)
    }
  }]);

  return Enemy;
}(); // building class

var Building = /*#__PURE__*/function () {
  function Building(_ref2) {
    var x = _ref2.x,
        y = _ref2.y,
        image = _ref2.image;

    _classCallCheck(this, Building);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
  }

  _createClass(Building, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return Building;
}();
var Objects = /*#__PURE__*/function () {
  function Objects(_ref3) {
    var x = _ref3.x,
        y = _ref3.y,
        image = _ref3.image,
        climbable = _ref3.climbable;

    _classCallCheck(this, Objects);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.climbable = climbable;
  }

  _createClass(Objects, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return Objects;
}();

/***/ }),

/***/ "./src/sprites/backgrounds/background_1.png":
/*!**************************************************!*\
  !*** ./src/sprites/backgrounds/background_1.png ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c8a7effcee70b0eb7ada13be7d47c000.png");

/***/ }),

/***/ "./src/sprites/buildings/building_1.png":
/*!**********************************************!*\
  !*** ./src/sprites/buildings/building_1.png ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "acec04c7ed0e424b48e1b2e9e4ecfb78.png");

/***/ }),

/***/ "./src/sprites/buildings/building_2.png":
/*!**********************************************!*\
  !*** ./src/sprites/buildings/building_2.png ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "fe880ea62837d73463e16a84fc54982f.png");

/***/ }),

/***/ "./src/sprites/buildings/building_3.png":
/*!**********************************************!*\
  !*** ./src/sprites/buildings/building_3.png ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "d2c3fcda964ab13f05ea234b93514b20.png");

/***/ }),

/***/ "./src/sprites/buildings/building_4.png":
/*!**********************************************!*\
  !*** ./src/sprites/buildings/building_4.png ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "6c4cd2b361dde39c6a9bc8dde24e495b.png");

/***/ }),

/***/ "./src/sprites/buildings/home_1.png":
/*!******************************************!*\
  !*** ./src/sprites/buildings/home_1.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "956dafca3a661f6bf9753dcbece571bd.png");

/***/ }),

/***/ "./src/sprites/enemies/enemy_1.png":
/*!*****************************************!*\
  !*** ./src/sprites/enemies/enemy_1.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a12f77d314f023e9038c5b9eabc7abc7.png");

/***/ }),

/***/ "./src/sprites/objects/boat_1.png":
/*!****************************************!*\
  !*** ./src/sprites/objects/boat_1.png ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "2a4cfe58370fa58b7660bf92ec2e8939.png");

/***/ }),

/***/ "./src/sprites/objects/ladder_1.png":
/*!******************************************!*\
  !*** ./src/sprites/objects/ladder_1.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "5e36beb3e7a78d7ec45c6cfdbb7b3bb0.png");

/***/ }),

/***/ "./src/sprites/objects/treestem_1.png":
/*!********************************************!*\
  !*** ./src/sprites/objects/treestem_1.png ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ff2d0eed77fffc0950619f708e904474.png");

/***/ }),

/***/ "./src/sprites/objects/treestemtop_1.png":
/*!***********************************************!*\
  !*** ./src/sprites/objects/treestemtop_1.png ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "2420ab5be5393ccb5058a532279ddccb.png");

/***/ }),

/***/ "./src/sprites/objects/wall_1.png":
/*!****************************************!*\
  !*** ./src/sprites/objects/wall_1.png ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "283fbaaae7227d79c15b941487ac2d80.png");

/***/ }),

/***/ "./src/sprites/player/character_2.png":
/*!********************************************!*\
  !*** ./src/sprites/player/character_2.png ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "d6b479f796e7938e049a70cffaea2a8d.png");

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map