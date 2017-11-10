
var express = require('express');
var app = express();
var birds = require('./birds');

app.use('/birds', birds);
app.use('/public', express.static('public'));
app.use(function(req, res, next){
	res.status(404).send('page not found in any directory');
});
app.listen(3000, function(){
	console.log("listening on 3000");
});