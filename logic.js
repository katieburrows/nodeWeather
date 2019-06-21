var WeatherAdmin = require("./adminConstructor");

var commandLineArgs = process.argv.slice(2);

var admin = new WeatherAdmin();

var location = commandLineArgs.slice(2);

if (commandLineArgs[0].toLowerCase() === "user"){
    admin.newUserSearch(commandLineArgs[1], location);   
} 
else if (commandLineArgs[0].toLowerCase() === "admin") {
    admin.getData();
} 
else {
    console.log(`not a valid entry, please choose: admin or user`);
}
