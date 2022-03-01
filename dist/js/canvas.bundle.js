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

/***/ "./src/js/assign-images.js":
/*!*********************************!*\
  !*** ./src/js/assign-images.js ***!
  \*********************************/
/*! exports provided: building1_image, building2_image, building3_image, building4_image, home1_image, character1_image, character2_image, character3_image, enemy1_image, background1_image, background2_image, background3_image, treestem1_image, treestemtop1_image, boat1_image, ladder1_image, wall1_image */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "building1_image", function() { return building1_image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "building2_image", function() { return building2_image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "building3_image", function() { return building3_image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "building4_image", function() { return building4_image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "home1_image", function() { return home1_image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "character1_image", function() { return character1_image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "character2_image", function() { return character2_image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "character3_image", function() { return character3_image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enemy1_image", function() { return enemy1_image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "background1_image", function() { return background1_image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "background2_image", function() { return background2_image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "background3_image", function() { return background3_image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "treestem1_image", function() { return treestem1_image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "treestemtop1_image", function() { return treestemtop1_image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boat1_image", function() { return boat1_image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ladder1_image", function() { return ladder1_image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wall1_image", function() { return wall1_image; });
/* harmony import */ var _sprites_buildings_building_1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sprites/buildings/building_1.png */ "./src/sprites/buildings/building_1.png");
/* harmony import */ var _sprites_buildings_building_2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sprites/buildings/building_2.png */ "./src/sprites/buildings/building_2.png");
/* harmony import */ var _sprites_buildings_building_3_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sprites/buildings/building_3.png */ "./src/sprites/buildings/building_3.png");
/* harmony import */ var _sprites_buildings_building_4_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sprites/buildings/building_4.png */ "./src/sprites/buildings/building_4.png");
/* harmony import */ var _sprites_buildings_home_1_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sprites/buildings/home_1.png */ "./src/sprites/buildings/home_1.png");
/* harmony import */ var _sprites_player_character_1_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sprites/player/character_1.png */ "./src/sprites/player/character_1.png");
/* harmony import */ var _sprites_player_character_2_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sprites/player/character_2.png */ "./src/sprites/player/character_2.png");
/* harmony import */ var _sprites_player_character_3_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sprites/player/character_3.png */ "./src/sprites/player/character_3.png");
/* harmony import */ var _sprites_enemies_enemy_1_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../sprites/enemies/enemy_1.png */ "./src/sprites/enemies/enemy_1.png");
/* harmony import */ var _sprites_backgrounds_background_1_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../sprites/backgrounds/background_1.png */ "./src/sprites/backgrounds/background_1.png");
/* harmony import */ var _sprites_backgrounds_background_2_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../sprites/backgrounds/background_2.png */ "./src/sprites/backgrounds/background_2.png");
/* harmony import */ var _sprites_backgrounds_background_3_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../sprites/backgrounds/background_3.png */ "./src/sprites/backgrounds/background_3.png");
/* harmony import */ var _sprites_objects_treestem_1_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../sprites/objects/treestem_1.png */ "./src/sprites/objects/treestem_1.png");
/* harmony import */ var _sprites_objects_treestemtop_1_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../sprites/objects/treestemtop_1.png */ "./src/sprites/objects/treestemtop_1.png");
/* harmony import */ var _sprites_objects_boat_1_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../sprites/objects/boat_1.png */ "./src/sprites/objects/boat_1.png");
/* harmony import */ var _sprites_objects_ladder_1_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../sprites/objects/ladder_1.png */ "./src/sprites/objects/ladder_1.png");
/* harmony import */ var _sprites_objects_wall_1_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../sprites/objects/wall_1.png */ "./src/sprites/objects/wall_1.png");

















var building1_image = new Image();
building1_image.src = _sprites_buildings_building_1_png__WEBPACK_IMPORTED_MODULE_0__["default"];
var building2_image = new Image();
building2_image.src = _sprites_buildings_building_2_png__WEBPACK_IMPORTED_MODULE_1__["default"];
var building3_image = new Image();
building3_image.src = _sprites_buildings_building_3_png__WEBPACK_IMPORTED_MODULE_2__["default"];
var building4_image = new Image();
building4_image.src = _sprites_buildings_building_4_png__WEBPACK_IMPORTED_MODULE_3__["default"];
var home1_image = new Image();
home1_image.src = _sprites_buildings_home_1_png__WEBPACK_IMPORTED_MODULE_4__["default"];
var character1_image = new Image();
character1_image.src = _sprites_player_character_1_png__WEBPACK_IMPORTED_MODULE_5__["default"];
var character2_image = new Image();
character2_image.src = _sprites_player_character_2_png__WEBPACK_IMPORTED_MODULE_6__["default"];
var character3_image = new Image();
character3_image.src = _sprites_player_character_3_png__WEBPACK_IMPORTED_MODULE_7__["default"];
var enemy1_image = new Image();
enemy1_image.src = _sprites_enemies_enemy_1_png__WEBPACK_IMPORTED_MODULE_8__["default"];
var background1_image = new Image();
background1_image.src = _sprites_backgrounds_background_1_png__WEBPACK_IMPORTED_MODULE_9__["default"];
var background2_image = new Image();
background2_image.src = _sprites_backgrounds_background_2_png__WEBPACK_IMPORTED_MODULE_10__["default"];
var background3_image = new Image();
background3_image.src = _sprites_backgrounds_background_3_png__WEBPACK_IMPORTED_MODULE_11__["default"];
var treestem1_image = new Image();
treestem1_image.src = _sprites_objects_treestem_1_png__WEBPACK_IMPORTED_MODULE_12__["default"];
var treestemtop1_image = new Image();
treestemtop1_image.src = _sprites_objects_treestemtop_1_png__WEBPACK_IMPORTED_MODULE_13__["default"];
var boat1_image = new Image();
boat1_image.src = _sprites_objects_boat_1_png__WEBPACK_IMPORTED_MODULE_14__["default"];
var ladder1_image = new Image();
ladder1_image.src = _sprites_objects_ladder_1_png__WEBPACK_IMPORTED_MODULE_15__["default"];
var wall1_image = new Image();
wall1_image.src = _sprites_objects_wall_1_png__WEBPACK_IMPORTED_MODULE_16__["default"];

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _levels_level2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./levels/level2 */ "./src/js/levels/level2.js");
 // const canvas = document.querySelector('canvas')

var canvas = document.getElementById('fullGame');
var c = canvas.getContext('2d');
console.log(_levels_level2__WEBPACK_IMPORTED_MODULE_0__["background"]);
canvas.width = 1024;
canvas.height = 576;
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
  _levels_level2__WEBPACK_IMPORTED_MODULE_0__["background"].update();
  _levels_level2__WEBPACK_IMPORTED_MODULE_0__["buildings"].forEach(function (building) {
    building.draw();
  });
  _levels_level2__WEBPACK_IMPORTED_MODULE_0__["objects"].forEach(function (object) {
    object.draw();
  });
  _levels_level2__WEBPACK_IMPORTED_MODULE_0__["player"].update(); // enemies.forEach(enemy => {
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

  if (_levels_level2__WEBPACK_IMPORTED_MODULE_0__["player"].position.y + _levels_level2__WEBPACK_IMPORTED_MODULE_0__["player"].image.height >= _levels_level2__WEBPACK_IMPORTED_MODULE_0__["background"].position.y && _levels_level2__WEBPACK_IMPORTED_MODULE_0__["player"].position.y + _levels_level2__WEBPACK_IMPORTED_MODULE_0__["player"].image.height + _levels_level2__WEBPACK_IMPORTED_MODULE_0__["player"].velocity.y <= _levels_level2__WEBPACK_IMPORTED_MODULE_0__["background"].position.y) {
    _levels_level2__WEBPACK_IMPORTED_MODULE_0__["player"].velocity.y += 10;
  }

  if (_levels_level2__WEBPACK_IMPORTED_MODULE_0__["player"].position.x < 0) {
    _levels_level2__WEBPACK_IMPORTED_MODULE_0__["player"].velocity.x = 0;
  }

  if (keys.right.pressed && _levels_level2__WEBPACK_IMPORTED_MODULE_0__["player"].position.x < 800) {
    _levels_level2__WEBPACK_IMPORTED_MODULE_0__["player"].velocity.x = 3;
  } else if (keys.left.pressed && _levels_level2__WEBPACK_IMPORTED_MODULE_0__["player"].position.x > 100) {
    _levels_level2__WEBPACK_IMPORTED_MODULE_0__["player"].velocity.x = -3;
  } else {
    _levels_level2__WEBPACK_IMPORTED_MODULE_0__["player"].velocity.x = 0; // the world moves back

    if (keys.right.pressed) {
      scrollOffset += 3;
      _levels_level2__WEBPACK_IMPORTED_MODULE_0__["buildings"].forEach(function (building) {
        building.draw();
        building.position.x -= 3;
      }); // enemies.forEach(enemy => {
      //   enemy.update()
      //   enemy.position.x -= 3
      //   // enemy.velocity.x = 0
      // })

      _levels_level2__WEBPACK_IMPORTED_MODULE_0__["objects"].forEach(function (object) {
        object.draw();
        object.position.x -= 3;
      }); // the world moves to the front
    } else if (keys.left.pressed) {
      scrollOffset -= 3;
      _levels_level2__WEBPACK_IMPORTED_MODULE_0__["buildings"].forEach(function (building) {
        building.draw();
        building.position.x += 3;
      }); // enemies.forEach(enemy => {
      //   enemy.update()
      //   enemy.position.x += 3
      //   // enemy.velocity.x = 0
      // })

      _levels_level2__WEBPACK_IMPORTED_MODULE_0__["objects"].forEach(function (object) {
        object.draw();
        object.position.x += 3;
      });
    }
  }

  _levels_level2__WEBPACK_IMPORTED_MODULE_0__["buildings"].forEach(function (building) {
    // platform collision detection
    // will keep player on top of platform
    if (_levels_level2__WEBPACK_IMPORTED_MODULE_0__["player"].position.y + _levels_level2__WEBPACK_IMPORTED_MODULE_0__["player"].image.height <= building.position.y && _levels_level2__WEBPACK_IMPORTED_MODULE_0__["player"].position.y + _levels_level2__WEBPACK_IMPORTED_MODULE_0__["player"].image.height + _levels_level2__WEBPACK_IMPORTED_MODULE_0__["player"].velocity.y >= building.position.y // will allow player to fall off the sides
    && _levels_level2__WEBPACK_IMPORTED_MODULE_0__["player"].position.x + _levels_level2__WEBPACK_IMPORTED_MODULE_0__["player"].image.width >= building.position.x + 5 && _levels_level2__WEBPACK_IMPORTED_MODULE_0__["player"].position.x <= building.position.x + building.image.width) {
      // console.log('Building Height: ', building.image.height)
      // console.log('Building Width: ', building.image.width)
      _levels_level2__WEBPACK_IMPORTED_MODULE_0__["player"].velocity.y = 0;
    }
  });
  _levels_level2__WEBPACK_IMPORTED_MODULE_0__["objects"].forEach(function (object) {
    var determineClimbableLeft = _levels_level2__WEBPACK_IMPORTED_MODULE_0__["player"].image.height / 1.5;
    var determineClimbableRight = _levels_level2__WEBPACK_IMPORTED_MODULE_0__["player"].image.height / 3;

    if (_levels_level2__WEBPACK_IMPORTED_MODULE_0__["player"].position.y + _levels_level2__WEBPACK_IMPORTED_MODULE_0__["player"].image.height <= object.position.y && _levels_level2__WEBPACK_IMPORTED_MODULE_0__["player"].position.y + _levels_level2__WEBPACK_IMPORTED_MODULE_0__["player"].image.height + _levels_level2__WEBPACK_IMPORTED_MODULE_0__["player"].velocity.y >= object.position.y // will allow player to fall off the sides
    && _levels_level2__WEBPACK_IMPORTED_MODULE_0__["player"].position.x + _levels_level2__WEBPACK_IMPORTED_MODULE_0__["player"].image.width >= object.position.x + 5 && _levels_level2__WEBPACK_IMPORTED_MODULE_0__["player"].position.x <= object.position.x + object.image.width) {
      _levels_level2__WEBPACK_IMPORTED_MODULE_0__["player"].velocity.y = 0;
      console.log(object.image.height);

      if (object.climbable === true) {
        if (keys.down.pressed) {
          if (_levels_level2__WEBPACK_IMPORTED_MODULE_0__["player"].position.y > canvas.height - _levels_level2__WEBPACK_IMPORTED_MODULE_0__["player"].image.height) {
            _levels_level2__WEBPACK_IMPORTED_MODULE_0__["player"].velocity.y -= 5;
          }

          _levels_level2__WEBPACK_IMPORTED_MODULE_0__["player"].velocity.y = 1;
        }
      }
    } // Conditionals to see where character has to be before being able to climb


    if (object.climbable === true) {
      if (object.position.y - _levels_level2__WEBPACK_IMPORTED_MODULE_0__["player"].image.height < _levels_level2__WEBPACK_IMPORTED_MODULE_0__["player"].position.y && object.position.y + object.image.height > _levels_level2__WEBPACK_IMPORTED_MODULE_0__["player"].position.y // Determines how much of the character
      // has to be on ladder in order to stay on
      && object.position.x - determineClimbableLeft < _levels_level2__WEBPACK_IMPORTED_MODULE_0__["player"].position.x && object.position.x + object.image.width - determineClimbableRight > _levels_level2__WEBPACK_IMPORTED_MODULE_0__["player"].position.x) {
        if (keys.up.pressed) {
          _levels_level2__WEBPACK_IMPORTED_MODULE_0__["player"].velocity.y = -1;
        } else if (keys.down.pressed) {
          if (object.position) _levels_level2__WEBPACK_IMPORTED_MODULE_0__["player"].velocity.y = 2;
          console.log(determineClimbableLeft);
          console.log(determineClimbableRight);
        } else {
          _levels_level2__WEBPACK_IMPORTED_MODULE_0__["player"].velocity.y = 0;
        }
      }
    } // prevent player from going past limitation wall


    if (_levels_level2__WEBPACK_IMPORTED_MODULE_0__["player"].position.x + _levels_level2__WEBPACK_IMPORTED_MODULE_0__["player"].image.width + _levels_level2__WEBPACK_IMPORTED_MODULE_0__["player"].velocity.x <= object.position.x - (_levels_level2__WEBPACK_IMPORTED_MODULE_0__["background"].image.width - _levels_level2__WEBPACK_IMPORTED_MODULE_0__["player"].image.width) / 1.75) {
      _levels_level2__WEBPACK_IMPORTED_MODULE_0__["player"].velocity.x += 10;
    }
  }); // If the end is reached, do this

  if (scrollOffset > 2000) {
    console.log('You Win!');
  }
} // console.log(player.image.height)


animate();
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
      if (keys.up.pressed === false && _levels_level2__WEBPACK_IMPORTED_MODULE_0__["player"].velocity.y >= 0) {
        if (_levels_level2__WEBPACK_IMPORTED_MODULE_0__["player"].velocity.y < 0) {
          _levels_level2__WEBPACK_IMPORTED_MODULE_0__["player"].velocity.y += 0;
          break;
        }

        keys.up.pressed = true;
        _levels_level2__WEBPACK_IMPORTED_MODULE_0__["player"].velocity.y -= 10;
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
      console.log(_levels_level2__WEBPACK_IMPORTED_MODULE_0__["player"].position.x);
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

/***/ "./src/js/levels/level2.js":
/*!*********************************!*\
  !*** ./src/js/levels/level2.js ***!
  \*********************************/
/*! exports provided: background, player, buildings, objects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "background", function() { return background; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "player", function() { return player; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildings", function() { return buildings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objects", function() { return objects; });
/* harmony import */ var _platformer_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../platformer-classes */ "./src/js/platformer-classes.js");
/* harmony import */ var _assign_images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../assign-images */ "./src/js/assign-images.js");
 //


var background = new _platformer_classes__WEBPACK_IMPORTED_MODULE_0__["Background"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["background2_image"]
});
var player = new _platformer_classes__WEBPACK_IMPORTED_MODULE_0__["Player"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["character1_image"]
}); // will create the buildings

var buildings = [new _platformer_classes__WEBPACK_IMPORTED_MODULE_0__["Building"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["home1_image"],
  x: 200,
  y: 526
})];
var objects = [new _platformer_classes__WEBPACK_IMPORTED_MODULE_0__["Objects"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["wall1_image"],
  x: 0,
  y: 0,
  climbable: false
})];

/***/ }),

/***/ "./src/js/platformer-classes.js":
/*!**************************************!*\
  !*** ./src/js/platformer-classes.js ***!
  \**************************************/
/*! exports provided: Background, Player, Enemy, Building, Objects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Background", function() { return Background; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Enemy", function() { return Enemy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Building", function() { return Building; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Objects", function() { return Objects; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// import character from  '../sprites/player/character_2.png'
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
  function Background(_ref) {
    var image = _ref.image;

    _classCallCheck(this, Background);

    this.position = {
      x: 0,
      y: 0
    };
    this.image = image;
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
  function Player(_ref2) {
    var image = _ref2.image;

    _classCallCheck(this, Player);

    this.position = {
      x: 100,
      y: 461
    };
    this.velocity = {
      x: 0,
      y: 0
    };
    this.image = image;
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
  function Enemy(_ref3) {
    var image = _ref3.image,
        x = _ref3.x,
        y = _ref3.y,
        orig_x = _ref3.orig_x;

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
  function Building(_ref4) {
    var x = _ref4.x,
        y = _ref4.y,
        image = _ref4.image;

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
  function Objects(_ref5) {
    var x = _ref5.x,
        y = _ref5.y,
        image = _ref5.image,
        climbable = _ref5.climbable;

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

/***/ "./src/sprites/backgrounds/background_2.png":
/*!**************************************************!*\
  !*** ./src/sprites/backgrounds/background_2.png ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "2a9d15cb935f02aab9ff4c32f8ef0d09.png");

/***/ }),

/***/ "./src/sprites/backgrounds/background_3.png":
/*!**************************************************!*\
  !*** ./src/sprites/backgrounds/background_3.png ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "6c9408ffa8e67fa0f01d4f1b8d2e74a1.png");

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

/***/ "./src/sprites/player/character_1.png":
/*!********************************************!*\
  !*** ./src/sprites/player/character_1.png ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "3546573c6b5020cd93c8f03dfeedafc9.png");

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

/***/ }),

/***/ "./src/sprites/player/character_3.png":
/*!********************************************!*\
  !*** ./src/sprites/player/character_3.png ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "2f723161fd50f9b0d10f2c464aae2d53.png");

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map