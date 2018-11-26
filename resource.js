"use-strict";

function InvalidDurationException() {
    this.name = "InvalidDurationException";
    this.message = "The Duration is invalid";
}
InvalidDurationException.prototype = new baseException();
InvalidDurationException.prototype.constructor = InvalidDurationException;
InvalidDurationException.prototype.toString = function () {
    return baseException.toString.call(this);
}

function InvalidLinkException() {
    this.name = "InvalidLinkException";
    this.message = "The Link is invalid";
}
InvalidLinkException.prototype = new baseException();
InvalidLinkException.prototype.constructor = InvalidLinkException;
InvalidLinkException.prototype.toString = function () {
    return baseException.toString.call(this);
}

function InvalidAudioException() {
    this.name = "InvalidAudioException";
    this.message = "The Audio is invalid";
}
InvalidAudioException.prototype = new baseException();
InvalidAudioException.prototype.constructor = InvalidAudioException;
InvalidAudioException.prototype.toString = function () {
    return baseException.toString.call(this);
}

function InvalidSubtitleException() {
    this.name = "InvalidSubtitleException";
    this.message = "The Subtitle is invalid";
}
InvalidSubtitleException.prototype = new baseException();
InvalidSubtitleException.prototype.constructor = InvalidSubtitleException;
InvalidSubtitleException.prototype.toString = function () {
    return baseException.toString.call(this);
}

function resource(duration, link, audio, subtitle) {
    //check instance creation
    if (!(this instanceof person)) {
        throw new invalidAccesConstructor();
    }

    var au = ["Spanish", "English", "French"];
    var sub = ["Spanish", "English", "French"];

    //input validation
    if (isNaN(duration)) throw new InvalidDurationException(duration);
    if (link != "string") throw new InvalidLinkException(link);
    if (audio != "Spanish" || audio != "English" || audio != "French") {
        throw new InvalidAudioException(audio);
    }
    if (subtitle != "Spanish" || subtitle != "English" || subtitle != "French") {
        throw new InvalidAudioException(subtitle);
    }


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

}
resource.prototype.constructor = resource;
resource.prototype.toString() = function () {
    return "Duration: " + this.duration + "\nLink: " + this.link + "\nAudio: " + this.audio
        + "Subtitle: " + this.subtitle;
}