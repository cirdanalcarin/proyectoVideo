"use-strict";

function InvalidNameException() {
    this.name = "InvalidNameException";
    this.message = "The name is invalid";
}
InvalidNameException.prototype = new baseException();
InvalidNameException.prototype.constructor = InvalidNameException;
InvalidNameException.prototype.toString = function () {
    return baseException.toString.call(this);
}

function InvalidLastnameException() {
    this.name = "InvalidLastnameException";
    this.message = "The Lastname is invalid";
}
InvalidLastnameException.prototype = new baseException();
InvalidLastnameException.prototype.constructor = InvalidLastnameException;
InvalidLastnameException.prototype.toString = function () {
    return baseException.toString.call(this);
}

function InvalidDateException() {
    this.name = "InvalidDateException";
    this.message = "The Date is invalid";
}
InvalidDateException.prototype = new baseException();
InvalidDateException.prototype.constructor = InvalidDateException;
InvalidDateException.prototype.toString = function () {
    return baseException.toString.call(this);
}

function InvalidPictureException() {
    this.name = "InvalidPictureException";
    this.message = "The Picture is invalid";
}
InvalidPictureException.prototype = new baseException();
InvalidPictureException.prototype.constructor = InvalidPictureException;
InvalidPictureException.prototype.toString = function () {
    return baseException.toString.call(this);
}


function person(name, lastname1, lastname2, date, picture) {
    //check instance creation
    if (!(this instanceof person)) {
        throw new invalidAccesConstructor();
    }

    //input validation
    if (!name) throw new InvalidNameException(name);
    if (!lastname1) throw new InvalidLastnameException(lastname1);
    if (!lastname2 || !"") throw new InvalidLastnameException(lastname2);
    if (!date) throw new InvalidDateException(date);
    if (!picture || !"") throw new InvalidPictureException(picture);

    //private variables
    var _name = name;
    var _lastname1 = lastname1;
    var _lastname2 = lastname2 || "";
    var _date = new Date(date);
    var _picture = picture || "";

    //Getters and Setters
    Object.defineProperties(this, "name", {
        get: function () { return _name },
        set: function (newName) {
            if (!newName || !"") throw new InvalidNameException(newName);
            _name = newName;
        }
    });

    Object.defineProperties(this, "lastname1", {
        get: function () { return _lastname1 },
        set: function (newLastname1) {
            if (!newLastname1) throw new InvalidLastNameException(newLastname1);
            _lastname1 = newLastname1;
        }
    });

    Object.defineProperties(this, "lastname2", {
        get: function () { return _lastname2 || "" },
        set: function (newLastname2) {
            if (!newLastname2 || !"") throw new InvalidLastnameException(newLastname2);
            _lastname2 = newLastname2;
        }
    });

    Object.defineProperties(this, "date", {
        get: function () { return _date },
        set: function (newDate) {
            if (!newDate) throw new InvalidDateException(newDate);
            _date = newDate;
        }
    });

    Object.defineProperties(this, "picture", {
        get: function () { return _picture },
        set: function (newPicture) {
            if (!newPicture) throw new InvalidPictureException(newPicture);
            _picture = newPicture;
        }
    });
}
person.prototype.constructor = person;
person.prototype.toString() = function () {
    return "Name: " + this.name + "\nLastname 1: " + this.lastname1 + "\nLastname 2: " + this.lastname2
        + "Date: " + this.date + "\nPicture: " + this.picture;
}