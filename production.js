"use-strict";

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

//abstract function to implement the inheritance
(function () {
    var lock = false; //blocking to allow the instance

    //base function to implement the inheritance
    function production(title = "", nationality, publication = "", synopsis, image) {

        //If the lock is false we can instantiate
        if (lock) {
            throw new uninstantiatedObjectException();
        }

        //check instance creation
        if (!(this instanceof production)) {
            throw new invalidAccesConstructor();
        }


        //input validation
        title = typeof title !== 'undefined' ? title : "";
        if (title === "") throw new emptyValueException("title");
        publication = typeof publication !== 'undefined' ? publication : "";
        if (publication === "") throw new emptyValueException("publication");

        //private attributes
        var _title = title;
        var _nationality = nationality || "";
        var parts = publication.split("/");
        var _publication = new Date(parts[2], parts[1] - 1, parts[0]);
        var _synopsis = synopsis || "";
        var _image = image || "";

        //Getter and Setter
        Object.defineProperties(this, "title", {
            get: function () { return _title },
            set: function (newTitle) {
                if (!newTitle || !"") throw new InvalidTitleException(newTitle);
                _title = newTitle;
            }
        });

        Object.defineProperties(this, "nationality", {
            get: function () { return _nationality },
            set: function (newNationality) {
                if (!newNationality || !"") throw new InvalidNationalityException(newNationality);
                _nationality = newNationality;
            }
        });

        Object.defineProperties(this, "publication", {
            get: function () { return _publication },
            set: function (newPublication) {
                if (!newPublication || !"") throw new InvalidPublicationException(newPublication);
                _publication = newPublication;
            }
        });

        Object.defineProperties(this, "synopsis", {
            get: function () { return _synopsis },
            set: function (newSynopsis) {
                if (!newSynopsis || !"") throw new InvalidSynopsisException(newSynopsis);
                _synopsis = newSynopsis;
            }
        });

        Object.defineProperties(this, "image", {
            get: function () { return _image },
            set: function (newImage) {
                if (!newImage || !"") throw new InvalidImageException(newImage);
                _image = newImage;
            }
        });
    }
    production.prototype.constructor = production;
    production.prototype.toString = function () {
        return "Title: " + this.title + "\nNationality: " + this.nationality + "\nPublication: " + this.publication
            + "\nSynopsis: " + this.synopsis + "\nImage: " + this.image;
    }

    function movie(title = "", nationality, publication = "", synopsis, image, resource) {
        //superconstructor called
        lock = false;
        production.call(this, resource);
        lock = true;

        //input validatio
        resource = typeof resource !== 'undefined' ? resource : "";
        if (resource === "") throw new emptyValueException("title");

        //private attributes
        var _resource = resource;
        var _location = [];

        //Getter and Setter
        Object.defineProperties(this, "resource", {
            get: function () { return _resource },
            set: function (newResource) {
                if (!newResource || !"") throw new InvalidResourceException(newResource);
                _resource = newResource;
            }
        });

        Object.defineProperties(this, "location", {
            get: function () { return _location },
            set: function (newLocation) {
                if (!newLocation || "undefined") throw new InvalidLocationException(newLocation);
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

    function serie(title = "", nationality, publication = "", synopsis, image, season) {
        //superconstructor called
        lock = false;
        production.call(this, season);
        lock = true;

        //private attributes
        var _season = [];

        //Getter and Setter
        Object.defineProperties(this, "season", {
            get: function () { return _season },
            set: function (newSeason) {
                if (!newSeason || "undefined") throw new InvalidSeasonException(newSeason);
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

    abstractCreateLock = true;
    //retrun constructor
    window.production = production;
    window.movie = movie;
    window.serie = serie;
})();