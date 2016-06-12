var express = require('express');
var fs = require('fs');
//var bodyParser = require('body-parser');
var app = express(); 

var port = 32528;

//app.use(bodyParser.json());

app.use(express.static(__dirname + '/www'));

app.get('/*', MainWebsite);

function MainWebsite(req, res) {
    fs.readFile('www/index.html', function(error, data){
        if(error) {
        	return res.status(404).send("404 Not found");
        }
        else {
      		res.send(data.toString());
   		}
    });
}

app.listen(port, function () { 
  console.log('Listening');
});