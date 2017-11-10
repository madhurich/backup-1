var express = require('express');
var app = express();
var allRoutes = require('./routes');

allRoutes(app);

app.listen(3000, function(){
	console.log('app started');
});


