"use-strict";

function baseException() {
    baseException.prototype = new Error();
    baseException.prototype.constructor = baseException;

    baseException.toString = function () {
        return this.name + ": " + this.message;
    }
}

function invalidAccesConstructor() {
    this.name = "invalidAccesConstructor";
    this.message = "Constructor can’t be called as a function.";
}
invalidAccesConstructor.prototype = new baseException();
invalidAccesConstructor.prototype.constructor = invalidAccesConstructor;
invalidAccesConstructor.prototype.toString = function () {
    return baseException.toString.call(this);
}