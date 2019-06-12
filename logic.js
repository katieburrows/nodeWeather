var weather = require('weather-js');
var fs = require('fs');


weather.find({search: 'San Francisco, CA', degreeType: 'F'}, function(err, result) {
  if(err) console.log(err);
 
  console.log(JSON.stringify(result[0].current, null, 2));
});

//collect cli args
//sort into user or admin
    //if user use args to search weather-js
    //if admin read adminLog.txt and console it