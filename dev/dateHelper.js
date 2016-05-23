var MONTHS = ["January", "February", "March", "April",
    "June", "July", "August", "September", "October", "November", "December"];

module.exports = function(date, dateFormat) {
    var parsedDate;

    if(arguments.length == 2 && typeof date == "string" && typeof dateFormat == "string") {
        var Parser = require("./dateParser");
        parsedDate = new Parser(date, dateFormat);
        date = parsedDate.parseToDate(date, dateFormat);
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
            .replace(/MMM/g, getNumberForDisplay(MONTHS[date.getMonth()]))
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

    function isDate(date) {
        return date != undefined &&
            typeof date === "object" &&
            typeof date.getMonth === "function" &&
            typeof date.getDate === "function" &&
            typeof date.getFullYear === "function";
    }

    this.test = function() {
console.log("func")
    }


    return {
        getDateObject: function() {
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
        },
        getDate: function(d) {
            return date.getDate();
        },
        getMonth: function() {
            return date.getMonth() + 1;
        },
        getYear: function() {
            return date.getFullYear();
        },
        isBefore: function(otherDate) {
            if(isDate(otherDate)) {
                return date.getTime() < otherDate.getTime();
            }
            throw new Error("Invalid parameter");

        },
        isAfter: function(otherDate) {
            if(isDate(otherDate)) {
                return date.getTime() > otherDate.getTime();
            }
            throw new Error("Invalid parameter");

        },
        isSameAs: function(otherDate){
            if(isDate(otherDate)) {
                return date.getTime() == otherDate.getTime();
            }
            throw new Error("Invalid parameter");
        }
    }
};

module.exports.config = {
    setMonthNames: function (names) {
        if(Array.isArray(names) && names.length == 12) {
            MONTHS = names;
        } else {
            throw new Error("Invalid parameter")
        }
    }
};
