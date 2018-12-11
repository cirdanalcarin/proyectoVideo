"use-strict";

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

function resource(duration = 0, link = "") {
    //check instance creation
    if (!(this instanceof person)) {
        throw new invalidAccesConstructor();
    }

    //input validation
    duration = typeof duration !== 'undefined' ? duration : 0;
	if (duration === 0) throw new emptyValueException("duration");
    link = typeof link !== 'undefined' ? link : "";
	if (link === "") throw new emptyValueException("link");

    //private attributes
    var _duration = duration;
    var _link = link;
    var _audio = [];
    var _subtitle = [];


    //Getters and Setters
    Object.defineProperties(this, "duration", {
        get: function () { return _duration },
        set: function (newDuration) {
            if (isNaN(newDuration)) throw new InvalidDurationException(newDuration);
            _duration = newDuration;
        }
    });
    
    Object.defineProperties(this, "link", {
        get: function () { return _link },
        set: function (newLink) {
            if (!newLink) throw new InvalidLinkException(newLink);
            _link = newLink;
        }
    });

    Object.defineProperties(this, "audio", {
        get: function () { return _audio },
        set: function (newAudio) {
            if (!newAudio) throw new InvalidAudioException(newAudio);
            _audio.push(newAudio);
        }
    });

    Object.defineProperties(this, "subtitle", {
        get: function () { return _subtitle },
        set: function (newSubtitle) {
            if (!newSubtitle) throw new InvalidSubtitleException(newSubtitle);
            _subtitle.push(newSubtitle);
        }
    });

}
resource.prototype.constructor = resource;
resource.prototype.toString = function () {
    return "Duration: " + this.duration + "\nLink: " + this.link + "\nAudio: " + this.audio
        + "\nSubtitle: " + this.subtitle;
}