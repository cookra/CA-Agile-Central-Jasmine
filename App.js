Ext.define('CustomApp', {
    myApp: this,
    value: 0,
    extend: 'Rally.app.App',
    componentCls: 'app',
    launch: function () {
        this.calculator(3, 3, "*");
        this.calculator(27, 3, "/");
        this.calculator(6, 3, "+");
        this.calculator(12, 3, "-");
    },
    calculator: function (a, b, c) {
        var calculatedValue = a + b;
        switch (c) {
            case "*":
                calculatedValue = a * b;
                break;
            case "/":
                calculatedValue = a / b;
                break;
            case "+":
                calculatedValue = a + b;
                break;
            case "-":
                calculatedValue = a - b;
                break;
        }
        return calculatedValue;
    }
});