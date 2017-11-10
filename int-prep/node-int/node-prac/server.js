var express = require('express');
var app = express();
app.get('/', function(req, res){
	res.send("this is '/'");
});

app.get('/ab?cd', function(req, res){
	res.send("this is abcd or acd");
});

app.get('/ab+cd', function(req, res){
	res.send("this is abcd, abbbbcd, abbbbbbbcd");
});

app.get('/ab*cd', function(req, res){
	res.send("this is abanythingcd");
});

app.get('/ab+cd', function(req, res){
	res.send("this is abcd, abbbbcd, abbbbbbbcd");
});

app.get(/a/, function(req, res){
	res.send("matches any string that has 'a' letter in it");
});

app.get(/.*fly$/, function(req, res){
	res.send("0should end with 'fly' ");
});

app.get('/books/:bookId', function(req, res){
	res.send(req.params);
});

app.get('/flight/:area-:code', function(req, res){
	res.send(req.params);
});

app.get('/exmple', function(req, res, next){
	res.send("first handler");
	console.log("first handler");
	next();
}, function(req, res, next){
	console.log("second handler");
	next();
}, function(req, res){
	console.log("third handler");
});

app.listen(3000, function(){
	console.log("listening on 3000");
});