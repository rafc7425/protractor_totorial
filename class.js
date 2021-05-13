"use strict";
exports.__esModule = true;
exports.classDemo = void 0;
var classDemo = /** @class */ (function () {
    function classDemo(ssn) {
        this.ssn = ssn;
    }
    classDemo.prototype.getUsername = function () {
        return this.username;
    };
    classDemo.prototype.setUsername = function (username) {
        this.username = username;
    };
    classDemo.prototype.getSsn = function () {
        return this.ssn;
    };
    return classDemo;
}());
exports.classDemo = classDemo;
//creation of object cd it includes all the classdemo on it
//let cd = new classDemo(123); //set 123 as parameter for the constructor
//set the method
//cd.setUsername("rick"); //set dinamicaly
//get the function
//console.log(cd.getSsn());//print the ssn
//console.log(cd.getUsername());//print username
