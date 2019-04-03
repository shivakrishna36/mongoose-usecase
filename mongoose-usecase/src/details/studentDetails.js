/*
this fuction provides the details of a student
*/
function studentDetails(student){
	var obj = {};
/*const name = 'shiva';
const id = 101;
const mobileNumber = 8008893955;
const address = 'hyderabad'; 
const DOB = '19970608';*/
try{
if(student.name == null || !isNaN(student.name)){
	
	obj.name = 'invalid';
	
	 throw obj;
}

}
catch(er)
{
	console.log(er);
	return er;
}

try{
	if(student.Address == null || !isNaN(student.Address)){
		
		obj.address = 'invalid';
		
		 throw obj;
	}
	
	}
	catch(er)
	{
		console.log(er);
		return er;
	}

try{
	if(isNaN(student.id) || student.id == null) {
	
	obj.id = 'invalid';
	
	 throw obj;
	}
}
catch(er)
{
	console.log(er);
	return er;
}

try{
	if(student.mobileNumber == null || isNaN(student.mobileNumber) || student.mobileNumber.toString().length!=10){
		
	obj.mobileNumber = 'invalid';
	
	 throw obj;
	}
}
catch(er){
	return er;
}

try{
	if(student.DOB == null || student.DOB.length!=8){
		console.log(typeof(student.DOB));
	obj.DOB = 'invalid';
	
	 throw obj;
	}
}
catch(er){
	return er;
}


obj.name = student.name;
obj.id = student.id;
obj.mobileNumber = student.mobileNumber;
obj.Address = student.Address;
obj.DOB = student.DOB;
return obj;
}

module.exports = studentDetails;