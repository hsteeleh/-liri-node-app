require("dotenv").config();
//dd the code required to import the keys.js file and store it in a variable.
var keyCode = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var fs = require("fs");

var action = process.argv[2];
var value = process.argv[3];

//module.exports();

// Make it so liri.js can take in one of the following commands:
// concert-this
// spotify-this-song
// movie-this
// do-what-it-says
