Ext.define('CustomApp', {
    value: 0,
    extend: 'Rally.app.App',
    componentCls: 'app',
    launch: function () {},
    adder: function (a, b) {
        console.log(a + b);
        return a + b;
    },
    myTargetFunction: function () {
        var value = 5;
        return value;
    }
});