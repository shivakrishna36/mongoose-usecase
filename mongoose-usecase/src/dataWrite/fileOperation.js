/*
this function writing the student details into a text file ...
*/

var fs = require('fs');
function writeFile(object){
try{
    if(object == null)
    throw 'NULL pointer Exception';
}
catch(er)
{
    return er;
}
let student = object;

 
fs.writeFileSync('C:/node/node/03_20/code&assignment/first_demo/src/dataWrite/details.txt', JSON.stringify(student)); 
//console.log(student);
console.log('updated successfully!');
return 'operation success';
}

module.exports = writeFile;

