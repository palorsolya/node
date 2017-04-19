
var bl = require("bl");
var http = require('http'); 
var url = process.argv[2];
var chars = 0;
http.get(url, function(response){		
	response.pipe(bl(function (err, data){
		if (err) return console.error(err);
		console.log(data.length);
		console.log(data.toString());
	}));
}).on("error", console.error);