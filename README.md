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
- MMM - month as a month name (January, February, ...)
- MM - month, if less then 10 prepends with 0
- M - month, if less then 10 NOT prepended with 0
- YYYY - full year

## Setting date values
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

## Getting date values

## Getting year
```
date.getYear();
```

## Getting month
Returns values 1-12 and not like native JavaScript 0-11
```
date.getMonth();
```

## Getting date
```
date.getDate();
```

## Adding values to date
Values can be added by calling .add function with type and amount parameters. Type is string day, month or year.
```
date = dateHelper(new Date());
date.add("day", 1);
date.add("month", 1);
date.add("year", 1);
```


### Is date before other date
isBefore function can be used to check if date is before other.
```
var date = new Date(2016, 4, 3);
dateHelper(date).isBefore(new Date(2016, 4, 4)); // true
```

### Is date after other date
isAfter function can be used to check if date is after other.
```
var date = new Date(2016, 4, 3);
dateHelper(date).isAfter(new Date(2016, 4, 2)); // true
```

### Is date same as other date
isSameAs function can be used to check if date at same time as other.
```
var date = new Date(2016, 4, 3);
dateHelper(date).isSameAs(new Date(2016, 4, 3)); // true
```

### i18n
By using configuration month names can be set

#### Node module
```
var dateHelperConfig = require("../dev/dateHelper").config;
dateHelperConfig.setMonthNames(["Sijecan", "Veljaca", "Ozujak", "Travanj",
    "Svibanj", "Lipanj", "Srpanj", "Kolovoz", "Rujan", "Listopad", "Studeni", "Prosinac"])
var date = new Date(2016, 4, 3);
dateHelper(date).getFormated("DD/MMM/YYYY"); // "03/Svibanj/2016"
```

#### Browser
```
dateHelper.config.setMonthNames(["Sijecan", "Veljaca", "Ozujak", "Travanj",
    "Svibanj", "Lipanj", "Srpanj", "Kolovoz", "Rujan", "Listopad", "Studeni", "Prosinac"])
var date = new Date(2016, 4, 3);
dateHelper(date).getFormated("DD/MMM/YYYY"); // "03/Svibanj/2016"
```

## TODO
- Tests
- Hours, minutes and seconds

