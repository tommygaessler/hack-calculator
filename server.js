// requires the express dependency
var express = require('express');
// creates the express instance
var app = express();

// var fs = require('fs');var secret = fs.readFileSync('./secretText.txt'); res.send(secret.toString());return;

// var fs = require('fs');var secret = fs.writeFileSync('./secretText.txt', 'all your base are belong to me -- root');

// route handler to get request /
app.get('/', function(req, res){
  // sends html to the browser
    res.send("HELLO WORLD!");
});

// /add/process.exit()/2
// get request to add/1/2 (example)
app.get('/:operation/:x/:y', function(req, res){
    var operators = {
        add: "+",
        sub: "-",
        mult: "*",
        div: "/"
    }
    var operator = operators[req.params.operation]

    try {
      var result = eval(req.params.x + operator + req.params.y);
      res.send(result.toString());
    }
    catch(error) {
      res.send(error);
    }

});

app.listen(3000, function(){
    console.log("STARTING SERVER ON 3000");
});


// /add/process.exit();
