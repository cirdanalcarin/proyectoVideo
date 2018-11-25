"use-strict";

function category(name, description) {
    //check instance creation
    if (!(this instanceof category)) {
        throw new invalidAccesConstructor();
    }

    //input validation
    if (!name) throw new InvalidNameException(name);
    if ((typeof description) != "string") throw new InvalidDescriptionValue(description);

    //private variables
    var _name = name;
    var _description = description;

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
category.prototype.toString() = function () {
    return "Name: " + this.name + "\nDescription: " + this.picture;
}