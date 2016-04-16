var helper = require("./dev/dateHelper");
var d1 = helper(new Date());
var d2 = helper(new Date(new Date().setYear(2012)));

console.log(d1.getDate());
console.log(d2.getDate());
console.log(d1.getDate());


console.log(d1.getFormated("DD/MM/YYYY"));
console.log(d1.getFormated("DD-MM-YYYY"));

