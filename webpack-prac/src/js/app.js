require('../css/style.css');
let people = require('./people.js');

let $ = require('jquery');

console.log(people);
$.each(people, function(index, elem){
	//console.log();
	$('body').append('<h1>' + elem.name + '</h1>');
});