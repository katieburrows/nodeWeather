var fs = require("fs");
var UserSearch = require("./userConstructor");
var moment = require("moment");

var WeatherAdmin = function(userName, searchedLocation, date) {
    this.getData = function() {
    fs.readFile("adminLog.txt", "utf8", function(error, data){
            if (error) {
                console.log(error);
            } else {
                console.log(data);
            }
        });
    }
    this.userName = userName;
    this.searchedLocation = searchedLocation;
    this.date = date;


}

module.exports = WeatherAdmin;