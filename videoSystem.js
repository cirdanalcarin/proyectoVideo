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

function InvalidCategoryException(param) {
    this.name = "InvalidCategoryException";
    this.message = "The Category is invalid";
}
InvalidCategoryException.prototype = new baseException();
InvalidCategoryException.prototype.constructor = InvalidCategoryException;
InvalidCategoryException.prototype.toString = function () {
    return baseException.toString.call(this);
}

function InvalidUserException(param) {
    this.name = "InvalidUserException";
    this.message = "The User is invalid";
}
InvalidUserException.prototype = new baseException();
InvalidUserException.prototype.constructor = InvalidUserException;
InvalidUserException.prototype.toString = function () {
    return baseException.toString.call(this);
}

function InvalidProductionException(param) {
    this.name = "InvalidProductionException";
    this.message = "The Production is invalid";
}
InvalidProductionException.prototype = new baseException();
InvalidProductionException.prototype.constructor = InvalidProductionException;
InvalidProductionException.prototype.toString = function () {
    return baseException.toString.call(this);
}

function InvalidActorException(param) {
    this.name = "InvalidActorException";
    this.message = "The Actor is invalid";
}
InvalidActorException.prototype = new baseException();
InvalidActorException.prototype.constructor = InvalidActorException;
InvalidActorException.prototype.toString = function () {
    return baseException.toString.call(this);
}

function InvalidDirectorException(param) {
    this.name = "InvalidDirectorException";
    this.message = "The Director is invalid";
}
InvalidDirectorException.prototype = new baseException();
InvalidDirectorException.prototype.constructor = InvalidDirectorException;
InvalidDirectorException.prototype.toString = function () {
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
            if (!(this instanceof videoSystem)) {
                throw new invalidAccesConstructor();
            }

            //private attributes
            _name = "Anonimous";
            _users = [];
            _productions = [];
            _categories = [];
            _actors = [];
            _directors = [];

            //Getter name and Setter name
            Object.defineProperty(this, 'name', {
                get: function () { return _name },
                set: function (newName = "Anonimous") {
                    newName = newName.trim();
                    if (newName === 'undefined' || newName === 'Anon') throw new nameEmptyException();
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
            this.addCategory = function (cat) {
                if (!(cat instanceof category)) {
                    throw new objectIsNullException(cat);
                }
                var position = getPositionCategory(cat); //search object in array

                if (position === -1) {
                    _categories.push({
                        categories: cat,
                        productions: []
                    });

                } else {
                    throw new objectExistsException();
                }
                return _categories.length;
            }

            this.removeCategory = function (cat) {
                if (!(cat instanceof category)) {
                    throw new objectIsNullException(cat);
                }

                var position = getPositionCategory(cat); //search object in array
                if (position !== -1) {
                    if (cat.name !== _categories.name) {
                        _categories.splice(position, 1);
                    } else {
                        throw new objectDoesntExistsException();
                    }
                }
                return _categories.length;

            }

            function getPositionCategory(cat) {
                if (!(cat instanceof category)) {
                    throw new InvalidCategoryException(cat);
                }

                function compareElements(element) {
                    return (element.categories.name === cat.name);
                }

                return _categories.findIndex(compareElements);
            }

            //create default category
            var defaultCategory = new category("Anonimous Category");
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
            this.addUser = function (usr) {
                if (!(usr instanceof user)) {
                    throw new objectIsNullException(usr);
                }
                var position = getPositionUsuer(usr); //search object in array

                if (position === -1) {
                    _users.push({
                        users: usr
                    });
                } else {
                    throw new objectExistsException();
                }
                return _users.length;
            }


            this.removeUser = function (usr) {
                if (!(usr instanceof user)) {
                    throw new objectIsNullException(usr);
                }

                var position = getPositionUsuer(usr); //search object in array
                if (position !== -1) {
                    if (usr.name !== _users.name) {
                        _users.splice(position, 1);
                    } else {
                        throw new objectDoesntExistsException();
                    }
                    return _users.length;
                }
            }

            function getPositionUsuer(usr) {
                if (!(usr instanceof user)) {
                    throw new InvalidUserException(usr);
                }

                function compareElements(element) {
                    return ((element.users.name === usr.name) && (element.users.email === usr.email));
                }

                return _users.findIndex(compareElements);
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
            this.addProduction = function (prod) {
                if (!(prod instanceof production)) {
                    throw new objectIsNullException(prod);
                }
                var position = getPositionProduction(prod); //search object in array

                if (position === -1) {
                    _productions.push({
                        productions: prod
                    });
                } else {
                    throw new objectExistsException();
                }
                return _productions.length;
            }

            this.removeProduction = function (prod) {
                if (!(prod instanceof production)) {
                    throw new objectIsNullException(prod);
                }

                var position = getPositionProduction(prod); //search object in array
                if (position !== -1) {
                    if (prod.title !== _productions.title) {
                        _productions.splice(position, 1);
                    } else {
                        throw new objectDoesntExistsException();
                    }
                }
                return _productions.length;
            }

            function getPositionProduction(prod) {
                if (!(prod instanceof production)) {
                    throw new InvalidProductionException(prod);
                }

                function compareElements(element) {
                    return (element.productions.title === prod.title);
                }

                return _productions.findIndex(compareElements);
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
            this.addActor = function (per) {
                if (!(per instanceof person)) {
                    throw new objectIsNullException(per);
                }
                var position = getPositionActor(per); //search object in array

                if (position === -1) {
                    _actors.push({
                        actors: per,
                        productions: []
                    });
                } else {
                    throw new objectExistsException();
                }
                return _actors.length;
            }

            this.removeActor = function (per) {
                if (!(per instanceof person)) {
                    throw new objectIsNullException(per);
                }

                var position = getPositionActor(per); //search object in array
                if (position !== -1) {
                    if (per.name !== _actors.name) {
                        _actors.splice(position, 1);
                    } else {
                        throw new objectDoesntExistsException();
                    }
                    return _actors.length;
                }
            }

            function getPositionActor(per) {
                if (!(per instanceof person)) {
                    throw new InvalidActorException(per);
                }

                function compareElements(element) {
                    return (element.actors.name === per.name);
                }

                return _actors.findIndex(compareElements);
            }

            //Getter director
            Object.defineProperty(this, 'directors', {
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
            this.addDirector = function (per) {
                if (!(per instanceof person)) {
                    throw new objectIsNullException(per);
                }
                var position = getPositionDirector(per); //search object in array

                if (position === -1) {
                    _directors.push({
                        directors: per,
                        productions: []
                    });

                    return _directors.length;
                } else {
                    throw new objectExistsException();
                }
            }

            this.removeDirector = function (per) {
                if (!(per instanceof person)) {
                    throw new objectIsNullException(per);
                }

                var position = getPositionDirector(per); //search object in array
                if (position !== -1) {
                    if (per.name !== _directors.name) {
                        _directors.splice(position, 1);
                    } else {
                        throw new objectDoesntExistsException();
                    }
                    return _directors.length;
                }
            }

            function getPositionDirector(per) {
                if (!(per instanceof person)) {
                    throw new InvalidDirectorException(per);
                }

                function compareElements(element) {
                    return (element.directors.name === per.name);
                }

                return _directors.findIndex(compareElements);
            }

            //methods of assignment
            this.assignCategory = function (cat, prod) {
                if (cat === null) {
                    throw new objectIsNullException();
                }
                if (prod === null) {
                    throw new objectIsNullException();
                }
                if (cat === null || cat === 'undefined' || cat === '') {
                    cat = this.defaultCategory;
                }

                // We obtain position of the category. If it does not exist it is added
                var searchCategory = getPositionCategory(cat);
                if (searchCategory === -1) {
                    searchCategory = this.addCategory(cat) - 1;
                }
                // We obtain position of the production. If it does not exist it is added
                var positionProduction = getPositionProduction(prod);
                if (positionProduction === -1) {
                    positionProduction = this.addProduction(prod) - 1;
                }
                var searchProduction = getPositionProductionCategory(prod, _categories[searchCategory].productions);
                if (searchProduction === -1) {
                    _categories[searchCategory].productions.push({
                        categories: cat,
                        productions: [prod]
                    });
                } else {
                    throw new objectExistsException(prod);
                }
                return _categories[searchCategory].productions.length;
            }

            function getPositionProductionCategory(prod, cat) {
                if (!(prod instanceof production)) {
                    throw new InvalidProductionException(prod);
                }

                function compareElements(element) {
                    return (element.productions.title === prod.title);
                }

                return cat.findIndex(compareElements);
            }

            /* this.deassignCategory = function (cat, prod) {
                 if (cat === null) {
                     throw new objectIsNullException();
                 }
                 if (prod === null) {
                     throw new objectIsNullException();
                 }
                 var searchCategory = getPositionCategory(cat);
                 if (searchCategory !== -1) {
                     var searchProduction = getPositionProductionCategory(prod, _categories[searchCategory].productions);
                     if (searchProduction !== -1) {
                         _categories[searchCategory].productions.splice(searchProduction, 1);
                     } else {
                         throw new objectDoesntExistsException(prod);
                     }
                 } else {
                     throw new objectDoesntExistsException(cat);
                 }
                 return _categories[searchCategory].productions.length;
             } */

            this.assignDirector = function (per, prod) {
                if (per === null) {
                    throw new objectIsNullException();
                }
                if (prod === null) {
                    throw new objectIsNullException();
                }

                // We obtain position of the person. If it does not exist it is added
                var searchPerson = getPositionDirector(per);
                if (searchPerson === -1) {
                    searchPerson = this.addDirector(per) - 1;
                }
                // We obtain position of the production. If it does not exist it is added
                var positionProduction = getPositionProduction(prod);
                if (positionProduction === -1) {
                    positionProduction = this.addProduction(prod) - 1;
                }
                var searchProduction = getPositionProductionPerson(prod, _directors[searchPerson].productions);
                if (searchProduction === -1) {
                    _directors[searchPerson].productions.push({
                        directors: per,
                        productions: [prod]
                    });
                } else {
                    throw new objectExistsException(prod);
                }
                return _directors[searchPerson].productions.length;
            }

            function getPositionProductionPerson(prod, per) {
                if (!(prod instanceof production)) {
                    throw new InvalidProductionException(prod);
                }

                function compareElements(element) {
                    return (element.productions.title === prod.title);
                }

                return per.findIndex(compareElements);
            }

            /*  this.deassignDirector = function (person, production) {
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
             } */

            this.assignActor = function (per, prod) {
                if (per === null) {
                    throw new objectIsNullException();
                }
                if (prod === null) {
                    throw new objectIsNullException();
                }

                // We obtain position of the person. If it does not exist it is added
                var searchPerson = getPositionActor(per);
                if (searchPerson === -1) {
                    searchPerson = this.addActor(per) - 1;
                }
                // We obtain position of the production. If it does not exist it is added
                var positionProduction = getPositionProduction(prod);
                if (positionProduction === -1) {
                    positionProduction = this.addProduction(prod) - 1;
                }
                var searchProduction = getPositionProductionPerson(prod, _actors[searchPerson].productions);
                if (searchProduction === -1) {
                    _actors[searchPerson].productions.push({
                        actors: per,
                        productions: [prod]
                    });
                } else {
                    throw new objectExistsException(prod);
                }
                return _actors[searchPerson].productions.length;
            }

            /* this.deassignActor = function (person, production) {
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
             } */

            /* this.getCast = function (prod) {
                if (!(prod instanceof production)) {
                    throw new objectIsNullException();
                }

                var productionPosition = getPositionProduction(prod);
                if (productionPosition === -1) {
                    throw new objectDoesntExistsException(prod);
                }
                var nextIndex = 0;
                return {
                    next: function(){
                        while(nextIndex < _productions[productionPosition]);
                    }
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
            } */
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
