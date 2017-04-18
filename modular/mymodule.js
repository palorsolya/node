

var fs = require('fs');
module.exports = function (dir, ext, callback) {
		fs.readdir(dir, function (err, list) {
			if (err) return callback(err);
			var filtered = list.filter((item) => item.endsWith('.'+ext));			
			callback(null, filtered);		
		})
};

function extension(value){
	return value.endsWith('.'+value);
}
