//*** Dependencies: ***
//fs, moment, and requirng the user constructor.
var fs = require("fs");
var UserSearch = require("./userConstructor");
var moment = require("moment");

//WeatherAdmin constructor.
var WeatherAdmin = function() {
    
    //Setting and defining the getData method to this constructor.
    this.getData = function() {
    
    //Using fs to read the adminLog.txt file, using the standard syntax for that package.
    fs.readFile("adminLog.txt", "utf8", function(error, data){
            if (error) {
                console.log(error);
            } else {
                //If the call was a success return the data from the log.
                console.log(data);
            }
        });
    }

    //Setting and defining the newUserSearch method for this constructor; it's expecting a name and location to be fed through when it's called.
    this.newUserSearch = function(name, location) {

        //Creating an instance of the User Search constructor.
        var newUserSearch = new UserSearch(name, location);

        //Creating the variable that holds the data that comes from the instance of UserSearch and formatting it to be appended to the adminLog.txt file.
        var text = (`\n\nName: ${newUserSearch.name}\nLocation: ${newUserSearch.location}\nDate: ${moment(newUserSearch.date).format("MM-DD-YYYY")}`);
        
        //Appending the text variable that was just created to the adminLog.txt file, using standard fs syntax.
        fs.appendFile("adminLog.txt", text, function(error) {
            if (error) {
                console.log(error);
            }
            //Calling the weatherFunc method from the constructor.
            newUserSearch.weatherFunc();
        })
    }



}

//Exporting this function for use in the main file.
module.exports = WeatherAdmin;