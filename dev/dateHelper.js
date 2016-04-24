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