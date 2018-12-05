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

function InvalidLastnameException(param) {
    this.name = "InvalidLastnameException";
    this.message = "The Lastname is invalid";
}
InvalidLastnameException.prototype = new baseException();
InvalidLastnameException.prototype.constructor = InvalidLastnameException;
InvalidLastnameException.prototype.toString = function () {
    return baseException.toString.call(this);
}

function InvalidDateException(param) {
    this.name = "InvalidDateException";
    this.message = "The Date is invalid";
}
InvalidDateException.prototype = new baseException();
InvalidDateException.prototype.constructor = InvalidDateException;
InvalidDateException.prototype.toString = function () {
    return baseException.toString.call(this);
}

function InvalidPictureException(param) {
    this.name = "InvalidPictureException";
    this.message = "The Picture is invalid";
}
InvalidPictureException.prototype = new baseException();
InvalidPictureException.prototype.constructor = InvalidPictureException;
InvalidPictureException.prototype.toString = function () {
    return baseException.toString.call(this);
}


function person(name = "", lastname1 = "", lastname2, born = new Date(), picture) {
    //check instance creation
    if (!(this instanceof person)) {
        throw new invalidAccesConstructor();
    }

    //input validation
    name = typeof name !== 'undefined' ? name : "";
    if (name === "") throw new emptyValueException("name");
    lastname1 = typeof lastname1 !== 'undefined' ? lastname1 : "";
    if (lastname1 === "") throw new emptyValueException("lastname1");
    born = typeof born !== 'undefined' ? born : 0;
    if (born === 0) throw new emptyValueException("born");


    //private attributes
    var _name = name;
    var _lastname1 = lastname1;
    var _lastname2 = lastname2 || "";
    var _born = new Date(date);
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

    Object.defineProperties(this, "born", {
        get: function () { return _born },
        set: function (newBorn) {
            if (!newBorn) throw new InvalidDateException(newBorn);
            _born = newBorn;
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
        + "\nDate: " + this.date + "\nPicture: " + this.picture;
}