var WeatherAdmin = require("./adminConstructor");

var commandLineArgs = process.argv.slice(2);

var admin = new WeatherAdmin();

if (commandLineArgs[0].toLowerCase() === "user"){
    var location = commandLineArgs[2];      
} 
else if (commandLineArgs[0].toLowerCase() === "admin") {
    admin.getData();
} 
else {
    console.log(`not a valid entry, please choose: admin or user`);
}
