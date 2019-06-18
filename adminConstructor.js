var fs = require("fs");
var UserSearch = require("./userConstructor");
var moment = require("moment");

var WeatherAdmin = function(userName, searchedLocation, date) {
    this.userName = userName;
    this.searchedLocation = searchedLocation;
    this.date = date;
}

module.exports = WeatherAdmin;