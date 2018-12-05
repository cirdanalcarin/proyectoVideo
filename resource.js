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

function resource(duration = 0, link = "", audio, subtitle) {
    //check instance creation
    if (!(this instanceof person)) {
        throw new invalidAccesConstructor();
    }

    var au = ["Spanish", "English", "French"];
    var sub = ["Spanish", "English", "French"];

    //input validation
    duration = typeof duration !== 'undefined' ? duration : 0;
	if (duration === 0) throw new emptyValueException("duration");
    link = typeof link !== 'undefined' ? link : "";
	if (link === "") throw new emptyValueException("link");

    //private attributes
    var _duration = duration;
    var _link = link;
    if (audio == "Spanish") {
        var _audio = au[0];
    } else if (audio == "English") {
        var _audio = au[1];
    } else {
        var _audio = au[2];
    }
    if (subtitle == "Spanish") {
        var _subtitle = sub[0];
    } else if (subtitle == "English") {
        var _subtitle = sub[1];
    } else {
        var _subtitle = sub[2];
    }

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
            _audio = newAudio;
        }
    });

    Object.defineProperties(this, "subtitle", {
        get: function () { return _subtitle },
        set: function (newSubtitle) {
            if (!newSubtitle) throw new InvalidSubtitleException(newSubtitle);
            _subtitle = newSubtitle;
        }
    });

    this.addAudio = function (audio) {
        au.push(audio);
    }

    this.addSubtitle = function (subtitle) {
        sub.push(subtitle);
    }

    this.removeAudio = function (audio) {
        var elem = au.indexOf(audio);
        if (elem !== -1) {
            au.splice(elem, 1);
            return true;
        } else {
            return false;
        }
    }

    this.removeSubtitle = function (subtitle) {
        var elem = sub.indexOf(subtitle);
        if (elem !== -1) {
            sub.splice(elem, 1);
            return true;
        } else {
            return false;
        }
    }

}
resource.prototype.constructor = resource;
resource.prototype.toString() = function () {
    return "Duration: " + this.duration + "\nLink: " + this.link + "\nAudio: " + this.audio
        + "\nSubtitle: " + this.subtitle;
}