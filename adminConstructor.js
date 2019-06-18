var fs = require("fs");
var UserSearch = require("./userConstructor");
var moment = require("moment");

var WeatherAdmin = function(userName, searchedLocation, date) {
    this.userName = userName;
    this.searchedLocation = searchedLocation;
    this.date = date;

            // fs.appendFile("adminLog.txt", user, function(error){
        //     if (error) {
        //         console.log(error);
        //     } else {
        //         console.log(`content added.`);
        //     }
        // });
}

module.exports = WeatherAdmin;