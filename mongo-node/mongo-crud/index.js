var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer');
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var assert = require('assert');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var url = 'mongodb://localhost:27017/test';
MongoClient.connect(url, function(err, db){
	assert.equal(null, err);
	console.log('connected');
	// db.createCollection('killer', function(err, collection){
	// 	if(err) throw err;
	// 	console.log(collection);
	// 	db.close();
	// });
	app.get('/killer', function(req, res){
		db.collection('killer').find().toArray(function(err, collection){
			if(err) {
				console.error(err);
				res.status(500).send('something wrong');
			}
			res.json(collection);
			
		});
	});

	app.post('/killer', function(req, res){
		db.collection('killer').insertOne(req.body, function(err, collection){
			if(err) {
				console.error(err);
				res.status(500).send('something wrong');
			}
			res.json(collection);
			
		});
	});

	app.put('/killer/:id', function(req, res){
		console.log(req.params.id);
		var objectId = new ObjectID(req.params.id);
		var obj = {"_id":objectId};
		console.log(obj);
		db.collection('killer').update(obj, req.body, function(err, collection){
			if(err){
				console.error(err);
				res.status(500).send('cannot update');
			}
			res.json(collection);
		});
	});
	
	app.delete('/killer/:id', function(req, res){
		console.log(req.params.id);
		db.collection('killer').remove({"_id": ObjectID(req.params.id)}, function(err, collection){
			if(err){
				console.error(err);
				res.status(500).send('cannot delete');
			}
			res.json(collection);
		});
	});
});

app.use(express.static('public'));

app.listen(3000, function(){
	console.log('started listening on 3000');
});