var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var multer = require('multer');
var upload = multer();



app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());//this can be anywhere, after above stmt
//or before that

var users = [];



app.get('/user', function(req, res){
	res.json(users);
	//console.log('get users use function');
	
	
});



// app.get('/user/mad', function(req, res){
// 	//res.json(users);
// 	console.log('get users get mad function');
// 	res.end();
	
// });

// app.get('/user/*', function(req, res){
// 	console.log('any pattern');
// 	res.end('any pattern');
// });



app.post('/user', function(req, res){
	console.log(req);
	users.push(req.body);
	res.end();
});

app.put('/user/:name', function(req, res){
	var name = req.params.name;
	for(var i = 0; i < users.length; i++){
		//if the name is found, remove that and push the one that
		//you wrote as a part of body(indirectly you are updating the 
		//record)
		if(name === users[i]['name']){
			users.splice(i, 1);
			users.push(req.body);
			break;//break is used to break the iteration
			//if the condition is true once, then the iteration will
			//be stopped
		}
	}
	res.end();//response must be ended, else it will be hanging in
	//air
});

app.delete('/user/:name', function(req, res){
	var name = req.params.name;
	for(var i = 0; i < users.length; i++){
		//if that name is found, then jsut remove it from the
		//array
		if(name === users[i]['name']){
			users.splice(i, 1);
			break;
		}
	}
	res.end();
});

app.listen(3000, function(){
	console.log('listening on port 3000');
});