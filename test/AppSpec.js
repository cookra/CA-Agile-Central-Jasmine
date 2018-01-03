describe('CustomApp', function () {
    var app;
    beforeEach(function () {
        app = Rally.test.Harness.launchApp('CustomApp');
        spyOn(app, 'adder');
    });

    it('should render the app', function () {
        expect(app.getEl()).toBeDefined();
    });
    it('My Function Test', function () {
        expect(app.myTargetFunction()).toEqual(5);
    });
    it('Addition', function () {
        app.adder(3, 5);
        expect(app.adder).toEqual(8);
        expect(app.adder).toHaveBeenCalled();
        expect(app.adder).toHaveBeenCalledWith(3, 5);
    });
});