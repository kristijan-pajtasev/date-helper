describe("Date helper ", function() {
    var assert = require('chai').assert;
    var dateHelper = require("../dev/dateHelper");

    it("will return corect formated date", function() {
        var date = new Date(2016,1,2);
        assert.equal(dateHelper(date).getFormated("DD/MM/YYYY"), "02/02/2016");
    });

    it("will set correct month", function() {
        var date = new Date(2016,1,2);
        date = dateHelper(date);
        date.setMonth(3);
        assert.equal(date.getFormated("DD/MM/YYYY"), "02/03/2016");
    });

    it("will set correct date", function() {
        var date = new Date(2016,1,2);
        date = dateHelper(date);
        date.setDate(3);
        assert.equal(date.getFormated("DD/MM/YYYY"), "03/02/2016");
    });

    it("will set correct year", function() {
        var date = new Date(2016,1,2);
        date = dateHelper(date);
        date.setYear(2015);
        assert.equal(date.getFormated("DD/MM/YYYY"), "02/02/2015");
    });

    it("will set correct without leading zeros", function() {
        var date = new Date(2016,1,2);
        date = dateHelper(date);
        date.setYear(2015);
        assert.equal(date.getFormated("D/M/YYYY"), "2/2/2015");
    });

    it("will create from date string and format", function() {
        var date = dateHelper("12/02/2015", "DD/MM/YYYY");
        assert.equal(date.getFormated("YYYY/MM/DD"), "2015/02/12");
    });
});