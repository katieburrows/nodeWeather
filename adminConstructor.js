var fs = require("fs");
var UserSearch = require("./userConstructor");
var moment = require("moment");

var WeatherAdmin = function() {
    this.getData = function() {
    fs.readFile("adminLog.txt", "utf8", function(error, data){
            if (error) {
                console.log(error);
            } else {
                console.log(data);
            }
        });
    }
    this.newUserSearch = function() {
        var newUserSearch = new UserSearch(name, location);
        var text = (`Name: ${newUserSearch.name}\nLocation: ${newUserSearch.location}\nDate: ${moment(newUserSearch.date).format("MM-DD-YYYY")}`);
        
        fs.appendFile("adminLog.txt", text, function(error) {
            if (error) {
                console.log(error);
            }

            newUserSearch.getWeather();
        })
    }



}

module.exports = WeatherAdmin;