function storeAvailable(){
	try {
		var storage = window[type];
		storage.setItem(x, y);
		storage.removeItem(x);
		return true;

	}
	catch(e){
		return false;
	}
}

if(!localStorage.getItem('hi')){
	populate();
	return true;
}else{
	setStyles();
}

// typeof(Storage) !== 'undefined';
// typeof(window.Storage) !== 'undefined';

//----------
var Person = function(name, age){
	this.name = name;
	this.age = age;
};

var Student = function(name, age, id){
	Person.call(this, name, age);
	this.id = id;
};

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Person;

var s1 = new Student('mad', 22, 3);

console.log(s1);

var invocation = new XMLHttpRequest();
var url = "http://www.otherdomain.com/path/filename";

var body = "<?xml version='1.0'?><person><name>nameHere</name></person>";

function callOtherDomain(){
	if(invocation){
		invocation.open('GET', url, true);
		invocation.setRequestHeader('custom header', 'value here');
		invocation.setRequestHeader('Content-Type', 'application/xml');
		invocation.onreadystatechange = handler;
		invocation.send(body);
	}
}