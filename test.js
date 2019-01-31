"use-strict";

//test videoSystem
function testVideoSystem() {

    //we create a variable to save the instance of the videoSystem object
    var vs = videoSystem.getInstance();

    //we assign a name to the instance
    vs.name = "Example";
    console.log("NAME OF VS: " + vs.name);

    function testCategory() {

        console.log("----START OF THE CATEGORIES TEST----");
        console.log("");
        console.log("Add a new category: " + vs.addCategory(cat1));
        console.log(cat1.toString());
        console.log("");
        console.log("Add a new category: " + vs.addCategory(cat2));
        console.log(cat2.toString());
        console.log("");
        console.log("Add a new category: " + vs.addCategory(cat3));
        console.log(cat3.toString());
        console.log("");
        console.log("Remove category: " + vs.removeCategory(cat2));
        console.log("");
    }

    function showCategories() {
        var categories = vs.categories;
        var category = categories.next();
        while (category.done !== true) {
            console.log("Name: " + category.value.name + "\nDescription: " + category.value.description);
            console.log("");
            category = categories.next();
        }
    }

    function testUser() {

        console.log("----START OF THE USER TEST----");
        console.log("");
        console.log("Add a new user: " + vs.addUser(us1));
        console.log(us1.toString());
        console.log("");
        console.log("Add a new user: " + vs.addUser(us2));
        console.log(us2.toString());
        console.log("");
        console.log("Add a new user: " + vs.addUser(us3));
        console.log(us3.toString());
        console.log("");
        console.log("Remove user: " + vs.removeUser(us2));
        console.log("");
    }

    function showUser() {
        var users = vs.users;
        var user = users.next();
        while (user.done !== true) {
            console.log("Name: " + user.value.name + "\nEmail: " + user.value.email + "\nPassword: " + user.value.password);
            console.log("");
            user = users.next();
        }
    }

    function testProduction() {

        console.log("----START OF THE PRODUCTION TEST----");
        console.log("");
        console.log("Add a new movie: " + vs.addProduction(mov1));
        console.log(mov1.toString());
        console.log("");
        console.log("Add a new movie: " + vs.addProduction(mov2));
        console.log(mov2.toString());
        console.log("");
        console.log("Add a new movie: " + vs.addProduction(mov3));
        console.log(mov3.toString());
        console.log("");
        console.log("Add a new serie: " + vs.addProduction(ser1));
        console.log(ser1.toString());
        console.log("");
        console.log("Add a new serie: " + vs.addProduction(ser2));
        console.log(ser2.toString());
        console.log("");
        console.log("Add a new serie: " + vs.addProduction(ser3));
        console.log(ser3.toString());
        console.log("");
        console.log("Remove movie: " + vs.removeProduction(mov1));
        console.log("Remove serie: " + vs.removeProduction(ser1));
        console.log("");
    }

    function showProduction() {
        var productions = vs.productions;
        var production = productions.next();
        while (production.done !== true) {
            console.log("Title: " + production.value.title
                + "\nNationality: " + production.value.nationality
                + "\nPublication: " + production.value.publication
                + "\nSynopsis: " + production.value.synopsis
                + "\nImage: " + production.value.image);
            console.log("");
            production = productions.next();
        }
    }

    function testActor() {

        console.log("----START OF THE ACTOR TEST----");
        console.log("");
        console.log("Add a new actor: " + vs.addActor(act1));
        console.log(act1.toString());
        console.log("");
        console.log("Add a new actor: " + vs.addActor(act2));
        console.log(act2.toString());
        console.log("");
        console.log("Add a new actor: " + vs.addActor(act3));
        console.log(act3.toString());
        console.log("");
        console.log("Remove actor: " + vs.removeActor(act2));
        console.log("");
    }

    function showActor() {
        var actors = vs.actors;
        var actor = actors.next();
        while (actor.done !== true) {
            console.log("Name: " + actor.value.name
                + "\nFirst lastname: " + actor.value.lastname1
                + "\nSecond lastname: " + actor.value.lastname2
                + "\nBorn: " + actor.value.born
                + "\nPicture: " + actor.value.picture);
            console.log("");
            actor = actors.next();
        }
    }

    function testDirector() {

        console.log("----START OF THE DIRECTOR TEST----");
        console.log("");
        console.log("Add a new director: " + vs.addDirector(dir1));
        console.log(dir1.toString());
        console.log("");
        console.log("Add a new director: " + vs.addDirector(dir2));
        console.log(dir2.toString());
        console.log("");
        console.log("Add a new director: " + vs.addDirector(dir3));
        console.log(dir3.toString());
        console.log("");
        console.log("Remove director: " + vs.removeDirector(dir2));
        console.log("");
    }

    function showDirector() {
        var directors = vs.directors;
        var director = directors.next();
        while (director.done !== true) {
            console.log("Name: " + director.value.name
                + "\nFirst lastname: " + director.value.lastname1
                + "\nSecond lastname: " + director.value.lastname2
                + "\nBorn: " + director.value.born
                + "\nPicture: " + director.value.picture);
            console.log("");
            director = directors.next();
        }
    }

    //testCategory()
    var cat1 = new category("accion");
    var cat2 = new category("terror");
    var cat3 = new category("science-fiction");

    console.log("");
    testCategory();
    console.log("----WE SHOW THE CATEGORIES----");
    showCategories();
    console.log("----END OF THE CATEGORIES TEST----");
    //testCategory()

    //testUser()
    var us1 = new user("user1", "user1@prueba.com", "asdRET$%356");
    var us2 = new user("user2", "user2@prueba.com", "asdRET$%356");
    var us3 = new user("user3", "user3@prueba.com", "asdRET$%356");

    console.log("");
    testUser();
    console.log("----WE SHOW THE USERS----");
    showUser();
    console.log("----END OF THE USER TEST----");
    //testUser()

    //testProduction()
    var mov1 = new movie("The lord of the rings: the fellowship of the ring", "12/19/2001");
    var mov2 = new movie("The lord of the rings: the two towers", "12/18/2002");
    var mov3 = new movie("The lord of the rings: the return of the king", "12/17/2003");

    var ser1 = new movie("Game of the thrones", "04/17/2011");
    var ser2 = new movie("One piece", "10/20/1999");
    var ser3 = new movie("Supernatural", "09/13/2005");

    console.log("");
    testProduction();
    console.log("----WE SHOW THE PRODUCTIONS----");
    showProduction();
    console.log("----END OF THE PRODUCTIONS TEST----");
    //testProduction()

    //testActor()
    var act1 = new person("Jared", "Padalecki", "07/19/1982");
    var act2 = new person("Jensen", "Ackles", "03/01/1978");
    var act3 = new person("Misha", "Collins", "08/20/1974");

    console.log("");
    testActor();
    console.log("----WE SHOW THE ACTORS----");
    showActor();
    console.log("----END OF THE ACTORS TEST----");
    //testActor()

    //testDirector()

    var dir1 = new person("Peter", "Robert", "11/31/1961");
    dir1.lastname2 = "Jackson";
    var dir2 = new person("Eiichiro", "Oda", "01/01/1975");
    var dir3 = new person("Alik", "Sakharov", "05/17/1959");

    console.log("");
    testDirector();
    console.log("----WE SHOW THE DIRECTORS----");
    showDirector();
    console.log("----END OF THE DIRECTOR TEST----");
    //testDirector()

    //assignment of elements 
    console.log("");
    console.log("----ASSIGN PRODUCTION TO CATEGORY----");
    console.log("");
    console.log("Productions assigned to category " + cat3.name + ": " + vs.assignCategory(cat3, mov1));
    console.log("Productions assigned to category " + cat2.name + ": " + vs.assignCategory(cat2, ser3));
    console.log("Productions assigned to category " + cat1.name + ": " + vs.assignCategory(cat1, ser2));
    console.log("Productions assigned to category " + cat3.name + ": " + vs.assignCategory(cat3, mov2));
    console.log("");
    console.log("----END ASSIGN PRODUCTION TO CATEGORY----");

    console.log("");
    console.log("----ASSIGN PRODUCTION TO DIRECTOR----");
    console.log("");
    console.log("Productions assigned to director " + dir3.name + " " + dir3.lastname1 + ": " + vs.assignDirector(dir3, mov1));
    console.log("Productions assigned to director " + dir2.name + " " + dir2.lastname1 + ": " + vs.assignDirector(dir2, ser3));
    console.log("Productions assigned to director " + dir1.name + " " + dir1.lastname2 + ": " + vs.assignDirector(dir1, ser2));
    console.log("Productions assigned to director " + dir3.name + " " + dir3.lastname1 + ": " + vs.assignDirector(dir3, mov2));
    console.log("");
    console.log("----END ASSIGN PRODUCTION TO DIRECTOR----");

    console.log("");
    console.log("----ASSIGN PRODUCTION TO ACTOR----");
    console.log("");
    console.log("Productions assigned to actor " + act3.name + " " + act3.lastname1 + ": " + vs.assignDirector(act3, mov1));
    console.log("Productions assigned to actor " + act2.name + " " + act2.lastname1 + ": " + vs.assignDirector(act2, ser3));
    console.log("Productions assigned to actor " + act1.name + " " + act1.lastname1 + ": " + vs.assignDirector(act1, ser2));
    console.log("Productions assigned to actor " + act3.name + " " + act3.lastname1 + ": " + vs.assignDirector(act3, mov2));
    console.log("");
    console.log("----END ASSIGN PRODUCTION TO ACTOR----");
    //assignment of elements 
}
window.onload = testVideoSystem;