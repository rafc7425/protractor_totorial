"use strict";
exports.__esModule = true;
var class_1 = require("./class");
var cd = new class_1.classDemo(12334);
cd.setUsername("ricardo");
console.log(cd.getUsername());
console.log(cd.getSsn());
function validate(value) {
    console.log(value);
}
function num(numero) {
    return numero + 1;
}
validate("hey!");
console.log(num(4));
