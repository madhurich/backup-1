var express = require('express');
var app = express();
var fs = require('fs');
// app.get('/', function(req, res){
// 	res.send('hello all');
// });
	// var http = require('http');
 //  	http.createServer(function(req, res){
 //  		res.writeHead('200', {'Content-Type': 'text/html'});
 //  		res.write('something');
 //  		res.end();
 //  	}).listen('3000', function(){
 //  		console.log("started");
 //  	});

// app.listen(4000, function(){
// 	console.log("listening");
// });

// function giveOrder(orderNum){
// 	console.log("order num ", orderNum);
// 	handleOrder(function(){
// 		console.log("your order " + orderNum + " is ready");
// 	});

// }

// function handleOrder(callback){
// 	setTimeout(callback, 2000);
// }

// giveOrder(1);
// giveOrder(2);
// giveOrder(3);
// giveOrder(4);

//how it is non blocking?
console.log("file reading is about to begin");
fs.readFile('reading', function(err, data){
	var arr, obj = {}, count = 1;
	console.log("file reading has begun");
	if(err){
		console.log("error occured ", err);
	}else{
		arr = data.toString().split('');
		for(var i = 0; i< arr.length; i++){
			for(var j = 0; j < arr.length; j++){
				if(i !== j){
					if(arr[i] === arr[j] && arr[i].match(/[a-zA-Z]/) && arr[j].match(/[a-zA-Z]/)){
						count++;
					}
				}
			}
			obj[arr[i]] = count;
		}
		console.log(obj);
	}
	console.log("file reading has ended");
});

console.log("after read file function");