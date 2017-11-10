var express = require('express');
var app = express();
var people = require('./controllers/peopleMethods');

module.exports = function(app){
	app.get('/people', people.getPeople);
	app.get('/people/:id', people.getPeopleById);
};