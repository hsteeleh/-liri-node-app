var request  = require("request");

request("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy" , function(error , response , body){
    if(!error && response.statusCode === 200){
        console.log("song" + JSON.parse(body).Songthing)
    }
});