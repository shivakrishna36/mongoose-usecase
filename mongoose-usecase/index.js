const express = require('express');
const app = express();
const student = require('C:/node js/Node-js-master/Node-js-master/mongoose usecase/src/details/studentDetails.js');
const DOB = require('C:/node js/Node-js-master/Node-js-master/mongoose usecase/src/compute/ageCalculation.js');
const path = require('path');
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

var mongoose = require('mongoose');
var url = "mongodb://localhost:27017/studb";
var dbo;
mongoose.connect(url,{ useNewUrlParser: true });
var db = mongoose.connection;
db.on("error",console.error.bind(console,"err"));
db.once("open",function(callback){
  console.log("connection succeeded.");
});
var Schema = mongoose.Schema;
  var studentSchema = new Schema({
    name: String,
    id: Number,
    mobileNumber: Number,
    Address: String,
    DOB: String,
    age: Number
});


//var stuModel = mongoose.model('studentModel',studentSchema);

var details;/* = new stuModel({
  Name: "shiva",
  Id: 1234,
  mobileNumber: 9874563210,
  Address: "hyd",
  DOB: "19970302"

});*/

/*details.save(function(err){
  console.log('data saved');
  if(err)
  {
    console.error(err);
  }
});*/
app.get('/',(req,res)=>{
  res.sendFile('details.html',
  {
    root: path.join(__dirname,'./public')  
  });
});

app.post('/details',(req,res)=>{
let a = req.body;
console.log(a);

let obj = student(a);
let dateOfBirth = DOB(obj.DOB);
obj.age = dateOfBirth;
//dbo.collection("studentDetails").insertOne(obj,function(err, res) {
  var stuModel = mongoose.model('studentModel',studentSchema);
  details = new stuModel(obj);
  details.save(function(err){
    console.log('data saved');
    if(err)
    {
      console.error(err);
    }
  });
  /*if (err) throw err;
  console.log("1 document inserted");
  
});*/
});
app.get('/details',(req,res)=>{
  
  dbo.collection("studentDetails").findOne({},function(err, result) {
    if (err) throw err;
        
    console.log(result);
    let dateOfBirth = DOB(result.DOB);
    console.log('DOB',dateOfBirth);
    
    
  });
  });
app.listen(4444);
