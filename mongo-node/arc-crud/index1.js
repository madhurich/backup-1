var express = require('express');
var app = express();

app.use('/static', express.static('public'));
app.use('/public', express.static('public'));
app.listen(3000, function(req, res){
	console.log('started listening');
});