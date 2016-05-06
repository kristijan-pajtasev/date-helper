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
    })
});
