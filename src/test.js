"use strict";
exports.__esModule = true;
var common_1 = require("./common");
var MyClass = (function () {
    function MyClass() {
        this.name = "car";
        this.car = new common_1.Car();
    }
    return MyClass;
}());
var my = new MyClass();
console.log(my.car);
