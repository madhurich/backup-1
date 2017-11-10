var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, 'app')));

app.listen(3000, function(){
    console.log('started on 3000');
})