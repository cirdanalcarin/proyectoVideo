"use-strict";

function InvalidNameException(param) {
    this.name = "InvalidNameException";
    this.message = "The name is invalid";
}
InvalidNameException.prototype = new baseException();
InvalidNameException.prototype.constructor = InvalidNameException;
InvalidNameException.prototype.toString = function () {
    return baseException.toString.call(this);
}

function InvalidDescriptionException(param) {
    this.name = "InvalidDescriptionException";
    this.message = "The Description is invalid";
}
InvalidDescriptionException.prototype = new baseException();
InvalidDescriptionException.prototype.constructor = InvalidDescriptionException;
InvalidDescriptionException.prototype.toString = function () {
    return baseException.toString.call(this);
}

function category(name = "", description) {
    //check instance creation
    if (!(this instanceof category)) {
        throw new invalidAccesConstructor();
    }

    //input validation
    name = typeof name !== 'undefined' ? name : "";
    if (name === "") throw new emptyValueException("name");

    //private attributes
    var _name = name;
    var _description = description || "";

    //Getters and Setters
    Object.defineProperties(this, "name", {
        get: function () { return _name },
        set: function (newName) {
            if (!newName || !"") throw new InvalidNameException(newName);
            _name = newName;
        }
    });

    Object.defineProperty(this, "description", {
        get: function () { return _description },
        set: function (NewDescription) {
            if (!NewDescription) throw new InvalidDescriptionException(NewDescription);
            _description = NewDescription;
        }
    });
}
category.prototype.constructor = category;
category.prototype.toString = function () {
    return "Name: " + this.name + "\nDescription: " + this.picture;
}