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

function isValidFormat(dateString, dateFormat) {
    var r = getRegexForDateFromat(dateFormat);
    return r.test(dateString);
}

function parseToDate(dateString, dateFormat) {
    var isValidDateFormat = isValidFormat(dateString, dateFormat);


    if(isValidDateFormat) {
        var dateValues = brakeStringDateForValues(dateString, dateFormat);

        return new Date(dateValues.year, dateValues.month, dateValues.date);
    }
}


function brakeStringDateForValues(dateString, dateFormat) {

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

    return { year: year, month: month, date: date }
}

module.exports = function(dateString, dateFormat) {
    return {
        isValid: isValidFormat,
        parseToDate: parseToDate
    };
};