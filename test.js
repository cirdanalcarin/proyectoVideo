"use-strict";

//test videoSystem
function testVideoSystem() {
    var category1 = new category("action");
    var director1 = new person("jose", "gomez", "fernandez", "1/4/1950", "images/picture.jpg");
    var actor1 = new person("antonio", "banderas", "", "3/7/1963", "images/picture2.jpg");
    var coordinate1 = new coordinate(-34.000, 56.000);
    //var movie1 = new movie();
    var user1 = new user("ruben");

    console.log(category1.toString());
    console.log(director1);
    console.log(actor1);
    console.log(coordinate1);
    //console.log(movie1);
    console.log(user1);

}
window.onload = testVideoSystem();