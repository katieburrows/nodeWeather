var WeatherAdmin = require("./adminConstructor");

var commandLineArgs = process.argv.slice(2);

if (commandLineArgs[0].toLowerCase() === "user"){
    var location = commandLineArgs[2];      
} 
else if (commandLineArgs[0].toLowerCase() === "admin") {
    var admin = new WeatherAdmin(userName, searchedLocation, date);
    console.log(`admin hit`);
} 
else {
    console.log(`not a valid entry, please choose: admin or user`);
}

//collect cli args
//sort into user or admin
    //if user use args to search weather-js
    //if admin read adminLog.txt and console it