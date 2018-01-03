describe('CustomApp', function () {
    var app;
    beforeEach(function () {
        app = Rally.test.Harness.launchApp('CustomApp');
    });
    it('should render the app', function () {
        expect(app.getEl()).toBeDefined();
    });
    describe('Calculator', function () {
        var a, b;
        beforeEach(function () {
            a = 4;
            b = 2;
        });
        it("Run a + calculation", function () {
            var operator = "+";
            var result = 6;
            var method = app.calculator(a, b, operator);
            expect(method).toEqual(result);
        });
        it("Run a - calculation", function () {
            var operator = "-";
            var result = 2;
            var method = app.calculator(a, b, operator);
            expect(method).toEqual(result);
        });
        it("Run a * calculation", function () {
            var operator = "*";
            var result = 8;
            var method = app.calculator(a, b, operator);
            expect(method).toEqual(result);
        });
        it("Run a / calculation", function () {
            var operator = "/";
            var result = 2;
            var method = app.calculator(a, b, operator);
            expect(method).toEqual(result);
        });
    });
});