//Dependency, requiring the weather-js package.
var weather = require("weather-js");

//Defining the UserSearch constructor; it's expecting a name and location to be fed through when called.
var UserSearch = function(name, location) {
    //Setting the name to the object.
    this.name = name;
    //Setting the location to the object.
    this.location = location;
    //Setting the date to the object by calling on the moment package to get the current date.
    this.date = Date.now();

    //Defining the weatherFunc method.
    this.weatherFunc = function() {

        //Using the weather package's syntax to search a location's weather information using the package's standard syntax.
        weather.find({search: this.location, degreeType: "F"}, function(err, result) {
            if(err) {
                console.log(err);
            }
            
            //Logging out the result, narrowed down to the first location and formatted for readability in the console.
            console.log(JSON.stringify(result[0].current, null, 2));
        });
    };
};

//Exporting UserSearch for use elsewhere.
module.exports = UserSearch;