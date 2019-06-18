var weather = require("weather-js");

var UserSearch = function(name, location) {
    this.name = name;
    this.location = location;
    this.date = Date.now();
}

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

module.exports = UserSearch;