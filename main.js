var helper = require("./dev/dateHelper");
var d1 = helper(new Date());
var d2 = helper(new Date(new Date().setYear(2012)));
var d3 = helper(new Date(2015, 1, 1));

console.log(d1.getDate());
console.log(d2.getDate());
console.log(d1.getDate());


console.log(d1.getFormated("DD/MM/YYYY"));
console.log(d1.getFormated("DD-MM-YYYY"));

console.log(d3.getFormated("DD/MM/YYYY"));
console.log(d3.getFormated("D/M/YYYY"));
