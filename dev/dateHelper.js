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