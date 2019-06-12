var weather = require('weather-js');
var fs = require('fs');


weather.find({search: 'San Francisco, CA', degreeType: 'F'}, function(err, result) {
  if(err) console.log(err);
 
//   console.log(JSON.stringify(result[0].current, null, 2));
});

var commandLineArgs = process.argv.slice(2);

    if (commandLineArgs[0].toLowerCase() === 'user'){
        fs.appendFile('adminLog.txt', commandLineArgs.slice(1), function(error){
            if (error) {
                console.log(error);
            } else console.log(`content added.`);
        });
        


    } else if (commandLineArgs[0].toLowerCase() === 'admin'){
        console.log(`admin hit`);
    } else {
        console.log(`not a valid entry, please choose: admin or user`);
    }

//collect cli args
//sort into user or admin
    //if user use args to search weather-js
    //if admin read adminLog.txt and console it