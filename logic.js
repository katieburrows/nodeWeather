//Requiring the admin view constructor.
var WeatherAdmin = require("./adminConstructor");

//Variable that holds command line arguments from the second position on.
var commandLineArgs = process.argv.slice(2);

//New instance built off of the Weather Admin constructor.
var admin = new WeatherAdmin();

//Variable that takes in the command line arguments (skips over [0] and [1]) and then skips past the "user" argument, the name of the user, and holds the location.
var location = commandLineArgs.slice(2);

//Conditionals to sort out if the user entered user or admin into the CLI.
if (commandLineArgs[0].toLowerCase() === "user"){
    //If "user" was typed in then the newUserSearch method from the Weather Admin constructor is called and being fed the user's name and the location that they searched for.
    admin.newUserSearch(commandLineArgs[1], location);   
} 
else if (commandLineArgs[0].toLowerCase() === "admin") {
    //If "admin" was typed in then the getData method from the Weather Admin constructor is called.
    admin.getData();
} 
else {
    //If an invalid entry was written then a console log will tell the user what to type.
    console.log(`not a valid entry, please choose: admin or user`);
}
