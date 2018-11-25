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

function isEmptyException() {
    this.name = "isEmptyException";
    this.message = "The list is empty";
}
isEmptyException.prototype = new baseException();
isEmptyException.prototype.constructor = isEmptyException;

function isFullException() {
    this.name = "isFullException";
    this.message = "The list is full";
}
isFullException.prototype = new baseException();
isFullException.prototype.constructor = isFullException;

function indexLimitException() {
    this.name = "indexLimitException";
    this.message = "the index is outside the limits";
}
indexLimitException.prototype = new baseException();
indexLimitException.prototype.constructor = indexLimitException;