var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/account", function(req, res) {
    var dummy = {
        "firstname": "varsha",
        "lastname": "p",
        
    }
    if(!req.query.firstname || !req.query.lastname) {
        return res.send({"status": "error", "message": "missing parameter"});
    } else if(req.query.firstname != dummy.firstname) {
        return res.send({"status": "error", "message": "wrong firstname"});
    } else if(req.query.lastname != dummy.lastname) {
        return res.send({"status": "error", "message": "wrong last name"});
    } 
    else {
    	console.log(req.query.firstname);
        return res.send("hello world");
    }
});


var server = app.listen(3000, function () {
    console.log("Listening on port %s...", server.address().port);
});
