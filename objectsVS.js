"use-strict";

//exceptions

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

function InvalidTitleException(param) {
    this.name = "InvalidTitleException";
    this.message = "The Title is invalid";
}
InvalidTitleException.prototype = new baseException();
InvalidTitleException.prototype.constructor = InvalidTitleException;
InvalidTitleException.prototype.toString = function () {
    return baseException.toString.call(this);
}

function InvalidNationalityException(param) {
    this.name = "InvaldNationalityException";
    this.message = "The Nationality is invalid";
}
InvalidNationalityException.prototype = new baseException();
InvalidNationalityException.prototype.constructor = InvalidNationalityException;
InvalidNationalityException.prototype.toString = function () {
    return baseException.toString.call(this);
}

function InvalidPublicationException(param) {
    this.name = "InvaldPublicationException";
    this.message = "The Publication is invalid";
}
InvalidPublicationException.prototype = new baseException();
InvalidPublicationException.prototype.constructor = InvalidPublicationException;
InvalidPublicationException.prototype.toString = function () {
    return baseException.toString.call(this);
}

function InvalidSynopsisException(param) {
    this.name = "InvaldSynopsisException";
    this.message = "The Synopsis is invalid";
}
InvalidSynopsisException.prototype = new baseException();
InvalidSynopsisException.prototype.constructor = InvalidSynopsisException;
InvalidSynopsisException.prototype.toString = function () {
    return baseException.toString.call(this);
}

function InvalidImageException(param) {
    this.name = "InvaldImageException";
    this.message = "The Image is invalid";
}
InvalidImageException.prototype = new baseException();
InvalidImageException.prototype.constructor = InvalidImageException;
InvalidImageException.prototype.toString = function () {
    return baseException.toString.call(this);
}

function InvalidResourceException(param) {
    this.name = "InvaldResourceException";
    this.message = "The Resource is invalid";
}
InvalidResourceException.prototype = new baseException();
InvalidResourceException.prototype.constructor = InvalidResourceException;
InvalidResourceException.prototype.toString = function () {
    return baseException.toString.call(this);
}

function InvalidLocationException(param) {
    this.name = "InvaldLocationException";
    this.message = "The Location is invalid";
}
InvalidLocationException.prototype = new baseException();
InvalidLocationException.prototype.constructor = InvalidLocationException;
InvalidLocationException.prototype.toString = function () {
    return baseException.toString.call(this);
}

function InvalidSeasonException(param) {
    this.name = "InvaldSeasonException";
    this.message = "The Season is invalid";
}
InvalidSeasonException.prototype = new baseException();
InvalidSeasonException.prototype.constructor = InvalidSeasonException;
InvalidSeasonException.prototype.toString = function () {
    return baseException.toString.call(this);
}

function abstractClassException(param) {
    this.name = "abstractClassException";
    this.message = "Exception of abstract class";
}
abstractClassException.prototype = new baseException();
abstractClassException.prototype.constructor = abstractClassException;
abstractClassException.prototype.toString = function () {
    return baseException.toString.call(this);
}

function InvalidDurationException(param) {
    this.name = "InvalidDurationException";
    this.message = "The Duration is invalid";
}
InvalidDurationException.prototype = new baseException();
InvalidDurationException.prototype.constructor = InvalidDurationException;
InvalidDurationException.prototype.toString = function () {
    return baseException.toString.call(this);
}

function InvalidLinkException(param) {
    this.name = "InvalidLinkException";
    this.message = "The Link is invalid";
}
InvalidLinkException.prototype = new baseException();
InvalidLinkException.prototype.constructor = InvalidLinkException;
InvalidLinkException.prototype.toString = function () {
    return baseException.toString.call(this);
}

function InvalidAudioException(param) {
    this.name = "InvalidAudioException";
    this.message = "The Audio is invalid";
}
InvalidAudioException.prototype = new baseException();
InvalidAudioException.prototype.constructor = InvalidAudioException;
InvalidAudioException.prototype.toString = function () {
    return baseException.toString.call(this);
}

function InvalidSubtitleException(param) {
    this.name = "InvalidSubtitleException";
    this.message = "The Subtitle is invalid";
}
InvalidSubtitleException.prototype = new baseException();
InvalidSubtitleException.prototype.constructor = InvalidSubtitleException;
InvalidSubtitleException.prototype.toString = function () {
    return baseException.toString.call(this);
}

function InvalidTitleException(param) {
    this.name = "InvalidTitleException";
    this.message = "The Title is invalid";
}
InvalidTitleException.prototype = new baseException();
InvalidTitleException.prototype.constructor = InvalidTitleException;
InvalidTitleException.prototype.toString = function () {
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

function InvalidPasswordException(param) {
    this.name = "InvalidPasswordException";
    this.message = "The Password is invalid";
}
InvalidPasswordException.prototype = new baseException();
InvalidPasswordException.prototype.constructor = InvalidPasswordException;
InvalidPasswordException.prototype.toString = function () {
    return baseException.toString.call(this);
}

//start category object
function category(name) {
    //check instance creation
    if (!(this instanceof category)) {
        throw new invalidAccesConstructor();
    }

    //input validation

    if (!(name) || name === "") throw new emptyValueException("name");

    //private attributes
    var _name = name;
    var _description = "";

    //Getters and Setters
    Object.defineProperty(this, "name", {
        get: function () { return _name },
        set: function (newName) {
            if (newName === 'undefined' || nowName === "") throw new InvalidNameException(newName);
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
    return "Name: " + this.name + "\nDescription: " + this.description;
}
//End object category

//start object coordinate
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
    Object.defineProperty(this, "latitude", {
        get: function () { return _latitude },
        set: function (newLatitude) {
            if (Number.isNaN(newLatitude) || newLatitude < -90 || newLatitude > 90) throw new InvalidLatitudeException(newLatitude);
            _latitude = newLatitude;
        }
    });

    Object.defineProperty(this, "longitude", {
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
//End object coordinate

//start object person
function person(name, lastname1, born) {
    //check instance creation
    if (!(this instanceof person)) {
        throw new invalidAccesConstructor();
    }

    //input validation
    if (!(name) || name === '') throw new emptyValueException("name");

    if (!(lastname1) || lastname1 === '') throw new emptyValueException("lastname1");

    if (!(born) || born === '') throw new emptyValueException("born");
    //check date format
    if (/^(?:0?[1-9]|1[0-1-2])([\-/.])(3[01]|[12][0-9]|0?[1-9])\1\d{4}$/.test(born) !== true) throw new InvalidDateException(born);

    //private attributes
    var _name = name.trim();
    var _lastname1 = lastname1.trim();
    var _lastname2 = "";
    var _born = new Date(born);
    var _picture = "";

    //Getters and Setters
    Object.defineProperty(this, "name", {
        get: function () { return _name },
        set: function (newName) {
            if (newName === 'undefined' || nowName === "") throw new InvalidNameException(newName);
            _name = newName;
        }
    });

    Object.defineProperty(this, "lastname1", {
        get: function () { return _lastname1 },
        set: function (newLastname1) {
            if (newLastname1 === 'undefined' || newLastname1 === "") throw new InvalidLastNameException(newLastname1);
            _lastname1 = newLastname1;
        }
    });

    Object.defineProperty(this, "lastname2", {
        get: function () { return _lastname2 || "" },
        set: function (newLastname2) {
            if (newLastname2 === 'undefined' || newLastname2 === "") throw new InvalidLastnameException(newLastname2);
            _lastname2 = newLastname2;
        }
    });

    Object.defineProperty(this, "born", {
        get: function () { return _born },
        set: function (newBorn) {
            if (/^(?:0?[1-9]|1[0-1-2])([\-/.])(3[01]|[12][0-9]|0?[1-9])\1\d{4}$/.test(born) !== true) throw new InvalidDateException(born);
            if (newBorn === 'undefined' || newBorn === "") throw new InvalidDateException(newBorn);
            _born = newBorn;
        }
    });

    Object.defineProperty(this, "picture", {
        get: function () { return _picture },
        set: function (newPicture) {
            if (!newPicture || !"") throw new InvalidPictureException(newPicture);
            _picture = newPicture;
        }
    });
}
person.prototype.constructor = person;
person.prototype.toString = function () {
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return "Name: " + this.name + "\nFirst Lastname: " + this.lastname1 + "\nSecond Lastname: " + this.lastname2
        + "\nBorn: " + this.born.toLocaleDateString('es-Es', options) + "\nPicture: " + this.picture;
}
//End object person

//start object production
//abstract function to implement the inheritance
function production(title, publication) {

    //check instance creation
    if (!(this instanceof production)) {
        throw new invalidAccesConstructor();
    }

    if (this.constructor === production) {
        throw new abstractClassException("Production");
    }


    //input validation
    if (!(title) || title === "") throw new emptyValueException("title");
    if (!(publication) || publication === "") throw new emptyValueException("publication");
    if (/^(?:0?[1-9]|1[0-1-2])([\-/.])(3[01]|[12][0-9]|0?[1-9])\1\d{4}$/.test(publication) !== true) throw new InvalidDateException(publication);

    //private attributes
    var _title = title;
    var _nationality = "";
    var _publication = new Date(publication);
    var _synopsis = "";
    var _image = "";

    //Getter and Setter
    Object.defineProperty(this, "title", {
        get: function () { return _title },
        set: function (newTitle) {
            if (!(newTitle) || newTitle === "") throw new InvalidTitleException(newTitle);
            _title = newTitle;
        }
    });

    Object.defineProperty(this, "nationality", {
        get: function () { return _nationality },
        set: function (newNationality) {
            _nationality = newNationality;
        }
    });

    Object.defineProperty(this, "publication", {
        get: function () { return _publication },
        set: function (newPublication) {
            if (!(newPublication) || newPublication === "") throw new InvalidPublicationException(newPublication);
            if (/^(?:0?[1-9]|1[0-1-2])([\-/.])(3[01]|[12][0-9]|0?[1-9])\1\d{4}$/.test(publication) !== true) throw new InvalidDateException(publication);
            _publication = newPublication;
        }
    });

    Object.defineProperty(this, "synopsis", {
        get: function () { return _synopsis },
        set: function (newSynopsis) {
            _synopsis = newSynopsis;
        }
    });

    Object.defineProperty(this, "image", {
        get: function () { return _image },
        set: function (newImage) {
            _image = newImage;
        }
    });
}
production.prototype.constructor = production;
production.prototype.toString = function () {
    var options = { weekday: "long", year: "numeric", day: "numeric", month: "long" };
    return "Title: " + this.title + "\nNationality: " + this.nationality + "\nPublication: " + this.publication.toLocaleDateString('es-Es', options)
        + "\nSynopsis: " + this.synopsis + "\nImage: " + this.image;
}

//inherit from production
function movie(title, publication) {
    //check instance creation
    if (!(this instanceof movie)) {
        throw new invalidAccesConstructor();
    }

    //invoke the parent constructor
    production.call(this, title, publication);

    //private attributes
    var _resource = resource;
    var _location = [];

    //Getter and Setter
    Object.defineProperty(this, "resource", {
        get: function () { return _resource },
        set: function (newResource) {
            _resource = newResource;
        }
    });

    Object.defineProperty(this, "location", {
        get: function () { return _location },
        set: function (newLocation) {
            _location.push(newLocation);
        }
    });
}
movie.prototype = Object.create(production.prototype);
movie.prototype.constructor = movie;
movie.prototype.toString = function () {
    return production.prototype.toString.call(this)
        + "\nResource: " + this.resouce + "\nLocation: " + this.locations;
}

//inherit from production
function serie(title, publication) {
     //check instance creation
     if (!(this instanceof serie)) {
        throw new invalidAccesConstructor();
    }

    //invoke the parent constructor
    production.call(this, title, publication);

    //private attributes
    var _season = [];

    //Getter and Setter
    Object.defineProperty(this, "season", {
        get: function () { return _season },
        set: function (newSeason) {
            _season.push(newSeason);
        }
    });
}
serie.prototype = Object.create(production.prototype);
serie.prototype.constructor = serie;
serie.prototype.toString = function () {
    return production.prototype.toString.call(this)
        + "\nSeason: " + this.season;
}
//End object production

//start object resource
function resource(duration = 0, link = "") {
    //check instance creation
    if (!(this instanceof person)) {
        throw new invalidAccesConstructor();
    }

    //input validation
	if (Number.isNaN(duration)) throw new emptyValueException("duration");
    
    if (link === "") throw new emptyValueException("link");
    //check link format
    if (/^https?:\/\/(www\.)?[-a-zA-Z0-9@%._\+~#=]{2,256}(\:(\d){2,4})?(\/[a-zA-Z0-9_.$%._\+~#]+)$/.test (link) === true ||
		/^(\/?[a-zA-Z0-9_.$%._\+~#]+)*(\?(\w+=.*)(\&(\w+=.+))*)?$/.test (link) === true)
		throw new InvalidLinkException("link");

    //private attributes
    var _duration = duration;
    var _link = link;
    var _audio = [];
    var _subtitle = [];


    //Getters and Setters
    Object.defineProperty(this, "duration", {
        get: function () { return _duration },
        set: function (newDuration) {
            if (isNaN(newDuration)) throw new InvalidDurationException(newDuration);
            _duration = newDuration;
        }
    });
    
    Object.defineProperty(this, "link", {
        get: function () { return _link },
        set: function (newLink) {
            if (/^https?:\/\/(www\.)?[-a-zA-Z0-9@%._\+~#=]{2,256}(\:(\d){2,4})?(\/[a-zA-Z0-9_.$%._\+~#]+)$/.test (newLink) === true ||
		/^(\/?[a-zA-Z0-9_.$%._\+~#]+)*(\?(\w+=.*)(\&(\w+=.+))*)?$/.test (newLink) === true) throw new InvalidLinkException(newLink);
            _link = newLink;
        }
    });

    Object.defineProperty(this, "audio", {
        get: function () { return _audio },
        set: function (newAudio) {
            _audio.push(newAudio);
        }
    });

    Object.defineProperty(this, "subtitle", {
        get: function () { return _subtitle },
        set: function (newSubtitle) {
            _subtitle.push(newSubtitle);
        }
    });

}
resource.prototype.constructor = resource;
resource.prototype.toString = function () {
    return "Duration: " + this.duration + "\nLink: " + this.link;
}
//End object resource

//start object season
function season(title) {
    //check instance creation
    if (!(this instanceof season)) {
        throw new invalidAccesConstructor();
    }

    //input validation
    if (!(title) || title === "") throw new emptyValueException("title");

    //private attributes
    var _title = title;
    var _episodes = [];

    //Getters and Setters
    Object.defineProperty(this, "title", {
        get: function () { return _title },
        set: function (newTitle) {
            if (!(newTitle) || newTitle === "") throw new InvalidTitleException(newTitle);
            _title = newTitle;
        }
    });

    Object.defineProperty(this, "episodes", {
        get: function () { return _episodes },
        set: function (newEpisodes) {
            _episodes.push(newEpisodes);
        }
    });
}
season.prototype.constructor = season;
season.prototype.toString = function () {
    return "Title: " + this.title + "\nEspisode: " + this.epsisodes;
}
//End object season

//start object user
function user(name, email, password) {
    //check instance creation
    if (!(this instanceof user)) {
        throw new invalidAccesConstructor();
    }

    //input validation
    if (!(name) || name === "") throw new emptyValueException("name");
    if (/^[a-zA-Z][a-zA-Z0-9_\-]*(\.[a-zA-Z0-9_\-]*)*[a-zA-Z0-9]$/.test(name) !== true) throw new InvalidNameException("name");

    if (!(email) || email === '') throw new emptyValueException("email");
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email)) throw new InvalidEmailException("email");

    if (!(password) || password === '') throw new emptyValueException("password");
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}[^'\s]/.test(password)) throw new InvalidPasswordException("password");

    //private attributes
    var _name = name;
    var _email = email;
    var _password = password;

    //Getters and Setters
    Object.defineProperty(this, "name", {
        get: function () { return _name },
        set: function (newName) {
            if (!(newName) || newName === "") throw new emptyValueException("newName");
            if (/^[a-zA-Z][a-zA-Z0-9_\-]*(\.[a-zA-Z0-9_\-]*)*[a-zA-Z0-9]$/.test(newName) !== true) throw new InvalidNameException("newName");
            _name = newName;
        }
    });

    Object.defineProperty(this, "email", {
        get: function () { return _email },
        set: function (newEmail) {
            if (!(newEmail) || newEmail === '') throw new emptyValueException("newEmail");
            if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(newEmail)) throw new InvalidEmailException("newEmail");
            _episodes = newEmail;
        }
    });

    Object.defineProperty(this, "password", {
        get: function () { return _password },
        set: function (newPaswword) {
            if (!(newPaswword) || newPaswword === '') throw new emptyValueException("newPaswword");
            if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}[^'\s]/.test(newPaswword)) throw new InvalidPasswordException("newPaswword");
            _password = newPaswword;
        }
    });
}
user.prototype.constructor = user;
user.prototype.toString = function () {
    return "Name: " + this.name + "\nEmail: " + this.email + "\nPassword: " + this.password;
}
//End object user