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
/*! exports provided: mainChar_front_image, mainChar_back_image, mainChar_left_image, mainChar_right_image, r1_image, bg_image, floor2_image, floor3_image, brick_black_image, building1_image, wall1_image, wall2_image, bed1_image, door1_image, water_image */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mainChar_front_image", function() { return mainChar_front_image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mainChar_back_image", function() { return mainChar_back_image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mainChar_left_image", function() { return mainChar_left_image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mainChar_right_image", function() { return mainChar_right_image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r1_image", function() { return r1_image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bg_image", function() { return bg_image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "floor2_image", function() { return floor2_image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "floor3_image", function() { return floor3_image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "brick_black_image", function() { return brick_black_image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "building1_image", function() { return building1_image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wall1_image", function() { return wall1_image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wall2_image", function() { return wall2_image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bed1_image", function() { return bed1_image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "door1_image", function() { return door1_image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "water_image", function() { return water_image; });
/* harmony import */ var _sprites_characters_mainCharacter_front_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sprites/characters/mainCharacter_front.png */ "./src/sprites/characters/mainCharacter_front.png");
/* harmony import */ var _sprites_characters_mainCharacter_back_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sprites/characters/mainCharacter_back.png */ "./src/sprites/characters/mainCharacter_back.png");
/* harmony import */ var _sprites_characters_mainCharacter_left_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sprites/characters/mainCharacter_left.png */ "./src/sprites/characters/mainCharacter_left.png");
/* harmony import */ var _sprites_characters_mainCharacter_right_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sprites/characters/mainCharacter_right.png */ "./src/sprites/characters/mainCharacter_right.png");
/* harmony import */ var _sprites_worlds_test_r1_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sprites/worlds/test/r1.png */ "./src/sprites/worlds/test/r1.png");
/* harmony import */ var _sprites_worlds_test_floor1_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sprites/worlds/test/floor1.png */ "./src/sprites/worlds/test/floor1.png");
/* harmony import */ var _sprites_worlds_test_floor2_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sprites/worlds/test/floor2.png */ "./src/sprites/worlds/test/floor2.png");
/* harmony import */ var _sprites_worlds_test_floor3_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sprites/worlds/test/floor3.png */ "./src/sprites/worlds/test/floor3.png");
/* harmony import */ var _sprites_objects_brick_black_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../sprites/objects/brick_black.png */ "./src/sprites/objects/brick_black.png");
/* harmony import */ var _sprites_objects_treasure_collector_building1_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../sprites/objects/treasure_collector_building1.png */ "./src/sprites/objects/treasure_collector_building1.png");
/* harmony import */ var _sprites_objects_wall1_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../sprites/objects/wall1.png */ "./src/sprites/objects/wall1.png");
/* harmony import */ var _sprites_objects_wall2_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../sprites/objects/wall2.png */ "./src/sprites/objects/wall2.png");
/* harmony import */ var _sprites_objects_bed1_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../sprites/objects/bed1.png */ "./src/sprites/objects/bed1.png");
/* harmony import */ var _sprites_doors_door_1_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../sprites/doors/door_1.png */ "./src/sprites/doors/door_1.png");
/* harmony import */ var _sprites_water_water1_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../sprites/water/water1.png */ "./src/sprites/water/water1.png");















var mainChar_front_image = new Image();
mainChar_front_image.src = _sprites_characters_mainCharacter_front_png__WEBPACK_IMPORTED_MODULE_0__["default"];
var mainChar_back_image = new Image();
mainChar_back_image.src = _sprites_characters_mainCharacter_back_png__WEBPACK_IMPORTED_MODULE_1__["default"];
var mainChar_left_image = new Image();
mainChar_left_image.src = _sprites_characters_mainCharacter_left_png__WEBPACK_IMPORTED_MODULE_2__["default"];
var mainChar_right_image = new Image();
mainChar_right_image.src = _sprites_characters_mainCharacter_right_png__WEBPACK_IMPORTED_MODULE_3__["default"];
var r1_image = new Image();
r1_image.src = _sprites_worlds_test_r1_png__WEBPACK_IMPORTED_MODULE_4__["default"];
var bg_image = new Image();
bg_image.src = _sprites_worlds_test_floor1_png__WEBPACK_IMPORTED_MODULE_5__["default"];
var floor2_image = new Image();
floor2_image.src = _sprites_worlds_test_floor2_png__WEBPACK_IMPORTED_MODULE_6__["default"];
var floor3_image = new Image();
floor3_image.src = _sprites_worlds_test_floor3_png__WEBPACK_IMPORTED_MODULE_7__["default"];
var brick_black_image = new Image();
brick_black_image.src = _sprites_objects_brick_black_png__WEBPACK_IMPORTED_MODULE_8__["default"];
var building1_image = new Image();
building1_image.src = _sprites_objects_treasure_collector_building1_png__WEBPACK_IMPORTED_MODULE_9__["default"];
var wall1_image = new Image();
wall1_image.src = _sprites_objects_wall1_png__WEBPACK_IMPORTED_MODULE_10__["default"];
var wall2_image = new Image();
wall2_image.src = _sprites_objects_wall2_png__WEBPACK_IMPORTED_MODULE_11__["default"];
var bed1_image = new Image();
bed1_image.src = _sprites_objects_bed1_png__WEBPACK_IMPORTED_MODULE_12__["default"];
var door1_image = new Image();
door1_image.src = _sprites_doors_door_1_png__WEBPACK_IMPORTED_MODULE_13__["default"];
var water_image = new Image();
water_image.src = _sprites_water_water1_png__WEBPACK_IMPORTED_MODULE_14__["default"];

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! exports provided: canvas, world, userKeys */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canvas", function() { return canvas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "world", function() { return world; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userKeys", function() { return userKeys; });
/* harmony import */ var _world_world1_one__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./world/world1/one */ "./src/js/world/world1/one.js");
/* harmony import */ var _assign_images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assign-images */ "./src/js/assign-images.js");




var canvas = document.getElementById('fullGame');
var c = canvas.getContext('2d');
var canvas2 = document.getElementById('sideInfo');
var c2 = canvas2.getContext('2d');
canvas.width = 500;
canvas.height = 500;
canvas2.width = 500;
canvas2.height = 150;
var world = _world_world1_one__WEBPACK_IMPORTED_MODULE_0__;
var userKeys = {
  w_Key: {
    // go up
    pressed: false
  },
  s_Key: {
    // go down
    pressed: false
  },
  a_Key: {
    // go left
    pressed: false
  },
  d_Key: {
    // go right
    pressed: false
  },
  space_Key: {
    // performs action
    pressed: false
  }
};

function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = 'black';
  c.fillRect(0, 0, canvas.width, canvas.height);
  world.background.update();

  if (world.buildings !== undefined) {
    world.buildings.forEach(function (building) {
      building.draw();
    });
  }

  if (world.doors !== undefined) {
    world.doors.forEach(function (door) {
      door.draw();
    });
  }

  if (world.water !== undefined) {
    world.water.forEach(function (water) {
      water.update();
    });
  }

  world.player.update(); // console.log(world.background.position.y)
}

function animateInfo() {
  requestAnimationFrame(animateInfo);
  c2.fillStyle = 'white';
  c2.fillRect(0, 0, canvas2.width, canvas2.height);

  var info = function info() {
    world.doors.forEach(function (door) {
      var player = world.player;

      if (player.position.x + player.spriteWidth >= door.position.x && player.position.x <= door.position.x + door.image.width && player.position.y <= door.position.y + door.image.height && player.position.y + player.spriteHeight >= door.position.y) {
        c2.font = '20px Georgia';
        c2.fillStyle = 'black';
        c2.fillText('Click Space to Enter ' + door.goesTo.name, 0, 20); // c2.fillText(door.goesTo.name, 0, 40)
      }
    });
  };

  info();
} // let numOfImages = 1
// function loadImages () {
//     if (--numOfImages > 0) return
//     animate()
// }
// loadImages()


animate();
animateInfo();
addEventListener('keydown', function (_ref) {
  var keyCode = _ref.keyCode;

  switch (keyCode) {
    case 87:
      userKeys.w_Key.pressed = true;
      world.player.image = _assign_images__WEBPACK_IMPORTED_MODULE_1__["mainChar_back_image"];
      world.player.totalFrames = 3;
      world.player.velocity.y = -1.5;
      break;
  }

  switch (keyCode) {
    case 83:
      userKeys.s_Key.pressed = true;
      world.player.image = _assign_images__WEBPACK_IMPORTED_MODULE_1__["mainChar_front_image"];
      world.player.totalFrames = 3;
      world.player.velocity.y = 1.5;
      break;
  }

  switch (keyCode) {
    case 65:
      userKeys.a_Key.pressed = true;
      world.player.image = _assign_images__WEBPACK_IMPORTED_MODULE_1__["mainChar_left_image"];
      world.player.totalFrames = 3;
      world.player.velocity.x = -1.5;
      break;
  }

  switch (keyCode) {
    case 68:
      userKeys.d_Key.pressed = true;
      world.player.image = _assign_images__WEBPACK_IMPORTED_MODULE_1__["mainChar_right_image"];
      world.player.totalFrames = 3;
      world.player.velocity.x = 1.5;
      break;
  }
});
addEventListener('keyup', function (_ref2) {
  var keyCode = _ref2.keyCode;

  switch (keyCode) {
    case 87:
      userKeys.w_Key.pressed = false;
      world.player.totalFrames = 1;
      world.player.velocity.y = 0;
      break;
  }

  switch (keyCode) {
    case 83:
      userKeys.s_Key.pressed = false;
      world.player.totalFrames = 1;
      world.player.velocity.y = 0;
      break;
  }

  switch (keyCode) {
    case 65:
      userKeys.a_Key.pressed = false;
      world.player.totalFrames = 1;
      world.player.velocity.x = 0;
      break;
  }

  switch (keyCode) {
    case 68:
      userKeys.d_Key.pressed = false;
      world.player.totalFrames = 1;
      world.player.velocity.x = 0;
      break;
  }

  switch (keyCode) {
    case 32:
      userKeys.space_Key.pressed = true;
      world.doors.forEach(function (door) {
        var player = world.player;

        if (player.position.x + player.spriteWidth >= door.position.x && player.position.x <= door.position.x + door.image.width && player.position.y <= door.position.y + door.image.height && player.position.y + player.spriteHeight >= door.position.y) {
          if (userKeys.space_Key.pressed === true) {
            world = door.goesTo;
          }
        }
      });
      userKeys.space_Key.pressed = false;
      break;
  }
});

/***/ }),

/***/ "./src/js/game-classes.js":
/*!********************************!*\
  !*** ./src/js/game-classes.js ***!
  \********************************/
/*! exports provided: inWater, Background, Player, Building, Door, Water */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inWater", function() { return inWater; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Background", function() { return Background; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Building", function() { return Building; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Door", function() { return Door; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Water", function() { return Water; });
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas */ "./src/js/canvas.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var canvas = document.getElementById('fullGame');
var c = canvas.getContext('2d'); // function createImage(imageSrc) {
//     const image = new Image()
//     image.src = imageSrc
//     return image
// }

canvas.width = 500;
canvas.height = 500;
_canvas__WEBPACK_IMPORTED_MODULE_0__["world"];
_canvas__WEBPACK_IMPORTED_MODULE_0__["userKeys"];
var inWater = false; // building class

var Background = /*#__PURE__*/function () {
  function Background(_ref) {
    var image = _ref.image,
        x = _ref.x,
        y = _ref.y;

    _classCallCheck(this, Background);

    this.position = {
      x: x,
      y: y
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

      if (_canvas__WEBPACK_IMPORTED_MODULE_0__["world"].player.position.y + _canvas__WEBPACK_IMPORTED_MODULE_0__["world"].player.spriteHeight >= _canvas__WEBPACK_IMPORTED_MODULE_0__["world"].background.position.y + _canvas__WEBPACK_IMPORTED_MODULE_0__["world"].background.image.height) {
        _canvas__WEBPACK_IMPORTED_MODULE_0__["world"].player.position.y = _canvas__WEBPACK_IMPORTED_MODULE_0__["world"].background.position.y + _canvas__WEBPACK_IMPORTED_MODULE_0__["world"].background.image.height - _canvas__WEBPACK_IMPORTED_MODULE_0__["world"].player.spriteHeight;
      }

      if (_canvas__WEBPACK_IMPORTED_MODULE_0__["world"].player.position.y <= _canvas__WEBPACK_IMPORTED_MODULE_0__["world"].background.position.y) {
        _canvas__WEBPACK_IMPORTED_MODULE_0__["world"].player.position.y = _canvas__WEBPACK_IMPORTED_MODULE_0__["world"].background.position.y;
      }

      if (_canvas__WEBPACK_IMPORTED_MODULE_0__["world"].player.position.x + _canvas__WEBPACK_IMPORTED_MODULE_0__["world"].player.spriteWidth >= _canvas__WEBPACK_IMPORTED_MODULE_0__["world"].background.position.x + _canvas__WEBPACK_IMPORTED_MODULE_0__["world"].background.image.width) {
        _canvas__WEBPACK_IMPORTED_MODULE_0__["world"].player.position.x = _canvas__WEBPACK_IMPORTED_MODULE_0__["world"].background.position.x + _canvas__WEBPACK_IMPORTED_MODULE_0__["world"].background.image.width - _canvas__WEBPACK_IMPORTED_MODULE_0__["world"].player.spriteWidth;
      }

      if (_canvas__WEBPACK_IMPORTED_MODULE_0__["world"].player.position.x <= _canvas__WEBPACK_IMPORTED_MODULE_0__["world"].background.position.x) {
        _canvas__WEBPACK_IMPORTED_MODULE_0__["world"].player.position.x = _canvas__WEBPACK_IMPORTED_MODULE_0__["world"].background.position.x;
      } // // scroll background down if player moves up
      // if (world.player.position.y + world.player.velocity.y <= 0) {
      //     if (world.background.position.y >= 0) {
      //         world.player.position.y = 0
      //     }
      //     else {
      //         if (userKeys.w_Key.pressed === true) {
      //             world.background.position.y += 1
      //             world.buildings.forEach(building => {
      //                 building.position.y += 1
      //             })
      //             world.doors.forEach(door => {
      //                 door.position.y += 1
      //             })
      //             world.water.forEach(water => {
      //                 water.position.y += 1
      //             })
      //         }
      //         world.player.position.y = 0
      //         // world.background.position.y += 1
      //     }
      // }
      // // scroll background to the left if player moves right
      // if (world.player.position.x >= canvas.width - world.player.spriteWidth) {
      //     if (world.background.position.x <= -world.background.image.width + canvas.width) {
      //         world.player.position.x = canvas.width - world.player.spriteWidth
      //         world.player.velocity.x = 0
      //         console.log('Stop')
      //     }
      //     else {
      //         if (userKeys.d_Key.pressed === true) {
      //             world.background.position.x -= 1
      //             world.buildings.forEach(building => {
      //                 building.position.x -= 1
      //             })
      //             world.doors.forEach(door => {
      //                 door.position.x -= 1
      //             })
      //             world.water.forEach(water => {
      //                 water.position.x -= 1
      //             })
      //         }
      //         world.player.position.x = canvas.width - world.player.spriteWidth
      //     }
      // }
      // // scroll background to the right if player moves left
      // if (world.player.position.x <= 0) {
      //     if (world.background.position.x >= 0) {
      //         world.player.position.x = 0
      //         world.player.velocity.x = 0
      //     }
      //     else {
      //         if (userKeys.a_Key.pressed === true) {
      //             world.background.position.x += 1
      //             world.buildings.forEach(building => {
      //                 building.position.x += 1
      //             })
      //             world.doors.forEach(door => {
      //                 door.position.x += 1
      //             })
      //             world.water.forEach(water => {
      //                 water.position.x += 1
      //             })
      //         }
      //         world.player.position.x = 0
      //     }
      // }

    }
  }]);

  return Background;
}(); // player class

var Player = /*#__PURE__*/function () {
  function Player(_ref2) {
    var image = _ref2.image,
        x = _ref2.x,
        y = _ref2.y;

    _classCallCheck(this, Player);

    this.position = {
      x: x,
      y: y
    };
    this.velocity = {
      x: 0,
      y: 0
    };
    this.image = image;
    this.cols = 3;
    this.spriteWidth = this.image.width / this.cols;
    this.spriteHeight = this.image.height;
    this.inWaterHeight = this.image.height / 2;
    this.totalFrames = 3;
    this.currentFrame = 0;
    this.srcX = 0;
    this.srcY = 0;
    this.framesDrawn = 0;
  }

  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      this.currentFrame = this.currentFrame % this.totalFrames;
      this.srcX = this.currentFrame * this.spriteWidth;
      c.drawImage(this.image, this.srcX, this.srcY, this.spriteWidth, this.spriteHeight, this.position.x, this.position.y, this.spriteWidth, this.spriteHeight);
    }
  }, {
    key: "update",
    value: function update() {
      this.framesDrawn++;

      if (this.framesDrawn >= 10) {
        this.currentFrame++;
        this.framesDrawn = 0;
      }

      this.draw();
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;

      if (inWater === false) {
        this.spriteHeight = this.image.height;
      } // scroll background up if player moves down


      if (_canvas__WEBPACK_IMPORTED_MODULE_0__["world"].player.position.y + _canvas__WEBPACK_IMPORTED_MODULE_0__["world"].player.spriteHeight >= canvas.height) {
        if (_canvas__WEBPACK_IMPORTED_MODULE_0__["world"].background.position.y <= -_canvas__WEBPACK_IMPORTED_MODULE_0__["world"].background.image.height + canvas.height) {
          _canvas__WEBPACK_IMPORTED_MODULE_0__["world"].player.position.y = canvas.height - _canvas__WEBPACK_IMPORTED_MODULE_0__["world"].player.spriteHeight;
        } else {
          if (_canvas__WEBPACK_IMPORTED_MODULE_0__["userKeys"].s_Key.pressed === true) {
            _canvas__WEBPACK_IMPORTED_MODULE_0__["world"].background.position.y -= 2;
            _canvas__WEBPACK_IMPORTED_MODULE_0__["world"].buildings.forEach(function (building) {
              building.position.y -= 2;
            });
            _canvas__WEBPACK_IMPORTED_MODULE_0__["world"].doors.forEach(function (door) {
              door.position.y -= 2;
            });
            _canvas__WEBPACK_IMPORTED_MODULE_0__["world"].water.forEach(function (water) {
              water.position.y -= 2;
            });
          }

          _canvas__WEBPACK_IMPORTED_MODULE_0__["world"].player.position.y = canvas.height - _canvas__WEBPACK_IMPORTED_MODULE_0__["world"].player.spriteHeight;
        }
      } // scroll background down if player moves up


      if (_canvas__WEBPACK_IMPORTED_MODULE_0__["world"].player.position.y + _canvas__WEBPACK_IMPORTED_MODULE_0__["world"].player.velocity.y <= 0) {
        if (_canvas__WEBPACK_IMPORTED_MODULE_0__["world"].background.position.y >= 0) {
          _canvas__WEBPACK_IMPORTED_MODULE_0__["world"].player.position.y = 0;
        } else {
          if (_canvas__WEBPACK_IMPORTED_MODULE_0__["userKeys"].w_Key.pressed === true) {
            _canvas__WEBPACK_IMPORTED_MODULE_0__["world"].background.position.y += 2;
            _canvas__WEBPACK_IMPORTED_MODULE_0__["world"].buildings.forEach(function (building) {
              building.position.y += 2;
            });
            _canvas__WEBPACK_IMPORTED_MODULE_0__["world"].doors.forEach(function (door) {
              door.position.y += 2;
            });
            _canvas__WEBPACK_IMPORTED_MODULE_0__["world"].water.forEach(function (water) {
              water.position.y += 2;
            });
          }

          _canvas__WEBPACK_IMPORTED_MODULE_0__["world"].player.position.y = 0; // world.background.position.y += 1
        }
      } // scroll background to the left if player moves right


      if (_canvas__WEBPACK_IMPORTED_MODULE_0__["world"].player.position.x >= canvas.width - _canvas__WEBPACK_IMPORTED_MODULE_0__["world"].player.spriteWidth) {
        if (_canvas__WEBPACK_IMPORTED_MODULE_0__["world"].background.position.x <= -_canvas__WEBPACK_IMPORTED_MODULE_0__["world"].background.image.width + canvas.width) {
          _canvas__WEBPACK_IMPORTED_MODULE_0__["world"].player.position.x = canvas.width - _canvas__WEBPACK_IMPORTED_MODULE_0__["world"].player.spriteWidth;
          _canvas__WEBPACK_IMPORTED_MODULE_0__["world"].player.velocity.x = 0;
        } else {
          if (_canvas__WEBPACK_IMPORTED_MODULE_0__["userKeys"].d_Key.pressed === true) {
            _canvas__WEBPACK_IMPORTED_MODULE_0__["world"].background.position.x -= 2;
            _canvas__WEBPACK_IMPORTED_MODULE_0__["world"].buildings.forEach(function (building) {
              building.position.x -= 2;
            });
            _canvas__WEBPACK_IMPORTED_MODULE_0__["world"].doors.forEach(function (door) {
              door.position.x -= 2;
            });
            _canvas__WEBPACK_IMPORTED_MODULE_0__["world"].water.forEach(function (water) {
              water.position.x -= 2;
            });
          }

          _canvas__WEBPACK_IMPORTED_MODULE_0__["world"].player.position.x = canvas.width - _canvas__WEBPACK_IMPORTED_MODULE_0__["world"].player.spriteWidth;
        }
      } // scroll background to the right if player moves left


      if (_canvas__WEBPACK_IMPORTED_MODULE_0__["world"].player.position.x <= 0) {
        if (_canvas__WEBPACK_IMPORTED_MODULE_0__["world"].background.position.x >= 0) {
          _canvas__WEBPACK_IMPORTED_MODULE_0__["world"].player.position.x = 0;
          _canvas__WEBPACK_IMPORTED_MODULE_0__["world"].player.velocity.x = 0;
        } else {
          if (_canvas__WEBPACK_IMPORTED_MODULE_0__["userKeys"].a_Key.pressed === true) {
            _canvas__WEBPACK_IMPORTED_MODULE_0__["world"].background.position.x += 2;
            _canvas__WEBPACK_IMPORTED_MODULE_0__["world"].buildings.forEach(function (building) {
              building.position.x += 2;
            });
            _canvas__WEBPACK_IMPORTED_MODULE_0__["world"].doors.forEach(function (door) {
              door.position.x += 2;
            });
            _canvas__WEBPACK_IMPORTED_MODULE_0__["world"].water.forEach(function (water) {
              water.position.x += 2;
            });
          }

          _canvas__WEBPACK_IMPORTED_MODULE_0__["world"].player.position.x = 0;
        }
      }
    }
  }]);

  return Player;
}(); // Building

var Building = /*#__PURE__*/function () {
  function Building(_ref3) {
    var image = _ref3.image,
        x = _ref3.x,
        y = _ref3.y;

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
      c.drawImage(this.image, this.position.x, this.position.y); // Building Conditions

      _canvas__WEBPACK_IMPORTED_MODULE_0__["world"].buildings.forEach(function (building) {
        var player = _canvas__WEBPACK_IMPORTED_MODULE_0__["world"].player;

        if (player.position.x + player.spriteWidth >= building.position.x && player.position.x <= building.position.x + building.image.width && player.position.y + player.spriteHeight <= building.position.y && player.position.y + player.spriteHeight + player.velocity.y >= building.position.y) {
          player.velocity.y = 0;
          player.position.y = building.position.y - player.spriteHeight;
        }

        if (player.position.x + player.spriteWidth >= building.position.x && player.position.x <= building.position.x + building.image.width && player.position.y >= building.position.y + building.image.height - player.spriteHeight && player.position.y + player.velocity.y <= building.position.y + building.image.height - player.spriteHeight) {
          player.velocity.y = 0;
          player.position.y = building.position.y + building.image.height - player.spriteHeight;
        }

        if (player.position.x + player.spriteWidth <= building.position.x && player.position.x + player.spriteWidth + player.velocity.x >= building.position.x && player.position.y + player.spriteHeight >= building.position.y && player.position.y < building.position.y + building.image.height - player.spriteHeight) {
          player.velocity.x = 0;
          player.position.x = building.position.x - player.spriteWidth;
        }

        if (player.position.x >= building.position.x + building.image.width && player.position.x + player.velocity.x <= building.position.x + building.image.width && player.position.y + player.spriteHeight >= building.position.y && player.position.y < building.position.y + building.image.height - player.spriteHeight) {
          player.velocity.x = 0;
          player.position.x = building.position.x + building.image.width;
        }
      });
    }
  }]);

  return Building;
}();
var Door = /*#__PURE__*/function () {
  function Door(_ref4) {
    var image = _ref4.image,
        x = _ref4.x,
        y = _ref4.y,
        goIn = _ref4.goIn,
        goesTo = _ref4.goesTo;

    _classCallCheck(this, Door);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.goIn = goIn;
    this.goesTo = goesTo;
  }

  _createClass(Door, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return Door;
}();
var Water = /*#__PURE__*/function () {
  function Water(_ref5) {
    var image = _ref5.image,
        x = _ref5.x,
        y = _ref5.y;

    _classCallCheck(this, Water);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.cols = 2;
    this.rows = 1;
    this.spriteWidth = this.image.width / this.cols;
    this.spriteHeight = this.image.height / this.rows;
    this.totalFrames = 2;
    this.currentFrame = 0;
    this.srcX = 0;
    this.srcY = 0;
    this.framesDrawn = 0;
  }

  _createClass(Water, [{
    key: "draw",
    value: function draw() {
      this.currentFrame = this.currentFrame % this.totalFrames;
      this.srcX = this.currentFrame * this.spriteWidth;
      c.drawImage(this.image, this.srcX, this.srcY, this.spriteWidth, this.spriteHeight, this.position.x, this.position.y, this.spriteWidth, this.spriteHeight);
    }
  }, {
    key: "update",
    value: function update() {
      this.framesDrawn++;

      if (this.framesDrawn >= 20) {
        this.currentFrame++;
        this.framesDrawn = 0;
      }

      this.draw(); // Water Conditions

      _canvas__WEBPACK_IMPORTED_MODULE_0__["world"].water.forEach(function (water) {
        var player = _canvas__WEBPACK_IMPORTED_MODULE_0__["world"].player;

        if (player.position.x + 5 >= water.position.x && player.position.x + player.spriteWidth - 5 <= water.position.x + water.spriteWidth && player.position.y + player.spriteHeight / 2 >= water.position.y && player.position.y + player.spriteHeight <= water.position.y + water.spriteHeight) {
          inWater = true;
          player.spriteHeight = player.inWaterHeight;

          if (_canvas__WEBPACK_IMPORTED_MODULE_0__["userKeys"].w_Key.pressed === true) {
            player.velocity.y = -0.5;
          }

          if (_canvas__WEBPACK_IMPORTED_MODULE_0__["userKeys"].s_Key.pressed === true) {
            player.velocity.y = 0.5;
          }

          if (_canvas__WEBPACK_IMPORTED_MODULE_0__["userKeys"].a_Key.pressed === true) {
            player.velocity.x = -0.5;
          }

          if (_canvas__WEBPACK_IMPORTED_MODULE_0__["userKeys"].d_Key.pressed === true) {
            player.velocity.x = 0.5;
          }
        } else {
          inWater = false;
        }
      });
    }
  }]);

  return Water;
}();

/***/ }),

/***/ "./src/js/world/world1/one.js":
/*!************************************!*\
  !*** ./src/js/world/world1/one.js ***!
  \************************************/
/*! exports provided: name, background, player, buildings, doors, water */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "background", function() { return background; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "player", function() { return player; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildings", function() { return buildings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doors", function() { return doors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "water", function() { return water; });
/* harmony import */ var _game_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../game-classes */ "./src/js/game-classes.js");
/* harmony import */ var _assign_images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../assign-images */ "./src/js/assign-images.js");
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../canvas */ "./src/js/canvas.js");
/* harmony import */ var _one_building1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./one_building1 */ "./src/js/world/world1/one_building1.js");
/* harmony import */ var _one_building2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./one_building2 */ "./src/js/world/world1/one_building2.js");





_canvas__WEBPACK_IMPORTED_MODULE_2__["world"];
var name = 'World 1: Main Area';
var background = new _game_classes__WEBPACK_IMPORTED_MODULE_0__["Background"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["r1_image"],
  x: 0,
  y: 0
});
var player = new _game_classes__WEBPACK_IMPORTED_MODULE_0__["Player"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["mainChar_front_image"],
  x: 0,
  y: 200
});
var buildings = [new _game_classes__WEBPACK_IMPORTED_MODULE_0__["Building"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["building1_image"],
  x: 100,
  y: 100
}), new _game_classes__WEBPACK_IMPORTED_MODULE_0__["Building"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["building1_image"],
  x: 100,
  y: 200
}), new _game_classes__WEBPACK_IMPORTED_MODULE_0__["Building"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["building1_image"],
  x: 100,
  y: 300
})];
var doors = [new _game_classes__WEBPACK_IMPORTED_MODULE_0__["Door"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["door1_image"],
  x: 112.5,
  y: 150,
  goIn: true,
  goesTo: _one_building1__WEBPACK_IMPORTED_MODULE_3__
}), new _game_classes__WEBPACK_IMPORTED_MODULE_0__["Door"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["door1_image"],
  x: 112.5,
  y: 250,
  goIn: true,
  goesTo: _one_building2__WEBPACK_IMPORTED_MODULE_4__
}), new _game_classes__WEBPACK_IMPORTED_MODULE_0__["Door"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["door1_image"],
  x: 112.5,
  y: 350,
  goIn: true,
  goesTo: _one_building1__WEBPACK_IMPORTED_MODULE_3__
})];
var water = [new _game_classes__WEBPACK_IMPORTED_MODULE_0__["Water"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["water_image"],
  x: 0,
  y: 0
}), new _game_classes__WEBPACK_IMPORTED_MODULE_0__["Water"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["water_image"],
  x: 16,
  y: 0
}), new _game_classes__WEBPACK_IMPORTED_MODULE_0__["Water"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["water_image"],
  x: 32,
  y: 0
}), new _game_classes__WEBPACK_IMPORTED_MODULE_0__["Water"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["water_image"],
  x: 48,
  y: 0
}), new _game_classes__WEBPACK_IMPORTED_MODULE_0__["Water"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["water_image"],
  x: 64,
  y: 0
}), new _game_classes__WEBPACK_IMPORTED_MODULE_0__["Water"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["water_image"],
  x: 80,
  y: 0
}), new _game_classes__WEBPACK_IMPORTED_MODULE_0__["Water"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["water_image"],
  x: 96,
  y: 0
}), new _game_classes__WEBPACK_IMPORTED_MODULE_0__["Water"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["water_image"],
  x: 112,
  y: 0
}), new _game_classes__WEBPACK_IMPORTED_MODULE_0__["Water"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["water_image"],
  x: 128,
  y: 0
}), new _game_classes__WEBPACK_IMPORTED_MODULE_0__["Water"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["water_image"],
  x: 144,
  y: 0
}), new _game_classes__WEBPACK_IMPORTED_MODULE_0__["Water"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["water_image"],
  x: 160,
  y: 0
}), new _game_classes__WEBPACK_IMPORTED_MODULE_0__["Water"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["water_image"],
  x: 176,
  y: 0
}), new _game_classes__WEBPACK_IMPORTED_MODULE_0__["Water"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["water_image"],
  x: 192,
  y: 0
}), new _game_classes__WEBPACK_IMPORTED_MODULE_0__["Water"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["water_image"],
  x: 208,
  y: 0
}), new _game_classes__WEBPACK_IMPORTED_MODULE_0__["Water"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["water_image"],
  x: 218,
  y: 0
}), // new Water({ image: water_image, x: 240, y: 0}),
new _game_classes__WEBPACK_IMPORTED_MODULE_0__["Water"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["water_image"],
  x: 0,
  y: 16
}), new _game_classes__WEBPACK_IMPORTED_MODULE_0__["Water"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["water_image"],
  x: 16,
  y: 16
}), new _game_classes__WEBPACK_IMPORTED_MODULE_0__["Water"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["water_image"],
  x: 32,
  y: 16
}), new _game_classes__WEBPACK_IMPORTED_MODULE_0__["Water"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["water_image"],
  x: 48,
  y: 16
}), new _game_classes__WEBPACK_IMPORTED_MODULE_0__["Water"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["water_image"],
  x: 64,
  y: 16
}), new _game_classes__WEBPACK_IMPORTED_MODULE_0__["Water"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["water_image"],
  x: 80,
  y: 16
}), new _game_classes__WEBPACK_IMPORTED_MODULE_0__["Water"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["water_image"],
  x: 96,
  y: 16
}), new _game_classes__WEBPACK_IMPORTED_MODULE_0__["Water"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["water_image"],
  x: 112,
  y: 16
}), new _game_classes__WEBPACK_IMPORTED_MODULE_0__["Water"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["water_image"],
  x: 128,
  y: 16
}), new _game_classes__WEBPACK_IMPORTED_MODULE_0__["Water"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["water_image"],
  x: 144,
  y: 16
}), new _game_classes__WEBPACK_IMPORTED_MODULE_0__["Water"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["water_image"],
  x: 160,
  y: 16
}), new _game_classes__WEBPACK_IMPORTED_MODULE_0__["Water"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["water_image"],
  x: 176,
  y: 16
}), new _game_classes__WEBPACK_IMPORTED_MODULE_0__["Water"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["water_image"],
  x: 192,
  y: 16
}), new _game_classes__WEBPACK_IMPORTED_MODULE_0__["Water"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["water_image"],
  x: 208,
  y: 16
}), new _game_classes__WEBPACK_IMPORTED_MODULE_0__["Water"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["water_image"],
  x: 218,
  y: 16
}), // new Water({ image: water_image, x: 240, y: 16}),
new _game_classes__WEBPACK_IMPORTED_MODULE_0__["Water"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["water_image"],
  x: 0,
  y: 32
}), new _game_classes__WEBPACK_IMPORTED_MODULE_0__["Water"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["water_image"],
  x: 16,
  y: 32
}), new _game_classes__WEBPACK_IMPORTED_MODULE_0__["Water"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["water_image"],
  x: 32,
  y: 32
}), new _game_classes__WEBPACK_IMPORTED_MODULE_0__["Water"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["water_image"],
  x: 48,
  y: 32
}), new _game_classes__WEBPACK_IMPORTED_MODULE_0__["Water"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["water_image"],
  x: 64,
  y: 32
}), new _game_classes__WEBPACK_IMPORTED_MODULE_0__["Water"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["water_image"],
  x: 80,
  y: 32
}), new _game_classes__WEBPACK_IMPORTED_MODULE_0__["Water"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["water_image"],
  x: 96,
  y: 32
}), new _game_classes__WEBPACK_IMPORTED_MODULE_0__["Water"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["water_image"],
  x: 112,
  y: 32
}), new _game_classes__WEBPACK_IMPORTED_MODULE_0__["Water"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["water_image"],
  x: 128,
  y: 32
}), new _game_classes__WEBPACK_IMPORTED_MODULE_0__["Water"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["water_image"],
  x: 144,
  y: 32
}), new _game_classes__WEBPACK_IMPORTED_MODULE_0__["Water"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["water_image"],
  x: 160,
  y: 32
}), new _game_classes__WEBPACK_IMPORTED_MODULE_0__["Water"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["water_image"],
  x: 176,
  y: 32
}), new _game_classes__WEBPACK_IMPORTED_MODULE_0__["Water"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["water_image"],
  x: 192,
  y: 32
}), new _game_classes__WEBPACK_IMPORTED_MODULE_0__["Water"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["water_image"],
  x: 208,
  y: 32
}), new _game_classes__WEBPACK_IMPORTED_MODULE_0__["Water"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["water_image"],
  x: 218,
  y: 32
}), // new Water({ image: water_image, x: 240, y: 32}),
new _game_classes__WEBPACK_IMPORTED_MODULE_0__["Water"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["water_image"],
  x: 0,
  y: 48
}), new _game_classes__WEBPACK_IMPORTED_MODULE_0__["Water"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["water_image"],
  x: 16,
  y: 48
}), new _game_classes__WEBPACK_IMPORTED_MODULE_0__["Water"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["water_image"],
  x: 32,
  y: 48
}), new _game_classes__WEBPACK_IMPORTED_MODULE_0__["Water"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["water_image"],
  x: 48,
  y: 48
}), new _game_classes__WEBPACK_IMPORTED_MODULE_0__["Water"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["water_image"],
  x: 64,
  y: 48
}), new _game_classes__WEBPACK_IMPORTED_MODULE_0__["Water"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["water_image"],
  x: 80,
  y: 48
}), new _game_classes__WEBPACK_IMPORTED_MODULE_0__["Water"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["water_image"],
  x: 96,
  y: 48
}), new _game_classes__WEBPACK_IMPORTED_MODULE_0__["Water"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["water_image"],
  x: 112,
  y: 48
}), new _game_classes__WEBPACK_IMPORTED_MODULE_0__["Water"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["water_image"],
  x: 128,
  y: 48
}), new _game_classes__WEBPACK_IMPORTED_MODULE_0__["Water"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["water_image"],
  x: 144,
  y: 48
}), new _game_classes__WEBPACK_IMPORTED_MODULE_0__["Water"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["water_image"],
  x: 160,
  y: 48
}), new _game_classes__WEBPACK_IMPORTED_MODULE_0__["Water"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["water_image"],
  x: 176,
  y: 48
}), new _game_classes__WEBPACK_IMPORTED_MODULE_0__["Water"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["water_image"],
  x: 192,
  y: 48
}), new _game_classes__WEBPACK_IMPORTED_MODULE_0__["Water"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["water_image"],
  x: 208,
  y: 48
}), new _game_classes__WEBPACK_IMPORTED_MODULE_0__["Water"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["water_image"],
  x: 218,
  y: 48
}) // new Water({ image: water_image, x: 240, y: 48}),
];

/***/ }),

/***/ "./src/js/world/world1/one_building1.js":
/*!**********************************************!*\
  !*** ./src/js/world/world1/one_building1.js ***!
  \**********************************************/
/*! exports provided: name, background, player, buildings, doors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "background", function() { return background; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "player", function() { return player; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildings", function() { return buildings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doors", function() { return doors; });
/* harmony import */ var _game_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../game-classes */ "./src/js/game-classes.js");
/* harmony import */ var _assign_images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../assign-images */ "./src/js/assign-images.js");
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../canvas */ "./src/js/canvas.js");
/* harmony import */ var _one__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./one */ "./src/js/world/world1/one.js");




_canvas__WEBPACK_IMPORTED_MODULE_2__["world"];
var name = 'Main Office';
var background = new _game_classes__WEBPACK_IMPORTED_MODULE_0__["Background"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["floor2_image"],
  x: 0,
  y: 0
});
var player = new _game_classes__WEBPACK_IMPORTED_MODULE_0__["Player"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["mainChar_front_image"],
  x: 110,
  y: 10
});
var buildings = [new _game_classes__WEBPACK_IMPORTED_MODULE_0__["Building"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["wall1_image"],
  x: 0,
  y: 0
})];
var doors = [new _game_classes__WEBPACK_IMPORTED_MODULE_0__["Door"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["door1_image"],
  x: 120,
  y: 0,
  goIn: true,
  goesTo: _one__WEBPACK_IMPORTED_MODULE_3__
})];

/***/ }),

/***/ "./src/js/world/world1/one_building2.js":
/*!**********************************************!*\
  !*** ./src/js/world/world1/one_building2.js ***!
  \**********************************************/
/*! exports provided: name, background, player, buildings, doors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "background", function() { return background; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "player", function() { return player; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildings", function() { return buildings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doors", function() { return doors; });
/* harmony import */ var _game_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../game-classes */ "./src/js/game-classes.js");
/* harmony import */ var _assign_images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../assign-images */ "./src/js/assign-images.js");
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../canvas */ "./src/js/canvas.js");
/* harmony import */ var _one__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./one */ "./src/js/world/world1/one.js");




_canvas__WEBPACK_IMPORTED_MODULE_2__["world"];
var name = 'Apartment';
var background = new _game_classes__WEBPACK_IMPORTED_MODULE_0__["Background"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["floor3_image"],
  x: 0,
  y: 0
});
var player = new _game_classes__WEBPACK_IMPORTED_MODULE_0__["Player"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["mainChar_front_image"],
  x: 110,
  y: 10
});
var buildings = [new _game_classes__WEBPACK_IMPORTED_MODULE_0__["Building"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["wall2_image"],
  x: 0,
  y: 0
}), new _game_classes__WEBPACK_IMPORTED_MODULE_0__["Building"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["bed1_image"],
  x: 0,
  y: 80
})];
var doors = [new _game_classes__WEBPACK_IMPORTED_MODULE_0__["Door"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["door1_image"],
  x: 100,
  y: 0,
  goIn: true,
  goesTo: _one__WEBPACK_IMPORTED_MODULE_3__
})];

/***/ }),

/***/ "./src/sprites/characters/mainCharacter_back.png":
/*!*******************************************************!*\
  !*** ./src/sprites/characters/mainCharacter_back.png ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "b333dd99e25355664cafa3d9819cc87d.png");

/***/ }),

/***/ "./src/sprites/characters/mainCharacter_front.png":
/*!********************************************************!*\
  !*** ./src/sprites/characters/mainCharacter_front.png ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ae50ddafa19ad925a006d20d1bef1a78.png");

/***/ }),

/***/ "./src/sprites/characters/mainCharacter_left.png":
/*!*******************************************************!*\
  !*** ./src/sprites/characters/mainCharacter_left.png ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "32abd53968e999e9e85a2b2d94e53152.png");

/***/ }),

/***/ "./src/sprites/characters/mainCharacter_right.png":
/*!********************************************************!*\
  !*** ./src/sprites/characters/mainCharacter_right.png ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "7e0f9846fe9af9e27b2edfed972c1326.png");

/***/ }),

/***/ "./src/sprites/doors/door_1.png":
/*!**************************************!*\
  !*** ./src/sprites/doors/door_1.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "87150adc16950c2bf6926f393e194cbd.png");

/***/ }),

/***/ "./src/sprites/objects/bed1.png":
/*!**************************************!*\
  !*** ./src/sprites/objects/bed1.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ded6d71738d65ce62f28fe1357b741ae.png");

/***/ }),

/***/ "./src/sprites/objects/brick_black.png":
/*!*********************************************!*\
  !*** ./src/sprites/objects/brick_black.png ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "5fbaf3c266fe42b212cef1e7a950c8c0.png");

/***/ }),

/***/ "./src/sprites/objects/treasure_collector_building1.png":
/*!**************************************************************!*\
  !*** ./src/sprites/objects/treasure_collector_building1.png ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "f08308685b98f8c6fdcc429462b8cf11.png");

/***/ }),

/***/ "./src/sprites/objects/wall1.png":
/*!***************************************!*\
  !*** ./src/sprites/objects/wall1.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "dbe38f54d0960bcd082075a562f53a65.png");

/***/ }),

/***/ "./src/sprites/objects/wall2.png":
/*!***************************************!*\
  !*** ./src/sprites/objects/wall2.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "10d30fc61a8cdd1159deb25dd258fddb.png");

/***/ }),

/***/ "./src/sprites/water/water1.png":
/*!**************************************!*\
  !*** ./src/sprites/water/water1.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "2127c547f224b6a4343257f81e09fd8d.png");

/***/ }),

/***/ "./src/sprites/worlds/test/floor1.png":
/*!********************************************!*\
  !*** ./src/sprites/worlds/test/floor1.png ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "3df97575e9d589a74c4a56d65a895cf9.png");

/***/ }),

/***/ "./src/sprites/worlds/test/floor2.png":
/*!********************************************!*\
  !*** ./src/sprites/worlds/test/floor2.png ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "d4fb39ad39fb4ac8a6c98af7558c1685.png");

/***/ }),

/***/ "./src/sprites/worlds/test/floor3.png":
/*!********************************************!*\
  !*** ./src/sprites/worlds/test/floor3.png ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "362f7653ab08cbcaffc61d4e00a9b16c.png");

/***/ }),

/***/ "./src/sprites/worlds/test/r1.png":
/*!****************************************!*\
  !*** ./src/sprites/worlds/test/r1.png ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "62dae9e11f82ace9f7173a7c2cbf2efa.png");

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map