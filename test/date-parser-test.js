describe("Date helper ", function() {
    var assert = require('chai').assert;
    var dateParser = require("../dev/dateParser");

    it("will return correct date", function() {
        var date = dateParser.parseToDate("12/02/2016", "DD/MM/YYYY")
        assert.equal(date.getDate(), 12);
        assert.equal(date.getMonth(), 1);
        assert.equal(date.getFullYear(), 2016);
    });
});
