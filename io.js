var fs = require('fs');
var buff = fs.readFileSync(process.argv[2]);
var strBuff = buff.toString();
var arrBuff = strBuff.split('\n');
console.log(arrBuff.length-1);

