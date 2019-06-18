

var WeatherAdmin = require("./adminConstructor");

var commandLineArgs = process.argv.slice(2);

if (commandLineArgs[0].toLowerCase() === "user"){
    var location = commandLineArgs[2];

    weather.find({search: location, degreeType: "F"}, function(err, result) {
        if(err) {
            console.log(err);
        }
        
        console.log(JSON.stringify(result[0].current, null, 2));

        var time = result[0].current.date;
        
        var user = new UserSearch(commandLineArgs[1], commandLineArgs[2], time);

        JSON.stringify(user);

        console.log(user);

        // fs.appendFile("adminLog.txt", user, function(error){
        //     if (error) {
        //         console.log(error);
        //     } else {
        //         console.log(`content added.`);
        //     }
        // });
    });

            
        
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