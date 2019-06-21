var weather = require("weather-js");

var UserSearch = function(name, location) {
    this.name = name;
    this.location = location;
    this.date = Date.now();

    this.weatherFunc = function() {
        weather.find({search: this.location, degreeType: "F"}, function(err, result) {
            if(err) {
                console.log(err);
            }
            
            console.log(JSON.stringify(result[0].current, null, 2));
        });
    };
};

module.exports = UserSearch;