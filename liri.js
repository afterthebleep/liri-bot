console.log("success: you're loaded");

var Twitter = require("twitter");

var keys = require('./keys.js');

var tweets = function() {

  var client = new Twitter(keys);
  var params = { screen_name: "afterthebleep" };
  
  client.get("statuses/user_timeline", params, function(error, tweets, response) {
  
    if (!error) {
      for(var i=0; i<tweets.length; i++) {
        console.log(tweets[i].created_at);
        console.log(tweets[i].text);
      }
    }
  }); 
}

    var input = function(arg, err) {
      switch(arg) {
        case 'tweets': 
              tweets();
              break;
            default:
            console.log('LIRI say Huh?!'); 
      }
    }

var runQuery = function(a, b) {
  input(a, b);
};

runQuery(process.argv[2], process.argv[3]);





 