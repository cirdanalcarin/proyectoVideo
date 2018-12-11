"use-strict";

function nameEmptyException() {
    this.name = "nameEmptyException";
    this.message = "The name is empty";
}
nameEmptyException.prototype = new baseException();
nameEmptyException.prototype.constructor = nameEmptyException;
nameEmptyException.prototype.toString = function () {
    return baseException.toString.call(this);
}

function objectIsNullException() {
    this.name = "objectIsNullException";
    this.message = "The object is null";
}
objectIsNullException.prototype = new baseException();
objectIsNullException.prototype.constructor = objectIsNullException;
objectIsNullException.prototype.toString = function () {
    return baseException.toString.call(this);
}

function objectDoestObjectException(param) {
    this.name = "objectDoestObjectException";
    this.message = "The object doesn´t a object";
}
objectDoestObjectException.prototype = new baseException();
objectDoestObjectException.prototype.constructor = objectDoestObjectException;
objectDoestObjectException.prototype.toString = function () {
    return baseException.toString.call(this);
}

function objectDoesntExistsException() {
    this.name = "objectDoesntExistsException";
    this.message = "The object doesn`t exists";
}
objectDoesntExistsException.prototype = new baseException();
objectDoesntExistsException.prototype.constructor = objectDoesntExistsException;
objectDoesntExistsException.prototype.toString = function () {
    return baseException.toString.call(this);
}

function objectDoesntRegisteredException() {
    this.name = "objectDoesntRegisteredException";
    this.message = "The object doesn`t registered";
}
objectDoesntRegisteredException.prototype = new baseException();
objectDoesntRegisteredException.prototype.constructor = objectDoesntRegisteredException;
objectDoesntRegisteredException.prototype.toString = function () {
    return baseException.toString.call(this);
}

function objectExistsException() {
    this.name = "objectExistsException";
    this.message = "The object does exists";
}
objectExistsException.prototype = new baseException();
objectExistsException.prototype.constructor = objectExistsException;
objectExistsException.prototype.toString = function () {
    return baseException.toString.call(this);
}

function iteratorException() {
    this.name = "iteratorException";
    this.message = "The iterator can´t be executed";
}
iteratorException.prototype = new baseException();
iteratorException.prototype.constructor = iteratorException;
objectExistsException.prototype.toString = function () {
    return baseException.toString.call(this);
}

//declaration of videosystem object by singelton pattern
var videoSystem = (function () {
    var instantiated; //object with the single instance videoSystem

    //singelton initialization
    function init() {

        //constructor of the videoSystem instance
        function videoSystem() {
            //check instance creation
            if (!(this instanceof season)) {
                throw new invalidAccesConstructor();
            }

            //private attributes
            _name = "videoSystem";
            _users = [];
            _productions = [];
            _categories = [];
            _actors = [];
            _directors = [];

            //Getter name and Setter name
            Object.defineProperties(this, "name", {
                get: function () { return _name },
                set: function (newName) {
                    if (!newName || !"") throw new nameEmptyException();
                    _name = newName;
                }
            });

            //iterator of categories
            Object.defineProperty(this, 'categories', {
                get: function () {
                    var nextIndex = 0;
                    return {
                        next: function () {
                            return nextIndex < _categories.length ?
                                { value: _categories[nextIndex++], done: false } :
                                { done: true };
                        }
                    }
                }
            });

            //methods of categories
            this.addCategory = function (category) {
                if (category === null) {
                    throw new objectIsNullException();
                }
                var search = _categories.find(category); //search object in array
                var i = 0;
                var exist = false;
                //search person in array
                while (i < _productions.length && !exist) {
                    if (category.title === search.title) {
                        throw new objectExistsException();
                    } else {
                        _categories.push(category);
                        exist = true;
                        return _categories.length;
                    }
                }
            }

            this.removeCategory = function (category) {
                var search = _categories.find(category); //search object in array
                var i = 0;
                var exist = false;
                //search person in array
                while (i < _productions.length && !exist) {
                    if (category.title !== search.title) {
                        throw new objectDoesntRegisteredException();
                    } else {
                        _categories.splice(category, 1);
                        exist = true;
                        return _categories.length;
                    }
                }
            }
            var defaultCategory = new category("Default Category");
            this.addCategory(defaultCategory);

            //Getter users
            Object.defineProperty(this, 'users', {
                get: function () {
                    var nextIndex = 0;
                    return {
                        next: function () {
                            return nextIndex < _users.length ?
                                { value: _users[nextIndex++], done: false } :
                                { done: true };
                        }
                    }
                }
            });

            //methods of users
            this.addUser = function (user) {
                if (user === null) {
                    throw new objectIsNullException();
                }
                var search = _users.find(user); //search object in array
                var i = 0;
                var exist = false;
                //search person in array
                while (i < _users.length && !exist) {
                    if ((user.name === search.name) && (user.email === search.email)) {
                        throw new objectExistsException(user);
                    } else {
                        _users.push(user);
                        exist = true;
                        return _users.length;
                    }
                }
            }

            this.removeUser = function (user) {
                var search = _users.find(user); //search object in array
                var i = 0;
                var exist = false;
                //search person in array
                while (i < _users.length && !exist) {
                    if (user.name !== search.name) {
                        throw new objectDoesntExistsException();
                    } else {
                        _users.splice(user, 1);
                        exist = true;
                        return _users.length;
                    }
                }
            }

            //Getter productions
            Object.defineProperty(this, 'productions', {
                get: function () {
                    var nextIndex = 0;
                    return {
                        next: function () {
                            return nextIndex < _productions.length ?
                                { value: _productions[nextIndex++], done: false } :
                                { done: true };
                        }
                    }
                }
            });

            //methods of production
            this.addProduction = function (production) {
                if (production === null) {
                    throw new objectIsNullException();
                }
                if (this instanceof production) {
                    throw new objectDoestObjectException();
                }
                var search = _productions.find(production); //search object in array
                var i = 0;
                var exist = false;
                //search person in array
                while (i < _productions.length && !exist) {
                    if ((production.title === search.title)) {
                        throw new objectExistsException();
                    } else {
                        _productions.push(production);
                        exist = true;
                        return _productions.length;
                    }
                }
            }

            this.removeProduction = function (production) {
                var search = _productions.find(production); //search object in array
                var i = 0;
                var exist = false;
                //search person in array
                while (i < _productions.length && !exist) {
                    if (production.title !== search.title) {
                        throw new objectDoesntRegisteredException();
                    } else {
                        _productions.splice(production, 1);
                        exist = true;
                        return _productions.length;
                    }
                }
            }

            //Getter actors
            Object.defineProperty(this, 'actors', {
                get: function () {
                    var nextIndex = 0;
                    return {
                        next: function () {
                            return nextIndex < _actors.length ?
                                { value: _actors[nextIndex++], done: false } :
                                { done: true };
                        }
                    }
                }
            });

            //methods of actors
            this.addActor = function (person) {
                if (person === null) {
                    throw new objectIsNullException();
                }
                if (this instanceof person) {
                    throw new objectDoestObjectException();
                }
                var search = _actors.find(person); //search object in array
                var i = 0;
                var exist = false;
                //search person in array
                while (i < _actors.length && !exist) {
                    if ((person.name === search.name)) {
                        throw new objectExistsException();
                    } else {
                        _actors.push(person);
                        exist = true;
                        return _actors.length;
                    }
                }
            }

            this.removeActor = function (person) {
                var search = _actors.find(person); //search object in array
                var i = 0;
                var exist = false;
                //search person in array
                while (i < _actors.length && !exist) {
                    if (person.title !== search.title) {
                        throw new objectDoesntExistsException();
                    } else {
                        _actors.splice(person, 1);
                        exist = true;
                        return _actors.length;
                    }
                }
            }

            //Getter director
            Object.defineProperty(this, 'actors', {
                get: function () {
                    var nextIndex = 0;
                    return {
                        next: function () {
                            return nextIndex < _directors.length ?
                                { value: _directors[nextIndex++], done: false } :
                                { done: true };
                        }
                    }
                }
            });

            //methods of directors
            this.addDirector = function (person) {
                if (person === null) {
                    throw new objectIsNullException();
                }
                if (this instanceof person) {
                    throw new objectDoestObjectException();
                }
                var search = _directors.find(person); //search object in array
                var i = 0;
                var exist = false;
                //search person in array
                while (i < _directors.length && !exist) {
                    if ((person.name === search.name)) {
                        throw new objectExistsException();
                    } else {
                        _directors.push(person);
                        exist = true;
                        return _directors.length;
                    }
                }
            }

            this.removeDirector = function (person) {
                var search = _directors.find(person); //search object in array
                var i = 0;
                var exist = false;
                //search person in array
                while (i < _directors.length && !exist) {
                    if (person.title !== search.title) {
                        throw new objectDoesntExistsException();
                    } else {
                        _directors.splice(person, 1);
                        exist = true;
                        return _directors.length;
                    }
                }
            }

            //methods of assignment
            this.assignCategory = function (category, production) {
                if (category === null) {
                    throw new objectIsNullException();
                }
                if (production === null) {
                    throw new objectIsNullException();
                }
                var searchCategory = _directors.find(category);
                var searchProduction = _productions.find(production);
                var i = 0;
                var exist = false;
                //search category and production and if they aren´t they are added
                while (i < _categories.length && !exist) {
                    if ((category.title !== searchCategory.title)) {
                        _categories.push(category);
                        exist = true;
                    } else if ((production.title !== searchProduction.title)) {
                        _productions.push(production);
                        exist = true;
                    }
                }
                if (!exist) {
                    _categories.push({
                        category: new category(),
                        production: [new production()]
                    });
                    return _categories.production.length;
                }

            }

            this.deassignCategory = function (category, production) {
                if (category === null) {
                    throw new objectIsNullException();
                }
                if (production === null) {
                    throw new objectIsNullException();
                }
                var searchCategory = _categories.find(category);
                var i = 0;
                var exist = false;
                //search category and production 
                while (i < _categories.length && !exist) {
                    if ((category.production.title === searchCategory.production.title)) {
                        _categories.splice(_categories.production, 1);
                        exist = true;
                        return _categories.production.length;
                    }
                }
            }

            this.assignDirector = function (person, production) {
                if (person === null) {
                    throw new objectIsNullException();
                }
                if (production === null) {
                    throw new objectIsNullException();
                }
                var searchPerson = _directors.find(person);
                var searchProduction = _productions.find(production);
                var i = 0;
                var exist = false;
                //search directors and production and if they aren´t they are added
                while (i < _directors.length && !exist) {
                    if ((person.name !== searchPerson.name)) {
                        _directors.push(person);
                        exist = true;
                    } else if ((production.title !== searchProduction.title)) {
                        _productions.push(production);
                        exist = true;
                    }
                }
                if (!exist) {
                    _directors.push({
                        director: new person(),
                        production: [new production()]
                    });
                    return _directors.production.length;
                }
            }

            this.deassignDirector = function (person, production) {
                if (person === null) {
                    throw new objectIsNullException();
                }
                if (production === null) {
                    throw new objectIsNullException();
                }
                var searchPerson = _directors.find(person);
                var i = 0;
                var exist = false;
                //search category and production 
                while (i < _directors.length && !exist) {
                    if ((person.production.title === searchPerson.production.title)) {
                        _directors.splice(_directors.production, 1);
                        exist = true;
                        return _directors.production.length;
                    }
                }
            }

            this.assignActor = function (person, production) {
                if (person === null) {
                    throw new objectIsNullException();
                }
                if (production === null) {
                    throw new objectIsNullException();
                }
                var searchPerson = _actors.find(person);
                var searchProduction = _productions.find(production);
                var i = 0;
                var exist = false;
                //search directors and production and if they aren´t they are added
                while (i < _actors.length && !exist) {
                    if ((person.name !== searchPerson.name)) {
                        _actors.push(person);
                        exist = true;
                    } else if ((production.title !== searchProduction.title)) {
                        _productions.push(production);
                        exist = true;
                    }
                }
                if (!exist) {
                    _actors.push({
                        actor: new person(),
                        productions: [{
                            production: new production(),
                            character: char,
                            main: false
                        }]
                    });
                    return _actors.productions.production.length;
                }
            }

            this.deassignActor = function (person, production) {
                if (person === null) {
                    throw new objectIsNullException();
                }
                if (production === null) {
                    throw new objectIsNullException();
                }
                var searchPerson = _actors.find(person);
                var i = 0;
                var exist = false;
                //search category and production 
                while (i < _actors.length && !exist) {
                    if ((person.productions.production.title === searchPerson.productions.production.title)) {
                        _actors.splice(_actors.productions.production, 1);
                        exist = true;
                        return _actors.productions.production.length;
                    }
                }
            }

            this.getCast = function (production) {
                //function that the iterator generates
                function generator(array) {
                    var nextIndex = 0;
                    while (nextIndex < array.length) {
                        yield array[nextIndex++];
                    }
                }

                var gen = generator(_production[production]);
                if (production === null) {
                    throw new objectIsNullException();
                }
                if (production.title === _production[production].title) {
                    for (let i = 0; i < _productions.length; i++) {
                        return gen.next()._production[production].title + " " + gen.next()._production[production].actor.character;
                    }
                } else {
                    throw new iteratorException();
                }
            }

            this.getProductionsDirector = function (person) {
                //function that the iterator generates
                function generator(array) {
                    var nextIndex = 0;
                    while (nextIndex < array.length) {
                        yield array[nextIndex++];
                    }
                }

                var gen = generator(_directors[person]);
                if (person === null) {
                    throw new objectIsNullException();
                }
                if (person.name === _directors[person].name) {
                    for (let i = 0; i < _directors.length; i++) {
                        return gen.next()._directors[person].name + " " + gen.next()._directors[person].actor.character;
                    }
                } else {
                    throw new iteratorException();
                }
            }

            this.getProductionsActor = function (person) {
                //function that the iterator generates
                function generator(array) {
                    var nextIndex = 0;
                    while (nextIndex < array.length) {
                        yield array[nextIndex++];
                    }
                }

                var gen = generator(_actors[person]);
                if (person === null) {
                    throw new objectIsNullException();
                }
                if (person.name === _actors[person].name) {
                    for (let i = 0; i < _actors.length; i++) {
                        return gen.next()._actors[person].name + " " + gen.next().__actors[person].productions.production;
                    }
                } else {
                    throw new iteratorException();
                }
            }

            this.getProductionsCategory = function (category) {
                //function that the iterator generates
                function generator(array) {
                    var nextIndex = 0;
                    while (nextIndex < array.length) {
                        yield array[nextIndex++];
                    }
                }

                var gen = generator(_categories[category]);
                if (category === null) {
                    throw new objectIsNullException();
                }
                if (category.title === _categories[category].name) {
                    for (let i = 0; i < _categories.length; i++) {
                        return gen.next()._categories[category].title + " " + gen.next()._categories[category].production;
                    }
                } else {
                    throw new iteratorException();
                }
            }
        }
        videoSystem.prototype.constructor = videoSystem;

        var instance = new videoSystem();//We return the object to be a single instance.
        Object.freeze(instance);
        return instance;
    } // end singleton
    return {
		// Returns an object with the getInstance method
		getInstance: function () { 
			if (!instantiated) { //If the instantiated variable is undefined, first run, execute init.
				instantiated = init(); //instantiated contains the unique object
			}
			return instantiated; //If it is already assigned, it returns the assignment.
		}
	};
})();
