var dateHelper =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	module.exports = function(date) {

	    function getFormated(format) {
	        return format
	            .replace(/DD/g, getNumberForDisplay(date.getDate()))
	            .replace(/MM/g, getNumberForDisplay(date.getMonth() + 1))
	            .replace(/YYYY/g, getNumberForDisplay(date.getFullYear()))
	            .replace(/D/g, date.getDate() + "")
	            .replace(/M/g, (date.getMonth() + 1) + "");
	    }

	    function getNumberForDisplay(value) {
	        if(value < 10) {
	            return "0" + value;
	        } else {
	            return "" + value;
	        }
	    }


	    return {
	        getDate: function() {
	            return date;
	        },
	        getFormated: function(format) {
	            return getFormated(format);
	        }
	    }
	}

	//console.log((new Date()).toString())

/***/ }
/******/ ]);