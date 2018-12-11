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

function InvalidEmailException(param) {
    this.name = "InvalidEmailException";
    this.message = "The Email is invalid";
}
InvalidEmailException.prototype = new baseException();
InvalidEmailException.prototype.constructor = InvalidEmailException;
InvalidEmailException.prototype.toString = function () {
    return baseException.toString.call(this);
}

function InvalidNameException(param) {
    this.name = "InvalidNameException";
    this.message = "The name is invalid";
}
InvalidNameException.prototype = new baseException();
InvalidNameException.prototype.constructor = InvalidNameException;
InvalidNameException.prototype.toString = function () {
    return baseException.toString.call(this);
}

function user(name = "", email = "", password = "") {
    //check instance creation
    if (!(this instanceof user)) {
        throw new invalidAccesConstructor();
    }

    //input validation
    name = typeof name !== 'undefined' ? name : "";
    if (name === "") throw new emptyValueException("name");
    email = typeof email !== 'undefined' ? email : "";
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email)) throw new emptyValueException("email");
    password = typeof password !== 'undefined' ? password : "";
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}[^'\s]/.test(password)) throw new emptyValueException("password");

    //private attributes
    var _name = name;
    var _email = email;
    var _password = password;

    //Getters and Setters
    Object.defineProperties(this, "name", {
        get: function () { return _name },
        set: function (newName) {
            if (!newName || !"") throw new InvalidNameException(newName);
            _name = newName;
        }
    });

    Object.defineProperties(this, "email", {
        get: function () { return _email },
        set: function (newEmail) {
            if (!newEmail) throw new InvalidEmailException(newEmail);
            _episodes = newEmail;
        }
    });

    Object.defineProperties(this, "password", {
        get: function () { return _password },
        set: function (newPaswword) {
            if (!newPaswword) throw new InvalidEmailException(newPaswword);
            _password = newEmail;
        }
    });
}
season.prototype.constructor = season;
season.prototype.toString = function () {
    return "Name: " + this.name + "\nEmail: " + this.email + "\nPassword: " + this.password;
}