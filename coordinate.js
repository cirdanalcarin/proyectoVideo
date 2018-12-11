"use-strict";

function InvalidLongitudeException(param) {
    this.name = "InvalidLongitudeException";
    this.message = "The Longitude is invalid";
}
InvalidLongitudeException.prototype = new baseException();
InvalidLongitudeException.prototype.constructor = InvalidLongitudeException;
InvalidLongitudeException.prototype.toString = function () {
    return baseException.toString.call(this);
}

function InvalidLatitudeException(param) {
    this.name = "InvalidLatitudeException";
    this.message = "The Latitude is invalid";
}
InvalidLatitudeException.prototype = new baseException();
InvalidLatitudeException.prototype.constructor = InvalidLatitudeException;
InvalidLatitudeException.prototype.toString = function () {
    return baseException.toString.call(this);
}

function coords(latitude = 0, longitude = 0) {
    //check instance creation
    if (!(this instanceof user)) {
        throw new invalidAccesConstructor();
    }

    //input validation
    latitude = typeof latitude !== 'undefined' ? Number(latitude).valueOf : 0;
    if (Number.isNaN(latitude) || latitude < -90 || latitude > 90) throw new emptyValueException("latitude");
    longitude = typeof longitude !== 'undefined' ? Number(longitude).valueOf : 0;
    if (Number.isNaN(longitude) || longitude < -180 || longitude > 180) throw new emptyValueException("longitude");

    //private attributes
    var _latitude = latitude;
    var _longitude = longitude;

    //Getter and Setter
    Object.defineProperties(this, "latitude", {
        get: function () { return _latitude },
        set: function (newLatitude) {
            if (Number.isNaN(newLatitude) || newLatitude < -90 || newLatitude > 90) throw new InvalidLatitudeException(newLatitude);
            _latitude = newLatitude;
        }
    });

    Object.defineProperties(this, "longitude", {
        get: function () { return _longitude },
        set: function (newLongitude) {
            if (Number.isNaN(newLongitude) || newLongitude < -180 || newLongitude > 180) throw new InvalidLongitudeException(newLongitude);
            _longitude = newLongitude;
        }
    });
}
coords.prototype.constructor = coords;
coords.prototype.toString = function () {
    return "Longitude: " + this.longitude + "\nLatitude: " + this.latitude;
}