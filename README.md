# date-helper
JavaScript date helper

Still in development. Currently supports only getting formated date.

## Instalation

### package.json
"date-helper-util": "x.y.z"

## Usage
```
var dateHelper = require("date-helper-util");
var date = new Date(2015, 1, 3);
date = dateHelper(date);
date.getFormated("DD/MM/YYYY"); // outputs 03/02/2015
```

## Formates
- DD - date, if less then 10 prepends with 0
- D - date, if less then 10 NOT prepended with 0
- MM - month, if less then 10 prepends with 0
- M - month, if less then 10 NOT prepended with 0
- YYYY - full year

## TODO
- Tests
- Hours, minutes and seconds
- Creating from string with placeholder
- Getting and setting date values

