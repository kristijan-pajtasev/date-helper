# date-helper
JavaScript date helper

Still in development. Currently supports only getting formated date.

## Instalation

### package.json
"date-helper-util": "x.y.z"

## Usage
```
var dateHelper = require("date-helper-util");
```

### With date object
```
var date = new Date(2015, 1, 3);
date = dateHelper(date);
date.getFormated("DD/MM/YYYY"); // outputs 03/02/2015
```

### With date string and date format string
```
date = dateHelper("03/02/2015", "DD/MM/YYYY");
date.getFormated("YYYY/MM/DD"); // outputs 2015/02/03
```

## Formats
- DD - date, if less then 10 prepends with 0
- D - date, if less then 10 NOT prepended with 0
- MM - month, if less then 10 prepends with 0
- M - month, if less then 10 NOT prepended with 0
- YYYY - full year

## Setting date values
Because of the way JavaScript Date object works correct
order is to set first year, then month and then day.
```
var date = dateHelper(new Date());
```

### Setting year
```
date.setYear(2016);
```

### Setting month
```
date.setMonth(1); // accepts 1-12
```

### Setting date
```
date.setDate(1);
```

## TODO
- Tests
- Hours, minutes and seconds

