require("dotenv").config();
var Spotify = require("node-spotify-api");
var request = require("request");

//dd the code required to import the keys.js file and store it in a variable.
var keyCode = require("./keys.js");
var spotify = new Spotify(keyCode.spotify);
var fs = require("fs");

var action = process.argv[2];
var value = process.argv.slice([3]).join('+');  
var movieName = " ";


var getConcert = function(concertValue){
    console.log(concertValue);

request('http://rest.bandsintown.com/artists/' + concertValue + "/events?app_id=codingbootcamp", function (error, response, body) {
    console.log(response.body);
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});
}

var getSpotify = function(songName){
    
    spotify.search(
        {
            type: 'track', 
            query: songName,
        }, 
        function(err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }    
            console.log('DATA FROM SPOTIFY===>', data.tracks.items)
        }
    ) }   

var getMovie = function(movieValue){

var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "/events&y=&plot=short&apikey=trilogy";

request(queryUrl, function(error, response, body){
    if(!error && response.statusCode === 200){
        console.log("Release Year: " + JSON.parse(body).Year)
    }
})
};



function doIt = function(doItValue) {
	fs.readFile("random.txt", "utf8", function(error, data) {
		if (error) {
			return console.log(error);
		} else {
			var dataArr = data.split(",");
			userInput = dataArr[1];
			command = dataArr[0];

			if (command === "get-concert") {
				getConcert();
			} else if (command === "spotify-this-song") {
				spotifyThis();
			} else {}
				movieThis();
			}
		}

		fs.appendFile("log.txt", "User engaged the random file.", function(err) {
			if (err) {
				console.log(err);
			}
		})
	});

switch(action){
    case "concert-this":
    getConcert(value);
    break;                     

    case "spotify-this-song":
    getSpotify(value);
    break;

    case "movie-this":
    getMovie(value);
    break;

    case "do-what-it-says":
    doIt(value);
    break;
};






