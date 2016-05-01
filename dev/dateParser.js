"MM/DD/D/YYYY".match(/MM|M|DD|D|YYYY/g)

function parser(dateString, dateFormat) {
    var dateRegexString =
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
    var r = new RegExp("^" + dateRegexString + "$");
    console.log(r.toString())
    var isValid =  r.test(dateString);

    if(isValid) {

    }

    return isValid;
}

module.exports = parser;