"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = converter;
function converter(value, unit) {
    var oper = 0;
    var result = 0;

    if (unit == "kg") {
        oper = 2.205;
        result = value * oper;
    } else if (unit == "lbs") {
        oper = 0.454;
        result = value * oper;
    } else {
        console.log("Ingrese kg o lbs");
    }

    return result;
}