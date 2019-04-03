/*
this function taking the details from text file and it is performing a read operation .....
*/
const fs = require('fs');
function displayDetails(){


var data = 	fs.readFileSync('C:/node/node/03_20/code&assignment/first_demo/src/dataWrite/details.txt');
	console.log('displaying details',data.toString());
	var output = JSON.parse(data.toString());
	console.log("returning from src",output);
	return  output;

}




module.exports = displayDetails;