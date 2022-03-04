(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./src/js/levels/level2.js":
/*!*********************************!*\
  !*** ./src/js/levels/level2.js ***!
  \*********************************/
/*! exports provided: background, player, buildings, objects, moveToNextLevel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "background", function() { return background; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "player", function() { return player; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildings", function() { return buildings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objects", function() { return objects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveToNextLevel", function() { return moveToNextLevel; });
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
}), new _platformer_classes__WEBPACK_IMPORTED_MODULE_0__["Building"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["home1_image"],
  x: 300,
  y: 400
})];
var objects = [new _platformer_classes__WEBPACK_IMPORTED_MODULE_0__["Objects"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["wall1_image"],
  x: 0,
  y: 0,
  climbable: false
})];
var moveToNextLevel = new _platformer_classes__WEBPACK_IMPORTED_MODULE_0__["MoveToNextLevel"]({
  image: _assign_images__WEBPACK_IMPORTED_MODULE_1__["finish1_image"],
  x: 20,
  y: 526
});

/***/ })

}]);
//# sourceMappingURL=0.canvas.bundle.js.map