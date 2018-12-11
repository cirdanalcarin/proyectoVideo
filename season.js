"use-strict";

function season(title = "") {
    //check instance creation
    if (!(this instanceof season)) {
        throw new invalidAccesConstructor();
    }

    //input validation
    title = typeof title !== 'undefined' ? title : "";
    if (title === "") throw new emptyValueException("title");

    //private attributes
    var _title = title;
    var _episodes = [];

    //Getters and Setters
    Object.defineProperties(this, "title", {
        get: function () { return _title },
        set: function (newTitle) {
            if (!newTitle) throw new InvalidTitleException(newTitle);
            _title = newTitle;
        }
    });

    Object.defineProperties(this, "episodes", {
        get: function () { return _episodes },
        set: function (newEpisodes) {
            if (!newEpisodes) throw new InvalidEpisodesException(newEpisodes);
            _episodes.push(newEpisodes);
        }
    });
}
season.prototype.constructor = season;
season.prototype.toString = function (){
    return "Title: " + this.title + "\nEspisode: " + this.epsisodes;
}