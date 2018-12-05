"use-strict";

//abstract function to implement the inheritance
(function () {
    var lock = false; //blocking to allow the instance

    //base function to implement the inheritance
    function production(title = "", nationality, publication = new Date(), synopsis, image) {

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
        publication = typeof publication !== 'undefined' ? publication : 0;
        if (publication === 0) throw new emptyValueException("publication");

        //private attributes
        var _title = title;
        var _nationality = nationality || "";
        var _publication = publication;
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
                if (!newPublication || newPublication == 0) throw new InvalidPublicationException(newPublication);
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
    production.prototype.toString() = function () {
        return "Title: " + this.title + "\nNationality: " + this.nationality + "\nPublication: " + this.publication
            + "\nSynopsis: " + this.synopsis + "\nImage: " + this.image;
    }

})();