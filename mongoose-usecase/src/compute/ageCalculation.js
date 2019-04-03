/**
this function calculates the age of a student based on the date of birth!
*/


function calculatingAge(DOB){

    try{
        if(DOB == null || DOB.length!=8){
        
         throw 'invalid';
        }
    }
    catch(er){
        return er;
    }
    

let dob = DOB;
let date = new Date();

let studentDob = dob.substr(0,4);
//console.log(studentDob);
let localYear = date.getFullYear();
//console.log(localYear);
let age = localYear - studentDob;
//console.log('Student age according to date of birth is:'+age);
return age;
}

module.exports = calculatingAge;