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
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(date, dateFormat) {


	    if(arguments.length == 2 && typeof date == "string" && typeof dateFormat == "string") {
	        var parser = __webpack_require__(1);
	        date = parser.parseToDate(date, dateFormat);
	    }

	    if(!(typeof date === "object" &&
	        typeof date.getMonth === "function" &&
	        typeof date.getDate === "function" &&
	        typeof date.getFullYear === "function")) {
	            throw new Error("Invalid parameter");
	    }

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
	        },
	        setDate: function(d) {
	            if(typeof d == "number" && d <= 31 && d > 0) {
	                date.setDate(d);
	            } else {
	                throw new Error("Invalid date value: " + d);
	            }
	        },
	        setMonth: function(m) {
	            if(typeof m == "number" && m <= 12 && m > 0) {
	                date.setMonth(m - 1);
	            } else {
	                throw new Error("Invalid date value: " + m);
	            }
	        },
	        setYear: function(y) {
	            if(typeof y == "number") {
	                date.setYear(y);
	            } else {
	                throw new Error("Invalid date value: " + y);
	            }
	        }
	    }
	}

	//console.log((new Date()).toString())

/***/ },
/* 1 */
/***/ function(module, exports) {

	function getRegexForDateFromat(dateFormat) {
	    var dateValueRegexString =
	        dateFormat.replace(/MM|M|DD|D|YYYY/g, function(match, position, original) {
	            switch (match) {
	                case "M":
	                    return "([1-9]||1[0-1])";
	                    break;
	                case "MM":
	                    return "(0[1-9]||1[0-1])";
	                    break;
	                case "DD":
	                    return "(0[1-9]||[1-2][0-9]||3[0-1])";
	                    break;
	                case "D":
	                    return "([1-9]||[1-2][0-9]||3[0-1])";
	                    break;
	                case "YYYY":
	                    return "([0-9]{4})";
	                    break;
	            }
	        });

	    return new RegExp("^" + dateValueRegexString + "$");
	}

	function isValid(dateString, dateFormat) {
	    var r = getRegexForDateFromat(dateFormat);
	    var isValid =  r.test(dateString);
	    return isValid;
	}

	function parseToDate(dateString, dateFormat) {
	    var isValidDate = isValid(dateString, dateFormat);

	    if(isValidDate) {
	        var r = getRegexForDateFromat(dateFormat);

	        var datePlaceholdersRegexString =
	            dateFormat.replace(/MM|M|DD|D|YYYY/g, function(match, position, original) {
	                return "(" + match + ")";
	            });

	        var formatMatches = dateFormat.match(new RegExp("^" + datePlaceholdersRegexString + "$"));
	        var dateMatches = dateString.match(r);

	        var year;
	        var month;
	        var date;


	        for(var i = 0, length = formatMatches.length; i < length; i++) {
	            var dateMatch = dateMatches[i];
	            var formatMatch = formatMatches[i];

	            switch(formatMatch) {
	                case "M":
	                case "MM":
	                    month = parseInt(dateMatch) - 1;
	                    break;
	                case "D":
	                case "DD":
	                    date = parseInt(dateMatch);
	                    break;
	                case "YYYY":
	                    year = parseInt(dateMatch);
	                    break;
	            }
	        }
	        return new Date(year, month, date);
	    }
	}

	module.exports = {
	    isValid: isValid,
	    parseToDate: parseToDate
	};

/***/ }
/******/ ]);