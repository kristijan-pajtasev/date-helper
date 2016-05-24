describe("Date helper ", function() {
    var assert = require('chai').assert;
    var expect = require('chai').expect;
    var dateHelper = require("../dev/dateHelper");
    var dateHelperConfig = require("../dev/dateHelper").config;

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

    it("will create from date string and format without leading zeros", function() {
        var date = dateHelper("12/2/2015", "D/M/YYYY");
        assert.equal(date.getFormated("YYYY/MM/DD"), "2015/02/12");
    });

    it("will throw error if date is invalid has invalid value", function() {
        expect(dateHelper.bind(dateHelper, "31/02/2015", "DD/MM/YYYY")).to.throw(Error);
    });

    it("will throw error if date string has invalid format", function() {
        expect(dateHelper.bind(dateHelper, "12/2/2015", "DD/MM/YYYY")).to.throw(Error);
    });

    it("will throw error if date string has invalid format 2", function() {
        expect(dateHelper.bind(dateHelper, "12/02", "DD/MM/YYYY")).to.throw(Error);
    });

    it("will throw error if date string has invalid format 2", function() {
        expect(dateHelper.bind(dateHelper, undefined, "DD/MM/YYYY")).to.throw(Error);
    });

    it("will not throw format if date values are correct", function() {
        expect(dateHelper.bind(dateHelper, "02/02/2016", "DD/MM/YYYY")).to.not.throw(Error);
    });

    it("will give true that first date is before second", function() {
        var a = new Date(2016, 4, 1);
        var b = new Date(2016, 4, 2);
        assert.equal(dateHelper(a).isBefore(b), true);
    });

    it("will give true that first date is after second", function() {
        var a = new Date(2016, 4, 3);
        var b = new Date(2016, 4, 2);
        assert.equal(dateHelper(a).isAfter(b), true);
    });

    it("will give true that first date is equal as second", function() {
        var a = new Date(2016, 4, 2);
        var b = new Date(2016, 4, 2);
        assert.equal(dateHelper(a).isSameAs(b), true);
    });

    it("will throw error if isBefore gets invalid parameter", function() {
        var a = new Date(2016, 4, 1);
        expect(dateHelper(a).isBefore.bind("some string")).to.throw(Error);
    });

    it("will throw error if isAfter gets invalid parameter", function() {
        var a = new Date(2016, 4, 3);
        expect(dateHelper(a).isAfter.bind("some string")).to.throw(Error);
    });

    it("will throw error if isAfter gets invalid parameter", function() {
        var a = new Date(2016, 4, 3);
        expect(dateHelper(a).isSameAs.bind("some string")).to.throw(Error);
    });

    it("will return correct month name", function() {
        var date = new Date(2016, 4, 3);
        assert.equal(dateHelper(date).getFormated("DD/MMM/YYYY"), "03/June/2016");
        date = new Date(2016, 3, 3);
        assert.equal(dateHelper(date).getFormated("DD/MMM/YYYY"), "03/April/2016");
    });

    it("will use correct month name transaltion", function() {
        dateHelperConfig.setMonthNames(["Sijecan", "Veljaca", "Ozujak", "Travanj",
        "Svibanj", "Lipanj", "Srpanj", "Kolovoz", "Rujan", "Listopad", "Studeni", "Prosinac"])
        var date = new Date(2016, 4, 3);
        assert.equal(dateHelper(date).getFormated("DD/MMM/YYYY"), "03/Svibanj/2016");
        date = new Date(2016, 3, 3);
        assert.equal(dateHelper(date).getFormated("DD/MMM/YYYY"), "03/Travanj/2016");
    });

    it("will throw error if incorrect parameter is passed for month names", function() {
        var incorrectParameter = ["Veljaca", "Ozujak", "Travanj",
            "Svibanj", "Lipanj", "Srpanj", "Kolovoz", "Rujan", "Listopad", "Studeni", "Prosinac"];
        expect(dateHelperConfig.setMonthNames.bind(incorrectParameter)).to.throw(Error);
    });

    it("will get correct date value", function() {
        var date = new Date(2015, 5, 12);
        var dateHelperDate = dateHelper(date);
        dateHelperDate.setDate(18);
        assert.equal(dateHelperDate.getDate(), 18);
    });

    it("will get correct month value", function() {
        var date = new Date(2015, 5, 12);
        var dateHelperDate = dateHelper(date);
        dateHelperDate.setMonth(6);
        assert.equal(dateHelperDate.getMonth(), 6);
    });

    it("will get correct year value", function() {
        var date = new Date(2015, 5, 12);
        var dateHelperDate = dateHelper(date);
        dateHelperDate.setYear(2016);
        assert.equal(dateHelperDate.getYear(), 2016);
    });

    it("will add days correctly", function() {
        var date = new Date(2015, 5, 12);
        var dateHelperDate = dateHelper(date);
        dateHelperDate.add("day", 1);
        assert.equal(dateHelperDate.getDate(), 13);

        dateHelperDate.add("day", 5);
        assert.equal(dateHelperDate.getDate(), 18);
    });

    it("will add months correctly", function() {
        var date = new Date(2015, 5, 12);
        var dateHelperDate = dateHelper(date);
        dateHelperDate.add("month", 1);
        assert.equal(dateHelperDate.getMonth(), 7);

        dateHelperDate.add("month", 6);
        assert.equal(dateHelperDate.getMonth(), 1);
    });

    it("will add years correctly", function() {
        var date = new Date(2015, 5, 12);
        var dateHelperDate = dateHelper(date);
        dateHelperDate.add("year", 1);
        assert.equal(dateHelperDate.getYear(), 2016);

        dateHelperDate.add("year", 10);
        assert.equal(dateHelperDate.getYear(), 2026);
    });

    it("will sub days correctly", function() {
        var date = new Date(2015, 5, 12);
        var dateHelperDate = dateHelper(date);
        dateHelperDate.sub("day", 1);
        assert.equal(dateHelperDate.getDate(), 11);

        dateHelperDate.sub("day", 11);
        assert.equal(dateHelperDate.getDate(), 31);
        assert.equal(dateHelperDate.getMonth(), 5);
    });

    it("will sub months correctly", function() {
        var date = new Date(2015, 5, 12);
        var dateHelperDate = dateHelper(date);
        dateHelperDate.sub("month", 1);
        assert.equal(dateHelperDate.getMonth(), 5);

        dateHelperDate.sub("month", 5);
        assert.equal(dateHelperDate.getMonth(), 12);
        assert.equal(dateHelperDate.getYear(), 2014);
    });

    it("will sub years correctly", function() {
        var date = new Date(2015, 5, 12);
        var dateHelperDate = dateHelper(date);
        dateHelperDate.sub("year", 1);
        assert.equal(dateHelperDate.getYear(), 2014);

        dateHelperDate.sub("year", 10);
        assert.equal(dateHelperDate.getYear(), 2004);
    });
});
