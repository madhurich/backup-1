var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/myTest');

var db = mongoose.connection;

//on error log the message
db.on('error', function(err){
	console.log('error occured', err);
});

//once the connection is open log the message
db.once('open', function(){
	console.log('connection is done');
});

//schema for our users in myTest database
var userSchema = new mongoose.Schema({
	name: String,
	age: Number,
	dob: Date,
	isAlive: Boolean
}, {strict: false});

userSchema.methods.isYounger = function(){
	return this.model('User').age > 50 ? 'user is older' : ' user is younger';
};

userSchema.pre('save', function(next){
	console.log("should be logged before saving any user");
	var err = new Error("custom error here");
	next(err);
});

//define model for our schema
var User = mongoose.model('User', userSchema);

User.find({name: 'madhuri'}, function(err, data){
	if(err){
		console.log("error in finding user", err);
	}
	console.log(data);
});



//insert some users
// var newUser = new User({
// 	name: 'madhuri',
// 	age: 22,
// 	dob: '02/19/1994',
// 	isAlive: true
// });

// newUser.save(function(err, data){
// 	if(err){
// 		console.log("unable to save", err);
// 	}
// 	console.log("user saved", data);
// });

var mom = new User({
	name: 'mom',
	hobby: 'lollipop'
});

// mom.save(function(err, data){
// 	if(err){
// 		console.log("unable to save", err);
// 	}
// 	console.log("user saved", data);
// });

mom.save(function(err){
	console.log("custom error msg ", err.message);
});

//console.log(newUser.isYounger());


