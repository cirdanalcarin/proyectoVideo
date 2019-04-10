"use-strict";

//test videoSystem
function testVideoSystem() {

    //testCategory()
    console.log("----START OF THE CATEGORIES TEST----");
    try {
        var cat1 = new category("accion");
        var cat2 = new category("terror");
        var cat3 = new category("science-fiction");
        var cat5 = new category("adventure");
        console.log(cat1.toString());
        console.log(cat2.toString());
        console.log(cat3.toString());
        console.log(cat5.toString());
    } catch (error) {
        console.log(error.toString());
    }

    try {
        var cat4 = new category();
        console.log(cat4.toString());
    } catch (error) {
        console.log("create the category error");
        console.log(error.toString());
    }
    console.log("----END OF THE CATEGORIES TEST----");
    //testCategory()

    //testUser()
    console.log("");
    console.log("----START OF THE USER TEST----");
    try {
        var us1 = new user("user1", "user1@prueba.com", "asdRET$%356");
        var us2 = new user("user2", "user2@prueba.com", "asdRET$%356");
        var us3 = new user("user3", "user3@prueba.com", "asdRET$%356");
        console.log(us1.toString());
        console.log(us2.toString());
        console.log(us3.toString());
    } catch (error) {
        console.log(error.toString());
    }

    try {
        var us4 = new user();
        console.log(us4.toString());
    } catch (error) {
        console.log("create the user error");
        console.log(error.toString());
    }

    console.log("----END OF THE USER TEST----");
    //testUser()

    //testResource()
    console.log("");
    console.log("----START OF THE RESOURCE TEST----");
    try {
        var res1 = new resource(178, "ftp://resources/resource1.mov", ["Spanish", "English", "French"], ["Spanish", "English", "French"]);
        var res2 = new resource(179, "ftp://resources/resource2.mov", ["Spanish", "English", "French"], ["Spanish", "English", "French"]);
        var res3 = new resource(179, "ftp://resources/resource3.mov", ["Spanish", "English", "French"], ["Spanish", "English", "French"]);
        console.log(res1.toString());
        console.log(res2.toString());
        console.log(res3.toString());
    } catch (error) {
        console.log(error.toString());
    }

    try {
        var res4 = new resource();
        console.log(res4.toString());
    } catch (error) {
        console.log("create the resource error");
        console.log(error.toString());
    }
    console.log("----END OF THE RESOURCE TEST----");
    //testResource()

    //testCoords()
    console.log("");
    console.log("----START OF THE COORDS TEST----");
    try {
        var coord1 = new coords(34, 54);
        var coord2 = new coords(2, 125);
        console.log(coord1.toString());
        console.log(coord2.toString());
    } catch (error) {
        console.log(error.toString());
    }
    try {
        var coord3 = new coords(-91, 181);
        console.log(coord3.toString());
    } catch (error) {
        console.log("create the coords error");
        console.log(error.toString());
    }
    console.log("----END OF THE COORDS TEST----")
    //testCoords()

    //testSeason()
    console.log("");
    console.log("----START OF THE SEASON TEST----");
    try {
        var season1 = new season("Season 1", ["Episode 1", res1, [coord1]]);
        var season2 = new season("Season 2", ["Episode 1", res1, [coord2],
            "Episode 2", res2, [coord1]]);
        console.log(season1.toString());
        console.log(season2.toString());
    } catch (error) {
        console.log(error.toString());
    }

    try {
        var season3 = new season();
        console.log(season3.toString());
    } catch (error) {
        console.log("create the season error");
        console.log(error.toString());
    }
    console.log("----END OF THE SEASON TEST----");
    //testSeason()

    //testProduction()
    console.log("");
    console.log("----START OF THE PRODUCTION TEST----");
    try {

        var mov1 = new movie("The lord of the rings: the fellowship of the ring", "", "12/19/2001", "", "", res1, [coord1]);
        var mov2 = new movie("The lord of the rings: the two towers", "", "12/18/2002", "", "", res2, [new coords(87, 12)]);
        var mov3 = new movie("The lord of the rings: the return of the king", "", "12/17/2003", "", "", res3, [new coords(34, 98)]);
        console.log("");

        var ser1 = new serie("Game of the thrones", "", "04/17/2011", "", "", season1);
        var ser2 = new serie("One piece", "", "10/20/1999", "", "", season2);
        var ser3 = new serie("Supernatural", "", "09/13/2005", "", "", season1);
        console.log("");
        console.log("**** Objets movie ****");
        console.log(mov1.toString());
        console.log(mov2.toString());
        console.log(mov3.toString());
        console.log("");
        console.log("**** Objets serie ****");
        console.log(ser1.toString());
        console.log(ser2.toString());
        console.log(ser3.toString());
    } catch (error) {
        console.log(error.toString());
    }

    try {
        var mov4 = new movie();
        var ser4 = new serie();
        console.log(mov4.toString());
        console.log(ser4.toString());
    } catch (error) {
        console.log("create the production error");
        console.log(error.toString());
    }
    console.log("----END OF THE PRODUCTIONS TEST----");
    //testProduction()

    //testActor()
    console.log("");
    console.log("----START OF THE ACTOR/ACTRESS TEST----");
    try {
        var act1 = new person("Jared", "Padalecki", "", "07/19/1982");
        var act2 = new person("Jensen", "Ackles", "", "03/01/1978");
        var act3 = new person("Misha", "Collins", "", "08/20/1974");
        console.log(act1.toString());
        console.log(act2.toString());
        console.log(act3.toString());
    } catch (error) {
        console.log(error.toString());
    }

    try {
        var act4 = new person();
        console.log(act4.toString());
    } catch (error) {
        console.log("create the production error");
        console.log(error.toString());
    }
    console.log("----END OF THE ACTOR/ACTRESS TEST----");
    //testActor()

    //testDirector()
    console.log("");
    console.log("----START OF THE DIRECTOR TEST----");
    try {
        var dir1 = new person("Peter", "Jackson", "", "11/31/1961");
        var dir2 = new person("Eiichiro", "Oda", "", "01/01/1975");
        var dir3 = new person("Alik", "Sakharov", "", "05/17/1959");

        console.log(dir1.toString());
        console.log(dir2.toString());
        console.log(dir3.toString());
    } catch (error) {
        console.log(error.toString());
    }

    try {
        var dir4 = new person();
        console.log(dir4.toString());
    } catch (error) {
        console.log("create the production error");
        console.log(error.toString());
    }
    console.log("----END OF THE DIRECTOR TEST----");
    //testDirector()

    console.log("");
    console.log("----START THE VIDEO SYSTEM TEST----");
    //Create VideoSystem
    try {
        //we create a variable to save the instance of the videoSystem object
        var vs = videoSystem.getInstance();

        //we assign a name to the instance
        vs.name = "The Shire";
        console.log("NAME OF VS: " + vs.name);
    } catch (error) {
        console.log(error.toString());
    }

    console.log("");


    console.log("----START ADD CATEGORES----");
    try {
        console.log("Add category: " + cat1.name + ", counter: " + vs.addCategory(cat1));
        console.log("Add category: " + cat2.name + ", counter: " + vs.addCategory(cat2));
        console.log("Add category: " + cat3.name + ", counter: " + vs.addCategory(cat3));
    } catch (error) {
        console.log(error.toString());
    }

    //we go through the categories
    console.log("");
    console.log("----categories-----");

    try {
        var cats = vs.categories;
        var cat = cats.next();
        while (cat.done !== true) {
            console.log('' + cat.value + "\n");
            cat = cats.next();
        }
    } catch (error) {
        console.log(error.toString());
    }

    console.log("----categories-----");

    //we add an existing category
    console.log("");
    try {
        console.log("----Add existing category-----")
        console.log("Add category: " + cat1.name + ", counter: " + vs.addCategory(cat1));
    } catch (error) {
        console.log(error.toString());
    }
    try {
        console.log("");
        console.log("----remove category-----")
        console.log("Remove category: " + cat2.name + ", counter: " + vs.removeCategory(cat2));
    } catch (error) {
        console.log(error.toString());
    }

    //we go through the categories
    console.log("");
    console.log("----categories-----");

    try {
        var cats = vs.categories;
        var cat = cats.next();
        while (cat.done !== true) {
            console.log('' + cat.value + "\n");
            cat = cats.next();
        }
    } catch (error) {
        console.log(error.toString());
    }

    console.log("----categories-----");

    try {
        console.log("");
        console.log("----remove category that does not exist-----")
        console.log("Remove category: " + cat2.name + ", counter: " + vs.removeCategory(cat2));
    } catch (error) {
        console.log(error.toString());
    }

    console.log("----END ADD CATEGORIES----");

    console.log("");
    console.log("----START ADD USERS----");
    try {
        console.log("Add user: " + us1.name + " " + us1.email + ", counter: " + vs.addUser(us1));
        console.log("Add user: " + us2.name + " " + us2.email + ", counter: " + vs.addUser(us2));
        console.log("Add user: " + us3.name + " " + us3.email + ", counter: " + vs.addUser(us3));
    } catch (error) {
        console.log(error.toString());
    }

    //we go through the users
    console.log("");
    console.log("----users-----");

    try {
        var us = vs.users;
        var u = us.next();
        while (u.done !== true) {
            console.log('' + u.value + "\n");
            u = us.next();
        }
    } catch (error) {
        console.log(error.toString());
    }

    console.log("----users-----");

    //we add an existing user
    console.log("");
    try {
        console.log("----Add existing user-----")
        console.log("Add user: " + us1.name + " " + us1.email + ", counter: " + vs.addUser(us1));
    } catch (error) {
        console.log(error.toString());
    }
    try {
        console.log("");
        console.log("----remove user-----")
        console.log("Remove user: " + us2.name + " " + us2.email + ", counter: " + vs.removeUser(us2));
    } catch (error) {
        console.log(error.toString());
    }

    //we go through the users
    console.log("");
    console.log("----users-----");

    try {
        var us = vs.users;
        var u = us.next();
        while (u.done !== true) {
            console.log('' + u.value + "\n");
            u = us.next();
        }
    } catch (error) {
        console.log(error.toString());
    }

    console.log("----users-----");

    try {
        console.log("");
        console.log("----remove user that does not exist-----")
        console.log("Remove user: " + us2.name + " " + us2.email + ", counter: " + vs.removeUser(us2));
    } catch (error) {
        console.log(error.toString());
    }
    console.log("----END ADD USERS----");

    console.log("");
    console.log("----START ADD PRODUCTIONS----");
    try {
        console.log("Add production: " + mov1.title + ", counter: " + vs.addProduction(mov1));
        console.log("Add production: " + mov2.title + ", counter: " + vs.addProduction(mov2));
        console.log("Add production: " + mov3.title + ", counter: " + vs.addProduction(mov3));
        console.log("Add production: " + ser1.title + ", counter: " + vs.addProduction(ser1));
        console.log("Add production: " + ser2.title + ", counter: " + vs.addProduction(ser2));
        console.log("Add production: " + ser3.title + ", counter: " + vs.addProduction(ser3));
    } catch (error) {
        console.log(error.toString());
    }

    //we go through the productions
    console.log("");
    console.log("----productions-----");

    var productions = vs.productions;
    var production = productions.next();
    while (production.done !== true) {
        console.log(" " + production.value + "\n");
        production = productions.next();
    }

    console.log("----productions-----");

    //we add an existing production
    try {
        console.log("----Add existing production-----")
        console.log("Add production: " + mov1.title + ", counter: " + vs.addProduction(mov1));
        console.log("Add production: " + ser1.title + ", counter: " + vs.addProduction(ser1));
    } catch (error) {
        console.log(error.toString());
    }
    try {
        console.log("");
        console.log("----remove production-----")
        console.log("Remove production: " + mov2.title + ", counter: " + vs.removeProduction(mov2));
        console.log("Remove production: " + ser2.title + ", counter: " + vs.removeProduction(ser2));
    } catch (error) {
        console.log(error.toString());
    }

    //we go through the productions
    console.log("----productions-----");

    var productions = vs.productions;
    var production = productions.next();
    while (production.done !== true) {
        console.log(" " + production.value + "\n");
        production = productions.next();
    }

    console.log("----productions-----");

    try {
        console.log("");
        console.log("----remove production that does not exist-----")
        console.log("Remove production: " + mov2.title + ", counter: " + vs.removeProduction(mov2));
    } catch (error) {
        console.log(error.toString());
    }

    try {
        console.log("");
        console.log("----remove production that does not exist-----")
        console.log("Remove production: " + ser2.title + ", counter: " + vs.removeProduction(ser2));
    } catch (error) {
        console.log(error.toString());
    }

    console.log("----END ADD PRODUCTIONS----");

    console.log("");
    console.log("----START ADD ACTOR/ACTRESS----");
    try {
        console.log("Add actor: " + act1.name + " " + act1.lastname1 + ", counter: " + vs.addActor(act1));
        console.log("Add actor: " + act2.name + " " + act2.lastname1 + ", counter: " + vs.addActor(act2));
        console.log("Add actor: " + act3.name + " " + act3.lastname1 + ", counter: " + vs.addActor(act3));
    } catch (error) {
        console.log(error.toString());
    }

    //we go through the actors
    console.log("----actors-----");

    var actors = vs.actors;
    var actor = actors.next();
    while (actor.done !== true) {
        console.log(" " + actor.value + "\n");
        actor = actors.next();
    }

    console.log("----actors-----");

    //we add an existing actor
    try {
        console.log("----Add existing actor-----")
        console.log("Add actor: " + act1.name + " " + act1.lastname1 + ", counter: " + vs.addActor(act1));
    } catch (error) {
        console.log(error.toString());
    }
    try {
        console.log("");
        console.log("----remove actor-----")
        console.log("Remove actor: " + act2.name + " " + act2.lastname1 + ", counter: " + vs.removeActor(act2));
    } catch (error) {
        console.log(error.toString());
    }

    //we go through the actors
    console.log("----actors-----");

    var actors = vs.actors;
    var actor = actors.next();
    while (actor.done !== true) {
        console.log(" " + actor.value + "\n");
        actor = actors.next();
    }

    console.log("----actors-----");

    try {
        console.log("");
        console.log("----remove actor that does not exist-----")
        console.log("Remove actor: " + act2.name + " " + act2.lastname1 + ", counter: " + vs.removeActor(act2));
    } catch (error) {
        console.log(error.toString());
    }

    try {
        console.log("");
        console.log("----remove actor that does not exist-----")
        console.log("Remove actor: " + act2.name + " " + act2.lastname1 + ", counter: " + vs.removeActor(act2));
    } catch (error) {
        console.log(error.toString());
    }

    console.log("----END ADD ACTOR/ACTRESS----");

    console.log("");
    console.log("----START ADD DIRECTOR----");
    try {
        console.log("Add director: " + dir1.name + " " + dir1.lastname1 + ", counter: " + vs.addDirector(dir1));
        console.log("Add director: " + dir2.name + " " + dir2.lastname1 + ", counter: " + vs.addDirector(dir2));
        console.log("Add director: " + dir3.name + " " + dir3.lastname1 + ", counter: " + vs.addDirector(dir3));
    } catch (error) {
        console.log(error.toString());
    }

    //we go through the directors
    console.log("----directors-----");

    var directors = vs.directors;
    var director = directors.next();
    while (director.done !== true) {
        console.log(" " + director.value + "\n");
        director = directors.next();
    }

    console.log("----directors-----");

    //we add an existing director
    try {
        console.log("----Add existing director-----")
        console.log("Add director: " + dir1.name + " " + dir1.lastname1 + ", counter: " + vs.addDirector(dir1));
    } catch (error) {
        console.log(error.toString());
    }
    try {
        console.log("");
        console.log("----remove director-----")
        console.log("Remove director: " + dir2.name + " " + dir2.lastname1 + ", counter: " + vs.removeDirector(dir2));
    } catch (error) {
        console.log(error.toString());
    }

    //we go through the actors
    console.log("----directors-----");

    var directors = vs.directors;
    var director = directors.next();
    while (director.done !== true) {
        console.log(" " + director.value + "\n");
        director = directors.next();
    }

    console.log("----directors-----");

    try {
        console.log("");
        console.log("----remove director that does not exist-----")
        console.log("Remove director: " + dir2.name + " " + dir2.lastname1 + ", counter: " + vs.removeDirector(dir2));
    } catch (error) {
        console.log(error.toString());
    }

    try {
        console.log("");
        console.log("----remove director that does not exist-----")
        console.log("Remove director: " + dir2.name + " " + dir2.lastname1 + ", counter: " + vs.removeDirector(dir2));
    } catch (error) {
        console.log(error.toString());
    }
    console.log("----END ADD DIRECTOR----");

    //assignment of elements
    console.log("");
    console.log("----ASSIGN PRODUCTION TO CATEGORY----");
    try {
        console.log("");
        console.log("Productions " + mov1.title + " assigned to category " + cat3.name + ": " + vs.assignCategory(cat3, mov1));
        console.log("Productions " + ser2.title + " assigned to category " + cat1.name + ": " + vs.assignCategory(cat1, ser2));
        console.log("Productions " + mov2.title + " assigned to category " + cat3.name + ": " + vs.assignCategory(cat3, mov3));
        console.log("");
    } catch (error) {
        console.log(error.toString());
    }

    //we assign an existing category
    try {
        console.log("----Assign existing category-----");
        console.log("Productions " + mov1.title + " assigned to category " + cat3.name + ": " + vs.assignCategory(cat3, mov1));
    } catch (error) {
        console.log(error.toString());
    }

    console.log("");
    console.log("----Show the productions of the category: " + cat3.name + "----");
    var productions = vs.getProductionsCategory(cat3);
    var production = productions.next();
    while (production.done !== true) {
        console.log(" " + production.value + "\n");
        production = productions.next();
    }

    console.log("");
    console.log("----Show the productions of the category: " + cat1.name + "----");
    var productions = vs.getProductionsCategory(cat3);
    var production = productions.next();
    while (production.done !== true) {
        console.log(" " + production.value + "\n");
        production = productions.next();
    }

    try {
        console.log("----Deassign category-----")
        console.log("Productions " + mov1.title + " assigned to category " + cat3.name + ": " + vs.deassignCategory(cat3, mov1));
    } catch (error) {
        console.log(error.toString());
    }

    try {
        console.log("----Deassign existing category-----")
        console.log("Productions " + mov1.title + " assigned to category " + cat3.name + ": " + vs.deassignCategory(cat3, mov1));
    } catch (error) {
        console.log(error.toString());
    }

    console.log("");
    console.log("----Show the productions of the category: " + cat3.name + "----");
    var productions = vs.getProductionsCategory(cat3);
    var production = productions.next();
    while (production.done !== true) {
        console.log(" " + production.value + "\n");
        production = productions.next();
    }

    console.log("");
    console.log("----Show the productions of the category: " + cat1.name + "----");
    var productions = vs.getProductionsCategory(cat1);
    var production = productions.next();
    while (production.done !== true) {
        console.log(" " + production.value + "\n");
        production = productions.next();
    }
    console.log("----END ASSIGN PRODUCTION TO CATEGORY----");

    console.log("");
    console.log("----ASSIGN PRODUCTION TO DIRECTOR----");
    try {
        console.log("");
        console.log("Productions " + mov1.title + " assigned to director " + dir3.name + " " + dir3.lastname1 + ": " + vs.assignDirector(dir3, mov1));
        console.log("Productions " + ser2.title + " assigned to director " + dir1.name + " " + dir1.lastname1 + ": " + vs.assignDirector(dir1, ser2));
        console.log("Productions " + mov2.title + " assigned to director " + dir3.name + " " + dir3.lastname1 + ": " + vs.assignDirector(dir3, mov2));
        console.log("");
    } catch (error) {
        console.log(error.toString());
    }

    //we assign an existing category
    try {
        console.log("----Assign existing director-----")
        console.log("Productions " + mov1.title + " assigned to director " + dir3.name + " " + dir3.lastname1 + ": " + vs.assignDirector(dir3, mov1));
    } catch (error) {
        console.log(error.toString());
    }

    console.log("");
    console.log("----Show the productions of the director: " + dir3.name + " " + dir3.lastname1 + "----");
    var productions = vs.getProductionsDirector(dir3);
    var production = productions.next();
    while (production.done !== true) {
        console.log(" " + production.value + "\n");
        production = productions.next();
    }

    console.log("");
    console.log("----Show the productions of the director: " + dir1.name + " " + dir1.lastname1 + "----");
    var productions = vs.getProductionsDirector(dir1);
    var production = productions.next();
    while (production.done !== true) {
        console.log(" " + production.value + "\n");
        production = productions.next();
    }

    try {
        console.log("----Deassign director-----")
        console.log("Productions " + mov1.title + " deassigned to director " + dir3.name + " " + dir3.lastname1 + ": " + vs.deassignDirector(dir3, mov1));
    } catch (error) {
        console.log(error.toString());
    }

    try {
        console.log("----Deassign existing director-----")
        console.log("Productions " + mov1.title + " deassigned to director " + dir3.name + " " + dir3.lastname1 + ": " + vs.deassignDirector(dir3, mov1));
    } catch (error) {
        console.log(error.toString());
    }

    console.log("");
    console.log("----Show the productions of the director: " + dir3.name + " " + dir3.lastname1 + "----");
    var productions = vs.getProductionsDirector(dir3);
    var production = productions.next();
    while (production.done !== true) {
        console.log(" " + production.value + "\n");
        production = productions.next();
    }

    console.log("");
    console.log("----Show the productions of the director: " + dir1.name + " " + dir1.lastname1 + "----");
    var productions = vs.getProductionsDirector(dir1);
    var production = productions.next();
    while (production.done !== true) {
        console.log(" " + production.value + "\n");
        production = productions.next();
    }
    console.log("----END ASSIGN PRODUCTION TO DIRECTOR----");

    console.log("");
    console.log("----ASSIGN PRODUCTION TO ACTOR----");
    try {
        console.log("");
        console.log("Productions " + mov1.title + " assigned to actor " + act3.name + " " + act3.lastname1 + ": " + vs.assignActor(act3, mov1));
        console.log("Productions " + ser2.title + " assigned to actor " + act1.name + " " + act1.lastname1 + ": " + vs.assignActor(act1, ser2));
        console.log("Productions " + mov1.title + " assigned to actor " + act3.name + " " + act3.lastname1 + ": " + vs.assignActor(act3, mov2));
        console.log("Productions " + mov1.title + " assigned to actor " + act1.name + " " + act1.lastname1 + ": " + vs.assignActor(act1, mov1));
        console.log("");
    } catch (error) {
        console.log(error.toString());
    }

    //we assign an existing actor
    try {
        console.log("----Assign existing actor-----")
        console.log("Production " + mov1.title + " assigned to actor " + act3.name + " " + act3.lastname1 + ": " + vs.assignActor(act3, mov1));
    } catch (error) {
        console.log(error.toString());
    }

    console.log("");
    console.log("----Show the productions of the actor: " + act1.name + " " + act1.lastname1 + "----");
    var productions = vs.getProductionsActor(act1);
    var production = productions.next();
    while (production.done !== true) {
        console.log(" " + production.value + "\n");
        production = productions.next();
    }

    console.log("");
    console.log("----Show the productions of the actor: " + act3.name + " " + act3.lastname1 + "----");
    var productions = vs.getProductionsActor(act3);
    var production = productions.next();
    while (production.done !== true) {
        console.log(" " + production.value + "\n");
        production = productions.next();
    }

    console.log("");
    try {
        console.log("----Deassign Actor-----")
        console.log("Productions " + mov1.title + " deassigned to actor " + act3.name + " " + act3.lastname1 + ": " + vs.deassignActor(act3, mov1));
    } catch (error) {
        console.log(error.toString());
    }

    console.log("");
    try {
        console.log("----Deassign existing Actor-----")
        console.log("Productions " + mov1.title + " deassigned to actor " + act3.name + " " + act3.lastname1 + ": " + vs.deassignActor(act3, mov1));
    } catch (error) {
        console.log(error.toString());
    }

    console.log("");
    console.log("----Show the productions of the actor: " + act1.name + " " + act1.lastname1 + "----");
    var productions = vs.getProductionsActor(act1);
    var production = productions.next();
    while (production.done !== true) {
        console.log(" " + production.value + "\n");
        production = productions.next();
    }

    console.log("");
    console.log("----Show the productions of the actor: " + act3.name + " " + act3.lastname1 + "----");
    var productions = vs.getProductionsActor(act3);
    var production = productions.next();
    while (production.done !== true) {
        console.log(" " + production.value + "\n");
        production = productions.next();
    }
    console.log("----END ASSIGN PRODUCTION TO ACTOR----");
    //assignment of elements 

    //get cast of production
    console.log("");
    console.log("----START GET CAST OF THE PRODUCTION----");
    console.log("----Show cast of the production: " + mov1.title + "----");
    var actors = vs.getCast(mov1);
    var actor = actors.next();
    while (actor.done !== true) {
        console.log("" + actor.value);
        actor = actors.next();
    }

    console.log("");
    console.log("----Show cast of the production: " + mov2.title + "----");
    var actors = vs.getCast(mov2);
    var actor = actors.next();
    while (actor.done !== true) {
        console.log("" + actor.value);
        actor = actors.next();
    }

    console.log("");
    console.log("----Show cast of the production: " + mov3.title + "----");
    var actors = vs.getCast(mov3);
    var actor = actors.next();
    while (actor.done !== true) {
        console.log("" + actor.value);
        actor = actors.next();
    }

    console.log("");
    console.log("----Show cast of the production: " + ser1.title + "----");
    var actors = vs.getCast(ser1);
    var actor = actors.next();
    while (actor.done !== true) {
        console.log("" + actor.value);
        actor = actors.next();
    }

    console.log("");
    console.log("----Show cast of the production: " + ser2.title + "----");
    var actors = vs.getCast(ser2);
    var actor = actors.next();
    while (actor.done !== true) {
        console.log("" + actor.value);
        actor = actors.next();
    }

    console.log("");
    console.log("----Show cast of the production: " + ser3.title + "----");
    var actors = vs.getCast(ser3);
    var actor = actors.next();
    while (actor.done !== true) {
        console.log("" + actor.value);
        actor = actors.next();
    }
    console.log("----END GET CAST OF THE PRODUCTION----");
    //get cast of production
    console.log("----END THE VIDEO SYSTEM TEST----");
}
window.onload = testVideoSystem;