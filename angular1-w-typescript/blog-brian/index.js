var express = require('express');
var app = express();

app.use(express.static(__dirname));

app.listen(4000, function(){
    console.log('listening on 4000');
});