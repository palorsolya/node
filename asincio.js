var fs = require('fs');
var str = fs.readFile(process.argv[2], 'utf8', function (err, data) {
	if (err) throw err;
	var arr = data.split('\n');
	console.log(arr.length-1);
});
