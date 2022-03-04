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
/*! exports provided: building1_image, building2_image, building3_image, building4_image, home1_image, character1_image, character2_image, character3_image, enemy1_image, background1_image, background2_image, background3_image, background4_image, treestem1_image, treestemtop1_image, boat1_image, ladder1_image, wall1_image, weapon1_image, finish1_image, ground1_image */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "background4_image", function() { return background4_image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "treestem1_image", function() { return treestem1_image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "treestemtop1_image", function() { return treestemtop1_image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boat1_image", function() { return boat1_image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ladder1_image", function() { return ladder1_image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wall1_image", function() { return wall1_image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "weapon1_image", function() { return weapon1_image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "finish1_image", function() { return finish1_image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ground1_image", function() { return ground1_image; });
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
/* harmony import */ var _sprites_backgrounds_background_4_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../sprites/backgrounds/background_4.png */ "./src/sprites/backgrounds/background_4.png");
/* harmony import */ var _sprites_objects_treestem_1_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../sprites/objects/treestem_1.png */ "./src/sprites/objects/treestem_1.png");
/* harmony import */ var _sprites_objects_treestemtop_1_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../sprites/objects/treestemtop_1.png */ "./src/sprites/objects/treestemtop_1.png");
/* harmony import */ var _sprites_objects_boat_1_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../sprites/objects/boat_1.png */ "./src/sprites/objects/boat_1.png");
/* harmony import */ var _sprites_objects_ladder_1_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../sprites/objects/ladder_1.png */ "./src/sprites/objects/ladder_1.png");
/* harmony import */ var _sprites_objects_wall_1_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../sprites/objects/wall_1.png */ "./src/sprites/objects/wall_1.png");
/* harmony import */ var _sprites_weapons_weapon_1_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../sprites/weapons/weapon_1.png */ "./src/sprites/weapons/weapon_1.png");
/* harmony import */ var _sprites_finish_finish_1_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../sprites/finish/finish_1.png */ "./src/sprites/finish/finish_1.png");
/* harmony import */ var _sprites_objects_ground_1_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../sprites/objects/ground_1.png */ "./src/sprites/objects/ground_1.png");





















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
var background4_image = new Image();
background4_image.src = _sprites_backgrounds_background_4_png__WEBPACK_IMPORTED_MODULE_12__["default"];
var treestem1_image = new Image();
treestem1_image.src = _sprites_objects_treestem_1_png__WEBPACK_IMPORTED_MODULE_13__["default"];
var treestemtop1_image = new Image();
treestemtop1_image.src = _sprites_objects_treestemtop_1_png__WEBPACK_IMPORTED_MODULE_14__["default"];
var boat1_image = new Image();
boat1_image.src = _sprites_objects_boat_1_png__WEBPACK_IMPORTED_MODULE_15__["default"];
var ladder1_image = new Image();
ladder1_image.src = _sprites_objects_ladder_1_png__WEBPACK_IMPORTED_MODULE_16__["default"];
var wall1_image = new Image();
wall1_image.src = _sprites_objects_wall_1_png__WEBPACK_IMPORTED_MODULE_17__["default"];
var weapon1_image = new Image();
weapon1_image.src = _sprites_weapons_weapon_1_png__WEBPACK_IMPORTED_MODULE_18__["default"];
var finish1_image = new Image();
finish1_image.src = _sprites_finish_finish_1_png__WEBPACK_IMPORTED_MODULE_19__["default"];
var ground1_image = new Image();
ground1_image.src = _sprites_objects_ground_1_png__WEBPACK_IMPORTED_MODULE_20__["default"];

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _levels_level1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./levels/level1 */ "./src/js/levels/level1.js");
/* harmony import */ var _levels_level2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./levels/level2 */ "./src/js/levels/level2.js");
/* harmony import */ var _levels_level3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./levels/level3 */ "./src/js/levels/level3.js");
/* harmony import */ var _levels_level4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./levels/level4 */ "./src/js/levels/level4.js");
// /* eslint-disable */
// import { background, player, buildings, objects, moveToNextLevel } from './levels/level1'
// import * as level1 from './levels/level1'
// import * as level2 from './levels/level2'
// import * as level3 from './levels/level3'
// import { background, player, buildings, objects } from './levels/level2'



 // const canvas = document.querySelector('canvas')

var canvas = document.getElementById('fullGame');
var c = canvas.getContext('2d');
canvas.width = 1024;
canvas.height = 576;
var level = _levels_level1__WEBPACK_IMPORTED_MODULE_0__;
var pow = false;
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
  level.background.update();
  level.buildings.forEach(function (building) {
    building.draw();
  });
  level.objects.forEach(function (object) {
    object.draw();
  });
  level.player.update();
  level.moveToNextRound.draw(); // enemies.forEach(enemy => {
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
  // prevent level.player from traveling out of the level.background top

  if (level.player.position.y + level.player.image.height >= level.background.position.y && level.player.position.y + level.player.image.height + level.player.velocity.y <= level.background.position.y) {
    level.player.velocity.y += 10;
  }

  if (level.player.position.x < 0) {
    level.player.velocity.x = 0;
  }

  if (keys.right.pressed && level.player.position.x < 800) {
    level.player.velocity.x = 3;
  } else if (keys.left.pressed && level.player.position.x > 100) {
    level.player.velocity.x = -3;
  } else {
    level.player.velocity.x = 0; // the world moves back

    if (keys.right.pressed) {
      scrollOffset += 3;
      level.buildings.forEach(function (building) {
        building.draw();
        building.position.x -= 3;
      }); // enemies.forEach(enemy => {
      //   enemy.update()
      //   enemy.position.x -= 3
      //   // enemy.velocity.x = 0
      // })

      level.objects.forEach(function (object) {
        object.draw();
        object.position.x -= 3;
      });
      level.moveToNextRound.draw();
      level.moveToNextRound.position.x -= 3; // the world moves to the front
    } else if (keys.left.pressed) {
      scrollOffset -= 3;
      level.buildings.forEach(function (building) {
        building.draw();
        building.position.x += 3;
      }); // enemies.forEach(enemy => {
      //   enemy.update()
      //   enemy.position.x += 3
      //   // enemy.velocity.x = 0
      // })

      level.objects.forEach(function (object) {
        object.draw();
        object.position.x += 3;
      });
      level.moveToNextRound.draw();
      level.moveToNextRound.position.x += 3;
    }
  }

  level.buildings.forEach(function (building) {
    // platform collision detection
    // will keep level.player on top of platform
    if (level.player.position.y + level.player.image.height <= building.position.y && level.player.position.y + level.player.image.height + level.player.velocity.y >= building.position.y // will allow level.player to fall off the sides
    && level.player.position.x + level.player.image.width >= building.position.x + 5 && level.player.position.x <= building.position.x + building.image.width) {
      // console.log('Building Height: ', building.image.height)
      // console.log('Building Width: ', building.image.width)
      level.player.velocity.y = 0;
    }
  });
  level.objects.forEach(function (object) {
    var determineClimbableLeft = level.player.image.height / 1.5;
    var determineClimbableRight = level.player.image.height / 3;

    if (object.limitationWall === true) {
      // prevent level.player from going past limitation wall
      if (level.player.position.x + level.player.image.width + level.player.velocity.x <= object.position.x + 20) {
        level.player.velocity.x += 10;
      }
    }

    if (level.player.position.y + level.player.image.height <= object.position.y && level.player.position.y + level.player.image.height + level.player.velocity.y >= object.position.y // will allow level.player to fall off the sides
    && level.player.position.x + level.player.image.width >= object.position.x + 5 && level.player.position.x <= object.position.x + object.image.width) {
      level.player.velocity.y = 0;
      console.log(object.image.height);

      if (object.climbable === true) {
        if (keys.down.pressed) {
          if (level.player.position.y > canvas.height - level.player.image.height) {
            level.player.velocity.y -= 5;
          }

          level.player.velocity.y = 1;
        }
      }
    } // Conditionals to see where character has to be before being able to climb


    if (object.climbable === true) {
      if (object.position.y - level.player.image.height < level.player.position.y && object.position.y + object.image.height > level.player.position.y // Determines how much of the character
      // has to be on ladder in order to stay on
      && object.position.x - determineClimbableLeft < level.player.position.x && object.position.x + object.image.width - determineClimbableRight > level.player.position.x) {
        if (keys.up.pressed) {
          level.player.velocity.y = -1;
        } else if (keys.down.pressed) {
          // if (object.position)
          level.player.velocity.y = 2;

          if (object.position.y + object.image.height === 576) {
            // level.player.velocity.y = 0
            console.log(level.player.position.y);

            if (level.player.position.y > 576 - level.player.image.height) {
              level.player.velocity.y = 0;
            }
          } // console.log(determineClimbableLeft)
          // console.log(determineClimbableRight)

        } else {
          level.player.velocity.y = 0;
        }
      }
    }
  });
  var determineClimbableLeft = level.player.image.height / 1.5;
  var determineClimbableRight = level.player.image.height / 3;

  if (level.moveToNextRound.position.y - level.player.image.height < level.player.position.y && level.moveToNextRound.position.y + level.moveToNextRound.image.height > level.player.position.y // Determines how much of the character
  // has to be on ladder in order to stay on
  && level.moveToNextRound.position.x - determineClimbableLeft < level.player.position.x && level.moveToNextRound.position.x + level.moveToNextRound.image.width - determineClimbableRight > level.player.position.x) {
    if (keys.up.pressed) {
      level.player.velocity.y = 0;
      pow = true;
    }
  }

  if (level === _levels_level1__WEBPACK_IMPORTED_MODULE_0__) {
    if (pow === true) {
      level = _levels_level2__WEBPACK_IMPORTED_MODULE_1__; // onLevelOne = false
      // onLevelTwo = true

      pow = false;
    }
  } else if (level === _levels_level2__WEBPACK_IMPORTED_MODULE_1__) {
    if (pow === true) {
      level = _levels_level3__WEBPACK_IMPORTED_MODULE_2__; // onLevelTwo = false
      // onLevelThree = true

      pow = false;
    }
  } else if (level === _levels_level3__WEBPACK_IMPORTED_MODULE_2__) {
    if (pow === true) {
      level = _levels_level4__WEBPACK_IMPORTED_MODULE_3__;
    }
  }
}

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
      if (keys.up.pressed === false && level.player.velocity.y >= 0) {
        if (level.player.velocity.y > 0) {
          break;
        }

        keys.up.pressed = true;
        level.player.velocity.y -= 10;
        break;
      }

    // keys.up.pressed = true
    // console.log('Up Key: ', keys.up.pressed)
    // level.player.velocity.y -= 10
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
      break;
  }

  switch (keyCode) {
    case 87:
      // console.log('up')
      keys.up.pressed = false; // level.player.velocity.y += 5

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

/***/ "./src/js/levels/level1.js":
/*!*********************************!*\
  !*** ./src/js/levels/level1.js ***!
  \*********************************/
/*! exports provided: id, background, player, buildings, objects, moveToNextRound */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "id", function() { return id; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "background", function() { return background; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "player", function() { return player; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildings", function() { return buildings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objects", function() { return objects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveToNextRound", function() { return moveToNextRound; });
/* harmony import */ var _platformer_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../platformer-classes */ "./src/js/platformer-classes.js");
/* harmony import */ var _assign_images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../assign-images */ "./src/js/assign-images.js");


var id = 1;
var background = new _platformer_classes__WEBPACK_IMPORTED_MODULE_0__["Background"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["background3_image"]
});
var player = new _platformer_classes__WEBPACK_IMPORTED_MODULE_0__["Player"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["character1_image"]
});
var buildings = [new _platformer_classes__WEBPACK_IMPORTED_MODULE_0__["Building"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["building1_image"],
  x: 500,
  y: 476
}), new _platformer_classes__WEBPACK_IMPORTED_MODULE_0__["Building"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["building2_image"],
  x: 600,
  y: 396
}), new _platformer_classes__WEBPACK_IMPORTED_MODULE_0__["Building"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["building3_image"],
  x: 800,
  y: 476
}), new _platformer_classes__WEBPACK_IMPORTED_MODULE_0__["Building"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["building4_image"],
  x: 300,
  y: 190
}), new _platformer_classes__WEBPACK_IMPORTED_MODULE_0__["Building"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["home1_image"],
  x: 200,
  y: 526
})];
var objects = [new _platformer_classes__WEBPACK_IMPORTED_MODULE_0__["Objects"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["ladder1_image"],
  x: 600,
  y: 476,
  climbable: true
}), new _platformer_classes__WEBPACK_IMPORTED_MODULE_0__["Objects"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["wall1_image"],
  x: 0,
  y: 0,
  climbable: false,
  limitationWall: true
}), new _platformer_classes__WEBPACK_IMPORTED_MODULE_0__["Objects"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["ladder1_image"],
  x: 750,
  y: 430,
  climbable: true
})];
var moveToNextRound = new _platformer_classes__WEBPACK_IMPORTED_MODULE_0__["MoveToNextRound"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["finish1_image"],
  x: 693,
  y: 526
});

/***/ }),

/***/ "./src/js/levels/level2.js":
/*!*********************************!*\
  !*** ./src/js/levels/level2.js ***!
  \*********************************/
/*! exports provided: id, background, player, buildings, objects, moveToNextRound */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "id", function() { return id; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "background", function() { return background; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "player", function() { return player; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildings", function() { return buildings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objects", function() { return objects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveToNextRound", function() { return moveToNextRound; });
/* harmony import */ var _platformer_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../platformer-classes */ "./src/js/platformer-classes.js");
/* harmony import */ var _assign_images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../assign-images */ "./src/js/assign-images.js");
 //


var id = 2;
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
}), new _platformer_classes__WEBPACK_IMPORTED_MODULE_0__["Building"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["home1_image"],
  x: 300,
  y: 400
})];
var objects = [new _platformer_classes__WEBPACK_IMPORTED_MODULE_0__["Objects"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["wall1_image"],
  x: 0,
  y: 0,
  climbable: false,
  limitationWall: true
})];
var moveToNextRound = new _platformer_classes__WEBPACK_IMPORTED_MODULE_0__["MoveToNextRound"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["finish1_image"],
  x: 30,
  y: 526
});

/***/ }),

/***/ "./src/js/levels/level3.js":
/*!*********************************!*\
  !*** ./src/js/levels/level3.js ***!
  \*********************************/
/*! exports provided: id, background, player, buildings, objects, moveToNextRound */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "id", function() { return id; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "background", function() { return background; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "player", function() { return player; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildings", function() { return buildings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objects", function() { return objects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveToNextRound", function() { return moveToNextRound; });
/* harmony import */ var _platformer_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../platformer-classes */ "./src/js/platformer-classes.js");
/* harmony import */ var _assign_images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../assign-images */ "./src/js/assign-images.js");


var id = 3;
var background = new _platformer_classes__WEBPACK_IMPORTED_MODULE_0__["Background"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["background1_image"]
});
var player = new _platformer_classes__WEBPACK_IMPORTED_MODULE_0__["Player"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["character1_image"]
});
var buildings = [new _platformer_classes__WEBPACK_IMPORTED_MODULE_0__["Building"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["building1_image"],
  x: 500,
  y: 476
}), new _platformer_classes__WEBPACK_IMPORTED_MODULE_0__["Building"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["building2_image"],
  x: 600,
  y: 396
}), new _platformer_classes__WEBPACK_IMPORTED_MODULE_0__["Building"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["building3_image"],
  x: 800,
  y: 476
}), new _platformer_classes__WEBPACK_IMPORTED_MODULE_0__["Building"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["building4_image"],
  x: 300,
  y: 190
}), new _platformer_classes__WEBPACK_IMPORTED_MODULE_0__["Building"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["home1_image"],
  x: 200,
  y: 526
})];
var objects = [new _platformer_classes__WEBPACK_IMPORTED_MODULE_0__["Objects"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["ladder1_image"],
  x: 600,
  y: 476,
  climbable: true
}), new _platformer_classes__WEBPACK_IMPORTED_MODULE_0__["Objects"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["wall1_image"],
  x: 0,
  y: 0,
  climbable: false,
  limitationWall: true
})];
var moveToNextRound = new _platformer_classes__WEBPACK_IMPORTED_MODULE_0__["MoveToNextRound"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["finish1_image"],
  x: 20,
  y: 526
});

/***/ }),

/***/ "./src/js/levels/level4.js":
/*!*********************************!*\
  !*** ./src/js/levels/level4.js ***!
  \*********************************/
/*! exports provided: id, background, player, buildings, objects, moveToNextRound */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "id", function() { return id; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "background", function() { return background; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "player", function() { return player; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildings", function() { return buildings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objects", function() { return objects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveToNextRound", function() { return moveToNextRound; });
/* harmony import */ var _platformer_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../platformer-classes */ "./src/js/platformer-classes.js");
/* harmony import */ var _assign_images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../assign-images */ "./src/js/assign-images.js");
 //


var id = 4;
var background = new _platformer_classes__WEBPACK_IMPORTED_MODULE_0__["Background"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["background4_image"]
});
var player = new _platformer_classes__WEBPACK_IMPORTED_MODULE_0__["Player"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["character1_image"]
}); // will create the buildings

var buildings = [new _platformer_classes__WEBPACK_IMPORTED_MODULE_0__["Building"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["home1_image"],
  x: 200,
  y: 526
}), new _platformer_classes__WEBPACK_IMPORTED_MODULE_0__["Building"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["home1_image"],
  x: 300,
  y: 400
})];
var objects = [new _platformer_classes__WEBPACK_IMPORTED_MODULE_0__["Objects"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["wall1_image"],
  x: 0,
  y: 0,
  climbable: false,
  limitationWall: true
})];
var moveToNextRound = new _platformer_classes__WEBPACK_IMPORTED_MODULE_0__["MoveToNextRound"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["finish1_image"],
  x: 20,
  y: 526
});

/***/ }),

/***/ "./src/js/platformer-classes.js":
/*!**************************************!*\
  !*** ./src/js/platformer-classes.js ***!
  \**************************************/
/*! exports provided: Background, Player, Enemy, Building, Objects, MoveToNextRound */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Background", function() { return Background; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Enemy", function() { return Enemy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Building", function() { return Building; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Objects", function() { return Objects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoveToNextRound", function() { return MoveToNextRound; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// import character from  '../sprites/player/character_2.png'
// function createImage(imageSrc) {
//   const image = new Image()
//   image.src = imageSrc
//   return image
// }
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
      y: 561
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
    var x = _ref3.x,
        y = _ref3.y,
        image = _ref3.image,
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
        climbable = _ref5.climbable,
        limitationWall = _ref5.limitationWall;

    _classCallCheck(this, Objects);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.climbable = climbable;
    this.limitationWall = limitationWall;
  }

  _createClass(Objects, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return Objects;
}();
var MoveToNextRound = /*#__PURE__*/function () {
  function MoveToNextRound(_ref6) {
    var x = _ref6.x,
        y = _ref6.y,
        image = _ref6.image;

    _classCallCheck(this, MoveToNextRound);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
  }

  _createClass(MoveToNextRound, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return MoveToNextRound;
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

/***/ "./src/sprites/backgrounds/background_4.png":
/*!**************************************************!*\
  !*** ./src/sprites/backgrounds/background_4.png ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "2009917ed817738f9bbfbd10ff73ed2f.png");

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

/***/ "./src/sprites/finish/finish_1.png":
/*!*****************************************!*\
  !*** ./src/sprites/finish/finish_1.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "b2666180a08e795e6cdc0a680fbc6a21.png");

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

/***/ "./src/sprites/objects/ground_1.png":
/*!******************************************!*\
  !*** ./src/sprites/objects/ground_1.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "f977c70f8072f9059d3a226cfb71862d.png");

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

/***/ }),

/***/ "./src/sprites/weapons/weapon_1.png":
/*!******************************************!*\
  !*** ./src/sprites/weapons/weapon_1.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c87f3f9389b5adcb3b44687783c3b83d.png");

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map