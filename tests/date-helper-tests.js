describe("Date helper ", function() {

    it("will return corect formated date", function() {
        var date = new Date(2016,1,2);
        expect(dateHelper(date).getFormated("DD/MM/YYYY")).toBe("02/02/2016");
    })
})
