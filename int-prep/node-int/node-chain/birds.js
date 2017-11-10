var express = require('express');
var router = express.Router();
var path = require('path');
router.use(function justLog(req, res, next){
	req.myOwnProp = "some_val";
	console.log("must be logged for every bird related route");
	next();
});

router.get('/', function(req, res, next){
	var resText = 'home';
	resText += req.myOwnProp;

	res.send(resText);
});

router.get('/about', function(req, res, next){
	res.send('about');
});

router.get('/contact', function(req, res, next){
	res.sendFile(path.join(__dirname, '/public/views/contact.html'));
	console.log(__dirname);//this is C:\Users\madhu\Desktop\node-int\node-chain
	//the current working project folder
});

module.exports = router;