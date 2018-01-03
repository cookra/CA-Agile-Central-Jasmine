describe('CustomApp', function () {
    var app;
    beforeEach(function () {
        app = Rally.test.Harness.launchApp('CustomApp');
    });
    it('should render the app', function () {
        expect(app.getEl()).toBeDefined();
    });
    describe('Calculator', function () {
        it("Run a calculation", function () {
            var a = 4;
            var b = 2;
            var c = "*";
            var method = app.calculator(a, b, c);
            expect(method).toEqual(8);
        });
    });
});