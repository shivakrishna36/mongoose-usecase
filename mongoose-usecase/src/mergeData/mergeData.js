/*
this function merging the details of a student along with age calculated ...
*/


function mergingData(studentDetails,age){
	
	var obj = studentDetails;
	obj.age = age;
	return obj;
}

module.exports = mergingData;