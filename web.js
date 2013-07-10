var fs = require("fs");
var buf = fs.readFileSync('./index.html','utf8')
var data= buf.toString();
console.log(data); 
